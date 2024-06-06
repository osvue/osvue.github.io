import{_ as n,p as s,q as a,a1 as t}from"./framework-d81ad7e5.js";const p={},o=t(`<h3 id="defineprops-defineemits" tabindex="-1"><a class="header-anchor" href="#defineprops-defineemits" aria-hidden="true">#</a> defineProps, defineEmits</h3><ol><li>在Vue3中父子组件传值、方法是通过<code>defineProps, defineEmits</code>实现的。</li><li><code>defineProps</code> 和 <code>defineEmits</code> 都是只在 <code>&lt;script setup&gt;</code> 中才能使用的。 它们不需要导入就会随着 <code>&lt;script setup&gt;</code> 被一同处理编译。</li><li><code>defineProps</code> 接收与 <code>props</code> 选项相同的值， <code>defineEmits</code> 也接收 <code>emits</code> 选项 相同的值。</li></ol><h3 id="父组件向子组件传值" tabindex="-1"><a class="header-anchor" href="#父组件向子组件传值" aria-hidden="true">#</a> 父组件向子组件传值：</h3><ul><li>父组件向子组件传值，需要使用<code>defineProps。defineProps</code> 接收与 <code>props</code> 相同的值。</li></ul><ol><li>首先，父组件通过自定义属性向子组件传递值： <code>&lt;Subassembly :value=&quot;doc&quot;/&gt;</code></li><li>然后子组件从 vue 中引入<code>defineProps</code><code>import { defineProps } from &#39;vue&#39;</code></li><li>再声明接收的值<code>const props = defineProps([&#39;value&#39;])</code> 最后，就可以在子组件中使用父组件传递过来的值了 <code>&lt;h1&gt;{{ props.value }}&lt;/h1&gt;</code></li></ol><div class="language-vue" data-ext="vue"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">const</span> props <span class="token operator">=</span> <span class="token function">defineProps</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">foo</span><span class="token operator">:</span> String
<span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token keyword">const</span> emit <span class="token operator">=</span> <span class="token function">defineEmits</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string">&#39;change&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;delete&#39;</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
<span class="token comment">// setup 代码</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><h3 id="子组件调用父组件方法" tabindex="-1"><a class="header-anchor" href="#子组件调用父组件方法" aria-hidden="true">#</a> 子组件调用父组件方法：</h3><ol><li>子组件不能直接向父组件传值，子组件需要调用父组件传递过来的方法，然后再父组件中通过方法修改值。</li><li>子组件调用父组件方法，需要使用<code>defineEmits。defineEmits</code> 也接收 <code>emits</code> 相同的值。</li><li>首先，父组件通过自定义属性向子组件传递方法： <code>&lt;Subassembly @func=&quot;sayHello&quot; /&gt;</code></li><li>然后子组件从 vue 中引入 <strong>defineEmits</strong><code>import { defineEmits } from &#39;vue&#39;</code> 5.再声明接收的方法<code>const emit = defineEmits([&#39;func&#39;])</code><ul><li>最后，通过 **<code>emit(&#39;父组件传递过来的方法&#39;, &#39;向该方法传递的参数&#39;)</code>**使用方法 <code>emit(&#39;func&#39;, &#39;hello world&#39;)</code></li></ul></li></ol><div class="language-html" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span>
    <span class="token comment">&lt;!-- 通过子组件自定义属性传递值、方法 --&gt;</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Subassembly</span> <span class="token attr-name">:value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>doc<span class="token punctuation">&quot;</span></span> <span class="token attr-name">@func</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>sayHello<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>sayHello(doc)<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>父组件按钮<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> <span class="token punctuation">{</span> ref <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span>
<span class="token keyword">import</span> Subassembly <span class="token keyword">from</span> <span class="token string">&#39;./Subassembly.vue&#39;</span>


<span class="token comment">// 待传递的值</span>
<span class="token keyword">const</span> doc <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token string">&#39;hello&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 待传递的方法</span>
<span class="token keyword">const</span> <span class="token function-variable function">sayHello</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">data</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token function">alert</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>





<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span>
    <span class="token comment">&lt;!-- 使用父组件传递过来的值 --&gt;</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h1</span><span class="token punctuation">&gt;</span></span>{{ props.value }}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h1</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>handelClick<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>子组件按钮<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
<span class="token comment">// 从 vue 中引入defineProps, defineEmits</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> defineProps<span class="token punctuation">,</span> defineEmits <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span>

<span class="token comment">// 接收父组件传递过来的值</span>
<span class="token keyword">const</span> props <span class="token operator">=</span> <span class="token function">defineProps</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string">&#39;value&#39;</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
<span class="token comment">// 接收父组件传递过来的方法</span>
<span class="token keyword">const</span> emit <span class="token operator">=</span> <span class="token function">defineEmits</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string">&#39;func&#39;</span><span class="token punctuation">]</span><span class="token punctuation">)</span>

<span class="token keyword">const</span> <span class="token function-variable function">handelClick</span> <span class="token operator">=</span> <span class="token keyword">function</span>  <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">//调用父组件传递过来的方法，传入参数修改父组件的值 </span>
    <span class="token function">emit</span><span class="token punctuation">(</span><span class="token string">&#39;func&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;hello world&#39;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>







<span class="token keyword">import</span> <span class="token punctuation">{</span>defineEmits<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;vue&quot;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineComponent</span><span class="token punctuation">(</span><span class="token punctuation">{</span>

    <span class="token literal-property property">components</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>

    <span class="token function">setup</span><span class="token punctuation">(</span><span class="token parameter">props<span class="token punctuation">,</span> ctx</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 接收父组件传递过来的方法</span>

        <span class="token keyword">const</span> emit <span class="token operator">=</span> <span class="token function">defineEmits</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string">&#39;message&#39;</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
        <span class="token comment">// 调用父组件传递过来的方法，传入参数修改父组件的值</span>

        ctx<span class="token punctuation">.</span><span class="token function">emit</span><span class="token punctuation">(</span><span class="token string">&#39;message&#39;</span><span class="token punctuation">,</span> code<span class="token punctuation">)</span>

    <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>

</code></pre></div><h3 id="props" tabindex="-1"><a class="header-anchor" href="#props" aria-hidden="true">#</a> props</h3><p>defineProps 是一个仅 <code>&lt;script setup&gt;</code> 中可用的编译宏命令，并不需要显式地导入。声明的 props 会自动暴露给模板。defineProps 会返回一个对象，其中包含了可以传递给组件的所有 props：</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code>
<span class="token keyword">const</span> props <span class="token operator">=</span> <span class="token function">defineProps</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string">&#39;title&#39;</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>props<span class="token punctuation">.</span>title<span class="token punctuation">)</span>
</code></pre></div><h4 id="如果你没有使用-script-setup-props-必须以-props-选项的方式声明-props-对象会作为-setup-函数的第一个参数被传入" tabindex="-1"><a class="header-anchor" href="#如果你没有使用-script-setup-props-必须以-props-选项的方式声明-props-对象会作为-setup-函数的第一个参数被传入" aria-hidden="true">#</a> 如果你没有使用 <code>&lt;script setup&gt;</code>，props 必须以 props 选项的方式声明，<code>props</code> 对象会作为 <code>setup()</code> 函数的第一个参数被传入：</h4><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">props</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;title&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token function">setup</span><span class="token punctuation">(</span><span class="token parameter">props</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>props<span class="token punctuation">.</span>title<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token comment">// 一个组件可以有任意多的 props，默认情况下，所有 prop 都接受任意类型的值。</span>
</code></pre></div><h4 id="如果你没有在使用-script-setup-你可以通过-emits-选项定义组件会抛出的事件。你可以从-setup-函数的第二个参数-即-setup-上下文对象上访问到-emit-函数" tabindex="-1"><a class="header-anchor" href="#如果你没有在使用-script-setup-你可以通过-emits-选项定义组件会抛出的事件。你可以从-setup-函数的第二个参数-即-setup-上下文对象上访问到-emit-函数" aria-hidden="true">#</a> 如果你没有在使用<code>&lt;script setup&gt;</code>，你可以通过 emits 选项定义组件会抛出的事件。你可以从 <code>setup()</code> 函数的第二个参数，即 setup 上下文对象上访问到 emit 函数：</h4><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">emits</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;enlarge-text&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token function">setup</span><span class="token punctuation">(</span><span class="token parameter">props<span class="token punctuation">,</span> ctx</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    ctx<span class="token punctuation">.</span><span class="token function">emit</span><span class="token punctuation">(</span><span class="token string">&#39;enlarge-text&#39;</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><h3 id="使用对象的形式" tabindex="-1"><a class="header-anchor" href="#使用对象的形式" aria-hidden="true">#</a> 使用对象的形式</h3><div class="language-vue" data-ext="vue"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h1</span><span class="token punctuation">&gt;</span></span>{{ father }}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h1</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h2</span><span class="token punctuation">&gt;</span></span>{{ father1 }}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h2</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> <span class="token punctuation">{</span> defineProps <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span>
<span class="token function">defineProps</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">father</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">type</span><span class="token operator">:</span> String<span class="token punctuation">,</span>
    <span class="token keyword">default</span><span class="token operator">:</span> <span class="token string">&#39;&#39;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">father1</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">type</span><span class="token operator">:</span> String<span class="token punctuation">,</span>
    <span class="token keyword">default</span><span class="token operator">:</span> <span class="token string">&#39;&#39;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">modelValue</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">type</span><span class="token operator">:</span> Boolean<span class="token punctuation">,</span>
    <span class="token keyword">default</span><span class="token operator">:</span> <span class="token boolean">true</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token keyword">import</span> <span class="token punctuation">{</span> defineProps<span class="token punctuation">,</span> defineEmits <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span>
<span class="token comment">// const props = defineProps([&#39;father&#39;, &#39;father1&#39;, &#39;modelValue&#39;])</span>
<span class="token function">defineProps</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">father</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">type</span><span class="token operator">:</span> String<span class="token punctuation">,</span>
    <span class="token keyword">default</span><span class="token operator">:</span> <span class="token string">&#39;&#39;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">father1</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">type</span><span class="token operator">:</span> String<span class="token punctuation">,</span>
    <span class="token keyword">default</span><span class="token operator">:</span> <span class="token string">&#39;&#39;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">modelValue</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">type</span><span class="token operator">:</span> Boolean<span class="token punctuation">,</span>
    <span class="token keyword">default</span><span class="token operator">:</span> <span class="token boolean">true</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token comment">// console.log(props.modelValue)</span>

<span class="token keyword">const</span> emit <span class="token operator">=</span> <span class="token function">defineEmits</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string">&#39;func&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;update:modelValue&#39;</span><span class="token punctuation">]</span><span class="token punctuation">)</span>

<span class="token keyword">const</span> <span class="token function-variable function">handleClick</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token function">emit</span><span class="token punctuation">(</span><span class="token string">&#39;func&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;hello world&#39;</span><span class="token punctuation">)</span>
  <span class="token function">emit</span><span class="token punctuation">(</span><span class="token string">&#39;update:modelValue&#39;</span><span class="token punctuation">,</span> <span class="token boolean">false</span><span class="token punctuation">)</span>
  <span class="token comment">// console.log(props.modelValue)</span>
<span class="token punctuation">}</span> 
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>

</code></pre></div>`,18),e=[o];function c(l,u){return s(),a("div",null,e)}const k=n(p,[["render",c],["__file","vx_j_child.html.vue"]]);export{k as default};
