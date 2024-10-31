---
outline: deep
---

# 학습 커널
모델 학습은 아래와 같은 두개의 독립된 환경 위에서 진행됩니다.

- 학습 커널 : packaging된 학습을 수행하는 docker container 형태의 소프트웨어
- 학습 플렛폼 : 학습 커널에 학습할 데이터와 설정을 정리해 넘겨주고, 결과를 받아 관리하는 학습 환경

## 학습 플랫폼 -> 학습 커널

###	vlad_training.json

docker 환경의 root folder에 존재하며 docker 내에서 모든 데이터에 대한 접근 정보를 가지고 있습니다.

- 모델에 대한 정보(검증인 경우 검증에 대한 정보)
- 추가 학습의 경우 사용할 Base model의 위치
- 학습된 모델을 저장할 폴더의 위치
- 데이터셋이 저장된 폴더의 위치
- 임시 작업 폴더의 위치
- 학습 플랫폼과 통신할  메시지 큐 정보
- 학습 또는 검증에 대한 Hyper parameter 값을 가지고 있는 “model.json” 의 위치

**vlad_training.json 상세**
```json
{
  "vlad_training_config_version": 1.0,
  "model_id" : "model_id",
  "validation_id": "validation_id",
  "operation": "train | validation",
  "dataset_path": "/mnt/path_to_dataset",
  "temp_path": "/mnt/path_to_temp_directory",
  "base_model_path": "mnt/path_to_base_model",
  "model_write_path": "/mnt/path_to_write_model",
  "message_host": "host_name",
  "message_port": "port",
  "message_id": "user_id",
  "message_pw": "user_pw",
  "queue_name": "queue_name",
  "training_config_file" : "/mnt/path/to/training/config/file"
}
```

|필드명|내용|
|---|---|
| `vlad_training_config_version` | Config file의 버전. 학습커널이 지원하지 않는 버전일 경우 error를 발생시키면 된다. |
| `model_id`             | Operation이 training 일 경우, 학습 결과로 저장되는 모델의 id |
| `validation_id`        | Operation이 validation일 경우 validation 결과로 저장되는 validation의 id |
| `operation`            | `"training"` or `"validation"`의 값으로, training을 수행해야 하는지 `"validation"`을 수행해야 하는지 지정한다. |
| `dataset_path`         | 데이터셋이 저장되어 있는 path. 이 path의 내용은 실제 학습의 종류(레이블의 종류)에 따라 다르다. 학습의 종류는 `model.json`의 `"training_type"` field를 통해 전달된다. |
| `temp_path`            | 학습이나 검증 과정에 사용되는 임시 파일들을 저장할 경로. 학습이나 검증이 종료되면 이 경로에 있는 파일들은 즉시 삭제된다. |
| `base_model_path`      | 추가 학습의 경우, 사용될 base model의 경로가 지정된다. 폴더 구조는 학습의 결과로 생성되는 모델의 폴더와 동일하다. |
| `model_write_path`     | 학습의 결과, 혹은 검증의 결과가 저장될 폴더의 위치이다. |
| `message_host/port/id/pw` | RabbitMQ message를 전달할 host/port/id/pw |
| `queue_name`           | RabbitMQ message를 전달할 queue name |
| `training_config_file` | 실제 학습에 대한 설정값을 가지고 있는 `model.json`에 대한 경로이다. |


<!-- ### model.json
학습 커널에서 정의한 schema 를 따르는 데이터로, 학습에 대한 설정 값들이 들어 있다.

일반적으로 hyper parameter 라고 불리는 값들이며 model_schma.json 을 만족하는 데이터만 입력되어 학습 커널로 넘어가게 된다.

학습 커널이 사용할 (하이퍼)파라메터가 전달되는 경로이다. 실제 학습에 대한 설정이므로, 학습 커널을 upload할 때 제공된 model_schema.json 을 만족하는 데이터만 입력으로 들어간다. model_schema.json 에 필수적으로 정의되어야 할 아래 필드들을 제외하고는 학습 커널에서, 필요에 따라, 지원해야 하는 내용들을 임의로 추가해 넣을 수 있다. -->