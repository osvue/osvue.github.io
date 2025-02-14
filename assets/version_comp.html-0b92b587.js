import{_ as n,p as s,q as a,a1 as t}from"./framework-d81ad7e5.js";const p={},o=t(`<ul><li><code>107.0 之前</code></li><li>使用 CesiumTerrainProvider 加载地形:</li></ul><p><code>terrainProvider: Cesium.createWorldTerrain(), // 地形数据</code></p><p>或者</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code>viewer<span class="token punctuation">.</span>terrainProvider <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Cesium<span class="token punctuation">.</span>CesiumTerrainProvider</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">url</span><span class="token operator">:</span> <span class="token string">&#39;https://assets.agi.com/stk-terrain/world&#39;</span> 
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
 
<span class="token comment">// 1.107.0 之后</span>
<span class="token comment">// 我们可以使用一下几个方法解决</span>

<span class="token literal-property property">terrain</span><span class="token operator">:</span> Cesium<span class="token punctuation">.</span>Terrain<span class="token punctuation">.</span><span class="token function">fromWorldTerrain</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token comment">// 地形数据</span>
 
<span class="token comment">// 或者</span>

<span class="token comment">// 添加地形数据</span>
<span class="token keyword">const</span> <span class="token function-variable function">addWorldTerrainAsync</span> <span class="token operator">=</span> <span class="token keyword">async</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">viewer</span><span class="token operator">:</span> Cesium<span class="token punctuation">.</span>Viewer</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">try</span> <span class="token punctuation">{</span>    
    <span class="token keyword">const</span> terrainProvider <span class="token operator">=</span> <span class="token keyword">await</span> Cesium<span class="token punctuation">.</span>CesiumTerrainProvider<span class="token punctuation">.</span><span class="token function">fromUrl</span><span class="token punctuation">(</span>
      <span class="token string">&quot;//data.mars3d.cn/terrain&quot;</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">requestWaterMask</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
        <span class="token literal-property property">requestVertexNormals</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">)</span><span class="token punctuation">;</span>

    viewer<span class="token punctuation">.</span>terrainProvider <span class="token operator">=</span> terrainProvider<span class="token punctuation">;</span>
  <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span>error<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">Failed to add world imagery: </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>error<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
 
<span class="token comment">// 或者</span>

<span class="token comment">// 添加地形数据</span>
<span class="token keyword">const</span> <span class="token function-variable function">addWorldTerrainAsync</span> <span class="token operator">=</span> <span class="token keyword">async</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">viewer</span><span class="token operator">:</span> Cesium<span class="token punctuation">.</span>Viewer</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">try</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> terrainProvider <span class="token operator">=</span> <span class="token keyword">await</span> Cesium<span class="token punctuation">.</span><span class="token function">createWorldTerrainAsync</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      <span class="token literal-property property">requestWaterMask</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
      <span class="token literal-property property">requestVertexNormals</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  

    viewer<span class="token punctuation">.</span>terrainProvider <span class="token operator">=</span> terrainProvider<span class="token punctuation">;</span>
  <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span>error<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">Failed to add world imagery: </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>error<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre></div>`,4),e=[o];function c(r,l){return s(),a("div",null,e)}const i=n(p,[["render",c],["__file","version_comp.html.vue"]]);export{i as default};
