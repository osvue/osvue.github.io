---
autoGroup-2: JdbcTemplate
title: 使用NamedParameterJdbcTemplate
---



在使用JdbcTemplate的时候，如果要使用参数，那么需要通过在SQL中使用?做占位符。

NamedParameterJdbcTemplate提供了一个更加直观的方式来定义SQL中的占位符，即通过:变量名的形式。

可以通过Map或者BeanPropertySqlParameterSource传递参数值：

Map直接设置参数值；
例如：

```java
String sql = "select count(*) from tb_user where username = :username and age = :age";
Map<String, Object> params = new HashMap<>(2);
params.put("username", "Michael");
params.put("age", 25);
Integer count = namedParameterJdbcTemplate.queryForObject(sql, params, Integer.class);

```

* `BeanPropertySqlParameterSource`可以将实体对象转换成参数值，注意参数变量名要和实体对象中的属性名对应

示例:

```java
String sql = "select count(*) from tb_user where username = :username and age = :age";
User query = new User();
query.setUsername("Michael");
query.setAge(25);
SqlParameterSource param = new BeanPropertySqlParameterSource(query);
Integer count = namedParameterJdbcTemplate.queryForObject(sql, param, Integer.class);

```

查询多条数据，每条数据都以Map形式返回，整个结果是`List<Map<String, Object>>`

```java
String sql = "select user_id, username, age from tb_user where age = :age";
Map<String, Object> params = Collections.singletonMap("age", 25);
List<Map<String, Object>> resultMapList = namedParameterJdbcTemplate.queryForList(sql, params);

```

##  插入、更新、删除

在`JdbcTemplate`中，数据的插入、更新、删除操作都是通过`update(...)`来完成的。

### 插入单条数据

```java
String sql = "insert into tb_user(user_id, username, mobile, age, create_time) values (:userId, :username, :mobile, :age, :createTime)";
User query = User.builder()
        .userId(uuid())
        .username("新用户A")
        .mobile("1234567")
        .age(28)
        .createTime(new Date())
        .build();
SqlParameterSource params = new BeanPropertySqlParameterSource(query);
int successCount = namedParameterJdbcTemplate.update(sql, params);

```

### 更新单条数据

```java
String sql = "update tb_user set username = :username where user_id = :userId";
User user = User.builder()
        .userId("46a8247fbffc46c3a591961351fa3277")
        .username("更新用户名")
        .build();
SqlParameterSource params = new BeanPropertySqlParameterSource(user);
int successCount = namedParameterJdbcTemplate.update(sql, params);

```

### 删除单挑数据

```java
String sql = "delete from tb_user where user_id = :userId";
User user = User.builder()
        .userId("ad6aaa9e4f654ab683d455fa31437b88")
        .build();
SqlParameterSource params = new BeanPropertySqlParameterSource(user);
int successCount = namedParameterJdbcTemplate.update(sql, params);

```

