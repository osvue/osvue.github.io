#  Spring核心思想

* ioc
* aop
* 声明式事务

## IoC
IOC 是一个概念，是一种思想，其实现方式多种多样。当前比较流行的实现方式之一是DI。
Spring的配置文件是用于指导Spring工厂进行Bean的生产、依赖关系注入及Bean实例分发的“图纸”，它是一个或多个标准的XML文档
 -  spring ioc container
spring ioc container 管理一个或多个bean，bean来自xml中对bean定义的元数据(configuration metadata) 

## 构造器注入 constructor-arg

Person的构造器

```java
public Person(String name, Integer age, Food food) {
		this.name = name;
		this.age = age;
		this.food = food;
	}
```

 -  对其他Bean的引用 

```xml
<property name="food" ref="food"></property>
<bean id="food" class="com.msb.Food"></bean>
```

## 作用域

spring为bean提供了6种作用域，其中4种只有在web-aware的ApplicationContext种才有用。用户也可以创建自定义的作用域。

singleton 、prototype 、websocket、request、session、application

 -  singleton scope 单例作用域

每一个类，在一个容器内只能产生一个实例

 -  prototype scope 原型作用域

该bean每次被注入，或者使用getBean()方法获取时，都返回一个新的实例。

 -  Request scope

该作用域的bean，在每个HTTP request都会新建一个实例，当一个request结束后，该实例也会被丢弃。

 -  Session scope

某一个用户在一段时间内，会使用同一个session，session有超时时间，过了超时时间则session失效。不同用户使用不同的session。

 -  Application scope 

该作用域的bean，每一个application会创建一个

 -  MVC下Spring的单例 

想在一个singleton内多次调用短存活时间的bean（propotype、request、session等），希望调用的是不同的实例，那么就需要使用AOP proxy技术

## 线程安全问题 

业务对象并没有做线程的并发限制，因此不会出现各个线程之间的等待问题，或是死锁问题

MVC中的实体bean不是单例的

 -  成员变量 

在并发访问的时候这些成员变量将会是并发线程中的共享对象，也是影响线程安全的重要因素

 -  引用类型的成员 

其中引用类型的成员变量即我们在controller中注入的service，在service中注入的dao，这里将其定义为成员变量主

要是为了实例化进而调用里面的业务方法，在这些类中一般不会有全局变量，因此只要我们的业务方法不含有独立的

全局变量即使是被多线程共享，也是线程安全的。

Controller service dao 层中的业务类是多线程共享的，但是每个线程在处理数据的时候具体处理的数据是在每个线程中各自有一份。

 -  controller层

l final类型 线程安全

l 成员变量 有状态数据有线程安全问题

## 循环依赖的bean

 -  构造器注入循环依赖



创建3个类

循环引用属性

A类中 -> B类的一引用 - C类

当循环依赖的bean都是通过 **构造器注入依赖** 的时候，无论这些bean是singleton还是prototype，在获取bean的时候都会失败。

 -  通过属性注入

l 循环依赖的bean都是singleton 成功

l 循环依赖的bean都是prototype 失败

l 同时有singleton和prototype 当先获取的那个bean是singleton时，就会成功，否则失败

l ![img](/img/wps1.jpg)

当Spring容器在创建A时，会发现其引用了B，从而会先去创建B。同样的，创建B时，会先去创建C，而创建C时，又先去创建A。最后A、B、C之间互相等待，谁都没法创建成功

