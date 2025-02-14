import{_ as n,p as a,q as s,a1 as t}from"./framework-d81ad7e5.js";const p={},o=t(`<h3 id="定义路由的时候可以配置-meta-字段" tabindex="-1"><a class="header-anchor" href="#定义路由的时候可以配置-meta-字段" aria-hidden="true">#</a> 定义路由的时候可以配置 <code>meta</code> 字段：</h3><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> router <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">VueRouter</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">routes</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span>
      <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">&#39;/foo&#39;</span><span class="token punctuation">,</span>
      <span class="token literal-property property">component</span><span class="token operator">:</span> Foo<span class="token punctuation">,</span>
      <span class="token literal-property property">children</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token punctuation">{</span>
          <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">&#39;bar&#39;</span><span class="token punctuation">,</span>
          <span class="token literal-property property">component</span><span class="token operator">:</span> Bar<span class="token punctuation">,</span>
          <span class="token comment">// a meta field</span>
          <span class="token literal-property property">meta</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token literal-property property">requiresAuth</span><span class="token operator">:</span> <span class="token boolean">true</span> <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">]</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">]</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre></div><p>那么如何访问这个 <code>meta</code> 字段呢？</p><p>首先，我们称呼 <code>routes</code> 配置中的每个路由对象为 <strong>路由记录</strong>。路由记录可以是嵌套的，因此，当一个路由匹配成功后，他可能匹配多个路由记录</p><p>例如，根据上面的路由配置，<code>/foo/bar</code> 这个 URL 将会匹配父路由记录以及子路由记录。</p><p>一个路由匹配到的所有路由记录会暴露为 <code>$route</code> 对象 (还有在导航守卫中的路由对象) 的 <code>$route.matched</code> 数组。因此，我们需要遍历 <code>$route.matched</code> 来检查路由记录中的 <code>meta</code> 字段。</p><p>下面例子展示在全局导航守卫中检查元字段：</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code>router<span class="token punctuation">.</span><span class="token function">beforeEach</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">to<span class="token punctuation">,</span> from<span class="token punctuation">,</span> next</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>to<span class="token punctuation">.</span>matched<span class="token punctuation">.</span><span class="token function">some</span><span class="token punctuation">(</span><span class="token parameter">record</span> <span class="token operator">=&gt;</span> record<span class="token punctuation">.</span>meta<span class="token punctuation">.</span>requiresAuth<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// this route requires auth, check if logged in</span>
    <span class="token comment">// if not, redirect to login page.</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>auth<span class="token punctuation">.</span><span class="token function">loggedIn</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
        <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">&#39;/login&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">query</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token literal-property property">redirect</span><span class="token operator">:</span> to<span class="token punctuation">.</span>fullPath <span class="token punctuation">}</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
      <span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
    <span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// 确保一定要调用 next()</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre></div>`,8),e=[o];function c(r,l){return a(),s("div",null,e)}const k=n(p,[["render",c],["__file","routerh.html.vue"]]);export{k as default};
