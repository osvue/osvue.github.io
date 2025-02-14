import{_ as n,p as s,q as a,a1 as t}from"./framework-d81ad7e5.js";const p={},o=t(`<h3 id="部署流程" tabindex="-1"><a class="header-anchor" href="#部署流程" aria-hidden="true">#</a> 部署流程</h3><div class="language-java" data-ext="java"><pre class="language-java"><code>    <span class="token doc-comment comment">/**
	 * 部署流程使用zip 流程图的文件必须是xxxx.zip结尾
	 */</span>
	<span class="token annotation punctuation">@Test</span>
	<span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">deployProcess02</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token comment">// 如果不加/代表从当前包里面找文件</span>
		<span class="token class-name">InputStream</span> inputStream <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">getClass</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getResourceAsStream</span><span class="token punctuation">(</span><span class="token string">&quot;/LeaveBill.zip&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token comment">// 如果加/代表从classpath的根目录里面找文件</span>
		<span class="token comment">// InputStream inputStream =</span>
		<span class="token comment">// this.getClass().getResourceAsStream(&quot;/HelloWorld.zip&quot;);</span>
		<span class="token class-name">RepositoryService</span> repositoryService <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>processEngine<span class="token punctuation">.</span><span class="token function">getRepositoryService</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token class-name">ZipInputStream</span> zipInputStream <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ZipInputStream</span><span class="token punctuation">(</span>inputStream<span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token class-name">Deployment</span> deploy <span class="token operator">=</span> repositoryService<span class="token punctuation">.</span><span class="token function">createDeployment</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">name</span><span class="token punctuation">(</span><span class="token string">&quot;报销流程001&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">addZipInputStream</span><span class="token punctuation">(</span>zipInputStream<span class="token punctuation">)</span><span class="token comment">// 添加流程图的流</span>
				<span class="token punctuation">.</span><span class="token function">deploy</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">// 确定部署</span>
		<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;部署成功,部署D:&quot;</span> <span class="token operator">+</span> deploy<span class="token punctuation">.</span><span class="token function">getId</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
</code></pre></div><h3 id="查询流程部署信息" tabindex="-1"><a class="header-anchor" href="#查询流程部署信息" aria-hidden="true">#</a> 查询流程部署信息</h3><div class="language-java" data-ext="java"><pre class="language-java"><code>
	<span class="token annotation punctuation">@Test</span>
	<span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">queryProcess</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token class-name">RepositoryService</span> repositoryService <span class="token operator">=</span>  proe<span class="token punctuation">.</span><span class="token function">getRepositoryService</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token comment">// 创建部署信息的查询</span>
		<span class="token class-name">String</span> deploymentId <span class="token operator">=</span> <span class="token string">&quot;1&quot;</span><span class="token punctuation">;</span>
<span class="token comment">//		Deployment deploy = repositoryService.createDeploymentQuery()</span>
		<span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Deployment</span><span class="token punctuation">&gt;</span></span> list <span class="token operator">=</span> repositoryService<span class="token punctuation">.</span><span class="token function">createDeploymentQuery</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
		<span class="token comment">// 条件</span>
		<span class="token comment">// .deploymentId(deploymentId) //根据部署ID去查询</span>
		<span class="token comment">// .deploymentName(name)//根据部署名称去查询</span>
		<span class="token comment">// .deploymentTenantId(tenantId)//根据tenantId去查询</span>
<span class="token comment">//		.deploymentNameLike(nameLike)//根据部署名称模糊查询</span>
		<span class="token comment">// .deploymentTenantIdLike(tenantIdLike)//根据tenantId模糊查询</span>
		<span class="token comment">// 排序</span>
<span class="token comment">//		.orderByDeploymentId().asc()  //根据部署ID升序</span>
				<span class="token comment">// .orderByDeploymenTime().desc() //根据部署时间降序</span>
				<span class="token comment">// .orderByDeploymentName()//根据部署名称升序</span>
				<span class="token comment">// 结果集</span>
				<span class="token punctuation">.</span><span class="token function">list</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 查询返回list集合</span>
<span class="token comment">//		.listPage(firstResult, maxResults)  分页查询返回list集合</span>
		<span class="token comment">// .singleResult(); //返回单个对象</span>
<span class="token comment">//		.count();</span>

		<span class="token comment">/*
		 * System.out.println(&quot;部署ID:&quot;+deploy.getId());
		 * System.out.println(&quot;部署名称:&quot;+deploy.getName());
		 * System.out.println(&quot;部署时间:&quot;+deploy.getDeploymentTime());
		 */</span>
<span class="token comment">//		System.out.println(count);</span>
		<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token class-name">Deployment</span> deployment <span class="token operator">:</span> list<span class="token punctuation">)</span> <span class="token punctuation">{</span>
			<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;部署ID:&quot;</span> <span class="token operator">+</span> deployment<span class="token punctuation">.</span><span class="token function">getId</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
			<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;部署名称:&quot;</span> <span class="token operator">+</span> deployment<span class="token punctuation">.</span><span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
			<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;部署时间:&quot;</span> <span class="token operator">+</span> deployment<span class="token punctuation">.</span><span class="token function">getDeploymentTime</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
			<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;########################&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>
</code></pre></div><h3 id="查询流程定义信息" tabindex="-1"><a class="header-anchor" href="#查询流程定义信息" aria-hidden="true">#</a> 查询流程定义信息</h3><div class="language-java" data-ext="java"><pre class="language-java"><code><span class="token doc-comment comment">/**
	 * 查询流程定义
	 */</span>
	<span class="token annotation punctuation">@Test</span>
	<span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">queryProcDef</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token class-name">RepositoryService</span> repositoryService <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>processEngine<span class="token punctuation">.</span><span class="token function">getRepositoryService</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">ProcessDefinition</span><span class="token punctuation">&gt;</span></span> list <span class="token operator">=</span> repositoryService<span class="token punctuation">.</span><span class="token function">createProcessDefinitionQuery</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
		<span class="token comment">// 条件</span>
<span class="token comment">//		.deploymentId(deploymentId) 根据部署ID查询</span>
<span class="token comment">//		.deploymentIds(deploymentIds) 根据部署ID的集合查询Set&lt;String&gt; deploymentIds</span>
<span class="token comment">//		.processDefinitionId(processDefinitionId)//根据流程定义IDHelloWorld:1:4</span>
<span class="token comment">//		.processDefinitionIds(processDefinitionIds)//根据流程定义的IDS查询</span>
<span class="token comment">//		.processDefinitionKey(processDefinitionKey)//根据流程定义的的key查询</span>
<span class="token comment">//		.processDefinitionKeyLike(processDefinitionKeyLike)//根据流程定义的的key模糊查询</span>
<span class="token comment">//		.processDefinitionName(processDefinitionName)//根据流程定义的名称查询</span>
<span class="token comment">//		.processDefinitionNameLike(processDefinitionNameLike)//根据流程定义的名称模糊查询</span>
<span class="token comment">//		.processDefinitionResourceName(resourceName)//根据流程图的BPMN文件名查询</span>
<span class="token comment">//		.processDefinitionResourceNameLike(resourceNameLike)//根据流程图的BPMN文件名模糊查询</span>
<span class="token comment">//		.processDefinitionVersion(processDefinitionVersion)//根据流程定义的版本查询</span>
<span class="token comment">//		.processDefinitionVersionGreaterThan(processDefinitionVersion)//version&gt;num</span>
<span class="token comment">//		.processDefinitionVersionGreaterThanOrEquals(processDefinitionVersion)//version&gt;=num</span>
<span class="token comment">//		.processDefinitionVersionLowerThan(processDefinitionVersion)//version&lt;num</span>
<span class="token comment">//		.processDefinitionVersionLowerThanOrEquals(processDefinitionVersion)//version&lt;=num</span>
		<span class="token comment">// 排序</span>
<span class="token comment">//		.orderByDeploymentId()</span>
<span class="token comment">//		.orderByProcessDefinitionId()</span>
<span class="token comment">//		.orderByProcessDefinitionKey()</span>
<span class="token comment">//		.orderByProcessDefinitionName()</span>
<span class="token comment">//		.orderByProcessDefinitionVersion()</span>
				<span class="token comment">// 结果集</span>
				<span class="token punctuation">.</span><span class="token function">list</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">//		.listPage(firstResult, maxResults)\\</span>
<span class="token comment">//		.count()</span>
<span class="token comment">//		.singleResult()</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">null</span> <span class="token operator">!=</span> list <span class="token operator">&amp;&amp;</span> list<span class="token punctuation">.</span><span class="token function">size</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">&gt;</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token class-name">ProcessDefinition</span> pd <span class="token operator">:</span> list<span class="token punctuation">)</span> <span class="token punctuation">{</span>
				<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;流程定义ID:&quot;</span> <span class="token operator">+</span> pd<span class="token punctuation">.</span><span class="token function">getId</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
				<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;流程部署ID:&quot;</span> <span class="token operator">+</span> pd<span class="token punctuation">.</span><span class="token function">getDeploymentId</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
				<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;流程定义KEY:&quot;</span> <span class="token operator">+</span> pd<span class="token punctuation">.</span><span class="token function">getKey</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
				<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;流程定义的名称:&quot;</span> <span class="token operator">+</span> pd<span class="token punctuation">.</span><span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
				<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;流程定义的bpmn文件名:&quot;</span> <span class="token operator">+</span> pd<span class="token punctuation">.</span><span class="token function">getResourceName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">// bpmn的name</span>
				<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;流程图片名:&quot;</span> <span class="token operator">+</span> pd<span class="token punctuation">.</span><span class="token function">getDiagramResourceName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">// png的name</span>
				<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;流程定义的版本号:&quot;</span> <span class="token operator">+</span> pd<span class="token punctuation">.</span><span class="token function">getVersion</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
				<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;##################&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
			<span class="token punctuation">}</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>
</code></pre></div><h3 id="删除流程定义" tabindex="-1"><a class="header-anchor" href="#删除流程定义" aria-hidden="true">#</a> 删除流程定义</h3><div class="language-java" data-ext="java"><pre class="language-java"><code>
<span class="token doc-comment comment">/**
	 * 根据流程部署id删除流程定义
	 * 删除流程定义
	 */</span>
	<span class="token annotation punctuation">@Test</span>
	<span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">deleteProcessDef</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token class-name">RepositoryService</span> repositoryService <span class="token operator">=</span> proe<span class="token punctuation">.</span><span class="token function">getRepositoryService</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token class-name">String</span> deploymentId <span class="token operator">=</span> <span class="token string">&quot;1&quot;</span><span class="token punctuation">;</span>
		<span class="token comment">// 根据流程部署id删除流程定义 如果当前id的流程正在执行，那么会报错</span>
		<span class="token comment">// repositoryService.deleteDeployment(deploymentId);</span>
		<span class="token comment">// 根据流程部署id删除删除流程定义 如果当前id的流程正在执行,会把正在执行的流程数据删除 act_ru_*和act_hi_*表里面的数据</span>
		repositoryService<span class="token punctuation">.</span><span class="token function">deleteDeployment</span><span class="token punctuation">(</span>deploymentId<span class="token punctuation">,</span> <span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		 
<span class="token comment">//		repositoryService.deleteDeploymentCascade(deploymentId);==repositoryService.deleteDeployment(deploymentId, true);</span>
		<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;删除成功&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>

</code></pre></div><h3 id="查询流程图" tabindex="-1"><a class="header-anchor" href="#查询流程图" aria-hidden="true">#</a> 查询流程图</h3><div class="language-java" data-ext="java"><pre class="language-java"><code><span class="token annotation punctuation">@Test</span>
	<span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">queryProcessImage</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		
		<span class="token class-name">RepositoryService</span> repositoryService <span class="token operator">=</span> proe<span class="token punctuation">.</span><span class="token function">getRepositoryService</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token class-name">String</span> processDefinitionId<span class="token operator">=</span> <span class="token string">&quot;hy:1:12504&quot;</span><span class="token punctuation">;</span>
	 
		<span class="token class-name">InputStream</span> inputStream <span class="token operator">=</span> repositoryService<span class="token punctuation">.</span><span class="token function">getProcessDiagram</span><span class="token punctuation">(</span>processDefinitionId<span class="token punctuation">)</span><span class="token punctuation">;</span>

		<span class="token class-name">File</span> file <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">File</span><span class="token punctuation">(</span><span class="token string">&quot;d:/HelloWorld.png&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		
		<span class="token comment">/*
		 RepositoryService repositoryService = this.processEngine.getRepositoryService();
		// 根据流程部署ID查询流程定义对象
		String deploymentId = &quot;1&quot;;
		ProcessDefinition processDefinition = repositoryService.createProcessDefinitionQuery()
				.deploymentId(deploymentId).singleResult();
		// 从流程定义对象里面查询出流程定义ID
		String processDefinitionId = processDefinition.getId();
		InputStream inputStream = repositoryService.getProcessDiagram(processDefinitionId);

		File file = new File(&quot;d:/&quot; + processDefinition.getDiagramResourceName()); 
		 */</span>
		<span class="token keyword">try</span> <span class="token punctuation">{</span>
			<span class="token class-name">BufferedOutputStream</span> outputStream <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">BufferedOutputStream</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">FileOutputStream</span><span class="token punctuation">(</span>file<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
			<span class="token keyword">int</span> len <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
			<span class="token keyword">byte</span><span class="token punctuation">[</span><span class="token punctuation">]</span> b <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token keyword">byte</span><span class="token punctuation">[</span><span class="token number">1024</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
			<span class="token keyword">while</span> <span class="token punctuation">(</span><span class="token punctuation">(</span>len <span class="token operator">=</span> inputStream<span class="token punctuation">.</span><span class="token function">read</span><span class="token punctuation">(</span>b<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token operator">!=</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
				outputStream<span class="token punctuation">.</span><span class="token function">write</span><span class="token punctuation">(</span>b<span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> len<span class="token punctuation">)</span><span class="token punctuation">;</span>
				outputStream<span class="token punctuation">.</span><span class="token function">flush</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
			<span class="token punctuation">}</span>
			outputStream<span class="token punctuation">.</span><span class="token function">close</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
			inputStream<span class="token punctuation">.</span><span class="token function">close</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
			<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;查询成功&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">Exception</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
			<span class="token comment">// TODO Auto-generated catch block</span>
			e<span class="token punctuation">.</span><span class="token function">printStackTrace</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
		
	<span class="token punctuation">}</span>
</code></pre></div><h3 id="查询最新的流程定义" tabindex="-1"><a class="header-anchor" href="#查询最新的流程定义" aria-hidden="true">#</a> 查询最新的流程定义</h3><div class="language-java" data-ext="java"><pre class="language-java"><code>
	<span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">queryNewProcess</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		
		<span class="token class-name">RepositoryService</span> res <span class="token operator">=</span> proe<span class="token punctuation">.</span><span class="token function">getRepositoryService</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		
		<span class="token class-name">String</span> processDefinitionKey <span class="token operator">=</span><span class="token string">&quot;hy&quot;</span><span class="token punctuation">;</span>
		<span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">ProcessDefinition</span><span class="token punctuation">&gt;</span></span> proList <span class="token operator">=</span> res<span class="token punctuation">.</span><span class="token function">createProcessDefinitionQuery</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
					<span class="token punctuation">.</span><span class="token function">processDefinitionKey</span><span class="token punctuation">(</span>processDefinitionKey<span class="token punctuation">)</span>
					<span class="token punctuation">.</span><span class="token function">orderByProcessDefinitionVersion</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
					<span class="token punctuation">.</span><span class="token function">asc</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
					<span class="token punctuation">.</span><span class="token function">list</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		
		
	<span class="token punctuation">}</span>
	










	<span class="token doc-comment comment">/**
	 * 已知key 附加功能：删除流程定义（删除key相同的所有不同版本的流程定义）
	 */</span>
	<span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">deleteAllSameVersion</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token class-name">String</span> processDefinitionKey <span class="token operator">=</span> <span class="token string">&quot;HelloWorld&quot;</span><span class="token punctuation">;</span>
		<span class="token class-name">RepositoryService</span> repositoryService <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>processEngine<span class="token punctuation">.</span><span class="token function">getRepositoryService</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token comment">// 根据流程定义的key查询流程集合</span>
		<span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">ProcessDefinition</span><span class="token punctuation">&gt;</span></span> list <span class="token operator">=</span> repositoryService<span class="token punctuation">.</span><span class="token function">createProcessDefinitionQuery</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
				<span class="token punctuation">.</span><span class="token function">processDefinitionKey</span><span class="token punctuation">(</span>processDefinitionKey<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">list</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

		<span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">null</span> <span class="token operator">!=</span> list <span class="token operator">&amp;&amp;</span> list<span class="token punctuation">.</span><span class="token function">size</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">&gt;</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token class-name">ProcessDefinition</span> pd <span class="token operator">:</span> list<span class="token punctuation">)</span> <span class="token punctuation">{</span>
				repositoryService<span class="token punctuation">.</span><span class="token function">deleteDeployment</span><span class="token punctuation">(</span>pd<span class="token punctuation">.</span><span class="token function">getDeploymentId</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

			<span class="token punctuation">}</span>
		<span class="token punctuation">}</span>

	<span class="token punctuation">}</span>

<span class="token punctuation">}</span>

</code></pre></div>`,12),e=[o];function c(u,l){return s(),a("div",null,e)}const k=n(p,[["render",c],["__file","activiti_d_process_define.html.vue"]]);export{k as default};
