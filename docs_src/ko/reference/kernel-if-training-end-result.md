---
outline: deep
---

# 학습 결과
## 개요
지정된 위치에 저장된 학습 결과는 플랫폼을 통해 관리되고 다양한 기능을 사용할 수 있습니다.

- 배포
- 추가학습
- 검증
- Export후 다른 system에 import
- Export 후 research

## 결과 저장
학습 결과가 저장되는 위치는 학습 설정 파일의 `model_write_path`에 지정된 경로 입니다. 

결과 파일의 형태는 배포를 위한 형태로 관리되는 것이 일반적이며 기본적으로 model_type.xxx 형태의 파일로 저장하게 됩니다.

예를 들어 학습 결과로 onnx 파일을 사용하는 경우 아래 세가지 종류의 파일이 생성됩니다.

1.	model_type.onnx
2.	save/checkpoint.pth
3.	save/logs/*.event  

그 외 배포시 필요한 파일이 있다면 model_type.xxx 형태로 학습 결과를 저장할 수 있습니다. ~~model_type.xxx 형태의 file들은 배포에 포함되어 배포됩니다.~~

save 아래에는 실제 학습에 사용되는 내부 포멧의 모델 snapshot이 저장됩니다. Onnx 자체로 추가학습이 가능하지 않은 경우 추가학습을 가능하게 하기 위해서는 이 snapshot을 저장해 두어야 합니다.

log는 학습 플렛폼에서 직접 사용하지는 않지만, 학습 커널 개발자가 선호하는 형태의 학습 log를 저장해, 추후 모델 분석시 export하여 활용할 수 있습니다.
