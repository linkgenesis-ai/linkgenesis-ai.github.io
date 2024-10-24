import { defineConfig } from 'vitepress'

export const en = defineConfig({
  lang: 'en-US',
  description: 'Vite & Vue powered static site generator.',

  themeConfig: {
    nav: nav(),

    sidebar: {
      '/en/guide/': { base: '/en/guide/', items: sidebarGuide() },
      '/en/reference/': { base: '/en/reference/', items: sidebarReference() }
    },

    // editLink: {
    //   pattern: 'https://github.com/vuejs/vitepress/edit/main/docs/:path',
    //   text: 'Edit this page on GitHub'
    // },

    // footer: {
    //   message: 'Released under the MIT License.',
    //   copyright: 'Copyright © 2019-present Evan You'
    // }
  }
})

function nav() {
  return [
    {
      text: 'Guide',
      link: '/en/guide/what-is-vladops',
      activeMatch: '/en/guide/'
    },
    {
      text: 'Reference',
      link: '/en/reference/site-config',
      activeMatch: '/en/reference/'
    },
  ]
}

function sidebarGuide() {
  return [
    {
      text: 'Introduction',
      collapsed: false,
      items: [
        {
          text: 'What is VitePress?',
          link: 'what-is-vladops'
        },
        {
          text: 'Getting Started',
          link: 'getting-started'
        },
      ]
    },
    {
      text: 'Writing',
      collapsed: false,
      items: [
        {
          text: 'Markdown Extensions',
          link: 'markdown'
        },
      ]
    },
    {
      text: 'Config & API Reference',
      base: '/en/reference/',
      link: 'site-config'
    }
  ]
}

function sidebarReference() {
  return [
    {
      text: 'Reference',
      items: [
        { text: 'Site Config', link: 'site-config' },
        {
          text: 'Default Theme',
          base: '/en/reference/default-theme-',
          items: [
            { text: 'Overview', link: 'config' },
            { text: 'Nav', link: 'nav' },
          ]
        }
      ]
    }
  ]
}
