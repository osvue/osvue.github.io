---
autoGroup-2: ORACLE
title:  存储过程/函数
---


## 存储示例

```sql

declare 
  i number :=10;
begin
  if  i > 10  then
    dbms_output.put_line('你好世界');
    elsif i <=10 then
      dbms_output.put_line('你好世界sdfsdf');
      end if;
end;

select * from scott.emp

declare 
 a number ;
begin
  for  a in reverse 1..10 loop
    dbms_output.put_line(a);
  end loop;
end;

```

## 存储过程

```SQL

create or replace procedure proc_sal (vempno in number , vempsal in number)
is 
vsal emp.sal%type;
begin 
  select sal into vsal from emp where empno = vempno;
  dbms_output.put_line(vsal);
  update emp set sal = sal+vempsal where empno = vempno;
  dbms_output.put_line('涨薪后'||vsal);
  commit;
end;
--调用
call proc_sal(7369,10);

```

```sql
-- 定义
create or replace procedure proname (tmp in varchar2(20) , sout out number)

is 
--定义变量
begin
  --书写逻辑
end;

-- 调用
declare

begin
    proc_sal(7369,20);
end;
```

