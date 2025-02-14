import{_ as s,p as n,q as a,a1 as t}from"./framework-d81ad7e5.js";const p={},e=t(`<p>1、打开mysql的命令行，将自动提交事务给关闭</p><div class="language-sql" data-ext="sql"><pre class="language-sql"><code><span class="token comment">--查看是否是自动提交 1表示开启，0表示关闭</span>
<span class="token keyword">select</span> @<span class="token variable">@autocommit</span><span class="token punctuation">;</span>
<span class="token comment">--设置关闭</span>
<span class="token keyword">set</span> autocommit <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
</code></pre></div><p>2、数据准备</p><div class="language-sql" data-ext="sql"><pre class="language-sql"><code><span class="token comment">--创建数据库</span>
<span class="token keyword">create</span> <span class="token keyword">database</span> <span class="token keyword">tran</span><span class="token punctuation">;</span>
<span class="token comment">--切换数据库 两个窗口都执行</span>
<span class="token keyword">use</span> <span class="token keyword">tran</span><span class="token punctuation">;</span>
<span class="token comment">--准备数据</span>
 <span class="token keyword">create</span> <span class="token keyword">table</span> psn<span class="token punctuation">(</span>id <span class="token keyword">int</span> <span class="token keyword">primary</span> <span class="token keyword">key</span><span class="token punctuation">,</span>name <span class="token keyword">varchar</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token keyword">engine</span><span class="token operator">=</span><span class="token keyword">innodb</span><span class="token punctuation">;</span>
<span class="token comment">--插入数据</span>
<span class="token keyword">insert</span> <span class="token keyword">into</span> psn <span class="token keyword">values</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token string">&#39;zhangsan&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">insert</span> <span class="token keyword">into</span> psn <span class="token keyword">values</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token string">&#39;lisi&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">insert</span> <span class="token keyword">into</span> psn <span class="token keyword">values</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">,</span><span class="token string">&#39;wangwu&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">commit</span><span class="token punctuation">;</span>
</code></pre></div><p>3、测试事务</p><div class="language-sql" data-ext="sql"><pre class="language-sql"><code><span class="token comment">--事务包含四个隔离级别：从上往下，隔离级别越来越高，意味着数据越来越安全</span>
<span class="token keyword">read</span> <span class="token keyword">uncommitted</span><span class="token punctuation">;</span> 	<span class="token comment">--读未提交</span>
<span class="token keyword">read</span> commited<span class="token punctuation">;</span>		<span class="token comment">--读已提交</span>
<span class="token keyword">repeatable</span> <span class="token keyword">read</span><span class="token punctuation">;</span>	<span class="token comment">--可重复读</span>
<span class="token punctuation">(</span>seariable<span class="token punctuation">)</span>			<span class="token comment">--序列化执行，串行执行</span>
<span class="token comment">--产生数据不一致的情况：</span>
脏读
不可重复读
幻读
</code></pre></div><table><thead><tr><th>隔离级别</th><th>异常情况</th><th></th><th>异常情况</th></tr></thead><tbody><tr><td>读未提交</td><td>脏读</td><td>不可重复读</td><td>幻读</td></tr><tr><td>读已提交</td><td></td><td>不可重复读</td><td>幻读</td></tr><tr><td>可重复读</td><td></td><td></td><td>幻读</td></tr><tr><td>序列化</td><td></td><td></td><td></td></tr></tbody></table><p>4、测试1：脏读 read uncommitted</p><div class="language-sql" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">set</span> <span class="token keyword">session</span> <span class="token keyword">transaction</span> <span class="token keyword">isolation</span> <span class="token keyword">level</span> <span class="token keyword">read</span> <span class="token keyword">uncommitted</span><span class="token punctuation">;</span>
A:<span class="token keyword">start</span> <span class="token keyword">transaction</span><span class="token punctuation">;</span>
A:<span class="token keyword">select</span> <span class="token operator">*</span> <span class="token keyword">from</span> psn<span class="token punctuation">;</span>
B:<span class="token keyword">start</span> <span class="token keyword">transaction</span><span class="token punctuation">;</span>
B:<span class="token keyword">select</span> <span class="token operator">*</span> <span class="token keyword">from</span> psn<span class="token punctuation">;</span>
A:<span class="token keyword">update</span> psn <span class="token keyword">set</span> name<span class="token operator">=</span><span class="token string">&#39;msb&#39;</span><span class="token punctuation">;</span>
A:selecet <span class="token operator">*</span> <span class="token keyword">from</span> psn
B:<span class="token keyword">select</span> <span class="token operator">*</span> <span class="token keyword">from</span> psn<span class="token punctuation">;</span>  <span class="token comment">--读取的结果msb。产生脏读，因为A事务并没有commit，读取到了不存在的数据</span>
A:<span class="token keyword">commit</span><span class="token punctuation">;</span>
B:<span class="token keyword">select</span> <span class="token operator">*</span> <span class="token keyword">from</span> psn<span class="token punctuation">;</span> <span class="token comment">--读取的数据是msb,因为A事务已经commit，数据永久的被修改</span>
</code></pre></div><p>5、测试2：当使用read committed的时候，就不会出现脏读的情况了，当时会出现不可重复读的问题</p><div class="language-sql" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">set</span> <span class="token keyword">session</span> <span class="token keyword">transaction</span> <span class="token keyword">isolation</span> <span class="token keyword">level</span> <span class="token keyword">read</span> <span class="token keyword">committed</span><span class="token punctuation">;</span>
A:<span class="token keyword">start</span> <span class="token keyword">transaction</span><span class="token punctuation">;</span>
A:<span class="token keyword">select</span> <span class="token operator">*</span> <span class="token keyword">from</span> psn<span class="token punctuation">;</span>
B:<span class="token keyword">start</span> <span class="token keyword">transaction</span><span class="token punctuation">;</span>
B:<span class="token keyword">select</span> <span class="token operator">*</span> <span class="token keyword">from</span> psn<span class="token punctuation">;</span>
<span class="token comment">--执行到此处的时候发现，两个窗口读取的数据是一致的</span>
A:<span class="token keyword">update</span> psn <span class="token keyword">set</span> name <span class="token operator">=</span><span class="token string">&#39;zhangsan&#39;</span> <span class="token keyword">where</span> id <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
A:<span class="token keyword">select</span> <span class="token operator">*</span> <span class="token keyword">from</span> psn<span class="token punctuation">;</span>
B:<span class="token keyword">select</span> <span class="token operator">*</span> <span class="token keyword">from</span> psn<span class="token punctuation">;</span>
<span class="token comment">--执行到此处发现两个窗口读取的数据不一致，B窗口中读取不到更新的数据</span>
A:<span class="token keyword">commit</span><span class="token punctuation">;</span>
A:<span class="token keyword">select</span> <span class="token operator">*</span> <span class="token keyword">from</span> psn<span class="token punctuation">;</span><span class="token comment">--读取到更新的数据</span>
B:<span class="token keyword">select</span> <span class="token operator">*</span> <span class="token keyword">from</span> psn<span class="token punctuation">;</span><span class="token comment">--也读取到更新的数据</span>
<span class="token comment">--发现同一个事务中多次读取数据出现不一致的情况</span>
</code></pre></div><p>6、测试3：当使用repeatable read的时候(按照上面的步骤操作)，就不会出现不可重复读的问题，但是会出现幻读的问题</p><div class="language-sql" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">set</span> <span class="token keyword">session</span> <span class="token keyword">transaction</span> <span class="token keyword">isolation</span> <span class="token keyword">level</span> <span class="token keyword">repeatable</span> <span class="token keyword">read</span><span class="token punctuation">;</span>
A:<span class="token keyword">start</span> <span class="token keyword">transaction</span><span class="token punctuation">;</span>
A:<span class="token keyword">select</span> <span class="token operator">*</span> <span class="token keyword">from</span> psn<span class="token punctuation">;</span>
B:<span class="token keyword">start</span> <span class="token keyword">transaction</span><span class="token punctuation">;</span>
B:<span class="token keyword">select</span> <span class="token operator">*</span> <span class="token keyword">from</span> psn<span class="token punctuation">;</span>
<span class="token comment">--此时两个窗口读取的数据是一致的</span>
A:<span class="token keyword">insert</span> <span class="token keyword">into</span> psn <span class="token keyword">values</span><span class="token punctuation">(</span><span class="token number">4</span><span class="token punctuation">,</span><span class="token string">&#39;sisi&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
A:<span class="token keyword">commit</span><span class="token punctuation">;</span>
A:<span class="token keyword">select</span> <span class="token operator">*</span> <span class="token keyword">from</span> psn<span class="token punctuation">;</span><span class="token comment">--读取到添加的数据</span>
B:<span class="token keyword">select</span> <span class="token operator">*</span> <span class="token keyword">from</span> psn<span class="token punctuation">;</span><span class="token comment">--读取不到添加的数据</span>
B:<span class="token keyword">insert</span> <span class="token keyword">into</span> psn <span class="token keyword">values</span><span class="token punctuation">(</span><span class="token number">4</span><span class="token punctuation">,</span><span class="token string">&#39;sisi&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">--报错，无法插入数据</span>
<span class="token comment">--此时发现读取不到数据，但是在插入的时候不允许插入，出现了幻读，设置更高级别的隔离级别即可解决</span>
</code></pre></div>`,13),o=[e];function c(k,l){return n(),a("div",null,o)}const d=s(p,[["render",c],["__file","mysqla_transtion.html.vue"]]);export{d as default};
