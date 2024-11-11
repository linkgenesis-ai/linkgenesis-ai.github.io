---
outline: deep
---

# 데이터 내보내기

![데이터셋 내보내기](/public/ko/data/dataset-export.png)


## 개요
데이터셋을 구성하는 이미지와 어노테이션을 다운로드할 수 있습니다.

::: info 다운로드 파일명 규칙 및 구성
[파일명 규칙]  
```dataset_{프로젝트 코드}_{데이터셋 ID}_{어노테이션 파일 포맷}```

[예시]  
내보낼 데이터셋의 프로젝트 코드가 `test` 이고 데이터셋 ID 가 `92` 인 경우
`labelimg` 포맷으로 내보내기를 한다면,
다운로드 파일명은 `dataset_test_92_labelimg.zip` 이 됩니다.

[dataset_test_92_labelimg.zip 파일 구성]
  ```
  dataset_test_92_labelimg.zip
  ├─ meta.csv
  └─ images
    ├─ image01.png
    ├─ image01.xml
    ├─ ...
    ├─ image0n.png
    └─ image0n.xml
  ```
```※ image0n.xml 파일은 image0n.png 에 작성된 어노테이션이 있는 경우 생성```
:::

