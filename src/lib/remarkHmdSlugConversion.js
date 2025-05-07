import { visit } from 'unist-util-visit';
import { slugMap } from '../data/guide/_slugMap.generated.js';

const PREFIX = '/guide';

/**
 * Remark plugin to replace slugs in links and text.
 * This is used to convert HackMD slugs to Astro slugs from generated map.
 *
 * @returns {import('unified').Plugin<[], import('mdast').Root>}
 */
export default function remarkHmdSlugConversion() {
  return (tree) => {
    visit(tree, ['link', 'text'], (node) => {
      if (node.type === 'link') {
        const href = node.url;
        const slug = slugMap[href];
        if (slug) {
          node.url = `${PREFIX}${slug}`;
        }
      } else if (node.type === 'text') {
        const text = node.value;
        const slug = slugMap[text];
        if (slug) {
          node.value = `${PREFIX}${slug}`;
        }
      }
    });
  };
}
