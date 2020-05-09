# win10

## win10下查看进程，杀死进程

* **查看指定端口的连接信息**使用   netstat -ano | findstr “8080” 
  - 在“|”前面的命令执行结果作为后一个命令执行的输入。

* **查看进程列表**使用        tasklist | findstr “java” 

  * 查找进程名包含“java”的所有进程通过上面的方式可以查看占用端口号的进程命令taskkill  使用该工具按照进程 ID (PID) 或映像名称终止任务。

  * 杀掉进程使用taskkill -PID 进程号 -F

  + /PID processid  指定要终止的进程的 PID。
  + /F        指定强制终止进程。

## Windows 分屏展示
* 鼠标左键或右键直接拖到屏幕的边缘可以将其中一个窗口拖到屏幕左侧或者右侧，然后再点击另一个窗口。