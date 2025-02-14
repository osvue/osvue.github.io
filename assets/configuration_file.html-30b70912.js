import{_ as n,p as s,q as a,a1 as t}from"./framework-d81ad7e5.js";const e={},o=t(`<h4 id="配置格式" tabindex="-1"><a class="header-anchor" href="#配置格式" aria-hidden="true">#</a> 配置格式</h4><p>大括号实际上表示一个新上下文（context），需要注意的是，每一个指令行需要使用 <code>;</code> 来进行结束。</p><h2 id="基本配置" tabindex="-1"><a class="header-anchor" href="#基本配置" aria-hidden="true">#</a> 基本配置</h2><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token comment">#打开主配置文件，若你是用lnmp环境安装</span>
<span class="token function">vim</span> /usr/local/nginx/conf/nginx.conf

----------------------------------------

user <span class="token comment">#设置nginx服务的系统使用用户</span>
worker_processes <span class="token comment">#工作进程数 一般情况与CPU核数保持一致</span>
error_log <span class="token comment">#nginx的错误日志</span>
pid <span class="token comment">#nginx启动时的pid</span>

events <span class="token punctuation">{</span>
    worker_connections <span class="token comment">#每个进程允许最大连接数</span>
    use <span class="token comment">#nginx使用的内核模型</span>
<span class="token punctuation">}</span>

 <span class="token comment">#   我们使用 nginx 的 http 服务，在配置文件 nginx.conf 中的 http 区域内，配置无数个 server ，每一个 server 对应这一个虚拟主机或者域名</span>
http <span class="token punctuation">{</span>
    <span class="token punctuation">..</span>. <span class="token punctuation">..</span>. <span class="token comment">#后面再详细介绍 http 配置项目</span>

    server <span class="token punctuation">{</span>
        listen <span class="token number">80</span> <span class="token comment">#监听端口;</span>
        server_name localhost <span class="token comment">#地址</span>

        location / <span class="token punctuation">{</span> <span class="token comment">#访问首页路径</span>
            root /xxx/xxx/index.html <span class="token comment">#默认目录</span>
            index index.html index.htm <span class="token comment">#默认文件</span>
        <span class="token punctuation">}</span>

        error_page <span class="token number">500</span> <span class="token number">504</span> /50x.html <span class="token comment">#当出现以上状态码时从新定义到50x.html</span>
        location <span class="token operator">=</span> /50x.html <span class="token punctuation">{</span> <span class="token comment">#当访问50x.html时</span>
            root /xxx/xxx/html <span class="token comment">#50x.html 页面所在位置</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    server <span class="token punctuation">{</span>
        <span class="token punctuation">..</span>. <span class="token punctuation">..</span>.
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment"># 一个 server 可以出现多个 location ，我们对不同的访问路径进行不同情况的配置</span>
<span class="token comment"># 我们再来看看 http 的配置详情</span>

http <span class="token punctuation">{</span>
    sendfile on <span class="token comment">#高效传输文件的模式 一定要开启</span>
    keepalive_timeout <span class="token number">65</span> <span class="token comment">#客户端服务端请求超时时间</span>
    log_format main XXX <span class="token comment">#定义日志格式 代号为main</span>
    access_log /usr/local/access.log main <span class="token comment">#日志保存地址 格式代码 main</span>
<span class="token punctuation">}</span>

 
<span class="token comment">#大写V查看所有模块，小写v查看版本</span>
nginx <span class="token parameter variable">-V</span>
<span class="token comment"># 查看此配置文件 是否存在语法错误</span>
nginx <span class="token parameter variable">-tc</span> /usr/local/nginx/conf/nginx.conf


</code></pre></div><h2 id="nginx-conf" tabindex="-1"><a class="header-anchor" href="#nginx-conf" aria-hidden="true">#</a> nginx.conf</h2><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token function">cat</span> /etc/nginx/nginx.conf
</code></pre></div><p>获取内容如下：</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 配置 worker 进程的用户和组，默认是 nginx</span>
user  nginx<span class="token punctuation">;</span>
<span class="token comment"># Nginx 进程，一般设置为和 CPU 核数一致，示例的阿里云学生机为 1 核</span>
worker_processes  <span class="token number">1</span><span class="token punctuation">;</span>

<span class="token comment"># 错误日志存放目录，指令的第二个参数表示被记录错误的级别</span>
<span class="token comment"># 错误级别：debug、info、notice、warn、error 等</span>
error_log  /var/log/nginx/error.log warn<span class="token punctuation">;</span>
<span class="token comment"># 设置记录主进程 ID 的文件</span>
pid        /var/run/nginx.pid<span class="token punctuation">;</span>

events <span class="token punctuation">{</span>
		<span class="token comment"># 单个进程最大并发数</span>
    worker_connections  <span class="token number">1024</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment"># 主要配置文件</span>
http <span class="token punctuation">{</span>
		<span class="token comment"># 文件扩展名与类型映射表</span>
    include       /etc/nginx/mime.types<span class="token punctuation">;</span>
    <span class="token comment"># 默认文件类型</span>
    default_type  application/octet-stream<span class="token punctuation">;</span>
		<span class="token comment"># 设置日志格式：访问地址-访问用户-本地事件-请求</span>
    log_format  main  <span class="token string">&#39;$remote_addr - $remote_user [$time_local] &quot;$request&quot; &#39;</span>
                      <span class="token string">&#39;$status $body_bytes_sent &quot;$http_referer&quot; &#39;</span>
                      <span class="token string">&#39;&quot;$http_user_agent&quot; &quot;$http_x_forwarded_for&quot;&#39;</span><span class="token punctuation">;</span>

		<span class="token comment"># 访问日志</span>
    access_log  /var/log/nginx/access.log  main<span class="token punctuation">;</span>

		<span class="token comment"># 直接复制数据从一个文件到另一个文件描述符</span>
    sendfile        on<span class="token punctuation">;</span>
    <span class="token comment"># 仅依赖于 sendfile 的使用</span>
    <span class="token comment"># 在一个数据包中尝试发送响应头，以及在数据包中发送一个完整的文件</span>
    <span class="token comment">#tcp_nopush     on;</span>

		<span class="token comment"># 保持连接的时间（超时时间）</span>
    keepalive_timeout  <span class="token number">65</span><span class="token punctuation">;</span>
		
		<span class="token comment"># 开启 gzip 压缩</span>
    <span class="token comment">#gzip  on;</span>

		<span class="token comment"># 当前文件为 Nginx 主配置文件（入口），控制子配置项位置和文件</span>
    include /etc/nginx/conf.d/*.conf<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><h2 id="default-conf" tabindex="-1"><a class="header-anchor" href="#default-conf" aria-hidden="true">#</a> default.conf</h2><p>在主配置文件（nginx.conf）中可以看到子配置项所在的目录：</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># include /etc/nginx/conf.d/*.conf;</span>
<span class="token comment"># 查看该目录下的文件：</span>
<span class="token function">ls</span> /etc/nginx/conf.d/
<span class="token comment"># default.conf # 默认</span>
</code></pre></div><h3 id="_1-解析" tabindex="-1"><a class="header-anchor" href="#_1-解析" aria-hidden="true">#</a> 1. 解析</h3><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token function">cat</span> /etc/nginx/conf.d/default.conf
</code></pre></div><p>获取内容如下：</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 任何由关键字 server 的部分都被称为 “虚拟服务器”</span>
<span class="token comment"># 一个虚拟服务器由 listen 和 server_name 指令组合定义</span>
server <span class="token punctuation">{</span>
		<span class="token comment"># 监听端口</span>
    listen       <span class="token number">80</span><span class="token punctuation">;</span>
    <span class="token comment"># 监听域名</span>
    server_name  localhost<span class="token punctuation">;</span>

    <span class="token comment">#charset koi8-r;</span>
    <span class="token comment">#access_log  /var/log/nginx/host.access.log  main;</span>

		<span class="token comment"># location 指令可以用在虚拟服务器 server 部分，并且意味着来自客户端的 URI 或者内部重定向访问</span>
		<span class="token comment"># location 定义： location [modifier] uri {...}</span>
    location / <span class="token punctuation">{</span>
    		<span class="token comment"># 服务默认启动目录</span>
        root   /usr/share/nginx/html<span class="token punctuation">;</span>
        <span class="token comment"># 默认文件格式</span>
        index  index.html index.htm<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">#error_page  404              /404.html;</span>

    <span class="token comment"># redirect server error pages to the static page /50x.html</span>
    <span class="token comment">#</span>
    <span class="token comment"># 错误状态码对应的页面</span>
    error_page   <span class="token number">500</span> <span class="token number">502</span> <span class="token number">503</span> <span class="token number">504</span>  /50x.html<span class="token punctuation">;</span>
    <span class="token comment"># 对应页面的路径</span>
    location <span class="token operator">=</span> /50x.html <span class="token punctuation">{</span>
        root   /usr/share/nginx/html<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

   
<span class="token punctuation">}</span>
</code></pre></div>`,15),c=[o];function p(l,i){return s(),a("div",null,c)}const r=n(e,[["render",p],["__file","configuration_file.html.vue"]]);export{r as default};
