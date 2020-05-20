---
autoGroup-2: Alibaba_Nacos
title: 服务配置中心
---

## 启动配置管理

[参考阿里巴巴Nacos文档](https://nacos.io/zh-cn/docs/quick-start-spring-cloud.html)

启动了 Nacos server 后，您就可以参考以下示例代码，为您的 Spring Cloud 应用启动 Nacos 配置管理服务了。完整示例代码请参考：[nacos-spring-cloud-config-example](https://github.com/nacos-group/nacos-examples/tree/master/nacos-spring-cloud-example/nacos-spring-cloud-config-example)

1. 添加依赖：

```
<dependency>
    <groupId>com.alibaba.cloud</groupId>
    <artifactId>spring-cloud-starter-alibaba-nacos-config</artifactId>
    <version>${latest.version}</version>
</dependency>
```

**注意**：版本 [2.1.x.RELEASE](https://mvnrepository.com/artifact/com.alibaba.cloud/spring-cloud-starter-alibaba-nacos-config) 对应的是 Spring Boot 2.1.x 版本。版本 [2.0.x.RELEASE](https://mvnrepository.com/artifact/com.alibaba.cloud/spring-cloud-starter-alibaba-nacos-config) 对应的是 Spring Boot 2.0.x 版本，版本 [1.5.x.RELEASE](https://mvnrepository.com/artifact/com.alibaba.cloud/spring-cloud-starter-alibaba-nacos-config) 对应的是 Spring Boot 1.5.x 版本。

更多版本对应关系参考：[版本说明 Wiki](https://github.com/spring-cloud-incubator/spring-cloud-alibaba/wiki/版本说明)

1. 在 `bootstrap.properties` 中配置 Nacos server 的地址和应用名

```
spring.cloud.nacos.config.server-addr=127.0.0.1:8848

spring.application.name=example
```

说明：之所以需要配置 `spring.application.name` ，是因为它是构成 Nacos 配置管理 `dataId`字段的一部分。

在 Nacos Spring Cloud 中，`dataId` 的完整格式如下：

```plain
${prefix}-${spring.profile.active}.${file-extension}
```

- `prefix` 默认为 `spring.application.name` 的值，也可以通过配置项 `spring.cloud.nacos.config.prefix`来配置。
- `spring.profile.active` 即为当前环境对应的 profile，详情可以参考 [Spring Boot文档](https://docs.spring.io/spring-boot/docs/current/reference/html/boot-features-profiles.html#boot-features-profiles)。 **注意：当 `spring.profile.active` 为空时，对应的连接符 `-` 也将不存在，dataId 的拼接格式变成 `${prefix}.${file-extension}`**
- `file-exetension` 为配置内容的数据格式，可以通过配置项 `spring.cloud.nacos.config.file-extension` 来配置。目前只支持 `properties` 和 `yaml` 类型。

1. 通过 Spring Cloud 原生注解 `@RefreshScope` 实现配置自动更新：

```
@RestController
@RequestMapping("/config")
@RefreshScope
public class ConfigController {

    @Value("${useLocalCache:false}")
    private boolean useLocalCache;

    @RequestMapping("/get")
    public boolean get() {
        return useLocalCache;
    }
}
```

1. 首先通过调用 [Nacos Open API](https://nacos.io/zh-cn/docs/open-API.html) 向 Nacos Server 发布配置：dataId 为`example.properties`，内容为`useLocalCache=true`

```
curl -X POST "http://127.0.0.1:8848/nacos/v1/cs/configs?dataId=example.properties&group=DEFAULT_GROUP&content=useLocalCache=true"
```

1. 运行 `NacosConfigApplication`，调用 `curl http://localhost:8080/config/get`，返回内容是 `true`。

```xml
  <!--nacos-config-->
    <dependency>
      <groupId>com.alibaba.cloud</groupId>
      <artifactId>spring-cloud-starter-alibaba-nacos-config</artifactId>
    </dependency>
    <!--nacos-discovery-->
    <dependency>
      <groupId>com.alibaba.cloud</groupId>
      <artifactId>spring-cloud-starter-alibaba-nacos-discovery</artifactId>
    </dependency>
```

项目启动时, 首先去配置中心拉取配置,`SpringBoot`启动时加载配置文件是有优先级的,bootstrap 高于application



------

### bootstrap.yml

```yaml
# nacos配置
server:
  port: 9001

spring:
  application:
    name: alibaba-provider
  cloud:
    nacos:
      discovery:
        server-addr: 127.0.0.1:8848 #Nacos服务注册中心地址
      config:
        server-addr: 127.0.0.1:8848 #Nacos作为配置中心地址
        file-extension: yml #指定yaml格式的配置
#        group: DEV_GROUP
#        namespace: 7d8f0f5a-6a53-4785-9686-dd460158e5d4


# ${spring.application.name}-${spring.profile.active}.${spring.cloud.nacos.config.file-extension}
# alibaba-provider-dev.yml

# alibaba-provider-test.yml   ----> config.info
```

远程 文件名称:`alibaba-provider-dev.yml`

修改Nacos配置, 实时自带的动态刷新!!!

---------

## Nacos配置中心高级配置---分类配置

- NameSpace     区分部署环境
- Group               逻辑分区
- Data ID

### Data ID , 通过Profile 来区分两套环境

```yaml
spring:
  profiles:
    active: dev
spring:
  profiles:
    active: test
```

```
# alibaba-provider-dev.yaml
# alibaba-provider-test.yaml
```

### Group  通过Group 来区分环境

```yaml
spring:
  application:
    name: nacos-config
  cloud:
    nacos:
      discovery:
        server-addr: localhost:8848 #Nacos服务注册中心地址
      config:
        server-addr: localhost:8848 #Nacos作为配置中心地址
        file-extension: yaml #指定yaml格式的配置
        group: DEV_GROUP
```

### NameSpace 

```yaml
spring:
  application:
    name: nacos-config
  cloud:
    nacos:
      discovery:
        server-addr: localhost:8848 #Nacos服务注册中心地址
      config:
        server-addr: localhost:8848 #Nacos作为配置中心地址
        file-extension: yaml #指定yaml格式的配置
        group: DEV_GROUP
        namespace: 7d8f0f5a-6a53-4785-9686-dd460158e5d4
```

集群更新中...............................
