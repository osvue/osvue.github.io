import{_ as s,p as n,q as a,a1 as t}from"./framework-d81ad7e5.js";const p={},e=t(`<div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 使用 geoServer 发布 toop 命名空间</span>
  <span class="token comment">//   tasmania_state_boundaries  图层名称</span>
  <span class="token keyword">var</span> imageryProvider <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Cesium<span class="token punctuation">.</span>WebMapServiceImageryProvider</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token comment">// 这里是你的 geoserver服务点击查看图层的 url</span>
    <span class="token literal-property property">url</span><span class="token operator">:</span> <span class="token string">&quot;http://127.0.0.1:8080/geoserver/topp/wms&quot;</span><span class="token punctuation">,</span>
    <span class="token comment">// 这里是自定义的图层名称</span>
    <span class="token literal-property property">layers</span><span class="token operator">:</span> <span class="token string">&quot;tasmania_state_boundaries&quot;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">parameters</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">service</span><span class="token operator">:</span> <span class="token string">&quot;WMS&quot;</span><span class="token punctuation">,</span>
      <span class="token literal-property property">format</span><span class="token operator">:</span> <span class="token string">&quot;image/png&quot;</span><span class="token punctuation">,</span>
      <span class="token literal-property property">transparent</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token comment">// 图层添加</span>
  viewer<span class="token punctuation">.</span>imageryLayers<span class="token punctuation">.</span><span class="token function">addImageryProvider</span><span class="token punctuation">(</span>imageryProvider<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div>`,1),o=[e];function r(c,l){return n(),a("div",null,o)}const i=s(p,[["render",r],["__file","geoserver.html.vue"]]);export{i as default};
