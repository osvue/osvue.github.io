import{_ as n,p as s,q as a,a1 as p}from"./framework-d81ad7e5.js";const t={},o=p(`<div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">var</span> format <span class="token operator">=</span> <span class="token string">&#39;image/png&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">var</span> bounds <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">40454494.66562566</span><span class="token punctuation">,</span> <span class="token number">3936507.0527703143</span><span class="token punctuation">,</span>
    <span class="token number">40530793.66562566</span><span class="token punctuation">,</span> <span class="token number">4002807.0527703143</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token keyword">var</span> layers <span class="token operator">=</span> <span class="token punctuation">[</span>
    <span class="token keyword">new</span> <span class="token class-name">ol<span class="token punctuation">.</span>layer<span class="token punctuation">.</span>Image</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
        <span class="token literal-property property">source</span><span class="token operator">:</span> <span class="token keyword">new</span> <span class="token class-name">ol<span class="token punctuation">.</span>source<span class="token punctuation">.</span>ImageWMS</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
            <span class="token literal-property property">ratio</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
            <span class="token literal-property property">url</span><span class="token operator">:</span> <span class="token string">&#39;http://localhost:8081/geoserver/test/wms&#39;</span><span class="token punctuation">,</span>
            <span class="token literal-property property">crossOrigin</span><span class="token operator">:</span> <span class="token string">&#39;anonymous&#39;</span><span class="token punctuation">,</span>           <span class="token comment">//跨域声明</span>
            <span class="token literal-property property">params</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                <span class="token string-property property">&#39;FORMAT&#39;</span><span class="token operator">:</span> format<span class="token punctuation">,</span>
                <span class="token string-property property">&#39;VERSION&#39;</span><span class="token operator">:</span> <span class="token string">&#39;1.1.1&#39;</span><span class="token punctuation">,</span>             <span class="token comment">//很重要！！！！！！</span>
                <span class="token string-property property">&quot;exceptions&quot;</span><span class="token operator">:</span> <span class="token string">&#39;application/vnd.ogc.se_inimage&#39;</span><span class="token punctuation">,</span>
                <span class="token string-property property">&quot;LAYERS&quot;</span><span class="token operator">:</span> <span class="token string">&#39;test:3702110101&#39;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">]</span><span class="token punctuation">;</span>

</code></pre></div><p>openlayers加载WMS格式总的来说有两种方式：ol.layer.Image+ol.source.ImageWMS和ol.layer.Tile+ol.source+TileWMS</p><p>这两种方式加载都需要设定bounds（bbox）和projection。</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code> <span class="token keyword">var</span> layer <span class="token operator">=</span> <span class="token punctuation">[</span>
   <span class="token keyword">new</span> <span class="token class-name">ol<span class="token punctuation">.</span>layer<span class="token punctuation">.</span>Tile</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">extent</span><span class="token operator">:</span><span class="token punctuation">[</span>
     <span class="token number">73.49896240234375</span><span class="token punctuation">,</span>
     <span class="token number">3.833843469619751</span><span class="token punctuation">,</span>
     <span class="token number">135.08738708496094</span><span class="token punctuation">,</span>
     <span class="token number">53.55849838256836</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token literal-property property">source</span><span class="token operator">:</span> <span class="token keyword">new</span> <span class="token class-name">ol<span class="token punctuation">.</span>source<span class="token punctuation">.</span>TileWMS</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
     <span class="token literal-property property">url</span><span class="token operator">:</span><span class="token string">&#39;http://localhost:8080/geoserver/chinamap/wms&#39;</span><span class="token punctuation">,</span>
     <span class="token literal-property property">params</span><span class="token operator">:</span><span class="token punctuation">{</span>
      <span class="token constant">LAYERS</span><span class="token operator">:</span><span class="token string">&#39;chinamap:china&#39;</span><span class="token punctuation">,</span>
      <span class="token constant">TILED</span><span class="token operator">:</span><span class="token boolean">true</span>
     <span class="token punctuation">}</span><span class="token punctuation">,</span>
     <span class="token literal-property property">serverType</span><span class="token operator">:</span><span class="token string">&#39;geoserver&#39;</span><span class="token punctuation">,</span>
     <span class="token literal-property property">transition</span><span class="token operator">:</span> <span class="token number">0</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
   <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token punctuation">]</span>
 
</code></pre></div><h3 id="加载imagewms之worldimage" tabindex="-1"><a class="header-anchor" href="#加载imagewms之worldimage" aria-hidden="true">#</a> 加载ImageWMS之WorldImage</h3><p>这里使用的是geoserver上发布存储类型为WorldImage，样式为raster</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 调用geoserver的服务http://localhost:8080/geoserver/nurc/wms</span>
 
 
<span class="token keyword">new</span> <span class="token class-name">Map</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">target</span><span class="token operator">:</span> <span class="token string">&#39;map-container&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">layers</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token keyword">new</span> <span class="token class-name">Image</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      <span class="token literal-property property">source</span><span class="token operator">:</span> <span class="token keyword">new</span> <span class="token class-name">ImageWMS</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
        <span class="token literal-property property">url</span><span class="token operator">:</span> <span class="token string">&#39;http://localhost:8080/geoserver/nurc/wms&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">params</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token string-property property">&#39;layers&#39;</span><span class="token operator">:</span> <span class="token string">&#39;nurc:Img_Sample&#39;</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token literal-property property">view</span><span class="token operator">:</span> <span class="token keyword">new</span> <span class="token class-name">View</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">center</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token literal-property property">zoom</span><span class="token operator">:</span> <span class="token number">3</span><span class="token punctuation">,</span>
    <span class="token literal-property property">projection</span><span class="token operator">:</span> <span class="token string">&#39;EPSG:4326&#39;</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
 


 <span class="token literal-property property">layers</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token keyword">new</span> <span class="token class-name">Image</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      <span class="token literal-property property">source</span><span class="token operator">:</span> <span class="token keyword">new</span> <span class="token class-name">ImageWMS</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
        <span class="token literal-property property">url</span><span class="token operator">:</span> <span class="token string">&#39;http://localhost:8080/geoserver/nurc/wms&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">params</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token string-property property">&#39;layers&#39;</span><span class="token operator">:</span> <span class="token string">&#39;nurc:Arc_Sample&#39;</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span> 
</code></pre></div><h3 id="tilewms" tabindex="-1"><a class="header-anchor" href="#tilewms" aria-hidden="true">#</a> TileWMS</h3><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code> <span class="token literal-property property">layers</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token keyword">new</span> <span class="token class-name">Tile</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      <span class="token literal-property property">source</span><span class="token operator">:</span> <span class="token keyword">new</span> <span class="token class-name">TileWMS</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
        <span class="token literal-property property">url</span><span class="token operator">:</span> <span class="token string">&#39;http://localhost:8080/geoserver/tiger/wms&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">params</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token string-property property">&#39;FORMAT&#39;</span><span class="token operator">:</span> <span class="token string">&#39;image/png&#39;</span><span class="token punctuation">,</span>
          <span class="token string-property property">&#39;VERSION&#39;</span><span class="token operator">:</span> <span class="token string">&#39;1.1.1&#39;</span><span class="token punctuation">,</span>
          <span class="token literal-property property">tiled</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
          <span class="token constant">STYLES</span><span class="token operator">:</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">,</span>
          <span class="token constant">LAYERS</span><span class="token operator">:</span> <span class="token string">&#39;tiger:poi&#39;</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
</code></pre></div><h3 id="叠加图层" tabindex="-1"><a class="header-anchor" href="#叠加图层" aria-hidden="true">#</a> 叠加图层</h3><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> lowmap <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Tile</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">source</span><span class="token operator">:</span> <span class="token keyword">new</span> <span class="token class-name">TileWMS</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">url</span><span class="token operator">:</span> <span class="token string">&#39;http://localhost:8080/geoserver/tiger/wms&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">params</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token string-property property">&#39;FORMAT&#39;</span><span class="token operator">:</span> <span class="token string">&#39;image/png&#39;</span><span class="token punctuation">,</span>
      <span class="token string-property property">&#39;VERSION&#39;</span><span class="token operator">:</span> <span class="token string">&#39;1.1.1&#39;</span><span class="token punctuation">,</span>
      <span class="token literal-property property">tiled</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
      <span class="token constant">STYLES</span><span class="token operator">:</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">,</span>
      <span class="token constant">LAYERS</span><span class="token operator">:</span> <span class="token string">&#39;tiger:poly_landmarks&#39;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> upmap <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Tile</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">source</span><span class="token operator">:</span> <span class="token keyword">new</span> <span class="token class-name">TileWMS</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">url</span><span class="token operator">:</span> <span class="token string">&#39;http://localhost:8080/geoserver/tiger/wms&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">params</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token string-property property">&#39;FORMAT&#39;</span><span class="token operator">:</span> <span class="token string">&#39;image/png&#39;</span><span class="token punctuation">,</span>
      <span class="token string-property property">&#39;VERSION&#39;</span><span class="token operator">:</span> <span class="token string">&#39;1.1.1&#39;</span><span class="token punctuation">,</span>
      <span class="token literal-property property">tiled</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
      <span class="token constant">STYLES</span><span class="token operator">:</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">,</span>
      <span class="token constant">LAYERS</span><span class="token operator">:</span> <span class="token string">&#39;tiger:tiger_roads&#39;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span> 
</code></pre></div><h3 id="关于wms有两种加载方式" tabindex="-1"><a class="header-anchor" href="#关于wms有两种加载方式" aria-hidden="true">#</a> 关于WMS有两种加载方式</h3><p>方式一、ol.layer.Image+ol.source.ImageWMS</p><p>方式二、ol.layer.Tile+ol.source+TileWMS</p><p>通用的模式都是：至于使用ImageWMS，还是TileWMS，对应换掉layer和source就行。</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> bounds <span class="token operator">=</span> <span class="token punctuation">[</span>最小 <span class="token constant">X</span><span class="token punctuation">,</span>最小 <span class="token constant">Y</span><span class="token punctuation">,</span>最大 <span class="token constant">X</span><span class="token punctuation">,</span>最大 <span class="token constant">Y</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> projection <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Projection</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">code</span><span class="token operator">:</span> <span class="token string">&#39;EPSG:4326&#39;</span><span class="token punctuation">,</span><span class="token comment">/*  坐标系*/</span>
  <span class="token literal-property property">units</span><span class="token operator">:</span> <span class="token string">&#39;m&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">axisOrientation</span><span class="token operator">:</span> <span class="token string">&#39;neu&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">global</span><span class="token operator">:</span> <span class="token boolean">false</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> map <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Map</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">target</span><span class="token operator">:</span> <span class="token string">&#39;map-container&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">layers</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token keyword">new</span> <span class="token class-name">Tile</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      <span class="token literal-property property">source</span><span class="token operator">:</span> <span class="token keyword">new</span> <span class="token class-name">TileWMS</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
        <span class="token literal-property property">url</span><span class="token operator">:</span> <span class="token string">&#39;http://localhost:8080/geoserver/nurc/wms&#39;</span><span class="token punctuation">,</span><span class="token comment">//服务发布的地址</span>
        <span class="token literal-property property">params</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token string-property property">&#39;FORMAT&#39;</span><span class="token operator">:</span> <span class="token string">&#39;image/png&#39;</span><span class="token punctuation">,</span>
          <span class="token string-property property">&#39;VERSION&#39;</span><span class="token operator">:</span> <span class="token string">&#39;1.1.1&#39;</span><span class="token punctuation">,</span>
          <span class="token literal-property property">tiled</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
          <span class="token constant">STYLES</span><span class="token operator">:</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">,</span>
          <span class="token constant">LAYERS</span><span class="token operator">:</span> <span class="token string">&#39;nurc:Img_Sample&#39;</span> <span class="token comment">//服务发布的图层名称</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token literal-property property">view</span><span class="token operator">:</span> <span class="token keyword">new</span> <span class="token class-name">View</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">projection</span><span class="token operator">:</span> projection
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
map<span class="token punctuation">.</span><span class="token function">getView</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">fit</span><span class="token punctuation">(</span>bounds<span class="token punctuation">,</span> map<span class="token punctuation">.</span><span class="token function">getSize</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//加入边界值，计算中心点</span>
 
</code></pre></div><h3 id="加载tiff" tabindex="-1"><a class="header-anchor" href="#加载tiff" aria-hidden="true">#</a> 加载TIFF</h3><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">import</span> GeoTIFF <span class="token keyword">from</span> <span class="token string">&#39;ol/source/GeoTIFF.js&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> Map <span class="token keyword">from</span> <span class="token string">&#39;ol/Map.js&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> TileLayer <span class="token keyword">from</span> <span class="token string">&#39;ol/layer/WebGLTile.js&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> View <span class="token keyword">from</span> <span class="token string">&#39;ol/View.js&#39;</span><span class="token punctuation">;</span>
 

<span class="token keyword">const</span> layer <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">TileLayer</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">style</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">variables</span><span class="token operator">:</span> <span class="token function">getVariables</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token literal-property property">color</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token string">&#39;array&#39;</span><span class="token punctuation">,</span>
      <span class="token punctuation">[</span><span class="token string">&#39;/&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token string">&#39;band&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token string">&#39;var&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;red&#39;</span><span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token string">&#39;var&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;redMax&#39;</span><span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token punctuation">[</span><span class="token string">&#39;/&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token string">&#39;band&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token string">&#39;var&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;green&#39;</span><span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token string">&#39;var&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;greenMax&#39;</span><span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token punctuation">[</span><span class="token string">&#39;/&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token string">&#39;band&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token string">&#39;var&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;blue&#39;</span><span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token string">&#39;var&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;blueMax&#39;</span><span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token number">1</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">source</span><span class="token operator">:</span> <span class="token keyword">new</span> <span class="token class-name">GeoTIFF</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">normalize</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
    <span class="token literal-property property">sources</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">url</span><span class="token operator">:</span> <span class="token string">&#39;https://s2downloads.eox.at/demo/EOxCloudless/2020/rgbnir/s2cloudless2020-16bits_sinlge-file_z0-4.tif&#39;</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div>`,18),e=[o];function c(l,r){return s(),a("div",null,e)}const u=n(t,[["render",c],["__file","ol_geoserver.html.vue"]]);export{u as default};
