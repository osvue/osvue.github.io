import{_ as o,M as e,p as c,q as l,R as n,t as s,N as p,a1 as t}from"./framework-d81ad7e5.js";const u={},k={href:"https://links.jianshu.com/go?to=http%3A%2F%2Fbabeljs.io%2Frepl%2F",target:"_blank",rel:"noopener noreferrer"},r=t(`<h2 id="变量" tabindex="-1"><a class="header-anchor" href="#变量" aria-hidden="true">#</a> 变量</h2><p>let 局部变量</p><p>const 常量</p><p>var 全局变量</p><h2 id="字符串的拓展" tabindex="-1"><a class="header-anchor" href="#字符串的拓展" aria-hidden="true">#</a> 字符串的拓展</h2><div class="language-jsx" data-ext="jsx"><pre class="language-jsx"><code><span class="token keyword">let</span> str <span class="token operator">=</span> <span class="token string">&quot;123&quot;</span>

str<span class="token punctuation">.</span><span class="token function">includes</span><span class="token punctuation">(</span><span class="token string">&quot;1&quot;</span><span class="token punctuation">)</span><span class="token comment">//true includes方法 是否包含</span>

str<span class="token punctuation">.</span><span class="token function">startsWith</span><span class="token punctuation">(</span><span class="token string">&quot;2&quot;</span><span class="token punctuation">)</span><span class="token comment">//false 是否以2开头</span>

str<span class="token punctuation">.</span><span class="token function">endsWith</span><span class="token punctuation">(</span><span class="token string">&quot;2&quot;</span><span class="token punctuation">)</span><span class="token comment">//false 是否以2结尾</span>
</code></pre></div><h2 id="解构表达式" tabindex="-1"><a class="header-anchor" href="#解构表达式" aria-hidden="true">#</a> 解构表达式</h2><div class="language-jsx" data-ext="jsx"><pre class="language-jsx"><code><span class="token comment">//数组解构let arr = [1,2,3]</span>

<span class="token keyword">const</span> <span class="token punctuation">[</span>x<span class="token punctuation">,</span>y<span class="token punctuation">,</span>z<span class="token punctuation">]</span> <span class="token operator">=</span> arr<span class="token punctuation">;</span><span class="token comment">// x,y,z对应 1，2，3 //对象解构const person = {</span>

<span class="token literal-property property">name</span><span class="token operator">:</span><span class="token string">&quot;jack&quot;</span><span class="token punctuation">,</span>

<span class="token literal-property property">age</span><span class="token operator">:</span><span class="token number">21</span><span class="token punctuation">,</span>

<span class="token literal-property property">language</span><span class="token operator">:</span><span class="token punctuation">[</span><span class="token string">&#39;java&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;php&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>

<span class="token punctuation">}</span>

<span class="token keyword">let</span> <span class="token punctuation">{</span>name<span class="token punctuation">,</span>age<span class="token punctuation">,</span>language<span class="token punctuation">}</span> <span class="token operator">=</span> person

<span class="token comment">//自定义命名let {name：n,age:a,language} = person</span>
</code></pre></div><h2 id="函数的优化" tabindex="-1"><a class="header-anchor" href="#函数的优化" aria-hidden="true">#</a> 函数的优化</h2><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token comment">//参数上面的优化=1，指当b没有值时默认为1function test(a,b=1){</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>a<span class="token operator">+</span>b<span class="token punctuation">)</span>

<span class="token punctuation">}</span>
</code></pre></div><h2 id="箭头函数" tabindex="-1"><a class="header-anchor" href="#箭头函数" aria-hidden="true">#</a> 箭头函数</h2><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token comment">//Demo1 单个参数var demo1= fucntion demo1(obj){</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>obj<span class="token punctuation">)</span>

<span class="token punctuation">}</span>

箭头函数简化为： <span class="token keyword">var</span> <span class="token function-variable function">demo1</span><span class="token operator">=</span> <span class="token parameter">obj</span> <span class="token operator">=&gt;</span>console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>obj<span class="token punctuation">)</span><span class="token punctuation">;</span>



<span class="token comment">//Demo2 两个参数var sum =function(a,b){</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>a<span class="token operator">+</span>n<span class="token punctuation">)</span>

<span class="token punctuation">}</span>

箭头函数简化为： <span class="token keyword">var</span> <span class="token function-variable function">sum</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">a<span class="token punctuation">,</span>b</span><span class="token punctuation">)</span><span class="token operator">=&gt;</span>console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>obj<span class="token punctuation">)</span><span class="token punctuation">;</span>



<span class="token comment">//Demo3 没有参数let sayHello = ()=&gt;console.log(&quot;hello!&quot;);</span>



<span class="token comment">//Demo4 代码不止一行 使用 {}var sum = （a,b）=&gt;{</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>a<span class="token operator">+</span>n<span class="token punctuation">)</span><span class="token punctuation">;</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>a<span class="token operator">+</span>n<span class="token punctuation">)</span>

<span class="token punctuation">}</span>



<span class="token comment">//Demo5 对象的函数简写let person ={</span>

name：“jeck”<span class="token punctuation">;</span>

<span class="token comment">//原来</span>

<span class="token function-variable function">eat</span><span class="token operator">:</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">food</span><span class="token punctuation">)</span><span class="token punctuation">{</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">+</span>food<span class="token punctuation">)</span>

<span class="token punctuation">}</span>

<span class="token comment">//箭头函数</span>

<span class="token function-variable function">eat2</span><span class="token operator">:</span><span class="token parameter">food</span><span class="token operator">=&gt;</span>console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">+</span>food<span class="token punctuation">)</span>

<span class="token comment">//简写版</span>

<span class="token function">eat3</span><span class="token punctuation">(</span><span class="token parameter">food</span><span class="token punctuation">)</span><span class="token punctuation">{</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">+</span>food<span class="token punctuation">)</span>

<span class="token punctuation">}</span>

<span class="token punctuation">}</span>

<span class="token comment">//Demo6：箭头函数配合解构表达式let person ={</span>

name：“jeck”<span class="token punctuation">;</span>

<span class="token function-variable function">eat2</span><span class="token operator">:</span><span class="token parameter">food</span><span class="token operator">=&gt;</span>console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">+</span>food<span class="token punctuation">)</span>

<span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token function">test1</span><span class="token punctuation">(</span><span class="token parameter">person</span><span class="token punctuation">)</span><span class="token punctuation">{</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>person<span class="token punctuation">.</span>name<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token punctuation">}</span>

<span class="token comment">//简化调用函数 使用{}传参数，传入对象var test1=({name})=&gt;console.log(name);</span>

<span class="token function">test1</span><span class="token punctuation">(</span>person <span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><h2 id="map和reduce函数" tabindex="-1"><a class="header-anchor" href="#map和reduce函数" aria-hidden="true">#</a> map和reduce函数</h2><p>map 让原来的集合经过 map 中的函数 进行处理回调</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">let</span> arr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">&#39;1&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;2&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;3&#39;</span><span class="token punctuation">]</span><span class="token punctuation">;</span>

arr<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token parameter">s</span><span class="token operator">=&gt;</span><span class="token function">parseInt</span><span class="token punctuation">(</span>s<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token comment">//字符串转化为内证书</span>



<span class="token comment">//reduce() 接收一个函数和一个初始值</span>

第一个参数时上一次reduce的处理结果

第二个参数是数组中要处理的下一个元素

<span class="token keyword">const</span> arr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">20</span><span class="token punctuation">,</span><span class="token number">30</span><span class="token punctuation">,</span><span class="token number">40</span><span class="token punctuation">]</span>

arr<span class="token punctuation">.</span><span class="token function">reduce</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">a<span class="token punctuation">,</span>b</span><span class="token punctuation">)</span><span class="token operator">=&gt;</span>a<span class="token operator">+</span>b<span class="token punctuation">)</span>
</code></pre></div><h2 id="拓展运算符-三个点" tabindex="-1"><a class="header-anchor" href="#拓展运算符-三个点" aria-hidden="true">#</a> 拓展运算符（三个点…）</h2><p>将一个数组转为用逗号分隔的参数序列</p><div class="language-jsx" data-ext="jsx"><pre class="language-jsx"><code><span class="token keyword">function</span> <span class="token function">add</span><span class="token punctuation">(</span><span class="token parameter">a<span class="token punctuation">,</span>b</span><span class="token punctuation">)</span><span class="token punctuation">{</span>

<span class="token keyword">return</span> a<span class="token operator">+</span>b<span class="token punctuation">;</span>

<span class="token punctuation">}</span>

<span class="token keyword">var</span> number <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">;</span>



<span class="token comment">//数组合并var arrs=[...[1,2,3],...[4,5,6]];//[1,2,3,4,5,6]//将字符串转为数组console.log([...&#39;hello&#39;])//[&#39;h&#39;,&#39;e&#39;,&#39;l&#39;,&#39;l&#39;,&#39;o&#39;]</span>
</code></pre></div><h2 id="promise" tabindex="-1"><a class="header-anchor" href="#promise" aria-hidden="true">#</a> promise</h2><div class="language-jsx" data-ext="jsx"><pre class="language-jsx"><code><span class="token comment">// 函数格式const promise = new promise(function(resolve,reject){</span>

<span class="token comment">//操作</span>

<span class="token comment">//if(success){</span>

<span class="token function">resolve</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//成功</span>

<span class="token punctuation">}</span><span class="token keyword">else</span><span class="token punctuation">{</span>

<span class="token function">reject</span><span class="token punctuation">(</span>error<span class="token punctuation">)</span><span class="token comment">//失败</span>

<span class="token punctuation">}</span>

<span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token comment">//执行完了在执行一些东西的话</span>

promise<span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">value</span><span class="token punctuation">)</span><span class="token punctuation">{</span>

<span class="token comment">//异步回调</span>

<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">catch</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">error</span><span class="token punctuation">)</span><span class="token punctuation">{</span>

<span class="token comment">//异常回调</span>

<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre></div><h2 id="set和map" tabindex="-1"><a class="header-anchor" href="#set和map" aria-hidden="true">#</a> set和map</h2><p>set 只能保存不同元素，相同的元素会被忽略</p><div class="language-jsx" data-ext="jsx"><pre class="language-jsx"><code><span class="token keyword">let</span> set <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">set</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">let</span> set <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">set</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">,</span><span class="token number">4</span><span class="token punctuation">,</span><span class="token number">5</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">//map接受一个数组，数组中的元素时键值对let map = new map([</span>

<span class="token punctuation">[</span><span class="token string">&#39;key&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;value&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>

<span class="token punctuation">[</span><span class="token string">&#39;key1&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;value1&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>

<span class="token punctuation">]</span><span class="token punctuation">)</span>
</code></pre></div><h2 id="for-of循环" tabindex="-1"><a class="header-anchor" href="#for-of循环" aria-hidden="true">#</a> for.of循环</h2><div class="language-jsx" data-ext="jsx"><pre class="language-jsx"><code><span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">let</span> obj <span class="token keyword">of</span> h<span class="token punctuation">)</span><span class="token punctuation">{</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>obj<span class="token punctuation">)</span>

<span class="token punctuation">}</span>
</code></pre></div><h2 id="模块化export-import" tabindex="-1"><a class="header-anchor" href="#模块化export-import" aria-hidden="true">#</a> 模块化export import</h2><div class="language-jsx" data-ext="jsx"><pre class="language-jsx"><code><span class="token comment">// export 导出命令</span>

calss Util<span class="token punctuation">{</span>

<span class="token function-variable function">sum</span><span class="token operator">=</span><span class="token punctuation">(</span><span class="token parameter">a<span class="token punctuation">,</span>b</span><span class="token punctuation">)</span><span class="token operator">=&gt;</span>a<span class="token operator">+</span>b<span class="token punctuation">;</span>

<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> Util

<span class="token comment">// import加载import Util from &#39;./Util&#39;</span>

</code></pre></div><h5 id="一、新的变量声明方式-let-const" tabindex="-1"><a class="header-anchor" href="#一、新的变量声明方式-let-const" aria-hidden="true">#</a> 一、新的变量声明方式 let/const</h5><p>与var不同，新的变量声明方式带来了一些不一样的特性，其中最重要的两个特性就是提供了块级作用域与不再具备变量提升。</p><p>通过2个简单的例子来说明这两点。</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token punctuation">{</span>
    <span class="token keyword">let</span> a <span class="token operator">=</span> <span class="token number">20</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span><span class="token punctuation">;</span>  <span class="token comment">// a is not defined</span>
</code></pre></div><p>而这个简单的例子，会被编译为：</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token punctuation">{</span>
    <span class="token keyword">let</span> _a <span class="token operator">=</span> <span class="token number">20</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span><span class="token punctuation">;</span>  <span class="token comment">// a is not defined</span>
<span class="token comment">// ES5</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span><span class="token punctuation">;</span>   <span class="token comment">// undefined</span>
<span class="token keyword">var</span> a <span class="token operator">=</span> <span class="token number">20</span><span class="token punctuation">;</span>

<span class="token comment">// ES6</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// a is not defined</span>
<span class="token keyword">let</span> a <span class="token operator">=</span> <span class="token number">20</span><span class="token punctuation">;</span>
</code></pre></div><p>当然，你的代码编译成为了ES5之后，仍然会存在变量提升，这一点只需要我们记住即可。在实际使用中，也需要尽量避免使用变量提升的特性带来的负面影响。只有在面试题中，才会对变量提升不停的滥用。</p><p>使用ES6，我们需要全面使用let/const替换var，那么什么时候用let，什么时候用const就成为了一个大家要熟练区分的一个知识点。</p><p><strong>我们常常使用let来声明一个值会被改变的变量，而使用const来声明一个值不会被改变的变量，也可以称之为常量</strong>。</p><p>当值为基础数据类型时，那么这里的值，就是指值本身。 而当值对应的为引用数据类型时，那么我这里说的值，则表示指向该对象的引用。这里需要注意，正因为该值为一个引用，只需要保证引用不变就可以，我们仍然可以改变该引用所指向的对象。</p><p>当我们试图改变const声明的变量时，则会报错。</p><p>写几个例子，大家可以仔细揣摩一下：</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">let</span> a <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
a <span class="token operator">=</span> <span class="token number">20</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> obDev <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">a</span><span class="token operator">:</span> <span class="token number">20</span><span class="token punctuation">,</span>
    <span class="token literal-property property">b</span><span class="token operator">:</span> <span class="token number">30</span>
<span class="token punctuation">}</span>

obDev<span class="token punctuation">.</span>a <span class="token operator">=</span> <span class="token number">30</span><span class="token punctuation">;</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>obDev<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// Object {a: 30, b: 30}</span>
<span class="token keyword">const</span> <span class="token function-variable function">fn</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
<span class="token keyword">const</span> a <span class="token operator">=</span> obDev<span class="token punctuation">.</span>a<span class="token punctuation">;</span>
<span class="token operator">...</span> <span class="token operator">...</span>
</code></pre></div><p>只要抓住上面我说的特性，那么在使用let/const时就会显得游刃有余。 根据我自己的经验，使用const的场景要比使用let的场景多很多。</p><h5 id="二、-箭头函数的使用" tabindex="-1"><a class="header-anchor" href="#二、-箭头函数的使用" aria-hidden="true">#</a> 二、 箭头函数的使用</h5><p>之前我说ES6颠覆了js的编码习惯，箭头函数的使用占了很大一部分。</p><p>首先是写法上的不同:</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// es5</span>
<span class="token keyword">var</span> <span class="token function-variable function">fn</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">a<span class="token punctuation">,</span> b</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> a <span class="token operator">+</span> b<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// es6 箭头函数写法，当函数直接被return时，可以省略函数体的括号</span>
<span class="token keyword">const</span> <span class="token function-variable function">fn</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">a<span class="token punctuation">,</span> b</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> a <span class="token operator">+</span> b<span class="token punctuation">;</span>

<span class="token comment">// es5</span>
<span class="token keyword">var</span> <span class="token function-variable function">foo</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">var</span> a <span class="token operator">=</span> <span class="token number">20</span>；
    <span class="token keyword">var</span> b <span class="token operator">=</span> <span class="token number">30</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> a <span class="token operator">+</span> b<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// es6</span>
<span class="token keyword">const</span> <span class="token function-variable function">foo</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
   <span class="token keyword">const</span> a <span class="token operator">=</span> <span class="token number">20</span><span class="token punctuation">;</span>
   <span class="token keyword">const</span> b <span class="token operator">=</span> <span class="token number">30</span><span class="token punctuation">;</span>
   <span class="token keyword">return</span> a <span class="token operator">+</span> b<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><blockquote><p>箭头函数可以替换函数表达式，但是不能替换函数声明</p></blockquote><p>其次还有一个至关重要的一点，那就是箭头函数中，没有this。如果你在箭头函数中使用了this，那么该this一定就是外层的this。</p><p>也正是因为箭头函数中没有this，因此我们也就无从谈起用call/apply/bind来改变this指向。记住这个特性，能让你在react组件之间传值时少走无数弯路。</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">var</span> person <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;tom&#39;</span><span class="token punctuation">,</span>
    <span class="token function-variable function">getName</span><span class="token operator">:</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>name<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// 我们试图用ES6的写法来重构上面的对象</span>
<span class="token keyword">const</span> person <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;tom&#39;</span><span class="token punctuation">,</span>
    <span class="token function-variable function">getName</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">this</span><span class="token punctuation">.</span>name
<span class="token punctuation">}</span>

<span class="token comment">// 但是编译结果却是</span>
<span class="token keyword">var</span> person <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;tom&#39;</span><span class="token punctuation">,</span>
    <span class="token function-variable function">getName</span><span class="token operator">:</span> <span class="token keyword">function</span> <span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token keyword">undefined</span><span class="token punctuation">.</span>name<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre></div><blockquote><p>在ES6中，会默认采用严格模式，因此this也不会自动指向window对象了，而箭头函数本身并没有this，因此this就只能是undefined，这一点，在使用的时候，一定要慎重慎重再慎重，不然踩了坑你都不知道自己错在哪！这种情况，如果你还想用this，就不要用使用箭头函数的写法。</p></blockquote><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 可以稍做改动</span>
<span class="token keyword">const</span> person <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;tom&#39;</span><span class="token punctuation">,</span>
    <span class="token function-variable function">getName</span><span class="token operator">:</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">this</span><span class="token punctuation">.</span>name<span class="token punctuation">,</span> <span class="token number">1000</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// 编译之后变成</span>
<span class="token keyword">var</span> person <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;tom&#39;</span><span class="token punctuation">,</span>
    <span class="token function-variable function">getName</span><span class="token operator">:</span> <span class="token keyword">function</span> <span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">var</span> _this <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">;</span>  <span class="token comment">// 使用了我们在es5时常用的方式保存this引用</span>

        <span class="token keyword">return</span> <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span> _this<span class="token punctuation">.</span>name<span class="token punctuation">;</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">1000</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre></div><p>先记住箭头函数的写法，并留意箭头函数中关于this的特殊性，更过实践与注意事项我们在封装react组件时再慢慢来感受。</p><p>除此之外，箭头函数中无法访问<code>arguments</code>对象。</p><h5 id="三、模板字符串" tabindex="-1"><a class="header-anchor" href="#三、模板字符串" aria-hidden="true">#</a> 三、模板字符串</h5><p>模板字符串是为了解决使用<code>+</code>号拼接字符串的不便利而出现的。它的功能非常强大，但是我们大多数时候使用它则非常简单。看一个例子大家就明白怎么使用了。</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// es6</span>
<span class="token keyword">const</span> a <span class="token operator">=</span> <span class="token number">20</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> b <span class="token operator">=</span> <span class="token number">30</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> string <span class="token operator">=</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>a<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">+</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>b<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">=</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>a<span class="token operator">+</span>b<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">;</span>

<span class="token comment">// es5</span>
<span class="token keyword">var</span> a <span class="token operator">=</span> <span class="token number">20</span><span class="token punctuation">;</span>
<span class="token keyword">var</span> b <span class="token operator">=</span> <span class="token number">30</span><span class="token punctuation">;</span>
<span class="token keyword">var</span> string <span class="token operator">=</span> a <span class="token operator">+</span> <span class="token string">&quot;+&quot;</span> <span class="token operator">+</span> b <span class="token operator">+</span> <span class="token string">&quot;=&quot;</span> <span class="token operator">+</span> <span class="token punctuation">(</span>a <span class="token operator">+</span> b<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><p>使用 \`\` 将整个字符串包裹起来，而在其中使用 \${} 来包裹一个变量或者一个表达式。</p><p>当然模板字符串还支持换行等强大的功能，更多的大家可通过参考资料进一步学习。</p><h5 id="四、-解析结构" tabindex="-1"><a class="header-anchor" href="#四、-解析结构" aria-hidden="true">#</a> 四、 解析结构</h5><p>解析结构是一种全新的写法，我们只需要使用一个例子，大家就能够明白解析结构到底是怎么一回事儿。</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 首先有这么一个对象</span>
<span class="token keyword">const</span> props <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">className</span><span class="token operator">:</span> <span class="token string">&#39;tiger-button&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">loading</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
    <span class="token literal-property property">clicked</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token literal-property property">disabled</span><span class="token operator">:</span> <span class="token string">&#39;disabled&#39;</span>
<span class="token punctuation">}</span>
</code></pre></div><p>当我们想要取得其中的2个值：loading与clicked时：</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// es5</span>
<span class="token keyword">var</span> loading <span class="token operator">=</span> props<span class="token punctuation">.</span>loading<span class="token punctuation">;</span>
<span class="token keyword">var</span> clicked <span class="token operator">=</span> props<span class="token punctuation">.</span>clicked<span class="token punctuation">;</span>

<span class="token comment">// es6</span>
<span class="token keyword">const</span> <span class="token punctuation">{</span> loading<span class="token punctuation">,</span> clicked <span class="token punctuation">}</span> <span class="token operator">=</span> props<span class="token punctuation">;</span>

<span class="token comment">// 给一个默认值，当props对象中找不到loading时，loading就等于该默认值</span>
<span class="token keyword">const</span> <span class="token punctuation">{</span> loading <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">,</span> clicked <span class="token punctuation">}</span> <span class="token operator">=</span> props<span class="token punctuation">;</span>
</code></pre></div><p>是不是简单了许多？正是由于解析结构大大减少了代码量，因此它大受欢迎，在很多代码中它的影子随处可见。</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 比如</span>
<span class="token comment">// section1</span>
<span class="token keyword">import</span> React<span class="token punctuation">,</span> <span class="token punctuation">{</span> Component <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;react&#39;</span><span class="token punctuation">;</span>

<span class="token comment">// section2</span>
<span class="token keyword">export</span> <span class="token punctuation">{</span> <span class="token keyword">default</span> <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;./Button&#39;</span><span class="token punctuation">;</span>

<span class="token comment">// section3</span>
<span class="token keyword">const</span> <span class="token punctuation">{</span> click<span class="token punctuation">,</span> loading <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>props<span class="token punctuation">;</span>
<span class="token keyword">const</span> <span class="token punctuation">{</span> isCheck <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">;</span>

<span class="token comment">// more  任何获取对象属性值的场景都可以使用解析结构来减少我们的代码量</span>
</code></pre></div><p>另外，数组也有属于自己的解析结构。</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// es6</span>
<span class="token keyword">const</span> arr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> <span class="token punctuation">[</span>a<span class="token punctuation">,</span> b<span class="token punctuation">,</span> c<span class="token punctuation">]</span> <span class="token operator">=</span> arr<span class="token punctuation">;</span>

<span class="token comment">// es5</span>
<span class="token keyword">var</span> arr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token keyword">var</span> a <span class="token operator">=</span> arr<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token keyword">var</span> b <span class="token operator">=</span> arr<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token keyword">var</span> c <span class="token operator">=</span> arr<span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
</code></pre></div><p>数组以序列号一一对应，这是一个有序的对应关系。 而对象根据属性名一一对应，这是一个无序的对应关系。 根据这个特性，使用解析结构从对象中获取属性值更加具有可用性。</p><h5 id="五、-函数默认参数" tabindex="-1"><a class="header-anchor" href="#五、-函数默认参数" aria-hidden="true">#</a> 五、 函数默认参数</h5><p>之前我们不能直接为函数指定默认参数，因此很多时候为了保证传入的参数具备一个默认值，我们常常使用如下的方法：</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">add</span><span class="token punctuation">(</span><span class="token parameter">x<span class="token punctuation">,</span> y</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">var</span> x <span class="token operator">=</span> x <span class="token operator">||</span> <span class="token number">20</span><span class="token punctuation">;</span>
    <span class="token keyword">var</span> y <span class="token operator">=</span> y <span class="token operator">||</span> <span class="token number">30</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> x <span class="token operator">+</span> y<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 50</span>
</code></pre></div><blockquote><p>这种方式并不是没有缺点，比如当我传入一个x值为false，这个时候任然会取到默认值，就不是我们的本意了。</p></blockquote><p>来看看ES6的默认值写法：</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">add</span><span class="token punctuation">(</span><span class="token parameter">x <span class="token operator">=</span> <span class="token number">20</span><span class="token punctuation">,</span> y <span class="token operator">=</span> <span class="token number">30</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> x <span class="token operator">+</span> y<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><p>在实际开发中给参数添加适当的默认值，可以让我们对函数的参数类型有一个直观的认知。</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> ButtonGroupProps <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">size</span><span class="token operator">:</span> <span class="token string">&#39;normal&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">className</span><span class="token operator">:</span> <span class="token string">&#39;xxxx-button-group&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">borderColor</span><span class="token operator">:</span> <span class="token string">&#39;#333&#39;</span>
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">function</span> <span class="token function">ButtonGroup</span><span class="token punctuation">(</span><span class="token parameter">props <span class="token operator">=</span> ButtonGroupProps</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token operator">...</span> <span class="token operator">...</span>
<span class="token punctuation">}</span>
</code></pre></div><h5 id="六、-展开运算符" tabindex="-1"><a class="header-anchor" href="#六、-展开运算符" aria-hidden="true">#</a> 六、 展开运算符</h5><p>在ES6中用<code>...</code>来表示展开运算符，它可以将数组方法或者对象进行展开。先来看一个例子它是如何使用的。</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> arr1 <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> arr2 <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token operator">...</span>arr1<span class="token punctuation">,</span> <span class="token number">10</span><span class="token punctuation">,</span> <span class="token number">20</span><span class="token punctuation">,</span> <span class="token number">30</span><span class="token punctuation">]</span><span class="token punctuation">;</span>

<span class="token comment">// 这样，arr2 就变成了[1, 2, 3, 10, 20, 30];</span>
</code></pre></div><p>当然，展开对象数据也是可以得到类似的结果</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> obj1 <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">a</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
  <span class="token literal-property property">b</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
  <span class="token literal-property property">c</span><span class="token operator">:</span> <span class="token number">3</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> obj2 <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token operator">...</span>obj1<span class="token punctuation">,</span>
  <span class="token literal-property property">d</span><span class="token operator">:</span> <span class="token number">4</span><span class="token punctuation">,</span>
  <span class="token literal-property property">e</span><span class="token operator">:</span> <span class="token number">5</span><span class="token punctuation">,</span>
  <span class="token literal-property property">f</span><span class="token operator">:</span> <span class="token number">6</span>
<span class="token punctuation">}</span>

<span class="token comment">// 结果类似于 const obj2 = Object.assign({}, obj1, {d: 4})</span>
</code></pre></div><p>展开运算符还常常运用在解析结构之中，例如我们在Raect封装组件的时候常常不确定props到底还有多少数据会传进来，就会利用展开运算符来处理剩余的数据。</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 这种方式在react中十分常用</span>
<span class="token keyword">const</span> props <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">size</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
  <span class="token literal-property property">src</span><span class="token operator">:</span> <span class="token string">&#39;xxxx&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">mode</span><span class="token operator">:</span> <span class="token string">&#39;si&#39;</span>
<span class="token punctuation">}</span>


<span class="token keyword">const</span> <span class="token punctuation">{</span> size<span class="token punctuation">,</span> <span class="token operator">...</span>others <span class="token punctuation">}</span> <span class="token operator">=</span> props<span class="token punctuation">;</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>others<span class="token punctuation">)</span>

<span class="token comment">// 然后再利用暂开运算符传递给下一个元素，再以后封装react组件时会大量使用到这种方式，正在学习react的同学一定要搞懂这种使用方式</span>
<span class="token operator">&lt;</span>button <span class="token punctuation">{</span><span class="token operator">...</span>others<span class="token punctuation">}</span> size<span class="token operator">=</span><span class="token punctuation">{</span>size<span class="token punctuation">}</span> <span class="token operator">/</span><span class="token operator">&gt;</span>
</code></pre></div><p>展开运算符还用在函数的参数中，来表示函数的不定参。只有放在最后才能作为函数的不定参，否则会报错。</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 所有参数之和</span>
<span class="token keyword">const</span> <span class="token function-variable function">add</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">a<span class="token punctuation">,</span> b<span class="token punctuation">,</span> <span class="token operator">...</span>more</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> more<span class="token punctuation">.</span><span class="token function">reduce</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">m<span class="token punctuation">,</span> n</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> m <span class="token operator">+</span> n<span class="token punctuation">)</span> <span class="token operator">+</span> a <span class="token operator">+</span> b
<span class="token punctuation">}</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">23</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment">// 39</span>
</code></pre></div><p>展开运算符的运用可以大大提高我们的代码效率，但是在刚开始使用的时候比较绕脑，掌握好了用起来还是非常爽的，记住这些使用场景，平时在用的时候可以刻意多运用就行了。</p><h5 id="七、对象字面量-与-class" tabindex="-1"><a class="header-anchor" href="#七、对象字面量-与-class" aria-hidden="true">#</a> 七、对象字面量 与 class</h5><p>ES6针对对象字面量做了许多简化语法的处理。</p><ul><li>当属性与值的变量同名时。</li></ul><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> name <span class="token operator">=</span> <span class="token string">&#39;Jane&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> age <span class="token operator">=</span> <span class="token number">20</span>

<span class="token comment">// es6</span>
<span class="token keyword">const</span> person <span class="token operator">=</span> <span class="token punctuation">{</span>
  name<span class="token punctuation">,</span>
  age
<span class="token punctuation">}</span>

<span class="token comment">// es5</span>
<span class="token keyword">var</span> person <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span> name<span class="token punctuation">,</span>
  <span class="token literal-property property">age</span><span class="token operator">:</span> age
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre></div><p>那么这种方式在任何地方都可以使用，比如在一个模块对外提供接口时</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> <span class="token function-variable function">getName</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> person<span class="token punctuation">.</span>name<span class="token punctuation">;</span>
<span class="token keyword">const</span> <span class="token function-variable function">getAge</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> person<span class="token punctuation">.</span>age<span class="token punctuation">;</span>

<span class="token comment">// commonJS的方式</span>
module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span> getName<span class="token punctuation">,</span> getAge <span class="token punctuation">}</span>

<span class="token comment">// ES6 modules的方式</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span> getName<span class="token punctuation">,</span> getAge  <span class="token punctuation">}</span>
</code></pre></div><ul><li>除了属性之外，对象字面量写法中的方法也可以有简写方式。</li></ul><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// es6</span>
<span class="token keyword">const</span> person <span class="token operator">=</span> <span class="token punctuation">{</span>
  name<span class="token punctuation">,</span>
  age<span class="token punctuation">,</span>
  <span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token comment">// 只要不使用箭头函数，this就还是我们熟悉的this</span>
    <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>name
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// es5</span>
<span class="token keyword">var</span> person <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span> name<span class="token punctuation">,</span>
  <span class="token literal-property property">age</span><span class="token operator">:</span> age<span class="token punctuation">,</span>
  <span class="token function-variable function">getName</span><span class="token operator">:</span> <span class="token keyword">function</span> <span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>name<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre></div><ul><li>在对象字面量中可以使用中括号作为属性，表示属性名也能是一个变量了。</li></ul><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> name <span class="token operator">=</span> <span class="token string">&#39;Jane&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> age <span class="token operator">=</span> <span class="token number">20</span>

<span class="token keyword">const</span> person <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token punctuation">[</span>name<span class="token punctuation">]</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token punctuation">[</span>age<span class="token punctuation">]</span><span class="token operator">:</span> <span class="token boolean">true</span>
<span class="token punctuation">}</span>
</code></pre></div><p>在ant-design的源码实现中，就大量使用了这种方式来拼接当前元素的className，例如:</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">let</span> alertCls <span class="token operator">=</span> <span class="token function">classNames</span><span class="token punctuation">(</span>prefixCls<span class="token punctuation">,</span> <span class="token punctuation">{</span>
      <span class="token punctuation">[</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>prefixCls<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">-</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>type<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">]</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
      <span class="token punctuation">[</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>prefixCls<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">-close</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">]</span><span class="token operator">:</span> <span class="token operator">!</span><span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">.</span>closing<span class="token punctuation">,</span>
      <span class="token punctuation">[</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>prefixCls<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">-with-description</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">]</span><span class="token operator">:</span> <span class="token operator">!</span><span class="token operator">!</span>description<span class="token punctuation">,</span>
      <span class="token punctuation">[</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>prefixCls<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">-no-icon</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">]</span><span class="token operator">:</span> <span class="token operator">!</span>showIcon<span class="token punctuation">,</span>
      <span class="token punctuation">[</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>prefixCls<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">-banner</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">]</span><span class="token operator">:</span> <span class="token operator">!</span><span class="token operator">!</span>banner<span class="token punctuation">,</span>
 <span class="token punctuation">}</span><span class="token punctuation">,</span> className<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div>`,98),i={href:"https://links.jianshu.com/go?to=https%3A%2F%2Fant.design%2Findex-cn",target:"_blank",rel:"noopener noreferrer"},d=t(`<ul><li>class</li></ul><p>ES6为我们创建对象提供了新的语法糖，这就是Class语法。如果你对ES5中面向对象的方式比较熟悉的话，Class掌握起来也是非常迅速的，因为除了写法的不同，它并不会增加新的难以理解的知识点。我们先利用一个简单的例子来看看写法的不同。</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// ES5</span>
<span class="token comment">// 构造函数</span>
<span class="token keyword">function</span> <span class="token function">Person</span><span class="token punctuation">(</span><span class="token parameter">name<span class="token punctuation">,</span> age</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> name<span class="token punctuation">;</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span>age <span class="token operator">=</span> age<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// 原型方法</span>
<span class="token class-name">Person</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function-variable function">getName</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>name
<span class="token punctuation">}</span>

<span class="token comment">// ES6</span>
<span class="token keyword">class</span> <span class="token class-name">Person</span> <span class="token punctuation">{</span>
  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token parameter">name<span class="token punctuation">,</span> age</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>  <span class="token comment">// 构造函数</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> name<span class="token punctuation">;</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>age <span class="token operator">=</span> age<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>  <span class="token comment">// 原型方法</span>
    <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>name
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><blockquote><p>babel会将ES6的写法编译成为利用Object.defineProperty实现的方式，这个方法的具体用处大家可以在《JavaScript高级编程3》中学习了解，包括get，set，等都有详细的说明</p></blockquote><p>除此之外，我们还需要特别注意在实际使用中的几种写法方式的不同，在下面的例子注释中，我说明了他们分别对应的ES5中的含义。</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">class</span> <span class="token class-name">Person</span> <span class="token punctuation">{</span>
  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token parameter">name<span class="token punctuation">,</span> age</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>  <span class="token comment">// 构造函数</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> name<span class="token punctuation">;</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>age <span class="token operator">=</span> age<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>   <span class="token comment">// 这种写法表示将方法添加到原型中</span>
    <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>name
  <span class="token punctuation">}</span>

  <span class="token keyword">static</span> a <span class="token operator">=</span> <span class="token number">20</span><span class="token punctuation">;</span>  <span class="token comment">// 等同于 Person.a = 20</span>

  c <span class="token operator">=</span> <span class="token number">20</span><span class="token punctuation">;</span>   <span class="token comment">// 表示在构造函数中添加属性 在构造函数中等同于 this.c = 20</span>

<span class="token comment">// 箭头函数的写法表示在构造函数中添加方法，在构造函数中等同于this.getAge = function() {}</span>
  <span class="token function-variable function">getAge</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">this</span><span class="token punctuation">.</span>age   

<span class="token punctuation">}</span>
</code></pre></div><p>箭头函数需要注意的仍然是this的指向问题，因为箭头函数this指向不能被改变的特性，因此在react组件中常常利用这个特性来在不同的组件进行传值会更加方便。</p><ul><li>继承 extends</li></ul><p>相比ES5，ES6的继承就要简单很多，我们直接来看一个例子。</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">class</span> <span class="token class-name">Person</span> <span class="token punctuation">{</span>
  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token parameter">name<span class="token punctuation">,</span> age</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> name<span class="token punctuation">;</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>age <span class="token operator">=</span> age<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>name
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// Student类继承Person类</span>
<span class="token keyword">class</span> <span class="token class-name">Student</span> <span class="token keyword">extends</span> <span class="token class-name">Person</span> <span class="token punctuation">{</span>
  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token parameter">name<span class="token punctuation">,</span> age<span class="token punctuation">,</span> gender<span class="token punctuation">,</span> classes</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">super</span><span class="token punctuation">(</span>name<span class="token punctuation">,</span> age<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>gender <span class="token operator">=</span> gender<span class="token punctuation">;</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>classes <span class="token operator">=</span> classes<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token function">getGender</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>gender<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><p>我们只需要一个extends关键字，就可以实现继承了，不用像ES5那样去担心构造函数继承和原型继承，除此之外，我们还需要关注一个叫做<code>super</code>的方法。</p><p>在继承的构造函数中，我们必须如上面的例子那么调用一次super方法，它表示构造函数的继承，与ES5中利用call/apply继承构造函数是一样的功能。</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 构造函数中</span>
<span class="token comment">// es6</span>
<span class="token keyword">super</span><span class="token punctuation">(</span>name<span class="token punctuation">,</span> age<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// es5</span>
<span class="token function">Person</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><blockquote><p>super还可以直接调用父级的原型方法，<code>super.getName</code>，但是我自己从来没这样用过，也就不扩展说了。</p></blockquote><p>继承在react中有大量的使用场景，许多组件都利用继承来创建。</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">import</span> React<span class="token punctuation">,</span> <span class="token punctuation">{</span> Component <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;react&#39;</span><span class="token punctuation">;</span>

<span class="token keyword">class</span> <span class="token class-name">App</span> <span class="token keyword">extends</span> <span class="token class-name">Component</span> <span class="token punctuation">{</span>

  defaultProps <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
  state <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
  <span class="token function">componentWillMount</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
  <span class="token function">componentDidMount</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>

  <span class="token function-variable function">btnClick</span> <span class="token operator">=</span> <span class="token parameter">e</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>

  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div>`,16);function m(g,y){const a=e("ExternalLinkIcon");return c(),l("div",null,[n("blockquote",null,[n("p",null,[s("推荐大家使用babel官方提供的在线编译工具，编写自己的demo，会在右侧实时显示出编译之后的代码，以供参考学习 "),n("a",k,[s("http://babeljs.io/repl/"),p(a)])])]),r,n("blockquote",null,[n("p",null,[s("ant-design是一个认可度非常高的UI组件库，官方使用react的方式进行了实现，除此之外，还有vue也有对应的实现，有兴趣的同学可以去他们的官网了解学习。"),n("a",i,[s("https://ant.design/index-cn"),p(a)])])]),d])}const v=o(u,[["render",m],["__file","es600.html.vue"]]);export{v as default};
