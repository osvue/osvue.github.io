import{_ as s}from"./smzq-041e1fe0.js";import{_ as p}from"./vuex-a83d84bc.js";import{_ as c,M as l,p as u,q as i,R as n,t,N as a,a1 as o}from"./framework-d81ad7e5.js";const d={},r=o(`<p>Vue 是一款<strong>高度封装的</strong>、<strong>开箱即用的</strong>、<strong>一栈式的前端框架</strong>，既可以结合 webpack 进行编译式前端开发，也适用基于 gulp、grunt 等自动化工具直接挂载至<code>全局window</code>使用。</p><p>Vue 2 框架体系及技术栈日趋完善，相较于<code>React+Reflux/Redux/MobX</code>技术栈，Vue 更加贴近 W3C 技术规范（<em>例如实现仍处于 W3C 草案阶段的<code>&lt;template&gt;</code>、<code>&lt;slot&gt;</code>、<code>is</code>等新特性，提供了良好易用的模板书写环境</em>），并且开源生态更加完整且易于配置，将 React 手动编码才能处理的细节，整合成为最佳实践并抽象为语法糖（比如 Vuex 中提供的<code>store</code>的模块化特性），使得开发人员得以将注意力聚焦于业务逻辑本身。</p><p>Vue2 的 API 结构相比 Angular 更加简洁，可以自由结合 TypeScript 或是 ECMAScript6 使用，并不特定于具体的预处理语言去获得最佳使用体验，框架本身的特性也并不强制依赖于各类炫酷的语法糖。Vue2 总体是一款非常<strong>轻量</strong>的技术栈，设计实现上紧随 W3C 技术规范，着力于处理<strong>HTML 模板组件化</strong>、<strong>事件和数据的作用域分离</strong>、<strong>多层级组件通信</strong>三个单页面前端开发当中的重点问题。本文在行文过程中，穿插描述了 Angular、React 等前端框架的异同与比较，供徘徊于各类前端技术选型的开发人员参考。</p><h2 id="vue-与-angular-的比较" tabindex="-1"><a class="header-anchor" href="#vue-与-angular-的比较" aria-hidden="true">#</a> Vue 与 Angular 的比较</h2><h3 id="组件化" tabindex="-1"><a class="header-anchor" href="#组件化" aria-hidden="true">#</a> 组件化</h3><p>Angular 的设计思想照搬了 Java Web 开发当中 MVC 分层的概念，通过<code>Controller</code>切割并控制页面作用域，然后通过<code>Service</code>来实现复用，是一种对页面进行<strong>纵向</strong>分层的解耦思想。而 Vue 允许开发人员将页面抽象为若干独立的组件，即对页面的 DOM 结构进行<strong>横向</strong>的切割，通过组件的拼装来完成功能的复用、作用域控制。每个组件只提供<code>props</code>作为单一接口，并采用 Vuex 进行<code>state tree</code>的管理，从而便捷的实现组件间状态的通信与同步。</p><p>Angular 在<code>1.6.x</code>版本开始提供<code>component()</code>方法和<code>Component Router</code>来提供组件化开发的体验，但是依然需要依赖于<code>controller</code>和<code>service</code>的划分，实质上依然没有摆脱 MVC 纵向分层思想的桎梏。</p><h3 id="双向绑定与响应式绑定" tabindex="-1"><a class="header-anchor" href="#双向绑定与响应式绑定" aria-hidden="true">#</a> 双向绑定与响应式绑定</h3><p>Vue 遍历 data 对象上的所有属性，并通过原生<code>Object.defineProperty()</code>方法将这些属性转换为<code>getter/setter</code>（<em>只支持 IE9 及以上浏览器</em>）。Vue 内部通过这些 getter/setter 追踪依赖，在属性被修改时触发相应变化，从而完成模型到视图的双向绑定。每个 Vue 组件实例化时，都会自动调用<code>$watch()</code>遍历自身的 data 属性，并将其记录为依赖项，当这些依赖项的 setter 被触发时会通知 watcher 重新计算新值，然后触发 Vue 组件的<code>render()</code>函数重新渲染组件。</p><p>与 Aangular 双向数据绑定不同，Vue 组件不能检测到实例化后 data 属性的添加、删除，因为 Vue 组件在实例化时才会对属性执行 getter/setter 处理，所以 data 对象上的属性必须在实例化之前存在，Vue 才能够正确的进行转换。因而，Vue 提供的并非真正意义上的双向绑定，更准确的描述应该是<strong>单向绑定，响应式更新</strong>，而 Angular 即可以通过<code>$scope</code>影响 view 上的数据绑定，也可以通过视图层操作<code>$scope</code>上的对象属性，属于真正意义上的<strong>视图与模型的双向绑定</strong>。</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">var</span> vm <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Vue</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">data</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">a</span><span class="token operator">:</span> <span class="token number">1</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
vm<span class="token punctuation">.</span>a <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span> <span class="token comment">// 响应的</span>
vm<span class="token punctuation">.</span>b <span class="token operator">=</span> <span class="token number">2</span><span class="token punctuation">;</span> <span class="token comment">// 非响应的</span>
</code></pre></div><p>因此，Vue 不允许在已经实例化的组件上添加新的动态根级响应属性（<em>即直接挂载在 data 下的属性</em>），但是可以使用<code>Vue.set(object, key, value)</code>方法添加响应式属性。</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code>Vue<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span>vm<span class="token punctuation">.</span>someObject<span class="token punctuation">,</span> <span class="token string">&quot;b&quot;</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// vm.$set()实例方法是Vue.set()全局方法的别名</span>
<span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">$set</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>someObject<span class="token punctuation">,</span> <span class="token string">&quot;b&quot;</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 使用Object.assign()或_.extend()也可以添加响应式属性，但是需要创建同时包含原属性、新属性的对象，从而有效触发watch()方法</span>
<span class="token keyword">this</span><span class="token punctuation">.</span>someObject <span class="token operator">=</span> Object<span class="token punctuation">.</span><span class="token function">assign</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token keyword">this</span><span class="token punctuation">.</span>someObject<span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token literal-property property">a</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token literal-property property">b</span><span class="token operator">:</span> <span class="token number">2</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><p>Vue 对 DOM 的更新是异步的，观察到数据变化后 Vue 将开启一个队列，缓冲在同一事件循环（<em>Vue 的 event loop 被称为<strong>tick</strong> [tɪk] n.标记，记号</em>）中发生的所有数据变化。如果同一个 watcher 被多次触发，只会向这个队列中推入一次。</p><blockquote><p>Vue 内部会通过原生 JavaScript 的<code>Promise.then</code>、<code>MutationObserver</code>、<code>setTimeout(fn, 0)</code>来执行异步队列当中的 watcher。</p></blockquote><p>在需要人为操作 DOM 的场景下，为了在 Vue 响应数据变化之后再更新 DOM，可以手动调用<code>Vue.nextTick(callback)</code>，并将 DOM 操作逻辑放置在 callback 回调函数中，从而确保响应式更新完成之后再进行 DOM 操作。</p><div class="language-html" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>example<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>{{message}}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
  <span class="token comment">// 使用Vue实例上的.$nextTick()</span>
  <span class="token keyword">var</span> vue <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Vue</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">el</span><span class="token operator">:</span> <span class="token string">&quot;#example&quot;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">data</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">message</span><span class="token operator">:</span> <span class="token string">&quot;123&quot;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  vue<span class="token punctuation">.</span>message <span class="token operator">=</span> <span class="token string">&quot;new message&quot;</span><span class="token punctuation">;</span> <span class="token comment">// 更改数据</span>
  vue<span class="token punctuation">.</span>$el<span class="token punctuation">.</span>textContent <span class="token operator">===</span> <span class="token string">&quot;new message&quot;</span><span class="token punctuation">;</span> <span class="token comment">// false</span>
  vue<span class="token punctuation">.</span><span class="token function">nextTick</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    vm<span class="token punctuation">.</span>$el<span class="token punctuation">.</span>textContent <span class="token operator">===</span> <span class="token string">&quot;new message&quot;</span><span class="token punctuation">;</span> <span class="token comment">// true</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
  <span class="token comment">// 组件内使用vm.$nextTick()，不需要通过全局Vue，且回调函数中this自动指向当前Vue实例</span>
  Vue<span class="token punctuation">.</span><span class="token function">component</span><span class="token punctuation">(</span><span class="token string">&quot;example&quot;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">template</span><span class="token operator">:</span> <span class="token string">&quot;&lt;span&gt;{{ message }}&lt;/span&gt;&quot;</span><span class="token punctuation">,</span>
    <span class="token function-variable function">data</span><span class="token operator">:</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">message</span><span class="token operator">:</span> <span class="token string">&quot;没有更新&quot;</span>
      <span class="token punctuation">}</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">methods</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token function-variable function">updateMessage</span><span class="token operator">:</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>message <span class="token operator">=</span> <span class="token string">&quot;更新完成&quot;</span><span class="token punctuation">;</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>$el<span class="token punctuation">.</span>textContent<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 没有更新</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">$nextTick</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
          console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>$el<span class="token punctuation">.</span>textContent<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 更新完成</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><h3 id="object-defineproperty" tabindex="-1"><a class="header-anchor" href="#object-defineproperty" aria-hidden="true">#</a> Object.defineProperty()</h3><p>Vue2 的响应式绑定依靠 JavaScript 原生提供的<code>Object.defineProperty()</code>实现，下面通过手动完成了一个简单的响应式绑定，来展示其内在的工作机制。</p><div class="language-jsx" data-ext="jsx"><pre class="language-jsx"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>label</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">输入：</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>label</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>input<span class="token punctuation">&quot;</span></span>  <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>text<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>br</span><span class="token punctuation">/&gt;</span></span><span class="token plain-text">
</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>label</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">输出：</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>label</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>output<span class="token punctuation">&quot;</span></span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>text<span class="token punctuation">&quot;</span></span> <span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>input</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">

</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
const store = {};
const output = [];

Object.defineProperty(store, &quot;element&quot;, {
  // 为store对象的element属性设置监听方法
  set: value =&gt; {
    output[&quot;element&quot;] = value;
  },
  get: () =&gt; {
    return output[&quot;element&quot;];
  }
});

let inputDOM = document.querySelector(&quot;#input&quot;);
let outputDOM = document.querySelector(&quot;#output&quot;);

inputDOM.onkeyup = () =&gt; {
  store.element = inputDOM.value; // 为store对象设置element属性时候，会触该属性的set方法，此时inputDOM的value值将会赋予outputDOM。
  outputDOM.value = output[&quot;element&quot;];
};
</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
</span></code></pre></div><p>上面的示例中，通过操作 DOM 的方式完成数据绑定显然不够优雅，目前使用较为广泛的是 Vue2 所使用的 Mustache 胡须语法<code>{{\`\`}}</code>，因此如何更加语义化的完成数据绑定，成为下一步需要着手解决的问题：</p><div class="language-jsx" data-ext="jsx"><pre class="language-jsx"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>label</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">输入：</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>label</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>input<span class="token punctuation">&quot;</span></span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>text<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
<span class="token operator">&lt;</span><span class="token operator">!</span><span class="token operator">--</span> 使用了Handlebar的胡须表达式 <span class="token operator">--</span><span class="token operator">&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>output<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token plain-text">Handlebar编译后输出：</span><span class="token punctuation">{</span><span class="token punctuation">{</span>element<span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
  const store = {};
  const output = [];

  Object.defineProperty(store, &quot;element&quot;, {
    // 为store对象的element属性设置监听方法
    set: value =&gt; {
      output[&quot;element&quot;] = value || &quot;&quot;;
    },
    get: () =&gt; {
      return output[&quot;element&quot;];
    }
  });

  let inputDOM = document.querySelector(&quot;#input&quot;);
  let outputHTML = document.querySelector(&quot;#output&quot;).innerHTML;

  compile(store, outputHTML); // 初始化编译

  // 绑定输入框事件，并且实时编译DOM
  inputDOM.onkeyup = () =&gt; {
    store.element = inputDOM.value;
    compile(store, outputHTML);
  };

  // 通过Handlebar编译使用了胡须语法的DOM
  function compile(store, html) {
    const template = Handlebars.compile(html);
    document.querySelector(&quot;#output&quot;).innerHTML = template(store);
  }
</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><p>看起来工作得学不错，不过生产环境下需要完成的功能更多，比如对用户输入的内容进行清洗，以防止 XSS；通过虚拟 DOM 和 diff 算法，更有效率的插入编译后的 DOM 等等，当然这些工作 Vue2 已经为你完成，开发人员只需要专注于业务代码本身。</p><h3 id="虚拟-dom" tabindex="-1"><a class="header-anchor" href="#虚拟-dom" aria-hidden="true">#</a> 虚拟 DOM</h3><p><strong>Vritual DOM</strong>这个概念最先由 React 引入，是一种 DOM 对象差异化比较方案，即将 DOM 对象抽象成为 Vritual DOM 对象（<em>即 render()函数渲染的结果</em>），然后通过差异算法对 Vritual DOM 进行对比并返回差异，最后通过一个补丁算法将返回的差异对象应用在真实 DOM 结点。</p>`,25),g=n("strong",null,"VNode",-1),q=n("em",null,[n("code",null,"template"),t("当中的内容会被编译为 render()函数，而 render()函数接收一个 createElement()函数，并最终返回一个 VNode 对象")],-1),m={href:"https://github.com/snabbdom/snabbdom",target:"_blank",rel:"noopener noreferrer"},k=o(`<div class="language-jsx" data-ext="jsx"><pre class="language-jsx"><code>➜  vdom git<span class="token operator">:</span><span class="token punctuation">(</span>dev<span class="token punctuation">)</span> tree
├── create<span class="token operator">-</span>component<span class="token punctuation">.</span>js
├── create<span class="token operator">-</span>element<span class="token punctuation">.</span>js
├── create<span class="token operator">-</span>functional<span class="token operator">-</span>component<span class="token punctuation">.</span>js
├── helpers
│   ├── extract<span class="token operator">-</span>props<span class="token punctuation">.</span>js
│   ├── get<span class="token operator">-</span>first<span class="token operator">-</span>component<span class="token operator">-</span>child<span class="token punctuation">.</span>js
│   ├── index<span class="token punctuation">.</span>js
│   ├── is<span class="token operator">-</span>async<span class="token operator">-</span>placeholder<span class="token punctuation">.</span>js
│   ├── merge<span class="token operator">-</span>hook<span class="token punctuation">.</span>js
│   ├── normalize<span class="token operator">-</span>children<span class="token punctuation">.</span>js
│   ├── resolve<span class="token operator">-</span>async<span class="token operator">-</span>component<span class="token punctuation">.</span>js
│   └── update<span class="token operator">-</span>listeners<span class="token punctuation">.</span>js
├── modules
│   ├── directives<span class="token punctuation">.</span>js
│   ├── index<span class="token punctuation">.</span>js
│   └── ref<span class="token punctuation">.</span>js
├── patch<span class="token punctuation">.</span>js
└── vnode<span class="token punctuation">.</span>js
</code></pre></div><p>VNode 的设计出发点与 Angular 的<code>$digest</code>循环类似，都是通过<strong>减少对真实 DOM 的操作次数来提升性能</strong>，但是 Vue 的实现更加轻量化，摒弃了 Angular 为了实现双向绑定而提供的<code>$apply()</code>、<code>$eval()</code>封装函数，有选择性的实现 Angular 中<code>$compile()</code>、<code>$watch()</code>类似的功能。</p><h2 id="vue-对象的选项" tabindex="-1"><a class="header-anchor" href="#vue-对象的选项" aria-hidden="true">#</a> Vue 对象的选项</h2><p>通过向构造函数<code>new Vue()</code>传入一个<code>option</code>对象去创建一个 Vue 实例。</p><div class="language-jsx" data-ext="jsx"><pre class="language-jsx"><code><span class="token keyword">var</span> vm <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Vue</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token comment">// 数据</span>
  <span class="token literal-property property">data</span><span class="token operator">:</span> <span class="token string">&quot;声明需要响应式绑定的数据对象&quot;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">props</span><span class="token operator">:</span> <span class="token string">&quot;接收来自父组件的数据&quot;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">propsData</span><span class="token operator">:</span> <span class="token string">&quot;创建实例时手动传递props，方便测试props&quot;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">computed</span><span class="token operator">:</span> <span class="token string">&quot;计算属性&quot;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">methods</span><span class="token operator">:</span> <span class="token string">&quot;定义可以通过vm对象访问的方法&quot;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">watch</span><span class="token operator">:</span> <span class="token string">&quot;Vue实例化时会调用$watch()方法遍历watch对象的每个属性&quot;</span><span class="token punctuation">,</span>
  <span class="token comment">// DOM</span>
  <span class="token literal-property property">el</span><span class="token operator">:</span> <span class="token string">&quot;将页面上已存在的DOM元素作为Vue实例的挂载目标&quot;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">template</span><span class="token operator">:</span> <span class="token string">&quot;可以替换挂载元素的字符串模板&quot;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">render</span><span class="token operator">:</span> <span class="token string">&quot;渲染函数，字符串模板的替代方案&quot;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">renderError</span><span class="token operator">:</span> <span class="token string">&quot;仅用于开发环境，在render()出现错误时，提供另外的渲染输出&quot;</span><span class="token punctuation">,</span>
  <span class="token comment">// 生命周期钩子</span>
  <span class="token literal-property property">beforeCreate</span><span class="token operator">:</span> <span class="token string">&quot;发生在Vue实例初始化之后，data observer和event/watcher事件被配置之前&quot;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">created</span><span class="token operator">:</span> <span class="token string">&quot;发生在Vue实例初始化以及data observer和event/watcher事件被配置之后&quot;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">beforeMount</span><span class="token operator">:</span> <span class="token string">&quot;挂载开始之前被调用，此时render()首次被调用&quot;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">mounted</span><span class="token operator">:</span> <span class="token string">&quot;el被新建的vm.$el替换，并挂载到实例上之后调用&quot;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">beforeUpdate</span><span class="token operator">:</span> <span class="token string">&quot;数据更新时调用，发生在虚拟DOM重新渲染和打补丁之前&quot;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">updated</span><span class="token operator">:</span> <span class="token string">&quot;数据更改导致虚拟DOM重新渲染和打补丁之后被调用&quot;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">activated</span><span class="token operator">:</span> <span class="token string">&quot;keep-alive组件激活时调用&quot;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">deactivated</span><span class="token operator">:</span> <span class="token string">&quot;keep-alive组件停用时调用&quot;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">beforeDestroy</span><span class="token operator">:</span> <span class="token string">&quot;实例销毁之前调用，Vue实例依然可用&quot;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">destroyed</span><span class="token operator">:</span> <span class="token string">&quot;Vue实例销毁后调用，事件监听和子实例全部被移除，释放系统资源&quot;</span><span class="token punctuation">,</span>
  <span class="token comment">// 资源</span>
  <span class="token literal-property property">directives</span><span class="token operator">:</span> <span class="token string">&quot;包含Vue实例可用指令的哈希表&quot;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">filters</span><span class="token operator">:</span> <span class="token string">&quot;包含Vue实例可用过滤器的哈希表&quot;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">components</span><span class="token operator">:</span> <span class="token string">&quot;包含Vue实例可用组件的哈希表&quot;</span><span class="token punctuation">,</span>
  <span class="token comment">// 组合</span>
  <span class="token literal-property property">parent</span><span class="token operator">:</span> <span class="token string">&quot;指定当前实例的父实例，子实例用this.$parent访问父实例，父实例通过$children数组访问子实例&quot;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">mixins</span><span class="token operator">:</span> <span class="token string">&quot;将属性混入Vue实例对象，并在Vue自身实例对象的属性被调用之前得到执行&quot;</span><span class="token punctuation">,</span>
  <span class="token keyword">extends</span><span class="token operator">:</span> <span class="token string">&quot;用于声明继承另一个组件，从而无需使用Vue.extend，便于扩展单文件组件&quot;</span><span class="token punctuation">,</span>
  provide<span class="token operator">&amp;</span>inject<span class="token operator">:</span> <span class="token string">&quot;2个属性需要一起使用，用来向所有子组件注入依赖，类似于React的Context&quot;</span><span class="token punctuation">,</span>
  <span class="token comment">// 其它</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&quot;允许组件递归调用自身，便于调试时显示更加友好的警告信息&quot;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">delimiters</span><span class="token operator">:</span> <span class="token string">&quot;改变模板字符串的风格，默认为{{}}&quot;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">functional</span><span class="token operator">:</span> <span class="token string">&quot;让组件无状态(没有data)和无实例(没有this上下文)&quot;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">model</span><span class="token operator">:</span> <span class="token string">&quot;允许自定义组件使用v-model时定制prop和event&quot;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">inheritAttrs</span><span class="token operator">:</span> <span class="token string">&quot;默认情况下，父作用域的非props属性绑定会应用在子组件的根元素上。当编写嵌套有其它组件或元素的组件时，可以将该属性设置为false关闭这些默认行为&quot;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">comments</span><span class="token operator">:</span> <span class="token string">&quot;设为true时会保留并且渲染模板中的HTML注释&quot;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><blockquote><p>Vue 实例通常使用<code>vm</code>（<em>View Model</em>）变量来命名。</p></blockquote><h3 id="属性计算-computed" tabindex="-1"><a class="header-anchor" href="#属性计算-computed" aria-hidden="true">#</a> 属性计算 computed</h3><p>在 HTML 模板表达式中放置太多业务逻辑，会让模板过重且难以维护。因此，可以考虑将模板中比较复杂的表达式拆分到 computed 属性当中进行计算。</p><div class="language-jsx" data-ext="jsx"><pre class="language-jsx"><code><span class="token operator">&lt;</span><span class="token operator">!</span><span class="token operator">--</span> 不使用计算属性 <span class="token operator">--</span><span class="token operator">&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>example<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
  </span><span class="token punctuation">{</span><span class="token punctuation">{</span> message<span class="token punctuation">.</span><span class="token function">split</span><span class="token punctuation">(</span><span class="token string">&quot;&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">reverse</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span><span class="token string">&quot;&quot;</span><span class="token punctuation">)</span> <span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token plain-text">
</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>

<span class="token operator">&lt;</span><span class="token operator">!</span><span class="token operator">--</span> 将表达式抽象到计算属性 <span class="token operator">--</span><span class="token operator">&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>example<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
  </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">Original message: &quot;{{ message }}&quot;</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
  </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">Computed reversed message: &quot;{{ reversedMessage }}&quot;</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
  var vm = new Vue({
    el: &quot;#example&quot;,
    data: {
      message: &quot;Hello&quot;
    },
    computed: {
      reversedMessage: function() {
        return this.message
          .split(&quot;&quot;)
          .reverse()
          .join(&quot;&quot;);
      }
    }
  });
</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><blockquote><p>计算属性只在相关依赖发生改变时才会重新求值，这意味只要上面例子中的 message 没有发生改变，多次访问 reversedMessage 计算属性总会返回之前的计算结果，而不必再次执行函数，这是 computed 和 method 的一个重要区别。</p></blockquote><p>计算属性默认只拥有<strong>getter</strong>方法，但是可以自定义一个<strong>setter</strong>方法。</p><div class="language-text" data-ext="text"><pre class="language-text"><code>&lt;script&gt;
  ... ... ...
  computed: {
    fullName: {
      // getter
      get: function () {
        return this.firstName + &quot; &quot; + this.lastName
      },
      // setter
      set: function (newValue) {
        var names = newValue.split(&quot; &quot;)
        this.firstName = names[0]
        this.lastName = names[names.length - 1]
      }
    }
  }
  ... ... ...
  // 下面语句触发setter方法，firstName和lastName也会被相应更新
  vm.fullName = &quot;John Doe&quot;
&lt;/script&gt;
</code></pre></div><h3 id="观察者属性-watch" tabindex="-1"><a class="header-anchor" href="#观察者属性-watch" aria-hidden="true">#</a> 观察者属性 watch</h3><p>通过 watch 属性可以手动观察 Vue 实例上的数据变动，当然也可以调用实例上的<code>vm.$watch</code>达到相同的目的。</p><div class="language-text" data-ext="text"><pre class="language-text"><code>&lt;div id=&quot;watch-example&quot;&gt;
  &lt;p&gt;Ask a yes/no question: &lt;input v-model=&quot;question&quot; /&gt;&lt;/p&gt;
  &lt;p&gt;{{ answer }}&lt;/p&gt;
&lt;/div&gt;

&lt;script&gt;
  var watchExampleVM = new Vue({
    el: &quot;#watch-example&quot;,
    data: {
      question: &quot;&quot;,
      answer: &quot;I cannot give you an answer until you ask a question!&quot;
    },
    watch: {
      // 如果question发生改变，该函数就会运行
      question: function(newQuestion) {
        this.answer = &quot;Waiting for you to stop typing...&quot;;
        this.getAnswer();
      }
    },
    methods: {
      // _.debounce是lodash当中限制操作频率的函数
      getAnswer: _.debounce(
        function() {
          if (this.question.indexOf(&quot;?&quot;) === -1) {
            this.answer = &quot;Questions usually contain a question mark. ;-)&quot;;
            return;
          }
          this.answer = &quot;Thinking...&quot;;
          var vm = this;
          axios
            .get(&quot;https://yesno.wtf/api&quot;)
            .then(function(response) {
              vm.answer = _.capitalize(response.data.answer);
            })
            .catch(function(error) {
              vm.answer = &quot;Error! Could not reach the API. &quot; + error;
            });
        },
        // 这是用户停止输入等待的毫秒数
        500
      )
    }
  });
&lt;/script&gt;
</code></pre></div><blockquote><p>使用 watch 属性的灵活性在于，当监测到数据变化的时候，可以做一些设置中间状态之类的过渡处理。</p></blockquote><h3 id="混合属性-mixins" tabindex="-1"><a class="header-anchor" href="#混合属性-mixins" aria-hidden="true">#</a> 混合属性 mixins</h3><p>用来将指定的 mixin 对象复用到 Vue 组件当中。</p><div class="language-text" data-ext="text"><pre class="language-text"><code>// mixin对象
var mixin = {
  created: function() {
    console.log(&quot;混合对象的钩子被调用&quot;);
  },
  methods: {
    foo: function() {
      console.log(&quot;foo&quot;);
    },
    conflicting: function() {
      console.log(&quot;from mixin&quot;);
    }
  }
};

// vue属性
var vm = new Vue({
  mixins: [mixin],
  created: function() {
    console.log(&quot;组件钩子被调用&quot;);
  },
  methods: {
    bar: function() {
      console.log(&quot;bar&quot;);
    },
    conflicting: function() {
      console.log(&quot;from self&quot;);
    }
  }
});

// =&gt; &quot;混合对象的钩子被调用&quot;
// =&gt; &quot;组件钩子被调用&quot;
vm.foo(); // =&gt; &quot;foo&quot;
vm.bar(); // =&gt; &quot;bar&quot;
vm.conflicting(); // =&gt; &quot;from self&quot;
</code></pre></div><blockquote><p>同名组件 option 对象的属性会被合并为数组依次进行调用，其中 mixin 对象里的属性会被首先调用。如果组件 option 对象的属性值是一个对象，则 mixin 中的属性会被忽略掉。</p></blockquote><h3 id="渲染函数-render" tabindex="-1"><a class="header-anchor" href="#渲染函数-render" aria-hidden="true">#</a> 渲染函数 render()</h3><p>用来创建 VNode，该函数接收<code>createElement()</code>方法作为第 1 个参数，该方法调用后会返回一个虚拟 DOM（<em>即 VNode</em>）。</p><p>直接使用表达式，或者在<code>render()</code>函数内通过<code>createElement()</code>进行手动渲染，Vue 都会自动保持<code>blogTitle</code>属性的响应式更新。</p><div class="language-text" data-ext="text"><pre class="language-text"><code>&lt;h1&gt;{{ blogTitle }}&lt;/h1&gt;

&lt;script&gt;
  render: function (createElement) {
    return createElement(&quot;h1&quot;, this.blogTitle)
  }
&lt;/script&gt;
</code></pre></div><blockquote><p>如果组件是一个函数组件，render()还会接收一个 context 参数，以便为没有实例的函数组件提供上下文信息。</p></blockquote><p>通过 render()函数实现虚拟 DOM 比较麻烦，因此可以使用 Babel 插件<code>babel-plugin-transform-vue-jsx</code>在 render()函数中应用 JSX 语法。</p><div class="language-text" data-ext="text"><pre class="language-text"><code>import AnchoredHeading from &quot;./AnchoredHeading.vue&quot;;

new Vue({
  el: &quot;#demo&quot;,
  render(h) {
    return (
      &lt;AnchoredHeading level={1}&gt;
        &lt;span&gt;Hello&lt;/span&gt; world!
      &lt;/AnchoredHeading&gt;
    );
  }
});
</code></pre></div><h2 id="vue-对象全局-api" tabindex="-1"><a class="header-anchor" href="#vue-对象全局-api" aria-hidden="true">#</a> Vue 对象全局 API</h2><div class="language-text" data-ext="text"><pre class="language-text"><code>Vue.extend(options); // 通过继承一个option对象来创建一个Vue实例。
Vue.nextTick([callback, context]); // 在下次DOM更新循环结束之后执行延迟回调。
Vue.set(target, key, value); // 设置对象的属性，如果是响应式对象，将会触发视图更新。
Vue.delete(target, key); // 删除对象的属性，如果是响应式对象，将会触发视图更新。
Vue.directive(id, [definition]); // 注册或获取全局指令。
Vue.filter(id, [definition]); // 注册或获取全局过滤器。
Vue.component(id, [definition]); // 注册或获取全局组件。
Vue.use(plugin); // 安装Vue插件。
Vue.mixin(mixin); // 全局注册一个mixin对象。
Vue.compile(template); // 在render函数中编译模板字符串。
Vue.version; // 提供当前使用Vue的版本号。
</code></pre></div><h3 id="vue-mixin-mixin" tabindex="-1"><a class="header-anchor" href="#vue-mixin-mixin" aria-hidden="true">#</a> Vue.mixin(mixin)</h3><p>使用全局 mixins 将会影响到所有<strong>之后创建</strong>的 Vue 实例。</p><div class="language-text" data-ext="text"><pre class="language-text"><code>// 为自定义选项myOption注入一个处理器。
Vue.mixin({
  created: function() {
    var myOption = this.$options.myOption;
    if (myOption) {
      console.log(myOption);
    }
  }
});

new Vue({
  myOption: &quot;hello!&quot;
});

// =&gt; &quot;hello!&quot;
</code></pre></div><h3 id="vue-directive-id-definition" tabindex="-1"><a class="header-anchor" href="#vue-directive-id-definition" aria-hidden="true">#</a> Vue.directive(id, [definition])</h3><p>Vue 允许注册自定义指令，用于对底层 DOM 进行操作。</p><div class="language-text" data-ext="text"><pre class="language-text"><code>Vue.directive(&quot;focus&quot;, {
  bind: function() {
    // 指令第一次绑定到元素时调用，只会调用一次，可以用来执行一些初始化操作。
  },
  inserted: function(el) {
    // 被绑定元素插入父节点时调用。
  },
  update: function() {
    // 所在组件的VNode更新时调用，但是可能发生在其子VNode更新之前。
  },
  componentUpdated: function() {
    // 所在组件VNode及其子VNode全部更新时调用。
  },
  unbind: function() {
    // 指令与元素解绑时调用，只会被调用一次。
  }
});
</code></pre></div><blockquote><p>钩子之间共享数据可以通过<code>HTMLElement</code>的<code>dataset</code>属性来进行（<em>即 HTML 标签上通过<code>data-</code>格式定义的属性</em>）。</p></blockquote><p>上面的钩子函数拥有如下参数：</p><ul><li>el: 指令绑定的 HTML 元素，可以用来直接操作 DOM。</li><li>vnode: Vue 编译生成的虚拟节点。</li><li>oldVnode: 之前的虚拟节点，仅在<code>update</code>、<code>componentUpdated</code>钩子中可用。</li><li>binding: 一个对象，包含以下属性： <ul><li>name: 指令名称，不包括<code>v-</code>前缀。</li><li>value: 指令的绑定值，例如<code>v-my-directive=&quot;1 + 1&quot;</code>中<code>value</code>的值是<code>2</code>。</li><li>oldValue: 指令绑定的之前一个值，仅在<code>update</code>、<code>componentUpdated</code>钩子中可用。</li><li>expression: 绑定值的字符串形式，例如<code>v-my-directive=&quot;1 + 1&quot;</code>当中<code>expression</code>的值为<code>&quot;1 + 1&quot;</code>。</li><li>arg: 传给指令的参数，例如<code>v-my-directive:foo</code>中<code>arg</code>的值是<code>&quot;foo&quot;</code>。</li><li>modifiers: 包含修饰符的对象，例如<code>v-my-directive.foo.bar</code>的<code>modifiers</code>的值是<code>{foo: true, bar: true}</code>。</li></ul></li></ul><blockquote><p>上面参数除<code>el</code>之外，其它参数都应该是只读的，尽量不要对其进行修改操作。</p></blockquote><h3 id="vue-filter-id-definition" tabindex="-1"><a class="header-anchor" href="#vue-filter-id-definition" aria-hidden="true">#</a> Vue.filter(id, [definition])</h3><p>Vue 可以通过定义过滤器，进行一些常见的文本格式化，可以用于 mustache 插值和 v-bind 表达式当中，使用时通过管道符<code>|</code>添加在表达式尾部。</p><div class="language-text" data-ext="text"><pre class="language-text"><code>&lt;!-- in mustaches --&gt;
{{ message | capitalize }}

&lt;!-- in v-bind --&gt;
&lt;div v-bind:id=&quot;rawId | formatId&quot;&gt;&lt;/div&gt;

&lt;!-- capitalize filter --&gt;
&lt;script&gt;
  new Vue({
    filters: {
      capitalize: function(value) {
        if (!value) return &quot;&quot;;
        value = value.toString();
        return value.charAt(0).toUpperCase() + value.slice(1);
      }
    }
  });
&lt;/script&gt;
</code></pre></div><p>过滤器可以串联使用，也可以传入参数。</p><div class="language-text" data-ext="text"><pre class="language-text"><code>&lt;span&gt;{{ message | filterA | filterB }}&lt;/span&gt;
&lt;span&gt;{{ message | filterA(&quot;arg1&quot;, arg2) }}&lt;/span&gt;
</code></pre></div><h3 id="vue-use-plugin" tabindex="-1"><a class="header-anchor" href="#vue-use-plugin" aria-hidden="true">#</a> Vue.use(plugin)</h3><p>Vue 通过插件来添加一些全局功能，Vue 插件都会覆写其<code>install()</code>方法，该方法第 1 个参数是<code>Vue构造器</code>, 第 2 个参数是可选的<code>option对象</code>:</p><div class="language-text" data-ext="text"><pre class="language-text"><code>MyPlugin.install = function(Vue, options) {
  // 1. 添加全局方法或属性
  Vue.myGlobalMethod = function() {};

  // 2. 添加全局资源
  Vue.directive(&quot;my-directive&quot;, {
    bind(el, binding, vnode, oldVnode) {}
  });

  // 3. 注入组件
  Vue.mixin({
    created: function() {}
  });

  // 4. 添加实例方法
  Vue.prototype.$myMethod = function(methodOptions) {};
};
</code></pre></div><p>通过全局方法<code>Vue.use()</code>使用指定插件，使用的时候也可以传入一个 option 对象。</p><div class="language-text" data-ext="text"><pre class="language-text"><code>Vue.use(MyPlugin, { someOption: true });
</code></pre></div><blockquote><p>vue-router 等插件检测到 Vue 是全局对象时会自动调用<code>Vue.use()</code>，如果在 CommonJS 模块环境中，则需要显式调用<code>Vue.use()</code>。</p></blockquote><h2 id="实例属性和方法" tabindex="-1"><a class="header-anchor" href="#实例属性和方法" aria-hidden="true">#</a> 实例属性和方法</h2><p>Vue 实例暴露了一系列带有前缀**$**的实例属性与方法。</p><div class="language-text" data-ext="text"><pre class="language-text"><code>let vm = new Vue();
vm = {
  // Vue实例属性的代理
  $data: &quot;被watch的data对象&quot;,
  $props: &quot;当前组件收到的props&quot;,
  $el: &quot;Vue实例使用的根DOM元素&quot;,
  $options: &quot;当前Vue实例的初始化选项&quot;,
  $parent: &quot;父组件Vue对象的实例&quot;,
  $root: &quot;根组件Vue对象的实例&quot;,
  $children: &quot;当前实例的直接子组件&quot;,
  $slots: &quot;访问被slot分发的内容&quot;,
  $scopedSlots: &quot;访问scoped slots&quot;,
  $refs: &quot;包含所有拥有ref注册的子组件&quot;,
  $isServer: &quot;判断Vue实例是否运行于服务器&quot;,
  $attrs: &quot;包含父作用域中非props的属性绑定&quot;,
  $listeners: &quot;包含了父作用域中的v-on事件监听器&quot;,
  // 数据
  $watch: &quot;观察Vue实例变化的表达式、计算属性函数&quot;,
  $set: &quot;全局Vue.set的别名&quot;,
  $delete: &quot;全局Vue.delete的别名&quot;,
  // 事件
  $on: &quot;监听当前实例上的自定义事件，事件可以由vm.$emit触发&quot;,
  $once: &quot;监听一个自定义事件，触发一次之后就移除监听器&quot;,
  $off: &quot;移除自定义事件监听器&quot;,
  $emit: &quot;触发当前实例上的事件&quot;,
  // 生命周期
  $mount: &quot;手动地挂载一个没有挂载的Vue实例&quot;,
  $forceUpdate: &quot;强制Vue实例重新渲染，仅影响实例本身和插入插槽内容的子组件&quot;,
  $nextTick: &quot;将回调延迟到下次DOM更新循环之后执行&quot;,
  $destroy: &quot;完全销毁一个实例&quot;
};
</code></pre></div><h3 id="refs-属性" tabindex="-1"><a class="header-anchor" href="#refs-属性" aria-hidden="true">#</a> $refs 属性</h3><p><strong>子</strong>组件指定<code>ref</code>属性之后，可以通过<strong>父</strong>组件的<code>$refs</code>实例属性对其进行访问 。</p><div class="language-text" data-ext="text"><pre class="language-text"><code>&lt;div id=&quot;parent&quot;&gt;
  &lt;user-profile ref=&quot;profile&quot;&gt;&lt;/user-profile&gt;
&lt;/div&gt;

&lt;script&gt;
  var parent = new Vue({ el: &quot;#parent&quot; });
  var child = parent.$refs.profile; // 访问子组件
&lt;/script&gt;
</code></pre></div><blockquote><p>refs会在组件渲染完毕后填充，是非响应式的，仅作为需要直接访问子组件的应急方案，因此要**避免在模板或计算属性中使用refs**。</p></blockquote><h2 id="生命周期" tabindex="-1"><a class="header-anchor" href="#生命周期" aria-hidden="true">#</a> 生命周期</h2><p>每个 Vue 实例在创建时，都需要经过一系列初始化过程（<em>设置数据监听、编译模板、挂载实例到 DOM、在数据变化时更新 DOM</em>），并在同时运行一些钩子函数，让开发人员能够在特定生命周期内执行自己的代码。</p><p><img src="`+s+'" alt="组件的生命周期"></p><blockquote><p>不要在 Vue 实例的属性和回调上使用箭头函数，比如<code>created: () =&gt; console.log(this.a)</code>或<code>vm.$watch(&quot;a&quot;, newValue =&gt; this.myMethod())</code>。因为箭头函数的 this 与父级上下文绑定，并不指向 Vue 实例本身，所以前面代码中的<code>this.a</code>或<code>this.myMethod</code>将会是<code>undefined</code>。</p></blockquote><blockquote><p>通过 jQuery 对 DOM 进行的操作可以放置在<code>Mounted</code>属性上进行，即当 Vue 组件已经完成在 DOM 上挂载的时候。</p></blockquote><h2 id="数据绑定" tabindex="-1"><a class="header-anchor" href="#数据绑定" aria-hidden="true">#</a> 数据绑定</h2>',63),v={href:"http://mustache.github.io/",target:"_blank",rel:"noopener noreferrer"},h=n("code",null,'["mʌstæʃ]',-1),x=n("code",null,"v-once",-1),f=n("code",null,"v-html",-1),b=o(`<div class="language-text" data-ext="text"><pre class="language-text"><code>&lt;span&gt;Message: {{ result }}&lt;/span&gt;
&lt;span v-once&gt;一次性绑定: {{ msg }}&lt;/span&gt;
&lt;div v-html=&quot;rawHtml&quot;&gt;&lt;/div&gt;
</code></pre></div><p>Mustache 不能用于 HTML 属性，此时需要借助于<code>v-bind</code>指令。</p><div class="language-text" data-ext="text"><pre class="language-text"><code>&lt;div v-bind:id=&quot;dynamicId&quot;&gt;&lt;/div&gt;
&lt;button v-bind:disabled=&quot;isButtonDisabled&quot;&gt;Button&lt;/button&gt;
</code></pre></div><h3 id="绑定-html-的-class-和-style" tabindex="-1"><a class="header-anchor" href="#绑定-html-的-class-和-style" aria-hidden="true">#</a> 绑定 HTML 的 class 和 style</h3><p>直接操作<code>class</code>与<code>style</code>属性是前端开发当中的常见需求，Vue 通过<code>v-bind:class</code>和<code>v-bind:style</code>指令有针对性的对这两种操作进行了增强。</p><h4 id="v-bind-class" tabindex="-1"><a class="header-anchor" href="#v-bind-class" aria-hidden="true">#</a> v-bind:class</h4><p>绑定 HTML 的<code>class</code>属性。</p><div class="language-text" data-ext="text"><pre class="language-text"><code>&lt;!-- Vue对象中的data --&gt;
&lt;script&gt;
  ... ...
  data: {
    isActive: true,
    hasError: false,
    classObject: {
      active: true,
      &quot;text-danger&quot;: false
    }
  }
  ... ...
&lt;/script&gt;

&lt;!-- 直接绑定class到一个对象 --&gt;
&lt;div v-bind:class=&quot;classObject&quot;&gt;&lt;/div&gt;

&lt;!-- 直接绑定class到对象的属性 --&gt;
&lt;div class=&quot;static&quot; v-bind:class=&quot;{ active: isActive, &quot;text-danger&quot;: hasError }&quot;&gt;&lt;/div&gt;

&lt;!-- 渲染结果 --&gt;
&lt;div class=&quot;static active&quot;&gt;&lt;/div&gt;
</code></pre></div><p>可以传递一个数组给<code>v-bind:class</code>从而同时设置多个 class 属性。</p><div class="language-text" data-ext="text"><pre class="language-text"><code>&lt;!-- Vue对象中的data --&gt;
&lt;script&gt;
  ... ...
  data: {
    activeClass: &quot;active&quot;,
    errorClass: &quot;text-danger&quot;
  }
  ... ...
&lt;/script&gt;

&lt;!-- 绑定class到计算属性 --&gt;
&lt;div v-bind:class=&quot;[activeClass, errorClass]&quot;&gt;&lt;/div&gt;

&lt;!-- 渲染结果 --&gt;
&lt;div class=&quot;active text-danger&quot;&gt;&lt;/div&gt;

&lt;!-- 使用三目运算符，始终添加errorClass，只在isActive为true时添加activeClass --&gt;
&lt;div v-bind:class=&quot;[isActive ? activeClass : &quot;&quot;, errorClass]&quot;&gt;&lt;/div&gt;

&lt;!-- 在数组中使用对象可以避免三目运算符的繁琐 --&gt;
&lt;div v-bind:class=&quot;[{ active: isActive }, errorClass]&quot;&gt;&lt;/div&gt;
</code></pre></div><p>当在自定义组件上使用<code>class</code>属性时，这些属性将会被添加到该组件的根元素上面，这一特性同样适用于<code>v-bind:class</code>。</p><div class="language-text" data-ext="text"><pre class="language-text"><code>&lt;!-- 声明一个组件 --&gt;
&lt;script&gt;
  Vue.component(&quot;my-component&quot;, {
    template: &quot;&lt;p class=&quot;foo bar&quot;&gt;Hi&lt;/p&gt;&quot;,
    data: {
      isActive: true
    },
  })
&lt;/script&gt;

&lt;!-- 添加2个class属性 --&gt;
&lt;my-component class=&quot;baz boo&quot;&gt;&lt;/my-component&gt;

&lt;!-- 渲染结果 --&gt;
&lt;p class=&quot;foo bar baz boo&quot;&gt;Hi&lt;/p&gt;

&lt;!-- 使用v-bind:class --&gt;
&lt;my-component v-bind:class=&quot;{ active: isActive }&quot;&gt;&lt;/my-component&gt;

&lt;!-- 渲染结果 --&gt;
&lt;p class=&quot;foo bar active&quot;&gt;Hi&lt;/p&gt;
</code></pre></div><h4 id="v-bind-style" tabindex="-1"><a class="header-anchor" href="#v-bind-style" aria-hidden="true">#</a> v-bind:style</h4><p>绑定 HTML 的<code>style</code>属性。</p><div class="language-text" data-ext="text"><pre class="language-text"><code>&lt;script&gt;
  ... ...
  data: {
    styleObject: {
      color: &quot;red&quot;,
      fontSize: &quot;13px&quot;
    },
    styleHeight: {
      height: 10rem;
    }
    styleWidth: {
      width: 20rem;
    }
  }
  ... ...
&lt;/script&gt;

&lt;div v-bind:style=&quot;styleObject&quot;&gt;&lt;/div&gt;

&lt;!-- 使用数组可以将多个样式合并到一个HTML元素上面 --&gt;
&lt;div v-bind:style=&quot;[styleHeight, styleWidth]&quot;&gt;&lt;/div&gt;
</code></pre></div><p>使用<code>v-bind:style</code>时 Vue 会自动添加<em>prefix 前缀</em>，常见的 prefix 前缀如下：</p><ul><li><code>-webkit-</code> Chrome、Safari、新版 Opera、所有 iOS 浏览器(包括 iOS 版 Firefox)，几乎所有 WebKit 内核浏览器。</li><li><code>-moz-</code> 针对 Firefox 浏览器。</li><li><code>-o-</code> 未使用 WebKit 内核的老版本 Opera。</li><li><code>-ms-</code> 微软的 IE 以及 Edge 浏览器。</li></ul><h3 id="使用-javascript-表达式" tabindex="-1"><a class="header-anchor" href="#使用-javascript-表达式" aria-hidden="true">#</a> 使用 JavaScript 表达式</h3><p>Vue 对于所有数据绑定都提供了 JavaScript 表达式支持，但是每个绑定只能使用<strong>1</strong>个表达式。</p><div class="language-text" data-ext="text"><pre class="language-text"><code>&lt;span&gt;{{ number + 1 }}&lt;/span&gt;
&lt;button&gt;{{ ok ? &quot;YES&quot; : &quot;NO&quot; }}&lt;/button&gt;
&lt;p&gt;{{ message.split(&quot;&quot;).reverse().join(&quot;&quot;) }}&lt;/p&gt;
&lt;div v-bind:id=&quot;&quot;list-&quot; + id&quot;&gt;&lt;/div&gt;

&lt;!-- 这是语句，不是表达式 --&gt;
{{ var a = 1 }}

&lt;!-- if流程控制属于多个表达式，因此不会生效，但可以使用三元表达式 --&gt;
{{ if (ok) { return message } }}
</code></pre></div><h3 id="v-model-双向数据绑定" tabindex="-1"><a class="header-anchor" href="#v-model-双向数据绑定" aria-hidden="true">#</a> v-model 双向数据绑定</h3><p><code>v-model</code>指令实质上是<code>v-on</code>和<code>v-bind</code>的糖衣语法，该指令会接收一个<code>value属性</code>，存在新值时则触发一个<code>input事件</code>。</p><div class="language-text" data-ext="text"><pre class="language-text"><code>&lt;!-- 使用v-model的版本 --&gt;
&lt;input v-model=&quot;something&quot; /&gt;
&lt;!-- 使用v-on和v-bind的版本 --&gt;
&lt;input v-bind:value=&quot;something&quot; v-on:input=&quot;something = $event.target.value&quot; /&gt;
&lt;!-- 也可以自定义输入域的响应式绑定 --&gt;
&lt;custom-input v-bind:value=&quot;something&quot; v-on:input=&quot;something = arguments[0]&quot;&gt;
&lt;/custom-input&gt;
</code></pre></div><blockquote><p>单选框、复选框一类的输入域将 value 属性作为了其它用途，因此可以通过组件的<code>model</code>选项来避免冲突：</p></blockquote><h2 id="内置指令" tabindex="-1"><a class="header-anchor" href="#内置指令" aria-hidden="true">#</a> 内置指令</h2><p>带有<code>v-</code>前缀，当表达式值发生变化时，会响应式的将影响作用于 DOM。指令可以接收后面以<code>:</code>表示的<strong>参数</strong>（<em>被指令内部的 arg 属性接收</em>），或者以<code>.</code>开头的<strong>修饰符</strong>（<em>指定该指令以特殊方式绑定</em>）。</p><div class="language-text" data-ext="text"><pre class="language-text"><code>&lt;p v-if=&quot;seen&quot;&gt;Hello world!&lt;/p&gt;

&lt;!-- 绑定事件 --&gt;
&lt;a v-bind:href=&quot;url&quot;&gt;&lt;/a&gt;

&lt;!-- 绑定属性 --&gt;
&lt;a v-on:click=&quot;doSomething&quot;&gt;
  &lt;!-- .prevent修饰符会告诉v-on指令对于触发的事件调用event.preventDefault() --&gt;
  &lt;form v-on:submit.prevent=&quot;onSubmit&quot;&gt;&lt;/form
&gt;&lt;/a&gt;
</code></pre></div><p>Vue 为<code>v-bind</code>和<code>v-on</code>这两个常用的指令提供了简写形式<code>:</code>和<code>@</code>。</p><div class="language-text" data-ext="text"><pre class="language-text"><code>&lt;!-- v-bind --&gt;
&lt;a v-bind:href=&quot;url&quot;&gt;&lt;/a&gt;
&lt;a :href=&quot;url&quot;&gt;&lt;/a&gt;

&lt;!-- v-on --&gt;
&lt;a v-on:click=&quot;doSomething&quot;&gt;&lt;/a&gt;
&lt;a @click=&quot;doSomething&quot;&gt;&lt;/a&gt;
</code></pre></div><p>目前，Vue 在<em>2.4.2</em>版本当中提供了如下的内置指令：</p><div class="language-text" data-ext="text"><pre class="language-text"><code>&lt;html
  v-text = &quot;更新元素的textContent&quot;
  v-html = &quot;更新元素的innerHTML&quot;
  v-show = &quot;根据表达式的true/false，切换HTML元素的display属性&quot;
  v-for = &quot;遍历内部的HTML元素&quot;
  v-pre = &quot;跳过表达式渲染过程，可以显示原始的Mustache标签&quot;
  v-cloak = &quot;保持在HTML元素上直到关联实例结束编译，可以隐藏未编译的Mustache&quot;
  v-once = &quot;只渲染元素和组件一次&quot;
&gt;&lt;/html&gt;

&lt;!-- 根据表达式的true和false来决定是否渲染元素 --&gt;
&lt;div v-if=&quot;type === &quot;A&quot;&quot;&gt;A&lt;/div&gt;
&lt;div v-else-if=&quot;type === &quot;B&quot;&quot;&gt;B&lt;/div&gt;
&lt;div v-else-if=&quot;type === &quot;C&quot;&quot;&gt;C&lt;/div&gt;
&lt;div v-else&gt;Not A/B/C&lt;/div&gt;

&lt;!-- 动态地绑定属性或prop到表达式 --&gt;
&lt;p v-bind:attrOrProp
  .prop = &quot;被用于绑定DOM属性&quot;
  .camel = &quot;将kebab-case特性名转换为camelCase&quot;
  .sync = &quot;语法糖，会扩展成一个更新父组件绑定值的v-on监听器&quot;
&gt;&lt;/p&gt;

&lt;!-- 绑定事件监听器 --&gt;
&lt;button
  v-on:eventName
  .stop = &quot;调用event.stopPropagation()&quot;
  .prevent = &quot;调用event.preventDefault()&quot;
  .capture = &quot;添加事件监听器时使用capture模式&quot;
  .self = &quot;当事件是从监听器绑定的元素本身触发时才触发回调&quot;
  .native = &quot;监听组件根元素的原生事件&quot;-
  .once = &quot;只触发一次回调&quot;
  .left = &quot;点击鼠标左键触发&quot;
  .right = &quot;点击鼠标右键触发&quot;
  .middle = &quot;点击鼠标中键触发&quot;
  .passive = &quot;以{passive: true}模式添加监听器&quot;
  .{keyCode | keyAlias} = &quot;触发特定键触事件&quot;
&gt;
&lt;/button&gt;

&lt;!-- 表单控件的响应式绑定 --&gt;
&lt;input
  v-model
  .lazy = &quot;取代input监听change事件&quot;
  .number = &quot;输入字符串转为数字&quot;
  .trim = &quot;过滤输入的首尾空格&quot; /&gt;
</code></pre></div><h2 id="组件" tabindex="-1"><a class="header-anchor" href="#组件" aria-hidden="true">#</a> 组件</h2><p>组件可以扩展 HTML 元素功能，并且封装可重用代码。可以通过<code>Vue.component( id, [definition] )</code>注册或者获取全局组件。</p><div class="language-text" data-ext="text"><pre class="language-text"><code>// 注册组件，传入一个扩展过的构造器
Vue.component(&quot;my-component&quot;, Vue.extend({ ... }))

// 注册组件，传入一个option对象（会自动调用Vue.extend）
Vue.component(&quot;my-component&quot;, { ... })

// 获取注册的组件(始终返回构造器)
var MyComponent = Vue.component(&quot;my-component&quot;)
</code></pre></div><p>下面代码创建了一个 Vue 实例，并将自定义组件<code>my-component</code>挂载至 HTML 当中。</p><div class="language-text" data-ext="text"><pre class="language-text"><code>&lt;script&gt;
  // 注册自定义组件
  Vue.component(&quot;my-component&quot;, {
    template: &quot;&lt;div&gt;A custom component!&lt;/div&gt;&quot;
  });

  // 创建Vue根实例
  new Vue({
    el: &quot;#example&quot;
  });
&lt;/script&gt;

&lt;!-- 原始模板 --&gt;
&lt;div id=&quot;example&quot;&gt;
  &lt;my-component&gt;&lt;/my-component&gt;
&lt;/div&gt;

&lt;!-- 渲染结果 --&gt;
&lt;div id=&quot;example&quot;&gt;
  &lt;div&gt;A custom component!&lt;/div&gt;
&lt;/div&gt;
</code></pre></div><ul><li>is 属性</li></ul><p>浏览器解析完 HTML 之后才会渲染 Vue 表达式，但是诸如<code>&lt;ul&gt; &lt;ol&gt; &lt;table&gt; &lt;select&gt;</code>限制了可以被包裹的 HTML 元素，而<code>&lt;option&gt;</code>只能出现在某些 HTML 元素内部，造成 Vue 表达式可能不会被正确的渲染。因此，Vue 提供<code>is</code>作为属性别名来解决该问题。</p><div class="language-text" data-ext="text"><pre class="language-text"><code>&lt;!-- 不正确的方式 --&gt;
&lt;table&gt;
  &lt;my-row&gt;...&lt;/my-row&gt;
&lt;/table&gt;

&lt;!-- 使用is的正确方式 --&gt;
&lt;table&gt;
  &lt;tr is=&quot;my-row&quot;&gt;&lt;/tr&gt;
&lt;/table&gt;
</code></pre></div><ul><li>data 必须是函数</li></ul><p><code>Vue.component()</code>传入的 data 属性不能是对象，而必须是函数。这样做的目的是避免组件在相同模板的多个位置被复用时，仅仅返回对象会造成组件间的数据被相互污染，而通过函数每次都返回全新的 data 对象能完美的规避这个问题。</p><div class="language-text" data-ext="text"><pre class="language-text"><code>Vue.component(&quot;simple-counter&quot;, {
  template: &quot;&lt;button v-on:click=&quot;counter += 1&quot;&gt;{{ counter }}&lt;/button&gt;&quot;,
  data: function () {
    return {
      a: &quot;&quot;,
      b: &quot;&quot;
    }
  }
});
</code></pre></div><ul><li>父子组件之间的通信</li></ul><p>父组件通过<code>props</code>向下传递数据给子组件，子组件通过<code>events</code>给父组件发送消息，即<strong>props down, events up</strong>。</p><h3 id="props" tabindex="-1"><a class="header-anchor" href="#props" aria-hidden="true">#</a> props</h3><p>虽然每个组件的作用域都是独立的，但是可以通过<code>props属性</code>向子组件传递数据，这是一种<strong>单向数据流</strong>的体现形式。</p><div class="language-text" data-ext="text"><pre class="language-text"><code>Vue.component(&quot;child&quot;, {
  // 声明props
  props: [&quot;message&quot;],
  // 和data属性一样，prop也可以在vm通过this.message进行引用
  template: &quot;&lt;span&gt;{{ message }}&lt;/span&gt;&quot;
});
</code></pre></div><blockquote><p>不要在子组件内部修改 props，这样会导致后台报错。</p></blockquote><h4 id="命名方式转换" tabindex="-1"><a class="header-anchor" href="#命名方式转换" aria-hidden="true">#</a> 命名方式转换</h4><p>因为 HTML 并不区分大小写，所以 kebab-case(<em>驼峰</em>)风格命名的 props，在组件中会以 camelCased(<em>短横线隔开</em>)风格被接收。</p><div class="language-text" data-ext="text"><pre class="language-text"><code>&lt;!-- camelCase in JavaScript --&gt;
&lt;script&gt;
Vue.component(&quot;child&quot;, {
  props: [&quot;myMessage&quot;],
  template: &quot;&lt;span&gt;{{ myMessage }}&lt;/span&gt;&quot;
})
&lt;script&gt;

&lt;!-- kebab-case in HTML --&gt;
&lt;child my-message=&quot;hello!&quot;&gt;&lt;/child&gt;
</code></pre></div><h4 id="动态-props" tabindex="-1"><a class="header-anchor" href="#动态-props" aria-hidden="true">#</a> 动态 props</h4><p>可以通过<code>v-bind</code>指令，响应式的绑定父组件数据到子组件的 props。当父组件数据变化时，该变化也会传导至子组件。</p><div class="language-text" data-ext="text"><pre class="language-text"><code>&lt;div&gt;
  &lt;input v-model=&quot;parentMsg&quot; /&gt;
  &lt;br /&gt;
  &lt;child v-bind:my-message=&quot;parentMsg&quot;&gt;&lt;/child&gt;
&lt;/div&gt;
</code></pre></div><p>使用<code>v-bind</code>可以让其参数值能够以 JavaScript 表达式的方式被解析，否则所有传入的 props 都会被子组件认为是字符串类型。</p><div class="language-text" data-ext="text"><pre class="language-text"><code>&lt;!-- 传递的是字符串&quot;1&quot; --&gt;
&lt;comp some-prop=&quot;1&quot;&gt;&lt;/comp&gt;
&lt;!-- 传递实际的 number --&gt;
&lt;comp v-bind:some-prop=&quot;1&quot;&gt;&lt;/comp&gt;
</code></pre></div><h4 id="验证-props" tabindex="-1"><a class="header-anchor" href="#验证-props" aria-hidden="true">#</a> 验证 props</h4><p>可以为组件的 props 指定验证规则，如果传入数据不符合要求，Vue 会发出相应警告，这样可以有效提高组件的健壮性。</p><div class="language-text" data-ext="text"><pre class="language-text"><code>Vue.component(&quot;example&quot;, {
  props: {
    // 基础类型检测
    propA: Number,
    // 多种类型
    propB: [String, Number],
    // 必传且是字符串
    propC: {
      type: String,
      required: true
    },
    // 数字，有默认值
    propD: {
      type: Number,
      default: 100
    },
    // 数组或对象的默认值由1个工厂函数返回
    propE: {
      type: Object,
      default: function() {
        return { message: &quot;hello&quot; };
      }
    },
    // 自定义验证函数
    propF: {
      validator: function(value) {
        return value &gt; 10;
      }
    }
  }
});
</code></pre></div><blockquote><p><code>props</code>会在组件实例创建之前进行校验。</p></blockquote><h4 id="组件的非-props-属性" tabindex="-1"><a class="header-anchor" href="#组件的非-props-属性" aria-hidden="true">#</a> 组件的非 props 属性</h4><p>组件可以接收任意传入的属性，这些属性都会被添加到组件 HTML 模板的根元素上（<em>无论有没有在 props 中定义</em>）。</p><div class="language-text" data-ext="text"><pre class="language-text"><code>&lt;!-- 带有属性的自定义组件 --&gt;
&lt;bs-date-input data-3d-date-picker=&quot;true&quot; class=&quot;date-picker-theme-dark&quot;&gt;
&lt;/bs-date-input&gt;

&lt;!-- 渲染出来的组件，class属性被合并 --&gt;
&lt;input
  type=&quot;date&quot;
  data-3d-date-picker=&quot;true&quot;
  class=&quot;form-control date-picker-theme-dark&quot;
/&gt;
</code></pre></div><blockquote><p>父组件传递给子组件的属性可能会覆盖子组件本身的属性，因而会对子组件造成破坏和污染。</p></blockquote><h3 id="事件" tabindex="-1"><a class="header-anchor" href="#事件" aria-hidden="true">#</a> 事件</h3><p>子组件可以通过 Vue 的自定义事件与父组件进行通信。</p><p>每个 Vue 实例都实现了如下 API，但是并不能直接通过$on 监听子组件冒泡的事件，而必须使用 v-on 指令。</p><ol><li><code>$on(eventName)</code> 监听事件</li><li><code>$emit(eventName)</code> 触发事件</li></ol><blockquote><p><code>$on</code>和<code>$emit</code>并不是<code>addEventListener</code>和<code>dispatchEvent</code>的别名。</p></blockquote><div class="language-text" data-ext="text"><pre class="language-text"><code>&lt;div id=&quot;counter-event-example&quot;&gt;
  &lt;p&gt;{{ total }}&lt;/p&gt;
  &lt;button-counter v-on:increment=&quot;incrementTotal&quot;&gt;&lt;/button-counter&gt;
  &lt;button-counter v-on:increment=&quot;incrementTotal&quot;&gt;&lt;/button-counter&gt;
&lt;/div&gt;

&lt;script&gt;
  Vue.component(&quot;button-counter&quot;, {
    template: &quot;&lt;button v-on:click=&quot;incrementCounter&quot;&gt;{{ counter }}&lt;/button&gt;&quot;,
    data: function () {
      return {
        counter: 0
      }
    },
    methods: {
      // 子组件事件
      incrementCounter: function () {
        this.counter += 1
        this.$emit(&quot;increment&quot;) //向父组件冒泡事件
      }
    },
  })

  new Vue({
    el: &quot;#counter-event-example&quot;,
    data: {
      total: 0
    },
    methods: {
      // 父组件事件
      incrementTotal: function () {
        this.total += 1
      }
    }
  })
&lt;/script&gt;
</code></pre></div><ul><li><code>.native</code>修饰符</li></ul><p>开发人员也可以在组件的根元素上监听原生事件，这个时候需要借助到<code>.native</code>修饰符。</p><div class="language-text" data-ext="text"><pre class="language-text"><code>&lt;my-component v-on:click.native=&quot;doTheThing&quot;&gt;&lt;/my-component&gt;
</code></pre></div><ul><li><code>.sync</code>修饰符</li></ul><p>Vue 中的<code>props</code>本质是不能进行响应式绑定的，以防止破坏单向数据流，造成多个子组件对父组件状态形成污染。但是生产环境下，<code>props</code>响应式绑定的需求是切实存在的。因此，Vue 将<code>.sync</code>修饰符封装为糖衣语法，父组件在子组件的 props 使用该修饰符后，父组件会为 props 自动绑定<code>v-on</code>事件，子组件则在监听到 props 变化时向父组件<code>$emit</code>更新事件，从而让父组件的<code>props</code>能够与子组件进行同步。</p><div class="language-text" data-ext="text"><pre class="language-text"><code>&lt;!-- 使用.sync修饰符 --&gt;
&lt;comp :foo.sync=&quot;bar&quot;&gt;&lt;/comp&gt;

&lt;!-- 被自动扩展为如下形式，该组件的子组件会通过this.$emit(&quot;update:foo&quot;, newValue)显式触发更新事件 --&gt;
&lt;comp :foo=&quot;bar&quot; @update:foo=&quot;val =&gt; bar = val&quot;&gt;&lt;/comp&gt;
</code></pre></div><ul><li>平行组件通信</li></ul><p>非父子关系的组件进行通信时，可以使用一个<strong>空</strong>的 Vue 实例作为<strong>中央事件总线</strong>。</p><div class="language-text" data-ext="text"><pre class="language-text"><code>var bus = new Vue()
// 触发组件A中的事件
bus.$emit(&quot;id-selected&quot;, 1)
// 在组件B监听事件
bus.$on(&quot;id-selected&quot;, function (id) {
  ... ... ...
})
</code></pre></div><blockquote><p>更好的方式是借助 VueX 或者 Redux 之类的 flux 状态管理库。</p></blockquote><h3 id="slot" tabindex="-1"><a class="header-anchor" href="#slot" aria-hidden="true">#</a> slot</h3><p>可以将父组件的内容混入到子组件的模板当中，此时可以在子组件中使用<code>&lt;slot&gt;</code>作为父组件内容的插槽。</p><blockquote><p>父组件模板的内容在父组件作用域内编译，子组件模板的内容在子组件作用域内编译。</p></blockquote><h4 id="匿名插槽" tabindex="-1"><a class="header-anchor" href="#匿名插槽" aria-hidden="true">#</a> 匿名插槽</h4><p>当子组件只有一个没有属性的<code>&lt;slot&gt;</code>时，父组件全部内容片段将插入到插槽所在的 DOM 位置，并替换插槽标签本身。</p><div class="language-text" data-ext="text"><pre class="language-text"><code>&lt;!-- 子组件my-component的模板 --&gt;
&lt;div&gt;
  &lt;h2&gt;Child&lt;/h2&gt;
  &lt;slot&gt;
    父组件没有需要插入的内容时显示
  &lt;/slot&gt;
&lt;/div&gt;

&lt;!-- 父组件模板中使用my-component --&gt;
&lt;div&gt;
  &lt;h1&gt;Parent&lt;/h1&gt;
  &lt;child&gt;
    &lt;p&gt;Content 1&lt;/p&gt;
    &lt;p&gt;Content 2&lt;/p&gt;
  &lt;/child&gt;
&lt;/div&gt;

&lt;!-- 渲染结果 --&gt;
&lt;div&gt;
  &lt;h1&gt;Parent&lt;/h1&gt;
  &lt;div&gt;
    &lt;h2&gt;Child&lt;/h2&gt;
    &lt;p&gt;Content 1&lt;/p&gt;
    &lt;p&gt;Content 2&lt;/p&gt;
  &lt;/div&gt;
&lt;/div&gt;
</code></pre></div><blockquote><p><code>&lt;slot&gt;</code>标签中的内容会在子组件作用域内编译，并在父组件没有需要插入的内容时才会显示。</p></blockquote><h4 id="具名插槽" tabindex="-1"><a class="header-anchor" href="#具名插槽" aria-hidden="true">#</a> 具名插槽</h4><p>可以通过<code>&lt;slot&gt;</code>元素的<code>name</code>属性来配置如何分发内容。</p><div class="language-text" data-ext="text"><pre class="language-text"><code>&lt;!-- 子组件 --&gt;
&lt;div id=&quot;app&quot;&gt;
  &lt;header&gt;
    &lt;slot name=&quot;header&quot;&gt;&lt;/slot&gt;
  &lt;/header&gt;
  &lt;main&gt;
    &lt;slot&gt;&lt;/slot&gt;
  &lt;/main&gt;
  &lt;footer&gt;
    &lt;slot name=&quot;footer&quot;&gt;&lt;/slot&gt;
  &lt;/footer&gt;
&lt;/div&gt;

&lt;!-- 父组件 --&gt;
&lt;app&gt;
  &lt;div slot=&quot;header&quot;&gt;Header&lt;/div&gt;
  &lt;p&gt;Content 1&lt;/p&gt;
  &lt;p&gt;Content 2&lt;/p&gt;
  &lt;div slot=&quot;footer&quot;&gt;Footer&lt;/div&gt;
&lt;/app&gt;

&lt;!-- 渲染结果 --&gt;
&lt;div id=&quot;app&quot;&gt;
  &lt;header&gt;
    &lt;div&gt;Header&lt;/div&gt;
  &lt;/header&gt;
  &lt;main&gt;
    &lt;p&gt;Content 1&lt;/p&gt;
    &lt;p&gt;Content 2&lt;/p&gt;
  &lt;/main&gt;
  &lt;footer&gt;
    &lt;p&gt;Footer&lt;/p&gt;
  &lt;/footer&gt;
&lt;/div&gt;
</code></pre></div><blockquote><p>匿名 slot 会作为没有匹配内容的父组件片段的插槽。</p></blockquote><h4 id="作用域插槽" tabindex="-1"><a class="header-anchor" href="#作用域插槽" aria-hidden="true">#</a> 作用域插槽</h4><p>子组件通过<code>props</code>传递数据给<code>&lt;slot&gt;</code>插槽，父组件使用带有<code>scope</code>属性的<code>&lt;template&gt;</code>来表示表示当前作用域插槽的模板，<code>scope</code>值对应的变量会接收子组件传递来的 props 对象。</p><div class="language-text" data-ext="text"><pre class="language-text"><code>&lt;!-- 子组件通过props传递数据给插槽 --&gt;
&lt;div class=&quot;child&quot;&gt;
  &lt;slot text=&quot;hello from child&quot;&gt;&lt;/slot&gt;
&lt;/div&gt;

&lt;!-- 父组件使用带有scope属性的&lt;template&gt; --&gt;
&lt;div class=&quot;parent&quot;&gt;
  &lt;child&gt;
    &lt;template scope=&quot;props&quot;&gt;
      &lt;span&gt;hello from parent&lt;/span&gt;
      &lt;span&gt;{{ props.text }}&lt;/span&gt;
    &lt;/template&gt;
  &lt;/child&gt;
&lt;/div&gt;

&lt;!-- 渲染结果 --&gt;
&lt;div class=&quot;parent&quot;&gt;
  &lt;div class=&quot;child&quot;&gt;
    &lt;span&gt;hello from parent&lt;/span&gt;
    &lt;span&gt;hello from child&lt;/span&gt;
  &lt;/div&gt;
&lt;/div&gt;
</code></pre></div><h3 id="函数化组件" tabindex="-1"><a class="header-anchor" href="#函数化组件" aria-hidden="true">#</a> 函数化组件</h3><p>即无状态（<em>没有 data</em>）无实例（<em>没有 this 上下文</em>）的组件，渲染开销较小，且不会出现在<code>Vue devtools</code>当中。</p><div class="language-text" data-ext="text"><pre class="language-text"><code>Vue.component(&quot;my-component&quot;, {
  functional: true,
  // 通过提供context参数为没有实例的函数组件提供上下文信息
  render: function(createElement, context) {},
  // Props可选
  props: {}
});
</code></pre></div><h3 id="动态组件" tabindex="-1"><a class="header-anchor" href="#动态组件" aria-hidden="true">#</a> 动态组件</h3><p>使用<code>&lt;component&gt;</code>元素并动态绑定其<code>is</code>属性，可以让多个组件使用相同的 Vue 对象挂载点，并实现动态切换。</p><div class="language-text" data-ext="text"><pre class="language-text"><code>&lt;script&gt;
  var vm = new Vue({
    el: &quot;#example&quot;,
    data: {
      currentView: &quot;home&quot;
    },
    components: {
      home: {
        /* ... */
      },
      posts: {
        /* ... */
      },
      archive: {
        /* ... */
      }
    }
  });
&lt;/script&gt;

&lt;component v-bind:is=&quot;currentView&quot;&gt;
  &lt;!-- 组件在vm.currentview变化时改变！ --&gt;
&lt;/component&gt;
</code></pre></div><p>如果需要将切换的组件保持在内存，保留其状态并且避免重新渲染，可以使用 Vue 内置的<code>keep-alive</code>指令。</p><div class="language-text" data-ext="text"><pre class="language-text"><code>&lt;keep-alive&gt;
  &lt;component :is=&quot;currentView&quot;&gt;
    &lt;!-- 非活动组件将被缓存！ --&gt;
  &lt;/component&gt;
&lt;/keep-alive&gt;
</code></pre></div><h3 id="组件异步加载" tabindex="-1"><a class="header-anchor" href="#组件异步加载" aria-hidden="true">#</a> 组件异步加载</h3><p>Vue 允许将组件定义为工厂函数，从而异步的解析组件定义。Vue 只会在组件渲染时才触发工厂函数，并将结果缓存起来用于后续渲染。定义组件的工厂函数将会接收 resolve（<em>接收到从服务器下载的 Vue 组件 options 时被调用</em>）和 reject（<em>当远程 Vue 组件 options 加载失败时调用</em>）回调函数作为参数。</p><div class="language-text" data-ext="text"><pre class="language-text"><code>Vue.component(&quot;async-example&quot;, function(resolve, reject) {
  setTimeout(function() {
    // 将组件定义传递到resolve回调函数当中
    resolve({
      template: &quot;&lt;div&gt;I am async!&lt;/div&gt;&quot;
    });
  }, 1000);
});
</code></pre></div><p>可以结合 Webpack 提供的<strong>代码切割</strong>功能，将 Vue 组件的 options 对象提取到单独 JavaScript 文件，从而实现异步的按需加载。</p><div class="language-text" data-ext="text"><pre class="language-text"><code>// 使用webpack的require()来进行异步代码块切割
Vue.component(&quot;async-webpack-example&quot;, function(resolve) {
  require([&quot;./my-async-component&quot;], resolve);
});

// 使用webpack的import()来进行异步代码块切割
Vue.component(&quot;async-webpack-example&quot;, () =&gt; import(&quot;./my-async-component&quot;));
</code></pre></div><p>从 Vue 2.3.0 版本开始，可以通过下面的方式来定义一个异步组件。</p><div class="language-text" data-ext="text"><pre class="language-text"><code>const AsyncWebpackExample = () =&gt; ({
  component: import(&quot;./MyComp.vue&quot;), // 需要加载的组件
  loading: LoadingComp, // loading时渲染的组件
  error: ErrorComp, // 出错时渲染的组件
  delay: 200, // 渲染loading组件前的等待时间（默认：200ms）
  timeout: 3000 // 最长等待时间，超出则渲染error组件（默认：Infinity）
});
</code></pre></div><blockquote><p>在路由组件上使用这种写法，需要使用 vue-router 的 2.4.0 以上版本。</p></blockquote><h3 id="组件的循环引用" tabindex="-1"><a class="header-anchor" href="#组件的循环引用" aria-hidden="true">#</a> 组件的循环引用</h3><p>循环引用，即两个组件互相引用对方，例如下面代码中<code>tree-folder</code>、<code>tree-folder-contents</code>两个组件同时成为了对方的父或子节点，如果使用 Webpack 模块化管理工具<code>requiring</code>/<code>importing</code>组件的时候，会报出<code>Failed to mount component: template or render function not defined.</code>错误。</p><div class="language-text" data-ext="text"><pre class="language-text"><code>&lt;template&gt;
  &lt;p&gt;
    &lt;span&gt;{{ folder.name }}&lt;/span&gt;
    &lt;tree-folder-contents :children=&quot;folder.children&quot; /&gt;
  &lt;/p&gt;
&lt;/template&gt;

&lt;template&gt;
  &lt;ul&gt;
    &lt;li v-for=&quot;child in children&quot;&gt;
      &lt;tree-folder v-if=&quot;child.children&quot; :folder=&quot;child&quot; /&gt;
      &lt;span v-else&gt;{{ child.name }}&lt;/span&gt;
    &lt;/li&gt;
  &lt;/ul&gt;
&lt;/template&gt;
</code></pre></div><p>因为<code>tree-folder</code>、<code>tree-folder-contents</code>相互引用对方之后，无法确定组件加载的先后顺序陷入死循环，所以需要事先指明 webpack 组件加载的优先级。解决上面例子中 Vue 组件循环引用的问题，可以在<code>tree-folder</code>组件的<code>beforeCreate()</code>生命周期函数内注册引发问题的<code>tree-folder-contents</code>组件。</p><div class="language-text" data-ext="text"><pre class="language-text"><code>beforeCreate: function () {
  this.$options.components.TreeFolderContents = require(&quot;./tree-folder-contents.vue&quot;).default
}
</code></pre></div><h3 id="组件命名约定" tabindex="-1"><a class="header-anchor" href="#组件命名约定" aria-hidden="true">#</a> 组件命名约定</h3><p>JavaScript 中命名组件组件时可以使用<code>kebab-case</code>、<code>camelCase</code>、<code>PascalCase</code>，但 HTML 模板中只能使用<code>kebab-case</code>格式。</p><div class="language-text" data-ext="text"><pre class="language-text"><code>&lt;kebab-cased-component&gt;&lt;/kebab-cased-component&gt;
&lt;camel-cased-component&gt;&lt;/camel-cased-component&gt;
&lt;pascal-cased-component&gt;&lt;/pascal-cased-component&gt;
&lt;!-- 也可以通过自关闭方式使用组件 --&gt;
&lt;kebab-cased-component /&gt;

&lt;script&gt;
  components: {
    &quot;kebab-cased-component&quot;: {},
    &quot;camelCasedComponent&quot;: {},
    &quot;PascalCasedComponent&quot;: {}
  }
&lt;/script&gt;
</code></pre></div><blockquote><p>推荐 JavaScript 中通过<code>PascalCase</code>方式声明组件， HTML 中则通过<code>kebab-case</code>方式使用组件。</p></blockquote><h3 id="组件递归" tabindex="-1"><a class="header-anchor" href="#组件递归" aria-hidden="true">#</a> 组件递归</h3><p>当局部注册的 Vue 组件递归调用自身时，需要在创建组件时添加<code>name</code>选项，全局注册的组件则可以省略该属性，因为 Vue 会自动进行添加。</p><div class="language-text" data-ext="text"><pre class="language-text"><code>// 局部注册
new Vue({
  el: &quot;#my-component&quot;,
  name: &quot;my-component&quot;,
  template: &quot;&lt;div&gt;&lt;my-component&gt;&lt;/my-component&gt;&lt;/div&gt;&quot;
});

// 全局注册
Vue.component(&quot;my-component&quot;, {
  // name: &quot;my-component&quot;, 可以省略name属性
  template: &quot;&lt;div&gt;&lt;my-component&gt;&lt;/my-component&gt;&lt;/div&gt;&quot;
});
</code></pre></div><blockquote><p>组件递归出现死循环时，会提示<code>max stack size exceeded</code>错误，所以需要确保递归操作都拥有一个终止条件（<em>比如使用 v-if 并返回 false</em>）。</p></blockquote><h3 id="组件模板" tabindex="-1"><a class="header-anchor" href="#组件模板" aria-hidden="true">#</a> 组件模板</h3><ul><li>可以在 Vue 组件上使用<code>inline-template</code>属性，组件会将内嵌的 HTML 内容作为组件本身的模板进行渲染，而非将其作为<code>slot</code>分发的内容。</li></ul><div class="language-text" data-ext="text"><pre class="language-text"><code>&lt;my-component inline-template&gt;
  &lt;div&gt;
    &lt;p&gt;These are compiled as the component&quot;s own template.&lt;/p&gt;
    &lt;p&gt;Not parent&quot;s transclusion content.&lt;/p&gt;
  &lt;/div&gt;
&lt;/my-component&gt;
</code></pre></div><ul><li>也可以通过在<code>&lt;script&gt;</code>标签内使用<code>type=&quot;text/x-template&quot;</code>和<code>id</code>属性来定义一个内嵌模板。</li></ul><div class="language-text" data-ext="text"><pre class="language-text"><code>&lt;script type=&quot;text/x-template&quot; id=&quot;hello-world-template&quot;&gt;
  &lt;p&gt;Hello hello hello&lt;/p&gt;
&lt;/script&gt;

&lt;script&gt;
  Vue.component(&quot;hello-world&quot;, {
    template: &quot;#hello-world-template&quot;
  });
&lt;/script&gt;
</code></pre></div><h2 id="vuex-状态管理" tabindex="-1"><a class="header-anchor" href="#vuex-状态管理" aria-hidden="true">#</a> Vuex 状态管理</h2><p>Vuex 是专门为 Vue 应用程序提供的状态管理模式，每个 Vuex 应用的核心是<code>store</code>（<em>仓库</em>），即装载应用程序<code>state</code>（<em>状态</em>）的容器，每个应用通常只拥有一个<code>store</code>实例。</p><p><img src="`+p+`" alt="Vuex执行流程"></p><p>Vuex 的<code>state</code>是响应式的，即<code>store</code>中的<code>state</code>发生变化时，相应组件也会进行更新，修改<code>store</code>当中<code>state</code>的唯一途径是提交<code>mutations</code>。</p><div class="language-text" data-ext="text"><pre class="language-text"><code>const store = new Vuex.Store({
  state: {
    count: 0
  },
  mutations: {
    increment(state) {
      state.count++;
    }
  }
});

store.commit(&quot;increment&quot;); // 通过store.state来获取状态对象

console.log(store.state.count); // 通过store.commit()改变状态
</code></pre></div><h3 id="state" tabindex="-1"><a class="header-anchor" href="#state" aria-hidden="true">#</a> State</h3><p>从<code>store</code>当中获取<code>state</code>的最简单办法是在计算属性中返回指定的<code>state</code>，每当<code>state</code>发生改变的时候都会重新执行计算属性，并且更新关联的 DOM。</p><div class="language-text" data-ext="text"><pre class="language-text"><code>const Counter = {
  template: \`&lt;div&gt;{{ count }}&lt;/div&gt;\`,
  computed: {
    count() {
      return store.state.count;
    }
  }
};
</code></pre></div><p>Vuex 提供<code>store</code>选项，将<code>state</code>从根组件<strong>注入</strong>到每个子组件中，从而避免频繁<code>import store</code>。</p><div class="language-text" data-ext="text"><pre class="language-text"><code>// 父组件中注册store属性
const app = new Vue({
  el: &quot;#app&quot;,
  store: store,
  components: { Counter },
  template: \`
    &lt;div class=&quot;app&quot;&gt;
      &lt;counter&gt;&lt;/counter&gt;
    &lt;/div&gt;\`
});

// 子组件，store会注入到子组件，子组件可通过this.$store进行访问
const Counter = {
  template: \`&lt;div&gt;{{ count }}&lt;/div&gt;\`,
  computed: {
    count() {
      return this.$store.state.count;
    }
  }
};
</code></pre></div><p>Vuex 提供<code>mapState()</code>辅助函数，避免使用多个<code>state</code>的场景下，多次去声明计算属性。</p><div class="language-text" data-ext="text"><pre class="language-text"><code>// 在单独构建的版本中辅助函数为 Vuex.mapState
import { mapState } from &quot;vuex&quot;;

export default {
  computed: mapState({
    count: state =&gt; state.count,
    // 传递字符串参数&quot;count&quot;等同于\`state =&gt; state.count\`
    countAlias: &quot;count&quot;,
    countPlusLocalState(state) {
      return state.count + this.localCount;
    }
  })
};

// 当计算属性名称与state子节点名称相同时，可以向mapState传递一个字符串数组
computed: mapState([
  &quot;count&quot; // 映射this.count到store.state.count
]);
</code></pre></div><p><code>mapState()</code>函数返回一个包含有<code>state</code>相关计算属性的对象，这里可以通过 ES6 的对象展开运算符<code>...</code>将该对象与 Vue 组件本身的<code>computed</code>属性进行合并。</p><div class="language-text" data-ext="text"><pre class="language-text"><code>computed: {
  localComputed () {},
  ...mapState({})
}
</code></pre></div><p>Vuex 允许在<code>store</code>中定义<code>getters</code>（<em>可视为 store 的计算属性</em>），<code>getters</code>的返回值会根据其依赖被缓存，只有当依赖值发生了改变才会被重新计算。该方法接收<code>state</code>作为第 1 个参数，其它<code>getters</code>作为第 2 个参数。可以直接在<code>store</code>上调用<code>getters</code>来获取指定的计算值。</p><div class="language-text" data-ext="text"><pre class="language-text"><code>const store = new Vuex.Store({
  state: {
    todos: [
      { id: 1, text: &quot;...&quot;, done: true },
      { id: 2, text: &quot;...&quot;, done: false }
    ]
  },
  getters: {
    doneTodos: (state, getters) =&gt; {
      return state.todos.filter(todo =&gt; todo.done);
    }
  }
});

// 获取doneTodos = [{ id: 1, text: &quot;...&quot;, done: true }]
store.getters.doneTodos;
</code></pre></div><p>这样就可以方便的根据<code>store</code>中现有的<code>state</code>派生出新的<code>state</code>，从而避免在多个组件中复用时造成代码冗余。</p><div class="language-text" data-ext="text"><pre class="language-text"><code>computed: {
  doneTodosCount () {
    return this.$store.getters.doneTodos // 现在可以方便的在Vue组件使用store中定义的doneTodos
  }
}
</code></pre></div><p>Vuex 提供的<code>mapGetters()</code>辅助函数将<code>store</code>中的<code>getters</code>映射到局部计算属性。</p><div class="language-text" data-ext="text"><pre class="language-text"><code>import { mapGetters } from &quot;vuex&quot;;

export default {
  computed: {
    // 使用对象展开运算符将getters混入computed计算属性
    ...mapGetters([
      &quot;doneTodosCount&quot;,
      (doneCount: &quot;doneTodosCount&quot;) // 映射store.getters.doneTodosCount到别名this.doneCount
    ])
  }
};
</code></pre></div><h3 id="mutations" tabindex="-1"><a class="header-anchor" href="#mutations" aria-hidden="true">#</a> Mutations</h3><p>修改 store 中的 state 的唯一方法是提交 mutation（<em>[mjuː”teɪʃ(ə)n] n.变化</em>），mutations 类似于自定义事件，拥有一个字符串事件类型和一个回调函数（<em>接收 state 作为参数，是对 state 进行修改的位置</em>）。</p><div class="language-text" data-ext="text"><pre class="language-text"><code>const store = new Vuex.Store({
  state: {
    count: 1
  },
  mutations: {
    // 触发类型为increment的mutation时被调用
    increment(state) {
      state.count++; // 变更状态
    }
  }
});

// 触发mutation
store.commit(&quot;increment&quot;);
</code></pre></div><p>可以通过 store 的<code>commit()</code>方法触发指定的 mutations，也可以通过<code>store.commit()</code>向 mutation 传递参数。</p><div class="language-text" data-ext="text"><pre class="language-text"><code>// commit()
store.commit({
  type: &quot;increment&quot;,
  amount: 10
})

// store
mutations: {
  increment (state, payload) {
    state.count += payload.amount
  }
}
</code></pre></div><p>mutation 事件类型建议使用常量，并且将这些常量放置在单独文件，便于管理和防止重复。</p><div class="language-text" data-ext="text"><pre class="language-text"><code>// mutation-types.js
export const SOME_MUTATION = &quot;SOME_MUTATION&quot;

// store.js
import Vuex from &quot;vuex&quot;
import { SOME_MUTATION } from &quot;./mutation-types&quot;

const store = new Vuex.Store({
  state: { ... },
  mutations: {
    // 可以通过ES6的计算属性命名特性去使用常量作为函数名
    [SOME_MUTATION] (state) {
      // mutate state
    }
  }
})
</code></pre></div><blockquote><p><code>mutation()</code>必须是同步函数，因为 devtool 无法追踪回调函数中对<code>state</code>进行的异步修改。</p></blockquote><p>Vue 组件可以使用<code>this.$store.commit(&quot;xxx&quot;)</code>提交 mutation，或者使用<code>mapMutations()</code>将 Vue 组件中的<code>methods</code>映射为<code>store.commit</code>调用（<em>需要在根节点注入<code>store</code></em>）。</p><div class="language-text" data-ext="text"><pre class="language-text"><code>import { mapMutations } from &quot;vuex&quot;;

export default {
  methods: {
    ...mapMutations([
      &quot;increment&quot; // 映射this.increment()为this.$store.commit(&quot;increment&quot;)
    ]),
    ...mapMutations({
      add: &quot;increment&quot; // 映射this.add()为this.$store.commit(&quot;increment&quot;)
    })
  }
};
</code></pre></div><h3 id="actions" tabindex="-1"><a class="header-anchor" href="#actions" aria-hidden="true">#</a> Actions</h3><p>Action 用来提交 mutation，且 Action 中可以包含异步操作。Action 函数接受一个与 store 实例具有相同方法和属性的<code>context</code>对象，因此可以通过调用<code>context.commit</code>提交一个 mutation，或者通过<code>context.state</code>和<code>context.getters</code>来获取 state、getters。</p><div class="language-text" data-ext="text"><pre class="language-text"><code>const store = new Vuex.Store({
  state: {
    count: 0
  },
  mutations: {
    increment(state) {
      state.count++;
    }
  },
  actions: {
    increment(context) {
      context.commit(&quot;increment&quot;);
    }
  }
});
</code></pre></div><p>生产环境下，可以通过 ES6 的解构参数来简化代码。</p><div class="language-text" data-ext="text"><pre class="language-text"><code>actions: {
  // 直接向action传递commit方法
  increment ({ commit }) {
    commit(&quot;increment&quot;)
  }
}
</code></pre></div><p>Action 通过<code>store.dispatch()</code>方法进行分发，<strong>mutation</strong>当中只能进行<strong>同步</strong>操作，而<strong>action</strong>内部可以进行<strong>异步</strong>的操作。下面是一个购物车的例子，代码中分发了多个 mutations，并进行了异步 API 操作。</p><div class="language-text" data-ext="text"><pre class="language-text"><code>actions: {
  checkout ({ commit, state }, products) {

    const savedCartItems = [...state.cart.added]  // 把当前购物车的物品备份起来
    commit(types.CHECKOUT_REQUEST)                // 发出结账请求，然后清空购物车
    // 购物Promise分别接收成功和失败的回调
    shop.buyProducts(
      products,
      () =&gt; commit(types.CHECKOUT_SUCCESS),                  // 成功操作
      () =&gt; commit(types.CHECKOUT_FAILURE, savedCartItems)   // 失败操作
    )
  }
}
</code></pre></div><p>组件中可以使用<code>this.$store.dispatch(&quot;xxx&quot;)</code>分发 action，或者使用<code>mapActions()</code>将组件的<code>methods</code>映射为<code>store.dispatch</code>（<em>需要在根节点注入<code>store</code></em>）。</p><div class="language-text" data-ext="text"><pre class="language-text"><code>import { mapActions } from &quot;vuex&quot;;

export default {
  methods: {
    ...mapActions([
      &quot;increment&quot; // 映射this.increment()为this.$store.dispatch(&quot;increment&quot;)
    ]),
    ...mapActions({
      add: &quot;increment&quot; // 映射this.add()为this.$store.dispatch(&quot;increment&quot;)
    })
  }
};
</code></pre></div><p><code>store.dispatch</code>可以处理<code>action</code>回调函数当中返回的<code>Promise</code>，并且<code>store.dispatch</code>本身仍然返回一个<code>Promise</code>。</p><div class="language-text" data-ext="text"><pre class="language-text"><code>actions: {
  // 定义一个返回Promise对象的actionA
  actionA ({ commit }) {
    return new Promise((resolve, reject) =&gt; {
      setTimeout(() =&gt; {
        commit(&quot;someMutation&quot;) // 触发mutation
        resolve()
      }, 1000)
    })
  },
  // 也可以在actionB中分发actionA
  actionB ({ dispatch, commit }) {
    return dispatch(&quot;actionA&quot;).then(() =&gt; {
      commit(&quot;someOtherMutation&quot;) // 触发另外一个mutation
    })
  }
}

// 现在可以分发actionA
store.dispatch(&quot;actionA&quot;).then(() =&gt; {
  ... ... ...
})
</code></pre></div><p>可以体验通过 ES7 的异步处理特性<code>async</code>/<code>await</code>来组合 action。</p><div class="language-text" data-ext="text"><pre class="language-text"><code>actions: {
  async actionA ({ commit }) {
    commit(&quot;gotData&quot;, await getData())
  },
  async actionB ({ dispatch, commit }) {
    await dispatch(&quot;actionA&quot;) //等待actionA完成
    commit(&quot;gotOtherData&quot;, await getOtherData())
  }
}
</code></pre></div><h3 id="module" tabindex="-1"><a class="header-anchor" href="#module" aria-hidden="true">#</a> Module</h3><p>整个应用使用单一状态树的情况下，所有 state 都会集中到一个 store 对象，因此 store 可能变得非常臃肿。因此，Vuex 允许将 store 切割成模块（<em>module</em>），每个模块拥有自己的<code>state</code>、<code>mutation</code>、<code>action</code>、<code>getter</code>、甚至是嵌套的子模块。</p><div class="language-text" data-ext="text"><pre class="language-text"><code>const moduleA = {
  state: {},
  mutations: {},
  actions: {},
  getters: {}
};

const moduleB = {
  state: {},
  mutations: {},
  actions: {}
};

const store = new Vuex.Store({
  modules: {
    a: moduleA,
    b: moduleB
  }
});

store.state.a; // moduleA的状态
store.state.b; // moduleB的状态
</code></pre></div><p>module 内部的<code>mutations()</code>和<code>getters()</code>接收的第 1 个参数是模块的局部状态对象。</p><div class="language-text" data-ext="text"><pre class="language-text"><code>const moduleA = {
  state: { count: 0 },
  mutations: {
    increment(state) {
      state.count++; // 这里的state是模块的局部状态
    }
  },
  getters: {
    doubleCount(state) {
      return state.count * 2;
    }
  }
};
</code></pre></div><p>模块内部 action 当中，可以通过<code>context.state</code>获取局部状态，以及<code>context.rootState</code>获取全局状态。</p><div class="language-text" data-ext="text"><pre class="language-text"><code>const moduleA = {
  // ...
  actions: {
    incrementIfOddOnRootSum({ state, commit, rootState }) {
      if ((state.count + rootState.count) % 2 === 1) {
        commit(&quot;increment&quot;);
      }
    }
  }
};
</code></pre></div><p>模块内部的<code>getters()</code>方法，可以通过其第 3 个参数接收到全局状态。</p><div class="language-text" data-ext="text"><pre class="language-text"><code>const moduleA = {
  getters: {
    sumWithRootCount(state, getters, rootState) {
      return state.count + rootState.count;
    }
  }
};
</code></pre></div><h3 id="严格模式" tabindex="-1"><a class="header-anchor" href="#严格模式" aria-hidden="true">#</a> 严格模式</h3><p>严格模式下，如果 state 变化不是由<code>mutation()</code>函数引起，将会抛出错误。只需要在创建<code>store</code>的时候传入<code>strict: true</code>即可开启严格模式。</p><div class="language-text" data-ext="text"><pre class="language-text"><code>const store = new Vuex.Store({
  strict: true
});
</code></pre></div><p>不要在生产环境下启用严格模式，因为它会深度检测不合法的 state 变化，从而造成不必要的性能损失，我们可以通过在构建工具中增加如下判断避免这种情况。</p><div class="language-text" data-ext="text"><pre class="language-text"><code>const store = new Vuex.Store({
  strict: p<wbr>rocess.env.NODE_ENV !== &quot;production&quot;
});
</code></pre></div><blockquote><p>严格模式下，在属于 Vuex 的 state 上使用 v-model 指令会抛出错误，此时需要手动绑定 value 并监听 input、change 事件，并在事件回调中手动提交 action。另外一种实现方式是直接重写计算属性的 get 和 set 方法。</p></blockquote><h3 id="总结" tabindex="-1"><a class="header-anchor" href="#总结" aria-hidden="true">#</a> 总结</h3><ol><li>应用层级的状态应该集中到<strong>单个 store 对象</strong>中。</li><li>提交<code>mutation</code>是更改状态的唯一方法，并且这个过程是<strong>同步</strong>的。</li><li><strong>异步</strong>逻辑都应该封装到<code>action</code>里面。</li></ol><h2 id="webpack-vue-loader" tabindex="-1"><a class="header-anchor" href="#webpack-vue-loader" aria-hidden="true">#</a> Webpack Vue Loader</h2>`,189),y={href:"https://vue-loader.vuejs.org/en/",target:"_blank",rel:"noopener noreferrer"},V=n("code",null,".vue",-1),M=n("code",null,".vue",-1),w=o(`<ol><li>一个<code>&lt;template&gt;</code>。</li><li>一个<code>&lt;script&gt;</code>。</li><li>多个<code>&lt;style&gt;</code>。</li></ol><div class="language-text" data-ext="text"><pre class="language-text"><code>&lt;template&gt;只能有1个&lt;/template&gt;

&lt;script&gt;
  只能有1个;
&lt;/script&gt;

&lt;style&gt;
  可以有多个
&lt;/style&gt;
&lt;style&gt;
  可以有多个
&lt;/style&gt;
&lt;style&gt;
  可以有多个
&lt;/style&gt;
</code></pre></div><h3 id="css-作用域" tabindex="-1"><a class="header-anchor" href="#css-作用域" aria-hidden="true">#</a> CSS 作用域</h3><p>向<code>.vue</code>单文件组件的<code>&lt;style&gt;</code>标签上添加<code>scoped</code>属性，可以让该<code>&lt;style&gt;</code>标签中的样式只作用于当前组件。使用 scoped 时，样式选择器尽量使用 class 或者 id，以提升页面渲染性能。</p><div class="language-text" data-ext="text"><pre class="language-text"><code>&lt;!-- 单文件组件定义 --&gt;
&lt;style scoped&gt;
  .example {
    color: red;
  }
&lt;/style&gt;

&lt;template&gt;
  &lt;div class=&quot;example&quot;&gt;Hank&lt;/div&gt;
&lt;/template&gt;

&lt;!-- 转换结果 --&gt;
&lt;style&gt;
  .example[data-v-f3f3eg9] {
    color: blue;
  }
&lt;/style&gt;

&lt;template&gt;
  &lt;div class=&quot;example&quot; data-v-f3f3eg9&gt;Hank&lt;/div&gt;
&lt;/template&gt;
</code></pre></div><blockquote><p>可以在一个组件中同时使用带<code>scoped</code>属性和不带该属性的<code>&lt;style/&gt;</code>，分别用来定义组件私有样式和全局样式。</p></blockquote><h3 id="css-模块化" tabindex="-1"><a class="header-anchor" href="#css-模块化" aria-hidden="true">#</a> CSS 模块化</h3>`,7),S=n("code",null,".vue",-1),C=n("code",null,"<style>",-1),O=n("code",null,"module",-1),_={href:"https://github.com/css-modules/css-modules",target:"_blank",rel:"noopener noreferrer"},T={href:"https://vue-loader.vuejs.org/en/features/css-modules.html",target:"_blank",rel:"noopener noreferrer"},A=o(`<div class="language-text" data-ext="text"><pre class="language-text"><code>&lt;style module&gt;
  .red {
    color: red;
  }
  .bold {
    font-weight: bold;
  }
&lt;/style&gt;
</code></pre></div><p>CSS 模块会向 Vue 组件中注入名为<code>$style</code>计算属性，从而实现在组件的<code>&lt;template/&gt;</code>中使用动态的<code>class</code>属性进行绑定。</p><div class="language-text" data-ext="text"><pre class="language-text"><code>&lt;template&gt;
  &lt;p :class=&quot;$style.red&quot;&gt;
    This should be red
  &lt;/p&gt;
&lt;/template&gt;
</code></pre></div><h2 id="动画" tabindex="-1"><a class="header-anchor" href="#动画" aria-hidden="true">#</a> 动画</h2><p>Vue 在插入、更新、移除<strong>DOM</strong>的时候，提供了如下几种方式去展现进入（<em>entering</em>）和离开（<em>leaving</em>）的过渡效果。</p>`,5),j=n("li",null,"在 CSS 过渡和动画中应用 class。",-1),$=n("li",null,"钩子过渡函数中直接操作 DOM。",-1),H={href:"https://daneden.github.io/animate.css/",target:"_blank",rel:"noopener noreferrer"},D={href:"http://velocityjs.org/",target:"_blank",rel:"noopener noreferrer"},E=o(`<h3 id="transition-组件" tabindex="-1"><a class="header-anchor" href="#transition-组件" aria-hidden="true">#</a> transition 组件</h3><p>Vue 提供了内置组件<code>&lt;transition/&gt;</code>来为 HTML 元素、Vue 组件添加过渡动画效果，可以在<em>条件展示</em>（<em>使用<code>v-if</code>或<code>v-show</code></em>）、<em>动态组件</em>、<em>展示组件根节点</em>的情况下进行渲染。<code>&lt;transition/&gt;</code>主要用来处理单个节点，或者同时渲染多个节点当中的一个。</p><h4 id="自动切换的-class-类名" tabindex="-1"><a class="header-anchor" href="#自动切换的-class-类名" aria-hidden="true">#</a> 自动切换的 class 类名</h4><p>在组件或 HTML 进入（<em>entering</em>）和离开（<em>leaving</em>）的过渡效果当中，Vue 将会自动切换并应用下图中的六种 class 类名。</p><p>可以使用<code>&lt;transition/&gt;</code>的<code>name</code>属性来自动生成过渡 class 类名，例如下面例子中的<code>name: &quot;fade&quot;</code>将自动拓展为<code>.fade-enter</code>，<code>.fade-enter-active</code>等，<code>name</code>属性缺省的情况下默认类名为<code>v</code>。</p><div class="language-text" data-ext="text"><pre class="language-text"><code>&lt;div id=&quot;demo&quot;&gt;
  &lt;button v-on:click=&quot;show = !show&quot;&gt;Toggle&lt;/button&gt;
  &lt;transition name=&quot;fade&quot;&gt;
    &lt;p v-if=&quot;show&quot;&gt;hello&lt;/p&gt;
  &lt;/transition&gt;
&lt;/div&gt;

&lt;script&gt;
  new Vue({
    el: &quot;#demo&quot;,
    data: {
      show: true
    }
  });
&lt;/script&gt;

&lt;style&gt;
  .fade-enter-active,
  .fade-leave-active {
    transition: opacity 0.5s;
  }
  .fade-enter,
  .fade-leave-to {
    opacity: 0;
  }
&lt;/style&gt;
</code></pre></div><h4 id="自定义-css-类名" tabindex="-1"><a class="header-anchor" href="#自定义-css-类名" aria-hidden="true">#</a> 自定义 CSS 类名</h4><p>结合<code>Animate.css</code>使用时，可以在<code>&lt;transition/&gt;</code>当中通过以下属性自定义 class 类名。</p><div class="language-text" data-ext="text"><pre class="language-text"><code>&lt;transition
  enter-class=&quot;animated&quot;
  enter-active-class=&quot;animated&quot;
  enter-to-class=&quot;animated&quot;
  leave-class=&quot;animated&quot;
  leave-active-class=&quot;animated&quot;
  leave-to-class=&quot;animated&quot;
&gt;
&lt;/transition&gt;
</code></pre></div><h4 id="自定义-javascript-钩子" tabindex="-1"><a class="header-anchor" href="#自定义-javascript-钩子" aria-hidden="true">#</a> 自定义 JavaScript 钩子</h4><p>结合<code>Velocity.js</code>使用时，通过 v-on 在属性中设置钩子函数。</p><div class="language-text" data-ext="text"><pre class="language-text"><code>&lt;transition
  v-on:before-enter=&quot;beforeEnter&quot;
  v-on:enter=&quot;enter&quot;
  v-on:after-enter=&quot;afterEnter&quot;
  v-on:enter-cancelled=&quot;enterCancelled&quot;
  v-on:before-leave=&quot;beforeLeave&quot;
  v-on:leave=&quot;leave&quot;
  v-on:after-leave=&quot;afterLeave&quot;
  v-on:leave-cancelled=&quot;leaveCancelled&quot;
&gt;
&lt;/transition&gt;

&lt;script&gt;
  // ...
  methods: {
    beforeEnter: function (el) {},
    enter: function (el, done) { done() },
    afterEnter: function (el) {},
    enterCancelled: function (el) {},
    beforeLeave: function (el) {},
    leave: function (el, done) { done() },
    afterLeave: function (el) {},
    leaveCancelled: function (el) {} // 仅用于v-show
  }
&lt;/script&gt;
</code></pre></div><h4 id="显式设置过渡持续时间" tabindex="-1"><a class="header-anchor" href="#显式设置过渡持续时间" aria-hidden="true">#</a> 显式设置过渡持续时间</h4><p>可以使用<code>&lt;transition&gt;</code>上的<code>duration属性</code>设置一个以毫秒为单位的显式过渡持续时间。</p><div class="language-text" data-ext="text"><pre class="language-text"><code>&lt;transition :duration=&quot;1000&quot;&gt; Hank &lt;/transition&gt;

&lt;!-- 可以分别定制进入、移出的持续时间 --&gt;
&lt;transition :duration=&quot;{ enter: 500, leave: 800 }&quot;&gt; Hank &lt;/transition&gt;
</code></pre></div><h4 id="组件首次渲染时的过渡" tabindex="-1"><a class="header-anchor" href="#组件首次渲染时的过渡" aria-hidden="true">#</a> 组件首次渲染时的过渡</h4><p>通过<code>&lt;transition&gt;</code>上的<code>appear属性</code>设置组件节点首次被渲染时的过渡动画。</p><div class="language-text" data-ext="text"><pre class="language-text"><code>&lt;!-- 自定义CSS类名 --&gt;
&lt;transition
  appear
  appear-class=&quot;custom-appear-class&quot;
  appear-to-class=&quot;custom-appear-to-class&quot;
  appear-active-class=&quot;custom-appear-active-class&quot;
&gt;
&lt;/transition&gt;

&lt;!-- 自定义JavaScript钩子 --&gt;
&lt;transition
  appear
  v-on:before-appear=&quot;customBeforeAppearHook&quot;
  v-on:appear=&quot;customAppearHook&quot;
  v-on:after-appear=&quot;customAfterAppearHook&quot;
  v-on:appear-cancelled=&quot;customAppearCancelledHook&quot;
&gt;
&lt;/transition&gt;
</code></pre></div><h4 id="html-元素的过渡效果" tabindex="-1"><a class="header-anchor" href="#html-元素的过渡效果" aria-hidden="true">#</a> HTML 元素的过渡效果</h4><h5 id="vue-组件的-key-属性" tabindex="-1"><a class="header-anchor" href="#vue-组件的-key-属性" aria-hidden="true">#</a> Vue 组件的 key 属性</h5><p>key 属性主要用在 Vue 虚拟 DOM 算法中去区分新旧 VNodes，不显式使用<code>key</code>的时候，Vue 会使用性能最优的自动比较算法。显式的使用<code>key</code>，则会基于<code>key</code>的变化重新排列元素顺序，并移除不存在<code>key</code>的元素。具有相同父元素的子元素必须有独特的<code>key</code>，因为重复的<code>key</code>会造成渲染错误。</p><div class="language-text" data-ext="text"><pre class="language-text"><code>&lt;ul&gt;
  &lt;!-- 最常见的用法是在使用v-for的时候 --&gt;
  &lt;li v-for=&quot;item in items&quot; :key=&quot;item.id&quot;&gt;...&lt;/li&gt;
&lt;/ul&gt;
</code></pre></div><h5 id="元素的的交替过渡" tabindex="-1"><a class="header-anchor" href="#元素的的交替过渡" aria-hidden="true">#</a> 元素的的交替过渡</h5><p>可以通过 Vue 提供的<code>v-if</code>和<code>v-else</code>属性来实现多组件的交替过渡，最常见的过渡效果是一个列表以及描述列表为空时的消息。</p><div class="language-text" data-ext="text"><pre class="language-text"><code>&lt;transition&gt;
  &lt;table v-if=&quot;items.length &gt; 0&quot;&gt;
    &lt;!-- ... --&gt;
  &lt;/table&gt;
  &lt;p v-else&gt;Sorry, no items found.&lt;/p&gt;
&lt;/transition&gt;
</code></pre></div><p>Vue 中具有相同名称的元素切换时，需要通过关键字<code>key</code>作为标记进行区分，否则 Vue 出于效率的考虑只会替换相同标签内的内容，因此为<code>&lt;transition&gt;</code>组件中的同名元素设置<code>key</code>是一个<strong>最佳实践</strong>。</p><div class="language-text" data-ext="text"><pre class="language-text"><code>&lt;transition&gt;
  &lt;button v-if=&quot;isEditing&quot; key=&quot;save&quot;&gt;Save&lt;/button&gt;
  &lt;button v-else key=&quot;edit&quot;&gt;Edit&lt;/button&gt;
&lt;/transition&gt;
</code></pre></div><p>一些场景中，可以通过给相同 HTML 元素的<code>key</code>属性设置不同的状态来代替冗长的<code>v-if</code>和<code>v-else</code>。</p><div class="language-text" data-ext="text"><pre class="language-text"><code>&lt;!-- 通过v-if和v-else来实现 --&gt;
&lt;transition&gt;
  &lt;button v-if=&quot;isEditing&quot; key=&quot;save&quot;&gt;Save&lt;/button&gt;
  &lt;button v-else key=&quot;edit&quot;&gt;Edit&lt;/button&gt;
&lt;/transition&gt;

&lt;!-- 设置动态的key属性来实现 --&gt;
&lt;transition&gt;
  &lt;button v-bind:key=&quot;isEditing&quot;&gt;{{ isEditing ? &quot;Save&quot; : &quot;Edit&quot; }}&lt;/button&gt;
&lt;/transition&gt;
</code></pre></div><p>而对于使用了多个<code>v-if</code>的多元素过渡，也可以通过动态的<code>key</code>属性进行大幅度的简化。</p><div class="language-text" data-ext="text"><pre class="language-text"><code>&lt;!-- 多个v-if实现的多元素过渡 --&gt;
&lt;transition&gt;
  &lt;button v-if=&quot;docState === &quot;saved&quot;&quot; key=&quot;saved&quot;&gt; Edit &lt;/button&gt;
  &lt;button v-if=&quot;docState === &quot;edited&quot;&quot; key=&quot;edited&quot;&gt; Save &lt;/button&gt;
  &lt;button v-if=&quot;docState === &quot;editing&quot;&quot; key=&quot;editing&quot;&gt; Cancel &lt;/button&gt;
&lt;/transition&gt;

&lt;!-- 通过动态key属性可以大幅简化模板代码 --&gt;
&lt;transition&gt;
  &lt;button v-bind:key=&quot;docState&quot;&gt; {{ buttonMessage }} &lt;/button&gt;
&lt;/transition&gt;

&lt;script&gt;
...
computed: {
  buttonMessage: function () {
    switch (this.docState) {
      case &quot;saved&quot;: return &quot;Edit&quot;
      case &quot;edited&quot;: return &quot;Save&quot;
      case &quot;editing&quot;: return &quot;Cancel&quot;
    }
  }
}
&lt;/script&gt;
</code></pre></div><h4 id="vue-组件的过渡效果" tabindex="-1"><a class="header-anchor" href="#vue-组件的过渡效果" aria-hidden="true">#</a> Vue 组件的过渡效果</h4><p>多个 Vue 组件之间的过渡不需要使用<code>key</code>属性，只需要使用<strong>动态组件</strong>即可。</p><div class="language-text" data-ext="text"><pre class="language-text"><code>&lt;transition name=&quot;component-fade&quot; mode=&quot;out-in&quot;&gt;
  &lt;component v-bind:is=&quot;view&quot;&gt;&lt;/component&gt;
&lt;/transition&gt;

&lt;script&gt;
new Vue({
  el: &quot;#transition-components-demo&quot;,
  data: {
    view: &quot;v-a&quot;
  },
  components: {
    &quot;v-a&quot;: {
      template: &quot;&lt;div&gt;Component A&lt;/div&gt;&quot;
    },
    &quot;v-b&quot;: {
      template: &quot;&lt;div&gt;Component B&lt;/div&gt;&quot;
    }
  }
})
&lt;script&gt;

&lt;style&gt;
.component-fade-enter-active, .component-fade-leave-active {
  transition: opacity .3s ease;
}
.component-fade-enter, .component-fade-leave-to {
  opacity: 0;
}
&lt;style&gt;
</code></pre></div><h4 id="选择-html-元素或-vue-组件的过渡模式" tabindex="-1"><a class="header-anchor" href="#选择-html-元素或-vue-组件的过渡模式" aria-hidden="true">#</a> 选择 HTML 元素或 Vue 组件的过渡模式</h4><p><code>&lt;transition&gt;</code>的默认进入（<em>enter</em>）和离开（<em>leave</em>）行为同时发生，所以当多个需要切换显示的 HTML 元素或 Vue 组件处于相同位置的时候，这种同时生效的进入和离开过渡不能满足所有需求，Vue 可以通过<code>&lt;transition-gruop&gt;</code>组件的<code>mode</code>属性来选择如下过渡模式。</p><ul><li><code>in-out</code>：新元素先进行过渡，完成之后当前显示的元素再过渡离开。</li><li><code>out-in</code>：当前显示的元素先进行过渡，完成之后新元素再过渡进入。</li></ul><div class="language-text" data-ext="text"><pre class="language-text"><code>&lt;transition name=&quot;fade&quot; mode=&quot;out-in&quot;&gt;
  &lt;button v-if=&quot;docState === &quot;saved&quot;&quot; key=&quot;saved&quot;&gt; Edit &lt;/button&gt;
  &lt;button v-if=&quot;docState === &quot;edited&quot;&quot; key=&quot;edited&quot;&gt; Save &lt;/button&gt;
  &lt;button v-if=&quot;docState === &quot;editing&quot;&quot; key=&quot;editing&quot;&gt; Cancel &lt;/button&gt;
&lt;/transition&gt;
</code></pre></div><h3 id="transition-group-组件" tabindex="-1"><a class="header-anchor" href="#transition-group-组件" aria-hidden="true">#</a> transition-group 组件</h3><p><code>&lt;transition-group&gt;</code>用来设置多个 HTML 元素或 Vue 组件的过渡效果，不同于<code>&lt;transition&gt;</code>，该组件默认会被渲染为一个真实的<code>&lt;span&gt;</code>元素，但是开发人员也可以通过<code>&lt;transition-group&gt;</code>组件的<code>tag</code>属性更换为其它合法的 HTML 元素。<code>&lt;transition-group&gt;</code>组件内部的元素必须要提供唯一的<code>key</code>属性值。</p><div class="language-text" data-ext="text"><pre class="language-text"><code>&lt;div id=&quot;list-demo&quot; class=&quot;demo&quot;&gt;
  &lt;button v-on:click=&quot;add&quot;&gt;Add&lt;/button&gt;
  &lt;button v-on:click=&quot;remove&quot;&gt;Remove&lt;/button&gt;
  &lt;transition-group name=&quot;list&quot; tag=&quot;p&quot;&gt;
    &lt;span v-for=&quot;item in items&quot; v-bind:key=&quot;item&quot; class=&quot;list-item&quot;&gt;
      {{ item }}
    &lt;/span&gt;
  &lt;/transition-group&gt;
&lt;/div&gt;

&lt;script&gt;
  new Vue({
    el: &quot;#list-demo&quot;,
    data: {
      items: [1, 2, 3, 4, 5, 6, 7, 8, 9],
      nextNum: 10
    },
    methods: {
      randomIndex: function() {
        return Math.floor(Math.random() * this.items.length);
      },
      add: function() {
        this.items.splice(this.randomIndex(), 0, this.nextNum++);
      },
      remove: function() {
        this.items.splice(this.randomIndex(), 1);
      }
    }
  });
&lt;/script&gt;

&lt;style&gt;
  .list-item {
    display: inline-block;
    margin-right: 10px;
  }
  .list-enter-active,
  .list-leave-active {
    transition: all 1s;
  }
  .list-enter,
  .list-leave-to {
    opacity: 0;
    transform: translateY(30px);
  }
&lt;/style&gt;
</code></pre></div><p><code>&lt;transition-group&gt;</code>实现的列表过渡效果在添加、移除某个 HTML 元素时，相临的其它 HTML 元素会瞬间移动至新位置，这个过程并非平滑的过渡。为解决这个问题，<code>&lt;transition-group&gt;</code>提供<em>v-move</em>特性去覆盖<strong>移动过渡期间</strong>所使用的 CSS 类名。开启该特性，即可以通过<code>name</code>属性手动设置（<em>下面例子中的<code>name=&quot;flip-list&quot;</code>与<code>.flip-list-move</code></em>），也可以直接使用<code>move-class</code>属性。</p><div class="language-text" data-ext="text"><pre class="language-text"><code>&lt;div id=&quot;flip-list-demo&quot; class=&quot;demo&quot;&gt;
  &lt;button v-on:click=&quot;shuffle&quot;&gt;Shuffle&lt;/button&gt;
  &lt;transition-group name=&quot;flip-list&quot; tag=&quot;ul&quot;&gt;
    &lt;li v-for=&quot;item in items&quot; v-bind:key=&quot;item&quot;&gt;
      {{ item }}
    &lt;/li&gt;
  &lt;/transition-group&gt;
&lt;/div&gt;

&lt;script&gt;
new Vue({
  el: &quot;#flip-list-demo&quot;,
  data: {
    items: [1,2,3,4,5,6,7,8,9]
  },
  methods: {
    shuffle: function () {
      this.items = _.shuffle(this.items)
    }
  }
})
&lt;/script&gt;

&lt;style&gt;
.flip-list-move {
  transition: transform 1s;
}
&lt;style&gt;
</code></pre></div><p>可以通过<strong>响应式</strong>的绑定<code>&lt;transition&gt;</code>和<code>&lt;transition-gruop&gt;</code>上的 name 属性，从而能够根据组件自身的状态实现具有动态性的过渡效果。</p><div class="language-text" data-ext="text"><pre class="language-text"><code>&lt;transition v-bind:name=&quot;transitionName&quot;&gt;&lt;/transition&gt;
</code></pre></div>`,45);function L(N,P){const e=l("ExternalLinkIcon");return u(),i("div",null,[r,n("p",null,[t("Vue 当中的 Virtual DOM 对象被称为"),g,t("（"),q,t("），补丁算法来自于另外一个开源项目"),n("a",m,[t("snabbdom"),a(e)]),t("，即将真实的 DOM 操作映射成对虚拟 DOM 的操作，通过减少对真实 DOM 的操作次数来提升性能。")]),k,n("p",null,[t("Vue 视图层通过"),n("a",v,[t("Mustache"),a(e)]),h,t("语法与 Vue 实例中的 data 属性进行响应式绑定，但是也可以通过内置指令"),x,t("完成一个单向的绑定，再或者通过"),f,t("指令将绑定的字符串输出为 HTML，虽然这样很容易招受 XSS 攻击。")]),b,n("p",null,[n("a",y,[t("vue-loader"),a(e)]),t("是由 Vue 开源社区提供的 Webpack 加载器，用来将"),V,t("后缀的单文件组件转换为 JavaScript 模块，每个"),M,t("单文件组件可以包括以下部分：")]),w,n("p",null,[t("在单文件组件"),S,t("的"),C,t("标签上添加"),O,t("属性即可打开 CSS 模块化特性。"),n("a",_,[t("CSS Modules"),a(e)]),t("用于模块化组合 CSS，"),n("a",T,[t("vue-loader"),a(e)]),t("已经集成了 CSS 模块化特性。")]),A,n("ol",null,[j,$,n("li",null,[t("使用 CSS、JavaScript 动画库，如"),n("a",H,[t("Animate.css"),a(e)]),t("、"),n("a",D,[t("Velocity.js"),a(e)]),t("。")])]),E])}const U=c(d,[["render",L],["__file","vue20.html.vue"]]);export{U as default};
