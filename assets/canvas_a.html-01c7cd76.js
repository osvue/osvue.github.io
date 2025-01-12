import{_ as n,p as s,q as a,a1 as t}from"./framework-d81ad7e5.js";const p={},o=t(`<ul><li>HTML5 <code>&lt;canvas&gt;</code> 元素用于图形的绘制，通过脚本 (通常是JavaScript)来完成. <code>&lt;canvas&gt;</code> 标签只是图形容器，您必须使用脚本来绘制图形。</li></ul><ol><li>创建一个画布（Canvas）</li><li>一个画布在网页中是一个矩形框，通过 <code>&lt;canvas&gt;</code> 元素来绘制.</li><li>注意: 默认情况下 <code>&lt;canvas&gt;</code> 元素没有边框和内容。</li></ol><ul><li><code>&lt;canvas&gt;</code>简单实例如下: <ul><li><code>&lt;canvas id=&quot;myCanvas&quot; width=&quot;200&quot; height=&quot;100&quot;&gt;&lt;/canvas&gt;</code> 注意: 标签通常需要指定一个id属性 (脚本中经常引用), width 和 height 属性定义的画布的大小. 提示:你可以在HTML页面中使用多个 <code>&lt;canvas&gt;</code> 元素. 使用 style 属性来添加边框:</li></ul></li></ul><p>实例</p><div class="language-html" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>canvas</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>myCanvas<span class="token punctuation">&quot;</span></span> <span class="token attr-name">width</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>200<span class="token punctuation">&quot;</span></span> <span class="token attr-name">height</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>100<span class="token punctuation">&quot;</span></span>
<span class="token special-attr"><span class="token attr-name">style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span><span class="token value css language-css"><span class="token property">border</span><span class="token punctuation">:</span>1px solid #000000<span class="token punctuation">;</span></span><span class="token punctuation">&quot;</span></span></span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>canvas</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><h3 id="canvas-坐标" tabindex="-1"><a class="header-anchor" href="#canvas-坐标" aria-hidden="true">#</a> Canvas 坐标</h3><p>canvas 是一个二维网格。</p><p><code>canvas 的左上角坐标为 (0,0)</code></p><h3 id="canvas-路径" tabindex="-1"><a class="header-anchor" href="#canvas-路径" aria-hidden="true">#</a> Canvas - 路径</h3><p>在Canvas上画线，我们将使用以下两种方法：</p><p><code>moveTo(x,y)</code> 定义线条开始坐标 <code>lineTo(x,y)</code> 定义线条结束坐标</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 定义开始坐标(0,0), 和结束坐标 (200,100)。然后使用 stroke() 方法来绘制线条:</span>

<span class="token keyword">var</span> c<span class="token operator">=</span>document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">&quot;myCanvas&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">var</span> ctx<span class="token operator">=</span>c<span class="token punctuation">.</span><span class="token function">getContext</span><span class="token punctuation">(</span><span class="token string">&quot;2d&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
ctx<span class="token punctuation">.</span><span class="token function">moveTo</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
ctx<span class="token punctuation">.</span><span class="token function">lineTo</span><span class="token punctuation">(</span><span class="token number">200</span><span class="token punctuation">,</span><span class="token number">100</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
ctx<span class="token punctuation">.</span><span class="token function">stroke</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// 使用 arc() 方法 绘制一个圆:</span>
<span class="token comment">// 在canvas中绘制圆形, 我们将使用以下方法:</span>

<span class="token comment">// arc(x,y,r,start,stop)</span>

<span class="token keyword">var</span> c<span class="token operator">=</span>document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">&quot;myCanvas&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">var</span> ctx<span class="token operator">=</span>c<span class="token punctuation">.</span><span class="token function">getContext</span><span class="token punctuation">(</span><span class="token string">&quot;2d&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
ctx<span class="token punctuation">.</span><span class="token function">beginPath</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
ctx<span class="token punctuation">.</span><span class="token function">arc</span><span class="token punctuation">(</span><span class="token number">95</span><span class="token punctuation">,</span><span class="token number">50</span><span class="token punctuation">,</span><span class="token number">40</span><span class="token punctuation">,</span><span class="token number">0</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token operator">*</span>Math<span class="token punctuation">.</span><span class="token constant">PI</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
ctx<span class="token punctuation">.</span><span class="token function">stroke</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

</code></pre></div><h3 id="canvas-文本" tabindex="-1"><a class="header-anchor" href="#canvas-文本" aria-hidden="true">#</a> Canvas - 文本</h3><p>使用 canvas 绘制文本，重要的属性和方法如下：</p><p>font - 定义字体 fillText(text,x,y) - 在 canvas 上绘制实心的文本 strokeText(text,x,y) - 在 canvas 上绘制空心的文本</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 使用 &quot;Arial&quot; 字体在画布上绘制一个高 30px 的文字（实心）：</span>


<span class="token keyword">var</span> c<span class="token operator">=</span>document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">&quot;myCanvas&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">var</span> ctx<span class="token operator">=</span>c<span class="token punctuation">.</span><span class="token function">getContext</span><span class="token punctuation">(</span><span class="token string">&quot;2d&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
ctx<span class="token punctuation">.</span>font<span class="token operator">=</span><span class="token string">&quot;30px Arial&quot;</span><span class="token punctuation">;</span>
ctx<span class="token punctuation">.</span><span class="token function">fillText</span><span class="token punctuation">(</span><span class="token string">&quot;Hello World&quot;</span><span class="token punctuation">,</span><span class="token number">10</span><span class="token punctuation">,</span><span class="token number">50</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 使用 &quot;Arial&quot; 字体在画布上绘制一个高 30px 的文字（空心）：</span>
<span class="token keyword">var</span> c<span class="token operator">=</span>document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">&quot;myCanvas&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">var</span> ctx<span class="token operator">=</span>c<span class="token punctuation">.</span><span class="token function">getContext</span><span class="token punctuation">(</span><span class="token string">&quot;2d&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
ctx<span class="token punctuation">.</span>font<span class="token operator">=</span><span class="token string">&quot;30px Arial&quot;</span><span class="token punctuation">;</span>
ctx<span class="token punctuation">.</span><span class="token function">strokeText</span><span class="token punctuation">(</span><span class="token string">&quot;Hello World&quot;</span><span class="token punctuation">,</span><span class="token number">10</span><span class="token punctuation">,</span><span class="token number">50</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><h3 id="canvas-demo" tabindex="-1"><a class="header-anchor" href="#canvas-demo" aria-hidden="true">#</a> canvas demo</h3><div class="language-html" data-ext="html"><pre class="language-html"><code><span class="token doctype"><span class="token punctuation">&lt;!</span><span class="token doctype-tag">DOCTYPE</span> <span class="token name">html</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>en<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">charset</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>UTF-8<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>viewport<span class="token punctuation">&quot;</span></span> <span class="token attr-name">content</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>width=device-width, initial-scale=1.0<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>title</span><span class="token punctuation">&gt;</span></span>Document<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>title</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span><span class="token punctuation">&gt;</span></span><span class="token style"><span class="token language-css">
    <span class="token selector">.container</span> <span class="token punctuation">{</span>
        <span class="token property">width</span><span class="token punctuation">:</span> 600px<span class="token punctuation">;</span>
        <span class="token property">height</span><span class="token punctuation">:</span> 1400px<span class="token punctuation">;</span>
        <span class="token property">background</span><span class="token punctuation">:</span> <span class="token url"><span class="token function">url</span><span class="token punctuation">(</span><span class="token string url">&#39;./31.png&#39;</span><span class="token punctuation">)</span></span> no-repeat<span class="token punctuation">;</span>
        <span class="token property">background-size</span><span class="token punctuation">:</span> cover<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token selector">.caption</span> <span class="token punctuation">{</span>
        <span class="token property">padding</span><span class="token punctuation">:</span> 0.5em 1em<span class="token punctuation">;</span>
        <span class="token property">position</span><span class="token punctuation">:</span> absolute<span class="token punctuation">;</span>
        <span class="token property">left</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
        <span class="token property">right</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
        <span class="token property">bottom</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
        <span class="token property">backdrop-filter</span><span class="token punctuation">:</span> <span class="token function">blur</span><span class="token punctuation">(</span>4px<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token property">background-color</span><span class="token punctuation">:</span> <span class="token function">rgba</span><span class="token punctuation">(</span>255<span class="token punctuation">,</span> 255<span class="token punctuation">,</span> 255<span class="token punctuation">,</span> 0.5<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">&gt;</span></span>


    <span class="token comment">&lt;!--浏览器兼容性检测，需要IE9.0+--&gt;</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>canvas</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>myCanvas<span class="token punctuation">&quot;</span></span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>myCanvas<span class="token punctuation">&quot;</span></span> <span class="token special-attr"><span class="token attr-name">style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span><span class="token value css language-css"><span class="token property">border</span><span class="token punctuation">:</span> 1px solid #ccc<span class="token punctuation">;</span></span><span class="token punctuation">&quot;</span></span></span><span class="token punctuation">&gt;</span></span>
        Sorry，您的浏览器不支持 HTML5 canvas 标签。
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>canvas</span><span class="token punctuation">&gt;</span></span>





<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
<span class="token comment">/*
getContext(&quot;2d&quot;) 对象是内建的 HTML5 对象，拥有多种绘制路径、矩形、圆形、字符以及添加图像的方法。

下面的两行代码绘制一个红色的矩形：

ctx.fillStyle=&quot;#FF0000&quot;;
ctx.fillRect(0,0,150,75);
设置fillStyle属性可以是CSS颜色，渐变，或图案。fillStyle 默认设置是#000000（黑色）。

fillRect(x,y,width,height) 方法定义了矩形当前的填充方式。
*/</span>
    <span class="token keyword">var</span> canvas <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">&#39;#myCanvas&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//获得画布</span>
    <span class="token comment">//whb: width 和 height 属性值必须是 px，否则忽略处理（默认 300*150 像素）</span>
    canvas<span class="token punctuation">.</span>width <span class="token operator">=</span> <span class="token number">600</span><span class="token punctuation">;</span> <span class="token comment">//设置画布的宽 （此处必须直接定义，不允许用css 或 style.width 进行控制）</span>
    canvas<span class="token punctuation">.</span>height <span class="token operator">=</span> <span class="token number">300</span><span class="token punctuation">;</span> <span class="token comment">//设置画布的高</span>

    <span class="token keyword">var</span> ctx <span class="token operator">=</span> canvas<span class="token punctuation">.</span><span class="token function">getContext</span><span class="token punctuation">(</span><span class="token string">&#39;2d&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//获得ctx上下文对象（ctx具备各种图形API方法）</span>


    <span class="token comment">//画红色水平线段</span>
    ctx<span class="token punctuation">.</span><span class="token function">moveTo</span><span class="token punctuation">(</span><span class="token number">200</span><span class="token punctuation">,</span> <span class="token number">280</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//定义线段起点</span>
    ctx<span class="token punctuation">.</span><span class="token function">lineTo</span><span class="token punctuation">(</span><span class="token number">400</span><span class="token punctuation">,</span> <span class="token number">280</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//定义线段终点（因为X轴坐标不一样，Y轴一样，所以是水平线段）</span>
    ctx<span class="token punctuation">.</span>strokeStyle <span class="token operator">=</span> <span class="token string">&quot;#FF0000&quot;</span><span class="token punctuation">;</span><span class="token comment">//定义画笔颜色</span>
    ctx<span class="token punctuation">.</span><span class="token function">stroke</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//给线段路径描边（否则不可见）</span>
    ctx<span class="token punctuation">.</span><span class="token function">closePath</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//闭合路径</span>

    <span class="token comment">//画绿色边框矩形</span>
    ctx<span class="token punctuation">.</span>strokeStyle <span class="token operator">=</span> <span class="token string">&quot;#00FF00&quot;</span><span class="token punctuation">;</span><span class="token comment">//定义画笔颜色</span>
    ctx<span class="token punctuation">.</span><span class="token function">strokeRect</span><span class="token punctuation">(</span><span class="token number">50</span><span class="token punctuation">,</span> <span class="token number">50</span><span class="token punctuation">,</span> <span class="token number">100</span><span class="token punctuation">,</span> <span class="token number">50</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    ctx<span class="token punctuation">.</span><span class="token function">closePath</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//闭合路径</span>

    <span class="token comment">//画蓝色实心框矩形</span>
    ctx<span class="token punctuation">.</span>fillStyle <span class="token operator">=</span> <span class="token string">&quot;#0000FF&quot;</span><span class="token punctuation">;</span><span class="token comment">//定义画笔颜色</span>
    ctx<span class="token punctuation">.</span><span class="token function">fillRect</span><span class="token punctuation">(</span><span class="token number">200</span><span class="token punctuation">,</span> <span class="token number">50</span><span class="token punctuation">,</span> <span class="token number">100</span><span class="token punctuation">,</span> <span class="token number">50</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    ctx<span class="token punctuation">.</span><span class="token function">closePath</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//闭合路径</span>

    <span class="token comment">//画渐变矩形</span>
    <span class="token comment">// 先创建“线性”渐变</span>
    <span class="token keyword">var</span> grd <span class="token operator">=</span> ctx<span class="token punctuation">.</span><span class="token function">createLinearGradient</span><span class="token punctuation">(</span><span class="token number">300</span><span class="token punctuation">,</span> <span class="token number">50</span><span class="token punctuation">,</span> <span class="token number">500</span><span class="token punctuation">,</span> <span class="token number">50</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//createRadialGradient 是径向渐变</span>
    grd<span class="token punctuation">.</span><span class="token function">addColorStop</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token string">&quot;white&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    grd<span class="token punctuation">.</span><span class="token function">addColorStop</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token string">&quot;red&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">// 后填充渐变</span>
    ctx<span class="token punctuation">.</span>fillStyle <span class="token operator">=</span> grd<span class="token punctuation">;</span>
    ctx<span class="token punctuation">.</span><span class="token function">fillRect</span><span class="token punctuation">(</span><span class="token number">350</span><span class="token punctuation">,</span> <span class="token number">50</span><span class="token punctuation">,</span> <span class="token number">100</span><span class="token punctuation">,</span> <span class="token number">50</span><span class="token punctuation">)</span><span class="token punctuation">;</span>


    <span class="token comment">//画红色圆形</span>
    ctx<span class="token punctuation">.</span>fillStyle <span class="token operator">=</span> <span class="token string">&quot;#FF0000&quot;</span><span class="token punctuation">;</span>
    ctx<span class="token punctuation">.</span><span class="token function">arc</span><span class="token punctuation">(</span><span class="token number">550</span><span class="token punctuation">,</span> <span class="token number">75</span><span class="token punctuation">,</span> <span class="token number">27</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">2</span> <span class="token operator">*</span> Math<span class="token punctuation">.</span><span class="token constant">PI</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//四个参数分别为：x,y,r半径，开始角度（3点钟方向为0度角），结束角度（2π表示360度）（即画一个整圆）</span>
    ctx<span class="token punctuation">.</span><span class="token function">fill</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">//画实心文字</span>
    ctx<span class="token punctuation">.</span>font <span class="token operator">=</span> <span class="token string">&quot;30px Arial&quot;</span><span class="token punctuation">;</span>
    ctx<span class="token punctuation">.</span><span class="token function">fillText</span><span class="token punctuation">(</span><span class="token string">&quot;Hello Html5 Canvas&quot;</span><span class="token punctuation">,</span> <span class="token number">180</span><span class="token punctuation">,</span> <span class="token number">250</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//strokeText 是空心文字</span>


</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>html</span><span class="token punctuation">&gt;</span></span>
</code></pre></div>`,18),c=[o];function e(u,l){return s(),a("div",null,c)}const i=n(p,[["render",e],["__file","canvas_a.html.vue"]]);export{i as default};
