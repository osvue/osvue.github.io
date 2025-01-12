import{_ as n,p as s,q as a,a1 as p}from"./framework-d81ad7e5.js";const t={},o=p(`<h2 id="tag" tabindex="-1"><a class="header-anchor" href="#tag" aria-hidden="true">#</a> tag</h2><blockquote><p>当div的宽高为0时，设border的宽度并设颜色，会发现div像是被分割为4个小三角形， 因此当我们要其中一个小三角时，只需要将其它三个隐藏即可（方法：把那三条边颜色设为transparent即可）</p></blockquote><div class="language-html" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span><span class="token punctuation">&gt;</span></span><span class="token style"><span class="token language-css">
    <span class="token selector">div</span><span class="token punctuation">{</span>
    <span class="token property">width</span><span class="token punctuation">:</span> 0px<span class="token punctuation">;</span>
    <span class="token property">height</span><span class="token punctuation">:</span> 0px<span class="token punctuation">;</span>
    <span class="token property">border-width</span><span class="token punctuation">:</span> 20px<span class="token punctuation">;</span>
    <span class="token property">border-style</span><span class="token punctuation">:</span> solid<span class="token punctuation">;</span>
    <span class="token property">border-color</span><span class="token punctuation">:</span> lightgreen pink yellow lightblue<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">&gt;</span></span>
     <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>  
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><h2 id="tag样式" tabindex="-1"><a class="header-anchor" href="#tag样式" aria-hidden="true">#</a> tag样式</h2><div class="language-css" data-ext="css"><pre class="language-css"><code>
    <span class="token selector">#tag</span> <span class="token punctuation">{</span>
        <span class="token property">width</span><span class="token punctuation">:</span> 118px<span class="token punctuation">;</span>
        <span class="token property">height</span><span class="token punctuation">:</span> 28px<span class="token punctuation">;</span>
        <span class="token property">background</span><span class="token punctuation">:</span> <span class="token function">rgba</span><span class="token punctuation">(</span>256 169 100<span class="token punctuation">)</span> no-repeat center<span class="token punctuation">;</span>
        <span class="token property">background-size</span><span class="token punctuation">:</span> contain<span class="token punctuation">;</span>
        <span class="token property">font-size</span><span class="token punctuation">:</span> 20px<span class="token punctuation">;</span>
        <span class="token property">font-weight</span><span class="token punctuation">:</span> 400<span class="token punctuation">;</span>
        <span class="token property">color</span><span class="token punctuation">:</span> #FFFFFF<span class="token punctuation">;</span>
        <span class="token property">text-align</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>
        <span class="token property">position</span><span class="token punctuation">:</span> relative<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token selector">#tag::after</span> <span class="token punctuation">{</span>
        <span class="token property">border</span><span class="token punctuation">:</span> 14px solid #fff<span class="token punctuation">;</span>
        <span class="token property">content</span><span class="token punctuation">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">;</span>
        <span class="token property">border-top-color</span><span class="token punctuation">:</span> transparent<span class="token punctuation">;</span>
        <span class="token property">border-left-color</span><span class="token punctuation">:</span> transparent<span class="token punctuation">;</span>
        <span class="token property">border-bottom-color</span><span class="token punctuation">:</span> transparent<span class="token punctuation">;</span>
        <span class="token property">width</span><span class="token punctuation">:</span> 0px<span class="token punctuation">;</span>
        <span class="token property">height</span><span class="token punctuation">:</span> 0px<span class="token punctuation">;</span>
        <span class="token property">position</span><span class="token punctuation">:</span> absolute<span class="token punctuation">;</span>
        <span class="token comment">/* 28 == 14px *2  */</span>
        <span class="token property">left</span><span class="token punctuation">:</span> <span class="token function">calc</span><span class="token punctuation">(</span>118px - 28px<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token property">top</span><span class="token punctuation">:</span> 0px<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

 <span class="token comment">/* ----------------- 炫酷 ---------------------- */</span>


    <span class="token selector">html</span> <span class="token punctuation">{</span>
        <span class="token property">height</span><span class="token punctuation">:</span> 100%<span class="token punctuation">;</span>
        <span class="token property">background-image</span><span class="token punctuation">:</span><span class="token url"><span class="token function">url</span><span class="token punctuation">(</span>xxxxx<span class="token punctuation">)</span></span><span class="token punctuation">;</span>
        <span class="token property">background-blend-mode</span><span class="token punctuation">:</span> overlay<span class="token punctuation">;</span>

    <span class="token punctuation">}</span>

    <span class="token selector">.tag</span> <span class="token punctuation">{</span>
        <span class="token property">overflow</span><span class="token punctuation">:</span> hidden<span class="token punctuation">;</span>

        <span class="token property">position</span><span class="token punctuation">:</span> relative<span class="token punctuation">;</span>

        <span class="token property">left</span><span class="token punctuation">:</span> 1.5em<span class="token punctuation">;</span>

        <span class="token property">margin</span><span class="token punctuation">:</span> 8rem auto<span class="token punctuation">;</span>

        <span class="token property">padding-left</span><span class="token punctuation">:</span> 2em<span class="token punctuation">;</span>

        <span class="token property">width</span><span class="token punctuation">:</span> 5em<span class="token punctuation">;</span>

        <span class="token property">height</span><span class="token punctuation">:</span> 2em<span class="token punctuation">;</span>

        <span class="token property">border-radius</span><span class="token punctuation">:</span> 2em 0.25em 0.25em 2em / 50% 0.25em 0.25em 50%<span class="token punctuation">;</span>

        <span class="token property">transform-origin</span><span class="token punctuation">:</span> 1em 50%<span class="token punctuation">;</span>

        <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">rotate</span><span class="token punctuation">(</span>80deg<span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token property">color</span><span class="token punctuation">:</span> brown<span class="token punctuation">;</span>

        <span class="token property">font</span><span class="token punctuation">:</span> 700 3em/2em consolas<span class="token punctuation">,</span> monospace<span class="token punctuation">;</span>

        <span class="token property">text-shadow</span><span class="token punctuation">:</span> -1px -1px <span class="token function">rgba</span><span class="token punctuation">(</span>255<span class="token punctuation">,</span> 255<span class="token punctuation">,</span> 255<span class="token punctuation">,</span> 0.7<span class="token punctuation">)</span><span class="token punctuation">,</span> 1px 1px <span class="token function">rgba</span><span class="token punctuation">(</span>0<span class="token punctuation">,</span> 0<span class="token punctuation">,</span> 0<span class="token punctuation">,</span> 0.7<span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token property">transition</span><span class="token punctuation">:</span> .5s transform<span class="token punctuation">;</span>

        <span class="token property">cursor</span><span class="token punctuation">:</span> pointer<span class="token punctuation">;</span>

    <span class="token punctuation">}</span>

    <span class="token selector">.tag:before,

    .tag:after</span> <span class="token punctuation">{</span>
        <span class="token property">position</span><span class="token punctuation">:</span> absolute<span class="token punctuation">;</span>

        <span class="token property">content</span><span class="token punctuation">:</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">;</span>

    <span class="token punctuation">}</span>

    <span class="token selector">.tag:before</span> <span class="token punctuation">{</span>
        <span class="token property">box-sizing</span><span class="token punctuation">:</span> border-box<span class="token punctuation">;</span>

        <span class="token property">z-index</span><span class="token punctuation">:</span> -1<span class="token punctuation">;</span>

        <span class="token property">left</span><span class="token punctuation">:</span> 1em<span class="token punctuation">;</span>

        <span class="token property">top</span><span class="token punctuation">:</span> 50%<span class="token punctuation">;</span>

        <span class="token property">margin</span><span class="token punctuation">:</span> -0.5em<span class="token punctuation">;</span>

        <span class="token property">border</span><span class="token punctuation">:</span> double 0.25em #f2674a<span class="token punctuation">;</span>

        <span class="token property">width</span><span class="token punctuation">:</span> 1em<span class="token punctuation">;</span>

        <span class="token property">height</span><span class="token punctuation">:</span> 1em<span class="token punctuation">;</span>

        <span class="token property">border-radius</span><span class="token punctuation">:</span> 50%<span class="token punctuation">;</span>

        <span class="token property">box-shadow</span><span class="token punctuation">:</span> 0 0 0 6.25em #f2674a<span class="token punctuation">;</span>

    <span class="token punctuation">}</span>

    <span class="token selector">.tag:after</span> <span class="token punctuation">{</span>
        <span class="token property">top</span><span class="token punctuation">:</span> 0.125em<span class="token punctuation">;</span>

        <span class="token property">right</span><span class="token punctuation">:</span> 0.125em<span class="token punctuation">;</span>

        <span class="token property">bottom</span><span class="token punctuation">:</span> 0.125em<span class="token punctuation">;</span>

        <span class="token property">left</span><span class="token punctuation">:</span> 0.125em<span class="token punctuation">;</span>

        <span class="token property">border</span><span class="token punctuation">:</span> dashed 3px brown<span class="token punctuation">;</span>

        <span class="token property">border-radius</span><span class="token punctuation">:</span> inherit<span class="token punctuation">;</span>

    <span class="token punctuation">}</span>

    <span class="token selector">.tag:hover</span> <span class="token punctuation">{</span>
        <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">rotate</span><span class="token punctuation">(</span>690deg<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token punctuation">}</span>
</code></pre></div><h2 id="空两格" tabindex="-1"><a class="header-anchor" href="#空两格" aria-hidden="true">#</a> 空两格</h2><blockquote><p><code> text-indent: 2em;</code> 文本空两格</p></blockquote><h2 id="溢出省略" tabindex="-1"><a class="header-anchor" href="#溢出省略" aria-hidden="true">#</a> 溢出省略</h2><h4 id="单行-多行" tabindex="-1"><a class="header-anchor" href="#单行-多行" aria-hidden="true">#</a> 单行&amp;多行</h4><div class="language-html" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span><span class="token punctuation">&gt;</span></span><span class="token style"><span class="token language-css">
    <span class="token selector">.app</span> <span class="token punctuation">{</span>
        <span class="token property">width</span><span class="token punctuation">:</span> 300px<span class="token punctuation">;</span>
        <span class="token property">height</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span>

        <span class="token property">background-color</span><span class="token punctuation">:</span> #ededdd<span class="token punctuation">;</span>

        <span class="token property">overflow</span><span class="token punctuation">:</span> hidden<span class="token punctuation">;</span>
        <span class="token comment">/* 禁止自动换行 */</span>
        <span class="token property">white-space</span><span class="token punctuation">:</span> nowrap<span class="token punctuation">;</span>
        <span class="token comment">/* 溢出文本显示省略号 */</span>
        <span class="token property">text-overflow</span><span class="token punctuation">:</span> ellipsis<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">/* 
    overflow: hidden;
white-space: nowrap; //强制不换行

两段代码必须加上，否则的话是起不到作用的。
    */</span>
 

    <span class="token selector">.p</span> <span class="token punctuation">{</span>
        <span class="token property">width</span><span class="token punctuation">:</span> 300px<span class="token punctuation">;</span>
        <span class="token property">height</span><span class="token punctuation">:</span> 90px<span class="token punctuation">;</span>

<span class="token comment">/* 多行
    控制行高
    
*/</span>
        <span class="token property">line-height</span><span class="token punctuation">:</span> 30px<span class="token punctuation">;</span>

        <span class="token property">overflow</span><span class="token punctuation">:</span> hidden<span class="token punctuation">;</span>
        <span class="token property">text-overflow</span><span class="token punctuation">:</span> ellipsis<span class="token punctuation">;</span>
        <span class="token property">display</span><span class="token punctuation">:</span> -webkit-box<span class="token punctuation">;</span>
    <span class="token comment">/* 超出指定行数， 显示省略号 */</span>
        <span class="token property">-webkit-line-clamp</span><span class="token punctuation">:</span> 3<span class="token punctuation">;</span>
        <span class="token property">-webkit-box-orient</span><span class="token punctuation">:</span> vertical<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">&gt;</span></span>


    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>app<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
        于单行文本溢出 text-overflow: ellipsis 就能完美的解决，而且所有主流浏览器都支持 text-overflow 属性 
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>

    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>p<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
       “塔利班，伟大的谈判者，坚强的战士，”据美国《新闻周刊》，特朗普当天一边称赞阿富汗塔利班，一边激烈指责拜登，“拜登在大流行上完全失败了，他现在正在经历美利坚合众国历史上最大的外交政策羞辱。”

“拜登一团糟地撤出阿富汗，是一个国家领导人严重无能的最令人震惊的表现，可能在任何时刻都是如此（无能）。”他还继续批评拜登没有遵守其政府提出的计划，并哀叹美军在撤离时留下的人员和武器装备。

“这不是撤军，而是彻底投降。”特朗普说。报道称，他还说塔利班尊重自己，如果自己还在位的话，塔利班如此快速接管阿富汗的事情就不会发生。

“我们本可以带着荣誉而离开，我们本应该带着荣誉而离开。然而，我们得到的却是与荣誉完全相反的东西。”这位前任总统还继续尖锐批评道。

在阿富汗塔利班8月15日占领喀布尔后，特朗普已多次公开奚落拜登。15日，他先是在一份声明中讽刺道：“乔·拜登对阿富汗的所作所为堪称‘传奇’，这将成为美国历史上最大的失败之一！ ”紧接着，他还发表了第二份声明，“是时候让乔·拜登不光彩地辞职了。”

当地时间17日，特朗普再次痛批阿富汗撤军“是美国有史以来最大的尴尬，会在数十年里影响美国和世界的关系”。他试图用中国刺激拜登，称中国在目睹塔利班接管阿富汗后“非常开心”，“他们在笑话我们呢”，并有所指地说“美国需要一位受到尊重的总统”。
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">&gt;</span></span>

</code></pre></div><h3 id="透明度" tabindex="-1"><a class="header-anchor" href="#透明度" aria-hidden="true">#</a> 透明度</h3><div class="language-css" data-ext="css"><pre class="language-css"><code> <span class="token property">opacity</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
</code></pre></div><h3 id="过度效果" tabindex="-1"><a class="header-anchor" href="#过度效果" aria-hidden="true">#</a> 过度效果</h3><div class="language-css" data-ext="css"><pre class="language-css"><code> <span class="token property">transition</span> <span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
</code></pre></div><h3 id="" tabindex="-1"><a class="header-anchor" href="#" aria-hidden="true">#</a></h3>`,15),e=[o];function c(u,l){return s(),a("div",null,e)}const i=n(t,[["render",c],["__file","cssstylea.html.vue"]]);export{i as default};
