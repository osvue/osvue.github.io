import{_ as e,M as t,p as c,q as o,R as n,t as a,N as r,a1 as i}from"./framework-d81ad7e5.js";const l={},p={id:"caniuse",tabindex:"-1"},d=n("a",{class:"header-anchor",href:"#caniuse","aria-hidden":"true"},"#",-1),h={href:"https://caniuse.com/",target:"_blank",rel:"noopener noreferrer"},u=i(`<h3 id="css-style-sheet" tabindex="-1"><a class="header-anchor" href="#css-style-sheet" aria-hidden="true">#</a> css style sheet</h3><h3 id="layui" tabindex="-1"><a class="header-anchor" href="#layui" aria-hidden="true">#</a> LAYUI</h3><h3 id="bootstrap" tabindex="-1"><a class="header-anchor" href="#bootstrap" aria-hidden="true">#</a> BOOTSTRAP</h3><h3 id="hplus" tabindex="-1"><a class="header-anchor" href="#hplus" aria-hidden="true">#</a> HPLUS</h3><h3 id="box-全屏" tabindex="-1"><a class="header-anchor" href="#box-全屏" aria-hidden="true">#</a> box 全屏</h3><div class="language-css" data-ext="css"><pre class="language-css"><code><span class="token comment">/* 
使用CSS根元素
使用CSS根元素可以使div全屏幕占比，达到全屏的效果。 
*/</span>

    
      <span class="token selector">html, body, .fullscreen-div</span> <span class="token punctuation">{</span>
        <span class="token property">height</span><span class="token punctuation">:</span> 100%<span class="token punctuation">;</span>
        <span class="token property">width</span><span class="token punctuation">:</span> 100%<span class="token punctuation">;</span>
        <span class="token property">margin</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
        <span class="token property">padding</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
    
</code></pre></div><h3 id="flex" tabindex="-1"><a class="header-anchor" href="#flex" aria-hidden="true">#</a> flex</h3><h3 id="grid" tabindex="-1"><a class="header-anchor" href="#grid" aria-hidden="true">#</a> grid</h3><hr><h2 id="css常用单位" tabindex="-1"><a class="header-anchor" href="#css常用单位" aria-hidden="true">#</a> css常用单位</h2><div class="custom-container tip"><p class="custom-container-title">TIP</p><p>px 绝对单位 <br> em 相对单位, 根据目前容器的大小来设定 再根据目前em 相乘,可以理解为倍数<br> rem 相对单位,相对于 根root 元素的大小来设定的<br> vw&amp;vh 设定值在 1~100 之间决定 viewport width viewport height 指的是我们当前所看到的 视图窗口;<br></p><p>vmin &amp; vmax 多适用于Media Query 响应式</p></div><h2 id="css-权重" tabindex="-1"><a class="header-anchor" href="#css-权重" aria-hidden="true">#</a> css 权重</h2><div class="language-css" data-ext="css"><pre class="language-css"><code><span class="token selector">.app</span><span class="token punctuation">{</span>
    <span class="token property">width</span><span class="token punctuation">:</span>100px <span class="token important">!important</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><h2 id="media" tabindex="-1"><a class="header-anchor" href="#media" aria-hidden="true">#</a> @media</h2><p>如果文档宽度小于 300 像素则修改背景颜色(background-color):</p><div class="language-css" data-ext="css"><pre class="language-css"><code><span class="token atrule"><span class="token rule">@media</span> screen <span class="token keyword">and</span> <span class="token punctuation">(</span><span class="token property">max-width</span><span class="token punctuation">:</span> 300px<span class="token punctuation">)</span></span> <span class="token punctuation">{</span>
    <span class="token selector">body</span> <span class="token punctuation">{</span>
        <span class="token property">background-color</span><span class="token punctuation">:</span>lightblue<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><h2 id="css-文本" tabindex="-1"><a class="header-anchor" href="#css-文本" aria-hidden="true">#</a> css 文本</h2><p><code>word-spacing　　letter-spacing</code></p><p>前者调节 单词之间的间隙，后者调节字符之间的间隙</p><div class="language-text" data-ext="text"><pre class="language-text"><code>参数：

　　normal：默认的

　　　　　　直接用 px  就可以。可以接受负值。

text-indent

设置文本内容的 缩进 可以填px  也可以填 %，一般 都填 2em


columns：

　　　除table外的非替换块级元素, table cells, inline-block这些元素外，可以使用

第一个值：设置每列的宽度。

第二个值：设置列数。
 设置了  columns：300px 3；  也就是 成3列出现， 每列 300px，但是你仔细观察，在改变窗口大小的时候， 也并不是会一直固定的， 会随着 窗口的大小而压缩，拉伸宽度， 和列数

column-width:

　　跟上面的值是一样的，不过他是设置 宽和 列，这个只是单独设置 宽。


 column-count:

　　单独设置 列数，设置好的列数，并不会随着父元素的宽的改变而改变， 是几列，就一直几列

 column-gap:

　　设置每列与每列之间的间隙


column-rule:

　　这个属性吧，跟border：  一模一样。 也是设置边框的。只不过人家 设置的是多列的边框。

　　column-rule：1px solid #000； (下面三个属性的缩写)

　　border: 1px solid #000;

还有 column-rule-width:  对应   border-width：

　　 column-rule-style:　对应    border-style:

　　 column-rule-color:　对应　border-color:


 column-span：

　　除浮动和绝对定位之外的块级元素， 也就是说 行级标签能用。

参数：默认是 none， 

只有一个值可以填，  all


text-shadow
 跟  box-shadow 差不多 
</code></pre></div><h3 id="浏览器的渲染过程" tabindex="-1"><a class="header-anchor" href="#浏览器的渲染过程" aria-hidden="true">#</a> 浏览器的渲染过程？</h3><ol><li>将获取的html解析成dom树</li><li>处理css，构成层叠样式表模型CSSOM</li><li>将dom树和CSSOM合并为渲染树</li><li>根据CSSOM将渲染树的节点布局计算</li><li>将渲染树节点样式绘制到页面上</li></ol><ul><li>注意 <ul><li>在渲染的过程中是自上而下渲染，</li><li>js会阻塞页面的渲染，优先等js执行完成</li><li>如果在渲染的过程中改变了样式，会造成回流需要重新渲染</li></ul></li></ul><h4 id="src与href的区别" tabindex="-1"><a class="header-anchor" href="#src与href的区别" aria-hidden="true">#</a> src与href的区别？</h4><ol><li>href 是指向网络资源所在位置，建立和当前元素（锚点）或当前文档（链接）之间的链接，用于超链接。</li><li>src是指向外部资源的位置，指向的内容将会嵌入到文档中当前标签所在位置；在请求src资源时会将其指向的资源下载并应用到文档内，例如js脚本，img图片和frame等元素。当浏览器解析到该元素时，会暂停其他资源的下载和处理，直到将该资源加载、编译、执行完毕，图片和框架等元素也如此，类似于将所指向资源嵌入当前标签内。这也是为什么将js脚本放在底部而不是头部。</li></ol>`,25);function x(k,m){const s=t("ExternalLinkIcon");return c(),o("div",null,[n("h2",p,[d,a(),n("a",h,[a("caniuse"),r(s)])]),u])}const f=e(l,[["render",x],["__file","index.html.vue"]]);export{f as default};
