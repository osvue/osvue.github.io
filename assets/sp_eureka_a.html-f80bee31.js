import{_ as n,p as a,q as s,a1 as t}from"./framework-d81ad7e5.js";const p="/images/image-20200408165155886.png",e="/images/image-20200408185532993.png",o={},c=t(`<h2 id="eureka原理" tabindex="-1"><a class="header-anchor" href="#eureka原理" aria-hidden="true">#</a> Eureka原理</h2><ol><li><p>本质：存储了每个客户端的注册信息。EurekaClient从EurekaServer同步获取服务注册列表。通过一定的规则选择一个服务进行调用。</p></li><li><p>详解</p></li></ol><ul><li>服务提供者：是一个eureka client，向Eureka Server注册和更新自己的信息，同时能从Eureka Server注册表中获取到其他服务的信息。</li><li>服务注册中心：提供服务注册和发现的功能。每个Eureka Cient向Eureka Server注册自己的信息，也可以通过Eureka Server获取到其他服务的信息达到发现和调用其他服务的目的。</li><li>服务消费者：是一个eureka client，通过Eureka Server获取注册到其上其他服务的信息，从而根据信息找到所需的服务发起远程调用。</li><li>同步复制：Eureka Server之间注册表信息的同步复制，使Eureka Server集群中不同注册表中服务实例信息保持一致。</li><li>远程调用：服务客户端之间的远程调用。</li><li>注册：Client端向Server端注册自身的元数据以供服务发现。</li><li>续约：通过发送心跳到Server以维持和更新注册表中服务实例元数据的有效性。当在一定时长内，Server没有收到Client的心跳信息，将默认服务下线，会把服务实例的信息从注册表中删除。</li><li>下线：Client在关闭时主动向Server注销服务实例元数据，这时Client的服务实例数据将从Server的注册表中删除。</li><li>获取注册表：Client向Server请求注册表信息，用于服务发现，从而发起服务间远程调用。</li></ul><h3 id="register" tabindex="-1"><a class="header-anchor" href="#register" aria-hidden="true">#</a> Register</h3><p><strong>服务注册</strong></p><p>想要参与服务注册发现的实例首先需要向Eureka服务器注册信息</p><p>注册在第一次心跳发生时提交</p><h2 id="renew" tabindex="-1"><a class="header-anchor" href="#renew" aria-hidden="true">#</a> Renew</h2><p><strong>续租，心跳</strong></p><p>Eureka客户需要每30秒发送一次心跳来续租</p><p>10:00 00 第一次</p><p>10:00 30</p><p>10:01</p><p>10:01 30 最后</p><p>更新通知Eureka服务器实例仍然是活动的。如果服务器在90秒内没有看到更新，它将从其注册表中删除实例</p><h2 id="fetch-registry" tabindex="-1"><a class="header-anchor" href="#fetch-registry" aria-hidden="true">#</a> Fetch Registry</h2><p>Eureka客户端从服务器获取注册表信息并将其缓存在本地。</p><p>之后，客户端使用这些信息来查找其他服务。</p><p>通过获取上一个获取周期和当前获取周期之间的增量更新，可以定期(每30秒)更新此信息。</p><p>节点信息在服务器中保存的时间更长(大约3分钟)，因此获取节点信息时可能会再次返回相同的实例。Eureka客户端自动处理重复的信息。</p><p>在获得增量之后，Eureka客户机通过比较服务器返回的实例计数来与服务器协调信息，如果由于某种原因信息不匹配，则再次获取整个注册表信息。</p><h2 id="cancel" tabindex="-1"><a class="header-anchor" href="#cancel" aria-hidden="true">#</a> Cancel</h2><p>Eureka客户端在关闭时向Eureka服务器发送取消请求。这将从服务器的实例注册表中删除实例，从而有效地将实例从通信量中取出。</p><h2 id="time-lag" tabindex="-1"><a class="header-anchor" href="#time-lag" aria-hidden="true">#</a> Time Lag</h2><p>同步时间延迟</p><p>来自Eureka客户端的所有操作可能需要一段时间才能反映到Eureka服务器上，然后反映到其他Eureka客户端上。这是因为eureka服务器上的有效负载缓存，它会定期刷新以反映新信息。Eureka客户端还定期地获取增量。因此，更改传播到所有Eureka客户机可能需要2分钟。</p><h2 id="communication-mechanism" tabindex="-1"><a class="header-anchor" href="#communication-mechanism" aria-hidden="true">#</a> Communication mechanism</h2><p>通讯机制</p><p>Http协议下的Rest请求</p><p>默认情况下Eureka使用Jersey和Jackson以及JSON完成节点间的通讯</p><h2 id="服务注册" tabindex="-1"><a class="header-anchor" href="#服务注册" aria-hidden="true">#</a> 服务注册</h2><p>新建一个web项目，引入starter<code>spring-cloud-starter-netflix-eureka-client</code></p><p>例子：api-listen-order</p><ol><li>pom.xml</li></ol><div class="language-bash" data-ext="sh"><pre class="language-bash"><code>		<span class="token operator">&lt;</span>dependency<span class="token operator">&gt;</span>
			<span class="token operator">&lt;</span>groupId<span class="token operator">&gt;</span>org.springframework.cloud<span class="token operator">&lt;</span>/groupId<span class="token operator">&gt;</span>
			<span class="token operator">&lt;</span>artifactId<span class="token operator">&gt;</span>spring-cloud-starter-netflix-eureka-client<span class="token operator">&lt;</span>/artifactId<span class="token operator">&gt;</span>
		<span class="token operator">&lt;</span>/dependency<span class="token operator">&gt;</span>
</code></pre></div><ol start="2"><li>application.yml</li></ol><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token comment">#注册中心</span>
eureka: 
  client:
    <span class="token comment">#设置服务注册中心的URL</span>
    service-url:                      
      defaultZone: http://root:root@localhost:7900/eureka/
</code></pre></div><h3 id="客户端配置选项" tabindex="-1"><a class="header-anchor" href="#客户端配置选项" aria-hidden="true">#</a> 客户端配置选项</h3><div class="language-properties" data-ext="properties"><pre class="language-properties"><code><span class="token comment">#续约发送间隔默认30秒，心跳间隔</span>
<span class="token key attr-name">eureka.instance.lease-renewal-interval-in-seconds</span><span class="token punctuation">=</span><span class="token value attr-value">5</span>
<span class="token comment">#表示eureka client间隔多久去拉取服务注册信息，默认为30秒，对于api-gateway，如果要迅速获取服务注册状态，可以缩小该值，比如5秒</span>
<span class="token key attr-name">eureka.client.registry-fetch-interval-seconds</span><span class="token punctuation">=</span><span class="token value attr-value">5</span>
<span class="token comment"># 续约到期时间（默认90秒）</span>
<span class="token key attr-name">eureka.instance.lease-expiration-duration-in-seconds</span><span class="token punctuation">=</span><span class="token value attr-value">60</span>
</code></pre></div><h3 id="服务器端配置选项" tabindex="-1"><a class="header-anchor" href="#服务器端配置选项" aria-hidden="true">#</a> 服务器端配置选项</h3><div class="language-properties" data-ext="properties"><pre class="language-properties"><code><span class="token comment">#关闭自我保护模式</span>
<span class="token key attr-name">eureka.server.enable-self-preservation</span><span class="token punctuation">=</span><span class="token value attr-value">false</span>
<span class="token comment">#失效服务间隔</span>
<span class="token key attr-name">eureka.server.eviction-interval-timer-in-ms</span><span class="token punctuation">=</span><span class="token value attr-value">3000</span>
</code></pre></div><h2 id="_11-5-eureka高可用" tabindex="-1"><a class="header-anchor" href="#_11-5-eureka高可用" aria-hidden="true">#</a> 11.5 Eureka高可用</h2><p>高可用：可以通过运行多个Eureka server实例并相互注册的方式实现。Server节点之间会彼此增量地同步信息，从而确保节点中数据一致。</p><ol><li>注册中心改造</li></ol><p>application.yml</p><p>参考：#高可用2个节点的yml</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token comment">#高可用2个节点</span>
<span class="token comment">#应用名称及验证账号</span>
spring: 
  application: 
    name: eureka
    
  security: 
    user: 
      name: root
      password: root

logging:
  level:
    root: debug
    
---
spring:
  profiles: <span class="token number">7901</span>
server: 
  port: <span class="token number">7901</span>
eureka:
  instance:
    hostname: eureka-7901  
  client:
    <span class="token comment">#设置服务注册中心的URL</span>
    service-url:                      
      defaultZone: http://root:root@eureka-7902:7902/eureka/
---    
spring:
  profiles: <span class="token number">7902</span>
server: 
  port: <span class="token number">7902</span>
eureka:
  instance:
    hostname: eureka-7902  
  client:
       <span class="token comment">#设置服务注册中心的URL</span>
    service-url:                      
      defaultZone: http://root:root@eureka-7901:7901/eureka/


</code></pre></div><p>---将配置文件分成2段，每段指定spring.profiles。第一段没有指定，所以共用。</p><ol start="2"><li><p>服务注册改造</p><p>api-listen-order</p></li></ol><div class="language-bash" data-ext="sh"><pre class="language-bash"><code>eureka: 
  client:
    <span class="token comment">#设置服务注册中心的URL</span>
    service-url:                      
      defaultZone: http://root:root@eureka-7901:7901/eureka/,http://root:root@eureka-7902:7902/eureka/
  
</code></pre></div><h4 id="eureka-status-服务状态" tabindex="-1"><a class="header-anchor" href="#eureka-status-服务状态" aria-hidden="true">#</a> /eureka/status 服务状态</h4><p>使用浏览器请求url会返回服务器状态信息</p><div class="language-xml" data-ext="xml"><pre class="language-xml"><code>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>com.netflix.eureka.util.StatusInfo</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>generalStats</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>environment</span><span class="token punctuation">&gt;</span></span>test<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>environment</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>num-of-cpus</span><span class="token punctuation">&gt;</span></span>16<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>num-of-cpus</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>total-avail-memory</span><span class="token punctuation">&gt;</span></span>526mb<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>total-avail-memory</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>current-memory-usage</span><span class="token punctuation">&gt;</span></span>183mb (34%)<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>current-memory-usage</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>server-uptime</span><span class="token punctuation">&gt;</span></span>00:00<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>server-uptime</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>generalStats</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>applicationStats</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>registered-replicas</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>registered-replicas</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>available-replicas</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>available-replicas</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>unavailable-replicas</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>unavailable-replicas</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>applicationStats</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>instanceInfo</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>instanceId</span><span class="token punctuation">&gt;</span></span>localhost<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>instanceId</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>hostName</span><span class="token punctuation">&gt;</span></span>localhost<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>hostName</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>app</span><span class="token punctuation">&gt;</span></span>UNKNOWN<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>app</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ipAddr</span><span class="token punctuation">&gt;</span></span>192.168.29.1<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ipAddr</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>status</span><span class="token punctuation">&gt;</span></span>UP<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>status</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>overriddenstatus</span><span class="token punctuation">&gt;</span></span>UNKNOWN<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>overriddenstatus</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>port</span> <span class="token attr-name">enabled</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>true<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>8080<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>port</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>securePort</span> <span class="token attr-name">enabled</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>false<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>443<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>securePort</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>countryId</span><span class="token punctuation">&gt;</span></span>1<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>countryId</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dataCenterInfo</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>com.netflix.appinfo.InstanceInfo$DefaultDataCenterInfo<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>name</span><span class="token punctuation">&gt;</span></span>MyOwn<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>name</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dataCenterInfo</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>leaseInfo</span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>renewalIntervalInSecs</span><span class="token punctuation">&gt;</span></span>30<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>renewalIntervalInSecs</span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>durationInSecs</span><span class="token punctuation">&gt;</span></span>90<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>durationInSecs</span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>registrationTimestamp</span><span class="token punctuation">&gt;</span></span>0<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>registrationTimestamp</span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>lastRenewalTimestamp</span><span class="token punctuation">&gt;</span></span>0<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>lastRenewalTimestamp</span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>evictionTimestamp</span><span class="token punctuation">&gt;</span></span>0<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>evictionTimestamp</span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>serviceUpTimestamp</span><span class="token punctuation">&gt;</span></span>0<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>serviceUpTimestamp</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>leaseInfo</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>metadata</span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>management.port</span><span class="token punctuation">&gt;</span></span>8080<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>management.port</span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>jmx.port</span><span class="token punctuation">&gt;</span></span>7649<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>jmx.port</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>metadata</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>homePageUrl</span><span class="token punctuation">&gt;</span></span>http://localhost:8080/<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>homePageUrl</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>statusPageUrl</span><span class="token punctuation">&gt;</span></span>http://localhost:8080/actuator/info<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>statusPageUrl</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>healthCheckUrl</span><span class="token punctuation">&gt;</span></span>http://localhost:8080/actuator/health<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>healthCheckUrl</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>vipAddress</span><span class="token punctuation">&gt;</span></span>unknown<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>vipAddress</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>secureVipAddress</span><span class="token punctuation">&gt;</span></span>unknown<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>secureVipAddress</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>isCoordinatingDiscoveryServer</span><span class="token punctuation">&gt;</span></span>false<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>isCoordinatingDiscoveryServer</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>lastUpdatedTimestamp</span><span class="token punctuation">&gt;</span></span>1586328420409<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>lastUpdatedTimestamp</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>lastDirtyTimestamp</span><span class="token punctuation">&gt;</span></span>1586328420519<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>lastDirtyTimestamp</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>instanceInfo</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>com.netflix.eureka.util.StatusInfo</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><p>如果需要json格式 可以加个请求头<code>Accept:application/json</code></p><div class="language-json" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
    <span class="token property">&quot;generalStats&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;environment&quot;</span><span class="token operator">:</span> <span class="token string">&quot;test&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;num-of-cpus&quot;</span><span class="token operator">:</span> <span class="token string">&quot;16&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;total-avail-memory&quot;</span><span class="token operator">:</span> <span class="token string">&quot;517mb&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;current-memory-usage&quot;</span><span class="token operator">:</span> <span class="token string">&quot;45mb (8%)&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;server-uptime&quot;</span><span class="token operator">:</span> <span class="token string">&quot;00:03&quot;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token property">&quot;applicationStats&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;registered-replicas&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;available-replicas&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;unavailable-replicas&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token property">&quot;instanceInfo&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;instanceId&quot;</span><span class="token operator">:</span> <span class="token string">&quot;localhost&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;hostName&quot;</span><span class="token operator">:</span> <span class="token string">&quot;localhost&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;app&quot;</span><span class="token operator">:</span> <span class="token string">&quot;UNKNOWN&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;ipAddr&quot;</span><span class="token operator">:</span> <span class="token string">&quot;192.168.29.1&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;status&quot;</span><span class="token operator">:</span> <span class="token string">&quot;UP&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;overriddenStatus&quot;</span><span class="token operator">:</span> <span class="token string">&quot;UNKNOWN&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;port&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token property">&quot;$&quot;</span><span class="token operator">:</span> <span class="token number">8080</span><span class="token punctuation">,</span>
            <span class="token property">&quot;@enabled&quot;</span><span class="token operator">:</span> <span class="token string">&quot;true&quot;</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token property">&quot;securePort&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token property">&quot;$&quot;</span><span class="token operator">:</span> <span class="token number">443</span><span class="token punctuation">,</span>
            <span class="token property">&quot;@enabled&quot;</span><span class="token operator">:</span> <span class="token string">&quot;false&quot;</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token property">&quot;countryId&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
        <span class="token property">&quot;dataCenterInfo&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token property">&quot;@class&quot;</span><span class="token operator">:</span> <span class="token string">&quot;com.netflix.appinfo.InstanceInfo$DefaultDataCenterInfo&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;MyOwn&quot;</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token property">&quot;leaseInfo&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token property">&quot;renewalIntervalInSecs&quot;</span><span class="token operator">:</span> <span class="token number">30</span><span class="token punctuation">,</span>
            <span class="token property">&quot;durationInSecs&quot;</span><span class="token operator">:</span> <span class="token number">90</span><span class="token punctuation">,</span>
            <span class="token property">&quot;registrationTimestamp&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
            <span class="token property">&quot;lastRenewalTimestamp&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
            <span class="token property">&quot;evictionTimestamp&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
            <span class="token property">&quot;serviceUpTimestamp&quot;</span><span class="token operator">:</span> <span class="token number">0</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token property">&quot;metadata&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token property">&quot;management.port&quot;</span><span class="token operator">:</span> <span class="token string">&quot;8080&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;jmx.port&quot;</span><span class="token operator">:</span> <span class="token string">&quot;7649&quot;</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token property">&quot;homePageUrl&quot;</span><span class="token operator">:</span> <span class="token string">&quot;http://localhost:8080/&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;statusPageUrl&quot;</span><span class="token operator">:</span> <span class="token string">&quot;http://localhost:8080/actuator/info&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;healthCheckUrl&quot;</span><span class="token operator">:</span> <span class="token string">&quot;http://localhost:8080/actuator/health&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;vipAddress&quot;</span><span class="token operator">:</span> <span class="token string">&quot;unknown&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;secureVipAddress&quot;</span><span class="token operator">:</span> <span class="token string">&quot;unknown&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;isCoordinatingDiscoveryServer&quot;</span><span class="token operator">:</span> <span class="token string">&quot;false&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;lastUpdatedTimestamp&quot;</span><span class="token operator">:</span> <span class="token string">&quot;1586328420409&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;lastDirtyTimestamp&quot;</span><span class="token operator">:</span> <span class="token string">&quot;1586328420519&quot;</span>
    <span class="token punctuation">}</span>
</code></pre></div><h4 id="注册到eureka的服务信息查看" tabindex="-1"><a class="header-anchor" href="#注册到eureka的服务信息查看" aria-hidden="true">#</a> 注册到eureka的服务信息查看</h4><p>get: {ip:port}/eureka/apps</p><h4 id="注册到eureka的具体的服务查看" tabindex="-1"><a class="header-anchor" href="#注册到eureka的具体的服务查看" aria-hidden="true">#</a> 注册到eureka的具体的服务查看</h4><p>get: {ip:port}/eureka/apps/{appname}/{id}</p><h4 id="服务续约" tabindex="-1"><a class="header-anchor" href="#服务续约" aria-hidden="true">#</a> 服务续约</h4><p>put：{ip:port}/eureka/apps/{appname}/{id}?lastDirtyTimestamp={}&amp;status=up</p><h4 id="更改服务状态" tabindex="-1"><a class="header-anchor" href="#更改服务状态" aria-hidden="true">#</a> 更改服务状态</h4><p>put：{ip:port}/eureka/apps/{appname}/{id}/status?lastDirtyTimestamp={}&amp;value={UP/DOWN} 对应eureka源码的：InstanceResource.statusUpdate</p><h4 id="删除状态更新" tabindex="-1"><a class="header-anchor" href="#删除状态更新" aria-hidden="true">#</a> 删除状态更新</h4><p>delete：{ip:port}/eureka/apps/{appname}/{id}/status?lastDirtyTimestamp={}&amp;value={UP/DOWN}</p><h4 id="删除服务" tabindex="-1"><a class="header-anchor" href="#删除服务" aria-hidden="true">#</a> 删除服务</h4><p>delete: {ip:port}/eureka/apps/{appname}/{id}</p><h3 id="元数据" tabindex="-1"><a class="header-anchor" href="#元数据" aria-hidden="true">#</a> 元数据</h3><p>Eureka的元数据有两种：标准元数据和自定义元数据。 标准元数据：主机名、IP地址、端口号、状态页和健康检查等信息，这些信息都会被发布在服务注册表中，用于服务之间的调用。 自定义元数据：可以使用eureka.instance.metadata-map配置，这些元数据可以在远程客户端中访问，但是一般不改变客户端行为，除非客户端知道该元数据的含义。</p><p>可以在配置文件中对当前服务设置自定义元数据，可后期用户个性化使用</p><p>元数据可以配置在eureka服务器和eureka的客户端上</p><div class="language-text" data-ext="text"><pre class="language-text"><code>eureka.instance.metadata-map.dalao=osvue

</code></pre></div><h2 id="eurekaclient" tabindex="-1"><a class="header-anchor" href="#eurekaclient" aria-hidden="true">#</a> EurekaClient</h2><p>EurekaClient 可以在客户端获取eureka服务器上的注册者信息</p><p><strong>org.springframework.cloud.client.discovery与com.netflix.discovery.DiscoveryClient</strong></p><p>org.springframework.cloud.client.discovery是SpringCloud对注册中心client的抽象封装，提供公用功能</p><p>org.springframework.cloud.client.discovery定义用来服务发现的客户端接口，是客户端进行服务发现的核心接口，是spring cloud用来进行服务发现的顶级接口，在common中可以看到其地位。在Netflix Eureka和Consul中都有具体的实现类。</p><p>代表通用于服务发现的读操作，例如在 eureka或consul中。</p><div class="language-text" data-ext="text"><pre class="language-text"><code>有
	String description();//获取实现类的描述。
	List&lt;String&gt; getServices();//获取所有服务实例id。
	List&lt;ServiceInstance&gt; getInstances(String serviceId);//通过服务id查询服务实例信息列表。
</code></pre></div><p>com.netflix.discovery.DiscoveryClient为Eureka注册中心客户端的接口，功能更丰富</p><h2 id="自我保护机制" tabindex="-1"><a class="header-anchor" href="#自我保护机制" aria-hidden="true">#</a> 自我保护机制</h2><h3 id="机制" tabindex="-1"><a class="header-anchor" href="#机制" aria-hidden="true">#</a> 机制</h3><p>Eureka在CAP理论当中是属于AP ， 也就说当产生网络分区时，Eureka保证系统的可用性，但不保证系统里面数据的一致性</p><p>默认开启，服务器端容错的一种方式，即短时间心跳不到达仍不剔除服务列表里的节点</p><div class="language-text" data-ext="text"><pre class="language-text"><code>EMERGENCY! EUREKA MAY BE INCORRECTLY CLAIMING INSTANCES ARE UP WHEN THEY&#39;RE NOT. RENEWALS ARE LESSER THAN THRESHOLD AND HENCE THE INSTANCES ARE NOT BEING EXPIRED JUST TO BE SAFE.
</code></pre></div><p>默认情况下，Eureka Server在一定时间内，没有接收到某个微服务心跳，会将某个微服务注销（90S）。但是当网络故障时，微服务与Server之间无法正常通信，上述行为就非常危险，因为微服务正常，不应该注销。</p><p>Eureka Server通过自我保护模式来解决整个问题，当Server在短时间内丢失过多客户端时，那么Server会进入自我保护模式，会保护注册表中的微服务不被注销掉。当网络故障恢复后，退出自我保护模式。</p><p><strong>思想：宁可保留健康的和不健康的，也不盲目注销任何健康的服务。</strong></p><h4 id="自我保护触发" tabindex="-1"><a class="header-anchor" href="#自我保护触发" aria-hidden="true">#</a> 自我保护触发</h4><p><strong>客户端每分钟续约数量小于客户端总数的85%时会触发保护机制</strong></p><p>自我保护机制的触发条件： （当每分钟心跳次数( renewsLastMin ) 小于 numberOfRenewsPerMinThreshold 时，并且开启自动保护模式开关( eureka.server.enable-self-preservation = true ) 时，触发自我保护机制，不再自动过期租约。） numberOfRenewsPerMinThreshold = expectedNumberOfRenewsPerMin * 续租百分比( eureka.server.renewalPercentThreshold, 默认0.85 ) expectedNumberOfRenewsPerMin = 当前注册的应用实例数 x 2 为什么乘以 2： 默认情况下，注册的应用实例每半分钟续租一次，那么一分钟心跳两次，因此 x 2 。</p><p>服务实例数：10个，期望每分钟续约数：10 * 2=20，期望阈值：20*0.85=17，自我保护少于17时 触发。</p><p>剔除：</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code>    AbstractInstanceRegistry
    
    public void evict<span class="token punctuation">(</span>long additionalLeaseMs<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        logger.debug<span class="token punctuation">(</span><span class="token string">&quot;Running the evict task&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>isLeaseExpirationEnabled<span class="token punctuation">(</span><span class="token punctuation">))</span> <span class="token punctuation">{</span>
            logger.debug<span class="token punctuation">(</span><span class="token string">&quot;DS: lease expiration is currently disabled.&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token builtin class-name">return</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    此代码意思：if中判断为true，不走此逻辑，走下面的剔除。如果if为false。走此逻辑，不剔除。
</code></pre></div><div class="language-bash" data-ext="sh"><pre class="language-bash"><code>PeerAwareInstanceRegistryImpl

    @Override
    public boolean <span class="token function-name function">isLeaseExpirationEnabled</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>isSelfPreservationModeEnabled<span class="token punctuation">(</span><span class="token punctuation">))</span> <span class="token punctuation">{</span>
        //如果打开自我保护，不进入此逻辑。
            // The self preservation mode is disabled, hence allowing the instances to expire.
            <span class="token builtin class-name">return</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token builtin class-name">return</span> numberOfRenewsPerMinThreshold <span class="token operator">&gt;</span> <span class="token number">0</span> <span class="token operator">&amp;&amp;</span> getNumOfRenewsInLastMin<span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">&gt;</span> numberOfRenewsPerMinThreshold<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
</code></pre></div><h3 id="关闭" tabindex="-1"><a class="header-anchor" href="#关闭" aria-hidden="true">#</a> 关闭</h3><div class="language-properties" data-ext="properties"><pre class="language-properties"><code><span class="token key attr-name">eureka.server.enable-self-preservation</span><span class="token punctuation">=</span><span class="token value attr-value">false</span>
</code></pre></div><p>关闭后会提示</p><p><img src="`+p+`" alt="image-20200408165155886"></p><h3 id="清理时间" tabindex="-1"><a class="header-anchor" href="#清理时间" aria-hidden="true">#</a> 清理时间</h3><p>默认60秒</p><div class="language-text" data-ext="text"><pre class="language-text"><code>eureka.server.eviction-interval-timer-in-ms=3000
</code></pre></div><h2 id="多网卡选择" tabindex="-1"><a class="header-anchor" href="#多网卡选择" aria-hidden="true">#</a> 多网卡选择</h2><ol><li>ip注册</li></ol><div class="language-bash" data-ext="sh"><pre class="language-bash"><code>eureka:
  instance:
    prefer-ip-address: <span class="token boolean">true</span>
表示将自己的ip注册到EurekaServer上。不配置或false，表示将操作系统的hostname注册到server
</code></pre></div><ol start="2"><li><p>服务器有多个网卡，eh0，eh1，eh2，只有eh0可以让外部其他服务访问进来，而Eureka client将eh1和eh2注册到Eureka server上，这样其他服务就无法访问该微服务了。</p></li><li><p>指定Ip</p></li></ol><div class="language-bash" data-ext="sh"><pre class="language-bash"><code>eureka:
    instance:
    prefer-ip-address: <span class="token boolean">true</span>
    ip-address: 实际能访问到的Ip
</code></pre></div><p>如果设置了此时的ip-address，在元数据查看到就是此ip，其他服务也通过此ip来调用。</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">{</span>
<span class="token string">&quot;host&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;127.0.0.1&quot;</span>,
<span class="token string">&quot;port&quot;</span><span class="token builtin class-name">:</span> <span class="token number">8084</span>,
<span class="token string">&quot;metadata&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
    <span class="token string">&quot;yueyi&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;2019&quot;</span>,
    <span class="token string">&quot;user.password&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;root&quot;</span>,
    <span class="token string">&quot;management.port&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;8084&quot;</span>,
    <span class="token string">&quot;jmx.port&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;61378&quot;</span>,
    <span class="token string">&quot;user.name&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;root&quot;</span>
<span class="token punctuation">}</span>,
<span class="token string">&quot;secure&quot;</span><span class="token builtin class-name">:</span> false,
<span class="token string">&quot;uri&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;http://127.0.0.1:8084&quot;</span>,
<span class="token string">&quot;instanceId&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;api-listen-order:30.136.133.11:port&quot;</span>,
<span class="token string">&quot;serviceId&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;API-LISTEN-ORDER&quot;</span>,
<span class="token string">&quot;instanceInfo&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
    <span class="token string">&quot;instanceId&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;api-listen-order:30.136.133.11:port&quot;</span>,
    <span class="token string">&quot;app&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;API-LISTEN-ORDER&quot;</span>,
    <span class="token string">&quot;appGroupName&quot;</span><span class="token builtin class-name">:</span> null,
    <span class="token string">&quot;ipAddr&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;127.0.0.1&quot;</span>,
    <span class="token string">&quot;sid&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;na&quot;</span>,
    <span class="token string">&quot;homePageUrl&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;http://127.0.0.1:8084/&quot;</span>,
    <span class="token string">&quot;statusPageUrl&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;http://127.0.0.1:8084/actuator/info&quot;</span>,
    <span class="token string">&quot;healthCheckUrl&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;http://127.0.0.1:8084/actuator/health&quot;</span>,
    <span class="token string">&quot;secureHealthCheckUrl&quot;</span><span class="token builtin class-name">:</span> null,
    <span class="token string">&quot;vipAddress&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;api-listen-order&quot;</span>,
    <span class="token string">&quot;secureVipAddress&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;api-listen-order&quot;</span>,
    <span class="token string">&quot;countryId&quot;</span><span class="token builtin class-name">:</span> <span class="token number">1</span>,
    <span class="token string">&quot;dataCenterInfo&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
        <span class="token string">&quot;@class&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;com.netflix.appinfo.InstanceInfo<span class="token variable">$DefaultDataCenterInfo</span>&quot;</span>,
        <span class="token string">&quot;name&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;MyOwn&quot;</span>
    <span class="token punctuation">}</span>,
    <span class="token string">&quot;hostName&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;127.0.0.1&quot;</span>,
    <span class="token string">&quot;status&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;UP&quot;</span>,
    <span class="token string">&quot;overriddenStatus&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;UNKNOWN&quot;</span>,
    <span class="token string">&quot;leaseInfo&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
        <span class="token string">&quot;renewalIntervalInSecs&quot;</span><span class="token builtin class-name">:</span> <span class="token number">1</span>,
        <span class="token string">&quot;durationInSecs&quot;</span><span class="token builtin class-name">:</span> <span class="token number">1</span>,
        <span class="token string">&quot;registrationTimestamp&quot;</span><span class="token builtin class-name">:</span> <span class="token number">1579489514655</span>,
        <span class="token string">&quot;lastRenewalTimestamp&quot;</span><span class="token builtin class-name">:</span> <span class="token number">1579489524146</span>,
        <span class="token string">&quot;evictionTimestamp&quot;</span><span class="token builtin class-name">:</span> <span class="token number">0</span>,
        <span class="token string">&quot;serviceUpTimestamp&quot;</span><span class="token builtin class-name">:</span> <span class="token number">1579489514147</span>
    <span class="token punctuation">}</span>,
    <span class="token string">&quot;isCoordinatingDiscoveryServer&quot;</span><span class="token builtin class-name">:</span> false,
    <span class="token string">&quot;metadata&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
        <span class="token string">&quot;yueyi&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;2019&quot;</span>,
        <span class="token string">&quot;user.password&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;root&quot;</span>,
        <span class="token string">&quot;management.port&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;8084&quot;</span>,
        <span class="token string">&quot;jmx.port&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;61378&quot;</span>,
        <span class="token string">&quot;user.name&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;root&quot;</span>
    <span class="token punctuation">}</span>,
    <span class="token string">&quot;lastUpdatedTimestamp&quot;</span><span class="token builtin class-name">:</span> <span class="token number">1579489514655</span>,
    <span class="token string">&quot;lastDirtyTimestamp&quot;</span><span class="token builtin class-name">:</span> <span class="token number">1579489514111</span>,
    <span class="token string">&quot;actionType&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;ADDED&quot;</span>,
    <span class="token string">&quot;asgName&quot;</span><span class="token builtin class-name">:</span> null
<span class="token punctuation">}</span>,
<span class="token string">&quot;scheme&quot;</span><span class="token builtin class-name">:</span> null
<span class="token punctuation">}</span>
</code></pre></div><p>或者使用<strong>spring.cloud.inetutils</strong>配置网卡选择</p><h2 id="eureka-健康检查" tabindex="-1"><a class="header-anchor" href="#eureka-健康检查" aria-hidden="true">#</a> Eureka 健康检查</h2><p>由于server和client通过心跳保持 服务状态，而只有状态为UP的服务才能被访问。看eureka界面中的status。</p><p>比如心跳一直正常，服务一直UP，但是此服务DB连不上了，无法正常提供服务。</p><p>此时，我们需要将 微服务的健康状态也同步到server。只需要启动eureka的健康检查就行。这样微服务就会将自己的健康状态同步到eureka。配置如下即可。</p><h3 id="开启手动控制" tabindex="-1"><a class="header-anchor" href="#开启手动控制" aria-hidden="true">#</a> 开启手动控制</h3><p>在client端配置：将自己真正的健康状态传播到server。</p><div class="language-yaml" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">eureka</span><span class="token punctuation">:</span>
  <span class="token key atrule">client</span><span class="token punctuation">:</span>
    <span class="token key atrule">healthcheck</span><span class="token punctuation">:</span>
      <span class="token key atrule">enabled</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
</code></pre></div><h3 id="client端配置actuator" tabindex="-1"><a class="header-anchor" href="#client端配置actuator" aria-hidden="true">#</a> Client端配置Actuator</h3><div class="language-xml" data-ext="xml"><pre class="language-xml"><code>		<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">&gt;</span></span>
			<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>org.springframework.boot<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>
			<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>spring-boot-starter-actuator<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>
		<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><h3 id="改变健康状态的service" tabindex="-1"><a class="header-anchor" href="#改变健康状态的service" aria-hidden="true">#</a> 改变健康状态的Service</h3><div class="language-java" data-ext="java"><pre class="language-java"><code><span class="token annotation punctuation">@Service</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">HealthStatusService</span> <span class="token keyword">implements</span> <span class="token class-name">HealthIndicator</span><span class="token punctuation">{</span>

	<span class="token keyword">private</span> <span class="token class-name">Boolean</span> status <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>

	<span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">setStatus</span><span class="token punctuation">(</span><span class="token class-name">Boolean</span> status<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">this</span><span class="token punctuation">.</span>status  <span class="token operator">=</span> status<span class="token punctuation">;</span>
	<span class="token punctuation">}</span>

	<span class="token annotation punctuation">@Override</span>
	<span class="token keyword">public</span> <span class="token class-name">Health</span> <span class="token function">health</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token comment">// TODO Auto-generated method stub</span>
		<span class="token keyword">if</span><span class="token punctuation">(</span>status<span class="token punctuation">)</span>
		<span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">Health<span class="token punctuation">.</span>Builder</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">up</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">build</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">Health<span class="token punctuation">.</span>Builder</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">down</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">build</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>

	<span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">getStatus</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token comment">// TODO Auto-generated method stub</span>
		<span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>status<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
</code></pre></div><h3 id="测试用的controller" tabindex="-1"><a class="header-anchor" href="#测试用的controller" aria-hidden="true">#</a> 测试用的Controller</h3><div class="language-java" data-ext="java"><pre class="language-java"><code>	<span class="token annotation punctuation">@GetMapping</span><span class="token punctuation">(</span><span class="token string">&quot;/health&quot;</span><span class="token punctuation">)</span>
	<span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">health</span><span class="token punctuation">(</span><span class="token annotation punctuation">@RequestParam</span><span class="token punctuation">(</span><span class="token string">&quot;status&quot;</span><span class="token punctuation">)</span> <span class="token class-name">Boolean</span> status<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		
		healthStatusSrv<span class="token punctuation">.</span><span class="token function">setStatus</span><span class="token punctuation">(</span>status<span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token keyword">return</span> healthStatusSrv<span class="token punctuation">.</span><span class="token function">getStatus</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
</code></pre></div><h2 id="安全配置" tabindex="-1"><a class="header-anchor" href="#安全配置" aria-hidden="true">#</a> 安全配置</h2><h3 id="开启eureka安全连接" tabindex="-1"><a class="header-anchor" href="#开启eureka安全连接" aria-hidden="true">#</a> 开启Eureka安全连接</h3><div class="language-text" data-ext="text"><pre class="language-text"><code>spring.security.user.name=yiming
spring.security.user.password=123
</code></pre></div><p><img src="`+e+`" alt="image-20200408185532993"></p><h3 id="如果服务注册报错" tabindex="-1"><a class="header-anchor" href="#如果服务注册报错" aria-hidden="true">#</a> 如果服务注册报错</h3><div class="language-text" data-ext="text"><pre class="language-text"><code>Root name &#39;timestamp&#39; does not match expected (&#39;instance&#39;) for type [simple
</code></pre></div><p>是默认开启了防止跨域攻击</p><h4 id="手动关闭" tabindex="-1"><a class="header-anchor" href="#手动关闭" aria-hidden="true">#</a> 手动关闭</h4><p>在服务端增加配置类</p><div class="language-text" data-ext="text"><pre class="language-text"><code>@Configuration
@EnableWebSecurity
public class WebSecurityConfig extends WebSecurityConfigurerAdapter{

	@Override
	protected void configure(HttpSecurity http) throws Exception {
		// TODO Auto-generated method stub
		http.csrf().disable();
		super.configure(http);
	}

}

</code></pre></div><h2 id="服务间调用" tabindex="-1"><a class="header-anchor" href="#服务间调用" aria-hidden="true">#</a> 服务间调用</h2><p>​ 微服务中，很多服务系统都在独立的进程中运行，通过各个服务系统之间的协作来实现一个大项目的所有业务功能。服务系统间 使用多种跨进程的方式进行通信协作，而RESTful风格的网络请求是最为常见的交互方式之一。</p><p>http。</p><p>​ 思考：如果让我们写服务调用如何写。</p><ol><li><p>硬编码。不好。ip域名写在代码中。目的：找到服务。</p></li><li><p>根据服务名，找相应的ip。目的：这样ip切换或者随便变化，对调用方没有影响。</p><p>Map&lt;服务名，服务列表&gt; map;</p></li><li><p>加上负载均衡。目的：高可用。</p></li></ol><p>spring cloud提供的方式：</p><ol><li>RestTemplate</li><li>Feign</li></ol><p>我个人习惯用RestTemplate，因为自由，方便调用别的第三方的http服务。feign也可以，更面向对象一些，更优雅一些，就是需要配置。</p><h3 id="rest" tabindex="-1"><a class="header-anchor" href="#rest" aria-hidden="true">#</a> Rest</h3><h2 id="" tabindex="-1"><a class="header-anchor" href="#" aria-hidden="true">#</a></h2><div class="language-bash" data-ext="sh"><pre class="language-bash"><code>RESTful网络请求是指RESTful风格的网络请求，其中REST是Resource Representational State Transfer的缩写，直接翻译即“资源表现层状态转移”。
Resource代表互联网资源。所谓“资源”是网络上的一个实体，或者说网上的一个具体信息。它可以是一段文本、一首歌曲、一种服务，可以使用一个URI指向它，每种“资源”对应一个URI。
Representational是“表现层”意思。“资源”是一种消息实体，它可以有多种外在的表现形式，我们把“资源”具体呈现出来的形式叫作它的“表现层”。比如说文本可以用TXT格式进行表现，也可以使用XML格式、JSON格式和二进制格式；视频可以用MP4格式表现，也可以用AVI格式表现。URI只代表资源的实体，不代表它的形式。它的具体表现形式，应该由HTTP请求的头信息Accept和Content-Type字段指定，这两个字段是对“表现层”的描述。
State Transfer是指“状态转移”。客户端访问服务的过程中必然涉及数据和状态的转化。如果客户端想要操作服务端资源，必须通过某种手段，让服务器端资源发生“状态转移”。而这种转化是建立在表现层之上的，所以被称为“表现层状态转移”。客户端通过使用HTTP协议中的四个动词来实现上述操作，它们分别是：获取资源的GET、新建或更新资源的POST、更新资源的PUT和删除资源的DELETE。
</code></pre></div><p>RestTemplate是Spring提供的同步HTTP网络客户端接口，它可以简化客户端与HTTP服务器之间的交互，并且它强制使用RESTful风格。它会处理HTTP连接和关闭，只需要使用者提供服务器的地址(URL)和模板参数。</p><div class="language-text" data-ext="text"><pre class="language-text"><code>第一个层次（Level 0）的 Web 服务只是使用 HTTP 作为传输方式，实际上只是远程方法调用（RPC）的一种具体形式。SOAP 和 XML-RPC 都属于此类。
第二个层次（Level 1）的 Web 服务引入了资源的概念。每个资源有对应的标识符和表达。
第三个层次（Level 2）的 Web 服务使用不同的 HTTP 方法来进行不同的操作，并且使用 HTTP 状态码来表示不同的结果。如 HTTP GET 方法来获取资源，HTTP DELETE 方法来删除资源。
第四个层次（Level 3）的 Web 服务使用 HATEOAS。在资源的表达中包含了链接信息。客户端可以根据链接来发现可以执行的动作。
</code></pre></div><p><strong>git的restful api</strong></p><p>https://developer.github.com/v3/</p><h2 id="eureka监听事件" tabindex="-1"><a class="header-anchor" href="#eureka监听事件" aria-hidden="true">#</a> Eureka监听事件</h2><p>EurekaInstanceCanceledEvent 服务下线事件</p><p>EurekaInstanceRegisteredEvent 服务注册事件</p><p>EurekaInstanceRenewedEvent 服务续约事件</p><p>EurekaRegistryAvailableEvent 注册中心可用事件</p><p>EurekaServerStartedEvent 注册中心启动</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token function">import</span> org.springframework.cloud.netflix.eureka.server.event.EurekaInstanceCanceledEvent<span class="token punctuation">;</span>
<span class="token function">import</span> org.springframework.context.event.EventListener<span class="token punctuation">;</span>
<span class="token function">import</span> org.springframework.stereotype.Component<span class="token punctuation">;</span>

@Component
public class CustomEvent <span class="token punctuation">{</span>
	
	@EventListener
	public void listen<span class="token punctuation">(</span>EurekaInstanceCanceledEvent e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		System.out.println<span class="token punctuation">(</span>e.getServerId<span class="token punctuation">(</span><span class="token punctuation">)</span>+<span class="token string">&quot;下线事件&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>

将Eureka Client停止后打印：
api-listen-order:30.136.133.9:port下线事件
</code></pre></div><h2 id="eureka缺陷" tabindex="-1"><a class="header-anchor" href="#eureka缺陷" aria-hidden="true">#</a> Eureka缺陷</h2><p>由于集群间的同步复制是通过HTTP的方式进行，基于网络的不可靠性，集群中的Eureka Server间的注册表信息难免存在不同步的时间节点，不满足CAP中的C(数据一致性)。</p>`,157),l=[c];function u(r,i){return a(),s("div",null,l)}const g=n(o,[["render",u],["__file","sp_eureka_a.html.vue"]]);export{g as default};
