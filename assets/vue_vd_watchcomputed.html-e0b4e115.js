import{_ as n,p as s,q as a,a1 as p}from"./framework-d81ad7e5.js";const t={},o=p(`<h3 id="computed-计算属性" tabindex="-1"><a class="header-anchor" href="#computed-计算属性" aria-hidden="true">#</a> computed 计算属性</h3><blockquote><p>按照method写 <code>this.name()</code>，按照data去用。<code>this.name</code>，</p></blockquote><div class="language-html" data-ext="html"><pre class="language-html"><code>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
    <span class="token keyword">var</span> vue <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Vue</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      <span class="token literal-property property">el</span><span class="token operator">:</span> <span class="token string">&#39;#app&#39;</span><span class="token punctuation">,</span>
      <span class="token literal-property property">data</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">firstName</span><span class="token operator">:</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">lastName</span><span class="token operator">:</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">fullName</span><span class="token operator">:</span> <span class="token string">&#39;&#39;</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token literal-property property">methods</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token function">handlerSumName</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
          console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>sumName<span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token literal-property property">computed</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token comment">// 计算属性。在computed中，可以定义一些 属性 ，这些属性叫做计算属性、</span>
		<span class="token comment">//计算属性的本质就是一个方法，但是，当我们使用的时候，是将其视为属性去用的。</span>
        <span class="token comment">// 简单说就是一句话，按照method写，按照data去用。this.name，this.name()</span>

        <span class="token comment">// 注意：计算属性调用的时候，一定不要加()，它就是个属性，用法和data一模一样。</span>
        <span class="token comment">// 注意：只要计算属性中使用到的所有data中的属性发生了变化，就会立即去重新计算属性的值。</span>
		
        <span class="token comment">// 注意：计算属性的结果会被缓存起来，方便下次直接调用，</span>
		<span class="token comment">// 如果计算属性中用到的所有的data都没有发生变化，就不会对计算属性重新求值。</span>
        <span class="token function">sumName</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
          console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;计算属性执行了&#39;</span><span class="token punctuation">)</span>
          <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>firstName <span class="token operator">+</span> <span class="token keyword">this</span><span class="token punctuation">.</span>lastName
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>

  </span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>

</code></pre></div><hr><h3 id="computed-细分-get-set" tabindex="-1"><a class="header-anchor" href="#computed-细分-get-set" aria-hidden="true">#</a> computed 细分 get(). set()</h3><div class="language-html" data-ext="html"><pre class="language-html"><code>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
    <span class="token keyword">var</span> vue <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Vue</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      <span class="token literal-property property">el</span><span class="token operator">:</span> <span class="token string">&#39;#app&#39;</span><span class="token punctuation">,</span>
      <span class="token literal-property property">data</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">num1</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
        <span class="token literal-property property">num2</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token literal-property property">methods</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token literal-property property">computed</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token comment">// 计算属性的get和set方法</span>
        <span class="token literal-property property">sumNumber</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token function">get</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token comment">// 用于获取计算属性值的时候调用get方法</span>
            <span class="token keyword">return</span> <span class="token function">parseInt</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>num1<span class="token punctuation">)</span> <span class="token operator">*</span> <span class="token number">0.8</span> <span class="token operator">+</span> <span class="token function">parseInt</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>num2<span class="token punctuation">)</span> <span class="token operator">*</span> <span class="token number">0.2</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token function">set</span><span class="token punctuation">(</span>val<span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token comment">// 当修改了计算属性值的时候调用set方法</span>
            <span class="token keyword">this</span><span class="token punctuation">.</span>num1 <span class="token operator">=</span> <span class="token function">parseInt</span><span class="token punctuation">(</span>val<span class="token punctuation">)</span> <span class="token operator">*</span> <span class="token number">0.8</span>
            <span class="token keyword">this</span><span class="token punctuation">.</span>num2 <span class="token operator">=</span> <span class="token function">parseInt</span><span class="token punctuation">(</span>val<span class="token punctuation">)</span> <span class="token operator">*</span> <span class="token number">0.2</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>

  </span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>


</code></pre></div>`,6),e=[o];function c(l,u){return s(),a("div",null,e)}const r=n(t,[["render",c],["__file","vue_vd_watchcomputed.html.vue"]]);export{r as default};
