import{_ as n,p as a,q as s,a1 as t}from"./framework-d81ad7e5.js";const p={},o=t(`<h2 id="hook-once" tabindex="-1"><a class="header-anchor" href="#hook-once" aria-hidden="true">#</a> hook/once</h2><ul><li>在Vue组件中，可以用过<code>$on,$once</code>去监听所有的生命周期钩子函数</li><li>如监听组件的<code>updated</code>钩子函数可以写成 <code>this.$on(&#39;hook:updated&#39;, () =&gt; {})</code></li></ul><h3 id="监听组件生命周期" tabindex="-1"><a class="header-anchor" href="#监听组件生命周期" aria-hidden="true">#</a> 监听组件生命周期</h3><ul><li><strong>hookEvent</strong></li></ul><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token function">mounted</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>chart <span class="token operator">=</span> echarts<span class="token punctuation">.</span><span class="token function">init</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>$el<span class="token punctuation">)</span>
    <span class="token comment">// 请求数据，赋值数据 等等一系列操作...</span>

    <span class="token comment">// 监听窗口发生变化，resize组件</span>
    window<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">&#39;resize&#39;</span><span class="token punctuation">,</span> <span class="token keyword">this</span><span class="token punctuation">.</span>$_handleResizeChart<span class="token punctuation">)</span>
    <span class="token comment">// 通过hook监听组件销毁钩子函数，并取消监听事件</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">$once</span><span class="token punctuation">(</span><span class="token string">&#39;hook:beforeDestroy&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      window<span class="token punctuation">.</span><span class="token function">removeEventListener</span><span class="token punctuation">(</span><span class="token string">&#39;resize&#39;</span><span class="token punctuation">,</span> <span class="token keyword">this</span><span class="token punctuation">.</span>$_handleResizeChart<span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token function">updated</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token function">created</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">methods</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token function">$_handleResizeChart</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token comment">// this.chart.resize()</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><div class="language-html" data-ext="html"><pre class="language-html"><code>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token comment">&lt;!--通过@hook:updated监听组件的updated生命钩子函数--&gt;</span>
  <span class="token comment">&lt;!--组件的所有生命周期钩子都可以通过@hook:钩子函数名 来监听触发--&gt;</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>custom-select</span> <span class="token attr-name"><span class="token namespace">@hook:</span>updated</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>$_handleSelectUpdated<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> CustomSelect <span class="token keyword">from</span> <span class="token string">&#39;../components/custom-select&#39;</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">components</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    CustomSelect
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">methods</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token function">$_handleSelectUpdated</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;custom-select组件的updated钩子函数被触发&#39;</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>

</code></pre></div><p>处理组件内定时器的步骤。通常我们一般都是这样操作的：</p><div class="language-html" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
  <span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
    <span class="token function">mounted</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span>timer <span class="token operator">=</span> <span class="token function">setInterval</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span> <span class="token operator">...</span> <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">1000</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token function">beforeDestroy</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token function">clearInterval</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>timer<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><div class="language-html" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
  <span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
    <span class="token function">mounted</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">const</span> timer <span class="token operator">=</span> <span class="token function">setInterval</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span> <span class="token operator">...</span> <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">1000</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">$once</span><span class="token punctuation">(</span><span class="token string">&#39;hook:beforeDestroy&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token function">clearInterval</span><span class="token punctuation">(</span>timer<span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><p>设想一个场景</p><ul><li>如果我们需要在数据渲染到页面的之前让页面 <code>loading</code>。<code>mounted</code> 之后停止 <code>loading</code>。<code>beforeUpdata</code> 时开始 <code>loading</code>。<code>updatad</code> 之后停止 <code>loading</code>。</li></ul><ul><li>最简单的方法就是改写组件的生命周期函数，使其在 <code>mounted/beforeUpdata /updatad</code> 时通知父组件显示或者隐藏 <code>loading</code>。</li><li>这样做显示不好，因为侵入了自组件的逻辑，增加的逻辑也和组件本身的功能好不关联。最好的办法就是使用 <code>v-on=&quot;hook:xxx&quot;</code>的方式：</li></ul><div class="language-html" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>v-chart</span>
    <span class="token attr-name"><span class="token namespace">@hook:</span>mounted</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>loading = false<span class="token punctuation">&quot;</span></span>
    <span class="token attr-name"><span class="token namespace">@hook:</span>beforeUpdated</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>loading = true<span class="token punctuation">&quot;</span></span>
    <span class="token attr-name"><span class="token namespace">@hook:</span>updated</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>loading = false<span class="token punctuation">&quot;</span></span>
    <span class="token attr-name">:data</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>data<span class="token punctuation">&quot;</span></span>
<span class="token punctuation">/&gt;</span></span>
</code></pre></div><p>这样，就实现了对子组件生命周期的监听。对任意的组件都有效果，包括引入的第三方组件。</p><h3 id="v-once" tabindex="-1"><a class="header-anchor" href="#v-once" aria-hidden="true">#</a> v-once</h3><blockquote><p>只渲染元素和组件一次。随后的重新渲染，元素/组件及其所有的子节点将被视为静态内容并跳过。这可以用于优化更新性能。</p></blockquote><p>对于部分在首次渲染后就不会再有响应式变化的元素，可以用<code>v-once</code>属性去标记，如下：</p><div class="language-html" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>el-select</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>el-option</span>
    <span class="token attr-name">v-for</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>item in options<span class="token punctuation">&quot;</span></span>
    <span class="token attr-name">v-once</span>
    <span class="token attr-name">:key</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>item.value<span class="token punctuation">&quot;</span></span>
    <span class="token attr-name">:label</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>item.label<span class="token punctuation">&quot;</span></span>
    <span class="token attr-name">:value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>item.value<span class="token punctuation">&quot;</span></span>
    <span class="token punctuation">&gt;</span></span>{{i}}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>el-option</span>
  <span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>el-select</span><span class="token punctuation">&gt;</span></span>
 
</code></pre></div><p>如果上述例子中的变量<code>options</code>很大且不会再有响应式变化，那么如例子中用上<code>v-once</code>对性能有提升。</p>`,19),e=[o];function c(l,u){return a(),s("div",null,e)}const i=n(p,[["render",c],["__file","hook.html.vue"]]);export{i as default};
