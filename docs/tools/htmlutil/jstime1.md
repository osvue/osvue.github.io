---
autoGroup-1: js
title: 倒计时
---



## 倒计时
```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no">
    <title>倒计时开始</title>
    <style>
        * {
            padding: 0;
            margin: 0;
        }

        .clock-s {
            margin: 50px;
            text-align: center
        }

        .clock-s span {
            padding: 10px 5px;
            margin-left: 5px;
            background-color: #dcdcdc;
            border-radius: 4px;
        }
    </style>
</head>

<body>
    <div class="clock-s"> <span>00</span>:<span>00</span>:<span>00</span> </div>

</body>
<script>
    /**获取现在的时间*/
    var nowTime = new Date().getTime(); /**活动开始时间*/
    var startT = '2021-08-27 17:30:00'.replace(/-/g, "/");
    var startTime = new Date(startT).getTime(); /**活动结束时间*/
    var endT = '2021-09-22 10:00:00'.replace(/-/g, "/");
    var endTime = new Date(endT).getTime();
    var timeDiff;
    var remark = "距离活动";
    if (startTime >= nowTime) {
        /**活动未开始*/
        timeDiff = (startTime - nowTime) / 1000;
        remark += "开始";
    } else if (startTime < nowTime && nowTime <= endTime) {
        /**活动已开始未结束*/
        timeDiff = (endTime - nowTime) / 1000;
        remark += "结束";
    } else if (nowTime > endTime) {
        /**活动已结束*/
        remark = "活动已结束";
    }
    if (timeDiff > 0) {
        setUpTimer(timeDiff);
    } /**定时器*/
    var t;

    function setUpTimer(time) {
        t = setInterval(function () {
            time--
            formatSeconds(time)
            if (time <= 0) {
                clearInterval(t)
            }
        }, 1000)
    } /**小于10的数字前加0*/
    function formatBit(val) {
        /*转变为数字类型*/
        val = +val
        return val > 9 ? "<span>" + val + "</span>" : "<span>0" + val + "</span>"
    } /**根据时差计算剩余时分秒*/
    function formatSeconds(time) {
        if (time < 0) {
            time = 0;
        }
        var min = Math.floor(time % 3600)
        var val = formatBit(Math.floor(time / 3600)) + ':' + formatBit(Math.floor(
            min / 60)) + ':' + formatBit(Math.floor(time % 60))
        document.getElementsByClassName("clock-s")[0]
            .innerHTML = remark + val;
    }
</script>

</html>
```