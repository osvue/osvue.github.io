import{_ as s,o as a,c as t,a as p}from"./app-215c512d.js";const o={};function e(c,n){return a(),t("div",null,n[0]||(n[0]=[p(`<h2 id="单例设计模式" tabindex="-1"><a class="header-anchor" href="#单例设计模式" aria-hidden="true">#</a> 单例设计模式</h2><div class="language-java" data-ext="java"><pre class="language-java"><code>
<span class="token keyword">class</span> <span class="token class-name">DateUtil</span> <span class="token punctuation">{</span>

    <span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token class-name">DateUtil</span> <span class="token constant">INSTANCE</span><span class="token punctuation">;</span>

    <span class="token keyword">private</span> <span class="token class-name">DateUtil</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token class-name">DateUtil</span> <span class="token function">getInstance</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token constant">INSTANCE</span> <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">synchronized</span> <span class="token punctuation">(</span><span class="token class-name">DateUtil</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token constant">INSTANCE</span> <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                    <span class="token constant">INSTANCE</span> <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">DateUtil</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">return</span> <span class="token constant">INSTANCE</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

<span class="token punctuation">}</span>

</code></pre></div>`,2)]))}const k=s(o,[["render",e],["__file","gof_single.html.vue"]]);export{k as default};
