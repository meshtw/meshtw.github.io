import { visit } from 'unist-util-visit';

const createIframeElement = (src) => {
  return `<iframe src="${src}" width="100%" class="aspect-video" frameborder="0" allowfullscreen loading="lazy"></iframe>`;
};
const YOUTUBE_REGEX = /^{%\s*youtube\s+([\w-]+)\s*%}$/;
const VIMEO_REGEX = /^{%\s*vimeo\s+([\w-]+)\s*%}$/;

// TO-DO: Implement handling for speakerdeck, slideshare, pdf, gist, figma, hackmd, and etc.

/**
 * Remark plugin to convert `{%youtube ID%}` or `{%vimeo ID%}` into `<iframe />` blocks.
 */
export default function remarkHmdMarkdocs() {
  return (tree) => {
    visit(tree, 'paragraph', (node, index, parent) => {
      const textNode = node.children?.[0];
      if (!textNode || textNode.type !== 'text') return;

      const value = textNode.value.trim();
      const youtubeMatch = value.match(YOUTUBE_REGEX);
      const vimeoMatch = value.match(VIMEO_REGEX);

      if (youtubeMatch) {
        const id = youtubeMatch[1];
        parent.children[index] = {
          type: 'html',
          value: createIframeElement(
            `https://www.youtube.com/embed/${id}?rel=0&modestbranding=1&showinfo=0&controls=0`,
          ),
        };
      } else if (vimeoMatch) {
        const id = vimeoMatch[1];
        parent.children[index] = {
          type: 'html',
          value: createIframeElement(`https://player.vimeo.com/video/${id}`),
        };
      }
    });
  };
}
