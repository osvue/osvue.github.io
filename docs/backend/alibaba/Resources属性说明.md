---
autoGroup-1: AlibabaCloud
title: Resources属性说明
---
 

参考源码的注释，逐个解释下这几个属性的作用。

#### value

资源名称，必需项，因为需要通过resource name找到对应的规则，这个是必须配置的。

#### entryType

entry 类型，可选项，
有IN和OUT两个选项，默认为 EntryType.OUT。

```
public enum EntryType {
    IN("IN"),
    OUT("OUT");
}
```

#### blockHandler

blockHandler 对应处理 BlockException 的函数名称，可选项。
blockHandler 函数访问范围需要是 public，返回类型需要与原方法相匹配，
参数类型需要和原方法相匹配并且最后加一个额外的参数，类型为 BlockException。

```java
  @GetMapping(value = "/gtr")
  @SentinelResource(value = "gtr" ,blockHandler = "errorHandle")
  public ResultBean<String> tsRes(){
    return new ResultBean<>("测试全局的ResultController");
  }

  public ResultBean<String> errorHandle(BlockException gl){
    return new ResultBean<>(888,"测试全局的ResultController"+gl.getMessage());
  }
```

#### blockHandlerClass

blockHandler 函数默认需要和原方法在同一个类中，如果希望使用其他类的函数，
则需要指定 blockHandlerClass 为对应的类的 Class 对象，注意对应的函数必需为 static 函数，否则无法解析。

#### fallback

fallback 函数名称，可选项，用于在抛出异常的时候提供 fallback 处理逻辑。
fallback 函数可以针对所有类型的异常（除了 exceptionsToIgnore 里面排除掉的异常类型）进行处理。

#### fallbackClass

fallbackClass的应用和blockHandlerClass类似，fallback 函数默认需要和原方法在同一个类中。
若希望使用其他类的函数，则可以指定 fallbackClass 为对应的类的 Class 对象，注意对应的函数必需为 static 函数，否则无法解析。

#### defaultFallback（since 1.6.0）

如果没有配置defaultFallback方法，默认都会走到这里来。
默认的 fallback 函数名称，可选项，通常用于通用的 fallback 逻辑。
默认 fallback 函数可以针对所有类型的异常（除了 exceptionsToIgnore 里面排除掉的异常类型）进行处理。
若同时配置了 fallback 和 defaultFallback，则只有 fallback 会生效。
