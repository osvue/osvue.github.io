import{_ as n,p as s,q as a,a1 as p}from"./framework-d81ad7e5.js";const t="/assets/degrass-de30e127.png",o={},e=p(`<div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 初始化cesium场景</span>
<span class="token keyword">const</span> viewer <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Cesium<span class="token punctuation">.</span>Viewer</span><span class="token punctuation">(</span>cesiumContainer<span class="token punctuation">.</span>value<span class="token punctuation">,</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">infoBox</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span> <span class="token comment">// 解决默认的控制台报错</span>
  <span class="token literal-property property">baseLayerPicker</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span> <span class="token comment">// 去掉底图选择器</span>
  <span class="token literal-property property">sceneModePicker</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span> <span class="token comment">// 去掉场景模式选择器 （3D，2D）</span>
  <span class="token literal-property property">homeButton</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span> <span class="token comment">// 去掉起始点按钮</span>
  <span class="token literal-property property">geocoder</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span> <span class="token comment">// 去掉地理代码搜索</span>
  <span class="token literal-property property">navigationHelpButton</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span> <span class="token comment">// 去掉导航帮助按钮</span>
  <span class="token literal-property property">animation</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span> <span class="token comment">// 取消动画按钮</span>
  <span class="token literal-property property">timeline</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span> <span class="token comment">// 去掉时间线</span>
  <span class="token literal-property property">fullscreenButton</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span> <span class="token comment">// 去掉全屏按钮</span>
  <span class="token literal-property property">selectionIndicator</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span> <span class="token comment">// 去掉选择指示器</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">(</span>viewer<span class="token punctuation">.</span>cesiumWidget<span class="token punctuation">.</span>creditContainer <span class="token keyword">as</span> HTMLDivElement<span class="token punctuation">)</span><span class="token punctuation">.</span>style<span class="token punctuation">.</span>display <span class="token operator">=</span> <span class="token string">&#39;none&#39;</span><span class="token punctuation">;</span> <span class="token comment">// 去掉cesium的左下角logo区域</span>
<span class="token comment">// 打印创建的viewer在控制台中</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>viewer<span class="token punctuation">)</span><span class="token punctuation">;</span>

</code></pre></div><h2 id="cesium常见的坐标系" tabindex="-1"><a class="header-anchor" href="#cesium常见的坐标系" aria-hidden="true">#</a> cesium常见的坐标系</h2><ul><li>Cesium中常见的坐标系： <ol><li>笛卡尔空间直角坐标系（Cartesian3）</li><li>平面坐标系（Cartesian2）</li><li>WGS84弧度坐标系（Cartographic）。</li></ol></li></ul><ol><li><p>笛卡尔坐标系（Cartesian3） 笛卡尔空间直角坐标又称为世界坐标，Cesium中用Cartesian3变量表示，可通过**new Cesium.Cartesian3(x, y, z)**创建，主要是用来做空间位置的变化如平移、旋转和缩放等等，它的坐标原点在椭球的中心。</p></li><li><p>平面坐标系（Cartesian2） 平面坐标系也就是平面直角坐标系，也称为屏幕坐标，是一个二维笛卡尔坐标系，与Cartesian3相比少了一个z的分量，<strong>new Cesium.Cartesian2(x, y)</strong>。Cartesian2经常用来描述屏幕坐标系，比如鼠标在电脑屏幕上的点击位置，返回的就是Cartesian2，返回了鼠标点击位置的xy像素点分量。</p></li><li><p>WGS84弧度坐标系（Cartographic） Cesium中的地理坐标单位默认是弧度制，用Cartographic变量表示，可通过**new Cesium.Cartographic(longitude, latitude, height)**创建，其中这里的参数是用弧度表示的经纬度，即经度和纬度。弧度即角度对应弧长是半径的倍数。 <code>角度转弧度 π/180×角度</code><code>弧度变角度 180/π×弧度</code></p></li></ol><h3 id="笛卡尔空间直角坐标系" tabindex="-1"><a class="header-anchor" href="#笛卡尔空间直角坐标系" aria-hidden="true">#</a> 笛卡尔空间直角坐标系</h3><ol><li><p>屏幕坐标（像素） 即二维笛卡尔平面坐标，我们通过鼠标点击直接获取的坐标就是屏幕坐标了，单位是像素值，也可以通过<code>new Cesium.Cartesian2(x, y)</code>创建。</p></li><li><p>笛卡尔空间直角坐标 笛卡尔空间直角坐标又称为世界坐标，Cesium中用Cartesian3变量表示，可通过<code>new Cesium.Cartesian3(x, y, z)</code>创建，主要是用来做空间位置的变化如平移、旋转和缩放等等，它的坐标原点在椭球的中心，如下图所示： <img src="`+t+`" alt="alt"></p></li><li><p>地理坐标（弧度） Cesium中的地理坐标单位默认是弧度制，用<strong>Cartographic</strong>变量表示，可通过<code>new Cesium.Cartographic(longitude, latitude, height)</code>创建，其中这里的参数是用弧度表示的经纬度，即经度和纬度。弧度即角度对应弧长是半径的倍数。 <code>角度转弧度 π/180×角度</code><code>弧度变角度 180/π×弧度</code></p></li></ol><ul><li><p>数学上是用弧度而非角度，因为360的容易整除对数学不重要，而数学使用弧度更方便。角度和弧度关系是：2π弧度=360°。从而1°≈0.0174533弧度，1弧度≈57.29578°。</p><ol><li>角度转换为弧度公式：弧度=角度÷180×π。</li><li>弧度转换为角度公式： 角度=弧度×180÷π。</li></ol></li></ul><ol start="4"><li>经纬度坐标 即测绘中的地理经纬度坐标，默认是WGS84坐标系，坐标原点在椭球的质心。</li></ol><p><strong>经度</strong>：参考椭球面上某点的大地子午面与本初子午面间的两面角，东正西负。 <strong>纬度</strong> ：参考椭球面上某点的法线与赤道平面的夹角，北正南负。 Cesuim中没有具体的经纬度对象，**要得到经纬度首先需要计算为弧度，**再进行转换。Cesium提供了如下对应的转换方法：</p><p><strong>Cesium.Cartesian3.fromDegrees(longitude, latitude, height, ellipsoid, result)</strong></p><ul><li>用于将给定经纬度高程坐标转换为笛卡尔坐标系下的向量的函数。</li></ul><ol><li>该函数接受五个参数<code>longitude、latitude、height、ellipsoid和result</code>。</li><li><code>longitude和latitude</code>是以度为单位的浮点数，表示地球表面上几何点所对应的经度和纬度。</li><li>height是这个几何点的高程值（以海平面作为参考）。</li><li>ellipsoid是一个可选参数，表示使用的椭球体，如果未提供，则使用WGS84椭球体。</li><li>result是一个可选的Cartesian3对象，表示转换后的笛卡尔坐标系下的向量。 <ol><li>如果未提供result参数，则新创建一个Cartesian3对象，其中计算后的向量储存在其中，然后返回该对象。</li></ol></li><li>该函数首先将经度和纬度转换为弧度，并根据该椭球体的参数计算该几何点的地心向径。使用此信息可以计算笛卡尔坐标，同时可将高度添加到Z分量中。</li></ol><h3 id="cesium-headingpitchroll-heading-pitch-roll-类" tabindex="-1"><a class="header-anchor" href="#cesium-headingpitchroll-heading-pitch-roll-类" aria-hidden="true">#</a> <code>Cesium.HeadingPitchRoll(heading, pitch, roll)</code> 类</h3><ul><li><code>Cesium.HeadingPitchRoll</code>是一个定义方位、俯仰和滚转角度的类，该类用于描述3D物体的旋转状态。 <ul><li>该类的构造函数使用三个参数<code>heading，pitch和roll</code>来分别定义目标物体绕Y轴的旋转角度（方位）、绕X轴的旋转角度（俯仰）和绕Z轴的旋转角度（滚转），并把它们存储在类的实例中以供使用。</li></ul></li></ul><ul><li>所有参数都是以弧度为单位的浮点数，且值在 <strong>-π到π</strong>之间。 <ol><li>heading参数定义了绕Y轴旋转的角度，以正北方向为0度。</li><li>pitch参数定义了物体绕X轴旋转的角度，以水平位置为0度，向上旋转为正，向下旋转为负。</li><li>roll参数定义了物体绕Z轴旋转的角度，以输入的旋转方向的垂直方向为0度。</li></ol></li></ul><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 经纬度转弧度 </span>
Cesium<span class="token punctuation">.</span>Math<span class="token punctuation">.</span><span class="token function">toRadians</span><span class="token punctuation">(</span>degrees<span class="token punctuation">)</span> 
<span class="token comment">// 弧度转经纬度</span>
Cesium<span class="token punctuation">.</span>Math<span class="token punctuation">.</span><span class="token function">toDegrees</span><span class="token punctuation">(</span>radians<span class="token punctuation">)</span> 
</code></pre></div><h4 id="cesium中常用的坐标变换" tabindex="-1"><a class="header-anchor" href="#cesium中常用的坐标变换" aria-hidden="true">#</a> Cesium中常用的坐标变换</h4><h3 id="经纬度坐标转笛卡尔坐标系" tabindex="-1"><a class="header-anchor" href="#经纬度坐标转笛卡尔坐标系" aria-hidden="true">#</a> 经纬度坐标转笛卡尔坐标系</h3><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 方法1：直接转换 lng=116.39366974823713, lat=39.9060622299375, height=31805.253837354827</span>
 <span class="token keyword">var</span> cartesian1 <span class="token operator">=</span> Cesium<span class="token punctuation">.</span>Cartesian3<span class="token punctuation">.</span><span class="token function">fromDegrees</span><span class="token punctuation">(</span>lng<span class="token punctuation">,</span> lat<span class="token punctuation">,</span> height<span class="token punctuation">)</span><span class="token punctuation">;</span> 
 <span class="token comment">//cartesian1.x=-2188808.843329037,cartesian1.y=4410550.298005498</span>
 <span class="token comment">//cartesian1.z=4090394.086155276</span>

<span class="token comment">// 方法2：借助ellipsoid对象，先转换成弧度再转换 </span>
<span class="token keyword">var</span> cartographic <span class="token operator">=</span> Cesium<span class="token punctuation">.</span>Cartographic<span class="token punctuation">.</span><span class="token function">fromDegrees</span><span class="token punctuation">(</span>lng<span class="token punctuation">,</span> lat<span class="token punctuation">,</span> height<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//单位：度，度，米 </span>
<span class="token keyword">var</span> cartesian3 <span class="token operator">=</span> ellipsoid<span class="token punctuation">.</span><span class="token function">cartographicToCartesian</span><span class="token punctuation">(</span>cartographic<span class="token punctuation">)</span><span class="token punctuation">;</span> 

</code></pre></div><h3 id="笛卡尔坐标系转经纬度" tabindex="-1"><a class="header-anchor" href="#笛卡尔坐标系转经纬度" aria-hidden="true">#</a> 笛卡尔坐标系转经纬度</h3><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">var</span> cartographic <span class="token operator">=</span> Cesium<span class="token punctuation">.</span>Cartographic<span class="token punctuation">.</span><span class="token function">fromCartesian</span><span class="token punctuation">(</span>cartesian3<span class="token punctuation">)</span><span class="token punctuation">;</span> 
<span class="token keyword">var</span> lat <span class="token operator">=</span> Cesium<span class="token punctuation">.</span>Math<span class="token punctuation">.</span><span class="token function">toDegrees</span><span class="token punctuation">(</span>cartographic<span class="token punctuation">.</span>latitude<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">var</span> lng <span class="token operator">=</span> Cesium<span class="token punctuation">.</span>Math<span class="token punctuation">.</span><span class="token function">toDegrees</span><span class="token punctuation">(</span>cartographic<span class="token punctuation">.</span>longitude<span class="token punctuation">)</span><span class="token punctuation">;</span> 
<span class="token keyword">var</span> height <span class="token operator">=</span> cartographic<span class="token punctuation">.</span>height<span class="token punctuation">;</span> 


</code></pre></div><h3 id="弧度和经纬度互转" tabindex="-1"><a class="header-anchor" href="#弧度和经纬度互转" aria-hidden="true">#</a> 弧度和经纬度互转</h3><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 经纬度转弧度：</span>

Cesium<span class="token punctuation">.</span>Math<span class="token punctuation">.</span><span class="token function">toRadians</span><span class="token punctuation">(</span>degrees<span class="token punctuation">)</span>  
 
<span class="token comment">// 弧度转经纬度：</span>

Cesium<span class="token punctuation">.</span>Math<span class="token punctuation">.</span><span class="token function">toDegrees</span><span class="token punctuation">(</span>radians<span class="token punctuation">)</span>  
</code></pre></div><h3 id="屏幕坐标和世界坐标互转" tabindex="-1"><a class="header-anchor" href="#屏幕坐标和世界坐标互转" aria-hidden="true">#</a> 屏幕坐标和世界坐标互转</h3><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 屏幕转世界坐标：</span>

<span class="token comment">// 2.二维屏幕坐标转为三维笛卡尔空间直角坐标（世界坐标） </span>
<span class="token keyword">var</span> cartesian3 <span class="token operator">=</span> scene<span class="token punctuation">.</span>globe<span class="token punctuation">.</span><span class="token function">pick</span><span class="token punctuation">(</span>viewer<span class="token punctuation">.</span>camera<span class="token punctuation">.</span><span class="token function">getPickRay</span><span class="token punctuation">(</span>windowPostion<span class="token punctuation">)</span><span class="token punctuation">,</span> scene <span class="token punctuation">)</span><span class="token punctuation">;</span>   
 
<span class="token comment">// 世界坐标转屏幕坐标：</span>

<span class="token comment">// 三维笛卡尔空间直角坐标（世界坐标）转为二维屏幕坐标 </span>
<span class="token comment">// 结果是Cartesian2对象，取出X,Y即为屏幕坐标。  </span>
windowPostion <span class="token operator">=</span> Cesium<span class="token punctuation">.</span>SceneTransforms<span class="token punctuation">.</span><span class="token function">wgs84ToWindowCoordinates</span><span class="token punctuation">(</span>scene<span class="token punctuation">,</span> cartesian3<span class="token punctuation">)</span><span class="token punctuation">;</span>   
 

</code></pre></div><ol><li><strong>经纬度坐标转世界坐标</strong> Cesium提供了两种方式将经纬度坐标转成世界坐标。</li></ol><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 方法1：直接转换 </span>
<span class="token comment">// var cartesian3 = Cesium.Cartesian3.fromDegrees(lng, lat, height); </span>
<span class="token comment">// 方法2：借助ellipsoid对象，先转换成弧度再转换 </span>
<span class="token keyword">var</span> cartographic <span class="token operator">=</span> Cesium<span class="token punctuation">.</span>Cartographic<span class="token punctuation">.</span><span class="token function">fromDegrees</span><span class="token punctuation">(</span>lng<span class="token punctuation">,</span> lat<span class="token punctuation">,</span> height<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//单位：度，度，米 </span>
<span class="token keyword">var</span> cartesian3 <span class="token operator">=</span> ellipsoid<span class="token punctuation">.</span><span class="token function">cartographicToCartesian</span><span class="token punctuation">(</span>cartographic<span class="token punctuation">)</span><span class="token punctuation">;</span> 
</code></pre></div><ol start="2"><li><strong>世界坐标转经纬度</strong></li></ol><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code>
<span class="token comment">// 3.笛卡尔空间直角坐标系转为地理坐标（弧度制） </span>
  <span class="token keyword">var</span> cartographic <span class="token operator">=</span> Cesium<span class="token punctuation">.</span>Cartographic<span class="token punctuation">.</span><span class="token function">fromCartesian</span><span class="token punctuation">(</span>cartesian3<span class="token punctuation">)</span><span class="token punctuation">;</span> 
<span class="token comment">// 方法1 </span>
  <span class="token keyword">var</span> cartographic <span class="token operator">=</span> ellipsoid<span class="token punctuation">.</span><span class="token function">cartesianToCartographic</span><span class="token punctuation">(</span>cartesian3<span class="token punctuation">)</span><span class="token punctuation">;</span> 
<span class="token comment">// 方法2 </span>
<span class="token comment">// 4.地理坐标（弧度制）转为经纬度坐标</span>
<span class="token keyword">var</span> lat <span class="token operator">=</span> Cesium<span class="token punctuation">.</span>Math<span class="token punctuation">.</span><span class="token function">toDegrees</span><span class="token punctuation">(</span>cartographic<span class="token punctuation">.</span>latitude<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">var</span> lng <span class="token operator">=</span> Cesium<span class="token punctuation">.</span>Math<span class="token punctuation">.</span><span class="token function">toDegrees</span><span class="token punctuation">(</span>cartographic<span class="token punctuation">.</span>longitude<span class="token punctuation">)</span><span class="token punctuation">;</span> 
<span class="token keyword">var</span> height <span class="token operator">=</span> cartographic<span class="token punctuation">.</span>height<span class="token punctuation">;</span> 
</code></pre></div><ol><li><strong>弧度和经纬度互转</strong></li></ol><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 经纬度转弧度：</span>

Cesium<span class="token punctuation">.</span>Math<span class="token punctuation">.</span><span class="token function">toRadians</span><span class="token punctuation">(</span>degrees<span class="token punctuation">)</span> 
<span class="token comment">// 弧度转经纬度：</span>

Cesium<span class="token punctuation">.</span>Math<span class="token punctuation">.</span><span class="token function">toDegrees</span><span class="token punctuation">(</span>radians<span class="token punctuation">)</span> 
</code></pre></div><ol start="4"><li><strong>屏幕坐标和世界坐标互转</strong></li></ol><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 屏幕转世界坐标：</span>

<span class="token comment">// 2.二维屏幕坐标转为三维笛卡尔空间直角坐标（世界坐标） </span>
<span class="token keyword">var</span> cartesian3 <span class="token operator">=</span> scene<span class="token punctuation">.</span>globe<span class="token punctuation">.</span><span class="token function">pick</span><span class="token punctuation">(</span>    viewer<span class="token punctuation">.</span>camera<span class="token punctuation">.</span><span class="token function">getPickRay</span><span class="token punctuation">(</span>windowPostion<span class="token punctuation">)</span><span class="token punctuation">,</span>    scene <span class="token punctuation">)</span><span class="token punctuation">;</span> 
<span class="token comment">// 注意这里屏幕坐标一定要在球上，否则生成出的cartesian对象是undefined。</span>
</code></pre></div><h3 id="世界坐标转屏幕坐标" tabindex="-1"><a class="header-anchor" href="#世界坐标转屏幕坐标" aria-hidden="true">#</a> 世界坐标转屏幕坐标：</h3><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 三维笛卡尔空间直角坐标（世界坐标）转为二维屏幕坐标 </span>
<span class="token comment">// 结果是Cartesian2对象，取出X,Y即为屏幕坐标。  </span>
windowPostion <span class="token operator">=</span> Cesium<span class="token punctuation">.</span>SceneTransforms<span class="token punctuation">.</span><span class="token function">wgs84ToWindowCoordinates</span><span class="token punctuation">(</span>scene<span class="token punctuation">,</span> cartesian3<span class="token punctuation">)</span><span class="token punctuation">;</span> 
</code></pre></div><h3 id="坐标变换工具" tabindex="-1"><a class="header-anchor" href="#坐标变换工具" aria-hidden="true">#</a> 坐标变换工具</h3><p>只有转换到笛卡尔坐标系后才能运用计算机图形学中的仿射变换知识进行空间位置变换如平移旋转缩放。Cesium为我们提供了如下几种很有用的变换工具类：</p><ul><li><strong>Cesium.Cartesian3</strong>（相当于Point3D）</li><li><strong>Cesium.Matrix3</strong>（3x3矩阵，用于描述旋转变换）</li><li><strong>Cesium.Matrix4</strong>（4x4矩阵，用于描述旋转加平移变换）</li><li><strong>Cesium.Quaternion</strong>（四元数，用于描述围绕某个向量旋转一定角度的变换）</li><li><strong>Cesium.Transforms</strong>(包含将位置转换为各种参考系的功能)</li></ul><div class="language-vue" data-ext="vue"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token comment">&lt;!-- 作为cesium的container元素 --&gt;</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>cesium-container<span class="token punctuation">&quot;</span></span> <span class="token attr-name">ref</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>cesiumContainer<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> <span class="token punctuation">{</span> onMounted<span class="token punctuation">,</span> ref <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span>
<span class="token keyword">import</span> <span class="token operator">*</span> <span class="token keyword">as</span> Cesium <span class="token keyword">from</span> <span class="token string">&#39;cesium&#39;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&quot;App&quot;</span><span class="token punctuation">,</span>
  <span class="token function">setup</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>

    <span class="token comment">// 笛卡尔 坐标  </span>
    <span class="token comment">/*
    经纬度 转换 笛卡尔坐标
    x: -555172.2535708158,
    y: 3148538.3084323616,
    z: -5500485.794192676
    */</span>
    <span class="token keyword">const</span> carts <span class="token operator">=</span> Cesium<span class="token punctuation">.</span>Cartesian3<span class="token punctuation">.</span><span class="token function">fromDegrees</span><span class="token punctuation">(</span><span class="token number">100</span><span class="token punctuation">,</span> <span class="token number">300</span><span class="token punctuation">,</span> <span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>carts<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">// 笛卡尔 转 弧度坐标</span>
    <span class="token keyword">const</span> catt <span class="token operator">=</span> Cesium<span class="token punctuation">.</span>Cartographic<span class="token punctuation">.</span><span class="token function">fromCartesian</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      <span class="token literal-property property">x</span><span class="token operator">:</span> <span class="token operator">-</span><span class="token number">555172.2535708158</span><span class="token punctuation">,</span>
      <span class="token literal-property property">y</span><span class="token operator">:</span> <span class="token number">3148538.3084323616</span><span class="token punctuation">,</span>
      <span class="token literal-property property">z</span><span class="token operator">:</span> <span class="token operator">-</span><span class="token number">5500485.794192676</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>

    <span class="token doc-comment comment">/**
     
height: 9.999999999485878
latitude: -1.0471975511965979
longitude:  1.7453292519943295

     */</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>catt<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">// 弧度转坐标</span>
    <span class="token keyword">let</span> hight <span class="token operator">=</span> Cesium<span class="token punctuation">.</span>Math<span class="token punctuation">.</span><span class="token function">toDegrees</span><span class="token punctuation">(</span><span class="token operator">-</span><span class="token number">1.0471975511965979</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">let</span> hightv <span class="token operator">=</span> Cesium<span class="token punctuation">.</span>Math<span class="token punctuation">.</span><span class="token function">toDegrees</span><span class="token punctuation">(</span><span class="token number">1.7453292519943295</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>hight<span class="token punctuation">,</span> hightv<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">const</span> cesiumContainer <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">onMounted</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>cesiumContainer<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>cesiumContainer<span class="token punctuation">.</span>value<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">// 初始化cesium场景</span>
        <span class="token keyword">const</span> esri <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Cesium<span class="token punctuation">.</span>ArcGisMapServerImageryProvider</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
          <span class="token literal-property property">url</span><span class="token operator">:</span>
            <span class="token string">&#39;https://services.arcgisonline.com/arcgis/rest/services/World_Imagery/MapServer&#39;</span><span class="token punctuation">,</span>
          <span class="token literal-property property">enablePickFeatures</span><span class="token operator">:</span> <span class="token boolean">false</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span>
        <span class="token keyword">const</span> viewer <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Cesium<span class="token punctuation">.</span>Viewer</span><span class="token punctuation">(</span>cesiumContainer<span class="token punctuation">.</span>value<span class="token punctuation">,</span> <span class="token punctuation">{</span>
          <span class="token literal-property property">timeline</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span> <span class="token comment">// 时间轴</span>
          <span class="token literal-property property">animation</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span> <span class="token comment">// 动画控件</span>

          <span class="token literal-property property">imageryProvider</span><span class="token operator">:</span> esri<span class="token punctuation">,</span>
          <span class="token literal-property property">terrainProvider</span><span class="token operator">:</span> Cesium<span class="token punctuation">.</span><span class="token function">createWorldTerrain</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">// 打印创建的viewer在控制台中</span>
        <span class="token comment">// console.log(viewer);</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span>
      cesiumContainer
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span>   <span class="token attr-name">scoped</span><span class="token punctuation">&gt;</span></span><span class="token style"><span class="token language-css">
<span class="token comment">/* 让cesium-container撑满整个屏幕 */</span>
<span class="token selector">.cesium-container</span> <span class="token punctuation">{</span>
  <span class="token property">width</span><span class="token punctuation">:</span> 100%<span class="token punctuation">;</span>
  <span class="token property">height</span><span class="token punctuation">:</span> 100%<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">&gt;</span></span>


</code></pre></div><h3 id="相机" tabindex="-1"><a class="header-anchor" href="#相机" aria-hidden="true">#</a> 相机</h3><h5 id="设置视角" tabindex="-1"><a class="header-anchor" href="#设置视角" aria-hidden="true">#</a> 设置视角</h5><ul><li>heading: 偏航角，默认方向为正北（0°），正角度为向东旋转，即左右摇头。</li><li>pitch: 俯仰角，默认角度为-90°，即朝向地面，0°为平视，正角度为仰视，负角度为俯视，即抬头低头。</li><li>roll: 翻转角，默认角度为0°，正角度向右旋转，负角度向左旋转，即左右歪头</li></ul><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code>


 <span class="token comment">// Cesium.setView</span>
<span class="token keyword">const</span> position <span class="token operator">=</span> Cesium<span class="token punctuation">.</span>Cartesian3<span class="token punctuation">.</span><span class="token function">fromDegrees</span><span class="token punctuation">(</span><span class="token number">114.21</span><span class="token punctuation">,</span> <span class="token number">30.55</span><span class="token punctuation">,</span> <span class="token number">600</span><span class="token punctuation">)</span>
<span class="token keyword">this</span><span class="token punctuation">.</span>viewer<span class="token punctuation">.</span>camera<span class="token punctuation">.</span><span class="token function">setView</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">destination</span><span class="token operator">:</span> position<span class="token punctuation">,</span> <span class="token comment">// 相机位置</span>
    <span class="token literal-property property">orientation</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">heading</span><span class="token operator">:</span> Cesium<span class="token punctuation">.</span>Math<span class="token punctuation">.</span><span class="token function">toRadians</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token comment">// 水平旋转  -正北方向</span>
        <span class="token literal-property property">pitch</span><span class="token operator">:</span> Cesium<span class="token punctuation">.</span>Math<span class="token punctuation">.</span><span class="token function">toRadians</span><span class="token punctuation">(</span><span class="token operator">-</span><span class="token number">90</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token comment">// 上下旋转  --俯视朝向</span>
        <span class="token literal-property property">roll</span><span class="token operator">:</span> <span class="token number">0</span> <span class="token comment">// 视口翻滚角度</span>
    <span class="token punctuation">}</span> 



<span class="token comment">// setView 通过定义相机目的地 （方向）， 直接跳转到目的地</span>
        viewer<span class="token punctuation">.</span>camera<span class="token punctuation">.</span><span class="token function">setView</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
          <span class="token literal-property property">destination</span><span class="token operator">:</span> position
          <span class="token punctuation">,</span><span class="token literal-property property">orientation</span><span class="token operator">:</span><span class="token punctuation">{</span>
            <span class="token comment">// 默认 （0， -90 ，0）</span>
            <span class="token literal-property property">heading</span><span class="token operator">:</span>Cesium<span class="token punctuation">.</span>Math<span class="token punctuation">.</span><span class="token function">toRadians</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
            <span class="token literal-property property">pitch</span><span class="token operator">:</span>Cesium<span class="token punctuation">.</span>Math<span class="token punctuation">.</span><span class="token function">toRadians</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
            <span class="token literal-property property">roll</span><span class="token operator">:</span>Cesium<span class="token punctuation">.</span>Math<span class="token punctuation">.</span><span class="token function">toRadians</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span>



        <span class="token keyword">let</span> position <span class="token operator">=</span> Cesium<span class="token punctuation">.</span>Cartesian3<span class="token punctuation">.</span><span class="token function">fromDegrees</span><span class="token punctuation">(</span><span class="token number">100</span><span class="token punctuation">,</span> <span class="token number">20</span><span class="token punctuation">,</span> <span class="token number">10000</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">//  相机 切换视角，带飞行动画 可以设置 时间</span>
        viewer<span class="token punctuation">.</span>camera<span class="token punctuation">.</span><span class="token function">flyTo</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
          <span class="token literal-property property">destination</span><span class="token operator">:</span>position<span class="token punctuation">,</span>
          <span class="token literal-property property">orientation</span><span class="token operator">:</span><span class="token punctuation">{</span>
            <span class="token literal-property property">heading</span><span class="token operator">:</span>Cesium<span class="token punctuation">.</span>Math<span class="token punctuation">.</span><span class="token function">toRadians</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
            <span class="token literal-property property">pitch</span><span class="token operator">:</span>Cesium<span class="token punctuation">.</span>Math<span class="token punctuation">.</span><span class="token function">toRadians</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
            <span class="token literal-property property">roll</span><span class="token operator">:</span>Cesium<span class="token punctuation">.</span>Math<span class="token punctuation">.</span><span class="token function">toRadians</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span>
            
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token literal-property property">duration</span><span class="token operator">:</span><span class="token number">3</span>  <span class="token comment">// 过度时间  30 秒</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span>




        <span class="token comment">// 将视角 固定在设定的点位上， 可以选择视角，但是 不能改变位置</span>
        <span class="token keyword">let</span> position2 <span class="token operator">=</span> Cesium<span class="token punctuation">.</span>Cartesian3<span class="token punctuation">.</span><span class="token function">fromDegrees</span><span class="token punctuation">(</span><span class="token number">110</span><span class="token punctuation">,</span> <span class="token number">20</span><span class="token punctuation">)</span>
        viewer<span class="token punctuation">.</span>camera<span class="token punctuation">.</span><span class="token function">lookAt</span><span class="token punctuation">(</span>
          position2<span class="token punctuation">,</span>
          <span class="token keyword">new</span> <span class="token class-name">Cesium<span class="token punctuation">.</span>HeadingPitchRange</span><span class="token punctuation">(</span>Cesium<span class="token punctuation">.</span>Math<span class="token punctuation">.</span><span class="token function">toRadians</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">,</span> Cesium<span class="token punctuation">.</span>Math<span class="token punctuation">.</span><span class="token function">toRadians</span><span class="token punctuation">(</span><span class="token operator">-</span><span class="token number">90</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token number">20000</span><span class="token punctuation">)</span>
        <span class="token punctuation">)</span>
</code></pre></div><ul><li>获取当前视角参数</li></ul><ul><li><strong>获取当前屏幕中心的经纬度坐标、笛卡尔坐标、heading、pitch、roll参数。</strong></li></ul><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">getCamera</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">const</span> camera <span class="token operator">=</span> viewer<span class="token punctuation">.</span>scene<span class="token punctuation">.</span>camera
        <span class="token keyword">const</span> cartographic <span class="token operator">=</span> Cesium<span class="token punctuation">.</span>Cartographic<span class="token punctuation">.</span><span class="token function">fromCartesian</span><span class="token punctuation">(</span>camera<span class="token punctuation">.</span>position<span class="token punctuation">)</span>
        <span class="token keyword">const</span> x <span class="token operator">=</span> Cesium<span class="token punctuation">.</span>Math<span class="token punctuation">.</span><span class="token function">toDegrees</span><span class="token punctuation">(</span>cartographic<span class="token punctuation">.</span>longitude<span class="token punctuation">)</span>
        <span class="token keyword">const</span> y <span class="token operator">=</span> Cesium<span class="token punctuation">.</span>Math<span class="token punctuation">.</span><span class="token function">toDegrees</span><span class="token punctuation">(</span>cartographic<span class="token punctuation">.</span>latitude<span class="token punctuation">)</span>
        <span class="token keyword">const</span> z <span class="token operator">=</span> cartographic<span class="token punctuation">.</span>height
        <span class="token keyword">let</span> pt <span class="token operator">=</span> Cesium<span class="token punctuation">.</span>Cartographic<span class="token punctuation">.</span><span class="token function">fromDegrees</span><span class="token punctuation">(</span>x<span class="token punctuation">,</span> y<span class="token punctuation">,</span> z<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">let</span> ellipsoid <span class="token operator">=</span> viewer<span class="token punctuation">.</span>scene<span class="token punctuation">.</span>globe<span class="token punctuation">.</span>ellipsoid<span class="token punctuation">;</span>
        <span class="token keyword">let</span> cartesian3 <span class="token operator">=</span> ellipsoid<span class="token punctuation">.</span><span class="token function">cartographicToCartesian</span><span class="token punctuation">(</span>pt<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">let</span> objinfo <span class="token operator">=</span> <span class="token punctuation">{</span>
            <span class="token string-property property">&quot;经度&quot;</span><span class="token operator">:</span> x<span class="token punctuation">,</span>
            <span class="token string-property property">&quot;维度&quot;</span><span class="token operator">:</span> y<span class="token punctuation">,</span>
            <span class="token string-property property">&quot;高度&quot;</span><span class="token operator">:</span> z<span class="token punctuation">,</span>
            <span class="token string-property property">&quot;x&quot;</span><span class="token operator">:</span> cartesian3<span class="token punctuation">.</span>x<span class="token punctuation">,</span>
            <span class="token string-property property">&quot;y&quot;</span><span class="token operator">:</span> cartesian3<span class="token punctuation">.</span>y<span class="token punctuation">,</span>
            <span class="token string-property property">&quot;z&quot;</span><span class="token operator">:</span> cartesian3<span class="token punctuation">.</span>z<span class="token punctuation">,</span>
            <span class="token string-property property">&quot;heading&quot;</span><span class="token operator">:</span> camera<span class="token punctuation">.</span>heading<span class="token punctuation">,</span>
            <span class="token string-property property">&quot;pitch&quot;</span><span class="token operator">:</span> camera<span class="token punctuation">.</span>pitch<span class="token punctuation">,</span>
            <span class="token string-property property">&quot;roll&quot;</span><span class="token operator">:</span> camera<span class="token punctuation">.</span>roll
        <span class="token punctuation">}</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>objinfo<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>

</code></pre></div><h3 id="点、线、面" tabindex="-1"><a class="header-anchor" href="#点、线、面" aria-hidden="true">#</a> 点、线、面</h3><ul><li>点的坐标，默认是地心坐标系，可使用我们更熟悉的经纬度来表示，转换方法是 <code>new Cesium.Cartesian3.fromDegrees(经度，纬度，高程)</code></li></ul><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code>       <span class="token doc-comment comment">/**
         * 点
         */</span>
        <span class="token keyword">let</span> point <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Cesium<span class="token punctuation">.</span>Entity</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
          <span class="token literal-property property">position</span><span class="token operator">:</span>Cesium<span class="token punctuation">.</span>Cartesian3<span class="token punctuation">.</span><span class="token function">fromDegrees</span><span class="token punctuation">(</span><span class="token number">100</span><span class="token punctuation">,</span><span class="token number">200</span><span class="token punctuation">,</span><span class="token number">10000</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
          <span class="token literal-property property">point</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token literal-property property">pixelSize</span><span class="token operator">:</span><span class="token number">20</span><span class="token punctuation">,</span> <span class="token comment">// 图中的像素 px </span>
            <span class="token literal-property property">color</span><span class="token operator">:</span>Cesium<span class="token punctuation">.</span>Color<span class="token punctuation">.</span><span class="token constant">BLUE</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span>
        viewer<span class="token punctuation">.</span>entities<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>point<span class="token punctuation">)</span>



        viewer<span class="token punctuation">.</span>entities<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
          <span class="token literal-property property">position</span><span class="token operator">:</span>Cesium<span class="token punctuation">.</span>Cartesian3<span class="token punctuation">.</span><span class="token function">fromDegrees</span><span class="token punctuation">(</span><span class="token number">500</span><span class="token punctuation">,</span><span class="token number">800</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
          <span class="token literal-property property">point</span><span class="token operator">:</span><span class="token punctuation">{</span>
            <span class="token literal-property property">pixelSize</span><span class="token operator">:</span><span class="token number">30</span><span class="token punctuation">,</span>
            <span class="token literal-property property">color</span><span class="token operator">:</span>Cesium<span class="token punctuation">.</span>Color<span class="token punctuation">.</span><span class="token constant">RED</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span>

        
 

        <span class="token comment">// 随机的entity</span>
        <span class="token keyword">var</span> entities <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">var</span> lon <span class="token operator">=</span> <span class="token number">114.0</span><span class="token punctuation">;</span> lon <span class="token operator">&lt;</span> <span class="token number">114.1</span><span class="token punctuation">;</span> lon <span class="token operator">+=</span> <span class="token number">0.01</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
          <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">var</span> lat <span class="token operator">=</span> <span class="token number">30.0</span><span class="token punctuation">;</span> lat <span class="token operator">&lt;</span> <span class="token number">30.1</span><span class="token punctuation">;</span> lat <span class="token operator">+=</span> <span class="token number">0.01</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            entities<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>viewer<span class="token punctuation">.</span>entities<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
              <span class="token literal-property property">position</span><span class="token operator">:</span> Cesium<span class="token punctuation">.</span>Cartesian3<span class="token punctuation">.</span><span class="token function">fromDegrees</span><span class="token punctuation">(</span><span class="token punctuation">(</span>lon <span class="token operator">+</span> lon <span class="token operator">+</span> <span class="token number">0.01</span><span class="token punctuation">)</span> <span class="token operator">/</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token punctuation">(</span>lat <span class="token operator">+</span> lat <span class="token operator">+</span> <span class="token number">0.01</span><span class="token punctuation">)</span> <span class="token operator">/</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">10000</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
              <span class="token literal-property property">point</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                <span class="token literal-property property">pixelSize</span><span class="token operator">:</span> <span class="token number">15</span><span class="token punctuation">,</span>
                <span class="token literal-property property">color</span><span class="token operator">:</span> Cesium<span class="token punctuation">.</span>Color<span class="token punctuation">.</span><span class="token constant">RED</span><span class="token punctuation">,</span>
                <span class="token literal-property property">outlineColor</span><span class="token operator">:</span> Cesium<span class="token punctuation">.</span>Color<span class="token punctuation">.</span><span class="token constant">WHITE</span><span class="token punctuation">,</span>
                <span class="token literal-property property">outlineWidth</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
                <span class="token literal-property property">show</span><span class="token operator">:</span> <span class="token boolean">true</span>
              <span class="token punctuation">}</span>
            <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
       

</code></pre></div><h3 id="标注-billboard" tabindex="-1"><a class="header-anchor" href="#标注-billboard" aria-hidden="true">#</a> 标注 Billboard</h3><ul><li>广告牌</li></ul><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code>  <span class="token function">onMounted</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>cesiumContainer<span class="token punctuation">)</span> <span class="token punctuation">{</span>

 

        <span class="token comment">// 添加标注  广告牌</span>
        <span class="token keyword">let</span> billa <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Cesium<span class="token punctuation">.</span>Entity</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
          <span class="token literal-property property">position</span><span class="token operator">:</span> Cesium<span class="token punctuation">.</span>Cartesian3<span class="token punctuation">.</span><span class="token function">fromDegrees</span><span class="token punctuation">(</span><span class="token number">100</span><span class="token punctuation">,</span> <span class="token number">30</span><span class="token punctuation">,</span> <span class="token number">10000</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
          <span class="token literal-property property">billboard</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token literal-property property">image</span><span class="token operator">:</span> <span class="token string">&#39;/src/assets/bz.png&#39;</span><span class="token punctuation">,</span>
            <span class="token literal-property property">scale</span><span class="token operator">:</span> <span class="token number">0.1</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>


        <span class="token keyword">let</span> zi <span class="token operator">=</span> viewer<span class="token punctuation">.</span>entities<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>billa<span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token doc-comment comment">/**
         * 标题
         */</span>
        <span class="token keyword">let</span> label <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Cesium<span class="token punctuation">.</span>Entity</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
          <span class="token literal-property property">position</span><span class="token operator">:</span> Cesium<span class="token punctuation">.</span>Cartesian3<span class="token punctuation">.</span><span class="token function">fromDegrees</span><span class="token punctuation">(</span><span class="token number">100</span><span class="token punctuation">,</span> <span class="token number">30</span><span class="token punctuation">,</span> <span class="token number">1000</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
          <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token literal-property property">text</span><span class="token operator">:</span> <span class="token string">&#39;你好世界&#39;</span><span class="token punctuation">,</span>
            <span class="token literal-property property">fillColor</span><span class="token operator">:</span> Cesium<span class="token punctuation">.</span>Color<span class="token punctuation">.</span><span class="token constant">BLUE</span><span class="token punctuation">,</span>
            <span class="token literal-property property">showBackground</span><span class="token operator">:</span> <span class="token boolean">true</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span>
        <span class="token keyword">let</span> la <span class="token operator">=</span> viewer<span class="token punctuation">.</span>entities<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>label<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><h3 id="线" tabindex="-1"><a class="header-anchor" href="#线" aria-hidden="true">#</a> 线</h3><p>polyline 线的绘制参数</p><ul><li><p>show 是否显示，true为显示，false为不显示，默认为显示</p></li><li><p>positions 线的坐标，为笛卡尔坐标系的地心坐标，可以有两种形式</p></li></ul><p>一种是带高程值的，如<code>Cesium.Cartesian3.fromDegreesArrayHeights([第1个点的经纬度高程, 第2个点的经纬度高程, ...])</code></p><p>另一种是不带高程的，只有经纬度，如<code>Cesium.Cartesian3.fromDegreesArrayHeights([第1个点的经纬度, 第2个点的经纬度, ...])</code>，此时的高程默认为0，可配合clampToGround参数让线贴地</p><ul><li>arcType 线的地理类型，<strong>NONE表示纯直线，GEODESIC表示为测地线，RHUMB表示等角航线，默认为测地线</strong></li><li><strong>clampToGround</strong> 线是否贴地，默认为否。 <code>clampToGround: true</code>对于的效果，可见线都沿着地形绘制 测地线可理解为过球心的圆弧，表示球面上两点之间最短的距离，等角航线比较复杂，</li></ul><h3 id="多边形" tabindex="-1"><a class="header-anchor" href="#多边形" aria-hidden="true">#</a> 多边形</h3><p><strong>polygon</strong> 多边形的绘制参数</p><ul><li>hierarchy 多边形的坐标，为笛卡尔坐标系的地心坐标，可以有两种形式</li></ul><p>一种是带高程值的，如<code>Cesium.Cartesian3.fromDegreesArrayHeights([第1个点的经纬度高程, 第2个点的经纬度高程, ...])</code> ，如果想要高程值起作用，需设置<code>perPositionHeight: true</code></p><p>另一种是不带高程的，只有经纬度，如<code>Cesium.Cartesian3.fromDegreesArrayHeights([第1个点的经纬度, 第2个点的经纬度, ...])</code>，此时的高程默认为0，可配合<code>heightReference: Cesium.HeightReference.CLAMP_TO_GROUND</code>参数让多边形贴地</p><ul><li>height 多边形的高程，单位米，即便<code>hierarchy</code>设置了高程，只要<code>perPositionHeight: false</code>，多边形都会以height作为高程值，默认值为0，</li><li><strong>heightReference</strong> 多边形的高程参考面，默认值为Cesium.HeightReference.NONE，表示使用绝对高程，如果想要多边形贴在地表，可设置为Cesium.HeightReference.CLAMP_TO_GROUND</li></ul><ul><li><strong>extrudedHeight</strong> 多边形的外扩高程，默认值为0，当值不为0时，可形成多边形棱柱，即polygon可用来绘制几何体</li></ul><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * 线
 */</span>
        <span class="token keyword">let</span> polyline <span class="token operator">=</span> viewer<span class="token punctuation">.</span>entities<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
          <span class="token literal-property property">polyline</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token literal-property property">positions</span><span class="token operator">:</span> Cesium<span class="token punctuation">.</span>Cartesian3<span class="token punctuation">.</span><span class="token function">fromDegreesArray</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">123</span><span class="token punctuation">,</span> <span class="token number">20</span><span class="token punctuation">,</span> <span class="token number">121</span><span class="token punctuation">,</span> <span class="token number">20</span><span class="token punctuation">,</span> <span class="token number">120</span><span class="token punctuation">,</span> <span class="token number">20.5</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
            <span class="token literal-property property">width</span><span class="token operator">:</span> <span class="token number">10</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token keyword">let</span> polyline <span class="token operator">=</span> viewer<span class="token punctuation">.</span>entities<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
        <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&quot;polyline&quot;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">polyline</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token literal-property property">show</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token comment">//是否显示，默认显示</span>
            <span class="token literal-property property">positions</span><span class="token operator">:</span> Cesium<span class="token punctuation">.</span>Cartesian3<span class="token punctuation">.</span><span class="token function">fromDegreesArrayHeights</span><span class="token punctuation">(</span><span class="token punctuation">[</span>
                <span class="token number">70</span><span class="token punctuation">,</span> <span class="token number">40</span><span class="token punctuation">,</span> <span class="token number">600000</span><span class="token punctuation">,</span> 
                <span class="token number">75</span><span class="token punctuation">,</span> <span class="token number">30</span><span class="token punctuation">,</span> <span class="token number">400000</span><span class="token punctuation">,</span>
                <span class="token number">120</span><span class="token punctuation">,</span> <span class="token number">25</span><span class="token punctuation">,</span> <span class="token number">200000</span>
            <span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
            <span class="token literal-property property">width</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token comment">//线的宽度（像素），默认为1</span>
            <span class="token literal-property property">granularity</span><span class="token operator">:</span> Cesium<span class="token punctuation">.</span>Math<span class="token punctuation">.</span><span class="token constant">RADIANS_PER_DEGREE</span><span class="token punctuation">,</span>
            <span class="token literal-property property">material</span><span class="token operator">:</span> Cesium<span class="token punctuation">.</span>Color<span class="token punctuation">.</span><span class="token constant">BLUE</span><span class="token punctuation">,</span> <span class="token comment">//线的颜色，默认为白色</span>
            <span class="token comment">// depthFailMaterial: Cesium.Color.RED, //线被遮挡部分的颜色，默认为空（不显示被遮挡的部分），设置后可显示被遮挡的部分</span>
            <span class="token literal-property property">arcType</span><span class="token operator">:</span> Cesium<span class="token punctuation">.</span>ArcType<span class="token punctuation">.</span><span class="token constant">NONE</span><span class="token punctuation">,</span> <span class="token comment">//线的地理类型，NONE表示纯直线，GEODESIC表示为测地线，RHUMB表示等角航线，默认为测地线</span>
            <span class="token comment">// arcType: Cesium.ArcType.GEODESIC,</span>
            <span class="token comment">// arcType: Cesium.ArcType.RHUMB,</span>
            <span class="token literal-property property">clampToGround</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span> <span class="token comment">//是否贴地，默认为否</span>
            <span class="token literal-property property">shadows</span><span class="token operator">:</span> Cesium<span class="token punctuation">.</span>ShadowMode<span class="token punctuation">.</span><span class="token constant">DISABLED</span><span class="token punctuation">,</span> <span class="token comment">//是否显示光照阴影，默认为否</span>
            <span class="token comment">// distanceDisplayCondition: new Cesium.DistanceDisplayCondition(100.0, 2000000.0), //显示的视角距离条件，在该范围内显示，范围不显示，默认为空</span>
            <span class="token literal-property property">classificationType</span><span class="token operator">:</span> Cesium<span class="token punctuation">.</span>ClassificationType<span class="token punctuation">.</span><span class="token constant">BOTH</span><span class="token punctuation">,</span>
            <span class="token literal-property property">zIndex</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token comment">//显示深度，越大表示图层在上</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>　


        <span class="token doc-comment comment">/**
         * 多边形
         */</span>
        <span class="token keyword">let</span> dbx <span class="token operator">=</span> viewer<span class="token punctuation">.</span>entities<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
          <span class="token literal-property property">polygon</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token literal-property property">height</span><span class="token operator">:</span> <span class="token number">100000</span><span class="token punctuation">,</span> <span class="token comment">// 地表高度</span>
            <span class="token literal-property property">extrudedHeight</span><span class="token operator">:</span> <span class="token number">1000000</span><span class="token punctuation">,</span> <span class="token comment">// 立体拉伸 高度</span>
            <span class="token literal-property property">hierarchy</span><span class="token operator">:</span> <span class="token punctuation">{</span>
              <span class="token literal-property property">positions</span><span class="token operator">:</span> Cesium<span class="token punctuation">.</span>Cartesian3<span class="token punctuation">.</span><span class="token function">fromDegreesArray</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">123</span><span class="token punctuation">,</span> <span class="token number">20</span><span class="token punctuation">,</span> <span class="token number">121</span><span class="token punctuation">,</span> <span class="token number">20</span><span class="token punctuation">,</span> <span class="token number">120</span><span class="token punctuation">,</span> <span class="token number">20.5</span><span class="token punctuation">,</span> <span class="token number">125</span><span class="token punctuation">,</span> <span class="token number">40</span><span class="token punctuation">,</span> <span class="token number">158</span><span class="token punctuation">,</span> <span class="token number">40</span><span class="token punctuation">,</span> <span class="token number">123</span><span class="token punctuation">,</span> <span class="token number">20</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">,</span>

            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token literal-property property">outline</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token comment">// 外包裹线   </span>
            <span class="token literal-property property">outlineColor</span><span class="token operator">:</span> Cesium<span class="token punctuation">.</span>Color<span class="token punctuation">.</span><span class="token constant">RED</span><span class="token punctuation">,</span>
            <span class="token literal-property property">fill</span><span class="token operator">:</span> <span class="token boolean">false</span> <span class="token comment">// 是否填充</span>

          <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span>


</code></pre></div><h3 id="盒子-圆" tabindex="-1"><a class="header-anchor" href="#盒子-圆" aria-hidden="true">#</a> 盒子 圆</h3><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code>        <span class="token doc-comment comment">/**
         * 盒子 box
         */</span>
        <span class="token keyword">let</span> box <span class="token operator">=</span> viewer<span class="token punctuation">.</span>entities<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token punctuation">{</span>

          <span class="token literal-property property">position</span><span class="token operator">:</span> Cesium<span class="token punctuation">.</span>Cartesian3<span class="token punctuation">.</span><span class="token function">fromDegrees</span><span class="token punctuation">(</span><span class="token number">118</span><span class="token punctuation">,</span> <span class="token number">20</span><span class="token punctuation">,</span> <span class="token number">10000</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
          <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token string">&#39;lusifer-uuid-box&#39;</span><span class="token punctuation">,</span>
          <span class="token literal-property property">box</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token literal-property property">dimensions</span><span class="token operator">:</span> <span class="token keyword">new</span> <span class="token class-name">Cesium<span class="token punctuation">.</span>Cartesian3</span><span class="token punctuation">(</span><span class="token number">1000</span><span class="token punctuation">,</span> <span class="token number">5000</span><span class="token punctuation">,</span> <span class="token number">1000</span><span class="token punctuation">)</span> <span class="token comment">// 长宽高</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span>
        <span class="token comment">// viewer.zoomTo(box)</span>


        <span class="token doc-comment comment">/**
         * 椭圆、 圆周率 Math。pi
         */</span>

        <span class="token keyword">let</span> ellipse <span class="token operator">=</span> viewer<span class="token punctuation">.</span>entities<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
          <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token string">&#39;pi-001&#39;</span><span class="token punctuation">,</span>
          <span class="token literal-property property">position</span><span class="token operator">:</span> Cesium<span class="token punctuation">.</span>Cartesian3<span class="token punctuation">.</span><span class="token function">fromDegrees</span><span class="token punctuation">(</span><span class="token number">100</span><span class="token punctuation">,</span> <span class="token number">20</span><span class="token punctuation">,</span> <span class="token number">1000</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
          <span class="token literal-property property">ellipse</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token literal-property property">semiMajorAxis</span><span class="token operator">:</span> <span class="token number">5000</span><span class="token punctuation">,</span><span class="token comment">//	Property | number	&lt;optional&gt; 指定半长轴的数字属性。</span>
            <span class="token literal-property property">semiMinorAxis</span><span class="token operator">:</span> <span class="token number">3000</span><span class="token punctuation">,</span>
            <span class="token literal-property property">height</span><span class="token operator">:</span> <span class="token number">1000</span><span class="token punctuation">,</span>
            <span class="token literal-property property">rotation</span><span class="token operator">:</span> Math<span class="token punctuation">.</span><span class="token constant">PI</span> <span class="token operator">/</span> <span class="token number">2</span> <span class="token comment">// 选择角度多边</span>

          <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>Math<span class="token punctuation">.</span><span class="token constant">PI</span><span class="token punctuation">)</span><span class="token punctuation">;</span>


        <span class="token doc-comment comment">/**
         * 矩形
         */</span>


        <span class="token keyword">let</span> rectangle <span class="token operator">=</span> viewer<span class="token punctuation">.</span>entities<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
          <span class="token literal-property property">rectangle</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token literal-property property">coordinates</span><span class="token operator">:</span> Cesium<span class="token punctuation">.</span>Rectangle<span class="token punctuation">.</span><span class="token function">fromDegrees</span><span class="token punctuation">(</span><span class="token number">100</span><span class="token punctuation">,</span> <span class="token number">20</span><span class="token punctuation">,</span> <span class="token number">156</span><span class="token punctuation">,</span> <span class="token number">50</span><span class="token punctuation">)</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span>

    
        viewer<span class="token punctuation">.</span><span class="token function">zoomTo</span><span class="token punctuation">(</span>rectangle<span class="token punctuation">)</span><span class="token punctuation">;</span>


      <span class="token punctuation">}</span>
</code></pre></div><h3 id="组合-坐标" tabindex="-1"><a class="header-anchor" href="#组合-坐标" aria-hidden="true">#</a> 组合 坐标</h3><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code> <span class="token function">onMounted</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>cesiumContainer<span class="token punctuation">)</span> <span class="token punctuation">{</span>
 
        viewer <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Cesium<span class="token punctuation">.</span>Viewer</span><span class="token punctuation">(</span>cesiumContainer<span class="token punctuation">.</span>value<span class="token punctuation">,</span> <span class="token punctuation">{</span>
          <span class="token literal-property property">timeline</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span> <span class="token comment">// 时间轴</span>
          <span class="token literal-property property">animation</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span> <span class="token comment">// 动画控件</span>
          <span class="token comment">// imageryProvider: esri,</span>
          <span class="token literal-property property">terrainProvider</span><span class="token operator">:</span> Cesium<span class="token punctuation">.</span><span class="token function">createWorldTerrain</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
            <span class="token literal-property property">requestVertexNormals</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token comment">//开启地形光照</span>
          <span class="token punctuation">}</span><span class="token punctuation">)</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>


        <span class="token keyword">let</span> bilbd <span class="token operator">=</span> viewer<span class="token punctuation">.</span>entities<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
          <span class="token literal-property property">position</span><span class="token operator">:</span> Cesium<span class="token punctuation">.</span>Cartesian3<span class="token punctuation">.</span><span class="token function">fromDegrees</span><span class="token punctuation">(</span><span class="token number">120</span><span class="token punctuation">,</span> <span class="token number">30</span><span class="token punctuation">,</span> <span class="token number">100</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
          <span class="token literal-property property">billboard</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token literal-property property">image</span><span class="token operator">:</span> <span class="token string">&#39;/src/assets/bz.png&#39;</span><span class="token punctuation">,</span>
            <span class="token literal-property property">scale</span><span class="token operator">:</span> <span class="token number">0.1</span><span class="token punctuation">,</span>
            <span class="token literal-property property">color</span><span class="token operator">:</span> Cesium<span class="token punctuation">.</span>Color<span class="token punctuation">.</span><span class="token constant">YELLOW</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span>
        <span class="token comment">//  114.21948 , 36.42566 0 </span>

        <span class="token keyword">let</span> polyline <span class="token operator">=</span> viewer<span class="token punctuation">.</span>entities<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
          <span class="token literal-property property">polyline</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token literal-property property">positions</span><span class="token operator">:</span> Cesium<span class="token punctuation">.</span>Cartesian3<span class="token punctuation">.</span><span class="token function">fromDegreesArrayHeights</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">120</span><span class="token punctuation">,</span> <span class="token number">30</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">120</span><span class="token punctuation">,</span> <span class="token number">30</span><span class="token punctuation">,</span> <span class="token number">100</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span>



        lab <span class="token operator">=</span> viewer<span class="token punctuation">.</span>entities<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
          <span class="token literal-property property">position</span><span class="token operator">:</span> Cesium<span class="token punctuation">.</span>Cartesian3<span class="token punctuation">.</span><span class="token function">fromDegrees</span><span class="token punctuation">(</span><span class="token number">120</span><span class="token punctuation">,</span> <span class="token number">30</span><span class="token punctuation">,</span> <span class="token number">100</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
          <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token literal-property property">text</span><span class="token operator">:</span> <span class="token string">&#39;鼎峰.北城首府&#39;</span><span class="token punctuation">,</span>
            <span class="token literal-property property">font</span><span class="token operator">:</span> <span class="token string">&#39;15px&#39;</span><span class="token punctuation">,</span>
            <span class="token literal-property property">fillColor</span><span class="token operator">:</span> Cesium<span class="token punctuation">.</span>Color<span class="token punctuation">.</span><span class="token constant">AQUA</span><span class="token punctuation">,</span>
            <span class="token literal-property property">pixelOffset</span><span class="token operator">:</span> <span class="token keyword">new</span> <span class="token class-name">Cesium<span class="token punctuation">.</span>Cartesian2</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token operator">-</span><span class="token number">40</span><span class="token punctuation">)</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span>

        <span class="token keyword">let</span> ff <span class="token operator">=</span> Cesium<span class="token punctuation">.</span>Cartesian3<span class="token punctuation">.</span><span class="token function">fromDegrees</span><span class="token punctuation">(</span><span class="token number">114.21948</span><span class="token punctuation">,</span> <span class="token number">36.42566</span><span class="token punctuation">,</span> <span class="token number">1000</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token keyword">let</span> ent <span class="token operator">=</span> viewer<span class="token punctuation">.</span>entities<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
          <span class="token literal-property property">position</span><span class="token operator">:</span> ff<span class="token punctuation">,</span>
          <span class="token literal-property property">billboard</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token literal-property property">image</span><span class="token operator">:</span> <span class="token string">&#39;/src/assets/bz.png&#39;</span><span class="token punctuation">,</span>
            <span class="token literal-property property">scale</span><span class="token operator">:</span> <span class="token number">0.1</span><span class="token punctuation">,</span>
            <span class="token literal-property property">color</span><span class="token operator">:</span> Cesium<span class="token punctuation">.</span>Color<span class="token punctuation">.</span><span class="token constant">YELLOW</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token literal-property property">polyline</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token literal-property property">positions</span><span class="token operator">:</span> Cesium<span class="token punctuation">.</span>Cartesian3<span class="token punctuation">.</span><span class="token function">fromDegreesArrayHeights</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">114.21948</span><span class="token punctuation">,</span> <span class="token number">36.42566</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">114.21948</span><span class="token punctuation">,</span> <span class="token number">36.42566</span><span class="token punctuation">,</span> <span class="token number">1000</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token literal-property property">text</span><span class="token operator">:</span> <span class="token string">&#39;峰峰矿区&#39;</span><span class="token punctuation">,</span>
            <span class="token literal-property property">font</span><span class="token operator">:</span> <span class="token string">&#39;15px&#39;</span><span class="token punctuation">,</span>
            <span class="token literal-property property">fillColor</span><span class="token operator">:</span> Cesium<span class="token punctuation">.</span>Color<span class="token punctuation">.</span><span class="token constant">AQUA</span><span class="token punctuation">,</span>
            <span class="token literal-property property">pixelOffset</span><span class="token operator">:</span> <span class="token keyword">new</span> <span class="token class-name">Cesium<span class="token punctuation">.</span>Cartesian2</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token operator">-</span><span class="token number">40</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
            <span class="token literal-property property">showBackground</span><span class="token operator">:</span> <span class="token boolean">true</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span>

        <span class="token comment">// viewer.camera.flyTo({</span>
        <span class="token comment">//   duration:5,</span>
        <span class="token comment">//   destination:ff</span>
        <span class="token comment">//   // ent</span>
        <span class="token comment">// })</span>
        viewer<span class="token punctuation">.</span><span class="token function">zoomTo</span><span class="token punctuation">(</span>ent<span class="token punctuation">)</span><span class="token punctuation">;</span>



      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre></div><h3 id="动态效果callbackproperty" tabindex="-1"><a class="header-anchor" href="#动态效果callbackproperty" aria-hidden="true">#</a> 动态效果CallbackProperty</h3><p>函数介绍 Cesium提供了CallbackProperty函数来让我们构建动态变化的参数。该函数的官方文档说明如下，包含两个参数， callback是一个返回参数变量的函数，isConstant表示不同时刻的值是否一致，为布尔值，对于变化的情况为false。</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code>
        <span class="token doc-comment comment">/**
         * Cesium.CallbackProperty  实现动态效果
         */</span>
        <span class="token keyword">let</span> lon<span class="token punctuation">,</span> lat<span class="token punctuation">,</span> num <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
        <span class="token keyword">let</span> line <span class="token operator">=</span> viewer<span class="token punctuation">.</span>entities<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
          <span class="token literal-property property">polyline</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token comment">// positions: Cesium.Cartesian3.fromDegreesArray([120, 30, 121, 31]),</span>
            <span class="token literal-property property">positions</span><span class="token operator">:</span> <span class="token keyword">new</span> <span class="token class-name">Cesium<span class="token punctuation">.</span>CallbackProperty</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
               num <span class="token operator">+=</span> <span class="token number">0.05</span><span class="token punctuation">;</span>

              lon <span class="token operator">=</span> num <span class="token operator">+</span> <span class="token number">120</span><span class="token punctuation">;</span>
              lat <span class="token operator">=</span> num <span class="token operator">+</span> <span class="token number">30</span><span class="token punctuation">;</span>
              console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>lon<span class="token punctuation">)</span><span class="token punctuation">;</span>
              

              <span class="token doc-comment comment">/**
               * 停止
               * 给一个新的属性 对象值
               */</span>
              <span class="token keyword">if</span><span class="token punctuation">(</span>lon <span class="token operator">&lt;</span> <span class="token number">121</span><span class="token punctuation">)</span><span class="token punctuation">{</span>

                <span class="token keyword">return</span> Cesium<span class="token punctuation">.</span>Cartesian3<span class="token punctuation">.</span><span class="token function">fromDegreesArray</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">120</span><span class="token punctuation">,</span> <span class="token number">30</span><span class="token punctuation">,</span> lon<span class="token punctuation">,</span> lat<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
              <span class="token punctuation">}</span><span class="token keyword">else</span><span class="token punctuation">{</span>
                line<span class="token punctuation">.</span>polyline<span class="token punctuation">.</span>positions<span class="token operator">=</span>Cesium<span class="token punctuation">.</span>Cartesian3<span class="token punctuation">.</span><span class="token function">fromDegreesArray</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">120</span><span class="token punctuation">,</span> <span class="token number">30</span><span class="token punctuation">,</span> <span class="token number">121</span><span class="token punctuation">,</span> <span class="token number">31</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

              <span class="token punctuation">}</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
            <span class="token literal-property property">width</span><span class="token operator">:</span> <span class="token number">50</span><span class="token punctuation">,</span>
            <span class="token literal-property property">material</span><span class="token operator">:</span> Cesium<span class="token punctuation">.</span>Color<span class="token punctuation">.</span><span class="token constant">YELLOW</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span>


        viewer<span class="token punctuation">.</span><span class="token function">zoomTo</span><span class="token punctuation">(</span>line<span class="token punctuation">)</span>



        
<span class="token doc-comment comment">/**
 * callBackProperty 
 */</span>
        <span class="token keyword">let</span> boxModel <span class="token operator">=</span> viewer<span class="token punctuation">.</span>entities<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
          <span class="token literal-property property">position</span><span class="token operator">:</span> Cesium<span class="token punctuation">.</span>Cartesian3<span class="token punctuation">.</span><span class="token function">fromDegrees</span><span class="token punctuation">(</span><span class="token number">114.1</span><span class="token punctuation">,</span> <span class="token number">116</span><span class="token punctuation">,</span> <span class="token number">2000</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
          <span class="token literal-property property">box</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token literal-property property">dimensions</span><span class="token operator">:</span> <span class="token keyword">new</span> <span class="token class-name">Cesium<span class="token punctuation">.</span>CallbackProperty</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
              <span class="token keyword">let</span> height <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">random</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">*</span> <span class="token number">1000</span>
              <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">Cesium<span class="token punctuation">.</span>Cartesian3</span><span class="token punctuation">(</span><span class="token number">1000</span><span class="token punctuation">,</span> <span class="token number">5000</span><span class="token punctuation">,</span> height<span class="token punctuation">)</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token boolean">false</span><span class="token punctuation">)</span> <span class="token comment">// 长宽高</span>
            <span class="token punctuation">,</span> <span class="token literal-property property">outline</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
            <span class="token literal-property property">outlineColor</span><span class="token operator">:</span> <span class="token keyword">new</span> <span class="token class-name">Cesium<span class="token punctuation">.</span>CallbackProperty</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>

              <span class="token keyword">return</span> Cesium<span class="token punctuation">.</span>Color<span class="token punctuation">.</span><span class="token constant">BLUE</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token boolean">false</span><span class="token punctuation">)</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span>

        viewer<span class="token punctuation">.</span><span class="token function">zoomTo</span><span class="token punctuation">(</span>boxModel<span class="token punctuation">)</span>


</code></pre></div><h3 id="注册事件-screenspaceeventhandler" tabindex="-1"><a class="header-anchor" href="#注册事件-screenspaceeventhandler" aria-hidden="true">#</a> 注册事件 ScreenSpaceEventHandler</h3><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">var</span> handler <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Cesium<span class="token punctuation">.</span>ScreenSpaceEventHandler</span><span class="token punctuation">(</span>scene<span class="token punctuation">.</span>canvas<span class="token punctuation">)</span><span class="token punctuation">;</span>
handler<span class="token punctuation">.</span><span class="token function">setInputAction</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">movement</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">var</span> pick <span class="token operator">=</span> scene<span class="token punctuation">.</span><span class="token function">pick</span><span class="token punctuation">(</span>movement<span class="token punctuation">.</span>endPosition<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>Cesium<span class="token punctuation">.</span><span class="token function">defined</span><span class="token punctuation">(</span>pick<span class="token punctuation">)</span> <span class="token operator">&amp;&amp;</span> Cesium<span class="token punctuation">.</span><span class="token function">defined</span><span class="token punctuation">(</span>pick<span class="token punctuation">.</span>node<span class="token punctuation">)</span> <span class="token operator">&amp;&amp;</span> Cesium<span class="token punctuation">.</span><span class="token function">defined</span><span class="token punctuation">(</span>pick<span class="token punctuation">.</span>mesh<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// Output glTF node and mesh under the mouse.</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;node: &#39;</span> <span class="token operator">+</span> pick<span class="token punctuation">.</span>node<span class="token punctuation">.</span>name <span class="token operator">+</span> <span class="token string">&#39;. mesh: &#39;</span> <span class="token operator">+</span> pick<span class="token punctuation">.</span>mesh<span class="token punctuation">.</span>name<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span> Cesium<span class="token punctuation">.</span>ScreenSpaceEventType<span class="token punctuation">.</span><span class="token constant">MOUSE_MOVE</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><p><code>scene.pick</code><code>scene.pick</code>之后需要判断的属性字段根据你的需求而定，这里我们关注的是model，所以判断model的属性是否存在。 <code>scene.pick</code>之后判断model的属性是否存在</p><div class="language-html" data-ext="html"><pre class="language-html"><code> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>en<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
 
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>cesiumContainer<span class="token punctuation">&quot;</span></span> <span class="token special-attr"><span class="token attr-name">style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span><span class="token value css language-css"><span class="token property">position</span><span class="token punctuation">:</span>fixed<span class="token punctuation">;</span><span class="token property">left</span><span class="token punctuation">:</span>0px<span class="token punctuation">;</span><span class="token property">top</span><span class="token punctuation">:</span>0px<span class="token punctuation">;</span><span class="token property">width</span><span class="token punctuation">:</span>100%<span class="token punctuation">;</span><span class="token property">height</span><span class="token punctuation">:</span>100%<span class="token punctuation">;</span></span><span class="token punctuation">&quot;</span></span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
     Cesium<span class="token punctuation">.</span>Camera<span class="token punctuation">.</span><span class="token constant">DEFAULT_VIEW_RECTANGLE</span> <span class="token operator">=</span> Cesium<span class="token punctuation">.</span>Rectangle<span class="token punctuation">.</span><span class="token function">fromDegrees</span><span class="token punctuation">(</span><span class="token number">100</span><span class="token punctuation">,</span> <span class="token operator">-</span><span class="token number">20</span><span class="token punctuation">,</span> <span class="token number">120</span><span class="token punctuation">,</span> <span class="token number">90</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">// Initialize the Cesium Viewer in the HTML element with the \`cesiumContainer\` ID.</span>
    <span class="token keyword">const</span> viewer <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Cesium<span class="token punctuation">.</span>Viewer</span><span class="token punctuation">(</span><span class="token string">&#39;cesiumContainer&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">geocoder</span><span class="token operator">:</span><span class="token boolean">true</span><span class="token punctuation">,</span><span class="token comment">//控制右上角第一个位置的查找工具</span>
        <span class="token literal-property property">homeButton</span><span class="token operator">:</span><span class="token boolean">true</span><span class="token punctuation">,</span><span class="token comment">//控制右上角第二个位置的home图标</span>
        <span class="token literal-property property">sceneModePicker</span><span class="token operator">:</span><span class="token boolean">true</span><span class="token punctuation">,</span><span class="token comment">//控制右上角第三个位置的选择视角模式，2d，3d</span>
        <span class="token literal-property property">baseLayerPicker</span><span class="token operator">:</span><span class="token boolean">true</span><span class="token punctuation">,</span><span class="token comment">//控制右上角第四个位置的图层选择器</span>
        <span class="token literal-property property">navigationHelpButton</span><span class="token operator">:</span><span class="token boolean">true</span><span class="token punctuation">,</span><span class="token comment">//控制右上角第五个位置的导航帮助按钮</span>
        <span class="token literal-property property">animation</span><span class="token operator">:</span><span class="token boolean">false</span><span class="token punctuation">,</span><span class="token comment">//控制左下角的动画器件</span>
        <span class="token literal-property property">timeline</span><span class="token operator">:</span><span class="token boolean">false</span><span class="token punctuation">,</span><span class="token comment">//控制下方时间线</span>
        <span class="token literal-property property">fullscreenButton</span><span class="token operator">:</span><span class="token boolean">false</span><span class="token punctuation">,</span><span class="token comment">//右下角全屏按钮</span>
        <span class="token literal-property property">vrButton</span><span class="token operator">:</span><span class="token boolean">false</span><span class="token punctuation">,</span><span class="token comment">//右下角vr按钮</span>
        <span class="token literal-property property">shouldAnimate</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span><span class="token comment">//允许动画同步</span>
        <span class="token literal-property property">infoBox</span> <span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token comment">//不显示点击要素之后显示的信息</span>
        <span class="token literal-property property">terrainProvider</span><span class="token operator">:</span> Cesium<span class="token punctuation">.</span><span class="token function">createWorldTerrain</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    viewer<span class="token punctuation">.</span>_cesiumWidget<span class="token punctuation">.</span>_creditContainer<span class="token punctuation">.</span>style<span class="token punctuation">.</span>display<span class="token operator">=</span><span class="token string">&quot;none&quot;</span><span class="token punctuation">;</span><span class="token comment">//取消版权信息</span>
    
    <span class="token comment">// 定义第一个点，该点使用常规方法赋参数值</span>
    <span class="token keyword">let</span> position1 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Cesium<span class="token punctuation">.</span>Cartesian3<span class="token punctuation">.</span>fromDegrees</span><span class="token punctuation">(</span><span class="token number">120</span><span class="token punctuation">,</span> <span class="token number">25</span><span class="token punctuation">,</span> <span class="token number">10000</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">let</span> color1 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Cesium<span class="token punctuation">.</span>Color</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//黄色</span>
    <span class="token keyword">let</span> point1 <span class="token operator">=</span> viewer<span class="token punctuation">.</span>entities<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
        <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&quot;point1&quot;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">position</span><span class="token operator">:</span> position1<span class="token punctuation">,</span> <span class="token comment">// 点的经纬度坐标</span>
        <span class="token literal-property property">point</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token literal-property property">show</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token comment">//是否显示，默认显示</span>
            <span class="token literal-property property">pixelSize</span><span class="token operator">:</span> <span class="token number">20</span><span class="token punctuation">,</span> <span class="token comment">//点的大小（像素），默认为1</span>
            <span class="token literal-property property">color</span><span class="token operator">:</span> color1<span class="token punctuation">,</span> <span class="token comment">//颜色，默认为白色</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>

    <span class="token comment">// 定义第二个点，该点使用回调函数赋参数值</span>
    <span class="token keyword">let</span> position2 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Cesium<span class="token punctuation">.</span>Cartesian3<span class="token punctuation">.</span>fromDegrees</span><span class="token punctuation">(</span><span class="token number">120</span><span class="token punctuation">,</span> <span class="token number">30</span><span class="token punctuation">,</span> <span class="token number">100000</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">let</span> color2 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Cesium<span class="token punctuation">.</span>Color</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//红色</span>
    <span class="token keyword">let</span> point2 <span class="token operator">=</span> viewer<span class="token punctuation">.</span>entities<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
        <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&quot;point2&quot;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">position</span><span class="token operator">:</span> <span class="token keyword">new</span> <span class="token class-name">Cesium<span class="token punctuation">.</span>CallbackProperty</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">=&gt;</span><span class="token punctuation">{</span>
            <span class="token keyword">return</span> position2<span class="token punctuation">;</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token comment">// 点的经纬度坐标</span>
        <span class="token literal-property property">point</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token literal-property property">show</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token comment">//是否显示，默认显示</span>
            <span class="token literal-property property">pixelSize</span><span class="token operator">:</span> <span class="token number">20</span><span class="token punctuation">,</span> <span class="token comment">//点的大小（像素），默认为1</span>
            <span class="token literal-property property">color</span><span class="token operator">:</span> <span class="token keyword">new</span> <span class="token class-name">Cesium<span class="token punctuation">.</span>CallbackProperty</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">=&gt;</span><span class="token punctuation">{</span>
                <span class="token keyword">return</span> color2<span class="token punctuation">;</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token comment">//颜色，默认为白色</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>

    <span class="token comment">// let polygon1 = viewer.entities.add({</span>
    <span class="token comment">//     name: &quot;polygon1&quot;,</span>
    <span class="token comment">//     polygon: {</span>
    <span class="token comment">//         show: true,</span>
    <span class="token comment">//         hierarchy: Cesium.Cartesian3.fromDegreesArray([</span>
    <span class="token comment">//             120.0,</span>
    <span class="token comment">//             40.0,</span>
    <span class="token comment">//             124.0,</span>
    <span class="token comment">//             40.0,</span>
    <span class="token comment">//             122.0,</span>
    <span class="token comment">//             42.0,</span>
    <span class="token comment">//         ]),</span>
    <span class="token comment">//         height: 50000,</span>
    <span class="token comment">//         extrudedHeight: 100000,</span>
    <span class="token comment">//         fill: true,</span>
    <span class="token comment">//         material: Cesium.Color.RED,</span>

    <span class="token comment">//         outline: true,</span>
    <span class="token comment">//         outlineColor: Cesium.Color.BLACK,</span>
    <span class="token comment">//         outlineWidth: 5.0,</span>
    <span class="token comment">//     }</span>
    <span class="token comment">// })</span>

    <span class="token keyword">let</span> outline <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
    <span class="token keyword">let</span> polygon2 <span class="token operator">=</span> viewer<span class="token punctuation">.</span>entities<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
        <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&quot;polygon2&quot;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">polygon</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token literal-property property">show</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
            <span class="token literal-property property">hierarchy</span><span class="token operator">:</span> Cesium<span class="token punctuation">.</span>Cartesian3<span class="token punctuation">.</span><span class="token function">fromDegreesArray</span><span class="token punctuation">(</span><span class="token punctuation">[</span>
                <span class="token number">120.0</span><span class="token punctuation">,</span>
                <span class="token number">35.0</span><span class="token punctuation">,</span>
                <span class="token number">124.0</span><span class="token punctuation">,</span>
                <span class="token number">35.0</span><span class="token punctuation">,</span>
                <span class="token number">122.0</span><span class="token punctuation">,</span>
                <span class="token number">37.0</span><span class="token punctuation">,</span>
            <span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
            <span class="token literal-property property">height</span><span class="token operator">:</span> <span class="token number">50000</span><span class="token punctuation">,</span>
            <span class="token literal-property property">extrudedHeight</span><span class="token operator">:</span> <span class="token number">100000</span><span class="token punctuation">,</span>
            <span class="token literal-property property">fill</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
            <span class="token literal-property property">material</span><span class="token operator">:</span> Cesium<span class="token punctuation">.</span>Color<span class="token punctuation">.</span><span class="token constant">YELLOW</span><span class="token punctuation">,</span>

            <span class="token literal-property property">outline</span><span class="token operator">:</span> <span class="token keyword">new</span> <span class="token class-name">Cesium<span class="token punctuation">.</span>CallbackProperty</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">=&gt;</span><span class="token punctuation">{</span>
                <span class="token keyword">return</span> outline<span class="token punctuation">;</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
            <span class="token literal-property property">outlineColor</span><span class="token operator">:</span> Cesium<span class="token punctuation">.</span>Color<span class="token punctuation">.</span><span class="token constant">BLACK</span><span class="token punctuation">,</span>
            <span class="token literal-property property">outlineWidth</span><span class="token operator">:</span> <span class="token number">5.0</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>

    <span class="token comment">// 用于控制的变量</span>
    <span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
    <span class="token keyword">let</span> j <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>

    <span class="token comment">// 每隔100毫秒修改一次参数</span>
    <span class="token function">setInterval</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">=&gt;</span><span class="token punctuation">{</span>
        <span class="token comment">// 方法1：直接给entity的参数赋新值</span>
        point1<span class="token punctuation">.</span>position <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Cesium<span class="token punctuation">.</span>Cartesian3<span class="token punctuation">.</span>fromDegrees</span><span class="token punctuation">(</span><span class="token number">120</span><span class="token operator">-</span><span class="token number">1</span><span class="token operator">*</span>i<span class="token punctuation">,</span> <span class="token number">25</span><span class="token punctuation">,</span> <span class="token number">100000</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        point1<span class="token punctuation">.</span>point<span class="token punctuation">.</span>color <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Cesium<span class="token punctuation">.</span>Color</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0.1</span><span class="token operator">*</span>i<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">// polygon1.polygon.outline = i%2 == 0? true:false;</span>

        <span class="token comment">// 方法2: 修改参数对应的回调函数中的变量</span>
        position2 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Cesium<span class="token punctuation">.</span>Cartesian3<span class="token punctuation">.</span>fromDegrees</span><span class="token punctuation">(</span><span class="token number">120</span><span class="token operator">-</span><span class="token number">1</span><span class="token operator">*</span>i<span class="token punctuation">,</span> <span class="token number">30</span><span class="token punctuation">,</span> <span class="token number">10000</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        color2 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Cesium<span class="token punctuation">.</span>Color</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0.1</span><span class="token operator">*</span>i<span class="token punctuation">)</span><span class="token punctuation">;</span>
        outline <span class="token operator">=</span> <span class="token operator">!</span>outline<span class="token punctuation">;</span>

        <span class="token comment">// 使变量间隔2秒重复</span>
        <span class="token keyword">if</span><span class="token punctuation">(</span>i<span class="token operator">&gt;=</span><span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            j <span class="token operator">=</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">if</span><span class="token punctuation">(</span>i<span class="token operator">&lt;=</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            j <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        i <span class="token operator">+=</span> j<span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">100</span><span class="token punctuation">)</span> <span class="token comment">// point用100，polygon用1000</span>

    </span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>html</span><span class="token punctuation">&gt;</span></span>

</code></pre></div><h2 id="贴地线" tabindex="-1"><a class="header-anchor" href="#贴地线" aria-hidden="true">#</a> 贴地线</h2><ul><li>cesium在没有开启地形时，加载geojson线数据没有问题，不会出现拖动地图，线数据也发生变化的现象，</li><li>但在开启地形以后再加载地形数据，由于地形不平整，所以部分线数据就可能会被地形覆盖遮挡，看起来就会断断续续；</li><li>还有可能拖动地图，线数据也会跟着移动，</li></ul><h3 id="entity方式贴地" tabindex="-1"><a class="header-anchor" href="#entity方式贴地" aria-hidden="true">#</a> Entity方式贴地</h3><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code>    viewer<span class="token punctuation">.</span>entities<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
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
</code></pre></div><h3 id="primitive方式贴地" tabindex="-1"><a class="header-anchor" href="#primitive方式贴地" aria-hidden="true">#</a> primitive方式贴地</h3><p>Primitive方式贴地， 需要使用GroundPolylinePrimitive和GroundPolylineGeometry来创建Primitive与Geometry对象，而不是使用Primitive和PolylineGeometry创建Primitive与Geometry对象，代码如下：</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code>    viewer<span class="token punctuation">.</span>scene<span class="token punctuation">.</span>primitives<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Cesium<span class="token punctuation">.</span>GroundPolylinePrimitive</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
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
</code></pre></div>`,84),c=[e];function l(u,r){return s(),a("div",null,c)}const k=n(o,[["render",l],["__file","init_cesium.html.vue"]]);export{k as default};
