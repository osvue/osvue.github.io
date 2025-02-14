import{_ as s,p as n,q as a,a1 as t}from"./framework-d81ad7e5.js";const p={},o=t(`<h1 id="babel-兼容低版本浏览器" tabindex="-1"><a class="header-anchor" href="#babel-兼容低版本浏览器" aria-hidden="true">#</a> babel 兼容低版本浏览器</h1><h2 id="如何将es6转换成es5" tabindex="-1"><a class="header-anchor" href="#如何将es6转换成es5" aria-hidden="true">#</a> 如何将ES6转换成ES5？</h2><p>一、 介绍 ECMAScript 6(ES6)的发展速度非常之快，但现代浏览器对ES6新特性支持度不高，所以要想在浏览器中直接使用ES6的新特性就得借助别的工具来实现。</p><ul><li><strong>Babel</strong>是一个广泛使用的转码器，babel可以将ES6代码完美地转换为ES5代码，所以我们不用等到浏览器的支持就可以在项目中使用ES6的特性。</li></ul><p>二、使用 1、新建工程文件夹这里起名叫做es6,然后在里面创建两个文件夹分别为src 、js</p><ul><li>(src为待转换es6 js存放目录，js为编译完成后的es5 js存放目录)</li></ul><p>2、在src目录下新建一个js文件（这里起名叫做index.js），里面输入es6的代码：</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">let</span> b <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>b<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> name <span class="token operator">=</span> <span class="token string">&#39;张三&#39;</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>name<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">let</span> c <span class="token operator">=</span> <span class="token string">&#39;成功了么&#39;</span><span class="token punctuation">;</span>
<span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>c<span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">200</span><span class="token punctuation">)</span>
</code></pre></div><p>3、 初始化项目</p><p>1）打开终端命令提示符 进入工程目录（这里也就是es6文件夹）输入如下命令初始化项目：（这里用的npm,国内用户建议用cnpm不懂得可以移步至淘宝镜像使用）命令执行完成后会在根目录生成package.json文件。</p><p><code>npm init -y </code></p><ul><li>//-y是指表示全部默认，不需要一个一个敲回车 2）打开我们可以看到里面的内容（可以根据自己的需要进行修改，比如我们修改name的值。）</li></ul><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token punctuation">{</span>
  <span class="token string-property property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;es6&quot;</span><span class="token punctuation">,</span>
  <span class="token string-property property">&quot;version&quot;</span><span class="token operator">:</span> <span class="token string">&quot;1.0.0&quot;</span><span class="token punctuation">,</span>
  <span class="token string-property property">&quot;description&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
  <span class="token string-property property">&quot;main&quot;</span><span class="token operator">:</span> <span class="token string">&quot;index.js&quot;</span><span class="token punctuation">,</span>
  <span class="token string-property property">&quot;scripts&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token string-property property">&quot;test&quot;</span><span class="token operator">:</span> <span class="token string">&quot;echo \\&quot;Error: no test specified\\&quot; &amp;&amp; exit 1&quot;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token string-property property">&quot;author&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
  <span class="token string-property property">&quot;license&quot;</span><span class="token operator">:</span> <span class="token string">&quot;ISC&quot;</span>
<span class="token punctuation">}</span>
 
</code></pre></div><div class="language-text" data-ext="text"><pre class="language-text"><code>
进入到项目,初始化 package.json     npm init -y

安装 babel 
	npm install --save-dev babel-preset-env babel-cli
	
创建文件并配置  .babelrc
 
{
    // babel 配置 ES6 =&gt; ES5
    &quot;presets&quot;:[&quot;env&quot;]
}
 

		文件转换
	文件: babel src/index.js -o dist/index.js
	
	文件夹: babel src -d dist 
	
	实时监控: babel src -w -d dist
	
	
使用 polyfill	
	https://github.com/idev365-team/idev365_learn_babel
</code></pre></div><h2 id="全局安装babel工具" tabindex="-1"><a class="header-anchor" href="#全局安装babel工具" aria-hidden="true">#</a> 全局安装babel工具</h2><ol><li>在终端中输入以下命令,</li></ol><p><strong>npm install -g babel-cli</strong></p><ol start="2"><li>虽然已经安装了babel-cli，只是这样还不能成功进行转换，我们还需要安装转换包才能成功转换。</li></ol><p><strong>npm install --save-dev babel-preset-es2015 babel-cli</strong> 3. 安装完成后，我们可以看一下我们的package.json文件，已经多了devDependencies选项。</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token punctuation">{</span>
  <span class="token string-property property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;es6&quot;</span><span class="token punctuation">,</span>
  <span class="token string-property property">&quot;version&quot;</span><span class="token operator">:</span> <span class="token string">&quot;1.0.0&quot;</span><span class="token punctuation">,</span>
  <span class="token string-property property">&quot;description&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
  <span class="token string-property property">&quot;main&quot;</span><span class="token operator">:</span> <span class="token string">&quot;index.js&quot;</span><span class="token punctuation">,</span>
  <span class="token string-property property">&quot;scripts&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token string-property property">&quot;test&quot;</span><span class="token operator">:</span> <span class="token string">&quot;echo \\&quot;Error: no test specified\\&quot; &amp;&amp; exit 1&quot;</span><span class="token punctuation">,</span>
    <span class="token string-property property">&quot;dev&quot;</span><span class="token operator">:</span><span class="token string">&quot;babel src --out-dir js&quot;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token string-property property">&quot;author&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
  <span class="token string-property property">&quot;license&quot;</span><span class="token operator">:</span> <span class="token string">&quot;ISC&quot;</span><span class="token punctuation">,</span>
  <span class="token string-property property">&quot;devDependencies&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token string-property property">&quot;babel-cli&quot;</span><span class="token operator">:</span> <span class="token string">&quot;^6.26.0&quot;</span><span class="token punctuation">,</span>
    <span class="token string-property property">&quot;babel-preset-es2015&quot;</span><span class="token operator">:</span> <span class="token string">&quot;^6.24.1&quot;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span> 
</code></pre></div><p>四、新建.babelrc 在项目根目录新建(.babelrc)文件输入如图所示代码：</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token punctuation">{</span>
    <span class="token string-property property">&quot;presets&quot;</span><span class="token operator">:</span><span class="token punctuation">[</span>
        <span class="token string">&quot;es2015&quot;</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token string-property property">&quot;plugins&quot;</span><span class="token operator">:</span><span class="token punctuation">[</span><span class="token punctuation">]</span>
<span class="token punctuation">}</span>

</code></pre></div><p>五、现在你可以尽情转换了 终端输入如下命令：（babel 待转换路径/ --out-dir 转换后路径/） 我们这里是从src转换到js目录下</p><p><strong>babel src --out-dir js</strong></p><ul><li>现在我们js目录下面就生成了编译后的js</li><li>通过修改package.json里面的别名来实现编译 修改</li></ul><ul><li><strong>(“dev”:“babel src --out-dir js”)</strong></li></ul><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token punctuation">{</span>
  <span class="token string-property property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;es6&quot;</span><span class="token punctuation">,</span>
  <span class="token string-property property">&quot;version&quot;</span><span class="token operator">:</span> <span class="token string">&quot;1.0.0&quot;</span><span class="token punctuation">,</span>
  <span class="token string-property property">&quot;description&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
  <span class="token string-property property">&quot;main&quot;</span><span class="token operator">:</span> <span class="token string">&quot;index.js&quot;</span><span class="token punctuation">,</span>
  <span class="token string-property property">&quot;scripts&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token string-property property">&quot;test&quot;</span><span class="token operator">:</span> <span class="token string">&quot;echo \\&quot;Error: no test specified\\&quot; &amp;&amp; exit 1&quot;</span><span class="token punctuation">,</span>
    <span class="token string-property property">&quot;dev&quot;</span><span class="token operator">:</span><span class="token string">&quot;babel src --out-dir js&quot;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token string-property property">&quot;author&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
  <span class="token string-property property">&quot;license&quot;</span><span class="token operator">:</span> <span class="token string">&quot;ISC&quot;</span>
<span class="token punctuation">}</span>
</code></pre></div><p>以后只需要如下命令就可以编译了</p><p><strong>npm run dev</strong></p>`,29),e=[o];function r(c,u){return n(),a("div",null,e)}const i=s(p,[["render",r],["__file","es601_ForES5.html.vue"]]);export{i as default};
