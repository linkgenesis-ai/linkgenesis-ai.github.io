import { defineConfig } from 'vitepress';
import { processData } from '../../src/config/index.js';
import { en } from './locales/en.js';
import { ko } from './locales/ko.js';
import { shareConfig } from './share.js';

// https://vitepress.dev/reference/site-config
export default defineConfig({
  ...shareConfig,
  locales: {
    root: { label: '한국어', ...ko },
    en: { label: 'English', ...en },
  },
  async transformPageData(pageData, ctx) {
    await processData(pageData, ctx);
  },
});
