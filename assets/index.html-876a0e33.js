import{_ as o,M as e,p as c,q as l,R as n,t as a,N as t,a1 as p}from"./framework-d81ad7e5.js";const u="/assets/cesium-bbfbf353.jpg",i="/assets/wdd-594c3235.png",r={},k=n("p",null,[n("img",{src:u,alt:"al"})],-1),m={href:"https://ion.cesium.com/tokens?page=1",target:"_blank",rel:"noopener noreferrer"},d=p('<ul><li><ol><li>数据模型，其中Cesium支持开源及部分商业化的二维数据格式，三维数据统一为Cesium统一格式3Dtile,其由Cesium团队创建并基于gltf构建， 详细介绍：https://github.com/CesiumGS/3d-tiles#introduction‘</li></ol></li><li><ol start="2"><li>实体Entity，实体可以看作是数据模型在Cesium中的抽象化，对于数据模型的控制，在Cesium中即为对实体的操作，故Cesium实体模块较为重要。</li></ol></li><li><ol start="3"><li>图像Imagery，影像模块，大部分用于地球整体底图，或者某区域下遥感影像图在地球下的完美附着。</li></ol></li><li><ol start="4"><li>地形Terrain，地形模块以网格化算法，利用DEM或其他相关数据构建真实的地球地形地貌。是处理地球行为的基础。</li></ol></li><li><ol start="5"><li>相机Camera，相机模块是可视化的核心部件，利用相机可以展现规定范围，或根据时间，地理属性实现动态可视化。</li></ol></li><li><ol start="6"><li>几何与样式，几何和样式赋予了地球自定义化，几何的存在也让地理处理有了载体，例如裁剪，挖掘，展示面积，线段等</li></ol></li><li><ol start="7"><li>粒子系统，粒子系统是Cesium较先进的模块，利用WebGL渲染技术实现天气，仿真喷气，仿真流体等功能，非常适合仿真项目。</li></ol></li></ul><h4 id="cesium支持的数据格式" tabindex="-1"><a class="header-anchor" href="#cesium支持的数据格式" aria-hidden="true">#</a> Cesium支持的数据格式</h4><ul><li><strong>影像数据</strong>：Bing、天地图、ArcGIS、OSM、WMTS、WMS等</li><li><strong>地形数据</strong>：ArcGIS、谷歌、STK等</li><li><strong>矢量数据</strong>：KML、KMZ、GeoJSON、TopoJSON、CZML</li><li><strong>三维模型</strong>：GLTF、GLB（二进制glTF文件）</li><li><strong>三维瓦片</strong>：3D Tiles（倾斜摄影、人工模型、 三维建筑物、CAD、BIM，点云数据等）</li></ul><h3 id="经纬度" tabindex="-1"><a class="header-anchor" href="#经纬度" aria-hidden="true">#</a> 经纬度</h3><ul><li>经纬度的有效范围为<code>经度 -180 度到 +180 度</code>，纬度大约 <code>-85 度到 +85 度</code>。</li></ul><p><img src="'+i+`" alt="jdw"></p><ul><li>按国际规定英国首都伦敦<strong>格林尼治天文台原址</strong>的那一条经线定为<strong>0°经线</strong>，然后向左右延伸。而各地的时区也由此划分，每15个经度便相差一个小时。经度作为地理学的一个基础，是认识地球转动和区域地理划分的基础理论。</li><li>纬度：是指某点与地球球心的连线 <ul><li><strong>和地球赤道面所成的线面角</strong> ，其数值在0至90度之间。位于赤道以北的点的纬度叫北纬，记为N，位于赤道以南的点的纬度称南纬，记为 S</li></ul></li></ul><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token number">1</span>，<span class="token constant">WGS84</span>经纬度坐标；
系统中没有具体的对象。

<span class="token number">2</span>，<span class="token constant">WGS84</span>弧度坐标（Cartographic）；
对象创建： <span class="token keyword">new</span> <span class="token class-name">Cesium<span class="token punctuation">.</span>Cartographic</span><span class="token punctuation">(</span>lon<span class="token punctuation">,</span>lat<span class="token punctuation">,</span>alt<span class="token punctuation">)</span><span class="token punctuation">;</span>

du <span class="token operator">=</span> radus<span class="token operator">/</span>pi<span class="token operator">*</span><span class="token number">180</span><span class="token punctuation">;</span>

cos sin tan 

lon：经度，lat：维度，alt：海拔

<span class="token number">3</span>，笛卡尔空间直角坐标系（Cartesian3）；
对象创建： <span class="token keyword">new</span> <span class="token class-name">Cesium<span class="token punctuation">.</span>Cartesian3</span><span class="token punctuation">(</span>x<span class="token punctuation">,</span>y<span class="token punctuation">,</span>z<span class="token punctuation">)</span><span class="token punctuation">;</span>

x：x轴坐标，y：y轴坐标，z：z轴坐标

<span class="token number">4</span>，平面坐标系（Cartesian2）；
对象创建： <span class="token keyword">new</span> <span class="token class-name">Cesium<span class="token punctuation">.</span>Cartesian2</span><span class="token punctuation">(</span>x<span class="token punctuation">,</span>y<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">{</span><span class="token literal-property property">x</span><span class="token operator">:</span><span class="token number">45645</span><span class="token punctuation">,</span><span class="token literal-property property">y</span><span class="token operator">:</span><span class="token number">588</span><span class="token punctuation">,</span><span class="token literal-property property">z</span><span class="token operator">:</span><span class="token number">5855</span><span class="token punctuation">}</span>
<span class="token number">1</span>，弧度经纬度转换
弧度转经纬度 <span class="token keyword">var</span> degrees <span class="token operator">=</span> Cesium<span class="token punctuation">.</span>Math<span class="token punctuation">.</span><span class="token function">toDegrees</span><span class="token punctuation">(</span>radians<span class="token punctuation">)</span><span class="token punctuation">;</span>

经纬度转弧度 <span class="token keyword">var</span> radians<span class="token operator">=</span> Cesium<span class="token punctuation">.</span>Math<span class="token punctuation">.</span><span class="token function">toRadiancs</span><span class="token punctuation">(</span>degrees<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token number">2</span>，<span class="token constant">WGS84</span>坐标构建
由弧度创建 <span class="token keyword">var</span> cartogrographic <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Cesium<span class="token punctuation">.</span>Cartographic</span><span class="token punctuation">(</span>lonradians<span class="token punctuation">,</span>latradians<span class="token punctuation">,</span>alt<span class="token punctuation">)</span><span class="token punctuation">;</span>

静态函数 <span class="token keyword">var</span> cartogrographic <span class="token operator">=</span>Cesium<span class="token punctuation">.</span>Cartogrophic<span class="token punctuation">.</span><span class="token function">fromRadians</span><span class="token punctuation">(</span>lonradians<span class="token punctuation">,</span>latradians<span class="token punctuation">,</span>alt<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">var</span> cartogrographic <span class="token operator">=</span>Cesium<span class="token punctuation">.</span>Cartogrophic<span class="token punctuation">.</span><span class="token function">fromDegrees</span><span class="token punctuation">(</span>londegree<span class="token punctuation">,</span>latdegree<span class="token punctuation">,</span>alt<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token number">3</span>，<span class="token constant">WGS84</span>弧度坐标与笛卡尔空间直角坐标系转换
<span class="token keyword">var</span> cartesian3 <span class="token operator">=</span> Cesium<span class="token punctuation">.</span>Cartesian3<span class="token punctuation">.</span><span class="token function">fromDegrees</span><span class="token punctuation">(</span>londegree<span class="token punctuation">,</span>latdegree<span class="token punctuation">,</span>alt<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">var</span> cartesian3s <span class="token operator">=</span> Cesium<span class="token punctuation">.</span>Cartesian3<span class="token punctuation">.</span><span class="token function">fromDegreesArray</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">108</span><span class="token punctuation">,</span><span class="token number">39</span><span class="token punctuation">,</span><span class="token number">119</span><span class="token punctuation">,</span><span class="token number">38</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span> 没有高度

<span class="token keyword">var</span> cartesian3s <span class="token operator">=</span> Cesium<span class="token punctuation">.</span>Cartesian3<span class="token punctuation">.</span><span class="token function">fromDegreesArrayHeights</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">108</span><span class="token punctuation">,</span><span class="token number">39</span><span class="token punctuation">,</span><span class="token number">1000</span><span class="token punctuation">,</span><span class="token number">119</span><span class="token punctuation">,</span><span class="token number">38</span><span class="token punctuation">,</span><span class="token number">200</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>有高度

<span class="token keyword">var</span> cartographic <span class="token operator">=</span> Cesium<span class="token punctuation">.</span>Ellipsoid<span class="token punctuation">.</span><span class="token constant">WGS84</span><span class="token punctuation">.</span><span class="token function">cartesianToCartographic</span><span class="token punctuation">(</span>cartesian3<span class="token punctuation">)</span>；
<span class="token keyword">var</span> cartographics <span class="token operator">=</span> Cesium<span class="token punctuation">.</span>Ellipsoid<span class="token punctuation">.</span><span class="token constant">WGS84</span><span class="token punctuation">.</span><span class="token function">cartesianArrayToCartographicArray</span><span class="token punctuation">(</span><span class="token punctuation">[</span>cartesian1<span class="token punctuation">,</span>cartesian2<span class="token punctuation">,</span>cartesian3<span class="token punctuation">]</span><span class="token punctuation">)</span>；
<span class="token number">4</span> 世界坐标转屏幕坐标
<span class="token keyword">var</span> cartesian2<span class="token operator">=</span> Cesium<span class="token punctuation">.</span>SceneTransforms<span class="token punctuation">.</span><span class="token function">wgs84ToWindowCoordinates</span><span class="token punctuation">(</span>viewer<span class="token punctuation">.</span>scene<span class="token punctuation">,</span>cartesian3<span class="token punctuation">)</span>
 <span class="token keyword">var</span> position <span class="token operator">=</span> viewer<span class="token punctuation">.</span>scene<span class="token punctuation">.</span><span class="token function">pickPosition</span><span class="token punctuation">(</span>movement<span class="token punctuation">.</span>position<span class="token punctuation">)</span><span class="token punctuation">;</span>

 <span class="token keyword">var</span> handler <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Cesium<span class="token punctuation">.</span>ScreenSpaceEventHandler</span><span class="token punctuation">(</span>viewer<span class="token punctuation">.</span>scene<span class="token punctuation">.</span>canvas<span class="token punctuation">)</span><span class="token punctuation">;</span>
  handler<span class="token punctuation">.</span><span class="token function">setInputAction</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">movement</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">var</span> ray <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>viewer<span class="token punctuation">.</span>camera<span class="token punctuation">.</span><span class="token function">getPickRay</span><span class="token punctuation">(</span>movement<span class="token punctuation">.</span>position<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>ray<span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
      <span class="token keyword">var</span> position <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>viewer<span class="token punctuation">.</span>scene<span class="token punctuation">.</span>globe<span class="token punctuation">.</span><span class="token function">pick</span><span class="token punctuation">(</span>ray<span class="token punctuation">,</span> <span class="token keyword">this</span><span class="token punctuation">.</span>viewer<span class="token punctuation">.</span>scene<span class="token punctuation">)</span><span class="token punctuation">;</span>
      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>movement<span class="token punctuation">.</span>position<span class="token punctuation">)</span><span class="token punctuation">;</span>
      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>position<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span> Cesium<span class="token punctuation">.</span>ScreenSpaceEventType<span class="token punctuation">.</span><span class="token constant">LEFT_CLICK</span><span class="token punctuation">)</span><span class="token punctuation">;</span> 
</code></pre></div><ul><li>stu</li><li>https://blog.csdn.net/u014523388/category_11904695.html</li></ul><h3 id="四元数" tabindex="-1"><a class="header-anchor" href="#四元数" aria-hidden="true">#</a> 四元数</h3><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code>
<span class="token keyword">const</span> cesiumContainer <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token function">onMounted</span><span class="token punctuation">(</span><span class="token keyword">async</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>cesiumContainer<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        viewer <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Cesium<span class="token punctuation">.</span>Viewer</span><span class="token punctuation">(</span>cesiumContainer<span class="token punctuation">.</span>value<span class="token punctuation">,</span> <span class="token punctuation">{</span>
            <span class="token literal-property property">timeline</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token comment">// 时间轴</span>
            <span class="token literal-property property">animation</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token comment">// 动画控件</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        viewer<span class="token punctuation">.</span>scene<span class="token punctuation">.</span>debugShowFramesPerSecond <span class="token operator">=</span> <span class="token boolean">true</span>

        <span class="token keyword">let</span> cdatasouce <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Cesium<span class="token punctuation">.</span>CustomDataSource</span><span class="token punctuation">(</span><span class="token string">&#39;cs&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>cdatasouce<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">let</span> timedata <span class="token operator">=</span> <span class="token keyword">await</span> Cesium<span class="token punctuation">.</span>CzmlDataSource<span class="token punctuation">.</span><span class="token function">load</span><span class="token punctuation">(</span><span class="token string">&#39;/src/assets/cz/ClampToGround.czml&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">let</span> md <span class="token operator">=</span> timedata<span class="token punctuation">.</span>entities<span class="token punctuation">.</span><span class="token function">getById</span><span class="token punctuation">(</span><span class="token string">&#39;CesiumMilkTruck&#39;</span><span class="token punctuation">)</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>timedata<span class="token punctuation">.</span>orientation<span class="token punctuation">,</span> md<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">// timedata.orientation = new Cesium.VelocityOrientationProperty(timedata.position);</span>
        viewer<span class="token punctuation">.</span>dataSources<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>timedata<span class="token punctuation">)</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>timedata<span class="token punctuation">)</span><span class="token punctuation">;</span>
        viewer<span class="token punctuation">.</span>trackedEntity <span class="token operator">=</span> md


        <span class="token comment">//  调整获取4元数 </span>
        <span class="token keyword">let</span> quater <span class="token operator">=</span> Cesium<span class="token punctuation">.</span>Quaternion<span class="token punctuation">.</span><span class="token function">fromHeadingPitchRoll</span><span class="token punctuation">(</span>
            <span class="token keyword">new</span> <span class="token class-name">Cesium<span class="token punctuation">.</span>HeadingPitchRoll</span><span class="token punctuation">(</span>
                Cesium<span class="token punctuation">.</span>Math<span class="token punctuation">.</span><span class="token function">toRadians</span><span class="token punctuation">(</span><span class="token number">150</span><span class="token punctuation">)</span><span class="token punctuation">,</span>

                Cesium<span class="token punctuation">.</span>Math<span class="token punctuation">.</span><span class="token function">toRadians</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
                Cesium<span class="token punctuation">.</span>Math<span class="token punctuation">.</span><span class="token function">toRadians</span><span class="token punctuation">(</span><span class="token operator">-</span><span class="token number">50</span><span class="token punctuation">)</span>
            <span class="token punctuation">)</span>
        <span class="token punctuation">)</span>
        viewer<span class="token punctuation">.</span>trackedEntity<span class="token punctuation">.</span>orientation <span class="token operator">=</span> quater<span class="token punctuation">;</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;---------&#39;</span><span class="token punctuation">,</span> viewer<span class="token punctuation">.</span>trackedEntity<span class="token punctuation">.</span>orientation<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">let</span> matrix <span class="token operator">=</span> viewer<span class="token punctuation">.</span>trackedEntity<span class="token punctuation">.</span><span class="token function">computeModelMatrix</span><span class="token punctuation">(</span>Cesium<span class="token punctuation">.</span>JulianDate<span class="token punctuation">.</span><span class="token function">fromIso8601</span><span class="token punctuation">(</span><span class="token string">&#39;2018-07-19T15:18:00Z&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>matrix<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token comment">// X Y Z  H P R heading pich roll </span>
        viewer<span class="token punctuation">.</span>scene<span class="token punctuation">.</span>primitives<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>
            <span class="token keyword">new</span> <span class="token class-name">Cesium<span class="token punctuation">.</span>DebugModelMatrixPrimitive</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
                <span class="token literal-property property">modelMatrix</span><span class="token operator">:</span> matrix<span class="token punctuation">,</span>
                <span class="token literal-property property">length</span><span class="token operator">:</span> <span class="token number">10000.0</span><span class="token punctuation">,</span>
                <span class="token literal-property property">width</span><span class="token operator">:</span> <span class="token number">10.0</span>
            <span class="token punctuation">}</span><span class="token punctuation">)</span>
        <span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

</code></pre></div><ul><li>使用Viewer里面时钟得ontrick事件</li></ul><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code>viewer<span class="token punctuation">.</span>clock<span class="token punctuation">.</span>onTick<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">clock</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
          
        <span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre></div><p><strong>这个事件是一直被触发得</strong></p><h3 id="glb模型下载" tabindex="-1"><a class="header-anchor" href="#glb模型下载" aria-hidden="true">#</a> glb模型下载</h3>`,15),g={href:"https://glbxz.com/",target:"_blank",rel:"noopener noreferrer"},y=p(`<h3 id="nginx-离线加载" tabindex="-1"><a class="header-anchor" href="#nginx-离线加载" aria-hidden="true">#</a> nginx 离线加载</h3><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code>      viewer<span class="token punctuation">.</span>cesiumWidget<span class="token punctuation">.</span>creditContainer<span class="token punctuation">.</span>style<span class="token punctuation">.</span>display <span class="token operator">=</span> <span class="token string">&#39;none&#39;</span> <span class="token comment">// 去掉版权</span>

        <span class="token comment">// 加载arcgis蓝色背景的本地地图</span>
        <span class="token keyword">var</span> arcgis_blue <span class="token operator">=</span> viewer<span class="token punctuation">.</span>scene<span class="token punctuation">.</span>imageryLayers<span class="token punctuation">.</span><span class="token function">addImageryProvider</span><span class="token punctuation">(</span>
            <span class="token keyword">new</span> <span class="token class-name">Cesium<span class="token punctuation">.</span>UrlTemplateImageryProvider</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
                <span class="token literal-property property">url</span><span class="token operator">:</span><span class="token string">&#39;http://10.172.12.21:8090/map/arcgis_blue_tms/{z}/{x}/{y}.png&#39;</span><span class="token punctuation">,</span>
                <span class="token literal-property property">fileExtension</span> <span class="token operator">:</span> <span class="token string">&quot;png&quot;</span>
            <span class="token punctuation">}</span><span class="token punctuation">)</span>
        <span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">// 加载谷歌夜景的本地地图</span>
        <span class="token keyword">var</span> google_night <span class="token operator">=</span> viewer<span class="token punctuation">.</span>scene<span class="token punctuation">.</span>imageryLayers<span class="token punctuation">.</span><span class="token function">addImageryProvider</span><span class="token punctuation">(</span>
            <span class="token keyword">new</span> <span class="token class-name">Cesium<span class="token punctuation">.</span>UrlTemplateImageryProvider</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
                <span class="token literal-property property">url</span><span class="token operator">:</span><span class="token string">&#39;http://10.172.12.21:8090/map/google_night/google_night_0_4_tms/{z}/{x}/{y}.jpg&#39;</span><span class="token punctuation">,</span>
                <span class="token literal-property property">fileExtension</span> <span class="token operator">:</span> <span class="token string">&quot;jpg&quot;</span>
            <span class="token punctuation">}</span><span class="token punctuation">)</span>
        <span class="token punctuation">)</span><span class="token punctuation">;</span> 



<span class="token keyword">let</span> imageryLayer2 <span class="token operator">=</span> Cesium<span class="token punctuation">.</span>ImageryLayer<span class="token punctuation">.</span><span class="token function">fromProviderAsync</span><span class="token punctuation">(</span>
          <span class="token keyword">new</span> <span class="token class-name">Cesium<span class="token punctuation">.</span>UrlTemplateImageryProvider</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
            <span class="token literal-property property">url</span><span class="token operator">:</span>
              <span class="token string">&quot;data/Assets/Textures/NaturalEarthII&quot;</span> <span class="token operator">+</span> <span class="token string">&quot;/{z}/{x}/{reverseY}.jpg&quot;</span><span class="token punctuation">,</span>
            <span class="token literal-property property">tilingScheme</span><span class="token operator">:</span> <span class="token keyword">new</span> <span class="token class-name">Cesium<span class="token punctuation">.</span>GeographicTilingScheme</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
            <span class="token literal-property property">maximumLevel</span><span class="token operator">:</span> <span class="token number">5</span><span class="token punctuation">,</span>
          <span class="token punctuation">}</span><span class="token punctuation">)</span>
        <span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">let</span> imageryLayer3 <span class="token operator">=</span> Cesium<span class="token punctuation">.</span>ImageryLayer<span class="token punctuation">.</span><span class="token function">fromProviderAsync</span><span class="token punctuation">(</span>
          <span class="token keyword">new</span> <span class="token class-name">Cesium<span class="token punctuation">.</span>UrlTemplateImageryProvider</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
            <span class="token literal-property property">url</span><span class="token operator">:</span> <span class="token string">&quot;SameUrlPath/{z}/{x}/{y}.png&quot;</span><span class="token punctuation">,</span>
            <span class="token literal-property property">layer</span><span class="token operator">:</span> <span class="token string">&quot;imgLayer&quot;</span><span class="token punctuation">,</span>
            <span class="token literal-property property">minimumLevel</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
            <span class="token literal-property property">maximumLevel</span><span class="token operator">:</span> <span class="token number">8</span><span class="token punctuation">,</span>
          <span class="token punctuation">}</span><span class="token punctuation">)</span>
        <span class="token punctuation">)</span><span class="token punctuation">;</span>
 
      
</code></pre></div><h3 id="限制范围" tabindex="-1"><a class="header-anchor" href="#限制范围" aria-hidden="true">#</a> 限制范围</h3><p>Cesium中有设置观看最低、最高高度的API，能够在观看高度上进行控制，下边代码即是：</p><div class="language-jsx" data-ext="jsx"><pre class="language-jsx"><code>viewer<span class="token punctuation">.</span>scene<span class="token punctuation">.</span>screenSpaceCameraController<span class="token punctuation">.</span>maximumZoomDistance <span class="token operator">=</span><span class="token number">100000</span>； 
viewer<span class="token punctuation">.</span>scene<span class="token punctuation">.</span>screenSpaceCameraController<span class="token punctuation">.</span>minimumZoomDistance <span class="token operator">=</span> <span class="token number">10</span><span class="token punctuation">;</span>
<span class="token doctype"><span class="token punctuation">&lt;!</span><span class="token doctype-tag">DOCTYPE</span> <span class="token name">html</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
	</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
		</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">charset</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>UTF-8<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
		</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>title</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">设置Camera高度限制</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>title</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
			</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>link</span> <span class="token attr-name">rel</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>stylesheet<span class="token punctuation">&quot;</span></span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>../Build/Widgets/widgets.css<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span><span class="token plain-text">
		</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>../Build/Cesium.js<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token plain-text"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
	</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
	</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
		</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span>  <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>cesiumContainer<span class="token punctuation">&quot;</span></span> <span class="token special-attr"><span class="token attr-name">style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span><span class="token value css language-css"><span class="token property">width</span><span class="token punctuation">:</span> 100%<span class="token punctuation">;</span><span class="token property">height</span><span class="token punctuation">:</span> 900px<span class="token punctuation">;</span><span class="token property">background-color</span><span class="token punctuation">:</span> rosybrown<span class="token punctuation">;</span></span><span class="token punctuation">&quot;</span></span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
	</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
	</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
		  	var viewer = new Cesium.Viewer(&#39;cesiumContainer&#39;,{ 
	   		//需要进行可视化的数据源的集合
		             animation: false, //是否显示动画控件
		            shouldAnimate : true,
		            homeButton: false, //是否显示Home按钮
		            fullscreenButton: false, //是否显示全屏按钮
		            baseLayerPicker: false, //是否显示图层选择控件
		            geocoder: false, //是否显示地名查找控件
		            timeline: false, //是否显示时间线控件
		            sceneModePicker: true, //是否显示投影方式控件
		            navigationHelpButton: false, //是否显示帮助信息控件
		            infoBox: false, //是否显示点击要素之后显示的信息
		            requestRenderMode: true, //启用请求渲染模式
		            scene3DOnly: false, //每个几何实例将只能以3D渲染以节省GPU内存
		            sceneMode: 3, //初始场景模式 1 2D模式 2 2D循环模式 3 3D模式  Cesium.SceneMode
		            fullscreenElement: document.body, //全屏时渲染的HTML元素 暂时没发现用处
		            imageryProvider : new Cesium.WebMapTileServiceImageryProvider({
				          url: &#39;http://t0.tianditu.com/img_w/wmts?&#39;,
				          layer: &#39;img&#39;,
				          style: &#39;default&#39;,
				          format: &#39;tiles&#39;,
				          tileMatrixSetID: &#39;w&#39;,
				          credit: new Cesium.Credit(&#39;天地图全球影像服务&#39;),
				      
				    })
		});
				  //全球影像中文注记服务
	   	viewer.imageryLayers.addImageryProvider(new Cesium.WebMapTileServiceImageryProvider({
		    url: &quot;http://t0.tianditu.com/cia_w/wmts?service=wmts&amp;request=GetTile&amp;version=1.0.0&amp;LAYER=cia&amp;tileMatrixSet=w&amp;TileMatrix={TileMatrix}&amp;TileRow={TileRow}&amp;TileCol={TileCol}&amp;style=default.jpg&quot;,
		    layer: &quot;tdtAnnoLayer&quot;,
		    style: &quot;default&quot;,
		    format: &quot;image/jpeg&quot;,
		    tileMatrixSetID: &quot;GoogleMapsCompatible&quot;,
		    maximumLevel: 13,
			minimumLevel: 1,
		    show: false
		}));
			/**
			 * 设置后当相机高度达到设置的最大和最小高度时将不再放大和缩小
			 */
		viewer.scene.screenSpaceCameraController.minimumZoomDistance = 250000;//相机的高度的最小值
		viewer.scene.screenSpaceCameraController.maximumZoomDistance = 22000000;  //相机高度的最大值
		viewer.scene.screenSpaceCameraController._minimumZoomRate = 30000; // 设置相机缩小时的速率
		viewer.scene.screenSpaceCameraController._maximumZoomRate=5906376272000    //设置相机放大时的速率
	</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>html</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">


//加载瓦片资源
            var provider = new Cesium.UrlTemplateImageryProvider(</span><span class="token punctuation">{</span>
                <span class="token literal-property property">url</span><span class="token operator">:</span> <span class="token string">&quot;http://127.0.0.1:5500/地图无底图/mapTiles/{z}/{x}/{y}.png&quot;</span>
            <span class="token punctuation">}</span><span class="token plain-text">);
            viewer.imageryLayers.addImageryProvider(provider);

            var pos = </span><span class="token punctuation">{</span>
                <span class="token literal-property property">heading</span><span class="token operator">:</span> <span class="token number">6.151410947526216</span><span class="token punctuation">,</span>
                <span class="token literal-property property">pitch</span><span class="token operator">:</span> <span class="token operator">-</span><span class="token number">1.5653824262457778</span><span class="token punctuation">,</span>
                <span class="token literal-property property">roll</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
                <span class="token literal-property property">position</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                    <span class="token string-property property">&quot;x&quot;</span><span class="token operator">:</span> <span class="token operator">-</span><span class="token number">2600107.8973753555</span><span class="token punctuation">,</span>
                    <span class="token string-property property">&quot;y&quot;</span><span class="token operator">:</span> <span class="token number">5244831.858474234</span><span class="token punctuation">,</span>
                    <span class="token string-property property">&quot;z&quot;</span><span class="token operator">:</span> <span class="token number">3598312.386814336</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span><span class="token plain-text">
            viewer.camera.flyTo(</span><span class="token punctuation">{</span>
                <span class="token literal-property property">destination</span><span class="token operator">:</span> <span class="token keyword">new</span> <span class="token class-name">Cesium<span class="token punctuation">.</span>Cartesian3</span><span class="token punctuation">(</span>
                    pos<span class="token punctuation">.</span>position<span class="token punctuation">.</span>x<span class="token punctuation">,</span>
                    pos<span class="token punctuation">.</span>position<span class="token punctuation">.</span>y<span class="token punctuation">,</span>
                    pos<span class="token punctuation">.</span>position<span class="token punctuation">.</span>z
                <span class="token punctuation">)</span><span class="token punctuation">,</span>
                <span class="token literal-property property">orientation</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                    <span class="token literal-property property">heading</span><span class="token operator">:</span> pos<span class="token punctuation">.</span>heading<span class="token punctuation">,</span>
                    <span class="token literal-property property">pitch</span><span class="token operator">:</span> pos<span class="token punctuation">.</span>pitch<span class="token punctuation">,</span>
                    <span class="token literal-property property">roll</span><span class="token operator">:</span> pos<span class="token punctuation">.</span>roll<span class="token punctuation">,</span>
                <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token punctuation">}</span><span class="token plain-text">);

</span></code></pre></div>`,5);function w(v,h){const s=e("ExternalLinkIcon");return c(),l("div",null,[k,n("ul",null,[n("li",null,[n("a",m,[a("获取token"),t(s)])])]),d,n("ul",null,[n("li",null,[n("a",g,[a("glb_model"),t(s)])])]),y])}const f=o(r,[["render",w],["__file","index.html.vue"]]);export{f as default};
