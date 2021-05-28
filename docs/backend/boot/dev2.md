---
autoGroup-3: 开发整合
title: freeMarker
---

##  freeMarker配置文件


```properties

## Spring Boot  For Freemarker 
spring.freemarker.template-loader-path=classpath:/templates 
spring.freemarker.cache=false 
spring.freemarker.charset=UTF-8 
spring.freemarker.check-template-location=true 
spring.freemarker.content-type=text/html 
spring.freemarker.expose-request-attributes=false 
spring.freemarker.expose-session-attributes=false 
spring.freemarker.request-context-attribute=request 
spring.freemarker.suffix=.ftl


```


```yaml
server:
  port: 8889
mybatis:
  type-aliases-package: com.sys.log.domain
  mapper-locations: classpath:mapper/*.xml
spring:
  application:
    name: hystory-server
  datasource:
    type: com.zaxxer.hikari.HikariDataSource
    driver-class-name: com.mysql.jdbc.Driver
    url: jdbc:mysql:///security?useUnicode=true&characterEncoding=utf-8&useSSL=false
    username: root
    password: 0
    hikari:
      minimum-idle: 5
      idle-timeout: 600000
      maximum-pool-size: 10
      auto-commit: true
      pool-name: MyHikariCP
      max-lifetime: 1800000
      connection-timeout: 30000
      connection-test-query: SELECT 1
      #配置 freemarker 文件路径和文件后缀
  freemarker:
    suffix: .html
    template-loader-path: classpath:/templates/
logging:
  level:
    com.sys.log.mapper: DEBUG
```