import { defineConfig } from 'vitepress';
import { siteUrlEN, titleEN, descriptionEN } from '../meta.js';

export const en = defineConfig({
  lang: 'en-US',
  description: descriptionEN,

  themeConfig: {
    nav: nav(),

    sidebar: {
      '/en/guide/': { base: '/en/guide/', items: sidebarGuide() },
      '/en/reference/': { base: '/en/reference/', items: sidebarReference() },
    },

    // editLink: {
    //   pattern: 'https://github.com/vuejs/vitepress/edit/main/docs/:path',
    //   text: 'Edit this page on GitHub'
    // },

    // footer: {
    //   message: 'Released under the MIT License.',
    //   copyright: 'Copyright © 2019-present Evan You'
    // }
  },
  head: [
    ['meta', { property: 'og:title', content: titleEN }],
    ['meta', { property: 'og:description', content: descriptionEN }],
    ['meta', { property: 'og:url', content: siteUrlEN }],
    ['meta', { property: 'og:locale', content: 'en_US' }],
    [
      'meta',
      {
        name: 'apple-mobile-web-app-title',
        content: titleEN,
      },
    ],
  ],
});

function nav() {
  return [
    // {
    //   text: 'Guide',
    //   link: '/en/guide/intro-vladops',
    //   activeMatch: '/en/guide/'
    // },
    // {
    //   text: 'Reference',
    //   link: '/en/reference/introduction',
    //   activeMatch: '/en/reference/'
    // },
    {
      text: 'Blog',
      activeMatch: '/en/blog/',
      items: [
        {
          text: 'Blog Home',
          link: '/en/blog/',
          activeMatch: '/en/blog/$',
        },
        {
          text: 'Archives',
          link: '/en/blog/archives',
          activeMatch: '/en/blog/archives',
        },
      ],
    },
  ];
}

function sidebarGuide() {
  return [
    {
      text: 'Introduction',
    },
  ];
}

function sidebarReference() {
  return [
    {
      text: 'Reference',
    },
  ];
}
