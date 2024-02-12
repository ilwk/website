import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import tailwind from '@astrojs/tailwind';
import icon from 'astro-icon';

import sitemap from '@astrojs/sitemap';
import { SITE } from './src/consts';

// https://astro.build/config
export default defineConfig({
  site: SITE.website,
  integrations: [mdx(), sitemap(), tailwind(), icon()],
  markdown: {
    shikiConfig: {
      theme: 'one-dark-pro',
    },
  },
});
