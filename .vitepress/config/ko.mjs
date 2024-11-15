import { defineConfig } from 'vitepress'

export const ko = defineConfig({
  lang: 'ko-KR',
  description: 'Vite 및 Vue 기반 정적 사이트 생성기.',

  themeConfig: {
    nav: nav(),

    sidebar: {
      '/guide/': { base: '/guide/', items: sidebarGuide() },
      '/reference/': { base: '/reference/', items: sidebarReference() },
      '/blog/': { base: '/blog/', items: sidebarBlog() }
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
      link: '/guide/intro-vladops',
      activeMatch: '/guide/'
    },
    {
      text: '개발자 문서',
      link: '/reference/overview',
      activeMatch: '/reference/'
    },
    {
      text: '블로그',
      link: '/blog/hello',
      activeMatch: '/blog/'
    },
  ]
}

function sidebarGuide() {
  return [
    {
      text: '소개',
      link: 'intro-vladops',
      collapsed: false,
      items: [
        {
          text: 'VLAD Ops란 무엇인가?',
          link: 'intro-vladops'
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
          link: 'project-create'
        },
        {
          text: '프로젝트 설정',
          link: 'intro-project-settings',
          collapsed: false,
          items: [
            {
              text: '프로젝트 정보 확인 및 수정',
              link: 'project-settings-info',
            },
            {
              text: '접근 권한 관리',
              link: 'project-settings-access-control',
            },
            {
              text: '이미지 메타 데이터 설정',
              link: 'project-settings-image-meta',
            },
            {
              text: '어노테이션 타입 설정',
              link: 'project-settings-annotation-type',
            },
            {
              text: '모델 타입 설정',
              link: 'project-settings-model-type',
            },
            {
              text: '모델셋 타입 설정',
              link: 'project-settings-modelset-type',
            },
            {
              text: '모델셋 배포 관리 설정',
              link: 'project-settings-modelset-deploy',
            },
            {
              text: '불량 유형 설정',
              link: 'project-settings-defect-type',
            },
            {
              text: '서비스 위치 설정',
              link: 'project-settings-service-location',
            },
            {
              text: '시스템 설정',
              link: 'project-settings-system-settings',
            },
          ]
        },
      ]
    },
    {
      text: '데이터 관리',
      link: 'intro-dataset',
      collapsed: false,
      items: [
        {
          text: '실시간 업로드',
          link: 'dataset-global'
        },
        {
          text: '데이터셋 관리',
          link: 'dataset-list'
        },
        {
          text: '데이터 가져오기',
          link: 'dataset-import'
        },
        {
          text: '데이터셋 상세 정보',
          link: 'dataset-detail'
        },
        {
          text: '데이터셋 복제',
          link: 'dataset-clone'
        },
        {
          text: '데이터셋 삭제',
          link: 'dataset-delete'
        },
        {
          text: '데이터 내보내기',
          link: 'dataset-export'
        },
        {
          text: '이미지 메타 업데이트',
          link: 'dataset-update-meta'
        },
        {
          text: '데이터셋 생성',
          link: 'dataset-create'
        },
        {
          text: '기존 데이터셋에 추가',
          link: 'dataset-append'
        },
        {
          text: '이미지 부분 삭제',
          link: 'dataset-partial-delete'
        },
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
          text: '어노테이션 작성',
          link: 'labeling-create'
        },
        {
          text: '어노테이션 수정',
          link: 'labeling-modify'
        },
        {
          text: '어노테이션 삭제',
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
          link: 'training-training-kernel'
        },
        {
          text: '모델 학습',
          link: 'training-model-training'
        },
        {
          text: '모델 검증',
          link: 'training-model-validation'
        },
        {
          text: '활성 모델',
          link: 'training-activated-model'
        },
      ]
    },
    {
      text: '외부 서비스 연동 관리',
      link: 'intro-external-service',
      // collapsed: false,
      // items: [
      //   {
      //     text: '모델셋 관리',
      //     // link: 'external-manage-modelset'
      //   },
      //   {
      //     text: '룰 파라미터 관리',
      //     // link: 'external-manage-rule-parameter'
      //   },
      //   {
      //     text: 'DL 파라미터 관리',
      //     // link: 'external-manage-dl-parameter'
      //   },
      // ]
    },
    {
      text: '서비스 상태 모니터링',
      link: 'intro-service-status',
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
          text: '학습의 진행', link: 'kernel-if-training-end',
          items: [
            {text: '학습 상태', link: 'kernel-if-training-end-state'},
            {text: '학습 결과', link: 'kernel-if-training-end-result'},
          ]
        },
        {
          text: '검증의 진행', link: 'kernel-if-validation-end',
          items: [
            {text: '검증 상태', link: 'kernel-if-validation-end-state'},
            {text: '검증 결과', link: 'kernel-if-validation-end-result'},
          ]
        },
        {
          text: '학습 커널 패키징', link: 'kernel-packaging',
          items: [
            {text: '커널 파일', link: 'kernel-packaging-kernel'},
            {text: '모델 설정 스키마', link: 'kernel-packaging-schema'},
          ]
        },
      ]
    },
    {
      text: '외부 시스템 연동',
      items: [
        { text: '개요', link: 'ext-system-integration-overview' },
        // { text: '데이터'},
        // { text: '배포'},
      ]
    }
  ]
}

function sidebarBlog() {
  return [
    {
      text: '방문을 환영합니다',
      link: 'hello'
    },
  ]
}
