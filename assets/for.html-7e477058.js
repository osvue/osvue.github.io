import{_ as n,p as s,q as a,a1 as t}from"./framework-d81ad7e5.js";const p={},o=t(`<p><code>for</code>并<code>for..in</code>默认为您提供索引，但您可以使用 arr[index]。</p><p><code>for..in</code> 也接受非数字，所以避免它。</p><p><code>forEach</code>,<code>for...of</code>直接获取元素。</p><p><code>forEach</code>也可以为您提供索引，但<code>for...of</code>不能。</p><p><code>for</code>并<code>for...of</code>考虑阵列中的孔，但其他 2 个不考虑。</p><h3 id="for" tabindex="-1"><a class="header-anchor" href="#for" aria-hidden="true">#</a> <strong>for</strong></h3><p>我是最早出现的一方遍历语句，在座的各位需称我一声爷爷。我能满足开发人员的绝大多数的需求。</p><div class="language-ini" data-ext="ini"><pre class="language-ini"><code>// 遍历数组
<span class="token key attr-name">let arr</span> <span class="token punctuation">=</span> <span class="token value attr-value">[1,2,3];</span>
<span class="token key attr-name">for(let i</span> <span class="token punctuation">=</span> <span class="token value attr-value">0;i &lt; arr.length;i++){</span>
    console.log(i) // 索引，数组下标
    console.log(arr[i]) // 数组下标所对应的元素
}

// 遍历对象
<span class="token key attr-name">let profile</span> <span class="token punctuation">=</span> <span class="token value attr-value">{name:&quot;April&quot;,nickname:&quot;二十七刻&quot;,country:&quot;China&quot;};</span>
<span class="token key attr-name">for(let i</span> <span class="token punctuation">=</span> <span class="token value attr-value">0, keys=Object.keys(profile); i &lt; keys.length;i++){</span>
    console.log(keys[i]) // 对象的键值
    console.log(profile[keys[i]]) // 对象的键对应的值
}

// 遍历字符串
<span class="token key attr-name">let str</span> <span class="token punctuation">=</span> <span class="token value attr-value">&quot;abcdef&quot;;</span>
<span class="token key attr-name">for(let i</span> <span class="token punctuation">=</span> <span class="token value attr-value">0;i &lt; str.length ;i++){</span>
    console.log(i) // 索引 字符串的下标
    console.log(str[i]) // 字符串下标所对应的元素
}

// 遍历DOM 节点
<span class="token key attr-name">let articleParagraphs</span> <span class="token punctuation">=</span> <span class="token value attr-value">document.querySelectorAll(&#39;.article &gt; p&#39;);</span>
<span class="token key attr-name">for(let i</span> <span class="token punctuation">=</span> <span class="token value attr-value">0;i&lt;articleParagraphs.length;i++){</span>
    articleParagraphs[i].classList.add(&quot;paragraph&quot;);
    // 给class名为“article”节点下的 p 标签添加一个名为“paragraph” class属性
}

</code></pre></div><h3 id="foreach" tabindex="-1"><a class="header-anchor" href="#foreach" aria-hidden="true">#</a> <strong>forEach</strong></h3><p>我是ES5版本发布的。按升序为数组中含有效值的每一项执行一次 callback 函数，那些已删除或者未初始化的项将被跳过（例如在稀疏数组上）。我是 for 循环的加强版。</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 遍历数组</span>
<span class="token keyword">let</span> arr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
arr<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token parameter">i</span> <span class="token operator">=&gt;</span> console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span><span class="token punctuation">)</span>

<span class="token comment">// logs 1</span>
<span class="token comment">// logs 2</span>
<span class="token comment">// logs 3</span>
<span class="token comment">// 直接输出了数组的元素</span>

<span class="token comment">//遍历对象</span>
<span class="token keyword">let</span> profile <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token literal-property property">name</span><span class="token operator">:</span><span class="token string">&quot;April&quot;</span><span class="token punctuation">,</span><span class="token literal-property property">nickname</span><span class="token operator">:</span><span class="token string">&quot;二十七刻&quot;</span><span class="token punctuation">,</span><span class="token literal-property property">country</span><span class="token operator">:</span><span class="token string">&quot;China&quot;</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token keyword">let</span> keys <span class="token operator">=</span> Object<span class="token punctuation">.</span><span class="token function">keys</span><span class="token punctuation">(</span>profile<span class="token punctuation">)</span><span class="token punctuation">;</span>
keys<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token parameter">i</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span> <span class="token comment">// 对象的键值</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>profile<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token comment">// 对象的键对应的值</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

</code></pre></div><h3 id="map" tabindex="-1"><a class="header-anchor" href="#map" aria-hidden="true">#</a> <strong>map</strong></h3><p>我也是ES5版本发布的，我可以创建一个新数组，新数组的结果是原数组中的每个元素都调用一次提供的函数后的返回值。</p><div class="language-ini" data-ext="ini"><pre class="language-ini"><code><span class="token key attr-name">let arr</span> <span class="token punctuation">=</span> <span class="token value attr-value">[1,2,3,4,5];</span>
<span class="token key attr-name">let res</span> <span class="token punctuation">=</span> <span class="token value attr-value">arr.map(i =&gt; i * i);</span>

console.log(res) // logs [1, 4, 9, 16, 25]

</code></pre></div><h3 id="for-in枚举" tabindex="-1"><a class="header-anchor" href="#for-in枚举" aria-hidden="true">#</a> <strong>for...in枚举</strong></h3><p>我是ES5版本发布的。以任意顺序遍历一个对象的除Symbol以外的可枚举属性。</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 遍历对象</span>
<span class="token keyword">let</span> profile <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token literal-property property">name</span><span class="token operator">:</span><span class="token string">&quot;April&quot;</span><span class="token punctuation">,</span><span class="token literal-property property">nickname</span><span class="token operator">:</span><span class="token string">&quot;二十七刻&quot;</span><span class="token punctuation">,</span><span class="token literal-property property">country</span><span class="token operator">:</span><span class="token string">&quot;China&quot;</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token keyword">in</span> profile<span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">let</span> item <span class="token operator">=</span> profile<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">;</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>item<span class="token punctuation">)</span> <span class="token comment">// 对象的键值</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span> <span class="token comment">// 对象的键对应的值</span>

<span class="token comment">// 遍历数组</span>
<span class="token keyword">let</span> arr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">&#39;a&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;b&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;c&#39;</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token keyword">in</span> arr<span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">let</span> item <span class="token operator">=</span> arr<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">;</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>item<span class="token punctuation">)</span> <span class="token comment">// 数组下标所对应的元素</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span> <span class="token comment">// 索引，数组下标</span>

<span class="token comment">// 遍历字符串</span>
<span class="token keyword">let</span> str <span class="token operator">=</span> <span class="token string">&quot;abcd&quot;</span>
<span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token keyword">in</span> str<span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">let</span> item <span class="token operator">=</span> str<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">;</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>item<span class="token punctuation">)</span> <span class="token comment">// 字符串下标所对应的元素</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span> <span class="token comment">// 索引 字符串的下标</span>
<span class="token punctuation">}</span>

</code></pre></div><h3 id="for-of迭代" tabindex="-1"><a class="header-anchor" href="#for-of迭代" aria-hidden="true">#</a> <strong>for...of迭代</strong></h3><p>我是ES6版本发布的。在可迭代对象（包括 Array，Map，Set，String，TypedArray，arguments 对象等等）上创建一个迭代循环，调用自定义迭代钩子，并为每个不同属性的值执行语句。</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 迭代数组数组</span>
<span class="token keyword">let</span> arr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">&#39;a&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;b&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;c&#39;</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">let</span> item <span class="token keyword">of</span> arr<span class="token punctuation">)</span><span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>item<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
<span class="token comment">// logs &#39;a&#39;</span>
<span class="token comment">// logs &#39;b&#39;</span>
<span class="token comment">// logs &#39;c&#39;</span>

<span class="token comment">// 迭代字符串</span>
<span class="token keyword">let</span> str <span class="token operator">=</span> <span class="token string">&quot;abc&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> value <span class="token keyword">of</span> str<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token comment">// logs &#39;a&#39;</span>
<span class="token comment">// logs &#39;b&#39;</span>
<span class="token comment">// logs &#39;c&#39;</span>

<span class="token comment">// 迭代map</span>
<span class="token keyword">let</span> iterable <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Map</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">[</span><span class="token string">&quot;a&quot;</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token string">&quot;b&quot;</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token string">&quot;c&quot;</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">]</span>
<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> entry <span class="token keyword">of</span> iterable<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>entry<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token comment">// logs [&quot;a&quot;, 1]</span>
<span class="token comment">// logs [&quot;b&quot;, 2]</span>
<span class="token comment">// logs [&quot;c&quot;, 3]</span>

<span class="token comment">// 迭代map获取键值</span>
<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> <span class="token punctuation">[</span>key<span class="token punctuation">,</span> value<span class="token punctuation">]</span> <span class="token keyword">of</span> iterable<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>key<span class="token punctuation">)</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>


<span class="token comment">// 迭代set</span>
<span class="token keyword">let</span> iterable <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Set</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span><span class="token number">4</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> value <span class="token keyword">of</span> iterable<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token comment">// logs 1</span>
<span class="token comment">// logs 2</span>
<span class="token comment">// logs 3</span>
<span class="token comment">// logs 4</span>

<span class="token comment">// 迭代 DOM 节点</span>
<span class="token keyword">let</span> articleParagraphs <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">querySelectorAll</span><span class="token punctuation">(</span><span class="token string">&#39;.article &gt; p&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> paragraph <span class="token keyword">of</span> articleParagraphs<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    paragraph<span class="token punctuation">.</span>classList<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token string">&quot;paragraph&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">// 给class名为“article”节点下的 p 标签添加一个名为“paragraph” class属性。</span>
<span class="token punctuation">}</span>

<span class="token comment">// 迭代arguments类数组对象</span>
<span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> argument <span class="token keyword">of</span> arguments<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>argument<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// logs：</span>
<span class="token comment">// 1</span>
<span class="token comment">// 2</span>
<span class="token comment">// 3</span>


<span class="token comment">// 迭代类型数组</span>
<span class="token keyword">let</span> typeArr <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Uint8Array</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">0x00</span><span class="token punctuation">,</span> <span class="token number">0xff</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> value <span class="token keyword">of</span> typeArr<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token comment">// logs：</span>
<span class="token comment">// 0</span>
<span class="token comment">// 255</span>

</code></pre></div><ul><li>for语句是最原始的循环语句。定义一个变量i(数字类型，表示数组的下标),按照一定的条件，对i进行循环累加。条件通常为循环对象的长度，当超过长度就停止循环。因为对象无法判断长度，所以搭配Object.keys()使用。</li><li>forEach ES5 提出。自称是for语句的加强版，可以发现它比for语句在写法上简单了很多。但是本质上也是数组的循环。forEach每个数组元素执行一次 callback 函数。也就是调用它的数组，因此，不会改变原数组。返回值是undefine。</li><li>map ES5 提出。给原数组中的每个元素都按顺序调用一次 callback 函数。生成一个新数组，不修改调用它的原数组本身。返回值是新的数组。</li><li>for...in ES5 提出。遍历对象上的可枚举属性，包括原型对象上的属性，且按任意顺序进行遍历，也就是顺序不固定。遍历数组时把数组的下标当作键值，此时的i是个字符串型的。它是为遍历对象属性而构建的，不建议与数组一起使用。</li><li>for...of ES6 提出。只遍历可迭代对象的数据。</li></ul><h4 id="关于跳出循环体" tabindex="-1"><a class="header-anchor" href="#关于跳出循环体" aria-hidden="true">#</a> 关于跳出循环体</h4><p>在循环中满足一定条件就跳出循环体，或者跳过不符合条件的数据继续循环其它数据。是经常会遇到的需求。常用的语句是break 与 continue。</p><p>简单的说一下二者的区别，就当复习好了。</p><ul><li>break语句是跳出当前循环，并执行当前循环之后的语句；</li><li>continue语句是终止当前循环，并继续执行下一次循环;</li></ul><p>注意：forEach 与map 是不支持跳出循环体的，其它三种方法均支持。</p><p>原理 ：查看forEach实现原理，就会理解这个问题。</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token class-name">Array</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span>forEach（callbackfn <span class="token punctuation">[</span>，thisArg<span class="token punctuation">]</span><span class="token punctuation">{</span>
    
<span class="token punctuation">}</span>

</code></pre></div><p>传入的function是这里的回调函数。在回调函数里面使用break肯定是非法的，因为break只能用于跳出循环，回调函数不是循环体。</p><p>在回调函数中使用return，只是将结果返回到上级函数，也就是这个for循环中，并没有结束for循环，所以return也是无效的。</p><p>map() 同理。</p><p>map()链式调用</p><p>map() 方法是可以链式调用的，这意味着它可以方便的结合其它方法一起使用。例如：reduce(), sort(), filter() 等。但是其它方法并不能做到这一点。forEach()的返回值是undefined，所以无法链式调用。</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 将元素乘以本身，再进行求和。</span>
<span class="token keyword">let</span> arr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token keyword">let</span> res1 <span class="token operator">=</span> arr<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token parameter">item</span> <span class="token operator">=&gt;</span> item <span class="token operator">*</span> item<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">reduce</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">total<span class="token punctuation">,</span> value</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> total <span class="token operator">+</span> value<span class="token punctuation">)</span><span class="token punctuation">;</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>res1<span class="token punctuation">)</span> <span class="token comment">// logs 55 undefined&quot;</span>

</code></pre></div><p>for...in会遍历出原型对象上的属性</p><div class="language-scss" data-ext="scss"><pre class="language-scss"><code>Object.prototype.objCustom = <span class="token function">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
Array.prototype.arrCustom = <span class="token function">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
var arr = [<span class="token string">&#39;a&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;b&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;c&#39;</span>]<span class="token punctuation">;</span>
arr.foo = &#39;hello
for <span class="token punctuation">(</span>var i in arr<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console.<span class="token function">log</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token comment">// logs</span>
<span class="token comment">// 0</span>
<span class="token comment">// 1</span>
<span class="token comment">// 2</span>
<span class="token comment">// foo</span>
<span class="token comment">// arrCustom</span>
<span class="token comment">// objCustom</span>

</code></pre></div><p>然而在实际的开发中，我们并不需要原型对象上的属性。这种情况下我们可以使用hasOwnProperty() 方法，它会返回一个布尔值，指示对象自身属性中是否具有指定的属性（也就是，是否有指定的键）。如下：</p><div class="language-scss" data-ext="scss"><pre class="language-scss"><code>Object.prototype.objCustom = <span class="token function">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
Array.prototype.arrCustom = <span class="token function">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
var arr = [<span class="token string">&#39;a&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;b&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;c&#39;</span>]<span class="token punctuation">;</span>
arr.foo = &#39;hello
for <span class="token punctuation">(</span>var i in arr<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    if <span class="token punctuation">(</span>arr.<span class="token function">hasOwnProperty</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        console.<span class="token function">log</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token comment">// logs</span>
<span class="token comment">// 0</span>
<span class="token comment">// 1</span>
<span class="token comment">// 2</span>
<span class="token comment">// foo</span>

<span class="token comment">// 可见数组本身的属性还是无法摆脱。此时建议使用 forEach</span>

</code></pre></div><p>对于纯对象的遍历，选择for..in枚举更方便；对于数组遍历，如果不需要知道索引for..of迭代更合适，因为还可以中断；如果需要知道索引，则forEach()更合适；对于其他字符串，类数组，类型数组的迭代，for..of更占上风更胜一筹。但是注意低版本浏览器的是配性。</p><ul><li><code>for &gt; for-of &gt; forEach &gt; map &gt; for-in</code></li></ul><ul><li>for 循环当然是最简单的，因为它没有任何额外的函数调用栈和上下文；</li><li>for...of只要具有Iterator接口的数据结构，都可以使用它迭代成员。它直接读取的是键值。</li><li>forEach，因为它其实比我们想象得要复杂一些，它实际上是array.forEach(function(currentValue, index, arr), thisValue)它不是普通的 for 循环的语法糖，还有诸多参数和上下文需要在执行的时候考虑进来，这里可能拖慢性能；</li><li>map() 最慢，因为它的返回值是一个等长的全新的数组，数组创建和赋值产生的性能开销很大。</li><li>for...in需要穷举对象的所有属性，包括自定义的添加的属性也能遍历到。且for...in的key是String类型，有转换过程，开销比较大。</li></ul>`,41),c=[o];function e(l,u){return s(),a("div",null,c)}const i=n(p,[["render",e],["__file","for.html.vue"]]);export{i as default};
