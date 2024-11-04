---
outline: deep
---

# 학습 설정 파일
## 개념
학습 커널이 컨테이너로 실행되면 root folder 에 `vlad_training.json` 파일이 생성됩니다. 해당 파일은 도커 컨테이너 내 데이터에 대한 접근 정보를 가지고 있으므로 개발자는 커널 실행 직후 vlad_training.json 를 읽어 들여 접근 정보를 취득해야 합니다.

- 모델에 대한 정보(검증인 경우 검증에 대한 정보)
- 추가 학습의 경우 사용할 베이스 모델의 위치
- 학습된 모델을 저장할 폴더의 위치
- 데이터셋이 저장된 폴더의 위치
- 임시 작업 폴더의 위치
- 학습 플랫폼과 통신할 메시지 큐 정보
- 학습 또는 검증에 대한 하이퍼 파라메터 값을 가지고 있는 `model.json` 의 위치

## 상세 정의
```json
// vlad_training.json

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
| `vlad_training_config_version` | Config file의 버전. 학습커널이 지원하지 않는 버전일 경우 error를 발생시키면 됨 |
| `model_id`             | Operation이 training 일 경우, 학습 결과로 저장되는 모델의 id |
| `validation_id`        | Operation이 validation일 경우 validation 결과로 저장되는 validation의 id |
| `operation`            | `training` or `validation`의 값으로, `training`을 수행해야 하는지 `validation`을 수행해야 하는지 지정되어 있음 |
| `dataset_path`         | 데이터셋이 저장되어 있는 path. 이 path의 내용은 실제 학습의 종류(레이블의 종류)에 따라 다름. 학습의 종류는 `model.json`의 `training_type` field를 통해 전달됨 |
| `temp_path`            | 학습이나 검증 과정에 사용되는 임시 파일들을 저장할 경로. 컨테이너가 종료되면 이 경로에 있는 파일들도 삭제됨 |
| `base_model_path`      | 추가 학습의 경우, 사용될 base model의 경로가 지정됨. 폴더 구조는 학습의 결과로 생성되는 모델의 폴더와 동일 |
| `model_write_path`     | 학습의 결과, 혹은 검증의 결과가 저장될 폴더의 위치 |
| `message_host/port/id/pw` | RabbitMQ message를 전달할 host/port/id/pw |
| `queue_name`           | RabbitMQ message를 전달할 큐 이름 |
| `training_config_file` | 실제 학습에 대한 설정값을 가지고 있는 `model.json`에 대한 경로 |
