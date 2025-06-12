import{_ as s,o as a,c as p,a as t}from"./app-215c512d.js";const o={};function e(c,n){return a(),p("div",null,n[0]||(n[0]=[t(`<p>在使用 Vite 和 Cesium 时，如果遇到类似的问题，通常是因为 Cesium 的工作者（workers）脚本路径不正确。Cesium 默认会从特定的路径加载这些脚本，而 Vite 并没有直接处理这些脚本的路径，因此需要额外配置。</p><h3 id="解决方法" tabindex="-1"><a class="header-anchor" href="#解决方法" aria-hidden="true">#</a> 解决方法：</h3><ul><li><code>Cesium.buildModuleUrl.setBaseUrl(&#39;/cesium/&#39;);</code></li></ul><ol><li><p><strong>设置 Cesium 的 Worker 路径：</strong></p><p>你可以在你的项目中显式指定 Cesium 工作者的路径。通常，Cesium 的 worker 文件位于 <code>node_modules/cesium/Build/Cesium/Workers/</code>，你需要将它们正确地引入。</p><p>在你的 <code>main.js</code> 或 <code>index.js</code> 中，可以这样配置：</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token operator">*</span> <span class="token keyword">as</span> Cesium <span class="token keyword">from</span> <span class="token string">&#39;cesium&#39;</span><span class="token punctuation">;</span>

<span class="token comment">// 设置 Cesium 的工作者路径</span>
Cesium<span class="token punctuation">.</span>Ion<span class="token punctuation">.</span>defaultAccessToken <span class="token operator">=</span> <span class="token string">&#39;&lt;your-access-token&gt;&#39;</span><span class="token punctuation">;</span>

<span class="token comment">// 设置工作者路径</span>
Cesium<span class="token punctuation">.</span>Worker<span class="token punctuation">.</span><span class="token function">setDefaultAccessToken</span><span class="token punctuation">(</span><span class="token string">&#39;&lt;your-access-token&gt;&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
Cesium<span class="token punctuation">.</span>Cesium3DTileset<span class="token punctuation">.</span><span class="token function">setDefaultAccessToken</span><span class="token punctuation">(</span><span class="token string">&#39;&lt;your-access-token&gt;&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 你可以将 Cesium Workers 路径设置为相对路径或者绝对路径</span>
Cesium<span class="token punctuation">.</span>buildModuleUrl<span class="token punctuation">.</span><span class="token function">setBaseUrl</span><span class="token punctuation">(</span><span class="token string">&#39;/cesium/&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><p>这样，你需要在构建或运行时确保 <code>/cesium/</code> 路径指向你的 Cesium 库的 <code>Workers</code> 目录。你可以通过在 <code>public</code> 目录中将 <code>node_modules/cesium/Build/Cesium/Workers</code> 复制到项目的 <code>/cesium/</code> 目录来解决路径问题。</p></li><li><p><strong>Vite 配置：</strong></p><p>Vite 本身可能没有处理 Cesium 的 worker 文件路径，因此你需要修改 <code>vite.config.js</code> 配置文件来正确配置静态资源路径。你可以添加一个 <code>publicDir</code> 选项，或者通过 <code>base</code> 配置来修改路径。</p><p>示例配置：</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> defineConfig <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vite&#39;</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineConfig</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">base</span><span class="token operator">:</span> <span class="token string">&#39;/&#39;</span><span class="token punctuation">,</span>  <span class="token comment">// 或者根据你的实际路径进行修改</span>
  <span class="token literal-property property">publicDir</span><span class="token operator">:</span> <span class="token string">&#39;public&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">build</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">rollupOptions</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">external</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;cesium&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div></li><li><p><strong>使用 Vite 的插件：</strong></p><p>如果上述方法仍然无法解决问题，可以考虑使用专门为 Cesium 配置的 Vite 插件。例如：<code>vite-plugin-cesium</code>，它可以帮助自动处理 Cesium 的 worker 和其他相关资源。</p><p>安装插件：</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token function">npm</span> <span class="token function">install</span> vite-plugin-cesium
</code></pre></div><p>配置插件：</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> defineConfig <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vite&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> ViteCesium <span class="token keyword">from</span> <span class="token string">&#39;vite-plugin-cesium&#39;</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineConfig</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token function">ViteCesium</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div></li><li><p><strong>检查 <code>node_modules/cesium</code> 文件夹：</strong></p><p>确保你安装了 Cesium 的依赖，并且路径没有错误。如果你通过 <code>npm install cesium</code> 安装了 Cesium，检查 <code>node_modules/cesium/Build/Cesium/Workers</code> 目录是否存在。</p><p>如果 Cesium 安装路径存在问题，尝试删除 <code>node_modules</code> 目录并重新安装：</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token function">rm</span> <span class="token parameter variable">-rf</span> node_modules
<span class="token function">npm</span> <span class="token function">install</span>
</code></pre></div></li></ol><div class="language-vue" data-ext="vue"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>full_view<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>cesiumContainer<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
 
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> <span class="token operator">*</span> <span class="token keyword">as</span> Cesium <span class="token keyword">from</span> <span class="token string">&#39;cesium&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span>onMounted<span class="token punctuation">,</span> ref<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span><span class="token punctuation">;</span>
<span class="token comment">// import &quot;cesium/Build/Cesium/Widgets/widgets.css&quot; // 引入Cesium需要的css</span>
<span class="token keyword">import</span> <span class="token string">&#39;cesium/Build/CesiumUnminified/Widgets/widgets.css&#39;</span>

<span class="token keyword">import</span> <span class="token punctuation">{</span> TileMapServiceImageryProvider<span class="token punctuation">,</span> Viewer<span class="token punctuation">,</span> buildModuleUrl <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;cesium&#39;</span>

<span class="token keyword">const</span> viewer <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token function">onMounted</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token comment">//初始化地球</span>
  <span class="token function">initCesium</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
 

<span class="token comment">//初始化地球</span>
<span class="token keyword">const</span> <span class="token function-variable function">initCesium</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    Cesium<span class="token punctuation">.</span>Ion<span class="token punctuation">.</span>defaultAccessToken <span class="token operator">=</span> <span class="token string">&quot;eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiI3ZmJjODE1Yy1kMjU4LTQyZTgtODAyZC1mNzE2MDNhMmQ3YzUiLCJpZCI6MTk5NzQwLCJpYXQiOjE3MDk2Mjg5Mjh9.GuRbyEbm8FknaFOM34kGm9wCbf2XVjp873h_QD-Vs7A&quot;</span>
  <span class="token comment">//默认定位到中国上空</span>
  Cesium<span class="token punctuation">.</span>Camera<span class="token punctuation">.</span><span class="token constant">DEFAULT_VIEW_RECTANGLE</span> <span class="token operator">=</span> Cesium<span class="token punctuation">.</span>Rectangle<span class="token punctuation">.</span><span class="token function">fromDegrees</span><span class="token punctuation">(</span>
      <span class="token number">75.0</span><span class="token punctuation">,</span> <span class="token comment">// 东</span>
      <span class="token number">0.0</span><span class="token punctuation">,</span> <span class="token comment">// 南</span>
      <span class="token number">140.0</span><span class="token punctuation">,</span> <span class="token comment">// 西</span>
      <span class="token number">60.0</span> <span class="token comment">// 北</span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
  viewer<span class="token punctuation">.</span>value <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Cesium<span class="token punctuation">.</span>Viewer</span><span class="token punctuation">(</span><span class="token string">&#39;cesiumContainer&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
 
    <span class="token literal-property property">infoBox</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span> <span class="token comment">// 禁用沙箱，解决控制台报错</span>
    <span class="token comment">// 是否显示图层选择器</span>
    <span class="token literal-property property">baseLayerPicker</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
    <span class="token comment">// 是否显示全屏按钮</span>
    <span class="token literal-property property">fullscreenButton</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token comment">// 是否显示右上角的查询按钮</span>
    <span class="token literal-property property">geocoder</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
    <span class="token comment">// 是否显示HOME按钮</span>
    <span class="token literal-property property">homeButton</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token comment">// 是否显示场景控制按钮</span>
    <span class="token literal-property property">sceneModePicker</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
    <span class="token comment">// 是否显示帮助按钮</span>
    <span class="token literal-property property">navigationHelpButton</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
    <span class="token comment">// 是否显示选择框</span>
    <span class="token literal-property property">selectionIndicator</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
    <span class="token comment">//粒子效果</span>
    <span class="token literal-property property">shouldAnimate</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
 
 
	<span class="token comment">// //离线地图</span>
	<span class="token comment">// viewer.value.imageryLayers.addImageryProvider(</span>
	<span class="token comment">// 	new Cesium.UrlTemplateImageryProvider({ url: &quot;http:// /cesium/{z}/{x}/{y}.jpg&quot;, })</span>
	<span class="token comment">// );</span>
	<span class="token comment">//</span>
 
 
  viewer<span class="token punctuation">.</span>scene<span class="token punctuation">.</span>debugShowFramesPerSecond <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
  <span class="token comment">// 隐藏cesiumLogo</span>
  viewer<span class="token punctuation">.</span>value<span class="token punctuation">.</span>cesiumWidget<span class="token punctuation">.</span>creditContainer<span class="token punctuation">.</span>style<span class="token punctuation">.</span>display <span class="token operator">=</span> <span class="token string">&quot;none&quot;</span><span class="token punctuation">;</span>
 
  <span class="token comment">//场景亮度</span>
  viewer<span class="token punctuation">.</span>value<span class="token punctuation">.</span>scene<span class="token punctuation">.</span>light <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Cesium<span class="token punctuation">.</span>DirectionalLight</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">direction</span><span class="token operator">:</span> <span class="token keyword">new</span> <span class="token class-name">Cesium<span class="token punctuation">.</span>Cartesian3</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token literal-property property">color</span><span class="token operator">:</span> Cesium<span class="token punctuation">.</span>Color<span class="token punctuation">.</span><span class="token constant">WHITE</span><span class="token punctuation">,</span>
    <span class="token literal-property property">intensity</span><span class="token operator">:</span> <span class="token number">4</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
 
<span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
 
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span> <span class="token attr-name">scoped</span><span class="token punctuation">&gt;</span></span><span class="token style"><span class="token language-css">
  <span class="token selector">#cesiumContainer</span> <span class="token punctuation">{</span>
  <span class="token property">width</span><span class="token punctuation">:</span> 100%<span class="token punctuation">;</span>
  <span class="token property">height</span><span class="token punctuation">:</span> 100%<span class="token punctuation">;</span>
  <span class="token property">padding</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
  <span class="token property">margin</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
 <span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">&gt;</span></span>
</code></pre></div>`,5)]))}const u=s(o,[["render",e],["__file","err.html.vue"]]);export{u as default};
