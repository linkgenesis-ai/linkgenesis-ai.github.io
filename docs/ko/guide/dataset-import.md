---
outline: deep
---

# 데이터 가져오기

![데이터 가져오기](/ko/data/dataset-import.png)


## 개요
외부 도구로 작성된 어노테이션을 가져와서 데이터셋을 구성할 수 있습니다.

### 가져오기 형식
어노테이션 파일 포맷(어노테이션을 작성한 도구)을 선택합니다.
::: info 지원 포맷
- labelme
- labelimg
- datumaro
- vlad
:::

### 가져오기 파일 선택
데이터 가져오기에 사용될 파일을 선택합니다.
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
  | import | 지원예정 | 지원예정 | rectangle | rectangle, polygon |
  | export | 지원예정 | 지원예정 | rectangle | rectangle, polygon |

  ```
  [예시 : 가져오려는 어노테이션 압축 파일(annotations.zip)의 구성]
  annotations.zip
  ├─ image01.xml (image01.png 에 작성된 어노테이션 정보 파일)
  ├─ image02.xml
  ├─ ...
  └─ image0n.xml
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
              <pt>
                  <x>679.9</x>
                  <y>901.0</y>
              </pt>
              <pt>
                  <x>638.8</x>
                  <y>744.0</y>
              </pt>
          </polygon>
      </object>
  </annotation>
  ```



::: info 참고
현재 제공하지 않는 외부 도구로 작성된 어노테이션의 경우 VLAD Ops 커스터마이징 작업을 거쳐 제공합니다.
:::

