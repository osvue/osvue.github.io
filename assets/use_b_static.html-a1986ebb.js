import{_ as n,p as s,q as a,a1 as t}from"./framework-d81ad7e5.js";const p={},e=t(`<div class="language-text" data-ext="text"><pre class="language-text"><code>app
----static
    ------resources
    静态文件所在


</code></pre></div><div class="language-nginx" data-ext="nginx"><pre class="language-nginx"><code>
<span class="token directive"><span class="token keyword">location</span> ~ .*\\.(html|htm|gif|jpg|jpeg|bmp|png|ico|txt|js|css)$</span> <span class="token punctuation">{</span>
        <span class="token comment"># 静态文件所在目录</span>
        <span class="token directive"><span class="token keyword">root</span> /app/static</span><span class="token punctuation">;</span>
        <span class="token directive"><span class="token keyword">index</span> index.html</span><span class="token punctuation">;</span>
        <span class="token comment">#expires定义用户浏览器缓存的时间为1天，如果静态页面不常更新，可以设置更长，这样可以节省带宽和缓解服务器的压力</span>
        <span class="token directive"><span class="token keyword">expires</span> <span class="token number">1d</span></span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment"># 页面 访问</span>
<span class="token comment"># 去找寻 static 目录下的  resources/assets/spa.png</span>
<span class="token comment"># http://192.168.1.60/resources/assets/spa.png</span>
<span class="token comment"># http://192.168.1.60/resources/js/vue.js</span>
</code></pre></div><ol><li><p>静态资源类型 非服务器动态运行生成的文件，换句话说，就是可以直接在服务器上找到对应文件的请求 浏览器端渲染：HTML,CSS,JS 图片：JPEG,GIF,PNG 视频：FLV,MPEG 文件：TXT，任意下载文件</p></li><li><p>静态资源服务场景-CDN</p></li></ol><ul><li><p>什么是CDN？例如一个北京用户要请求一个文件，而文件放在的新疆的资源存储中心，如果直接请求新疆距离太远，延迟久。使用nginx静态资源回源，分发给北京的资源存储中心，让用户请求的动态定位到北京的资源存储中心请求，实现传输延迟的最小化</p></li><li><p>nginx静态资源配置</p></li></ul><div class="language-bash" data-ext="sh"><pre class="language-bash"><code>
<span class="token comment"># 配置域：http、server、location</span>

<span class="token comment">#文件高速读取</span>
http <span class="token punctuation">{</span>
     sendfile on<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token comment">#在 sendfile 开启的情况下，开启 tcp_nopush 提高网络包传输效率</span>
<span class="token comment">#tcp_nopush 将文件一次性一起传输给客户端，就好像你有十个包裹，快递员一次送一个，来回十趟，开启后，快递员讲等待你十个包裹都派件，一趟一起送给你</span>
http <span class="token punctuation">{</span>
     sendfile on<span class="token punctuation">;</span>
     tcp_nopush on<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token comment">#tcp_nodelay 开启实时传输，传输方式与 tcp_nopush 相反，追求实时性，但是它只有在长连接下才生效</span>
http <span class="token punctuation">{</span>
     sendfile on<span class="token punctuation">;</span>
     tcp_nopush on<span class="token punctuation">;</span>
     tcp_nodelay on<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">#将访问的文件压缩传输 （减少文件资源大小，提高传输速度）</span>
<span class="token comment">#当访问内容以gif或jpg结尾的资源时</span>
location ~ .*<span class="token punctuation">\\</span>.<span class="token punctuation">(</span>gif<span class="token operator">|</span>jpg<span class="token punctuation">)</span>$ <span class="token punctuation">{</span>
    <span class="token function">gzip</span> on<span class="token punctuation">;</span> <span class="token comment">#开启</span>
    gzip_http_version <span class="token number">1.1</span><span class="token punctuation">;</span> <span class="token comment">#服务器传输版本</span>
    gzip_comp_level <span class="token number">2</span><span class="token punctuation">;</span> <span class="token comment">#压缩比，越高压缩越多，压缩越高可能会消耗服务器性能</span>
    gzip_types text/plain application/javascript application/x-javascript text/javascript text/css application/xml application/xml+rss image/jpeg image/gif image/png<span class="token punctuation">;</span> <span class="token comment">#压缩文件类型</span>
    root /opt/app/code<span class="token punctuation">;</span> <span class="token comment">#对应目录（去该目录下寻找对应文件）</span>
<span class="token punctuation">}</span>

<span class="token comment">#直接访问已压缩文件</span>
<span class="token comment">#当访问路径以download开头时，如www.baidu.com/download/test.img</span>
<span class="token comment">#去/opt/app/code目录下寻找test.img.gz文件，返回到前端时已是可以浏览的img文件</span>
location ~ load^/download <span class="token punctuation">{</span>
    gzip_static on <span class="token comment">#开启;</span>
    tcp_nopush on<span class="token punctuation">;</span>
    root /opt/app/code<span class="token punctuation">;</span>
<span class="token punctuation">}</span>



</code></pre></div><h3 id="实际项目" tabindex="-1"><a class="header-anchor" href="#实际项目" aria-hidden="true">#</a> 实际项目</h3><div class="language-nginx" data-ext="nginx"><pre class="language-nginx"><code>
<span class="token comment"># linux 服务器项目为 8090</span>
<span class="token comment"># 静态路径为 8090后的全路径 在 static 目录下配置</span>
<span class="token comment"># 查看 nginx / logs / assess.log 可</span>
<span class="token comment"># 浏览器 返回静态文件   Status Code: 200 OK (from memory cache)</span>
<span class="token comment"># Response Headers Server: nginx/1.20.1</span>





<span class="token directive"><span class="token keyword">upstream</span> lusifer.os.org</span> <span class="token punctuation">{</span>
    <span class="token comment">#server 192.168.1.60:8881;</span>
    <span class="token comment">#server 192.168.1.60:8882;</span>
    <span class="token directive"><span class="token keyword">server</span> 192.168.1.60:8090</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>



    <span class="token directive"><span class="token keyword">server</span></span> <span class="token punctuation">{</span>
        <span class="token directive"><span class="token keyword">listen</span>       <span class="token number">80</span></span><span class="token punctuation">;</span>
        <span class="token directive"><span class="token keyword">server_name</span>  localhost</span><span class="token punctuation">;</span>

        <span class="token comment">#charset koi8-r;</span>

        <span class="token comment">#access_log  logs/host.access.log  main;</span>
        
     <span class="token directive"><span class="token keyword">location</span> /</span> <span class="token punctuation">{</span>
        <span class="token directive"><span class="token keyword">proxy_pass</span> http://lusifer.os.org</span><span class="token punctuation">;</span>
           <span class="token comment"># root   html;</span>
           <span class="token comment"># index  index.html index.htm;</span>
        <span class="token punctuation">}</span>

 <span class="token directive"><span class="token keyword">location</span> ~ .*\\.(html|htm|gif|jpg|jpeg|bmp|png|ico|txt|js|css)$</span> <span class="token punctuation">{</span>
<span class="token directive"><span class="token keyword">root</span> /app/static</span><span class="token punctuation">;</span>
<span class="token directive"><span class="token keyword">index</span> index.html</span><span class="token punctuation">;</span>
<span class="token comment">#expires定义用户浏览器缓存的时间为1天，如果静态页面不常更新，可以设置更长，这样可以节省带宽和缓解服务器的压力</span>
<span class="token directive"><span class="token keyword">expires</span> <span class="token number">1d</span></span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>


</code></pre></div><h3 id="浏览器缓存" tabindex="-1"><a class="header-anchor" href="#浏览器缓存" aria-hidden="true">#</a> 浏览器缓存</h3><p>HTTP协议定义的缓存机制（如：Expires; Cache-control等 ） 减少服务端的消耗，降低延迟</p><ol><li>浏览器无缓存 <code>浏览器请求 -&gt; 无缓存 -&gt; 请求WEB服务器 -&gt; 请求相应 -&gt; 呈现</code> 在呈现阶段会根据缓存的设置在浏览器中生成缓存</li><li>浏览器有缓存 <code>浏览器请求 -&gt; 有缓存 -&gt; 校验本地缓存时间是否过期 -&gt; 没有过期 -&gt; 呈现</code> 若过期从新请求WEB服务器</li><li>语法配置</li></ol><div class="language-bash" data-ext="sh"><pre class="language-bash"><code>location ~ .*<span class="token punctuation">\\</span>.<span class="token punctuation">(</span>html<span class="token operator">|</span>htm<span class="token punctuation">)</span>$ <span class="token punctuation">{</span>
    expires 12h<span class="token punctuation">;</span> <span class="token comment">#缓存12小时</span>
<span class="token punctuation">}</span>
</code></pre></div><ul><li>服务器响应静态文件时，请求头信息会带上 etag 和 last_modified_since 2个标签值</li><li>浏览器下次去请求时，头信息发送这两个标签，服务器检测文件有没有发生变化，如无,直接头信息</li><li>返 etag 和last_modified_since，状态码为 304 ，浏览器知道内容无改变,于是直接调用本地缓存，这个过程也请求了服务，但是传着的内容极少</li></ul>`,12),o=[e];function c(l,i){return s(),a("div",null,o)}const k=n(p,[["render",c],["__file","use_b_static.html.vue"]]);export{k as default};
