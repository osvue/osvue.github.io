---
autoGroup-1: MySQL
title:  mysql之视图1
---

## view 

```text
视图是一个虚拟表，是sql的查询结果，其内容由查询定义。同真实的表一样，
视图包含一系列带有名称的列和行数据，在使用视图时动态生成。视图的数据变化会影响到基表，
基表的数据变化也会影响到视图[insert update delete ] ; 
创建视图需要create view 权限，并且对于查询涉及的列有select权限；
使用create or replace 或者 alter修改视图，那么还需要改视图的drop权限。
```

## 视图的基本使用

### 如何创建视图(基本语法):

```sql
--第一个中括号里代表的就是创建视图是的算法属性，它允许我们控制mysql在创建视图时使用的机制，并且mysql提供了三种算法：MERGE，TEMPTABLE和UNDEFINED
-- CREATE VIEW语句创建视图，先来看下语法结构：　
　
CREATE 
   [ALGORITHM = {MERGE  | TEMPTABLE | UNDEFINED}]
VIEW [database_name].[view_name] 
AS
[SELECT  statement]
```
- 使用**MERGE**算法，mysql首先将输入查询与定义视图的select语句组合成单个查询。 然后mysql执行组合查询返回结果集。 如果select语句包含集合函数(如min，max，sum，count，avg等)或distinct，group by，havaing，limit，union，union all，子查询，则不允许使用MERGE算法。 如果select语句无引用表，则也不允许使用MERGE算法。 如果不允许MERGE算法，mysql将算法更改为UNDEFINED。我们要注意，将视图定义中的输入查询和查询组合成一个查询称为视图分辨率。

- 使用**TEMPTABLE**算法，mysql首先根据定义视图的SELECT语句创建一个临时表，然后针对该临时表执行输入查询。因为mysql必须创建临时表来存储结果集并将数据从基表移动到临时表，所以TEMPTABLE算法的效率比MERGE算法效率低。 另外，使用TEMPTABLE算法的视图是不可更新的。

- 当我们创建视图而不指定显式算法时，**UNDEFINED**是默认算法。 UNDEFINED算法使mysql可以选择使用MERGE或TEMPTABLE算法。mysql优先使用MERGE算法进行TEMPTABLE算法，因为MERGE算法效率更高

然后就是view后面的词组了，它就是名称的意思，在数据库中，视图和表共享相同的命名空间，因此视图和表不能具有相同的名称。 另外，视图的名称必须遵循表的命名规则。

最后就是SELECT语句了。在SELECT语句中，可以从数据库中存在的任何表或视图查询数据，同时SELECT语句必须遵循以下几个规则

1. **SELECT语句可以在where 语句中包含子查询，但FROM子句中的不能包含子查询**　 
2. **SELECT语句不能引用任何变量，包括局部变量，用户变量和会话变量**
3. SELECT语句不能引用准备语句的参数
4. **在mysql5.7.7之前版本，是不能在SELECT语句的FROM子句中使用子查询来定义视图的**

## demo

#### 尝试基于orderDetails表来创建一个表示每个订单的总销售额的视图：
```sql
CREATE VIEW SalePerOrder AS
    SELECT 
        orderNumber, SUM(quantityOrdered * priceEach) total
    FROM
        orderDetails
    GROUP by orderNumber
    ORDER BY total DESC;
```

#### SHOW TABLES命令来查看示例数据库 中的所有表，还会看到SalesPerOrder视图也显示在表的列表中
 - * 这是因为视图和表共享相同的命名空间。要知道哪个对象是视图或表，就得使用SHOW FULL TABLES命令
 - * 结果集中的table_type列指定哪个对象是视图，哪个对象是一个表(基表)。如上所示，saleperorder对应table_type列的值为：VIEW
#### 基于另一个视图创建一个视图
- * ，比如，根据SalesPerOrder视图创建名为大销售订单(BigSalesOrder)的视图，以显示总计大于60,000的每个销售订单
- 
```sql
CREATE VIEW BigSalesOrder AS
    SELECT 
        orderNumber, ROUND(total,2) as total
    FROM
        saleperorder
    WHERE
        total > 60000;

```

#### 使用**inner join**创建包含客户编号和客户支付的总金额的视图
```sql
CREATE VIEW customerOrders AS
    SELECT 
        c.customerNumber,
        p.amount
    FROM
        customers c
            INNER JOIN
        payments p ON p.customerNumber = c.customerNumber
    GROUP BY c.customerNumber
    ORDER BY p.amount DESC;

```
#### 使用子查询创建包含价格高于所有产品的平均价格的产品的视图

```sql
CREATE VIEW aboveAvgProducts AS
    SELECT 
        productCode, productName, buyPrice
    FROM
        products
    WHERE
        buyPrice > 
 (SELECT 
                AVG(buyPrice)
            FROM
                products)
    ORDER BY buyPrice DESC;
```
#### 

#### 视图限制
- * 不能在视图上创建索引
- 使用CHECK TABLE语句来检查视图是否有效
- 一个简单的视图可以更新表中数据，但是基于具有连接，子查询等的复杂select语句创建的视图无法更新
- mysql不像Oracle、PostgreSQL等其他数据库系统那样支持物理视图，mysql是不支持物理视图的

## end 



#### 番外篇 

### 创建或修改的语句

```sql
 CREATE  OR  REPLACE VIEW  view_rectify_report_ct
AS 
    select * from table_name inner join table_a ...
```