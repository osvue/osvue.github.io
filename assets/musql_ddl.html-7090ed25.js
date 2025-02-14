import{_ as s,p as a,q as n,a1 as e}from"./framework-d81ad7e5.js";const t={},p=e(`<h2 id="_1-sql分类" tabindex="-1"><a class="header-anchor" href="#_1-sql分类" aria-hidden="true">#</a> <strong>1.SQL分类</strong></h2><ul><li>DDL（Data Definition Language）语句：数据定义语句。</li><li>用途：是对<strong>数据库对象</strong>（数据库、表、列、索引等）进行创建、删除、修改等。</li><li>常用关键字：create、drop、alter等。</li><li>DML（Data Manipulation Language）语句：数据操纵语句。</li><li>用途：用于添加、修改、删除和查询<strong>数据库记录</strong>，并检查数据完整性。</li><li>常用关键字：insert、update、delete、select等。</li><li>DCL（Data Control Language）语句：数据控制语句。</li><li>用途：控制数据库、表、字段、用户的<strong>访问权限和安全级别</strong>。</li><li>常用关键字：grant、revoke 等；</li></ul><h2 id="_2-ddl语句" tabindex="-1"><a class="header-anchor" href="#_2-ddl语句" aria-hidden="true">#</a> <strong>2.DDL语句</strong></h2><p>DDL语句是用于操作数据库对象的，其中数据库对象包含数据库本身（database）、表（table）、列（column）、索引（index）、约束（constraint）、视图（view）、触发器（trigger）、存储过程（StoredProcedure）和函数（function）。</p><p>在此只讲解数据库（database）和库表（table）。</p><p>为什么一直都在中文后加上括号英文说明呢？因为sql 语句要用，先混个眼熟。</p><p>全程命令操作，让注意力更专注于指令输入和结果输出。</p><p><strong>系统库：</strong></p><ul><li>每个用户都可以看到自己的 information_schema：存储系统数据库对象信息，包含了用户表信息、列信息、权限信息、字符集信息、分区信息等等。</li><li>普通用户看不到 performance_schema：存储系统性能相关的动态参数表</li><li>普通用户看不到 sys：基于information_schema 和 performance_schema之上，封装了一层更加易于调优和诊断的系统视图（系统层的视图）</li><li>普通用户看不到 mysql：存储系统的用户权限信息</li></ul><ul><li><strong>查询建库SQL语句</strong></li></ul><div class="language-sql" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">show</span> <span class="token keyword">create</span> <span class="token keyword">database</span> mydb \\G<span class="token punctuation">;</span>
</code></pre></div><h3 id="ddl之操作表" tabindex="-1"><a class="header-anchor" href="#ddl之操作表" aria-hidden="true">#</a> DDL之操作表</h3><p><strong>1）创建数据库表</strong></p><div class="language-sql" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">create</span> <span class="token keyword">table</span> tablename<span class="token punctuation">(</span>  列名 数据类型 约束<span class="token punctuation">,</span>  列名 数据类型 约束<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><p>创建person表</p><div class="language-sql" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">create</span> <span class="token keyword">table</span> person<span class="token punctuation">(</span> id <span class="token keyword">int</span> <span class="token keyword">primary</span> <span class="token keyword">key</span><span class="token punctuation">,</span>name <span class="token keyword">varchar</span><span class="token punctuation">(</span><span class="token number">30</span><span class="token punctuation">)</span><span class="token punctuation">,</span>age <span class="token keyword">int</span> <span class="token keyword">default</span> <span class="token number">0</span> <span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><p><strong>2）查看表设计</strong></p><div class="language-sql" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">desc</span> person<span class="token punctuation">;</span>
</code></pre></div><p><strong>3）查看建表SQL语句</strong></p><p>查看建库和建表SQL 语句都是相类似的，查询的数据库对象不同而已。</p><p><strong><code>&quot;\\G&quot;</code></strong> 选项的含义是按照字段竖向排列，为了更好阅读查询结果。</p><div class="language-sql" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">show</span> <span class="token keyword">create</span> <span class="token keyword">table</span> person \\G<span class="token punctuation">;</span>
</code></pre></div><p><strong>4）修改表名</strong></p><ul><li>关键字<strong>rename</strong></li></ul><div class="language-sql" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">alter</span> <span class="token keyword">table</span> 旧表名 <span class="token keyword">rename</span> 新表名<span class="token punctuation">;</span>
</code></pre></div><p><strong>5） 删除表</strong></p><div class="language-sql" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">drop</span> <span class="token keyword">table</span> people<span class="token punctuation">;</span>
</code></pre></div><p><strong>6）修改表字段</strong></p><div class="language-sql" data-ext="sql"><pre class="language-sql"><code><span class="token comment">--修改表字段类型  </span>
<span class="token keyword">alter</span> <span class="token keyword">table</span> 表名 <span class="token keyword">modify</span> 列名 列的新类型<span class="token punctuation">;</span>

<span class="token comment">--增加表字段  </span>
<span class="token keyword">alter</span> <span class="token keyword">table</span> 表名 <span class="token keyword">add</span> <span class="token keyword">column</span> 列名 列的类型<span class="token punctuation">;</span>

<span class="token comment">--删除表字段  </span>
<span class="token keyword">alter</span> <span class="token keyword">table</span> 表名 <span class="token keyword">drop</span> <span class="token keyword">column</span> 列名<span class="token punctuation">;</span>

<span class="token comment">--修改字段名  </span>
<span class="token keyword">alter</span> <span class="token keyword">table</span> 表名 change 旧列名 新列名 列的类型<span class="token punctuation">;</span>


<span class="token comment">--修改字段排列顺序  在增加表字段或修改表字段后加入：</span>
<span class="token comment">--first 或 after 字段名  如：</span>
<span class="token keyword">alter</span> <span class="token keyword">table</span> 表名 <span class="token keyword">add</span> <span class="token keyword">column</span> 列名 列的类型 <span class="token keyword">after</span> 列名<span class="token number">2</span><span class="token punctuation">;</span>  
<span class="token comment">--如：</span>
<span class="token keyword">alter</span> <span class="token keyword">table</span> 表名 change 旧列名 新列名 列的类型 <span class="token keyword">first</span><span class="token punctuation">;</span>

</code></pre></div><h3 id="ddl之操作索引" tabindex="-1"><a class="header-anchor" href="#ddl之操作索引" aria-hidden="true">#</a> DDL之操作索引</h3><p>索引是对数据库里加了索引的数据预先进行排序,就像书的目录,可以优化查询速度,但是会降低增删改速度,占用磁盘空间。</p><p><strong>1）添加索引</strong></p><p>用于建表时创建索引</p><div class="language-sql" data-ext="sql"><pre class="language-sql"><code><span class="token comment">//create只能添加这两种索引;</span>
<span class="token keyword">CREATE</span> <span class="token keyword">INDEX</span> index_name <span class="token keyword">ON</span> table_name <span class="token punctuation">(</span>column_list<span class="token punctuation">)</span><span class="token keyword">CREATE</span> <span class="token keyword">UNIQUE</span> <span class="token keyword">INDEX</span> index_name <span class="token keyword">ON</span> table_name <span class="token punctuation">(</span>column_list<span class="token punctuation">)</span>
</code></pre></div><p>用于表建好后创建索引（常用）</p><div class="language-sql" data-ext="sql"><pre class="language-sql"><code><span class="token comment">--增加主键索引：不允许出现相同的值  </span>
<span class="token keyword">alter</span> <span class="token keyword">table</span> tab_name <span class="token keyword">add</span> <span class="token keyword">primary</span> <span class="token keyword">key</span> <span class="token punctuation">(</span>column_list<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">--增加唯一索引：不可以出现相同的值，可以有NULL值  </span>
<span class="token keyword">alter</span> <span class="token keyword">table</span> tab_name <span class="token keyword">add</span> <span class="token keyword">unique</span> <span class="token punctuation">(</span>column_list<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">--增加普通索引：允许出现相同的索引内容  </span>
<span class="token keyword">alter</span> <span class="token keyword">table</span> tab_name <span class="token keyword">add</span> <span class="token keyword">index</span> index_name<span class="token punctuation">(</span>column_list<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">--增加联合索引：将多个字段建到一个索引里，列值的组合必须唯一  </span>
<span class="token keyword">alter</span> <span class="token keyword">table</span> tab_name <span class="token keyword">add</span> <span class="token keyword">index</span> index_name <span class="token punctuation">(</span><span class="token keyword">column</span><span class="token punctuation">,</span><span class="token keyword">column</span><span class="token punctuation">,</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><p><strong>2）查看索引</strong></p><div class="language-sql" data-ext="sql"><pre class="language-sql"><code><span class="token comment">--查看表 tab_name 的所有索引信息（如：索引是否唯一，是否允许为null，索引存储的数据类型等信息）</span>
<span class="token keyword">show</span> <span class="token keyword">index</span> <span class="token keyword">from</span> tab_name<span class="token punctuation">;</span>
</code></pre></div><p><strong>3）删除索引</strong></p><div class="language-sql" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">alter</span> <span class="token keyword">table</span> tab_name <span class="token keyword">drop</span> <span class="token keyword">index</span> index_name<span class="token punctuation">;</span><span class="token keyword">alter</span> <span class="token keyword">table</span> tab_name <span class="token keyword">drop</span> <span class="token keyword">primary</span> <span class="token keyword">key</span><span class="token punctuation">;</span>
</code></pre></div>`,40),o=[p];function l(c,r){return a(),n("div",null,o)}const d=s(t,[["render",l],["__file","musql_ddl.html.vue"]]);export{d as default};
