---
autoGroup-1: MySQL
title:  mysql之自定义函数
---

## 函数

- 函数存储着一系列sql语句，调用函数就是一次性执行这些语句。所以函数可以降低语句重复。
- 但注意的是函数注重返回值，不注重执行过程，所以一些语句无法执行。所以函数并不是单纯的sql语句集合
- 函数与存储过程的区别：**函数只会返回一个值**，不允许返回一个结果集。函数强调返回值，所以函数不允许返回多个值的情况，即使是查询语句
## 函数的创建

```sql
create function 函数名([参数列表]) returns 数据类型
begin
 sql语句;
 return 值;
end;
```
- * 参数列表的格式是：  变量名 数据类型

```sql
-- 最简单的仅有一条sql的函数
create function myselect2() returns int return 666;
select myselect2(); -- 调用函数

--
create function myselect3() returns int
begin 
    declare c int;
    select id from class where cname="python" into c;
    return c;
end;
select myselect3();
-- 带传参的函数
create function myselect5(name varchar(15)) returns int
begin 
    declare c int;
    select id from class where cname=name into c;
    return c;
end;
select myselect5("python");
```

## 函数的调用


## 函数的查看


## 函数的修改


## 函数的删除

