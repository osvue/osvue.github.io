
---
autoGroup-2: ORACLE
title:  ORACLE基础
---


## oracle

 - 用作日期转换：
```sql
to_char(date,'格式');
select to_date('2005-01-01 ','yyyy-MM-dd') from dual;
select to_char(sysdate,'yyyy-MM-dd HH24:mi:ss') from dual;
```
## plsql
```sql
  declare
--声明变量
变量名 变量类型;
变量名 变量类型 := 初始值;
    vsal emp.sal%type;  --引用型的变量  
    vrow emp%rowtype;   --声明记录型变量          
begin
--业务逻辑
end;

 dbms_output.put_line()
```
## PL条件判断
```sql     
     if then
     
     elsif then
       
     else
     
     end if;
```
## 循环操作
```sql
  while 循环
      while 条件 loop
      end loop;
  for循环
      for 变量  in [reverse] 起始值..结束值 loop
      end loop;

  loop循环  
      loop
        exit when 条件
      end loop;
```

