import{_ as n,p as s,q as a,a1 as p}from"./framework-d81ad7e5.js";const t={},o=p(`<h2 id="list-列表" tabindex="-1"><a class="header-anchor" href="#list-列表" aria-hidden="true">#</a> list 列表</h2><ul><li><code>list()</code></li></ul><h3 id="list-add" tabindex="-1"><a class="header-anchor" href="#list-add" aria-hidden="true">#</a> list_add</h3><div class="language-python" data-ext="py"><pre class="language-python"><code><span class="token comment"># 使用append()方法添加元素</span>
my_list <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">]</span>
my_list<span class="token punctuation">.</span>append<span class="token punctuation">(</span><span class="token number">4</span><span class="token punctuation">)</span>  <span class="token comment"># 添加元素4到列表末尾</span>
 
<span class="token comment"># 使用切片操作添加多个元素</span>
my_list <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">]</span>
my_list <span class="token operator">+=</span> <span class="token punctuation">[</span><span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">6</span><span class="token punctuation">]</span>  <span class="token comment"># 添加元素[4, 5, 6]到列表末尾</span>

<span class="token comment"># insert(): 在列表指定位置插入一个元素。接受两个参数：插入位置的索引和要插入的元素。</span>
 
fruits <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">&quot;apple&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;banana&quot;</span><span class="token punctuation">]</span>
fruits<span class="token punctuation">.</span>insert<span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token string">&quot;orange&quot;</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>fruits<span class="token punctuation">)</span>
 
<span class="token punctuation">[</span><span class="token string">&quot;apple&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;orange&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;banana&quot;</span><span class="token punctuation">]</span>

<span class="token comment"># extend(): 将一个列表（或其他可迭代对象）的所有元素添加到另一个列表的末尾。</span>
</code></pre></div><h3 id="list-delete" tabindex="-1"><a class="header-anchor" href="#list-delete" aria-hidden="true">#</a> list_delete</h3><ul><li>remove(): 删除列表中第一个匹配的元素。如果元素不存在，则抛出 ValueError</li><li>pop(): 删除并返回列表中指定索引处的元素。如果未提供索引，则删除并返回列表中的最后一个元素。</li><li>del 语句：删除列表中的一个或多个元素。</li></ul><div class="language-python" data-ext="py"><pre class="language-python"><code><span class="token comment"># 使用del语句删除元素</span>
my_list <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">]</span>
<span class="token keyword">del</span> my_list<span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span>  <span class="token comment"># 删除索引为2的元素，即删除元素3</span>
 
<span class="token comment"># 使用remove()方法删除元素</span>
my_list <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">]</span>
my_list<span class="token punctuation">.</span>remove<span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">)</span>  <span class="token comment"># 删除值为3的元素</span>
 
<span class="token comment"># 使用pop()方法删除元素</span>
my_list <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">]</span>
my_list<span class="token punctuation">.</span>pop<span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span>  <span class="token comment"># 删除索引为2的元素，即删除元素3，并返回被删除的元素</span>
</code></pre></div><h3 id="list-update" tabindex="-1"><a class="header-anchor" href="#list-update" aria-hidden="true">#</a> list_update</h3><div class="language-python" data-ext="py"><pre class="language-python"><code>
<span class="token comment"># 要修改列表中的元素，可以使用索引直接为其分配一个新值。</span>

fruits <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">&quot;apple&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;banana&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;orange&quot;</span><span class="token punctuation">]</span>
fruits<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">&quot;grape&quot;</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>fruits<span class="token punctuation">)</span>

<span class="token punctuation">[</span><span class="token string">&quot;apple&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;grape&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;orange&quot;</span><span class="token punctuation">]</span>

访问元素

<span class="token comment"># 要访问列表中的元素，可以使用索引。正索引从 0 开始，负索引从 -1 开始。</span>

fruits <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">&quot;apple&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;banana&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;orange&quot;</span><span class="token punctuation">]</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>fruits<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>fruits<span class="token punctuation">[</span><span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span>

</code></pre></div><h3 id="list-find" tabindex="-1"><a class="header-anchor" href="#list-find" aria-hidden="true">#</a> list_find</h3><ul><li>使用索引值来查找元素。 Python列表的索引值从0开始，可以使用列表名加上索引值来访问列表中的元素</li></ul><ul><li><p>使用列表的index()方法来查找元素的索引值。列表的index()方法可以返回指定元素在列表中第一次出现的索引值。</p></li><li><p>使用in关键字来判断元素是否在列表中。可以使用in关键字来判断一个元素是否包含在列表中，并返回True或False。</p></li></ul><div class="language-python" data-ext="py"><pre class="language-python"><code>
my_list <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">]</span>
element <span class="token operator">=</span> my_list<span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>element<span class="token punctuation">)</span>  <span class="token comment"># 输出结果为3</span>



my_list <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">]</span>
<span class="token keyword">if</span> <span class="token number">3</span> <span class="token keyword">in</span> my_list<span class="token punctuation">:</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;元素3在列表中&quot;</span><span class="token punctuation">)</span>
<span class="token keyword">else</span><span class="token punctuation">:</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;元素3不在列表中&quot;</span><span class="token punctuation">)</span>


my_list <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">]</span>
index <span class="token operator">=</span> my_list<span class="token punctuation">.</span>index<span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>index<span class="token punctuation">)</span>  <span class="token comment"># 输出结果为2</span>
</code></pre></div><h2 id="dict" tabindex="-1"><a class="header-anchor" href="#dict" aria-hidden="true">#</a> dict</h2><ul><li><p><code>dict({k:v,k:v})</code></p></li><li><p>clear() 用于清空字典中所有元素（键-值对），对一个字典执行 clear() 方法之后，该字典就会变成一个空字典。</p></li><li><p>get() 用于返回指定键的值，也就是根据键来获取值</p></li><li><p>items() 获取字典中的所有键-值对，一般情况下可以将结果转化为列表再进行后续处理。</p></li></ul><ul><li>keys() 返回一个字典所有的键。</li></ul><ul><li><p>values() 返回一个字典所有的值。</p></li><li><p>pop() 返回指定键对应的值，并在原字典中<strong>删除这个键-值对</strong>。</p></li><li><p>popitem() 删除字典中的最后一对键和值。</p></li><li><p>setdefault() 和 get() 类似, 但如果键不存在于字典中，将会添加键并将值设为default。</p></li><li><p>update() 字典更新，将字典dict_var2 的键-值对更新到dict_var1 里</p></li><li><p>copy() 用于返回一个字典的浅拷贝。</p></li></ul><div class="language-python" data-ext="py"><pre class="language-python"><code>dict_var <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token number">1</span><span class="token punctuation">:</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">:</span> <span class="token number">3</span><span class="token punctuation">}</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>dict_var<span class="token punctuation">)</span>
dict_var<span class="token punctuation">.</span>clear<span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>dict_var<span class="token punctuation">)</span>



dict_var <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token number">1</span><span class="token punctuation">:</span> <span class="token number">2</span><span class="token punctuation">}</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>dict_var<span class="token punctuation">.</span>get<span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>dict_var<span class="token punctuation">.</span>get<span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">,</span> <span class="token string">&quot;没有这个值&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>

<span class="token comment"># 在键不存在的情况下，返回 None，也可以指定返回值。</span>

dict_var <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token number">1</span><span class="token punctuation">:</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">:</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">:</span> <span class="token number">4</span><span class="token punctuation">}</span>
result <span class="token operator">=</span> dict_var<span class="token punctuation">.</span>items<span class="token punctuation">(</span><span class="token punctuation">)</span>
list_var <span class="token operator">=</span> <span class="token builtin">list</span><span class="token punctuation">(</span>result<span class="token punctuation">)</span>  <span class="token comment"># 转换为列表类型</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>list_var<span class="token punctuation">)</span>


dict_var <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token number">1</span><span class="token punctuation">:</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">:</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">:</span> <span class="token number">4</span><span class="token punctuation">}</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>dict_var<span class="token punctuation">.</span>pop<span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">)</span>  <span class="token comment"># 返回2对应的值</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>dict_var<span class="token punctuation">)</span>



dict_var <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token number">1</span><span class="token punctuation">:</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">:</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">:</span> <span class="token number">4</span><span class="token punctuation">}</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>dict_var<span class="token punctuation">.</span>popitem<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>  
<span class="token keyword">print</span><span class="token punctuation">(</span>dict_var<span class="token punctuation">)</span>



dict_var <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token number">1</span><span class="token punctuation">:</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">:</span> <span class="token number">3</span><span class="token punctuation">}</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>dict_var<span class="token punctuation">.</span>setdefault<span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>dict_var<span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>dict_var<span class="token punctuation">.</span>setdefault<span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>dict_var<span class="token punctuation">)</span>

dict_var1 <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token number">1</span><span class="token punctuation">:</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">:</span> <span class="token number">3</span><span class="token punctuation">}</span>
dict_var2 <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token number">3</span><span class="token punctuation">:</span> <span class="token number">4</span><span class="token punctuation">}</span>
dict_var1<span class="token punctuation">.</span>update<span class="token punctuation">(</span>dict_var2<span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>dict_var1<span class="token punctuation">)</span>


</code></pre></div><h3 id="增加元素" tabindex="-1"><a class="header-anchor" href="#增加元素" aria-hidden="true">#</a> 增加元素</h3><ul><li><p>说明：中括号指定key，赋值一个value，key不存在，则是添加元素（如果key已存在，则是修改key对应的value）</p></li><li><p>使用update（）方法，参数为字典对象</p></li></ul><p><code>book_dict.update({&quot;country&quot;: &quot;china&quot;}) </code> 说明：使用dict的update（）方法,为其传入一个新的dict对象，key不存在则是添加元素！（如果这个新的dict对象中的key已经在当前的字典对象中存在了，则会覆盖掉key对应的value）</p><ul><li>使用update（）方法，参数为关键字参数</li></ul><p><code>book_dict.update(temp = &quot;无语中&quot;, help = &quot;帮助&quot;)</code> 说明：同样使用dict的update方法，但传入的是关键字参数，key不存在则是添加元素（key存在则是修改value）</p><p>注意：关键字参数形式，key对象只能是字符串对象</p><ul><li>使用update（）方法，参数为字典解包方式</li></ul><div class="language-python" data-ext="py"><pre class="language-python"><code>
my_temp_dict <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token string">&quot;name&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;王员外&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;age&quot;</span><span class="token punctuation">:</span><span class="token number">18</span><span class="token punctuation">}</span>
book_dict<span class="token punctuation">.</span>update<span class="token punctuation">(</span><span class="token operator">**</span>my_temp_dict<span class="token punctuation">)</span>
<span class="token comment"># 等同于</span>
 
book_dict<span class="token punctuation">.</span>update<span class="token punctuation">(</span>name<span class="token operator">=</span><span class="token string">&quot;王员外&quot;</span><span class="token punctuation">,</span>age<span class="token operator">=</span><span class="token number">18</span><span class="token punctuation">)</span> 
<span class="token comment"># 注意：字典是完全无序的映射集合</span>



<span class="token comment"># 创建一个字典</span>
my_dict <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token string">&quot;key1&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;value1&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;key2&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;value2&quot;</span><span class="token punctuation">}</span>
 
<span class="token comment"># 增加一个元素</span>
my_dict<span class="token punctuation">[</span><span class="token string">&quot;key3&quot;</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">&quot;value3&quot;</span>
 
<span class="token keyword">print</span><span class="token punctuation">(</span>my_dict<span class="token punctuation">)</span>
</code></pre></div><h2 id="turple" tabindex="-1"><a class="header-anchor" href="#turple" aria-hidden="true">#</a> turple</h2>`,27),e=[o];function c(u,l){return s(),a("div",null,e)}const k=n(t,[["render",c],["__file","crud.html.vue"]]);export{k as default};
