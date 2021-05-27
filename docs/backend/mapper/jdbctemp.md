---
autoGroup-2: JdbcTemplate
title: JdbcTemplate基本用法
---


### 查询记录条数

```java
String sql = "select count(*) from tb_user";
int count = jdbcTemplate.queryForObject(sql, Integer.class);
```

### 按条件查询记录条数，通过`?`参数绑定

```java
String sql = "select count(*) from tb_user where username = ?";
int count = jdbcTemplate.queryForObject(sql, Integer.class, "Tom");
   
或者
   
String sql = "select count(*) from tb_user where username = ?";
Object[] params = new Object[]{"Tom"};
int count = jdbcTemplate.queryForObject(sql, params, Integer.class);

```

###  同理，查询一个`String`字段的值

```java
String sql = "select username from tb_user where user_id = ?";
Object[] params = new Object[]{"0ff5771760c1483abaefa7a3e530ea6d"};
String username = jdbcTemplate.queryForObject(sql, params, String.class);

```

### 查询多个字段，返回一个Map
```java
String sql = "select user_id, username, age from tb_user where user_id = ?";
Object[] params = new Object[]{"46a8247fbffc46c3a591961351fa3277"};
Map<String, Object> resultMap = jdbcTemplate.queryForMap(sql, params);

```

### 查询多条数据，每条数据都以`Map`形式返回，整个结果是`List>`

```java
String sql = "select user_id, username, age from tb_user where age = ?";
Object[] params = new Object[]{25};
List<Map<String, Object>> resultMapList = jdbcTemplate.queryForList(sql, params);

```

### 查询单条数据并通过`RowMapper`映射成实体对象

```java
String sql = "select user_id, username, mobile, create_time from tb_user where user_id = ?";
Object[] params = new Object[]{"0ff5771760c1483abaefa7a3e530ea6d"};
User user = jdbcTemplate.queryForObject(sql, params,
        new RowMapper<User>() {
            @Override
            public User mapRow(ResultSet rs, int rowNum) throws SQLException {
                // 在这里做字段到实体的映射
                User u = new User();
                u.setUserId(rs.getString("user_id"));
                u.setUsername(rs.getString("username"));
                u.setMobile(rs.getString("mobile"));
                u.setCreateTime(rs.getTimestamp("create_time"));
                return u;
            }
        });

```

### 查询对象集合

```java
String sql = "select user_id, username, mobile, create_time from tb_user where username = ?";
Object[] params = new Object[]{"相同的用户名"};
List<User> users = jdbcTemplate.query(sql, params,
        new RowMapper<User>() {
            @Override
            public User mapRow(ResultSet rs, int rowNum) throws SQLException {
                User u = new User();
                u.setUserId(rs.getString("user_id"));
                u.setUsername(rs.getString("username"));
                u.setMobile(rs.getString("mobile"));
                u.setCreateTime(rs.getTimestamp("create_time"));
                return u;
            }
        });

```



项目中使用到了Spring JDBC, 一般jdbcTemplate基本可以满足我们的需求，我们可以通过?占位符来传参，方式sql注入。
例如：

```java
@Override
	public boolean queryMultBySpuId(String spuId, String companyId) {
		String sql = "SELECT goods_commonid FROM zcy_goods_item WHERE goods_commonid=? AND company_id=? ";
		try {
			List<String> commonidList=jdbcTemplate.queryForList(sql, new String[]{spuId, companyId},String.class);
			if (CollectionUtils.isEmpty(commonidList)) {
				return false;
			} else {
				return true;
			}
		} catch (DataAccessException e) {
			return false;
		} 
```

### 问题
如果我们在sql中使用了in，那么通过?占位符来传参是不能解决问题的，直接拼接sql又会有sql注入的风险。这种情况下我们可以使用NamedParameterJdbcTemplate 来解决问题。
NamedParameterJdbcTemplate支持具名参数
PS:具名参数: SQL 按名称(以冒号开头)而不是按位置进行指定. 具名参数更易于维护, 也提升了可读性. 具名参数由框架类在运行时用占位符取代

解决办法
获得NamedParameterJdbcTemplate实例，在NamedParameterJdbcTemplate 构造器中直接传入JdbcTemplate的实例即可，如下：

```java
NamedParameterJdbcTemplate nameJdbc = new NamedParameterJdbcTemplate(jdbcTemplate);
```

使用NamedParameterJdbcTemplate实例，我们可以把in中的参数放入map中，值为`List<String>`
`paramMap.put("itemIds", Arrays.asList(itemIds.split(",")))`

代码如下：

	@Override
	public List<Item> selectItemByIds(String itemIds) {
		NamedParameterJdbcTemplate nameJdbc = new NamedParameterJdbcTemplate(jdbcTemplate);
		Map<String,Object> paramMap = new HashMap<String, Object>();
		try {
			String sql = "SELECT  *  FROM zcy_goods_item WHERE id IN(:itemIds) ORDER BY id DESC";
			paramMap.put("itemIds", Arrays.asList(itemIds.split(",")));
			return nameJdbc.query(sql,paramMap, new BeanPropertyRowMapper<Item>(Item.class));
		} catch (DataAccessException e) {
			return null;
		}
	}
