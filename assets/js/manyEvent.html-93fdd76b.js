import{_ as a,o as s,c as t,a as p}from"./app-215c512d.js";const o={};function e(c,n){return s(),t("div",null,n[0]||(n[0]=[p(`<p>我来帮你编写一个详细的 README，解释如何处理复杂图层和点击事件的情况。</p><h1 id="openlayers-复杂图层点击事件处理指南" tabindex="-1"><a class="header-anchor" href="#openlayers-复杂图层点击事件处理指南" aria-hidden="true">#</a> OpenLayers 复杂图层点击事件处理指南</h1><h2 id="_1-图层结构分析" tabindex="-1"><a class="header-anchor" href="#_1-图层结构分析" aria-hidden="true">#</a> 1. 图层结构分析</h2><p>在当前应用中，我们有以下图层：</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 图层层级结构（从底到顶）：</span>
<span class="token number">1.</span> <span class="token function">底图图层</span> <span class="token punctuation">(</span><span class="token constant">XYZ</span><span class="token punctuation">)</span>
<span class="token number">2.</span> <span class="token function">农场边界图层</span> <span class="token punctuation">(</span>farmBoundary<span class="token punctuation">)</span>
<span class="token number">3.</span> <span class="token function">基础信息图层</span> <span class="token punctuation">(</span>basicInfoLayer<span class="token punctuation">)</span>
<span class="token number">4.</span> <span class="token function">标记点图层</span> <span class="token punctuation">(</span>markerLayer<span class="token punctuation">)</span>
<span class="token number">5.</span> <span class="token function">草地图层组</span> <span class="token punctuation">(</span>layerGroup<span class="token punctuation">)</span>
</code></pre></div><h2 id="_2-点击事件处理流程" tabindex="-1"><a class="header-anchor" href="#_2-点击事件处理流程" aria-hidden="true">#</a> 2. 点击事件处理流程</h2><h3 id="_2-1-事件监听设置" tabindex="-1"><a class="header-anchor" href="#_2-1-事件监听设置" aria-hidden="true">#</a> 2.1 事件监听设置</h3><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 在地图初始化时添加点击事件监听</span>
glMap<span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span><span class="token string">&#39;click&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">event</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> pixel <span class="token operator">=</span> event<span class="token punctuation">.</span>pixel<span class="token punctuation">;</span>        <span class="token comment">// 获取点击像素坐标</span>
  <span class="token keyword">const</span> coordinate <span class="token operator">=</span> event<span class="token punctuation">.</span>coordinate<span class="token punctuation">;</span> <span class="token comment">// 获取点击地理坐标</span>
  
  <span class="token comment">// 存储点击位置的所有要素</span>
  <span class="token keyword">const</span> clickedFeatures <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
  
  <span class="token comment">// 遍历点击位置的所有图层</span>
  glMap<span class="token punctuation">.</span><span class="token function">forEachFeatureAtPixel</span><span class="token punctuation">(</span>pixel<span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">feature<span class="token punctuation">,</span> layer</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    clickedFeatures<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      <span class="token literal-property property">feature</span><span class="token operator">:</span> feature<span class="token punctuation">,</span>
      <span class="token literal-property property">layer</span><span class="token operator">:</span> layer<span class="token punctuation">,</span>
      <span class="token literal-property property">layerName</span><span class="token operator">:</span> layer<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">&#39;name&#39;</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><h3 id="_2-2-图层优先级处理" tabindex="-1"><a class="header-anchor" href="#_2-2-图层优先级处理" aria-hidden="true">#</a> 2.2 图层优先级处理</h3><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 定义图层优先级顺序</span>
<span class="token keyword">const</span> priorityOrder <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">&#39;markerLayer&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;basicInfoLayer&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;farmBoundary&#39;</span><span class="token punctuation">]</span><span class="token punctuation">;</span>

<span class="token comment">// 按优先级排序点击到的要素</span>
clickedFeatures<span class="token punctuation">.</span><span class="token function">sort</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">a<span class="token punctuation">,</span> b</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> priorityOrder<span class="token punctuation">.</span><span class="token function">indexOf</span><span class="token punctuation">(</span>a<span class="token punctuation">.</span>layerName<span class="token punctuation">)</span> <span class="token operator">-</span> priorityOrder<span class="token punctuation">.</span><span class="token function">indexOf</span><span class="token punctuation">(</span>b<span class="token punctuation">.</span>layerName<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 处理最高优先级的图层点击事件</span>
<span class="token keyword">const</span> topFeature <span class="token operator">=</span> clickedFeatures<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> layerName <span class="token operator">=</span> topFeature<span class="token punctuation">.</span>layerName<span class="token punctuation">;</span>
<span class="token keyword">const</span> feature <span class="token operator">=</span> topFeature<span class="token punctuation">.</span>feature<span class="token punctuation">;</span>
</code></pre></div><h3 id="_2-3-各图层点击处理逻辑" tabindex="-1"><a class="header-anchor" href="#_2-3-各图层点击处理逻辑" aria-hidden="true">#</a> 2.3 各图层点击处理逻辑</h3><h4 id="_2-3-1-标记点图层-markerlayer" tabindex="-1"><a class="header-anchor" href="#_2-3-1-标记点图层-markerlayer" aria-hidden="true">#</a> 2.3.1 标记点图层 (markerLayer)</h4><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">case</span> <span class="token string">&#39;markerLayer&#39;</span><span class="token operator">:</span>
  <span class="token comment">// 1. 获取标记点信息</span>
  <span class="token keyword">const</span> markerName <span class="token operator">=</span> feature<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">&#39;name&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;点击了标记点:&#39;</span><span class="token punctuation">,</span> markerName<span class="token punctuation">)</span><span class="token punctuation">;</span>
  
  <span class="token comment">// 2. 设置弹窗位置</span>
  overlay<span class="token punctuation">.</span><span class="token function">setPosition</span><span class="token punctuation">(</span>coordinate<span class="token punctuation">)</span><span class="token punctuation">;</span>
  
  <span class="token comment">// 3. 准备显示数据</span>
  <span class="token keyword">const</span> markerData <span class="token operator">=</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span>
      <span class="token literal-property property">key</span><span class="token operator">:</span> <span class="token string">&quot;标记点名称&quot;</span><span class="token punctuation">,</span>
      <span class="token literal-property property">value</span><span class="token operator">:</span> markerName
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
      <span class="token literal-property property">key</span><span class="token operator">:</span> <span class="token string">&quot;位置&quot;</span><span class="token punctuation">,</span>
      <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">(</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>coordinate<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">toFixed</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token string"> E, </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>coordinate<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">toFixed</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token string"> N)</span><span class="token template-punctuation string">\`</span></span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">]</span><span class="token punctuation">;</span>
  
  <span class="token comment">// 4. 更新显示</span>
  grazingDataArr<span class="token punctuation">.</span>value <span class="token operator">=</span> markerData<span class="token punctuation">;</span>
  
  <span class="token comment">// 5. 清除其他选中状态</span>
  <span class="token function">clearSelection</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">break</span><span class="token punctuation">;</span>
</code></pre></div><h4 id="_2-3-2-基础信息图层-basicinfolayer" tabindex="-1"><a class="header-anchor" href="#_2-3-2-基础信息图层-basicinfolayer" aria-hidden="true">#</a> 2.3.2 基础信息图层 (basicInfoLayer)</h4><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">case</span> <span class="token string">&#39;basicInfoLayer&#39;</span><span class="token operator">:</span>
  <span class="token comment">// 1. 获取农场信息</span>
  <span class="token keyword">const</span> farmName <span class="token operator">=</span> feature<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">&#39;farmName&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  
  <span class="token comment">// 2. 设置弹窗</span>
  overlay<span class="token punctuation">.</span><span class="token function">setPosition</span><span class="token punctuation">(</span>coordinate<span class="token punctuation">)</span><span class="token punctuation">;</span>
  
  <span class="token comment">// 3. 准备数据</span>
  <span class="token keyword">const</span> basicInfoData <span class="token operator">=</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span>
      <span class="token literal-property property">key</span><span class="token operator">:</span> <span class="token string">&quot;农场名称&quot;</span><span class="token punctuation">,</span>
      <span class="token literal-property property">value</span><span class="token operator">:</span> farmName
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
      <span class="token literal-property property">key</span><span class="token operator">:</span> <span class="token string">&quot;点击位置&quot;</span><span class="token punctuation">,</span>
      <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">(</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>coordinate<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">toFixed</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token string"> E, </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>coordinate<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">toFixed</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token string"> N)</span><span class="token template-punctuation string">\`</span></span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">]</span><span class="token punctuation">;</span>
  
  <span class="token comment">// 4. 更新显示</span>
  grazingDataArr<span class="token punctuation">.</span>value <span class="token operator">=</span> basicInfoData<span class="token punctuation">;</span>
  
  <span class="token comment">// 5. 清除其他选中状态</span>
  <span class="token function">clearSelection</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">break</span><span class="token punctuation">;</span>
</code></pre></div><h4 id="_2-3-3-农场边界图层-farmboundary" tabindex="-1"><a class="header-anchor" href="#_2-3-3-农场边界图层-farmboundary" aria-hidden="true">#</a> 2.3.3 农场边界图层 (farmBoundary)</h4><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">case</span> <span class="token string">&#39;farmBoundary&#39;</span><span class="token operator">:</span>
  <span class="token comment">// 1. 获取农场信息</span>
  <span class="token keyword">const</span> farmBoundaryName <span class="token operator">=</span> feature<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">&#39;name&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">const</span> farmArea <span class="token operator">=</span> <span class="token function">getFarmArea</span><span class="token punctuation">(</span>farmBoundaryName<span class="token punctuation">)</span><span class="token punctuation">;</span>
  
  <span class="token comment">// 2. 设置弹窗</span>
  overlay<span class="token punctuation">.</span><span class="token function">setPosition</span><span class="token punctuation">(</span>coordinate<span class="token punctuation">)</span><span class="token punctuation">;</span>
  
  <span class="token comment">// 3. 准备数据</span>
  <span class="token keyword">const</span> farmData <span class="token operator">=</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span>
      <span class="token literal-property property">key</span><span class="token operator">:</span> <span class="token string">&quot;试验点位置&quot;</span><span class="token punctuation">,</span>
      <span class="token literal-property property">value</span><span class="token operator">:</span> farmBoundaryName
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
      <span class="token literal-property property">key</span><span class="token operator">:</span> <span class="token string">&quot;面积&quot;</span><span class="token punctuation">,</span>
      <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>farmArea<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string"> 亩</span><span class="token template-punctuation string">\`</span></span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">]</span><span class="token punctuation">;</span>
  
  <span class="token comment">// 4. 更新显示</span>
  grazingDataArr<span class="token punctuation">.</span>value <span class="token operator">=</span> farmData<span class="token punctuation">;</span>
  
  <span class="token comment">// 5. 清除其他选中状态</span>
  <span class="token function">clearSelection</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">break</span><span class="token punctuation">;</span>
</code></pre></div><h2 id="_3-辅助函数" tabindex="-1"><a class="header-anchor" href="#_3-辅助函数" aria-hidden="true">#</a> 3. 辅助函数</h2><h3 id="_3-1-清除选中状态" tabindex="-1"><a class="header-anchor" href="#_3-1-清除选中状态" aria-hidden="true">#</a> 3.1 清除选中状态</h3><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">clearSelection</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// 清除之前的选中状态</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>globalClearLayer<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    globalClearLayer<span class="token punctuation">.</span><span class="token function">getFeatures</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">clear</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  globalClearLayer <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">;</span>
  
  <span class="token comment">// 重置面板状态</span>
  catPannel<span class="token punctuation">.</span>value <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><h3 id="_3-2-弹窗关闭处理" tabindex="-1"><a class="header-anchor" href="#_3-2-弹窗关闭处理" aria-hidden="true">#</a> 3.2 弹窗关闭处理</h3><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">handlePopupClose</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// 1. 清除弹窗位置</span>
  overlay<span class="token punctuation">.</span><span class="token function">setPosition</span><span class="token punctuation">(</span><span class="token keyword">undefined</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  
  <span class="token comment">// 2. 清除选中状态</span>
  <span class="token function">clearSelection</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  
  <span class="token comment">// 3. 重置面板</span>
  catPannel<span class="token punctuation">.</span>value <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><h2 id="_4-性能优化建议" tabindex="-1"><a class="header-anchor" href="#_4-性能优化建议" aria-hidden="true">#</a> 4. 性能优化建议</h2><ol><li><strong>事件节流</strong></li></ol><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 使用节流函数处理频繁的点击事件</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> throttle <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;lodash&#39;</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> throttledClickHandler <span class="token operator">=</span> <span class="token function">throttle</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">event</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token comment">// 点击事件处理逻辑</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">200</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 200ms 的节流时间</span>

glMap<span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span><span class="token string">&#39;click&#39;</span><span class="token punctuation">,</span> throttledClickHandler<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><ol start="2"><li><strong>图层可见性控制</strong></li></ol><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 根据缩放级别控制图层可见性</span>
glMap<span class="token punctuation">.</span><span class="token function">getView</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span><span class="token string">&#39;change:resolution&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> zoom <span class="token operator">=</span> glMap<span class="token punctuation">.</span><span class="token function">getView</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getZoom</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  
  <span class="token comment">// 在特定缩放级别下显示/隐藏图层</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>zoom <span class="token operator">&lt;</span> <span class="token number">10</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    markerLayer<span class="token punctuation">.</span><span class="token function">setVisible</span><span class="token punctuation">(</span><span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
    markerLayer<span class="token punctuation">.</span><span class="token function">setVisible</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><ol start="3"><li><strong>要素缓存</strong></li></ol><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 缓存常用数据</span>
<span class="token keyword">const</span> farmAreaCache <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Map</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">function</span> <span class="token function">getFarmArea</span><span class="token punctuation">(</span><span class="token parameter">farmName</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>farmAreaCache<span class="token punctuation">.</span><span class="token function">has</span><span class="token punctuation">(</span>farmName<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> farmAreaCache<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>farmName<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  
  <span class="token keyword">const</span> area <span class="token operator">=</span> <span class="token function">calculateFarmArea</span><span class="token punctuation">(</span>farmName<span class="token punctuation">)</span><span class="token punctuation">;</span>
  farmAreaCache<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span>farmName<span class="token punctuation">,</span> area<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">return</span> area<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><h2 id="_5-错误处理" tabindex="-1"><a class="header-anchor" href="#_5-错误处理" aria-hidden="true">#</a> 5. 错误处理</h2><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">try</span> <span class="token punctuation">{</span>
  <span class="token comment">// 点击事件处理逻辑</span>
<span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span>error<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">error</span><span class="token punctuation">(</span><span class="token string">&#39;点击事件处理错误:&#39;</span><span class="token punctuation">,</span> error<span class="token punctuation">)</span><span class="token punctuation">;</span>
  
  <span class="token comment">// 错误恢复</span>
  <span class="token function">clearSelection</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  overlay<span class="token punctuation">.</span><span class="token function">setPosition</span><span class="token punctuation">(</span><span class="token keyword">undefined</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  
  <span class="token comment">// 显示错误提示</span>
  ElMessage<span class="token punctuation">.</span><span class="token function">error</span><span class="token punctuation">(</span><span class="token string">&#39;处理点击事件时发生错误&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><h2 id="_6-最佳实践建议" tabindex="-1"><a class="header-anchor" href="#_6-最佳实践建议" aria-hidden="true">#</a> 6. 最佳实践建议</h2><ol><li><p><strong>图层管理</strong></p><ul><li>为每个图层设置唯一的名称</li><li>使用图层组管理相关图层</li><li>合理设置图层 zIndex</li></ul></li><li><p><strong>事件处理</strong></p><ul><li>使用事件委托处理点击事件</li><li>实现图层优先级机制</li><li>添加适当的错误处理</li></ul></li><li><p><strong>性能优化</strong></p><ul><li>使用事件节流</li><li>实现图层可见性控制</li><li>缓存常用数据</li></ul></li><li><p><strong>用户体验</strong></p><ul><li>添加加载状态提示</li><li>实现平滑的动画效果</li><li>提供清晰的错误提示</li></ul></li><li><p><strong>代码组织</strong></p><ul><li>将图层配置抽离为独立模块</li><li>使用常量管理图层名称</li><li>实现可复用的工具函数</li></ul></li></ol><h2 id="_7-示例代码" tabindex="-1"><a class="header-anchor" href="#_7-示例代码" aria-hidden="true">#</a> 7. 示例代码</h2><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 图层配置常量</span>
<span class="token keyword">const</span> <span class="token constant">LAYER_NAMES</span> <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token constant">MARKER</span><span class="token operator">:</span> <span class="token string">&#39;markerLayer&#39;</span><span class="token punctuation">,</span>
  <span class="token constant">BASIC_INFO</span><span class="token operator">:</span> <span class="token string">&#39;basicInfoLayer&#39;</span><span class="token punctuation">,</span>
  <span class="token constant">FARM_BOUNDARY</span><span class="token operator">:</span> <span class="token string">&#39;farmBoundary&#39;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token comment">// 图层优先级配置</span>
<span class="token keyword">const</span> <span class="token constant">LAYER_PRIORITY</span> <span class="token operator">=</span> <span class="token punctuation">[</span>
  <span class="token constant">LAYER_NAMES</span><span class="token punctuation">.</span><span class="token constant">MARKER</span><span class="token punctuation">,</span>
  <span class="token constant">LAYER_NAMES</span><span class="token punctuation">.</span><span class="token constant">BASIC_INFO</span><span class="token punctuation">,</span>
  <span class="token constant">LAYER_NAMES</span><span class="token punctuation">.</span><span class="token constant">FARM_BOUNDARY</span>
<span class="token punctuation">]</span><span class="token punctuation">;</span>

<span class="token comment">// 点击事件处理函数</span>
<span class="token keyword">function</span> <span class="token function">handleMapClick</span><span class="token punctuation">(</span><span class="token parameter">event</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token punctuation">{</span> pixel<span class="token punctuation">,</span> coordinate <span class="token punctuation">}</span> <span class="token operator">=</span> event<span class="token punctuation">;</span>
  <span class="token keyword">const</span> clickedFeatures <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
  
  <span class="token comment">// 收集点击位置的要素</span>
  glMap<span class="token punctuation">.</span><span class="token function">forEachFeatureAtPixel</span><span class="token punctuation">(</span>pixel<span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">feature<span class="token punctuation">,</span> layer</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    clickedFeatures<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      feature<span class="token punctuation">,</span>
      layer<span class="token punctuation">,</span>
      <span class="token literal-property property">layerName</span><span class="token operator">:</span> layer<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">&#39;name&#39;</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  
  <span class="token comment">// 按优先级处理</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>clickedFeatures<span class="token punctuation">.</span>length <span class="token operator">&gt;</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> topFeature <span class="token operator">=</span> clickedFeatures<span class="token punctuation">.</span><span class="token function">sort</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">a<span class="token punctuation">,</span> b</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> <span class="token constant">LAYER_PRIORITY</span><span class="token punctuation">.</span><span class="token function">indexOf</span><span class="token punctuation">(</span>a<span class="token punctuation">.</span>layerName<span class="token punctuation">)</span> <span class="token operator">-</span> 
             <span class="token constant">LAYER_PRIORITY</span><span class="token punctuation">.</span><span class="token function">indexOf</span><span class="token punctuation">(</span>b<span class="token punctuation">.</span>layerName<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
    
    <span class="token comment">// 处理点击事件</span>
    <span class="token function">handleFeatureClick</span><span class="token punctuation">(</span>topFeature<span class="token punctuation">,</span> coordinate<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
    <span class="token comment">// 点击空白处</span>
    <span class="token function">clearSelection</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// 要素点击处理</span>
<span class="token keyword">function</span> <span class="token function">handleFeatureClick</span><span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span> feature<span class="token punctuation">,</span> layerName <span class="token punctuation">}</span><span class="token punctuation">,</span> coordinate</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">try</span> <span class="token punctuation">{</span>
    <span class="token keyword">switch</span> <span class="token punctuation">(</span>layerName<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">case</span> <span class="token constant">LAYER_NAMES</span><span class="token punctuation">.</span><span class="token constant">MARKER</span><span class="token operator">:</span>
        <span class="token function">handleMarkerClick</span><span class="token punctuation">(</span>feature<span class="token punctuation">,</span> coordinate<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">break</span><span class="token punctuation">;</span>
      <span class="token keyword">case</span> <span class="token constant">LAYER_NAMES</span><span class="token punctuation">.</span><span class="token constant">BASIC_INFO</span><span class="token operator">:</span>
        <span class="token function">handleBasicInfoClick</span><span class="token punctuation">(</span>feature<span class="token punctuation">,</span> coordinate<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">break</span><span class="token punctuation">;</span>
      <span class="token keyword">case</span> <span class="token constant">LAYER_NAMES</span><span class="token punctuation">.</span><span class="token constant">FARM_BOUNDARY</span><span class="token operator">:</span>
        <span class="token function">handleFarmBoundaryClick</span><span class="token punctuation">(</span>feature<span class="token punctuation">,</span> coordinate<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">break</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span>error<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">handleClickError</span><span class="token punctuation">(</span>error<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><p>这个详细的指南涵盖了复杂图层点击事件处理的各个方面，包括事件处理流程、性能优化、错误处理等。你可以根据实际需求调整和扩展这些内容。</p>`,36)]))}const l=a(o,[["render",e],["__file","manyEvent.html.vue"]]);export{l as default};
