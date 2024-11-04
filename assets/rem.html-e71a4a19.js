import{_ as n,p as a,q as s,a1 as t}from"./framework-d81ad7e5.js";const p={},e=t(`<ul><li>页面布局文字能否随着屏幕大小变化而变化</li><li>流式布局和flex布局主要针对于宽度布局，那高度如何设置</li><li>怎么样让屏幕发生变化的时候元素高度和宽度等比例缩放</li></ul><h3 id="rem基础" tabindex="-1"><a class="header-anchor" href="#rem基础" aria-hidden="true">#</a> rem基础</h3><p>rem（root em）是一个单位，类似于 em。区别：</p><p>em 是相对于父元素字体大小 rem 的基准是 相对于html元素的字体大小 比如，根元素（html）设置font-size=12px; 非根元素设置width:2rem; 则换成px表示就是24px rem的优势：父元素文字大小可能不一致， 但是整个页面只有一个html，可以很好来控制整个页面的元素大小</p><div class="language-html" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">charset</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>UTF-8<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>viewport<span class="token punctuation">&quot;</span></span> <span class="token attr-name">content</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>width=device-width, initial-scale=1.0<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">http-equiv</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>X-UA-Compatible<span class="token punctuation">&quot;</span></span> <span class="token attr-name">content</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>ie=edge<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>title</span><span class="token punctuation">&gt;</span></span>Document<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>title</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span><span class="token punctuation">&gt;</span></span><span class="token style"><span class="token language-css">
        <span class="token selector">html</span> <span class="token punctuation">{</span>
            <span class="token property">font-size</span><span class="token punctuation">:</span> 12px<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
 
        <span class="token selector">div</span> <span class="token punctuation">{</span>
            <span class="token property">font-size</span><span class="token punctuation">:</span> 10px<span class="token punctuation">;</span>
            <span class="token property">width</span><span class="token punctuation">:</span> 15rem<span class="token punctuation">;</span>
            <span class="token property">height</span><span class="token punctuation">:</span> 15rem<span class="token punctuation">;</span>
            <span class="token property">background-color</span><span class="token punctuation">:</span> purple<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
 
        <span class="token selector">p</span> <span class="token punctuation">{</span>
            <span class="token comment">/* 1. em相对于父元素 的字体大小来说的 */</span>
            <span class="token property">width</span><span class="token punctuation">:</span> 10em<span class="token punctuation">;</span>
            <span class="token property">height</span><span class="token punctuation">:</span> 10em<span class="token punctuation">;</span>
            <span class="token comment">/* 2. rem 相对于 html元素 字体大小来说的 */</span>
            <span class="token comment">/* width: 10rem;
            height: 10rem; */</span>
            <span class="token property">background-color</span><span class="token punctuation">:</span> pink<span class="token punctuation">;</span>
            <span class="token comment">/* 3.rem的优点就是可以通过修改html里面的文字大小来改变页面中元素的大小可以整体控制 */</span>
        <span class="token punctuation">}</span>
    </span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">&gt;</span></span>
 
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><h3 id="rem的使用" tabindex="-1"><a class="header-anchor" href="#rem的使用" aria-hidden="true">#</a> rem的使用</h3><ul><li>指相对于根元素的字体大小的单位</li></ul><div class="language-html" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span><span class="token punctuation">&gt;</span></span><span class="token style"><span class="token language-css">
    <span class="token selector">html</span><span class="token punctuation">{</span>
        <span class="token comment">/* 根字体的大小,如果要搭配rem使用，通常会设置为10px 这样方便计算 */</span>
        <span class="token property">font-size</span><span class="token punctuation">:</span> 10px<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token selector">div</span><span class="token punctuation">{</span>
        <span class="token property">font-size</span><span class="token punctuation">:</span> 1rem<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><p>这样的话，div的字体大小就是1rem也就是10px； 这样的好处就是如果随着屏幕的变化，需要改变字体大小的话，只需要改根字体即可</p><ul><li>与em的区别有哪些？</li></ul><p>rem是相对于根字体而言的， 而 em是相对于父一级的对象而言的。所以em可能出现集联等情况，计算会繁琐。</p><h2 id="媒体查询" tabindex="-1"><a class="header-anchor" href="#媒体查询" aria-hidden="true">#</a> 媒体查询</h2><p>媒体查询（Media Query）是 CSS3 的新语法</p><p>使用 <code>@media</code> 查询，可以针对不同的媒体类型定义不同的样式 <code>@media</code> 可以针对不同屏幕尺寸设置不同的样式 当你重置浏览器大小的过程中，页面也会根据浏览器的宽度和高度重新渲染页面 目前针对很多苹果手机、安卓手机、平板等设备都用到媒体查询 2.2 语法规范</p><div class="language-css" data-ext="css"><pre class="language-css"><code><span class="token atrule"><span class="token rule">@media</span> mediatype <span class="token keyword">and</span>|<span class="token keyword">not</span>|<span class="token keyword">only</span> <span class="token punctuation">(</span>media feature<span class="token punctuation">)</span></span> <span class="token punctuation">{</span>
    CSS3-Code<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><ul><li>以 <code>@media</code> 开头</li><li>mediatype 是媒体类型</li><li>关键字 and、not、only</li><li>media feature 媒体特性，必须有小括号</li></ul><div class="language-html" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">charset</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>UTF-8<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>viewport<span class="token punctuation">&quot;</span></span> <span class="token attr-name">content</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>width=device-width, initial-scale=1.0<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">http-equiv</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>X-UA-Compatible<span class="token punctuation">&quot;</span></span> <span class="token attr-name">content</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>ie=edge<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>title</span><span class="token punctuation">&gt;</span></span>Document<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>title</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span><span class="token punctuation">&gt;</span></span><span class="token style"><span class="token language-css">
        <span class="token comment">/* 这句话的意思就是： 在我们屏幕上 并且 最大的宽度是 800像素 设置我们想要的样式 */</span>
        <span class="token comment">/* max-width 小于等于800 */</span>
        <span class="token comment">/* 媒体查询可以根据不同的屏幕尺寸在改变不同的样式 */</span>
        <span class="token comment">/* 屏幕上页面处于 500px-800px 之间，页面背景颜色显示为 pink 色。页面小于 500px，背景颜色显示为 purple 色  */</span>
        <span class="token atrule"><span class="token rule">@media</span> screen <span class="token keyword">and</span> <span class="token punctuation">(</span><span class="token property">max-width</span><span class="token punctuation">:</span> 800px<span class="token punctuation">)</span></span> <span class="token punctuation">{</span>
            <span class="token selector">body</span> <span class="token punctuation">{</span>
                <span class="token property">background-color</span><span class="token punctuation">:</span> pink<span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
        
        <span class="token atrule"><span class="token rule">@media</span> screen <span class="token keyword">and</span> <span class="token punctuation">(</span><span class="token property">max-width</span><span class="token punctuation">:</span> 500px<span class="token punctuation">)</span></span> <span class="token punctuation">{</span>
            <span class="token selector">body</span> <span class="token punctuation">{</span>
                <span class="token property">background-color</span><span class="token punctuation">:</span> purple<span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    </span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><h3 id="mediatype查询类型" tabindex="-1"><a class="header-anchor" href="#mediatype查询类型" aria-hidden="true">#</a> mediatype查询类型</h3><ul><li>将不同终端设备划分成不同的类型，称为媒体类型</li></ul><table><thead><tr><th>值</th><th>解释说明</th></tr></thead><tbody><tr><td>all</td><td>用于所有设备</td></tr><tr><td>print</td><td>用于打印机和打印浏览</td></tr><tr><td>screen</td><td>用于电脑屏幕，平板电脑，智能手机等</td></tr></tbody></table><h3 id="关键字-and-not-only" tabindex="-1"><a class="header-anchor" href="#关键字-and-not-only" aria-hidden="true">#</a> 关键字 and not only</h3><p>关键字将媒体类型特性连接到一起作为媒体查询的条件</p><ul><li>and：可以将多个类型或多个媒体类型连接到一起成为媒体查询的条件</li><li>not：排除某个媒体类型，相当于 “非” 的意思，可以省略</li><li>only：指定某个特定的媒体类型，可以省略</li></ul><p>媒体特性 每种媒体类型都具体各自不同的特性，根据不同媒体类型的媒体特性设置不同的展示风格。我们暂且了解三个，注意他们要加小括号包含</p><table><thead><tr><th>值</th><th>解释</th></tr></thead><tbody><tr><td>width</td><td>定义输出设备中页面可见区域的宽度</td></tr><tr><td>min-width</td><td>定义输出设备中页面最小可见区域宽度</td></tr><tr><td>max-width</td><td>定义输出设备中页面最大可见区域宽度</td></tr></tbody></table><h4 id="媒体查询的价值-媒体查询可以根据不同的屏幕尺寸改变不同的样式" tabindex="-1"><a class="header-anchor" href="#媒体查询的价值-媒体查询可以根据不同的屏幕尺寸改变不同的样式" aria-hidden="true">#</a> 媒体查询的价值：媒体查询可以根据不同的屏幕尺寸改变不同的样式</h4><div class="language-html" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">charset</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>UTF-8<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>viewport<span class="token punctuation">&quot;</span></span> <span class="token attr-name">content</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>width=device-width, initial-scale=1.0<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">http-equiv</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>X-UA-Compatible<span class="token punctuation">&quot;</span></span> <span class="token attr-name">content</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>ie=edge<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>title</span><span class="token punctuation">&gt;</span></span>Document<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>title</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span><span class="token punctuation">&gt;</span></span><span class="token style"><span class="token language-css">
        <span class="token comment">/* 1. 媒体查询一般按照从大到小或者 从小到大的顺序来 */</span>
        <span class="token comment">/* 2. 小于540px 页面的背景颜色变为蓝色 */</span>
        
        <span class="token atrule"><span class="token rule">@media</span> screen <span class="token keyword">and</span> <span class="token punctuation">(</span><span class="token property">max-width</span><span class="token punctuation">:</span> 539px<span class="token punctuation">)</span></span> <span class="token punctuation">{</span>
            <span class="token selector">body</span> <span class="token punctuation">{</span>
                <span class="token property">background-color</span><span class="token punctuation">:</span> blue<span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
        <span class="token comment">/* 3. 540 ~ 970 我们的页面颜色改为 绿色 */</span>
        <span class="token comment">/* @media screen and (min-width: 540px) and (max-width: 969px) {
            body {
                background-color: green;
            }
        } */</span>
        
        <span class="token atrule"><span class="token rule">@media</span> screen <span class="token keyword">and</span> <span class="token punctuation">(</span><span class="token property">min-width</span><span class="token punctuation">:</span> 540px<span class="token punctuation">)</span></span> <span class="token punctuation">{</span>
            <span class="token selector">body</span> <span class="token punctuation">{</span>
                <span class="token property">background-color</span><span class="token punctuation">:</span> green<span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
        <span class="token comment">/* 4. 大于等于970 我们页面的颜色改为 红色 */</span>
        
        <span class="token atrule"><span class="token rule">@media</span> screen <span class="token keyword">and</span> <span class="token punctuation">(</span><span class="token property">min-width</span><span class="token punctuation">:</span> 970px<span class="token punctuation">)</span></span> <span class="token punctuation">{</span>
            <span class="token selector">body</span> <span class="token punctuation">{</span>
                <span class="token property">background-color</span><span class="token punctuation">:</span> red<span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
        <span class="token comment">/* 5. screen 还有 and 必须带上不能省略的 */</span>
        <span class="token comment">/* 6. 我们的数字后面必须跟单位  970px   这个 px 不能省略的 */</span>
    </span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><h3 id="媒体查询-rem实现元素动态大小变化" tabindex="-1"><a class="header-anchor" href="#媒体查询-rem实现元素动态大小变化" aria-hidden="true">#</a> 媒体查询+rem实现元素动态大小变化</h3><p>rem 单位是跟着 html 来走的，有了 rem 页面元素可以设置不同大小尺寸 媒体查询可以根据不同设备宽度来修改样式 媒体查询+rem 就可以实现不同设备宽度，实现页面元素大小的动态变化</p>`,29),o=[e];function c(l,u){return a(),s("div",null,o)}const i=n(p,[["render",c],["__file","rem.html.vue"]]);export{i as default};
