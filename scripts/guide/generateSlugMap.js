import fs from 'fs';
import dotenv from 'dotenv';

dotenv.config();

const input = process.env.HMD_SLUG_SOURCE_FILE;
const output = process.env.HMD_SLUG_OUTPUT_FILE;

if (!input || !output) {
  console.error(
    '❌ Missing environment variables HMD_SLUG_SOURCE_FILE or HMD_SLUG_OUTPUT_FILE',
  );
  process.exit(1);
}

console.log(`✨ Generating from ${input}...`);

if (process.argv.includes('--dry-run')) {
  console.log('📴 Dry run mode: no actual changes will made.');
  console.log('🪂 To execute, run without --dry-run');
}

const lines = fs.readFileSync(input, 'utf8').split('\n');
const out = ['// This file is auto-generated from slugMap.source.txt\n'];
out.push('export const slugMap = {');

for (const line of lines) {
  const trimmed = line.trim();
  if (!trimmed || trimmed.startsWith('#')) {
    continue;
  }

  const match = trimmed.match(/^([^#]+?)>>\s*([^\s#]+)\s*(#\s*(.*))?$/);
  console.log(`🔍 Processing: ${line}`);
  if (match) {
    const [, id, slug, , comment] = match;
    if (comment) out.push(`  // ${comment.trim()}`);
    out.push(`  '${id.trim()}': '${slug.trim()}',`);
  } else {
    // check line number
    console.log(`⚠️  ⬆️ INVALID FORMAT, PLEASE CHECK ⬆️ `);
  }
}

out.push('};\n');
out.push('export default slugMap;');

if (process.argv.includes('--dry-run')) {
  console.log(`✅ Dry run completed successfully.`);
  console.log('🚮 Note: No changes made to the file.');
  process.exit(0);
}

fs.writeFileSync(output, out.join('\n') + '\n');

console.log(`✅ Generated '${output}' successfully.`);
console.log('💾 File written successfully.');
console.log('✨ All Done!');
console.log('⏏️ Please check the generated file for accuracy.');
