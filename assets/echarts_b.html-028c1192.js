import{_ as n,p as s,q as a,a1 as p}from"./framework-d81ad7e5.js";const t={},o=p(`<h2 id="echarts-参考资源" tabindex="-1"><a class="header-anchor" href="#echarts-参考资源" aria-hidden="true">#</a> echarts 参考资源</h2><div class="language-bash" data-ext="sh"><pre class="language-bash"><code>更多配置 https://echarts.apache.org/zh/option.html<span class="token comment">#title</span>
API       https://echarts.apache.org/zh/option.html<span class="token comment">#series-pie.id</span>
DEMO  https://echarts.apache.org/examples/zh/index.html<span class="token comment">#chart-type-bar</span>
https://www.makeapie.com/explore.html
</code></pre></div><h2 id="ajax-echarts" tabindex="-1"><a class="header-anchor" href="#ajax-echarts" aria-hidden="true">#</a> ajax+echarts</h2><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token function">$</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">var</span> myChart <span class="token operator">=</span> echarts<span class="token punctuation">.</span><span class="token function">init</span><span class="token punctuation">(</span>document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">&#39;main&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">// 指定图表的配置项和数据</span>
    myChart<span class="token punctuation">.</span><span class="token function">setOption</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">text</span><span class="token operator">:</span> <span class="token string">&#39;问题状态统计分析&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">x</span><span class="token operator">:</span> <span class="token string">&#39;center&#39;</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token literal-property property">tooltip</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">trigger</span><span class="token operator">:</span> <span class="token string">&#39;item&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">formatter</span><span class="token operator">:</span> <span class="token string">&quot;{a} &lt;br/&gt;{b} : {c} ({d}%)&quot;</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token literal-property property">legend</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">orient</span><span class="token operator">:</span> <span class="token string">&#39;vertical&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">left</span><span class="token operator">:</span> <span class="token string">&#39;left&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">data</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token literal-property property">toolbox</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">show</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
        <span class="token literal-property property">feature</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token literal-property property">mark</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token literal-property property">show</span><span class="token operator">:</span> <span class="token boolean">true</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token literal-property property">dataView</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token literal-property property">show</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token literal-property property">readOnly</span><span class="token operator">:</span> <span class="token boolean">false</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token literal-property property">magicType</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token literal-property property">show</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
            <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;pie&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;funnel&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
            <span class="token literal-property property">option</span><span class="token operator">:</span> <span class="token punctuation">{</span>
              <span class="token literal-property property">funnel</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                <span class="token literal-property property">x</span><span class="token operator">:</span> <span class="token string">&#39;25%&#39;</span><span class="token punctuation">,</span>
                <span class="token literal-property property">width</span><span class="token operator">:</span> <span class="token string">&#39;50%&#39;</span><span class="token punctuation">,</span>
                <span class="token literal-property property">funnelAlign</span><span class="token operator">:</span> <span class="token string">&#39;left&#39;</span><span class="token punctuation">,</span>
                <span class="token literal-property property">max</span><span class="token operator">:</span> <span class="token number">1548</span>
              <span class="token punctuation">}</span>
            <span class="token punctuation">}</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token literal-property property">restore</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token literal-property property">show</span><span class="token operator">:</span> <span class="token boolean">true</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token literal-property property">saveAsImage</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token literal-property property">show</span><span class="token operator">:</span> <span class="token boolean">true</span> <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token literal-property property">calculable</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
      <span class="token literal-property property">series</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token punctuation">{</span>
          <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">,</span>
          <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">&#39;pie&#39;</span><span class="token punctuation">,</span>
          <span class="token literal-property property">radius</span><span class="token operator">:</span> <span class="token string">&#39;55%&#39;</span><span class="token punctuation">,</span>
          <span class="token literal-property property">center</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;50%&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;60%&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
          <span class="token literal-property property">data</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">]</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token comment">//饼图动态赋值</span>
    <span class="token keyword">var</span> url <span class="token operator">=</span> <span class="token string">&quot;~/routingAdv/ftymx/getCountType&quot;</span><span class="token punctuation">;</span>
    $<span class="token punctuation">.</span><span class="token function">ajax</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      <span class="token literal-property property">url</span><span class="token operator">:</span> url<span class="token punctuation">,</span>
      <span class="token literal-property property">async</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
      <span class="token comment">//data : {&quot;year&quot;:year},</span>
      <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">&#39;post&#39;</span><span class="token punctuation">,</span>
      <span class="token literal-property property">dataType</span><span class="token operator">:</span> <span class="token string">&quot;json&quot;</span><span class="token punctuation">,</span>
      <span class="token literal-property property">cache</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
      <span class="token function-variable function">success</span><span class="token operator">:</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">data</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">var</span> names <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span><span class="token comment">//定义两个数组</span>
        <span class="token keyword">var</span> nums <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>

<span class="token comment">//{&quot;total&quot;:2,&quot;rows&quot;:[{&quot;wtzt&quot;:&quot;已处理&quot;,&quot;ct&quot;:&quot;3&quot;,&quot;num&quot;:&quot;1&quot;},{&quot;wtzt&quot;:&quot;待处理&quot;,&quot;ct&quot;:&quot;3&quot;,&quot;num&quot;:&quot;2&quot;}]}</span>
        $<span class="token punctuation">.</span><span class="token function">each</span><span class="token punctuation">(</span>data<span class="token punctuation">.</span>rows<span class="token punctuation">,</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">key<span class="token punctuation">,</span> values</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token comment">//    List&lt;Map&lt;String,Object&gt;&gt; list 数据结构</span>
         <span class="token comment">//动态分类</span>
          names<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>values<span class="token punctuation">.</span>typename<span class="token punctuation">)</span><span class="token punctuation">;</span>
          <span class="token keyword">var</span> obj <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Object</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">//创建对象， 动态添加</span>
          obj<span class="token punctuation">.</span>name <span class="token operator">=</span> values<span class="token punctuation">.</span>typename<span class="token punctuation">;</span>
          obj<span class="token punctuation">.</span>value <span class="token operator">=</span> values<span class="token punctuation">.</span>zjsum<span class="token punctuation">;</span>
          nums<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>obj<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        myChart<span class="token punctuation">.</span><span class="token function">setOption</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token comment">//加载数据图表</span>
          <span class="token literal-property property">legend</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token literal-property property">data</span><span class="token operator">:</span> names
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token literal-property property">series</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token comment">// 根据名字对应到相应的系列</span>
            <span class="token comment">//name: names,       </span>
            <span class="token literal-property property">data</span><span class="token operator">:</span> nums
          <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>


      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token function-variable function">error</span><span class="token operator">:</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">err</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token function">alert</span><span class="token punctuation">(</span><span class="token string">&quot;查询失败&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre></div><h3 id="自定义颜色" tabindex="-1"><a class="header-anchor" href="#自定义颜色" aria-hidden="true">#</a> 自定义颜色</h3><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token literal-property property">series</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token punctuation">{</span>
          <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;直接访问&#39;</span><span class="token punctuation">,</span>
          <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">&#39;bar&#39;</span><span class="token punctuation">,</span>
          <span class="token literal-property property">barWidth</span><span class="token operator">:</span> <span class="token string">&#39;60%&#39;</span><span class="token punctuation">,</span>
          <span class="token literal-property property">data</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">10</span><span class="token punctuation">,</span> <span class="token number">52</span><span class="token punctuation">,</span> <span class="token number">20</span><span class="token punctuation">,</span> <span class="token number">34</span><span class="token punctuation">,</span>  <span class="token number">0</span><span class="token punctuation">]</span>
          <span class="token punctuation">,</span> <span class="token literal-property property">itemStyle</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                <span class="token literal-property property">normal</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                    <span class="token function-variable function">color</span><span class="token operator">:</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">params</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                        <span class="token comment">// build a color map as your need.</span>
                        <span class="token keyword">var</span> colorList <span class="token operator">=</span> <span class="token punctuation">[</span>
                          <span class="token string">&#39;#C1232B&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;#B5C334&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;#FCCE10&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;#E87C25&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;#27727B&#39;</span><span class="token punctuation">,</span>
                           <span class="token string">&#39;#FE8463&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;#9BCA63&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;#FAD860&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;#F3A43B&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;#60C0DD&#39;</span><span class="token punctuation">,</span>
                           <span class="token string">&#39;#D7504B&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;#C6E579&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;#F4E001&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;#F0805A&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;#26C0C0&#39;</span>
                        <span class="token punctuation">]</span><span class="token punctuation">;</span>
                        <span class="token keyword">return</span> colorList<span class="token punctuation">[</span>params<span class="token punctuation">.</span>dataIndex<span class="token punctuation">]</span>
                    <span class="token punctuation">}</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">]</span>
</code></pre></div>`,6),e=[o];function c(l,r){return s(),a("div",null,e)}const k=n(t,[["render",c],["__file","echarts_b.html.vue"]]);export{k as default};
