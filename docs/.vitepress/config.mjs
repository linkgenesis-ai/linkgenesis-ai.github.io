import { defineConfig } from 'vitepress';
import { processData } from "../../src/config/index.js";
import { en } from './locales/en.mjs';
import { ko } from './locales/ko.mjs';
import { shareConfig } from './share.mjs';

// https://vitepress.dev/reference/site-config
export default defineConfig({
  ...shareConfig,
  locales: {
    root: { label: '한국어', ...ko },
    // en: { label: 'English', ...en },
  },
  async transformPageData(pageData, ctx) {
    await processData(pageData, ctx);
  },
});
