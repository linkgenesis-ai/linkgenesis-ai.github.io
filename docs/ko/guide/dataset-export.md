---
outline: deep
---

# 데이터 내보내기

![데이터셋 내보내기](/ko/data/dataset-export.png)


## 개요
데이터셋을 구성하는 이미지와 어노테이션을 다운로드할 수 있습니다.

::: info 다운로드 파일명 규칙 및 구성
[파일명 규칙]  
```dataset_{프로젝트 코드}_{데이터셋 ID}_{어노테이션 파일 포맷}```

[예시]  
내보낼 데이터셋의 프로젝트 코드가 `test` 이고 데이터셋 ID 가 `48` 인 경우
`vlad` 포맷으로 내보내기를 한다면,
다운로드 파일명은 `dataset_test_48_vlad.zip` 이 됩니다.

  ```
  [예시 : vlad 포맷으로 내보낸 파일의 구조]
  dataset_test_48_vlad.zip
  ├─ meta.csv
  ├─ annotations
  │ ├─ cl.txt
  │ ├─ cl.cat
  │ ├─ rc.txt
  │ ├─ rc.cat
  │ ├─ image01.xml
  │ ├─ ...
  │ └─ image0n.xml
  └─ images
    ├─ image01.png
    ├─ ...
    ├─ image0n.png
    └─ image0n.xml

  [예시 : labelme 포맷으로 내보낸 파일의 구조]
  dataset_test_48_labelme.zip
  ├─ meta.csv
  └─ images
    ├─ cl.txt
    ├─ cl.cat
    ├─ rc.txt
    ├─ rc.cat
    ├─ image01.png
    ├─ image01.json
    ├─ ...
    ├─ image0n.png
    └─ image0n.json
  ```
```※ cl.txt, cl.cat 파일은 데이터셋에 CL Type 으로 작성된 어노테이션이 있는 경우 생성```<br>
```※ rc.txt, rc.cat 파일은 데이터셋에 RC Type 으로 작성된 어노테이션이 있는 경우 생성```<br>
```※ image0n.xml (json) 파일은 image0n.png 에 SEG 또는 OD Type 으로 작성된 어노테이션이 있는 경우 생성```
:::

