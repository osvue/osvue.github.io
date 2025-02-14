import{_ as s,p as a,q as n,a1 as p}from"./framework-d81ad7e5.js";const t={},e=p(`<h3 id="defineprops" tabindex="-1"><a class="header-anchor" href="#defineprops" aria-hidden="true">#</a> defineProps</h3><ul><li>defineProps 只能是要么使用<code>运行时声明</code>，要么使用<code>typescript类型声明</code>。同时使用两种声明方式会导致编译报错。；</li></ul><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token operator">&lt;</span>script lang<span class="token operator">=</span><span class="token string">&#39;ts&#39;</span> setup<span class="token operator">&gt;</span>
<span class="token keyword">const</span> props <span class="token operator">=</span> <span class="token function">defineProps</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">child</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">type</span><span class="token operator">:</span>String<span class="token punctuation">,</span> <span class="token comment">// 参数类型</span>
    <span class="token keyword">default</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token comment">//默认值</span>
    <span class="token literal-property property">required</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token comment">//是否必传</span>
    <span class="token function-variable function">validator</span><span class="token operator">:</span> <span class="token parameter">value</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> value <span class="token operator">&gt;=</span> <span class="token number">0</span> <span class="token comment">// 除了验证是否符合type的类型，此处再判断该值结果是否符合验证</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">sda</span><span class="token operator">:</span> String<span class="token punctuation">,</span> <span class="token comment">//undefined</span>
  <span class="token literal-property property">strData</span><span class="token operator">:</span> String<span class="token punctuation">,</span>
  <span class="token literal-property property">arrFor</span><span class="token operator">:</span> Array
<span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">&gt;</span>
<span class="token comment">// 子组件声明了的 props ，若父组件未传，则该值为 undefined </span>


</code></pre></div><h3 id="全局前置守卫" tabindex="-1"><a class="header-anchor" href="#全局前置守卫" aria-hidden="true">#</a> 全局前置守卫</h3><p>你可以使用 <code>router.beforeEach</code> 注册一个全局前置守卫：</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> router <span class="token operator">=</span> <span class="token function">createRouter</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token operator">...</span> <span class="token punctuation">}</span><span class="token punctuation">)</span>

router<span class="token punctuation">.</span><span class="token function">beforeEach</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">to<span class="token punctuation">,</span> <span class="token keyword">from</span></span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token comment">// ...</span>
  <span class="token comment">// 返回 false 以取消导航</span>
  <span class="token keyword">return</span> <span class="token boolean">false</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre></div><p>当一个导航触发时，全局前置守卫按照创建顺序调用。守卫是异步解析执行，此时导航在所有守卫 resolve 完之前一直处于等待中。</p><ul><li><p>每个守卫方法接收两个参数：</p></li><li><p>to: 即将要进入的目标 用一种标准化的方式</p></li><li><p>from: 当前导航正要离开的路由 用一种标准化的方式</p></li><li><p>可以返回的值如下:</p></li><li><p>false: 取消当前的导航。如果浏览器的 URL 改变了(可能是用户手动或者浏览器后退按钮)，那么 URL 地址会重置到 from 路由对应的地址。</p></li><li><p>一个路由地址: 通过一个路由地址重定向到一个不同的地址，如同调用 <code>router.push()</code>，且可以传入诸如 <code>replace: true 或 name: &#39;home&#39;</code> 之类的选项。它会中断当前的导航，同时用相同的 from 创建一个新导航。</p></li></ul><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code> router<span class="token punctuation">.</span><span class="token function">beforeEach</span><span class="token punctuation">(</span><span class="token keyword">async</span> <span class="token punctuation">(</span><span class="token parameter">to<span class="token punctuation">,</span> <span class="token keyword">from</span></span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
   <span class="token keyword">if</span> <span class="token punctuation">(</span>
     <span class="token comment">// 检查用户是否已登录</span>
     <span class="token operator">!</span>isAuthenticated <span class="token operator">&amp;&amp;</span>
     <span class="token comment">// ❗️ 避免无限重定向</span>
     to<span class="token punctuation">.</span>name <span class="token operator">!==</span> <span class="token string">&#39;Login&#39;</span>
   <span class="token punctuation">)</span> <span class="token punctuation">{</span>
     <span class="token comment">// 将用户重定向到登录页面</span>
     <span class="token keyword">return</span> <span class="token punctuation">{</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;Login&#39;</span> <span class="token punctuation">}</span>
   <span class="token punctuation">}</span>
 <span class="token punctuation">}</span><span class="token punctuation">)</span>

</code></pre></div><h3 id="vue样式穿透-v-deep的具体使用" tabindex="-1"><a class="header-anchor" href="#vue样式穿透-v-deep的具体使用" aria-hidden="true">#</a> vue样式穿透 <code>::v-deep</code>的具体使用</h3><p>深度作用选择器 如果你希望 scoped 样式中的一个选择器能够作用得 &#39;更深&#39; ，例如影响子组件，你可以使用 <code>&gt;&gt;&gt;</code> 操作符：</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token operator">&lt;</span>style scoped<span class="token operator">&gt;</span> 
<span class="token punctuation">.</span>a <span class="token operator">&gt;&gt;&gt;</span> <span class="token punctuation">.</span>b <span class="token punctuation">{</span> <span class="token comment">/* ... */</span> <span class="token punctuation">}</span> <span class="token operator">&lt;</span><span class="token operator">/</span>style<span class="token operator">&gt;</span>
</code></pre></div><p>上述代码将会编译成：</p><p>.a[data-v-f3f3eg9] .b { /* … */ }</p><p>有些像 Sass 之类的预处理器无法正确解析 <code>&gt;&gt;&gt;</code>。这种情况下你可以使用 <code>/deep/</code> 或 <code>::v-deep</code> 操作符取而代之——两者都是 <code>&gt;&gt;&gt;</code> 的别名，同样可以正常工作 例如：</p><ol><li><code>&gt;&gt;&gt;</code> 如果vue的style使用的是css，那么则</li></ol><div class="language-jsx" data-ext="jsx"><pre class="language-jsx"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>css<span class="token punctuation">&quot;</span></span> <span class="token attr-name">scoped</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
.a &gt;&gt;&gt; .b { 
 /* ... */
}
</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><p>但是像scss等预处理器却无法解析<code>&gt;&gt;&gt;</code>，所以我们使用下面的方式.</p><ol start="2"><li><code>/deep/</code></li></ol><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token operator">&lt;</span>style lang<span class="token operator">=</span><span class="token string">&quot;scss&quot;</span> scoped<span class="token operator">&gt;</span>
<span class="token punctuation">.</span>a<span class="token punctuation">{</span>
 <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">deep</span><span class="token regex-delimiter">/</span></span> <span class="token punctuation">.</span>b <span class="token punctuation">{</span> 
  <span class="token comment">/* ... */</span>
 <span class="token punctuation">}</span>
<span class="token punctuation">}</span> 
<span class="token operator">&lt;</span><span class="token operator">/</span>style<span class="token operator">&gt;</span>
</code></pre></div><p>但是有些开发者反应，在vue-cli3编译时，deep的方式会报错或者警告。 此时我们可以使用第三种方式</p><ol start="3"><li><strong><code>::v-deep</code></strong></li></ol><ul><li>切记必须是双冒号</li></ul><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token operator">&lt;</span>style lang<span class="token operator">=</span><span class="token string">&quot;scss&quot;</span> scoped<span class="token operator">&gt;</span>
<span class="token punctuation">.</span>a<span class="token punctuation">{</span>
 <span class="token operator">:</span><span class="token operator">:</span>v<span class="token operator">-</span>deep <span class="token punctuation">.</span>b <span class="token punctuation">{</span> 
  <span class="token comment">/* ... */</span>
 <span class="token punctuation">}</span>
<span class="token punctuation">}</span> 
<span class="token operator">&lt;</span><span class="token operator">/</span>style<span class="token operator">&gt;</span>
</code></pre></div><p>使用场景: 当我们需要覆盖 element-ui 中的样式时只能通过深度作用选择器 style 为 css 时的写法如下</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token punctuation">.</span>a <span class="token operator">&gt;&gt;&gt;</span> <span class="token punctuation">.</span>b <span class="token punctuation">{</span>
 <span class="token operator">**</span><span class="token operator">*</span>
<span class="token punctuation">}</span>
</code></pre></div><p>style使用css的预处理器(less, sass, scss)的写法如下</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 第一种/deep/</span>
<span class="token operator">/</span>deep<span class="token operator">/</span> <span class="token punctuation">.</span>a <span class="token punctuation">{</span>
 <span class="token operator">**</span><span class="token operator">*</span>
<span class="token punctuation">}</span>

<span class="token comment">// 第二种::v-deep</span>
<span class="token operator">:</span><span class="token operator">:</span>v<span class="token operator">-</span>deep <span class="token punctuation">.</span>a<span class="token punctuation">{</span>
 <span class="token operator">**</span><span class="token operator">*</span>
<span class="token punctuation">}</span>
</code></pre></div><p>建议使用第二种方式,<strong>/deep/在某些时候会报错</strong>,<code>::v-deep</code>更保险并且编译速度更快</p>`,29),o=[e];function c(l,r){return a(),n("div",null,o)}const k=s(t,[["render",c],["__file","vue_dev.html.vue"]]);export{k as default};
