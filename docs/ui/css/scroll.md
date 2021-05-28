---
autoGroup-1: 乱七八糟
title: 滚动条scrollbar
---

## webkit下面的CSS设置滚动条
- * 主要有下面7个属性

* - ::-webkit-scrollbar 滚动条整体部分，可以设置宽度啥的
* - ::-webkit-scrollbar-button 滚动条两端的按钮
* - ::-webkit-scrollbar-track  外层轨道
* - ::-webkit-scrollbar-track-piece  内层滚动槽
* - ::-webkit-scrollbar-thumb 滚动的滑块
* - ::-webkit-scrollbar-corner 边角
* - ::-webkit-resizer 定义右下角拖动块的样式
 
![avatar](/img/csssc.png)


- 上面是滚动条的主要几个设置属性，还有更详尽的CSS属性
- 
- :horizontal 水平方向的滚动条
- 
- :vertical 垂直 方向的滚动条
- 
- :decrement 应用于按钮和内层轨道(track piece)。它用来指示按钮或者内层轨道是否会减小视窗的位置(比如，垂直滚动条的上面，水平滚动条的左边。)
- 
- :increment decrement类似，用来指示按钮或内层轨道是否会增大视窗的位置(比如，垂直滚动条的下面和水平滚动条的右边。)
- 
- :start 伪类也应用于按钮和滑块。它用来定义对象是否放到滑块的前面。
- 
- :end 类似于start伪类，标识对象是否放到滑块的后面。
- 
- :double-button  该伪类以用于按钮和内层轨道。用于判断一个按钮是不是放在滚动条同一端的一对按钮中的一个。对于内层轨道来说，它表示内层轨道是否紧靠一对按钮。
- 
- :single-button 类似于double-button伪类。对按钮来说，它用于判断一个按钮是否自己独立的在滚动条的一段。对内层轨道来说，它表示内层轨道是否紧靠一个single-button。
- 
- :no-button 用于内层轨道，表示内层轨道是否要滚动到滚动条的终端，比如，滚动条两端没有按钮的时候。
- 
- :corner-present  用于所有滚动条轨道，指示滚动条圆角是否显示。
- 
- :window-inactive 用于所有的滚动条轨道，指示应用滚动条的某个页面容器(元素)是否当前被激活。(在webkit最近的版本中，该伪类也可以用于::selection伪元素。webkit团队有计划扩展它并推动成为一个标准的伪类)


## demo1

```html

<style>
    .test {
        width: 1000px;
        height: 200px;
        /* overflow-y: auto;
         */
        overflow-y: hidden;
        overflow-x: scroll;
        float: left;
        margin: 5px;
        border: 1px solid black;
    }

    .scrollbar {
        width: 30px;
        height: 300px;
        margin: 0 auto;
        /* 重要的属性, 不换行 */
        white-space: nowrap
    }
</style>
<div class="test test-1">
    <div class="scrollbar">
        最纯粹的一个 css 横向 滑动 , 使用 norap 属性来设置了不换行, 从而显示了 css 样式 默认的 最纯粹的一个 css 横向 滑动 , 使用 norap 属性来设置了不换行, 从而显示了 css 样式
        默认的 最纯粹的一个 css 横向 滑动 , 使用 norap 属性来设置了不换行, 从而显示了 css 样式 默认的
    </div>
</div>
```

- CSS也很简单，例：
```css


/* 设置滚动条的样式 */
::-webkit-scrollbar {
width:12px;
}
/* 滚动槽 */
::-webkit-scrollbar-track {
-webkit-box-shadow:inset006pxrgba(0,0,0,0.3);
border-radius:10px;
}
/* 滚动条滑块 */
::-webkit-scrollbar-thumb {
border-radius:10px;
background:rgba(0,0,0,0.1);
-webkit-box-shadow:inset006pxrgba(0,0,0,0.5);
}
::-webkit-scrollbar-thumb:window-inactive {
background:rgba(255,0,0,0.4);
}
```





## demo2
```html
<!doctype html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <title>CSS3自定义滚动条</title>
    <style>
        header {
            font-family: 'Lobster', cursive;
            text-align: center;
            font-size: 25px;
        }

        #info {
            font-size: 18px;
            color: #555;
            text-align: center;
            margin-bottom: 25px;
        }

        a {
            color: #074E8C;
        }

        .scrollbar {
            margin-left: 30px;
            float: left;
            height: 300px;
            width: 65px;
            background: #F5F5F5;
            overflow-y: scroll;
            margin-bottom: 25px;
        }

        .force-overflow {
            min-height: 450px;
        }

        #wrapper {
            text-align: center;
            width: 500px;
            margin: auto;
        }

        /*
 *  STYLE 1
 */

        #style-1::-webkit-scrollbar-track {
            -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
            border-radius: 10px;
            background-color: #F5F5F5;
        }

        #style-1::-webkit-scrollbar {
            width: 12px;
            background-color: #F5F5F5;
        }

        #style-1::-webkit-scrollbar-thumb {
            border-radius: 10px;
            -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, .3);
            background-color: #555;
        }

        /*
 *  STYLE 2
 */

        #style-2::-webkit-scrollbar-track {
            -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
            border-radius: 10px;
            background-color: #F5F5F5;
        }

        #style-2::-webkit-scrollbar {
            width: 12px;
            background-color: #F5F5F5;
        }

        #style-2::-webkit-scrollbar-thumb {
            border-radius: 10px;
            -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, .3);
            background-color: #D62929;
        }

        /*
 *  STYLE 3
 */

        #style-3::-webkit-scrollbar-track {
            -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
            background-color: #F5F5F5;
        }

        #style-3::-webkit-scrollbar {
            width: 6px;
            background-color: #F5F5F5;
        }

        #style-3::-webkit-scrollbar-thumb {
            background-color: #000000;
        }

        /*
 *  STYLE 4
 */

        #style-4::-webkit-scrollbar-track {
            -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
            background-color: #F5F5F5;
        }

        #style-4::-webkit-scrollbar {
            width: 10px;
            background-color: #F5F5F5;
        }

        #style-4::-webkit-scrollbar-thumb {
            background-color: #000000;
            border: 2px solid #555555;
        }


        /*
 *  STYLE 5
 */

        #style-5::-webkit-scrollbar-track {
            -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
            background-color: #F5F5F5;
        }

        #style-5::-webkit-scrollbar {
            width: 10px;
            background-color: #F5F5F5;
        }

        #style-5::-webkit-scrollbar-thumb {
            background-color: #0ae;

            background-image: -webkit-gradient(linear, 0 0, 0 100%,
                    color-stop(.5, rgba(255, 255, 255, .2)),
                    color-stop(.5, transparent), to(transparent));
        }


        /*
 *  STYLE 6
 */

        #style-6::-webkit-scrollbar-track {
            -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
            background-color: #F5F5F5;
        }

        #style-6::-webkit-scrollbar {
            width: 10px;
            background-color: #F5F5F5;
        }

        #style-6::-webkit-scrollbar-thumb {
            background-color: #F90;
            background-image: -webkit-linear-gradient(45deg,
                    rgba(255, 255, 255, .2) 25%,
                    transparent 25%,
                    transparent 50%,
                    rgba(255, 255, 255, .2) 50%,
                    rgba(255, 255, 255, .2) 75%,
                    transparent 75%,
                    transparent)
        }


        /*
 *  STYLE 7
 */

        #style-7::-webkit-scrollbar-track {
            -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
            background-color: #F5F5F5;
            border-radius: 10px;
        }

        #style-7::-webkit-scrollbar {
            width: 10px;
            background-color: #F5F5F5;
        }

        #style-7::-webkit-scrollbar-thumb {
            border-radius: 10px;
            background-image: -webkit-gradient(linear,
                    left bottom,
                    left top,
                    color-stop(0.44, rgb(122, 153, 217)),
                    color-stop(0.72, rgb(73, 125, 189)),
                    color-stop(0.86, rgb(28, 58, 148)));
        }

        /*
 *  STYLE 8
 */

        #style-8::-webkit-scrollbar-track {
            border: 1px solid black;
            background-color: #F5F5F5;
        }

        #style-8::-webkit-scrollbar {
            width: 10px;
            background-color: #F5F5F5;
        }

        #style-8::-webkit-scrollbar-thumb {
            background-color: #000000;
        }


        /*
 *  STYLE 9
 */

        #style-9::-webkit-scrollbar-track {
            -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
            background-color: #F5F5F5;
        }

        #style-9::-webkit-scrollbar {
            width: 10px;
            background-color: #F5F5F5;
        }

        #style-9::-webkit-scrollbar-thumb {
            background-color: #F90;
            background-image: -webkit-linear-gradient(90deg,
                    rgba(255, 255, 255, .2) 25%,
                    transparent 25%,
                    transparent 50%,
                    rgba(255, 255, 255, .2) 50%,
                    rgba(255, 255, 255, .2) 75%,
                    transparent 75%,
                    transparent)
        }


        /*
 *  STYLE 10
 */

        #style-10::-webkit-scrollbar-track {
            -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
            background-color: #F5F5F5;
            border-radius: 10px;
        }

        #style-10::-webkit-scrollbar {
            width: 10px;
            background-color: #F5F5F5;
        }

        #style-10::-webkit-scrollbar-thumb {
            background-color: #AAA;
            border-radius: 10px;
            background-image: -webkit-linear-gradient(90deg,
                    rgba(0, 0, 0, .2) 25%,
                    transparent 25%,
                    transparent 50%,
                    rgba(0, 0, 0, .2) 50%,
                    rgba(0, 0, 0, .2) 75%,
                    transparent 75%,
                    transparent)
        }


        /*
 *  STYLE 11
 */

        #style-11::-webkit-scrollbar-track {
            -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
            background-color: #F5F5F5;
            border-radius: 10px;
        }

        #style-11::-webkit-scrollbar {
            width: 10px;
            background-color: #F5F5F5;
        }

        #style-11::-webkit-scrollbar-thumb {
            background-color: #3366FF;
            border-radius: 10px;
            background-image: -webkit-linear-gradient(0deg,
                    rgba(255, 255, 255, 0.5) 25%,
                    transparent 25%,
                    transparent 50%,
                    rgba(255, 255, 255, 0.5) 50%,
                    rgba(255, 255, 255, 0.5) 75%,
                    transparent 75%,
                    transparent)
        }

        /*
 *  STYLE 12
 */

        #style-12::-webkit-scrollbar-track {
            -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.9);
            border-radius: 10px;
            background-color: #444444;
        }

        #style-12::-webkit-scrollbar {
            width: 12px;
            background-color: #F5F5F5;
        }

        #style-12::-webkit-scrollbar-thumb {
            border-radius: 10px;
            background-color: #D62929;
            background-image: -webkit-linear-gradient(90deg,
                    transparent,
                    rgba(0, 0, 0, 0.4) 50%,
                    transparent,
                    transparent)
        }

        /*
 *  STYLE 13
 */

        #style-13::-webkit-scrollbar-track {
            -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.9);
            border-radius: 10px;
            background-color: #CCCCCC;
        }

        #style-13::-webkit-scrollbar {
            width: 12px;
            background-color: #F5F5F5;
        }

        #style-13::-webkit-scrollbar-thumb {
            border-radius: 10px;
            background-color: #D62929;
            background-image: -webkit-linear-gradient(90deg,
                    transparent,
                    rgba(0, 0, 0, 0.4) 50%,
                    transparent,
                    transparent)
        }

        /*
 *  STYLE 14
 */

        #style-14::-webkit-scrollbar-track {
            -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.6);
            background-color: #CCCCCC;
        }

        #style-14::-webkit-scrollbar {
            width: 10px;
            background-color: #F5F5F5;
        }

        #style-14::-webkit-scrollbar-thumb {
            background-color: #FFF;
            background-image: -webkit-linear-gradient(90deg,
                    rgba(0, 0, 0, 1) 0%,
                    rgba(0, 0, 0, 1) 25%,
                    transparent 100%,
                    rgba(0, 0, 0, 1) 75%,
                    transparent)
        }

        /*
 *  STYLE 15
 */

        #style-15::-webkit-scrollbar-track {
            -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.1);
            background-color: #F5F5F5;
            border-radius: 10px;
        }

        #style-15::-webkit-scrollbar {
            width: 10px;
            background-color: #F5F5F5;
        }

        #style-15::-webkit-scrollbar-thumb {
            border-radius: 10px;
            background-color: #FFF;
            background-image: -webkit-gradient(linear,
                    40% 0%,
                    75% 84%,
                    from(#4D9C41),
                    to(#19911D),
                    color-stop(.6, #54DE5D))
        }

        /*
 *  STYLE 16
 */

        #style-16::-webkit-scrollbar-track {
            -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.1);
            background-color: #F5F5F5;
            border-radius: 10px;
        }

        #style-16::-webkit-scrollbar {
            width: 10px;
            background-color: #F5F5F5;
        }

        #style-16::-webkit-scrollbar-thumb {
            border-radius: 10px;
            background-color: #FFF;
            background-image: -webkit-linear-gradient(top,
                    #e4f5fc 0%,
                    #bfe8f9 50%,
                    #9fd8ef 51%,
                    #2ab0ed 100%);
        }
    </style>
</head>

<body>
    <div id="wrapper">
        <div class="scrollbar" id="style-default">
            <div class="force-overflow"></div>
        </div>

        <div class="scrollbar" id="style-1">
            <div class="force-overflow"></div>
        </div>

        <div class="scrollbar" id="style-2">
            <div class="force-overflow"></div>
        </div>

        <div class="scrollbar" id="style-3">
            <div class="force-overflow"></div>
        </div>

        <div class="scrollbar" id="style-4">
            <div class="force-overflow"></div>
        </div>

        <div class="scrollbar" id="style-5">
            <div class="force-overflow"></div>
        </div>

        <div class="scrollbar" id="style-6">
            <div class="force-overflow"></div>
        </div>

        <div class="scrollbar" id="style-7">
            <div class="force-overflow"></div>
        </div>

        <div class="scrollbar" id="style-8">
            <div class="force-overflow"></div>
        </div>

        <div class="scrollbar" id="style-9">
            <div class="force-overflow"></div>
        </div>

        <div class="scrollbar" id="style-10">
            <div class="force-overflow"></div>
        </div>

        <div class="scrollbar" id="style-11">
            <div class="force-overflow"></div>
        </div>

        <div class="scrollbar" id="style-13">
            <div class="force-overflow"></div>
        </div>

        <div class="scrollbar" id="style-14">
            <div class="force-overflow"></div>
        </div>

        <div class="scrollbar" id="style-15">
            <div class="force-overflow"></div>
        </div>
    </div>
</body>

</html>

```