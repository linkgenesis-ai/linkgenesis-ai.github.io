---
outline: deep
---

# 사용자 직접 작성

![어노테이션 작성](/ko/labeling/labeling-create-user-draw.png)


## 개요
사용자가 직접 어노테이션을 작성할 수 있습니다.


::: info 어노테이션 타입 목록
[모델 타입 설정](./project-settings-model-type)에서 설정한 내용에 따라 현재 선택한 이미지에서 사용할 수 있는 어노테이션 타입만 목록에 표시됩니다.
:::


## 기능
- 어노테이션 작성하기
- 작성된 어노테이션을 복사하여 붙여넣기

### 어노테이션 작성하기
::: info 영역 설명
이미지 목록 영역 : 데이터셋에 포함된 이미지의 목록을 표시  
캔버스 영역 : 이미지 목록에서 선택한 이미지, 이미지의 정보, 사용 가능한 도구들이 표시  
어노테이션 타입 목록 영역 : 선택한 이미지에 작성가능한 어노테이션 타입의 목록이 표시
:::

::: info 레이블 유형
[어노테이션 타입 설정](./project-settings-annotation-type) 에서 작성 가능한 레이블링 유형을 참고하세요.
:::

- 레이블 유형 : SEG, OD, RC  
이미지 목록 영역에서 이미지를 선택합니다.  
어노테이션 타입 목록 영역에서 작성할 어노테이션 타입을 선택하면, 레이블 타입에 따라 어노테이션을 작성할 수 있는 도구(사각형, 다각형, 붓)가 활성화 됩니다.  
캔버스 상단의 도구를 선택하여 이미지 위에 마우스를 이용하여 어노테이션을 작성할 수 있습니다.

- 레이블 유형 : CL  
이미지 목록 영역에서 이미지를 선택합니다.  
어노테이션 타입 목록 영역의 레이블 유형 CL 어노테이션 타입 중 하나를 더블 클릭합니다.

### 작성된 어노테이션을 복사하여 붙여넣기
이미 작성되어 있는 어노테이션이 있는 경우, 해당 어노테이션을 복사하여 붙여넣을 수 있습니다.
- 레이블 유형 : SEG, OD, RC  
어노테이션을 선택합니다.  
단축키 도움말을 참고하여, 어노테이션 복사를 실행 합니다.  
클립보드 보기 체크 박스를 체크하면 복사된 어노테이션 미리보기가 가능합니다.  
단축키 도움말을 참고하여, 선택한 이미지 및 다른 이미지에 어노테이션 붙여넣기를 실행합니다.

::: info 단축키
우측 상단의 "?" 버튼을 클릭하면, 사용 가능한 단축키에 대한 도움말이 표시됩니다.
:::

::: info ROI
판정 설비에서 Vision Algorithm 또는 Fixed Area로 ROI 를 설정한 후 이미지와 같이 전달해 주면, 레이블링 시 해당 모델에서 사용할 ROI 가 자동으로 표시됩니다.  
※ 사용자가 직접 ROI 를 설정할 수 있는 기능은 제공하지 않습니다.
:::
