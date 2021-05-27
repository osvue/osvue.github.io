---
autoGroup-1: MYBATIS
title: Mybatis 简明语法
---

## #{}. ${}
-	#{}  
	* 使用占位符,最终值为 '' 包裹
-	${}
	* 不使用占位符,故而不使用'' 包裹,用在 order by 排序和limit 分页
		
	* 动态sql
		
	* 标签
	
	
##   foreach
	
```xml
	<delete id="delMyWeibo" parameterType="arrar">
		delete from my_weibo where weibo_id in
		<foreach item="item" index="index" collection="array" open="(" separator="," close=")">
			#{item}
		</foreach>
	</delete>
```

##   like
```xml
		<if test="reportName != null and reportName !=''">
				AND a.meeting_name like concat ('%',#{reportName},'%')
		</if>
```	
	
## mybatis @param

1. @Param是 作为Dao层的注解，作用是用于传递参数，从而可以与SQL中的的字段名相对应，一般在2=<参数数<=5时使用最佳。

2. 原始的方法
当只有一个参数时，传进去一个值也只有一个参数可以匹配。当存在多个参数时，传进去的值就区分不开了，这时可以考虑用Map，例如接口

`	public List<Role> findRoleByMap(Map<String, Object> parameter);`
 - xml文件 

```xml
 <select id="findRoleByMap" parameterType="map" resultType="role">
    SELECT id,name FROM t_role
    WHERE roleName=#{roleName}
    AND note=#{note}
<select> 
```

+ 测试文件

```java
RoleMapper roleMapper = sqlSession.getMapper(RoleMapper.class);
Map<String, Object> parameter = new HashMap<>();
parameter.put("roleName", "剑士");
parameter.put("note", "决战紫禁之巅");
List<Role> roles = roleMapper.findRolesByMap(parameter);
```
 
 
3. 使用@Param
很明显上面的缺点就在于可读性差，每次必须阅读他的键，才能明白其中的作用，并且不能限定其传递的数据类型，
下面是使用@Param的情况，需要将接口改为

```java

public List<Role> findRoleByAnnotation(@Param("roleName") String roleName, @Param("note") String note);
// 这样我们就可以直接传入对应的值了。

// 当然也可以使用Java Bean来传递多个参数，定义一个POJO

public class RoleParam {
    private String roleName;
    private String note;
    /*getter和setter*/
}
// 此时接口就变为

public List<Role> findRoleByBean(RoleParam role);

```
这样对应的xml文件与1处的区别就在于id和parameterType发生了变化，id对应的方法和parameterType对应该类的权限定名。

而使用更多的场景可能是这样的，对应多个POJO

```java
public List<Role> findRoleByMix(@Param("roleP") RoleParam role, @Param("permissionP") PermissionParam permission);
```
这样就可以进行如下映射
```xml

<select id="findRoleByMix" resultType="role">
    SELECT id,name FROM t_role
    WHERE roleName=#{roleP.roleName}
    AND note=#{rolep.note}
    AND level=#{permissionP.level}
<select>
``` 	
	


