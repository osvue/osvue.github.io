---
autoGroup-1: 层叠样式表
title: cssTable比例
---

## 伪类

## ::before/:before和::after/:after的使用
　　 
## 基础知识

1. 与:active 和 :hover这些伪类不一样，他们都是伪元素。

2. :before/:after伪元素是在css2中提出来的。而::before/::after是在css3中的写法，这样从新提出是为了用两个冒号表示伪元素以区分伪类。

3. 它们用在css里某个选择器之后，为了增添装饰性内容的，因为这样可以实现语义化，如果用html来添加一些没有实际内容的节点或者辅助式样本的文本，他们是毫无意义的。

4. 它们有特有的属性content，其中添加的内容默认是内联元素。

5. 创建的伪元素默认是在所依附的元素之上的，我们可以使用z-index:-1;把它放到下面去。

6. 它们是虚拟节点，而不是真正的节点。如：
```css
        div::after{
            content: " ";
            border:thin solid red;
        }
```        
 


### ::after并不是一个真实节点

- input，img，iframe等元素都不能包含其他元素，所以不能通过伪元素插入内容。　　

* 这两个伪类下特有的属性 content ，用于在 CSS 渲染中向元素逻辑上的头部或尾部添加内容。注意这些添加不会改变文档内容，不会出现在 DOM 中，不可复制，仅仅是在 CSS 渲染层加入。比较有用的是以下几个值：

    * [String] – 使用引号包括一段字符串，将会向元素内容中添加字符串。示例：`a:after { content: ""; }`
    * attr() – 调用当前元素的属性，可以方便的比如将图片的 Alt 提示文字或者链接的 Href 地址显示出来。示例：`a:after { content:"(" attr(href) ")"; }`
    * url() / uri() – 用于引用媒体文件。示例：`h1::before { content: url(logo.png); }`
    * counter() –  调用计数器，可以不使用列表元素实现序号功能。具体请参见 counter-increment 和 counter-reset 属性的用法。示例：`h2:before { counter-increment: chapter; content: "Chapter " counter(chapter) ". " }`

## 应用

## 清除浮动 


- 清除浮动是一个时常会遇到的问题，不少人的解决办法是添加一个空的 div 应用 clear:both; 属性。现在，无需增加没有意义的元素，仅需要以下样式即可在元素尾部自动清除浮动：
```css
.clear-fix { *overflow: hidden; *zoom: 1; }
.clear-fix:after { display: table; content: ""; width: 0; clear: both; }
```

- 许多人喜欢给 blockquote 引用段添加巨大的引号作为背景，这种时候我们就可以用 :before 来代替 background 了，即可以给背景留下空间，还可以直接使用文字而非图片：
```css
blockquote::before {
	content: open-quote;
	position: absolute;
	z-index: -1;
	color: #DDD;
	font-size: 120px;
	font-family: serif;
	font-weight: bolder;
}
```
### 做间隔符。

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>伪元素</title>
    <style>
        a{
            color:blue;
            text-decoration: none;
        }
        .log:after{
            content:"|";
            color:red;
        }
    </style>
</head>
<body>
    <a href="" class="log">登录</a><a href="">注册</a>
</body>
</html>


```

 

### 做三角形

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>伪元素</title>
    <style>
        a{
            color:blue;
            text-decoration: none;
        }
        .log:before{
            content:" ";
            display: inline-block;
            width: 0;
            height: 0;
            border:10px solid transparent;
            border-left: 10px solid red;
        }
    </style>
</head>
<body>
    <a href="" class="log">登录</a>
</body>
</html>
```

### 效果自行测试

