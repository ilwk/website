import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import tailwind from "@astrojs/tailwind";

import sitemap from "@astrojs/sitemap";
import { SITE } from "./src/consts";

// https://astro.build/config
export default defineConfig({
  site: SITE.WEBSITE,
  integrations: [mdx(), sitemap(), tailwind()],
  markdown: {
    shikiConfig: {
      theme: "one-dark-pro",
    },
  },
});
