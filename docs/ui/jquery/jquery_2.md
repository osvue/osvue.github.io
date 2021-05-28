---
autoGroup-1: jquery
title: 序列化中文乱码
---

## jquery序列化serialize()方法时中文乱码及解决办法

### 乱码
1. 原因：.serialize()自动调用了encodeURIComponent方法将数据编码了
2. 解决方法：调用decodeURIComponent(XXX,true);将数据解码
3. 例如：`var params = jQuery("#formId").serialize(); // http request parameters. 5 params = decodeURIComponent(params,true);`

###  示例
```js
  let str1 = $("#form1").serialize()
   str1 = decodeURIComponent(str1,true);  
  console.log("query_", str1 )
```

