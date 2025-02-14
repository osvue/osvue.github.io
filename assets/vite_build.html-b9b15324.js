import{_ as n,p as s,q as a,a1 as p}from"./framework-d81ad7e5.js";const t={},o=p(`<ul><li>vite build 后，空白页面问题 Hash 模式 build后空白页的问题可能是使用的是历史模式，因为Vue是一个单页的客户端应用，如果没有适当的服务器配置，访问会得到一个 404 错误。使用Hash模式接口解决这个问题，因为使用Hash模式后由于这部分 URL 从未被发送到服务器，所以它不需要在服务器层面上进行任何特殊处理。</li></ul><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> createRouter<span class="token punctuation">,</span> createWebHashHistory <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue-router&#39;</span>
 
<span class="token keyword">const</span> router <span class="token operator">=</span> <span class="token function">createRouter</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">history</span><span class="token operator">:</span> <span class="token function">createWebHashHistory</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token literal-property property">routes</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token comment">//...</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre></div><h4 id="配置spring-boot" tabindex="-1"><a class="header-anchor" href="#配置spring-boot" aria-hidden="true">#</a> 配置Spring Boot</h4><p>Spring Boot只需要将build后的文件放在resources\\static位置下即可。</p><h3 id="vite-config" tabindex="-1"><a class="header-anchor" href="#vite-config" aria-hidden="true">#</a> vite.config</h3><p><code>.env.production</code>：</p><ol><li><p>生产环境下的配置文件,执行<code>npm run build</code>命令，会自动加载<code>.env.production</code>文件</p></li><li><p>会覆盖 <code>.env</code>这个文件里定义的环境变量。</p></li><li><p><strong>打印环境变量</strong></p><ol><li><code>console.log(i<wbr>mport.meta.env)</code></li></ol></li></ol><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> defineConfig<span class="token punctuation">,</span> loadEnv <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vite&#39;</span>
<span class="token keyword">import</span> vue <span class="token keyword">from</span> <span class="token string">&#39;@vitejs/plugin-vue&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> path <span class="token keyword">from</span> <span class="token string">&quot;path&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> resolve <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;path&#39;</span>
<span class="token keyword">const</span> port <span class="token operator">=</span> <span class="token number">8080</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> host <span class="token operator">=</span> <span class="token string">&quot;0.0.0.0&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineConfig</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span> mode <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> env <span class="token operator">=</span> <span class="token function">loadEnv</span><span class="token punctuation">(</span>mode<span class="token punctuation">,</span> __dirname<span class="token punctuation">)</span>
  <span class="token keyword">return</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token function">vue</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token literal-property property">base</span><span class="token operator">:</span> env<span class="token punctuation">.</span><span class="token constant">VITE_MODE</span> <span class="token operator">===</span> <span class="token string">&#39;production&#39;</span> <span class="token operator">?</span> <span class="token string">&#39;./&#39;</span> <span class="token operator">:</span> <span class="token string">&#39;/&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">resolve</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">alias</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token comment">//resolve.alias设置别称 解决@绝对路径引入问题</span>
        <span class="token string-property property">&quot;@&quot;</span><span class="token operator">:</span> path<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token string">&#39;src&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
        <span class="token string-property property">&quot;@assets&quot;</span><span class="token operator">:</span> path<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token string">&quot;src/assets&quot;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
        <span class="token string-property property">&quot;@components&quot;</span><span class="token operator">:</span> path<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token string">&quot;src/components&quot;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
        <span class="token string-property property">&quot;@images&quot;</span><span class="token operator">:</span> path<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token string">&quot;src/assets/images&quot;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
        <span class="token string-property property">&quot;@views&quot;</span><span class="token operator">:</span> path<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token string">&quot;src/views&quot;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
        <span class="token string-property property">&quot;@store&quot;</span><span class="token operator">:</span> path<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token string">&quot;src/store&quot;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">css</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token comment">// css预处理器</span>
      <span class="token literal-property property">preprocessorOptions</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">less</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token literal-property property">modifyVars</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token comment">// 全局less变量存储路径(配置less的全局变量)</span>
            <span class="token literal-property property">hack</span><span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">true; @import (reference) &quot;</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span><span class="token function">resolve</span><span class="token punctuation">(</span><span class="token string">&#39;src/public/config.less&#39;</span><span class="token punctuation">)</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">&quot;;</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">,</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token literal-property property">javascriptEnabled</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">build</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">outDir</span><span class="token operator">:</span> <span class="token string">&quot;dist&quot;</span><span class="token punctuation">,</span>
      <span class="token literal-property property">assetsDir</span><span class="token operator">:</span> <span class="token string">&quot;assets&quot;</span><span class="token punctuation">,</span> <span class="token comment">//指定静态资源存放路径</span>
      <span class="token literal-property property">sourcemap</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span> <span class="token comment">//是否构建source map 文件</span>
      <span class="token comment">// terserOptions: {</span>
      <span class="token comment">//   // 生产环境移除console</span>
      <span class="token comment">//   compress: {</span>
      <span class="token comment">//     drop_console: true,</span>
      <span class="token comment">//     drop_debugger: true,</span>
      <span class="token comment">//   },</span>
      <span class="token comment">// },</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">server</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">https</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span> <span class="token comment">// 是否开启 https</span>
      <span class="token literal-property property">open</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token comment">// 是否自动在浏览器打开</span>
      <span class="token literal-property property">port</span><span class="token operator">:</span> port<span class="token punctuation">,</span> <span class="token comment">// 端口号</span>
      <span class="token literal-property property">host</span><span class="token operator">:</span> host<span class="token punctuation">,</span>
      <span class="token literal-property property">proxy</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token string-property property">&quot;/api&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token literal-property property">target</span><span class="token operator">:</span> env<span class="token punctuation">.</span><span class="token constant">VITE_RES_URL</span><span class="token punctuation">,</span> <span class="token comment">// 后台接口</span>
          <span class="token literal-property property">changeOrigin</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
          <span class="token literal-property property">secure</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span> <span class="token comment">// 如果是https接口，需要配置这个参数</span>
          <span class="token literal-property property">ws</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token comment">//websocket支持</span>
          <span class="token function-variable function">rewrite</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token parameter">path</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> path<span class="token punctuation">.</span><span class="token function">replace</span><span class="token punctuation">(</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">^\\/api</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre></div><h3 id="defineprops" tabindex="-1"><a class="header-anchor" href="#defineprops" aria-hidden="true">#</a> defineProps</h3><div class="language-vue" data-ext="vue"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
<span class="token function">defineProps</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">msg</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">type</span><span class="token operator">:</span> String<span class="token punctuation">,</span>
    <span class="token literal-property property">required</span><span class="token operator">:</span> <span class="token boolean">true</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>greetings<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h1</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>green<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>{{ msg }}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h1</span><span class="token punctuation">&gt;</span></span>
 
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
</code></pre></div>`,10),e=[o];function c(l,r){return s(),a("div",null,e)}const k=n(t,[["render",c],["__file","vite_build.html.vue"]]);export{k as default};
