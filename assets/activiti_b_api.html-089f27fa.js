import{_ as n,p as a,q as s,a1 as t}from"./framework-d81ad7e5.js";const e={},c=t(`<ul><li><strong>ProcessEngine</strong></li></ul><div class="language-java" data-ext="java"><pre class="language-java"><code>	<span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">intiTables3</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token comment">//必须创建activiti.cfg.xml  并配置好数据库的信息</span>
		<span class="token class-name">ProcessEngine</span> processEngine<span class="token operator">=</span><span class="token class-name">ProcessEngines</span><span class="token punctuation">.</span><span class="token function">getDefaultProcessEngine</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>processEngine<span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token comment">//流程图的部署  修改  删除的服务器 act_ge_bytearray, act_re_deployment, act_re_model, act_re_procdef</span>
		<span class="token class-name">RepositoryService</span> repositoryService <span class="token operator">=</span> processEngine<span class="token punctuation">.</span><span class="token function">getRepositoryService</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token comment">//流程的运行 act_ru_event_subscr, act_ru_execution, act_ru_identitylink, act_ru_job, act_ru_task, act_ru_variable</span>
		<span class="token class-name">RuntimeService</span> runtimeService <span class="token operator">=</span> processEngine<span class="token punctuation">.</span><span class="token function">getRuntimeService</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token class-name">TaskService</span> taskService <span class="token operator">=</span> processEngine<span class="token punctuation">.</span><span class="token function">getTaskService</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token comment">//查询历史记录的服务器act_hi_actinst, act_hi_attachment, act_hi_comment, act_hi_detail, act_hi_identitylink, act_hi_procinst, act_hi_taskinst, act_hi_varinst</span>
		<span class="token class-name">HistoryService</span> historyService <span class="token operator">=</span> processEngine<span class="token punctuation">.</span><span class="token function">getHistoryService</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token comment">//页面表单的服务器[了解]</span>
		<span class="token class-name">FormService</span> formService <span class="token operator">=</span> processEngine<span class="token punctuation">.</span><span class="token function">getFormService</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token comment">//对工作流的用户管理的表的操作act_id_group, act_id_info, act_id_membership, act_id_user</span>
		<span class="token class-name">IdentityService</span> identityService <span class="token operator">=</span> processEngine<span class="token punctuation">.</span><span class="token function">getIdentityService</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token comment">//管理器</span>
		<span class="token class-name">ManagementService</span> managementService <span class="token operator">=</span> processEngine<span class="token punctuation">.</span><span class="token function">getManagementService</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
</code></pre></div><h3 id="repositoryservice" tabindex="-1"><a class="header-anchor" href="#repositoryservice" aria-hidden="true">#</a> RepositoryService</h3><p>是Activiti的仓库服务类。所谓的仓库指流程定义文档的两个文件，bpmn文件和流程图片。</p><ol><li>产生方式</li><li>可以产生DeploymentBuilder，用来定义流程部署的相关参数</li><li>删除流程定义</li></ol><h3 id="runtimeservice" tabindex="-1"><a class="header-anchor" href="#runtimeservice" aria-hidden="true">#</a> RuntimeService</h3><p>是activiti的流程执行服务类。可以从这个服务类中获取很多关于流程执行相关的信息。</p><h3 id="taskservice" tabindex="-1"><a class="header-anchor" href="#taskservice" aria-hidden="true">#</a> TaskService</h3><p>是activiti的任务服务类。可以从这个类中获取任务的信息。</p><h3 id="historyservice" tabindex="-1"><a class="header-anchor" href="#historyservice" aria-hidden="true">#</a> HistoryService</h3><p>是activiti的查询历史信息的类。在一个流程执行完成后，这个对象为我们提供查询历史信息。</p><h3 id="processdefinition" tabindex="-1"><a class="header-anchor" href="#processdefinition" aria-hidden="true">#</a> ProcessDefinition</h3><ul><li><code>act_re_procdef</code> 流程定义类。可以从这里获得资源文件等。当流程图被部署之后，查询出来的数据就是流程定义的数据</li></ul><h3 id="processinstance-act-ru-execution" tabindex="-1"><a class="header-anchor" href="#processinstance-act-ru-execution" aria-hidden="true">#</a> ProcessInstance act_ru_execution</h3><p>代表流程定义的执行实例。如范冰冰请了一天的假，她就必须发出一个流程实例的申请。一个流程实例包括了所有的运行节点。我们可以利用这个对象来了解当前流程实例的进度等信息。流程实例就表示一个流程从开始到结束的最大的流程分支，即一个流程中流程实例只有一个。</p><h3 id="execution-act-ru-execution" tabindex="-1"><a class="header-anchor" href="#execution-act-ru-execution" aria-hidden="true">#</a> Execution act_ru_execution</h3><p>Activiti用这个对象去描述流程执行的每一个节点。在没有并发的情况下，Execution就是同ProcessInstance。流程按照流程定义的规则执行一次的过程，就可以表示执行对象Execution。 如图为ProcessInstance的源代码，</p><h3 id="taskinstance-任务实例act-ru-task" tabindex="-1"><a class="header-anchor" href="#taskinstance-任务实例act-ru-task" aria-hidden="true">#</a> TaskInstance 任务实例act_ru_task</h3>`,18),p=[c];function i(o,r){return a(),s("div",null,p)}const l=n(e,[["render",i],["__file","activiti_b_api.html.vue"]]);export{l as default};