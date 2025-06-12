import{_ as a,o as n,c as e,a as t}from"./app-215c512d.js";const c={};function o(p,s){return n(),e("div",null,s[0]||(s[0]=[t(`<h3 id="hover点击一个元素使另一个颜色变色" tabindex="-1"><a class="header-anchor" href="#hover点击一个元素使另一个颜色变色" aria-hidden="true">#</a> hover点击一个元素使另一个颜色变色</h3><ol><li>点击后改变子元素</li></ol><div class="language-css" data-ext="css"><pre class="language-css"><code><span class="token selector">.myclass:active span</span><span class="token punctuation">{</span>
<span class="token property">color</span><span class="token punctuation">:</span>#00f<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><ol start="2"><li>改变下一个兄弟元素</li></ol><div class="language-css" data-ext="css"><pre class="language-css"><code><span class="token selector">.myclass:active +span</span><span class="token punctuation">{</span>
<span class="token property">color</span><span class="token punctuation">:</span>#00f<span class="token punctuation">;</span>
<span class="token punctuation">}</span> 
</code></pre></div><ol start="3"><li>改变下一个兄弟元素的相邻元素</li></ol><div class="language-css" data-ext="css"><pre class="language-css"><code><span class="token selector">.myclass:active +span p</span><span class="token punctuation">{</span>
<span class="token property">color</span><span class="token punctuation">:</span>#00f<span class="token punctuation">;</span>
<span class="token punctuation">}</span> 
</code></pre></div>`,7)]))}const r=a(c,[["render",o],["__file","css_hove.html.vue"]]);export{r as default};
