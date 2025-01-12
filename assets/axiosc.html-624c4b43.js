import{_ as n,p as s,q as a,a1 as t}from"./framework-d81ad7e5.js";const p={},e=t(`<h2 id="axios-request-js" tabindex="-1"><a class="header-anchor" href="#axios-request-js" aria-hidden="true">#</a> axios request.js</h2><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 这个是Node中向外暴露成员的方式</span>
<span class="token comment">// module.exports = {}</span>

<span class="token comment">// 在ES6中，也通过规范的形式，规定了ES6如何导入和导出模块</span>
<span class="token comment">// ES6中，使用 import 模块名称 from &#39;模块标识符&#39; import &#39;模块路径&#39;两种方式导入模块</span>
<span class="token comment">// ES6中,使用export default 和export向外暴露成员.</span>

<span class="token keyword">var</span> info <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;张三&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">age</span><span class="token operator">:</span> <span class="token number">23</span>
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> info
<span class="token comment">// 注意：export default 向外暴露的成员，可以用任意的变量接收</span>
<span class="token comment">// 注意：在一个模块中，export default只允许向外暴露一次</span>
<span class="token comment">// 注意: 在一个模块中, 可以同时使用export default和export</span>

<span class="token keyword">export</span> <span class="token keyword">var</span> title <span class="token operator">=</span> <span class="token string">&#39;标题&#39;</span>
<span class="token keyword">export</span> <span class="token keyword">var</span> content <span class="token operator">=</span> <span class="token string">&#39;哈哈哈哈&#39;</span>

<span class="token comment">// 注意：使用export向外暴露成员，只能使用{ }的形式去接收，叫做【按需引入】，按需引入是开发中非常常用的方式</span>
<span class="token comment">// 注意：export可以向外暴露多个成员，同时，如果某些成员，我们在import的时候，不需要，则可以不在 { } 中定义</span>
<span class="token comment">// 注意：使用export导出的成员，必须严格按照export导出时候的名称，来使用 { }接收</span>
<span class="token comment">// 注意：使用export导出的成员，如果就想换个名字接收，可以使用as 起个别名</span>

<span class="token comment">// Node中，引入使用的是var 名称 = require(&#39;模块标识符&#39;)</span>
</code></pre></div><h2 id="封装的axios-to-request-js-for-elementui" tabindex="-1"><a class="header-anchor" href="#封装的axios-to-request-js-for-elementui" aria-hidden="true">#</a> 封装的axios to request.js For ElementUI</h2><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code>
<span class="token keyword">import</span> axios <span class="token keyword">from</span> <span class="token string">&#39;axios&#39;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> Message <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;element-ui&#39;</span>
<span class="token keyword">const</span> service <span class="token operator">=</span> axios<span class="token punctuation">.</span><span class="token function">create</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  baseURL<span class="token operator">:</span> <span class="token string">&#39;/&#39;</span><span class="token punctuation">,</span>
  timeout<span class="token operator">:</span> <span class="token number">5000</span> <span class="token comment">// 默认请求超时时间</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token doc-comment comment">/**
 * request 拦截器
 * 可以在请求发送前对请求进行一些处理
 * 如：统一在请求头上加上token
 * 对请求参数进行统一加密
 * 等等
 */</span>
service<span class="token punctuation">.</span>interceptors<span class="token punctuation">.</span>request<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>
  config <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> config
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  error <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token comment">// 请求异常了</span>
    <span class="token function">Message</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      type<span class="token operator">:</span> <span class="token string">&#39;error&#39;</span><span class="token punctuation">,</span>
      message<span class="token operator">:</span> <span class="token string">&#39;系统异常，请及时联系管理员&#39;</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token keyword">return</span> Promise<span class="token punctuation">.</span><span class="token function">reject</span><span class="token punctuation">(</span>error<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">)</span>
<span class="token doc-comment comment">/**
 * response 拦截器
 * 可以在接口响应之后，页面获取到响应结果之前
 * 对响应结果统一进行处理
 * 如：对返回结果进行解密 
 */</span>
service<span class="token punctuation">.</span>interceptors<span class="token punctuation">.</span>response<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>
  response <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> res <span class="token operator">=</span> response<span class="token punctuation">.</span>data
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token parameter">res<span class="token punctuation">.</span>code <span class="token operator">===</span> <span class="token number">200</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token comment">// code是200的情况，表示接口是通的，直接返回res</span>
      <span class="token keyword">return</span> res
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
      <span class="token comment">// else：非200的情况，表示接口异常</span>
      <span class="token function">Message</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
        type<span class="token operator">:</span> <span class="token string">&#39;error&#39;</span><span class="token punctuation">,</span>
        message<span class="token operator">:</span> res<span class="token punctuation">.</span>msg
      <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  error <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token comment">// 请求报错的情况下（http请求报错）</span>
    <span class="token function">Message</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      type<span class="token operator">:</span> <span class="token string">&#39;error&#39;</span><span class="token punctuation">,</span>
      message<span class="token operator">:</span> res<span class="token punctuation">.</span>msg
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">)</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> service
</code></pre></div>`,4),o=[e];function c(r,l){return s(),a("div",null,o)}const u=n(p,[["render",c],["__file","axiosc.html.vue"]]);export{u as default};
