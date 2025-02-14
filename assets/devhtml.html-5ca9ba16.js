import{_ as t,p as e,q as d,a1 as n}from"./framework-d81ad7e5.js";const o={},a=n(`<h2 id="总体原则" tabindex="-1"><a class="header-anchor" href="#总体原则" aria-hidden="true">#</a> 总体原则</h2><ol><li><strong>驼峰命名</strong>（<em>camelCase</em>）：用于定义 JavaScript<code>基本数据类型</code>、<code>函数方法</code>。</li><li><strong>帕斯卡命名</strong>（<em>PascalCase</em>）：用于 JavaScript 声明<code>Class类</code>、<code>Object对象</code>、<code>Array数组</code>引用数据类型。</li><li><strong>短横线命名</strong>（<em>kebab-case</em>）：用于自定义<code>HTML视图</code>、<code>SCSS样式</code>、<code>Assets资源</code>，即样式与视图相关的自定义元素都采用该方式命名。</li></ol><div class="language-text" data-ext="text"><pre class="language-text"><code>&lt;div&gt;
  &lt;main id=&quot;app&quot;&gt;
    &lt;section class=&quot;article-content&quot;&gt;
      &lt;my-paragraph&gt;kebab-case&lt;/my-paragraph&gt;
    &lt;/section&gt;
  &lt;/main&gt;
  &lt;template&gt;
    &lt;style&gt;
      #app {
        background: url(../assets/banner-logo.png); // kebab-case
      }
      .article-content {
        font-size: 18px; // kebab-case
      }
    &lt;/style&gt;

    &lt;script&gt;
      let currentDate = &quot;Tue Oct 10 2017 17:52:04 GMT+0800 (CST)&quot;; // camelCase

      const changeDate = function () {
        console.log(new Date()); // camelCase
      };

      const YourName = {
        name: &quot;Hank&quot;, // PascalCase
      };
    &lt;/script&gt;
  &lt;/template&gt;
&lt;/div&gt;
</code></pre></div><blockquote><p><strong>所有代码缩进必须使用 2 个空格，并优先使用单引号&#39;，除非字符串嵌套需要，否则禁止单-双引号混用</strong>。</p></blockquote><h2 id="javascript-es6" tabindex="-1"><a class="header-anchor" href="#javascript-es6" aria-hidden="true">#</a> JavaScript &amp; ES6</h2><p>适用于使用 Babel 提供 ES6 预编译环境的场景。</p><h3 id="命名原则" tabindex="-1"><a class="header-anchor" href="#命名原则" aria-hidden="true">#</a> 命名原则</h3><p>代码块的花括号<code>{</code>、流程控制语句的小括号<code>(</code>前必须放置<strong>1 个空格</strong>，且每个函数、代码块之前通过换行进行分隔。</p><div class="language-text" data-ext="text"><pre class="language-text"><code>class Hank {
  constrocter() {
    (this.height = &quot;182cm&quot;), (this.weight = &quot;75kg&quot;);
  }

  // 换行分隔代码块
  toString() {
    // 花括号前放置空格
    if (this.height &amp;&amp; this.weight) {
      // 小括号前放置空格
      console.info(&quot;toString&quot;);
    }
  }
}
</code></pre></div><p>不要在函数参数列表的前后添加<strong>任何空格</strong>，但是可以使用<strong>1 个空格</strong>将 JavaScript 运算符分隔开，并且在每个代码文件末尾保留<strong>1 个空行</strong>。</p><div class="language-text" data-ext="text"><pre class="language-text"><code>// 函数参数列表前后不添加空格
((window) =&gt; {
  var self = window; // 使用1个空格分隔运算符
})(window);
// 保留1个空行
</code></pre></div><p>使用美元符<code>$</code>作为存储<strong>jQuery 对象</strong>变量名称的前缀。</p><div class="language-text" data-ext="text"><pre class="language-text"><code>const menu = $(&quot;#menu&quot;); // bad way

const $menu = $(&quot;#menu&quot;); // good way
</code></pre></div><p>使用下划线<code>_</code>作为代码中<strong>私有变量</strong>的前缀，避免其它小伙伴的操作对该变量造成污染。</p><div class="language-text" data-ext="text"><pre class="language-text"><code>function traverse(array) {
  let _index = 0; // 将数组索引声明为私有变量，防止误操作导致索引泄露
  for (_index; array.length &lt; _index; _index++) {
    console.log(array[_index]);
  }
}
</code></pre></div><blockquote><p><strong>严禁在项目中使用单个字母和拼音命名的变量和函数名称</strong>。</p></blockquote><h3 id="数据类型" tabindex="-1"><a class="header-anchor" href="#数据类型" aria-hidden="true">#</a> 数据类型</h3><ul><li>基本数据类型: <code>String、Number、Boolean、null、undefined</code>，使用<strong>let</strong>进行定义，不再使用 var。</li><li>引用数据类型：<code>Object、Array、Function</code>，引用数据类型全部通过<strong>const</strong>进行定义。</li></ul><div class="language-text" data-ext="text"><pre class="language-text"><code>let myBoolean = true;
let myNumber = 32;
let myString = &quot;this is a string&quot;;

const array = [0, 1, 2, 3, 4, 5];
const object = { a: &quot;a&quot;, b: &quot;b&quot;, c: &quot;c&quot; };
</code></pre></div><blockquote><p>let 和 const 都具有代码块级的作用域，书写时注意将两者进行分组。</p></blockquote><h3 id="对象" tabindex="-1"><a class="header-anchor" href="#对象" aria-hidden="true">#</a> 对象</h3><p>使用字面量语法创建对象，而不要使用<code>new</code>关键字。</p><div class="language-text" data-ext="text"><pre class="language-text"><code>const myObject = new Object(); // not recommend

const myObject = {}; // it is correct
</code></pre></div><p>对象当中的方法使用<strong>简写函数</strong>、<strong>简写属性</strong>进行定义。</p><div class="language-text" data-ext="text"><pre class="language-text"><code>let username = &quot;admin&quot;;
let password = &quot;admin&quot;;

vm.login = {
  username,
  password, // 简写属性
  // 简写函数
  auth(username, password) {
    // ... ...
  },
};
</code></pre></div><p>当对象中同时存在<em>简写属性</em>和<em>普通属性</em>时，需要将<em>简写属性</em>写到单独的组。</p><div class="language-text" data-ext="text"><pre class="language-text"><code>vm.group = {
  // 简写属性
  username,
  password,
  isAuthorized,
  // 普通属性
  age: &quot;20&quot;,
  height: 182,
  weight: 76,
  homeland: &quot;CHINA&quot;,
};
</code></pre></div><p>使用<code>.</code>运算符访问对象属性，或者使用<code>[]</code>通过变量访问属性。</p><div class="language-text" data-ext="text"><pre class="language-text"><code>const user = {
  height: 182,
  weight: 75,
};

console.info(user.height);
console.info(user[&quot;weight&quot;]);
</code></pre></div><p>ES6 中新出现的<code>class</code>关键字，实质是构造函数创建对象的一种糖衣语法，目的是更加容易的向对象添加原型方法。因此，建议尽可能使用<code>class</code>创建类及原型方法，避免在构造函数上使用<code>prototype</code>关键字。</p><div class="language-text" data-ext="text"><pre class="language-text"><code>//定义类
class Point {
  // 构造函数
  constructor(x, y) {
    this.x = x; // this指向实例对象
    this.y = y;
  }

  // 定义类方法不需要使用function关键字进行声明
  toString() {
    return this.x + this.y;
  }
}
</code></pre></div><p>通过在<code>class</code>类方法上返回<code>this</code>对象，可以在该类的实例化对象上进行<strong>链式</strong>方法调用。</p><div class="language-text" data-ext="text"><pre class="language-text"><code>class Hank {
  constructor(name, age) {
    this.age = age;
    this.name = name;
  }

  printName() {
    console.info(this.name);
    return this;
  }
  printAge() {
    console.info(this.age);
    return this;
  }
}

const hank = new Hank(&quot;uinika&quot;, 18);
hank.printName().printAge();
</code></pre></div><p>代码中尽可能使用<code>extends</code>实现继承，因为<code>extends</code>是 ES6 内建的**原型继承方法，不会对<code>instanceof()</code>的返回结果形成破坏。</p><div class="language-text" data-ext="text"><pre class="language-text"><code>class Uinika extends Hank {
  constructor(height, weight) {
    super(&quot;uinika&quot;, 18); // 实例化父级构造器
    this.height = height;
    this.weight = weight;
  }

  print() {
    console.log(this); // 打印自己以及父级构造器当中的属性
  }
}
</code></pre></div><h3 id="数组" tabindex="-1"><a class="header-anchor" href="#数组" aria-hidden="true">#</a> 数组</h3><ul><li>使用字面量语法创建数组，而不要使用<code>new Array()</code>关键字。</li></ul><div class="language-text" data-ext="text"><pre class="language-text"><code>const myArray = new Array(); // not recommend

const myArray = []; // it is correct
</code></pre></div><ul><li>添加数组元素时使用<code>Arrary.push()</code>，而不要使用索引赋值。</li></ul><div class="language-text" data-ext="text"><pre class="language-text"><code>const myArray = [];

myArray[myArray.length] = &quot;uinika&quot;; // not recommend

myArray.push(&quot;uinika&quot;); // it is correct
</code></pre></div><ul><li>使用 ES6 的扩展运算符（<em>spread</em>）<code>...</code>复制数组。</li></ul><div class="language-text" data-ext="text"><pre class="language-text"><code>const target = [&quot;A&quot;, &quot;B&quot;, &quot;C&quot;, &quot;D&quot;];
const copy = [];

// not recommend
for (let index = 0; index &lt; target.length; index++) {
  copy[i] = target[i];
}

// it&#39;s correct
const copy = [...target];
</code></pre></div><ul><li>使用 ES6 提供的<code>Array.from()</code>方法将<strong>类数组对象</strong>（<em>同时具备索引和长度</em>）转换为数组。</li></ul><div class="language-text" data-ext="text"><pre class="language-text"><code>const myObject = {
  &quot;0&quot;: &quot;A&quot;,
  &quot;1&quot;: &quot;B&quot;,
  &quot;2&quot;: &quot;C&quot;,
  length: 3,
};

let myArray = Array.from(myObject); // [&#39;A&#39;, &#39;B&#39;, &#39;C&#39;]
</code></pre></div><h3 id="字符串" tabindex="-1"><a class="header-anchor" href="#字符串" aria-hidden="true">#</a> 字符串</h3><p>为避免频繁按下<code>shift+&#39;</code>组合键，请在代码中尽可能使用单引号<code>&#39;</code>声明字符串。</p><div class="language-text" data-ext="text"><pre class="language-text"><code>const name = &quot;Hank&quot;; // bad way
const name = &quot;Hank&quot;; // good way
</code></pre></div><p>字符串过长时，必须通过<code>+</code>或者<code>\\</code>运算符进行<strong>换行</strong>和<strong>缩进</strong>处理，让代码更加美观易读。</p><div class="language-text" data-ext="text"><pre class="language-text"><code>// bad way
let bad = &quot;hank is first name and zheng is last name&quot;;

// good way
let good =
  &quot;hank is first name \\
            and zheng is last name&quot;;

// best way
let best = &quot;hank is first name&quot; + &quot;and zheng is last name&quot;;
</code></pre></div><p>拼接字符串<strong>HTML 模板</strong>时，请使用<strong>模板字符串</strong><code>\${}</code>，而非<strong>字符串连接符</strong><code>+</code>。</p><div class="language-text" data-ext="text"><pre class="language-text"><code>// bad
function sayHi(name) {
  return &quot;How are you, &quot; + name + &quot;?&quot;;
}

// good
function sayHi(name) {
  return \`How are you, \${name}?\`;
}
</code></pre></div><h3 id="函数" tabindex="-1"><a class="header-anchor" href="#函数" aria-hidden="true">#</a> 函数</h3><p>使用函数声明（<em>function declaration</em>）代替函数表达式（<em>function expression</em>），因为前者可以进行函数提升（<em>function hoisting</em>）。</p><div class="language-text" data-ext="text"><pre class="language-text"><code>// bad
const bad = function () {};

// good
function good() {}
</code></pre></div><p>需要使用<strong>函数表达式</strong>、<strong>匿名函数</strong>的场景下，请直接使用箭头函数符号<code>=&gt;</code>，这样可以在箭头函数内部创建新的<code>this</code>作用域。</p><div class="language-text" data-ext="text"><pre class="language-text"><code>// 一个标准的箭头函数写法
(name, password) =&gt; {
  console.info(name, password);
};

// 箭头函数的简写形式
(name) =&gt; name + &quot;zheng&quot;;
</code></pre></div><p>使用箭头函数来书写<strong>立即调用的函数表达式</strong>（<em>IIFE，Immediately Invoked Function Expression</em>）。</p><div class="language-text" data-ext="text"><pre class="language-text"><code>(() =&gt; {
  console.info(&quot;Hello Hank!&quot;);
})();
</code></pre></div><h3 id="布尔运算" tabindex="-1"><a class="header-anchor" href="#布尔运算" aria-hidden="true">#</a> 布尔运算</h3><p>尽可能使用<code>===</code>和<code>!==</code>去同时比较<strong>值</strong>与<strong>数据类型</strong>，而非通过<code>==</code>和<code>!=</code>仅比较<strong>值</strong>。</p><div class="language-text" data-ext="text"><pre class="language-text"><code>if (variable1 === &quot;&quot; &amp;&amp; variable2 !== 0) {
  console.info(&quot;just a test!&quot;);
}
</code></pre></div><p>各数据类型的布尔运算结果如下，使用<code>if()</code>等逻辑判断语句时需要注意。</p><ol><li>对象类型的<code>object</code>和<code>array</code>都计算为<code>true</code>，无论其是否为<strong>空对象</strong><code>{}</code>或者<strong>空数组</strong><code>[]</code>。</li><li><strong>空</strong>字符串类型<code>&#39;&#39;</code>计算为<code>false</code>，但<strong>非空</strong>字符串<code>&#39;string&#39;</code>计算为<code>true</code>。</li><li>数字类型<code>NaN</code>和<code>0</code>计算为<code>false</code>。</li><li><code>undefined</code>和<code>null</code>都是<code>false</code>。</li></ol><div class="language-text" data-ext="text"><pre class="language-text"><code>if ([0]) {
  // 结果为true，因为JavaScript中object和array都同属对象类型，布尔运算时对象类型都会被渲染为true。
}
</code></pre></div><p>利用 JavaScript 逻辑判断语句的强制数据类型转换特性，可以更加简洁的书写布尔判断。</p><div class="language-text" data-ext="text"><pre class="language-text"><code>if (name !== &quot;&quot;) {
} // bad
if (name) {
} // good

if (collection.length &gt; 0) {
} // bad
if (collection.length) {
} // good
</code></pre></div><p>如果通过<code>if...else...</code>语句使用多行代码块，则<code>else</code>放在<code>if</code>代码块关闭括号<code>}</code>同一行。</p><div class="language-text" data-ext="text"><pre class="language-text"><code>// bad job
if (test) {
  ...
}
else {
  ...
}

// good job
if (test) {
  ...
} else {
  ...
}
</code></pre></div><h3 id="注释" tabindex="-1"><a class="header-anchor" href="#注释" aria-hidden="true">#</a> 注释</h3><ul><li>使用<code>/** */</code>作为多行注释，用来标注全局功能模块的<em>名称</em>、<em>类型</em>、<em>参数</em>、<em>返回值</em>、<em>描述</em>等信息。</li></ul><div class="language-text" data-ext="text"><pre class="language-text"><code>/**
 * @name   auto-resize
 * @type   directive
 * @param  数值类型，表示缩进的像素值
 * @return null
 * @description 自动根据当前window大小计算页面的显示尺寸
 */
</code></pre></div><ul><li>使用<code>/* */</code>作为单行注释，标注局部代码块的<em>参数</em>、<em>返回值</em>、<em>描述信息</em>。</li></ul><div class="language-text" data-ext="text"><pre class="language-text"><code>/*
 * @param  用户输入字符串
 * @return null
 * @description 去除目标字符串全部空格
 */
function trim(input) {
  if (typeof input === &quot;string&quot; &amp;&amp; input) input.replace(/\\s/g, &quot;&quot;);
}
</code></pre></div><ul><li>使用<code>//</code>作为行内注释，标记代码段信息。</li></ul><div class="language-text" data-ext="text"><pre class="language-text"><code>function trustHtml($sce) {
  return $sce.trustAsHtml(val); //返回被信任的HTML字符串
}
</code></pre></div><blockquote><p>使用<code>// TODO:</code>格式注释描述<strong>问题本身</strong>，使用<code>// FIXME:</code>格式注释描述<strong>问题解决方式</strong>。</p></blockquote><div class="language-text" data-ext="text"><pre class="language-text"><code>() =&gt; {
  issue(); // TODO: 描述问题本身的信息
  handle(); // FIXME: 描述如何解决问题
  return this;
};
</code></pre></div><h3 id="解构赋值" tabindex="-1"><a class="header-anchor" href="#解构赋值" aria-hidden="true">#</a> 解构赋值</h3><p>通过解构赋值存取多属性对象，可以减少临时变量声明的数量。</p><div class="language-text" data-ext="text"><pre class="language-text"><code>/* 对象的解构赋值 */
function getFullName1(user) {
  const name = user.name; // bad way
  const password = user.password;
  return \`\${name} \${name}\`;
}
function getFullName2(user) {
  const { name, password } = user; // good way
  return \`\${name} \${password}\`;
}
function getFullName3({ name, password }) {
  return \`\${name} \${password}\`; // best way
}

/* 对象的解构赋值 */
const array = [1, 2, 3, 4];
const array1 = array[0]; // bad way
const array2 = array[1]; // bad way
const [array1, array2] = array; // good way
</code></pre></div><blockquote><p>函数返回值时，直接返回对象<code>{}</code>而非数组<code>[]</code>，避免因为数组索引改变导致不能正确读取相应位置数据。</p></blockquote><h2 id="css-scss" tabindex="-1"><a class="header-anchor" href="#css-scss" aria-hidden="true">#</a> CSS &amp; SCSS</h2><h3 id="命名原则-1" tabindex="-1"><a class="header-anchor" href="#命名原则-1" aria-hidden="true">#</a> 命名原则</h3><ul><li><code>reset.scss</code>：消除默认样式和浏览器差异，并设置部分标签的初始样式，例如<code>&lt;html&gt;</code>和<code>&lt;body&gt;</code>的宽高度的<code>100%</code>。</li></ul><div class="language-text" data-ext="text"><pre class="language-text"><code>@import &quot;./base&quot;;
@import &quot;./color&quot;;

.reset {
  margin: 0;
  padding: 0;
  border: none;
  outline: none;
  width: 100%;
  height: 100%;
}

html {
  @extend .reset;
  body {
    @extend .reset;
    font-size: 16px;
    font-family: &quot;Helvetica Neue&quot;, Helvetica, &quot;PingFang SC&quot;, &quot;Hiragino Sans GB&quot;,
      &quot;Microsoft YaHei&quot;, &quot;微软雅黑&quot;, Arial, sans-serif;
    #app {
      @extend .reset;
      .router {
        @extend .reset;
      }
    }
  }
}
</code></pre></div><ul><li><code>color.scss</code>：项目中页面的所有取色必须来自这个颜色变量列表，色表内部的变量以<code>color-颜色-深度</code>格式命名。</li></ul><div class="language-text" data-ext="text"><pre class="language-text"><code>// infomation
$color-primary: $color-blue;
$color-success: #13ce66;
$color-warning: #f7ba2a;
$color-danger: #ff4949;
// scheme
$color-blue: #20a0ff;
$color-blue-light: #58b7ff;
$color-blue-dark: #1d8ce0;
$color-pink: #ff0097;
$color-cyan: #4eb3b9;
$color-black: #1f2d3d;
$color-black-light: #324057;
$color-black-light-extra: #475669;
$color-silver: #8492a6;
$color-silver-light: #99a9bf;
$color-silver-light-extra: #c0ccda;
$color-gray: #d3dce6;
$color-gray-light: #e5e9f2;
$color-gray-light-extra: #eff2f7;
$color-white: #ffffff;
$color-white-dark: #f9fafc;
</code></pre></div><ul><li><code>base.scss</code>：基础的公用快捷样式，通过 HTML 元素的 class 属性直接使用。</li><li><code>skin.scss</code>: 全局 UI 插件的样式补丁，如果存在多种皮肤，则以<code>skin-xx.scss</code>方式进行命名。</li><li><code>grid.scss</code>：自定义的 CSS 栅格系统，直接通过 HTML 元素及 class 属性使用。</li></ul><p>每个 Vue 或者 React 根级组件的样式都独立到单独模块书写，<strong>禁止在顶层 ID 选择器之外再定义其它 CSS 样式，避免对全局样式形成污染</strong>。私有组件顶层 CSS 选择器使用<code>id</code>属性定义，公用组件的顶层选择器使用<code>class</code>属性定义，。</p><div class="language-text" data-ext="text"><pre class="language-text"><code>@import &quot;../common/styles/base.scss&quot;;
#ID {
  // 一律使用单行注释
}
</code></pre></div><blockquote><p>为了避免 SASS 中使用多行注释时，将注释内容打包至最终产品代码，因此非公用模块的注释一律使用单行注释<code>//</code>。</p></blockquote><h3 id="布局选择器" tabindex="-1"><a class="header-anchor" href="#布局选择器" aria-hidden="true">#</a> 布局选择器</h3><table><thead><tr><th>语义</th><th>命名</th><th>简写</th></tr></thead><tbody><tr><td>文档</td><td>doc</td><td>doc</td></tr><tr><td>头部</td><td>head</td><td>hd</td></tr><tr><td>主体</td><td>body</td><td>bd</td></tr><tr><td>尾部</td><td>foot</td><td>ft</td></tr><tr><td>主栏</td><td>main</td><td>mn</td></tr><tr><td>主栏子容器</td><td>main-container</td><td>mcc</td></tr><tr><td>侧栏</td><td>side</td><td>sd</td></tr><tr><td>侧栏子容器</td><td>side-container</td><td>sdc</td></tr><tr><td>盒容器</td><td>wrap/box</td><td>wrap/box</td></tr></tbody></table><h3 id="模块-组件选择器" tabindex="-1"><a class="header-anchor" href="#模块-组件选择器" aria-hidden="true">#</a> 模块/组件选择器</h3><table><thead><tr><th>语义</th><th>命名</th><th>简写</th></tr></thead><tbody><tr><td>导航</td><td>nav</td><td>nav</td></tr><tr><td>子导航</td><td>subnav</td><td>snav</td></tr><tr><td>面包屑</td><td>crumb</td><td>crm</td></tr><tr><td>菜单</td><td>menu</td><td>menu</td></tr><tr><td>选项卡</td><td>tab</td><td>tab</td></tr><tr><td>标题区</td><td>head/title</td><td>hd/tt</td></tr><tr><td>内容区</td><td>body/content</td><td>bd/ct</td></tr><tr><td>列表</td><td>list</td><td>lst</td></tr><tr><td>表格</td><td>table</td><td>tb</td></tr><tr><td>表单</td><td>form</td><td>fm</td></tr><tr><td>热点</td><td>hot</td><td>hot</td></tr><tr><td>排行</td><td>top</td><td>top</td></tr><tr><td>登录</td><td>login</td><td>log</td></tr><tr><td>标志</td><td>logo</td><td>logo</td></tr><tr><td>广告</td><td>advertise</td><td>ad</td></tr><tr><td>搜索</td><td>search</td><td>sch</td></tr><tr><td>幻灯</td><td>slide</td><td>sld</td></tr><tr><td>提示</td><td>tips</td><td>tips</td></tr><tr><td>帮助</td><td>help</td><td>help</td></tr><tr><td>新闻</td><td>news</td><td>news</td></tr><tr><td>下载</td><td>download</td><td>dld</td></tr><tr><td>注册</td><td>regist</td><td>reg</td></tr><tr><td>投票</td><td>vote</td><td>vote</td></tr><tr><td>版权</td><td>copyright</td><td>cprt</td></tr><tr><td>结果</td><td>result</td><td>rst</td></tr><tr><td>标题</td><td>title</td><td>tt</td></tr><tr><td>按钮</td><td>button</td><td>btn</td></tr><tr><td>输入</td><td>input</td><td>ipt</td></tr></tbody></table><h3 id="功能选择器" tabindex="-1"><a class="header-anchor" href="#功能选择器" aria-hidden="true">#</a> 功能选择器</h3><table><thead><tr><th>语义</th><th>命名</th><th>简写</th></tr></thead><tbody><tr><td>浮动清除</td><td>clear-both</td><td>cb</td></tr><tr><td>向左浮动</td><td>float-left</td><td>fl</td></tr><tr><td>向右浮动</td><td>float-right</td><td>fr</td></tr><tr><td>内联块级</td><td>inline-block</td><td>ib</td></tr><tr><td>文本居中</td><td>text-align-center</td><td>tac</td></tr><tr><td>文本居右</td><td>text-align-right</td><td>tar</td></tr><tr><td>文本居左</td><td>text-align-left</td><td>tal</td></tr><tr><td>垂直居中</td><td>vertical-align-middle</td><td>vam</td></tr><tr><td>溢出隐藏</td><td>overflow-hidden</td><td>oh</td></tr><tr><td>完全消失</td><td>display-none</td><td>dn</td></tr><tr><td>字体大小</td><td>font-size</td><td>fs</td></tr><tr><td>字体粗细</td><td>font-weight</td><td>fw</td></tr></tbody></table><h3 id="颜色-背景选择器" tabindex="-1"><a class="header-anchor" href="#颜色-背景选择器" aria-hidden="true">#</a> 颜色/背景选择器</h3><table><thead><tr><th>语义</th><th>命名</th><th>简写</th></tr></thead><tbody><tr><td>字体颜色</td><td>font-color</td><td>fc</td></tr><tr><td>背景</td><td>background</td><td>bg</td></tr><tr><td>背景颜色</td><td>background-color</td><td>bgc</td></tr><tr><td>背景图片</td><td>background-image</td><td>bgi</td></tr><tr><td>背景定位</td><td>background-position</td><td>bgp</td></tr><tr><td>边框颜色</td><td>border-color</td><td>bdc</td></tr></tbody></table><h3 id="状态选择器" tabindex="-1"><a class="header-anchor" href="#状态选择器" aria-hidden="true">#</a> 状态选择器</h3><table><thead><tr><th>语义</th><th>命名</th><th>简写</th></tr></thead><tbody><tr><td>选中</td><td>selected</td><td>sel</td></tr><tr><td>当前</td><td>current</td><td>crt</td></tr><tr><td>显示</td><td>show</td><td>show</td></tr><tr><td>隐藏</td><td>hide</td><td>hide</td></tr><tr><td>打开</td><td>open</td><td>open</td></tr><tr><td>关闭</td><td>close</td><td>close</td></tr><tr><td>出错</td><td>error</td><td>err</td></tr><tr><td>不可用</td><td>disabled</td><td>dis</td></tr></tbody></table><blockquote><p>前端基础架构已经提供了基于 postcss 的后置处理器 autoprefixer（<em>对前置 SASS 编译后的 CSS 进行再处理</em>），因此编写样式时不再手动处理<code>-webkit-</code>、<code>-moz-</code>等兼容性前缀。</p></blockquote><h2 id="html" tabindex="-1"><a class="header-anchor" href="#html" aria-hidden="true">#</a> HTML</h2><p>HTML 标签的语义化有助于形成构架良好的 DOM 结构，有助于搜索引擎优化和提升可访问性， 尽可能保持 HTML DOM 结构的优雅。</p><h3 id="整体-dom-结构" tabindex="-1"><a class="header-anchor" href="#整体-dom-结构" aria-hidden="true">#</a> 整体 DOM 结构</h3><p>统一使用 HTML5 提供的<code>&lt;!DOCTYPE html&gt;</code>文档类型声明，并在<code>&lt;head&gt;</code>中使用<code>&lt;link&gt;</code>引入外部 CSS 文件，然后在<code>&lt;body&gt;</code>底部通过<code>&lt;script&gt;</code>引入 JavaScript 文件。</p><div class="language-text" data-ext="text"><pre class="language-text"><code>&lt;!DOCTYPE html&gt;
&lt;html lang=&quot;zh-CN&quot;&gt;
  &lt;head&gt;
    &lt;title&gt;Aves&lt;/title&gt;
    &lt;meta name=&quot;renderer&quot; content=&quot;webkit&quot; /&gt;
    &lt;meta http-equiv=&quot;X-UA-Compatible&quot; content=&quot;IE=edge&quot; /&gt;
    &lt;meta http-equiv=&quot;content-type&quot; content=&quot;text/html; charset=UTF-8&quot; /&gt;
    &lt;meta name=&quot;viewport&quot; content=&quot;width=device-width, initial-scale=1&quot; /&gt;
  &lt;/head&gt;

  &lt;body&gt;
    &lt;div id=&quot;app&quot;&gt;
      &lt;main id=&quot;dashboard&quot;&gt;&lt;/main&gt;
    &lt;/div&gt;
  &lt;/body&gt;
&lt;/html&gt;
</code></pre></div><h3 id="组件-dom-结构" tabindex="-1"><a class="header-anchor" href="#组件-dom-结构" aria-hidden="true">#</a> 组件 DOM 结构</h3><p>每个 Vue 或者 React 根级组件的顶层元素（<em>通常是指全局的路由视图</em>）一律通过<code>&lt;main&gt;</code>元素定义，因为同一个文档中<code>&lt;main&gt;</code>标签只可以出现一次，自定义组件一律使用<code>&lt;div&gt;</code>进行定义，<code>id</code>属性命名则使用短横线连接的<code>router-component</code>格式。</p><div class="language-text" data-ext="text"><pre class="language-text"><code>&lt;!-- 全局路由视图 --&gt;
&lt;main id=&quot;router&quot;&gt;
  &lt;!-- 组件 --&gt;
  &lt;div id=&quot;router-component&quot;&gt;&lt;/div&gt;
&lt;/main&gt;
</code></pre></div>`,110),r=[a];function c(s,l){return e(),d("div",null,r)}const u=t(o,[["render",c],["__file","devhtml.html.vue"]]);export{u as default};
