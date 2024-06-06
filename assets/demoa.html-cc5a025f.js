import{_ as n,p as s,q as a,a1 as t}from"./framework-d81ad7e5.js";const p={},o=t(`<h2 id="登录效果" tabindex="-1"><a class="header-anchor" href="#登录效果" aria-hidden="true">#</a> 登录效果</h2><div class="language-html" data-ext="html"><pre class="language-html"><code><span class="token doctype"><span class="token punctuation">&lt;!</span><span class="token doctype-tag">DOCTYPE</span> <span class="token name">html</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>en<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">charset</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>UTF-8<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">http-equiv</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>X-UA-Compatible<span class="token punctuation">&quot;</span></span> <span class="token attr-name">content</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>IE=edge<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>viewport<span class="token punctuation">&quot;</span></span> <span class="token attr-name">content</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>width=device-width, initial-scale=1.0<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>title</span><span class="token punctuation">&gt;</span></span>login<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>title</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span><span class="token punctuation">&gt;</span></span><span class="token style"><span class="token language-css">
        <span class="token selector">body</span><span class="token punctuation">{</span>
            <span class="token comment">/* 设置背景渐变 */</span>
            <span class="token property">background-image</span><span class="token punctuation">:</span> <span class="token function">linear-gradient</span><span class="token punctuation">(</span>to left<span class="token punctuation">,</span>
            #9c88ff<span class="token punctuation">,</span>#3cadeb<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token property">display</span><span class="token punctuation">:</span> flex<span class="token punctuation">;</span>
            <span class="token property">justify-content</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token selector">.a</span><span class="token punctuation">{</span>
            <span class="token property">position</span><span class="token punctuation">:</span>relative<span class="token punctuation">;</span>
            <span class="token property">top</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span>
            <span class="token property">width</span><span class="token punctuation">:</span> 1100px<span class="token punctuation">;</span>
            <span class="token property">height</span><span class="token punctuation">:</span> 550px<span class="token punctuation">;</span>
            <span class="token property">box-shadow</span><span class="token punctuation">:</span> 0 5px 15px <span class="token function">rgba</span><span class="token punctuation">(</span>0<span class="token punctuation">,</span>0<span class="token punctuation">,</span>0<span class="token punctuation">,</span>.8<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token property">display</span><span class="token punctuation">:</span> flex<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token selector">.b</span><span class="token punctuation">{</span>
            <span class="token property">width</span><span class="token punctuation">:</span> 800px<span class="token punctuation">;</span>
            <span class="token property">height</span><span class="token punctuation">:</span> 550px<span class="token punctuation">;</span>
            <span class="token property">background-image</span><span class="token punctuation">:</span> <span class="token url"><span class="token function">url</span><span class="token punctuation">(</span><span class="token string url">&quot;201515-158211451517f1.jpg&quot;</span><span class="token punctuation">)</span></span><span class="token punctuation">;</span>
            <span class="token comment">/* 让图片适应大小 */</span>
            <span class="token property">background-size</span><span class="token punctuation">:</span> cover<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token selector">.c</span><span class="token punctuation">{</span>
            <span class="token property">width</span><span class="token punctuation">:</span> 300px<span class="token punctuation">;</span>
            <span class="token property">height</span><span class="token punctuation">:</span> 550px<span class="token punctuation">;</span>
            <span class="token property">background-color</span><span class="token punctuation">:</span> white<span class="token punctuation">;</span>
            <span class="token property">display</span><span class="token punctuation">:</span> flex<span class="token punctuation">;</span>
            <span class="token property">justify-content</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>
            <span class="token property">align-items</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token selector">.d</span><span class="token punctuation">{</span>
            <span class="token property">width</span><span class="token punctuation">:</span> 250px<span class="token punctuation">;</span>
            <span class="token property">height</span><span class="token punctuation">:</span> 500px<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token selector">.d h1</span><span class="token punctuation">{</span>
            <span class="token property">font</span><span class="token punctuation">:</span> 900 30px <span class="token string">&#39;&#39;</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token selector">.e</span><span class="token punctuation">{</span>
            <span class="token property">width</span><span class="token punctuation">:</span> 230px<span class="token punctuation">;</span>
            <span class="token property">margin</span><span class="token punctuation">:</span> 20px 0<span class="token punctuation">;</span>
            <span class="token property">outline</span><span class="token punctuation">:</span> none<span class="token punctuation">;</span>
            <span class="token property">border</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
            <span class="token property">padding</span><span class="token punctuation">:</span> 10px<span class="token punctuation">;</span>
            <span class="token property">border-bottom</span><span class="token punctuation">:</span> 3px solid <span class="token function">rgb</span><span class="token punctuation">(</span>80<span class="token punctuation">,</span>80<span class="token punctuation">,</span>170<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token property">font</span><span class="token punctuation">:</span> 900 16px <span class="token string">&#39;&#39;</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token selector">.f</span><span class="token punctuation">{</span>
            <span class="token property">float</span><span class="token punctuation">:</span> right<span class="token punctuation">;</span>
            <span class="token property">margin</span><span class="token punctuation">:</span> 10px 0<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token selector">.g</span><span class="token punctuation">{</span>
            <span class="token property">position</span><span class="token punctuation">:</span> absolute<span class="token punctuation">;</span>
            <span class="token property">margin</span><span class="token punctuation">:</span> 20px<span class="token punctuation">;</span>
            <span class="token property">bottom</span><span class="token punctuation">:</span> 40px<span class="token punctuation">;</span>
            <span class="token property">display</span><span class="token punctuation">:</span> block<span class="token punctuation">;</span>
            <span class="token property">width</span><span class="token punctuation">:</span> 200px<span class="token punctuation">;</span>
            <span class="token property">height</span><span class="token punctuation">:</span> 60px<span class="token punctuation">;</span>
            <span class="token property">font</span><span class="token punctuation">:</span> 900 30px <span class="token string">&#39;&#39;</span><span class="token punctuation">;</span>
            <span class="token property">text-decoration</span><span class="token punctuation">:</span> none<span class="token punctuation">;</span>
            <span class="token property">line-height</span><span class="token punctuation">:</span> 50px<span class="token punctuation">;</span>
            <span class="token property">border-radius</span><span class="token punctuation">:</span> 30px<span class="token punctuation">;</span>
            <span class="token property">background-image</span><span class="token punctuation">:</span> <span class="token function">linear-gradient</span><span class="token punctuation">(</span>to left<span class="token punctuation">,</span>
            #9c88ff<span class="token punctuation">,</span>#3cadeb<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token property">text-align</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    </span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>a<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>b<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>c<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>d<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h1</span><span class="token punctuation">&gt;</span></span>Login/Register<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h1</span><span class="token punctuation">&gt;</span></span>
                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>text<span class="token punctuation">&quot;</span></span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>e<span class="token punctuation">&quot;</span></span> <span class="token attr-name">placeholder</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>USER NAME<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>text<span class="token punctuation">&quot;</span></span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>e<span class="token punctuation">&quot;</span></span> <span class="token attr-name">placeholder</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>ACCOUNT<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>password<span class="token punctuation">&quot;</span></span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>e<span class="token punctuation">&quot;</span></span> <span class="token attr-name">placeholder</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>PASSWORD<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>#<span class="token punctuation">&quot;</span></span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>f<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>Forget the passrword?<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">&gt;</span></span>
                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>#<span class="token punctuation">&quot;</span></span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>g<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>Login<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>html</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><h2 id="视觉差效果" tabindex="-1"><a class="header-anchor" href="#视觉差效果" aria-hidden="true">#</a> 视觉差效果</h2><div class="language-html" data-ext="html"><pre class="language-html"><code> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span><span class="token punctuation">&gt;</span></span><span class="token style"><span class="token language-css">
        <span class="token selector">body</span> <span class="token punctuation">{</span>
            <span class="token property">display</span><span class="token punctuation">:</span> flex<span class="token punctuation">;</span>
            <span class="token property">justify-content</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>
            <span class="token property">background-color</span><span class="token punctuation">:</span> <span class="token function">rgb</span><span class="token punctuation">(</span>119 157 193<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token selector">.a</span><span class="token punctuation">{</span>
            <span class="token property">position</span><span class="token punctuation">:</span> relative<span class="token punctuation">;</span>
            <span class="token property">top</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span>
            <span class="token property">width</span><span class="token punctuation">:</span> 1000px<span class="token punctuation">;</span>
            <span class="token property">height</span><span class="token punctuation">:</span> 600px<span class="token punctuation">;</span>
            <span class="token property">background-image</span><span class="token punctuation">:</span> <span class="token url"><span class="token function">url</span><span class="token punctuation">(</span><span class="token string url">&quot;201515-158211451517f1.jpg&quot;</span><span class="token punctuation">)</span></span><span class="token punctuation">;</span>
            <span class="token property">background-size</span><span class="token punctuation">:</span> cover<span class="token punctuation">;</span>
            <span class="token property">display</span><span class="token punctuation">:</span> flex<span class="token punctuation">;</span>
            <span class="token property">justify-content</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>
            <span class="token property">align-items</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>
            <span class="token property">overflow</span><span class="token punctuation">:</span> hidden<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token selector">.b,
        .c,
        .d,
        .e</span><span class="token punctuation">{</span>
            <span class="token property">position</span><span class="token punctuation">:</span> absolute<span class="token punctuation">;</span>
            <span class="token property">width</span><span class="token punctuation">:</span> 1000px<span class="token punctuation">;</span>
            <span class="token property">height</span><span class="token punctuation">:</span> 600px<span class="token punctuation">;</span>
            <span class="token comment">/* 设置阴影 */</span>
            <span class="token property">filter</span><span class="token punctuation">:</span> <span class="token function">drop-shadow</span><span class="token punctuation">(</span>4px 4px 12px <span class="token function">rgba</span><span class="token punctuation">(</span>0<span class="token punctuation">,</span>0<span class="token punctuation">,</span>0<span class="token punctuation">,</span>.5<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token property">background-size</span><span class="token punctuation">:</span> cover<span class="token punctuation">;</span>
            <span class="token property">opacity</span><span class="token punctuation">:</span> .7<span class="token punctuation">;</span>
            <span class="token property">transition</span><span class="token punctuation">:</span> .5s<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token selector">.b::after,
        .c::after,
        .d::after,
        .e::after</span><span class="token punctuation">{</span>
            <span class="token property">content</span><span class="token punctuation">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">;</span>
            <span class="token property">position</span><span class="token punctuation">:</span> absolute<span class="token punctuation">;</span>
            <span class="token property">width</span><span class="token punctuation">:</span> 1000px<span class="token punctuation">;</span>
            <span class="token property">height</span><span class="token punctuation">:</span> 600px<span class="token punctuation">;</span>
            <span class="token property">background-image</span><span class="token punctuation">:</span> <span class="token url"><span class="token function">url</span><span class="token punctuation">(</span><span class="token string url">&quot;201515-158211451517f1.jpg&quot;</span><span class="token punctuation">)</span></span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token selector">.b</span><span class="token punctuation">{</span>
            <span class="token property">left</span><span class="token punctuation">:</span> -400px<span class="token punctuation">;</span>
            <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">rotateZ</span><span class="token punctuation">(</span>100deg<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token property">overflow</span><span class="token punctuation">:</span> hidden<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token selector">.b::after</span><span class="token punctuation">{</span>
            <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">rotateZ</span><span class="token punctuation">(</span>-100deg<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token selector">.c</span><span class="token punctuation">{</span>
            <span class="token property">left</span><span class="token punctuation">:</span> -400px<span class="token punctuation">;</span>
            <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">rotateZ</span><span class="token punctuation">(</span>-100deg<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token property">overflow</span><span class="token punctuation">:</span> hidden<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token selector">.c::after</span><span class="token punctuation">{</span>
            <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">rotateZ</span><span class="token punctuation">(</span>100deg<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token selector">.d</span><span class="token punctuation">{</span>
            <span class="token property">right</span><span class="token punctuation">:</span> -400px<span class="token punctuation">;</span>
            <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">rotateZ</span><span class="token punctuation">(</span>105deg<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token property">overflow</span><span class="token punctuation">:</span> hidden<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token selector">.d::after</span><span class="token punctuation">{</span>
            <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">rotateZ</span><span class="token punctuation">(</span>-105deg<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token selector">.e</span><span class="token punctuation">{</span>
            <span class="token property">right</span><span class="token punctuation">:</span> -400px<span class="token punctuation">;</span>
            <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">rotateZ</span><span class="token punctuation">(</span>-100deg<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token property">overflow</span><span class="token punctuation">:</span> hidden<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token selector">.e::after</span><span class="token punctuation">{</span>
            <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">rotateZ</span><span class="token punctuation">(</span>100deg<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token selector">.f</span><span class="token punctuation">{</span>
            <span class="token property">opacity</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
            <span class="token property">font</span><span class="token punctuation">:</span> 900 50px <span class="token string">&#39;&#39;</span><span class="token punctuation">;</span>
            <span class="token comment">/* 设置字体间距 */</span>
            <span class="token property">letter-spacing</span><span class="token punctuation">:</span> 10px<span class="token punctuation">;</span>
            <span class="token property">color</span><span class="token punctuation">:</span> <span class="token function">rgb</span><span class="token punctuation">(</span>60<span class="token punctuation">,</span>60<span class="token punctuation">,</span>70<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token property">transition</span><span class="token punctuation">:</span> .5s<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token comment">/* 设置动画 */</span>
        <span class="token selector">.a:hover .b</span><span class="token punctuation">{</span>
            <span class="token property">left</span><span class="token punctuation">:</span> -550px<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token selector">.a:hover .c</span><span class="token punctuation">{</span>
            <span class="token property">left</span><span class="token punctuation">:</span> -600px<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token selector">.a:hover .d</span><span class="token punctuation">{</span>
            <span class="token property">right</span><span class="token punctuation">:</span> -550px<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token selector">.a:hover .e</span><span class="token punctuation">{</span>
            <span class="token property">right</span><span class="token punctuation">:</span> -610px<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token selector">.a:hover .f</span><span class="token punctuation">{</span>
            <span class="token property">opacity</span><span class="token punctuation">:</span> 1<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    </span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>a<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>b<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>c<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>d<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>e<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>f<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>LONELY GOAT<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><h2 id="监听器" tabindex="-1"><a class="header-anchor" href="#监听器" aria-hidden="true">#</a> 监听器</h2><div class="language-html" data-ext="html"><pre class="language-html"><code> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span><span class="token punctuation">&gt;</span></span><span class="token style"><span class="token language-css">
        <span class="token selector">*</span><span class="token punctuation">{</span>
            <span class="token property">padding</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
            <span class="token property">margin</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token selector">body</span><span class="token punctuation">{</span>
            <span class="token property">display</span><span class="token punctuation">:</span> flex<span class="token punctuation">;</span>
            <span class="token property">justify-content</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>
            <span class="token property">overflow</span><span class="token punctuation">:</span> hidden<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token selector">.shell</span><span class="token punctuation">{</span>
            <span class="token property">width</span><span class="token punctuation">:</span> 100%<span class="token punctuation">;</span>
            <span class="token property">height</span><span class="token punctuation">:</span> 162px<span class="token punctuation">;</span>
            <span class="token property">display</span><span class="token punctuation">:</span> flex<span class="token punctuation">;</span>
            <span class="token property">justify-content</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    </span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>shell<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>video</span> <span class="token attr-name">loop</span> <span class="token attr-name">autoplay</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>81909048-c89a-4106-880c-175d52c70140.mp4<span class="token punctuation">&quot;</span></span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>video<span class="token punctuation">&quot;</span></span> 
        <span class="token special-attr"><span class="token attr-name">style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span><span class="token value css language-css"><span class="token property">height</span><span class="token punctuation">:</span> 100%<span class="token punctuation">;</span><span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">translate</span><span class="token punctuation">(</span>36px<span class="token punctuation">,</span>-8px<span class="token punctuation">)</span><span class="token punctuation">;</span></span><span class="token punctuation">&quot;</span></span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>video</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
        <span class="token keyword">const</span> shell <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">&quot;.shell&quot;</span><span class="token punctuation">)</span>
        <span class="token keyword">const</span> video <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">&quot;.video&quot;</span><span class="token punctuation">)</span>
        shell<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">&#39;mouseenter&#39;</span><span class="token punctuation">,</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">e</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            <span class="token keyword">this</span><span class="token punctuation">.</span>x<span class="token operator">=</span>e<span class="token punctuation">.</span>clientX
            video<span class="token punctuation">.</span>style<span class="token punctuation">.</span>transition <span class="token operator">=</span> <span class="token string">&#39;none&#39;</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span>
        shell<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">&#39;mousemove&#39;</span><span class="token punctuation">,</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">e</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            <span class="token keyword">this</span><span class="token punctuation">.</span>_x<span class="token operator">=</span>e<span class="token punctuation">.</span>clientX
            <span class="token keyword">const</span> disx <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>_x<span class="token operator">-</span><span class="token keyword">this</span><span class="token punctuation">.</span>x
            <span class="token keyword">const</span> move <span class="token operator">=</span> <span class="token number">36</span> <span class="token operator">-</span>disx<span class="token operator">/</span><span class="token operator">-</span><span class="token number">20</span>
            video<span class="token punctuation">.</span>style<span class="token punctuation">.</span>transform <span class="token operator">=</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">translate(</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>move<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">px,-8px)</span><span class="token template-punctuation string">\`</span></span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span>
        shell<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">&#39;mouseleave&#39;</span><span class="token punctuation">,</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">e</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            video<span class="token punctuation">.</span>style<span class="token punctuation">.</span>transition <span class="token operator">=</span> <span class="token number">.3</span> <span class="token operator">+</span><span class="token string">&#39;s&#39;</span>
            video<span class="token punctuation">.</span>style<span class="token punctuation">.</span>transform <span class="token operator">=</span> <span class="token string">&#39;translate(36px,-8px)&#39;</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span>
    </span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><h2 id="鼠标悬停分裂" tabindex="-1"><a class="header-anchor" href="#鼠标悬停分裂" aria-hidden="true">#</a> 鼠标悬停分裂</h2><div class="language-html" data-ext="html"><pre class="language-html"><code> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span><span class="token punctuation">&gt;</span></span><span class="token style"><span class="token language-css">
        <span class="token selector">body</span><span class="token punctuation">{</span>
            <span class="token property">background-color</span><span class="token punctuation">:</span> <span class="token function">rgb</span><span class="token punctuation">(</span>60<span class="token punctuation">,</span>60<span class="token punctuation">,</span>70<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token property">display</span><span class="token punctuation">:</span> flex<span class="token punctuation">;</span>
            <span class="token property">justify-content</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token selector">.a</span><span class="token punctuation">{</span>
            <span class="token property">position</span><span class="token punctuation">:</span> relative<span class="token punctuation">;</span>
            <span class="token property">top</span><span class="token punctuation">:</span> 250px<span class="token punctuation">;</span>
            <span class="token property">width</span><span class="token punctuation">:</span> 300px<span class="token punctuation">;</span>
            <span class="token property">display</span><span class="token punctuation">:</span> flex<span class="token punctuation">;</span>
            <span class="token property">justify-content</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>
            <span class="token property">margin</span><span class="token punctuation">:</span> 0 30px<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token selector">.c,.b</span><span class="token punctuation">{</span>
            <span class="token property">font</span><span class="token punctuation">:</span> 900 100px <span class="token string">&#39;&#39;</span><span class="token punctuation">;</span>
            <span class="token property">line-height</span><span class="token punctuation">:</span> 150px<span class="token punctuation">;</span>
            <span class="token property">position</span><span class="token punctuation">:</span> absolute<span class="token punctuation">;</span>
            <span class="token property">color</span><span class="token punctuation">:</span> brown<span class="token punctuation">;</span>
            <span class="token property">top</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
            <span class="token comment">/* 使文字上下移动时有0.4s的过渡效果 */</span>
            <span class="token property">transition</span><span class="token punctuation">:</span> .4s<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token selector">.c</span><span class="token punctuation">{</span>
            <span class="token comment">/* 裁剪文字的上半部分，括号里的四个值分别是
            top，right，bottom，left */</span>
            <span class="token property">clip-path</span><span class="token punctuation">:</span> <span class="token function">inset</span><span class="token punctuation">(</span>49% 0 0 0<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token selector">.b</span><span class="token punctuation">{</span>
            <span class="token comment">/* 裁剪文字的下半部分 */</span>
            <span class="token property">clip-path</span><span class="token punctuation">:</span> <span class="token function">inset</span><span class="token punctuation">(</span>1% 0 50% 0<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token selector">.a:hover .b,.a:hover .c</span><span class="token punctuation">{</span>
            <span class="token comment">/* 让--i为30的向上移动30px，-30的向下移动30px
            这样子就能空出60px留给中间的超链接 */</span>
            <span class="token property">top</span><span class="token punctuation">:</span> <span class="token function">calc</span><span class="token punctuation">(</span><span class="token function">var</span><span class="token punctuation">(</span>--i<span class="token punctuation">)</span>*1px<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token selector">.a:hover .d</span><span class="token punctuation">{</span>
            <span class="token property">opacity</span><span class="token punctuation">:</span> 1<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token selector">.d</span><span class="token punctuation">{</span>
            <span class="token property">text-decoration</span><span class="token punctuation">:</span> none<span class="token punctuation">;</span>
            <span class="token property">color</span><span class="token punctuation">:</span> cyan<span class="token punctuation">;</span>
            <span class="token property">font</span><span class="token punctuation">:</span> 600 30px <span class="token string">&#39;&#39;</span><span class="token punctuation">;</span>
            <span class="token property">line-height</span><span class="token punctuation">:</span> 150px<span class="token punctuation">;</span>
            <span class="token property">opacity</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
            <span class="token property">transition</span><span class="token punctuation">:</span> .3s<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    </span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>a<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>b<span class="token punctuation">&quot;</span></span> <span class="token special-attr"><span class="token attr-name">style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span><span class="token value css language-css"><span class="token property">--i</span><span class="token punctuation">:</span>-30</span><span class="token punctuation">&quot;</span></span></span><span class="token punctuation">&gt;</span></span>BALD<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>c<span class="token punctuation">&quot;</span></span> <span class="token special-attr"><span class="token attr-name">style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span><span class="token value css language-css"><span class="token property">--i</span><span class="token punctuation">:</span>30</span><span class="token punctuation">&quot;</span></span></span><span class="token punctuation">&gt;</span></span>BALD<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>#<span class="token punctuation">&quot;</span></span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>d<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>点赞/Fabulous<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>a<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>b<span class="token punctuation">&quot;</span></span> <span class="token special-attr"><span class="token attr-name">style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span><span class="token value css language-css"><span class="token property">--i</span><span class="token punctuation">:</span>-30</span><span class="token punctuation">&quot;</span></span></span><span class="token punctuation">&gt;</span></span>CHEN<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>c<span class="token punctuation">&quot;</span></span> <span class="token special-attr"><span class="token attr-name">style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span><span class="token value css language-css"><span class="token property">--i</span><span class="token punctuation">:</span>30</span><span class="token punctuation">&quot;</span></span></span><span class="token punctuation">&gt;</span></span>CHEN<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>#<span class="token punctuation">&quot;</span></span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>d<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>关注/follow<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>a<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>b<span class="token punctuation">&quot;</span></span> <span class="token special-attr"><span class="token attr-name">style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span><span class="token value css language-css"><span class="token property">--i</span><span class="token punctuation">:</span>-30</span><span class="token punctuation">&quot;</span></span></span><span class="token punctuation">&gt;</span></span>GOAT<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>c<span class="token punctuation">&quot;</span></span> <span class="token special-attr"><span class="token attr-name">style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span><span class="token value css language-css"><span class="token property">--i</span><span class="token punctuation">:</span>30</span><span class="token punctuation">&quot;</span></span></span><span class="token punctuation">&gt;</span></span>GOAT<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>#<span class="token punctuation">&quot;</span></span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>d<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>收藏/Collection<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">&gt;</span></span>
</code></pre></div>`,8),c=[o];function e(u,l){return s(),a("div",null,c)}const i=n(p,[["render",e],["__file","demoa.html.vue"]]);export{i as default};
