// @ts-check
import { defineConfig } from 'astro/config';

import alpinejs from '@astrojs/alpinejs';
import { rehypeHeadingIds } from '@astrojs/markdown-remark';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://meshtw.github.io',
  integrations: [alpinejs()],
  vite: {
    plugins: [tailwindcss()],
  },
export default defineConfig({});
});
