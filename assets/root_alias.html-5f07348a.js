import{_ as t,M as e,p as o,q as c,R as n,t as a,N as p,a1 as r}from"./framework-d81ad7e5.js";const d={},l=n("h2",{id:"前言",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#前言","aria-hidden":"true"},"#"),a(" 前言")],-1),i={href:"https://nginx.org/en/docs/http/ngx_http_core_module.html#root",target:"_blank",rel:"noopener noreferrer"},k=r(`<p>其实在了解这个的时候，突然就想起 ”Linux 中一切皆文件“ 的概念（可能有些牵强），alias（root）的作用即将 URL 映射为文件路径，然后返回对应的静态文件。</p><blockquote><p>待如今了解到 <code>$request_filename</code> 后发现与想法一致。</p></blockquote><h3 id="alias和root的区别" tabindex="-1"><a class="header-anchor" href="#alias和root的区别" aria-hidden="true">#</a> alias和root的区别</h3><div class="language-nginx" data-ext="nginx"><pre class="language-nginx"><code><span class="token directive"><span class="token keyword">location</span> /request_path/image/</span> <span class="token punctuation">{</span>
    <span class="token directive"><span class="token keyword">root</span> /local_path/image/</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">#当我们访问 http://xxx.com/request_path/image/cat.png时</span>
<span class="token comment">#将访问 http://xxx.com/request_path/image/local_path/image/cat.png 下的文件</span>

<span class="token directive"><span class="token keyword">location</span> /request_path/image/</span> <span class="token punctuation">{</span>
    <span class="token directive"><span class="token keyword">alias</span> /local_path/image/</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">#当我们访问 http://xxx.com/request_path/image/cat.png时</span>
<span class="token comment">#将访问 http://xxx.com/local_path/image/cat.png 下的文件</span>
</code></pre></div><h2 id="区别" tabindex="-1"><a class="header-anchor" href="#区别" aria-hidden="true">#</a> 区别</h2><p>此中区别与 <a href="/backend/nginx/proxy-pass-rules">proxy_pass</a> 相似。</p><table><thead><tr><th style="text-align:center;">directives</th><th>difference</th></tr></thead><tbody><tr><td style="text-align:center;">root</td><td>将完整的 url 映射到文件路径。</td></tr><tr><td style="text-align:center;">alias</td><td>将 location 后的 url 映射到文件路径。</td></tr></tbody></table><div class="language-nginx" data-ext="nginx"><pre class="language-nginx"><code><span class="token directive"><span class="token keyword">server</span></span> <span class="token punctuation">{</span>
  <span class="token directive"><span class="token keyword">listen</span>       <span class="token number">8083</span></span><span class="token punctuation">;</span>
  <span class="token directive"><span class="token keyword">server_name</span> localhost</span><span class="token punctuation">;</span>

  <span class="token directive"><span class="token keyword">location</span> /root</span> <span class="token punctuation">{</span>
    <span class="token directive"><span class="token keyword">root</span> /usr/share/nginx/html</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token directive"><span class="token keyword">location</span> /alias</span> <span class="token punctuation">{</span>
    <span class="token directive"><span class="token keyword">alias</span> /usr/share/nginx/html</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  
  <span class="token directive"><span class="token keyword">location</span> /root/dir/</span> <span class="token punctuation">{</span>
    <span class="token directive"><span class="token keyword">root</span> /usr/share/nginx/html</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token directive"><span class="token keyword">location</span> /alias/dir/</span> <span class="token punctuation">{</span>
    <span class="token directive"><span class="token keyword">alias</span> /usr/share/nginx/html</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  
  <span class="token directive"><span class="token keyword">location</span> ~* /root(\\d+\\.txt)</span> <span class="token punctuation">{</span>
      <span class="token directive"><span class="token keyword">root</span> /usr/share/nginx/html/<span class="token variable">$1</span></span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token directive"><span class="token keyword">location</span> ~* /alias(\\d+\\.txt)</span> <span class="token punctuation">{</span>
      <span class="token directive"><span class="token keyword">alias</span> /usr/share/nginx/html/<span class="token variable">$1</span></span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><table><thead><tr><th>curl($request)</th><th>$request_filename</th></tr></thead><tbody><tr><td><code>/root</code></td><td><code>/usr/share/nginx/html/root</code></td></tr><tr><td><code>/root/index.html</code></td><td><code>usr/share/nginx/html/root/index.html</code></td></tr><tr><td><code>/alias</code></td><td><code>/usr/share/nginx/html</code></td></tr><tr><td><code>/alias/index.html</code></td><td><code>/usr/share/nginx/html/index.html</code></td></tr><tr><td><code>/root/dir/</code></td><td><code>/usr/share/nginx/html/root/dir/</code></td></tr><tr><td><code>/root/dir/index.html</code></td><td><code>/usr/share/nginx/html/root/dir/index.html</code></td></tr><tr><td><code>/alias/dir/</code></td><td><code>/usr/share/nginx/html</code></td></tr><tr><td><code>/alias/dir/index.html</code></td><td><code>/usr/share/nginx/htmlindex.html</code></td></tr><tr><td><code>/root/123456.txt</code></td><td><code>/usr/share/nginx/html/root/123456.txt</code></td></tr><tr><td><code>/alias/123456.txt</code></td><td><code>/usr/share/nginx/html/123456.txt</code></td></tr><tr><td><code>/alias123456.txt</code></td><td><code>/usr&lt;br/&gt;/share/nginx/html/123456.txt</code></td></tr></tbody></table><p>当使用 <code>alias</code> 且 <code>location</code> 以 <code>/</code> 结尾时需注意 <code>/</code> 被废弃，与 <code>proxy_pass</code> 中情况一致。</p><h3 id="用户真实ip" tabindex="-1"><a class="header-anchor" href="#用户真实ip" aria-hidden="true">#</a> 用户真实IP</h3><p>当一个请求通过多个代理服务器时，用户的IP将会被代理服务器IP覆盖</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token comment">#在第一个代理服务器中设置</span>
    <span class="token builtin class-name">set</span> <span class="token assign-left variable">x_real_ip</span><span class="token operator">=</span><span class="token variable">$remote_addr</span>
<span class="token comment">#最后一个代理服务器中获取</span>
    <span class="token variable">$x_real_ip</span><span class="token operator">=</span>IP1

</code></pre></div>`,13);function u(h,x){const s=e("ExternalLinkIcon");return o(),c("div",null,[l,n("p",null,[a("alias 与 "),n("a",i,[a("root"),p(s)]),a(" 有相似的用法，主要是介绍他们之间的区别。")]),k])}const g=t(d,[["render",u],["__file","root_alias.html.vue"]]);export{g as default};
