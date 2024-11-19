---
outline: deep
---

# 학습 데이터
## 개념
학습 설정 파일의 `dataset_path` 아래에는 학습할 (이미지) 데이터와 레이블링이 들어가 있습니다. 기본적으로 레이블 파일을 찾아 그 안에 적힌 이미지의 경로를 찾아가는 방식입니다.

## 데이터의 구성
데이터셋 폴더의 내용은 학습 설정 파일의 `training_type` 에 따라 다른 구성을 가지게 되며 각각의 경우에 대한 구성은 아래와 같습니다.

### Classification (CL)

데이터셋 폴더내 아래 파일들이 존재합니다.

```
dataset_path
├─ label.txt
├─ train
│  └─ train.txt
└─ validation
   └─ validation.txt
```

`train.txt`은 학습에 대한 데이터이며, `validation.txt`는 검증에 대한 데이터 입니다. 또한 참고용으로 `label.txt`가 존재하는데, 이 파일에는 classification의 class 이름 목록이 적혀 있습니다. 일반적으로 여기 적힌 순서가 prediction 결과에 대한 index 값(모델의 아웃풋)이 됩니다.


각 이미지는 하나의 라인으로 표시되고 각 라인은 이미지 경로(image path)와 라벨(label) 루 구성되어 있습니다.
image path는 컨테이너 내의 전체 경로이므로, 별도의 prefix나 base folder와의 조합은 필요 없습니다.

train.txt 예
```
/mnt/image/NAS01/image/3/71/L_VALVE_1/2024/1030/05/S5421E45626133463036_THERMOSTATIC_VALVE_L_0_A.png VALVE_GOOD
/mnt/image/NAS01/image/3/71/L_VALVE_1/2024/1030/05/S5421E45626133463036_THERMOSTATIC_VALVE_R_0_A.png VALVE_BROKEN
...
```

### Regional Classification (RC)
Regional classification(RC) 은 Classification(CL) 과 동일한 파일들이 존재하나 내용상 아래와 같은 다른 점이 있습니다.

- 이미지당 여러개의 label 정보 존재 : 하나의 이미지에 대해 여러 개의 label 정보를 가질 수 있으며, 그 경우 동일한 이미지 경로를 가지는 여러 라인에 걸쳐 표기 됩니다.
- 영역(rectangle)과 label 판정 정보 : 각 label 정보는 영역에 대한 위치 정보와 해당 영역의 레이블의 판정 정보로 구성 됩니다.

train.txt 예
```
/mnt/image/NAS01/image/3/72/L_VALVE_1/2024/1030/05/S5421E45626133463036_THERMOSTATIC_VALVE_L_0_A.png VALVE_SCRATCHED true 100 100 150 150
/mnt/image/NAS01/image/3/72/L_VALVE_1/2024/1030/05/S5421E45626133463036_THERMOSTATIC_VALVE_L_0_A.png VALVE_SCRATCHED true 300 300 350 350
/mnt/image/NAS01/image/3/72/L_VALVE_1/2024/1030/05/S5421E45626133463036_THERMOSTATIC_VALVE_R_0_A.png VALVE_SCRATCHED false 100 100 150 150
/mnt/image/NAS01/image/3/72/L_VALVE_1/2024/1030/05/S5421E45626133463036_THERMOSTATIC_VALVE_R_0_A.png VALVE_SCRATCHED false 300 300 350 350
...
```

### Segmentation (SEG), Object Detection (OD)
<!-- , Anomaly Detection (AD) -->
Segmentation(SEG)와 Object Detection(OD) 그리고 Anomaly Detection(AD)의 경우 label format은 동일합니다.

```
dataset_path
├─ label.txt
├─ train
│  ├─ 1.json
│  ├─ 2.json
│  └─ 3.json
└─ validation
   ├─ 1.json
   ├─ 2.json
   └─ 3.json

```

데이터셋 폴더 아래에 Train / Validation 폴더가 존재하고, 그 아래에 label file 들이 존재합니다.

<!-- ::: info -->
<!-- ::: tip -->
<!-- ::: warning -->
<!-- ::: danger -->
<!-- ::: details -->
label file 은 [labelme format](https://github.com/labelmeai/labelme/blob/main/examples/bbox_detection/data_annotated/2011_000003.json) 을 사용합니다.
앞 링크의 예제를 열어보면 flags 나 version, group_id 같은 meta field도 존재하는데 그런 meta field는 사용하지 않고 아래와 같은 형태로 사용하게 됩니다.

- shapes[].label : 기본정보에서 정의된 label_id
- shapes[].shape_type : rectangle 또는 polygon
- shapes[].points : shape type 에 대한 좌표 배열
- shapes[].isgenerated : 해당 필드에 ‘true’/’false’ 가 들어가 있는 경우가 있을 수 있는데, 이것은 검증에 대한 결과로 생성된 label 을 의미하므로 학습에 활용할 여지가 있으면 활용해도 좋습니다.
- shapes[].isroi : 프로젝트 모델타입 설정에서 ROI type을 지정한 경우, 해당 type이 shaps[].label_type 에 설정되어 rectangle로 전달되게 된다. 또한 해당 label에는 shapes[].isroi = ‘true’ 로 설정이 되므로 isroi가 true인 것은 ROI로 처리하면 된다.
- imagePath : 이미지에 대한 경로입니다. Classficiation과 마찬가지로 도커 컨테이너내 전체 경로 입니다.

label 파일 예
```json
{
  "shapes": [
    {
      "label": "OD_VALVE_CRACK",
      "shape_type": "rectangle",
      "points": [
        [
          252.0,
          215.0
        ],
        [
          271.0,
          231.0
        ]
      ],
      "isgenerated": false,
      "isroi": false
    },
    {
      "label": "OD_VALVE_SCRATCH",
      "shape_type": "rectangle",
      "points": [
        [
          248.0,
          252.0
        ],
        [
          257.0,
          262.0
        ]
      ],
      "isgenerated": false,
      "isroi": false
    }
  ],
  "imagePath": "/mnt/image/NAS01/image/3/71/L_VALVE_1/2024/1030/05/S5421E45626133463036_THERMOSTATIC_VALVE_L_0_A.png",
  "image_id": 88785
}
```

## 학습 가능한 이미지에 대한 접근
학습 가능한 이미지(`image_type_list`)란 다양한 방법으로 가공후 제공되는 학습 가능한 이미지 종류를 뜻합니다.
플렛폼에 존재하는 학습 가능한 이미지 목록은 플랫폼내 프로젝트 환경설정에서 정의 되며 학습시(혹은 검증시) model.json의 image_type_list 항목을 통해 전달됩니다. 특정 이미지 종류에 접근하는 경우 파일명의 뒷부분을 교체하여 사용하면 됩니다.

예를 들어 메인 이미지와 엑스레이 이미지를 사용하는 경우 프로젝트 환경설정에서 학습 가능한 이미지 종류에 "_A.png", "_X.png" 를 설정하면 학습시(혹은 검증시) image_type_list 에 `["_A.png", "_X.png"]` 가 전달되고 엑스레이 이미지를 사용하는 경우 파일 이름의 뒷부분 _A.png를 _X.png로 교체하여 사용하면 됩니다.

## 검증(Validatioin) 의 경우

검증의 경우 `dataset_path` 아래에 train/validation 폴더중 `validation` 부분에만 데이터가 존재하고 나머지는 학습과 동일합니다.