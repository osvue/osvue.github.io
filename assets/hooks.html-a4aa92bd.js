import{_ as n,p as s,q as a,a1 as t}from"./framework-d81ad7e5.js";const p={},o=t(`<h4 id="系统运行到某一时期时-会调用被注册到该时机的回调函数。" tabindex="-1"><a class="header-anchor" href="#系统运行到某一时期时-会调用被注册到该时机的回调函数。" aria-hidden="true">#</a> 系统运行到某一时期时，会调用被注册到该时机的回调函数。</h4><p>比较常见的钩子有：windows 系统的钩子能监听到系统的各种事件，浏览器提供的 onload 或 addEventListener 能注册在浏览器各种时机被调用的方法。</p><p>以上这些，都可以被称一声 &quot;hook&quot;。</p><h3 id="函数式组件" tabindex="-1"><a class="header-anchor" href="#函数式组件" aria-hidden="true">#</a> 函数式组件</h3><h4 id="更好的状态复用" tabindex="-1"><a class="header-anchor" href="#更好的状态复用" aria-hidden="true">#</a> 更好的状态复用</h4><blockquote><p>怼的就是你，<code>mixin</code> ！</p></blockquote><p>在 <code>class</code> 组件模式下，状态逻辑的复用是一件困难的事情。</p><p>假设有如下需求：</p><blockquote><p>当组件实例创建时，需要创建一个 <code>state</code> 属性：<code>name</code>，并随机给此 <code>name</code> 属性附一个初始值。除此之外，还得提供一个 <code>setName</code> 方法。你可以在组件其他地方开销和修改此状态属性。</p></blockquote><blockquote><p>更重要的是: 这个逻辑要可以复用，在各种业务组件里复用这个逻辑。</p></blockquote><p>在拥有 <code>Hooks</code> 之前，我首先会想到的解决方案一定是 <code>mixin</code>。</p><p>代码如下：（此示例采用 <code>vue2 mixin</code> 写法 ）</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 混入文件：name-mixin.js</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token function">genRandomName</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// 假装它能生成随机的名字</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">methods</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token function">setName</span><span class="token punctuation">(</span><span class="token parameter">name</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> name
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
复制代码
<span class="token comment">// 组件：my-component.vue</span>
<span class="token operator">&lt;</span>template<span class="token operator">&gt;</span>
  <span class="token operator">&lt;</span>div<span class="token operator">&gt;</span><span class="token punctuation">{</span><span class="token punctuation">{</span> name <span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span>template<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span>script<span class="token operator">&gt;</span>
<span class="token keyword">import</span> nameMixin <span class="token keyword">from</span> <span class="token string">&#39;./name-mixin&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">mixins</span><span class="token operator">:</span> <span class="token punctuation">[</span>nameMixin<span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token comment">// 通过mixins, 你可以直接获得 nameMixin 中所定义的状态、方法、生命周期中的事件等</span>
  <span class="token function">mounted</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setName</span><span class="token punctuation">(</span><span class="token string">&#39;Tom&#39;</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">3000</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token operator">&lt;</span>script<span class="token operator">&gt;</span>
</code></pre></div><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">mixins</span><span class="token operator">:</span> <span class="token punctuation">[</span> a<span class="token punctuation">,</span> b<span class="token punctuation">,</span> c<span class="token punctuation">,</span> d<span class="token punctuation">,</span> e<span class="token punctuation">,</span> f<span class="token punctuation">,</span> g <span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token comment">// 当然，这只是表示它混入了很多能力</span>
  <span class="token function">mounted</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>name<span class="token punctuation">)</span>
    <span class="token comment">// mmp!这个 this.name 来自于谁？我难道要一个个混入看实现？</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span> 
</code></pre></div><h3 id="自定义hooks" tabindex="-1"><a class="header-anchor" href="#自定义hooks" aria-hidden="true">#</a> 自定义hooks</h3><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">import</span> React <span class="token keyword">from</span> <span class="token string">&#39;react&#39;</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">const</span> <span class="token function-variable function">useName</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token comment">// 这个 useMemo 很关键</span>
  <span class="token keyword">const</span> randomName <span class="token operator">=</span> React<span class="token punctuation">.</span><span class="token function">useMemo</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token function">genRandomName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">const</span> <span class="token punctuation">[</span> name<span class="token punctuation">,</span> setName <span class="token punctuation">]</span> <span class="token operator">=</span> React<span class="token punctuation">.</span><span class="token function">useState</span><span class="token punctuation">(</span>randomName<span class="token punctuation">)</span>

  <span class="token keyword">return</span> <span class="token punctuation">{</span>
    name<span class="token punctuation">,</span>
    setName
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><h3 id="ts-hook" tabindex="-1"><a class="header-anchor" href="#ts-hook" aria-hidden="true">#</a> ts hook</h3><ul><li><strong>在组件中可以直接使用过import {useStore} from &#39;vuex&#39; 或者使用import store from &#39;@/store&#39;</strong></li></ul><div class="language-typescript" data-ext="ts"><pre class="language-typescript"><code><span class="token doc-comment comment">/**
 * 
 *  定义 hooks
 */</span>

<span class="token keyword">import</span> <span class="token punctuation">{</span> <span class="token constant">SET_TODO</span> <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;@/store/actionTypes&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> <span class="token constant">FINISHIED_STATUS</span><span class="token punctuation">,</span> IItodo <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;@/typings&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> Store<span class="token punctuation">,</span> useStore <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;vuex&quot;</span><span class="token punctuation">;</span>

<span class="token keyword">interface</span> <span class="token class-name">UseTodo</span> <span class="token punctuation">{</span>

    <span class="token function-variable function">setTodo</span><span class="token operator">:</span> <span class="token punctuation">(</span>value<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">void</span><span class="token punctuation">;</span>
    <span class="token function-variable function">getTodo</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">void</span><span class="token punctuation">;</span>
    <span class="token function-variable function">setTodoList</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">void</span><span class="token punctuation">;</span>
    <span class="token function-variable function">removeTodo</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">void</span><span class="token punctuation">;</span>
    <span class="token function-variable function">updateTodo</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">void</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>


<span class="token keyword">function</span> <span class="token function">useTodo</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> UseTodo <span class="token punctuation">{</span>

   <span class="token keyword">const</span> store<span class="token operator">:</span> Store<span class="token operator">&lt;</span><span class="token builtin">any</span><span class="token operator">&gt;</span> <span class="token operator">=</span> <span class="token function">useStore</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token doc-comment comment">/**
     * 组装参数
     * 调用 store  dispatch --&gt; action ---&gt; mutation-- &gt; state ---&gt; render
     * <span class="token keyword">@param</span> <span class="token parameter">value</span> 
     */</span>
    <span class="token keyword">function</span> <span class="token function">setTodo</span><span class="token punctuation">(</span>value<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span> <span class="token punctuation">{</span>

        <span class="token keyword">const</span> todo<span class="token operator">:</span> IItodo <span class="token operator">=</span> <span class="token punctuation">{</span>
            id<span class="token operator">:</span> <span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getTime</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
            content<span class="token operator">:</span> value<span class="token punctuation">,</span>
            status<span class="token operator">:</span> <span class="token constant">FINISHIED_STATUS</span><span class="token punctuation">.</span><span class="token constant">NO</span>
        <span class="token punctuation">}</span>
        <span class="token comment">//  调用 vuex store </span>
        <span class="token comment">// store.dispatch(&#39;&#39;,todo)</span>
       
        store<span class="token punctuation">.</span><span class="token function">dispatch</span><span class="token punctuation">(</span><span class="token constant">SET_TODO</span><span class="token punctuation">,</span> todo<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">function</span> <span class="token function">getTodo</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>

    <span class="token punctuation">}</span>

    <span class="token keyword">function</span> <span class="token function">setTodoList</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>

    <span class="token punctuation">}</span>

    <span class="token keyword">function</span> <span class="token function">removeTodo</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>

    <span class="token punctuation">}</span>

    <span class="token keyword">function</span> <span class="token function">updateTodo</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>

    <span class="token punctuation">}</span>

    <span class="token keyword">return</span> <span class="token punctuation">{</span>
        setTodo<span class="token punctuation">,</span> getTodo<span class="token punctuation">,</span> setTodoList<span class="token punctuation">,</span> removeTodo<span class="token punctuation">,</span> updateTodo
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token punctuation">{</span>
    UseTodo
<span class="token punctuation">}</span>
</code></pre></div>`,19),e=[o];function c(u,l){return s(),a("div",null,e)}const i=n(p,[["render",c],["__file","hooks.html.vue"]]);export{i as default};
