---
outline: deep
---

# 모델 설정 파일

## 개념
모델 설정 파일(`model.json`)은 일반적으로 하이퍼 파라메터라고 불리는 값들을 모아 놓은 파일입니다.
학습 설정 파일의 `training_config_file` 에서 파일의 위치를 확인할 수 있습니다.

::: info
모델 설정 파일의 데이터는 학습 커널 개발시 작성하는 모델 설정 스키마를 만족하는 데이터입니다.

각 항목 상세 내용은 [모델 설정 스키마](/reference/kernel-packaging-schema)를 참고하시기 바랍니다.
:::


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

