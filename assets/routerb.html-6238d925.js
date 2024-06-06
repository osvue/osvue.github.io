import{_ as e,M as o,p as r,q as c,R as n,t as s,N as t,a1 as p}from"./framework-d81ad7e5.js";const l={},i=p(`<div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token comment">//当设置 true 的时候该路由不会再侧边栏出现 如401，login等页面，或者如一些编辑页面/edit/1</span>
<span class="token literal-property property">hidden</span><span class="token operator">:</span> <span class="token boolean">true</span> <span class="token comment">// (默认 false)</span>

<span class="token comment">//当设置 noredirect 的时候该路由在面包屑导航中不可被点击</span>
<span class="token literal-property property">redirect</span><span class="token operator">:</span> <span class="token string">&#39;noredirect&#39;</span>

<span class="token comment">//当你一个路由下面的 children 声明的路由大于1个时，自动会变成嵌套的模式--如组件页面</span>
<span class="token comment">//只有一个时，会将那个子路由当做根路由显示在侧边栏--如引导页面</span>
<span class="token comment">//若你想不管路由下面的 children 声明的个数都显示你的根路由</span>
<span class="token comment">//你可以设置 alwaysShow: true，这样它就会忽略之前定义的规则，一直显示根路由</span>
<span class="token literal-property property">alwaysShow</span><span class="token operator">:</span> <span class="token boolean">true</span>

<span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;router-name&#39;</span> <span class="token comment">//设定路由的名字，一定要填写不然使用&lt;keep-alive&gt;时会出现各种问题</span>
<span class="token literal-property property">meta</span><span class="token operator">:</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">&#39;title&#39;</span> <span class="token comment">//设置该路由在侧边栏和面包屑中展示的名字</span>
  <span class="token literal-property property">icon</span><span class="token operator">:</span> <span class="token string">&#39;svg-name&#39;</span> <span class="token comment">//设置该路由的图标</span>
  <span class="token literal-property property">noCache</span><span class="token operator">:</span> <span class="token boolean">true</span> <span class="token comment">//如果设置为true，则不会被 &lt;keep-alive&gt; 缓存(默认 false)</span>
  <span class="token literal-property property">breadcrumb</span><span class="token operator">:</span> <span class="token boolean">false</span> <span class="token comment">// 如果设置为false，则不会在breadcrumb面包屑中显示,</span>
  <span class="token literal-property property">affix</span><span class="token operator">:</span> <span class="token boolean">true</span> <span class="token comment">// 设置成true表示，tag-view不可删除</span>
<span class="token punctuation">}</span>
</code></pre></div>`,1),u={id:"router-构建选项",tabindex:"-1"},k=n("a",{class:"header-anchor",href:"#router-构建选项","aria-hidden":"true"},"#",-1),d={href:"https://router.vuejs.org/zh/api/#router-%E6%9E%84%E5%BB%BA%E9%80%89%E9%A1%B9",target:"_blank",rel:"noopener noreferrer"},h={id:"routes",tabindex:"-1"},m=n("a",{class:"header-anchor",href:"#routes","aria-hidden":"true"},"#",-1),y={href:"https://router.vuejs.org/zh/api/#routes",target:"_blank",rel:"noopener noreferrer"},g=p(`<ul><li><p>类型: <code>Array&lt;RouteConfig&gt;</code></p><p><code>RouteConfig</code> 的类型定义：</p><div class="language-typescript" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">interface</span> <span class="token class-name">RouteConfig</span> <span class="token operator">=</span> <span class="token punctuation">{</span>
  path<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">,</span>
  component<span class="token operator">?</span><span class="token operator">:</span> Component<span class="token punctuation">,</span>
  name<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">,</span> <span class="token comment">// 命名路由</span>
  components<span class="token operator">?</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token punctuation">[</span>name<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">]</span><span class="token operator">:</span> Component <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token comment">// 命名视图组件</span>
  redirect<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token operator">|</span> Location <span class="token operator">|</span> <span class="token builtin">Function</span><span class="token punctuation">,</span>
  props<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">boolean</span> <span class="token operator">|</span> Object <span class="token operator">|</span> <span class="token builtin">Function</span><span class="token punctuation">,</span>
  alias<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token operator">|</span> <span class="token builtin">Array</span><span class="token operator">&lt;</span><span class="token builtin">string</span><span class="token operator">&gt;</span><span class="token punctuation">,</span>
  children<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">Array</span><span class="token operator">&lt;</span>RouteConfig<span class="token operator">&gt;</span><span class="token punctuation">,</span> <span class="token comment">// 嵌套路由</span>
  beforeEnter<span class="token operator">?</span><span class="token operator">:</span> <span class="token punctuation">(</span>to<span class="token operator">:</span> Route<span class="token punctuation">,</span> from<span class="token operator">:</span> Route<span class="token punctuation">,</span> next<span class="token operator">:</span> <span class="token builtin">Function</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">void</span><span class="token punctuation">,</span>
  meta<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">any</span><span class="token punctuation">,</span>

  <span class="token comment">// 2.6.0+</span>
  caseSensitive<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">boolean</span><span class="token punctuation">,</span> <span class="token comment">// 匹配规则是否大小写敏感？(默认值：false)</span>
  pathToRegexpOptions<span class="token operator">?</span><span class="token operator">:</span> Object <span class="token comment">// 编译正则的选项</span>
<span class="token punctuation">}</span>
</code></pre></div></li></ul>`,1),_={id:"mode",tabindex:"-1"},b=n("a",{class:"header-anchor",href:"#mode","aria-hidden":"true"},"#",-1),f={href:"https://router.vuejs.org/zh/api/#mode",target:"_blank",rel:"noopener noreferrer"},v=n("li",null,[n("p",null,[s("类型: "),n("code",null,"string")])],-1),j=n("li",null,[n("p",null,[s("默认值: "),n("code",null,'"hash" (浏览器环境) | "abstract" (Node.js 环境)')])],-1),x=n("p",null,[s("可选值: "),n("code",null,'"hash" | "history" | "abstract"')],-1),w=n("p",null,"配置路由模式:",-1),R=n("li",null,[n("code",null,"hash"),s(": 使用 URL hash 值来作路由。支持所有浏览器，包括不支持 HTML5 History Api 的浏览器。")],-1),E=n("code",null,"history",-1),A={href:"https://router.vuejs.org/zh/guide/essentials/history-mode.html",target:"_blank",rel:"noopener noreferrer"},C=n("li",null,[n("code",null,"abstract"),s(": 支持所有 JavaScript 运行环境，如 Node.js 服务器端。"),n("strong",null,"如果发现没有浏览器的 API，路由会自动强制进入这个模式。")],-1),L={id:"base",tabindex:"-1"},U=n("a",{class:"header-anchor",href:"#base","aria-hidden":"true"},"#",-1),q={href:"https://router.vuejs.org/zh/api/#base",target:"_blank",rel:"noopener noreferrer"},B=p(`<ul><li><p>类型: <code>string</code></p></li><li><p>默认值: <code>&quot;/&quot;</code></p><p>应用的基路径。例如，如果整个单页应用服务在 <code>/app/</code> 下，然后 <code>base</code> 就应该设为 <code>&quot;/app/&quot;</code>。</p></li></ul><h2 id="实例" tabindex="-1"><a class="header-anchor" href="#实例" aria-hidden="true">#</a> 实例</h2><ul><li>也不是所有菜单都需要存入数据库，有些公共的菜单只需要在 src/router/routers.js 中添加就可以了，如：个人中心页面</li></ul><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token punctuation">{</span>
  <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">&#39;/user&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">component</span><span class="token operator">:</span> Layout<span class="token punctuation">,</span>
  <span class="token literal-property property">hidden</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token literal-property property">redirect</span><span class="token operator">:</span> <span class="token string">&#39;noredirect&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">children</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">{</span>
    <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">&#39;center&#39;</span><span class="token punctuation">,</span>
    <span class="token function-variable function">component</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">import</span><span class="token punctuation">(</span><span class="token string">&#39;@/views/system/user/center&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;个人中心&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">meta</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">&#39;个人中心&#39;</span><span class="token punctuation">,</span>
      <span class="token literal-property property">icon</span><span class="token operator">:</span> <span class="token string">&#39;user&#39;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre></div><h2 id="嵌套路由的命名" tabindex="-1"><a class="header-anchor" href="#嵌套路由的命名" aria-hidden="true">#</a> 嵌套路由的命名</h2><blockquote><p>要在嵌套的出口中渲染组件，需要在 <code>VueRouter</code> 的参数中使用 <code>children</code> 配置：</p></blockquote><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> router <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">VueRouter</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">routes</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span>
      <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">&#39;/user/:id&#39;</span><span class="token punctuation">,</span>
      <span class="token literal-property property">component</span><span class="token operator">:</span> User<span class="token punctuation">,</span>
      <span class="token literal-property property">children</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token punctuation">{</span>
          <span class="token comment">// 当 /user/:id/profile 匹配成功，</span>
          <span class="token comment">// UserProfile 会被渲染在 User 的 &lt;router-view&gt; 中</span>
          <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">&#39;profile&#39;</span><span class="token punctuation">,</span>
          <span class="token literal-property property">component</span><span class="token operator">:</span> UserProfile
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
          <span class="token comment">// 当 /user/:id/posts 匹配成功</span>
          <span class="token comment">// UserPosts 会被渲染在 User 的 &lt;router-view&gt; 中</span>
          <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">&#39;posts&#39;</span><span class="token punctuation">,</span>
          <span class="token literal-property property">component</span><span class="token operator">:</span> UserPosts
        <span class="token punctuation">}</span>
      <span class="token punctuation">]</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">]</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre></div><p><strong>要注意，以 / 开头的嵌套路径会被当作根路径。 这让你充分的使用嵌套组件而无须设置嵌套的路径。</strong></p>`,8);function N(H,P){const a=o("ExternalLinkIcon");return r(),c("div",null,[i,n("h2",u,[k,s(),n("a",d,[s("#"),t(a)]),s("Router 构建选项")]),n("h3",h,[m,s(),n("a",y,[s("#"),t(a)]),s("routes")]),g,n("h3",_,[b,s(),n("a",f,[s("#"),t(a)]),s("mode")]),n("ul",null,[v,j,n("li",null,[x,w,n("ul",null,[R,n("li",null,[E,s(": 依赖 HTML5 History API 和服务器配置。查看 "),n("a",A,[s("HTML5 History 模式"),t(a)]),s("。")]),C])])]),n("h3",L,[U,s(),n("a",q,[s("#"),t(a)]),s("base")]),B])}const z=e(l,[["render",N],["__file","routerb.html.vue"]]);export{z as default};
