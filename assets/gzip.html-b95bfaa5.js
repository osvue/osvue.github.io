import{_ as n,p as i,q as a,a1 as t}from"./framework-d81ad7e5.js";const e={},p=t(`<h2 id="nginx-gzip" tabindex="-1"><a class="header-anchor" href="#nginx-gzip" aria-hidden="true">#</a> nginx gzip</h2><div class="language-conf" data-ext="conf"><pre class="language-conf"><code>    gzip on;#开启压缩
	gzip_static on;
 	gzip_min_length 500k; 
	# gzip_buffers 4 16k; 
	gzip_comp_level 3;#压缩等级1-9，级别越高压缩率越大，当然压缩时间也就越长（传输快但比较消耗cpu）
    gzip_types text/plain application/x-javascript text/css application/xml text/javascript application/x-httpd-php image/jpeg image/gif image/png; 
    gzip_vary on;

gzip on;
gzip_types text/plain text/css application/json application/javascript text/xml application/xml application/xml+rss text/javascript;
gzip_vary on;
gzip_min_length 1000;
gzip_comp_level 5;
gzip_http_version 1.1;
gzip_proxied any;

</code></pre></div><ul><li>gzip on;：启用 Gzip 压缩。</li><li>gzip_types：指定需要压缩的 MIME 类型。</li><li>gzip_vary on;：在响应头中添加 Vary: Accept-Encoding，告知客户端支持压缩。</li><li>gzip_min_length 1000;：设置最小压缩文件大小，单位为字节。小于此值的文件不会被压缩。</li><li>gzip_comp_level 5;：设置压缩级别，范围为 1（最低）到 9（最高）。较高的压缩级别会消耗更多的 CPU 资源。</li><li>gzip_http_version 1.1;：设置支持压缩的 HTTP 版本。</li><li>gzip_proxied any;：设置是否对代理服务器的响应进行压缩。</li></ul><h4 id="错误信息" tabindex="-1"><a class="header-anchor" href="#错误信息" aria-hidden="true">#</a> 错误信息：</h4><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost sbin<span class="token punctuation">]</span><span class="token comment"># ./nginx -c /usr/local/nginx/conf/nginx.conf</span>
nginx: <span class="token punctuation">[</span>emerg<span class="token punctuation">]</span> unknown directive “gzip_static” <span class="token keyword">in</span> /usr/local/nginx/conf/nginx.conf 
</code></pre></div><ul><li><strong>解决方案</strong></li></ul><ul><li><code>./configure --prefix=/usr/local/nginx --with-http_gzip_static_module</code></li><li><code>make &amp;&amp; make install</code></li></ul>`,7),l=[p];function s(c,o){return i(),a("div",null,l)}const r=n(e,[["render",s],["__file","gzip.html.vue"]]);export{r as default};
