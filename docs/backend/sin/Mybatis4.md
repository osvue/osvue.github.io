---
autoGroup-1: MYBATIS
title: MyBatis 实现多表查询
---


## Mybatis 实现多表查询方式
- 业务装配.对两个表编写单表查询语句,在业务(Service)把查询
的两个结果进行关联
-  使用 Auto Mapping 特性,在实现两表联合查询时通过别名完成
映射.
- 使用 MyBatis 的`<resultMap>`标签进行实现.
+ 多表查询时,类中包含另一个类的对象的分类


## resultMap 标签

 `<resultMap>`标签写在mapper.xml中,由程序员控制SQL查询结果与
实体类的映射关系.

- 默认 `MyBatis` 使用 `Auto Mapping` 特性.
- 使用 `resultMap` 标签时, `select` 标签不写 `resultType` 属性,而是使
  用 `resultMap` 属性引用 `resultMap` 标签.
- 使用 `resultMap` 实现单表映射关系

::: tip

使用`<`resultMap`>`标签时,`<`select`>`标签不写 `resultType` 属性,而是使
用 resultMap 属性引用`<`resultMap`>`标签.

:::

```xml
<demo>
<resultMap type="teacher" id="mymap">
<!-- 主键使用 id 标签配置映射关系 -->
<id column="id" property="id1" />
<!-- 其他列使用 result 标签配置映射关系 -->
<result column="name" property="name1"/>
</resultMap>

<select id="selAll" resultMap="mymap">
select * from teacher
</select>
</demo>
```

## 使用 resultMap 实现关联单个对象(N+1 方式)

* N+1 查询方式,先查询出某个表的全部信息,根据这个表的信息
  查询另一个表的信息

## 一对一

### 在 Student 实现类中包含了一个 Teacher 对象

- **在 TeacherMapper 中提供一个查询**

```xml
<select id="selById" resultType="teacher"
parameterType="int">
select * from teacher where id=#{0}
</select>
```

* 在 StudentMapper 中
*  association  装配一个对象时使用
* property: 对象在类中的属性名
* select:通过哪个查询查询出这个对象的信息
* column: 把当前表的哪个列的值做为参数传递给另
  一个查询
* 大前提使用 N+1 方式.时如果列名和属性名相同可以不配置,使用 Auto mapping 特性.但是 mybatis 默认只会给列专配一次

```xml
<demo>

<resultMap type="student" id="stuMap">
	<id property="id" column="id"/>
	<result property="name" column="name"/>
	<result property="age" column="age"/>
	<result property="tid" column="tid"/>
<!-- 如果关联一个对象 -->
	<association property="teacher"
	select="com.b.mapper.TeacherMapper.selById"
	column="tid"></association>
</resultMap>

<select id="selAll" resultMap="stuMap">
select * from student
</select>
</demo>
```

### 简化一下

```xml
<demo>

<resultMap type="student" id="stuMap">
<result column="tid" property="tid"/>
<!-- 如果关联一个对象 -->
<association property="teacher"
select="com.b.mapper.TeacherMapper.selById"
column="tid"></association>
</resultMap>
<select id="selAll" resultMap="stuMap">
select * from student
</select>
</demo>
```

## 一对多`<`resultMap`>`查询关联集合对象(N+1)

```java
public class Teacher {
private int id;
private String name;
private List<Student> list;
```

* StudentMapper.xml

  ```xml
  <select id="selByTid" parameterType="int"
  resultType="student">
  select * from student where tid=#{0}
  </select>
  ```

### 在 TeacherMapper.xml 中添加查询全部

- `<collection/>` 当属性是集合类型时使用的标签

```xml
<de>

<resultMap type="teacher" id="mymap">
		<id column="id" property="id"/>
		<result column="name" property="name"/>
	<collection property="list"
	select="com.b.mapper.StudentMapper.selByTid"
	column="id"></collection>
</resultMap>

<select id="selAll" resultMap="mymap">
select * from teacher
</select>
</de>
```

## Auto Mapping 结合别名实现多表查询.

* 只能使用多表联合查询方式
* 在 SQL 是关键字符,两侧添加反单引号

```xml
<select id="selAll" resultType="student">
    select  t.id `teacher.id`  ,    t.name`teacher.name`
    , s.id id , s.name name  ,  age  ,  tid
from student s LEFT JOIN teacher t on t.id=s.tid
</select>
```

在 MyBatis 运行开始时需要先通过 Resources 加载全局配置文件.下面
需要实例化 SqlSessionFactoryBuilder 构建器.帮助 SqlSessionFactory 接
口实现类 DefaultSqlSessionFactory.
在实例化 DefaultSqlSessionFactory 之前需要先创建 XmlConfigBuilder
解析全局配置文件流,并把解析结果存放在 Configuration 中.之后把
Configuratin 传递给 DefaultSqlSessionFactory.到此 SqlSessionFactory 工
厂创建成功.
由 SqlSessionFactory 工厂创建 SqlSession.
每次创建 SqlSession 时,都需要由 TransactionFactory 创建 Transaction
对象,同时还需要创建 SqlSession 的执行器 Excutor,最后实例化
DefaultSqlSession,传递给 SqlSession 接口.
根据项目需求使用 SqlSession 接口中的 API 完成具体的事务操作.
如果事务执行失败,需要进行 rollback 回滚事务.
如果事务执行成功提交给数据库.关闭 SqlSession
