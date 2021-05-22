---
autoGroup-1: MYBATIS
title: 原生Mybati
---

## 在 Mapper.xml 中可以通过#{}获取参数
* parameterType 控制参数类型

#{}获取参数内容`
使用索引,从 0 开始 #{0}表示第一个参数
也可以使用#{param1}第一个参数
如果只有一个参数(基本数据类型或 String),mybatis
对#{}里面内容没有要求只要写内容即可.
如果参数是对象#{属性名}
如果参数是 map 写成#{key}

## #{} 和 ${} 的区别

-  #{} 获取参数的内容支持 索引获取,param1 获取指定位置参数,
  并且 SQL 使用?占位符
- ${} 字符串拼接不使用?,默认找${内容}内容的 get/set 方法,如
  果写数字,就是一个数字

##  如果在 xml 文件中出现 “<” , “>” ,双引号 等特殊字符时可以使用

XML 文件转义标签(XML 自身的)

`<![CDATA[ 内容 ]]>`

::: tip

mybatis 中实现 mysql 分页写法
不允许在关键字前后进行数学运算,需要在代码中计算完成
后传递到 mapper.xml 中
:::

 mapper.xml 中代码

```xml
<select id="page" resultType="com.a.b.People"
parameterType="map">
select * from people limit #{pageStart},#{pageSize}
</select>
```

## 多参数实现办法

- 在接口中声明方法
  `List<Log> selByAccInAccout(String accin,String accout);`

- 在 mapper.xml 中添加
  * #{}中使用 0,1,2 或 param1,param2

```xml
<select id="selByAccInAccout" resultType="log" >
select * from log where accin=#{0} and accout=#{1}
</select>
```

## 可以使用注解方式

```java
/**
* mybatis 把参数转换为 map 了,其中@Param("key") 参数内
容就是 map 的 value
* @param accin123
* @param accout3454235
* @return
*/
List<Log> selByAccInAccout(@Param("accin") String
accin123,@Param("accout") String accout3454235);
```
![](/img/10001.png)
### mapper.xml

```xml
<!-- 当多参数时,不需要写 parameterType 
 #{} 里面写@Param(“内容”)参数中内容
-->
<select id="selByAccInAccout" resultType="log" >
select * from log where accin=#{accin} and
accout=#{accout}
</select>
```

## 动态 SQL

```xml
<select id="selByAccinAccout" resultType="log">
select * from log where 1=1
<!-- OGNL 表达式,直接写 key 或对象的属性.不需要添加任
何特字符号 -->
<if test="accin!=null and accin!=''">
and accin=#{accin}
</if>
<if test="accout!=null and accout!=''">
and accout=#{accout}
</if>
</select>
```

###  where 

* 当编写 where 标签时,如果内容中第一个是 and 去掉第一个
  and
* 如果`<where>`中有内容会生成 where 关键字,如果没有内容不
  生成 where 关键

```xml
<select id="selByAccinAccout" resultType="log">
select * from log
<where>
<if test="accin!=null and accin!=''">
and accin=#{accin}
</if>
<if test="accout!=null and accout!=''">
and accout=#{accout}
</if>
</where>
</select>
```

###  set用在修改 SQL 中 set 从句
- 作用:去掉最后一个逗号
- 作用:如果 set 里面有内容生成 set 关键字,没有就不生成
-  id=#{id} 目的防止 set 中没有内容,mybatis 不生成 set 关
  键字,如果修改中没有 set 从句 SQL 语法错误

```xml
<update id="upd" parameterType="log" >
update log
	<set>
		id=#{id},
		<if test="accIn!=null and accIn!=''">
			accin=#{accIn},
		</if>
		<if test="accOut!=null and accOut!=''">
        	accout=#{accOut},
		</if>
	</set>
where id=#{id}
</update>
```

## Trim

- prefix 在前面添加内容
-  prefixOverrides 去掉前面内容
- suffix 在后面添加内容
-  suffixOverrieds 去掉后面内容
- 执行顺序去掉内容后添加内容

```xml
<update id="upd" parameterType="log">
update log
	<trim prefix="set" suffixOverrides=",">
		a=a,
	</trim>
where id=100
</update>
```

##  bind 

```xml
<select id="selByLog" parameterType="log" resultType="log">
	<bind name="accin" value="'%'+accin+'%'"/>
	#{money}
</select>
```

## foreach

```xml
<select id="selIn" parameterType="list" resultType="log">
select * from log where id in
<foreach collection="list" item="abc" open="("
 close=")" separator=",">
#{abc}
</foreach>
</select>
```

## 缓存
::: tip

1. 应用程序和数据库交互的过程是一个相对比较耗时的过程
2. 缓存存在的意义:让应用程序减少对数据库的访问,提升程序运行效率

3. MyBatis 中默认 SqlSession 缓存开启
3.1 同一个 SqlSession 对象调用同一个  select  时,只有第一次访问
数据库,第一次之后把查询结果缓存到 SqlSession 缓存区(内存)中
3.2 缓存的是 statement 对象.(简单记忆必须是用一个 select )
3.2.1 在 myabtis 时一个 select 对应一个 statement 对象
3.3 有效范围必须是同一个 SqlSession 对象
4. 缓存流程
4.1 步骤一: 先去缓存区中找是否存在 statement
4.2 步骤二:返回结果
4.3 步骤三:如果没有缓存 statement 对象,去数据库获取数据
4.4 步骤四:数据库返回查询结果
4.5 步骤五:把查询结果放到对应的缓存区中

5. SqlSessionFactory 缓存
5.1 又叫:二级缓存
5.2 有效范围:同一个 factory 内哪个 SqlSession 都可以获取
5.3 什么时候使用二级缓存:
5.3.1 当数据频繁被使用,很少被修改
5.4 使用二级缓存步骤
5.4.1 在 mapper.xml 中添加
5.4.2 如果不写 readOnly=”true”需要把实体类序列化
`<cache readOnly="true"></cache>`
5.5 当 SqlSession 对象 close()时或 commit()时会把 SqlSession 缓存
的数据刷(flush)到 SqlSessionFactory 缓存区中
:::
