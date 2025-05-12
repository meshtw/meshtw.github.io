// @ts-check
import { defineConfig } from 'astro/config';

import alpinejs from '@astrojs/alpinejs';
import { rehypeHeadingIds } from '@astrojs/markdown-remark';
import tailwindcss from '@tailwindcss/vite';
import emoji from 'remark-emoji';
import remarkDirective from 'remark-directive';
// @ts-expect-error --no-types-available
import remarkCalloutDirectives from '@microflash/remark-callout-directives';

import remarkHmdMarkdocs from './src/lib/remarkHmdMarkdocs.js';
import remarkHmdSlugConversion from './src/lib/remarkHmdSlugConversion.js';
import remarkTableOfContents from './src/lib/remarkHmdToc.js';

// https://astro.build/config
export default defineConfig({
  site: 'https://meshtw.github.io',
  integrations: [alpinejs()],
  vite: {
    plugins: [tailwindcss()],
  },
  markdown: {
    remarkPlugins: [
      emoji,
      remarkDirective,
      [
        remarkCalloutDirectives,
        {
          aliases: {
            info: 'note',
            success: 'commend',
            danger: 'deter',
            warning: 'warn',
          },
        },
      ],
      remarkHmdMarkdocs,
      remarkHmdSlugConversion,
      remarkTableOfContents,
    ],
    rehypePlugins: [rehypeHeadingIds],
  },
});
