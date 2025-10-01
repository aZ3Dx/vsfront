// @ts-check
import { defineConfig } from 'astro/config';
import svgr from 'vite-plugin-svgr';
import tailwindcss from '@tailwindcss/vite';

import react from '@astrojs/react';

import mdx from '@astrojs/mdx';

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [svgr(), tailwindcss()],
  },

  integrations: [react(), mdx()],
});
