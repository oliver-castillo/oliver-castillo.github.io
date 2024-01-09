import { defineConfig } from 'astro/config';

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: 'https://oliver-castillo.github.io',
  base: '/oliver-castillo.github.io',
  integrations: [tailwind()]
});