import{_ as n,p as s,q as a,a1 as p}from"./framework-d81ad7e5.js";const t={},o=p(`<h3 id="vite配置terser-压缩代码及丢弃console" tabindex="-1"><a class="header-anchor" href="#vite配置terser-压缩代码及丢弃console" aria-hidden="true">#</a> vite配置terser,压缩代码及丢弃console</h3><p>只需安装terser,无需import terser 然后使用下方配置</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code>npm i terser
    <span class="token literal-property property">build</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">minify</span><span class="token operator">:</span> <span class="token string">&quot;terser&quot;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">terserOptions</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token literal-property property">compress</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                <span class="token literal-property property">drop_console</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
                <span class="token literal-property property">drop_debugger</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span>
 
    <span class="token punctuation">}</span><span class="token punctuation">,</span>


<span class="token comment">// vue3+vite打包配置，绝对路径改相对路径，更改静态资源目录</span>


<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineConfig</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">build</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">rollupOptions</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">output</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      	<span class="token comment">// 在这里修改静态资源路径</span>
        <span class="token literal-property property">chunkFileNames</span><span class="token operator">:</span> <span class="token string">&#39;static/assets/js/[name]-[hash].js&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">entryFileNames</span><span class="token operator">:</span> <span class="token string">&#39;static/assets/js/[name]-[hash].js&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">assetFileNames</span><span class="token operator">:</span> <span class="token string">&#39;static/assets/[ext]/[name]-[hash].[ext]&#39;</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">base</span><span class="token operator">:</span> <span class="token string">&#39;./&#39;</span><span class="token punctuation">,</span> <span class="token comment">// 这里更改打包相对绝对路径</span>
  <span class="token literal-property property">minify</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token comment">// 是否压缩代码</span>
  <span class="token literal-property property">sourceMap</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token comment">// 是否生成sourceMap</span>
  <span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token function">vue</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span><span class="token function">basicSsl</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token literal-property property">resolve</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">alias</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token string-property property">&#39;@&#39;</span><span class="token operator">:</span> <span class="token function">fileURLToPath</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">URL</span><span class="token punctuation">(</span><span class="token string">&#39;./src&#39;</span><span class="token punctuation">,</span>
        <span class="token keyword">import</span><span class="token punctuation">.</span>meta<span class="token punctuation">.</span>url<span class="token punctuation">)</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">server</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token comment">//  </span>
    <span class="token literal-property property">port</span><span class="token operator">:</span> <span class="token number">8082</span><span class="token punctuation">,</span>
    <span class="token literal-property property">proxy</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token string-property property">&#39;/rss&#39;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">target</span><span class="token operator">:</span> <span class="token constant">ENV_URL</span><span class="token punctuation">,</span> <span class="token comment">//要访问的地址</span>
        <span class="token literal-property property">changeOrigin</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
        <span class="token function-variable function">rewrite</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token parameter">path</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> path<span class="token punctuation">.</span><span class="token function">replace</span><span class="token punctuation">(</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">^\\/rss</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
        <span class="token comment">// secure: false</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">https</span><span class="token operator">:</span><span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token literal-property property">host</span><span class="token operator">:</span> <span class="token string">&#39;0.0.0.0&#39;</span> <span class="token comment">// ← 新增内容 ←</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

</code></pre></div><h3 id="模式" tabindex="-1"><a class="header-anchor" href="#模式" aria-hidden="true">#</a> 模式</h3><ul><li><p>默认情况下，开发服务器 <code>(dev 命令)</code> 运行在 <code>development</code> (开发) 模式，而 <code>build</code> 命令则运行在 <code>production</code> (生产) 模式。</p></li><li><p>这意味着当执行 <code>vite build</code> 时，它会自动加载 <code>.env.production</code> 中可能存在的环境变量：</p></li></ul><p>加载的环境变量也会通过 <code>i<wbr>mport.meta.env</code> 以字符串形式暴露给客户端源码。</p><ul><li>为了防止意外地将一些环境变量泄漏到客户端，<strong>只有以 <code>VITE_</code> 为前缀的变量</strong> 才会暴露给经过 <code>vite</code> 处理的代码。例如下面这些环境变量：</li></ul><div class="language-env" data-ext="env"><pre class="language-env"><code># .env.production
VITE_APP_TITLE=My App
</code></pre></div><p>在你的应用中，你可以使用 <code>i<wbr>mport.meta.env.VITE_APP_TITLE</code> 渲染标题。</p><h3 id="环境变量" tabindex="-1"><a class="header-anchor" href="#环境变量" aria-hidden="true">#</a> 环境变量</h3><p>Vite 在一个特殊的 <code>i<wbr>mport.meta.env</code> 对象上暴露环境变量。这里有一些在所有情况下都可以使用的内建变量：</p><ul><li><p><code>i<wbr>mport.meta.env.MODE</code>: {string} 应用运行的模式。</p></li><li><p><code>i<wbr>mport.meta.env.BASE_URL</code>: {string} 部署应用时的基本 URL。他由base 配置项决定。</p></li><li><p><code>i<wbr>mport.meta.env.PROD</code>: {boolean} 应用是否运行在生产环境。</p></li><li><p><code>i<wbr>mport.meta.env.DEV</code>: {boolean} 应用是否运行在开发环境 (永远与 <code>i<wbr>mport.meta.env.PROD</code>相反)。</p></li><li><p><code>i<wbr>mport.meta.env.SSR</code>: {boolean} 应用是否运行在 server 上。</p></li></ul><h3 id="env-文件" tabindex="-1"><a class="header-anchor" href="#env-文件" aria-hidden="true">#</a> .env 文件</h3><div class="language-conf" data-ext="conf"><pre class="language-conf"><code>.env                # 所有情况下都会加载
.env.local          # 所有情况下都会加载，但会被 git 忽略
.env.[mode]         # 只在指定模式下加载
.env.[mode].local   # 只在指定模式下加载，但会被 git 忽略

</code></pre></div><h3 id="vite-config-js" tabindex="-1"><a class="header-anchor" href="#vite-config-js" aria-hidden="true">#</a> vite.config.js</h3><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> defineConfig <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;vite&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> AutoImport <span class="token keyword">from</span> <span class="token string">&quot;unplugin-auto-import/vite&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> Components <span class="token keyword">from</span> <span class="token string">&quot;unplugin-vue-components/vite&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> vue <span class="token keyword">from</span> <span class="token string">&quot;@vitejs/plugin-vue&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> ElementPlusResolver <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;unplugin-vue-components/resolvers&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> path <span class="token keyword">from</span> <span class="token string">&quot;path&quot;</span><span class="token punctuation">;</span>
 
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineConfig</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token function">vue</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token comment">//引入vue 插件</span>
    <span class="token function">AutoImport</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      <span class="token literal-property property">imports</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;vue&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token literal-property property">dts</span><span class="token operator">:</span> <span class="token string">&quot;src/auto-import.d.ts&quot;</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token comment">//plus按需引入</span>
    <span class="token function">AutoImport</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      <span class="token literal-property property">resolvers</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token function">ElementPlusResolver</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token comment">//plus按需引入</span>
    <span class="token function">Components</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      <span class="token literal-property property">resolvers</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token function">ElementPlusResolver</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token literal-property property">build</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">minify</span><span class="token operator">:</span> <span class="token string">&quot;terser&quot;</span><span class="token punctuation">,</span> <span class="token comment">// 必须开启：使用terserOptions才有效果</span>
    <span class="token literal-property property">terserOptions</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">compress</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token comment">//生产环境时移除console</span>
        <span class="token literal-property property">drop_console</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
        <span class="token literal-property property">drop_debugger</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
 
  <span class="token literal-property property">resolve</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token comment">//配置根路径别名： import(&#39;@/pages/login/login.vue&#39;)</span>
    <span class="token literal-property property">alias</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token string-property property">&quot;@&quot;</span><span class="token operator">:</span> path<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token string">&quot;src&quot;</span><span class="token punctuation">)</span><span class="token punctuation">,</span> 
      <span class="token comment">// 注意一定不要随意命名，a b c这样的，项目的目录也不能为关键字保留字！！</span>
      <span class="token string-property property">&quot;comp&quot;</span><span class="token operator">:</span> <span class="token function">resolve</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token string">&quot;src/components&quot;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
      <span class="token comment">// 配置图片要这样引用</span>
      <span class="token string-property property">&quot;/img&quot;</span><span class="token operator">:</span> <span class="token string">&quot;./src/assets&quot;</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token comment">// 跨域</span>
  <span class="token literal-property property">server</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token comment">//使用IP能访问</span>
    <span class="token literal-property property">host</span><span class="token operator">:</span> <span class="token string">&quot;0.0.0.0&quot;</span><span class="token punctuation">,</span>
    <span class="token comment">// 热更新</span>
    <span class="token literal-property property">hmr</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token comment">//设为 true 时若端口已被占用则会直接退出，而不是尝试下一个可用端口</span>
    <span class="token literal-property property">strictPort</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
    <span class="token comment">//自定义代理规则</span>
    <span class="token literal-property property">proxy</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token comment">// 选项写法</span>
      <span class="token string-property property">&quot;/api&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">target</span><span class="token operator">:</span> <span class="token string">&quot;https://admin.itrustnow.com&quot;</span><span class="token punctuation">,</span>
        <span class="token comment">// target: &quot;http://192.168.0.50:8083&quot;,</span>
        <span class="token literal-property property">changeOrigin</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
        <span class="token function-variable function">rewrite</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token parameter">path</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> path<span class="token punctuation">.</span><span class="token function">replace</span><span class="token punctuation">(</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">^\\/api</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>







</code></pre></div><h3 id="vite常用基本配置" tabindex="-1"><a class="header-anchor" href="#vite常用基本配置" aria-hidden="true">#</a> Vite常用基本配置</h3><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token punctuation">{</span>
  <span class="token literal-property property">root</span><span class="token operator">:</span> process<span class="token punctuation">.</span><span class="token function">cwd</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token comment">// 项目根目录（index.html 文件所在的位置）,</span>
  <span class="token literal-property property">base</span><span class="token operator">:</span> <span class="token string">&#39;/&#39;</span><span class="token punctuation">,</span> <span class="token comment">// 开发或生产环境服务的公共基础路径 配置引入相对路径</span>
  <span class="token literal-property property">mode</span><span class="token operator">:</span> <span class="token string">&#39;development&#39;</span><span class="token punctuation">,</span> <span class="token comment">// 模式</span>
  <span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token function">vue</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token comment">// 需要用到的插件数组</span>
  <span class="token literal-property property">publicDir</span><span class="token operator">:</span> <span class="token string">&#39;public&#39;</span><span class="token punctuation">,</span> <span class="token comment">// 静态资源服务的文件夹</span>
  <span class="token literal-property property">cacheDir</span><span class="token operator">:</span> <span class="token string">&#39;node_modules/.vite&#39;</span><span class="token punctuation">,</span> <span class="token comment">// 存储缓存文件的目录</span>
  <span class="token literal-property property">resolve</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">alias</span><span class="token operator">:</span> <span class="token punctuation">[</span> <span class="token comment">// 文件系统路径别名</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">find</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\\/@\\/</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span>
        <span class="token literal-property property">replacement</span><span class="token operator">:</span> <span class="token function">pathResolve</span><span class="token punctuation">(</span><span class="token string">&#39;src&#39;</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token string">&#39;/&#39;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token literal-property property">dedupe</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token comment">// 强制 Vite 始终将列出的依赖项解析为同一副本</span>
    <span class="token literal-property property">conditions</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token comment">// 解决程序包中 情景导出 时的其他允许条件</span>
    <span class="token literal-property property">mainFields</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token comment">// 解析包入口点尝试的字段列表</span>
    <span class="token literal-property property">extensions</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;.mjs&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;.js&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;.ts&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;.jsx&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;.tsx&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;.json&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token comment">// 导入时想要忽略的扩展名列表</span>
    <span class="token literal-property property">preserveSymlinks</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span> <span class="token comment">// 启用此选项会使 Vite 通过原始文件路径确定文件身份</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">css</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">modules</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">scopeBehaviour</span><span class="token operator">:</span> <span class="token string">&#39;global&#39;</span> <span class="token operator">|</span> <span class="token string">&#39;local&#39;</span><span class="token punctuation">,</span>
      <span class="token comment">// ...</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">postcss</span><span class="token operator">:</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">,</span> <span class="token comment">// 内联的 PostCSS 配置 如果提供了该内联配置，Vite 将不会搜索其他 PostCSS 配置源</span>
    <span class="token literal-property property">preprocessorOptions</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token comment">// css的预处理器选项</span>
      <span class="token literal-property property">scss</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">additionalData</span><span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">$injectedColor: orange;</span><span class="token template-punctuation string">\`</span></span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">json</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">namedExports</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token comment">// 是否支持从.json文件中进行按名导入</span>
    <span class="token literal-property property">stringify</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span> <span class="token comment">//  开启此项，导入的 JSON 会被转换为 export default JSON.parse(&quot;...&quot;) 会禁用按名导入</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">esbuild</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token comment">// 最常见的用例是自定义 JSX</span>
    <span class="token literal-property property">jsxFactory</span><span class="token operator">:</span> <span class="token string">&#39;h&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">jsxFragment</span><span class="token operator">:</span> <span class="token string">&#39;Fragment&#39;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">assetsInclude</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;**/*.gltf&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token comment">// 指定额外的 picomatch 模式 作为静态资源处理</span>
  <span class="token literal-property property">logLevel</span><span class="token operator">:</span> <span class="token string">&#39;info&#39;</span><span class="token punctuation">,</span> <span class="token comment">// 调整控制台输出的级别 &#39;info&#39; | &#39;warn&#39; | &#39;error&#39; | &#39;silent&#39;</span>
  <span class="token literal-property property">clearScreen</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token comment">// 设为 false 可以避免 Vite 清屏而错过在终端中打印某些关键信息</span>
  <span class="token literal-property property">envDir</span><span class="token operator">:</span> <span class="token string">&#39;/&#39;</span><span class="token punctuation">,</span> <span class="token comment">// 用于加载 .env 文件的目录</span>
  <span class="token literal-property property">envPrefix</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token comment">// 以 envPrefix 开头的环境变量会通过 i<wbr>mport.meta.env 暴露在你的客户端源码中</span>
  <span class="token literal-property property">server</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">host</span><span class="token operator">:</span> <span class="token string">&#39;127.0.0.1&#39;</span><span class="token punctuation">,</span> <span class="token comment">// 指定服务器应该监听哪个 IP 地址</span>
    <span class="token literal-property property">port</span><span class="token operator">:</span> <span class="token number">5000</span><span class="token punctuation">,</span> <span class="token comment">// 指定开发服务器端口</span>
    <span class="token literal-property property">strictPort</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token comment">// 若端口已被占用则会直接退出</span>
    <span class="token literal-property property">https</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span> <span class="token comment">// 启用 TLS + HTTP/2</span>
    <span class="token literal-property property">open</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token comment">// 启动时自动在浏览器中打开应用程序</span>
    <span class="token literal-property property">proxy</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token comment">// 配置自定义代理规则</span>
      <span class="token string-property property">&#39;/api&#39;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">target</span><span class="token operator">:</span> <span class="token string">&#39;http://jsonplaceholder.typicode.com&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">changeOrigin</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
        <span class="token function-variable function">rewrite</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token parameter">path</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> path<span class="token punctuation">.</span><span class="token function">replace</span><span class="token punctuation">(</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">^\\/api</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">)</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">cors</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token comment">// 配置 CORS</span>
    <span class="token literal-property property">force</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token comment">// 强制使依赖预构建</span>
    <span class="token literal-property property">hmr</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token comment">// 禁用或配置 HMR 连接</span>
      <span class="token comment">// ...</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">watch</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token comment">// 传递给 chokidar 的文件系统监听器选项</span>
      <span class="token comment">// ...</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">middlewareMode</span><span class="token operator">:</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">,</span> <span class="token comment">// 以中间件模式创建 Vite 服务器</span>
    <span class="token literal-property property">fs</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">strict</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token comment">// 限制为工作区 root 路径以外的文件的访问</span>
      <span class="token literal-property property">allow</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token comment">// 限制哪些文件可以通过 /@fs/ 路径提供服务</span>
      <span class="token literal-property property">deny</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;.env&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;.env.*&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;*.{pem,crt}&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token comment">// 用于限制 Vite 开发服务器提供敏感文件的黑名单</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">origin</span><span class="token operator">:</span> <span class="token string">&#39;http://127.0.0.1:8080/&#39;</span><span class="token punctuation">,</span> <span class="token comment">// 用于定义开发调试阶段生成资产的 origin</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">build</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">target</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;modules&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token comment">// 设置最终构建的浏览器兼容目标</span>
    <span class="token literal-property property">polyfillModulePreload</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token comment">// 是否自动注入 module preload 的 polyfill</span>
    <span class="token literal-property property">outDir</span><span class="token operator">:</span> <span class="token string">&#39;dist&#39;</span><span class="token punctuation">,</span> <span class="token comment">// 指定输出路径</span>
    <span class="token literal-property property">assetsDir</span><span class="token operator">:</span> <span class="token string">&#39;assets&#39;</span><span class="token punctuation">,</span> <span class="token comment">// 指定生成静态文件目录</span>
    <span class="token literal-property property">assetsInlineLimit</span><span class="token operator">:</span> <span class="token string">&#39;4096&#39;</span><span class="token punctuation">,</span> <span class="token comment">// 小于此阈值的导入或引用资源将内联为 base64 编码</span>
    <span class="token literal-property property">cssCodeSplit</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token comment">// 启用 CSS 代码拆分</span>
    <span class="token literal-property property">cssTarget</span><span class="token operator">:</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">,</span> <span class="token comment">// 允许用户为 CSS 的压缩设置一个不同的浏览器 target 与 build.target 一致</span>
    <span class="token literal-property property">sourcemap</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span> <span class="token comment">// 构建后是否生成 source map 文件</span>
    <span class="token literal-property property">rollupOptions</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token comment">// 自定义底层的 Rollup 打包配置</span>
    <span class="token literal-property property">lib</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token comment">// 构建为库</span>
    <span class="token literal-property property">manifest</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span> <span class="token comment">// 当设置为 true，构建后将会生成 manifest.json 文件</span>
    <span class="token literal-property property">ssrManifest</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span> <span class="token comment">// 构建不生成 SSR 的 manifest 文件</span>
    <span class="token literal-property property">ssr</span><span class="token operator">:</span> <span class="token keyword">undefined</span><span class="token punctuation">,</span> <span class="token comment">// 生成面向 SSR 的构建</span>
    <span class="token literal-property property">minify</span><span class="token operator">:</span> <span class="token string">&#39;esbuild&#39;</span><span class="token punctuation">,</span> <span class="token comment">// 指定使用哪种混淆器</span>
    <span class="token literal-property property">terserOptions</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token comment">// 传递给 Terser 的更多 minify 选项</span>
    <span class="token literal-property property">write</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token comment">// 启用将构建后的文件写入磁盘</span>
    <span class="token literal-property property">emptyOutDir</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token comment">// 构建时清空该目录</span>
    <span class="token literal-property property">brotliSize</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token comment">// 启用 brotli 压缩大小报告</span>
    <span class="token literal-property property">chunkSizeWarningLimit</span><span class="token operator">:</span> <span class="token number">500</span><span class="token punctuation">,</span> <span class="token comment">// chunk 大小警告的限制</span>
    <span class="token literal-property property">watch</span><span class="token operator">:</span> <span class="token keyword">null</span><span class="token punctuation">,</span> <span class="token comment">// 设置为 {} 则会启用 rollup 的监听器</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">preview</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">port</span><span class="token operator">:</span> <span class="token number">5000</span><span class="token punctuation">,</span> <span class="token comment">// 指定开发服务器端口</span>
    <span class="token literal-property property">strictPort</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token comment">// 若端口已被占用则会直接退出</span>
    <span class="token literal-property property">https</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span> <span class="token comment">// 启用 TLS + HTTP/2</span>
    <span class="token literal-property property">open</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token comment">// 启动时自动在浏览器中打开应用程序</span>
    <span class="token literal-property property">proxy</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token comment">// 配置自定义代理规则</span>
      <span class="token string-property property">&#39;/api&#39;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">target</span><span class="token operator">:</span> <span class="token string">&#39;http://jsonplaceholder.typicode.com&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">changeOrigin</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
        <span class="token function-variable function">rewrite</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token parameter">path</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> path<span class="token punctuation">.</span><span class="token function">replace</span><span class="token punctuation">(</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">^\\/api</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">)</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">cors</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token comment">// 配置 CORS</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">optimizeDeps</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">entries</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token comment">// 指定自定义条目——该值需要遵循 fast-glob 模式</span>
    <span class="token literal-property property">exclude</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token comment">// 在预构建中强制排除的依赖项</span>
    <span class="token literal-property property">include</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token comment">// 可强制预构建链接的包</span>
    <span class="token literal-property property">keepNames</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span> <span class="token comment">// true 可以在函数和类上保留 name 属性</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">ssr</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">external</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token comment">// 列出的是要为 SSR 强制外部化的依赖,</span>
    <span class="token literal-property property">noExternal</span><span class="token operator">:</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">,</span> <span class="token comment">// 列出的是防止被 SSR 外部化依赖项</span>
    <span class="token literal-property property">target</span><span class="token operator">:</span> <span class="token string">&#39;node&#39;</span><span class="token punctuation">,</span> <span class="token comment">// SSR 服务器的构建目标</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><h3 id="route" tabindex="-1"><a class="header-anchor" href="#route" aria-hidden="true">#</a> route</h3><h4 id="在vue3-0中取消了vue2-0的部分api-新增的两个api-userouter-useroute。" tabindex="-1"><a class="header-anchor" href="#在vue3-0中取消了vue2-0的部分api-新增的两个api-userouter-useroute。" aria-hidden="true">#</a> 在vue3.0中取消了vue2.0的部分api，新增的两个API <code>useRouter,useRoute</code>。</h4><p>4、vue3.0中路由跳转 1、第一步先引入<code>import {useRouter} from &#39;vue-router&#39;;</code> 2、第二步 <code>const router = useRouter();</code> 3、第三步 <code>router.push({path:&#39;/home&#39;, query:{id:&#39;12&#39; }})</code></p><p>5、vue3.0如何取出路由的值 1、第一步先引入<code>import {useRoute} from &#39;vue-router&#39;;</code> 2、第二步 <code>const route = useRoute();</code> 3、第三步<code>route.query.id</code></p><p>Vue3—路由传参query和params</p><p>路由传参有query和params两种方式。</p><p>query以?形式传参，如 <code>/ user ? id=1 &amp; name=tom &amp; gender=male</code></p><p>params通过:形式绑定参数传参，如 <code>/ user / :id / :name / :gender --&gt; / user / 1 / tom / male</code></p><p>总结：路由传参用query或param都可以。一般采用params方式进行路由传参，其url比较美观。</p><p>1.定义路由</p><div class="language-typescript" data-ext="ts"><pre class="language-typescript"><code><span class="token operator">&lt;</span><span class="token operator">!</span><span class="token operator">--</span>routers<span class="token operator">/</span>router<span class="token punctuation">.</span>ts<span class="token operator">--</span><span class="token operator">&gt;</span>
    <span class="token punctuation">{</span>
      path<span class="token operator">:</span> <span class="token string">&#39;/test&#39;</span><span class="token punctuation">,</span>       <span class="token comment">//测试路由</span>
      name<span class="token operator">:</span> <span class="token string">&#39;test&#39;</span><span class="token punctuation">,</span>
      <span class="token function-variable function">component</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">import</span><span class="token punctuation">(</span><span class="token string">&#39;~/views/test/index.vue&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
      meta<span class="token operator">:</span> <span class="token punctuation">{</span>
        title<span class="token operator">:</span> <span class="token string">&#39;测试路由&#39;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
      path<span class="token operator">:</span> <span class="token string">&#39;/user&#39;</span><span class="token punctuation">,</span>      <span class="token comment">//query定义路由</span>
      name<span class="token operator">:</span> <span class="token string">&#39;user&#39;</span><span class="token punctuation">,</span>
      <span class="token function-variable function">component</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">import</span><span class="token punctuation">(</span><span class="token string">&#39;~/views/user/index.vue&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
      meta<span class="token operator">:</span> <span class="token punctuation">{</span>
        title<span class="token operator">:</span> <span class="token string">&#39;user页面&#39;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    
    <span class="token comment">// {</span>
    <span class="token comment">//   path: &#39;/user/:id/:name/:age/:gender&#39;,     //params定义路由(特殊，注意！！)</span>
    <span class="token comment">//   name: &#39;user&#39;,</span>
    <span class="token comment">//   component: () =&gt; import(&#39;~/views/pgc/user/index.vue&#39;),</span>
    <span class="token comment">//   meta: {</span>
    <span class="token comment">//     title: &#39;user页面&#39;</span>
    <span class="token comment">//   }</span>
    <span class="token comment">// }  </span>
</code></pre></div><p>2.路由跳转</p><div class="language-html" data-ext="html"><pre class="language-html"><code><span class="token comment">&lt;!--views/test/index.vue--&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span>Test页面<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>router-link</span> <span class="token attr-name">to</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>/user?id=12&amp;name=tom&amp;age=13&amp;gender=male<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    query传参
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>router-link</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>router-link</span> <span class="token attr-name">to</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>/user/12/tom/13/male<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    params传参
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>router-link</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><p>3.接收参数</p><div class="language-html" data-ext="html"><pre class="language-html"><code><span class="token comment">&lt;!--views/user/index.vue--&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span>user页面接收参数<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span>
    <span class="token comment">&lt;!-- 获得到query传参的参数 { &quot;id&quot;: &quot;12&quot;, &quot;name&quot;: &quot;tom&quot;, &quot;age&quot;: &quot;13&quot;, &quot;gender&quot;: &quot;male&quot; } --&gt;</span>
    {{ query }}
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span>
    <span class="token comment">&lt;!-- 获得到params传参的参数 { &quot;id&quot;: &quot;12&quot;, &quot;name&quot;: &quot;tom&quot;, &quot;age&quot;: &quot;13&quot;, &quot;gender&quot;: &quot;male&quot; } --&gt;</span>
    {{ params }}
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>ts<span class="token punctuation">&quot;</span></span> <span class="token attr-name">setup</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> <span class="token punctuation">{</span> useRoute <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue-router&#39;</span><span class="token punctuation">;</span>  <span class="token comment">//1.先在需要跳转的页面引入useRouter</span>
<span class="token keyword">const</span> <span class="token punctuation">{</span> query<span class="token punctuation">,</span> params <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">useRoute</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>   <span class="token comment">//2.在跳转页面定义router变量，解构得到指定的query和params传参的参数</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><h3 id="使用-router-history" tabindex="-1"><a class="header-anchor" href="#使用-router-history" aria-hidden="true">#</a> 使用 Router History</h3><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// router.js  createWebHistory    .env.producation  默认为 &#39;&#39;</span>
<span class="token keyword">const</span> router <span class="token operator">=</span> <span class="token function">createRouter</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">history</span><span class="token operator">:</span> <span class="token function">createWebHistory</span> <span class="token punctuation">(</span><span class="token keyword">import</span><span class="token punctuation">.</span>meta<span class="token punctuation">.</span>env<span class="token punctuation">.</span><span class="token constant">BASE_URL</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token comment">// history: createWebHashHistory (i<wbr>mport.meta.env.BASE_URL),</span>
  <span class="token literal-property property">routes</span><span class="token operator">:</span><span class="token punctuation">[</span><span class="token punctuation">]</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>


<span class="token constant">VITE_APP_BASE_API</span><span class="token operator">=</span><span class="token string">&#39;/app&#39;</span>
<span class="token constant">BASE_URL</span><span class="token operator">=</span><span class="token string">&#39;uapp&#39;</span>


<span class="token comment">// vite config js</span>

 <span class="token literal-property property">base</span><span class="token operator">:</span> <span class="token string">&#39;/uapp&#39;</span><span class="token punctuation">,</span>

</code></pre></div><h3 id="nginx-conf" tabindex="-1"><a class="header-anchor" href="#nginx-conf" aria-hidden="true">#</a> nginx.conf</h3><div class="language-conf" data-ext="conf"><pre class="language-conf"><code>

</code></pre></div><h3 id="vite-config" tabindex="-1"><a class="header-anchor" href="#vite-config" aria-hidden="true">#</a> vite config</h3><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> fileURLToPath<span class="token punctuation">,</span> <span class="token constant">URL</span> <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;node:url&#39;</span>
<span class="token keyword">import</span> cesium <span class="token keyword">from</span> <span class="token string">&#39;vite-plugin-cesium&#39;</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token punctuation">{</span> defineConfig <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vite&#39;</span>
<span class="token keyword">import</span> vue <span class="token keyword">from</span> <span class="token string">&#39;@vitejs/plugin-vue&#39;</span>

 
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineConfig</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">base</span><span class="token operator">:</span> <span class="token string">&#39;/uapp&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">build</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    
    <span class="token literal-property property">minify</span><span class="token operator">:</span> <span class="token string">&#39;terser&#39;</span><span class="token punctuation">,</span> <span class="token comment">// 必须启用：terserOptions配置才会有效</span>
    <span class="token literal-property property">terserOptions</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">compress</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token comment">// 生产环境时移除console.log调试代码</span>
        <span class="token literal-property property">drop_console</span><span class="token operator">:</span><span class="token boolean">false</span><span class="token punctuation">,</span>
        <span class="token literal-property property">drop_debugger</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
        <span class="token comment">// drop_console:true,</span>
        <span class="token comment">// drop_debugger: true,</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">server</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">open</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token comment">// 启动时自动在浏览器中打开应用程序</span>
    <span class="token literal-property property">proxy</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token string-property property">&#39;/api&#39;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">target</span><span class="token operator">:</span> <span class="token string">&#39;http://127.0.0.1:18088&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">changeOrigin</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
        <span class="token function-variable function">rewrite</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token parameter">path</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> path<span class="token punctuation">.</span><span class="token function">replace</span><span class="token punctuation">(</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">^\\/api</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span> <span class="token string">&#39;/app&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token function">vue</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span><span class="token function">cesium</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token literal-property property">resolve</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">alias</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token string-property property">&#39;@&#39;</span><span class="token operator">:</span> <span class="token function">fileURLToPath</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">URL</span><span class="token punctuation">(</span><span class="token string">&#39;./src&#39;</span><span class="token punctuation">,</span> <span class="token keyword">import</span><span class="token punctuation">.</span>meta<span class="token punctuation">.</span>url<span class="token punctuation">)</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span> 
 
  
<span class="token punctuation">}</span><span class="token punctuation">)</span>

</code></pre></div><h4 id="使用root还是alias" tabindex="-1"><a class="header-anchor" href="#使用root还是alias" aria-hidden="true">#</a> 使用root还是alias</h4><p>刚才提到root和alias这两个指令都可以使用，实际我们应该如何选择呢？</p><p>当无前缀时，使用root和alias一样，一般使用root; 当有前缀时，如果前缀名和目录路径最后一段路径一致，那应该使用root，而不一致的话，应该使用alias.。</p><ul><li>try_files后面可以定义多个文件路径和最后一个作为内部跳转的uri，其中文件路径是和 <code>alias</code> 和 <code>root</code> 两个指令合在一起构造而成； 多个文件以第一个找到的文件作为请求； 而文件后面以<code>&quot;/&quot;</code>结尾，会检查目录是否存在； 当文件都找不到时，就会去以最后一个uri进行内部跳转请求。</li></ul><div class="language-text" data-ext="text"><pre class="language-text"><code>请求了
http://localhost:8081/personalcenter/static/js/1.326021aaadef08402891.js
细心的小伙伴应该已经看出来了失败的原因了，如果还有小伙伴没看出来的我把他两放一起，你们仔细瞧
成功的: http://localhost:8081/static/js/0.141001dab9a800dfa8d8.js
失败的: http://localhost:8081/personalcenter/static/js/1.326021aaadef08402891.js
是不是失败的请求与成功的请求相比url多了一个personalcenter，personalcenter是啥？这不就是我们一级路由的名称嘛，接着我们看看打包的文件夹内有personalcenter路径吗？是不是没有，只有static，所以现在明白为啥刷新后请求失败了吧，因为路径根本不存在
</code></pre></div><h3 id="nginx-相关配置" tabindex="-1"><a class="header-anchor" href="#nginx-相关配置" aria-hidden="true">#</a> nginx 相关配置</h3><p>location / { try_files $uri $uri/ /index.html; }</p><p>这里用到了try_files配置，简单说下它的作用：它首先匹配url有没有对应的资源（即上面的uri），如果有则返回；如果没有，则继续查找url目录下（即上面的uri/）有没有默认的index.html文件，如果还没有，最后返回根目录下的index.html（即上面的/index.html）。其实在这里，我们想要的就是让它无脑返回根目录下的index.html（因为我们只有这个可访问文件）</p><h3 id="history模式部署时需要改动的地方" tabindex="-1"><a class="header-anchor" href="#history模式部署时需要改动的地方" aria-hidden="true">#</a> history模式部署时需要改动的地方</h3><ul><li>如果是部署在根目录下，只需要改nginx配置如下即可，前端配置无需修改</li></ul><div class="language-conf" data-ext="conf"><pre class="language-conf"><code>location / {
	try_files $uri $uri/ /index.html;
}
</code></pre></div><p>如果是部署在二级目录下(如部署在/wj目录)，修改内容如下</p><ul><li>nginx配置</li></ul><div class="language-conf" data-ext="conf"><pre class="language-conf"><code> # nginx 修改后配置
location /wj {
  try_files $uri $uri/ /wj/index.html;
}

</code></pre></div><ul><li>vue-router配置</li></ul><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> router <span class="token operator">=</span> <span class="token function">createRouter</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">history</span><span class="token operator">:</span> <span class="token function">createWebHistory</span><span class="token punctuation">(</span><span class="token string">&#39;/wj/&#39;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

</code></pre></div><ul><li>vite.config配置</li></ul><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// vite.config.js</span>
<span class="token punctuation">{</span>
	<span class="token literal-property property">base</span><span class="token operator">:</span> <span class="token string">&#39;/wj/&#39;</span>
    <span class="token comment">// 其他代码省略</span>
<span class="token punctuation">}</span>
</code></pre></div>`,57),e=[o];function c(l,r){return s(),a("div",null,e)}const k=n(t,[["render",c],["__file","vite.html.vue"]]);export{k as default};
