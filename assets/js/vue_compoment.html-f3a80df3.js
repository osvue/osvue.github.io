import{_ as s,o as a,c as t,a as p}from"./app-215c512d.js";const o={};function e(c,n){return a(),t("div",null,n[0]||(n[0]=[p(`<h3 id="公共组件" tabindex="-1"><a class="header-anchor" href="#公共组件" aria-hidden="true">#</a> 公共组件</h3><ul><li>components <ul><li>vm <ul><li>comp_table.vue</li><li>registerGlobalComponents.js</li></ul></li></ul></li><li>main.js</li></ul><h3 id="组件" tabindex="-1"><a class="header-anchor" href="#组件" aria-hidden="true">#</a> 组件</h3><div class="language-vue" data-ext="vue"><pre class="language-vue"><code><span class="token comment">&lt;!--  --&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>mini_ctx<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>


        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">v-if</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>props.noheader<span class="token punctuation">&quot;</span></span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>mini_header<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>slot</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>header<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>slot</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>

        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>mini_ctx<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>mini_ccctx<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>

                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>slot</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>ctx<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>slot</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>

        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">v-if</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>props.nofooter<span class="token punctuation">&quot;</span></span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>mini_bottom<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>slot</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>footer<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>slot</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">

<span class="token keyword">const</span> props <span class="token operator">=</span> <span class="token function">defineProps</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">noheader</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">type</span><span class="token operator">:</span> Boolean<span class="token punctuation">,</span>
        <span class="token keyword">default</span><span class="token operator">:</span> <span class="token boolean">true</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">nofooter</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">type</span><span class="token operator">:</span> Boolean<span class="token punctuation">,</span>
        <span class="token keyword">default</span><span class="token operator">:</span> <span class="token boolean">true</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span> <span class="token attr-name">scoped</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&#39;</span>scss<span class="token punctuation">&#39;</span></span><span class="token punctuation">&gt;</span></span><span class="token style"><span class="token language-css">
<span class="token selector">.mini_ctx</span> <span class="token punctuation">{</span>

    <span class="token property">position</span><span class="token punctuation">:</span> absolute<span class="token punctuation">;</span>
    <span class="token property">inset</span><span class="token punctuation">:</span> 0px 5px 5px<span class="token punctuation">;</span>
     
    <span class="token property">display</span><span class="token punctuation">:</span> flex<span class="token punctuation">;</span>
    <span class="token property">flex-direction</span><span class="token punctuation">:</span> column<span class="token punctuation">;</span>


    <span class="token selector">.mini_header</span> <span class="token punctuation">{</span>
        <span class="token property">background-color</span><span class="token punctuation">:</span> #fff<span class="token punctuation">;</span>
        <span class="token property">padding</span><span class="token punctuation">:</span> 5px<span class="token punctuation">;</span>
        <span class="token property">margin</span><span class="token punctuation">:</span> 2px<span class="token punctuation">;</span>
        
    <span class="token punctuation">}</span>

    <span class="token selector">.mini_ctx</span> <span class="token punctuation">{</span>
        <span class="token property">flex</span><span class="token punctuation">:</span> 1<span class="token punctuation">;</span>

        <span class="token property">position</span><span class="token punctuation">:</span> relative<span class="token punctuation">;</span>
       
        <span class="token selector">.mini_ccctx</span> <span class="token punctuation">{</span>
          
            <span class="token property">position</span><span class="token punctuation">:</span> absolute<span class="token punctuation">;</span>
            <span class="token property">inset</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
            <span class="token property">overflow-y</span><span class="token punctuation">:</span> auto<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>



    <span class="token selector">.mini_bottom</span> <span class="token punctuation">{</span>
        <span class="token property">position</span><span class="token punctuation">:</span> relative<span class="token punctuation">;</span>
        <span class="token property">height</span><span class="token punctuation">:</span> 20px<span class="token punctuation">;</span>
        <span class="token property">padding-right</span><span class="token punctuation">:</span> 30px<span class="token punctuation">;</span>
        <span class="token property">background-color</span><span class="token punctuation">:</span> #fff<span class="token punctuation">;</span>
        <span class="token property">display</span><span class="token punctuation">:</span> flex<span class="token punctuation">;</span>
        <span class="token property">flex-direction</span><span class="token punctuation">:</span> column<span class="token punctuation">;</span>
        <span class="token property">justify-content</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>
        <span class="token property">align-items</span><span class="token punctuation">:</span> end<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><ul><li>registerGlobalComponents</li></ul><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code>
 <span class="token comment">// index.js文件</span>
 <span class="token comment">// 公共组件规范：</span>
 <span class="token comment">//   1、在src/components目录下创建目录，目录结构为一级，即 src/components/组件目录/xxx.vue</span>
 <span class="token comment">//   2、目录名称必须与组件使用时的名称一致, 即目录名就是组件名</span>
 <span class="token comment">//   例：有一个公共组件 &lt;submit-confirm /&gt;那么在创建目录时，目录的名称必须为SubmitConfirm</span>
 <span class="token comment">//   src</span>
 <span class="token comment">//      components</span>
 <span class="token comment">//          SubmitConfirm</span>
 <span class="token comment">//              index.vue // vue文件的名称可以随便定义</span>

 
 <span class="token comment">// 获取src/components文件夹下所有vue文件,可以根据项目需求，</span>
 <span class="token comment">// 在components下创建一个global文件夹专门放置所有的公共组件</span>
 <span class="token comment">// const components = i<wbr>mport.meta.glob(&#39;./global/*/*.vue&#39;)</span>
<span class="token comment">//  const components = i<wbr>mport.meta.glob(&#39;./*/*.vue&#39;)</span>
<span class="token comment">//  export default function install (app) {</span>
<span class="token comment">//    for (const [key, value] of Object.entries(components)) {</span>
<span class="token comment">//      // 因为 设计的是组件名称就是目录名称，所以这里这样取，也可以根据vue的文件名称 </span>
<span class="token comment">//      const name = key.split(&#39;/&#39;)[1] </span>
<span class="token comment">//      // 这里的main是 layout，不需要注册为公共组件</span>
<span class="token comment">//      if (name !== &#39;main&#39;) {</span>
<span class="token comment">//        app.component(name, defineAsyncComponent(value))</span>
<span class="token comment">//      }</span>
<span class="token comment">//    }</span>
<span class="token comment">//  }</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> defineAsyncComponent <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span><span class="token punctuation">;</span>
 
<span class="token comment">// 获取所有组件，该方法返回一个对象</span>
<span class="token keyword">const</span> components <span class="token operator">=</span> <span class="token keyword">import</span><span class="token punctuation">.</span>meta<span class="token punctuation">.</span><span class="token function">glob</span><span class="token punctuation">(</span><span class="token string">&#39;./*.vue&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">function</span> <span class="token function">install</span><span class="token punctuation">(</span><span class="token parameter">app</span> <span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 遍历对象并注册异步组件</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">const</span> <span class="token punctuation">[</span>key<span class="token punctuation">,</span> value<span class="token punctuation">]</span> <span class="token keyword">of</span> Object<span class="token punctuation">.</span><span class="token function">entries</span><span class="token punctuation">(</span>components<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">//    截取中间部分做名字</span>
        <span class="token keyword">const</span> name <span class="token operator">=</span> key<span class="token punctuation">.</span><span class="token function">slice</span><span class="token punctuation">(</span>key<span class="token punctuation">.</span><span class="token function">lastIndexOf</span><span class="token punctuation">(</span><span class="token string">&#39;/&#39;</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">,</span> key<span class="token punctuation">.</span><span class="token function">lastIndexOf</span><span class="token punctuation">(</span><span class="token string">&#39;.&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
         app<span class="token punctuation">.</span><span class="token function">component</span><span class="token punctuation">(</span>name<span class="token punctuation">,</span> <span class="token function">defineAsyncComponent</span><span class="token punctuation">(</span>value  <span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">//  export default (app) =&gt; {</span>
<span class="token comment">//     const components = i<wbr>mport.meta.glob(&#39;./components/vm/**/*.vue&#39;);</span>
<span class="token comment">//     Object.entries(components).forEach(([path, definition]) =&gt; {</span>
<span class="token comment">//       const componentName = path.split(&#39;/&#39;).pop().replace(/\\.\\w+$/, &#39;&#39;);</span>

<span class="token comment">//       console.log(componentName,path, definition );</span>
      
<span class="token comment">//       app.component(componentName, definition.default);</span>
<span class="token comment">//     });</span>
<span class="token comment">//   };</span>

  
</code></pre></div><h3 id="mainjs" tabindex="-1"><a class="header-anchor" href="#mainjs" aria-hidden="true">#</a> mainjs</h3><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">import</span> registerGlobalComponents <span class="token keyword">from</span> <span class="token string">&#39;@/components/vm/registerGlobalComponents&#39;</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> app <span class="token operator">=</span> <span class="token function">createApp</span><span class="token punctuation">(</span>App<span class="token punctuation">)</span>

app<span class="token punctuation">.</span><span class="token function">component</span><span class="token punctuation">(</span><span class="token string">&#39;vue3ScrollSeamless&#39;</span><span class="token punctuation">,</span>vue3ScrollSeamless<span class="token punctuation">)</span> 
app<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>pinia<span class="token punctuation">)</span> 
app<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>router<span class="token punctuation">)</span>
app<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>Antd<span class="token punctuation">)</span>
<span class="token doc-comment comment">/** 注册自定义组件 */</span>
app<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>registerGlobalComponents<span class="token punctuation">)</span>
   
app<span class="token punctuation">.</span><span class="token function">mount</span><span class="token punctuation">(</span><span class="token string">&#39;#app&#39;</span><span class="token punctuation">)</span>
</code></pre></div>`,8)]))}const u=s(o,[["render",e],["__file","vue_compoment.html.vue"]]);export{u as default};
