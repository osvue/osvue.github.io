---
autoGroup-1: MySQL
title:  mysql之备份
---

## Mysql中的数据备份

- 备份的语句mysqldump的基本语法:
`mysqldump -u username -p dbname table1 table2 > BackupName.sql`

+ **dbname**：要备份数据库的名称；

+ table1和table2参数表示的是需要备份的数据库表的名称，假如为空则表示需要备份整个数据库；

+ BackupName.sql表示的是将数据库备份到指定的这个以后 .sql的文件中
  
```sql
mysqldump -h 127.0.0.1 -uroot -p0 ssm > d:/app/ssm.sql
mysqldump -h 127.0.0.1 -uroot -p0 ssm > d:/app/ssm.sql

```