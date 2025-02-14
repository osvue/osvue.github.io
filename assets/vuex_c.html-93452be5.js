import{_ as n,p as s,q as a,a1 as t}from"./framework-d81ad7e5.js";const p={},o=t(`<h2 id="解决浏览器刷新后-vuex-数据消失问题" tabindex="-1"><a class="header-anchor" href="#解决浏览器刷新后-vuex-数据消失问题" aria-hidden="true">#</a> 解决浏览器刷新后 Vuex 数据消失问题</h2><details class="custom-container details"><p>1、 解决浏览器刷新后 Vuex 数据消失问题 <br> 2、解决思路： <br> 办法一：将vuex中的数据直接保存到浏览器缓存中（sessionStorage、localStorage、cookie）</p><p>办法二：在页面刷新的时候再次请求远程数据，使之动态更新vuex数据</p><p>办法三：在父页面向后台请求远程数据，并且在页面刷新前将vuex的数据先保存至sessionStorage（以防请求数据量过大页面加载时拿不到返回的数据）</p><br> 分析： <br> 办法一的缺点是不安全，不适用大数据量的存储； <p>办法二适用于少量的数据，并且不会出现网络延迟；</p><p>办法三是办法二和办法一配合使用。</p><br> 3、解决过程： <br> 3.1、选择合适的浏览器存储 <br> localStorage -- 是永久存储在本地，除非你主动去删除; <p>sessionStorage -- 是存储到当前页面关闭为止，和其他tab页没关联;</p><p>cookie -- 则根据你设置的有效时间来存储，但缺点是不能储存大数据且不易读取，会和后台进行交互。</p><br><p>本方法选择的是sessionStorage，选择的原因是由于vue是单页面应用，操作都是在一个页面跳转路由，另一个原因是sessionStorage可以保证打开页面时sessionStorage的数据为空，而如果是localStorage则会读取上一次打开页面的数据。</p><br><p>3.2、解决方案 <br> 由于state里的数据是响应式，所以sessionStorage存储也要跟随变化，而且只能通过mutations来改变state中的值。首先在用户登录成功之后，然后把用户信息，菜单信息通过actions分发保存至vuex中。然后在菜单页面计算vuex中state的菜单数据，将数据解析组装成前端组件所需的格式，然后渲染组件，生成菜单树。如果页面没有刷新，则一切正常。</p></details><h3 id="vuex页面f5刷新后维持刷新前的状态不变" tabindex="-1"><a class="header-anchor" href="#vuex页面f5刷新后维持刷新前的状态不变" aria-hidden="true">#</a> vuex页面F5刷新后维持刷新前的状态不变</h3><ul><li>对于在当前访问网页使用F5刷新之后，页面的变量和参数都会丢失，这时页面显示的内容会变得不友好，用户体验不好，</li><li>我们可以通过将页面的参数和变量保存到sessionStorage中，当刷新后再从sessionStorage将变量和状态取回来渲染回页面</li><li>那样F5刷新后，用户看到的页面还是刷新前的。</li></ul><ul><li><strong>首先在store的index.js中，state，增加页面要保存的变量，并且将它们的值和sessionStorage里面的绑定</strong></li><li><strong>然后再新增mutations，这是将变量写入sessionStorage的方法</strong></li><li><strong>接着就可以在登录函数中这样调用，登录成功后将需要的变量写进sessionStorage</strong></li><li><strong>在路由的钩子函数里面可以这样将变量取回来，那样页面刷新后，也能将刷新前的状态保持</strong></li></ul><ul><li><code>sessionStorage.getItem(&#39;tiktok&#39;)</code></li></ul><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">new</span> <span class="token class-name">Vuex<span class="token punctuation">.</span>Store</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">state</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">token</span><span class="token operator">:</span>sessionStorage<span class="token punctuation">.</span><span class="token function">getItem</span><span class="token punctuation">(</span><span class="token string">&#39;tiktok&#39;</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">mutations</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token function">setToken</span> <span class="token punctuation">(</span><span class="token parameter">state<span class="token punctuation">,</span> token</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      state<span class="token punctuation">.</span>token <span class="token operator">=</span> token
      sessionStorage<span class="token punctuation">.</span><span class="token function">setItem</span><span class="token punctuation">(</span><span class="token string">&#39;tiktok&#39;</span><span class="token punctuation">,</span>token<span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">actions</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token function">asynToken</span><span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span>commit<span class="token punctuation">}</span><span class="token punctuation">,</span>tik</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token function">commit</span><span class="token punctuation">(</span><span class="token string">&#39;setToken&#39;</span><span class="token punctuation">,</span>tik<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">modules</span><span class="token operator">:</span> <span class="token punctuation">{</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre></div><h2 id="mapstate的使用-常用" tabindex="-1"><a class="header-anchor" href="#mapstate的使用-常用" aria-hidden="true">#</a> mapState的使用（常用）</h2><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code>
 
<span class="token comment">//1.在.vue组件中引入,在js块中引入</span>

<span class="token keyword">import</span> <span class="token punctuation">{</span> mapState <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vuex&#39;</span>
<span class="token comment">//2.在.vue组件中定义一个对象</span>

computed：<span class="token punctuation">{</span>
<span class="token operator">...</span><span class="token function">mapState</span><span class="token punctuation">(</span><span class="token punctuation">[</span>        <span class="token comment">//mapState本是一个函数，在里面写一个数组，记得加...</span>
‘num’ ， <span class="token comment">//存的数据</span>
‘id’
<span class="token punctuation">]</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
<span class="token comment">//3.然后就可以不用$store.state.num引用了,直接插值</span>

<span class="token punctuation">{</span><span class="token punctuation">{</span>num<span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token punctuation">{</span><span class="token punctuation">{</span>id<span class="token punctuation">}</span><span class="token punctuation">}</span>   <span class="token comment">//引用多个</span>
 
 
<span class="token comment">//4. 解构赋值实例</span>
<span class="token keyword">let</span> mapState <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token literal-property property">num</span><span class="token operator">:</span><span class="token number">0</span><span class="token punctuation">,</span><span class="token literal-property property">id</span><span class="token operator">:</span><span class="token number">111</span><span class="token punctuation">}</span>
<span class="token keyword">let</span> computed <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token operator">...</span>mapState<span class="token punctuation">}</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>computed <span class="token punctuation">)</span>

</code></pre></div>`,9),e=[o];function c(u,l){return s(),a("div",null,e)}const r=n(p,[["render",c],["__file","vuex_c.html.vue"]]);export{r as default};
