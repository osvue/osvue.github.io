import{_ as p,r as l,o as c,c as r,b as a,d as s,e,a as o}from"./app-215c512d.js";const i={},u={href:"https://nacos.io/zh-cn/docs/quick-start-spring-cloud.html",target:"_blank",rel:"noopener noreferrer"},d={href:"https://github.com/nacos-group/nacos-examples/tree/master/nacos-spring-cloud-example/nacos-spring-cloud-config-example",target:"_blank",rel:"noopener noreferrer"},k={href:"https://mvnrepository.com/artifact/com.alibaba.cloud/spring-cloud-starter-alibaba-nacos-config",target:"_blank",rel:"noopener noreferrer"},g={href:"https://mvnrepository.com/artifact/com.alibaba.cloud/spring-cloud-starter-alibaba-nacos-config",target:"_blank",rel:"noopener noreferrer"},m={href:"https://mvnrepository.com/artifact/com.alibaba.cloud/spring-cloud-starter-alibaba-nacos-config",target:"_blank",rel:"noopener noreferrer"},f={href:"https://github.com/spring-cloud-incubator/spring-cloud-alibaba/wiki/%E7%89%88%E6%9C%AC%E8%AF%B4%E6%98%8E",target:"_blank",rel:"noopener noreferrer"},y={href:"https://docs.spring.io/spring-boot/docs/current/reference/html/boot-features-profiles.html#boot-features-profiles",target:"_blank",rel:"noopener noreferrer"},b={href:"https://nacos.io/zh-cn/docs/open-API.html",target:"_blank",rel:"noopener noreferrer"};function x(v,n){const t=l("ExternalLinkIcon");return c(),r("div",null,[n[26]||(n[26]=a("h2",{id:"启动配置管理",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#启动配置管理","aria-hidden":"true"},"#"),s(" 启动配置管理")],-1)),a("p",null,[a("a",u,[n[0]||(n[0]=s("参考阿里巴巴Nacos文档")),e(t)])]),a("p",null,[n[2]||(n[2]=s("启动了 Nacos server 后，您就可以参考以下示例代码，为您的 Spring Cloud 应用启动 Nacos 配置管理服务了。完整示例代码请参考：")),a("a",d,[n[1]||(n[1]=s("nacos-spring-cloud-config-example")),e(t)])]),n[27]||(n[27]=a("ol",null,[a("li",null,"添加依赖：")],-1)),n[28]||(n[28]=a("div",{class:"language-text","data-ext":"text"},[a("pre",{class:"language-text"},[a("code",null,`<dependency>
    <groupId>com.alibaba.cloud</groupId>
    <artifactId>spring-cloud-starter-alibaba-nacos-config</artifactId>
    <version>\${latest.version}</version>
</dependency>
`)])],-1)),a("p",null,[n[6]||(n[6]=a("strong",null,"注意",-1)),n[7]||(n[7]=s("：版本 ")),a("a",k,[n[3]||(n[3]=s("2.1.x.RELEASE")),e(t)]),n[8]||(n[8]=s(" 对应的是 Spring Boot 2.1.x 版本。版本 ")),a("a",g,[n[4]||(n[4]=s("2.0.x.RELEASE")),e(t)]),n[9]||(n[9]=s(" 对应的是 Spring Boot 2.0.x 版本，版本 ")),a("a",m,[n[5]||(n[5]=s("1.5.x.RELEASE")),e(t)]),n[10]||(n[10]=s(" 对应的是 Spring Boot 1.5.x 版本。"))]),a("p",null,[n[12]||(n[12]=s("更多版本对应关系参考：")),a("a",f,[n[11]||(n[11]=s("版本说明 Wiki")),e(t)])]),n[29]||(n[29]=o(`<ol><li>在 <code>bootstrap.properties</code> 中配置 Nacos server 的地址和应用名</li></ol><div class="language-text" data-ext="text"><pre class="language-text"><code>spring.cloud.nacos.config.server-addr=127.0.0.1:8848

spring.application.name=example
</code></pre></div><p>说明：之所以需要配置 <code>spring.application.name</code> ，是因为它是构成 Nacos 配置管理 <code>dataId</code>字段的一部分。</p><p>在 Nacos Spring Cloud 中，<code>dataId</code> 的完整格式如下：</p><div class="language-plain" data-ext="plain"><pre class="language-plain"><code>\${prefix}-\${spring.profile.active}.\${file-extension}
</code></pre></div>`,5)),a("ul",null,[n[18]||(n[18]=a("li",null,[a("code",null,"prefix"),s(" 默认为 "),a("code",null,"spring.application.name"),s(" 的值，也可以通过配置项 "),a("code",null,"spring.cloud.nacos.config.prefix"),s("来配置。")],-1)),a("li",null,[n[14]||(n[14]=a("code",null,"spring.profile.active",-1)),n[15]||(n[15]=s(" 即为当前环境对应的 profile，详情可以参考 ")),a("a",y,[n[13]||(n[13]=s("Spring Boot文档")),e(t)]),n[16]||(n[16]=s("。 ")),n[17]||(n[17]=a("strong",null,[s("注意：当 "),a("code",null,"spring.profile.active"),s(" 为空时，对应的连接符 "),a("code",null,"-"),s(" 也将不存在，dataId 的拼接格式变成 "),a("code",null,"${prefix}.${file-extension}")],-1))]),n[19]||(n[19]=a("li",null,[a("code",null,"file-exetension"),s(" 为配置内容的数据格式，可以通过配置项 "),a("code",null,"spring.cloud.nacos.config.file-extension"),s(" 来配置。目前只支持 "),a("code",null,"properties"),s(" 和 "),a("code",null,"yaml"),s(" 类型。")],-1))]),n[30]||(n[30]=a("ol",null,[a("li",null,[s("通过 Spring Cloud 原生注解 "),a("code",null,"@RefreshScope"),s(" 实现配置自动更新：")])],-1)),n[31]||(n[31]=a("div",{class:"language-text","data-ext":"text"},[a("pre",{class:"language-text"},[a("code",null,`@RestController
@RequestMapping("/config")
@RefreshScope
public class ConfigController {

    @Value("\${useLocalCache:false}")
    private boolean useLocalCache;

    @RequestMapping("/get")
    public boolean get() {
        return useLocalCache;
    }
}
`)])],-1)),a("ol",null,[a("li",null,[n[21]||(n[21]=s("首先通过调用 ")),a("a",b,[n[20]||(n[20]=s("Nacos Open API")),e(t)]),n[22]||(n[22]=s(" 向 Nacos Server 发布配置：dataId 为")),n[23]||(n[23]=a("code",null,"example.properties",-1)),n[24]||(n[24]=s("，内容为")),n[25]||(n[25]=a("code",null,"useLocalCache=true",-1))])]),n[32]||(n[32]=o(`<div class="language-text" data-ext="text"><pre class="language-text"><code>curl -X POST &quot;http://127.0.0.1:8848/nacos/v1/cs/configs?dataId=example.properties&amp;group=DEFAULT_GROUP&amp;content=useLocalCache=true&quot;
</code></pre></div><ol><li>运行 <code>NacosConfigApplication</code>，调用 <code>curl http://localhost:8080/config/get</code>，返回内容是 <code>true</code>。</li></ol><div class="language-xml" data-ext="xml"><pre class="language-xml"><code>  <span class="token comment">&lt;!--nacos-config--&gt;</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>com.alibaba.cloud<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>spring-cloud-starter-alibaba-nacos-config<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">&gt;</span></span>
    <span class="token comment">&lt;!--nacos-discovery--&gt;</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>com.alibaba.cloud<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>spring-cloud-starter-alibaba-nacos-discovery<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><p>项目启动时, 首先去配置中心拉取配置,<code>SpringBoot</code>启动时加载配置文件是有优先级的,bootstrap 高于application</p><hr><h3 id="bootstrap-yml" tabindex="-1"><a class="header-anchor" href="#bootstrap-yml" aria-hidden="true">#</a> bootstrap.yml</h3><div class="language-yaml" data-ext="yml"><pre class="language-yaml"><code><span class="token comment"># nacos配置</span>
<span class="token key atrule">server</span><span class="token punctuation">:</span>
  <span class="token key atrule">port</span><span class="token punctuation">:</span> <span class="token number">9001</span>

<span class="token key atrule">spring</span><span class="token punctuation">:</span>
  <span class="token key atrule">application</span><span class="token punctuation">:</span>
    <span class="token key atrule">name</span><span class="token punctuation">:</span> alibaba<span class="token punctuation">-</span>provider
  <span class="token key atrule">cloud</span><span class="token punctuation">:</span>
    <span class="token key atrule">nacos</span><span class="token punctuation">:</span>
      <span class="token key atrule">discovery</span><span class="token punctuation">:</span>
        <span class="token key atrule">server-addr</span><span class="token punctuation">:</span> 127.0.0.1<span class="token punctuation">:</span><span class="token number">8848</span> <span class="token comment">#Nacos服务注册中心地址</span>
      <span class="token key atrule">config</span><span class="token punctuation">:</span>
        <span class="token key atrule">server-addr</span><span class="token punctuation">:</span> 127.0.0.1<span class="token punctuation">:</span><span class="token number">8848</span> <span class="token comment">#Nacos作为配置中心地址</span>
        <span class="token key atrule">file-extension</span><span class="token punctuation">:</span> yml <span class="token comment">#指定yaml格式的配置</span>
<span class="token comment">#        group: DEV_GROUP</span>
<span class="token comment">#        namespace: 7d8f0f5a-6a53-4785-9686-dd460158e5d4</span>


<span class="token comment"># \${spring.application.name}-\${spring.profile.active}.\${spring.cloud.nacos.config.file-extension}</span>
<span class="token comment"># alibaba-provider-dev.yml</span>

<span class="token comment"># alibaba-provider-test.yml   ----&gt; config.info</span>
</code></pre></div><p>远程 文件名称:<code>alibaba-provider-dev.yml</code></p><p>修改Nacos配置, 实时自带的动态刷新!!!</p><hr><h2 id="nacos配置中心高级配置-分类配置" tabindex="-1"><a class="header-anchor" href="#nacos配置中心高级配置-分类配置" aria-hidden="true">#</a> Nacos配置中心高级配置---分类配置</h2><ul><li>NameSpace 区分部署环境</li><li>Group 逻辑分区</li><li>Data ID</li></ul><h3 id="data-id-通过profile-来区分两套环境" tabindex="-1"><a class="header-anchor" href="#data-id-通过profile-来区分两套环境" aria-hidden="true">#</a> Data ID , 通过Profile 来区分两套环境</h3><div class="language-yaml" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">spring</span><span class="token punctuation">:</span>
  <span class="token key atrule">profiles</span><span class="token punctuation">:</span>
    <span class="token key atrule">active</span><span class="token punctuation">:</span> dev
<span class="token key atrule">spring</span><span class="token punctuation">:</span>
  <span class="token key atrule">profiles</span><span class="token punctuation">:</span>
    <span class="token key atrule">active</span><span class="token punctuation">:</span> test
</code></pre></div><div class="language-text" data-ext="text"><pre class="language-text"><code># alibaba-provider-dev.yaml
# alibaba-provider-test.yaml
</code></pre></div><h3 id="group-通过group-来区分环境" tabindex="-1"><a class="header-anchor" href="#group-通过group-来区分环境" aria-hidden="true">#</a> Group 通过Group 来区分环境</h3><div class="language-yaml" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">spring</span><span class="token punctuation">:</span>
  <span class="token key atrule">application</span><span class="token punctuation">:</span>
    <span class="token key atrule">name</span><span class="token punctuation">:</span> nacos<span class="token punctuation">-</span>config
  <span class="token key atrule">cloud</span><span class="token punctuation">:</span>
    <span class="token key atrule">nacos</span><span class="token punctuation">:</span>
      <span class="token key atrule">discovery</span><span class="token punctuation">:</span>
        <span class="token key atrule">server-addr</span><span class="token punctuation">:</span> localhost<span class="token punctuation">:</span><span class="token number">8848</span> <span class="token comment">#Nacos服务注册中心地址</span>
      <span class="token key atrule">config</span><span class="token punctuation">:</span>
        <span class="token key atrule">server-addr</span><span class="token punctuation">:</span> localhost<span class="token punctuation">:</span><span class="token number">8848</span> <span class="token comment">#Nacos作为配置中心地址</span>
        <span class="token key atrule">file-extension</span><span class="token punctuation">:</span> yaml <span class="token comment">#指定yaml格式的配置</span>
        <span class="token key atrule">group</span><span class="token punctuation">:</span> DEV_GROUP
</code></pre></div><h3 id="namespace" tabindex="-1"><a class="header-anchor" href="#namespace" aria-hidden="true">#</a> NameSpace</h3><div class="language-yaml" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">spring</span><span class="token punctuation">:</span>
  <span class="token key atrule">application</span><span class="token punctuation">:</span>
    <span class="token key atrule">name</span><span class="token punctuation">:</span> nacos<span class="token punctuation">-</span>config
  <span class="token key atrule">cloud</span><span class="token punctuation">:</span>
    <span class="token key atrule">nacos</span><span class="token punctuation">:</span>
      <span class="token key atrule">discovery</span><span class="token punctuation">:</span>
        <span class="token key atrule">server-addr</span><span class="token punctuation">:</span> localhost<span class="token punctuation">:</span><span class="token number">8848</span> <span class="token comment">#Nacos服务注册中心地址</span>
      <span class="token key atrule">config</span><span class="token punctuation">:</span>
        <span class="token key atrule">server-addr</span><span class="token punctuation">:</span> localhost<span class="token punctuation">:</span><span class="token number">8848</span> <span class="token comment">#Nacos作为配置中心地址</span>
        <span class="token key atrule">file-extension</span><span class="token punctuation">:</span> yaml <span class="token comment">#指定yaml格式的配置</span>
        <span class="token key atrule">group</span><span class="token punctuation">:</span> DEV_GROUP
        <span class="token key atrule">namespace</span><span class="token punctuation">:</span> 7d8f0f5a<span class="token punctuation">-</span>6a53<span class="token punctuation">-</span>4785<span class="token punctuation">-</span>9686<span class="token punctuation">-</span>dd460158e5d4
</code></pre></div><p>集群更新中...............................</p>`,20))])}const N=p(i,[["render",x],["__file","nacos_a.html.vue"]]);export{N as default};
