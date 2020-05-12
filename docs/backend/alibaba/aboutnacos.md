---
autoGroup-1: AlibabaCloud
title: 关于Nacos 补充
---

## Naocs 支持 AP和 CP 的切换

1. 参考地址[Alibaba_Nacos](https://nacos.io/zh-cn/docs/what-is-nacos.html)

2. **关于下载** 从[github](https://github.com/alibaba/nacos) 下载发布版的jar, 受限于网络的因素,时间长且容易失败, 另一个就是如果你的本地是 **Mysql 8.0+** , 还需要修改他的源码类, **主要是为了升级Class** ,综上所述,推荐下载sources, 手工 **mvn clean package**

3. **关于安全** 在Nacos 启动时, 需要输入nacos/nacos , 来进行登录, 很麻烦,Nacos 默认使用了 **Spring Security** 来进行安全登录, SO ~ ~  ,在做完第一步的下载后, 修改 **/conf/application.properties**  如下

4. ```properties
   
   #*************** Access Control Related Configurations ***************#
   ### If enable spring security, this option is deprecated in 1.2.0:
   # Spring Security 
   spring.security.enabled=false
   
   ```

5. **关于Nacos Config 持久化** , 还是在  **/conf/application.properties**  

6. ```properties
   
   #*************** Config Module Related Configurations ***************#
   ### If user MySQL as datasource:
   spring.datasource.platform=mysql
   
   ### Count of DB:
   db.num=1
   
   ### Connect URL of DB:
   db.url.0=jdbc:mysql://127.0.0.1:3306/mq?characterEncoding=utf8&connectTimeout=1000&socketTimeout=3000&autoReconnect=true
   db.user=root
   db.password=0
   
   ```

7. 因为我的MySQL 是 8.0+, 所以会麻烦一些

![](./images/os.png)
