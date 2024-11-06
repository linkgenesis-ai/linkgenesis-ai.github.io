---
outline: deep
---

# 모델 설정 스키마

## 개요
커널이 어떤 학습을 할 수 있는지, 어떤 모델 타입을 지원하는지 등에 대한 정의 파일 입니다. 

커널 개발시 필수로 작성되야 하며 학습 커널에 학습 요청을 할때 전달되는 model.json 은 이 스키마 내용을 만족하는 data만 전달되는 것이 보장됩니다.

## 세부 항목
model_schema.json 에 필수적으로 정의되어야 할 아래 항목 외에 필요에 따라 지원해야 하는 내용들을 추가해 정의 할 수 있습니다.

### training_type
커널이 어떤 종류의 학습을 하는지 지정합니다. 혹은 모델 타입에 의해 결정되는 학습(레이블)의 종류이기도 합니다. 이 지정에 따라 학습시에, 학습용 데이터가 다르게 생성이 되어서 넘어가게 됩니다.

현재 정의되어 있고, 사용중인 training_type은 `CL`, `RC`, `SEG`, `OD` 네 종류입니다.

### model_type
커널이 지원하는 모델 타입(기본정보에 나열되어 있는)을 enum 형태로 표시되어 있습니다. 이미 아는 type에 대해서 적어주면 해당 모델 타입과 바인딩이 되고, 적어주지 않는다 하더라도 학습 플랫폼 내에서 training_type 이 같다면 수동으로 연결 할 수도 있습니다.

### image_type_list

접근 가능한 이미지 종류(xy, albedo ...)의 목록입니다. 값은 string arrary 형태를 가지며, 그 값은 기본정보의 프로젝트 환경의 TRAINABLE_IMAGE_TYPE 에 있는 항목들의 열거입니다.

~~학습 커널에서는 자신이 학습한 image type을 onnx 파일의 메타 데이터에 저장하여, edge에서 어떤 type의 image를 feeding할 지 결정할수 있도록 해 주어야 합니다.~~

```
"image_type_list": ["_A.png", "_X.png", "_CH1.png", "_CH2.png"]
```

### training_params

실제로 학습에 사용되는 하이퍼 파라메터들이 정의 되는 영역입니다. 

학습에 사용되는 하이퍼 파라메터들을 나열해 두면 사용자가 해당 하이퍼 파라메터를 지정해서 학습을 시켜 볼 수 있습니다. 학습을 하는데 반드시 필요한 하이퍼 파라메터는 required 에 추가하여 그 값을 사용자가 반드시 입력해야지만 학습이 시작되도록 할 수 있습니다.

### batchable_params
옵션 항목인 "batchable_params" 에는 training_params 에 정의되어 있는 항목중 영역 스캔이 필요하거나, 영역 스캔이 가능한 항목을 집어 넣어, 사용자가 영역 스캔을 할 수 있도록 할 수 있습니다.

해당 항목에 대해 min/max 영역과 step 값을 입력하여 반복적으로 batch 학습을 수행할수 있게 됩니다. 학습 커널 입장에서는 각 값의 조합으로 별도의 학습 요청이 들어가는 것이므로, 따로 처리를 해야 할 것은 없고, 의미 있는 batchable parameter를 식별하여 이 항목에 적어 주면 됩니다.


::: tip 필수 항목 처리
- 기대한 데이터가 넘어오지 않거나, 기대하지 않는 데이터가 학습 커널로 넘어가서 발생하는 부작용을 방지하기 위해서 "required" field 와 "additionalProperites : false"는 반드시 적어 놓는 것이 좋습니다.

- "required"에는 반드시 있어야 하는 항목들을 적어주는 것이고, "additionalProperties: false" 는 이 schema 에 정의된 것 이외의 property가 사용되지 않도록 하는 것입니다. 혹시, 동적 property가 필요해서 임의의 property를 추가하고, 사용하고 싶은 경우에는 "additonalProperties: false"를 넣어줄 필요가 없습니다.

- 학습 커널 내부에서 반드시 필요한 파라메터는 training_params.required 에 적어주고, 학습플렛폼에서 반드시 필요한 paramter에 대한 required는 top level에 적어 주어야 합니다. (위의 필수 항목)
:::


## 모델 설정 스키마 파일 예
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
        "image_type_list": {
            "type": "array",
            "items": {
                "type": "string"
            }
        }
    },
    "training_params": {
        "type": "object",
        "properties": {
            "iterations": {
                "type": "integer",
                "maximum": 10000
            },
            "learning_rate": {
                "type": "number"
            },
            "momentum": {
                "type": "number"
            },
            "weight_decay": {
                "type": "number"
            },
            "scheduler_gamma": {
                "type": "number"
            },
            "min_size": {
                "type": "integer",
                "maximum": 10000
            },
            "max_size": {
                "type": "integer",
                "maximum": 10000
            },
            "random_state": {
                "type": "integer"
            },
            "step_check_interval": {
                "type": "integer"
            }
        },
        "required": [
            "iterations",
            "learning_rate"
        ],
        "additionalProperties": false
    },
    "image_type_list": {
      "type": "array",
      "items": {
        "type": "string"
      }
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
    "required": [
        "training_type",
        "model_type",
        "training_params",
        "image_type_list"
    ],
    "additionalProperties": false
}
```