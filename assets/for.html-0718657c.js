import{_ as n,p as s,q as a,a1 as t}from"./framework-d81ad7e5.js";const p={},o=t(`<h3 id="简单替换for循环" tabindex="-1"><a class="header-anchor" href="#简单替换for循环" aria-hidden="true">#</a> 简单替换for循环</h3><p>它的主要语法结构如下：</p><ul><li><strong>my_list=[ 表达式 for 循环项 in 循环体 (if 条件) ]</strong></li><li><strong>表达式</strong>可以为循环项，也可以为循环项的函数或者方法</li></ul><div class="language-python" data-ext="py"><pre class="language-python"><code>name <span class="token operator">=</span> <span class="token string">&quot;Donald Trump&quot;</span>
 
<span class="token comment">#list内的for循环语法,只使用一句代码</span>
my_list <span class="token operator">=</span> <span class="token punctuation">[</span>c <span class="token keyword">for</span> c <span class="token keyword">in</span> name<span class="token punctuation">]</span>
 
<span class="token keyword">print</span><span class="token punctuation">(</span>name<span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>my_list<span class="token punctuation">)</span>



<span class="token comment">#  传统的for 循环语法是这么写的：</span>

name <span class="token operator">=</span> <span class="token string">&quot;Donald Trump&quot;</span>
 
<span class="token comment">#传统for循环语法,需要使用三句代码</span>
my_list<span class="token operator">=</span><span class="token punctuation">[</span><span class="token punctuation">]</span>
<span class="token keyword">for</span> c <span class="token keyword">in</span> name<span class="token punctuation">:</span>
    my_list<span class="token punctuation">.</span>append<span class="token punctuation">(</span>c<span class="token punctuation">)</span>
    
<span class="token keyword">print</span><span class="token punctuation">(</span>name<span class="token punctuation">)</span>   
<span class="token keyword">print</span><span class="token punctuation">(</span>my_list<span class="token punctuation">)</span>








<span class="token comment"># 代码的作用是找出二维数组array(其实是list内嵌list)每一行的最小值，同样也只使用了一句代码</span>

array <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">[</span><span class="token number">16</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">7</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
          <span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">24</span><span class="token punctuation">,</span> <span class="token number">9</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
          <span class="token punctuation">[</span><span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">12</span><span class="token punctuation">]</span><span class="token punctuation">]</span>
 
<span class="token comment">#表达式可以为循环项的函数</span>
row_min <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token builtin">min</span><span class="token punctuation">(</span>row<span class="token punctuation">)</span> <span class="token keyword">for</span> row <span class="token keyword">in</span> array <span class="token punctuation">]</span>
 
<span class="token keyword">print</span><span class="token punctuation">(</span>row_min<span class="token punctuation">)</span>


</code></pre></div><h4 id="list内的循环中使用if-条件" tabindex="-1"><a class="header-anchor" href="#list内的循环中使用if-条件" aria-hidden="true">#</a> list内的循环中使用if 条件</h4><div class="language-python" data-ext="py"><pre class="language-python"><code>names_list <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">&quot;Washington&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;Trump&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;Obama&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;bush&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;Clinton&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;Reagan&quot;</span><span class="token punctuation">]</span>
l1 <span class="token operator">=</span> <span class="token punctuation">[</span>name <span class="token keyword">for</span> name <span class="token keyword">in</span> names_list <span class="token keyword">if</span> name<span class="token punctuation">.</span>startswith<span class="token punctuation">(</span><span class="token string">&#39;W&#39;</span><span class="token punctuation">)</span><span class="token punctuation">]</span>
l2 <span class="token operator">=</span> <span class="token punctuation">[</span>name <span class="token keyword">for</span> name <span class="token keyword">in</span> names_list <span class="token keyword">if</span> name<span class="token punctuation">.</span>startswith<span class="token punctuation">(</span><span class="token string">&#39;W&#39;</span><span class="token punctuation">)</span> <span class="token keyword">or</span> <span class="token builtin">len</span><span class="token punctuation">(</span>name<span class="token punctuation">)</span> <span class="token operator">&lt;</span> <span class="token number">5</span><span class="token punctuation">]</span>
l3 <span class="token operator">=</span> <span class="token punctuation">[</span>name <span class="token keyword">for</span> name <span class="token keyword">in</span> names_list <span class="token keyword">if</span> <span class="token builtin">len</span><span class="token punctuation">(</span>name<span class="token punctuation">)</span> <span class="token operator">&lt;</span> <span class="token number">5</span> <span class="token keyword">and</span> name<span class="token punctuation">.</span>islower<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">]</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>l1<span class="token punctuation">,</span> l2<span class="token punctuation">,</span> l3<span class="token punctuation">)</span>

</code></pre></div><h3 id="更加复杂的表达式" tabindex="-1"><a class="header-anchor" href="#更加复杂的表达式" aria-hidden="true">#</a> 更加复杂的表达式</h3><div class="language-python" data-ext="py"><pre class="language-python"><code>names_list <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">&quot;washington&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;trump&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;obama&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;bush&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;clinton&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;reagan&quot;</span><span class="token punctuation">]</span>
 
<span class="token comment">#将人名首字母大写</span>
new_names <span class="token operator">=</span> <span class="token punctuation">[</span>name<span class="token punctuation">.</span>capitalize<span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">for</span> name <span class="token keyword">in</span> names_list<span class="token punctuation">]</span>
 
<span class="token keyword">print</span><span class="token punctuation">(</span>new_names<span class="token punctuation">)</span>
</code></pre></div><ul><li><strong>my_list=[ 表达式(if...else 条件) for 循环项 in 循环体 ]</strong></li></ul><div class="language-python" data-ext="py"><pre class="language-python"><code>names_list <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">&quot;Washington&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;Trump&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;Obama&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;bush&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;Clinton&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;Reagan&quot;</span><span class="token punctuation">]</span>
 
<span class="token comment">#在表达式中使用if条件</span>
new_names <span class="token operator">=</span> <span class="token punctuation">[</span>name <span class="token keyword">if</span> name<span class="token punctuation">.</span>startswith<span class="token punctuation">(</span><span class="token string">&#39;T&#39;</span><span class="token punctuation">)</span> <span class="token keyword">else</span> <span class="token string">&#39;Not President&#39;</span> <span class="token keyword">for</span> name <span class="token keyword">in</span> names_list<span class="token punctuation">]</span>
 
<span class="token keyword">print</span><span class="token punctuation">(</span>new_names<span class="token punctuation">)</span>
</code></pre></div><h3 id="嵌套for循环语法" tabindex="-1"><a class="header-anchor" href="#嵌套for循环语法" aria-hidden="true">#</a> 嵌套for循环语法</h3><div class="language-python" data-ext="py"><pre class="language-python"><code>names_list <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">&quot;Trump&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;Obama&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;Clinton&quot;</span><span class="token punctuation">]</span>
 
<span class="token comment">#双重for循环</span>
chars <span class="token operator">=</span> <span class="token punctuation">[</span>c <span class="token keyword">for</span> name <span class="token keyword">in</span> names_list <span class="token keyword">for</span> c <span class="token keyword">in</span> name<span class="token punctuation">]</span>
 
<span class="token keyword">print</span><span class="token punctuation">(</span>chars<span class="token punctuation">)</span>
</code></pre></div><h3 id="使用生成器-generator-变量来减少内存开销" tabindex="-1"><a class="header-anchor" href="#使用生成器-generator-变量来减少内存开销" aria-hidden="true">#</a> 使用生成器(Generator)变量来减少内存开销</h3><div class="language-python" data-ext="py"><pre class="language-python"><code><span class="token comment">#list变量,立即分配实际内存</span>
L1 <span class="token operator">=</span> <span class="token punctuation">[</span>x <span class="token keyword">for</span> x <span class="token keyword">in</span> <span class="token builtin">range</span><span class="token punctuation">(</span><span class="token number">1_000_000</span><span class="token punctuation">)</span><span class="token punctuation">]</span>
 
<span class="token comment">#Generator变量,不分配实际内存</span>
L2 <span class="token operator">=</span> <span class="token punctuation">(</span>x <span class="token keyword">for</span> x <span class="token keyword">in</span> <span class="token builtin">range</span><span class="token punctuation">(</span><span class="token number">1_000_000</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>L1<span class="token punctuation">.</span>__sizeof__<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>L2<span class="token punctuation">.</span>__sizeof__<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>




</code></pre></div><div class="language-python" data-ext="py"><pre class="language-python"><code><span class="token comment">#list变量</span>
L1 <span class="token operator">=</span> <span class="token punctuation">[</span> w <span class="token keyword">for</span> w <span class="token keyword">in</span> <span class="token builtin">range</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">]</span>
<span class="token keyword">for</span> i <span class="token keyword">in</span> L1<span class="token punctuation">:</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span>
 
<span class="token comment">#替换为生成器变量</span>
L2 <span class="token operator">=</span> <span class="token punctuation">(</span>w <span class="token keyword">for</span> w <span class="token keyword">in</span> <span class="token builtin">range</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token keyword">for</span> i <span class="token keyword">in</span> L2<span class="token punctuation">:</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span>
</code></pre></div>`,15),e=[o];function c(u,l){return s(),a("div",null,e)}const i=n(p,[["render",c],["__file","for.html.vue"]]);export{i as default};
