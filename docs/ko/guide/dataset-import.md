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
- Vlad Ops : Vlad Ops 에서 내보내기 한 데이터셋을 가져올 수 있습니다.
- 외부 도구 : 외부 도구에서 작성한 데이터셋을 가져올 수 있습니다.
:::

### 어노테이션 형식
가져오기 형식을 "외부 도구"로 선택한 경우, 어노테이션 파일 포맷(어노테이션을 작성한 도구)을 선택합니다.

::: info 지원하는 어노테이션 형식
- labelme
- labelimg
- datumaro
:::

### 가져오기 파일 선택
데이터 가져오기에 사용될 파일을 선택합니다.

|| Vlad Ops | 외부 도구 |
| :---: | :---: | :---: |
| 필요 파일 | 데이터셋 파일 (zip, tar)<br>(이미지, 이미지 메타, 어노테이션 포함) | 이미지 압축 파일 (zip, tar)<br>이미지 메타 파일 (csv)<br>어노테이션 압축 파일 (zip, tar) |



- 이미지 압축 파일 (필수)  
이미지 압축 파일은 zip 또는 tar 형식으로 압축되어야 하고, 아래와 같이 구성되어야 합니다.  
```
[예시 : 가져오려는 이미지 압축 파일(images.zip)의 구성]
images.zip
├─ image01.png
├─ image02.png
├─ ...
└─ image0n.png
```

- 이미지 메타 파일 (필수)  
이미지 메타 파일은 csv 형식으로 작성되어야 하고,  
[이미지 메타 데이터 설정](./project-settings-image-meta)에서 추가한 메타 정보가 포함되어야 합니다.
```
[예시 : 가져오려는 이미지 메타 파일(meta.csv)의 구성]
acq_dt,image_type,prod_id,judge_rslt,org_id,obj_id,image_file_nm
2024-09-12 15:53:35,FRONT,P01,OK,LINE01,0,image01.png
2024-09-12 15:58:05,SIDE,P01,OK,LINE01,0,image02.png
...
```

- 어노테이션 압축 파일 (선택)  
어노테이션 압축 파일은 zip 또는 tar 형식으로 압축되어야 하고,  
어노테이션 파일명은 이미지 파일명과 동일하게 작성되어야 합니다.

  || calssification | LableMe | LableImg<br>(Pascal VOC) | VLAD<br>(Pascal VOC) |
  | :---: | :---: | :---: | :---: | :---: |
  | 파일타입 | txt | json | xml | xml |
  | import | cl, rc | rectangle, polygon | rectangle | rectangle, polygon |
  | export | cl, rc | rectangle, polygon | rectangle | rectangle, polygon |

  ```
  [예시 : 가져오려는 어노테이션 압축 파일(annotations.zip)의 구성]
  annotations.zip
  ├─ cl.txt (프로젝트에 포함된 이미지 전체에 작성된 CL Type 어노테이션 정보 파일)
  ├─ cl.cat (cl.txt 에 포함된 CL Type 어노테이션 타입 목록 파일)
  ├─ rc.txt (프로젝트에 포함된 이미지 전체에 작성된 RC Type 어노테이션 정보 파일)
  ├─ rc.cat (rc.txt 에 포함된 RC Type 어노테이션 타입 목록 파일)
  ├─ image01.xml (image01.png 에 작성된 SEG 또는 OD Type 어노테이션 정보 파일)
  ├─ image02.xml
  ├─ ...
  └─ image0n.xml
  ```
  ```
  [예시 : 어노테이션 파일(cl.txt)의 구성]
  THERMOSTATIC_VALVE_01_L_0_A.png VALVE_GOOD
  THERMOSTATIC_VALVE_02_L_0_A.png VALVE_CONTAMINATED
  ```
  ```
  [예시 : 어노테이션 파일(rc.txt)의 구성]
  THERMOSTATIC_VALVE_03_L_0_A.png RC_TEST true 1015 1135 168 156
  THERMOSTATIC_VALVE_03_L_0_A.png RC_TEST false 1227 1422 174 175
  THERMOSTATIC_VALVE_03_R_0_A.png RC_TEST true 278 168 29 28
  THERMOSTATIC_VALVE_04_L_0_A.png RC_TEST true 1015 1135 168 156
  THERMOSTATIC_VALVE_04_R_0_A.png RC_TEST true 278 168 29 28
  THERMOSTATIC_VALVE_04_L_0_A.png RC_TEST true 1015 1135 168 156
  THERMOSTATIC_VALVE_04_R_0_A.png RC_TEST true 278 168 29 28
  ```
  ```
  [예시 : 어노테이션 파일(image01.xml)의 구성]
  <annotation>
      <folder>images</folder>
      <filename>image01.png</filename>
      <path/>
      <source>
          <database>Unknown</database>
      </source>
      <size>
          <width>1944</width>
          <height>2592</height>
          <depth>3</depth>
      </size>
      <segmented>0</segmented>
      <object>
          <name>SEG_SAMPLE</name>
          <pose>Unspecified</pose>
          <truncated>0</truncated>
          <difficult>0</difficult>
          <polygon>
              <pt>
                  <x>758.4</x>
                  <y>844.9</y>
              </pt>
              <pt>
                  <x>863.1</x>
                  <y>863.6</y>
              </pt>
              <pt>
                  <x>975.3</x>
                  <y>785.1</y>
              </pt>
              <pt>
                  <x>964.0</x>
                  <y>901.0</y>
              </pt>
              <pt>
                  <x>851.9</x>
                  <y>964.5</y>
              </pt>
          </polygon>
      </object>
  </annotation>
  ```

::: info 참고
현재 제공하지 않는 외부 도구로 작성된 어노테이션의 경우 VLAD Ops 커스터마이징 작업을 거쳐 제공합니다.
:::

