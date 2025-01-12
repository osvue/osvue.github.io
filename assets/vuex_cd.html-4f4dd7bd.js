import{_ as n,p as a,q as s,a1 as t}from"./framework-d81ad7e5.js";const p={},o=t(`<h3 id="文档结构" tabindex="-1"><a class="header-anchor" href="#文档结构" aria-hidden="true">#</a> 文档结构</h3><blockquote><p>module 给了我们一种隔离vuex store 各个 state及相关api 的方法，让数据相关操作在复杂的项目场景可以更清晰，易追踪。</p></blockquote><div class="language-bash" data-ext="sh"><pre class="language-bash"><code>│
├── index.js
│
├── controla
│   └── index.js
│
└── controlb
    └── index.js
 
     
</code></pre></div><h3 id="index-js" tabindex="-1"><a class="header-anchor" href="#index-js" aria-hidden="true">#</a> index.js</h3><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">import</span> Vue <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span>
<span class="token keyword">import</span> Vuex <span class="token keyword">from</span> <span class="token string">&#39;vuex&#39;</span>

Vue<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>Vuex<span class="token punctuation">)</span>
<span class="token keyword">import</span> controla <span class="token keyword">from</span> <span class="token string">&#39;./controla&#39;</span>
<span class="token keyword">import</span> controlb <span class="token keyword">from</span> <span class="token string">&#39;./controlb&#39;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">new</span> <span class="token class-name">Vuex<span class="token punctuation">.</span>Store</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">modules</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    controla<span class="token punctuation">,</span>
    controlb
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre></div><h3 id="controla-b" tabindex="-1"><a class="header-anchor" href="#controla-b" aria-hidden="true">#</a> controla/b</h3><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> controla <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token comment">// 当namespaced=true 时， vuex, 将会自动给各自module 添加访问路径名。 方便区分moduel</span>
    <span class="token literal-property property">namespaced</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token literal-property property">state</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;controla&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">&#39;controla A&#39;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">mutations</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token function">updateNameByMutation</span><span class="token punctuation">(</span><span class="token parameter">state<span class="token punctuation">,</span> appendStr</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            state<span class="token punctuation">.</span>name <span class="token operator">=</span> state<span class="token punctuation">.</span>name <span class="token operator">+</span> <span class="token string">&quot; append Str: &quot;</span> <span class="token operator">+</span> appendStr
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">actions</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token comment">// 如果不使用命名空间， 那么view 指向actions 的该方法时，会执行所有与指定action名相同的函数（即：这里module A,B 中该action都会执行）</span>
        <span class="token function">udpateNameByAction</span><span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span>
            commit
        <span class="token punctuation">}</span><span class="token punctuation">,</span> appendStr</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token function">commit</span><span class="token punctuation">(</span><span class="token string">&quot;updateNameByMutation&quot;</span><span class="token punctuation">,</span> appendStr<span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">getters</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token function">getNameB</span><span class="token punctuation">(</span><span class="token parameter">state</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span> state<span class="token punctuation">.</span>name
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> controla
</code></pre></div><h3 id="使用" tabindex="-1"><a class="header-anchor" href="#使用" aria-hidden="true">#</a> 使用</h3><ul><li>第一个参数传的是 module 路径(就引入各个module的名称)名。 这种方式将只会在当前view中，导出指定模块下注册的 action 集合。</li><li></li></ul><div class="language-vue" data-ext="vue"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h3</span><span class="token punctuation">&gt;</span></span>{{name }} <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h3</span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h3</span><span class="token punctuation">&gt;</span></span>{{nameb }} <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h3</span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>changeCA<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>changeCA<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">&gt;</span></span>
   <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
<span class="token comment">// @ is an alias to /src</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span>mapState<span class="token punctuation">,</span>mapMutations<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vuex&#39;</span>
 <span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&quot;Home&quot;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">components</span><span class="token operator">:</span> <span class="token punctuation">{</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span> <span class="token punctuation">}</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">computed</span><span class="token operator">:</span><span class="token punctuation">{</span>
    <span class="token operator">...</span><span class="token function">mapState</span><span class="token punctuation">(</span><span class="token string">&#39;controla&#39;</span><span class="token punctuation">,</span><span class="token punctuation">{</span><span class="token function-variable function">name</span><span class="token operator">:</span><span class="token parameter">state</span><span class="token operator">=&gt;</span>state<span class="token punctuation">.</span>name<span class="token punctuation">}</span><span class="token punctuation">)</span>
 <span class="token punctuation">,</span>  <span class="token operator">...</span><span class="token function">mapState</span><span class="token punctuation">(</span><span class="token string">&#39;controlb&#39;</span><span class="token punctuation">,</span><span class="token punctuation">{</span><span class="token function-variable function">nameb</span><span class="token operator">:</span><span class="token parameter">state</span><span class="token operator">=&gt;</span>state<span class="token punctuation">.</span>name<span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">methods</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token operator">...</span><span class="token function">mapMutations</span><span class="token punctuation">(</span><span class="token string">&#39;controla&#39;</span><span class="token punctuation">,</span><span class="token punctuation">[</span><span class="token string">&#39;updateNameByMutation&#39;</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">,</span>

    <span class="token function">changeCA</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">updateNameByMutation</span><span class="token punctuation">(</span><span class="token string">&#39;hello World&#39;</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
 <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span> <span class="token attr-name">scoped</span><span class="token punctuation">&gt;</span></span><span class="token style"><span class="token language-css">
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">&gt;</span></span>
</code></pre></div>`,10),e=[o];function c(l,u){return a(),s("div",null,e)}const r=n(p,[["render",c],["__file","vuex_cd.html.vue"]]);export{r as default};
