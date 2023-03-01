import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import tailwind from '@astrojs/tailwind';
import astroI18next from "astro-i18next";
import prefetch from '@astrojs/prefetch';

// https://astro.build/config
import compress from "astro-compress";

// https://astro.build/config
export default defineConfig({
  site: 'https://www.erictrigo.dev',
  integrations: [mdx(), tailwind(), astroI18next(), prefetch(), compress()]
});