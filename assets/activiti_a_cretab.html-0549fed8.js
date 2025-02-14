import{_ as n,p as a,q as s,a1 as t}from"./framework-d81ad7e5.js";const p={},o=t(`<div class="language-java" data-ext="java"><pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">com<span class="token punctuation">.</span>osvue<span class="token punctuation">.</span>bpmn<span class="token punctuation">.</span>activitiapp</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token import"><span class="token namespace">javax<span class="token punctuation">.</span>annotation<span class="token punctuation">.</span>processing<span class="token punctuation">.</span></span><span class="token class-name">ProcessingEnvironment</span></span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>activiti<span class="token punctuation">.</span>engine<span class="token punctuation">.</span></span><span class="token class-name">ProcessEngine</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>activiti<span class="token punctuation">.</span>engine<span class="token punctuation">.</span></span><span class="token class-name">ProcessEngineConfiguration</span></span><span class="token punctuation">;</span>

<span class="token doc-comment comment">/**
 * 
 * @ClassName:  CreateDataTable   
 * @Description:TODO(初始化 创建 act_表)   
 * <span class="token keyword">@author</span>: hzq 
 * <span class="token keyword">@date</span>:   2023-8-26 12:06:02    
 * @Copyright: 2023
 */</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">CreateDataTable</span> <span class="token punctuation">{</span>

	<span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
<span class="token comment">//		获取流程引擎</span>
		 
		<span class="token function">createTable</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	
	<span class="token doc-comment comment">/**使用代码创建工作流需要的23张表*/</span>
	 
	<span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">createTable</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
		<span class="token class-name">ProcessEngineConfiguration</span> processEngineConfiguration <span class="token operator">=</span> <span class="token class-name">ProcessEngineConfiguration</span><span class="token punctuation">.</span><span class="token function">createStandaloneProcessEngineConfiguration</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token comment">//连接数据库的配置</span>
		processEngineConfiguration<span class="token punctuation">.</span><span class="token function">setJdbcDriver</span><span class="token punctuation">(</span><span class="token string">&quot;com.mysql.jdbc.Driver&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		processEngineConfiguration<span class="token punctuation">.</span><span class="token function">setJdbcUrl</span><span class="token punctuation">(</span><span class="token string">&quot;jdbc:mysql://localhost:3306/activi?useUnicode=true&amp;characterEncoding=utf8&amp;useSSL=false&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		processEngineConfiguration<span class="token punctuation">.</span><span class="token function">setJdbcUsername</span><span class="token punctuation">(</span><span class="token string">&quot;root&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		processEngineConfiguration<span class="token punctuation">.</span><span class="token function">setJdbcPassword</span><span class="token punctuation">(</span><span class="token string">&quot;0&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		
		<span class="token doc-comment comment">/**
		 	public static final String DB_SCHEMA_UPDATE_FALSE = &quot;false&quot;;不能自动创建表，需要表存在
  			public static final String DB_SCHEMA_UPDATE_CREATE_DROP = &quot;create-drop&quot;;先删除表再创建表
  			public static final String DB_SCHEMA_UPDATE_TRUE = &quot;true&quot;;如果表不存在，自动创建表
		 */</span>
		processEngineConfiguration<span class="token punctuation">.</span><span class="token function">setDatabaseSchemaUpdate</span><span class="token punctuation">(</span><span class="token class-name">ProcessEngineConfiguration</span><span class="token punctuation">.</span><span class="token constant">DB_SCHEMA_UPDATE_TRUE</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token comment">//工作流的核心对象，ProcessEnginee对象</span>
		<span class="token class-name">ProcessEngine</span> processEngine <span class="token operator">=</span> processEngineConfiguration<span class="token punctuation">.</span><span class="token function">buildProcessEngine</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;processEngine:&quot;</span><span class="token operator">+</span>processEngine<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>


</code></pre></div><h4 id="use-xml" tabindex="-1"><a class="header-anchor" href="#use-xml" aria-hidden="true">#</a> use xml</h4><div class="language-java" data-ext="java"><pre class="language-java"><code>	<span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">createTable_2</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
 	
        <span class="token class-name">ProcessEngine</span> processEngine <span class="token operator">=</span> <span class="token class-name">ProcessEngineConfiguration</span><span class="token punctuation">.</span>
            <span class="token function">createProcessEngineConfigurationFromResource</span><span class="token punctuation">(</span><span class="token string">&quot;activiti.cfg.xml&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span>
            <span class="token function">buildProcessEngine</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	 
	<span class="token punctuation">}</span>
</code></pre></div><h3 id="activiti-cfg-xml" tabindex="-1"><a class="header-anchor" href="#activiti-cfg-xml" aria-hidden="true">#</a> <code>activiti.cfg.xml</code></h3><div class="language-xml" data-ext="xml"><pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>beans</span> <span class="token attr-name">xmlns</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>http://www.springframework.org/schema/beans<span class="token punctuation">&quot;</span></span>
	<span class="token attr-name"><span class="token namespace">xmlns:</span>context</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>http://www.springframework.org/schema/context<span class="token punctuation">&quot;</span></span> <span class="token attr-name"><span class="token namespace">xmlns:</span>tx</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>http://www.springframework.org/schema/tx<span class="token punctuation">&quot;</span></span>
	<span class="token attr-name"><span class="token namespace">xmlns:</span>xsi</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>http://www.w3.org/2001/XMLSchema-instance<span class="token punctuation">&quot;</span></span>
	<span class="token attr-name"><span class="token namespace">xsi:</span>schemaLocation</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>http://www.springframework.org/schema/beans http://www.springframework.org/schema/beans/spring-beans.xsd
http://www.springframework.org/schema/context http://www.springframework.org/schema/context/spring-context-2.5.xsd
http://www.springframework.org/schema/tx http://www.springframework.org/schema/tx/spring-tx-3.0.xsd<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
	<span class="token comment">&lt;!-- 
		ProcessEngineConfiguration processEngineConfiguration = ProcessEngineConfiguration.createStandaloneProcessEngineConfiguration();
		//连接数据库的配置
		processEngineConfiguration.setJdbcDriver(&quot;com.mysql.jdbc.Driver&quot;);
		processEngineConfiguration.setJdbcUrl(&quot;jdbc:mysql://localhost:3306/activi?useUnicode=true&amp;characterEncoding=utf8&quot;);
		processEngineConfiguration.setJdbcUsername(&quot;root&quot;);
		processEngineConfiguration.setJdbcPassword(&quot;root&quot;);
		
		/**
		 	public static final String DB_SCHEMA_UPDATE_FALSE = &quot;false&quot;;不能自动创建表，需要表存在
  			public static final String DB_SCHEMA_UPDATE_CREATE_DROP = &quot;create-drop&quot;;先删除表再创建表
  			public static final String DB_SCHEMA_UPDATE_TRUE = &quot;true&quot;;如果表不存在，自动创建表
		 */
		processEngineConfiguration.setDatabaseSchemaUpdate(ProcessEngineConfiguration.DB_SCHEMA_UPDATE_TRUE);
	 --&gt;</span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>bean</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>processEngineConfiguration<span class="token punctuation">&quot;</span></span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>org.activiti.engine.impl.cfg.StandaloneProcessEngineConfiguration<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
		<span class="token comment">&lt;!-- 连接数据的配置 --&gt;</span>
		<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>property</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>jdbcDriver<span class="token punctuation">&quot;</span></span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>com.mysql.jdbc.Driver<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>property</span><span class="token punctuation">&gt;</span></span>
		<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>property</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>jdbcUrl<span class="token punctuation">&quot;</span></span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>jdbc:mysql://localhost:3306/activi?useUnicode=true<span class="token entity named-entity" title="&amp;">&amp;amp;</span>characterEncoding=utf8<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>property</span><span class="token punctuation">&gt;</span></span>
		<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>property</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>jdbcUsername<span class="token punctuation">&quot;</span></span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>root<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>property</span><span class="token punctuation">&gt;</span></span>
		<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>property</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>jdbcPassword<span class="token punctuation">&quot;</span></span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>root<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>property</span><span class="token punctuation">&gt;</span></span>
		<span class="token comment">&lt;!-- 没有表创建表 --&gt;</span>
		<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>property</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>databaseSchemaUpdate<span class="token punctuation">&quot;</span></span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>true<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>property</span><span class="token punctuation">&gt;</span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>bean</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>beans</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><h3 id="sts-开发" tabindex="-1"><a class="header-anchor" href="#sts-开发" aria-hidden="true">#</a> sts 开发</h3><ul><li><code>window =&gt; show view =&gt; properties</code></li><li>开始结束Event，连线、userTask</li><li>配置userTask 属性</li><li><code>properties MainConfig</code> 配置办理人</li><li>配置 流程id、name</li></ul><h4 id="部署流程定义" tabindex="-1"><a class="header-anchor" href="#部署流程定义" aria-hidden="true">#</a> 部署流程定义</h4>`,8),e=[o];function c(u,l){return a(),s("div",null,e)}const r=n(p,[["render",c],["__file","activiti_a_cretab.html.vue"]]);export{r as default};
