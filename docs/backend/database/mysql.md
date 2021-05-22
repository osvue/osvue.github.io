---
autoGroup-1: MySQL
title:  基础函数
---

## IF表达式
- IF(expr1,expr2,expr3)
>如果 expr1 是TRUE (expr1 <> 0 and expr1 <> NULL)，
则 IF()的返回值为expr2; 否则返回值则为 expr3。
IF() 的返回值为数字值或字符串值，具体情况视其所在语境而定。

```sql
SELECT 
    IF(sva=1,"男","女") AS s 
    FROM table_name
WHERE sva != '';
```
## SQL中的case  when   then 判断
* --简单Case函数
```sql
    CASE sex
        WHEN '1' THEN '男'
        WHEN '2' THEN '女'
    ELSE '其他' END

    CASE ISNULL(c.EXECUTION_LIMIT)
    WHEN  TRUE   THEN
        l.GUARANTEE_AMOUN
    ELSE
        l.GUARANTEE_AMOUN-c.EXECUTION_LIMIT
    END ) AS alias
```
* --Case搜索函数
```sql
    CASE WHEN sex = '1' THEN '男'
    WHEN sex = '2' THEN '女'
    ELSE '其他' END
```
## sql 中的截取

*  substring  返回字符、binary、text 或 image 表达式的一部分。
- + 基本语法: **SUBSTRING ( expression , start , length )**
- + expression:字符串、二进制字符串、text、image、列或包含列的表达式
- + start:整数，指定子串的开始位置      
- + 注:SQL中"1"表示字符串中的第一个字符,而.NET中"0"表示第一个字符
- + length:整数，指定子串的长度（要返回的字符数或字节数）

      
## sql获取字符串长度函数
- char_lenght返回字符串长度 
```sql
char_lenght(string)  -- 字符串
  示例：
     SELECT classfyname,CHAR_LENGHT(lassfyname) FROM f79_22_volume 
```
## 日期转换
```sql
to_char(date,'格式');

select to_date('2005-01-01 ','yyyy-MM-dd') from dual;
select to_char(sysdate,'yyyy-MM-dd HH24:mi:ss') from dual;
```
## 计算某日期到当前日期的时间间距
::: tip
用到了sql语句中的 TIMESTAMPDIFF（ **单位** ，开始时间，结束时间）函数
其中单位可以为：
:::
* YEAR 年
* QUARTER 季度
* MONTH 月
* WEEk 星期
* DAY 天
* HOUR 小时
* MINUTE 分钟
* SECOND 秒
* FRAC_SECOND 毫秒
- * 其中以年为单位，如下所示代码
```sql
    SELECT
    TIMESTAMPDIFF( YEAR, '1997-05-31', CURDATE() ) AS '年龄'
```
* 查询到当前年份季度的时候
```sql
    SELECT
    TIMESTAMPDIFF(
        QUARTER ,
        '1997-05-31',
        CURDATE()
    ) AS '季度'
```
## MySQL 为日期增加一个时间间隔：date_add()
```sql
set @dt = now();
select date_add(@dt, interval 1 day); -- add 1 day
select date_add(@dt, interval 1 hour); -- add 1 hour
select date_add(@dt, interval 1 minute); -- ...
select date_add(@dt, interval 1 second);
select date_add(@dt, interval 1 microsecond);
select date_add(@dt, interval 1 week);
select date_add(@dt, interval 1 month);
select date_add(@dt, interval 1 quarter);
select date_add(@dt, interval 1 year);
```
::: tip
MySQL 日期、时间相减函数：datediff(date1,date2), timediff(time1,time2)
:::
+ **MySQL datediff(date1,date2)：两个日期相减 date1 - date2，返回天数。**
- **select datediff('2008-08-08', '2008-08-01'); -- 7**
- **select datediff('2008-08-01', '2008-08-08'); -- -7**
* **MySQL timediff(time1,time2)：两个日期相减 time1 - time2，返回 time 差值**
- **select timediff('2008-08-08 08:08:08', '2008-08-08 00:00:00'); -- 08:08:08**
- **select timediff('08:08:08', '00:00:00'); -- 08:08:08**
+ 注意：timediff(time1,time2) 函数的两个参数类型必须相同。

::: details
MySQL 时间戳（timestamp）转换、增、减函数：
```sql
timestamp(date) -- date to timestamptimestamp(dt,time) -- dt + time
timestampadd(unit,interval,datetime_expr) --
timestampdiff(unit,datetime_expr1,datetime_expr2) --
```            
:::

## distinct
::: tip
在 SQL 中，关键字 distinct 用于返回唯一不同的值。其语法格式为：
SELECT DISTINCT 列名称 FROM 表名称

:::

>关键字 distinct 只能放在 SQL 语句中所有字段的最前面才能起作用，如果放错位置，SQL 不会报错，但也不会起到任何效果。

- 当 distinct 时作用在多个字段的候，她只会将所有字段值都相同的记录“去重”掉
```sql
select *, count(distinct name) from table group by name

```

| id         | name           | count(distinct name)  |
| ------------- |:-------------:| -----:|
| 1      | a | 1 |
| 2      | b |  1 |
| 3      | c |   1 |

- 最后一项是多余的，不用管就行了，目的达到
- group by 必须放在 order by 和 limit之前，不然会报错

## and与or优先级
::: tip
在where中可以包含任意数目的and和or操作符，在没有任何其他符号的时候，例如括号，SQL会首先执行and条件，然后才执行or语句，如：

:::
```sql

select * from table where id=1 or id=2 and price>=10;

--这条语句默认执行的是id=2并且price大于等于10的，或者是id=1。
--如果加上括号：

select * from table where (id=1 or id=2) and price>=10;

--则这条语句执行的是id=1或id=2,并且price大于等于10。

```

