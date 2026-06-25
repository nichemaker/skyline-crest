import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://www.skylinecrest.co.in',
  integrations: [sitemap()],
  output: 'static',
});
