import{_ as n}from"./vuex-a83d84bc.js";import{_ as s,p as a,q as t,a1 as p}from"./framework-d81ad7e5.js";const e={},o=p('<h2 id="vuex" tabindex="-1"><a class="header-anchor" href="#vuex" aria-hidden="true">#</a> VUEX</h2><blockquote><p>​ Vuex 是一个专门为vue应用程序开发的状态管理（数据管理）模式。它采用了集中式存储管理应用的所有组件的状态，并以相应的规则保证状态以一种可预测的方式发生变化.</p><p>​ Vuex是Vue配套的公共数据管理工具。它可以把一些共享的数据，保存到vuex中，方便整个程序中的任何组件直接获取或者修改我们的公共数据</p><p>​ Vuex是为了保存组件之间共享数据而诞生的。如果组件之间有要共享的数据，可以挂载到vuex中，而不必父子组件之间传值了。</p></blockquote><h3 id="使用场景" tabindex="-1"><a class="header-anchor" href="#使用场景" aria-hidden="true">#</a> 使用场景</h3><blockquote><p>存放全局变量、存放登录信息、存放三方接口的一些固定参数等等</p></blockquote><p><img src="'+n+`" alt="alt"></p><h4 id="有且只有mutations-可以操作-state-中的数据" tabindex="-1"><a class="header-anchor" href="#有且只有mutations-可以操作-state-中的数据" aria-hidden="true">#</a> 有且只有mutations 可以操作 state 中的数据</h4><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">import</span> Vue <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span>
<span class="token keyword">import</span> App <span class="token keyword">from</span> <span class="token string">&#39;./App.vue&#39;</span>
<span class="token keyword">import</span> router <span class="token keyword">from</span> <span class="token string">&#39;./router&#39;</span>
<span class="token keyword">import</span> ElementUI <span class="token keyword">from</span> <span class="token string">&#39;element-ui&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token string">&#39;element-ui/lib/theme-chalk/index.css&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> Vuex <span class="token keyword">from</span> <span class="token string">&#39;vuex&#39;</span>

Vue<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>Vuex<span class="token punctuation">)</span>
Vue<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>ElementUI<span class="token punctuation">)</span><span class="token punctuation">;</span>
Vue<span class="token punctuation">.</span>config<span class="token punctuation">.</span>productionTip <span class="token operator">=</span> <span class="token boolean">false</span>

<span class="token keyword">const</span> store <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Vuex<span class="token punctuation">.</span>Store</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token comment">// 相当于 data</span>
  <span class="token comment">// 使用方式：this.$store.state.count</span>
  <span class="token literal-property property">state</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">departmentList</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>

  <span class="token comment">// 相当于methods</span>
  <span class="token comment">// 使用方式：this.$store.commit(&#39;方法名&#39;, 参数1, 参数2....)</span>
  <span class="token literal-property property">mutations</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token constant">SET_DEPARTMENT_LIST</span><span class="token punctuation">(</span><span class="token parameter">state<span class="token punctuation">,</span> val</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      state<span class="token punctuation">.</span>departmentList <span class="token operator">=</span> val
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token comment">// 通过getters去获取vuex中的数据</span>
  <span class="token comment">// 用法：this.$store.getters.getCount</span>
  <span class="token literal-property property">getters</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token comment">// 固定格式,对state 进行进一步加工,相当于拦截加工一下</span>
    <span class="token function">getCurIndex</span><span class="token punctuation">(</span><span class="token parameter">state</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">当前index 为 </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>state<span class="token punctuation">.</span>curIndex<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string"> 角标!</span><span class="token template-punctuation string">\`</span></span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token function">getDepartmentList</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
      <span class="token keyword">return</span> store<span class="token punctuation">.</span>state<span class="token punctuation">.</span>departmentList
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token keyword">new</span> <span class="token class-name">Vue</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  router<span class="token punctuation">,</span>
  <span class="token function-variable function">render</span><span class="token operator">:</span> <span class="token parameter">h</span> <span class="token operator">=&gt;</span> <span class="token function">h</span><span class="token punctuation">(</span>App<span class="token punctuation">)</span><span class="token punctuation">,</span>
  store
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">$mount</span><span class="token punctuation">(</span><span class="token string">&#39;#app&#39;</span><span class="token punctuation">)</span>
</code></pre></div><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code>
<span class="token doc-comment comment">/**
 * Vuex 是一个专门为vue应用程序开发的状态管理（数据管理）模式。它采用了集中式存储管理应用的所有组件的状态，并以相应的规则保证状态以一种可预测的方式发生变化
 * 说人话：Vuex是Vue配套的公共数据管理工具。它可以把一些共享的数据，保存到vuex中，方便整个程序中的任何组件直接获取或者修改我们的公共数据
 * 
 * Vuex是为了保存组件之间共享数据而诞生的。如果组件之间有要共享的数据，可以挂载到vuex中，而不必父子组件之间传值了。
 * 如果组件的数据不需要共享，此时应该放到每个组件的data中，不要放到vuex中
 * 
 * 只有需要共享的数据，才有权利放到vuex中。组件中私有的数据，只需要放到data中即可。
 * 
 * data：存放组件私有数据
 * props：存放父子组件的数据
 * vuex：存放共享数据
 * 
 * 使用场景：存放全局变量、存放登录信息、存放三方接口的一些固定参数等等
 * 页面刷新你vuex的数据会丢失
 * 解决方案：使用vuex-persistedstate
 */</span>
<span class="token keyword">import</span> Vuex <span class="token keyword">from</span> <span class="token string">&#39;vuex&#39;</span>
Vue<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>Vuex<span class="token punctuation">)</span>

<span class="token comment">// state中的数据使用this.$store.state.xx去访问，但是我们不建议这样去访问</span>
<span class="token comment">// 如果想修改vuex中的数据，。直接this.$store.state.xx = 新值，但是我们不建议这样去操作</span>
<span class="token keyword">const</span> store <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Vuex<span class="token punctuation">.</span>Store</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">state</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token comment">// 相当于data</span>
    <span class="token comment">// 使用方式：this.$store.state.count</span>
    <span class="token literal-property property">count</span><span class="token operator">:</span> <span class="token number">0</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">mutations</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token comment">// 相当于methods</span>
    <span class="token comment">// 推荐使用mutations操作vuex中的数据。</span>
    <span class="token comment">// mutations中的方法，第一个参数始终是state。第二个开始才是用户传递的参数</span>
    <span class="token comment">// 使用方式：this.$store.commit(&#39;方法名&#39;, 参数1, 参数2....)</span>
    <span class="token function">setCount</span><span class="token punctuation">(</span><span class="token parameter">state<span class="token punctuation">,</span> val</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      state<span class="token punctuation">.</span>count <span class="token operator">=</span> val
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">getters</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token comment">// 推荐使用getters去获取vuex中的数据。在getters中，可以像过滤器一样，去对state中的数据进行一些处理</span>
    <span class="token comment">// 用法：this.$store.getters.getCount</span>
    <span class="token function">getCount</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> store<span class="token punctuation">.</span>state<span class="token punctuation">.</span>count
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token keyword">var</span> vm <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Vue</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">el</span><span class="token operator">:</span> <span class="token string">&#39;#app&#39;</span><span class="token punctuation">,</span>
  <span class="token function-variable function">render</span><span class="token operator">:</span> <span class="token parameter">c</span> <span class="token operator">=&gt;</span> <span class="token function">c</span><span class="token punctuation">(</span>app<span class="token punctuation">)</span><span class="token punctuation">,</span>
  router<span class="token punctuation">,</span>
  store
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre></div><ul><li>state :存放值得地方, 类似于data</li><li>mutations : 通过此对象下的方法操作 state 中的值</li><li>getters : 对state 值得包装,过滤等</li><li>action : 单纯的数据业务逻辑</li></ul><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">import</span> Vue <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span>
<span class="token keyword">import</span> Vuex <span class="token keyword">from</span> <span class="token string">&#39;vuex&#39;</span>
Vue<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>Vuex<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 全局 state 对象，用于保存所有组件的公共数据</span>
<span class="token keyword">const</span> state <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token comment">// 定义一个 user 对象</span>
  <span class="token comment">// 在组件中是通过 this.$store.state.user 来获取</span>
  <span class="token literal-property property">user</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">username</span><span class="token operator">:</span> <span class="token string">&#39;&#39;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token comment">// 实时监听 state 值的最新状态，注意这里的 getters 可以理解为计算属性</span>
<span class="token keyword">const</span> getters <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token comment">// 在组件中是通过 this.$store.getters.getUser 来获取</span>
  <span class="token function">getUser</span><span class="token punctuation">(</span><span class="token parameter">state</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> state<span class="token punctuation">.</span>user<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token comment">// 定义改变 state 初始值的方法，这里是唯一可以改变 state 的地方，缺点是只能同步执行</span>
<span class="token keyword">const</span> mutations <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token comment">// 在组件中是通过 this.$store.commit(&#39;updateUser&#39;, user); 方法来调用 mutations</span>
  <span class="token function">updateUser</span><span class="token punctuation">(</span><span class="token parameter">state<span class="token punctuation">,</span> user</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    state<span class="token punctuation">.</span>user <span class="token operator">=</span> user<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token comment">// 定义触发 mutations 里函数的方法，可以异步执行 mutations 里的函数</span>
<span class="token keyword">const</span> actions <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token comment">// 在组件中是通过 this.$store.dispatch(&#39;asyncUpdateUser&#39;, user); 来调用 actions</span>
  <span class="token function">asyncUpdateUser</span><span class="token punctuation">(</span><span class="token parameter">context<span class="token punctuation">,</span> user</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    context<span class="token punctuation">.</span><span class="token function">commit</span><span class="token punctuation">(</span><span class="token string">&#39;updateUser&#39;</span><span class="token punctuation">,</span> user<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">new</span> <span class="token class-name">Vuex<span class="token punctuation">.</span>Store</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  state<span class="token punctuation">,</span>
  getters<span class="token punctuation">,</span>
  mutations<span class="token punctuation">,</span>
  actions
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><h3 id="vuex工作流" tabindex="-1"><a class="header-anchor" href="#vuex工作流" aria-hidden="true">#</a> Vuex工作流</h3><ol><li><code>组件 -&gt; dispatch -&gt; action</code></li><li><code>dispatch -&gt; type(actionType) -&gt; 某一个action</code></li><li><code>action -&gt; commit 调用 -&gt; mutation</code></li><li><code>mutation -&gt; change -&gt; state</code></li><li><code>render方案: state -&gt; 数据流 -&gt; 视图</code></li></ol><h4 id="文件集合" tabindex="-1"><a class="header-anchor" href="#文件集合" aria-hidden="true">#</a> 文件集合</h4><ol><li>actionTypes action类型</li><li>actions 调用mutation的方法</li><li>mutations 更改state的方法</li><li>state 中央数据管理池</li><li>store出口 actions、mutations、state统一到仓库里进行管理</li></ol>`,14),c=[o];function u(l,i){return a(),t("div",null,c)}const m=s(e,[["render",u],["__file","vuex_a.html.vue"]]);export{m as default};
