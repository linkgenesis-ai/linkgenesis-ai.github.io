---
outline: deep
---

# 검증 진행 상태
## 개념
학습 진행 상태와 같은 방식으로 검증 진행 상태를 플랫폼에 전달할 수 있습니다.

차이점은 검증의 경우에는 학습에 비해 상당히 빨리 끝나기 때문에 progress message는 사용하지 않습니다. "validation_done", "validation_error" 의 두가지 메시지로 성공적으로 종료했는지, 에러가 발생했는지만 알려주면 되며 "validation_error"에는 "training_error"와 마찬가지로 "message" field에 자세한 에러 메시지를 채워서 보내야 합니다.

식별자의 경우 validation_id 를 사용합니다.

## 검증 완료

```
data = {
    "cmd": "validation_status,
    "validation_id": validation_id,
    "status":  "validation_done",
}
```

## 검증 에러

```
data = {
    "cmd": "validation_status,
    "validation_id": validation_id,
    "status":  "validation_error",
    "message": "error message",
}
```