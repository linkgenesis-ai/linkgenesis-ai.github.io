---
outline: deep
---

# 데이터 가져오기

![데이터 가져오기](/ko/data/dataset-import.png)


## 개요
데이터셋을 업로드하여 새로운 데이터셋을 구성할 수 있습니다.

### 어노테이션 형식
업로드 할 데이터셋에 작성된 어노테이션의 형식을 선택합니다.

  | | LabelMe (json) | LabelMe (xml) | Pascal VOC |
  | :---: | :---: | :---: | :---: |
  | 사용 도구 | labelme | cvat | labelimg |
  | 파일 형식 | json | xml | xml |
  | 지원하는 shape 종류 | rectangle, polygon | rectangle, polygon | rectangle |


### 가져오기 파일 선택
업로드 할 파일을 선택합니다.  

- 이미지 압축 파일 (필수)  
이미지 압축 파일은 zip 또는 tar 형식을 지원하며, 아래와 같이 구성되어야 합니다.  
```
[예시 : 가져오려는 이미지 압축 파일(images.zip)의 구성]
images.zip
├─ image_01.png
├─ image_02.png
├─ ...
└─ image_0n.png
```

- 이미지 메타 파일 (필수)  
이미지 메타 파일은 csv, zip, tar 형식을 지원하며, 아래와 같이 구성되어야 합니다.

::: warning 주의
이미지 메타 파일은 csv 형식으로 작성되어야 하며,  
[이미지 메타 데이터 설정](./project-settings-image-meta)에서 추가한 메타 정보 중 필수항목을 포함해야 합니다.
:::

```
[예시 : 가져오려는 이미지 메타 파일(meta.zip)의 구성]
meta.zip
└─ meta.csv
```
```
[예시 : 이미지 메타 파일(meta.csv)의 구성]
acq_dt,image_type,prod_id,judge_rslt,org_id,obj_id,image_file_nm
2024-09-12 15:53:35,FRONT,P01,OK,LINE01,0,image_01.png
2024-09-12 15:58:05,SIDE,P01,OK,LINE01,0,image_02.png
...
```

- 어노테이션 압축 파일 (선택)  
어노테이션 압축 파일은 zip 또는 tar 형식을 지원하며, 아래와 같이 구성되어야 합니다.

::: warning 주의
SEG 또는 OD Type 어노테이션 정보 파일명은 이미지 파일명과 동일하게 작성되어야 합니다.
:::

  ```
  [예시 : 가져오려는 어노테이션 압축 파일(annotations.zip)의 구성]
  annotations.zip
  ├─ cl_code_01.cat
  ├─ cl_code_01.txt
  ├─ ...
  ├─ cl_code_0n.cat (cl_code_0n type annotation 에 포함된 카테고리리 목록 파일)
  ├─ cl_code_0n.txt (전체 이미지에 작성된 cl_code_0n type 어노테이션 정보 파일)
  ├─ rc.cat (RC Type 어노테이션 타입 목록 파일)
  ├─ rc.txt (전체 이미지에 작성된 RC Type 어노테이션 정보 파일)
  ├─ image_01.xml
  ├─ image_02.xml
  ├─ ...
  └─ image_0n.xml (image_0n.png 에 작성된 SEG 또는 OD Type 어노테이션 정보 파일)
  ```
  ```
  [예시 : CL Type 어노테이션 카테고리 목록 파일(CL_VALVE_DEFECTS.cat)의 구성]
  VALVE_GOOD
  VALVE_BROKEN_LARGE
  VALVE_BROKEN_SMALL
  VALVE_CONTAMINATED
  ```
  ```
  [예시 : CL Type 어노테이션 파일(CL_VALVE_DEFECTS.txt)의 구성]
  THERMOSTATIC_VALVE_01_L_0_A.png VALVE_GOOD
  THERMOSTATIC_VALVE_02_L_0_A.png VALVE_CONTAMINATED
  ```
  ```
  [예시 : RC Type 어노테이션 목록 파일(rc.cat)의 구성]
  RC_TEST
  ```
  ```
  [예시 : RC Type 어노테이션 파일(rc.txt)의 구성]
  THERMOSTATIC_VALVE_03_L_0_A.png RC_TEST true 1015 1135 168 156
  THERMOSTATIC_VALVE_03_L_0_A.png RC_TEST false 1227 1422 174 175
  THERMOSTATIC_VALVE_03_R_0_A.png RC_TEST true 278 168 29 28
  THERMOSTATIC_VALVE_04_L_0_A.png RC_TEST true 1015 1135 168 156
  THERMOSTATIC_VALVE_04_R_0_A.png RC_TEST true 278 168 29 28
  ```
  ```
  [예시 : SEG 또는 OD Type 어노테이션 정보 파일(image_01.xml)의 구성]
  <annotation>
    <filename>image_01.png</filename>
    <folder/>
    <source>
      <sourceImage/>
      <sourceAnnotation>VLADOps</sourceAnnotation>
    </source>
    <imagesize>
      <nrows>512</nrows>
      <ncols>512</ncols>
    </imagesize>
    <object>
      <name>SEG_VALVE_CRACK</name>
      <id>0</id>
      <polygon>
        <pt>
          <x>181.0</x>
          <y>191.0</y>
        </pt>
        <pt>
          <x>181.0</x>
          <y>211.0</y>
        </pt>
        <pt>
          <x>154.0</x>
          <y>211.0</y>
        </pt>
        <pt>
          <x>154.0</x>
          <y>191.0</y>
        </pt>
      </polygon>
    </object>
  </annotation>
  ```

::: info 참고
현재 제공하지 않는 어노테이션 형식의 경우 VLAD Ops 커스터마이징 작업을 거쳐 제공합니다.
:::

