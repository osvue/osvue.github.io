import{_ as o}from"./os-d894ccda.js";import{_ as p,r,o as l,c as i,b as s,d as a,e,a as u}from"./app-215c512d.js";const c={},m={href:"https://nacos.io/zh-cn/docs/what-is-nacos.html",target:"_blank",rel:"noopener noreferrer"},d={href:"https://github.com/alibaba/nacos",target:"_blank",rel:"noopener noreferrer"};function k(g,n){const t=r("ExternalLinkIcon");return l(),i("div",null,[n[12]||(n[12]=s("h2",{id:"naocs-支持-ap和-cp-的切换",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#naocs-支持-ap和-cp-的切换","aria-hidden":"true"},"#"),a(" Naocs 支持 AP和 CP 的切换")],-1)),s("ol",null,[s("li",null,[s("p",null,[n[1]||(n[1]=a("参考地址")),s("a",m,[n[0]||(n[0]=a("Alibaba_Nacos")),e(t)])])]),s("li",null,[s("p",null,[n[3]||(n[3]=s("strong",null,"关于下载",-1)),n[4]||(n[4]=a(" 从")),s("a",d,[n[2]||(n[2]=a("github")),e(t)]),n[5]||(n[5]=a(" 下载发布版的jar, 受限于网络的因素,时间长且容易失败, 另一个就是如果你的本地是 ")),n[6]||(n[6]=s("strong",null,"Mysql 8.0+",-1)),n[7]||(n[7]=a(" , 还需要修改他的源码类, ")),n[8]||(n[8]=s("strong",null,"主要是为了升级Class",-1)),n[9]||(n[9]=a(" ,综上所述,推荐下载sources, 手工 ")),n[10]||(n[10]=s("strong",null,"mvn clean package",-1))])]),n[11]||(n[11]=u(`<li><p><strong>关于安全</strong> 在Nacos 启动时, 需要输入nacos/nacos , 来进行登录, 很麻烦,Nacos 默认使用了 <strong>Spring Security</strong> 来进行安全登录, SO ~ ~ ,在做完第一步的下载后, 修改 <strong>/conf/application.properties</strong> 如下</p></li><li><div class="language-properties" data-ext="properties"><pre class="language-properties"><code>
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

</code></pre></div></li><li><p>因为我的MySQL 是 8.0+, 所以会麻烦一些</p></li>`,5))]),n[13]||(n[13]=s("p",null,[s("img",{src:o,alt:""})],-1))])}const b=p(c,[["render",k],["__file","nacos_b_apcp.html.vue"]]);export{b as default};
