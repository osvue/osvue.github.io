import{_ as n,p as a,q as s,a1 as t}from"./framework-d81ad7e5.js";const p={},e=t(`<h2 id="use-local-sql" tabindex="-1"><a class="header-anchor" href="#use-local-sql" aria-hidden="true">#</a> use Local sql</h2><div class="language-java" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">interface</span> <span class="token class-name">TBankRepository</span> <span class="token keyword">extends</span> <span class="token class-name">JpaRepository</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">TBank</span><span class="token punctuation">,</span><span class="token class-name">Integer</span><span class="token punctuation">&gt;</span></span> <span class="token punctuation">{</span>
    <span class="token annotation punctuation">@Transactional</span>
    <span class="token annotation punctuation">@Query</span><span class="token punctuation">(</span>value <span class="token operator">=</span> <span class="token string">&quot;update TBank set bankMoney = bankMoney + ?2  where bankNo = ?1&quot;</span><span class="token punctuation">)</span>
    <span class="token annotation punctuation">@Modifying</span>
    <span class="token keyword">public</span> <span class="token keyword">int</span> <span class="token function">updateByNum</span><span class="token punctuation">(</span><span class="token class-name">String</span> num<span class="token punctuation">,</span><span class="token keyword">double</span> money<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">TBank</span><span class="token punctuation">&gt;</span></span> <span class="token function">findByUserId</span><span class="token punctuation">(</span><span class="token class-name">Integer</span> id<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">//    查询根据卡号</span>
    <span class="token class-name">TBank</span> findByBankNo <span class="token punctuation">(</span><span class="token class-name">String</span> num<span class="token punctuation">)</span><span class="token punctuation">;</span>


<span class="token punctuation">}</span>
</code></pre></div>`,2),o=[e];function c(l,u){return a(),s("div",null,o)}const i=n(p,[["render",c],["__file","local.html.vue"]]);export{i as default};
