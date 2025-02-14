import{_ as a,p as n,q as s,a1 as t}from"./framework-d81ad7e5.js";const p={},o=t(`<h3 id="监听data-中的数据" tabindex="-1"><a class="header-anchor" href="#监听data-中的数据" aria-hidden="true">#</a> 监听data 中的数据</h3><blockquote><p><code>watch</code> : 在vue中表示监听的意思 , 我们可以使用watch来响应数据的变化 监听data 中的数据</p></blockquote><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token literal-property property">watch</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token comment">//监听data 中的数据</span>
    <span class="token comment">// 单引号 &#39;&#39; 可以省略  -&gt;  name(newValue){...}</span>
    <span class="token string">&#39;name&#39;</span><span class="token punctuation">(</span>newValue<span class="token punctuation">,</span>oldValue<span class="token punctuation">)</span><span class="token punctuation">{</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>oldValue<span class="token punctuation">,</span><span class="token string">&#39;&lt;===原来 to 新===&gt;&#39;</span><span class="token punctuation">,</span>newValue<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><h3 id="使用监听器" tabindex="-1"><a class="header-anchor" href="#使用监听器" aria-hidden="true">#</a> 使用监听器</h3><blockquote><p><code>watch</code> : 监听器 , 可以监听某个属性.</p><p>基本格式 : function(newVal , oldVal)</p></blockquote><h3 id="init" tabindex="-1"><a class="header-anchor" href="#init" aria-hidden="true">#</a> init</h3><div class="language-html" data-ext="html"><pre class="language-html"><code>  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>app<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token comment">&lt;!-- 
      分析：如果使firstName和lastName被修改时，同步修改fullName？
     --&gt;</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>text<span class="token punctuation">&quot;</span></span> <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>firstName<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>text<span class="token punctuation">&quot;</span></span> <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>lastName<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>text<span class="token punctuation">&quot;</span></span> <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>fullName<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>

  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><h3 id="_01-监听器watch" tabindex="-1"><a class="header-anchor" href="#_01-监听器watch" aria-hidden="true">#</a> 01 监听器watch</h3><div class="language-html" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
  <span class="token keyword">var</span> vue <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Vue</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">el</span><span class="token operator">:</span> <span class="token string">&#39;#app&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">data</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">firstName</span><span class="token operator">:</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">,</span>
      <span class="token literal-property property">lastName</span><span class="token operator">:</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">,</span>
      <span class="token literal-property property">fullName</span><span class="token operator">:</span> <span class="token string">&#39;&#39;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">methods</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token comment">// 第一种方式：给前两个表单加上键盘抬起事件。当触发事件时，拼接两个name，为fullName赋值。</span>
      <span class="token function">handlerFullName</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>fullName <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>firstName <span class="token operator">+</span> <span class="token keyword">this</span><span class="token punctuation">.</span>lastName
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">watch</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token comment">// 监听器，可以监听某个属性</span>
        <span class="token string-property property">&#39;firstName&#39;</span><span class="token operator">:</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">newVal<span class="token punctuation">,</span> oldVal</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token comment">// 格式：要监听的属性:function(newVal, oldVal)</span>
          <span class="token keyword">this</span><span class="token punctuation">.</span>fullName <span class="token operator">=</span> newVal <span class="token operator">+</span> <span class="token keyword">this</span><span class="token punctuation">.</span>lastName
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token comment">// 使用监听器，可以直接对属性进行监听，不需要去监听用户的操作。使开发者只关注Model，不关注View</span>
        <span class="token string-property property">&#39;lastName&#39;</span><span class="token operator">:</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">newVal<span class="token punctuation">,</span> oldVal</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
          <span class="token keyword">this</span><span class="token punctuation">.</span>fullName <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>firstName <span class="token operator">+</span> newVal
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>

</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><h2 id="监听路由" tabindex="-1"><a class="header-anchor" href="#监听路由" aria-hidden="true">#</a> 监听路由</h2><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code>  <span class="token keyword">var</span> vue <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Vue</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      <span class="token literal-property property">el</span><span class="token operator">:</span> <span class="token string">&#39;#app&#39;</span><span class="token punctuation">,</span>
      <span class="token literal-property property">data</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token literal-property property">router</span><span class="token operator">:</span> routerObj<span class="token punctuation">,</span>
      <span class="token literal-property property">watch</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token string-property property">&#39;$route.fullPath&#39;</span><span class="token operator">:</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">newVal<span class="token punctuation">,</span> oldVal</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
          <span class="token comment">// 监听路由去执行对应的逻辑</span>
          <span class="token comment">// 应用场景:监听路由的url是否为登录url.如果不是,校验用户是否登录,未登录的情况下跳转到登录页</span>
          console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;用户路由跳转，url为：&#39;</span><span class="token punctuation">,</span>  newVal<span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre></div><h3 id="编程路由导航" tabindex="-1"><a class="header-anchor" href="#编程路由导航" aria-hidden="true">#</a> 编程路由导航</h3><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code>  <span class="token keyword">var</span> vue <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Vue</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      <span class="token literal-property property">el</span><span class="token operator">:</span> <span class="token string">&#39;#app&#39;</span><span class="token punctuation">,</span>
      <span class="token literal-property property">data</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token literal-property property">methods</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token function">toLogin</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
          <span class="token comment">// 编程式导航：通过代码去操作路由</span>
          <span class="token comment">// this.$router.push(&#39;/login&#39;)</span>
          <span class="token comment">// 编程式路由如何传递参数</span>
          
          <span class="token keyword">this</span><span class="token punctuation">.</span>$router<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
            <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">&#39;/login&#39;</span><span class="token punctuation">,</span> 
            <span class="token literal-property property">params</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token string">&#39;2121&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;呵呵&#39;</span><span class="token punctuation">}</span>
          <span class="token punctuation">}</span><span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span> 
</code></pre></div><ul><li>通过 路由配置的<code>Name</code> 属性, <code>this.$router.push({ name: &#39;User&#39;, params: { id: 56 } })</code></li><li>通过 <strong>path</strong> 路径的方式传递使用 <code>query</code></li></ul><hr><hr><ul><li>1 直接在路由中传参</li></ul><p><code>this.$router.push({ path: </code>/childPage/\${id}<code>, })</code></p><p>需要对应路由配置如下：</p><div class="language-json" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
 path<span class="token operator">:</span> &#39;/childPage/<span class="token operator">:</span>id&#39;<span class="token punctuation">,</span>
 name<span class="token operator">:</span> &#39;childPage&#39;<span class="token punctuation">,</span>
 component<span class="token operator">:</span> childPage
<span class="token punctuation">}</span>
</code></pre></div><p>获取参数：<code>this.$route.parames.id</code></p><ul><li><ol start="2"><li>通过路由属性中的name来确定匹配的路由，通过params来传递参数</li></ol></li></ul><p><code> this.$router.push({ name: &#39;childPage&#39;, params: { id: id } })</code></p><p>需要对应路由配置如下：</p><div class="language-json" data-ext="json"><pre class="language-json"><code>　　　　<span class="token punctuation">{</span>

      path<span class="token operator">:</span> &#39;/childPage&#39;<span class="token punctuation">,</span>

      name<span class="token operator">:</span> &#39;childPage&#39;<span class="token punctuation">,</span>

      component<span class="token operator">:</span> childPage

     <span class="token punctuation">}</span>
</code></pre></div><ul><li>3)使用path来匹配路由，然后通过query来传递参数</li></ul><ul><li><code>this.$router.push({ path: &#39;/childPage&#39;, query: { id: id } })</code></li></ul><p>需要对应路由配置如下：</p><div class="language-json" data-ext="json"><pre class="language-json"><code>　   <span class="token punctuation">{</span>

        path<span class="token operator">:</span> &#39;/childPage&#39;<span class="token punctuation">,</span>

        name<span class="token operator">:</span> &#39;childPage&#39;<span class="token punctuation">,</span>

        component<span class="token operator">:</span> childPage

       <span class="token punctuation">}</span>
</code></pre></div><ul><li>获取参数：<code>this.$route.query.id</code></li></ul><h3 id="watch-object" tabindex="-1"><a class="header-anchor" href="#watch-object" aria-hidden="true">#</a> watch Object</h3><ul><li><strong>监听对象</strong></li></ul><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token literal-property property">watch</span><span class="token operator">:</span> <span class="token punctuation">{</span>
	<span class="token literal-property property">tobj</span><span class="token operator">:</span><span class="token punctuation">{</span>
		<span class="token function">handler</span><span class="token punctuation">(</span><span class="token parameter">new_value<span class="token punctuation">,</span>old_value</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
			console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>new_value<span class="token punctuation">,</span>old_value<span class="token punctuation">)</span>
		<span class="token punctuation">}</span><span class="token punctuation">,</span>
		<span class="token literal-property property">deep</span><span class="token operator">:</span> <span class="token boolean">true</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><h4 id="添加deep属性-向下添加监听到每一个key-deep默认是false" tabindex="-1"><a class="header-anchor" href="#添加deep属性-向下添加监听到每一个key-deep默认是false" aria-hidden="true">#</a> 添加deep属性,向下添加监听到每一个key,deep默认是false</h4>`,34),e=[o];function c(l,u){return n(),s("div",null,e)}const i=a(p,[["render",c],["__file","vue_vd_watch.html.vue"]]);export{i as default};
