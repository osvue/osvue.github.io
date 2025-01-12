import{_ as s,p as a,q as t,Q as p,a1 as n}from"./framework-d81ad7e5.js";const o={},e=n(`<h3 id="热力图" tabindex="-1"><a class="header-anchor" href="#热力图" aria-hidden="true">#</a> 热力图</h3><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code>
  <span class="token comment">// 通过npm 安装 heatmap.js</span>
  npm install <span class="token operator">--</span>save heatmap<span class="token punctuation">.</span>js 
  <span class="token keyword">import</span> <span class="token string">&quot;heatmap.js&quot;</span><span class="token punctuation">;</span>
  <span class="token keyword">import</span> HeatmapOverlay <span class="token keyword">from</span> <span class="token string">&quot;@/assets/Leaflet/leaflet-heatmap.js&quot;</span><span class="token punctuation">;</span>
  <span class="token keyword">var</span> heatmapInstance <span class="token operator">=</span> Heatmap<span class="token punctuation">.</span><span class="token function">create</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
        <span class="token literal-property property">container</span><span class="token operator">:</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">&#39;heatmap&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
        <span class="token literal-property property">gradient</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token comment">//渐变颜色</span>
          <span class="token string-property property">&quot;0&quot;</span><span class="token operator">:</span> <span class="token string">&quot;rgba(255,255,255,1)&quot;</span><span class="token punctuation">,</span><span class="token comment">//value为0的颜色</span>
          <span class="token string-property property">&quot;0.3&quot;</span><span class="token operator">:</span> <span class="token string">&quot;#82ff6d&quot;</span><span class="token punctuation">,</span><span class="token comment">//value为500的颜色</span>
          <span class="token string-property property">&quot;0.8&quot;</span><span class="token operator">:</span> <span class="token string">&quot;#f3ff6d&quot;</span><span class="token punctuation">,</span><span class="token comment">//value为1000的颜色</span>
          <span class="token string-property property">&quot;1&quot;</span><span class="token operator">:</span> <span class="token string">&quot;#ff6d6d&quot;</span><span class="token punctuation">,</span><span class="token comment">//value为2000的颜色</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token comment">// radius: 10,</span>
        <span class="token literal-property property">maxOpacity</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
        <span class="token literal-property property">minOpacity</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
        <span class="token literal-property property">blur</span><span class="token operator">:</span> <span class="token number">.75</span><span class="token punctuation">,</span>
        <span class="token comment">// radius:30, //半径</span>
        <span class="token comment">// opacity:0.5, //透明</span>
        <span class="token comment">// maxOpacity, //热图中最大值具有的最大不透明度</span>
        <span class="token comment">// minOpacity, //热图中最小值的最小不透明度</span>
        <span class="token comment">// onExtremaChange, //传递回调以接收极值更改更新</span>
        <span class="token comment">// blur, //将应用于所有数据点的模糊因子。模糊因子越高，渐变将越平滑</span>
        <span class="token comment">// xField, //数据点中x坐标的属性名称</span>
        <span class="token comment">// yField, //数据点中y坐标的属性名称</span>
        <span class="token comment">// valueField //数据点中y坐标的属性名称</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span>


  <span class="token comment">// 将后台数据转成热力图需要的数据</span>
      <span class="token keyword">const</span> hdata <span class="token operator">=</span> self<span class="token punctuation">.</span>heatmapData<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token parameter">v</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token punctuation">[</span>
          v<span class="token punctuation">.</span>lat<span class="token punctuation">,</span>
          v<span class="token punctuation">.</span>lng<span class="token punctuation">,</span>
          v<span class="token punctuation">.</span>count
        <span class="token punctuation">]</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span>
        <span class="token comment">// 创建热力图</span>
      self<span class="token punctuation">.</span>heatmap <span class="token operator">=</span> <span class="token constant">L</span><span class="token punctuation">.</span><span class="token function">heatLayer</span><span class="token punctuation">(</span>hdata<span class="token punctuation">,</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">radius</span><span class="token operator">:</span> newRadius<span class="token punctuation">,</span> <span class="token comment">// 半径</span>
        <span class="token literal-property property">max</span><span class="token operator">:</span> maxNum<span class="token punctuation">,</span> <span class="token comment">// 最大强度</span>
        <span class="token literal-property property">minOpacity</span><span class="token operator">:</span> <span class="token number">0.4</span><span class="token punctuation">,</span> <span class="token comment">// 最小透明度</span>
        <span class="token literal-property property">gradient</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token comment">// 热力值的颜色设置，范围是0-1，可以分段设置颜色</span>
          <span class="token number">0.5</span><span class="token operator">:</span> <span class="token string">&#39;blue&#39;</span><span class="token punctuation">,</span>
          <span class="token number">0.65</span><span class="token operator">:</span> <span class="token string">&#39;rgb(117, 211, 248)&#39;</span><span class="token punctuation">,</span>
          <span class="token number">0.7</span><span class="token operator">:</span> <span class="token string">&#39;rgb(0, 255, 0)&#39;</span><span class="token punctuation">,</span>
          <span class="token number">0.9</span><span class="token operator">:</span> <span class="token string">&#39;#ffea00&#39;</span><span class="token punctuation">,</span>
          <span class="token number">1.0</span><span class="token operator">:</span> <span class="token string">&#39;red&#39;</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">addTo</span><span class="token punctuation">(</span>self<span class="token punctuation">.</span>localHeatmap<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token comment">// 定位至第一个热力图的位置</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>self<span class="token punctuation">.</span>heatmapData<span class="token punctuation">.</span>length<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        self<span class="token punctuation">.</span>localHeatmap<span class="token punctuation">.</span><span class="token function">setView</span><span class="token punctuation">(</span><span class="token punctuation">[</span>self<span class="token punctuation">.</span>heatmapData<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token operator">?.</span>lat<span class="token punctuation">,</span> self<span class="token punctuation">.</span>heatmapData<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token operator">?.</span>lng<span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span> 




      
<span class="token keyword">let</span> cfg <span class="token operator">=</span> <span class="token punctuation">{</span>
        <span class="token comment">//热力图的配置项</span>
        <span class="token literal-property property">radius</span><span class="token operator">:</span> <span class="token number">0.5</span><span class="token punctuation">,</span> <span class="token comment">//设置每一个热力点的半径</span>
        <span class="token literal-property property">maxOpacity</span><span class="token operator">:</span> <span class="token number">0.9</span><span class="token punctuation">,</span> <span class="token comment">//设置最大的不透明度</span>
        <span class="token comment">// minOpacity: 0.3,     //设置最小的不透明度</span>
        <span class="token literal-property property">scaleRadius</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token comment">//设置热力点是否平滑过渡</span>
        <span class="token literal-property property">blur</span><span class="token operator">:</span> <span class="token number">0.95</span><span class="token punctuation">,</span> <span class="token comment">//系数越高，渐变越平滑，默认是0.85,</span>
        <span class="token comment">//滤镜系数将应用于所有热点数据。</span>
        <span class="token literal-property property">useLocalExtrema</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token comment">//使用局部极值</span>
        <span class="token literal-property property">latField</span><span class="token operator">:</span> <span class="token string">&quot;lat&quot;</span><span class="token punctuation">,</span> <span class="token comment">//维度</span>
    <span class="token punctuation">}</span>
<span class="token comment">// Leaflet官方文档中只给出了4种控件：Zoom、Attribution、Layers、Scale；它们都是继承自Control类，具体可以参考Control。</span>


<span class="token comment">//------------------------------------------------------------------</span>
<span class="token comment">// # 插件安装</span>
npm i leaflet<span class="token punctuation">.</span>heat
<span class="token comment">// # 引入热力图插件</span>
<span class="token keyword">import</span> <span class="token string">&#39;leaflet.heat&#39;</span>

<span class="token keyword">let</span> heatDataList <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
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


<span class="token comment">/*
此外，Leaflet.heat插件还提供了几个别的方法：

方法	说明
setOptions(options)	设置新的热力图heatmap属性并重新绘制
addLatLng(latlng)	向热力图heatmap动态添加数据并重新绘制
setLatLngs(latlngs)	重置热力图heatmap数据并重新绘制
redraw()	重绘热力图 

*/</span>


</code></pre></div>`,2),c=n(`<h3 id="vue-父子组件传值" tabindex="-1"><a class="header-anchor" href="#vue-父子组件传值" aria-hidden="true">#</a> vue 父子组件传值</h3><h3 id="组合式api" tabindex="-1"><a class="header-anchor" href="#组合式api" aria-hidden="true">#</a> 组合式API</h3><ul><li>父组件通过ref定义子组件实例，通过调用实例获得子组件的数据和方法</li></ul><div class="language-vue" data-ext="vue"><pre class="language-vue"><code>https://blog.csdn.net/qq_56263094/article/details/124576055
 

 <span class="token comment">&lt;!-- 父组件 app.vue --&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>itxst<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token comment">&lt;!-- 使用 ref  指令关联子组件 --&gt;</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>child</span> <span class="token attr-name">ref</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>childComp<span class="token punctuation">&quot;</span></span><span class="token punctuation">/&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>onTry<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>点击试一试<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> <span class="token punctuation">{</span> reactive<span class="token punctuation">,</span> ref <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;vue&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> child <span class="token keyword">from</span> <span class="token string">&quot;./child.vue&quot;</span><span class="token punctuation">;</span>
<span class="token comment">//定义子组件实例，名称要和上面的ref相同</span>
<span class="token keyword">const</span> childComp <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
 
<span class="token comment">//访问demo组件的方法或对象</span>
<span class="token keyword">const</span> <span class="token function-variable function">onTry</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token comment">//获取到子组件的 title 数据 </span>
  <span class="token keyword">let</span> msg <span class="token operator">=</span> childComp<span class="token punctuation">.</span>value<span class="token punctuation">.</span>state<span class="token punctuation">.</span>title<span class="token punctuation">;</span>
  <span class="token comment">//调用子组件的 play方法</span>
  childComp<span class="token punctuation">.</span>value<span class="token punctuation">.</span><span class="token function">play</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>

子组件通过defineExpose暴露对象和方法
xml复制代码<span class="token comment">&lt;!--子组件名称  child.vue --&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>itxst<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    {{ state.title }}
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> <span class="token punctuation">{</span> ref<span class="token punctuation">,</span> reactive <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;vue&quot;</span><span class="token punctuation">;</span>
<span class="token comment">//定义一个变量</span>
<span class="token keyword">const</span> state <span class="token operator">=</span> <span class="token function">reactive</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">&quot;www.itxst.com&quot;</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">//定义一个方法</span>
<span class="token keyword">const</span> <span class="token function-variable function">play</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  state<span class="token punctuation">.</span>title <span class="token operator">=</span> <span class="token string">&quot;你调用了子组件的方法&quot;</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
 
<span class="token comment">//暴露state和play方法</span>
<span class="token function">defineExpose</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  state<span class="token punctuation">,</span>
  play<span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><p>2，选项式API</p><div class="language-vue" data-ext="vue"><pre class="language-vue"><code><span class="token comment">&lt;!-- 父组件 app.vue --&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>itxst<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token comment">&lt;!-- 使用 ref  命令 --&gt;</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>child</span> <span class="token attr-name">ref</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>childComp<span class="token punctuation">&quot;</span></span><span class="token punctuation">/&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>onClick<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>点击试一试<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> child <span class="token keyword">from</span> <span class="token string">&quot;./child.vue&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&quot;app&quot;</span><span class="token punctuation">,</span>
  <span class="token comment">//注册组件</span>
  <span class="token literal-property property">components</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    child<span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">methods</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token function-variable function">onClick</span><span class="token operator">:</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token comment">//获取到 子组件的  数据</span>
      <span class="token keyword">let</span> msg <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>$refs<span class="token punctuation">.</span>childComp<span class="token punctuation">.</span>message<span class="token punctuation">;</span>
      <span class="token comment">//执行了子组件的 play方法</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span>$refs<span class="token punctuation">.</span>childComp<span class="token punctuation">.</span><span class="token function">play</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span> 

 <span class="token comment">&lt;!-- 子组件 child.vue --&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>itxst<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    {{ title }}
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">


<span class="token keyword">const</span> props <span class="token operator">=</span> <span class="token function">defineProps</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">foo</span><span class="token operator">:</span> String
<span class="token punctuation">}</span><span class="token punctuation">)</span>


<span class="token comment">//选项式默认当前实例是全部暴露</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&quot;demo&quot;</span><span class="token punctuation">,</span>
  <span class="token comment">//默认全部暴露 也可以通过expose控制那些需要暴露</span>
  <span class="token comment">//expose: [&#39;play&#39;],</span>
  <span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">&quot;www.itxst.com&quot;</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">methods</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token function-variable function">play</span><span class="token operator">:</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span>title <span class="token operator">=</span> <span class="token string">&quot;你调用了子组件的方法&quot;</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
 
</code></pre></div><p>https://juejin.cn/post/6844903856275456013</p><hr><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">var</span> map <span class="token operator">=</span> <span class="token constant">L</span><span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token string">&quot;map&quot;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
 
<span class="token literal-property property">center</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">31.59</span><span class="token punctuation">,</span> <span class="token number">120.29</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
 
<span class="token literal-property property">zoom</span><span class="token operator">:</span> <span class="token number">12</span><span class="token punctuation">,</span>
 
<span class="token literal-property property">zoomControl</span><span class="token operator">:</span> <span class="token boolean">true</span>
 
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><h3 id="多点创建" tabindex="-1"><a class="header-anchor" href="#多点创建" aria-hidden="true">#</a> 多点创建</h3><p>1.PruneCluster</p><h4 id="创建" tabindex="-1"><a class="header-anchor" href="#创建" aria-hidden="true">#</a> 创建</h4><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">var</span> pruneClusterView <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">PruneClusterForLeaflet</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">var</span> key <span class="token keyword">in</span> data<span class="token punctuation">)</span><span class="token punctuation">{</span>
   <span class="token keyword">var</span> point <span class="token operator">=</span> data<span class="token punctuation">[</span>key<span class="token punctuation">]</span><span class="token punctuation">;</span>
   pruneClusterView<span class="token punctuation">.</span><span class="token function">RegisterMarker</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">PruneCluster<span class="token punctuation">.</span>Marker</span><span class="token punctuation">(</span>point<span class="token punctuation">.</span>lat<span class="token punctuation">,</span> point<span class="token punctuation">.</span>lng<span class="token punctuation">,</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
      <span class="token literal-property property">singleMarkerMode</span><span class="token operator">:</span><span class="token boolean">true</span>
   <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
map<span class="token punctuation">.</span><span class="token function">addLayer</span><span class="token punctuation">(</span>pruneClusterView<span class="token punctuation">)</span><span class="token punctuation">;</span>
pruneClusterView <span class="token punctuation">.</span><span class="token function">ProcessView</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token number">1.2</span> 删除
<span class="token comment">// Remove all the markers</span>
pruneClusterView<span class="token punctuation">.</span><span class="token function">RemoveMarkers</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// Remove a list of markers</span>
pruneClusterView<span class="token punctuation">.</span><span class="token function">RemoveMarkers</span><span class="token punctuation">(</span><span class="token punctuation">[</span>markerA<span class="token punctuation">,</span>markerB<span class="token punctuation">,</span><span class="token operator">...</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token number">2</span><span class="token punctuation">.</span>markerClusterGroup
</code></pre></div><p>备注：markerCluster在数量多的时候初次创建会很卡，pruneClusterView不会很卡。</p><p>2.1创建</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">var</span> markerCluster <span class="token operator">=</span><span class="token keyword">new</span> <span class="token class-name">L<span class="token punctuation">.</span>markerClusterGroup</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
	<span class="token literal-property property">singleMarkerMode</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token comment">//true:单个marker显示聚合数字1,false:显示单个marker  </span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">var</span> markerList <span class="token operator">=</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">var</span> key <span class="token keyword">in</span> markers<span class="token punctuation">)</span><span class="token punctuation">{</span>
	<span class="token keyword">var</span> point <span class="token operator">=</span> markers<span class="token punctuation">[</span>key<span class="token punctuation">]</span><span class="token punctuation">;</span>
	<span class="token keyword">var</span> marker <span class="token operator">=</span> <span class="token constant">L</span><span class="token punctuation">.</span><span class="token function">marker</span><span class="token punctuation">(</span><span class="token constant">L</span><span class="token punctuation">.</span><span class="token function">latLng</span><span class="token punctuation">(</span>point<span class="token punctuation">.</span>lat<span class="token punctuation">,</span> point<span class="token punctuation">.</span>lon<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	markerList<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>marker<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
markerCluster<span class="token punctuation">.</span><span class="token function">addLayers</span><span class="token punctuation">(</span>markerList<span class="token punctuation">)</span><span class="token punctuation">;</span>
map<span class="token punctuation">.</span><span class="token function">addLayer</span><span class="token punctuation">(</span>markerCluster<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token number">2.2</span>删除
markerCluster<span class="token punctuation">.</span><span class="token function">clearLayers</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">//addLayer, removeLayer and clearLayers</span>
<span class="token number">2.3</span>其他
markerCluster<span class="token punctuation">.</span><span class="token function">refreshClusters</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
markerCluster<span class="token punctuation">.</span><span class="token function">refreshClusters</span><span class="token punctuation">(</span><span class="token punctuation">[</span>myMarker0<span class="token punctuation">,</span> myMarker33<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
markerCluster<span class="token punctuation">.</span><span class="token function">refreshClusters</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token literal-property property">id_0</span><span class="token operator">:</span> myMarker0<span class="token punctuation">,</span> <span class="token literal-property property">id_any</span><span class="token operator">:</span> myMarker33<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
markerCluster<span class="token punctuation">.</span><span class="token function">refreshClusters</span><span class="token punctuation">(</span>myLayerGroup<span class="token punctuation">)</span><span class="token punctuation">;</span>
markerCluster<span class="token punctuation">.</span><span class="token function">refreshClusters</span><span class="token punctuation">(</span>myMarker<span class="token punctuation">)</span><span class="token punctuation">;</span>
 
<span class="token comment">// Use as many times as required to update markers,</span>
<span class="token comment">// then call refreshClusters once finished.</span>
<span class="token keyword">for</span> <span class="token punctuation">(</span>i <span class="token keyword">in</span> markersSubArray<span class="token punctuation">)</span> <span class="token punctuation">{</span>
	markersSubArray<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">refreshIconOptions</span><span class="token punctuation">(</span>newOptionsMappingArray<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
markers<span class="token punctuation">.</span><span class="token function">refreshClusters</span><span class="token punctuation">(</span>markersSubArray<span class="token punctuation">)</span><span class="token punctuation">;</span>
 
<span class="token comment">// If updating only one marker, pass true to</span>
<span class="token comment">// refresh this marker&#39;s parent clusters right away.</span>
myMarker<span class="token punctuation">.</span><span class="token function">refreshIconOptions</span><span class="token punctuation">(</span>optionsMap<span class="token punctuation">,</span> <span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">;</span> 
 
</code></pre></div><h3 id="监听-props" tabindex="-1"><a class="header-anchor" href="#监听-props" aria-hidden="true">#</a> 监听 props</h3><div class="language-html" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> <span class="token punctuation">{</span> ref<span class="token punctuation">,</span> watch <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> props <span class="token operator">=</span> <span class="token function">defineProps</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">listData</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">type</span><span class="token operator">:</span> Array<span class="token punctuation">,</span>
        <span class="token keyword">default</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> childList <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
<span class="token function">watch</span><span class="token punctuation">(</span>
    <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> props<span class="token punctuation">.</span>listData<span class="token punctuation">,</span>
    <span class="token punctuation">(</span><span class="token parameter">newProps</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
        childList<span class="token punctuation">.</span>value <span class="token operator">=</span> newProps<span class="token punctuation">.</span>listData
    <span class="token punctuation">}</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>

</code></pre></div><h3 id="缩放层级" tabindex="-1"><a class="header-anchor" href="#缩放层级" aria-hidden="true">#</a> 缩放层级</h3><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 指定中心点</span>
<span class="token keyword">let</span> center <span class="token operator">=</span> <span class="token constant">L</span><span class="token punctuation">.</span><span class="token function">latLng</span><span class="token punctuation">(</span><span class="token number">30.68</span><span class="token punctuation">,</span> <span class="token number">113.98</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
 
<span class="token comment">// 方式 1：跳到指定中心点，不缩放级数。第二参数说明文档没有说是可选，但我测试可用且不报错</span>
<span class="token keyword">this</span><span class="token punctuation">.</span>map<span class="token punctuation">.</span><span class="token function">setView</span><span class="token punctuation">(</span>center<span class="token punctuation">)</span><span class="token punctuation">;</span> 
 
<span class="token comment">// 方式 2：跳到指定中心点，不缩放级数。这里第二个参数使用 map.getZoom() 获取当前缩放级数</span>
<span class="token keyword">this</span><span class="token punctuation">.</span>map<span class="token punctuation">.</span><span class="token function">setView</span><span class="token punctuation">(</span>center<span class="token punctuation">,</span> <span class="token keyword">this</span><span class="token punctuation">.</span>map<span class="token punctuation">.</span><span class="token function">getZoom</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> 
 
<span class="token comment">// 方式 3：跳到指定中心点和指定的缩放级数</span>
<span class="token keyword">this</span><span class="token punctuation">.</span>map<span class="token punctuation">.</span><span class="token function">setView</span><span class="token punctuation">(</span>center<span class="token punctuation">,</span> <span class="token number">8</span><span class="token punctuation">)</span><span class="token punctuation">;</span> 




<span class="token comment">// 缩放到指定级数</span>
<span class="token keyword">this</span><span class="token punctuation">.</span>map<span class="token punctuation">.</span><span class="token function">setZoom</span><span class="token punctuation">(</span><span class="token number">8</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
 
<span class="token comment">// 放大：每次调用默认放大 1 个级数</span>
<span class="token keyword">this</span><span class="token punctuation">.</span>map<span class="token punctuation">.</span><span class="token function">zoomIn</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// 放大：每次调用放大 3 个级数</span>
<span class="token keyword">this</span><span class="token punctuation">.</span>map<span class="token punctuation">.</span><span class="token function">zoomIn</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
 
<span class="token comment">// 缩小：每次调用默认缩小 1 个级数</span>
<span class="token keyword">this</span><span class="token punctuation">.</span>map<span class="token punctuation">.</span><span class="token function">zoomOut</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// 缩小：每次调用缩小 3 个级数</span>
<span class="token keyword">this</span><span class="token punctuation">.</span>map<span class="token punctuation">.</span><span class="token function">zoomOut</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
 
<span class="token comment">/*
panTo 和 flyTo
panTo：平移到指定中心点；
flyTo：与 panTo 相比，在平移时，多了一个可设置缩放级数的功能；
*/</span>


 <span class="token comment">// 中心点</span>
<span class="token keyword">let</span> center <span class="token operator">=</span> <span class="token constant">L</span><span class="token punctuation">.</span><span class="token function">latLng</span><span class="token punctuation">(</span><span class="token number">30.68</span><span class="token punctuation">,</span> <span class="token number">113.98</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
 
<span class="token comment">// 平移</span>
<span class="token keyword">this</span><span class="token punctuation">.</span>map<span class="token punctuation">.</span><span class="token function">panTo</span><span class="token punctuation">(</span>center<span class="token punctuation">)</span><span class="token punctuation">;</span>
 
<span class="token comment">// 平移，与上面的 panTo 功能一样</span>
<span class="token keyword">this</span><span class="token punctuation">.</span>map<span class="token punctuation">.</span><span class="token function">flyTo</span><span class="token punctuation">(</span>center<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// 平移，且缩放到指定级数</span>
<span class="token keyword">this</span><span class="token punctuation">.</span>map<span class="token punctuation">.</span><span class="token function">flyTo</span><span class="token punctuation">(</span>center<span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">;</span>



</code></pre></div><h3 id="图层添加与删除-两种方式" tabindex="-1"><a class="header-anchor" href="#图层添加与删除-两种方式" aria-hidden="true">#</a> 图层添加与删除(两种方式)</h3><ul><li>方式一 通过 L.Map 对象的方法添加或删除 L.Layer 对象。 <code>map.removeLayer(remark);</code></li><li>方式二 通过 L.Layer 对象的方法添加或删除 L.Map 对象中。</li></ul><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">removeLayer</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 通过 id 获取地图对象</span>
    <span class="token keyword">let</span> tdtLayerGroup <span class="token operator">=</span> map<span class="token punctuation">.</span>_layers<span class="token punctuation">[</span>leafletId<span class="token punctuation">]</span><span class="token punctuation">;</span>
    map<span class="token punctuation">.</span><span class="token function">removeLayer</span><span class="token punctuation">(</span>layer<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><h3 id="map添加监听事件" tabindex="-1"><a class="header-anchor" href="#map添加监听事件" aria-hidden="true">#</a> map添加监听事件</h3><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// String 类型，监听单个事件</span>
map<span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span><span class="token string">&#39;click&#39;</span><span class="token punctuation">,</span> onClick<span class="token punctuation">)</span><span class="token punctuation">;</span>
 
<span class="token comment">// String 类型，监听单个事件，多次添加，与方法 onClick 按照顺序执行</span>
map<span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span><span class="token string">&#39;click&#39;</span><span class="token punctuation">,</span> onClick02<span class="token punctuation">)</span><span class="token punctuation">;</span>
 
<span class="token comment">// String 类型，监听多个事件，使用同一个方法，可以用回调参数 e.type 判断当前是哪个事件</span>
map<span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span><span class="token string">&#39;click dblclick&#39;</span><span class="token punctuation">,</span> onClick<span class="token punctuation">)</span><span class="token punctuation">;</span>
 
<span class="token comment">// Object 类型，键值对方式，监听一个或多个事件</span>
map<span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">click</span><span class="token operator">:</span> onClick<span class="token punctuation">,</span>
    <span class="token literal-property property">dblclick</span><span class="token operator">:</span> ondblClick
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
 
</code></pre></div><h3 id="map删除监听事件" tabindex="-1"><a class="header-anchor" href="#map删除监听事件" aria-hidden="true">#</a> map删除监听事件</h3><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 删除 click 全部的监听事件</span>
map<span class="token punctuation">.</span><span class="token function">off</span><span class="token punctuation">(</span><span class="token string">&#39;click&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
 
<span class="token comment">// 删除 click 对应的 onClick 监听事件</span>
map<span class="token punctuation">.</span><span class="token function">off</span><span class="token punctuation">(</span><span class="token string">&#39;click&#39;</span><span class="token punctuation">,</span> onClick<span class="token punctuation">)</span><span class="token punctuation">;</span>
 
<span class="token comment">// 删除多个事件，用空格隔开</span>
map<span class="token punctuation">.</span><span class="token function">off</span><span class="token punctuation">(</span><span class="token string">&#39;click dblclick&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
 
<span class="token comment">// 键值对方式删除</span>
map<span class="token punctuation">.</span><span class="token function">off</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">click</span><span class="token operator">:</span> onClick<span class="token punctuation">,</span>
    <span class="token literal-property property">dblclick</span><span class="token operator">:</span> ondblClick
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
 
<span class="token comment">// 删除全部事件 慎用！！！</span>
map<span class="token punctuation">.</span><span class="token function">off</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><h3 id="markerclustergroup" tabindex="-1"><a class="header-anchor" href="#markerclustergroup" aria-hidden="true">#</a> markerClusterGroup</h3><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code>
  hospitalMarkers <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">L<span class="token punctuation">.</span>markerClusterGroup</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">singleMarkerMode</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">var</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> map<span class="token punctuation">.</span>value<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">var</span> info <span class="token operator">=</span> map<span class="token punctuation">.</span>value<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token keyword">var</span> title <span class="token operator">=</span> info<span class="token punctuation">.</span>address<span class="token punctuation">;</span>
    <span class="token keyword">var</span> marker <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>

    <span class="token keyword">let</span> popup <span class="token operator">=</span> <span class="token constant">L</span><span class="token punctuation">.</span><span class="token function">popup</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">setContent</span><span class="token punctuation">(</span>
      <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">&lt;div style=&quot;font-size: .25rem;color:blue; &quot;&gt;</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>title<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">,&#39;chery&#39;&lt;/div&gt;</span><span class="token template-punctuation string">\`</span></span>
    <span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">if</span> <span class="token punctuation">(</span>info<span class="token punctuation">.</span>areas_degree <span class="token operator">==</span> <span class="token string">&quot;hos&quot;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      marker <span class="token operator">=</span> <span class="token constant">L</span><span class="token punctuation">.</span><span class="token function">marker</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">L<span class="token punctuation">.</span>LatLng</span><span class="token punctuation">(</span>info<span class="token punctuation">.</span>lat<span class="token punctuation">,</span> info<span class="token punctuation">.</span>lon<span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">icon</span><span class="token operator">:</span> hospitalIcon<span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token comment">//绑定点击弹窗事件</span>
      marker<span class="token punctuation">.</span><span class="token function">bindPopup</span><span class="token punctuation">(</span>popup<span class="token punctuation">)</span><span class="token punctuation">;</span>

      marker
        <span class="token punctuation">.</span><span class="token function">bindTooltip</span><span class="token punctuation">(</span><span class="token constant">L</span><span class="token punctuation">.</span><span class="token function">tooltip</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">direction</span><span class="token operator">:</span> <span class="token string">&quot;top&quot;</span><span class="token punctuation">,</span> <span class="token literal-property property">offset</span><span class="token operator">:</span> <span class="token constant">L</span><span class="token punctuation">.</span><span class="token function">point</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token operator">-</span><span class="token number">10</span><span class="token punctuation">)</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
        <span class="token punctuation">.</span><span class="token function">setTooltipContent</span><span class="token punctuation">(</span>
          <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">&lt;div style=&#39;font-size: .25rem;height:.5rem; background-color: #577ed9;&#39;&gt;</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>title<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">&lt;/div&gt;</span><span class="token template-punctuation string">\`</span></span>
        <span class="token punctuation">)</span><span class="token punctuation">;</span>

      <span class="token comment">// if (info.areas_degree == &quot;hos&quot;) {</span>
      <span class="token comment">//   marker.addTo(map_dom);</span>
      <span class="token comment">// } else {</span>
      <span class="token comment">//   markers.addLayer(marker);</span>
      <span class="token comment">// }</span>

      hospitalMarkers<span class="token punctuation">.</span><span class="token function">addLayer</span><span class="token punctuation">(</span>marker<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
      <span class="token comment">/*
      marker = L.marker(new L.LatLng(info.lat, info.lon), {
        icon: myIcon,
      });
      */</span>
    <span class="token punctuation">}</span>
    <span class="token comment">/*
    //绑定点击弹窗事件
    marker.bindPopup(popup);

    marker
      .bindTooltip(L.tooltip({ direction: &quot;top&quot;, offset: L.point(0, -10) }))
      .setTooltipContent(
        \`&lt;div style=&#39;font-size: .25rem;height:.5rem; background-color: #577ed9;&#39;&gt;\${title}&lt;/div&gt;\`
      );
      if (info.areas_degree == &quot;hos&quot;) {
      marker.addTo(map_dom);
    } else {
      markers.addLayer(marker);
    }
    markers.addLayer(marker);
*/</span>
  <span class="token punctuation">}</span>
  <span class="token comment">//将markerClusterGroup添加到地图上</span>

  map_dom<span class="token punctuation">.</span><span class="token function">addLayer</span><span class="token punctuation">(</span>hospitalMarkers<span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token comment">// 左下角  距离缩放比例</span>
  <span class="token comment">//   L.control.scale({ maxWidth: 200, metric: true, imperial: false  }).addTo(map_dom)</span>

</code></pre></div><h3 id="geojson" tabindex="-1"><a class="header-anchor" href="#geojson" aria-hidden="true">#</a> geojson</h3><p>leaflet-geoJSON图层</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">var</span> geojsonFeature <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token string-property property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Feature&quot;</span><span class="token punctuation">,</span>
    <span class="token string-property property">&quot;properties&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token string-property property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Coors Field&quot;</span><span class="token punctuation">,</span>
        <span class="token string-property property">&quot;amenity&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Baseball Stadium&quot;</span><span class="token punctuation">,</span>
        <span class="token string-property property">&quot;popupContent&quot;</span><span class="token operator">:</span> <span class="token string">&quot;This is where the Rockies play!&quot;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token string-property property">&quot;geometry&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token string-property property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Point&quot;</span><span class="token punctuation">,</span>
        <span class="token string-property property">&quot;coordinates&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token operator">-</span><span class="token number">104.99404</span><span class="token punctuation">,</span> <span class="token number">39.75621</span><span class="token punctuation">]</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

 
<span class="token constant">L</span><span class="token punctuation">.</span><span class="token function">geoJSON</span><span class="token punctuation">(</span>geojsonFeature<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">addTo</span><span class="token punctuation">(</span>map<span class="token punctuation">)</span><span class="token punctuation">;</span>
 
<span class="token comment">// or ***************************************</span>
<span class="token keyword">var</span> myLayer <span class="token operator">=</span> <span class="token constant">L</span><span class="token punctuation">.</span><span class="token function">geoJSON</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">addTo</span><span class="token punctuation">(</span>map<span class="token punctuation">)</span><span class="token punctuation">;</span>
myLayer<span class="token punctuation">.</span><span class="token function">addData</span><span class="token punctuation">(</span>geojsonFeature<span class="token punctuation">)</span><span class="token punctuation">;</span>



<span class="token comment">// 还可以用geoJSON()的第二个参数options定义样式</span>
<span class="token constant">L</span><span class="token punctuation">.</span><span class="token function">geoJSON</span><span class="token punctuation">(</span>geojsonFeature<span class="token punctuation">,</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">style</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token string-property property">&quot;color&quot;</span><span class="token operator">:</span> <span class="token string">&quot;#ff7800&quot;</span><span class="token punctuation">,</span>
    <span class="token string-property property">&quot;weight&quot;</span><span class="token operator">:</span> <span class="token number">5</span><span class="token punctuation">,</span>
    <span class="token string-property property">&quot;opacity&quot;</span><span class="token operator">:</span> <span class="token number">0.65</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">addTo</span><span class="token punctuation">(</span>map<span class="token punctuation">)</span><span class="token punctuation">;</span>


<span class="token comment">// /用onEachFeature属性，在加入图层之前对feature进行调用处理，如绑定泡泡</span>


<span class="token keyword">function</span> <span class="token function">onEachFeature</span><span class="token punctuation">(</span><span class="token parameter">feature<span class="token punctuation">,</span> layer</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// does this feature have a property named popupContent?</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>feature<span class="token punctuation">.</span>properties <span class="token operator">&amp;&amp;</span> feature<span class="token punctuation">.</span>properties<span class="token punctuation">.</span>popupContent<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        layer<span class="token punctuation">.</span><span class="token function">bindPopup</span><span class="token punctuation">(</span>feature<span class="token punctuation">.</span>properties<span class="token punctuation">.</span>popupContent<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token constant">L</span><span class="token punctuation">.</span><span class="token function">geoJSON</span><span class="token punctuation">(</span>geojsonFeature<span class="token punctuation">,</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">style</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token string-property property">&quot;color&quot;</span><span class="token operator">:</span> <span class="token string">&quot;#ff7800&quot;</span><span class="token punctuation">,</span>
    <span class="token string-property property">&quot;weight&quot;</span><span class="token operator">:</span> <span class="token number">5</span><span class="token punctuation">,</span>
    <span class="token string-property property">&quot;opacity&quot;</span><span class="token operator">:</span> <span class="token number">0.65</span>
	<span class="token punctuation">}</span><span class="token punctuation">,</span>
	<span class="token literal-property property">onEachFeature</span><span class="token operator">:</span>onEachFeature
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">addTo</span><span class="token punctuation">(</span>map<span class="token punctuation">)</span><span class="token punctuation">;</span>

</code></pre></div><h3 id="wms" tabindex="-1"><a class="header-anchor" href="#wms" aria-hidden="true">#</a> WMS</h3><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code>ArcGIS <span class="token constant">WMS</span>
<span class="token keyword">let</span> layer <span class="token operator">=</span> <span class="token constant">L</span><span class="token punctuation">.</span>tileLayer<span class="token punctuation">.</span><span class="token function">wms</span><span class="token punctuation">(</span><span class="token string">&#39;http://127.0.0.1:6080/arcgis/services/hbbzFloder/HBBZ/MapServer/WmsServer&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">layers</span><span class="token operator">:</span> <span class="token string">&#39;10,11,12,13,14,15,35,36,37,38,39,40&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">format</span><span class="token operator">:</span> <span class="token string">&quot;image/png&quot;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">transparent</span><span class="token operator">:</span> <span class="token boolean">true</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">addTo</span><span class="token punctuation">(</span>map<span class="token punctuation">)</span><span class="token punctuation">;</span>
 GeoServer <span class="token constant">WMS</span>
<span class="token keyword">let</span> layer <span class="token operator">=</span> <span class="token constant">L</span><span class="token punctuation">.</span>tileLayer<span class="token punctuation">.</span><span class="token function">wms</span><span class="token punctuation">(</span><span class="token string">&#39;http://127.0.0.1:8181/geoserver/topp/wms&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">layers</span><span class="token operator">:</span> <span class="token string">&#39;states,tasmania_state_boundaries&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">format</span><span class="token operator">:</span> <span class="token string">&quot;image/png&quot;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">transparent</span><span class="token operator">:</span> <span class="token boolean">true</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">addTo</span><span class="token punctuation">(</span>map<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><h3 id="图层创建" tabindex="-1"><a class="header-anchor" href="#图层创建" aria-hidden="true">#</a> 图层创建</h3><ul><li>在实际项目中地图数据分为不同类型，这时如果把所有数据同时加载到地图上来进行操作会带来各种问题，</li><li>所以此时需要利用<strong>L.featureGroup</strong>方法创建不同的图层，用来加载不同类型的数据，以方便操作，具体方法如下：</li></ul><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code>
<span class="token comment">// featureGroup图层创建</span>



<span class="token keyword">var</span> _viewSpotLayer<span class="token operator">=</span><span class="token keyword">new</span> <span class="token class-name">L<span class="token punctuation">.</span>featureGroup</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
_map<span class="token punctuation">.</span><span class="token function">addLayer</span><span class="token punctuation">(</span>_viewSpotLayer<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// 如需要清除图层上的数据集合，使用内置方法即可：</span>
_viewSpotLayer<span class="token punctuation">.</span><span class="token function">clearLayers</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
 



<span class="token comment">//  --------------------------示例：</span>



<span class="token keyword">var</span> pointFeature <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">L<span class="token punctuation">.</span>marker</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">39.905</span><span class="token punctuation">,</span><span class="token number">116.399</span><span class="token punctuation">]</span><span class="token punctuation">,</span><span class="token punctuation">{</span> <span class="token literal-property property">icon</span><span class="token operator">:</span> viewIcon<span class="token punctuation">,</span><span class="token literal-property property">title</span><span class="token operator">:</span><span class="token string">&quot;故宫&quot;</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">bindLabel</span><span class="token punctuation">(</span><span class="token string">&quot;故宫&quot;</span><span class="token punctuation">,</span><span class="token punctuation">{</span><span class="token literal-property property">noHide</span><span class="token operator">:</span><span class="token boolean">true</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">addTo</span><span class="token punctuation">(</span>_viewSpotLayer<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// 参数说明：</span>
icon             <span class="token comment">//用于渲染标记的图标实例。使用L.icon创建，下面会有详细讲解</span>
title            <span class="token comment">//鼠标悬停时提示文本</span>
alt              <span class="token comment">//图像文本</span>
riseOnHover      <span class="token comment">//true/false(默认)，为true时当您将鼠标悬停在其上时，标记将会显示在其他标记之上。</span>
 
方法说明：
<span class="token punctuation">.</span><span class="token function">addTo</span><span class="token punctuation">(</span>layer<span class="token punctuation">)</span>    <span class="token comment">//添加到指定图层当中</span>
<span class="token punctuation">.</span><span class="token function">bindLabel</span><span class="token punctuation">(</span><span class="token punctuation">)</span>     <span class="token comment">//给marker绑定label，使用方法及参数下面详解</span>
 
事件说明：
marker支持各种鼠标事件，使用方法为
marker<span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span><span class="token string">&quot;event&quot;</span><span class="token punctuation">,</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token comment">//do something</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

</code></pre></div><ul><li><strong>如果通过ajax请求加载多个marker</strong></li><li>并且都需要添加点击事件，请使用 **【封闭空间】**循环加载数据点</li></ul><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 使用示例：</span>
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
</code></pre></div><h4 id="https-openwhatevermap-xyz-3-39-64-210-50-多图层-各种-xyz-瓦片" tabindex="-1"><a class="header-anchor" href="#https-openwhatevermap-xyz-3-39-64-210-50-多图层-各种-xyz-瓦片" aria-hidden="true">#</a> https://openwhatevermap.xyz/#3/39.64/210.50 (多图层 各种 xyz 瓦片)</h4><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code>  leaflet有两种类型的图层：

（<span class="token number">1</span>）base layer：互斥的图层（在地图上同一时间只能有一个图层可见），比如tile layers；

（<span class="token number">2</span>）overlayers：在base layer之上放置的其他东西。
<span class="token keyword">var</span> baseLayers <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token string-property property">&quot;Mapbox&quot;</span><span class="token operator">:</span> mapbox<span class="token punctuation">,</span>
    <span class="token string-property property">&quot;OpenStreetMap&quot;</span><span class="token operator">:</span> osm
<span class="token punctuation">}</span><span class="token punctuation">;</span>
 
<span class="token keyword">var</span> overlays <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token string-property property">&quot;Marker&quot;</span><span class="token operator">:</span> marker<span class="token punctuation">,</span>
    <span class="token string-property property">&quot;Roads&quot;</span><span class="token operator">:</span> roadsLayer
<span class="token punctuation">}</span><span class="token punctuation">;</span>
 
<span class="token constant">L</span><span class="token punctuation">.</span>control<span class="token punctuation">.</span><span class="token function">layers</span><span class="token punctuation">(</span>baseLayers<span class="token punctuation">,</span> overlays<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">addTo</span><span class="token punctuation">(</span>map<span class="token punctuation">)</span><span class="token punctuation">;</span>



<span class="token comment">// ls 切换图层工具</span>
<span class="token keyword">var</span> baseLayers <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token string-property property">&#39;Sputnik&#39;</span><span class="token operator">:</span> <span class="token constant">L</span><span class="token punctuation">.</span><span class="token function">tileLayer</span><span class="token punctuation">(</span><span class="token string">&#39;http://{s}.tiles.maps.sputnik.ru/{z}/{x}/{y}.png&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">maxZoom</span><span class="token operator">:</span> <span class="token number">18</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
 
    <span class="token string-property property">&quot;CartoDB Positron&quot;</span><span class="token operator">:</span> <span class="token constant">L</span><span class="token punctuation">.</span><span class="token function">tileLayer</span><span class="token punctuation">(</span><span class="token string">&#39;http://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">maxZoom</span><span class="token operator">:</span> <span class="token number">18</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
 
    <span class="token string-property property">&quot;OSM&quot;</span><span class="token operator">:</span> <span class="token constant">L</span><span class="token punctuation">.</span><span class="token function">tileLayer</span><span class="token punctuation">(</span><span class="token string">&#39;http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">maxZoom</span><span class="token operator">:</span> <span class="token number">18</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">addTo</span><span class="token punctuation">(</span>map<span class="token punctuation">)</span><span class="token punctuation">,</span>
 
    <span class="token string-property property">&quot;OpenTopoMap&quot;</span><span class="token operator">:</span> <span class="token constant">L</span><span class="token punctuation">.</span><span class="token function">tileLayer</span><span class="token punctuation">(</span><span class="token string">&#39;https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">maxZoom</span><span class="token operator">:</span> <span class="token number">18</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>


<span class="token keyword">var</span> layerControl <span class="token operator">=</span> <span class="token constant">L</span><span class="token punctuation">.</span>control<span class="token punctuation">.</span><span class="token function">layers</span><span class="token punctuation">(</span>baseLayers<span class="token punctuation">,</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">position</span><span class="token operator">:</span> <span class="token string">&#39;topleft&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">collapsed</span><span class="token operator">:</span> <span class="token boolean">true</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">addTo</span><span class="token punctuation">(</span>map<span class="token punctuation">)</span>
</code></pre></div><h3 id="绘制的多个图形组合成一个整体通过-layergroup-作为-overlayer-添加上去" tabindex="-1"><a class="header-anchor" href="#绘制的多个图形组合成一个整体通过-layergroup-作为-overlayer-添加上去" aria-hidden="true">#</a> 绘制的多个图形组合成一个整体通过 layerGroup 作为 overlayer 添加上去</h3><ul><li><code>https://blog.csdn.net/sinat_36226553/article/details/107287753</code> 加载各种服务</li><li>加载WMTS服务加载WMS服务 加载TMS服务 加载Geojson数据 <ul><li>注：如果手上有shp数据，可以通过mapshaper转换得到geojson数据</li><li>leaflet本身并不支持WMTS服务，需要借助 leaflet-tilelayer-wmts 插件实现</li></ul></li></ul><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">var</span> bj <span class="token operator">=</span> <span class="token constant">L</span><span class="token punctuation">.</span><span class="token function">marker</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">39.92</span><span class="token punctuation">,</span><span class="token number">116.46</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">bindPopup</span><span class="token punctuation">(</span><span class="token string">&#39;这里是北京&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    sh <span class="token operator">=</span> <span class="token constant">L</span><span class="token punctuation">.</span><span class="token function">marker</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">31.213</span><span class="token punctuation">,</span><span class="token number">121.445</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">bindPopup</span><span class="token punctuation">(</span><span class="token string">&#39;这里是上海&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    gz <span class="token operator">=</span> <span class="token constant">L</span><span class="token punctuation">.</span><span class="token function">marker</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">23.16</span><span class="token punctuation">,</span><span class="token number">113.23</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">bindPopup</span><span class="token punctuation">(</span><span class="token string">&#39;这里是广州&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">var</span> cities <span class="token operator">=</span> <span class="token constant">L</span><span class="token punctuation">.</span><span class="token function">layerGroup</span><span class="token punctuation">(</span><span class="token punctuation">[</span>bj<span class="token punctuation">,</span> sh<span class="token punctuation">,</span> gz<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">addTo</span><span class="token punctuation">(</span>map<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**  三方库地址：https://github.com/lin-123/leaflet.migration
 * 中心点向外点位辐射分离
 * <span class="token keyword">@author</span> Lou
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span> Array <span class="token punctuation">}</span></span> <span class="token parameter">arr</span> 点位数据(一个中心点) 
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span> String <span class="token punctuation">}</span></span> <span class="token parameter">color</span> 点位颜色
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span> String <span class="token punctuation">}</span></span> <span class="token parameter">centerName</span> 中心点名称
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span> String <span class="token punctuation">}</span></span> <span class="token parameter">centerNameProp</span> 中心点对应的属性
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span> Number <span class="token punctuation">}</span></span> <span class="token parameter">value</span> 点位数值大小
 * <span class="token keyword">@returns</span> <span class="token class-name"><span class="token punctuation">{</span> Array <span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">classifyPointData</span><span class="token punctuation">(</span>arr<span class="token punctuation">,</span> color <span class="token operator">=</span> <span class="token string">&quot;rgb(101, 169, 249)&quot;</span><span class="token punctuation">,</span> centerName<span class="token punctuation">,</span> centerNameProp<span class="token punctuation">,</span> value <span class="token operator">=</span> <span class="token number">6</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token punctuation">{</span> <span class="token literal-property property">jd</span><span class="token operator">:</span> centerJD<span class="token punctuation">,</span> <span class="token literal-property property">wd</span><span class="token operator">:</span> centerWD <span class="token punctuation">}</span> <span class="token operator">=</span> arr<span class="token punctuation">.</span><span class="token function">find</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">i</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> i<span class="token punctuation">[</span>centerNameProp<span class="token punctuation">]</span> <span class="token operator">===</span> centerName<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">return</span> arr<span class="token punctuation">.</span><span class="token function">filter</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">i</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> i<span class="token punctuation">.</span>name <span class="token operator">!==</span> centerName<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span> jd<span class="token punctuation">,</span> wd <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">(</span><span class="token punctuation">{</span>
      color<span class="token punctuation">,</span>
      <span class="token literal-property property">from</span><span class="token operator">:</span> <span class="token punctuation">[</span>centerJD<span class="token punctuation">,</span> centerWD<span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token literal-property property">to</span><span class="token operator">:</span> <span class="token punctuation">[</span>jd<span class="token punctuation">,</span> wd<span class="token punctuation">]</span><span class="token punctuation">,</span>
      value<span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// 飞线的配置项(可以直接看github上的文档)</span>
migrationOptions <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">marker</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">radius</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">10</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token literal-property property">pulse</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
    <span class="token literal-property property">textVisible</span><span class="token operator">:</span> <span class="token boolean">false</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">line</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">width</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
    <span class="token literal-property property">order</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
    <span class="token literal-property property">icon</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">&#39;arrow&#39;</span><span class="token punctuation">,</span>
      <span class="token literal-property property">imgUrl</span><span class="token operator">:</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">,</span>
      <span class="token literal-property property">size</span><span class="token operator">:</span> <span class="token number">10</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>

<span class="token comment">// 地图上的绘制</span>
<span class="token function">initPoint</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span>markerLayer <span class="token operator">&amp;&amp;</span> <span class="token keyword">this</span><span class="token punctuation">.</span>map<span class="token punctuation">.</span><span class="token function">removeLayer</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>markerLayer<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">const</span> migrationData <span class="token operator">=</span> <span class="token function">classifyPointData</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>pointList<span class="token punctuation">,</span> <span class="token string">&quot;rgb(101, 169, 249)&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;分指挥部&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;name&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span>migrationGymLayer <span class="token operator">=</span> <span class="token constant">L</span><span class="token punctuation">.</span><span class="token function">migrationLayer</span><span class="token punctuation">(</span>migrationData<span class="token punctuation">,</span> migrationOptions<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span>migrationGymLayer<span class="token punctuation">.</span><span class="token function">addTo</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>map<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">let</span> markericon <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
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
<span class="token punctuation">}</span><span class="token punctuation">,</span>

</code></pre></div>`,47);function u(l,k){return a(),t("div",null,[e,p(" Vue-CLI and Leaflet: 点聚合 Leaflet.markercluster "),c])}const r=s(o,[["render",u],["__file","leaflet_use.html.vue"]]);export{r as default};
