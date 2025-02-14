import{_ as n,p as s,q as a,a1 as t}from"./framework-d81ad7e5.js";const p={},o=t(`<h3 id="hooks思想" tabindex="-1"><a class="header-anchor" href="#hooks思想" aria-hidden="true">#</a> hooks思想</h3><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code>
<span class="token comment">//1.将ref函数从vue当中导入</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> ref <span class="token punctuation">,</span>reactive <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;vue&quot;</span><span class="token punctuation">;</span>
<span class="token comment">// initVal 初始值</span>
<span class="token keyword">const</span> <span class="token function-variable function">useCount</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">initVal</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token comment">//2.把一个值类型 进行ref的包装</span>
  <span class="token keyword">const</span> pages <span class="token operator">=</span> <span class="token function">reactive</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">const</span> count <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span>initVal<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token comment">// 4.函数</span>
  <span class="token keyword">const</span> <span class="token function-variable function">submit</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">val</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">typeof</span> val <span class="token operator">===</span> <span class="token string">&quot;number&quot;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      count<span class="token punctuation">.</span>value <span class="token operator">+=</span> val<span class="token punctuation">;</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
      console<span class="token punctuation">.</span><span class="token function">error</span><span class="token punctuation">(</span><span class="token string">&quot;val必须是一个数字&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>
  <span class="token keyword">return</span> <span class="token punctuation">[</span>count<span class="token punctuation">,</span> submit<span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>


<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token function">setup</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> <span class="token punctuation">[</span>count<span class="token punctuation">,</span> submit<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useCount</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">// 3.把想在外面进行的渲染的数据，通过return导出</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span>
      count<span class="token punctuation">,</span>
      submit<span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span> 
</code></pre></div><h3 id="methods" tabindex="-1"><a class="header-anchor" href="#methods" aria-hidden="true">#</a> methods</h3><ul><li><strong>setup中执行方法</strong></li></ul><blockquote><p>方式一</p></blockquote><ul><li>以reactive定义响应式数据的方式来定义方法</li></ul><div class="language-html" data-ext="html"><pre class="language-html"><code>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> <span class="token punctuation">{</span>ref<span class="token punctuation">,</span> reactive<span class="token punctuation">,</span>toRefs<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;vue&quot;</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&quot;test&quot;</span><span class="token punctuation">,</span>
  <span class="token function">setup</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>

    <span class="token keyword">const</span> str <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token string">&#39;inline&#39;</span><span class="token punctuation">)</span>

    <span class="token keyword">const</span> fun <span class="token operator">=</span> <span class="token function">reactive</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      <span class="token function">fun1</span><span class="token punctuation">(</span><span class="token parameter">data</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>str<span class="token punctuation">.</span>value<span class="token punctuation">)</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">fun2</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token function">fun2</span><span class="token punctuation">(</span><span class="token parameter">data</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;我是fun2&#39;</span><span class="token punctuation">)</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>

    <span class="token keyword">return</span><span class="token punctuation">{</span>
      <span class="token operator">...</span><span class="token function">toRefs</span><span class="token punctuation">(</span>fun<span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>fun1(&#39;abccd&#39;)<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>abcdd<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">&gt;</span></span>

</code></pre></div><ul><li><p>通过点击事件将值传给<code>fun1</code>，<code>fun1</code>接收到后在传给<code>fun2</code></p></li><li><p>这里<strong>用<code>this.fun2()</code>的</strong>方式去调用<code>fun2</code>，为什么这里用<code>this</code>可以正常执行不会报<code>undefind</code></p></li><li><p>因为这里的<code>this非彼this</code>，Vue2里的<code>this</code>是<strong>实例</strong>, 这里的<code>this</code>是对象</p></li></ul><h4 id="避免了将功能逻辑都堆叠在setup的问题-可以将独立的功能写成单独的函数" tabindex="-1"><a class="header-anchor" href="#避免了将功能逻辑都堆叠在setup的问题-可以将独立的功能写成单独的函数" aria-hidden="true">#</a> 避免了将功能逻辑都堆叠在setup的问题，可以将独立的功能写成单独的函数</h4><ul><li><strong>setup外写了fun() login()两个功能函数，并在setup内分别调用</strong></li></ul><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code>
<span class="token keyword">import</span> <span class="token punctuation">{</span>ref<span class="token punctuation">,</span> reactive<span class="token punctuation">,</span>toRefs<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;vue&quot;</span><span class="token punctuation">;</span>

  <span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&quot;test&quot;</span><span class="token punctuation">,</span>
    <span class="token function">setup</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>

      <span class="token keyword">const</span> test1 <span class="token operator">=</span> <span class="token function">fun</span><span class="token punctuation">(</span><span class="token punctuation">)</span>      <span class="token comment">// 如果函数返回参数过多，可以赋值给变量并用扩展运算符暴露给组件的其余部分</span>

      <span class="token keyword">const</span> <span class="token punctuation">{</span> test <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">login</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// 也可单个接收</span>

      <span class="token keyword">return</span><span class="token punctuation">{</span>
        <span class="token operator">...</span><span class="token function">toRefs</span><span class="token punctuation">(</span>test1<span class="token punctuation">)</span><span class="token punctuation">,</span>
        test<span class="token punctuation">,</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>

    <span class="token comment">// 功能1</span>
    <span class="token keyword">function</span> <span class="token function">fun</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">let</span> str <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token string">&#39;我是功能1&#39;</span><span class="token punctuation">)</span>
    <span class="token keyword">function</span> <span class="token function">fun1</span><span class="token punctuation">(</span><span class="token parameter">data</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>str<span class="token punctuation">.</span>value<span class="token punctuation">)</span>
        <span class="token function">fun2</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">function</span> <span class="token function">fun2</span><span class="token punctuation">(</span><span class="token parameter">data</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span><span class="token punctuation">{</span>
        fun1<span class="token punctuation">,</span>
        fun2<span class="token punctuation">,</span>
    <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token comment">// 功能2</span>
    <span class="token keyword">function</span> <span class="token function">login</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>

        <span class="token keyword">const</span> obj <span class="token operator">=</span> <span class="token function">reactive</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
            <span class="token literal-property property">msg</span><span class="token operator">:</span><span class="token string">&#39;我是功能2&#39;</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span>

        <span class="token keyword">function</span> <span class="token function">test</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>obj<span class="token punctuation">.</span>msg<span class="token punctuation">)</span>
        <span class="token punctuation">}</span>

        <span class="token keyword">return</span><span class="token punctuation">{</span> test  <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">&gt;</span>
</code></pre></div><h3 id="包裹对象参数方法" tabindex="-1"><a class="header-anchor" href="#包裹对象参数方法" aria-hidden="true">#</a> 包裹对象参数方法</h3><ul><li><p>定义一个 <strong>reactive</strong>响应式对象，赋值给<strong>login</strong>变量，这个响应式对象内有我们登录需要的参数、验证和方法</p></li><li><p>这里我们全部放在 <strong>login</strong>这个响应式对象内然后用<strong>toRefs</strong>及扩展运算符暴露出去</p></li></ul><div class="language-html" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> <span class="token punctuation">{</span>ref<span class="token punctuation">,</span> reactive<span class="token punctuation">,</span>toRefs<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;vue&quot;</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&quot;test&quot;</span><span class="token punctuation">,</span>
  <span class="token function">setup</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">const</span> login <span class="token operator">=</span> <span class="token function">reactive</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      <span class="token literal-property property">param</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">username</span><span class="token operator">:</span> <span class="token string">&#39;123&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">password</span><span class="token operator">:</span> <span class="token string">&#39;123456&#39;</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token literal-property property">rules</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">username</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">{</span> <span class="token literal-property property">required</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token literal-property property">message</span><span class="token operator">:</span> <span class="token string">&#39;请输入用户名&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">trigger</span><span class="token operator">:</span> <span class="token string">&#39;blur&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token literal-property property">password</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">{</span> <span class="token literal-property property">required</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token literal-property property">message</span><span class="token operator">:</span> <span class="token string">&#39;请输入密码&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">trigger</span><span class="token operator">:</span> <span class="token string">&#39;blur&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token function">login</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>param<span class="token punctuation">.</span>username <span class="token operator">=</span> <span class="token string">&#39;inline&#39;</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>param<span class="token punctuation">.</span>password <span class="token operator">=</span> <span class="token string">&#39;123456&#39;</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;成功登录！&#39;</span><span class="token punctuation">)</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>

    <span class="token keyword">return</span><span class="token punctuation">{</span>
      <span class="token operator">...</span><span class="token function">toRefs</span><span class="token punctuation">(</span>login<span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
 
<span class="token comment">&lt;!-- ###使用一下 --&gt;</span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>text<span class="token punctuation">&quot;</span></span> <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>param.username<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>password<span class="token punctuation">&quot;</span></span> <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>param.password<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>login<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>登录<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">&gt;</span></span>

<span class="token comment">&lt;!-- 正常执行， 将一个功能的所有方法和相关参数写在一个reactive对象内
 --&gt;</span>
</code></pre></div><h3 id="setup-语法糖" tabindex="-1"><a class="header-anchor" href="#setup-语法糖" aria-hidden="true">#</a> setup 语法糖</h3><div class="language-html" data-ext="html"><pre class="language-html"><code><span class="token comment">&lt;!-- 导入的组件无需注册，可直接使用  --&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
  <span class="token comment">// 导入的组件也可以直接在模板中使用</span>
  <span class="token keyword">import</span> Foo <span class="token keyword">from</span> <span class="token string">&#39;./Foo.vue&#39;</span>
  <span class="token keyword">import</span> <span class="token punctuation">{</span> ref <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span>

  <span class="token comment">// 编写合成API代码，就像在正常设置中一样</span>
  <span class="token comment">// 不需要手动返回所有内容</span>
  <span class="token keyword">const</span> count <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span>
  <span class="token keyword">const</span> <span class="token function-variable function">inc</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    count<span class="token punctuation">.</span>value<span class="token operator">++</span>
  <span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Foo</span> <span class="token attr-name">:count</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>count<span class="token punctuation">&quot;</span></span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>inc<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>


<span class="token comment">&lt;!-- 发布Props和Emits --&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">

  <span class="token keyword">const</span> props <span class="token operator">=</span> <span class="token function">defineProps</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">foo</span><span class="token operator">:</span> String
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
  
  <span class="token keyword">const</span> emit <span class="token operator">=</span> <span class="token function">defineEmits</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string">&#39;update&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;delete&#39;</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><h3 id="setup使用组件" tabindex="-1"><a class="header-anchor" href="#setup使用组件" aria-hidden="true">#</a> setup使用组件</h3><div class="language-vue" data-ext="vue"><pre class="language-vue"><code>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> MyComponent <span class="token keyword">from</span> <span class="token string">&#39;./MyComponent.vue&#39;</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>MyComponent</span> <span class="token punctuation">/&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><h3 id="使用自定义指令​" tabindex="-1"><a class="header-anchor" href="#使用自定义指令​" aria-hidden="true">#</a> 使用自定义指令​</h3><p>全局注册的自定义指令将正常工作。本地的自定义指令在 <code>&lt;script setup&gt;</code> 中不需要显式注册，但他们必须遵循 <strong>vNameOfDirective</strong> 这样的命名规范：</p><div class="language-vue" data-ext="vue"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">const</span> vMyDirective <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token function-variable function">beforeMount</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token parameter">el</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token comment">// 在元素上做些操作</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h1</span> <span class="token attr-name">v-my-directive</span><span class="token punctuation">&gt;</span></span>This is a Heading<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h1</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>

</code></pre></div><p>如果指令是从别处导入的，可以通过重命名来使其符合命名规范：</p><div class="language-vue" data-ext="vue"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> <span class="token punctuation">{</span> myDirective <span class="token keyword">as</span> vMyDirective <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;./MyDirective.js&#39;</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre></div>`,23),c=[o];function e(u,l){return s(),a("div",null,c)}const i=n(p,[["render",e],["__file","vx_a_setupa.html.vue"]]);export{i as default};
