import{_ as s,p as n,q as a,a1 as e}from"./framework-d81ad7e5.js";const o={},t=e(`<h3 id="bpmn" tabindex="-1"><a class="header-anchor" href="#bpmn" aria-hidden="true">#</a> bpmn</h3><ul><li>activiti</li><li>flowable</li></ul><div class="language-sql" data-ext="sql"><pre class="language-sql"><code>
<span class="token comment"># Repositoryservice 部署流程相关表</span>
<span class="token keyword">SELECT</span> <span class="token operator">*</span> <span class="token keyword">FROM</span> act_re_deployment <span class="token comment">#部署对象表</span>

<span class="token keyword">select</span><span class="token operator">*</span> <span class="token keyword">from</span> act_re_procdef  <span class="token comment">#流程定义表</span>

<span class="token keyword">select</span> <span class="token operator">*</span> <span class="token keyword">from</span> act_ge_bytearray <span class="token comment">#资源文件表</span>

<span class="token keyword">select</span> <span class="token operator">*</span> <span class="token keyword">from</span> act_ge_property <span class="token comment">#主键生成策略表</span>

<span class="token comment"># RuntimeService   TaskService</span>
<span class="token comment">######流程实例，执行对象，任务#######</span>
<span class="token keyword">select</span> <span class="token operator">*</span> <span class="token keyword">from</span> act_ru_execution <span class="token comment">#正在执行的执行对象表  流程启动一次只要没有执行完，就会有一条数据</span>

<span class="token keyword">select</span> <span class="token operator">*</span> <span class="token keyword">from</span> act_ru_task <span class="token comment">#正在执行的任务表（只有节点是UserTask的时候，该表中存在数据） 可能有多条数据</span>

<span class="token keyword">select</span> <span class="token operator">*</span> <span class="token keyword">from</span> act_ru_variable <span class="token punctuation">;</span> <span class="token comment">#记录流程运行时的流程变量</span>

<span class="token keyword">select</span> <span class="token operator">*</span> <span class="token keyword">from</span> act_ru_identitylink <span class="token punctuation">;</span> <span class="token comment">##存放流程办理人的信息</span>


<span class="token comment"># 流程 的 历史</span>

<span class="token keyword">select</span> <span class="token operator">*</span> <span class="token keyword">from</span> act_hi_procinst <span class="token punctuation">;</span> <span class="token comment">#历史流程实例  流程实例的历史表</span>

<span class="token keyword">select</span> <span class="token operator">*</span> <span class="token keyword">from</span> act_hi_taskinst <span class="token punctuation">;</span>  <span class="token comment">#历史任务实例 任务历史表</span>

<span class="token keyword">select</span> <span class="token operator">*</span> <span class="token keyword">from</span> act_hi_actinst<span class="token punctuation">;</span>  <span class="token comment">#历史活动节点表 所有活动节点的历史表</span>

<span class="token keyword">select</span> <span class="token operator">*</span> <span class="token keyword">from</span> act_hi_varinst <span class="token punctuation">;</span>   <span class="token comment">#历史流程变量表</span>

<span class="token keyword">select</span> <span class="token operator">*</span> <span class="token keyword">from</span> act_hi_identitylink <span class="token punctuation">;</span>   <span class="token comment">##历史办理人表</span>

<span class="token keyword">select</span> <span class="token operator">*</span> <span class="token keyword">from</span> act_hi_comment <span class="token punctuation">;</span>   <span class="token comment">#批注表</span>

<span class="token keyword">select</span> <span class="token operator">*</span> <span class="token keyword">from</span> act_hi_attachment <span class="token punctuation">;</span><span class="token comment">#附件表</span>

 

 
<span class="token keyword">select</span> <span class="token operator">*</span> <span class="token keyword">from</span> act_hi_actinst  <span class="token comment">#所有活动节点的历史表</span>
</code></pre></div>`,3),p=[t];function c(l,k){return n(),a("div",null,p)}const m=s(o,[["render",c],["__file","index.html.vue"]]);export{m as default};
