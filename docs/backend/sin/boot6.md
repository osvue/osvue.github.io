---
title: boot选择启动某个配置文件
---

# boot选择启动某个配置文件

::: tip
Spring Boot配置文件提供了隔离一部分应用程序配置的方法，并可使其仅在某指定环境可用。任何有@Component和@Configuration注解的Bean都用@profile来指定加载哪个配置文件。如：
:::

```java
@Configuration 
@Profile( “production”)//加载production配置文件，即也代表当前是production环境
public class Demo{
    // ...
}
```
**以普通Spring的方式，可以使用spring.profile.active环境属性来指定哪些配置文件处于活动状态**
```yaml
# spring.profiles.active = dev
# 或
spring: 
    profiles: 
        active: dev
```
## 以编程方式启动某配置文件
```javascript
@SpringBootApplication
public class DemoApplication {
    public static void main(String[] args) {
        SpringApplication app = new SpringApplication(DemoApplication.class);
        //启动dev配置文件
        app.setAdditionalProfiles("dev");   // dev 或prod
        app.run(args);
    }
}
```
## maven的pom文件中启动某配置文件

```xml
<profiles>
    <profile>
        <!-- 本地开发环境 -->
        <id>dev</id>
        <properties>
            <profiles.active>dev</profiles.active>
        </properties>
        <activation>
            <!-- 开启本地开发环境 -->
            <activeByDefault>true</activeByDefault>
        </activation>
    </profile>
    <profile>
        <!-- 测试环境 -->
        <id>test</id>
        <properties>
            <profiles.active>test</profiles.active>
        </properties>
    </profile>
    <profile>
        <!-- 生产环境 -->
        <id>pro</id>
        <properties>
            <profiles.active>pro</profiles.active>
        </properties>
    </profile>
</profiles>
```
## YAML下的列表
如，以下yaml配置文件：
```yaml

book: 
     list: 
        -name: Java
        -name: C++
 

```

* 可用以下形式获取book列表：
```java
@ConfigurationProperties(“book”)
 public class FooProperties{
    private final List <MyPojo> list = new ArrayList <>（）;
    public List <MyPojo>  getList(){
         return this .list;
    }
}
```
