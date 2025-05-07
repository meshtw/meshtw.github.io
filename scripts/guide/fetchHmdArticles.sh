#!/usr/bin/env bash
set -euo pipefail

# This script fetches HackMD articles from a source file and saves them to a specified output directory.

# Start!!
echo "⬆️ ⬆️ ⬇️ ⬇️ ⬅️ ➡️ ⬅️ ➡️ 🅱️ 🅰️ ▶️"

# Load environment variables
ENV_FILE=".env"
if [[ -f "$ENV_FILE" ]]; then
  # shellcheck disable=SC1090
  source "$ENV_FILE"
else
  echo "❌ .env file not found. Please create one with HMD_SLUG_SOURCE_FILE and HMD_MD_OUT_DIR"
  exit 1
fi

# Validate required variables
: "${HMD_SLUG_SOURCE_FILE:?❌ HMD_SLUG_SOURCE_FILE not set in .env}"
: "${HMD_MD_OUT_DIR:?❌ HMD_MD_OUT_DIR not set in .env}"

echo "🔍 Checking environment variables in .env"

# Terminate if any of the required variables are not set
if [[ -z "$HMD_SLUG_SOURCE_FILE" || -z "$HMD_MD_OUT_DIR" ]]; then
  echo "❌ Required variables not set in .env"
  echo "Please set HMD_SLUG_SOURCE_FILE and HMD_MD_OUT_DIR"
  exit 1
fi

SOURCE_FILE="$HMD_SLUG_SOURCE_FILE"
OUT_DIR="$HMD_MD_OUT_DIR"
DRY_RUN=false

# Check if the script is run with more than one argument
if [[ $# -gt 1 ]]; then
  echo "❌ Invalid arguments. Usage: ./fetchHmdArticles.sh [--dry-run]"
  exit 1
fi

echo "✨ Fetching HackMD articles from source file"
echo ""

# usage: ./fetchHmdArticles.sh [--dry-run]
if [[ "${1:-}" == "--dry-run" ]]; then
  DRY_RUN=true
  echo "📴 Dry run mode: no actual changes will made."
  echo "🪂 To execute, run without --dry-run"
fi

# Check if the source file exists
if [[ ! -f "$SOURCE_FILE" ]]; then
  echo ""
  echo "❌ Source file not found: '$SOURCE_FILE'"  
  exit 1
fi

mkdir -p "$OUT_DIR"

# Detect OS (macOS vs Linux)
if [[ "$(uname)" == "Darwin" ]]; then
  # macOS
  SED_CMD="sed -i .bak" 
  CLEANUP_BAK_FILES=true
else 
  # Linux
  SED_CMD="sed -i" 
  CLEANUP_BAK_FILES=false
fi

while IFS= read -r line; do
  # Skip comments and empty lines
  [[ -z "$line" || "$line" =~ ^\# ]] && continue
  # Extract ID and slug (using >> as delimiter)
  if [[ "$line" =~ ^([^\ ]+)\ *\>\>\ *([^\ ]+) ]]; then
    id="${BASH_REMATCH[1]}"
    slug="${BASH_REMATCH[2]}"
    outfile="$OUT_DIR$slug.md"
    url="https://hackmd.io${id}/download"
    tmpfile=$(mktemp)
    curl -sSL "$url" -o "$tmpfile"
    
    # Fetch and exclude HTML responses
    echo ""
    echo "⏬ Fetching from URL: $url"
    if grep -q "<!DOCTYPE html>" "$tmpfile"; then
      echo "🆑🚮 Skipped (HTML response, possibly 404): $slug"
      rm "$tmpfile"
      continue
    fi

    # Debugging: Check the first few characters of the downloaded file
    echo "📥 Downloaded content (first 20 characters):"
    head -n 1 "$tmpfile" | cut -c1-20

    echo "🆚 Normalize line endings and compare files"
    # Normalize line endings to avoid line ending issues
    $SED_CMD 's/\r//' "$tmpfile"
    [[ "$CLEANUP_BAK_FILES" = true && -f "$tmpfile.bak" ]] && rm "$tmpfile.bak"
    # Check if the output file already exists
    if [[ -f "$outfile" ]]; then
      $SED_CMD 's/\r//' "$outfile"
      [[ "$CLEANUP_BAK_FILES" = true && -f "$outfile.bak" ]] && rm "$outfile.bak"
    fi

    # Compare the downloaded file with the existing file
    if [[ -f "$outfile" ]] && cmp -s "$tmpfile" "$outfile"; then
    echo "✅🚮 Skipped (unchanged): $slug"
    else
      if $DRY_RUN; then
        echo "🔸 Would update: $slug"
      else
        if [[ ! -f "$outfile" ]]; then
          echo "✅🆕 Created: $slug"
        else
          echo "✅⬇️  Updated: $slug"
        fi
        mv "$tmpfile" "$outfile"
      fi
    fi
  else
    echo "⚠️  Skipped line (no match): $line"
  fi
done < "$SOURCE_FILE"

echo ""
echo "⏏️ All Done! All files are up to date."
