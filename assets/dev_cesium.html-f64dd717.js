import{_ as n,p as s,q as a,a1 as p}from"./framework-d81ad7e5.js";const t={},o=p(`<div class="language-javascript" data-ext="js"><pre class="language-javascript"><code>Cesium<span class="token punctuation">.</span>Ion<span class="token punctuation">.</span>defaultAccessToken <span class="token operator">=</span> <span class="token string">&#39;eyJhTlA&#39;</span><span class="token punctuation">;</span>

<span class="token keyword">var</span> viewer <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Cesium<span class="token punctuation">.</span>Viewer</span><span class="token punctuation">(</span><span class="token string">&#39;cesiumContainer&#39;</span><span class="token punctuation">,</span><span class="token punctuation">{</span>
    <span class="token literal-property property">terrainProvider</span> <span class="token operator">:</span> Cesium<span class="token punctuation">.</span><span class="token function">createWorldTerrain</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
        <span class="token literal-property property">requestWaterMask</span> <span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
        <span class="token literal-property property">requestVertexNormals</span> <span class="token operator">:</span> <span class="token boolean">true</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token literal-property property">scene3DOnly</span> <span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token comment">//selectionIndicator : false,</span>
    <span class="token comment">//baseLayerPicker : false</span>
<span class="token punctuation">}</span>  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">//打开深度测试，那么在地形以下的对象不可见</span>
viewer<span class="token punctuation">.</span>scene<span class="token punctuation">.</span>globe<span class="token punctuation">.</span>depthTestAgainstTerrain <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
<span class="token comment">//开启全球光照</span>
<span class="token comment">//viewer.scene.globe.enableLighting = true;</span>
<span class="token comment">//创建相机初始位置和朝向</span>
<span class="token keyword">var</span> initialPosition <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Cesium<span class="token punctuation">.</span>Cartesian3<span class="token punctuation">.</span>fromDegrees</span><span class="token punctuation">(</span><span class="token operator">-</span><span class="token number">73.998</span><span class="token punctuation">,</span><span class="token number">40.674</span><span class="token punctuation">,</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">var</span> initialOrientation <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Cesium<span class="token punctuation">.</span>HeadingPitchRoll<span class="token punctuation">.</span>fromDegrees</span><span class="token punctuation">(</span><span class="token number">7.1</span><span class="token punctuation">,</span><span class="token operator">-</span><span class="token number">31.987</span><span class="token punctuation">,</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">var</span> homeCameraView <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">destination</span> <span class="token operator">:</span> initialPosition<span class="token punctuation">,</span>
    <span class="token literal-property property">orientation</span> <span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">heading</span> <span class="token operator">:</span> initialOrientation<span class="token punctuation">.</span>heading<span class="token punctuation">,</span>
        <span class="token literal-property property">pitch</span> <span class="token operator">:</span> initialOrientation<span class="token punctuation">.</span>pitch<span class="token punctuation">,</span>
        <span class="token literal-property property">roll</span> <span class="token operator">:</span> initialOrientation<span class="token punctuation">.</span>roll       
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token comment">//设置视图</span>
<span class="token comment">//viewer.scene.camera.setView(homeCameraView);</span>
<span class="token comment">//增加相机飞行动画参数</span>
homeCameraView<span class="token punctuation">.</span>duration <span class="token operator">=</span> <span class="token number">2.0</span><span class="token punctuation">;</span>
homeCameraView<span class="token punctuation">.</span>maximumHeight <span class="token operator">=</span> <span class="token number">2000</span><span class="token punctuation">;</span>
homeCameraView<span class="token punctuation">.</span>pitchAdjustHeight <span class="token operator">=</span> <span class="token number">2000</span><span class="token punctuation">;</span>
homeCameraView<span class="token punctuation">.</span>endTransform <span class="token operator">=</span> Cesium<span class="token punctuation">.</span>Matrix4<span class="token punctuation">.</span><span class="token constant">IDENTITY</span><span class="token punctuation">;</span>

<span class="token comment">//重新默认的home按钮</span>
viewer<span class="token punctuation">.</span>homeButton<span class="token punctuation">.</span>viewModel<span class="token punctuation">.</span>command<span class="token punctuation">.</span>beforeExecute<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">e</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    e<span class="token punctuation">.</span>cancel <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
    viewer<span class="token punctuation">.</span>scene<span class="token punctuation">.</span>camera<span class="token punctuation">.</span><span class="token function">flyTo</span><span class="token punctuation">(</span>homeCameraView<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>


<span class="token comment">//设置时钟和时间线</span>
<span class="token comment">//启动动画</span>
viewer<span class="token punctuation">.</span>clock<span class="token punctuation">.</span>shouldAnimate <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
viewer<span class="token punctuation">.</span>clock<span class="token punctuation">.</span>startTime <span class="token operator">=</span> Cesium<span class="token punctuation">.</span>JulianDate<span class="token punctuation">.</span><span class="token function">fromIso8601</span><span class="token punctuation">(</span><span class="token string">&quot;2017-07-11T16:00:00Z&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
viewer<span class="token punctuation">.</span>clock<span class="token punctuation">.</span>stopTime <span class="token operator">=</span> Cesium<span class="token punctuation">.</span>JulianDate<span class="token punctuation">.</span><span class="token function">fromIso8601</span><span class="token punctuation">(</span><span class="token string">&quot;2017-07-11T16:20:00Z&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
viewer<span class="token punctuation">.</span>clock<span class="token punctuation">.</span>currentTime <span class="token operator">=</span> Cesium<span class="token punctuation">.</span>JulianDate<span class="token punctuation">.</span><span class="token function">fromIso8601</span><span class="token punctuation">(</span><span class="token string">&quot;2017-07-11T16:00:00Z&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">//设置加速率</span>
viewer<span class="token punctuation">.</span>clock<span class="token punctuation">.</span>multiplier <span class="token operator">=</span> <span class="token number">2</span><span class="token punctuation">;</span>
viewer<span class="token punctuation">.</span>clock<span class="token punctuation">.</span>clockStep <span class="token operator">=</span> Cesium<span class="token punctuation">.</span>ClockStep<span class="token punctuation">.</span><span class="token constant">SYSTEM_CLOCK_MULTIPLIER</span><span class="token punctuation">;</span>
<span class="token comment">//循环播放</span>
viewer<span class="token punctuation">.</span>clock<span class="token punctuation">.</span>clockRange <span class="token operator">=</span> Cesium<span class="token punctuation">.</span>ClockRange<span class="token punctuation">.</span><span class="token constant">LOOP_STOP</span><span class="token punctuation">;</span>
<span class="token comment">//设置时间的可见范围</span>
viewer<span class="token punctuation">.</span>timeline<span class="token punctuation">.</span><span class="token function">zoomTo</span><span class="token punctuation">(</span>viewer<span class="token punctuation">.</span>clock<span class="token punctuation">.</span>startTime<span class="token punctuation">,</span> viewer<span class="token punctuation">.</span>clock<span class="token punctuation">.</span>stopTime<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">var</span> kmlOptions <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">camera</span> <span class="token operator">:</span> viewer<span class="token punctuation">.</span>scene<span class="token punctuation">.</span>camera<span class="token punctuation">,</span>
    <span class="token literal-property property">canvas</span> <span class="token operator">:</span> viewer<span class="token punctuation">.</span>scene<span class="token punctuation">.</span>canvas<span class="token punctuation">,</span>
    <span class="token comment">//是否贴地</span>
   <span class="token comment">// clampToGround : true</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token comment">//从KML的URL里加载POI点位</span>
<span class="token keyword">var</span> geocachePromise <span class="token operator">=</span> Cesium<span class="token punctuation">.</span>KmlDataSource<span class="token punctuation">.</span><span class="token function">load</span><span class="token punctuation">(</span><span class="token string">&#39;http://localhost:8080/apps/SampleData/sampleGeocacheLocations.kml&#39;</span><span class="token punctuation">,</span>kmlOptions<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">//回调</span>
geocachePromise<span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">dataSource</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token comment">//把所有的entities添加到viewer里显示</span>
    viewer<span class="token punctuation">.</span>dataSources<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>dataSource<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">//获得entity列表</span>
    <span class="token keyword">var</span> geocacheEntites <span class="token operator">=</span> dataSource<span class="token punctuation">.</span>entities<span class="token punctuation">.</span>values<span class="token punctuation">;</span>
    <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">var</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> geocacheEntites<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token keyword">var</span> entity <span class="token operator">=</span> geocacheEntites<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">;</span>
        <span class="token keyword">if</span><span class="token punctuation">(</span>Cesium<span class="token punctuation">.</span><span class="token function">defined</span><span class="token punctuation">(</span>entity<span class="token punctuation">.</span>billboard<span class="token punctuation">)</span><span class="token punctuation">)</span>
        <span class="token punctuation">{</span>
            <span class="token comment">//调整垂直方向的原点，保证图标里的针尖对着地表位置</span>
            entity<span class="token punctuation">.</span>billboard<span class="token punctuation">.</span>verticalOrigin <span class="token operator">=</span> Cesium<span class="token punctuation">.</span>VerticalOrigin<span class="token punctuation">.</span><span class="token constant">BOTTOM</span><span class="token punctuation">;</span>
            <span class="token comment">//去掉文字的显示</span>
            entity<span class="token punctuation">.</span>label <span class="token operator">=</span> <span class="token keyword">undefined</span><span class="token punctuation">;</span>
            <span class="token comment">//设置可见距离</span>
            entity<span class="token punctuation">.</span>billboard<span class="token punctuation">.</span>distanceDisplayCondition <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Cesium<span class="token punctuation">.</span>DistanceDisplayCondition</span><span class="token punctuation">(</span><span class="token number">10.0</span><span class="token punctuation">,</span><span class="token number">20000.0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token comment">//计算经纬度（角度表示）</span>
            <span class="token keyword">var</span> cartographicPosition <span class="token operator">=</span> Cesium<span class="token punctuation">.</span>Cartographic<span class="token punctuation">.</span><span class="token function">fromCartesian</span><span class="token punctuation">(</span>entity<span class="token punctuation">.</span>position<span class="token punctuation">.</span><span class="token function">getValue</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">var</span> longitude <span class="token operator">=</span> Cesium<span class="token punctuation">.</span>Math<span class="token punctuation">.</span><span class="token function">toDegrees</span><span class="token punctuation">(</span>cartographicPosition<span class="token punctuation">.</span>longitude<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">var</span> latitude <span class="token operator">=</span> Cesium<span class="token punctuation">.</span>Math<span class="token punctuation">.</span><span class="token function">toDegrees</span><span class="token punctuation">(</span>cartographicPosition<span class="token punctuation">.</span>latitude<span class="token punctuation">)</span><span class="token punctuation">;</span>
            
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">//行政区域多边形</span>
<span class="token keyword">var</span> geojsonOptions <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">clampToGround</span> <span class="token operator">:</span> <span class="token boolean">true</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token comment">//从geojson文件加载行政区多边形边界数据</span>
<span class="token keyword">var</span> neighborhoodPromise <span class="token operator">=</span> Cesium<span class="token punctuation">.</span>GeoJsonDataSource<span class="token punctuation">.</span><span class="token function">load</span><span class="token punctuation">(</span><span class="token string">&#39;http://localhost:8080/apps/sampleData/sampleNeighborhoods.geojson&#39;</span><span class="token punctuation">,</span>geojsonOptions<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">var</span> neighborhoods<span class="token punctuation">;</span>

neighborhoodPromise<span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">dataSource</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    viewer<span class="token punctuation">.</span>dataSources<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>dataSource<span class="token punctuation">)</span><span class="token punctuation">;</span>
    neighborhoods <span class="token operator">=</span> dataSource<span class="token punctuation">.</span>entities<span class="token punctuation">;</span>
    <span class="token comment">//获取enty列表遍历</span>
    <span class="token keyword">var</span> neighthoodEntities <span class="token operator">=</span> dataSource<span class="token punctuation">.</span>entities<span class="token punctuation">.</span>values<span class="token punctuation">;</span>
    <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">var</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> neighthoodEntities<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token keyword">var</span> entity <span class="token operator">=</span> neighthoodEntities<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">;</span>
        <span class="token keyword">if</span><span class="token punctuation">(</span>Cesium<span class="token punctuation">.</span><span class="token function">defined</span><span class="token punctuation">(</span>entity<span class="token punctuation">.</span>polygon<span class="token punctuation">)</span><span class="token punctuation">)</span>
        <span class="token punctuation">{</span>
            <span class="token comment">//设置样式代码</span>
            entity<span class="token punctuation">.</span>name <span class="token operator">=</span> entity<span class="token punctuation">.</span>properties<span class="token punctuation">.</span>neighborhood<span class="token punctuation">;</span>
            <span class="token comment">//设置一个随机半透明颜色</span>
            entity<span class="token punctuation">.</span>polygon<span class="token punctuation">.</span>material <span class="token operator">=</span> Cesium<span class="token punctuation">.</span>Color<span class="token punctuation">.</span><span class="token function">fromRandom</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
                <span class="token literal-property property">red</span> <span class="token operator">:</span> <span class="token number">0.1</span><span class="token punctuation">,</span>
                <span class="token literal-property property">maximumGreen</span> <span class="token operator">:</span> <span class="token number">0.5</span><span class="token punctuation">,</span>
                <span class="token literal-property property">minimumBlue</span> <span class="token operator">:</span> <span class="token number">0.5</span><span class="token punctuation">,</span>
                <span class="token literal-property property">alpha</span> <span class="token operator">:</span> <span class="token number">0.6</span>
            <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token comment">//设置让多边形贴地</span>
            entity<span class="token punctuation">.</span>polygon<span class="token punctuation">.</span>heightReference <span class="token operator">=</span> Cesium<span class="token punctuation">.</span>heightReference<span class="token punctuation">.</span><span class="token constant">CLAMP_TO_GROUND</span><span class="token punctuation">;</span>
            <span class="token comment">//获取多边形的positions列表，并计算它的中心点</span>
            <span class="token keyword">var</span> polyPositions <span class="token operator">=</span> entity<span class="token punctuation">.</span>polygon<span class="token punctuation">.</span>hierarchy<span class="token punctuation">.</span><span class="token function">getValue</span><span class="token punctuation">(</span>Cesium<span class="token punctuation">.</span>JulianDate<span class="token punctuation">.</span><span class="token function">now</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">.</span>positions<span class="token punctuation">;</span>
            <span class="token keyword">var</span> polyCenter <span class="token operator">=</span> Cesium<span class="token punctuation">.</span>BoundingSphere<span class="token punctuation">.</span><span class="token function">fromPoints</span><span class="token punctuation">(</span>polyPositions<span class="token punctuation">)</span><span class="token punctuation">.</span>center<span class="token punctuation">;</span>
            polyCenter <span class="token operator">=</span> Cesium<span class="token punctuation">.</span>Ellipsoid<span class="token punctuation">.</span><span class="token constant">WGS84</span><span class="token punctuation">.</span><span class="token function">scaleToGeodeticSurface</span><span class="token punctuation">(</span>polyCenter<span class="token punctuation">)</span><span class="token punctuation">;</span>
            entity<span class="token punctuation">.</span>position <span class="token operator">=</span> polyCenter<span class="token punctuation">;</span>
            <span class="token comment">//生成文字标注</span>
            entity<span class="token punctuation">.</span>label <span class="token operator">=</span> <span class="token punctuation">{</span>
                <span class="token literal-property property">text</span> <span class="token operator">:</span> entity<span class="token punctuation">.</span>name<span class="token punctuation">,</span>
                <span class="token literal-property property">showBackground</span> <span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
                <span class="token literal-property property">scale</span> <span class="token operator">:</span> <span class="token number">0.6</span><span class="token punctuation">,</span>
                <span class="token literal-property property">horizontalOrigin</span> <span class="token operator">:</span> Cesium<span class="token punctuation">.</span>HorizontalOrigin<span class="token punctuation">.</span><span class="token constant">CENTER</span><span class="token punctuation">,</span>
                <span class="token literal-property property">verticalOrigin</span> <span class="token operator">:</span> Cesium<span class="token punctuation">.</span>VerticalOrigin<span class="token punctuation">.</span><span class="token constant">BOTTOM</span><span class="token punctuation">,</span>
                <span class="token literal-property property">distanceDisplayCondition</span> <span class="token operator">:</span> <span class="token keyword">new</span> <span class="token class-name">Cesium<span class="token punctuation">.</span>DistanceDisplayCondition</span><span class="token punctuation">(</span><span class="token number">10.0</span><span class="token punctuation">,</span> <span class="token number">8000.0</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
                <span class="token literal-property property">disableDepthTestDistance</span> <span class="token operator">:</span> <span class="token number">100.0</span>
            <span class="token punctuation">}</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">//从CZML中载入无人机轨迹</span>
<span class="token keyword">var</span> dronePromise <span class="token operator">=</span> Cesium<span class="token punctuation">.</span>CzmlDataSource<span class="token punctuation">.</span><span class="token function">load</span><span class="token punctuation">(</span><span class="token string">&#39;http://localhost:8080/apps/sampleData/sampleFlight.czml&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">var</span> drone<span class="token punctuation">;</span>
dronePromise<span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">dataSource</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    viewer<span class="token punctuation">.</span>dataSources<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>dataSource<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">//使用id获取在CZML数据中定义的无人机entity</span>
    drone <span class="token operator">=</span> dataSource<span class="token punctuation">.</span>entities<span class="token punctuation">.</span><span class="token function">getById</span><span class="token punctuation">(</span><span class="token string">&#39;Aircraft/Aircraft1&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">//附加一些三维模型</span>
    drone<span class="token punctuation">.</span>model <span class="token operator">=</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">uri</span> <span class="token operator">:</span> <span class="token string">&#39;http://localhost:8080/apps/sampleData/models/CesiumDrone.gltf&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">minimumPixelSize</span> <span class="token operator">:</span> <span class="token number">128</span><span class="token punctuation">,</span>
        <span class="token literal-property property">maximumScale</span> <span class="token operator">:</span> <span class="token number">1000</span><span class="token punctuation">,</span>
        <span class="token literal-property property">silhouetteColor</span> <span class="token operator">:</span> Cesium<span class="token punctuation">.</span>Color<span class="token punctuation">.</span><span class="token constant">WHITE</span><span class="token punctuation">,</span>
        <span class="token literal-property property">silhouetteSize</span> <span class="token operator">:</span> <span class="token number">2</span>
    <span class="token punctuation">}</span><span class="token punctuation">;</span>
    <span class="token comment">//基于无人机轨迹的位置点，自动计算朝向</span>
    drone<span class="token punctuation">.</span>orientation <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Cesium<span class="token punctuation">.</span>VelocityOrientationProperty</span><span class="token punctuation">(</span>drone<span class="token punctuation">.</span>position<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">//光滑的飞行路径</span>
    drone<span class="token punctuation">.</span>position<span class="token punctuation">.</span><span class="token function">setInterpolationOptions</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
        <span class="token literal-property property">interpolationDegree</span> <span class="token operator">:</span> <span class="token number">3</span><span class="token punctuation">,</span>
        <span class="token literal-property property">interpolationAlgorithm</span> <span class="token operator">:</span> Cesium<span class="token punctuation">.</span>HermitePolynomialApproximation
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">//跟踪无人机</span>
    viewer<span class="token punctuation">.</span>trackedEntity <span class="token operator">=</span> drone<span class="token punctuation">;</span>
    <span class="token comment">//取消跟踪无人机</span>
    viewer<span class="token punctuation">.</span>trackedEntity <span class="token operator">=</span> <span class="token keyword">undefined</span><span class="token punctuation">;</span>
    viewer<span class="token punctuation">.</span>scene<span class="token punctuation">.</span>camera<span class="token punctuation">.</span><span class="token function">flyTo</span><span class="token punctuation">(</span>homeCameraView<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">//加载3dtiles建筑物模型</span>

<span class="token keyword">var</span> tileset <span class="token operator">=</span>viewer<span class="token punctuation">.</span>scene<span class="token punctuation">.</span>primitives<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Cesium<span class="token punctuation">.</span>Cesium3DTileset</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">url</span> <span class="token operator">:</span> <span class="token string">&#39;http://localhost:8080/apps/sampleData/Cesium3DTiles/Tilesets/Tileset/tileset.json&#39;</span>
    <span class="token comment">//url : Cesium.IonResource.fromAssetId(3839)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">var</span> defaultStyle <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Cesium<span class="token punctuation">.</span>Cesium3DTileStyle</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">color</span> <span class="token operator">:</span> <span class="token string">&#39;rgba(255,255,255,0.5)&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">show</span> <span class="token operator">:</span> <span class="token boolean">true</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
tileset<span class="token punctuation">.</span>style <span class="token operator">=</span> defaultStyle<span class="token punctuation">;</span>
<span class="token comment">//视点看向3dtile模型</span>
viewer<span class="token punctuation">.</span><span class="token function">zoomTo</span><span class="token punctuation">(</span>tileset<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">//鼠标移动事件</span>
<span class="token keyword">var</span> handler <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Cesium<span class="token punctuation">.</span>ScreenSpaceEventHandler</span><span class="token punctuation">(</span>viewer<span class="token punctuation">.</span>scene<span class="token punctuation">.</span>canvas<span class="token punctuation">)</span><span class="token punctuation">;</span>
handler<span class="token punctuation">.</span><span class="token function">setInputAction</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">evt</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>evt<span class="token punctuation">.</span>position<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">var</span> feature <span class="token operator">=</span> viewer<span class="token punctuation">.</span>scene<span class="token punctuation">.</span><span class="token function">pick</span><span class="token punctuation">(</span>evt<span class="token punctuation">.</span>position<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span>feature <span class="token keyword">instanceof</span> <span class="token class-name">Cesium<span class="token punctuation">.</span>Cesium3DTileFeature</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">var</span> propertyNames <span class="token operator">=</span> feature<span class="token punctuation">.</span><span class="token function">getPropertyNames</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">var</span> length <span class="token operator">=</span> propertyNames<span class="token punctuation">.</span>length<span class="token punctuation">;</span>
        <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">var</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token comment">//得到ID</span>
            <span class="token keyword">var</span> propertyName <span class="token operator">=</span> propertyNames<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">;</span>
            console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>propertyName <span class="token operator">+</span><span class="token string">&quot;:&quot;</span><span class="token operator">+</span> feature<span class="token punctuation">.</span><span class="token function">getProperty</span><span class="token punctuation">(</span>propertyName<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            propertyName<span class="token punctuation">.</span>billboard<span class="token punctuation">.</span>scale <span class="token operator">=</span> <span class="token number">2.0</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    Cesium<span class="token punctuation">.</span>ScreenSpaceEventType<span class="token punctuation">.</span><span class="token constant">LEFT_CLICK</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
 

<span class="token keyword">var</span> viewer <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Cesium<span class="token punctuation">.</span>Viewer</span><span class="token punctuation">(</span><span class="token string">&#39;cesiumContainer&#39;</span><span class="token punctuation">,</span><span class="token punctuation">{</span>
    <span class="token literal-property property">terrainProvider</span> <span class="token operator">:</span> Cesium<span class="token punctuation">.</span><span class="token function">createWorldTerrain</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
        <span class="token literal-property property">requestWaterMask</span> <span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
        <span class="token literal-property property">requestVertexNormals</span> <span class="token operator">:</span> <span class="token boolean">true</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token literal-property property">scene3DOnly</span> <span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token comment">//selectionIndicator : false,</span>
    <span class="token comment">//baseLayerPicker : false</span>
<span class="token punctuation">}</span>  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">//打开深度测试，那么在地形以下的对象不可见</span>
viewer<span class="token punctuation">.</span>scene<span class="token punctuation">.</span>globe<span class="token punctuation">.</span>depthTestAgainstTerrain <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
<span class="token comment">//开启全球光照</span>
<span class="token comment">//viewer.scene.globe.enableLighting = true;</span>
<span class="token comment">//创建相机初始位置和朝向</span>
<span class="token keyword">var</span> initialPosition <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Cesium<span class="token punctuation">.</span>Cartesian3<span class="token punctuation">.</span>fromDegrees</span><span class="token punctuation">(</span><span class="token operator">-</span><span class="token number">73.998</span><span class="token punctuation">,</span><span class="token number">40.674</span><span class="token punctuation">,</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">var</span> initialOrientation <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Cesium<span class="token punctuation">.</span>HeadingPitchRoll<span class="token punctuation">.</span>fromDegrees</span><span class="token punctuation">(</span><span class="token number">7.1</span><span class="token punctuation">,</span><span class="token operator">-</span><span class="token number">31.987</span><span class="token punctuation">,</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">var</span> homeCameraView <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">destination</span> <span class="token operator">:</span> initialPosition<span class="token punctuation">,</span>
    <span class="token literal-property property">orientation</span> <span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">heading</span> <span class="token operator">:</span> initialOrientation<span class="token punctuation">.</span>heading<span class="token punctuation">,</span>
        <span class="token literal-property property">pitch</span> <span class="token operator">:</span> initialOrientation<span class="token punctuation">.</span>pitch<span class="token punctuation">,</span>
        <span class="token literal-property property">roll</span> <span class="token operator">:</span> initialOrientation<span class="token punctuation">.</span>roll       
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token comment">//设置视图</span>
<span class="token comment">//viewer.scene.camera.setView(homeCameraView);</span>
<span class="token comment">//增加相机飞行动画参数</span>
homeCameraView<span class="token punctuation">.</span>duration <span class="token operator">=</span> <span class="token number">2.0</span><span class="token punctuation">;</span>
homeCameraView<span class="token punctuation">.</span>maximumHeight <span class="token operator">=</span> <span class="token number">2000</span><span class="token punctuation">;</span>
homeCameraView<span class="token punctuation">.</span>pitchAdjustHeight <span class="token operator">=</span> <span class="token number">2000</span><span class="token punctuation">;</span>
homeCameraView<span class="token punctuation">.</span>endTransform <span class="token operator">=</span> Cesium<span class="token punctuation">.</span>Matrix4<span class="token punctuation">.</span><span class="token constant">IDENTITY</span><span class="token punctuation">;</span>

<span class="token comment">//重新默认的home按钮</span>
viewer<span class="token punctuation">.</span>homeButton<span class="token punctuation">.</span>viewModel<span class="token punctuation">.</span>command<span class="token punctuation">.</span>beforeExecute<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">e</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    e<span class="token punctuation">.</span>cancel <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
    viewer<span class="token punctuation">.</span>scene<span class="token punctuation">.</span>camera<span class="token punctuation">.</span><span class="token function">flyTo</span><span class="token punctuation">(</span>homeCameraView<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>


<span class="token comment">//设置时钟和时间线</span>
<span class="token comment">//启动动画</span>
viewer<span class="token punctuation">.</span>clock<span class="token punctuation">.</span>shouldAnimate <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
viewer<span class="token punctuation">.</span>clock<span class="token punctuation">.</span>startTime <span class="token operator">=</span> Cesium<span class="token punctuation">.</span>JulianDate<span class="token punctuation">.</span><span class="token function">fromIso8601</span><span class="token punctuation">(</span><span class="token string">&quot;2017-07-11T16:00:00Z&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
viewer<span class="token punctuation">.</span>clock<span class="token punctuation">.</span>stopTime <span class="token operator">=</span> Cesium<span class="token punctuation">.</span>JulianDate<span class="token punctuation">.</span><span class="token function">fromIso8601</span><span class="token punctuation">(</span><span class="token string">&quot;2017-07-11T16:20:00Z&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
viewer<span class="token punctuation">.</span>clock<span class="token punctuation">.</span>currentTime <span class="token operator">=</span> Cesium<span class="token punctuation">.</span>JulianDate<span class="token punctuation">.</span><span class="token function">fromIso8601</span><span class="token punctuation">(</span><span class="token string">&quot;2017-07-11T16:00:00Z&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">//设置加速率</span>
viewer<span class="token punctuation">.</span>clock<span class="token punctuation">.</span>multiplier <span class="token operator">=</span> <span class="token number">2</span><span class="token punctuation">;</span>
viewer<span class="token punctuation">.</span>clock<span class="token punctuation">.</span>clockStep <span class="token operator">=</span> Cesium<span class="token punctuation">.</span>ClockStep<span class="token punctuation">.</span><span class="token constant">SYSTEM_CLOCK_MULTIPLIER</span><span class="token punctuation">;</span>
<span class="token comment">//循环播放</span>
viewer<span class="token punctuation">.</span>clock<span class="token punctuation">.</span>clockRange <span class="token operator">=</span> Cesium<span class="token punctuation">.</span>ClockRange<span class="token punctuation">.</span><span class="token constant">LOOP_STOP</span><span class="token punctuation">;</span>
<span class="token comment">//设置时间的可见范围</span>
viewer<span class="token punctuation">.</span>timeline<span class="token punctuation">.</span><span class="token function">zoomTo</span><span class="token punctuation">(</span>viewer<span class="token punctuation">.</span>clock<span class="token punctuation">.</span>startTime<span class="token punctuation">,</span> viewer<span class="token punctuation">.</span>clock<span class="token punctuation">.</span>stopTime<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">var</span> kmlOptions <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">camera</span> <span class="token operator">:</span> viewer<span class="token punctuation">.</span>scene<span class="token punctuation">.</span>camera<span class="token punctuation">,</span>
    <span class="token literal-property property">canvas</span> <span class="token operator">:</span> viewer<span class="token punctuation">.</span>scene<span class="token punctuation">.</span>canvas<span class="token punctuation">,</span>
    <span class="token comment">//是否贴地</span>
   <span class="token comment">// clampToGround : true</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token comment">//从KML的URL里加载POI点位</span>
<span class="token keyword">var</span> geocachePromise <span class="token operator">=</span> Cesium<span class="token punctuation">.</span>KmlDataSource<span class="token punctuation">.</span><span class="token function">load</span><span class="token punctuation">(</span><span class="token string">&#39;http://localhost:8080/apps/SampleData/sampleGeocacheLocations.kml&#39;</span><span class="token punctuation">,</span>kmlOptions<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">//回调</span>
geocachePromise<span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">dataSource</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token comment">//把所有的entities添加到viewer里显示</span>
    viewer<span class="token punctuation">.</span>dataSources<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>dataSource<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">//获得entity列表</span>
    <span class="token keyword">var</span> geocacheEntites <span class="token operator">=</span> dataSource<span class="token punctuation">.</span>entities<span class="token punctuation">.</span>values<span class="token punctuation">;</span>
    <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">var</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> geocacheEntites<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token keyword">var</span> entity <span class="token operator">=</span> geocacheEntites<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">;</span>
        <span class="token keyword">if</span><span class="token punctuation">(</span>Cesium<span class="token punctuation">.</span><span class="token function">defined</span><span class="token punctuation">(</span>entity<span class="token punctuation">.</span>billboard<span class="token punctuation">)</span><span class="token punctuation">)</span>
        <span class="token punctuation">{</span>
            <span class="token comment">//调整垂直方向的原点，保证图标里的针尖对着地表位置</span>
            entity<span class="token punctuation">.</span>billboard<span class="token punctuation">.</span>verticalOrigin <span class="token operator">=</span> Cesium<span class="token punctuation">.</span>VerticalOrigin<span class="token punctuation">.</span><span class="token constant">BOTTOM</span><span class="token punctuation">;</span>
            <span class="token comment">//去掉文字的显示</span>
            entity<span class="token punctuation">.</span>label <span class="token operator">=</span> <span class="token keyword">undefined</span><span class="token punctuation">;</span>
            <span class="token comment">//设置可见距离</span>
            entity<span class="token punctuation">.</span>billboard<span class="token punctuation">.</span>distanceDisplayCondition <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Cesium<span class="token punctuation">.</span>DistanceDisplayCondition</span><span class="token punctuation">(</span><span class="token number">10.0</span><span class="token punctuation">,</span><span class="token number">20000.0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token comment">//计算经纬度（角度表示）</span>
            <span class="token keyword">var</span> cartographicPosition <span class="token operator">=</span> Cesium<span class="token punctuation">.</span>Cartographic<span class="token punctuation">.</span><span class="token function">fromCartesian</span><span class="token punctuation">(</span>entity<span class="token punctuation">.</span>position<span class="token punctuation">.</span><span class="token function">getValue</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">var</span> longitude <span class="token operator">=</span> Cesium<span class="token punctuation">.</span>Math<span class="token punctuation">.</span><span class="token function">toDegrees</span><span class="token punctuation">(</span>cartographicPosition<span class="token punctuation">.</span>longitude<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">var</span> latitude <span class="token operator">=</span> Cesium<span class="token punctuation">.</span>Math<span class="token punctuation">.</span><span class="token function">toDegrees</span><span class="token punctuation">(</span>cartographicPosition<span class="token punctuation">.</span>latitude<span class="token punctuation">)</span><span class="token punctuation">;</span>
            
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">//行政区域多边形</span>
<span class="token keyword">var</span> geojsonOptions <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">clampToGround</span> <span class="token operator">:</span> <span class="token boolean">true</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token comment">//从geojson文件加载行政区多边形边界数据</span>
<span class="token keyword">var</span> neighborhoodPromise <span class="token operator">=</span> Cesium<span class="token punctuation">.</span>GeoJsonDataSource<span class="token punctuation">.</span><span class="token function">load</span><span class="token punctuation">(</span><span class="token string">&#39;http://localhost:8080/apps/sampleData/sampleNeighborhoods.geojson&#39;</span><span class="token punctuation">,</span>geojsonOptions<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">var</span> neighborhoods<span class="token punctuation">;</span>

neighborhoodPromise<span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">dataSource</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    viewer<span class="token punctuation">.</span>dataSources<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>dataSource<span class="token punctuation">)</span><span class="token punctuation">;</span>
    neighborhoods <span class="token operator">=</span> dataSource<span class="token punctuation">.</span>entities<span class="token punctuation">;</span>
    <span class="token comment">//获取enty列表遍历</span>
    <span class="token keyword">var</span> neighthoodEntities <span class="token operator">=</span> dataSource<span class="token punctuation">.</span>entities<span class="token punctuation">.</span>values<span class="token punctuation">;</span>
    <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">var</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> neighthoodEntities<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token keyword">var</span> entity <span class="token operator">=</span> neighthoodEntities<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">;</span>
        <span class="token keyword">if</span><span class="token punctuation">(</span>Cesium<span class="token punctuation">.</span><span class="token function">defined</span><span class="token punctuation">(</span>entity<span class="token punctuation">.</span>polygon<span class="token punctuation">)</span><span class="token punctuation">)</span>
        <span class="token punctuation">{</span>
            <span class="token comment">//设置样式代码</span>
            entity<span class="token punctuation">.</span>name <span class="token operator">=</span> entity<span class="token punctuation">.</span>properties<span class="token punctuation">.</span>neighborhood<span class="token punctuation">;</span>
            <span class="token comment">//设置一个随机半透明颜色</span>
            entity<span class="token punctuation">.</span>polygon<span class="token punctuation">.</span>material <span class="token operator">=</span> Cesium<span class="token punctuation">.</span>Color<span class="token punctuation">.</span><span class="token function">fromRandom</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
                <span class="token literal-property property">red</span> <span class="token operator">:</span> <span class="token number">0.1</span><span class="token punctuation">,</span>
                <span class="token literal-property property">maximumGreen</span> <span class="token operator">:</span> <span class="token number">0.5</span><span class="token punctuation">,</span>
                <span class="token literal-property property">minimumBlue</span> <span class="token operator">:</span> <span class="token number">0.5</span><span class="token punctuation">,</span>
                <span class="token literal-property property">alpha</span> <span class="token operator">:</span> <span class="token number">0.6</span>
            <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token comment">//设置让多边形贴地</span>
            entity<span class="token punctuation">.</span>polygon<span class="token punctuation">.</span>heightReference <span class="token operator">=</span> Cesium<span class="token punctuation">.</span>heightReference<span class="token punctuation">.</span><span class="token constant">CLAMP_TO_GROUND</span><span class="token punctuation">;</span>
            <span class="token comment">//获取多边形的positions列表，并计算它的中心点</span>
            <span class="token keyword">var</span> polyPositions <span class="token operator">=</span> entity<span class="token punctuation">.</span>polygon<span class="token punctuation">.</span>hierarchy<span class="token punctuation">.</span><span class="token function">getValue</span><span class="token punctuation">(</span>Cesium<span class="token punctuation">.</span>JulianDate<span class="token punctuation">.</span><span class="token function">now</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">.</span>positions<span class="token punctuation">;</span>
            <span class="token keyword">var</span> polyCenter <span class="token operator">=</span> Cesium<span class="token punctuation">.</span>BoundingSphere<span class="token punctuation">.</span><span class="token function">fromPoints</span><span class="token punctuation">(</span>polyPositions<span class="token punctuation">)</span><span class="token punctuation">.</span>center<span class="token punctuation">;</span>
            polyCenter <span class="token operator">=</span> Cesium<span class="token punctuation">.</span>Ellipsoid<span class="token punctuation">.</span><span class="token constant">WGS84</span><span class="token punctuation">.</span><span class="token function">scaleToGeodeticSurface</span><span class="token punctuation">(</span>polyCenter<span class="token punctuation">)</span><span class="token punctuation">;</span>
            entity<span class="token punctuation">.</span>position <span class="token operator">=</span> polyCenter<span class="token punctuation">;</span>
            <span class="token comment">//生成文字标注</span>
            entity<span class="token punctuation">.</span>label <span class="token operator">=</span> <span class="token punctuation">{</span>
                <span class="token literal-property property">text</span> <span class="token operator">:</span> entity<span class="token punctuation">.</span>name<span class="token punctuation">,</span>
                <span class="token literal-property property">showBackground</span> <span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
                <span class="token literal-property property">scale</span> <span class="token operator">:</span> <span class="token number">0.6</span><span class="token punctuation">,</span>
                <span class="token literal-property property">horizontalOrigin</span> <span class="token operator">:</span> Cesium<span class="token punctuation">.</span>HorizontalOrigin<span class="token punctuation">.</span><span class="token constant">CENTER</span><span class="token punctuation">,</span>
                <span class="token literal-property property">verticalOrigin</span> <span class="token operator">:</span> Cesium<span class="token punctuation">.</span>VerticalOrigin<span class="token punctuation">.</span><span class="token constant">BOTTOM</span><span class="token punctuation">,</span>
                <span class="token literal-property property">distanceDisplayCondition</span> <span class="token operator">:</span> <span class="token keyword">new</span> <span class="token class-name">Cesium<span class="token punctuation">.</span>DistanceDisplayCondition</span><span class="token punctuation">(</span><span class="token number">10.0</span><span class="token punctuation">,</span> <span class="token number">8000.0</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
                <span class="token literal-property property">disableDepthTestDistance</span> <span class="token operator">:</span> <span class="token number">100.0</span>
            <span class="token punctuation">}</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">//从CZML中载入无人机轨迹</span>
<span class="token keyword">var</span> dronePromise <span class="token operator">=</span> Cesium<span class="token punctuation">.</span>CzmlDataSource<span class="token punctuation">.</span><span class="token function">load</span><span class="token punctuation">(</span><span class="token string">&#39;http://localhost:8080/apps/sampleData/sampleFlight.czml&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">var</span> drone<span class="token punctuation">;</span>
dronePromise<span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">dataSource</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    viewer<span class="token punctuation">.</span>dataSources<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>dataSource<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">//使用id获取在CZML数据中定义的无人机entity</span>
    drone <span class="token operator">=</span> dataSource<span class="token punctuation">.</span>entities<span class="token punctuation">.</span><span class="token function">getById</span><span class="token punctuation">(</span><span class="token string">&#39;Aircraft/Aircraft1&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">//附加一些三维模型</span>
    drone<span class="token punctuation">.</span>model <span class="token operator">=</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">uri</span> <span class="token operator">:</span> <span class="token string">&#39;http://localhost:8080/apps/sampleData/models/CesiumDrone.gltf&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">minimumPixelSize</span> <span class="token operator">:</span> <span class="token number">128</span><span class="token punctuation">,</span>
        <span class="token literal-property property">maximumScale</span> <span class="token operator">:</span> <span class="token number">1000</span><span class="token punctuation">,</span>
        <span class="token literal-property property">silhouetteColor</span> <span class="token operator">:</span> Cesium<span class="token punctuation">.</span>Color<span class="token punctuation">.</span><span class="token constant">WHITE</span><span class="token punctuation">,</span>
        <span class="token literal-property property">silhouetteSize</span> <span class="token operator">:</span> <span class="token number">2</span>
    <span class="token punctuation">}</span><span class="token punctuation">;</span>
    <span class="token comment">//基于无人机轨迹的位置点，自动计算朝向</span>
    drone<span class="token punctuation">.</span>orientation <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Cesium<span class="token punctuation">.</span>VelocityOrientationProperty</span><span class="token punctuation">(</span>drone<span class="token punctuation">.</span>position<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">//光滑的飞行路径</span>
    drone<span class="token punctuation">.</span>position<span class="token punctuation">.</span><span class="token function">setInterpolationOptions</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
        <span class="token literal-property property">interpolationDegree</span> <span class="token operator">:</span> <span class="token number">3</span><span class="token punctuation">,</span>
        <span class="token literal-property property">interpolationAlgorithm</span> <span class="token operator">:</span> Cesium<span class="token punctuation">.</span>HermitePolynomialApproximation
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">//跟踪无人机</span>
    <span class="token comment">//viewer.trackedEntity = drone;</span>
    <span class="token comment">//取消跟踪无人机</span>
   <span class="token comment">// viewer.trackedEntity = undefined;</span>
   <span class="token comment">// viewer.scene.camera.flyTo(homeCameraView);</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">//加载3dtiles建筑物模型</span>

<span class="token keyword">var</span> tileset <span class="token operator">=</span>viewer<span class="token punctuation">.</span>scene<span class="token punctuation">.</span>primitives<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Cesium<span class="token punctuation">.</span>Cesium3DTileset</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">url</span> <span class="token operator">:</span> <span class="token string">&#39;http://localhost:8080/apps/sampleData/Cesium3DTiles/Tilesets/Tileset/tileset.json&#39;</span>
    <span class="token comment">//url : Cesium.IonResource.fromAssetId(3839)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">var</span> defaultStyle <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Cesium<span class="token punctuation">.</span>Cesium3DTileStyle</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">color</span> <span class="token operator">:</span> <span class="token string">&#39;rgba(255,255,255,0.5)&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">show</span> <span class="token operator">:</span> <span class="token boolean">true</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
tileset<span class="token punctuation">.</span>style <span class="token operator">=</span> defaultStyle<span class="token punctuation">;</span>
<span class="token comment">//视点看向3dtile模型</span>
<span class="token comment">//viewer.zoomTo(tileset);</span>

<span class="token comment">//鼠标左键点击拾取3dtiles</span>
<span class="token keyword">var</span> handler <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Cesium<span class="token punctuation">.</span>ScreenSpaceEventHandler</span><span class="token punctuation">(</span>viewer<span class="token punctuation">.</span>scene<span class="token punctuation">.</span>canvas<span class="token punctuation">)</span><span class="token punctuation">;</span>
handler<span class="token punctuation">.</span><span class="token function">setInputAction</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">evt</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>evt<span class="token punctuation">.</span>position<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">var</span> feature <span class="token operator">=</span> viewer<span class="token punctuation">.</span>scene<span class="token punctuation">.</span><span class="token function">pick</span><span class="token punctuation">(</span>evt<span class="token punctuation">.</span>position<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span>feature <span class="token keyword">instanceof</span> <span class="token class-name">Cesium<span class="token punctuation">.</span>Cesium3DTileFeature</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">var</span> propertyNames <span class="token operator">=</span> feature<span class="token punctuation">.</span><span class="token function">getPropertyNames</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">var</span> length <span class="token operator">=</span> propertyNames<span class="token punctuation">.</span>length<span class="token punctuation">;</span>
        <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">var</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token comment">//得到ID</span>
            <span class="token keyword">var</span> propertyName <span class="token operator">=</span> propertyNames<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">;</span>
            console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>propertyName <span class="token operator">+</span><span class="token string">&quot;:&quot;</span><span class="token operator">+</span> feature<span class="token punctuation">.</span><span class="token function">getProperty</span><span class="token punctuation">(</span>propertyName<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            propertyName<span class="token punctuation">.</span>billboard<span class="token punctuation">.</span>scale <span class="token operator">=</span> <span class="token number">2.0</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    Cesium<span class="token punctuation">.</span>ScreenSpaceEventType<span class="token punctuation">.</span><span class="token constant">LEFT_CLICK</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">//加上entity</span>
<span class="token keyword">var</span> wyoming <span class="token operator">=</span> viewer<span class="token punctuation">.</span>entities<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">name</span> <span class="token operator">:</span> <span class="token string">&#39;Wyoming&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">polygon</span><span class="token operator">:</span><span class="token punctuation">{</span>
        <span class="token literal-property property">hierarchy</span> <span class="token operator">:</span> Cesium<span class="token punctuation">.</span>Cartesian3<span class="token punctuation">.</span><span class="token function">fromDegreesArray</span><span class="token punctuation">(</span><span class="token punctuation">[</span>
                              <span class="token operator">-</span><span class="token number">109.080842</span><span class="token punctuation">,</span><span class="token number">45.002073</span><span class="token punctuation">,</span>
                              <span class="token operator">-</span><span class="token number">105.91517</span><span class="token punctuation">,</span><span class="token number">45.002073</span><span class="token punctuation">,</span>
                              <span class="token operator">-</span><span class="token number">104.058488</span><span class="token punctuation">,</span><span class="token number">44.996596</span><span class="token punctuation">,</span>
                              <span class="token operator">-</span><span class="token number">104.053011</span><span class="token punctuation">,</span><span class="token number">43.002989</span><span class="token punctuation">,</span>
                              <span class="token operator">-</span><span class="token number">104.053011</span><span class="token punctuation">,</span><span class="token number">41.003906</span><span class="token punctuation">,</span>
                              <span class="token operator">-</span><span class="token number">105.728954</span><span class="token punctuation">,</span><span class="token number">40.998429</span><span class="token punctuation">,</span>
                              <span class="token operator">-</span><span class="token number">107.919731</span><span class="token punctuation">,</span><span class="token number">41.003906</span><span class="token punctuation">,</span>
                              <span class="token operator">-</span><span class="token number">109.04798</span><span class="token punctuation">,</span><span class="token number">40.998429</span><span class="token punctuation">,</span>
                              <span class="token operator">-</span><span class="token number">111.047063</span><span class="token punctuation">,</span><span class="token number">40.998429</span><span class="token punctuation">,</span>
                              <span class="token operator">-</span><span class="token number">111.047063</span><span class="token punctuation">,</span><span class="token number">42.000709</span><span class="token punctuation">,</span>
                              <span class="token operator">-</span><span class="token number">111.047063</span><span class="token punctuation">,</span><span class="token number">44.476286</span><span class="token punctuation">,</span>
                              <span class="token operator">-</span><span class="token number">111.05254</span><span class="token punctuation">,</span><span class="token number">45.002073</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
        <span class="token literal-property property">height</span> <span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
        <span class="token literal-property property">material</span> <span class="token operator">:</span> Cesium<span class="token punctuation">.</span>Color<span class="token punctuation">.</span><span class="token constant">RED</span><span class="token punctuation">.</span><span class="token function">withAlpha</span><span class="token punctuation">(</span><span class="token number">0.5</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
        <span class="token literal-property property">outline</span> <span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
        <span class="token literal-property property">outlineColor</span> <span class="token operator">:</span> Cesium<span class="token punctuation">.</span>Color<span class="token punctuation">.</span><span class="token constant">BLACK</span>
    <span class="token punctuation">}</span>

<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">//定位到entity</span>
<span class="token comment">//viewer.zoomTo(wyoming);</span>
<span class="token comment">//椭圆</span>
<span class="token keyword">var</span> entity <span class="token operator">=</span> viewer<span class="token punctuation">.</span>entities<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">position</span> <span class="token operator">:</span> Cesium<span class="token punctuation">.</span>Cartesian3<span class="token punctuation">.</span><span class="token function">fromDegrees</span><span class="token punctuation">(</span><span class="token operator">-</span><span class="token number">103.0</span><span class="token punctuation">,</span><span class="token number">40.0</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token literal-property property">ellipse</span><span class="token operator">:</span><span class="token punctuation">{</span>
        <span class="token literal-property property">semiMinorAxis</span> <span class="token operator">:</span> <span class="token number">250000.0</span><span class="token punctuation">,</span>
        <span class="token literal-property property">semiMajorAxis</span> <span class="token operator">:</span> <span class="token number">400000.0</span><span class="token punctuation">,</span>
        <span class="token comment">//颜色材质</span>
        <span class="token literal-property property">material</span> <span class="token operator">:</span> Cesium<span class="token punctuation">.</span>Color<span class="token punctuation">.</span><span class="token constant">BLUE</span><span class="token punctuation">.</span><span class="token function">withAlpha</span><span class="token punctuation">(</span><span class="token number">0.5</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">//viewer.zoomTo(viewer.entities);</span>
<span class="token keyword">var</span> ellipse <span class="token operator">=</span> entity<span class="token punctuation">.</span>ellipse<span class="token punctuation">;</span>
<span class="token comment">//图片材质</span>
ellipse<span class="token punctuation">.</span>material <span class="token operator">=</span> <span class="token string">&#39;http://localhost:8080/apps/sampleData/fire.png&#39;</span><span class="token punctuation">;</span>
<span class="token comment">//棋盘材质</span>
ellipse<span class="token punctuation">.</span>material <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Cesium<span class="token punctuation">.</span>CheckerboardMaterialProperty</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">evenColor</span> <span class="token operator">:</span> Cesium<span class="token punctuation">.</span>Color<span class="token punctuation">.</span><span class="token constant">WHITE</span><span class="token punctuation">,</span>
    <span class="token literal-property property">oddColor</span> <span class="token operator">:</span> Cesium<span class="token punctuation">.</span>Color<span class="token punctuation">.</span><span class="token constant">BLACK</span><span class="token punctuation">,</span>
    <span class="token literal-property property">repeat</span> <span class="token operator">:</span> <span class="token keyword">new</span> <span class="token class-name">Cesium<span class="token punctuation">.</span>Cartesian2</span><span class="token punctuation">(</span><span class="token number">4</span><span class="token punctuation">,</span><span class="token number">4</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">//条纹材质</span>
ellipse<span class="token punctuation">.</span>material <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Cesium<span class="token punctuation">.</span>StripeMaterialProperty</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">evenColor</span> <span class="token operator">:</span> Cesium<span class="token punctuation">.</span>Color<span class="token punctuation">.</span><span class="token constant">WHITE</span><span class="token punctuation">,</span>
    <span class="token literal-property property">oddColor</span> <span class="token operator">:</span> Cesium<span class="token punctuation">.</span>Color<span class="token punctuation">.</span><span class="token constant">BLACK</span><span class="token punctuation">,</span>
    <span class="token literal-property property">repeat</span> <span class="token operator">:</span> <span class="token number">32</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">//网格材质</span>
ellipse<span class="token punctuation">.</span>material <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Cesium<span class="token punctuation">.</span>GridMaterialProperty</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">color</span> <span class="token operator">:</span> Cesium<span class="token punctuation">.</span>Color<span class="token punctuation">.</span><span class="token constant">YELLOW</span><span class="token punctuation">,</span>
    <span class="token literal-property property">cellAlpha</span> <span class="token operator">:</span> <span class="token number">0.2</span><span class="token punctuation">,</span>
    <span class="token literal-property property">lineCount</span> <span class="token operator">:</span> <span class="token keyword">new</span> <span class="token class-name">Cesium<span class="token punctuation">.</span>Cartesian2</span><span class="token punctuation">(</span><span class="token number">8</span><span class="token punctuation">,</span><span class="token number">8</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token literal-property property">lineThickness</span> <span class="token operator">:</span> <span class="token keyword">new</span> <span class="token class-name">Cesium<span class="token punctuation">.</span>Cartesian2</span><span class="token punctuation">(</span><span class="token number">2.0</span><span class="token punctuation">,</span><span class="token number">2.0</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">//黄色边线无填充，宽度2</span>
ellipse<span class="token punctuation">.</span>fill <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
ellipse<span class="token punctuation">.</span>outline <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
ellipse<span class="token punctuation">.</span>outlineColor <span class="token operator">=</span> Cesium<span class="token punctuation">.</span>Color<span class="token punctuation">.</span><span class="token constant">YELLOW</span><span class="token punctuation">;</span>
ellipse<span class="token punctuation">.</span>outlineWidth <span class="token operator">=</span> <span class="token number">2.0</span><span class="token punctuation">;</span>
<span class="token comment">//折线</span>
<span class="token keyword">var</span> entity2 <span class="token operator">=</span> viewer<span class="token punctuation">.</span>entities<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>
    <span class="token punctuation">{</span>
    <span class="token literal-property property">polyline</span> <span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">positions</span> <span class="token operator">:</span> Cesium<span class="token punctuation">.</span>Cartesian3<span class="token punctuation">.</span><span class="token function">fromDegreesArray</span><span class="token punctuation">(</span><span class="token punctuation">[</span> <span class="token operator">-</span><span class="token number">77</span><span class="token punctuation">,</span> <span class="token number">35</span><span class="token punctuation">,</span>                                                        
                                                        <span class="token operator">-</span><span class="token number">77.1</span><span class="token punctuation">,</span><span class="token number">35</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
        <span class="token literal-property property">width</span> <span class="token operator">:</span> <span class="token number">5</span><span class="token punctuation">,</span>
        <span class="token literal-property property">material</span> <span class="token operator">:</span> Cesium<span class="token punctuation">.</span>Color<span class="token punctuation">.</span><span class="token constant">RED</span>
<span class="token punctuation">}</span><span class="token punctuation">}</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">//折线边线</span>
<span class="token keyword">var</span> polyline3 <span class="token operator">=</span> entity2<span class="token punctuation">.</span>polyline<span class="token punctuation">;</span>
polyline3<span class="token punctuation">.</span>material <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Cesium<span class="token punctuation">.</span>PolylineOutlineMaterialProperty</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">color</span> <span class="token operator">:</span> Cesium<span class="token punctuation">.</span>Color<span class="token punctuation">.</span><span class="token constant">ORANGE</span><span class="token punctuation">,</span>
    <span class="token literal-property property">outlineWidth</span> <span class="token operator">:</span> <span class="token number">3</span><span class="token punctuation">,</span>
    <span class="token literal-property property">outlineColor</span> <span class="token operator">:</span> Cesium<span class="token punctuation">.</span>Color<span class="token punctuation">.</span><span class="token constant">BLACK</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">//折线辉光</span>
polyline3<span class="token punctuation">.</span>material <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Cesium<span class="token punctuation">.</span>PolylineGlowMaterialProperty</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">glowPower</span> <span class="token operator">:</span> <span class="token number">0.2</span><span class="token punctuation">,</span>
    <span class="token literal-property property">color</span> <span class="token operator">:</span> Cesium<span class="token punctuation">.</span>Color<span class="token punctuation">.</span><span class="token constant">BLUE</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">//体块</span>
wyoming<span class="token punctuation">.</span>polygon<span class="token punctuation">.</span>height <span class="token operator">=</span> <span class="token number">200000</span><span class="token punctuation">;</span>
wyoming<span class="token punctuation">.</span>polygon<span class="token punctuation">.</span>extrudedHeight <span class="token operator">=</span> <span class="token number">250000</span><span class="token punctuation">;</span>
<span class="token comment">//描述</span>
wyoming<span class="token punctuation">.</span>description <span class="token operator">=</span> <span class="token string">&#39;\\
&lt;img\\
  width=&quot;50%&quot;\\
  style=&quot;float:left; margin: 0 1em 1em 0;&quot;\\
  src=&quot;//cesiumjs.org/tutorials/Visualizing-Spatial-Data/images/Flag_of_Wyoming.svg&quot;/&gt;\\
&lt;p&gt;\\
  Wyoming is a state in the mountain region of the Western \\
  United States.\\
&lt;/p&gt;\\
&lt;p&gt;\\
  Wyoming is the 10th most extensive, but the least populous \\
  and the second least densely populated of the 50 United \\
  States. The western two thirds of the state is covered mostly \\
  with the mountain ranges and rangelands in the foothills of \\
  the eastern Rocky Mountains, while the eastern third of the \\
  state is high elevation prairie known as the High Plains. \\
  Cheyenne is the capital and the most populous city in Wyoming, \\
  with a population estimate of 62,448 in 2013.\\
&lt;/p&gt;\\
&lt;p&gt;\\
  Source: \\
  &lt;a style=&quot;color: WHITE&quot;\\
    target=&quot;_blank&quot;\\
    href=&quot;http://en.wikipedia.org/wiki/Wyoming&quot;&gt;Wikpedia&lt;/a&gt;\\
&lt;/p&gt;&#39;</span><span class="token punctuation">;</span>

<span class="token keyword">var</span> heading <span class="token operator">=</span> Cesium<span class="token punctuation">.</span>Math<span class="token punctuation">.</span><span class="token function">toRadians</span><span class="token punctuation">(</span><span class="token number">90</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">var</span> pitch <span class="token operator">=</span> Cesium<span class="token punctuation">.</span>Math<span class="token punctuation">.</span><span class="token function">toRadians</span><span class="token punctuation">(</span><span class="token operator">-</span><span class="token number">30</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">//viewer.zoomTo(wyoming, new Cesium.HeadingPitchRange(heading, pitch));</span>
<span class="token comment">/*
viewer.flyTo(wyoming).then(function(result){
    if(result){
        viewer.selectedEntity = wyoming;
    }
        
});
*/</span>
<span class="token comment">//wyoming.position = Cesium.Cartesian3.fromDegrees(-107.724,42.68);</span>
<span class="token comment">//viewer.trackedEntity = wyoming;</span>

<span class="token comment">//通知添加entity</span>
<span class="token keyword">function</span> <span class="token function">onChanged</span><span class="token punctuation">(</span><span class="token parameter">collection<span class="token punctuation">,</span> added<span class="token punctuation">,</span> removed<span class="token punctuation">,</span> changed</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">var</span> msg1 <span class="token operator">=</span> <span class="token string">&#39;added ids&#39;</span><span class="token punctuation">;</span>
    <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">var</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> added<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        msg1 <span class="token operator">+=</span> <span class="token string">&#39;\\n&#39;</span> <span class="token operator">+</span> added<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">.</span>id<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>msg1<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
viewer<span class="token punctuation">.</span>entities<span class="token punctuation">.</span>collectionChanged<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span>onChanged<span class="token punctuation">)</span><span class="token punctuation">;</span>
viewer<span class="token punctuation">.</span>entities<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">id</span> <span class="token operator">:</span> <span class="token string">&#39;uniqueID&#39;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">//根据ID找对象</span>
<span class="token keyword">var</span> theEnt <span class="token operator">=</span> viewer<span class="token punctuation">.</span>entities<span class="token punctuation">.</span><span class="token function">getById</span><span class="token punctuation">(</span><span class="token string">&#39;uniqueID&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">//创建或返回</span>
<span class="token keyword">var</span> cr <span class="token operator">=</span> viewer<span class="token punctuation">.</span>entities<span class="token punctuation">.</span><span class="token function">getOrCreateEntity</span><span class="token punctuation">(</span><span class="token string">&#39;ttt&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">var</span> e3 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Cesium<span class="token punctuation">.</span>Entity</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">id</span> <span class="token operator">:</span> <span class="token string">&#39;u3&#39;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
viewer<span class="token punctuation">.</span>entities<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>e3<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">//返回对应窗口位置所有entity列表</span>
<span class="token keyword">function</span> <span class="token function">drillPickEntities</span><span class="token punctuation">(</span><span class="token parameter">viewer<span class="token punctuation">,</span> windowPosition</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">var</span> pickedPrimitives <span class="token operator">=</span> viewer<span class="token punctuation">.</span>scene<span class="token punctuation">.</span><span class="token function">drillPick</span><span class="token punctuation">(</span>windowPosition<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">var</span> length <span class="token operator">=</span> pickedPrimitives<span class="token punctuation">.</span>length<span class="token punctuation">;</span>
    <span class="token keyword">var</span> result <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token keyword">var</span> hash <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
    <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">var</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">var</span> picked <span class="token operator">=</span> pickedPrimitives<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">;</span>
        <span class="token keyword">var</span> entity <span class="token operator">=</span> Cesium<span class="token punctuation">.</span><span class="token function">defaultValue</span><span class="token punctuation">(</span>picked<span class="token punctuation">.</span>id<span class="token punctuation">,</span> picked<span class="token punctuation">.</span>primitive<span class="token punctuation">.</span>id<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">if</span><span class="token punctuation">(</span>entity <span class="token keyword">instanceof</span> <span class="token class-name">Cesium<span class="token punctuation">.</span>Entity</span> <span class="token operator">&amp;&amp;</span>
           <span class="token operator">!</span>Cesium<span class="token punctuation">.</span><span class="token function">defined</span><span class="token punctuation">(</span>hash<span class="token punctuation">[</span>entity<span class="token punctuation">.</span>id<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            result<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>entity<span class="token punctuation">)</span><span class="token punctuation">;</span>
            hash<span class="token punctuation">[</span>entity<span class="token punctuation">.</span>id<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    
    <span class="token punctuation">}</span>
    
<span class="token punctuation">}</span>


<span class="token comment">//点和标签</span>
<span class="token keyword">var</span> citizenBankPark <span class="token operator">=</span> viewer<span class="token punctuation">.</span>entities<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">name</span> <span class="token operator">:</span> <span class="token string">&#39;Citizens Bank Park&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">position</span> <span class="token operator">:</span> Cesium<span class="token punctuation">.</span>Cartesian3<span class="token punctuation">.</span><span class="token function">fromDegrees</span><span class="token punctuation">(</span><span class="token operator">-</span><span class="token number">75.166493</span><span class="token punctuation">,</span> <span class="token number">39.9060534</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token literal-property property">point</span> <span class="token operator">:</span><span class="token punctuation">{</span>
        <span class="token literal-property property">pixelSize</span> <span class="token operator">:</span> <span class="token number">5</span><span class="token punctuation">,</span>
        <span class="token literal-property property">color</span> <span class="token operator">:</span> Cesium<span class="token punctuation">.</span>Color<span class="token punctuation">.</span><span class="token constant">RED</span><span class="token punctuation">,</span>
        <span class="token literal-property property">outlineColor</span> <span class="token operator">:</span> Cesium<span class="token punctuation">.</span>Color<span class="token punctuation">.</span><span class="token constant">WHITE</span><span class="token punctuation">,</span>
        <span class="token literal-property property">outlineWidth</span> <span class="token operator">:</span> <span class="token number">2</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">label</span> <span class="token operator">:</span><span class="token punctuation">{</span>
        <span class="token literal-property property">text</span> <span class="token operator">:</span> <span class="token string">&#39;Citizens Bank Park&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">font</span> <span class="token operator">:</span> <span class="token string">&#39;14pt monospace&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">style</span> <span class="token operator">:</span> Cesium<span class="token punctuation">.</span>LabelStyle<span class="token punctuation">.</span><span class="token constant">FILL_AND_OUTLINE</span><span class="token punctuation">,</span>
        <span class="token literal-property property">outlineWidth</span> <span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
        <span class="token literal-property property">verticalOrigin</span> <span class="token operator">:</span> Cesium<span class="token punctuation">.</span>VerticalOrigin<span class="token punctuation">.</span><span class="token constant">BOTTOM</span><span class="token punctuation">,</span>
        <span class="token literal-property property">pixelOffset</span> <span class="token operator">:</span> <span class="token keyword">new</span> <span class="token class-name">Cesium<span class="token punctuation">.</span>Cartesian2</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span><span class="token operator">-</span><span class="token number">9</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">//viewer.zoomTo(citizenBankPark);</span>
<span class="token comment">//gltf三维模型</span>
<span class="token keyword">var</span> position_gltf <span class="token operator">=</span>  Cesium<span class="token punctuation">.</span>Cartesian3<span class="token punctuation">.</span><span class="token function">fromDegrees</span><span class="token punctuation">(</span><span class="token operator">-</span><span class="token number">123</span><span class="token punctuation">,</span><span class="token number">44</span><span class="token punctuation">,</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">var</span> heading_gltf <span class="token operator">=</span> Cesium<span class="token punctuation">.</span>Math<span class="token punctuation">.</span><span class="token function">toRadians</span><span class="token punctuation">(</span><span class="token number">45.0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">var</span> pitch_gltf <span class="token operator">=</span> Cesium<span class="token punctuation">.</span>Math<span class="token punctuation">.</span><span class="token function">toRadians</span><span class="token punctuation">(</span><span class="token number">15.0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">var</span> roll_gltf <span class="token operator">=</span> Cesium<span class="token punctuation">.</span>Math<span class="token punctuation">.</span><span class="token function">toRadians</span><span class="token punctuation">(</span><span class="token number">0.0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">var</span> orientation_gltf <span class="token operator">=</span> Cesium<span class="token punctuation">.</span>Transforms<span class="token punctuation">.</span><span class="token function">headingPitchRollQuaternion</span><span class="token punctuation">(</span>position_gltf<span class="token punctuation">,</span> <span class="token keyword">new</span> <span class="token class-name">Cesium<span class="token punctuation">.</span>HeadingPitchRoll</span><span class="token punctuation">(</span>heading_gltf<span class="token punctuation">,</span>pitch_gltf<span class="token punctuation">,</span>roll_gltf<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">var</span> model_gltf <span class="token operator">=</span> viewer<span class="token punctuation">.</span>entities<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">position</span> <span class="token operator">:</span> position_gltf<span class="token punctuation">,</span>
    <span class="token literal-property property">orientation</span> <span class="token operator">:</span> orientation_gltf<span class="token punctuation">,</span>
    <span class="token literal-property property">model</span> <span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">uri</span> <span class="token operator">:</span> <span class="token string">&#39;http://localhost:8080/apps/sampleData/models/GroundVehicle/GroundVehicle.glb&#39;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
viewer<span class="token punctuation">.</span>trackedEntity <span class="token operator">=</span> model_gltf<span class="token punctuation">;</span>

<span class="token comment">//属性</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">typeof</span> wyoming<span class="token punctuation">.</span>polygon<span class="token punctuation">.</span>outline<span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>wyoming<span class="token punctuation">.</span>polygon<span class="token punctuation">.</span>outline<span class="token punctuation">.</span><span class="token function">getValue</span><span class="token punctuation">(</span>viewer<span class="token punctuation">.</span>clock<span class="token punctuation">.</span>currentTime<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  







  <span class="token comment">//返回对应窗口位置所有entity列表</span>
<span class="token keyword">function</span> <span class="token function">drillPickEntities</span><span class="token punctuation">(</span><span class="token parameter">viewer<span class="token punctuation">,</span> windowPosition</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">var</span> pickedPrimitives <span class="token operator">=</span> viewer<span class="token punctuation">.</span>scene<span class="token punctuation">.</span><span class="token function">drillPick</span><span class="token punctuation">(</span>windowPosition<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">var</span> length <span class="token operator">=</span> pickedPrimitives<span class="token punctuation">.</span>length<span class="token punctuation">;</span>
    <span class="token keyword">var</span> result <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token keyword">var</span> hash <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
    <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">var</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">var</span> picked <span class="token operator">=</span> pickedPrimitives<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">;</span>
        <span class="token keyword">var</span> entity <span class="token operator">=</span> Cesium<span class="token punctuation">.</span><span class="token function">defaultValue</span><span class="token punctuation">(</span>picked<span class="token punctuation">.</span>id<span class="token punctuation">,</span> picked<span class="token punctuation">.</span>primitive<span class="token punctuation">.</span>id<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">if</span><span class="token punctuation">(</span>entity <span class="token keyword">instanceof</span> <span class="token class-name">Cesium<span class="token punctuation">.</span>Entity</span> <span class="token operator">&amp;&amp;</span>
           <span class="token operator">!</span>Cesium<span class="token punctuation">.</span><span class="token function">defined</span><span class="token punctuation">(</span>hash<span class="token punctuation">[</span>entity<span class="token punctuation">.</span>id<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            result<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>entity<span class="token punctuation">)</span><span class="token punctuation">;</span>
            hash<span class="token punctuation">[</span>entity<span class="token punctuation">.</span>id<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    
    <span class="token punctuation">}</span>
    
<span class="token punctuation">}</span>


<span class="token comment">//点和标签</span>
<span class="token keyword">var</span> citizenBankPark <span class="token operator">=</span> viewer<span class="token punctuation">.</span>entities<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">name</span> <span class="token operator">:</span> <span class="token string">&#39;Citizens Bank Park&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">position</span> <span class="token operator">:</span> Cesium<span class="token punctuation">.</span>Cartesian3<span class="token punctuation">.</span><span class="token function">fromDegrees</span><span class="token punctuation">(</span><span class="token operator">-</span><span class="token number">75.166493</span><span class="token punctuation">,</span> <span class="token number">39.9060534</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token literal-property property">point</span> <span class="token operator">:</span><span class="token punctuation">{</span>
        <span class="token literal-property property">pixelSize</span> <span class="token operator">:</span> <span class="token number">5</span><span class="token punctuation">,</span>
        <span class="token literal-property property">color</span> <span class="token operator">:</span> Cesium<span class="token punctuation">.</span>Color<span class="token punctuation">.</span><span class="token constant">RED</span><span class="token punctuation">,</span>
        <span class="token literal-property property">outlineColor</span> <span class="token operator">:</span> Cesium<span class="token punctuation">.</span>Color<span class="token punctuation">.</span><span class="token constant">WHITE</span><span class="token punctuation">,</span>
        <span class="token literal-property property">outlineWidth</span> <span class="token operator">:</span> <span class="token number">2</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">label</span> <span class="token operator">:</span><span class="token punctuation">{</span>
        <span class="token literal-property property">text</span> <span class="token operator">:</span> <span class="token string">&#39;Citizens Bank Park&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">font</span> <span class="token operator">:</span> <span class="token string">&#39;14pt monospace&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">style</span> <span class="token operator">:</span> Cesium<span class="token punctuation">.</span>LabelStyle<span class="token punctuation">.</span><span class="token constant">FILL_AND_OUTLINE</span><span class="token punctuation">,</span>
        <span class="token literal-property property">outlineWidth</span> <span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
        <span class="token literal-property property">verticalOrigin</span> <span class="token operator">:</span> Cesium<span class="token punctuation">.</span>VerticalOrigin<span class="token punctuation">.</span><span class="token constant">BOTTOM</span><span class="token punctuation">,</span>
        <span class="token literal-property property">pixelOffset</span> <span class="token operator">:</span> <span class="token keyword">new</span> <span class="token class-name">Cesium<span class="token punctuation">.</span>Cartesian2</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span><span class="token operator">-</span><span class="token number">9</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">//viewer.zoomTo(citizenBankPark);</span>
<span class="token comment">//gltf三维模型</span>
<span class="token keyword">var</span> position_gltf <span class="token operator">=</span>  Cesium<span class="token punctuation">.</span>Cartesian3<span class="token punctuation">.</span><span class="token function">fromDegrees</span><span class="token punctuation">(</span><span class="token operator">-</span><span class="token number">123</span><span class="token punctuation">,</span><span class="token number">44</span><span class="token punctuation">,</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">var</span> heading_gltf <span class="token operator">=</span> Cesium<span class="token punctuation">.</span>Math<span class="token punctuation">.</span><span class="token function">toRadians</span><span class="token punctuation">(</span><span class="token number">45.0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">var</span> pitch_gltf <span class="token operator">=</span> Cesium<span class="token punctuation">.</span>Math<span class="token punctuation">.</span><span class="token function">toRadians</span><span class="token punctuation">(</span><span class="token number">15.0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">var</span> roll_gltf <span class="token operator">=</span> Cesium<span class="token punctuation">.</span>Math<span class="token punctuation">.</span><span class="token function">toRadians</span><span class="token punctuation">(</span><span class="token number">0.0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">var</span> orientation_gltf <span class="token operator">=</span> Cesium<span class="token punctuation">.</span>Transforms<span class="token punctuation">.</span><span class="token function">headingPitchRollQuaternion</span><span class="token punctuation">(</span>position_gltf<span class="token punctuation">,</span> <span class="token keyword">new</span> <span class="token class-name">Cesium<span class="token punctuation">.</span>HeadingPitchRoll</span><span class="token punctuation">(</span>heading_gltf<span class="token punctuation">,</span>pitch_gltf<span class="token punctuation">,</span>roll_gltf<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">var</span> model_gltf <span class="token operator">=</span> viewer<span class="token punctuation">.</span>entities<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">position</span> <span class="token operator">:</span> position_gltf<span class="token punctuation">,</span>
    <span class="token literal-property property">orientation</span> <span class="token operator">:</span> orientation_gltf<span class="token punctuation">,</span>
    <span class="token literal-property property">model</span> <span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">uri</span> <span class="token operator">:</span> <span class="token string">&#39;http://localhost:8080/apps/sampleData/models/GroundVehicle/GroundVehicle.glb&#39;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">//viewer.trackedEntity = model_gltf;</span>

<span class="token comment">//属性</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">typeof</span> wyoming<span class="token punctuation">.</span>polygon<span class="token punctuation">.</span>outline<span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>wyoming<span class="token punctuation">.</span>polygon<span class="token punctuation">.</span>outline<span class="token punctuation">.</span><span class="token function">getValue</span><span class="token punctuation">(</span>viewer<span class="token punctuation">.</span>clock<span class="token punctuation">.</span>currentTime<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">/*
//自定义相机的鼠标、键盘事件
//禁用默认的相机事件
var thgScene = viewer.scene;

var ellipsoid = viewer.scene.globe.ellipsoid;
//禁用默认相机控制事件
thgScene.screenSpaceCameraController.enableRotate = false;
thgScene.screenSpaceCameraController.enableTranslate = false;
thgScene.screenSpaceCameraController.enableZoom = false;
thgScene.screenSpaceCameraController.enableTilt = false;
thgScene.screenSpaceCameraController.enableLook = false;
//
var startMousePosition;
var mousePosition;
var flags = {
    looking : false,
    moveForward : false,
    moveBackward : false,
    moveUp : false,
    moveDown : false,
    moveLeft : false,
    moveRight : false
};
//增加一个事件处理器，当鼠标左键点击时，存储当前相机位置，并且设置looking状态
var theHandler = new Cesium.ScreenSpaceEventHandler(theCanvas);
theHandler.setInputAction(function(movement){
    flags.looking = true;
    mousePosition = startMousePosition = Cesium.Cartesian3.clone(movement.position);  
}, Cesium.ScreenSpaceEventType.LEFT_DOWN);
theHandler.setInputAction(function(movement){
    if(flags.looking){
        mousePosition = movement.endPosition;  
        console.log(mousePosition);  
    }
}, Cesium.ScreenSpaceEventType.MOUSE_MOVE);
theHandler.setInputAction(function(movement){
    flags.looking = false;
    console.log(mousePosition);
}, Cesium.ScreenSpaceEventType.LEFT_UP);

*/</span>

<span class="token keyword">var</span> theCanvas <span class="token operator">=</span> viewer<span class="token punctuation">.</span>canvas<span class="token punctuation">;</span>
theCanvas<span class="token punctuation">.</span><span class="token function">setAttribute</span><span class="token punctuation">(</span><span class="token string">&#39;tabindex&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;0&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
theCanvas<span class="token punctuation">.</span><span class="token function">focus</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">var</span> startMousePosition<span class="token punctuation">;</span>
<span class="token keyword">var</span> mousePosition<span class="token punctuation">;</span>
<span class="token keyword">var</span> flags <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">looking</span> <span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
    <span class="token literal-property property">moveForward</span> <span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
    <span class="token literal-property property">moveBackward</span> <span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
    <span class="token literal-property property">moveUp</span> <span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
    <span class="token literal-property property">moveDown</span> <span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
    <span class="token literal-property property">moveLeft</span> <span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
    <span class="token literal-property property">moveRight</span> <span class="token operator">:</span> <span class="token boolean">false</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token comment">//增加一个事件处理器，当鼠标左键点击时，存储当前相机位置，并且设置looking状态</span>
<span class="token keyword">var</span> theHandler <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Cesium<span class="token punctuation">.</span>ScreenSpaceEventHandler</span><span class="token punctuation">(</span>theCanvas<span class="token punctuation">)</span><span class="token punctuation">;</span>
theHandler<span class="token punctuation">.</span><span class="token function">setInputAction</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">movement</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    flags<span class="token punctuation">.</span>looking <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
    mousePosition <span class="token operator">=</span> startMousePosition <span class="token operator">=</span> Cesium<span class="token punctuation">.</span>Cartesian3<span class="token punctuation">.</span><span class="token function">clone</span><span class="token punctuation">(</span>movement<span class="token punctuation">.</span>position<span class="token punctuation">)</span><span class="token punctuation">;</span>  
<span class="token punctuation">}</span><span class="token punctuation">,</span> Cesium<span class="token punctuation">.</span>ScreenSpaceEventType<span class="token punctuation">.</span><span class="token constant">LEFT_DOWN</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
theHandler<span class="token punctuation">.</span><span class="token function">setInputAction</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">movement</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span>flags<span class="token punctuation">.</span>looking<span class="token punctuation">)</span><span class="token punctuation">{</span>
        mousePosition <span class="token operator">=</span> movement<span class="token punctuation">.</span>endPosition<span class="token punctuation">;</span>  
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>mousePosition<span class="token punctuation">)</span><span class="token punctuation">;</span>  
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span> Cesium<span class="token punctuation">.</span>ScreenSpaceEventType<span class="token punctuation">.</span><span class="token constant">MOUSE_MOVE</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
theHandler<span class="token punctuation">.</span><span class="token function">setInputAction</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">movement</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    flags<span class="token punctuation">.</span>looking <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>mousePosition<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span> Cesium<span class="token punctuation">.</span>ScreenSpaceEventType<span class="token punctuation">.</span><span class="token constant">LEFT_UP</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">//键盘事件</span>
<span class="token keyword">function</span> <span class="token function">getFlagForKeyCode</span><span class="token punctuation">(</span><span class="token parameter">keyCode</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">switch</span><span class="token punctuation">(</span>keyCode<span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">case</span> <span class="token string">&#39;W&#39;</span><span class="token punctuation">.</span><span class="token function">charCodeAt</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token operator">:</span>
            <span class="token keyword">return</span> <span class="token string">&#39;moveForward&#39;</span><span class="token punctuation">;</span>
        <span class="token keyword">case</span> <span class="token string">&#39;S&#39;</span><span class="token punctuation">.</span><span class="token function">charCodeAt</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token operator">:</span>
            <span class="token keyword">return</span> <span class="token string">&#39;moveBackward&#39;</span><span class="token punctuation">;</span>
        <span class="token keyword">case</span> <span class="token string">&#39;Q&#39;</span><span class="token punctuation">.</span><span class="token function">charCodeAt</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token operator">:</span>
            <span class="token keyword">return</span> <span class="token string">&#39;moveUp&#39;</span><span class="token punctuation">;</span>
        <span class="token keyword">case</span> <span class="token string">&#39;E&#39;</span><span class="token punctuation">.</span><span class="token function">charCodeAt</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token operator">:</span>
            <span class="token keyword">return</span> <span class="token string">&#39;moveDown&#39;</span><span class="token punctuation">;</span>
        <span class="token keyword">case</span> <span class="token string">&#39;D&#39;</span><span class="token punctuation">.</span><span class="token function">charCodeAt</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token operator">:</span>
            <span class="token keyword">return</span> <span class="token string">&#39;moveRight&#39;</span><span class="token punctuation">;</span>
        <span class="token keyword">case</span> <span class="token string">&#39;A&#39;</span><span class="token punctuation">.</span><span class="token function">charCodeAt</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token operator">:</span>
            <span class="token keyword">return</span> <span class="token string">&#39;moveLeft&#39;</span><span class="token punctuation">;</span>
        <span class="token keyword">default</span><span class="token operator">:</span>
            <span class="token keyword">return</span> <span class="token keyword">undefined</span><span class="token punctuation">;</span>
            
    
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

document<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">&#39;keydown&#39;</span><span class="token punctuation">,</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">e</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">var</span> flagName <span class="token operator">=</span> <span class="token function">getFlagForKeyCode</span><span class="token punctuation">(</span>e<span class="token punctuation">.</span>keyCode<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token keyword">typeof</span> flagName <span class="token operator">!==</span> <span class="token string">&#39;undefined&#39;</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        flags<span class="token punctuation">[</span>flagName<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>flagName<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

document<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">&#39;keyup&#39;</span><span class="token punctuation">,</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">e</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">var</span> flagName <span class="token operator">=</span> <span class="token function">getFlagForKeyCode</span><span class="token punctuation">(</span>e<span class="token punctuation">.</span>keyCode<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token keyword">typeof</span> flagName <span class="token operator">!==</span> <span class="token string">&#39;undefined&#39;</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        flags<span class="token punctuation">[</span>flagName<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>flagName<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">//更新相机的位置</span>
viewer<span class="token punctuation">.</span>clock<span class="token punctuation">.</span>onTick<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">clock</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">var</span> camera <span class="token operator">=</span> viewer<span class="token punctuation">.</span>camera<span class="token punctuation">;</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span>flags<span class="token punctuation">.</span>looking<span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">var</span> width <span class="token operator">=</span> theCanvas<span class="token punctuation">.</span>clientWidth<span class="token punctuation">;</span>
        <span class="token keyword">var</span> height <span class="token operator">=</span> theCanvas<span class="token punctuation">.</span>clientHeight<span class="token punctuation">;</span>
        <span class="token comment">//鼠标点击时，这个坐标算得到0，0</span>
        <span class="token keyword">var</span> x <span class="token operator">=</span> <span class="token punctuation">(</span>mousePosition<span class="token punctuation">.</span>x <span class="token operator">-</span> startMousePosition<span class="token punctuation">.</span>x<span class="token punctuation">)</span> <span class="token operator">/</span> width<span class="token punctuation">;</span>
        <span class="token keyword">var</span> y <span class="token operator">=</span> <span class="token operator">-</span><span class="token punctuation">(</span>mousePosition<span class="token punctuation">.</span>y <span class="token operator">-</span> startMousePosition<span class="token punctuation">.</span>y<span class="token punctuation">)</span> <span class="token operator">/</span> height<span class="token punctuation">;</span>
        <span class="token keyword">var</span> lookFactor <span class="token operator">=</span> <span class="token number">0.05</span><span class="token punctuation">;</span>
        camera<span class="token punctuation">.</span><span class="token function">lookRight</span><span class="token punctuation">(</span>x <span class="token operator">*</span> lookFactor<span class="token punctuation">)</span><span class="token punctuation">;</span>
        camera<span class="token punctuation">.</span><span class="token function">lookUp</span><span class="token punctuation">(</span>y <span class="token operator">*</span> lookFactor<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token comment">//依据相机所在的绝对高度来决定相机的运行速度</span>
    <span class="token keyword">var</span> ellipsoid <span class="token operator">=</span> viewer<span class="token punctuation">.</span>scene<span class="token punctuation">.</span>globe<span class="token punctuation">.</span>ellipsoid<span class="token punctuation">;</span>
    <span class="token keyword">var</span> cameraHeight <span class="token operator">=</span> ellipsoid<span class="token punctuation">.</span><span class="token function">cartesianToCartographic</span><span class="token punctuation">(</span>camera<span class="token punctuation">.</span>position<span class="token punctuation">)</span><span class="token punctuation">.</span>height<span class="token punctuation">;</span>
    <span class="token keyword">var</span> moveRate <span class="token operator">=</span> cameraHeight <span class="token operator">/</span> <span class="token number">100.0</span><span class="token punctuation">;</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span> flags<span class="token punctuation">.</span>moveForward<span class="token punctuation">)</span><span class="token punctuation">{</span>
        camera<span class="token punctuation">.</span><span class="token function">moveForward</span><span class="token punctuation">(</span>moveRate<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span> flags<span class="token punctuation">.</span>moveBackward<span class="token punctuation">)</span><span class="token punctuation">{</span>
        camera<span class="token punctuation">.</span><span class="token function">moveBackward</span><span class="token punctuation">(</span>moveRate<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span> flags<span class="token punctuation">.</span>moveUp <span class="token punctuation">)</span><span class="token punctuation">{</span>
        camera<span class="token punctuation">.</span><span class="token function">moveUp</span><span class="token punctuation">(</span> moveRate <span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span> flags<span class="token punctuation">.</span>moveDown<span class="token punctuation">)</span><span class="token punctuation">{</span>
        camera<span class="token punctuation">.</span><span class="token function">moveDown</span><span class="token punctuation">(</span>moveRate<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span> flags<span class="token punctuation">.</span>moveLeft<span class="token punctuation">)</span><span class="token punctuation">{</span>
        camera<span class="token punctuation">.</span><span class="token function">moveLeft</span><span class="token punctuation">(</span>moveRate<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span> flags<span class="token punctuation">.</span>moveRight<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        camera<span class="token punctuation">.</span><span class="token function">moveRight</span><span class="token punctuation">(</span>moveRate<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
        
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
       









<span class="token comment">//加载汽车模型</span>
<span class="token comment">/*
var modelMatrix_car = Cesium.Transforms.eastNorthUpToFixedFrame( Cesium.Cartesian3.fromDegrees(-75.62898254394531, 40.02804946899414,0.0));
var model_car = viewer.scene.primitives.add(    
    Cesium.Model.fromGltf({
        url : &#39;http://localhost:8080/apps/sampleData/models/GroundVehicle/GroundVehicle.glb&#39;,
        modelMatrix : modelMatrix_car,
        scale : 200.0
 
}));
//显示坐标系统
viewer.extend(Cesium.viewerCesiumInspectorMixin);
*/</span>
<span class="token comment">//加载动画模型</span>

<span class="token keyword">var</span> modelMatrix_man <span class="token operator">=</span> Cesium<span class="token punctuation">.</span>Transforms<span class="token punctuation">.</span><span class="token function">eastNorthUpToFixedFrame</span><span class="token punctuation">(</span> Cesium<span class="token punctuation">.</span>Cartesian3<span class="token punctuation">.</span><span class="token function">fromDegrees</span><span class="token punctuation">(</span><span class="token operator">-</span><span class="token number">75.62898254394531</span><span class="token punctuation">,</span> <span class="token number">40.02804946899414</span><span class="token punctuation">,</span><span class="token number">0.0</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">var</span> model_man <span class="token operator">=</span> viewer<span class="token punctuation">.</span>scene<span class="token punctuation">.</span>primitives<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>    
    Cesium<span class="token punctuation">.</span>Model<span class="token punctuation">.</span><span class="token function">fromGltf</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
        <span class="token literal-property property">url</span> <span class="token operator">:</span> <span class="token string">&#39;http://localhost:8080/apps/sampleData/models/CesiumMan/Cesium_Man.glb&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">modelMatrix</span> <span class="token operator">:</span> modelMatrix_man<span class="token punctuation">,</span>
        <span class="token literal-property property">scale</span> <span class="token operator">:</span> <span class="token number">200.0</span>
 
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
Cesium<span class="token punctuation">.</span><span class="token function">when</span><span class="token punctuation">(</span>model_man<span class="token punctuation">.</span>readyPromise<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">model</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    model<span class="token punctuation">.</span>activeAnimations<span class="token punctuation">.</span><span class="token function">addAll</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
        <span class="token literal-property property">loop</span> <span class="token operator">:</span> Cesium<span class="token punctuation">.</span>ModelAnimationLoop<span class="token punctuation">.</span><span class="token constant">REPEAT</span><span class="token punctuation">,</span>
        <span class="token literal-property property">speedup</span> <span class="token operator">:</span> <span class="token number">0.5</span><span class="token punctuation">,</span>
        <span class="token literal-property property">reverse</span> <span class="token operator">:</span> <span class="token boolean">true</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span> 

</code></pre></div><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code>Cesium<span class="token punctuation">.</span>Ion<span class="token punctuation">.</span>defaultAccessToken <span class="token operator">=</span> <span class="token string">&#39;eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9. .QT-UwdXK6VZyYMhtznEEIru0AEQEzMPxDlxQw96mTlA&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">var</span> viewer <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Cesium<span class="token punctuation">.</span>Viewer</span><span class="token punctuation">(</span><span class="token string">&#39;cesiumContainer&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">//鹰眼方式1 </span>
<span class="token keyword">var</span> viewer1 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Cesium<span class="token punctuation">.</span>Viewer</span><span class="token punctuation">(</span><span class="token string">&#39;eye&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">//设置鹰眼图属性 </span>
<span class="token keyword">var</span> control <span class="token operator">=</span> viewer1<span class="token punctuation">.</span>scene<span class="token punctuation">.</span>screenSpaceCameraController<span class="token punctuation">;</span>
control<span class="token punctuation">.</span>enableRotate <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
control<span class="token punctuation">.</span>enableTranslate <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
control<span class="token punctuation">.</span>enableZoom <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
control<span class="token punctuation">.</span>enableTilt <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
control<span class="token punctuation">.</span>enableLook <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
<span class="token keyword">var</span> <span class="token function-variable function">syncViewer</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    viewer1<span class="token punctuation">.</span>camera<span class="token punctuation">.</span><span class="token function">flyTo</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
        <span class="token literal-property property">destination</span><span class="token operator">:</span> viewer<span class="token punctuation">.</span>camera<span class="token punctuation">.</span>position<span class="token punctuation">,</span>
        <span class="token literal-property property">orientation</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token literal-property property">heading</span><span class="token operator">:</span> viewer<span class="token punctuation">.</span>camera<span class="token punctuation">.</span>heading<span class="token punctuation">,</span>
            <span class="token literal-property property">pitch</span><span class="token operator">:</span> viewer<span class="token punctuation">.</span>camera<span class="token punctuation">.</span>pitch<span class="token punctuation">,</span>
            <span class="token literal-property property">roll</span><span class="token operator">:</span> viewer<span class="token punctuation">.</span>camera<span class="token punctuation">.</span>roll
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token literal-property property">duration</span><span class="token operator">:</span> <span class="token number">0.0</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token comment">//同步鹰眼 </span>
<span class="token comment">//viewer.scene.preRender.addEventListener(syncViewer); </span>
<span class="token comment">//鹰眼方式2 </span>
viewer<span class="token punctuation">.</span>entities<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">position</span><span class="token operator">:</span> Cesium<span class="token punctuation">.</span>Cartesian3<span class="token punctuation">.</span><span class="token function">fromDegrees</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">text</span><span class="token operator">:</span> <span class="token keyword">new</span> <span class="token class-name">Cesium<span class="token punctuation">.</span>CallbackProperty</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token function">syncViewer</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">return</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token boolean">true</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">var</span> viewer <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Cesium<span class="token punctuation">.</span>Viewer</span><span class="token punctuation">(</span><span class="token string">&#39;cesiumContainer&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">geocoder</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
    <span class="token literal-property property">homeButton</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
    <span class="token literal-property property">sceneModePicker</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
    <span class="token literal-property property">baseLayerPicker</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
    <span class="token literal-property property">navigationHelpButton</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
    <span class="token literal-property property">animation</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
    <span class="token literal-property property">timeline</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
    <span class="token literal-property property">fullscreenButton</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
    <span class="token literal-property property">vrButton</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
    <span class="token comment">//Cesium本地服务 </span>
    <span class="token comment">//imageryProvider : Cesium.createTileMapServiceImageryProvider({</span>
    <span class="token comment">// url : Cesium.buildModuleUrl(&#39;http://Build/Cesium/Assets/Textures/NaturalEarthII&#39;) //</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token comment">// }); </span>

<span class="token comment">//显示帧速</span>
viewer<span class="token punctuation">.</span>scene<span class="token punctuation">.</span>debugShowFramesPerSecond <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
<span class="token comment">//关闭大气层显示 //viewer.scene.skyAtmosphere.show = false; </span>
<span class="token comment">//控制视角不转到地下 viewer.scene.globe.depthTestAgainstTerrain = true; </span>
<span class="token keyword">var</span> thePosition <span class="token operator">=</span> Cesium<span class="token punctuation">.</span>Cartesian3<span class="token punctuation">.</span><span class="token function">fromDegrees</span><span class="token punctuation">(</span><span class="token operator">-</span><span class="token number">107.0</span><span class="token punctuation">,</span> <span class="token number">40.0</span><span class="token punctuation">,</span> <span class="token number">300000.0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">//方向 var theHeading = Cesium.Math.toRadians(20.0); </span>
<span class="token comment">//倾斜角度 var thePitch = Cesium.Math.toRadians(-90.0); </span>
<span class="token keyword">var</span> theRoll <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token keyword">var</span> redBox <span class="token operator">=</span> viewer<span class="token punctuation">.</span>entities<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;red box with black outline&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">position</span><span class="token operator">:</span> thePosition<span class="token punctuation">,</span>
    <span class="token literal-property property">box</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">dimensions</span><span class="token operator">:</span> <span class="token keyword">new</span> <span class="token class-name">Cesium<span class="token punctuation">.</span>Cartesian3</span><span class="token punctuation">(</span><span class="token number">400000.0</span><span class="token punctuation">,</span> <span class="token number">300000.0</span><span class="token punctuation">,</span> <span class="token number">500000.0</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
        <span class="token literal-property property">material</span><span class="token operator">:</span> Cesium<span class="token punctuation">.</span>Color<span class="token punctuation">.</span><span class="token constant">RED</span><span class="token punctuation">.</span><span class="token function">withAlpha</span><span class="token punctuation">(</span><span class="token number">0.5</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
        <span class="token literal-property property">outline</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
        <span class="token literal-property property">outlineColor</span><span class="token operator">:</span> Cesium<span class="token punctuation">.</span>Color<span class="token punctuation">.</span><span class="token constant">BLACK</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">//viewer.zoomTo(viewer.entities); </span>
<span class="token keyword">var</span> translation <span class="token operator">=</span> Cesium<span class="token punctuation">.</span>Cartesian3<span class="token punctuation">.</span><span class="token function">fromArray</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">//加载3dtiles建筑物模型 </span>
<span class="token keyword">var</span> tileset <span class="token operator">=</span> viewer<span class="token punctuation">.</span>scene<span class="token punctuation">.</span>primitives<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Cesium<span class="token punctuation">.</span>Cesium3DTileset</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token comment">//数据路径 </span>
    <span class="token literal-property property">url</span><span class="token operator">:</span> <span class="token string">&#39;http://localhost:8080/apps/sampleData/Cesium3DTiles/Tilesets/Tileset/tileset.json&#39;</span><span class="token punctuation">,</span>
    <span class="token comment">//最大的屏幕空间误差</span>
    <span class="token literal-property property">maximumScreenSpaceError</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
    <span class="token comment">//最大加载瓦片个数</span>
    <span class="token literal-property property">maximumNumberOfLoadedTiles</span><span class="token operator">:</span> <span class="token number">1000</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">var</span> m <span class="token operator">=</span> tileset<span class="token punctuation">.</span>modelMatrix<span class="token punctuation">;</span>
<span class="token comment">// 旋转x角度，转为弧度再参与运算 </span>
<span class="token keyword">var</span> RotateX <span class="token operator">=</span> <span class="token number">90.0</span><span class="token punctuation">;</span>
<span class="token keyword">var</span> m1 <span class="token operator">=</span> Cesium<span class="token punctuation">.</span>Matrix3<span class="token punctuation">.</span><span class="token function">fromRotationX</span><span class="token punctuation">(</span>Cesium<span class="token punctuation">.</span>Math<span class="token punctuation">.</span><span class="token function">toRadians</span><span class="token punctuation">(</span>RotateX<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">//矩阵计算 </span>
Cesium<span class="token punctuation">.</span>Matrix4<span class="token punctuation">.</span><span class="token function">multiplyByMatrix3</span><span class="token punctuation">(</span>m<span class="token punctuation">,</span> m1<span class="token punctuation">,</span> m<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">//赋值 </span>
tileset<span class="token punctuation">.</span>modelMatrix <span class="token operator">=</span> m<span class="token punctuation">;</span>

<span class="token keyword">var</span> defaultStyle <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Cesium<span class="token punctuation">.</span>Cesium3DTileStyle</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">color</span><span class="token operator">:</span> <span class="token string">&#39;rgba(255,255,255,0.5)&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">show</span><span class="token operator">:</span> <span class="token boolean">true</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
tileset<span class="token punctuation">.</span>style <span class="token operator">=</span> defaultStyle<span class="token punctuation">;</span> <span class="token comment">//视点看向3dtile模型 //viewer.zoomTo(tileset);</span>

<span class="token comment">//Cartesian3方式计算视角</span>
viewer<span class="token punctuation">.</span>camera<span class="token punctuation">.</span><span class="token function">setView</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">destination</span><span class="token operator">:</span> thePosition<span class="token punctuation">,</span>
    <span class="token literal-property property">orientation</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">heading</span><span class="token operator">:</span> theHeading<span class="token punctuation">,</span>
        <span class="token literal-property property">pitch</span><span class="token operator">:</span> thePitch<span class="token punctuation">,</span>
        <span class="token literal-property property">roll</span><span class="token operator">:</span> theRoll
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">//rectangle方式计算视角</span>
viewer<span class="token punctuation">.</span>camera<span class="token punctuation">.</span><span class="token function">setView</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token comment">//西南东北 </span>
    <span class="token literal-property property">destination</span><span class="token operator">:</span> Cesium<span class="token punctuation">.</span>Rectangle<span class="token punctuation">.</span><span class="token function">fromDegrees</span><span class="token punctuation">(</span><span class="token number">0.0</span><span class="token punctuation">,</span> <span class="token number">20.0</span><span class="token punctuation">,</span> <span class="token number">10.0</span><span class="token punctuation">,</span> <span class="token number">30.0</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token literal-property property">orientation</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">heading</span><span class="token operator">:</span> theHeading<span class="token punctuation">,</span>
        <span class="token literal-property property">pitch</span><span class="token operator">:</span> thePitch<span class="token punctuation">,</span>
        <span class="token literal-property property">roll</span><span class="token operator">:</span> theRoll
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">//flyto改变视角</span>
viewer<span class="token punctuation">.</span>camera<span class="token punctuation">.</span><span class="token function">flyTo</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">destination</span><span class="token operator">:</span> thePosition<span class="token punctuation">,</span>
    <span class="token literal-property property">orientation</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">heading</span><span class="token operator">:</span> theHeading<span class="token punctuation">,</span>
        <span class="token literal-property property">pitch</span><span class="token operator">:</span> thePitch<span class="token punctuation">,</span>
        <span class="token literal-property property">roll</span><span class="token operator">:</span> theRoll
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token comment">//设置飞行持续时间,默认会根据距离来计算</span>
    <span class="token literal-property property">duration</span><span class="token operator">:</span> <span class="token number">5</span><span class="token punctuation">,</span>
    <span class="token comment">//到达位置后执行的回调函数 </span>
    <span class="token function-variable function">complete</span><span class="token operator">:</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token comment">//如果取消飞行则会调用此函数 </span>
    <span class="token function-variable function">cancle</span><span class="token operator">:</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token comment">//如果摄像机飞越高于该值，则调整俯仰角度，</span>
    <span class="token literal-property property">pitchAdjustHeight</span><span class="token operator">:</span> <span class="token operator">-</span><span class="token number">90</span><span class="token punctuation">,</span>
    <span class="token comment">//相机最大飞行高度 maximumHeight : 5000,</span>
    <span class="token comment">//如果到达目的地有两种方式，设置具体值后会强制选择方向飞过这个经度 flyOverLongitude : 100 </span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">//lookAt方式控制 //</span>
<span class="token keyword">var</span> theRange <span class="token operator">=</span> <span class="token number">5000.0</span><span class="token punctuation">;</span>
<span class="token comment">//</span>
viewer<span class="token punctuation">.</span>camera<span class="token punctuation">.</span><span class="token function">lookAt</span><span class="token punctuation">(</span>thePosition<span class="token punctuation">,</span> <span class="token keyword">new</span> <span class="token class-name">Cesium<span class="token punctuation">.</span>HeadingPitchRange</span><span class="token punctuation">(</span>theHeading<span class="token punctuation">,</span> thePitch<span class="token punctuation">,</span> theRange<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">//加载topojson </span>
viewer<span class="token punctuation">.</span>dataSources<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>Cesium<span class="token punctuation">.</span>GeoJsonDataSource<span class="token punctuation">.</span><span class="token function">load</span><span class="token punctuation">(</span><span class="token string">&#39;http://localhost:8080/apps/sampleData/ne_10m_us_states.topojson&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">stroke</span><span class="token operator">:</span> Cesium<span class="token punctuation">.</span>Color<span class="token punctuation">.</span><span class="token constant">HOTPINK</span><span class="token punctuation">,</span>
    <span class="token literal-property property">fill</span><span class="token operator">:</span> Cesium<span class="token punctuation">.</span>Color<span class="token punctuation">.</span><span class="token constant">PINK</span><span class="token punctuation">.</span><span class="token function">withAlpha</span><span class="token punctuation">(</span><span class="token number">0.5</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token literal-property property">strokeWidth</span><span class="token operator">:</span> <span class="token number">3</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">//纹理图绘制 </span>
<span class="token keyword">function</span> <span class="token function">getColorRamp</span><span class="token punctuation">(</span><span class="token parameter">elevationRamp</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">var</span> ramp <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">createElement</span><span class="token punctuation">(</span><span class="token string">&#39;canvas&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    ramp<span class="token punctuation">.</span>width <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
    ramp<span class="token punctuation">.</span>height <span class="token operator">=</span> <span class="token number">100</span><span class="token punctuation">;</span>
    <span class="token keyword">var</span> ctx <span class="token operator">=</span> ramp<span class="token punctuation">.</span><span class="token function">getContext</span><span class="token punctuation">(</span><span class="token string">&#39;2d&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">var</span> values <span class="token operator">=</span> elevationRamp<span class="token punctuation">;</span>
    <span class="token keyword">var</span> grd <span class="token operator">=</span> ctx<span class="token punctuation">.</span><span class="token function">createLinearGradient</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">100</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    grd<span class="token punctuation">.</span><span class="token function">addColorStop</span><span class="token punctuation">(</span>values<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token string">&#39;#000000&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">//黑色 grd.addColorStop(values[1], &#39;#2747E0&#39;); </span>
    <span class="token comment">//蓝色 grd.addColorStop(values[2], &#39;#D33B7D&#39;); </span>
    <span class="token comment">//粉色 grd.addColorStop(values[3], &#39;#D33038&#39;); </span>
    <span class="token comment">//红色 grd.addColorStop(values[4], &#39;#FF9742&#39;); </span>
    <span class="token comment">//橘色 grd.addColorStop(values[5], &#39;#ffd700&#39;); </span>
    <span class="token comment">//黄色 grd.addColorStop(values[6], &#39;#ffffff&#39;);</span>
    <span class="token comment">//白色 ctx.fillStyle = grd; ctx.fillRect(0, 0, 1000, 10000); return ramp; </span>
<span class="token punctuation">}</span>
<span class="token comment">//渐变纹理填充墙 </span>
<span class="token keyword">var</span> redWall <span class="token operator">=</span> viewer<span class="token punctuation">.</span>entities<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;Red wall at height&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">wall</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">positions</span><span class="token operator">:</span> Cesium<span class="token punctuation">.</span>Cartesian3<span class="token punctuation">.</span><span class="token function">fromDegreesArrayHeights</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">121.444409</span><span class="token punctuation">,</span> <span class="token number">31.247417</span><span class="token punctuation">,</span> <span class="token number">200.0</span><span class="token punctuation">,</span> <span class="token number">121.533521</span><span class="token punctuation">,</span> <span class="token number">31.235685</span><span class="token punctuation">,</span> <span class="token number">200.0</span><span class="token punctuation">,</span> <span class="token number">121.563273</span><span class="token punctuation">,</span> <span class="token number">31.190347</span><span class="token punctuation">,</span> <span class="token number">200.0</span><span class="token punctuation">,</span> <span class="token number">121.546744</span><span class="token punctuation">,</span> <span class="token number">31.194054</span><span class="token punctuation">,</span> <span class="token number">200.0</span><span class="token punctuation">,</span> <span class="token number">121.516705</span><span class="token punctuation">,</span> <span class="token number">31.191459</span><span class="token punctuation">,</span> <span class="token number">200.0</span><span class="token punctuation">,</span> <span class="token number">121.502188</span><span class="token punctuation">,</span> <span class="token number">31.203074</span><span class="token punctuation">,</span> <span class="token number">200.0</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
        <span class="token literal-property property">minimumHeights</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">3000.0</span><span class="token punctuation">,</span> <span class="token number">2000.0</span><span class="token punctuation">,</span> <span class="token number">2000</span><span class="token punctuation">,</span> <span class="token number">2000</span><span class="token punctuation">,</span> <span class="token number">2000</span><span class="token punctuation">,</span> <span class="token number">3000</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token literal-property property">material</span><span class="token operator">:</span> <span class="token function">getColorRamp</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">0.0</span><span class="token punctuation">,</span> <span class="token number">0.045</span><span class="token punctuation">,</span> <span class="token number">0.1</span><span class="token punctuation">,</span> <span class="token number">0.15</span><span class="token punctuation">,</span> <span class="token number">0.37</span><span class="token punctuation">,</span> <span class="token number">0.54</span><span class="token punctuation">,</span> <span class="token number">1.0</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token boolean">true</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">//viewer.zoomTo(redWall);  </span>
<span class="token comment">//贴地线 </span>
<span class="token keyword">var</span> yellowLine <span class="token operator">=</span> viewer<span class="token punctuation">.</span>entities<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;Red line on the surface&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">corridor</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">positions</span><span class="token operator">:</span> Cesium<span class="token punctuation">.</span>Cartesian3<span class="token punctuation">.</span><span class="token function">fromDegreesArray</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">112.82436</span><span class="token punctuation">,</span> <span class="token number">23.071506</span><span class="token punctuation">,</span> <span class="token number">112.82742</span><span class="token punctuation">,</span> <span class="token number">23.067512</span><span class="token punctuation">,</span> <span class="token number">112.828878</span><span class="token punctuation">,</span> <span class="token number">23.064659</span><span class="token punctuation">,</span> <span class="token number">112.830799</span><span class="token punctuation">,</span> <span class="token number">23.060947</span><span class="token punctuation">,</span> <span class="token number">112.832166</span><span class="token punctuation">,</span> <span class="token number">24.058329</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
        <span class="token literal-property property">width</span><span class="token operator">:</span> <span class="token number">200</span><span class="token punctuation">,</span>
        <span class="token literal-property property">material</span><span class="token operator">:</span> Cesium<span class="token punctuation">.</span>Color<span class="token punctuation">.</span><span class="token constant">YELLOW</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
viewer<span class="token punctuation">.</span><span class="token function">zoomTo</span><span class="token punctuation">(</span>yellowLine<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">var</span> rectanglePrimitive <span class="token operator">=</span> viewer<span class="token punctuation">.</span>scene<span class="token punctuation">.</span>primitives<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>
    <span class="token keyword">new</span> <span class="token class-name">Cesium<span class="token punctuation">.</span>GroundPrimitive</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
        <span class="token literal-property property">geometryInstances</span><span class="token operator">:</span> <span class="token keyword">new</span> <span class="token class-name">Cesium<span class="token punctuation">.</span>GeometryInstance</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
            <span class="token literal-property property">geometry</span><span class="token operator">:</span> <span class="token keyword">new</span> <span class="token class-name">Cesium<span class="token punctuation">.</span>CorridorGeometry</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
                <span class="token literal-property property">vertexFormat</span><span class="token operator">:</span> Cesium<span class="token punctuation">.</span>VertexFormat<span class="token punctuation">.</span><span class="token constant">POSITION_ONLY</span><span class="token punctuation">,</span>
                <span class="token literal-property property">positions</span><span class="token operator">:</span> Cesium<span class="token punctuation">.</span>Cartesian3<span class="token punctuation">.</span><span class="token function">fromDegreesArray</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">112.82436</span><span class="token punctuation">,</span> <span class="token number">23.071506</span><span class="token punctuation">,</span> <span class="token number">112.82742</span><span class="token punctuation">,</span> <span class="token number">23.067512</span><span class="token punctuation">,</span> <span class="token number">112.828878</span><span class="token punctuation">,</span> <span class="token number">23.064659</span><span class="token punctuation">,</span> <span class="token number">112.830799</span><span class="token punctuation">,</span> <span class="token number">23.060947</span><span class="token punctuation">,</span> <span class="token number">112.832166</span><span class="token punctuation">,</span> <span class="token number">24.058329</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
                <span class="token literal-property property">width</span><span class="token operator">:</span> <span class="token number">40000</span>
            <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
            <span class="token literal-property property">attributes</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                <span class="token literal-property property">color</span><span class="token operator">:</span> Cesium<span class="token punctuation">.</span>ColorGeometryInstanceAttribute<span class="token punctuation">.</span><span class="token function">fromColor</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Cesium<span class="token punctuation">.</span>Color</span><span class="token punctuation">(</span><span class="token number">0.0</span><span class="token punctuation">,</span> <span class="token number">1.0</span><span class="token punctuation">,</span> <span class="token number">0.0</span><span class="token punctuation">,</span> <span class="token number">0.5</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
        <span class="token literal-property property">classificationType</span><span class="token operator">:</span> Cesium<span class="token punctuation">.</span>ClassificationType<span class="token punctuation">.</span><span class="token constant">TERRAIN</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">)</span>

</code></pre></div><p>###　use sampledPositionProperties</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token function">mounted</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> viewer <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">window<span class="token punctuation">.</span>Cesium<span class="token punctuation">.</span>Viewer</span><span class="token punctuation">(</span><span class="token string">&quot;cesiumContainer&quot;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
      <span class="token comment">// 地图提供商</span>
      <span class="token literal-property property">terrainProvider</span><span class="token operator">:</span> window<span class="token punctuation">.</span>Cesium<span class="token punctuation">.</span><span class="token function">createWorldTerrain</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">// Cesium.createOsmBuildings()用于创建OSM建筑物图层，并加入场景</span>
    viewer<span class="token punctuation">.</span>scene<span class="token punctuation">.</span>primitives<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>window<span class="token punctuation">.</span>Cesium<span class="token punctuation">.</span><span class="token function">createOsmBuildings</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">// 飞行轨迹点</span>
    <span class="token keyword">const</span> flightData <span class="token operator">=</span> <span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">parse</span><span class="token punctuation">(</span>
      <span class="token string">&#39;[{&quot;longitude&quot;:-122.39053,&quot;latitude&quot;:37.61779,&quot;height&quot;:-27.32},{&quot;longitude&quot;:-122.39035,&quot;latitude&quot;:37.61803,&quot;height&quot;:-27.32},{&quot;longitude&quot;:-122.39019,&quot;latitude&quot;:37.61826,&quot;height&quot;:-27.32}]&#39;</span>
    <span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">const</span> timeStepInSeconds <span class="token operator">=</span> <span class="token number">30</span><span class="token punctuation">;</span>
    <span class="token keyword">const</span> totalSeconds <span class="token operator">=</span> timeStepInSeconds <span class="token operator">*</span> <span class="token punctuation">(</span>flightData<span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">// Cesium.JulianDate.fromIso8601()方法会将ISO 8601格式的时间字符串转换为一个Julian日期对象</span>
    <span class="token comment">// 该对象包含了该时间的绝对时间值，即距离儒略日(Julian Day)的秒数</span>
    <span class="token keyword">const</span> start <span class="token operator">=</span> window<span class="token punctuation">.</span>Cesium<span class="token punctuation">.</span>JulianDate<span class="token punctuation">.</span><span class="token function">fromIso8601</span><span class="token punctuation">(</span><span class="token string">&quot;2020-03-09T23:10:00Z&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">// Cesium.JulianDate.addSeconds是Cesium.js中用于在Julian日期对象上添加秒数的方法</span>
    <span class="token keyword">const</span> stop <span class="token operator">=</span> window<span class="token punctuation">.</span>Cesium<span class="token punctuation">.</span>JulianDate<span class="token punctuation">.</span><span class="token function">addSeconds</span><span class="token punctuation">(</span>
      start<span class="token punctuation">,</span>
      totalSeconds<span class="token punctuation">,</span>
      <span class="token keyword">new</span> <span class="token class-name">window<span class="token punctuation">.</span>Cesium<span class="token punctuation">.</span>JulianDate</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">// 设置开始，结束，当前时间</span>
    viewer<span class="token punctuation">.</span>clock<span class="token punctuation">.</span>startTime <span class="token operator">=</span> start<span class="token punctuation">.</span><span class="token function">clone</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    viewer<span class="token punctuation">.</span>clock<span class="token punctuation">.</span>stopTime <span class="token operator">=</span> stop<span class="token punctuation">.</span><span class="token function">clone</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    viewer<span class="token punctuation">.</span>clock<span class="token punctuation">.</span>currentTime <span class="token operator">=</span> start<span class="token punctuation">.</span><span class="token function">clone</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">// 时间轴缩放</span>
    viewer<span class="token punctuation">.</span>timeline<span class="token punctuation">.</span><span class="token function">zoomTo</span><span class="token punctuation">(</span>start<span class="token punctuation">,</span> stop<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">// 时间倍数</span>
    viewer<span class="token punctuation">.</span>clock<span class="token punctuation">.</span>multiplier <span class="token operator">=</span> <span class="token number">50</span><span class="token punctuation">;</span>
    <span class="token comment">// 开启动画</span>
    viewer<span class="token punctuation">.</span>clock<span class="token punctuation">.</span>shouldAnimate <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>

    <span class="token comment">// 创建一个随时间变化的位置属性</span>
    <span class="token keyword">const</span> positionProperty <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">window<span class="token punctuation">.</span>Cesium<span class="token punctuation">.</span>SampledPositionProperty</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">// 遍历坐标数组</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> flightData<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">const</span> dataPoint <span class="token operator">=</span> flightData<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">;</span>

      <span class="token comment">// 坐标的时间</span>
      <span class="token keyword">const</span> time <span class="token operator">=</span> window<span class="token punctuation">.</span>Cesium<span class="token punctuation">.</span>JulianDate<span class="token punctuation">.</span><span class="token function">addSeconds</span><span class="token punctuation">(</span>
        start<span class="token punctuation">,</span>
        i <span class="token operator">*</span> timeStepInSeconds<span class="token punctuation">,</span>
        <span class="token keyword">new</span> <span class="token class-name">window<span class="token punctuation">.</span>Cesium<span class="token punctuation">.</span>JulianDate</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
      <span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token comment">// 坐标的地点</span>
      <span class="token keyword">const</span> position <span class="token operator">=</span> window<span class="token punctuation">.</span>Cesium<span class="token punctuation">.</span>Cartesian3<span class="token punctuation">.</span><span class="token function">fromDegrees</span><span class="token punctuation">(</span>
        dataPoint<span class="token punctuation">.</span>longitude<span class="token punctuation">,</span>
        dataPoint<span class="token punctuation">.</span>latitude<span class="token punctuation">,</span>
        dataPoint<span class="token punctuation">.</span>height
      <span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token comment">// 新增采样</span>
      positionProperty<span class="token punctuation">.</span><span class="token function">addSample</span><span class="token punctuation">(</span>time<span class="token punctuation">,</span> position<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token comment">// 新增实例，点击可查看描述信息</span>
      viewer<span class="token punctuation">.</span>entities<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
        <span class="token literal-property property">description</span><span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">Location: (</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>dataPoint<span class="token punctuation">.</span>longitude<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">, </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>dataPoint<span class="token punctuation">.</span>latitude<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">, </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>dataPoint<span class="token punctuation">.</span>height<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">)</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">,</span>
        <span class="token literal-property property">position</span><span class="token operator">:</span> position<span class="token punctuation">,</span>
        <span class="token literal-property property">point</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token literal-property property">pixelSize</span><span class="token operator">:</span> <span class="token number">10</span><span class="token punctuation">,</span> <span class="token literal-property property">color</span><span class="token operator">:</span> window<span class="token punctuation">.</span>Cesium<span class="token punctuation">.</span>Color<span class="token punctuation">.</span><span class="token constant">RED</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">// 追踪</span>
    viewer<span class="token punctuation">.</span>trackedEntity <span class="token operator">=</span> viewer<span class="token punctuation">.</span>entities<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      <span class="token comment">// TimeIntervalCollection中包含了多个TimeInterval对象，每个TimeInterval对象描述了一个时间段。</span>
      <span class="token comment">// TimeInterval对象包含了起始时间和结束时间以及一些额外的属性</span>
      <span class="token literal-property property">availability</span><span class="token operator">:</span> <span class="token keyword">new</span> <span class="token class-name">window<span class="token punctuation">.</span>Cesium<span class="token punctuation">.</span>TimeIntervalCollection</span><span class="token punctuation">(</span><span class="token punctuation">[</span>
        <span class="token keyword">new</span> <span class="token class-name">window<span class="token punctuation">.</span>Cesium<span class="token punctuation">.</span>TimeInterval</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">start</span><span class="token operator">:</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token literal-property property">stop</span><span class="token operator">:</span> stop <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
      <span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
      <span class="token literal-property property">position</span><span class="token operator">:</span> positionProperty<span class="token punctuation">,</span>
      <span class="token literal-property property">point</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token literal-property property">pixelSize</span><span class="token operator">:</span> <span class="token number">30</span><span class="token punctuation">,</span> <span class="token literal-property property">color</span><span class="token operator">:</span> window<span class="token punctuation">.</span>Cesium<span class="token punctuation">.</span>Color<span class="token punctuation">.</span><span class="token constant">GREEN</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token comment">// 路径图形</span>
      <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token keyword">new</span> <span class="token class-name">window<span class="token punctuation">.</span>Cesium<span class="token punctuation">.</span>PathGraphics</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">width</span><span class="token operator">:</span> <span class="token number">3</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>


</code></pre></div>`,4),e=[o];function c(l,u){return s(),a("div",null,e)}const k=n(t,[["render",c],["__file","dev_cesium.html.vue"]]);export{k as default};
