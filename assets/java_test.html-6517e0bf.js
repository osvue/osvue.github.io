import{_ as n,p as s,q as a,a1 as t}from"./framework-d81ad7e5.js";const p={},o=t(`<h2 id="java测试activiti" tabindex="-1"><a class="header-anchor" href="#java测试activiti" aria-hidden="true">#</a> JAVA测试activiti</h2><div class="language-java" data-ext="java"><pre class="language-java"><code>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>activiti<span class="token punctuation">.</span>engine<span class="token punctuation">.</span></span><span class="token operator">*</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>activiti<span class="token punctuation">.</span>engine<span class="token punctuation">.</span>history<span class="token punctuation">.</span></span><span class="token class-name">HistoricIdentityLink</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>activiti<span class="token punctuation">.</span>engine<span class="token punctuation">.</span>history<span class="token punctuation">.</span></span><span class="token class-name">HistoricTaskInstance</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>activiti<span class="token punctuation">.</span>engine<span class="token punctuation">.</span>history<span class="token punctuation">.</span></span><span class="token class-name">HistoricVariableInstance</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>activiti<span class="token punctuation">.</span>engine<span class="token punctuation">.</span>repository<span class="token punctuation">.</span></span><span class="token class-name">Deployment</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>activiti<span class="token punctuation">.</span>engine<span class="token punctuation">.</span>repository<span class="token punctuation">.</span></span><span class="token class-name">Model</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>activiti<span class="token punctuation">.</span>engine<span class="token punctuation">.</span>repository<span class="token punctuation">.</span></span><span class="token class-name">ProcessDefinition</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>activiti<span class="token punctuation">.</span>engine<span class="token punctuation">.</span>runtime<span class="token punctuation">.</span></span><span class="token class-name">ProcessInstance</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>activiti<span class="token punctuation">.</span>engine<span class="token punctuation">.</span>task<span class="token punctuation">.</span></span><span class="token class-name">IdentityLink</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>activiti<span class="token punctuation">.</span>engine<span class="token punctuation">.</span>task<span class="token punctuation">.</span></span><span class="token class-name">Task</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>junit<span class="token punctuation">.</span>jupiter<span class="token punctuation">.</span>api<span class="token punctuation">.</span></span><span class="token class-name">Test</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>beans<span class="token punctuation">.</span>factory<span class="token punctuation">.</span>annotation<span class="token punctuation">.</span></span><span class="token class-name">Autowired</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>boot<span class="token punctuation">.</span>test<span class="token punctuation">.</span>context<span class="token punctuation">.</span></span><span class="token class-name">SpringBootTest</span></span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token import"><span class="token namespace">javax<span class="token punctuation">.</span>annotation<span class="token punctuation">.</span></span><span class="token class-name">Resource</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>io<span class="token punctuation">.</span></span><span class="token class-name">BufferedOutputStream</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>io<span class="token punctuation">.</span></span><span class="token class-name">File</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>io<span class="token punctuation">.</span></span><span class="token class-name">FileOutputStream</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>io<span class="token punctuation">.</span></span><span class="token class-name">InputStream</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>util<span class="token punctuation">.</span></span><span class="token class-name">Date</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>util<span class="token punctuation">.</span></span><span class="token class-name">HashMap</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>util<span class="token punctuation">.</span></span><span class="token class-name">List</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>util<span class="token punctuation">.</span></span><span class="token class-name">Map</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>util<span class="token punctuation">.</span>zip<span class="token punctuation">.</span></span><span class="token class-name">ZipInputStream</span></span><span class="token punctuation">;</span>

<span class="token annotation punctuation">@SpringBootTest</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">TestUser</span> <span class="token punctuation">{</span>

    <span class="token annotation punctuation">@Autowired</span>
    <span class="token class-name">ISysUserService</span> sysUserService<span class="token punctuation">;</span>


    <span class="token annotation punctuation">@Resource</span>
    <span class="token class-name">RepositoryService</span> repositoryService<span class="token punctuation">;</span>

    <span class="token annotation punctuation">@Resource</span>
    <span class="token class-name">RuntimeService</span> runtimeService<span class="token punctuation">;</span>
    <span class="token annotation punctuation">@Resource</span>
    <span class="token class-name">TaskService</span> taskService<span class="token punctuation">;</span>
    <span class="token annotation punctuation">@Resource</span>
    <span class="token class-name">HistoryService</span> historyService<span class="token punctuation">;</span>


 
    <span class="token doc-comment comment">/**
    * <span class="token keyword">@description</span>: 部署流程
    * <span class="token keyword">@author</span> hzqq
    * <span class="token keyword">@date</span> 2025/2/14 10:36
    * <span class="token keyword">@version</span> 1.0
     */</span>
    <span class="token annotation punctuation">@Test</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">deployProcess</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">InputStream</span> in <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">getClass</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getResourceAsStream</span><span class="token punctuation">(</span><span class="token string">&quot;/MyProcess11.zip&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>err<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>in<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">ZipInputStream</span> zipInputStream <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ZipInputStream</span><span class="token punctuation">(</span>in<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">Deployment</span> dm <span class="token operator">=</span> repositoryService<span class="token punctuation">.</span><span class="token function">createDeployment</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
                <span class="token punctuation">.</span><span class="token function">name</span><span class="token punctuation">(</span><span class="token string">&quot;学生请假&quot;</span><span class="token punctuation">)</span>
                <span class="token punctuation">.</span><span class="token function">addZipInputStream</span><span class="token punctuation">(</span>zipInputStream<span class="token punctuation">)</span>
                <span class="token punctuation">.</span><span class="token function">deploy</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token class-name">System</span><span class="token punctuation">.</span>err<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;id:&quot;</span> <span class="token operator">+</span> dm<span class="token punctuation">.</span><span class="token function">getId</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token string">&quot;,name:&quot;</span> <span class="token operator">+</span> dm<span class="token punctuation">.</span><span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>


    <span class="token doc-comment comment">/**
     * 启动流程  并设置了全局办理人，流程变量
     */</span>
    <span class="token annotation punctuation">@Test</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">startProcess</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>

        <span class="token class-name">String</span> businessKey <span class="token operator">=</span> <span class="token string">&quot;UUID______xxxx-8s8s8s8j9d349r9-XXMM&quot;</span><span class="token punctuation">;</span>
        <span class="token class-name">Map</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">,</span> <span class="token class-name">Object</span><span class="token punctuation">&gt;</span></span> variables <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">HashMap</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">,</span> <span class="token class-name">Object</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">//设置流程变量day=3   vma_user</span>
        variables<span class="token punctuation">.</span><span class="token function">put</span><span class="token punctuation">(</span><span class="token string">&quot;day&quot;</span><span class="token punctuation">,</span> <span class="token number">55</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        variables<span class="token punctuation">.</span><span class="token function">put</span><span class="token punctuation">(</span><span class="token string">&quot;vma_user&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;zzz&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        variables<span class="token punctuation">.</span><span class="token function">put</span><span class="token punctuation">(</span><span class="token string">&quot;vm_user&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;xxx&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">ProcessInstance</span> pi <span class="token operator">=</span>
                runtimeService<span class="token punctuation">.</span><span class="token function">startProcessInstanceByKey</span><span class="token punctuation">(</span><span class="token string">&quot;myProcess&quot;</span><span class="token punctuation">,</span>
                        businessKey<span class="token punctuation">,</span> variables<span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">// 将流程定义名称 作为 流程实例名称</span>
        runtimeService<span class="token punctuation">.</span><span class="token function">setProcessInstanceName</span><span class="token punctuation">(</span>pi<span class="token punctuation">.</span><span class="token function">getProcessInstanceId</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> pi<span class="token punctuation">.</span><span class="token function">getProcessDefinitionName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;id:&quot;</span> <span class="token operator">+</span> pi<span class="token punctuation">.</span><span class="token function">getId</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token string">&quot;,流程实例ID:&quot;</span> <span class="token operator">+</span> pi<span class="token punctuation">.</span><span class="token function">getProcessInstanceId</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token string">&quot;,流程定义ID:&quot;</span> <span class="token operator">+</span> pi<span class="token punctuation">.</span><span class="token function">getProcessDefinitionId</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token string">&quot; process Name : &quot;</span> <span class="token operator">+</span> pi<span class="token punctuation">.</span><span class="token function">getProcessDefinitionName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">/*
        //通过流程实例ID获取任务对象
        Task task = taskService.createTaskQuery()
                .processInstanceId(pi.getProcessInstanceId())
                .singleResult();
        System.out.println(&quot;taskID:&quot;+task.getId()+&quot;,name:&quot;+task.getName());

        Map&lt;String, Object&gt; paramMap = new HashMap&lt;String, Object&gt;();
        //设置流程变量day=3   vma_user
        paramMap.put(&quot;day&quot;, 3);
        paramMap.put(&quot;vma_user&quot;, &quot;xiao明&quot;);
        //提交任务的时候传入流程变量
        taskService.complete(task.getId(), paramMap);

        //查询任务
        task = taskService.createTaskQuery()
                .processInstanceId(pi.getProcessInstanceId())
                .singleResult();

        //如果任务对象为空,则流程执行结束
        if (task != null) {
            System.out.println(&quot;taskID:&quot;+task.getId()+&quot;,name:&quot;+task.getName());
        } else {
            System.out.println(&quot;任务执行完毕&quot;);
        }
        */</span>

    <span class="token punctuation">}</span>


    <span class="token doc-comment comment">/**
     * 查询个人任务
     */</span>
    <span class="token annotation punctuation">@Test</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">findTask</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">String</span> assignee <span class="token operator">=</span> <span class="token string">&quot;zzz&quot;</span><span class="token punctuation">;</span>
        <span class="token function">queryUserTaskByASSIGNEE</span><span class="token punctuation">(</span>assignee<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">private</span> <span class="token keyword">void</span> <span class="token function">queryUserTaskByASSIGNEE</span><span class="token punctuation">(</span><span class="token class-name">String</span> assignee<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Task</span><span class="token punctuation">&gt;</span></span> list <span class="token operator">=</span> taskService<span class="token punctuation">.</span><span class="token function">createTaskQuery</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">taskAssignee</span><span class="token punctuation">(</span>assignee<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">list</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">null</span> <span class="token operator">!=</span> list <span class="token operator">&amp;&amp;</span> list<span class="token punctuation">.</span><span class="token function">size</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">&gt;</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token class-name">Task</span> task <span class="token operator">:</span> list<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;任务ID:&quot;</span> <span class="token operator">+</span> task<span class="token punctuation">.</span><span class="token function">getId</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;流程实例ID:&quot;</span> <span class="token operator">+</span> task<span class="token punctuation">.</span><span class="token function">getProcessInstanceId</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;执行实例ID:&quot;</span> <span class="token operator">+</span> task<span class="token punctuation">.</span><span class="token function">getExecutionId</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;流程定义ID:&quot;</span> <span class="token operator">+</span> task<span class="token punctuation">.</span><span class="token function">getProcessDefinitionId</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;任务名称:&quot;</span> <span class="token operator">+</span> task<span class="token punctuation">.</span><span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;任务办理人:&quot;</span> <span class="token operator">+</span> task<span class="token punctuation">.</span><span class="token function">getAssignee</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;################################&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/**
     * 办理任务 <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>br</span><span class="token punctuation">/&gt;</span></span>
     * <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>b</span><span class="token punctuation">&gt;</span></span>不使用 流程变量<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>b</span><span class="token punctuation">&gt;</span></span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>br</span><span class="token punctuation">/&gt;</span></span>
     * <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>b</span> <span class="token attr-name">color</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&#39;</span>red<span class="token punctuation">&#39;</span></span><span class="token punctuation">&gt;</span></span>流程变量,在启动流程的时候，把流程变量都设置了<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>b</span><span class="token punctuation">&gt;</span></span>
     *
     */</span>
    <span class="token annotation punctuation">@Test</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">completeTask</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">String</span> taskId <span class="token operator">=</span> <span class="token string">&quot;baa2cc05-ea7c-11ef-8332-7486e20f8b57&quot;</span><span class="token punctuation">;</span>
        <span class="token comment">// 根据任务ID去完成任务</span>
        taskService<span class="token punctuation">.</span><span class="token function">complete</span><span class="token punctuation">(</span>taskId<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">// 根据任务ID去完成任务并指定流程变量</span>
<span class="token comment">//		taskService.complete(taskId, variables);</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;任务完成&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/**
     * 办理任务 并 带上 条件 变量 包括动态指定 下一个 任务办理人
     * <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">&gt;</span></span>
     * Condition
     * $<span class="token punctuation">{</span>day == 3<span class="token punctuation">}</span> &gt;= &lt;=
     * return boolean
     * <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span>
     */</span>
    <span class="token annotation punctuation">@Test</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">completeTaskForVariable</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">String</span> taskId <span class="token operator">=</span> <span class="token string">&quot;a77fcb5d-ea78-11ef-a987-7486e20f8b57&quot;</span><span class="token punctuation">;</span>
        <span class="token comment">// variables   任务 执行 完成之后-------------后生效</span>
        <span class="token class-name">Map</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">,</span> <span class="token class-name">Object</span><span class="token punctuation">&gt;</span></span> variables <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">HashMap</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        variables<span class="token punctuation">.</span><span class="token function">put</span><span class="token punctuation">(</span><span class="token string">&quot;day&quot;</span><span class="token punctuation">,</span> <span class="token number">66</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        variables<span class="token punctuation">.</span><span class="token function">put</span><span class="token punctuation">(</span><span class="token string">&quot;vm_user&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;aBxm&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">// TODO 重要： 在此次完成过程中，数据库存在了  variables set 的 两个Key , 但是 【任务完成】 之后没有覆盖    如果是任务本地变量，complete 不会覆盖它们</span>
        <span class="token comment">// 当前任务 执行生效</span>
        taskService<span class="token punctuation">.</span><span class="token function">setVariable</span><span class="token punctuation">(</span>taskId<span class="token punctuation">,</span><span class="token string">&quot;day&quot;</span><span class="token punctuation">,</span><span class="token number">68</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">// 根据任务ID去完成任务并指定流程变量</span>
        taskService<span class="token punctuation">.</span><span class="token function">complete</span><span class="token punctuation">(</span>taskId<span class="token punctuation">,</span> variables<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;任务完成&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token annotation punctuation">@Test</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">findTaskAssignee</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">String</span> assignee <span class="token operator">=</span> <span class="token string">&quot;axm&quot;</span><span class="token punctuation">;</span>
        <span class="token function">queryUserTaskByASSIGNEE</span><span class="token punctuation">(</span>assignee<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/**
     * <span class="token keyword">@description</span>: boss 办理任务-setVariable
     * <span class="token keyword">@author</span> hzqq
     * <span class="token keyword">@date</span> 2025/2/14 9:32
     * <span class="token keyword">@version</span> 1.0
     */</span>
    <span class="token annotation punctuation">@Test</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">doTask</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">String</span> taskId <span class="token operator">=</span> <span class="token string">&quot;0489ef28-ea7b-11ef-80b7-7486e20f8b57&quot;</span><span class="token punctuation">;</span>
        taskService<span class="token punctuation">.</span><span class="token function">setVariable</span><span class="token punctuation">(</span>taskId<span class="token punctuation">,</span> <span class="token string">&quot;day&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;local_17778179517+----------&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        taskService<span class="token punctuation">.</span><span class="token function">setVariable</span><span class="token punctuation">(</span>taskId<span class="token punctuation">,</span> <span class="token string">&quot;flag&quot;</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">//		taskService.</span>
        taskService<span class="token punctuation">.</span><span class="token function">complete</span><span class="token punctuation">(</span>taskId<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;任务完成&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

<span class="token comment">//-----------------------------------------------------------------------------------</span>
    <span class="token doc-comment comment">/**
     * 查询任务
     */</span>
    <span class="token annotation punctuation">@Test</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">findTaskUser</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
 <span class="token comment">//		String assignee=&quot;张三&quot;;</span>
<span class="token comment">// 		String assignee=&quot;李四&quot;;</span>
        <span class="token class-name">String</span> assignee<span class="token operator">=</span><span class="token string">&quot;xb&quot;</span><span class="token punctuation">;</span>
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


    <span class="token comment">// 查询组任务列表</span>
    <span class="token annotation punctuation">@Test</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">findGroupList</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token class-name">String</span> userId <span class="token operator">=</span> <span class="token string">&quot;xb&quot;</span><span class="token punctuation">;</span>
        <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Task</span><span class="token punctuation">&gt;</span></span> list <span class="token operator">=</span> taskService
                <span class="token punctuation">.</span><span class="token function">createTaskQuery</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token comment">//</span>
                <span class="token punctuation">.</span><span class="token function">taskCandidateUser</span><span class="token punctuation">(</span>userId<span class="token punctuation">)</span><span class="token comment">//指定组任务查询</span>
                <span class="token punctuation">.</span><span class="token function">list</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token class-name">Task</span> task<span class="token operator">:</span>list <span class="token punctuation">)</span><span class="token punctuation">{</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;id=&quot;</span><span class="token operator">+</span>task<span class="token punctuation">.</span><span class="token function">getId</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;name=&quot;</span><span class="token operator">+</span>task<span class="token punctuation">.</span><span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;assinee=&quot;</span><span class="token operator">+</span>task<span class="token punctuation">.</span><span class="token function">getAssignee</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;createTime =&quot;</span><span class="token operator">+</span>task<span class="token punctuation">.</span><span class="token function">getCreateTime</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;executionId=&quot;</span><span class="token operator">+</span>task<span class="token punctuation">.</span><span class="token function">getExecutionId</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;##################################&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>



    <span class="token doc-comment comment">/**
     *
     * @Title: findGroupUser
     * @Description: TODO(查询组任务成员列表)
     * <span class="token keyword">@param</span>:
     * <span class="token keyword">@return</span>: void
     * <span class="token keyword">@throws</span>
     */</span>
    <span class="token annotation punctuation">@Test</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">findGroupUser</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token class-name">String</span> taskId <span class="token operator">=</span> <span class="token string">&quot;35005&quot;</span><span class="token punctuation">;</span>
        <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">IdentityLink</span><span class="token punctuation">&gt;</span></span> list <span class="token operator">=</span> taskService
                <span class="token punctuation">.</span><span class="token function">getIdentityLinksForTask</span><span class="token punctuation">(</span>taskId<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">//List&lt;IdentityLink&gt; list = processEngine.getRuntimeService()//</span>
        <span class="token comment">//				.getIdentityLinksForProcessInstance(instanceId);</span>
        <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token class-name">IdentityLink</span> identityLink<span class="token operator">:</span>list <span class="token punctuation">)</span><span class="token punctuation">{</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;userId=&quot;</span><span class="token operator">+</span>identityLink<span class="token punctuation">.</span><span class="token function">getUserId</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;taskId=&quot;</span><span class="token operator">+</span>identityLink<span class="token punctuation">.</span><span class="token function">getTaskId</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;piId=&quot;</span><span class="token operator">+</span>identityLink<span class="token punctuation">.</span><span class="token function">getProcessInstanceId</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;######################&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>


    <span class="token doc-comment comment">/**
     *
     * @Title: findGroupHisUser
     * @Description: TODO 查询组任务成员历史列表
     * <span class="token keyword">@param</span>:
     * <span class="token keyword">@return</span>: void
     * <span class="token keyword">@throws</span>
     */</span>
    <span class="token annotation punctuation">@Test</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">findGroupHistoryUser</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token class-name">String</span> taskId <span class="token operator">=</span> <span class="token string">&quot;35005&quot;</span><span class="token punctuation">;</span>
        <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">HistoricIdentityLink</span><span class="token punctuation">&gt;</span></span> list <span class="token operator">=</span> historyService
                <span class="token punctuation">.</span><span class="token function">getHistoricIdentityLinksForTask</span><span class="token punctuation">(</span>taskId<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">// List&lt;HistoricIdentityLink&gt; list = processEngine.getHistoryService()//</span>
        <span class="token comment">// .getHistoricIdentityLinksForProcessInstance(processInstanceId);</span>
        <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token class-name">HistoricIdentityLink</span> identityLink<span class="token operator">:</span>list <span class="token punctuation">)</span><span class="token punctuation">{</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;userId=&quot;</span><span class="token operator">+</span>identityLink<span class="token punctuation">.</span><span class="token function">getUserId</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;taskId=&quot;</span><span class="token operator">+</span>identityLink<span class="token punctuation">.</span><span class="token function">getTaskId</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;piId=&quot;</span><span class="token operator">+</span>identityLink<span class="token punctuation">.</span><span class="token function">getProcessInstanceId</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;######################&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/**将组任务分配给个人任务，拾取任务*/</span>
    <span class="token comment">//由1个人去完成任务</span>
    <span class="token annotation punctuation">@Test</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">claim</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token comment">//任务ID</span>
        <span class="token class-name">String</span> taskId <span class="token operator">=</span> <span class="token string">&quot;35005&quot;</span><span class="token punctuation">;</span>
        <span class="token comment">//分配的办理人</span>
        <span class="token class-name">String</span> userId <span class="token operator">=</span> <span class="token string">&quot;xb&quot;</span><span class="token punctuation">;</span>
        taskService<span class="token punctuation">.</span><span class="token function">claim</span><span class="token punctuation">(</span>taskId<span class="token punctuation">,</span> userId<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/**
     *
     * @Title: claim
     * @Description: TODO(拾取后回退)
     * <span class="token keyword">@param</span>:
     * <span class="token keyword">@return</span>: void
     * <span class="token keyword">@throws</span>
     */</span>
    <span class="token annotation punctuation">@Test</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">claimRollback</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token comment">//任务ID</span>
        <span class="token class-name">String</span> taskId <span class="token operator">=</span> <span class="token string">&quot;35005&quot;</span><span class="token punctuation">;</span>

        taskService<span class="token punctuation">.</span><span class="token function">claim</span><span class="token punctuation">(</span>taskId<span class="token punctuation">,</span> <span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">//------------------------------------------------------------------- 信息的查询</span>


    <span class="token annotation punctuation">@Test</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">queryProcess</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
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

    <span class="token doc-comment comment">/**
     * 查询流程定义
     */</span>
    <span class="token annotation punctuation">@Test</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">queryProcessDefinei</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>

        <span class="token class-name">String</span> processDefinitionId <span class="token operator">=</span> <span class="token string">&quot;hy:1:4&quot;</span><span class="token punctuation">;</span>
        <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">ProcessDefinition</span><span class="token punctuation">&gt;</span></span> list <span class="token operator">=</span> repositoryService<span class="token punctuation">.</span><span class="token function">createProcessDefinitionQuery</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
                <span class="token punctuation">.</span><span class="token function">processDefinitionId</span><span class="token punctuation">(</span>processDefinitionId<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">list</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token class-name">ProcessDefinition</span> pe <span class="token operator">:</span> list<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>pe<span class="token punctuation">.</span><span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>pe<span class="token punctuation">.</span><span class="token function">getId</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>pe<span class="token punctuation">.</span><span class="token function">getKey</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>pe<span class="token punctuation">.</span><span class="token function">getResourceName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>


    <span class="token doc-comment comment">/**
     * 根据流程部署id删除流程定义
     * 删除流程定义
     */</span>
    <span class="token annotation punctuation">@Test</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">deleteProcessDef</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">String</span> deploymentId <span class="token operator">=</span> <span class="token string">&quot;1&quot;</span><span class="token punctuation">;</span>
        <span class="token comment">// 根据流程部署id删除流程定义 如果当前id的流程正在执行，那么会报错</span>
        <span class="token comment">// repositoryService.deleteDeployment(deploymentId);</span>
        <span class="token comment">// 根据流程部署id删除删除流程定义 如果当前id的流程正在执行,会把正在执行的流程数据删除 act_ru_*和act_hi_*表里面的数据</span>
        repositoryService<span class="token punctuation">.</span><span class="token function">deleteDeployment</span><span class="token punctuation">(</span>deploymentId<span class="token punctuation">,</span> <span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">//		repositoryService.deleteDeploymentCascade(deploymentId);==repositoryService.deleteDeployment(deploymentId, true);</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;删除成功&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

<span class="token comment">//----------------------------------------------------------------------- 关于 流程变量</span>

    <span class="token annotation punctuation">@Test</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">startProcessByKey</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>

        <span class="token class-name">String</span> processDefinitionKey <span class="token operator">=</span> <span class="token string">&quot;hy&quot;</span><span class="token punctuation">;</span>
        <span class="token class-name">Map</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">,</span> <span class="token class-name">Object</span><span class="token punctuation">&gt;</span></span> variables <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">HashMap</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        variables<span class="token punctuation">.</span><span class="token function">put</span><span class="token punctuation">(</span><span class="token string">&quot;请假时间&quot;</span><span class="token punctuation">,</span> <span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        variables<span class="token punctuation">.</span><span class="token function">put</span><span class="token punctuation">(</span><span class="token string">&quot;请假天数&quot;</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        variables<span class="token punctuation">.</span><span class="token function">put</span><span class="token punctuation">(</span><span class="token string">&quot;请假原因&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;回家探亲&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">ProcessInstance</span> proins <span class="token operator">=</span> runtimeService<span class="token punctuation">.</span><span class="token function">startProcessInstanceByKey</span><span class="token punctuation">(</span>processDefinitionKey<span class="token punctuation">,</span> variables<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;启动成功：&quot;</span> <span class="token operator">+</span> proins<span class="token punctuation">.</span><span class="token function">getId</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">String</span> processDefinitionId <span class="token operator">=</span> proins<span class="token punctuation">.</span><span class="token function">getProcessDefinitionId</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;启动成功：流程id：&quot;</span> <span class="token operator">+</span> processDefinitionId<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>


    <span class="token annotation punctuation">@Test</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">queryUserProcessInstance</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>


        <span class="token class-name">String</span> assignee <span class="token operator">=</span> <span class="token string">&quot;王五&quot;</span><span class="token punctuation">;</span>
        <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Task</span><span class="token punctuation">&gt;</span></span> taskList <span class="token operator">=</span> taskService<span class="token punctuation">.</span><span class="token function">createTaskQuery</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">taskAssignee</span><span class="token punctuation">(</span>assignee<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">list</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        taskList<span class="token punctuation">.</span><span class="token function">stream</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span>e <span class="token operator">-&gt;</span> <span class="token punctuation">{</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>e<span class="token punctuation">.</span><span class="token function">getId</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>e<span class="token punctuation">.</span><span class="token function">getExecutionId</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>e<span class="token punctuation">.</span><span class="token function">getAssignee</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>e<span class="token punctuation">.</span><span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>e<span class="token punctuation">.</span><span class="token function">getCreateTime</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token punctuation">}</span>

    <span class="token annotation punctuation">@Test</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">complteProcessInstance</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">String</span> taskId <span class="token operator">=</span> <span class="token string">&quot;22502&quot;</span><span class="token punctuation">;</span>

        taskService<span class="token punctuation">.</span><span class="token function">complete</span><span class="token punctuation">(</span>taskId<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token annotation punctuation">@Test</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">queryTaskHistory</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>

        <span class="token class-name">String</span> executionId <span class="token operator">=</span> <span class="token string">&quot;17501&quot;</span><span class="token punctuation">;</span>
        <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">HistoricTaskInstance</span><span class="token punctuation">&gt;</span></span> hisList <span class="token operator">=</span> historyService<span class="token punctuation">.</span><span class="token function">createHistoricTaskInstanceQuery</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">executionId</span><span class="token punctuation">(</span>executionId<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">list</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>


        hisList<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span>e <span class="token operator">-&gt;</span> <span class="token punctuation">{</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>e<span class="token punctuation">.</span><span class="token function">getCreateTime</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;办理人&quot;</span> <span class="token operator">+</span> e<span class="token punctuation">.</span><span class="token function">getAssignee</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;启动时间&quot;</span> <span class="token operator">+</span> e<span class="token punctuation">.</span><span class="token function">getStartTime</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;结束时间&quot;</span> <span class="token operator">+</span> e<span class="token punctuation">.</span><span class="token function">getEndTime</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>e<span class="token punctuation">.</span><span class="token function">getDueDate</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>e<span class="token punctuation">.</span><span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token class-name">Long</span> durationInMillis <span class="token operator">=</span> e<span class="token punctuation">.</span><span class="token function">getDurationInMillis</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token function">converTimeMillis</span><span class="token punctuation">(</span>durationInMillis<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;--------------------------&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">converTimeMillis</span><span class="token punctuation">(</span><span class="token class-name">Long</span> durationInMillis<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">null</span> <span class="token operator">==</span> durationInMillis<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span> <span class="token string">&quot;-&quot;</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token class-name">Long</span> second <span class="token operator">=</span> durationInMillis <span class="token operator">/</span> <span class="token number">1000</span><span class="token punctuation">;</span>

        <span class="token keyword">double</span> minuet <span class="token operator">=</span> second <span class="token operator">/</span> <span class="token number">60</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> minuet <span class="token operator">+</span> <span class="token string">&quot;分钟&quot;</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>


    <span class="token annotation punctuation">@Test</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">setVariables</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>

        <span class="token class-name">Map</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">,</span> <span class="token class-name">Object</span><span class="token punctuation">&gt;</span></span> variables <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">HashMap</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        variables<span class="token punctuation">.</span><span class="token function">put</span><span class="token punctuation">(</span><span class="token string">&quot;请假天数&quot;</span><span class="token punctuation">,</span> <span class="token number">56</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        variables<span class="token punctuation">.</span><span class="token function">put</span><span class="token punctuation">(</span><span class="token string">&quot;请假原因&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;1101回家探亲&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">String</span> executionId <span class="token operator">=</span> <span class="token string">&quot;27501&quot;</span><span class="token punctuation">;</span>
        runtimeService<span class="token punctuation">.</span><span class="token function">setVariables</span><span class="token punctuation">(</span>executionId<span class="token punctuation">,</span> variables<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token annotation punctuation">@Test</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">setVariables2</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>

        <span class="token class-name">String</span> taskId <span class="token operator">=</span> <span class="token string">&quot;27507&quot;</span><span class="token punctuation">;</span>
        <span class="token comment">//runtimeService.setVariable(executionId, &quot;请假人&quot;, &quot;小明&quot;);</span>
        <span class="token class-name">Map</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">,</span> <span class="token class-name">Object</span><span class="token punctuation">&gt;</span></span> variables <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">HashMap</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        variables<span class="token punctuation">.</span><span class="token function">put</span><span class="token punctuation">(</span><span class="token string">&quot;任务ID设置的&quot;</span><span class="token punctuation">,</span> <span class="token number">9</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//int</span>
<span class="token comment">//		taskService.setVariable(taskId, variableName, value);</span>
        taskService<span class="token punctuation">.</span><span class="token function">setVariables</span><span class="token punctuation">(</span>taskId<span class="token punctuation">,</span> variables<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;流程变量设置成功&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token annotation punctuation">@Test</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">queryHistoryVariables</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">String</span> processInstanceId <span class="token operator">=</span> <span class="token string">&quot;27501&quot;</span><span class="token punctuation">;</span>
        <span class="token class-name">String</span> taskId <span class="token operator">=</span> <span class="token string">&quot;27507&quot;</span><span class="token punctuation">;</span>
        <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">HistoricVariableInstance</span><span class="token punctuation">&gt;</span></span> variableList <span class="token operator">=</span> historyService<span class="token punctuation">.</span><span class="token function">createHistoricVariableInstanceQuery</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
                <span class="token punctuation">.</span><span class="token function">processInstanceId</span><span class="token punctuation">(</span>processInstanceId<span class="token punctuation">)</span>
<span class="token comment">//			.taskId(taskId)</span>
                <span class="token punctuation">.</span><span class="token function">list</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        variableList<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span>e <span class="token operator">-&gt;</span> <span class="token punctuation">{</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>e<span class="token punctuation">.</span><span class="token function">getVariableName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>e<span class="token punctuation">.</span><span class="token function">getValue</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

<span class="token punctuation">}</span>

</code></pre></div>`,2),c=[o];function e(u,l){return s(),a("div",null,c)}const i=n(p,[["render",e],["__file","java_test.html.vue"]]);export{i as default};
