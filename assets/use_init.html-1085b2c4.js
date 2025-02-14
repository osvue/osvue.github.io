import{_ as n,p as s,q as a,a1 as p}from"./framework-d81ad7e5.js";const t={},e=p(`<ul><li>第一次实战</li></ul><h3 id="移除自带地形-影像" tabindex="-1"><a class="header-anchor" href="#移除自带地形-影像" aria-hidden="true">#</a> 移除自带地形 影像</h3><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code>
 

<span class="token comment">// 初始化时移除</span>

 <span class="token keyword">const</span> viewer <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Cesium<span class="token punctuation">.</span>Viewer</span><span class="token punctuation">(</span><span class="token string">&#39;map3d&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">terrainProvider</span><span class="token operator">:</span> <span class="token keyword">new</span> <span class="token class-name">Cesium<span class="token punctuation">.</span>EllipsoidTerrainProvider</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span><span class="token comment">//移除自带地形</span>
        <span class="token literal-property property">baseLayerPicker</span><span class="token operator">:</span><span class="token boolean">false</span><span class="token punctuation">,</span>
        <span class="token literal-property property">homeButton</span><span class="token operator">:</span><span class="token boolean">false</span><span class="token punctuation">,</span>
        <span class="token literal-property property">infoBox</span><span class="token operator">:</span><span class="token boolean">false</span><span class="token punctuation">,</span>
        <span class="token literal-property property">timeline</span><span class="token operator">:</span><span class="token boolean">false</span><span class="token punctuation">,</span>
        <span class="token literal-property property">navigationHelpButton</span><span class="token operator">:</span><span class="token boolean">false</span><span class="token punctuation">,</span>
        <span class="token literal-property property">geocoder</span><span class="token operator">:</span><span class="token boolean">false</span><span class="token punctuation">,</span>
        <span class="token literal-property property">sceneModePicker</span><span class="token operator">:</span><span class="token boolean">false</span><span class="token punctuation">,</span>
        <span class="token literal-property property">animation</span><span class="token operator">:</span><span class="token boolean">false</span><span class="token punctuation">,</span>
        <span class="token literal-property property">fullscreenButton</span><span class="token operator">:</span><span class="token boolean">false</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
 
<span class="token comment">// 使用时移除</span>

viewer<span class="token punctuation">.</span>scene<span class="token punctuation">.</span>terrainProvider<span class="token operator">=</span><span class="token keyword">new</span> <span class="token class-name">Cesium<span class="token punctuation">.</span>EllipsoidTerrainProvider</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
 

  <span class="token keyword">const</span> viewer <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Cesium<span class="token punctuation">.</span>Viewer</span><span class="token punctuation">(</span><span class="token string">&#39;map3d&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
       
        <span class="token literal-property property">imageryProvider</span><span class="token operator">:</span>  <span class="token keyword">new</span> <span class="token class-name">Cesium<span class="token punctuation">.</span>UrlTemplateImageryProvider</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
          <span class="token literal-property property">url</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">{</span>url<span class="token punctuation">}</span><span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span><span class="token comment">//替换为自己的影像</span>
        <span class="token literal-property property">baseLayerPicker</span><span class="token operator">:</span><span class="token boolean">false</span><span class="token punctuation">,</span>
        <span class="token literal-property property">homeButton</span><span class="token operator">:</span><span class="token boolean">false</span><span class="token punctuation">,</span>
        <span class="token literal-property property">infoBox</span><span class="token operator">:</span><span class="token boolean">false</span><span class="token punctuation">,</span>
        <span class="token literal-property property">timeline</span><span class="token operator">:</span><span class="token boolean">false</span><span class="token punctuation">,</span>
        <span class="token literal-property property">navigationHelpButton</span><span class="token operator">:</span><span class="token boolean">false</span><span class="token punctuation">,</span>
        <span class="token literal-property property">geocoder</span><span class="token operator">:</span><span class="token boolean">false</span><span class="token punctuation">,</span>
        <span class="token literal-property property">sceneModePicker</span><span class="token operator">:</span><span class="token boolean">false</span><span class="token punctuation">,</span>
        <span class="token literal-property property">animation</span><span class="token operator">:</span><span class="token boolean">false</span><span class="token punctuation">,</span>
        <span class="token literal-property property">fullscreenButton</span><span class="token operator">:</span><span class="token boolean">false</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 使用时移除</span>

viewer<span class="token punctuation">.</span>imageryLayers<span class="token punctuation">.</span><span class="token function">removeAll</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token comment">//或</span>
viewer<span class="token punctuation">.</span>imageryLayers<span class="token punctuation">.</span><span class="token function">remove</span><span class="token punctuation">(</span>viewer<span class="token punctuation">.</span>imageryLayers<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><h3 id="vite-cesium" tabindex="-1"><a class="header-anchor" href="#vite-cesium" aria-hidden="true">#</a> vite cesium</h3><div class="language-jsx" data-ext="jsx"><pre class="language-jsx"><code>引用cesium地球插件，需要先下载cesium以及vite<span class="token operator">-</span>plugin<span class="token operator">-</span>cesium
npm i cesium vite<span class="token operator">-</span>plugin<span class="token operator">-</span>cesium
或者
yarn add cesium vite<span class="token operator">-</span>plugin<span class="token operator">-</span>cesium

此处遇到的坑：下载cesium以及vite<span class="token operator">-</span>plugin<span class="token operator">-</span>cesium的时候发现怎么都下载不进去，然后检查之后发现是<span class="token keyword">package</span><span class="token operator">-</span>lock<span class="token punctuation">.</span>json锁住了，此时我通过将<span class="token keyword">package</span><span class="token operator">-</span>lock<span class="token punctuation">.</span>json这个文件删除的方法得以解决。
解决方法参考：npm <span class="token constant">ERR</span><span class="token operator">!</span> Cannot read property ‘match’ <span class="token keyword">of</span> <span class="token keyword">undefined</span> 错误处理
<span class="token number">2.</span>插件下载完成后， 进行vite<span class="token operator">-</span>plugin<span class="token operator">-</span>cesium的配置。

<span class="token keyword">import</span>导入：<span class="token keyword">import</span> cesium <span class="token keyword">from</span> <span class="token string">&#39;vite-plugin-cesium&#39;</span>
<span class="token function">使用：vitePlugins</span><span class="token punctuation">(</span><span class="token function">cesium</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> 


</code></pre></div>`,5),o=[e];function c(l,r){return s(),a("div",null,o)}const k=n(t,[["render",c],["__file","use_init.html.vue"]]);export{k as default};
