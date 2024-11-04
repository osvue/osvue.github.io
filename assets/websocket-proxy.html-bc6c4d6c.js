import{_ as c,M as t,p,q as r,R as s,t as n,N as e,V as i,a1 as l}from"./framework-d81ad7e5.js";const d={},k=s("h2",{id:"介绍",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#介绍","aria-hidden":"true"},"#"),n(" 介绍")],-1),h=s("a",{href:"/backend/nginx-upstream"},"反向代理与负载均衡",-1),u={id:"config",tabindex:"-1"},_=s("a",{class:"header-anchor",href:"#config","aria-hidden":"true"},"#",-1),g={href:"http://nginx.org/en/docs/http/websocket.html",target:"_blank",rel:"noopener noreferrer"},x=l(`<div class="language-nginx" data-ext="nginx"><pre class="language-nginx"><code><span class="token directive"><span class="token keyword">vim</span> /etc/nginx/conf.d/default.conf

<span class="token comment"># 修改为以下内容</span>
server</span> <span class="token punctuation">{</span>
    <span class="token directive"><span class="token keyword">listen</span>       <span class="token number">80</span></span><span class="token punctuation">;</span>
    <span class="token directive"><span class="token keyword">server_name</span>  nginx.example.com</span><span class="token punctuation">;</span>

    <span class="token comment">#charset koi8-r;</span>
    <span class="token directive"><span class="token keyword">access_log</span>  /var/log/nginx/nginx.access.log  main</span><span class="token punctuation">;</span>
    <span class="token directive"><span class="token keyword">error_log</span>  /var/log/nginx/nginx.error.log warn</span><span class="token punctuation">;</span>

    <span class="token directive"><span class="token keyword">location</span> /chat/</span> <span class="token punctuation">{</span>
        <span class="token directive"><span class="token keyword">proxy_pass</span> http://echo.websocket.org</span><span class="token punctuation">;</span>
        <span class="token directive"><span class="token keyword">proxy_http_version</span> 1.1</span><span class="token punctuation">;</span>
        <span class="token directive"><span class="token keyword">proxy_set_header</span> Upgrade <span class="token variable">$http_upgrade</span></span><span class="token punctuation">;</span>
        <span class="token directive"><span class="token keyword">proxy_set_header</span> Connection <span class="token string">&quot;upgrade&quot;</span></span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

nginx -s reload <span class="token comment"># 重载配置</span>
</code></pre></div><h2 id="test" tabindex="-1"><a class="header-anchor" href="#test" aria-hidden="true">#</a> test</h2>`,2),m={href:"http://www.websocket.org/echo.html",target:"_blank",rel:"noopener noreferrer"},w=s("code",null,"ws://echo.websocket.org",-1),v=s("code",null,"ws://nginx.example.com/chat/",-1);function f(b,y){const o=t("RouterLink"),a=t("ExternalLinkIcon");return p(),r("div",null,[k,s("p",null,[n("在理解"),h,n("后就可以快速实现 websocket 的反向代理，在之前的"),e(o,{to:"/backend/nginx-directives.html#alias"},{default:i(()=>[n("配置")]),_:1}),n(" 的配置上进行修改。")]),s("h2",u,[_,n(),s("a",g,[n("config"),e(a)])]),x,s("p",null,[n("接着在"),s("a",m,[n("测试页面"),e(a)]),n("将 Location 中的 "),w,n(" 替换为目标地址 "),v,n(" （需要修改本地 DNS），Connect 成功即为成功。")])])}const L=c(d,[["render",f],["__file","websocket-proxy.html.vue"]]);export{L as default};
