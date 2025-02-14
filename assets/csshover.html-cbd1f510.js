import{_ as n,p as s,q as a,a1 as t}from"./framework-d81ad7e5.js";const p={},o=t(`<p>CSS:hover时改变另一元素的显示/隐藏(3种情况)</p><h4 id="情况1-改变子元素-父元素-hover-子元素" tabindex="-1"><a class="header-anchor" href="#情况1-改变子元素-父元素-hover-子元素" aria-hidden="true">#</a> 情况1.改变子元素（父元素:hover 子元素）</h4><div class="language-html" data-ext="html"><pre class="language-html"><code>	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span><span class="token punctuation">&gt;</span></span><span class="token style"><span class="token language-css">
        <span class="token selector">.parent</span><span class="token punctuation">{</span>
            <span class="token property">width</span><span class="token punctuation">:</span> 200px<span class="token punctuation">;</span>
            <span class="token property">height</span><span class="token punctuation">:</span> 200px<span class="token punctuation">;</span>
            <span class="token property">background</span><span class="token punctuation">:</span> #cc66dd<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token selector">.child</span><span class="token punctuation">{</span>
            <span class="token property">width</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span>
            <span class="token property">height</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span>
            <span class="token property">background</span><span class="token punctuation">:</span> #3333dd<span class="token punctuation">;</span>
            <span class="token property">display</span><span class="token punctuation">:</span> none<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token selector">.parent:hover .child</span><span class="token punctuation">{</span>
            <span class="token property">display</span><span class="token punctuation">:</span> block<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    </span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>parent<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
        父
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>child<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>子<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><h4 id="情况2-改变兄弟元素-兄弟1-hover-兄弟2" tabindex="-1"><a class="header-anchor" href="#情况2-改变兄弟元素-兄弟1-hover-兄弟2" aria-hidden="true">#</a> 情况2.改变兄弟元素（兄弟1:hover+兄弟2）</h4><div class="language-html" data-ext="html"><pre class="language-html"><code> 	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span><span class="token punctuation">&gt;</span></span><span class="token style"><span class="token language-css">
        <span class="token selector">.brother1</span><span class="token punctuation">{</span>
            <span class="token property">width</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span>
            <span class="token property">height</span><span class="token punctuation">:</span>100px<span class="token punctuation">;</span>
            <span class="token property">background</span><span class="token punctuation">:</span> #cc66dd<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token selector">.brother2</span><span class="token punctuation">{</span>
            <span class="token property">width</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span>
            <span class="token property">height</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span>
            <span class="token property">background</span><span class="token punctuation">:</span> #3333dd<span class="token punctuation">;</span>
            <span class="token property">display</span><span class="token punctuation">:</span> none<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token selector">.brother1:hover+.brother2</span><span class="token punctuation">{</span>
            <span class="token property">display</span><span class="token punctuation">:</span> block<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    </span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>brother1<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>大弟<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>brother2<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>二弟<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">&gt;</span></span>

</code></pre></div><h4 id="情况3-改变兄弟元素下子元素-兄弟1-hover-兄弟2-兄弟2的儿子" tabindex="-1"><a class="header-anchor" href="#情况3-改变兄弟元素下子元素-兄弟1-hover-兄弟2-兄弟2的儿子" aria-hidden="true">#</a> 情况3.改变兄弟元素下子元素（兄弟1:hover+兄弟2&gt;兄弟2的儿子）</h4><div class="language-html" data-ext="html"><pre class="language-html"><code>	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span><span class="token punctuation">&gt;</span></span><span class="token style"><span class="token language-css">
        <span class="token selector">.brother1</span><span class="token punctuation">{</span>
            <span class="token property">width</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span>
            <span class="token property">height</span><span class="token punctuation">:</span>100px<span class="token punctuation">;</span>
            <span class="token property">background</span><span class="token punctuation">:</span> #cc66dd<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token selector">.brother2</span><span class="token punctuation">{</span>
            <span class="token property">width</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span>
            <span class="token property">height</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span>
            <span class="token property">background</span><span class="token punctuation">:</span> #3333dd<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token selector">.brother2-son</span><span class="token punctuation">{</span>
            <span class="token property">width</span><span class="token punctuation">:</span> 50px<span class="token punctuation">;</span>
            <span class="token property">height</span><span class="token punctuation">:</span> 50px<span class="token punctuation">;</span>
            <span class="token property">background</span><span class="token punctuation">:</span> #ffff00<span class="token punctuation">;</span>
            <span class="token property">display</span><span class="token punctuation">:</span> none<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token selector">.brother1:hover+.brother2&gt;.brother2-son</span><span class="token punctuation">{</span>
            <span class="token property">display</span><span class="token punctuation">:</span> block<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    </span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>brother1<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>大弟<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>brother2<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>二弟
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>brother2-son<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>二弟儿子<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">&gt;</span></span>

</code></pre></div>`,7),c=[o];function e(l,u){return s(),a("div",null,c)}const i=n(p,[["render",e],["__file","csshover.html.vue"]]);export{i as default};
