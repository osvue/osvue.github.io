---
autoGroup-2: Hibernate
title:  注解配置 语法
---

BOOK
```java
@Entity //定义一个实体
@Table(name = "t_book",catalog = "hibernatetest3")//描述类与表对应
public class Book {
	@Id //主键
	//@GeneratedValue  //native
	@GeneratedValue(strategy = GenerationType.IDENTITY) //identity
	private Integer id;   //主键
	
	@Column(name = "c_name",length = 30,nullable = true)
	private String name;
	
	@Temporal(TemporalType.TIMESTAMP)//定义日期类型
	private Date publicationDate;
	
	private Double price;// 价格 如果没有添加注解，也会自动的生成在表中
}
```
// 测试的po的注解开发
```java
	@Test
	public void test1() {
		Session session = HibernateUtils.openSession();
		session.beginTransaction();
		
		Book book = new Book();
		book.setName("PO注解开发测试");
		book.setPrice(99d);
		book.setPublicationDate(new Date());
		
		session.save(book);
		
		session.getTransaction().commit();
		session.close();
	}
```
## Person（设置UUID类型、类的属性不在表中映射）
```java
@Entity
@Table(name = "t_person",catalog = "hibernatetest3")
public class Person {
	@Id  //主键生成策略使用UUID类型
	@GenericGenerator(name = "myuuid" ,strategy = "uuid")
	@GeneratedValue(generator = "myuuid")
	private String id;
	

	@Type(type = "string")
	private String name;
	
	@Transient//设定类的属性不在表中映射
	private String msg;
}
```
##  测试设置UUID类型、类的属性不在表中映射
```java
Test

@Test
	public void test2() {
		Session session = HibernateUtils.openSession();
		session.beginTransaction();
		

		Person p = new Person();
		p.setName("武七");
		p.setMsg("MyMsg");
		
		session.save(p);
		
		session.getTransaction().commit();
		session.close();
	}
```
## 二、一对多（OneToMany）
```java
Customer
/**

CascadeType.PERSIST （级联新建） 

CascadeType.REMOVE （级联删除） 

CascadeType.REFRESH （级联刷新） 

CascadeType.MERGE （级联更新）中选择一个或多个。 

CascadeType.ALL

使用方法：

@OneToMany(fetch=FetchType.EAGER,cascade=javax.persistence.CascadeType.ALL)
@Cascade({org.hibernate.annotations.CascadeType.MERGE})

 *
 */
@Entity
@Table(name = "t_customer",catalog = "hibernatetest3")
public class Customer {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer id;
	private String name;
	
	// 描述客户可以有多个订单
		/*
		 * targetEntity相当于<one-to-many class="">
		 * mappedBy相当于inverse=true
		 */
	@OneToMany(targetEntity = Order.class,mappedBy = "c",cascade = CascadeType.ALL)
	private Set<Order> orders = new HashSet<Order>();
	
	}
```

	```java
	Order
	@Entity
	@Table(name = "t_order",catalog = "hibernatetest3")
	public class Order {
		@Id
		@GeneratedValue(strategy = GenerationType.IDENTITY)
		private Integer id;
		private Double money;
		private String receiverInfo;
		
	// 订单与客户关联
	@ManyToOne(targetEntity = Customer.class)
	@JoinColumn(name = "c_customer_id")//指定外键列
	private Customer c;
}
```

​```java
Test
// 测试one-to-many注解操作(保存客户时级联保存订单)
	@Test
	public void test3() {
		Session session = HibernateUtils.openSession();
		session.beginTransaction();
		

		Customer c = new Customer();
		c.setName("刘一");
		
		Order o1 = new Order();
		o1.setMoney(99d);
		o1.setReceiverInfo("北京");
		
		Order o2 = new Order();
		o2.setMoney(100d);
		o2.setReceiverInfo("上海");
		// 原因:是为了维护外键
		o1.setC(c);
		o2.setC(c);
		// 原因:是为了进行级联操作
		c.getOrders().add(o1);
		c.getOrders().add(o2);
		
		session.save(c);
		
		session.getTransaction().commit();
		session.close();
	}
```
## 三、多对多（ManyToMany）
```java
Student
@Entity
@Table(name = "t_student")
public class Student {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer id;
	

	private String name;
	
	// 使用JoinTabl来描述中间表，并描述中间表中外键与Student,Teacher的映射关系
	// joinColumns它是用来描述Student与中间表中的映射关系
	// inverseJoinColums它是用来描述Teacher与中间表中的映射关系
	@ManyToMany(targetEntity = Teacher.class)
	@JoinTable(name = "s_t",joinColumns = {
			@JoinColumn(name = "c_student_id",referencedColumnName = "id"),
	},inverseJoinColumns = {
			@JoinColumn(name = "c_teacher_id",referencedColumnName = "id")
	})//创建中间表
	@Cascade(CascadeType.SAVE_UPDATE)
	private Set<Teacher> teachers = new HashSet<Teacher>();
}
```
```java
Teacher
@Entity
@Table(name = "t_teacher")
public class Teacher {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer id;
	private String name;
	@ManyToMany(targetEntity = Student.class,mappedBy = "teachers")// 代表由对方来维护外键
	private Set<Student> students = new HashSet<Student>();

Test
// 测试多对多级联保存(保存学生时保存老师)
	@Test
	public void test4() {
		Session session = HibernateUtils.openSession();
		session.beginTransaction();
		

		Student s1 = new Student();
		s1.setName("张三");
		Student s2 = new Student();
		s2.setName("李四");
		
		Teacher t1 = new Teacher();
		t1.setName("老一");
		Teacher t2 = new Teacher();
		t2.setName("老二");
		
		s1.getTeachers().add(t1);
		s1.getTeachers().add(t2);
		s2.getTeachers().add(t1);
		s2.getTeachers().add(t2);
		
		session.save(s1);
		session.save(s2);
		
		session.getTransaction().commit();
		session.close();
	}
```
## 四、一对一（OneToOne）
```java
User
@Entity
@Table(name = "t_user")
public class User {
	@Id
	@GenericGenerator(strategy = "uuid",name = "myuuid")
	@GeneratedValue(generator = "myuuid")
	private String id;
	private String name;
	@OneToOne(targetEntity = IDCard.class,mappedBy = "user")//由对方维护外键
	private IDCard idCard;
}
IDCard
@Entity
@Table(name = "t_IDCard")
public class IDCard {
	@Id
	@GenericGenerator(strategy = "uuid",name = "myuuid")
	@GeneratedValue(generator = "myuuid")
	private String id;
	private String idNum;
	

	@OneToOne(targetEntity = User.class)
	@JoinColumn(name = "c_user_id")
	@Cascade(CascadeType.ALL)
	private User user;
}
```
### // 测试一对一操作外键映射方案(由idcard维护外键)
```java
Test

	@Test
	public void test5() {
		Session session = HibernateUtils.openSession();
		session.beginTransaction();
		

		User user = new User();
		user.setName("张三");
		
		IDCard idCard = new IDCard();
		idCard.setIdNum("1234567890");
		
		idCard.setUser(user);
		
		session.save(idCard);
		
		session.getTransaction().commit();
		session.close();
	}
```
一对一（主键映射）
Wife
@Entity
@Table(name = "t_wife")
public class Wife {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;
	private String name;
	@OneToOne
	@PrimaryKeyJoinColumn //说明husband与wife是使用主键映射
	@Cascade(CascadeType.SAVE_UPDATE)
	private Husband husband;

Husband
@Entity
@Table(name = "t_husband")
public class Husband {
	@Id
	@GenericGenerator(strategy = "foreign",name = "myForeignKey",parameters = {
			@Parameter(name = "property",value = "wife")
	})//Husband的主键设置成参考wife的主键方式
	@GeneratedValue(generator = "myForeignKey")
	private int id;
	private String name;
	

	@OneToOne(mappedBy="husband")//由wife维护外键
	@PrimaryKeyJoinColumn
	private Wife wife;

Test
// 测试一对一主键生成策略
	@Test
	public void test6() {
		Session session = HibernateUtils.openSession();
		session.beginTransaction();
		
		Wife wife = new Wife();
		wife.setName("潘金莲");
		
		Husband husband = new Husband();
		husband.setName("武大郎");
		
		//双向关联
		wife.setHusband(husband);
		husband.setWife(wife);
		
		session.save(wife);
		
		session.getTransaction().commit();
		session.close();
	}
