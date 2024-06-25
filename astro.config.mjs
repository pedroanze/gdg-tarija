import { defineConfig } from 'astro/config';

import tailwind from "@astrojs/tailwind";

export default defineConfig({
  site: 'https://amilkardominguez.github.io',
  base: 'gdg-tarija',
  integrations: [tailwind()]
});
