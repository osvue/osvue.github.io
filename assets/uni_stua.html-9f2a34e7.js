import{_ as n,p as s,q as a,a1 as t}from"./framework-d81ad7e5.js";const p={},o=t(`<h2 id="各种事件" tabindex="-1"><a class="header-anchor" href="#各种事件" aria-hidden="true">#</a> 各种事件</h2><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code>
<span class="token comment">// 需要在 pages.json 里，找到的当前页面的pages节点，并在 style 选项中开启 enablePullDownRefresh。</span>
<span class="token comment">// 当处理完数据刷新后，uni.stopPullDownRefresh 可以停止当前页面的下拉刷新。</span>
<span class="token doc-comment comment">/**
 * 下拉刷新
 */</span>
<span class="token function">onPullDownRefresh</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">=&gt;</span><span class="token punctuation">{</span>
   <span class="token function">getNewImage</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  
 <span class="token comment">// console.log(&#39;下拉事件&#39;);</span>
 <span class="token comment">// setTimeout(()=&gt;{</span>
 <span class="token comment">//  /**</span>
 <span class="token comment">//   * @see 模拟网路请求,下拉刷新后 返回结果，停止效果</span>
 <span class="token comment">//   * </span>
 <span class="token comment">//   */</span>
 <span class="token comment">//  uni.stopPullDownRefresh()</span>
 <span class="token comment">// },2000)</span>
 
<span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token comment">// 触底刷新</span>
<span class="token function">onReachBottom</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">=&gt;</span><span class="token punctuation">{</span>
 
 console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;触底了&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre></div><h2 id="弹框" tabindex="-1"><a class="header-anchor" href="#弹框" aria-hidden="true">#</a> 弹框</h2><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code>uni<span class="token punctuation">.</span><span class="token function">showModal</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
   <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">&#39;加载从互联网&#39;</span><span class="token punctuation">,</span>
   <span class="token literal-property property">content</span><span class="token operator">:</span> <span class="token string">&#39;需要消耗流量&#39;</span><span class="token punctuation">,</span>
   <span class="token function">success</span><span class="token punctuation">(</span><span class="token parameter">msg</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span>msg<span class="token punctuation">.</span>confirm<span class="token punctuation">)</span><span class="token punctuation">{</span>
     uni<span class="token punctuation">.</span><span class="token function">request</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      <span class="token literal-property property">url</span><span class="token operator">:</span> <span class="token string">&#39;http://159.126.85.119:8099/4g/watch/qs/1&#39;</span><span class="token punctuation">,</span> <span class="token comment">//仅为示例，并非真实接口地址。</span>
      <span class="token comment">// method:&#39;POST&#39;,</span>
      <span class="token comment">//    data: {</span>
      <span class="token comment">//        text: &#39;uni.request&#39;</span>
      <span class="token comment">//    },</span>
      <span class="token comment">// header: {</span>
      <span class="token comment">//     &#39;custom-header&#39;: &#39;hello&#39; //自定义请求头信息</span>
      <span class="token comment">// },</span>
      <span class="token function-variable function">success</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token parameter">res</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
       items<span class="token punctuation">.</span>value <span class="token operator">=</span> res<span class="token punctuation">.</span>data<span class="token punctuation">.</span>data<span class="token punctuation">;</span>
       uni<span class="token punctuation">.</span><span class="token function">showToast</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
        <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">&#39;加载好了&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">duration</span><span class="token operator">:</span> <span class="token number">2000</span>
       <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
     <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
   <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
  uni<span class="token punctuation">.</span><span class="token function">showToast</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">icon</span><span class="token operator">:</span><span class="token string">&#39;success&#39;</span><span class="token punctuation">,</span>
   <span class="token literal-property property">title</span><span class="token operator">:</span><span class="token string">&quot;完成&quot;</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre></div>`,4),e=[o];function c(l,u){return s(),a("div",null,e)}const k=n(p,[["render",c],["__file","uni_stua.html.vue"]]);export{k as default};
