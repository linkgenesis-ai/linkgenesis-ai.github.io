---
outline: deep
---

# 학습 커널

![학습 커널](/public/ko/tranining-validation/training-training-kernel.png)


## 개요
학습용 커널을 업로드하고 관리할 수 있습니다.

::: info 학습 커널
학습 커널은 아래 두 가지 파일로 구성됩니다.
- docker 이미지를 저장한 파일(tar) 또는 build 할 수 있는 소스 코드를 압축한 파일(zip)
- 학습 커널의 구성을 정의하는 모델 설정 스키마 파일(json)  

업로드 된 파일은 학습 플랫폼 내에서 docker image로 빌드된 후 학습에 사용할 수 있는 커널로 등록 됩니다.

학습 커널 만들기에 대해 궁금하시면 [여기](/ko/reference/kernel-overview)를 클릭하세요.
:::

::: info 커널 업로드 방식
docker image 형태나, source 를 압축한 형태로 upload 할 수 있습니다.

네트워크 환경에 따라 용량이 큰 라이브러리를 base image 타입으로 미리 생성 후 생성된 base image 에 실제 학습 커널 부분을 소스 코드 형태로 업로드 하여 사용하면 전송량을 줄일 수 있습니다.
:::


## 기능


