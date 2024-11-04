---
outline: deep
---

# 모델 설정 파일

## 개념
모델 설정 파일(`model.json`)은 일반적으로 하이퍼 파라메터라고 불리는 값들을 모아 놓은 파일입니다.
학습 설정 파일의 `training_config_file` 에서 위치를 확인할 수 있습니다.

모델 설정 파일 예
```json
{
    "image_type_list": [
      "_A.png",
      "_X.png"
    ],
    "training_type" : "SEG",
    "model_type" : "SEG_MULTI",
    "training_params": {
    	"learning_rate": 0.0001,
    	"steps_done": 25,
    	"step_check_interval": 2,
        "accelerator": "cuda"
    }
}
```
::: info
모델 설정(`model.json`) 데이터는 모델 설정 스키마(`model_schema.json`)를 만족하는 데이터이므로 학습 커널 개발시 모델 설정 스키마(`model_schema.json`)를 정의해야 합니다.
:::

## 모델 설정 스키마 파일
model_schema.json 에 필수적으로 정의되어야 할 아래 필드들을 제외하고는 학습 커널에서 필요에 따라 지원해야 하는 내용들을 추가해 넣을 수 있습니다.

- image_type_list : 이 환경에서 접근 가능한 image의 종류(xy, albedo ...)
- training_type : 모델 type에 의해 결정되는 학습(레이블)의 종류이다. 현재 정의되어 있고, 사용중인 training_type은 CL,SEG,OD,RC 의 네 종류 이다.
- model_type : 이 모델의 용도를 지정하는 기본정보상의 항목이다.
- training_params : 실제 학습 커널이 사용하는 hyper parameter는 이 아래에 존재하고, 학습을 실행하는 사람이 입력하는 내용이 이 영역에 채워진다.
- Optional field 인 “batchable_params” 에는 training_params 에 정의되어 있는 항목중 영역 스캔이 필요하거나, 영역 스캔이 가능한 항목을 집어 넣어, 사용자가 영역 스캔을 할 수 있도록 한다. 해당 항목에 대해 min/max 영역과 step 값을 입력하여 반복적으로 batch 학습을 수행할수 있게 된다. 학습 커널 입장에서는 각 값의 조합으로 별도의 학습 요청이 들어가는 것이므로, 따로 처리를 해야 할 것은 없고, 의미 있는 batchable parameter를 식별하여 이 항목에 적어 주면 된다.

모델 설정 스키마 파일 예
```json
{
  "type": "object",
  "properties": {
    "training_type": {
      "type": "string",
      "const": "SEG"
    },
    "model_type": {
      "type": "string",
      "enum": [
        "SEG_BODY",
        "SEG_SIDE",
        "SEG_MULTI"
      ]
    },
    "training_params": {
      "type": "object",
      "properties": {
        "iterations": {
          "type": "integer",
          "minimum": 1,
          "maximum": 10000
        },
        "learning_rate": {
          "type": "number",
          "minimum": 0,
          "maximum": 0.1
        }
      },
      "required": [
        "iterations",
        "learning_rate"
      ],
      "additionalProperties": false
    },
    "batchable_params": {
      "type": "object",
      "properties": {
        "iterations": {
          "type": "boolean"
        },
        "learning_rate": {
          "type": "boolean"
        }
      }
    },
    "image_type_list": {
      "type": "array",
      "items": {
        "type": "string"
      }
    }
  },
  "required": [
    "image_type_list",
    "training_type",
    "model_type",
    "training_params"
  ],
  "additionalProperties": false
}
```
