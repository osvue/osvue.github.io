import{_ as a,o as p,c as t,a as s,f as o}from"./app-215c512d.js";const e={};function c(l,n){return p(),t("div",null,[n[0]||(n[0]=s(`<ul><li><strong>详细说明工作流图中节点连接、事件处理和数据流转的实现逻辑：</strong></li></ul><ol><li>节点连接处理逻辑：</li></ol><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 在 WorkflowGraph.vue 中的 transformNodesToElements 函数中实现</span>
<span class="token keyword">const</span> <span class="token function-variable function">transformNodesToElements</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">nodes</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token comment">// ... 节点处理代码 ...</span>

  <span class="token comment">// 添加连接线</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>index <span class="token operator">&lt;</span> totalNodes <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    elements<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">edge-</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>node<span class="token punctuation">.</span>id<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">-</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>nodes<span class="token punctuation">[</span>index <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">.</span>id<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">,</span>
      <span class="token literal-property property">source</span><span class="token operator">:</span> node<span class="token punctuation">.</span>id<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>      <span class="token comment">// 源节点ID</span>
      <span class="token literal-property property">target</span><span class="token operator">:</span> nodes<span class="token punctuation">[</span>index <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">.</span>id<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token comment">// 目标节点ID</span>
      <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">&#39;smoothstep&#39;</span><span class="token punctuation">,</span>              <span class="token comment">// 平滑的连线样式</span>
      <span class="token literal-property property">animated</span><span class="token operator">:</span> node<span class="token punctuation">.</span>status <span class="token operator">===</span> <span class="token string">&#39;in-progress&#39;</span><span class="token punctuation">,</span> <span class="token comment">// 进行中的节点连线动画</span>
      <span class="token literal-property property">style</span><span class="token operator">:</span> <span class="token punctuation">{</span> 
        <span class="token literal-property property">stroke</span><span class="token operator">:</span> <span class="token function">getConnectionColor</span><span class="token punctuation">(</span>node<span class="token punctuation">.</span>status<span class="token punctuation">,</span> nodes<span class="token punctuation">[</span>index <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">.</span>status<span class="token punctuation">)</span> 
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// 连接线颜色处理</span>
<span class="token keyword">const</span> <span class="token function-variable function">getConnectionColor</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">fromStatus<span class="token punctuation">,</span> toStatus</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>fromStatus <span class="token operator">===</span> <span class="token string">&#39;completed&#39;</span> <span class="token operator">&amp;&amp;</span> toStatus <span class="token operator">===</span> <span class="token string">&#39;completed&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token string">&#39;#67c23a&#39;</span>  <span class="token comment">// 完成状态 - 绿色</span>
  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>fromStatus <span class="token operator">===</span> <span class="token string">&#39;completed&#39;</span> <span class="token operator">&amp;&amp;</span> toStatus <span class="token operator">===</span> <span class="token string">&#39;in-progress&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token string">&#39;#67c23a&#39;</span>  <span class="token comment">// 完成到进行中 - 绿色</span>
  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>fromStatus <span class="token operator">===</span> <span class="token string">&#39;in-progress&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token string">&#39;#409eff&#39;</span>  <span class="token comment">// 进行中 - 蓝色</span>
  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token string">&#39;#909399&#39;</span>  <span class="token comment">// 其他状态 - 灰色</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><ol start="2"><li>事件处理实现：</li></ol><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 在 WorkflowGraph.vue 中</span>
<span class="token comment">// 1. 节点点击事件</span>
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

<span class="token comment">// 2. 画布点击事件</span>
<span class="token keyword">const</span> <span class="token function-variable function">onPaneClick</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token comment">// 处理画布点击，如取消节点选中状态</span>
<span class="token punctuation">}</span>

<span class="token comment">// 3. 节点详情查看事件</span>
<span class="token keyword">const</span> <span class="token function-variable function">handleViewDetails</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">nodeData</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token function">emit</span><span class="token punctuation">(</span><span class="token string">&#39;node-click&#39;</span><span class="token punctuation">,</span> nodeData<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token comment">// 在 WorkflowNode.vue 中</span>
<span class="token comment">// 4. 节点详情按钮点击事件</span>
<span class="token keyword">const</span> <span class="token function-variable function">handleViewDetails</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token function">emit</span><span class="token punctuation">(</span><span class="token string">&#39;view-details&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">id</span><span class="token operator">:</span> props<span class="token punctuation">.</span>data<span class="token punctuation">.</span>id<span class="token punctuation">,</span>
    <span class="token literal-property property">title</span><span class="token operator">:</span> props<span class="token punctuation">.</span>data<span class="token punctuation">.</span>label<span class="token punctuation">,</span>
    <span class="token literal-property property">status</span><span class="token operator">:</span> props<span class="token punctuation">.</span>data<span class="token punctuation">.</span>status<span class="token punctuation">,</span>
    <span class="token literal-property property">executionCount</span><span class="token operator">:</span> props<span class="token punctuation">.</span>data<span class="token punctuation">.</span>executionCount<span class="token punctuation">,</span>
    <span class="token literal-property property">executions</span><span class="token operator">:</span> props<span class="token punctuation">.</span>data<span class="token punctuation">.</span>executions
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre></div><ol start="3"><li>数据流转说明：</li></ol><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 1. 数据流向：父组件(index.vue) -&gt; 工作流图(WorkflowGraph.vue) -&gt; 节点(WorkflowNode.vue)</span>
<span class="token comment">// 在 index.vue 中：</span>
<span class="token keyword">const</span> workflowNodes <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> <span class="token function-variable function">selectEvent</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">row</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  selectedEvent<span class="token punctuation">.</span>value <span class="token operator">=</span> row
  <span class="token comment">// 根据事件ID获取关联的任务数据</span>
  <span class="token keyword">const</span> eventTasks <span class="token operator">=</span> mockEventTasks<span class="token punctuation">[</span>row<span class="token punctuation">.</span>id<span class="token punctuation">]</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>eventTasks<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    workflowNodes<span class="token punctuation">.</span>value <span class="token operator">=</span> eventTasks<span class="token punctuation">.</span>tasks<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token parameter">task</span> <span class="token operator">=&gt;</span> <span class="token punctuation">(</span><span class="token punctuation">{</span>
      <span class="token literal-property property">id</span><span class="token operator">:</span> task<span class="token punctuation">.</span>id<span class="token punctuation">,</span>
      <span class="token literal-property property">title</span><span class="token operator">:</span> task<span class="token punctuation">.</span>title<span class="token punctuation">,</span>
      <span class="token literal-property property">type</span><span class="token operator">:</span> task<span class="token punctuation">.</span>type<span class="token punctuation">,</span>
      <span class="token literal-property property">status</span><span class="token operator">:</span> task<span class="token punctuation">.</span>status<span class="token punctuation">,</span>
      <span class="token literal-property property">executionCount</span><span class="token operator">:</span> task<span class="token punctuation">.</span>executionCount<span class="token punctuation">,</span>
      <span class="token literal-property property">executions</span><span class="token operator">:</span> task<span class="token punctuation">.</span>executions
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// 2. 数据监听和更新</span>
<span class="token comment">// 在 WorkflowGraph.vue 中：</span>
<span class="token keyword">const</span> elements <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
<span class="token function">watch</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> props<span class="token punctuation">.</span>nodes<span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">newNodes</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  elements<span class="token punctuation">.</span>value <span class="token operator">=</span> <span class="token function">transformNodesToElements</span><span class="token punctuation">(</span>newNodes<span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token literal-property property">immediate</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token literal-property property">deep</span><span class="token operator">:</span> <span class="token boolean">true</span> <span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token comment">// 3. 事件数据传递</span>
<span class="token comment">// WorkflowNode.vue -&gt; WorkflowGraph.vue -&gt; index.vue</span>
<span class="token comment">// 节点点击时：</span>
WorkflowNode<span class="token punctuation">.</span>vue<span class="token operator">:</span> <span class="token function">emit</span><span class="token punctuation">(</span><span class="token string">&#39;view-details&#39;</span><span class="token punctuation">,</span> nodeData<span class="token punctuation">)</span>
  <span class="token operator">-</span><span class="token operator">&gt;</span> WorkflowGraph<span class="token punctuation">.</span>vue<span class="token operator">:</span> <span class="token function">handleViewDetails</span><span class="token punctuation">(</span>nodeData<span class="token punctuation">)</span> <span class="token operator">-</span><span class="token operator">&gt;</span> <span class="token function">emit</span><span class="token punctuation">(</span><span class="token string">&#39;node-click&#39;</span><span class="token punctuation">,</span> nodeData<span class="token punctuation">)</span>
    <span class="token operator">-</span><span class="token operator">&gt;</span> index<span class="token punctuation">.</span>vue<span class="token operator">:</span> <span class="token function">handleNodeClick</span><span class="token punctuation">(</span>nodeData<span class="token punctuation">)</span> <span class="token operator">-</span><span class="token operator">&gt;</span> <span class="token function">showTaskDetail</span><span class="token punctuation">(</span>nodeData<span class="token punctuation">)</span>
</code></pre></div><ol start="4"><li>关键数据结构和状态：</li></ol><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 1. 节点数据结构</span>
<span class="token punctuation">{</span>
  <span class="token literal-property property">id</span><span class="token operator">:</span> string <span class="token operator">|</span> number<span class="token punctuation">,</span>      <span class="token comment">// 节点唯一标识</span>
  <span class="token literal-property property">title</span><span class="token operator">:</span> string<span class="token punctuation">,</span>            <span class="token comment">// 节点标题</span>
  <span class="token literal-property property">type</span><span class="token operator">:</span> string<span class="token punctuation">,</span>             <span class="token comment">// 节点类型</span>
  <span class="token literal-property property">status</span><span class="token operator">:</span> string<span class="token punctuation">,</span>           <span class="token comment">// 节点状态</span>
  <span class="token literal-property property">executionCount</span><span class="token operator">:</span> number<span class="token punctuation">,</span>   <span class="token comment">// 执行次数</span>
  <span class="token literal-property property">executions</span><span class="token operator">:</span> Array         <span class="token comment">// 执行记录</span>
<span class="token punctuation">}</span>

<span class="token comment">// 2. 连接线数据结构</span>
<span class="token punctuation">{</span>
  <span class="token literal-property property">id</span><span class="token operator">:</span> string<span class="token punctuation">,</span>               <span class="token comment">// 连接线ID</span>
  <span class="token literal-property property">source</span><span class="token operator">:</span> string<span class="token punctuation">,</span>           <span class="token comment">// 源节点ID</span>
  <span class="token literal-property property">target</span><span class="token operator">:</span> string<span class="token punctuation">,</span>           <span class="token comment">// 目标节点ID</span>
  <span class="token literal-property property">type</span><span class="token operator">:</span> string<span class="token punctuation">,</span>             <span class="token comment">// 连接线类型</span>
  <span class="token literal-property property">animated</span><span class="token operator">:</span> boolean<span class="token punctuation">,</span>        <span class="token comment">// 是否动画</span>
  <span class="token literal-property property">style</span><span class="token operator">:</span> <span class="token punctuation">{</span>                  <span class="token comment">// 样式</span>
    <span class="token literal-property property">stroke</span><span class="token operator">:</span> string          <span class="token comment">// 颜色</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// 3. 状态类型</span>
<span class="token keyword">const</span> StatusTypes <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token constant">COMPLETED</span><span class="token operator">:</span> <span class="token string">&#39;completed&#39;</span><span class="token punctuation">,</span>    <span class="token comment">// 已完成</span>
  <span class="token constant">IN_PROGRESS</span><span class="token operator">:</span> <span class="token string">&#39;in-progress&#39;</span><span class="token punctuation">,</span> <span class="token comment">// 进行中</span>
  <span class="token constant">PENDING</span><span class="token operator">:</span> <span class="token string">&#39;pending&#39;</span><span class="token punctuation">,</span>        <span class="token comment">// 待执行</span>
  <span class="token constant">FAILED</span><span class="token operator">:</span> <span class="token string">&#39;failed&#39;</span>          <span class="token comment">// 失败</span>
<span class="token punctuation">}</span>
</code></pre></div><ol start="5"><li>数据更新和响应式处理：</li></ol><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 1. 节点数据变化监听</span>
<span class="token function">watch</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> props<span class="token punctuation">.</span>nodes<span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">newNodes</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  elements<span class="token punctuation">.</span>value <span class="token operator">=</span> <span class="token function">transformNodesToElements</span><span class="token punctuation">(</span>newNodes<span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token literal-property property">immediate</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token literal-property property">deep</span><span class="token operator">:</span> <span class="token boolean">true</span> <span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token comment">// 2. 视图自适应</span>
<span class="token function">onMounted</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token punctuation">{</span> fitView <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">useVueFlow</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token function">fitView</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">padding</span><span class="token operator">:</span> <span class="token number">0.2</span> <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">100</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token comment">// 3. 状态更新触发重渲染</span>
<span class="token comment">// 当节点状态改变时，会自动触发连接线颜色更新和动画效果</span>
</code></pre></div><p>这些实现确保了：</p><ol><li>节点之间的连接关系清晰可见</li><li>状态变化能够及时反映在界面上</li><li>用户交互能够正确触发相应的事件</li><li>数据能够在组件之间正确流转</li><li>界面能够保持响应式更新</li></ol><p>需要注意的是：</p><ol><li>连接线的样式和动画效果可以根据需求自定义</li><li>事件处理可以根据业务需求扩展</li><li>数据流转路径可以根据实际需求调整</li><li>状态管理可以根据项目规模选择更复杂的状态管理方案</li></ol>`,15)),o(` 

npm install @vue-flow/core @vue-flow/background @vue-flow/controls @vue-flow/minimap

`),n[1]||(n[1]=s(`<p>我来详细介绍 Vue Flow 的背景样式修改方式和扩展功能：</p><ol><li>背景样式修改方式：</li></ol><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 在 WorkflowGraph.vue 中</span>
<span class="token comment">// 1. 基础背景配置</span>
<span class="token operator">&lt;</span>Background 
  pattern<span class="token operator">-</span>color<span class="token operator">=</span><span class="token string">&quot;#aaa&quot;</span>    <span class="token comment">// 网格线颜色</span>
  gap<span class="token operator">=</span><span class="token string">&quot;8&quot;</span>                 <span class="token comment">// 网格间距</span>
  size<span class="token operator">=</span><span class="token string">&quot;1&quot;</span>               <span class="token comment">// 网格线宽度</span>
  color<span class="token operator">=</span><span class="token string">&quot;#f8f8f8&quot;</span>        <span class="token comment">// 背景颜色</span>
  variant<span class="token operator">=</span><span class="token string">&quot;dots&quot;</span>         <span class="token comment">// 网格类型：dots/lines/cross</span>
<span class="token operator">/</span><span class="token operator">&gt;</span>

<span class="token comment">// 2. 自定义背景样式</span>
<span class="token operator">&lt;</span>style lang<span class="token operator">=</span><span class="token string">&quot;scss&quot;</span> scoped<span class="token operator">&gt;</span>
<span class="token punctuation">.</span>workflow<span class="token operator">-</span>flow <span class="token punctuation">{</span>
  <span class="token comment">// 自定义背景样式</span>
  <span class="token operator">:</span><span class="token function">deep</span><span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">.</span>vue<span class="token operator">-</span>flow__background</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 渐变背景</span>
    <span class="token literal-property property">background</span><span class="token operator">:</span> linear<span class="token operator">-</span><span class="token function">gradient</span><span class="token punctuation">(</span>45deg<span class="token punctuation">,</span> #f3f4f6 <span class="token number">25</span><span class="token operator">%</span><span class="token punctuation">,</span> transparent <span class="token number">25</span><span class="token operator">%</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
                linear<span class="token operator">-</span><span class="token function">gradient</span><span class="token punctuation">(</span><span class="token operator">-</span>45deg<span class="token punctuation">,</span> #f3f4f6 <span class="token number">25</span><span class="token operator">%</span><span class="token punctuation">,</span> transparent <span class="token number">25</span><span class="token operator">%</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
                linear<span class="token operator">-</span><span class="token function">gradient</span><span class="token punctuation">(</span>45deg<span class="token punctuation">,</span> transparent <span class="token number">75</span><span class="token operator">%</span><span class="token punctuation">,</span> #f3f4f6 <span class="token number">75</span><span class="token operator">%</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
                linear<span class="token operator">-</span><span class="token function">gradient</span><span class="token punctuation">(</span><span class="token operator">-</span>45deg<span class="token punctuation">,</span> transparent <span class="token number">75</span><span class="token operator">%</span><span class="token punctuation">,</span> #f3f4f6 <span class="token number">75</span><span class="token operator">%</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    background<span class="token operator">-</span>size<span class="token operator">:</span> 20px 20px<span class="token punctuation">;</span>
    background<span class="token operator">-</span>position<span class="token operator">:</span> <span class="token number">0</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span> 10px<span class="token punctuation">,</span> 10px <span class="token operator">-</span>10px<span class="token punctuation">,</span> <span class="token operator">-</span>10px 0px<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>style<span class="token operator">&gt;</span>
</code></pre></div><ol start="2"><li>可用的背景样式类型：</li></ol><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 1. 点状网格 (dots)</span>
<span class="token operator">&lt;</span>Background variant<span class="token operator">=</span><span class="token string">&quot;dots&quot;</span> <span class="token operator">/</span><span class="token operator">&gt;</span>

<span class="token comment">// 2. 线条网格 (lines)</span>
<span class="token operator">&lt;</span>Background variant<span class="token operator">=</span><span class="token string">&quot;lines&quot;</span> <span class="token operator">/</span><span class="token operator">&gt;</span>

<span class="token comment">// 3. 交叉网格 (cross)</span>
<span class="token operator">&lt;</span>Background variant<span class="token operator">=</span><span class="token string">&quot;cross&quot;</span> <span class="token operator">/</span><span class="token operator">&gt;</span>

<span class="token comment">// 4. 自定义图案</span>
<span class="token operator">&lt;</span>Background 
  <span class="token operator">:</span>pattern<span class="token operator">=</span><span class="token string">&quot;customPattern&quot;</span>  <span class="token comment">// 自定义 SVG 图案</span>
  pattern<span class="token operator">-</span>color<span class="token operator">=</span><span class="token string">&quot;currentColor&quot;</span>
  gap<span class="token operator">=</span><span class="token string">&quot;20&quot;</span>
<span class="token operator">/</span><span class="token operator">&gt;</span>

<span class="token comment">// 5. 图片背景</span>
<span class="token operator">&lt;</span>style<span class="token operator">&gt;</span>
<span class="token punctuation">.</span>workflow<span class="token operator">-</span>flow <span class="token punctuation">{</span>
  background<span class="token operator">-</span>image<span class="token operator">:</span> <span class="token function">url</span><span class="token punctuation">(</span><span class="token string">&#39;path/to/image.png&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  background<span class="token operator">-</span>size<span class="token operator">:</span> cover<span class="token punctuation">;</span>
  background<span class="token operator">-</span>position<span class="token operator">:</span> center<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>style<span class="token operator">&gt;</span>
</code></pre></div><ol start="3"><li>Vue Flow 的扩展功能：</li></ol><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 1. 自定义节点类型</span>
<span class="token comment">// 在 WorkflowGraph.vue 中注册自定义节点</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> VueFlow<span class="token punctuation">,</span> useVueFlow <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@vue-flow/core&#39;</span>
<span class="token keyword">import</span> CustomNode <span class="token keyword">from</span> <span class="token string">&#39;./CustomNode.vue&#39;</span>

<span class="token keyword">const</span> nodeTypes <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">custom</span><span class="token operator">:</span> CustomNode<span class="token punctuation">,</span>
  <span class="token comment">// 可以注册多个自定义节点类型</span>
  <span class="token string-property property">&#39;custom-input&#39;</span><span class="token operator">:</span> CustomInputNode<span class="token punctuation">,</span>
  <span class="token string-property property">&#39;custom-output&#39;</span><span class="token operator">:</span> CustomOutputNode<span class="token punctuation">,</span>
<span class="token punctuation">}</span>

<span class="token comment">// 使用自定义节点</span>
<span class="token operator">&lt;</span>VueFlow
  v<span class="token operator">-</span>model<span class="token operator">=</span><span class="token string">&quot;elements&quot;</span>
  <span class="token operator">:</span>node<span class="token operator">-</span>types<span class="token operator">=</span><span class="token string">&quot;nodeTypes&quot;</span>
  <span class="token operator">:</span><span class="token keyword">default</span><span class="token operator">-</span>viewport<span class="token operator">=</span><span class="token string">&quot;{ x: 0, y: 0, zoom: 1 }&quot;</span>
<span class="token operator">&gt;</span>
  <span class="token operator">&lt;</span>template #node<span class="token operator">-</span>custom<span class="token operator">=</span><span class="token string">&quot;nodeProps&quot;</span><span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span>CustomNode v<span class="token operator">-</span>bind<span class="token operator">=</span><span class="token string">&quot;nodeProps&quot;</span> <span class="token operator">/</span><span class="token operator">&gt;</span>
  <span class="token operator">&lt;</span><span class="token operator">/</span>template<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>VueFlow<span class="token operator">&gt;</span>

<span class="token comment">// 2. 自定义边（连接线）类型</span>
<span class="token keyword">const</span> edgeTypes <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">custom</span><span class="token operator">:</span> CustomEdge<span class="token punctuation">,</span>
  <span class="token string-property property">&#39;smooth-step&#39;</span><span class="token operator">:</span> SmoothStepEdge<span class="token punctuation">,</span>
  <span class="token string-property property">&#39;straight&#39;</span><span class="token operator">:</span> StraightEdge<span class="token punctuation">,</span>
  <span class="token string-property property">&#39;step&#39;</span><span class="token operator">:</span> StepEdge<span class="token punctuation">,</span>
<span class="token punctuation">}</span>

<span class="token comment">// 3. 交互功能扩展</span>
<span class="token operator">&lt;</span>VueFlow
  v<span class="token operator">-</span>model<span class="token operator">=</span><span class="token string">&quot;elements&quot;</span>
  <span class="token operator">:</span>nodes<span class="token operator">-</span>draggable<span class="token operator">=</span><span class="token string">&quot;true&quot;</span>           <span class="token comment">// 节点可拖拽</span>
  <span class="token operator">:</span>nodes<span class="token operator">-</span>connectable<span class="token operator">=</span><span class="token string">&quot;true&quot;</span>         <span class="token comment">// 节点可连接</span>
  <span class="token operator">:</span>elements<span class="token operator">-</span>selectable<span class="token operator">=</span><span class="token string">&quot;true&quot;</span>       <span class="token comment">// 元素可选择</span>
  <span class="token operator">:</span>zoom<span class="token operator">-</span>on<span class="token operator">-</span>scroll<span class="token operator">=</span><span class="token string">&quot;true&quot;</span>           <span class="token comment">// 滚轮缩放</span>
  <span class="token operator">:</span>pan<span class="token operator">-</span>on<span class="token operator">-</span>scroll<span class="token operator">=</span><span class="token string">&quot;true&quot;</span>            <span class="token comment">// 滚轮平移</span>
  <span class="token operator">:</span>selection<span class="token operator">-</span>on<span class="token operator">-</span>drag<span class="token operator">=</span><span class="token string">&quot;true&quot;</span>        <span class="token comment">// 框选</span>
  <span class="token operator">:</span>multi<span class="token operator">-</span>selection<span class="token operator">-</span>key<span class="token operator">-</span>code<span class="token operator">=</span><span class="token string">&quot;[&#39;Meta&#39;, &#39;Shift&#39;]&quot;</span>  <span class="token comment">// 多选按键</span>
  @node<span class="token operator">-</span>drag<span class="token operator">=</span><span class="token string">&quot;onNodeDrag&quot;</span>          <span class="token comment">// 节点拖拽事件</span>
  @node<span class="token operator">-</span>drag<span class="token operator">-</span>stop<span class="token operator">=</span><span class="token string">&quot;onNodeDragStop&quot;</span> <span class="token comment">// 节点拖拽停止事件</span>
  @connect<span class="token operator">=</span><span class="token string">&quot;onConnect&quot;</span>             <span class="token comment">// 连接事件</span>
  @connect<span class="token operator">-</span>start<span class="token operator">=</span><span class="token string">&quot;onConnectStart&quot;</span>  <span class="token comment">// 开始连接事件</span>
  @connect<span class="token operator">-</span>end<span class="token operator">=</span><span class="token string">&quot;onConnectEnd&quot;</span>      <span class="token comment">// 结束连接事件</span>
<span class="token operator">&gt;</span>

<span class="token comment">// 4. 工具栏扩展</span>
<span class="token operator">&lt;</span>template<span class="token operator">&gt;</span>
  <span class="token operator">&lt;</span>VueFlow<span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span>Controls<span class="token operator">&gt;</span>
      <span class="token operator">&lt;</span>button @click<span class="token operator">=</span><span class="token string">&quot;zoomIn&quot;</span><span class="token operator">&gt;</span>放大<span class="token operator">&lt;</span><span class="token operator">/</span>button<span class="token operator">&gt;</span>
      <span class="token operator">&lt;</span>button @click<span class="token operator">=</span><span class="token string">&quot;zoomOut&quot;</span><span class="token operator">&gt;</span>缩小<span class="token operator">&lt;</span><span class="token operator">/</span>button<span class="token operator">&gt;</span>
      <span class="token operator">&lt;</span>button @click<span class="token operator">=</span><span class="token string">&quot;fitView&quot;</span><span class="token operator">&gt;</span>适应视图<span class="token operator">&lt;</span><span class="token operator">/</span>button<span class="token operator">&gt;</span>
      <span class="token operator">&lt;</span>button @click<span class="token operator">=</span><span class="token string">&quot;centerView&quot;</span><span class="token operator">&gt;</span>居中<span class="token operator">&lt;</span><span class="token operator">/</span>button<span class="token operator">&gt;</span>
      <span class="token operator">&lt;</span><span class="token operator">!</span><span class="token operator">--</span> 自定义工具栏按钮 <span class="token operator">--</span><span class="token operator">&gt;</span>
      <span class="token operator">&lt;</span>button @click<span class="token operator">=</span><span class="token string">&quot;exportGraph&quot;</span><span class="token operator">&gt;</span>导出<span class="token operator">&lt;</span><span class="token operator">/</span>button<span class="token operator">&gt;</span>
      <span class="token operator">&lt;</span>button @click<span class="token operator">=</span><span class="token string">&quot;importGraph&quot;</span><span class="token operator">&gt;</span>导入<span class="token operator">&lt;</span><span class="token operator">/</span>button<span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>Controls<span class="token operator">&gt;</span>
  <span class="token operator">&lt;</span><span class="token operator">/</span>VueFlow<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>template<span class="token operator">&gt;</span>

<span class="token comment">// 5. 小地图扩展</span>
<span class="token operator">&lt;</span>MiniMap
  <span class="token operator">:</span>node<span class="token operator">-</span>stroke<span class="token operator">-</span>color<span class="token operator">=</span><span class="token string">&quot;nodeStrokeColor&quot;</span>
  <span class="token operator">:</span>node<span class="token operator">-</span>color<span class="token operator">=</span><span class="token string">&quot;nodeColor&quot;</span>
  <span class="token operator">:</span>node<span class="token operator">-</span>border<span class="token operator">-</span>radius<span class="token operator">=</span><span class="token string">&quot;2&quot;</span>
  <span class="token operator">:</span>mask<span class="token operator">-</span>color<span class="token operator">=</span><span class="token string">&quot;&#39;rgba(0, 0, 0, 0.1)&#39;&quot;</span>
  <span class="token operator">:</span>style<span class="token operator">=</span><span class="token string">&quot;{ backgroundColor: &#39;#f8f8f8&#39; }&quot;</span>
<span class="token operator">/</span><span class="token operator">&gt;</span>

<span class="token comment">// 6. 节点分组功能</span>
<span class="token keyword">const</span> <span class="token function-variable function">groupNodes</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">nodes</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> nodes<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token parameter">node</span> <span class="token operator">=&gt;</span> <span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token operator">...</span>node<span class="token punctuation">,</span>
    <span class="token literal-property property">group</span><span class="token operator">:</span> node<span class="token punctuation">.</span>type <span class="token operator">===</span> <span class="token string">&#39;input&#39;</span> <span class="token operator">?</span> <span class="token string">&#39;inputs&#39;</span> <span class="token operator">:</span> <span class="token string">&#39;outputs&#39;</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token comment">// 7. 自动布局功能</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> dagre <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@vue-flow/layout&#39;</span>

<span class="token keyword">const</span> <span class="token function-variable function">layoutNodes</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">nodes<span class="token punctuation">,</span> edges</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> layouted <span class="token operator">=</span> dagre<span class="token punctuation">.</span><span class="token function">layout</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    nodes<span class="token punctuation">,</span>
    edges<span class="token punctuation">,</span>
    <span class="token literal-property property">rankdir</span><span class="token operator">:</span> <span class="token string">&#39;TB&#39;</span><span class="token punctuation">,</span>  <span class="token comment">// 布局方向：TB/LR/BT/RL</span>
    <span class="token literal-property property">nodesep</span><span class="token operator">:</span> <span class="token number">50</span><span class="token punctuation">,</span>    <span class="token comment">// 节点间距</span>
    <span class="token literal-property property">ranksep</span><span class="token operator">:</span> <span class="token number">50</span><span class="token punctuation">,</span>    <span class="token comment">// 层级间距</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token keyword">return</span> layouted
<span class="token punctuation">}</span>

<span class="token comment">// 8. 导出/导入功能</span>
<span class="token keyword">const</span> <span class="token function-variable function">exportGraph</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> graphData <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">nodes</span><span class="token operator">:</span> elements<span class="token punctuation">.</span>value<span class="token punctuation">.</span><span class="token function">filter</span><span class="token punctuation">(</span><span class="token parameter">el</span> <span class="token operator">=&gt;</span> el<span class="token punctuation">.</span>type <span class="token operator">===</span> <span class="token string">&#39;node&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token literal-property property">edges</span><span class="token operator">:</span> elements<span class="token punctuation">.</span>value<span class="token punctuation">.</span><span class="token function">filter</span><span class="token punctuation">(</span><span class="token parameter">el</span> <span class="token operator">=&gt;</span> el<span class="token punctuation">.</span>type <span class="token operator">===</span> <span class="token string">&#39;edge&#39;</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">const</span> json <span class="token operator">=</span> <span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span>graphData<span class="token punctuation">)</span>
  <span class="token comment">// 导出逻辑</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> <span class="token function-variable function">importGraph</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">json</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> graphData <span class="token operator">=</span> <span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">parse</span><span class="token punctuation">(</span>json<span class="token punctuation">)</span>
  elements<span class="token punctuation">.</span>value <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token operator">...</span>graphData<span class="token punctuation">.</span>nodes<span class="token punctuation">,</span> <span class="token operator">...</span>graphData<span class="token punctuation">.</span>edges<span class="token punctuation">]</span>
<span class="token punctuation">}</span>

<span class="token comment">// 9. 节点对齐功能</span>
<span class="token keyword">const</span> <span class="token function-variable function">alignNodes</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">direction</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token punctuation">{</span> getNodes<span class="token punctuation">,</span> setNodes <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">useVueFlow</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token keyword">const</span> nodes <span class="token operator">=</span> <span class="token function">getNodes</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token comment">// 实现对齐逻辑</span>
<span class="token punctuation">}</span>

<span class="token comment">// 10. 撤销/重做功能</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> useUndoRedo <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@vue-flow/core&#39;</span>

<span class="token keyword">const</span> <span class="token punctuation">{</span> undo<span class="token punctuation">,</span> redo<span class="token punctuation">,</span> canUndo<span class="token punctuation">,</span> canRedo <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">useUndoRedo</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre></div><ol start="4"><li>其他实用功能：</li></ol><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 1. 节点搜索和高亮</span>
<span class="token keyword">const</span> <span class="token function-variable function">searchNodes</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">keyword</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> nodes <span class="token operator">=</span> elements<span class="token punctuation">.</span>value<span class="token punctuation">.</span><span class="token function">filter</span><span class="token punctuation">(</span><span class="token parameter">el</span> <span class="token operator">=&gt;</span> el<span class="token punctuation">.</span>type <span class="token operator">===</span> <span class="token string">&#39;node&#39;</span><span class="token punctuation">)</span>
  <span class="token keyword">return</span> nodes<span class="token punctuation">.</span><span class="token function">filter</span><span class="token punctuation">(</span><span class="token parameter">node</span> <span class="token operator">=&gt;</span> 
    node<span class="token punctuation">.</span>data<span class="token punctuation">.</span>label<span class="token punctuation">.</span><span class="token function">toLowerCase</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">includes</span><span class="token punctuation">(</span>keyword<span class="token punctuation">.</span><span class="token function">toLowerCase</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
  <span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token comment">// 2. 节点折叠/展开</span>
<span class="token keyword">const</span> <span class="token function-variable function">toggleNodeCollapse</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">nodeId</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> node <span class="token operator">=</span> elements<span class="token punctuation">.</span>value<span class="token punctuation">.</span><span class="token function">find</span><span class="token punctuation">(</span><span class="token parameter">el</span> <span class="token operator">=&gt;</span> el<span class="token punctuation">.</span>id <span class="token operator">===</span> nodeId<span class="token punctuation">)</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>node<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    node<span class="token punctuation">.</span>data<span class="token punctuation">.</span>collapsed <span class="token operator">=</span> <span class="token operator">!</span>node<span class="token punctuation">.</span>data<span class="token punctuation">.</span>collapsed
    <span class="token comment">// 处理子节点显示/隐藏</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// 3. 节点注释</span>
<span class="token keyword">const</span> <span class="token function-variable function">addNodeComment</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">nodeId<span class="token punctuation">,</span> comment</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> node <span class="token operator">=</span> elements<span class="token punctuation">.</span>value<span class="token punctuation">.</span><span class="token function">find</span><span class="token punctuation">(</span><span class="token parameter">el</span> <span class="token operator">=&gt;</span> el<span class="token punctuation">.</span>id <span class="token operator">===</span> nodeId<span class="token punctuation">)</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>node<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    node<span class="token punctuation">.</span>data<span class="token punctuation">.</span>comment <span class="token operator">=</span> comment
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// 4. 节点状态追踪</span>
<span class="token keyword">const</span> <span class="token function-variable function">trackNodeStatus</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">nodeId</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> node <span class="token operator">=</span> elements<span class="token punctuation">.</span>value<span class="token punctuation">.</span><span class="token function">find</span><span class="token punctuation">(</span><span class="token parameter">el</span> <span class="token operator">=&gt;</span> el<span class="token punctuation">.</span>id <span class="token operator">===</span> nodeId<span class="token punctuation">)</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>node<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    node<span class="token punctuation">.</span>data<span class="token punctuation">.</span>statusHistory <span class="token operator">=</span> <span class="token punctuation">[</span>
      <span class="token operator">...</span><span class="token punctuation">(</span>node<span class="token punctuation">.</span>data<span class="token punctuation">.</span>statusHistory <span class="token operator">||</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">status</span><span class="token operator">:</span> node<span class="token punctuation">.</span>data<span class="token punctuation">.</span>status<span class="token punctuation">,</span>
        <span class="token literal-property property">timestamp</span><span class="token operator">:</span> <span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toISOString</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">]</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><p>使用建议：</p><ol><li>根据实际需求选择合适的背景样式</li><li>合理使用自定义节点和边类型</li><li>适当添加交互功能，避免过度复杂</li><li>考虑性能影响，特别是在节点数量较多时</li><li>注意保持用户体验的流畅性</li></ol><p>这些功能可以根据项目需求选择性使用，不必全部实现。建议根据实际业务场景和用户需求来选择合适的扩展功能。</p>`,12))])}const k=a(e,[["render",c],["__file","flow_vue_flow.html.vue"]]);export{k as default};
