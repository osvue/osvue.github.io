import{_ as n,p as s,q as a,a1 as e}from"./framework-d81ad7e5.js";const p={},t=e(`<h3 id="代理服务" tabindex="-1"><a class="header-anchor" href="#代理服务" aria-hidden="true">#</a> 代理服务</h3><ol><li>代理区别 区别在于代理的对象不一样 正向代理代理的对象是客户端 反向代理代理的对象是服务端</li><li>反向代理 语法：proxy_pass URL 位置：loaction</li></ol><div class="language-nginx" data-ext="nginx"><pre class="language-nginx"><code><span class="token comment">#代理端口</span>
<span class="token comment">#场景：服务器80端口开放，8080端口对外关闭，客户端需要访问到8080</span>
<span class="token comment">#在nginx中配置proxy_pass代理转发时，如果在proxy_pass后面的url加/，表示绝对根路径；如果没有/，表示相对路径，把匹配的路径部分也给代理走</span>
<span class="token directive"><span class="token keyword">server</span></span> <span class="token punctuation">{</span>
    <span class="token directive"><span class="token keyword">listen</span> <span class="token number">80</span></span><span class="token punctuation">;</span>
    <span class="token directive"><span class="token keyword">location</span> /</span> <span class="token punctuation">{</span>
        <span class="token directive"><span class="token keyword">proxy_pass</span> http://127.0.0.1:8080/</span><span class="token punctuation">;</span>
        <span class="token directive"><span class="token keyword">proxy_redirect</span> default</span><span class="token punctuation">;</span>

        <span class="token directive"><span class="token keyword">proxy_set_header</span> Host <span class="token variable">$http_host</span></span><span class="token punctuation">;</span>
        <span class="token directive"><span class="token keyword">proxy_set_header</span> X-Real-IP <span class="token variable">$remote_addr</span></span><span class="token punctuation">;</span> <span class="token comment">#获取客户端真实IP</span>

        <span class="token directive"><span class="token keyword">proxy_connect_timeout</span> <span class="token number">30</span></span><span class="token punctuation">;</span> <span class="token comment">#超时时间</span>
        <span class="token directive"><span class="token keyword">proxy_send_timeout</span> <span class="token number">60</span></span><span class="token punctuation">;</span>
        <span class="token directive"><span class="token keyword">proxy_read_timeout</span> <span class="token number">60</span></span><span class="token punctuation">;</span>

        <span class="token directive"><span class="token keyword">proxy_buffer_size</span> <span class="token number">32k</span></span><span class="token punctuation">;</span>
        <span class="token directive"><span class="token keyword">proxy_buffering</span> <span class="token boolean">on</span></span><span class="token punctuation">;</span> <span class="token comment">#开启缓冲区,减少磁盘io</span>
        <span class="token directive"><span class="token keyword">proxy_buffers</span> <span class="token number">4</span> <span class="token number">128k</span></span><span class="token punctuation">;</span>
        <span class="token directive"><span class="token keyword">proxy_busy_buffers_size</span> <span class="token number">256k</span></span><span class="token punctuation">;</span>
        <span class="token directive"><span class="token keyword">proxy_max_temp_file_size</span> <span class="token number">256k</span></span><span class="token punctuation">;</span> <span class="token comment">#当超过内存允许储蓄大小，存到文件</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><h3 id="负载均衡和缓存服务" tabindex="-1"><a class="header-anchor" href="#负载均衡和缓存服务" aria-hidden="true">#</a> 负载均衡和缓存服务</h3><ol><li>负载均衡 负载均衡的实现方法就是上面的反向代理 。将客户的请求通过 nginx 分发（反向代理）到一组多台不同的服务器上 这一组服务器我们称为 服务池（upstream server），池内的每一个服务器称为一个 单元，服务池内将对每一个单元进行请求轮训，实现负载均衡</li></ol><div class="language-nginx" data-ext="nginx"><pre class="language-nginx"><code><span class="token comment">#配置</span>
<span class="token comment">#语法：upstream name ...</span>
<span class="token comment">#位置：http</span>

<span class="token directive"><span class="token keyword">upstream</span> <span class="token comment">#自定义组名 {</span>
    server x1.baidu.com</span><span class="token punctuation">;</span> <span class="token comment">#可以是域名</span>
    <span class="token directive"><span class="token keyword">server</span> x2.baidu.com</span><span class="token punctuation">;</span>
    <span class="token comment">#server x3.baidu.com</span>
    <span class="token comment">#down 不参与负载均衡</span>
    <span class="token comment">#weight=5; 权重，越高分配越多</span>
    <span class="token comment">#backup; 预留的备份服务器</span>
     <span class="token comment">#max_fails 允许失败的次数</span>
     <span class="token comment">#fail_timeout 超过失败次数后，服务暂停时间</span>
      <span class="token comment">#max_coons 限制最大的接受的连接数</span>
      <span class="token comment">#根据服务器性能不同，配置适合的参数</span>

    <span class="token comment">#server 106.xx.xx.xxx; 可以是ip</span>
    <span class="token comment">#server 106.xx.xx.xxx:8080; 可以带端口号</span>
    <span class="token comment">#server unix:/tmp/xxx; 支出socket方式</span>
<span class="token punctuation">}</span>
</code></pre></div><ul><li>假设我们有三台服务器，并且假设它们的IP地址，前端负载均衡服务器A（127.0.0.1），后台服务器B（127.0.0.2），后台服务器C（127.0.0.3）</li><li>新建文件 proxy.conf，内容如下， 反向代理配置</li></ul><div class="language-conf" data-ext="conf"><pre class="language-conf"><code> 
proxy_redirect default;
proxy_set_header Host $http_host;
proxy_set_header X-Real-IP $remote_addr;
proxy_connect_timeout 30;
proxy_send_timeout 60;
proxy_read_timeout 60;
proxy_buffer_size 32k;
proxy_buffering on;
proxy_buffers 4 128k;
proxy_busy_buffers_size 256k;
proxy_max_temp_file_size 256k;

#服务器A的配置
http {
    ...
    upstream xxx {
        server 127.0.0.2;
        server 127.0.0.3;
    }
    server {
        liseten 80;
        server_name localhost;
        location / {
            proxy_pass http://xxx #upstream 对应自定义名称
            include proxy.conf;
        }
    }
}

#服务器B、服务器C的配置
server {
    liseten 80;
    server_name localhost;
    location / {
         index index.html
    }
}
</code></pre></div><p>调度算法</p><ul><li>轮训：按时间顺序逐一分配到不同的后端服务器</li><li>加权轮训：weight值越大，分配到的几率越高</li><li>ip_hash：每个请求按访问IP的hash结果分配，这样来自同一个IP固定访问一个后端服务器</li><li>least_conn：最少链接数，哪个机器连接数少就分发给谁</li><li>url_hash：按照访问的URL的hash结果来分配请求，每一个URL定向到同一个后端服务器</li><li>hash关键数值：hash自定义key ip_hash 配置</li></ul><div class="language-conf" data-ext="conf"><pre class="language-conf"><code>upstream xxx {
        ip_hash;
        server 127.0.0.2;
        server 127.0.0.3;
  }
ip_hash存在缺陷，当前端服务器再多一层时，将获取不到用户的正确IP，获取的将是前一个前端服务器的IP，因此 nginx1.7.2版本推出了 url_hash
url_hash 配置
upstream xxx {
        hash $request_uri;
        server 127.0.0.2;
        server 127.0.0.3;
  }





</code></pre></div>`,11),o=[t];function c(r,l){return s(),a("div",null,o)}const k=n(p,[["render",c],["__file","use_d_loadrunner.html.vue"]]);export{k as default};
