import{_ as p,M as o,p as c,q as r,R as s,t as n,N as t,a1 as e}from"./framework-d81ad7e5.js";const l={},u=e(`<ul><li>我们经常需要把某种模式匹配到的所有路由，全都映射到同个组件。例如，我们有一个 <code>User</code> 组件，对于所有 ID 各不相同的用户，都要使用这个组件来渲染。那么，我们可以在 <code>vue-router</code> 的路由路径中使用“动态路径参数”(dynamic segment) 来达到这个效果：</li></ul><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> User <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">template</span><span class="token operator">:</span> <span class="token string">&#39;&lt;div&gt;User&lt;/div&gt;&#39;</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> router <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">VueRouter</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">routes</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token comment">// 动态路径参数 以冒号开头</span>
    <span class="token punctuation">{</span> <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">&#39;/user/:id&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">component</span><span class="token operator">:</span> User <span class="token punctuation">}</span>
  <span class="token punctuation">]</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre></div><p>现在呢，像 <code>/user/foo</code> 和 <code>/user/bar</code> 都将映射到相同的路由。</p><p>一个“路径参数”使用冒号 <code>:</code> 标记。当匹配到一个路由时，参数值会被设置到 <code>this.$route.params</code>，可以在每个组件内使用。于是，我们可以更新 <code>User</code> 的模板，输出当前用户的 ID：</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> User <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">template</span><span class="token operator">:</span> <span class="token string">&#39;&lt;div&gt;User {{ $route.params.id }}&lt;/div&gt;&#39;</span>
<span class="token punctuation">}</span>
</code></pre></div><p>你可以在一个路由中设置多段“路径参数”，对应的值都会设置到 <code>$route.params</code> 中。例如：</p><table><thead><tr><th>模式</th><th>匹配路径</th><th>$route.params</th></tr></thead><tbody><tr><td>/user/:username</td><td>/user/evan</td><td><code>{ username: &#39;evan&#39; }</code></td></tr><tr><td>/user/:username/post/:post_id</td><td>/user/evan/post/123</td><td><code>{ username: &#39;evan&#39;, post_id: &#39;123&#39; }</code></td></tr></tbody></table>`,7),i=s("code",null,"$route.params",-1),k=s("code",null,"$route",-1),d=s("code",null,"$route.query",-1),h=s("code",null,"$route.hash",-1),m={href:"https://router.vuejs.org/zh/api/#%E8%B7%AF%E7%94%B1%E5%AF%B9%E8%B1%A1",target:"_blank",rel:"noopener noreferrer"},g={id:"响应路由参数的变化",tabindex:"-1"},y=s("a",{class:"header-anchor",href:"#响应路由参数的变化","aria-hidden":"true"},"#",-1),_={href:"https://router.vuejs.org/zh/guide/essentials/dynamic-matching.html#%E5%93%8D%E5%BA%94%E8%B7%AF%E7%94%B1%E5%8F%82%E6%95%B0%E7%9A%84%E5%8F%98%E5%8C%96",target:"_blank",rel:"noopener noreferrer"},v=e(`<p>提醒一下，当使用路由参数时，例如从 <code>/user/foo</code> 导航到 <code>/user/bar</code>，<strong>原来的组件实例会被复用</strong>。因为两个路由都渲染同个组件，比起销毁再创建，复用则显得更加高效。<strong>不过，这也意味着组件的生命周期钩子不会再被调用</strong>。</p><p>复用组件时，想对路由参数的变化作出响应的话，你可以简单地 watch (监测变化) <code>$route</code> 对象：</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> User <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">template</span><span class="token operator">:</span> <span class="token string">&#39;...&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">watch</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token function">$route</span><span class="token punctuation">(</span><span class="token parameter">to<span class="token punctuation">,</span> <span class="token keyword">from</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token comment">// 对路由变化作出响应...</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div>`,3),f=s("code",null,"beforeRouteUpdate",-1),w={href:"https://router.vuejs.org/zh/guide/advanced/navigation-guards.html",target:"_blank",rel:"noopener noreferrer"},E=e(`<div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> User <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">template</span><span class="token operator">:</span> <span class="token string">&#39;...&#39;</span><span class="token punctuation">,</span>
  <span class="token function">beforeRouteUpdate</span><span class="token punctuation">(</span><span class="token parameter">to<span class="token punctuation">,</span> from<span class="token punctuation">,</span> next</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// react to route changes...</span>
    <span class="token comment">// don&#39;t forget to call next()</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div>`,1),j={id:"捕获所有路由或-404-not-found-路由",tabindex:"-1"},b=s("a",{class:"header-anchor",href:"#捕获所有路由或-404-not-found-路由","aria-hidden":"true"},"#",-1),x={href:"https://router.vuejs.org/zh/guide/essentials/dynamic-matching.html#%E6%8D%95%E8%8E%B7%E6%89%80%E6%9C%89%E8%B7%AF%E7%94%B1%E6%88%96-404-not-found-%E8%B7%AF%E7%94%B1",target:"_blank",rel:"noopener noreferrer"},B=e(`<p>常规参数只会匹配被 <code>/</code> 分隔的 URL 片段中的字符。如果想匹配<strong>任意路径</strong>，我们可以使用通配符 (<code>*</code>)：</p><h3 id="vue3-差异" tabindex="-1"><a class="header-anchor" href="#vue3-差异" aria-hidden="true">#</a> vue3 差异</h3><ul><li><em><em>vue3使用:pathMatch(&#39;<em>&#39;) 或者 :pathMatch(&#39;</em>&#39;)</em> 或者 :catchAll(.*)</em>*</li></ul><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code>
<span class="token punctuation">{</span>
     <span class="token comment">// 识别不到的path 自动调转404</span>
     <span class="token comment">// vue2使用* vue3使用:pathMatch(&#39;*&#39;) 或者 :pathMatch(&#39;*&#39;)* 或者 :catchAll(.*)</span>
    <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">&quot;/:catchAll(.*)&quot;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">redirect</span><span class="token operator">:</span> <span class="token string">&#39;/404&#39;</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span>




<span class="token punctuation">{</span>
  <span class="token comment">// 会匹配所有路径</span>
  <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">&#39;*&#39;</span>
<span class="token punctuation">}</span>
<span class="token punctuation">{</span>
  <span class="token comment">// 会匹配以 \`/user-\` 开头的任意路径</span>
  <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">&#39;/user-*&#39;</span>
<span class="token punctuation">}</span>
</code></pre></div>`,4),A=s("em",null,"通配符",-1),$=s("em",null,"通配符",-1),U=s("code",null,"{ path: '*' }",-1),M=s("em",null,"History 模式",-1),N={href:"https://router.vuejs.org/zh/guide/essentials/history-mode.html",target:"_blank",rel:"noopener noreferrer"},R=e(`<p>当使用一个<em>通配符</em>时，<code>$route.params</code> 内会自动添加一个名为 <code>pathMatch</code> 参数。它包含了 URL 通过<em>通配符</em>被匹配的部分：</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 给出一个路由 { path: &#39;/user-*&#39; }</span>
<span class="token keyword">this</span><span class="token punctuation">.</span>$router<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token string">&#39;/user-admin&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">this</span><span class="token punctuation">.</span>$route<span class="token punctuation">.</span>params<span class="token punctuation">.</span>pathMatch <span class="token comment">// &#39;admin&#39;</span>
<span class="token comment">// 给出一个路由 { path: &#39;*&#39; }</span>
<span class="token keyword">this</span><span class="token punctuation">.</span>$router<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token string">&#39;/non-existing&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">this</span><span class="token punctuation">.</span>$route<span class="token punctuation">.</span>params<span class="token punctuation">.</span>pathMatch <span class="token comment">// &#39;/non-existing&#39;</span>
</code></pre></div>`,2),F={id:"匹配优先级",tabindex:"-1"},V=s("a",{class:"header-anchor",href:"#匹配优先级","aria-hidden":"true"},"#",-1),z={href:"https://router.vuejs.org/zh/guide/essentials/dynamic-matching.html#%E5%8C%B9%E9%85%8D%E4%BC%98%E5%85%88%E7%BA%A7",target:"_blank",rel:"noopener noreferrer"},C=e(`<p>有时候，同一个路径可以匹配多个路由，此时，匹配的优先级就按照路由的定义顺序：路由定义得越早，优先级就越高。</p><h3 id="嵌套-多级-路由" tabindex="-1"><a class="header-anchor" href="#嵌套-多级-路由" aria-hidden="true">#</a> “嵌套（多级）路由”</h3><h5 id="注意点1" tabindex="-1"><a class="header-anchor" href="#注意点1" aria-hidden="true">#</a> 注意点1：</h5><ul><li>设置1级路由路径path属性要加**“/”**</li><li>而设置2级路由（也就是1级路由下的子路由）的path属性就不要加“/”了，</li><li>因为人家底层遍历路由规则的时候已经给你加“/”了。</li><li>假设你2级路由真加了“/”，最终效果当点击2级路由后页面什么都不展示，因为路由规则匹配不到。</li></ul><ul><li>转<code>/home</code>路径下的<code>/news</code>组件，路径改变了，前端路由器就检测到了，检测到后拿着你的<code>/news</code>回到路由规则进行匹配</li><li>人家只会对比1级路由，对比后发现未匹配到，所以页面什么都不呈现，所以解决方案就是带上父路径</li></ul><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 该文件专门用于创建整个应用的路由器</span>
<span class="token keyword">import</span> VueRouter <span class="token keyword">from</span> <span class="token string">&#39;vue-router&#39;</span>
<span class="token comment">//引入组件</span>
<span class="token keyword">import</span> About <span class="token keyword">from</span> <span class="token string">&#39;../pages/About&#39;</span>
<span class="token keyword">import</span> Home <span class="token keyword">from</span> <span class="token string">&#39;../pages/Home&#39;</span>
<span class="token keyword">import</span> News <span class="token keyword">from</span> <span class="token string">&#39;../pages/News&#39;</span>
<span class="token keyword">import</span> Message <span class="token keyword">from</span> <span class="token string">&#39;../pages/Message&#39;</span>

<span class="token comment">//创建并暴露一个路由器</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">new</span> <span class="token class-name">VueRouter</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
	<span class="token literal-property property">routes</span><span class="token operator">:</span><span class="token punctuation">[</span>
		<span class="token punctuation">{</span>
			<span class="token literal-property property">path</span><span class="token operator">:</span><span class="token string">&#39;/about&#39;</span><span class="token punctuation">,</span>
			<span class="token literal-property property">component</span><span class="token operator">:</span>About
		<span class="token punctuation">}</span><span class="token punctuation">,</span>
		<span class="token punctuation">{</span>
			<span class="token literal-property property">path</span><span class="token operator">:</span><span class="token string">&#39;/home&#39;</span><span class="token punctuation">,</span>
			<span class="token literal-property property">component</span><span class="token operator">:</span>Home<span class="token punctuation">,</span>
			<span class="token literal-property property">children</span><span class="token operator">:</span><span class="token punctuation">[</span>
				<span class="token punctuation">{</span>
					<span class="token literal-property property">path</span><span class="token operator">:</span><span class="token string">&#39;news&#39;</span><span class="token punctuation">,</span>
					<span class="token literal-property property">component</span><span class="token operator">:</span>News<span class="token punctuation">,</span>
				<span class="token punctuation">}</span><span class="token punctuation">,</span>
				<span class="token punctuation">{</span>
					<span class="token literal-property property">path</span><span class="token operator">:</span><span class="token string">&#39;message&#39;</span><span class="token punctuation">,</span>
					<span class="token literal-property property">component</span><span class="token operator">:</span>Message<span class="token punctuation">,</span>
				<span class="token punctuation">}</span>
			<span class="token punctuation">]</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">]</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

</code></pre></div>`,6);function D(I,L){const a=o("ExternalLinkIcon");return c(),r("div",null,[u,s("p",null,[n("除了 "),i,n(" 外，"),k,n(" 对象还提供了其它有用的信息，例如，"),d,n(" (如果 URL 中有查询参数)、"),h,n(" 等等。你可以查看 "),s("a",m,[n("API 文档"),t(a)]),n(" 的详细说明。")]),s("h2",g,[y,n(),s("a",_,[n("#"),t(a)]),n("响应路由参数的变化")]),v,s("p",null,[n("或者使用 2.2 中引入的 "),f,n(),s("a",w,[n("导航守卫"),t(a)]),n("：")]),E,s("h2",j,[b,n(),s("a",x,[n("#"),t(a)]),n("捕获所有路由或 404 Not found 路由")]),B,s("p",null,[n("当使用"),A,n("路由时，请确保路由的顺序是正确的，也就是说含有"),$,n("的路由应该放在最后。路由 "),U,n(" 通常用于客户端 404 错误。如果你使用了"),M,n("，请确保"),s("a",N,[n("正确配置你的服务器"),t(a)]),n("。")]),R,s("h2",F,[V,n(),s("a",z,[n("#"),t(a)]),n("匹配优先级")]),C])}const H=p(l,[["render",D],["__file","routerd_dy.html.vue"]]);export{H as default};
