import{_ as n,p as s,q as a,a1 as p}from"./framework-d81ad7e5.js";const t={},o=p(`<h2 id="vue-config-js" tabindex="-1"><a class="header-anchor" href="#vue-config-js" aria-hidden="true">#</a> vue.config.js</h2><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code> <span class="token keyword">const</span> path <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;path&#39;</span><span class="token punctuation">)</span>


module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">publicPath</span><span class="token operator">:</span> <span class="token string">&#39;./&#39;</span><span class="token punctuation">,</span> <span class="token comment">// 基本路径</span>
    <span class="token literal-property property">outputDir</span><span class="token operator">:</span> <span class="token string">&#39;dist&#39;</span><span class="token punctuation">,</span> <span class="token comment">// 输出文件目录</span>
    <span class="token literal-property property">lintOnSave</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span> <span class="token comment">// eslint-loader 是否在保存的时候检查</span>
    <span class="token comment">// see https://github.com/vuejs/vue-cli/blob/dev/docs/webpack.md</span>
    <span class="token comment">// webpack配置</span>
    <span class="token function-variable function">chainWebpack</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token parameter">config</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token function-variable function">configureWebpack</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token parameter">config</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>process<span class="token punctuation">.</span>env<span class="token punctuation">.</span><span class="token constant">NODE_ENV</span> <span class="token operator">===</span> <span class="token string">&#39;production&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token comment">// 为生产环境修改配置...</span>
            config<span class="token punctuation">.</span>mode <span class="token operator">=</span> <span class="token string">&#39;production&#39;</span>
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
            <span class="token comment">// 为开发环境修改配置...</span>
            config<span class="token punctuation">.</span>mode <span class="token operator">=</span> <span class="token string">&#39;development&#39;</span>
        <span class="token punctuation">}</span>
        Object<span class="token punctuation">.</span><span class="token function">assign</span><span class="token punctuation">(</span>config<span class="token punctuation">,</span> <span class="token punctuation">{</span>
            <span class="token comment">// 开发生产共同配置</span>
            <span class="token literal-property property">resolve</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                <span class="token literal-property property">alias</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                    <span class="token string-property property">&#39;@&#39;</span><span class="token operator">:</span> path<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token string">&#39;./src&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
                    <span class="token string-property property">&#39;@c&#39;</span><span class="token operator">:</span> path<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token string">&#39;./src/components&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
                    <span class="token string-property property">&#39;@p&#39;</span><span class="token operator">:</span> path<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token string">&#39;./src/pages&#39;</span><span class="token punctuation">)</span>
                <span class="token punctuation">}</span> <span class="token comment">// 别名配置</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">productionSourceMap</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span> <span class="token comment">// 生产环境是否生成 sourceMap 文件</span>
    <span class="token comment">// css相关配置</span>
    <span class="token literal-property property">css</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">extract</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token comment">// 是否使用css分离插件 ExtractTextPlugin</span>
        <span class="token literal-property property">sourceMap</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span> <span class="token comment">// 开启 CSS source maps?</span>
        <span class="token literal-property property">loaderOptions</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token literal-property property">css</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token comment">// 这里的选项会传递给 css-loader</span>
            <span class="token literal-property property">postcss</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span> <span class="token comment">// 这里的选项会传递给 postcss-loader</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token comment">// css预设器配置项 详见https://cli.vuejs.org/zh/config/#css-loaderoptions</span>
        <span class="token literal-property property">modules</span><span class="token operator">:</span> <span class="token boolean">false</span> <span class="token comment">// 启用 CSS modules for all css / pre-processor files.</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">parallel</span><span class="token operator">:</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;os&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">cpus</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>length <span class="token operator">&gt;</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token comment">// 是否为 Babel 或 TypeScript 使用 thread-loader。该选项在系统的 CPU 有多于一个内核时自动启用，仅作用于生产构建。</span>
    <span class="token literal-property property">pwa</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token comment">// PWA 插件相关配置 see https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-pwa</span>
    <span class="token comment">// webpack-dev-server 相关配置</span>
    <span class="token literal-property property">devServer</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">open</span><span class="token operator">:</span> process<span class="token punctuation">.</span>platform <span class="token operator">===</span> <span class="token string">&#39;darwin&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">host</span><span class="token operator">:</span> <span class="token string">&#39;0.0.0.0&#39;</span><span class="token punctuation">,</span> <span class="token comment">// 允许外部ip访问</span>
        <span class="token literal-property property">port</span><span class="token operator">:</span> <span class="token number">8022</span><span class="token punctuation">,</span> <span class="token comment">// 端口</span>
        <span class="token literal-property property">https</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span> <span class="token comment">// 启用https</span>
        <span class="token literal-property property">overlay</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token literal-property property">warnings</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
            <span class="token literal-property property">errors</span><span class="token operator">:</span> <span class="token boolean">true</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token comment">// 错误、警告在页面弹出</span>
        <span class="token literal-property property">proxy</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token string-property property">&#39;/api&#39;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                <span class="token literal-property property">target</span><span class="token operator">:</span> <span class="token string">&#39;http://www.baidu.com/api&#39;</span><span class="token punctuation">,</span>
                <span class="token literal-property property">changeOrigin</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token comment">// 允许websockets跨域</span>
                <span class="token comment">// ws: true,</span>
                <span class="token literal-property property">pathRewrite</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token comment">//   &#39;^/api&#39;: &#39;/api&#39;   // 这种接口配置出来     http://XX.XX.XX.XX:8083/api/login</span>
          <span class="token comment">//&#39;^/api&#39;: &#39;/&#39; 这种接口配置出来     http://XX.XX.XX.XX:8083/login</span>
        <span class="token punctuation">}</span>
                    <span class="token string-property property">&#39;^/api&#39;</span><span class="token operator">:</span> <span class="token string">&#39;&#39;</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span> <span class="token comment">// 代理转发配置，用于调试环境</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token comment">// 第三方插件配置</span>
    <span class="token literal-property property">pluginOptions</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre></div>`,2),e=[o];function c(l,r){return s(),a("div",null,e)}const u=n(t,[["render",c],["__file","vdev_configjs.html.vue"]]);export{u as default};
