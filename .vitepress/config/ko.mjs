import { defineConfig } from 'vitepress'

export const ko = defineConfig({
  lang: 'ko-KR',
  description: 'Vite 및 Vue 기반 정적 사이트 생성기.',

  themeConfig: {
    nav: nav(),

    sidebar: {
      '/guide/': { base: '/guide/', items: sidebarGuide() },
      '/reference/': { base: '/reference/', items: sidebarReference() }
    },

    // editLink: {
    //   pattern: 'https://github.com/vuejs/vitepress/edit/main/docs/:path',
    //   text: '이 페이지 편집 제안하기'
    // },

    // footer: {
    //   message: 'Released under the MIT License.',
    //   copyright: 'Copyright © 2019-present Evan You'
    // },

    docFooter: {
      prev: '이전',
      next: '다음'
    },

    outline: {
      label: '이 페이지 목차'
    },

    lastUpdated: {
      text: '업데이트 날짜'
    },

    langMenuLabel: '언어 변경',
    returnToTopLabel: '맨 위로 돌아가기',
    sidebarMenuLabel: '사이드바 메뉴',
    darkModeSwitchLabel: '다크 모드',
    lightModeSwitchTitle: '라이트 모드로 변경',
    darkModeSwitchTitle: '다크 모드로 변경'
  }
})

function nav() {
  return [
    {
      text: '가이드',
      link: '/guide/what-is-vladops',
      activeMatch: '/guide/'
    },
    {
      text: '레퍼런스',
      link: '/reference/site-config',
      activeMatch: '/reference/'
    },
  ]
}

function sidebarGuide() {
  return [
    {
      text: '소개',
      collapsed: false,
      items: [
        {
          text: 'VitePress란 무엇인가?',
          link: 'what-is-vladops'
        },
        {
          text: '시작하기',
          link: 'getting-started'
        },
      ]
    },
    {
      text: '글쓰기',
      collapsed: false,
      items: [
        {
          text: '마크다운 확장 기능',
          link: 'markdown'
        },
      ]
    },
    {
      text: '구성 & API 레퍼런스',
      base: '/reference/',
      link: 'site-config'
    }
  ]
}

function sidebarReference() {
  return [
    {
      text: '레퍼런스',
      items: [
        { text: '사이트 구성', link: 'site-config' },
        {
          text: '기본 테마',
          base: '/ko/reference/default-theme-',
          items: [
            { text: '개요', link: 'config' },
            { text: '네비게이션 바', link: 'nav' },
          ]
        }
      ]
    }
  ]
}
