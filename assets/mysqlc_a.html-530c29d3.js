import{_ as n,p as s,q as a,a1 as p}from"./framework-d81ad7e5.js";const t={},o=p(`<p>如果说数据是字典的话，索引就是字典的目录 mysql常用的索引有两种 B-Tree(实际上是B+Tree)，和 Hash 默认是前者（实际上InnoDB只是支持BTree）</p><div class="language-sql" data-ext="sql"><pre class="language-sql"><code><span class="token comment">-- 创建索引 删除索引：</span>
<span class="token keyword">create</span> <span class="token keyword">index</span> idx_email <span class="token keyword">on</span> student<span class="token punctuation">(</span>email<span class="token punctuation">)</span>
<span class="token keyword">drop</span> <span class="token keyword">index</span> idx_email <span class="token keyword">on</span> student

<span class="token keyword">create</span> <span class="token keyword">index</span> idx_email <span class="token keyword">using</span> <span class="token keyword">hash</span> <span class="token keyword">on</span> student<span class="token punctuation">(</span>email<span class="token punctuation">)</span> <span class="token comment">#还是BTree</span>
</code></pre></div><p>预先准备好数据</p><div class="language-sql" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">SET</span> FOREIGN_KEY_CHECKS<span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">;</span>
<span class="token keyword">DROP</span> <span class="token keyword">TABLE</span> <span class="token keyword">IF</span> <span class="token keyword">EXISTS</span> <span class="token identifier"><span class="token punctuation">\`</span>itdragon_order_list<span class="token punctuation">\`</span></span><span class="token punctuation">;</span>
<span class="token keyword">CREATE</span> <span class="token keyword">TABLE</span> <span class="token identifier"><span class="token punctuation">\`</span>itdragon_order_list<span class="token punctuation">\`</span></span> <span class="token punctuation">(</span>
  <span class="token identifier"><span class="token punctuation">\`</span>id<span class="token punctuation">\`</span></span> <span class="token keyword">bigint</span><span class="token punctuation">(</span><span class="token number">11</span><span class="token punctuation">)</span> <span class="token operator">NOT</span> <span class="token boolean">NULL</span> <span class="token keyword">AUTO_INCREMENT</span> <span class="token keyword">COMMENT</span> <span class="token string">&#39;主键id，默认自增长&#39;</span><span class="token punctuation">,</span>
  <span class="token identifier"><span class="token punctuation">\`</span>transaction_id<span class="token punctuation">\`</span></span> <span class="token keyword">varchar</span><span class="token punctuation">(</span><span class="token number">150</span><span class="token punctuation">)</span> <span class="token keyword">DEFAULT</span> <span class="token boolean">NULL</span> <span class="token keyword">COMMENT</span> <span class="token string">&#39;交易号&#39;</span><span class="token punctuation">,</span>
  <span class="token identifier"><span class="token punctuation">\`</span>gross<span class="token punctuation">\`</span></span> <span class="token keyword">double</span> <span class="token keyword">DEFAULT</span> <span class="token boolean">NULL</span> <span class="token keyword">COMMENT</span> <span class="token string">&#39;毛收入(RMB)&#39;</span><span class="token punctuation">,</span>
  <span class="token identifier"><span class="token punctuation">\`</span>net<span class="token punctuation">\`</span></span> <span class="token keyword">double</span> <span class="token keyword">DEFAULT</span> <span class="token boolean">NULL</span> <span class="token keyword">COMMENT</span> <span class="token string">&#39;净收入(RMB)&#39;</span><span class="token punctuation">,</span>
  <span class="token identifier"><span class="token punctuation">\`</span>stock_id<span class="token punctuation">\`</span></span> <span class="token keyword">int</span><span class="token punctuation">(</span><span class="token number">11</span><span class="token punctuation">)</span> <span class="token keyword">DEFAULT</span> <span class="token boolean">NULL</span> <span class="token keyword">COMMENT</span> <span class="token string">&#39;发货仓库&#39;</span><span class="token punctuation">,</span>
  <span class="token identifier"><span class="token punctuation">\`</span>order_status<span class="token punctuation">\`</span></span> <span class="token keyword">int</span><span class="token punctuation">(</span><span class="token number">11</span><span class="token punctuation">)</span> <span class="token keyword">DEFAULT</span> <span class="token boolean">NULL</span> <span class="token keyword">COMMENT</span> <span class="token string">&#39;订单状态&#39;</span><span class="token punctuation">,</span>
  <span class="token identifier"><span class="token punctuation">\`</span>descript<span class="token punctuation">\`</span></span> <span class="token keyword">varchar</span><span class="token punctuation">(</span><span class="token number">255</span><span class="token punctuation">)</span> <span class="token keyword">DEFAULT</span> <span class="token boolean">NULL</span> <span class="token keyword">COMMENT</span> <span class="token string">&#39;客服备注&#39;</span><span class="token punctuation">,</span>
  <span class="token identifier"><span class="token punctuation">\`</span>finance_descript<span class="token punctuation">\`</span></span> <span class="token keyword">varchar</span><span class="token punctuation">(</span><span class="token number">255</span><span class="token punctuation">)</span> <span class="token keyword">DEFAULT</span> <span class="token boolean">NULL</span> <span class="token keyword">COMMENT</span> <span class="token string">&#39;财务备注&#39;</span><span class="token punctuation">,</span>
  <span class="token identifier"><span class="token punctuation">\`</span>create_type<span class="token punctuation">\`</span></span> <span class="token keyword">varchar</span><span class="token punctuation">(</span><span class="token number">100</span><span class="token punctuation">)</span> <span class="token keyword">DEFAULT</span> <span class="token boolean">NULL</span> <span class="token keyword">COMMENT</span> <span class="token string">&#39;创建类型&#39;</span><span class="token punctuation">,</span>
  <span class="token identifier"><span class="token punctuation">\`</span>order_level<span class="token punctuation">\`</span></span> <span class="token keyword">int</span><span class="token punctuation">(</span><span class="token number">11</span><span class="token punctuation">)</span> <span class="token keyword">DEFAULT</span> <span class="token boolean">NULL</span> <span class="token keyword">COMMENT</span> <span class="token string">&#39;订单级别&#39;</span><span class="token punctuation">,</span>
  <span class="token identifier"><span class="token punctuation">\`</span>input_user<span class="token punctuation">\`</span></span> <span class="token keyword">varchar</span><span class="token punctuation">(</span><span class="token number">20</span><span class="token punctuation">)</span> <span class="token keyword">DEFAULT</span> <span class="token boolean">NULL</span> <span class="token keyword">COMMENT</span> <span class="token string">&#39;录入人&#39;</span><span class="token punctuation">,</span>
  <span class="token identifier"><span class="token punctuation">\`</span>input_date<span class="token punctuation">\`</span></span> <span class="token keyword">varchar</span><span class="token punctuation">(</span><span class="token number">20</span><span class="token punctuation">)</span> <span class="token keyword">DEFAULT</span> <span class="token boolean">NULL</span> <span class="token keyword">COMMENT</span> <span class="token string">&#39;录入时间&#39;</span><span class="token punctuation">,</span>
  <span class="token keyword">PRIMARY</span> <span class="token keyword">KEY</span> <span class="token punctuation">(</span><span class="token identifier"><span class="token punctuation">\`</span>id<span class="token punctuation">\`</span></span><span class="token punctuation">)</span>
<span class="token punctuation">)</span> <span class="token keyword">ENGINE</span><span class="token operator">=</span><span class="token keyword">InnoDB</span> <span class="token keyword">AUTO_INCREMENT</span><span class="token operator">=</span><span class="token number">10003</span> <span class="token keyword">DEFAULT</span> <span class="token keyword">CHARSET</span><span class="token operator">=</span>utf8<span class="token punctuation">;</span>

<span class="token keyword">INSERT</span> <span class="token keyword">INTO</span> itdragon_order_list <span class="token keyword">VALUES</span> <span class="token punctuation">(</span><span class="token string">&#39;10000&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;81X97310V32236260E&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;6.6&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;6.13&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;1&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;10&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;ok&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;ok&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;auto&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;1&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;itdragon&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;2017-08-28 17:01:49&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">INSERT</span> <span class="token keyword">INTO</span> itdragon_order_list <span class="token keyword">VALUES</span> <span class="token punctuation">(</span><span class="token string">&#39;10001&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;61525478BB371361Q&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;18.88&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;18.79&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;1&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;10&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;ok&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;ok&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;auto&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;1&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;itdragon&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;2017-08-18 17:01:50&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">INSERT</span> <span class="token keyword">INTO</span> itdragon_order_list <span class="token keyword">VALUES</span> <span class="token punctuation">(</span><span class="token string">&#39;10002&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;5RT64180WE555861V&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;20.18&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;20.17&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;1&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;10&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;ok&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;ok&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;auto&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;1&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;itdragon&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;2017-09-08 17:01:49&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

</code></pre></div><p>逐步开始进行优化：</p><p>第一个案例：</p><div class="language-sql" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">select</span> <span class="token operator">*</span> <span class="token keyword">from</span> itdragon_order_list <span class="token keyword">where</span> transaction_id <span class="token operator">=</span> <span class="token string">&quot;81X97310V32236260E&quot;</span><span class="token punctuation">;</span>
<span class="token comment">--通过查看执行计划发现type=all,需要进行全表扫描</span>
<span class="token keyword">explain</span> <span class="token keyword">select</span> <span class="token operator">*</span> <span class="token keyword">from</span> itdragon_order_list <span class="token keyword">where</span> transaction_id <span class="token operator">=</span> <span class="token string">&quot;81X97310V32236260E&quot;</span><span class="token punctuation">;</span>

<span class="token comment">--优化一、为transaction_id创建唯一索引</span>
 <span class="token keyword">create</span> <span class="token keyword">unique</span> <span class="token keyword">index</span> idx_order_transaID <span class="token keyword">on</span> itdragon_order_list <span class="token punctuation">(</span>transaction_id<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">--当创建索引之后，唯一索引对应的type是const，通过索引一次就可以找到结果，普通索引对应的type是ref，表示非唯一性索引赛秒，找到值还要进行扫描，直到将索引文件扫描完为止，显而易见，const的性能要高于ref</span>
 <span class="token keyword">explain</span> <span class="token keyword">select</span> <span class="token operator">*</span> <span class="token keyword">from</span> itdragon_order_list <span class="token keyword">where</span> transaction_id <span class="token operator">=</span> <span class="token string">&quot;81X97310V32236260E&quot;</span><span class="token punctuation">;</span>
 
 <span class="token comment">--优化二、使用覆盖索引，查询的结果变成 transaction_id,当extra出现using index,表示使用了覆盖索引</span>
 <span class="token keyword">explain</span> <span class="token keyword">select</span> transaction_id <span class="token keyword">from</span> itdragon_order_list <span class="token keyword">where</span> transaction_id <span class="token operator">=</span> <span class="token string">&quot;81X97310V32236260E&quot;</span><span class="token punctuation">;</span>
</code></pre></div><p>第二个案例</p><div class="language-sql" data-ext="sql"><pre class="language-sql"><code><span class="token comment">--创建复合索引</span>
<span class="token keyword">create</span> <span class="token keyword">index</span> idx_order_levelDate <span class="token keyword">on</span> itdragon_order_list <span class="token punctuation">(</span>order_level<span class="token punctuation">,</span>input_date<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">--创建索引之后发现跟没有创建索引一样，都是全表扫描，都是文件排序</span>
<span class="token keyword">explain</span> <span class="token keyword">select</span> <span class="token operator">*</span> <span class="token keyword">from</span> itdragon_order_list <span class="token keyword">order</span> <span class="token keyword">by</span> order_level<span class="token punctuation">,</span>input_date<span class="token punctuation">;</span>

<span class="token comment">--可以使用force index强制指定索引</span>
<span class="token keyword">explain</span> <span class="token keyword">select</span> <span class="token operator">*</span> <span class="token keyword">from</span> itdragon_order_list <span class="token keyword">force</span> <span class="token keyword">index</span><span class="token punctuation">(</span>idx_order_levelDate<span class="token punctuation">)</span> <span class="token keyword">order</span> <span class="token keyword">by</span> order_level<span class="token punctuation">,</span>input_date<span class="token punctuation">;</span>
<span class="token comment">--其实给订单排序意义不大，给订单级别添加索引意义也不大，因此可以先确定order_level的值，然后再给input_date排序</span>
<span class="token keyword">explain</span> <span class="token keyword">select</span> <span class="token operator">*</span> <span class="token keyword">from</span> itdragon_order_list <span class="token keyword">where</span> order_level<span class="token operator">=</span><span class="token number">3</span> <span class="token keyword">order</span> <span class="token keyword">by</span> input_date<span class="token punctuation">;</span>
</code></pre></div>`,9),e=[o];function c(k,l){return s(),a("div",null,e)}const i=n(t,[["render",c],["__file","mysqlc_a.html.vue"]]);export{i as default};
