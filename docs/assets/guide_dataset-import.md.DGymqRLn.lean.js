import{_ as a,c as n,a1 as p,o as t}from"./chunks/framework.CiOUwjDc.js";const e="/ko/data/dataset-import.png",_=JSON.parse('{"title":"데이터 가져오기","description":"","frontmatter":{"outline":"deep"},"headers":[],"relativePath":"guide/dataset-import.md","filePath":"ko/guide/dataset-import.md","lastUpdated":1745371375000}'),l={name:"guide/dataset-import.md"};function i(c,s,o,d,g,r){return t(),n("div",null,s[0]||(s[0]=[p('<h1 id="데이터-가져오기" tabindex="-1">데이터 가져오기 <a class="header-anchor" href="#데이터-가져오기" aria-label="Permalink to &quot;데이터 가져오기&quot;">​</a></h1><p><img src="'+e+`" alt="데이터 가져오기"></p><h2 id="개요" tabindex="-1">개요 <a class="header-anchor" href="#개요" aria-label="Permalink to &quot;개요&quot;">​</a></h2><p>데이터셋을 업로드하여 새로운 데이터셋을 구성할 수 있습니다.</p><h3 id="어노테이션-형식" tabindex="-1">어노테이션 형식 <a class="header-anchor" href="#어노테이션-형식" aria-label="Permalink to &quot;어노테이션 형식&quot;">​</a></h3><p>업로드 할 데이터셋에 작성된 어노테이션의 형식을 선택합니다.</p><table tabindex="0"><thead><tr><th style="text-align:center;"></th><th style="text-align:center;">LabelMe (json)</th><th style="text-align:center;">LabelMe (xml)</th><th style="text-align:center;">Pascal VOC</th></tr></thead><tbody><tr><td style="text-align:center;">사용 도구</td><td style="text-align:center;">labelme</td><td style="text-align:center;">cvat</td><td style="text-align:center;">labelimg</td></tr><tr><td style="text-align:center;">파일 형식</td><td style="text-align:center;">json</td><td style="text-align:center;">xml</td><td style="text-align:center;">xml</td></tr><tr><td style="text-align:center;">지원하는 shape 종류</td><td style="text-align:center;">rectangle, polygon</td><td style="text-align:center;">rectangle, polygon</td><td style="text-align:center;">rectangle</td></tr></tbody></table><h3 id="가져오기-파일-선택" tabindex="-1">가져오기 파일 선택 <a class="header-anchor" href="#가져오기-파일-선택" aria-label="Permalink to &quot;가져오기 파일 선택&quot;">​</a></h3><p>업로드 할 파일을 선택합니다.</p><ul><li>이미지 압축 파일 (필수)<br> 이미지 압축 파일은 zip 또는 tar 형식을 지원하며, 아래와 같이 구성되어야 합니다.</li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>[예시 : 가져오려는 이미지 압축 파일(images.zip)의 구성]</span></span>
<span class="line"><span>images.zip</span></span>
<span class="line"><span>├─ image_01.png</span></span>
<span class="line"><span>├─ image_02.png</span></span>
<span class="line"><span>├─ ...</span></span>
<span class="line"><span>└─ image_0n.png</span></span></code></pre></div><ul><li>이미지 메타 파일 (필수)<br> 이미지 메타 파일은 csv, zip, tar 형식을 지원하며, 아래와 같이 구성되어야 합니다.</li></ul><div class="warning custom-block"><p class="custom-block-title">주의</p><p>이미지 메타 파일은 csv 형식으로 작성되어야 하며,<br><a href="./project-settings-image-meta">이미지 메타 데이터 설정</a>에서 추가한 메타 정보 중 필수항목을 포함해야 합니다.</p></div><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>[예시 : 가져오려는 이미지 메타 파일(meta.zip)의 구성]</span></span>
<span class="line"><span>meta.zip</span></span>
<span class="line"><span>└─ meta.csv</span></span></code></pre></div><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>[예시 : 이미지 메타 파일(meta.csv)의 구성]</span></span>
<span class="line"><span>acq_dt,data_cate,prod_id,judge_rslt,org_id,obj_id,data_file_nm</span></span>
<span class="line"><span>2024-09-12 15:53:35,FRONT,P01,OK,LINE01,0,image_01.png</span></span>
<span class="line"><span>2024-09-12 15:58:05,SIDE,P01,OK,LINE01,0,image_02.png</span></span>
<span class="line"><span>...</span></span></code></pre></div><ul><li>어노테이션 압축 파일 (선택)<br> 어노테이션 압축 파일은 zip 또는 tar 형식을 지원하며, 아래와 같이 구성되어야 합니다.</li></ul><div class="warning custom-block"><p class="custom-block-title">주의</p><p>SEG 또는 OD Type 어노테이션 정보 파일명은 이미지 파일명과 동일하게 작성되어야 합니다.</p></div><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>[예시 : 가져오려는 어노테이션 압축 파일(annotations.zip)의 구성]</span></span>
<span class="line"><span>annotations.zip</span></span>
<span class="line"><span>├─ cl_code_01.cat</span></span>
<span class="line"><span>├─ cl_code_01.txt</span></span>
<span class="line"><span>├─ ...</span></span>
<span class="line"><span>├─ cl_code_0n.cat (cl_code_0n type annotation 에 포함된 카테고리리 목록 파일)</span></span>
<span class="line"><span>├─ cl_code_0n.txt (전체 이미지에 작성된 cl_code_0n type 어노테이션 정보 파일)</span></span>
<span class="line"><span>├─ rc.cat (RC Type 어노테이션 타입 목록 파일)</span></span>
<span class="line"><span>├─ rc.txt (전체 이미지에 작성된 RC Type 어노테이션 정보 파일)</span></span>
<span class="line"><span>├─ image_01.xml</span></span>
<span class="line"><span>├─ image_02.xml</span></span>
<span class="line"><span>├─ ...</span></span>
<span class="line"><span>└─ image_0n.xml (image_0n.png 에 작성된 SEG 또는 OD Type 어노테이션 정보 파일)</span></span></code></pre></div><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>[예시 : CL Type 어노테이션 카테고리 목록 파일(CL_VALVE_DEFECTS.cat)의 구성]</span></span>
<span class="line"><span>VALVE_GOOD</span></span>
<span class="line"><span>VALVE_BROKEN_LARGE</span></span>
<span class="line"><span>VALVE_BROKEN_SMALL</span></span>
<span class="line"><span>VALVE_CONTAMINATED</span></span></code></pre></div><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>[예시 : CL Type 어노테이션 파일(CL_VALVE_DEFECTS.txt)의 구성]</span></span>
<span class="line"><span>THERMOSTATIC_VALVE_01_L_0_A.png VALVE_GOOD</span></span>
<span class="line"><span>THERMOSTATIC_VALVE_02_L_0_A.png VALVE_CONTAMINATED</span></span></code></pre></div><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>[예시 : RC Type 어노테이션 목록 파일(rc.cat)의 구성]</span></span>
<span class="line"><span>RC_TEST</span></span></code></pre></div><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>[예시 : RC Type 어노테이션 파일(rc.txt)의 구성]</span></span>
<span class="line"><span>THERMOSTATIC_VALVE_03_L_0_A.png RC_TEST true 1015 1135 168 156</span></span>
<span class="line"><span>THERMOSTATIC_VALVE_03_L_0_A.png RC_TEST false 1227 1422 174 175</span></span>
<span class="line"><span>THERMOSTATIC_VALVE_03_R_0_A.png RC_TEST true 278 168 29 28</span></span>
<span class="line"><span>THERMOSTATIC_VALVE_04_L_0_A.png RC_TEST true 1015 1135 168 156</span></span>
<span class="line"><span>THERMOSTATIC_VALVE_04_R_0_A.png RC_TEST true 278 168 29 28</span></span></code></pre></div><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>[예시 : SEG 또는 OD Type 어노테이션 정보 파일(image_01.xml)의 구성]</span></span>
<span class="line"><span>&lt;annotation&gt;</span></span>
<span class="line"><span>  &lt;filename&gt;image_01.png&lt;/filename&gt;</span></span>
<span class="line"><span>  &lt;folder/&gt;</span></span>
<span class="line"><span>  &lt;source&gt;</span></span>
<span class="line"><span>    &lt;sourceImage/&gt;</span></span>
<span class="line"><span>    &lt;sourceAnnotation&gt;VLADOps&lt;/sourceAnnotation&gt;</span></span>
<span class="line"><span>  &lt;/source&gt;</span></span>
<span class="line"><span>  &lt;imagesize&gt;</span></span>
<span class="line"><span>    &lt;nrows&gt;512&lt;/nrows&gt;</span></span>
<span class="line"><span>    &lt;ncols&gt;512&lt;/ncols&gt;</span></span>
<span class="line"><span>  &lt;/imagesize&gt;</span></span>
<span class="line"><span>  &lt;object&gt;</span></span>
<span class="line"><span>    &lt;name&gt;SEG_VALVE_CRACK&lt;/name&gt;</span></span>
<span class="line"><span>    &lt;id&gt;0&lt;/id&gt;</span></span>
<span class="line"><span>    &lt;polygon&gt;</span></span>
<span class="line"><span>      &lt;pt&gt;</span></span>
<span class="line"><span>        &lt;x&gt;181.0&lt;/x&gt;</span></span>
<span class="line"><span>        &lt;y&gt;191.0&lt;/y&gt;</span></span>
<span class="line"><span>      &lt;/pt&gt;</span></span>
<span class="line"><span>      &lt;pt&gt;</span></span>
<span class="line"><span>        &lt;x&gt;181.0&lt;/x&gt;</span></span>
<span class="line"><span>        &lt;y&gt;211.0&lt;/y&gt;</span></span>
<span class="line"><span>      &lt;/pt&gt;</span></span>
<span class="line"><span>      &lt;pt&gt;</span></span>
<span class="line"><span>        &lt;x&gt;154.0&lt;/x&gt;</span></span>
<span class="line"><span>        &lt;y&gt;211.0&lt;/y&gt;</span></span>
<span class="line"><span>      &lt;/pt&gt;</span></span>
<span class="line"><span>      &lt;pt&gt;</span></span>
<span class="line"><span>        &lt;x&gt;154.0&lt;/x&gt;</span></span>
<span class="line"><span>        &lt;y&gt;191.0&lt;/y&gt;</span></span>
<span class="line"><span>      &lt;/pt&gt;</span></span>
<span class="line"><span>    &lt;/polygon&gt;</span></span>
<span class="line"><span>  &lt;/object&gt;</span></span>
<span class="line"><span>&lt;/annotation&gt;</span></span></code></pre></div><div class="info custom-block"><p class="custom-block-title">참고</p><p>현재 제공하지 않는 어노테이션 형식의 경우 VLAD Ops 커스터마이징 작업을 거쳐 제공합니다.</p></div>`,24)]))}const u=a(l,[["render",i]]);export{_ as __pageData,u as default};
