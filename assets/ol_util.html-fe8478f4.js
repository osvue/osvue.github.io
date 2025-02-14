import{_ as n,p as s,q as a,a1 as p}from"./framework-d81ad7e5.js";const t={},o=p(`<h2 id="_1-动画飞到指定地点" tabindex="-1"><a class="header-anchor" href="#_1-动画飞到指定地点" aria-hidden="true">#</a> <strong>1. 动画飞到指定地点</strong></h2><p><code>ol</code>飞行动画函数，参数为目标点和缩放级别，缩放级别默认为15级。</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@description</span>：动画飞到指定地点
 * <span class="token keyword">@param</span> <span class="token parameter">point</span>
 * <span class="token keyword">@param</span> <span class="token parameter">zoomNum</span>
 */</span>
<span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">flyToPoint</span><span class="token punctuation">(</span><span class="token parameter">point<span class="token punctuation">,</span>zoomNum <span class="token operator">=</span> <span class="token number">15</span></span><span class="token punctuation">)</span><span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>window<span class="token punctuation">.</span>_map<span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">const</span> view <span class="token operator">=</span> window<span class="token punctuation">.</span>_map<span class="token punctuation">.</span><span class="token function">getView</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    view<span class="token punctuation">.</span><span class="token function">animate</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">center</span><span class="token operator">:</span> point <span class="token punctuation">}</span><span class="token punctuation">,</span><span class="token punctuation">{</span> <span class="token literal-property property">zoom</span><span class="token operator">:</span> zoomNum <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><h2 id="_2-鼠标指针类型" tabindex="-1"><a class="header-anchor" href="#_2-鼠标指针类型" aria-hidden="true">#</a> <strong>2. 鼠标指针类型</strong></h2><p>设置鼠标指针类型函数，用于地图绘制时改变鼠标指针。参数为CSS指针类型。</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@description</span>：设置鼠标指针类型
 * <span class="token keyword">@param</span> <span class="token parameter">cursor：鼠标指针类型</span>
 * default(箭头)、help（箭头带问号）
 * wait（转圈）、crosshair（十字）
 * text（文本选择）、move（移动）
 * pointer（点击手势）、grab（抓取手势）
 */</span>
exportfunction <span class="token function">setCursor</span><span class="token punctuation">(</span><span class="token parameter">cursor</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
<span class="token keyword">if</span> <span class="token punctuation">(</span>window<span class="token punctuation">.</span>_map<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> map <span class="token operator">=</span> window<span class="token punctuation">.</span>_map
    <span class="token keyword">const</span> targetEle <span class="token operator">=</span> map<span class="token punctuation">.</span><span class="token function">getTargetElement</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    targetEle<span class="token punctuation">.</span>style<span class="token punctuation">.</span>cursor <span class="token operator">=</span> cursor
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><h2 id="_3-清除目标图层" tabindex="-1"><a class="header-anchor" href="#_3-清除目标图层" aria-hidden="true">#</a> <strong>3. 清除目标图层</strong></h2><p>根据图层名称移除图层。参数<code>layerName</code>为自定义参数名，需要在创建图层时设置<code>layerName</code>属性。</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@description</span>：清除指定图层
 * <span class="token keyword">@param</span> <span class="token parameter">map：地图对象，默认为全局地图对象</span>
 * <span class="token keyword">@param</span> <span class="token parameter">layerName：图层名</span>
 */</span>
<span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">removeLayerByName</span><span class="token punctuation">(</span><span class="token parameter">layerName<span class="token punctuation">,</span>map <span class="token operator">=</span> window<span class="token punctuation">.</span>_map</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
  <span class="token keyword">const</span> layers <span class="token operator">=</span> map<span class="token punctuation">.</span><span class="token function">getLayers</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getArray</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  layers<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token parameter">targetLayer</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> props <span class="token operator">=</span> targetLayer<span class="token punctuation">.</span><span class="token function">getProperties</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>layerName <span class="token operator">===</span> props<span class="token punctuation">[</span><span class="token string">&quot;layerName&quot;</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>map<span class="token punctuation">.</span><span class="token function">removeLayer</span><span class="token punctuation">(</span>targetLayer<span class="token punctuation">)</span><span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre></div><h2 id="_4-清除叠加图层" tabindex="-1"><a class="header-anchor" href="#_4-清除叠加图层" aria-hidden="true">#</a> <strong>4. 清除叠加图层</strong></h2><p>根据叠加图层名称移除叠加图层。参数<code>overName</code>为自定义参数名，需要在创建叠加图层时设置<code>overName</code>属性。</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@description</span>：清除Overlay(叠加图层)
 * <span class="token keyword">@param</span> <span class="token parameter">map：地图对象，默认为全局地图对象</span>
 * <span class="token keyword">@param</span> <span class="token parameter">overName：覆盖对象名称</span>
 */</span>
<span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">removeOverlayByName</span><span class="token punctuation">(</span><span class="token parameter">overName<span class="token punctuation">,</span>map <span class="token operator">=</span> window<span class="token punctuation">.</span>_map</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
  <span class="token keyword">const</span> layers <span class="token operator">=</span> map<span class="token punctuation">.</span><span class="token function">getOverlays</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getArray</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  layers<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token parameter">targetLayer</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> props <span class="token operator">=</span> targetLayer<span class="token punctuation">.</span><span class="token function">getProperties</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>overName <span class="token operator">===</span> props<span class="token punctuation">[</span><span class="token string">&quot;layerName&quot;</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>map<span class="token punctuation">.</span><span class="token function">removeOverlay</span><span class="token punctuation">(</span>targetLayer<span class="token punctuation">)</span><span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre></div><h2 id="_5-清除所有图层" tabindex="-1"><a class="header-anchor" href="#_5-清除所有图层" aria-hidden="true">#</a> <strong>5. 清除所有图层</strong></h2><p>清除所有图层方法用于清除除了底图和指定过滤图层之外的其他图层，也包括叠加图层，其中属性<code>isBaseMap</code>和<code>isTileLayer</code>为过滤条件，可以自定义设置。</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@description</span>：清除除了底图的所有图层
 * <span class="token keyword">@param</span> <span class="token parameter">map：地图对象，默认为全局地图对象</span>
 */</span>
exportfunction <span class="token function">removeAllLayer</span><span class="token punctuation">(</span><span class="token parameter">map <span class="token operator">=</span> window<span class="token punctuation">.</span>_map</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
  <span class="token comment">// 清除图层</span>
  <span class="token keyword">const</span> layers <span class="token operator">=</span> map<span class="token punctuation">.</span><span class="token function">getLayers</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getArray</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token keyword">const</span> tarLayers <span class="token operator">=</span> layers<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token parameter">layer</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> props <span class="token operator">=</span> layer<span class="token punctuation">.</span><span class="token function">getProperties</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>props<span class="token punctuation">.</span>isBaseMap <span class="token operator">&amp;&amp;</span> <span class="token operator">!</span>props<span class="token punctuation">.</span>isTileLayer<span class="token punctuation">)</span><span class="token punctuation">{</span>
      <span class="token keyword">return</span> layer
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
  tarLayers<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token parameter">tar</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    map<span class="token punctuation">.</span><span class="token function">removeLayer</span><span class="token punctuation">(</span>tar<span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>

  <span class="token comment">// 清除Overlay</span>
  <span class="token keyword">const</span> overLayers <span class="token operator">=</span> map<span class="token punctuation">.</span><span class="token function">getOverlays</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getArray</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  overLayers<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token parameter">overLayer</span> <span class="token operator">=&gt;</span> map<span class="token punctuation">.</span><span class="token function">removeOverlay</span><span class="token punctuation">(</span>overLayer<span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre></div><h2 id="_6-信息弹窗" tabindex="-1"><a class="header-anchor" href="#_6-信息弹窗" aria-hidden="true">#</a> <strong>6. 信息弹窗</strong></h2><p>信息弹窗用于展示图层或者要素属性信息，在WebGIS开发中经常用到，属于<strong>GIS</strong>必备功能。该方法稍微有点复杂，参数有点儿多，需要注意参数类型是否正确。</p><p>其中<code>property</code>参数为要素属性对象，信息弹窗字段模板<code>popupColumns</code>如下：</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 项目字段</span>
<span class="token keyword">const</span> <span class="token constant">PROJECT_POPUP_COLUMNS</span> <span class="token operator">=</span> <span class="token punctuation">[</span>
  <span class="token punctuation">{</span>
    <span class="token string-property property">&quot;name&quot;</span><span class="token operator">:</span><span class="token string">&quot;projectName&quot;</span><span class="token punctuation">,</span>
    <span class="token string-property property">&quot;comment&quot;</span><span class="token operator">:</span><span class="token string">&quot;项目名称&quot;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span>
    <span class="token string-property property">&quot;name&quot;</span><span class="token operator">:</span><span class="token string">&quot;xzqmc&quot;</span><span class="token punctuation">,</span>
    <span class="token string-property property">&quot;comment&quot;</span><span class="token operator">:</span><span class="token string">&quot;行政区名称&quot;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span>
    <span class="token string-property property">&quot;name&quot;</span><span class="token operator">:</span><span class="token string">&quot;projectDirect&quot;</span><span class="token punctuation">,</span>
    <span class="token string-property property">&quot;comment&quot;</span><span class="token operator">:</span><span class="token string">&quot;招商方向&quot;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">]</span>
</code></pre></div><h3 id="_6-1-信息弹窗方法" tabindex="-1"><a class="header-anchor" href="#_6-1-信息弹窗方法" aria-hidden="true">#</a> <strong>6.1. 信息弹窗方法</strong></h3><p>信息弹窗结构如下，主要由头部、角标以及属性表格三部分构成。</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * 设置 Popup 信息弹窗
 * <span class="token keyword">@param</span> <span class="token parameter">property：要素属性</span>
 * <span class="token keyword">@param</span> <span class="token parameter">popupColumns：信息弹窗字段</span>
 * <span class="token keyword">@param</span> <span class="token parameter">polygonGeometry：信息弹窗几何对象【Geometry】</span>
 * <span class="token keyword">@param</span> <span class="token parameter">map：信息弹窗显示地图</span>
 */</span>
exportfunction <span class="token function">setPopup</span><span class="token punctuation">(</span><span class="token parameter">property<span class="token punctuation">,</span> popupColumns<span class="token punctuation">,</span> polygonGeometry<span class="token punctuation">,</span> map</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token function">removeOverlayByName</span><span class="token punctuation">(</span><span class="token string">&#39;overLay&#39;</span><span class="token punctuation">,</span>map<span class="token punctuation">)</span>
  <span class="token comment">//  自定义popup容器</span>
  <span class="token keyword">const</span> popupDiv <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">createElement</span><span class="token punctuation">(</span><span class="token string">&#39;div&#39;</span><span class="token punctuation">)</span>
  popupDiv<span class="token punctuation">.</span><span class="token function">setAttribute</span><span class="token punctuation">(</span><span class="token string">&#39;class&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;custom-popup&#39;</span><span class="token punctuation">)</span>
  <span class="token comment">// 自定义popup头部</span>
  <span class="token keyword">const</span> headerDiv <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">createElement</span><span class="token punctuation">(</span><span class="token string">&#39;div&#39;</span><span class="token punctuation">)</span>
  headerDiv<span class="token punctuation">.</span><span class="token function">setAttribute</span><span class="token punctuation">(</span><span class="token string">&#39;class&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;custom-popup-header&#39;</span><span class="token punctuation">)</span>
  <span class="token keyword">const</span> titleSpan <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">createElement</span><span class="token punctuation">(</span><span class="token string">&#39;span&#39;</span><span class="token punctuation">)</span>
  titleSpan<span class="token punctuation">.</span><span class="token function">setAttribute</span><span class="token punctuation">(</span><span class="token string">&#39;class&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;custom-popup-title&#39;</span><span class="token punctuation">)</span>
  titleSpan<span class="token punctuation">.</span>textContent <span class="token operator">=</span> <span class="token string">&quot;属性信息&quot;</span>
  <span class="token keyword">const</span> closeSpan <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">createElement</span><span class="token punctuation">(</span><span class="token string">&#39;span&#39;</span><span class="token punctuation">)</span>
  closeSpan<span class="token punctuation">.</span><span class="token function">setAttribute</span><span class="token punctuation">(</span><span class="token string">&#39;class&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;custom-popup-close&#39;</span><span class="token punctuation">)</span>
  closeSpan<span class="token punctuation">.</span>textContent <span class="token operator">=</span> <span class="token string">&quot;X&quot;</span>
  headerDiv<span class="token punctuation">.</span><span class="token function">appendChild</span><span class="token punctuation">(</span>titleSpan<span class="token punctuation">)</span>
  headerDiv<span class="token punctuation">.</span><span class="token function">appendChild</span><span class="token punctuation">(</span>closeSpan<span class="token punctuation">)</span>
  <span class="token comment">// 自定义头部定位角标</span>
  <span class="token keyword">const</span> headerAngleIcon <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">createElement</span><span class="token punctuation">(</span><span class="token string">&#39;span&#39;</span><span class="token punctuation">)</span>
  headerAngleIcon<span class="token punctuation">.</span><span class="token function">setAttribute</span><span class="token punctuation">(</span><span class="token string">&#39;class&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;custom-header-angle&#39;</span><span class="token punctuation">)</span>
  <span class="token comment">// 自定义popup表格</span>
  <span class="token keyword">const</span> tableEle <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">createElement</span><span class="token punctuation">(</span><span class="token string">&#39;table&#39;</span><span class="token punctuation">)</span>
  tableEle<span class="token punctuation">.</span>className <span class="token operator">=</span> <span class="token string">&quot;popup-table&quot;</span>
  tableEle<span class="token punctuation">.</span><span class="token function">setAttribute</span><span class="token punctuation">(</span><span class="token string">&#39;border&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;1&#39;</span><span class="token punctuation">)</span>
  tableEle<span class="token punctuation">.</span><span class="token function">setAttribute</span><span class="token punctuation">(</span><span class="token string">&#39;cellpadding&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;0&#39;</span><span class="token punctuation">)</span>
  tableEle<span class="token punctuation">.</span><span class="token function">setAttribute</span><span class="token punctuation">(</span><span class="token string">&#39;cellspacing&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;0&#39;</span><span class="token punctuation">)</span>

  Object<span class="token punctuation">.</span><span class="token function">values</span><span class="token punctuation">(</span>popupColumns<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">prop<span class="token punctuation">,</span>index</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>prop<span class="token punctuation">[</span><span class="token string">&quot;name&quot;</span><span class="token punctuation">]</span> <span class="token operator">===</span> <span class="token string">&#39;id&#39;</span> <span class="token operator">||</span> prop<span class="token punctuation">[</span><span class="token string">&quot;name&quot;</span><span class="token punctuation">]</span> <span class="token operator">===</span> <span class="token string">&#39;import_oid&#39;</span><span class="token punctuation">)</span> <span class="token keyword">return</span>
    <span class="token keyword">const</span> trEle <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">createElement</span><span class="token punctuation">(</span><span class="token string">&#39;tr&#39;</span><span class="token punctuation">)</span>
    trEle<span class="token punctuation">.</span>className <span class="token operator">=</span> <span class="token string">&#39;table-tr&#39;</span>
    <span class="token keyword">const</span> firstTdEle <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">createElement</span><span class="token punctuation">(</span><span class="token string">&#39;td&#39;</span><span class="token punctuation">)</span>
    <span class="token keyword">const</span> secondTdEle <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">createElement</span><span class="token punctuation">(</span><span class="token string">&#39;td&#39;</span><span class="token punctuation">)</span>
    <span class="token comment">// firstTdEle.innerText = popupColumns[index].name //popupColumns[index].comment</span>
    firstTdEle<span class="token punctuation">.</span>innerText <span class="token operator">=</span> popupColumns<span class="token punctuation">[</span>index<span class="token punctuation">]</span><span class="token punctuation">.</span>comment
    secondTdEle<span class="token punctuation">.</span>innerText <span class="token operator">=</span> property<span class="token punctuation">[</span>popupColumns<span class="token punctuation">[</span>index<span class="token punctuation">]</span><span class="token punctuation">.</span>name<span class="token punctuation">]</span> <span class="token operator">||</span> <span class="token string">&#39;暂无&#39;</span>

    trEle<span class="token punctuation">.</span><span class="token function">appendChild</span><span class="token punctuation">(</span>firstTdEle<span class="token punctuation">)</span>
    trEle<span class="token punctuation">.</span><span class="token function">appendChild</span><span class="token punctuation">(</span>secondTdEle<span class="token punctuation">)</span>
    tableEle<span class="token punctuation">.</span><span class="token function">appendChild</span><span class="token punctuation">(</span>trEle<span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
  popupDiv<span class="token punctuation">.</span><span class="token function">appendChild</span><span class="token punctuation">(</span>headerAngleIcon<span class="token punctuation">)</span>
  popupDiv<span class="token punctuation">.</span><span class="token function">appendChild</span><span class="token punctuation">(</span>headerDiv<span class="token punctuation">)</span>
  popupDiv<span class="token punctuation">.</span><span class="token function">appendChild</span><span class="token punctuation">(</span>tableEle<span class="token punctuation">)</span>
  <span class="token keyword">const</span> extent <span class="token operator">=</span> polygonGeometry<span class="token punctuation">.</span><span class="token function">getExtent</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token keyword">const</span> center <span class="token operator">=</span> <span class="token function">getCenter</span><span class="token punctuation">(</span>extent<span class="token punctuation">)</span>

  <span class="token comment">// 创建Overlay popup</span>
  <span class="token keyword">const</span> overlay <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Overlay</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token string">&quot;temp-polygon&quot;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">position</span><span class="token operator">:</span> center<span class="token punctuation">,</span>
    <span class="token literal-property property">element</span><span class="token operator">:</span> popupDiv<span class="token punctuation">,</span>
    <span class="token literal-property property">offset</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">,</span><span class="token number">20</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token literal-property property">autoPan</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
    <span class="token literal-property property">autoPanMargin</span><span class="token operator">:</span> <span class="token number">1.25</span><span class="token punctuation">,</span>
    <span class="token literal-property property">positioning</span><span class="token operator">:</span> <span class="token string">&#39;top-center&#39;</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
  overlay<span class="token punctuation">.</span><span class="token function">setProperties</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">layerName</span><span class="token operator">:</span> <span class="token string">&quot;overLay&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">)</span>
  map<span class="token punctuation">.</span><span class="token function">addOverlay</span><span class="token punctuation">(</span>overlay<span class="token punctuation">)</span>

  <span class="token comment">// 监听popup移除事件</span>
  closeSpan<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">&#39;click&#39;</span><span class="token punctuation">,</span><span class="token parameter">evt</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token function">removeOverlayByName</span><span class="token punctuation">(</span><span class="token string">&#39;overLay&#39;</span><span class="token punctuation">,</span>map<span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre></div><h3 id="_6-2-信息弹窗css结构" tabindex="-1"><a class="header-anchor" href="#_6-2-信息弹窗css结构" aria-hidden="true">#</a> <strong>6.2. 信息弹窗CSS结构</strong></h3><div class="language-css" data-ext="css"><pre class="language-css"><code><span class="token comment">/**
* openLayers 样式
*/</span>

<span class="token selector">.ol-overlay-container p</span> <span class="token punctuation">{</span>
  <span class="token property">margin</span><span class="token punctuation">:</span> 5px 0 <span class="token important">!important</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.ol-overlay-container</span> <span class="token punctuation">{</span>
  <span class="token property">color</span><span class="token punctuation">:</span> #fff<span class="token punctuation">;</span>
  <span class="token property">border-radius</span><span class="token punctuation">:</span> 2px<span class="token punctuation">;</span>
  <span class="token property">padding</span><span class="token punctuation">:</span> 2px<span class="token punctuation">;</span>
  <span class="token property">line-height</span><span class="token punctuation">:</span> 16px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.ol-overlay-container</span> <span class="token punctuation">{</span>
  <span class="token property">max-height</span><span class="token punctuation">:</span> 250px<span class="token punctuation">;</span>
  <span class="token selector">.popup-analyse-btn</span> <span class="token punctuation">{</span>
    <span class="token property">width</span><span class="token punctuation">:</span> 100%<span class="token punctuation">;</span>
    <span class="token property">background-color</span><span class="token punctuation">:</span> <span class="token function">rgb</span><span class="token punctuation">(</span>219<span class="token punctuation">,</span> 197<span class="token punctuation">,</span> 137<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token property">padding</span><span class="token punctuation">:</span> 10px<span class="token punctuation">;</span>
    <span class="token property">border-radius</span><span class="token punctuation">:</span> 2.5px<span class="token punctuation">;</span>
    <span class="token property">margin-top</span><span class="token punctuation">:</span> 10px<span class="token punctuation">;</span>
    <span class="token property">display</span><span class="token punctuation">:</span> inline-block<span class="token punctuation">;</span>
    <span class="token property">color</span><span class="token punctuation">:</span> #fffefe<span class="token punctuation">;</span>
    <span class="token property">border-color</span><span class="token punctuation">:</span> #fff<span class="token punctuation">;</span>
    <span class="token property">text-align</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>
    <span class="token selector">&amp;:hover</span> <span class="token punctuation">{</span>
      <span class="token property">cursor</span><span class="token punctuation">:</span> pointer<span class="token punctuation">;</span>
      <span class="token property">color</span><span class="token punctuation">:</span> #fff<span class="token punctuation">;</span>
      <span class="token property">filter</span><span class="token punctuation">:</span> <span class="token function">brightness</span><span class="token punctuation">(</span>110%<span class="token punctuation">)</span> <span class="token function">opacity</span><span class="token punctuation">(</span>100%<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token property">transition</span><span class="token punctuation">:</span> all .5s ease-in<span class="token punctuation">;</span>
      <span class="token property">background</span><span class="token punctuation">:</span> <span class="token function">linear-gradient</span><span class="token punctuation">(</span>to bottom right<span class="token punctuation">,</span> #9a99f1<span class="token punctuation">,</span> #0167cc<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token selector">&amp;:focus</span> <span class="token punctuation">{</span>
      <span class="token property">filter</span><span class="token punctuation">:</span> <span class="token function">brightness</span><span class="token punctuation">(</span>120%<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token property">transition</span><span class="token punctuation">:</span> all .5s ease-in<span class="token punctuation">;</span>
      <span class="token property">background</span><span class="token punctuation">:</span> <span class="token function">radial-gradient</span><span class="token punctuation">(</span>circle at center<span class="token punctuation">,</span> #9a99f1<span class="token punctuation">,</span> #0167cc<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

  <span class="token punctuation">}</span>
  <span class="token selector">.custom-popup</span><span class="token punctuation">{</span>
    <span class="token property">max-height</span><span class="token punctuation">:</span> 250px<span class="token punctuation">;</span>
    <span class="token property">max-width</span><span class="token punctuation">:</span> 350px<span class="token punctuation">;</span>
    <span class="token property">overflow-y</span><span class="token punctuation">:</span> scroll<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token selector">.custom-popup-header</span><span class="token punctuation">{</span>
    <span class="token property">position</span><span class="token punctuation">:</span> sticky<span class="token punctuation">;</span>
    <span class="token property">top</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
    <span class="token property">z-index</span><span class="token punctuation">:</span> 99<span class="token punctuation">;</span>
    <span class="token property">display</span><span class="token punctuation">:</span> flex<span class="token punctuation">;</span>
    <span class="token property">flex-direction</span><span class="token punctuation">:</span> row<span class="token punctuation">;</span>
    <span class="token property">justify-content</span><span class="token punctuation">:</span> space-between<span class="token punctuation">;</span>
    <span class="token property">padding</span><span class="token punctuation">:</span> 0 10px<span class="token punctuation">;</span>
    <span class="token property">height</span><span class="token punctuation">:</span> 45px<span class="token punctuation">;</span>
    <span class="token property">line-height</span><span class="token punctuation">:</span> 45px<span class="token punctuation">;</span>
    <span class="token property">background-image</span><span class="token punctuation">:</span> <span class="token url"><span class="token function">url</span><span class="token punctuation">(</span>../assets/image/sw_01.png<span class="token punctuation">)</span></span><span class="token punctuation">;</span>
    <span class="token property">background-color</span><span class="token punctuation">:</span> #0167cc<span class="token punctuation">;</span><span class="token punctuation">;</span>
    <span class="token property">border-top-left-radius</span><span class="token punctuation">:</span> 2.5px<span class="token punctuation">;</span>
    <span class="token property">border-top-right-radius</span><span class="token punctuation">:</span> 2.5px<span class="token punctuation">;</span>

    <span class="token selector">.custom-popup-title</span><span class="token punctuation">{</span>
      <span class="token property">color</span><span class="token punctuation">:</span> #fff<span class="token punctuation">;</span>
      <span class="token property">font-weight</span><span class="token punctuation">:</span> bold<span class="token punctuation">;</span>
      <span class="token property">font-size</span><span class="token punctuation">:</span> 16px<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token selector">.custom-popup-close</span><span class="token punctuation">{</span>
      <span class="token property">display</span><span class="token punctuation">:</span> block<span class="token punctuation">;</span>
      <span class="token property">width</span><span class="token punctuation">:</span> 30px<span class="token punctuation">;</span>
      <span class="token property">height</span><span class="token punctuation">:</span> 30px<span class="token punctuation">;</span>
      <span class="token property">margin-top</span><span class="token punctuation">:</span> 6px<span class="token punctuation">;</span>
      <span class="token property">line-height</span><span class="token punctuation">:</span> 30px<span class="token punctuation">;</span>
      <span class="token property">color</span><span class="token punctuation">:</span> #9c9c9c<span class="token punctuation">;</span>
      <span class="token property">font-size</span><span class="token punctuation">:</span> 16px<span class="token punctuation">;</span>
      <span class="token property">border-radius</span><span class="token punctuation">:</span> 50%<span class="token punctuation">;</span>
      <span class="token property">text-align</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>
      <span class="token selector">&amp;:hover</span><span class="token punctuation">{</span>
        <span class="token property">cursor</span><span class="token punctuation">:</span> pointer<span class="token punctuation">;</span>
        <span class="token property">font-size</span><span class="token punctuation">:</span> 18px<span class="token punctuation">;</span>
        <span class="token property">color</span><span class="token punctuation">:</span> red<span class="token punctuation">;</span>
        <span class="token property">border-radius</span><span class="token punctuation">:</span> 50%<span class="token punctuation">;</span>
        <span class="token property">background-color</span><span class="token punctuation">:</span> #9bcbde<span class="token punctuation">;</span>
        <span class="token property">transition</span><span class="token punctuation">:</span> all .5s ease-in<span class="token punctuation">;</span>
        //<span class="token property">filter</span><span class="token punctuation">:</span> <span class="token function">brightness</span><span class="token punctuation">(</span>1.5<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>

  <span class="token selector">.custom-header-angle</span><span class="token punctuation">{</span>
    <span class="token property">position</span><span class="token punctuation">:</span> absolute<span class="token punctuation">;</span>
    <span class="token property">display</span><span class="token punctuation">:</span> block<span class="token punctuation">;</span>
    <span class="token property">top</span><span class="token punctuation">:</span> -15px<span class="token punctuation">;</span>
    <span class="token property">left</span><span class="token punctuation">:</span> 50%<span class="token punctuation">;</span>
    <span class="token property">width</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
    <span class="token property">height</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
    <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">translateX</span><span class="token punctuation">(</span>-50%<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token property">border-left</span><span class="token punctuation">:</span> 40px solid transparent<span class="token punctuation">;</span>
    <span class="token property">border-right</span><span class="token punctuation">:</span> 40px solid transparent<span class="token punctuation">;</span>
    <span class="token property">border-bottom</span><span class="token punctuation">:</span> 30px solid #003468<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token selector">.popup-table</span><span class="token punctuation">{</span>
    <span class="token property">max-height</span><span class="token punctuation">:</span> 250px<span class="token punctuation">;</span>
    <span class="token property">overflow-y</span><span class="token punctuation">:</span> auto<span class="token punctuation">;</span>
    <span class="token property">width</span><span class="token punctuation">:</span> 100%<span class="token punctuation">;</span>
    <span class="token property">height</span><span class="token punctuation">:</span> 100%<span class="token punctuation">;</span>
    <span class="token property">background-size</span><span class="token punctuation">:</span> 100% 100%<span class="token punctuation">;</span>
    <span class="token property">background-color</span><span class="token punctuation">:</span> #409eff21<span class="token punctuation">;</span>
    <span class="token property">border</span><span class="token punctuation">:</span> 1px solid #d9d9d9ad<span class="token punctuation">;</span>
    <span class="token property">border-collapse</span><span class="token punctuation">:</span> collapse<span class="token punctuation">;</span>
    <span class="token property">background-image</span><span class="token punctuation">:</span> <span class="token url"><span class="token function">url</span><span class="token punctuation">(</span>../assets/image/sw_02.png<span class="token punctuation">)</span></span><span class="token selector">;
    .table-tr</span><span class="token punctuation">{</span>
      <span class="token property">width</span><span class="token punctuation">:</span> 100%<span class="token punctuation">;</span>
      <span class="token selector">&amp;:hover</span><span class="token punctuation">{</span>
        <span class="token property">cursor</span><span class="token punctuation">:</span> pointer<span class="token punctuation">;</span>
        <span class="token property">background-color</span><span class="token punctuation">:</span> #0c698d61<span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
      <span class="token selector">td</span><span class="token punctuation">{</span>
        <span class="token property">padding</span><span class="token punctuation">:</span> 10px 5px<span class="token punctuation">;</span>
        <span class="token property">line-height</span><span class="token punctuation">:</span> 1.5<span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
      <span class="token selector">td:first-child</span><span class="token punctuation">{</span>
        <span class="token property">text-align</span><span class="token punctuation">:</span> right<span class="token punctuation">;</span>
        <span class="token property">width</span><span class="token punctuation">:</span> 45%<span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
      <span class="token selector">td:last-child</span><span class="token punctuation">{</span>
        <span class="token property">text-align</span><span class="token punctuation">:</span> left<span class="token punctuation">;</span>
        <span class="token property">width</span><span class="token punctuation">:</span> 55%<span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
  <span class="token selector">.select-analyse-popup</span><span class="token punctuation">{</span>
    <span class="token selector">table</span><span class="token punctuation">{</span>
      <span class="token property">border</span><span class="token punctuation">:</span> 1px solid #fff<span class="token punctuation">;</span>
      <span class="token property">border-collapse</span><span class="token punctuation">:</span> collapse<span class="token punctuation">;</span>
      <span class="token selector">tr</span><span class="token punctuation">{</span>
        <span class="token selector">td</span><span class="token punctuation">{</span>
          <span class="token property">padding</span><span class="token punctuation">:</span> 10px 5px<span class="token punctuation">;</span>
          <span class="token property">line-height</span><span class="token punctuation">:</span> 1.5<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token selector">td:first-child</span><span class="token punctuation">{</span>
          <span class="token property">text-align</span><span class="token punctuation">:</span> right<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token selector">td:last-child</span><span class="token punctuation">{</span>
          <span class="token property">text-align</span><span class="token punctuation">:</span> left<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token selector">.query-header</span><span class="token punctuation">{</span>
  <span class="token property">position</span><span class="token punctuation">:</span> sticky<span class="token punctuation">;</span>
  <span class="token property">top</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
  <span class="token property">z-index</span><span class="token punctuation">:</span> 99<span class="token punctuation">;</span>
  <span class="token property">display</span><span class="token punctuation">:</span> flex<span class="token punctuation">;</span>
  <span class="token property">flex-direction</span><span class="token punctuation">:</span> row<span class="token punctuation">;</span>
  <span class="token property">justify-content</span><span class="token punctuation">:</span> space-between<span class="token punctuation">;</span>
  <span class="token property">padding</span><span class="token punctuation">:</span> 0 10px<span class="token punctuation">;</span>
  <span class="token property">height</span><span class="token punctuation">:</span> 45px<span class="token punctuation">;</span>
  <span class="token property">line-height</span><span class="token punctuation">:</span> 45px<span class="token punctuation">;</span>
  <span class="token property">background-color</span><span class="token punctuation">:</span> #0167cc<span class="token punctuation">;</span><span class="token punctuation">;</span>
  <span class="token property">border-top-left-radius</span><span class="token punctuation">:</span> 2.5px<span class="token punctuation">;</span>
  <span class="token property">border-top-right-radius</span><span class="token punctuation">:</span> 2.5px<span class="token punctuation">;</span>
  <span class="token selector">.query-header-span</span><span class="token punctuation">{</span>
    <span class="token property">color</span><span class="token punctuation">:</span> #fff<span class="token punctuation">;</span>
    <span class="token property">font-weight</span><span class="token punctuation">:</span> bold<span class="token punctuation">;</span>
    <span class="token property">font-size</span><span class="token punctuation">:</span> 16px<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token selector">.query-header-close</span><span class="token punctuation">{</span>
    <span class="token property">display</span><span class="token punctuation">:</span> block<span class="token punctuation">;</span>
    <span class="token property">width</span><span class="token punctuation">:</span> 30px<span class="token punctuation">;</span>
    <span class="token property">height</span><span class="token punctuation">:</span> 30px<span class="token punctuation">;</span>
    <span class="token property">margin-top</span><span class="token punctuation">:</span> 6px<span class="token punctuation">;</span>
    <span class="token property">line-height</span><span class="token punctuation">:</span> 30px<span class="token punctuation">;</span>
    <span class="token property">color</span><span class="token punctuation">:</span> #9c9c9c<span class="token punctuation">;</span>
    <span class="token property">font-size</span><span class="token punctuation">:</span> 16px<span class="token punctuation">;</span>
    <span class="token property">border-radius</span><span class="token punctuation">:</span> 50%<span class="token punctuation">;</span>
    <span class="token property">text-align</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>
    <span class="token selector">&amp;:hover</span><span class="token punctuation">{</span>
      <span class="token property">cursor</span><span class="token punctuation">:</span> pointer<span class="token punctuation">;</span>
      <span class="token property">font-size</span><span class="token punctuation">:</span> 18px<span class="token punctuation">;</span>
      <span class="token property">color</span><span class="token punctuation">:</span> red<span class="token punctuation">;</span>
      <span class="token property">border-radius</span><span class="token punctuation">:</span> 50%<span class="token punctuation">;</span>
      <span class="token property">background-color</span><span class="token punctuation">:</span> #9bcbde<span class="token punctuation">;</span>
      <span class="token property">transition</span><span class="token punctuation">:</span> all .5s ease-in<span class="token punctuation">;</span>
      //<span class="token property">filter</span><span class="token punctuation">:</span> <span class="token function">brightness</span><span class="token punctuation">(</span>1.5<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token selector">.query-tabs</span><span class="token punctuation">{</span>
  <span class="token property">position</span><span class="token punctuation">:</span> sticky<span class="token punctuation">;</span>
  <span class="token property">padding</span><span class="token punctuation">:</span> 10px<span class="token punctuation">;</span>
  <span class="token property">background</span><span class="token punctuation">:</span> #004066<span class="token punctuation">;</span>
  <span class="token property">width</span><span class="token punctuation">:</span> 100%<span class="token punctuation">;</span>
  <span class="token property">overflow-x</span><span class="token punctuation">:</span> scroll<span class="token punctuation">;</span>
  <span class="token selector">.query-tab-content</span><span class="token punctuation">{</span>
    <span class="token property">white-space</span><span class="token punctuation">:</span> nowrap<span class="token punctuation">;</span>
    <span class="token property">scrollbar-width</span><span class="token punctuation">:</span> thin<span class="token punctuation">;</span>
    <span class="token property">scrollbar-color</span><span class="token punctuation">:</span> #999999 #dddddd<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token selector">.query-tab-span</span><span class="token punctuation">{</span>
    <span class="token property">padding</span><span class="token punctuation">:</span> 5px<span class="token punctuation">;</span>
    <span class="token property">display</span><span class="token punctuation">:</span> inline-block<span class="token punctuation">;</span>
    <span class="token property">margin-right</span><span class="token punctuation">:</span> 10px<span class="token punctuation">;</span>
    <span class="token property">border</span><span class="token punctuation">:</span> 1px solid #ccc<span class="token punctuation">;</span>
    <span class="token property">border-radius</span><span class="token punctuation">:</span> 2.5px<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token selector">.query-tab-span:hover</span><span class="token punctuation">{</span>
    <span class="token property">cursor</span><span class="token punctuation">:</span> pointer<span class="token punctuation">;</span>
    <span class="token property">background</span><span class="token punctuation">:</span> #0796f0<span class="token punctuation">;</span>
    <span class="token property">transition</span><span class="token punctuation">:</span> all .5s ease-in<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token selector">.query-tab-active</span><span class="token punctuation">{</span>
  <span class="token property">background</span><span class="token punctuation">:</span> #0796f0<span class="token punctuation">;</span>
  <span class="token property">font-weight</span><span class="token punctuation">:</span> bold<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><h2 id="_7-图层查询信息弹窗" tabindex="-1"><a class="header-anchor" href="#_7-图层查询信息弹窗" aria-hidden="true">#</a> <strong>7. 图层查询信息弹窗</strong></h2><p>图层查询信息弹窗主要用于地图点选查询，可能会查询不止一个图层。在信息弹窗方法的基础上进行改进，主要用于显示多个图层属性。</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * 设置 Popup 数据查询信息弹窗
 * <span class="token keyword">@param</span> <span class="token parameter">results：分析结果数据</span>
 * <span class="token keyword">@param</span> <span class="token parameter">map：信息弹窗显示地图</span>
 */</span>
exportfunction <span class="token function">openPopupOfQueryLayer</span><span class="token punctuation">(</span><span class="token parameter">results<span class="token punctuation">,</span> map</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token function">removeOverlayByName</span><span class="token punctuation">(</span><span class="token string">&#39;overLay&#39;</span><span class="token punctuation">,</span>map<span class="token punctuation">)</span>
  <span class="token comment">//  自定义popup容器</span>
  <span class="token keyword">const</span> queryWrap <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">createElement</span><span class="token punctuation">(</span><span class="token string">&#39;div&#39;</span><span class="token punctuation">)</span>
  queryWrap<span class="token punctuation">.</span><span class="token function">setAttribute</span><span class="token punctuation">(</span><span class="token string">&#39;class&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;custom-popup&#39;</span><span class="token punctuation">)</span>
  <span class="token comment">// 自定义popup头部</span>
  <span class="token keyword">const</span> headerDiv <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">createElement</span><span class="token punctuation">(</span><span class="token string">&#39;header&#39;</span><span class="token punctuation">)</span>
  headerDiv<span class="token punctuation">.</span><span class="token function">setAttribute</span><span class="token punctuation">(</span><span class="token string">&#39;class&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;custom-popup-header&#39;</span><span class="token punctuation">)</span>
  <span class="token keyword">const</span> titleSpan <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">createElement</span><span class="token punctuation">(</span><span class="token string">&#39;span&#39;</span><span class="token punctuation">)</span>
  titleSpan<span class="token punctuation">.</span><span class="token function">setAttribute</span><span class="token punctuation">(</span><span class="token string">&#39;class&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;custom-popup-title&#39;</span><span class="token punctuation">)</span>
  titleSpan<span class="token punctuation">.</span>textContent <span class="token operator">=</span> <span class="token string">&quot;属性信息&quot;</span>
  <span class="token keyword">const</span> closeSpan <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">createElement</span><span class="token punctuation">(</span><span class="token string">&#39;span&#39;</span><span class="token punctuation">)</span>
  closeSpan<span class="token punctuation">.</span><span class="token function">setAttribute</span><span class="token punctuation">(</span><span class="token string">&#39;class&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;custom-popup-close&#39;</span><span class="token punctuation">)</span>
  closeSpan<span class="token punctuation">.</span>textContent <span class="token operator">=</span> <span class="token string">&quot;X&quot;</span>
  headerDiv<span class="token punctuation">.</span><span class="token function">appendChild</span><span class="token punctuation">(</span>titleSpan<span class="token punctuation">)</span>
  headerDiv<span class="token punctuation">.</span><span class="token function">appendChild</span><span class="token punctuation">(</span>closeSpan<span class="token punctuation">)</span>
  <span class="token comment">// 自定义属性内容区域</span>
  <span class="token keyword">const</span> queryBody <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">createElement</span><span class="token punctuation">(</span><span class="token string">&#39;div&#39;</span><span class="token punctuation">)</span>
  queryBody<span class="token punctuation">.</span><span class="token function">setAttribute</span><span class="token punctuation">(</span><span class="token string">&#39;class&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;query-body&#39;</span><span class="token punctuation">)</span>
  <span class="token comment">// 自定义头部定位角标</span>
  <span class="token keyword">const</span> headerAngleIcon <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">createElement</span><span class="token punctuation">(</span><span class="token string">&#39;span&#39;</span><span class="token punctuation">)</span>
  headerAngleIcon<span class="token punctuation">.</span><span class="token function">setAttribute</span><span class="token punctuation">(</span><span class="token string">&#39;class&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;custom-header-angle&#39;</span><span class="token punctuation">)</span>
  <span class="token comment">// 自定义popup表格</span>
  <span class="token keyword">const</span> tableEle <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">createElement</span><span class="token punctuation">(</span><span class="token string">&#39;table&#39;</span><span class="token punctuation">)</span>
  tableEle<span class="token punctuation">.</span>className <span class="token operator">=</span> <span class="token string">&quot;popup-table&quot;</span>
  tableEle<span class="token punctuation">.</span><span class="token function">setAttribute</span><span class="token punctuation">(</span><span class="token string">&#39;border&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;1&#39;</span><span class="token punctuation">)</span>
  tableEle<span class="token punctuation">.</span><span class="token function">setAttribute</span><span class="token punctuation">(</span><span class="token string">&#39;cellpadding&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;0&#39;</span><span class="token punctuation">)</span>
  tableEle<span class="token punctuation">.</span><span class="token function">setAttribute</span><span class="token punctuation">(</span><span class="token string">&#39;cellspacing&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;0&#39;</span><span class="token punctuation">)</span>

  <span class="token comment">// 自定义查询图层标题</span>
  <span class="token keyword">const</span> queryTabs <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">createElement</span><span class="token punctuation">(</span><span class="token string">&#39;div&#39;</span><span class="token punctuation">)</span>
  queryTabs<span class="token punctuation">.</span><span class="token function">setAttribute</span><span class="token punctuation">(</span><span class="token string">&#39;class&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;query-tabs&#39;</span><span class="token punctuation">)</span>
  <span class="token keyword">const</span> queryTabContent <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">createElement</span><span class="token punctuation">(</span><span class="token string">&quot;div&quot;</span><span class="token punctuation">)</span>
  queryTabContent<span class="token punctuation">.</span><span class="token function">setAttribute</span><span class="token punctuation">(</span><span class="token string">&#39;class&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;query-tab-content&#39;</span><span class="token punctuation">)</span>

  results<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token parameter">feature</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>feature<span class="token punctuation">.</span>geometry<span class="token punctuation">)</span><span class="token punctuation">{</span>
      <span class="token keyword">return</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">const</span> queryTabSpan <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">createElement</span><span class="token punctuation">(</span><span class="token string">&#39;span&#39;</span><span class="token punctuation">)</span>
    queryTabSpan<span class="token punctuation">.</span>textContent <span class="token operator">=</span> feature<span class="token punctuation">.</span>label
    queryTabSpan<span class="token punctuation">.</span><span class="token function">setAttribute</span><span class="token punctuation">(</span><span class="token string">&#39;class&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;query-tab-span&#39;</span><span class="token punctuation">)</span>
    queryTabContent<span class="token punctuation">.</span><span class="token function">appendChild</span><span class="token punctuation">(</span>queryTabSpan<span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
  queryTabs<span class="token punctuation">.</span><span class="token function">appendChild</span><span class="token punctuation">(</span>queryTabContent<span class="token punctuation">)</span>
  <span class="token comment">// 添加默认选中样式</span>
  <span class="token keyword">const</span> firstChild <span class="token operator">=</span> queryTabContent<span class="token punctuation">.</span>firstChild
  firstChild<span class="token punctuation">.</span>classList<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token string">&#39;query-tab-active&#39;</span><span class="token punctuation">)</span>
  <span class="token comment">// 添加要素默认样式</span>
<span class="token keyword">let</span> popupInfo <span class="token operator">=</span> results<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span>
  <span class="token comment">// 事件委托，展示目标选项,筛选显示图层</span>
  <span class="token keyword">const</span> tabArr <span class="token operator">=</span> queryTabContent<span class="token punctuation">.</span>childNodes
  queryTabContent<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">&#39;click&#39;</span><span class="token punctuation">,</span> <span class="token parameter">evt</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> targetElement <span class="token operator">=</span> evt<span class="token punctuation">.</span>target
    <span class="token keyword">if</span> <span class="token punctuation">(</span>targetElement<span class="token punctuation">.</span>tagName<span class="token punctuation">.</span><span class="token function">toUpperCase</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">!==</span> <span class="token string">&quot;SPAN&quot;</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
      <span class="token keyword">return</span>
    <span class="token punctuation">}</span>
    <span class="token function">removeOverlayByName</span><span class="token punctuation">(</span><span class="token string">&#39;overLay&#39;</span><span class="token punctuation">,</span>map<span class="token punctuation">)</span>
    tabArr<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token parameter">tab</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      tab<span class="token punctuation">.</span>classList<span class="token punctuation">.</span><span class="token function">remove</span><span class="token punctuation">(</span><span class="token string">&#39;query-tab-active&#39;</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
    targetElement<span class="token punctuation">.</span>classList<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token string">&#39;query-tab-active&#39;</span><span class="token punctuation">)</span>
    <span class="token keyword">const</span> layerName <span class="token operator">=</span> targetElement<span class="token punctuation">.</span>textContent

    popupInfo <span class="token operator">=</span> results<span class="token punctuation">.</span><span class="token function">find</span><span class="token punctuation">(</span><span class="token parameter">result</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      <span class="token keyword">const</span> defaultPolygon <span class="token operator">=</span> popupInfo<span class="token punctuation">[</span><span class="token string">&quot;polygon&quot;</span><span class="token punctuation">]</span>
      defaultPolygon<span class="token punctuation">.</span><span class="token function">setStyle</span><span class="token punctuation">(</span>defaultStyle<span class="token punctuation">)</span>
      <span class="token keyword">return</span> result<span class="token punctuation">.</span>label <span class="token operator">===</span> layerName
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
    tableEle<span class="token punctuation">.</span>innerHTML <span class="token operator">=</span> <span class="token string">&quot;&quot;</span>
    <span class="token function">showOverlay</span><span class="token punctuation">(</span>popupInfo<span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>

  <span class="token keyword">const</span> <span class="token function-variable function">showOverlay</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">popupInfo</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>popupInfo<span class="token punctuation">)</span><span class="token punctuation">{</span>
      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;信息弹窗：&quot;</span><span class="token punctuation">,</span>popupInfo<span class="token punctuation">)</span>
      tableEle<span class="token punctuation">.</span>innerHTML <span class="token operator">=</span> <span class="token string">&quot;&lt;span&gt;暂无数据&lt;/span&gt;&quot;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">const</span> popupColumns <span class="token operator">=</span> popupInfo<span class="token punctuation">[</span><span class="token string">&#39;popupColumns&#39;</span><span class="token punctuation">]</span>
    <span class="token keyword">const</span> property <span class="token operator">=</span> popupInfo<span class="token punctuation">[</span><span class="token string">&quot;properties&quot;</span><span class="token punctuation">]</span>

    <span class="token keyword">const</span> defaultPolygon <span class="token operator">=</span> popupInfo<span class="token punctuation">[</span><span class="token string">&quot;polygon&quot;</span><span class="token punctuation">]</span>
    defaultPolygon<span class="token punctuation">.</span><span class="token function">setStyle</span><span class="token punctuation">(</span>geometrySelectStyle<span class="token punctuation">[</span><span class="token string">&quot;Polygon&quot;</span><span class="token punctuation">]</span><span class="token punctuation">)</span>

    Object<span class="token punctuation">.</span><span class="token function">values</span><span class="token punctuation">(</span>popupColumns<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">prop<span class="token punctuation">,</span>index</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>prop<span class="token punctuation">[</span><span class="token string">&quot;name&quot;</span><span class="token punctuation">]</span> <span class="token operator">===</span> <span class="token string">&#39;id&#39;</span> <span class="token operator">||</span> prop<span class="token punctuation">[</span><span class="token string">&quot;name&quot;</span><span class="token punctuation">]</span> <span class="token operator">===</span> <span class="token string">&#39;import_oid&#39;</span><span class="token punctuation">)</span> <span class="token keyword">return</span>
      <span class="token keyword">const</span> trEle <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">createElement</span><span class="token punctuation">(</span><span class="token string">&#39;tr&#39;</span><span class="token punctuation">)</span>
      trEle<span class="token punctuation">.</span>className <span class="token operator">=</span> <span class="token string">&#39;table-tr&#39;</span>
      <span class="token keyword">const</span> firstTdEle <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">createElement</span><span class="token punctuation">(</span><span class="token string">&#39;td&#39;</span><span class="token punctuation">)</span>
      <span class="token keyword">const</span> secondTdEle <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">createElement</span><span class="token punctuation">(</span><span class="token string">&#39;td&#39;</span><span class="token punctuation">)</span>
      <span class="token comment">// firstTdEle.innerText = popupColumns[index].name //popupColumns[index].comment</span>
      firstTdEle<span class="token punctuation">.</span>innerText <span class="token operator">=</span> popupColumns<span class="token punctuation">[</span>index<span class="token punctuation">]</span><span class="token punctuation">.</span>comment
      secondTdEle<span class="token punctuation">.</span>innerText <span class="token operator">=</span> property<span class="token punctuation">[</span>popupColumns<span class="token punctuation">[</span>index<span class="token punctuation">]</span><span class="token punctuation">.</span>name<span class="token punctuation">]</span> <span class="token operator">||</span> <span class="token string">&#39;暂无&#39;</span>

      trEle<span class="token punctuation">.</span><span class="token function">appendChild</span><span class="token punctuation">(</span>firstTdEle<span class="token punctuation">)</span>
      trEle<span class="token punctuation">.</span><span class="token function">appendChild</span><span class="token punctuation">(</span>secondTdEle<span class="token punctuation">)</span>
      tableEle<span class="token punctuation">.</span><span class="token function">appendChild</span><span class="token punctuation">(</span>trEle<span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token keyword">const</span> geometry <span class="token operator">=</span> popupInfo<span class="token punctuation">[</span><span class="token string">&#39;geometry&#39;</span><span class="token punctuation">]</span>
    <span class="token keyword">const</span> geom <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">GeoJSON</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">readGeometry</span><span class="token punctuation">(</span>geometry<span class="token punctuation">)</span>
    <span class="token keyword">const</span> extent <span class="token operator">=</span> geom<span class="token punctuation">.</span><span class="token function">getExtent</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token keyword">const</span> center <span class="token operator">=</span> <span class="token function">getCenter</span><span class="token punctuation">(</span>extent<span class="token punctuation">)</span>
    map<span class="token punctuation">.</span><span class="token function">getView</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">fit</span><span class="token punctuation">(</span>extent<span class="token punctuation">)</span>
    <span class="token comment">// 创建Overlay popup</span>
    <span class="token keyword">const</span> overlay <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Overlay</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token string">&quot;temp-polygon&quot;</span><span class="token punctuation">,</span>
      <span class="token literal-property property">position</span><span class="token operator">:</span> center<span class="token punctuation">,</span>
      <span class="token literal-property property">element</span><span class="token operator">:</span> queryWrap<span class="token punctuation">,</span>
      <span class="token literal-property property">offset</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">,</span><span class="token number">20</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token literal-property property">autoPan</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
      <span class="token literal-property property">autoPanMargin</span><span class="token operator">:</span> <span class="token number">1.25</span><span class="token punctuation">,</span>
      <span class="token literal-property property">positioning</span><span class="token operator">:</span> <span class="token string">&#39;top-center&#39;</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
    overlay<span class="token punctuation">.</span><span class="token function">setProperties</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">layerName</span><span class="token operator">:</span> <span class="token string">&quot;overLay&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">)</span>
    map<span class="token punctuation">.</span><span class="token function">addOverlay</span><span class="token punctuation">(</span>overlay<span class="token punctuation">)</span>

    queryWrap<span class="token punctuation">.</span><span class="token function">appendChild</span><span class="token punctuation">(</span>headerAngleIcon<span class="token punctuation">)</span>
    queryWrap<span class="token punctuation">.</span><span class="token function">appendChild</span><span class="token punctuation">(</span>headerDiv<span class="token punctuation">)</span>
    queryWrap<span class="token punctuation">.</span><span class="token function">appendChild</span><span class="token punctuation">(</span>queryTabs<span class="token punctuation">)</span>
    queryWrap<span class="token punctuation">.</span><span class="token function">appendChild</span><span class="token punctuation">(</span>tableEle<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
  <span class="token function">showOverlay</span><span class="token punctuation">(</span>popupInfo<span class="token punctuation">)</span>
  <span class="token comment">// 监听popup移除事件</span>
  closeSpan<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">&#39;click&#39;</span><span class="token punctuation">,</span><span class="token parameter">evt</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token function">removeOverlayByName</span><span class="token punctuation">(</span><span class="token string">&#39;overLay&#39;</span><span class="token punctuation">,</span>map<span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre></div><h2 id="_8-ol样式库" tabindex="-1"><a class="header-anchor" href="#_8-ol样式库" aria-hidden="true">#</a> <strong>8. ol样式库</strong></h2><p>ol样式库主要用于全局图层、要素样式设置，包括默认样式对象、选中样式对象等。这样当需要调整要素样式的时候只需要修改样式库代码即可，而无需修改代码逻辑。</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">import</span> Style <span class="token keyword">from</span> <span class="token string">&#39;ol/style/Style&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> Fill<span class="token punctuation">,</span> Stroke <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;ol/style&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> CircleStyle <span class="token keyword">from</span> <span class="token string">&quot;ol/style/Circle&quot;</span><span class="token punctuation">;</span>

<span class="token doc-comment comment">/**
 * 图形默认样式
 * <span class="token keyword">@type</span> <span class="token class-name"><span class="token punctuation">{</span>Style<span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">const</span> defaultStyle <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Style</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token comment">// 填充色</span>
  <span class="token literal-property property">fill</span><span class="token operator">:</span> <span class="token keyword">new</span> <span class="token class-name">Fill</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">color</span><span class="token operator">:</span> <span class="token string">&quot;rgba(251, 33, 2, 0.10)&quot;</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token comment">// 边线色</span>
  <span class="token literal-property property">stroke</span><span class="token operator">:</span> <span class="token keyword">new</span> <span class="token class-name">Stroke</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">color</span><span class="token operator">:</span> <span class="token string">&quot;rgba(251, 33, 2, 0.5)&quot;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">width</span><span class="token operator">:</span> <span class="token number">2.5</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token doc-comment comment">/**
 * 行政区默认样式
 * <span class="token keyword">@type</span> <span class="token class-name"><span class="token punctuation">{</span>Style<span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">const</span> defaultRegionStyle <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Style</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token comment">// 填充色</span>
  <span class="token literal-property property">fill</span><span class="token operator">:</span> <span class="token keyword">new</span> <span class="token class-name">Fill</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">color</span><span class="token operator">:</span> <span class="token string">&#39;rgba(255, 255, 255, 0.2)&#39;</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token comment">// 边线色</span>
  <span class="token literal-property property">stroke</span><span class="token operator">:</span> <span class="token keyword">new</span> <span class="token class-name">Stroke</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">color</span><span class="token operator">:</span> <span class="token string">&quot;#fffcc3&quot;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">width</span><span class="token operator">:</span> <span class="token number">2</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token doc-comment comment">/**
 * 几何对象默认样式
 * <span class="token keyword">@type</span> <span class="token class-name"><span class="token punctuation">{</span><span class="token punctuation">{</span>Circle<span class="token operator">:</span> Style<span class="token punctuation">,</span> MultiPolygon<span class="token operator">:</span> Style<span class="token punctuation">,</span> LineString<span class="token operator">:</span> Style<span class="token punctuation">,</span> Box<span class="token operator">:</span> Style<span class="token punctuation">,</span> Point<span class="token operator">:</span> Style<span class="token punctuation">,</span> Polygon<span class="token operator">:</span> Style<span class="token punctuation">}</span><span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">const</span> geometryDefaultStyle <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token comment">// 多边形</span>
<span class="token string-property property">&quot;MultiPolygon&quot;</span><span class="token operator">:</span> <span class="token keyword">new</span> <span class="token class-name">Style</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">fill</span><span class="token operator">:</span> <span class="token keyword">new</span> <span class="token class-name">Fill</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      <span class="token literal-property property">color</span><span class="token operator">:</span> <span class="token string">&quot;rgba(251, 33, 2, 0.10)&quot;</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token literal-property property">stroke</span><span class="token operator">:</span> <span class="token keyword">new</span> <span class="token class-name">Stroke</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      <span class="token literal-property property">color</span><span class="token operator">:</span> <span class="token string">&quot;rgba(251, 33, 2, 0.85)&quot;</span><span class="token punctuation">,</span>
      <span class="token literal-property property">width</span><span class="token operator">:</span> <span class="token number">2.5</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token comment">// 面</span>
<span class="token string-property property">&quot;Polygon&quot;</span><span class="token operator">:</span> <span class="token keyword">new</span> <span class="token class-name">Style</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">fill</span><span class="token operator">:</span> <span class="token keyword">new</span> <span class="token class-name">Fill</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      <span class="token literal-property property">color</span><span class="token operator">:</span> <span class="token string">&quot;rgba(251, 33, 2, 0.10)&quot;</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token literal-property property">stroke</span><span class="token operator">:</span> <span class="token keyword">new</span> <span class="token class-name">Stroke</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      <span class="token literal-property property">color</span><span class="token operator">:</span> <span class="token string">&quot;rgba(251, 33, 2, 0.85)&quot;</span><span class="token punctuation">,</span>
      <span class="token literal-property property">width</span><span class="token operator">:</span> <span class="token number">2.5</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token comment">// 线</span>
<span class="token string-property property">&quot;LineString&quot;</span><span class="token operator">:</span> <span class="token keyword">new</span> <span class="token class-name">Style</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">stroke</span><span class="token operator">:</span> <span class="token keyword">new</span> <span class="token class-name">Stroke</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      <span class="token literal-property property">color</span><span class="token operator">:</span> <span class="token string">&quot;rgba(251, 33, 2, 0.85)&quot;</span><span class="token punctuation">,</span>
      <span class="token literal-property property">width</span><span class="token operator">:</span> <span class="token number">2.5</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token comment">// 点</span>
<span class="token string-property property">&quot;Point&quot;</span><span class="token operator">:</span> <span class="token keyword">new</span> <span class="token class-name">Style</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">image</span><span class="token operator">:</span> <span class="token keyword">new</span> <span class="token class-name">CircleStyle</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      <span class="token literal-property property">fill</span><span class="token operator">:</span> <span class="token keyword">new</span> <span class="token class-name">Fill</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
        <span class="token literal-property property">color</span><span class="token operator">:</span> <span class="token string">&quot;rgba(251, 33, 2, 0.5)&quot;</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
      <span class="token literal-property property">radius</span><span class="token operator">:</span> <span class="token number">8</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token comment">// 圆形</span>
<span class="token string-property property">&quot;Circle&quot;</span><span class="token operator">:</span> <span class="token keyword">new</span> <span class="token class-name">Style</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">fill</span><span class="token operator">:</span> <span class="token keyword">new</span> <span class="token class-name">Fill</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      <span class="token literal-property property">color</span><span class="token operator">:</span> <span class="token string">&quot;rgba(251, 33, 2, 0.10)&quot;</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token literal-property property">stroke</span><span class="token operator">:</span> <span class="token keyword">new</span> <span class="token class-name">Stroke</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      <span class="token literal-property property">color</span><span class="token operator">:</span> <span class="token string">&quot;rgba(251, 33, 2, 0.85)&quot;</span><span class="token punctuation">,</span>
      <span class="token literal-property property">width</span><span class="token operator">:</span> <span class="token number">2</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token comment">// 矩形</span>
<span class="token string-property property">&quot;Box&quot;</span><span class="token operator">:</span> <span class="token keyword">new</span> <span class="token class-name">Style</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">fill</span><span class="token operator">:</span> <span class="token keyword">new</span> <span class="token class-name">Fill</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      <span class="token literal-property property">color</span><span class="token operator">:</span> <span class="token string">&quot;rgba(251, 33, 2, 0.10)&quot;</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token literal-property property">stroke</span><span class="token operator">:</span> <span class="token keyword">new</span> <span class="token class-name">Stroke</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      <span class="token literal-property property">color</span><span class="token operator">:</span> <span class="token string">&quot;rgba(251, 33, 2, 0.85)&quot;</span><span class="token punctuation">,</span>
      <span class="token literal-property property">width</span><span class="token operator">:</span> <span class="token number">2</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
<span class="token doc-comment comment">/**
 * 几何对象选中样式
 * <span class="token keyword">@type</span> <span class="token class-name"><span class="token punctuation">{</span><span class="token punctuation">{</span>MultiPolygon<span class="token operator">:</span> Style<span class="token punctuation">,</span> LineString<span class="token operator">:</span> Style<span class="token punctuation">,</span> Point<span class="token operator">:</span> Style<span class="token punctuation">,</span> Polygon<span class="token operator">:</span> Style<span class="token punctuation">}</span><span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">const</span> geometrySelectStyle <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token comment">// 多边形</span>
<span class="token string-property property">&quot;MultiPolygon&quot;</span><span class="token operator">:</span> <span class="token keyword">new</span> <span class="token class-name">Style</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">fill</span><span class="token operator">:</span> <span class="token keyword">new</span> <span class="token class-name">Fill</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      <span class="token literal-property property">color</span><span class="token operator">:</span> <span class="token string">&quot;rgba(251, 33, 2, 0.10)&quot;</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token literal-property property">stroke</span><span class="token operator">:</span> <span class="token keyword">new</span> <span class="token class-name">Stroke</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      <span class="token literal-property property">color</span><span class="token operator">:</span> <span class="token string">&quot;rgba(0,255,255,0.9)&quot;</span><span class="token punctuation">,</span>
      <span class="token literal-property property">lineDash</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">4</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token literal-property property">width</span><span class="token operator">:</span> <span class="token number">4.5</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token comment">// 面</span>
<span class="token string-property property">&quot;Polygon&quot;</span><span class="token operator">:</span> <span class="token keyword">new</span> <span class="token class-name">Style</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">fill</span><span class="token operator">:</span> <span class="token keyword">new</span> <span class="token class-name">Fill</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      <span class="token literal-property property">color</span><span class="token operator">:</span> <span class="token string">&quot;rgba(251, 33, 2, 0.10)&quot;</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token literal-property property">stroke</span><span class="token operator">:</span> <span class="token keyword">new</span> <span class="token class-name">Stroke</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      <span class="token literal-property property">color</span><span class="token operator">:</span> <span class="token string">&quot;rgba(0,255,255,0.85)&quot;</span><span class="token punctuation">,</span>
      <span class="token literal-property property">lineDash</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">4</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token literal-property property">width</span><span class="token operator">:</span> <span class="token number">3.5</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token comment">// 线</span>
<span class="token string-property property">&quot;LineString&quot;</span><span class="token operator">:</span> <span class="token keyword">new</span> <span class="token class-name">Style</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">stroke</span><span class="token operator">:</span> <span class="token keyword">new</span> <span class="token class-name">Stroke</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      <span class="token literal-property property">color</span><span class="token operator">:</span> <span class="token string">&quot;rgba(0,255,255,0.85)&quot;</span><span class="token punctuation">,</span>
      <span class="token literal-property property">lineDash</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">4</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token literal-property property">width</span><span class="token operator">:</span> <span class="token number">3.5</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token comment">// 点</span>
<span class="token string-property property">&quot;Point&quot;</span><span class="token operator">:</span> <span class="token keyword">new</span> <span class="token class-name">Style</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">image</span><span class="token operator">:</span> <span class="token keyword">new</span> <span class="token class-name">CircleStyle</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      <span class="token literal-property property">fill</span><span class="token operator">:</span> <span class="token keyword">new</span> <span class="token class-name">Fill</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
        <span class="token literal-property property">color</span><span class="token operator">:</span> <span class="token string">&quot;rgba(10,213,253)&quot;</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
      <span class="token literal-property property">radius</span><span class="token operator">:</span> <span class="token number">8</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token punctuation">{</span>
  geometryDefaultStyle<span class="token punctuation">,</span>
  geometrySelectStyle<span class="token punctuation">,</span>
  defaultStyle<span class="token punctuation">,</span>
  defaultRegionStyle
<span class="token punctuation">}</span>
</code></pre></div><h2 id="_9-ol工具集-全" tabindex="-1"><a class="header-anchor" href="#_9-ol工具集-全" aria-hidden="true">#</a> <strong>9. ol工具集（全）</strong></h2><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@name</span>: olTool
 * <span class="token keyword">@description</span>: ol库工具类
 **/</span>

<span class="token keyword">import</span> Overlay <span class="token keyword">from</span> <span class="token string">&quot;ol/Overlay&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> getCenter <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;ol/extent&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> GeoJSON <span class="token keyword">from</span> <span class="token string">&quot;ol/format/GeoJSON&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> defaultStyle<span class="token punctuation">,</span> geometrySelectStyle <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;@/utils/OpenLayers/olStyles&quot;</span><span class="token punctuation">;</span>

<span class="token doc-comment comment">/**
 * <span class="token keyword">@description</span>：动画飞到指定地点
 * <span class="token keyword">@param</span> <span class="token parameter">point</span>
 * <span class="token keyword">@param</span> <span class="token parameter">zoomNum</span>
 */</span>
exportfunction <span class="token function">flyToPoint</span><span class="token punctuation">(</span><span class="token parameter">point<span class="token punctuation">,</span>zoomNum <span class="token operator">=</span> <span class="token number">15</span></span><span class="token punctuation">)</span><span class="token punctuation">{</span>
<span class="token keyword">if</span> <span class="token punctuation">(</span>window<span class="token punctuation">.</span>_map<span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">const</span> view <span class="token operator">=</span> window<span class="token punctuation">.</span>_map<span class="token punctuation">.</span><span class="token function">getView</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    view<span class="token punctuation">.</span><span class="token function">animate</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">center</span><span class="token operator">:</span> point <span class="token punctuation">}</span><span class="token punctuation">,</span><span class="token punctuation">{</span> <span class="token literal-property property">zoom</span><span class="token operator">:</span> zoomNum <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token doc-comment comment">/**
 * <span class="token keyword">@description</span>：设置鼠标指针类型
 * <span class="token keyword">@param</span> <span class="token parameter">cursor：鼠标指针类型</span>
 * default(箭头)、help（箭头带问号）
 * wait（转圈）、crosshair（十字）
 * text（文本选择）、move（移动）
 * pointer（点击手势）、grab（抓取手势）
 */</span>
exportfunction <span class="token function">setCursor</span><span class="token punctuation">(</span><span class="token parameter">cursor</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
<span class="token keyword">if</span> <span class="token punctuation">(</span>window<span class="token punctuation">.</span>_map<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> map <span class="token operator">=</span> window<span class="token punctuation">.</span>_map
    <span class="token keyword">const</span> targetEle <span class="token operator">=</span> map<span class="token punctuation">.</span><span class="token function">getTargetElement</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    targetEle<span class="token punctuation">.</span>style<span class="token punctuation">.</span>cursor <span class="token operator">=</span> cursor
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token doc-comment comment">/**
 * <span class="token keyword">@description</span>：清除指定图层
 * <span class="token keyword">@param</span> <span class="token parameter">map：地图对象，默认为全局地图对象</span>
 * <span class="token keyword">@param</span> <span class="token parameter">layerName：图层名</span>
 */</span>
exportfunction <span class="token function">removeLayerByName</span><span class="token punctuation">(</span><span class="token parameter">layerName<span class="token punctuation">,</span>map <span class="token operator">=</span> window<span class="token punctuation">.</span>_map</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
  <span class="token keyword">const</span> layers <span class="token operator">=</span> map<span class="token punctuation">.</span><span class="token function">getLayers</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getArray</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  layers<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token parameter">targetLayer</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> props <span class="token operator">=</span> targetLayer<span class="token punctuation">.</span><span class="token function">getProperties</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>layerName <span class="token operator">===</span> props<span class="token punctuation">[</span><span class="token string">&quot;layerName&quot;</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>map<span class="token punctuation">.</span><span class="token function">removeLayer</span><span class="token punctuation">(</span>targetLayer<span class="token punctuation">)</span><span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token doc-comment comment">/**
 * <span class="token keyword">@description</span>：清除Overlay(叠加图层)
 * <span class="token keyword">@param</span> <span class="token parameter">map：地图对象，默认为全局地图对象</span>
 * <span class="token keyword">@param</span> <span class="token parameter">overName：覆盖对象名称</span>
 */</span>
exportfunction <span class="token function">removeOverlayByName</span><span class="token punctuation">(</span><span class="token parameter">overName<span class="token punctuation">,</span>map <span class="token operator">=</span> window<span class="token punctuation">.</span>_map</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
  <span class="token keyword">const</span> layers <span class="token operator">=</span> map<span class="token punctuation">.</span><span class="token function">getOverlays</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getArray</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  layers<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token parameter">targetLayer</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> props <span class="token operator">=</span> targetLayer<span class="token punctuation">.</span><span class="token function">getProperties</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>overName <span class="token operator">===</span> props<span class="token punctuation">[</span><span class="token string">&quot;layerName&quot;</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>map<span class="token punctuation">.</span><span class="token function">removeOverlay</span><span class="token punctuation">(</span>targetLayer<span class="token punctuation">)</span><span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token doc-comment comment">/**
 * <span class="token keyword">@description</span>：清除除了底图的所有图层
 * <span class="token keyword">@param</span> <span class="token parameter">map：地图对象，默认为全局地图对象</span>
 */</span>
exportfunction <span class="token function">removeAllLayer</span><span class="token punctuation">(</span><span class="token parameter">map <span class="token operator">=</span> window<span class="token punctuation">.</span>_map</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
  <span class="token comment">// 清除图层</span>
  <span class="token keyword">const</span> layers <span class="token operator">=</span> map<span class="token punctuation">.</span><span class="token function">getLayers</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getArray</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token keyword">const</span> tarLayers <span class="token operator">=</span> layers<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token parameter">layer</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> props <span class="token operator">=</span> layer<span class="token punctuation">.</span><span class="token function">getProperties</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>props<span class="token punctuation">.</span>isBaseMap <span class="token operator">&amp;&amp;</span> <span class="token operator">!</span>props<span class="token punctuation">.</span>isTileLayer<span class="token punctuation">)</span><span class="token punctuation">{</span>
      <span class="token keyword">return</span> layer
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
  tarLayers<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token parameter">tar</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    map<span class="token punctuation">.</span><span class="token function">removeLayer</span><span class="token punctuation">(</span>tar<span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>

  <span class="token comment">// 清除Overlay</span>
  <span class="token keyword">const</span> overLayers <span class="token operator">=</span> map<span class="token punctuation">.</span><span class="token function">getOverlays</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getArray</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  overLayers<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token parameter">overLayer</span> <span class="token operator">=&gt;</span> map<span class="token punctuation">.</span><span class="token function">removeOverlay</span><span class="token punctuation">(</span>overLayer<span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token doc-comment comment">/**
 * 设置 Popup 信息弹窗
 * <span class="token keyword">@param</span> <span class="token parameter">property：要素属性</span>
 * <span class="token keyword">@param</span> <span class="token parameter">popupColumns：信息弹窗字段</span>
 * <span class="token keyword">@param</span> <span class="token parameter">polygonGeometry：信息弹窗几何对象【Geometry】</span>
 * <span class="token keyword">@param</span> <span class="token parameter">map：信息弹窗显示地图</span>
 */</span>
exportfunction <span class="token function">setPopup</span><span class="token punctuation">(</span><span class="token parameter">property<span class="token punctuation">,</span> popupColumns<span class="token punctuation">,</span> polygonGeometry<span class="token punctuation">,</span> map</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token function">removeOverlayByName</span><span class="token punctuation">(</span><span class="token string">&#39;overLay&#39;</span><span class="token punctuation">,</span>map<span class="token punctuation">)</span>
  <span class="token comment">//  自定义popup容器</span>
  <span class="token keyword">const</span> popupDiv <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">createElement</span><span class="token punctuation">(</span><span class="token string">&#39;div&#39;</span><span class="token punctuation">)</span>
  popupDiv<span class="token punctuation">.</span><span class="token function">setAttribute</span><span class="token punctuation">(</span><span class="token string">&#39;class&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;custom-popup&#39;</span><span class="token punctuation">)</span>
  <span class="token comment">// 自定义popup头部</span>
  <span class="token keyword">const</span> headerDiv <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">createElement</span><span class="token punctuation">(</span><span class="token string">&#39;div&#39;</span><span class="token punctuation">)</span>
  headerDiv<span class="token punctuation">.</span><span class="token function">setAttribute</span><span class="token punctuation">(</span><span class="token string">&#39;class&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;custom-popup-header&#39;</span><span class="token punctuation">)</span>
  <span class="token keyword">const</span> titleSpan <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">createElement</span><span class="token punctuation">(</span><span class="token string">&#39;span&#39;</span><span class="token punctuation">)</span>
  titleSpan<span class="token punctuation">.</span><span class="token function">setAttribute</span><span class="token punctuation">(</span><span class="token string">&#39;class&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;custom-popup-title&#39;</span><span class="token punctuation">)</span>
  titleSpan<span class="token punctuation">.</span>textContent <span class="token operator">=</span> <span class="token string">&quot;属性信息&quot;</span>
  <span class="token keyword">const</span> closeSpan <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">createElement</span><span class="token punctuation">(</span><span class="token string">&#39;span&#39;</span><span class="token punctuation">)</span>
  closeSpan<span class="token punctuation">.</span><span class="token function">setAttribute</span><span class="token punctuation">(</span><span class="token string">&#39;class&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;custom-popup-close&#39;</span><span class="token punctuation">)</span>
  closeSpan<span class="token punctuation">.</span>textContent <span class="token operator">=</span> <span class="token string">&quot;X&quot;</span>
  headerDiv<span class="token punctuation">.</span><span class="token function">appendChild</span><span class="token punctuation">(</span>titleSpan<span class="token punctuation">)</span>
  headerDiv<span class="token punctuation">.</span><span class="token function">appendChild</span><span class="token punctuation">(</span>closeSpan<span class="token punctuation">)</span>
  <span class="token comment">// 自定义头部定位角标</span>
  <span class="token keyword">const</span> headerAngleIcon <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">createElement</span><span class="token punctuation">(</span><span class="token string">&#39;span&#39;</span><span class="token punctuation">)</span>
  headerAngleIcon<span class="token punctuation">.</span><span class="token function">setAttribute</span><span class="token punctuation">(</span><span class="token string">&#39;class&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;custom-header-angle&#39;</span><span class="token punctuation">)</span>
  <span class="token comment">// 自定义popup表格</span>
  <span class="token keyword">const</span> tableEle <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">createElement</span><span class="token punctuation">(</span><span class="token string">&#39;table&#39;</span><span class="token punctuation">)</span>
  tableEle<span class="token punctuation">.</span>className <span class="token operator">=</span> <span class="token string">&quot;popup-table&quot;</span>
  tableEle<span class="token punctuation">.</span><span class="token function">setAttribute</span><span class="token punctuation">(</span><span class="token string">&#39;border&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;1&#39;</span><span class="token punctuation">)</span>
  tableEle<span class="token punctuation">.</span><span class="token function">setAttribute</span><span class="token punctuation">(</span><span class="token string">&#39;cellpadding&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;0&#39;</span><span class="token punctuation">)</span>
  tableEle<span class="token punctuation">.</span><span class="token function">setAttribute</span><span class="token punctuation">(</span><span class="token string">&#39;cellspacing&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;0&#39;</span><span class="token punctuation">)</span>

  Object<span class="token punctuation">.</span><span class="token function">values</span><span class="token punctuation">(</span>popupColumns<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">prop<span class="token punctuation">,</span>index</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>prop<span class="token punctuation">[</span><span class="token string">&quot;name&quot;</span><span class="token punctuation">]</span> <span class="token operator">===</span> <span class="token string">&#39;id&#39;</span> <span class="token operator">||</span> prop<span class="token punctuation">[</span><span class="token string">&quot;name&quot;</span><span class="token punctuation">]</span> <span class="token operator">===</span> <span class="token string">&#39;import_oid&#39;</span><span class="token punctuation">)</span> <span class="token keyword">return</span>
    <span class="token keyword">const</span> trEle <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">createElement</span><span class="token punctuation">(</span><span class="token string">&#39;tr&#39;</span><span class="token punctuation">)</span>
    trEle<span class="token punctuation">.</span>className <span class="token operator">=</span> <span class="token string">&#39;table-tr&#39;</span>
    <span class="token keyword">const</span> firstTdEle <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">createElement</span><span class="token punctuation">(</span><span class="token string">&#39;td&#39;</span><span class="token punctuation">)</span>
    <span class="token keyword">const</span> secondTdEle <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">createElement</span><span class="token punctuation">(</span><span class="token string">&#39;td&#39;</span><span class="token punctuation">)</span>
    <span class="token comment">// firstTdEle.innerText = popupColumns[index].name //popupColumns[index].comment</span>
    firstTdEle<span class="token punctuation">.</span>innerText <span class="token operator">=</span> popupColumns<span class="token punctuation">[</span>index<span class="token punctuation">]</span><span class="token punctuation">.</span>comment
    secondTdEle<span class="token punctuation">.</span>innerText <span class="token operator">=</span> property<span class="token punctuation">[</span>popupColumns<span class="token punctuation">[</span>index<span class="token punctuation">]</span><span class="token punctuation">.</span>name<span class="token punctuation">]</span> <span class="token operator">||</span> <span class="token string">&#39;暂无&#39;</span>

    trEle<span class="token punctuation">.</span><span class="token function">appendChild</span><span class="token punctuation">(</span>firstTdEle<span class="token punctuation">)</span>
    trEle<span class="token punctuation">.</span><span class="token function">appendChild</span><span class="token punctuation">(</span>secondTdEle<span class="token punctuation">)</span>
    tableEle<span class="token punctuation">.</span><span class="token function">appendChild</span><span class="token punctuation">(</span>trEle<span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
  popupDiv<span class="token punctuation">.</span><span class="token function">appendChild</span><span class="token punctuation">(</span>headerAngleIcon<span class="token punctuation">)</span>
  popupDiv<span class="token punctuation">.</span><span class="token function">appendChild</span><span class="token punctuation">(</span>headerDiv<span class="token punctuation">)</span>
  popupDiv<span class="token punctuation">.</span><span class="token function">appendChild</span><span class="token punctuation">(</span>tableEle<span class="token punctuation">)</span>
  <span class="token keyword">const</span> extent <span class="token operator">=</span> polygonGeometry<span class="token punctuation">.</span><span class="token function">getExtent</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token keyword">const</span> center <span class="token operator">=</span> <span class="token function">getCenter</span><span class="token punctuation">(</span>extent<span class="token punctuation">)</span>

  <span class="token comment">// 创建Overlay popup</span>
  <span class="token keyword">const</span> overlay <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Overlay</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token string">&quot;temp-polygon&quot;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">position</span><span class="token operator">:</span> center<span class="token punctuation">,</span>
    <span class="token literal-property property">element</span><span class="token operator">:</span> popupDiv<span class="token punctuation">,</span>
    <span class="token literal-property property">offset</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">,</span><span class="token number">20</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token literal-property property">autoPan</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
    <span class="token literal-property property">autoPanMargin</span><span class="token operator">:</span> <span class="token number">1.25</span><span class="token punctuation">,</span>
    <span class="token literal-property property">positioning</span><span class="token operator">:</span> <span class="token string">&#39;top-center&#39;</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
  overlay<span class="token punctuation">.</span><span class="token function">setProperties</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">layerName</span><span class="token operator">:</span> <span class="token string">&quot;overLay&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">)</span>
  map<span class="token punctuation">.</span><span class="token function">addOverlay</span><span class="token punctuation">(</span>overlay<span class="token punctuation">)</span>

  <span class="token comment">// 监听popup移除事件</span>
  closeSpan<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">&#39;click&#39;</span><span class="token punctuation">,</span><span class="token parameter">evt</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token function">removeOverlayByName</span><span class="token punctuation">(</span><span class="token string">&#39;overLay&#39;</span><span class="token punctuation">,</span>map<span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token doc-comment comment">/**
 * 设置 Popup 数据查询信息弹窗
 * <span class="token keyword">@param</span> <span class="token parameter">results：分析结果数据</span>
 * <span class="token keyword">@param</span> <span class="token parameter">map：信息弹窗显示地图</span>
 */</span>
exportfunction <span class="token function">openPopupOfQueryLayer</span><span class="token punctuation">(</span><span class="token parameter">results<span class="token punctuation">,</span> map</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token function">removeOverlayByName</span><span class="token punctuation">(</span><span class="token string">&#39;overLay&#39;</span><span class="token punctuation">,</span>map<span class="token punctuation">)</span>
  <span class="token comment">//  自定义popup容器</span>
  <span class="token keyword">const</span> queryWrap <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">createElement</span><span class="token punctuation">(</span><span class="token string">&#39;div&#39;</span><span class="token punctuation">)</span>
  queryWrap<span class="token punctuation">.</span><span class="token function">setAttribute</span><span class="token punctuation">(</span><span class="token string">&#39;class&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;custom-popup&#39;</span><span class="token punctuation">)</span>
  <span class="token comment">// 自定义popup头部</span>
  <span class="token keyword">const</span> headerDiv <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">createElement</span><span class="token punctuation">(</span><span class="token string">&#39;header&#39;</span><span class="token punctuation">)</span>
  headerDiv<span class="token punctuation">.</span><span class="token function">setAttribute</span><span class="token punctuation">(</span><span class="token string">&#39;class&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;custom-popup-header&#39;</span><span class="token punctuation">)</span>
  <span class="token keyword">const</span> titleSpan <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">createElement</span><span class="token punctuation">(</span><span class="token string">&#39;span&#39;</span><span class="token punctuation">)</span>
  titleSpan<span class="token punctuation">.</span><span class="token function">setAttribute</span><span class="token punctuation">(</span><span class="token string">&#39;class&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;custom-popup-title&#39;</span><span class="token punctuation">)</span>
  titleSpan<span class="token punctuation">.</span>textContent <span class="token operator">=</span> <span class="token string">&quot;属性信息&quot;</span>
  <span class="token keyword">const</span> closeSpan <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">createElement</span><span class="token punctuation">(</span><span class="token string">&#39;span&#39;</span><span class="token punctuation">)</span>
  closeSpan<span class="token punctuation">.</span><span class="token function">setAttribute</span><span class="token punctuation">(</span><span class="token string">&#39;class&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;custom-popup-close&#39;</span><span class="token punctuation">)</span>
  closeSpan<span class="token punctuation">.</span>textContent <span class="token operator">=</span> <span class="token string">&quot;X&quot;</span>
  headerDiv<span class="token punctuation">.</span><span class="token function">appendChild</span><span class="token punctuation">(</span>titleSpan<span class="token punctuation">)</span>
  headerDiv<span class="token punctuation">.</span><span class="token function">appendChild</span><span class="token punctuation">(</span>closeSpan<span class="token punctuation">)</span>
  <span class="token comment">// 自定义属性内容区域</span>
  <span class="token keyword">const</span> queryBody <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">createElement</span><span class="token punctuation">(</span><span class="token string">&#39;div&#39;</span><span class="token punctuation">)</span>
  queryBody<span class="token punctuation">.</span><span class="token function">setAttribute</span><span class="token punctuation">(</span><span class="token string">&#39;class&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;query-body&#39;</span><span class="token punctuation">)</span>
  <span class="token comment">// 自定义头部定位角标</span>
  <span class="token keyword">const</span> headerAngleIcon <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">createElement</span><span class="token punctuation">(</span><span class="token string">&#39;span&#39;</span><span class="token punctuation">)</span>
  headerAngleIcon<span class="token punctuation">.</span><span class="token function">setAttribute</span><span class="token punctuation">(</span><span class="token string">&#39;class&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;custom-header-angle&#39;</span><span class="token punctuation">)</span>
  <span class="token comment">// 自定义popup表格</span>
  <span class="token keyword">const</span> tableEle <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">createElement</span><span class="token punctuation">(</span><span class="token string">&#39;table&#39;</span><span class="token punctuation">)</span>
  tableEle<span class="token punctuation">.</span>className <span class="token operator">=</span> <span class="token string">&quot;popup-table&quot;</span>
  tableEle<span class="token punctuation">.</span><span class="token function">setAttribute</span><span class="token punctuation">(</span><span class="token string">&#39;border&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;1&#39;</span><span class="token punctuation">)</span>
  tableEle<span class="token punctuation">.</span><span class="token function">setAttribute</span><span class="token punctuation">(</span><span class="token string">&#39;cellpadding&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;0&#39;</span><span class="token punctuation">)</span>
  tableEle<span class="token punctuation">.</span><span class="token function">setAttribute</span><span class="token punctuation">(</span><span class="token string">&#39;cellspacing&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;0&#39;</span><span class="token punctuation">)</span>

  <span class="token comment">// 自定义查询图层标题</span>
  <span class="token keyword">const</span> queryTabs <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">createElement</span><span class="token punctuation">(</span><span class="token string">&#39;div&#39;</span><span class="token punctuation">)</span>
  queryTabs<span class="token punctuation">.</span><span class="token function">setAttribute</span><span class="token punctuation">(</span><span class="token string">&#39;class&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;query-tabs&#39;</span><span class="token punctuation">)</span>
  <span class="token keyword">const</span> queryTabContent <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">createElement</span><span class="token punctuation">(</span><span class="token string">&quot;div&quot;</span><span class="token punctuation">)</span>
  queryTabContent<span class="token punctuation">.</span><span class="token function">setAttribute</span><span class="token punctuation">(</span><span class="token string">&#39;class&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;query-tab-content&#39;</span><span class="token punctuation">)</span>

  results<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token parameter">feature</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>feature<span class="token punctuation">.</span>geometry<span class="token punctuation">)</span><span class="token punctuation">{</span>
      <span class="token keyword">return</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">const</span> queryTabSpan <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">createElement</span><span class="token punctuation">(</span><span class="token string">&#39;span&#39;</span><span class="token punctuation">)</span>
    queryTabSpan<span class="token punctuation">.</span>textContent <span class="token operator">=</span> feature<span class="token punctuation">.</span>label
    queryTabSpan<span class="token punctuation">.</span><span class="token function">setAttribute</span><span class="token punctuation">(</span><span class="token string">&#39;class&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;query-tab-span&#39;</span><span class="token punctuation">)</span>
    queryTabContent<span class="token punctuation">.</span><span class="token function">appendChild</span><span class="token punctuation">(</span>queryTabSpan<span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
  queryTabs<span class="token punctuation">.</span><span class="token function">appendChild</span><span class="token punctuation">(</span>queryTabContent<span class="token punctuation">)</span>
  <span class="token comment">// 添加默认选中样式</span>
  <span class="token keyword">const</span> firstChild <span class="token operator">=</span> queryTabContent<span class="token punctuation">.</span>firstChild
  firstChild<span class="token punctuation">.</span>classList<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token string">&#39;query-tab-active&#39;</span><span class="token punctuation">)</span>
  <span class="token comment">// 添加要素默认样式</span>
<span class="token keyword">let</span> popupInfo <span class="token operator">=</span> results<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span>
  <span class="token comment">// 事件委托，展示目标选项,筛选显示图层</span>
  <span class="token keyword">const</span> tabArr <span class="token operator">=</span> queryTabContent<span class="token punctuation">.</span>childNodes
  queryTabContent<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">&#39;click&#39;</span><span class="token punctuation">,</span> <span class="token parameter">evt</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> targetElement <span class="token operator">=</span> evt<span class="token punctuation">.</span>target
    <span class="token keyword">if</span> <span class="token punctuation">(</span>targetElement<span class="token punctuation">.</span>tagName<span class="token punctuation">.</span><span class="token function">toUpperCase</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">!==</span> <span class="token string">&quot;SPAN&quot;</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
      <span class="token keyword">return</span>
    <span class="token punctuation">}</span>
    <span class="token function">removeOverlayByName</span><span class="token punctuation">(</span><span class="token string">&#39;overLay&#39;</span><span class="token punctuation">,</span>map<span class="token punctuation">)</span>
    tabArr<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token parameter">tab</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      tab<span class="token punctuation">.</span>classList<span class="token punctuation">.</span><span class="token function">remove</span><span class="token punctuation">(</span><span class="token string">&#39;query-tab-active&#39;</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
    targetElement<span class="token punctuation">.</span>classList<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token string">&#39;query-tab-active&#39;</span><span class="token punctuation">)</span>
    <span class="token keyword">const</span> layerName <span class="token operator">=</span> targetElement<span class="token punctuation">.</span>textContent

    popupInfo <span class="token operator">=</span> results<span class="token punctuation">.</span><span class="token function">find</span><span class="token punctuation">(</span><span class="token parameter">result</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      <span class="token keyword">const</span> defaultPolygon <span class="token operator">=</span> popupInfo<span class="token punctuation">[</span><span class="token string">&quot;polygon&quot;</span><span class="token punctuation">]</span>
      defaultPolygon<span class="token punctuation">.</span><span class="token function">setStyle</span><span class="token punctuation">(</span>defaultStyle<span class="token punctuation">)</span>
      <span class="token keyword">return</span> result<span class="token punctuation">.</span>label <span class="token operator">===</span> layerName
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
    tableEle<span class="token punctuation">.</span>innerHTML <span class="token operator">=</span> <span class="token string">&quot;&quot;</span>
    <span class="token function">showOverlay</span><span class="token punctuation">(</span>popupInfo<span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>

  <span class="token keyword">const</span> <span class="token function-variable function">showOverlay</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">popupInfo</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>popupInfo<span class="token punctuation">)</span><span class="token punctuation">{</span>
      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;信息弹窗：&quot;</span><span class="token punctuation">,</span>popupInfo<span class="token punctuation">)</span>
      tableEle<span class="token punctuation">.</span>innerHTML <span class="token operator">=</span> <span class="token string">&quot;&lt;span&gt;暂无数据&lt;/span&gt;&quot;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">const</span> popupColumns <span class="token operator">=</span> popupInfo<span class="token punctuation">[</span><span class="token string">&#39;popupColumns&#39;</span><span class="token punctuation">]</span>
    <span class="token keyword">const</span> property <span class="token operator">=</span> popupInfo<span class="token punctuation">[</span><span class="token string">&quot;properties&quot;</span><span class="token punctuation">]</span>

    <span class="token keyword">const</span> defaultPolygon <span class="token operator">=</span> popupInfo<span class="token punctuation">[</span><span class="token string">&quot;polygon&quot;</span><span class="token punctuation">]</span>
    defaultPolygon<span class="token punctuation">.</span><span class="token function">setStyle</span><span class="token punctuation">(</span>geometrySelectStyle<span class="token punctuation">[</span><span class="token string">&quot;Polygon&quot;</span><span class="token punctuation">]</span><span class="token punctuation">)</span>

    Object<span class="token punctuation">.</span><span class="token function">values</span><span class="token punctuation">(</span>popupColumns<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">prop<span class="token punctuation">,</span>index</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>prop<span class="token punctuation">[</span><span class="token string">&quot;name&quot;</span><span class="token punctuation">]</span> <span class="token operator">===</span> <span class="token string">&#39;id&#39;</span> <span class="token operator">||</span> prop<span class="token punctuation">[</span><span class="token string">&quot;name&quot;</span><span class="token punctuation">]</span> <span class="token operator">===</span> <span class="token string">&#39;import_oid&#39;</span><span class="token punctuation">)</span> <span class="token keyword">return</span>
      <span class="token keyword">const</span> trEle <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">createElement</span><span class="token punctuation">(</span><span class="token string">&#39;tr&#39;</span><span class="token punctuation">)</span>
      trEle<span class="token punctuation">.</span>className <span class="token operator">=</span> <span class="token string">&#39;table-tr&#39;</span>
      <span class="token keyword">const</span> firstTdEle <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">createElement</span><span class="token punctuation">(</span><span class="token string">&#39;td&#39;</span><span class="token punctuation">)</span>
      <span class="token keyword">const</span> secondTdEle <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">createElement</span><span class="token punctuation">(</span><span class="token string">&#39;td&#39;</span><span class="token punctuation">)</span>
      <span class="token comment">// firstTdEle.innerText = popupColumns[index].name //popupColumns[index].comment</span>
      firstTdEle<span class="token punctuation">.</span>innerText <span class="token operator">=</span> popupColumns<span class="token punctuation">[</span>index<span class="token punctuation">]</span><span class="token punctuation">.</span>comment
      secondTdEle<span class="token punctuation">.</span>innerText <span class="token operator">=</span> property<span class="token punctuation">[</span>popupColumns<span class="token punctuation">[</span>index<span class="token punctuation">]</span><span class="token punctuation">.</span>name<span class="token punctuation">]</span> <span class="token operator">||</span> <span class="token string">&#39;暂无&#39;</span>

      trEle<span class="token punctuation">.</span><span class="token function">appendChild</span><span class="token punctuation">(</span>firstTdEle<span class="token punctuation">)</span>
      trEle<span class="token punctuation">.</span><span class="token function">appendChild</span><span class="token punctuation">(</span>secondTdEle<span class="token punctuation">)</span>
      tableEle<span class="token punctuation">.</span><span class="token function">appendChild</span><span class="token punctuation">(</span>trEle<span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token keyword">const</span> geometry <span class="token operator">=</span> popupInfo<span class="token punctuation">[</span><span class="token string">&#39;geometry&#39;</span><span class="token punctuation">]</span>
    <span class="token keyword">const</span> geom <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">GeoJSON</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">readGeometry</span><span class="token punctuation">(</span>geometry<span class="token punctuation">)</span>
    <span class="token keyword">const</span> extent <span class="token operator">=</span> geom<span class="token punctuation">.</span><span class="token function">getExtent</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token keyword">const</span> center <span class="token operator">=</span> <span class="token function">getCenter</span><span class="token punctuation">(</span>extent<span class="token punctuation">)</span>
    map<span class="token punctuation">.</span><span class="token function">getView</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">fit</span><span class="token punctuation">(</span>extent<span class="token punctuation">)</span>
    <span class="token comment">// 创建Overlay popup</span>
    <span class="token keyword">const</span> overlay <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Overlay</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token string">&quot;temp-polygon&quot;</span><span class="token punctuation">,</span>
      <span class="token literal-property property">position</span><span class="token operator">:</span> center<span class="token punctuation">,</span>
      <span class="token literal-property property">element</span><span class="token operator">:</span> queryWrap<span class="token punctuation">,</span>
      <span class="token literal-property property">offset</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">,</span><span class="token number">20</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token literal-property property">autoPan</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
      <span class="token literal-property property">autoPanMargin</span><span class="token operator">:</span> <span class="token number">1.25</span><span class="token punctuation">,</span>
      <span class="token literal-property property">positioning</span><span class="token operator">:</span> <span class="token string">&#39;top-center&#39;</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
    overlay<span class="token punctuation">.</span><span class="token function">setProperties</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">layerName</span><span class="token operator">:</span> <span class="token string">&quot;overLay&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">)</span>
    map<span class="token punctuation">.</span><span class="token function">addOverlay</span><span class="token punctuation">(</span>overlay<span class="token punctuation">)</span>

    queryWrap<span class="token punctuation">.</span><span class="token function">appendChild</span><span class="token punctuation">(</span>headerAngleIcon<span class="token punctuation">)</span>
    queryWrap<span class="token punctuation">.</span><span class="token function">appendChild</span><span class="token punctuation">(</span>headerDiv<span class="token punctuation">)</span>
    queryWrap<span class="token punctuation">.</span><span class="token function">appendChild</span><span class="token punctuation">(</span>queryTabs<span class="token punctuation">)</span>
    queryWrap<span class="token punctuation">.</span><span class="token function">appendChild</span><span class="token punctuation">(</span>tableEle<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
  <span class="token function">showOverlay</span><span class="token punctuation">(</span>popupInfo<span class="token punctuation">)</span>
  <span class="token comment">// 监听popup移除事件</span>
  closeSpan<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">&#39;click&#39;</span><span class="token punctuation">,</span><span class="token parameter">evt</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token function">removeOverlayByName</span><span class="token punctuation">(</span><span class="token string">&#39;overLay&#39;</span><span class="token punctuation">,</span>map<span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre></div>`,32),e=[o];function c(u,l){return s(),a("div",null,e)}const r=n(t,[["render",c],["__file","ol_util.html.vue"]]);export{r as default};
