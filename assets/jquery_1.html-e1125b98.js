import{_ as n,p as s,q as a,a1 as t}from"./framework-d81ad7e5.js";const p={},o=t(`<h2 id="jquery中动态创建、添加元素的方法" tabindex="-1"><a class="header-anchor" href="#jquery中动态创建、添加元素的方法" aria-hidden="true">#</a> jQuery中动态创建、添加元素的方法</h2><div class="language-html" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>button<span class="token punctuation">&quot;</span></span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>创建元素<span class="token punctuation">&quot;</span></span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>btn<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>box<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>main<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>这是文中一段话<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span>
 
</code></pre></div><h3 id="动态创建元素" tabindex="-1"><a class="header-anchor" href="#动态创建元素" aria-hidden="true">#</a> 动态创建元素</h3><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token comment">//点击按钮，动态创建元素</span>

<span class="token comment">//方法一：$()创建元素，后用append()方法添加。append() 还可以把其他地方元素添加进这个对象中。</span>
 
<span class="token function">$</span><span class="token punctuation">(</span><span class="token string">&#39;#btn&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">click</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
 
　　<span class="token keyword">var</span> el <span class="token operator">=</span> <span class="token function">$</span><span class="token punctuation">(</span><span class="token string">&#39;&lt;p&gt;这是一个P标签&lt;/p&gt;&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
 
　　<span class="token comment">// $(&#39;#box&#39;).append(el); //两种添加方法</span>
 
　　el<span class="token punctuation">.</span><span class="token function">appendTo</span><span class="token punctuation">(</span><span class="token function">$</span><span class="token punctuation">(</span><span class="token string">&#39;#box&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
 
<span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token comment">//方法二：.html()方法为元素 创建并添加子元素。 html() 还可以把其他地方元素添加进这个对象中。支持添加标签。</span>
 
<span class="token function">$</span><span class="token punctuation">(</span><span class="token string">&#39;#btn&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">click</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
 
　　<span class="token function">$</span><span class="token punctuation">(</span><span class="token string">&#39;#box&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">html</span><span class="token punctuation">(</span><span class="token string">&#39;&lt;h&gt;标题是。。&lt;/h&gt;&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
 
<span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token comment">//如DOM中创建元素方法</span>
<span class="token keyword">var</span> box <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">&#39;box&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">var</span> p <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">createElement</span><span class="token punctuation">(</span><span class="token string">&#39;p&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
p<span class="token punctuation">.</span>innerText <span class="token operator">=</span> <span class="token string">&#39;这是第二个哦~&#39;</span><span class="token punctuation">;</span>
box<span class="token punctuation">.</span><span class="token function">appendChild</span><span class="token punctuation">(</span>p<span class="token punctuation">)</span><span class="token punctuation">;</span>
 

<span class="token comment">//jQuery中添加元素的方法：</span>
<span class="token keyword">var</span> i <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
<span class="token function">$</span><span class="token punctuation">(</span><span class="token string">&#39;#btn&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">click</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
　　<span class="token keyword">var</span> p <span class="token operator">=</span> <span class="token function">$</span><span class="token punctuation">(</span><span class="token string">&#39;&lt;p&gt; 第二个p标签&#39;</span> <span class="token operator">+</span> i <span class="token operator">+</span> <span class="token string">&#39;&lt;/p&gt;&#39;</span><span class="token punctuation">)</span>
　　i<span class="token operator">++</span><span class="token punctuation">;</span>
<span class="token comment">//一、在元素内添加，可以把其他地方元素也添加进来：对象.html(&#39;元素及内容&#39;)</span>
　　<span class="token function">$</span><span class="token punctuation">(</span><span class="token string">&#39;#box&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">html</span><span class="token punctuation">(</span><span class="token function">$</span><span class="token punctuation">(</span><span class="token string">&#39;#main&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">//二、在元素内添加，依次（往后）添加：对象.append(元素) 或者 元素.appendTo(对象)</span>
　　<span class="token function">$</span><span class="token punctuation">(</span><span class="token string">&#39;#box&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">append</span><span class="token punctuation">(</span><span class="token function">$</span><span class="token punctuation">(</span><span class="token string">&#39;#main&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
　　<span class="token function">$</span><span class="token punctuation">(</span><span class="token string">&#39;#box&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">append</span><span class="token punctuation">(</span>p<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">//三、在元素内添加，依次（往前）添加：对象.prepend(元素)；</span>
　　<span class="token function">$</span><span class="token punctuation">(</span><span class="token string">&#39;#box&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">prepend</span><span class="token punctuation">(</span>p<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">//四、在元素前添加兄弟元素,依次（往后）添加：对象.before(元素);</span>
　　<span class="token function">$</span><span class="token punctuation">(</span><span class="token string">&#39;#box&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">before</span><span class="token punctuation">(</span>p<span class="token punctuation">)</span><span class="token punctuation">;</span>
 
<span class="token comment">//五，在元素后添加兄弟元素,依次（往前）添加：对象.after(元素)；</span>
　　<span class="token function">$</span><span class="token punctuation">(</span><span class="token string">&#39;#box&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">after</span><span class="token punctuation">(</span>p<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token punctuation">}</span><span class="token punctuation">)</span>

</code></pre></div><h2 id="给动态添加的元素绑定事件" tabindex="-1"><a class="header-anchor" href="#给动态添加的元素绑定事件" aria-hidden="true">#</a> 给动态添加的元素绑定事件</h2><ul><li>利用时间代理达到这个效果即可。如：</li></ul><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token function">$</span><span class="token punctuation">(</span>document<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span><span class="token string">&quot;click&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;.large&quot;</span><span class="token punctuation">,</span> slide<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//jq中的写法</span>
<span class="token comment">//第一个参数表示的是对应事件，第二个是需要绑定事件的元素的id或class，第三个是绑定的对应的事件函数名</span>
</code></pre></div>`,7),c=[o];function e(u,l){return s(),a("div",null,c)}const i=n(p,[["render",e],["__file","jquery_1.html.vue"]]);export{i as default};
