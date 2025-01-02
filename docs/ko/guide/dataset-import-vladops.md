---
outline: deep
---

# Vlad Ops 데이터

## 개요
Vlad Ops 에서 내보내기 한 데이터셋을 가져와서 새로운 데이터셋을 구성할 수 있습니다.

### 가져오기 파일 선택
데이터 가져오기에 사용될 파일을 선택합니다.

- 데이터셋 압축 파일 (필수)  
데이터셋 압축 파일은 zip 또는 tar 형식으로 압축되어야 하고, 아래와 같이 구성되어야 합니다.  
```
[예시 : 가져오려는 데이터셋 압축 파일(dataset.zip)의 구성]
dataset.zip
├─ images
│ ├─ image01.png
│ ├─ image02.png
│ ├─ ...
│ ├─ image0n.png
│ └─ sub_dir_01
│   ├─ image_01_01.png
│   ├─ image_01_02.png
│   ├─ ...
│   └─ image_01_0n.png
├─ meta
│ ├─ meta.csv
│ └─ sub_dir_01
│   └─ meta.csv
└─ annotations
  ├─ cl.txt
  ├─ cl.cat
  ├─ rc.txt
  ├─ rc.cat
  ├─ image01.xml
  ├─ image02.xml
  ├─ ...
  ├─ image0n.xml
  └─ sub_dir_01
    ├─ cl.txt
    ├─ cl.cat
    ├─ rc.txt
    ├─ rc.cat
    ├─ image_01_01.xml
    ├─ image_01_02.xml
    ├─ ...
    └─ image_01_0n.xml
```
::: warning 주의  
데이터가 하위 폴더를 포함하는 구조로 작성된 데이터를 가져오는 기능은 Vlad Ops 에서 작성하여 내보낸 데이터셋에만 제공됩니다.  
Vlad Ops 에서 내보낸 데이터셋을 편집하는 경우, 폴더 이름이나 구조가 변경되지 않아야 합니다.
:::