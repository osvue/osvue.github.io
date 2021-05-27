
---
autoGroup-1: MySQL
title:  mysql之order
---


## MySQL中order by 排序遇到NULL值的问题
**age进行正序排序的时候，我们希望NULL值的记录在最后面显示**

1. 重新生成一列，比如agenull，利用is null操作符，把NULL值的行变成1，非NULL值的行变成0，先对该字段排序，再对age排序
```shell
mysql> select *,age is null as agenull from test_user order by agenull,age;
+----+-----------+------+---------+
| id | username  | age  | agenull |
+----+-----------+------+---------+
|  6 | hutuseng6 |   23 |       0 |
|  1 | hutuseng1 |   28 |       0 |
|  2 | hutuseng2 |   30 |       0 |
|  3 | hutuseng3 | NULL |       1 |
|  4 | hutuseng4 | NULL |       1 |
|  5 | hutuseng5 | NULL |       1 |
+----+-----------+------+---------+
6 rows in set (0.01 sec)
```

2. 直接利用isnull函数对age列求值，跟第一种方法的道理是一样的

- * mysql> select * from test_user order by isnull(age),age;
```
## 

## 

## 
## 
## 
## 
## 

## 
## 
## 