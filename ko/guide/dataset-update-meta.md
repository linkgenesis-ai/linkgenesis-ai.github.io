---
outline: deep
---

# 이미지 메타 업데이트

![이미지 메타 없데이트](/public/ko/data/dataset-update-meta.png)


## 개요
현재 데이터셋에 포함된 이미지의 메타 데이터를 업데이트 합니다.

:::info 예시

※ 주의 : DB 에 저장된 이미지의 메타 데이터와 업데이트 할 메타 데이터의 `필수 항목`이 동일한 경우에만 작업이 진행됩니다.
<br><br>

[이미지 메타 파일]
|생성|업데이트|
|:---|:---|
|...,prod_id,judge_rslt,org_id,image_file_nm,...<br>...,P01,`OK`,LINE01,image01.png,...<br>...,P01,`OK`,`LINE01`,image02.png,...|...,prod_id,judge_rslt,org_id,image_file_nm,...<br>...,P01,`NG`,LINE01,image01.png,...<br>...,P01,`NG`,`LINE02`,image02.png,...|

<br>

[DB 이미지 메타 데이터]
|이미지|생성 후|업데이트 후|
|:---|:---|:---|
|image01.png|"metadata":&nbsp;[<br>&nbsp;&nbsp;...<br>&nbsp;&nbsp;&nbsp;&nbsp;{<br>&nbsp;&nbsp;&nbsp;&nbsp;"code":&nbsp;"judge_rslt",<br>&nbsp;&nbsp;&nbsp;&nbsp;"value":&nbsp;"OK"<br>&nbsp;&nbsp;},<br>&nbsp;&nbsp;{<br>&nbsp;&nbsp;&nbsp;&nbsp;"code":&nbsp;"org_id",<br>&nbsp;&nbsp;&nbsp;&nbsp;"value":&nbsp;"LINE01"<br>&nbsp;&nbsp;},<br>&nbsp;&nbsp;&nbsp;&nbsp;},<br>&nbsp;&nbsp;...<br>],|"metadata":&nbsp;[<br>&nbsp;&nbsp;...<br>&nbsp;&nbsp;&nbsp;&nbsp;{<br>&nbsp;&nbsp;&nbsp;&nbsp;"code":&nbsp;"judge_rslt",<br>&nbsp;&nbsp;&nbsp;&nbsp;"value":&nbsp;"NG"<br>&nbsp;&nbsp;},<br>&nbsp;&nbsp;{<br>&nbsp;&nbsp;&nbsp;&nbsp;"code":&nbsp;"org_id",<br>&nbsp;&nbsp;&nbsp;&nbsp;"value":&nbsp;"LINE01"<br>&nbsp;&nbsp;},<br>&nbsp;&nbsp;&nbsp;&nbsp;},<br>&nbsp;&nbsp;...<br>],|
|image02.png|"metadata":&nbsp;[<br>&nbsp;&nbsp;...<br>&nbsp;&nbsp;&nbsp;&nbsp;{<br>&nbsp;&nbsp;&nbsp;&nbsp;"code":&nbsp;"judge_rslt",<br>&nbsp;&nbsp;&nbsp;&nbsp;"value":&nbsp;"OK"<br>&nbsp;&nbsp;},<br>&nbsp;&nbsp;{<br>&nbsp;&nbsp;&nbsp;&nbsp;"code":&nbsp;"org_id",<br>&nbsp;&nbsp;&nbsp;&nbsp;"value":&nbsp;"LINE01"<br>&nbsp;&nbsp;},<br>&nbsp;&nbsp;&nbsp;&nbsp;},<br>&nbsp;&nbsp;...<br>],|"metadata":&nbsp;[<br>&nbsp;&nbsp;...<br>&nbsp;&nbsp;&nbsp;&nbsp;{<br>&nbsp;&nbsp;&nbsp;&nbsp;"code":&nbsp;"judge_rslt",<br>&nbsp;&nbsp;&nbsp;&nbsp;"value":&nbsp;"NG"<br>&nbsp;&nbsp;},<br>&nbsp;&nbsp;{<br>&nbsp;&nbsp;&nbsp;&nbsp;"code":&nbsp;"org_id",<br>&nbsp;&nbsp;&nbsp;&nbsp;"value":&nbsp;"LINE02"<br>&nbsp;&nbsp;},<br>&nbsp;&nbsp;&nbsp;&nbsp;},<br>&nbsp;&nbsp;...<br>],|

:::

