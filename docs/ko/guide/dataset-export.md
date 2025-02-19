---
outline: deep
---

# 데이터 내보내기

![데이터셋 내보내기](/ko/data/dataset-export.png)


## 개요
데이터셋을 구성하는 이미지와 어노테이션을 다운로드할 수 있습니다.

::: info 다운로드 파일명 규칙 및 구성
[파일명 규칙]  
```dataset_{프로젝트 코드}_{데이터셋 ID}_{어노테이션 파일 포맷}.zip```

[예시]  
내보낼 데이터셋의 프로젝트 코드가 `test` 이고 데이터셋 ID 가 `48` 인 경우,  
`LabelMe (xml)` 포맷으로 내보내면 다운로드 파일명은 `dataset_test_48_vlad.zip` 이 됩니다.

[데이터셋 파일 구조]
![데이터셋 파일 구조](/ko/data/dataset-export-file-structure.png)

```※ {cl_type_code_0n}.txt 파일은 CL Type 으로 작성된 어노테이션이 있는 경우 생성```<br>
```※ rc.txt 파일은 RC Type 으로 작성된 어노테이션이 있는 경우 생성```<br>
```※ image_0n.xml(json) 파일은 image_0n.png 파일에 SEG 또는 OD Type 으로 작성된 어노테이션이 있는 경우 생성```
:::

