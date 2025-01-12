import{_ as n,p as s,q as a,a1 as p}from"./framework-d81ad7e5.js";const t={},o=p(`<h3 id="uni-request" tabindex="-1"><a class="header-anchor" href="#uni-request" aria-hidden="true">#</a> uni.request</h3><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code>
<span class="token comment">// ------------------------------------------------------全局请求封装</span>
<span class="token keyword">const</span> base_url <span class="token operator">=</span> <span class="token string">&#39;http://localhost:8890&#39;</span>
<span class="token comment">// 请求超出时间</span>
<span class="token keyword">const</span> timeout <span class="token operator">=</span> <span class="token number">5000</span>
 
<span class="token comment">// 需要修改token，和根据实际修改请求头</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">(</span><span class="token parameter">params</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
 <span class="token keyword">let</span> url <span class="token operator">=</span> params<span class="token punctuation">.</span>url<span class="token punctuation">;</span>
 <span class="token keyword">let</span> method <span class="token operator">=</span> params<span class="token punctuation">.</span>method <span class="token operator">||</span> <span class="token string">&quot;get&quot;</span><span class="token punctuation">;</span>
 <span class="token keyword">let</span> data <span class="token operator">=</span> params<span class="token punctuation">.</span>data <span class="token operator">||</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
 <span class="token keyword">let</span> header <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token string-property property">&#39;Blade-Auth&#39;</span><span class="token operator">:</span> uni<span class="token punctuation">.</span><span class="token function">getStorageSync</span><span class="token punctuation">(</span><span class="token string">&#39;token&#39;</span><span class="token punctuation">)</span> <span class="token operator">||</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">,</span>
  <span class="token string-property property">&#39;Content-Type&#39;</span><span class="token operator">:</span> <span class="token string">&#39;application/json;charset=UTF-8&#39;</span><span class="token punctuation">,</span>
  <span class="token string-property property">&#39;Authorization&#39;</span><span class="token operator">:</span> <span class="token string">&#39;Basic c2FiZXI6c2FiZXJfc2VjcmV0&#39;</span><span class="token punctuation">,</span>
  <span class="token string-property property">&#39;Tenant-Id&#39;</span><span class="token operator">:</span> uni<span class="token punctuation">.</span><span class="token function">getStorageSync</span><span class="token punctuation">(</span><span class="token string">&#39;tenantId&#39;</span><span class="token punctuation">)</span> <span class="token operator">||</span> <span class="token string">&#39;xxx&#39;</span><span class="token punctuation">,</span> <span class="token comment">// avue配置相关</span>
  <span class="token operator">...</span>params<span class="token punctuation">.</span>header
 <span class="token punctuation">}</span>
 <span class="token keyword">if</span> <span class="token punctuation">(</span>method <span class="token operator">==</span> <span class="token string">&quot;post&quot;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  header <span class="token operator">=</span> <span class="token punctuation">{</span>
   <span class="token string-property property">&#39;Content-Type&#39;</span><span class="token operator">:</span> <span class="token string">&#39;application/json&#39;</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>
 <span class="token punctuation">}</span>
 <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">Promise</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">resolve<span class="token punctuation">,</span> reject</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  uni<span class="token punctuation">.</span><span class="token function">request</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
   <span class="token literal-property property">url</span><span class="token operator">:</span> base_url <span class="token operator">+</span> url<span class="token punctuation">,</span>
   <span class="token literal-property property">method</span><span class="token operator">:</span> method<span class="token punctuation">,</span>
   <span class="token literal-property property">header</span><span class="token operator">:</span> header<span class="token punctuation">,</span>
   <span class="token literal-property property">data</span><span class="token operator">:</span> data<span class="token punctuation">,</span>
            timeout ，
   <span class="token function">success</span><span class="token punctuation">(</span><span class="token parameter">response</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> res <span class="token operator">=</span> response
    <span class="token comment">// 根据返回的状态码做出对应的操作</span>
    <span class="token comment">//获取成功</span>
    <span class="token comment">// console.log(res.statusCode);</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>res<span class="token punctuation">.</span>statusCode <span class="token operator">==</span> <span class="token number">200</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
     <span class="token function">resolve</span><span class="token punctuation">(</span>res<span class="token punctuation">.</span>data<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
     uni<span class="token punctuation">.</span><span class="token function">clearStorageSync</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
     <span class="token keyword">switch</span> <span class="token punctuation">(</span>res<span class="token punctuation">.</span>statusCode<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">case</span> <span class="token number">401</span><span class="token operator">:</span>
       uni<span class="token punctuation">.</span><span class="token function">showModal</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
        <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">&quot;提示&quot;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">content</span><span class="token operator">:</span> <span class="token string">&quot;请登录&quot;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">showCancel</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
        <span class="token function">success</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
         <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
          uni<span class="token punctuation">.</span><span class="token function">navigateTo</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
           <span class="token literal-property property">url</span><span class="token operator">:</span> <span class="token string">&quot;/pages/login/index&quot;</span><span class="token punctuation">,</span>
          <span class="token punctuation">}</span><span class="token punctuation">)</span>
         <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">1000</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
       <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
       <span class="token keyword">break</span><span class="token punctuation">;</span>
      <span class="token keyword">case</span> <span class="token number">404</span><span class="token operator">:</span>
       uni<span class="token punctuation">.</span><span class="token function">showToast</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
        <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">&#39;请求地址不存在...&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">duration</span><span class="token operator">:</span> <span class="token number">2000</span><span class="token punctuation">,</span>
       <span class="token punctuation">}</span><span class="token punctuation">)</span>
       <span class="token keyword">break</span><span class="token punctuation">;</span>
      <span class="token keyword">default</span><span class="token operator">:</span>
       uni<span class="token punctuation">.</span><span class="token function">showToast</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
        <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">&#39;请重试...&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">duration</span><span class="token operator">:</span> <span class="token number">2000</span><span class="token punctuation">,</span>
       <span class="token punctuation">}</span><span class="token punctuation">)</span>
       <span class="token keyword">break</span><span class="token punctuation">;</span>
     <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
   <span class="token punctuation">}</span><span class="token punctuation">,</span>
   <span class="token function">fail</span><span class="token punctuation">(</span><span class="token parameter">err</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>err<span class="token punctuation">.</span>errMsg<span class="token punctuation">.</span><span class="token function">indexOf</span><span class="token punctuation">(</span><span class="token string">&#39;request:fail&#39;</span><span class="token punctuation">)</span> <span class="token operator">!==</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
     uni<span class="token punctuation">.</span><span class="token function">showToast</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">&#39;网络异常&#39;</span><span class="token punctuation">,</span>
      <span class="token literal-property property">icon</span><span class="token operator">:</span> <span class="token string">&quot;error&quot;</span><span class="token punctuation">,</span>
      <span class="token literal-property property">duration</span><span class="token operator">:</span> <span class="token number">2000</span>
     <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
     uni<span class="token punctuation">.</span><span class="token function">showToast</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">&#39;未知异常&#39;</span><span class="token punctuation">,</span>
      <span class="token literal-property property">duration</span><span class="token operator">:</span> <span class="token number">2000</span>
     <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
    <span class="token function">reject</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span><span class="token punctuation">;</span>
 
   <span class="token punctuation">}</span><span class="token punctuation">,</span>
   <span class="token function">complete</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 不管成功还是失败都会执行</span>
    uni<span class="token punctuation">.</span><span class="token function">hideLoading</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    uni<span class="token punctuation">.</span><span class="token function">hideToast</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
   <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
 <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">catch</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>


 

<span class="token comment">// ------------------------------------------------------引入 request 文件</span>
<span class="token keyword">import</span> request <span class="token keyword">from</span> <span class="token string">&#39;./index.js&#39;</span>
 
 
<span class="token keyword">export</span> <span class="token keyword">const</span> <span class="token function-variable function">pageStudyInfo</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">params</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
 <span class="token keyword">return</span> <span class="token function">request</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">url</span><span class="token operator">:</span> <span class="token string">&#39;/study/studyInfo/page&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">method</span><span class="token operator">:</span> <span class="token string">&#39;get&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">data</span><span class="token operator">:</span> params<span class="token punctuation">,</span>
        <span class="token literal-property property">header</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span> <span class="token comment">// 自定义</span>
 <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
 
<span class="token keyword">export</span> <span class="token keyword">const</span> <span class="token function-variable function">studyInfoById</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">id</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
 <span class="token keyword">return</span> <span class="token function">request</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">url</span><span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">/study/studyInfo/</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>id<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">,</span>
  <span class="token literal-property property">method</span><span class="token operator">:</span> <span class="token string">&#39;get&#39;</span><span class="token punctuation">,</span>
 <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>


<span class="token comment">// ------------------------------------------------------页面调用</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> pageStudyInfo <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@/request/api.js&#39;</span>
 
 
<span class="token function">pageStudyInfo</span> <span class="token punctuation">(</span>data<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">res</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;成功&#39;</span><span class="token punctuation">,</span> res<span class="token punctuation">)</span><span class="token punctuation">;</span>  
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">catch</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">err</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span> 
  console<span class="token punctuation">.</span><span class="token function">error</span><span class="token punctuation">(</span><span class="token string">&#39;失败&#39;</span><span class="token punctuation">,</span> err<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

 
</code></pre></div><h3 id="封装uni-request" tabindex="-1"><a class="header-anchor" href="#封装uni-request" aria-hidden="true">#</a> 封装UNI.Request</h3><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">vrequest</span><span class="token punctuation">(</span>url<span class="token punctuation">,</span> method <span class="token operator">=</span><span class="token string">&quot;GET&quot;</span><span class="token punctuation">,</span> data <span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>headerSoft<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
 console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;req___&#39;</span><span class="token punctuation">,</span>headerSoft<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">Promise</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">resolve<span class="token punctuation">,</span> reject</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    uni<span class="token punctuation">.</span><span class="token function">request</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      url<span class="token operator">:</span> url<span class="token punctuation">,</span>
      method<span class="token operator">:</span> method<span class="token punctuation">,</span>
      data<span class="token operator">:</span> data<span class="token punctuation">,</span>
<span class="token comment">// method:&#39;POST&#39;,</span>
<span class="token comment">//    data: {</span>
<span class="token comment">//        text: &#39;uni.request&#39;</span>
<span class="token comment">//    },</span>
  <span class="token comment">// header: {&#39;access-key&#39;:&quot;123qazq&quot;},</span>
  <span class="token literal-property property">header</span><span class="token operator">:</span> headerSoft<span class="token punctuation">,</span>
      <span class="token function-variable function">success</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token parameter">res</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
        <span class="token function">resolve</span><span class="token punctuation">(</span>res<span class="token punctuation">.</span>data<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token function-variable function">fail</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token parameter">err</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
        <span class="token function">reject</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div>`,4),e=[o];function c(u,l){return s(),a("div",null,e)}const r=n(t,[["render",c],["__file","requestnet.html.vue"]]);export{r as default};
