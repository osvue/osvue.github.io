import{_ as n,p as s,q as a,a1 as t}from"./framework-d81ad7e5.js";const p="/assets/listener-d0184e10.png",o={},c=t(`<h3 id="用户任务-usertask-即用户操作的任务" tabindex="-1"><a class="header-anchor" href="#用户任务-usertask-即用户操作的任务" aria-hidden="true">#</a> 用户任务（userTask，即用户操作的任务）</h3><ul><li>Assignee</li><li><strong>使用流程变量</strong><ul><li><code>\${username} or #{userName}</code></li></ul></li></ul><div class="language-java" data-ext="java"><pre class="language-java"><code><span class="token class-name">ProcessEngine</span> processEngine <span class="token operator">=</span> <span class="token class-name">ProcessEngines</span><span class="token punctuation">.</span><span class="token function">getDefaultProcessEngine</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">//部署流程定义，启动流程实例</span>
	<span class="token annotation punctuation">@Test</span>
	<span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">testTask</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">Exception</span> <span class="token punctuation">{</span>
		
		<span class="token comment">// 1 发布流程</span>
		<span class="token class-name">InputStream</span> inputStreamBpmn <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">getClass</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getResourceAsStream</span><span class="token punctuation">(</span><span class="token string">&quot;taskProcess.bpmn&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token class-name">InputStream</span> inputStreamPng <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">getClass</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getResourceAsStream</span><span class="token punctuation">(</span><span class="token string">&quot;taskProcess.png&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		processEngine<span class="token punctuation">.</span><span class="token function">getRepositoryService</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token comment">//</span>
						<span class="token punctuation">.</span><span class="token function">createDeployment</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token comment">//</span>
						<span class="token punctuation">.</span><span class="token function">addInputStream</span><span class="token punctuation">(</span><span class="token string">&quot;userTask.bpmn&quot;</span><span class="token punctuation">,</span> inputStreamBpmn<span class="token punctuation">)</span><span class="token comment">//</span>
						<span class="token punctuation">.</span><span class="token function">addInputStream</span><span class="token punctuation">(</span><span class="token string">&quot;userTask.png&quot;</span><span class="token punctuation">,</span> inputStreamPng<span class="token punctuation">)</span><span class="token comment">//</span>
						<span class="token punctuation">.</span><span class="token function">deploy</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		
	<span class="token comment">// 2 启动流程</span>
	<span class="token comment">//启动流程实例的同时，设置流程变量</span>
		<span class="token class-name">Map</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">,</span> <span class="token class-name">Object</span><span class="token punctuation">&gt;</span></span> variables <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">HashMap</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">,</span> <span class="token class-name">Object</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		variables<span class="token punctuation">.</span><span class="token function">put</span><span class="token punctuation">(</span><span class="token string">&quot;userID&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;李白&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token class-name">ProcessInstance</span> pi <span class="token operator">=</span> processEngine<span class="token punctuation">.</span><span class="token function">getRuntimeService</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token comment">//</span>
							<span class="token punctuation">.</span><span class="token function">startProcessInstanceByKey</span><span class="token punctuation">(</span><span class="token string">&quot;taskProcess&quot;</span><span class="token punctuation">,</span>variables<span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;pid:&quot;</span> <span class="token operator">+</span> pi<span class="token punctuation">.</span><span class="token function">getId</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	
	<span class="token comment">//查询我的个人任务列表</span>
	<span class="token annotation punctuation">@Test</span>
	<span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">findMyTaskList</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
		<span class="token class-name">String</span> userId <span class="token operator">=</span> <span class="token string">&quot;李白&quot;</span><span class="token punctuation">;</span>
		<span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Task</span><span class="token punctuation">&gt;</span></span> list <span class="token operator">=</span> processEngine<span class="token punctuation">.</span><span class="token function">getTaskService</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token comment">//</span>
		                <span class="token punctuation">.</span><span class="token function">createTaskQuery</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token comment">//</span>
		                <span class="token punctuation">.</span><span class="token function">taskAssignee</span><span class="token punctuation">(</span>userId<span class="token punctuation">)</span><span class="token comment">//指定个人任务查询</span>
		                <span class="token punctuation">.</span><span class="token function">list</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token keyword">for</span><span class="token punctuation">(</span><span class="token class-name">Task</span> task<span class="token operator">:</span>list <span class="token punctuation">)</span><span class="token punctuation">{</span>
			<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;id=&quot;</span><span class="token operator">+</span>task<span class="token punctuation">.</span><span class="token function">getId</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
			<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;name=&quot;</span><span class="token operator">+</span>task<span class="token punctuation">.</span><span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
			<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;assinee=&quot;</span><span class="token operator">+</span>task<span class="token punctuation">.</span><span class="token function">getAssignee</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
			<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;createTime=&quot;</span><span class="token operator">+</span>task<span class="token punctuation">.</span><span class="token function">getCreateTime</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
			<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;executionId=&quot;</span><span class="token operator">+</span>task<span class="token punctuation">.</span><span class="token function">getExecutionId</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
			
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>
	
	<span class="token comment">//完成任务</span>
	<span class="token annotation punctuation">@Test</span>
	<span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">completeTask</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
		<span class="token class-name">String</span> taskId <span class="token operator">=</span> <span class="token string">&quot;3209&quot;</span><span class="token punctuation">;</span>
		processEngine<span class="token punctuation">.</span><span class="token function">getTaskService</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token comment">//</span>
					<span class="token punctuation">.</span><span class="token function">complete</span><span class="token punctuation">(</span>taskId<span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//</span>
		<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;完成任务&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
</code></pre></div><h3 id="配置监听类" tabindex="-1"><a class="header-anchor" href="#配置监听类" aria-hidden="true">#</a> 配置监听类</h3><p><img src="`+p+`" alt="alt"></p><div class="language-java" data-ext="java"><pre class="language-java"><code>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>activiti<span class="token punctuation">.</span>engine<span class="token punctuation">.</span>delegate<span class="token punctuation">.</span></span><span class="token class-name">DelegateTask</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>activiti<span class="token punctuation">.</span>engine<span class="token punctuation">.</span>delegate<span class="token punctuation">.</span></span><span class="token class-name">TaskListener</span></span><span class="token punctuation">;</span>

<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">TsskUserListener</span> <span class="token keyword">implements</span> <span class="token class-name">TaskListener</span> <span class="token punctuation">{</span>

	<span class="token annotation punctuation">@Override</span>
	<span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">notify</span><span class="token punctuation">(</span><span class="token class-name">DelegateTask</span> delegateTask<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		 
		<span class="token class-name">String</span> assignee <span class="token operator">=</span> delegateTask<span class="token punctuation">.</span><span class="token function">getAssignee</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">//		delegateTask.setVariable(variableName, value);</span>
		<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;办理人：&quot;</span><span class="token operator">+</span>assignee<span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token comment">//指定个人任务</span>
		delegateTask<span class="token punctuation">.</span><span class="token function">setAssignee</span><span class="token punctuation">(</span><span class="token string">&quot;libai&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>

<span class="token punctuation">}</span>
</code></pre></div>`,6),e=[c];function u(l,k){return s(),a("div",null,e)}const r=n(o,[["render",u],["__file","activiti_i_uesr_task.html.vue"]]);export{r as default};