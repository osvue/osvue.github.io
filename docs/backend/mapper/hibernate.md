---
autoGroup-2: Hibernate
title:  基础语法
---


1、简介

- 基于ORM

#### 基本使用步骤

1、引入Hibernate核心jar包

- Hibernate3.jar+required目录中所有+jpa+数据库驱动包

2、配置文件hibernate.cfg.xml

2、配置文件`hibernate.cfg.xml`

```xml
<!DOCTYPE hibernate-configuration PUBLIC
    "-//Hibernate/Hibernate Configuration DTD 3.0//EN"
    "http://www.hibernate.org/dtd/hibernate-configuration-3.0.dtd">

<hibernate-configuration>
  <session-factory>
      <!-- 数据库连接的参数配置 -->
      <property name="hibernate.connection.url">jdbc:mysql:///hib_demo</property>
      <property name="hibernate.connection.driver_class">com.mysql.jdbc.Driver</property>
      <property name="hibernate.connection.username">root</property>
      <property name="hibernate.connection.password">root</property>
      <!-- 通过数据库方言，告诉hibernate如何生产sql。 hibernate会根据配置的方言，生产符合当前数据库语言的SQL语句 -->
      <property name="hibernate.dialect">org.hibernate.dialect.MySQLDialect</property>

      <mapping resource="xxxx.Users.hbm.xml"/>
  </session-factory>
</hibernate-configuration>
```

3、配置映射文件（xxx.hbm.xml）

```xml
<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE hibernate-mapping PUBLIC 
"-//Hibernate/Hibernate Mapping DTD 3.0//EN"
"http://www.hibernate.org/dtd/hibernate-mapping-3.0.dtd">
<!-- 
通过XML映射，把对象映射到数据库的表中！
 -->
<hibernate-mapping package="com.czd.demo">

<class name="Users" table="users">
    <id name="userId" column="id">
        <generator class="native"></generator>
    </id>
    <property name="userName" column="name"></property>
    <property name="age" column="age"></property>
</class>
```

4、测试类

```go
// 对象
    Users users = new Users();
    users.setUserName("Jack");
    users.setAge(30);

    // 1. 创建配置管理器对象
    Configuration config = new Configuration();
    // 2. 加载主配置文件， 默认加载src/hibernate.cfg.xml
    config.configure();
    // 3. 根据加载的主配置文件，创建对象
    SessionFactory sf = config.buildSessionFactory();
    // 4. 创建Session对象
    Session session = sf.openSession();
    // 5. 开启事务
    Transaction tx = session.beginTransaction();

    // --- 保存
    session.save(users);

    // 6. 提交事务/关闭session
    tx.commit();
    session.close();
```

#### 3、Hibernate Api

1、Session
 一个与数据库连接的会话信息， Sesison里面维护了一个连接对象，且对常用操作进行封装。

- 保存对象

  

  ```css
  session.save(obj)；
  ```

- 主键查询

  

  ```kotlin
  Users u = (Users) session.get(Users.class, 1)；//查询的主键不存在，返回null
  或Session.load(clazz,id);   //查询的主键不存在只要使用就报错
  ```

- 删除

  

  ```kotlin
  Object obj = session.get(Users.class, 21)；
  if (obj != null) {
    session.delete(obj);
  }
  ```

- 修改

  

  ```cpp
  Users u = new Users()；
  u.setUserId(30000)；  //主键一定要在数据库存在
  u.setAge(30)；
  session.update(u)；
  ```

- 保存或更新

  

  ```cpp
  Users u = new Users()；
  u.setUserId(5)；
  u.setUserName("Jacky001")；
  session.saveOrUpdate(u)；//如果有设置主键且主键存在执行更新
  ```

- HQL查询

  

  ```php
  // 得到hql查询接口
  Query q = session.createQuery("from Users");
  // 查询数据
  List<Users> list = q.list(); 
  ```

- criteria 查询 ，完全面向对象的查询

  

  ```cpp
  // 获取Criteria接口
  Criteria c = session.createCriteria(Users.class);
  // 设置条件
  c.add(Restrictions.eq("userName", "Jacky001"));
  List<Users> list = c.list();
  ```

#### 4、hibernate.cfg.xml配置详解

1、查看配置提示

- hibernate-distribution-3.6.0.Final\project\etc\hibernate.properties

2、自动建表

- 配置方式

  

  ```xml
    <!-- 2.1 查看hibernate生成的sql语句 -->
    <property name="hibernate.show_sql">true</property>
    <!-- 2.2 格式化sql语句
    <property name="hibernate.format_sql">true</property> -->
    <!-- 2.3自动建表 -->
    <property name="hibernate.hbm2ddl.auto">update</property>
  
    #hibernate.hbm2ddl.auto create-drop    每次在创建sessionFactory的时候创建表，执行sf.close()删除表。
    #hibernate.hbm2ddl.auto create         每次都先删除表，再创建新的表
    #hibernate.hbm2ddl.auto update        如果表不存在则创建，存在就不创建！
    #hibernate.hbm2ddl.auto validate       检查映射配置与数据库结构是否一致，不一致就报错!  (严格)
  ```

- 代码方式

  

  ```cpp
    // 创建配置管理器对象，加载主配置文件(会加载映射)
    Configuration cfg = new Configuration().configure();
    // 自动建表工具类
    SchemaExport export = new SchemaExport(cfg);
    // 创建表
    // 第一个参数： 是否打印建表语句到控制台
    // 第二个参数： 是否执行脚本，生成表
    export.create(true, true);
  ```

#### 5、映射配置

1、映射文件

- 命名：*.hbm.xml

- 作用： 描述“对象”与“表”的映射关系，通过映射文件可以描述一张完整的表。

- 配置详解

  

  ```xml
  <?xml version="1.0" encoding="UTF-8"?>
  <!DOCTYPE hibernate-mapping PUBLIC 
    "-//Hibernate/Hibernate Mapping DTD 3.0//EN"
    "http://www.hibernate.org/dtd/hibernate-mapping-3.0.dtd">
  
  <!-- 
    通过XML映射，把对象映射到数据库的表中！
    
    package 表示包名； 可选，如果没有写，后面的类必须指定类的全名！
    auto-import="true" 默认为true，即在写hql的时候，会自动引入包名；
                           如为false，hql中对象要写上包名称
                      Query q = session.createQuery("from Users");
   -->
  <hibernate-mapping package="com.czd.api" auto-import="true">
    <!-- 
        class 表示映射的一个javabean对象
              (可以有多个class节点，但一般一个映射文件对应一个class)
              
            name  表示映射的类的名称; 
            table (可选)类的名称，对应的表名, 如果不写默认与类名称一样
            
     -->
    <class name="Users" table="t_users">
        <!-- 
            
            id  表示映射的是主键
                        注意： 在hibernate的映射文件中，必须要有主键映射!
                                     那就要求表必须要有主键！
                                     
            generator  表示的是主键生成策略  (Api : 5.1.2.2.1. Various additional generators)
              class
                  
                 identity  主键自增长， mysql/sqlservlet等数据库使用的自增长的方式
                 sequence  以序列的方式实现自增长；
                 native   表示主键自增长: 根据底层数据库的能力选择 identity、sequence等其中一个。
                 
                 assigned  手动指定主键的值  
                 uuid      uuid的值作为主键，确保一定唯一
         -->
        <id name="userId" column="id">
            <generator class="native"></generator>
        </id>
        
        
        <!-- 
            property 表示普通字段的映射
                name 属性的名称
                column 可选，如果没有指定，与属性名称一致
                length 表示字符长度，只对字符类型有效
                type 数据库中字段的类型  （如果没有指定，会匹配属性的类型）
                    hibernate中指定的类型:  小写开头
                             java中类型:  写类的全名
                unique  设置为true，表示给当前列添加唯一约束
                        (主键约束 = 唯一约束 + 非空)
         -->
        <property name="userName" type="java.lang.String" column="username" length="50" unique="true"></property>
        
        <property name="age" column="age" type="int"></property>
        
        <!-- 注意：如果列名称对应的是数据库的关键字，需要处理 -->
        <property name="desc" column="`desc`" length="200"></property>
    </class>
    
  
  </hibernate-mapping>
  ```

#### 6、联合主键映射

1、步骤

- 联合主键对象

  

  ```java
  public class CompositeKeys implements Serializable{
  
    private String name;
    private String address;
  
  }
  ```

- bean

  

  ```tsx
  // 员工
  public class Employee {
  
      // 联合主键对象
      private CompositeKeys keys;
      private String dept;
      private Date birth;
      ..
  } 
  ```

- Employee的映射

  

  ```xml
    <?xml version="1.0" encoding="UTF-8"?>
    <!DOCTYPE hibernate-mapping PUBLIC 
        "-//Hibernate/Hibernate Mapping DTD 3.0//EN"
        "http://www.hibernate.org/dtd/hibernate-mapping-3.0.dtd">
  
    <hibernate-mapping package="xxxx.c_composite">
        <class name="Employee" table="t_employee">
            <composite-id name="keys">
                <key-property name="name"></key-property>
                <key-property name="address"></key-property>
            </composite-id>
            
            <property name="dept" length="50"></property>
            
            <!-- 数据库生成的是:date 
            <property name="birth" type="date"></property>-->
            
            <!-- hibernate使用timestamp, 生成的数据库日期是: datetime -->
            <property name="birth" type="timestamp"></property>
        </class>
    </hibernate-mapping>
  ```

#### 7、hibernate对象状态

1、临时状态

- 直接new出来的对象
- 不处于session的管理(即没有与任何一个session关联)
- 对象在数据库中没有对应的记录

2、持久化状态

- 处于session的管理范围，当执行session的方法如：save/update/saveOrUpdate/get/load对象就会自动转变为持久化状态
- 在数据库中有对应的记录
- 处于持久化状态的对象，当对对象属性进行更改的时候，提交事务更改会反映到数据库中

3、游离状态

- 对象不处于session的管理范围，通常指session关闭后对象的状态
- 对象在数据库中有对应的记录

4、转化实例



```go
    Session session = sf.openSession();
    session.beginTransaction();
    
    // 创建对象                             【临时状态】
    Employee emp = new Employee();
    emp.setName("Rose");
    emp.setBirth(new Date());
    
    // 保存
    session.save(emp);                  // 【持久化状态】
    emp.setName("Lucy..");              // 修改会反映到数据库中，所以这里会生成update语句
    
    session.getTransaction().commit();
    session.close();

    emp.setName("New Lucy");
    System.out.println(emp.getName());   // 此时对象处于【游离状态】
```

#### 8、 Session缓存

1、概念

- Session缓存，也叫做一级缓存；
- 当执行session的相关方法，如: save()/update()/get()/load()等方法的时候，对象会自动放入一级缓存中；
- 当Session关闭后，一级缓存内容失效。

2、特点

- 缓存有效范围，只在当前session范围内有效，缓存时间很短、作用范围小；
- 一级缓存，可以在短时间内多次操作数据库的时候，才会明显提升效率；
- 一级缓存的结构：Ma<主键，对象>；
- 在提交事务时候，Hibernate会同步缓存数据到数据库中，会对比缓存数据与数据库数据是否一致，如果不一致，才提交更改到数据库(生成update)；
- hibernate提供的一级缓存有hibernate自身维护，如果想操作一级缓存内容，必须通过hibernate提供的方法：
   session.flush()： 手动让让一级缓存内容与数据库同步
   session.evict(emp1)： 清空一级缓存中对象，清除指定的对象
   session.clear()；  清空所有缓存

#### 9、list()与iterator()查询区别

1、list(通常使用频率较高)

- Query接口定义的list查询方法，一次查询所有满足需要的数据。

2、iterator

- Query接口定义的iterator查询方法，先查询所有满足条件记录的主键   （查询1次）
   再根据每一个id，进行主键查询，有多少记录，查询多少次  （查询n次）
- iterator查询，迭代数据的时候，只有用到数据的时候，才会查找数据库(懒加载)

3、区别

- 查询数据方式不同： 查询全部与查询N+1
- 一级缓存
   List查询，查询的结果会放入一级缓存，但不会从一级缓存中获取；
   Iteraotro查询，会放入一级缓存，同时也会从一级缓存中获取。

#### 10、lazy 属性

1、懒加载

- 用到数据的时候，才向数据库发送查询的sql；

2、懒加载异常（org.hibernate.LazyInitializationException: could not initialize proxy - no Session）

- 在关闭后，不能能懒加载数据， 那么就要求关闭前把懒加载使用的数据先查询出来：

  

  ```kotlin
    Session session = sf.openSession();
    session.beginTransaction();
    
    // 懒加载
    Employee emp = (Employee) session.load(Employee.class, 1);  
    /*
     * 解决懒加载异常：
     *     Session关闭后，不能使用懒加载数据！
     *     (1) 在session关闭之前，先使用一次数据； 那么session关闭后再使用对象数据，就不是懒加载数据了
     *     (2) 强迫代理对象初始化
     * */
    //emp.getName();            // select ... 
    Hibernate.initialize(emp);
    
    session.getTransaction().commit();
    session.close();
  
    System.out.println(emp.getName());     // 不是懒加载数据, 因为数据已经查询出来啦
  ```

#### 11、关系映射

1、集合

- set/list/map

  

  ```xml
  <?xml version="1.0" encoding="UTF-8"?>
  <!DOCTYPE hibernate-mapping PUBLIC 
    "-//Hibernate/Hibernate Mapping DTD 3.0//EN"
    "http://www.hibernate.org/dtd/hibernate-mapping-3.0.dtd">
  
  <hibernate-mapping package="xxxx">
    <class name="Users" table="t_users">
        <id name="id" column="id">
            <generator class="native"></generator>
        </id>
        <property name="name" length="50"></property>
        
        <!-- 
            当前用户对应的多个地址 
                1. 了解
                    当前对象：Users
                    当前表：  t_users
                    当前表主键： id
                2. 集合属性的映射  【private Set<String> addressSet;】
                    要映射的属性:   集合属性,addressSet 
                    映射到的表：            t_address
                    指定外键字段：       user_id       
                    外键字段之外的其他字段的映射， address 
        -->
        <set name="addressSet" table="t_address">
            <key column="user_id"></key>
            <element column="address" type="string"></element>
        </set>
        
        <!-- list集合映射 -->
        <list name="addressList" table="t_addressList">
            <key column="user_id"></key>
            <list-index column="idx_"></list-index>
            <element column="address" type="string"></element>
        </list>
        
        <!-- map集合的映射 -->
        <map name="addressMap" table="t_addressMap">
            <key column="user_id"></key>
            <map-key column="shortName" type="string"></map-key>
            <element column="address" type="string"></element>
        </map>
        
    </class>
    
  </hibernate-mapping>
  ```

- 多对一

  

  ```xml
  public class Address {
  
    private int id;
    private String name;
    private String shortName;
    private String code;
  
    // 地址与用户， 是多对一的关系
    private Users user;
  …
  }
  
  <?xml version="1.0" encoding="UTF-8"?>
    <!DOCTYPE hibernate-mapping PUBLIC 
        "-//Hibernate/Hibernate Mapping DTD 3.0//EN"
        "http://www.hibernate.org/dtd/hibernate-mapping-3.0.dtd">
  
    <!--  地址映射文件 -->
    <hibernate-mapping package="xxxx">
        <class name="Address" table="t_address">
            
            <id name="id" column="id">
                <generator class="native"></generator>
            </id>
            <property name="name" length="50"></property>
            <property name="shortName" length="20"></property>
            <property name="code" length="20"></property>
            
            <!-- 
                多对一的配置:
                    1.映射的对象
                    2.对象对应的外键字段
                    3.对象的类型
                注意：
                    对象一定是有映射文件进行映射！  
             -->
             <many-to-one name="user" column="user_id" class="Users"></many-to-one>
                    
        </class>
        
    </hibernate-mapping>
  ```

- 一对多

  

  ```xml
  public class Users {
  
   private int id;
   private String name;
    private int age;
    // 用户与地址，是一对多的关系  【注意一定要用接口接收！】
    private Set<Address> address = new HashSet<Address>();
  }
  
  <?xml version="1.0" encoding="UTF-8"?>
    <!DOCTYPE hibernate-mapping PUBLIC 
        "-//Hibernate/Hibernate Mapping DTD 3.0//EN"
        "http://www.hibernate.org/dtd/hibernate-mapping-3.0.dtd">
  
    <!--  用户映射文件 -->
    <hibernate-mapping package="xxxx">
        <class name="Users" table="t_users">
            <id name="id" column="id">
                <generator class="native"></generator>
            </id>
            <property name="name" length="50"></property>
            <property name="age"></property>
            
            <!-- 
                一对多映射:
                    映射关键点：
                   1. 映射的集合属性： address
                   2. 集合属性，映射到的表： t_address
                   3. 表的外键： user_id
                   4. 集合属性的类型
             -->
             <set name="address" table="t_address">
                 <key column="user_id"></key>
                 <one-to-many class="Address"/>
             </set>
            
            
        </class>
        
  
    </hibernate-mapping>
  ```

- Inverse属性

  

  ```xml
  <?xml version="1.0" encoding="UTF-8"?>
    <!DOCTYPE hibernate-mapping PUBLIC 
        "-//Hibernate/Hibernate Mapping DTD 3.0//EN"
        "http://www.hibernate.org/dtd/hibernate-mapping-3.0.dtd">
  
    <hibernate-mapping package="xxxx">
        <class name="Dept" table="t_dept">
            
            <id name="id" column="id">
                <generator class="native"></generator>
            </id>
            <property name="deptName" length="20"></property>
            
            <!-- 
                一对多
                    inverse  默认为false, 有控制权！
                            true 表示控制反转！
             -->
             <set name="employees" inverse="false">
                <key column="dept_id"></key>
                <one-to-many class="Employee"/>
             </set>
            
        </class>
        
  
    </hibernate-mapping>
  ```

- 多对多

  

  ```xml
  <?xml version="1.0" encoding="UTF-8"?>
    <!DOCTYPE hibernate-mapping PUBLIC 
        "-//Hibernate/Hibernate Mapping DTD 3.0//EN"
        "http://www.hibernate.org/dtd/hibernate-mapping-3.0.dtd">
  
    <hibernate-mapping package="xxxx">
        <class name="Person" table="t_person">
            
            <id name="personId">
                <generator class="native"></generator>
            </id>
            <property name="name" length="20"></property>
            
            <!-- 
                多对多映射配置:
             -->
             <set name="projects" table="t_relation">
                <key column="person_id"></key>
                <many-to-many column="project_id" class="Project"></many-to-many>
             </set>
            
        </class>
        
    </hibernate-mapping>
  
  <?xml version="1.0" encoding="UTF-8"?>
    <!DOCTYPE hibernate-mapping PUBLIC 
        "-//Hibernate/Hibernate Mapping DTD 3.0//EN"
        "http://www.hibernate.org/dtd/hibernate-mapping-3.0.dtd">
  
    <hibernate-mapping package="xxxx.c_many2many">
        <class name="Project" table="t_project">
            
            <id name="id" column="id">
                <generator class="native"></generator>
            </id>
            <property name="name" length="20"></property>
            
            <!-- 
                多对多配置：
                    table  集合元素映射的中间表
                    key    中间表外键字段
                    many-to-many
                        column 当前外键字段对应的字段
                        class  集合元素的类型
                
                inverse 
                    true 表示控制权转移！当前方(Project) 没有控制权!
             -->
             <set name="person" table="t_relation" inverse="true" lazy="extra">
                <key column="project_id"></key>
                <many-to-many column="person_id" class="Person"></many-to-many>
             </set>
             
        </class>
        
  
    </hibernate-mapping>
  ```

- 一对一

  

  ```xml
  <hibernate-mapping package="xxxx  ">
        <class name="User" table="t_user">
            
            <id name="id">
                <!-- 指定了主键生成策略为“外键策略”， 把别的表的主键作为当前表的主键！ -->
                <generator class="foreign">
                    <param name="property">idCard</param>
                </generator>
            </id>
            <property name="name" length="50"></property>
            <property name="sex" type="character" length="1"></property>
            
            <!-- 
                特殊的一对一映射，主键生成策略为“外键”
                constrained="true"  在主键上，添加外键约束！
             -->
            <one-to-one name="idCard" class="IdCard" constrained="true"></one-to-one>        
        </class>
        
  
    </hibernate-mapping>
  
   <hibernate-mapping package="xxxx">
        <class name="IdCard" table="t_idcard">
            
            <id name="cardNo">
                <generator class="assigned"></generator>
            </id>
            <property name="place" length="200"></property>
            <property name="date" type="date"></property>
            
            <!-- 一对一映射： 无外键方 -->
            <one-to-one name="user" class="User"></one-to-one>
        </class>
        
  
    </hibernate-mapping>
  ```

- 组件映射

  

  ```xml
  <hibernate-mapping package="xxxx.e_component">
  <class name="Car" table="t_car">
    <id name="id">
        <generator class="native"></generator>
    </id>
    <property name="type"></property>
    
    <!-- 组件映射 -->
    <component name="wheel" class="Wheel">
        <property name="count"></property>
        <property name="size"></property>
    </component>
  </class>
  
  </hibernate-mapping>
  ```

- 继承映射

  

  ```xml
  <!-- 
   整个继承结构一张表！
   -->
  <hibernate-mapping package="xxxx.f_extends2">
  <class name="Animal" table="t_animal">
    <id name="id">
        <generator class="native"></generator>
    </id>
    <!-- 指定鉴别器字段，用于区分不同的子类信息 -->
    <discriminator column="type_"></discriminator>
    
    <property name="name" length="20"></property>
    
    <!-- 子类：猫 -->
    <!--  discriminator-value 指定鉴别器字段的值，如果没有指定，默认是类的全名! -->
    <subclass name="Cat" discriminator-value="cat_">
        <property name="catching"></property>
    </subclass>
    
    
    <!-- 子类：狗 -->
    <subclass name="Dog" discriminator-value="dog_">
        <property name="play"></property>
    </subclass>
    
    
  </class>
  
      <!-- 
        每个类一张表， 三张表
     -->
    <hibernate-mapping package="xxxx.f_extends3">
        <class name="Animal" table="t_animal">
            <id name="id">
                <generator class="native"></generator>
            </id>
            
            <property name="name" length="20"></property>
            
            <!-- 子类：猫 -->
            <joined-subclass name="Cat" table="t_cat">
                <key column="id"></key>
                <property name="catching"></property>
            </joined-subclass>
            
            <!-- 子类：狗 -->
            <joined-subclass name="Dog" table="t_dog">
                <key column="id"></key>
                <property name="play"></property>
            </joined-subclass>
            
            
        </class>
    </hibernate-mapping>
  
    <!-- 
        每个子类一张表， 2张表
        abstract="true"  表示当前类不对应表!
     -->
    <hibernate-mapping package="xxxx.f_extends4">
        <class name="Animal" abstract="true">
            <id name="id">
                <generator class="assigned"></generator>
            </id>
            
            <property name="name" length="20"></property>
            
            <!-- 注意：使用union-subclass要求主键不能自增长！ -->
            <!-- 子类：猫 -->
            <union-subclass name="Cat" table="t_cat">
                 <property name="catching"></property>
            </union-subclass>
            
            <!-- 子类：狗 -->
            <union-subclass name="Dog" table="t_dog">
                <property name="play"></property>
            </union-subclass>
        
        </class>
    </hibernate-mapping>
  ```

- hql

  

  ```jsx
  <hibernate-mapping package="xxxx.h_query">
        <class name="Dept" table="t_dept">
            
            <id name="id" column="id">
                <generator class="native"></generator>
            </id>
            <property name="deptName" length="20"></property>
            
            <!-- 
                一对多
             -->
             <set name="employees" inverse="false" cascade="save-update,delete">
                <key column="dept_id"></key>
                <one-to-many class="Employee"/>
             </set>
            
        </class>
        
        <!-- 定义hql查询 -->
        <query name="my_hql_select">
            <!-- from Dept where id &lt; 4    -->
            
            <!-- CDATA区，可以对批量转译 -->
            <![CDATA[
                from Dept where id < 4
            ]]>
        </query>
  
    </hibernate-mapping>
  
    Session session = sf.openSession();
    session.beginTransaction();
  
    // 从配置文件中，读取hql，便于后期维护
    Query q = session.getNamedQuery("my_hql_select");
    //q.setParameter("name_", name);
    
    session.getTransaction().commit();
    session.close();
  ```

#### 12、二级缓存

1、特点

- 基于应用程序的缓存、基于sessionFactory级别的缓存；
- 缓存数据可以被多个session共享，但需要指定哪些对象要放入二级缓存中；
- 放入二级缓存中对象的特点：经常使用、不会被经常修改。

2、步骤

- hibernate.cfg.xml中配置

  

  ```xml
    开启二级缓存 
   <property name="hibernate.cache.use_second_level_cache">true</property>
   指定使用哪一种二级缓存 
   <property name="hibernate.cache.provider_class">org.hibernate.cache.HashtableCacheProvider</property>
    开启查询缓存 
   <property name="hibernate.cache.use_query_cache">true</property>
    加入二级缓存的类 
   <class-cache usage="read-write" class="xxxx.b_second_cache.Dept"/>
   <class-cache usage="read-write" class="xxxx.b_second_cache.Employee"/>
    集合缓存 (集合缓存，集合元素也要放入二级缓存)
   <collection-cache usage="read-only" collection="xxxx.b_second_cache.Dept.employees"/>
  ```

3、缓存策略

- usage="read-write"    二级缓存的数据可以读、写
- usage="read-only"     二级缓存的数据只读
- usage="nonstrict-read-write"    非严格读取
- usage="transactional"   基于事务的策略

4、hql 查询缓存



```go
    Dept dept = null;
    /*
     * Session1:
     */
    Session session1 = sf.openSession();
    session1.beginTransaction();
    // hql 查询
    Query q = session1.createQuery("from Dept").setCacheable(true);// 放入二级缓存或者从二级缓存中获取
    q.list();
    session1.getTransaction().commit(); 
    session1.close();
    
    System.out.println("===============================");
    /*
     * Session2:        
     */
    Session session2 = sf.openSession();
    session2.beginTransaction();
    // hql 查询
    q = session2.createQuery("from Dept").setCacheable(true); // 放入二级缓存或者从二级缓存中获取
    q.list();
    session2.getTransaction().commit();  
    session2.close();
```

5、 更新数据

- 不会通知一级缓存，会通知二级缓存；

#### 13、连接池

1、Hibernate对连接的支持

- 查看hibernate.properties，hibernate.connection.pool_size 1，hibernate自带的连接池，只有一个连接

2、hibernate对C3p0连接池的支持



```xml
     <!-- C3p0连接池支持类 -->
     <property name="hibernate.connection.provider_class">org.hibernate.connection.C3P0ConnectionProvider</property>
     <!-- 最大连接数 -->
     <property name="hibernate.c3p0.max_size">6</property>
     <!-- 最小连接数 -->
     <property name="hibernate.c3p0.min_size">4</property>
     <!-- 当连接不够用时候每次的增量 -->
     <property name="hibernate.c3p0.acquire_increment">2</property>
     <!-- 最多执行的命令的个数 -->
     <property name="hibernate.c3p0.max_statements">100</property>
     <!-- 连接空闲测试时间 -->
     <property name="hibernate.c3p0.idle_test_period">3000</property>  
```

#### 14、创建Session的两种方式

1、方式1

- 每次都创建一个新的session



```csharp
    Session session1 = sf.openSession();
    Session session2 = sf.openSession();
    System.out.println(session1 == session2);  // false
```

2、方式2

- 线程的方式创建session

  

  ```xml
     <!-- 配置session的创建方式，线程方式创建session -->
     <property name="hibernate.current_session_context_class">thread</property>
  
    Session session3 = sf.getCurrentSession();
    Session session4 = sf.getCurrentSession();
    System.out.println(session3 == session4);   // true
  ```

