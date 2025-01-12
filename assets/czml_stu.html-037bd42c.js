import{_ as t,M as p,p as o,q as e,R as n,t as s,N as c,a1 as u}from"./framework-d81ad7e5.js";const l={},k=n("li",null,[n("p",null,"可以通过czml-writer来生成CZML，这个程序维护在Github上")],-1),r=n("li",null,[n("p",null,"CZML 是一种 JSON 格式的字符串，用于描述与时间有关的动画场景，CZML 包含点、线、地标、模型、和其他的一些图形元素，并指明了这些元素如何随时间而变化。")],-1),i=n("strong",null,"格式",-1),m={href:"https://www.cnblogs.com/laixiangran/p/4998529.html",target:"_blank",rel:"noopener noreferrer"},q=n("li",null,[n("p",null,"第一个packet代表了cesium场景（cesium时间轴的范围，当前时刻，倍速等信息）")],-1),y=n("li",null,[n("p",null,"之外，其他的packet都可以理解为描述某一时间范围内的entity的行为。")],-1),d=n("li",null,[n("p",null,"一个czml文件当中至少有一个packet，也即第一个描述场景的packet，")],-1),g=n("li",null,[n("p",null,[n("strong",null,"每一个id不能相同"),s("，否则只显示相同id中最后一个entity，但是对于 不同czml文件中可以使用相同id。")])],-1),b=u(`<div class="language-json" data-ext="json"><pre class="language-json"><code>
let czml=<span class="token punctuation">[</span>
     <span class="token comment">//packet1，id一定为document，否则会报错，这里定义的是整个显示场景的信息</span>
    <span class="token punctuation">{</span>
        <span class="token property">&quot;id&quot;</span><span class="token operator">:</span> <span class="token string">&quot;document&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;clock&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token property">&quot;interval&quot;</span><span class="token operator">:</span> <span class="token string">&quot;2022-01-01T10:10:10+0800/2022-01-05T10:10:10+0800&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;currentTime&quot;</span><span class="token operator">:</span> <span class="token string">&quot;2022-01-02T02:10:10&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;step&quot;</span><span class="token operator">:</span> <span class="token string">&quot;SYSTEM_CLOCK_MULTIPLIER&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;range&quot;</span><span class="token operator">:</span> <span class="token string">&quot;LOOP_STOP&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;multiplier&quot;</span><span class="token operator">:</span> <span class="token number">5</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token property">&quot;version&quot;</span><span class="token operator">:</span> <span class="token string">&quot;1.0&quot;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token comment">//packet two</span>
    <span class="token punctuation">{</span>
		<span class="token property">&quot;id&quot;</span><span class="token operator">:</span><span class="token string">&quot;GroundControlStation&quot;</span>
		<span class="token property">&quot;position&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span><span class="token property">&quot;cartographicDegrees&quot;</span><span class="token operator">:</span><span class="token punctuation">[</span><span class="token number">-75.5</span><span class="token punctuation">,</span><span class="token number">40.0</span><span class="token punctuation">,</span><span class="token number">0.0</span><span class="token punctuation">]</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
		<span class="token property">&quot;point&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span>
		<span class="token property">&quot;color&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span><span class="token property">&quot;rgba&quot;</span><span class="token operator">:</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">,</span><span class="token number">0</span><span class="token punctuation">,</span><span class="token number">255</span><span class="token punctuation">,</span><span class="token number">255</span><span class="token punctuation">]</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span><span class="token punctuation">,</span>
	<span class="token comment">// packet three</span>
	<span class="token punctuation">{</span>
		<span class="token property">&quot;id&quot;</span><span class="token operator">:</span><span class="token string">&quot;PredatorUAV&quot;</span><span class="token punctuation">,</span>
		<span class="token comment">// ...</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">]</span>


    <span class="token property">&quot;path&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span>
      <span class="token property">&quot;show&quot;</span><span class="token operator">:</span><span class="token punctuation">[</span>
        <span class="token punctuation">{</span>
          <span class="token property">&quot;interval&quot;</span><span class="token operator">:</span><span class="token string">&quot;2012-03-15T10:00:00Z/2012-03-16T10:00:00Z&quot;</span><span class="token punctuation">,</span>
          <span class="token property">&quot;boolean&quot;</span><span class="token operator">:</span><span class="token boolean">true</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token property">&quot;width&quot;</span><span class="token operator">:</span><span class="token number">1</span><span class="token punctuation">,</span>
      <span class="token property">&quot;material&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span>
        <span class="token property">&quot;solidColor&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span>
          <span class="token property">&quot;color&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span>
            <span class="token property">&quot;rgba&quot;</span><span class="token operator">:</span><span class="token punctuation">[</span>
              <span class="token number">0</span><span class="token punctuation">,</span><span class="token number">255</span><span class="token punctuation">,</span><span class="token number">0</span><span class="token punctuation">,</span><span class="token number">255</span>
            <span class="token punctuation">]</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token property">&quot;resolution&quot;</span><span class="token operator">:</span><span class="token number">120</span><span class="token punctuation">,</span>
    <span class="token comment">//   提前量</span>
      <span class="token property">&quot;leadTime&quot;</span><span class="token operator">:</span><span class="token punctuation">[</span>
        <span class="token punctuation">{</span>
          <span class="token property">&quot;interval&quot;</span><span class="token operator">:</span><span class="token string">&quot;2012-03-15T10:00:00Z/2012-03-15T10:39:30.5752243210009Z&quot;</span><span class="token punctuation">,</span>
          <span class="token property">&quot;epoch&quot;</span><span class="token operator">:</span><span class="token string">&quot;2012-03-15T10:00:00Z&quot;</span><span class="token punctuation">,</span>
          <span class="token property">&quot;number&quot;</span><span class="token operator">:</span><span class="token punctuation">[</span>
            <span class="token number">0</span><span class="token punctuation">,</span><span class="token number">5903.376977238004</span><span class="token punctuation">,</span>
            <span class="token number">5903.376977238004</span><span class="token punctuation">,</span><span class="token number">0</span>
          <span class="token punctuation">]</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
          
        <span class="token punctuation">{</span>
          <span class="token property">&quot;interval&quot;</span><span class="token operator">:</span><span class="token string">&quot;2012-03-16T08:21:36.5644517090113Z/2012-03-16T10:00:00Z&quot;</span><span class="token punctuation">,</span>
          <span class="token property">&quot;epoch&quot;</span><span class="token operator">:</span><span class="token string">&quot;2012-03-16T08:21:36.5644517090113Z&quot;</span><span class="token punctuation">,</span>
          <span class="token property">&quot;number&quot;</span><span class="token operator">:</span><span class="token punctuation">[</span>
            <span class="token number">0</span><span class="token punctuation">,</span><span class="token number">5903.435548290989</span><span class="token punctuation">,</span>
            <span class="token number">5903.435548290989</span><span class="token punctuation">,</span><span class="token number">0</span>
          <span class="token punctuation">]</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">]</span><span class="token punctuation">,</span>

    <span class="token comment">//   后尾部</span>
      <span class="token property">&quot;trailTime&quot;</span><span class="token operator">:</span><span class="token punctuation">[</span>
        <span class="token punctuation">{</span>
          <span class="token property">&quot;interval&quot;</span><span class="token operator">:</span><span class="token string">&quot;2012-03-15T10:00:00Z/2012-03-15T10:39:30.5752243210009Z&quot;</span><span class="token punctuation">,</span>
          <span class="token property">&quot;epoch&quot;</span><span class="token operator">:</span><span class="token string">&quot;2012-03-15T10:00:00Z&quot;</span><span class="token punctuation">,</span>
          <span class="token property">&quot;number&quot;</span><span class="token operator">:</span><span class="token punctuation">[</span>
            <span class="token number">0</span><span class="token punctuation">,</span><span class="token number">0</span><span class="token punctuation">,</span>
            <span class="token number">5903.376977238004</span><span class="token punctuation">,</span><span class="token number">5903.376977238004</span>
          <span class="token punctuation">]</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
          <span class="token property">&quot;interval&quot;</span><span class="token operator">:</span><span class="token string">&quot;2012-03-15T10:39:30.5752243210009Z/2012-03-15T12:17:53.9522015590046Z&quot;</span><span class="token punctuation">,</span>
          <span class="token property">&quot;epoch&quot;</span><span class="token operator">:</span><span class="token string">&quot;2012-03-15T10:39:30.5752243210009Z&quot;</span><span class="token punctuation">,</span>
          <span class="token property">&quot;number&quot;</span><span class="token operator">:</span><span class="token punctuation">[</span>
            <span class="token number">0</span><span class="token punctuation">,</span><span class="token number">0</span><span class="token punctuation">,</span>
            <span class="token number">5903.376977238004</span><span class="token punctuation">,</span><span class="token number">5903.376977238004</span>
          <span class="token punctuation">]</span>
        <span class="token punctuation">}</span> 
         
      <span class="token punctuation">]</span>
</code></pre></div><h3 id="czml文件加载" tabindex="-1"><a class="header-anchor" href="#czml文件加载" aria-hidden="true">#</a> CZML文件加载</h3><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">let</span> czmldata <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Cesium<span class="token punctuation">.</span>CzmlDataSource</span><span class="token punctuation">(</span>id<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">load</span><span class="token punctuation">(</span>czml<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">//id 为 CzmlDataSource对象 id</span>
<span class="token comment">//或者直接写做 let czmldata = Cesium.CzmlDataSource.load(czml);</span>
<span class="token keyword">let</span> temp<span class="token punctuation">;</span>
cesium<span class="token punctuation">.</span>viewer<span class="token punctuation">.</span>dataSources<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>czmldata<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">ds</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
     temp <span class="token operator">=</span> ds<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">//或者 cesium.viewer.dataSources.add(czmldata)</span>
</code></pre></div><ul><li>最终czml文件最终成为了CzmlDataSource对象，被加载到viewer的datasources中。</li><li>ds是一个CzmlDataSource对象，通过<code>ds.entities.getById(id)</code>，可以获取到czml文件当中定义的entity，此时可以方便的对entity进行一些操作，比如<code>viewer.trackEntity = ds.entities.getById(&quot;model_id&quot;)</code>，又或者可以将CzmlDataSource对象保存下来，以便后续进行一些操作。 <strong>ds一定要赋值给已经定义好的对象，故先声明对象，而后进行赋值</strong>。 注意：当加载多个czml文件时，场景信息会以最后一个czml文件定义的为准。</li></ul><h3 id="czml文件移除" tabindex="-1"><a class="header-anchor" href="#czml文件移除" aria-hidden="true">#</a> CZML文件移除</h3><p>也即CzmlDataSource对象的移除，写做：</p><p><code>cesium.viewer.dataSources.remove(temp,isDestroy)</code></p><p>temp也即刚才保存的CzmlDataSource对象，这样可以将刚才添加的场景信息、entity信息都移除掉，isDestroy是一个布尔对象，代表是否要销毁CzmlDataSource对象。如果只移除某一个entity的信息，可以写做：</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">let</span> entity <span class="token operator">=</span> temp<span class="token punctuation">.</span>entities<span class="token punctuation">.</span><span class="token function">getById</span><span class="token punctuation">(</span><span class="token string">&quot;GroundControlStation&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">if</span><span class="token punctuation">(</span>entity<span class="token punctuation">)</span><span class="token punctuation">{</span>
   temp<span class="token punctuation">.</span>entities<span class="token punctuation">.</span><span class="token function">remove</span><span class="token punctuation">(</span>entity<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
</code></pre></div><p>如果删除viewer中的全部dataSources对象，可以写做：</p><p><code>cesium.viewer.dataSources.removeAll(true)</code></p><p>true代表销毁对象</p><h3 id="模型的加载" tabindex="-1"><a class="header-anchor" href="#模型的加载" aria-hidden="true">#</a> 模型的加载</h3><ul><li>在CZML文件中想要加载模型，需要先将其他格式的模型文件转换成gltf文件，然后通过</li></ul><div class="language-json" data-ext="json"><pre class="language-json"><code>            <span class="token property">&quot;model&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                <span class="token property">&quot;show&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
                <span class="token property">&quot;gltf&quot;</span><span class="token operator">:</span> <span class="token string">&quot;./111.gltf&quot;</span><span class="token punctuation">,</span>
                <span class="token property">&quot;minimumPixelSize&quot;</span><span class="token operator">:</span> <span class="token number">99</span><span class="token punctuation">,</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
</code></pre></div><p>进行加载，minimumPixelSize表示显示的最小像素点，有了这个参数的保证，可以在缩小地球时也保证模型能够看清楚。</p><h3 id="轨迹的显示" tabindex="-1"><a class="header-anchor" href="#轨迹的显示" aria-hidden="true">#</a> 轨迹的显示</h3><p>在场景中加载卫星一般情况下无法满足我们的使用要求，还需要卫星运动起来，并且显示其运行轨迹，在CZML文件中，一般可以用如下格式的文件来表示卫星和其轨迹的显示：</p><div class="language-json" data-ext="json"><pre class="language-json"><code> 
  <span class="token punctuation">{</span>
      <span class="token property">&quot;id&quot;</span><span class="token operator">:</span> <span class="token string">&quot;document&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;clock&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token property">&quot;interval&quot;</span><span class="token operator">:</span> <span class="token string">&quot;2022-03-22T16:08:00+08:00/2022-03-23T16:08:00+08:00&quot;</span><span class="token punctuation">,</span>
          <span class="token property">&quot;currentTime&quot;</span><span class="token operator">:</span> <span class="token string">&quot;2022-03-22T16:08:00+08:00&quot;</span><span class="token punctuation">,</span>
          <span class="token property">&quot;step&quot;</span><span class="token operator">:</span> <span class="token string">&quot;SYSTEM_CLOCK_MULTIPLIER&quot;</span><span class="token punctuation">,</span>
          <span class="token property">&quot;range&quot;</span><span class="token operator">:</span> <span class="token string">&quot;LOOP_STOP&quot;</span><span class="token punctuation">,</span>
          <span class="token property">&quot;multiplier&quot;</span><span class="token operator">:</span> <span class="token number">60</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token property">&quot;version&quot;</span><span class="token operator">:</span> <span class="token string">&quot;1.0&quot;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span>
      <span class="token property">&quot;label&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token property">&quot;outlineColor&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
              <span class="token property">&quot;rgba&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
                  <span class="token number">0</span><span class="token punctuation">,</span>
                  <span class="token number">0</span><span class="token punctuation">,</span>
                  <span class="token number">0</span><span class="token punctuation">,</span>
                  <span class="token number">255</span>
              <span class="token punctuation">]</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token property">&quot;horizontalOrigin&quot;</span><span class="token operator">:</span> <span class="token string">&quot;LEFT&quot;</span><span class="token punctuation">,</span>
          <span class="token property">&quot;text&quot;</span><span class="token operator">:</span> <span class="token string">&quot;ppCOSMOS 2426 (717)&quot;</span><span class="token punctuation">,</span>
          <span class="token property">&quot;outlineWidth&quot;</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
          &quot;
          &quot;<span class="token operator">:</span> <span class="token punctuation">{</span>
              <span class="token property">&quot;cartesian2&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
                  <span class="token number">12</span><span class="token punctuation">,</span>
                  <span class="token number">0</span>
              <span class="token punctuation">]</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token property">&quot;fillColor&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
              <span class="token property">&quot;rgba&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
                  <span class="token string">&quot;213&quot;</span><span class="token punctuation">,</span>
                  <span class="token string">&quot;255&quot;</span><span class="token punctuation">,</span>
                  <span class="token string">&quot;0&quot;</span><span class="token punctuation">,</span>
                  <span class="token number">255</span>
              <span class="token punctuation">]</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token property">&quot;font&quot;</span><span class="token operator">:</span> <span class="token string">&quot;11pt Lucida Console&quot;</span><span class="token punctuation">,</span>
          <span class="token property">&quot;show&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token property">&quot;id&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Satellite/ppCOSMOS 2426 (717)&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;description&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Orbit of Satellite:  ppCOSMOS 2426 (717)&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;position&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token property">&quot;interpolationAlgorithm&quot;</span><span class="token operator">:</span> <span class="token string">&quot;LAGRANGE&quot;</span><span class="token punctuation">,</span>
          <span class="token property">&quot;referenceFrame&quot;</span><span class="token operator">:</span> <span class="token string">&quot;INERTIAL&quot;</span><span class="token punctuation">,</span>
          <span class="token property">&quot;interpolationDegree&quot;</span><span class="token operator">:</span> <span class="token number">5</span><span class="token punctuation">,</span>

    <span class="token comment">// &quot;interpolationAlgorithm&quot;: &quot;LAGRANGE&quot;,  //插值算法为LAGRANGE，还有HERMITE,GEODESIC</span>

<span class="token comment">//         &quot;interpolationDegree&quot;: 5 //1为线性插值，2为平方插值</span>

           <span class="token property">&quot;epoch&quot;</span><span class="token operator">:</span> <span class="token string">&quot;2012-04-30T12:00Z&quot;</span><span class="token punctuation">,</span> <span class="token comment">//表示时间起点为2012-04-30T12:00：00 </span>
           
        <span class="token property">&quot;cartesian&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>  
            <span class="token number">0.0</span><span class="token punctuation">,</span> <span class="token number">1.0</span><span class="token punctuation">,</span> <span class="token number">2.0</span><span class="token punctuation">,</span> <span class="token number">3.0</span><span class="token punctuation">,</span>  <span class="token comment">//从起点开始，第0秒时坐标为(1,2,3)</span>
            <span class="token number">60.0</span><span class="token punctuation">,</span> <span class="token number">4.0</span><span class="token punctuation">,</span> <span class="token number">5.0</span><span class="token punctuation">,</span> <span class="token number">6.0</span><span class="token punctuation">,</span> <span class="token comment">//从起点开始，第60秒时坐标为(4,5,6) </span>
            <span class="token number">120.0</span><span class="token punctuation">,</span> <span class="token number">7.0</span><span class="token punctuation">,</span> <span class="token number">8.0</span><span class="token punctuation">,</span> <span class="token number">9.0</span> <span class="token comment">//从起点开始，第120秒时坐标为(7,8,9) </span>
        <span class="token punctuation">]</span>  
        <span class="token punctuation">,</span>
          <span class="token property">&quot;cartesian&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>

            
              <span class="token string">&quot;2012-04-30T12:00Z&quot;</span><span class="token punctuation">,</span> <span class="token number">1.0</span><span class="token punctuation">,</span> <span class="token number">2.0</span><span class="token punctuation">,</span> <span class="token number">3.0</span><span class="token punctuation">,</span> <span class="token comment">//表示当时间为2012-04-30T12:00Z，坐标为(1,2,3)</span>
            <span class="token string">&quot;2012-04-30T12:01Z&quot;</span><span class="token punctuation">,</span> <span class="token number">4.0</span><span class="token punctuation">,</span> <span class="token number">5.0</span><span class="token punctuation">,</span> <span class="token number">6.0</span><span class="token punctuation">,</span> <span class="token comment">//表示当时间为2012-04-30T12:01Z，坐标为(4,5,6)</span>
            <span class="token string">&quot;2012-04-30T12:02Z&quot;</span><span class="token punctuation">,</span> <span class="token number">7.0</span><span class="token punctuation">,</span> <span class="token number">8.0</span><span class="token punctuation">,</span> <span class="token number">9.0</span>  <span class="token comment">//表示当时间为2012-04-30T12:02Z，坐标为(7,8,9),</span>
              <span class="token number">0</span><span class="token punctuation">,</span>
              <span class="token number">10246472.183615023</span><span class="token punctuation">,</span>
              <span class="token number">23315473.78200593</span><span class="token punctuation">,</span>
              <span class="token number">-99942.77560130549</span><span class="token punctuation">,</span>
              <span class="token number">300</span><span class="token punctuation">,</span>
              <span class="token number">9768930.236227807</span><span class="token punctuation">,</span>
              <span class="token number">23491323.358455077</span><span class="token punctuation">,</span>
              <span class="token number">-1173388.669547688</span><span class="token punctuation">,</span>
              <span class="token number">600</span><span class="token punctuation">,</span>
              <span class="token number">9270175.988391416</span><span class="token punctuation">,</span>
              <span class="token number">23616164.516070485</span><span class="token punctuation">,</span>
              <span class="token number">-2244286.2659865934</span><span class="token punctuation">,</span>
             
          <span class="token punctuation">]</span><span class="token punctuation">,</span>
          <span class="token property">&quot;epoch&quot;</span><span class="token operator">:</span> <span class="token string">&quot;2022-03-22T16:08:00+08:00&quot;</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token property">&quot;billboard&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token property">&quot;image&quot;</span><span class="token operator">:</span> <span class="token string">&quot;data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAADJSURBVDhPnZHRDcMgEEMZjVEYpaNklIzSEfLfD4qNnXAJSFWfhO7w2Zc0Tf9QG2rXrEzSUeZLOGm47WoH95x3Hl3jEgilvDgsOQUTqsNl68ezEwn1vae6lceSEEYvvWNT/Rxc4CXQNGadho1NXoJ+9iaqc2xi2xbt23PJCDIB6TQjOC6Bho/sDy3fBQT8PrVhibU7yBFcEPaRxOoeTwbwByCOYf9VGp1BYI1BA+EeHhmfzKbBoJEQwn1yzUZtyspIQUha85MpkNIXB7GizqDEECsAAAAASUVORK5CYII=&quot;</span><span class="token punctuation">,</span>
          <span class="token property">&quot;scale&quot;</span><span class="token operator">:</span> <span class="token number">1.5</span><span class="token punctuation">,</span>
          <span class="token property">&quot;show&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token property">&quot;availability&quot;</span><span class="token operator">:</span> <span class="token string">&quot;2022-03-22T16:08:00+08:00/2022-03-23T16:08:00+08:00&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;path&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token property">&quot;leadTime&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
              <span class="token punctuation">{</span>
                  <span class="token property">&quot;interval&quot;</span><span class="token operator">:</span> <span class="token string">&quot;2022-03-22T16:08:00+08:00/2022-03-22T17:35:38.857645+08:00&quot;</span><span class="token punctuation">,</span>
                  <span class="token property">&quot;number&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
                      <span class="token number">0</span><span class="token punctuation">,</span>
                      <span class="token number">40570.57117734112</span><span class="token punctuation">,</span>
                      <span class="token number">40570.57117734112</span><span class="token punctuation">,</span>
                      <span class="token number">0</span>
                  <span class="token punctuation">]</span><span class="token punctuation">,</span>
                  <span class="token property">&quot;epoch&quot;</span><span class="token operator">:</span> <span class="token string">&quot;2022-03-22T16:08:00+08:00&quot;</span>
              <span class="token punctuation">}</span><span class="token punctuation">,</span>
              <span class="token punctuation">{</span>
                  <span class="token property">&quot;interval&quot;</span><span class="token operator">:</span> <span class="token string">&quot;2022-03-22T17:35:38.857645+08:00/2022-03-23T04:51:49.428822+08:00&quot;</span><span class="token punctuation">,</span>
                  <span class="token property">&quot;number&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
                      <span class="token number">0</span><span class="token punctuation">,</span>
                      <span class="token number">40570.57117734112</span><span class="token punctuation">,</span>
                      <span class="token number">40570.57117734112</span><span class="token punctuation">,</span>
                      <span class="token number">0</span>
                  <span class="token punctuation">]</span><span class="token punctuation">,</span>
                  <span class="token property">&quot;epoch&quot;</span><span class="token operator">:</span> <span class="token string">&quot;2022-03-22T17:35:38.857645+08:00&quot;</span>
              <span class="token punctuation">}</span><span class="token punctuation">,</span>
              <span class="token punctuation">{</span>
                  <span class="token property">&quot;interval&quot;</span><span class="token operator">:</span> <span class="token string">&quot;2022-03-23T04:51:49.428822+08:00/2022-03-23T16:07:59.999999+08:00&quot;</span><span class="token punctuation">,</span>
                  <span class="token property">&quot;number&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
                      <span class="token number">0</span><span class="token punctuation">,</span>
                      <span class="token number">40570.57117734112</span><span class="token punctuation">,</span>
                      <span class="token number">40570.57117734112</span><span class="token punctuation">,</span>
                      <span class="token number">0</span>
                  <span class="token punctuation">]</span><span class="token punctuation">,</span>
                  <span class="token property">&quot;epoch&quot;</span><span class="token operator">:</span> <span class="token string">&quot;2022-03-23T04:51:49.428822+08:00&quot;</span>
              <span class="token punctuation">}</span>
          <span class="token punctuation">]</span><span class="token punctuation">,</span>
          <span class="token property">&quot;width&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
          <span class="token property">&quot;trailTime&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
              <span class="token punctuation">{</span>
                  <span class="token property">&quot;interval&quot;</span><span class="token operator">:</span> <span class="token string">&quot;2022-03-22T16:08:00+08:00/2022-03-22T17:35:38.857645+08:00&quot;</span><span class="token punctuation">,</span>
                  <span class="token property">&quot;number&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
                      <span class="token number">0</span><span class="token punctuation">,</span>
                      <span class="token number">0</span><span class="token punctuation">,</span>
                      <span class="token number">40570.57117734112</span><span class="token punctuation">,</span>
                      <span class="token number">40570.57117734112</span>
                  <span class="token punctuation">]</span><span class="token punctuation">,</span>
                  <span class="token property">&quot;epoch&quot;</span><span class="token operator">:</span> <span class="token string">&quot;2022-03-22T16:08:00+08:00&quot;</span>
              <span class="token punctuation">}</span><span class="token punctuation">,</span>
              <span class="token punctuation">{</span>
                  <span class="token property">&quot;interval&quot;</span><span class="token operator">:</span> <span class="token string">&quot;2022-03-22T17:35:38.857645+08:00/2022-03-23T04:51:49.428822+08:00&quot;</span><span class="token punctuation">,</span>
                  <span class="token property">&quot;number&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
                      <span class="token number">0</span><span class="token punctuation">,</span>
                      <span class="token number">0</span><span class="token punctuation">,</span>
                      <span class="token number">40570.57117734112</span><span class="token punctuation">,</span>
                      <span class="token number">40570.57117734112</span>
                  <span class="token punctuation">]</span><span class="token punctuation">,</span>
                  <span class="token property">&quot;epoch&quot;</span><span class="token operator">:</span> <span class="token string">&quot;2022-03-22T17:35:38.857645+08:00&quot;</span>
              <span class="token punctuation">}</span><span class="token punctuation">,</span>
              <span class="token punctuation">{</span>
                  <span class="token property">&quot;interval&quot;</span><span class="token operator">:</span> <span class="token string">&quot;2022-03-23T04:51:49.428822+08:00/2022-03-23T16:07:59.999999+08:00&quot;</span><span class="token punctuation">,</span>
                  <span class="token property">&quot;number&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
                      <span class="token number">0</span><span class="token punctuation">,</span>
                      <span class="token number">0</span><span class="token punctuation">,</span>
                      <span class="token number">40570.57117734112</span><span class="token punctuation">,</span>
                      <span class="token number">40570.57117734112</span>
                  <span class="token punctuation">]</span><span class="token punctuation">,</span>
                  <span class="token property">&quot;epoch&quot;</span><span class="token operator">:</span> <span class="token string">&quot;2022-03-23T04:51:49.428822+08:00&quot;</span>
              <span class="token punctuation">}</span>
          <span class="token punctuation">]</span><span class="token punctuation">,</span>
          <span class="token property">&quot;material&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
              <span class="token property">&quot;solidColor&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                  <span class="token property">&quot;color&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                      <span class="token property">&quot;rgba&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
                          <span class="token string">&quot;213&quot;</span><span class="token punctuation">,</span>
                          <span class="token string">&quot;255&quot;</span><span class="token punctuation">,</span>
                          <span class="token string">&quot;0&quot;</span><span class="token punctuation">,</span>
                          <span class="token number">255</span>
                      <span class="token punctuation">]</span>
                  <span class="token punctuation">}</span>
              <span class="token punctuation">}</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token property">&quot;resolution&quot;</span><span class="token operator">:</span> <span class="token number">120</span><span class="token punctuation">,</span>
          <span class="token property">&quot;show&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
              <span class="token punctuation">{</span>
                  <span class="token property">&quot;interval&quot;</span><span class="token operator">:</span> <span class="token string">&quot;2022-03-22T16:08:00+08:00/2022-03-23T16:08:00+08:00&quot;</span><span class="token punctuation">,</span>
                  <span class="token property">&quot;boolean&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span>
              <span class="token punctuation">}</span>
          <span class="token punctuation">]</span>
      <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>


</code></pre></div><h3 id="czml-vue" tabindex="-1"><a class="header-anchor" href="#czml-vue" aria-hidden="true">#</a> czml_vue</h3><div class="language-vue" data-ext="vue"><pre class="language-vue"><code>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>ctx<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>cesiumContainer<span class="token punctuation">&quot;</span></span> <span class="token attr-name">ref</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>cesiumContainer<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> <span class="token operator">*</span> <span class="token keyword">as</span> Cesium <span class="token keyword">from</span> <span class="token string">&quot;cesium&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> onMounted<span class="token punctuation">,</span> ref <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;vue&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">let</span> viewer<span class="token punctuation">;</span>
<span class="token keyword">const</span> cesiumContainer <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token string">&quot;cesiumContainer&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token function">onMounted</span><span class="token punctuation">(</span><span class="token keyword">async</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  viewer <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Cesium<span class="token punctuation">.</span>Viewer</span><span class="token punctuation">(</span><span class="token string">&quot;cesiumContainer&quot;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
    <span class="token comment">// animation: false, // 是否开启动画</span>
    <span class="token comment">// timeline: false, // 是否显示时间轴</span>
    <span class="token comment">// imageryProvider: new Cesium.UrlTemplateImageryProvider({</span>
    <span class="token comment">//   url: &quot;https://webst02.is.autonavi.com/appmaptile?style=6&amp;x={x}&amp;y={y}&amp;z={z}&quot;,</span>
    <span class="token comment">// }),</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">let</span> <span class="token punctuation">{</span> czml_team <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">getdata</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">let</span> entityB2<span class="token punctuation">,</span> onTickEvent<span class="token punctuation">;</span>

  <span class="token keyword">let</span> cdata <span class="token operator">=</span> <span class="token keyword">await</span> Cesium<span class="token punctuation">.</span>CzmlDataSource<span class="token punctuation">.</span><span class="token function">load</span><span class="token punctuation">(</span>czml_team<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token comment">// 加载数据</span>
  viewer<span class="token punctuation">.</span>dataSources<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>cdata<span class="token punctuation">)</span><span class="token punctuation">;</span>

  entityB2 <span class="token operator">=</span> cdata<span class="token punctuation">.</span>entities<span class="token punctuation">.</span><span class="token function">getById</span><span class="token punctuation">(</span><span class="token string">&quot;flying_follow_team&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  viewer<span class="token punctuation">.</span>clock<span class="token punctuation">.</span>shouldAnimate <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>

  viewer<span class="token punctuation">.</span>trackedEntity <span class="token operator">=</span> entityB2<span class="token punctuation">;</span>

  <span class="token comment">// 获取模型对象</span>

  <span class="token comment">// 获取当前模型方向和位置</span>
  <span class="token keyword">const</span> orientation <span class="token operator">=</span> entityB2<span class="token punctuation">.</span>orientation<span class="token punctuation">;</span>
  <span class="token keyword">const</span> position <span class="token operator">=</span> entityB2<span class="token punctuation">.</span>position<span class="token punctuation">;</span>

  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>position<span class="token punctuation">,</span> orientation<span class="token punctuation">)</span><span class="token punctuation">;</span>
  
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>entityB2<span class="token punctuation">)</span><span class="token punctuation">;</span>
  entityB2<span class="token punctuation">.</span>model<span class="token punctuation">.</span>runAnimations <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>entityB2<span class="token punctuation">.</span>model<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">(</span>entityB2<span class="token punctuation">.</span>model<span class="token punctuation">.</span>silhouetteColor <span class="token operator">=</span> <span class="token function">getColor</span><span class="token punctuation">(</span><span class="token string">&quot;Red&quot;</span><span class="token punctuation">,</span> <span class="token number">1.0</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token comment">//&gt; 模型轮廓颜色</span>
    <span class="token punctuation">(</span>entityB2<span class="token punctuation">.</span>model<span class="token punctuation">.</span>silhouetteSize <span class="token operator">=</span> <span class="token function">parseFloat</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token comment">// 实时调整位置</span>

  <span class="token comment">// entityB2.orientation  = new Cesium.VelocityOrientationProperty(entityB2.position);</span>

  <span class="token comment">/*
      // 添加属性：速度向量
        entityB2.velocityVector = new Cesium.VelocityVectorProperty(entityB2.position, true);

        // 当前时刻速度向量、位置
        let curVelocityVector = entityB2.velocityVector.getValue(viewer.clock.currentTime, new Cesium.Cartesian3());
        let curPosition = entityB2.position.getValue(viewer.clock.currentTime, new Cesium.Cartesian3());
        // 计算朝向四元数
        var quaternion = getQuaternion(curPosition, curVelocityVector);
        // 设置实体朝向，验证是否指向速度矢量方向
        entityB2.orientation = quaternion;   
*/</span>
  <span class="token keyword">function</span> <span class="token function">adjust</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>viewer<span class="token punctuation">.</span>clock<span class="token punctuation">.</span>shouldAnimate <span class="token operator">===</span> <span class="token boolean">true</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">let</span> ori <span class="token operator">=</span> orientation<span class="token punctuation">.</span><span class="token function">getValue</span><span class="token punctuation">(</span>viewer<span class="token punctuation">.</span>clock<span class="token punctuation">.</span>currentTime<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 获取偏向角</span>
      <span class="token keyword">let</span> center <span class="token operator">=</span> position<span class="token punctuation">.</span><span class="token function">getValue</span><span class="token punctuation">(</span>viewer<span class="token punctuation">.</span>clock<span class="token punctuation">.</span>currentTime<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 获取位置</span>
      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>ori<span class="token punctuation">,</span> center<span class="token punctuation">)</span><span class="token punctuation">;</span>

      <span class="token comment">/*
                   // 1、由四元数计算三维旋转矩阵
                  var mtx3 = Cesium.Matrix3.fromQuaternion(ori);

                  // 2、计算四维转换矩阵：
                  var mtx4 = Cesium.Matrix4.fromRotationTranslation(mtx3, center);

                  // 3、计算角度：
                  var hpr = Cesium.Transforms.fixedFrameToHeadingPitchRoll(mtx4);

                  // 获取角度（弧度）
                    const headingTemp = hpr.heading;
                    const pitchTemp = hpr.pitch;

                    // 调整角度为第一人称
                    const heading = Cesium.Math.toRadians(
                      Cesium.Math.toDegrees(headingTemp) + 90
                    );
                    const pitch = Cesium.Math.toRadians(
                      Cesium.Math.toDegrees(pitchTemp) - 12
                    );
                    // 视角高度，根据模型大小调整
                    const range = 140.0;

                    // 动态改变模型视角

                    viewer.camera.lookAt(
                      center,
                      new Cesium.HeadingPitchRange(heading, pitch, range)
                    );
*/</span>

      entityB2<span class="token punctuation">.</span>velocityVector <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Cesium<span class="token punctuation">.</span>VelocityVectorProperty</span><span class="token punctuation">(</span>
        entityB2<span class="token punctuation">.</span>position<span class="token punctuation">,</span>
        <span class="token boolean">true</span>
      <span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token comment">// 当前时刻速度向量、位置</span>
      <span class="token keyword">let</span> curVelocityVector <span class="token operator">=</span> entityB2<span class="token punctuation">.</span>velocityVector<span class="token punctuation">.</span><span class="token function">getValue</span><span class="token punctuation">(</span>
        viewer<span class="token punctuation">.</span>clock<span class="token punctuation">.</span>currentTime<span class="token punctuation">,</span>
        <span class="token keyword">new</span> <span class="token class-name">Cesium<span class="token punctuation">.</span>Cartesian3</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
      <span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token keyword">let</span> curPosition <span class="token operator">=</span> entityB2<span class="token punctuation">.</span>position<span class="token punctuation">.</span><span class="token function">getValue</span><span class="token punctuation">(</span>
        viewer<span class="token punctuation">.</span>clock<span class="token punctuation">.</span>currentTime<span class="token punctuation">,</span>
        <span class="token keyword">new</span> <span class="token class-name">Cesium<span class="token punctuation">.</span>Cartesian3</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
      <span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token comment">// 计算朝向四元数</span>
      <span class="token keyword">var</span> quaternion <span class="token operator">=</span> <span class="token function">getQuaternion</span><span class="token punctuation">(</span>curPosition<span class="token punctuation">,</span> curVelocityVector<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token comment">// 设置实体朝向，验证是否指向速度矢量方向</span>
      entityB2<span class="token punctuation">.</span>orientation <span class="token operator">=</span> quaternion<span class="token punctuation">;</span>

      <span class="token comment">// entityB2.orientation = new Cesium.VelocityOrientationProperty(</span>
      <span class="token comment">//   entityB2.position</span>
      <span class="token comment">// );</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
  onTickEvent <span class="token operator">=</span> viewer<span class="token punctuation">.</span>clock<span class="token punctuation">.</span>onTick<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span>adjust<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token doc-comment comment">/**
 * 计算朝向四元数
 * X轴正向指向运动方向；Y轴在水平面内垂直于X轴，正向指向右侧；Z轴通过右手法则确定
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>Cartesian3<span class="token punctuation">}</span></span> <span class="token parameter">position</span> 位置
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>Cartesian3<span class="token punctuation">}</span></span> <span class="token parameter">velocity</span> 速度向量
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span><span class="token operator">*</span><span class="token punctuation">}</span></span> <span class="token parameter">rotateX</span> 绕X轴旋转的角度（roll）
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span><span class="token operator">*</span><span class="token punctuation">}</span></span> <span class="token parameter">rotateY</span> 绕Y轴旋转的角度（pitch）
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span><span class="token operator">*</span><span class="token punctuation">}</span></span> <span class="token parameter">rotateZ</span> 绕Z轴旋转的角度（heading）
 * <span class="token keyword">@returns</span>
 */</span>
<span class="token keyword">function</span> <span class="token function">getQuaternion</span><span class="token punctuation">(</span><span class="token parameter">position<span class="token punctuation">,</span> velocity<span class="token punctuation">,</span> rotateX<span class="token punctuation">,</span> rotateY<span class="token punctuation">,</span> rotateZ</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// 1、计算站心到模型坐标系的旋转平移矩阵</span>
  <span class="token comment">// 速度归一化</span>
  <span class="token keyword">let</span> normal <span class="token operator">=</span> Cesium<span class="token punctuation">.</span>Cartesian3<span class="token punctuation">.</span><span class="token function">normalize</span><span class="token punctuation">(</span>velocity<span class="token punctuation">,</span> <span class="token keyword">new</span> <span class="token class-name">Cesium<span class="token punctuation">.</span>Cartesian3</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token comment">// 计算模型坐标系的旋转矩阵</span>
  <span class="token keyword">let</span> satRotationMatrix <span class="token operator">=</span> Cesium<span class="token punctuation">.</span>Transforms<span class="token punctuation">.</span><span class="token function">rotationMatrixFromPositionVelocity</span><span class="token punctuation">(</span>
    position<span class="token punctuation">,</span>
    normal<span class="token punctuation">,</span>
    Cesium<span class="token punctuation">.</span>Ellipsoid<span class="token punctuation">.</span><span class="token constant">WGS84</span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token comment">// 模型坐标系到地固坐标系旋转平移矩阵</span>
  <span class="token keyword">let</span> m <span class="token operator">=</span> Cesium<span class="token punctuation">.</span>Matrix4<span class="token punctuation">.</span><span class="token function">fromRotationTranslation</span><span class="token punctuation">(</span>satRotationMatrix<span class="token punctuation">,</span> position<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token comment">// 站心坐标系（东北天坐标系）到地固坐标系旋转平移矩阵</span>
  <span class="token keyword">var</span> m1 <span class="token operator">=</span> Cesium<span class="token punctuation">.</span>Transforms<span class="token punctuation">.</span><span class="token function">eastNorthUpToFixedFrame</span><span class="token punctuation">(</span>
    position<span class="token punctuation">,</span>
    Cesium<span class="token punctuation">.</span>Ellipsoid<span class="token punctuation">.</span><span class="token constant">WGS84</span><span class="token punctuation">,</span>
    <span class="token keyword">new</span> <span class="token class-name">Cesium<span class="token punctuation">.</span>Matrix4</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token comment">// 站心到模型坐标系的旋转平移矩阵</span>
  <span class="token keyword">let</span> m3 <span class="token operator">=</span> Cesium<span class="token punctuation">.</span>Matrix4<span class="token punctuation">.</span><span class="token function">multiply</span><span class="token punctuation">(</span>
    Cesium<span class="token punctuation">.</span>Matrix4<span class="token punctuation">.</span><span class="token function">inverse</span><span class="token punctuation">(</span>m1<span class="token punctuation">,</span> <span class="token keyword">new</span> <span class="token class-name">Cesium<span class="token punctuation">.</span>Matrix4</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    m<span class="token punctuation">,</span>
    <span class="token keyword">new</span> <span class="token class-name">Cesium<span class="token punctuation">.</span>Matrix4</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token comment">// 2、模型姿态旋转矩阵</span>
  rotateX <span class="token operator">=</span> rotateX <span class="token operator">||</span> <span class="token number">0</span><span class="token punctuation">;</span>
  rotateY <span class="token operator">=</span> rotateY <span class="token operator">||</span> <span class="token number">0</span><span class="token punctuation">;</span>
  rotateZ <span class="token operator">=</span> rotateZ <span class="token operator">||</span> <span class="token operator">-</span><span class="token number">90</span><span class="token punctuation">;</span>
  <span class="token keyword">let</span> heading <span class="token operator">=</span> rotateZ<span class="token punctuation">,</span>
    pitch <span class="token operator">=</span> rotateY<span class="token punctuation">,</span>
    roll <span class="token operator">=</span> rotateX<span class="token punctuation">;</span>

  <span class="token keyword">let</span> postureHpr <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Cesium<span class="token punctuation">.</span>HeadingPitchRoll</span><span class="token punctuation">(</span>
    Cesium<span class="token punctuation">.</span>Math<span class="token punctuation">.</span><span class="token function">toRadians</span><span class="token punctuation">(</span>heading<span class="token punctuation">)</span><span class="token punctuation">,</span>
    Cesium<span class="token punctuation">.</span>Math<span class="token punctuation">.</span><span class="token function">toRadians</span><span class="token punctuation">(</span>pitch<span class="token punctuation">)</span><span class="token punctuation">,</span>
    Cesium<span class="token punctuation">.</span>Math<span class="token punctuation">.</span><span class="token function">toRadians</span><span class="token punctuation">(</span>roll<span class="token punctuation">)</span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">let</span> postureMatrix <span class="token operator">=</span> Cesium<span class="token punctuation">.</span>Matrix3<span class="token punctuation">.</span><span class="token function">fromHeadingPitchRoll</span><span class="token punctuation">(</span>postureHpr<span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token comment">// 3、最终的旋转矩阵</span>
  <span class="token keyword">let</span> mat3 <span class="token operator">=</span> Cesium<span class="token punctuation">.</span>Matrix4<span class="token punctuation">.</span><span class="token function">getMatrix3</span><span class="token punctuation">(</span>m3<span class="token punctuation">,</span> <span class="token keyword">new</span> <span class="token class-name">Cesium<span class="token punctuation">.</span>Matrix3</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">let</span> finalMatrix <span class="token operator">=</span> Cesium<span class="token punctuation">.</span>Matrix3<span class="token punctuation">.</span><span class="token function">multiply</span><span class="token punctuation">(</span>
    mat3<span class="token punctuation">,</span>
    postureMatrix<span class="token punctuation">,</span>
    <span class="token keyword">new</span> <span class="token class-name">Cesium<span class="token punctuation">.</span>Matrix3</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">let</span> quaternion1 <span class="token operator">=</span> Cesium<span class="token punctuation">.</span>Quaternion<span class="token punctuation">.</span><span class="token function">fromRotationMatrix</span><span class="token punctuation">(</span>finalMatrix<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">let</span> hpr <span class="token operator">=</span> Cesium<span class="token punctuation">.</span>HeadingPitchRoll<span class="token punctuation">.</span><span class="token function">fromQuaternion</span><span class="token punctuation">(</span>quaternion1<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">let</span> q2 <span class="token operator">=</span> Cesium<span class="token punctuation">.</span>Transforms<span class="token punctuation">.</span><span class="token function">headingPitchRollQuaternion</span><span class="token punctuation">(</span>position<span class="token punctuation">,</span> hpr<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">return</span> q2<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token keyword">function</span> <span class="token function">getdata</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> czml_team <span class="token operator">=</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span>
      <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token string">&quot;document&quot;</span><span class="token punctuation">,</span>
      <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&quot;flying_follow_team&quot;</span><span class="token punctuation">,</span>
      <span class="token literal-property property">version</span><span class="token operator">:</span> <span class="token string">&quot;1.0&quot;</span><span class="token punctuation">,</span>
      <span class="token literal-property property">clock</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">interval</span><span class="token operator">:</span> <span class="token string">&quot;2023-03-08T10:00:00Z/2023-03-08T12:00:00Z&quot;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">currentTime</span><span class="token operator">:</span> <span class="token string">&quot;2023-03-08T10:00:00Z&quot;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">multiplier</span><span class="token operator">:</span> <span class="token number">10</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
      <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token string">&quot;flying_follow_team&quot;</span><span class="token punctuation">,</span>
      <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&quot;path with GPS flight data&quot;</span><span class="token punctuation">,</span>
      <span class="token literal-property property">description</span><span class="token operator">:</span> <span class="token string">&quot;测试第一人称视角。&quot;</span><span class="token punctuation">,</span>
      <span class="token comment">// 可用性</span>
      <span class="token literal-property property">availability</span><span class="token operator">:</span> <span class="token string">&quot;2023-03-08T10:00:00Z/2023-03-08T12:00:00Z&quot;</span><span class="token punctuation">,</span>
      <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">material</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token literal-property property">polylineGlow</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token literal-property property">color</span><span class="token operator">:</span> <span class="token punctuation">{</span>
              <span class="token literal-property property">rgba</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">255</span><span class="token punctuation">,</span> <span class="token number">200</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token literal-property property">glowPower</span><span class="token operator">:</span> <span class="token number">0.1</span><span class="token punctuation">,</span>
            <span class="token literal-property property">taperPower</span><span class="token operator">:</span> <span class="token number">0.1</span><span class="token punctuation">,</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token literal-property property">width</span><span class="token operator">:</span> <span class="token number">20</span><span class="token punctuation">,</span>
        <span class="token comment">// 向前路线</span>
        <span class="token literal-property property">leadTime</span><span class="token operator">:</span> <span class="token number">10</span><span class="token punctuation">,</span>
        <span class="token literal-property property">trailTime</span><span class="token operator">:</span> <span class="token number">1000</span><span class="token punctuation">,</span>
        <span class="token literal-property property">resolution</span><span class="token operator">:</span> <span class="token number">0.5</span><span class="token punctuation">,</span>
        <span class="token literal-property property">show</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token literal-property property">model</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token comment">// 模型参数</span>
        <span class="token literal-property property">gltf</span><span class="token operator">:</span> <span class="token string">&quot;/b22.glb&quot;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">minimumPixelSize</span><span class="token operator">:</span> <span class="token number">1000</span><span class="token punctuation">,</span>
        <span class="token literal-property property">maximumScale</span><span class="token operator">:</span> <span class="token number">20</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>

      <span class="token literal-property property">orientation</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token comment">// 自动计算方向</span>
        <span class="token literal-property property">velocityReference</span><span class="token operator">:</span> <span class="token string">&quot;#position&quot;</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token literal-property property">position</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token comment">// 插值算法</span>
        <span class="token literal-property property">interpolationAlgorithm</span><span class="token operator">:</span> <span class="token string">&quot;LAGRANGE&quot;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">interpolationDegree</span><span class="token operator">:</span> <span class="token number">5</span><span class="token punctuation">,</span>
        <span class="token literal-property property">epoch</span><span class="token operator">:</span> <span class="token string">&quot;2023-03-08T10:00:00Z&quot;</span><span class="token punctuation">,</span>
        <span class="token comment">// 坐标组</span>
        <span class="token literal-property property">cartographicDegrees</span><span class="token operator">:</span> <span class="token punctuation">[</span>
          <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">118.93830177292894</span><span class="token punctuation">,</span> <span class="token number">25.488280583435404</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span>

          <span class="token number">300</span><span class="token punctuation">,</span> <span class="token number">119.14034602637892</span><span class="token punctuation">,</span> <span class="token number">25.32388938213355</span><span class="token punctuation">,</span> <span class="token number">2000</span><span class="token punctuation">,</span>

          <span class="token number">800</span><span class="token punctuation">,</span> <span class="token number">119.43064375816327</span><span class="token punctuation">,</span> <span class="token number">25.230148210056235</span><span class="token punctuation">,</span> <span class="token number">5000</span><span class="token punctuation">,</span> <span class="token number">1500</span><span class="token punctuation">,</span>
          <span class="token number">120.93105921868252</span><span class="token punctuation">,</span> <span class="token number">24.769194048014963</span><span class="token punctuation">,</span> <span class="token number">12000</span><span class="token punctuation">,</span> <span class="token number">2500</span><span class="token punctuation">,</span>
          <span class="token number">121.5592902752412</span><span class="token punctuation">,</span> <span class="token number">24.658964292017885</span><span class="token punctuation">,</span> <span class="token number">12000</span><span class="token punctuation">,</span> <span class="token number">3500</span><span class="token punctuation">,</span>
          <span class="token number">121.56445881860067</span><span class="token punctuation">,</span> <span class="token number">25.16649023047563</span><span class="token punctuation">,</span> <span class="token number">5000</span><span class="token punctuation">,</span>

          <span class="token number">4500</span><span class="token punctuation">,</span> <span class="token number">119.94263373897657</span><span class="token punctuation">,</span> <span class="token number">25.49632056739945</span><span class="token punctuation">,</span> <span class="token number">12000</span><span class="token punctuation">,</span>

          <span class="token number">5400</span><span class="token punctuation">,</span> <span class="token number">119.30910179629008</span><span class="token punctuation">,</span> <span class="token number">25.559938450361965</span><span class="token punctuation">,</span> <span class="token number">5000</span><span class="token punctuation">,</span>

          <span class="token number">6300</span><span class="token punctuation">,</span> <span class="token number">118.96295053426707</span><span class="token punctuation">,</span> <span class="token number">25.571485127594467</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span>

          <span class="token number">7200</span><span class="token punctuation">,</span> <span class="token number">114</span><span class="token punctuation">,</span> <span class="token number">26</span><span class="token punctuation">,</span> <span class="token number">300</span><span class="token punctuation">,</span>
        <span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token comment">// orientation : new Cesium.VelocityOrientationProperty(position),</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">]</span><span class="token punctuation">;</span>

  <span class="token keyword">return</span> <span class="token punctuation">{</span>
    czml_team<span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">//-----------------------下面是获取颜色方法------------------</span>
<span class="token comment">//&gt; 获取模型颜色与透明度</span>
<span class="token keyword">function</span> <span class="token function">getColor</span><span class="token punctuation">(</span><span class="token parameter">colorName<span class="token punctuation">,</span> alpha</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> color <span class="token operator">=</span> Cesium<span class="token punctuation">.</span>Color<span class="token punctuation">[</span>colorName<span class="token punctuation">.</span><span class="token function">toUpperCase</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
  <span class="token keyword">return</span> Cesium<span class="token punctuation">.</span>Color<span class="token punctuation">.</span><span class="token function">fromAlpha</span><span class="token punctuation">(</span>color<span class="token punctuation">,</span> <span class="token function">parseFloat</span><span class="token punctuation">(</span>alpha<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token comment">//&gt; 获取目标颜色和图元的源颜色之间混合的不同模式  HIGHLIGHT将源颜色乘以目标颜色 REPLACE将源颜色替换为目标颜色 MIX将源颜色和目标颜色混合在一起</span>
<span class="token keyword">function</span> <span class="token function">getColorBlendMode</span><span class="token punctuation">(</span><span class="token parameter">colorBlendMode</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> Cesium<span class="token punctuation">.</span>ColorBlendMode<span class="token punctuation">[</span>colorBlendMode<span class="token punctuation">.</span><span class="token function">toUpperCase</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
  
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span> <span class="token attr-name">scoped</span><span class="token punctuation">&gt;</span></span><span class="token style"><span class="token language-css">
<span class="token selector">.ctx</span> <span class="token punctuation">{</span>
  <span class="token property">box-sizing</span><span class="token punctuation">:</span> border-box<span class="token punctuation">;</span>
  <span class="token property">width</span><span class="token punctuation">:</span> 100%<span class="token punctuation">;</span>
  <span class="token property">height</span><span class="token punctuation">:</span> 100%<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">&gt;</span></span>
   
<span class="token comment">&lt;!-- 


  let geo = await Cesium.GeoJsonDataSource.load(
    &quot;/src/assets/hbeiprovince.json&quot;,
    {
      // fill: Cesium.Color.PINK, //填充色
      stroke: Cesium.Color.HOTPINK, //轮廓颜色
      strokeWidth: 5, //轮廓宽度
    }
  );

  geo.entities.values.forEach((enetity) =&gt; {
     enetity.polygon.outlineColor = Cesium.Color.RED;
    enetity.polygon.material = Cesium.Color.BLUE;
    enetity.polygon.height = 1000;
    enetity.polygon.extrudedHeight = 2000;
  });

  viewer.dataSources.add(geo);

  let { czml_team } = getdata();


 --&gt;</span>
</code></pre></div>`,21);function h(w,C){const a=p("ExternalLinkIcon");return o(),e("div",null,[n("ul",null,[k,r,n("li",null,[n("p",null,[i,s(),n("a",m,[s("cankao"),c(a)])])]),q,y,d,g]),b])}const v=t(l,[["render",h],["__file","czml_stu.html.vue"]]);export{v as default};
