import{_ as n,p as a,q as s,a1 as t}from"./framework-d81ad7e5.js";const p={},e=t(`<h2 id="vue" tabindex="-1"><a class="header-anchor" href="#vue" aria-hidden="true">#</a> <code>Vue</code></h2><blockquote><p>简介 : 一套用于构建用户界面的渐进式<code>JavaScript</code>框架。</p><p>作者 : 尤雨溪</p><p>官网 : https://cn.vuejs.org/</p></blockquote><h3 id="vue的特点" tabindex="-1"><a class="header-anchor" href="#vue的特点" aria-hidden="true">#</a> <code>Vue</code>的特点</h3><ul><li>轻量级(压缩后只有33K)</li><li>更高的运行效率 <ul><li>从传统的操作<code>DOM</code>节点过度到了虚拟的<code>DOM</code></li></ul></li><li>双向数据绑定 <ul><li>让开发者不用再去操作<code>DOM</code> , 而是把更多精力投入到业务逻辑上</li></ul></li><li>生态丰富 , 学习成本低</li></ul><h3 id="mvvm架构" tabindex="-1"><a class="header-anchor" href="#mvvm架构" aria-hidden="true">#</a> <code>MVVM</code>架构</h3><blockquote><p><code>MVVM</code> : 由 <code>Model</code> , <code>View</code> , <code>ViewModel</code> 三部分构成</p></blockquote><h4 id="model" tabindex="-1"><a class="header-anchor" href="#model" aria-hidden="true">#</a> <code>Model </code></h4><blockquote><p>代表数据模型，也可以在<code>Model</code>中定义数据修改和操作的业务逻辑；主要将数据和页面进行分离</p></blockquote><h4 id="view" tabindex="-1"><a class="header-anchor" href="#view" aria-hidden="true">#</a> <code>View </code></h4><blockquote><p>代表<code>UI </code>组件，它负责将数据模型转化成<code>UI</code> 展现出来</p></blockquote><h4 id="viewmodel" tabindex="-1"><a class="header-anchor" href="#viewmodel" aria-hidden="true">#</a> <code>ViewModel</code></h4><blockquote><p><code>ViewModel</code> 是一个同步View 和 Model的对象。</p></blockquote><h3 id="vue-cli-3-0-vue-init-projectname" tabindex="-1"><a class="header-anchor" href="#vue-cli-3-0-vue-init-projectname" aria-hidden="true">#</a> vue cli 3.0 <code>vue init projectName</code></h3><h3 id="vue-cli-4-0-vue-create-projectname" tabindex="-1"><a class="header-anchor" href="#vue-cli-4-0-vue-create-projectname" aria-hidden="true">#</a> vue cli 4.0 <code>vue create projectName</code></h3><h3 id="目录结构" tabindex="-1"><a class="header-anchor" href="#目录结构" aria-hidden="true">#</a> 目录结构</h3><div class="language-text" data-ext="text"><pre class="language-text"><code>├── build                      # 构建相关
├── static                     # 静态资源
│   │── img                    # 图片
│   │── favicon.ico            # favicon图标
│   └── index.html             # html模板
│   │── Tinymce                # 富文本
├── src                        # 源代码
│   ├── api                    # 所有请求
│   ├── assets                 # 主题 字体等静态资源
│   ├── components             # 全局公用组件
│   ├── directive              # 全局指令
│   ├── icons                  # 项目所有 svg icons
│   ├── lang                   # 国际化 language
│   ├── layout                 # 全局 layout
│   ├── router                 # 路由
│   ├── store                  # 全局 store管理
│   ├── styles                 # 全局样式
│   ├── utils                  # 全局公用方法
│   ├── views                  # views 所有页面
│   ├── App.vue                # 入口页面
│   ├── main.js                # 入口文件 加载组件 初始化等
│   └── permission.js          # 权限管理
├── tests                      # 测试
├── .env.xxx                   # 环境变量配置
├── .eslintrc.js               # eslint 配置项
├── .gitignore                 # git 配置项
├── .babelrc                   # babel-loader 配置
├── .travis.yml                # 自动化CI配置
├── vue.config.js              # vue-cli 配置
└── package.json               # package.json
</code></pre></div><h2 id="vue中data里为什么要写return返回" tabindex="-1"><a class="header-anchor" href="#vue中data里为什么要写return返回" aria-hidden="true">#</a> vue中data里为什么要写return返回</h2><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code>    <span class="token comment">// 在简单的vue实例中看到的Vue实例中data属性是如下方式展示的：</span>
    <span class="token keyword">let</span> app <span class="token operator">=</span> <span class="token function">newVue</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
        <span class="token literal-property property">el</span><span class="token operator">:</span> <span class="token string">&quot;#app&quot;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">data</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token literal-property property">msg</span><span class="token operator">:</span> <span class="token string">&#39;&#39;</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token literal-property property">methods</span><span class="token operator">:</span> <span class="token punctuation">{</span>

        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token comment">// 在使用组件化的项目中使用的是如下形式：</span>
    <span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
        <span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span> <span class="token punctuation">{</span>

            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token literal-property property">methods</span><span class="token operator">:</span> <span class="token punctuation">{</span>

        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
</code></pre></div><div class="custom-container danger"><p class="custom-container-title">DANGER</p><p>为什么要写renturn返回 <br> 因为不使用return包裹的数据会在项目的全局可见，会造成变量污染<br> 使用return包裹后数据中变量只在当前组件中生效，不会影响其他组件。<br></p></div><h2 id="export-default与export" tabindex="-1"><a class="header-anchor" href="#export-default与export" aria-hidden="true">#</a> export default与export</h2><h3 id="es6与node中导入与暴露成员的方式" tabindex="-1"><a class="header-anchor" href="#es6与node中导入与暴露成员的方式" aria-hidden="true">#</a> ES6与Node中导入与暴露成员的方式</h3><ul><li><p>使用Node暴露与导入的方式</p><ul><li><p>导入</p><ul><li>在Node中使用 var 名称 = require(&#39;模块标识符&#39;); 来导入成员</li></ul></li><li><p>暴露成员</p><ul><li><code>moudle.exports={} 和 exports来暴露成员</code></li></ul></li></ul></li><li><p>使用ES6方式暴露成员与导入模块 在ES6中，也通过规范的形式，规定了ES6中如何导入和导出模块</p><ul><li><p>导入</p><ul><li>ES6中导入模块，使用 <code>import 模块名称 from &#39;模块标识符&#39;</code> 或者 <code>import &#39;标识路径&#39;</code></li></ul></li><li><p>暴露成员</p><ul><li>在ES6中使用<strong>export default</strong> 和 <strong>export</strong>向外暴露成员</li></ul></li></ul></li></ul><p>案例：</p><ol><li>新建一个test.js文件</li></ol><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">export</span> <span class="token keyword">default</span><span class="token punctuation">{</span>
​    name<span class="token operator">:</span><span class="token string">&#39;张三&#39;</span><span class="token punctuation">,</span>
​    age<span class="token operator">:</span><span class="token number">21</span>
<span class="token punctuation">}</span>

<span class="token doc-comment comment">/** 也可以这样暴露
var info = <span class="token punctuation">{</span>
​    name:&#39;张三&#39;,
​    age:21
<span class="token punctuation">}</span>
export default info;
*/</span>
</code></pre></div><ol start="2"><li>在main.js中导入test.js文件</li></ol><p><code>import m1 from &#39;./test.js&#39;; alert(m1.name);</code> 项目打包运行，弹出张三</p><p>注意：</p><ol><li><p>在main.js文件 import 模块名称 这个模块名称是自定义的，也就是说通过export default暴露的成员可以使用任意的变量来接收。</p></li><li><p>在一个模块中，只允许export default向外暴露一次</p></li><li><p>在一个模块中，可以同时使用export default和export向外暴露成员</p></li><li><p>通过“<strong>export var 变量名 = 内容</strong>” 形式向外暴露的接口，只能通过 **{模块名}<strong>的形式来接收，这种方式，叫做【按需导出】且，模块名必须和export的变量名保持一致，如果不想一致怎么办？可以通过</strong>{模块名 as 自定义名称}**的形式</p></li><li><p>export可以向外暴露多个成员，同时，如果某些成员，我们在import的时候不需要，则可以不在{}中定义，意思是，即使你向外通过export暴露了多个成员，我也可以在import 的时候，在{}中，引入一个或者多个，这种方式就是按需导入。</p></li></ol><p>例如：</p><p>在test.js中暴露两个成员</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">export</span> <span class="token keyword">default</span><span class="token punctuation">{</span>
​    name<span class="token operator">:</span><span class="token string">&#39;张三&#39;</span><span class="token punctuation">,</span>
​    age<span class="token operator">:</span><span class="token number">21</span>
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">var</span> info <span class="token operator">=</span> <span class="token punctuation">{</span>
​    name<span class="token operator">:</span><span class="token string">&#39;李四&#39;</span><span class="token punctuation">,</span>
​    age<span class="token operator">:</span><span class="token number">22</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">var</span> content <span class="token operator">=</span> <span class="token string">&#39;你好 export！&#39;</span><span class="token punctuation">;</span>
</code></pre></div><h4 id="在main-js中接收" tabindex="-1"><a class="header-anchor" href="#在main-js中接收" aria-hidden="true">#</a> 在main.js中接收</h4><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">import</span> m1<span class="token punctuation">,</span><span class="token punctuation">{</span>info<span class="token punctuation">,</span>content<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;./test.js&#39;</span><span class="token punctuation">;</span>
<span class="token function">alert</span><span class="token punctuation">(</span>m1<span class="token punctuation">.</span>name<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token function">alert</span><span class="token punctuation">(</span>info<span class="token punctuation">.</span>name<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token function">alert</span><span class="token punctuation">(</span>content<span class="token punctuation">)</span><span class="token punctuation">;</span> 
</code></pre></div><h2 id="响应式" tabindex="-1"><a class="header-anchor" href="#响应式" aria-hidden="true">#</a> 响应式</h2><div class="language-html" data-ext="html"><pre class="language-html"><code><span class="token doctype"><span class="token punctuation">&lt;!</span><span class="token doctype-tag">DOCTYPE</span> <span class="token name">html</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>en<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">charset</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>UTF-8<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">http-equiv</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>X-UA-Compatible<span class="token punctuation">&quot;</span></span> <span class="token attr-name">content</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>IE=edge<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>viewport<span class="token punctuation">&quot;</span></span> <span class="token attr-name">content</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>width=device-width, initial-scale=1.0<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>https://cdn.jsdelivr.net/npm/vue@2.5.21/dist/vue.js<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>https://unpkg.com/axios/dist/axios.min.js<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>title</span><span class="token punctuation">&gt;</span></span>Document<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>title</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>app<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span>名称：{{info.name}}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span>地址：{{info.address.country}}-{{info.address.city}}-{{info.address.street}}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span>链接：<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name"><span class="token namespace">v-bind:</span>href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>info.url<span class="token punctuation">&quot;</span></span> <span class="token attr-name">target</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>_blank<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>{{info.url}}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">&gt;</span></span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>

    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>text/javascript<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
        <span class="token keyword">var</span> vm <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Vue</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
            <span class="token literal-property property">el</span><span class="token operator">:</span> <span class="token string">&#39;#app&#39;</span><span class="token punctuation">,</span>
            <span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token keyword">return</span> <span class="token punctuation">{</span>
                    <span class="token literal-property property">info</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                        <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token keyword">null</span><span class="token punctuation">,</span>
                        <span class="token literal-property property">address</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                            <span class="token literal-property property">country</span><span class="token operator">:</span> <span class="token keyword">null</span><span class="token punctuation">,</span>
                            <span class="token literal-property property">city</span><span class="token operator">:</span> <span class="token keyword">null</span><span class="token punctuation">,</span>
                            <span class="token literal-property property">street</span><span class="token operator">:</span> <span class="token keyword">null</span>
                        <span class="token punctuation">}</span><span class="token punctuation">,</span>
                        <span class="token literal-property property">url</span><span class="token operator">:</span> <span class="token keyword">null</span>
                    <span class="token punctuation">}</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token function">mounted</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                axios
                    <span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">&#39;data.json&#39;</span><span class="token punctuation">)</span>
                    <span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token parameter">response</span> <span class="token operator">=&gt;</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>info <span class="token operator">=</span> response<span class="token punctuation">.</span>data<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    </span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>html</span><span class="token punctuation">&gt;</span></span>
</code></pre></div>`,36),o=[e];function c(l,u){return a(),s("div",null,o)}const r=n(p,[["render",c],["__file","vue_a_init.html.vue"]]);export{r as default};
