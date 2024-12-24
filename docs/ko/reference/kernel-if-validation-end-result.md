---
outline: deep
---

# 검증 결과
## 개요

지정된 위치에 저장된 검증 결과는 플랫폼을 통해 관리되고 다양한 기능을 사용할 수 있습니다.

- 결과 분석
- 재학습 데이터로 활용

검증 결과를 플랫폼에서 확인하려면 지정된 위치에 결과를 저장해야 합니다.

## 결과 저장 위치

학습 설정 파일의 `model_write_path` 에서 결과 저장 폴더를 확인 할 수 있으며, 해당 폴더에 규칙에 맞춰 결과를 생성합니다.

## 공통 테이블 결과물
결과 저장 위치 루트에 CSV 파일을 생성하면 플랫폼 화면에 테이블로 표시됩니다.

테이블이 표시되는 순서는 `summary.csv`, `confusion.csv` 가 최 상단에 표시되고, 나머지는 파일명의 abc 순으로 표시됩니다.

테이블로 표시하기에는 너무 많은 데이터가 검증 결과로 생성되는 경우에는 서브 폴더를 만들어서 넣어두면 해당 파일들은 다운로드를 통해 확인할 수 있습니다.

## 학습 타입별 결과물
검증 결과는 `training type` 에 따라 다른 결과를 가지는데, 각 타입별 필수적인 결과물은 아래와 같습니다.

### Classification (CL)

`detections.csv`, `confusion.csv` 파일을 필수로 제공해야 합니다.

- detections.csv

  위치 : model_write_path/detections.csv

  해당 파일은 label로 변환되어 각 image가 어떻게 분류되었는지 ui에서 확인하는 용도 입니다. Format은 아래와 같습니다.

  :::info detections.csv
  - filename : 해당 image에 대한 경로
  - y : 실제 이미지 분류(ground truth)
  - y_pred : 예측 분류
  - p(n) : 각각의 클래스에 속할 확률에 대한 score 값
  :::


  ```
  filename,y,y_pred,p0,p1,p2,p3,p4
  /Train_ImageSet/daisy/20703737132_179560d0fb.jpg,0,0,0.3533,0.2900,0.0876,0.1959,0.0732
  /Train_ImageSet/dandelion/501987276_744448580c_m.jpg,1,1,0.1936,0.2889,0.1641,0.2335,0.1198
  /Train_ImageSet/roses/12238827553_cf427bfd51_n.jpg,2,2,0.1405,0.1607,0.3666,0.1494,0.1829
  /Train_ImageSet/sunflowers/14460081668_eda8795693_m.png,3,3,0.1184,0.1356,0.1101,0.4027,0.2334
  /Train_ImageSet/tulips/450607536_4fd9f5d17c_m.bmp,4,4,0.1758,0.1025,0.1779,0.1855,0.3583
  /Test_ImageSet/daisy_2473825306_62fd5f8785_n.jpg,0,0,0.3769,0.1887,0.1223,0.2088,0.1034
  /Test_ImageSet/dandelion_17649230811_9bdbbacb8c.jpg,1,1,0.1595,0.4717,0.1265,0.1422,0.1001
  /Test_ImageSet/roses_16258946661_f9739cdc0a.jpg,2,2,0.1501,0.0963,0.2900,0.1872,0.2763
  /Test_ImageSet/sunflowers_2767688889_b176b0c3fb.jpg,3,3,0.2360,0.2268,0.1401,0.2678,0.1293
  /Test_ImageSet/tulips_8603340662_0779bd87fd.jpg,4,4,0.1498,0.0829,0.3246,0.1018,0.3409
  ```
- confusion.csv

  위치 : model_write_path/confusion.csv
  
  해당 파일은 detection 결과에서 y, y_pred에 해당하는 파일 개수를 matrix형태로 정리한 파일입니다.

  ```
  0,1,2,3,4,name
  2,0,0,0,0,daisy
  0,2,0,0,0,dandelion
  0,0,2,0,0,roses
  0,0,0,2,0,sunflowers
  0,0,0,0,2,tulips
  ```

### Regional Classification (RC)

`detections.csv` 에 `영역 정보(x,y,w,h)` 가 추가된다는 것을 제외하면 CL (Classification)과 동일하며 `detections.csv` 만 필수 결과 파일로 제공하면 됩니다.

detections.csv 예시
```
filename,y,y_pred,p0,p1,p2,p3,p4,x,y,w,h
/Train_ImageSet/daisy/20703737132_1790d0fb.jpg,0,0,0.3533,0.2900,0.0876,0.1959,0.0732,12,23,50,30
/Train_ImageSet/daisy/20703737132_1760d1fb.jpg,0,0,0.2533,0.6800,0.0266,0.2659,0.0331,22,43,60,20
```

### Segmentation (SEG), Object Detection (OD)

`model_write_path/annotations/` 폴더에 `labelme format`의 segmentation 또는 detection 결과 파일을 필수로 제공해야 합니다. 이 파일들은 플랫폼에서 label로 변환되어 화면에서 확인을 하는데 사용된다.

그리고 `summay.csv` 를 필수로 제공해야 합니다. summay.csv 에 강제하는 내용은 없지만, 어떤 형태로든 검증 결과가 요약 되어 있어야 합니다.

그외 각종 다양한 metirc을 csv 형태로 저장하는 것을 권장하며 생성된 모든 csv 파일은 검증 결과 화면에 테이블 형태로 표시 됩니다.

report.csv 예시
```
num detections,21
num classes,42
num files,7
mean elapsed,
mAP,0.1255555510520935
wmAP,0.11481481616695723
ref_IoU,0.5
min_score,0.05
GT,30
TP,3
FP,7
FN,27
PREC,0.3
RECL,0.1
~ACC,0.08108108108108109
```
