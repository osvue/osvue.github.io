import{_ as s,o as a,c as p,a as t}from"./app-215c512d.js";const o={};function e(c,n){return a(),p("div",null,n[0]||(n[0]=[t(`<ol><li><strong>图层源（Source）</strong></li></ol><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 图层源是数据的来源，定义了如何获取和存储地理数据</span>
<span class="token comment">// 常见的图层源类型：</span>

<span class="token comment">// 1. VectorSource - 矢量数据源</span>
<span class="token keyword">const</span> vectorSource <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">VectorSource</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">features</span><span class="token operator">:</span> features<span class="token punctuation">,</span>  <span class="token comment">// 直接提供要素数组</span>
  <span class="token comment">// 或者通过 URL 加载数据</span>
  <span class="token literal-property property">url</span><span class="token operator">:</span> <span class="token string">&#39;path/to/geojson&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">format</span><span class="token operator">:</span> <span class="token keyword">new</span> <span class="token class-name">GeoJSON</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 2. TileSource - 瓦片数据源</span>
<span class="token keyword">const</span> tileSource <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">XYZ</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">url</span><span class="token operator">:</span> <span class="token string">&#39;http://example.com/tiles/{z}/{x}/{y}.png&#39;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 3. ImageSource - 图片数据源</span>
<span class="token keyword">const</span> imageSource <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ImageWMS</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">url</span><span class="token operator">:</span> <span class="token string">&#39;http://example.com/geoserver/wms&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">params</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token constant">LAYERS</span><span class="token operator">:</span> <span class="token string">&#39;layer_name&#39;</span><span class="token punctuation">,</span>
    <span class="token constant">FORMAT</span><span class="token operator">:</span> <span class="token string">&#39;image/png&#39;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><ol start="2"><li><strong>图层（Layer）</strong></li></ol><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 图层是数据的可视化表现，定义了如何渲染数据</span>
<span class="token comment">// 常见的图层类型：</span>

<span class="token comment">// 1. VectorLayer - 矢量图层</span>
<span class="token keyword">const</span> vectorLayer <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">VectorLayer</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;myVectorLayer&#39;</span><span class="token punctuation">,</span>  <span class="token comment">// 图层名称，用于识别</span>
  <span class="token literal-property property">source</span><span class="token operator">:</span> vectorSource<span class="token punctuation">,</span>   <span class="token comment">// 关联的图层源</span>
  <span class="token literal-property property">style</span><span class="token operator">:</span> <span class="token keyword">new</span> <span class="token class-name">Style</span><span class="token punctuation">(</span><span class="token punctuation">{</span>      <span class="token comment">// 样式定义</span>
    <span class="token literal-property property">fill</span><span class="token operator">:</span> <span class="token keyword">new</span> <span class="token class-name">Fill</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">color</span><span class="token operator">:</span> <span class="token string">&#39;rgba(255,0,0,0.1)&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token literal-property property">stroke</span><span class="token operator">:</span> <span class="token keyword">new</span> <span class="token class-name">Stroke</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">color</span><span class="token operator">:</span> <span class="token string">&#39;red&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">width</span><span class="token operator">:</span> <span class="token number">2</span> <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token literal-property property">zIndex</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>             <span class="token comment">// 图层层级</span>
  <span class="token literal-property property">visible</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>         <span class="token comment">// 是否可见</span>
  <span class="token literal-property property">opacity</span><span class="token operator">:</span> <span class="token number">0.8</span>          <span class="token comment">// 透明度</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 2. TileLayer - 瓦片图层</span>
<span class="token keyword">const</span> tileLayer <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">TileLayer</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">source</span><span class="token operator">:</span> tileSource<span class="token punctuation">,</span>
  <span class="token literal-property property">zIndex</span><span class="token operator">:</span> <span class="token number">0</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 3. ImageLayer - 图片图层</span>
<span class="token keyword">const</span> imageLayer <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ImageLayer</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">source</span><span class="token operator">:</span> imageSource<span class="token punctuation">,</span>
  <span class="token literal-property property">zIndex</span><span class="token operator">:</span> <span class="token number">2</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><ol start="3"><li><strong>图层组（LayerGroup）</strong></li></ol><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 图层组用于管理多个图层，可以统一控制多个图层的显示状态</span>
<span class="token keyword">const</span> layerGroup <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">LayerGroup</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;myLayerGroup&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">layers</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    vectorLayer<span class="token punctuation">,</span>
    tileLayer<span class="token punctuation">,</span>
    imageLayer
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token comment">// 图层组可以设置统一的属性</span>
  <span class="token literal-property property">visible</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token literal-property property">opacity</span><span class="token operator">:</span> <span class="token number">0.8</span><span class="token punctuation">,</span>
  <span class="token comment">// 可以设置图层组的样式</span>
  <span class="token literal-property property">style</span><span class="token operator">:</span> <span class="token keyword">new</span> <span class="token class-name">Style</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">fill</span><span class="token operator">:</span> <span class="token keyword">new</span> <span class="token class-name">Fill</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">color</span><span class="token operator">:</span> <span class="token string">&#39;rgba(0,0,255,0.1)&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><ol start="4"><li><strong>图层层级和显示效果管理</strong>：</li></ol><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 1. 设置图层层级</span>
<span class="token comment">// 方法一：创建时设置</span>
<span class="token keyword">const</span> layer1 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">VectorLayer</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">zIndex</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
  <span class="token comment">// ... 其他配置</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 方法二：动态设置</span>
layer1<span class="token punctuation">.</span><span class="token function">setZIndex</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 2. 管理图层组</span>
<span class="token comment">// 创建多个图层组</span>
<span class="token keyword">const</span> baseGroup <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">LayerGroup</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;baseGroup&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">layers</span><span class="token operator">:</span> <span class="token punctuation">[</span>tileLayer<span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token literal-property property">zIndex</span><span class="token operator">:</span> <span class="token number">0</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> overlayGroup <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">LayerGroup</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;overlayGroup&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">layers</span><span class="token operator">:</span> <span class="token punctuation">[</span>vectorLayer<span class="token punctuation">,</span> imageLayer<span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token literal-property property">zIndex</span><span class="token operator">:</span> <span class="token number">1</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 3. 图层组嵌套</span>
<span class="token keyword">const</span> mainGroup <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">LayerGroup</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;mainGroup&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">layers</span><span class="token operator">:</span> <span class="token punctuation">[</span>baseGroup<span class="token punctuation">,</span> overlayGroup<span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token literal-property property">zIndex</span><span class="token operator">:</span> <span class="token number">0</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 4. 控制图层显示</span>
<span class="token comment">// 控制单个图层</span>
layer1<span class="token punctuation">.</span><span class="token function">setVisible</span><span class="token punctuation">(</span><span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
layer1<span class="token punctuation">.</span><span class="token function">setOpacity</span><span class="token punctuation">(</span><span class="token number">0.5</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 控制图层组</span>
layerGroup<span class="token punctuation">.</span><span class="token function">setVisible</span><span class="token punctuation">(</span><span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
layerGroup<span class="token punctuation">.</span><span class="token function">setOpacity</span><span class="token punctuation">(</span><span class="token number">0.5</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 5. 获取和遍历图层</span>
<span class="token comment">// 获取地图上的所有图层</span>
<span class="token keyword">const</span> allLayers <span class="token operator">=</span> map<span class="token punctuation">.</span><span class="token function">getLayers</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getArray</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 遍历图层组中的图层</span>
layerGroup<span class="token punctuation">.</span><span class="token function">getLayers</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token parameter">layer</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>layer<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">&#39;name&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token comment">// 设置每个图层的属性</span>
  layer<span class="token punctuation">.</span><span class="token function">setZIndex</span><span class="token punctuation">(</span>layer<span class="token punctuation">.</span><span class="token function">getZIndex</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 6. 图层排序</span>
<span class="token comment">// 按 zIndex 排序图层</span>
<span class="token keyword">const</span> sortedLayers <span class="token operator">=</span> allLayers<span class="token punctuation">.</span><span class="token function">sort</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">a<span class="token punctuation">,</span> b</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> a<span class="token punctuation">.</span><span class="token function">getZIndex</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">-</span> b<span class="token punctuation">.</span><span class="token function">getZIndex</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><ol start="5"><li><strong>实际应用示例</strong>：</li></ol><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 创建一个包含多个图层组的地图</span>
<span class="token keyword">const</span> map <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Map</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">target</span><span class="token operator">:</span> <span class="token string">&#39;map&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">layers</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token comment">// 底图组</span>
    <span class="token keyword">new</span> <span class="token class-name">LayerGroup</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;baseLayers&#39;</span><span class="token punctuation">,</span>
      <span class="token literal-property property">layers</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token keyword">new</span> <span class="token class-name">TileLayer</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
          <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;satellite&#39;</span><span class="token punctuation">,</span>
          <span class="token literal-property property">source</span><span class="token operator">:</span> <span class="token keyword">new</span> <span class="token class-name">XYZ</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
            <span class="token literal-property property">url</span><span class="token operator">:</span> <span class="token string">&#39;http://example.com/satellite/{z}/{x}/{y}.png&#39;</span>
          <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
          <span class="token literal-property property">zIndex</span><span class="token operator">:</span> <span class="token number">0</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
        <span class="token keyword">new</span> <span class="token class-name">TileLayer</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
          <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;terrain&#39;</span><span class="token punctuation">,</span>
          <span class="token literal-property property">source</span><span class="token operator">:</span> <span class="token keyword">new</span> <span class="token class-name">XYZ</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
            <span class="token literal-property property">url</span><span class="token operator">:</span> <span class="token string">&#39;http://example.com/terrain/{z}/{x}/{y}.png&#39;</span>
          <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
          <span class="token literal-property property">zIndex</span><span class="token operator">:</span> <span class="token number">1</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span>
      <span class="token punctuation">]</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token comment">// 数据图层组</span>
    <span class="token keyword">new</span> <span class="token class-name">LayerGroup</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;dataLayers&#39;</span><span class="token punctuation">,</span>
      <span class="token literal-property property">layers</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token keyword">new</span> <span class="token class-name">VectorLayer</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
          <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;boundaries&#39;</span><span class="token punctuation">,</span>
          <span class="token literal-property property">source</span><span class="token operator">:</span> <span class="token keyword">new</span> <span class="token class-name">VectorSource</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
            <span class="token literal-property property">url</span><span class="token operator">:</span> <span class="token string">&#39;path/to/boundaries.geojson&#39;</span><span class="token punctuation">,</span>
            <span class="token literal-property property">format</span><span class="token operator">:</span> <span class="token keyword">new</span> <span class="token class-name">GeoJSON</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
          <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
          <span class="token literal-property property">zIndex</span><span class="token operator">:</span> <span class="token number">2</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
        <span class="token keyword">new</span> <span class="token class-name">VectorLayer</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
          <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;points&#39;</span><span class="token punctuation">,</span>
          <span class="token literal-property property">source</span><span class="token operator">:</span> <span class="token keyword">new</span> <span class="token class-name">VectorSource</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
            <span class="token literal-property property">url</span><span class="token operator">:</span> <span class="token string">&#39;path/to/points.geojson&#39;</span><span class="token punctuation">,</span>
            <span class="token literal-property property">format</span><span class="token operator">:</span> <span class="token keyword">new</span> <span class="token class-name">GeoJSON</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
          <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
          <span class="token literal-property property">zIndex</span><span class="token operator">:</span> <span class="token number">3</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span>
      <span class="token punctuation">]</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token punctuation">]</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 控制图层组显示</span>
<span class="token keyword">function</span> <span class="token function">toggleLayerGroup</span><span class="token punctuation">(</span><span class="token parameter">groupName<span class="token punctuation">,</span> visible</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  map<span class="token punctuation">.</span><span class="token function">getLayers</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token parameter">layer</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>layer <span class="token keyword">instanceof</span> <span class="token class-name">LayerGroup</span> <span class="token operator">&amp;&amp;</span> layer<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">&#39;name&#39;</span><span class="token punctuation">)</span> <span class="token operator">===</span> groupName<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      layer<span class="token punctuation">.</span><span class="token function">setVisible</span><span class="token punctuation">(</span>visible<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// 调整图层顺序</span>
<span class="token keyword">function</span> <span class="token function">reorderLayers</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> layers <span class="token operator">=</span> map<span class="token punctuation">.</span><span class="token function">getLayers</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getArray</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  layers<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">layer<span class="token punctuation">,</span> index</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    layer<span class="token punctuation">.</span><span class="token function">setZIndex</span><span class="token punctuation">(</span>index<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><p>使用建议：</p><ol><li>合理组织图层结构，使用图层组管理相关图层</li><li>为图层和图层组设置有意义的名称，便于管理</li><li>使用 <code>zIndex</code> 控制图层显示顺序</li><li>通过图层组统一管理多个图层的显示状态</li><li>注意图层性能，合理使用图层缓存和可见性控制</li></ol>`,12)]))}const r=s(o,[["render",e],["__file","group_layer.html.vue"]]);export{r as default};
