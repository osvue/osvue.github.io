import{_ as s,o as a,c as t,a as e}from"./app-215c512d.js";const o={};function p(c,n){return a(),t("div",null,n[0]||(n[0]=[e(`<h2 id="mysql-查询锁" tabindex="-1"><a class="header-anchor" href="#mysql-查询锁" aria-hidden="true">#</a> mysql 查询锁</h2><div class="language-sql" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">SELECT</span>
	<span class="token operator">*</span> 
<span class="token keyword">FROM</span>
	information_schema<span class="token punctuation">.</span>PROCESSLIST a<span class="token punctuation">,</span>
	information_schema<span class="token punctuation">.</span>INNODB_TRX b 
<span class="token keyword">WHERE</span>
	b<span class="token punctuation">.</span>trx_mysql_thread_id <span class="token operator">=</span> a<span class="token punctuation">.</span>id 
<span class="token keyword">ORDER</span> <span class="token keyword">BY</span>
	<span class="token number">1</span> <span class="token keyword">DESC</span><span class="token punctuation">;</span>
</code></pre></div>`,2)]))}const r=s(o,[["render",p],["__file","mysql_lock.html.vue"]]);export{r as default};
