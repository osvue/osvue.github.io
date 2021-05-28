---
autoGroup-1: 层叠样式表
title: 本地模糊搜索
---

## 前端js实现本地模糊搜索

### 模糊查询的规则：
> 首字母相同，并且包含搜索的所有关键字，例如输入“计科”，返回计算机科学与技术

```js
    /**检查一个字符串是否包含在另一个字符串里,并且首字符相同
     * i:计算机科学与技术
     * j:计科
     * 返回true
     * */
    function checkStrContain(i, j) {
        if(!i || !j){
            return false;
        }
        if(i.charAt(0) != j.charAt(0)){
            return false;
        }
        i = i.substr(1,i.length-1);
        j = j.substr(1,j.length-1);
        var a;
        var b;
        if (i.length > j.length) {
            a = i;
            b = j;
        } else {
            a = j;
            b = i;
        }
        var count = 0;
        for (var bi = 0; bi < b.length; bi++) {
            var bArr = b.split("");
            if (a.indexOf(bArr[bi]) != -1) {
                count++;
            } else {
                break;
            }
        }
        if (b.length == count) {
            return true;
        } else {
            return false;
        }
    }
```

### 根据搜索关键字返回符合条件的数组：

```js

/**
     * 根据字符串模糊搜索返回符合条件的数据
     * name   搜索字符串
     * array  检索json数组
     * length 匹配结果最大长度
     */
    function getArrayByName(name,array,length){
        if(array.length < 1){
            return;
        }
        var result = [];
        for (var key in array) {
            if (checkStrContain(array[key].name,name) && result.length<length) {
                result.push(array[key])
            }
        }
        return result
    }
```    

### 按下键盘时进行检索，查找符合条件的数据，选择下拉选项后回填输入框：

```js
 $(function(){
            /**按下键盘时搜索*/
            $("body").undelegate("input", "keyup").delegate("input", "keyup", function() {
                var name = $(this).val().replace(/\s+/g, "");
                if(name.length>0){
                    var resultArray = getArrayByName(name,jsonArr,6);
                    if(resultArray.length<1){
                        $(this).next("ul").hide();
                    }else{
                        var html = "";
                        for(var i=0;i<resultArray.length;i++){
                            html += "<li>"+resultArray[i].name+"</li>";
                        }
                        $(this).next("ul").html(html).show();
                    }
                }
            })
            /**下拉列表展开时点击li的事件,为输入框赋值*/
            $(".input-search").on("click","ul li",function(){
                $(this).parent("ul").siblings("input").val($(this).text());
                $(this).parent("ul").hide();
            });
        })
```

### 完整代码(包含样式)：

```html
<!DOCTYPE html>
<html>
<head lang="en">
    <meta charset="UTF-8">
    <title></title>
    <style>
        *{
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            -webkit-box-sizing: border-box;
        }
        .input-search{
            position: relative;
            margin: 100px auto;
            width: 200px;
        }
        input{
            width: 200px;
            height: 30px;
            padding-left: 10px;
            padding-right: 10px;
            background-color: #ffffff;
            border: solid 1px #e5e5e5;
            text-overflow: ellipsis;
            overflow: hidden;
            white-space: nowrap;
            outline: none;
            -webkit-appearance:none;
            appearance: none;
        }
        ul{
            display: none;
            position: absolute;
            top: 29px;
            width: 100%;
            border: solid 1px #62a6da;
            max-height: 340px;
            overflow-y: auto;
            z-index: 1;
            font-size: 0;
        }
        ul li{
            position: relative;
            padding-left: 10px;
            width: 100%;
            height: 34px;
            line-height: 34px;
            font-size: 14px;
            color: #454545;
            text-align: left;
            background-color: #fff;
            cursor: pointer;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
        }
        ul li:hover{
            color: #fff;
            background-color: #1c9dff;
        }
    </style>
</head>
<body>
    <div class="input-search">
        <input type="text" placeholder="请输入课程名称">
        <ul></ul>
    </div>
    <script type="text/javascript"  src="jquery.js" ></script>
    <script>
        $(function(){
            /**按下键盘时搜索*/
            $("body").undelegate("input", "keyup").delegate("input", "keyup", function() {
                var name = $(this).val().replace(/\s+/g, "");
                if(name.length>0){
                    var resultArray = getArrayByName(name,jsonArr,6);
                    if(resultArray.length<1){
                        $(this).next("ul").hide();
                    }else{
                        var html = "";
                        for(var i=0;i<resultArray.length;i++){
                            html += "<li>"+resultArray[i].name+"</li>";
                        }
                        $(this).next("ul").html(html).show();
                    }
                }
            })
            /**下拉列表展开时点击li的事件,为输入框赋值*/
            $(".input-search").on("click","ul li",function(){
                $(this).parent("ul").siblings("input").val($(this).text());
                $(this).parent("ul").hide();
            });
        })

        var jsonArr = [
            {
                "name":"计算机组成原理"
            },
            {
                "name":"计算机网络"
            },
            {
                "name":"数据结构"
            },
            {
                "name":"网页程序设计"
            },
            {
                "name":"嵌入式开发"
            },
            {
                "name":"高等数学"
            },
            {
                "name":"计算机应用技术"
            },
            {
                "name":"计算机科学与技术"
            }
        ]
    /**
     * 根据字符串模糊搜索返回符合条件的数据
     * name   搜索字符串
     * array  检索json数组
     * length 匹配结果最大长度
     */
    function getArrayByName(name,array,length){
        if(array.length < 1){
            return;
        }
        var result = [];
        for (var key in array) {
            if (checkStrContain(array[key].name,name) && result.length<length) {
                result.push(array[key])
            }
        }
        return result
    }
    /**检查一个字符串是否包含在另一个字符串里,并且首字符相同
     * i:计算机科学与技术
     * j:计科
     * 返回true
     * */
    function checkStrContain(i, j) {
        if(!i || !j){
            return false;
        }
        if(i.charAt(0) != j.charAt(0)){
            return false;
        }
        i = i.substr(1,i.length-1);
        j = j.substr(1,j.length-1);
        var a;
        var b;
        if (i.length > j.length) {
            a = i;
            b = j;
        } else {
            a = j;
            b = i;
        }
        var count = 0;
        for (var bi = 0; bi < b.length; bi++) {
            var bArr = b.split("");
            if (a.indexOf(bArr[bi]) != -1) {
                count++;
            } else {
                break;
            }
        }
        if (b.length == count) {
            return true;
        } else {
            return false;
        }
    }
</script>
</body>
</html>
```