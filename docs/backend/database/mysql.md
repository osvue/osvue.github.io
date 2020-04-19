# MySQL
---
## IF表达式
- IF(expr1,expr2,expr3)
>如果 expr1 是TRUE (expr1 <> 0 and expr1 <> NULL)，
则 IF()的返回值为expr2; 否则返回值则为 expr3。
IF() 的返回值为数字值或字符串值，具体情况视其所在语境而定。
```sql
SELECT IF(sva=1,"男","女") AS s FROM table_name
WHERE sva != '';
```

