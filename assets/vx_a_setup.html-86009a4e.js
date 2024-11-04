import{_ as o,M as e,p as c,q as u,R as n,t as s,N as t,a1 as p}from"./framework-d81ad7e5.js";const l={},i=n("ul",null,[n("li",null,"vue 2.0 options api"),n("li",null,"vue 3.0 composition api")],-1),r={href:"https://vue3js.cn/vue-composition-api/",target:"_blank",rel:"noopener noreferrer"},k={href:"https://v3.cn.vuejs.org/",target:"_blank",rel:"noopener noreferrer"},d=p(`<h3 id="setup" tabindex="-1"><a class="header-anchor" href="#setup" aria-hidden="true">#</a> <code>setup</code></h3><ol><li><code>setup</code> 函数是一个新的组件选项。作为在组件内使用 Composition API 的入口点。</li><li><code>setup</code> 选项是一个接收 <code>props 和 context</code> 的函数</li></ol><ul><li><p><strong>调用时机</strong></p><p>创建组件实例，然后初始化 <code>props</code> ，紧接着就调用<code>setup</code> 函数。从生命周期钩子的视角来看，它会在 <code>beforeCreate</code> 钩子之前被调用</p></li><li><p><strong>模板中使用</strong></p><p>如果 <code>setup</code> 返回一个对象，则对象的属性将会被合并到组件模板的渲染上下文：</p><div class="language-html" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span>{{ count }} {{ object.foo }}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
  <span class="token keyword">import</span> <span class="token punctuation">{</span> ref<span class="token punctuation">,</span> reactive <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span>

  <span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
    <span class="token function">setup</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">const</span> count <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span>
      <span class="token keyword">const</span> object <span class="token operator">=</span> <span class="token function">reactive</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">foo</span><span class="token operator">:</span> <span class="token string">&#39;bar&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">)</span>

      <span class="token comment">// 暴露给模板</span>
      <span class="token keyword">return</span> <span class="token punctuation">{</span>
        count<span class="token punctuation">,</span>
        object<span class="token punctuation">,</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><p>注意 <code>setup</code> 返回的 ref 在模板中会自动解开，不需要写 <code>.value</code>。</p></li></ul><h2 id="setup-参数" tabindex="-1"><a class="header-anchor" href="#setup-参数" aria-hidden="true">#</a> <code>setup</code> <strong>参数</strong></h2><p>该函数接收 <code>props</code> 作为其第一个参数：</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">props</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">name</span><span class="token operator">:</span> String<span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token function">setup</span><span class="token punctuation">(</span><span class="token parameter">props</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>props<span class="token punctuation">.</span>name<span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
</code></pre></div><p>注意 <code>props</code> 对象是响应式的，<code>watchEffect</code> 或 <code>watch</code> 会观察和响应 <code>props</code> 的更新：</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">props</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">name</span><span class="token operator">:</span> String<span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token function">setup</span><span class="token punctuation">(</span><span class="token parameter">props</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">watchEffect</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">name is: </span><span class="token template-punctuation string">\`</span></span> <span class="token operator">+</span> props<span class="token punctuation">.</span>name<span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>

    <span class="token function">watch</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> props<span class="token punctuation">.</span>name<span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">newValue</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
          console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>newValue<span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
</code></pre></div><p>然而<strong>不要</strong>解构 <code>props</code> 对象，那样会使其失去响应性：</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">props</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">name</span><span class="token operator">:</span> String<span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token function">setup</span><span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span> name <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">watchEffect</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">name is: </span><span class="token template-punctuation string">\`</span></span> <span class="token operator">+</span> name<span class="token punctuation">)</span> <span class="token comment">// Will not be reactive!</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>



  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>


<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">components</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token string-property property">&#39;mbt&#39;</span><span class="token operator">:</span>MyButton <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">props</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">btnm</span><span class="token operator">:</span> String
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;Menu&#39;</span><span class="token punctuation">,</span>
  <span class="token function">setup</span><span class="token punctuation">(</span><span class="token parameter">props<span class="token punctuation">,</span> ctx</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>

      <span class="token function">watch</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> props<span class="token punctuation">.</span>btnm<span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">newValue</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
          console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>newValue<span class="token punctuation">)</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><p>在开发过程中，<code>props</code> 对象对用户空间代码是不可变的（用户代码尝试修改 <code>props</code> 时会触发警告）。</p><h3 id="props-context" tabindex="-1"><a class="header-anchor" href="#props-context" aria-hidden="true">#</a> <code>props</code> <code>context</code></h3><ul><li><p>第二个参数提供了一个上下文对象，从原来 2.x 中 <code>this</code> 选择性地暴露了一些 property。</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> MyComponent <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token function">setup</span><span class="token punctuation">(</span><span class="token parameter">props<span class="token punctuation">,</span> context</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    context<span class="token punctuation">.</span>attrs
    context<span class="token punctuation">.</span>slots
    context<span class="token punctuation">.</span>emit
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
</code></pre></div><p><code>attrs</code> 和 <code>slots</code> 都是内部组件实例上对应项的代理，可以确保在更新后仍然是最新值。所以可以解构，无需担心后面访问到过期的值：</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> MyComponent <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token function">setup</span><span class="token punctuation">(</span><span class="token parameter">props<span class="token punctuation">,</span> <span class="token punctuation">{</span> attrs <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 一个可能之后回调用的签名</span>
    <span class="token keyword">function</span> <span class="token function">onClick</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>attrs<span class="token punctuation">.</span>foo<span class="token punctuation">)</span> <span class="token comment">// 一定是最新的引用，没有丢失响应性</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
</code></pre></div><p>出于一些原因将 <code>props</code> 作为第一个参数，而不是包含在上下文中：</p><ul><li>组件使用 <code>props</code> 的场景更多，有时候甚至只使用 <code>props</code></li><li>将 <code>props</code> 独立出来作为第一个参数，可以让 TypeScript 对 <code>props</code> 单独做类型推导，不会和上下文中的其他属性相混淆。这也使得 <code>setup</code> 、 <code>render</code> 和其他使用了 TSX 的函数式组件的签名保持一致。</li></ul></li></ul><h3 id="this的用法" tabindex="-1"><a class="header-anchor" href="#this的用法" aria-hidden="true">#</a> this的用法</h3><ul><li><strong>getCurrentInstance</strong><strong>this 在 setup() 中不可用</strong>。由于 <code>setup()</code> 在解析 2.x 选项前被调用，<code>setup()</code> 中的 <code>this</code> 将与 2.x 选项中的 <code>this</code> 完全不同。同时在 <code>setup()</code> 和 2.x 选项中使用 <code>this</code> 时将造成混乱。在 <code>setup()</code> 中避免这种情况的另一个原因是：这对于初学者来说，混淆这两种情况的 <code>this</code> 是非常常见的错误：</li></ul><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> getCurrentInstance <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span>

<span class="token function">setup</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
<span class="token comment">// 获取当前上下文对象</span>
  <span class="token keyword">const</span> th <span class="token operator">=</span> <span class="token function">getCurrentInstance</span><span class="token punctuation">(</span><span class="token punctuation">)</span>


  <span class="token keyword">function</span> <span class="token function">onClick</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span> <span class="token comment">// 这里 \`this\` 与你期望的不一样！</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><ul><li><strong>类型定义</strong></li></ul><h3 id="definecomponent" tabindex="-1"><a class="header-anchor" href="#definecomponent" aria-hidden="true">#</a> <code>defineComponent</code></h3><div class="language-typescript" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">interface</span> <span class="token class-name">Data</span> <span class="token punctuation">{</span>
  <span class="token punctuation">[</span>key<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">]</span><span class="token operator">:</span> <span class="token builtin">unknown</span>
<span class="token punctuation">}</span>

<span class="token keyword">interface</span> <span class="token class-name">SetupContext</span> <span class="token punctuation">{</span>
  attrs<span class="token operator">:</span> Data
  slots<span class="token operator">:</span> Slots
  <span class="token function-variable function">emit</span><span class="token operator">:</span> <span class="token punctuation">(</span>event<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">,</span> <span class="token operator">...</span>args<span class="token operator">:</span> <span class="token builtin">unknown</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">void</span>
<span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token function">setup</span><span class="token punctuation">(</span>props<span class="token operator">:</span> Data<span class="token punctuation">,</span> context<span class="token operator">:</span> SetupContext<span class="token punctuation">)</span><span class="token operator">:</span> Data
</code></pre></div><p>提示</p>`,20),g=n("code",null,"setup()",-1),m={href:"https://vue3js.cn/vue-composition-api/#defineComponent",target:"_blank",rel:"noopener noreferrer"},f=n("code",null,"defineComponent",-1),y=p(`<hr><h2 id="生命周期钩子hooks" tabindex="-1"><a class="header-anchor" href="#生命周期钩子hooks" aria-hidden="true">#</a> 生命周期钩子Hooks</h2><ul><li>可以直接导入 <code>onXXX</code> 一族的函数来注册生命周期钩子：</li></ul><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> onMounted<span class="token punctuation">,</span> onUpdated<span class="token punctuation">,</span> onUnmounted <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span>

<span class="token keyword">const</span> MyComponent <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token function">setup</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">onMounted</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;mounted!&#39;</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token function">onUpdated</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;updated!&#39;</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token function">onUnmounted</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;unmounted!&#39;</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
</code></pre></div><p>这些生命周期钩子注册函数只能在 <code>setup()</code> 期间同步使用， 因为它们依赖于内部的全局状态来定位当前组件实例（正在调用 <code>setup()</code> 的组件实例）, 不在当前组件下调用这些函数会抛出一个错误。</p><p>组件实例上下文也是在生命周期钩子同步执行期间设置的，因此，在卸载组件时，在生命周期钩子内部同步创建的侦听器和计算状态也将自动删除。</p><ul><li><p><strong>与 2.x 版本生命周期相对应的组合式 API</strong></p><ul><li><code>beforeCreate</code> -&gt; 使用 <code>setup()</code></li><li><code>created</code> -&gt; 使用 <code>setup()</code></li><li><code>beforeMount</code> -&gt; <code>onBeforeMount</code></li><li><code>mounted</code> -&gt; <code>onMounted</code></li><li><code>beforeUpdate</code> -&gt; <code>onBeforeUpdate</code></li><li><code>updated</code> -&gt; <code>onUpdated</code></li><li><code>beforeDestroy</code> -&gt; <code>onBeforeUnmount</code></li><li><code>destroyed</code> -&gt; <code>onUnmounted</code></li><li><code>errorCaptured</code> -&gt; <code>onErrorCaptured</code></li></ul></li><li><p><strong>新增的钩子函数</strong></p><p>除了和 2.x 生命周期等效项之外，组合式 API 还提供了以下调试钩子函数：</p><ul><li><code>onRenderTracked</code></li><li><code>onRenderTriggered</code></li></ul><p>两个钩子函数都接收一个 <code>DebuggerEvent</code>，与 <code>watchEffect</code> 参数选项中的 <code>onTrack</code> 和 <code>onTrigger</code> 类似：</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token function">onRenderTriggered</span><span class="token punctuation">(</span><span class="token parameter">e</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">debugger</span>
    <span class="token comment">// 检查哪个依赖性导致组件重新渲染</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
</code></pre></div></li></ul><h3 id="contextparam" tabindex="-1"><a class="header-anchor" href="#contextparam" aria-hidden="true">#</a> contextParam</h3><ul><li><code>setup context</code></li><li><code>emit</code> 子组件触发父组件 <ul><li><code>emits:[&#39;emit_Method&#39;]</code> 注册方法</li></ul></li></ul><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// parent</span>
<span class="token comment">/*
&lt;template&gt;
    &lt;HelloWorld :msg=&#39;state&#39; @plus=&#39;plusParent&#39; /&gt;
&lt;/template&gt;
*/</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> ref <span class="token punctuation">,</span>onMounted <span class="token punctuation">,</span>onBeforeMount<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span>
<span class="token keyword">import</span> HelloWorld <span class="token keyword">from</span> <span class="token string">&#39;@/components/HelloWorld.vue&#39;</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&quot;App&quot;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">components</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    HelloWorld
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token function">setup</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> state <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span>
    <span class="token keyword">const</span> <span class="token function-variable function">plusParent</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">num</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      state<span class="token punctuation">.</span>value <span class="token operator">+=</span> num<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span>  plusParent <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token comment">// -------child</span>
<span class="token punctuation">{</span><span class="token punctuation">{</span> msg <span class="token punctuation">}</span><span class="token punctuation">}</span>
<span class="token comment">//  &lt;button  @click=&#39;plus&#39;&gt; add&lt;/button&gt;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;HelloWorld&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">props</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">msg</span><span class="token operator">:</span> Number
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">emits</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;plus&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token function">setup</span><span class="token punctuation">(</span><span class="token parameter">props<span class="token punctuation">,</span> <span class="token punctuation">{</span> emit <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>

    <span class="token keyword">const</span> <span class="token function-variable function">plus</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token comment">// this.$emit() -- 2.0 </span>
      <span class="token function">emit</span><span class="token punctuation">(</span><span class="token string">&#39;plus&#39;</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span>  plus <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div>`,10);function h(v,w){const a=e("ExternalLinkIcon");return c(),u("div",null,[i,n("p",null,[n("a",r,[s("composition-api"),t(a)])]),n("p",null,[n("a",k,[s("vue3中文-api"),t(a)])]),d,n("p",null,[s("为了获得传递给 "),g,s(" 参数的类型推断，需要使用 "),n("a",m,[f,t(a)]),s("。")]),y])}const b=o(l,[["render",h],["__file","vx_a_setup.html.vue"]]);export{b as default};
