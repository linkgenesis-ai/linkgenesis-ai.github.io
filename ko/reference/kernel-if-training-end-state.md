---
outline: deep
---

# 학습 진행 상태
## 개요

학습 진행 상태를 플랫폼에 전달하는 방법은 rabbitmq message queue에 상태 메시지를 던지는 형태로 이루어 집니다. Rabbitmq message queue에 대한 정보는 학습 설정 파일에서 확인 할 수 있습니다.

- `message_host`
- `message_port`
- `message_id`
- `message_pw`
- `queue_name`

## 상태 메세지
### cmd
`training_status` | `validation_status`

어떤 command인지 구분하는 값입니다.

상태 전달 메세지는 학습 진행 상태와 검증 진행 상태로 나눠지고 학습/검증이 어떤 것에 대한 것인지 구분하는 식별자가 반드시 포함 되어야 합니다.

**학습/검증에 따라 사용되는 CMD 및 식별자**
- 학습 : `cmd: training_status`, `model_id: 모델 id`
- 검증 : `cmd: validation_status`, `validation_id: 검증 id`


### status
`training_ing` | `training_done` | `training_error`

첫 "training_ing"을 받았을때 학습이 시작된것으로 인식하고, 그 이전은 "대기중" 상태로 표시됩니다.

"training_ing"은 현재 step의 진행 상태(percentage)를 사용자에게 보여주기 위해 매 step 마다 보내는 메시지입니다.

학습이 끝난 시점에 "training_done"을 보내고 종료해야 합니다. 그렇지 않으면 비정상 종료로 인식하게 됩니다. ("training_done"의 경우 "model_id"만 있으면 됩니다.)

에러 발생시에는 "training_error"를 "message" 필드와 함께 던져서 에러가 발생했음을 인식하게 할 수 있습니다. (error 처리 이후 "training_ing"나 "training_done 을 보내도 처리되지 않습니다.)

### model_id
`학습 설정 파일내 model_id`

현재 학습하고 있는 모델에 대한 식별자입니다. 식별자이므로 필수 데이터이며 학습 설정 파일에 정의 되어 있는 `model_id` 를 전달해야 합니다.

검증의 경우 `validation_id` 입니다. 

### message
`text message`

에러 발생에 대한 메시지입니다. 사용자에게 보여줄 메시지이므로 최대한 친절한 메시지를 포함하는 것이 좋습니다.

예) 학습용 이미지의 크기가 적절하지 않습니다. 3000x2000을 기대했는데, 300x200이 제공 되었습니다

### percentage
`0~100 사이의 숫자`

0~100 사이의 값으로 사용자에게 보여줄 진행율 입니다. 참고용 이므로 엄격하게 계산할 필요는 없습니다.

### step
`학습중인 현재 step 번호`

현재 학습중인 step 번호 입니다.


## 학습 진행
```
data = {
    "cmd": "training_status,
    "model_id": model_id,
    "status":  "training_ing",
    "percentage": percentage,
    "step": step,
}
```

## 학습 완료
```
data = {
    "cmd": "training_status,
    "model_id": model_id,
    "status":  "training_done",
}
```

## 학습 에러
```
data = {
    "cmd": "training_status,
    "model_id": model_id,
    "status":  "training_error",
    "message": "error message",
}
```

## 학습 그래프

`"model_write_path"/save/metrics` 아래에 log file을 생성하면 플랫폼에서 해당 데이터를 읽어 학습 그래프로 표시하게 됩니다. 

여러 metric을 추적하려면 여러 log file을 생성하면 됩니다.

각 log file의 포멧과 규칙은 아래와 같습니다.
- 첫 라인에 필드명을 포함해야 합니다.
- 첫 컬럼은 graph 의 시간축(x값) 입니다.
- 두번째 이후의 컬럼들은 각각 다른 색상으로 표현되는 graph 의 y값 입니다.

```
Main axis name, graph1 name, graph2 name
1, 0.2, 0.2
2, 0.3, 0.25
3, 0.4, 0.4
```

