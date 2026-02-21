// @ts-check
import { defineConfig } from 'astro/config';
import netlify from '@astrojs/netlify';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://astrid-lindgren-zentrum.at',
  output: 'server',
  adapter: netlify({
    imageCDN: true,
  }),
  integrations: [
    sitemap({
      i18n: {
        defaultLocale: 'de',
        locales: { de: 'de-AT' },
      },
    }),
  ],
  vite: {
    ssr: {
      noExternal: ['googleapis'],
    },
  },
});