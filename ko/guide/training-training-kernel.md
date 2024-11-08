---
outline: deep
---

# 학습 커널

![학습 커널](/public/ko/tranining-validation/training-training-kernel.png)


## 개요
학습용 커널을 업로드하고 관리할 수 있습니다.

::: info 학습 커널
학습 커널은 아래 두 가지 파일로 구성됩니다.
- docker 이미지를 저장한 파일(tar) 또는 build 할 수 있는 소스 코드를 압축한 파일(zip, tar)
- 학습 커널의 구성을 정의하는 모델 설정 스키마 파일(json)  

학습 커널 만들기에 대해 궁금하시면 [여기](/ko/reference/kernel-overview)를 클릭하세요.
:::

::: info 커널 업로드
docker 이미지 형태나, 소스 코드를 압축한 형태로 업로드 할 수 있습니다.  
업로드 한 커널은 학습 플랫폼에서 docker 이미지로 빌드한 후 학습에 사용할 수 있는 커널로 등록됩니다.

네트워크 환경에 따라 용량이 큰 라이브러리를 base image 타입으로 미리 생성 후 생성된 base image 에 실제 학습 커널 부분을 소스 코드 형태로 업로드 하여 사용하면 전송량을 줄일 수 있습니다.
:::


## 기능
- 학습 커널 가져오기  
  ![학습 커널 가져오기](/public/ko/tranining-validation/training-training-kernel-import-training.png)

  - 가져오기 타입 선택
    - 이미지 : docker 이미지 형태의 학습 커널을 가져옵니다.
    - 빌드 : build 할 수 있는 소스 코드 형태의 학습 커널을 가져옵니다.
    - Git (build) : build 할 수 있는 소스 코드 형태의 학습 커널을 Git 에서 가져옵니다.
  - 커널 파일 선택
    - 이미지, 빌드 : 학습 커널과 모델 설정 스키마 파일을 선택합니다.
    - Git (build) : 학습 커널과 모델 설정 스키마 파일이 위치한 Git Repository 경로를 입력합니다.
  - 베이스 이미지
    - 전송량을 줄이기 위해 학습 커널의 소스 코드만 포함한 경우 base image 를 선택해야 정상적인 학습 진행이 가능합니다.

- 학습 커널 상세
  ![학습 커널 상세](/public/ko/tranining-validation/training-training-kernel-detail.png)

  - 기본 정보 : 학습 커널 기본 구성 정보를 표시합니다.
  - 학습 정보 : 학습 커널에서 지원하는 학습 타입을 표시합니다.
  - 빌드 정보 : 학습 커널 빌드 정보를 표시합니다.
  - 지원 모델 타입 : 학습 커널에서 지원하는 모델 타입을 표시합니다.
  - 스키마 : 모델 설정 스키마 내용을 표시합니다.
  - 가져오기 로그 다운로드 : 학습 커널 가져오기 로그를 다운로드합니다.
  - 도커 이미지 히스토리 다운로드 : 도커 이미지 빌드 히스토리를 다운로드합니다.