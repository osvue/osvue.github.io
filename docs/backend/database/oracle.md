# ORACLE
---
## oracle

 - 用作日期转换：
```sql
to_char(date,'格式');
select to_date('2005-01-01 ','yyyy-MM-dd') from dual;
select to_char(sysdate,'yyyy-MM-dd HH24:mi:ss') from dual;
```
