import{_ as t,M as o,p as e,q as c,R as n,t as a,N as p,a1 as l}from"./framework-d81ad7e5.js";const u={},k=l(`<h3 id="图层创建" tabindex="-1"><a class="header-anchor" href="#图层创建" aria-hidden="true">#</a> 图层创建</h3><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code>
<span class="token comment">// featureGroup图层创建</span>

<span class="token comment">// 在实际项目中地图数据分为不同类型，这时如果把所有数据同时加载到地图上来进行操作会带来各种问题，所以此时需要利用L.featureGroup方法创建不同的图层，用来加载不同类型的数据，以方便操作，具体方法如下：</span>

<span class="token keyword">var</span> _viewSpotLayer<span class="token operator">=</span><span class="token keyword">new</span> <span class="token class-name">L<span class="token punctuation">.</span>featureGroup</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
_map<span class="token punctuation">.</span><span class="token function">addLayer</span><span class="token punctuation">(</span>_viewSpotLayer<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// 如需要清除图层上的数据集合，使用内置方法即可：</span>

_viewSpotLayer<span class="token punctuation">.</span><span class="token function">clearLayers</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
 



<span class="token comment">//  --------------------------示例：</span>



<span class="token keyword">var</span> pointFeature <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">L<span class="token punctuation">.</span>marker</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">39.905</span><span class="token punctuation">,</span><span class="token number">116.399</span><span class="token punctuation">]</span><span class="token punctuation">,</span><span class="token punctuation">{</span> <span class="token literal-property property">icon</span><span class="token operator">:</span> viewIcon<span class="token punctuation">,</span><span class="token literal-property property">title</span><span class="token operator">:</span><span class="token string">&quot;故宫&quot;</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">bindLabel</span><span class="token punctuation">(</span><span class="token string">&quot;故宫&quot;</span><span class="token punctuation">,</span><span class="token punctuation">{</span><span class="token literal-property property">noHide</span><span class="token operator">:</span><span class="token boolean">true</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">addTo</span><span class="token punctuation">(</span>_viewSpotLayer<span class="token punctuation">)</span><span class="token punctuation">;</span>
参数说明：
<span class="token comment">// icon             //用于渲染标记的图标实例。使用L.icon创建，下面会有详细讲解</span>
<span class="token comment">// title            //鼠标悬停时提示文本</span>
<span class="token comment">// alt              //图像文本</span>
<span class="token comment">// riseOnHover      //true/false(默认)，为true时当您将鼠标悬停在其上时，标记将会显示在其他标记之上。</span>
 
<span class="token comment">// 方法说明：</span>
<span class="token punctuation">.</span><span class="token function">addTo</span><span class="token punctuation">(</span>layer<span class="token punctuation">)</span>    <span class="token comment">//添加到指定图层当中</span>
<span class="token punctuation">.</span><span class="token function">bindLabel</span><span class="token punctuation">(</span><span class="token punctuation">)</span>     <span class="token comment">//给marker绑定label，使用方法及参数下面详解</span>
 
<span class="token comment">// 事件说明：</span>
<span class="token comment">// marker支持各种鼠标事件，使用方法为</span>
  marker<span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span><span class="token string">&quot;event&quot;</span><span class="token punctuation">,</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token comment">//do something</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
 
<span class="token comment">// ps:如果通过ajax请求加载多个marker，并且都需要添加点击事件，请使用【封闭空间】循环加载数据点</span>
 
<span class="token comment">// 使用示例：</span>
$<span class="token punctuation">.</span><span class="token function">ajax</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
        <span class="token literal-property property">url</span><span class="token operator">:</span><span class="token string">&quot;js/demo.json&quot;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">type</span><span class="token operator">:</span><span class="token string">&quot;POST&quot;</span><span class="token punctuation">,</span>
        <span class="token function-variable function">success</span><span class="token operator">:</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">data</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">var</span> i<span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">;</span>i<span class="token operator">&lt;</span>data<span class="token punctuation">.</span>rows<span class="token punctuation">.</span>length<span class="token punctuation">;</span>i<span class="token operator">++</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
                <span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">index</span><span class="token punctuation">)</span><span class="token punctuation">{</span> <span class="token comment">//封闭空间开始</span>
                    <span class="token keyword">var</span> row<span class="token operator">=</span>data<span class="token punctuation">.</span>rows<span class="token punctuation">[</span>index<span class="token punctuation">]</span><span class="token punctuation">;</span>
                    <span class="token keyword">var</span> pointFeature <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">L<span class="token punctuation">.</span>marker</span><span class="token punctuation">(</span><span class="token punctuation">[</span>row<span class="token punctuation">.</span>lat<span class="token punctuation">,</span>row<span class="token punctuation">.</span>lng<span class="token punctuation">]</span><span class="token punctuation">,</span><span class="token punctuation">{</span> <span class="token literal-property property">icon</span><span class="token operator">:</span>     
                        viewIcon<span class="token punctuation">,</span><span class="token literal-property property">title</span><span class="token operator">:</span>row<span class="token punctuation">.</span>name<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">bindLabel</span><span class="token punctuation">(</span>row<span class="token punctuation">.</span>name<span class="token punctuation">,</span><span class="token punctuation">{</span><span class="token literal-property property">noHide</span><span class="token operator">:</span><span class="token boolean">true</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                    pointFeature<span class="token punctuation">.</span>options<span class="token punctuation">.</span>sm_sid <span class="token operator">=</span> <span class="token string">&quot;rwjg&quot;</span><span class="token punctuation">;</span>
                    pointFeature<span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span><span class="token string">&quot;click&quot;</span><span class="token punctuation">,</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
                        <span class="token function">alert</span><span class="token punctuation">(</span>row<span class="token punctuation">.</span>name<span class="token punctuation">)</span>
                    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                    pointFeature<span class="token punctuation">.</span><span class="token function">addTo</span><span class="token punctuation">(</span>_viewSpotLayer<span class="token punctuation">)</span>
                <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span> <span class="token comment">//封闭空间结束</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre></div><h3 id="polyline" tabindex="-1"><a class="header-anchor" href="#polyline" aria-hidden="true">#</a> polyLine</h3><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code>使用示例
 
<span class="token keyword">new</span> <span class="token class-name">L<span class="token punctuation">.</span>polyline</span><span class="token punctuation">(</span>数据集合<span class="token punctuation">,</span><span class="token punctuation">{</span>options<span class="token punctuation">}</span><span class="token punctuation">)</span>
 
<span class="token keyword">var</span> lineArr<span class="token operator">=</span><span class="token punctuation">[</span><span class="token punctuation">[</span><span class="token number">39.920969009399414</span><span class="token punctuation">,</span> <span class="token number">116.38572692871094</span><span class="token punctuation">]</span><span class="token punctuation">,</span><span class="token punctuation">[</span><span class="token number">39.91101264953613</span><span class="token punctuation">,</span>         
    <span class="token number">116.3862419128418</span><span class="token punctuation">]</span><span class="token punctuation">,</span><span class="token punctuation">[</span><span class="token number">39.91161346435547</span><span class="token punctuation">,</span> <span class="token number">116.39636993408203</span><span class="token punctuation">]</span><span class="token punctuation">,</span><span class="token punctuation">[</span><span class="token number">39.9217414855957</span><span class="token punctuation">,</span>    
    <span class="token number">116.3957691192627</span><span class="token punctuation">]</span><span class="token punctuation">,</span><span class="token punctuation">[</span><span class="token number">39.9213981628418</span><span class="token punctuation">,</span> <span class="token number">116.38589859008789</span><span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token keyword">var</span> line <span class="token operator">=</span>newL<span class="token punctuation">.</span><span class="token function">polyline</span><span class="token punctuation">(</span>lineArr<span class="token punctuation">,</span><span class="token punctuation">{</span><span class="token literal-property property">color</span><span class="token operator">:</span><span class="token string">&#39;red&#39;</span><span class="token punctuation">,</span><span class="token literal-property property">opacity</span><span class="token operator">:</span><span class="token string">&#39;0.8&#39;</span><span class="token punctuation">,</span><span class="token literal-property property">weight</span><span class="token operator">:</span><span class="token string">&#39;3&#39;</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token function">addTo</span><span class="token punctuation">(</span>_viewSpotLayer<span class="token punctuation">)</span><span class="token punctuation">;</span>
 
参数说明：
 
color：线段颜色
weight：线段宽度
opacity：线段透明度
dashArray：虚线间隔
<span class="token function">fill：是否填充内部</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token operator">/</span><span class="token boolean">false</span><span class="token punctuation">)</span>
<span class="token literal-property property">fillColor</span><span class="token operator">:</span>内部填充颜色，如不设置，默认为color颜色
fillOpacity：内部填充透明度
 
方法：
<span class="token punctuation">.</span><span class="token function">setStyle</span><span class="token punctuation">(</span><span class="token punctuation">)</span>    设置样式<span class="token punctuation">;</span>
 
事件：
line<span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span><span class="token string">&quot;event&quot;</span><span class="token punctuation">,</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token comment">//do something</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token comment">// ps:线段的事件，是能在鼠标位于线段上方时操作才会触发</span>
</code></pre></div><h5 id="https-openwhatevermap-xyz-3-39-64-210-50" tabindex="-1"><a class="header-anchor" href="#https-openwhatevermap-xyz-3-39-64-210-50" aria-hidden="true">#</a> https://openwhatevermap.xyz/#3/39.64/210.50</h5><h3 id="绘制的多个图形组合成一个整体通过-layergroup-作为-overlayer-添加上去" tabindex="-1"><a class="header-anchor" href="#绘制的多个图形组合成一个整体通过-layergroup-作为-overlayer-添加上去" aria-hidden="true">#</a> 绘制的多个图形组合成一个整体通过 layerGroup 作为 overlayer 添加上去</h3><ul><li><code>https://blog.csdn.net/sinat_36226553/article/details/107287753</code> 加载各种服务</li><li>加载WMTS服务加载WMS服务 加载TMS服务 加载Geojson数据 <ul><li>注：如果手上有shp数据，可以通过mapshaper转换得到geojson数据</li><li>leaflet本身并不支持WMTS服务，需要借助 leaflet-tilelayer-wmts 插件实现</li></ul></li></ul><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">var</span> bj <span class="token operator">=</span> <span class="token constant">L</span><span class="token punctuation">.</span><span class="token function">marker</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">39.92</span><span class="token punctuation">,</span><span class="token number">116.46</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">bindPopup</span><span class="token punctuation">(</span><span class="token string">&#39;这里是北京&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    sh <span class="token operator">=</span> <span class="token constant">L</span><span class="token punctuation">.</span><span class="token function">marker</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">31.213</span><span class="token punctuation">,</span><span class="token number">121.445</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">bindPopup</span><span class="token punctuation">(</span><span class="token string">&#39;这里是上海&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    gz <span class="token operator">=</span> <span class="token constant">L</span><span class="token punctuation">.</span><span class="token function">marker</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">23.16</span><span class="token punctuation">,</span><span class="token number">113.23</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">bindPopup</span><span class="token punctuation">(</span><span class="token string">&#39;这里是广州&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">var</span> cities <span class="token operator">=</span> <span class="token constant">L</span><span class="token punctuation">.</span><span class="token function">layerGroup</span><span class="token punctuation">(</span><span class="token punctuation">[</span>bj<span class="token punctuation">,</span> sh<span class="token punctuation">,</span> gz<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">addTo</span><span class="token punctuation">(</span>map<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><h3 id="图层a" tabindex="-1"><a class="header-anchor" href="#图层a" aria-hidden="true">#</a> 图层a</h3><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code>  <span class="token keyword">let</span> markericon <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span>pointList<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token parameter">item</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> myIcon <span class="token operator">=</span> <span class="token constant">L</span><span class="token punctuation">.</span><span class="token function">divIcon</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      <span class="token literal-property property">html</span><span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">&lt;div class=&quot;marker-box flex flex-col items-center&quot;&gt;
              &lt;div class=&quot;board-box flex flex-col items-center&quot;&gt;
                &lt;div class=&quot;board&quot;&gt;
                  </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span> item<span class="token punctuation">.</span>name <span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">
                  </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span> item<span class="token punctuation">.</span>distance <span class="token operator">?</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">&lt;div&gt;距离分指挥部：</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span> item<span class="token punctuation">.</span>distance <span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">&lt;/div&gt;</span><span class="token template-punctuation string">\`</span></span> <span class="token operator">:</span> <span class="token string">&#39;&#39;</span> <span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">
                  &lt;div class=&quot;logo&quot;&gt;
                    &lt;img src=&quot;</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span> pointLogo <span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">&quot;/&gt;
                  &lt;/div&gt;
                &lt;/div&gt;
                &lt;img class=&quot;line&quot; src=&quot;</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span> pointLine <span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">&quot;/&gt;
              &lt;/div&gt;
              </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span><span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">parse</span><span class="token punctuation">(</span>item<span class="token punctuation">.</span>image<span class="token punctuation">)</span><span class="token punctuation">.</span>length <span class="token operator">?</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">&lt;img src=&quot;</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span> <span class="token string">&#39;/sys/sysFile/download?fileId=&#39;</span> <span class="token operator">+</span> <span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">parse</span><span class="token punctuation">(</span>item<span class="token operator">?.</span>image<span class="token punctuation">)</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token operator">?.</span>id <span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">&quot;/&gt;</span><span class="token template-punctuation string">\`</span></span> <span class="token operator">:</span> <span class="token string">&#39;&#39;</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">
              &lt;div class=&quot;circle-box&quot;&gt;
                &lt;div class=&quot;circle1&quot;&gt;&lt;/div&gt;
                &lt;div class=&quot;circle2&quot; style=&quot;animation-delay: 0.5s;&quot;&gt;&lt;/div&gt;
                &lt;div class=&quot;circle3&quot; style=&quot;animation-delay: 1.5s;&gt;&lt;/div&gt;
              &lt;/div&gt;
              &lt;/div&gt;
            </span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">,</span>
      <span class="token comment">// iconSize: [50 , 70], // icon大小</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">const</span> m <span class="token operator">=</span> <span class="token constant">L</span><span class="token punctuation">.</span><span class="token function">marker</span><span class="token punctuation">(</span><span class="token punctuation">[</span>item<span class="token punctuation">.</span>wd<span class="token punctuation">,</span> item<span class="token punctuation">.</span>jd<span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token literal-property property">icon</span><span class="token operator">:</span> myIcon <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    markericon<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>m<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span>markerLayer <span class="token operator">=</span> <span class="token constant">L</span><span class="token punctuation">.</span><span class="token function">layerGroup</span><span class="token punctuation">(</span>markericon<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span>map<span class="token punctuation">.</span><span class="token function">addLayer</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>markerLayer<span class="token punctuation">)</span><span class="token punctuation">;</span> 

  <span class="token comment">// Leaflet Ant Path：</span>

  <span class="token comment">//  在交通项目、管网应用的项目中，常常需要标注出道路的走向、河流的流向或者管线的流向等等，Leaflet Ant Path能够很好的解决这类问题：</span>
</code></pre></div><h3 id="qgis-下载" tabindex="-1"><a class="header-anchor" href="#qgis-下载" aria-hidden="true">#</a> qgis 下载</h3><ul><li>https://download.osgeo.org/qgis/windows/</li></ul><h3 id="leaflet的轨迹模拟回放-movingmarker-js-插件" tabindex="-1"><a class="header-anchor" href="#leaflet的轨迹模拟回放-movingmarker-js-插件" aria-hidden="true">#</a> Leaflet的轨迹模拟回放 MovingMarker.js 插件</h3><ul><li>https://github.com/ewoken/Leaflet.MovingMarker</li><li><code>npm i Leaflet-MovingMaker</code></li></ul><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">let</span> config <span class="token operator">=</span> <span class="token punctuation">{</span> 
    <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token string">&#39;id&#39;</span><span class="token punctuation">,</span> <span class="token comment">// 唯一标识, 后期删除轨迹要用</span>
    <span class="token literal-property property">iconUrl</span><span class="token operator">:</span> <span class="token string">&#39;https:******.png&#39;</span><span class="token punctuation">,</span>  <span class="token comment">// iconUrl</span>
    <span class="token literal-property property">speed</span><span class="token operator">:</span> <span class="token number">10000</span><span class="token punctuation">,</span> <span class="token comment">// 速度</span>
    <span class="token literal-property property">latlngs</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">[</span>lat1，lng2<span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token punctuation">[</span>lat2，lng2<span class="token punctuation">]</span><span class="token punctuation">,</span> …<span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token literal-property property">html</span><span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">&lt;div&gt; .... &lt;/div&gt;</span><span class="token template-punctuation string">\`</span></span>  <span class="token comment">// 标牌, 样式自理</span>
<span class="token punctuation">}</span>
<span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">handleCreateTrack</span><span class="token punctuation">(</span>config<span class="token punctuation">)</span><span class="token punctuation">;</span>

 <span class="token function">handleCreateTrack</span><span class="token punctuation">(</span><span class="token parameter">config</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
 
      <span class="token keyword">let</span> featureGroup <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
 
      <span class="token comment">// 轨迹线</span>
      <span class="token keyword">let</span> routeLine <span class="token operator">=</span> <span class="token constant">L</span><span class="token punctuation">.</span><span class="token function">polyline</span><span class="token punctuation">(</span>config<span class="token punctuation">.</span>latlngs<span class="token punctuation">,</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">weight</span><span class="token operator">:</span> <span class="token number">4</span><span class="token punctuation">,</span>
        <span class="token literal-property property">opacity</span><span class="token operator">:</span> <span class="token number">0.7</span><span class="token punctuation">,</span> <span class="token comment">// 定义线的透明度</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
 
      <span class="token comment">// 定位该线至可视窗口</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span>map<span class="token punctuation">.</span><span class="token function">fitBounds</span><span class="token punctuation">(</span>routeLine<span class="token punctuation">.</span><span class="token function">getBounds</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
 
      <span class="token comment">// 创建icon</span>
      <span class="token keyword">let</span> carIcon <span class="token operator">=</span> <span class="token constant">L</span><span class="token punctuation">.</span><span class="token function">icon</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
        <span class="token literal-property property">iconSize</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">30</span><span class="token punctuation">,</span> <span class="token number">30</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token literal-property property">iconUrl</span><span class="token operator">:</span> config<span class="token punctuation">.</span>iconUrl<span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
 
      <span class="token comment">// 动态marker</span>
      <span class="token keyword">let</span> animatedMarker <span class="token operator">=</span> <span class="token constant">L</span><span class="token punctuation">.</span>Marker<span class="token punctuation">.</span><span class="token function">movingMarker</span><span class="token punctuation">(</span>
        routeLine<span class="token punctuation">.</span><span class="token function">getLatLngs</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
        config<span class="token punctuation">.</span>speed<span class="token punctuation">,</span> 
      <span class="token comment">// 以下配置项在github上有详细注解-----</span>
        <span class="token punctuation">{</span>
          <span class="token literal-property property">autostart</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
          <span class="token literal-property property">loop</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
          <span class="token literal-property property">icon</span><span class="token operator">:</span> carIcon<span class="token punctuation">,</span>
          <span class="token literal-property property">rotate</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">bindPopup</span><span class="token punctuation">(</span>config<span class="token punctuation">.</span>html<span class="token punctuation">)</span><span class="token punctuation">;</span>
 
      <span class="token comment">// 移动结束时弹出标牌</span>
      animatedMarker<span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span><span class="token string">&quot;end&quot;</span><span class="token punctuation">,</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        animatedMarker<span class="token punctuation">.</span><span class="token function">openPopup</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
 
      <span class="token comment">// 记录划线过程</span>
      <span class="token keyword">let</span> path <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
      animatedMarker<span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span><span class="token string">&quot;move&quot;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">res</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
        <span class="token comment">// 回调中会返回经纬度信息，点移动改变地图中心点</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>map<span class="token punctuation">.</span><span class="token function">panTo</span><span class="token punctuation">(</span><span class="token punctuation">[</span>res<span class="token punctuation">.</span>latlng<span class="token punctuation">.</span>lat<span class="token punctuation">,</span> res<span class="token punctuation">.</span>latlng<span class="token punctuation">.</span>lng<span class="token punctuation">]</span><span class="token punctuation">)</span> 
        <span class="token comment">// 动态画已走路线</span>
        <span class="token keyword">let</span> polyline <span class="token operator">=</span> <span class="token operator">...</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    
      featureGroup<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>animatedMarker<span class="token punctuation">)</span><span class="token punctuation">;</span>
      featureGroup<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>routeLine<span class="token punctuation">)</span><span class="token punctuation">;</span>
 
      <span class="token keyword">let</span> featureGroup <span class="token operator">=</span> <span class="token constant">L</span><span class="token punctuation">.</span><span class="token function">featureGroup</span><span class="token punctuation">(</span>featureGroup<span class="token punctuation">)</span><span class="token punctuation">;</span>
      
      <span class="token comment">// 记录地图上的点、线、面 ... 根据id 可动态删除</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span>clusterLayer<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
        <span class="token literal-property property">type</span><span class="token operator">:</span> config<span class="token punctuation">.</span>id<span class="token punctuation">,</span>
        <span class="token literal-property property">value</span><span class="token operator">:</span> featureGroup<span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
 
      <span class="token keyword">this</span><span class="token punctuation">.</span>map<span class="token punctuation">.</span><span class="token function">addLayer</span><span class="token punctuation">(</span>featureGroup<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>




<span class="token keyword">this</span><span class="token punctuation">.</span>map<span class="token punctuation">.</span><span class="token function">fitBounds</span><span class="token punctuation">(</span>这里是我们的点位数据<span class="token punctuation">)</span> <span class="token comment">// 将地图视层尽可能大的设定在给定的地理边界内</span>
<span class="token keyword">var</span> marker2 <span class="token operator">=</span> <span class="token constant">L</span><span class="token punctuation">.</span>Marker<span class="token punctuation">.</span><span class="token function">movingMarker</span><span class="token punctuation">(</span>点位数据格式与marker内的一样<span class="token punctuation">[</span>lat<span class="token punctuation">,</span>lng<span class="token punctuation">]</span><span class="token punctuation">,</span> 
<span class="token number">10000</span> <span class="token string">&#39;//动画时长&#39;</span> <span class="token punctuation">,</span> 
<span class="token punctuation">{</span> <span class="token literal-property property">autostart</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token literal-property property">loop</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span> <span class="token literal-property property">icon</span><span class="token operator">:</span> policeCarIcon<span class="token punctuation">,</span> <span class="token literal-property property">rotate</span><span class="token operator">:</span> <span class="token boolean">false</span> <span class="token punctuation">}</span>
  <span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">addTo</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>map<span class="token punctuation">)</span>
<span class="token comment">//后面这些可以参考上面的插件文档进行解读</span>
<span class="token comment">// 地图根据点位移动，一直设置点位为中心点</span>
<span class="token keyword">let</span> path <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token comment">// 声明绘制线的临时使用变量</span>
marker2<span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span><span class="token string">&#39;move&#39;</span><span class="token punctuation">,</span> <span class="token parameter">res</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span> <span class="token comment">// 监听点位移动事件 move</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>map<span class="token punctuation">.</span><span class="token function">panTo</span><span class="token punctuation">(</span><span class="token punctuation">[</span>res<span class="token punctuation">.</span>latlng<span class="token punctuation">.</span>lat<span class="token punctuation">,</span> res<span class="token punctuation">.</span>latlng<span class="token punctuation">.</span>lng<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token comment">//回调中会返回经纬度信息，点移动改变地图中心点</span>
    path<span class="token punctuation">.</span>length <span class="token operator">&gt;</span> <span class="token number">1</span> <span class="token operator">&amp;&amp;</span> path<span class="token punctuation">.</span><span class="token function">shift</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// 保持数组长度，避免过度push不断重新绘制之前的路径</span>
    path<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token punctuation">[</span>res<span class="token punctuation">.</span>latlng<span class="token punctuation">.</span>lat<span class="token punctuation">,</span> res<span class="token punctuation">.</span>latlng<span class="token punctuation">.</span>lng<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token comment">// 将数据push到数组中</span>
    <span class="token constant">L</span><span class="token punctuation">.</span><span class="token function">polyline</span><span class="token punctuation">(</span>path<span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token literal-property property">color</span><span class="token operator">:</span> <span class="token string">&#39;#20a080&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">weight</span><span class="token operator">:</span> <span class="token number">2</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">addTo</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>map<span class="token punctuation">)</span> <span class="token comment">// 绘制线到地图图层</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token comment">// 这里我做了一个轨迹回放结束事件 end</span>
marker2<span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span><span class="token string">&#39;end&#39;</span><span class="token punctuation">,</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// closeOnClick: false 点击别处不会消失</span>
    marker2<span class="token punctuation">.</span><span class="token function">bindPopup</span><span class="token punctuation">(</span><span class="token string">&#39;&lt;b&gt;轨迹结束显示&lt;/b&gt;&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token literal-property property">closeOnClick</span><span class="token operator">:</span> <span class="token boolean">true</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">openPopup</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token comment">//-------------------------------------------------------------------------------------------------------------- </span>

  <span class="token doc-comment comment">/**
   *
   */</span>
  <span class="token keyword">var</span> parisKievLL <span class="token operator">=</span> <span class="token punctuation">[</span>
    <span class="token punctuation">[</span><span class="token number">28.8567</span><span class="token punctuation">,</span> <span class="token number">112.3508</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token punctuation">[</span><span class="token number">30.45</span><span class="token punctuation">,</span> <span class="token number">130.523333</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">]</span><span class="token punctuation">;</span>
  <span class="token keyword">var</span> londonParisRomeBerlinBucarest <span class="token operator">=</span> <span class="token punctuation">[</span>
    <span class="token punctuation">[</span><span class="token number">31.507222</span><span class="token punctuation">,</span> <span class="token number">110.1275</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token punctuation">[</span><span class="token number">28.8567</span><span class="token punctuation">,</span> <span class="token number">112.3508</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token punctuation">[</span><span class="token number">31.9</span><span class="token punctuation">,</span> <span class="token number">112.5</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token punctuation">[</span><span class="token number">31.516667</span><span class="token punctuation">,</span> <span class="token number">113.383333</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token punctuation">[</span><span class="token number">31.4166</span><span class="token punctuation">,</span> <span class="token number">126.1</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">]</span><span class="token punctuation">;</span>
 
  map_dom<span class="token punctuation">.</span><span class="token function">fitBounds</span><span class="token punctuation">(</span>londonParisRomeBerlinBucarest<span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">var</span> marker1 <span class="token operator">=</span> <span class="token constant">L</span><span class="token punctuation">.</span>Marker<span class="token punctuation">.</span><span class="token function">movingMarker</span><span class="token punctuation">(</span>parisKievLL<span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token number">10000</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">addTo</span><span class="token punctuation">(</span>map_dom<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token constant">L</span><span class="token punctuation">.</span><span class="token function">polyline</span><span class="token punctuation">(</span>parisKievLL<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">addTo</span><span class="token punctuation">(</span>map_dom<span class="token punctuation">)</span><span class="token punctuation">;</span>
  marker1<span class="token punctuation">.</span><span class="token function">once</span><span class="token punctuation">(</span><span class="token string">&quot;click&quot;</span><span class="token punctuation">,</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    marker1<span class="token punctuation">.</span><span class="token function">start</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    marker1<span class="token punctuation">.</span><span class="token function">closePopup</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    marker1<span class="token punctuation">.</span><span class="token function">unbindPopup</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    marker1<span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span><span class="token string">&quot;click&quot;</span><span class="token punctuation">,</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>marker1<span class="token punctuation">.</span><span class="token function">isRunning</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        marker1<span class="token punctuation">.</span><span class="token function">pause</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
        marker1<span class="token punctuation">.</span><span class="token function">start</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      marker1<span class="token punctuation">.</span><span class="token function">bindPopup</span><span class="token punctuation">(</span><span class="token string">&quot;&lt;b&gt;点我暂停 !&lt;/b&gt;&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">openPopup</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">2000</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  marker1<span class="token punctuation">.</span><span class="token function">bindPopup</span><span class="token punctuation">(</span><span class="token string">&quot;&lt;b&gt;点我开始!&lt;/b&gt;&quot;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token literal-property property">closeOnClick</span><span class="token operator">:</span> <span class="token boolean">false</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  marker1<span class="token punctuation">.</span><span class="token function">openPopup</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

</code></pre></div><h3 id="leaflet-pm插件实现创建和编辑几何图形-点、线、面、圆等" tabindex="-1"><a class="header-anchor" href="#leaflet-pm插件实现创建和编辑几何图形-点、线、面、圆等" aria-hidden="true">#</a> Leaflet.PM插件实现创建和编辑几何图形(点、线、面、圆等)：</h3><p>使用用L.polylineDecorator插件可以实现轨迹带箭头效果。 Leaflet.AnimatedMarker插件可以更流畅的实现marker沿线播放，但是没有考虑marker角度和轨迹线的动态绘制。 参考Leaflet.AnimatedMarker、leaflet-moving-marker中核心代码，解决角度问题以及轨迹线动态绘制等问题。 将代码重新封装成插件，方便调用。</p><h2 id="视频ckplayer" tabindex="-1"><a class="header-anchor" href="#视频ckplayer" aria-hidden="true">#</a> 视频ckPlayer</h2><ul><li>ckplayer插件可以用来播放网页视频，也可以用来做直播项目，同页面调用2个ckplayer插件时。需要将官网上设置的container的值变成class或者标签</li><li><code>https://www.codeleading.com/article/35113304750/</code></li></ul><ul><li>ckplayer在一个页面中调用两个播放器的方法，现在是用推流在播放，想做成一个页面并排着放两个相同的视频，用<code>&lt;table&gt;</code>做了两个表格每个表格放一样的代码，但是打开只会出现一个播放器。</li></ul><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code>	<span class="token keyword">var</span> videoObject <span class="token operator">=</span> <span class="token punctuation">{</span>
	<span class="token comment">// ckplayer插件 可以绑定在页面中的任何一个容器中（需要在html中写一个空的容器 class名或者id或者标签名 与下文调用时的container保持一致）</span>
	<span class="token literal-property property">container</span><span class="token operator">:</span> <span class="token string">&#39;.videosamplex&#39;</span><span class="token punctuation">,</span><span class="token comment">//“#”代表容器的ID，“.”或“”代表容器的class</span>
	<span class="token literal-property property">variable</span><span class="token operator">:</span> <span class="token string">&#39;player&#39;</span><span class="token punctuation">,</span><span class="token comment">//该属性必需设置，值等于下面的new ckplayer()的对象</span>
	<span class="token literal-property property">poster</span><span class="token operator">:</span><span class="token string">&#39;pic/wdm.jpg&#39;</span><span class="token punctuation">,</span>  <span class="token comment">// 封面图片</span>
	<span class="token comment">// mobileCkControls:true,//是否在移动端（包括ios）环境中显示控制栏</span>
	<span class="token comment">// mobileAutoFull:false,//在移动端播放后是否按系统设置的全屏播放</span>
	<span class="token comment">// h5container:&#39;#videoplayer&#39;,//h5环境中使用自定义容器</span>
	<span class="token literal-property property">video</span><span class="token operator">:</span><span class="token string">&#39;http://img.ksbbs.com/asset/Mon_1703/05cacb4e02f9d9e.mp4&#39;</span><span class="token comment">//视频地址</span>
   <span class="token punctuation">}</span><span class="token punctuation">;</span>
    <span class="token keyword">var</span> player<span class="token operator">=</span><span class="token keyword">new</span> <span class="token class-name">ckplayer</span><span class="token punctuation">(</span>videoObject<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">var</span> videoObject2 <span class="token operator">=</span> <span class="token punctuation">{</span>
	<span class="token literal-property property">container</span><span class="token operator">:</span> <span class="token string">&#39;.videosamplex2&#39;</span><span class="token punctuation">,</span><span class="token comment">//“#”代表容器的ID，“.”或“”代表容器的class</span>
	<span class="token literal-property property">variable</span><span class="token operator">:</span> <span class="token string">&#39;player2&#39;</span><span class="token punctuation">,</span><span class="token comment">//该属性必需设置，值等于下面的new ckplayer()的对象</span>
	<span class="token literal-property property">poster</span><span class="token operator">:</span><span class="token string">&#39;pic/wdm.jpg&#39;</span><span class="token punctuation">,</span>
	<span class="token literal-property property">mobileCkControls</span><span class="token operator">:</span><span class="token boolean">true</span><span class="token punctuation">,</span><span class="token comment">//是否在移动端（包括ios）环境中显示控制栏</span>
	<span class="token literal-property property">mobileAutoFull</span><span class="token operator">:</span><span class="token boolean">false</span><span class="token punctuation">,</span><span class="token comment">//在移动端播放后是否按系统设置的全屏播放</span>
	<span class="token literal-property property">video</span><span class="token operator">:</span><span class="token string">&#39;http://img.ksbbs.com/asset/Mon_1703/d30e02a5626c066.mp4&#39;</span><span class="token comment">//视频地址</span>
    <span class="token punctuation">}</span><span class="token punctuation">;</span>
    <span class="token keyword">var</span> player2<span class="token operator">=</span><span class="token keyword">new</span> <span class="token class-name">ckplayer</span><span class="token punctuation">(</span>videoObject2<span class="token punctuation">)</span><span class="token punctuation">;</span>


<span class="token literal-property property">https</span><span class="token operator">:</span><span class="token operator">/</span><span class="token operator">/</span>www<span class="token punctuation">.</span>codeleading<span class="token punctuation">.</span>com<span class="token operator">/</span>article<span class="token operator">/</span><span class="token number">35113304750</span><span class="token operator">/</span>
</code></pre></div><ul><li>在main.js文件内全局引入阿里云字体图标 css，记得使用路径要正确</li></ul><h2 id="滚动插件" tabindex="-1"><a class="header-anchor" href="#滚动插件" aria-hidden="true">#</a> 滚动插件</h2><ul><li>vue3-scroll-seamless</li></ul><ul><li><code>https://xiaofulzm.github.io/vue3-scroll-seamless/guide/properties.html</code></li><li>谷歌插件</li><li><code>https://chrome.zzzmh.cn/info/cdonnmffkdaoajfknoeeecmchibpmkmg</code></li></ul><ul><li>聚合</li></ul><ul><li><p><code>https://github.com/SINTEF-9012/PruneCluster</code></p></li><li><p>缩放显示不同坐标</p></li><li><p>https://github.com/Leaflet/Leaflet.Editable -https://leaflet.github.io/Leaflet.Editable/doc/api.html</p></li><li><p>绘制 Leaflet.draw</p></li></ul><p><strong>https://github.com/codeofsumit/leaflet.pm</strong></p><ul><li>图层切换，要素显示隐藏 图层组展示 npm install leaflet-groupedlayercontrol https://github.com/ismyrnow/leaflet-groupedlayercontrol</li></ul><h3 id="heatmap" tabindex="-1"><a class="header-anchor" href="#heatmap" aria-hidden="true">#</a> heatMap</h3><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">var</span> baseURL <span class="token operator">=</span> <span class="token string">&#39;http://{s}.tile.cloudmade.com/{API}/{map_style}/256/{z}/{x}/{y}.png&#39;</span><span class="token punctuation">;</span>
 
<span class="token keyword">var</span> base <span class="token operator">=</span> <span class="token constant">L</span><span class="token punctuation">.</span><span class="token function">tileLayer</span><span class="token punctuation">(</span>baseURL<span class="token punctuation">,</span> <span class="token punctuation">{</span> 
    <span class="token constant">API</span><span class="token operator">:</span> your<span class="token operator">-</span>api<span class="token punctuation">,</span> 
    <span class="token literal-property property">map_style</span><span class="token operator">:</span> <span class="token string">&#39;44094&#39;</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
 
<span class="token comment">//Halifax, Nova Scotia</span>
<span class="token keyword">var</span> map <span class="token operator">=</span> <span class="token constant">L</span><span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token string">&#39;map&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span><span class="token literal-property property">layers</span><span class="token operator">:</span> <span class="token punctuation">[</span>base<span class="token punctuation">]</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">setView</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">44.65</span><span class="token punctuation">,</span> <span class="token operator">-</span><span class="token number">63.57</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token number">12</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
 
<span class="token constant">L</span><span class="token punctuation">.</span>control<span class="token punctuation">.</span><span class="token function">scale</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">addTo</span><span class="token punctuation">(</span>map<span class="token punctuation">)</span><span class="token punctuation">;</span>
 
<span class="token comment">//custom size for this example, and autoresize because map style has a percentage width</span>
<span class="token keyword">var</span> heatmap <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">L<span class="token punctuation">.</span>TileLayer<span class="token punctuation">.</span>WebGLHeatMap</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token literal-property property">size</span><span class="token operator">:</span> <span class="token number">1000</span><span class="token punctuation">,</span> <span class="token literal-property property">autoresize</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span> 
 
<span class="token comment">// dataPoints is an array of arrays: [[lat, lng, intensity]...]</span>
<span class="token keyword">var</span> dataPoints <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">[</span><span class="token number">44.6674</span><span class="token punctuation">,</span> <span class="token operator">-</span><span class="token number">63.5703</span><span class="token punctuation">,</span> <span class="token number">37</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token number">44.6826</span><span class="token punctuation">,</span> <span class="token operator">-</span><span class="token number">63.7552</span><span class="token punctuation">,</span> <span class="token number">34</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token number">44.6325</span><span class="token punctuation">,</span> <span class="token operator">-</span><span class="token number">63.5852</span><span class="token punctuation">,</span> <span class="token number">41</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token number">44.6467</span><span class="token punctuation">,</span> <span class="token operator">-</span><span class="token number">63.4696</span><span class="token punctuation">,</span> <span class="token number">67</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token number">44.6804</span><span class="token punctuation">,</span> <span class="token operator">-</span><span class="token number">63.487</span><span class="token punctuation">,</span> <span class="token number">64</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token number">44.6622</span><span class="token punctuation">,</span> <span class="token operator">-</span><span class="token number">63.5364</span><span class="token punctuation">,</span> <span class="token number">40</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token number">44.603</span><span class="token punctuation">,</span> <span class="token operator">-</span> <span class="token number">63.743</span><span class="token punctuation">,</span> <span class="token number">52</span><span class="token punctuation">]</span> <span class="token operator">...</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">var</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">,</span> len <span class="token operator">=</span> dataPoints<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i <span class="token operator">&lt;</span> len<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">var</span> point <span class="token operator">=</span> dataPoints<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">;</span>
    heatmap<span class="token punctuation">.</span><span class="token function">addDataPoint</span><span class="token punctuation">(</span>point<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
         point<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
         point<span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token comment">// alternatively, you can skip the for loop and add the whole dataset with heatmap.setData(dataPoints)</span>
 
map<span class="token punctuation">.</span><span class="token function">addLayer</span><span class="token punctuation">(</span>heatmap<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><h3 id="leaflet-pm" tabindex="-1"><a class="header-anchor" href="#leaflet-pm" aria-hidden="true">#</a> leaflet.PM</h3><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 添加绘制工具</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span>map<span class="token punctuation">.</span>pm<span class="token punctuation">.</span><span class="token function">setLang</span><span class="token punctuation">(</span><span class="token string">&quot;zh&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span>map<span class="token punctuation">.</span>pm<span class="token punctuation">.</span><span class="token function">addControls</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
        <span class="token literal-property property">position</span><span class="token operator">:</span> <span class="token string">&quot;topleft&quot;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">drawPolygon</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token comment">//绘制多边形</span>
        <span class="token literal-property property">drawMarker</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span> <span class="token comment">//绘制标记点</span>
        <span class="token literal-property property">drawCircleMarker</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span> <span class="token comment">//绘制圆形标记</span>
        <span class="token literal-property property">drawPolyline</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span> <span class="token comment">//绘制线条</span>
        <span class="token literal-property property">drawRectangle</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span> <span class="token comment">//绘制矩形</span>
        <span class="token literal-property property">drawCircle</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span> <span class="token comment">//绘制圆圈</span>
        <span class="token literal-property property">editMode</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token comment">//编辑多边形</span>
        <span class="token literal-property property">dragMode</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token comment">//拖动多边形</span>
        <span class="token literal-property property">cutPolygon</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span> <span class="token comment">//添加⼀个按钮以删除多边形⾥⾯的部分内容</span>
        <span class="token literal-property property">removalMode</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token comment">//清除多边形</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// 全局设置绘制样式</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span>map<span class="token punctuation">.</span>pm<span class="token punctuation">.</span><span class="token function">setPathOptions</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
        <span class="token literal-property property">color</span><span class="token operator">:</span> <span class="token string">&quot;orange&quot;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">fillColor</span><span class="token operator">:</span> <span class="token string">&quot;green&quot;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">fillOpacity</span><span class="token operator">:</span> <span class="token number">0.4</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 或者单独设置绘制样式</span>
      <span class="token keyword">var</span> options <span class="token operator">=</span> <span class="token punctuation">{</span>
        <span class="token comment">// 连接线标记之间的线</span>
        <span class="token literal-property property">templineStyle</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token literal-property property">color</span><span class="token operator">:</span> <span class="token string">&quot;red&quot;</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token comment">// 提⽰线从最后⼀个标记到⿏标光标的线</span>
        <span class="token literal-property property">hintlineStyle</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token literal-property property">color</span><span class="token operator">:</span> <span class="token string">&quot;red&quot;</span><span class="token punctuation">,</span>
          <span class="token literal-property property">dashArray</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token comment">// 绘制完成的样式</span>
        <span class="token literal-property property">pathOptions</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token literal-property property">color</span><span class="token operator">:</span> <span class="token string">&quot;orange&quot;</span><span class="token punctuation">,</span>
          <span class="token literal-property property">fillColor</span><span class="token operator">:</span> <span class="token string">&quot;green&quot;</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">;</span>

      <span class="token comment">// 激活绘制多边形功能-1、单独设置某个模式的样式</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span>map<span class="token punctuation">.</span>pm<span class="token punctuation">.</span><span class="token function">enableDraw</span><span class="token punctuation">(</span><span class="token string">&quot;Polygon&quot;</span><span class="token punctuation">,</span> options<span class="token punctuation">)</span><span class="token punctuation">;</span>


      <span class="token comment">// 启用绘制--多边形功能</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span>map<span class="token punctuation">.</span>pm<span class="token punctuation">.</span><span class="token function">enableDraw</span><span class="token punctuation">(</span><span class="token string">&quot;Polygon&quot;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">snappable</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token comment">//启⽤捕捉到其他绘制图形的顶点</span>
        <span class="token literal-property property">snapDistance</span><span class="token operator">:</span> <span class="token number">20</span><span class="token punctuation">,</span> <span class="token comment">//顶点捕捉距离</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

      <span class="token comment">// 关闭绘制--注意也可以关闭其他模式的绘制功能</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span>map<span class="token punctuation">.</span>pm<span class="token punctuation">.</span><span class="token function">disableDraw</span><span class="token punctuation">(</span><span class="token string">&quot;Polygon&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 绘制事件监听</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span>map<span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span><span class="token string">&quot;pm:drawstart&quot;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">e</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>e<span class="token punctuation">,</span> <span class="token string">&quot;绘制开始第一个点&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span>map<span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span><span class="token string">&quot;pm:drawend&quot;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">e</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>e<span class="token punctuation">,</span> <span class="token string">&quot;禁⽌绘制、绘制结束&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span>map<span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span><span class="token string">&quot;pm:create&quot;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">e</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>e<span class="token punctuation">,</span> <span class="token string">&quot;绘制完成时调⽤&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>e<span class="token punctuation">.</span>shape <span class="token operator">==</span> <span class="token string">&quot;Circle&quot;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
          console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>e<span class="token punctuation">.</span>layer<span class="token punctuation">.</span>_latlng<span class="token punctuation">,</span> e<span class="token punctuation">.</span>layer<span class="token punctuation">.</span>_radius<span class="token punctuation">,</span> <span class="token string">&quot;绘制坐标&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
          console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>e<span class="token punctuation">.</span>layer<span class="token punctuation">.</span>_latlngs<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token string">&quot;绘制坐标&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
      
      <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

      <span class="token keyword">this</span><span class="token punctuation">.</span>map<span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span><span class="token string">&quot;pm:globalremovalmodetoggled&quot;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">e</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>e<span class="token punctuation">,</span> <span class="token string">&quot;清除图层时调用&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><h3 id="marker-icon" tabindex="-1"><a class="header-anchor" href="#marker-icon" aria-hidden="true">#</a> marker ICON</h3><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code>
<span class="token comment">// 仿照MSN 天气 做的ICON</span>
 <span class="token keyword">let</span> iconIdv <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">L<span class="token punctuation">.</span>DivIcon</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
          <span class="token literal-property property">className</span><span class="token operator">:</span> <span class="token string">&#39;my-div-icon&#39;</span><span class="token punctuation">,</span>
          <span class="token literal-property property">html</span><span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string"> &lt;div class=&quot;ic_tool&quot;&gt;  &lt;span class=&quot;my-div-span&quot; &gt;</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>row<span class="token punctuation">.</span>hospitalName<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">&lt;/span&gt;
          &lt;/div&gt;
          &lt;div class=&#39;ic_point&#39;&gt;
          &lt;/div&gt;
          </span><span class="token template-punctuation string">\`</span></span>
          <span class="token comment">// &#39;&lt;img class=&quot;my-div-image&quot; src=&quot;http://png-3.vector.me/files/images/4/0/402272/aiga_air_transportation_bg_thumb&quot;/&gt;&#39;+</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span>


</code></pre></div><div class="language-css" data-ext="css"><pre class="language-css"><code>

<span class="token selector">.my-div-icon</span> <span class="token punctuation">{</span>
  <span class="token property">width</span><span class="token punctuation">:</span> 150px <span class="token important">!important</span><span class="token punctuation">;</span>
  <span class="token comment">/* height: 100px!important; */</span>

  <span class="token property">display</span><span class="token punctuation">:</span> flex<span class="token punctuation">;</span>

  <span class="token property">background-size</span><span class="token punctuation">:</span> 100% 100%<span class="token punctuation">;</span>

  <span class="token property">border-left</span><span class="token punctuation">:</span> 2px solid yellow<span class="token punctuation">;</span>
  <span class="token property">height</span><span class="token punctuation">:</span> 100px <span class="token important">!important</span><span class="token punctuation">;</span>
  <span class="token property">padding</span><span class="token punctuation">:</span> 3px <span class="token important">!important</span><span class="token punctuation">;</span>
  <span class="token comment">/* border-radius: 5px; */</span>

  <span class="token property">top</span><span class="token punctuation">:</span> -100px <span class="token important">!important</span><span class="token punctuation">;</span>

  <span class="token property">flex-direction</span><span class="token punctuation">:</span> column<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.ic_tool</span> <span class="token punctuation">{</span>
  <span class="token property">background-color</span><span class="token punctuation">:</span> #444D52<span class="token punctuation">;</span>
  <span class="token property">position</span><span class="token punctuation">:</span> absolute<span class="token punctuation">;</span>
  <span class="token property">left</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
  <span class="token property">top</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
  <span class="token property">width</span><span class="token punctuation">:</span> 100%<span class="token punctuation">;</span>
  <span class="token property">height</span><span class="token punctuation">:</span> 25px<span class="token punctuation">;</span>
  <span class="token property">padding-left</span><span class="token punctuation">:</span> 10%<span class="token punctuation">;</span>
  <span class="token property">line-height</span><span class="token punctuation">:</span> 25px<span class="token punctuation">;</span>


<span class="token punctuation">}</span>

<span class="token selector">.ic_point</span> <span class="token punctuation">{</span>
  <span class="token property">position</span><span class="token punctuation">:</span> absolute<span class="token punctuation">;</span>
  <span class="token property">bottom</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
  <span class="token property">left</span><span class="token punctuation">:</span> -5px<span class="token punctuation">;</span>
  <span class="token property">width</span><span class="token punctuation">:</span> 8px<span class="token punctuation">;</span>
  <span class="token property">height</span><span class="token punctuation">:</span> 8px<span class="token punctuation">;</span>
  <span class="token property">border-radius</span><span class="token punctuation">:</span> 50%<span class="token punctuation">;</span>
  <span class="token property">background-color</span><span class="token punctuation">:</span> red<span class="token punctuation">;</span>

<span class="token punctuation">}</span>




<span class="token selector">.my-div-span</span> <span class="token punctuation">{</span>
  <span class="token property">font-size</span><span class="token punctuation">:</span> 16px <span class="token important">!important</span><span class="token punctuation">;</span>
  <span class="token property">position</span><span class="token punctuation">:</span> absolute<span class="token punctuation">;</span>
  <span class="token property">color</span><span class="token punctuation">:</span> aliceblue<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

</code></pre></div><h3 id="echarts-demo" tabindex="-1"><a class="header-anchor" href="#echarts-demo" aria-hidden="true">#</a> echarts demo</h3>`,37),i={href:"https://madeapie.com/#/",target:"_blank",rel:"noopener noreferrer"},r={href:"https://www.makeapie.cn/",target:"_blank",rel:"noopener noreferrer"},m={href:"https://ppchart.com/#/",target:"_blank",rel:"noopener noreferrer"},d={href:"https://www.isqqw.com/",target:"_blank",rel:"noopener noreferrer"},y={href:"http://my.xuan.news.cn/cloudapi/echarts/doc/example.html",target:"_blank",rel:"noopener noreferrer"},g={href:"http://192.144.199.210/forum.php?mod=forumdisplay&fid=2",target:"_blank",rel:"noopener noreferrer"},h={href:"https://www.hcharts.cn/demo/highcharts#line",target:"_blank",rel:"noopener noreferrer"};function f(b,w){const s=o("ExternalLinkIcon");return e(),c("div",null,[k,n("ul",null,[n("li",null,[n("a",i,[a("https://madeapie.com/#/"),p(s)])]),n("li",null,[n("a",r,[a("https://www.makeapie.cn/"),p(s)])]),n("li",null,[n("a",m,[a("https://ppchart.com/#/"),p(s)])]),n("li",null,[n("a",d,[a("https://www.isqqw.com/"),p(s)])]),n("li",null,[n("a",y,[a("http://my.xuan.news.cn/cloudapi/echarts/doc/example.html"),p(s)])]),n("li",null,[n("a",g,[a("http://192.144.199.210/forum.php?mod=forumdisplay&fid=2"),p(s)])]),n("li",null,[n("a",h,[a("https://www.hcharts.cn/demo/highcharts#line"),p(s)])])])])}const q=t(u,[["render",f],["__file","index.html.vue"]]);export{q as default};
