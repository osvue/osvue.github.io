import{_ as s,o as a,c as t,a as e}from"./app-215c512d.js";const p={};function o(c,n){return a(),t("div",null,n[0]||(n[0]=[e(`<p>我来详细说明这三种配置的不同情况：</p><h3 id="_1-createwebhistory-配置详解" tabindex="-1"><a class="header-anchor" href="#_1-createwebhistory-配置详解" aria-hidden="true">#</a> 1. <code>createWebHistory</code> 配置详解</h3><h4 id="_1-1-不带参数-createwebhistory" tabindex="-1"><a class="header-anchor" href="#_1-1-不带参数-createwebhistory" aria-hidden="true">#</a> 1.1 不带参数 <code>createWebHistory()</code></h4><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> router <span class="token operator">=</span> <span class="token function">createRouter</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">history</span><span class="token operator">:</span> <span class="token function">createWebHistory</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  routes
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre></div><p>访问方式：</p><ul><li>根路径访问：<code>http://your-domain.com/</code></li><li>子路由访问：<code>http://your-domain.com/topic1Video</code></li><li>带参数访问：<code>http://your-domain.com/topic1Video?id=123</code></li></ul><p>部署影响：</p><ul><li>应用部署在网站根目录</li><li>所有路由都是相对于根路径</li><li>静态资源路径：<code>http://your-domain.com/assets/xxx.js</code></li></ul><p>后端接口配置：</p><div class="language-nginx" data-ext="nginx"><pre class="language-nginx"><code><span class="token comment"># Nginx 配置</span>
<span class="token directive"><span class="token keyword">server</span></span> <span class="token punctuation">{</span>
    <span class="token directive"><span class="token keyword">listen</span> <span class="token number">80</span></span><span class="token punctuation">;</span>
    <span class="token directive"><span class="token keyword">server_name</span> your-domain.com</span><span class="token punctuation">;</span>

    <span class="token comment"># 前端应用</span>
    <span class="token directive"><span class="token keyword">location</span> /</span> <span class="token punctuation">{</span>
        <span class="token directive"><span class="token keyword">root</span> /usr/share/nginx/html</span><span class="token punctuation">;</span>
        <span class="token directive"><span class="token keyword">try_files</span> <span class="token variable">$uri</span> <span class="token variable">$uri</span>/ /index.html</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment"># 后端 API 代理</span>
    <span class="token directive"><span class="token keyword">location</span> /api/</span> <span class="token punctuation">{</span>
        <span class="token directive"><span class="token keyword">proxy_pass</span> http://localhost:5123/</span><span class="token punctuation">;</span>
        <span class="token directive"><span class="token keyword">proxy_set_header</span> Host <span class="token variable">$host</span></span><span class="token punctuation">;</span>
        <span class="token directive"><span class="token keyword">proxy_set_header</span> X-Real-IP <span class="token variable">$remote_addr</span></span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><h4 id="_1-2-带参数-createwebhistory-my-demo" tabindex="-1"><a class="header-anchor" href="#_1-2-带参数-createwebhistory-my-demo" aria-hidden="true">#</a> 1.2 带参数 <code>createWebHistory(&#39;/my-demo/&#39;)</code></h4><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> router <span class="token operator">=</span> <span class="token function">createRouter</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">history</span><span class="token operator">:</span> <span class="token function">createWebHistory</span><span class="token punctuation">(</span><span class="token string">&#39;/my-demo/&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  routes
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre></div><p>访问方式：</p><ul><li>根路径访问：<code>http://your-domain.com/my-demo/</code></li><li>子路由访问：<code>http://your-domain.com/my-demo/topic1Video</code></li><li>带参数访问：<code>http://your-domain.com/my-demo/topic1Video?id=123</code></li></ul><p>部署影响：</p><ul><li>应用部署在子目录</li><li>所有路由都是相对于 <code>/my-demo/</code> 路径</li><li>静态资源路径：<code>http://your-domain.com/my-demo/assets/xxx.js</code></li></ul><p>后端接口配置：</p><div class="language-nginx" data-ext="nginx"><pre class="language-nginx"><code><span class="token directive"><span class="token keyword">server</span></span> <span class="token punctuation">{</span>
    <span class="token directive"><span class="token keyword">listen</span> <span class="token number">80</span></span><span class="token punctuation">;</span>
    <span class="token directive"><span class="token keyword">server_name</span> your-domain.com</span><span class="token punctuation">;</span>

    <span class="token comment"># 前端应用</span>
    <span class="token directive"><span class="token keyword">location</span> /my-demo/</span> <span class="token punctuation">{</span>
        <span class="token directive"><span class="token keyword">alias</span> /usr/share/nginx/html/</span><span class="token punctuation">;</span>
        <span class="token directive"><span class="token keyword">try_files</span> <span class="token variable">$uri</span> <span class="token variable">$uri</span>/ /my-demo/index.html</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment"># 后端 API 代理</span>
    <span class="token directive"><span class="token keyword">location</span> /my-demo/api/</span> <span class="token punctuation">{</span>
        <span class="token directive"><span class="token keyword">proxy_pass</span> http://localhost:5123/</span><span class="token punctuation">;</span>
        <span class="token directive"><span class="token keyword">proxy_set_header</span> Host <span class="token variable">$host</span></span><span class="token punctuation">;</span>
        <span class="token directive"><span class="token keyword">proxy_set_header</span> X-Real-IP <span class="token variable">$remote_addr</span></span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><h3 id="_2-vite-base-配置详解" tabindex="-1"><a class="header-anchor" href="#_2-vite-base-配置详解" aria-hidden="true">#</a> 2. Vite <code>base</code> 配置详解</h3><h4 id="_2-1-不带参数-base" tabindex="-1"><a class="header-anchor" href="#_2-1-不带参数-base" aria-hidden="true">#</a> 2.1 不带参数 <code>base: &#39;/&#39;</code></h4><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineConfig</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">base</span><span class="token operator">:</span> <span class="token string">&#39;/&#39;</span><span class="token punctuation">,</span>
  <span class="token comment">// ... 其他配置</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre></div><p>访问方式：</p><ul><li>静态资源：<code>http://your-domain.com/assets/xxx.js</code></li><li>图片资源：<code>http://your-domain.com/images/xxx.png</code></li><li>API 请求：<code>http://your-domain.com/api/xxx</code></li></ul><p>部署影响：</p><ul><li>所有静态资源从根路径加载</li><li>开发环境和生产环境路径一致</li><li>适合部署在根目录</li></ul><p>后端接口配置：</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 前端 API 请求配置</span>
<span class="token keyword">const</span> api <span class="token operator">=</span> axios<span class="token punctuation">.</span><span class="token function">create</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">baseURL</span><span class="token operator">:</span> <span class="token string">&#39;/api&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">timeout</span><span class="token operator">:</span> <span class="token number">5000</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token comment">// 后端服务配置</span>
<span class="token keyword">const</span> express <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;express&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> app <span class="token operator">=</span> <span class="token function">express</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
app<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span><span class="token string">&#39;/api&#39;</span><span class="token punctuation">,</span> router<span class="token punctuation">)</span>
</code></pre></div><h4 id="_2-2-带参数-base-my-demo" tabindex="-1"><a class="header-anchor" href="#_2-2-带参数-base-my-demo" aria-hidden="true">#</a> 2.2 带参数 <code>base: &#39;/my-demo/&#39;</code></h4><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineConfig</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">base</span><span class="token operator">:</span> <span class="token string">&#39;/my-demo/&#39;</span><span class="token punctuation">,</span>
  <span class="token comment">// ... 其他配置</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre></div><p>访问方式：</p><ul><li>静态资源：<code>http://your-domain.com/my-demo/assets/xxx.js</code></li><li>图片资源：<code>http://your-domain.com/my-demo/images/xxx.png</code></li><li>API 请求：<code>http://your-domain.com/my-demo/api/xxx</code></li></ul><p>部署影响：</p><ul><li>所有静态资源从子路径加载</li><li>需要确保所有资源路径正确</li><li>适合部署在子目录</li></ul><p>后端接口配置：</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 前端 API 请求配置</span>
<span class="token keyword">const</span> api <span class="token operator">=</span> axios<span class="token punctuation">.</span><span class="token function">create</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">baseURL</span><span class="token operator">:</span> <span class="token string">&#39;/my-demo/api&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">timeout</span><span class="token operator">:</span> <span class="token number">5000</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token comment">// 后端服务配置</span>
<span class="token keyword">const</span> express <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;express&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> app <span class="token operator">=</span> <span class="token function">express</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
app<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span><span class="token string">&#39;/my-demo/api&#39;</span><span class="token punctuation">,</span> router<span class="token punctuation">)</span>
</code></pre></div><h3 id="_3-nginx-配置详解" tabindex="-1"><a class="header-anchor" href="#_3-nginx-配置详解" aria-hidden="true">#</a> 3. Nginx 配置详解</h3><h4 id="_3-1-根路径配置" tabindex="-1"><a class="header-anchor" href="#_3-1-根路径配置" aria-hidden="true">#</a> 3.1 根路径配置</h4><div class="language-nginx" data-ext="nginx"><pre class="language-nginx"><code><span class="token directive"><span class="token keyword">server</span></span> <span class="token punctuation">{</span>
    <span class="token directive"><span class="token keyword">listen</span> <span class="token number">80</span></span><span class="token punctuation">;</span>
    <span class="token directive"><span class="token keyword">server_name</span> your-domain.com</span><span class="token punctuation">;</span>

    <span class="token comment"># 前端应用</span>
    <span class="token directive"><span class="token keyword">location</span> /</span> <span class="token punctuation">{</span>
        <span class="token directive"><span class="token keyword">root</span> /usr/share/nginx/html</span><span class="token punctuation">;</span>
        <span class="token directive"><span class="token keyword">index</span> index.html</span><span class="token punctuation">;</span>
        <span class="token directive"><span class="token keyword">try_files</span> <span class="token variable">$uri</span> <span class="token variable">$uri</span>/ /index.html</span><span class="token punctuation">;</span>

        <span class="token comment"># 静态资源缓存</span>
        <span class="token directive"><span class="token keyword">location</span> ~* \\.(js|css|png|jpg|jpeg|gif|ico|svg)$</span> <span class="token punctuation">{</span>
            <span class="token directive"><span class="token keyword">expires</span> <span class="token number">1y</span></span><span class="token punctuation">;</span>
            <span class="token directive"><span class="token keyword">add_header</span> Cache-Control <span class="token string">&quot;public, no-transform&quot;</span></span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token comment"># 后端 API 代理</span>
    <span class="token directive"><span class="token keyword">location</span> /api/</span> <span class="token punctuation">{</span>
        <span class="token directive"><span class="token keyword">proxy_pass</span> http://localhost:5123/</span><span class="token punctuation">;</span>
        <span class="token directive"><span class="token keyword">proxy_set_header</span> Host <span class="token variable">$host</span></span><span class="token punctuation">;</span>
        <span class="token directive"><span class="token keyword">proxy_set_header</span> X-Real-IP <span class="token variable">$remote_addr</span></span><span class="token punctuation">;</span>
        <span class="token directive"><span class="token keyword">proxy_set_header</span> X-Forwarded-For <span class="token variable">$proxy_add_x_forwarded_for</span></span><span class="token punctuation">;</span>
        <span class="token directive"><span class="token keyword">proxy_set_header</span> X-Forwarded-Proto <span class="token variable">$scheme</span></span><span class="token punctuation">;</span>

        <span class="token comment"># API 缓存控制</span>
        <span class="token directive"><span class="token keyword">add_header</span> Cache-Control <span class="token string">&quot;no-cache, no-store, must-revalidate&quot;</span></span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment"># 安全配置</span>
    <span class="token directive"><span class="token keyword">add_header</span> X-Frame-Options <span class="token string">&quot;SAMEORIGIN&quot;</span></span><span class="token punctuation">;</span>
    <span class="token directive"><span class="token keyword">add_header</span> X-XSS-Protection <span class="token string">&quot;1; mode=block&quot;</span></span><span class="token punctuation">;</span>
    <span class="token directive"><span class="token keyword">add_header</span> X-Content-Type-Options <span class="token string">&quot;nosniff&quot;</span></span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><h4 id="_3-2-子路径配置" tabindex="-1"><a class="header-anchor" href="#_3-2-子路径配置" aria-hidden="true">#</a> 3.2 子路径配置</h4><div class="language-nginx" data-ext="nginx"><pre class="language-nginx"><code><span class="token directive"><span class="token keyword">server</span></span> <span class="token punctuation">{</span>
    <span class="token directive"><span class="token keyword">listen</span> <span class="token number">80</span></span><span class="token punctuation">;</span>
    <span class="token directive"><span class="token keyword">server_name</span> your-domain.com</span><span class="token punctuation">;</span>

    <span class="token comment"># 前端应用</span>
    <span class="token directive"><span class="token keyword">location</span> /my-demo/</span> <span class="token punctuation">{</span>
        <span class="token directive"><span class="token keyword">alias</span> /usr/share/nginx/html/</span><span class="token punctuation">;</span>
        <span class="token directive"><span class="token keyword">index</span> index.html</span><span class="token punctuation">;</span>
        <span class="token directive"><span class="token keyword">try_files</span> <span class="token variable">$uri</span> <span class="token variable">$uri</span>/ /my-demo/index.html</span><span class="token punctuation">;</span>

        <span class="token comment"># 静态资源缓存</span>
        <span class="token directive"><span class="token keyword">location</span> ~* \\.(js|css|png|jpg|jpeg|gif|ico|svg)$</span> <span class="token punctuation">{</span>
            <span class="token directive"><span class="token keyword">expires</span> <span class="token number">1y</span></span><span class="token punctuation">;</span>
            <span class="token directive"><span class="token keyword">add_header</span> Cache-Control <span class="token string">&quot;public, no-transform&quot;</span></span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token comment"># 后端 API 代理</span>
    <span class="token directive"><span class="token keyword">location</span> /my-demo/api/</span> <span class="token punctuation">{</span>
        <span class="token directive"><span class="token keyword">proxy_pass</span> http://localhost:5123/</span><span class="token punctuation">;</span>
        <span class="token directive"><span class="token keyword">proxy_set_header</span> Host <span class="token variable">$host</span></span><span class="token punctuation">;</span>
        <span class="token directive"><span class="token keyword">proxy_set_header</span> X-Real-IP <span class="token variable">$remote_addr</span></span><span class="token punctuation">;</span>
        <span class="token directive"><span class="token keyword">proxy_set_header</span> X-Forwarded-For <span class="token variable">$proxy_add_x_forwarded_for</span></span><span class="token punctuation">;</span>
        <span class="token directive"><span class="token keyword">proxy_set_header</span> X-Forwarded-Proto <span class="token variable">$scheme</span></span><span class="token punctuation">;</span>

        <span class="token comment"># API 缓存控制</span>
        <span class="token directive"><span class="token keyword">add_header</span> Cache-Control <span class="token string">&quot;no-cache, no-store, must-revalidate&quot;</span></span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment"># 安全配置</span>
    <span class="token directive"><span class="token keyword">add_header</span> X-Frame-Options <span class="token string">&quot;SAMEORIGIN&quot;</span></span><span class="token punctuation">;</span>
    <span class="token directive"><span class="token keyword">add_header</span> X-XSS-Protection <span class="token string">&quot;1; mode=block&quot;</span></span><span class="token punctuation">;</span>
    <span class="token directive"><span class="token keyword">add_header</span> X-Content-Type-Options <span class="token string">&quot;nosniff&quot;</span></span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><h3 id="完整部署示例" tabindex="-1"><a class="header-anchor" href="#完整部署示例" aria-hidden="true">#</a> 完整部署示例</h3><p>假设我们要部署在子路径 <code>/my-demo/</code> 下：</p><ol><li><strong>Vite 配置</strong>：</li></ol><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// vite.config.js</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineConfig</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">base</span><span class="token operator">:</span> <span class="token string">&#39;/my-demo/&#39;</span><span class="token punctuation">,</span>
  <span class="token comment">// ... 其他配置</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre></div><ol start="2"><li><strong>路由配置</strong>：</li></ol><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// router/index.js</span>
<span class="token keyword">const</span> router <span class="token operator">=</span> <span class="token function">createRouter</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">history</span><span class="token operator">:</span> <span class="token function">createWebHistory</span><span class="token punctuation">(</span><span class="token string">&#39;/my-demo/&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  routes
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre></div><ol start="3"><li><strong>API 配置</strong>：</li></ol><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// api/index.js</span>
<span class="token keyword">import</span> axios <span class="token keyword">from</span> <span class="token string">&#39;axios&#39;</span>

<span class="token keyword">const</span> api <span class="token operator">=</span> axios<span class="token punctuation">.</span><span class="token function">create</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">baseURL</span><span class="token operator">:</span> <span class="token string">&#39;/my-demo/api&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">timeout</span><span class="token operator">:</span> <span class="token number">5000</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> api
</code></pre></div><ol start="4"><li><strong>Nginx 配置</strong>：</li></ol><div class="language-nginx" data-ext="nginx"><pre class="language-nginx"><code><span class="token directive"><span class="token keyword">server</span></span> <span class="token punctuation">{</span>
    <span class="token directive"><span class="token keyword">listen</span> <span class="token number">80</span></span><span class="token punctuation">;</span>
    <span class="token directive"><span class="token keyword">server_name</span> your-domain.com</span><span class="token punctuation">;</span>

    <span class="token comment"># 前端应用</span>
    <span class="token directive"><span class="token keyword">location</span> /my-demo/</span> <span class="token punctuation">{</span>
        <span class="token directive"><span class="token keyword">alias</span> /usr/share/nginx/html/</span><span class="token punctuation">;</span>
        <span class="token directive"><span class="token keyword">try_files</span> <span class="token variable">$uri</span> <span class="token variable">$uri</span>/ /my-demo/index.html</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment"># 静态资源</span>
    <span class="token directive"><span class="token keyword">location</span> /my-demo/assets/</span> <span class="token punctuation">{</span>
        <span class="token directive"><span class="token keyword">alias</span> /usr/share/nginx/html/assets/</span><span class="token punctuation">;</span>
        <span class="token directive"><span class="token keyword">expires</span> <span class="token number">1y</span></span><span class="token punctuation">;</span>
        <span class="token directive"><span class="token keyword">add_header</span> Cache-Control <span class="token string">&quot;public, no-transform&quot;</span></span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment"># 后端 API</span>
    <span class="token directive"><span class="token keyword">location</span> /my-demo/api/</span> <span class="token punctuation">{</span>
        <span class="token directive"><span class="token keyword">proxy_pass</span> http://localhost:5123/</span><span class="token punctuation">;</span>
        <span class="token directive"><span class="token keyword">proxy_set_header</span> Host <span class="token variable">$host</span></span><span class="token punctuation">;</span>
        <span class="token directive"><span class="token keyword">proxy_set_header</span> X-Real-IP <span class="token variable">$remote_addr</span></span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><ol start="5"><li><strong>访问路径</strong>：</li></ol><ul><li>首页：<code>http://your-domain.com/my-demo/</code></li><li>子页面：<code>http://your-domain.com/my-demo/topic1Video</code></li><li>静态资源：<code>http://your-domain.com/my-demo/assets/xxx.js</code></li><li>API 接口：<code>http://your-domain.com/my-demo/api/xxx</code></li></ul><ol start="6"><li><strong>构建和部署</strong>：</li></ol><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 构建</span>
<span class="token function">npm</span> run build

<span class="token comment"># 部署到 Nginx</span>
<span class="token function">cp</span> <span class="token parameter variable">-r</span> dist/* /usr/share/nginx/html/

<span class="token comment"># 重启 Nginx</span>
nginx <span class="token parameter variable">-s</span> reload
</code></pre></div><p>这样的配置可以确保：</p><ol><li>前端应用正确部署在子路径</li><li>路由正常工作</li><li>静态资源正确加载</li><li>API 请求正确代理</li><li>页面刷新不 404</li><li>缓存策略合理</li><li>安全性得到保障</li></ol><h3 id="关于-vite-config-js-base配置和-router-路由参数" tabindex="-1"><a class="header-anchor" href="#关于-vite-config-js-base配置和-router-路由参数" aria-hidden="true">#</a> 关于 vite.config.js base配置和 router 路由参数</h3><p>是的，当 <code>vite.config.js</code> 配置了 <code>base: &#39;/bjtu/&#39;</code> 时，路由也必须相应配置 <code>createWebHistory(&#39;/bjtu/&#39;)</code>，这是因为：</p><ol><li><p><strong>Vite 的 <code>base</code> 配置</strong>：</p><ul><li>影响所有静态资源的加载路径</li><li>影响开发服务器的基础路径</li><li>影响构建后的资源引用路径</li></ul></li><li><p><strong>Vue Router 的 <code>createWebHistory</code></strong>：</p><ul><li>控制前端路由的基础路径</li><li>影响路由的匹配和跳转</li><li>影响浏览器历史记录的管理</li></ul></li></ol><p>当前你的配置：</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// vite.config.js</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineConfig</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">base</span><span class="token operator">:</span> <span class="token string">&#39;/bjtu/&#39;</span><span class="token punctuation">,</span>  <span class="token comment">// 已配置</span>
  <span class="token comment">// ... 其他配置</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token comment">// router/index.js</span>
<span class="token keyword">const</span> router <span class="token operator">=</span> <span class="token function">createRouter</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">history</span><span class="token operator">:</span> <span class="token function">createWebHistory</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>  <span class="token comment">// 未配置，使用默认值 &#39;/&#39;</span>
  routes
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre></div><p>这样配置会导致以下问题：</p><ol><li><p><strong>路径不匹配</strong>：</p><ul><li>静态资源路径：<code>/bjtu/assets/xxx.js</code>（由 Vite 的 base 决定）</li><li>路由路径：<code>/topic1Video</code>（由 Router 的默认值决定）</li><li>导致路由无法正确匹配到资源</li></ul></li><li><p><strong>访问不到页面的原因</strong>：</p><ul><li>浏览器访问：<code>http://your-domain.com/bjtu/topic1Video</code></li><li>但路由期望：<code>http://your-domain.com/topic1Video</code></li><li>造成路径不匹配，导致 404</li></ul></li></ol><p>正确的配置应该是：</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// vite.config.js</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineConfig</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">base</span><span class="token operator">:</span> <span class="token string">&#39;/bjtu/&#39;</span><span class="token punctuation">,</span>
  <span class="token comment">// ... 其他配置</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token comment">// router/index.js</span>
<span class="token keyword">const</span> router <span class="token operator">=</span> <span class="token function">createRouter</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">history</span><span class="token operator">:</span> <span class="token function">createWebHistory</span><span class="token punctuation">(</span><span class="token string">&#39;/bjtu/&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>  <span class="token comment">// 与 vite.config.js 的 base 保持一致</span>
  routes
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre></div><p>完整的部署配置示例：</p><ol><li><strong>Vite 配置</strong>：</li></ol><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// vite.config.js</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineConfig</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">base</span><span class="token operator">:</span> <span class="token string">&#39;/bjtu/&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token function">vue</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token literal-property property">resolve</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">alias</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token string-property property">&#39;@&#39;</span><span class="token operator">:</span> path<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token string">&#39;src&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token comment">// ... 其他配置</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre></div><ol start="2"><li><strong>路由配置</strong>：</li></ol><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// router/index.js</span>
<span class="token keyword">const</span> router <span class="token operator">=</span> <span class="token function">createRouter</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">history</span><span class="token operator">:</span> <span class="token function">createWebHistory</span><span class="token punctuation">(</span><span class="token string">&#39;/bjtu/&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  routes
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre></div><ol start="3"><li><strong>Nginx 配置</strong>：</li></ol><div class="language-nginx" data-ext="nginx"><pre class="language-nginx"><code><span class="token directive"><span class="token keyword">server</span></span> <span class="token punctuation">{</span>
    <span class="token directive"><span class="token keyword">listen</span> <span class="token number">80</span></span><span class="token punctuation">;</span>
    <span class="token directive"><span class="token keyword">server_name</span> your-domain.com</span><span class="token punctuation">;</span>

    <span class="token comment"># 前端应用</span>
    <span class="token directive"><span class="token keyword">location</span> /bjtu/</span> <span class="token punctuation">{</span>
        <span class="token directive"><span class="token keyword">alias</span> /usr/share/nginx/html/</span><span class="token punctuation">;</span>
        <span class="token directive"><span class="token keyword">try_files</span> <span class="token variable">$uri</span> <span class="token variable">$uri</span>/ /bjtu/index.html</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment"># 静态资源</span>
    <span class="token directive"><span class="token keyword">location</span> /bjtu/assets/</span> <span class="token punctuation">{</span>
        <span class="token directive"><span class="token keyword">alias</span> /usr/share/nginx/html/assets/</span><span class="token punctuation">;</span>
        <span class="token directive"><span class="token keyword">expires</span> <span class="token number">1y</span></span><span class="token punctuation">;</span>
        <span class="token directive"><span class="token keyword">add_header</span> Cache-Control <span class="token string">&quot;public, no-transform&quot;</span></span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment"># 后端 API</span>
    <span class="token directive"><span class="token keyword">location</span> /bjtu/api/</span> <span class="token punctuation">{</span>
        <span class="token directive"><span class="token keyword">proxy_pass</span> http://localhost:5123/</span><span class="token punctuation">;</span>
        <span class="token directive"><span class="token keyword">proxy_set_header</span> Host <span class="token variable">$host</span></span><span class="token punctuation">;</span>
        <span class="token directive"><span class="token keyword">proxy_set_header</span> X-Real-IP <span class="token variable">$remote_addr</span></span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><ol start="4"><li><strong>访问路径</strong>：</li></ol><ul><li>首页：<code>http://your-domain.com/bjtu/</code></li><li>子页面：<code>http://your-domain.com/bjtu/topic1Video</code></li><li>静态资源：<code>http://your-domain.com/bjtu/assets/xxx.js</code></li><li>API 接口：<code>http://your-domain.com/bjtu/api/xxx</code></li></ul><ol start="5"><li><strong>开发环境配置</strong>：</li></ol><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// vite.config.js</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineConfig</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">base</span><span class="token operator">:</span> <span class="token string">&#39;/bjtu/&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">server</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">port</span><span class="token operator">:</span> <span class="token number">5173</span><span class="token punctuation">,</span>
    <span class="token literal-property property">proxy</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token string-property property">&#39;/bjtu/api&#39;</span><span class="token operator">:</span> <span class="token punctuation">{</span>  <span class="token comment">// 注意这里也要加上 /bjtu 前缀</span>
        <span class="token literal-property property">target</span><span class="token operator">:</span> <span class="token string">&#39;http://localhost:5123&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">changeOrigin</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
        <span class="token function-variable function">rewrite</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token parameter">path</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> path<span class="token punctuation">.</span><span class="token function">replace</span><span class="token punctuation">(</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">^\\/bjtu\\/api</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">)</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre></div><ol start="6"><li><strong>API 请求配置</strong>：</li></ol><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// api/index.js</span>
<span class="token keyword">import</span> axios <span class="token keyword">from</span> <span class="token string">&#39;axios&#39;</span>

<span class="token keyword">const</span> api <span class="token operator">=</span> axios<span class="token punctuation">.</span><span class="token function">create</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">baseURL</span><span class="token operator">:</span> <span class="token string">&#39;/bjtu/api&#39;</span><span class="token punctuation">,</span>  <span class="token comment">// 注意这里也要加上 /bjtu 前缀</span>
  <span class="token literal-property property">timeout</span><span class="token operator">:</span> <span class="token number">5000</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> api
</code></pre></div><p>总结：</p><ol><li><code>base</code> 和 <code>createWebHistory</code> 必须保持一致</li><li>所有相关的路径配置都需要考虑 <code>base</code> 前缀</li><li>包括： <ul><li>静态资源路径</li><li>API 请求路径</li><li>路由路径</li><li>Nginx 配置路径</li></ul></li><li>开发环境和生产环境都需要正确配置</li><li>确保所有资源都能正确加载和访问</li></ol><p>这样配置后，你的应用就可以正确部署在 <code>/bjtu/</code> 路径下，并且：</p><ul><li>路由正常工作</li><li>静态资源正确加载</li><li>API 请求正确代理</li><li>页面刷新不 404</li></ul><h3 id="nginx-conf-斜杠的问题" tabindex="-1"><a class="header-anchor" href="#nginx-conf-斜杠的问题" aria-hidden="true">#</a> nginx.conf 斜杠的问题</h3><p>我来详细解释 Nginx 中 <code>location</code> 的 <code>root</code> 和 <code>alias</code> 的区别，以及斜杠的影响：</p><h3 id="_1-root-和-alias-的区别" tabindex="-1"><a class="header-anchor" href="#_1-root-和-alias-的区别" aria-hidden="true">#</a> 1. <code>root</code> 和 <code>alias</code> 的区别</h3><h4 id="_1-1-root-指令" tabindex="-1"><a class="header-anchor" href="#_1-1-root-指令" aria-hidden="true">#</a> 1.1 <code>root</code> 指令</h4><div class="language-nginx" data-ext="nginx"><pre class="language-nginx"><code><span class="token directive"><span class="token keyword">location</span> /bjtu/</span> <span class="token punctuation">{</span>
    <span class="token directive"><span class="token keyword">root</span> /usr/share/nginx/html</span><span class="token punctuation">;</span>  <span class="token comment"># 不带斜杠</span>
    <span class="token comment"># 或</span>
    <span class="token directive"><span class="token keyword">root</span> /usr/share/nginx/html/</span><span class="token punctuation">;</span> <span class="token comment"># 带斜杠</span>
<span class="token punctuation">}</span>
</code></pre></div><p>特点：</p><ul><li><code>root</code> 会将 location 的路径追加到 root 路径后面</li><li>最终路径 = root路径 + location路径 + 请求路径</li><li>例如访问 <code>/bjtu/index.html</code>： <ul><li>实际文件路径：<code>/usr/share/nginx/html/bjtu/index.html</code></li></ul></li></ul><h4 id="_1-2-alias-指令" tabindex="-1"><a class="header-anchor" href="#_1-2-alias-指令" aria-hidden="true">#</a> 1.2 <code>alias</code> 指令</h4><div class="language-nginx" data-ext="nginx"><pre class="language-nginx"><code><span class="token directive"><span class="token keyword">location</span> /bjtu/</span> <span class="token punctuation">{</span>
    <span class="token directive"><span class="token keyword">alias</span> /usr/share/nginx/html</span><span class="token punctuation">;</span>  <span class="token comment"># 不带斜杠</span>
    <span class="token comment"># 或</span>
    <span class="token directive"><span class="token keyword">alias</span> /usr/share/nginx/html/</span><span class="token punctuation">;</span> <span class="token comment"># 带斜杠</span>
<span class="token punctuation">}</span>
</code></pre></div><p>特点：</p><ul><li><code>alias</code> 会用 alias 路径替换 location 路径</li><li>最终路径 = alias路径 + 请求路径（不包含 location 路径）</li><li>例如访问 <code>/bjtu/index.html</code>： <ul><li>实际文件路径：<code>/usr/share/nginx/html/index.html</code></li></ul></li></ul><h3 id="_2-斜杠的影响" tabindex="-1"><a class="header-anchor" href="#_2-斜杠的影响" aria-hidden="true">#</a> 2. 斜杠的影响</h3><h4 id="_2-1-不带斜杠的情况" tabindex="-1"><a class="header-anchor" href="#_2-1-不带斜杠的情况" aria-hidden="true">#</a> 2.1 不带斜杠的情况</h4><div class="language-nginx" data-ext="nginx"><pre class="language-nginx"><code><span class="token comment"># 配置1：都不带斜杠</span>
<span class="token directive"><span class="token keyword">location</span> /bjtu</span> <span class="token punctuation">{</span>
    <span class="token directive"><span class="token keyword">root</span> /usr/share/nginx/html</span><span class="token punctuation">;</span>
    <span class="token comment"># 访问 /bjtu/index.html</span>
    <span class="token comment"># 实际路径：/usr/share/nginx/html/bjtu/index.html</span>
<span class="token punctuation">}</span>

<span class="token directive"><span class="token keyword">location</span> /bjtu</span> <span class="token punctuation">{</span>
    <span class="token directive"><span class="token keyword">alias</span> /usr/share/nginx/html</span><span class="token punctuation">;</span>
    <span class="token comment"># 访问 /bjtu/index.html</span>
    <span class="token comment"># 实际路径：/usr/share/nginx/html/index.html</span>
<span class="token punctuation">}</span>

<span class="token comment"># 配置2：location带斜杠，路径不带斜杠</span>
<span class="token directive"><span class="token keyword">location</span> /bjtu/</span> <span class="token punctuation">{</span>
    <span class="token directive"><span class="token keyword">root</span> /usr/share/nginx/html</span><span class="token punctuation">;</span>
    <span class="token comment"># 访问 /bjtu/index.html</span>
    <span class="token comment"># 实际路径：/usr/share/nginx/html/bjtu/index.html</span>
<span class="token punctuation">}</span>

<span class="token directive"><span class="token keyword">location</span> /bjtu/</span> <span class="token punctuation">{</span>
    <span class="token directive"><span class="token keyword">alias</span> /usr/share/nginx/html</span><span class="token punctuation">;</span>
    <span class="token comment"># 访问 /bjtu/index.html</span>
    <span class="token comment"># 实际路径：/usr/share/nginx/html/index.html</span>
<span class="token punctuation">}</span>
</code></pre></div><h4 id="_2-2-带斜杠的情况" tabindex="-1"><a class="header-anchor" href="#_2-2-带斜杠的情况" aria-hidden="true">#</a> 2.2 带斜杠的情况</h4><div class="language-nginx" data-ext="nginx"><pre class="language-nginx"><code><span class="token comment"># 配置3：都带斜杠</span>
<span class="token directive"><span class="token keyword">location</span> /bjtu/</span> <span class="token punctuation">{</span>
    <span class="token directive"><span class="token keyword">root</span> /usr/share/nginx/html/</span><span class="token punctuation">;</span>
    <span class="token comment"># 访问 /bjtu/index.html</span>
    <span class="token comment"># 实际路径：/usr/share/nginx/html/bjtu/index.html</span>
<span class="token punctuation">}</span>

<span class="token directive"><span class="token keyword">location</span> /bjtu/</span> <span class="token punctuation">{</span>
    <span class="token directive"><span class="token keyword">alias</span> /usr/share/nginx/html/</span><span class="token punctuation">;</span>
    <span class="token comment"># 访问 /bjtu/index.html</span>
    <span class="token comment"># 实际路径：/usr/share/nginx/html/index.html</span>
<span class="token punctuation">}</span>
</code></pre></div><h3 id="_3-实际应用示例" tabindex="-1"><a class="header-anchor" href="#_3-实际应用示例" aria-hidden="true">#</a> 3. 实际应用示例</h3><h4 id="_3-1-正确的配置-推荐" tabindex="-1"><a class="header-anchor" href="#_3-1-正确的配置-推荐" aria-hidden="true">#</a> 3.1 正确的配置（推荐）</h4><div class="language-nginx" data-ext="nginx"><pre class="language-nginx"><code><span class="token directive"><span class="token keyword">server</span></span> <span class="token punctuation">{</span>
    <span class="token directive"><span class="token keyword">listen</span> <span class="token number">80</span></span><span class="token punctuation">;</span>
    <span class="token directive"><span class="token keyword">server_name</span> your-domain.com</span><span class="token punctuation">;</span>

    <span class="token comment"># 方式1：使用 alias（推荐）</span>
    <span class="token directive"><span class="token keyword">location</span> /bjtu/</span> <span class="token punctuation">{</span>
        <span class="token directive"><span class="token keyword">alias</span> /usr/share/nginx/html/</span><span class="token punctuation">;</span>  <span class="token comment"># 带斜杠</span>
        <span class="token directive"><span class="token keyword">try_files</span> <span class="token variable">$uri</span> <span class="token variable">$uri</span>/ /bjtu/index.html</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment"># 方式2：使用 root</span>
    <span class="token directive"><span class="token keyword">location</span> /bjtu/</span> <span class="token punctuation">{</span>
        <span class="token directive"><span class="token keyword">root</span> /usr/share/nginx/html</span><span class="token punctuation">;</span>    <span class="token comment"># 不带斜杠</span>
        <span class="token directive"><span class="token keyword">try_files</span> <span class="token variable">$uri</span> <span class="token variable">$uri</span>/ /bjtu/index.html</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment"># 静态资源缓存</span>
    <span class="token directive"><span class="token keyword">location</span> /bjtu/assets/</span> <span class="token punctuation">{</span>
        <span class="token directive"><span class="token keyword">alias</span> /usr/share/nginx/html/assets/</span><span class="token punctuation">;</span>  <span class="token comment"># 带斜杠</span>
        <span class="token directive"><span class="token keyword">expires</span> <span class="token number">1y</span></span><span class="token punctuation">;</span>
        <span class="token directive"><span class="token keyword">add_header</span> Cache-Control <span class="token string">&quot;public, no-transform&quot;</span></span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment"># API 代理</span>
    <span class="token directive"><span class="token keyword">location</span> /bjtu/api/</span> <span class="token punctuation">{</span>
        <span class="token directive"><span class="token keyword">proxy_pass</span> http://localhost:5123/</span><span class="token punctuation">;</span>  <span class="token comment"># 带斜杠</span>
        <span class="token directive"><span class="token keyword">proxy_set_header</span> Host <span class="token variable">$host</span></span><span class="token punctuation">;</span>
        <span class="token directive"><span class="token keyword">proxy_set_header</span> X-Real-IP <span class="token variable">$remote_addr</span></span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><h4 id="_3-2-错误的配置-会导致问题" tabindex="-1"><a class="header-anchor" href="#_3-2-错误的配置-会导致问题" aria-hidden="true">#</a> 3.2 错误的配置（会导致问题）</h4><div class="language-nginx" data-ext="nginx"><pre class="language-nginx"><code><span class="token comment"># 错误1：location 不带斜杠</span>
<span class="token directive"><span class="token keyword">location</span> /bjtu</span> <span class="token punctuation">{</span>  <span class="token comment"># 错误</span>
    <span class="token directive"><span class="token keyword">alias</span> /usr/share/nginx/html/</span><span class="token punctuation">;</span>
    <span class="token comment"># 访问 /bjtu/index.html 会变成 /usr/share/nginx/html/bjtu/index.html</span>
<span class="token punctuation">}</span>

<span class="token comment"># 错误2：alias 路径不带斜杠</span>
<span class="token directive"><span class="token keyword">location</span> /bjtu/</span> <span class="token punctuation">{</span>
    <span class="token directive"><span class="token keyword">alias</span> /usr/share/nginx/html</span><span class="token punctuation">;</span>  <span class="token comment"># 错误</span>
    <span class="token comment"># 访问 /bjtu/index.html 会变成 /usr/share/nginx/htmlindex.html</span>
<span class="token punctuation">}</span>

<span class="token comment"># 错误3：root 和 location 都不带斜杠</span>
<span class="token directive"><span class="token keyword">location</span> /bjtu</span> <span class="token punctuation">{</span>  <span class="token comment"># 错误</span>
    <span class="token directive"><span class="token keyword">root</span> /usr/share/nginx/html</span><span class="token punctuation">;</span>  <span class="token comment"># 错误</span>
    <span class="token comment"># 访问 /bjtu/index.html 会变成 /usr/share/nginx/html/bjtu/index.html</span>
<span class="token punctuation">}</span>
</code></pre></div><h3 id="_4-最佳实践建议" tabindex="-1"><a class="header-anchor" href="#_4-最佳实践建议" aria-hidden="true">#</a> 4. 最佳实践建议</h3><ol><li><p><strong>使用 <code>alias</code> 的情况</strong>：</p><ul><li>当 location 路径需要完全替换时</li><li>部署在子路径时</li><li>需要精确控制文件路径时</li></ul></li><li><p><strong>使用 <code>root</code> 的情况</strong>：</p><ul><li>当 location 路径需要保留时</li><li>部署在根路径时</li><li>需要保持目录结构时</li></ul></li><li><p><strong>斜杠使用建议</strong>：</p><ul><li>location 路径：总是带斜杠 <code>/bjtu/</code></li><li>alias 路径：总是带斜杠 <code>/usr/share/nginx/html/</code></li><li>root 路径：可以不带斜杠 <code>/usr/share/nginx/html</code></li></ul></li><li><p><strong>完整的推荐配置</strong>：</p></li></ol><div class="language-nginx" data-ext="nginx"><pre class="language-nginx"><code><span class="token directive"><span class="token keyword">server</span></span> <span class="token punctuation">{</span>
    <span class="token directive"><span class="token keyword">listen</span> <span class="token number">80</span></span><span class="token punctuation">;</span>
    <span class="token directive"><span class="token keyword">server_name</span> your-domain.com</span><span class="token punctuation">;</span>

    <span class="token comment"># 前端应用</span>
    <span class="token directive"><span class="token keyword">location</span> /bjtu/</span> <span class="token punctuation">{</span>
        <span class="token directive"><span class="token keyword">alias</span> /usr/share/nginx/html/</span><span class="token punctuation">;</span>
        <span class="token directive"><span class="token keyword">try_files</span> <span class="token variable">$uri</span> <span class="token variable">$uri</span>/ /bjtu/index.html</span><span class="token punctuation">;</span>
        
        <span class="token comment"># 安全头</span>
        <span class="token directive"><span class="token keyword">add_header</span> X-Frame-Options <span class="token string">&quot;SAMEORIGIN&quot;</span></span><span class="token punctuation">;</span>
        <span class="token directive"><span class="token keyword">add_header</span> X-XSS-Protection <span class="token string">&quot;1; mode=block&quot;</span></span><span class="token punctuation">;</span>
        <span class="token directive"><span class="token keyword">add_header</span> X-Content-Type-Options <span class="token string">&quot;nosniff&quot;</span></span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment"># 静态资源</span>
    <span class="token directive"><span class="token keyword">location</span> /bjtu/assets/</span> <span class="token punctuation">{</span>
        <span class="token directive"><span class="token keyword">alias</span> /usr/share/nginx/html/assets/</span><span class="token punctuation">;</span>
        <span class="token directive"><span class="token keyword">expires</span> <span class="token number">1y</span></span><span class="token punctuation">;</span>
        <span class="token directive"><span class="token keyword">add_header</span> Cache-Control <span class="token string">&quot;public, no-transform&quot;</span></span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment"># API 代理</span>
    <span class="token directive"><span class="token keyword">location</span> /bjtu/api/</span> <span class="token punctuation">{</span>
        <span class="token directive"><span class="token keyword">proxy_pass</span> http://localhost:5123/</span><span class="token punctuation">;</span>
        <span class="token directive"><span class="token keyword">proxy_set_header</span> Host <span class="token variable">$host</span></span><span class="token punctuation">;</span>
        <span class="token directive"><span class="token keyword">proxy_set_header</span> X-Real-IP <span class="token variable">$remote_addr</span></span><span class="token punctuation">;</span>
        <span class="token directive"><span class="token keyword">proxy_set_header</span> X-Forwarded-For <span class="token variable">$proxy_add_x_forwarded_for</span></span><span class="token punctuation">;</span>
        <span class="token directive"><span class="token keyword">proxy_set_header</span> X-Forwarded-Proto <span class="token variable">$scheme</span></span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><p>这样配置可以确保：</p><ol><li>路径正确匹配</li><li>文件正确访问</li><li>路由正常工作</li><li>静态资源正确加载</li><li>API 正确代理</li><li>缓存策略合理</li><li>安全性得到保障</li></ol><h2 id="的情况" tabindex="-1"><a class="header-anchor" href="#的情况" aria-hidden="true">#</a> <code>./</code> 的情况</h2><p><code>base: &#39;./&#39;</code> 是一个特殊的配置，让我详细解释：</p><h3 id="_1-base-的含义" tabindex="-1"><a class="header-anchor" href="#_1-base-的含义" aria-hidden="true">#</a> 1. <code>base: &#39;./&#39;</code> 的含义</h3><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// vite.config.js</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineConfig</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">base</span><span class="token operator">:</span> <span class="token string">&#39;./&#39;</span><span class="token punctuation">,</span>  <span class="token comment">// 使用相对路径</span>
  <span class="token comment">// ... 其他配置</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre></div><p>这种配置的特点：</p><ol><li>使用相对路径加载资源</li><li>所有资源路径都会变成相对于当前 HTML 文件的路径</li><li>适合部署在任意子目录，不需要指定具体路径</li></ol><h3 id="_2-不同-base-配置的对比" tabindex="-1"><a class="header-anchor" href="#_2-不同-base-配置的对比" aria-hidden="true">#</a> 2. 不同 <code>base</code> 配置的对比</h3><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 配置1：绝对路径</span>
<span class="token literal-property property">base</span><span class="token operator">:</span> <span class="token string">&#39;/bjtu/&#39;</span>  
<span class="token comment">// 资源路径：/bjtu/assets/xxx.js</span>
<span class="token comment">// 需要 Nginx 配置 location /bjtu/</span>

<span class="token comment">// 配置2：相对路径</span>
<span class="token literal-property property">base</span><span class="token operator">:</span> <span class="token string">&#39;./&#39;</span>  
<span class="token comment">// 资源路径：./assets/xxx.js</span>
<span class="token comment">// 可以部署在任何目录</span>

<span class="token comment">// 配置3：根路径</span>
<span class="token literal-property property">base</span><span class="token operator">:</span> <span class="token string">&#39;/&#39;</span>  
<span class="token comment">// 资源路径：/assets/xxx.js</span>
<span class="token comment">// 需要部署在根目录</span>
</code></pre></div><h3 id="_3-使用-base-的场景" tabindex="-1"><a class="header-anchor" href="#_3-使用-base-的场景" aria-hidden="true">#</a> 3. 使用 <code>base: &#39;./&#39;</code> 的场景</h3><ol><li><p><strong>静态文件部署</strong>：</p><ul><li>直接打开 HTML 文件</li><li>部署在本地文件系统</li><li>不需要服务器</li></ul></li><li><p><strong>任意子目录部署</strong>：</p><ul><li>可以部署在任何目录</li><li>不需要修改 Nginx 配置</li><li>便于迁移和部署</li></ul></li><li><p><strong>CDN 部署</strong>：</p><ul><li>资源可以部署在不同域名</li><li>支持跨域资源加载</li><li>便于资源分发</li></ul></li></ol><h3 id="_4-实际应用示例" tabindex="-1"><a class="header-anchor" href="#_4-实际应用示例" aria-hidden="true">#</a> 4. 实际应用示例</h3><h4 id="_4-1-开发环境配置" tabindex="-1"><a class="header-anchor" href="#_4-1-开发环境配置" aria-hidden="true">#</a> 4.1 开发环境配置</h4><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// vite.config.js</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineConfig</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">base</span><span class="token operator">:</span> <span class="token string">&#39;./&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">server</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">port</span><span class="token operator">:</span> <span class="token number">5173</span><span class="token punctuation">,</span>
    <span class="token literal-property property">proxy</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token string-property property">&#39;/api&#39;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">target</span><span class="token operator">:</span> <span class="token string">&#39;http://localhost:5123&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">changeOrigin</span><span class="token operator">:</span> <span class="token boolean">true</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre></div><h4 id="_4-2-路由配置" tabindex="-1"><a class="header-anchor" href="#_4-2-路由配置" aria-hidden="true">#</a> 4.2 路由配置</h4><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// router/index.js</span>
<span class="token keyword">const</span> router <span class="token operator">=</span> <span class="token function">createRouter</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token comment">// 注意：使用相对路径时，createWebHistory 也需要使用相对路径</span>
  <span class="token literal-property property">history</span><span class="token operator">:</span> <span class="token function">createWebHistory</span><span class="token punctuation">(</span><span class="token string">&#39;./&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  routes
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre></div><h4 id="_4-3-nginx-配置" tabindex="-1"><a class="header-anchor" href="#_4-3-nginx-配置" aria-hidden="true">#</a> 4.3 Nginx 配置</h4><div class="language-nginx" data-ext="nginx"><pre class="language-nginx"><code><span class="token directive"><span class="token keyword">server</span></span> <span class="token punctuation">{</span>
    <span class="token directive"><span class="token keyword">listen</span> <span class="token number">80</span></span><span class="token punctuation">;</span>
    <span class="token directive"><span class="token keyword">server_name</span> your-domain.com</span><span class="token punctuation">;</span>

    <span class="token comment"># 可以部署在任何目录</span>
    <span class="token directive"><span class="token keyword">location</span> /</span> <span class="token punctuation">{</span>
        <span class="token directive"><span class="token keyword">root</span> /usr/share/nginx/html</span><span class="token punctuation">;</span>
        <span class="token directive"><span class="token keyword">try_files</span> <span class="token variable">$uri</span> <span class="token variable">$uri</span>/ /index.html</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment"># 或者部署在子目录</span>
    <span class="token directive"><span class="token keyword">location</span> /any/path/</span> <span class="token punctuation">{</span>
        <span class="token directive"><span class="token keyword">alias</span> /usr/share/nginx/html/</span><span class="token punctuation">;</span>
        <span class="token directive"><span class="token keyword">try_files</span> <span class="token variable">$uri</span> <span class="token variable">$uri</span>/ /any/path/index.html</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><h4 id="_4-4-构建后的文件结构" tabindex="-1"><a class="header-anchor" href="#_4-4-构建后的文件结构" aria-hidden="true">#</a> 4.4 构建后的文件结构</h4><div class="language-text" data-ext="text"><pre class="language-text"><code>dist/
├── index.html
├── assets/
│   ├── index-abc123.js
│   └── vendor-xyz789.js
└── images/
    └── logo.png
</code></pre></div><h4 id="_4-5-访问方式" tabindex="-1"><a class="header-anchor" href="#_4-5-访问方式" aria-hidden="true">#</a> 4.5 访问方式</h4><ul><li>直接打开：<code>file:///path/to/dist/index.html</code></li><li>本地服务器：<code>http://localhost:8080/index.html</code></li><li>任意子目录：<code>http://your-domain.com/any/path/index.html</code></li></ul><h3 id="_5-优缺点分析" tabindex="-1"><a class="header-anchor" href="#_5-优缺点分析" aria-hidden="true">#</a> 5. 优缺点分析</h3><p>优点：</p><ol><li>部署灵活，可以放在任何目录</li><li>不需要修改服务器配置</li><li>支持直接打开 HTML 文件</li><li>便于本地开发和测试</li><li>适合静态文件部署</li></ol><p>缺点：</p><ol><li>可能影响缓存策略</li><li>某些 CDN 可能不支持相对路径</li><li>需要确保所有资源路径正确</li><li>可能影响 SEO</li><li>某些浏览器安全策略可能限制</li></ol><h3 id="_6-使用建议" tabindex="-1"><a class="header-anchor" href="#_6-使用建议" aria-hidden="true">#</a> 6. 使用建议</h3><ol><li><p><strong>适合使用 <code>base: &#39;./&#39;</code> 的场景</strong>：</p><ul><li>本地开发测试</li><li>静态文件部署</li><li>需要频繁迁移部署</li><li>不需要固定部署路径</li></ul></li><li><p><strong>不适合使用 <code>base: &#39;./&#39;</code> 的场景</strong>：</p><ul><li>需要固定部署路径</li><li>使用 CDN 加速</li><li>需要严格的缓存控制</li><li>需要 SEO 优化</li></ul></li><li><p><strong>最佳实践</strong>：</p></li></ol><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// vite.config.js</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineConfig</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">base</span><span class="token operator">:</span> process<span class="token punctuation">.</span>env<span class="token punctuation">.</span><span class="token constant">NODE_ENV</span> <span class="token operator">===</span> <span class="token string">&#39;production&#39;</span> 
    <span class="token operator">?</span> <span class="token string">&#39;./&#39;</span>  <span class="token comment">// 生产环境使用相对路径</span>
    <span class="token operator">:</span> <span class="token string">&#39;/&#39;</span><span class="token punctuation">,</span>  <span class="token comment">// 开发环境使用绝对路径</span>
  <span class="token comment">// ... 其他配置</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token comment">// router/index.js</span>
<span class="token keyword">const</span> router <span class="token operator">=</span> <span class="token function">createRouter</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">history</span><span class="token operator">:</span> <span class="token function">createWebHistory</span><span class="token punctuation">(</span>process<span class="token punctuation">.</span>env<span class="token punctuation">.</span><span class="token constant">NODE_ENV</span> <span class="token operator">===</span> <span class="token string">&#39;production&#39;</span> <span class="token operator">?</span> <span class="token string">&#39;./&#39;</span> <span class="token operator">:</span> <span class="token string">&#39;/&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  routes
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre></div><ol start="4"><li><strong>注意事项</strong>： <ul><li>确保所有资源路径正确</li><li>测试不同环境下的访问</li><li>考虑缓存策略</li><li>注意浏览器安全策略</li><li>考虑 SEO 影响</li></ul></li></ol><p>总的来说，<code>base: &#39;./&#39;</code> 是一个灵活的配置，适合需要部署灵活性的场景，但也要考虑其优缺点和适用场景。</p><h3 id="两种不一样的方式部署和配置" tabindex="-1"><a class="header-anchor" href="#两种不一样的方式部署和配置" aria-hidden="true">#</a> 两种不一样的方式部署和配置</h3><p>我来详细解释这两种配置的区别和对应的配置方式：</p><h3 id="_1-base-bjtu-配置" tabindex="-1"><a class="header-anchor" href="#_1-base-bjtu-配置" aria-hidden="true">#</a> 1. <code>base: &#39;/bjtu/&#39;</code> 配置</h3><h4 id="_1-1-vite-配置" tabindex="-1"><a class="header-anchor" href="#_1-1-vite-配置" aria-hidden="true">#</a> 1.1 Vite 配置</h4><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// vite.config.js</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineConfig</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">base</span><span class="token operator">:</span> <span class="token string">&#39;/bjtu/&#39;</span><span class="token punctuation">,</span>  <span class="token comment">// 绝对路径</span>
  <span class="token comment">// ... 其他配置</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre></div><h4 id="_1-2-路由配置" tabindex="-1"><a class="header-anchor" href="#_1-2-路由配置" aria-hidden="true">#</a> 1.2 路由配置</h4><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// router/index.js</span>
<span class="token keyword">const</span> router <span class="token operator">=</span> <span class="token function">createRouter</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">history</span><span class="token operator">:</span> <span class="token function">createWebHistory</span><span class="token punctuation">(</span><span class="token string">&#39;/bjtu/&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>  <span class="token comment">// 必须匹配 base 配置</span>
  routes
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre></div><h4 id="_1-3-nginx-配置" tabindex="-1"><a class="header-anchor" href="#_1-3-nginx-配置" aria-hidden="true">#</a> 1.3 Nginx 配置</h4><div class="language-nginx" data-ext="nginx"><pre class="language-nginx"><code><span class="token directive"><span class="token keyword">server</span></span> <span class="token punctuation">{</span>
    <span class="token directive"><span class="token keyword">listen</span> <span class="token number">80</span></span><span class="token punctuation">;</span>
    <span class="token directive"><span class="token keyword">server_name</span> your-domain.com</span><span class="token punctuation">;</span>

    <span class="token comment"># 方式1：使用 alias（推荐）</span>
    <span class="token directive"><span class="token keyword">location</span> /bjtu/</span> <span class="token punctuation">{</span>
        <span class="token directive"><span class="token keyword">alias</span> /usr/share/nginx/html/</span><span class="token punctuation">;</span>
        <span class="token directive"><span class="token keyword">try_files</span> <span class="token variable">$uri</span> <span class="token variable">$uri</span>/ /bjtu/index.html</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment"># 方式2：使用 root</span>
    <span class="token directive"><span class="token keyword">location</span> /bjtu/</span> <span class="token punctuation">{</span>
        <span class="token directive"><span class="token keyword">root</span> /usr/share/nginx/html</span><span class="token punctuation">;</span>
        <span class="token directive"><span class="token keyword">try_files</span> <span class="token variable">$uri</span> <span class="token variable">$uri</span>/ /bjtu/index.html</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><h4 id="_1-4-访问方式" tabindex="-1"><a class="header-anchor" href="#_1-4-访问方式" aria-hidden="true">#</a> 1.4 访问方式</h4><ul><li>首页：<code>http://your-domain.com/bjtu/</code></li><li>子页面：<code>http://your-domain.com/bjtu/topic1Video</code></li><li>静态资源：<code>http://your-domain.com/bjtu/assets/xxx.js</code></li></ul><h4 id="_1-5-原理" tabindex="-1"><a class="header-anchor" href="#_1-5-原理" aria-hidden="true">#</a> 1.5 原理</h4><ol><li><p>绝对路径配置：</p><ul><li>所有资源路径都从域名根目录开始</li><li>需要 Nginx 配置对应的 location</li><li>路由必须匹配这个基础路径</li><li>资源加载路径固定</li></ul></li><li><p>部署特点：</p><ul><li>必须部署在指定路径</li><li>需要服务器配置支持</li><li>路径固定，便于管理</li><li>适合生产环境</li></ul></li></ol><h3 id="_2-base-bjtu-配置" tabindex="-1"><a class="header-anchor" href="#_2-base-bjtu-配置" aria-hidden="true">#</a> 2. <code>base: &#39;./bjtu/&#39;</code> 配置</h3><h4 id="_2-1-vite-配置" tabindex="-1"><a class="header-anchor" href="#_2-1-vite-配置" aria-hidden="true">#</a> 2.1 Vite 配置</h4><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// vite.config.js</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineConfig</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">base</span><span class="token operator">:</span> <span class="token string">&#39;./bjtu/&#39;</span><span class="token punctuation">,</span>  <span class="token comment">// 相对路径</span>
  <span class="token comment">// ... 其他配置</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre></div><h4 id="_2-2-路由配置" tabindex="-1"><a class="header-anchor" href="#_2-2-路由配置" aria-hidden="true">#</a> 2.2 路由配置</h4><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// router/index.js</span>
<span class="token keyword">const</span> router <span class="token operator">=</span> <span class="token function">createRouter</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">history</span><span class="token operator">:</span> <span class="token function">createWebHistory</span><span class="token punctuation">(</span><span class="token string">&#39;./bjtu/&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>  <span class="token comment">// 必须匹配 base 配置</span>
  routes
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre></div><h4 id="_2-3-nginx-配置" tabindex="-1"><a class="header-anchor" href="#_2-3-nginx-配置" aria-hidden="true">#</a> 2.3 Nginx 配置</h4><div class="language-nginx" data-ext="nginx"><pre class="language-nginx"><code><span class="token directive"><span class="token keyword">server</span></span> <span class="token punctuation">{</span>
    <span class="token directive"><span class="token keyword">listen</span> <span class="token number">80</span></span><span class="token punctuation">;</span>
    <span class="token directive"><span class="token keyword">server_name</span> your-domain.com</span><span class="token punctuation">;</span>

    <span class="token comment"># 方式1：部署在根目录</span>
    <span class="token directive"><span class="token keyword">location</span> /</span> <span class="token punctuation">{</span>
        <span class="token directive"><span class="token keyword">root</span> /usr/share/nginx/html</span><span class="token punctuation">;</span>
        <span class="token directive"><span class="token keyword">try_files</span> <span class="token variable">$uri</span> <span class="token variable">$uri</span>/ /index.html</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment"># 方式2：部署在任意子目录</span>
    <span class="token directive"><span class="token keyword">location</span> /any/path/</span> <span class="token punctuation">{</span>
        <span class="token directive"><span class="token keyword">alias</span> /usr/share/nginx/html/</span><span class="token punctuation">;</span>
        <span class="token directive"><span class="token keyword">try_files</span> <span class="token variable">$uri</span> <span class="token variable">$uri</span>/ /any/path/index.html</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><h4 id="_2-4-访问方式" tabindex="-1"><a class="header-anchor" href="#_2-4-访问方式" aria-hidden="true">#</a> 2.4 访问方式</h4><ul><li>直接打开：<code>file:///path/to/dist/bjtu/index.html</code></li><li>本地服务器：<code>http://localhost:8080/bjtu/index.html</code></li><li>任意子目录：<code>http://your-domain.com/any/path/bjtu/index.html</code></li></ul><h4 id="_2-5-原理" tabindex="-1"><a class="header-anchor" href="#_2-5-原理" aria-hidden="true">#</a> 2.5 原理</h4><ol><li><p>相对路径配置：</p><ul><li>资源路径相对于 HTML 文件位置</li><li>不依赖服务器配置</li><li>可以部署在任何目录</li><li>资源加载路径动态</li></ul></li><li><p>部署特点：</p><ul><li>可以部署在任意目录</li><li>不需要特定服务器配置</li><li>路径灵活，便于迁移</li><li>适合开发环境</li></ul></li></ol><h3 id="_3-两种配置的对比" tabindex="-1"><a class="header-anchor" href="#_3-两种配置的对比" aria-hidden="true">#</a> 3. 两种配置的对比</h3><h4 id="_3-1-路径处理" tabindex="-1"><a class="header-anchor" href="#_3-1-路径处理" aria-hidden="true">#</a> 3.1 路径处理</h4><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 绝对路径 /bjtu/</span>
<span class="token operator">-</span> 资源路径：<span class="token operator">/</span>bjtu<span class="token operator">/</span>assets<span class="token operator">/</span>xxx<span class="token punctuation">.</span>js
<span class="token operator">-</span> 路由路径：<span class="token operator">/</span>bjtu<span class="token operator">/</span>topic1Video
<span class="token operator">-</span> 需要服务器配置

<span class="token comment">// 相对路径 ./bjtu/</span>
<span class="token operator">-</span> 资源路径：<span class="token punctuation">.</span><span class="token operator">/</span>bjtu<span class="token operator">/</span>assets<span class="token operator">/</span>xxx<span class="token punctuation">.</span>js
<span class="token operator">-</span> 路由路径：<span class="token punctuation">.</span><span class="token operator">/</span>bjtu<span class="token operator">/</span>topic1Video
<span class="token operator">-</span> 不需要服务器配置
</code></pre></div><h4 id="_3-2-部署方式" tabindex="-1"><a class="header-anchor" href="#_3-2-部署方式" aria-hidden="true">#</a> 3.2 部署方式</h4><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 绝对路径部署</span>
/usr/share/nginx/html/
├── index.html
├── assets/
│   └── xxx.js
└── bjtu/
    └── index.html

<span class="token comment"># 相对路径部署</span>
/usr/share/nginx/html/
├── bjtu/
│   ├── index.html
│   └── assets/
│       └── xxx.js
└── any/
    └── bjtu/
        ├── index.html
        └── assets/
            └── xxx.js
</code></pre></div><h4 id="_3-3-使用场景" tabindex="-1"><a class="header-anchor" href="#_3-3-使用场景" aria-hidden="true">#</a> 3.3 使用场景</h4><ol><li><p><strong>绝对路径 <code>/bjtu/</code> 适合</strong>：</p><ul><li>生产环境部署</li><li>固定部署路径</li><li>需要 CDN 加速</li><li>需要严格的缓存控制</li><li>需要 SEO 优化</li></ul></li><li><p><strong>相对路径 <code>./bjtu/</code> 适合</strong>：</p><ul><li>开发环境测试</li><li>静态文件部署</li><li>需要频繁迁移</li><li>本地文件访问</li><li>多环境部署</li></ul></li></ol><h3 id="_4-最佳实践建议-1" tabindex="-1"><a class="header-anchor" href="#_4-最佳实践建议-1" aria-hidden="true">#</a> 4. 最佳实践建议</h3><ol><li><strong>开发环境配置</strong>：</li></ol><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// vite.config.js</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineConfig</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">base</span><span class="token operator">:</span> process<span class="token punctuation">.</span>env<span class="token punctuation">.</span><span class="token constant">NODE_ENV</span> <span class="token operator">===</span> <span class="token string">&#39;development&#39;</span> 
    <span class="token operator">?</span> <span class="token string">&#39;./bjtu/&#39;</span>  <span class="token comment">// 开发环境使用相对路径</span>
    <span class="token operator">:</span> <span class="token string">&#39;/bjtu/&#39;</span><span class="token punctuation">,</span>  <span class="token comment">// 生产环境使用绝对路径</span>
  <span class="token comment">// ... 其他配置</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token comment">// router/index.js</span>
<span class="token keyword">const</span> router <span class="token operator">=</span> <span class="token function">createRouter</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">history</span><span class="token operator">:</span> <span class="token function">createWebHistory</span><span class="token punctuation">(</span>
    process<span class="token punctuation">.</span>env<span class="token punctuation">.</span><span class="token constant">NODE_ENV</span> <span class="token operator">===</span> <span class="token string">&#39;development&#39;</span> 
      <span class="token operator">?</span> <span class="token string">&#39;./bjtu/&#39;</span> 
      <span class="token operator">:</span> <span class="token string">&#39;/bjtu/&#39;</span>
  <span class="token punctuation">)</span><span class="token punctuation">,</span>
  routes
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre></div><ol start="2"><li><strong>生产环境 Nginx 配置</strong>：</li></ol><div class="language-nginx" data-ext="nginx"><pre class="language-nginx"><code><span class="token directive"><span class="token keyword">server</span></span> <span class="token punctuation">{</span>
    <span class="token directive"><span class="token keyword">listen</span> <span class="token number">80</span></span><span class="token punctuation">;</span>
    <span class="token directive"><span class="token keyword">server_name</span> your-domain.com</span><span class="token punctuation">;</span>

    <span class="token comment"># 使用绝对路径配置</span>
    <span class="token directive"><span class="token keyword">location</span> /bjtu/</span> <span class="token punctuation">{</span>
        <span class="token directive"><span class="token keyword">alias</span> /usr/share/nginx/html/</span><span class="token punctuation">;</span>
        <span class="token directive"><span class="token keyword">try_files</span> <span class="token variable">$uri</span> <span class="token variable">$uri</span>/ /bjtu/index.html</span><span class="token punctuation">;</span>
        
        <span class="token comment"># 缓存控制</span>
        <span class="token directive"><span class="token keyword">location</span> ~* \\.(js|css|png|jpg|jpeg|gif|ico|svg)$</span> <span class="token punctuation">{</span>
            <span class="token directive"><span class="token keyword">expires</span> <span class="token number">1y</span></span><span class="token punctuation">;</span>
            <span class="token directive"><span class="token keyword">add_header</span> Cache-Control <span class="token string">&quot;public, no-transform&quot;</span></span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token comment"># API 代理</span>
    <span class="token directive"><span class="token keyword">location</span> /bjtu/api/</span> <span class="token punctuation">{</span>
        <span class="token directive"><span class="token keyword">proxy_pass</span> http://localhost:5123/</span><span class="token punctuation">;</span>
        <span class="token directive"><span class="token keyword">proxy_set_header</span> Host <span class="token variable">$host</span></span><span class="token punctuation">;</span>
        <span class="token directive"><span class="token keyword">proxy_set_header</span> X-Real-IP <span class="token variable">$remote_addr</span></span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><ol start="3"><li><strong>构建和部署脚本</strong>：</li></ol><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token shebang important">#!/bin/bash</span>

<span class="token comment"># 构建</span>
<span class="token function">npm</span> run build

<span class="token comment"># 生产环境部署（绝对路径）</span>
<span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token string">&quot;<span class="token variable">$ENV</span>&quot;</span> <span class="token operator">=</span> <span class="token string">&quot;production&quot;</span> <span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token keyword">then</span>
    <span class="token function">cp</span> <span class="token parameter variable">-r</span> dist/* /usr/share/nginx/html/
    <span class="token comment"># 确保 bjtu 目录存在</span>
    <span class="token function">mkdir</span> <span class="token parameter variable">-p</span> /usr/share/nginx/html/bjtu
    <span class="token comment"># 移动文件到 bjtu 目录</span>
    <span class="token function">mv</span> /usr/share/nginx/html/index.html /usr/share/nginx/html/bjtu/
    <span class="token function">mv</span> /usr/share/nginx/html/assets /usr/share/nginx/html/bjtu/
<span class="token keyword">fi</span>

<span class="token comment"># 开发环境部署（相对路径）</span>
<span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token string">&quot;<span class="token variable">$ENV</span>&quot;</span> <span class="token operator">=</span> <span class="token string">&quot;development&quot;</span> <span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token keyword">then</span>
    <span class="token function">cp</span> <span class="token parameter variable">-r</span> dist/* /usr/share/nginx/html/bjtu/
<span class="token keyword">fi</span>
</code></pre></div><ol start="4"><li><strong>注意事项</strong>： <ul><li>确保路径配置一致性</li><li>测试不同环境下的访问</li><li>考虑缓存策略</li><li>注意资源加载顺序</li><li>考虑浏览器兼容性</li></ul></li></ol><p>这样配置可以确保：</p><ol><li>开发环境灵活部署</li><li>生产环境稳定运行</li><li>资源正确加载</li><li>路由正常工作</li><li>缓存策略合理</li><li>部署过程可控</li></ol>`,180)]))}const i=s(p,[["render",o],["__file","vueNginx.html.vue"]]);export{i as default};
