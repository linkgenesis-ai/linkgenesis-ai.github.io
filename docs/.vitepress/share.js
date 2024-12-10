import { defineConfig } from 'vitepress';
import { enUS } from 'date-fns/locale';
import { keywords } from './meta.js';

export const shareConfig = defineConfig({
  title: 'VLAD Ops',

  rewrites: {
    'ko/:rest*': ':rest*',
  },

  lastUpdated: true,
  cleanUrls: true,
  metaChunk: true,

  // TODO: 샘플에서 링크가 죽어도 무시하도록 설정, 운영에서는 false로 변경
  ignoreDeadLinks: true,

  markdown: {
    math: true,
    codeTransformers: [
      // We use `[!!code` in demo to prevent transformation, here we revert it back.
      {
        postprocess(code) {
          return code.replace(/\[\!\!code/g, '[!code');
        },
      },
    ],
  },

  sitemap: {
    hostname: 'https://linkgenesis-ai.github.io',
    lastmodDateOnly: true,
    // transformItems(items) {
    //   return items.filter((item) => !item.url.includes('migration'))
    // }
  },
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    blog: {
      // title: 'Linkgenesis AI R&D Blog',
      // description: '',
      defaultAuthor: 'Writer',
      categoryIcons: {
        article: 'i-[carbon/notebook]',
        tutorial: 'i-[carbon/book]',
        document: 'i-[carbon/document]',
      },
      tagIcons: {
        github: 'i-[carbon/logo-github]',
        vue: 'i-[carbon/logo-vue]',
        'web development': 'i-[carbon/development]',
        javascript: 'i-[logos/javascript]',
        html: 'i-[logos/html-5]',
      },
      dateConfig: {
        format: 'yyyy/MM/dd',
        locale: enUS,
      },
      giscus: {
        repo: '',
        repoId: '',
        category: 'General',
        categoryId: '',
        mapping: 'pathname',
        inputPosition: 'top',
        lightTheme: 'light',
        darkTheme: 'transparent_dark',
        defaultEnable: false,
      },
    },
  },
  head: [
    ['meta', { property: 'og:type', content: 'website' }],
    ['meta', { property: 'og:site_name', content: 'VLAD Ops' }],
    [
      'meta',
      { name: 'apple-mobile-web-app-status-bar-style', content: 'default' },
    ],
    ['meta', { name: 'keywords', content: keywords }],
    // ['meta', { property: 'og:image', content: 'https://linkgenesis-ai.github.io/ko/main-functions.png' }],
    // ['meta', { property: 'og:url', content: 'https://linkgenesis-ai.github.io/' }],
    [
      'script',
      {
        async: '',
        src: 'https://www.googletagmanager.com/gtag/js?id=G-P6WWQXT3BW',
      },
    ],
    [
      'script',
      {},
      `window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'G-P6WWQXT3BW');`,
    ],
  ],
});
