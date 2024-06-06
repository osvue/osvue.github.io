import{_ as s,p as n,q as a,a1 as p}from"./framework-d81ad7e5.js";const e={},o=p(`<h2 id="sql根据现有表新建表" tabindex="-1"><a class="header-anchor" href="#sql根据现有表新建表" aria-hidden="true">#</a> SQL根据现有表新建表</h2><div class="language-sql" data-ext="sql"><pre class="language-sql"><code>SQLITE
<span class="token comment">-----复制表结构及数据到新表</span>
<span class="token keyword">CREATE</span> <span class="token keyword">TABLE</span> TABLE_NEW <span class="token keyword">AS</span> <span class="token keyword">SELECT</span> <span class="token operator">*</span> <span class="token keyword">FROM</span> TABLE_OLD<span class="token punctuation">;</span>
<span class="token comment">-----只复制表结构到新表</span>
<span class="token keyword">CREATE</span> <span class="token keyword">TABLE</span> TABLE_NEW <span class="token keyword">AS</span> <span class="token keyword">SELECT</span> <span class="token operator">*</span> <span class="token keyword">FROM</span> TABLE_OLD <span class="token keyword">WHERE</span> <span class="token number">1</span><span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">;</span>
 
ORACLE:
<span class="token comment">-----复制表结构及数据到新表</span>
<span class="token keyword">CREATE</span> <span class="token keyword">TABLE</span> T_NEW <span class="token keyword">AS</span> <span class="token keyword">SELECT</span> <span class="token operator">*</span> <span class="token keyword">FROM</span> TABLE_OLD<span class="token punctuation">;</span>         
<span class="token comment">-----只复制表结构到新表</span>
<span class="token keyword">CREATE</span> <span class="token keyword">TABLE</span> T_NEW <span class="token keyword">AS</span> <span class="token keyword">SELECT</span> <span class="token operator">*</span> <span class="token keyword">FROM</span> TABLE_OLD <span class="token keyword">WHERE</span> <span class="token number">1</span><span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">;</span>
 
MYSQL:
<span class="token comment">-----复制表结构及数据到新表</span>
<span class="token keyword">CREATE</span> <span class="token keyword">TABLE</span> T_NEW <span class="token keyword">SELECT</span> <span class="token operator">*</span> <span class="token keyword">FROM</span> T_OLD
<span class="token comment">-----只复制表结构到新表</span>
<span class="token keyword">CREATE</span> <span class="token keyword">TABLE</span> T_NEW <span class="token keyword">SELECT</span> <span class="token operator">*</span> <span class="token keyword">FROM</span> T_OLD <span class="token keyword">WHERE</span> <span class="token number">1</span><span class="token operator">=</span><span class="token number">2</span>
 
<span class="token comment">---无数据库实例,找的资料</span>
DB2:
<span class="token comment">-----复制表结构及数据到新表</span>
<span class="token keyword">CREATE</span> <span class="token keyword">TABLE</span> TABLE_NAME_NEW <span class="token keyword">AS</span> <span class="token punctuation">(</span><span class="token keyword">SELECT</span> <span class="token operator">*</span> <span class="token keyword">FROM</span> TABLE_NAME_OLD<span class="token punctuation">)</span> DEFINITION ONLY<span class="token punctuation">;</span>
<span class="token comment">--插入数据</span>
<span class="token keyword">INSERT</span> <span class="token keyword">INTO</span> T_NEW <span class="token punctuation">(</span><span class="token keyword">SELECT</span> <span class="token operator">*</span> <span class="token keyword">FROM</span> TABLE_NAME_OLD<span class="token punctuation">)</span><span class="token punctuation">;</span>
 
SQLSERVER :
<span class="token comment">-----复制表结构及数据到新表</span>
<span class="token keyword">SELECT</span> <span class="token operator">*</span> <span class="token keyword">INTO</span> T_NEW <span class="token keyword">FROM</span> T_OLD <span class="token punctuation">;</span>
<span class="token comment">-----只复制表结构到新表                </span>
<span class="token keyword">SELECT</span> <span class="token operator">*</span> <span class="token keyword">INTO</span> T_NEW <span class="token keyword">FROM</span> T_OLD <span class="token keyword">WHERE</span> <span class="token number">1</span><span class="token operator">=</span><span class="token number">2</span><span class="token punctuation">;</span>
</code></pre></div>`,2),t=[o];function k(c,l){return n(),a("div",null,t)}const E=s(e,[["render",k],["__file","create.html.vue"]]);export{E as default};
