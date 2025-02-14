import{_ as n,p as a,q as s,a1 as t}from"./framework-d81ad7e5.js";const p="/assets/mutation-e000ad94.png",o={},e=t(`<h3 id="辅助函数" tabindex="-1"><a class="header-anchor" href="#辅助函数" aria-hidden="true">#</a> 辅助函数</h3><ul><li>computed {...mapState([&#39;stateName&#39;])}</li><li>methods {...mapMutations([&#39;methodName&#39;])}</li></ul><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> mapState<span class="token punctuation">,</span> mapMutations <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;vuex&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">methods</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token operator">...</span><span class="token function">mapMutations</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string">&quot;setCurIndex&quot;</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
      <span class="token comment">//  // 使用方式：this.$store.commit(&#39;方法名&#39;, 参数1, 参数2....)</span>
      <span class="token comment">// 当一个参数时 不需要 {} ,多个参数使用 payLoad</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span>$store<span class="token punctuation">.</span><span class="token function">commit</span><span class="token punctuation">(</span><span class="token string">&#39;setCurIndex&#39;</span><span class="token punctuation">,</span><span class="token punctuation">{</span> index <span class="token punctuation">,</span> contx<span class="token punctuation">}</span><span class="token punctuation">)</span>
      <span class="token comment">/*
           mutations: {
              setCurIndex(state,payload){
                const {index, contx} = payload
                state.curIndex = index
              }
            },
      */</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">computed</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token operator">...</span><span class="token function">mapState</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string">&quot;curIndex&quot;</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
 <span class="token punctuation">}</span> 
</code></pre></div><div class="language-text" data-ext="text"><pre class="language-text"><code>mapState(namespace?: string, map: Array&lt;string&gt; | Object): Object
</code></pre></div><p>为组件创建计算属性以返回 Vuex store 中的状态。第一个参数是可选的，可以是一个命名空间字符串</p><div class="language-text" data-ext="text"><pre class="language-text"><code>mapGetters(namespace?: string, map: Array&lt;string&gt; | Object): Object
</code></pre></div><p>为组件创建计算属性以返回 getter 的返回值。第一个参数是可选的，可以是一个命名空间字符串</p><div class="language-text" data-ext="text"><pre class="language-text"><code>mapActions(namespace?: string, map: Array&lt;string&gt; | Object): Object
</code></pre></div><p>创建组件方法分发 action。第一个参数是可选的，可以是一个命名空间字符串</p><div class="language-text" data-ext="text"><pre class="language-text"><code>mapMutations(namespace?: string, map: Array&lt;string&gt; | Object): Object
</code></pre></div><p>创建组件方法提交 mutation。第一个参数是可选的，可以是一个命名空间字符串</p><h3 id="mapgetters-辅助函数" tabindex="-1"><a class="header-anchor" href="#mapgetters-辅助函数" aria-hidden="true">#</a> mapGetters 辅助函数</h3><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// vuex</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">new</span> <span class="token class-name">Vuex<span class="token punctuation">.</span>Store</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">state</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">curIndex</span><span class="token operator">:</span> <span class="token number">0</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">mutations</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token function">setCurIndex</span><span class="token punctuation">(</span><span class="token parameter">state<span class="token punctuation">,</span> index</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      state<span class="token punctuation">.</span>curIndex <span class="token operator">=</span> index
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">actions</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">getters</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token comment">// 固定格式,对state 进行进一步加工,相当于拦截加工一下</span>
    <span class="token function">getCurIndex</span><span class="token punctuation">(</span><span class="token parameter">state</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">当前index 为 </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>state<span class="token punctuation">.</span>curIndex<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string"> 角标!</span><span class="token template-punctuation string">\`</span></span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">modules</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre></div><div class="language-vue" data-ext="vue"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>getter<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    {{ getCount }}
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>add<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>ADD State<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
 
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> <span class="token punctuation">{</span> mapGetters <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vuex&#39;</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token function">data</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">computed</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token operator">...</span><span class="token function">mapGetters</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string">&#39;getCount&#39;</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">methods</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token function">add</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span>$store<span class="token punctuation">.</span><span class="token function">commit</span><span class="token punctuation">(</span><span class="token string">&#39;add&#39;</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><h2 id="mapstate的使用-常用" tabindex="-1"><a class="header-anchor" href="#mapstate的使用-常用" aria-hidden="true">#</a> mapState的使用（常用）</h2><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code>
 
<span class="token comment">//1.在.vue组件中引入,在js块中引入</span>

<span class="token keyword">import</span> <span class="token punctuation">{</span> mapState <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vuex&#39;</span>
<span class="token comment">//2.在.vue组件中定义一个对象</span>

computed：<span class="token punctuation">{</span>
<span class="token operator">...</span><span class="token function">mapState</span><span class="token punctuation">(</span><span class="token punctuation">[</span>        <span class="token comment">//mapState本是一个函数，在里面写一个数组，记得加...</span>
‘num’ ， <span class="token comment">//存的数据</span>
‘id’
<span class="token punctuation">]</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
<span class="token comment">//3.然后就可以不用$store.state.num引用了,直接插值</span>

<span class="token punctuation">{</span><span class="token punctuation">{</span>num<span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token punctuation">{</span><span class="token punctuation">{</span>id<span class="token punctuation">}</span><span class="token punctuation">}</span>   <span class="token comment">//引用多个</span>
 
 
<span class="token comment">//4. 解构赋值实例</span>
<span class="token keyword">let</span> mapState <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token literal-property property">num</span><span class="token operator">:</span><span class="token number">0</span><span class="token punctuation">,</span><span class="token literal-property property">id</span><span class="token operator">:</span><span class="token number">111</span><span class="token punctuation">}</span>
<span class="token keyword">let</span> computed <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token operator">...</span>mapState<span class="token punctuation">}</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>computed <span class="token punctuation">)</span>

</code></pre></div><h2 id="mapmutations" tabindex="-1"><a class="header-anchor" href="#mapmutations" aria-hidden="true">#</a> mapMutations</h2><p><img src="`+p+'" alt="at"></p>',18),c=[e];function u(l,i){return a(),s("div",null,c)}const r=n(o,[["render",u],["__file","vuex_b.html.vue"]]);export{r as default};
