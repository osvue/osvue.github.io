import{_ as n,p as s,q as a,a1 as t}from"./framework-d81ad7e5.js";const p={},o=t(`<h3 id="router" tabindex="-1"><a class="header-anchor" href="#router" aria-hidden="true">#</a> $router</h3><h4 id="注意-userouter执行一定要放在setup方法内的顶部或者其他位置-不能放在下面setup的函数里面执行-否则作用域改变userouter执行是undefined" tabindex="-1"><a class="header-anchor" href="#注意-userouter执行一定要放在setup方法内的顶部或者其他位置-不能放在下面setup的函数里面执行-否则作用域改变userouter执行是undefined" aria-hidden="true">#</a> 注意：useRouter执行一定要放在setup方法内的顶部或者其他位置，不能放在下面setup的函数里面执行，否则作用域改变useRouter执行是undefined</h4><ul><li><p><strong>useRouter 的用法</strong> 在前端开发中，我们经常需要程序处理用户的路由导航，这时候就需要用到 useRouter。它是一个用于获取当前路由实例的函数，我们可以调用这个函数来获取路由实例，然后进行路由导航。</p></li><li><p><strong>useRoute 的用法</strong> 除了需要导航路由之外，我们还需要获取一些路由信息，这时候就需要用到 useRoute。它是一个用于获取当前路由对象的函数，我们可以调用这个函数来获取路由的参数、查询参数等信息。</p></li><li><p>传递参数</p></li></ul><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> createRouter<span class="token punctuation">,</span>createWebHistory<span class="token punctuation">,</span>createWebHashHistory <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue-router&#39;</span>
<span class="token keyword">import</span> File1 <span class="token keyword">from</span> <span class="token string">&#39;../components/File1.vue&#39;</span>
<span class="token keyword">import</span> File2 <span class="token keyword">from</span> <span class="token string">&#39;../components/File2.vue&#39;</span>

<span class="token keyword">const</span> routes <span class="token operator">=</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span>
        <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">&#39;/&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">component</span><span class="token operator">:</span>File1
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
        <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">&#39;/file2/:username/abc/:userid&#39;</span><span class="token punctuation">,</span> <span class="token comment">//注意看这个</span>
        <span class="token literal-property property">component</span><span class="token operator">:</span>File2
    <span class="token punctuation">}</span>
<span class="token punctuation">]</span>

<span class="token keyword">const</span> router <span class="token operator">=</span> <span class="token function">createRouter</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">history</span><span class="token operator">:</span> <span class="token function">createWebHistory</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token comment">// history:createWebHashHistory(),</span>
    routes<span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> router<span class="token punctuation">;</span>
</code></pre></div><ul><li><strong>useRouter</strong><ul><li><code>useRouter()</code>返回的是object, 类似于vue2的<code>this.$router</code></li></ul></li><li><strong>getCurrentInstance</strong></li></ul><h3 id="vue3获取当前this" tabindex="-1"><a class="header-anchor" href="#vue3获取当前this" aria-hidden="true">#</a> vue3获取当前this</h3><ul><li><strong>路由传递参数</strong></li></ul><div class="language-html" data-ext="html"><pre class="language-html"><code>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span>user<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">&gt;</span></span>uid: {{ uid }}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
  
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> <span class="token punctuation">{</span> defineComponent <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;vue&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> useRouter <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;vue-router&quot;</span><span class="token punctuation">;</span>
  
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineComponent</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  name<span class="token operator">:</span> <span class="token string">&quot;User&quot;</span><span class="token punctuation">,</span>
  <span class="token function">setup</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> router <span class="token operator">=</span> <span class="token function">useRouter</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">const</span> uid <span class="token operator">=</span> router<span class="token punctuation">.</span>currentRoute<span class="token punctuation">.</span>value<span class="token punctuation">.</span>params<span class="token punctuation">.</span>uid<span class="token punctuation">;</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span>
      <span class="token comment">// 返回的数据</span>
      uid<span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>



<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span>
        这是文件二
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>ts<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> <span class="token punctuation">{</span>getCurrentInstance<span class="token punctuation">,</span>onMounted <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span>

<span class="token keyword">const</span> instance  <span class="token operator">=</span> <span class="token function">getCurrentInstance</span><span class="token punctuation">(</span><span class="token punctuation">)</span> 
<span class="token keyword">if</span> <span class="token punctuation">(</span>instance <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> _this <span class="token operator">=</span> instance<span class="token punctuation">.</span>appContext<span class="token punctuation">.</span>config<span class="token punctuation">.</span>globalProperties <span class="token comment">//vue3获取当前this</span>
    
<span class="token function">onMounted</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>   
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>_this<span class="token punctuation">.</span>$route<span class="token punctuation">.</span>params<span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span> <span class="token attr-name">scoped</span><span class="token punctuation">&gt;</span></span><span class="token style"><span class="token language-css">

</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">&gt;</span></span>

</code></pre></div><ul><li><strong>404 Not Found路由</strong></li></ul><div class="language-typescript" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> createRouter<span class="token punctuation">,</span>createWebHistory<span class="token punctuation">,</span>createWebHashHistory <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue-router&#39;</span>
<span class="token keyword">import</span> File1 <span class="token keyword">from</span> <span class="token string">&#39;../components/File1.vue&#39;</span>
<span class="token keyword">import</span> File2 <span class="token keyword">from</span> <span class="token string">&#39;../components/File2.vue&#39;</span>
<span class="token keyword">import</span> NotFound <span class="token keyword">from</span> <span class="token string">&#39;../components/NotFound.vue&#39;</span>
<span class="token keyword">import</span> UserGeneric <span class="token keyword">from</span> <span class="token string">&#39;../components/UserGeneric.vue&#39;</span>


<span class="token keyword">const</span> routes <span class="token operator">=</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span>
        path<span class="token operator">:</span> <span class="token string">&#39;/&#39;</span><span class="token punctuation">,</span>
        component<span class="token operator">:</span>File1
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
        path<span class="token operator">:</span> <span class="token string">&#39;/file2/:username/abc/:userid&#39;</span><span class="token punctuation">,</span>
        component<span class="token operator">:</span>File2
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token comment">// 将匹配所有内容并将其放在 \`$route.params.pathMatch\` 下</span>
    <span class="token punctuation">{</span>
        path<span class="token operator">:</span> <span class="token string">&#39;/:pathMatch(.*)*&#39;</span><span class="token punctuation">,</span> name<span class="token operator">:</span> <span class="token string">&#39;NotFound&#39;</span><span class="token punctuation">,</span> component<span class="token operator">:</span> NotFound
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token comment">// 将匹配以 \`/user-\` 开头的所有内容，并将其放在 \`$route.params.afterUser\` 下</span>
    <span class="token punctuation">{</span>
        path<span class="token operator">:</span> <span class="token string">&#39;/user-:afterUser(.*)&#39;</span><span class="token punctuation">,</span> component<span class="token operator">:</span> UserGeneric
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">]</span>

<span class="token keyword">const</span> router <span class="token operator">=</span> <span class="token function">createRouter</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    history<span class="token operator">:</span> <span class="token function">createWebHistory</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token comment">// history:createWebHashHistory(),</span>
    routes<span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> router<span class="token punctuation">;</span>


</code></pre></div><ul><li><strong>notFound</strong></li></ul><div class="language-vue" data-ext="vue"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span>
        404 not found
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>ts<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> <span class="token punctuation">{</span>getCurrentInstance<span class="token punctuation">,</span>onMounted <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span>

<span class="token keyword">const</span> instance  <span class="token operator">=</span> <span class="token function">getCurrentInstance</span><span class="token punctuation">(</span><span class="token punctuation">)</span> 
<span class="token keyword">if</span> <span class="token punctuation">(</span>instance <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> _this <span class="token operator">=</span> instance<span class="token punctuation">.</span>appContext<span class="token punctuation">.</span>config<span class="token punctuation">.</span>globalProperties <span class="token comment">//vue3获取当前this</span>
    
<span class="token function">onMounted</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>_this<span class="token punctuation">.</span>$route<span class="token punctuation">.</span>params<span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span> <span class="token attr-name">scoped</span><span class="token punctuation">&gt;</span></span><span class="token style"><span class="token language-css">

</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">&gt;</span></span>

</code></pre></div><ul><li><strong>嵌套路由</strong></li></ul><div class="language-typescript" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> createRouter<span class="token punctuation">,</span>createWebHistory<span class="token punctuation">,</span>createWebHashHistory <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue-router&#39;</span>
<span class="token keyword">import</span> File1 <span class="token keyword">from</span> <span class="token string">&#39;../components/File1.vue&#39;</span>
<span class="token keyword">import</span> File2 <span class="token keyword">from</span> <span class="token string">&#39;../components/File2.vue&#39;</span>
<span class="token keyword">import</span> NotFound <span class="token keyword">from</span> <span class="token string">&#39;../components/NotFound.vue&#39;</span>
<span class="token keyword">import</span> UserGeneric <span class="token keyword">from</span> <span class="token string">&#39;../components/UserGeneric.vue&#39;</span>
<span class="token keyword">import</span> Children1 <span class="token keyword">from</span> <span class="token string">&#39;../components/Children1.vue&#39;</span>
<span class="token keyword">import</span> Children2 <span class="token keyword">from</span> <span class="token string">&#39;../components/Children2.vue&#39;</span>



<span class="token keyword">const</span> routes <span class="token operator">=</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span>
        path<span class="token operator">:</span> <span class="token string">&#39;/&#39;</span><span class="token punctuation">,</span>
        component<span class="token operator">:</span> File1<span class="token punctuation">,</span>
        
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
        path<span class="token operator">:</span> <span class="token string">&#39;/file2&#39;</span><span class="token punctuation">,</span>
        component<span class="token operator">:</span> File2<span class="token punctuation">,</span>
        children<span class="token operator">:</span> <span class="token punctuation">[</span>  <span class="token comment">//使用嵌套路由</span>
            <span class="token punctuation">{</span>
                path<span class="token operator">:</span> <span class="token string">&#39;children1&#39;</span><span class="token punctuation">,</span>
                component<span class="token operator">:</span>Children1
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token punctuation">{</span>
                path<span class="token operator">:</span> <span class="token string">&#39;children2&#39;</span><span class="token punctuation">,</span>
                component<span class="token operator">:</span>Children2
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">]</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
        path<span class="token operator">:</span> <span class="token string">&#39;/:pathMatch(.*)*&#39;</span><span class="token punctuation">,</span> name<span class="token operator">:</span> <span class="token string">&#39;NotFound&#39;</span><span class="token punctuation">,</span> component<span class="token operator">:</span> NotFound
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
        path<span class="token operator">:</span> <span class="token string">&#39;/user-:afterUser(.*)&#39;</span><span class="token punctuation">,</span> component<span class="token operator">:</span> UserGeneric
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">]</span>

<span class="token keyword">const</span> router <span class="token operator">=</span> <span class="token function">createRouter</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    history<span class="token operator">:</span> <span class="token function">createWebHistory</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token comment">// history:createWebHashHistory(),</span>
    routes<span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> router<span class="token punctuation">;</span>


</code></pre></div><h3 id="编程式导航" tabindex="-1"><a class="header-anchor" href="#编程式导航" aria-hidden="true">#</a> 编程式导航</h3><ul><li><code>除了使用 &lt; router-link/&gt; 创建 a 标签来定义导航链接，</code></li><li><strong>router.push()</strong></li><li>**router.replace()**作用类似于 router.push，唯一不同的是，它在导航时不会向 history 添加新记录</li><li>**$router.go(-1)**相当于点击回退一次</li></ul><div class="language-vue" data-ext="vue"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span>
       404 not found
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>ts<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> <span class="token punctuation">{</span>getCurrentInstance<span class="token punctuation">,</span>onMounted <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span>

<span class="token keyword">const</span> instance  <span class="token operator">=</span> <span class="token function">getCurrentInstance</span><span class="token punctuation">(</span><span class="token punctuation">)</span> 
<span class="token keyword">if</span> <span class="token punctuation">(</span>instance <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> _this <span class="token operator">=</span> instance<span class="token punctuation">.</span>appContext<span class="token punctuation">.</span>config<span class="token punctuation">.</span>globalProperties <span class="token comment">//vue3获取当前this</span>

    <span class="token comment">// 一。router.push的使用： </span>
    <span class="token comment">// 1.字符串路径</span>
    <span class="token comment">// _this.$router.push(&#39;/file2/children2&#39;)</span>

    <span class="token comment">// 2.带有路径的对象</span>
    <span class="token comment">// _this.$router.push({path:&#39;/file2/children2&#39;})</span>

    <span class="token comment">// 3.命名的路由，并加上参数，让路由建立 url</span>
    <span class="token comment">// _this.$router.push({name:&#39;file2&#39;,params:{username:&#39;children2&#39;}})</span>

    <span class="token comment">// 4.带查询参数，结果是 /register?plan=private</span>
    <span class="token comment">// _this.$router.push({ path: &#39;/file2/children2&#39;, query: {userid:&#39;123&#39;} })</span>

    <span class="token comment">// 二。router.replace的使用：</span>
    <span class="token comment">// _this.$router.replace(&#39;/file2/children1&#39;)</span>

    <span class="token comment">// 三。router.go的使用：</span>
    _this<span class="token punctuation">.</span>$router<span class="token punctuation">.</span><span class="token function">go</span><span class="token punctuation">(</span><span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span>  <span class="token comment">//相当于点击回退一次</span>

    <span class="token function">onMounted</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>_this<span class="token punctuation">.</span>$route<span class="token punctuation">.</span>params<span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span> <span class="token attr-name">scoped</span><span class="token punctuation">&gt;</span></span><span class="token style"><span class="token language-css">

</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">&gt;</span></span>
</code></pre></div>`,17),e=[o];function c(u,l){return s(),a("div",null,e)}const r=n(p,[["render",c],["__file","vx_i_router.html.vue"]]);export{r as default};
