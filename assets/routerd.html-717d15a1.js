import{_ as t,p,q as e,a1 as n,R as a,t as s}from"./framework-d81ad7e5.js";const o={},c=n('<h3 id="路由的传参" tabindex="-1"><a class="header-anchor" href="#路由的传参" aria-hidden="true">#</a> 路由的传参</h3><blockquote><p>方式一 : 直接跟在url路径后面. /login?id=XX&amp;name=XX</p><p>方式二 : 使用restful风格. /register/id/name</p><p><code>this.$route</code> : 获取路由对象.</p><ul><li><code>query</code> : 适用于?后面拼接的参数</li><li><code>params</code> : 适用于/</li></ul></blockquote><h2 id="router-和-route" tabindex="-1"><a class="header-anchor" href="#router-和-route" aria-hidden="true">#</a> $router 和 $route</h2><ul><li>在 Vue 实例内部，你可以通过 router 访问路由实例。因此你可以调用 this.router.push</li></ul>',4),l=a("div",{class:"custom-container danger"},[a("p",{class:"custom-container-title"},"DANGER"),a("p",null,[s("这是两个不同的作用"),a("br"),s(" this."),a("span",{class:"katex"},[a("span",{class:"katex-mathml"},[a("math",null,[a("semantics",null,[a("mrow",null,[a("mi",null,"r"),a("mi",null,"o"),a("mi",null,"u"),a("mi",null,"t"),a("mi",null,"e"),a("mi",null,"r"),a("mo",null,"<"),a("mi",null,"b"),a("mi",null,"r"),a("mo",null,">"),a("mi",null,"t"),a("mi",null,"h"),a("mi",null,"i"),a("mi",null,"s"),a("mi",{mathvariant:"normal"},".")]),a("annotation",{encoding:"application/x-tex"},"router <br> this.")])])]),a("span",{class:"katex-html","aria-hidden":"true"},[a("span",{class:"strut",style:{height:"0.69444em"}}),a("span",{class:"strut bottom",style:{height:"0.73354em","vertical-align":"-0.0391em"}}),a("span",{class:"base textstyle uncramped"},[a("span",{class:"mord mathit",style:{"margin-right":"0.02778em"}},"r"),a("span",{class:"mord mathit"},"o"),a("span",{class:"mord mathit"},"u"),a("span",{class:"mord mathit"},"t"),a("span",{class:"mord mathit"},"e"),a("span",{class:"mord mathit",style:{"margin-right":"0.02778em"}},"r"),a("span",{class:"mrel"},"<"),a("span",{class:"mord mathit"},"b"),a("span",{class:"mord mathit",style:{"margin-right":"0.02778em"}},"r"),a("span",{class:"mrel"},">"),a("span",{class:"mord mathit"},"t"),a("span",{class:"mord mathit"},"h"),a("span",{class:"mord mathit"},"i"),a("span",{class:"mord mathit"},"s"),a("span",{class:"mord mathrm"},".")])])]),s("route")])],-1),r=n(`<ul><li><code> this.$router.push({path:&#39;/home&#39;})</code> 更改路由配置</li><li><code>this.$route.params</code> 获取当前路由参数信息等</li></ul><h2 id="使用路径匹配的方式" tabindex="-1"><a class="header-anchor" href="#使用路径匹配的方式" aria-hidden="true">#</a> 使用路径匹配的方式</h2><h3 id="修改路由配置" tabindex="-1"><a class="header-anchor" href="#修改路由配置" aria-hidden="true">#</a> 修改路由配置</h3><ul><li>router.js</li></ul><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code> <span class="token comment">// 动态路径参数 以冒号开头</span>
<span class="token punctuation">{</span> <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">&#39;/user/:id&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">component</span><span class="token operator">:</span> User <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">{</span><span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">&#39;/user/profile/:id&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">name</span><span class="token operator">:</span><span class="token string">&#39;UserProfile&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">component</span><span class="token operator">:</span> UserProfile<span class="token punctuation">}</span>
</code></pre></div><p>说明：主要是在 <code>path</code> 属性中增加了 <code>:id</code> 这样的占位符</p><h3 id="传递参数" tabindex="-1"><a class="header-anchor" href="#传递参数" aria-hidden="true">#</a> 传递参数</h3><h4 id="router-link" tabindex="-1"><a class="header-anchor" href="#router-link" aria-hidden="true">#</a> router-link</h4><div class="language-vue" data-ext="vue"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>router-link</span> <span class="token attr-name">:to</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>{name: &#39;UserProfile&#39;, params: {id: 1}}<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>个人信息<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>router-link</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><p>说明：此时我们将 <code>to</code> 改为了 <code>:to</code>，是为了将这一属性当成对象使用，注意 <strong>router-link 中的 name 属性名称</strong> 一定要和 <strong>路由中的 name 属性名称</strong> 匹配，因为这样 Vue 才能找到对应的路由路径；</p><h4 id="代码方式" tabindex="-1"><a class="header-anchor" href="#代码方式" aria-hidden="true">#</a> 代码方式</h4><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">this</span><span class="token punctuation">.</span>$router<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;UserProfile&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">params</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><h3 id="接收参数" tabindex="-1"><a class="header-anchor" href="#接收参数" aria-hidden="true">#</a> 接收参数</h3><p>在目标组件中使用</p><div class="language-vue" data-ext="vue"><pre class="language-vue"><code>{{ $route.params.id }}
</code></pre></div><p>来接收参数</p><h2 id="使用-props-的方式" tabindex="-1"><a class="header-anchor" href="#使用-props-的方式" aria-hidden="true">#</a> 使用 <code>props</code> 的方式</h2><h3 id="修改路由配置-1" tabindex="-1"><a class="header-anchor" href="#修改路由配置-1" aria-hidden="true">#</a> 修改路由配置</h3><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token punctuation">{</span>
        <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">&#39;nav/:ps&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;Nav&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">props</span><span class="token operator">:</span> <span class="token boolean">true</span> <span class="token punctuation">,</span>
        <span class="token function-variable function">component</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">import</span><span class="token punctuation">(</span> <span class="token comment">/* webpackChunkName: &quot;about&quot; */</span> <span class="token string">&#39;@/views/per/Nav.vue&#39;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre></div><p>说明：主要增加了 <code>props: true</code> 属性</p><h3 id="传递参数-1" tabindex="-1"><a class="header-anchor" href="#传递参数-1" aria-hidden="true">#</a> 传递参数</h3><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token function">toUser</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span>$router<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&quot;Nav&quot;</span><span class="token punctuation">,</span> <span class="token literal-property property">params</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token literal-property property">ps</span><span class="token operator">:</span> <span class="token string">&quot;uuid hello world&quot;</span> <span class="token punctuation">}</span>  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><h3 id="接收参数-1" tabindex="-1"><a class="header-anchor" href="#接收参数-1" aria-hidden="true">#</a> 接收参数</h3><p>为目标组件增加 <code>props</code> 属性， 模板中使用</p><div class="language-vue" data-ext="vue"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>nav<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h2</span><span class="token punctuation">&gt;</span></span>{{ ps }}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h2</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
<span class="token comment">// @ is an alias to /src</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&quot;Nav&quot;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">props</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">ps</span><span class="token operator">:</span> String<span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">methods</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token function">mounted</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>$route<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre></div>`,25),u=[c,l,r];function i(k,d){return p(),e("div",null,u)}const m=t(o,[["render",i],["__file","routerd.html.vue"]]);export{m as default};