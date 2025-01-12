import{_ as n,p as s,q as a,a1 as p}from"./framework-d81ad7e5.js";const t={},o=p(`<h3 id="vue目录注册全局组件" tabindex="-1"><a class="header-anchor" href="#vue目录注册全局组件" aria-hidden="true">#</a> vue目录注册全局组件</h3><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token comment">/*
|--components
    -- index.js
    -- comp.vue
    -- vm_table.vue
|--main.js

*/</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> defineAsyncComponent<span class="token punctuation">,</span> AsyncComponentLoader <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span><span class="token punctuation">;</span>
 
<span class="token comment">// 获取所有组件，该方法返回一个对象</span>
<span class="token keyword">const</span> components <span class="token operator">=</span> <span class="token keyword">import</span><span class="token punctuation">.</span>meta<span class="token punctuation">.</span><span class="token function">glob</span><span class="token punctuation">(</span><span class="token string">&#39;./*.vue&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>components<span class="token punctuation">)</span><span class="token punctuation">;</span>
 
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">function</span> <span class="token function">install</span><span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">app</span><span class="token operator">:</span> any</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 遍历对象并注册异步组件</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">const</span> <span class="token punctuation">[</span>key<span class="token punctuation">,</span> value<span class="token punctuation">]</span> <span class="token keyword">of</span> Object<span class="token punctuation">.</span><span class="token function">entries</span><span class="token punctuation">(</span>components<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// ./HelloWorld.vue 截取中间部分做名字</span>
        <span class="token keyword">const</span> name <span class="token operator">=</span> key<span class="token punctuation">.</span><span class="token function">slice</span><span class="token punctuation">(</span>key<span class="token punctuation">.</span><span class="token function">lastIndexOf</span><span class="token punctuation">(</span><span class="token string">&#39;/&#39;</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">,</span> key<span class="token punctuation">.</span><span class="token function">lastIndexOf</span><span class="token punctuation">(</span><span class="token string">&#39;.&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span><span class="token punctuation">;</span>
        app<span class="token punctuation">.</span><span class="token function">component</span><span class="token punctuation">(</span>name<span class="token punctuation">,</span> <span class="token function">defineAsyncComponent</span><span class="token punctuation">(</span>value <span class="token keyword">as</span> AsyncComponentLoader<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><ul><li><code>main.js</code></li></ul><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> createApp <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span>
<span class="token keyword">import</span> <span class="token string">&#39;./style.css&#39;</span>
<span class="token keyword">import</span> App <span class="token keyword">from</span> <span class="token string">&#39;./App.vue&#39;</span>
<span class="token keyword">import</span> MyGlobalCom <span class="token keyword">from</span> <span class="token string">&#39;@/components/index&#39;</span>
 
<span class="token function">createApp</span><span class="token punctuation">(</span>App<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>MyGlobalCom<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">mount</span><span class="token punctuation">(</span><span class="token string">&#39;#app&#39;</span><span class="token punctuation">)</span>
</code></pre></div><h3 id="vue3-mitt-组件通信" tabindex="-1"><a class="header-anchor" href="#vue3-mitt-组件通信" aria-hidden="true">#</a> Vue3 mitt 组件通信</h3><ul><li>消息总线</li></ul>`,6),e=[o];function c(u,l){return s(),a("div",null,e)}const i=n(t,[["render",c],["__file","dbdoc.html.vue"]]);export{i as default};
