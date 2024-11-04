import{_ as n,p as s,q as a,a1 as p}from"./framework-d81ad7e5.js";const t={},o=p(`<h2 id="nprogress页面加载进度条" tabindex="-1"><a class="header-anchor" href="#nprogress页面加载进度条" aria-hidden="true">#</a> nprogress页面加载进度条</h2><h5 id="_1、安装-npm-install-save-nprogress-或者-yarn-add-nprogress" tabindex="-1"><a class="header-anchor" href="#_1、安装-npm-install-save-nprogress-或者-yarn-add-nprogress" aria-hidden="true">#</a> 1、安装$ npm install --save nprogress 或者$ yarn add nprogress</h5><p><strong>用法NProgress.start();NProgress.done();</strong></p><h5 id="_2、使用router-js" tabindex="-1"><a class="header-anchor" href="#_2、使用router-js" aria-hidden="true">#</a> 2、使用router.js</h5><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token comment">//导入</span>
<span class="token keyword">import</span> NProgress <span class="token keyword">from</span> <span class="token string">&#39;nprogress&#39;</span>
<span class="token keyword">import</span> <span class="token string">&#39;nprogress/nprogress.css&#39;</span>

router<span class="token punctuation">.</span><span class="token function">beforeEach</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">to<span class="token punctuation">,</span> from<span class="token punctuation">,</span> next</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span>  <span class="token punctuation">{</span> 
 NProgress<span class="token punctuation">.</span><span class="token function">start</span><span class="token punctuation">(</span><span class="token punctuation">)</span>  
 <span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

router<span class="token punctuation">.</span><span class="token function">afterEach</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>  NProgress<span class="token punctuation">.</span><span class="token function">done</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre></div><p><strong>main.js</strong></p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">import</span> App <span class="token keyword">from</span> <span class="token string">&#39;./App&#39;</span>
<span class="token keyword">import</span> VueRouter <span class="token keyword">from</span> <span class="token string">&#39;vue-router&#39;</span>
<span class="token keyword">import</span> router <span class="token keyword">from</span> <span class="token string">&#39;./router&#39;</span> <span class="token comment">//你的路由文件</span>
<span class="token comment">//引入nprogress</span>
<span class="token keyword">import</span> NProgress <span class="token keyword">from</span> <span class="token string">&#39;nprogress&#39;</span>
<span class="token keyword">import</span> <span class="token string">&#39;nprogress/nprogress.css&#39;</span> <span class="token comment">//这个样式必须引入</span>

Vue<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>VueRouter<span class="token punctuation">)</span>

<span class="token comment">// 简单配置</span>
NProgress<span class="token punctuation">.</span><span class="token function">inc</span><span class="token punctuation">(</span><span class="token number">0.2</span><span class="token punctuation">)</span>
NProgress<span class="token punctuation">.</span><span class="token function">configure</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">easing</span><span class="token operator">:</span> <span class="token string">&#39;ease&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">speed</span><span class="token operator">:</span> <span class="token number">500</span><span class="token punctuation">,</span> <span class="token literal-property property">showSpinner</span><span class="token operator">:</span> <span class="token boolean">false</span> <span class="token punctuation">}</span><span class="token punctuation">)</span>

router<span class="token punctuation">.</span><span class="token function">beforeEach</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">to<span class="token punctuation">,</span>from<span class="token punctuation">,</span>next</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  NProgress<span class="token punctuation">.</span><span class="token function">start</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">}</span><span class="token punctuation">)</span>

router<span class="token punctuation">.</span><span class="token function">afterEach</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  NProgress<span class="token punctuation">.</span><span class="token function">done</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token keyword">new</span> <span class="token class-name">Vue</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">el</span><span class="token operator">:</span> <span class="token string">&#39;#app&#39;</span><span class="token punctuation">,</span>
  router<span class="token punctuation">,</span>
  <span class="token function-variable function">render</span><span class="token operator">:</span> <span class="token parameter">h</span> <span class="token operator">=&gt;</span> <span class="token function">h</span><span class="token punctuation">(</span>App<span class="token punctuation">)</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre></div>`,7),e=[o];function c(r,u){return s(),a("div",null,e)}const k=n(t,[["render",c],["__file","vdev_nprogress.html.vue"]]);export{k as default};
