import{_ as a,p as s,q as n,a1 as t}from"./framework-d81ad7e5.js";const e={},o=t(`<h2 id="object转json" tabindex="-1"><a class="header-anchor" href="#object转json" aria-hidden="true">#</a> object转json</h2><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token comment">//msp转objectlet obj= Object.create(null);</span>
<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span><span class="token punctuation">[</span>k<span class="token punctuation">,</span>v<span class="token punctuation">]</span> <span class="token keyword">of</span> map<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    obj<span class="token punctuation">[</span>k<span class="token punctuation">]</span> <span class="token operator">=</span> v<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token comment">//object转json</span>
<span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span>obj<span class="token punctuation">)</span><span class="token punctuation">;</span>

</code></pre></div><h3 id="slice-start-end" tabindex="-1"><a class="header-anchor" href="#slice-start-end" aria-hidden="true">#</a> slice(start, end)</h3><ul><li>slice()、从start开始，到end结束，开始的位置从0不是1，不包括end，支持数组分割，支持负数，返回数组</li></ul><h3 id="substr-start-length" tabindex="-1"><a class="header-anchor" href="#substr-start-length" aria-hidden="true">#</a> substr(start, length)</h3><ul><li>substr()、从start开始，返回length长度字符，开始的位置从0不是1，支持负数，不支持数组</li></ul><h3 id="substring-start-stop" tabindex="-1"><a class="header-anchor" href="#substring-start-stop" aria-hidden="true">#</a> substring(start, stop)</h3><ul><li>substring()、不接受负数，从 start 开始，不包括stop，开始的位置从0不是1，不支持数组</li></ul><h3 id="split-separator-length" tabindex="-1"><a class="header-anchor" href="#split-separator-length" aria-hidden="true">#</a> split(separator, length)</h3><ul><li>字符按照字符串或正则分割，输出一个数组，length表示返回的长度，不支持数组；</li></ul><h3 id="join-separator" tabindex="-1"><a class="header-anchor" href="#join-separator" aria-hidden="true">#</a> join(separator)</h3><ul><li>将数组合并成字符串，用 separator隔离，不支持字符串</li></ul>`,12),r=[o];function c(p,l){return s(),n("div",null,r)}const u=a(e,[["render",c],["__file","methods.html.vue"]]);export{u as default};