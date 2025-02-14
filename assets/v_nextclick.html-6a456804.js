import{_ as n,p as s,q as a,a1 as p}from"./framework-d81ad7e5.js";const t={},o=p(`<ul><li><p>nextTick的主要应用的场景及原因。</p></li><li><p><strong>在Vue生命周期的created()钩子函数进行的DOM操作一定要放在<code>Vue.nextTick()</code>的回调函数中</strong></p></li></ul><ul><li>就是Vue不可能对每一个数据变化都做一次渲染，它会把这些变化先放在一个异步的队列当中，同时它还会对这个队列里面的操作进行去重，比如你修改了这个数据三次，它只会保留最后一次。这些变化是都可以通过队列的形式保存起来，</li></ul><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token function-variable function">mounted</span><span class="token operator">:</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">$nextTick</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// Code that will run only after the</span>
    <span class="token comment">// entire view has been rendered</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

</code></pre></div><h4 id="使用场景" tabindex="-1"><a class="header-anchor" href="#使用场景" aria-hidden="true">#</a> 使用场景</h4><ul><li>created中获取DOM的操作需要使用它</li><li>还有一些第三方插件使用过程中，使用到的情况，具体问题具体分析</li></ul><h3 id="h-函数" tabindex="-1"><a class="header-anchor" href="#h-函数" aria-hidden="true">#</a> h 函数</h3><ul><li>h函数是创建节点, 可实现展示template如何渲染到html中的过程，因为vue渲染到页面上是通过loader打包成模板字符串拼接渲染的，所以 h 函数同样也是通过字符串渲染到html中</li></ul><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> createApp<span class="token punctuation">,</span> defineComponent<span class="token punctuation">,</span> h <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span>
<span class="token keyword">import</span> HelloWorld <span class="token keyword">from</span> <span class="token string">&#39;./components/HelloWorld.vue&#39;</span>
<span class="token comment">// defineComponent定义组件</span>
<span class="token comment">// h创建节点, 可实现展示template如何渲染到html中得过程，因为vue渲染到页面上是通过loader打包成模板字符串拼接渲染得，所以 h 函数同样也是通过字符串渲染到html中</span>
<span class="token comment">// 第一个参数 节点类型 div为dom原生节点，需要通过字符串&quot;div&quot;来标识</span>
<span class="token comment">// 第二个参数 节点属性 div节点得属性</span>
<span class="token comment">// 第三个参数 节点的孩子节点 内部节点(子内容)</span>
<span class="token comment">// import App from &#39;./App.vue&#39;</span>

<span class="token keyword">const</span> img <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;./assets/logo.png&#39;</span><span class="token punctuation">)</span> <span class="token comment">// eslint-disable-line</span>
<span class="token comment">// 由于ts中不支持require所以需要取消校验，直接加注释方可</span>
<span class="token keyword">const</span> App <span class="token operator">=</span> <span class="token function">defineComponent</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token function">h</span><span class="token punctuation">(</span><span class="token string">&#39;div&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token string">&#39;app&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">[</span>
      <span class="token function">h</span><span class="token punctuation">(</span><span class="token string">&#39;img&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">alt</span><span class="token operator">:</span> <span class="token string">&#39;vue.logo&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">src</span><span class="token operator">:</span> img<span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
      <span class="token function">h</span><span class="token punctuation">(</span>HelloWorld<span class="token punctuation">,</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">msg</span><span class="token operator">:</span> <span class="token string">&#39;Welcome to Your Vue.js + TypeScript App&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;李四&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">age</span><span class="token operator">:</span> <span class="token number">15</span><span class="token punctuation">,</span>
        <span class="token literal-property property">sex</span><span class="token operator">:</span> <span class="token string">&#39;男&#39;</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token function">createApp</span><span class="token punctuation">(</span>App<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">mount</span><span class="token punctuation">(</span><span class="token string">&#39;#app&#39;</span><span class="token punctuation">)</span>

</code></pre></div>`,8),e=[o];function c(l,u){return s(),a("div",null,e)}const r=n(t,[["render",c],["__file","v_nextclick.html.vue"]]);export{r as default};
