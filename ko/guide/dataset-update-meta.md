---
outline: deep
---

# 이미지 메타 업데이트

![이미지 메타 없데이트](/ko/data/dataset-update-meta.png)


## 개요
현재 데이터셋에 포함된 이미지의 메타 데이터를 업데이트 합니다.

::: warning
※ DB 에 저장된 이미지의 메타 데이터와 업데이트 할 메타 데이터의 `필수 항목`이 동일한 경우에만 작업이 진행됩니다.
:::

:::info 예시
데이터셋 생성 시 사용한 이미지 메타 데이터 중 iamge01.png 파일의 judge_rslt 와 image02.png 파일의 judge_rslt, org_id 에 대한 수정이 필요한 경우,  
`데이터셋 가져오기` 기능을 이용해 새로운 데이터셋을 만드는 대신 `이미지 메타 업데이트` 기능을 이용하여 간단히 메타 데이터를 업데이트할 수 있습니다.

<style type="text/css">
.bg-noti {background-color:#555555; }
</style>
<table>
  <thead>
    <tr>
      <th colspan="6" style="text-align: center;">데이터셋 생성 시 사용한 이미지 메타 파일</th>
    </tr>
    <tr>
      <th>...</th>
      <th>prod_id</th>
      <th>judge_rslt</th>
      <th>org_id</th>
      <th>image_file_nm</th>
      <th>...</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>...</td>
      <td>P01</td>
      <td class="bg-noti">OK</td>
      <td>LINE01</td>
      <td>image01.png</td>
      <td>...</td>
    </tr>
    <tr>
      <td>...</td>
      <td>P01</td>
      <td class="bg-noti">OK</td>
      <td class="bg-noti">LINE01</td>
      <td>image02.png</td>
      <td>...</td>
    </tr>
  </tbody>
</table>

위와 같이 데이터셋 생성시  
image01.png 파일의 judge_rslt 가 `OK` 로,  
image02.png 파일의 judge_rslt 가 `OK`, org_id 가 `LINE01` 로 잘못 등록된 경우  

<table>
  <thead>
    <tr>
      <th colspan="6" style="text-align: center;">데이터셋에 포함된 생성 시 사용한 이미지 메타 파일</th>
    </tr>
    <tr>
      <th>...</th>
      <th>prod_id</th>
      <th>judge_rslt</th>
      <th>org_id</th>
      <th>image_file_nm</th>
      <th>...</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>...</td>
      <td>P01</td>
      <td class="bg-noti">NG</td>
      <td>LINE01</td>
      <td>image01.png</td>
      <td>...</td>
    </tr>
    <tr>
      <td>...</td>
      <td>P01</td>
      <td class="bg-noti">NG</td>
      <td class="bg-noti">LINE02</td>
      <td>image02.png</td>
      <td>...</td>
    </tr>
  </tbody>
</table>

이미지 메타 파일을 위의 예와 같이 수정한 후 `이미지 메타 업데이트` 기능을 수행하면  
DB 에 등록된 image01.png, image02.png 파일의 이미지 메타 데이터가 업데이트 됩니다.
:::

