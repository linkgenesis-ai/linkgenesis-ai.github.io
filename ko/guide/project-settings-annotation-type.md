---
outline: deep
---

# 어노테이션 타입 설정

![어노테이션 타입](/public/ko/project/project-settings-annotation-type.png)


## 개요
어노테이션 타입 정보를 관리할 수 있습니다.

### 레이블링 유형  
어노테이션이 어떤 레이블링 작업에 사용될 수 있는지 설정합니다.
::: info 레이블링 유형
- CL : Classification (분류)
- SEG : Segmentation (분할)
- OD : Object Detection (객체 검출)
- RC : Regional Classification (영역 분류)
:::

### 이미지 카테고리
어노테이션의 레이블링 유형이 CL 로 설정된 경우, 포함될 이미지 카테고리 목록을 설정합니다.

### Tool 유형
어노테이션이 선택되었을 때 선택될 기본 작성 도구를 설정합니다.
::: info 도구
- RECT : 사각형 도구 (SEG, OD, RC 유형에서 선택 가능)
- POLYGON : 다각형 도구 (SEG 유형에서 선택 가능)
- BRUSH : 붓 도구 (SEG 유형에서 선택 가능)
:::

### 색상
어노테이션의 색상을 지정합니다.

## 기능
- 어노테이션 타입 추가하기
- 이미지 카테고리 관리하기

### 어노테이션 타입 추가하기
`추가` 버튼을 클릭하여 어노테이션 타입 정보 항목을 추가할 수 있습니다.  
(레이블링 유형이 CL 인 경우 등록된 이미지 카테고리 중 적절한 항목을 선택)

### 이미지 카테고리 관리하기
`이미지 카테고리 관리` 버튼을 클릭하여 이미지 카테고리 구성 화면으로 진입합니다.

![이미지 카테고리](/public/ko/project/project-settings-image-category.png)

`추가` 버튼을 클릭하여 이미지 카테고리 항목을 추가할 수 있습니다.
