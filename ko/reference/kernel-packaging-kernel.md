---
outline: deep
---

# 커널 파일

## 개요
학습 커널 파일은 docker image 를 save 한 파일(.tar) 또는 build 할 수 있는 소스코드를 압축한 zip 파일 입니다. 정해진 규칙에 따라 소스코드를 패키징해야 플랫폼에 정상적으로 업로드 할 수 있습니다.

## 패키징
### 소스 코드 직접 압축

Root 폴더에 Dockerfile 이 들어있는 압축 파일(zip)을 생성합니다. 

::: warning 주의사항
Dockerfile이 docker image를 빌드하는데 필요한 모든 파일은 압출 파일 안에 포함되어 있어야 합니다. 이것은 base / build kernel 둘 다 동일합니다.
:::

### docker image 저장

docker 명령을 통해 이미지를 생성하고 해당 이미지를 파일로 save 합니다.


예) 해당 폴더내 dockerfile 을 빌드하여 model-1 tag로 이미지를 생성합니다.
```bash
docker build -t model-1 .
```

예) model-1 이미지를 model.tar 파일로 save 합니다.
```bash
# docker save -o 이미지명.tar 이미지명
docker save -o model.tar model-1
```
