import{_ as s,M as o,p as c,q as l,R as a,t as n,N as i,a1 as t}from"./framework-d81ad7e5.js";const p={},d=t(`<h2 id="规则" tabindex="-1"><a class="header-anchor" href="#规则" aria-hidden="true">#</a> 规则</h2><h3 id="nginx-location语法" tabindex="-1"><a class="header-anchor" href="#nginx-location语法" aria-hidden="true">#</a> nginx location语法</h3><p>基本语法：<code>location [=|||^~] /uri/ { … }</code></p><div class="language-text" data-ext="text"><pre class="language-text"><code>= 严格匹配。如果这个查询匹配，那么将停止搜索并立即处理此请求。~ 为区分大小写匹配(可用正则表达式)

!~为区分大小写不匹配

~ 为不区分大小写匹配(可用正则表达式)

!~*为不区分大小写不匹配

^~ 如果把这个前缀用于一个常规字符串,那么告诉nginx 如果路径匹配那么不测试正则表达式。

</code></pre></div><p>示例</p><div class="language-nginx" data-ext="nginx"><pre class="language-nginx"><code><span class="token directive"><span class="token keyword">Syntax:</span>	location [ = | ~ | ~* | ^~ ] uri</span> <span class="token punctuation">{</span> ... <span class="token punctuation">}</span>
		<span class="token directive"><span class="token keyword">location</span> @name</span> <span class="token punctuation">{</span> ... <span class="token punctuation">}</span>
Default: —
Context: server, location
</code></pre></div>`,6),r={href:"https://nginx.org/en/docs/http/ngx_http_core_module.html#location",target:"_blank",rel:"noopener noreferrer"},g=a("code",null,"@",-1),u=t(`<p>另外的是修饰符：</p><table><thead><tr><th style="text-align:center;">prefix</th><th style="text-align:center;">priority</th><th>desc</th></tr></thead><tbody><tr><td style="text-align:center;"><code>=</code></td><td style="text-align:center;">1</td><td>路径完全匹配</td></tr><tr><td style="text-align:center;"><code>~</code></td><td style="text-align:center;">3</td><td>区分大小写的正则匹配</td></tr><tr><td style="text-align:center;"><code>~*</code></td><td style="text-align:center;">3</td><td>不区分大小写的正则匹配</td></tr><tr><td style="text-align:center;">^~</td><td style="text-align:center;">2</td><td>前缀匹配</td></tr><tr><td style="text-align:center;"></td><td style="text-align:center;">4</td><td>不带任何修饰的前缀匹配，便于区分后续用 <code>none</code> 替代，Nginx 并无该说法</td></tr></tbody></table><h3 id="_1" tabindex="-1"><a class="header-anchor" href="#_1" aria-hidden="true">#</a> 1. <code>=</code></h3><div class="language-nginx" data-ext="nginx"><pre class="language-nginx"><code><span class="token directive"><span class="token keyword">location</span> = /abc</span> <span class="token punctuation">{</span>
  <span class="token comment"># localhost/abc # 匹配</span>
  <span class="token comment"># localhost/ABC # 据说 windows 大小写不敏感会匹配，但未测试</span>
  <span class="token comment"># localhost/abc/ # 不匹配</span>
  <span class="token comment"># localhost/abcd # 不匹配</span>
  <span class="token comment"># localhost/abc?a=1 # 匹配</span>
<span class="token punctuation">}</span>

<span class="token directive"><span class="token keyword">location</span> = /abc/</span> <span class="token punctuation">{</span>
  <span class="token comment"># localhost/abc/ # 匹配</span>
  <span class="token comment"># localhost/abc # 不匹配</span>
  <span class="token comment"># localhost/abc/a # 不匹配</span>
<span class="token punctuation">}</span>
</code></pre></div><h3 id="_2-、" tabindex="-1"><a class="header-anchor" href="#_2-、" aria-hidden="true">#</a> 2. <code>~</code>、<code>~*</code></h3><div class="language-nginx" data-ext="nginx"><pre class="language-nginx"><code><span class="token comment"># 此处未对结尾做限制，\`~*\` 一致</span>
<span class="token directive"><span class="token keyword">location</span> ~ ^/abc</span> <span class="token punctuation">{</span>
  <span class="token comment"># localhost/abc # 匹配</span>
  <span class="token comment"># localhost/abcd # 匹配</span>
  <span class="token comment"># localhost/abc/a # 匹配</span>
  <span class="token comment"># localhost/abc/a/b # 匹配</span>
<span class="token punctuation">}</span>

<span class="token directive"><span class="token keyword">location</span> ~*.(gif|jpg|jpeg)$</span> <span class="token punctuation">{</span>

匹配任何已 gif、jpg 或 jpeg 结尾的请求。
<span class="token punctuation">}</span>


<span class="token directive"><span class="token keyword">location</span> ^~ /images/</span> <span class="token punctuation">{</span>

匹配任何已 /images/ 开头的任何查询并且停止搜索。任何正则表达式将不会被测试。
<span class="token punctuation">}</span>
<span class="token directive"><span class="token keyword">location</span> ~*.(gif|jpg|jpeg)$</span> <span class="token punctuation">{</span>

匹配任何已 gif、jpg 或 jpeg 结尾的请求。
<span class="token punctuation">}</span>


</code></pre></div><h3 id="_3-、none" tabindex="-1"><a class="header-anchor" href="#_3-、none" aria-hidden="true">#</a> 3. <code>^~</code>、<code>none</code></h3><div class="language-nginx" data-ext="nginx"><pre class="language-nginx"><code><span class="token comment"># ^~ 一致，只是优先度更高</span>
<span class="token directive"><span class="token keyword">location</span> /abc</span> <span class="token punctuation">{</span>
  <span class="token comment"># localhost/abc # 匹配</span>
  <span class="token comment"># localhost/abcd # 匹配</span>
  <span class="token comment"># localhost/abcd/a # 匹配</span>
  <span class="token comment"># localhost/abc/a/b # 匹配</span>
<span class="token punctuation">}</span>




</code></pre></div><h2 id="匹配正则" tabindex="-1"><a class="header-anchor" href="#匹配正则" aria-hidden="true">#</a> 匹配正则</h2><ul><li><code>^~</code> 标识不匹配正则 <code>~* \\.(gif|jpg|jpeg)$</code> 表示使用正则， <code>（~*） \\. 转义符 只要以 .jpg .gif .jpeg $代表结尾</code></li></ul><ul><li>让我们用一个例子解释上面的说法：</li></ul><div class="language-conf" data-ext="conf"><pre class="language-conf"><code>location = / {
[ configuration A ]
}

location / {
[ configuration B ]
}

location /documents/ {
[ configuration C ]
}

location ^~ /images/ {
[ configuration D ]
}

location ~* \\.(gif|jpg|jpeg)$ {
[ configuration E ]
}

</code></pre></div><ol><li>请求“/”匹配配置A</li><li>请求“/index.html”匹配配置B</li><li>请求“/documents/document.html”匹配配置C</li><li>请求“/images/1.gif”匹配配置D</li><li>请求“/documents/1.jpg”匹配配置E。</li></ol>`,13);function h(k,m){const e=o("ExternalLinkIcon");return c(),l("div",null,[d,a("p",null,[n("可以看到 "),a("a",r,[n("location"),i(e)]),n(" 具备两种规则，其中 "),g,n(" 表示内部服务跳转，用于处理异常请求。")]),u])}const f=s(p,[["render",h],["__file","location-rules.html.vue"]]);export{f as default};
