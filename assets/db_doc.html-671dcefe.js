import{_ as n,p as s,q as a,a1 as t}from"./framework-d81ad7e5.js";const p={},e=t(`<h3 id="通过java实现" tabindex="-1"><a class="header-anchor" href="#通过java实现" aria-hidden="true">#</a> 通过java实现</h3><div class="language-xml" data-ext="xml"><pre class="language-xml"><code><span class="token comment">&lt;!-- https://mvnrepository.com/artifact/cn.smallbun.screw/screw-core --&gt;</span>
		<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">&gt;</span></span>
			<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>cn.smallbun.screw<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>
			<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>screw-core<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>
			<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>version</span><span class="token punctuation">&gt;</span></span>1.0.5<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>version</span><span class="token punctuation">&gt;</span></span>
		<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">&gt;</span></span>
		<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">&gt;</span></span>
			<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>mysql<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>
			<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>mysql-connector-java<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>
		<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">&gt;</span></span>
		<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">&gt;</span></span>
			<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>org.springframework.boot<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>
			<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>spring-boot-starter-jdbc<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>
		<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">&gt;</span></span>

		<span class="token comment">&lt;!-- freemarker 模版 --&gt;</span>
		<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">&gt;</span></span>
			<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>org.springframework.boot<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>
			<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>spring-boot-starter-freemarker<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>
		<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><ul><li>配置文件</li></ul><div class="language-properties" data-ext="properties"><pre class="language-properties"><code>
<span class="token key attr-name">spring.datasource.url</span><span class="token punctuation">=</span><span class="token value attr-value">jdbc:mysql://192.168.1.101:3306/ssm?useUnicode=true&amp;characterEncoding=utf-8&amp;useSSL=false&amp;allowMultiQueries=true&amp;serverTimezone=UTC</span>
<span class="token key attr-name">spring.datasource.username</span><span class="token punctuation">=</span><span class="token value attr-value">root</span>
<span class="token key attr-name">spring.datasource.password</span><span class="token punctuation">=</span><span class="token value attr-value">root</span>
<span class="token key attr-name">spring.datasource.driver-class-name</span><span class="token punctuation">=</span><span class="token value attr-value">com.mysql.cj.jdbc.Driver</span>

<span class="token key attr-name">spring.freemarker.checkTemplateLocation</span><span class="token punctuation">=</span><span class="token value attr-value">false</span>
<span class="token key attr-name">spring.freemarker.template-loader-path</span><span class="token punctuation">=</span><span class="token value attr-value">classpath:/templates/</span>
<span class="token key attr-name">spring.freemarker.suffix</span><span class="token punctuation">=</span><span class="token value attr-value">.ftl</span>
<span class="token key attr-name">spring.freemarker.enabled</span><span class="token punctuation">=</span><span class="token value attr-value">true</span>
<span class="token key attr-name">spring.freemarker.cache</span><span class="token punctuation">=</span><span class="token value attr-value">false</span>
<span class="token key attr-name">spring.freemarker.charset</span><span class="token punctuation">=</span><span class="token value attr-value">UTF-8</span>
<span class="token key attr-name">spring.freemarker.content-type</span><span class="token punctuation">=</span><span class="token value attr-value">text/html</span>
<span class="token key attr-name">spring.freemarker.allow-request-override</span><span class="token punctuation">=</span><span class="token value attr-value">false</span>
<span class="token key attr-name">spring.freemarker.check-template-location</span><span class="token punctuation">=</span><span class="token value attr-value">true</span>
<span class="token key attr-name">spring.freemarker.expose-request-attributes</span><span class="token punctuation">=</span><span class="token value attr-value">false</span>
<span class="token key attr-name">spring.freemarker.expose-session-attributes</span><span class="token punctuation">=</span><span class="token value attr-value">false</span>
<span class="token key attr-name">spring.freemarker.expose-spring-macro-helpers</span><span class="token punctuation">=</span><span class="token value attr-value">false</span>

</code></pre></div><ul><li>具体</li></ul><div class="language-java" data-ext="java"><pre class="language-java"><code>
	<span class="token annotation punctuation">@Autowired</span>
	<span class="token class-name">ApplicationContext</span> applicationContext<span class="token punctuation">;</span>

	<span class="token annotation punctuation">@GetMapping</span><span class="token punctuation">(</span><span class="token string">&quot;/db&quot;</span><span class="token punctuation">)</span>
	<span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">contextLoads</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token class-name">DataSource</span> dataSourceMysql <span class="token operator">=</span> applicationContext<span class="token punctuation">.</span><span class="token function">getBean</span><span class="token punctuation">(</span><span class="token class-name">DataSource</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">//	      HikariDataSource</span>
		<span class="token comment">// 生成文件配置</span>
		<span class="token class-name">EngineConfig</span> engineConfig <span class="token operator">=</span> <span class="token class-name">EngineConfig</span><span class="token punctuation">.</span><span class="token function">builder</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
				<span class="token comment">// 生成文件路径，自己mac本地的地址，这里需要自己更换下路径</span>
				<span class="token punctuation">.</span><span class="token function">fileOutputDir</span><span class="token punctuation">(</span><span class="token string">&quot;C:\\\\Users\\\\EDZ\\\\Desktop\\\\1115&quot;</span><span class="token punctuation">)</span>
				<span class="token comment">// 打开目录</span>
				<span class="token punctuation">.</span><span class="token function">openOutputDir</span><span class="token punctuation">(</span><span class="token boolean">false</span><span class="token punctuation">)</span>
				<span class="token comment">// 文件类型</span>
<span class="token comment">//	            .fileType(EngineFileType.HTML)</span>
				<span class="token punctuation">.</span><span class="token function">fileType</span><span class="token punctuation">(</span><span class="token class-name">EngineFileType</span><span class="token punctuation">.</span><span class="token constant">WORD</span><span class="token punctuation">)</span>
				<span class="token comment">// 生成模板实现</span>
				<span class="token punctuation">.</span><span class="token function">produceType</span><span class="token punctuation">(</span><span class="token class-name">EngineTemplateType</span><span class="token punctuation">.</span>freemarker<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">build</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

		<span class="token comment">// 生成文档配置（包含以下自定义版本号、描述等配置连接）</span>
		<span class="token class-name">Configuration</span> config <span class="token operator">=</span> <span class="token class-name">Configuration</span><span class="token punctuation">.</span><span class="token function">builder</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">version</span><span class="token punctuation">(</span><span class="token string">&quot;1.0.3&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">description</span><span class="token punctuation">(</span><span class="token string">&quot;生成文档信息描述&quot;</span><span class="token punctuation">)</span>
				<span class="token punctuation">.</span><span class="token function">dataSource</span><span class="token punctuation">(</span>dataSourceMysql<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">engineConfig</span><span class="token punctuation">(</span>engineConfig<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">produceConfig</span><span class="token punctuation">(</span><span class="token function">getProcessConfig</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">build</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

		<span class="token comment">// 执行生成</span>
		<span class="token keyword">new</span> <span class="token class-name">DocumentationExecute</span><span class="token punctuation">(</span>config<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">execute</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token keyword">return</span> <span class="token string">&quot;s&quot;</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>

	<span class="token doc-comment comment">/**
	 * 配置想要生成的表+ 配置想要忽略的表
	 * 
	 * <span class="token keyword">@return</span> 生成表配置
	 */</span>
	<span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token class-name">ProcessConfig</span> <span class="token function">getProcessConfig</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token comment">// 忽略表名</span>
		<span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">&gt;</span></span> ignoreTableName <span class="token operator">=</span> <span class="token class-name">Arrays</span><span class="token punctuation">.</span><span class="token function">asList</span><span class="token punctuation">(</span><span class="token string">&quot;aa&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;test_group&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token comment">// 忽略表前缀，如忽略a开头的数据库表</span>
		<span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">&gt;</span></span> ignorePrefix <span class="token operator">=</span> <span class="token class-name">Arrays</span><span class="token punctuation">.</span><span class="token function">asList</span><span class="token punctuation">(</span><span class="token string">&quot;ts_&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;xc_&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;safe_&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token comment">// 忽略表后缀</span>
		<span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">&gt;</span></span> ignoreSuffix <span class="token operator">=</span> <span class="token class-name">Arrays</span><span class="token punctuation">.</span><span class="token function">asList</span><span class="token punctuation">(</span><span class="token string">&quot;_test&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;czb_&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

		<span class="token class-name">ArrayList</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">&gt;</span></span> zk <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ArrayList</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		zk<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token string">&quot;xc_dictionary&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token keyword">return</span> <span class="token class-name">ProcessConfig</span><span class="token punctuation">.</span><span class="token function">builder</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
				<span class="token comment">// 根据名称指定表生成</span>
				<span class="token punctuation">.</span><span class="token function">designatedTableName</span><span class="token punctuation">(</span>zk<span class="token punctuation">)</span>
				<span class="token comment">// 根据表前缀生成</span>
				<span class="token punctuation">.</span><span class="token function">designatedTablePrefix</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">ArrayList</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
				<span class="token comment">// 根据表后缀生成</span>
				<span class="token punctuation">.</span><span class="token function">designatedTableSuffix</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">ArrayList</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">build</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token comment">// 忽略表名</span>
<span class="token comment">//	            .ignoreTableName(ignoreTableName)</span>
		<span class="token comment">// 忽略表前缀</span>
<span class="token comment">//	            .ignoreTablePrefix(ignorePrefix)</span>
		<span class="token comment">// 忽略表后缀</span>
<span class="token comment">//	            .ignoreTableSuffix(ignoreSuffix).build();</span>
	<span class="token punctuation">}</span>
</code></pre></div>`,6),o=[e];function c(l,u){return s(),a("div",null,o)}const i=n(p,[["render",c],["__file","db_doc.html.vue"]]);export{i as default};
