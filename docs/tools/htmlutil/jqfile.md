---
autoGroup-2: jquery
title: 获取文件大小
---


> 原生js就把jquery对象转成dom对象就行：

```html
<input type="file" name="path" id="path" class="input-file">

<script>
var fileSize = $('#path')[0].files[0].size;
var dom = document.getElementById("path");

var fileSize = dom.files[0].size;

// 获取文件类型：

var path = $('#path').val();
var fileType = path.substring(path.lastIndexOf('.') + 1, path.length).toLocaleLowerCase();
</script>

```

```html
 <form action="" method="post" enctype="multipart/form-data"> name:<input type="text" name="nameu" id="una">
        <hr> pwd :<input type="password" name="pwd" id="sdfa">
        <hr> imgs: <input type="file" name="files" id="path">
        <hr> <input type="button" onclick="checkFile()" value="提交"> </form>
    <script>
        function checkFile() {
            var fileSize = $('#path')[0].files[0].size;
            var sizeInM = (parseFloat(fileSize / (1024 * 1024))).toFixed(3);
            console.log(sizeInM, "size")
        }
    </script>
```    