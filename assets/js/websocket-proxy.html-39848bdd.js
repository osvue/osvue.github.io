import{_ as r,r as o,o as i,c as l,b as e,d as s,e as a,w as c,a as d}from"./app-215c512d.js";const k={},u={id:"config",tabindex:"-1"},g={href:"http://nginx.org/en/docs/http/websocket.html",target:"_blank",rel:"noopener noreferrer"},x={href:"http://www.websocket.org/echo.html",target:"_blank",rel:"noopener noreferrer"};function m(w,n){const p=o("RouterLink"),t=o("ExternalLinkIcon");return i(),l("div",null,[n[15]||(n[15]=e("h2",{id:"介绍",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#介绍","aria-hidden":"true"},"#"),s(" 介绍")],-1)),e("p",null,[n[1]||(n[1]=s("在理解")),n[2]||(n[2]=e("a",{href:"/backend/nginx-upstream"},"反向代理与负载均衡",-1)),n[3]||(n[3]=s("后就可以快速实现 websocket 的反向代理，在之前的")),a(p,{to:"/backend/nginx-directives.html#alias"},{default:c(()=>n[0]||(n[0]=[s("配置")])),_:1,__:[0]}),n[4]||(n[4]=s(" 的配置上进行修改。"))]),e("h2",u,[n[6]||(n[6]=e("a",{class:"header-anchor",href:"#config","aria-hidden":"true"},"#",-1)),n[7]||(n[7]=s()),e("a",g,[n[5]||(n[5]=s("config")),a(t)])]),n[16]||(n[16]=d(`<div class="language-nginx" data-ext="nginx"><pre class="language-nginx"><code><span class="token directive"><span class="token keyword">vim</span> /etc/nginx/conf.d/default.conf

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
</code></pre></div><h2 id="test" tabindex="-1"><a class="header-anchor" href="#test" aria-hidden="true">#</a> test</h2>`,2)),e("p",null,[n[9]||(n[9]=s("接着在")),e("a",x,[n[8]||(n[8]=s("测试页面")),a(t)]),n[10]||(n[10]=s("将 Location 中的 ")),n[11]||(n[11]=e("code",null,"ws://echo.websocket.org",-1)),n[12]||(n[12]=s(" 替换为目标地址 ")),n[13]||(n[13]=e("code",null,"ws://nginx.example.com/chat/",-1)),n[14]||(n[14]=s(" （需要修改本地 DNS），Connect 成功即为成功。"))])])}const f=r(k,[["render",m],["__file","websocket-proxy.html.vue"]]);export{f as default};
