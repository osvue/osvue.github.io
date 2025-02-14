import{_ as n}from"./nginx_location-ca5265ef.js";import{_ as s,p as a,q as o,a1 as e}from"./framework-d81ad7e5.js";const p={},t=e('<p><img src="'+n+`" alt="alt"></p><h2 id="介绍" tabindex="-1"><a class="header-anchor" href="#介绍" aria-hidden="true">#</a> 介绍</h2><div class="language-bash" data-ext="sh"><pre class="language-bash"><code>yum  <span class="token parameter variable">-y</span>  <span class="token function">install</span>  gcc  pcre-devel  zlib-devel  openssl  openssl-devel
<span class="token function">tar</span>  xf    nginx.tar.gz
<span class="token builtin class-name">cd</span>    nginx 
<span class="token comment">## 配置</span>
./configure <span class="token parameter variable">--prefix</span><span class="token operator">=</span>/usr/local/nginx      <span class="token comment">#安装路径 你会看到文件夹多了Makefile这个文件</span>
<span class="token function">make</span> <span class="token operator">&amp;&amp;</span> <span class="token function">make</span>  <span class="token function">install</span> 
<span class="token comment">#完成后，进入</span>
<span class="token builtin class-name">cd</span> sbin /   
./nginx 测试访问
</code></pre></div><h4 id="正向代理-翻墙软件" tabindex="-1"><a class="header-anchor" href="#正向代理-翻墙软件" aria-hidden="true">#</a> 正向代理 : 翻墙软件</h4><h5 id="服务提供方未知-客户端已知" tabindex="-1"><a class="header-anchor" href="#服务提供方未知-客户端已知" aria-hidden="true">#</a> 服务提供方未知 , 客户端已知</h5><h4 id="反向代理-nginx" tabindex="-1"><a class="header-anchor" href="#反向代理-nginx" aria-hidden="true">#</a> 反向代理 : nginx</h4><h5 id="客服端不知道提供服务的到底是谁" tabindex="-1"><a class="header-anchor" href="#客服端不知道提供服务的到底是谁" aria-hidden="true">#</a> 客服端不知道提供服务的到底是谁</h5><div class="custom-container danger"><p class="custom-container-title">切记</p><p>nginx的location 和proxy_pass 有无/(根)结尾的区别</p><p>在location中匹配的url最后有无/结尾，指的是模糊匹配与精确匹配的问题</p><p>在proxy_pass中代理的url最后有无/结尾(不能作为判断依据)，指的是在proxy_pass 指定的url后要不要替换掉location里面匹配到的字符串</p><p>单纯从proxy_pass的问题上来说, 不能以有没有/结尾来判断, 而是以有没有uri来判断.</p><p>只要在 域名:端口 后面加上了任何以/开头的字符串, 就被视为有uri, 规则就会发生改变. 有uri就会把请求的uri拼到proxy_pass的url后面, 然后整个替换掉location里面匹配的字符串.</p><p>举例如下</p><ol><li>没有&quot;/&quot;结尾时，<code>location /abc/def </code>可以匹配/abc/defghi的请求，也可以匹配 <code>/abc/def/ghi ......</code></li><li>有&quot;/&quot;结尾时, <code>location /abc/def/</code> 不能匹配/abc/defghi的请求，只能精确匹配 <code>/abc/def/ghi</code>这样的请求</li></ol><div class="language-nginx" data-ext="nginx"><pre class="language-nginx"><code>
<span class="token comment">#情况1</span>
<span class="token directive"><span class="token keyword">location</span> /proxy/</span> <span class="token punctuation">{</span>
    <span class="token directive"><span class="token keyword">proxy_pass</span> http://myblog.com:8000/</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token comment"># proxy_pass的最终地址就是: http://myblog.com:8000/login.html  </span>
<span class="token comment"># 因为proxy_pass 在端口号后面有以/开头的uri，代表绝对路径，所以会忽略匹配到的/proxy/, 直接将/proxy/ 整个从url里面删除.</span>

<span class="token comment">#情况2</span>
<span class="token directive"><span class="token keyword">location</span> /proxy/</span> <span class="token punctuation">{</span>
    <span class="token directive"><span class="token keyword">proxy_pass</span> http://myblog.com:8000</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token comment">#proxy_pass 代理到 http://myblog.com:8000/proxy/login.html</span>

<span class="token comment">#情况3</span>
<span class="token directive"><span class="token keyword">location</span> /proxy/</span> <span class="token punctuation">{</span>
    <span class="token directive"><span class="token keyword">proxy_pass</span> http://myblog.com:8000/disquz/</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token comment">#proxy_pass 代理到http://myblog.com:8000/disquz/login.html</span>

<span class="token comment">#情况4</span>
<span class="token directive"><span class="token keyword">location</span> /proxy/</span> <span class="token punctuation">{</span>
    <span class="token directive"><span class="token keyword">proxy_pass</span> http://myblog.com:8000/disquz</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token comment"># proxy_pass 代理到http://myblog.com:8000/disquzlogin.html  </span>
<span class="token comment"># 因为在端口号后面有/disquz 以/开头的uri, 所以会将/proxy/完全替换, 故/proxy/login.html 只剩下login.html 拼在url后面就会成为http://myblog.com:8000/disquzlogin.html</span>

<span class="token comment">#情况5</span>
<span class="token directive"><span class="token keyword">location</span> /proxy</span> <span class="token punctuation">{</span>
    <span class="token directive"><span class="token keyword">proxy_pass</span> http://myblog.com:8000/disquz/</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token comment"># proxy_pass 代理到http://myblog.com:8000/disquz//login.html  </span>
<span class="token comment"># 因为匹配到了这个规则 所以把uri里面的/proxy去掉 剩下/login.html, 拼在url后面就是http://myblog.com:8000/disquz//login.html</span>
</code></pre></div></div><h2 id="限制host" tabindex="-1"><a class="header-anchor" href="#限制host" aria-hidden="true">#</a> 限制host</h2><div class="language-conf" data-ext="conf"><pre class="language-conf"><code>    server {
        listen       80;
        server_name  app.com;
        
        if ($host !~* ^app.com$){
        return 403;
        }

    }

</code></pre></div>`,10),c=[t];function l(i,r){return a(),o("div",null,c)}const u=s(p,[["render",l],["__file","index.html.vue"]]);export{u as default};
