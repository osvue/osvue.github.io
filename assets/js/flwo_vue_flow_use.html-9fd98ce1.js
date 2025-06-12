import{_ as s,o as a,c as t,a as p}from"./app-215c512d.js";const o={};function e(c,n){return a(),t("div",null,n[0]||(n[0]=[p(`<h3 id="依赖" tabindex="-1"><a class="header-anchor" href="#依赖" aria-hidden="true">#</a> 依赖</h3><div class="language-json" data-ext="json"><pre class="language-json"><code>
</code></pre></div><h3 id="使用" tabindex="-1"><a class="header-anchor" href="#使用" aria-hidden="true">#</a> 使用</h3><div class="language-vue" data-ext="vue"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>collision-warning-container<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
   

    <span class="token comment">&lt;!--事件工作流   移除原有的 workflow-card，添加左侧抽屉 --&gt;</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>el-drawer</span>
      <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>workflowDrawerVisible<span class="token punctuation">&quot;</span></span>
      <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>事件工作流<span class="token punctuation">&quot;</span></span>
      <span class="token attr-name">direction</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>ltr<span class="token punctuation">&quot;</span></span>
      <span class="token attr-name">size</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>600px<span class="token punctuation">&quot;</span></span>
      <span class="token attr-name">:show-close</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>true<span class="token punctuation">&quot;</span></span>
      <span class="token attr-name">:close-on-click-modal</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>false<span class="token punctuation">&quot;</span></span>
      <span class="token attr-name">:close-on-press-escape</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>true<span class="token punctuation">&quot;</span></span>
      <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>workflow-drawer<span class="token punctuation">&quot;</span></span>
    <span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span> <span class="token attr-name">#header</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>drawer-header<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span><span class="token punctuation">&gt;</span></span>事件工作流 - {{ selectedEvent?.name }}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>workflow-content<span class="token punctuation">&quot;</span></span> <span class="token attr-name">v-if</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>selectedEvent<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>WorkflowGraph</span> 
          <span class="token attr-name">:nodes</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>workflowNodes<span class="token punctuation">&quot;</span></span> 
          <span class="token attr-name">@node-click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>handleNodeClick<span class="token punctuation">&quot;</span></span>
        <span class="token punctuation">/&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>el-drawer</span><span class="token punctuation">&gt;</span></span> 
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> <span class="token punctuation">{</span> ref<span class="token punctuation">,</span> computed<span class="token punctuation">,</span> onMounted<span class="token punctuation">,</span> reactive <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> ElMessage<span class="token punctuation">,</span> ElMessageBox <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;element-plus&#39;</span>
<span class="token keyword">import</span> WorkflowGraph <span class="token keyword">from</span> <span class="token string">&#39;./WorkflowGraph.vue&#39;</span>
<span class="token keyword">import</span> ProximityTaskForm <span class="token keyword">from</span> <span class="token string">&#39;@/views/task-create/components/ProximityTaskForm.vue&#39;</span>
<span class="token keyword">import</span> AvoidanceTaskForm <span class="token keyword">from</span> <span class="token string">&#39;@/views/task-create/components/AvoidanceTaskForm.vue&#39;</span>
<span class="token keyword">import</span> OrbitTaskForm <span class="token keyword">from</span> <span class="token string">&#39;@/views/task-create/components/OrbitTaskForm.vue&#39;</span>
<span class="token keyword">import</span> QualityTaskForm <span class="token keyword">from</span> <span class="token string">&#39;@/views/task-create/components/QualityTaskForm.vue&#39;</span>
<span class="token keyword">import</span> TaskDetailDialog <span class="token keyword">from</span> <span class="token string">&#39;./components/TaskDetailDialog.vue&#39;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> Monitor<span class="token punctuation">,</span> Operation<span class="token punctuation">,</span> Aim<span class="token punctuation">,</span> DataAnalysis <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@element-plus/icons-vue&#39;</span>
  
<span class="token comment">// 模拟数据 - 实际应用中应该从API获取</span>
<span class="token keyword">const</span> warningEvents <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token punctuation">[</span>
  <span class="token punctuation">{</span>
    <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token string">&#39;20230001&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;GGD器A与@@@碎片接近事件&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">createTime</span><span class="token operator">:</span> <span class="token string">&#39;2023-05-15 09:30:24&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">status</span><span class="token operator">:</span> <span class="token string">&#39;进行中&#39;</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span>
    <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token string">&#39;20230002&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;GGD器B与GGD器C接近事件&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">createTime</span><span class="token operator">:</span> <span class="token string">&#39;2023-06-02 14:22:01&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">status</span><span class="token operator">:</span> <span class="token string">&#39;已完成&#39;</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span>
    <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token string">&#39;20230003&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;GGD器D与@@@碎片接近事件&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">createTime</span><span class="token operator">:</span> <span class="token string">&#39;2023-06-10 08:15:40&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">status</span><span class="token operator">:</span> <span class="token string">&#39;已取消&#39;</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">]</span><span class="token punctuation">)</span>
    
<span class="token comment">// 工作流节点定义</span>
<span class="token keyword">const</span> workflowNodes <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span>

<span class="token comment">// 模拟事件关联的任务数据</span>
<span class="token keyword">const</span> mockEventTasks <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token string-property property">&#39;20230001&#39;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">tasks</span><span class="token operator">:</span> <span class="token punctuation">[</span>
  <span class="token punctuation">{</span>
    <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
    <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">&#39;交会风险分析&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">&#39;PROXIMITY_ANALYSIS&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">status</span><span class="token operator">:</span> <span class="token string">&#39;completed&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">executionCount</span><span class="token operator">:</span> <span class="token number">3</span><span class="token punctuation">,</span>
    <span class="token literal-property property">executions</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token string">&#39;T001&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">startTime</span><span class="token operator">:</span> <span class="token string">&#39;2023-05-15 10:00:00&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">endTime</span><span class="token operator">:</span> <span class="token string">&#39;2023-05-15 10:30:00&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">status</span><span class="token operator">:</span> <span class="token string">&#39;已完成&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">summary</span><span class="token operator">:</span> <span class="token string">&#39;完成风险预测，预测交会时间2023-05-18 14:25:18，最小距离1.2km&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">executor</span><span class="token operator">:</span> <span class="token string">&#39;系统&#39;</span><span class="token punctuation">,</span>
            <span class="token literal-property property">detailResult</span><span class="token operator">:</span> <span class="token punctuation">{</span>
              <span class="token literal-property property">predictionTime</span><span class="token operator">:</span> <span class="token string">&#39;2023-05-18 14:25:18 UTC&#39;</span><span class="token punctuation">,</span>
              <span class="token literal-property property">minDistance</span><span class="token operator">:</span> <span class="token string">&#39;1.2 km&#39;</span><span class="token punctuation">,</span>
              <span class="token literal-property property">collisionProbability</span><span class="token operator">:</span> <span class="token string">&#39;0.002%&#39;</span><span class="token punctuation">,</span>
              <span class="token literal-property property">relativeVelocity</span><span class="token operator">:</span> <span class="token string">&#39;7.8 km/s&#39;</span><span class="token punctuation">,</span>
              <span class="token literal-property property">analysisData</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                <span class="token literal-property property">targetA</span><span class="token operator">:</span> <span class="token string">&#39;GGD器A&#39;</span><span class="token punctuation">,</span>
                <span class="token literal-property property">targetB</span><span class="token operator">:</span> <span class="token string">&#39;@@@碎片B&#39;</span><span class="token punctuation">,</span>
                <span class="token literal-property property">orbitParameters</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                  <span class="token literal-property property">semiMajorAxis</span><span class="token operator">:</span> <span class="token string">&#39;6878.1 km&#39;</span><span class="token punctuation">,</span>
                  <span class="token literal-property property">eccentricity</span><span class="token operator">:</span> <span class="token string">&#39;0.0012&#39;</span><span class="token punctuation">,</span>
                  <span class="token literal-property property">inclination</span><span class="token operator">:</span> <span class="token string">&#39;51.6°&#39;</span>
                <span class="token punctuation">}</span>
              <span class="token punctuation">}</span>
            <span class="token punctuation">}</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token string">&#39;T002&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">startTime</span><span class="token operator">:</span> <span class="token string">&#39;2023-05-16 09:00:00&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">endTime</span><span class="token operator">:</span> <span class="token string">&#39;2023-05-16 09:25:00&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">status</span><span class="token operator">:</span> <span class="token string">&#39;已完成&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">summary</span><span class="token operator">:</span> <span class="token string">&#39;更新风险预测，预测交会时间2023-05-18 14:26:05，最小距离0.9km&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">executor</span><span class="token operator">:</span> <span class="token string">&#39;系统&#39;</span><span class="token punctuation">,</span>
            <span class="token literal-property property">detailResult</span><span class="token operator">:</span> <span class="token punctuation">{</span>
              <span class="token literal-property property">predictionTime</span><span class="token operator">:</span> <span class="token string">&#39;2023-05-18 14:26:05 UTC&#39;</span><span class="token punctuation">,</span>
              <span class="token literal-property property">minDistance</span><span class="token operator">:</span> <span class="token string">&#39;0.9 km&#39;</span><span class="token punctuation">,</span>
              <span class="token literal-property property">collisionProbability</span><span class="token operator">:</span> <span class="token string">&#39;0.008%&#39;</span><span class="token punctuation">,</span>
              <span class="token literal-property property">relativeVelocity</span><span class="token operator">:</span> <span class="token string">&#39;7.8 km/s&#39;</span><span class="token punctuation">,</span>
              <span class="token literal-property property">analysisData</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                <span class="token literal-property property">targetA</span><span class="token operator">:</span> <span class="token string">&#39;GGD器A&#39;</span><span class="token punctuation">,</span>
                <span class="token literal-property property">targetB</span><span class="token operator">:</span> <span class="token string">&#39;@@@碎片B&#39;</span><span class="token punctuation">,</span>
                <span class="token literal-property property">orbitParameters</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                  <span class="token literal-property property">semiMajorAxis</span><span class="token operator">:</span> <span class="token string">&#39;6878.0 km&#39;</span><span class="token punctuation">,</span>
                  <span class="token literal-property property">eccentricity</span><span class="token operator">:</span> <span class="token string">&#39;0.0013&#39;</span><span class="token punctuation">,</span>
                  <span class="token literal-property property">inclination</span><span class="token operator">:</span> <span class="token string">&#39;51.6°&#39;</span>
                <span class="token punctuation">}</span>
              <span class="token punctuation">}</span>
            <span class="token punctuation">}</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">]</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
        <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">&#39;规避策略生成&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">&#39;AVOIDANCE_CONTROL&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">status</span><span class="token operator">:</span> <span class="token string">&#39;in-progress&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">executionCount</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
        <span class="token literal-property property">executions</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token string">&#39;T003&#39;</span><span class="token punctuation">,</span>
            <span class="token literal-property property">startTime</span><span class="token operator">:</span> <span class="token string">&#39;2023-05-17 10:00:00&#39;</span><span class="token punctuation">,</span>
            <span class="token literal-property property">endTime</span><span class="token operator">:</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">,</span>
            <span class="token literal-property property">status</span><span class="token operator">:</span> <span class="token string">&#39;进行中&#39;</span><span class="token punctuation">,</span>
            <span class="token literal-property property">summary</span><span class="token operator">:</span> <span class="token string">&#39;正在生成规避策略方案&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">executor</span><span class="token operator">:</span> <span class="token string">&#39;系统&#39;</span><span class="token punctuation">,</span>
            <span class="token literal-property property">detailResult</span><span class="token operator">:</span> <span class="token punctuation">{</span>
              <span class="token literal-property property">currentProgress</span><span class="token operator">:</span> <span class="token string">&#39;75%&#39;</span><span class="token punctuation">,</span>
              <span class="token literal-property property">generatedStrategies</span><span class="token operator">:</span> <span class="token punctuation">[</span>
                <span class="token punctuation">{</span>
                  <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token string">&#39;S001&#39;</span><span class="token punctuation">,</span>
                  <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">&#39;GSS抬升&#39;</span><span class="token punctuation">,</span>
                  <span class="token literal-property property">executionTime</span><span class="token operator">:</span> <span class="token string">&#39;2023-05-17 20:00:00&#39;</span><span class="token punctuation">,</span>
                  <span class="token literal-property property">deltaV</span><span class="token operator">:</span> <span class="token string">&#39;0.5 m/s&#39;</span><span class="token punctuation">,</span>
                  <span class="token literal-property property">fuelConsumption</span><span class="token operator">:</span> <span class="token string">&#39;2.3 kg&#39;</span><span class="token punctuation">,</span>
                  <span class="token literal-property property">riskReduction</span><span class="token operator">:</span> <span class="token string">&#39;99.9%&#39;</span>
                <span class="token punctuation">}</span><span class="token punctuation">,</span>
                <span class="token punctuation">{</span>
                  <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token string">&#39;S002&#39;</span><span class="token punctuation">,</span>
                  <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">&#39;GSS下降&#39;</span><span class="token punctuation">,</span>
                  <span class="token literal-property property">executionTime</span><span class="token operator">:</span> <span class="token string">&#39;2023-05-17 22:00:00&#39;</span><span class="token punctuation">,</span>
                  <span class="token literal-property property">deltaV</span><span class="token operator">:</span> <span class="token string">&#39;0.3 m/s&#39;</span><span class="token punctuation">,</span>
                  <span class="token literal-property property">fuelConsumption</span><span class="token operator">:</span> <span class="token string">&#39;1.8 kg&#39;</span><span class="token punctuation">,</span>
                  <span class="token literal-property property">riskReduction</span><span class="token operator">:</span> <span class="token string">&#39;99.5%&#39;</span>
                <span class="token punctuation">}</span>
              <span class="token punctuation">]</span>
            <span class="token punctuation">}</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">]</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token number">3</span><span class="token punctuation">,</span>
        <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">&#39;GSS确定&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">&#39;ORBIT_DETERMINATION&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">status</span><span class="token operator">:</span> <span class="token string">&#39;pending&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">executionCount</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
        <span class="token literal-property property">executions</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span>
        <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token number">4</span><span class="token punctuation">,</span>
        <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">&#39;质量评估&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">&#39;ORBIT_QUALITY&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">status</span><span class="token operator">:</span> <span class="token string">&#39;pending&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">executionCount</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
        <span class="token literal-property property">executions</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">]</span>
  <span class="token punctuation">}</span> 
   
<span class="token punctuation">}</span>
 

<span class="token comment">// 处理节点点击</span>
<span class="token keyword">const</span> <span class="token function-variable function">handleNodeClick</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">nodeData</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;Node clicked:&#39;</span><span class="token punctuation">,</span> nodeData<span class="token punctuation">)</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>selectedEvent<span class="token punctuation">.</span>value<span class="token punctuation">)</span> <span class="token keyword">return</span>
  
  <span class="token keyword">const</span> eventTasks <span class="token operator">=</span> mockEventTasks<span class="token punctuation">[</span>selectedEvent<span class="token punctuation">.</span>value<span class="token punctuation">.</span>id<span class="token punctuation">]</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>eventTasks<span class="token punctuation">)</span> <span class="token keyword">return</span>
  
  <span class="token keyword">const</span> task <span class="token operator">=</span> eventTasks<span class="token punctuation">.</span>tasks<span class="token punctuation">.</span><span class="token function">find</span><span class="token punctuation">(</span><span class="token parameter">t</span> <span class="token operator">=&gt;</span> t<span class="token punctuation">.</span>id <span class="token operator">===</span> nodeData<span class="token punctuation">.</span>id<span class="token punctuation">)</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>task<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    selectedTask<span class="token punctuation">.</span>value <span class="token operator">=</span> <span class="token punctuation">{</span>
      <span class="token operator">...</span>task<span class="token punctuation">,</span>
      <span class="token literal-property property">title</span><span class="token operator">:</span> nodeData<span class="token punctuation">.</span>title <span class="token operator">||</span> task<span class="token punctuation">.</span>title<span class="token punctuation">,</span>
      <span class="token literal-property property">status</span><span class="token operator">:</span> nodeData<span class="token punctuation">.</span>status <span class="token operator">||</span> task<span class="token punctuation">.</span>status<span class="token punctuation">,</span>
      <span class="token literal-property property">executionCount</span><span class="token operator">:</span> nodeData<span class="token punctuation">.</span>executionCount <span class="token operator">||</span> task<span class="token punctuation">.</span>executionCount<span class="token punctuation">,</span>
      <span class="token literal-property property">executions</span><span class="token operator">:</span> nodeData<span class="token punctuation">.</span>executions <span class="token operator">||</span> task<span class="token punctuation">.</span>executions
    <span class="token punctuation">}</span>
    <span class="token comment">// 使用新的打开方式</span>
    taskDetailDialogRef<span class="token punctuation">.</span>value<span class="token operator">?.</span><span class="token function">openDialog</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// 计算属性：当前任务表单组件</span>
<span class="token keyword">const</span> currentTaskFormComponent <span class="token operator">=</span> <span class="token function">computed</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> componentMap <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">proximity</span><span class="token operator">:</span> ProximityTaskForm<span class="token punctuation">,</span>
    <span class="token literal-property property">avoidance</span><span class="token operator">:</span> AvoidanceTaskForm<span class="token punctuation">,</span>
    <span class="token literal-property property">orbit</span><span class="token operator">:</span> OrbitTaskForm<span class="token punctuation">,</span>
    <span class="token literal-property property">quality</span><span class="token operator">:</span> QualityTaskForm
  <span class="token punctuation">}</span>
  <span class="token keyword">return</span> componentMap<span class="token punctuation">[</span>currentTaskType<span class="token punctuation">.</span>value<span class="token punctuation">]</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token comment">// 计算属性：当前任务表单引用</span>
<span class="token keyword">const</span> currentTaskFormRef <span class="token operator">=</span> <span class="token function">computed</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> refMap <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">proximity</span><span class="token operator">:</span> <span class="token string">&#39;proximityFormRef&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">avoidance</span><span class="token operator">:</span> <span class="token string">&#39;avoidanceFormRef&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">orbit</span><span class="token operator">:</span> <span class="token string">&#39;orbitFormRef&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">quality</span><span class="token operator">:</span> <span class="token string">&#39;qualityFormRef&#39;</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">return</span> refMap<span class="token punctuation">[</span>currentTaskType<span class="token punctuation">.</span>value<span class="token punctuation">]</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
 


</code></pre></div><h3 id="自定义节点" tabindex="-1"><a class="header-anchor" href="#自定义节点" aria-hidden="true">#</a> 自定义节点</h3><div class="language-vue" data-ext="vue"><pre class="language-vue"><code><span class="token comment">&lt;!--
工作流节点组件 (WorkflowNode.vue)
功能：自定义工作流节点组件，支持状态显示、执行次数统计、详情查看等功能

使用方式：
1. 基础使用：
   &lt;WorkflowNode
     :data=&quot;nodeData&quot;
     :selected=&quot;false&quot;
     @click=&quot;handleClick&quot;
     @view-details=&quot;handleViewDetails&quot;
   /&gt;

2. 节点数据结构：
   {
     id: string | number,      // 节点唯一标识
     label: string,            // 节点标签
     status: string,           // 节点状态
     executionCount: number,   // 执行次数
     executions: Array         // 执行记录
   }

3. 状态类型：
   - completed: 已完成（绿色）
   - in-progress: 进行中（蓝色）
   - pending: 待执行（黄色）
   - failed: 失败（红色）

扩展方式：
1. 添加新的状态类型：
   - 在 getStatusType 和 getStatusText 中添加新的状态处理
   - 在样式类中添加对应的状态样式

2. 自定义节点内容：
   - 修改模板结构
   - 添加新的数据展示
   - 添加新的交互按钮

3. 自定义样式：
   - 修改 .workflow-node 相关样式
   - 添加新的状态样式类
   - 自定义动画效果

4. 添加新的交互功能：
   - 添加新的事件处理函数
   - 通过 emit 向父组件传递事件
--&gt;</span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span>
    <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>workflow-node<span class="token punctuation">&quot;</span></span>
    <span class="token attr-name">:class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>{
      &#39;node-completed&#39;: data.status === &#39;completed&#39;,
      &#39;node-in-progress&#39;: data.status === &#39;in-progress&#39;,
      &#39;node-pending&#39;: data.status === &#39;pending&#39;,
      &#39;node-failed&#39;: data.status === &#39;failed&#39;,
      &#39;node-selected&#39;: selected
    }<span class="token punctuation">&quot;</span></span>
    <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>$emit(&#39;click&#39;, $event)<span class="token punctuation">&quot;</span></span>
  <span class="token punctuation">&gt;</span></span>
    <span class="token comment">&lt;!-- 节点头部：标题和状态 --&gt;</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>node-header<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>node-title<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>{{ data.label }}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>el-tag</span>
        <span class="token attr-name">:type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>getStatusType(data.status)<span class="token punctuation">&quot;</span></span>
        <span class="token attr-name">size</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>small<span class="token punctuation">&quot;</span></span>
        <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>node-status-tag<span class="token punctuation">&quot;</span></span>
      <span class="token punctuation">&gt;</span></span>
        {{ getStatusText(data.status) }}
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>el-tag</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
    <span class="token comment">&lt;!-- 节点内容：执行次数和操作按钮 --&gt;</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>node-content<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>execution-count<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>el-icon</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Timer</span> <span class="token punctuation">/&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>el-icon</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span><span class="token punctuation">&gt;</span></span>执行次数: {{ data.executionCount }}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>node-actions<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>el-button</span>
          <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>primary<span class="token punctuation">&quot;</span></span>
          <span class="token attr-name">size</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>small<span class="token punctuation">&quot;</span></span>
          <span class="token attr-name">:icon</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>View<span class="token punctuation">&quot;</span></span>
          <span class="token attr-name">circle</span>
          <span class="token attr-name">@click.stop</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>handleViewDetails<span class="token punctuation">&quot;</span></span>
        <span class="token punctuation">/&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> <span class="token punctuation">{</span> Timer<span class="token punctuation">,</span> View <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@element-plus/icons-vue&#39;</span>

<span class="token comment">// 组件属性定义</span>
<span class="token keyword">const</span> props <span class="token operator">=</span> <span class="token function">defineProps</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">data</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">type</span><span class="token operator">:</span> Object<span class="token punctuation">,</span>
    <span class="token literal-property property">required</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token comment">// 数据结构验证</span>
    <span class="token function-variable function">validator</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token parameter">value</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> value<span class="token punctuation">.</span>id <span class="token operator">!==</span> <span class="token keyword">undefined</span> <span class="token operator">&amp;&amp;</span> 
             value<span class="token punctuation">.</span>label <span class="token operator">!==</span> <span class="token keyword">undefined</span> <span class="token operator">&amp;&amp;</span> 
             value<span class="token punctuation">.</span>status <span class="token operator">!==</span> <span class="token keyword">undefined</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">selected</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">type</span><span class="token operator">:</span> Boolean<span class="token punctuation">,</span>
    <span class="token keyword">default</span><span class="token operator">:</span> <span class="token boolean">false</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token comment">// 定义组件事件</span>
<span class="token keyword">const</span> emit <span class="token operator">=</span> <span class="token function">defineEmits</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string">&#39;click&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;view-details&#39;</span><span class="token punctuation">]</span><span class="token punctuation">)</span>

<span class="token doc-comment comment">/**
 * 处理查看详情按钮点击
 * 向父组件传递完整的节点数据
 */</span>
<span class="token keyword">const</span> <span class="token function-variable function">handleViewDetails</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token function">emit</span><span class="token punctuation">(</span><span class="token string">&#39;view-details&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">id</span><span class="token operator">:</span> props<span class="token punctuation">.</span>data<span class="token punctuation">.</span>id<span class="token punctuation">,</span>
    <span class="token literal-property property">title</span><span class="token operator">:</span> props<span class="token punctuation">.</span>data<span class="token punctuation">.</span>label<span class="token punctuation">,</span>
    <span class="token literal-property property">status</span><span class="token operator">:</span> props<span class="token punctuation">.</span>data<span class="token punctuation">.</span>status<span class="token punctuation">,</span>
    <span class="token literal-property property">executionCount</span><span class="token operator">:</span> props<span class="token punctuation">.</span>data<span class="token punctuation">.</span>executionCount<span class="token punctuation">,</span>
    <span class="token literal-property property">executions</span><span class="token operator">:</span> props<span class="token punctuation">.</span>data<span class="token punctuation">.</span>executions
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token doc-comment comment">/**
 * 获取状态对应的标签类型
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>string<span class="token punctuation">}</span></span> <span class="token parameter">status</span> - 节点状态
 * <span class="token keyword">@returns</span> <span class="token class-name"><span class="token punctuation">{</span>string<span class="token punctuation">}</span></span> Element Plus 标签类型
 * 
 * 扩展说明：
 * 1. 可以添加新的状态类型
 * 2. 可以自定义状态颜色
 * 3. 可以添加状态图标
 */</span>
<span class="token keyword">const</span> <span class="token function-variable function">getStatusType</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">status</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">switch</span> <span class="token punctuation">(</span>status<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">case</span> <span class="token string">&#39;completed&#39;</span><span class="token operator">:</span>
      <span class="token keyword">return</span> <span class="token string">&#39;success&#39;</span>  <span class="token comment">// 绿色</span>
    <span class="token keyword">case</span> <span class="token string">&#39;in-progress&#39;</span><span class="token operator">:</span>
      <span class="token keyword">return</span> <span class="token string">&#39;primary&#39;</span>  <span class="token comment">// 蓝色</span>
    <span class="token keyword">case</span> <span class="token string">&#39;pending&#39;</span><span class="token operator">:</span>
      <span class="token keyword">return</span> <span class="token string">&#39;info&#39;</span>     <span class="token comment">// 灰色</span>
    <span class="token keyword">case</span> <span class="token string">&#39;failed&#39;</span><span class="token operator">:</span>
      <span class="token keyword">return</span> <span class="token string">&#39;danger&#39;</span>   <span class="token comment">// 红色</span>
    <span class="token keyword">default</span><span class="token operator">:</span>
      <span class="token keyword">return</span> <span class="token string">&#39;info&#39;</span>     <span class="token comment">// 默认灰色</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token doc-comment comment">/**
 * 获取状态对应的文本
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>string<span class="token punctuation">}</span></span> <span class="token parameter">status</span> - 节点状态
 * <span class="token keyword">@returns</span> <span class="token class-name"><span class="token punctuation">{</span>string<span class="token punctuation">}</span></span> 状态文本
 * 
 * 扩展说明：
 * 1. 可以添加新的状态文本
 * 2. 可以支持国际化
 * 3. 可以添加状态描述
 */</span>
<span class="token keyword">const</span> <span class="token function-variable function">getStatusText</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">status</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">switch</span> <span class="token punctuation">(</span>status<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">case</span> <span class="token string">&#39;completed&#39;</span><span class="token operator">:</span>
      <span class="token keyword">return</span> <span class="token string">&#39;已完成&#39;</span>
    <span class="token keyword">case</span> <span class="token string">&#39;in-progress&#39;</span><span class="token operator">:</span>
      <span class="token keyword">return</span> <span class="token string">&#39;进行中&#39;</span>
    <span class="token keyword">case</span> <span class="token string">&#39;pending&#39;</span><span class="token operator">:</span>
      <span class="token keyword">return</span> <span class="token string">&#39;待执行&#39;</span>
    <span class="token keyword">case</span> <span class="token string">&#39;failed&#39;</span><span class="token operator">:</span>
      <span class="token keyword">return</span> <span class="token string">&#39;失败&#39;</span>
    <span class="token keyword">default</span><span class="token operator">:</span>
      <span class="token keyword">return</span> <span class="token string">&#39;未知&#39;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>scss<span class="token punctuation">&quot;</span></span> <span class="token attr-name">scoped</span><span class="token punctuation">&gt;</span></span><span class="token style"><span class="token language-css">
<span class="token comment">/* 节点容器样式 */</span>
<span class="token selector">.workflow-node</span> <span class="token punctuation">{</span>
  <span class="token property">width</span><span class="token punctuation">:</span> 200px<span class="token punctuation">;</span>  // 可以通过 props 自定义宽度
  <span class="token property">background</span><span class="token punctuation">:</span> white<span class="token punctuation">;</span>
  <span class="token property">border-radius</span><span class="token punctuation">:</span> 8px<span class="token punctuation">;</span>
  <span class="token property">padding</span><span class="token punctuation">:</span> 12px<span class="token punctuation">;</span>
  <span class="token property">box-shadow</span><span class="token punctuation">:</span> 0 2px 12px 0 <span class="token function">rgba</span><span class="token punctuation">(</span>0<span class="token punctuation">,</span> 0<span class="token punctuation">,</span> 0<span class="token punctuation">,</span> 0.1<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token property">cursor</span><span class="token punctuation">:</span> pointer<span class="token punctuation">;</span>
  <span class="token property">transition</span><span class="token punctuation">:</span> all 0.3s<span class="token punctuation">;</span>
  <span class="token property">border</span><span class="token punctuation">:</span> 2px solid transparent<span class="token punctuation">;</span>

  <span class="token comment">/* 悬停效果 */</span>
  <span class="token selector">&amp;:hover</span> <span class="token punctuation">{</span>
    <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">translateY</span><span class="token punctuation">(</span>-2px<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token property">box-shadow</span><span class="token punctuation">:</span> 0 4px 16px 0 <span class="token function">rgba</span><span class="token punctuation">(</span>0<span class="token punctuation">,</span> 0<span class="token punctuation">,</span> 0<span class="token punctuation">,</span> 0.15<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token comment">/* 选中状态 */</span>
  <span class="token selector">&amp;.node-selected</span> <span class="token punctuation">{</span>
    <span class="token property">border-color</span><span class="token punctuation">:</span> #409eff<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token comment">/* 完成状态 */</span>
  <span class="token selector">&amp;.node-completed</span> <span class="token punctuation">{</span>
    <span class="token property">border-left-color</span><span class="token punctuation">:</span> #67c23a<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token comment">/* 进行中状态 */</span>
  <span class="token selector">&amp;.node-in-progress</span> <span class="token punctuation">{</span>
    <span class="token property">border-left-color</span><span class="token punctuation">:</span> #409eff<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token comment">/* 待执行状态 */</span>
  <span class="token selector">&amp;.node-pending</span> <span class="token punctuation">{</span>
    <span class="token property">border-left-color</span><span class="token punctuation">:</span> #e6a23c<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token comment">/* 失败状态 */</span>
  <span class="token selector">&amp;.node-failed</span> <span class="token punctuation">{</span>
    <span class="token property">border-left-color</span><span class="token punctuation">:</span> #f56c6c<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">/* 节点头部样式 */</span>
<span class="token selector">.node-header</span> <span class="token punctuation">{</span>
  <span class="token property">display</span><span class="token punctuation">:</span> flex<span class="token punctuation">;</span>
  <span class="token property">justify-content</span><span class="token punctuation">:</span> space-between<span class="token punctuation">;</span>
  <span class="token property">align-items</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>
  <span class="token property">margin-bottom</span><span class="token punctuation">:</span> 12px<span class="token punctuation">;</span>

  <span class="token selector">.node-title</span> <span class="token punctuation">{</span>
    <span class="token property">font-weight</span><span class="token punctuation">:</span> 500<span class="token punctuation">;</span>
    <span class="token property">font-size</span><span class="token punctuation">:</span> 14px<span class="token punctuation">;</span>
    <span class="token property">color</span><span class="token punctuation">:</span> #303133<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token selector">.node-status-tag</span> <span class="token punctuation">{</span>
    <span class="token property">margin-left</span><span class="token punctuation">:</span> 8px<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">/* 节点内容样式 */</span>
<span class="token selector">.node-content</span> <span class="token punctuation">{</span>
  <span class="token property">display</span><span class="token punctuation">:</span> flex<span class="token punctuation">;</span>
  <span class="token property">justify-content</span><span class="token punctuation">:</span> space-between<span class="token punctuation">;</span>
  <span class="token property">align-items</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>

  <span class="token comment">/* 执行次数样式 */</span>
  <span class="token selector">.execution-count</span> <span class="token punctuation">{</span>
    <span class="token property">display</span><span class="token punctuation">:</span> flex<span class="token punctuation">;</span>
    <span class="token property">align-items</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>
    <span class="token property">gap</span><span class="token punctuation">:</span> 4px<span class="token punctuation">;</span>
    <span class="token property">color</span><span class="token punctuation">:</span> #606266<span class="token punctuation">;</span>
    <span class="token property">font-size</span><span class="token punctuation">:</span> 12px<span class="token punctuation">;</span>

    <span class="token selector">.el-icon</span> <span class="token punctuation">{</span>
      <span class="token property">font-size</span><span class="token punctuation">:</span> 14px<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>

  <span class="token comment">/* 操作按钮样式 */</span>
  <span class="token selector">.node-actions</span> <span class="token punctuation">{</span>
    <span class="token property">display</span><span class="token punctuation">:</span> flex<span class="token punctuation">;</span>
    <span class="token property">gap</span><span class="token punctuation">:</span> 8px<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">&gt;</span></span> 
</code></pre></div><h3 id="工作流程图组件" tabindex="-1"><a class="header-anchor" href="#工作流程图组件" aria-hidden="true">#</a> 工作流程图组件</h3><div class="language-vue" data-ext="vue"><pre class="language-vue"><code><span class="token comment">&lt;!--
工作流程图组件 (WorkflowGraph.vue)
功能：基于 vue-flow 实现的可交互工作流程图，支持节点拖拽、缩放、连线等功能

使用方式：
1. 基础使用：
   &lt;WorkflowGraph 
     :nodes=&quot;workflowNodes&quot; 
     @node-click=&quot;handleNodeClick&quot;
   /&gt;

2. 完整配置：
   &lt;WorkflowGraph 
     :nodes=&quot;workflowNodes&quot;
     :default-viewport=&quot;{ x: 0, y: 0, zoom: 1 }&quot;
     :min-zoom=&quot;0.2&quot;
     :max-zoom=&quot;4&quot;
     :snap-to-grid=&quot;true&quot;
     :snap-grid=&quot;[15, 15]&quot;
     @node-click=&quot;handleNodeClick&quot;
     @pane-click=&quot;onPaneClick&quot;
   /&gt;

Props 说明：
- nodes: Array&lt;WorkflowNode&gt; - 工作流节点数据
  WorkflowNode 结构：
  {
    id: string | number,      // 节点唯一标识
    title: string,            // 节点标题
    type: string,             // 节点类型（可选，用于自定义节点样式）
    status: string,           // 节点状态（completed/in-progress/pending/failed）
    executionCount: number,   // 执行次数
    executions: Array         // 执行记录
  }

Events 说明：
- node-click: (nodeData: WorkflowNode) =&gt; void - 节点点击事件
- pane-click: (event: MouseEvent) =&gt; void - 画布点击事件

扩展方式：
1. 自定义节点样式：
   - 修改 WorkflowNode.vue 中的样式
   - 添加新的节点类型和对应的样式类
   - 在 nodeProps.data.type 中指定节点类型

2. 自定义连线样式：
   - 修改 transformNodesToElements 中的连线配置
   - 添加新的连线类型和样式

3. 添加交互功能：
   - 在 template 中添加新的 vue-flow 事件监听
   - 实现对应的事件处理函数
   - 通过 emit 向父组件传递事件

4. 添加工具栏：
   - 在 Controls 组件中添加自定义按钮
   - 实现对应的操作功能

5. 自定义布局：
   - 修改 calculateNodePosition 函数
   - 实现新的布局算法
--&gt;</span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>workflow-container<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h3</span><span class="token punctuation">&gt;</span></span>工作流程图<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h3</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>workflow-diagram<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
      <span class="token comment">&lt;!-- 
        VueFlow 组件配置说明：
        v-model: 绑定图元素数据
        default-viewport: 默认视图位置和缩放
        min-zoom/max-zoom: 缩放限制
        snap-to-grid: 是否启用网格对齐
        snap-grid: 网格大小
      --&gt;</span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>VueFlow</span>
        <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>elements<span class="token punctuation">&quot;</span></span>
        <span class="token attr-name">:default-viewport</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>{ x: 0, y: 0, zoom: 1 }<span class="token punctuation">&quot;</span></span>
        <span class="token attr-name">:min-zoom</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>0.2<span class="token punctuation">&quot;</span></span>
        <span class="token attr-name">:max-zoom</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>4<span class="token punctuation">&quot;</span></span>
        <span class="token attr-name">:snap-to-grid</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>true<span class="token punctuation">&quot;</span></span>
        <span class="token attr-name">:snap-grid</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>[15, 15]<span class="token punctuation">&quot;</span></span>
        <span class="token attr-name">@node-click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>handleNodeClick<span class="token punctuation">&quot;</span></span>
        <span class="token attr-name">@pane-click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>onPaneClick<span class="token punctuation">&quot;</span></span>
        <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>workflow-flow<span class="token punctuation">&quot;</span></span>
      <span class="token punctuation">&gt;</span></span>
        <span class="token comment">&lt;!-- 自定义节点模板 --&gt;</span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span> <span class="token attr-name">#node-custom</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>nodeProps<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>WorkflowNode</span>
            <span class="token attr-name">:data</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>nodeProps.data<span class="token punctuation">&quot;</span></span>
            <span class="token attr-name">:selected</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>nodeProps.selected<span class="token punctuation">&quot;</span></span>
            <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>handleNodeClick(nodeProps)<span class="token punctuation">&quot;</span></span>
            <span class="token attr-name">@view-details</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>handleViewDetails<span class="token punctuation">&quot;</span></span>
          <span class="token punctuation">/&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>

        <span class="token comment">&lt;!-- 工具栏 --&gt;</span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Controls</span> <span class="token punctuation">/&gt;</span></span>
        <span class="token comment">&lt;!-- 小地图 --&gt;</span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>MiniMap</span> <span class="token punctuation">/&gt;</span></span>
        <span class="token comment">&lt;!-- 背景网格 --&gt;</span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Background</span> <span class="token attr-name">pattern-color</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>#aaa<span class="token punctuation">&quot;</span></span> <span class="token attr-name">gap</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>8<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>VueFlow</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> <span class="token punctuation">{</span> ref<span class="token punctuation">,</span> computed<span class="token punctuation">,</span> watch<span class="token punctuation">,</span> onMounted <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> VueFlow<span class="token punctuation">,</span> useVueFlow <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@vue-flow/core&#39;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> Background <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@vue-flow/background&#39;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> MiniMap <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@vue-flow/minimap&#39;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> Controls <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@vue-flow/controls&#39;</span>
<span class="token keyword">import</span> <span class="token string">&#39;@vue-flow/core/dist/style.css&#39;</span>
<span class="token keyword">import</span> <span class="token string">&#39;@vue-flow/core/dist/theme-default.css&#39;</span>
<span class="token keyword">import</span> <span class="token string">&#39;@vue-flow/minimap/dist/style.css&#39;</span>
<span class="token keyword">import</span> <span class="token string">&#39;@vue-flow/controls/dist/style.css&#39;</span>
<span class="token keyword">import</span> WorkflowNode <span class="token keyword">from</span> <span class="token string">&#39;./components/WorkflowNode.vue&#39;</span>

<span class="token comment">// 定义组件事件</span>
<span class="token keyword">const</span> emit <span class="token operator">=</span> <span class="token function">defineEmits</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string">&#39;node-click&#39;</span><span class="token punctuation">]</span><span class="token punctuation">)</span>

<span class="token comment">// 组件属性定义</span>
<span class="token keyword">const</span> props <span class="token operator">=</span> <span class="token function">defineProps</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">nodes</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">type</span><span class="token operator">:</span> Array<span class="token punctuation">,</span>
    <span class="token literal-property property">required</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token comment">// 节点数据结构验证</span>
    <span class="token function-variable function">validator</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token parameter">value</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> value<span class="token punctuation">.</span><span class="token function">every</span><span class="token punctuation">(</span><span class="token parameter">node</span> <span class="token operator">=&gt;</span> 
        node<span class="token punctuation">.</span>id <span class="token operator">!==</span> <span class="token keyword">undefined</span> <span class="token operator">&amp;&amp;</span> 
        node<span class="token punctuation">.</span>title <span class="token operator">!==</span> <span class="token keyword">undefined</span> <span class="token operator">&amp;&amp;</span>
        node<span class="token punctuation">.</span>status <span class="token operator">!==</span> <span class="token keyword">undefined</span>
      <span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token doc-comment comment">/**
 * 计算节点位置
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span> <span class="token parameter">index</span> - 节点索引
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span> <span class="token parameter">totalNodes</span> - 总节点数
 * <span class="token keyword">@returns</span> <span class="token class-name"><span class="token punctuation">{</span><span class="token punctuation">{</span>x<span class="token operator">:</span> number<span class="token punctuation">,</span> y<span class="token operator">:</span> number<span class="token punctuation">}</span><span class="token punctuation">}</span></span> 节点坐标
 * 
 * 扩展说明：
 * 1. 可以修改此函数实现不同的布局算法
 * 2. 可以添加参数支持自定义布局参数
 * 3. 可以实现自动布局算法（如力导向布局）
 */</span>
<span class="token keyword">const</span> <span class="token function-variable function">calculateNodePosition</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">index<span class="token punctuation">,</span> totalNodes</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> padding <span class="token operator">=</span> <span class="token number">100</span>
  <span class="token keyword">const</span> nodeWidth <span class="token operator">=</span> <span class="token number">200</span>
  <span class="token keyword">const</span> nodeHeight <span class="token operator">=</span> <span class="token number">100</span>
  <span class="token keyword">const</span> horizontalSpacing <span class="token operator">=</span> <span class="token number">300</span>
  <span class="token keyword">const</span> verticalSpacing <span class="token operator">=</span> <span class="token number">150</span>

  <span class="token comment">// 计算节点位置</span>
  <span class="token keyword">const</span> x <span class="token operator">=</span> padding <span class="token operator">+</span> <span class="token punctuation">(</span>index <span class="token operator">*</span> horizontalSpacing<span class="token punctuation">)</span>
  <span class="token keyword">const</span> y <span class="token operator">=</span> padding <span class="token operator">+</span> <span class="token punctuation">(</span>Math<span class="token punctuation">.</span><span class="token function">floor</span><span class="token punctuation">(</span>index <span class="token operator">/</span> <span class="token number">2</span><span class="token punctuation">)</span> <span class="token operator">*</span> verticalSpacing<span class="token punctuation">)</span>

  <span class="token keyword">return</span> <span class="token punctuation">{</span> x<span class="token punctuation">,</span> y <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token doc-comment comment">/**
 * 转换节点数据为 vue-flow 格式
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>Array<span class="token punctuation">}</span></span> <span class="token parameter">nodes</span> - 原始节点数据
 * <span class="token keyword">@returns</span> <span class="token class-name"><span class="token punctuation">{</span>Array<span class="token punctuation">}</span></span> vue-flow 元素数组
 * 
 * 扩展说明：
 * 1. 可以添加更多节点类型
 * 2. 可以自定义连线样式
 * 3. 可以实现节点分组
 * 4. 可以添加节点标签
 */</span>
<span class="token keyword">const</span> <span class="token function-variable function">transformNodesToElements</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">nodes</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>nodes <span class="token operator">||</span> nodes<span class="token punctuation">.</span>length <span class="token operator">===</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>

  <span class="token keyword">const</span> elements <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
  <span class="token keyword">const</span> totalNodes <span class="token operator">=</span> nodes<span class="token punctuation">.</span>length

  <span class="token comment">// 添加节点</span>
  nodes<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">node<span class="token punctuation">,</span> index</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> position <span class="token operator">=</span> <span class="token function">calculateNodePosition</span><span class="token punctuation">(</span>index<span class="token punctuation">,</span> totalNodes<span class="token punctuation">)</span>
    
    elements<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      <span class="token literal-property property">id</span><span class="token operator">:</span> node<span class="token punctuation">.</span>id<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
      <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">&#39;custom&#39;</span><span class="token punctuation">,</span> <span class="token comment">// 使用自定义节点类型</span>
      position<span class="token punctuation">,</span>
      <span class="token literal-property property">data</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token operator">...</span>node<span class="token punctuation">,</span>
        <span class="token literal-property property">label</span><span class="token operator">:</span> node<span class="token punctuation">.</span>title<span class="token punctuation">,</span>
        <span class="token literal-property property">status</span><span class="token operator">:</span> node<span class="token punctuation">.</span>status<span class="token punctuation">,</span>
        <span class="token literal-property property">executionCount</span><span class="token operator">:</span> node<span class="token punctuation">.</span>executionCount
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>

    <span class="token comment">// 添加连接线</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>index <span class="token operator">&lt;</span> totalNodes <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      elements<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
        <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">edge-</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>node<span class="token punctuation">.</span>id<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">-</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>nodes<span class="token punctuation">[</span>index <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">.</span>id<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">,</span>
        <span class="token literal-property property">source</span><span class="token operator">:</span> node<span class="token punctuation">.</span>id<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
        <span class="token literal-property property">target</span><span class="token operator">:</span> nodes<span class="token punctuation">[</span>index <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">.</span>id<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
        <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">&#39;smoothstep&#39;</span><span class="token punctuation">,</span> <span class="token comment">// 平滑的连线样式</span>
        <span class="token literal-property property">animated</span><span class="token operator">:</span> node<span class="token punctuation">.</span>status <span class="token operator">===</span> <span class="token string">&#39;in-progress&#39;</span><span class="token punctuation">,</span> <span class="token comment">// 进行中的节点连线动画</span>
        <span class="token literal-property property">style</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token literal-property property">stroke</span><span class="token operator">:</span> <span class="token function">getConnectionColor</span><span class="token punctuation">(</span>node<span class="token punctuation">.</span>status<span class="token punctuation">,</span> nodes<span class="token punctuation">[</span>index <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">.</span>status<span class="token punctuation">)</span> <span class="token punctuation">}</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>

  <span class="token keyword">return</span> elements
<span class="token punctuation">}</span>

<span class="token doc-comment comment">/**
 * 获取连接线颜色
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>string<span class="token punctuation">}</span></span> <span class="token parameter">fromStatus</span> - 起始节点状态
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>string<span class="token punctuation">}</span></span> <span class="token parameter">toStatus</span> - 目标节点状态
 * <span class="token keyword">@returns</span> <span class="token class-name"><span class="token punctuation">{</span>string<span class="token punctuation">}</span></span> 颜色代码
 * 
 * 扩展说明：
 * 1. 可以添加更多状态对应的颜色
 * 2. 可以实现渐变色
 * 3. 可以添加自定义状态
 */</span>
<span class="token keyword">const</span> <span class="token function-variable function">getConnectionColor</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">fromStatus<span class="token punctuation">,</span> toStatus</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>fromStatus <span class="token operator">===</span> <span class="token string">&#39;completed&#39;</span> <span class="token operator">&amp;&amp;</span> toStatus <span class="token operator">===</span> <span class="token string">&#39;completed&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token string">&#39;#67c23a&#39;</span> <span class="token comment">// 完成状态 - 绿色</span>
  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>fromStatus <span class="token operator">===</span> <span class="token string">&#39;completed&#39;</span> <span class="token operator">&amp;&amp;</span> toStatus <span class="token operator">===</span> <span class="token string">&#39;in-progress&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token string">&#39;#67c23a&#39;</span> <span class="token comment">// 完成到进行中 - 绿色</span>
  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>fromStatus <span class="token operator">===</span> <span class="token string">&#39;in-progress&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token string">&#39;#409eff&#39;</span> <span class="token comment">// 进行中 - 蓝色</span>
  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token string">&#39;#909399&#39;</span> <span class="token comment">// 其他状态 - 灰色</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token doc-comment comment">/**
 * 处理节点点击事件
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>Object<span class="token punctuation">}</span></span> <span class="token parameter">event</span> - 点击事件对象
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>Object<span class="token punctuation">}</span></span> <span class="token parameter">node</span> - 节点数据
 */</span>
<span class="token keyword">const</span> <span class="token function-variable function">handleNodeClick</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">event<span class="token punctuation">,</span> node</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>node <span class="token operator">&amp;&amp;</span> node<span class="token punctuation">.</span>data<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">emit</span><span class="token punctuation">(</span><span class="token string">&#39;node-click&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">id</span><span class="token operator">:</span> node<span class="token punctuation">.</span>data<span class="token punctuation">.</span>id<span class="token punctuation">,</span>
      <span class="token literal-property property">title</span><span class="token operator">:</span> node<span class="token punctuation">.</span>data<span class="token punctuation">.</span>label<span class="token punctuation">,</span>
      <span class="token literal-property property">status</span><span class="token operator">:</span> node<span class="token punctuation">.</span>data<span class="token punctuation">.</span>status<span class="token punctuation">,</span>
      <span class="token literal-property property">executionCount</span><span class="token operator">:</span> node<span class="token punctuation">.</span>data<span class="token punctuation">.</span>executionCount<span class="token punctuation">,</span>
      <span class="token literal-property property">executions</span><span class="token operator">:</span> node<span class="token punctuation">.</span>data<span class="token punctuation">.</span>executions
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token doc-comment comment">/**
 * 处理画布点击事件
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>MouseEvent<span class="token punctuation">}</span></span> <span class="token parameter">event</span> - 点击事件对象
 */</span>
<span class="token keyword">const</span> <span class="token function-variable function">onPaneClick</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token comment">// 可以在这里处理画布点击事件</span>
  <span class="token comment">// 例如：取消节点选中状态</span>
<span class="token punctuation">}</span>

<span class="token doc-comment comment">/**
 * 处理节点详情查看
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>Object<span class="token punctuation">}</span></span> <span class="token parameter">nodeData</span> - 节点数据
 */</span>
<span class="token keyword">const</span> <span class="token function-variable function">handleViewDetails</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">nodeData</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token function">emit</span><span class="token punctuation">(</span><span class="token string">&#39;node-click&#39;</span><span class="token punctuation">,</span> nodeData<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token comment">// 监听节点数据变化，自动更新图元素</span>
<span class="token keyword">const</span> elements <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
<span class="token function">watch</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> props<span class="token punctuation">.</span>nodes<span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">newNodes</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  elements<span class="token punctuation">.</span>value <span class="token operator">=</span> <span class="token function">transformNodesToElements</span><span class="token punctuation">(</span>newNodes<span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token literal-property property">immediate</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token literal-property property">deep</span><span class="token operator">:</span> <span class="token boolean">true</span> <span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token comment">// 组件挂载后自动适应视图</span>
<span class="token function">onMounted</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token punctuation">{</span> fitView <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">useVueFlow</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token function">fitView</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">padding</span><span class="token operator">:</span> <span class="token number">0.2</span> <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">100</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>scss<span class="token punctuation">&quot;</span></span> <span class="token attr-name">scoped</span><span class="token punctuation">&gt;</span></span><span class="token style"><span class="token language-css">
<span class="token comment">/* 工作流容器样式 */</span>
<span class="token selector">.workflow-container</span> <span class="token punctuation">{</span>
  <span class="token property">margin-top</span><span class="token punctuation">:</span> 10px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">/* 工作流图表容器 */</span>
<span class="token selector">.workflow-diagram</span> <span class="token punctuation">{</span>
  <span class="token property">height</span><span class="token punctuation">:</span> 600px<span class="token punctuation">;</span> // 可以通过 props 自定义高度
  <span class="token property">margin-top</span><span class="token punctuation">:</span> 20px<span class="token punctuation">;</span>
  <span class="token property">background</span><span class="token punctuation">:</span> #f5f7fa<span class="token punctuation">;</span>
  <span class="token property">border-radius</span><span class="token punctuation">:</span> 4px<span class="token punctuation">;</span>
  <span class="token property">overflow</span><span class="token punctuation">:</span> hidden<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">/* 流程图样式 */</span>
<span class="token selector">.workflow-flow</span> <span class="token punctuation">{</span>
  <span class="token property">width</span><span class="token punctuation">:</span> 100%<span class="token punctuation">;</span>
  <span class="token property">height</span><span class="token punctuation">:</span> 100%<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">/* 自定义节点样式 */</span>
<span class="token selector">:deep(.vue-flow__node)</span> <span class="token punctuation">{</span>
  <span class="token property">padding</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
  <span class="token property">border-radius</span><span class="token punctuation">:</span> 8px<span class="token punctuation">;</span>
  <span class="token property">width</span><span class="token punctuation">:</span> auto<span class="token punctuation">;</span>
  <span class="token property">font-size</span><span class="token punctuation">:</span> 12px<span class="token punctuation">;</span>
  <span class="token property">text-align</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>
  <span class="token property">border</span><span class="token punctuation">:</span> none<span class="token punctuation">;</span>
  <span class="token property">box-shadow</span><span class="token punctuation">:</span> 0 2px 12px 0 <span class="token function">rgba</span><span class="token punctuation">(</span>0<span class="token punctuation">,</span> 0<span class="token punctuation">,</span> 0<span class="token punctuation">,</span> 0.1<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">/* 连线动画样式 */</span>
<span class="token selector">:deep(.vue-flow__edge)</span> <span class="token punctuation">{</span>
  <span class="token selector">&amp;.animated</span> <span class="token punctuation">{</span>
    <span class="token property">stroke-dasharray</span><span class="token punctuation">:</span> 5<span class="token punctuation">;</span>
    <span class="token property">animation</span><span class="token punctuation">:</span> dashdraw 0.5s linear infinite<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">/* 工具栏样式 */</span>
<span class="token selector">:deep(.vue-flow__controls)</span> <span class="token punctuation">{</span>
  <span class="token property">box-shadow</span><span class="token punctuation">:</span> 0 2px 12px 0 <span class="token function">rgba</span><span class="token punctuation">(</span>0<span class="token punctuation">,</span> 0<span class="token punctuation">,</span> 0<span class="token punctuation">,</span> 0.1<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token property">border-radius</span><span class="token punctuation">:</span> 4px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">/* 小地图样式 */</span>
<span class="token selector">:deep(.vue-flow__minimap)</span> <span class="token punctuation">{</span>
  <span class="token property">border-radius</span><span class="token punctuation">:</span> 4px<span class="token punctuation">;</span>
  <span class="token property">overflow</span><span class="token punctuation">:</span> hidden<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">/* 连线动画关键帧 */</span>
<span class="token atrule"><span class="token rule">@keyframes</span> dashdraw</span> <span class="token punctuation">{</span>
  <span class="token selector">from</span> <span class="token punctuation">{</span>
    <span class="token property">stroke-dashoffset</span><span class="token punctuation">:</span> 10<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">&gt;</span></span>

</code></pre></div>`,8)]))}const u=s(o,[["render",e],["__file","flwo_vue_flow_use.html.vue"]]);export{u as default};
