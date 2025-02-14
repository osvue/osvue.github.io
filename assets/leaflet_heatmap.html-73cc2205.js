import{_ as n,p as s,q as a,a1 as t}from"./framework-d81ad7e5.js";const p={},o=t(`<div class="language-vue" data-ext="vue"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> icon <span class="token keyword">from</span> <span class="token string">&#39;@/assets/pointIcon.png&#39;</span>
<span class="token keyword">import</span> <span class="token string">&#39;@/leaflet/leaflet.js&#39;</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;CenterMap&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">props</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">mapPointList</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">type</span><span class="token operator">:</span> Array<span class="token punctuation">,</span>
      <span class="token keyword">default</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token function">mounted</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">//地图初始化</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">initMap</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>mapPointList<span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">methods</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token comment">//DOM初始化完成进行地图初始化</span>
    <span class="token function">initMap</span><span class="token punctuation">(</span><span class="token parameter">list</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token comment">// 设置iocn</span>
      <span class="token keyword">var</span> myIcon <span class="token operator">=</span> <span class="token constant">L</span><span class="token punctuation">.</span><span class="token function">icon</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
        <span class="token literal-property property">iconUrl</span><span class="token operator">:</span> icon<span class="token punctuation">,</span> <span class="token comment">//图标</span>
        <span class="token literal-property property">iconSize</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">25</span><span class="token punctuation">,</span> <span class="token number">34</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token comment">//大小</span>
        <span class="token literal-property property">iconAnchor</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">12.5</span><span class="token punctuation">,</span> <span class="token number">34</span><span class="token punctuation">]</span> <span class="token comment">//偏移量</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span>
      <span class="token comment">// 初始化地图</span>
      <span class="token keyword">var</span> map <span class="token operator">=</span> <span class="token constant">L</span><span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token string">&#39;container&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">setView</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">28.697005</span><span class="token punctuation">,</span> <span class="token number">115.885607</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token number">8</span><span class="token punctuation">)</span>
      <span class="token comment">// 瓦片图层</span>
      <span class="token constant">L</span><span class="token punctuation">.</span><span class="token function">tileLayer</span><span class="token punctuation">(</span><span class="token string">&#39;/staticImg/{z}/{x}/{y}.png&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">minZoom</span><span class="token operator">:</span> <span class="token number">7</span><span class="token punctuation">,</span> <span class="token comment">//最小缩小层级</span>
        <span class="token literal-property property">maxZoom</span><span class="token operator">:</span> <span class="token number">12</span><span class="token punctuation">,</span> <span class="token comment">//最大放大层级</span>
        <span class="token literal-property property">attribution</span><span class="token operator">:</span> <span class="token string">&#39;&lt;b style=&quot;color:#40a9ff&quot;&gt;高德地图&lt;/b&gt;&#39;</span> <span class="token comment">//版权信息</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">addTo</span><span class="token punctuation">(</span>map<span class="token punctuation">)</span>
      <span class="token comment">// 通过数据标注icon</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>list<span class="token punctuation">.</span>length <span class="token operator">&gt;</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        list<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token parameter">v</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
          <span class="token comment">// 这里是纬度在前 【纬度，经度】</span>
          <span class="token keyword">var</span> marker <span class="token operator">=</span> <span class="token constant">L</span><span class="token punctuation">.</span><span class="token function">marker</span><span class="token punctuation">(</span>v<span class="token punctuation">.</span>point<span class="token punctuation">,</span> <span class="token punctuation">{</span>
            <span class="token literal-property property">icon</span><span class="token operator">:</span> myIcon <span class="token comment">//icon</span>
          <span class="token punctuation">}</span><span class="token punctuation">)</span>
            <span class="token punctuation">.</span><span class="token function">addTo</span><span class="token punctuation">(</span>map<span class="token punctuation">)</span>
            <span class="token comment">// Tooltip 工具提示 https://leafletjs.cn/reference.html#tooltip</span>
            <span class="token punctuation">.</span><span class="token function">bindTooltip</span><span class="token punctuation">(</span>v<span class="token punctuation">.</span>deviceName<span class="token punctuation">,</span> <span class="token punctuation">{</span>
              <span class="token literal-property property">permanent</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span> <span class="token comment">//是永久打开 Tooltip 还是只在鼠标移动时打开。</span>
              <span class="token literal-property property">direction</span><span class="token operator">:</span> <span class="token string">&#39;bottom&#39;</span><span class="token punctuation">,</span> <span class="token comment">//打开 Tooltip 的方向</span>
              <span class="token literal-property property">offset</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token comment">//Tooltip 位置的可选偏移</span>
              <span class="token literal-property property">opacity</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token comment">//Tooltip 容器透明度</span>
              <span class="token literal-property property">autoPlan</span><span class="token operator">:</span> <span class="token boolean">true</span> <span class="token comment">//跟随缩放变化 好像没有起作用</span>
            <span class="token punctuation">}</span><span class="token punctuation">)</span>
          marker<span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span><span class="token string">&#39;click&#39;</span><span class="token punctuation">,</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">e</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token constant">L</span><span class="token punctuation">.</span><span class="token function">popup</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
              <span class="token literal-property property">offset</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token operator">-</span><span class="token number">25</span><span class="token punctuation">]</span> <span class="token comment">//popup 位置的可选偏移</span>
            <span class="token punctuation">}</span><span class="token punctuation">)</span>
              <span class="token punctuation">.</span><span class="token function">setLatLng</span><span class="token punctuation">(</span>v<span class="token punctuation">.</span>point<span class="token punctuation">)</span>
              <span class="token punctuation">.</span><span class="token function">setContent</span><span class="token punctuation">(</span>
                <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">&lt;p style=&#39;text-align:center&#39;&gt;</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>v<span class="token punctuation">.</span>deviceName<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">&lt;/p&gt;
                &lt;p&gt;设备编码：</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>v<span class="token punctuation">.</span>deviceCode<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">&lt;/p&gt;
                &lt;p&gt;设备地址：</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span> v<span class="token punctuation">.</span>address <span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">&lt;/p&gt;
                &lt;p&gt;设备状态：&lt;span style=&quot;background-color:</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>v<span class="token punctuation">.</span>state <span class="token operator">==</span> <span class="token number">0</span> <span class="token operator">?</span> <span class="token string">&#39;green&#39;</span> <span class="token operator">:</span> <span class="token string">&#39;red&#39;</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">;color: #fff;
                padding: 2px 4px;&quot;&gt;</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>v<span class="token punctuation">.</span>state <span class="token operator">==</span> <span class="token number">0</span> <span class="token operator">?</span> <span class="token string">&#39;在线&#39;</span> <span class="token operator">:</span> <span class="token string">&#39;离线&#39;</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">&lt;/span&gt;&lt;/p&gt;</span><span class="token template-punctuation string">\`</span></span>
              <span class="token punctuation">)</span>
              <span class="token punctuation">.</span><span class="token function">openOn</span><span class="token punctuation">(</span>map<span class="token punctuation">)</span>
          <span class="token punctuation">}</span><span class="token punctuation">)</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token comment">// 父组件调用 接口更新地图随之更新</span>
    <span class="token function">setMapData</span><span class="token punctuation">(</span><span class="token parameter">list</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token comment">//地图初始化</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">initMap</span><span class="token punctuation">(</span>list<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><h3 id="leaflet热力图" tabindex="-1"><a class="header-anchor" href="#leaflet热力图" aria-hidden="true">#</a> Leaflet热力图</h3><ul><li>Leaflet热力图开发库展示热力图方法，结合leaflet.heat插件可以很容易的做出热力图</li><li>通过调整其配置参数可以优化热力图的显示，以达到最佳的可视化效果</li></ul><p>Leaflet主要插件：leaflet.heat 插件简介与安装</p><ul><li>Leaflet.heat是 一个小巧，简单，快速的Leaflet热图插件。</li></ul><p>官方文档 https://github.com/Leaflet/Leaflet.heat</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 插件安装</span>
<span class="token function">npm</span> i leaflet.heat
<span class="token comment"># 引入热力图插件</span>
<span class="token function">import</span> <span class="token string">&#39;leaflet.heat&#39;</span>
</code></pre></div><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">let</span> heatDataList <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
<span class="token comment">// 构造热力图数据</span>
HeatData<span class="token punctuation">.</span>features<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">v</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token comment">// 纬度、经度、阈值</span>
    <span class="token keyword">let</span> group <span class="token operator">=</span> <span class="token punctuation">[</span>v<span class="token punctuation">.</span>properties<span class="token punctuation">.</span>lat<span class="token punctuation">,</span> v<span class="token punctuation">.</span>properties<span class="token punctuation">.</span>lon<span class="token punctuation">,</span> v<span class="token punctuation">.</span>properties<span class="token punctuation">.</span>valve<span class="token punctuation">]</span>
    heatDataList<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>group<span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token comment">// 生成热力图图层，并添加到地图中</span>
<span class="token keyword">let</span> heat <span class="token operator">=</span> <span class="token constant">L</span><span class="token punctuation">.</span><span class="token function">heatLayer</span><span class="token punctuation">(</span>heatDataList<span class="token punctuation">,</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">radius</span><span class="token operator">:</span> <span class="token number">12</span><span class="token punctuation">,</span> 
    <span class="token literal-property property">minOpacity</span><span class="token operator">:</span> <span class="token number">0.2</span><span class="token punctuation">,</span>
    <span class="token literal-property property">gradient</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token comment">// 自定义渐变颜色，区间为 0~1 之间(也可以不指定颜色，使用默认颜色)</span>
      <span class="token string-property property">&#39;0.2&#39;</span><span class="token operator">:</span> <span class="token string">&quot;#00f&quot;</span><span class="token punctuation">,</span>
      <span class="token string-property property">&#39;0.3&#39;</span><span class="token operator">:</span> <span class="token string">&quot;#0ff&quot;</span><span class="token punctuation">,</span>
      <span class="token string-property property">&#39;0.5&#39;</span><span class="token operator">:</span> <span class="token string">&quot;#0f0&quot;</span><span class="token punctuation">,</span>
      <span class="token string-property property">&#39;0.7&#39;</span><span class="token operator">:</span> <span class="token string">&quot;#ff0&quot;</span><span class="token punctuation">,</span>
      <span class="token string-property property">&#39;1&#39;</span><span class="token operator">:</span> <span class="token string">&quot;#f00&quot;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">addTo</span><span class="token punctuation">(</span>map<span class="token punctuation">)</span><span class="token punctuation">;</span>

</code></pre></div><table><thead><tr><th>方法</th><th>说明</th></tr></thead><tbody><tr><td>setOptions(options)</td><td>设置新的热力图heatmap属性并重新绘制</td></tr><tr><td>addLatLng(latlng)</td><td>向热力图heatmap动态添加数据并重新绘制</td></tr><tr><td>setLatLngs(latlngs)</td><td>重置热力图heatmap数据并重新绘制</td></tr><tr><td>redraw()</td><td>重绘热力图</td></tr></tbody></table><div class="language-vue" data-ext="vue"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>app-contain<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token comment">&lt;!-- leaflet 地图容器 --&gt;</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>myMap<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
<span class="token comment">// 引入热力图数据点状geojson</span>
<span class="token keyword">import</span> HeatData <span class="token keyword">from</span> <span class="token string">&#39;/@/assets/mapData/heatData.json&#39;</span>
<span class="token comment">// 引入样式</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> onMounted <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span>
<span class="token keyword">import</span> <span class="token constant">L</span> <span class="token keyword">from</span> <span class="token string">&#39;leaflet&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token string">&#39;leaflet/dist/leaflet.css&#39;</span>
<span class="token comment">// 热力图</span>
<span class="token keyword">import</span> <span class="token string">&#39;leaflet.heat&#39;</span>
<span class="token comment">// 天地图TK</span>
<span class="token keyword">let</span> tdtKey <span class="token operator">=</span> <span class="token string">&#39;YOURS_TK&#39;</span>
<span class="token keyword">const</span> <span class="token function-variable function">initMap</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token comment">// 影像地图</span>
  <span class="token keyword">const</span> sourceMap <span class="token operator">=</span> <span class="token constant">L</span><span class="token punctuation">.</span><span class="token function">tileLayer</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">https://map.geoq.cn/ArcGIS/rest/services/ChinaOnlineStreetPurplishBlue/MapServer/tile/{z}/{y}/{x}</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span>
  <span class="token comment">// 天地图注记</span>
  <span class="token keyword">const</span> tiandituText <span class="token operator">=</span> <span class="token constant">L</span><span class="token punctuation">.</span><span class="token function">tileLayer</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">htATRIX={z}&amp;TILEROW={y}&amp;TILECOL={x}&amp;tk=</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>tdtKey<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span>
  <span class="token keyword">const</span> layers <span class="token operator">=</span> <span class="token constant">L</span><span class="token punctuation">.</span><span class="token function">layerGroup</span><span class="token punctuation">(</span><span class="token punctuation">[</span>sourceMap<span class="token punctuation">,</span> tiandituText<span class="token punctuation">]</span><span class="token punctuation">)</span>
  <span class="token keyword">let</span> map <span class="token operator">=</span> <span class="token constant">L</span><span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token string">&#39;myMap&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>  <span class="token comment">//需绑定地图容器div的id</span>
    <span class="token literal-property property">center</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">25.67052</span><span class="token punctuation">,</span> <span class="token number">121.99804</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token comment">//初始地图中心</span>
    <span class="token literal-property property">zoom</span><span class="token operator">:</span> <span class="token number">12</span><span class="token punctuation">,</span> <span class="token comment">//初始缩放等级</span>
    <span class="token literal-property property">maxZoom</span><span class="token operator">:</span> <span class="token number">20</span><span class="token punctuation">,</span>
    <span class="token literal-property property">minZoom</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
    <span class="token literal-property property">zoomControl</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token comment">//缩放组件</span>
    <span class="token literal-property property">attributionControl</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span> <span class="token comment">//去掉右下角logol</span>
    <span class="token literal-property property">scrollWheelZoom</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token comment">//默认开启鼠标滚轮缩放</span>
    <span class="token comment">// 限制显示地理范围</span>
    <span class="token literal-property property">maxBounds</span><span class="token operator">:</span> <span class="token constant">L</span><span class="token punctuation">.</span><span class="token function">latLngBounds</span><span class="token punctuation">(</span><span class="token constant">L</span><span class="token punctuation">.</span><span class="token function">latLng</span><span class="token punctuation">(</span><span class="token operator">-</span><span class="token number">90</span><span class="token punctuation">,</span> <span class="token operator">-</span><span class="token number">180</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token constant">L</span><span class="token punctuation">.</span><span class="token function">latLng</span><span class="token punctuation">(</span><span class="token number">90</span><span class="token punctuation">,</span> <span class="token number">180</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token literal-property property">layers</span><span class="token operator">:</span> <span class="token punctuation">[</span>layers<span class="token punctuation">]</span> <span class="token comment">// 图层</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token comment">// 添加比例尺要素显示</span>
  <span class="token constant">L</span><span class="token punctuation">.</span>control<span class="token punctuation">.</span><span class="token function">scale</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">maxWidth</span><span class="token operator">:</span> <span class="token number">200</span><span class="token punctuation">,</span> <span class="token literal-property property">metric</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token literal-property property">imperial</span><span class="token operator">:</span> <span class="token boolean">false</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">addTo</span><span class="token punctuation">(</span>map<span class="token punctuation">)</span>
  <span class="token doc-comment comment">/** 热力图 */</span>
  <span class="token keyword">let</span> heatDataList <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
  HeatData<span class="token punctuation">.</span>features<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">v</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> group <span class="token operator">=</span> <span class="token punctuation">[</span>v<span class="token punctuation">.</span>properties<span class="token punctuation">.</span>lat<span class="token punctuation">,</span> v<span class="token punctuation">.</span>properties<span class="token punctuation">.</span>lon<span class="token punctuation">,</span> v<span class="token punctuation">.</span>properties<span class="token punctuation">.</span>valve<span class="token punctuation">]</span>
    heatDataList<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>group<span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token comment">// 生成热力图图层，并添加到地图中</span>
  <span class="token keyword">let</span> heat <span class="token operator">=</span> <span class="token constant">L</span><span class="token punctuation">.</span><span class="token function">heatLayer</span><span class="token punctuation">(</span>heatDataList<span class="token punctuation">,</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">radius</span><span class="token operator">:</span> <span class="token number">12</span><span class="token punctuation">,</span> <span class="token literal-property property">minOpacity</span><span class="token operator">:</span> <span class="token number">0.2</span><span class="token punctuation">,</span>
    <span class="token comment">/*
    gradient: { // 自定义渐变颜色，区间为 0~1 之间
      &#39;0.2&#39;: &quot;#00f&quot;,
      &#39;0.3&#39;: &quot;#0ff&quot;,
      &#39;0.5&#39;: &quot;#0f0&quot;,
      &#39;0.7&#39;: &quot;#ff0&quot;,
      &#39;1&#39;: &quot;#f00&quot;
    }
     */</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">addTo</span><span class="token punctuation">(</span>map<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token punctuation">}</span>
<span class="token function">onMounted</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token function">initMap</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span> <span class="token attr-name">scoped</span><span class="token punctuation">&gt;</span></span><span class="token style"><span class="token language-css">
<span class="token selector">#myMap</span> <span class="token punctuation">{</span>
  <span class="token property">width</span><span class="token punctuation">:</span> 92vw<span class="token punctuation">;</span>
  <span class="token property">height</span><span class="token punctuation">:</span> 92vh<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">&gt;</span></span>

</code></pre></div>`,10),e=[o];function c(l,u){return s(),a("div",null,e)}const i=n(p,[["render",c],["__file","leaflet_heatmap.html.vue"]]);export{i as default};
