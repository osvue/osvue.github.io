

下载完成上传到你需要的安装的服务器上，接下来创建weblogic用户:

[root@iz2ze8vnt9h5rv3i5ma1cpz base_domain]# useradd weblogic
设置weblogic用户密码：

[root@iz2ze8vnt9h5rv3i5ma1cpz base_domain]# passwd weblogic
系统会默认在/home下载创建weblogic用户文件夹，将wls1036_generic.jar复制到weblogic文件夹下并赋予安装文件可执行的权限

[root@iz2ze8vnt9h5rv3i5ma1cpz weblogic]# chmod a+x wls1036_generic.jar
一、开始安装：

1.切换到weblogic用户下

[root@iz2ze8vnt9h5rv3i5ma1cpz weblogic]# su weblogic
2.使用java -jar安装

[weblogic@iz2ze8vnt9h5rv3i5ma1cpz ~]$ ls
bea  Oracle  wls1036_generic.jar
[weblogic@iz2ze8vnt9h5rv3i5ma1cpz ~]$ java -jar wls1036_generic.jar -mode=console
注：如果安装文件是.bin格式的文件，安装命令为：./wls1036_generic.bin -mode=console；（你可以不加“-mode=console”的控制台文本模式，因为在你安装时无法启动图形安装界面时它会自动的进入文本控制台模式的）

3.控制台安装如下，操作：输入Next,回车

二、安装完成后，需要配置domain域（domain是weblogic中最大的概念，一个域下面包含着weblogic应用服务器中的所有东西，weblogic应用服务器的启动、停止都是以domain为单位进行管理的，域是由单个管理服务器管理的weblogic service实例的集合）

1.进入weblogic的安装目录找到config.sh（如：/home/weblogic/Oracle/Middleware/wlserver_10.3/common/bin），操作：输入./config.sh，回车

```shell
[weblogic@iz2ze8vnt9h5rv3i5ma1cpz bin]$ ls
commEnv.sh  config_builder.sh  config.sh  pack.sh  setPatchEnv.sh  startDerby.sh  startManagedWebLogic.sh  stopDerby.sh  unpack.sh  upgrade.sh  wlscontrol.sh  wlsifconfig.sh  wlst.sh
[weblogic@iz2ze8vnt9h5rv3i5ma1cpz bin]$ pwd
/home/weblogic/Oracle/Middleware/wlserver_10.3/common/bin
[weblogic@iz2ze8vnt9h5rv3i5ma1cpz bin]$ ./config.sh 
```



