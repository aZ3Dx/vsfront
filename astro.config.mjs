// @ts-check
import { defineConfig } from 'astro/config';
import svgr from 'vite-plugin-svgr';
import tailwindcss from '@tailwindcss/vite';

import react from '@astrojs/react';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://visualstudio.pe',

  vite: {
    plugins: [svgr(), tailwindcss()],
  },

  integrations: [react(), mdx(), sitemap()],
});
