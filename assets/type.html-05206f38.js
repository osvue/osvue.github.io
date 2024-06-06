import{_ as n,p as s,q as a,a1 as t}from"./framework-d81ad7e5.js";const e={},p=t(`<h3 id="" tabindex="-1"><a class="header-anchor" href="#" aria-hidden="true">#</a> <code>|</code></h3><div class="language-typescript" data-ext="ts"><pre class="language-typescript"><code><span class="token comment">// 字面量</span>

<span class="token keyword">let</span> a<span class="token operator">:</span> <span class="token number">10</span><span class="token punctuation">;</span>

<span class="token comment">// a = 12; error   </span>


<span class="token comment">// ### \`|\`</span>
<span class="token keyword">let</span> msg<span class="token operator">:</span> <span class="token string">&#39;true&#39;</span> <span class="token operator">|</span> <span class="token string">&#39;false&#39;</span><span class="token punctuation">;</span>

msg <span class="token operator">=</span> <span class="token string">&#39;true&#39;</span>


<span class="token keyword">let</span> lt<span class="token operator">:</span> <span class="token builtin">boolean</span> <span class="token operator">|</span> <span class="token builtin">string</span><span class="token punctuation">;</span>

lt <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
lt <span class="token operator">=</span> <span class="token string">&#39;aga&#39;</span>


</code></pre></div><h3 id="数组的类型" tabindex="-1"><a class="header-anchor" href="#数组的类型" aria-hidden="true">#</a> 数组的类型</h3><h3 id="数组的类型-1" tabindex="-1"><a class="header-anchor" href="#数组的类型-1" aria-hidden="true">#</a> 数组的类型</h3><h3 id="数组的类型-2" tabindex="-1"><a class="header-anchor" href="#数组的类型-2" aria-hidden="true">#</a> 数组的类型</h3><h3 id="数组的类型-3" tabindex="-1"><a class="header-anchor" href="#数组的类型-3" aria-hidden="true">#</a> 数组的类型</h3><div class="language-typescript" data-ext="ts"><pre class="language-typescript"><code><span class="token comment">/*
*   数组的类型声明：
*       类型[]
*       Array&lt;类型&gt;
* */</span>
<span class="token comment">// string[] 表示字符串数组</span>
<span class="token keyword">let</span> e<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
e <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">&#39;a&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;b&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;c&#39;</span><span class="token punctuation">]</span><span class="token punctuation">;</span>

<span class="token comment">// number[] 表示数值数值</span>
<span class="token keyword">let</span> f<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>

<span class="token keyword">let</span> g<span class="token operator">:</span> <span class="token builtin">Array</span><span class="token operator">&lt;</span><span class="token builtin">number</span><span class="token operator">&gt;</span><span class="token punctuation">;</span>
g <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
</code></pre></div>`,7),o=[p];function c(l,r){return s(),a("div",null,o)}const k=n(e,[["render",c],["__file","type.html.vue"]]);export{k as default};
