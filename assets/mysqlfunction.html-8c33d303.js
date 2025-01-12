import{_ as n,p as s,q as a,a1 as e}from"./framework-d81ad7e5.js";const t={},p=e(`<h2 id="函数" tabindex="-1"><a class="header-anchor" href="#函数" aria-hidden="true">#</a> 函数</h2><ul><li>函数存储着一系列sql语句，调用函数就是一次性执行这些语句。所以函数可以降低语句重复。</li><li>但注意的是函数注重返回值，不注重执行过程，所以一些语句无法执行。所以函数并不是单纯的sql语句集合</li><li>函数与存储过程的区别：<strong>函数只会返回一个值</strong>，不允许返回一个结果集。函数强调返回值，所以函数不允许返回多个值的情况，即使是查询语句</li></ul><h2 id="函数的创建" tabindex="-1"><a class="header-anchor" href="#函数的创建" aria-hidden="true">#</a> 函数的创建</h2><div class="language-sql" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">create</span> <span class="token keyword">function</span> 函数名<span class="token punctuation">(</span><span class="token punctuation">[</span>参数列表<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token keyword">returns</span> 数据类型
<span class="token keyword">begin</span>
 <span class="token keyword">sql</span>语句<span class="token punctuation">;</span>
 <span class="token keyword">return</span> 值<span class="token punctuation">;</span>
<span class="token keyword">end</span><span class="token punctuation">;</span>
</code></pre></div><ul><li><ul><li>参数列表的格式是： 变量名 数据类型</li></ul></li></ul><div class="language-sql" data-ext="sql"><pre class="language-sql"><code><span class="token comment">-- 最简单的仅有一条sql的函数</span>
<span class="token keyword">create</span> <span class="token keyword">function</span> myselect2<span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">returns</span> <span class="token keyword">int</span> <span class="token keyword">return</span> <span class="token number">666</span><span class="token punctuation">;</span>
<span class="token keyword">select</span> myselect2<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">-- 调用函数</span>

<span class="token comment">--</span>
<span class="token keyword">create</span> <span class="token keyword">function</span> myselect3<span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">returns</span> <span class="token keyword">int</span>
<span class="token keyword">begin</span> 
    <span class="token keyword">declare</span> c <span class="token keyword">int</span><span class="token punctuation">;</span>
    <span class="token keyword">select</span> id <span class="token keyword">from</span> class <span class="token keyword">where</span> cname<span class="token operator">=</span><span class="token string">&quot;python&quot;</span> <span class="token keyword">into</span> c<span class="token punctuation">;</span>
    <span class="token keyword">return</span> c<span class="token punctuation">;</span>
<span class="token keyword">end</span><span class="token punctuation">;</span>
<span class="token keyword">select</span> myselect3<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">-- 带传参的函数</span>
<span class="token keyword">create</span> <span class="token keyword">function</span> myselect5<span class="token punctuation">(</span>name <span class="token keyword">varchar</span><span class="token punctuation">(</span><span class="token number">15</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token keyword">returns</span> <span class="token keyword">int</span>
<span class="token keyword">begin</span> 
    <span class="token keyword">declare</span> c <span class="token keyword">int</span><span class="token punctuation">;</span>
    <span class="token keyword">select</span> id <span class="token keyword">from</span> class <span class="token keyword">where</span> cname<span class="token operator">=</span>name <span class="token keyword">into</span> c<span class="token punctuation">;</span>
    <span class="token keyword">return</span> c<span class="token punctuation">;</span>
<span class="token keyword">end</span><span class="token punctuation">;</span>
<span class="token keyword">select</span> myselect5<span class="token punctuation">(</span><span class="token string">&quot;python&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><h2 id="函数的调用" tabindex="-1"><a class="header-anchor" href="#函数的调用" aria-hidden="true">#</a> 函数的调用</h2><h2 id="函数的查看" tabindex="-1"><a class="header-anchor" href="#函数的查看" aria-hidden="true">#</a> 函数的查看</h2><h2 id="函数的修改" tabindex="-1"><a class="header-anchor" href="#函数的修改" aria-hidden="true">#</a> 函数的修改</h2><h2 id="函数的删除" tabindex="-1"><a class="header-anchor" href="#函数的删除" aria-hidden="true">#</a> 函数的删除</h2>`,10),o=[p];function c(l,k){return s(),a("div",null,o)}const u=n(t,[["render",c],["__file","mysqlfunction.html.vue"]]);export{u as default};
