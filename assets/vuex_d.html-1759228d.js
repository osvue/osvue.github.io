import{_ as o,M as e,p as c,q as l,R as n,t as s,N as t,a1 as p}from"./framework-d81ad7e5.js";const u={},r=p(`<blockquote><p>由于使用单一状态树，应用的所有状态会集中到一个比较大的对象。 当应用变得非常复杂时，store 对象就有可能变得相当臃肿。 为了解决以上问题，Vuex 允许我们将 store 分割成模块（module）。 每个模块拥有自己的 state、mutation、action、getter、甚至是嵌套子模块——从上至下进行同样方式的分割</p></blockquote><p>由于使用单一状态树，应用的所有状态会集中到一个比较大的对象。当应用变得非常复杂时，store 对象就有可能变得相当臃肿。</p><p>为了解决以上问题，Vuex 允许我们将 store 分割成<strong>模块（module）</strong>。每个模块拥有自己的 state、mutation、action、getter、甚至是嵌套子模块——从上至下进行同样方式的分割：</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> moduleA <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token function-variable function">state</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token operator">...</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token literal-property property">mutations</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token operator">...</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">actions</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token operator">...</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">getters</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token operator">...</span> <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> moduleB <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token function-variable function">state</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token operator">...</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token literal-property property">mutations</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token operator">...</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">actions</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token operator">...</span> <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> store <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Vuex<span class="token punctuation">.</span>Store</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">modules</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">a</span><span class="token operator">:</span> moduleA<span class="token punctuation">,</span>
    <span class="token literal-property property">b</span><span class="token operator">:</span> moduleB
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

store<span class="token punctuation">.</span>state<span class="token punctuation">.</span>a <span class="token comment">// -&gt; moduleA 的状态</span>
store<span class="token punctuation">.</span>state<span class="token punctuation">.</span>b <span class="token comment">// -&gt; moduleB 的状态</span>
</code></pre></div>`,4),i={id:"模块的局部状态",tabindex:"-1"},k=n("a",{class:"header-anchor",href:"#模块的局部状态","aria-hidden":"true"},"#",-1),d={href:"https://vuex.vuejs.org/zh/guide/modules.html#%E6%A8%A1%E5%9D%97%E7%9A%84%E5%B1%80%E9%83%A8%E7%8A%B6%E6%80%81",target:"_blank",rel:"noopener noreferrer"},m=p(`<p>对于模块内部的 mutation 和 getter，接收的第一个参数是<strong>模块的局部状态对象</strong>。</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> moduleA <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token function-variable function">state</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">count</span><span class="token operator">:</span> <span class="token number">0</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token literal-property property">mutations</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token function">increment</span> <span class="token punctuation">(</span><span class="token parameter">state</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token comment">// 这里的 \`state\` 对象是模块的局部状态</span>
      state<span class="token punctuation">.</span>count<span class="token operator">++</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>

  <span class="token literal-property property">getters</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token function">doubleCount</span> <span class="token punctuation">(</span><span class="token parameter">state</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> state<span class="token punctuation">.</span>count <span class="token operator">*</span> <span class="token number">2</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><p>同样，对于模块内部的 action，局部状态通过 <code>context.state</code> 暴露出来，根节点状态则为 <code>context.rootState</code>：</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> moduleA <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token comment">// ...</span>
  <span class="token literal-property property">actions</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token function">incrementIfOddOnRootSum</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span> state<span class="token punctuation">,</span> commit<span class="token punctuation">,</span> rootState <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token punctuation">(</span>state<span class="token punctuation">.</span>count <span class="token operator">+</span> rootState<span class="token punctuation">.</span>count<span class="token punctuation">)</span> <span class="token operator">%</span> <span class="token number">2</span> <span class="token operator">===</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token function">commit</span><span class="token punctuation">(</span><span class="token string">&#39;increment&#39;</span><span class="token punctuation">)</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><p>对于模块内部的 getter，根节点状态会作为第三个参数暴露出来：</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> moduleA <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token comment">// ...</span>
  <span class="token literal-property property">getters</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token function">sumWithRootCount</span> <span class="token punctuation">(</span><span class="token parameter">state<span class="token punctuation">,</span> getters<span class="token punctuation">,</span> rootState</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> state<span class="token punctuation">.</span>count <span class="token operator">+</span> rootState<span class="token punctuation">.</span>count
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div>`,6),g={id:"命名空间",tabindex:"-1"},h=n("a",{class:"header-anchor",href:"#命名空间","aria-hidden":"true"},"#",-1),y={href:"https://vuex.vuejs.org/zh/guide/modules.html#%E5%91%BD%E5%90%8D%E7%A9%BA%E9%97%B4",target:"_blank",rel:"noopener noreferrer"},_=p(`<p>默认情况下，模块内部的 action、mutation 和 getter 是注册在<strong>全局命名空间</strong>的——这样使得多个模块能够对同一 mutation 或 action 作出响应。</p><p>如果希望你的模块具有更高的封装度和复用性，你可以通过添加 <code>namespaced: true</code> 的方式使其成为带命名空间的模块。当模块被注册后，它的所有 getter、action 及 mutation 都会自动根据模块注册的路径调整命名。例如：</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> store <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Vuex<span class="token punctuation">.</span>Store</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">modules</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">account</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">namespaced</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>

      <span class="token comment">// 模块内容（module assets）</span>
      <span class="token function-variable function">state</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token operator">...</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token comment">// 模块内的状态已经是嵌套的了，使用 \`namespaced\` 属性不会对其产生影响</span>
      <span class="token literal-property property">getters</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token function">isAdmin</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token operator">...</span> <span class="token punctuation">}</span> <span class="token comment">// -&gt; getters[&#39;account/isAdmin&#39;]</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token literal-property property">actions</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token function">login</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token operator">...</span> <span class="token punctuation">}</span> <span class="token comment">// -&gt; dispatch(&#39;account/login&#39;)</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token literal-property property">mutations</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token function">login</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token operator">...</span> <span class="token punctuation">}</span> <span class="token comment">// -&gt; commit(&#39;account/login&#39;)</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>

      <span class="token comment">// 嵌套模块</span>
      <span class="token literal-property property">modules</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token comment">// 继承父模块的命名空间</span>
        <span class="token literal-property property">myPage</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token function-variable function">state</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token operator">...</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
          <span class="token literal-property property">getters</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token function">profile</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token operator">...</span> <span class="token punctuation">}</span> <span class="token comment">// -&gt; getters[&#39;account/profile&#39;]</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>

        <span class="token comment">// 进一步嵌套命名空间</span>
        <span class="token literal-property property">posts</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token literal-property property">namespaced</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>

          <span class="token function-variable function">state</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token operator">...</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
          <span class="token literal-property property">getters</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token function">popular</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token operator">...</span> <span class="token punctuation">}</span> <span class="token comment">// -&gt; getters[&#39;account/posts/popular&#39;]</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre></div><p>启用了命名空间的 getter 和 action 会收到局部化的 <code>getter</code>，<code>dispatch</code> 和 <code>commit</code>。换言之，你在使用模块内容（module assets）时不需要在同一模块内额外添加空间名前缀。更改 <code>namespaced</code> 属性后不需要修改模块内的代码。</p>`,4),f={id:"在带命名空间的模块内访问全局内容-global-assets",tabindex:"-1"},v=n("a",{class:"header-anchor",href:"#在带命名空间的模块内访问全局内容-global-assets","aria-hidden":"true"},"#",-1),E={href:"https://vuex.vuejs.org/zh/guide/modules.html#%E5%9C%A8%E5%B8%A6%E5%91%BD%E5%90%8D%E7%A9%BA%E9%97%B4%E7%9A%84%E6%A8%A1%E5%9D%97%E5%86%85%E8%AE%BF%E9%97%AE%E5%85%A8%E5%B1%80%E5%86%85%E5%AE%B9-global-assets",target:"_blank",rel:"noopener noreferrer"},A=p(`<p>如果你希望使用全局 state 和 getter，<code>rootState</code> 和 <code>rootGetters</code> 会作为第三和第四参数传入 getter，也会通过 <code>context</code> 对象的属性传入 action。</p><p>若需要在全局命名空间内分发 action 或提交 mutation，将 <code>{ root: true }</code> 作为第三参数传给 <code>dispatch</code> 或 <code>commit</code> 即可。</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token literal-property property">modules</span><span class="token operator">:</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">foo</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">namespaced</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>

    <span class="token literal-property property">getters</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token comment">// 在这个模块的 getter 中，\`getters\` 被局部化了</span>
      <span class="token comment">// 你可以使用 getter 的第四个参数来调用 \`rootGetters\`</span>
      <span class="token function">someGetter</span> <span class="token punctuation">(</span><span class="token parameter">state<span class="token punctuation">,</span> getters<span class="token punctuation">,</span> rootState<span class="token punctuation">,</span> rootGetters</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        getters<span class="token punctuation">.</span>someOtherGetter <span class="token comment">// -&gt; &#39;foo/someOtherGetter&#39;</span>
        rootGetters<span class="token punctuation">.</span>someOtherGetter <span class="token comment">// -&gt; &#39;someOtherGetter&#39;</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token function-variable function">someOtherGetter</span><span class="token operator">:</span> <span class="token parameter">state</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span> <span class="token operator">...</span> <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>

    <span class="token literal-property property">actions</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token comment">// 在这个模块中， dispatch 和 commit 也被局部化了</span>
      <span class="token comment">// 他们可以接受 \`root\` 属性以访问根 dispatch 或 commit</span>
      <span class="token function">someAction</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span> dispatch<span class="token punctuation">,</span> commit<span class="token punctuation">,</span> getters<span class="token punctuation">,</span> rootGetters <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        getters<span class="token punctuation">.</span>someGetter <span class="token comment">// -&gt; &#39;foo/someGetter&#39;</span>
        rootGetters<span class="token punctuation">.</span>someGetter <span class="token comment">// -&gt; &#39;someGetter&#39;</span>

        <span class="token function">dispatch</span><span class="token punctuation">(</span><span class="token string">&#39;someOtherAction&#39;</span><span class="token punctuation">)</span> <span class="token comment">// -&gt; &#39;foo/someOtherAction&#39;</span>
        <span class="token function">dispatch</span><span class="token punctuation">(</span><span class="token string">&#39;someOtherAction&#39;</span><span class="token punctuation">,</span> <span class="token keyword">null</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token literal-property property">root</span><span class="token operator">:</span> <span class="token boolean">true</span> <span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token comment">// -&gt; &#39;someOtherAction&#39;</span>

        <span class="token function">commit</span><span class="token punctuation">(</span><span class="token string">&#39;someMutation&#39;</span><span class="token punctuation">)</span> <span class="token comment">// -&gt; &#39;foo/someMutation&#39;</span>
        <span class="token function">commit</span><span class="token punctuation">(</span><span class="token string">&#39;someMutation&#39;</span><span class="token punctuation">,</span> <span class="token keyword">null</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token literal-property property">root</span><span class="token operator">:</span> <span class="token boolean">true</span> <span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token comment">// -&gt; &#39;someMutation&#39;</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token function">someOtherAction</span> <span class="token punctuation">(</span><span class="token parameter">ctx<span class="token punctuation">,</span> payload</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token operator">...</span> <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div>`,3),b={id:"在带命名空间的模块注册全局-action",tabindex:"-1"},x=n("a",{class:"header-anchor",href:"#在带命名空间的模块注册全局-action","aria-hidden":"true"},"#",-1),j={href:"https://vuex.vuejs.org/zh/guide/modules.html#%E5%9C%A8%E5%B8%A6%E5%91%BD%E5%90%8D%E7%A9%BA%E9%97%B4%E7%9A%84%E6%A8%A1%E5%9D%97%E6%B3%A8%E5%86%8C%E5%85%A8%E5%B1%80-action",target:"_blank",rel:"noopener noreferrer"},B=p(`<p>若需要在带命名空间的模块注册全局 action，你可添加 <code>root: true</code>，并将这个 action 的定义放在函数 <code>handler</code> 中。例如：</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token punctuation">{</span>
  <span class="token literal-property property">actions</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token function">someOtherAction</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span>dispatch<span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token function">dispatch</span><span class="token punctuation">(</span><span class="token string">&#39;someAction&#39;</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">modules</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">foo</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">namespaced</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>

      <span class="token literal-property property">actions</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">someAction</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token literal-property property">root</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
          <span class="token function">handler</span> <span class="token punctuation">(</span><span class="token parameter">namespacedContext<span class="token punctuation">,</span> payload</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token operator">...</span> <span class="token punctuation">}</span> <span class="token comment">// -&gt; &#39;someAction&#39;</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div>`,2),w={id:"带命名空间的绑定函数",tabindex:"-1"},M=n("a",{class:"header-anchor",href:"#带命名空间的绑定函数","aria-hidden":"true"},"#",-1),S={href:"https://vuex.vuejs.org/zh/guide/modules.html#%E5%B8%A6%E5%91%BD%E5%90%8D%E7%A9%BA%E9%97%B4%E7%9A%84%E7%BB%91%E5%AE%9A%E5%87%BD%E6%95%B0",target:"_blank",rel:"noopener noreferrer"},G=p(`<p>当使用 <code>mapState</code>, <code>mapGetters</code>, <code>mapActions</code> 和 <code>mapMutations</code> 这些函数来绑定带命名空间的模块时，写起来可能比较繁琐：</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token literal-property property">computed</span><span class="token operator">:</span> <span class="token punctuation">{</span>
  <span class="token operator">...</span><span class="token function">mapState</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token function-variable function">a</span><span class="token operator">:</span> <span class="token parameter">state</span> <span class="token operator">=&gt;</span> state<span class="token punctuation">.</span>some<span class="token punctuation">.</span>nested<span class="token punctuation">.</span>module<span class="token punctuation">.</span>a<span class="token punctuation">,</span>
    <span class="token function-variable function">b</span><span class="token operator">:</span> <span class="token parameter">state</span> <span class="token operator">=&gt;</span> state<span class="token punctuation">.</span>some<span class="token punctuation">.</span>nested<span class="token punctuation">.</span>module<span class="token punctuation">.</span>b
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token literal-property property">methods</span><span class="token operator">:</span> <span class="token punctuation">{</span>
  <span class="token operator">...</span><span class="token function">mapActions</span><span class="token punctuation">(</span><span class="token punctuation">[</span>
    <span class="token string">&#39;some/nested/module/foo&#39;</span><span class="token punctuation">,</span> <span class="token comment">// -&gt; this[&#39;some/nested/module/foo&#39;]()</span>
    <span class="token string">&#39;some/nested/module/bar&#39;</span> <span class="token comment">// -&gt; this[&#39;some/nested/module/bar&#39;]()</span>
  <span class="token punctuation">]</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre></div><p>对于这种情况，你可以将模块的空间名称字符串作为第一个参数传递给上述函数，这样所有绑定都会自动将该模块作为上下文。于是上面的例子可以简化为：</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token literal-property property">computed</span><span class="token operator">:</span> <span class="token punctuation">{</span>
  <span class="token operator">...</span><span class="token function">mapState</span><span class="token punctuation">(</span><span class="token string">&#39;some/nested/module&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
    <span class="token function-variable function">a</span><span class="token operator">:</span> <span class="token parameter">state</span> <span class="token operator">=&gt;</span> state<span class="token punctuation">.</span>a<span class="token punctuation">,</span>
    <span class="token function-variable function">b</span><span class="token operator">:</span> <span class="token parameter">state</span> <span class="token operator">=&gt;</span> state<span class="token punctuation">.</span>b
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token literal-property property">methods</span><span class="token operator">:</span> <span class="token punctuation">{</span>
  <span class="token operator">...</span><span class="token function">mapActions</span><span class="token punctuation">(</span><span class="token string">&#39;some/nested/module&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">[</span>
    <span class="token string">&#39;foo&#39;</span><span class="token punctuation">,</span> <span class="token comment">// -&gt; this.foo()</span>
    <span class="token string">&#39;bar&#39;</span> <span class="token comment">// -&gt; this.bar()</span>
  <span class="token punctuation">]</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre></div><p>而且，你可以通过使用 <code>createNamespacedHelpers</code> 创建基于某个命名空间辅助函数。它返回一个对象，对象里有新的绑定在给定命名空间值上的组件绑定辅助函数：</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> createNamespacedHelpers <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vuex&#39;</span>

<span class="token keyword">const</span> <span class="token punctuation">{</span> mapState<span class="token punctuation">,</span> mapActions <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">createNamespacedHelpers</span><span class="token punctuation">(</span><span class="token string">&#39;some/nested/module&#39;</span><span class="token punctuation">)</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">computed</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token comment">// 在 \`some/nested/module\` 中查找</span>
    <span class="token operator">...</span><span class="token function">mapState</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      <span class="token function-variable function">a</span><span class="token operator">:</span> <span class="token parameter">state</span> <span class="token operator">=&gt;</span> state<span class="token punctuation">.</span>a<span class="token punctuation">,</span>
      <span class="token function-variable function">b</span><span class="token operator">:</span> <span class="token parameter">state</span> <span class="token operator">=&gt;</span> state<span class="token punctuation">.</span>b
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">methods</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token comment">// 在 \`some/nested/module\` 中查找</span>
    <span class="token operator">...</span><span class="token function">mapActions</span><span class="token punctuation">(</span><span class="token punctuation">[</span>
      <span class="token string">&#39;foo&#39;</span><span class="token punctuation">,</span>
      <span class="token string">&#39;bar&#39;</span>
    <span class="token punctuation">]</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div>`,6),D={id:"给插件开发者的注意事项",tabindex:"-1"},V=n("a",{class:"header-anchor",href:"#给插件开发者的注意事项","aria-hidden":"true"},"#",-1),O={href:"https://vuex.vuejs.org/zh/guide/modules.html#%E7%BB%99%E6%8F%92%E4%BB%B6%E5%BC%80%E5%8F%91%E8%80%85%E7%9A%84%E6%B3%A8%E6%84%8F%E4%BA%8B%E9%A1%B9",target:"_blank",rel:"noopener noreferrer"},N={href:"https://vuex.vuejs.org/zh/guide/plugins.html",target:"_blank",rel:"noopener noreferrer"},z=p(`<div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 通过插件的参数对象得到空间名称</span>
<span class="token comment">// 然后返回 Vuex 插件函数</span>
<span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">createPlugin</span> <span class="token punctuation">(</span><span class="token parameter">options <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">store</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 把空间名字添加到插件模块的类型（type）中去</span>
    <span class="token keyword">const</span> namespace <span class="token operator">=</span> options<span class="token punctuation">.</span>namespace <span class="token operator">||</span> <span class="token string">&#39;&#39;</span>
    store<span class="token punctuation">.</span><span class="token function">dispatch</span><span class="token punctuation">(</span>namespace <span class="token operator">+</span> <span class="token string">&#39;pluginAction&#39;</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div>`,1),C={id:"模块动态注册",tabindex:"-1"},F=n("a",{class:"header-anchor",href:"#模块动态注册","aria-hidden":"true"},"#",-1),I={href:"https://vuex.vuejs.org/zh/guide/modules.html#%E6%A8%A1%E5%9D%97%E5%8A%A8%E6%80%81%E6%B3%A8%E5%86%8C",target:"_blank",rel:"noopener noreferrer"},R=p(`<p>在 store 创建<strong>之后</strong>，你可以使用 <code>store.registerModule</code> 方法注册模块：</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">import</span> Vuex <span class="token keyword">from</span> <span class="token string">&#39;vuex&#39;</span>

<span class="token keyword">const</span> store <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Vuex<span class="token punctuation">.</span>Store</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token comment">/* 选项 */</span> <span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token comment">// 注册模块 \`myModule\`</span>
store<span class="token punctuation">.</span><span class="token function">registerModule</span><span class="token punctuation">(</span><span class="token string">&#39;myModule&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
  <span class="token comment">// ...</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token comment">// 注册嵌套模块 \`nested/myModule\`</span>
store<span class="token punctuation">.</span><span class="token function">registerModule</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string">&#39;nested&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;myModule&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
  <span class="token comment">// ...</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre></div><p>之后就可以通过 <code>store.state.myModule</code> 和 <code>store.state.nested.myModule</code> 访问模块的状态。</p>`,3),q={href:"https://github.com/vuejs/vuex-router-sync",target:"_blank",rel:"noopener noreferrer"},H=n("code",null,"vuex-router-sync",-1),P=n("p",null,[s("你也可以使用 "),n("code",null,"store.unregisterModule(moduleName)"),s(" 来动态卸载模块。注意，你不能使用此方法卸载静态模块（即创建 store 时声明的模块）。")],-1),L=n("p",null,[s("注意，你可以通过 "),n("code",null,"store.hasModule(moduleName)"),s(" 方法检查该模块是否已经被注册到 store。")],-1),T={id:"保留-state",tabindex:"-1"},W=n("a",{class:"header-anchor",href:"#保留-state","aria-hidden":"true"},"#",-1),J={href:"https://vuex.vuejs.org/zh/guide/modules.html#%E4%BF%9D%E7%95%99-state",target:"_blank",rel:"noopener noreferrer"},K=n("p",null,[s("在注册一个新 module 时，你很有可能想保留过去的 state，例如从一个服务端渲染的应用保留 state。你可以通过 "),n("code",null,"preserveState"),s(" 选项将其归档："),n("code",null,"store.registerModule('a', module, { preserveState: true })"),s("。")],-1),Q=n("p",null,[s("当你设置 "),n("code",null,"preserveState: true"),s(" 时，该模块会被注册，action、mutation 和 getter 会被添加到 store 中，但是 state 不会。这里假设 store 的 state 已经包含了这个 module 的 state 并且你不希望将其覆写。")],-1),U={id:"模块重用",tabindex:"-1"},X=n("a",{class:"header-anchor",href:"#模块重用","aria-hidden":"true"},"#",-1),Y={href:"https://vuex.vuejs.org/zh/guide/modules.html#%E6%A8%A1%E5%9D%97%E9%87%8D%E7%94%A8",target:"_blank",rel:"noopener noreferrer"},Z=n("p",null,"有时我们可能需要创建一个模块的多个实例，例如：",-1),$=n("code",null,"runInNewContext",-1),nn=n("code",null,"false",-1),sn=n("code",null,"'once'",-1),an={href:"https://ssr.vuejs.org/en/structure.html#avoid-stateful-singletons",target:"_blank",rel:"noopener noreferrer"},tn=n("li",null,"在一个 store 中多次注册同一个模块",-1),pn=p(`<p>如果我们使用一个纯对象来声明模块的状态，那么这个状态对象会通过引用被共享，导致状态对象被修改时 store 或模块间数据互相污染的问题。</p><p>实际上这和 Vue 组件内的 <code>data</code> 是同样的问题。因此解决办法也是相同的——使用一个函数来声明模块状态（仅 2.3.0+ 支持）：</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> MyReusableModule <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token function-variable function">state</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">foo</span><span class="token operator">:</span> <span class="token string">&#39;bar&#39;</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token comment">// mutation, action 和 getter 等等...</span>
<span class="token punctuation">}</span>
</code></pre></div>`,3);function on(en,cn){const a=e("ExternalLinkIcon");return c(),l("div",null,[r,n("h3",i,[k,s(),n("a",d,[s("#"),t(a)]),s("模块的局部状态")]),m,n("h3",g,[h,s(),n("a",y,[s("#"),t(a)]),s("命名空间")]),_,n("h4",f,[v,s(),n("a",E,[s("#"),t(a)]),s("在带命名空间的模块内访问全局内容（Global Assets）")]),A,n("h4",b,[x,s(),n("a",j,[s("#"),t(a)]),s("在带命名空间的模块注册全局 action")]),B,n("h4",w,[M,s(),n("a",S,[s("#"),t(a)]),s("带命名空间的绑定函数")]),G,n("h4",D,[V,s(),n("a",O,[s("#"),t(a)]),s("给插件开发者的注意事项")]),n("p",null,[s("如果你开发的"),n("a",N,[s("插件（Plugin）"),t(a)]),s("提供了模块并允许用户将其添加到 Vuex store，可能需要考虑模块的空间名称问题。对于这种情况，你可以通过插件的参数对象来允许用户指定空间名称：")]),z,n("h3",C,[F,s(),n("a",I,[s("#"),t(a)]),s("模块动态注册")]),R,n("p",null,[s("模块动态注册功能使得其他 Vue 插件可以通过在 store 中附加新模块的方式来使用 Vuex 管理状态。例如，"),n("a",q,[H,s(" (opens new window)"),t(a)]),s("插件就是通过动态注册模块将 vue-router 和 vuex 结合在一起，实现应用的路由状态管理。")]),P,L,n("h4",T,[W,s(),n("a",J,[s("#"),t(a)]),s("保留 state")]),K,Q,n("h3",U,[X,s(),n("a",Y,[s("#"),t(a)]),s("模块重用")]),Z,n("ul",null,[n("li",null,[s("创建多个 store，他们公用同一个模块 (例如当 "),$,s(" 选项是 "),nn,s(" 或 "),sn,s(" 时，为了"),n("a",an,[s("在服务端渲染中避免有状态的单例 (opens new window)"),t(a)]),s(")")]),tn]),pn])}const un=o(u,[["render",on],["__file","vuex_d.html.vue"]]);export{un as default};
