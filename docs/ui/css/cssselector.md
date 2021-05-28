---
autoGroup-1: 层叠样式表
title: 选择器
---

### 在<ul>标签(带有CSS)中选择第二和第三个元素(Li)
 
```css 
ul > :first-child{
    margin-right: 50px;
}

ul > :first-child + li{
    margin-right: 50px;
}

ul > :first-child + li + li{
    margin-right: 50px;
}
li:nth-child(n+2):nth-child(-n+3) {
  margin-right: 50px;
}
```
 > 这将同时选择第二个和第三个li

### 测试代码
```html
<style>
    li:nth-child(2) {
        margin: 50px 0 0 100px;
        color: red;
    }
</style>

<body>
    <ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>
        <li>4</li>
        <li>5</li>
        <li>6</li>
    </ul>
</body>




```



## 禁止右键

```html
<script>
    document.oncontextmenu = function(){
        return false;
    }
</script>

<script>
    $(function(){
        $(document).contextmenu(function() {
            return false
        })
    });
</script>
```

## 禁止F12

```html
<!DOCTYPE html><html><head>
    <meta charset="UTF-8">
    <title>js禁止f12事件</title>
    <script>
        window.onload = function(){
            document.onkeydown = function(event){
                var ev = event || window.event || arguments.callee.caller.arguments[0];
                //123 代表F12键
                if(event.keyCode = 123){
                    return false;
                }
            }
        }
    </script></head><body><p>这里是一些内容</p></body></html>
```