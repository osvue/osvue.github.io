import{_ as t}from"./os-fe4db011.js";import{_ as o,M as c,p,q as l,R as n,t as a,N as e,a1 as r}from"./framework-d81ad7e5.js";const i={},u=n("h2",{id:"naocs-支持-ap和-cp-的切换",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#naocs-支持-ap和-cp-的切换","aria-hidden":"true"},"#"),a(" Naocs 支持 AP和 CP 的切换")],-1),d={href:"https://nacos.io/zh-cn/docs/what-is-nacos.html",target:"_blank",rel:"noopener noreferrer"},m=n("strong",null,"关于下载",-1),_={href:"https://github.com/alibaba/nacos",target:"_blank",rel:"noopener noreferrer"},k=n("strong",null,"Mysql 8.0+",-1),g=n("strong",null,"主要是为了升级Class",-1),h=n("strong",null,"mvn clean package",-1),f=r(`<li><p><strong>关于安全</strong> 在Nacos 启动时, 需要输入nacos/nacos , 来进行登录, 很麻烦,Nacos 默认使用了 <strong>Spring Security</strong> 来进行安全登录, SO ~ ~ ,在做完第一步的下载后, 修改 <strong>/conf/application.properties</strong> 如下</p></li><li><div class="language-properties" data-ext="properties"><pre class="language-properties"><code>
<span class="token comment">#*************** Access Control Related Configurations ***************#</span>
<span class="token comment">### If enable spring security, this option is deprecated in 1.2.0:</span>
<span class="token comment"># Spring Security </span>
<span class="token key attr-name">spring.security.enabled</span><span class="token punctuation">=</span><span class="token value attr-value">false</span>

</code></pre></div></li><li><p><strong>关于Nacos Config 持久化</strong> , 还是在 <strong>/conf/application.properties</strong></p></li><li><div class="language-properties" data-ext="properties"><pre class="language-properties"><code>
<span class="token comment">#*************** Config Module Related Configurations ***************#</span>
<span class="token comment">### If user MySQL as datasource:</span>
<span class="token key attr-name">spring.datasource.platform</span><span class="token punctuation">=</span><span class="token value attr-value">mysql</span>

<span class="token comment">### Count of DB:</span>
<span class="token key attr-name">db.num</span><span class="token punctuation">=</span><span class="token value attr-value">1</span>

<span class="token comment">### Connect URL of DB:</span>
<span class="token key attr-name">db.url.0</span><span class="token punctuation">=</span><span class="token value attr-value">jdbc:mysql://127.0.0.1:3306/mq?characterEncoding=utf8&amp;connectTimeout=1000&amp;socketTimeout=3000&amp;autoReconnect=true</span>
<span class="token key attr-name">db.user</span><span class="token punctuation">=</span><span class="token value attr-value">root</span>
<span class="token key attr-name">db.password</span><span class="token punctuation">=</span><span class="token value attr-value">0</span>

</code></pre></div></li><li><p>因为我的MySQL 是 8.0+, 所以会麻烦一些</p></li>`,5),v=n("p",null,[n("img",{src:t,alt:""})],-1);function b(y,C){const s=c("ExternalLinkIcon");return p(),l("div",null,[u,n("ol",null,[n("li",null,[n("p",null,[a("参考地址"),n("a",d,[a("Alibaba_Nacos"),e(s)])])]),n("li",null,[n("p",null,[m,a(" 从"),n("a",_,[a("github"),e(s)]),a(" 下载发布版的jar, 受限于网络的因素,时间长且容易失败, 另一个就是如果你的本地是 "),k,a(" , 还需要修改他的源码类, "),g,a(" ,综上所述,推荐下载sources, 手工 "),h])]),f]),v])}const S=o(i,[["render",b],["__file","nacos_b_apcp.html.vue"]]);export{S as default};
