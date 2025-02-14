import{_ as n,p as s,q as a,a1 as t}from"./framework-d81ad7e5.js";const p={},o=t(`<div class="custom-container danger"><p class="custom-container-title">DANGER</p><p>只针对原生DOM, 如果使用了 <strong>bootstrap</strong> 等UI框架,需修改!</p></div><h2 id="禁止重复提交" tabindex="-1"><a class="header-anchor" href="#禁止重复提交" aria-hidden="true">#</a> 禁止重复提交</h2><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code>    <span class="token keyword">function</span> <span class="token function">repeatTimer</span><span class="token punctuation">(</span><span class="token parameter">id</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">var</span> timeout <span class="token operator">=</span> arguments<span class="token punctuation">.</span>length <span class="token operator">&gt;</span> <span class="token number">1</span> <span class="token operator">&amp;&amp;</span> arguments<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">!==</span> <span class="token keyword">undefined</span> <span class="token operator">?</span> arguments<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">:</span> <span class="token number">3000</span><span class="token punctuation">;</span>
        <span class="token keyword">var</span> stamp <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span>id<span class="token punctuation">)</span><span class="token punctuation">;</span>
        stamp<span class="token punctuation">.</span>disabled <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
        <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
            stamp<span class="token punctuation">.</span>disabled <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span> timeout<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
 
</code></pre></div><ul><li>若time==0则表示当前的按钮计时完毕,需要将按钮恢复,并且重新赋值,若!=0则表明当前正在计时，按钮禁用，并且时间time-1</li></ul><div class="language-html" data-ext="html"><pre class="language-html"><code>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>https://unpkg.com/jquery@3.6.0/dist/jquery.js<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
    
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>button<span class="token punctuation">&quot;</span></span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>sub<span class="token punctuation">&quot;</span></span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>btn btn-primary<span class="token punctuation">&quot;</span></span> <span class="token special-attr"><span class="token attr-name">onclick</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span><span class="token value javascript language-javascript"><span class="token function">saveForm</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span><span class="token punctuation">&quot;</span></span></span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>下发<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
    <span class="token keyword">var</span> time <span class="token operator">=</span> <span class="token number">10</span>

    <span class="token keyword">function</span> <span class="token function">btnss</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>time <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token comment">//重新下发</span>
            <span class="token function">$</span><span class="token punctuation">(</span><span class="token string">&quot;#sub&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">attr</span><span class="token punctuation">(</span><span class="token string">&quot;disabled&quot;</span><span class="token punctuation">,</span> <span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token function">$</span><span class="token punctuation">(</span><span class="token string">&quot;#sub&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">val</span><span class="token punctuation">(</span><span class="token string">&quot;下发&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            time <span class="token operator">=</span> <span class="token number">10</span><span class="token punctuation">;</span>
            <span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span> <span class="token comment">//清除定时器</span>
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
            <span class="token function">$</span><span class="token punctuation">(</span><span class="token string">&quot;#sub&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">attr</span><span class="token punctuation">(</span><span class="token string">&quot;disabled&quot;</span><span class="token punctuation">,</span> <span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token function">$</span><span class="token punctuation">(</span><span class="token string">&quot;#sub&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">val</span><span class="token punctuation">(</span><span class="token string">&quot;重新下发(&quot;</span> <span class="token operator">+</span> time <span class="token operator">+</span> <span class="token string">&quot;)&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            time<span class="token operator">--</span><span class="token punctuation">;</span>
            console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>time<span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
        <span class="token comment">//设置一个定时器</span>
        <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token function">btnss</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">1000</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>


    <span class="token keyword">function</span> <span class="token function">saveForm</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token function">btnss</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
        <span class="token comment">// todo ...........</span>
    <span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
 
</code></pre></div><blockquote><p>这里需要注意的一点是 <strong>return false</strong> 清除定时器 这里的return的作用是清除计时器，不然的话计时器会一直循环调用</p></blockquote>`,6),c=[o];function e(u,l){return s(),a("div",null,c)}const i=n(p,[["render",e],["__file","jquery_5.html.vue"]]);export{i as default};
