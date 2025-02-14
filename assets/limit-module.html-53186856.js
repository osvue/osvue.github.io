import{_ as o,M as p,p as c,q as i,R as a,t as n,N as e,a1 as t}from"./framework-d81ad7e5.js";const l={},r=a("h2",{id:"请求限制",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#请求限制","aria-hidden":"true"},"#"),n(" 请求限制")],-1),d={href:"https://nginx.org/en/docs/http/ngx_http_limit_req_module.html",target:"_blank",rel:"noopener noreferrer"},k=t(`<h3 id="_1-limit-req-zone" tabindex="-1"><a class="header-anchor" href="#_1-limit-req-zone" aria-hidden="true">#</a> 1. limit_req_zone</h3><p>首先需要在 <code>http</code> 作用域定义 <code>limit_req_zone</code>。</p><div class="language-nginx" data-ext="nginx"><pre class="language-nginx"><code><span class="token directive"><span class="token keyword">Syntax:</span>	limit_req_zone key zone=name:size rate=rate [sync]</span><span class="token punctuation">;</span>
<span class="token directive"><span class="token keyword">Default:</span> —
Context: http

<span class="token comment"># Example</span>
limit_req_zone <span class="token variable">$binary_remote_addr</span> zone=one:10m rate=1r/s</span><span class="token punctuation">;</span>
</code></pre></div><h3 id="_2-limit-req" tabindex="-1"><a class="header-anchor" href="#_2-limit-req" aria-hidden="true">#</a> 2. limit_req</h3><p>再在指定的作用域启用。</p><div class="language-nginx" data-ext="nginx"><pre class="language-nginx"><code><span class="token directive"><span class="token keyword">Syntax:</span>	limit_req zone=name [burst=number] [nodelay | delay=number]</span><span class="token punctuation">;</span>
<span class="token directive"><span class="token keyword">Default:</span> —
Context: http, server, location

<span class="token comment"># Example</span>
limit_req_zone <span class="token variable">$binary_remote_addr</span> zone=one:10m rate=1r/s</span><span class="token punctuation">;</span>
<span class="token directive"><span class="token keyword">location</span> /search/</span> <span class="token punctuation">{</span>
  <span class="token directive"><span class="token keyword">limit_req</span> zone=one burst=5</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token directive"><span class="token keyword">limit_req_zone</span> <span class="token variable">$binary_remote_addr</span> zone=perip:10m rate=1r/s</span><span class="token punctuation">;</span>
<span class="token directive"><span class="token keyword">limit_req_zone</span> <span class="token variable">$server_name</span> zone=perserver:10m rate=10r/s</span><span class="token punctuation">;</span>
<span class="token directive"><span class="token keyword">server</span></span> <span class="token punctuation">{</span>
  <span class="token directive"><span class="token keyword">limit_req</span> zone=perip burst=5 nodelay</span><span class="token punctuation">;</span>
  <span class="token directive"><span class="token keyword">limit_req</span> zone=perserver burst=10</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><p><code>$binary_remote_addr</code> 相对 <code>remote_addr</code> 占用的空间更少。</p><h2 id="连接限制" tabindex="-1"><a class="header-anchor" href="#连接限制" aria-hidden="true">#</a> 连接限制</h2>`,8),u={href:"https://nginx.org/en/docs/http/ngx_http_limit_conn_module.html",target:"_blank",rel:"noopener noreferrer"},_=t(`<h3 id="_1-limit-conn-zone" tabindex="-1"><a class="header-anchor" href="#_1-limit-conn-zone" aria-hidden="true">#</a> 1. limit_conn_zone</h3><div class="language-nginx" data-ext="nginx"><pre class="language-nginx"><code><span class="token directive"><span class="token keyword">Syntax:</span>	limit_conn_zone key zone=name:size</span><span class="token punctuation">;</span>
<span class="token directive"><span class="token keyword">Default:</span> —
Context: http

<span class="token comment"># Example</span>
limit_conn_zone <span class="token variable">$binary_remote_addr</span> zone=addr:10m</span><span class="token punctuation">;</span>
</code></pre></div><h3 id="_2-limit-zone" tabindex="-1"><a class="header-anchor" href="#_2-limit-zone" aria-hidden="true">#</a> 2. limit_zone</h3><div class="language-nginx" data-ext="nginx"><pre class="language-nginx"><code><span class="token directive"><span class="token keyword">Syntax:</span>	limit_zone name <span class="token variable">$variable</span> size</span><span class="token punctuation">;</span>
<span class="token directive"><span class="token keyword">Default:</span> —
Context: http

<span class="token comment"># Example</span>
limit_conn_zone <span class="token variable">$binary_remote_addr</span> zone=perip:10m</span><span class="token punctuation">;</span>
<span class="token directive"><span class="token keyword">limit_conn_zone</span> <span class="token variable">$server_name</span> zone=perserver:10m</span><span class="token punctuation">;</span>

<span class="token directive"><span class="token keyword">server</span></span> <span class="token punctuation">{</span>
  <span class="token directive"><span class="token keyword">limit_conn</span> perip <span class="token number">10</span></span><span class="token punctuation">;</span>
  <span class="token directive"><span class="token keyword">limit_conn</span> perserver <span class="token number">100</span></span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><h2 id="访问-ip-限制" tabindex="-1"><a class="header-anchor" href="#访问-ip-限制" aria-hidden="true">#</a> 访问 IP 限制</h2>`,5),h={href:"https://nginx.org/en/docs/http/ngx_http_access_module.html",target:"_blank",rel:"noopener noreferrer"},m=t(`<div class="language-nginx" data-ext="nginx"><pre class="language-nginx"><code><span class="token directive"><span class="token keyword">Syntax:</span>	allow address | CIDR | unix: | all</span><span class="token punctuation">;</span>
<span class="token directive"><span class="token keyword">Default:</span> —
Context: http, server, location, limit_except

Syntax:	deny address | CIDR | unix: | all</span><span class="token punctuation">;</span>
<span class="token directive"><span class="token keyword">Default:</span> —
Context: http, server, location, limit_except

<span class="token comment"># Example</span>
location /</span> <span class="token punctuation">{</span>
  <span class="token directive"><span class="token keyword">deny</span>  192.168.1.1</span><span class="token punctuation">;</span>
  <span class="token directive"><span class="token keyword">allow</span> 192.168.1.0/24</span><span class="token punctuation">;</span>
  <span class="token directive"><span class="token keyword">allow</span> 10.1.1.0/16</span><span class="token punctuation">;</span>
  <span class="token directive"><span class="token keyword">allow</span> 2001:0db8::/32</span><span class="token punctuation">;</span>
  <span class="token directive"><span class="token keyword">deny</span>  all</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><h2 id="访问-账号-限制" tabindex="-1"><a class="header-anchor" href="#访问-账号-限制" aria-hidden="true">#</a> 访问 账号 限制</h2>`,2),g={href:"https://nginx.org/en/docs/http/ngx_http_auth_basic_module.html",target:"_blank",rel:"noopener noreferrer"},x=t(`<h3 id="_1-生成密码" tabindex="-1"><a class="header-anchor" href="#_1-生成密码" aria-hidden="true">#</a> 1. 生成密码</h3><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 生成密码工具 htpasswd</span>
<span class="token comment"># -b 参数为 在一行输入用户名和密码，而非根据提示输入密码</span>
<span class="token comment"># -c 参数为 创建一个加密文件(注意已有则覆盖)，即增加用户时无需指定</span>
htpasswd <span class="token parameter variable">-bc</span> /etc/nginx/auth_conf hzqq <span class="token number">123</span>
<span class="token comment"># 若缺乏依赖则提示，安装即可</span>
<span class="token comment"># centos 下</span>
yum <span class="token function">install</span> httpd-tools
<span class="token comment"># ubuntu 下</span>
<span class="token function">apt</span> <span class="token function">install</span> apache2-utils

<span class="token function">cat</span> /etc/nginx/auth_conf <span class="token comment"># 验证</span>
</code></pre></div><h3 id="_2-限制说明" tabindex="-1"><a class="header-anchor" href="#_2-限制说明" aria-hidden="true">#</a> 2. 限制说明</h3><div class="language-nginx" data-ext="nginx"><pre class="language-nginx"><code><span class="token directive"><span class="token keyword">Syntax:</span>	auth_basic string | <span class="token boolean">off</span></span><span class="token punctuation">;</span>
<span class="token directive"><span class="token keyword">Default:</span> auth_basic <span class="token boolean">off</span></span><span class="token punctuation">;</span>
<span class="token directive"><span class="token keyword">Context:</span> http, server, location, limit_except

Syntax:	auth_basic_user_file file</span><span class="token punctuation">;</span>
<span class="token directive"><span class="token keyword">Default:</span> —
Context: http, server, location, limit_except

<span class="token comment"># Example</span>
location /</span> <span class="token punctuation">{</span>
  <span class="token directive"><span class="token keyword">auth_basic</span>           <span class="token string">&quot;请输入用户名、密码&quot;</span></span><span class="token punctuation">;</span>
  <span class="token directive"><span class="token keyword">auth_basic_user_file</span> auth_conf</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><h2 id="禁止ip" tabindex="-1"><a class="header-anchor" href="#禁止ip" aria-hidden="true">#</a> 禁止ip</h2><div class="language-conf" data-ext="conf"><pre class="language-conf"><code>
#禁止单个ip
deny IP;
#禁止一个网段
deny subnet;
允许单个ip
allow IP;
允许一个网段
allow subnet;
# 禁止所有ip
deny all;
# 允许所有ip
allow all;
</code></pre></div><ol><li>首先我们需要新建一个禁止ip的配置文件 <strong>ipblacklist.conf</strong>，在新建的 <strong>ipblacklist.conf</strong>文件里填写需要禁止访问的IP</li></ol><div class="language-conf" data-ext="conf"><pre class="language-conf"><code>deny 1.1.1.1;
deny 1.1.1.0/24/
</code></pre></div><ol start="2"><li>保存文件，并把配置文件使用“ <strong>include</strong>”添加到Nginx配置文件 在http配置节点内添加以下代码</li></ol><p><code>include ipblacklist.conf;</code> 3. 保存nginx.conf配置文件。测试现在修改的配置文件是否合法</p><p><code>/usr/local/nginx/sbin/nginx -t</code></p><ol start="4"><li>配置文件正确会输出</li></ol><div class="language-conf" data-ext="conf"><pre class="language-conf"><code>the configuration file /usr/local/nginx/conf/nginx.conf syntax is ok
configuration file /usr/local/nginx/conf/nginx.conf test is successful
</code></pre></div><ol start="5"><li>如果配置文件没有问题就可以执行 reload 让Nginx重新加载配置文件。 <code>/usr/local/nginx/sbin/nginx -s reload</code></li></ol>`,14);function v(f,y){const s=p("ExternalLinkIcon");return c(),i("div",null,[r,a("p",null,[n("请求限制 "),a("a",d,[n("limit_req_module"),e(s)]),n(" 比连接限制更优化，由于一个连接可以被多次复用。")]),k,a("p",null,[a("a",u,[n("limit_conn_module"),e(s)]),n(" 步骤基本与请求限制一致。")]),_,a("p",null,[a("a",h,[n("access_module"),e(s)]),n(" 可用来限制访问的 IP，用法比较简单。")]),m,a("p",null,[a("a",g,[n("auth_basic_module"),e(s)]),n(" 可以为路径添加用户密码访问，可配合 IP 限制使用。")]),x])}const w=o(l,[["render",v],["__file","limit-module.html.vue"]]);export{w as default};
