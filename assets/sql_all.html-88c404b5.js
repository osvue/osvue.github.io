import{_ as s,p as a,q as n,a1 as e}from"./framework-d81ad7e5.js";const o={},p=e(`<h3 id="常用的sql" tabindex="-1"><a class="header-anchor" href="#常用的sql" aria-hidden="true">#</a> 常用的sql</h3><h4 id="增加行列号" tabindex="-1"><a class="header-anchor" href="#增加行列号" aria-hidden="true">#</a> 增加行列号</h4><div class="language-sql" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">SELECT</span> 
	<span class="token variable">@row</span> :<span class="token operator">=</span> <span class="token variable">@row</span> <span class="token operator">+</span> <span class="token number">1</span> <span class="token keyword">as</span> <span class="token keyword">row</span><span class="token punctuation">,</span> 
	t<span class="token punctuation">.</span><span class="token operator">*</span>  
<span class="token keyword">FROM</span> some_table t<span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token keyword">SELECT</span> <span class="token variable">@row</span> :<span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">)</span> r


<span class="token comment">-- 定义一个变量@row，初始值为零，利用它与待查询的表关联，通过迭代加1，</span>
<span class="token comment">-- 计算出每一条记录的编号。下面以一张表查询结果为例，看看实际的效果。</span>
<span class="token keyword">SELECT</span>
	<span class="token variable">@row</span> :<span class="token operator">=</span> <span class="token variable">@row</span> <span class="token operator">+</span> <span class="token number">1</span> <span class="token keyword">as</span> 行号<span class="token punctuation">,</span>
	zdt<span class="token punctuation">.</span><span class="token operator">*</span>
<span class="token keyword">FROM</span> zdt<span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token keyword">SELECT</span> <span class="token variable">@row</span> :<span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">)</span> t
<span class="token keyword">WHERE</span> <span class="token variable">@row</span> <span class="token operator">&lt;</span> <span class="token number">8</span>

</code></pre></div>`,3),t=[p];function c(l,r){return a(),n("div",null,t)}const i=s(o,[["render",c],["__file","sql_all.html.vue"]]);export{i as default};
