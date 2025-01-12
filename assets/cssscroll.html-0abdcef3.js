import{_ as n,p as s,q as a,a1 as t}from"./framework-d81ad7e5.js";const p="/img/csssc.png",o={},c=t(`<details class="custom-container details"><p>/* 常用样式 for scrollbar */ <br></p><div class="language-css" data-ext="css"><pre class="language-css"><code>    <span class="token selector">::-webkit-scrollbar-track-piece</span> <span class="token punctuation">{</span>
        <span class="token property">background-color</span><span class="token punctuation">:</span> #f8f8f8<span class="token punctuation">;</span>
        <span class="token property">border-radius</span><span class="token punctuation">:</span> 10px<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token selector">::-webkit-scrollbar</span> <span class="token punctuation">{</span>
        <span class="token property">width</span><span class="token punctuation">:</span> 9px<span class="token punctuation">;</span>
        <span class="token property">height</span><span class="token punctuation">:</span> 9px<span class="token punctuation">;</span>
        <span class="token property">border-radius</span><span class="token punctuation">:</span> 10px<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token selector">::-webkit-scrollbar-thumb</span> <span class="token punctuation">{</span>
        <span class="token property">background-color</span><span class="token punctuation">:</span> #916666<span class="token punctuation">;</span>
        <span class="token property">background-clip</span><span class="token punctuation">:</span> padding-box<span class="token punctuation">;</span>
        <span class="token property">min-height</span><span class="token punctuation">:</span> 28px<span class="token punctuation">;</span>
        <span class="token property">border-radius</span><span class="token punctuation">:</span> 10px<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token selector">::-webkit-scrollbar-thumb:hover</span> <span class="token punctuation">{</span>
        <span class="token property">background-color</span><span class="token punctuation">:</span> #bbb<span class="token punctuation">;</span>
        <span class="token property">border-radius</span><span class="token punctuation">:</span> 10px<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
</code></pre></div></details><h2 id="webkit下面的css设置滚动条" tabindex="-1"><a class="header-anchor" href="#webkit下面的css设置滚动条" aria-hidden="true">#</a> webkit下面的CSS设置滚动条</h2><ul><li><ul><li>主要有下面7个属性</li></ul></li></ul><ul><li><ul><li>::-webkit-scrollbar 滚动条整体部分，可以设置宽度啥的</li></ul></li><li><ul><li>::-webkit-scrollbar-button 滚动条两端的按钮</li></ul></li><li><ul><li>::-webkit-scrollbar-track 外层轨道</li></ul></li><li><ul><li>::-webkit-scrollbar-track-piece 内层滚动槽</li></ul></li><li><ul><li>::-webkit-scrollbar-thumb 滚动的滑块</li></ul></li><li><ul><li>::-webkit-scrollbar-corner 边角</li></ul></li><li><ul><li>::-webkit-resizer 定义右下角拖动块的样式</li></ul></li></ul><p><img src="`+p+`" alt="avatar"></p><ul><li>上面是滚动条的主要几个设置属性，还有更详尽的CSS属性</li><li></li><li>:horizontal 水平方向的滚动条</li><li></li><li>:vertical 垂直 方向的滚动条</li><li></li><li>:decrement 应用于按钮和内层轨道(track piece)。它用来指示按钮或者内层轨道是否会减小视窗的位置(比如，垂直滚动条的上面，水平滚动条的左边。)</li><li></li><li>:increment decrement类似，用来指示按钮或内层轨道是否会增大视窗的位置(比如，垂直滚动条的下面和水平滚动条的右边。)</li><li></li><li>:start 伪类也应用于按钮和滑块。它用来定义对象是否放到滑块的前面。</li><li></li><li>:end 类似于start伪类，标识对象是否放到滑块的后面。</li><li></li><li>:double-button 该伪类以用于按钮和内层轨道。用于判断一个按钮是不是放在滚动条同一端的一对按钮中的一个。对于内层轨道来说，它表示内层轨道是否紧靠一对按钮。</li><li></li><li>:single-button 类似于double-button伪类。对按钮来说，它用于判断一个按钮是否自己独立的在滚动条的一段。对内层轨道来说，它表示内层轨道是否紧靠一个single-button。</li><li></li><li>:no-button 用于内层轨道，表示内层轨道是否要滚动到滚动条的终端，比如，滚动条两端没有按钮的时候。</li><li></li><li>:corner-present 用于所有滚动条轨道，指示滚动条圆角是否显示。</li><li></li><li>:window-inactive 用于所有的滚动条轨道，指示应用滚动条的某个页面容器(元素)是否当前被激活。(在webkit最近的版本中，该伪类也可以用于::selection伪元素。webkit团队有计划扩展它并推动成为一个标准的伪类)</li></ul><h2 id="demo1" tabindex="-1"><a class="header-anchor" href="#demo1" aria-hidden="true">#</a> demo1</h2><div class="language-html" data-ext="html"><pre class="language-html"><code>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span><span class="token punctuation">&gt;</span></span><span class="token style"><span class="token language-css">
    <span class="token selector">.test</span> <span class="token punctuation">{</span>
        <span class="token property">width</span><span class="token punctuation">:</span> 1000px<span class="token punctuation">;</span>
        <span class="token property">height</span><span class="token punctuation">:</span> 200px<span class="token punctuation">;</span>
        <span class="token comment">/* overflow-y: auto;
         */</span>
        <span class="token property">overflow-y</span><span class="token punctuation">:</span> hidden<span class="token punctuation">;</span>
        <span class="token property">overflow-x</span><span class="token punctuation">:</span> scroll<span class="token punctuation">;</span>
        <span class="token property">float</span><span class="token punctuation">:</span> left<span class="token punctuation">;</span>
        <span class="token property">margin</span><span class="token punctuation">:</span> 5px<span class="token punctuation">;</span>
        <span class="token property">border</span><span class="token punctuation">:</span> 1px solid black<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token selector">.scrollbar</span> <span class="token punctuation">{</span>
        <span class="token property">width</span><span class="token punctuation">:</span> 30px<span class="token punctuation">;</span>
        <span class="token property">height</span><span class="token punctuation">:</span> 300px<span class="token punctuation">;</span>
        <span class="token property">margin</span><span class="token punctuation">:</span> 0 auto<span class="token punctuation">;</span>
        <span class="token comment">/* 重要的属性, 不换行 */</span>
        <span class="token property">white-space</span><span class="token punctuation">:</span> nowrap
    <span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>test test-1<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>scrollbar<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
        最纯粹的一个 css 横向 滑动 , 使用 norap 属性来设置了不换行, 从而显示了 css 样式 默认的 最纯粹的一个 css 横向 滑动 , 使用 norap 属性来设置了不换行, 从而显示了 css 样式
        默认的 最纯粹的一个 css 横向 滑动 , 使用 norap 属性来设置了不换行, 从而显示了 css 样式 默认的
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><ul><li>CSS也很简单，例：</li></ul><div class="language-css" data-ext="css"><pre class="language-css"><code>

<span class="token comment">/* 设置滚动条的样式 */</span>
<span class="token selector">::-webkit-scrollbar</span> <span class="token punctuation">{</span>
<span class="token property">width</span><span class="token punctuation">:</span>12px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token comment">/* 滚动槽 */</span>
<span class="token selector">::-webkit-scrollbar-track</span> <span class="token punctuation">{</span>
<span class="token property">-webkit-box-shadow</span><span class="token punctuation">:</span><span class="token function">inset006pxrgba</span><span class="token punctuation">(</span>0<span class="token punctuation">,</span>0<span class="token punctuation">,</span>0<span class="token punctuation">,</span>0.3<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token property">border-radius</span><span class="token punctuation">:</span>10px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token comment">/* 滚动条滑块 */</span>
<span class="token selector">::-webkit-scrollbar-thumb</span> <span class="token punctuation">{</span>
<span class="token property">border-radius</span><span class="token punctuation">:</span>10px<span class="token punctuation">;</span>
<span class="token property">background</span><span class="token punctuation">:</span><span class="token function">rgba</span><span class="token punctuation">(</span>0<span class="token punctuation">,</span>0<span class="token punctuation">,</span>0<span class="token punctuation">,</span>0.1<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token property">-webkit-box-shadow</span><span class="token punctuation">:</span><span class="token function">inset006pxrgba</span><span class="token punctuation">(</span>0<span class="token punctuation">,</span>0<span class="token punctuation">,</span>0<span class="token punctuation">,</span>0.5<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">::-webkit-scrollbar-thumb:window-inactive</span> <span class="token punctuation">{</span>
<span class="token property">background</span><span class="token punctuation">:</span><span class="token function">rgba</span><span class="token punctuation">(</span>255<span class="token punctuation">,</span>0<span class="token punctuation">,</span>0<span class="token punctuation">,</span>0.4<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><h2 id="demo2" tabindex="-1"><a class="header-anchor" href="#demo2" aria-hidden="true">#</a> demo2</h2><div class="language-html" data-ext="html"><pre class="language-html"><code><span class="token doctype"><span class="token punctuation">&lt;!</span><span class="token doctype-tag">doctype</span> <span class="token name">html</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>en<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">charset</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>UTF-8<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>title</span><span class="token punctuation">&gt;</span></span>CSS3自定义滚动条<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>title</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span><span class="token punctuation">&gt;</span></span><span class="token style"><span class="token language-css">
        <span class="token selector">header</span> <span class="token punctuation">{</span>
            <span class="token property">font-family</span><span class="token punctuation">:</span> <span class="token string">&#39;Lobster&#39;</span><span class="token punctuation">,</span> cursive<span class="token punctuation">;</span>
            <span class="token property">text-align</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>
            <span class="token property">font-size</span><span class="token punctuation">:</span> 25px<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token selector">#info</span> <span class="token punctuation">{</span>
            <span class="token property">font-size</span><span class="token punctuation">:</span> 18px<span class="token punctuation">;</span>
            <span class="token property">color</span><span class="token punctuation">:</span> #555<span class="token punctuation">;</span>
            <span class="token property">text-align</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>
            <span class="token property">margin-bottom</span><span class="token punctuation">:</span> 25px<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token selector">a</span> <span class="token punctuation">{</span>
            <span class="token property">color</span><span class="token punctuation">:</span> #074E8C<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token selector">.scrollbar</span> <span class="token punctuation">{</span>
            <span class="token property">margin-left</span><span class="token punctuation">:</span> 30px<span class="token punctuation">;</span>
            <span class="token property">float</span><span class="token punctuation">:</span> left<span class="token punctuation">;</span>
            <span class="token property">height</span><span class="token punctuation">:</span> 300px<span class="token punctuation">;</span>
            <span class="token property">width</span><span class="token punctuation">:</span> 65px<span class="token punctuation">;</span>
            <span class="token property">background</span><span class="token punctuation">:</span> #F5F5F5<span class="token punctuation">;</span>
            <span class="token property">overflow-y</span><span class="token punctuation">:</span> scroll<span class="token punctuation">;</span>
            <span class="token property">margin-bottom</span><span class="token punctuation">:</span> 25px<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token selector">.force-overflow</span> <span class="token punctuation">{</span>
            <span class="token property">min-height</span><span class="token punctuation">:</span> 450px<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token selector">#wrapper</span> <span class="token punctuation">{</span>
            <span class="token property">text-align</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>
            <span class="token property">width</span><span class="token punctuation">:</span> 500px<span class="token punctuation">;</span>
            <span class="token property">margin</span><span class="token punctuation">:</span> auto<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token comment">/*
 *  STYLE 1
 */</span>

        <span class="token selector">#style-1::-webkit-scrollbar-track</span> <span class="token punctuation">{</span>
            <span class="token property">-webkit-box-shadow</span><span class="token punctuation">:</span> inset 0 0 6px <span class="token function">rgba</span><span class="token punctuation">(</span>0<span class="token punctuation">,</span> 0<span class="token punctuation">,</span> 0<span class="token punctuation">,</span> 0.3<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token property">border-radius</span><span class="token punctuation">:</span> 10px<span class="token punctuation">;</span>
            <span class="token property">background-color</span><span class="token punctuation">:</span> #F5F5F5<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token selector">#style-1::-webkit-scrollbar</span> <span class="token punctuation">{</span>
            <span class="token property">width</span><span class="token punctuation">:</span> 12px<span class="token punctuation">;</span>
            <span class="token property">background-color</span><span class="token punctuation">:</span> #F5F5F5<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token selector">#style-1::-webkit-scrollbar-thumb</span> <span class="token punctuation">{</span>
            <span class="token property">border-radius</span><span class="token punctuation">:</span> 10px<span class="token punctuation">;</span>
            <span class="token property">-webkit-box-shadow</span><span class="token punctuation">:</span> inset 0 0 6px <span class="token function">rgba</span><span class="token punctuation">(</span>0<span class="token punctuation">,</span> 0<span class="token punctuation">,</span> 0<span class="token punctuation">,</span> .3<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token property">background-color</span><span class="token punctuation">:</span> #555<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token comment">/*
 *  STYLE 2
 */</span>

        <span class="token selector">#style-2::-webkit-scrollbar-track</span> <span class="token punctuation">{</span>
            <span class="token property">-webkit-box-shadow</span><span class="token punctuation">:</span> inset 0 0 6px <span class="token function">rgba</span><span class="token punctuation">(</span>0<span class="token punctuation">,</span> 0<span class="token punctuation">,</span> 0<span class="token punctuation">,</span> 0.3<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token property">border-radius</span><span class="token punctuation">:</span> 10px<span class="token punctuation">;</span>
            <span class="token property">background-color</span><span class="token punctuation">:</span> #F5F5F5<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token selector">#style-2::-webkit-scrollbar</span> <span class="token punctuation">{</span>
            <span class="token property">width</span><span class="token punctuation">:</span> 12px<span class="token punctuation">;</span>
            <span class="token property">background-color</span><span class="token punctuation">:</span> #F5F5F5<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token selector">#style-2::-webkit-scrollbar-thumb</span> <span class="token punctuation">{</span>
            <span class="token property">border-radius</span><span class="token punctuation">:</span> 10px<span class="token punctuation">;</span>
            <span class="token property">-webkit-box-shadow</span><span class="token punctuation">:</span> inset 0 0 6px <span class="token function">rgba</span><span class="token punctuation">(</span>0<span class="token punctuation">,</span> 0<span class="token punctuation">,</span> 0<span class="token punctuation">,</span> .3<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token property">background-color</span><span class="token punctuation">:</span> #D62929<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token comment">/*
 *  STYLE 3
 */</span>

        <span class="token selector">#style-3::-webkit-scrollbar-track</span> <span class="token punctuation">{</span>
            <span class="token property">-webkit-box-shadow</span><span class="token punctuation">:</span> inset 0 0 6px <span class="token function">rgba</span><span class="token punctuation">(</span>0<span class="token punctuation">,</span> 0<span class="token punctuation">,</span> 0<span class="token punctuation">,</span> 0.3<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token property">background-color</span><span class="token punctuation">:</span> #F5F5F5<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token selector">#style-3::-webkit-scrollbar</span> <span class="token punctuation">{</span>
            <span class="token property">width</span><span class="token punctuation">:</span> 6px<span class="token punctuation">;</span>
            <span class="token property">background-color</span><span class="token punctuation">:</span> #F5F5F5<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token selector">#style-3::-webkit-scrollbar-thumb</span> <span class="token punctuation">{</span>
            <span class="token property">background-color</span><span class="token punctuation">:</span> #000000<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token comment">/*
 *  STYLE 4
 */</span>

        <span class="token selector">#style-4::-webkit-scrollbar-track</span> <span class="token punctuation">{</span>
            <span class="token property">-webkit-box-shadow</span><span class="token punctuation">:</span> inset 0 0 6px <span class="token function">rgba</span><span class="token punctuation">(</span>0<span class="token punctuation">,</span> 0<span class="token punctuation">,</span> 0<span class="token punctuation">,</span> 0.3<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token property">background-color</span><span class="token punctuation">:</span> #F5F5F5<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token selector">#style-4::-webkit-scrollbar</span> <span class="token punctuation">{</span>
            <span class="token property">width</span><span class="token punctuation">:</span> 10px<span class="token punctuation">;</span>
            <span class="token property">background-color</span><span class="token punctuation">:</span> #F5F5F5<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token selector">#style-4::-webkit-scrollbar-thumb</span> <span class="token punctuation">{</span>
            <span class="token property">background-color</span><span class="token punctuation">:</span> #000000<span class="token punctuation">;</span>
            <span class="token property">border</span><span class="token punctuation">:</span> 2px solid #555555<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>


        <span class="token comment">/*
 *  STYLE 5
 */</span>

        <span class="token selector">#style-5::-webkit-scrollbar-track</span> <span class="token punctuation">{</span>
            <span class="token property">-webkit-box-shadow</span><span class="token punctuation">:</span> inset 0 0 6px <span class="token function">rgba</span><span class="token punctuation">(</span>0<span class="token punctuation">,</span> 0<span class="token punctuation">,</span> 0<span class="token punctuation">,</span> 0.3<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token property">background-color</span><span class="token punctuation">:</span> #F5F5F5<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token selector">#style-5::-webkit-scrollbar</span> <span class="token punctuation">{</span>
            <span class="token property">width</span><span class="token punctuation">:</span> 10px<span class="token punctuation">;</span>
            <span class="token property">background-color</span><span class="token punctuation">:</span> #F5F5F5<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token selector">#style-5::-webkit-scrollbar-thumb</span> <span class="token punctuation">{</span>
            <span class="token property">background-color</span><span class="token punctuation">:</span> #0ae<span class="token punctuation">;</span>

            <span class="token property">background-image</span><span class="token punctuation">:</span> <span class="token function">-webkit-gradient</span><span class="token punctuation">(</span>linear<span class="token punctuation">,</span> 0 0<span class="token punctuation">,</span> 0 100%<span class="token punctuation">,</span>
                    <span class="token function">color-stop</span><span class="token punctuation">(</span>.5<span class="token punctuation">,</span> <span class="token function">rgba</span><span class="token punctuation">(</span>255<span class="token punctuation">,</span> 255<span class="token punctuation">,</span> 255<span class="token punctuation">,</span> .2<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
                    <span class="token function">color-stop</span><span class="token punctuation">(</span>.5<span class="token punctuation">,</span> transparent<span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token function">to</span><span class="token punctuation">(</span>transparent<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>


        <span class="token comment">/*
 *  STYLE 6
 */</span>

        <span class="token selector">#style-6::-webkit-scrollbar-track</span> <span class="token punctuation">{</span>
            <span class="token property">-webkit-box-shadow</span><span class="token punctuation">:</span> inset 0 0 6px <span class="token function">rgba</span><span class="token punctuation">(</span>0<span class="token punctuation">,</span> 0<span class="token punctuation">,</span> 0<span class="token punctuation">,</span> 0.3<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token property">background-color</span><span class="token punctuation">:</span> #F5F5F5<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token selector">#style-6::-webkit-scrollbar</span> <span class="token punctuation">{</span>
            <span class="token property">width</span><span class="token punctuation">:</span> 10px<span class="token punctuation">;</span>
            <span class="token property">background-color</span><span class="token punctuation">:</span> #F5F5F5<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token selector">#style-6::-webkit-scrollbar-thumb</span> <span class="token punctuation">{</span>
            <span class="token property">background-color</span><span class="token punctuation">:</span> #F90<span class="token punctuation">;</span>
            <span class="token property">background-image</span><span class="token punctuation">:</span> <span class="token function">-webkit-linear-gradient</span><span class="token punctuation">(</span>45deg<span class="token punctuation">,</span>
                    <span class="token function">rgba</span><span class="token punctuation">(</span>255<span class="token punctuation">,</span> 255<span class="token punctuation">,</span> 255<span class="token punctuation">,</span> .2<span class="token punctuation">)</span> 25%<span class="token punctuation">,</span>
                    transparent 25%<span class="token punctuation">,</span>
                    transparent 50%<span class="token punctuation">,</span>
                    <span class="token function">rgba</span><span class="token punctuation">(</span>255<span class="token punctuation">,</span> 255<span class="token punctuation">,</span> 255<span class="token punctuation">,</span> .2<span class="token punctuation">)</span> 50%<span class="token punctuation">,</span>
                    <span class="token function">rgba</span><span class="token punctuation">(</span>255<span class="token punctuation">,</span> 255<span class="token punctuation">,</span> 255<span class="token punctuation">,</span> .2<span class="token punctuation">)</span> 75%<span class="token punctuation">,</span>
                    transparent 75%<span class="token punctuation">,</span>
                    transparent<span class="token punctuation">)</span>
        <span class="token punctuation">}</span>


        <span class="token comment">/*
 *  STYLE 7
 */</span>

        <span class="token selector">#style-7::-webkit-scrollbar-track</span> <span class="token punctuation">{</span>
            <span class="token property">-webkit-box-shadow</span><span class="token punctuation">:</span> inset 0 0 6px <span class="token function">rgba</span><span class="token punctuation">(</span>0<span class="token punctuation">,</span> 0<span class="token punctuation">,</span> 0<span class="token punctuation">,</span> 0.3<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token property">background-color</span><span class="token punctuation">:</span> #F5F5F5<span class="token punctuation">;</span>
            <span class="token property">border-radius</span><span class="token punctuation">:</span> 10px<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token selector">#style-7::-webkit-scrollbar</span> <span class="token punctuation">{</span>
            <span class="token property">width</span><span class="token punctuation">:</span> 10px<span class="token punctuation">;</span>
            <span class="token property">background-color</span><span class="token punctuation">:</span> #F5F5F5<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token selector">#style-7::-webkit-scrollbar-thumb</span> <span class="token punctuation">{</span>
            <span class="token property">border-radius</span><span class="token punctuation">:</span> 10px<span class="token punctuation">;</span>
            <span class="token property">background-image</span><span class="token punctuation">:</span> <span class="token function">-webkit-gradient</span><span class="token punctuation">(</span>linear<span class="token punctuation">,</span>
                    left bottom<span class="token punctuation">,</span>
                    left top<span class="token punctuation">,</span>
                    <span class="token function">color-stop</span><span class="token punctuation">(</span>0.44<span class="token punctuation">,</span> <span class="token function">rgb</span><span class="token punctuation">(</span>122<span class="token punctuation">,</span> 153<span class="token punctuation">,</span> 217<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
                    <span class="token function">color-stop</span><span class="token punctuation">(</span>0.72<span class="token punctuation">,</span> <span class="token function">rgb</span><span class="token punctuation">(</span>73<span class="token punctuation">,</span> 125<span class="token punctuation">,</span> 189<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
                    <span class="token function">color-stop</span><span class="token punctuation">(</span>0.86<span class="token punctuation">,</span> <span class="token function">rgb</span><span class="token punctuation">(</span>28<span class="token punctuation">,</span> 58<span class="token punctuation">,</span> 148<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token comment">/*
 *  STYLE 8
 */</span>

        <span class="token selector">#style-8::-webkit-scrollbar-track</span> <span class="token punctuation">{</span>
            <span class="token property">border</span><span class="token punctuation">:</span> 1px solid black<span class="token punctuation">;</span>
            <span class="token property">background-color</span><span class="token punctuation">:</span> #F5F5F5<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token selector">#style-8::-webkit-scrollbar</span> <span class="token punctuation">{</span>
            <span class="token property">width</span><span class="token punctuation">:</span> 10px<span class="token punctuation">;</span>
            <span class="token property">background-color</span><span class="token punctuation">:</span> #F5F5F5<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token selector">#style-8::-webkit-scrollbar-thumb</span> <span class="token punctuation">{</span>
            <span class="token property">background-color</span><span class="token punctuation">:</span> #000000<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>


        <span class="token comment">/*
 *  STYLE 9
 */</span>

        <span class="token selector">#style-9::-webkit-scrollbar-track</span> <span class="token punctuation">{</span>
            <span class="token property">-webkit-box-shadow</span><span class="token punctuation">:</span> inset 0 0 6px <span class="token function">rgba</span><span class="token punctuation">(</span>0<span class="token punctuation">,</span> 0<span class="token punctuation">,</span> 0<span class="token punctuation">,</span> 0.3<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token property">background-color</span><span class="token punctuation">:</span> #F5F5F5<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token selector">#style-9::-webkit-scrollbar</span> <span class="token punctuation">{</span>
            <span class="token property">width</span><span class="token punctuation">:</span> 10px<span class="token punctuation">;</span>
            <span class="token property">background-color</span><span class="token punctuation">:</span> #F5F5F5<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token selector">#style-9::-webkit-scrollbar-thumb</span> <span class="token punctuation">{</span>
            <span class="token property">background-color</span><span class="token punctuation">:</span> #F90<span class="token punctuation">;</span>
            <span class="token property">background-image</span><span class="token punctuation">:</span> <span class="token function">-webkit-linear-gradient</span><span class="token punctuation">(</span>90deg<span class="token punctuation">,</span>
                    <span class="token function">rgba</span><span class="token punctuation">(</span>255<span class="token punctuation">,</span> 255<span class="token punctuation">,</span> 255<span class="token punctuation">,</span> .2<span class="token punctuation">)</span> 25%<span class="token punctuation">,</span>
                    transparent 25%<span class="token punctuation">,</span>
                    transparent 50%<span class="token punctuation">,</span>
                    <span class="token function">rgba</span><span class="token punctuation">(</span>255<span class="token punctuation">,</span> 255<span class="token punctuation">,</span> 255<span class="token punctuation">,</span> .2<span class="token punctuation">)</span> 50%<span class="token punctuation">,</span>
                    <span class="token function">rgba</span><span class="token punctuation">(</span>255<span class="token punctuation">,</span> 255<span class="token punctuation">,</span> 255<span class="token punctuation">,</span> .2<span class="token punctuation">)</span> 75%<span class="token punctuation">,</span>
                    transparent 75%<span class="token punctuation">,</span>
                    transparent<span class="token punctuation">)</span>
        <span class="token punctuation">}</span>


        <span class="token comment">/*
 *  STYLE 10
 */</span>

        <span class="token selector">#style-10::-webkit-scrollbar-track</span> <span class="token punctuation">{</span>
            <span class="token property">-webkit-box-shadow</span><span class="token punctuation">:</span> inset 0 0 6px <span class="token function">rgba</span><span class="token punctuation">(</span>0<span class="token punctuation">,</span> 0<span class="token punctuation">,</span> 0<span class="token punctuation">,</span> 0.3<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token property">background-color</span><span class="token punctuation">:</span> #F5F5F5<span class="token punctuation">;</span>
            <span class="token property">border-radius</span><span class="token punctuation">:</span> 10px<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token selector">#style-10::-webkit-scrollbar</span> <span class="token punctuation">{</span>
            <span class="token property">width</span><span class="token punctuation">:</span> 10px<span class="token punctuation">;</span>
            <span class="token property">background-color</span><span class="token punctuation">:</span> #F5F5F5<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token selector">#style-10::-webkit-scrollbar-thumb</span> <span class="token punctuation">{</span>
            <span class="token property">background-color</span><span class="token punctuation">:</span> #AAA<span class="token punctuation">;</span>
            <span class="token property">border-radius</span><span class="token punctuation">:</span> 10px<span class="token punctuation">;</span>
            <span class="token property">background-image</span><span class="token punctuation">:</span> <span class="token function">-webkit-linear-gradient</span><span class="token punctuation">(</span>90deg<span class="token punctuation">,</span>
                    <span class="token function">rgba</span><span class="token punctuation">(</span>0<span class="token punctuation">,</span> 0<span class="token punctuation">,</span> 0<span class="token punctuation">,</span> .2<span class="token punctuation">)</span> 25%<span class="token punctuation">,</span>
                    transparent 25%<span class="token punctuation">,</span>
                    transparent 50%<span class="token punctuation">,</span>
                    <span class="token function">rgba</span><span class="token punctuation">(</span>0<span class="token punctuation">,</span> 0<span class="token punctuation">,</span> 0<span class="token punctuation">,</span> .2<span class="token punctuation">)</span> 50%<span class="token punctuation">,</span>
                    <span class="token function">rgba</span><span class="token punctuation">(</span>0<span class="token punctuation">,</span> 0<span class="token punctuation">,</span> 0<span class="token punctuation">,</span> .2<span class="token punctuation">)</span> 75%<span class="token punctuation">,</span>
                    transparent 75%<span class="token punctuation">,</span>
                    transparent<span class="token punctuation">)</span>
        <span class="token punctuation">}</span>


        <span class="token comment">/*
 *  STYLE 11
 */</span>

        <span class="token selector">#style-11::-webkit-scrollbar-track</span> <span class="token punctuation">{</span>
            <span class="token property">-webkit-box-shadow</span><span class="token punctuation">:</span> inset 0 0 6px <span class="token function">rgba</span><span class="token punctuation">(</span>0<span class="token punctuation">,</span> 0<span class="token punctuation">,</span> 0<span class="token punctuation">,</span> 0.3<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token property">background-color</span><span class="token punctuation">:</span> #F5F5F5<span class="token punctuation">;</span>
            <span class="token property">border-radius</span><span class="token punctuation">:</span> 10px<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token selector">#style-11::-webkit-scrollbar</span> <span class="token punctuation">{</span>
            <span class="token property">width</span><span class="token punctuation">:</span> 10px<span class="token punctuation">;</span>
            <span class="token property">background-color</span><span class="token punctuation">:</span> #F5F5F5<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token selector">#style-11::-webkit-scrollbar-thumb</span> <span class="token punctuation">{</span>
            <span class="token property">background-color</span><span class="token punctuation">:</span> #3366FF<span class="token punctuation">;</span>
            <span class="token property">border-radius</span><span class="token punctuation">:</span> 10px<span class="token punctuation">;</span>
            <span class="token property">background-image</span><span class="token punctuation">:</span> <span class="token function">-webkit-linear-gradient</span><span class="token punctuation">(</span>0deg<span class="token punctuation">,</span>
                    <span class="token function">rgba</span><span class="token punctuation">(</span>255<span class="token punctuation">,</span> 255<span class="token punctuation">,</span> 255<span class="token punctuation">,</span> 0.5<span class="token punctuation">)</span> 25%<span class="token punctuation">,</span>
                    transparent 25%<span class="token punctuation">,</span>
                    transparent 50%<span class="token punctuation">,</span>
                    <span class="token function">rgba</span><span class="token punctuation">(</span>255<span class="token punctuation">,</span> 255<span class="token punctuation">,</span> 255<span class="token punctuation">,</span> 0.5<span class="token punctuation">)</span> 50%<span class="token punctuation">,</span>
                    <span class="token function">rgba</span><span class="token punctuation">(</span>255<span class="token punctuation">,</span> 255<span class="token punctuation">,</span> 255<span class="token punctuation">,</span> 0.5<span class="token punctuation">)</span> 75%<span class="token punctuation">,</span>
                    transparent 75%<span class="token punctuation">,</span>
                    transparent<span class="token punctuation">)</span>
        <span class="token punctuation">}</span>

        <span class="token comment">/*
 *  STYLE 12
 */</span>

        <span class="token selector">#style-12::-webkit-scrollbar-track</span> <span class="token punctuation">{</span>
            <span class="token property">-webkit-box-shadow</span><span class="token punctuation">:</span> inset 0 0 6px <span class="token function">rgba</span><span class="token punctuation">(</span>0<span class="token punctuation">,</span> 0<span class="token punctuation">,</span> 0<span class="token punctuation">,</span> 0.9<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token property">border-radius</span><span class="token punctuation">:</span> 10px<span class="token punctuation">;</span>
            <span class="token property">background-color</span><span class="token punctuation">:</span> #444444<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token selector">#style-12::-webkit-scrollbar</span> <span class="token punctuation">{</span>
            <span class="token property">width</span><span class="token punctuation">:</span> 12px<span class="token punctuation">;</span>
            <span class="token property">background-color</span><span class="token punctuation">:</span> #F5F5F5<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token selector">#style-12::-webkit-scrollbar-thumb</span> <span class="token punctuation">{</span>
            <span class="token property">border-radius</span><span class="token punctuation">:</span> 10px<span class="token punctuation">;</span>
            <span class="token property">background-color</span><span class="token punctuation">:</span> #D62929<span class="token punctuation">;</span>
            <span class="token property">background-image</span><span class="token punctuation">:</span> <span class="token function">-webkit-linear-gradient</span><span class="token punctuation">(</span>90deg<span class="token punctuation">,</span>
                    transparent<span class="token punctuation">,</span>
                    <span class="token function">rgba</span><span class="token punctuation">(</span>0<span class="token punctuation">,</span> 0<span class="token punctuation">,</span> 0<span class="token punctuation">,</span> 0.4<span class="token punctuation">)</span> 50%<span class="token punctuation">,</span>
                    transparent<span class="token punctuation">,</span>
                    transparent<span class="token punctuation">)</span>
        <span class="token punctuation">}</span>

        <span class="token comment">/*
 *  STYLE 13
 */</span>

        <span class="token selector">#style-13::-webkit-scrollbar-track</span> <span class="token punctuation">{</span>
            <span class="token property">-webkit-box-shadow</span><span class="token punctuation">:</span> inset 0 0 6px <span class="token function">rgba</span><span class="token punctuation">(</span>0<span class="token punctuation">,</span> 0<span class="token punctuation">,</span> 0<span class="token punctuation">,</span> 0.9<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token property">border-radius</span><span class="token punctuation">:</span> 10px<span class="token punctuation">;</span>
            <span class="token property">background-color</span><span class="token punctuation">:</span> #CCCCCC<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token selector">#style-13::-webkit-scrollbar</span> <span class="token punctuation">{</span>
            <span class="token property">width</span><span class="token punctuation">:</span> 12px<span class="token punctuation">;</span>
            <span class="token property">background-color</span><span class="token punctuation">:</span> #F5F5F5<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token selector">#style-13::-webkit-scrollbar-thumb</span> <span class="token punctuation">{</span>
            <span class="token property">border-radius</span><span class="token punctuation">:</span> 10px<span class="token punctuation">;</span>
            <span class="token property">background-color</span><span class="token punctuation">:</span> #D62929<span class="token punctuation">;</span>
            <span class="token property">background-image</span><span class="token punctuation">:</span> <span class="token function">-webkit-linear-gradient</span><span class="token punctuation">(</span>90deg<span class="token punctuation">,</span>
                    transparent<span class="token punctuation">,</span>
                    <span class="token function">rgba</span><span class="token punctuation">(</span>0<span class="token punctuation">,</span> 0<span class="token punctuation">,</span> 0<span class="token punctuation">,</span> 0.4<span class="token punctuation">)</span> 50%<span class="token punctuation">,</span>
                    transparent<span class="token punctuation">,</span>
                    transparent<span class="token punctuation">)</span>
        <span class="token punctuation">}</span>

        <span class="token comment">/*
 *  STYLE 14
 */</span>

        <span class="token selector">#style-14::-webkit-scrollbar-track</span> <span class="token punctuation">{</span>
            <span class="token property">-webkit-box-shadow</span><span class="token punctuation">:</span> inset 0 0 6px <span class="token function">rgba</span><span class="token punctuation">(</span>0<span class="token punctuation">,</span> 0<span class="token punctuation">,</span> 0<span class="token punctuation">,</span> 0.6<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token property">background-color</span><span class="token punctuation">:</span> #CCCCCC<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token selector">#style-14::-webkit-scrollbar</span> <span class="token punctuation">{</span>
            <span class="token property">width</span><span class="token punctuation">:</span> 10px<span class="token punctuation">;</span>
            <span class="token property">background-color</span><span class="token punctuation">:</span> #F5F5F5<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token selector">#style-14::-webkit-scrollbar-thumb</span> <span class="token punctuation">{</span>
            <span class="token property">background-color</span><span class="token punctuation">:</span> #FFF<span class="token punctuation">;</span>
            <span class="token property">background-image</span><span class="token punctuation">:</span> <span class="token function">-webkit-linear-gradient</span><span class="token punctuation">(</span>90deg<span class="token punctuation">,</span>
                    <span class="token function">rgba</span><span class="token punctuation">(</span>0<span class="token punctuation">,</span> 0<span class="token punctuation">,</span> 0<span class="token punctuation">,</span> 1<span class="token punctuation">)</span> 0%<span class="token punctuation">,</span>
                    <span class="token function">rgba</span><span class="token punctuation">(</span>0<span class="token punctuation">,</span> 0<span class="token punctuation">,</span> 0<span class="token punctuation">,</span> 1<span class="token punctuation">)</span> 25%<span class="token punctuation">,</span>
                    transparent 100%<span class="token punctuation">,</span>
                    <span class="token function">rgba</span><span class="token punctuation">(</span>0<span class="token punctuation">,</span> 0<span class="token punctuation">,</span> 0<span class="token punctuation">,</span> 1<span class="token punctuation">)</span> 75%<span class="token punctuation">,</span>
                    transparent<span class="token punctuation">)</span>
        <span class="token punctuation">}</span>

        <span class="token comment">/*
 *  STYLE 15
 */</span>

        <span class="token selector">#style-15::-webkit-scrollbar-track</span> <span class="token punctuation">{</span>
            <span class="token property">-webkit-box-shadow</span><span class="token punctuation">:</span> inset 0 0 6px <span class="token function">rgba</span><span class="token punctuation">(</span>0<span class="token punctuation">,</span> 0<span class="token punctuation">,</span> 0<span class="token punctuation">,</span> 0.1<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token property">background-color</span><span class="token punctuation">:</span> #F5F5F5<span class="token punctuation">;</span>
            <span class="token property">border-radius</span><span class="token punctuation">:</span> 10px<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token selector">#style-15::-webkit-scrollbar</span> <span class="token punctuation">{</span>
            <span class="token property">width</span><span class="token punctuation">:</span> 10px<span class="token punctuation">;</span>
            <span class="token property">background-color</span><span class="token punctuation">:</span> #F5F5F5<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token selector">#style-15::-webkit-scrollbar-thumb</span> <span class="token punctuation">{</span>
            <span class="token property">border-radius</span><span class="token punctuation">:</span> 10px<span class="token punctuation">;</span>
            <span class="token property">background-color</span><span class="token punctuation">:</span> #FFF<span class="token punctuation">;</span>
            <span class="token property">background-image</span><span class="token punctuation">:</span> <span class="token function">-webkit-gradient</span><span class="token punctuation">(</span>linear<span class="token punctuation">,</span>
                    40% 0%<span class="token punctuation">,</span>
                    75% 84%<span class="token punctuation">,</span>
                    <span class="token function">from</span><span class="token punctuation">(</span>#4D9C41<span class="token punctuation">)</span><span class="token punctuation">,</span>
                    <span class="token function">to</span><span class="token punctuation">(</span>#19911D<span class="token punctuation">)</span><span class="token punctuation">,</span>
                    <span class="token function">color-stop</span><span class="token punctuation">(</span>.6<span class="token punctuation">,</span> #54DE5D<span class="token punctuation">)</span><span class="token punctuation">)</span>
        <span class="token punctuation">}</span>

        <span class="token comment">/*
 *  STYLE 16
 */</span>

        <span class="token selector">#style-16::-webkit-scrollbar-track</span> <span class="token punctuation">{</span>
            <span class="token property">-webkit-box-shadow</span><span class="token punctuation">:</span> inset 0 0 6px <span class="token function">rgba</span><span class="token punctuation">(</span>0<span class="token punctuation">,</span> 0<span class="token punctuation">,</span> 0<span class="token punctuation">,</span> 0.1<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token property">background-color</span><span class="token punctuation">:</span> #F5F5F5<span class="token punctuation">;</span>
            <span class="token property">border-radius</span><span class="token punctuation">:</span> 10px<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token selector">#style-16::-webkit-scrollbar</span> <span class="token punctuation">{</span>
            <span class="token property">width</span><span class="token punctuation">:</span> 10px<span class="token punctuation">;</span>
            <span class="token property">background-color</span><span class="token punctuation">:</span> #F5F5F5<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token selector">#style-16::-webkit-scrollbar-thumb</span> <span class="token punctuation">{</span>
            <span class="token property">border-radius</span><span class="token punctuation">:</span> 10px<span class="token punctuation">;</span>
            <span class="token property">background-color</span><span class="token punctuation">:</span> #FFF<span class="token punctuation">;</span>
            <span class="token property">background-image</span><span class="token punctuation">:</span> <span class="token function">-webkit-linear-gradient</span><span class="token punctuation">(</span>top<span class="token punctuation">,</span>
                    #e4f5fc 0%<span class="token punctuation">,</span>
                    #bfe8f9 50%<span class="token punctuation">,</span>
                    #9fd8ef 51%<span class="token punctuation">,</span>
                    #2ab0ed 100%<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    </span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>wrapper<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>scrollbar<span class="token punctuation">&quot;</span></span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>style-default<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>force-overflow<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>

        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>scrollbar<span class="token punctuation">&quot;</span></span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>style-1<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>force-overflow<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>

        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>scrollbar<span class="token punctuation">&quot;</span></span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>style-2<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>force-overflow<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>

        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>scrollbar<span class="token punctuation">&quot;</span></span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>style-3<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>force-overflow<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>

        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>scrollbar<span class="token punctuation">&quot;</span></span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>style-4<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>force-overflow<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>

        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>scrollbar<span class="token punctuation">&quot;</span></span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>style-5<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>force-overflow<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>

        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>scrollbar<span class="token punctuation">&quot;</span></span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>style-6<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>force-overflow<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>

        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>scrollbar<span class="token punctuation">&quot;</span></span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>style-7<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>force-overflow<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>

        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>scrollbar<span class="token punctuation">&quot;</span></span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>style-8<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>force-overflow<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>

        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>scrollbar<span class="token punctuation">&quot;</span></span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>style-9<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>force-overflow<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>

        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>scrollbar<span class="token punctuation">&quot;</span></span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>style-10<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>force-overflow<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>

        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>scrollbar<span class="token punctuation">&quot;</span></span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>style-11<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>force-overflow<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>

        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>scrollbar<span class="token punctuation">&quot;</span></span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>style-13<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>force-overflow<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>

        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>scrollbar<span class="token punctuation">&quot;</span></span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>style-14<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>force-overflow<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>

        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>scrollbar<span class="token punctuation">&quot;</span></span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>style-15<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>force-overflow<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>html</span><span class="token punctuation">&gt;</span></span>

</code></pre></div>`,12),e=[c];function u(l,k){return s(),a("div",null,e)}const r=n(o,[["render",u],["__file","cssscroll.html.vue"]]);export{r as default};
