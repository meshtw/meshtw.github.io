import { visit } from 'unist-util-visit';

function getNodeValue(node) {
  return node.children
    .map((child) => child.value ?? getNodeValue(child))
    .join('');
}

export default function remarkTableOfContents() {
  return (tree, file) => {
    const toc = [];

    visit(tree, 'heading', (node, index, parent) => {
      // Only consider top level headings
      if (parent.type !== 'root') return;

      const depth = node.depth;
      const title = getNodeValue(node);

      const href = title.toLowerCase().replace(/\//g, '').replace(/\s+/g, '-');

      toc.push({ depth, title, href: `#${href}` });
    });

    file.data.astro.frontmatter.tableOfContents = toc;
  };
}
