---
autoGroup-3: Sentinel
title: 结合Feign

---

## 本质上 Feign 并没有用到很多的Sentinel规则



- pom
- yml
- ApplicationStart
- FeinClient

### pom

```xml
 <dependency>
      <groupId>org.springframework.cloud</groupId>
      <artifactId>spring-cloud-starter-openfeign</artifactId>
    </dependency>
```

### yml

```yaml
server:
  port: 80
spring:
  application:
    name: alibaba-consumer
  cloud:
    nacos:
      discovery:
        server-addr: localhost:8848
# 激活Sentinel对Feign的支持        
feign:
  sentinel:
    enabled: true
```

### ApplicationStart

```java
@SpringBootApplication
@EnableDiscoveryClient
@EnableFeignClients
public class ConsuApp {

  public static void main(String[] args) {
    SpringApplication.run(ConsuApp.class,args);
  }
}
```

### FeignClient

```java
@Component
@FeignClient(value = "alibaba-provider")
public interface ProClient {


}
```

---

## 以下是使用RestTemplate

```java
@Configuration
public class ApplicationContextConfig{
    @Bean
    @LoadBalanced
    public RestTemplate getRestTemplate()
    {
        return new RestTemplate();
    }
}

```



```java
   public static final String SERVICE_URL = "http://nacos-payment-provider";

    @Resource
    private RestTemplate restTemplate;

    @RequestMapping("/consumer/fallback/{id}")
    //@SentinelResource(value = "fallback") //没有配置
    //@SentinelResource(value = "fallback",fallback = "handlerFallback") //fallback只负责业务异常
    //@SentinelResource(value = "fallback",blockHandler = "blockHandler") //blockHandler只负责sentinel控制台配置违规
    @SentinelResource(value = "fallback",fallback = "handlerFallback",blockHandler = "blockHandler",
            exceptionsToIgnore = {IllegalArgumentException.class})
    public CommonResult<Payment> fallback(@PathVariable Long id)
    {
        CommonResult<Payment> result = restTemplate.getForObject(SERVICE_URL + "/paymentSQL/"+id,CommonResult.class,id);

        if (id == 4) {
            throw new IllegalArgumentException ("IllegalArgumentException,非法参数异常....");
        }else if (result.getData() == null) {
            throw new NullPointerException ("NullPointerException,该ID没有对应记录,空指针异常");
        }

        return result;
    }
    //本例是fallback
    public CommonResult handlerFallback(@PathVariable  Long id,Throwable e) {
        Payment payment = new Payment(id,"null");
        return new CommonResult<>(444,"兜底异常handlerFallback,exception内容  "+e.getMessage(),payment);
    }
    //本例是blockHandler
    public CommonResult blockHandler(@PathVariable  Long id,BlockException blockException) {
        Payment payment = new Payment(id,"null");
        return new CommonResult<>(445,"blockHandler-sentinel限流,无此流水: blockException  "+blockException.getMessage(),payment);
    }

```

