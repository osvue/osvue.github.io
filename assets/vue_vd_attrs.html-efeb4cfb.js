import{_ as n,p as a,q as s,a1 as t}from"./framework-d81ad7e5.js";const p={},o=t(`<h2 id="attrs-listeners" tabindex="-1"><a class="header-anchor" href="#attrs-listeners" aria-hidden="true">#</a> $attrs listeners</h2><blockquote><p>vue 通信方式：</p></blockquote><ul><li><code>Prop</code>（常用）</li><li><code>$emit</code> (组件封装用的较多)</li><li><code>.sync</code>语法糖 （较少）</li><li><code>$attrs</code> &amp; <code>$listeners</code> (组件封装用的较多)</li><li><code>provide</code> &amp; <code>inject</code> （高阶组件/组件库用的较多）</li><li><code>slot-scope</code> &amp; <code>v-slot</code> （vue@2.6.0+）新增</li><li><code>scopedSlots</code> 属性</li><li>其他方式通信</li></ul><blockquote><p>使用<code>v-bind=&quot;$attrs&quot;</code>将父组件中不被认为<code>props</code>特性绑定的属性传递给子组件。</p></blockquote><p>**attrs**：包含了父作用域中不被认为 (且不预期为) props 的特性绑定 (class 和 style 除外)，并且可以通过 v-bind=”attrs” 传入内部组件。当一个组件没有声明任何 props 时，它包含所有父作用域的绑定 (class 和 style 除外)。</p><p>**listeners**：包含了父作用域中的 (不含 .native 修饰符) v-on 事件监听器。它可以通过 v-on=”listeners” 传入内部组件。它是一个对象，里面包含了作用在这个组件上的所有事件监听器，相当于子组件继承了父组件的事件。</p><p>通常该方法会配合<code>interiAttrs</code>一起使用。之所以这样使用是因为两者的出现使得组件之间跨组件的通信在不依赖Vuex和<code>eventBus</code>的情况下变得简洁，业务清晰。</p><ul><li>ComponentA &gt; <ul><li>ComponentB &gt; <ul><li>ComponentC</li></ul></li></ul></li></ul><h3 id="attrs-在组件a-传递时-组件b-并未接收到-会存在此中" tabindex="-1"><a class="header-anchor" href="#attrs-在组件a-传递时-组件b-并未接收到-会存在此中" aria-hidden="true">#</a> $attrs 在组件A 传递时,组件B 并未接收到,会存在此中</h3><h2 id="javascript" tabindex="-1"><a class="header-anchor" href="#javascript" aria-hidden="true">#</a> javaScript</h2><h3 id="componenta" tabindex="-1"><a class="header-anchor" href="#componenta" aria-hidden="true">#</a> ComponentA</h3><div class="language-html" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>nav<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h2</span><span class="token punctuation">&gt;</span></span>{{ ps }}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h2</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h5</span><span class="token punctuation">&gt;</span></span>nav compoments 第一级组件<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h5</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>NChild</span> <span class="token attr-name">:name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>name<span class="token punctuation">&quot;</span></span> <span class="token attr-name">:age</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>age<span class="token punctuation">&quot;</span></span> <span class="token attr-name">:cmsg</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>fam<span class="token punctuation">&quot;</span></span> <span class="token attr-name">@upAge</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>updateAge<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>NChild</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
<span class="token comment">// @ is an alias to /src</span>
<span class="token keyword">import</span> NChild <span class="token keyword">from</span> <span class="token string">&quot;./NChild.vue&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&quot;Nav&quot;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">props</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">ps</span><span class="token operator">:</span> String<span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&quot;Lily&quot;</span><span class="token punctuation">,</span>
      <span class="token literal-property property">age</span><span class="token operator">:</span> <span class="token number">22</span><span class="token punctuation">,</span>
      <span class="token literal-property property">fam</span><span class="token operator">:</span> <span class="token string">&quot;one msg&quot;</span><span class="token punctuation">,</span>
      <span class="token literal-property property">hello</span><span class="token operator">:</span> <span class="token string">&quot;world&quot;</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">components</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    NChild<span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">methods</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token function">updateAge</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;update age&#39;</span><span class="token punctuation">)</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span>age <span class="token operator">+=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>age<span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token function">mounted</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>


</code></pre></div><h3 id="componentb" tabindex="-1"><a class="header-anchor" href="#componentb" aria-hidden="true">#</a> ComponentB</h3><div class="language-html" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>navc<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>

     
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h3</span><span class="token punctuation">&gt;</span></span>NChild 第二组件 --&gt; {{cmsg}}   attrs:{{ $attrs }}  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h3</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>n-childt</span> <span class="token attr-name">v-bind</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>$attrs<span class="token punctuation">&quot;</span></span> <span class="token attr-name">v-on</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&#39;</span>$listeners<span class="token punctuation">&#39;</span></span>  <span class="token punctuation">/&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
<span class="token comment">// @ is an alias to /src</span>
<span class="token keyword">import</span> nChildt <span class="token keyword">from</span> <span class="token string">&#39;./NChildt.vue&#39;</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&quot;NChild&quot;</span><span class="token punctuation">,</span>
   <span class="token literal-property property">props</span><span class="token operator">:</span><span class="token punctuation">{</span>
     <span class="token literal-property property">cmsg</span><span class="token operator">:</span>String
   <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">lusifer</span><span class="token operator">:</span><span class="token string">&#39;sfdsfdsfdf&#39;</span>
    <span class="token punctuation">}</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">components</span><span class="token operator">:</span><span class="token punctuation">{</span>
    nChildt
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">methods</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token function">mounted</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// {name: &quot;Lily&quot;, age: 22}   this.$listeners  upAge</span>
    <span class="token comment">// 结果： {name: &quot;Lily&quot;, age: 22} , 因为父组件共传来name, age, cmsg 三个值，由于 cmsg 被 props接收了，所以只有age, name属性</span>
      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>$attrs<span class="token punctuation">,</span> <span class="token keyword">this</span><span class="token punctuation">.</span>$listeners<span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><h3 id="componentc" tabindex="-1"><a class="header-anchor" href="#componentc" aria-hidden="true">#</a> ComponentC</h3><div class="language-html" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>navcs<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>

     
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h3</span><span class="token punctuation">&gt;</span></span>第三 组件 ---&gt; {{age}} <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h3</span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>el-button</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>primary<span class="token punctuation">&quot;</span></span> <span class="token attr-name">icon</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>el-icon-edit<span class="token punctuation">&quot;</span></span> <span class="token attr-name">circle</span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>updateF<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>el-button</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
<span class="token comment">// @ is an alias to /src</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&quot;NChildt&quot;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">props</span><span class="token operator">:</span><span class="token punctuation">{</span>
    <span class="token literal-property property">age</span><span class="token operator">:</span>Number
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">methods</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token function">updateF</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">$emit</span><span class="token punctuation">(</span><span class="token string">&#39;upAge&#39;</span><span class="token punctuation">)</span> <span class="token comment">// 可以触发 ComponentA 组件中的 upAge 函数</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token function">mounted</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
     console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>$attrs<span class="token punctuation">,</span><span class="token string">&#39;第三个组件&#39;</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>


</code></pre></div>`,16),e=[o];function c(l,u){return a(),s("div",null,e)}const i=n(p,[["render",c],["__file","vue_vd_attrs.html.vue"]]);export{i as default};
