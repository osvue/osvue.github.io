import{_ as n,p as s,q as a,a1 as t}from"./framework-d81ad7e5.js";const p={},o=t(`<h2 id="自定义" tabindex="-1"><a class="header-anchor" href="#自定义" aria-hidden="true">#</a> 自定义</h2><ul><li>需要加上 <strong>controls</strong> 控制栏才会显示出来 <ul><li><code>&lt;video src=&quot;VID20161120192409.mp4&quot; controls&gt;&lt;/video&gt;</code></li></ul></li><li>可以通过js控制video的方法，来进行自定义控制栏。 <ul><li>播放与暂停(video上面的方法，play() 和 pause())</li></ul></li></ul><h2 id="属性" tabindex="-1"><a class="header-anchor" href="#属性" aria-hidden="true">#</a> 属性</h2><div class="language-text" data-ext="text"><pre class="language-text"><code>Video标签含有src、poster、preload、autoplay、loop、controls、width、height等几个属性，
 以及一个内部使用的标签&lt;source&gt;。Video标签内除了可以包含&lt;source&gt;标签外，
 还可以包含当指定的视频都不能 播放时，返回的内容。
</code></pre></div><ol><li>src属性和poster属性</li></ol><div class="language-text" data-ext="text"><pre class="language-text"><code>你能想象src属性是用来干啥的。跟&lt;img&gt;标签的一样，这个属性用于指定视频的地址。而poster属性用于指定一张图片，在当前视频数据无效时显示（预览图）。视频数据无效可能是视频正在加载，可能是视频地址错误等等。
</code></pre></div><p><code>&lt; video width=&quot;200&quot; height=&quot;100&quot; src=&quot;aaa.mp4&quot; poster=first.png&quot; autoplay=&quot;autoplay&quot;&gt;&lt;/ video &gt;</code></p><ol start="2"><li>preload属性</li></ol><p>这个属性也能通过名字了解用处，此属性用于定义视频是否预加载。属性有三个可选择的值：none、metadata、auto。如果不使用此属性，默认为auto。</p><p><code>&lt; video width=&quot;200&quot; height=&quot;100&quot; src=&quot;apple.mp4&quot; poster=&quot;not.png&quot; autoplay=&quot;autoplay&quot; preload=&quot;none&quot;&gt;&lt;/ video &gt;</code></p><p>None：不进行预加载。使用此属性值，可能是页面制作者认为用户不期望此视频，或者减少HTTP请求。</p><p>Metadata：部分预加载。使用此属性值，代表页面制作者认为用户不期望此视频，但为用户提供一些元数据（包括尺寸，第一帧，曲目列表，持续时间等等）。</p><p>Auto：全部预加载。</p><ol start="3"><li>autoplay属性</li></ol><ul><li>Autoplay属性用于设置视频是否自动播放，是一个布尔属性。当出现时，表示自动播放，去掉是表示不自动播放。</li></ul><p><code>&lt; video width=&quot;200&quot; height=&quot;100&quot; src=&quot;apple.mp4&quot; poster=&quot;not.png&quot; autoplay=&quot;autoplay&quot; preload=&quot;none&quot;&gt;&lt;/ video &gt;</code></p><div class="language-text" data-ext="text"><pre class="language-text"><code>注意，HTML中布尔属性的值不是true和false。正确的用法是，在标签中使用此属性表示true，
此时属性要么没有值，要么其值恒等于他的名字 
（此处，自动播放为&lt;video autoplay /&gt;或者&lt;video autoplay=”autoplay” /&gt;）；
而在标签中不使用此属性表示false（此处不进行自动播放为&lt;video /&gt;）。
</code></pre></div><ol start="4"><li>loop属性</li></ol><p><code>&lt; video width=&quot;200&quot; height=&quot;100&quot; src=&quot;apple.mp4&quot; poster=&quot;not.png&quot; autoplay=&quot;autoplay&quot; loop=&quot;loop&quot;&gt;&lt;/ video &gt;</code></p><ul><li>loop属性用于指定视频是否循环播放，同样是一个布尔属性。</li></ul><ol start="5"><li>controls属性</li></ol><p><code>&lt; video width=&quot;200&quot; height=&quot;100&quot; src=&quot;apple.mp4&quot; poster=&quot;not.png&quot; autoplay=&quot;autoplay&quot; preload=&quot;none&quot; controls=&quot;controls&quot;&gt;&lt;/ video &gt;</code></p><p>Controls属性用于向浏览器指明页面制作者没有使用脚本生成播放控制器，需要浏览器启用本身的播放控制栏。</p><p>控制栏须包括播放暂停控制，播放进度控制，音量控制等等。</p><p>每个浏览器默认的播放控制栏在界面上不一样。由于我浏览器的诡异问题，Firefox和Safari的Video标签不正常，所以这两个只能在网上找截图了。</p><ol start="6"><li><p>width属性和height属性</p></li><li><p>source标签</p></li></ol><div class="language-html" data-ext="html"><pre class="language-html"><code>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>video</span>  <span class="token attr-name">width</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>200<span class="token punctuation">&quot;</span></span> <span class="token attr-name">height</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>100<span class="token punctuation">&quot;</span></span>  <span class="token attr-name">controls</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>controls<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>source</span>  <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>apple.ogv<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>source</span>  <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>apple.ogg<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>video</span> <span class="token punctuation">&gt;</span></span>

</code></pre></div><p>Source标签用于给媒体（因为audio标签同样可以包含此标签，所以这儿用媒体，而不是视频）指定多个可选择的（浏览器最终只能选一个）文件地址，且只能在媒体标签没有使用src属性时使用。</p><p>浏览器按source标签的顺序检测标签指定的视频是否能够播放（可能是视频格式不支持，视频不存在等等），如果不能播放，换下一个。此方法多用于兼容不同的浏览器。Source标签本身不代表任何含义，不能单独出现。</p><p>此标签包含src、type、media三个属性。</p><p>src属性：用于指定媒体的地址，和video标签的一样。</p><p>Type属性：用于说明src属性指定媒体的类型，帮助浏览器在获取媒体前判断是否支持此类别的媒体格式。</p><p>Media属性：用于说明媒体在何种媒介中使用，不设置时默认值为all，表示支持所有媒介。你想到<code>&lt;style&gt;</code>标签的media属性了么？一样一样一样的。</p><ol start="8"><li>一个完整的例子</li></ol><div class="language-html" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>video</span>  <span class="token attr-name">width</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>200<span class="token punctuation">&quot;</span></span> <span class="token attr-name">height</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>100<span class="token punctuation">&quot;</span></span>  <span class="token attr-name">controls</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>controls<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>source</span>  <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>apple.ogv<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>source</span>  <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>apple.ogg<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>video</span> <span class="token punctuation">&gt;</span></span>
</code></pre></div><ul><li><p>这段代码在页面中定义了一个视频，此视频的预览图为poster的属性值，显示浏览器的默认媒体控制栏，预加载视频的元数据，循环播放，宽度为200像素，高度为100像素。</p></li><li><p>第一选择视频地址为第一个source标签的src属性值，视频类别为Ogg视频，视频编码译码器为Theora，音频编码译码器为Vorbis，播放媒 介为显示器；第二选择视频地址不再累述。如果你还要兼容IE的话，可以在最后一个source标签后再加上Flash播放器的标签集，或者使用一点 JavaScript代码。</p></li><li><p>preload 属性规定是否在页面加载后载入视频。</p></li><li><p>如果设置了 autoplay 属性，则忽略该属性。</p></li></ul><h3 id="半成品" tabindex="-1"><a class="header-anchor" href="#半成品" aria-hidden="true">#</a> 半成品</h3><div class="language-html" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span><span class="token punctuation">&gt;</span></span><span class="token style"><span class="token language-css">

    <span class="token selector">*</span> <span class="token punctuation">{</span>
    <span class="token property">padding</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
    <span class="token property">margin</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.video_player</span> <span class="token punctuation">{</span>
    <span class="token property">position</span><span class="token punctuation">:</span> relative<span class="token punctuation">;</span>
    <span class="token property">width</span><span class="token punctuation">:</span> 1000px<span class="token punctuation">;</span>
    <span class="token property">height</span><span class="token punctuation">:</span> 500px<span class="token punctuation">;</span>
    <span class="token property">margin</span><span class="token punctuation">:</span> 0 auto<span class="token punctuation">;</span>
    <span class="token property">overflow</span><span class="token punctuation">:</span> hidden<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.video_player video</span> <span class="token punctuation">{</span>
    <span class="token property">width</span><span class="token punctuation">:</span> 100%<span class="token punctuation">;</span>
    <span class="token property">height</span><span class="token punctuation">:</span> 100%<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.video_player .menu</span> <span class="token punctuation">{</span>
    <span class="token property">position</span><span class="token punctuation">:</span> absolute<span class="token punctuation">;</span>
    <span class="token property">width</span><span class="token punctuation">:</span> 100%<span class="token punctuation">;</span>
    <span class="token property">height</span><span class="token punctuation">:</span> 50px<span class="token punctuation">;</span>
    <span class="token property">background-color</span><span class="token punctuation">:</span> <span class="token function">rgba</span><span class="token punctuation">(</span>0<span class="token punctuation">,</span> 0<span class="token punctuation">,</span> 0<span class="token punctuation">,</span> 0.5<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token property">bottom</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
    <span class="token property">left</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.video_player .menu .play</span> <span class="token punctuation">{</span>
    <span class="token property">position</span><span class="token punctuation">:</span> absolute<span class="token punctuation">;</span>
    <span class="token property">width</span><span class="token punctuation">:</span> 50px<span class="token punctuation">;</span>
    <span class="token property">height</span><span class="token punctuation">:</span> 30px<span class="token punctuation">;</span>
    <span class="token property">border</span><span class="token punctuation">:</span> 1px solid white<span class="token punctuation">;</span>
    <span class="token property">border-radius</span><span class="token punctuation">:</span> 10px<span class="token punctuation">;</span>
    <span class="token property">color</span><span class="token punctuation">:</span> white<span class="token punctuation">;</span>
    <span class="token property">text-align</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>
    <span class="token property">line-height</span><span class="token punctuation">:</span> 30px<span class="token punctuation">;</span>
    <span class="token property">top</span><span class="token punctuation">:</span> 50%<span class="token punctuation">;</span>
    <span class="token property">left</span><span class="token punctuation">:</span> 30px<span class="token punctuation">;</span>
    <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">translateY</span><span class="token punctuation">(</span>-50%<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token property">cursor</span><span class="token punctuation">:</span> pointer<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.video_player .menu .play:hover</span> <span class="token punctuation">{</span>
    <span class="token property">background-color</span><span class="token punctuation">:</span> <span class="token function">rgb</span><span class="token punctuation">(</span>219<span class="token punctuation">,</span> 74<span class="token punctuation">,</span> 74<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.time</span> <span class="token punctuation">{</span>
    <span class="token property">position</span><span class="token punctuation">:</span> absolute<span class="token punctuation">;</span>
    <span class="token property">width</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span>
    <span class="token property">height</span><span class="token punctuation">:</span> 30px<span class="token punctuation">;</span>
    <span class="token property">color</span><span class="token punctuation">:</span> white<span class="token punctuation">;</span>
    <span class="token property">text-align</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>
    <span class="token property">line-height</span><span class="token punctuation">:</span> 30px<span class="token punctuation">;</span>
    <span class="token property">top</span><span class="token punctuation">:</span> 50%<span class="token punctuation">;</span>
    <span class="token property">left</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span>
    <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">translateY</span><span class="token punctuation">(</span>-50%<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">/* 进度条 */</span>
<span class="token selector">.progress_bar</span> <span class="token punctuation">{</span>
    <span class="token property">position</span><span class="token punctuation">:</span> absolute<span class="token punctuation">;</span>
    <span class="token property">top</span><span class="token punctuation">:</span> -6px<span class="token punctuation">;</span>
    <span class="token property">left</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
    <span class="token property">width</span><span class="token punctuation">:</span> 100%<span class="token punctuation">;</span>
    <span class="token property">height</span><span class="token punctuation">:</span> 6px<span class="token punctuation">;</span>
    <span class="token property">background-color</span><span class="token punctuation">:</span> #ccc<span class="token punctuation">;</span>
    <span class="token property">transition</span><span class="token punctuation">:</span> height .2s linear<span class="token punctuation">,</span> top .2s linear<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.progress_bar&gt;div</span> <span class="token punctuation">{</span>
    <span class="token property">width</span><span class="token punctuation">:</span> 0px<span class="token punctuation">;</span>
    <span class="token property">height</span><span class="token punctuation">:</span> 100%<span class="token punctuation">;</span>
    <span class="token property">background-color</span><span class="token punctuation">:</span> <span class="token function">rgb</span><span class="token punctuation">(</span>250<span class="token punctuation">,</span> 139<span class="token punctuation">,</span> 12<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.progress_bar&gt;i</span> <span class="token punctuation">{</span>
    <span class="token property">position</span><span class="token punctuation">:</span> absolute<span class="token punctuation">;</span>
    <span class="token property">top</span><span class="token punctuation">:</span> -2px<span class="token punctuation">;</span>
    <span class="token property">left</span><span class="token punctuation">:</span> 0px<span class="token punctuation">;</span>
    <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">translateX</span><span class="token punctuation">(</span>-50%<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token property">width</span><span class="token punctuation">:</span> 10px<span class="token punctuation">;</span>
    <span class="token property">height</span><span class="token punctuation">:</span> 10px<span class="token punctuation">;</span>
    <span class="token property">background-color</span><span class="token punctuation">:</span> red<span class="token punctuation">;</span>
    <span class="token property">border-radius</span><span class="token punctuation">:</span> 20px<span class="token punctuation">;</span>
    <span class="token property">transition</span><span class="token punctuation">:</span> height .2s linear<span class="token punctuation">,</span> top .2s linear<span class="token punctuation">,</span> width .2s linear<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">/* 倍数 */</span>
<span class="token selector">li</span> <span class="token punctuation">{</span>
    <span class="token property">list-style</span><span class="token punctuation">:</span> none<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.speed</span> <span class="token punctuation">{</span>
    <span class="token property">position</span><span class="token punctuation">:</span> absolute<span class="token punctuation">;</span>
    <span class="token property">top</span><span class="token punctuation">:</span> 50%<span class="token punctuation">;</span>
    <span class="token property">right</span><span class="token punctuation">:</span> 150px<span class="token punctuation">;</span>
    <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">translateY</span><span class="token punctuation">(</span>-50%<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token property">color</span><span class="token punctuation">:</span> white<span class="token punctuation">;</span>
    <span class="token property">text-align</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>
    <span class="token property">line-height</span><span class="token punctuation">:</span> 30px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.speed div</span> <span class="token punctuation">{</span>
    <span class="token property">width</span><span class="token punctuation">:</span> 50px<span class="token punctuation">;</span>
    <span class="token property">height</span><span class="token punctuation">:</span> 30px<span class="token punctuation">;</span>
    <span class="token property">border</span><span class="token punctuation">:</span> 1px solid white<span class="token punctuation">;</span>
    <span class="token property">border-radius</span><span class="token punctuation">:</span> 10px<span class="token punctuation">;</span>
    <span class="token property">cursor</span><span class="token punctuation">:</span> pointer<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.speed ul</span> <span class="token punctuation">{</span>
    <span class="token property">position</span><span class="token punctuation">:</span> absolute<span class="token punctuation">;</span>
    <span class="token property">top</span><span class="token punctuation">:</span> -170px<span class="token punctuation">;</span>
    <span class="token property">left</span><span class="token punctuation">:</span> -4px<span class="token punctuation">;</span>
    <span class="token property">padding-bottom</span><span class="token punctuation">:</span> 25px<span class="token punctuation">;</span>
    <span class="token property">display</span><span class="token punctuation">:</span> none<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.speed ul li</span> <span class="token punctuation">{</span>
    <span class="token property">padding</span><span class="token punctuation">:</span> 0 10px<span class="token punctuation">;</span>
    <span class="token property">background-color</span><span class="token punctuation">:</span> <span class="token function">rgba</span><span class="token punctuation">(</span>0<span class="token punctuation">,</span> 0<span class="token punctuation">,</span> 0<span class="token punctuation">,</span> 0.5<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.speed ul li:nth-of-type(1)</span> <span class="token punctuation">{</span>
    <span class="token property">border-top-left-radius</span><span class="token punctuation">:</span> 10px<span class="token punctuation">;</span>
    <span class="token property">border-top-right-radius</span><span class="token punctuation">:</span> 10px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.speed ul li:nth-last-of-type(1)</span> <span class="token punctuation">{</span>
    <span class="token property">border-bottom-left-radius</span><span class="token punctuation">:</span> 10px<span class="token punctuation">;</span>
    <span class="token property">border-bottom-right-radius</span><span class="token punctuation">:</span> 10px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.speed ul li:hover</span> <span class="token punctuation">{</span>
    <span class="token property">background-color</span><span class="token punctuation">:</span> <span class="token function">rgb</span><span class="token punctuation">(</span>219<span class="token punctuation">,</span> 74<span class="token punctuation">,</span> 74<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.speed div:hover</span> <span class="token punctuation">{</span>
    <span class="token property">background-color</span><span class="token punctuation">:</span> <span class="token function">rgb</span><span class="token punctuation">(</span>219<span class="token punctuation">,</span> 74<span class="token punctuation">,</span> 74<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">/* 音量 */</span>
<span class="token selector">.volume</span> <span class="token punctuation">{</span>
    <span class="token property">position</span><span class="token punctuation">:</span> absolute<span class="token punctuation">;</span>
    <span class="token property">top</span><span class="token punctuation">:</span> 50%<span class="token punctuation">;</span>
    <span class="token property">right</span><span class="token punctuation">:</span> 80px<span class="token punctuation">;</span>
    <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">translateY</span><span class="token punctuation">(</span>-50%<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token property">color</span><span class="token punctuation">:</span> white<span class="token punctuation">;</span>
    <span class="token property">text-align</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>
    <span class="token property">line-height</span><span class="token punctuation">:</span> 30px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.volume&gt;span</span> <span class="token punctuation">{</span>
    <span class="token property">display</span><span class="token punctuation">:</span> block<span class="token punctuation">;</span>
    <span class="token property">width</span><span class="token punctuation">:</span> 50px<span class="token punctuation">;</span>
    <span class="token property">height</span><span class="token punctuation">:</span> 30px<span class="token punctuation">;</span>
    <span class="token property">border</span><span class="token punctuation">:</span> 1px solid white<span class="token punctuation">;</span>
    <span class="token property">border-radius</span><span class="token punctuation">:</span> 10px<span class="token punctuation">;</span>
    <span class="token property">cursor</span><span class="token punctuation">:</span> pointer<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.volume&gt;span:hover</span> <span class="token punctuation">{</span>
    <span class="token property">background-color</span><span class="token punctuation">:</span> <span class="token function">rgb</span><span class="token punctuation">(</span>219<span class="token punctuation">,</span> 74<span class="token punctuation">,</span> 74<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.volume .Controller</span> <span class="token punctuation">{</span>
    <span class="token property">position</span><span class="token punctuation">:</span> absolute<span class="token punctuation">;</span>
    <span class="token property">top</span><span class="token punctuation">:</span> -170px<span class="token punctuation">;</span>
    <span class="token property">width</span><span class="token punctuation">:</span> 50px<span class="token punctuation">;</span>
    <span class="token property">height</span><span class="token punctuation">:</span> 150px<span class="token punctuation">;</span>
    <span class="token property">border-radius</span><span class="token punctuation">:</span> 10px<span class="token punctuation">;</span>
    <span class="token property">background-color</span><span class="token punctuation">:</span> <span class="token function">rgba</span><span class="token punctuation">(</span>0<span class="token punctuation">,</span> 0<span class="token punctuation">,</span> 0<span class="token punctuation">,</span> 0.5<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token property">display</span><span class="token punctuation">:</span> none<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.volume .Controller div</span> <span class="token punctuation">{</span>
    <span class="token property">position</span><span class="token punctuation">:</span> absolute<span class="token punctuation">;</span>
    <span class="token property">top</span><span class="token punctuation">:</span> 50%<span class="token punctuation">;</span>
    <span class="token property">left</span><span class="token punctuation">:</span> 50%<span class="token punctuation">;</span>
    <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">translateY</span><span class="token punctuation">(</span>-50%<span class="token punctuation">)</span> <span class="token function">translateX</span><span class="token punctuation">(</span>-50%<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token property">width</span><span class="token punctuation">:</span> 5px<span class="token punctuation">;</span>
    <span class="token property">height</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span>
    <span class="token property">background-color</span><span class="token punctuation">:</span> #ccc<span class="token punctuation">;</span>

<span class="token punctuation">}</span>

<span class="token selector">.volume .Controller div::before</span> <span class="token punctuation">{</span>
    <span class="token property">position</span><span class="token punctuation">:</span> absolute<span class="token punctuation">;</span>
    <span class="token property">content</span><span class="token punctuation">:</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">;</span>
    <span class="token property">bottom</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
    <span class="token property">left</span><span class="token punctuation">:</span> 50%<span class="token punctuation">;</span>
    <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">translateX</span><span class="token punctuation">(</span>-50%<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token property">width</span><span class="token punctuation">:</span> 5px<span class="token punctuation">;</span>
    <span class="token property">height</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span>
    <span class="token property">background-color</span><span class="token punctuation">:</span> <span class="token function">rgb</span><span class="token punctuation">(</span>250<span class="token punctuation">,</span> 139<span class="token punctuation">,</span> 12<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.volume .Controller div::after</span> <span class="token punctuation">{</span>
    <span class="token property">position</span><span class="token punctuation">:</span> absolute<span class="token punctuation">;</span>
    <span class="token property">content</span><span class="token punctuation">:</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">;</span>
    <span class="token property">bottom</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span>
    <span class="token property">left</span><span class="token punctuation">:</span> 50%<span class="token punctuation">;</span>
    <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">translateX</span><span class="token punctuation">(</span>-50%<span class="token punctuation">)</span> <span class="token function">translateY</span><span class="token punctuation">(</span>4px<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token property">width</span><span class="token punctuation">:</span> 8px<span class="token punctuation">;</span>
    <span class="token property">height</span><span class="token punctuation">:</span> 8px<span class="token punctuation">;</span>
    <span class="token property">background-color</span><span class="token punctuation">:</span> white<span class="token punctuation">;</span>
    <span class="token property">border-radius</span><span class="token punctuation">:</span> 10px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token comment">/* 全屏 */</span>
<span class="token selector">.full</span> <span class="token punctuation">{</span>
    <span class="token property">position</span><span class="token punctuation">:</span> absolute<span class="token punctuation">;</span>
    <span class="token property">width</span><span class="token punctuation">:</span> 50px<span class="token punctuation">;</span>
    <span class="token property">height</span><span class="token punctuation">:</span> 30px<span class="token punctuation">;</span>
    <span class="token property">border</span><span class="token punctuation">:</span> 1px solid white<span class="token punctuation">;</span>
    <span class="token property">border-radius</span><span class="token punctuation">:</span> 10px<span class="token punctuation">;</span>
    <span class="token property">color</span><span class="token punctuation">:</span> white<span class="token punctuation">;</span>
    <span class="token property">text-align</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>
    <span class="token property">line-height</span><span class="token punctuation">:</span> 30px<span class="token punctuation">;</span>
    <span class="token property">top</span><span class="token punctuation">:</span> 50%<span class="token punctuation">;</span>
    <span class="token property">right</span><span class="token punctuation">:</span> 10px<span class="token punctuation">;</span>
    <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">translateY</span><span class="token punctuation">(</span>-50%<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token property">cursor</span><span class="token punctuation">:</span> pointer<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">&gt;</span></span>

    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&#39;</span>app<span class="token punctuation">&#39;</span></span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>app<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>


        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>video_player<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>video</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>VID20161120192409.mp4<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>video</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>menu<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
                <span class="token comment">&lt;!-- 播放 暂停 --&gt;</span>
                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>play<span class="token punctuation">&quot;</span></span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&#39;</span>play<span class="token punctuation">&#39;</span></span><span class="token punctuation">&gt;</span></span> {{msg}} <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
                <span class="token comment">&lt;!-- 时间 --&gt;</span>
                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>time<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span> {{time}} <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
                <span class="token comment">&lt;!-- 进度条 --&gt;</span>
                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>progress_bar<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
                    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
                    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>i</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>i</span><span class="token punctuation">&gt;</span></span>
                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
                <span class="token comment">&lt;!-- 倍数 --&gt;</span>
                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>speed<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
                    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span>倍数<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
                    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ul</span><span class="token punctuation">&gt;</span></span>
                        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">&gt;</span></span>0.5x<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">&gt;</span></span>
                        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">&gt;</span></span>1.0x<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">&gt;</span></span>
                        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">&gt;</span></span>1.5x<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">&gt;</span></span>
                        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">&gt;</span></span>1.25x<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">&gt;</span></span>
                        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">&gt;</span></span>2.0x<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">&gt;</span></span>
                    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ul</span><span class="token punctuation">&gt;</span></span>
                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
                <span class="token comment">&lt;!-- 音量 --&gt;</span>
                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>volume<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
                    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span><span class="token punctuation">&gt;</span></span>音量<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">&gt;</span></span>
                    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>Controller<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
                        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
                        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>i</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>i</span><span class="token punctuation">&gt;</span></span>
                    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
                <span class="token comment">&lt;!-- 全屏 --&gt;</span>
                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>full<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>全屏<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>

            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>

    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>text/javascript<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
    <span class="token comment">//    自定义播放，暂停</span>
    <span class="token comment">// 添加时间( duration(视频总时长) 和 currentTime(当前播放到哪里的时间) )</span>

    <span class="token comment">// 添加进度条，与点击跳转。</span>
    <span class="token comment">//  (如果发现你不能跳转，那么请看下浏览器的Response Headers 里面，</span>
    <span class="token comment">// 如果你的http协议里面 只有 content-length  和 content-type   </span>
    <span class="token comment">// 没有 content-Range: bytes    那么这个时候不允许 点击跳转(不能设置时间跳转))</span>

    <span class="token comment">// 里面有一条计算公式，简单来说就是。当前时间 / 总时长  *  数    可以算出 当前时间，在这个数 里面的 位置。</span>



    <span class="token comment">// 添加倍数(video.palybackRate = 1.0)</span>


    <span class="token keyword">var</span> vm <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Vue</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
        <span class="token literal-property property">el</span><span class="token operator">:</span> <span class="token string">&#39;#app&#39;</span><span class="token punctuation">,</span>
        <span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span> <span class="token punctuation">{</span>
                <span class="token literal-property property">msg</span><span class="token operator">:</span> <span class="token string">&#39;播放&#39;</span><span class="token punctuation">,</span>
                <span class="token literal-property property">time</span><span class="token operator">:</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">,</span>
                <span class="token literal-property property">lock</span><span class="token operator">:</span><span class="token boolean">true</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token literal-property property">methods</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token function">play</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token keyword">var</span> play <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementsByClassName</span><span class="token punctuation">(</span><span class="token string">&#39;play&#39;</span><span class="token punctuation">)</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
                <span class="token keyword">var</span> video <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementsByTagName</span><span class="token punctuation">(</span><span class="token string">&#39;video&#39;</span><span class="token punctuation">)</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
                <span class="token keyword">var</span> bar <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementsByClassName</span><span class="token punctuation">(</span><span class="token string">&#39;progress_bar&#39;</span><span class="token punctuation">)</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
                <span class="token keyword">var</span> Current <span class="token operator">=</span> bar<span class="token punctuation">.</span><span class="token function">getElementsByTagName</span><span class="token punctuation">(</span><span class="token string">&#39;div&#39;</span><span class="token punctuation">)</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
                <span class="token keyword">var</span> Dot <span class="token operator">=</span> bar<span class="token punctuation">.</span><span class="token function">getElementsByTagName</span><span class="token punctuation">(</span><span class="token string">&#39;i&#39;</span><span class="token punctuation">)</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">;</span>

                <span class="token keyword">var</span> speed <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementsByClassName</span><span class="token punctuation">(</span><span class="token string">&#39;speed&#39;</span><span class="token punctuation">)</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">getElementsByTagName</span><span class="token punctuation">(</span><span class="token string">&#39;div&#39;</span><span class="token punctuation">)</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
                <span class="token keyword">var</span> ul <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementsByClassName</span><span class="token punctuation">(</span><span class="token string">&#39;speed&#39;</span><span class="token punctuation">)</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">getElementsByTagName</span><span class="token punctuation">(</span><span class="token string">&#39;ul&#39;</span><span class="token punctuation">)</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
                <span class="token keyword">var</span> Controller <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementsByClassName</span><span class="token punctuation">(</span><span class="token string">&#39;Controller&#39;</span><span class="token punctuation">)</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
                <span class="token keyword">var</span> volume <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementsByClassName</span><span class="token punctuation">(</span><span class="token string">&#39;volume&#39;</span><span class="token punctuation">)</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">getElementsByTagName</span><span class="token punctuation">(</span><span class="token string">&#39;span&#39;</span><span class="token punctuation">)</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
                <span class="token keyword">var</span> full <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementsByClassName</span><span class="token punctuation">(</span><span class="token string">&#39;full&#39;</span><span class="token punctuation">)</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
                <span class="token keyword">var</span> video_player <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementsByClassName</span><span class="token punctuation">(</span><span class="token string">&#39;video_player&#39;</span><span class="token punctuation">)</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span>

                <span class="token keyword">if</span> <span class="token punctuation">(</span>video<span class="token punctuation">.</span>paused<span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token comment">//判断是否已经播放了，如果还没播放，返回true </span>
                    video<span class="token punctuation">.</span><span class="token function">play</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//触发方法，播放视频</span>
                    <span class="token keyword">this</span><span class="token punctuation">.</span>msg <span class="token operator">=</span> <span class="token string">&quot;暂停&quot;</span><span class="token punctuation">;</span> <span class="token comment">//修改 文字。</span>
                <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
                    video<span class="token punctuation">.</span><span class="token function">pause</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//暂停播放。</span>
                    <span class="token keyword">this</span><span class="token punctuation">.</span>msg <span class="token operator">=</span> <span class="token string">&quot;播放&quot;</span><span class="token punctuation">;</span>
                <span class="token punctuation">}</span>


                video<span class="token punctuation">.</span><span class="token function-variable function">onloadedmetadata</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token comment">// 视频加载完成触发,然后我们把时间添加到time标签上去。</span>
                    vm<span class="token punctuation">.</span>time <span class="token operator">=</span> <span class="token function">parseInt</span><span class="token punctuation">(</span>video<span class="token punctuation">.</span>currentTime <span class="token operator">/</span> <span class="token number">60</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token string">&quot;:&quot;</span> <span class="token operator">+</span> <span class="token function">parseInt</span><span class="token punctuation">(</span>video<span class="token punctuation">.</span>currentTime <span class="token operator">%</span>
                        <span class="token number">60</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token string">&quot;/&quot;</span> <span class="token operator">+</span> <span class="token function">parseInt</span><span class="token punctuation">(</span>video<span class="token punctuation">.</span>duration <span class="token operator">/</span> <span class="token number">60</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token string">&quot;:&quot;</span> <span class="token operator">+</span> <span class="token function">parseInt</span><span class="token punctuation">(</span>video<span class="token punctuation">.</span>duration <span class="token operator">%</span> <span class="token number">60</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token punctuation">}</span>

                <span class="token function">setInterval</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token comment">//每隔 1秒，刷新一下时间。</span>
                    vm<span class="token punctuation">.</span>time <span class="token operator">=</span> <span class="token function">parseInt</span><span class="token punctuation">(</span>video<span class="token punctuation">.</span>currentTime <span class="token operator">/</span> <span class="token number">60</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token string">&quot;:&quot;</span> <span class="token operator">+</span> <span class="token function">parseInt</span><span class="token punctuation">(</span>video
                        <span class="token punctuation">.</span>currentTime <span class="token operator">%</span> <span class="token number">60</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token string">&quot;/&quot;</span> <span class="token operator">+</span> <span class="token function">parseInt</span><span class="token punctuation">(</span>video<span class="token punctuation">.</span>duration <span class="token operator">/</span> <span class="token number">60</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token string">&quot;:&quot;</span> <span class="token operator">+</span> <span class="token function">parseInt</span><span class="token punctuation">(</span>
                        video<span class="token punctuation">.</span>duration <span class="token operator">%</span> <span class="token number">60</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">1000</span><span class="token punctuation">)</span>


                bar<span class="token punctuation">.</span><span class="token function-variable function">onmouseover</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token comment">//鼠标进入的时候，进度条变大</span>
                    <span class="token keyword">this</span><span class="token punctuation">.</span>style<span class="token punctuation">.</span>top <span class="token operator">=</span> <span class="token string">&#39;-10px&#39;</span><span class="token punctuation">;</span>
                    <span class="token keyword">this</span><span class="token punctuation">.</span>style<span class="token punctuation">.</span>height <span class="token operator">=</span> <span class="token string">&#39;10px&#39;</span><span class="token punctuation">;</span>
                    Dot<span class="token punctuation">.</span>style<span class="token punctuation">.</span>width <span class="token operator">=</span> <span class="token string">&#39;18px&#39;</span><span class="token punctuation">;</span>
                    Dot<span class="token punctuation">.</span>style<span class="token punctuation">.</span>height <span class="token operator">=</span> <span class="token string">&#39;18px&#39;</span><span class="token punctuation">;</span>
                    Dot<span class="token punctuation">.</span>style<span class="token punctuation">.</span>top <span class="token operator">=</span> <span class="token string">&#39;-5px&#39;</span><span class="token punctuation">;</span>
                <span class="token punctuation">}</span>
                bar<span class="token punctuation">.</span><span class="token function-variable function">onmouseout</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                    <span class="token keyword">this</span><span class="token punctuation">.</span>style<span class="token punctuation">.</span>top <span class="token operator">=</span> <span class="token string">&#39;-6px&#39;</span><span class="token punctuation">;</span>
                    <span class="token keyword">this</span><span class="token punctuation">.</span>style<span class="token punctuation">.</span>height <span class="token operator">=</span> <span class="token string">&#39;6px&#39;</span><span class="token punctuation">;</span>
                    Dot<span class="token punctuation">.</span>style<span class="token punctuation">.</span>width <span class="token operator">=</span> <span class="token string">&#39;10px&#39;</span><span class="token punctuation">;</span>
                    Dot<span class="token punctuation">.</span>style<span class="token punctuation">.</span>height <span class="token operator">=</span> <span class="token string">&#39;10px&#39;</span><span class="token punctuation">;</span>
                    Dot<span class="token punctuation">.</span>style<span class="token punctuation">.</span>top <span class="token operator">=</span> <span class="token string">&#39;-2px&#39;</span><span class="token punctuation">;</span>
                <span class="token punctuation">}</span>

                bar<span class="token punctuation">.</span><span class="token function-variable function">onmousedown</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">e</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token comment">// 鼠标点击的时候，跳转</span>
                    Current<span class="token punctuation">.</span>style<span class="token punctuation">.</span>width <span class="token operator">=</span> e<span class="token punctuation">.</span>layerX <span class="token operator">+</span> <span class="token string">&#39;px&#39;</span><span class="token punctuation">;</span> <span class="token comment">//e.layerX 是点击的时候的位置。</span>
                    Dot<span class="token punctuation">.</span>style<span class="token punctuation">.</span>left <span class="token operator">=</span> e<span class="token punctuation">.</span>layerX <span class="token operator">+</span> <span class="token string">&#39;px&#39;</span><span class="token punctuation">;</span>
                    video<span class="token punctuation">.</span>currentTime <span class="token operator">=</span> e<span class="token punctuation">.</span>layerX <span class="token operator">/</span> <span class="token function">parseInt</span><span class="token punctuation">(</span>window<span class="token punctuation">.</span><span class="token function">getComputedStyle</span><span class="token punctuation">(</span>video<span class="token punctuation">,</span> <span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">.</span>width<span class="token punctuation">)</span> <span class="token operator">*</span>
                        video<span class="token punctuation">.</span>duration<span class="token punctuation">;</span> <span class="token comment">//计算出点击的位置在总时间里面占多少。</span>
                    vm<span class="token punctuation">.</span>time <span class="token operator">=</span> <span class="token function">parseInt</span><span class="token punctuation">(</span>video<span class="token punctuation">.</span>currentTime <span class="token operator">/</span> <span class="token number">60</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token string">&quot;:&quot;</span> <span class="token operator">+</span> <span class="token function">parseInt</span><span class="token punctuation">(</span>video<span class="token punctuation">.</span>currentTime <span class="token operator">%</span>
                        <span class="token number">60</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token string">&quot;/&quot;</span> <span class="token operator">+</span> <span class="token function">parseInt</span><span class="token punctuation">(</span>video<span class="token punctuation">.</span>duration <span class="token operator">/</span> <span class="token number">60</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token string">&quot;:&quot;</span> <span class="token operator">+</span> <span class="token function">parseInt</span><span class="token punctuation">(</span>video<span class="token punctuation">.</span>duration <span class="token operator">%</span> <span class="token number">60</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token punctuation">}</span>


                <span class="token comment">// 倍数</span>
                speed<span class="token punctuation">.</span><span class="token function-variable function">onclick</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                    ul<span class="token punctuation">.</span>style<span class="token punctuation">.</span>display <span class="token operator">=</span> <span class="token string">&#39;block&#39;</span><span class="token punctuation">;</span>
                    <span class="token keyword">this</span><span class="token punctuation">.</span>style<span class="token punctuation">.</span>backgroundColor <span class="token operator">=</span> <span class="token string">&#39;rgb(219, 74, 74)&#39;</span><span class="token punctuation">;</span>
                <span class="token punctuation">}</span>

                speed<span class="token punctuation">.</span><span class="token function-variable function">onmouseout</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                    ul<span class="token punctuation">.</span>style<span class="token punctuation">.</span>display <span class="token operator">=</span> <span class="token string">&#39;none&#39;</span><span class="token punctuation">;</span>
                    <span class="token keyword">this</span><span class="token punctuation">.</span>style<span class="token punctuation">.</span>backgroundColor <span class="token operator">=</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">;</span>
                <span class="token punctuation">}</span>

                ul<span class="token punctuation">.</span><span class="token function-variable function">onmouseover</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                    ul<span class="token punctuation">.</span>style<span class="token punctuation">.</span>display <span class="token operator">=</span> <span class="token string">&#39;block&#39;</span><span class="token punctuation">;</span>
                    speed<span class="token punctuation">.</span>style<span class="token punctuation">.</span>backgroundColor <span class="token operator">=</span> <span class="token string">&#39;rgb(219, 74, 74)&#39;</span><span class="token punctuation">;</span>
                <span class="token punctuation">}</span>
                ul<span class="token punctuation">.</span><span class="token function-variable function">onmouseout</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                    ul<span class="token punctuation">.</span>style<span class="token punctuation">.</span>display <span class="token operator">=</span> <span class="token string">&#39;none&#39;</span><span class="token punctuation">;</span>
                    speed<span class="token punctuation">.</span>style<span class="token punctuation">.</span>backgroundColor <span class="token operator">=</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">;</span>
                <span class="token punctuation">}</span>

                <span class="token keyword">var</span> lis <span class="token operator">=</span> ul<span class="token punctuation">.</span><span class="token function">getElementsByTagName</span><span class="token punctuation">(</span><span class="token string">&#39;li&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">var</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> lis<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                    lis<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function-variable function">onclick</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                        video<span class="token punctuation">.</span>playbackRate <span class="token operator">=</span> <span class="token function">parseFloat</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>innerHTML<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//调节倍数 0 到正无穷</span>
                        speed<span class="token punctuation">.</span>innerHTML <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>innerHTML<span class="token punctuation">;</span>
                    <span class="token punctuation">}</span>
                <span class="token punctuation">}</span>

                <span class="token comment">// 音量</span>
                volume<span class="token punctuation">.</span><span class="token function-variable function">onclick</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                    Controller<span class="token punctuation">.</span>style<span class="token punctuation">.</span>display <span class="token operator">=</span> <span class="token string">&#39;block&#39;</span><span class="token punctuation">;</span>
                    <span class="token keyword">this</span><span class="token punctuation">.</span>style<span class="token punctuation">.</span>backgroundColor <span class="token operator">=</span> <span class="token string">&#39;rgb(219, 74, 74)&#39;</span><span class="token punctuation">;</span>
                <span class="token punctuation">}</span>

                Controller<span class="token punctuation">.</span><span class="token function">getElementsByTagName</span><span class="token punctuation">(</span><span class="token string">&#39;div&#39;</span><span class="token punctuation">)</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function-variable function">onmousedown</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">e</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function-variable function">onmousemove</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">e</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token number">100</span> <span class="token operator">-</span> e<span class="token punctuation">.</span>offsetY <span class="token operator">&gt;</span> <span class="token number">100</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token comment">// 这里为什么要减100 是因为，Y的顶点是0， 但是我们日常是用顶点是100，把数倒了而已。</span>
                            document<span class="token punctuation">.</span>styleSheets<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">addRule</span><span class="token punctuation">(</span><span class="token string">&#39;.volume .Controller div::before&#39;</span><span class="token punctuation">,</span>
                                <span class="token string">&#39;height: 100px&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 修改伪元素。 因为我用的是伪元素做音量条</span>
                            document<span class="token punctuation">.</span>styleSheets<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">addRule</span><span class="token punctuation">(</span><span class="token string">&#39;.volume .Controller div::after&#39;</span><span class="token punctuation">,</span>
                                <span class="token string">&#39;bottom: 100px&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                            video<span class="token punctuation">.</span>volume <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span> <span class="token comment">// 修改音量。 0-1 之间， 1是默认音量</span>
                        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token number">100</span> <span class="token operator">-</span> e<span class="token punctuation">.</span>offsetY <span class="token operator">&lt;</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                            document<span class="token punctuation">.</span>styleSheets<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">addRule</span><span class="token punctuation">(</span><span class="token string">&#39;.volume .Controller div::before&#39;</span><span class="token punctuation">,</span>
                                <span class="token string">&#39;height: 0px&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                            document<span class="token punctuation">.</span>styleSheets<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">addRule</span><span class="token punctuation">(</span><span class="token string">&#39;.volume .Controller div::after&#39;</span><span class="token punctuation">,</span>
                                <span class="token string">&#39;bottom: 0px&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                            video<span class="token punctuation">.</span>volume <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
                        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
                            document<span class="token punctuation">.</span>styleSheets<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">addRule</span><span class="token punctuation">(</span><span class="token string">&#39;.volume .Controller div::before&#39;</span><span class="token punctuation">,</span>
                                <span class="token string">&#39;height: &#39;</span> <span class="token operator">+</span> <span class="token punctuation">(</span><span class="token number">100</span> <span class="token operator">-</span> e<span class="token punctuation">.</span>offsetY<span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token string">&#39;px&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                            document<span class="token punctuation">.</span>styleSheets<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">addRule</span><span class="token punctuation">(</span><span class="token string">&#39;.volume .Controller div::after&#39;</span><span class="token punctuation">,</span>
                                <span class="token string">&#39;bottom: &#39;</span> <span class="token operator">+</span> <span class="token punctuation">(</span><span class="token number">100</span> <span class="token operator">-</span> e<span class="token punctuation">.</span>offsetY<span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token string">&#39;px&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                            video<span class="token punctuation">.</span>volume <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token number">100</span> <span class="token operator">-</span> e<span class="token punctuation">.</span>offsetY<span class="token punctuation">)</span> <span class="token operator">*</span> <span class="token number">0.01</span><span class="token punctuation">;</span>
                        <span class="token punctuation">}</span>

                    <span class="token punctuation">}</span>
                    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function-variable function">onmouseout</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                        Controller<span class="token punctuation">.</span><span class="token function-variable function">onmousemove</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">e</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                            <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token number">150</span> <span class="token operator">-</span> e<span class="token punctuation">.</span>offsetY <span class="token operator">-</span> <span class="token number">25</span> <span class="token operator">&gt;</span> <span class="token number">100</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                                document<span class="token punctuation">.</span>styleSheets<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">addRule</span><span class="token punctuation">(</span><span class="token string">&#39;.volume .Controller div::before&#39;</span><span class="token punctuation">,</span>
                                    <span class="token string">&#39;height: 100px&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                                document<span class="token punctuation">.</span>styleSheets<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">addRule</span><span class="token punctuation">(</span><span class="token string">&#39;.volume .Controller div::after&#39;</span><span class="token punctuation">,</span>
                                    <span class="token string">&#39;bottom: 100px&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                                video<span class="token punctuation">.</span>volume <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
                            <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token number">150</span> <span class="token operator">-</span> e<span class="token punctuation">.</span>offsetY <span class="token operator">-</span> <span class="token number">25</span> <span class="token operator">&lt;</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                                document<span class="token punctuation">.</span>styleSheets<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">addRule</span><span class="token punctuation">(</span><span class="token string">&#39;.volume .Controller div::before&#39;</span><span class="token punctuation">,</span>
                                    <span class="token string">&#39;height: 0px&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                                document<span class="token punctuation">.</span>styleSheets<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">addRule</span><span class="token punctuation">(</span><span class="token string">&#39;.volume .Controller div::after&#39;</span><span class="token punctuation">,</span>
                                    <span class="token string">&#39;bottom: 0px&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                                video<span class="token punctuation">.</span>volume <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
                            <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
                                document<span class="token punctuation">.</span>styleSheets<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">addRule</span><span class="token punctuation">(</span><span class="token string">&#39;.volume .Controller div::before&#39;</span><span class="token punctuation">,</span>
                                    <span class="token string">&#39;height: &#39;</span> <span class="token operator">+</span> <span class="token punctuation">(</span><span class="token number">150</span> <span class="token operator">-</span> e<span class="token punctuation">.</span>offsetY <span class="token operator">-</span> <span class="token number">25</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token string">&#39;px&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                                document<span class="token punctuation">.</span>styleSheets<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">addRule</span><span class="token punctuation">(</span><span class="token string">&#39;.volume .Controller div::after&#39;</span><span class="token punctuation">,</span>
                                    <span class="token string">&#39;bottom: &#39;</span> <span class="token operator">+</span> <span class="token punctuation">(</span><span class="token number">150</span> <span class="token operator">-</span> e<span class="token punctuation">.</span>offsetY <span class="token operator">-</span> <span class="token number">25</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token string">&#39;px&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                                video<span class="token punctuation">.</span>volume <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token number">150</span> <span class="token operator">-</span> e<span class="token punctuation">.</span>offsetY <span class="token operator">-</span> <span class="token number">25</span><span class="token punctuation">)</span> <span class="token operator">*</span> <span class="token number">0.01</span><span class="token punctuation">;</span>
                            <span class="token punctuation">}</span>
                            Controller<span class="token punctuation">.</span><span class="token function">getElementsByTagName</span><span class="token punctuation">(</span><span class="token string">&#39;div&#39;</span><span class="token punctuation">)</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function-variable function">onmouseover</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                                Controller<span class="token punctuation">.</span>onmousemove <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
                                Controller<span class="token punctuation">.</span><span class="token function">getElementsByTagName</span><span class="token punctuation">(</span><span class="token string">&#39;div&#39;</span><span class="token punctuation">)</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">.</span>onmousemove <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
                            <span class="token punctuation">}</span>

                        <span class="token punctuation">}</span>
                    <span class="token punctuation">}</span>
                    document<span class="token punctuation">.</span>body<span class="token punctuation">.</span><span class="token function-variable function">onmouseup</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                        Controller<span class="token punctuation">.</span>onmousemove <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
                        Controller<span class="token punctuation">.</span><span class="token function">getElementsByTagName</span><span class="token punctuation">(</span><span class="token string">&#39;div&#39;</span><span class="token punctuation">)</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">.</span>onmousemove <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
                        Controller<span class="token punctuation">.</span><span class="token function">getElementsByTagName</span><span class="token punctuation">(</span><span class="token string">&#39;div&#39;</span><span class="token punctuation">)</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">.</span>onmouseout <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
                        Controller<span class="token punctuation">.</span>style<span class="token punctuation">.</span>display <span class="token operator">=</span> <span class="token string">&#39;none&#39;</span><span class="token punctuation">;</span>
                        volume<span class="token punctuation">.</span>style<span class="token punctuation">.</span>backgroundColor <span class="token operator">=</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">;</span>
                    <span class="token punctuation">}</span>
                <span class="token punctuation">}</span>

                <span class="token comment">// 全屏</span>
                full<span class="token punctuation">.</span><span class="token function-variable function">onclick</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>

                    <span class="token keyword">if</span> <span class="token punctuation">(</span>vm<span class="token punctuation">.</span>lock<span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token comment">//声明一个变量来当状态。</span>
                        vm<span class="token punctuation">.</span>lock <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
                        video_player<span class="token punctuation">.</span>style<span class="token punctuation">.</span>height <span class="token operator">=</span> window<span class="token punctuation">.</span>screen<span class="token punctuation">.</span>height <span class="token operator">+</span> <span class="token string">&#39;px&#39;</span><span class="token punctuation">;</span> <span class="token comment">//获取屏幕的宽高</span>
                        video_player<span class="token punctuation">.</span>style<span class="token punctuation">.</span>width <span class="token operator">=</span> window<span class="token punctuation">.</span>screen<span class="token punctuation">.</span>width <span class="token operator">+</span> <span class="token string">&#39;px&#39;</span><span class="token punctuation">;</span>
                        document<span class="token punctuation">.</span>documentElement<span class="token punctuation">.</span><span class="token function">requestFullscreen</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//全屏模式</span>
                        full<span class="token punctuation">.</span>innerHTML <span class="token operator">=</span> <span class="token string">&#39;退出&#39;</span><span class="token punctuation">;</span>
                    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
                        vm<span class="token punctuation">.</span>lock <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
                        video_player<span class="token punctuation">.</span>style<span class="token punctuation">.</span>height <span class="token operator">=</span> <span class="token number">500</span> <span class="token operator">+</span> <span class="token string">&#39;px&#39;</span><span class="token punctuation">;</span>
                        video_player<span class="token punctuation">.</span>style<span class="token punctuation">.</span>width <span class="token operator">=</span> <span class="token number">1000</span> <span class="token operator">+</span> <span class="token string">&#39;px&#39;</span><span class="token punctuation">;</span>
                        document<span class="token punctuation">.</span><span class="token function">exitFullscreen</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//退出全屏</span>
                        full<span class="token punctuation">.</span>innerHTML <span class="token operator">=</span> <span class="token string">&#39;全屏&#39;</span><span class="token punctuation">;</span>
                    <span class="token punctuation">}</span>
                <span class="token punctuation">}</span>

            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre></div>`,38),c=[o];function e(u,l){return s(),a("div",null,c)}const i=n(p,[["render",e],["__file","cssvideo.html.vue"]]);export{i as default};
