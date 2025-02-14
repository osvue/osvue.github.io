import{_ as n,p as s,q as a,a1 as e}from"./framework-d81ad7e5.js";const p={},o=e(`<h2 id="oracle" tabindex="-1"><a class="header-anchor" href="#oracle" aria-hidden="true">#</a> oracle</h2><ul><li>用作日期转换：</li></ul><div class="language-sql" data-ext="sql"><pre class="language-sql"><code>to_char<span class="token punctuation">(</span><span class="token keyword">date</span><span class="token punctuation">,</span><span class="token string">&#39;格式&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">select</span> to_date<span class="token punctuation">(</span><span class="token string">&#39;2005-01-01 &#39;</span><span class="token punctuation">,</span><span class="token string">&#39;yyyy-MM-dd&#39;</span><span class="token punctuation">)</span> <span class="token keyword">from</span> dual<span class="token punctuation">;</span>
<span class="token keyword">select</span> to_char<span class="token punctuation">(</span>sysdate<span class="token punctuation">,</span><span class="token string">&#39;yyyy-MM-dd HH24:mi:ss&#39;</span><span class="token punctuation">)</span> <span class="token keyword">from</span> dual<span class="token punctuation">;</span>
</code></pre></div><h2 id="plsql" tabindex="-1"><a class="header-anchor" href="#plsql" aria-hidden="true">#</a> plsql</h2><div class="language-sql" data-ext="sql"><pre class="language-sql"><code>  <span class="token keyword">declare</span>
<span class="token comment">--声明变量</span>
变量名 变量类型<span class="token punctuation">;</span>
变量名 变量类型 :<span class="token operator">=</span> 初始值<span class="token punctuation">;</span>
    vsal emp<span class="token punctuation">.</span>sal<span class="token operator">%</span><span class="token keyword">type</span><span class="token punctuation">;</span>  <span class="token comment">--引用型的变量  </span>
    vrow emp<span class="token operator">%</span>rowtype<span class="token punctuation">;</span>   <span class="token comment">--声明记录型变量          </span>
<span class="token keyword">begin</span>
<span class="token comment">--业务逻辑</span>
<span class="token keyword">end</span><span class="token punctuation">;</span>

 dbms_output<span class="token punctuation">.</span>put_line<span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre></div><h2 id="pl条件判断" tabindex="-1"><a class="header-anchor" href="#pl条件判断" aria-hidden="true">#</a> PL条件判断</h2><div class="language-sql" data-ext="sql"><pre class="language-sql"><code>     <span class="token keyword">if</span> <span class="token keyword">then</span>
     
     elsif <span class="token keyword">then</span>
       
     <span class="token keyword">else</span>
     
     <span class="token keyword">end</span> <span class="token keyword">if</span><span class="token punctuation">;</span>
</code></pre></div><h2 id="循环操作" tabindex="-1"><a class="header-anchor" href="#循环操作" aria-hidden="true">#</a> 循环操作</h2><div class="language-sql" data-ext="sql"><pre class="language-sql"><code>  <span class="token keyword">while</span> 循环
      <span class="token keyword">while</span> 条件 <span class="token keyword">loop</span>
      <span class="token keyword">end</span> <span class="token keyword">loop</span><span class="token punctuation">;</span>
  <span class="token keyword">for</span>循环
      <span class="token keyword">for</span> 变量  <span class="token operator">in</span> <span class="token punctuation">[</span>reverse<span class="token punctuation">]</span> 起始值<span class="token punctuation">.</span><span class="token punctuation">.</span>结束值 <span class="token keyword">loop</span>
      <span class="token keyword">end</span> <span class="token keyword">loop</span><span class="token punctuation">;</span>

  <span class="token keyword">loop</span>循环  
      <span class="token keyword">loop</span>
        <span class="token keyword">exit</span> <span class="token keyword">when</span> 条件
      <span class="token keyword">end</span> <span class="token keyword">loop</span><span class="token punctuation">;</span>
</code></pre></div>`,9),t=[o];function c(l,k){return s(),a("div",null,t)}const d=n(p,[["render",c],["__file","oracle.html.vue"]]);export{d as default};
