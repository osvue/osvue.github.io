import{_ as n,p as a,q as s,a1 as t}from"./framework-d81ad7e5.js";const p={},o=t(`<h2 id="数据库连接池" tabindex="-1"><a class="header-anchor" href="#数据库连接池" aria-hidden="true">#</a> 数据库连接池</h2><h3 id="默认连接池" tabindex="-1"><a class="header-anchor" href="#默认连接池" aria-hidden="true">#</a> 默认连接池</h3><div class="language-java" data-ext="java"><pre class="language-java"><code><span class="token annotation punctuation">@Autowired</span>
<span class="token class-name">DataSource</span> dataSource<span class="token punctuation">;</span>
	
		<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;数据源&gt;&gt;&gt;&gt;&gt;&gt;&quot;</span> <span class="token operator">+</span> dataSource<span class="token punctuation">.</span><span class="token function">getClass</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">Connection</span> connection<span class="token punctuation">;</span>
		<span class="token keyword">try</span> <span class="token punctuation">{</span>
			connection <span class="token operator">=</span> dataSource<span class="token punctuation">.</span><span class="token function">getConnection</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
			<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;连接&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&quot;</span> <span class="token operator">+</span> connection<span class="token punctuation">)</span><span class="token punctuation">;</span>
			<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;连接地址&gt;&gt;&gt;&gt;&gt;&quot;</span> <span class="token operator">+</span> connection<span class="token punctuation">.</span><span class="token function">getMetaData</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getURL</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">SQLException</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
			<span class="token comment">// TODO Auto-generated catch block</span>
			e<span class="token punctuation">.</span><span class="token function">printStackTrace</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span>


</code></pre></div><p>以前版本，如 Spring Boot 1.5 默认使用 org.apache.tomcat.jdbc.pool.DataSource 作为数据源；</p><p>HikariDataSource 号称 Java WEB 当前速度最快的数据源，相比于传统的 C3P0 、DBCP、Tomcat jdbc 等连接池更加优秀；</p><div class="language-java" data-ext="java"><pre class="language-java"><code>
spring<span class="token punctuation">.</span>datasource<span class="token punctuation">.</span>type<span class="token operator">=</span><span class="token class-name"><span class="token namespace">com<span class="token punctuation">.</span>zaxxer<span class="token punctuation">.</span>hikari<span class="token punctuation">.</span></span>HikariDataSource1</span>
## 最小空闲连接数量
spring<span class="token punctuation">.</span>datasource<span class="token punctuation">.</span>hikari<span class="token punctuation">.</span>minimum<span class="token operator">-</span>idle<span class="token operator">=</span><span class="token number">5</span>
## 连接池最大连接数，默认是<span class="token number">10</span>  池中最大连接数，包括闲置和使用中的连接
spring<span class="token punctuation">.</span>datasource<span class="token punctuation">.</span>hikari<span class="token punctuation">.</span>maximum<span class="token operator">-</span>pool<span class="token operator">-</span>size<span class="token operator">=</span><span class="token number">15</span>
spring<span class="token punctuation">.</span>datasource<span class="token punctuation">.</span>hikari<span class="token punctuation">.</span>auto<span class="token operator">-</span>commit<span class="token operator">=</span><span class="token boolean">true</span>
## 空闲连接存活最大时间，默认<span class="token number">600000</span>（<span class="token number">10</span>分钟）
spring<span class="token punctuation">.</span>datasource<span class="token punctuation">.</span>hikari<span class="token punctuation">.</span>idle<span class="token operator">-</span>timeout<span class="token operator">=</span><span class="token number">30000</span>
## 连接池名称
spring<span class="token punctuation">.</span>datasource<span class="token punctuation">.</span>hikari<span class="token punctuation">.</span>pool<span class="token operator">-</span>name<span class="token operator">=</span><span class="token number">22D</span>atebookHikariCP
## 此属性控制池中连接的最长生命周期，值<span class="token number">0</span>表示无限生命周期，默认<span class="token number">1800000</span>即<span class="token number">30</span>分钟
spring<span class="token punctuation">.</span>datasource<span class="token punctuation">.</span>hikari<span class="token punctuation">.</span>max<span class="token operator">-</span>lifetime<span class="token operator">=</span><span class="token number">1800000</span>
spring<span class="token punctuation">.</span>datasource<span class="token punctuation">.</span>hikari<span class="token punctuation">.</span>connection<span class="token operator">-</span>timeout<span class="token operator">=</span><span class="token number">30000</span>
spring<span class="token punctuation">.</span>datasource<span class="token punctuation">.</span>hikari<span class="token punctuation">.</span>connection<span class="token operator">-</span>test<span class="token operator">-</span>query<span class="token operator">=</span><span class="token constant">SELECT</span> <span class="token number">1</span>
</code></pre></div><h3 id="druid" tabindex="-1"><a class="header-anchor" href="#druid" aria-hidden="true">#</a> Druid</h3><p>官方地址</p><p>https://github.com/alibaba/druid/tree/master/druid-spring-boot-starter</p><p>https://mvnrepository.com/artifact/com.alibaba/druid-spring-boot-starter/1.1.17</p><h4 id="加入依赖" tabindex="-1"><a class="header-anchor" href="#加入依赖" aria-hidden="true">#</a> 加入依赖</h4><div class="language-xml" data-ext="xml"><pre class="language-xml"><code>		<span class="token comment">&lt;!-- https://mvnrepository.com/artifact/com.alibaba/druid-spring-boot-starter --&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>com.alibaba<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>druid-spring-boot-starter<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>version</span><span class="token punctuation">&gt;</span></span>1.1.17<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>version</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><h4 id="配置" tabindex="-1"><a class="header-anchor" href="#配置" aria-hidden="true">#</a> 配置</h4><div class="language-java" data-ext="java"><pre class="language-java"><code>spring<span class="token punctuation">.</span>datasource<span class="token punctuation">.</span>type<span class="token operator">=</span><span class="token class-name"><span class="token namespace">com<span class="token punctuation">.</span>alibaba<span class="token punctuation">.</span>druid<span class="token punctuation">.</span>pool<span class="token punctuation">.</span></span>DruidDataSource</span>
# 初始化大小，最小，最大
spring<span class="token punctuation">.</span>datasource<span class="token punctuation">.</span>initial<span class="token operator">-</span>size<span class="token operator">=</span><span class="token number">5</span>
spring<span class="token punctuation">.</span>datasource<span class="token punctuation">.</span>max<span class="token operator">-</span>active<span class="token operator">=</span><span class="token number">20</span>
spring<span class="token punctuation">.</span>datasource<span class="token punctuation">.</span>min<span class="token operator">-</span>idle<span class="token operator">=</span><span class="token number">5</span>
# 配置获取连接等待超时的时间
spring<span class="token punctuation">.</span>datasource<span class="token punctuation">.</span>max<span class="token operator">-</span>wait<span class="token operator">=</span><span class="token number">60000</span>
# 配置一个连接在池中最小生存的时间，单位是毫秒
spring<span class="token punctuation">.</span>datasource<span class="token punctuation">.</span>min<span class="token operator">-</span>evictable<span class="token operator">-</span>idle<span class="token operator">-</span>time<span class="token operator">-</span>millis<span class="token operator">=</span><span class="token number">60000</span>
spring<span class="token punctuation">.</span>datasource<span class="token punctuation">.</span>validation<span class="token operator">-</span>query<span class="token operator">=</span><span class="token constant">SELECT</span> <span class="token number">1</span>
spring<span class="token punctuation">.</span>datasource<span class="token punctuation">.</span>validation<span class="token operator">-</span>query<span class="token operator">-</span>timeout<span class="token operator">=</span><span class="token number">2000</span>

</code></pre></div><h4 id="web监控" tabindex="-1"><a class="header-anchor" href="#web监控" aria-hidden="true">#</a> web监控</h4><div class="language-java" data-ext="java"><pre class="language-java"><code><span class="token keyword">import</span> <span class="token import"><span class="token namespace">com<span class="token punctuation">.</span>alibaba<span class="token punctuation">.</span>druid<span class="token punctuation">.</span>pool<span class="token punctuation">.</span></span><span class="token class-name">DruidDataSource</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">com<span class="token punctuation">.</span>alibaba<span class="token punctuation">.</span>druid<span class="token punctuation">.</span>support<span class="token punctuation">.</span>http<span class="token punctuation">.</span></span><span class="token class-name">StatViewServlet</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>boot<span class="token punctuation">.</span>context<span class="token punctuation">.</span>properties<span class="token punctuation">.</span></span><span class="token class-name">ConfigurationProperties</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>boot<span class="token punctuation">.</span>web<span class="token punctuation">.</span>servlet<span class="token punctuation">.</span></span><span class="token class-name">ServletRegistrationBean</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>context<span class="token punctuation">.</span>annotation<span class="token punctuation">.</span></span><span class="token class-name">Bean</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>context<span class="token punctuation">.</span>annotation<span class="token punctuation">.</span></span><span class="token class-name">Configuration</span></span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token import"><span class="token namespace">javax<span class="token punctuation">.</span>sql<span class="token punctuation">.</span></span><span class="token class-name">DataSource</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>util<span class="token punctuation">.</span></span><span class="token class-name">HashMap</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>util<span class="token punctuation">.</span></span><span class="token class-name">Map</span></span><span class="token punctuation">;</span>


<span class="token annotation punctuation">@Configuration</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">DruidConfig</span> <span class="token punctuation">{</span>

    <span class="token doc-comment comment">/**
     * 将自定义的 Druid 数据源添加到容器中，不再让 Spring Boot 自动创建
     * 这样做的目的是：绑定全局配置文件中的 druid 数据源属性到 com.alibaba.druid.pool.DruidDataSource
     * 从而让它们生效
     *
     * <span class="token keyword">@return</span>
     * @ConfigurationProperties(prefix = &quot;spring.datasource&quot;)：作用就是将 全局配置文件中 前缀为 spring.datasource
     * 的属性值注入到 com.alibaba.druid.pool.DruidDataSource 的同名参数中
     */</span>
    <span class="token annotation punctuation">@ConfigurationProperties</span><span class="token punctuation">(</span>prefix <span class="token operator">=</span> <span class="token string">&quot;spring.datasource&quot;</span><span class="token punctuation">)</span>
    <span class="token annotation punctuation">@Bean</span>
    <span class="token keyword">public</span> <span class="token class-name">DataSource</span> <span class="token function">druidDataSource</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">DruidDataSource</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/**
     * 配置 Druid 监控 之  管理后台的 Servlet
     * 内置 Servler 容器时没有web.xml 文件，所以使用 Spring Boot 的注册 Servlet 方式
     */</span>
    <span class="token annotation punctuation">@Bean</span>
    <span class="token keyword">public</span> <span class="token class-name">ServletRegistrationBean</span> <span class="token function">statViewServlet</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">ServletRegistrationBean</span> bean <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ServletRegistrationBean</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">StatViewServlet</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
                <span class="token string">&quot;/druid/*&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token doc-comment comment">/**
         * loginUsername：Druid 后台管理界面的登录账号
         * loginPassword：Druid 后台管理界面的登录密码
         * allow：Druid 后台允许谁可以访问
         *      initParams.put(&quot;allow&quot;, &quot;localhost&quot;)：表示只有本机可以访问
         *      initParams.put(&quot;allow&quot;, &quot;&quot;)：为空或者为null时，表示允许所有访问
         * deny：Druid 后台拒绝谁访问
         *      initParams.put(&quot;deny&quot;, &quot;192.168.1.20&quot;);表示禁止此ip访问
         */</span>
        <span class="token class-name">Map</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">,</span> <span class="token class-name">String</span><span class="token punctuation">&gt;</span></span> initParams <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">HashMap</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        initParams<span class="token punctuation">.</span><span class="token function">put</span><span class="token punctuation">(</span><span class="token string">&quot;loginUsername&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;admin&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        initParams<span class="token punctuation">.</span><span class="token function">put</span><span class="token punctuation">(</span><span class="token string">&quot;loginPassword&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;123456&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        initParams<span class="token punctuation">.</span><span class="token function">put</span><span class="token punctuation">(</span><span class="token string">&quot;allow&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token doc-comment comment">/** 设置初始化参数*/</span>
        bean<span class="token punctuation">.</span><span class="token function">setInitParameters</span><span class="token punctuation">(</span>initParams<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> bean<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre></div>`,16),e=[o];function c(u,l){return a(),s("div",null,e)}const k=n(p,[["render",c],["__file","db.html.vue"]]);export{k as default};
