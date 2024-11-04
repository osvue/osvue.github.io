import{_ as n,p as s,q as a,a1 as p}from"./framework-d81ad7e5.js";const t={},o=p(`<h3 id="不同分辨率显示不同图层" tabindex="-1"><a class="header-anchor" href="#不同分辨率显示不同图层" aria-hidden="true">#</a> 不同分辨率显示不同图层</h3><ul><li>在限制的范围之内时显示图层，在限制的范围之外时不显示图层</li><li>只有当指定图层在 minResolution 和 maxResolution 范围内，才显示。</li></ul><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code>
<span class="token keyword">function</span> <span class="token function">initMap</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  map<span class="token punctuation">.</span>value <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Map</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">target</span><span class="token operator">:</span> <span class="token string">&#39;map&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">layers</span><span class="token operator">:</span> <span class="token punctuation">[</span>

      <span class="token keyword">new</span> <span class="token class-name">Tile</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
        <span class="token literal-property property">source</span><span class="token operator">:</span> <span class="token keyword">new</span> <span class="token class-name">XYZ</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
          <span class="token literal-property property">url</span><span class="token operator">:</span> <span class="token string">&#39;http://wprd0{1-4}.is.autonavi.com/appmaptile?lang=zh_cn&amp;size=1&amp;style=7&amp;x={x}&amp;y={y}&amp;z={z}&#39;</span><span class="token punctuation">,</span>

        <span class="token punctuation">}</span><span class="token punctuation">)</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
      <span class="token keyword">new</span> <span class="token class-name">Tile</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
        <span class="token literal-property property">source</span><span class="token operator">:</span> <span class="token keyword">new</span> <span class="token class-name">XYZ</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
          <span class="token literal-property property">url</span><span class="token operator">:</span> <span class="token string">&#39;https://server.arcgisonline.com/arcgis/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}.png&#39;</span><span class="token punctuation">,</span>
        
        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>

        <span class="token comment">// 当图层在 2000 至 20000 时显示</span>
        <span class="token literal-property property">minResolution</span><span class="token operator">:</span> <span class="token number">2000</span><span class="token punctuation">,</span>
        <span class="token literal-property property">maxResolution</span><span class="token operator">:</span> <span class="token number">20000</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token literal-property property">view</span><span class="token operator">:</span> <span class="token keyword">new</span> <span class="token class-name">View</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      <span class="token literal-property property">center</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">653600</span><span class="token punctuation">,</span> <span class="token number">5723680</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token literal-property property">zoom</span><span class="token operator">:</span> <span class="token number">5</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

</code></pre></div><h3 id="不同区域显示不同图层" tabindex="-1"><a class="header-anchor" href="#不同区域显示不同图层" aria-hidden="true">#</a> 不同区域显示不同图层</h3><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code>
<span class="token keyword">const</span> overlay <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">)</span>

<span class="token keyword">const</span> area <span class="token operator">=</span> <span class="token function">reactive</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">India</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">68.17665</span><span class="token punctuation">,</span> <span class="token number">7.96553</span><span class="token punctuation">,</span> <span class="token number">97.40256</span><span class="token punctuation">,</span> <span class="token number">35.49401</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token literal-property property">Argentina</span><span class="token operator">:</span><span class="token punctuation">[</span><span class="token operator">-</span><span class="token number">73.41544</span><span class="token punctuation">,</span> <span class="token operator">-</span><span class="token number">55.25</span><span class="token punctuation">,</span> <span class="token operator">-</span><span class="token number">53.62835</span><span class="token punctuation">,</span> <span class="token operator">-</span><span class="token number">21.83231</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token literal-property property">Nigeria</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">2.6917</span><span class="token punctuation">,</span> <span class="token number">4.24059</span><span class="token punctuation">,</span> <span class="token number">14.57718</span><span class="token punctuation">,</span> <span class="token number">13.86592</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token literal-property property">Sweden</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">11.02737</span><span class="token punctuation">,</span> <span class="token number">55.36174</span><span class="token punctuation">,</span> <span class="token number">23.90338</span><span class="token punctuation">,</span> <span class="token number">69.10625</span><span class="token punctuation">]</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token keyword">function</span> <span class="token function">initMap</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  overlay<span class="token punctuation">.</span>value <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Tile</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">extent</span><span class="token operator">:</span> area<span class="token punctuation">.</span>India<span class="token punctuation">,</span>
    <span class="token literal-property property">preload</span><span class="token operator">:</span> <span class="token number">Infinity</span><span class="token punctuation">,</span> <span class="token comment">// 预加载</span>
        <span class="token literal-property property">source</span><span class="token operator">:</span> <span class="token keyword">new</span> <span class="token class-name">XYZ</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
          <span class="token literal-property property">url</span><span class="token operator">:</span> <span class="token string">&#39;http://wprd0{1-4}.is.autonavi.com/appmaptile?lang=zh_cn&amp;size=1&amp;style=7&amp;x={x}&amp;y={y}&amp;z={z}&#39;</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>

   
  map<span class="token punctuation">.</span>value <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Map</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">target</span><span class="token operator">:</span> <span class="token string">&#39;map&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">layers</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token keyword">new</span> <span class="token class-name">Tile</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
        <span class="token literal-property property">source</span><span class="token operator">:</span> <span class="token keyword">new</span> <span class="token class-name">TileJSON</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
          <span class="token literal-property property">url</span><span class="token operator">:</span> <span class="token string">&#39;https://maps.gnosis.earth/ogcapi/collections/NaturalEarth:raster:HYP_HR_SR_OB_DR/map/tiles/WebMercatorQuad?f=tilejson&#39;</span><span class="token punctuation">,</span>
          <span class="token literal-property property">crossOrigin</span><span class="token operator">:</span> <span class="token string">&#39;anonymous&#39;</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span> 
      <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
      overlay<span class="token punctuation">.</span>value
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token literal-property property">view</span><span class="token operator">:</span> <span class="token keyword">new</span> <span class="token class-name">View</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      <span class="token literal-property property">projection</span><span class="token operator">:</span> <span class="token string">&quot;EPSG:4326&quot;</span><span class="token punctuation">,</span>
      <span class="token literal-property property">center</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token literal-property property">zoom</span><span class="token operator">:</span> <span class="token number">1</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
<span class="token doc-comment comment">/**
 * 触发函数
 */</span>
<span class="token keyword">function</span> <span class="token function">replaceTheRegion</span><span class="token punctuation">(</span><span class="token parameter">data</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  overlay<span class="token punctuation">.</span>value<span class="token punctuation">.</span><span class="token function">setExtent</span><span class="token punctuation">(</span>area<span class="token punctuation">[</span>data<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token comment">// 设置要显示的区域</span>
<span class="token punctuation">}</span>

</code></pre></div><h3 id="markeruse" tabindex="-1"><a class="header-anchor" href="#markeruse" aria-hidden="true">#</a> markerUse</h3><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code>
<span class="token comment">// 创建图标特性</span>
<span class="token keyword">let</span> iconFeature <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Feature</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">geometry</span><span class="token operator">:</span> <span class="token keyword">new</span> <span class="token class-name">Point</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">100</span><span class="token punctuation">,</span> <span class="token number">36</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token comment">// 图标展示的位置</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;你点我了&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">population</span><span class="token operator">:</span> <span class="token number">4000</span><span class="token punctuation">,</span>
  <span class="token literal-property property">rainfall</span><span class="token operator">:</span> <span class="token number">500</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token comment">// 创建图标样式</span>
<span class="token keyword">let</span> iconStyle <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">style<span class="token punctuation">.</span>Style</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">image</span><span class="token operator">:</span> <span class="token keyword">new</span> <span class="token class-name">style<span class="token punctuation">.</span>Icon</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token comment">// 定义图标锚点</span>
    <span class="token literal-property property">anchor</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">0.5</span><span class="token punctuation">,</span> <span class="token number">46</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token comment">// 根据图标的大小，对应上面 [0, 0] 的坐标</span>
    <span class="token literal-property property">anchorXUnits</span><span class="token operator">:</span> <span class="token string">&#39;fraction&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">anchorYUnits</span><span class="token operator">:</span> <span class="token string">&#39;pixels&#39;</span><span class="token punctuation">,</span>
    <span class="token comment">// 图标所使用的图片文件</span>
    <span class="token comment">// src: require(&#39;../../assets/images/icon.png&#39;)</span>
    <span class="token comment">// 或者</span>
    <span class="token literal-property property">src</span><span class="token operator">:</span> iconPng
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
           



<span class="token comment">// 把样式应用到图标上</span>
iconFeature<span class="token punctuation">.</span><span class="token function">setStyle</span><span class="token punctuation">(</span>iconStyle<span class="token punctuation">)</span>

<span class="token comment">// 创建矢量容器，将图标特性添加进容器中</span>
<span class="token keyword">let</span> vectorSource <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">sourceVector</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">features</span><span class="token operator">:</span> <span class="token punctuation">[</span>iconFeature<span class="token punctuation">]</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token comment">// 创建矢量图层</span>
<span class="token keyword">let</span> vectorLayer <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">layerVecor</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">source</span><span class="token operator">:</span> vectorSource
<span class="token punctuation">}</span><span class="token punctuation">)</span>
map<span class="token punctuation">.</span><span class="token function">addLayer</span><span class="token punctuation">(</span>vectorLayer<span class="token punctuation">)</span>
</code></pre></div>`,7),e=[o];function c(l,r){return s(),a("div",null,e)}const k=n(t,[["render",c],["__file","useDev.html.vue"]]);export{k as default};
