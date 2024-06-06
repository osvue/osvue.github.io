import{_ as n,p as s,q as a,a1 as t}from"./framework-d81ad7e5.js";const p={},o=t(`<div class="custom-container danger"><p class="custom-container-title">DANGER</p><p>HTML子绝父相。子绝父相 —— 子级是绝对定位，父级要用相对定位。 <br> 子绝父相是使用绝对定位的口诀，要牢牢记住！ <br> relative--&gt;absolute</p></div><h2 id="css-position" tabindex="-1"><a class="header-anchor" href="#css-position" aria-hidden="true">#</a> css Position</h2><p>四大元素：Content、Padding、Border、Margin</p><ul><li>Margin &amp; Padding 设定值格式</li><li>Margin &amp; Padding，什么时候用哪个？</li><li>Margin &amp; Padding 用在 Inline 元素的注意事项</li><li>Margin auto 置中 block 元素</li><li>Margin Collapse 边距重叠</li><li>Box-Sizing</li></ul><blockquote><p>Position 是 CSS 一个很重要的属性，设定值包括 static、absolute、relative、fixed 和 sticky 五个。</p></blockquote><ul><li>absolute 绝对定位，即时在一个元素中也不会受到其他影响，，在发生两个absolute嵌套时，是根据最外层的absolute元素来定位的</li></ul><table><thead><tr><th>值</th><th>描述</th></tr></thead><tbody><tr><td>absolute</td><td>生成绝对定位的元素，相对于 static 定位以外的第一个父元素进行定位。</td></tr><tr><td>元素的位置通过 &quot;left&quot;, &quot;top&quot;, &quot;right&quot; 以及 &quot;bottom&quot; 属性进行规定。</td><td></td></tr><tr><td>fixed</td><td>生成绝对定位的元素，相对于浏览器窗口进行定位。</td></tr><tr><td>元素的位置通过 &quot;left&quot;, &quot;top&quot;, &quot;right&quot; 以及 &quot;bottom&quot; 属性进行规定。</td><td></td></tr><tr><td>relative</td><td>生成相对定位的元素，相对于其正常位置进行定位。</td></tr><tr><td>因此，&quot;left:20&quot; 会向元素的 LEFT 位置添加 20 像素。</td><td></td></tr><tr><td>static</td><td>默认值。没有定位，元素出现在正常的流中（忽略 top, bottom, left, right 或者 z-index 声明）。</td></tr><tr><td>inherit</td><td>规定应该从父元素继承 position 属性的值。</td></tr></tbody></table><h3 id="absolute" tabindex="-1"><a class="header-anchor" href="#absolute" aria-hidden="true">#</a> absolute</h3><ul><li>absolute 元素所在位置有卷轴 (滚动轴), 会跟随卷轴滚动</li><li>当两个absolute 元素发生嵌套时,结果是里面的元素 是根据外层的absolute 元素去定位的</li></ul><div class="language-html" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span><span class="token punctuation">&gt;</span></span><span class="token style"><span class="token language-css">
    <span class="token selector">.base</span> <span class="token punctuation">{</span>
        <span class="token property">width</span><span class="token punctuation">:</span> 100%<span class="token punctuation">;</span>
        <span class="token property">height</span><span class="token punctuation">:</span> 520px<span class="token punctuation">;</span>
        <span class="token property">background-color</span><span class="token punctuation">:</span> <span class="token function">rgb</span><span class="token punctuation">(</span>118<span class="token punctuation">,</span> 118<span class="token punctuation">,</span> 179<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token selector">.abs</span> <span class="token punctuation">{</span>
        <span class="token property">border</span><span class="token punctuation">:</span> 5px solid #43339c<span class="token punctuation">;</span>

        <span class="token property">width</span><span class="token punctuation">:</span> 300px<span class="token punctuation">;</span>
        <span class="token property">height</span><span class="token punctuation">:</span> 300px<span class="token punctuation">;</span>
        <span class="token property">position</span><span class="token punctuation">:</span> absolute<span class="token punctuation">;</span>
        <span class="token property">bottom</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
        <span class="token property">right</span><span class="token punctuation">:</span> 120px<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>base<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>base<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>base<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>abs<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
        <span class="token comment">&lt;!-- 发生嵌套 --&gt;</span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>abs<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
        absolute
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><h3 id="relative" tabindex="-1"><a class="header-anchor" href="#relative" aria-hidden="true">#</a> relative</h3><ul><li>relative 会跟随html排版而移动,即 它可以通过html排版调整之余,还可以 通过 <code>top bottom left right</code> 去定位, <strong>注意：定位是根据自身元素所在位置来定位的</strong></li><li>relative 最重要的一个特性是它里面的 <code>absolute</code> 子元素是根据relative位置去定位的</li></ul><div class="language-html" data-ext="html"><pre class="language-html"><code>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span><span class="token punctuation">&gt;</span></span><span class="token style"><span class="token language-css">
    <span class="token selector">.base</span> <span class="token punctuation">{</span>
        <span class="token property">width</span><span class="token punctuation">:</span> 100%<span class="token punctuation">;</span>
        <span class="token property">height</span><span class="token punctuation">:</span> 520px<span class="token punctuation">;</span>
        <span class="token property">background-color</span><span class="token punctuation">:</span> <span class="token function">rgb</span><span class="token punctuation">(</span>118<span class="token punctuation">,</span> 118<span class="token punctuation">,</span> 179<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token selector">.relative</span> <span class="token punctuation">{</span>
        <span class="token property">border</span><span class="token punctuation">:</span> 5px solid #43339c<span class="token punctuation">;</span>
        <span class="token property">width</span><span class="token punctuation">:</span> 300px<span class="token punctuation">;</span>
        <span class="token property">height</span><span class="token punctuation">:</span> 300px<span class="token punctuation">;</span>
        <span class="token property">position</span><span class="token punctuation">:</span> relative<span class="token punctuation">;</span>
        <span class="token property">top</span><span class="token punctuation">:</span> 200px<span class="token punctuation">;</span>

    <span class="token punctuation">}</span>

    <span class="token selector">.abs</span> <span class="token punctuation">{</span>
        <span class="token property">border</span><span class="token punctuation">:</span> 5px solid #865113<span class="token punctuation">;</span>
        <span class="token property">width</span><span class="token punctuation">:</span> 150px<span class="token punctuation">;</span>
        <span class="token property">height</span><span class="token punctuation">:</span> 150px<span class="token punctuation">;</span>
        <span class="token property">position</span><span class="token punctuation">:</span> absolute<span class="token punctuation">;</span>
        <span class="token property">left</span><span class="token punctuation">:</span> 50px<span class="token punctuation">;</span>
        <span class="token property">top</span><span class="token punctuation">:</span> 30px<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>base<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>base<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>base<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>relative<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
        <span class="token comment">&lt;!-- 嵌套 absolute --&gt;</span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>abs<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>absolute DOM<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><h3 id="fixed" tabindex="-1"><a class="header-anchor" href="#fixed" aria-hidden="true">#</a> fixed</h3><ul><li>fixed 会定位到屏幕的固定位置, 及时页面可以卷动, 依然固定在页面固定位置,和<code>absolute</code> 相反</li><li>fixed 即使嵌套到任何<code>position</code> 元素里, 永远是根据<code>body</code> 当前窗口来定位的</li></ul><div class="language-html" data-ext="html"><pre class="language-html"><code>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span><span class="token punctuation">&gt;</span></span><span class="token style"><span class="token language-css">
    <span class="token selector">.base</span> <span class="token punctuation">{</span>
        <span class="token property">width</span><span class="token punctuation">:</span> 100%<span class="token punctuation">;</span>
        <span class="token property">height</span><span class="token punctuation">:</span> 520px<span class="token punctuation">;</span>
        <span class="token property">background-color</span><span class="token punctuation">:</span> <span class="token function">rgb</span><span class="token punctuation">(</span>118<span class="token punctuation">,</span> 118<span class="token punctuation">,</span> 179<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token selector">.relative</span> <span class="token punctuation">{</span>
        <span class="token property">border</span><span class="token punctuation">:</span> 5px solid #43339c<span class="token punctuation">;</span>
        <span class="token property">width</span><span class="token punctuation">:</span> 300px<span class="token punctuation">;</span>
        <span class="token property">height</span><span class="token punctuation">:</span> 300px<span class="token punctuation">;</span>

    <span class="token punctuation">}</span>
    
    <span class="token selector">.fx</span> <span class="token punctuation">{</span>
        <span class="token property">background-color</span><span class="token punctuation">:</span> #000<span class="token punctuation">;</span>
        <span class="token property">border</span><span class="token punctuation">:</span> 5px solid #13862c<span class="token punctuation">;</span>

        <span class="token property">position</span><span class="token punctuation">:</span> fixed<span class="token punctuation">;</span>
        <span class="token property">width</span><span class="token punctuation">:</span> 150px<span class="token punctuation">;</span>
        <span class="token property">height</span><span class="token punctuation">:</span> 150px<span class="token punctuation">;</span>
        <span class="token property">bottom</span><span class="token punctuation">:</span> 20px<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>base<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>

    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>base<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
        <span class="token comment">&lt;!-- 元素不会受到任何影响 --&gt;</span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>fx<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>base<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><h3 id="sticky" tabindex="-1"><a class="header-anchor" href="#sticky" aria-hidden="true">#</a> sticky</h3><ul><li>sticky 设定后,当页面滚动达到预定值后会触发</li><li>一般用在网站的导览页等</li></ul><div class="language-html" data-ext="html"><pre class="language-html"><code>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span><span class="token punctuation">&gt;</span></span><span class="token style"><span class="token language-css">
    <span class="token selector">.base</span> <span class="token punctuation">{</span>
        <span class="token property">width</span><span class="token punctuation">:</span> 100%<span class="token punctuation">;</span>
        <span class="token property">height</span><span class="token punctuation">:</span> 520px<span class="token punctuation">;</span>
        <span class="token property">background-color</span><span class="token punctuation">:</span> <span class="token function">rgb</span><span class="token punctuation">(</span>118<span class="token punctuation">,</span> 118<span class="token punctuation">,</span> 179<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    
    <span class="token selector">.stic</span> <span class="token punctuation">{</span>
        <span class="token property">background-color</span><span class="token punctuation">:</span> #000<span class="token punctuation">;</span>
        <span class="token property">border</span><span class="token punctuation">:</span> 5px solid #13862c<span class="token punctuation">;</span>
        <span class="token property">position</span><span class="token punctuation">:</span> sticky<span class="token punctuation">;</span>
        <span class="token property">width</span><span class="token punctuation">:</span> 150px<span class="token punctuation">;</span>
        <span class="token property">height</span><span class="token punctuation">:</span> 150px<span class="token punctuation">;</span>

        <span class="token property">bottom</span><span class="token punctuation">:</span> 20px<span class="token punctuation">;</span>
        <span class="token property">top</span><span class="token punctuation">:</span> 50px<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>base<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>base<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>base<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
    <span class="token comment">&lt;!-- 可同时设定 top  bottom --&gt;</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>stic<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>

    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>base<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>base<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><h2 id="z-index" tabindex="-1"><a class="header-anchor" href="#z-index" aria-hidden="true">#</a> z-index</h2><h3 id="z-index-属性设置元素的堆叠顺序。拥有更高堆叠顺序的元素总是会处于堆叠顺序较低的元素的前面。" tabindex="-1"><a class="header-anchor" href="#z-index-属性设置元素的堆叠顺序。拥有更高堆叠顺序的元素总是会处于堆叠顺序较低的元素的前面。" aria-hidden="true">#</a> z-index 属性设置元素的堆叠顺序。拥有更高堆叠顺序的元素总是会处于堆叠顺序较低的元素的前面。</h3><p>注释：元素可拥有负的 z-index 属性值。</p><p>注释：Z-index 仅能在定位元素上奏效（例如 <strong>position:absolute</strong>;）！</p><p>说明 该属性设置一个定位元素沿 z 轴的位置，z 轴定义为垂直延伸到显示区的轴。如果为正数，则离用户更近，为负数则表示离用户更远。</p>`,24),c=[o];function e(l,u){return s(),a("div",null,c)}const i=n(p,[["render",e],["__file","cssposition.html.vue"]]);export{i as default};
