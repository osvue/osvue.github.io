import{_ as n,p as s,q as a,a1 as t}from"./framework-d81ad7e5.js";const p={},o=t(`<blockquote><p>shell tsc</p></blockquote><ul><li><code> &quot;strict&quot;: true</code> 严格模式</li></ul><div class="language-json" data-ext="json"><pre class="language-json"><code>
<span class="token punctuation">{</span>
<span class="token comment">/*
  tsconfig.json是ts编译器的配置文件，ts编译器可以根据它的信息来对代码进行编译
    &quot;include&quot; 用来指定哪些ts文件需要被编译
      路径：** 表示任意目录
            * 表示任意文件
    &quot;exclude&quot; 不需要被编译的文件目录
        默认值：[&quot;node_modules&quot;, &quot;bower_components&quot;, &quot;jspm_packages&quot;]

*/</span>
  <span class="token property">&quot;include&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token string">&quot;./src/**/*&quot;</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token comment">//  &quot;exclude&quot;: [</span>
<span class="token comment">//    &quot;./src/hello/**/*&quot;</span>
<span class="token comment">//  ]</span>

  <span class="token comment">/*
    compilerOptions 编译器的选项
  */</span>
  <span class="token property">&quot;compilerOptions&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>

    <span class="token comment">// target 用来指定ts被编译为的ES的版本</span>
    <span class="token comment">// &#39;es3&#39;, &#39;es5&#39;, &#39;es6&#39;, &#39;es2015&#39;, &#39;es2016&#39;, &#39;es2017&#39;, &#39;es2018&#39;, &#39;es2019&#39;, &#39;es2020&#39;, &#39;esnext&#39;</span>
    <span class="token property">&quot;target&quot;</span><span class="token operator">:</span> <span class="token string">&quot;es2015&quot;</span><span class="token punctuation">,</span>
    <span class="token comment">// module 指定要使用的模块化的规范</span>
    <span class="token comment">// &#39;none&#39;, &#39;commonjs&#39;, &#39;amd&#39;, &#39;system&#39;, &#39;umd&#39;, &#39;es6&#39;, &#39;es2015&#39;, &#39;es2020&#39;, &#39;esnext&#39;</span>
    <span class="token property">&quot;module&quot;</span><span class="token operator">:</span> <span class="token string">&quot;es2015&quot;</span><span class="token punctuation">,</span>
    <span class="token comment">// lib用来指定项目中要使用的库</span>
    <span class="token comment">//&#39;es5&#39;, &#39;es6&#39;, &#39;es2015&#39;, &#39;es7&#39;, &#39;es2016&#39;, &#39;es2017&#39;, &#39;es</span>
    <span class="token comment">//2018&#39;, &#39;es2019&#39;, &#39;es2020&#39;, &#39;esnext&#39;, &#39;dom&#39;, &#39;dom.iterable&#39;, &#39;webworker&#39;, &#39;webworker.importscripts&#39;, &#39;webworker.iterable&#39;, &#39;scri</span>
    <span class="token comment">//pthost&#39;, &#39;es2015.core&#39;, &#39;es2015.collection&#39;, &#39;es2015.generator&#39;, &#39;es2015.iterable&#39;, &#39;es2015.promise&#39;, &#39;es2015.proxy&#39;, &#39;es2015.r</span>
    <span class="token comment">//eflect&#39;, &#39;es2015.symbol&#39;, &#39;es2015.symbol.wellknown&#39;, &#39;es2016.array.include&#39;, &#39;es2017.object&#39;, &#39;es2017.sharedmemory&#39;, &#39;es2017.st</span>
    <span class="token comment">//ring&#39;, &#39;es2017.intl&#39;, &#39;es2017.typedarrays&#39;, &#39;es2018.asyncgenerator&#39;, &#39;es2018.asynciterable&#39;, &#39;es2018.intl&#39;, &#39;es2018.promise&#39;, &#39;</span>
    <span class="token comment">//es2018.regexp&#39;, &#39;es2019.array&#39;, &#39;es2019.object&#39;, &#39;es2019.string&#39;, &#39;es2019.symbol&#39;, &#39;es2020.bigint&#39;, &#39;es2020.promise&#39;, &#39;es2020.s</span>
    <span class="token comment">//haredmemory&#39;, &#39;es2020.string&#39;, &#39;es2020.symbol.wellknown&#39;, &#39;es2020.intl&#39;, &#39;esnext.array&#39;, &#39;esnext.symbol&#39;, &#39;esnext.asynciterable</span>
    <span class="token comment">//&#39;, &#39;esnext.intl&#39;, &#39;esnext.bigint&#39;, &#39;esnext.string&#39;, &#39;esnext.promise&#39;, &#39;esnext.weakref&#39;</span>
<span class="token comment">//    &quot;lib&quot;: [&quot;es6&quot;, &quot;dom&quot;]</span>


    <span class="token comment">// outDir 用来指定编译后文件所在的目录</span>
    <span class="token property">&quot;outDir&quot;</span><span class="token operator">:</span> <span class="token string">&quot;./dist&quot;</span><span class="token punctuation">,</span>

    <span class="token comment">// 将代码合并为一个文件</span>
    <span class="token comment">// 设置outFile后，所有的全局作用域中的代码会合并到同一个文件中</span>
    <span class="token comment">//&quot;outFile&quot;: &quot;./dist/app.js&quot;</span>

    <span class="token comment">// 是否对js文件进行编译，默认是false</span>
<span class="token comment">//    &quot;allowJs&quot;: true,</span>
    <span class="token comment">// 是否检查js代码是否符合语法规范，默认是false</span>
<span class="token comment">//    &quot;checkJs&quot;: true,</span>
    <span class="token comment">// 是否移除注释</span>
    <span class="token property">&quot;removeComments&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token comment">// 不生成编译后的文件</span>
    <span class="token property">&quot;noEmit&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>


    <span class="token comment">// 当有错误时不生成编译后的文件</span>
    <span class="token property">&quot;noEmitOnError&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>

    <span class="token comment">// 所有严格检查的总开关</span>
    <span class="token property">&quot;strict&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>

    <span class="token comment">// 用来设置编译后的文件是否使用严格模式，默认false</span>
    <span class="token property">&quot;alwaysStrict&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>

    <span class="token comment">// 不允许隐式的any类型</span>
    <span class="token property">&quot;noImplicitAny&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>

    <span class="token comment">// 不允许不明确类型的this</span>
    <span class="token property">&quot;noImplicitThis&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>

    <span class="token comment">// 严格的检查空值</span>
    <span class="token property">&quot;strictNullChecks&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span>


  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><h3 id="webpack" tabindex="-1"><a class="header-anchor" href="#webpack" aria-hidden="true">#</a> webpack</h3><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 引入一个包</span>
<span class="token keyword">const</span> path <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;path&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// 引入html插件</span>
<span class="token keyword">const</span> HTMLWebpackPlugin <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;html-webpack-plugin&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// 引入clean插件</span>
<span class="token keyword">const</span> <span class="token punctuation">{</span> CleanWebpackPlugin <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;clean-webpack-plugin&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// webpack中的所有的配置信息都应该写在module.exports中</span>
module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>

    <span class="token comment">// 指定入口文件</span>
    <span class="token literal-property property">entry</span><span class="token operator">:</span> <span class="token string">&quot;./src/index.ts&quot;</span><span class="token punctuation">,</span>

    <span class="token comment">// 指定打包文件所在目录</span>
    <span class="token literal-property property">output</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token comment">// 指定打包文件的目录</span>
        <span class="token literal-property property">path</span><span class="token operator">:</span> path<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token string">&#39;dist&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
        <span class="token comment">// 打包后文件的文件</span>
        <span class="token literal-property property">filename</span><span class="token operator">:</span> <span class="token string">&quot;bundle.js&quot;</span><span class="token punctuation">,</span>

        <span class="token comment">// 告诉webpack不使用箭头</span>
        <span class="token literal-property property">environment</span><span class="token operator">:</span><span class="token punctuation">{</span>
            <span class="token literal-property property">arrowFunction</span><span class="token operator">:</span> <span class="token boolean">false</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>

    <span class="token comment">// 指定webpack打包时要使用模块</span>
    <span class="token literal-property property">module</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token comment">// 指定要加载的规则</span>
        <span class="token literal-property property">rules</span><span class="token operator">:</span> <span class="token punctuation">[</span>
            <span class="token punctuation">{</span>
                <span class="token comment">// test指定的是规则生效的文件</span>
                <span class="token literal-property property">test</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\\.ts$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span>
                <span class="token comment">// 要使用的loader</span>
                <span class="token literal-property property">use</span><span class="token operator">:</span> <span class="token punctuation">[</span>
                     <span class="token comment">// 配置babel</span>
                     <span class="token punctuation">{</span>
                         <span class="token comment">// 指定加载器</span>
                         <span class="token literal-property property">loader</span><span class="token operator">:</span><span class="token string">&quot;babel-loader&quot;</span><span class="token punctuation">,</span>
                         <span class="token comment">// 设置babel</span>
                         <span class="token literal-property property">options</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                             <span class="token comment">// 设置预定义的环境</span>
                             <span class="token literal-property property">presets</span><span class="token operator">:</span><span class="token punctuation">[</span>
                                 <span class="token punctuation">[</span>
                                     <span class="token comment">// 指定环境的插件</span>
                                     <span class="token string">&quot;@babel/preset-env&quot;</span><span class="token punctuation">,</span>
                                     <span class="token comment">// 配置信息</span>
                                     <span class="token punctuation">{</span>
                                         <span class="token comment">// 要兼容的目标浏览器</span>
                                         <span class="token literal-property property">targets</span><span class="token operator">:</span><span class="token punctuation">{</span>
                                             <span class="token string-property property">&quot;chrome&quot;</span><span class="token operator">:</span><span class="token string">&quot;58&quot;</span><span class="token punctuation">,</span>
                                             <span class="token string-property property">&quot;ie&quot;</span><span class="token operator">:</span><span class="token string">&quot;11&quot;</span>
                                         <span class="token punctuation">}</span><span class="token punctuation">,</span>
                                         <span class="token comment">// 指定corejs的版本</span>
                                         <span class="token string-property property">&quot;corejs&quot;</span><span class="token operator">:</span><span class="token string">&quot;3&quot;</span><span class="token punctuation">,</span>
                                         <span class="token comment">// 使用corejs的方式 &quot;usage&quot; 表示按需加载</span>
                                         <span class="token string-property property">&quot;useBuiltIns&quot;</span><span class="token operator">:</span><span class="token string">&quot;usage&quot;</span>
                                     <span class="token punctuation">}</span>
                                 <span class="token punctuation">]</span>
                             <span class="token punctuation">]</span>
                         <span class="token punctuation">}</span>
                     <span class="token punctuation">}</span><span class="token punctuation">,</span>
                    <span class="token string">&#39;ts-loader&#39;</span>
                <span class="token punctuation">]</span><span class="token punctuation">,</span>
                <span class="token comment">// 要排除的文件</span>
                <span class="token literal-property property">exclude</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">node-modules</span><span class="token regex-delimiter">/</span></span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">]</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>

    <span class="token comment">// 配置Webpack插件</span>
    <span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token keyword">new</span> <span class="token class-name">CleanWebpackPlugin</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
        <span class="token keyword">new</span> <span class="token class-name">HTMLWebpackPlugin</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
            <span class="token comment">// title: &quot;这是一个自定义的title&quot;</span>
            <span class="token literal-property property">template</span><span class="token operator">:</span> <span class="token string">&quot;./src/index.html&quot;</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>

    <span class="token comment">// 用来设置引用模块</span>
    <span class="token literal-property property">resolve</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">extensions</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;.ts&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;.js&#39;</span><span class="token punctuation">]</span>
    <span class="token punctuation">}</span>

<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre></div><h3 id="package-json" tabindex="-1"><a class="header-anchor" href="#package-json" aria-hidden="true">#</a> package.json</h3><div class="language-json" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;part3&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;version&quot;</span><span class="token operator">:</span> <span class="token string">&quot;1.0.0&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;description&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;main&quot;</span><span class="token operator">:</span> <span class="token string">&quot;index.js&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;scripts&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;test&quot;</span><span class="token operator">:</span> <span class="token string">&quot;echo \\&quot;Error: no test specified\\&quot; &amp;&amp; exit 1&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;build&quot;</span><span class="token operator">:</span> <span class="token string">&quot;webpack&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;start&quot;</span><span class="token operator">:</span> <span class="token string">&quot;webpack serve --open chrome.exe&quot;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">&quot;keywords&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token property">&quot;author&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;license&quot;</span><span class="token operator">:</span> <span class="token string">&quot;ISC&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;devDependencies&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;@babel/core&quot;</span><span class="token operator">:</span> <span class="token string">&quot;^7.12.9&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;@babel/preset-env&quot;</span><span class="token operator">:</span> <span class="token string">&quot;^7.12.7&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;babel-loader&quot;</span><span class="token operator">:</span> <span class="token string">&quot;^8.2.2&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;clean-webpack-plugin&quot;</span><span class="token operator">:</span> <span class="token string">&quot;^3.0.0&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;core-js&quot;</span><span class="token operator">:</span> <span class="token string">&quot;^3.8.0&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;html-webpack-plugin&quot;</span><span class="token operator">:</span> <span class="token string">&quot;^4.5.0&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;ts-loader&quot;</span><span class="token operator">:</span> <span class="token string">&quot;^8.0.11&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;typescript&quot;</span><span class="token operator">:</span> <span class="token string">&quot;^4.1.2&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;webpack&quot;</span><span class="token operator">:</span> <span class="token string">&quot;^5.6.0&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;webpack-cli&quot;</span><span class="token operator">:</span> <span class="token string">&quot;^4.2.0&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;webpack-dev-server&quot;</span><span class="token operator">:</span> <span class="token string">&quot;^3.11.0&quot;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre></div>`,7),e=[o];function c(l,r){return s(),a("div",null,e)}const k=n(p,[["render",c],["__file","tsconfig.html.vue"]]);export{k as default};
