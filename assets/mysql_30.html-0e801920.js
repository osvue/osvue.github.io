import{_ as e,p as t,q as r,a1 as l}from"./framework-d81ad7e5.js";const n={},s=l(`<h3 id="连pj" tabindex="-1"><a class="header-anchor" href="#连pj" aria-hidden="true">#</a> 连pj</h3><div class="language-text" data-ext="text"><pre class="language-text"><code>如何回答sql优化问题？
采用总分的方式来回答问题

我之前做过很多sql优化的操作，sql优化不是说当问题出现之后才开始优化，更多的情况是出现慢查询之后我们想办法去调整sql，
但是在进行数据库建模设计的时候就要考虑优化的问题，比如表中字段的选择，某些参数的设置等情况，我之前做sql优化的时候，
基本在设计的时候就考虑这两个维度的分析，但是这是远远不够的，当出现sql执行慢的问题之后，
我会从mysql的性能监控performance_schema、索引的创建和选择，sql语句的优化调整，
参数的重新设置，mysql整体架构的调整等多个维度来考虑，当然用的更多的还是索引的优化，
比如之前我们做的XXXX项目中，有一个sql语句，单表数据量200万，查询耗费时间是15s，
执行效率太低了，通过查看执行计划之后发现也用到了索引，后来通过分析之后我想到可能是因为回表的问题，
所以进行了组合索引的创建，将需要查询的字段和条件共同组合成一个组合索引，
执行之后，sql执行耗费1.5s,效率获得了大范围的提升，
再比如我们之前的XXXX。。。。。。。。。。
</code></pre></div><p><strong>01</strong> 应尽量避免在 where 子句中使用!=或&lt;&gt;操作符，否则引擎将放弃使用索引而进行全表扫描。</p><p><strong>02</strong> 对查询进行优化，应尽量避免全表扫描，首先应考虑在 where 及 order by 涉及的列上建立索引。</p><p><strong>03</strong> 应尽量避免在 where 子句中对字段进行 null 值判断，否则将导致引擎放弃使用索引而进行全表扫描。如：</p><ul><li>select id from t where num is null</li><li>可以在num上设置默认值0，确保表中num列没有null值，然后这样查询：</li><li>select id from t where num=0</li></ul><p><strong>04</strong> 尽量避免在 where 子句中使用 or 来连接条件，否则将导致引擎放弃使用索引而进行全表扫描，如：</p><ul><li>select id from t where num=10 or num=20</li><li>可以这样查询：</li><li>select id from t where num=10 union all select id from t where num=20</li></ul><p><strong>05</strong> 下面的查询也将导致全表扫描：(不能前置百分号)</p><ul><li>select id from t where name like ‘%c%’</li><li>下面走索引</li><li>select id from t where name like ‘c%’</li><li>若要提高效率，可以考虑全文检索。</li></ul><p><strong>06</strong> in 和 not in 也要慎用，否则会导致全表扫描，如：</p><ul><li>select id from t where num in(1,2,3)</li><li>对于连续的数值，能用 between 就不要用 in 了：</li><li>select id from t where num between 1 and 3</li></ul><p><strong>07</strong> 如果在 where 子句中使用参数，也会导致全表扫描。因为SQL只有在运行时才会解析局部变量，但优化程序不能将访问计划的选择推迟到运行时；它必须在编译时进行选择。然 而，如果在编译时建立访问计划，变量的值还是未知的，因而无法作为索引选择的输入项。如下面语句将进行全表扫描：</p><ul><li>select id from t where num=@num</li><li>可以改为强制查询使用索引：</li><li>select id from t with(index(索引名)) where num=@num</li></ul><p><strong>08</strong> 应尽量避免在 where 子句中对字段进行表达式操作，这将导致引擎放弃使用索引而进行全表扫描。如：</p><ul><li>select id from t where num/2=100</li><li>应改为:</li><li>select id from t where num=100*2</li></ul><p><strong>09</strong> 应尽量避免在where子句中对字段进行函数操作，这将导致引擎放弃使用索引而进行全表扫描。如：</p><ul><li>select id from t where substring(name,1,3)=’abc’ –name以abc开头的id select id from t where datediff(day,createdate,’2005-11-30′)=0 –’2005-11-30′生成的id</li><li>应改为:</li><li>select id from t where name like ‘abc%’ select id from t where createdate&gt;=’2005-11-30′ and createdate&lt;’2005-12-1′</li></ul><p><strong>10</strong> 不要在 where 子句中的“=”左边进行函数.算术运算或其他表达式运算，否则系统将可能无法正确使用索引。</p><p><strong>11</strong> 在使用索引字段作为条件时，如果该索引是复合索引，那么必须使用到该索引中的第一个字段作为条件时才能保证系统使用该索引，否则该索引将不会被使 用，并且应尽可能的让字段顺序与索引顺序相一致。</p><p><strong>12</strong> 不要写一些没有意义的查询，如需要生成一个空表结构：</p><ul><li>select col1,col2 into #t from t where 1=0</li><li>这类代码不会返回任何结果集，但是会消耗系统资源的，应改成这样：</li><li>create table #t(…)</li></ul><p><strong>13</strong> 很多时候用 exists 代替 in 是一个好的选择：</p><ul><li>select num from a where num in(select num from b)</li><li>用下面的语句替换：</li><li>select num from a where exists(select 1 from b where num=a.num)</li></ul><p><strong>14</strong> 并不是所有索引对查询都有效，SQL是根据表中数据来进行查询优化的，当索引列有大量数据重复时，SQL查询可能不会去利用索引，如一表中有字段 sex，male.female几乎各一半，那么即使在sex上建了索引也对查询效率起不了作用。</p><p><strong>15</strong> 索引并不是越多越好，索引固然可以提高相应的 select 的效率，但同时也降低了 insert 及 update 的效率，因为 insert 或 update 时有可能会重建索引，所以怎样建索引需要慎重考虑，视具体情况而定。一个表的索引数较好不要超过6个，若太多则应考虑一些不常使用到的列上建的索引是否有必要。</p><p><strong>16</strong> 应尽可能的避免更新 clustered 索引数据列，因为 clustered 索引数据列的顺序就是表记录的物理存储顺序，一旦该列值改变将导致整个表记录的顺序的调整，会耗费相当大的资源。若应用系统需要频繁更新 clustered 索引数据列，那么需要考虑是否应将该索引建为 clustered 索引。</p><p><strong>17</strong> 尽量使用数字型字段，若只含数值信息的字段尽量不要设计为字符型，这会降低查询和连接的性能，并会增加存储开销。这是因为引擎在处理查询和连接时会 逐个比较字符串中每一个字符，而对于数字型而言只需要比较一次就够了。</p><p><strong>18</strong> 尽可能的使用 varchar/nvarchar 代替 char/nchar ，因为首先变长字段存储空间小，可以节省存储空间，其次对于查询来说，在一个相对较小的字段内搜索效率显然要高些。</p><p><strong>19</strong> 任何地方都不要使用 select * from t ，用具体的字段列表代替“*”，不要返回用不到的任何字段。</p><p><strong>20</strong> 尽量使用表变量来代替临时表。如果表变量包含大量数据，请注意索引非常有限（只有主键索引）。</p><p><strong>21</strong> 避免频繁创建和删除临时表，以减少系统表资源的消耗。</p><p><strong>22</strong> 临时表并不是不可使用，适当地使用它们可以使某些例程更有效，例如，当需要重复引用大型表或常用表中的某个数据集时。但是，对于一次性事件，较好使 用导出表。</p><p><strong>23</strong> 在新建临时表时，如果一次性插入数据量很大，那么可以使用 select into 代替 create table，避免造成大量 log ，以提高速度；如果数据量不大，为了缓和系统表的资源，应先create table，然后insert。</p><p><strong>24</strong> 如果使用到了临时表，在存储过程的最后务必将所有的临时表显式删除，先 truncate table ，然后 drop table ，这样可以避免系统表的较长时间锁定。</p><p><strong>25</strong> 尽量避免使用游标，因为游标的效率较差，如果游标操作的数据超过1万行，那么就应该考虑改写。</p><p><strong>26</strong> 使用基于游标的方法或临时表方法之前，应先寻找基于集的解决方案来解决问题，基于集的方法通常更有效。</p><p><strong>27</strong> 与临时表一样，游标并不是不可使用。对小型数据集使用 FAST_FORWARD 游标通常要优于其他逐行处理方法，尤其是在必须引用几个表才能获得所需的数据时。在结果集中包括“合计”的例程通常要比使用游标执行的速度快。如果开发时 间允许，基于游标的方法和基于集的方法都可以尝试一下，看哪一种方法的效果更好。</p><p><strong>28</strong> 在所有的存储过程和触发器的开始处设置 SET NOCOUNT ON ，在结束时设置 SET NOCOUNT OFF 。无需在执行存储过程和触发器的每个语句后向客户端发送 DONEINPROC 消息。</p><p><strong>29</strong> 尽量避免向客户端返回大数据量，若数据量过大，应该考虑相应需求是否合理。</p><p><strong>30</strong> 尽量避免大事务操作，提高系统并发能力。</p>`,41),o=[s];function i(p,a){return t(),r("div",null,o)}const g=e(n,[["render",i],["__file","mysql_30.html.vue"]]);export{g as default};
