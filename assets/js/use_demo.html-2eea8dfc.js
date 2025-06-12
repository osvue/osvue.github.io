import{_ as s,o as a,c as p,a as t}from"./app-215c512d.js";const o={};function e(c,n){return a(),p("div",null,n[0]||(n[0]=[t(`<div class="language-vue" data-ext="vue"><pre class="language-vue"><code><span class="token comment">&lt;!-- 人工草地 --&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>full_view<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
  

    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>popup<span class="token punctuation">&quot;</span></span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>ol-popup<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>#<span class="token punctuation">&quot;</span></span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>popup-closer<span class="token punctuation">&quot;</span></span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>ol-popup-closer<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>popup-content<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
      
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>el-row</span> <span class="token attr-name">justify</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>end<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>el-col</span> <span class="token attr-name">:span</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>10<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>el-button</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>primary<span class="token punctuation">&quot;</span></span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>catGrazingInfo()<span class="token punctuation">&quot;</span></span> <span class="token attr-name">plain</span>
              <span class="token punctuation">&gt;</span></span>查看详情<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>el-button</span>
            <span class="token punctuation">&gt;</span></span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>el-col</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>el-row</span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>bottom_time<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
      <span class="token comment">&lt;!-- 添加图层开关控制 --&gt;</span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>layer-control<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>el-switch</span>
          <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>grassLayerVisible<span class="token punctuation">&quot;</span></span>
          <span class="token attr-name">active-text</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>草地图层<span class="token punctuation">&quot;</span></span>
          <span class="token attr-name">inactive-text</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>农场图层<span class="token punctuation">&quot;</span></span>
          <span class="token attr-name">@change</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>toggleGrassLayer<span class="token punctuation">&quot;</span></span>
          <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>layer-switch<span class="token punctuation">&quot;</span></span>
        <span class="token punctuation">/&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
   
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span>  <span class="token attr-name">setup</span> <span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> <span class="token punctuation">{</span> ref<span class="token punctuation">,</span> onMounted<span class="token punctuation">,</span> reactive<span class="token punctuation">,</span> defineAsyncComponent<span class="token punctuation">,</span> nextTick <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;vue&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> Close <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;@element-plus/icons-vue&quot;</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> Overlay <span class="token keyword">from</span> <span class="token string">&quot;ol/Overlay.js&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> toLonLat <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;ol/proj.js&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> toStringHDMS <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;ol/coordinate.js&quot;</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token punctuation">{</span> Vector <span class="token keyword">as</span> VectorSource <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;ol/source.js&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> Tile <span class="token keyword">as</span> TileLayer<span class="token punctuation">,</span> Vector <span class="token keyword">as</span> VectorLayer <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;ol/layer.js&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> Fill<span class="token punctuation">,</span> Stroke<span class="token punctuation">,</span> Style<span class="token punctuation">,</span> Text<span class="token punctuation">,</span> Icon<span class="token punctuation">,</span> Circle <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;ol/style&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> Map<span class="token punctuation">,</span> View <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;ol&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> Tile <span class="token keyword">from</span> <span class="token string">&quot;ol/layer/Tile&quot;</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token constant">XYZ</span> <span class="token keyword">from</span> <span class="token string">&quot;ol/source/XYZ&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token string">&quot;ol/ol.css&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> Feature <span class="token keyword">from</span> <span class="token string">&quot;ol/Feature&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> GeoJSON <span class="token keyword">from</span> <span class="token string">&quot;ol/format/GeoJSON&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> getRenderPixel <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;ol/render.js&quot;</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> Select <span class="token keyword">from</span> <span class="token string">&quot;ol/interaction/Select&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> click<span class="token punctuation">,</span> pointerMove <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;ol/events/condition&quot;</span><span class="token punctuation">;</span> 
<span class="token keyword">import</span> <span class="token punctuation">{</span> ScaleLine<span class="token punctuation">,</span> defaults <span class="token keyword">as</span> defaultControls <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;ol/control&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> TimeLineCom <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;@/components/timeLine&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> axios <span class="token keyword">from</span> <span class="token string">&quot;axios&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token string">&quot;ol-ext/dist/ol-ext.css&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> useRouter<span class="token punctuation">,</span> useRoute <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;vue-router&quot;</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token punctuation">{</span> renderMaker<span class="token punctuation">,</span>renderMakerCustom<span class="token punctuation">,</span> cameraCenter <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;@/utils/olutil.js&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> glCfg <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;@/stores/mock.js&quot;</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token punctuation">{</span> queryRes<span class="token punctuation">,</span> queryArea <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;@/api/grass.js&quot;</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token punctuation">{</span> queryBasicInfoList <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;@/api/basic.js&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> Group <span class="token keyword">as</span> LayerGroup <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;ol/layer&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> TileWMS <span class="token keyword">from</span> <span class="token string">&#39;ol/source/TileWMS&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> ImageWMS <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;ol/source.js&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> Image <span class="token keyword">as</span> ImageLayer <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;ol/layer.js&#39;</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token punctuation">{</span> 
  createFarmBoundaryLayer<span class="token punctuation">,</span> 
  createBasicInfoLayer<span class="token punctuation">,</span> 
  createMarkerLayer<span class="token punctuation">,</span>
  createClickHandler<span class="token punctuation">,</span>
  createPopupCloser<span class="token punctuation">,</span>
  <span class="token constant">LAYER_NAMES</span>
<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@/utils/mapLayers.js&#39;</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> router <span class="token operator">=</span> <span class="token function">useRouter</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 它只会按需加载</span>
<span class="token comment">//（即该异步组件在页面中被渲染时）</span>
<span class="token keyword">const</span> repari <span class="token operator">=</span> <span class="token function">defineAsyncComponent</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span>
  <span class="token keyword">import</span><span class="token punctuation">(</span><span class="token string">&quot;@/components/card/chart/repari.vue&quot;</span><span class="token punctuation">)</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> map <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> twoNum <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">var</span> glMap<span class="token punctuation">;</span>
<span class="token keyword">var</span> globalClearLayer<span class="token punctuation">;</span>
<span class="token keyword">let</span> actvidx <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">let</span> compare <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">let</span> catPannel <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">var</span> vectorSourceTimeLine<span class="token punctuation">;</span>
<span class="token keyword">var</span> globalTimer<span class="token punctuation">;</span>
<span class="token keyword">let</span> grazingDataArr <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">let</span> superSeedArr <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">let</span> capacityArr <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">var</span> overlay<span class="token punctuation">;</span>
<span class="token keyword">const</span> <span class="token function-variable function">getImg</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">item <span class="token operator">=</span> <span class="token number">1</span></span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>glCfg<span class="token punctuation">.</span>viewpic<span class="token punctuation">.</span>scollImg<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">/grass_pic/</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>item<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">.png</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token comment">// 添加图层显示状态控制</span>
<span class="token keyword">const</span> grassLayerVisible <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> farmLayerVisible <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 默认显示农场图层</span>

<span class="token comment">// 添加图层组相关变量</span>
<span class="token keyword">let</span> layerGroup <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
<span class="token keyword">let</span> grassLayer <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
<span class="token keyword">let</span> lineLayer <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span> <span class="token comment">// 添加农场图层变量声明</span>
<span class="token keyword">let</span> maskSource <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
<span class="token keyword">let</span> geoJsonLayer <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>

<span class="token doc-comment comment">/**
 * 创建掩膜图层组
 * 包含：
 * 1. 草地图层（WMS服务）
 * 2. GeoJSON边界图层（带标签和样式）
 * 3. 掩膜图层（用于裁剪）
 */</span>
<span class="token keyword">const</span> <span class="token function-variable function">createMaskedLayerGroup</span> <span class="token operator">=</span> <span class="token keyword">async</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">try</span> <span class="token punctuation">{</span>
    <span class="token comment">// 使用 useGeoJsonPolygon 获取所有农牧场数据</span>
    <span class="token keyword">const</span> <span class="token punctuation">{</span> tzgeojson <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">useGeoJsonPolygon</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">const</span> features <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">GeoJSON</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">featureProjection</span><span class="token operator">:</span> <span class="token string">&quot;EPSG:4326&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">readFeatures</span><span class="token punctuation">(</span>tzgeojson<span class="token punctuation">)</span><span class="token punctuation">;</span>
    
    <span class="token comment">// 找到谢尔塔拉农牧场的要素作为掩膜</span>
    <span class="token keyword">const</span> xieertalaFeature <span class="token operator">=</span> features<span class="token punctuation">.</span><span class="token function">find</span><span class="token punctuation">(</span><span class="token parameter">feature</span> <span class="token operator">=&gt;</span> feature<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">&#39;name&#39;</span><span class="token punctuation">)</span> <span class="token operator">===</span> <span class="token string">&#39;谢尔塔拉农牧场&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>xieertalaFeature<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      console<span class="token punctuation">.</span><span class="token function">error</span><span class="token punctuation">(</span><span class="token string">&#39;未找到谢尔塔拉农牧场边界数据&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token keyword">return</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">// 创建掩膜源</span>
    <span class="token keyword">const</span> maskSource <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">VectorSource</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      <span class="token literal-property property">features</span><span class="token operator">:</span> <span class="token punctuation">[</span>xieertalaFeature<span class="token punctuation">]</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">// 创建 GeoJSON 边界图层</span>
    <span class="token keyword">const</span> geoJsonLayer <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">VectorLayer</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;farmBoundaryGeoJson&#39;</span><span class="token punctuation">,</span>
      <span class="token literal-property property">source</span><span class="token operator">:</span> <span class="token keyword">new</span> <span class="token class-name">VectorSource</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
        <span class="token literal-property property">features</span><span class="token operator">:</span> features
      <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
      <span class="token function-variable function">style</span><span class="token operator">:</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">feature</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// 根据农场名称设置不同的颜色</span>
        <span class="token keyword">const</span> farmName <span class="token operator">=</span> feature<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">&#39;name&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">let</span> fillColor<span class="token punctuation">,</span> strokeColor<span class="token punctuation">,</span> labelColor<span class="token punctuation">;</span>
        
        <span class="token comment">// 根据农场名称设置不同的样式</span>
        <span class="token keyword">switch</span><span class="token punctuation">(</span>farmName<span class="token punctuation">)</span> <span class="token punctuation">{</span>
          <span class="token keyword">case</span> <span class="token string">&#39;谢尔塔拉农牧场&#39;</span><span class="token operator">:</span>
            fillColor <span class="token operator">=</span> <span class="token string">&#39;rgba(255, 0, 0, 0.1)&#39;</span><span class="token punctuation">;</span>    <span class="token comment">// 浅红色</span>
            strokeColor <span class="token operator">=</span> <span class="token string">&#39;#ff0000&#39;</span><span class="token punctuation">;</span>               <span class="token comment">// 红色边框</span>
            labelColor <span class="token operator">=</span> <span class="token string">&#39;#ff0000&#39;</span><span class="token punctuation">;</span>                <span class="token comment">// 红色标签</span>
            <span class="token keyword">break</span><span class="token punctuation">;</span>
          <span class="token keyword">case</span> <span class="token string">&#39;特泥河农牧场&#39;</span><span class="token operator">:</span>
            fillColor <span class="token operator">=</span> <span class="token string">&#39;rgba(0, 255, 0, 0.1)&#39;</span><span class="token punctuation">;</span>    <span class="token comment">// 浅绿色</span>
            strokeColor <span class="token operator">=</span> <span class="token string">&#39;#00ff00&#39;</span><span class="token punctuation">;</span>               <span class="token comment">// 绿色边框</span>
            labelColor <span class="token operator">=</span> <span class="token string">&#39;#00ff00&#39;</span><span class="token punctuation">;</span>                <span class="token comment">// 绿色标签</span>
            <span class="token keyword">break</span><span class="token punctuation">;</span>
          <span class="token keyword">case</span> <span class="token string">&#39;哈达图农牧场&#39;</span><span class="token operator">:</span>
            fillColor <span class="token operator">=</span> <span class="token string">&#39;rgba(0, 0, 255, 0.1)&#39;</span><span class="token punctuation">;</span>    <span class="token comment">// 浅蓝色</span>
            strokeColor <span class="token operator">=</span> <span class="token string">&#39;#0000ff&#39;</span><span class="token punctuation">;</span>               <span class="token comment">// 蓝色边框</span>
            labelColor <span class="token operator">=</span> <span class="token string">&#39;#0000ff&#39;</span><span class="token punctuation">;</span>                <span class="token comment">// 蓝色标签</span>
            <span class="token keyword">break</span><span class="token punctuation">;</span>
          <span class="token keyword">default</span><span class="token operator">:</span>
            fillColor <span class="token operator">=</span> <span class="token string">&#39;rgba(128, 128, 128, 0.1)&#39;</span><span class="token punctuation">;</span> <span class="token comment">// 浅灰色</span>
            strokeColor <span class="token operator">=</span> <span class="token string">&#39;#808080&#39;</span><span class="token punctuation">;</span>                <span class="token comment">// 灰色边框</span>
            labelColor <span class="token operator">=</span> <span class="token string">&#39;#808080&#39;</span><span class="token punctuation">;</span>                 <span class="token comment">// 灰色标签</span>
        <span class="token punctuation">}</span>

        <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">Style</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
          <span class="token comment">// 填充样式</span>
          <span class="token literal-property property">fill</span><span class="token operator">:</span> <span class="token keyword">new</span> <span class="token class-name">Fill</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
            <span class="token literal-property property">color</span><span class="token operator">:</span> fillColor
          <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
          <span class="token comment">// 边框样式</span>
          <span class="token literal-property property">stroke</span><span class="token operator">:</span> <span class="token keyword">new</span> <span class="token class-name">Stroke</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
            <span class="token literal-property property">color</span><span class="token operator">:</span> strokeColor<span class="token punctuation">,</span>
            <span class="token literal-property property">width</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
            <span class="token literal-property property">lineDash</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">]</span>  <span class="token comment">// 虚线边框</span>
          <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
          <span class="token comment">// 文本样式</span>
          <span class="token literal-property property">text</span><span class="token operator">:</span> <span class="token keyword">new</span> <span class="token class-name">Text</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
            <span class="token literal-property property">text</span><span class="token operator">:</span> farmName<span class="token punctuation">,</span>
            <span class="token literal-property property">font</span><span class="token operator">:</span> <span class="token string">&#39;bold 14px 微软雅黑&#39;</span><span class="token punctuation">,</span>
            <span class="token literal-property property">fill</span><span class="token operator">:</span> <span class="token keyword">new</span> <span class="token class-name">Fill</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
              <span class="token literal-property property">color</span><span class="token operator">:</span> labelColor
            <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
            <span class="token literal-property property">stroke</span><span class="token operator">:</span> <span class="token keyword">new</span> <span class="token class-name">Stroke</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
              <span class="token literal-property property">color</span><span class="token operator">:</span> <span class="token string">&#39;#ffffff&#39;</span><span class="token punctuation">,</span>
              <span class="token literal-property property">width</span><span class="token operator">:</span> <span class="token number">3</span>
            <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
            <span class="token literal-property property">offsetY</span><span class="token operator">:</span> <span class="token operator">-</span><span class="token number">10</span><span class="token punctuation">,</span>  <span class="token comment">// 文本向上偏移</span>
            <span class="token literal-property property">textAlign</span><span class="token operator">:</span> <span class="token string">&#39;center&#39;</span><span class="token punctuation">,</span>
            <span class="token literal-property property">textBaseline</span><span class="token operator">:</span> <span class="token string">&#39;middle&#39;</span>
          <span class="token punctuation">}</span><span class="token punctuation">)</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token literal-property property">zIndex</span><span class="token operator">:</span> <span class="token number">20</span>  <span class="token comment">// 确保显示在草地图层之上</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">// 创建草地图层</span>
    <span class="token keyword">const</span> grassLayer <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">TileLayer</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      <span class="token literal-property property">source</span><span class="token operator">:</span> <span class="token keyword">new</span> <span class="token class-name">TileWMS</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
        <span class="token literal-property property">url</span><span class="token operator">:</span> <span class="token string">&#39;http://159.226.85.199:8090/geoserver/CMY2024/wms&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">params</span><span class="token operator">:</span> <span class="token punctuation">{</span> 
          <span class="token constant">LAYERS</span><span class="token operator">:</span> <span class="token string">&#39;CMY2024:caodif_raste1&#39;</span><span class="token punctuation">,</span> 
          <span class="token constant">TILED</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
          <span class="token constant">VERSION</span><span class="token operator">:</span> <span class="token string">&#39;1.1.1&#39;</span><span class="token punctuation">,</span>
          <span class="token constant">FORMAT</span><span class="token operator">:</span> <span class="token string">&#39;image/png&#39;</span><span class="token punctuation">,</span>
          <span class="token constant">TRANSPARENT</span><span class="token operator">:</span> <span class="token boolean">true</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token literal-property property">serverType</span><span class="token operator">:</span> <span class="token string">&#39;geoserver&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">transition</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
        <span class="token literal-property property">crossOrigin</span><span class="token operator">:</span> <span class="token string">&#39;anonymous&#39;</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
      <span class="token literal-property property">opacity</span><span class="token operator">:</span> <span class="token number">0.8</span><span class="token punctuation">,</span>
      <span class="token literal-property property">zIndex</span><span class="token operator">:</span> <span class="token number">10</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">// 创建图层组，包含草地图层和GeoJSON图层，使用maskSource作为掩膜</span>
    <span class="token keyword">const</span> layerGroup <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">LayerGroup</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      <span class="token literal-property property">layers</span><span class="token operator">:</span> <span class="token punctuation">[</span>grassLayer<span class="token punctuation">,</span> geoJsonLayer<span class="token punctuation">]</span><span class="token punctuation">,</span>  <span class="token comment">// 添加GeoJSON图层</span>
      <span class="token literal-property property">mask</span><span class="token operator">:</span> maskSource<span class="token punctuation">,</span>
      <span class="token literal-property property">style</span><span class="token operator">:</span> <span class="token keyword">new</span> <span class="token class-name">Style</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
        <span class="token literal-property property">fill</span><span class="token operator">:</span> <span class="token keyword">new</span> <span class="token class-name">Fill</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
          <span class="token literal-property property">color</span><span class="token operator">:</span> <span class="token string">&#39;rgba(255, 0, 0, 0.1)&#39;</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
        <span class="token literal-property property">stroke</span><span class="token operator">:</span> <span class="token keyword">new</span> <span class="token class-name">Stroke</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
          <span class="token literal-property property">color</span><span class="token operator">:</span> <span class="token string">&#39;red&#39;</span><span class="token punctuation">,</span>
          <span class="token literal-property property">width</span><span class="token operator">:</span> <span class="token number">2</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">// 添加图层加载事件监听</span>
    grassLayer<span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span><span class="token string">&#39;change&#39;</span><span class="token punctuation">,</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;草地图层状态变化:&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">visible</span><span class="token operator">:</span> grassLayer<span class="token punctuation">.</span><span class="token function">getVisible</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
        <span class="token literal-property property">opacity</span><span class="token operator">:</span> grassLayer<span class="token punctuation">.</span><span class="token function">getOpacity</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
        <span class="token literal-property property">source</span><span class="token operator">:</span> grassLayer<span class="token punctuation">.</span><span class="token function">getSource</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getState</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">// 添加GeoJSON图层事件监听</span>
    geoJsonLayer<span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span><span class="token string">&#39;change&#39;</span><span class="token punctuation">,</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;GeoJSON图层状态变化:&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">visible</span><span class="token operator">:</span> geoJsonLayer<span class="token punctuation">.</span><span class="token function">getVisible</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
        <span class="token literal-property property">features</span><span class="token operator">:</span> geoJsonLayer<span class="token punctuation">.</span><span class="token function">getSource</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getFeatures</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>length<span class="token punctuation">,</span>
        <span class="token literal-property property">extent</span><span class="token operator">:</span> geoJsonLayer<span class="token punctuation">.</span><span class="token function">getSource</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getExtent</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;成功创建掩膜图层组，包含草地图层和GeoJSON边界图层&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span>
      layerGroup<span class="token punctuation">,</span>
      grassLayer<span class="token punctuation">,</span>
      geoJsonLayer<span class="token punctuation">,</span>  <span class="token comment">// 返回GeoJSON图层引用</span>
      maskSource
    <span class="token punctuation">}</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span>error<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">error</span><span class="token punctuation">(</span><span class="token string">&#39;创建掩膜图层组失败:&#39;</span><span class="token punctuation">,</span> error<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token comment">// 修改图层控制函数，添加GeoJSON图层的控制</span>
<span class="token keyword">const</span> <span class="token function-variable function">toggleGrassLayer</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">visible</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;切换图层可见性:&#39;</span><span class="token punctuation">,</span> visible<span class="token punctuation">)</span><span class="token punctuation">;</span>
  
  <span class="token comment">// 控制草地图层组</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>layerGroup<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    layerGroup<span class="token punctuation">.</span><span class="token function">setVisible</span><span class="token punctuation">(</span>visible<span class="token punctuation">)</span><span class="token punctuation">;</span>
    
    <span class="token comment">// 检查图层状态</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;图层状态:&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">groupVisible</span><span class="token operator">:</span> layerGroup<span class="token punctuation">.</span><span class="token function">getVisible</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
      <span class="token literal-property property">grassLayerVisible</span><span class="token operator">:</span> grassLayer<span class="token operator">?.</span><span class="token function">getVisible</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
      <span class="token literal-property property">geoJsonLayerVisible</span><span class="token operator">:</span> geoJsonLayer<span class="token operator">?.</span><span class="token function">getVisible</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>  <span class="token comment">// 添加GeoJSON图层状态检查</span>
      <span class="token literal-property property">maskSource</span><span class="token operator">:</span> maskSource<span class="token operator">?.</span><span class="token function">getFeatures</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>length<span class="token punctuation">,</span>
      <span class="token literal-property property">maskExtent</span><span class="token operator">:</span> maskSource<span class="token operator">?.</span><span class="token function">getExtent</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
      <span class="token literal-property property">mapExtent</span><span class="token operator">:</span> glMap<span class="token operator">?.</span><span class="token function">getView</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">calculateExtent</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">// 强制刷新图层</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>visible <span class="token operator">&amp;&amp;</span> grassLayer<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      grassLayer<span class="token punctuation">.</span><span class="token function">getSource</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">refresh</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>

  <span class="token comment">// 控制农场图层</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>lineLayer<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    lineLayer<span class="token punctuation">.</span><span class="token function">setVisible</span><span class="token punctuation">(</span><span class="token operator">!</span>visible<span class="token punctuation">)</span><span class="token punctuation">;</span>
    farmLayerVisible<span class="token punctuation">.</span>value <span class="token operator">=</span> <span class="token operator">!</span>visible<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token function">onMounted</span><span class="token punctuation">(</span><span class="token keyword">async</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token doc-comment comment">/**
   * Elements that make up the popup.
   */</span>
  <span class="token keyword">const</span> container <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">&quot;popup&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">const</span> closer <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">&quot;popup-closer&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token doc-comment comment">/**
   * Create an overlay to anchor the popup to the map.
   */</span>
  overlay <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Overlay</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">element</span><span class="token operator">:</span> container<span class="token punctuation">,</span>
    <span class="token literal-property property">autoPan</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">animation</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">duration</span><span class="token operator">:</span> <span class="token number">250</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">const</span> aerial <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Tile</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">source</span><span class="token operator">:</span> <span class="token keyword">new</span> <span class="token class-name">XYZ</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      <span class="token literal-property property">url</span><span class="token operator">:</span> <span class="token string">&quot;http://wprd0{1-4}.is.autonavi.com/appmaptile?lang=zh_cn&amp;size=1&amp;style=7&amp;x={x}&amp;y={y}&amp;z={z}&quot;</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token comment">// 创建并初始化图层组</span>
  <span class="token keyword">const</span> result <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">createMaskedLayerGroup</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>result<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    layerGroup <span class="token operator">=</span> result<span class="token punctuation">.</span>layerGroup<span class="token punctuation">;</span>
    grassLayer <span class="token operator">=</span> result<span class="token punctuation">.</span>grassLayer<span class="token punctuation">;</span>
    geoJsonLayer <span class="token operator">=</span> result<span class="token punctuation">.</span>geoJsonLayer<span class="token punctuation">;</span>
    maskSource <span class="token operator">=</span> result<span class="token punctuation">.</span>maskSource<span class="token punctuation">;</span>

    <span class="token comment">// 确保图层组在地图初始化时添加</span>
    <span class="token keyword">const</span> baseLayers <span class="token operator">=</span> <span class="token punctuation">[</span>
      <span class="token keyword">new</span> <span class="token class-name">Tile</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
        <span class="token literal-property property">source</span><span class="token operator">:</span> <span class="token keyword">new</span> <span class="token class-name">XYZ</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
          <span class="token literal-property property">url</span><span class="token operator">:</span> <span class="token string">&quot;https://server.arcgisonline.com/arcgis/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}.png&quot;</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token punctuation">]</span><span class="token punctuation">;</span>

    glMap <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Map</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      <span class="token literal-property property">target</span><span class="token operator">:</span> map<span class="token punctuation">.</span>value<span class="token punctuation">,</span>
      <span class="token literal-property property">layers</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token operator">...</span>baseLayers<span class="token punctuation">,</span> layerGroup<span class="token punctuation">]</span><span class="token punctuation">,</span>  <span class="token comment">// 确保图层组正确添加</span>
      <span class="token literal-property property">overlays</span><span class="token operator">:</span> <span class="token punctuation">[</span>overlay<span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token literal-property property">view</span><span class="token operator">:</span> <span class="token keyword">new</span> <span class="token class-name">View</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
        <span class="token literal-property property">projection</span><span class="token operator">:</span> <span class="token string">&quot;EPSG:4326&quot;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">center</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">119.97413670814491</span><span class="token punctuation">,</span> <span class="token number">49.265069338103726</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token literal-property property">minZoom</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
        <span class="token literal-property property">zoom</span><span class="token operator">:</span> <span class="token number">9</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
      <span class="token literal-property property">controls</span><span class="token operator">:</span> <span class="token function">defaultControls</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
        <span class="token literal-property property">zoom</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
        <span class="token literal-property property">rotate</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
        <span class="token literal-property property">attribution</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">extend</span><span class="token punctuation">(</span><span class="token punctuation">[</span>
        <span class="token keyword">new</span> <span class="token class-name">ScaleLine</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
          <span class="token literal-property property">units</span><span class="token operator">:</span> <span class="token string">&quot;metric&quot;</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
      <span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">// 添加地图视图变化监听</span>
    glMap<span class="token punctuation">.</span><span class="token function">getView</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span><span class="token string">&#39;change:resolution&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>layerGroup<span class="token punctuation">.</span><span class="token function">getVisible</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// 视图变化时刷新图层</span>
        grassLayer<span class="token punctuation">.</span><span class="token function">getSource</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">refresh</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">// 输出当前视图范围</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;当前视图范围:&#39;</span><span class="token punctuation">,</span> glMap<span class="token punctuation">.</span><span class="token function">getView</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">calculateExtent</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">// 确保图层初始状态与 grassLayerVisible 同步</span>
    layerGroup<span class="token punctuation">.</span><span class="token function">setVisible</span><span class="token punctuation">(</span>grassLayerVisible<span class="token punctuation">.</span>value<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token comment">// 创建农场边界图层</span>
  <span class="token keyword">let</span> <span class="token punctuation">{</span> tzgeojson <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">useGeoJsonPolygon</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">let</span> features <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">GeoJSON</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">featureProjection</span><span class="token operator">:</span> <span class="token string">&quot;EPSG:4326&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">readFeatures</span><span class="token punctuation">(</span>tzgeojson<span class="token punctuation">)</span><span class="token punctuation">;</span>
  lineLayer <span class="token operator">=</span> <span class="token function">createFarmBoundaryLayer</span><span class="token punctuation">(</span>features<span class="token punctuation">)</span><span class="token punctuation">;</span>
  glMap<span class="token punctuation">.</span><span class="token function">addLayer</span><span class="token punctuation">(</span>lineLayer<span class="token punctuation">)</span><span class="token punctuation">;</span>
  lineLayer<span class="token punctuation">.</span><span class="token function">setVisible</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token comment">// 创建标记点图层</span>
  <span class="token keyword">try</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;开始创建标记点...&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">const</span> iconPath <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">URL</span><span class="token punctuation">(</span><span class="token string">&#39;@/assets/img/logo.png&#39;</span><span class="token punctuation">,</span> <span class="token keyword">import</span><span class="token punctuation">.</span>meta<span class="token punctuation">.</span>url<span class="token punctuation">)</span><span class="token punctuation">.</span>href<span class="token punctuation">;</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;图标路径:&#39;</span><span class="token punctuation">,</span> iconPath<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">const</span> markerLayer <span class="token operator">=</span> <span class="token function">createMarkerLayer</span><span class="token punctuation">(</span>
      <span class="token punctuation">[</span>
        <span class="token punctuation">[</span><span class="token number">120.02140428</span><span class="token punctuation">,</span> <span class="token number">49.31965644</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token punctuation">[</span><span class="token number">120.0285339</span><span class="token punctuation">,</span> <span class="token number">49.31209944</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token punctuation">[</span><span class="token number">120.03230459</span><span class="token punctuation">,</span> <span class="token number">49.3041149</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token punctuation">]</span><span class="token punctuation">,</span>
      iconPath<span class="token punctuation">,</span>
      <span class="token punctuation">[</span><span class="token string">&quot;燕麦&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;苜蓿&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;甜菜&quot;</span><span class="token punctuation">]</span>
    <span class="token punctuation">)</span><span class="token punctuation">;</span>

    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;标记点图层创建成功:&#39;</span><span class="token punctuation">,</span> markerLayer<span class="token punctuation">.</span>layer<span class="token punctuation">)</span><span class="token punctuation">;</span>
    glMap<span class="token punctuation">.</span><span class="token function">addLayer</span><span class="token punctuation">(</span>markerLayer<span class="token punctuation">.</span>layer<span class="token punctuation">)</span><span class="token punctuation">;</span>
    glMap<span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span><span class="token string">&#39;pointermove&#39;</span><span class="token punctuation">,</span> markerLayer<span class="token punctuation">.</span>handlePointerMove<span class="token punctuation">)</span><span class="token punctuation">;</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;鼠标移动事件监听器已添加&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span>error<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">error</span><span class="token punctuation">(</span><span class="token string">&#39;创建标记点时发生错误:&#39;</span><span class="token punctuation">,</span> error<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token comment">// 创建基础信息图层</span>
  <span class="token function">queryBasicInfoList</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">res</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> features <span class="token operator">=</span> res<span class="token punctuation">.</span>data<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">item</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      <span class="token keyword">const</span> feature <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">GeoJSON</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">readFeature</span><span class="token punctuation">(</span>item<span class="token punctuation">.</span>geom<span class="token punctuation">,</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">dataProjection</span><span class="token operator">:</span> <span class="token string">&quot;EPSG:3857&quot;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">featureProjection</span><span class="token operator">:</span> <span class="token string">&quot;EPSG:4326&quot;</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

      feature<span class="token punctuation">.</span><span class="token function">setProperties</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
        <span class="token literal-property property">farmName</span><span class="token operator">:</span> item<span class="token punctuation">.</span>farm_name<span class="token punctuation">,</span>
        <span class="token literal-property property">layerType</span><span class="token operator">:</span> <span class="token string">&#39;basicInfo&#39;</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      
      <span class="token keyword">return</span> feature<span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">const</span> basicInfoLayer <span class="token operator">=</span> <span class="token function">createBasicInfoLayer</span><span class="token punctuation">(</span>features<span class="token punctuation">)</span><span class="token punctuation">;</span>
     
    glMap<span class="token punctuation">.</span><span class="token function">addLayer</span><span class="token punctuation">(</span>basicInfoLayer<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token comment">// 创建点击事件处理器</span>
  <span class="token keyword">const</span> clickHandler <span class="token operator">=</span> <span class="token function">createClickHandler</span><span class="token punctuation">(</span>glMap<span class="token punctuation">,</span> <span class="token punctuation">{</span>
    overlay<span class="token punctuation">,</span>
    grazingDataArr<span class="token punctuation">,</span>
    globalClearLayer<span class="token punctuation">,</span>
    catPannel<span class="token punctuation">,</span>
    getFarmArea
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token comment">// 添加点击事件监听</span>
  glMap<span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span><span class="token string">&#39;click&#39;</span><span class="token punctuation">,</span> clickHandler<span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token comment">// 创建弹窗关闭处理器</span>
  closer<span class="token punctuation">.</span>onclick <span class="token operator">=</span> <span class="token function">createPopupCloser</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    overlay<span class="token punctuation">,</span>
    globalClearLayer<span class="token punctuation">,</span>
    catPannel
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token comment">// 添加鼠标移动事件监听</span>
  glMap<span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span><span class="token string">&#39;pointermove&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">evt</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> pixel <span class="token operator">=</span> evt<span class="token punctuation">.</span>pixel<span class="token punctuation">;</span>
    <span class="token keyword">const</span> hit <span class="token operator">=</span> glMap<span class="token punctuation">.</span><span class="token function">forEachFeatureAtPixel</span><span class="token punctuation">(</span>pixel<span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">feature<span class="token punctuation">,</span> layer</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      <span class="token comment">// 只处理 basicInfoLayer 的要素</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>layer<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">&#39;name&#39;</span><span class="token punctuation">)</span> <span class="token operator">===</span> <span class="token string">&#39;basicInfoLayer&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> feature<span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
      <span class="token keyword">return</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">// 如果当前悬浮的要素与新检测到的要素不同</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>hit <span class="token operator">!==</span> hoveredFeature<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token comment">// 如果有之前悬浮的要素，恢复其样式</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>hoveredFeature<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        hoveredFeature<span class="token punctuation">.</span><span class="token function">setStyle</span><span class="token punctuation">(</span><span class="token function">basicInfoStyle</span><span class="token punctuation">(</span>hoveredFeature<span class="token punctuation">,</span> <span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
      <span class="token comment">// 如果有新检测到的要素，设置其悬浮样式</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>hit<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        hit<span class="token punctuation">.</span><span class="token function">setStyle</span><span class="token punctuation">(</span><span class="token function">basicInfoStyle</span><span class="token punctuation">(</span>hit<span class="token punctuation">,</span> <span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
      <span class="token comment">// 更新当前悬浮要素</span>
      hoveredFeature <span class="token operator">=</span> hit<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token function">nextTick</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> <span class="token function-variable function">callBackAnimate</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>runningTime<span class="token punctuation">.</span>value<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>globalTimer<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token function">clearTimeout</span><span class="token punctuation">(</span>globalTimer<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
    globalTimer <span class="token operator">=</span> <span class="token function">setTimeout</span><span class="token punctuation">(</span>runTime<span class="token punctuation">,</span> <span class="token number">500</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  runningTime<span class="token punctuation">.</span>value <span class="token operator">=</span> <span class="token operator">!</span>runningTime<span class="token punctuation">.</span>value<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> <span class="token function-variable function">stopAnimate</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>globalTimer<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">clearTimeout</span><span class="token punctuation">(</span>globalTimer<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  runningTime<span class="token punctuation">.</span>value <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> <span class="token function-variable function">runTime</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">steep <span class="token operator">=</span> <span class="token number">100</span></span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token function">clearTimeout</span><span class="token punctuation">(</span>globalTimer<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token comment">// defaultData.time.setFullYear(defaultData.time.getFullYear()+1);</span>
  <span class="token keyword">let</span> curDate <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span>defaultData<span class="token punctuation">.</span>time<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token comment">// curDate.setFullYear(curDate.getFullYear() + 1)</span>

  curDate<span class="token punctuation">.</span><span class="token function">setMonth</span><span class="token punctuation">(</span>curDate<span class="token punctuation">.</span><span class="token function">getMonth</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token comment">// defaultData.time += 1000 * 60 * 60 * 24 * 1 * 20</span>

  <span class="token keyword">if</span> <span class="token punctuation">(</span>curDate <span class="token operator">&gt;</span> <span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">stopAnimate</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">// 重置</span>
    timeLineComRef<span class="token punctuation">.</span>value<span class="token punctuation">.</span><span class="token function">setTime</span><span class="token punctuation">(</span>defaultData<span class="token punctuation">.</span>timeRange<span class="token punctuation">.</span>start<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
    defaultData<span class="token punctuation">.</span>time <span class="token operator">=</span> curDate<span class="token punctuation">.</span><span class="token function">getTime</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    timeLineComRef<span class="token punctuation">.</span>value<span class="token punctuation">.</span><span class="token function">setTime</span><span class="token punctuation">(</span>defaultData<span class="token punctuation">.</span>time<span class="token punctuation">)</span><span class="token punctuation">;</span>

    globalTimer <span class="token operator">=</span> <span class="token function">setTimeout</span><span class="token punctuation">(</span>runTime<span class="token punctuation">,</span> steep<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> <span class="token function-variable function">timeChange</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">curTime</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">let</span> cr <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span>curTime<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getFullYear</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">if</span> <span class="token punctuation">(</span>vectorSourceTimeLine<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    vectorSourceTimeLine<span class="token punctuation">.</span><span class="token function">getFeatures</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">f</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>f<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">&quot;time&quot;</span><span class="token punctuation">)</span> <span class="token operator">==</span> cr<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        f<span class="token punctuation">.</span><span class="token function">setStyle</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
        f<span class="token punctuation">.</span><span class="token function">setStyle</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> <span class="token function-variable function">style</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">f</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">feature</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">Style</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      <span class="token literal-property property">fill</span><span class="token operator">:</span> <span class="token keyword">new</span> <span class="token class-name">Fill</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
        <span class="token comment">//矢量图层填充颜色，以及透明度</span>
        <span class="token literal-property property">color</span><span class="token operator">:</span> <span class="token string">&quot;rgba(33,94,29,0.5)&quot;</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
      <span class="token literal-property property">stroke</span><span class="token operator">:</span> <span class="token keyword">new</span> <span class="token class-name">Stroke</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
        <span class="token comment">//边界样式</span>
        <span class="token literal-property property">color</span><span class="token operator">:</span> <span class="token string">&quot;rgba(10, 90, 209, 0.6)&quot;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">width</span><span class="token operator">:</span> <span class="token number">3</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
      <span class="token literal-property property">text</span><span class="token operator">:</span> <span class="token keyword">new</span> <span class="token class-name">Text</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
        <span class="token comment">// 位置</span>
        <span class="token literal-property property">textAlign</span><span class="token operator">:</span> <span class="token string">&quot;center&quot;</span><span class="token punctuation">,</span>
        <span class="token comment">// 基准线</span>
        <span class="token literal-property property">textBaseline</span><span class="token operator">:</span> <span class="token string">&quot;middle&quot;</span><span class="token punctuation">,</span>
        <span class="token comment">// 文字样式</span>
        <span class="token comment">//   font: &quot;bold 18px 微软雅黑&quot;,</span>
        <span class="token literal-property property">font</span><span class="token operator">:</span> <span class="token string">&quot;15px 微软雅黑&quot;</span><span class="token punctuation">,</span>
        <span class="token comment">// 文本内容</span>
        <span class="token literal-property property">text</span><span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>feature<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">&quot;name&quot;</span><span class="token punctuation">)</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">,</span>
        <span class="token comment">// 文字颜色</span>
        <span class="token literal-property property">fill</span><span class="token operator">:</span> <span class="token keyword">new</span> <span class="token class-name">Fill</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
          <span class="token literal-property property">color</span><span class="token operator">:</span> <span class="token string">&quot;black&quot;</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
        <span class="token comment">// 文字背景</span>
        <span class="token literal-property property">stroke</span><span class="token operator">:</span> <span class="token keyword">new</span> <span class="token class-name">Stroke</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">color</span><span class="token operator">:</span> <span class="token string">&quot;yellow&quot;</span><span class="token punctuation">,</span> <span class="token literal-property property">width</span><span class="token operator">:</span> <span class="token number">10</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token comment">//设置高亮样式</span>
<span class="token keyword">let</span> <span class="token function-variable function">polygonStyle</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">var</span> style <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Style</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">fill</span><span class="token operator">:</span> <span class="token keyword">new</span> <span class="token class-name">Fill</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      <span class="token comment">//矢量图层填充颜色，以及透明度</span>
      <span class="token literal-property property">color</span><span class="token operator">:</span> <span class="token string">&quot;rgba(220, 20, 60, 1)&quot;</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token literal-property property">stroke</span><span class="token operator">:</span> <span class="token keyword">new</span> <span class="token class-name">Stroke</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      <span class="token comment">//边界样式</span>
      <span class="token literal-property property">lineDash</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">6</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token comment">//注意:该属性为虚线效果，在IE10以上版本才有效果</span>
      <span class="token literal-property property">color</span><span class="token operator">:</span> <span class="token string">&quot;#FF0000&quot;</span><span class="token punctuation">,</span>
      <span class="token literal-property property">width</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token literal-property property">text</span><span class="token operator">:</span> <span class="token keyword">new</span> <span class="token class-name">Text</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      <span class="token comment">//文本样式</span>
      <span class="token literal-property property">font</span><span class="token operator">:</span> <span class="token string">&quot;20px Verdana,sans-serif&quot;</span><span class="token punctuation">,</span>
      <span class="token comment">// text:feature.attr.dmaName,</span>
      <span class="token literal-property property">fill</span><span class="token operator">:</span> <span class="token keyword">new</span> <span class="token class-name">Fill</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
        <span class="token literal-property property">color</span><span class="token operator">:</span> <span class="token string">&quot;#FF0000&quot;</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">return</span> style<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">function</span> <span class="token function">selectStyle</span><span class="token punctuation">(</span><span class="token parameter">feature</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
   <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">Style</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">fill</span><span class="token operator">:</span> <span class="token keyword">new</span> <span class="token class-name">Fill</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      <span class="token literal-property property">color</span><span class="token operator">:</span> <span class="token string">&quot;rgba(33,194,219,0)&quot;</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token literal-property property">stroke</span><span class="token operator">:</span> <span class="token keyword">new</span> <span class="token class-name">Stroke</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      <span class="token literal-property property">color</span><span class="token operator">:</span> <span class="token string">&quot;rgba(255, 255, 255, 0.7)&quot;</span><span class="token punctuation">,</span>
      <span class="token literal-property property">width</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token literal-property property">text</span><span class="token operator">:</span> <span class="token keyword">new</span> <span class="token class-name">Text</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      <span class="token comment">// 位置</span>
      <span class="token literal-property property">textAlign</span><span class="token operator">:</span> <span class="token string">&quot;center&quot;</span><span class="token punctuation">,</span>
      <span class="token comment">// 基准线</span>
      <span class="token literal-property property">textBaseline</span><span class="token operator">:</span> <span class="token string">&quot;middle&quot;</span><span class="token punctuation">,</span>
      <span class="token comment">// 文字样式</span>
      <span class="token comment">//   font: &quot;bold 18px 微软雅黑&quot;,</span>
      <span class="token literal-property property">font</span><span class="token operator">:</span> <span class="token string">&quot;15px 微软雅黑&quot;</span><span class="token punctuation">,</span>
      <span class="token comment">// 文本内容</span>
      <span class="token literal-property property">text</span><span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>feature<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">&quot;name&quot;</span><span class="token punctuation">)</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">,</span>
      <span class="token comment">// 文字颜色</span>
      <span class="token literal-property property">fill</span><span class="token operator">:</span> <span class="token keyword">new</span> <span class="token class-name">Fill</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
        <span class="token literal-property property">color</span><span class="token operator">:</span> <span class="token string">&quot;#000&quot;</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
      <span class="token comment">// 文字背景</span>
      <span class="token literal-property property">stroke</span><span class="token operator">:</span> <span class="token keyword">new</span> <span class="token class-name">Stroke</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">color</span><span class="token operator">:</span> <span class="token string">&quot;yellow&quot;</span><span class="token punctuation">,</span> <span class="token literal-property property">width</span><span class="token operator">:</span> <span class="token number">10</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token function">useGeoJsonPolygon</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">let</span> tzgeojson <span class="token operator">=</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">;</span>
  <span class="token keyword">let</span> url <span class="token operator">=</span> <span class="token string">&quot;http://112.112.112.112/mapdata/file/geojson/nongchang16.json&quot;</span><span class="token punctuation">;</span>
  <span class="token keyword">await</span> axios<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>url<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">res</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    tzgeojson <span class="token operator">=</span> res<span class="token punctuation">.</span>data<span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">return</span> <span class="token punctuation">{</span> tzgeojson <span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// 定义基础信息图层的样式函数</span>
<span class="token doc-comment comment">/**
 * 基础信息图层的样式函数
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>Feature<span class="token punctuation">}</span></span> <span class="token parameter">feature</span> - OpenLayers要素对象
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>boolean<span class="token punctuation">}</span></span> <span class="token parameter">isHover</span> - 是否为悬浮状态
 * <span class="token keyword">@returns</span> <span class="token class-name"><span class="token punctuation">{</span>Style<span class="token punctuation">}</span></span> OpenLayers样式对象
 */</span>
<span class="token keyword">function</span> <span class="token function">basicInfoStyle</span><span class="token punctuation">(</span><span class="token parameter">feature<span class="token punctuation">,</span> isHover <span class="token operator">=</span> <span class="token boolean">false</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// 基础样式配置</span>
  <span class="token keyword">const</span> baseStyle <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token comment">// 填充样式</span>
    <span class="token literal-property property">fill</span><span class="token operator">:</span> <span class="token keyword">new</span> <span class="token class-name">Fill</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      <span class="token comment">// 填充颜色，使用半透明的蓝色</span>
      <span class="token literal-property property">color</span><span class="token operator">:</span> isHover <span class="token operator">?</span> <span class="token string">&#39;rgba(0, 123, 255, 0.3)&#39;</span> <span class="token operator">:</span> <span class="token string">&#39;rgba(0, 123, 255, 0.1)&#39;</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token comment">// 边框样式</span>
    <span class="token literal-property property">stroke</span><span class="token operator">:</span> <span class="token keyword">new</span> <span class="token class-name">Stroke</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      <span class="token comment">// 边框颜色，悬浮时加深</span>
      <span class="token literal-property property">color</span><span class="token operator">:</span> isHover <span class="token operator">?</span> <span class="token string">&#39;#0056b3&#39;</span> <span class="token operator">:</span> <span class="token string">&#39;#007bff&#39;</span><span class="token punctuation">,</span>
      <span class="token comment">// 边框宽度，悬浮时加粗</span>
      <span class="token literal-property property">width</span><span class="token operator">:</span> isHover <span class="token operator">?</span> <span class="token number">3</span> <span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
      <span class="token comment">// 边框虚线样式，悬浮时使用实线</span>
      <span class="token literal-property property">lineDash</span><span class="token operator">:</span> isHover <span class="token operator">?</span> <span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">]</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token comment">// 文本样式</span>
    <span class="token literal-property property">text</span><span class="token operator">:</span> <span class="token keyword">new</span> <span class="token class-name">Text</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      <span class="token comment">// 文本内容，从要素属性中获取农场名称</span>
      <span class="token literal-property property">text</span><span class="token operator">:</span> feature<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">&#39;farmName&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
      <span class="token comment">// 字体设置</span>
      <span class="token literal-property property">font</span><span class="token operator">:</span> <span class="token string">&#39;bold 14px 微软雅黑&#39;</span><span class="token punctuation">,</span>
      <span class="token comment">// 文本填充颜色</span>
      <span class="token literal-property property">fill</span><span class="token operator">:</span> <span class="token keyword">new</span> <span class="token class-name">Fill</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
        <span class="token literal-property property">color</span><span class="token operator">:</span> isHover <span class="token operator">?</span> <span class="token string">&#39;#0056b3&#39;</span> <span class="token operator">:</span> <span class="token string">&#39;#007bff&#39;</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
      <span class="token comment">// 文本描边，增加可读性</span>
      <span class="token literal-property property">stroke</span><span class="token operator">:</span> <span class="token keyword">new</span> <span class="token class-name">Stroke</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
        <span class="token literal-property property">color</span><span class="token operator">:</span> <span class="token string">&#39;#ffffff&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">width</span><span class="token operator">:</span> <span class="token number">3</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
      <span class="token comment">// 文本位置偏移</span>
      <span class="token literal-property property">offsetY</span><span class="token operator">:</span> <span class="token operator">-</span><span class="token number">10</span><span class="token punctuation">,</span>
      <span class="token comment">// 文本对齐方式</span>
      <span class="token literal-property property">textAlign</span><span class="token operator">:</span> <span class="token string">&#39;center&#39;</span><span class="token punctuation">,</span>
      <span class="token literal-property property">textBaseline</span><span class="token operator">:</span> <span class="token string">&#39;middle&#39;</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>

  <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">Style</span><span class="token punctuation">(</span>baseStyle<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// 添加鼠标悬浮状态管理</span>
<span class="token keyword">let</span> hoveredFeature <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span> <span class="token comment">// 当前悬浮的要素</span>

router<span class="token punctuation">.</span><span class="token function">beforeEach</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">to<span class="token punctuation">,</span> from<span class="token punctuation">,</span> next</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>globalTimer<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">clearTimeout</span><span class="token punctuation">(</span>globalTimer<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span> 
</code></pre></div><h3 id="maplayers" tabindex="-1"><a class="header-anchor" href="#maplayers" aria-hidden="true">#</a> mapLayers</h3><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * OpenLayers 图层管理工具
 * 本文件包含所有地图图层的创建和样式定义
 * 每个图层都是独立的，可以单独设置样式和事件
 */</span>

<span class="token keyword">import</span> <span class="token punctuation">{</span> Vector <span class="token keyword">as</span> VectorSource <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;ol/source.js&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> Vector <span class="token keyword">as</span> VectorLayer <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;ol/layer.js&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> Style<span class="token punctuation">,</span> Fill<span class="token punctuation">,</span> Stroke<span class="token punctuation">,</span> Text <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;ol/style&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> Group <span class="token keyword">as</span> LayerGroup <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;ol/layer&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> GeoJSON <span class="token keyword">from</span> <span class="token string">&#39;ol/format/GeoJSON&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> renderMakerCustom <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;./olutil.js&#39;</span><span class="token punctuation">;</span>

<span class="token doc-comment comment">/**
 * 图层名称常量定义
 * 使用常量可以避免字符串拼写错误，方便统一管理
 */</span>
<span class="token keyword">export</span> <span class="token keyword">const</span> <span class="token constant">LAYER_NAMES</span> <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token constant">MARKER</span><span class="token operator">:</span> <span class="token string">&#39;markerLayer&#39;</span><span class="token punctuation">,</span>      <span class="token comment">// 标记点图层</span>
  <span class="token constant">BASIC_INFO</span><span class="token operator">:</span> <span class="token string">&#39;basicInfoLayer&#39;</span><span class="token punctuation">,</span> <span class="token comment">// 基础信息图层</span>
  <span class="token constant">FARM_BOUNDARY</span><span class="token operator">:</span> <span class="token string">&#39;farmBoundary&#39;</span><span class="token punctuation">,</span> <span class="token comment">// 农场边界图层</span>
  <span class="token constant">GRASS</span><span class="token operator">:</span> <span class="token string">&#39;grassLayer&#39;</span>        <span class="token comment">// 草地图层</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token doc-comment comment">/**
 * 图层优先级配置
 * 用于处理多个图层重叠时的点击事件优先级
 * 数组越靠前优先级越高
 */</span>
<span class="token keyword">export</span> <span class="token keyword">const</span> <span class="token constant">LAYER_PRIORITY</span> <span class="token operator">=</span> <span class="token punctuation">[</span>
  <span class="token constant">LAYER_NAMES</span><span class="token punctuation">.</span><span class="token constant">MARKER</span><span class="token punctuation">,</span>        <span class="token comment">// 标记点图层优先级最高</span>
  <span class="token constant">LAYER_NAMES</span><span class="token punctuation">.</span><span class="token constant">BASIC_INFO</span><span class="token punctuation">,</span>    <span class="token comment">// 基础信息图层次之</span>
  <span class="token constant">LAYER_NAMES</span><span class="token punctuation">.</span><span class="token constant">FARM_BOUNDARY</span>  <span class="token comment">// 农场边界图层优先级最低</span>
<span class="token punctuation">]</span><span class="token punctuation">;</span>

<span class="token doc-comment comment">/**
 * 创建农场边界图层
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>Array<span class="token punctuation">}</span></span> <span class="token parameter">features</span> - GeoJSON要素数组，包含农场边界数据
 * <span class="token keyword">@returns</span> <span class="token class-name"><span class="token punctuation">{</span>VectorLayer<span class="token punctuation">}</span></span> 返回配置好的农场边界图层
 * 
 * 图层特点：
 * 1. 使用半透明绿色填充
 * 2. 蓝色边框
 * 3. 根据缩放级别显示/隐藏标签
 * 4. 标签使用黑色字体，黄色描边
 */</span>
<span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">createFarmBoundaryLayer</span><span class="token punctuation">(</span><span class="token parameter">features</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">VectorLayer</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token constant">LAYER_NAMES</span><span class="token punctuation">.</span><span class="token constant">FARM_BOUNDARY</span><span class="token punctuation">,</span>  <span class="token comment">// 设置图层名称，用于后续识别</span>
    <span class="token literal-property property">zIndex</span><span class="token operator">:</span> <span class="token number">9</span><span class="token punctuation">,</span>                        <span class="token comment">// 设置图层层级，数值越大越靠上</span>
    <span class="token literal-property property">source</span><span class="token operator">:</span> <span class="token keyword">new</span> <span class="token class-name">VectorSource</span><span class="token punctuation">(</span><span class="token punctuation">{</span> features <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token comment">// 设置数据源</span>
    <span class="token function-variable function">style</span><span class="token operator">:</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">feature<span class="token punctuation">,</span> resolution</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token comment">// resolution 参数表示当前地图的分辨率（米/像素）</span>
      <span class="token comment">// 数值越小表示缩放级别越大（更近的视角）</span>
      <span class="token keyword">const</span> showText <span class="token operator">=</span> resolution <span class="token operator">&lt;</span> <span class="token number">1000</span><span class="token punctuation">;</span> <span class="token comment">// 当分辨率小于1000米/像素时显示文本</span>

      <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">Style</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
        <span class="token comment">// 填充样式：半透明绿色</span>
        <span class="token literal-property property">fill</span><span class="token operator">:</span> <span class="token keyword">new</span> <span class="token class-name">Fill</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
          <span class="token literal-property property">color</span><span class="token operator">:</span> <span class="token string">&quot;rgba(119,255,0,0.45)&quot;</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
        <span class="token comment">// 边框样式：蓝色实线</span>
        <span class="token literal-property property">stroke</span><span class="token operator">:</span> <span class="token keyword">new</span> <span class="token class-name">Stroke</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
          <span class="token literal-property property">color</span><span class="token operator">:</span> <span class="token string">&quot;rgba(100, 90, 209, 0.6)&quot;</span><span class="token punctuation">,</span>
          <span class="token literal-property property">width</span><span class="token operator">:</span> <span class="token number">3</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
        <span class="token comment">// 文本样式：根据分辨率条件显示</span>
        <span class="token literal-property property">text</span><span class="token operator">:</span> showText <span class="token operator">?</span> <span class="token keyword">new</span> <span class="token class-name">Text</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
          <span class="token literal-property property">textAlign</span><span class="token operator">:</span> <span class="token string">&quot;center&quot;</span><span class="token punctuation">,</span>
          <span class="token literal-property property">textBaseline</span><span class="token operator">:</span> <span class="token string">&quot;middle&quot;</span><span class="token punctuation">,</span>
          <span class="token literal-property property">font</span><span class="token operator">:</span> <span class="token string">&quot;15px 微软雅黑&quot;</span><span class="token punctuation">,</span>
          <span class="token literal-property property">text</span><span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>feature<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">&quot;name&quot;</span><span class="token punctuation">)</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">,</span>
          <span class="token literal-property property">fill</span><span class="token operator">:</span> <span class="token keyword">new</span> <span class="token class-name">Fill</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
            <span class="token literal-property property">color</span><span class="token operator">:</span> <span class="token string">&quot;black&quot;</span><span class="token punctuation">,</span>
          <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
          <span class="token literal-property property">stroke</span><span class="token operator">:</span> <span class="token keyword">new</span> <span class="token class-name">Stroke</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">color</span><span class="token operator">:</span> <span class="token string">&quot;#ff1&quot;</span><span class="token punctuation">,</span> <span class="token literal-property property">width</span><span class="token operator">:</span> <span class="token number">10</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token operator">:</span> <span class="token keyword">undefined</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token doc-comment comment">/**
 * 创建基础信息图层
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>Array<span class="token punctuation">}</span></span> <span class="token parameter">features</span> - GeoJSON要素数组，包含基础信息数据
 * <span class="token keyword">@returns</span> <span class="token class-name"><span class="token punctuation">{</span>VectorLayer<span class="token punctuation">}</span></span> 返回配置好的基础信息图层
 * 
 * 图层特点：
 * 1. 使用浅蓝色填充
 * 2. 蓝色虚线边框
 * 3. 根据缩放级别显示/隐藏标签
 * 4. 标签使用蓝色字体，白色描边
 */</span>
<span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">createBasicInfoLayer</span><span class="token punctuation">(</span><span class="token parameter">features</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">VectorLayer</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token constant">LAYER_NAMES</span><span class="token punctuation">.</span><span class="token constant">BASIC_INFO</span><span class="token punctuation">,</span>
    <span class="token literal-property property">source</span><span class="token operator">:</span> <span class="token keyword">new</span> <span class="token class-name">VectorSource</span><span class="token punctuation">(</span><span class="token punctuation">{</span> features <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token literal-property property">zIndex</span><span class="token operator">:</span> <span class="token number">15</span><span class="token punctuation">,</span>  <span class="token comment">// 设置较高的层级，确保显示在其他图层之上</span>
    <span class="token function-variable function">style</span><span class="token operator">:</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">feature<span class="token punctuation">,</span> resolution</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token comment">// 基础信息图层需要更近的视角才能显示标签</span>
      <span class="token keyword">const</span> showText <span class="token operator">=</span> resolution <span class="token operator">&lt;</span> <span class="token number">500</span><span class="token punctuation">;</span>

      <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">Style</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
        <span class="token comment">// 填充样式：浅蓝色</span>
        <span class="token literal-property property">fill</span><span class="token operator">:</span> <span class="token keyword">new</span> <span class="token class-name">Fill</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
          <span class="token literal-property property">color</span><span class="token operator">:</span> <span class="token string">&quot;rgba(0, 123, 255, 0.1)&quot;</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
        <span class="token comment">// 边框样式：蓝色虚线</span>
        <span class="token literal-property property">stroke</span><span class="token operator">:</span> <span class="token keyword">new</span> <span class="token class-name">Stroke</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
          <span class="token literal-property property">color</span><span class="token operator">:</span> <span class="token string">&quot;#007bff&quot;</span><span class="token punctuation">,</span>
          <span class="token literal-property property">width</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
          <span class="token literal-property property">lineDash</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">]</span>  <span class="token comment">// 设置虚线样式</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
        <span class="token comment">// 文本样式：根据分辨率条件显示</span>
        <span class="token literal-property property">text</span><span class="token operator">:</span> showText <span class="token operator">?</span> <span class="token keyword">new</span> <span class="token class-name">Text</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
          <span class="token literal-property property">text</span><span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>feature<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">&quot;farmName&quot;</span><span class="token punctuation">)</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">,</span>
          <span class="token literal-property property">font</span><span class="token operator">:</span> <span class="token string">&#39;bold 14px 微软雅黑&#39;</span><span class="token punctuation">,</span>
          <span class="token literal-property property">fill</span><span class="token operator">:</span> <span class="token keyword">new</span> <span class="token class-name">Fill</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
            <span class="token literal-property property">color</span><span class="token operator">:</span> <span class="token string">&quot;#007bff&quot;</span>
          <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
          <span class="token literal-property property">stroke</span><span class="token operator">:</span> <span class="token keyword">new</span> <span class="token class-name">Stroke</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
            <span class="token literal-property property">color</span><span class="token operator">:</span> <span class="token string">&quot;#ffffff&quot;</span><span class="token punctuation">,</span>
            <span class="token literal-property property">width</span><span class="token operator">:</span> <span class="token number">3</span>
          <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
          <span class="token literal-property property">offsetY</span><span class="token operator">:</span> <span class="token operator">-</span><span class="token number">10</span><span class="token punctuation">,</span>  <span class="token comment">// 文本向上偏移，避免与图形重叠</span>
          <span class="token literal-property property">textAlign</span><span class="token operator">:</span> <span class="token string">&#39;center&#39;</span><span class="token punctuation">,</span>
          <span class="token literal-property property">textBaseline</span><span class="token operator">:</span> <span class="token string">&#39;middle&#39;</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token operator">:</span> <span class="token keyword">undefined</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token doc-comment comment">/**
 * 创建标记点图层
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>Array<span class="token punctuation">}</span></span> <span class="token parameter">coordinates</span> - 坐标数组，每个元素为 [经度, 纬度]
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>string<span class="token punctuation">}</span></span> <span class="token parameter">iconPath</span> - 图标图片路径
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>Array<span class="token punctuation">}</span></span> <span class="token parameter">labels</span> - 标签文本数组
 * <span class="token keyword">@returns</span> <span class="token class-name"><span class="token punctuation">{</span>Object<span class="token punctuation">}</span></span> 返回图层对象和事件处理器
 * 
 * 图层特点：
 * 1. 使用自定义图标
 * 2. 支持鼠标悬停效果
 * 3. 标签根据缩放级别显示/隐藏
 * 4. 包含独立的事件处理系统
 */</span>
<span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">createMarkerLayer</span><span class="token punctuation">(</span><span class="token parameter">coordinates<span class="token punctuation">,</span> iconPath<span class="token punctuation">,</span> labels</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// 使用自定义渲染函数创建标记点</span>
  <span class="token keyword">const</span> markerResult <span class="token operator">=</span> <span class="token function">renderMakerCustom</span><span class="token punctuation">(</span>
    coordinates<span class="token punctuation">,</span>
    iconPath<span class="token punctuation">,</span>
    labels<span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
      <span class="token comment">// 图标配置</span>
      <span class="token literal-property property">icon</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">size</span><span class="token operator">:</span> <span class="token number">50</span><span class="token punctuation">,</span>           <span class="token comment">// 图标大小</span>
        <span class="token literal-property property">anchor</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">0.5</span><span class="token punctuation">,</span> <span class="token number">0.5</span><span class="token punctuation">]</span>  <span class="token comment">// 图标锚点（中心点）</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token comment">// 文本配置</span>
      <span class="token literal-property property">text</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">font</span><span class="token operator">:</span> <span class="token string">&#39;25px Verdana,sans-serif&#39;</span><span class="token punctuation">,</span>  <span class="token comment">// 字体设置</span>
        <span class="token literal-property property">color</span><span class="token operator">:</span> <span class="token string">&#39;#fff&#39;</span><span class="token punctuation">,</span>                    <span class="token comment">// 文字颜色</span>
        <span class="token literal-property property">offsetY</span><span class="token operator">:</span> <span class="token operator">-</span><span class="token number">35</span><span class="token punctuation">,</span>                     <span class="token comment">// 文字垂直偏移</span>
        <span class="token comment">// 文本显示的分辨率控制</span>
        <span class="token literal-property property">minResolution</span><span class="token operator">:</span> <span class="token number">0.0001</span><span class="token punctuation">,</span>  <span class="token comment">// 最小分辨率（更近的视角）</span>
        <span class="token literal-property property">maxResolution</span><span class="token operator">:</span> <span class="token number">0.001</span>    <span class="token comment">// 最大分辨率（更远的视角）</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token comment">// 鼠标悬停效果配置</span>
      <span class="token literal-property property">hover</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">scale</span><span class="token operator">:</span> <span class="token number">1.2</span><span class="token punctuation">,</span>        <span class="token comment">// 悬停时图标放大比例</span>
        <span class="token literal-property property">color</span><span class="token operator">:</span> <span class="token string">&#39;#ffeb3b&#39;</span>   <span class="token comment">// 悬停时文字颜色</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token comment">// 设置图层名称</span>
  markerResult<span class="token punctuation">.</span>vectorLayer<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span><span class="token string">&#39;name&#39;</span><span class="token punctuation">,</span> <span class="token constant">LAYER_NAMES</span><span class="token punctuation">.</span><span class="token constant">MARKER</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  
  <span class="token comment">// 返回图层和事件处理器</span>
  <span class="token comment">// 注意：每个图层的鼠标事件是独立的，不会相互影响</span>
  <span class="token keyword">return</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">layer</span><span class="token operator">:</span> markerResult<span class="token punctuation">.</span>vectorLayer<span class="token punctuation">,</span>
    <span class="token literal-property property">handlePointerMove</span><span class="token operator">:</span> markerResult<span class="token punctuation">.</span>handlePointerMove
  <span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token doc-comment comment">/**
 * 创建点击事件处理器
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>Map<span class="token punctuation">}</span></span> <span class="token parameter">map</span> - OpenLayers地图实例
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>Object<span class="token punctuation">}</span></span> <span class="token parameter">options</span> - 配置选项
 * <span class="token keyword">@returns</span> <span class="token class-name"><span class="token punctuation">{</span>Function<span class="token punctuation">}</span></span> 返回点击事件处理函数
 */</span>
<span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">createClickHandler</span><span class="token punctuation">(</span><span class="token parameter">map<span class="token punctuation">,</span> options</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token punctuation">{</span>
    overlay<span class="token punctuation">,</span>           <span class="token comment">// 弹窗覆盖物</span>
    grazingDataArr<span class="token punctuation">,</span>    <span class="token comment">// 数据数组</span>
    globalClearLayer<span class="token punctuation">,</span>  <span class="token comment">// 清除图层</span>
    catPannel<span class="token punctuation">,</span>         <span class="token comment">// 面板状态</span>
    getFarmArea        <span class="token comment">// 获取农场面积函数</span>
  <span class="token punctuation">}</span> <span class="token operator">=</span> options<span class="token punctuation">;</span>

  <span class="token comment">// 创建一个变量来存储当前选中的图层</span>
  <span class="token keyword">let</span> currentSelectedLayer <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>

  <span class="token comment">// 清除选中状态的函数</span>
  <span class="token keyword">function</span> <span class="token function">clearSelection</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 清除之前选中的图层</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>currentSelectedLayer<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      currentSelectedLayer<span class="token punctuation">.</span><span class="token function">getFeatures</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">clear</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      currentSelectedLayer <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token comment">// 隐藏面板</span>
    catPannel<span class="token punctuation">.</span>value <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
    <span class="token comment">// 清除弹窗</span>
    overlay<span class="token punctuation">.</span><span class="token function">setPosition</span><span class="token punctuation">(</span><span class="token keyword">undefined</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token comment">// 返回点击事件处理函数</span>
  <span class="token keyword">return</span> <span class="token keyword">function</span> <span class="token function">handleMapClick</span><span class="token punctuation">(</span><span class="token parameter">event</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> <span class="token punctuation">{</span> pixel<span class="token punctuation">,</span> coordinate <span class="token punctuation">}</span> <span class="token operator">=</span> event<span class="token punctuation">;</span>
    <span class="token keyword">const</span> clickedFeatures <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>

    <span class="token comment">// 收集点击位置的所有要素</span>
    map<span class="token punctuation">.</span><span class="token function">forEachFeatureAtPixel</span><span class="token punctuation">(</span>pixel<span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">feature<span class="token punctuation">,</span> layer</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      clickedFeatures<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
        feature<span class="token punctuation">,</span>
        layer<span class="token punctuation">,</span>
        <span class="token literal-property property">layerName</span><span class="token operator">:</span> layer<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">&#39;name&#39;</span><span class="token punctuation">)</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">if</span> <span class="token punctuation">(</span>clickedFeatures<span class="token punctuation">.</span>length <span class="token operator">&gt;</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token comment">// 按优先级排序处理点击事件</span>
      clickedFeatures<span class="token punctuation">.</span><span class="token function">sort</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">a<span class="token punctuation">,</span> b</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token constant">LAYER_PRIORITY</span><span class="token punctuation">.</span><span class="token function">indexOf</span><span class="token punctuation">(</span>a<span class="token punctuation">.</span>layerName<span class="token punctuation">)</span> <span class="token operator">-</span> 
               <span class="token constant">LAYER_PRIORITY</span><span class="token punctuation">.</span><span class="token function">indexOf</span><span class="token punctuation">(</span>b<span class="token punctuation">.</span>layerName<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

      <span class="token comment">// 处理最高优先级的图层点击事件</span>
      <span class="token keyword">const</span> topFeature <span class="token operator">=</span> clickedFeatures<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
      <span class="token keyword">const</span> <span class="token punctuation">{</span> layerName<span class="token punctuation">,</span> feature<span class="token punctuation">,</span> layer <span class="token punctuation">}</span> <span class="token operator">=</span> topFeature<span class="token punctuation">;</span>

      <span class="token keyword">try</span> <span class="token punctuation">{</span>
        <span class="token comment">// 更新当前选中的图层</span>
        currentSelectedLayer <span class="token operator">=</span> layer<span class="token punctuation">;</span>

        <span class="token comment">// 根据图层类型调用不同的处理函数</span>
        <span class="token keyword">switch</span> <span class="token punctuation">(</span>layerName<span class="token punctuation">)</span> <span class="token punctuation">{</span>
          <span class="token keyword">case</span> <span class="token constant">LAYER_NAMES</span><span class="token punctuation">.</span><span class="token constant">MARKER</span><span class="token operator">:</span>
            <span class="token function">handleMarkerClick</span><span class="token punctuation">(</span>feature<span class="token punctuation">,</span> coordinate<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">break</span><span class="token punctuation">;</span>
          <span class="token keyword">case</span> <span class="token constant">LAYER_NAMES</span><span class="token punctuation">.</span><span class="token constant">BASIC_INFO</span><span class="token operator">:</span>
            <span class="token function">handleBasicInfoClick</span><span class="token punctuation">(</span>feature<span class="token punctuation">,</span> coordinate<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">break</span><span class="token punctuation">;</span>
          <span class="token keyword">case</span> <span class="token constant">LAYER_NAMES</span><span class="token punctuation">.</span><span class="token constant">FARM_BOUNDARY</span><span class="token operator">:</span>
            <span class="token function">handleFarmBoundaryClick</span><span class="token punctuation">(</span>feature<span class="token punctuation">,</span> coordinate<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">break</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span>error<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        console<span class="token punctuation">.</span><span class="token function">error</span><span class="token punctuation">(</span><span class="token string">&#39;点击事件处理错误:&#39;</span><span class="token punctuation">,</span> error<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token function">clearSelection</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
      <span class="token comment">// 点击空白处清除选中状态</span>
      <span class="token function">clearSelection</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>

  <span class="token comment">// 处理标记点点击</span>
  <span class="token keyword">function</span> <span class="token function">handleMarkerClick</span><span class="token punctuation">(</span><span class="token parameter">feature<span class="token punctuation">,</span> coordinate</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> markerName <span class="token operator">=</span> feature<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">&#39;name&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;点击了标记点:&#39;</span><span class="token punctuation">,</span> markerName<span class="token punctuation">)</span><span class="token punctuation">;</span>
    
    <span class="token comment">// 设置弹窗位置</span>
    overlay<span class="token punctuation">.</span><span class="token function">setPosition</span><span class="token punctuation">(</span>coordinate<span class="token punctuation">)</span><span class="token punctuation">;</span>
    
    <span class="token comment">// 更新显示数据</span>
    <span class="token keyword">const</span> markerData <span class="token operator">=</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">key</span><span class="token operator">:</span> <span class="token string">&quot;标记点名称&quot;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">value</span><span class="token operator">:</span> markerName
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">key</span><span class="token operator">:</span> <span class="token string">&quot;位置&quot;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">(</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>coordinate<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">toFixed</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token string"> E, </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>coordinate<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">toFixed</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token string"> N)</span><span class="token template-punctuation string">\`</span></span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">]</span><span class="token punctuation">;</span>
    
    grazingDataArr<span class="token punctuation">.</span>value <span class="token operator">=</span> markerData<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token comment">// 处理基础信息点击</span>
  <span class="token keyword">function</span> <span class="token function">handleBasicInfoClick</span><span class="token punctuation">(</span><span class="token parameter">feature<span class="token punctuation">,</span> coordinate</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> farmName <span class="token operator">=</span> feature<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">&#39;farmName&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;点击了基本信息图层:&#39;</span><span class="token punctuation">,</span> farmName<span class="token punctuation">)</span><span class="token punctuation">;</span>
    
    overlay<span class="token punctuation">.</span><span class="token function">setPosition</span><span class="token punctuation">(</span>coordinate<span class="token punctuation">)</span><span class="token punctuation">;</span>
    
    <span class="token keyword">const</span> basicInfoData <span class="token operator">=</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">key</span><span class="token operator">:</span> <span class="token string">&quot;农场名称&quot;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">value</span><span class="token operator">:</span> farmName
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">key</span><span class="token operator">:</span> <span class="token string">&quot;点击位置&quot;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">(</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>coordinate<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">toFixed</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token string"> E, </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>coordinate<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">toFixed</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token string"> N)</span><span class="token template-punctuation string">\`</span></span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">]</span><span class="token punctuation">;</span>
    
    grazingDataArr<span class="token punctuation">.</span>value <span class="token operator">=</span> basicInfoData<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token comment">// 处理农场边界点击</span>
  <span class="token keyword">function</span> <span class="token function">handleFarmBoundaryClick</span><span class="token punctuation">(</span><span class="token parameter">feature<span class="token punctuation">,</span> coordinate</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> farmBoundaryName <span class="token operator">=</span> feature<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">&#39;name&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;点击了农场边界:&#39;</span><span class="token punctuation">,</span> farmBoundaryName<span class="token punctuation">)</span><span class="token punctuation">;</span>
    
    overlay<span class="token punctuation">.</span><span class="token function">setPosition</span><span class="token punctuation">(</span>coordinate<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">const</span> farmArea <span class="token operator">=</span> <span class="token function">getFarmArea</span><span class="token punctuation">(</span>farmBoundaryName<span class="token punctuation">)</span><span class="token punctuation">;</span>
    
    <span class="token keyword">const</span> farmData <span class="token operator">=</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">key</span><span class="token operator">:</span> <span class="token string">&quot;试验点位置&quot;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">value</span><span class="token operator">:</span> farmBoundaryName
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">key</span><span class="token operator">:</span> <span class="token string">&quot;面积&quot;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>farmArea<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string"> 亩</span><span class="token template-punctuation string">\`</span></span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">]</span><span class="token punctuation">;</span>
    
    grazingDataArr<span class="token punctuation">.</span>value <span class="token operator">=</span> farmData<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token doc-comment comment">/**
 * 创建弹窗关闭处理器
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>Object<span class="token punctuation">}</span></span> <span class="token parameter">options</span> - 配置选项
 * <span class="token keyword">@returns</span> <span class="token class-name"><span class="token punctuation">{</span>Function<span class="token punctuation">}</span></span> 返回关闭事件处理函数
 */</span>
<span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">createPopupCloser</span><span class="token punctuation">(</span><span class="token parameter">options</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token punctuation">{</span> overlay<span class="token punctuation">,</span> globalClearLayer<span class="token punctuation">,</span> catPannel <span class="token punctuation">}</span> <span class="token operator">=</span> options<span class="token punctuation">;</span>

  <span class="token keyword">return</span> <span class="token keyword">function</span> <span class="token function">handlePopupClose</span><span class="token punctuation">(</span><span class="token parameter">e</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    e<span class="token punctuation">.</span><span class="token function">preventDefault</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    overlay<span class="token punctuation">.</span><span class="token function">setPosition</span><span class="token punctuation">(</span><span class="token keyword">undefined</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    
    <span class="token keyword">if</span> <span class="token punctuation">(</span>globalClearLayer<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      globalClearLayer<span class="token punctuation">.</span><span class="token function">getFeatures</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">clear</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    
    catPannel<span class="token punctuation">.</span>value <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span> 
</code></pre></div><h3 id="olutil" tabindex="-1"><a class="header-anchor" href="#olutil" aria-hidden="true">#</a> olUtil</h3><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">import</span> Feature <span class="token keyword">from</span> <span class="token string">&#39;ol/Feature&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> Point <span class="token keyword">from</span> <span class="token string">&#39;ol/geom/Point&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> Icon<span class="token punctuation">,</span> Style<span class="token punctuation">,</span> Fill<span class="token punctuation">,</span> Stroke<span class="token punctuation">,</span> Circle<span class="token punctuation">,</span> Text <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;ol/style&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> VectorSource <span class="token keyword">from</span> <span class="token string">&#39;ol/source/Vector&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> Vector <span class="token keyword">as</span> VectorLayer <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;ol/layer&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> NetIcons <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@/utils/icons.js&#39;</span>

<span class="token doc-comment comment">/**
 * 创建自定义标记点图层
 * 该函数用于在地图上创建带有图标和标签的标记点图层
 * 
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>Array<span class="token punctuation">}</span></span> <span class="token parameter">geometry</span> - 经纬度坐标数组，格式：[[lng1, lat1], [lng2, lat2], ...]
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>string<span class="token punctuation">}</span></span> <span class="token parameter">img</span> - 图标路径或SVG字符串
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>Array<span class="token operator">|</span>string<span class="token punctuation">}</span></span> <span class="token parameter">label</span> - 标签文本数组或单个文本
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>Object<span class="token punctuation">}</span></span> <span class="token parameter">options</span> - 配置选项
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>Object<span class="token punctuation">}</span></span> <span class="token parameter">options<span class="token punctuation">.</span>icon</span> - 图标配置
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span> <span class="token parameter">options<span class="token punctuation">.</span>icon<span class="token punctuation">.</span>size</span> - 图标大小（像素）
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>Array<span class="token punctuation">}</span></span> <span class="token parameter">options<span class="token punctuation">.</span>icon<span class="token punctuation">.</span>anchor</span> - 图标锚点，默认为[0.5, 0.5]（图标中心点）
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>Object<span class="token punctuation">}</span></span> <span class="token parameter">options<span class="token punctuation">.</span>text</span> - 文本配置
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>string<span class="token punctuation">}</span></span> <span class="token parameter">options<span class="token punctuation">.</span>text<span class="token punctuation">.</span>font</span> - 字体样式，例如：&#39;16px Arial&#39;
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>string<span class="token punctuation">}</span></span> <span class="token parameter">options<span class="token punctuation">.</span>text<span class="token punctuation">.</span>color</span> - 文本颜色，例如：&#39;#fff&#39;
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span> <span class="token parameter">options<span class="token punctuation">.</span>text<span class="token punctuation">.</span>offsetY</span> - 文本Y轴偏移量，负值向上偏移
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>string<span class="token punctuation">}</span></span> <span class="token parameter">options<span class="token punctuation">.</span>text<span class="token punctuation">.</span>background</span> - 文本背景色，例如：&#39;rgba(0,0,0,0.6)&#39;
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>Array<span class="token punctuation">}</span></span> <span class="token parameter">options<span class="token punctuation">.</span>text<span class="token punctuation">.</span>padding</span> - 文本内边距，例如：[2, 4]
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>Object<span class="token punctuation">}</span></span> <span class="token parameter">options<span class="token punctuation">.</span>hover</span> - 悬停效果配置
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span> <span class="token parameter">options<span class="token punctuation">.</span>hover<span class="token punctuation">.</span>scale</span> - 悬停时图标缩放比例
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>string<span class="token punctuation">}</span></span> <span class="token parameter">options<span class="token punctuation">.</span>hover<span class="token punctuation">.</span>color</span> - 悬停时文本颜色
 * <span class="token keyword">@returns</span> <span class="token class-name"><span class="token punctuation">{</span>Object<span class="token punctuation">}</span></span> 返回包含图层对象和相关方法的对象
 */</span>
<span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">renderMakerCustom</span><span class="token punctuation">(</span>
  <span class="token parameter">geometry <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">115.1</span><span class="token punctuation">,</span> <span class="token number">30</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  img<span class="token punctuation">,</span>
  label<span class="token punctuation">,</span>
  options <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span></span>
<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// 默认配置</span>
  <span class="token keyword">const</span> defaultOptions <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">icon</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">size</span><span class="token operator">:</span> <span class="token number">32</span><span class="token punctuation">,</span>  <span class="token comment">// 调整图标大小为更合适的尺寸</span>
      <span class="token literal-property property">anchor</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">0.5</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">]</span>  <span class="token comment">// 修改锚点位置，使图标底部中心对齐坐标点</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">text</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">font</span><span class="token operator">:</span> <span class="token string">&#39;bold 14px 微软雅黑&#39;</span><span class="token punctuation">,</span>  <span class="token comment">// 使用更清晰的字体</span>
      <span class="token literal-property property">color</span><span class="token operator">:</span> <span class="token string">&#39;#000&#39;</span><span class="token punctuation">,</span>  <span class="token comment">// 使用黑色文字</span>
      <span class="token literal-property property">offsetY</span><span class="token operator">:</span> <span class="token operator">-</span><span class="token number">40</span><span class="token punctuation">,</span>  <span class="token comment">// 增加文字与图标的距离</span>
      <span class="token literal-property property">background</span><span class="token operator">:</span> <span class="token string">&#39;rgba(255,255,255,0.8)&#39;</span><span class="token punctuation">,</span>  <span class="token comment">// 使用白色半透明背景</span>
      <span class="token literal-property property">padding</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">8</span><span class="token punctuation">]</span><span class="token punctuation">,</span>  <span class="token comment">// 增加文字内边距</span>
      <span class="token literal-property property">stroke</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">color</span><span class="token operator">:</span> <span class="token string">&#39;#fff&#39;</span><span class="token punctuation">,</span>  <span class="token comment">// 白色描边</span>
        <span class="token literal-property property">width</span><span class="token operator">:</span> <span class="token number">4</span>  <span class="token comment">// 增加描边宽度</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">hover</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">scale</span><span class="token operator">:</span> <span class="token number">1.2</span><span class="token punctuation">,</span>
      <span class="token literal-property property">color</span><span class="token operator">:</span> <span class="token string">&#39;#ff0000&#39;</span><span class="token punctuation">,</span>  <span class="token comment">// 悬停时文字变红</span>
      <span class="token literal-property property">duration</span><span class="token operator">:</span> <span class="token number">200</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>

  <span class="token comment">// 合并用户配置和默认配置</span>
  <span class="token keyword">const</span> config <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">icon</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token operator">...</span>defaultOptions<span class="token punctuation">.</span>icon<span class="token punctuation">,</span> <span class="token operator">...</span>options<span class="token punctuation">.</span>icon <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">text</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token operator">...</span>defaultOptions<span class="token punctuation">.</span>text<span class="token punctuation">,</span> <span class="token operator">...</span>options<span class="token punctuation">.</span>text <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">hover</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token operator">...</span>defaultOptions<span class="token punctuation">.</span>hover<span class="token punctuation">,</span> <span class="token operator">...</span>options<span class="token punctuation">.</span>hover <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>

  <span class="token comment">// 创建样式缓存对象</span>
  <span class="token keyword">const</span> styleCache <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">normal</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">hover</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>

  <span class="token doc-comment comment">/**
   * 创建标记点样式
   * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>Feature<span class="token punctuation">}</span></span> <span class="token parameter">feature</span> - OpenLayers要素对象
   * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>boolean<span class="token punctuation">}</span></span> <span class="token parameter">isHover</span> - 是否为悬停状态
   * <span class="token keyword">@returns</span> <span class="token class-name"><span class="token punctuation">{</span>Style<span class="token punctuation">}</span></span> OpenLayers样式对象
   */</span>
  <span class="token keyword">const</span> <span class="token function-variable function">createStyle</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">feature<span class="token punctuation">,</span> isHover <span class="token operator">=</span> <span class="token boolean">false</span></span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> name <span class="token operator">=</span> feature<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">&#39;name&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">const</span> cacheKey <span class="token operator">=</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>name<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">_</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>isHover<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">;</span>
    
    <span class="token keyword">if</span> <span class="token punctuation">(</span>styleCache<span class="token punctuation">[</span>isHover <span class="token operator">?</span> <span class="token string">&#39;hover&#39;</span> <span class="token operator">:</span> <span class="token string">&#39;normal&#39;</span><span class="token punctuation">]</span><span class="token punctuation">[</span>cacheKey<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> styleCache<span class="token punctuation">[</span>isHover <span class="token operator">?</span> <span class="token string">&#39;hover&#39;</span> <span class="token operator">:</span> <span class="token string">&#39;normal&#39;</span><span class="token punctuation">]</span><span class="token punctuation">[</span>cacheKey<span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">const</span> scale <span class="token operator">=</span> isHover <span class="token operator">?</span> config<span class="token punctuation">.</span>hover<span class="token punctuation">.</span>scale <span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">;</span>
    <span class="token keyword">const</span> textColor <span class="token operator">=</span> isHover <span class="token operator">?</span> config<span class="token punctuation">.</span>hover<span class="token punctuation">.</span>color <span class="token operator">:</span> config<span class="token punctuation">.</span>text<span class="token punctuation">.</span>color<span class="token punctuation">;</span>

    <span class="token comment">// 创建样式对象</span>
    <span class="token keyword">const</span> style <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Style</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      <span class="token comment">// 图标样式</span>
      <span class="token literal-property property">image</span><span class="token operator">:</span> <span class="token keyword">new</span> <span class="token class-name">Icon</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
        <span class="token literal-property property">anchor</span><span class="token operator">:</span> config<span class="token punctuation">.</span>icon<span class="token punctuation">.</span>anchor<span class="token punctuation">,</span>
        <span class="token literal-property property">src</span><span class="token operator">:</span> <span class="token string">&quot;data:image/svg+xml,&quot;</span> <span class="token operator">+</span> <span class="token function">encodeURIComponent</span><span class="token punctuation">(</span>NetIcons<span class="token punctuation">.</span>exchange<span class="token punctuation">)</span><span class="token punctuation">,</span>
        <span class="token literal-property property">width</span><span class="token operator">:</span> config<span class="token punctuation">.</span>icon<span class="token punctuation">.</span>size<span class="token punctuation">,</span>
        <span class="token literal-property property">height</span><span class="token operator">:</span> config<span class="token punctuation">.</span>icon<span class="token punctuation">.</span>size<span class="token punctuation">,</span>
         <span class="token literal-property property">crossOrigin</span><span class="token operator">:</span> <span class="token string">&#39;anonymous&#39;</span>  <span class="token comment">// 添加跨域支持</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
      <span class="token comment">// 文本样式</span>
      <span class="token literal-property property">text</span><span class="token operator">:</span> <span class="token keyword">new</span> <span class="token class-name">Text</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
        <span class="token literal-property property">text</span><span class="token operator">:</span> name<span class="token punctuation">,</span>
        <span class="token literal-property property">offsetY</span><span class="token operator">:</span> config<span class="token punctuation">.</span>text<span class="token punctuation">.</span>offsetY<span class="token punctuation">,</span>
        <span class="token literal-property property">font</span><span class="token operator">:</span> config<span class="token punctuation">.</span>text<span class="token punctuation">.</span>font<span class="token punctuation">,</span>
        <span class="token literal-property property">fill</span><span class="token operator">:</span> <span class="token keyword">new</span> <span class="token class-name">Fill</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
          <span class="token literal-property property">color</span><span class="token operator">:</span> textColor
        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
        <span class="token literal-property property">stroke</span><span class="token operator">:</span> <span class="token keyword">new</span> <span class="token class-name">Stroke</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
          <span class="token literal-property property">color</span><span class="token operator">:</span> config<span class="token punctuation">.</span>text<span class="token punctuation">.</span>stroke<span class="token punctuation">.</span>color<span class="token punctuation">,</span>
          <span class="token literal-property property">width</span><span class="token operator">:</span> config<span class="token punctuation">.</span>text<span class="token punctuation">.</span>stroke<span class="token punctuation">.</span>width
        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
        <span class="token literal-property property">backgroundFill</span><span class="token operator">:</span> <span class="token keyword">new</span> <span class="token class-name">Fill</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
          <span class="token literal-property property">color</span><span class="token operator">:</span> config<span class="token punctuation">.</span>text<span class="token punctuation">.</span>background
        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
        <span class="token literal-property property">padding</span><span class="token operator">:</span> config<span class="token punctuation">.</span>text<span class="token punctuation">.</span>padding<span class="token punctuation">,</span>
        <span class="token literal-property property">textAlign</span><span class="token operator">:</span> <span class="token string">&#39;center&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">textBaseline</span><span class="token operator">:</span> <span class="token string">&#39;middle&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">offsetX</span><span class="token operator">:</span> <span class="token number">0</span>  <span class="token comment">// 确保文本水平居中</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">// 缓存样式</span>
    styleCache<span class="token punctuation">[</span>isHover <span class="token operator">?</span> <span class="token string">&#39;hover&#39;</span> <span class="token operator">:</span> <span class="token string">&#39;normal&#39;</span><span class="token punctuation">]</span><span class="token punctuation">[</span>cacheKey<span class="token punctuation">]</span> <span class="token operator">=</span> style<span class="token punctuation">;</span>
    <span class="token keyword">return</span> style<span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>

  <span class="token comment">// 创建标记点要素</span>
  <span class="token keyword">const</span> markers <span class="token operator">=</span> geometry<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">coord<span class="token punctuation">,</span> index</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> name <span class="token operator">=</span> Array<span class="token punctuation">.</span><span class="token function">isArray</span><span class="token punctuation">(</span>label<span class="token punctuation">)</span> <span class="token operator">?</span> label<span class="token punctuation">[</span>index<span class="token punctuation">]</span> <span class="token operator">:</span> label<span class="token punctuation">;</span>
    <span class="token keyword">const</span> feature <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Feature</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      <span class="token literal-property property">geometry</span><span class="token operator">:</span> <span class="token keyword">new</span> <span class="token class-name">Point</span><span class="token punctuation">(</span>coord<span class="token punctuation">)</span><span class="token punctuation">,</span>
      <span class="token literal-property property">name</span><span class="token operator">:</span> name<span class="token punctuation">,</span>
      <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">&#39;icon&#39;</span><span class="token punctuation">,</span>
      <span class="token literal-property property">properties</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">index</span><span class="token operator">:</span> index<span class="token punctuation">,</span>
        <span class="token literal-property property">originalCoord</span><span class="token operator">:</span> coord
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    
    <span class="token comment">// 直接设置样式，参考 renderMaker 的方式</span>
    feature<span class="token punctuation">.</span><span class="token function">setStyle</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Style</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      <span class="token literal-property property">image</span><span class="token operator">:</span> <span class="token keyword">new</span> <span class="token class-name">Icon</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
        <span class="token literal-property property">anchor</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">0.5</span><span class="token punctuation">,</span> <span class="token number">0.5</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token literal-property property">src</span><span class="token operator">:</span> <span class="token string">&quot;data:image/svg+xml,&quot;</span> <span class="token operator">+</span> <span class="token function">encodeURIComponent</span><span class="token punctuation">(</span>NetIcons<span class="token punctuation">.</span>exchange<span class="token punctuation">)</span><span class="token punctuation">,</span>
        <span class="token literal-property property">width</span><span class="token operator">:</span> <span class="token number">50</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
      <span class="token literal-property property">text</span><span class="token operator">:</span> <span class="token keyword">new</span> <span class="token class-name">Text</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
        <span class="token literal-property property">text</span><span class="token operator">:</span> name<span class="token punctuation">,</span>
        <span class="token literal-property property">offsetY</span><span class="token operator">:</span> <span class="token operator">-</span><span class="token number">35</span><span class="token punctuation">,</span>
        <span class="token literal-property property">font</span><span class="token operator">:</span> <span class="token string">&#39;20px Verdana,sans-serif&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">fill</span><span class="token operator">:</span> <span class="token keyword">new</span> <span class="token class-name">Fill</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
          <span class="token literal-property property">color</span><span class="token operator">:</span> <span class="token string">&#39;#fff&#39;</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    
    <span class="token keyword">return</span> feature<span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token comment">// 创建矢量数据源</span>
  <span class="token keyword">const</span> vectorSource <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">VectorSource</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">features</span><span class="token operator">:</span> markers
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token comment">// 创建矢量图层</span>
  <span class="token keyword">const</span> vectorLayer <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">VectorLayer</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;customMarkers&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">zIndex</span><span class="token operator">:</span> <span class="token number">11</span><span class="token punctuation">,</span>
    <span class="token literal-property property">source</span><span class="token operator">:</span> vectorSource
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token comment">// 处理鼠标悬停效果</span>
  <span class="token keyword">let</span> hoveredFeature <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
  <span class="token keyword">const</span> <span class="token function-variable function">handlePointerMove</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">evt</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> pixel <span class="token operator">=</span> evt<span class="token punctuation">.</span>pixel<span class="token punctuation">;</span>
    <span class="token keyword">const</span> map <span class="token operator">=</span> evt<span class="token punctuation">.</span>target<span class="token punctuation">;</span>
    
    <span class="token keyword">const</span> hit <span class="token operator">=</span> map<span class="token punctuation">.</span><span class="token function">forEachFeatureAtPixel</span><span class="token punctuation">(</span>pixel<span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">feature<span class="token punctuation">,</span> layer</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>layer <span class="token operator">===</span> vectorLayer<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> feature<span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
      <span class="token keyword">return</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">if</span> <span class="token punctuation">(</span>hit <span class="token operator">!==</span> hoveredFeature<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>hoveredFeature<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// 恢复之前悬停要素的样式</span>
        hoveredFeature<span class="token punctuation">.</span><span class="token function">setStyle</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Style</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
          <span class="token literal-property property">image</span><span class="token operator">:</span> <span class="token keyword">new</span> <span class="token class-name">Icon</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
            <span class="token literal-property property">anchor</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">0.5</span><span class="token punctuation">,</span> <span class="token number">0.5</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
            <span class="token literal-property property">src</span><span class="token operator">:</span> <span class="token string">&quot;data:image/svg+xml,&quot;</span> <span class="token operator">+</span> <span class="token function">encodeURIComponent</span><span class="token punctuation">(</span>NetIcons<span class="token punctuation">.</span>exchange<span class="token punctuation">)</span><span class="token punctuation">,</span>
            <span class="token literal-property property">width</span><span class="token operator">:</span> <span class="token number">50</span>
          <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
          <span class="token literal-property property">text</span><span class="token operator">:</span> <span class="token keyword">new</span> <span class="token class-name">Text</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
            <span class="token literal-property property">text</span><span class="token operator">:</span> hoveredFeature<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">&#39;name&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
            <span class="token literal-property property">offsetY</span><span class="token operator">:</span> <span class="token operator">-</span><span class="token number">35</span><span class="token punctuation">,</span>
            <span class="token literal-property property">font</span><span class="token operator">:</span> <span class="token string">&#39;20px Verdana,sans-serif&#39;</span><span class="token punctuation">,</span>
            <span class="token literal-property property">fill</span><span class="token operator">:</span> <span class="token keyword">new</span> <span class="token class-name">Fill</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
              <span class="token literal-property property">color</span><span class="token operator">:</span> <span class="token string">&#39;#fff&#39;</span>
            <span class="token punctuation">}</span><span class="token punctuation">)</span>
          <span class="token punctuation">}</span><span class="token punctuation">)</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>hit<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// 设置新悬停要素的样式</span>
        hit<span class="token punctuation">.</span><span class="token function">setStyle</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Style</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
          <span class="token literal-property property">image</span><span class="token operator">:</span> <span class="token keyword">new</span> <span class="token class-name">Icon</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
            <span class="token literal-property property">anchor</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">0.5</span><span class="token punctuation">,</span> <span class="token number">0.5</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
            <span class="token literal-property property">src</span><span class="token operator">:</span> <span class="token string">&quot;data:image/svg+xml,&quot;</span> <span class="token operator">+</span> <span class="token function">encodeURIComponent</span><span class="token punctuation">(</span>NetIcons<span class="token punctuation">.</span>exchange<span class="token punctuation">)</span><span class="token punctuation">,</span>
            <span class="token literal-property property">width</span><span class="token operator">:</span> <span class="token number">60</span>  <span class="token comment">// 悬停时稍微放大</span>
          <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
          <span class="token literal-property property">text</span><span class="token operator">:</span> <span class="token keyword">new</span> <span class="token class-name">Text</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
            <span class="token literal-property property">text</span><span class="token operator">:</span> hit<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">&#39;name&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
            <span class="token literal-property property">offsetY</span><span class="token operator">:</span> <span class="token operator">-</span><span class="token number">35</span><span class="token punctuation">,</span>
            <span class="token literal-property property">font</span><span class="token operator">:</span> <span class="token string">&#39;20px Verdana,sans-serif&#39;</span><span class="token punctuation">,</span>
            <span class="token literal-property property">fill</span><span class="token operator">:</span> <span class="token keyword">new</span> <span class="token class-name">Fill</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
              <span class="token literal-property property">color</span><span class="token operator">:</span> <span class="token string">&#39;#ffeb3b&#39;</span>  <span class="token comment">// 悬停时改变颜色</span>
            <span class="token punctuation">}</span><span class="token punctuation">)</span>
          <span class="token punctuation">}</span><span class="token punctuation">)</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
      hoveredFeature <span class="token operator">=</span> hit<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>

  <span class="token keyword">return</span> <span class="token punctuation">{</span>
    vectorLayer<span class="token punctuation">,</span>
    vectorSource<span class="token punctuation">,</span>
    handlePointerMove<span class="token punctuation">,</span>
    <span class="token function-variable function">updateMarker</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token parameter">index<span class="token punctuation">,</span> newCoord</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      <span class="token keyword">const</span> feature <span class="token operator">=</span> markers<span class="token punctuation">[</span>index<span class="token punctuation">]</span><span class="token punctuation">;</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>feature<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        feature<span class="token punctuation">.</span><span class="token function">getGeometry</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">setCoordinates</span><span class="token punctuation">(</span>newCoord<span class="token punctuation">)</span><span class="token punctuation">;</span>
        feature<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span><span class="token string">&#39;properties&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
          <span class="token operator">...</span>feature<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">&#39;properties&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
          <span class="token literal-property property">originalCoord</span><span class="token operator">:</span> newCoord
        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">// 更新后重新设置样式</span>
        feature<span class="token punctuation">.</span><span class="token function">setStyle</span><span class="token punctuation">(</span><span class="token function">createStyle</span><span class="token punctuation">(</span>feature<span class="token punctuation">,</span> <span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token function-variable function">addMarker</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token parameter">coord<span class="token punctuation">,</span> name</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      <span class="token keyword">const</span> feature <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Feature</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
        <span class="token literal-property property">geometry</span><span class="token operator">:</span> <span class="token keyword">new</span> <span class="token class-name">Point</span><span class="token punctuation">(</span>coord<span class="token punctuation">)</span><span class="token punctuation">,</span>
        <span class="token literal-property property">name</span><span class="token operator">:</span> name<span class="token punctuation">,</span>
        <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">&#39;icon&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">properties</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token literal-property property">index</span><span class="token operator">:</span> markers<span class="token punctuation">.</span>length<span class="token punctuation">,</span>
          <span class="token literal-property property">originalCoord</span><span class="token operator">:</span> coord
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      feature<span class="token punctuation">.</span><span class="token function">setStyle</span><span class="token punctuation">(</span><span class="token function">createStyle</span><span class="token punctuation">(</span>feature<span class="token punctuation">,</span> <span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      vectorSource<span class="token punctuation">.</span><span class="token function">addFeature</span><span class="token punctuation">(</span>feature<span class="token punctuation">)</span><span class="token punctuation">;</span>
      markers<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>feature<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token function-variable function">removeMarker</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token parameter">index</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>index <span class="token operator">&gt;=</span> <span class="token number">0</span> <span class="token operator">&amp;&amp;</span> index <span class="token operator">&lt;</span> markers<span class="token punctuation">.</span>length<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        vectorSource<span class="token punctuation">.</span><span class="token function">removeFeature</span><span class="token punctuation">(</span>markers<span class="token punctuation">[</span>index<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        markers<span class="token punctuation">.</span><span class="token function">splice</span><span class="token punctuation">(</span>index<span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token doc-comment comment">/**
 *  [[120.004189, 49.299819]],
      &quot;src/assets/img/logo.png&quot;,
    [&quot;谢尔塔拉试验区&quot;]
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>经纬度<span class="token punctuation">}</span></span> <span class="token parameter">geometry</span> 
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>图片路径<span class="token punctuation">}</span></span> <span class="token parameter">img</span> 
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>文字<span class="token punctuation">}</span></span> <span class="token parameter">label</span> 
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>自定义的data 数据 <span class="token punctuation">}</span></span> <span class="token parameter">extData</span> 
 * <span class="token keyword">@returns</span> 
 */</span>
<span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">renderMaker</span><span class="token punctuation">(</span>geometry <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">115.1</span><span class="token punctuation">,</span> <span class="token number">30</span><span class="token punctuation">]</span><span class="token punctuation">,</span> img<span class="token punctuation">,</span> label<span class="token punctuation">,</span>extData <span class="token operator">=</span> <span class="token string">&#39;自定义 扩展Data&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> ciconStyle <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Style</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
        <span class="token literal-property property">image</span><span class="token operator">:</span> <span class="token keyword">new</span> <span class="token class-name">Icon</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
            <span class="token literal-property property">anchor</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">0.5</span><span class="token punctuation">,</span> <span class="token number">0.5</span><span class="token punctuation">]</span><span class="token punctuation">,</span>

            <span class="token literal-property property">src</span><span class="token operator">:</span> <span class="token string">&quot;data:image/svg+xml,&quot;</span> <span class="token operator">+</span> <span class="token function">encodeURIComponent</span><span class="token punctuation">(</span>NetIcons<span class="token punctuation">.</span>exchange<span class="token punctuation">)</span><span class="token punctuation">,</span>
            <span class="token literal-property property">width</span><span class="token operator">:</span> <span class="token number">50</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
        <span class="token literal-property property">text</span><span class="token operator">:</span> <span class="token keyword">new</span> <span class="token class-name">Text</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
            <span class="token literal-property property">text</span><span class="token operator">:</span> label <span class="token punctuation">,</span>
            <span class="token literal-property property">offsetY</span><span class="token operator">:</span> <span class="token operator">-</span><span class="token number">35</span><span class="token punctuation">,</span>
            <span class="token literal-property property">font</span><span class="token operator">:</span> <span class="token string">&#39;20px Verdana,sans-serif&#39;</span><span class="token punctuation">,</span> <span class="token comment">//字体大小和字体            </span>
            <span class="token literal-property property">fill</span><span class="token operator">:</span> <span class="token keyword">new</span> <span class="token class-name">Fill</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token comment">//文字填充颜色</span>
                <span class="token literal-property property">color</span><span class="token operator">:</span> <span class="token string">&#39;#fff&#39;</span>
            <span class="token punctuation">}</span><span class="token punctuation">)</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>




    <span class="token keyword">var</span> ciconStylea <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Style</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
        <span class="token literal-property property">image</span><span class="token operator">:</span> <span class="token keyword">new</span> <span class="token class-name">Circle</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
            <span class="token literal-property property">radius</span><span class="token operator">:</span> <span class="token number">15</span><span class="token punctuation">,</span><span class="token comment">//半径</span>
            <span class="token literal-property property">fill</span><span class="token operator">:</span> <span class="token keyword">new</span> <span class="token class-name">Fill</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token comment">//填充样式</span>
                <span class="token literal-property property">color</span><span class="token operator">:</span> <span class="token string">&#39;#ff6688&#39;</span><span class="token punctuation">,</span>
            <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
            <span class="token literal-property property">stroke</span><span class="token operator">:</span> <span class="token keyword">new</span> <span class="token class-name">Stroke</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token comment">//边界样式</span>
                <span class="token literal-property property">color</span><span class="token operator">:</span> <span class="token string">&#39;#555555&#39;</span><span class="token punctuation">,</span>
                <span class="token literal-property property">width</span><span class="token operator">:</span> <span class="token number">1</span>
            <span class="token punctuation">}</span><span class="token punctuation">)</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
        <span class="token literal-property property">text</span><span class="token operator">:</span> <span class="token keyword">new</span> <span class="token class-name">Text</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
            <span class="token literal-property property">textAlign</span><span class="token operator">:</span> <span class="token string">&#39;center&#39;</span><span class="token punctuation">,</span>
            <span class="token literal-property property">textBaseline</span><span class="token operator">:</span> <span class="token string">&#39;top&#39;</span><span class="token punctuation">,</span>
            <span class="token comment">// font: font,</span>
            <span class="token literal-property property">offsetX</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
            <span class="token literal-property property">offsetY</span><span class="token operator">:</span> <span class="token number">20</span><span class="token punctuation">,</span>
            <span class="token literal-property property">backgroundFill</span><span class="token operator">:</span> <span class="token keyword">new</span> <span class="token class-name">Fill</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
                <span class="token literal-property property">color</span><span class="token operator">:</span> <span class="token string">&#39;#67C23A&#39;</span>
            <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
            <span class="token literal-property property">padding</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
            <span class="token literal-property property">text</span><span class="token operator">:</span> label<span class="token punctuation">,</span>
            <span class="token literal-property property">fill</span><span class="token operator">:</span> <span class="token keyword">new</span> <span class="token class-name">Fill</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
                <span class="token literal-property property">color</span><span class="token operator">:</span> <span class="token string">&#39;white&#39;</span>
            <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>

    <span class="token keyword">var</span> iconStyle <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Style</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
        <span class="token literal-property property">image</span><span class="token operator">:</span> <span class="token keyword">new</span> <span class="token class-name">Icon</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
            <span class="token literal-property property">anchor</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">0.5</span><span class="token punctuation">,</span> <span class="token number">0.5</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
            <span class="token literal-property property">anchorXUnits</span><span class="token operator">:</span> <span class="token string">&#39;fraction&#39;</span><span class="token punctuation">,</span>
            <span class="token literal-property property">anchorYUnits</span><span class="token operator">:</span> <span class="token string">&#39;pixels&#39;</span><span class="token punctuation">,</span>
            <span class="token literal-property property">crossOrigin</span><span class="token operator">:</span> <span class="token string">&#39;anonymous&#39;</span><span class="token punctuation">,</span>
            <span class="token literal-property property">src</span><span class="token operator">:</span> img
        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
        <span class="token comment">// 设置marker的label</span>
        <span class="token literal-property property">text</span><span class="token operator">:</span> <span class="token keyword">new</span> <span class="token class-name">Text</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
            <span class="token literal-property property">textAlign</span><span class="token operator">:</span> <span class="token string">&#39;center&#39;</span><span class="token punctuation">,</span>
            <span class="token literal-property property">textBaseline</span><span class="token operator">:</span> <span class="token string">&#39;top&#39;</span><span class="token punctuation">,</span>
            <span class="token comment">// font: font,</span>
            <span class="token literal-property property">offsetX</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
            <span class="token literal-property property">offsetY</span><span class="token operator">:</span> <span class="token number">20</span><span class="token punctuation">,</span>
            <span class="token literal-property property">backgroundFill</span><span class="token operator">:</span> <span class="token keyword">new</span> <span class="token class-name">Fill</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
                <span class="token literal-property property">color</span><span class="token operator">:</span> <span class="token string">&#39;#67C23A&#39;</span>
            <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
            <span class="token literal-property property">padding</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
            <span class="token literal-property property">text</span><span class="token operator">:</span> label<span class="token punctuation">,</span>
            <span class="token literal-property property">fill</span><span class="token operator">:</span> <span class="token keyword">new</span> <span class="token class-name">Fill</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
                <span class="token literal-property property">color</span><span class="token operator">:</span> <span class="token string">&#39;white&#39;</span>
            <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">let</span> markers <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Array</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>


    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> index <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> index <span class="token operator">&lt;</span> geometry<span class="token punctuation">.</span>length<span class="token punctuation">;</span> index<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">const</span> element <span class="token operator">=</span> geometry<span class="token punctuation">[</span>index<span class="token punctuation">]</span><span class="token punctuation">;</span>
        <span class="token keyword">let</span> v <span class="token operator">=</span>  <span class="token keyword">new</span> <span class="token class-name">Feature</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
            <span class="token literal-property property">geometry</span><span class="token operator">:</span> <span class="token keyword">new</span> <span class="token class-name">Point</span><span class="token punctuation">(</span>element<span class="token punctuation">)</span><span class="token punctuation">,</span>
            <span class="token literal-property property">name</span><span class="token operator">:</span> label<span class="token punctuation">[</span>index<span class="token punctuation">]</span><span class="token punctuation">,</span>
            <span class="token literal-property property">population</span><span class="token operator">:</span> <span class="token number">4000</span><span class="token punctuation">,</span>
            <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">&#39;icon&#39;</span><span class="token punctuation">,</span>
            <span class="token literal-property property">rainfall</span><span class="token operator">:</span> <span class="token number">500</span><span class="token punctuation">,</span>
            <span class="token literal-property property">data</span><span class="token operator">:</span>extData
        <span class="token punctuation">}</span><span class="token punctuation">)</span>
        v<span class="token punctuation">.</span><span class="token function">setStyle</span><span class="token punctuation">(</span> <span class="token keyword">new</span> <span class="token class-name">Style</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
            <span class="token literal-property property">image</span><span class="token operator">:</span> <span class="token keyword">new</span> <span class="token class-name">Icon</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
                <span class="token literal-property property">anchor</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">0.5</span><span class="token punctuation">,</span> <span class="token number">0.5</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
                <span class="token literal-property property">src</span><span class="token operator">:</span> <span class="token string">&quot;data:image/svg+xml,&quot;</span> <span class="token operator">+</span> <span class="token function">encodeURIComponent</span><span class="token punctuation">(</span>NetIcons<span class="token punctuation">.</span>exchange<span class="token punctuation">)</span><span class="token punctuation">,</span>
                <span class="token literal-property property">width</span><span class="token operator">:</span> <span class="token number">50</span>
            <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
            <span class="token literal-property property">text</span><span class="token operator">:</span> <span class="token keyword">new</span> <span class="token class-name">Text</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
                <span class="token literal-property property">text</span><span class="token operator">:</span> label<span class="token punctuation">[</span>index<span class="token punctuation">]</span><span class="token punctuation">,</span>
                <span class="token literal-property property">offsetY</span><span class="token operator">:</span> <span class="token operator">-</span><span class="token number">35</span><span class="token punctuation">,</span>
                <span class="token literal-property property">font</span><span class="token operator">:</span> <span class="token string">&#39;20px Verdana,sans-serif&#39;</span><span class="token punctuation">,</span> <span class="token comment">//字体大小和字体            </span>
                <span class="token literal-property property">fill</span><span class="token operator">:</span> <span class="token keyword">new</span> <span class="token class-name">Fill</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token comment">//文字填充颜色</span>
                    <span class="token literal-property property">color</span><span class="token operator">:</span> <span class="token string">&#39;#fff&#39;</span>
                <span class="token punctuation">}</span><span class="token punctuation">)</span>
            <span class="token punctuation">}</span><span class="token punctuation">)</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
        markers<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>v <span class="token punctuation">)</span>
    <span class="token punctuation">}</span>

    <span class="token comment">// 创建要素对象</span>



    <span class="token comment">// 创建Style</span>
   


    <span class="token comment">/*
     const routeFeature = new Feature({
          type: &#39;route&#39;,
          geometry: route,
        });
        const startMarker = new Feature({
          type: &#39;icon&#39;,
          geometry: new Point(route.getFirstCoordinate()),
        });
        const endMarker = new Feature({
          type: &#39;icon&#39;,
          geometry: new Point(route.getLastCoordinate()),
        });
        const position = startMarker.getGeometry().clone();
        const geoMarker = new Feature({
          type: &#39;geoMarker&#39;,
          geometry: position,
        });
    
        
        const vectorLayera = new VectorLayer({
            source: new VectorSource({
                features: [routeFeature, geoMarker, startMarker, endMarker],
            }),
            style: function (feature) {
                return styles[feature.get(&#39;type&#39;)];
            },
            });
            
    
    */</span>



    <span class="token keyword">const</span> styles <span class="token operator">=</span> <span class="token punctuation">{</span>
        <span class="token string-property property">&#39;route&#39;</span><span class="token operator">:</span> <span class="token keyword">new</span> <span class="token class-name">Style</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
            <span class="token literal-property property">stroke</span><span class="token operator">:</span> <span class="token keyword">new</span> <span class="token class-name">Stroke</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
                <span class="token literal-property property">width</span><span class="token operator">:</span> <span class="token number">6</span><span class="token punctuation">,</span>
                <span class="token literal-property property">color</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">237</span><span class="token punctuation">,</span> <span class="token number">212</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0.8</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
            <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
        <span class="token string-property property">&#39;icon&#39;</span><span class="token operator">:</span> <span class="token keyword">new</span> <span class="token class-name">Style</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
            <span class="token literal-property property">image</span><span class="token operator">:</span> <span class="token keyword">new</span> <span class="token class-name">Icon</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
                <span class="token literal-property property">anchor</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">0.5</span><span class="token punctuation">,</span> <span class="token number">0.5</span><span class="token punctuation">]</span><span class="token punctuation">,</span>

                <span class="token literal-property property">src</span><span class="token operator">:</span> <span class="token string">&quot;data:image/svg+xml,&quot;</span> <span class="token operator">+</span> <span class="token function">encodeURIComponent</span><span class="token punctuation">(</span>NetIcons<span class="token punctuation">.</span>exchange<span class="token punctuation">)</span><span class="token punctuation">,</span>
                <span class="token literal-property property">width</span><span class="token operator">:</span> <span class="token number">50</span>
            <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
            <span class="token literal-property property">text</span><span class="token operator">:</span> <span class="token keyword">new</span> <span class="token class-name">Text</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
                <span class="token literal-property property">text</span><span class="token operator">:</span> label<span class="token punctuation">,</span>
                <span class="token literal-property property">offsetY</span><span class="token operator">:</span> <span class="token operator">-</span><span class="token number">35</span><span class="token punctuation">,</span>
                <span class="token literal-property property">font</span><span class="token operator">:</span> <span class="token string">&#39;20px Verdana,sans-serif&#39;</span><span class="token punctuation">,</span> <span class="token comment">//字体大小和字体            </span>
                <span class="token literal-property property">fill</span><span class="token operator">:</span> <span class="token keyword">new</span> <span class="token class-name">Fill</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token comment">//文字填充颜色</span>
                    <span class="token literal-property property">color</span><span class="token operator">:</span> <span class="token string">&#39;#fff&#39;</span>
                <span class="token punctuation">}</span><span class="token punctuation">)</span>
            <span class="token punctuation">}</span><span class="token punctuation">)</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span>

    <span class="token punctuation">}</span><span class="token punctuation">;</span>
    <span class="token keyword">var</span> vectorSource <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">VectorSource</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
        <span class="token literal-property property">features</span><span class="token operator">:</span> markers<span class="token punctuation">,</span>
        <span class="token function-variable function">style</span><span class="token operator">:</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">feature</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span> styles<span class="token punctuation">[</span>feature<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">&#39;type&#39;</span><span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">var</span> vectorLayer <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">VectorLayer</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
        <span class="token literal-property property">zIndex</span><span class="token operator">:</span> <span class="token number">11</span><span class="token punctuation">,</span>
        <span class="token literal-property property">source</span><span class="token operator">:</span> vectorSource
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">return</span> <span class="token punctuation">{</span> vectorLayer <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">/*
  &lt;link rel=&quot;stylesheet&quot; href=&quot;http://127.0.0.1/vac/ol.css&quot; /&gt;
  &lt;script type=&quot;text/javascript&quot; src=&quot;http://127.0.0.1/vac/ol.js&quot;&gt;&lt;/script&gt;
*/</span>

<span class="token doc-comment comment">/**
 * 去指定的 中心点
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>OLMap<span class="token punctuation">}</span></span> <span class="token parameter">glMap</span> 
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span><span class="token operator">*</span><span class="token punctuation">}</span></span> <span class="token parameter">center</span> 
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span><span class="token operator">*</span><span class="token punctuation">}</span></span> <span class="token parameter">duration</span> 
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span><span class="token operator">*</span><span class="token punctuation">}</span></span> <span class="token parameter">zoom</span> 
 */</span>
<span class="token keyword">export</span> <span class="token keyword">const</span> <span class="token function-variable function">cameraCenter</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">glMap<span class="token punctuation">,</span> center <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">116.391093</span><span class="token punctuation">,</span> <span class="token number">39.915697</span><span class="token punctuation">]</span><span class="token punctuation">,</span> duration <span class="token operator">=</span> <span class="token number">1500</span><span class="token punctuation">,</span> zoom <span class="token operator">=</span> <span class="token number">11</span></span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>

    <span class="token keyword">if</span> <span class="token punctuation">(</span>glMap<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        glMap<span class="token punctuation">.</span><span class="token function">getView</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">animate</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
            <span class="token literal-property property">center</span><span class="token operator">:</span> center<span class="token punctuation">,</span>
            <span class="token literal-property property">zoom</span><span class="token operator">:</span> zoom<span class="token punctuation">,</span>
            <span class="token literal-property property">rotation</span><span class="token operator">:</span> <span class="token keyword">undefined</span><span class="token punctuation">,</span>
            <span class="token literal-property property">duration</span><span class="token operator">:</span> duration
        <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><h2 id="方法参数为方法" tabindex="-1"><a class="header-anchor" href="#方法参数为方法" aria-hidden="true">#</a> 方法参数为方法</h2><p><code>createClickHandler</code> 是一个用于创建地图点击事件处理器的工厂函数，它封装了地图上不同图层的点击事件处理逻辑，支持多图层点击优先级处理，并提供了弹窗展示功能。</p><h2 id="技术特点" tabindex="-1"><a class="header-anchor" href="#技术特点" aria-hidden="true">#</a> 技术特点</h2><ol><li><strong>工厂函数模式</strong>：采用工厂函数模式创建事件处理器，便于复用和配置</li><li><strong>多图层支持</strong>：支持处理多个图层的点击事件，包括： <ul><li>标记点图层（Marker Layer）</li><li>基础信息图层（Basic Info Layer）</li><li>农场边界图层（Farm Boundary Layer）</li></ul></li><li><strong>优先级处理</strong>：通过 <code>LAYER_PRIORITY</code> 配置实现图层点击优先级</li><li><strong>弹窗管理</strong>：支持多个弹窗（Overlay）的管理和切换</li><li><strong>数据更新</strong>：支持点击事件触发后的数据更新和展示</li></ol><h2 id="使用方法" tabindex="-1"><a class="header-anchor" href="#使用方法" aria-hidden="true">#</a> 使用方法</h2><h3 id="_1-基本调用" tabindex="-1"><a class="header-anchor" href="#_1-基本调用" aria-hidden="true">#</a> 1. 基本调用</h3><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 在组件中调用</span>
<span class="token keyword">const</span> clickHandler <span class="token operator">=</span> <span class="token function">createClickHandler</span><span class="token punctuation">(</span>map<span class="token punctuation">,</span> <span class="token punctuation">{</span>
  overlay<span class="token punctuation">,</span>           <span class="token comment">// 主弹窗覆盖物</span>
  grazingDataArr<span class="token punctuation">,</span>    <span class="token comment">// 数据数组</span>
  globalClearLayer<span class="token punctuation">,</span>  <span class="token comment">// 清除图层函数</span>
  catPannel<span class="token punctuation">,</span>         <span class="token comment">// 面板状态</span>
  getFarmArea<span class="token punctuation">,</span>       <span class="token comment">// 获取农场面积函数</span>
  updatePlantingData <span class="token comment">// 更新种植数据的方法</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 添加点击事件监听</span>
map<span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span><span class="token string">&#39;click&#39;</span><span class="token punctuation">,</span> clickHandler<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><h3 id="_2-参数说明" tabindex="-1"><a class="header-anchor" href="#_2-参数说明" aria-hidden="true">#</a> 2. 参数说明</h3><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>Map<span class="token punctuation">}</span></span> <span class="token parameter">map</span> - OpenLayers地图实例
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>Object<span class="token punctuation">}</span></span> <span class="token parameter">options</span> - 配置选项
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>Overlay<span class="token punctuation">}</span></span> <span class="token parameter">options<span class="token punctuation">.</span>overlay</span> - 主弹窗覆盖物
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>Ref<span class="token punctuation">}</span></span> <span class="token parameter">options<span class="token punctuation">.</span>grazingDataArr</span> - 数据数组（响应式引用）
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>Function<span class="token punctuation">}</span></span> <span class="token parameter">options<span class="token punctuation">.</span>globalClearLayer</span> - 清除图层函数
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>Ref<span class="token punctuation">}</span></span> <span class="token parameter">options<span class="token punctuation">.</span>catPannel</span> - 面板状态（响应式引用）
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>Function<span class="token punctuation">}</span></span> <span class="token parameter">options<span class="token punctuation">.</span>getFarmArea</span> - 获取农场面积函数
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>Function<span class="token punctuation">}</span></span> <span class="token parameter">options<span class="token punctuation">.</span>updatePlantingData</span> - 更新种植数据的方法
 * <span class="token keyword">@returns</span> <span class="token class-name"><span class="token punctuation">{</span>Function<span class="token punctuation">}</span></span> 返回点击事件处理函数
 */</span>
</code></pre></div><h3 id="_3-图层优先级配置" tabindex="-1"><a class="header-anchor" href="#_3-图层优先级配置" aria-hidden="true">#</a> 3. 图层优先级配置</h3><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">export</span> <span class="token keyword">const</span> <span class="token constant">LAYER_PRIORITY</span> <span class="token operator">=</span> <span class="token punctuation">[</span>
  <span class="token constant">LAYER_NAMES</span><span class="token punctuation">.</span><span class="token constant">MARKER</span><span class="token punctuation">,</span>        <span class="token comment">// 标记点图层优先级最高</span>
  <span class="token constant">LAYER_NAMES</span><span class="token punctuation">.</span><span class="token constant">BASIC_INFO</span><span class="token punctuation">,</span>    <span class="token comment">// 基础信息图层次之</span>
  <span class="token constant">LAYER_NAMES</span><span class="token punctuation">.</span><span class="token constant">FARM_BOUNDARY</span>  <span class="token comment">// 农场边界图层优先级最低</span>
<span class="token punctuation">]</span><span class="token punctuation">;</span>
</code></pre></div><h3 id="_4-事件处理流程" tabindex="-1"><a class="header-anchor" href="#_4-事件处理流程" aria-hidden="true">#</a> 4. 事件处理流程</h3><ol><li><p><strong>点击事件触发</strong>：</p><ul><li>获取点击位置的像素坐标</li><li>收集点击位置的所有要素</li></ul></li><li><p><strong>优先级处理</strong>：</p><ul><li>根据 <code>LAYER_PRIORITY</code> 对点击的要素进行排序</li><li>处理优先级最高的图层点击事件</li></ul></li><li><p><strong>图层特定处理</strong>：</p><ul><li>标记点图层：显示标记点信息</li><li>基础信息图层：显示农场信息和种植数据</li><li>农场边界图层：显示农场边界信息</li></ul></li><li><p><strong>弹窗管理</strong>：</p><ul><li>根据图层类型显示对应的弹窗</li><li>处理弹窗的显示和隐藏</li><li>更新弹窗内容</li></ul></li></ol><h2 id="示例代码" tabindex="-1"><a class="header-anchor" href="#示例代码" aria-hidden="true">#</a> 示例代码</h2><h3 id="在-vue-组件中使用" tabindex="-1"><a class="header-anchor" href="#在-vue-组件中使用" aria-hidden="true">#</a> 在 Vue 组件中使用</h3><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// artificialv1.vue</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> createClickHandler <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@/utils/mapLayers.js&#39;</span><span class="token punctuation">;</span>

<span class="token comment">// 在 setup 中</span>
<span class="token keyword">const</span> clickHandler <span class="token operator">=</span> <span class="token function">createClickHandler</span><span class="token punctuation">(</span>glMap<span class="token punctuation">,</span> <span class="token punctuation">{</span>
  overlay<span class="token punctuation">,</span>
  grazingDataArr<span class="token punctuation">,</span>
  globalClearLayer<span class="token punctuation">,</span>
  catPannel<span class="token punctuation">,</span>
  getFarmArea<span class="token punctuation">,</span>
  updatePlantingData
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 添加点击事件监听</span>
<span class="token function">onMounted</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  glMap<span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span><span class="token string">&#39;click&#39;</span><span class="token punctuation">,</span> clickHandler<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 清理事件监听</span>
<span class="token function">onUnmounted</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  glMap<span class="token punctuation">.</span><span class="token function">un</span><span class="token punctuation">(</span><span class="token string">&#39;click&#39;</span><span class="token punctuation">,</span> clickHandler<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><h3 id="自定义图层处理" tabindex="-1"><a class="header-anchor" href="#自定义图层处理" aria-hidden="true">#</a> 自定义图层处理</h3><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 扩展图层处理</span>
<span class="token keyword">function</span> <span class="token function">handleCustomLayerClick</span><span class="token punctuation">(</span><span class="token parameter">feature<span class="token punctuation">,</span> coordinate</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// 自定义处理逻辑</span>
  <span class="token keyword">const</span> customData <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">key</span><span class="token operator">:</span> <span class="token string">&quot;自定义数据&quot;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">value</span><span class="token operator">:</span> feature<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">&#39;customProperty&#39;</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>
  
  <span class="token comment">// 更新数据</span>
  grazingDataArr<span class="token punctuation">.</span>value <span class="token operator">=</span> <span class="token punctuation">[</span>customData<span class="token punctuation">]</span><span class="token punctuation">;</span>
  
  <span class="token comment">// 显示弹窗</span>
  overlay<span class="token punctuation">.</span><span class="token function">setPosition</span><span class="token punctuation">(</span>coordinate<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div>`,23)]))}const u=s(o,[["render",e],["__file","use_demo.html.vue"]]);export{u as default};
