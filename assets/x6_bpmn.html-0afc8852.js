import{_ as n,p as s,q as a,a1 as p}from"./framework-d81ad7e5.js";const t={},o=p(`<h2 id="x6-流程图" tabindex="-1"><a class="header-anchor" href="#x6-流程图" aria-hidden="true">#</a> x6 流程图</h2><div class="language-json" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;@antv/x6&quot;</span><span class="token operator">:</span> <span class="token string">&quot;^2.0.0&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;@antv/x6-plugin-clipboard&quot;</span><span class="token operator">:</span> <span class="token string">&quot;^2.0.0&quot;</span><span class="token punctuation">,</span> <span class="token comment">// 如果使用剪切板功能，需要安装此包</span>
  <span class="token property">&quot;@antv/x6-plugin-history&quot;</span><span class="token operator">:</span> <span class="token string">&quot;^2.0.0&quot;</span><span class="token punctuation">,</span> <span class="token comment">// 如果使用撤销重做功能，需要安装此包</span>
  <span class="token property">&quot;@antv/x6-plugin-keyboard&quot;</span><span class="token operator">:</span> <span class="token string">&quot;^2.0.0&quot;</span><span class="token punctuation">,</span> <span class="token comment">// 如果使用快捷键功能，需要安装此包</span>
  <span class="token property">&quot;@antv/x6-plugin-minimap&quot;</span><span class="token operator">:</span> <span class="token string">&quot;^2.0.0&quot;</span><span class="token punctuation">,</span> <span class="token comment">// 如果使用小地图功能，需要安装此包</span>
  <span class="token property">&quot;@antv/x6-plugin-scroller&quot;</span><span class="token operator">:</span> <span class="token string">&quot;^2.0.0&quot;</span><span class="token punctuation">,</span> <span class="token comment">// 如果使用滚动画布功能，需要安装此包</span>
  <span class="token property">&quot;@antv/x6-plugin-selection&quot;</span><span class="token operator">:</span> <span class="token string">&quot;^2.0.0&quot;</span><span class="token punctuation">,</span> <span class="token comment">// 如果使用框选功能，需要安装此包</span>
  <span class="token property">&quot;@antv/x6-plugin-snapline&quot;</span><span class="token operator">:</span> <span class="token string">&quot;^2.0.0&quot;</span><span class="token punctuation">,</span> <span class="token comment">// 如果使用对齐线功能，需要安装此包</span>
  <span class="token property">&quot;@antv/x6-plugin-dnd&quot;</span><span class="token operator">:</span> <span class="token string">&quot;^2.0.0&quot;</span><span class="token punctuation">,</span> <span class="token comment">// 如果使用 dnd 功能，需要安装此包</span>
  <span class="token property">&quot;@antv/x6-plugin-stencil&quot;</span><span class="token operator">:</span> <span class="token string">&quot;^2.0.0&quot;</span><span class="token punctuation">,</span> <span class="token comment">// 如果使用 stencil 功能，需要安装此包</span>
  <span class="token property">&quot;@antv/x6-plugin-transform&quot;</span><span class="token operator">:</span> <span class="token string">&quot;^2.0.0&quot;</span><span class="token punctuation">,</span> <span class="token comment">// 如果使用图形变换功能，需要安装此包</span>
  <span class="token property">&quot;@antv/x6-plugin-export&quot;</span><span class="token operator">:</span> <span class="token string">&quot;^2.0.0&quot;</span><span class="token punctuation">,</span> <span class="token comment">// 如果使用图片导出功能，需要安装此包</span>
  <span class="token property">&quot;@antv/x6-react-components&quot;</span><span class="token operator">:</span> <span class="token string">&quot;^2.0.0&quot;</span><span class="token punctuation">,</span> <span class="token comment">// 如果使用配套 UI 组件，需要安装此包</span>
  <span class="token property">&quot;@antv/x6-react-shape&quot;</span><span class="token operator">:</span> <span class="token string">&quot;^2.0.0&quot;</span><span class="token punctuation">,</span> <span class="token comment">// 如果使用 react 渲染功能，需要安装此包</span>
  <span class="token property">&quot;@antv/x6-vue-shape&quot;</span><span class="token operator">:</span> <span class="token string">&quot;^2.0.0&quot;</span> <span class="token comment">// 如果使用 vue 渲染功能，需要安装此包</span>
<span class="token punctuation">}</span>

<span class="token property">&quot;dependencies&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;@element-plus/icons-vue&quot;</span><span class="token operator">:</span> <span class="token string">&quot;^2.3.1&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;element-plus&quot;</span><span class="token operator">:</span> <span class="token string">&quot;^2.7.6&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;pinia&quot;</span><span class="token operator">:</span> <span class="token string">&quot;^2.1.7&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;vue&quot;</span><span class="token operator">:</span> <span class="token string">&quot;^3.4.29&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;vue-router&quot;</span><span class="token operator">:</span> <span class="token string">&quot;^4.3.3&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;@antv/x6&quot;</span><span class="token operator">:</span> <span class="token string">&quot;latest&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;@antv/x6-plugin-clipboard&quot;</span><span class="token operator">:</span> <span class="token string">&quot;latest&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;@antv/x6-plugin-history&quot;</span><span class="token operator">:</span> <span class="token string">&quot;latest&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;@antv/x6-plugin-keyboard&quot;</span><span class="token operator">:</span> <span class="token string">&quot;latest&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;@antv/x6-plugin-selection&quot;</span><span class="token operator">:</span> <span class="token string">&quot;latest&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;@antv/x6-plugin-snapline&quot;</span><span class="token operator">:</span> <span class="token string">&quot;latest&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;@antv/x6-plugin-stencil&quot;</span><span class="token operator">:</span> <span class="token string">&quot;latest&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;@antv/x6-plugin-transform&quot;</span><span class="token operator">:</span> <span class="token string">&quot;latest&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;@antv/x6-plugin-node-editor&quot;</span><span class="token operator">:</span> <span class="token string">&quot;latest&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;insert-css&quot;</span><span class="token operator">:</span> <span class="token string">&quot;latest&quot;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>

</code></pre></div><div class="language-vue" data-ext="vue"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>ts<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> <span class="token punctuation">{</span> ref<span class="token punctuation">,</span> onMounted <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> Graph<span class="token punctuation">,</span> Shape <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@antv/x6&#39;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> Stencil <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@antv/x6-plugin-stencil&#39;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> Transform <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@antv/x6-plugin-transform&#39;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> Selection <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@antv/x6-plugin-selection&#39;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> Snapline <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@antv/x6-plugin-snapline&#39;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> Keyboard <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@antv/x6-plugin-keyboard&#39;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> Clipboard <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@antv/x6-plugin-clipboard&#39;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> History <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@antv/x6-plugin-history&#39;</span>
<span class="token comment">// import { NodeEditor } from &#39;@antv/x6-plugin-node-editor&#39;</span>
<span class="token keyword">import</span> insertCss <span class="token keyword">from</span> <span class="token string">&#39;insert-css&#39;</span>
 
<span class="token function">onMounted</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token comment">// 初始化画布</span>
  <span class="token comment">//- \`Graph\` 对象用于初始化流程图画布，\`container\` 指向 HTML 中 \`graph-container\` 这个 DOM 元素。流程图支持缩放、连线、拖拽等功能。</span>
  <span class="token keyword">const</span> graph <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Graph</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">container</span><span class="token operator">:</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">&#39;graph-container&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token literal-property property">grid</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token literal-property property">mousewheel</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">enabled</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
      <span class="token literal-property property">zoomAtMousePosition</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
      <span class="token literal-property property">modifiers</span><span class="token operator">:</span> <span class="token string">&#39;ctrl&#39;</span><span class="token punctuation">,</span>
      <span class="token literal-property property">minScale</span><span class="token operator">:</span> <span class="token number">0.5</span><span class="token punctuation">,</span>
      <span class="token literal-property property">maxScale</span><span class="token operator">:</span> <span class="token number">3</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">connecting</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">router</span><span class="token operator">:</span> <span class="token string">&#39;manhattan&#39;</span><span class="token punctuation">,</span>
      <span class="token literal-property property">connector</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;rounded&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">args</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token literal-property property">radius</span><span class="token operator">:</span> <span class="token number">8</span> <span class="token punctuation">}</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token literal-property property">anchor</span><span class="token operator">:</span> <span class="token string">&#39;center&#39;</span><span class="token punctuation">,</span>
      <span class="token literal-property property">connectionPoint</span><span class="token operator">:</span> <span class="token string">&#39;anchor&#39;</span><span class="token punctuation">,</span>
      <span class="token literal-property property">allowBlank</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
      <span class="token literal-property property">snap</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token literal-property property">radius</span><span class="token operator">:</span> <span class="token number">20</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token function">createEdge</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">Shape<span class="token punctuation">.</span>Edge</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
          <span class="token literal-property property">attrs</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token literal-property property">line</span><span class="token operator">:</span> <span class="token punctuation">{</span>
              <span class="token literal-property property">stroke</span><span class="token operator">:</span> <span class="token string">&#39;#A2B1C3&#39;</span><span class="token punctuation">,</span>
              <span class="token literal-property property">strokeWidth</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
              <span class="token literal-property property">targetMarker</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;block&#39;</span><span class="token punctuation">,</span>
                <span class="token literal-property property">width</span><span class="token operator">:</span> <span class="token number">12</span><span class="token punctuation">,</span>
                <span class="token literal-property property">height</span><span class="token operator">:</span> <span class="token number">8</span>
              <span class="token punctuation">}</span>
            <span class="token punctuation">}</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token literal-property property">zIndex</span><span class="token operator">:</span> <span class="token number">0</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token function">validateConnection</span><span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span> targetMagnet <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token operator">!</span><span class="token operator">!</span>targetMagnet
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">highlighting</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">magnetAdsorbed</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;stroke&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">args</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token literal-property property">attrs</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token literal-property property">fill</span><span class="token operator">:</span> <span class="token string">&#39;#5F95FF&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">stroke</span><span class="token operator">:</span> <span class="token string">&#39;#5F95FF&#39;</span> <span class="token punctuation">}</span> <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
 
  <span class="token comment">// 插件配置</span>
  <span class="token comment">//- 通过 \`.use()\` 方法注册了多个插件，包括 \`Transform\`（支持调整大小、旋转）、\`Selection\`（选择功能）、\`Snapline\`（自动对齐线）、\`Keyboard\`（键盘支持）等。</span>
 
  graph
    <span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Transform</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">resizing</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token literal-property property">rotating</span><span class="token operator">:</span> <span class="token boolean">true</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Selection</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">rubberband</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token literal-property property">showNodeSelectionBox</span><span class="token operator">:</span> <span class="token boolean">true</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Snapline</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Keyboard</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Clipboard</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">History</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
 
  <span class="token comment">// 初始化 stencil</span>
  <span class="token comment">//- \`Stencil\` 是用于提供左侧工具栏的组件，用户可以从工具栏中拖拽图形到画布中。支持基本图形和系统设计图的两类分组</span>
  <span class="token keyword">const</span> stencil <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Stencil</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">&#39;流程图&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">target</span><span class="token operator">:</span> graph<span class="token punctuation">,</span>
    <span class="token literal-property property">stencilGraphWidth</span><span class="token operator">:</span> <span class="token number">200</span><span class="token punctuation">,</span>
    <span class="token literal-property property">stencilGraphHeight</span><span class="token operator">:</span> <span class="token number">180</span><span class="token punctuation">,</span>
    <span class="token literal-property property">collapsable</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token literal-property property">groups</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span> <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">&#39;基础流程图&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;group1&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span> <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">&#39;系统设计图&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;group2&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">graphHeight</span><span class="token operator">:</span> <span class="token number">250</span><span class="token punctuation">,</span> <span class="token literal-property property">layoutOptions</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token literal-property property">rowHeight</span><span class="token operator">:</span> <span class="token number">70</span> <span class="token punctuation">}</span> <span class="token punctuation">}</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token literal-property property">layoutOptions</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token literal-property property">columns</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token literal-property property">columnWidth</span><span class="token operator">:</span> <span class="token number">80</span><span class="token punctuation">,</span> <span class="token literal-property property">rowHeight</span><span class="token operator">:</span> <span class="token number">55</span> <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
 
  document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">&#39;stencil&#39;</span><span class="token punctuation">)</span><span class="token operator">?.</span><span class="token function">appendChild</span><span class="token punctuation">(</span>stencil<span class="token punctuation">.</span>container<span class="token punctuation">)</span>
  <span class="token comment">// #region 快捷键与事件</span>
  graph<span class="token punctuation">.</span><span class="token function">bindKey</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string">&#39;meta+c&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;ctrl+c&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> cells <span class="token operator">=</span> graph<span class="token punctuation">.</span><span class="token function">getSelectedCells</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>cells<span class="token punctuation">.</span>length<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      graph<span class="token punctuation">.</span><span class="token function">copy</span><span class="token punctuation">(</span>cells<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> <span class="token boolean">false</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
  graph<span class="token punctuation">.</span><span class="token function">bindKey</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string">&#39;meta+x&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;ctrl+x&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> cells <span class="token operator">=</span> graph<span class="token punctuation">.</span><span class="token function">getSelectedCells</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>cells<span class="token punctuation">.</span>length<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      graph<span class="token punctuation">.</span><span class="token function">cut</span><span class="token punctuation">(</span>cells<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> <span class="token boolean">false</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
  graph<span class="token punctuation">.</span><span class="token function">bindKey</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string">&#39;meta+v&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;ctrl+v&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>graph<span class="token punctuation">.</span><span class="token function">isClipboardEmpty</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">const</span> cells <span class="token operator">=</span> graph<span class="token punctuation">.</span><span class="token function">paste</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">offset</span><span class="token operator">:</span> <span class="token number">32</span> <span class="token punctuation">}</span><span class="token punctuation">)</span>
      graph<span class="token punctuation">.</span><span class="token function">cleanSelection</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
      graph<span class="token punctuation">.</span><span class="token function">select</span><span class="token punctuation">(</span>cells<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> <span class="token boolean">false</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
 
  <span class="token comment">// undo redo</span>
  graph<span class="token punctuation">.</span><span class="token function">bindKey</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string">&#39;meta+z&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;ctrl+z&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>graph<span class="token punctuation">.</span><span class="token function">canUndo</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      graph<span class="token punctuation">.</span><span class="token function">undo</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> <span class="token boolean">false</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
  graph<span class="token punctuation">.</span><span class="token function">bindKey</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string">&#39;meta+shift+z&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;ctrl+shift+z&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>graph<span class="token punctuation">.</span><span class="token function">canRedo</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      graph<span class="token punctuation">.</span><span class="token function">redo</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> <span class="token boolean">false</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
 
  <span class="token comment">// select all</span>
  graph<span class="token punctuation">.</span><span class="token function">bindKey</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string">&#39;meta+a&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;ctrl+a&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> nodes <span class="token operator">=</span> graph<span class="token punctuation">.</span><span class="token function">getNodes</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>nodes<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      graph<span class="token punctuation">.</span><span class="token function">select</span><span class="token punctuation">(</span>nodes<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
 
  <span class="token comment">// delete</span>
  graph<span class="token punctuation">.</span><span class="token function">bindKey</span><span class="token punctuation">(</span><span class="token string">&#39;backspace&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> cells <span class="token operator">=</span> graph<span class="token punctuation">.</span><span class="token function">getSelectedCells</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>cells<span class="token punctuation">.</span>length<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      graph<span class="token punctuation">.</span><span class="token function">removeCells</span><span class="token punctuation">(</span>cells<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
 
  <span class="token comment">// zoom</span>
  graph<span class="token punctuation">.</span><span class="token function">bindKey</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string">&#39;ctrl+1&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;meta+1&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> zoom <span class="token operator">=</span> graph<span class="token punctuation">.</span><span class="token function">zoom</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>zoom <span class="token operator">&lt;</span> <span class="token number">1.5</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      graph<span class="token punctuation">.</span><span class="token function">zoom</span><span class="token punctuation">(</span><span class="token number">0.1</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
  graph<span class="token punctuation">.</span><span class="token function">bindKey</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string">&#39;ctrl+2&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;meta+2&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> zoom <span class="token operator">=</span> graph<span class="token punctuation">.</span><span class="token function">zoom</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>zoom <span class="token operator">&gt;</span> <span class="token number">0.5</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      graph<span class="token punctuation">.</span><span class="token function">zoom</span><span class="token punctuation">(</span><span class="token operator">-</span><span class="token number">0.1</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
 
  <span class="token comment">// 控制连接桩显示/隐藏</span>
  <span class="token keyword">const</span> <span class="token function-variable function">showPorts</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">ports</span><span class="token operator">:</span> NodeListOf<span class="token operator">&lt;</span>SVGElement<span class="token operator">&gt;</span><span class="token punctuation">,</span> <span class="token literal-property property">show</span><span class="token operator">:</span> boolean</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">,</span> len <span class="token operator">=</span> ports<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i <span class="token operator">&lt;</span> len<span class="token punctuation">;</span> i <span class="token operator">+=</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      ports<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">.</span>style<span class="token punctuation">.</span>visibility <span class="token operator">=</span> show <span class="token operator">?</span> <span class="token string">&#39;visible&#39;</span> <span class="token operator">:</span> <span class="token string">&#39;hidden&#39;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
  graph<span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span><span class="token string">&#39;node:mouseenter&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> container <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">&#39;graph-container&#39;</span><span class="token punctuation">)</span><span class="token operator">!</span>
    <span class="token keyword">const</span> ports <span class="token operator">=</span> container<span class="token punctuation">.</span><span class="token function">querySelectorAll</span><span class="token punctuation">(</span><span class="token string">&#39;.x6-port-body&#39;</span><span class="token punctuation">)</span> <span class="token keyword">as</span> NodeListOf<span class="token operator">&lt;</span>SVGElement<span class="token operator">&gt;</span>
    <span class="token function">showPorts</span><span class="token punctuation">(</span>ports<span class="token punctuation">,</span> <span class="token boolean">true</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
  graph<span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span><span class="token string">&#39;node:mouseleave&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> container <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">&#39;graph-container&#39;</span><span class="token punctuation">)</span><span class="token operator">!</span>
    <span class="token keyword">const</span> ports <span class="token operator">=</span> container<span class="token punctuation">.</span><span class="token function">querySelectorAll</span><span class="token punctuation">(</span><span class="token string">&#39;.x6-port-body&#39;</span><span class="token punctuation">)</span> <span class="token keyword">as</span> NodeListOf<span class="token operator">&lt;</span>SVGElement<span class="token operator">&gt;</span>
    <span class="token function">showPorts</span><span class="token punctuation">(</span>ports<span class="token punctuation">,</span> <span class="token boolean">false</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token comment">// 注册自定义节点</span>
  <span class="token comment">//- 通过 \`Graph.registerNode\` 注册了不同形状（矩形、圆形、多边形等）的自定义节点，并且定义了连接桩的位置和样式。</span>
  <span class="token keyword">const</span> ports <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">groups</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">top</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">position</span><span class="token operator">:</span> <span class="token string">&#39;top&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">attrs</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token literal-property property">circle</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token literal-property property">r</span><span class="token operator">:</span> <span class="token number">4</span><span class="token punctuation">,</span>
            <span class="token literal-property property">magnet</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
            <span class="token literal-property property">stroke</span><span class="token operator">:</span> <span class="token string">&#39;#5F95FF&#39;</span><span class="token punctuation">,</span>
            <span class="token literal-property property">strokeWidth</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
            <span class="token literal-property property">fill</span><span class="token operator">:</span> <span class="token string">&#39;#fff&#39;</span><span class="token punctuation">,</span>
            <span class="token literal-property property">style</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token literal-property property">visibility</span><span class="token operator">:</span> <span class="token string">&#39;hidden&#39;</span> <span class="token punctuation">}</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token literal-property property">right</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">position</span><span class="token operator">:</span> <span class="token string">&#39;right&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">attrs</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token literal-property property">circle</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token literal-property property">r</span><span class="token operator">:</span> <span class="token number">4</span><span class="token punctuation">,</span>
            <span class="token literal-property property">magnet</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
            <span class="token literal-property property">stroke</span><span class="token operator">:</span> <span class="token string">&#39;#5F95FF&#39;</span><span class="token punctuation">,</span>
            <span class="token literal-property property">strokeWidth</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
            <span class="token literal-property property">fill</span><span class="token operator">:</span> <span class="token string">&#39;#fff&#39;</span><span class="token punctuation">,</span>
            <span class="token literal-property property">style</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token literal-property property">visibility</span><span class="token operator">:</span> <span class="token string">&#39;hidden&#39;</span> <span class="token punctuation">}</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token literal-property property">bottom</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">position</span><span class="token operator">:</span> <span class="token string">&#39;bottom&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">attrs</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token literal-property property">circle</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token literal-property property">r</span><span class="token operator">:</span> <span class="token number">4</span><span class="token punctuation">,</span>
            <span class="token literal-property property">magnet</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
            <span class="token literal-property property">stroke</span><span class="token operator">:</span> <span class="token string">&#39;#5F95FF&#39;</span><span class="token punctuation">,</span>
            <span class="token literal-property property">strokeWidth</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
            <span class="token literal-property property">fill</span><span class="token operator">:</span> <span class="token string">&#39;#fff&#39;</span><span class="token punctuation">,</span>
            <span class="token literal-property property">style</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token literal-property property">visibility</span><span class="token operator">:</span> <span class="token string">&#39;hidden&#39;</span> <span class="token punctuation">}</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token literal-property property">left</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">position</span><span class="token operator">:</span> <span class="token string">&#39;left&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">attrs</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token literal-property property">circle</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token literal-property property">r</span><span class="token operator">:</span> <span class="token number">4</span><span class="token punctuation">,</span>
            <span class="token literal-property property">magnet</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
            <span class="token literal-property property">stroke</span><span class="token operator">:</span> <span class="token string">&#39;#5F95FF&#39;</span><span class="token punctuation">,</span>
            <span class="token literal-property property">strokeWidth</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
            <span class="token literal-property property">fill</span><span class="token operator">:</span> <span class="token string">&#39;#fff&#39;</span><span class="token punctuation">,</span>
            <span class="token literal-property property">style</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token literal-property property">visibility</span><span class="token operator">:</span> <span class="token string">&#39;hidden&#39;</span> <span class="token punctuation">}</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">items</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">{</span> <span class="token literal-property property">group</span><span class="token operator">:</span> <span class="token string">&#39;top&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token literal-property property">group</span><span class="token operator">:</span> <span class="token string">&#39;right&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token literal-property property">group</span><span class="token operator">:</span> <span class="token string">&#39;bottom&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token literal-property property">group</span><span class="token operator">:</span> <span class="token string">&#39;left&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">]</span>
  <span class="token punctuation">}</span>
 
  <span class="token comment">// 注册不同形状的自定义节点</span>
  Graph<span class="token punctuation">.</span><span class="token function">registerNode</span><span class="token punctuation">(</span><span class="token string">&#39;custom-rect&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">inherit</span><span class="token operator">:</span> <span class="token string">&#39;rect&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">width</span><span class="token operator">:</span> <span class="token number">66</span><span class="token punctuation">,</span>
    <span class="token literal-property property">height</span><span class="token operator">:</span> <span class="token number">36</span><span class="token punctuation">,</span>
    <span class="token literal-property property">attrs</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">body</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token literal-property property">strokeWidth</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token literal-property property">stroke</span><span class="token operator">:</span> <span class="token string">&#39;#5F95FF&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">fill</span><span class="token operator">:</span> <span class="token string">&#39;#EFF4FF&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token literal-property property">text</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token literal-property property">fontSize</span><span class="token operator">:</span> <span class="token number">12</span><span class="token punctuation">,</span> <span class="token literal-property property">fill</span><span class="token operator">:</span> <span class="token string">&#39;#262626&#39;</span> <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">ports</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token operator">...</span>ports <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token comment">//支持文字编辑</span>
    <span class="token literal-property property">tools</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;node-editor&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">args</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token literal-property property">attrs</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token literal-property property">backgroundColor</span><span class="token operator">:</span> <span class="token string">&#39;#EFF4FF&#39;</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">]</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
 
  Graph<span class="token punctuation">.</span><span class="token function">registerNode</span><span class="token punctuation">(</span><span class="token string">&#39;custom-polygon&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">inherit</span><span class="token operator">:</span> <span class="token string">&#39;polygon&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">width</span><span class="token operator">:</span> <span class="token number">66</span><span class="token punctuation">,</span>
    <span class="token literal-property property">height</span><span class="token operator">:</span> <span class="token number">36</span><span class="token punctuation">,</span>
    <span class="token literal-property property">attrs</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">body</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token literal-property property">strokeWidth</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token literal-property property">stroke</span><span class="token operator">:</span> <span class="token string">&#39;#5F95FF&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">fill</span><span class="token operator">:</span> <span class="token string">&#39;#EFF4FF&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token literal-property property">text</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token literal-property property">fontSize</span><span class="token operator">:</span> <span class="token number">12</span><span class="token punctuation">,</span> <span class="token literal-property property">fill</span><span class="token operator">:</span> <span class="token string">&#39;#262626&#39;</span> <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">ports</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token operator">...</span>ports<span class="token punctuation">,</span> <span class="token literal-property property">items</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">{</span> <span class="token literal-property property">group</span><span class="token operator">:</span> <span class="token string">&#39;top&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token literal-property property">group</span><span class="token operator">:</span> <span class="token string">&#39;bottom&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">]</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token comment">//支持文字编辑</span>
    <span class="token literal-property property">tools</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;node-editor&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">args</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token literal-property property">attrs</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token literal-property property">backgroundColor</span><span class="token operator">:</span> <span class="token string">&#39;#EFF4FF&#39;</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">]</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
 
  Graph<span class="token punctuation">.</span><span class="token function">registerNode</span><span class="token punctuation">(</span><span class="token string">&#39;custom-circle&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">inherit</span><span class="token operator">:</span> <span class="token string">&#39;circle&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">width</span><span class="token operator">:</span> <span class="token number">45</span><span class="token punctuation">,</span>
    <span class="token literal-property property">height</span><span class="token operator">:</span> <span class="token number">45</span><span class="token punctuation">,</span>
    <span class="token literal-property property">attrs</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">body</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token literal-property property">strokeWidth</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token literal-property property">stroke</span><span class="token operator">:</span> <span class="token string">&#39;#5F95FF&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">fill</span><span class="token operator">:</span> <span class="token string">&#39;#EFF4FF&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token literal-property property">text</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token literal-property property">fontSize</span><span class="token operator">:</span> <span class="token number">12</span><span class="token punctuation">,</span> <span class="token literal-property property">fill</span><span class="token operator">:</span> <span class="token string">&#39;#262626&#39;</span> <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">ports</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token operator">...</span>ports <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token comment">//支持文字编辑</span>
    <span class="token literal-property property">tools</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;node-editor&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">args</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token literal-property property">attrs</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token literal-property property">backgroundColor</span><span class="token operator">:</span> <span class="token string">&#39;#EFF4FF&#39;</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">]</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
 
  <span class="token comment">// 加载图形节点到 stencil</span>
  <span class="token keyword">const</span> r1 <span class="token operator">=</span> graph<span class="token punctuation">.</span><span class="token function">createNode</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">shape</span><span class="token operator">:</span> <span class="token string">&#39;custom-rect&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">&#39;开始&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">attrs</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token literal-property property">body</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token literal-property property">rx</span><span class="token operator">:</span> <span class="token number">20</span><span class="token punctuation">,</span> <span class="token literal-property property">ry</span><span class="token operator">:</span> <span class="token number">26</span> <span class="token punctuation">}</span> <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token keyword">const</span> r2 <span class="token operator">=</span> graph<span class="token punctuation">.</span><span class="token function">createNode</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">shape</span><span class="token operator">:</span> <span class="token string">&#39;custom-rect&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">&#39;过程&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token keyword">const</span> r3 <span class="token operator">=</span> graph<span class="token punctuation">.</span><span class="token function">createNode</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">shape</span><span class="token operator">:</span> <span class="token string">&#39;custom-rect&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">&#39;可选过程&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">attrs</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token literal-property property">body</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token literal-property property">rx</span><span class="token operator">:</span> <span class="token number">6</span><span class="token punctuation">,</span> <span class="token literal-property property">ry</span><span class="token operator">:</span> <span class="token number">6</span> <span class="token punctuation">}</span> <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token keyword">const</span> r4 <span class="token operator">=</span> graph<span class="token punctuation">.</span><span class="token function">createNode</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">shape</span><span class="token operator">:</span> <span class="token string">&#39;custom-polygon&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">&#39;决策&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">attrs</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token literal-property property">body</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token literal-property property">refPoints</span><span class="token operator">:</span> <span class="token string">&#39;0,10 10,0 20,10 10,20&#39;</span> <span class="token punctuation">}</span> <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token keyword">const</span> r5 <span class="token operator">=</span> graph<span class="token punctuation">.</span><span class="token function">createNode</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">shape</span><span class="token operator">:</span> <span class="token string">&#39;custom-polygon&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">&#39;数据&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">attrs</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token literal-property property">body</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token literal-property property">refPoints</span><span class="token operator">:</span> <span class="token string">&#39;10,0 40,0 30,20 0,20&#39;</span> <span class="token punctuation">}</span> <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token keyword">const</span> r6 <span class="token operator">=</span> graph<span class="token punctuation">.</span><span class="token function">createNode</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">shape</span><span class="token operator">:</span> <span class="token string">&#39;custom-circle&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">&#39;连接&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">)</span>
 
  stencil<span class="token punctuation">.</span><span class="token function">load</span><span class="token punctuation">(</span><span class="token punctuation">[</span>r1<span class="token punctuation">,</span> r2<span class="token punctuation">,</span> r3<span class="token punctuation">,</span> r4<span class="token punctuation">,</span> r5<span class="token punctuation">,</span> r6<span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token string">&#39;group1&#39;</span><span class="token punctuation">)</span>
  <span class="token comment">//------------------------------------------文字编辑--------------------</span>
  <span class="token comment">//   const source = graph.addNode({</span>
  <span class="token comment">//     x: 180,</span>
  <span class="token comment">//     y: 60,</span>
  <span class="token comment">//     width: 100,</span>
  <span class="token comment">//     height: 40,</span>
  <span class="token comment">//     attrs: {</span>
  <span class="token comment">//       body: {</span>
  <span class="token comment">//         stroke: &#39;#5F95FF&#39;,</span>
  <span class="token comment">//         fill: &#39;#EFF4FF&#39;,</span>
  <span class="token comment">//         strokeWidth: 1</span>
  <span class="token comment">//       }</span>
  <span class="token comment">//     },</span>
  <span class="token comment">//     tools: [</span>
  <span class="token comment">//       {</span>
  <span class="token comment">//         name: &#39;node-editor&#39;,</span>
  <span class="token comment">//         args: {</span>
  <span class="token comment">//           attrs: {</span>
  <span class="token comment">//             backgroundColor: &#39;#EFF4FF&#39;</span>
  <span class="token comment">//           }</span>
  <span class="token comment">//         }</span>
  <span class="token comment">//       }</span>
  <span class="token comment">//     ]</span>
  <span class="token comment">//   })</span>
 
  <span class="token comment">//   const target = graph.addNode({</span>
  <span class="token comment">//     x: 320,</span>
  <span class="token comment">//     y: 250,</span>
  <span class="token comment">//     width: 100,</span>
  <span class="token comment">//     height: 40,</span>
  <span class="token comment">//     attrs: {</span>
  <span class="token comment">//       body: {</span>
  <span class="token comment">//         stroke: &#39;#5F95FF&#39;,</span>
  <span class="token comment">//         fill: &#39;#EFF4FF&#39;,</span>
  <span class="token comment">//         strokeWidth: 1</span>
  <span class="token comment">//       }</span>
  <span class="token comment">//     },</span>
  <span class="token comment">//     tools: [</span>
  <span class="token comment">//       {</span>
  <span class="token comment">//         name: &#39;node-editor&#39;,</span>
  <span class="token comment">//         args: {</span>
  <span class="token comment">//           attrs: {</span>
  <span class="token comment">//             backgroundColor: &#39;#EFF4FF&#39;</span>
  <span class="token comment">//           }</span>
  <span class="token comment">//         }</span>
  <span class="token comment">//       }</span>
  <span class="token comment">//     ]</span>
  <span class="token comment">//   })</span>
 
  <span class="token comment">//   graph.addEdge({</span>
  <span class="token comment">//     source,</span>
  <span class="token comment">//     target,</span>
  <span class="token comment">//     attrs: {</span>
  <span class="token comment">//       line: {</span>
  <span class="token comment">//         stroke: &#39;#A2B1C3&#39;,</span>
  <span class="token comment">//         strokeWidth: 2</span>
  <span class="token comment">//       }</span>
  <span class="token comment">//     },</span>
  <span class="token comment">//     tools: [</span>
  <span class="token comment">//       {</span>
  <span class="token comment">//         name: &#39;edge-editor&#39;,</span>
  <span class="token comment">//         args: {</span>
  <span class="token comment">//           attrs: {</span>
  <span class="token comment">//             backgroundColor: &#39;#fff&#39;</span>
  <span class="token comment">//           }</span>
  <span class="token comment">//         }</span>
  <span class="token comment">//       }</span>
  <span class="token comment">//     ]</span>
  <span class="token comment">//   })</span>
  <span class="token comment">//-------------------------------------------------------</span>
  <span class="token comment">// 加载图像节点</span>
  <span class="token keyword">const</span> imageShapes <span class="token operator">=</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span>
      <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">&#39;Client&#39;</span><span class="token punctuation">,</span>
      <span class="token literal-property property">image</span><span class="token operator">:</span> <span class="token string">&#39;https://gw.alipayobjects.com/zos/bmw-prod/687b6cb9-4b97-42a6-96d0-34b3099133ac.svg&#39;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
      <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">&#39;Http&#39;</span><span class="token punctuation">,</span>
      <span class="token literal-property property">image</span><span class="token operator">:</span> <span class="token string">&#39;https://gw.alipayobjects.com/zos/bmw-prod/dc1ced06-417d-466f-927b-b4a4d3265791.svg&#39;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
      <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">&#39;Api&#39;</span><span class="token punctuation">,</span>
      <span class="token literal-property property">image</span><span class="token operator">:</span> <span class="token string">&#39;https://gw.alipayobjects.com/zos/bmw-prod/c55d7ae1-8d20-4585-bd8f-ca23653a4489.svg&#39;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
      <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">&#39;Sql&#39;</span><span class="token punctuation">,</span>
      <span class="token literal-property property">image</span><span class="token operator">:</span> <span class="token string">&#39;https://gw.alipayobjects.com/zos/bmw-prod/6eb71764-18ed-4149-b868-53ad1542c405.svg&#39;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
      <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">&#39;Clound&#39;</span><span class="token punctuation">,</span>
      <span class="token literal-property property">image</span><span class="token operator">:</span> <span class="token string">&#39;https://gw.alipayobjects.com/zos/bmw-prod/c36fe7cb-dc24-4854-aeb5-88d8dc36d52e.svg&#39;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
      <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">&#39;Mq&#39;</span><span class="token punctuation">,</span>
      <span class="token literal-property property">image</span><span class="token operator">:</span> <span class="token string">&#39;https://gw.alipayobjects.com/zos/bmw-prod/2010ac9f-40e7-49d4-8c4a-4fcf2f83033b.svg&#39;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">]</span>
 
  <span class="token keyword">const</span> imageNodes <span class="token operator">=</span> imageShapes<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">item</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span>
    graph<span class="token punctuation">.</span><span class="token function">createNode</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      <span class="token literal-property property">shape</span><span class="token operator">:</span> <span class="token string">&#39;custom-image&#39;</span><span class="token punctuation">,</span>
      <span class="token literal-property property">label</span><span class="token operator">:</span> item<span class="token punctuation">.</span>label<span class="token punctuation">,</span>
      <span class="token literal-property property">attrs</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token literal-property property">image</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token string-property property">&#39;xlink:href&#39;</span><span class="token operator">:</span> item<span class="token punctuation">.</span>image <span class="token punctuation">}</span> <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token punctuation">)</span>
  <span class="token comment">//- \`stencil.load()\` 方法用于将自定义节点加载到 Stencil 中，用户可以从左侧拖拽这些节点到画布上。</span>
  stencil<span class="token punctuation">.</span><span class="token function">load</span><span class="token punctuation">(</span>imageNodes<span class="token punctuation">,</span> <span class="token string">&#39;group2&#39;</span><span class="token punctuation">)</span>
 
  <span class="token comment">// 添加 CSS 样式</span>
  <span class="token comment">//- 使用 \`insertCss()\` 动态添加了样式，使得画布、工具栏以及选择框等元素的样式更加统一。</span>
  <span class="token function">insertCss</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">
    #container {
      display: flex;
      border: 1px solid #dfe3e8;
    }
    #stencil {
      width: 180px;
      height: 100%;
      position: relative;
      border-right: 1px solid #dfe3e8;
    }
    #graph-container {
      width: calc(100% - 180px);
      height: 100%;
    }
    .x6-widget-stencil, .x6-widget-stencil-title, .x6-widget-stencil-group-title {
      background-color: #fff !important;
    }
    .x6-widget-transform
, .x6-widget-selection-box, .x6-widget-selection-inner {
      border: 1px solid #239edd;
    }
  </span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><h3 id="vue-路由重定向" tabindex="-1"><a class="header-anchor" href="#vue-路由重定向" aria-hidden="true">#</a> vue 路由重定向</h3><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 在 beforeEnter 钩子中根据某些条件进行重定向</span>
  <span class="token keyword">const</span> routess <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">&#39;/&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;layout&#39;</span><span class="token punctuation">,</span>
    <span class="token function-variable function">component</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">import</span><span class="token punctuation">(</span><span class="token string">&#39;@/components/layout/layout.vue&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token function-variable function">beforeEnter</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token parameter">to<span class="token punctuation">,</span> from<span class="token punctuation">,</span> next</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      <span class="token comment">// 基于某些条件来判断重定向目标</span>
      <span class="token keyword">const</span> shouldRedirect <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span> <span class="token comment">// 你的条件</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>shouldRedirect<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token function">next</span><span class="token punctuation">(</span><span class="token string">&#39;/task&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
        <span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
 <span class="token punctuation">}</span>


 <span class="token keyword">const</span> routes <span class="token operator">=</span> <span class="token punctuation">[</span>
  <span class="token punctuation">{</span>
    <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">&#39;/&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;layout&#39;</span><span class="token punctuation">,</span>
    <span class="token function-variable function">component</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">import</span><span class="token punctuation">(</span><span class="token string">&#39;@/components/layout/layout.vue&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token literal-property property">redirect</span><span class="token operator">:</span> <span class="token string">&#39;/task&#39;</span><span class="token punctuation">,</span> <span class="token comment">// 第一次重定向，重定向到 &#39;task&#39;</span>
    <span class="token literal-property property">children</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">&#39;task&#39;</span><span class="token punctuation">,</span> 
        <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;task&#39;</span><span class="token punctuation">,</span>
        <span class="token function-variable function">component</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">import</span><span class="token punctuation">(</span><span class="token string">&#39;@/views/task/taskview.vue&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
        <span class="token literal-property property">redirect</span><span class="token operator">:</span> <span class="token string">&#39;/task/default&#39;</span><span class="token punctuation">,</span> <span class="token comment">// 第二次重定向，重定向到 &#39;task/default&#39;</span>
        <span class="token literal-property property">children</span><span class="token operator">:</span> <span class="token punctuation">[</span>
          <span class="token punctuation">{</span>
            <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">&#39;default&#39;</span><span class="token punctuation">,</span>
            <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;defaultTask&#39;</span><span class="token punctuation">,</span>
            <span class="token function-variable function">component</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">import</span><span class="token punctuation">(</span><span class="token string">&#39;@/views/task/defaulttask.vue&#39;</span><span class="token punctuation">)</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span>
            <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">&#39;custom&#39;</span><span class="token punctuation">,</span>
            <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;customTask&#39;</span><span class="token punctuation">,</span>
            <span class="token function-variable function">component</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">import</span><span class="token punctuation">(</span><span class="token string">&#39;@/views/task/customtask.vue&#39;</span><span class="token punctuation">)</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">]</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">]</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">]</span><span class="token punctuation">;</span>

</code></pre></div><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">let</span> node1 <span class="token operator">=</span> graph<span class="token punctuation">.</span><span class="token function">addNode</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">x</span><span class="token operator">:</span> <span class="token number">100</span><span class="token punctuation">,</span>
    <span class="token literal-property property">y</span><span class="token operator">:</span> <span class="token number">60</span><span class="token punctuation">,</span>
    <span class="token literal-property property">width</span><span class="token operator">:</span> <span class="token number">500</span><span class="token punctuation">,</span>
    <span class="token literal-property property">height</span><span class="token operator">:</span> <span class="token number">400</span><span class="token punctuation">,</span>
    <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">&quot;节点1&quot;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token string">&quot;node1&quot;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">attrs</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">body</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">fill</span><span class="token operator">:</span> <span class="token string">&quot;#fff&quot;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">stroke</span><span class="token operator">:</span> <span class="token string">&quot;#000000&quot;</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">text</span><span class="token operator">:</span> <span class="token string">&quot;节点&quot;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">fill</span><span class="token operator">:</span> <span class="token string">&quot;#FFFFFF&quot;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">fontSize</span><span class="token operator">:</span> fontSize<span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><ul><li>修改 text 官方提供了attr方法：</li></ul><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code>rect<span class="token punctuation">.</span><span class="token function">attr</span><span class="token punctuation">(</span><span class="token string">&#39;label/text&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;hello&#39;</span><span class="token punctuation">)</span>
 
<span class="token comment">// 等同于</span>
rect<span class="token punctuation">.</span><span class="token function">attr</span><span class="token punctuation">(</span><span class="token string">&#39;label&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">text</span><span class="token operator">:</span> <span class="token string">&#39;hello&#39;</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
 
<span class="token comment">// 等同于</span>
rect<span class="token punctuation">.</span><span class="token function">attr</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">text</span><span class="token operator">:</span> <span class="token string">&#39;hello&#39;</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre></div><p>只要将上面的rect换成node1，我们就可以轻松的修改成功。</p><ol start="3"><li>比如说要修改x,y的值？</li></ol><div class="language-JS" data-ext="JS"><pre class="language-JS"><code>node.setProp(&#39;position&#39;, { x: 600, y: 30 });
</code></pre></div><p>以上是修改位置的，发现很好用吧。</p><ol start="4"><li>当然尺寸也是一样：</li></ol><div class="language-JS" data-ext="JS"><pre class="language-JS"><code>node.setProp(&#39;size&#39;, { width: 600, height: 30 });
</code></pre></div><p>我们也可以resize来修改：</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code>node<span class="token punctuation">.</span><span class="token function">resize</span><span class="token punctuation">(</span><span class="token number">100</span><span class="token punctuation">,</span><span class="token number">100</span><span class="token punctuation">)</span>
</code></pre></div><ol start="5"><li>官方的说明：<code>https://x6.antv.antgroup.com/api/model/cell</code></li></ol>`,17),e=[o];function c(l,r){return s(),a("div",null,e)}const k=n(t,[["render",c],["__file","x6_bpmn.html.vue"]]);export{k as default};
