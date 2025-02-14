import{_ as n,p as s,q as a,a1 as t}from"./framework-d81ad7e5.js";const p={},o=t(`<h4 id="vue-自定义指令有全局注册和局部注册两种方式。" tabindex="-1"><a class="header-anchor" href="#vue-自定义指令有全局注册和局部注册两种方式。" aria-hidden="true">#</a> Vue 自定义指令有全局注册和局部注册两种方式。</h4><ol><li>通过 <code>Vue.directive( id, [definition] )</code> 方式注册全局指令。然后在入口文件中进行 <code>Vue.use() </code>调用。</li></ol><ul><li>通过<code>Vue.directive(id,definition)</code>方法可以注册一个全局自定义指令，该方法可以接收两个参数：指令ID和定义对象。 <ul><li>指令ID是指令的唯一标识，定义对象是定义的指令的钩子函数</li></ul></li></ul><h3 id="注册指令" tabindex="-1"><a class="header-anchor" href="#注册指令" aria-hidden="true">#</a> 注册指令</h3><ul><li>批量注册指令，新建 <code>directives/index.js</code> 文件</li></ul><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">import</span> copy <span class="token keyword">from</span> <span class="token string">&#39;./copy&#39;</span>
<span class="token keyword">import</span> longpress <span class="token keyword">from</span> <span class="token string">&#39;./longpress&#39;</span>
<span class="token comment">// 自定义指令</span>
<span class="token keyword">const</span> directives <span class="token operator">=</span> <span class="token punctuation">{</span>
  copy<span class="token punctuation">,</span>
  longpress<span class="token punctuation">,</span>
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token function">install</span><span class="token punctuation">(</span><span class="token parameter">Vue</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    Object<span class="token punctuation">.</span><span class="token function">keys</span><span class="token punctuation">(</span>directives<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">key</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      Vue<span class="token punctuation">.</span><span class="token function">directive</span><span class="token punctuation">(</span>key<span class="token punctuation">,</span> directives<span class="token punctuation">[</span>key<span class="token punctuation">]</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
</code></pre></div><ul><li>在 <code>main.js</code> 引入并调用</li></ul><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">import</span> Vue <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span>
<span class="token keyword">import</span> Directives <span class="token keyword">from</span> <span class="token string">&#39;./JS/directives&#39;</span>
Vue<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>Directives<span class="token punctuation">)</span>
</code></pre></div><p>指令定义函数提供了几个钩子函数（可选）：</p><h3 id="指令定义对象的钩子函数" tabindex="-1"><a class="header-anchor" href="#指令定义对象的钩子函数" aria-hidden="true">#</a> 指令定义对象的钩子函数</h3><ul><li>bind: 只调用一次，指令第一次绑定到元素时调用，可以定义一个在绑定时执行一次的初始化动作。</li><li>inserted: 被绑定元素插入父节点时调用（父节点存在即可调用，不必存在于 document 中）。</li><li>update: 被绑定元素所在的模板更新时调用，而不论绑定值是否变化。通过比较更新前后的绑定值。</li><li>componentUpdated: 被绑定元素所在模板完成一次更新周期时调用。</li><li>unbind: 只调用一次， 指令与元素解绑时调用。</li></ul><h3 id="binding参数对象包含的属性" tabindex="-1"><a class="header-anchor" href="#binding参数对象包含的属性" aria-hidden="true">#</a> binding参数对象包含的属性：</h3><ul><li>name 指令名，不包括v-前缀</li><li>value 指令的绑定值，例如：<code>v-my-directive=&quot;1+1&quot;</code>,value的值是2</li><li>oldValue 指令绑定的前一个值，仅在update和componentUpdated钩子函数中可用，无论值是否改变都可用</li><li>expression 绑定值的表达式或变量名，例如：<code>v-my-directive=&quot;1+1&quot;</code>,expression的值是<code>&quot;1+1&quot;</code></li><li>arg 传给指令的参数，例如：<code>v-my-directive:foo</code>，arg的值是“foo”</li><li>modifiers 一个包含修饰符的的对象，例如：<code>v-my-directive:foo.bar</code>,修饰符对象modifiers的值是<code>{foo:true,bar:true}</code></li></ul><div class="language-html" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>element<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name"><span class="token namespace">v-demo:</span>hello.a.b</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>message<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
 <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
 
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>text/javascript<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
 
    <span class="token comment">//vnode，Vue编译生成的虚拟节点，oldVnode，Vue编译生成的上一个虚拟节点，仅在update和componentUpdated钩子函数中可用</span>
    Vue<span class="token punctuation">.</span><span class="token function">directive</span><span class="token punctuation">(</span><span class="token string">&#39;demo&#39;</span><span class="token punctuation">,</span><span class="token punctuation">{</span>
        <span class="token function-variable function">bind</span><span class="token operator">:</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">el<span class="token punctuation">,</span>binding<span class="token punctuation">,</span>vnode</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            el<span class="token punctuation">.</span>innerHTML<span class="token operator">=</span>
            <span class="token string">&#39;name: &#39;</span><span class="token operator">+</span>binding<span class="token punctuation">.</span>name<span class="token operator">+</span><span class="token string">&#39;&lt;br&gt;&#39;</span><span class="token operator">+</span>
            <span class="token string">&#39;value: &#39;</span><span class="token operator">+</span>binding<span class="token punctuation">.</span>value<span class="token operator">+</span><span class="token string">&#39;&lt;br&gt;&#39;</span><span class="token operator">+</span>
            <span class="token string">&#39;expression: &#39;</span><span class="token operator">+</span>binding<span class="token punctuation">.</span>expression<span class="token operator">+</span><span class="token string">&#39;&lt;br&gt;&#39;</span><span class="token operator">+</span>
            <span class="token string">&#39;argument: &#39;</span><span class="token operator">+</span>binding<span class="token punctuation">.</span>arg<span class="token operator">+</span><span class="token string">&#39;&lt;br&gt;&#39;</span><span class="token operator">+</span>
            <span class="token string">&#39;modifiers: &#39;</span><span class="token operator">+</span><span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span>binding<span class="token punctuation">.</span>modifiers<span class="token punctuation">)</span><span class="token operator">+</span><span class="token string">&#39;&lt;br&gt;&#39;</span><span class="token operator">+</span>
            <span class="token string">&#39;vnode keys: &#39;</span><span class="token operator">+</span>Object<span class="token punctuation">.</span><span class="token function">keys</span><span class="token punctuation">(</span>vnode<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span><span class="token string">&#39;,&#39;</span><span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
 
     <span class="token keyword">var</span> demo <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Vue</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
         <span class="token literal-property property">el</span><span class="token operator">:</span> <span class="token string">&#39;#element&#39;</span><span class="token punctuation">,</span>
         <span class="token literal-property property">data</span><span class="token operator">:</span><span class="token punctuation">{</span>
            <span class="token literal-property property">message</span><span class="token operator">:</span><span class="token string">&#39;你好世界！！！&#39;</span>
         <span class="token punctuation">}</span>
     <span class="token punctuation">}</span><span class="token punctuation">)</span>
 
 </span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><h3 id="自定义指令的绑定值" tabindex="-1"><a class="header-anchor" href="#自定义指令的绑定值" aria-hidden="true">#</a> 自定义指令的绑定值</h3><ul><li>自定义指令的绑定值除了可以是data中的属性之外，还可以是任意合法的JavaScript表达式，例如数值常量、字符串常量、对象字面量等。</li></ul><div class="language-html" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>element<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span> <span class="token attr-name">v-ikun</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span> {size:38 , color:&#39;green&#39;} <span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>aaavvvvvddddddddd<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span>
 <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
  
 <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>text/javascript<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
 
    Vue<span class="token punctuation">.</span><span class="token function">directive</span><span class="token punctuation">(</span><span class="token string">&#39;ikun&#39;</span><span class="token punctuation">,</span><span class="token punctuation">{</span>
        <span class="token function-variable function">bind</span><span class="token operator">:</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">el<span class="token punctuation">,</span>binding</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            el<span class="token punctuation">.</span>style<span class="token punctuation">.</span>fontSize<span class="token operator">=</span>binding<span class="token punctuation">.</span>value<span class="token punctuation">.</span>size<span class="token operator">+</span><span class="token string">&#39;px&#39;</span><span class="token punctuation">;</span>
            el<span class="token punctuation">.</span>style<span class="token punctuation">.</span>color<span class="token operator">=</span>binding<span class="token punctuation">.</span>value<span class="token punctuation">.</span>color<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
 
     <span class="token keyword">var</span> demo <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Vue</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
         <span class="token literal-property property">el</span><span class="token operator">:</span> <span class="token string">&#39;#element&#39;</span>
     <span class="token punctuation">}</span><span class="token punctuation">)</span>
 
 </span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><h4 id="示例" tabindex="-1"><a class="header-anchor" href="#示例" aria-hidden="true">#</a> 示例</h4><ul><li><p><code>v-debounce</code></p><ul><li>背景：在开发中，有些提交保存按钮有时候会在短时间内被点击多次，这样就会多次重复请求后端接口，造成数据的混乱，比如新增表单的提交按钮，多次点击就会新增多条重复的数据。</li></ul></li><li><p>需求：防止按钮在短时间内被多次点击，使用防抖函数限制规定时间内只能点击一次。</p></li></ul><p>思路：</p><ol><li>定义一个延迟执行的方法，如果在延迟时间内再调用该方法，则重新计算执行时间。</li><li>将时间绑定在 click 方法上。</li></ol><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> debounce <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token function-variable function">inserted</span><span class="token operator">:</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">el<span class="token punctuation">,</span> binding</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> timer
    el<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">&#39;keyup&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>timer<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token function">clearTimeout</span><span class="token punctuation">(</span>timer<span class="token punctuation">)</span>
      <span class="token punctuation">}</span>
      timer <span class="token operator">=</span> <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
        binding<span class="token punctuation">.</span><span class="token function">value</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">1000</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> debounce
</code></pre></div><ul><li>使用：给<code> Dom 加上 v-debounce</code> 及回调函数即可</li></ul><div class="language-vue" data-ext="vue"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">v-debounce</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>debounceClick<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>防抖<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript"> 
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">methods</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token function">debounceClick</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;只触发一次&#39;</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span> 
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><ul><li><p><strong><code>v-permission</code></strong></p></li><li><p>背景：在一些后台管理系统，我们可能需要根据用户角色进行一些操作权限的判断，很多时候我们都是粗暴地给一个元素添加 <code>v-if / v-show</code> 来进行显示隐藏</p></li><li><p>但如果判断条件繁琐且多个地方需要判断，这种方式的代码不仅不优雅而且冗余。针对这种情况，我们可以通过全局自定义指令来处理。</p></li><li><p>需求：自定义一个权限指令，对需要权限判断的 Dom 进行显示隐藏。</p></li></ul><p>思路：</p><ol><li>自定义一个权限数组</li><li>判断用户的权限是否在这个数组内，如果是则显示，否则则移除 Dom</li></ol><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">checkArray</span><span class="token punctuation">(</span><span class="token parameter">key</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">let</span> arr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">&#39;1&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;2&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;3&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;4&#39;</span><span class="token punctuation">]</span>
  <span class="token keyword">let</span> index <span class="token operator">=</span> arr<span class="token punctuation">.</span><span class="token function">indexOf</span><span class="token punctuation">(</span>key<span class="token punctuation">)</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>index <span class="token operator">&gt;</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token boolean">true</span> <span class="token comment">// 有权限</span>
  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token boolean">false</span> <span class="token comment">// 无权限</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> permission <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token function-variable function">inserted</span><span class="token operator">:</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">el<span class="token punctuation">,</span> binding</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> permission <span class="token operator">=</span> binding<span class="token punctuation">.</span>value <span class="token comment">// 获取到 v-permission的值</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>permission<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">let</span> hasPermission <span class="token operator">=</span> <span class="token function">checkArray</span><span class="token punctuation">(</span>permission<span class="token punctuation">)</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>hasPermission<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// 没有权限 移除Dom元素</span>
        el<span class="token punctuation">.</span>parentNode <span class="token operator">&amp;&amp;</span> el<span class="token punctuation">.</span>parentNode<span class="token punctuation">.</span><span class="token function">removeChild</span><span class="token punctuation">(</span>el<span class="token punctuation">)</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> permission
</code></pre></div><ul><li>使用：给 <code>v-permission</code> 赋值判断即可</li></ul><div class="language-vue" data-ext="vue"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>btns<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
  <span class="token comment">&lt;!-- 显示 --&gt;</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">v-permission</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span><span class="token punctuation">&#39;</span>1&#39;<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>权限按钮1<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">&gt;</span></span>
  <span class="token comment">&lt;!-- 不显示 --&gt;</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">v-permission</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span><span class="token punctuation">&#39;</span>10&#39;<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>权限按钮2<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><ul><li><code>vue-waterMarker</code> 需求：给整个页面添加背景水印</li></ul><p>思路：</p><ol><li>使用 canvas 特性生成 base64 格式的图片文件，设置其字体大小，颜色等。</li><li>将其设置为背景图片，从而实现页面或组件水印效果</li></ol><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">addWaterMarker</span><span class="token punctuation">(</span><span class="token parameter">str<span class="token punctuation">,</span> parentNode<span class="token punctuation">,</span> font<span class="token punctuation">,</span> textColor</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// 水印文字，父元素，字体，文字颜色</span>
  <span class="token keyword">var</span> can <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">createElement</span><span class="token punctuation">(</span><span class="token string">&#39;canvas&#39;</span><span class="token punctuation">)</span>
  parentNode<span class="token punctuation">.</span><span class="token function">appendChild</span><span class="token punctuation">(</span>can<span class="token punctuation">)</span>
  can<span class="token punctuation">.</span>width <span class="token operator">=</span> <span class="token number">200</span>
  can<span class="token punctuation">.</span>height <span class="token operator">=</span> <span class="token number">150</span>
  can<span class="token punctuation">.</span>style<span class="token punctuation">.</span>display <span class="token operator">=</span> <span class="token string">&#39;none&#39;</span>
  <span class="token keyword">var</span> cans <span class="token operator">=</span> can<span class="token punctuation">.</span><span class="token function">getContext</span><span class="token punctuation">(</span><span class="token string">&#39;2d&#39;</span><span class="token punctuation">)</span>
  cans<span class="token punctuation">.</span><span class="token function">rotate</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token operator">-</span><span class="token number">20</span> <span class="token operator">*</span> Math<span class="token punctuation">.</span><span class="token constant">PI</span><span class="token punctuation">)</span> <span class="token operator">/</span> <span class="token number">180</span><span class="token punctuation">)</span>
  cans<span class="token punctuation">.</span>font <span class="token operator">=</span> font <span class="token operator">||</span> <span class="token string">&#39;16px Microsoft JhengHei&#39;</span>
  cans<span class="token punctuation">.</span>fillStyle <span class="token operator">=</span> textColor <span class="token operator">||</span> <span class="token string">&#39;rgba(180, 180, 180, 0.3)&#39;</span>
  cans<span class="token punctuation">.</span>textAlign <span class="token operator">=</span> <span class="token string">&#39;left&#39;</span>
  cans<span class="token punctuation">.</span>textBaseline <span class="token operator">=</span> <span class="token string">&#39;Middle&#39;</span>
  cans<span class="token punctuation">.</span><span class="token function">fillText</span><span class="token punctuation">(</span>str<span class="token punctuation">,</span> can<span class="token punctuation">.</span>width <span class="token operator">/</span> <span class="token number">10</span><span class="token punctuation">,</span> can<span class="token punctuation">.</span>height <span class="token operator">/</span> <span class="token number">2</span><span class="token punctuation">)</span>
  parentNode<span class="token punctuation">.</span>style<span class="token punctuation">.</span>backgroundImage <span class="token operator">=</span> <span class="token string">&#39;url(&#39;</span> <span class="token operator">+</span> can<span class="token punctuation">.</span><span class="token function">toDataURL</span><span class="token punctuation">(</span><span class="token string">&#39;image/png&#39;</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token string">&#39;)&#39;</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> waterMarker <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token function-variable function">bind</span><span class="token operator">:</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">el<span class="token punctuation">,</span> binding</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">addWaterMarker</span><span class="token punctuation">(</span>binding<span class="token punctuation">.</span>value<span class="token punctuation">.</span>text<span class="token punctuation">,</span> el<span class="token punctuation">,</span> binding<span class="token punctuation">.</span>value<span class="token punctuation">.</span>font<span class="token punctuation">,</span> binding<span class="token punctuation">.</span>value<span class="token punctuation">.</span>textColor<span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> waterMarker


<span class="token comment">// - 使用，设置水印文案，颜色，字体大小即可</span>

<span class="token operator">&lt;</span>template<span class="token operator">&gt;</span>
  <span class="token operator">&lt;</span>div v<span class="token operator">-</span>waterMarker<span class="token operator">=</span><span class="token string">&quot;{text:&#39;11111版权所有&#39;,textColor:&#39;rgba(180, 180, 180, 0.4)&#39;}&quot;</span><span class="token operator">&gt;</span><span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>template<span class="token operator">&gt;</span>
 
</code></pre></div><h2 id="vue3" tabindex="-1"><a class="header-anchor" href="#vue3" aria-hidden="true">#</a> vue3</h2><p>自定义指令跟组件一样，也是有生命周期的，我们的操作都是定义在对应的生命周期中，然后进行操作的 七个钩子函数 在 Vue3 中，自定义指令的钩子函数主要有如下七种（这块跟 Vue2 差异较大）：</p><h4 id="自定义指令生命周期" tabindex="-1"><a class="header-anchor" href="#自定义指令生命周期" aria-hidden="true">#</a> 自定义指令生命周期</h4><ul><li><p><strong>created</strong>：在绑定元素的 attribute 或事件监听器被应用之前调用。在指令需要附加在普通的 v-on 事件监听器调用前的事件监听器中时，这很有用。</p></li><li><p><strong>beforeMount</strong>：当指令第一次绑定到元素并且在挂载父组件之前调用。</p></li><li><p><strong>mounted</strong>：在绑定元素的父组件被挂载后调用，大部分自定义指令都写在这里。</p></li><li><p><strong>beforeUpdate</strong>：在更新包含组件的 VNode 之前调用。</p></li><li><p><strong>updated</strong>：在包含组件的 VNode 及其子组件的 VNode 更新后调用。</p></li><li><p><strong>beforeUnmount</strong>：在卸载绑定元素的父组件之前调用</p></li><li><p><strong>unmounted</strong>：当指令与元素解除绑定且父组件已卸载时，只调用一次。</p></li></ul><p>虽然钩子函数比较多，看着有点唬人，不过我们日常开发中用的最多的其实是 mounted 函数。</p><h4 id="生命周期四个参数" tabindex="-1"><a class="header-anchor" href="#生命周期四个参数" aria-hidden="true">#</a> 生命周期四个参数</h4><p>这里七个钩子函数，钩子函数中有回调参数，回调参数有四个，含义基本上和 Vue2 一致：</p><ul><li><p><strong>el</strong>：指令所绑定的元素，可以用来直接操作 DOM，我们松哥说想实现一个可以自动判断组件显示还是隐藏的指令，那么就可以通过 el 对象来操作 DOM 节点，进而实现组件的隐藏。</p></li><li><p><strong>binding</strong>：我们通过自定义指令传递的各种参数，主要存在于这个对象中，该对象属性较多，如下属性是我们日常开发使用较多的几个</p><ul><li><p>name：指令名，不包括 v- 前缀。</p></li><li><p>value：指令的绑定值，例如：<code>v-hasPermission=&quot;[&#39;user:delete&#39;]&quot;</code> 中，绑定值为 <code>&#39;user:delete&#39;</code>， 注意 这个绑定值可以是数组也可以是普通对象，关键是看你具体绑定的是什么</p></li></ul><ul><li><p>expression：字符串形式的指令表达式。例如 v-my-directive=&quot;1 + 1&quot; 中，表达式为 &quot;1 + 1&quot;。</p></li><li><p><strong>arg</strong>：传给指令的参数，可选。例如 <code>v-hasPermission:[name]=&quot;&#39;zhangsan&#39;&quot;</code> 中，参数为 &quot;name&quot;。</p></li></ul></li></ul><ul><li><p><strong>vnode</strong>：Vue 编译生成的虚拟节点。</p></li><li><p><strong>oldVnode</strong>：上一个虚拟节点，仅在 update 和 componentUpdated 钩子中可用。</p></li></ul><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> usersPermissions <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">&#39;user&#39;</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
 
app<span class="token punctuation">.</span><span class="token function">directive</span><span class="token punctuation">(</span><span class="token string">&#39;hasPermission&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
    <span class="token function">mounted</span><span class="token punctuation">(</span><span class="token parameter">el<span class="token punctuation">,</span> binding<span class="token punctuation">,</span> vnode</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">const</span> <span class="token punctuation">{</span>value<span class="token punctuation">}</span> <span class="token operator">=</span> binding<span class="token punctuation">;</span>
        <span class="token keyword">let</span> f <span class="token operator">=</span> usersPermissions<span class="token punctuation">.</span><span class="token function">some</span><span class="token punctuation">(</span><span class="token parameter">p</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span> p<span class="token punctuation">.</span><span class="token function">indexOf</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span> <span class="token operator">!==</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>f<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            el<span class="token punctuation">.</span>parentNode <span class="token operator">&amp;&amp;</span> el<span class="token punctuation">.</span>parentNode<span class="token punctuation">.</span><span class="token function">removeChild</span><span class="token punctuation">(</span>el<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre></div><ol><li>先从 <code>binding</code> 中提取出 <code>value</code> 的值，这就是当前控件所需要的权限</li><li>然后遍历 <code>usersPermissions</code> 用一个 <code>some</code> 函数，去查看 <code>usersPermissions</code> 中是否有满足条件的值</li><li>如果没有，说明当前用户不具备展示该组件所需要的权限，那么就要隐藏这个组件，隐藏的方式就是获取到当前组件的父组件，然后从父组件中移除当前组件即可。</li></ol><p>这是一个全局的指令，定义好之后，我们就可以在组件中直接使用了：</p><p><code>&lt;button @click=&quot;btnClick&quot; v-hasPermission=&quot;[&#39;user:delete&#39;]&quot;&gt;删除用户&lt;/button&gt;</code></p><h3 id="自定义指令" tabindex="-1"><a class="header-anchor" href="#自定义指令" aria-hidden="true">#</a> 自定义指令</h3><ul><li><strong>私有自定义指令</strong><ul><li>在每个 vue 组件中，可以在 directives 节点下声明私有自定义指令。</li></ul></li></ul><div class="language-html" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">directives</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token comment">// 自定义私有指令focus，在使用的时候要用 v-focus 。</span>
    <span class="token literal-property property">focus</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token function">mounted</span><span class="token punctuation">(</span><span class="token parameter">el<span class="token punctuation">,</span> binding<span class="token punctuation">,</span> vnode</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
        <span class="token comment">//el是对应的dom，可以通过el给对应添加事件监听 el.addEventListener</span>
        <span class="token comment">// binding.value 就是通过 = 绑定的值，在传值的时候传到这 binding.value</span>
        <span class="token comment">//vnode是节点</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>

// 在使用自定义指令时，需要加上 v- 前缀。示例代码如下：

<span class="token comment">&lt;!-- 声明自定义私有指令focus，在使用的时候要用 v-focus 。 --&gt;</span>    
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">v-focus</span><span class="token punctuation">/&gt;</span></span>
</code></pre></div><h3 id="全局自定义指令" tabindex="-1"><a class="header-anchor" href="#全局自定义指令" aria-hidden="true">#</a> 全局自定义指令</h3><ul><li>定义指令 <ul><li>全局共享的自定义指令需要通过“单页面应用程序的实例对象”进行声明，示例代码如下：</li></ul></li></ul><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> createApp <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span>
 
<span class="token keyword">const</span> app <span class="token operator">=</span> <span class="token function">createApp</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token comment">/* ... */</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
 
<span class="token comment">// 注册（对象形式的指令）</span>
app<span class="token punctuation">.</span><span class="token function">directive</span><span class="token punctuation">(</span><span class="token string">&#39;my-directive&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
  <span class="token comment">/* 自定义指令钩子 */</span>
    <span class="token function">mounted</span><span class="token punctuation">(</span><span class="token parameter">el<span class="token punctuation">,</span> bindings</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      
    <span class="token punctuation">}</span>
 
<span class="token punctuation">}</span><span class="token punctuation">)</span>
 
<span class="token comment">// 注册（函数形式的指令）</span>
app<span class="token punctuation">.</span><span class="token function">directive</span><span class="token punctuation">(</span><span class="token string">&#39;my-directive&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">el<span class="token punctuation">,</span> binding<span class="token punctuation">,</span> vnode</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
        <span class="token comment">//el是对应的dom，可以通过el给对应添加事件监听 el.addEventListener</span>
        <span class="token comment">// binding.value 就是通过 = 绑定的值，在传值的时候传到这 binding.value</span>
        <span class="token comment">//vnode是节点</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre></div><h4 id="demo-vue3" tabindex="-1"><a class="header-anchor" href="#demo-vue3" aria-hidden="true">#</a> demo vue3</h4><div class="language-html" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">v-onceClick</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>10000<span class="token punctuation">&quot;</span></span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>btnClick<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>ClickMe<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
 
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
 
    <span class="token keyword">import</span> <span class="token punctuation">{</span>ref<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span><span class="token punctuation">;</span>
 
    <span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&quot;MyVue01&quot;</span><span class="token punctuation">,</span>
        <span class="token function">setup</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">const</span> a <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">const</span> <span class="token function-variable function">btnClick</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
                a<span class="token punctuation">.</span>value<span class="token operator">++</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
            <span class="token keyword">return</span> <span class="token punctuation">{</span>a<span class="token punctuation">,</span> btnClick<span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token literal-property property">directives</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token literal-property property">onceClick</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                <span class="token function">mounted</span><span class="token punctuation">(</span><span class="token parameter">el<span class="token punctuation">,</span> binding<span class="token punctuation">,</span> vnode</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                    el<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">&#39;click&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
                        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>el<span class="token punctuation">.</span>disabled<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                            el<span class="token punctuation">.</span>disabled <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
                            <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
                                el<span class="token punctuation">.</span>disabled <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
                            <span class="token punctuation">}</span><span class="token punctuation">,</span> binding<span class="token punctuation">.</span>value <span class="token operator">||</span> <span class="token number">1000</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                        <span class="token punctuation">}</span>
                    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><h2 id="自定义指令权限控制" tabindex="-1"><a class="header-anchor" href="#自定义指令权限控制" aria-hidden="true">#</a> 自定义指令权限控制</h2><p>权限控制常见有两种业务需求：权限指令、权限路由(菜单)。</p><h3 id="权限指令" tabindex="-1"><a class="header-anchor" href="#权限指令" aria-hidden="true">#</a> 权限指令</h3><p>基于权限控制按需展示某些功能模块，相当于结合了权限控制的 <code>v-if</code> 指令。</p><h4 id="权限指令封装" tabindex="-1"><a class="header-anchor" href="#权限指令封装" aria-hidden="true">#</a> 权限指令封装</h4><p><code>src\\directive\\modules\\permission.js</code></p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> useAccountStore <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@/store&#39;</span>

<span class="token comment">// 权限校验方法</span>
<span class="token keyword">function</span> <span class="token function">checkPermission</span><span class="token punctuation">(</span><span class="token parameter">el<span class="token punctuation">,</span> <span class="token punctuation">{</span> value <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// 获取用户 Store</span>
  <span class="token keyword">const</span> accountStore <span class="token operator">=</span> <span class="token function">useAccountStore</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token comment">// 获取用户 Store 的角色，可根据业务情况进行调整</span>
  <span class="token keyword">const</span> currentRole <span class="token operator">=</span> accountStore<span class="token punctuation">.</span>role

  <span class="token comment">// 传入的权限值要求是一个数组</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>Array<span class="token punctuation">.</span><span class="token function">isArray</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span> <span class="token operator">&amp;&amp;</span> value<span class="token punctuation">.</span>length <span class="token operator">&gt;</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 判断用户角色是否有权限</span>
    <span class="token keyword">const</span> hasPermission <span class="token operator">=</span> value<span class="token punctuation">.</span><span class="token function">includes</span><span class="token punctuation">(</span>currentRole<span class="token punctuation">)</span>
    <span class="token comment">// 没有权限则删除当前dom</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>hasPermission<span class="token punctuation">)</span> el<span class="token punctuation">.</span><span class="token function">remove</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
    <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">Error</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">格式错误，正确用法 v-permission=&quot;[&#39;admin&#39;,&#39;employee&#39;]&quot;</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token function">mounted</span><span class="token punctuation">(</span><span class="token parameter">el<span class="token punctuation">,</span> binding</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">checkPermission</span><span class="token punctuation">(</span>el<span class="token punctuation">,</span> binding<span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token function">updated</span><span class="token punctuation">(</span><span class="token parameter">el<span class="token punctuation">,</span> binding</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">checkPermission</span><span class="token punctuation">(</span>el<span class="token punctuation">,</span> binding<span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
</code></pre></div><h4 id="指令入口管理" tabindex="-1"><a class="header-anchor" href="#指令入口管理" aria-hidden="true">#</a> 指令入口管理</h4><p><code>src\\directive\\index.js</code></p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">import</span> permission <span class="token keyword">from</span> <span class="token string">&#39;./modules/permission&#39;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token function">install</span><span class="token punctuation">(</span><span class="token parameter">app</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 注册全局指令</span>
    app<span class="token punctuation">.</span><span class="token function">directive</span><span class="token punctuation">(</span><span class="token string">&#39;permission&#39;</span><span class="token punctuation">,</span> permission<span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
</code></pre></div><h4 id="全局注册指令" tabindex="-1"><a class="header-anchor" href="#全局注册指令" aria-hidden="true">#</a> 全局注册指令</h4><div class="language-diff" data-ext="diff"><pre class="language-diff"><code>import { createApp } from &#39;vue&#39;
import App from &#39;./App.vue&#39;
import &#39;./styles/main.less&#39;

import Icons from &#39;./components/Icons&#39;
import router from &#39;./router&#39;
import store from &#39;./store&#39;
<span class="token inserted-sign inserted"><span class="token prefix inserted">+</span><span class="token line"> import directive from &#39;./directive&#39;
</span></span>

const app = createApp(App)

app.use(Icons)
app.use(router)
app.use(store)
<span class="token inserted-sign inserted"><span class="token prefix inserted">+</span><span class="token line"> app.use(directive)
</span></span>app.mount(&#39;#app&#39;)
</code></pre></div><h4 id="参考例子" tabindex="-1"><a class="header-anchor" href="#参考例子" aria-hidden="true">#</a> 参考例子</h4><div class="language-diff" data-ext="diff"><pre class="language-diff"><code><span class="token deleted-arrow deleted"><span class="token prefix deleted">&lt;</span><span class="token line">script setup&gt;
</span></span>import { useAccountStore } from &#39;@/store&#39;

// 获取用户 Store
const accountStore = useAccountStore()
<span class="token deleted-arrow deleted"><span class="token prefix deleted">&lt;</span><span class="token line">/script&gt;
</span></span>
<span class="token deleted-arrow deleted"><span class="token prefix deleted">&lt;</span><span class="token line">template&gt;
</span></span><span class="token unchanged"><span class="token prefix unchanged"> </span><span class="token line"> &lt;h3&gt;Store 角色: {{ accountStore.role }}&lt;/h3&gt;
</span><span class="token prefix unchanged"> </span><span class="token line"> &lt;button @click=&quot;accountStore.changeRole(&#39;admin&#39;)&quot;&gt;切换角色 admin&lt;/button&gt;
</span><span class="token prefix unchanged"> </span><span class="token line"> &lt;button @click=&quot;accountStore.changeRole(&#39;user&#39;)&quot;&gt;切换角色 user&lt;/button&gt;
</span><span class="token prefix unchanged"> </span><span class="token line"> &lt;a-divider /&gt;
</span></span><span class="token inserted-sign inserted"><span class="token prefix inserted">+</span><span class="token line">  &lt;a-button v-permission=&quot;[&#39;admin&#39;]&quot; type=&quot;primary&quot;&gt;admin 权限按钮&lt;/a-button&gt;
</span><span class="token prefix inserted">+</span><span class="token line">  &lt;a-button v-permission=&quot;[&#39;user&#39;]&quot; type=&quot;primary&quot; ghost&gt; user 权限按钮&lt;/a-button&gt;
</span></span><span class="token deleted-arrow deleted"><span class="token prefix deleted">&lt;</span><span class="token line">/template&gt;
</span></span></code></pre></div>`,69),e=[o];function c(l,u){return s(),a("div",null,e)}const k=n(p,[["render",c],["__file","vue_va_directive.html.vue"]]);export{k as default};
