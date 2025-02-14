import{_ as n,p as s,q as a,a1 as t}from"./framework-d81ad7e5.js";const p={},o=t(`<ul><li>userTask <ul><li><code>mainconfig-&gt;assignee</code></li></ul></li><li><code>sequenceFlow-&gt;mainconfig-&gt;Condition-&gt;\${user==&#39;libai&#39;}| \${day&gt;=10}</code></li></ul><div class="language-java" data-ext="java"><pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">com<span class="token punctuation">.</span>osvue<span class="token punctuation">.</span>bpmn<span class="token punctuation">.</span>activitiapp<span class="token punctuation">.</span>bpmn<span class="token punctuation">.</span>sequence</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>io<span class="token punctuation">.</span></span><span class="token class-name">InputStream</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>util<span class="token punctuation">.</span></span><span class="token class-name">HashMap</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>util<span class="token punctuation">.</span></span><span class="token class-name">List</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>util<span class="token punctuation">.</span></span><span class="token class-name">Map</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>util<span class="token punctuation">.</span>zip<span class="token punctuation">.</span></span><span class="token class-name">ZipInputStream</span></span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>activiti<span class="token punctuation">.</span>engine<span class="token punctuation">.</span></span><span class="token class-name">ProcessEngine</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>activiti<span class="token punctuation">.</span>engine<span class="token punctuation">.</span></span><span class="token class-name">ProcessEngines</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>activiti<span class="token punctuation">.</span>engine<span class="token punctuation">.</span></span><span class="token class-name">RepositoryService</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>activiti<span class="token punctuation">.</span>engine<span class="token punctuation">.</span></span><span class="token class-name">RuntimeService</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>activiti<span class="token punctuation">.</span>engine<span class="token punctuation">.</span></span><span class="token class-name">TaskService</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>activiti<span class="token punctuation">.</span>engine<span class="token punctuation">.</span>repository<span class="token punctuation">.</span></span><span class="token class-name">Deployment</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>activiti<span class="token punctuation">.</span>engine<span class="token punctuation">.</span>runtime<span class="token punctuation">.</span></span><span class="token class-name">ProcessInstance</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>activiti<span class="token punctuation">.</span>engine<span class="token punctuation">.</span>task<span class="token punctuation">.</span></span><span class="token class-name">Task</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>junit<span class="token punctuation">.</span></span><span class="token class-name">Test</span></span><span class="token punctuation">;</span>

<span class="token doc-comment comment">/**
 * 
 * <span class="token keyword">@author</span> THE GIFTED
 *
 */</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">TestSequenceFlow</span> <span class="token punctuation">{</span>
	<span class="token class-name">ProcessEngine</span> proe <span class="token operator">=</span> <span class="token class-name">ProcessEngines</span><span class="token punctuation">.</span><span class="token function">getDefaultProcessEngine</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	
	<span class="token doc-comment comment">/**
	 * 部署流程
	 */</span>
	<span class="token annotation punctuation">@Test</span>
	<span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">deployProcess</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token comment">// 如果不加/代表从当前包里面找文件</span>
		<span class="token class-name">InputStream</span> inputStream <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">getClass</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getResourceAsStream</span><span class="token punctuation">(</span><span class="token string">&quot;/diagrams/sec/sec.zip&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token comment">// 如果加/代表从classpath的根目录里面找文件</span>
 		 
		<span class="token class-name">RepositoryService</span> repositoryService <span class="token operator">=</span> proe<span class="token punctuation">.</span><span class="token function">getRepositoryService</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token class-name">ZipInputStream</span> zipInputStream <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ZipInputStream</span><span class="token punctuation">(</span>inputStream<span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token class-name">Deployment</span> deploy <span class="token operator">=</span> repositoryService<span class="token punctuation">.</span><span class="token function">createDeployment</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">name</span><span class="token punctuation">(</span><span class="token string">&quot;qingjia流程001&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">addZipInputStream</span><span class="token punctuation">(</span>zipInputStream<span class="token punctuation">)</span><span class="token comment">// 添加流程图的流</span>
				<span class="token punctuation">.</span><span class="token function">deploy</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> 
		<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;部署成功,部署D:&quot;</span> <span class="token operator">+</span> deploy<span class="token punctuation">.</span><span class="token function">getId</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		
		 
	<span class="token punctuation">}</span>
	
	<span class="token doc-comment comment">/**
	 * 启动流程
	 */</span>
	<span class="token annotation punctuation">@Test</span>
	<span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">startProcess</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token class-name">RuntimeService</span> runtimeService <span class="token operator">=</span> proe<span class="token punctuation">.</span><span class="token function">getRuntimeService</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">//		runtimeService.startProcessInstanceById(processDefinitionId)//根据流程定义ID启动流程</span>
 
		<span class="token class-name">String</span> processDefinitionKey <span class="token operator">=</span> <span class="token string">&quot;live_bill&quot;</span><span class="token punctuation">;</span>
		<span class="token class-name">ProcessInstance</span> processInstance <span class="token operator">=</span> runtimeService<span class="token punctuation">.</span><span class="token function">startProcessInstanceByKey</span><span class="token punctuation">(</span>processDefinitionKey<span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;流程启动成功:&quot;</span> <span class="token operator">+</span> processInstance<span class="token punctuation">.</span><span class="token function">getId</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token string">&quot;   &quot;</span> <span class="token operator">+</span> processInstance<span class="token punctuation">.</span><span class="token function">getProcessDefinitionId</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token string">&quot;  &quot;</span>
				<span class="token operator">+</span> processInstance<span class="token punctuation">.</span><span class="token function">getProcessInstanceId</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

	<span class="token punctuation">}</span>
	<span class="token doc-comment comment">/**
	 * 查询个人任务
	 */</span>
	<span class="token annotation punctuation">@Test</span>
	<span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">queryMyTask</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token class-name">TaskService</span> taskService <span class="token operator">=</span> proe<span class="token punctuation">.</span><span class="token function">getTaskService</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		 	<span class="token class-name">String</span> assignee <span class="token operator">=</span> <span class="token string">&quot;李四&quot;</span><span class="token punctuation">;</span>
		 <span class="token comment">// String assignee = &quot;张三&quot;;</span>
		<span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name"><span class="token namespace">org<span class="token punctuation">.</span>activiti<span class="token punctuation">.</span>engine<span class="token punctuation">.</span>task<span class="token punctuation">.</span></span>Task</span><span class="token punctuation">&gt;</span></span> list <span class="token operator">=</span> taskService<span class="token punctuation">.</span><span class="token function">createTaskQuery</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
				<span class="token comment">// 条件</span>
				<span class="token punctuation">.</span><span class="token function">taskAssignee</span><span class="token punctuation">(</span>assignee<span class="token punctuation">)</span><span class="token comment">// 根据任务办理人查询任务</span>
 
				<span class="token punctuation">.</span><span class="token function">orderByTaskCreateTime</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">desc</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
				<span class="token comment">// 结果集</span>
				<span class="token punctuation">.</span><span class="token function">list</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">//		.listPage(firstResult, maxResults)</span>
<span class="token comment">//		.count();</span>
<span class="token comment">//		.singleResult()</span>

		<span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">null</span> <span class="token operator">!=</span> list <span class="token operator">&amp;&amp;</span> list<span class="token punctuation">.</span><span class="token function">size</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">&gt;</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token class-name">Task</span> task <span class="token operator">:</span> list<span class="token punctuation">)</span> <span class="token punctuation">{</span>
				<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;任务ID:&quot;</span> <span class="token operator">+</span> task<span class="token punctuation">.</span><span class="token function">getId</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
				<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;任务办理人:&quot;</span> <span class="token operator">+</span> task<span class="token punctuation">.</span><span class="token function">getAssignee</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
				<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;执行实例ID:&quot;</span> <span class="token operator">+</span> task<span class="token punctuation">.</span><span class="token function">getExecutionId</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
				<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;任务名称:&quot;</span> <span class="token operator">+</span> task<span class="token punctuation">.</span><span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
				<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;流程定义ID:&quot;</span> <span class="token operator">+</span> task<span class="token punctuation">.</span><span class="token function">getProcessDefinitionId</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
				<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;流程实例ID:&quot;</span> <span class="token operator">+</span> task<span class="token punctuation">.</span><span class="token function">getProcessInstanceId</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
				<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;任务创建时间:&quot;</span> <span class="token operator">+</span> task<span class="token punctuation">.</span><span class="token function">getCreateTime</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
				<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;####################&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
			<span class="token punctuation">}</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>
	
	<span class="token doc-comment comment">/**
	 * 办理任务 
	 * <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>b</span><span class="token punctuation">&gt;</span></span>不使用 流程变量<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>b</span><span class="token punctuation">&gt;</span></span>
	 */</span>
	<span class="token annotation punctuation">@Test</span>
	<span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">completeTask</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token class-name">TaskService</span> taskService <span class="token operator">=</span> proe<span class="token punctuation">.</span><span class="token function">getTaskService</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token class-name">String</span> taskId <span class="token operator">=</span> <span class="token string">&quot;50003&quot;</span><span class="token punctuation">;</span>
		<span class="token comment">// 根据任务ID去完成任务</span>
		taskService<span class="token punctuation">.</span><span class="token function">complete</span><span class="token punctuation">(</span>taskId<span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token comment">// 根据任务ID去完成任务并指定流程变量</span>
<span class="token comment">//		taskService.complete(taskId, variables);</span>
		<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;任务完成&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	
	<span class="token doc-comment comment">/**
	 * 办理任务 并 带上 条件 变量
	 * <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">&gt;</span></span>
	 * 	Condition
	 		$<span class="token punctuation">{</span>day == 3<span class="token punctuation">}</span> &gt;= &lt;= 
	 		return boolean
	  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span>
	 */</span>
	<span class="token annotation punctuation">@Test</span>
	<span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">completeTaskForVariable</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token class-name">TaskService</span> taskService <span class="token operator">=</span> proe<span class="token punctuation">.</span><span class="token function">getTaskService</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token class-name">String</span> taskId <span class="token operator">=</span> <span class="token string">&quot;42504&quot;</span><span class="token punctuation">;</span>
	 
		<span class="token class-name">Map</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">,</span> <span class="token class-name">Object</span><span class="token punctuation">&gt;</span></span> variables <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">HashMap</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		variables<span class="token punctuation">.</span><span class="token function">put</span><span class="token punctuation">(</span><span class="token string">&quot;day&quot;</span><span class="token punctuation">,</span> <span class="token number">121</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token comment">// 根据任务ID去完成任务并指定流程变量</span>
 		taskService<span class="token punctuation">.</span><span class="token function">complete</span><span class="token punctuation">(</span>taskId<span class="token punctuation">,</span> variables <span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;任务完成&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	
	
	
<span class="token punctuation">}</span>

</code></pre></div><ol><li>一个活动中可以指定一个或多个SequenceFlow（Start中有一个，End中没有）。</li></ol><ul><li>开始活动中有一个SequenceFlow 。</li><li>结束活动中没有SequenceFlow 。</li><li>其他活动中有1条或多条SequenceFlow</li></ul><ol start="2"><li>如果只有一个，则可以不使用流程变量设置codition的名称； <ol><li>如果有多个，则需要使用流程变量设置codition的名称。message表示流程变量的名称，‘不重要’表示流程变量的值</li><li>\${}中间的内容要使用boolean类型的表达式，用来判断应该执行的连线</li><li><code>\${message == &#39;不重要&#39;}</code></li></ol></li></ol>`,5),c=[o];function e(u,l){return s(),a("div",null,c)}const k=n(p,[["render",e],["__file","activiti_g_sequence.html.vue"]]);export{k as default};
