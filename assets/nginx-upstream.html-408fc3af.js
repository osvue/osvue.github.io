import{_ as c,M as o,p as r,q as l,R as a,t as n,N as s,V as i,a1 as e}from"./framework-d81ad7e5.js";const d={},u=a("h2",{id:"介绍",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#介绍","aria-hidden":"true"},"#"),n(" 介绍")],-1),h={href:"https://nginx.org/en/docs/http/ngx_http_upstream_module.html",target:"_blank",rel:"noopener noreferrer"},k=e('<p>指定的上游服务器地址中，地址可以是域名、IP 地址或 unix socket 地址。</p><h2 id="server-parameters" tabindex="-1"><a class="header-anchor" href="#server-parameters" aria-hidden="true">#</a> server parameters</h2><table><thead><tr><th style="text-align:center;">parameters</th><th style="text-align:center;">type</th><th>作用</th></tr></thead><tbody><tr><td style="text-align:center;">weight</td><td style="text-align:center;">number</td><td>负载均衡时的权重，默认为 1。</td></tr><tr><td style="text-align:center;">max_conns</td><td style="text-align:center;">number</td><td>限制同时活动的最大链接数量（即最大并发 数），默认为 0，表示不限制。</td></tr><tr><td style="text-align:center;">max_fails</td><td style="text-align:center;">number</td><td>允许请求失败的次数，默认为 1。</td></tr><tr><td style="text-align:center;">fail_timeout</td><td style="text-align:center;">number</td><td>在经历了 max_fails 次失败后，暂停服务的时间。</td></tr><tr><td style="text-align:center;">backup</td><td style="text-align:center;"></td><td>指定当前 server 为备份服务器，仅当非备份服务器不可用时才启用。</td></tr><tr><td style="text-align:center;">down</td><td style="text-align:center;"></td><td>将服务器标记为永久不可用。</td></tr></tbody></table><h2 id="config" tabindex="-1"><a class="header-anchor" href="#config" aria-hidden="true">#</a> config</h2>',4),m=e(`<div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token function">vim</span> /etc/nginx/conf.d/default.conf
<span class="token comment"># 此处偷懒全部 server 写在 default.conf 中，更好的形式是新建两个 \`.conf\` 文件，更更好的形式当然是新建两台虚拟机，然后修改 &quot;DNS&quot;</span>
<span class="token comment"># 修改为如下内容</span>
server <span class="token punctuation">{</span>
    listen       <span class="token number">8081</span><span class="token punctuation">;</span>
    server_name  localhost<span class="token punctuation">;</span>

    location / <span class="token punctuation">{</span>
        <span class="token builtin class-name">return</span> <span class="token number">200</span> <span class="token string">&#39;8081\\n&#39;</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

server <span class="token punctuation">{</span>
    listen       <span class="token number">8082</span><span class="token punctuation">;</span>
    server_name  localhost<span class="token punctuation">;</span>

    location / <span class="token punctuation">{</span>
        <span class="token builtin class-name">return</span> <span class="token number">200</span> <span class="token string">&#39;8082\\n&#39;</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>   
<span class="token punctuation">}</span>

server <span class="token punctuation">{</span>
    listen       <span class="token number">8083</span><span class="token punctuation">;</span>
    server_name  localhost<span class="token punctuation">;</span>

    location / <span class="token punctuation">{</span>
        <span class="token builtin class-name">return</span> <span class="token number">200</span> <span class="token string">&#39;8083\\n&#39;</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

upstream backend <span class="token punctuation">{</span>
    server <span class="token number">127.0</span>.0.1:8081 <span class="token assign-left variable">weight</span><span class="token operator">=</span><span class="token number">2</span><span class="token punctuation">;</span>
    server <span class="token number">127.0</span>.0.1:8082<span class="token punctuation">;</span>
    server <span class="token number">127.0</span>.0.1:8083 backup<span class="token punctuation">;</span>
    keepalive <span class="token number">32</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
    
server <span class="token punctuation">{</span>
    listen       <span class="token number">80</span><span class="token punctuation">;</span>
    server_name  localhost<span class="token punctuation">;</span>

    <span class="token comment">#charset koi8-r;</span>
    access_log  /var/log/nginx/nginx.access.log  main<span class="token punctuation">;</span>
    error_log  /var/log/nginx/nginx.error.log warn<span class="token punctuation">;</span>

    location / <span class="token punctuation">{</span>
        proxy_pass http://backend<span class="token punctuation">;</span>
        proxy_http_version <span class="token number">1.1</span><span class="token punctuation">;</span>
        proxy_set_header Connection <span class="token string">&quot;&quot;</span><span class="token punctuation">;</span>
        proxy_connect_timeout 1s<span class="token punctuation">;</span>
        proxy_next_upstream error<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

nginx <span class="token parameter variable">-s</span> reload <span class="token comment"># 重载配置</span>
</code></pre></div><h2 id="test" tabindex="-1"><a class="header-anchor" href="#test" aria-hidden="true">#</a> test</h2><p>简单的重复测试，查看负载均衡情况。</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token function">curl</span> <span class="token parameter variable">-i</span> nginx.example.com
<span class="token comment"># HTTP/1.1 200 OK</span>
<span class="token comment"># 8081</span>

<span class="token function">curl</span> <span class="token parameter variable">-i</span> nginx.example.com
<span class="token comment"># HTTP/1.1 200 OK</span>
<span class="token comment"># 8081</span>

<span class="token function">curl</span> <span class="token parameter variable">-i</span> nginx.example.com
<span class="token comment"># HTTP/1.1 200 OK</span>
<span class="token comment"># 8082</span>

<span class="token comment"># 持续多次结果按照以上循环出现</span>
</code></pre></div><h2 id="load-balancing-methods" tabindex="-1"><a class="header-anchor" href="#load-balancing-methods" aria-hidden="true">#</a> load balancing methods</h2><p>Nginx 负载均衡有很多策略，上面示例是默认的 round-robin 算法（也就是基于 weight 权重）。</p>`,6),_={id:"_1-ip-hash-算法",tabindex:"-1"},x=a("a",{class:"header-anchor",href:"#_1-ip-hash-算法","aria-hidden":"true"},"#",-1),g={href:"https://nginx.org/en/docs/http/ngx_http_upstream_module.html#ip_hash",target:"_blank",rel:"noopener noreferrer"},b=e(`<p>根据用户的 IP 地址作为 hash 算法（IPv4、IPv6 策略不同）的关键字，在服务器之间分配请求。该方法确保了来自统一客户端的请求将始终传递到同一台服务器。</p><p>在指定 <code>ip_hash</code> 算法后权重不再生效？（不同版本 Nginx 结果会 不一致），同理 <code>backup</code> 参数同样不可用。</p><p>启用配置示例：</p><div class="language-nginx" data-ext="nginx"><pre class="language-nginx"><code><span class="token directive"><span class="token keyword">upstream</span> backend</span> <span class="token punctuation">{</span>
    <span class="token directive"><span class="token keyword">ip_hash</span></span><span class="token punctuation">;</span>

    <span class="token directive"><span class="token keyword">server</span> backend1.example.com</span><span class="token punctuation">;</span>
    <span class="token directive"><span class="token keyword">server</span> backend2.example.com</span><span class="token punctuation">;</span>
    <span class="token directive"><span class="token keyword">server</span> backend3.example.com down</span><span class="token punctuation">;</span>
    <span class="token directive"><span class="token keyword">server</span> backend4.example.com</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div>`,4),v={id:"_2-hash-算法",tabindex:"-1"},f=a("a",{class:"header-anchor",href:"#_2-hash-算法","aria-hidden":"true"},"#",-1),y={href:"https://nginx.org/en/docs/http/ngx_http_upstream_module.html#hash",target:"_blank",rel:"noopener noreferrer"},w=e(`<p>相对于 <code>ip_hash</code> 不再局限于 <code>$remote_addr</code>，可以指定关键字（其余的变量甚至字符串）来形成 hash。</p><blockquote><p>在之前了解到 <code>split_client</code> 可以用于处理 AB 测试，但是疑惑的是无法指定某一批用户，那么配合上 hash 算法能否实现更好的 AB 测试呢。</p></blockquote><div class="language-nginx" data-ext="nginx"><pre class="language-nginx"><code><span class="token directive"><span class="token keyword">Syntax:</span>	hash key [consistent]</span><span class="token punctuation">;</span>
<span class="token comment"># 如果 consistent 指定了参数，则将使用 ketama 一致性哈希方法。该方法可确保在将服务器添加到组中或从组中删除服务器时，只有很少的键将被重新映射到不同的服务器。这有助于为缓存服务器获得更高的缓存命中率。</span>
</code></pre></div><h2 id="upstream-module-directives" tabindex="-1"><a class="header-anchor" href="#upstream-module-directives" aria-hidden="true">#</a> upstream module directives</h2>`,4),I={id:"_1-proxy-pass",tabindex:"-1"},R=a("a",{class:"header-anchor",href:"#_1-proxy-pass","aria-hidden":"true"},"#",-1),N={href:"https://nginx.org/en/docs/http/ngx_http_proxy_module.html#proxy_pass",target:"_blank",rel:"noopener noreferrer"},U=e("<p><code>proxy_pass</code> 可以设置代理服务器的协议和地址，以及应将位置映射到的可选的 URI。</p><p>需要注意的是 <code>proxy_pass</code> 必须以 <code>http://</code> 或 <code>https://</code> 开头。</p><p>URI 会导致类似 alias 的效果，不再是完整转发了。所以不携带 URI，则将请求 URI 以原始请求处理时客户端发送的格式传递到服务器；携带 URI 则会导致原始请求URI 的一部分将被 <code>proxy_pass</code> 中指定的 URI 代替。</p>",3);function q(P,T){const t=o("ExternalLinkIcon"),p=o("RouterLink");return r(),l("div",null,[u,a("p",null,[n("反向代理主要是利用 "),a("a",h,[n("upstream"),s(t)]),n("、server 模块指定上游服务地址来实现负载均衡，当然反向代理是前置条件。")]),k,a("p",null,[n("在之前的"),s(p,{to:"/backend/nginx/nginx-directives.html#alias"},{default:i(()=>[n("基础")]),_:1}),n("上新增三台 server 虚拟机。")]),m,a("h3",_,[x,n(" 1. "),a("a",g,[n("ip-hash"),s(t)]),n(" 算法")]),b,a("h3",v,[f,n(" 2. "),a("a",y,[n("hash"),s(t)]),n(" 算法")]),w,a("h3",I,[R,n(" 1. "),a("a",N,[n("proxy_pass"),s(t)])]),U])}const V=c(d,[["render",q],["__file","nginx-upstream.html.vue"]]);export{V as default};
