---
autoGroup-1: MYBATIS
title: mapper.xml
---

```xml

<!-- namesapce:理解成实现类的全路径(包名+类名) -->
<mapper namespace="a.b">
  <!-- id:方法名
  parameterType:定义参数类型
  resultType:返回值类型.
  如果方法返回值是 list,在 resultType 中写 List 的泛型,
  因为 mybatis
  对 jdbc 封装,一行一行读取数据
  -->
  <select id="selAll" resultType="com.a.b.C">
   select * from flower
</select>

  <select id="selById"
    resultType="com.a.c.People"
    parameterType="int">
    select * from people where id=#{0}
  </select>

</mapper>
```

