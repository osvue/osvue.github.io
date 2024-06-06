import{_ as n,p as s,q as a,a1 as p}from"./framework-d81ad7e5.js";const t={},o=p(`<h3 id="路径回放-视角跟随" tabindex="-1"><a class="header-anchor" href="#路径回放-视角跟随" aria-hidden="true">#</a> 路径回放，视角跟随</h3><ol><li>使用GeoJson生成路径数据</li><li>Cesium.DataSources加载</li><li>或取路径坐标信息</li><li>增加时间点间隔</li></ol><div class="language-html" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> <span class="token punctuation">{</span> onMounted<span class="token punctuation">,</span> ref <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span>
<span class="token keyword">import</span> <span class="token operator">*</span> <span class="token keyword">as</span> Cesium <span class="token keyword">from</span> <span class="token string">&#39;cesium&#39;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&quot;App&quot;</span><span class="token punctuation">,</span>
  <span class="token function">setup</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> cesiumContainer <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">onMounted</span><span class="token punctuation">(</span><span class="token keyword">async</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>cesiumContainer<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        viewer <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Cesium<span class="token punctuation">.</span>Viewer</span><span class="token punctuation">(</span>cesiumContainer<span class="token punctuation">.</span>value<span class="token punctuation">,</span> <span class="token punctuation">{</span>
          <span class="token literal-property property">timeline</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token comment">// 时间轴</span>
          <span class="token literal-property property">animation</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token comment">// 动画控件</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        viewer<span class="token punctuation">.</span>scene<span class="token punctuation">.</span>debugShowFramesPerSecond <span class="token operator">=</span> <span class="token boolean">true</span>


        <span class="token comment">//创建DataSource</span>
        <span class="token keyword">var</span> datasource <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Cesium<span class="token punctuation">.</span>CustomDataSource</span><span class="token punctuation">(</span><span class="token string">&quot;enetiestestdata&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        viewer<span class="token punctuation">.</span>dataSources<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>datasource<span class="token punctuation">)</span>

        <span class="token keyword">let</span> fileJson <span class="token operator">=</span> <span class="token keyword">await</span> Cesium<span class="token punctuation">.</span>GeoJsonDataSource<span class="token punctuation">.</span><span class="token function">load</span><span class="token punctuation">(</span><span class="token string">&#39;/src/assets/map.topojson&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        viewer<span class="token punctuation">.</span>dataSources<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>fileJson<span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">// 路径回放</span>
        <span class="token keyword">let</span> lujingdata <span class="token operator">=</span> fileJson<span class="token punctuation">.</span>entities<span class="token punctuation">.</span>values<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">.</span>polyline<span class="token punctuation">.</span>positions<span class="token punctuation">.</span>_value<span class="token punctuation">;</span>
        <span class="token keyword">var</span> property <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Cesium<span class="token punctuation">.</span>SampledPositionProperty</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token keyword">let</span> starttime <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">let</span> stoptime<span class="token punctuation">;</span>
        <span class="token keyword">let</span> timestamp <span class="token operator">=</span> starttime<span class="token punctuation">.</span><span class="token function">getTime</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        lujingdata<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">pos<span class="token punctuation">,</span> index</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
          <span class="token keyword">let</span> time <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span>timestamp <span class="token operator">+</span> index <span class="token operator">*</span> <span class="token number">5000</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
          stoptime <span class="token operator">=</span> time<span class="token punctuation">;</span>
          property<span class="token punctuation">.</span><span class="token function">addSample</span><span class="token punctuation">(</span>Cesium<span class="token punctuation">.</span>JulianDate<span class="token punctuation">.</span><span class="token function">fromDate</span><span class="token punctuation">(</span>time<span class="token punctuation">)</span><span class="token punctuation">,</span> pos<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span>
        property<span class="token punctuation">.</span><span class="token function">setInterpolationOptions</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
          <span class="token literal-property property">interpolationDegree</span><span class="token operator">:</span> <span class="token number">0.0001</span><span class="token punctuation">,</span>
          <span class="token literal-property property">interpolationAlgorithm</span><span class="token operator">:</span> Cesium<span class="token punctuation">.</span>LagrangePolynomialApproximation
        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>


        <span class="token keyword">var</span> entitydd <span class="token operator">=</span> datasource<span class="token punctuation">.</span>entities<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
          <span class="token literal-property property">availability</span><span class="token operator">:</span> <span class="token keyword">new</span> <span class="token class-name">Cesium<span class="token punctuation">.</span>TimeIntervalCollection</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token keyword">new</span> <span class="token class-name">Cesium<span class="token punctuation">.</span>TimeInterval</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
            <span class="token literal-property property">start</span><span class="token operator">:</span> Cesium<span class="token punctuation">.</span>JulianDate<span class="token punctuation">.</span><span class="token function">fromDate</span><span class="token punctuation">(</span>starttime<span class="token punctuation">)</span><span class="token punctuation">,</span>
            <span class="token literal-property property">stop</span><span class="token operator">:</span> Cesium<span class="token punctuation">.</span>JulianDate<span class="token punctuation">.</span><span class="token function">fromDate</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span>stoptime<span class="token punctuation">)</span><span class="token punctuation">)</span>
          <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">,</span>

          <span class="token literal-property property">position</span><span class="token operator">:</span> property<span class="token punctuation">,</span> <span class="token comment">// 点集</span>
          <span class="token comment">// billboard: {</span>
          <span class="token comment">//   image: &quot;./yingjiwuzi.png&quot;,</span>
          <span class="token comment">//   scale: 0.5,</span>
          <span class="token comment">//   pixelOffset: new Cesium.Cartesian2(0, -120),</span>
          <span class="token comment">//   heightReference: Cesium.HeightReference.CLAMP_TO_GROUND,</span>
          <span class="token comment">//   clampToGround: true  //是否贴地</span>
          <span class="token comment">// },</span>
          <span class="token literal-property property">model</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token literal-property property">uri</span><span class="token operator">:</span> <span class="token string">&#39;/src/assets/xiaofangche.gltf&#39;</span><span class="token punctuation">,</span>
            <span class="token literal-property property">scale</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
            <span class="token literal-property property">minimumPixelSize</span><span class="token operator">:</span> <span class="token number">70</span><span class="token punctuation">,</span>
            <span class="token literal-property property">maximumScale</span><span class="token operator">:</span> <span class="token number">70</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token comment">//朝向  定义模型朝向</span>
          <span class="token literal-property property">orientation</span><span class="token operator">:</span> <span class="token keyword">new</span> <span class="token class-name">Cesium<span class="token punctuation">.</span>VelocityOrientationProperty</span><span class="token punctuation">(</span>property<span class="token punctuation">)</span><span class="token punctuation">,</span>
          <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token literal-property property">leadTime</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
            <span class="token literal-property property">resolution</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
            <span class="token literal-property property">material</span><span class="token operator">:</span> <span class="token keyword">new</span> <span class="token class-name">Cesium<span class="token punctuation">.</span>PolylineGlowMaterialProperty</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
              <span class="token literal-property property">glowPower</span><span class="token operator">:</span> <span class="token number">0.3</span><span class="token punctuation">,</span>
              <span class="token literal-property property">color</span><span class="token operator">:</span> Cesium<span class="token punctuation">.</span>Color<span class="token punctuation">.</span><span class="token constant">GREEN</span>
            <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
            <span class="token literal-property property">width</span><span class="token operator">:</span> <span class="token number">20</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token comment">// 定义</span>
          <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                <span class="token literal-property property">text</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
                <span class="token literal-property property">fillColor</span><span class="token operator">:</span> Cesium<span class="token punctuation">.</span>Color<span class="token punctuation">.</span><span class="token constant">RED</span><span class="token punctuation">,</span>
                <span class="token literal-property property">pixelOffset</span><span class="token operator">:</span><span class="token keyword">new</span> <span class="token class-name">Cesium<span class="token punctuation">.</span>Cartesian2</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span><span class="token operator">-</span><span class="token number">30</span><span class="token punctuation">)</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>


        viewer<span class="token punctuation">.</span>clock<span class="token punctuation">.</span>onTick<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">tick</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
                console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>tick<span class="token punctuation">)</span><span class="token punctuation">;</span>
                    <span class="token keyword">try</span> <span class="token punctuation">{</span>
                    entitydd<span class="token punctuation">.</span>position<span class="token punctuation">.</span><span class="token function">getValue</span><span class="token punctuation">(</span>tick<span class="token punctuation">.</span>currentTime<span class="token punctuation">)</span><span class="token punctuation">;</span>
                    <span class="token comment">//  console.log(entitydd.position.getValue(tick.currentTime));</span>
                    <span class="token comment">//转为经纬度</span>
                
                    <span class="token keyword">var</span> cartographic <span class="token operator">=</span> Cesium<span class="token punctuation">.</span>Ellipsoid<span class="token punctuation">.</span><span class="token constant">WGS84</span><span class="token punctuation">.</span><span class="token function">cartesianToCartographic</span><span class="token punctuation">(</span>entitydd<span class="token punctuation">.</span>position<span class="token punctuation">.</span><span class="token function">getValue</span><span class="token punctuation">(</span>tick<span class="token punctuation">.</span>currentTime<span class="token punctuation">)</span><span class="token punctuation">)</span>
                     cartographic<span class="token punctuation">.</span>longitude <span class="token operator">=</span> Cesium<span class="token punctuation">.</span>Math<span class="token punctuation">.</span><span class="token function">toDegrees</span><span class="token punctuation">(</span>cartographic<span class="token punctuation">.</span>longitude<span class="token punctuation">)</span>
                    cartographic<span class="token punctuation">.</span>latitude <span class="token operator">=</span> Cesium<span class="token punctuation">.</span>Math<span class="token punctuation">.</span><span class="token function">toDegrees</span><span class="token punctuation">(</span>cartographic<span class="token punctuation">.</span>latitude<span class="token punctuation">)</span>
                    <span class="token comment">// console.log(cartographic);</span>
                    entitydd<span class="token punctuation">.</span>label<span class="token punctuation">.</span>text <span class="token operator">=</span> <span class="token function">Number</span><span class="token punctuation">(</span>cartographic<span class="token punctuation">.</span>longitude<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toFixed</span><span class="token punctuation">(</span><span class="token number">4</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token string">&quot;,&quot;</span> <span class="token operator">+</span> <span class="token function">Number</span><span class="token punctuation">(</span>cartographic<span class="token punctuation">.</span>latitude<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toFixed</span><span class="token punctuation">(</span><span class="token number">4</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

                    <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span>error<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                        console<span class="token punctuation">.</span><span class="token function">error</span><span class="token punctuation">(</span><span class="token string">&#39;-------------------------------------------&#39;</span><span class="token punctuation">,</span>error<span class="token punctuation">)</span><span class="token punctuation">;</span>            
                    <span class="token punctuation">}</span>    
        
        <span class="token punctuation">}</span><span class="token punctuation">)</span>

        <span class="token comment">// 视角跟踪，追随</span>
        viewer<span class="token punctuation">.</span>trackedEntity <span class="token operator">=</span>entitydd<span class="token punctuation">;</span>

        viewer<span class="token punctuation">.</span>clock<span class="token punctuation">.</span>currentTime <span class="token operator">=</span> Cesium<span class="token punctuation">.</span>JulianDate<span class="token punctuation">.</span><span class="token function">fromDate</span><span class="token punctuation">(</span>starttime<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//修改时间轴的当前时间</span>
        viewer<span class="token punctuation">.</span>clock<span class="token punctuation">.</span>stopTime <span class="token operator">=</span> Cesium<span class="token punctuation">.</span>JulianDate<span class="token punctuation">.</span><span class="token function">fromDate</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span>stoptime<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        viewer<span class="token punctuation">.</span>clock<span class="token punctuation">.</span>clockRange <span class="token operator">=</span> Cesium<span class="token punctuation">.</span>ClockRange<span class="token punctuation">.</span><span class="token constant">LOOP_STOP</span><span class="token punctuation">,</span>
          viewer<span class="token punctuation">.</span>clock<span class="token punctuation">.</span>shouldAnimate <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span> <span class="token comment">//开始播放</span>
        <span class="token comment">// viewer.zoomTo(fileJson)</span>




      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span>
      cesiumContainer
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
<span class="token comment">&lt;!-- Clock的ClockRange属性

CLAMPED：达到终止时间后停止
LOOP_STOP：达到终止时间后重新循环
UNBOUNDED：达到终止时间后继续读秒（默认） --&gt;</span>

</code></pre></div><p>轨迹回放的主要思想是让模型的位置随时间来进行变换，并且让视角的中心一直跟着模型移动</p><ol><li>trackedEntity: 相机跟踪模型</li><li>clock { multiplier: 控制播放速度 shouldAnimate: 设置是否移动 clockRange: 时间戳到终点后停止还是循环 }</li><li>SampledPositionProperty: addSample() 用来构造时间和位置的关系 根据这个关系来移动模型和绘制路径</li><li>sampleTerrainMostDetailed: 用来获取加载了地形后的真实坐标</li><li>Cesium.CallbackProperty: 因为要绘制运动后的轨迹线，所以用回调的方式把走过的路径重新绘制</li></ol><h3 id="贴地线ground" tabindex="-1"><a class="header-anchor" href="#贴地线ground" aria-hidden="true">#</a> 贴地线Ground</h3><h3 id="entity方式贴地" tabindex="-1"><a class="header-anchor" href="#entity方式贴地" aria-hidden="true">#</a> Entity方式贴地</h3><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code>  <span class="token keyword">let</span> line <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">105</span><span class="token punctuation">,</span> <span class="token number">36</span><span class="token punctuation">,</span> <span class="token number">116</span><span class="token punctuation">,</span> <span class="token number">38</span><span class="token punctuation">,</span> <span class="token number">118</span><span class="token punctuation">,</span> <span class="token number">36</span><span class="token punctuation">]</span>
    viewer<span class="token punctuation">.</span>entities<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
        <span class="token literal-property property">polyline</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token literal-property property">positions</span><span class="token operator">:</span> Cesium<span class="token punctuation">.</span>Cartesian3<span class="token punctuation">.</span><span class="token function">fromDegreesArray</span><span class="token punctuation">(</span>line<span class="token punctuation">)</span><span class="token punctuation">,</span><span class="token comment">//line要加载的线数据</span>
            <span class="token literal-property property">width</span><span class="token operator">:</span> <span class="token number">10</span><span class="token punctuation">,</span><span class="token comment">//线宽</span>
            <span class="token literal-property property">clampToGround</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span><span class="token comment">//开启贴地</span>
            <span class="token literal-property property">material</span><span class="token operator">:</span> Cesium<span class="token punctuation">.</span>Color<span class="token punctuation">.</span><span class="token constant">RED</span><span class="token comment">//颜色</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">//或者直接加载线数据地址，然后设置贴地即可</span>
    <span class="token keyword">var</span> promise <span class="token operator">=</span> Cesium<span class="token punctuation">.</span>GeoJsonDataSource<span class="token punctuation">.</span><span class="token function">load</span><span class="token punctuation">(</span>urlLine<span class="token punctuation">,</span> <span class="token punctuation">{</span>
            <span class="token literal-property property">clampToGround</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span><span class="token comment">//开启贴地</span>
     <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

</code></pre></div><h4 id="primitive方式贴地" tabindex="-1"><a class="header-anchor" href="#primitive方式贴地" aria-hidden="true">#</a> primitive方式贴地</h4><p>Primitive方式贴地， 需要使用GroundPolylinePrimitive和GroundPolylineGeometry来创建Primitive与Geometry对象，而不是使用Primitive和PolylineGeometry创建Primitive与Geometry对象，代码如下：</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code>    viewer<span class="token punctuation">.</span>scene<span class="token punctuation">.</span>primitives<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Cesium<span class="token punctuation">.</span>GroundPolylinePrimitive</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
        <span class="token literal-property property">geometryInstances</span><span class="token operator">:</span> <span class="token keyword">new</span> <span class="token class-name">Cesium<span class="token punctuation">.</span>GeometryInstance</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
            <span class="token literal-property property">geometry</span><span class="token operator">:</span> <span class="token keyword">new</span> <span class="token class-name">Cesium<span class="token punctuation">.</span>GroundPolylineGeometry</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
                <span class="token literal-property property">positions</span><span class="token operator">:</span> Cesium<span class="token punctuation">.</span>Cartesian3<span class="token punctuation">.</span><span class="token function">fromDegreesArray</span><span class="token punctuation">(</span>positions<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
                <span class="token literal-property property">width</span><span class="token operator">:</span> <span class="token number">15.0</span><span class="token punctuation">,</span><span class="token comment">//线宽</span>
                <span class="token literal-property property">vertexFormat</span><span class="token operator">:</span> Cesium<span class="token punctuation">.</span>PolylineColorAppearance<span class="token punctuation">.</span><span class="token constant">VERTEX_FORMAT</span>
            <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
            <span class="token literal-property property">attributes</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                <span class="token literal-property property">color</span><span class="token operator">:</span> Cesium<span class="token punctuation">.</span>ColorGeometryInstanceAttribute<span class="token punctuation">.</span><span class="token function">fromColor</span><span class="token punctuation">(</span>
                    <span class="token keyword">new</span> <span class="token class-name">Cesium<span class="token punctuation">.</span>Color<span class="token punctuation">.</span>fromCssColorString</span><span class="token punctuation">(</span><span class="token string">&quot;#0096ff&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
        <span class="token literal-property property">appearance</span><span class="token operator">:</span> <span class="token keyword">new</span> <span class="token class-name">Cesium<span class="token punctuation">.</span>PolylineColorAppearance</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
            <span class="token literal-property property">translucent</span><span class="token operator">:</span> <span class="token boolean">false</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><ul><li>Entity方式贴地更方便，但是效率不如primitive</li></ul><h3 id="水面效果" tabindex="-1"><a class="header-anchor" href="#水面效果" aria-hidden="true">#</a> 水面效果</h3><h3 id="primitive" tabindex="-1"><a class="header-anchor" href="#primitive" aria-hidden="true">#</a> primitive</h3><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code> <span class="token comment">//1 创建 geometry</span>
        <span class="token keyword">const</span> polygon <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Cesium<span class="token punctuation">.</span>PolygonGeometry</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
          <span class="token literal-property property">polygonHierarchy</span><span class="token operator">:</span> <span class="token keyword">new</span> <span class="token class-name">Cesium<span class="token punctuation">.</span>PolygonHierarchy</span><span class="token punctuation">(</span>
            Cesium<span class="token punctuation">.</span>Cartesian3<span class="token punctuation">.</span><span class="token function">fromDegreesArray</span><span class="token punctuation">(</span>cixian<span class="token punctuation">.</span><span class="token function">flat</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
          <span class="token punctuation">)</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">const</span> geometry <span class="token operator">=</span> Cesium<span class="token punctuation">.</span>PolygonGeometry<span class="token punctuation">.</span><span class="token function">createGeometry</span><span class="token punctuation">(</span>polygon<span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">//2，创建geometryInstance</span>
        <span class="token keyword">const</span> instance <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Cesium<span class="token punctuation">.</span>GeometryInstance</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
          <span class="token literal-property property">geometry</span><span class="token operator">:</span> geometry
        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">//3,创建 material</span>
        <span class="token keyword">var</span> material <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Cesium<span class="token punctuation">.</span>Material</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
          <span class="token literal-property property">fabric</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">&#39;Water&#39;</span><span class="token punctuation">,</span>
            <span class="token literal-property property">uniforms</span><span class="token operator">:</span> <span class="token punctuation">{</span>
              <span class="token literal-property property">baseWaterColor</span><span class="token operator">:</span> <span class="token keyword">new</span> <span class="token class-name">Cesium<span class="token punctuation">.</span>Color</span><span class="token punctuation">(</span> <span class="token number">0</span><span class="token punctuation">,</span>  <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0.7</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
              <span class="token literal-property property">normalMap</span><span class="token operator">:</span> <span class="token string">&#39;/src/assets/waterNormals.jpg&#39;</span><span class="token punctuation">,</span>
              <span class="token literal-property property">frequency</span><span class="token operator">:</span> <span class="token number">20000</span><span class="token punctuation">,</span>
              <span class="token literal-property property">animationSpeed</span><span class="token operator">:</span> <span class="token number">0.1</span><span class="token punctuation">,</span>
              <span class="token literal-property property">amplitude</span><span class="token operator">:</span> <span class="token number">50</span><span class="token punctuation">,</span>
              <span class="token literal-property property">specularIntensity</span><span class="token operator">:</span> <span class="token number">0.5</span>
            <span class="token punctuation">}</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span>

        <span class="token comment">// 4 创建Appearance</span>
        <span class="token keyword">var</span> appearance <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Cesium<span class="token punctuation">.</span>EllipsoidSurfaceAppearance</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
          <span class="token literal-property property">material</span><span class="token operator">:</span> material<span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span>

        <span class="token comment">// 5创建primitive</span>

        viewer<span class="token punctuation">.</span>scene<span class="token punctuation">.</span>primitives<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Cesium<span class="token punctuation">.</span>Primitive</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
          <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token string">&#39;idsss&#39;</span><span class="token punctuation">,</span>
          <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;water_info&#39;</span><span class="token punctuation">,</span>
          <span class="token literal-property property">asynchronous</span><span class="token operator">:</span><span class="token boolean">false</span><span class="token punctuation">,</span>
          <span class="token literal-property property">geometryInstances</span><span class="token operator">:</span> instance<span class="token punctuation">,</span>
          <span class="token literal-property property">appearance</span><span class="token operator">:</span> appearance
        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>


        viewer<span class="token punctuation">.</span>camera<span class="token punctuation">.</span><span class="token function">setView</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
          <span class="token literal-property property">destination</span><span class="token operator">:</span>Cesium<span class="token punctuation">.</span>Cartesian3<span class="token punctuation">.</span><span class="token function">fromDegrees</span><span class="token punctuation">(</span><span class="token number">114.28496124522002</span><span class="token punctuation">,</span> <span class="token number">36.42363208436417</span><span class="token punctuation">,</span><span class="token number">5000</span><span class="token punctuation">)</span>

        <span class="token punctuation">}</span><span class="token punctuation">)</span>
      
</code></pre></div><h3 id="等高线" tabindex="-1"><a class="header-anchor" href="#等高线" aria-hidden="true">#</a> 等高线</h3><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code>
<span class="token comment">// 2、开启深度测试</span>

viewer<span class="token punctuation">.</span>scene<span class="token punctuation">.</span>globe<span class="token punctuation">.</span>enableLighting <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>

<span class="token comment">// 3、设置几个等高线必备的参数</span>

<span class="token keyword">var</span> minHeight <span class="token operator">=</span> <span class="token operator">-</span><span class="token number">414.0</span><span class="token punctuation">;</span> <span class="token comment">// 最小高度-例：最低接近死海高度</span>

<span class="token keyword">var</span> maxHeight <span class="token operator">=</span> <span class="token number">8777.0</span><span class="token punctuation">;</span> <span class="token comment">// 最大高度-例：最高接近珠峰高度</span>

<span class="token keyword">var</span> contourColor <span class="token operator">=</span> Cesium<span class="token punctuation">.</span>Color<span class="token punctuation">.</span><span class="token constant">RED</span><span class="token punctuation">.</span><span class="token function">withAlpha</span><span class="token punctuation">(</span><span class="token number">0.4</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 等高线的颜色</span>

<span class="token keyword">var</span> contourSpacing <span class="token operator">=</span> <span class="token number">200.0</span><span class="token punctuation">;</span> <span class="token comment">// 等高线的等间距</span>

<span class="token keyword">var</span> contourWidth <span class="token operator">=</span> <span class="token number">1.0</span><span class="token punctuation">;</span> <span class="token comment">// 等高线的宽度 </span>
</code></pre></div><h3 id="淹没分析" tabindex="-1"><a class="header-anchor" href="#淹没分析" aria-hidden="true">#</a> 淹没分析</h3><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code> <span class="token doc-comment comment">/**
     * 淹没分析函数，通过拉伸面的高度来进行分析
     * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span><span class="token operator">*</span><span class="token punctuation">}</span></span> <span class="token parameter">viewer</span>
     * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span><span class="token operator">*</span><span class="token punctuation">}</span></span> <span class="token parameter">targertWaterHeight</span> ：目标水位高度
     * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span><span class="token operator">*</span><span class="token punctuation">}</span></span> <span class="token parameter">positions</span> ：研究区域底部坐标数组
     * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span><span class="token operator">*</span><span class="token punctuation">}</span></span> <span class="token parameter">waterHeight</span> ：当前水位高度
     */</span>
    <span class="token keyword">let</span> <span class="token function-variable function">induationAnalysis</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">viewer<span class="token punctuation">,</span> targertWaterHeight<span class="token punctuation">,</span> positions<span class="token punctuation">,</span> waterHeight</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;start................&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      viewer<span class="token punctuation">.</span>entities<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
        <span class="token literal-property property">polygon</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token literal-property property">hierarchy</span><span class="token operator">:</span> <span class="token keyword">new</span> <span class="token class-name">Cesium<span class="token punctuation">.</span>PolygonHierarchy</span><span class="token punctuation">(</span>Cesium<span class="token punctuation">.</span>Cartesian3<span class="token punctuation">.</span><span class="token function">fromDegreesArray</span><span class="token punctuation">(</span>positions<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
          <span class="token literal-property property">perPositionHeight</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
          <span class="token comment">// 使用回调函数Callback，直接设置extrudedHeight会导致闪烁</span>
          <span class="token literal-property property">extrudedHeight</span><span class="token operator">:</span> <span class="token keyword">new</span> <span class="token class-name">Cesium<span class="token punctuation">.</span>CallbackProperty</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            waterHeight <span class="token operator">+=</span> <span class="token number">0.2</span><span class="token punctuation">;</span>
            console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>waterHeight<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>waterHeight <span class="token operator">&gt;</span> targertWaterHeight<span class="token punctuation">)</span> <span class="token punctuation">{</span>
              waterHeight <span class="token operator">=</span> targertWaterHeight<span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
            <span class="token keyword">return</span> waterHeight<span class="token punctuation">;</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
          <span class="token literal-property property">material</span><span class="token operator">:</span> <span class="token keyword">new</span> <span class="token class-name">Cesium<span class="token punctuation">.</span>Color<span class="token punctuation">.</span>fromBytes</span><span class="token punctuation">(</span><span class="token number">64</span><span class="token punctuation">,</span> <span class="token number">157</span><span class="token punctuation">,</span> <span class="token number">253</span><span class="token punctuation">,</span> <span class="token number">150</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>


    <span class="token keyword">const</span> cesiumContainer <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">onMounted</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>cesiumContainer<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        viewer <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Cesium<span class="token punctuation">.</span>Viewer</span><span class="token punctuation">(</span>cesiumContainer<span class="token punctuation">.</span>value<span class="token punctuation">,</span> <span class="token punctuation">{</span>
          <span class="token literal-property property">timeline</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token comment">// 时间轴</span>
          <span class="token literal-property property">animation</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token comment">// 动画控件</span>

          <span class="token literal-property property">terrainProvider</span><span class="token operator">:</span> Cesium<span class="token punctuation">.</span><span class="token function">createWorldTerrain</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
            <span class="token literal-property property">requestVertexNormals</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token comment">//开启地形光照</span>
          <span class="token punctuation">}</span><span class="token punctuation">)</span>

        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">// 显示帧率</span>
        viewer<span class="token punctuation">.</span>scene<span class="token punctuation">.</span>debugShowFramesPerSecond <span class="token operator">=</span> <span class="token boolean">true</span>

        <span class="token function">induationAnalysis</span><span class="token punctuation">(</span>viewer<span class="token punctuation">,</span> <span class="token number">5000</span><span class="token punctuation">,</span> vdt<span class="token punctuation">.</span>value<span class="token punctuation">.</span><span class="token function">flat</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token number">30</span><span class="token punctuation">)</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    <span class="token punctuation">)</span>
</code></pre></div><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">setup</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> viewer
    <span class="token comment">//1.创建viewModel对象</span>


    <span class="token keyword">const</span> cesiumContainer <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>


    <span class="token keyword">let</span> <span class="token function-variable function">subscribeLayerParameter</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">name<span class="token punctuation">,</span>mLayer<span class="token punctuation">,</span>viewModel</span><span class="token punctuation">)</span><span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
				<span class="token comment">//4.监听控件值的变化</span>
				Cesium<span class="token punctuation">.</span>knockout<span class="token punctuation">.</span><span class="token function">getObservable</span><span class="token punctuation">(</span>viewModel<span class="token punctuation">,</span> name<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">subscribe</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">value</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
					<span class="token comment">//value值改变后会赋值给imagelayer的相应属性</span>
					console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>name <span class="token operator">+</span> <span class="token string">&quot;:&quot;</span> <span class="token operator">+</span> value<span class="token punctuation">)</span><span class="token punctuation">;</span>
					mLayer<span class="token punctuation">[</span>name<span class="token punctuation">]</span> <span class="token operator">=</span> value<span class="token punctuation">;</span>
				<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
			<span class="token punctuation">}</span> 
    <span class="token function">onMounted</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>cesiumContainer<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        viewer <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Cesium<span class="token punctuation">.</span>Viewer</span><span class="token punctuation">(</span>cesiumContainer<span class="token punctuation">.</span>value<span class="token punctuation">,</span> <span class="token punctuation">{</span>
          <span class="token comment">//搜索框</span>
          <span class="token literal-property property">geocoder</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
          <span class="token comment">//home键</span>
          <span class="token literal-property property">homeButton</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
          <span class="token comment">// 动画控件</span>
          <span class="token literal-property property">animation</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
          <span class="token comment">//全屏按钮</span>
          <span class="token literal-property property">fullscreenButton</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
          <span class="token comment">//场景模式选择器</span>
          <span class="token literal-property property">sceneModePicker</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
          <span class="token comment">//时间轴</span>
          <span class="token literal-property property">timeline</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
          <span class="token comment">//导航提示</span>
          <span class="token literal-property property">navigationHelpButton</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
          <span class="token comment">//地图选择器</span>
          <span class="token literal-property property">baseLayerPicker</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
          <span class="token literal-property property">terrainProvider</span><span class="token operator">:</span> Cesium<span class="token punctuation">.</span><span class="token function">createWorldTerrain</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
            <span class="token literal-property property">requestVertexNormals</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token comment">//开启地形光照</span>
          <span class="token punctuation">}</span><span class="token punctuation">)</span>

        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span> 
        <span class="token comment">// 显示帧率</span>
        viewer<span class="token punctuation">.</span>scene<span class="token punctuation">.</span>debugShowFramesPerSecond <span class="token operator">=</span> <span class="token boolean">true</span>
        viewer<span class="token punctuation">.</span>terrainProvider <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Cesium<span class="token punctuation">.</span>CesiumTerrainProvider</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
          <span class="token literal-property property">url</span><span class="token operator">:</span> <span class="token string">&quot;/src/assets/sjzTerrain/&quot;</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span>




        <span class="token keyword">var</span> elevationConterMaterial <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Cesium<span class="token punctuation">.</span>Material</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
          <span class="token literal-property property">fabric</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">&#39;ElevationContour&#39;</span><span class="token punctuation">,</span>
            <span class="token literal-property property">uniforms</span><span class="token operator">:</span> <span class="token punctuation">{</span>
              <span class="token comment">//等高线的颜色</span>
              <span class="token literal-property property">color</span><span class="token operator">:</span> <span class="token keyword">new</span> <span class="token class-name">Cesium<span class="token punctuation">.</span>Color</span><span class="token punctuation">(</span><span class="token number">1.0</span><span class="token punctuation">,</span> <span class="token number">0.0</span><span class="token punctuation">,</span> <span class="token number">0.0</span><span class="token punctuation">,</span> <span class="token number">1.0</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
              <span class="token comment">//等高线的间隔</span>
              <span class="token literal-property property">spacing</span><span class="token operator">:</span> <span class="token number">50</span><span class="token punctuation">,</span>
              <span class="token literal-property property">width</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
            <span class="token punctuation">}</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        viewer<span class="token punctuation">.</span>scene<span class="token punctuation">.</span>globe<span class="token punctuation">.</span>material <span class="token operator">=</span> elevationConterMaterial<span class="token punctuation">;</span>

        <span class="token keyword">var</span> viewModel <span class="token operator">=</span> <span class="token punctuation">{</span>
          <span class="token literal-property property">alpha</span><span class="token operator">:</span> <span class="token number">1.0</span><span class="token punctuation">,</span>
          <span class="token literal-property property">brightness</span><span class="token operator">:</span> <span class="token number">1.0</span><span class="token punctuation">,</span>
          <span class="token literal-property property">contrast</span><span class="token operator">:</span> <span class="token number">1.0</span><span class="token punctuation">,</span>
          <span class="token literal-property property">hue</span><span class="token operator">:</span> <span class="token number">0.0</span><span class="token punctuation">,</span>
          <span class="token literal-property property">saturation</span><span class="token operator">:</span> <span class="token number">1.0</span><span class="token punctuation">,</span>
          <span class="token literal-property property">gamma</span><span class="token operator">:</span> <span class="token number">1.0</span>
        <span class="token punctuation">}</span><span class="token punctuation">;</span>

        <span class="token comment">//2.监测viewModel中的属性</span>
        Cesium<span class="token punctuation">.</span>knockout<span class="token punctuation">.</span><span class="token function">track</span><span class="token punctuation">(</span>viewModel<span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">//3.激活属性,将viewModel对象与html控件绑定</span>
        <span class="token keyword">var</span> toolBar <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">&quot;toolbar&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        Cesium<span class="token punctuation">.</span>knockout<span class="token punctuation">.</span><span class="token function">applyBindings</span><span class="token punctuation">(</span>viewModel<span class="token punctuation">,</span> toolBar<span class="token punctuation">)</span><span class="token punctuation">;</span>

      
			
			<span class="token comment">//获取当前地球影像</span>
			<span class="token keyword">var</span> mLayer <span class="token operator">=</span> viewer<span class="token punctuation">.</span>imageryLayers<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
			


      <span class="token function">subscribeLayerParameter</span><span class="token punctuation">(</span><span class="token string">&quot;alpha&quot;</span><span class="token punctuation">,</span>mLayer<span class="token punctuation">,</span>viewModel<span class="token punctuation">)</span><span class="token punctuation">;</span>
			<span class="token function">subscribeLayerParameter</span><span class="token punctuation">(</span><span class="token string">&quot;brightness&quot;</span><span class="token punctuation">,</span>mLayer<span class="token punctuation">,</span>viewModel<span class="token punctuation">)</span><span class="token punctuation">;</span>
			<span class="token function">subscribeLayerParameter</span><span class="token punctuation">(</span><span class="token string">&quot;contrast&quot;</span><span class="token punctuation">,</span>mLayer<span class="token punctuation">,</span>viewModel<span class="token punctuation">)</span><span class="token punctuation">;</span>
			<span class="token function">subscribeLayerParameter</span><span class="token punctuation">(</span><span class="token string">&quot;hue&quot;</span><span class="token punctuation">,</span>mLayer<span class="token punctuation">,</span>viewModel<span class="token punctuation">)</span><span class="token punctuation">;</span>
			<span class="token function">subscribeLayerParameter</span><span class="token punctuation">(</span><span class="token string">&quot;saturation&quot;</span><span class="token punctuation">,</span>mLayer<span class="token punctuation">,</span>viewModel<span class="token punctuation">)</span><span class="token punctuation">;</span>
			<span class="token function">subscribeLayerParameter</span><span class="token punctuation">(</span><span class="token string">&quot;gamma&quot;</span><span class="token punctuation">,</span>mLayer<span class="token punctuation">,</span>viewModel<span class="token punctuation">)</span><span class="token punctuation">;</span>


      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    <span class="token punctuation">)</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span>
      cesiumContainer
    <span class="token punctuation">}</span>


  <span class="token punctuation">}</span>
 
</code></pre></div><h3 id="地图等高线晕眩效果" tabindex="-1"><a class="header-anchor" href="#地图等高线晕眩效果" aria-hidden="true">#</a> 地图等高线晕眩效果</h3><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code>
        <span class="token keyword">var</span> viewer <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Cesium<span class="token punctuation">.</span>Viewer</span><span class="token punctuation">(</span><span class="token string">&#39;cesiumContainer&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
            <span class="token literal-property property">imageryProvider</span><span class="token operator">:</span> <span class="token keyword">new</span> <span class="token class-name">Cesium<span class="token punctuation">.</span>UrlTemplateImageryProvider</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
                <span class="token literal-property property">url</span><span class="token operator">:</span> <span class="token string">&quot;https://webst02.is.autonavi.com/appmaptile?style=6&amp;x={x}&amp;y={y}&amp;z={z}&quot;</span><span class="token punctuation">,</span>
            <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
            <span class="token literal-property property">terrainProvider</span><span class="token operator">:</span> Cesium<span class="token punctuation">.</span><span class="token function">createWorldTerrain</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
                <span class="token literal-property property">requestVertexNormals</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
                <span class="token literal-property property">requestWaterMask</span><span class="token operator">:</span> <span class="token boolean">true</span>
            <span class="token punctuation">}</span><span class="token punctuation">)</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        viewer<span class="token punctuation">.</span>camera<span class="token punctuation">.</span><span class="token function">setView</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
            <span class="token literal-property property">destination</span><span class="token operator">:</span> <span class="token keyword">new</span> <span class="token class-name">Cesium<span class="token punctuation">.</span>Cartesian3</span><span class="token punctuation">(</span><span class="token operator">-</span><span class="token number">2495709.521843174</span><span class="token punctuation">,</span> <span class="token operator">-</span><span class="token number">4391600.804712465</span><span class="token punctuation">,</span> <span class="token number">3884463.7192916023</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
            <span class="token literal-property property">orientation</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                <span class="token literal-property property">heading</span><span class="token operator">:</span> <span class="token number">1.7183056487769202</span><span class="token punctuation">,</span>
                <span class="token literal-property property">pitch</span><span class="token operator">:</span> <span class="token operator">-</span><span class="token number">0.06460370548034144</span><span class="token punctuation">,</span>
                <span class="token literal-property property">roll</span><span class="token operator">:</span> <span class="token number">0.0079181631783527</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token comment">// 开启光照</span>
        viewer<span class="token punctuation">.</span>scene<span class="token punctuation">.</span>globe<span class="token punctuation">.</span>enableLighting <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>

        <span class="token comment">// 创建一个拥有高程阴影和等高线的组合样式</span>
        <span class="token keyword">function</span> <span class="token function">getElevationContourMaterial</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">Cesium<span class="token punctuation">.</span>Material</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
                <span class="token literal-property property">fabric</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                    <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">&#39;ElevationColorContour&#39;</span><span class="token punctuation">,</span>
                    <span class="token literal-property property">materials</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                        <span class="token literal-property property">contourMaterial</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                            <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">&#39;ElevationContour&#39;</span>
                        <span class="token punctuation">}</span><span class="token punctuation">,</span>
                        <span class="token literal-property property">elevationRampMaterial</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                            <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">&#39;ElevationRamp&#39;</span>
                        <span class="token punctuation">}</span>
                    <span class="token punctuation">}</span><span class="token punctuation">,</span>
                    <span class="token literal-property property">components</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                        <span class="token literal-property property">diffuse</span><span class="token operator">:</span> <span class="token string">&#39;contourMaterial.alpha == 0.0 ? elevationRampMaterial.diffuse : contourMaterial.diffuse&#39;</span><span class="token punctuation">,</span>
                        <span class="token literal-property property">alpha</span><span class="token operator">:</span> <span class="token string">&#39;max(contourMaterial.alpha, elevationRampMaterial.alpha)&#39;</span>
                    <span class="token punctuation">}</span>
                <span class="token punctuation">}</span><span class="token punctuation">,</span>
                <span class="token literal-property property">translucent</span><span class="token operator">:</span> <span class="token boolean">false</span>
            <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token keyword">var</span> minHeight <span class="token operator">=</span> <span class="token operator">-</span><span class="token number">414.0</span><span class="token punctuation">;</span> <span class="token comment">// 最低接近死海高度</span>
        <span class="token keyword">var</span> maxHeight <span class="token operator">=</span> <span class="token number">8777.0</span><span class="token punctuation">;</span> <span class="token comment">// 最高接近珠峰高度</span>
        <span class="token keyword">var</span> contourColor <span class="token operator">=</span> Cesium<span class="token punctuation">.</span>Color<span class="token punctuation">.</span><span class="token constant">RED</span><span class="token punctuation">.</span><span class="token function">withAlpha</span><span class="token punctuation">(</span><span class="token number">0.4</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 等高线的颜色</span>
        <span class="token keyword">var</span> contourSpacing <span class="token operator">=</span> <span class="token number">150.0</span><span class="token punctuation">;</span> <span class="token comment">// 等高线的等间距</span>
        <span class="token keyword">var</span> contourWidth <span class="token operator">=</span> <span class="token number">1.0</span><span class="token punctuation">;</span> <span class="token comment">// 等高线的宽度</span>

        <span class="token comment">// 1、高程阴影</span>
        <span class="token comment">// var material = Cesium.Material.fromType(&#39;ElevationRamp&#39;);</span>
        <span class="token comment">// var shadingUniforms = material.uniforms;</span>
        <span class="token comment">// shadingUniforms.minimumHeight = minHeight;</span>
        <span class="token comment">// shadingUniforms.maximumHeight = maxHeight;</span>
        <span class="token comment">// shadingUniforms.image = getColorRamp();</span>

        <span class="token comment">// 2、等高线</span>
        <span class="token comment">// var material = Cesium.Material.fromType(&#39;ElevationContour&#39;);</span>
        <span class="token comment">// var contourUniforms = material.uniforms;</span>
        <span class="token comment">// contourUniforms.width = contourWidth;</span>
        <span class="token comment">// contourUniforms.spacing = contourSpacing;</span>
        <span class="token comment">// contourUniforms.color = contourColor;</span>

        <span class="token comment">// 3、高程阴影+等高线</span>
        <span class="token keyword">var</span> material <span class="token operator">=</span> <span class="token function">getElevationContourMaterial</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">var</span> shadingUniforms <span class="token operator">=</span> material<span class="token punctuation">.</span>materials<span class="token punctuation">.</span>elevationRampMaterial<span class="token punctuation">.</span>uniforms<span class="token punctuation">;</span>
        shadingUniforms<span class="token punctuation">.</span>minimumHeight <span class="token operator">=</span> minHeight<span class="token punctuation">;</span>
        shadingUniforms<span class="token punctuation">.</span>maximumHeight <span class="token operator">=</span> maxHeight<span class="token punctuation">;</span>
        shadingUniforms<span class="token punctuation">.</span>image <span class="token operator">=</span> <span class="token function">getColorRamp</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token keyword">var</span> contourUniforms <span class="token operator">=</span> material<span class="token punctuation">.</span>materials<span class="token punctuation">.</span>contourMaterial<span class="token punctuation">.</span>uniforms<span class="token punctuation">;</span>
        contourUniforms<span class="token punctuation">.</span>width <span class="token operator">=</span> contourWidth<span class="token punctuation">;</span>
        contourUniforms<span class="token punctuation">.</span>spacing <span class="token operator">=</span> contourSpacing<span class="token punctuation">;</span>
        contourUniforms<span class="token punctuation">.</span>color <span class="token operator">=</span> contourColor<span class="token punctuation">;</span>

        viewer<span class="token punctuation">.</span>scene<span class="token punctuation">.</span>globe<span class="token punctuation">.</span>material <span class="token operator">=</span> material<span class="token punctuation">;</span>

        <span class="token keyword">function</span> <span class="token function">getColorRamp</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">var</span> ramp <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">createElement</span><span class="token punctuation">(</span><span class="token string">&#39;canvas&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            ramp<span class="token punctuation">.</span>width <span class="token operator">=</span> <span class="token number">100</span><span class="token punctuation">;</span>
            ramp<span class="token punctuation">.</span>height <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
            <span class="token keyword">var</span> ctx <span class="token operator">=</span> ramp<span class="token punctuation">.</span><span class="token function">getContext</span><span class="token punctuation">(</span><span class="token string">&#39;2d&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">var</span> values <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">0.0</span><span class="token punctuation">,</span> <span class="token number">0.045</span><span class="token punctuation">,</span> <span class="token number">0.1</span><span class="token punctuation">,</span> <span class="token number">0.15</span><span class="token punctuation">,</span> <span class="token number">0.37</span><span class="token punctuation">,</span> <span class="token number">0.54</span><span class="token punctuation">,</span> <span class="token number">1.0</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
            <span class="token keyword">var</span> grd <span class="token operator">=</span> ctx<span class="token punctuation">.</span><span class="token function">createLinearGradient</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">100</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            grd<span class="token punctuation">.</span><span class="token function">addColorStop</span><span class="token punctuation">(</span>values<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token string">&#39;rgba(0,0,0,0.8)&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//black</span>
            grd<span class="token punctuation">.</span><span class="token function">addColorStop</span><span class="token punctuation">(</span>values<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token string">&#39;rgba(39,71,224,0.8)&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//blue</span>
            grd<span class="token punctuation">.</span><span class="token function">addColorStop</span><span class="token punctuation">(</span>values<span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token string">&#39;rgba(211,59,125,0.8)&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//pink</span>
            grd<span class="token punctuation">.</span><span class="token function">addColorStop</span><span class="token punctuation">(</span>values<span class="token punctuation">[</span><span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token string">&#39;rgba(211,48,56,0.8)&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//red</span>
            grd<span class="token punctuation">.</span><span class="token function">addColorStop</span><span class="token punctuation">(</span>values<span class="token punctuation">[</span><span class="token number">4</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token string">&#39;rgba(255,151,66,0.8)&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//orange</span>
            grd<span class="token punctuation">.</span><span class="token function">addColorStop</span><span class="token punctuation">(</span>values<span class="token punctuation">[</span><span class="token number">5</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token string">&#39;rgba(255,215,0,0.8)&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//yellow</span>
            grd<span class="token punctuation">.</span><span class="token function">addColorStop</span><span class="token punctuation">(</span>values<span class="token punctuation">[</span><span class="token number">6</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token string">&#39;rgba(255,255,255,0.8)&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//white</span>
            ctx<span class="token punctuation">.</span>fillStyle <span class="token operator">=</span> grd<span class="token punctuation">;</span>
            ctx<span class="token punctuation">.</span><span class="token function">fillRect</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">100</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">return</span> ramp<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
</code></pre></div>`,22),e=[o];function c(l,u){return s(),a("div",null,e)}const k=n(t,[["render",c],["__file","gis_cesium_a.html.vue"]]);export{k as default};
