import{_ as n,p as s,q as a,a1 as t}from"./framework-d81ad7e5.js";const p={},o=t(`<h2 id="自定义属性与前端页面的主题切换" tabindex="-1"><a class="header-anchor" href="#自定义属性与前端页面的主题切换" aria-hidden="true">#</a> 自定义属性与前端页面的主题切换</h2><ul><li>自定义属性也有它的特点和用处，诸如在js中读写、作用域设置等等，在处理UI主题切换等功能上也发挥着很大的作用。</li></ul><h3 id="自定义属性" tabindex="-1"><a class="header-anchor" href="#自定义属性" aria-hidden="true">#</a> 自定义属性</h3><ul><li><p>CSS自定义属性(Custom Properties)，在一个css选择器内部进行定义，使用两个短横连接线 <strong><code>--</code></strong> 作为开头命名的名称即被称为自定义属性。</p></li><li><p>可以给该自定义属性设置任意css属性值。该自定义属性赋值后，将可以作为变量赋值给css样式属性，会立马生效。</p></li><li><p>定义：<code>--custom-property-name: custom-property-value</code></p></li></ul><div class="language-css" data-ext="css"><pre class="language-css"><code><span class="token selector">body</span> <span class="token punctuation">{</span>
  <span class="token comment">/* 声明自定义属性 */</span>
  <span class="token property">--bg-color</span><span class="token punctuation">:</span> #f00<span class="token punctuation">;</span>
  <span class="token comment">/* 使用 */</span>
  <span class="token property">background-color</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--bg-color<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><p>上面的代码，即在body下定义了一个名为 <code>--bg-color</code> 的自定属性，并设置值为红色的颜色值 <code>#f00</code>。 被body的背景色 <code>background-color</code> 引用后，则整个页面将会呈现为红色背景。</p><blockquote><p>在使用自定义属性给css样式赋值时，需要使用 <strong>var()</strong> 函数，见后文。</p></blockquote><h3 id="命名规则" tabindex="-1"><a class="header-anchor" href="#命名规则" aria-hidden="true">#</a> 命名规则</h3><p>自定义属性的的命名规则，具体的如下：</p><ul><li>可以使用数字<code>[0-9]</code>、字母<code>[a-zA-Z]</code>、下划线<code>[_]</code>和短横线<code>[-]</code>组合</li><li>可以使用中文等文字字符</li><li>不能使用 <code>$、[、^、(、%</code> 等字符</li><li>大小写敏感</li></ul><div class="language-css" data-ext="css"><pre class="language-css"><code><span class="token selector">div</span> <span class="token punctuation">{</span>
  <span class="token property">--1</span><span class="token punctuation">:</span> #0f0<span class="token punctuation">;</span>
  <span class="token property">--背景</span><span class="token punctuation">:</span> yellow<span class="token punctuation">;</span>
  <span class="token property">--Fontsize</span><span class="token punctuation">:</span> 20px<span class="token punctuation">;</span>
  <span class="token property">color</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--1<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token property">font-size</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--Fontsize<span class="token punctuation">,</span> 30px<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token property">background-color</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--背景<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><p>如上，使用数字、中文等方式定义，都能生效。</p><h3 id="值" tabindex="-1"><a class="header-anchor" href="#值" aria-hidden="true">#</a> 值</h3><p>在自定义属性声明的时候，需要给属性赋值，可以使用任意css样式属性值支持的格式。 如 <code>#000</code>、<code>12px</code>、<code>center</code>、字符串、数字等等。</p><h3 id="作用域" tabindex="-1"><a class="header-anchor" href="#作用域" aria-hidden="true">#</a> 作用域</h3><p>css自定义属性存在作用域，即它声明时候所处的css选择器。</p><ul><li>当自定义属性属性声明在某个css选择器内的时候，则该选择器的元素和它的所有子元素，都可以使用该自定义属性。</li><li>当声明在 <code>:root</code> 下的时候，则全文档范围内皆可使用。</li></ul><p><code>:root</code> 是一个伪类选择器，用来匹配文档的根元素。而在 <code>HTML</code> 中，根元素即为 <code>&lt;html&gt;</code> 元素，但 : <code>root</code> 优先级更高，其他则相同。</p><div class="language-css" data-ext="css"><pre class="language-css"><code><span class="token selector">:root</span> <span class="token punctuation">{</span>
  <span class="token property">--color</span><span class="token punctuation">:</span> red<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">body</span> <span class="token punctuation">{</span>
  <span class="token property">--bg-color</span><span class="token punctuation">:</span> #ddd<span class="token punctuation">;</span>
  <span class="token property">color</span><span class="token punctuation">:</span> --color<span class="token punctuation">;</span>
  <span class="token property">background-color</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--bg-color<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token property">width</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--width<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">/*自定义属性变量无效*/</span>
<span class="token punctuation">}</span>
<span class="token selector">body .header</span> <span class="token punctuation">{</span>
  <span class="token property">--width</span><span class="token punctuation">:</span> 1000px<span class="token punctuation">;</span>
  <span class="token property">color</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--color<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token property">background-color</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--bg-color<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token property">width</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--width<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><p>上面的示例代码，<code>:root</code> 中声明的全局变量，将可以使用在任何地方，而body中的可以被body以及<code>.header</code>引用，<strong>在.header中声明的则不能被body引用。</strong></p><h2 id="var-函数" tabindex="-1"><a class="header-anchor" href="#var-函数" aria-hidden="true">#</a> var()函数</h2><p>var()函数会返回所引用自定义属性对应的值，并被应用到相应的CSS属性上。 var()函数只能作为属性的值使用，而且是可以代替样式属性中的值的任何部分。 var()函数不能作为属性名、选择器或除属性值外的其他值，如果这样做，只会产生无效语法或无效值。</p><p>定义：<code>var(custom-property-name, value)</code>。</p><ul><li>custom-property-name 必需，自定义属性的名称。</li><li>value 可选，默认回退值。</li></ul><div class="language-css" data-ext="css"><pre class="language-css"><code><span class="token selector">div</span> <span class="token punctuation">{</span>
  <span class="token property">--1</span><span class="token punctuation">:</span> #0f0<span class="token punctuation">;</span>
  <span class="token property">--border-color</span><span class="token punctuation">:</span> yellow<span class="token punctuation">;</span>
  <span class="token property">color</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--1<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token property">border</span><span class="token punctuation">:</span> 1px solid <span class="token function">var</span><span class="token punctuation">(</span>--border-color<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><p><code>--border-color</code> 作为border属性的颜色部分被引用。</p><h3 id="默认值参数" tabindex="-1"><a class="header-anchor" href="#默认值参数" aria-hidden="true">#</a> 默认值参数</h3><p>var()函数的第二可选参数，表示默认回退值；如果该自定义属性不存在，就会使用这个默认参数值作为属性值。</p><div class="language-css" data-ext="css"><pre class="language-css"><code><span class="token selector">div</span> <span class="token punctuation">{</span>
  <span class="token property">font-size</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--Fontsize<span class="token punctuation">,</span> 30px<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><p>如上面的代码，当 <code>--Fontsize</code> 不存在时，则 <code>font-size</code> 属性的值就为 <code>30px</code>。</p><p>需要注意：<strong>只有当我们的自定义属性没有定义时，才会使用默认回退值</strong>。</p><h3 id="不同值的使用情况" tabindex="-1"><a class="header-anchor" href="#不同值的使用情况" aria-hidden="true">#</a> 不同值的使用情况</h3><p>var()函数变量在使用时，有几种特殊的情况，需要注意。</p><h4 id="用于自定义属性的值" tabindex="-1"><a class="header-anchor" href="#用于自定义属性的值" aria-hidden="true">#</a> 用于自定义属性的值</h4><p>var() 函数变量还能应用于自定义属性声明中，作为值被引用，使用方式一样。</p><div class="language-css" data-ext="css"><pre class="language-css"><code><span class="token selector">div</span> <span class="token punctuation">{</span>
  <span class="token property">--1</span><span class="token punctuation">:</span> #0f0<span class="token punctuation">;</span>
  <span class="token property">--背景</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--1<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token property">color</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--1<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token property">border</span><span class="token punctuation">:</span> 1px solid <span class="token function">var</span><span class="token punctuation">(</span>--背景<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><p><code>--背景</code> 属性使用了 <code>-1</code> 属性来进行赋值。</p><h4 id="用于字符串组合" tabindex="-1"><a class="header-anchor" href="#用于字符串组合" aria-hidden="true">#</a> 用于字符串组合</h4><p>当自定义属性的值是字符串的时候，可以与样式属性值的字符串直接拼接，多用于content属性，如下：</p><div class="language-css" data-ext="css"><pre class="language-css"><code><span class="token selector">:root</span> <span class="token punctuation">{</span>
  <span class="token property">--wait-copy</span><span class="token punctuation">:</span> <span class="token string">&#39;，请复制&#39;</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">div:after</span> <span class="token punctuation">{</span>
  <span class="token property">content</span><span class="token punctuation">:</span> <span class="token string">&#39;正文&#39;</span><span class="token function">var</span><span class="token punctuation">(</span>--wait-copy<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><p>这样就能在页面上显示拼接的 <code>content</code>：正文，请复制。</p><h4 id="用于calc-数字计算" tabindex="-1"><a class="header-anchor" href="#用于calc-数字计算" aria-hidden="true">#</a> 用于calc()数字计算</h4><p>当自定义属性的值是数字的时候，除了可以用于 <code>opacity</code>、<code>z-index</code>等使用数字的css属性以外，还可以使用calc函数进行计算处理。 如下所示：</p><div class="language-css" data-ext="css"><pre class="language-css"><code><span class="token selector">:root</span> <span class="token punctuation">{</span>
  <span class="token property">--size</span><span class="token punctuation">:</span> 5<span class="token punctuation">;</span>
  <span class="token property">--width</span><span class="token punctuation">:</span> <span class="token function">calc</span><span class="token punctuation">(</span>100px * 5<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.div</span> <span class="token punctuation">{</span>
  <span class="token property">width</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--width<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token property">font-size</span><span class="token punctuation">:</span> <span class="token function">calc</span><span class="token punctuation">(</span><span class="token function">var</span><span class="token punctuation">(</span>--size<span class="token punctuation">)</span> * 10px<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><p>可以通过calc计算改变样式属性。</p><h3 id="行内样式中的使用" tabindex="-1"><a class="header-anchor" href="#行内样式中的使用" aria-hidden="true">#</a> 行内样式中的使用</h3><p>自定义属性和一般的css属性一样，我们同样可以在元素的行内样式中使用这些属性。 如下所示：</p><div class="language-html" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token special-attr"><span class="token attr-name">style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span><span class="token value css language-css"><span class="token property">--text-color</span><span class="token punctuation">:</span> red<span class="token punctuation">;</span></span><span class="token punctuation">&quot;</span></span></span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span> <span class="token special-attr"><span class="token attr-name">style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span><span class="token value css language-css"><span class="token property">color</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--text-color<span class="token punctuation">)</span><span class="token punctuation">;</span></span><span class="token punctuation">&quot;</span></span></span><span class="token punctuation">&gt;</span></span>欢迎进入我们的网站<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>week<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>今天是星期天<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
.week {
  color: var(--text-color);
}
</code></pre></div><p>在 <code>div</code> 元素的行内样式中声明了一个颜色属性 <code>--text-color</code>，在div的子元素中，通过行内样式和类样式都可以引用生效。</p><h3 id="在javascript中读写" tabindex="-1"><a class="header-anchor" href="#在javascript中读写" aria-hidden="true">#</a> 在javascript中读写</h3><p>自定义属性变量，可以通过javascript进行读写，就能很方便的进行操作。 这里主要用到样式对象的 <code>setProperty()</code> 和 <code>getPropertyValue()</code> 方法。</p><ul><li>操作全局属性</li></ul><div class="language-css" data-ext="css"><pre class="language-css"><code><span class="token selector">:root</span> <span class="token punctuation">{</span>
  <span class="token property">--color</span><span class="token punctuation">:</span> red<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
const root = <span class="token function">getComputedStyle</span><span class="token punctuation">(</span>document.documentElement<span class="token punctuation">)</span>
// 获取全局属性值
const color1 = root.<span class="token function">getPropertyValue</span><span class="token punctuation">(</span><span class="token string">&#39;--color&#39;</span><span class="token punctuation">)</span>.<span class="token function">trim</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
// 设置属性值
document.documentElement.style.<span class="token function">setProperty</span><span class="token punctuation">(</span><span class="token string">&#39;--color&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;green&#39;</span><span class="token punctuation">)</span>
const color2 = root.<span class="token function">getPropertyValue</span><span class="token punctuation">(</span><span class="token string">&#39;--color&#39;</span><span class="token punctuation">)</span>.<span class="token function">trim</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

console.<span class="token function">log</span><span class="token punctuation">(</span>color1<span class="token punctuation">,</span> color2<span class="token punctuation">)</span> // red green

// 给元素设置样式
const body = document.<span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">&#39;body&#39;</span><span class="token punctuation">)</span>
document.<span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">&#39;body&#39;</span><span class="token punctuation">)</span>.style.backgroundColor = color2
// body的背景色将被设置为绿色
</code></pre></div><ul><li>读写元素属性</li></ul><div class="language-html" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>welc<span class="token punctuation">&quot;</span></span> <span class="token special-attr"><span class="token attr-name">style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span><span class="token value css language-css"><span class="token property">-text-pos</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span></span><span class="token punctuation">&quot;</span></span></span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>

// 获取welc元素下定义的属性值，给body设置该值
const welc = document.getElementById(&#39;welc&#39;)
const align = welc.style.getPropertyValue(&#39;--text-pos&#39;)
// welc.style.setProperty(&#39;--text-pos&#39;, &#39;left&#39;)
document.querySelector(&#39;body&#39;).style.textAlign = align
</code></pre></div><h2 id="使用-root主题切换" tabindex="-1"><a class="header-anchor" href="#使用-root主题切换" aria-hidden="true">#</a> 使用<code>:root</code>主题切换</h2><p>当我们使用:root选择器定义全局属性，就可以通过该选择器进行主题切换的工作。 这里，我们还需要引入 <code>theme</code>，结合:root选择器和js就可以较好的处理了，具体如下：</p><ul><li>定义不同主题的全局属性，如下就是定义了黑色和白色主题：</li></ul><div class="language-css" data-ext="css"><pre class="language-css"><code><span class="token selector">:root[theme=&quot;black&quot;]</span> <span class="token punctuation">{</span>
  <span class="token property">--color</span><span class="token punctuation">:</span> #000<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">:root[theme=&quot;white&quot;]</span> <span class="token punctuation">{</span>
  <span class="token property">--color</span><span class="token punctuation">:</span> #fff<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><ul><li>在web页面中使用这些自定义属性变量，略过</li><li>通过js改变theme的值，就可以切换主题，如下：</li></ul><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> setDocumentTheme <span class="token operator">=</span> <span class="token punctuation">(</span>theme <span class="token operator">=</span> <span class="token string">&#39;white&#39;</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> docElm <span class="token operator">=</span> document<span class="token punctuation">.</span>documentElement
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>docElm<span class="token punctuation">.</span><span class="token function">hasAttribute</span><span class="token punctuation">(</span><span class="token string">&#39;theme&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    docElm<span class="token punctuation">.</span><span class="token function">setAttribute</span><span class="token punctuation">(</span><span class="token string">&#39;theme&#39;</span><span class="token punctuation">,</span> theme<span class="token punctuation">)</span>
  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
    docElm<span class="token punctuation">.</span><span class="token function">removeAttribute</span><span class="token punctuation">(</span><span class="token string">&#39;theme&#39;</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><p>通过调用上面的js函数，就可以切换主题，改变web页面的UI样式。</p>`,62),c=[o];function e(l,u){return s(),a("div",null,c)}const r=n(p,[["render",e],["__file","css_val.html.vue"]]);export{r as default};
