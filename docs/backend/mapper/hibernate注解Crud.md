---
autoGroup-2: Hibernate
title:  注解CRUD(重要)
---

hibernate注解使用


hibernate默认使用xml映射文件来关联实体和数据库表，随着系统的越来越复杂，每增加一个实体类，就需要配置一个xml映射文件，一般的系统少说也有十几个实体类，多的可能会有上百个实体，如此数量繁多的xml配置，在开发中也是很难维护的，实体一改动，配置文件就需要做相应的调整，通过xml配置的方式在实际中，也越来越不推荐使用，而是通过注解的方式。

hibernate注解，默认情况下，只需要配置@Id,@Table,@Entity等主要的属性，其余的属性和字段如果没有特别的要求，可以不用设置，如果属性createDate需要映射createdate字段，那么只需要通过如下表示：

@Column(name="createdate")
public Date createDate;

下面我们使用hibernate注解配置实现关系映射。

实体类：

BaseEntity.java

```java
package com.xxx.hibernate4.entity;

import java.io.Serializable;
import java.util.Date;

import javax.persistence.Column;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.MappedSuperclass;
@MappedSuperclass
public class BaseEntity implements Serializable{
	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	protected Integer id;
	@Column(name="createdate")
	protected Date createDate;
	@Column(name="modifydate")
	protected Date modifyDate;
	public Integer getId() {
		return id;
	}
	public void setId(Integer id) {
		this.id = id;
	}
	public Date getCreateDate() {
		return createDate;
	}
	public void setCreateDate(Date createDate) {
		this.createDate = createDate;
	}
	public Date getModifyDate() {
		return modifyDate;
	}
	public void setModifyDate(Date modifyDate) {
		this.modifyDate = modifyDate;
	}
	
}
```



User.java

```java
package com.xxx.hibernate4.entity;

import javax.persistence.Entity;
import javax.persistence.Table;

@Entity
@Table(name="xx_user")
public class User extends BaseEntity {
	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	private String username;
	private String password;
	private String mobile;
	private int age;
	public String getUsername() {
		return username;
	}
	public void setUsername(String username) {
		this.username = username;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	public String getMobile() {
		return mobile;
	}
	public void setMobile(String mobile) {
		this.mobile = mobile;
	}
	public int getAge() {
		return age;
	}
	public void setAge(int age) {
		this.age = age;
	}
	@Override
	public String toString() {
		return "User [username=" + username + ", password=" + password + 
                ", mobile=" + mobile + ", age=" + age + ", id="
				+ id + "]";
	}
	
	
}
```



hibernate.cfg.xml

```xml
<?xml version="1.0" encoding="UTF-8"?>

<!DOCTYPE hibernate-configuration PUBLIC "-//Hibernate/Hibernate Configuration DTD 3.0//EN" 
"http://www.hibernate.org/dtd/hibernate-configuration-3.0.dtd" >
<hibernate-configuration>
  <session-factory>
      <property name="connection.driver_class">com.mysql.jdbc.Driver</property>
      <property name="connection.url">jdbc:mysql:///hibernate4?useUnicode=true&amp;characterEncoding=UTF-8</property>
      <property name="connection.username">root</property>
      <property name="connection.password">0</property>
      <property name="connection.pool_size">1</property>
      <property name="dialect">org.hibernate.dialect.MySQL57InnoDBDialect</property>
      <property name="show_sql">true</property>
      <property name="format_sql">true</property>
      <property name="hbm2ddl.auto">update</property>
      <mapping class="com.xxx.hibernate4.entity.User"/>
  </session-factory>
</hibernate-configuration>
```

### hibernate.cfg.xml配置文件中mapping以前是引入的user.hbm.xml配置文件，现在改为了class="com.xxx.hibernate4.entity.User" 直接指向了实体类。

```java
App.java

package com.xxx.hibernate4;
import java.util.Date;

import org.hibernate.HibernateException;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.Transaction;
import org.hibernate.cfg.Configuration;

import com.xxx.hibernate4.entity.BaseEntity;
import com.xxx.hibernate4.entity.User;

@SuppressWarnings("deprecation")
public class App {
	public static SessionFactory sessionFactory;
	public static final ThreadLocal<Session> session = new ThreadLocal<>();
	
	static {
		try {
			Configuration cfg = new Configuration().configure();
			sessionFactory = cfg.buildSessionFactory();
		} catch (HibernateException e) {
			e.printStackTrace();
			System.err.println("Initialize SessionFactory fail "+e);
		}
	}

public static Session getSession() {
		Session sess = (Session)session.get();
		if(sess==null) {
			sess = sessionFactory.openSession();
			session.set(sess);
		}
		return sess;
	}
	
	public static void closeSession() {
		Session sess = (Session)session.get();
		if(sess!=null) {
			sess.close();
		}
		session.set(null);
		sessionFactory.close();
	}
	
	public static void add(BaseEntity entity) {
		Session sess = getSession();
		Transaction tx = sess.beginTransaction();
		entity.setCreateDate(new Date());
		entity.setModifyDate(new Date());
		sess.save(entity);
		tx.commit();
		closeSession();
	}
	
	public static void search(String className) {
		Session sess = getSession();
		Integer id = 1;
		Object object = sess.get(className, id);
		System.out.println(object);
		closeSession();
	}
	
	public static void main( String[] args ){
		
		User user = new User();
		user.setUsername("hadoop");
		user.setPassword("hadoop");
		user.setAge(20);
		user.setMobile("15011186303");
		add(user);
		
		//search("com.xxx.hibernate4.entity.User");
	}

 
```