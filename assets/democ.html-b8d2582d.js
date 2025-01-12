import{_ as n,p as a,q as s,a1 as t}from"./framework-d81ad7e5.js";const p={},o=t(`<h2 id="模拟小米" tabindex="-1"><a class="header-anchor" href="#模拟小米" aria-hidden="true">#</a> 模拟小米</h2><div class="language-html" data-ext="html"><pre class="language-html"><code><span class="token comment">&lt;!-- 模拟小米 --&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span><span class="token punctuation">&gt;</span></span><span class="token style"><span class="token language-css">
    <span class="token selector">.app</span> <span class="token punctuation">{</span>
        <span class="token property">width</span><span class="token punctuation">:</span> 300px<span class="token punctuation">;</span>
        <span class="token property">height</span><span class="token punctuation">:</span> 300px<span class="token punctuation">;</span>

        <span class="token property">background-color</span><span class="token punctuation">:</span> #f57923<span class="token punctuation">;</span>
        <span class="token property">margin</span><span class="token punctuation">:</span> auto<span class="token punctuation">;</span>
        <span class="token property">border-radius</span><span class="token punctuation">:</span> 30%<span class="token punctuation">;</span>
        <span class="token property">position</span><span class="token punctuation">:</span> relative<span class="token punctuation">;</span>
        <span class="token property">z-index</span><span class="token punctuation">:</span> -1<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token selector">.la</span> <span class="token punctuation">{</span>
        <span class="token property">position</span><span class="token punctuation">:</span> absolute<span class="token punctuation">;</span>

        <span class="token property">width</span><span class="token punctuation">:</span> 150px<span class="token punctuation">;</span>
        <span class="token property">height</span><span class="token punctuation">:</span> 150px<span class="token punctuation">;</span>
        <span class="token property">margin</span><span class="token punctuation">:</span> 70px 100px 20px 50px<span class="token punctuation">;</span>
        <span class="token property">border-top-right-radius</span><span class="token punctuation">:</span> 40px<span class="token punctuation">;</span>
        <span class="token property">background-color</span><span class="token punctuation">:</span> #fff<span class="token punctuation">;</span>
        <span class="token property">clear</span><span class="token punctuation">:</span> both<span class="token punctuation">;</span>

    <span class="token punctuation">}</span>

    <span class="token selector">.rb</span> <span class="token punctuation">{</span>
        <span class="token property">position</span><span class="token punctuation">:</span> absolute<span class="token punctuation">;</span>

        <span class="token property">right</span><span class="token punctuation">:</span> 39px<span class="token punctuation">;</span>
        <span class="token property">top</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
        <span class="token property">height</span><span class="token punctuation">:</span> 150px<span class="token punctuation">;</span>
        <span class="token property">width</span><span class="token punctuation">:</span> 30px<span class="token punctuation">;</span>
        <span class="token property">margin-top</span><span class="token punctuation">:</span> 70px<span class="token punctuation">;</span>
        <span class="token property">margin-right</span><span class="token punctuation">:</span> 15px<span class="token punctuation">;</span>
        <span class="token property">background-color</span><span class="token punctuation">:</span> #fff<span class="token punctuation">;</span>


    <span class="token punctuation">}</span>

    <span class="token selector">.mi</span> <span class="token punctuation">{</span>
        <span class="token property">width</span><span class="token punctuation">:</span> 60%<span class="token punctuation">;</span>
        <span class="token property">height</span><span class="token punctuation">:</span> 80%<span class="token punctuation">;</span>
        <span class="token property">background-color</span><span class="token punctuation">:</span> #f57923<span class="token punctuation">;</span>
        <span class="token property">margin</span><span class="token punctuation">:</span> 30px auto<span class="token punctuation">;</span>
        <span class="token property">border-top-right-radius</span><span class="token punctuation">:</span> 29%<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token selector">.i</span> <span class="token punctuation">{</span>
        <span class="token property">width</span><span class="token punctuation">:</span> 22%<span class="token punctuation">;</span>
        <span class="token property">height</span><span class="token punctuation">:</span> 58%<span class="token punctuation">;</span>
        <span class="token property">background-color</span><span class="token punctuation">:</span> #fff<span class="token punctuation">;</span>
        <span class="token property">position</span><span class="token punctuation">:</span> absolute<span class="token punctuation">;</span>
        <span class="token property">margin</span><span class="token punctuation">:</span> auto<span class="token punctuation">;</span>
        <span class="token property">bottom</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
        <span class="token property">right</span><span class="token punctuation">:</span> 60px<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>app<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>la<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>mi<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>i<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>rb<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>


    <span class="token comment">&lt;!-- aaaaa --&gt;</span>

    
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>app<span class="token punctuation">&quot;</span></span> <span class="token special-attr"><span class="token attr-name">style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span> width: 300px;
    height: 300px;  background-color: #f57923;
    margin: auto;
    border-radius: 30%;
    position: relative;
    z-index: -1;<span class="token punctuation">&quot;</span></span></span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>la<span class="token punctuation">&quot;</span></span> <span class="token special-attr"><span class="token attr-name">style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span> position: absolute;  width: 150px;
        height: 150px;
        margin: 70px 100px 20px 50px;
        border-top-right-radius: 40px;
        background-color: #fff;
        clear: both;<span class="token punctuation">&quot;</span></span></span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>mi<span class="token punctuation">&quot;</span></span> <span class="token special-attr"><span class="token attr-name">style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span> width: 60%;
            height: 80%;
            background-color: #f57923;
            margin: 30px auto;
            border-top-right-radius: 29%;<span class="token punctuation">&quot;</span></span></span><span class="token punctuation">&gt;</span></span>
                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>i<span class="token punctuation">&quot;</span></span> <span class="token special-attr"><span class="token attr-name">style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span> width: 22%;
                height: 58%;
                background-color: #fff;
                position: absolute;
                margin: auto;
                bottom: 0;
                right: 60px;<span class="token punctuation">&quot;</span></span></span><span class="token punctuation">&gt;</span></span>
                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>rb<span class="token punctuation">&quot;</span></span> <span class="token special-attr"><span class="token attr-name">style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span><span class="token value css language-css"><span class="token property">position</span><span class="token punctuation">:</span> absolute<span class="token punctuation">;</span>
        <span class="token property">right</span><span class="token punctuation">:</span> 39px<span class="token punctuation">;</span>
        <span class="token property">top</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
        <span class="token property">height</span><span class="token punctuation">:</span> 150px<span class="token punctuation">;</span>
        <span class="token property">width</span><span class="token punctuation">:</span> 30px<span class="token punctuation">;</span>
        <span class="token property">margin-top</span><span class="token punctuation">:</span> 70px<span class="token punctuation">;</span>
        <span class="token property">margin-right</span><span class="token punctuation">:</span> 15px<span class="token punctuation">;</span>
        <span class="token property">background-color</span><span class="token punctuation">:</span> #fff<span class="token punctuation">;</span></span><span class="token punctuation">&quot;</span></span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
</code></pre></div>`,2),c=[o];function e(u,l){return a(),s("div",null,c)}const i=n(p,[["render",e],["__file","democ.html.vue"]]);export{i as default};
