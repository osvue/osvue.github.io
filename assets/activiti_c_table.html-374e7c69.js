import{_ as n,p as s,q as a,a1 as t}from"./framework-d81ad7e5.js";const p={},o=t(`<p>Activiti的表都以ACT_开头。 第二部分是表示表的用途的两个字母标识。 用途也和服务的API对应。</p><ul><li><strong>ACT_RE_</strong>*: &#39;RE&#39;表示repository。 这个前缀的表包含了流程定义和流程静态资源 （图片，规则，等等）。</li><li><strong>ACT_RU_</strong>*: &#39;RU&#39;表示runtime。 这些运行时的表，包含流程实例，任务，变量，异步任务，等运行中的数据。 Activiti只在流程实例执行过程中保存这些数据， 在流程结束时就会删除这些记录。 这样运行时表可以一直很小速度很快。</li><li><strong>ACT_ID_</strong>*: &#39;ID&#39;表示identity。 这些表包含身份信息，比如用户，组等等。</li><li><strong>ACT_HI_</strong>*: &#39;HI&#39;表示history。 这些表包含历史数据，比如历史流程实例， 变量，任务等等。</li><li><strong>ACT_GE_</strong>*: 通用数据， 用于不同场景下。</li><li><strong>ACT_EVT_</strong>*: EVT表示EVENT，目前只有一张表ACT_EVT_LOG，存储事件处理日志，方便管理员跟踪处理。</li></ul><h3 id="部署流程相关表" tabindex="-1"><a class="header-anchor" href="#部署流程相关表" aria-hidden="true">#</a> 部署流程相关表</h3><div class="language-sql" data-ext="sql"><pre class="language-sql"><code><span class="token comment"># repositoryService </span>

<span class="token keyword">SELECT</span> <span class="token operator">*</span> <span class="token keyword">FROM</span> act_re_deployment <span class="token comment">#部署对象表</span>

<span class="token keyword">select</span><span class="token operator">*</span> <span class="token keyword">from</span> act_re_procdef  <span class="token comment">#流程定义表</span>

<span class="token keyword">select</span> <span class="token operator">*</span> <span class="token keyword">from</span> act_ge_bytearray <span class="token comment">#资源文件表</span>

<span class="token keyword">select</span> <span class="token operator">*</span> <span class="token keyword">from</span> act_ge_property <span class="token comment">#主键生成策略表</span>
</code></pre></div><h3 id="repositoryservice-部署流程相关表" tabindex="-1"><a class="header-anchor" href="#repositoryservice-部署流程相关表" aria-hidden="true">#</a> Repositoryservice 部署流程相关表</h3><div class="language-sql" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">SELECT</span> <span class="token operator">*</span> <span class="token keyword">FROM</span> act_re_deployment <span class="token comment">#部署对象表</span>

<span class="token keyword">select</span><span class="token operator">*</span> <span class="token keyword">from</span> act_re_procdef  <span class="token comment">#流程定义表</span>

<span class="token keyword">select</span> <span class="token operator">*</span> <span class="token keyword">from</span> act_ge_bytearray <span class="token comment">#资源文件表</span>

<span class="token keyword">select</span> <span class="token operator">*</span> <span class="token keyword">from</span> act_ge_property <span class="token comment">#主键生成策略表</span>
</code></pre></div><h3 id="runtimeservice-taskservice" tabindex="-1"><a class="header-anchor" href="#runtimeservice-taskservice" aria-hidden="true">#</a> RuntimeService TaskService</h3><div class="language-sql" data-ext="sql"><pre class="language-sql"><code><span class="token comment">######流程实例，执行对象，任务#######</span>
<span class="token keyword">select</span> <span class="token operator">*</span> <span class="token keyword">from</span> act_ru_execution <span class="token comment">#正在执行的执行对象表  流程启动一次只要没有执行完，就会有一条数据</span>

<span class="token keyword">select</span> <span class="token operator">*</span> <span class="token keyword">from</span> act_ru_task <span class="token comment">#正在执行的任务表（只有节点是UserTask的时候，该表中存在数据） 可能有多条数据</span>

<span class="token keyword">select</span> <span class="token operator">*</span> <span class="token keyword">from</span> act_ru_variable <span class="token punctuation">;</span> <span class="token comment">#记录流程运行时的流程变量</span>

<span class="token keyword">select</span> <span class="token operator">*</span> <span class="token keyword">from</span> act_ru_identitylink <span class="token punctuation">;</span> <span class="token comment">##存放流程办理人的信息</span>

</code></pre></div><div class="language-sql" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">select</span> <span class="token operator">*</span> <span class="token keyword">from</span> act hi procinst <span class="token punctuation">;</span> <span class="token comment">#历史流程实例  流程实例的历史表</span>
<span class="token keyword">select</span> <span class="token operator">*</span> <span class="token keyword">from</span> act_hi_taskinst <span class="token punctuation">;</span>  <span class="token comment">#历史任务实例 任务历史表</span>
<span class="token keyword">select</span> <span class="token operator">*</span> <span class="token keyword">from</span> act_hi_actinst<span class="token punctuation">;</span>  <span class="token comment">#历史活动节点表 所有活动节点的历史表</span>
<span class="token keyword">select</span> <span class="token operator">*</span> <span class="token keyword">from</span> act_hi_varinst <span class="token punctuation">;</span>   <span class="token comment">#历史流程变量表</span>
<span class="token keyword">select</span> <span class="token operator">*</span> <span class="token keyword">from</span> act_hi_identitylink <span class="token punctuation">;</span>   <span class="token comment">##历史办理人表</span>
<span class="token keyword">select</span> <span class="token operator">*</span> <span class="token keyword">from</span> act_hi_comment <span class="token punctuation">;</span>   <span class="token comment">#批注表</span>
<span class="token keyword">select</span> <span class="token operator">*</span> <span class="token keyword">from</span> act_hi_attachment <span class="token punctuation">;</span><span class="token comment">#附件表</span>
</code></pre></div><h3 id="helloworld" tabindex="-1"><a class="header-anchor" href="#helloworld" aria-hidden="true">#</a> helloWorld</h3><div class="language-java" data-ext="java"><pre class="language-java"><code>
<span class="token doc-comment comment">/**
 * 
 * <span class="token keyword">@author</span> THE GIFTED
 * 部署流程定义
 */</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">DeployProcessDefi</span> <span class="token punctuation">{</span>
	
	<span class="token class-name">ProcessEngine</span> proEng <span class="token operator">=</span> <span class="token class-name">ProcessEngines</span><span class="token punctuation">.</span><span class="token function">getDefaultProcessEngine</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	
	<span class="token annotation punctuation">@Test</span>
	<span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">deploy</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
<span class="token comment">//		部署流程</span>
		<span class="token class-name">Deployment</span> dep <span class="token operator">=</span> proEng<span class="token punctuation">.</span><span class="token function">getRepositoryService</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
				<span class="token punctuation">.</span><span class="token function">createDeployment</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
				<span class="token punctuation">.</span><span class="token function">name</span><span class="token punctuation">(</span><span class="token string">&quot;部署Name&quot;</span><span class="token punctuation">)</span>
				<span class="token punctuation">.</span><span class="token function">addClasspathResource</span><span class="token punctuation">(</span><span class="token string">&quot;diagrams/one.bpmn&quot;</span><span class="token punctuation">)</span>
				<span class="token punctuation">.</span><span class="token function">addClasspathResource</span><span class="token punctuation">(</span><span class="token string">&quot;diagrams/one.png&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">deploy</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
			
		<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>dep<span class="token punctuation">.</span><span class="token function">getId</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		
	<span class="token punctuation">}</span>
	
	<span class="token doc-comment comment">/**
	 * 启动流程
	 */</span>
	<span class="token annotation punctuation">@Test</span>
	<span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">startProcess</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		
		<span class="token class-name">String</span> processDefinitionId <span class="token operator">=</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">;</span>
		<span class="token class-name">ProcessInstance</span> proces <span class="token operator">=</span> proEng<span class="token punctuation">.</span><span class="token function">getRuntimeService</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token comment">//		.startProcessInstanceById(processDefinitionId)</span>
		<span class="token punctuation">.</span><span class="token function">startProcessInstanceByKey</span><span class="token punctuation">(</span><span class="token string">&quot;hy&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		
		<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>proces<span class="token punctuation">.</span><span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>

	<span class="token doc-comment comment">/**
	 * 查询任务
	 */</span>
	<span class="token annotation punctuation">@Test</span>
	<span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">findTask</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token class-name">TaskService</span> taskService <span class="token operator">=</span> proEng<span class="token punctuation">.</span><span class="token function">getTaskService</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">//		String assignee=&quot;张三&quot;;</span>
<span class="token comment">// 		String assignee=&quot;李四&quot;;</span>
 		<span class="token class-name">String</span> assignee<span class="token operator">=</span><span class="token string">&quot;王五&quot;</span><span class="token punctuation">;</span>
		<span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Task</span><span class="token punctuation">&gt;</span></span> list <span class="token operator">=</span> taskService<span class="token punctuation">.</span><span class="token function">createTaskQuery</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">taskAssignee</span><span class="token punctuation">(</span>assignee<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">list</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token keyword">if</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token operator">!=</span>list<span class="token operator">&amp;&amp;</span>list<span class="token punctuation">.</span><span class="token function">size</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">&gt;</span><span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token class-name">Task</span> task <span class="token operator">:</span> list<span class="token punctuation">)</span> <span class="token punctuation">{</span>
				<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;任务ID:&quot;</span><span class="token operator">+</span>task<span class="token punctuation">.</span><span class="token function">getId</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
				<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;流程实例ID:&quot;</span><span class="token operator">+</span>task<span class="token punctuation">.</span><span class="token function">getProcessInstanceId</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
				<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;执行实例ID:&quot;</span><span class="token operator">+</span>task<span class="token punctuation">.</span><span class="token function">getExecutionId</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
				<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;流程定义ID:&quot;</span><span class="token operator">+</span>task<span class="token punctuation">.</span><span class="token function">getProcessDefinitionId</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
				<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;任务名称:&quot;</span><span class="token operator">+</span>task<span class="token punctuation">.</span><span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
				<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;任务办理人:&quot;</span><span class="token operator">+</span>task<span class="token punctuation">.</span><span class="token function">getAssignee</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
				<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;################################&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
			<span class="token punctuation">}</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>
	
	<span class="token doc-comment comment">/**
	 * 办理任务
	 */</span>
	<span class="token annotation punctuation">@Test</span>
	<span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">doTask</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
		<span class="token class-name">TaskService</span> taskService <span class="token operator">=</span> proEng<span class="token punctuation">.</span><span class="token function">getTaskService</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token class-name">String</span> taskId<span class="token operator">=</span><span class="token string">&quot;7502&quot;</span><span class="token punctuation">;</span>
<span class="token comment">//		taskService.</span>
		taskService<span class="token punctuation">.</span><span class="token function">complete</span><span class="token punctuation">(</span>taskId<span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;任务完成&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div>`,11),e=[o];function c(l,u){return s(),a("div",null,e)}const i=n(p,[["render",c],["__file","activiti_c_table.html.vue"]]);export{i as default};
