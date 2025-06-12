import{_ as s,o as a,c as p,a as t}from"./app-215c512d.js";const o={};function e(c,n){return a(),p("div",null,n[0]||(n[0]=[t(`<div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> Map<span class="token punctuation">,</span> View <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;ol&#39;</span>
<span class="token keyword">import</span> Tile <span class="token keyword">from</span> <span class="token string">&#39;ol/layer/Tile&#39;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> <span class="token constant">OSM</span><span class="token punctuation">,</span> BingMaps <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;ol/source&#39;</span>
<span class="token keyword">import</span> <span class="token string">&#39;ol/ol.css&#39;</span>

 
<span class="token keyword">const</span> map <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">)</span>

<span class="token keyword">const</span> source <span class="token operator">=</span> <span class="token function">reactive</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">osm</span><span class="token operator">:</span> <span class="token keyword">new</span> <span class="token class-name">OSM</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token literal-property property">bing</span><span class="token operator">:</span> <span class="token keyword">new</span> <span class="token class-name">BingMaps</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">key</span><span class="token operator">:</span> <span class="token string">&#39;AiZrfxUNMRpOOlCpcMkBPxMUSKOEzqGeJTcVKUrXBsUdQDXutUBFN3-GnMNSlso-&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">imagerySet</span><span class="token operator">:</span> <span class="token string">&#39;Aerial&#39;</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token keyword">const</span> layer <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Tile</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token keyword">function</span> <span class="token function">initMap</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// 地图实例</span>
  map<span class="token punctuation">.</span>value <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Map</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">target</span><span class="token operator">:</span> <span class="token string">&#39;map&#39;</span><span class="token punctuation">,</span> <span class="token comment">// 对应页面里 id 为 map 的元素</span>
    <span class="token literal-property property">layers</span><span class="token operator">:</span> <span class="token punctuation">[</span>layer<span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token literal-property property">view</span><span class="token operator">:</span> <span class="token keyword">new</span> <span class="token class-name">View</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token comment">// 地图视图</span>
      <span class="token literal-property property">projection</span><span class="token operator">:</span> <span class="token string">&quot;EPSG:4326&quot;</span><span class="token punctuation">,</span> <span class="token comment">// 坐标系，有EPSG:4326和EPSG:3857</span>
      <span class="token literal-property property">center</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">114.064839</span><span class="token punctuation">,</span> <span class="token number">22.548857</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token comment">// 深圳坐标</span>
      <span class="token literal-property property">minZoom</span><span class="token operator">:</span><span class="token number">10</span><span class="token punctuation">,</span> <span class="token comment">// 地图缩放最小级别</span>
      <span class="token literal-property property">zoom</span><span class="token operator">:</span> <span class="token number">12</span> <span class="token comment">// 地图缩放级别（打开页面时默认级别）</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
  
  layer<span class="token punctuation">.</span><span class="token function">setSource</span><span class="token punctuation">(</span>source<span class="token punctuation">.</span>osm<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token comment">// 切换/设置图源</span>
<span class="token keyword">function</span> <span class="token function">setSource</span><span class="token punctuation">(</span><span class="token parameter">data</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  layer<span class="token punctuation">.</span><span class="token function">setSource</span><span class="token punctuation">(</span>source<span class="token punctuation">[</span>data<span class="token punctuation">]</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

</code></pre></div>`,1)]))}const r=s(o,[["render",e],["__file","sour.html.vue"]]);export{r as default};
