import{_ as n,p as s,q as a,a1 as p}from"./framework-d81ad7e5.js";const t={},o=p(`<ul><li>provide 和 inject 通常成对一起使用，使一个祖先组件作为其后代组件的依赖注入方，无论这个组件的层级有多深都可以注入成功，只要他们处于同一条组件链上。</li></ul><p>该 <code>inject</code> 选项应该是以下两种之一：</p><ul><li>一个字符串数组</li><li>一个对象，其 key 名就是在当前组件中的本地绑定名称，而它的值应该是以下两种之一： <ul><li>匹配可用注入的 key (string 或者 Symbol)</li><li>一个对象 <ul><li>它的 <code>from</code> 属性是一个 key (string 或者 Symbol)，用于匹配可用的注入</li><li>它的 <code>default</code> 属性用作候补值。和 props 的默认值类似，如果它是一个对象，那么应该使用一个工厂函数来创建，以避免多个组件共享同一个对象。</li></ul></li></ul></li></ul><h3 id="optionsapi" tabindex="-1"><a class="header-anchor" href="#optionsapi" aria-hidden="true">#</a> optionsApi</h3><ul><li>App <ul><li>Father <ul><li>Child</li></ul></li></ul></li></ul><ul><li>provide / inject</li></ul><p>App</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">provide</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">pub</span><span class="token operator">:</span> <span class="token string">&#39;pub provider&#39;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;Child&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">inject</span><span class="token operator">:</span><span class="token punctuation">[</span><span class="token string">&#39;pub&#39;</span><span class="token punctuation">]</span> 
<span class="token punctuation">}</span>

<span class="token comment">//  use this </span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;Father&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">components</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">chil</span><span class="token operator">:</span> ChildVue
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token function">provide</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token punctuation">{</span>
            <span class="token literal-property property">pub</span><span class="token operator">:</span> <span class="token keyword">this</span><span class="token punctuation">.</span>msg
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>

    <span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token punctuation">{</span>
            <span class="token literal-property property">msg</span><span class="token operator">:</span> <span class="token string">&#39;hello  is use this !!&#39;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><h3 id="compostionapi" tabindex="-1"><a class="header-anchor" href="#compostionapi" aria-hidden="true">#</a> compostionApi</h3><ul><li><p>provider(key,value)</p></li><li><p>inject(&#39;key&#39;,&#39;defaultValue&#39;)</p></li><li><p><strong>类型</strong></p></li></ul><div class="language-typescript" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">function</span> <span class="token generic-function"><span class="token function">provide</span><span class="token generic class-name"><span class="token operator">&lt;</span><span class="token constant">T</span><span class="token operator">&gt;</span></span></span><span class="token punctuation">(</span>key<span class="token operator">:</span> InjectionKey<span class="token operator">&lt;</span><span class="token constant">T</span><span class="token operator">&gt;</span> <span class="token operator">|</span> <span class="token builtin">string</span><span class="token punctuation">,</span> value<span class="token operator">:</span> <span class="token constant">T</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span>
</code></pre></div><ul><li><strong>详细信息</strong></li></ul><p><code>provide()</code> 接受两个参数：第一个参数是要注入的 key，可以是一个字符串或者一个 symbol，第二个参数是要注入的值。</p><div class="language-vue" data-ext="vue"><pre class="language-vue"><code>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> <span class="token punctuation">{</span> ref<span class="token punctuation">,</span> provide <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> fooSymbol <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;./injectionSymbols&#39;</span>

<span class="token comment">// 提供静态值</span>
<span class="token function">provide</span><span class="token punctuation">(</span><span class="token string">&#39;foo&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;bar&#39;</span><span class="token punctuation">)</span>

<span class="token comment">// 提供响应式的值</span>
<span class="token keyword">const</span> count <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span>
<span class="token function">provide</span><span class="token punctuation">(</span><span class="token string">&#39;count&#39;</span><span class="token punctuation">,</span> count<span class="token punctuation">)</span>

<span class="token comment">// 提供时将 Symbol 作为 key</span>
<span class="token function">provide</span><span class="token punctuation">(</span>fooSymbol<span class="token punctuation">,</span> count<span class="token punctuation">)</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>





<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> <span class="token punctuation">{</span> inject <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> fooSymbol <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;./injectionSymbols&#39;</span>

<span class="token comment">// 注入值的默认方式</span>
<span class="token keyword">const</span> foo <span class="token operator">=</span> <span class="token function">inject</span><span class="token punctuation">(</span><span class="token string">&#39;foo&#39;</span><span class="token punctuation">)</span>

<span class="token comment">// 注入响应式的值</span>
<span class="token keyword">const</span> count <span class="token operator">=</span> <span class="token function">inject</span><span class="token punctuation">(</span><span class="token string">&#39;count&#39;</span><span class="token punctuation">)</span>

<span class="token comment">// 通过 Symbol 类型的 key 注入</span>
<span class="token keyword">const</span> foo2 <span class="token operator">=</span> <span class="token function">inject</span><span class="token punctuation">(</span>fooSymbol<span class="token punctuation">)</span>

<span class="token comment">// 注入一个值，若为空则使用提供的默认值</span>
<span class="token keyword">const</span> bar <span class="token operator">=</span> <span class="token function">inject</span><span class="token punctuation">(</span><span class="token string">&#39;foo&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;default value&#39;</span><span class="token punctuation">)</span>

<span class="token comment">// 注入一个值，若为空则使用提供的工厂函数</span>
<span class="token keyword">const</span> baz <span class="token operator">=</span> <span class="token function">inject</span><span class="token punctuation">(</span><span class="token string">&#39;foo&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">new</span> <span class="token class-name">Map</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>

<span class="token comment">// 注入时为了表明提供的默认值是个函数，需要传入第三个参数</span>
<span class="token keyword">const</span> fn <span class="token operator">=</span> <span class="token function">inject</span><span class="token punctuation">(</span><span class="token string">&#39;function&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token boolean">false</span><span class="token punctuation">)</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>

</code></pre></div>`,14),e=[o];function c(l,i){return s(),a("div",null,e)}const k=n(t,[["render",c],["__file","vx_g_inject.html.vue"]]);export{k as default};
