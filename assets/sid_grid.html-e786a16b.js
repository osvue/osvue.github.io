import{_ as n,p as s,q as a,a1 as t}from"./framework-d81ad7e5.js";const p="/assets/fill-e4c3535c.png",o="/assets/ga-d451cfdf.png",e="/assets/gb-afc65acb.png",c="/assets/gc-7fe672b3.png",l="/assets/gd-9a92b791.png",u="/assets/ge-fa85e0ed.png",i="/assets/gf-ecc9279c.png",r="/assets/gg-6abe11bd.png",k="/assets/ggz-52835069.png",d={},g=t(`<h2 id="grid-布局原理" tabindex="-1"><a class="header-anchor" href="#grid-布局原理" aria-hidden="true">#</a> grid 布局原理</h2><ul><li><p>网格布局（Grid）是最强大的 CSS 布局方案。</p></li><li><p>它将网页划分成一个个网格，可以任意组合不同的网格，做出各种各样的布局。以前，只能通过复杂的 CSS 框架达到的效果，现在浏览器内置了</p></li><li><p>Flex 布局是轴线布局，只能指定&quot;项目&quot;针对轴线的位置，可以看作是一维布局。Grid 布局则是将容器划分成&quot;行&quot;和&quot;列&quot;，产生单元格，然后指定&quot;项目所在&quot;的单元格，可以看作是二维布局。Grid 布局远比 Flex 布局强大。</p></li></ul><h3 id="容器和项目" tabindex="-1"><a class="header-anchor" href="#容器和项目" aria-hidden="true">#</a> 容器和项目</h3><ul><li>采用网格布局的区域，称为&quot;容器&quot;（container）。容器内部采用网格定位的子元素，称为&quot;项目&quot;（item）。</li></ul><h3 id="行和列" tabindex="-1"><a class="header-anchor" href="#行和列" aria-hidden="true">#</a> 行和列</h3><ul><li>容器里面的水平区域称为&quot;行&quot;（row），垂直区域称为&quot;列&quot;（column）。</li></ul><h2 id="容器属性" tabindex="-1"><a class="header-anchor" href="#容器属性" aria-hidden="true">#</a> 容器属性</h2><p>Grid 布局的属性分成两类。一类定义在容器上面，称为容器属性；另一类定义在项目上面，称为项目属性。这部分先介绍容器属性。</p><h3 id="display-属性" tabindex="-1"><a class="header-anchor" href="#display-属性" aria-hidden="true">#</a> display 属性</h3><p><code>display: grid</code>指定一个容器采用网格布局。</p><blockquote><div class="language-css" data-ext="css"><pre class="language-css"><code><span class="token selector">div</span> <span class="token punctuation">{</span>
  <span class="token property">display</span><span class="token punctuation">:</span> grid<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div></blockquote><p>默认情况下，容器元素都是块级元素，但也可以设成行内元素。</p><blockquote><div class="language-css" data-ext="css"><pre class="language-css"><code><span class="token selector">div</span> <span class="token punctuation">{</span>
  <span class="token property">display</span><span class="token punctuation">:</span> inline-grid<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div></blockquote><p>上面代码指定<code>div</code>是一个行内元素，该元素内部采用网格布局。</p><blockquote><p>注意，设为网格布局以后，容器子元素（项目）的<code>float</code>、<code>display: inline-block</code>、<code>display: table-cell</code>、<code>vertical-align</code>和<code>column-*</code>等设置都将失效。</p></blockquote><h2 id="定义行和列" tabindex="-1"><a class="header-anchor" href="#定义行和列" aria-hidden="true">#</a> 定义行和列</h2><h3 id="grid-template-columns-属性-grid-template-rows-属性" tabindex="-1"><a class="header-anchor" href="#grid-template-columns-属性-grid-template-rows-属性" aria-hidden="true">#</a> grid-template-columns 属性， grid-template-rows 属性</h3><p>容器指定了网格布局以后，接着就要划分行和列。<code>grid-template-columns</code>属性定义每一列的列宽，<code>grid-template-rows</code>属性定义每一行的行高。</p><blockquote><div class="language-css" data-ext="css"><pre class="language-css"><code><span class="token selector">.container</span> <span class="token punctuation">{</span>
  <span class="token property">display</span><span class="token punctuation">:</span> grid<span class="token punctuation">;</span>
  <span class="token property">grid-template-columns</span><span class="token punctuation">:</span> 100px 100px 100px<span class="token punctuation">;</span>
  <span class="token property">grid-template-rows</span><span class="token punctuation">:</span> 100px 100px 100px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div></blockquote><p>除了使用绝对单位，也可以使用百分比。</p><blockquote><div class="language-css" data-ext="css"><pre class="language-css"><code><span class="token selector">.container</span> <span class="token punctuation">{</span>
  <span class="token property">display</span><span class="token punctuation">:</span> grid<span class="token punctuation">;</span>
  <span class="token property">grid-template-columns</span><span class="token punctuation">:</span> 33.33% 33.33% 33.33%<span class="token punctuation">;</span>
  <span class="token property">grid-template-rows</span><span class="token punctuation">:</span> 33.33% 33.33% 33.33%<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div></blockquote><h2 id="repeat函数" tabindex="-1"><a class="header-anchor" href="#repeat函数" aria-hidden="true">#</a> repeat函数</h2><p>有时候，重复写同样的值非常麻烦，尤其网格很多时。这时，可以使用<code>repeat()</code>函数，简化重复的值。上面的代码用<code>repeat()</code>改写如下。</p><blockquote><div class="language-css" data-ext="css"><pre class="language-css"><code><span class="token selector">.container</span> <span class="token punctuation">{</span>
  <span class="token property">display</span><span class="token punctuation">:</span> grid<span class="token punctuation">;</span>
  <span class="token property">grid-template-columns</span><span class="token punctuation">:</span> <span class="token function">repeat</span><span class="token punctuation">(</span>3<span class="token punctuation">,</span> 33.33%<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token property">grid-template-rows</span><span class="token punctuation">:</span> <span class="token function">repeat</span><span class="token punctuation">(</span>3<span class="token punctuation">,</span> 33.33%<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div></blockquote><p><code>repeat()</code>接受两个参数，第一个参数是重复的次数（上例是3），第二个参数是所要重复的值。</p><h3 id="repeat-重复某种模式也是可以的。" tabindex="-1"><a class="header-anchor" href="#repeat-重复某种模式也是可以的。" aria-hidden="true">#</a> <code>repeat()</code>重复某种模式也是可以的。</h3><blockquote><div class="language-css" data-ext="css"><pre class="language-css"><code><span class="token property">grid-template-columns</span><span class="token punctuation">:</span> <span class="token function">repeat</span><span class="token punctuation">(</span>2<span class="token punctuation">,</span> 100px 20px 80px<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div></blockquote><p><strong>（2）auto-fill 关键字</strong></p><p>有时，单元格的大小是固定的，但是容器的大小不确定。如果希望每一行（或每一列）容纳尽可能多的单元格，这时可以使用<code>auto-fill</code>关键字表示自动填充。</p><blockquote><div class="language-css" data-ext="css"><pre class="language-css"><code><span class="token selector">.container</span> <span class="token punctuation">{</span>
  <span class="token property">display</span><span class="token punctuation">:</span> grid<span class="token punctuation">;</span>
  <span class="token property">grid-template-columns</span><span class="token punctuation">:</span> <span class="token function">repeat</span><span class="token punctuation">(</span>auto-fill<span class="token punctuation">,</span> 100px<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div></blockquote><p>表示每列宽度<code>100px</code>，然后自动填充，直到容器不能放置更多的列。</p><p><img src="`+p+`" alt="./image/fill.png"></p><p><strong>（3）fr 关键字</strong></p><p>为了方便表示比例关系，网格布局提供了<code>fr</code>关键字（fraction 的缩写，意为&quot;片段&quot;）。如果两列的宽度分别为<code>1fr</code>和<code>2fr</code>，就表示后者是前者的两倍。</p><blockquote><div class="language-css" data-ext="css"><pre class="language-css"><code><span class="token selector">.container</span> <span class="token punctuation">{</span>
  <span class="token property">display</span><span class="token punctuation">:</span> grid<span class="token punctuation">;</span>
  <span class="token property">grid-template-columns</span><span class="token punctuation">:</span> 1fr 1fr<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div></blockquote><p><code>fr</code>可以与绝对长度的单位结合使用，这时会非常方便。</p><blockquote><div class="language-css" data-ext="css"><pre class="language-css"><code><span class="token selector">.container</span> <span class="token punctuation">{</span>
  <span class="token property">display</span><span class="token punctuation">:</span> grid<span class="token punctuation">;</span>
  <span class="token property">grid-template-columns</span><span class="token punctuation">:</span> 150px 1fr 2fr<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div></blockquote><p><strong>（4）minmax()</strong></p><p><code>minmax()</code>函数产生一个长度范围，表示长度就在这个范围之中。它接受两个参数，分别为最小值和最大值。</p><blockquote><div class="language-css" data-ext="css"><pre class="language-css"><code><span class="token property">grid-template-columns</span><span class="token punctuation">:</span> 1fr 1fr <span class="token function">minmax</span><span class="token punctuation">(</span>100px<span class="token punctuation">,</span> 1fr<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div></blockquote><p>上面代码中，<code>minmax(100px, 1fr)</code>表示列宽不小于<code>100px</code>，不大于<code>1fr</code>。</p><p><strong>（5）auto 关键字</strong></p><p><code>auto</code>关键字表示由浏览器自己决定长度。</p><blockquote><div class="language-css" data-ext="css"><pre class="language-css"><code><span class="token property">grid-template-columns</span><span class="token punctuation">:</span> 100px auto 100px<span class="token punctuation">;</span>
</code></pre></div></blockquote><p>上面代码中，第二列的宽度，基本上等于该列单元格的最大宽度，除非单元格内容设置了<code>min-width</code>，且这个值大于最大宽度。</p><p><strong>（6）网格线的名称</strong></p><p><code>grid-template-columns</code>属性和<code>grid-template-rows</code>属性里面，还可以使用方括号，指定每一根网格线的名字，方便以后的引用。</p><blockquote><div class="language-css" data-ext="css"><pre class="language-css"><code><span class="token selector">.container</span> <span class="token punctuation">{</span>
  <span class="token property">display</span><span class="token punctuation">:</span> grid<span class="token punctuation">;</span>
  <span class="token property">grid-template-columns</span><span class="token punctuation">:</span> [c1] 100px [c2] 100px [c3] auto [c4]<span class="token punctuation">;</span>
  <span class="token property">grid-template-rows</span><span class="token punctuation">:</span> [r1] 100px [r2] 100px [r3] auto [r4]<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div></blockquote><p>上面代码指定网格布局为3行 x 3列，因此有4根垂直网格线和4根水平网格线。方括号里面依次是这八根线的名字。</p><p>网格布局允许同一根线有多个名字，比如<code>[fifth-line row-5]</code>。</p><p><strong>（7）布局实例</strong></p><p><code>grid-template-columns</code>属性对于网页布局非常有用。两栏式布局只需要一行代码。</p><blockquote><div class="language-css" data-ext="css"><pre class="language-css"><code><span class="token selector">.wrapper</span> <span class="token punctuation">{</span>
  <span class="token property">display</span><span class="token punctuation">:</span> grid<span class="token punctuation">;</span>
  <span class="token property">grid-template-columns</span><span class="token punctuation">:</span> 70% 30%<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div></blockquote><p>上面代码将左边栏设为70%，右边栏设为30%。</p><p>传统的十二网格布局，写起来也很容易。</p><blockquote><div class="language-css" data-ext="css"><pre class="language-css"><code><span class="token property">grid-template-columns</span><span class="token punctuation">:</span> <span class="token function">repeat</span><span class="token punctuation">(</span>12<span class="token punctuation">,</span> 1fr<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div></blockquote><h2 id="元素间距" tabindex="-1"><a class="header-anchor" href="#元素间距" aria-hidden="true">#</a> 元素间距</h2><h3 id="grid-row-gap-属性-grid-column-gap-属性-grid-gap-属性" tabindex="-1"><a class="header-anchor" href="#grid-row-gap-属性-grid-column-gap-属性-grid-gap-属性" aria-hidden="true">#</a> grid-row-gap 属性， grid-column-gap 属性， grid-gap 属性</h3><p><code>grid-row-gap</code>属性设置行与行的间隔（行间距），<code>grid-column-gap</code>属性设置列与列的间隔（列间距）。</p><blockquote><div class="language-css" data-ext="css"><pre class="language-css"><code><span class="token selector">.container</span> <span class="token punctuation">{</span>
  <span class="token property">grid-row-gap</span><span class="token punctuation">:</span> 20px<span class="token punctuation">;</span>
  <span class="token property">grid-column-gap</span><span class="token punctuation">:</span> 20px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div></blockquote><p><code>grid-gap</code>属性是<code>grid-column-gap</code>和<code>grid-row-gap</code>的合并简写形式，语法如下。</p><blockquote><div class="language-css" data-ext="css"><pre class="language-css"><code><span class="token property">grid-gap</span><span class="token punctuation">:</span> &lt;grid-row-gap&gt; &lt;grid-column-gap&gt;<span class="token punctuation">;</span>
</code></pre></div></blockquote><p>因此，上面一段 CSS 代码等同于下面的代码。</p><blockquote><div class="language-css" data-ext="css"><pre class="language-css"><code><span class="token selector">.container</span> <span class="token punctuation">{</span>
  <span class="token property">grid-gap</span><span class="token punctuation">:</span> 20px 20px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div></blockquote><p>如果<code>grid-gap</code>省略了第二个值，浏览器认为第二个值等于第一个值。</p><blockquote><p>根据最新标准，上面三个属性名的<code>grid-</code>前缀已经删除，<code>grid-column-gap</code>和<code>grid-row-gap</code>写成<code>column-gap</code>和<code>row-gap</code>，<code>grid-gap</code>写成<code>gap</code>。</p></blockquote><h2 id="区域别名" tabindex="-1"><a class="header-anchor" href="#区域别名" aria-hidden="true">#</a> 区域别名</h2><h3 id="grid-template-areas-属性" tabindex="-1"><a class="header-anchor" href="#grid-template-areas-属性" aria-hidden="true">#</a> grid-template-areas 属性</h3><p>网格布局允许指定&quot;区域&quot;（area），一个区域由单个或多个单元格组成。<code>grid-template-areas</code>属性用于定义区域。</p><blockquote><div class="language-css" data-ext="css"><pre class="language-css"><code><span class="token selector">.container</span> <span class="token punctuation">{</span>
  <span class="token property">display</span><span class="token punctuation">:</span> grid<span class="token punctuation">;</span>
  <span class="token property">grid-template-columns</span><span class="token punctuation">:</span> 100px 100px 100px<span class="token punctuation">;</span>
  <span class="token property">grid-template-rows</span><span class="token punctuation">:</span> 100px 100px 100px<span class="token punctuation">;</span>
  <span class="token property">grid-template-areas</span><span class="token punctuation">:</span> <span class="token string">&#39;a b c&#39;</span>
                       <span class="token string">&#39;d e f&#39;</span>
                       <span class="token string">&#39;g h i&#39;</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div></blockquote><p>上面代码先划分出9个单元格，然后将其定名为<code>a</code>到<code>i</code>的九个区域，分别对应这九个单元格。</p><p>多个单元格合并成一个区域的写法如下。</p><blockquote><div class="language-css" data-ext="css"><pre class="language-css"><code><span class="token property">grid-template-areas</span><span class="token punctuation">:</span> <span class="token string">&#39;a a a&#39;</span>
                     <span class="token string">&#39;b b b&#39;</span>
                     <span class="token string">&#39;c c c&#39;</span><span class="token punctuation">;</span>
</code></pre></div></blockquote><p>上面代码将9个单元格分成<code>a</code>、<code>b</code>、<code>c</code>三个区域。</p><p>下面是一个布局实例。</p><blockquote><div class="language-css" data-ext="css"><pre class="language-css"><code><span class="token property">grid-template-areas</span><span class="token punctuation">:</span> <span class="token string">&quot;header header header&quot;</span>
                     <span class="token string">&quot;main main sidebar&quot;</span>
                     <span class="token string">&quot;footer footer footer&quot;</span><span class="token punctuation">;</span>
</code></pre></div></blockquote><p>上面代码中，顶部是页眉区域<code>header</code>，底部是页脚区域<code>footer</code>，中间部分则为<code>main</code>和<code>sidebar</code>。</p><p>如果某些区域不需要利用，则使用&quot;点&quot;（<code>.</code>）表示。</p><blockquote><div class="language-css" data-ext="css"><pre class="language-css"><code><span class="token property">grid-template-areas</span><span class="token punctuation">:</span> <span class="token string">&#39;a . c&#39;</span>
                     <span class="token string">&#39;d . f&#39;</span>
                     <span class="token string">&#39;g . i&#39;</span><span class="token punctuation">;</span>
</code></pre></div></blockquote><p>上面代码中，中间一列为点，表示没有用到该单元格，或者该单元格不属于任何区域。</p><blockquote><p>注意，区域的命名会影响到网格线。每个区域的起始网格线，会自动命名为<code>区域名-start</code>，终止网格线自动命名为<code>区域名-end</code>。</p><p>比如，区域名为<code>header</code>，则起始位置的水平网格线和垂直网格线叫做<code>header-start</code>，终止位置的水平网格线和垂直网格线叫做<code>header-end</code>。</p></blockquote><h2 id="grid-auto-flow-属性" tabindex="-1"><a class="header-anchor" href="#grid-auto-flow-属性" aria-hidden="true">#</a> grid-auto-flow 属性</h2><p>划分网格以后，容器的子元素会按照顺序，自动放置在每一个网格。默认的放置顺序是&quot;先行后列&quot;，即先填满第一行，再开始放入第二行</p><p>这个顺序由<code>grid-auto-flow</code>属性决定，默认值是<code>row</code>，即&quot;先行后列&quot;。也可以将它设成<code>column</code>，变成&quot;先列后行&quot;。</p><blockquote><div class="language-css" data-ext="css"><pre class="language-css"><code><span class="token property">grid-auto-flow</span><span class="token punctuation">:</span> column<span class="token punctuation">;</span>
</code></pre></div></blockquote><p>设置了<code>column</code>以后，放置顺序就变 了</p><div class="language-text" data-ext="text"><pre class="language-text"><code>1   2   3   
4   5   6   
7   8   9

1   4   7
​2   5   8   
3   6   9
</code></pre></div><p><code>grid-auto-flow</code>属性除了设置成<code>row</code>和<code>column</code>，还可以设成<code>row dense</code>和<code>column dense</code>。这两个值主要用于，某些项目指定位置以后，剩下的项目怎么自动放置。</p><h2 id="justify-items-属性-align-items-属性-place-items-属性" tabindex="-1"><a class="header-anchor" href="#justify-items-属性-align-items-属性-place-items-属性" aria-hidden="true">#</a> justify-items 属性， align-items 属性， place-items 属性</h2><p><code>justify-items</code>属性设置单元格内容的水平位置（左中右），<code>align-items</code>属性设置单元格内容的垂直位置（上中下）。</p><blockquote><div class="language-css" data-ext="css"><pre class="language-css"><code><span class="token selector">.container</span> <span class="token punctuation">{</span>
  <span class="token property">justify-items</span><span class="token punctuation">:</span> start | end | center | stretch<span class="token punctuation">;</span>
  <span class="token property">align-items</span><span class="token punctuation">:</span> start | end | center | stretch<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div></blockquote><p>这两个属性的写法完全相同，都可以取下面这些值。</p><blockquote><ul><li>start：对齐单元格的起始边缘。</li><li>end：对齐单元格的结束边缘。</li><li>center：单元格内部居中。</li><li>stretch：拉伸，占满单元格的整个宽度（默认值）。</li></ul></blockquote><blockquote><div class="language-css" data-ext="css"><pre class="language-css"><code><span class="token selector">.container</span> <span class="token punctuation">{</span>
  <span class="token property">justify-items</span><span class="token punctuation">:</span> start<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div></blockquote><p>，单元格的内容左对齐</p><blockquote><div class="language-css" data-ext="css"><pre class="language-css"><code><span class="token selector">.container</span> <span class="token punctuation">{</span>
  <span class="token property">align-items</span><span class="token punctuation">:</span> start<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div></blockquote><p>，单元格的内容头部对齐</p><p><code>place-items</code>属性是<code>align-items</code>属性和<code>justify-items</code>属性的合并简写形式。</p><blockquote><div class="language-css" data-ext="css"><pre class="language-css"><code><span class="token property">place-items</span><span class="token punctuation">:</span> &lt;align-items&gt; &lt;justify-items&gt;<span class="token punctuation">;</span>
</code></pre></div></blockquote><p>下面是一个例子。</p><blockquote><div class="language-css" data-ext="css"><pre class="language-css"><code><span class="token property">place-items</span><span class="token punctuation">:</span> start end<span class="token punctuation">;</span>
</code></pre></div></blockquote><p>如果省略第二个值，则浏览器认为与第一个值相等。</p><h2 id="justify-content-属性-align-content-属性-place-content-属性" tabindex="-1"><a class="header-anchor" href="#justify-content-属性-align-content-属性-place-content-属性" aria-hidden="true">#</a> justify-content 属性， align-content 属性， place-content 属性</h2><p><code>justify-content</code>属性是整个内容区域在容器里面的水平位置（左中右），<code>align-content</code>属性是整个内容区域的垂直位置（上中下）。</p><blockquote><div class="language-css" data-ext="css"><pre class="language-css"><code><span class="token selector">.container</span> <span class="token punctuation">{</span>
  <span class="token property">justify-content</span><span class="token punctuation">:</span> start | end | center | stretch | space-around | space-between | space-evenly<span class="token punctuation">;</span>
  <span class="token property">align-content</span><span class="token punctuation">:</span> start | end | center | stretch | space-around | space-between | space-evenly<span class="token punctuation">;</span>  
<span class="token punctuation">}</span>
</code></pre></div></blockquote><p>这两个属性的写法完全相同，都可以取下面这些值。（下面的图都以<code>justify-content</code>属性为例，<code>align-content</code>属性的图完全一样，只是将水平方向改成垂直方向。）</p><blockquote><ul><li>start - 对齐容器的起始边框。</li></ul></blockquote><p><img src="`+o+'" alt="img"></p><blockquote><ul><li>end - 对齐容器的结束边框。</li></ul></blockquote><p><img src="'+e+'" alt="img"></p><blockquote><ul><li>center - 容器内部居中。</li></ul></blockquote><p><img src="'+c+'" alt="img"></p><blockquote><ul><li>stretch - 项目大小没有指定时，拉伸占据整个网格容器。</li></ul></blockquote><p><img src="'+l+'" alt="img"></p><blockquote><ul><li>space-around - 每个项目两侧的间隔相等。所以，项目之间的间隔比项目与容器边框的间隔大一倍。</li></ul></blockquote><p><img src="'+u+'" alt="img"></p><blockquote><ul><li>space-between - 项目与项目的间隔相等，项目与容器边框之间没有间隔。</li></ul></blockquote><p><img src="'+i+'" alt="img"></p><blockquote><ul><li>space-evenly - 项目与项目的间隔相等，项目与容器边框之间也是同样长度的间隔。</li></ul></blockquote><p><img src="'+r+`" alt="img"><code>place-content</code>属性是<code>align-content</code>属性和<code>justify-content</code>属性的合并简写形式。</p><blockquote><div class="language-css" data-ext="css"><pre class="language-css"><code><span class="token property">place-content</span><span class="token punctuation">:</span> &lt;align-content&gt; &lt;justify-content&gt;
</code></pre></div></blockquote><p>下面是一个例子。</p><blockquote><div class="language-css" data-ext="css"><pre class="language-css"><code><span class="token property">place-content</span><span class="token punctuation">:</span> space-around space-evenly<span class="token punctuation">;</span>
</code></pre></div></blockquote><p>如果省略第二个值，浏览器就会假定第二个值等于第一个值。</p><h3 id="grid-template-属性-grid-属性" tabindex="-1"><a class="header-anchor" href="#grid-template-属性-grid-属性" aria-hidden="true">#</a> grid-template 属性， grid 属性</h3><p><code>grid-template</code>属性是<code>grid-template-columns</code>、<code>grid-template-rows</code>和<code>grid-template-areas</code>这三个属性的合并简写形式。</p><p><code>grid</code>属性是<code>grid-template-rows</code>、<code>grid-template-columns</code>、<code>grid-template-areas</code>、 <code>grid-auto-rows</code>、<code>grid-auto-columns</code>、<code>grid-auto-flow</code>这六个属性的合并简写形式。</p><p>从易读易写的角度考虑，还是建议不要合并属性，所以这里就不详细介绍这两个属性了。</p><h2 id="项目属性" tabindex="-1"><a class="header-anchor" href="#项目属性" aria-hidden="true">#</a> 项目属性</h2><p>下面这些属性定义在项目上面。</p><h3 id="grid-column-start-属性-grid-column-end-属性-grid-row-start-属性-grid-row-end-属性" tabindex="-1"><a class="header-anchor" href="#grid-column-start-属性-grid-column-end-属性-grid-row-start-属性-grid-row-end-属性" aria-hidden="true">#</a> grid-column-start 属性， grid-column-end 属性， grid-row-start 属性， grid-row-end 属性</h3><p>项目的位置是可以指定的，具体方法就是指定项目的四个边框，分别定位在哪根网格线。</p><blockquote><ul><li><code>grid-column-start</code>属性：左边框所在的垂直网格线</li><li><code>grid-column-end</code>属性：右边框所在的垂直网格线</li><li><code>grid-row-start</code>属性：上边框所在的水平网格线</li><li><code>grid-row-end</code>属性：下边框所在的水平网格线</li></ul></blockquote><blockquote><div class="language-css" data-ext="css"><pre class="language-css"><code><span class="token selector">.item-1</span> <span class="token punctuation">{</span>
  <span class="token property">grid-column-start</span><span class="token punctuation">:</span> 2<span class="token punctuation">;</span>
  <span class="token property">grid-column-end</span><span class="token punctuation">:</span> 4<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div></blockquote><p>1号项目的左边框是第二根垂直网格线，右边框是第四根垂直网格线。</p><h2 id="grid-column-属性-grid-row-属性" tabindex="-1"><a class="header-anchor" href="#grid-column-属性-grid-row-属性" aria-hidden="true">#</a> grid-column 属性， grid-row 属性</h2><p><code>grid-column</code>属性是<code>grid-column-start</code>和<code>grid-column-end</code>的合并简写形式，<code>grid-row</code>属性是<code>grid-row-start</code>属性和<code>grid-row-end</code>的合并简写形式。</p><blockquote><div class="language-css" data-ext="css"><pre class="language-css"><code><span class="token selector">.item</span> <span class="token punctuation">{</span>
  <span class="token property">grid-column</span><span class="token punctuation">:</span> &lt;start-line&gt; / &lt;end-line&gt;<span class="token punctuation">;</span>
  <span class="token property">grid-row</span><span class="token punctuation">:</span> &lt;start-line&gt; / &lt;end-line&gt;<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div></blockquote><p>下面是一个例子。</p><blockquote><div class="language-css" data-ext="css"><pre class="language-css"><code><span class="token selector">.item-1</span> <span class="token punctuation">{</span>
  <span class="token property">grid-column</span><span class="token punctuation">:</span> 1 / 3<span class="token punctuation">;</span>
  <span class="token property">grid-row</span><span class="token punctuation">:</span> 1 / 2<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token comment">/* 等同于 */</span>
<span class="token selector">.item-1</span> <span class="token punctuation">{</span>
  <span class="token property">grid-column-start</span><span class="token punctuation">:</span> 1<span class="token punctuation">;</span>
  <span class="token property">grid-column-end</span><span class="token punctuation">:</span> 3<span class="token punctuation">;</span>
  <span class="token property">grid-row-start</span><span class="token punctuation">:</span> 1<span class="token punctuation">;</span>
  <span class="token property">grid-row-end</span><span class="token punctuation">:</span> 2<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div></blockquote><p>上面代码中，项目<code>item-1</code>占据第一行，从第一根列线到第三根列线。</p><p>这两个属性之中，也可以使用<code>span</code>关键字，表示跨越多少个网格。</p><blockquote><div class="language-css" data-ext="css"><pre class="language-css"><code><span class="token selector">.item-1</span> <span class="token punctuation">{</span>
  <span class="token property">background</span><span class="token punctuation">:</span> #b03532<span class="token punctuation">;</span>
  <span class="token property">grid-column</span><span class="token punctuation">:</span> 1 / 3<span class="token punctuation">;</span>
  <span class="token property">grid-row</span><span class="token punctuation">:</span> 1 / 3<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token comment">/* 等同于 */</span>
<span class="token selector">.item-1</span> <span class="token punctuation">{</span>
  <span class="token property">background</span><span class="token punctuation">:</span> #b03532<span class="token punctuation">;</span>
  <span class="token property">grid-column</span><span class="token punctuation">:</span> 1 / span 2<span class="token punctuation">;</span>
  <span class="token property">grid-row</span><span class="token punctuation">:</span> 1 / span 2<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div></blockquote><p>斜杠以及后面的部分可以省略，默认跨越一个网格。</p><blockquote><div class="language-css" data-ext="css"><pre class="language-css"><code><span class="token selector">.item-1</span> <span class="token punctuation">{</span>
  <span class="token property">grid-column</span><span class="token punctuation">:</span> 1<span class="token punctuation">;</span>
  <span class="token property">grid-row</span><span class="token punctuation">:</span> 1<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div></blockquote><h3 id="grid-area-属性" tabindex="-1"><a class="header-anchor" href="#grid-area-属性" aria-hidden="true">#</a> grid-area 属性</h3><p><code>grid-area</code>属性指定项目放在哪一个区域。</p><blockquote><div class="language-css" data-ext="css"><pre class="language-css"><code><span class="token selector">.item-1</span> <span class="token punctuation">{</span>
  <span class="token property">grid-area</span><span class="token punctuation">:</span> e<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div></blockquote><p><code>grid-area</code>属性还可用作<code>grid-row-start</code>、<code>grid-column-start</code>、<code>grid-row-end</code>、<code>grid-column-end</code>的合并简写形式，直接指定项目的位置。</p><blockquote><div class="language-css" data-ext="css"><pre class="language-css"><code><span class="token selector">.item</span> <span class="token punctuation">{</span>
  <span class="token property">grid-area</span><span class="token punctuation">:</span> &lt;row-start&gt; / &lt;column-start&gt; / &lt;row-end&gt; / &lt;column-end&gt;<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div></blockquote><h3 id="justify-self-属性-align-self-属性-place-self-属性" tabindex="-1"><a class="header-anchor" href="#justify-self-属性-align-self-属性-place-self-属性" aria-hidden="true">#</a> justify-self 属性， align-self 属性， place-self 属性</h3><p><code>justify-self</code>属性设置单元格内容的水平位置（左中右），跟<code>justify-items</code>属性的用法完全一致，但只作用于单个项目。</p><p><code>align-self</code>属性设置单元格内容的垂直位置（上中下），跟<code>align-items</code>属性的用法完全一致，也是只作用于单个项目。</p><blockquote><div class="language-css" data-ext="css"><pre class="language-css"><code><span class="token selector">.item</span> <span class="token punctuation">{</span>
  <span class="token property">justify-self</span><span class="token punctuation">:</span> start | end | center | stretch<span class="token punctuation">;</span>
  <span class="token property">align-self</span><span class="token punctuation">:</span> start | end | center | stretch<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div></blockquote><p>这两个属性都可以取下面四个值。</p><blockquote><ul><li>start：对齐单元格的起始边缘。</li><li>end：对齐单元格的结束边缘。</li><li>center：单元格内部居中。</li><li>stretch：拉伸，占满单元格的整个宽度（默认值）。</li></ul></blockquote><p>下面是<code>justify-self: start</code>的例子。</p><blockquote><div class="language-css" data-ext="css"><pre class="language-css"><code><span class="token selector">.item-1</span>  <span class="token punctuation">{</span>
  <span class="token property">justify-self</span><span class="token punctuation">:</span> start<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div></blockquote><p><img src="`+k+`" alt="img"></p><p><code>place-self</code>属性是<code>align-self</code>属性和<code>justify-self</code>属性的合并简写形式。</p><blockquote><div class="language-css" data-ext="css"><pre class="language-css"><code><span class="token property">place-self</span><span class="token punctuation">:</span> &lt;align-self&gt; &lt;justify-self&gt;<span class="token punctuation">;</span>
</code></pre></div></blockquote><p>下面是一个例子。</p><blockquote><div class="language-css" data-ext="css"><pre class="language-css"><code><span class="token property">place-self</span><span class="token punctuation">:</span> center center<span class="token punctuation">;</span>
</code></pre></div></blockquote><p>如果省略第二个值，<code>place-self</code>属性会认为这两个值相等。</p><h2 id="个人示例" tabindex="-1"><a class="header-anchor" href="#个人示例" aria-hidden="true">#</a> 个人示例</h2><div class="language-html" data-ext="html"><pre class="language-html"><code>
     <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>ctn<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>

         <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>ctx<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>1<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
         <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>ctx<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>2<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
         <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>ctx<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>3<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
         <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>ctx<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>4<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
         <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>ctx<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>5<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
         <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>ctx<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>6<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
         <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>ctx<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>7<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
         <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>ctx<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>8<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
         <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>ctx<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>9<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
         <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>ctx<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>10<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
         <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>ctx<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>11<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
         <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>ctx<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>12<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>

     <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>


<span class="token comment">&lt;!-- 使用 vue 的方式 --&gt;</span>
     <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>app<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
         <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>ctn<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
             <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>ctx<span class="token punctuation">&quot;</span></span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&#39;</span>show(itm)<span class="token punctuation">&#39;</span></span> <span class="token attr-name">v-for</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&#39;</span>itm in carList<span class="token punctuation">&#39;</span></span> <span class="token attr-name">:key</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&#39;</span>itm<span class="token punctuation">&#39;</span></span><span class="token punctuation">&gt;</span></span>{{ itm}}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
         <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
     <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
     <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
         <span class="token keyword">new</span> <span class="token class-name">Vue</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
             <span class="token literal-property property">el</span><span class="token operator">:</span> <span class="token string">&#39;#app&#39;</span><span class="token punctuation">,</span>
             <span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                 <span class="token keyword">return</span> <span class="token punctuation">{</span>
                     <span class="token literal-property property">carList</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;a&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;b&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;c&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;d&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;e&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;f&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;g&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;h&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;i&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;j&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;k&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;L&#39;</span><span class="token punctuation">]</span>
                 <span class="token punctuation">}</span>
             <span class="token punctuation">}</span><span class="token punctuation">,</span>
             <span class="token literal-property property">methods</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                 <span class="token function">show</span><span class="token punctuation">(</span><span class="token parameter">msg</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                     <span class="token function">alert</span><span class="token punctuation">(</span>msg<span class="token punctuation">)</span>
                 <span class="token punctuation">}</span><span class="token punctuation">,</span>
                 <span class="token function">showPanel</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                     <span class="token function">alert</span><span class="token punctuation">(</span><span class="token string">&#39;show&#39;</span><span class="token punctuation">)</span>
                 <span class="token punctuation">}</span>
             <span class="token punctuation">}</span><span class="token punctuation">,</span>
             <span class="token function">mounted</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                 console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;mounted&#39;</span><span class="token punctuation">)</span>
             <span class="token punctuation">}</span><span class="token punctuation">,</span>
             <span class="token literal-property property">filters</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                 <span class="token function">hasName</span><span class="token punctuation">(</span><span class="token parameter">name</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                     <span class="token keyword">return</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">Jack-</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>name<span class="token punctuation">.</span><span class="token function">toUpperCase</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token string"> Semis</span><span class="token template-punctuation string">\`</span></span>
                 <span class="token punctuation">}</span>
             <span class="token punctuation">}</span>
         <span class="token punctuation">}</span><span class="token punctuation">)</span>
     </span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><div class="language-css" data-ext="css"><pre class="language-css"><code><span class="token selector">*</span> <span class="token punctuation">{</span>
    <span class="token property">margin</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
    <span class="token property">padding</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
    <span class="token property">box-sizing</span><span class="token punctuation">:</span> border-box<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">body</span> <span class="token punctuation">{</span>
    <span class="token comment">/* overflow: hidden; */</span>
    <span class="token property">background-color</span><span class="token punctuation">:</span> #333<span class="token punctuation">;</span>
    <span class="token property">color</span><span class="token punctuation">:</span> white<span class="token punctuation">;</span>
    <span class="token property">font-family</span><span class="token punctuation">:</span> <span class="token string">&#39;Segoe UI&#39;</span><span class="token punctuation">,</span> Tahoma<span class="token punctuation">,</span> Geneva<span class="token punctuation">,</span> Verdana<span class="token punctuation">,</span> sans-serif<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">a</span> <span class="token punctuation">{</span>
    <span class="token property">text-decoration</span><span class="token punctuation">:</span> none<span class="token punctuation">;</span>
    <span class="token property">color</span><span class="token punctuation">:</span> black<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
 



<span class="token comment">/* grid */</span>
<span class="token comment">/* 
a. 给外层容器设置 display:grid 属性;
b. 是设置容器的行数和列数 (网格布局)
      grid-template-columns: 列数;
      grid-template-rows: 行数;
      row-gap:  行间距;
      column-gap: 列间距;



c. 对齐方式

  1. 单元格整体对齐方式
  2. 单元格独立对齐方式
  3. 内容区域对齐方式

*/</span>

<span class="token selector">.ctn</span> <span class="token punctuation">{</span>
    <span class="token property">display</span><span class="token punctuation">:</span> grid<span class="token punctuation">;</span>

    <span class="token comment">/* repeat 列数 */</span>
    <span class="token property">grid-template-columns</span><span class="token punctuation">:</span> <span class="token function">repeat</span><span class="token punctuation">(</span>4<span class="token punctuation">,</span> 1fr<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token property">grid-template-rows</span><span class="token punctuation">:</span> <span class="token function">repeat</span><span class="token punctuation">(</span>4<span class="token punctuation">,</span> 1fr<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token property">grid-gap</span><span class="token punctuation">:</span> 10px<span class="token punctuation">;</span>
    <span class="token property">height</span><span class="token punctuation">:</span> 100vh<span class="token punctuation">;</span>


<span class="token punctuation">}</span>


<span class="token selector">.ctx</span> <span class="token punctuation">{</span>
    <span class="token property">transition</span><span class="token punctuation">:</span> all 0.5s ease-in<span class="token punctuation">;</span>

    <span class="token property">background-image</span><span class="token punctuation">:</span> <span class="token url"><span class="token function">url</span><span class="token punctuation">(</span>./11.jpeg<span class="token punctuation">)</span></span><span class="token punctuation">;</span>
    <span class="token comment">/* 平铺 */</span>
    <span class="token property">background-repeat</span><span class="token punctuation">:</span> no-repeat<span class="token punctuation">;</span>
    <span class="token property">background-size</span><span class="token punctuation">:</span> cover<span class="token punctuation">;</span>
    <span class="token property">background-attachment</span><span class="token punctuation">:</span> fixed<span class="token punctuation">;</span>

    <span class="token property">border-radius</span><span class="token punctuation">:</span> 10px<span class="token punctuation">;</span>

<span class="token punctuation">}</span>

<span class="token selector">.ctx:hover</span> <span class="token punctuation">{</span>
    <span class="token property">opacity</span><span class="token punctuation">:</span> 0.7<span class="token punctuation">;</span>
    <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">scale</span><span class="token punctuation">(</span>0.98<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token property">cursor</span><span class="token punctuation">:</span> pointer<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.ctx:nth-child(1)</span> <span class="token punctuation">{</span>
    <span class="token property">grid-column</span><span class="token punctuation">:</span> 1/3<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.ctx:nth-child(6)</span> <span class="token punctuation">{</span>
    <span class="token comment">/* span  从第三列开始  延伸 2个单元格 */</span>
    <span class="token property">grid-column</span><span class="token punctuation">:</span> 3 / span 2<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.ctx:nth-child(9)</span> <span class="token punctuation">{</span>
    <span class="token property">grid-column</span><span class="token punctuation">:</span> 3/5<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.ctx:nth-child(10)</span> <span class="token punctuation">{</span>
    <span class="token property">grid-column</span><span class="token punctuation">:</span> 1/3<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div>`,167),m=[g];function q(h,b){return s(),a("div",null,m)}const v=n(d,[["render",q],["__file","sid_grid.html.vue"]]);export{v as default};
