import{_ as n,p as a,q as s,a1 as p}from"./framework-d81ad7e5.js";const t={},o=p(`<ul><li><p><strong>/data/:id这个路由匹配/data/1,/data/2这里的 id 叫 params</strong></p></li><li><p><strong>/data?id=1 /data?id=2 这里的 id 叫 query</strong></p></li><li><p>当你使用params方法传参的时候，要在路由后面加参数名，并且传参的时候，参数名要跟路由后面设置的参数名对应。</p></li><li><p>使用query方法，就没有这种限制，直接在跳转里面用就可以.</p></li></ul><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code> 
<span class="token keyword">const</span> router <span class="token operator">=</span> <span class="token function">createRouter</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">routes</span><span class="token operator">:</span><span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
         <span class="token literal-property property">name</span><span class="token operator">:</span><span class="token string">&quot;Home&quot;</span><span class="token punctuation">,</span>
         <span class="token literal-property property">path</span><span class="token operator">:</span><span class="token string">&quot;/home&quot;</span><span class="token punctuation">,</span>
         <span class="token function-variable function">component</span><span class="token operator">:</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">=&gt;</span><span class="token keyword">import</span><span class="token punctuation">(</span><span class="token string">&quot;../views/home.vue&quot;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
         <span class="token literal-property property">name</span><span class="token operator">:</span><span class="token string">&quot;News&quot;</span><span class="token punctuation">,</span>
         <span class="token literal-property property">path</span><span class="token operator">:</span><span class="token string">&quot;/news/:name/:age&quot;</span><span class="token punctuation">,</span>
         <span class="token function-variable function">component</span><span class="token operator">:</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">=&gt;</span><span class="token keyword">import</span><span class="token punctuation">(</span><span class="token string">&quot;../views/news.vue&quot;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
         <span class="token literal-property property">name</span><span class="token operator">:</span><span class="token string">&quot;NewsTest&quot;</span><span class="token punctuation">,</span>
         <span class="token comment">// 传递 params 参数必须在此声明/:name/:age?</span>
         <span class="token comment">// :age? 问号代表此参数可传可不传</span>
         <span class="token literal-property property">path</span><span class="token operator">:</span><span class="token string">&quot;/newsText/:name/:age?&quot;</span><span class="token punctuation">,</span>
         <span class="token function-variable function">component</span><span class="token operator">:</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">=&gt;</span><span class="token keyword">import</span><span class="token punctuation">(</span><span class="token string">&quot;../views/news.vue&quot;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span>
   <span class="token punctuation">]</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span> 
</code></pre></div><h2 id="路由-query参数" tabindex="-1"><a class="header-anchor" href="#路由-query参数" aria-hidden="true">#</a> 路由-query参数</h2><ul><li>路由的查询参数是一种在URL中传递数据的机制。它们可以用于在不同的路由之间传递参数</li></ul><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code>
</code></pre></div><ul><li><strong>注意这里是用name配置项的 ，而不是用path配置项。</strong></li></ul><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code>router<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">name</span><span class="token operator">:</span><span class="token string">&#39;xiangqing&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">params</span><span class="token operator">:</span><span class="token punctuation">{</span>
        <span class="token literal-property property">id</span><span class="token operator">:</span>news<span class="token punctuation">.</span>id<span class="token punctuation">,</span>
        <span class="token literal-property property">title</span><span class="token operator">:</span>news<span class="token punctuation">.</span>title<span class="token punctuation">,</span>
        <span class="token literal-property property">content</span><span class="token operator">:</span>news<span class="token punctuation">.</span>content
    <span class="token punctuation">}</span> 
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre></div><h2 id="路由的props-将query或params参数以props的形式传递给组件" tabindex="-1"><a class="header-anchor" href="#路由的props-将query或params参数以props的形式传递给组件" aria-hidden="true">#</a> 路由的props：将query或params参数以props的形式传递给组件</h2><ul><li><p>如：<code>&lt;News :name=&quot;name&quot; :age=&quot;age“&gt;</code></p></li><li><p>接收参数：<code>defineProps([&quot;name&quot;,&quot;age&quot;])</code></p></li></ul><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token punctuation">{</span>
         <span class="token literal-property property">name</span><span class="token operator">:</span><span class="token string">&quot;News&quot;</span><span class="token punctuation">,</span>
         <span class="token literal-property property">path</span><span class="token operator">:</span><span class="token string">&quot;/news/:name/:age&quot;</span><span class="token punctuation">,</span>
         <span class="token function-variable function">component</span><span class="token operator">:</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">=&gt;</span><span class="token keyword">import</span><span class="token punctuation">(</span><span class="token string">&quot;../views/news.vue&quot;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>

         <span class="token comment">// 简单写法：将params参数以propa形式传递给组件 &lt;News :name=&quot;name&quot; :age=&quot;age&quot;&gt;</span>
         <span class="token comment">// props:true,</span>


         <span class="token comment">// 函数写法：可指定将query参数以propa形式传递给组件</span>
         <span class="token function">props</span><span class="token punctuation">(</span><span class="token parameter">route</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span> route<span class="token punctuation">.</span>query
         <span class="token punctuation">}</span><span class="token punctuation">,</span>
         <span class="token comment">// 对象写法：将数据写死</span>
         <span class="token comment">// props:{</span>
         <span class="token comment">//    name:&quot;张三&quot;,</span>
         <span class="token comment">//    age:18</span>
         <span class="token comment">// }</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span>
</code></pre></div>`,10),e=[o];function c(r,l){return a(),s("div",null,e)}const i=n(t,[["render",c],["__file","vueva.html.vue"]]);export{i as default};
