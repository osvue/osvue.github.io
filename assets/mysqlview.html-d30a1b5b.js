import{_ as a,p as s,q as n,a1 as e}from"./framework-d81ad7e5.js";const t={},o=e(`<h2 id="view" tabindex="-1"><a class="header-anchor" href="#view" aria-hidden="true">#</a> view</h2><div class="language-text" data-ext="text"><pre class="language-text"><code>视图是一个虚拟表，是sql的查询结果，其内容由查询定义。同真实的表一样，
视图包含一系列带有名称的列和行数据，在使用视图时动态生成。视图的数据变化会影响到基表，
基表的数据变化也会影响到视图[insert update delete ] ; 
创建视图需要create view 权限，并且对于查询涉及的列有select权限；
使用create or replace 或者 alter修改视图，那么还需要改视图的drop权限。
</code></pre></div><h2 id="视图的基本使用" tabindex="-1"><a class="header-anchor" href="#视图的基本使用" aria-hidden="true">#</a> 视图的基本使用</h2><h3 id="如何创建视图-基本语法" tabindex="-1"><a class="header-anchor" href="#如何创建视图-基本语法" aria-hidden="true">#</a> 如何创建视图(基本语法):</h3><div class="language-sql" data-ext="sql"><pre class="language-sql"><code><span class="token comment">--第一个中括号里代表的就是创建视图是的算法属性，它允许我们控制mysql在创建视图时使用的机制，并且mysql提供了三种算法：MERGE，TEMPTABLE和UNDEFINED</span>
<span class="token comment">-- CREATE VIEW语句创建视图，先来看下语法结构：　</span>
　
<span class="token keyword">CREATE</span> 
   <span class="token punctuation">[</span><span class="token keyword">ALGORITHM</span> <span class="token operator">=</span> {<span class="token keyword">MERGE</span>  <span class="token operator">|</span> <span class="token keyword">TEMPTABLE</span> <span class="token operator">|</span> <span class="token keyword">UNDEFINED</span>}<span class="token punctuation">]</span>
<span class="token keyword">VIEW</span> <span class="token punctuation">[</span>database_name<span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token punctuation">[</span>view_name<span class="token punctuation">]</span> 
<span class="token keyword">AS</span>
<span class="token punctuation">[</span><span class="token keyword">SELECT</span>  statement<span class="token punctuation">]</span>
</code></pre></div><ul><li><p>使用<strong>MERGE</strong>算法，mysql首先将输入查询与定义视图的select语句组合成单个查询。 然后mysql执行组合查询返回结果集。 如果select语句包含集合函数(如min，max，sum，count，avg等)或distinct，group by，havaing，limit，union，union all，子查询，则不允许使用MERGE算法。 如果select语句无引用表，则也不允许使用MERGE算法。 如果不允许MERGE算法，mysql将算法更改为UNDEFINED。我们要注意，将视图定义中的输入查询和查询组合成一个查询称为视图分辨率。</p></li><li><p>使用<strong>TEMPTABLE</strong>算法，mysql首先根据定义视图的SELECT语句创建一个临时表，然后针对该临时表执行输入查询。因为mysql必须创建临时表来存储结果集并将数据从基表移动到临时表，所以TEMPTABLE算法的效率比MERGE算法效率低。 另外，使用TEMPTABLE算法的视图是不可更新的。</p></li><li><p>当我们创建视图而不指定显式算法时，<strong>UNDEFINED</strong>是默认算法。 UNDEFINED算法使mysql可以选择使用MERGE或TEMPTABLE算法。mysql优先使用MERGE算法进行TEMPTABLE算法，因为MERGE算法效率更高</p></li></ul><p>然后就是view后面的词组了，它就是名称的意思，在数据库中，视图和表共享相同的命名空间，因此视图和表不能具有相同的名称。 另外，视图的名称必须遵循表的命名规则。</p><p>最后就是SELECT语句了。在SELECT语句中，可以从数据库中存在的任何表或视图查询数据，同时SELECT语句必须遵循以下几个规则</p><ol><li><strong>SELECT语句可以在where 语句中包含子查询，但FROM子句中的不能包含子查询</strong></li><li><strong>SELECT语句不能引用任何变量，包括局部变量，用户变量和会话变量</strong></li><li>SELECT语句不能引用准备语句的参数</li><li><strong>在mysql5.7.7之前版本，是不能在SELECT语句的FROM子句中使用子查询来定义视图的</strong></li></ol><h2 id="demo" tabindex="-1"><a class="header-anchor" href="#demo" aria-hidden="true">#</a> demo</h2><h4 id="尝试基于orderdetails表来创建一个表示每个订单的总销售额的视图" tabindex="-1"><a class="header-anchor" href="#尝试基于orderdetails表来创建一个表示每个订单的总销售额的视图" aria-hidden="true">#</a> 尝试基于orderDetails表来创建一个表示每个订单的总销售额的视图：</h4><div class="language-sql" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">CREATE</span> <span class="token keyword">VIEW</span> SalePerOrder <span class="token keyword">AS</span>
    <span class="token keyword">SELECT</span> 
        orderNumber<span class="token punctuation">,</span> <span class="token function">SUM</span><span class="token punctuation">(</span>quantityOrdered <span class="token operator">*</span> priceEach<span class="token punctuation">)</span> total
    <span class="token keyword">FROM</span>
        orderDetails
    <span class="token keyword">GROUP</span> <span class="token keyword">by</span> orderNumber
    <span class="token keyword">ORDER</span> <span class="token keyword">BY</span> total <span class="token keyword">DESC</span><span class="token punctuation">;</span>
</code></pre></div><h4 id="show-tables命令来查看示例数据库-中的所有表-还会看到salesperorder视图也显示在表的列表中" tabindex="-1"><a class="header-anchor" href="#show-tables命令来查看示例数据库-中的所有表-还会看到salesperorder视图也显示在表的列表中" aria-hidden="true">#</a> SHOW TABLES命令来查看示例数据库 中的所有表，还会看到SalesPerOrder视图也显示在表的列表中</h4><ul><li><ul><li>这是因为视图和表共享相同的命名空间。要知道哪个对象是视图或表，就得使用SHOW FULL TABLES命令</li></ul></li><li><ul><li>结果集中的table_type列指定哪个对象是视图，哪个对象是一个表(基表)。如上所示，saleperorder对应table_type列的值为：VIEW</li></ul></li></ul><h4 id="基于另一个视图创建一个视图" tabindex="-1"><a class="header-anchor" href="#基于另一个视图创建一个视图" aria-hidden="true">#</a> 基于另一个视图创建一个视图</h4><ul><li><ul><li>，比如，根据SalesPerOrder视图创建名为大销售订单(BigSalesOrder)的视图，以显示总计大于60,000的每个销售订单</li></ul></li><li></li></ul><div class="language-sql" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">CREATE</span> <span class="token keyword">VIEW</span> BigSalesOrder <span class="token keyword">AS</span>
    <span class="token keyword">SELECT</span> 
        orderNumber<span class="token punctuation">,</span> <span class="token function">ROUND</span><span class="token punctuation">(</span>total<span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">)</span> <span class="token keyword">as</span> total
    <span class="token keyword">FROM</span>
        saleperorder
    <span class="token keyword">WHERE</span>
        total <span class="token operator">&gt;</span> <span class="token number">60000</span><span class="token punctuation">;</span>

</code></pre></div><h4 id="使用inner-join创建包含客户编号和客户支付的总金额的视图" tabindex="-1"><a class="header-anchor" href="#使用inner-join创建包含客户编号和客户支付的总金额的视图" aria-hidden="true">#</a> 使用<strong>inner join</strong>创建包含客户编号和客户支付的总金额的视图</h4><div class="language-sql" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">CREATE</span> <span class="token keyword">VIEW</span> customerOrders <span class="token keyword">AS</span>
    <span class="token keyword">SELECT</span> 
        c<span class="token punctuation">.</span>customerNumber<span class="token punctuation">,</span>
        p<span class="token punctuation">.</span>amount
    <span class="token keyword">FROM</span>
        customers c
            <span class="token keyword">INNER</span> <span class="token keyword">JOIN</span>
        payments p <span class="token keyword">ON</span> p<span class="token punctuation">.</span>customerNumber <span class="token operator">=</span> c<span class="token punctuation">.</span>customerNumber
    <span class="token keyword">GROUP</span> <span class="token keyword">BY</span> c<span class="token punctuation">.</span>customerNumber
    <span class="token keyword">ORDER</span> <span class="token keyword">BY</span> p<span class="token punctuation">.</span>amount <span class="token keyword">DESC</span><span class="token punctuation">;</span>

</code></pre></div><h4 id="使用子查询创建包含价格高于所有产品的平均价格的产品的视图" tabindex="-1"><a class="header-anchor" href="#使用子查询创建包含价格高于所有产品的平均价格的产品的视图" aria-hidden="true">#</a> 使用子查询创建包含价格高于所有产品的平均价格的产品的视图</h4><div class="language-sql" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">CREATE</span> <span class="token keyword">VIEW</span> aboveAvgProducts <span class="token keyword">AS</span>
    <span class="token keyword">SELECT</span> 
        productCode<span class="token punctuation">,</span> productName<span class="token punctuation">,</span> buyPrice
    <span class="token keyword">FROM</span>
        products
    <span class="token keyword">WHERE</span>
        buyPrice <span class="token operator">&gt;</span> 
 <span class="token punctuation">(</span><span class="token keyword">SELECT</span> 
                <span class="token function">AVG</span><span class="token punctuation">(</span>buyPrice<span class="token punctuation">)</span>
            <span class="token keyword">FROM</span>
                products<span class="token punctuation">)</span>
    <span class="token keyword">ORDER</span> <span class="token keyword">BY</span> buyPrice <span class="token keyword">DESC</span><span class="token punctuation">;</span>
</code></pre></div><h4 id="" tabindex="-1"><a class="header-anchor" href="#" aria-hidden="true">#</a></h4><h4 id="视图限制" tabindex="-1"><a class="header-anchor" href="#视图限制" aria-hidden="true">#</a> 视图限制</h4><ul><li><ul><li>不能在视图上创建索引</li></ul></li><li>使用CHECK TABLE语句来检查视图是否有效</li><li>一个简单的视图可以更新表中数据，但是基于具有连接，子查询等的复杂select语句创建的视图无法更新</li><li>mysql不像Oracle、PostgreSQL等其他数据库系统那样支持物理视图，mysql是不支持物理视图的</li></ul><h2 id="end" tabindex="-1"><a class="header-anchor" href="#end" aria-hidden="true">#</a> end</h2><h4 id="番外篇" tabindex="-1"><a class="header-anchor" href="#番外篇" aria-hidden="true">#</a> 番外篇</h4><h3 id="创建或修改的语句" tabindex="-1"><a class="header-anchor" href="#创建或修改的语句" aria-hidden="true">#</a> 创建或修改的语句</h3><div class="language-sql" data-ext="sql"><pre class="language-sql"><code> <span class="token keyword">CREATE</span>  <span class="token operator">OR</span>  <span class="token keyword">REPLACE</span> <span class="token keyword">VIEW</span>  view_rectify_report_ct
<span class="token keyword">AS</span> 
    <span class="token keyword">select</span> <span class="token operator">*</span> <span class="token keyword">from</span> table_name <span class="token keyword">inner</span> <span class="token keyword">join</span> table_a <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>
</code></pre></div>`,28),p=[o];function l(r,c){return s(),n("div",null,p)}const i=a(t,[["render",l],["__file","mysqlview.html.vue"]]);export{i as default};
