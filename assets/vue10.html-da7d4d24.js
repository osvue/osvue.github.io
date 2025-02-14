import{_ as n,p as s,q as a,a1 as p}from"./framework-d81ad7e5.js";const t={},e=p(`<blockquote><p>Vue的脚手架</p><p>注意 :</p><p>​ Vue-cli3创建的项目中，默认把@符号作为src路径。在任何地方，都可以使用@符号从src路径下引入组件、文件等</p><p>​ vue-cli3创建的项目中，默认把import时的后缀给取消了，在import的时候，可以不带文件后缀（没有不确定的文件名（user.vue,user.js））</p></blockquote><h3 id="安装步骤" tabindex="-1"><a class="header-anchor" href="#安装步骤" aria-hidden="true">#</a> 安装步骤</h3><blockquote><p>安装本版 : npm install -g @vue/cli@3.7.0</p></blockquote><blockquote><p>查看版本 : vue -v</p></blockquote><h3 id="安装插件" tabindex="-1"><a class="header-anchor" href="#安装插件" aria-hidden="true">#</a> 安装插件</h3><blockquote><p>安装 : axios</p></blockquote><blockquote><p>安装Element UI</p></blockquote><h3 id="使用vscode进行配置" tabindex="-1"><a class="header-anchor" href="#使用vscode进行配置" aria-hidden="true">#</a> 使用VSCode进行配置</h3><blockquote><p>查看package.json</p></blockquote><blockquote><p>创建vue.config.js进行配置</p></blockquote><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// vue.config.js 配置说明</span>
<span class="token comment">// 这里只列一部分，具体配置惨考文档啊</span>
module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token comment">// baseUrl :&#39;/&#39; </span>
    <span class="token comment">// 将部署应用程序的基本URL</span>
    <span class="token comment">// 默认情况下，Vue CLI假设您的应用程序将部署在域的根目录下。</span>
    <span class="token comment">// https://www.my-app.com/。如果应用程序部署在子路径上，则需要使用此选项指定子路径。例如，如果您的应用程序部署在https://www.foobar.com/my-app/，集baseUrl到&#39;/my-app/&#39;.</span>

    <span class="token literal-property property">baseUrl</span><span class="token operator">:</span> <span class="token string">&#39;/&#39;</span><span class="token punctuation">,</span>

    <span class="token comment">//   lintOnSave：{ type:Boolean default:true } 问你是否使用eslint</span>
    <span class="token literal-property property">lintOnSave</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
    <span class="token comment">// productionSourceMap：{ type:Bollean,default:true } 生产源映射</span>
    <span class="token comment">// 如果您不需要生产时的源映射，那么将此设置为false可以加速生产构建</span>
    <span class="token literal-property property">productionSourceMap</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
    <span class="token comment">// devServer:{type:Object} 3个属性host,port,https</span>
    <span class="token comment">// 它支持webPack-dev-server的所有选项</span>

    <span class="token literal-property property">devServer</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">port</span><span class="token operator">:</span> <span class="token number">8085</span><span class="token punctuation">,</span> <span class="token comment">// 端口号</span>
        <span class="token literal-property property">open</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token comment">//配置自动启动浏览器</span>
        <span class="token comment">// proxy: &#39;http://localhost:4000&#39; // 配置跨域处理,只有一个代理</span>
        <span class="token literal-property property">proxy</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token string-property property">&#39;/&#39;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                <span class="token literal-property property">target</span><span class="token operator">:</span> <span class="token string">&#39;http://localhost:8080&#39;</span><span class="token punctuation">,</span>
                <span class="token literal-property property">ws</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
                <span class="token literal-property property">changeOrigin</span><span class="token operator">:</span> <span class="token boolean">true</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>  <span class="token comment">// 配置多个代理</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><blockquote><p>启动项目 : npm run dev</p><p>如果项目报错 , 删除vue.config.js中的 : baseUrl: &#39;/&#39;,</p></blockquote><blockquote><p>创建utils文件夹 和 request.js文件</p></blockquote><p><code>request.js</code></p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">import</span> axios <span class="token keyword">from</span> <span class="token string">&#39;axios&#39;</span>
<span class="token keyword">const</span> service <span class="token operator">=</span> axios<span class="token punctuation">.</span><span class="token function">create</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">baseURL</span><span class="token operator">:</span> <span class="token string">&#39;/&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">timeout</span><span class="token operator">:</span> <span class="token number">10000</span> <span class="token comment">// 默认请求超时时间</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token comment">// request 拦截器</span>
service<span class="token punctuation">.</span>interceptors<span class="token punctuation">.</span>request<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>
  <span class="token parameter">config</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> config
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token parameter">error</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> Promise<span class="token punctuation">.</span><span class="token function">reject</span><span class="token punctuation">(</span>error<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">)</span>

<span class="token comment">// response 拦截器</span>
service<span class="token punctuation">.</span>interceptors<span class="token punctuation">.</span>response<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>
  <span class="token parameter">response</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> res <span class="token operator">=</span> response<span class="token punctuation">.</span>data
    <span class="token keyword">return</span> res
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token parameter">error</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">)</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> service
</code></pre></div><blockquote><p>创建api文件夹和api文件</p></blockquote><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">import</span> request <span class="token keyword">from</span> <span class="token string">&#39;@/utils/request&#39;</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token function">departmentList</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token function">request</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      <span class="token literal-property property">url</span><span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">/department/departmentList</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">,</span>
      <span class="token literal-property property">method</span><span class="token operator">:</span> <span class="token string">&#39;get&#39;</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div>`,17),o=[e];function c(r,l){return s(),a("div",null,o)}const k=n(t,[["render",c],["__file","vue10.html.vue"]]);export{k as default};
