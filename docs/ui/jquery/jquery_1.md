---
autoGroup-1: jquery
title: 动态创建添加元素
---

## jQuery中动态创建、添加元素的方法

```html
<input type="button" value="创建元素" id="btn">
<div id="box"></div>
<p id="main">这是文中一段话</p>
 
```

### 动态创建元素
```js
//点击按钮，动态创建元素

//方法一：$()创建元素，后用append()方法添加。append() 还可以把其他地方元素添加进这个对象中。
 
$('#btn').click(function() {
 
　　var el = $('<p>这是一个P标签</p>');
 
　　// $('#box').append(el); //两种添加方法
 
　　el.appendTo($('#box'));
 
})

//方法二：.html()方法为元素 创建并添加子元素。 html() 还可以把其他地方元素添加进这个对象中。支持添加标签。
 
$('#btn').click(function() {
 
　　$('#box').html('<h>标题是。。</h>');
 
})

//如DOM中创建元素方法
var box = document.getElementById('box');
var p = document.createElement('p');
p.innerText = '这是第二个哦~';
box.appendChild(p);
 

//jQuery中添加元素的方法：
var i = 1;
$('#btn').click(function () {
　　var p = $('<p> 第二个p标签' + i + '</p>')
　　i++;
//一、在元素内添加，可以把其他地方元素也添加进来：对象.html('元素及内容')
　　$('#box').html($('#main'));

//二、在元素内添加，依次（往后）添加：对象.append(元素) 或者 元素.appendTo(对象)
　　$('#box').append($('#main'));
　　$('#box').append(p);

//三、在元素内添加，依次（往前）添加：对象.prepend(元素)；
　　$('#box').prepend(p);

//四、在元素前添加兄弟元素,依次（往后）添加：对象.before(元素);
　　$('#box').before(p);
 
//五，在元素后添加兄弟元素,依次（往前）添加：对象.after(元素)；
　　$('#box').after(p);

})

```

## 给动态添加的元素绑定事件

- 利用时间代理达到这个效果即可。如：
  
```js
$(document).on("click", ".large", slide); //jq中的写法
//第一个参数表示的是对应事件，第二个是需要绑定事件的元素的id或class，第三个是绑定的对应的事件函数名
```