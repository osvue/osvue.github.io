import{_ as a,p as e,q as s,a1 as n}from"./framework-d81ad7e5.js";const o={},p=n(`<h3 id="磁盘预读" tabindex="-1"><a class="header-anchor" href="#磁盘预读" aria-hidden="true">#</a> 磁盘预读：</h3><ul><li><p>磁盘跟内存在进行交互的时候，有一个最基本的逻辑单位，称之为页，</p></li><li><p>也叫做<strong>datapage</strong>，页的大小跟操作系统相关，一般是4k或者8k，我们在进行数据读取的时候，一般会读取页的整数倍，</p><ul><li>例如：innodb存储引擎中每次默认读取16kb</li></ul></li></ul><h3 id="索引" tabindex="-1"><a class="header-anchor" href="#索引" aria-hidden="true">#</a> 索引</h3><p>提高查询效率</p><ul><li>数据持久化存储在磁盘中，没有办法直接把全量的数据一次性读取到内存，因此需要进行分块读取，每次读取一部分</li></ul><div class="language-tex" data-ext="tex"><pre class="language-tex"><code>k:查询的列值
v:文件名，偏移量，当前行记录的长度
</code></pre></div><p>减少io量</p><p>减少io次数</p><ul><li>一个表可以创建多少个索引？ 很多个</li><li>一个索引对应一颗B+树，还是所有的索引对应一颗B+树？ 一个索引对应一颗B+树</li><li>我们知道在B+树的叶子节点中存储实际的数据，那么当一张表中存在多个索引的时候，数据存储几份？ 1份</li><li>如果是一份的话，那么其他索引的叶子节点存储什么信息呢？ mysql的官方解释确实叫做<strong>primarykey</strong>，但是这个东西不能直接翻译成主键，有问题</li></ul><h3 id="聚簇、非聚簇索引" tabindex="-1"><a class="header-anchor" href="#聚簇、非聚簇索引" aria-hidden="true">#</a> 聚簇、非聚簇索引</h3><ul><li>在mysql的innodb存储引擎中，每一条记录的插入必须要跟某一个索引值绑定在一起，如果表中有主键，那么数据跟主键存储在一起，如果没有主键，那么会选择唯一键进行存储，如果没有唯一键，那么mysql会生成6字节的rowid进行存储</li></ul><ul><li><p>也就是说：mysql的数据存储只有一份，那么跟数据绑定存储的索引称之为聚簇索引，而没有跟数据绑定存储的称之为非聚簇索引</p></li><li><p><code>id,name,age,gender:id主键，name普通索引</code><strong>id是聚簇，name是非聚簇</strong></p></li></ul><h3 id="回表" tabindex="-1"><a class="header-anchor" href="#回表" aria-hidden="true">#</a> 回表</h3><p><code>id，name，age，gender，address</code><code>id主键，name普通索引</code></p><p><code>select * from table where name=&#39;zhangsan&#39;;</code> 查找过程：先根据name的值在name的B+树上查找与之匹配的记录，找到的值是id，然后根据id再去id的b+树上查找整个行记录，这个过程称之为回表</p><p>效率低，不推荐使用，很多情况下sql用到了索引但是查询慢就是回表的问题，应该尽量避免回表</p><h3 id="索引覆盖" tabindex="-1"><a class="header-anchor" href="#索引覆盖" aria-hidden="true">#</a> 索引覆盖</h3><p><code>id，name，age，gender，address</code><code>id主键，name普通索引</code></p><p><code>select id,name，age from table where name=&#39;zhangsan&#39;;</code> 查找过程：直接根据name的值去name的B+树上找到与之匹配的记录即可，也就是说索引节点的信息中包含了所有要查询的列的时候，不需要进行回表查询，就叫做索引覆盖</p><p>索引覆盖效率高，推荐使用</p><h3 id="最左匹配" tabindex="-1"><a class="header-anchor" href="#最左匹配" aria-hidden="true">#</a> 最左匹配</h3><div class="language-sql" data-ext="sql"><pre class="language-sql"><code>id，name，age，gender，address
id主键，name，age组合索引

<span class="token keyword">select</span> <span class="token operator">*</span> <span class="token keyword">from</span> <span class="token keyword">table</span> <span class="token keyword">where</span> name<span class="token operator">=</span><span class="token string">&#39;zhangsan&#39;</span> <span class="token operator">and</span> age <span class="token operator">=</span><span class="token number">20</span><span class="token punctuation">;</span>
<span class="token keyword">select</span> <span class="token operator">*</span> <span class="token keyword">from</span> <span class="token keyword">table</span> <span class="token keyword">where</span> name<span class="token operator">=</span><span class="token string">&#39;zhangsan&#39;</span> <span class="token punctuation">;</span>
<span class="token keyword">select</span> <span class="token operator">*</span> <span class="token keyword">from</span> <span class="token keyword">table</span> <span class="token keyword">where</span> age <span class="token operator">=</span><span class="token number">20</span><span class="token punctuation">;</span>
<span class="token keyword">select</span> <span class="token operator">*</span> <span class="token keyword">from</span> <span class="token keyword">table</span> <span class="token keyword">where</span> age <span class="token operator">=</span><span class="token number">20</span> <span class="token operator">and</span> name<span class="token operator">=</span><span class="token string">&#39;zhangsan&#39;</span><span class="token punctuation">;</span><span class="token punctuation">(</span>优化器会调整条件的顺序<span class="token punctuation">)</span>


</code></pre></div>`,22),t=[p];function r(l,d){return e(),s("div",null,t)}const i=a(o,[["render",r],["__file","mysqlc_a_i.html.vue"]]);export{i as default};