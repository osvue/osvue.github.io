---
autoGroup-3: Sentinel
title: Sentinel 流量卫兵
---

* 服务雪崩
* 服务熔断
* 服务限流
* 服务降级

### 测试代码基于之前的Nacos章节

```xml
 <!--SpringCloud ailibaba nacos -->
        <dependency>
            <groupId>com.alibaba.cloud</groupId>
            <artifactId>spring-cloud-starter-alibaba-nacos-discovery</artifactId>
        </dependency>
        <!--SpringCloud ailibaba sentinel-datasource-nacos 后续做持久化用到-->
        <dependency>
            <groupId>com.alibaba.csp</groupId>
            <artifactId>sentinel-datasource-nacos</artifactId>
        </dependency>
        <!--SpringCloud ailibaba sentinel -->
        <dependency>
            <groupId>com.alibaba.cloud</groupId>
            <artifactId>spring-cloud-starter-alibaba-sentinel</artifactId>
        </dependency>
        <!--openfeign-->
        <dependency>
            <groupId>org.springframework.cloud</groupId>
            <artifactId>spring-cloud-starter-openfeign</artifactId>
        </dependency>
        <!-- SpringBoot整合Web组件+actuator -->
        <dependency>
            <groupId>org.springframework.boot</groupId>
            <artifactId>spring-boot-starter-web</artifactId>
        </dependency>
        <dependency>
            <groupId>org.springframework.boot</groupId>
            <artifactId>spring-boot-starter-actuator</artifactId>
        </dependency>
```

yml

```yml
spring:
  profiles:
    active: dev
  cloud:
    sentinel:
      transport:
        dashboard: localhost:8888 #配置Sentinel dashboard地址
        port: 8719
```

-----

## 流控规则

**流量控制**(flow control), 其原理是监控应用的QPS或并发线程数等指标，当达到指定的阈值时对流量进行控制，以避免被瞬时的流量高峰冲垮，从而保障应用的高可用性。

资源名：唯一名称，默认请求路径

针对来源：Sentinel可以针对调用者进行限流，填写微服务名，默认default（不区分来源）

阈值类型/单机阈值：

QPS（每秒钟的请求数量）：当调用该api的QPS达到阈值的时候，进行限流
线程数：当调用该api的线程数达到阈值的时候，进行限流
是否集群：（不）需要集群

流控模式：

* 直接：api达到限流条件时，直接限流
* 关联：当关联的资源达到阈值时，就限流自己
* 链路：只记录指定链路上的流量（指定资源从入口资源进来的流量，如果达到阈值，就进行限流）

快速失败：直接失败，抛异常
Warm Up：根据codeFactor（冷加载因子，默认3）的值，从阈值/codeFactor，经过预热时长，才达到设置的QPS阈值。
排队等待：匀速排队，让请求以匀速的速度通过，阈值类型必须设置为QPS。否则无效。
