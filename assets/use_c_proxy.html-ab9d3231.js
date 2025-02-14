import{_ as n,p as a,q as s,a1 as e}from"./framework-d81ad7e5.js";const t={},o=e(`<h2 id="nginx跨站访问设置" tabindex="-1"><a class="header-anchor" href="#nginx跨站访问设置" aria-hidden="true">#</a> nginx跨站访问设置</h2><div class="language-bash" data-ext="sh"><pre class="language-bash"><code>location ~ .*<span class="token punctuation">\\</span>.<span class="token punctuation">(</span>html<span class="token operator">|</span>htm<span class="token punctuation">)</span>$ <span class="token punctuation">{</span>
     add_header Access-Control-Allow-Origin *<span class="token punctuation">;</span>
     add_header Access-Control-Allow-Methods GET,POST,PUT,DELETE,OPTIONS<span class="token punctuation">;</span>
     <span class="token comment">#Access-Control-Allow-Credentials true #允许cookie跨域</span>
<span class="token punctuation">}</span>

</code></pre></div><ul><li>在响应中指定 <code>Access-Control-Allow-Credentials</code> 为 <strong>true</strong> 时，<code>Access-Control-Allow-Origin 不能指定为 *</code>，需要指定到具体域名</li><li>相关跨域内容可参考 Laravel 跨域功能中间件 使用代码实现跨域，原理与nginx跨域配置相同</li><li></li></ul><h3 id="防盗链" tabindex="-1"><a class="header-anchor" href="#防盗链" aria-hidden="true">#</a> 防盗链</h3><ul><li>防止服务器内的静态资源被其他网站所套用 - 首先，需要理解一个nginx变量 - <code>$http_referer</code> #表示当前请求上一次页面访问的地址，换句话说，访问 <code>www.baidu.com </code>主页，这是第一次访问，所以 <code>$http_referer</code> 为空， - 但是 访问此页面的时候还需要获取一张首页图片，再请求这张图片的时候<code> $http_referer</code> 就为 <code>www.baidu.com</code> 然后配置</li></ul><div class="language-bash" data-ext="sh"><pre class="language-bash"><code>location ~ .*<span class="token punctuation">\\</span>.<span class="token punctuation">(</span>jpg<span class="token operator">|</span>gif<span class="token punctuation">)</span>$ <span class="token punctuation">{</span>
    <span class="token comment">#valid_referers 表示我们允许哪些 $http_referer 来访问</span>
    <span class="token comment">#none 表示没有带 $http_referer，如第一次访问时 $http_referer 为空</span>
    <span class="token comment">#blocked 表示 $http_referer 不是标准的地址，非正常域名等</span>
    <span class="token comment">#只允许此ip</span>
    valid_referers none blocked <span class="token number">127</span>.xxx.xxx.xx
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token variable">$invalid_referer</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token comment">#不满足情况下变量值为1</span>
        <span class="token builtin class-name">return</span> <span class="token number">403</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
 


</code></pre></div>`,6),c=[o];function p(l,r){return a(),s("div",null,c)}const u=n(t,[["render",p],["__file","use_c_proxy.html.vue"]]);export{u as default};
