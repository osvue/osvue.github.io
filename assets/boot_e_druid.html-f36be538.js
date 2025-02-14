import{_ as n,p as a,q as s,a1 as t}from"./framework-d81ad7e5.js";const p={},o=t(`<h2 id="springboot配置数据源" tabindex="-1"><a class="header-anchor" href="#springboot配置数据源" aria-hidden="true">#</a> springboot配置数据源</h2><ul><li>Spring Framework 为 SQL 数据库提供了广泛的支持。从直接使用 JdbcTemplate 进行 JDBC 访问到完全的对象关系映射（object relational mapping）技术，比如 Hibernate。Spring Data 提供了更多级别的功能，直接从接口创建的 Repository 实现，并使用了约定从方法名生成查询。</li></ul><h2 id="_1、jdbctemplate" tabindex="-1"><a class="header-anchor" href="#_1、jdbctemplate" aria-hidden="true">#</a> 1、JdbcTemplate</h2><p>1、创建项目，导入需要的依赖</p><div class="language-xml" data-ext="xml"><pre class="language-xml"><code>        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>org.springframework.boot<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>spring-boot-starter-jdbc<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">&gt;</span></span>
 		<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>mysql<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>mysql-connector-java<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>scope</span><span class="token punctuation">&gt;</span></span>runtime<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>scope</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><p>2、配置数据源</p><div class="language-yaml" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">spring</span><span class="token punctuation">:</span>
  <span class="token key atrule">datasource</span><span class="token punctuation">:</span>
    <span class="token key atrule">username</span><span class="token punctuation">:</span> root
    <span class="token key atrule">password</span><span class="token punctuation">:</span> <span class="token number">123456</span>
    <span class="token key atrule">url</span><span class="token punctuation">:</span> jdbc<span class="token punctuation">:</span>mysql<span class="token punctuation">:</span>//192.168.85.111<span class="token punctuation">:</span>3306/sakila<span class="token punctuation">?</span>serverTimezone=UTC<span class="token important">&amp;useUnicode=true@characterEncoding=utf-</span><span class="token number">8</span>
    <span class="token key atrule">driver-class-name</span><span class="token punctuation">:</span> com.mysql.jdbc.Driver
</code></pre></div><p>3、测试类代码</p><div class="language-java" data-ext="java"><pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">com<span class="token punctuation">.</span>osvue</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>junit<span class="token punctuation">.</span>jupiter<span class="token punctuation">.</span>api<span class="token punctuation">.</span></span><span class="token class-name">Test</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>beans<span class="token punctuation">.</span>factory<span class="token punctuation">.</span>annotation<span class="token punctuation">.</span></span><span class="token class-name">Autowired</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>boot<span class="token punctuation">.</span>test<span class="token punctuation">.</span>context<span class="token punctuation">.</span></span><span class="token class-name">SpringBootTest</span></span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token import"><span class="token namespace">javax<span class="token punctuation">.</span>sql<span class="token punctuation">.</span></span><span class="token class-name">DataSource</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>sql<span class="token punctuation">.</span></span><span class="token class-name">Connection</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>sql<span class="token punctuation">.</span></span><span class="token class-name">SQLException</span></span><span class="token punctuation">;</span>

<span class="token annotation punctuation">@SpringBootTest</span>
<span class="token keyword">class</span> <span class="token class-name">DataApplicationTests</span> <span class="token punctuation">{</span>

    <span class="token annotation punctuation">@Autowired</span>
    <span class="token class-name">DataSource</span> dataSource<span class="token punctuation">;</span>

    <span class="token annotation punctuation">@Test</span>
    <span class="token keyword">void</span> <span class="token function">contextLoads</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">SQLException</span> <span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>dataSource<span class="token punctuation">.</span><span class="token function">getClass</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">Connection</span> connection <span class="token operator">=</span> dataSource<span class="token punctuation">.</span><span class="token function">getConnection</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>connection<span class="token punctuation">)</span><span class="token punctuation">;</span>
        connection<span class="token punctuation">.</span><span class="token function">close</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

<span class="token punctuation">}</span>
<span class="token comment">//可以看到默认配置的数据源为class com.zaxxer.hikari.HikariDataSource，我们没有经过任何配置，说明springboot默认情况下支持的就是这种数据源，可以在DataSourceProperties.java文件中查看具体的属性配置</span>
</code></pre></div><p>4、crud操作</p><p>​ 1、有了数据源(com.zaxxer.hikari.HikariDataSource)，然后可以拿到数据库连接(java.sql.Connection)，有了连接，就可以使用连接和原生的 JDBC 语句来操作数据库</p><p>​ 2、即使不使用第三方第数据库操作框架，如 MyBatis等，Spring 本身也对原生的JDBC 做了轻量级的封装，即 org.springframework.jdbc.core.JdbcTemplate。</p><p>​ 3、数据库操作的所有 CRUD 方法都在 JdbcTemplate 中。</p><p>​ 4、Spring Boot 不仅提供了默认的数据源，同时默认已经配置好了 JdbcTemplate 放在了容器中，程序员只需自己注入即可使用</p><p>​ 5、<strong>JdbcTemplate</strong> 的自动配置原理是依赖 org.springframework.boot.autoconfigure.jdbc 包下的 org.springframework.boot.autoconfigure.jdbc.JdbcTemplateAutoConfiguration 类</p><div class="language-java" data-ext="java"><pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">com<span class="token punctuation">.</span>osvue<span class="token punctuation">.</span>contoller</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>beans<span class="token punctuation">.</span>factory<span class="token punctuation">.</span>annotation<span class="token punctuation">.</span></span><span class="token class-name">Autowired</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>jdbc<span class="token punctuation">.</span>core<span class="token punctuation">.</span></span><span class="token class-name">JdbcTemplate</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>web<span class="token punctuation">.</span>bind<span class="token punctuation">.</span>annotation<span class="token punctuation">.</span></span><span class="token class-name">GetMapping</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>web<span class="token punctuation">.</span>bind<span class="token punctuation">.</span>annotation<span class="token punctuation">.</span></span><span class="token class-name">PathVariable</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>web<span class="token punctuation">.</span>bind<span class="token punctuation">.</span>annotation<span class="token punctuation">.</span></span><span class="token class-name">RestController</span></span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>util<span class="token punctuation">.</span></span><span class="token class-name">List</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>util<span class="token punctuation">.</span></span><span class="token class-name">Map</span></span><span class="token punctuation">;</span>

<span class="token annotation punctuation">@RestController</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">JDBCController</span> <span class="token punctuation">{</span>

    <span class="token annotation punctuation">@Autowired</span>
    <span class="token class-name">JdbcTemplate</span> jdbcTemplate<span class="token punctuation">;</span>

    <span class="token annotation punctuation">@GetMapping</span><span class="token punctuation">(</span><span class="token string">&quot;/emplist&quot;</span><span class="token punctuation">)</span>
    <span class="token keyword">public</span> <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Map</span><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">,</span><span class="token class-name">Object</span><span class="token punctuation">&gt;</span><span class="token punctuation">&gt;</span></span> <span class="token function">empList</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token class-name">String</span> sql <span class="token operator">=</span> <span class="token string">&quot;select * from emp&quot;</span><span class="token punctuation">;</span>
        <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Map</span><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">,</span> <span class="token class-name">Object</span><span class="token punctuation">&gt;</span><span class="token punctuation">&gt;</span></span> maps <span class="token operator">=</span> jdbcTemplate<span class="token punctuation">.</span><span class="token function">queryForList</span><span class="token punctuation">(</span>sql<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> maps<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token annotation punctuation">@GetMapping</span><span class="token punctuation">(</span><span class="token string">&quot;/addEmp&quot;</span><span class="token punctuation">)</span>
    <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">addUser</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token class-name">String</span> sql <span class="token operator">=</span> <span class="token string">&quot;insert into emp(empno,ename) values(1111,&#39;zhangsan&#39;)&quot;</span><span class="token punctuation">;</span>
        jdbcTemplate<span class="token punctuation">.</span><span class="token function">update</span><span class="token punctuation">(</span>sql<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> <span class="token string">&quot;success&quot;</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token annotation punctuation">@GetMapping</span><span class="token punctuation">(</span><span class="token string">&quot;/updateEmp/{id}&quot;</span><span class="token punctuation">)</span>
    <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">updateEmp</span><span class="token punctuation">(</span><span class="token annotation punctuation">@PathVariable</span><span class="token punctuation">(</span><span class="token string">&quot;id&quot;</span><span class="token punctuation">)</span> <span class="token class-name">Integer</span> id<span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token class-name">String</span> sql <span class="token operator">=</span> <span class="token string">&quot;update emp set ename=? where empno = &quot;</span><span class="token operator">+</span>id<span class="token punctuation">;</span>
        <span class="token class-name">String</span> name <span class="token operator">=</span> <span class="token string">&quot;list&quot;</span><span class="token punctuation">;</span>
        jdbcTemplate<span class="token punctuation">.</span><span class="token function">update</span><span class="token punctuation">(</span>sql<span class="token punctuation">,</span>name<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> <span class="token string">&quot;update success&quot;</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token annotation punctuation">@GetMapping</span><span class="token punctuation">(</span><span class="token string">&quot;/deleteEmp/{id}&quot;</span><span class="token punctuation">)</span>
    <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">deleteEmp</span><span class="token punctuation">(</span><span class="token annotation punctuation">@PathVariable</span><span class="token punctuation">(</span><span class="token string">&quot;id&quot;</span><span class="token punctuation">)</span><span class="token class-name">Integer</span> id<span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token class-name">String</span> sql <span class="token operator">=</span> <span class="token string">&quot;delete from emp where empno = &quot;</span><span class="token operator">+</span>id<span class="token punctuation">;</span>
        jdbcTemplate<span class="token punctuation">.</span><span class="token function">update</span><span class="token punctuation">(</span>sql<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> <span class="token string">&quot;delete success&quot;</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><h2 id="_2、自定义数据源druiddatasource" tabindex="-1"><a class="header-anchor" href="#_2、自定义数据源druiddatasource" aria-hidden="true">#</a> 2、自定义数据源DruidDataSource</h2><p>通过源码查看DataSourceAutoConfiguration.java</p><div class="language-java" data-ext="java"><pre class="language-java"><code><span class="token annotation punctuation">@Configuration</span><span class="token punctuation">(</span>proxyBeanMethods <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">)</span>
<span class="token annotation punctuation">@ConditionalOnClass</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token class-name">DataSource</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">,</span> <span class="token class-name">EmbeddedDatabaseType</span><span class="token punctuation">.</span><span class="token keyword">class</span> <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token annotation punctuation">@EnableConfigurationProperties</span><span class="token punctuation">(</span><span class="token class-name">DataSourceProperties</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">)</span>
<span class="token annotation punctuation">@Import</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token class-name">DataSourcePoolMetadataProvidersConfiguration</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">,</span> <span class="token class-name">DataSourceInitializationConfiguration</span><span class="token punctuation">.</span><span class="token keyword">class</span> <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">DataSourceAutoConfiguration</span> <span class="token punctuation">{</span>

	<span class="token annotation punctuation">@Configuration</span><span class="token punctuation">(</span>proxyBeanMethods <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">)</span>
	<span class="token annotation punctuation">@Conditional</span><span class="token punctuation">(</span><span class="token class-name">EmbeddedDatabaseCondition</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">)</span>
	<span class="token annotation punctuation">@ConditionalOnMissingBean</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token class-name">DataSource</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">,</span> <span class="token class-name">XADataSource</span><span class="token punctuation">.</span><span class="token keyword">class</span> <span class="token punctuation">}</span><span class="token punctuation">)</span>
	<span class="token annotation punctuation">@Import</span><span class="token punctuation">(</span><span class="token class-name">EmbeddedDataSourceConfiguration</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">)</span>
	<span class="token keyword">protected</span> <span class="token keyword">static</span> <span class="token keyword">class</span> <span class="token class-name">EmbeddedDatabaseConfiguration</span> <span class="token punctuation">{</span>

	<span class="token punctuation">}</span>

	<span class="token annotation punctuation">@Configuration</span><span class="token punctuation">(</span>proxyBeanMethods <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">)</span>
	<span class="token annotation punctuation">@Conditional</span><span class="token punctuation">(</span><span class="token class-name">PooledDataSourceCondition</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">)</span>
	<span class="token annotation punctuation">@ConditionalOnMissingBean</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token class-name">DataSource</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">,</span> <span class="token class-name">XADataSource</span><span class="token punctuation">.</span><span class="token keyword">class</span> <span class="token punctuation">}</span><span class="token punctuation">)</span>
	<span class="token annotation punctuation">@Import</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token class-name">DataSourceConfiguration<span class="token punctuation">.</span>Hikari</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">,</span> <span class="token class-name">DataSourceConfiguration<span class="token punctuation">.</span>Tomcat</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">,</span>
			<span class="token class-name">DataSourceConfiguration<span class="token punctuation">.</span>Dbcp2</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">,</span> <span class="token class-name">DataSourceConfiguration<span class="token punctuation">.</span>Generic</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">,</span>
			<span class="token class-name">DataSourceJmxConfiguration</span><span class="token punctuation">.</span><span class="token keyword">class</span> <span class="token punctuation">}</span><span class="token punctuation">)</span>
	<span class="token keyword">protected</span> <span class="token keyword">static</span> <span class="token keyword">class</span> <span class="token class-name">PooledDataSourceConfiguration</span> <span class="token punctuation">{</span>

	<span class="token punctuation">}</span>

	<span class="token doc-comment comment">/**
	 * <span class="token punctuation">{</span><span class="token keyword">@link</span> <span class="token reference"><span class="token class-name">AnyNestedCondition</span></span><span class="token punctuation">}</span> that checks that either <span class="token punctuation">{</span><span class="token keyword">@code</span> <span class="token code-section"><span class="token code language-java">spring<span class="token punctuation">.</span>datasource<span class="token punctuation">.</span>type</span></span><span class="token punctuation">}</span>
	 * is set or <span class="token punctuation">{</span><span class="token keyword">@link</span> <span class="token reference"><span class="token class-name">PooledDataSourceAvailableCondition</span></span><span class="token punctuation">}</span> applies.
	 */</span>
	<span class="token keyword">static</span> <span class="token keyword">class</span> <span class="token class-name">PooledDataSourceCondition</span> <span class="token keyword">extends</span> <span class="token class-name">AnyNestedCondition</span> <span class="token punctuation">{</span>

		<span class="token class-name">PooledDataSourceCondition</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			<span class="token keyword">super</span><span class="token punctuation">(</span><span class="token class-name">ConfigurationPhase</span><span class="token punctuation">.</span><span class="token constant">PARSE_CONFIGURATION</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span>

		<span class="token annotation punctuation">@ConditionalOnProperty</span><span class="token punctuation">(</span>prefix <span class="token operator">=</span> <span class="token string">&quot;spring.datasource&quot;</span><span class="token punctuation">,</span> name <span class="token operator">=</span> <span class="token string">&quot;type&quot;</span><span class="token punctuation">)</span>
		<span class="token keyword">static</span> <span class="token keyword">class</span> <span class="token class-name">ExplicitType</span> <span class="token punctuation">{</span>

		<span class="token punctuation">}</span>

		<span class="token annotation punctuation">@Conditional</span><span class="token punctuation">(</span><span class="token class-name">PooledDataSourceAvailableCondition</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">)</span>
		<span class="token keyword">static</span> <span class="token keyword">class</span> <span class="token class-name">PooledDataSourceAvailable</span> <span class="token punctuation">{</span>

		<span class="token punctuation">}</span>

	<span class="token punctuation">}</span>
</code></pre></div><p>1、添加druid的maven配置</p><div class="language-xml" data-ext="xml"><pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>com.alibaba<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>druid<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>version</span><span class="token punctuation">&gt;</span></span>1.1.12<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>version</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><p>2、添加数据源的配置</p><div class="language-yaml" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">spring</span><span class="token punctuation">:</span>
  <span class="token key atrule">datasource</span><span class="token punctuation">:</span>
    <span class="token key atrule">username</span><span class="token punctuation">:</span> root
    <span class="token key atrule">password</span><span class="token punctuation">:</span> <span class="token number">123456</span>
    <span class="token key atrule">url</span><span class="token punctuation">:</span> jdbc<span class="token punctuation">:</span>mysql<span class="token punctuation">:</span>//192.168.1.111<span class="token punctuation">:</span>3306/demo<span class="token punctuation">?</span>serverTimezone=UTC<span class="token important">&amp;useUnicode=true@characterEncoding=utf-</span><span class="token number">8</span>
    <span class="token key atrule">driver-class-name</span><span class="token punctuation">:</span> com.mysql.jdbc.Driver
    <span class="token key atrule">type</span><span class="token punctuation">:</span> com.alibaba.druid.pool.DruidDataSource
</code></pre></div><p>3、测试发现数据源已经更改</p><p>4、druid是数据库连接池，可以添加druid的独有配置</p><div class="language-yaml" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">spring</span><span class="token punctuation">:</span>
  <span class="token key atrule">datasource</span><span class="token punctuation">:</span>
    <span class="token key atrule">username</span><span class="token punctuation">:</span> root
    <span class="token key atrule">password</span><span class="token punctuation">:</span> <span class="token number">123456</span>
    <span class="token key atrule">url</span><span class="token punctuation">:</span> jdbc<span class="token punctuation">:</span>mysql<span class="token punctuation">:</span>//192.168.1.111<span class="token punctuation">:</span>3306/demo<span class="token punctuation">?</span>serverTimezone=UTC<span class="token important">&amp;useUnicode=true@characterEncoding=utf-</span><span class="token number">8</span>
    <span class="token key atrule">driver-class-name</span><span class="token punctuation">:</span> com.mysql.jdbc.Driver
    <span class="token key atrule">type</span><span class="token punctuation">:</span> com.alibaba.druid.pool.DruidDataSource
    <span class="token comment">#Spring Boot 默认是不注入这些属性值的，需要自己绑定</span>
    <span class="token comment">#druid 数据源专有配置</span>
    <span class="token key atrule">initialSize</span><span class="token punctuation">:</span> <span class="token number">5</span>
    <span class="token key atrule">minIdle</span><span class="token punctuation">:</span> <span class="token number">5</span>
    <span class="token key atrule">maxActive</span><span class="token punctuation">:</span> <span class="token number">20</span>
    <span class="token key atrule">maxWait</span><span class="token punctuation">:</span> <span class="token number">60000</span>
    <span class="token key atrule">timeBetweenEvictionRunsMillis</span><span class="token punctuation">:</span> <span class="token number">60000</span>
    <span class="token key atrule">minEvictableIdleTimeMillis</span><span class="token punctuation">:</span> <span class="token number">300000</span>
    <span class="token key atrule">validationQuery</span><span class="token punctuation">:</span> SELECT 1 FROM DUAL
    <span class="token key atrule">testWhileIdle</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
    <span class="token key atrule">testOnBorrow</span><span class="token punctuation">:</span> <span class="token boolean important">false</span>
    <span class="token key atrule">testOnReturn</span><span class="token punctuation">:</span> <span class="token boolean important">false</span>
    <span class="token key atrule">poolPreparedStatements</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>

    <span class="token comment">#配置监控统计拦截的filters，stat:监控统计、log4j：日志记录、wall：防御sql注入</span>
    <span class="token comment">#如果允许时报错  java.lang.ClassNotFoundException: org.apache.log4j.Priority</span>
    <span class="token comment">#则导入 log4j 依赖即可，Maven 地址： https://mvnrepository.com/artifact/log4j/log4j</span>
    <span class="token key atrule">filters</span><span class="token punctuation">:</span> stat<span class="token punctuation">,</span>wall<span class="token punctuation">,</span>log4j
    <span class="token key atrule">maxPoolPreparedStatementPerConnectionSize</span><span class="token punctuation">:</span> <span class="token number">20</span>
    <span class="token key atrule">useGlobalDataSourceStat</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
    <span class="token key atrule">connectionProperties</span><span class="token punctuation">:</span> druid.stat.mergeSql=true;druid.stat.slowSqlMillis=500
</code></pre></div><p>测试类，发现配置的参数没有生效</p><div class="language-java" data-ext="java"><pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">com<span class="token punctuation">.</span>osvue</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token import"><span class="token namespace">com<span class="token punctuation">.</span>alibaba<span class="token punctuation">.</span>druid<span class="token punctuation">.</span>pool<span class="token punctuation">.</span></span><span class="token class-name">DruidDataSource</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>junit<span class="token punctuation">.</span>jupiter<span class="token punctuation">.</span>api<span class="token punctuation">.</span></span><span class="token class-name">Test</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>beans<span class="token punctuation">.</span>factory<span class="token punctuation">.</span>annotation<span class="token punctuation">.</span></span><span class="token class-name">Autowired</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>boot<span class="token punctuation">.</span>test<span class="token punctuation">.</span>context<span class="token punctuation">.</span></span><span class="token class-name">SpringBootTest</span></span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token import"><span class="token namespace">javax<span class="token punctuation">.</span>sql<span class="token punctuation">.</span></span><span class="token class-name">DataSource</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>sql<span class="token punctuation">.</span></span><span class="token class-name">Connection</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>sql<span class="token punctuation">.</span></span><span class="token class-name">SQLException</span></span><span class="token punctuation">;</span>

<span class="token annotation punctuation">@SpringBootTest</span>
<span class="token keyword">class</span> <span class="token class-name">DataApplicationTests</span> <span class="token punctuation">{</span>

    <span class="token annotation punctuation">@Autowired</span>
    <span class="token class-name">DataSource</span> dataSource<span class="token punctuation">;</span>

    <span class="token annotation punctuation">@Test</span>
    <span class="token keyword">void</span> <span class="token function">contextLoads</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">SQLException</span> <span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>dataSource<span class="token punctuation">.</span><span class="token function">getClass</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">Connection</span> connection <span class="token operator">=</span> dataSource<span class="token punctuation">.</span><span class="token function">getConnection</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>connection<span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token class-name">DruidDataSource</span> druidDataSource <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token class-name">DruidDataSource</span><span class="token punctuation">)</span>dataSource<span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>druidDataSource<span class="token punctuation">.</span><span class="token function">getMaxActive</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>druidDataSource<span class="token punctuation">.</span><span class="token function">getInitialSize</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        connection<span class="token punctuation">.</span><span class="token function">close</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

<span class="token punctuation">}</span>

</code></pre></div><p>需要定义druidDatasource的配置类，绑定参数</p><div class="language-java" data-ext="java"><pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">com<span class="token punctuation">.</span>osvue<span class="token punctuation">.</span>config</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token import"><span class="token namespace">com<span class="token punctuation">.</span>alibaba<span class="token punctuation">.</span>druid<span class="token punctuation">.</span>pool<span class="token punctuation">.</span></span><span class="token class-name">DruidDataSource</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>boot<span class="token punctuation">.</span>context<span class="token punctuation">.</span>properties<span class="token punctuation">.</span></span><span class="token class-name">ConfigurationProperties</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>context<span class="token punctuation">.</span>annotation<span class="token punctuation">.</span></span><span class="token class-name">Bean</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>context<span class="token punctuation">.</span>annotation<span class="token punctuation">.</span></span><span class="token class-name">Configuration</span></span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token import"><span class="token namespace">javax<span class="token punctuation">.</span>sql<span class="token punctuation">.</span></span><span class="token class-name">DataSource</span></span><span class="token punctuation">;</span>

<span class="token annotation punctuation">@Configuration</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">DruidConfig</span> <span class="token punctuation">{</span>
    <span class="token annotation punctuation">@ConfigurationProperties</span><span class="token punctuation">(</span>prefix <span class="token operator">=</span> <span class="token string">&quot;spring.datasource&quot;</span><span class="token punctuation">)</span>
    <span class="token annotation punctuation">@Bean</span>
    <span class="token keyword">public</span> <span class="token class-name">DataSource</span> <span class="token function">druidDataSource</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">DruidDataSource</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre></div><p>Druid数据源还具有监控的功能，并提供了一个web界面方便用户进行查看。</p><p>加入log4j的日志依赖</p><div class="language-xml" data-ext="xml"><pre class="language-xml"><code>        <span class="token comment">&lt;!-- https://mvnrepository.com/artifact/log4j/log4j --&gt;</span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>log4j<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>log4j<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>version</span><span class="token punctuation">&gt;</span></span>1.2.17<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>version</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><p>向DruidConfig中添加代码，配置druid监控管理台的servlet</p><div class="language-java" data-ext="java"><pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">com<span class="token punctuation">.</span>osvue<span class="token punctuation">.</span>config</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token import"><span class="token namespace">com<span class="token punctuation">.</span>alibaba<span class="token punctuation">.</span>druid<span class="token punctuation">.</span>pool<span class="token punctuation">.</span></span><span class="token class-name">DruidDataSource</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">com<span class="token punctuation">.</span>alibaba<span class="token punctuation">.</span>druid<span class="token punctuation">.</span>support<span class="token punctuation">.</span>http<span class="token punctuation">.</span></span><span class="token class-name">StatViewServlet</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">com<span class="token punctuation">.</span>alibaba<span class="token punctuation">.</span>druid<span class="token punctuation">.</span>support<span class="token punctuation">.</span>http<span class="token punctuation">.</span></span><span class="token class-name">WebStatFilter</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>boot<span class="token punctuation">.</span>context<span class="token punctuation">.</span>properties<span class="token punctuation">.</span></span><span class="token class-name">ConfigurationProperties</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>boot<span class="token punctuation">.</span>web<span class="token punctuation">.</span>servlet<span class="token punctuation">.</span></span><span class="token class-name">FilterRegistrationBean</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>boot<span class="token punctuation">.</span>web<span class="token punctuation">.</span>servlet<span class="token punctuation">.</span></span><span class="token class-name">ServletRegistrationBean</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>context<span class="token punctuation">.</span>annotation<span class="token punctuation">.</span></span><span class="token class-name">Bean</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>context<span class="token punctuation">.</span>annotation<span class="token punctuation">.</span></span><span class="token class-name">Configuration</span></span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token import"><span class="token namespace">javax<span class="token punctuation">.</span>servlet<span class="token punctuation">.</span></span><span class="token class-name">Servlet</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">javax<span class="token punctuation">.</span>sql<span class="token punctuation">.</span></span><span class="token class-name">DataSource</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>util<span class="token punctuation">.</span></span><span class="token class-name">Arrays</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>util<span class="token punctuation">.</span></span><span class="token class-name">HashMap</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>util<span class="token punctuation">.</span></span><span class="token class-name">Map</span></span><span class="token punctuation">;</span>

<span class="token annotation punctuation">@Configuration</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">DruidConfig</span> <span class="token punctuation">{</span>
    <span class="token annotation punctuation">@ConfigurationProperties</span><span class="token punctuation">(</span>prefix <span class="token operator">=</span> <span class="token string">&quot;spring.datasource&quot;</span><span class="token punctuation">)</span>
    <span class="token annotation punctuation">@Bean</span>
    <span class="token keyword">public</span> <span class="token class-name">DataSource</span> <span class="token function">druidDataSource</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">DruidDataSource</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token annotation punctuation">@Bean</span>
    <span class="token keyword">public</span> <span class="token class-name">ServletRegistrationBean</span> <span class="token function">druidServletRegistrationBean</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token class-name">ServletRegistrationBean</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Servlet</span><span class="token punctuation">&gt;</span></span> servletRegistrationBean <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ServletRegistrationBean</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">StatViewServlet</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span><span class="token string">&quot;/druid/*&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">Map</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">,</span><span class="token class-name">String</span><span class="token punctuation">&gt;</span></span> initParams <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">HashMap</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        initParams<span class="token punctuation">.</span><span class="token function">put</span><span class="token punctuation">(</span><span class="token string">&quot;loginUsername&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;admin&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        initParams<span class="token punctuation">.</span><span class="token function">put</span><span class="token punctuation">(</span><span class="token string">&quot;loginPassword&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;123456&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">//后台允许谁可以访问</span>
        <span class="token comment">//initParams.put(&quot;allow&quot;, &quot;localhost&quot;)：表示只有本机可以访问</span>
        <span class="token comment">//initParams.put(&quot;allow&quot;, &quot;&quot;)：为空或者为null时，表示允许所有访问</span>
        initParams<span class="token punctuation">.</span><span class="token function">put</span><span class="token punctuation">(</span><span class="token string">&quot;allow&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">//deny：Druid 后台拒绝谁访问</span>
        <span class="token comment">//initParams.put(&quot;msb&quot;, &quot;192.168.1.20&quot;);表示禁止此ip访问</span>

        servletRegistrationBean<span class="token punctuation">.</span><span class="token function">setInitParameters</span><span class="token punctuation">(</span>initParams<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> servletRegistrationBean<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">//配置 Druid 监控 之  web 监控的 filter</span>
    <span class="token comment">//WebStatFilter：用于配置Web和Druid数据源之间的管理关联监控统计</span>
    <span class="token annotation punctuation">@Bean</span>
    <span class="token keyword">public</span> <span class="token class-name">FilterRegistrationBean</span> <span class="token function">webStatFilter</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">FilterRegistrationBean</span> bean <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">FilterRegistrationBean</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        bean<span class="token punctuation">.</span><span class="token function">setFilter</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">WebStatFilter</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">//exclusions：设置哪些请求进行过滤排除掉，从而不进行统计</span>
        <span class="token class-name">Map</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">,</span> <span class="token class-name">String</span><span class="token punctuation">&gt;</span></span> initParams <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">HashMap</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        initParams<span class="token punctuation">.</span><span class="token function">put</span><span class="token punctuation">(</span><span class="token string">&quot;exclusions&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;*.js,*.css,/druid/*&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        bean<span class="token punctuation">.</span><span class="token function">setInitParameters</span><span class="token punctuation">(</span>initParams<span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">//&quot;/*&quot; 表示过滤所有请求</span>
        bean<span class="token punctuation">.</span><span class="token function">setUrlPatterns</span><span class="token punctuation">(</span><span class="token class-name">Arrays</span><span class="token punctuation">.</span><span class="token function">asList</span><span class="token punctuation">(</span><span class="token string">&quot;/*&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> bean<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><h2 id="_3、springboot配置多数据源并动态切换" tabindex="-1"><a class="header-anchor" href="#_3、springboot配置多数据源并动态切换" aria-hidden="true">#</a> 3、springboot配置多数据源并动态切换</h2><p>​ DataSource是和线程绑定的，动态数据源的配置主要是通过继承AbstractRoutingDataSource类实现的，实现在AbstractRoutingDataSource类中的 protected Object determineCurrentLookupKey()方法来获取数据源，所以我们需要先创建一个多线程线程数据隔离的类来存放DataSource，然后在determineCurrentLookupKey()方法中通过这个类获取当前线程的DataSource，在AbstractRoutingDataSource类中，DataSource是通过Key-value的方式保存的，我们可以通过ThreadLocal来保存Key，从而实现数据源的动态切换。</p><p>1、修改配置文件类</p><div class="language-yaml" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">spring</span><span class="token punctuation">:</span>
  <span class="token key atrule">datasource</span><span class="token punctuation">:</span>
    <span class="token key atrule">local</span><span class="token punctuation">:</span>
      <span class="token key atrule">username</span><span class="token punctuation">:</span> root
      <span class="token key atrule">password</span><span class="token punctuation">:</span> <span class="token number">123456</span>
      <span class="token key atrule">driver-class-name</span><span class="token punctuation">:</span> com.mysql.jdbc.Driver
      <span class="token key atrule">jdbc-url</span><span class="token punctuation">:</span> jdbc<span class="token punctuation">:</span>mysql<span class="token punctuation">:</span>//localhost<span class="token punctuation">:</span>3306/demo<span class="token punctuation">?</span>serverTimezone=UTC<span class="token important">&amp;useUnicode=true@characterEncoding=utf-</span><span class="token number">8</span>
    <span class="token key atrule">remote</span><span class="token punctuation">:</span>
      <span class="token key atrule">username</span><span class="token punctuation">:</span> root
      <span class="token key atrule">password</span><span class="token punctuation">:</span> <span class="token number">123456</span>
      <span class="token key atrule">driver-class-name</span><span class="token punctuation">:</span> com.mysql.jdbc.Driver
      <span class="token key atrule">jdbc-url</span><span class="token punctuation">:</span> jdbc<span class="token punctuation">:</span>mysql<span class="token punctuation">:</span>//192.168.85.111<span class="token punctuation">:</span>3306/demo<span class="token punctuation">?</span>serverTimezone=UTC<span class="token important">&amp;useUnicode=true@characterEncoding=utf-</span><span class="token number">8</span>
</code></pre></div><p>2、创建数据源枚举类</p><div class="language-java" data-ext="java"><pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">com<span class="token punctuation">.</span>osvue<span class="token punctuation">.</span>mult</span><span class="token punctuation">;</span>

<span class="token keyword">public</span> <span class="token keyword">enum</span> <span class="token class-name">DataSourceType</span> <span class="token punctuation">{</span>
    <span class="token constant">REMOTE</span><span class="token punctuation">,</span>
    <span class="token constant">LOCAL</span>
<span class="token punctuation">}</span>
</code></pre></div><p>3、数据源切换处理</p><p>​ 创建一个数据源切换处理类，有对数据源变量的获取、设置和情况的方法，其中threadlocal用于保存某个线程共享变量。</p><div class="language-java" data-ext="java"><pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">com<span class="token punctuation">.</span>osvue<span class="token punctuation">.</span>mult</span><span class="token punctuation">;</span>

<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">DynamicDataSourceContextHolder</span> <span class="token punctuation">{</span>

    <span class="token doc-comment comment">/**
     * 使用ThreadLocal维护变量，ThreadLocal为每个使用该变量的线程提供独立的变量副本，
     *  所以每一个线程都可以独立地改变自己的副本，而不会影响其它线程所对应的副本。
     */</span>
    <span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token keyword">final</span> <span class="token class-name">ThreadLocal</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">&gt;</span></span> <span class="token constant">CONTEXT_HOLDER</span> <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ThreadLocal</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token doc-comment comment">/**
     * 设置数据源变量
     * <span class="token keyword">@param</span> <span class="token parameter">dataSourceType</span>
     */</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">setDataSourceType</span><span class="token punctuation">(</span><span class="token class-name">String</span> dataSourceType<span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;切换到{%s}数据源&quot;</span><span class="token punctuation">,</span> dataSourceType<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token constant">CONTEXT_HOLDER</span><span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span>dataSourceType<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/**
     * 获取数据源变量
     * <span class="token keyword">@return</span>
     */</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token class-name">String</span> <span class="token function">getDataSourceType</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token constant">CONTEXT_HOLDER</span><span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/**
     * 清空数据源变量
     */</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">clearDataSourceType</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token constant">CONTEXT_HOLDER</span><span class="token punctuation">.</span><span class="token function">remove</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><p>4、继承AbstractRoutingDataSource</p><p>​ 动态切换数据源主要依靠AbstractRoutingDataSource。创建一个AbstractRoutingDataSource的子类，重写determineCurrentLookupKey方法，用于决定使用哪一个数据源。这里主要用到AbstractRoutingDataSource的两个属性defaultTargetDataSource和targetDataSources。defaultTargetDataSource默认目标数据源，targetDataSources（map类型）存放用来切换的数据源。</p><div class="language-java" data-ext="java"><pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">com<span class="token punctuation">.</span>osvue<span class="token punctuation">.</span>mult</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>jdbc<span class="token punctuation">.</span>datasource<span class="token punctuation">.</span>lookup<span class="token punctuation">.</span></span><span class="token class-name">AbstractRoutingDataSource</span></span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token import"><span class="token namespace">javax<span class="token punctuation">.</span>sql<span class="token punctuation">.</span></span><span class="token class-name">DataSource</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>util<span class="token punctuation">.</span></span><span class="token class-name">Map</span></span><span class="token punctuation">;</span>

<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">DynamicDataSource</span> <span class="token keyword">extends</span> <span class="token class-name">AbstractRoutingDataSource</span> <span class="token punctuation">{</span>

    <span class="token keyword">public</span> <span class="token class-name">DynamicDataSource</span><span class="token punctuation">(</span><span class="token class-name">DataSource</span> defaultTargetDataSource<span class="token punctuation">,</span> <span class="token class-name">Map</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Object</span><span class="token punctuation">,</span> <span class="token class-name">Object</span><span class="token punctuation">&gt;</span></span> targetDataSources<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">super</span><span class="token punctuation">.</span><span class="token function">setDefaultTargetDataSource</span><span class="token punctuation">(</span>defaultTargetDataSource<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">super</span><span class="token punctuation">.</span><span class="token function">setTargetDataSources</span><span class="token punctuation">(</span>targetDataSources<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">// afterPropertiesSet()方法调用时用来将targetDataSources的属性写入resolvedDataSources中的</span>
        <span class="token keyword">super</span><span class="token punctuation">.</span><span class="token function">afterPropertiesSet</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/**
     * 根据Key获取数据源的信息
     *
     * <span class="token keyword">@return</span>
     */</span>
    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">protected</span> <span class="token class-name">Object</span> <span class="token function">determineCurrentLookupKey</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token class-name">DynamicDataSourceContextHolder</span><span class="token punctuation">.</span><span class="token function">getDataSourceType</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><p>5、注入数据源</p><div class="language-java" data-ext="java"><pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">com<span class="token punctuation">.</span>osvue<span class="token punctuation">.</span>mult</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>boot<span class="token punctuation">.</span>autoconfigure<span class="token punctuation">.</span>condition<span class="token punctuation">.</span></span><span class="token class-name">ConditionalOnProperty</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>boot<span class="token punctuation">.</span>context<span class="token punctuation">.</span>properties<span class="token punctuation">.</span></span><span class="token class-name">ConfigurationProperties</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>boot<span class="token punctuation">.</span>jdbc<span class="token punctuation">.</span></span><span class="token class-name">DataSourceBuilder</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>context<span class="token punctuation">.</span>annotation<span class="token punctuation">.</span></span><span class="token class-name">Bean</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>context<span class="token punctuation">.</span>annotation<span class="token punctuation">.</span></span><span class="token class-name">Configuration</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>context<span class="token punctuation">.</span>annotation<span class="token punctuation">.</span></span><span class="token class-name">Primary</span></span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token import"><span class="token namespace">javax<span class="token punctuation">.</span>sql<span class="token punctuation">.</span></span><span class="token class-name">DataSource</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>util<span class="token punctuation">.</span></span><span class="token class-name">HashMap</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>util<span class="token punctuation">.</span></span><span class="token class-name">Map</span></span><span class="token punctuation">;</span>

<span class="token annotation punctuation">@Configuration</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">DataSourceConfig</span> <span class="token punctuation">{</span>
    <span class="token annotation punctuation">@Bean</span>
    <span class="token annotation punctuation">@ConfigurationProperties</span><span class="token punctuation">(</span><span class="token string">&quot;spring.datasource.remote&quot;</span><span class="token punctuation">)</span>
    <span class="token keyword">public</span> <span class="token class-name">DataSource</span> <span class="token function">remoteDataSource</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token class-name">DataSourceBuilder</span><span class="token punctuation">.</span><span class="token function">create</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">build</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token annotation punctuation">@Bean</span>
    <span class="token annotation punctuation">@ConfigurationProperties</span><span class="token punctuation">(</span><span class="token string">&quot;spring.datasource.local&quot;</span><span class="token punctuation">)</span>
    <span class="token keyword">public</span> <span class="token class-name">DataSource</span> <span class="token function">localDataSource</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token class-name">DataSourceBuilder</span><span class="token punctuation">.</span><span class="token function">create</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">build</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    
    <span class="token annotation punctuation">@Bean</span><span class="token punctuation">(</span>name <span class="token operator">=</span> <span class="token string">&quot;dynamicDataSource&quot;</span><span class="token punctuation">)</span>
    <span class="token annotation punctuation">@Primary</span>
    <span class="token keyword">public</span> <span class="token class-name">DynamicDataSource</span> <span class="token function">dataSource</span><span class="token punctuation">(</span><span class="token class-name">DataSource</span> remoteDataSource<span class="token punctuation">,</span> <span class="token class-name">DataSource</span> localDataSource<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">Map</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Object</span><span class="token punctuation">,</span> <span class="token class-name">Object</span><span class="token punctuation">&gt;</span></span> targetDataSources <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">HashMap</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        targetDataSources<span class="token punctuation">.</span><span class="token function">put</span><span class="token punctuation">(</span><span class="token class-name">DataSourceType</span><span class="token punctuation">.</span><span class="token constant">REMOTE</span><span class="token punctuation">.</span><span class="token function">name</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> remoteDataSource<span class="token punctuation">)</span><span class="token punctuation">;</span>
        targetDataSources<span class="token punctuation">.</span><span class="token function">put</span><span class="token punctuation">(</span><span class="token class-name">DataSourceType</span><span class="token punctuation">.</span><span class="token constant">LOCAL</span><span class="token punctuation">.</span><span class="token function">name</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> localDataSource<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">DynamicDataSource</span><span class="token punctuation">(</span>remoteDataSource<span class="token punctuation">,</span> targetDataSources<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><p>6、自定义多数据源切换注解</p><p>​ 设置拦截数据源的注解，可以设置在具体的类上，或者在具体的方法上</p><div class="language-java" data-ext="java"><pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">com<span class="token punctuation">.</span>osvue<span class="token punctuation">.</span>mult</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>lang<span class="token punctuation">.</span>annotation<span class="token punctuation">.</span></span><span class="token operator">*</span></span><span class="token punctuation">;</span>

<span class="token annotation punctuation">@Target</span><span class="token punctuation">(</span><span class="token class-name">ElementType</span><span class="token punctuation">.</span><span class="token constant">METHOD</span><span class="token punctuation">)</span>
<span class="token annotation punctuation">@Retention</span><span class="token punctuation">(</span><span class="token class-name">RetentionPolicy</span><span class="token punctuation">.</span><span class="token constant">RUNTIME</span><span class="token punctuation">)</span>
<span class="token annotation punctuation">@Documented</span>
<span class="token keyword">public</span> <span class="token annotation punctuation">@interface</span> <span class="token class-name">DataSource</span> <span class="token punctuation">{</span>
    <span class="token doc-comment comment">/**
     * 切换数据源名称
     */</span>
    <span class="token class-name">DataSourceType</span> <span class="token function">value</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">default</span> <span class="token class-name">DataSourceType</span><span class="token punctuation">.</span><span class="token constant">REMOTE</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><p>7、AOP拦截类的实现</p><p>​ 通过拦截上面的注解，在其执行之前处理设置当前执行SQL的数据源的信息，CONTEXT_HOLDER.set(dataSourceType)这里的数据源信息从我们设置的注解上面获取信息，如果没有设置就是用默认的数据源的信息。</p><div class="language-java" data-ext="java"><pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">com<span class="token punctuation">.</span>osvue<span class="token punctuation">.</span>mult</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>aspectj<span class="token punctuation">.</span>lang<span class="token punctuation">.</span></span><span class="token class-name">ProceedingJoinPoint</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>aspectj<span class="token punctuation">.</span>lang<span class="token punctuation">.</span>annotation<span class="token punctuation">.</span></span><span class="token class-name">Around</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>aspectj<span class="token punctuation">.</span>lang<span class="token punctuation">.</span>annotation<span class="token punctuation">.</span></span><span class="token class-name">Aspect</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>aspectj<span class="token punctuation">.</span>lang<span class="token punctuation">.</span>annotation<span class="token punctuation">.</span></span><span class="token class-name">Pointcut</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>aspectj<span class="token punctuation">.</span>lang<span class="token punctuation">.</span>reflect<span class="token punctuation">.</span></span><span class="token class-name">MethodSignature</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>core<span class="token punctuation">.</span>annotation<span class="token punctuation">.</span></span><span class="token class-name">Order</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>stereotype<span class="token punctuation">.</span></span><span class="token class-name">Component</span></span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>lang<span class="token punctuation">.</span>reflect<span class="token punctuation">.</span></span><span class="token class-name">Method</span></span><span class="token punctuation">;</span>

<span class="token annotation punctuation">@Aspect</span>
<span class="token annotation punctuation">@Order</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span>
<span class="token annotation punctuation">@Component</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">DataSourceAspect</span> <span class="token punctuation">{</span>

    <span class="token annotation punctuation">@Pointcut</span><span class="token punctuation">(</span><span class="token string">&quot;@annotation(com.osvue.mult.DataSource)&quot;</span><span class="token punctuation">)</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">dsPointCut</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>

    <span class="token punctuation">}</span>

    <span class="token annotation punctuation">@Around</span><span class="token punctuation">(</span><span class="token string">&quot;dsPointCut()&quot;</span><span class="token punctuation">)</span>
    <span class="token keyword">public</span> <span class="token class-name">Object</span> <span class="token function">around</span><span class="token punctuation">(</span><span class="token class-name">ProceedingJoinPoint</span> point<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">Throwable</span> <span class="token punctuation">{</span>
        <span class="token class-name">MethodSignature</span> signature <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token class-name">MethodSignature</span><span class="token punctuation">)</span> point<span class="token punctuation">.</span><span class="token function">getSignature</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">Method</span> method <span class="token operator">=</span> signature<span class="token punctuation">.</span><span class="token function">getMethod</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">DataSource</span> dataSource <span class="token operator">=</span> method<span class="token punctuation">.</span><span class="token function">getAnnotation</span><span class="token punctuation">(</span><span class="token class-name">DataSource</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>dataSource <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token class-name">DynamicDataSourceContextHolder</span><span class="token punctuation">.</span><span class="token function">setDataSourceType</span><span class="token punctuation">(</span>dataSource<span class="token punctuation">.</span><span class="token function">value</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">name</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">try</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span> point<span class="token punctuation">.</span><span class="token function">proceed</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span> <span class="token keyword">finally</span> <span class="token punctuation">{</span>
            <span class="token comment">// 销毁数据源 在执行方法之后</span>
            <span class="token class-name">DynamicDataSourceContextHolder</span><span class="token punctuation">.</span><span class="token function">clearDataSourceType</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><p>8、使用切换数据源注解</p><div class="language-java" data-ext="java"><pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">com<span class="token punctuation">.</span>osvue<span class="token punctuation">.</span>mult</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>beans<span class="token punctuation">.</span>factory<span class="token punctuation">.</span>annotation<span class="token punctuation">.</span></span><span class="token class-name">Autowired</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>jdbc<span class="token punctuation">.</span>core<span class="token punctuation">.</span></span><span class="token class-name">JdbcTemplate</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>web<span class="token punctuation">.</span>bind<span class="token punctuation">.</span>annotation<span class="token punctuation">.</span></span><span class="token class-name">GetMapping</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>web<span class="token punctuation">.</span>bind<span class="token punctuation">.</span>annotation<span class="token punctuation">.</span></span><span class="token class-name">RestController</span></span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>util<span class="token punctuation">.</span></span><span class="token class-name">List</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>util<span class="token punctuation">.</span></span><span class="token class-name">Map</span></span><span class="token punctuation">;</span>


<span class="token annotation punctuation">@RestController</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">EmpController</span> <span class="token punctuation">{</span>

    <span class="token annotation punctuation">@Autowired</span>
    <span class="token class-name">JdbcTemplate</span> jdbcTemplate<span class="token punctuation">;</span>

    <span class="token annotation punctuation">@GetMapping</span><span class="token punctuation">(</span><span class="token string">&quot;/local&quot;</span><span class="token punctuation">)</span>
    <span class="token annotation punctuation">@DataSource</span><span class="token punctuation">(</span>value <span class="token operator">=</span> <span class="token class-name">DataSourceType</span><span class="token punctuation">.</span><span class="token constant">LOCAL</span><span class="token punctuation">)</span>
    <span class="token keyword">public</span> <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Map</span><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">,</span> <span class="token class-name">Object</span><span class="token punctuation">&gt;</span><span class="token punctuation">&gt;</span></span> <span class="token function">local</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Map</span><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">,</span> <span class="token class-name">Object</span><span class="token punctuation">&gt;</span><span class="token punctuation">&gt;</span></span> maps <span class="token operator">=</span> jdbcTemplate<span class="token punctuation">.</span><span class="token function">queryForList</span><span class="token punctuation">(</span><span class="token string">&quot;select * from emp&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> maps<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token annotation punctuation">@GetMapping</span><span class="token punctuation">(</span><span class="token string">&quot;/remote&quot;</span><span class="token punctuation">)</span>
    <span class="token annotation punctuation">@DataSource</span><span class="token punctuation">(</span>value <span class="token operator">=</span> <span class="token class-name">DataSourceType</span><span class="token punctuation">.</span><span class="token constant">REMOTE</span><span class="token punctuation">)</span>
    <span class="token keyword">public</span> <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Map</span><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">,</span> <span class="token class-name">Object</span><span class="token punctuation">&gt;</span><span class="token punctuation">&gt;</span></span> <span class="token function">remote</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Map</span><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">,</span> <span class="token class-name">Object</span><span class="token punctuation">&gt;</span><span class="token punctuation">&gt;</span></span> maps <span class="token operator">=</span> jdbcTemplate<span class="token punctuation">.</span><span class="token function">queryForList</span><span class="token punctuation">(</span><span class="token string">&quot;select * from emp&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> maps<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

<span class="token punctuation">}</span>
</code></pre></div><p>9、在启动项目的过程中会发生循环依赖的问题，直接修改启动类即可</p><div class="language-java" data-ext="java"><pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">com<span class="token punctuation">.</span>osvue</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>boot<span class="token punctuation">.</span></span><span class="token class-name">SpringApplication</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>boot<span class="token punctuation">.</span>autoconfigure<span class="token punctuation">.</span></span><span class="token class-name">SpringBootApplication</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>boot<span class="token punctuation">.</span>autoconfigure<span class="token punctuation">.</span>jdbc<span class="token punctuation">.</span></span><span class="token class-name">DataSourceAutoConfiguration</span></span><span class="token punctuation">;</span>

<span class="token annotation punctuation">@SpringBootApplication</span><span class="token punctuation">(</span>exclude <span class="token operator">=</span> <span class="token class-name">DataSourceAutoConfiguration</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">)</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">SpringbootDataApplication</span> <span class="token punctuation">{</span>

    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">SpringApplication</span><span class="token punctuation">.</span><span class="token function">run</span><span class="token punctuation">(</span><span class="token class-name">SpringbootDataApplication</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">,</span> args<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><h2 id="_4、springboot整合mybatis" tabindex="-1"><a class="header-anchor" href="#_4、springboot整合mybatis" aria-hidden="true">#</a> 4、springboot整合mybatis</h2><p>1、导入mybatis的依赖</p><div class="language-xml" data-ext="xml"><pre class="language-xml"><code><span class="token comment">&lt;!-- https://mvnrepository.com/artifact/org.mybatis.spring.boot/mybatis-spring-boot-starter --&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>org.mybatis.spring.boot<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>mybatis-spring-boot-starter<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>version</span><span class="token punctuation">&gt;</span></span>2.1.1<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>version</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">&gt;</span></span>

</code></pre></div><p>2、配置数据源</p><div class="language-yaml" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">spring</span><span class="token punctuation">:</span>
  <span class="token key atrule">datasource</span><span class="token punctuation">:</span>
    <span class="token key atrule">username</span><span class="token punctuation">:</span> root
    <span class="token key atrule">password</span><span class="token punctuation">:</span> <span class="token number">123456</span>
    <span class="token key atrule">url</span><span class="token punctuation">:</span> jdbc<span class="token punctuation">:</span>mysql<span class="token punctuation">:</span>//192.168.85.111<span class="token punctuation">:</span>3306/demo<span class="token punctuation">?</span>serverTimezone=UTC<span class="token important">&amp;useUnicode=true@characterEncoding=utf-</span><span class="token number">8</span>
    <span class="token key atrule">driver-class-name</span><span class="token punctuation">:</span> com.mysql.jdbc.Driver
</code></pre></div><p>3、测试类</p><div class="language-java" data-ext="java"><pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">com<span class="token punctuation">.</span>osvue</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token import"><span class="token namespace">com<span class="token punctuation">.</span>alibaba<span class="token punctuation">.</span>druid<span class="token punctuation">.</span>pool<span class="token punctuation">.</span></span><span class="token class-name">DruidDataSource</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>junit<span class="token punctuation">.</span>jupiter<span class="token punctuation">.</span>api<span class="token punctuation">.</span></span><span class="token class-name">Test</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>beans<span class="token punctuation">.</span>factory<span class="token punctuation">.</span>annotation<span class="token punctuation">.</span></span><span class="token class-name">Autowired</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>boot<span class="token punctuation">.</span>test<span class="token punctuation">.</span>context<span class="token punctuation">.</span></span><span class="token class-name">SpringBootTest</span></span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token import"><span class="token namespace">javax<span class="token punctuation">.</span>sql<span class="token punctuation">.</span></span><span class="token class-name">DataSource</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>sql<span class="token punctuation">.</span></span><span class="token class-name">Connection</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>sql<span class="token punctuation">.</span></span><span class="token class-name">SQLException</span></span><span class="token punctuation">;</span>

<span class="token annotation punctuation">@SpringBootTest</span>
<span class="token keyword">class</span> <span class="token class-name">DataApplicationTests</span> <span class="token punctuation">{</span>

    <span class="token annotation punctuation">@Autowired</span>
    <span class="token class-name">DataSource</span> dataSource<span class="token punctuation">;</span>

    <span class="token annotation punctuation">@Test</span>
    <span class="token keyword">void</span> <span class="token function">contextLoads</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">SQLException</span> <span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>dataSource<span class="token punctuation">.</span><span class="token function">getClass</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">Connection</span> connection <span class="token operator">=</span> dataSource<span class="token punctuation">.</span><span class="token function">getConnection</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>connection<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>connection<span class="token punctuation">.</span><span class="token function">getMetaData</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getURL</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        connection<span class="token punctuation">.</span><span class="token function">close</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><p>4、创建实体类</p><div class="language-java" data-ext="java"><pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">com<span class="token punctuation">.</span>osvue<span class="token punctuation">.</span>entity</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>sql<span class="token punctuation">.</span></span><span class="token class-name">Date</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>util<span class="token punctuation">.</span></span><span class="token class-name">Objects</span></span><span class="token punctuation">;</span>

<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Emp</span> <span class="token punctuation">{</span>
    <span class="token keyword">private</span> <span class="token class-name">Integer</span> empno<span class="token punctuation">;</span>
    <span class="token keyword">private</span> <span class="token class-name">String</span> ename<span class="token punctuation">;</span>
    <span class="token keyword">private</span> <span class="token class-name">String</span> job<span class="token punctuation">;</span>
    <span class="token keyword">private</span> <span class="token class-name">Integer</span> mgr<span class="token punctuation">;</span>
    <span class="token keyword">private</span> <span class="token class-name">Date</span> hiredate<span class="token punctuation">;</span>
    <span class="token keyword">private</span> <span class="token class-name">Double</span> sal<span class="token punctuation">;</span>
    <span class="token keyword">private</span> <span class="token class-name">Double</span> comm<span class="token punctuation">;</span>
    <span class="token keyword">private</span> <span class="token class-name">Integer</span> deptno<span class="token punctuation">;</span>

    
<span class="token punctuation">}</span>
</code></pre></div><p>5、配置Mapper接口类</p><div class="language-java" data-ext="java"><pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">com<span class="token punctuation">.</span>osvue<span class="token punctuation">.</span>mapper</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token import"><span class="token namespace">com<span class="token punctuation">.</span>osvue<span class="token punctuation">.</span>entity<span class="token punctuation">.</span></span><span class="token class-name">Emp</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>apache<span class="token punctuation">.</span>ibatis<span class="token punctuation">.</span>annotations<span class="token punctuation">.</span></span><span class="token class-name">Mapper</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>stereotype<span class="token punctuation">.</span></span><span class="token class-name">Repository</span></span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>util<span class="token punctuation">.</span></span><span class="token class-name">List</span></span><span class="token punctuation">;</span>

<span class="token annotation punctuation">@Mapper</span>
<span class="token annotation punctuation">@Repository</span>
<span class="token keyword">public</span> <span class="token keyword">interface</span> <span class="token class-name">EmpMapper</span> <span class="token punctuation">{</span>

    <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Emp</span><span class="token punctuation">&gt;</span></span> <span class="token function">selectEmp</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token class-name">Emp</span> <span class="token function">selectEmpById</span><span class="token punctuation">(</span><span class="token class-name">Integer</span> empno<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token class-name">Integer</span> <span class="token function">addEmp</span><span class="token punctuation">(</span><span class="token class-name">Emp</span> emp<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token class-name">Integer</span> <span class="token function">updateEmp</span><span class="token punctuation">(</span><span class="token class-name">Emp</span> emp<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token class-name">Integer</span> <span class="token function">deleteEmp</span><span class="token punctuation">(</span><span class="token class-name">Integer</span> empno<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

</code></pre></div><p>6、在resources下创建Emp.xml文件</p><div class="language-xml" data-ext="xml"><pre class="language-xml"><code><span class="token prolog">&lt;?xml version=&quot;1.0&quot; encoding=&quot;UTF-8&quot; ?&gt;</span>
<span class="token doctype"><span class="token punctuation">&lt;!</span><span class="token doctype-tag">DOCTYPE</span> <span class="token name">mapper</span>
        <span class="token name">PUBLIC</span> <span class="token string">&quot;-//mybatis.org//DTD Mapper 3.0//EN&quot;</span>
        <span class="token string">&quot;http://mybatis.org/dtd/mybatis-3-mapper.dtd&quot;</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>mapper</span> <span class="token attr-name">namespace</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>com.osvue.mapper.EmpMapper<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>

    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>select</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>selectEmp<span class="token punctuation">&quot;</span></span> <span class="token attr-name">resultType</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>Emp<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    select * from emp
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>select</span><span class="token punctuation">&gt;</span></span>

    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>select</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>selectEmpById<span class="token punctuation">&quot;</span></span> <span class="token attr-name">resultType</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>Emp<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    select * from emp where empno = #{empno}
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>select</span><span class="token punctuation">&gt;</span></span>

    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>insert</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>addEmp<span class="token punctuation">&quot;</span></span> <span class="token attr-name">parameterType</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>Emp<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    insert into emp (empno,ename) values (#{empno},#{ename})
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>insert</span><span class="token punctuation">&gt;</span></span>

    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>update</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>updateEmp<span class="token punctuation">&quot;</span></span> <span class="token attr-name">parameterType</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>Emp<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    update emp set ename=#{ename} where empno = #{empno}
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>update</span><span class="token punctuation">&gt;</span></span>

    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>delete</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>deleteEmp<span class="token punctuation">&quot;</span></span> <span class="token attr-name">parameterType</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>int<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    delete from emp where empno = #{empno}
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>delete</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>mapper</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><p>7、添加配置文件</p><div class="language-yaml" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">spring</span><span class="token punctuation">:</span>
  <span class="token key atrule">datasource</span><span class="token punctuation">:</span>
    <span class="token key atrule">username</span><span class="token punctuation">:</span> root
    <span class="token key atrule">password</span><span class="token punctuation">:</span> <span class="token number">123456</span>
    <span class="token key atrule">url</span><span class="token punctuation">:</span> jdbc<span class="token punctuation">:</span>mysql<span class="token punctuation">:</span>//192.168.85.111<span class="token punctuation">:</span>3306/demo<span class="token punctuation">?</span>serverTimezone=UTC<span class="token important">&amp;useUnicode=true@characterEncoding=utf-</span><span class="token number">8</span>
    <span class="token key atrule">driver-class-name</span><span class="token punctuation">:</span> com.mysql.jdbc.Driver
<span class="token key atrule">mybatis</span><span class="token punctuation">:</span>
  <span class="token key atrule">mapper-locations</span><span class="token punctuation">:</span> classpath<span class="token punctuation">:</span>mybatis/mapper/<span class="token important">*.xml</span>
  <span class="token key atrule">type-aliases-package</span><span class="token punctuation">:</span> com.osvue.entity
</code></pre></div><p>8、编写controller</p><div class="language-java" data-ext="java"><pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">com<span class="token punctuation">.</span>osvue<span class="token punctuation">.</span>contoller</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token import"><span class="token namespace">com<span class="token punctuation">.</span>osvue<span class="token punctuation">.</span>entity<span class="token punctuation">.</span></span><span class="token class-name">Emp</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">com<span class="token punctuation">.</span>osvue<span class="token punctuation">.</span>mapper<span class="token punctuation">.</span></span><span class="token class-name">EmpMapper</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>beans<span class="token punctuation">.</span>factory<span class="token punctuation">.</span>annotation<span class="token punctuation">.</span></span><span class="token class-name">Autowired</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>web<span class="token punctuation">.</span>bind<span class="token punctuation">.</span>annotation<span class="token punctuation">.</span></span><span class="token class-name">GetMapping</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>web<span class="token punctuation">.</span>bind<span class="token punctuation">.</span>annotation<span class="token punctuation">.</span></span><span class="token class-name">RestController</span></span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>util<span class="token punctuation">.</span></span><span class="token class-name">List</span></span><span class="token punctuation">;</span>

<span class="token annotation punctuation">@RestController</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">EmpController</span> <span class="token punctuation">{</span>
    <span class="token annotation punctuation">@Autowired</span>
    <span class="token keyword">private</span> <span class="token class-name">EmpMapper</span> empMapper<span class="token punctuation">;</span>

    <span class="token comment">//选择全部用户</span>
    <span class="token annotation punctuation">@GetMapping</span><span class="token punctuation">(</span><span class="token string">&quot;/selectEmp&quot;</span><span class="token punctuation">)</span>
    <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">selectEmp</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Emp</span><span class="token punctuation">&gt;</span></span> emps <span class="token operator">=</span> empMapper<span class="token punctuation">.</span><span class="token function">selectEmp</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token class-name">Emp</span> <span class="token class-name">Emp</span> <span class="token operator">:</span> emps<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token class-name">Emp</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">return</span> <span class="token string">&quot;ok&quot;</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token comment">//根据id选择用户</span>
    <span class="token annotation punctuation">@GetMapping</span><span class="token punctuation">(</span><span class="token string">&quot;/selectEmpById&quot;</span><span class="token punctuation">)</span>
    <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">selectEmpById</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token class-name">Emp</span> emp <span class="token operator">=</span> empMapper<span class="token punctuation">.</span><span class="token function">selectEmpById</span><span class="token punctuation">(</span><span class="token number">1234</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>emp<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> <span class="token string">&quot;ok&quot;</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token comment">//添加一个用户</span>
    <span class="token annotation punctuation">@GetMapping</span><span class="token punctuation">(</span><span class="token string">&quot;/addEmp&quot;</span><span class="token punctuation">)</span>
    <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">addEmp</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        empMapper<span class="token punctuation">.</span><span class="token function">addEmp</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Emp</span><span class="token punctuation">(</span><span class="token number">1234</span><span class="token punctuation">,</span><span class="token string">&quot;heheda&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> <span class="token string">&quot;ok&quot;</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token comment">//修改一个用户</span>
    <span class="token annotation punctuation">@GetMapping</span><span class="token punctuation">(</span><span class="token string">&quot;/updateEmp&quot;</span><span class="token punctuation">)</span>
    <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">updateEmp</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        empMapper<span class="token punctuation">.</span><span class="token function">updateEmp</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Emp</span><span class="token punctuation">(</span><span class="token number">1234</span><span class="token punctuation">,</span><span class="token string">&quot;heihei&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> <span class="token string">&quot;ok&quot;</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token comment">//根据id删除用户</span>
    <span class="token annotation punctuation">@GetMapping</span><span class="token punctuation">(</span><span class="token string">&quot;/deleteEmp&quot;</span><span class="token punctuation">)</span>
    <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">deleteEmp</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        empMapper<span class="token punctuation">.</span><span class="token function">deleteEmp</span><span class="token punctuation">(</span><span class="token number">1234</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> <span class="token string">&quot;ok&quot;</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre></div><h2 id="hikaridatasource" tabindex="-1"><a class="header-anchor" href="#hikaridatasource" aria-hidden="true">#</a> HikariDataSource</h2><p>以前版本，如 Spring Boot 1.5 默认使用 org.apache.tomcat.jdbc.pool.DataSource 作为数据源；</p><p>HikariDataSource 号称 Java WEB 当前速度最快的数据源，相比于传统的 C3P0 、DBCP、Tomcat jdbc 等连接池更加优秀；</p><div class="language-java" data-ext="java"><pre class="language-java"><code>
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
</code></pre></div><h2 id="druid" tabindex="-1"><a class="header-anchor" href="#druid" aria-hidden="true">#</a> Druid</h2><p>官方地址</p><p>https://github.com/alibaba/druid/tree/master/druid-spring-boot-starter</p><p>https://mvnrepository.com/artifact/com.alibaba/druid-spring-boot-starter/1.1.17</p><h4 id="加入依赖" tabindex="-1"><a class="header-anchor" href="#加入依赖" aria-hidden="true">#</a> 加入依赖</h4><div class="language-xml" data-ext="xml"><pre class="language-xml"><code>		<span class="token comment">&lt;!-- https://mvnrepository.com/artifact/com.alibaba/druid-spring-boot-starter --&gt;</span>
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

</code></pre></div><h4 id="web监控" tabindex="-1"><a class="header-anchor" href="#web监控" aria-hidden="true">#</a> web监控</h4><div class="language-java" data-ext="java"><pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">com<span class="token punctuation">.</span>mashibing<span class="token punctuation">.</span>springboot<span class="token punctuation">.</span>controller</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">com<span class="token punctuation">.</span>alibaba<span class="token punctuation">.</span>druid<span class="token punctuation">.</span>pool<span class="token punctuation">.</span></span><span class="token class-name">DruidDataSource</span></span><span class="token punctuation">;</span>
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

</code></pre></div>`,90),c=[o];function e(u,l){return a(),s("div",null,c)}const i=n(p,[["render",e],["__file","boot_e_druid.html.vue"]]);export{i as default};
