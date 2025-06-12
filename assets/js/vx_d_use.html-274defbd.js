import{_ as e,r as c,o as l,c as u,b as a,d as s,e as p,a as o}from"./app-215c512d.js";const i={},k={id:"插件",tabindex:"-1"},r={href:"https://v3.cn.vuejs.org/guide/plugins.html#%E6%8F%92%E4%BB%B6",target:"_blank",rel:"noopener noreferrer"},d={href:"https://github.com/karol-f/vue-custom-element",target:"_blank",rel:"noopener noreferrer"},m={href:"https://github.com/vuejs/vue-touch",target:"_blank",rel:"noopener noreferrer"},g={href:"https://github.com/vuejs/vue-router",target:"_blank",rel:"noopener noreferrer"},f={href:"https://github.com/vuejs/vue-router",target:"_blank",rel:"noopener noreferrer"},v={id:"编写插件",tabindex:"-1"},y={href:"https://v3.cn.vuejs.org/guide/plugins.html#%E7%BC%96%E5%86%99%E6%8F%92%E4%BB%B6",target:"_blank",rel:"noopener noreferrer"},b={href:"https://github.com/vuejs/awesome-vue#components--libraries",target:"_blank",rel:"noopener noreferrer"};function x(j,n){const t=c("ExternalLinkIcon");return l(),u("div",null,[a("h3",k,[n[1]||(n[1]=a("a",{class:"header-anchor",href:"#插件","aria-hidden":"true"},"#",-1)),n[2]||(n[2]=s()),a("a",r,[n[0]||(n[0]=s("#")),p(t)]),n[3]||(n[3]=s("插件"))]),n[21]||(n[21]=o(`<p>插件是自包含的代码，通常向 Vue 添加全局级功能。它可以是公开 <code>install()</code> 方法的 <code>object</code>，也可以是 <code>function</code></p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
* plugin: 要安装的插件 如 ElementUI
* options: 插件的配置信息 如 <span class="token punctuation">{</span>size: &#39;small&#39;<span class="token punctuation">}</span>
*/</span>
Vue<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>plugin<span class="token punctuation">,</span> options<span class="token punctuation">)</span>
</code></pre></div><p>插件的功能范围没有严格的限制——一般有下面几种：</p>`,3)),a("ol",null,[a("li",null,[n[5]||(n[5]=s("添加全局方法或者 property。如：")),a("a",d,[n[4]||(n[4]=s("vue-custom-element")),p(t)])]),a("li",null,[n[7]||(n[7]=s("添加全局资源：指令/过渡等。如：")),a("a",m,[n[6]||(n[6]=s("vue-touch")),p(t)]),n[8]||(n[8]=s("）"))]),a("li",null,[n[10]||(n[10]=s("通过全局 mixin 来添加一些组件选项。(如")),a("a",g,[n[9]||(n[9]=s("vue-router")),p(t)]),n[11]||(n[11]=s(")"))]),n[14]||(n[14]=a("li",null,[s("添加全局实例方法，通过把它们添加到 "),a("code",null,"config.globalProperties"),s(" 上实现。")],-1)),a("li",null,[n[13]||(n[13]=s("一个库，提供自己的 API，同时提供上面提到的一个或多个功能。如 ")),a("a",f,[n[12]||(n[12]=s("vue-router")),p(t)])])]),a("h2",v,[n[16]||(n[16]=a("a",{class:"header-anchor",href:"#编写插件","aria-hidden":"true"},"#",-1)),n[17]||(n[17]=s()),a("a",y,[n[15]||(n[15]=s("#")),p(t)]),n[18]||(n[18]=s("编写插件"))]),n[22]||(n[22]=o(`<p>当这个插件被添加到应用程序中时，如果它是一个对象，就会调用 <code>install</code> 方法。如果它是一个 <code>function</code>，则函数本身将被调用。在这两种情况下——它都会收到两个参数：由 Vue 的 <code>createApp</code> 生成的 <code>app</code> 对象和用户传入的选项。</p><p>让我们从设置插件对象开始。建议在单独的文件中创建它并将其导出，如下所示，以保持包含的逻辑和分离的逻辑。</p><h3 id="自定义组件ui" tabindex="-1"><a class="header-anchor" href="#自定义组件ui" aria-hidden="true">#</a> 自定义组件UI</h3><div class="language-html" data-ext="html"><pre class="language-html"><code><span class="token comment">&lt;!-- path

|--usec
|--|--MyButton.vue
|--|--index.js

|--mail.js

--&gt;</span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span>          
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>my_bt<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span> 
            <span class="token comment">&lt;!--  使用插槽 --&gt;</span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>slot</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>slot</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">name</span><span class="token operator">:</span><span class="token string">&#39;MyButton&#39;</span>
<span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span> <span class="token attr-name">scoped</span><span class="token punctuation">&gt;</span></span><span class="token style"><span class="token language-css">
<span class="token comment">/* @import url(); 引入css类 */</span>

<span class="token selector">.my_bt</span> <span class="token punctuation">{</span>
    <span class="token property">padding</span><span class="token punctuation">:</span> 10px<span class="token punctuation">;</span>
    <span class="token property">background-color</span><span class="token punctuation">:</span> #ccb43f<span class="token punctuation">;</span>
    <span class="token property">color</span><span class="token punctuation">:</span> #fff<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.my_bt:hover</span> <span class="token punctuation">{</span>
    <span class="token property">cursor</span><span class="token punctuation">:</span> pointer<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><ul><li>定义js</li></ul><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// index.js</span>
<span class="token comment">// 定义 /usec/MyButton.vue</span>
<span class="token keyword">import</span> MyButton <span class="token keyword">from</span> <span class="token string">&#39;@/usec/MyButton&#39;</span><span class="token punctuation">;</span>

<span class="token comment">/*  /usec/index.js */</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
    <span class="token function-variable function">install</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token parameter">app<span class="token punctuation">,</span> options</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
        <span class="token comment">//    注册自定义组件</span>
        app<span class="token punctuation">.</span><span class="token function">component</span><span class="token punctuation">(</span>MyButton<span class="token punctuation">.</span>name<span class="token punctuation">,</span> MyButton<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token comment">// 多个组件</span>
<span class="token keyword">const</span> comps <span class="token operator">=</span> <span class="token punctuation">[</span>
    MyButton
<span class="token punctuation">]</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
    <span class="token function-variable function">install</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token parameter">app<span class="token punctuation">,</span> options</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
        <span class="token comment">//    注册自定义组件</span>
        <span class="token comment">// 使用循环注册</span>
        <span class="token comment">/*
            使用循环注册
            options 获取app.use 参数，来进行逻辑上的按需引入
            opt:[&#39;input &#39;,&#39;mybutton&#39;,&#39;hoverlist&#39;]
            if(comp.name == opt[i]){
                app.compoment
            }
        */</span>
        comps<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token parameter">comp</span><span class="token operator">=&gt;</span><span class="token punctuation">{</span>
            app<span class="token punctuation">.</span><span class="token function">component</span><span class="token punctuation">(</span>comp<span class="token punctuation">.</span>name<span class="token punctuation">,</span> comp<span class="token punctuation">)</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><ul><li>在<code>main.js</code>中使用</li></ul><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">import</span> MyUI <span class="token keyword">from</span> <span class="token string">&#39;@/usec&#39;</span>
<span class="token keyword">const</span> app <span class="token operator">=</span> <span class="token function">createApp</span><span class="token punctuation">(</span>App<span class="token punctuation">)</span><span class="token punctuation">;</span>

app<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>MyUI<span class="token punctuation">,</span>
<span class="token comment">// 可根据此选项选择按需导入 </span>
 <span class="token punctuation">{</span>
     <span class="token literal-property property">opt</span><span class="token operator">:</span><span class="token punctuation">[</span><span class="token string">&#39;input &#39;</span><span class="token punctuation">,</span><span class="token string">&#39;mybutton&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;hoverlist&#39;</span><span class="token punctuation">]</span>
 <span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre></div><h3 id="按需导入" tabindex="-1"><a class="header-anchor" href="#按需导入" aria-hidden="true">#</a> 按需导入</h3><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code>
<span class="token keyword">const</span> comps <span class="token operator">=</span> <span class="token punctuation">[</span>
    MyButton
<span class="token punctuation">]</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
    <span class="token function-variable function">install</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token parameter">app<span class="token punctuation">,</span> options</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
        <span class="token comment">//    注册自定义组件</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>options<span class="token punctuation">,</span><span class="token string">&#39;options&#39;</span><span class="token punctuation">)</span>
        <span class="token comment">// 使用循环注册</span>
        <span class="token comment">/*
            使用循环注册
            options 获取app.use 参数，来进行逻辑上的按需引入
        */</span>
        comps<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token parameter">comp</span><span class="token operator">=&gt;</span><span class="token punctuation">{</span>
            app<span class="token punctuation">.</span><span class="token function">component</span><span class="token punctuation">(</span>comp<span class="token punctuation">.</span>name<span class="token punctuation">,</span> comp<span class="token punctuation">)</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><h3 id="最后参考" tabindex="-1"><a class="header-anchor" href="#最后参考" aria-hidden="true">#</a> 最后参考</h3>`,11)),a("p",null,[a("a",b,[n[19]||(n[19]=s("awesome-vue")),p(t)]),n[20]||(n[20]=s(" 集合了大量由社区贡献的插件和库。"))])])}const B=e(i,[["render",x],["__file","vx_d_use.html.vue"]]);export{B as default};
