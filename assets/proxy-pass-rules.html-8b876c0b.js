import{_ as s}from"./nginx_location-ca5265ef.js";import{_ as n,p as a,q as t,a1 as e}from"./framework-d81ad7e5.js";const p={},o=e('<h2 id="前言" tabindex="-1"><a class="header-anchor" href="#前言" aria-hidden="true">#</a> 前言</h2><div class="custom-container danger"><p class="custom-container-title">声明 1</p><p>前端做反向代理时一般会在接口前增加一个 <code>api</code> 路径，如 <code>/api/user</code>，但后端并没有这么个东西，那么就会导致一些问题。</p></div><div class="custom-container danger"><p class="custom-container-title">声明 2</p><p><code>location</code> 一般采用前缀匹配的模式。</p></div><p><img src="'+s+`" alt="alt"></p><p>日常使用中虽可采用 <code>rewrite</code> 解决多余路径的问题（此处可如此使用的缘由是 <code>rewrite</code> 的处理阶段在 <code>proxy_pass</code> 之前）。</p><div class="language-nginx" data-ext="nginx"><pre class="language-nginx"><code><span class="token directive"><span class="token keyword">location</span> /api</span> <span class="token punctuation">{</span>   
    <span class="token directive"><span class="token keyword">proxy_set_header</span> Host <span class="token variable">$http_host</span></span><span class="token punctuation">;</span>
    <span class="token directive"><span class="token keyword">proxy_set_header</span> X-Real-IP <span class="token variable">$remote_addr</span></span><span class="token punctuation">;</span>
    <span class="token directive"><span class="token keyword">proxy_set_header</span> X-Scheme <span class="token variable">$scheme</span></span><span class="token punctuation">;</span>
  
    <span class="token comment"># 路径重写</span>
    <span class="token directive"><span class="token keyword">rewrite</span>  /api/(.*)  /<span class="token variable">$1</span>  break</span><span class="token punctuation">;</span>
    <span class="token directive"><span class="token keyword">proxy_pass</span> http://localhost:8123</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>


<span class="token directive"><span class="token keyword">location</span> /msa-file/</span> <span class="token punctuation">{</span>
		<span class="token directive"><span class="token keyword">proxy_pass</span>   http://172.17.0.1:8075/MSA.File/</span><span class="token punctuation">;</span>
		<span class="token directive"><span class="token keyword">proxy_set_header</span> Host <span class="token variable">$host</span>:<span class="token variable">$server_port</span></span><span class="token punctuation">;</span>
		<span class="token directive"><span class="token keyword">proxy_set_header</span> X-Real-IP <span class="token variable">$remote_addr</span></span><span class="token punctuation">;</span>
		<span class="token directive"><span class="token keyword">proxy_set_header</span> X-Real-PORT <span class="token variable">$remote_port</span></span><span class="token punctuation">;</span>
		<span class="token directive"><span class="token keyword">proxy_set_header</span> REMOTE-HOST <span class="token variable">$remote_addr</span></span><span class="token punctuation">;</span>
		<span class="token directive"><span class="token keyword">proxy_set_header</span> X-Forwarded-For <span class="token variable">$proxy_add_x_forwarded_for</span></span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
  
</code></pre></div><p>但探索一下 <code>location</code> + <code>proxy_pass</code> 也是不错的选择。</p><h2 id="规则" tabindex="-1"><a class="header-anchor" href="#规则" aria-hidden="true">#</a> 规则</h2><div class="language-nginx" data-ext="nginx"><pre class="language-nginx"><code><span class="token directive"><span class="token keyword">Syntax:</span>	proxy_pass URL</span><span class="token punctuation">;</span>
Default: —
Context: location, if in location, limit_except
</code></pre></div><p>其中唯一需要注意的是，当 <code>proxy_pass</code> 后无 <code>/</code> 时为相对地址，有则为绝对地址。</p><h3 id="_1-相对地址" tabindex="-1"><a class="header-anchor" href="#_1-相对地址" aria-hidden="true">#</a> 1. 相对地址</h3><p>相对地址时会将 <code>location</code> 匹配的 <code>uri</code> 加入代理。</p><div class="language-nginx" data-ext="nginx"><pre class="language-nginx"><code><span class="token directive"><span class="token keyword">server</span></span> <span class="token punctuation">{</span>
  <span class="token directive"><span class="token keyword">listen</span>       <span class="token number">8085</span></span><span class="token punctuation">;</span>
  <span class="token directive"><span class="token keyword">server_name</span> localhost</span><span class="token punctuation">;</span>

  <span class="token directive"><span class="token keyword">location</span> /</span> <span class="token punctuation">{</span>
    <span class="token directive"><span class="token keyword">return</span> <span class="token number">200</span> <span class="token string">&quot;8084 <span class="token escape entity">\\n</span>&quot;</span></span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token directive"><span class="token keyword">server</span></span> <span class="token punctuation">{</span>
  <span class="token directive"><span class="token keyword">listen</span>       <span class="token number">8083</span></span><span class="token punctuation">;</span>
  <span class="token directive"><span class="token keyword">server_name</span> localhost</span><span class="token punctuation">;</span>

  <span class="token directive"><span class="token keyword">location</span> /api</span> <span class="token punctuation">{</span>
    <span class="token directive"><span class="token keyword">proxy_pass</span> http://localhost:8085</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token directive"><span class="token keyword">server</span></span> <span class="token punctuation">{</span>
  <span class="token directive"><span class="token keyword">listen</span>       <span class="token number">8084</span></span><span class="token punctuation">;</span>
  <span class="token directive"><span class="token keyword">server_name</span> localhost</span><span class="token punctuation">;</span>

  <span class="token directive"><span class="token keyword">location</span> /api</span> <span class="token punctuation">{</span>
    <span class="token directive"><span class="token keyword">proxy_pass</span> http://localhost:8085/app</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><table><thead><tr><th>curl</th><th>8083</th><th>8084</th></tr></thead><tbody><tr><td><code>localhost:8083/api</code></td><td><code>/api</code></td><td><code>/api</code></td></tr><tr><td><code>localhost:8083/api/user</code></td><td><code>/api/user</code></td><td><code>/api/user</code></td></tr><tr><td><code>localhost:8084/api</code></td><td><code>/api</code></td><td><code>/app</code></td></tr><tr><td><code>localhost:8084/api/user</code></td><td><code>/api/user</code></td><td><code>/app/user</code></td></tr><tr><td><code>localhost:8084/apipp/user</code></td><td><code>/apipp/user</code></td><td><code>/apppp/user</code></td></tr></tbody></table><h3 id="_2-绝对地址" tabindex="-1"><a class="header-anchor" href="#_2-绝对地址" aria-hidden="true">#</a> 2. 绝对地址</h3><p>绝对地址则不会将 <code>location</code> 匹配的 <code>uri</code> 加入代理，即直接丢弃。</p><div class="language-nginx" data-ext="nginx"><pre class="language-nginx"><code><span class="token directive"><span class="token keyword">server</span></span> <span class="token punctuation">{</span>
  <span class="token directive"><span class="token keyword">listen</span>       <span class="token number">8085</span></span><span class="token punctuation">;</span>
  <span class="token directive"><span class="token keyword">server_name</span> localhost</span><span class="token punctuation">;</span>

  <span class="token directive"><span class="token keyword">location</span> /</span> <span class="token punctuation">{</span>
    <span class="token directive"><span class="token keyword">return</span> <span class="token number">200</span> <span class="token string">&quot;8084 <span class="token escape entity">\\n</span>&quot;</span></span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token directive"><span class="token keyword">server</span></span> <span class="token punctuation">{</span>
  <span class="token directive"><span class="token keyword">listen</span>       <span class="token number">8083</span></span><span class="token punctuation">;</span>
  <span class="token directive"><span class="token keyword">server_name</span> localhost</span><span class="token punctuation">;</span>

  <span class="token directive"><span class="token keyword">location</span> /api</span> <span class="token punctuation">{</span>
    <span class="token directive"><span class="token keyword">proxy_pass</span> http://localhost:8085/</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token directive"><span class="token keyword">server</span></span> <span class="token punctuation">{</span>
  <span class="token directive"><span class="token keyword">listen</span>       <span class="token number">8084</span></span><span class="token punctuation">;</span>
  <span class="token directive"><span class="token keyword">server_name</span> localhost</span><span class="token punctuation">;</span>

  <span class="token directive"><span class="token keyword">location</span> /api</span> <span class="token punctuation">{</span>
    <span class="token directive"><span class="token keyword">proxy_pass</span> http://localhost:8085/app/</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment"># 解决多余的 \`/\`</span>
<span class="token directive"><span class="token keyword">server</span></span> <span class="token punctuation">{</span>
  <span class="token directive"><span class="token keyword">listen</span>       <span class="token number">8086</span></span><span class="token punctuation">;</span>
  <span class="token directive"><span class="token keyword">server_name</span> localhost</span><span class="token punctuation">;</span>

  <span class="token directive"><span class="token keyword">location</span> /api/</span> <span class="token punctuation">{</span>
    <span class="token directive"><span class="token keyword">proxy_pass</span> http://localhost:8085/app/</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><table><thead><tr><th>curl</th><th>proxy</th><th>target</th></tr></thead><tbody><tr><td><code>localhost:8083/api</code></td><td><code>/api</code></td><td><code>/</code></td></tr><tr><td><code>localhost:8083/api/user</code></td><td><code>/api/user</code></td><td><code>//user</code></td></tr><tr><td><code>localhost:8084/api</code></td><td><code>/api</code></td><td><code>/app/</code></td></tr><tr><td><code>localhost:8084/api/user</code></td><td><code>/api/user</code></td><td><code>/app//user</code></td></tr><tr><td><code>localhost:8084/apipp/user</code></td><td><code>/apipp/user</code></td><td><code>/app/pp/user</code></td></tr><tr><td><code>localhost:8086/api</code></td><td><code>/api</code></td><td><code>location</code> 未匹配，所以不进入 <code>proxy</code></td></tr><tr><td><code>localhost:8086/api/user</code></td><td><code>/api/user</code></td><td><code>/app/user</code></td></tr></tbody></table><p>可以观测到少了匹配到的 <code>api</code> 部分，而作为路径的 <code>/</code> 未匹配到显得多余起来，解决的方案是使 <code>location</code> 匹配到 <code>/</code> 即可。</p><h3 id="proxy-redirect" tabindex="-1"><a class="header-anchor" href="#proxy-redirect" aria-hidden="true">#</a> proxy_redirect</h3><p>proxy_redirect是Nginx的一个指令，它用于<strong>替换反向代理所返回的响应头中的Location和Refresh</strong>字段来将页面重定向指向正确的地址。</p><p>proxy_redirect的使用方法 在Nginx的配置文件中，我们可以使用以下语法来启用proxy_redirect：</p><p><code>proxy_redirect redirect_regex substitute_string;</code></p><p>假设我们有一个网站<code>https://example.com</code>，它的反向代理位于<code>https://proxy.example.com</code>，我们使用以下配置将请求发送到反向代理：</p><div class="language-nginx" data-ext="nginx"><pre class="language-nginx"><code><span class="token directive"><span class="token keyword">location</span> /</span> <span class="token punctuation">{</span>
  <span class="token directive"><span class="token keyword">proxy_pass</span>       https://proxy.example.com</span><span class="token punctuation">;</span>
  <span class="token directive"><span class="token keyword">proxy_redirect</span>   https://proxy.example.com/ /</span><span class="token punctuation">;</span>
  ...
<span class="token punctuation">}</span>
</code></pre></div><p>现在，当用户访问<code>https://example.com/foo/bar</code>时，Nginx会将该请求发送到<code>https://proxy.example.com/foo/bar</code>。</p><ul><li>在这个例子中，proxy_redirect的参数<code>redirect_regex</code>为<code>https://proxy.example.com/</code>，substitute_string为/。因此，任何返回的响应头中包含<code>https://proxy.example.com/</code>的字符串将被替换为 <strong>/</strong>。</li></ul><p>这意味着，如果代理服务器返回<code>https://proxy.example.com/abc</code>，Nginx会将其替换为/abc。</p><p>假设我们有一个网站<code>https://example.com</code>，它的反向代理位于<code>https://proxy.example.com</code>，我们使用以下配置将请求发送到反向代理：</p><div class="language-conf" data-ext="conf"><pre class="language-conf"><code>location / {
  proxy_pass       https://proxy.example.com;
  proxy_redirect   default;
  ...
}
</code></pre></div><p>现在，当用户访问<code>https://example.com/foo/bar</code>时，Nginx会将该请求发送到<code>https://proxy.example.com/foo/bar</code>。</p><ul><li>在这个例子中，proxy_redirect的参数<code>redirect_regex</code>为default，<code>substitute_string</code>为<code>$scheme://$host/</code>。</li><li>这意味着，Nginx会将<strong>任何返回的响应头中</strong>包含<strong>https://proxy.example.com</strong>的部分替换为请求的协议和主机名，也就是<code>https://example.com</code>。</li></ul><p>查看常用配置参数</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 用户请求的时候HOST的值是game.test.com, 那么代理服务会像后端传递请求的还是game.test.com</span>
proxy_set_header Host <span class="token variable">$http_host</span><span class="token punctuation">;</span>
<span class="token comment"># 将$remote_addr的值放进变量X-Real-IP中，$remote_addr的值为客户端的ip</span>
proxy_set_header X-Real-IP <span class="token variable">$remote_addr</span><span class="token punctuation">;</span>
<span class="token comment"># 客户端通过代理服务访问后端服务, 后端服务通过该变量会记录真实客户端地址</span>
proxy_set_header X-Forwarded-For <span class="token variable">$proxy_add_x_forwarded_for</span><span class="token punctuation">;</span>
<span class="token comment"># nginx代理与后端服务器连接超时时间(代理连接超时)</span>
proxy_connect_timeout 10s<span class="token punctuation">;</span>
<span class="token comment"># nginx代理等待后端服务器的响应时间</span>
proxy_read_timeout 10s<span class="token punctuation">;</span>
<span class="token comment"># 后端服务器数据回传给nginx代理超时时间</span>
proxy_send_timeout 10s<span class="token punctuation">;</span>
<span class="token comment"># nignx会把后端返回的内容先放到缓冲区当中，然后再返回给客户端，边收边传, 不是全部接收完再传给客户</span>
proxy_buffering on<span class="token punctuation">;</span>
<span class="token comment"># 设置nginx代理保存用户头信息的缓冲区大小</span>
proxy_buffer_size  8k<span class="token punctuation">;</span>
<span class="token comment"># proxy_buffers 缓冲区</span>
proxy_buffers <span class="token number">8</span> 8k<span class="token punctuation">;</span>
<span class="token comment"># 状态标记</span>
proxy_next_upstream http_404  http_500  http_502  http_503  http_504  http_403  http_429<span class="token punctuation">;</span>
</code></pre></div><h3 id="nginx中http-host和-proxy-host区别" tabindex="-1"><a class="header-anchor" href="#nginx中http-host和-proxy-host区别" aria-hidden="true">#</a> nginx中host、http_host和$proxy_host区别</h3><table><thead><tr><th>变量</th><th>是否显示端口</th><th>值</th></tr></thead><tbody><tr><td>$host</td><td>不显示端口</td><td>浏览器请求的ip，不显示端口</td></tr><tr><td>$http_host</td><td>端口存在则显示</td><td>浏览器请求的ip和端口号</td></tr><tr><td>$proxy_host</td><td>默认80端口不显示，其它显示</td><td>被代理服务的ip和端口号</td></tr></tbody></table><ul><li>配置反向代理时，接口请求报404问题 应用描述：前端应用域名为A（ww.a.com）, 后端服务域名为B（www.b.com）; 为了解决跨域问题，配置nginx反向代理如下：</li></ul><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code> 
proxy_set_header Host $host<span class="token punctuation">;</span>
 
location <span class="token operator">^</span><span class="token operator">~</span> <span class="token operator">/</span>api<span class="token operator">/</span> <span class="token punctuation">{</span>
	rewrite <span class="token string">&quot;^/api/(.*)$&quot;</span>  <span class="token operator">/</span>$1 <span class="token keyword">break</span><span class="token punctuation">;</span>
	proxy_pass	http<span class="token operator">:</span><span class="token operator">/</span><span class="token operator">/</span>www<span class="token punctuation">.</span>b<span class="token punctuation">.</span>com<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><p>方案一：将proxy_set_header注释掉 方案二：修改反向代理配置，设置请求头Host，如下所示：</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code>location <span class="token operator">^</span><span class="token operator">~</span> <span class="token operator">/</span>api<span class="token operator">/</span> <span class="token punctuation">{</span>
	rewrite <span class="token string">&quot;^/api/(.*)$&quot;</span>  <span class="token operator">/</span>$1 <span class="token keyword">break</span><span class="token punctuation">;</span>
	proxy_pass	http<span class="token operator">:</span><span class="token operator">/</span><span class="token operator">/</span>www<span class="token punctuation">.</span>b<span class="token punctuation">.</span>com<span class="token punctuation">;</span>
	proxy_set_header Host $proxy_host<span class="token punctuation">;</span> <span class="token comment">//方式一：设置请求头host为www.b.com的ip和端口号</span>
	proxy_set_header Host www<span class="token punctuation">.</span>b<span class="token punctuation">.</span>com<span class="token punctuation">;</span> <span class="token comment">//方式二：设置请求host为www.b.com</span>
<span class="token punctuation">}</span> 
</code></pre></div>`,40),c=[o];function r(d,l){return a(),t("div",null,c)}const u=n(p,[["render",r],["__file","proxy-pass-rules.html.vue"]]);export{u as default};
