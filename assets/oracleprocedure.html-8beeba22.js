import{_ as n,p as s,q as a,a1 as e}from"./framework-d81ad7e5.js";const p={},t=e(`<h2 id="存储示例" tabindex="-1"><a class="header-anchor" href="#存储示例" aria-hidden="true">#</a> 存储示例</h2><div class="language-sql" data-ext="sql"><pre class="language-sql"><code>
<span class="token keyword">declare</span> 
  i number :<span class="token operator">=</span><span class="token number">10</span><span class="token punctuation">;</span>
<span class="token keyword">begin</span>
  <span class="token keyword">if</span>  i <span class="token operator">&gt;</span> <span class="token number">10</span>  <span class="token keyword">then</span>
    dbms_output<span class="token punctuation">.</span>put_line<span class="token punctuation">(</span><span class="token string">&#39;你好世界&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    elsif i <span class="token operator">&lt;=</span><span class="token number">10</span> <span class="token keyword">then</span>
      dbms_output<span class="token punctuation">.</span>put_line<span class="token punctuation">(</span><span class="token string">&#39;你好世界sdfsdf&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token keyword">end</span> <span class="token keyword">if</span><span class="token punctuation">;</span>
<span class="token keyword">end</span><span class="token punctuation">;</span>

<span class="token keyword">select</span> <span class="token operator">*</span> <span class="token keyword">from</span> scott<span class="token punctuation">.</span>emp

<span class="token keyword">declare</span> 
 a number <span class="token punctuation">;</span>
<span class="token keyword">begin</span>
  <span class="token keyword">for</span>  a <span class="token operator">in</span> reverse <span class="token number">1.</span><span class="token number">.10</span> <span class="token keyword">loop</span>
    dbms_output<span class="token punctuation">.</span>put_line<span class="token punctuation">(</span>a<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">end</span> <span class="token keyword">loop</span><span class="token punctuation">;</span>
<span class="token keyword">end</span><span class="token punctuation">;</span>

</code></pre></div><h2 id="存储过程" tabindex="-1"><a class="header-anchor" href="#存储过程" aria-hidden="true">#</a> 存储过程</h2><div class="language-SQL" data-ext="SQL"><pre class="language-SQL"><code>
create or replace procedure proc_sal (vempno in number , vempsal in number)
is 
vsal emp.sal%type;
begin 
  select sal into vsal from emp where empno = vempno;
  dbms_output.put_line(vsal);
  update emp set sal = sal+vempsal where empno = vempno;
  dbms_output.put_line(&#39;涨薪后&#39;||vsal);
  commit;
end;
--调用
call proc_sal(7369,10);

</code></pre></div><div class="language-sql" data-ext="sql"><pre class="language-sql"><code><span class="token comment">-- 定义</span>
<span class="token keyword">create</span> <span class="token operator">or</span> <span class="token keyword">replace</span> <span class="token keyword">procedure</span> proname <span class="token punctuation">(</span>tmp <span class="token operator">in</span> varchar2<span class="token punctuation">(</span><span class="token number">20</span><span class="token punctuation">)</span> <span class="token punctuation">,</span> sout <span class="token keyword">out</span> number<span class="token punctuation">)</span>

<span class="token operator">is</span> 
<span class="token comment">--定义变量</span>
<span class="token keyword">begin</span>
  <span class="token comment">--书写逻辑</span>
<span class="token keyword">end</span><span class="token punctuation">;</span>

<span class="token comment">-- 调用</span>
<span class="token keyword">declare</span>

<span class="token keyword">begin</span>
    proc_sal<span class="token punctuation">(</span><span class="token number">7369</span><span class="token punctuation">,</span><span class="token number">20</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">end</span><span class="token punctuation">;</span>
</code></pre></div>`,5),o=[t];function c(l,r){return s(),a("div",null,o)}const k=n(p,[["render",c],["__file","oracleprocedure.html.vue"]]);export{k as default};
