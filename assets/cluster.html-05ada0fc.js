import{_ as p,M as t,p as o,q as e,R as n,t as s,N as c,a1 as l}from"./framework-d81ad7e5.js";const u={},r=l(`<p>需要我们绘制大量的标注点，当地图层级缩放到最大时就需要加载全部的点。看上去比较密集不能直接知道大概位置有多少数据。为了解决这一问题<code>OpenLayers</code>提供了<code>ol.source.Cluster</code></p><h3 id="ol-source-cluster" tabindex="-1"><a class="header-anchor" href="#ol-source-cluster" aria-hidden="true">#</a> ol.source.Cluster</h3><ul><li>它是对矢量数据进行聚类的图层源。没错它不是图层，只是矢量图层的数据源。</li></ul><p>使用方式就是实例化<code>Cluster</code>，作为要素加入矢量图层中。</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code>js复制代码ol<span class="token punctuation">.</span>source<span class="token punctuation">.</span><span class="token function">Cluster</span><span class="token punctuation">(</span><span class="token punctuation">{</span> 
    <span class="token literal-property property">distance</span><span class="token operator">:</span> <span class="token number">10</span><span class="token punctuation">,</span> <span class="token comment">// 标注元素之间的间距，单位是像素。 </span>
    <span class="token literal-property property">source</span><span class="token operator">:</span> source<span class="token punctuation">,</span><span class="token comment">//数据源 </span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><h2 id="开始使用" tabindex="-1"><a class="header-anchor" href="#开始使用" aria-hidden="true">#</a> 开始使用</h2><ul><li>加入集合数据源</li></ul><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code>   <span class="token keyword">const</span> e <span class="token operator">=</span> <span class="token number">4500000</span>
    <span class="token keyword">const</span> count <span class="token operator">=</span> <span class="token number">2000</span>
    <span class="token keyword">const</span> features <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Array</span><span class="token punctuation">(</span>count<span class="token punctuation">)</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> count<span class="token punctuation">;</span> <span class="token operator">++</span>i<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">const</span> coordinates <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">2</span> <span class="token operator">*</span> e <span class="token operator">*</span> Math<span class="token punctuation">.</span><span class="token function">random</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">-</span> e<span class="token punctuation">,</span> <span class="token number">2</span> <span class="token operator">*</span> e <span class="token operator">*</span> Math<span class="token punctuation">.</span><span class="token function">random</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">-</span> e<span class="token punctuation">]</span>
      features<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ol<span class="token punctuation">.</span>Feature</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">ol<span class="token punctuation">.</span>geom<span class="token punctuation">.</span>Point</span><span class="token punctuation">(</span>coordinates<span class="token punctuation">)</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
    <span class="token comment">// 矢量数据源</span>
    <span class="token keyword">let</span> source <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ol<span class="token punctuation">.</span>source<span class="token punctuation">.</span>Vector</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      <span class="token literal-property property">features</span><span class="token operator">:</span> features
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token comment">// 实例化聚合数据源 并设置 聚合距离</span>
    <span class="token keyword">let</span> clusterSource <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ol<span class="token punctuation">.</span>source<span class="token punctuation">.</span>Cluster</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      <span class="token literal-property property">distance</span><span class="token operator">:</span> <span class="token number">40</span><span class="token punctuation">,</span>
      <span class="token literal-property property">source</span><span class="token operator">:</span> source
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token comment">// 创建图层</span>
    <span class="token keyword">let</span> layer <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ol<span class="token punctuation">.</span>layer<span class="token punctuation">.</span>Vector</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      <span class="token literal-property property">source</span><span class="token operator">:</span> clusterSource<span class="token punctuation">,</span>
      <span class="token literal-property property">style</span><span class="token operator">:</span> <span class="token function">clusterStyle</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
    map<span class="token punctuation">.</span><span class="token function">addLayer</span><span class="token punctuation">(</span>layer<span class="token punctuation">)</span>

    <span class="token keyword">function</span> <span class="token function">clusterStyle</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> <span class="token punctuation">(</span><span class="token parameter">feature<span class="token punctuation">,</span> solution</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
        <span class="token keyword">const</span> size <span class="token operator">=</span> feature<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">&#39;features&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span>length
        <span class="token keyword">let</span> style <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ol<span class="token punctuation">.</span>style<span class="token punctuation">.</span>Style</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
          <span class="token literal-property property">image</span><span class="token operator">:</span> <span class="token keyword">new</span> <span class="token class-name">ol<span class="token punctuation">.</span>style<span class="token punctuation">.</span>Circle</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
            <span class="token literal-property property">radius</span><span class="token operator">:</span> <span class="token number">15</span><span class="token punctuation">,</span>
            <span class="token literal-property property">stroke</span><span class="token operator">:</span> <span class="token keyword">new</span> <span class="token class-name">ol<span class="token punctuation">.</span>style<span class="token punctuation">.</span>Stroke</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
              <span class="token literal-property property">color</span><span class="token operator">:</span> <span class="token string">&#39;#fff&#39;</span>
            <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
            <span class="token literal-property property">fill</span><span class="token operator">:</span> <span class="token keyword">new</span> <span class="token class-name">ol<span class="token punctuation">.</span>style<span class="token punctuation">.</span>Fill</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
              <span class="token literal-property property">color</span><span class="token operator">:</span> <span class="token string">&#39;#3399CC&#39;</span>
            <span class="token punctuation">}</span><span class="token punctuation">)</span>
          <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
          <span class="token literal-property property">text</span><span class="token operator">:</span> <span class="token keyword">new</span> <span class="token class-name">ol<span class="token punctuation">.</span>style<span class="token punctuation">.</span>Text</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
            <span class="token literal-property property">text</span><span class="token operator">:</span> size<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
            <span class="token literal-property property">fill</span><span class="token operator">:</span> <span class="token keyword">new</span> <span class="token class-name">ol<span class="token punctuation">.</span>style<span class="token punctuation">.</span>Fill</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
              <span class="token literal-property property">color</span><span class="token operator">:</span> <span class="token string">&#39;#fff&#39;</span>
            <span class="token punctuation">}</span><span class="token punctuation">)</span>
          <span class="token punctuation">}</span><span class="token punctuation">)</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span>
        <span class="token keyword">return</span> style
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
</code></pre></div><ol><li>先创建点要素数组，把点要素数组加入矢量数据源中。</li><li>把矢量数据源放入聚合数据源中。通过参数设置聚合的距离和参数。</li></ol><ul><li><code>distance</code> 要素将聚集在一起的距离（以像素为单位）。</li><li><code>minDistance</code> 簇之间的最小距离（以像素为单位）。不能大于配置的距离。</li><li><code>source</code> 矢量数据源</li></ul><ol><li>创建矢量图层，这里要注意的是样式使用方法的形式返回，在方法中我们能实时获取当前聚合要素的数据，来生成不同的样式。</li></ol><h3 id="根据数量修改集合颜色" tabindex="-1"><a class="header-anchor" href="#根据数量修改集合颜色" aria-hidden="true">#</a> 根据数量修改集合颜色</h3><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code>js复制代码    <span class="token operator">...</span>
    <span class="token keyword">let</span> style <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ol<span class="token punctuation">.</span>style<span class="token punctuation">.</span>Style</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      <span class="token literal-property property">image</span><span class="token operator">:</span> <span class="token keyword">new</span> <span class="token class-name">ol<span class="token punctuation">.</span>style<span class="token punctuation">.</span>Circle</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
        <span class="token literal-property property">radius</span><span class="token operator">:</span> <span class="token number">15</span><span class="token punctuation">,</span>
        <span class="token literal-property property">stroke</span><span class="token operator">:</span> <span class="token keyword">new</span> <span class="token class-name">ol<span class="token punctuation">.</span>style<span class="token punctuation">.</span>Stroke</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
          <span class="token literal-property property">color</span><span class="token operator">:</span> <span class="token string">&#39;#fff&#39;</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
        <span class="token literal-property property">fill</span><span class="token operator">:</span> <span class="token keyword">new</span> <span class="token class-name">ol<span class="token punctuation">.</span>style<span class="token punctuation">.</span>Fill</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
          <span class="token literal-property property">color</span><span class="token operator">:</span> <span class="token function">getColor</span><span class="token punctuation">(</span>size<span class="token punctuation">)</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
      <span class="token literal-property property">text</span><span class="token operator">:</span> <span class="token keyword">new</span> <span class="token class-name">ol<span class="token punctuation">.</span>style<span class="token punctuation">.</span>Text</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
        <span class="token literal-property property">text</span><span class="token operator">:</span> size<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
        <span class="token literal-property property">fill</span><span class="token operator">:</span> <span class="token keyword">new</span> <span class="token class-name">ol<span class="token punctuation">.</span>style<span class="token punctuation">.</span>Fill</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
          <span class="token literal-property property">color</span><span class="token operator">:</span> <span class="token string">&#39;#fff&#39;</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token operator">...</span>
    
    <span class="token keyword">function</span> <span class="token function">getColor</span><span class="token punctuation">(</span><span class="token parameter">val</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>val <span class="token operator">&lt;</span> <span class="token number">100</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token string">&#39;#444693&#39;</span>
      <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>val <span class="token operator">&gt;=</span> <span class="token number">100</span> <span class="token operator">&amp;&amp;</span> val <span class="token operator">&lt;</span> <span class="token number">500</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token string">&#39;#f47920&#39;</span>
      <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>val <span class="token operator">&gt;=</span> <span class="token number">500</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token string">&#39;#ef5b9c&#39;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
</code></pre></div>`,13),k=n("li",null,[s("非常简单，我们先定义好一个判断颜色的函数。在"),n("code",null,"Style"),s("中使用这个函数就行了。因为地图的每一次改变都会重新绘制，所以颜色也会根据数量变化而变化。")],-1),i={href:"https://link.juejin.cn?target=https%3A%2F%2Fwww.jianshu.com%2Fp%2F330b45f1c9ac",target:"_blank",rel:"noopener noreferrer"};function y(d,w){const a=t("ExternalLinkIcon");return o(),e("div",null,[r,n("ul",null,[k,n("li",null,[s("除了点聚合还可以"),n("a",i,[s("实现多边形聚合"),c(a)]),s("有兴趣的同学可以去看看。")])])])}const f=p(u,[["render",y],["__file","cluster.html.vue"]]);export{f as default};
