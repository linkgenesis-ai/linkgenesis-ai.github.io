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
      link: 'what-is-vladops',
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
      text: '프로젝트 관리',
      link: 'intro-project',
      collapsed: false,
      items: [
        {
          text: '프로젝트 목록',
          link: 'project-list'
        },
        {
          text: '프로젝트 생성',
          link: 'create-project'
        },
        {
          text: '프로젝트 설정',
          link: 'intro-project-settings',
          collapsed: false,
          items: [
            {
              text: '프로젝트 정보 확인 및 수정',
              link: 'project-info',
            },
            {
              text: '접근 권한 설정',
              link: 'access-control',
            },
            {
              text: '이미지 메타 데이터 설정',
              link: 'image-meta',
            },
            {
              text: '어노테이션 타입 설정',
              link: 'annotation-type',
            },
            {
              text: '모델 타입 설정',
              link: 'model-type',
            },
            {
              text: '모델셋 타입 설정',
              link: 'modelset-type',
            },
            {
              text: '모델셋 배포 관리 설정',
              link: 'modelset-deploy',
            },
            {
              text: '불량 유형 설정',
              link: 'defect-type',
            },
            {
              text: '서비스 위치 설정',
              link: 'service-location',
            },
            {
              text: '시스템 설정',
              link: 'system-settings',
            },
          ]
        },
      ]
    },
    {
      text: '데이터 관리',
      link: 'intro-data',
      collapsed: false,
      items: [
        {
          text: '데이터셋 관리',
          link: 'manage-dataset'
        },
        {
          text: '데이터 가져오기',
          link: 'import-data'
        },
        {
          text: '데이터 내보내기',
          link: 'export-data'
        }
      ]
    },
    {
      text: '레이블링',
      link: 'intro-labeling',
      collapsed: false,
      items: [
        {
          text: '이미지 조회',
          link: 'labeling-search'
        },
        {
          text: '레이블링',
          link: 'labeling-labeling'
        },
        {
          text: '데이터셋 생성',
          link: 'labeling-create-dataset'
        },
        {
          text: '이미지 삭제',
          link: 'labeling-delete'
        },
      ]
    },
    {
      text: '학습 및 검증',
      link: 'intro-training-validation',
      collapsed: false,
      items: [
        {
          text: '학습 커널',
          link: 'kernel'
        },
        {
          text: '모델 학습',
          link: 'training'
        },
        {
          text: '모델 검증',
          link: 'validation'
        },
        {
          text: '활성 모델',
          link: 'activated-model'
        },
      ]
    },
    {
      text: '외부 서비스 연동 관리',
      link: 'intro-external-service',
      collapsed: false,
      items: [
        {
          text: '모델셋 관리',
          link: 'manage-modelset'
        },
        {
          text: '룰 파라미터 관리',
          link: 'manage-rule-parameter'
        },
        {
          text: 'DL 파라미터 관리',
          link: 'manage-dl-parameter'
        },
        {
          text: '배포 현황',
          link: 'deployment-status'
        },
      ]
    },
    {
      text: '서비스 상태 모니터링',
      link: 'service-status',
      collapsed: false,
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
        { text: '모델 학습 환경', link: 'kernel-overview' },
        {
          text: '학습의 시작', link: 'kernel-if-training-start',
          items: [
            {text: '학습 설정 파일', link: 'kernel-if-training-start-vlad-training-json'},
            {text: '모델 설정 파일', link: 'kernel-if-training-start-model-json'},
            {text: '학습 데이터', link: 'kernel-if-training-start-dataset'}
          ]
        },
        {
          text: '학습 상태와 결과', link: 'kernel-if-training-end',
          items: [
            {text: '학습 상태', link: 'kernel-if-training-end-state'},
            {text: '학습 결과', link: 'kernel-if-training-end-result'},
          ]
        },
        {
          text: '검증 진행과 완료', link: 'kernel-if-validation-end',
          items: [
            {text: '검증 진행 상태', link: 'kernel-if-validation-end-state'},
            {text: '검증 결과', link: 'kernel-if-validation-end-result'},
          ]
        }
      ]
    },
    {
      text: '외부 시스템 연동',
      items: [
        { text: '개요', link: 'ext-system-integration-overview' },
        { text: '데이터'},
        { text: '배포'},
      ]
    }
  ]
}
