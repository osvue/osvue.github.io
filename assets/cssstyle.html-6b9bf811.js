import{_ as p,M as o,p as c,q as e,R as n,t as s,N as l,a1 as a}from"./framework-d81ad7e5.js";const u={},k=a('<h2 id="弧度-圆角" tabindex="-1"><a class="header-anchor" href="#弧度-圆角" aria-hidden="true">#</a> 弧度 圆角</h2><h5 id="语法" tabindex="-1"><a class="header-anchor" href="#语法" aria-hidden="true">#</a> 语法</h5><p><code>border-radius: 1-4 length|% / 1-4 length|%;</code></p><ul><li>注意: 每个半径的四个值的顺序是：左上角，右上角，右下角，左下角。如果省略左下角，右上角是相同的。如果省略右下角，左上角是相同的。如果省略右上角，左上角是相同的。</li></ul><h4 id="border-radius使用" tabindex="-1"><a class="header-anchor" href="#border-radius使用" aria-hidden="true">#</a> border-radius使用</h4><p>border-radius的数值有三种表示方法：<code>px、%、em</code>，对于<code>border-radius</code>的值的设置，我们常用的有三种写法：</p><ul><li>仅设置一个值</li></ul><ul><li>设置四个方向的值 <code>border-radius</code>属性其实是<code>border-top-left-radius、border-top-right-radius、border-bottom-right-radius、border-bottom-left-radius</code>四个属性的简写模式，因此，<code>border-radius : 30px;</code>，其实等价于<code>border-radius : 30px 30px 30px 30px;</code></li></ul><ol><li>使用px表示数值的情况 在使用px来表示圆角值的时候，圆角的弧度一般都是一个圆形的部分弧形，具体呈现的显示效果我是按如下方法与预估和理解的： 假设一个长200px，高150px的div对象，设置它的<strong>border-radius的值为30px</strong>，那么实际呈现的圆角，其实就是一个<strong>以30px为半径的圆顶格放置在四个边角</strong>后所呈现的弧度</li></ol><h2 id="阴影" tabindex="-1"><a class="header-anchor" href="#阴影" aria-hidden="true">#</a> 阴影</h2>',10),i={href:"https://codersblock.com/blog/creating-glow-effects-with-css/",target:"_blank",rel:"noopener noreferrer"},r=a(`<div class="language-css" data-ext="css"><pre class="language-css"><code><span class="token selector">div</span> <span class="token punctuation">{</span>
    <span class="token property">box-shadow</span><span class="token punctuation">:</span> h-shadow v-shadow blur spread color inset<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token comment">/* 注释：box-shadow 向框添加一个或多个阴影。该属性是由逗号分隔的阴影列表，
每个阴影由 2-4 个长度值、可选的颜色值以及可选的 inset 关键词来规定。
省略长度的值是 0。 */</span>
</code></pre></div><table><thead><tr><th>值</th><th>描述</th><th></th></tr></thead><tbody><tr><td><em>h-shadow</em></td><td>必需。水平阴影的位置。允许负值。</td><td></td></tr><tr><td><em>v-shadow</em></td><td>必需。垂直阴影的位置。允许负值。</td><td></td></tr><tr><td><em>blur</em></td><td>可选。模糊距离。</td><td></td></tr><tr><td><em>spread</em></td><td>可选。阴影的尺寸。</td><td></td></tr><tr><td><em>color</em></td><td>可选。阴影的颜色。请参阅 CSS 颜色值。</td><td></td></tr><tr><td>inset</td><td>可选。将外部阴影 (outset) 改为内部阴影。</td><td></td></tr></tbody></table><div class="language-html" data-ext="html"><pre class="language-html"><code><span class="token doctype"><span class="token punctuation">&lt;!</span><span class="token doctype-tag">DOCTYPE</span> <span class="token name">html</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span><span class="token punctuation">&gt;</span></span><span class="token style"><span class="token language-css"> 
<span class="token selector">div</span>
<span class="token punctuation">{</span>
<span class="token property">width</span><span class="token punctuation">:</span>300px<span class="token punctuation">;</span>
<span class="token property">height</span><span class="token punctuation">:</span>100px<span class="token punctuation">;</span>
<span class="token property">background-color</span><span class="token punctuation">:</span>#ff9900<span class="token punctuation">;</span>
 <span class="token property">box-shadow</span><span class="token punctuation">:</span>  5px  5px 5px    #888888<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>html</span><span class="token punctuation">&gt;</span></span>

</code></pre></div><h2 id="转义符-pre-line" tabindex="-1"><a class="header-anchor" href="#转义符-pre-line" aria-hidden="true">#</a> 转义符 pre-line</h2><ul><li>html 识别不了<code> ‘\\n’，</code>只要在结果所在的标签设置css样式：</li></ul><p><code>white-space: pre-line;</code></p><p>然后页面就能成功识别 <code>‘\\n’ </code>并整齐的显示结果了。</p><h4 id="css-white-space-属性" tabindex="-1"><a class="header-anchor" href="#css-white-space-属性" aria-hidden="true">#</a> CSS white-space 属性</h4><p>定义和用法 white-space 属性设置如何处理元素内的空白。 这个属性声明建立布局过程中如何处理元素中的空白符。值 pre-wrap 和 pre-line 是 CSS 2.1 中新增的。</p><h2 id="让一个div-充满整个屏幕的方法" tabindex="-1"><a class="header-anchor" href="#让一个div-充满整个屏幕的方法" aria-hidden="true">#</a> 让一个div 充满整个屏幕的方法</h2><div class="language-css" data-ext="css"><pre class="language-css"><code><span class="token selector">div</span><span class="token punctuation">{</span>
<span class="token property">position</span><span class="token punctuation">:</span>absolute<span class="token punctuation">;</span>
            <span class="token property">top</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
            <span class="token property">bottom</span><span class="token punctuation">:</span>0<span class="token punctuation">;</span>
            <span class="token property">left</span><span class="token punctuation">:</span>0<span class="token punctuation">;</span>
            <span class="token property">right</span><span class="token punctuation">:</span>0<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><h2 id="隐藏div" tabindex="-1"><a class="header-anchor" href="#隐藏div" aria-hidden="true">#</a> 隐藏div</h2><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code>
<span class="token function">$</span><span class="token punctuation">(</span><span class="token string">&#39;.news&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">hide</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// &lt;!-- 要么 --&gt;</span>

<span class="token function">$</span><span class="token punctuation">(</span><span class="token string">&#39;.news&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">css</span><span class="token punctuation">(</span><span class="token string">&#39;display&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;none&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// &lt;!-- 并显示div： --&gt;</span>

<span class="token function">$</span><span class="token punctuation">(</span><span class="token string">&#39;.news&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">show</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// &lt;!-- 要么 --&gt;</span>

<span class="token function">$</span><span class="token punctuation">(</span><span class="token string">&#39;.news&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">css</span><span class="token punctuation">(</span><span class="token string">&#39;display&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;block&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><h2 id="渐变" tabindex="-1"><a class="header-anchor" href="#渐变" aria-hidden="true">#</a> 渐变</h2><p>linear-gradient() (线性渐变)　　repeating-linear-gradient() (重复的线性渐变)</p><p>radial-gradient() (镜像渐变)　　repeating-radial-gradient() (重复的镜像渐变)</p><p>设置渐变色。</p><p>这四个属性， 都可以作为背景图片的url 放入使用。例如 border-image: linear-gradient(); 和 background-image: linear-gradient();</p><p>linear-gradient() (线性渐变)</p><p>参数：</p><p>linear-gradient(#fff, #333); 第一个值 设置 从什么颜色 渐变到 第二个值的颜色。</p><p>linear-gradient(to bottom, #fff, #333); 第一个值是 从上渐变到 下。</p><p>linear-gradient(to top, #333, #fff);　　 第一个值是 从下渐变到 上。</p><p>linear-gradient(180deg, #fff, #333);　　第一个值 是角度的意思。 也就是从上渐变到下，一个圆是 360deg。</p><p>linear-gradient(to bottom, #fff 0px, #333 100px); 第二个值的 0px 和 第三个值的 100px 是， 从 第二个值的颜色，0px位置开始， 渐变到 第三个值的 100px位置停止。具体是怎么样的，看下面图解。 也可以填 %。</p><div class="language-html" data-ext="html"><pre class="language-html"><code><span class="token doctype"><span class="token punctuation">&lt;!</span><span class="token doctype-tag">DOCTYPE</span> <span class="token name">html</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>en<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">charset</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>UTF-8<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">http-equiv</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>X-UA-Compatible<span class="token punctuation">&quot;</span></span> <span class="token attr-name">content</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>IE=edge<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>viewport<span class="token punctuation">&quot;</span></span> <span class="token attr-name">content</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>width=device-width, initial-scale=1.0<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>title</span><span class="token punctuation">&gt;</span></span>Document<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>title</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span><span class="token punctuation">&gt;</span></span><span class="token style"><span class="token language-css">
    <span class="token selector">*</span> <span class="token punctuation">{</span>
        <span class="token property">margin</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
        <span class="token property">padding</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token selector">body,
    html</span> <span class="token punctuation">{</span>
        <span class="token comment">/* 铺满屏幕 */</span>
        <span class="token property">height</span><span class="token punctuation">:</span> 100%<span class="token punctuation">;</span>
        <span class="token property">box-sizing</span><span class="token punctuation">:</span> border-box<span class="token punctuation">;</span>
        <span class="token property">overflow</span><span class="token punctuation">:</span> hidden<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token selector">.app</span> <span class="token punctuation">{</span>

        <span class="token property">height</span><span class="token punctuation">:</span> 100%<span class="token punctuation">;</span>
        <span class="token property">width</span><span class="token punctuation">:</span> 100%<span class="token punctuation">;</span>
        <span class="token property">min-width</span><span class="token punctuation">:</span> 1200px<span class="token punctuation">;</span>
<span class="token comment">/* 透明 */</span>
        <span class="token property">background-color</span><span class="token punctuation">:</span> <span class="token function">rgba</span><span class="token punctuation">(</span>70<span class="token punctuation">,</span> 36<span class="token punctuation">,</span> 36<span class="token punctuation">,</span> 0.5<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token selector">.logo</span> <span class="token punctuation">{</span>

        <span class="token property">display</span><span class="token punctuation">:</span> flex<span class="token punctuation">;</span>
<span class="token comment">/* 上下左右居中 */</span>
        <span class="token property">justify-content</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>
        <span class="token property">align-items</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>
<span class="token comment">/* 充满dom */</span>
        <span class="token property">height</span><span class="token punctuation">:</span> 100%<span class="token punctuation">;</span>
        <span class="token property">min-width</span><span class="token punctuation">:</span> 1000px<span class="token punctuation">;</span>
        <span class="token property">background</span><span class="token punctuation">:</span> <span class="token url"><span class="token function">url</span><span class="token punctuation">(</span>./11.jpeg<span class="token punctuation">)</span></span> no-repeat<span class="token punctuation">;</span>
        <span class="token property">background-size</span><span class="token punctuation">:</span> 100% 100%<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token selector">.lg</span> <span class="token punctuation">{</span>
        <span class="token property">width</span><span class="token punctuation">:</span> 532px<span class="token punctuation">;</span>
        <span class="token property">height</span><span class="token punctuation">:</span> 400px<span class="token punctuation">;</span>
        <span class="token property">border</span><span class="token punctuation">:</span> solid 2px black<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token selector">.lg:hover</span> <span class="token punctuation">{</span>
        <span class="token property">opacity</span><span class="token punctuation">:</span> 0.98<span class="token punctuation">;</span>
        <span class="token property">background-color</span><span class="token punctuation">:</span> <span class="token function">rgba</span><span class="token punctuation">(</span>88<span class="token punctuation">,</span> 173<span class="token punctuation">,</span> 173<span class="token punctuation">,</span> 0.8<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token property">border</span><span class="token punctuation">:</span> none<span class="token punctuation">;</span>
        <span class="token property">transition</span><span class="token punctuation">:</span> all 0.5s ease-in<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>


    <span class="token selector">.logo</span> <span class="token punctuation">{</span>
        <span class="token property">width</span><span class="token punctuation">:</span> 50%<span class="token punctuation">;</span>
        <span class="token property">height</span><span class="token punctuation">:</span> 50%<span class="token punctuation">;</span>
        <span class="token property">background-color</span><span class="token punctuation">:</span> #d4c8c8<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token selector">.lg</span> <span class="token punctuation">{</span>
        <span class="token property">width</span><span class="token punctuation">:</span> 50%<span class="token punctuation">;</span>
        <span class="token property">height</span><span class="token punctuation">:</span> 50%<span class="token punctuation">;</span>
        <span class="token property">background-color</span><span class="token punctuation">:</span> #46909293<span class="token punctuation">;</span>

        <span class="token property">display</span><span class="token punctuation">:</span> grid<span class="token punctuation">;</span>
        <span class="token property">grid-template-columns</span><span class="token punctuation">:</span> <span class="token function">repeat</span><span class="token punctuation">(</span>3<span class="token punctuation">,</span> 1fr<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token property">grid-template-rows</span><span class="token punctuation">:</span> <span class="token function">repeat</span><span class="token punctuation">(</span>3<span class="token punctuation">,</span> 1fr<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>


    <span class="token selector">.hl</span> <span class="token punctuation">{</span>
        <span class="token property">position</span><span class="token punctuation">:</span> relative<span class="token punctuation">;</span>
        <span class="token property">left</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
        <span class="token property">right</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
        <span class="token property">top</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
        <span class="token property">bottom</span><span class="token punctuation">:</span> 0px<span class="token punctuation">;</span>

    <span class="token punctuation">}</span>

    <span class="token selector">ul&gt;li</span> <span class="token punctuation">{</span>
        <span class="token property">display</span><span class="token punctuation">:</span> inline-block<span class="token punctuation">;</span>
        <span class="token property">padding</span><span class="token punctuation">:</span> 20px<span class="token punctuation">;</span>
        <span class="token property">border</span><span class="token punctuation">:</span> 1px double #f6f6f6<span class="token punctuation">;</span>

    <span class="token punctuation">}</span>

    <span class="token selector">ul&gt;li:hover</span> <span class="token punctuation">{</span>
        <span class="token comment">/* 渐变 */</span>
        <span class="token property">transition</span><span class="token punctuation">:</span> all 5s ease-in-out<span class="token punctuation">;</span>
        <span class="token comment">/* background-image: linear-gradient(#e66465, #9198e5); */</span>
        <span class="token property">color</span><span class="token punctuation">:</span> white<span class="token punctuation">;</span>
        <span class="token property">font-weight</span><span class="token punctuation">:</span> bold<span class="token punctuation">;</span>

        <span class="token property">padding</span><span class="token punctuation">:</span> 500px<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>


    <span class="token selector">.dga</span> <span class="token punctuation">{</span>
        <span class="token property">grid-column</span><span class="token punctuation">:</span> 1/span 3<span class="token punctuation">;</span>
        <span class="token property">background-color</span><span class="token punctuation">:</span> <span class="token function">rgb</span><span class="token punctuation">(</span>189<span class="token punctuation">,</span> 101<span class="token punctuation">,</span> 101<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>


    <span class="token selector">.dgb</span> <span class="token punctuation">{</span>
        <span class="token property">grid-row</span><span class="token punctuation">:</span> 2/span 2<span class="token punctuation">;</span>
        <span class="token property">background-color</span><span class="token punctuation">:</span> #f8fffa<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token selector">.dgc</span> <span class="token punctuation">{</span>
        <span class="token property">grid-row</span><span class="token punctuation">:</span> 2/ span 2<span class="token punctuation">;</span>
        <span class="token property">background-color</span><span class="token punctuation">:</span> #ccffcc<span class="token punctuation">;</span>
        <span class="token property">grid-column</span><span class="token punctuation">:</span> 2 / span 2<span class="token punctuation">;</span>
        
        <span class="token property">overflow</span><span class="token punctuation">:</span> auto<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token selector">.sgcc</span> <span class="token punctuation">{</span>

        <span class="token property">display</span><span class="token punctuation">:</span> flex<span class="token punctuation">;</span>
        <span class="token property">flex-wrap</span><span class="token punctuation">:</span> wrap<span class="token punctuation">;</span>

        <span class="token property">flex-direction</span><span class="token punctuation">:</span> column<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token selector">.sgcc&gt;li</span> <span class="token punctuation">{</span>
        <span class="token property">flex</span><span class="token punctuation">:</span> 20%<span class="token punctuation">;</span>

    <span class="token punctuation">}</span>

    <span class="token selector">.sgcc&gt;li:hover</span> <span class="token punctuation">{</span>
        <span class="token property">background-color</span><span class="token punctuation">:</span> #966b6b<span class="token punctuation">;</span>
        <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">scale</span><span class="token punctuation">(</span>0.98<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">&gt;</span></span>


    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>app<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>logo<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>lg<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>dga<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>1<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>dgb<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>2<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>dgc<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
                    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ul</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>sgcc<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
                        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">&gt;</span></span>1<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">&gt;</span></span>
                        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">&gt;</span></span>2<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">&gt;</span></span>
                        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">&gt;</span></span>3<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">&gt;</span></span>
                        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">&gt;</span></span>4<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">&gt;</span></span>
                        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">&gt;</span></span>5<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">&gt;</span></span>
                        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">&gt;</span></span>6<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">&gt;</span></span>
                        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">&gt;</span></span>7<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">&gt;</span></span>
                        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">&gt;</span></span>8<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">&gt;</span></span>
                        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">&gt;</span></span>9<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">&gt;</span></span>
                        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">&gt;</span></span>10<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">&gt;</span></span>
                        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">&gt;</span></span>11<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">&gt;</span></span>
                        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">&gt;</span></span>12<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">&gt;</span></span>
                        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">&gt;</span></span>13<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">&gt;</span></span>
                        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">&gt;</span></span>14<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">&gt;</span></span>
                        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">&gt;</span></span>15<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">&gt;</span></span>
                        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">&gt;</span></span>16<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">&gt;</span></span>
                        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">&gt;</span></span>17<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">&gt;</span></span>
                        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">&gt;</span></span>18<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">&gt;</span></span>
                        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">&gt;</span></span>19<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">&gt;</span></span>
                        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">&gt;</span></span>20<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">&gt;</span></span>
                    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ul</span><span class="token punctuation">&gt;</span></span>
                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>hl<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ul</span><span class="token punctuation">&gt;</span></span>
                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">&gt;</span></span>1<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">&gt;</span></span>
                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">&gt;</span></span>2<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">&gt;</span></span>
                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">&gt;</span></span>3<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">&gt;</span></span>
                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">&gt;</span></span>4<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">&gt;</span></span>
                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">&gt;</span></span>5<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ul</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>


<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>html</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><h2 id="透明" tabindex="-1"><a class="header-anchor" href="#透明" aria-hidden="true">#</a> 透明</h2><div class="language-css" data-ext="css"><pre class="language-css"><code>
<span class="token property">background-color</span><span class="token punctuation">:</span> <span class="token function">rgba</span><span class="token punctuation">(</span>70<span class="token punctuation">,</span> 36<span class="token punctuation">,</span> 36<span class="token punctuation">,</span> 0.5<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><h2 id="元素被撑开" tabindex="-1"><a class="header-anchor" href="#元素被撑开" aria-hidden="true">#</a> 元素被撑开</h2><ul><li>响应式布局中，div 被内容撑开的解决方法</li></ul><h3 id="子绝父相" tabindex="-1"><a class="header-anchor" href="#子绝父相" aria-hidden="true">#</a> 子绝父相</h3><div class="language-css" data-ext="css"><pre class="language-css"><code><span class="token selector">.clbf</span> <span class="token punctuation">{</span>
	<span class="token property">position</span><span class="token punctuation">:</span> relative<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.aaac</span><span class="token punctuation">{</span>
	<span class="token property">position</span><span class="token punctuation">:</span> absolute<span class="token punctuation">;</span>
	<span class="token property">top</span><span class="token punctuation">:</span> 10px<span class="token punctuation">;</span>
	<span class="token property">left</span><span class="token punctuation">:</span> 10px<span class="token punctuation">;</span>
	<span class="token property">bottom</span><span class="token punctuation">:</span> 10px<span class="token punctuation">;</span>

	<span class="token property">overflow-y</span><span class="token punctuation">:</span> scroll<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><div class="language-html" data-ext="html"><pre class="language-html"><code> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>fedin fib<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span> 
    <span class="token comment">&lt;!-- flex 布局 --&gt;</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>fedileft<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>处理办法:<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>fediright clbf bbbc<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
        <span class="token comment">&lt;!-- 使用 子绝父相 来解决 --&gt;</span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span>   <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>span_font aaac<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token comment">&lt;!-- 内容填充 --&gt;</span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>

</code></pre></div><h3 id="最佳css定义换行代码" tabindex="-1"><a class="header-anchor" href="#最佳css定义换行代码" aria-hidden="true">#</a> 最佳CSS定义换行代码</h3><div class="language-css" data-ext="css"><pre class="language-css"><code><span class="token selector">.wrap</span> <span class="token punctuation">{</span> <span class="token property">table-layout</span><span class="token punctuation">:</span>fixed<span class="token punctuation">;</span> <span class="token property">word-break</span><span class="token punctuation">:</span>break-all<span class="token punctuation">;</span> <span class="token property">overflow</span><span class="token punctuation">:</span>hidden<span class="token punctuation">;</span> <span class="token punctuation">}</span>
</code></pre></div>`,35);function g(d,h){const t=o("ExternalLinkIcon");return c(),e("div",null,[k,n("ul",null,[n("li",null,[n("a",i,[s("演示样例"),l(t)]),s(" 语法")])]),r])}const y=p(u,[["render",g],["__file","cssstyle.html.vue"]]);export{y as default};
