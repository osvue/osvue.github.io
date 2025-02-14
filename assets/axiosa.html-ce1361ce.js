import{_ as o,M as e,p as c,q as l,R as n,t as a,N as t,a1 as p}from"./framework-d81ad7e5.js";const u={},r=n("blockquote",null,[n("p",null,"Axios 是一个基于 promise 的 HTTP 库，可以用在浏览器和 node.js 中。")],-1),i=n("h2",{id:"features",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#features","aria-hidden":"true"},"#"),a(" Features")],-1),k={href:"https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest",target:"_blank",rel:"noopener noreferrer"},d={href:"http://nodejs.org/api/http.html",target:"_blank",rel:"noopener noreferrer"},h={href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise",target:"_blank",rel:"noopener noreferrer"},m=n("li",null,"拦截请求和响应",-1),g=n("li",null,"转换请求数据和响应数据",-1),f=n("li",null,"取消请求",-1),x=n("li",null,"自动转换 JSON 数据",-1),y={href:"http://en.wikipedia.org/wiki/Cross-site_request_forgery",target:"_blank",rel:"noopener noreferrer"},v=p(`<h2 id="安装" tabindex="-1"><a class="header-anchor" href="#安装" aria-hidden="true">#</a> 安装</h2><p>使用 npm:</p><div class="language-text" data-ext="text"><pre class="language-text"><code>$ npm install axios
</code></pre></div><p>使用 bower:</p><div class="language-text" data-ext="text"><pre class="language-text"><code>$ bower install axios
</code></pre></div><p>使用 cdn:</p><div class="language-text" data-ext="text"><pre class="language-text"><code>&lt;script src=&quot;https://unpkg.com/axios/dist/axios.min.js&quot;&gt;&lt;/script&gt;
</code></pre></div><h2 id="example" tabindex="-1"><a class="header-anchor" href="#example" aria-hidden="true">#</a> Example</h2><p>执行 <code>GET</code> 请求</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 为给定 ID 的 user 创建请求</span>
axios<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">&#39;/user?ID=12345&#39;</span><span class="token punctuation">)</span>
  <span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">response</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>response<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token punctuation">.</span><span class="token function">catch</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">error</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>error<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 可选地，上面的请求可以这样做</span>
axios<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">&#39;/user&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">params</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token constant">ID</span><span class="token operator">:</span> <span class="token number">12345</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">response</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>response<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token punctuation">.</span><span class="token function">catch</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">error</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>error<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><p>执行 <code>POST</code> 请求</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code>axios<span class="token punctuation">.</span><span class="token function">post</span><span class="token punctuation">(</span><span class="token string">&#39;/user&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">firstName</span><span class="token operator">:</span> <span class="token string">&#39;Fred&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">lastName</span><span class="token operator">:</span> <span class="token string">&#39;Flintstone&#39;</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">response</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>response<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token punctuation">.</span><span class="token function">catch</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">error</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>error<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><p>执行多个并发请求</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">getUserAccount</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> axios<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">&#39;/user/12345&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token function">getUserPermissions</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> axios<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">&#39;/user/12345/permissions&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

axios<span class="token punctuation">.</span><span class="token function">all</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token function">getUserAccount</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token function">getUserPermissions</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
  <span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span>axios<span class="token punctuation">.</span><span class="token function">spread</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">acct<span class="token punctuation">,</span> perms</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 两个请求现在都执行完成</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><h2 id="axios-api" tabindex="-1"><a class="header-anchor" href="#axios-api" aria-hidden="true">#</a> axios API</h2><p>可以通过向 <code>axios</code> 传递相关配置来创建请求</p><h5 id="axios-config" tabindex="-1"><a class="header-anchor" href="#axios-config" aria-hidden="true">#</a> axios(config)</h5><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 发送 POST 请求</span>
<span class="token function">axios</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">method</span><span class="token operator">:</span> <span class="token string">&#39;post&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">url</span><span class="token operator">:</span> <span class="token string">&#39;/user/12345&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">data</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">firstName</span><span class="token operator">:</span> <span class="token string">&#39;Fred&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">lastName</span><span class="token operator">:</span> <span class="token string">&#39;Flintstone&#39;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><h5 id="axios-url-config" tabindex="-1"><a class="header-anchor" href="#axios-url-config" aria-hidden="true">#</a> axios(url[, config])</h5><div class="language-text" data-ext="text"><pre class="language-text"><code>// 发送 GET 请求（默认的方法）
axios(&#39;/user/12345&#39;);
</code></pre></div><h3 id="请求方法的别名" tabindex="-1"><a class="header-anchor" href="#请求方法的别名" aria-hidden="true">#</a> 请求方法的别名</h3><p>为方便起见，为所有支持的请求方法提供了别名</p><h5 id="axios-request-config" tabindex="-1"><a class="header-anchor" href="#axios-request-config" aria-hidden="true">#</a> axios.request(config)</h5><h5 id="axios-get-url-config" tabindex="-1"><a class="header-anchor" href="#axios-get-url-config" aria-hidden="true">#</a> axios.get(url[, config])</h5><h5 id="axios-delete-url-config" tabindex="-1"><a class="header-anchor" href="#axios-delete-url-config" aria-hidden="true">#</a> axios.delete(url[, config])</h5><h5 id="axios-head-url-config" tabindex="-1"><a class="header-anchor" href="#axios-head-url-config" aria-hidden="true">#</a> axios.head(url[, config])</h5><h5 id="axios-post-url-data-config" tabindex="-1"><a class="header-anchor" href="#axios-post-url-data-config" aria-hidden="true">#</a> axios.post(url[, data[, config]])</h5><h5 id="axios-put-url-data-config" tabindex="-1"><a class="header-anchor" href="#axios-put-url-data-config" aria-hidden="true">#</a> axios.put(url[, data[, config]])</h5><h5 id="axios-patch-url-data-config" tabindex="-1"><a class="header-anchor" href="#axios-patch-url-data-config" aria-hidden="true">#</a> axios.patch(url[, data[, config]])</h5><h6 id="note" tabindex="-1"><a class="header-anchor" href="#note" aria-hidden="true">#</a> NOTE</h6><p>在使用别名方法时， <code>url</code>、<code>method</code>、<code>data</code> 这些属性都不必在配置中指定。</p><h3 id="并发" tabindex="-1"><a class="header-anchor" href="#并发" aria-hidden="true">#</a> 并发</h3><p>处理并发请求的助手函数</p><h5 id="axios-all-iterable" tabindex="-1"><a class="header-anchor" href="#axios-all-iterable" aria-hidden="true">#</a> axios.all(iterable)</h5><h5 id="axios-spread-callback" tabindex="-1"><a class="header-anchor" href="#axios-spread-callback" aria-hidden="true">#</a> axios.spread(callback)</h5><h3 id="创建实例" tabindex="-1"><a class="header-anchor" href="#创建实例" aria-hidden="true">#</a> 创建实例</h3><p>可以使用自定义配置新建一个 axios 实例</p><h5 id="axios-create-config" tabindex="-1"><a class="header-anchor" href="#axios-create-config" aria-hidden="true">#</a> axios.create([config])</h5><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">var</span> instance <span class="token operator">=</span> axios<span class="token punctuation">.</span><span class="token function">create</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">baseURL</span><span class="token operator">:</span> <span class="token string">&#39;https://some-domain.com/api/&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">timeout</span><span class="token operator">:</span> <span class="token number">1000</span><span class="token punctuation">,</span>
  <span class="token literal-property property">headers</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token string-property property">&#39;X-Custom-Header&#39;</span><span class="token operator">:</span> <span class="token string">&#39;foobar&#39;</span><span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><h3 id="实例方法" tabindex="-1"><a class="header-anchor" href="#实例方法" aria-hidden="true">#</a> 实例方法</h3><p>以下是可用的实例方法。指定的配置将与实例的配置合并</p><h5 id="axios-request-config-1" tabindex="-1"><a class="header-anchor" href="#axios-request-config-1" aria-hidden="true">#</a> axios#request(config)</h5><h5 id="axios-get-url-config-1" tabindex="-1"><a class="header-anchor" href="#axios-get-url-config-1" aria-hidden="true">#</a> axios#get(url[, config])</h5><h5 id="axios-delete-url-config-1" tabindex="-1"><a class="header-anchor" href="#axios-delete-url-config-1" aria-hidden="true">#</a> axios#delete(url[, config])</h5><h5 id="axios-head-url-config-1" tabindex="-1"><a class="header-anchor" href="#axios-head-url-config-1" aria-hidden="true">#</a> axios#head(url[, config])</h5><h5 id="axios-post-url-data-config-1" tabindex="-1"><a class="header-anchor" href="#axios-post-url-data-config-1" aria-hidden="true">#</a> axios#post(url[, data[, config]])</h5><h5 id="axios-put-url-data-config-1" tabindex="-1"><a class="header-anchor" href="#axios-put-url-data-config-1" aria-hidden="true">#</a> axios#put(url[, data[, config]])</h5><h5 id="axios-patch-url-data-config-1" tabindex="-1"><a class="header-anchor" href="#axios-patch-url-data-config-1" aria-hidden="true">#</a> axios#patch(url[, data[, config]])</h5><h2 id="请求配置" tabindex="-1"><a class="header-anchor" href="#请求配置" aria-hidden="true">#</a> 请求配置</h2><p>这些是创建请求时可以用的配置选项。只有 <code>url</code> 是必需的。如果没有指定 <code>method</code>，请求将默认使用 <code>get</code> 方法。</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token punctuation">{</span>
  <span class="token comment">// \`url\` 是用于请求的服务器 URL</span>
  <span class="token literal-property property">url</span><span class="token operator">:</span> <span class="token string">&#39;/user&#39;</span><span class="token punctuation">,</span>

  <span class="token comment">// \`method\` 是创建请求时使用的方法</span>
  <span class="token literal-property property">method</span><span class="token operator">:</span> <span class="token string">&#39;get&#39;</span><span class="token punctuation">,</span> <span class="token comment">// 默认是 get</span>

  <span class="token comment">// \`baseURL\` 将自动加在 \`url\` 前面，除非 \`url\` 是一个绝对 URL。</span>
  <span class="token comment">// 它可以通过设置一个 \`baseURL\` 便于为 axios 实例的方法传递相对 URL</span>
  <span class="token literal-property property">baseURL</span><span class="token operator">:</span> <span class="token string">&#39;https://some-domain.com/api/&#39;</span><span class="token punctuation">,</span>

  <span class="token comment">// \`transformRequest\` 允许在向服务器发送前，修改请求数据</span>
  <span class="token comment">// 只能用在 &#39;PUT&#39;, &#39;POST&#39; 和 &#39;PATCH&#39; 这几个请求方法</span>
  <span class="token comment">// 后面数组中的函数必须返回一个字符串，或 ArrayBuffer，或 Stream</span>
  <span class="token literal-property property">transformRequest</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">data</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 对 data 进行任意转换处理</span>

    <span class="token keyword">return</span> data<span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">]</span><span class="token punctuation">,</span>

  <span class="token comment">// \`transformResponse\` 在传递给 then/catch 前，允许修改响应数据</span>
  <span class="token literal-property property">transformResponse</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">data</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 对 data 进行任意转换处理</span>

    <span class="token keyword">return</span> data<span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">]</span><span class="token punctuation">,</span>

  <span class="token comment">// \`headers\` 是即将被发送的自定义请求头</span>
  <span class="token literal-property property">headers</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token string-property property">&#39;X-Requested-With&#39;</span><span class="token operator">:</span> <span class="token string">&#39;XMLHttpRequest&#39;</span><span class="token punctuation">}</span><span class="token punctuation">,</span>

  <span class="token comment">// \`params\` 是即将与请求一起发送的 URL 参数</span>
  <span class="token comment">// 必须是一个无格式对象(plain object)或 URLSearchParams 对象</span>
  <span class="token literal-property property">params</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token constant">ID</span><span class="token operator">:</span> <span class="token number">12345</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>

  <span class="token comment">// \`paramsSerializer\` 是一个负责 \`params\` 序列化的函数</span>
  <span class="token comment">// (e.g. https://www.npmjs.com/package/qs, http://api.jquery.com/jquery.param/)</span>
  <span class="token function-variable function">paramsSerializer</span><span class="token operator">:</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">params</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> Qs<span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span>params<span class="token punctuation">,</span> <span class="token punctuation">{</span><span class="token literal-property property">arrayFormat</span><span class="token operator">:</span> <span class="token string">&#39;brackets&#39;</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>

  <span class="token comment">// \`data\` 是作为请求主体被发送的数据</span>
  <span class="token comment">// 只适用于这些请求方法 &#39;PUT&#39;, &#39;POST&#39;, 和 &#39;PATCH&#39;</span>
  <span class="token comment">// 在没有设置 \`transformRequest\` 时，必须是以下类型之一：</span>
  <span class="token comment">// - string, plain object, ArrayBuffer, ArrayBufferView, URLSearchParams</span>
  <span class="token comment">// - 浏览器专属：FormData, File, Blob</span>
  <span class="token comment">// - Node 专属： Stream</span>
  <span class="token literal-property property">data</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">firstName</span><span class="token operator">:</span> <span class="token string">&#39;Fred&#39;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>

  <span class="token comment">// \`timeout\` 指定请求超时的毫秒数(0 表示无超时时间)</span>
  <span class="token comment">// 如果请求话费了超过 \`timeout\` 的时间，请求将被中断</span>
  <span class="token literal-property property">timeout</span><span class="token operator">:</span> <span class="token number">1000</span><span class="token punctuation">,</span>

  <span class="token comment">// \`withCredentials\` 表示跨域请求时是否需要使用凭证</span>
  <span class="token literal-property property">withCredentials</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span> <span class="token comment">// 默认的</span>

  <span class="token comment">// \`adapter\` 允许自定义处理请求，以使测试更轻松</span>
  <span class="token comment">// 返回一个 promise 并应用一个有效的响应 (查阅 [response docs](#response-api)).</span>
  <span class="token function-variable function">adapter</span><span class="token operator">:</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">config</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">/* ... */</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>

  <span class="token comment">// \`auth\` 表示应该使用 HTTP 基础验证，并提供凭据</span>
  <span class="token comment">// 这将设置一个 \`Authorization\` 头，覆写掉现有的任意使用 \`headers\` 设置的自定义 \`Authorization\`头</span>
  <span class="token literal-property property">auth</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">username</span><span class="token operator">:</span> <span class="token string">&#39;janedoe&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">password</span><span class="token operator">:</span> <span class="token string">&#39;s00pers3cret&#39;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>

  <span class="token comment">// \`responseType\` 表示服务器响应的数据类型，可以是 &#39;arraybuffer&#39;, &#39;blob&#39;, &#39;document&#39;, &#39;json&#39;, &#39;text&#39;, &#39;stream&#39;</span>
  <span class="token literal-property property">responseType</span><span class="token operator">:</span> <span class="token string">&#39;json&#39;</span><span class="token punctuation">,</span> <span class="token comment">// 默认的</span>

  <span class="token comment">// \`xsrfCookieName\` 是用作 xsrf token 的值的cookie的名称</span>
  <span class="token literal-property property">xsrfCookieName</span><span class="token operator">:</span> <span class="token string">&#39;XSRF-TOKEN&#39;</span><span class="token punctuation">,</span> <span class="token comment">// default</span>

  <span class="token comment">// \`xsrfHeaderName\` 是承载 xsrf token 的值的 HTTP 头的名称</span>
  <span class="token literal-property property">xsrfHeaderName</span><span class="token operator">:</span> <span class="token string">&#39;X-XSRF-TOKEN&#39;</span><span class="token punctuation">,</span> <span class="token comment">// 默认的</span>

  <span class="token comment">// \`onUploadProgress\` 允许为上传处理进度事件</span>
  <span class="token function-variable function">onUploadProgress</span><span class="token operator">:</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">progressEvent</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 对原生进度事件的处理</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>

  <span class="token comment">// \`onDownloadProgress\` 允许为下载处理进度事件</span>
  <span class="token function-variable function">onDownloadProgress</span><span class="token operator">:</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">progressEvent</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 对原生进度事件的处理</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>

  <span class="token comment">// \`maxContentLength\` 定义允许的响应内容的最大尺寸</span>
  <span class="token literal-property property">maxContentLength</span><span class="token operator">:</span> <span class="token number">2000</span><span class="token punctuation">,</span>

  <span class="token comment">// \`validateStatus\` 定义对于给定的HTTP 响应状态码是 resolve 或 reject  promise 。如果 \`validateStatus\` 返回 \`true\` (或者设置为 \`null\` 或 \`undefined\`)，promise 将被 resolve; 否则，promise 将被 rejecte</span>
  <span class="token function-variable function">validateStatus</span><span class="token operator">:</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">status</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> status <span class="token operator">&gt;=</span> <span class="token number">200</span> <span class="token operator">&amp;&amp;</span> status <span class="token operator">&lt;</span> <span class="token number">300</span><span class="token punctuation">;</span> <span class="token comment">// 默认的</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>

  <span class="token comment">// \`maxRedirects\` 定义在 node.js 中 follow 的最大重定向数目</span>
  <span class="token comment">// 如果设置为0，将不会 follow 任何重定向</span>
  <span class="token literal-property property">maxRedirects</span><span class="token operator">:</span> <span class="token number">5</span><span class="token punctuation">,</span> <span class="token comment">// 默认的</span>

  <span class="token comment">// \`httpAgent\` 和 \`httpsAgent\` 分别在 node.js 中用于定义在执行 http 和 https 时使用的自定义代理。允许像这样配置选项：</span>
  <span class="token comment">// \`keepAlive\` 默认没有启用</span>
  <span class="token literal-property property">httpAgent</span><span class="token operator">:</span> <span class="token keyword">new</span> <span class="token class-name">http<span class="token punctuation">.</span>Agent</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">keepAlive</span><span class="token operator">:</span> <span class="token boolean">true</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token literal-property property">httpsAgent</span><span class="token operator">:</span> <span class="token keyword">new</span> <span class="token class-name">https<span class="token punctuation">.</span>Agent</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">keepAlive</span><span class="token operator">:</span> <span class="token boolean">true</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>

  <span class="token comment">// &#39;proxy&#39; 定义代理服务器的主机名称和端口</span>
  <span class="token comment">// \`auth\` 表示 HTTP 基础验证应当用于连接代理，并提供凭据</span>
  <span class="token comment">// 这将会设置一个 \`Proxy-Authorization\` 头，覆写掉已有的通过使用 \`header\` 设置的自定义 \`Proxy-Authorization\` 头。</span>
  <span class="token literal-property property">proxy</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">host</span><span class="token operator">:</span> <span class="token string">&#39;127.0.0.1&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">port</span><span class="token operator">:</span> <span class="token number">9000</span><span class="token punctuation">,</span>
    <span class="token literal-property property">auth</span><span class="token operator">:</span> <span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">username</span><span class="token operator">:</span> <span class="token string">&#39;mikeymike&#39;</span><span class="token punctuation">,</span>
      <span class="token literal-property property">password</span><span class="token operator">:</span> <span class="token string">&#39;rapunz3l&#39;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>

  <span class="token comment">// \`cancelToken\` 指定用于取消请求的 cancel token</span>
  <span class="token comment">// （查看后面的 Cancellation 这节了解更多）</span>
  <span class="token literal-property property">cancelToken</span><span class="token operator">:</span> <span class="token keyword">new</span> <span class="token class-name">CancelToken</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">cancel</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre></div><h2 id="响应结构" tabindex="-1"><a class="header-anchor" href="#响应结构" aria-hidden="true">#</a> 响应结构</h2><p>某个请求的响应包含以下信息</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token punctuation">{</span>
  <span class="token comment">// \`data\` 由服务器提供的响应</span>
  <span class="token literal-property property">data</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>

  <span class="token comment">// \`status\` 来自服务器响应的 HTTP 状态码</span>
  <span class="token literal-property property">status</span><span class="token operator">:</span> <span class="token number">200</span><span class="token punctuation">,</span>

  <span class="token comment">// \`statusText\` 来自服务器响应的 HTTP 状态信息</span>
  <span class="token literal-property property">statusText</span><span class="token operator">:</span> <span class="token string">&#39;OK&#39;</span><span class="token punctuation">,</span>

  <span class="token comment">// \`headers\` 服务器响应的头</span>
  <span class="token literal-property property">headers</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>

  <span class="token comment">// \`config\` 是为请求提供的配置信息</span>
  <span class="token literal-property property">config</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><p>使用 <code>then</code> 时，你将接收下面这样的响应：</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code>axios<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">&#39;/user/12345&#39;</span><span class="token punctuation">)</span>
  <span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">response</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>response<span class="token punctuation">.</span>data<span class="token punctuation">)</span><span class="token punctuation">;</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>response<span class="token punctuation">.</span>status<span class="token punctuation">)</span><span class="token punctuation">;</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>response<span class="token punctuation">.</span>statusText<span class="token punctuation">)</span><span class="token punctuation">;</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>response<span class="token punctuation">.</span>headers<span class="token punctuation">)</span><span class="token punctuation">;</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>response<span class="token punctuation">.</span>config<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div>`,56),b=n("code",null,"catch",-1),w={href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/then",target:"_blank",rel:"noopener noreferrer"},j=n("code",null,"then",-1),_=n("code",null,"error",-1),T={href:"https://www.kancloud.cn/yunye/axios/234845#handling-errors",target:"_blank",rel:"noopener noreferrer"},P=p(`<h2 id="配置的默认值-defaults" tabindex="-1"><a class="header-anchor" href="#配置的默认值-defaults" aria-hidden="true">#</a> 配置的默认值/defaults</h2><p>你可以指定将被用在各个请求的配置默认值</p><h3 id="全局的-axios-默认值" tabindex="-1"><a class="header-anchor" href="#全局的-axios-默认值" aria-hidden="true">#</a> 全局的 axios 默认值</h3><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code>axios<span class="token punctuation">.</span>defaults<span class="token punctuation">.</span>baseURL <span class="token operator">=</span> <span class="token string">&#39;https://api.example.com&#39;</span><span class="token punctuation">;</span>
axios<span class="token punctuation">.</span>defaults<span class="token punctuation">.</span>headers<span class="token punctuation">.</span>common<span class="token punctuation">[</span><span class="token string">&#39;Authorization&#39;</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token constant">AUTH_TOKEN</span><span class="token punctuation">;</span>
axios<span class="token punctuation">.</span>defaults<span class="token punctuation">.</span>headers<span class="token punctuation">.</span>post<span class="token punctuation">[</span><span class="token string">&#39;Content-Type&#39;</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">&#39;application/x-www-form-urlencoded&#39;</span><span class="token punctuation">;</span>
</code></pre></div><h3 id="自定义实例默认值" tabindex="-1"><a class="header-anchor" href="#自定义实例默认值" aria-hidden="true">#</a> 自定义实例默认值</h3><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 创建实例时设置配置的默认值</span>
<span class="token keyword">var</span> instance <span class="token operator">=</span> axios<span class="token punctuation">.</span><span class="token function">create</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">baseURL</span><span class="token operator">:</span> <span class="token string">&#39;https://api.example.com&#39;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 在实例已创建后修改默认值</span>
instance<span class="token punctuation">.</span>defaults<span class="token punctuation">.</span>headers<span class="token punctuation">.</span>common<span class="token punctuation">[</span><span class="token string">&#39;Authorization&#39;</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token constant">AUTH_TOKEN</span><span class="token punctuation">;</span>
</code></pre></div><h3 id="配置的优先顺序" tabindex="-1"><a class="header-anchor" href="#配置的优先顺序" aria-hidden="true">#</a> 配置的优先顺序</h3><p>配置会以一个优先顺序进行合并。这个顺序是：在 <code>lib/defaults.js</code> 找到的库的默认值，然后是实例的 <code>defaults</code> 属性，最后是请求的 <code>config</code> 参数。后者将优先于前者。这里是一个例子：</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 使用由库提供的配置的默认值来创建实例</span>
<span class="token comment">// 此时超时配置的默认值是 \`0\`</span>
<span class="token keyword">var</span> instance <span class="token operator">=</span> axios<span class="token punctuation">.</span><span class="token function">create</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 覆写库的超时默认值</span>
<span class="token comment">// 现在，在超时前，所有请求都会等待 2.5 秒</span>
instance<span class="token punctuation">.</span>defaults<span class="token punctuation">.</span>timeout <span class="token operator">=</span> <span class="token number">2500</span><span class="token punctuation">;</span>

<span class="token comment">// 为已知需要花费很长时间的请求覆写超时设置</span>
instance<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">&#39;/longRequest&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">timeout</span><span class="token operator">:</span> <span class="token number">5000</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><h2 id="拦截器" tabindex="-1"><a class="header-anchor" href="#拦截器" aria-hidden="true">#</a> 拦截器</h2><p>在请求或响应被 <code>then</code> 或 <code>catch</code> 处理前拦截它们。</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 添加请求拦截器</span>
axios<span class="token punctuation">.</span>interceptors<span class="token punctuation">.</span>request<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">config</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 在发送请求之前做些什么</span>
    <span class="token keyword">return</span> config<span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">error</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 对请求错误做些什么</span>
    <span class="token keyword">return</span> Promise<span class="token punctuation">.</span><span class="token function">reject</span><span class="token punctuation">(</span>error<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 添加响应拦截器</span>
axios<span class="token punctuation">.</span>interceptors<span class="token punctuation">.</span>response<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">response</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 对响应数据做点什么</span>
    <span class="token keyword">return</span> response<span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">error</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 对响应错误做点什么</span>
    <span class="token keyword">return</span> Promise<span class="token punctuation">.</span><span class="token function">reject</span><span class="token punctuation">(</span>error<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><p>如果你想在稍后移除拦截器，可以这样：</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">var</span> myInterceptor <span class="token operator">=</span> axios<span class="token punctuation">.</span>interceptors<span class="token punctuation">.</span>request<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token comment">/*...*/</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
axios<span class="token punctuation">.</span>interceptors<span class="token punctuation">.</span>request<span class="token punctuation">.</span><span class="token function">eject</span><span class="token punctuation">(</span>myInterceptor<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><p>可以为自定义 axios 实例添加拦截器</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">var</span> instance <span class="token operator">=</span> axios<span class="token punctuation">.</span><span class="token function">create</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
instance<span class="token punctuation">.</span>interceptors<span class="token punctuation">.</span>request<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token comment">/*...*/</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><h2 id="错误处理" tabindex="-1"><a class="header-anchor" href="#错误处理" aria-hidden="true">#</a> 错误处理</h2><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code>axios<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">&#39;/user/12345&#39;</span><span class="token punctuation">)</span>
  <span class="token punctuation">.</span><span class="token function">catch</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">error</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>error<span class="token punctuation">.</span>response<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token comment">// 请求已发出，但服务器响应的状态码不在 2xx 范围内</span>
      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>error<span class="token punctuation">.</span>response<span class="token punctuation">.</span>data<span class="token punctuation">)</span><span class="token punctuation">;</span>
      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>error<span class="token punctuation">.</span>response<span class="token punctuation">.</span>status<span class="token punctuation">)</span><span class="token punctuation">;</span>
      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>error<span class="token punctuation">.</span>response<span class="token punctuation">.</span>headers<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
      <span class="token comment">// Something happened in setting up the request that triggered an Error</span>
      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;Error&#39;</span><span class="token punctuation">,</span> error<span class="token punctuation">.</span>message<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>error<span class="token punctuation">.</span>config<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><p>可以使用 <code>validateStatus</code> 配置选项定义一个自定义 HTTP 状态码的错误范围。</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code>axios<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">&#39;/user/12345&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
  <span class="token function-variable function">validateStatus</span><span class="token operator">:</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">status</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> status <span class="token operator">&lt;</span> <span class="token number">500</span><span class="token punctuation">;</span> <span class="token comment">// 状态码在大于或等于500时才会 reject</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre></div><h2 id="取消" tabindex="-1"><a class="header-anchor" href="#取消" aria-hidden="true">#</a> 取消</h2><p>使用 <em>cancel token</em> 取消请求</p>`,22),A={href:"https://github.com/tc39/proposal-cancelable-promises",target:"_blank",rel:"noopener noreferrer"},R=p(`<p>可以使用 <code>CancelToken.source</code> 工厂方法创建 cancel token，像这样：</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">var</span> CancelToken <span class="token operator">=</span> axios<span class="token punctuation">.</span>CancelToken<span class="token punctuation">;</span>
<span class="token keyword">var</span> source <span class="token operator">=</span> CancelToken<span class="token punctuation">.</span><span class="token function">source</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

axios<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">&#39;/user/12345&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">cancelToken</span><span class="token operator">:</span> source<span class="token punctuation">.</span>token
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">catch</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">thrown</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>axios<span class="token punctuation">.</span><span class="token function">isCancel</span><span class="token punctuation">(</span>thrown<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;Request canceled&#39;</span><span class="token punctuation">,</span> thrown<span class="token punctuation">.</span>message<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
    <span class="token comment">// 处理错误</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 取消请求（message 参数是可选的）</span>
source<span class="token punctuation">.</span><span class="token function">cancel</span><span class="token punctuation">(</span><span class="token string">&#39;Operation canceled by the user.&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><p>还可以通过传递一个 executor 函数到 <code>CancelToken</code> 的构造函数来创建 cancel token：</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">var</span> CancelToken <span class="token operator">=</span> axios<span class="token punctuation">.</span>CancelToken<span class="token punctuation">;</span>
<span class="token keyword">var</span> cancel<span class="token punctuation">;</span>

axios<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">&#39;/user/12345&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">cancelToken</span><span class="token operator">:</span> <span class="token keyword">new</span> <span class="token class-name">CancelToken</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token function">executor</span><span class="token punctuation">(</span><span class="token parameter">c</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// executor 函数接收一个 cancel 函数作为参数</span>
    cancel <span class="token operator">=</span> c<span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 取消请求</span>
<span class="token function">cancel</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><p>Note : 可以使用同一个 cancel token 取消多个请求</p><h2 id="semver" tabindex="-1"><a class="header-anchor" href="#semver" aria-hidden="true">#</a> Semver</h2><p>Until axios reaches a <code>1.0</code> release, breaking changes will be released with a new minor version. For example <code>0.5.1</code>, and <code>0.5.4</code> will have the same API, but <code>0.6.0</code> will have breaking changes.</p><h2 id="promises" tabindex="-1"><a class="header-anchor" href="#promises" aria-hidden="true">#</a> Promises</h2>`,8),S={href:"http://caniuse.com/promises",target:"_blank",rel:"noopener noreferrer"},q={href:"https://github.com/jakearchibald/es6-promise",target:"_blank",rel:"noopener noreferrer"},U=n("h2",{id:"typescript",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#typescript","aria-hidden":"true"},"#"),a(" TypeScript")],-1),C={href:"http://typescriptlang.org/",target:"_blank",rel:"noopener noreferrer"},N=p(`<div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">import</span> axios <span class="token keyword">from</span> <span class="token string">&#39;axios&#39;</span><span class="token punctuation">;</span>
axios<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">&#39;/user?ID=12345&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div>`,1);function L(H,E){const s=e("ExternalLinkIcon");return c(),l("div",null,[r,i,n("ul",null,[n("li",null,[a("从浏览器中创建 "),n("a",k,[a("XMLHttpRequests"),t(s)])]),n("li",null,[a("从 node.js 创建 "),n("a",d,[a("http"),t(s)]),a(" 请求")]),n("li",null,[a("支持 "),n("a",h,[a("Promise"),t(s)]),a(" API")]),m,g,f,x,n("li",null,[a("客户端支持防御 "),n("a",y,[a("XSRF"),t(s)])])]),v,n("p",null,[a("在使用 "),b,a(" 时，或传递 "),n("a",w,[a("rejection callback"),t(s)]),a(" 作为 "),j,a(" 的第二个参数时，响应可以通过 "),_,a(" 对象可被使用，正如在"),n("a",T,[a("错误处理"),t(s)]),a("这一节所讲。")]),P,n("blockquote",null,[n("p",null,[a("Axios 的 cancel token API 基于"),n("a",A,[a("cancelable promises proposal"),t(s)]),a("，它还处于第一阶段。")])]),R,n("p",null,[a("axios 依赖原生的 ES6 Promise 实现而"),n("a",S,[a("被支持"),t(s)]),a(". 如果你的环境不支持 ES6 Promise，你可以使用 "),n("a",q,[a("polyfill"),t(s)]),a(".")]),U,n("p",null,[a("axios includes "),n("a",C,[a("TypeScript"),t(s)]),a(" definitions.")]),N])}const O=o(u,[["render",L],["__file","axiosa.html.vue"]]);export{O as default};
