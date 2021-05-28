---
autoGroup-1: jquery
title: 计算两个日期的间隔
---

## js前台计算两个日期的间隔时间（时间差）


 
- 在后台传来两个时间字段，从中解析出两个字符串类型的日期格式 需要在前台解析出两个时间的间隔
- 这里采用获取两个日期的时间戳进行计算
- 时间戳是指格林威治时间1970年01月01日00时00分00秒(北京时间1970年01月01日08时00分00秒)起至现在的总秒数。
- 所以要求两个时间的间隔只需要将两个时间戳相减  就能得到两个时间相差的毫秒数  通过除以3600*1000得到小时数 以此类推

```js

function DateDifference(faultDate,completeTime){
      // let d1 = new Date(faultDate);
      // let d2 = new Date(completeTime);
      var stime =new Date(faultDate).getTime();
      var etime = new Date(completeTime).getTime();
      var usedTime = etime - stime;  //两个时间戳相差的毫秒数
      var days=Math.floor(usedTime/(24*3600*1000));
      //计算出小时数
      var leave1=usedTime%(24*3600*1000);    //计算天数后剩余的毫秒数
      var hours=Math.floor(leave1/(3600*1000));
      //计算相差分钟数
      var leave2=leave1%(3600*1000);        //计算小时数后剩余的毫秒数
      var minutes=Math.floor(leave2/(60*1000));
      // var time = days + "天"+hours+"时"+minutes+"分";
      var time = days;
      return time;
}

// JavaScript 获取当前时间戳：

// 第一种方法：

var timestamp = Date.parse(new Date());

// 结果：1280977330000
// 第二种方法：

var timestamp = (new Date()).valueOf();

// 结果：1280977330748

// 第三种方法：

var timestamp=new Date().getTime()；
// 结果：1280977330748

// 第一种：获取的时间戳是把毫秒改成000显示，
// 第二种和第三种是获取了当前毫秒的时间戳

(endTime - startTime) / (1000 * 60 * 60 * 24);//把差的毫秒数转换为天数

```