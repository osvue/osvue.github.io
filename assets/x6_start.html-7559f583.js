import{_ as e,M as o,p as c,q as l,R as n,t as s,N as t,a1 as p}from"./framework-d81ad7e5.js";const r={},u=p(`<h2 id="安装" tabindex="-1"><a class="header-anchor" href="#安装" aria-hidden="true">#</a> 安装</h2><p>通过 npm 或 yarn 命令安装 X6。</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># npm</span>
<span class="token function">npm</span> <span class="token function">install</span> @antv/x6 <span class="token parameter variable">--save</span>

<span class="token comment"># yarn</span>
<span class="token function">yarn</span> <span class="token function">add</span> @antv/x6
</code></pre></div><p>安装完成之后，使用 <code>import</code> 或 <code>require</code> 进行引用。</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> Graph <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@antv/x6&#39;</span><span class="token punctuation">;</span>
</code></pre></div><h3 id="缩放与平移" tabindex="-1"><a class="header-anchor" href="#缩放与平移" aria-hidden="true">#</a> 缩放与平移</h3><p>画布的拖拽、缩放也是常用操作，Graph 中通过 <code>panning</code> 和 <code>mousewheel</code> 配置来实现这两个功能，鼠标按下画布后移动时会拖拽画布，滚动鼠标滚轮会缩放画布。</p><div class="language-typescript" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">const</span> graph <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Graph</span><span class="token punctuation">(</span><span class="token punctuation">{</span>

  <span class="token operator">...</span><span class="token punctuation">,</span>

  panning<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>

  mousewheel<span class="token operator">:</span> <span class="token boolean">true</span>

<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre></div><h3 id="添加节点" tabindex="-1"><a class="header-anchor" href="#添加节点" aria-hidden="true">#</a> 添加节点</h3>`,9),i={href:"https://x6.antv.antgroup.com/zh/docs/api/model/cell",target:"_blank",rel:"noopener noreferrer"},k=n("code",null,"Cell",-1),d=p(`<table><thead><tr><th style="text-align:left;">属性名</th><th style="text-align:left;">类型</th><th style="text-align:left;">默认值</th><th style="text-align:left;">描述</th></tr></thead><tbody><tr><td style="text-align:left;">x</td><td style="text-align:left;">number</td><td style="text-align:left;">0</td><td style="text-align:left;">节点位置 x 坐标，单位为 px。</td></tr><tr><td style="text-align:left;">y</td><td style="text-align:left;">number</td><td style="text-align:left;">0</td><td style="text-align:left;">节点位置 y 坐标，单位为 px。</td></tr><tr><td style="text-align:left;">width</td><td style="text-align:left;">number</td><td style="text-align:left;">1</td><td style="text-align:left;">节点宽度，单位为 px。</td></tr><tr><td style="text-align:left;">height</td><td style="text-align:left;">number</td><td style="text-align:left;">1</td><td style="text-align:left;">节点高度，单位为 px。</td></tr><tr><td style="text-align:left;">angle</td><td style="text-align:left;">number</td><td style="text-align:left;">0</td><td style="text-align:left;">节点旋转角度。</td></tr></tbody></table><div class="language-typescript" data-ext="ts"><pre class="language-typescript"><code>graph<span class="token punctuation">.</span><span class="token function">addNode</span><span class="token punctuation">(</span><span class="token punctuation">{</span>

  shape<span class="token operator">:</span> <span class="token string">&#39;rect&#39;</span><span class="token punctuation">,</span>

  x<span class="token operator">:</span> <span class="token number">100</span><span class="token punctuation">,</span>

  y<span class="token operator">:</span> <span class="token number">40</span><span class="token punctuation">,</span>

  width<span class="token operator">:</span> <span class="token number">100</span><span class="token punctuation">,</span>

  height<span class="token operator">:</span> <span class="token number">40</span><span class="token punctuation">,</span>

<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre></div><h2 id="内置节点" tabindex="-1"><a class="header-anchor" href="#内置节点" aria-hidden="true">#</a> 内置节点</h2><p>上面使用 <code>shape</code> 来指定了节点的图形，<code>shape</code> 的默认值为 <code>rect</code>。X6 内置节点与 <code>shape</code> 名称对应关系如下表。</p><table><thead><tr><th style="text-align:left;">构造函数</th><th style="text-align:left;">shape 名称</th><th style="text-align:left;">描述</th></tr></thead><tbody><tr><td style="text-align:left;">Shape.Rect</td><td style="text-align:left;">rect</td><td style="text-align:left;">矩形。</td></tr><tr><td style="text-align:left;">Shape.Circle</td><td style="text-align:left;">circle</td><td style="text-align:left;">圆形。</td></tr><tr><td style="text-align:left;">Shape.Ellipse</td><td style="text-align:left;">ellipse</td><td style="text-align:left;">椭圆。</td></tr><tr><td style="text-align:left;">Shape.Polygon</td><td style="text-align:left;">polygon</td><td style="text-align:left;">多边形。</td></tr><tr><td style="text-align:left;">Shape.Polyline</td><td style="text-align:left;">polyline</td><td style="text-align:left;">折线。</td></tr><tr><td style="text-align:left;">Shape.Path</td><td style="text-align:left;">path</td><td style="text-align:left;">路径。</td></tr><tr><td style="text-align:left;">Shape.Image</td><td style="text-align:left;">image</td><td style="text-align:left;">图片。</td></tr><tr><td style="text-align:left;">Shape.HTML</td><td style="text-align:left;">html</td><td style="text-align:left;">HTML 节点，使用 <code>foreignObject</code> 渲染 HTML 片段。</td></tr></tbody></table><h2 id="定制节点" tabindex="-1"><a class="header-anchor" href="#定制节点" aria-hidden="true">#</a> 定制节点</h2>`,6),g=n("code",null,"markup",-1),h=n("code",null,"attrs",-1),y=n("code",null,"markup",-1),m=n("code",null,"HTML",-1),f=n("code",null,"attrs",-1),x=n("code",null,"CSS",-1),b={href:"https://x6.antv.antgroup.com/zh/docs/api/model/cell#markup",target:"_blank",rel:"noopener noreferrer"},_={href:"https://x6.antv.antgroup.com/zh/docs/api/model/cell#attrs",target:"_blank",rel:"noopener noreferrer"},v=n("p",null,"接下来我们会遇到一个问题，定制的内容要被多个节点使用，是不是需要每个节点都重新定义一次呢？答案是否定的，X6 提供了便捷的方式，可以让不同的节点复用配置。",-1),q=n("h2",{id:"修改节点-大小颜色",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#修改节点-大小颜色","aria-hidden":"true"},"#"),s(" 修改节点（大小颜色）")],-1),w=n("p",null,"在渲染完成之后，我们还可以通过 API 修改节点的所有属性。我们会常用到下面两个方法：",-1),z={href:"https://x6.antv.antgroup.com/zh/docs/api/model/cell#%E8%8A%82%E7%82%B9%E5%92%8C%E8%BE%B9%E7%9A%84%E5%B1%9E%E6%80%A7-properties",target:"_blank",rel:"noopener noreferrer"},E={href:"https://x6.antv.antgroup.com/zh/docs/api/model/cell#%E5%85%83%E7%B4%A0%E5%B1%9E%E6%80%A7-attrs",target:"_blank",rel:"noopener noreferrer"},I=n("h2",{id:"添加边",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#添加边","aria-hidden":"true"},"#"),s(" 添加边")],-1),M={href:"https://x6.antv.antgroup.com/zh/docs/api/model/cell",target:"_blank",rel:"noopener noreferrer"},N=n("code",null,"Cell",-1),C=n("thead",null,[n("tr",null,[n("th",{style:{"text-align":"left"}},"属性名"),n("th",{style:{"text-align":"left"}},"类型"),n("th",{style:{"text-align":"left"}},"默认值"),n("th",{style:{"text-align":"left"}},"描述")])],-1),S=n("tr",null,[n("td",{style:{"text-align":"left"}},"source"),n("td",{style:{"text-align":"left"}},"TerminalData"),n("td",{style:{"text-align":"left"}},"-"),n("td",{style:{"text-align":"left"}},"源节点或起始点。")],-1),A=n("tr",null,[n("td",{style:{"text-align":"left"}},"target"),n("td",{style:{"text-align":"left"}},"TerminalData"),n("td",{style:{"text-align":"left"}},"-"),n("td",{style:{"text-align":"left"}},"目标节点或目标点。")],-1),D=n("tr",null,[n("td",{style:{"text-align":"left"}},"vertices"),n("td",{style:{"text-align":"left"}},"Point.PointLike[]"),n("td",{style:{"text-align":"left"}},"-"),n("td",{style:{"text-align":"left"}},"路径点。")],-1),P=n("tr",null,[n("td",{style:{"text-align":"left"}},"router"),n("td",{style:{"text-align":"left"}},"RouterData"),n("td",{style:{"text-align":"left"}},"-"),n("td",{style:{"text-align":"left"}},"路由。")],-1),X=n("tr",null,[n("td",{style:{"text-align":"left"}},"connector"),n("td",{style:{"text-align":"left"}},"ConnectorData"),n("td",{style:{"text-align":"left"}},"-"),n("td",{style:{"text-align":"left"}},"连接器。")],-1),O=n("tr",null,[n("td",{style:{"text-align":"left"}},"labels"),n("td",{style:{"text-align":"left"}},"Label[]"),n("td",{style:{"text-align":"left"}},"-"),n("td",{style:{"text-align":"left"}},"标签。")],-1),B=n("td",{style:{"text-align":"left"}},"defaultLabel",-1),j=n("td",{style:{"text-align":"left"}},"Label",-1),L={style:{"text-align":"left"}},G={href:"https://x6.antv.antgroup.com/zh/docs/api/model/labels#%E9%BB%98%E8%AE%A4%E6%A0%87%E7%AD%BE",target:"_blank",rel:"noopener noreferrer"},T=n("td",{style:{"text-align":"left"}},"默认标签。",-1),H=p(`<div class="language-typescript" data-ext="ts"><pre class="language-typescript"><code>graph<span class="token punctuation">.</span><span class="token function">addEdge</span><span class="token punctuation">(</span><span class="token punctuation">{</span>

  shape<span class="token operator">:</span> <span class="token string">&#39;edge&#39;</span><span class="token punctuation">,</span>

  source<span class="token operator">:</span> <span class="token string">&#39;node1&#39;</span><span class="token punctuation">,</span>

  target<span class="token operator">:</span> <span class="token string">&#39;node2&#39;</span><span class="token punctuation">,</span>

<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre></div><h2 id="配置边" tabindex="-1"><a class="header-anchor" href="#配置边" aria-hidden="true">#</a> 配置边</h2><p>下面分别看下上面的配置如何使用。</p><h3 id="source-target" tabindex="-1"><a class="header-anchor" href="#source-target" aria-hidden="true">#</a> source/target</h3><p>边的源和目标节点(点)。</p><div class="language-typescript" data-ext="ts"><pre class="language-typescript"><code>graph<span class="token punctuation">.</span><span class="token function">addEdge</span><span class="token punctuation">(</span><span class="token punctuation">{</span>  source<span class="token operator">:</span> rect1<span class="token punctuation">,</span> <span class="token comment">// 源节点  target: rect2, // 目标节点})</span>
graph<span class="token punctuation">.</span><span class="token function">addEdge</span><span class="token punctuation">(</span><span class="token punctuation">{</span>  source<span class="token operator">:</span> <span class="token string">&#39;rect1&#39;</span><span class="token punctuation">,</span> <span class="token comment">// 源节点 ID  target: &#39;rect2&#39;, // 目标节点 ID})</span>
graph<span class="token punctuation">.</span><span class="token function">addEdge</span><span class="token punctuation">(</span><span class="token punctuation">{</span>  source<span class="token operator">:</span> <span class="token punctuation">{</span> cell<span class="token operator">:</span> rect1<span class="token punctuation">,</span> port<span class="token operator">:</span> <span class="token string">&#39;out-port-1&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token comment">// 源节点和连接桩 ID  target: { cell: &#39;rect2&#39;, port: &#39;in-port-1&#39; }, // 目标节点 ID 和连接桩 ID})</span>
graph<span class="token punctuation">.</span><span class="token function">addEdge</span><span class="token punctuation">(</span><span class="token punctuation">{</span>  source<span class="token operator">:</span> <span class="token string">&#39;rect1&#39;</span><span class="token punctuation">,</span> <span class="token comment">// 源节点 ID  target: { x: 100, y: 120 }, // 目标点})</span>
</code></pre></div><h3 id="router" tabindex="-1"><a class="header-anchor" href="#router" aria-hidden="true">#</a> router</h3>`,7),J=n("code",null,"router",-1),V=n("code",null,"vertices",-1),W={href:"https://x6.antv.antgroup.com/zh/docs/api/registry/router#orth",target:"_blank",rel:"noopener noreferrer"},F=p(`<div class="language-typescript" data-ext="ts"><pre class="language-typescript"><code>graph<span class="token punctuation">.</span><span class="token function">addEdge</span><span class="token punctuation">(</span><span class="token punctuation">{</span>

  source<span class="token operator">:</span> rect1<span class="token punctuation">,</span>

  target<span class="token operator">:</span> rect2<span class="token punctuation">,</span>

  vertices<span class="token operator">:</span> <span class="token punctuation">[</span>

    <span class="token punctuation">{</span> x<span class="token operator">:</span> <span class="token number">100</span><span class="token punctuation">,</span> y<span class="token operator">:</span> <span class="token number">200</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>

    <span class="token punctuation">{</span> x<span class="token operator">:</span> <span class="token number">300</span><span class="token punctuation">,</span> y<span class="token operator">:</span> <span class="token number">120</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>

  <span class="token punctuation">]</span><span class="token punctuation">,</span>

  <span class="token comment">// 如果没有 args 参数，可以简写为 router: &#39;orth&#39;</span>

  router<span class="token operator">:</span> <span class="token punctuation">{</span>

    name<span class="token operator">:</span> <span class="token string">&#39;orth&#39;</span><span class="token punctuation">,</span>

    args<span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>

  <span class="token punctuation">}</span><span class="token punctuation">,</span>

<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre></div><p>X6 默认提供了以下几种路由，点击下面的链接查看每种路由的使用方式。</p>`,2),R={href:"https://x6.antv.antgroup.com/zh/docs/api/registry/router#normal",target:"_blank",rel:"noopener noreferrer"},K={href:"https://x6.antv.antgroup.com/zh/docs/api/registry/router#orth",target:"_blank",rel:"noopener noreferrer"},Z={href:"https://x6.antv.antgroup.com/zh/docs/api/registry/router#oneside",target:"_blank",rel:"noopener noreferrer"},Y={href:"https://x6.antv.antgroup.com/zh/docs/api/registry/router#manhattan",target:"_blank",rel:"noopener noreferrer"},Q={href:"https://x6.antv.antgroup.com/zh/docs/api/registry/router#metro",target:"_blank",rel:"noopener noreferrer"},U={href:"https://x6.antv.antgroup.com/zh/docs/api/registry/router#er",target:"_blank",rel:"noopener noreferrer"},$=p('<p>另外，我们也可以注册自定义路由</p><h2 id="使用箭头" tabindex="-1"><a class="header-anchor" href="#使用箭头" aria-hidden="true">#</a> 使用箭头</h2><p>我们定义了 <code>sourceMarker</code> 和 <code>targetMarker</code> 两个特殊属性来为边定制起始和终止箭头。例如，对 <code>Shape.Edge</code> 我们可以通过 <code>line</code> 选择器来指定起始和终止箭头。</p><h3 id="内置箭头" tabindex="-1"><a class="header-anchor" href="#内置箭头" aria-hidden="true">#</a> 内置箭头</h3><p>X6 提供了以下几种内置箭头，使用时只需要指定箭头名和参数（可省略）即可。</p>',5),nn={href:"https://x6.antv.antgroup.com/zh/docs/api/model/marker#block",target:"_blank",rel:"noopener noreferrer"},sn={href:"https://x6.antv.antgroup.com/zh/docs/api/model/marker#classic",target:"_blank",rel:"noopener noreferrer"},an={href:"https://x6.antv.antgroup.com/zh/docs/api/model/marker#diamond",target:"_blank",rel:"noopener noreferrer"},tn={href:"https://x6.antv.antgroup.com/zh/docs/api/model/marker#cross",target:"_blank",rel:"noopener noreferrer"},pn={href:"https://x6.antv.antgroup.com/zh/docs/api/model/marker#async",target:"_blank",rel:"noopener noreferrer"},en={href:"https://x6.antv.antgroup.com/zh/docs/api/model/marker#path",target:"_blank",rel:"noopener noreferrer"},on={href:"https://x6.antv.antgroup.com/zh/docs/api/model/marker#circle",target:"_blank",rel:"noopener noreferrer"},cn={href:"https://x6.antv.antgroup.com/zh/docs/api/model/marker#circleplus",target:"_blank",rel:"noopener noreferrer"},ln={href:"https://x6.antv.antgroup.com/zh/docs/api/model/marker#ellipse",target:"_blank",rel:"noopener noreferrer"},rn=p(`<div class="language-typescript" data-ext="ts"><pre class="language-typescript"><code>graph<span class="token punctuation">.</span><span class="token function">addEdge</span><span class="token punctuation">(</span><span class="token punctuation">{</span>

  shape<span class="token operator">:</span> <span class="token string">&#39;edge&#39;</span><span class="token punctuation">,</span>

  sourece<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">100</span><span class="token punctuation">,</span> <span class="token number">100</span><span class="token punctuation">]</span><span class="token punctuation">,</span>

  target<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">500</span><span class="token punctuation">,</span> <span class="token number">500</span><span class="token punctuation">]</span><span class="token punctuation">,</span>

  attrs<span class="token operator">:</span> <span class="token punctuation">{</span>

    line<span class="token operator">:</span> <span class="token punctuation">{</span>

      sourceMarker<span class="token operator">:</span> <span class="token string">&#39;block&#39;</span><span class="token punctuation">,</span> <span class="token comment">// 实心箭头</span>

      targetMarker<span class="token operator">:</span> <span class="token punctuation">{</span>

        name<span class="token operator">:</span> <span class="token string">&#39;ellipse&#39;</span><span class="token punctuation">,</span> <span class="token comment">// 椭圆</span>

        rx<span class="token operator">:</span> <span class="token number">10</span><span class="token punctuation">,</span> <span class="token comment">// 椭圆箭头的 x 半径</span>

        ry<span class="token operator">:</span> <span class="token number">6</span><span class="token punctuation">,</span> <span class="token comment">// 椭圆箭头的 y 半径</span>

      <span class="token punctuation">}</span><span class="token punctuation">,</span>

    <span class="token punctuation">}</span><span class="token punctuation">,</span>

  <span class="token punctuation">}</span><span class="token punctuation">,</span>

<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre></div><h1 id="连接桩" tabindex="-1"><a class="header-anchor" href="#连接桩" aria-hidden="true">#</a> 连接桩</h1><p>阅读时间约 6 分钟</p><h4 id="在本章节中主要介绍连接桩相关的知识-通过阅读你可以了解到" tabindex="-1"><a class="header-anchor" href="#在本章节中主要介绍连接桩相关的知识-通过阅读你可以了解到" aria-hidden="true">#</a> 在本章节中主要介绍连接桩相关的知识,通过阅读你可以了解到</h4><ul><li>如何在节点中配置连接桩</li><li>连接桩的增、删、改</li><li>如何配置连接桩的位置</li><li>如何配置连接桩上标签的位置</li></ul><h2 id="配置连接桩" tabindex="-1"><a class="header-anchor" href="#配置连接桩" aria-hidden="true">#</a> 配置连接桩</h2><p>首先我们将具有相同行为和外观的连接桩归为同一组，并通过 <code>groups</code> 选项来设置分组，该选项是一个对象 <code>{ [groupName: string]: PortGroupMetadata }</code>，组名为键，值为每组连接桩的默认选项，支持的选项如下：</p><div class="language-typescript" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">interface</span> <span class="token class-name">PortGroupMetadata</span> <span class="token punctuation">{</span>

  markup<span class="token operator">?</span><span class="token operator">:</span> Markup <span class="token comment">// 连接桩 DOM 结构定义。</span>

  attrs<span class="token operator">?</span><span class="token operator">:</span> Attr<span class="token punctuation">.</span>CellAttrs <span class="token comment">// 属性和样式。</span>

  zIndex<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">number</span> <span class="token operator">|</span> <span class="token string">&#39;auto&#39;</span> <span class="token comment">// 连接桩的 DOM 层级，值越大层级越高。</span>

  <span class="token comment">// 群组中连接桩的布局。</span>

  position<span class="token operator">?</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token builtin">number</span><span class="token punctuation">,</span> <span class="token builtin">number</span><span class="token punctuation">]</span> <span class="token operator">|</span> <span class="token builtin">string</span> <span class="token operator">|</span> <span class="token punctuation">{</span> name<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span> args<span class="token operator">?</span><span class="token operator">:</span> object <span class="token punctuation">}</span>

  label<span class="token operator">?</span><span class="token operator">:</span> <span class="token punctuation">{</span>

    <span class="token comment">// 连接桩标签</span>

    markup<span class="token operator">?</span><span class="token operator">:</span> Markup

    position<span class="token operator">?</span><span class="token operator">:</span> <span class="token punctuation">{</span>

      <span class="token comment">// 连接桩标签布局</span>

      name<span class="token operator">:</span> <span class="token builtin">string</span> <span class="token comment">// 布局名称</span>

      args<span class="token operator">?</span><span class="token operator">:</span> object <span class="token comment">// 布局参数</span>

    <span class="token punctuation">}</span>

  <span class="token punctuation">}</span>

<span class="token punctuation">}</span>
</code></pre></div><p>然后我们配置 <code>items</code>，<code>items</code> 是一个数组 <code>PortMetadata[]</code>，数组的每一项表示一个连接桩，连接桩支持的选项如下：</p><div class="language-typescript" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">interface</span> <span class="token class-name">PortMetadata</span> <span class="token punctuation">{</span>

  id<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token comment">// 连接桩唯一 ID，默认自动生成。</span>

  group<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token comment">// 分组名称，指定分组后将继承分组中的连接桩选项。</span>

  args<span class="token operator">?</span><span class="token operator">:</span> object <span class="token comment">// 为群组中指定的连接桩布局算法提供参数, 我们不能为单个连接桩指定布局算法，但可以为群组中指定的布局算法提供不同的参数。</span>

  markup<span class="token operator">?</span><span class="token operator">:</span> Markup <span class="token comment">// 连接桩的 DOM 结构定义。指定该选项后将覆盖 \`group\` 指代的群组提供的默认选项。</span>

  attrs<span class="token operator">?</span><span class="token operator">:</span> Attr<span class="token punctuation">.</span>CellAttrs <span class="token comment">// 元素的属性样式。指定该选项后将覆盖 \`group\` 指代的群组提供的默认选项。</span>

  zIndex<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">number</span> <span class="token operator">|</span> <span class="token string">&#39;auto&#39;</span> <span class="token comment">// 连接桩的 DOM 层级，值越大层级越高。指定该选项后将覆盖 \`group\` 指代的群组提供的默认选项。</span>

  label<span class="token operator">?</span><span class="token operator">:</span> <span class="token punctuation">{</span>

    <span class="token comment">// 连接桩的标签。指定该选项后将覆盖 \`group\` 指代的群组提供的默认选项。</span>

    markup<span class="token operator">?</span><span class="token operator">:</span> Markup <span class="token comment">// 标签 DOM 结构</span>

    position<span class="token operator">?</span><span class="token operator">:</span> <span class="token punctuation">{</span>

      <span class="token comment">// 标签位置</span>

      name<span class="token operator">:</span> <span class="token builtin">string</span> <span class="token comment">// 标签位置计算方法的名称</span>

      args<span class="token operator">?</span><span class="token operator">:</span> object <span class="token comment">// 标签位置计算方法的参数</span>

    <span class="token punctuation">}</span>

  <span class="token punctuation">}</span>

<span class="token punctuation">}</span>
</code></pre></div><p>从下面例子代码中可以清晰看到连接桩的定义方式。</p><h2 id="修改连接桩" tabindex="-1"><a class="header-anchor" href="#修改连接桩" aria-hidden="true">#</a> 修改连接桩</h2>`,12),un={href:"https://x6.antv.antgroup.com/zh/docs/api/model/node#%E8%BF%9E%E6%8E%A5%E6%A1%A9-ports",target:"_blank",rel:"noopener noreferrer"},kn=p(`<div class="language-typescript" data-ext="ts"><pre class="language-typescript"><code><span class="token comment">// 添加连接桩node.addPort({  group: &#39;top&#39;,  attrs: {    text: {      text: &#39;xx&#39;,    },  },})</span>
<span class="token comment">// 删除连接桩node.removePort(portId)</span>
<span class="token comment">// 更新连接桩node.portProp(portId, &#39;attrs/circle/stroke&#39;, color)</span>
</code></pre></div><h2 id="连接桩位置" tabindex="-1"><a class="header-anchor" href="#连接桩位置" aria-hidden="true">#</a> 连接桩位置</h2><p>连接桩布局算法只能通过 <code>groups</code> 中的 <code>position</code> 选项来指定，因为布局算法在计算连接桩位置时需要考虑到群组中的所有连接桩，我们在单个连接桩中可以通过 <code>args</code> 选项来影响该连接桩的布局结果。</p>`,3),dn={href:"https://x6.antv.antgroup.com/zh/docs/api/registry/port-layout#registry",target:"_blank",rel:"noopener noreferrer"},gn={href:"https://x6.antv.antgroup.com/zh/docs/api/registry/port-layout#absolute",target:"_blank",rel:"noopener noreferrer"},hn=n("code",null,"absolute",-1),yn={href:"https://x6.antv.antgroup.com/zh/docs/api/registry/port-layout#left-right-top-bottom",target:"_blank",rel:"noopener noreferrer"},mn=n("code",null,"left",-1),fn={href:"https://x6.antv.antgroup.com/zh/docs/api/registry/port-layout#left-right-top-bottom",target:"_blank",rel:"noopener noreferrer"},xn=n("code",null,"right",-1),bn={href:"https://x6.antv.antgroup.com/zh/docs/api/registry/port-layout#left-right-top-bottom",target:"_blank",rel:"noopener noreferrer"},_n=n("code",null,"top",-1),vn={href:"https://x6.antv.antgroup.com/zh/docs/api/registry/port-layout#left-right-top-bottom",target:"_blank",rel:"noopener noreferrer"},qn=n("code",null,"bottom",-1),wn={href:"https://x6.antv.antgroup.com/zh/docs/api/registry/port-layout#line",target:"_blank",rel:"noopener noreferrer"},zn=n("code",null,"line",-1),En={href:"https://x6.antv.antgroup.com/zh/docs/api/registry/port-layout#ellipse",target:"_blank",rel:"noopener noreferrer"},In=n("code",null,"ellipse",-1),Mn={href:"https://x6.antv.antgroup.com/zh/docs/api/registry/port-layout#ellipsespread",target:"_blank",rel:"noopener noreferrer"},Nn=n("code",null,"ellipseSpread",-1),Cn=n("h2",{id:"连接桩标签位置",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#连接桩标签位置","aria-hidden":"true"},"#"),s(" 连接桩标签位置")],-1),Sn=n("p",null,[s("在 "),n("code",null,"groups"),s(" 的 "),n("code",null,"label.position"),s(" 选项和节点的 "),n("code",null,"items.label.position"),s(" 选项中都可以指定标签的位置。")],-1),An={href:"https://x6.antv.antgroup.com/zh/docs/api/registry/port-label-layout#registry",target:"_blank",rel:"noopener noreferrer"},Dn={href:"https://x6.antv.antgroup.com/zh/docs/api/registry/port-label-layout#side",target:"_blank",rel:"noopener noreferrer"},Pn=n("code",null,"left",-1),Xn={href:"https://x6.antv.antgroup.com/zh/docs/api/registry/port-label-layout#side",target:"_blank",rel:"noopener noreferrer"},On=n("code",null,"right",-1),Bn={href:"https://x6.antv.antgroup.com/zh/docs/api/registry/port-label-layout#side",target:"_blank",rel:"noopener noreferrer"},jn=n("code",null,"top",-1),Ln={href:"https://x6.antv.antgroup.com/zh/docs/api/registry/port-label-layout#side",target:"_blank",rel:"noopener noreferrer"},Gn=n("code",null,"bottom",-1),Tn={href:"https://x6.antv.antgroup.com/zh/docs/api/registry/port-label-layout#insideoutside",target:"_blank",rel:"noopener noreferrer"},Hn=n("code",null,"inside",-1),Jn={href:"https://x6.antv.antgroup.com/zh/docs/api/registry/port-label-layout#insideoutside",target:"_blank",rel:"noopener noreferrer"},Vn=n("code",null,"outside",-1),Wn={href:"https://x6.antv.antgroup.com/zh/docs/api/registry/port-label-layout#insideoutside",target:"_blank",rel:"noopener noreferrer"},Fn=n("code",null,"insideOriented",-1),Rn={href:"https://x6.antv.antgroup.com/zh/docs/api/registry/port-label-layout#insideoutside",target:"_blank",rel:"noopener noreferrer"},Kn=n("code",null,"outsideOriented",-1),Zn={href:"https://x6.antv.antgroup.com/zh/docs/api/registry/port-label-layout#radial",target:"_blank",rel:"noopener noreferrer"},Yn=n("code",null,"radial",-1),Qn={href:"https://x6.antv.antgroup.com/zh/docs/api/registry/port-label-layout#radial",target:"_blank",rel:"noopener noreferrer"},Un=n("code",null,"radialOriented",-1),$n=n("h1",{id:"交互",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#交互","aria-hidden":"true"},"#"),s(" 交互")],-1),ns=n("h2",{id:"连线",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#连线","aria-hidden":"true"},"#"),s(" 连线")],-1),ss=n("code",null,"connecting",-1),as={href:"https://x6.antv.antgroup.com/zh/docs/api/interacting/interacting#%E8%BF%9E%E7%BA%BF",target:"_blank",rel:"noopener noreferrer"},ts=p(`<h3 id="allowxxx" tabindex="-1"><a class="header-anchor" href="#allowxxx" aria-hidden="true">#</a> allowXXX</h3><p>可以通过 <code>allowXXX</code> 配置来定义连线能否连接到对应的位置。默认支持以下项：</p><ul><li><code>allowBlank</code>：是否允许连接到画布空白位置的点，默认为 <code>true</code>。</li><li><code>allowLoop</code>：是否允许创建循环连线，即边的起始节点和终止节点为同一节点，默认为 <code>true</code>。</li><li><code>allowNode</code>：是否允许边连接到节点（非节点上的连接桩），默认为 <code>true</code>。</li><li><code>allowEdge</code>：是否允许边连接到另一个边，默认为 <code>true</code>。</li><li><code>allowPort</code>：是否允许边连接到连接桩，默认为 <code>true</code>。</li><li><code>allowMulti</code>：是否允许在相同的起始节点和终止之间创建多条边，默认为 <code>true</code>。</li></ul><p>它们的值都支持以下两种类型：</p><div class="language-typescript" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">new</span> <span class="token class-name">Graph</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  connecting<span class="token operator">:</span> <span class="token punctuation">{</span>
    allowNode<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token comment">// boolean</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token comment">// 函数形式，多用于动态控制连接限制</span>
<span class="token keyword">new</span> <span class="token class-name">Graph</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  connecting<span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token function">allowNode</span><span class="token punctuation">(</span>args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> <span class="token boolean">true</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre></div><h4 id="提示" tabindex="-1"><a class="header-anchor" href="#提示" aria-hidden="true">#</a> 提示</h4><p><code>allowMulti</code> 支持设置为字符串 <code>withPort</code>，代表在起始和终止节点的相同连接桩之间只允许创建一条边（即起始和终止节点之间可以创建多条边，但必须要连接在不同的连接桩上）。</p><p>视图交互事件</p><p>通过鼠标、键盘或者各种可交互的组件与应用产生交互时触发的事件。</p><h3 id="鼠标事件" tabindex="-1"><a class="header-anchor" href="#鼠标事件" aria-hidden="true">#</a> 鼠标事件</h3><table><thead><tr><th style="text-align:left;">事件</th><th style="text-align:left;">cell 节点/边</th><th style="text-align:left;">node 节点</th><th style="text-align:left;">port 连接桩</th><th style="text-align:left;">edge 边</th><th style="text-align:left;">blank 画布空白区域</th></tr></thead><tbody><tr><td style="text-align:left;">单击</td><td style="text-align:left;"><code>cell:click</code></td><td style="text-align:left;"><code>node:click</code></td><td style="text-align:left;"><code>node:port:click</code></td><td style="text-align:left;"><code>edge:click</code></td><td style="text-align:left;"><code>blank:click</code></td></tr><tr><td style="text-align:left;">双击</td><td style="text-align:left;"><code>cell:dblclick</code></td><td style="text-align:left;"><code>node:dblclick</code></td><td style="text-align:left;"><code>node:port:dblclick</code></td><td style="text-align:left;"><code>edge:dblclick</code></td><td style="text-align:left;"><code>blank:dblclick</code></td></tr><tr><td style="text-align:left;">右键</td><td style="text-align:left;"><code>cell:contextmenu</code></td><td style="text-align:left;"><code>node:contextmenu</code></td><td style="text-align:left;"><code>node:port:contextmenu</code></td><td style="text-align:left;"><code>edge:contextmenu</code></td><td style="text-align:left;"><code>blank:contextmenu</code></td></tr><tr><td style="text-align:left;">鼠标按下</td><td style="text-align:left;"><code>cell:mousedown</code></td><td style="text-align:left;"><code>node:mousedown</code></td><td style="text-align:left;"><code>node:port:mousedown</code></td><td style="text-align:left;"><code>edge:mousedown</code></td><td style="text-align:left;"><code>blank:mousedown</code></td></tr><tr><td style="text-align:left;">移动鼠标</td><td style="text-align:left;"><code>cell:mousemove</code></td><td style="text-align:left;"><code>node:mousemove</code></td><td style="text-align:left;"><code>node:port:mousemove</code></td><td style="text-align:left;"><code>edge:mousemove</code></td><td style="text-align:left;"><code>blank:mousemove</code></td></tr><tr><td style="text-align:left;">鼠标抬起</td><td style="text-align:left;"><code>cell:mouseup</code></td><td style="text-align:left;"><code>node:mouseup</code></td><td style="text-align:left;"><code>node:port:mouseup</code></td><td style="text-align:left;"><code>edge:mouseup</code></td><td style="text-align:left;"><code>blank:mouseup</code></td></tr><tr><td style="text-align:left;">鼠标滚轮</td><td style="text-align:left;"><code>cell:mousewheel</code></td><td style="text-align:left;"><code>node:mousewheel</code></td><td style="text-align:left;">-</td><td style="text-align:left;"><code>edge:mousewheel</code></td><td style="text-align:left;"><code>blank:mousewheel</code></td></tr><tr><td style="text-align:left;">鼠标进入</td><td style="text-align:left;"><code>cell:mouseenter</code></td><td style="text-align:left;"><code>node:mouseenter</code></td><td style="text-align:left;"><code>node:port:mouseenter</code></td><td style="text-align:left;"><code>edge:mouseenter</code></td><td style="text-align:left;"><code>graph:mouseenter</code></td></tr><tr><td style="text-align:left;">鼠标离开</td><td style="text-align:left;"><code>cell:mouseleave</code></td><td style="text-align:left;"><code>node:mouseleave</code></td><td style="text-align:left;"><code>node:port:mouseleave</code></td><td style="text-align:left;"><code>edge:mouseleave</code></td><td style="text-align:left;"><code>graph:mouseleave</code></td></tr></tbody></table><h4 id="注意" tabindex="-1"><a class="header-anchor" href="#注意" aria-hidden="true">#</a> 注意</h4><p>需要注意的是，这里的 <code>mousemove</code> 事件和通常的鼠标移动事件有所区别，它需要在鼠标按下后移动鼠标才能触发。</p><p>除了 <code>mouseenter</code> 和 <code>mouseleave</code> 外，事件回调函数的参数都包含鼠标相对于画布的位置 <code>x</code>、<code>y</code> 和鼠标事件对象 <code>e</code> 等参数。</p><div class="language-typescript" data-ext="ts"><pre class="language-typescript"><code>graph<span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span><span class="token string">&#39;cell:click&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">{</span> e<span class="token punctuation">,</span> x<span class="token punctuation">,</span> y<span class="token punctuation">,</span> cell<span class="token punctuation">,</span> view <span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
graph<span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span><span class="token string">&#39;node:click&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">{</span> e<span class="token punctuation">,</span> x<span class="token punctuation">,</span> y<span class="token punctuation">,</span> node<span class="token punctuation">,</span> view <span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
graph<span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span><span class="token string">&#39;edge:click&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">{</span> e<span class="token punctuation">,</span> x<span class="token punctuation">,</span> y<span class="token punctuation">,</span> edge<span class="token punctuation">,</span> view <span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
graph<span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span><span class="token string">&#39;blank:click&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">{</span> e<span class="token punctuation">,</span> x<span class="token punctuation">,</span> y <span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span>

graph<span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span><span class="token string">&#39;cell:mouseenter&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">{</span> e<span class="token punctuation">,</span> cell<span class="token punctuation">,</span> view <span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
graph<span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span><span class="token string">&#39;node:mouseenter&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">{</span> e<span class="token punctuation">,</span> node<span class="token punctuation">,</span> view <span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
graph<span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span><span class="token string">&#39;edge:mouseenter&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">{</span> e<span class="token punctuation">,</span> edge<span class="token punctuation">,</span> view <span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
graph<span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span><span class="token string">&#39;graph:mouseenter&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">{</span> e <span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre></div><h3 id="自定义点击事件" tabindex="-1"><a class="header-anchor" href="#自定义点击事件" aria-hidden="true">#</a> 自定义点击事件</h3><p>我们可以在节点/边的 DOM 元素上添加自定义属性 <code>event</code> 或 <code>data-event</code> 来监听该元素的点击事件，例如：</p><div class="language-typescript" data-ext="ts"><pre class="language-typescript"><code>node<span class="token punctuation">.</span><span class="token function">attr</span><span class="token punctuation">(</span><span class="token punctuation">{</span>

  <span class="token comment">// 表示一个删除按钮，点击时删除该节点</span>

  image<span class="token operator">:</span> <span class="token punctuation">{</span>

    event<span class="token operator">:</span> <span class="token string">&#39;node:delete&#39;</span><span class="token punctuation">,</span>

    xlinkHref<span class="token operator">:</span> <span class="token string">&#39;trash.png&#39;</span><span class="token punctuation">,</span>

    width<span class="token operator">:</span> <span class="token number">20</span><span class="token punctuation">,</span>

    height<span class="token operator">:</span> <span class="token number">20</span><span class="token punctuation">,</span>

  <span class="token punctuation">}</span><span class="token punctuation">,</span>

<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre></div><p>可以通过绑定的事件名 <code>node:delete</code> 或通用的 <code>cell:customevent</code>、<code>node:customevent</code>、<code>edge:customevent</code> 事件名来监听。</p><div class="language-typescript" data-ext="ts"><pre class="language-typescript"><code>graph<span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span><span class="token string">&#39;node:delete&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">{</span> view<span class="token punctuation">,</span> e <span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  e<span class="token punctuation">.</span><span class="token function">stopPropagation</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  view<span class="token punctuation">.</span>cell<span class="token punctuation">.</span><span class="token function">remove</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

graph<span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span><span class="token string">&#39;node:customevent&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">{</span> name<span class="token punctuation">,</span> view<span class="token punctuation">,</span> e <span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>name <span class="token operator">===</span> <span class="token string">&#39;node:delete&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    e<span class="token punctuation">.</span><span class="token function">stopPropagation</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    view<span class="token punctuation">.</span>cell<span class="token punctuation">.</span><span class="token function">remove</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre></div><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">import</span> React <span class="token keyword">from</span> <span class="token string">&#39;react&#39;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> Graph <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@antv/x6&#39;</span>
<span class="token keyword">import</span> <span class="token string">&#39;./index.less&#39;</span>

Graph<span class="token punctuation">.</span><span class="token function">registerNode</span><span class="token punctuation">(</span>
  <span class="token string">&#39;custom-click-node&#39;</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span>
    <span class="token literal-property property">markup</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">tagName</span><span class="token operator">:</span> <span class="token string">&#39;rect&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">selector</span><span class="token operator">:</span> <span class="token string">&#39;body&#39;</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">tagName</span><span class="token operator">:</span> <span class="token string">&#39;text&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">selector</span><span class="token operator">:</span> <span class="token string">&#39;label&#39;</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">tagName</span><span class="token operator">:</span> <span class="token string">&#39;g&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">children</span><span class="token operator">:</span> <span class="token punctuation">[</span>
          <span class="token punctuation">{</span>
            <span class="token literal-property property">tagName</span><span class="token operator">:</span> <span class="token string">&#39;text&#39;</span><span class="token punctuation">,</span>
            <span class="token literal-property property">selector</span><span class="token operator">:</span> <span class="token string">&#39;btnText&#39;</span><span class="token punctuation">,</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span>
            <span class="token literal-property property">tagName</span><span class="token operator">:</span> <span class="token string">&#39;rect&#39;</span><span class="token punctuation">,</span>
            <span class="token literal-property property">selector</span><span class="token operator">:</span> <span class="token string">&#39;btn&#39;</span><span class="token punctuation">,</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token literal-property property">attrs</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">btn</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">refX</span><span class="token operator">:</span> <span class="token string">&#39;100%&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">refX2</span><span class="token operator">:</span> <span class="token operator">-</span><span class="token number">28</span><span class="token punctuation">,</span>
        <span class="token literal-property property">y</span><span class="token operator">:</span> <span class="token number">4</span><span class="token punctuation">,</span>
        <span class="token literal-property property">width</span><span class="token operator">:</span> <span class="token number">24</span><span class="token punctuation">,</span>
        <span class="token literal-property property">height</span><span class="token operator">:</span> <span class="token number">18</span><span class="token punctuation">,</span>
        <span class="token literal-property property">rx</span><span class="token operator">:</span> <span class="token number">10</span><span class="token punctuation">,</span>
        <span class="token literal-property property">ry</span><span class="token operator">:</span> <span class="token number">10</span><span class="token punctuation">,</span>
        <span class="token literal-property property">fill</span><span class="token operator">:</span> <span class="token string">&#39;rgba(255,255,0,0.01)&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">stroke</span><span class="token operator">:</span> <span class="token string">&#39;red&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">cursor</span><span class="token operator">:</span> <span class="token string">&#39;pointer&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">event</span><span class="token operator">:</span> <span class="token string">&#39;node:delete&#39;</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token literal-property property">btnText</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">fontSize</span><span class="token operator">:</span> <span class="token number">14</span><span class="token punctuation">,</span>
        <span class="token literal-property property">fill</span><span class="token operator">:</span> <span class="token string">&#39;red&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">text</span><span class="token operator">:</span> <span class="token string">&#39;x&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">refX</span><span class="token operator">:</span> <span class="token string">&#39;100%&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">refX2</span><span class="token operator">:</span> <span class="token operator">-</span><span class="token number">19</span><span class="token punctuation">,</span>
        <span class="token literal-property property">y</span><span class="token operator">:</span> <span class="token number">17</span><span class="token punctuation">,</span>
        <span class="token literal-property property">cursor</span><span class="token operator">:</span> <span class="token string">&#39;pointer&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">pointerEvent</span><span class="token operator">:</span> <span class="token string">&#39;none&#39;</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token literal-property property">body</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">stroke</span><span class="token operator">:</span> <span class="token string">&#39;#8f8f8f&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">strokeWidth</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
        <span class="token literal-property property">fill</span><span class="token operator">:</span> <span class="token string">&#39;#fff&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">rx</span><span class="token operator">:</span> <span class="token number">6</span><span class="token punctuation">,</span>
        <span class="token literal-property property">ry</span><span class="token operator">:</span> <span class="token number">6</span><span class="token punctuation">,</span>
        <span class="token literal-property property">refWidth</span><span class="token operator">:</span> <span class="token string">&#39;100%&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">refHeight</span><span class="token operator">:</span> <span class="token string">&#39;100%&#39;</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">fontSize</span><span class="token operator">:</span> <span class="token number">14</span><span class="token punctuation">,</span>
        <span class="token literal-property property">fill</span><span class="token operator">:</span> <span class="token string">&#39;#333333&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">refX</span><span class="token operator">:</span> <span class="token string">&#39;50%&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">refY</span><span class="token operator">:</span> <span class="token string">&#39;50%&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">textAnchor</span><span class="token operator">:</span> <span class="token string">&#39;middle&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">textVerticalAnchor</span><span class="token operator">:</span> <span class="token string">&#39;middle&#39;</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token boolean">true</span><span class="token punctuation">,</span>
<span class="token punctuation">)</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">class</span> <span class="token class-name">Example</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>Component</span> <span class="token punctuation">{</span>
  <span class="token keyword">private</span> <span class="token literal-property property">container</span><span class="token operator">:</span> HTMLDivElement

  <span class="token function">componentDidMount</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> graph <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Graph</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      <span class="token literal-property property">container</span><span class="token operator">:</span> <span class="token keyword">this</span><span class="token punctuation">.</span>container<span class="token punctuation">,</span>
      <span class="token literal-property property">background</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">color</span><span class="token operator">:</span> <span class="token string">&#39;#F2F7FA&#39;</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>

    <span class="token keyword">const</span> source <span class="token operator">=</span> graph<span class="token punctuation">.</span><span class="token function">addNode</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      <span class="token literal-property property">shape</span><span class="token operator">:</span> <span class="token string">&#39;custom-click-node&#39;</span><span class="token punctuation">,</span>
      <span class="token literal-property property">x</span><span class="token operator">:</span> <span class="token number">40</span><span class="token punctuation">,</span>
      <span class="token literal-property property">y</span><span class="token operator">:</span> <span class="token number">80</span><span class="token punctuation">,</span>
      <span class="token literal-property property">width</span><span class="token operator">:</span> <span class="token number">120</span><span class="token punctuation">,</span>
      <span class="token literal-property property">height</span><span class="token operator">:</span> <span class="token number">40</span><span class="token punctuation">,</span>
      <span class="token literal-property property">attrs</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token literal-property property">text</span><span class="token operator">:</span> <span class="token string">&#39;Source&#39;</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>

    <span class="token keyword">const</span> target <span class="token operator">=</span> graph<span class="token punctuation">.</span><span class="token function">addNode</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      <span class="token literal-property property">shape</span><span class="token operator">:</span> <span class="token string">&#39;custom-click-node&#39;</span><span class="token punctuation">,</span>
      <span class="token literal-property property">x</span><span class="token operator">:</span> <span class="token number">360</span><span class="token punctuation">,</span>
      <span class="token literal-property property">y</span><span class="token operator">:</span> <span class="token number">80</span><span class="token punctuation">,</span>
      <span class="token literal-property property">width</span><span class="token operator">:</span> <span class="token number">120</span><span class="token punctuation">,</span>
      <span class="token literal-property property">height</span><span class="token operator">:</span> <span class="token number">40</span><span class="token punctuation">,</span>
      <span class="token literal-property property">attrs</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token literal-property property">text</span><span class="token operator">:</span> <span class="token string">&#39;Target&#39;</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>

    graph<span class="token punctuation">.</span><span class="token function">addEdge</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      source<span class="token punctuation">,</span>
      target<span class="token punctuation">,</span>
      <span class="token literal-property property">attrs</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">line</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token literal-property property">stroke</span><span class="token operator">:</span> <span class="token string">&#39;#8f8f8f&#39;</span><span class="token punctuation">,</span>
          <span class="token literal-property property">strokeWidth</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>

    graph<span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span><span class="token string">&#39;node:delete&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span> view<span class="token punctuation">,</span> e <span class="token punctuation">}</span><span class="token operator">:</span> any</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      e<span class="token punctuation">.</span><span class="token function">stopPropagation</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
      view<span class="token punctuation">.</span>cell<span class="token punctuation">.</span><span class="token function">remove</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>

  <span class="token function-variable function">refContainer</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">container</span><span class="token operator">:</span> HTMLDivElement</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>container <span class="token operator">=</span> container
  <span class="token punctuation">}</span>

  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">(</span>
      <span class="token operator">&lt;</span>div className<span class="token operator">=</span><span class="token string">&quot;custom-click-app&quot;</span><span class="token operator">&gt;</span>
        <span class="token operator">&lt;</span>div className<span class="token operator">=</span><span class="token string">&quot;app-content&quot;</span> ref<span class="token operator">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>refContainer<span class="token punctuation">}</span> <span class="token operator">/</span><span class="token operator">&gt;</span>
      <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>
    <span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><h2 id="节点-边" tabindex="-1"><a class="header-anchor" href="#节点-边" aria-hidden="true">#</a> 节点/边</h2><h3 id="添加-删除-修改" tabindex="-1"><a class="header-anchor" href="#添加-删除-修改" aria-hidden="true">#</a> 添加/删除/修改</h3><p>当节点/边被添加到画布时，触发以下事件：</p><ul><li><code>added</code></li><li><code>cell:added</code></li><li><code>node:added</code>（仅当 cell 是节点时才触发）</li><li><code>edge:added</code>（仅当 cell 是边时才触发）</li></ul><p>当节点/边被移除时，触发以下事件：</p><ul><li><code>removed</code></li><li><code>cell:removed</code></li><li><code>node:removed</code>（仅当 cell 是节点时才触发）</li><li><code>edge:removed</code>（仅当 cell 是边时才触发）</li></ul><p>当节点/边发生任何改变时，触发以下事件：</p><ul><li><code>changed</code></li><li><code>cell:changed</code></li><li><code>node:changed</code>（仅当 cell 是节点时才触发）</li><li><code>edge:changed</code>（仅当 cell 是边时才触发）</li></ul><p>可以在节点/边上监听：</p><div class="language-typescript" data-ext="ts"><pre class="language-typescript"><code>cell<span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span><span class="token string">&#39;added&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">{</span> cell<span class="token punctuation">,</span> index<span class="token punctuation">,</span> options <span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span>

cell<span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span><span class="token string">&#39;removed&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">{</span> cell<span class="token punctuation">,</span> index<span class="token punctuation">,</span> options <span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span>

cell<span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span><span class="token string">&#39;changed&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">{</span> cell<span class="token punctuation">,</span> options <span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre></div><p>或者在 Graph 上监听：</p><div class="language-typescript" data-ext="ts"><pre class="language-typescript"><code>graph<span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span><span class="token string">&#39;cell:added&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">{</span> cell<span class="token punctuation">,</span> index<span class="token punctuation">,</span> options <span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
graph<span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span><span class="token string">&#39;cell:removed&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">{</span> cell<span class="token punctuation">,</span> index<span class="token punctuation">,</span> options <span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
graph<span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span><span class="token string">&#39;cell:changed&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">{</span> cell<span class="token punctuation">,</span> options <span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span>

graph<span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span><span class="token string">&#39;node:added&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">{</span> node<span class="token punctuation">,</span> index<span class="token punctuation">,</span> options <span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
graph<span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span><span class="token string">&#39;node:removed&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">{</span> node<span class="token punctuation">,</span> index<span class="token punctuation">,</span> options <span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
graph<span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span><span class="token string">&#39;node:changed&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">{</span> node<span class="token punctuation">,</span> options <span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span>

graph<span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span><span class="token string">&#39;edge:added&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">{</span> edge<span class="token punctuation">,</span> index<span class="token punctuation">,</span> options <span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
graph<span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span><span class="token string">&#39;edge:removed&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">{</span> edge<span class="token punctuation">,</span> index<span class="token punctuation">,</span> options <span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
graph<span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span><span class="token string">&#39;edge:changed&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">{</span> edge<span class="token punctuation">,</span> options <span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre></div><h3 id="change-xxx" tabindex="-1"><a class="header-anchor" href="#change-xxx" aria-hidden="true">#</a> change:xxx</h3><p>当调用 <code>setXxx(val, options)</code> 和 <code>removeXxx(options)</code> 方法去改变节点/边的数据时，并且 <code>options.silent</code> 不为 <code>true</code> 时，都将触发对应的 <code>change</code> 事件，并触发节点/边重绘。例如：</p><div class="language-typescript" data-ext="ts"><pre class="language-typescript"><code>cell<span class="token punctuation">.</span><span class="token function">setZIndex</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span>

cell<span class="token punctuation">.</span><span class="token function">setZIndex</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> silent<span class="token operator">:</span> <span class="token boolean">false</span> <span class="token punctuation">}</span><span class="token punctuation">)</span>

cell<span class="token punctuation">.</span><span class="token function">setZIndex</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> anyKey<span class="token operator">:</span> <span class="token string">&#39;anyValue&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre></div><p>将触发 Cell 上的以下事件：</p><ul><li><code>change:*</code></li><li><code>change:zIndex</code></li></ul><p>和 Graph 上的以下事件：</p><ul><li><code>cell:change:*</code></li><li><code>node:change:*</code>（仅当 cell 是节点时才触发）</li><li><code>edge:change:*</code>（仅当 cell 是边时才触发）</li><li><code>cell:change:zIndex</code></li><li><code>node:change:zIndex</code>（仅当 cell 是节点时才触发）</li><li><code>edge:change:zIndex</code>（仅当 cell 是边时才触发）</li></ul><p>可以在节点/边上监听：</p><div class="language-typescript" data-ext="ts"><pre class="language-typescript"><code><span class="token comment">// 当 cell 发生任何改变时都将被触发，可以通过 key 来确定改变项</span>
cell<span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span>
  <span class="token string">&#39;change:*&#39;</span><span class="token punctuation">,</span>
  <span class="token punctuation">(</span>args<span class="token operator">:</span> <span class="token punctuation">{</span>
    cell<span class="token operator">:</span> Cell
    key<span class="token operator">:</span> <span class="token builtin">string</span> <span class="token comment">// 通过 key 来确定改变项</span>
    current<span class="token operator">:</span> <span class="token builtin">any</span> <span class="token comment">// 当前值</span>
    previous<span class="token operator">:</span> <span class="token builtin">any</span> <span class="token comment">// 改变之前的值</span>
    options<span class="token operator">:</span> <span class="token builtin">any</span> <span class="token comment">// 透传的 options</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>key <span class="token operator">===</span> <span class="token string">&#39;zIndex&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token comment">//</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">)</span>

cell<span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span>
  <span class="token string">&#39;change:zIndex&#39;</span><span class="token punctuation">,</span>
  <span class="token punctuation">(</span>args<span class="token operator">:</span> <span class="token punctuation">{</span>
    cell<span class="token operator">:</span> Cell
    current<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">number</span> <span class="token comment">// 当前值</span>
    previous<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">number</span> <span class="token comment">// 改变之前的值</span>
    options<span class="token operator">:</span> <span class="token builtin">any</span> <span class="token comment">// 透传的 options</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">)</span>
</code></pre></div><p>或者在 Graph 上监听：</p><div class="language-typescript" data-ext="ts"><pre class="language-typescript"><code>graph<span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span>
  <span class="token string">&#39;cell:change:zIndex&#39;</span><span class="token punctuation">,</span>
  <span class="token punctuation">(</span>args<span class="token operator">:</span> <span class="token punctuation">{</span>
    cell<span class="token operator">:</span> Cell
    current<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">number</span> <span class="token comment">// 当前值</span>
    previous<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">number</span> <span class="token comment">// 改变之前的值</span>
    options<span class="token operator">:</span> <span class="token builtin">any</span> <span class="token comment">// 透传的 options</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">)</span>

<span class="token comment">// 当 cell 为节点时触发</span>
graph<span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span>
  <span class="token string">&#39;node:change:zIndex&#39;</span><span class="token punctuation">,</span>
  <span class="token punctuation">(</span>args<span class="token operator">:</span> <span class="token punctuation">{</span>
    cell<span class="token operator">:</span> Cell
    node<span class="token operator">:</span> Node
    current<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">number</span> <span class="token comment">// 当前值</span>
    previous<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">number</span> <span class="token comment">// 改变之前的值</span>
    options<span class="token operator">:</span> <span class="token builtin">any</span> <span class="token comment">// 透传的 options</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">)</span>

<span class="token comment">// 当 cell 为边时触发</span>
graph<span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span>
  <span class="token string">&#39;edge:change:zIndex&#39;</span><span class="token punctuation">,</span>
  <span class="token punctuation">(</span>args<span class="token operator">:</span> <span class="token punctuation">{</span>
    cell<span class="token operator">:</span> Cell
    edge<span class="token operator">:</span> Edge
    current<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">number</span> <span class="token comment">// 当前值</span>
    previous<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">number</span> <span class="token comment">// 改变之前的值</span>
    options<span class="token operator">:</span> <span class="token builtin">any</span> <span class="token comment">// 透传的 options</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">)</span>
</code></pre></div><p>其他 <code>change</code> 事件如下列表，回调函数的参数与上面提到的 <code>change:zIndex</code> 的参数结构一致。</p><ul><li>Cell <ul><li><code>change:*</code></li><li><code>change:attrs</code></li><li><code>change:zIndex</code></li><li><code>change:markup</code></li><li><code>change:visible</code></li><li><code>change:parent</code></li><li><code>change:children</code></li><li><code>change:tools</code></li><li><code>change:view</code></li><li><code>change:data</code></li></ul></li><li>Node <ul><li><code>change:size</code></li><li><code>change:angle</code></li><li><code>change:position</code></li><li><code>change:ports</code></li><li><code>change:portMarkup</code></li><li><code>change:portLabelMarkup</code></li><li><code>change:portContainerMarkup</code></li><li><code>ports:added</code></li><li><code>ports:removed</code></li></ul></li><li>Edge <ul><li><code>change:source</code></li><li><code>change:target</code></li><li><code>change:terminal</code></li><li><code>change:router</code></li><li><code>change:connector</code></li><li><code>change:vertices</code></li><li><code>change:labels</code></li><li><code>change:defaultLabel</code></li><li><code>vertexs:added</code></li><li><code>vertexs:removed</code></li><li><code>labels:added</code></li><li><code>labels:removed</code></li></ul></li></ul><p>除了上述这些内置的 Key，我们也支持监听自定义的 Key，例如</p><div class="language-typescript" data-ext="ts"><pre class="language-typescript"><code>cell<span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span><span class="token string">&#39;change:custom&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">{</span> cell<span class="token punctuation">,</span> current<span class="token punctuation">,</span> previous<span class="token punctuation">,</span> options <span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>

  <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>current<span class="token punctuation">)</span>

<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre></div><p>当通过 <code>cell.prop(&#39;custom&#39;, &#39;any data&#39;)</code> 方法修改 <code>custom</code> 属性的值时将触发 <code>change:custom</code> 事件。</p><h3 id="视图" tabindex="-1"><a class="header-anchor" href="#视图" aria-hidden="true">#</a> 视图</h3><p>由于 X6 实现了异步的渲染调度算法，所以节点的添加不一定意味着挂载到画布上。节点在被挂载到画布时以及从画布上卸载时会分别触发单独的事件。</p><table><thead><tr><th style="text-align:left;">事件名</th><th style="text-align:left;">回调参数</th><th style="text-align:left;">说明</th></tr></thead><tbody><tr><td style="text-align:left;"><code>view:mounted</code></td><td style="text-align:left;"><code>{ view: CellView }</code></td><td style="text-align:left;">节点被挂载到画布上时触发。</td></tr><tr><td style="text-align:left;"><code>view:unmounted</code></td><td style="text-align:left;"><code>{ view: CellView }</code></td><td style="text-align:left;">节点从画布上卸载时触发。</td></tr></tbody></table><div class="language-typescript" data-ext="ts"><pre class="language-typescript"><code>graph<span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span><span class="token string">&#39;view:mounted&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">{</span> view <span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span>

graph<span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span><span class="token string">&#39;view:unmounted&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">{</span> view <span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre></div><p>大家还有经常需要在调用 <code>fromJSON</code> 或者 <code>resetCells</code> 后监听画布完成渲染事件，这时候可以使用 <code>render:done</code> 事件来监听 (2.15.1 版本新增)。</p><div class="language-typescript" data-ext="ts"><pre class="language-typescript"><code>graph<span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span><span class="token string">&#39;render:done&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>  <span class="token comment">// pass})</span>
graph<span class="token punctuation">.</span><span class="token function">fromJSON</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token operator">...</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
</code></pre></div><h1 id="数据" tabindex="-1"><a class="header-anchor" href="#数据" aria-hidden="true">#</a> 数据</h1><h2 id="导出" tabindex="-1"><a class="header-anchor" href="#导出" aria-hidden="true">#</a> 导出</h2><p>我们可以调用 <code>graph.toJSON()</code> 方法来导出图中的节点和边，返回一个具有 <code>{ cells: [] }</code> 结构的对象，其中 <code>cells</code> 数组<strong>按渲染顺序</strong>保存节点和边。</p><p>其中，导出的节点结构如下：</p><div class="language-typescript" data-ext="ts"><pre class="language-typescript"><code><span class="token punctuation">{</span>

  id<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">,</span>

  shape<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">,</span>

  position<span class="token operator">:</span> <span class="token punctuation">{</span>

    x<span class="token operator">:</span> <span class="token builtin">number</span>

    y<span class="token operator">:</span> <span class="token builtin">number</span>

  <span class="token punctuation">}</span><span class="token punctuation">,</span>

  size<span class="token operator">:</span> <span class="token punctuation">{</span>

    width<span class="token operator">:</span> <span class="token builtin">number</span>

    height<span class="token operator">:</span> <span class="token builtin">number</span>

  <span class="token punctuation">}</span><span class="token punctuation">,</span>

  attrs<span class="token operator">:</span> object<span class="token punctuation">,</span>

  zIndex<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">,</span>

<span class="token punctuation">}</span>
</code></pre></div><p>边的结构如下：</p><div class="language-typescript" data-ext="ts"><pre class="language-typescript"><code><span class="token punctuation">{</span>

  id<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">,</span>

  shape<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">,</span>

  source<span class="token operator">:</span> object<span class="token punctuation">,</span>

  target<span class="token operator">:</span> object<span class="token punctuation">,</span>

  attrs<span class="token operator">:</span> object<span class="token punctuation">,</span>

  zIndex<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">,</span>

<span class="token punctuation">}</span>
<span class="token punctuation">{</span>
  <span class="token string-property property">&quot;cells&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span>
      <span class="token string-property property">&quot;position&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token string-property property">&quot;x&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
        <span class="token string-property property">&quot;y&quot;</span><span class="token operator">:</span> <span class="token number">0</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token string-property property">&quot;size&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token string-property property">&quot;width&quot;</span><span class="token operator">:</span> <span class="token number">100</span><span class="token punctuation">,</span>
        <span class="token string-property property">&quot;height&quot;</span><span class="token operator">:</span> <span class="token number">40</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token string-property property">&quot;attrs&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token string-property property">&quot;text&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token string-property property">&quot;text&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Hello&quot;</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token string-property property">&quot;body&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token string-property property">&quot;stroke&quot;</span><span class="token operator">:</span> <span class="token string">&quot;#8f8f8f&quot;</span><span class="token punctuation">,</span>
          <span class="token string-property property">&quot;strokeWidth&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
          <span class="token string-property property">&quot;fill&quot;</span><span class="token operator">:</span> <span class="token string">&quot;#fff&quot;</span><span class="token punctuation">,</span>
          <span class="token string-property property">&quot;rx&quot;</span><span class="token operator">:</span> <span class="token number">6</span><span class="token punctuation">,</span>
          <span class="token string-property property">&quot;ry&quot;</span><span class="token operator">:</span> <span class="token number">6</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token string-property property">&quot;visible&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
      <span class="token string-property property">&quot;shape&quot;</span><span class="token operator">:</span> <span class="token string">&quot;rect&quot;</span><span class="token punctuation">,</span>
      <span class="token string-property property">&quot;id&quot;</span><span class="token operator">:</span> <span class="token string">&quot;f56d0228-1b2d-4d1f-a549-624a112f1013&quot;</span><span class="token punctuation">,</span>
      <span class="token string-property property">&quot;zIndex&quot;</span><span class="token operator">:</span> <span class="token number">1</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
      <span class="token string-property property">&quot;position&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token string-property property">&quot;x&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
        <span class="token string-property property">&quot;y&quot;</span><span class="token operator">:</span> <span class="token number">240</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token string-property property">&quot;size&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token string-property property">&quot;width&quot;</span><span class="token operator">:</span> <span class="token number">100</span><span class="token punctuation">,</span>
        <span class="token string-property property">&quot;height&quot;</span><span class="token operator">:</span> <span class="token number">40</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token string-property property">&quot;attrs&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token string-property property">&quot;text&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token string-property property">&quot;text&quot;</span><span class="token operator">:</span> <span class="token string">&quot;World&quot;</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token string-property property">&quot;body&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token string-property property">&quot;stroke&quot;</span><span class="token operator">:</span> <span class="token string">&quot;#8f8f8f&quot;</span><span class="token punctuation">,</span>
          <span class="token string-property property">&quot;strokeWidth&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
          <span class="token string-property property">&quot;fill&quot;</span><span class="token operator">:</span> <span class="token string">&quot;#fff&quot;</span><span class="token punctuation">,</span>
          <span class="token string-property property">&quot;rx&quot;</span><span class="token operator">:</span> <span class="token number">6</span><span class="token punctuation">,</span>
          <span class="token string-property property">&quot;ry&quot;</span><span class="token operator">:</span> <span class="token number">6</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token string-property property">&quot;visible&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
      <span class="token string-property property">&quot;shape&quot;</span><span class="token operator">:</span> <span class="token string">&quot;ellipse&quot;</span><span class="token punctuation">,</span>
      <span class="token string-property property">&quot;id&quot;</span><span class="token operator">:</span> <span class="token string">&quot;4aa790be-3370-4735-bc1d-15e6f9aeb9f7&quot;</span><span class="token punctuation">,</span>
      <span class="token string-property property">&quot;zIndex&quot;</span><span class="token operator">:</span> <span class="token number">2</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
      <span class="token string-property property">&quot;shape&quot;</span><span class="token operator">:</span> <span class="token string">&quot;edge&quot;</span><span class="token punctuation">,</span>
      <span class="token string-property property">&quot;attrs&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token string-property property">&quot;line&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token string-property property">&quot;stroke&quot;</span><span class="token operator">:</span> <span class="token string">&quot;#8f8f8f&quot;</span><span class="token punctuation">,</span>
          <span class="token string-property property">&quot;strokeWidth&quot;</span><span class="token operator">:</span> <span class="token number">1</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token string-property property">&quot;id&quot;</span><span class="token operator">:</span> <span class="token string">&quot;a363d4ea-b0bf-468d-9dfc-0afd87d8691f&quot;</span><span class="token punctuation">,</span>
      <span class="token string-property property">&quot;source&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token string-property property">&quot;cell&quot;</span><span class="token operator">:</span> <span class="token string">&quot;f56d0228-1b2d-4d1f-a549-624a112f1013&quot;</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token string-property property">&quot;target&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token string-property property">&quot;cell&quot;</span><span class="token operator">:</span> <span class="token string">&quot;4aa790be-3370-4735-bc1d-15e6f9aeb9f7&quot;</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token string-property property">&quot;labels&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token punctuation">{</span>
          <span class="token string-property property">&quot;attrs&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token string-property property">&quot;label&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
              <span class="token string-property property">&quot;text&quot;</span><span class="token operator">:</span> <span class="token string">&quot;X6&quot;</span>
            <span class="token punctuation">}</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token string-property property">&quot;zIndex&quot;</span><span class="token operator">:</span> <span class="token number">3</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre></div><h2 id="导入" tabindex="-1"><a class="header-anchor" href="#导入" aria-hidden="true">#</a> 导入</h2><p>支持节点/边元数据数组 <code>graph.fromJSON(cells: (Node.Metadata | Edge.Metadata)[])</code>。</p><div class="language-typescript" data-ext="ts"><pre class="language-typescript"><code>graph<span class="token punctuation">.</span><span class="token function">fromJSON</span><span class="token punctuation">(</span><span class="token punctuation">[</span>

  <span class="token punctuation">{</span>

    id<span class="token operator">:</span> <span class="token string">&#39;node1&#39;</span><span class="token punctuation">,</span>

    x<span class="token operator">:</span> <span class="token number">40</span><span class="token punctuation">,</span>

    y<span class="token operator">:</span> <span class="token number">40</span><span class="token punctuation">,</span>

    width<span class="token operator">:</span> <span class="token number">100</span><span class="token punctuation">,</span>

    height<span class="token operator">:</span> <span class="token number">40</span><span class="token punctuation">,</span>

    label<span class="token operator">:</span> <span class="token string">&#39;Hello&#39;</span><span class="token punctuation">,</span>

    shape<span class="token operator">:</span> <span class="token string">&#39;rect&#39;</span><span class="token punctuation">,</span>

  <span class="token punctuation">}</span><span class="token punctuation">,</span>

  <span class="token punctuation">{</span>

    id<span class="token operator">:</span> <span class="token string">&#39;node2&#39;</span><span class="token punctuation">,</span>

    x<span class="token operator">:</span> <span class="token number">40</span><span class="token punctuation">,</span>

    y<span class="token operator">:</span> <span class="token number">40</span><span class="token punctuation">,</span>

    width<span class="token operator">:</span> <span class="token number">100</span><span class="token punctuation">,</span>

    height<span class="token operator">:</span> <span class="token number">40</span><span class="token punctuation">,</span>

    label<span class="token operator">:</span> <span class="token string">&#39;Hello&#39;</span><span class="token punctuation">,</span>

    shape<span class="token operator">:</span> <span class="token string">&#39;ellipse&#39;</span><span class="token punctuation">,</span>

  <span class="token punctuation">}</span><span class="token punctuation">,</span>

  <span class="token punctuation">{</span>

    id<span class="token operator">:</span> <span class="token string">&#39;edge1&#39;</span><span class="token punctuation">,</span>

    source<span class="token operator">:</span> <span class="token string">&#39;node1&#39;</span><span class="token punctuation">,</span>

    target<span class="token operator">:</span> <span class="token string">&#39;node2&#39;</span><span class="token punctuation">,</span>

    shape<span class="token operator">:</span> <span class="token string">&#39;edge&#39;</span><span class="token punctuation">,</span>

  <span class="token punctuation">}</span><span class="token punctuation">,</span>

<span class="token punctuation">]</span><span class="token punctuation">)</span>
</code></pre></div><p>或者提供一个包含 <code>cells</code>、<code>nodes</code>、<code>edges</code> 的对象，按照 <code>[...cells, ...nodes, ...edges]</code> 顺序渲染。</p><div class="language-typescript" data-ext="ts"><pre class="language-typescript"><code>graph<span class="token punctuation">.</span><span class="token function">fromJSON</span><span class="token punctuation">(</span><span class="token punctuation">{</span>

  nodes<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span>

  edges<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span>

<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre></div><p>通常，我们通过 <code>graph.fromJSON(...)</code> 来渲染 <code>graph.toJSON()</code> 导出的数据。</p><h4 id="提示-1" tabindex="-1"><a class="header-anchor" href="#提示-1" aria-hidden="true">#</a> 提示</h4><p>当数据中没有提供 <code>zIndex</code> 时，则按照节点/边在数组中的顺序渲染，也就是说越靠前的节点/边，其 <code>zIndex</code> 越小，在画布中的层级就越低</p><h2 id="内置工具" tabindex="-1"><a class="header-anchor" href="#内置工具" aria-hidden="true">#</a> 内置工具</h2><p>工具是渲染在节点/边上的小部件，用于增强节点/边的交互能力，我们分别为节点和边提供了以下内置工具：</p><p>节点：</p>`,73),ps={href:"https://x6.antv.antgroup.com/zh/docs/api/registry/node-tool#button",target:"_blank",rel:"noopener noreferrer"},es={href:"https://x6.antv.antgroup.com/zh/docs/api/registry/node-tool#button-remove",target:"_blank",rel:"noopener noreferrer"},os={href:"https://x6.antv.antgroup.com/zh/docs/api/registry/node-tool#boundary",target:"_blank",rel:"noopener noreferrer"},cs=n("p",null,"边：",-1),ls={href:"https://x6.antv.antgroup.com/zh/docs/api/registry/edge-tool#vertices",target:"_blank",rel:"noopener noreferrer"},rs={href:"https://x6.antv.antgroup.com/zh/docs/api/registry/edge-tool#segments",target:"_blank",rel:"noopener noreferrer"},us={href:"https://x6.antv.antgroup.com/zh/docs/api/registry/edge-tool#boundary",target:"_blank",rel:"noopener noreferrer"},is={href:"https://x6.antv.antgroup.com/zh/docs/api/registry/edge-tool#button",target:"_blank",rel:"noopener noreferrer"},ks={href:"https://x6.antv.antgroup.com/zh/docs/api/registry/edge-tool#button-remove",target:"_blank",rel:"noopener noreferrer"},ds={href:"https://x6.antv.antgroup.com/zh/docs/api/registry/edge-tool#source-arrowhead-%E5%92%8C-target-arrowhead",target:"_blank",rel:"noopener noreferrer"};function gs(hs,ys){const a=o("ExternalLinkIcon");return c(),l("div",null,[u,n("p",null,[s("节点和边都有共同的基类 "),n("a",i,[s("Cell"),t(a)]),s("，除了从 "),k,s(" 继承属性外，还支持以下选项。")]),d,n("p",null,[s("我们可以通过 "),g,s(" 和 "),h,s(" 来定制节点的形状和样式，"),y,s(" 可以类比 "),m,s("，"),f,s(" 类比 "),x,s("。强烈建议仔细阅读 "),n("a",b,[s("markup"),t(a)]),s(" 和 "),n("a",_,[s("attrs"),t(a)]),s(" 文档。")]),v,q,w,n("ul",null,[n("li",null,[s("node.prop(path, value)，详细使用见 "),n("a",z,[s("prop"),t(a)]),s("。")]),n("li",null,[s("node.attr(path, value)，详细使用见 "),n("a",E,[s("attr"),t(a)]),s("。")])]),I,n("p",null,[s("节点和边都有共同的基类 "),n("a",M,[s("Cell"),t(a)]),s("，除了从 "),N,s(" 继承属性外，还支持以下选项。")]),n("table",null,[C,n("tbody",null,[S,A,D,P,X,O,n("tr",null,[B,j,n("td",L,[n("a",G,[s("默认标签"),t(a)])]),T])])]),H,n("p",null,[s("路由 "),J,s(" 将对 "),V,s(" 进一步处理，并在必要时添加额外的点，然后返回处理后的点。例如，经过 "),n("a",W,[s("orth 路由"),t(a)]),s("处理后，边的每一条链接线段都是水平或垂直的。")]),F,n("ul",null,[n("li",null,[n("a",R,[s("normal"),t(a)])]),n("li",null,[n("a",K,[s("orth"),t(a)])]),n("li",null,[n("a",Z,[s("oneSide"),t(a)])]),n("li",null,[n("a",Y,[s("manhattan"),t(a)])]),n("li",null,[n("a",Q,[s("metro"),t(a)])]),n("li",null,[n("a",U,[s("er"),t(a)])])]),$,n("ul",null,[n("li",null,[n("a",nn,[s("block"),t(a)])]),n("li",null,[n("a",sn,[s("classic"),t(a)])]),n("li",null,[n("a",an,[s("diamond"),t(a)])]),n("li",null,[n("a",tn,[s("cross"),t(a)])]),n("li",null,[n("a",pn,[s("async"),t(a)])]),n("li",null,[n("a",en,[s("path"),t(a)])]),n("li",null,[n("a",on,[s("circle"),t(a)])]),n("li",null,[n("a",cn,[s("circlePlus"),t(a)])]),n("li",null,[n("a",ln,[s("ellipse"),t(a)])])]),rn,n("p",null,[s("节点上有丰富的 "),n("a",un,[s("API"),t(a)]),s(" 对连接桩进行增、删、改操作。")]),kn,n("p",null,[s("我们默认提供了下面几种连接桩布局算法，同时支持"),n("a",dn,[s("自定义连接桩布局算法并注册使用"),t(a)]),s("，点击下面的链接可以了解每种布局算法的使用方法。")]),n("ul",null,[n("li",null,[n("a",gn,[hn,t(a)]),s(" 绝对定位。")]),n("li",null,[n("a",yn,[mn,t(a)]),s(" 矩形节点左侧均匀分布。")]),n("li",null,[n("a",fn,[xn,t(a)]),s(" 矩形节点右侧均匀分布。")]),n("li",null,[n("a",bn,[_n,t(a)]),s(" 矩形节点顶部均匀分布。")]),n("li",null,[n("a",vn,[qn,t(a)]),s(" 矩形节点底部均匀分布。")]),n("li",null,[n("a",wn,[zn,t(a)]),s(" 沿指定的线均匀分布。")]),n("li",null,[n("a",En,[In,t(a)]),s(" 沿椭圆圆弧分布。")]),n("li",null,[n("a",Mn,[Nn,t(a)]),s(" 沿椭圆均匀分布。")])]),Cn,Sn,n("p",null,[s("我们默认提供了下面几种标签位置，也支持"),n("a",An,[s("自定义标签位置并注册使用"),t(a)]),s("，点击下面的链接了解每种标签位置的使用方法。")]),n("ul",null,[n("li",null,[n("a",Dn,[Pn,t(a)]),s(" 标签位于连接桩左侧。")]),n("li",null,[n("a",Xn,[On,t(a)]),s(" 标签位于连接桩右侧。")]),n("li",null,[n("a",Bn,[jn,t(a)]),s(" 标签位于连接桩上方。")]),n("li",null,[n("a",Ln,[Gn,t(a)]),s(" 标签位于连接桩下方。")]),n("li",null,[n("a",Tn,[Hn,t(a)]),s(" 标签位于节点内围（靠近边线的内侧）。")]),n("li",null,[n("a",Jn,[Vn,t(a)]),s(" 标签位于节点外围（靠近边线的外侧）。")]),n("li",null,[n("a",Wn,[Fn,t(a)]),s(" 标签位于节点内围，而且根据所在方位自动调整文本的方向。")]),n("li",null,[n("a",Rn,[Kn,t(a)]),s(" 标签位于节点外围，而且根据所在方位自动调整文本的方向。")]),n("li",null,[n("a",Zn,[Yn,t(a)]),s(" 标签位于圆形或椭圆形节点的外围。")]),n("li",null,[n("a",Qn,[Un,t(a)]),s(" 标签位于圆形或椭圆形节点的外围，并使标签文本自动沿圆弧方向旋转。")])]),$n,ns,n("p",null,[s("连线交互规则都是通过 "),ss,s(" 配置来完成，完整的配置参考 "),n("a",as,[s("API"),t(a)]),s("。下面介绍一些常用的功能。")]),ts,n("ul",null,[n("li",null,[n("a",ps,[s("button"),t(a)]),s(" 在指定位置处渲染一个按钮，支持自定义按钮的点击交互。")]),n("li",null,[n("a",es,[s("button-remove"),t(a)]),s(" 在指定的位置处，渲染一个删除按钮，点击时删除对应的节点。")]),n("li",null,[n("a",os,[s("boundary"),t(a)]),s(" 根据节点的包围盒渲染一个包围节点的矩形。注意，该工具仅仅渲染一个矩形，不带任何交互。")])]),cs,n("ul",null,[n("li",null,[n("a",ls,[s("vertices"),t(a)]),s(" 路径点工具，在路径点位置渲染一个小圆点，拖动小圆点修改路径点位置，双击小圆点删除路径点，在边上单击添加路径点。")]),n("li",null,[n("a",rs,[s("segments"),t(a)]),s(" 线段工具。在边的每条线段的中心渲染一个工具条，可以拖动工具条调整线段两端的路径点的位置。")]),n("li",null,[n("a",us,[s("boundary"),t(a)]),s(" 根据边的包围盒渲染一个包围边的矩形。注意，该工具仅仅渲染一个矩形，不带任何交互。")]),n("li",null,[n("a",is,[s("button"),t(a)]),s(" 在指定位置处渲染一个按钮，支持自定义按钮的点击交互。")]),n("li",null,[n("a",ks,[s("button-remove"),t(a)]),s(" 在指定的位置处，渲染一个删除按钮，点击时删除对应的边。")]),n("li",null,[n("a",ds,[s("source-arrowhead 和 target-arrowhead"),t(a)]),s(" 在边的起点或终点渲染一个图形(默认是箭头)，拖动该图形来修改边的起点或终点。")])])])}const fs=e(r,[["render",gs],["__file","x6_start.html.vue"]]);export{fs as default};
