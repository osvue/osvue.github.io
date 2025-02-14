import{_ as a,p as n,q as s,a1 as t}from"./framework-d81ad7e5.js";const p={},e=t(`<h2 id="事务" tabindex="-1"><a class="header-anchor" href="#事务" aria-hidden="true">#</a> 事务</h2><h4 id="事务是数据库操作的基本单元-一组操作要么都成功-要么都失败" tabindex="-1"><a class="header-anchor" href="#事务是数据库操作的基本单元-一组操作要么都成功-要么都失败" aria-hidden="true">#</a> 事务是数据库操作的基本单元,一组操作要么都成功,要么都失败.</h4><h4 id="事务的四个特性-acid" tabindex="-1"><a class="header-anchor" href="#事务的四个特性-acid" aria-hidden="true">#</a> 事务的四个特性(ACID)</h4><ul><li>原子性</li><li>一致性</li><li>隔离性</li><li>持久性</li></ul><h4 id="事务的一些基本情况" tabindex="-1"><a class="header-anchor" href="#事务的一些基本情况" aria-hidden="true">#</a> 事务的一些基本情况</h4><ol><li>事务添加到Service层</li><li>在Spring中进行事务管理操作,有两种方式编程式(不使用)和声明式事务管理(使用)</li><li>声明式事务管理有两种实现方式,一种是注解方式,一种是xml方式</li><li>Spring中声明式事务管理,底层使用AOP原理</li><li>Spring事务API</li><li>提供一个接口,代表事务管理器,这个接口针对不同的框架提供不同的实现类</li></ol><h2 id="事务的声明-相关参数和xml配合注解使用" tabindex="-1"><a class="header-anchor" href="#事务的声明-相关参数和xml配合注解使用" aria-hidden="true">#</a> 事务的声明(相关参数和xml配合注解使用)</h2><h4 id="创建事务管理器" tabindex="-1"><a class="header-anchor" href="#创建事务管理器" aria-hidden="true">#</a> 创建事务管理器</h4><div class="language-xml" data-ext="xml"><pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>bean</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>transactionManager<span class="token punctuation">&quot;</span></span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>org.springframework.jdbc.datasource.DataSourceTransactionManager<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
  <span class="token comment">&lt;!--注入数据源--&gt;</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>property</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>dataSource<span class="token punctuation">&quot;</span></span> <span class="token attr-name">ref</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>dataSource<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>property</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>bean</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><h4 id="开启事务注解" tabindex="-1"><a class="header-anchor" href="#开启事务注解" aria-hidden="true">#</a> 开启事务注解$</h4><ol><li>引入名称空间</li></ol><p><code>xmlns:tx=&quot;http://www.springframework.org/shema/tx&quot;</code></p><ol start="2"><li>开启事务注解</li></ol><div class="language-xml" data-ext="xml"><pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token namespace">tx:</span>annotation-driven</span> <span class="token attr-name">transaction-manager</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>transactionManager<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token namespace">tx:</span>annotation-driven</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><ol start="3"><li>在servicel类或者方法上添加事务注解@Transactional 如果放在类上面,表示类中所有方法添加事务 如果放在方法上面,只表示当前方法添加事务</li></ol><div class="language-java" data-ext="java"><pre class="language-java"><code><span class="token annotation punctuation">@Service</span>
<span class="token annotation punctuation">@Transactional</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">UserService</span><span class="token punctuation">{</span>
     <span class="token comment">//...</span>
<span class="token punctuation">}</span> 
</code></pre></div><div class="language-tex" data-ext="tex"><pre class="language-tex"><code>@Transactional的相关参数:
propagation 事务传播行为
ioslation 事务隔离级别
timeout 超时时间,事务在一定时间内(秒为单位)要提交,超时则回滚,默认值-1,表示不超时
readOnly 是否只读,表示只能进行查询, 默认为false,表示可增删改查
rollbackFor 回滚 , 设置出现哪些异常进行回滚
noRollbackFor 不会滚 , 设置出现哪些异常不进行回滚 
</code></pre></div><h2 id="propagation-事务传播行为" tabindex="-1"><a class="header-anchor" href="#propagation-事务传播行为" aria-hidden="true">#</a> propagation 事务传播行为</h2><div class="language-java" data-ext="java"><pre class="language-java"><code><span class="token comment">//现在假设有两个方法,update()和add(),</span>

<span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">update</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span><span class="token punctuation">}</span>
<span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">add</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span> 
   <span class="token function">update</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><ol><li><p><strong>REQUIRED</strong> (重点,默认) (如果有事务在允许,当前的方法就在这个事务内运行,否则,就启动一个新的事务,并在自己的事务内运行) 如果add本身有事务,调用update后,update使用当前事务 如果add本身没有事务,调用update后,创建新事务</p></li><li><p><strong>REQUIRED_NEW</strong> (当前的方法必须启动新事务,并在它自己的事务内运行,如果有事务正在运行,应该将它挂起) 使用add方法调用update后,无论add是否有事务,都会创建新的事务</p></li><li><p><strong>SUPPORTS</strong> (如果有事务在运行,当前方法就这这个事务内运行,否则它可以不运行这事务中)</p></li><li><p><strong>NOT_SUPPORTED</strong>(当前方法不应该运行在事务中,如果有事务,它将挂起)</p></li><li><p><strong>MANDATORY</strong>(当前方法必须运行在事务内部,如果没有正在运行的事务,就抛出异常)</p></li><li><p><strong>NEVER</strong>(当前方法不运行在事务内部,如果有正在运行的事务,就抛出异常)</p></li><li><p><strong>NESTED</strong>(如果有事务在运行,当前方法就应该在这个事务的嵌套事务内运行,否则,就启动一个新的事务,并在它自己的事务内运行)</p></li></ol><h2 id="ioslation-事务隔离级别" tabindex="-1"><a class="header-anchor" href="#ioslation-事务隔离级别" aria-hidden="true">#</a> ioslation 事务隔离级别</h2><p>有三个读问题:脏读,不可重复读,幻读</p><ol><li>脏读: 一个 未提交 事务读到另一个 未提交 事务的数据</li><li>不可重复读: 一个 未提交 事务读到另一个 提交 事务 修改的 数据</li><li>幻读: 一个 未提交 事务读到另一个 提交 事务的 添加的 数据</li></ol><p>为了解决读的问题,就有了4个隔离级别</p><ol><li>READ UNCOMMITTED(读未提交) : 3个问题都没解决</li><li>READ COMMITTED(读已提交) :解决脏读</li><li>REREATABLE READ(可重复读) :解决脏读,不可重复读 ,mysql默认级别</li><li>SERIALIZABLE(串行化) : 都解决</li></ol>`,25),o=[e];function l(c,i){return n(),s("div",null,o)}const u=a(p,[["render",l],["__file","spring01_tx.html.vue"]]);export{u as default};
