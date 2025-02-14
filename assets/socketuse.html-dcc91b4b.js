import{_ as n,p as a,q as s,a1 as t}from"./framework-d81ad7e5.js";const p={},o=t(`<div class="language-html" data-ext="html"><pre class="language-html"><code><span class="token doctype"><span class="token punctuation">&lt;!</span><span class="token doctype-tag">DOCTYPE</span> <span class="token name">html</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>en<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">charset</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>UTF-8<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>viewport<span class="token punctuation">&quot;</span></span> <span class="token attr-name">content</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>width=device-width, initial-scale=1.0<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>title</span><span class="token punctuation">&gt;</span></span>Document<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>title</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span><span class="token punctuation">&gt;</span></span><span class="token style"><span class="token language-css">
    <span class="token selector">.p_m_container</span> <span class="token punctuation">{</span>
      <span class="token property">width</span><span class="token punctuation">:</span> 100%<span class="token punctuation">;</span>
      <span class="token property">height</span><span class="token punctuation">:</span> 800px<span class="token punctuation">;</span>
      <span class="token property">box-shadow</span><span class="token punctuation">:</span> 0 1px 3px <span class="token function">rgba</span><span class="token punctuation">(</span>0<span class="token punctuation">,</span> 0<span class="token punctuation">,</span> 0<span class="token punctuation">,</span> 0.1<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token selector">.tab-wrapper</span> <span class="token punctuation">{</span>
      <span class="token property">position</span><span class="token punctuation">:</span> relative<span class="token punctuation">;</span>
      <span class="token property">width</span><span class="token punctuation">:</span> 100%<span class="token punctuation">;</span>
      <span class="token property">height</span><span class="token punctuation">:</span> 100%<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token selector">.tab-wrapper .tab-radio</span> <span class="token punctuation">{</span>
      <span class="token property">display</span><span class="token punctuation">:</span> none<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token selector">.tab-handler</span> <span class="token punctuation">{</span>
      <span class="token property">cursor</span><span class="token punctuation">:</span> pointer<span class="token punctuation">;</span>
      <span class="token property">position</span><span class="token punctuation">:</span> relative<span class="token punctuation">;</span>
      <span class="token property">z-index</span><span class="token punctuation">:</span> 2<span class="token punctuation">;</span>
      <span class="token property">display</span><span class="token punctuation">:</span> block<span class="token punctuation">;</span>
      <span class="token property">float</span><span class="token punctuation">:</span> left<span class="token punctuation">;</span>
      <span class="token property">height</span><span class="token punctuation">:</span> 30px<span class="token punctuation">;</span>
      <span class="token property">padding</span><span class="token punctuation">:</span> 0 20px<span class="token punctuation">;</span>
      <span class="token property">background-color</span><span class="token punctuation">:</span> #18427394<span class="token punctuation">;</span>
      <span class="token property">font-size</span><span class="token punctuation">:</span> 16px<span class="token punctuation">;</span>
      <span class="token property">line-height</span><span class="token punctuation">:</span> 30px<span class="token punctuation">;</span>
      <span class="token property">transition</span><span class="token punctuation">:</span> 0.3s<span class="token punctuation">;</span>
      <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">scale</span><span class="token punctuation">(</span>0.9<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token property">margin-left</span><span class="token punctuation">:</span> 15px<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token selector">.tab-radio:checked + .tab-handler</span> <span class="token punctuation">{</span>
      <span class="token property">color</span><span class="token punctuation">:</span> #fff<span class="token punctuation">;</span>
      <span class="token property">background-color</span><span class="token punctuation">:</span> #e74c3c<span class="token punctuation">;</span>
      <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">scale</span><span class="token punctuation">(</span>1<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token selector">.tab-radio:checked + .tab-handler + .tab-content</span> <span class="token punctuation">{</span>
      <span class="token property">visibility</span><span class="token punctuation">:</span> visible<span class="token punctuation">;</span>
      <span class="token property">opacity</span><span class="token punctuation">:</span> 1<span class="token punctuation">;</span>
      <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">scale</span><span class="token punctuation">(</span>1<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token selector">.tab-wrapper .tab-content</span> <span class="token punctuation">{</span>
      <span class="token property">visibility</span><span class="token punctuation">:</span> hidden<span class="token punctuation">;</span>
      <span class="token property">position</span><span class="token punctuation">:</span> absolute<span class="token punctuation">;</span>
      <span class="token property">top</span><span class="token punctuation">:</span> 30px<span class="token punctuation">;</span>
      <span class="token property">left</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
      <span class="token property">right</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
      <span class="token property">width</span><span class="token punctuation">:</span> 100%<span class="token punctuation">;</span>
      <span class="token property">color</span><span class="token punctuation">:</span> #999<span class="token punctuation">;</span>
      <span class="token property">background-color</span><span class="token punctuation">:</span> #fff1ee<span class="token punctuation">;</span>
      <span class="token property">bottom</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
      <span class="token property">font-size</span><span class="token punctuation">:</span> 14px<span class="token punctuation">;</span>
      <span class="token property">line-height</span><span class="token punctuation">:</span> 1.618em<span class="token punctuation">;</span>
      <span class="token property">opacity</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
      <span class="token property">transition</span><span class="token punctuation">:</span> transform 0.5s<span class="token punctuation">,</span> opacity 0.7s<span class="token punctuation">;</span>
      <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">translateY</span><span class="token punctuation">(</span>20px<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token property">overflow-y</span><span class="token punctuation">:</span> auto<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  </span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>p_m_container<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>tab-wrapper<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
        <span class="token comment">&lt;!--tab section 1--&gt;</span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span>
          <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>radio<span class="token punctuation">&quot;</span></span>
          <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>tab-radio<span class="token punctuation">&quot;</span></span>
          <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>tab-radio<span class="token punctuation">&quot;</span></span>
          <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>tab-radio-1<span class="token punctuation">&quot;</span></span>
          <span class="token attr-name">checked</span>
        <span class="token punctuation">/&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>label</span> <span class="token attr-name">for</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>tab-radio-1<span class="token punctuation">&quot;</span></span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>tab-handler tab-handler-1<span class="token punctuation">&quot;</span></span>
          <span class="token punctuation">&gt;</span></span>tava<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>label</span>
        <span class="token punctuation">&gt;</span></span>

        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>tab-content tab-content-1<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
          
           
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>pre</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>log<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>pre</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
       
        <span class="token comment">&lt;!--tab section 2--&gt;</span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span>
          <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>radio<span class="token punctuation">&quot;</span></span>
          <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>tab-radio<span class="token punctuation">&quot;</span></span>
          <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>tab-radio<span class="token punctuation">&quot;</span></span>
          <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>tab-radio-2<span class="token punctuation">&quot;</span></span>
        <span class="token punctuation">/&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>label</span> <span class="token attr-name">for</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>tab-radio-2<span class="token punctuation">&quot;</span></span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>tab-handler tab-handler-2<span class="token punctuation">&quot;</span></span>
          <span class="token punctuation">&gt;</span></span>tafvab<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>label</span>
        <span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>tab-content tab-content-2<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>2222222<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
        <span class="token comment">&lt;!--tab section 3--&gt;</span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span>
          <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>radio<span class="token punctuation">&quot;</span></span>
          <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>tab-radio<span class="token punctuation">&quot;</span></span>
          <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>tab-radio<span class="token punctuation">&quot;</span></span>
          <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>tab-radio-3<span class="token punctuation">&quot;</span></span>
        <span class="token punctuation">/&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>label</span> <span class="token attr-name">for</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>tab-radio-3<span class="token punctuation">&quot;</span></span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>tab-handler tab-handler-3<span class="token punctuation">&quot;</span></span>
          <span class="token punctuation">&gt;</span></span>tabdddda<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>label</span>
        <span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>tab-content tab-content-3<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>333333333333<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
      
      
        
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>html</span><span class="token punctuation">&gt;</span></span>




<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
  <span class="token comment">// helper function: log message to screen</span>
  <span class="token keyword">function</span> <span class="token function">log</span><span class="token punctuation">(</span><span class="token parameter">msg</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">&#39;log&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span>textContent <span class="token operator">+=</span> msg <span class="token operator">+</span> <span class="token string">&#39;\\n&#39;</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token comment">// setup websocket with callbacks</span>
  <span class="token keyword">var</span> ws <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">WebSocket</span><span class="token punctuation">(</span><span class="token string">&#39;ws://192.168.180.206:9988/&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  ws<span class="token punctuation">.</span><span class="token function-variable function">onopen</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;CONNECT&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>
  ws<span class="token punctuation">.</span><span class="token function-variable function">onclose</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;DISCONNECT&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>
  ws<span class="token punctuation">.</span><span class="token function-variable function">onmessage</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">event</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;MESSAGE: &#39;</span> <span class="token operator">+</span> event<span class="token punctuation">.</span>data<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre></div>`,1),c=[o];function e(u,l){return a(),s("div",null,c)}const i=n(p,[["render",e],["__file","socketuse.html.vue"]]);export{i as default};
