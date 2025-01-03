---
outline: deep
---

# 데이터 가져오기

![데이터 가져오기](/ko/data/dataset-import.png)


## 개요
작성된 데이터셋을 가져와서 새로운 데이터셋을 구성할 수 있습니다.

### 가져오기 형식
데이터셋을 가져올 형식을 선택합니다.

::: info 지원하는 가져오기 형식
- 외부 도구 : 외부 도구에서 작성한 데이터셋을 가져올 수 있습니다. ([상세 정보](./dataset-import-external))
- Vlad Ops : Vlad Ops 에서 내보내기 한 데이터셋을 가져올 수 있습니다. ([상세 정보](./dataset-import-vladops))
:::

### 가져오기 파일 선택
데이터 가져오기에 사용될 파일을 선택합니다.  

|| Vlad Ops | 외부 도구 |
| :---: | :---: | :---: |
| 필요 파일 | 데이터셋 파일 (zip, tar)<br>(이미지, 이미지 메타, 어노테이션 포함) | 이미지 압축 파일 (zip, tar)<br>이미지 메타 파일 (csv)<br>어노테이션 압축 파일 (zip, tar) |

::: info 참고
현재 제공하지 않는 외부 도구로 작성된 어노테이션의 경우 VLAD Ops 커스터마이징 작업을 거쳐 제공합니다.
:::

