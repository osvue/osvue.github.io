import{_ as e,r as o,o as p,c as r,a as c,b as t,d as n,e as u}from"./app-215c512d.js";const i={},l={href:"https://github.com/osvue/springboot_quartz_vue.git",target:"_blank",rel:"noopener noreferrer"};function g(d,a){const s=o("ExternalLinkIcon");return p(),r("div",null,[a[2]||(a[2]=c(`<h2 id="quartz-任务调度《基于springboot-vue-antd-ui》" tabindex="-1"><a class="header-anchor" href="#quartz-任务调度《基于springboot-vue-antd-ui》" aria-hidden="true">#</a> quartz 任务调度《基于springBoot + Vue + Antd UI》</h2><div class="language-xml" data-ext="xml"><pre class="language-xml"><code>	<span class="token comment">&lt;!--quartz依赖 --&gt;</span>
		<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">&gt;</span></span>
			<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>org.springframework.boot<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>
			<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>spring-boot-starter-quartz<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>
		<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">&gt;</span></span>
        	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">&gt;</span></span>
			<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>org.springframework.boot<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>
			<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>spring-boot-starter-web<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>
             <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>spring-boot.version</span><span class="token punctuation">&gt;</span></span>2.3.2.RELEASE<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>spring-boot.version</span><span class="token punctuation">&gt;</span></span>
		<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><h3 id="application-properties" tabindex="-1"><a class="header-anchor" href="#application-properties" aria-hidden="true">#</a> application.properties</h3><div class="language-text" data-ext="text"><pre class="language-text"><code># quartz任务配置
spring.quartz.job-store-type=jdbc
spring.quartz.properties.org.quartz.scheduler.instanceName=clusteredScheduler
spring.quartz.properties.org.quartz.scheduler.instanceId=AUTO
spring.quartz.properties.org.quartz.jobStore.class=org.quartz.impl.jdbcjobstore.JobStoreTX
spring.quartz.properties.org.quartz.jobStore.driverDelegateClass=org.quartz.impl.jdbcjobstore.StdJDBCDelegate
spring.quartz.properties.org.quartz.jobStore.dataSource=quartzDataSource
spring.quartz.properties.org.quartz.jobStore.tablePrefix=QRTZ_
# 打开集群配置
spring.quartz.properties.org.quartz.jobStore.isClustered=true
# 设置集群检查间隔100s
spring.quartz.properties.org.quartz.jobStore.clusterCheckinInterval=10000
spring.quartz.properties.org.quartz.jobStore.useProperties=false
spring.quartz.properties.org.quartz.threadPool.class=org.quartz.simpl.SimpleThreadPool
spring.quartz.properties.org.quartz.threadPool.threadCount=10
spring.quartz.properties.org.quartz.threadPool.threadPriority=5
spring.quartz.properties.org.quartz.threadPool.threadsInheritContextClassLoaderOfInitializingThread=true


</code></pre></div><h2 id="codingdemo" tabindex="-1"><a class="header-anchor" href="#codingdemo" aria-hidden="true">#</a> CodingDemo</h2><h5 id="详细代码路径-com-osvue-example-quartz" tabindex="-1"><a class="header-anchor" href="#详细代码路径-com-osvue-example-quartz" aria-hidden="true">#</a> 详细代码路径 &gt; com.osvue.example.quartz</h5>`,6)),t("p",null,[a[1]||(a[1]=n("项目")),t("a",l,[a[0]||(a[0]=n("boot_vue")),u(s)])]),a[3]||(a[3]=t("h2",{id:"写在最后",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#写在最后","aria-hidden":"true"},"#"),n(" 写在最后")],-1)),a[4]||(a[4]=t("div",{class:"custom-container tip"},[t("p",{class:"custom-container-title"},"TIP"),t("p",null,[n("今天是贰零贰零年十月十五号，以后可能不经常更新此博客了。 "),t("br"),n(" 坚持从实际出发，一切实事求是，不知道未来在哪里。。。。。 "),t("br"),n(" 最后一句话："),t("br"),n(" 大道至简，知行合一！")])],-1))])}const z=e(i,[["render",g],["__file","quartz1.html.vue"]]);export{z as default};
