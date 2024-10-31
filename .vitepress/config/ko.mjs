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
      text: '제품 가이드',
      link: '/guide/what-is-vladops',
      activeMatch: '/guide/'
    },
    {
      text: '개발자 문서',
      link: '/reference/overview',
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
          text: 'VLAD Ops란 무엇인가?',
          link: 'what-is-vladops'
        },
        {
          text: '시작하기',
          link: 'getting-started'
        },
      ]
    },
    {
      text: '프로젝트',
      collapsed: false,
      items: [
        {
          text: '프로젝트 생성',
        },
        {
          text: '환경 설정',
          items: [
            {
              text: '접근 권한'
            },
            {
              text: '이미지 메타'
            },
            {
              text: '어노테이션 타입'
            },
            {
              text: '모델 타입'
            },
            {
              text: '모델셋 타입'
            },
            {
              text: '모델셋 배포 관리'
            },
            {
              text: '불량 유형'
            },
            {
              text: '서비스 위치'
            },
            {
              text: '기타 설정'
            },
          ]
        },
      ]
    },
    {
      text: '데이터',
      collapsed: false,
      items: [
        {
          text: '데이터셋',
        },
        {
          text: '데이터 업로드',
        },
        {
          text: '데이터 다운로드',
        }
      ]
    },
    {
      text: '레이블링',
      collapsed: false,
      items: [
        {
          text: '레이블링',
        }
      ]
    },
    {
      text: '모델',
      collapsed: false,
      items: [
        {
          text: '학습 커널',
        },
        {
          text: '모델 학습',
        },
        {
          text: '모델 검증',
        },
        {
          text: '모델 관리',
        },
      ]
    },
    {
      text: '연동',
      collapsed: false,
      items: [
        {
          text: '모델셋',
        },
        {
          text: '룰 파라미터',
        },
        {
          text: 'DL 파라미터',
        },
        {
          text: '배포 및 배포 현황',
        },
      ]
    },
    {
      text: '서비스 상태',
      collapsed: false,
      items: [
        {
          text: '서비스 상태',
        }
      ]
    },
  ]
}

function sidebarReference() {
  return [
    {
      text: '시작하기',
      collapsed: false,
      items: [
        {
          text: '개요',
          link: 'overview'
        },
        {
          text: '프로젝트 키 확인하기',
          link: 'project-key'
        }
      ]
    },
    {
      text: '학습 커널',
      items: [
        { text: '개념', link: 'kernel-overview' },
        { text: '인터페이스', link: 'kernel-interface' },
      ]
    },
    {
      text: '외부 시스템 연동',
      items: [
        { text: '개념'},
        { text: '데이터'},
        { text: '배포'},
      ]
    }
  ]
}
