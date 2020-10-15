---
autoGroup-4: Quartz
title: 任务调度Quartz
---

## quartz 任务调度《基于springBoot + Vue + Antd UI》


```xml
	<!--quartz依赖 -->
		<dependency>
			<groupId>org.springframework.boot</groupId>
			<artifactId>spring-boot-starter-quartz</artifactId>
		</dependency>
        	<dependency>
			<groupId>org.springframework.boot</groupId>
			<artifactId>spring-boot-starter-web</artifactId>
             <spring-boot.version>2.3.2.RELEASE</spring-boot.version>
		</dependency>
```

### application.properties
```
# quartz任务配置
spring.quartz.job-store-type=jdbc
spring.quartz.properties.org.quartz.scheduler.instanceName=clusteredScheduler
spring.quartz.properties.org.quartz.scheduler.instanceId=AUTO
spring.quartz.properties.org.quartz.jobStore.class=org.quartz.impl.jdbcjobstore.JobStoreTX
spring.quartz.properties.org.quartz.jobStore.driverDelegateClass=org.quartz.impl.jdbcjobstore.StdJDBCDelegate
spring.quartz.properties.org.quartz.jobStore.dataSource=quartzDataSource
spring.quartz.properties.org.quartz.jobStore.tablePrefix=QRTZ_
# 打开集群配置
spring.quartz.properties.org.quartz.jobStore.isClustered=true
# 设置集群检查间隔100s
spring.quartz.properties.org.quartz.jobStore.clusterCheckinInterval=10000
spring.quartz.properties.org.quartz.jobStore.useProperties=false
spring.quartz.properties.org.quartz.threadPool.class=org.quartz.simpl.SimpleThreadPool
spring.quartz.properties.org.quartz.threadPool.threadCount=10
spring.quartz.properties.org.quartz.threadPool.threadPriority=5
spring.quartz.properties.org.quartz.threadPool.threadsInheritContextClassLoaderOfInitializingThread=true


```



## CodingDemo
##### 详细代码路径 > com.osvue.example.quartz
项目[boot_vue](https://github.com/osvue/springboot_quartz_vue.git)


## 写在最后
::: tip

今天是贰零贰零年十月十五号，以后可能不经常更新此博客了。 <br>
坚持从实际出发，一切实事求是，不知道未来在哪里。。。。。  <br>
最后一句话：<br>
            大道至简，知行合一！

:::