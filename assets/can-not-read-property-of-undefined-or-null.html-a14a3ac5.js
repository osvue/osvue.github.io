import{_ as n,p as a,q as s,a1 as p}from"./framework-d81ad7e5.js";const e={},t=p(`<h2 id="介绍" tabindex="-1"><a class="header-anchor" href="#介绍" aria-hidden="true">#</a> 介绍</h2><p>经常会遇到报错信息：</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code>Uncaught TypeError<span class="token operator">:</span> Cannot read property <span class="token string">&#39;xxx&#39;</span> <span class="token keyword">of</span> <span class="token keyword">null</span>
Uncaught TypeError<span class="token operator">:</span> Cannot read property <span class="token string">&#39;xxx&#39;</span> <span class="token keyword">of</span> <span class="token keyword">undefined</span>
</code></pre></div><p>而访问另外三个原始类型（Number、String、Number）则不会存在问题。</p><h2 id="包装对象" tabindex="-1"><a class="header-anchor" href="#包装对象" aria-hidden="true">#</a> 包装对象</h2><blockquote><p><code>.</code> 符号可用来访问一个对象的属性。</p></blockquote><p>当原始类型访问属性时就会调用各自对应的构造函数方法，如：</p><ol><li>Number：<code>new Number(n)</code>；</li><li>String：<code>new String(s)</code>；</li><li>Boolean：<code>new Boolean(b)</code>。</li></ol><p>即可得到根本原因：</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> <span class="token constant">N</span> <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Number</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> <span class="token constant">S</span> <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">String</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> <span class="token constant">B</span> <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Boolean</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">typeof</span> <span class="token constant">N</span> <span class="token operator">===</span> <span class="token keyword">typeof</span> <span class="token constant">S</span> <span class="token operator">===</span> <span class="token keyword">typeof</span> <span class="token constant">B</span> <span class="token operator">===</span> <span class="token string">&quot;object&quot;</span>
</code></pre></div><blockquote><p>引申：</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">typeof</span> <span class="token keyword">null</span><span class="token punctuation">;</span> <span class="token comment">// object</span>
</code></pre></div><p>按照 JavaScript 中类型的划分应当返回为 <code>null</code>，这是 JavaScript 中一直存在的 bug，但永远都不会修复了，因为有太多已经在运行代码依赖于这个 bug。</p></blockquote><h2 id="js判断undefined" tabindex="-1"><a class="header-anchor" href="#js判断undefined" aria-hidden="true">#</a> js判断undefined</h2><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">var</span> exp <span class="token operator">=</span> <span class="token keyword">undefined</span><span class="token punctuation">;</span>
<span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">typeof</span><span class="token punctuation">(</span>exp<span class="token punctuation">)</span> <span class="token operator">==</span> <span class="token string">&quot;undefined&quot;</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
<span class="token function">alert</span><span class="token punctuation">(</span><span class="token string">&quot;undefined&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><h2 id="js判断null" tabindex="-1"><a class="header-anchor" href="#js判断null" aria-hidden="true">#</a> js判断null</h2><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">var</span> exp <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
<span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>exp <span class="token operator">&amp;&amp;</span> <span class="token keyword">typeof</span><span class="token punctuation">(</span>exp<span class="token punctuation">)</span><span class="token operator">!=</span>”<span class="token keyword">undefined</span>” <span class="token operator">&amp;&amp;</span> exp<span class="token operator">!=</span><span class="token number">0</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
<span class="token function">alert</span><span class="token punctuation">(</span>“is <span class="token keyword">null</span>”<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>　
</code></pre></div><h2 id="js判断null和undefined" tabindex="-1"><a class="header-anchor" href="#js判断null和undefined" aria-hidden="true">#</a> js判断null和undefined</h2><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">var</span> exp <span class="token operator">=</span> <span class="token keyword">undefined</span><span class="token punctuation">;</span>
<span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">typeof</span><span class="token punctuation">(</span>exp<span class="token punctuation">)</span> <span class="token operator">==</span> <span class="token keyword">undefined</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
<span class="token function">alert</span><span class="token punctuation">(</span><span class="token string">&quot;undefined&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div>`,17),o=[t];function c(l,r){return a(),s("div",null,o)}const k=n(e,[["render",c],["__file","can-not-read-property-of-undefined-or-null.html.vue"]]);export{k as default};