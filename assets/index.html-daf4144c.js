import{_ as r,M as i,p as l,q as n,R as e,t as a,N as d,a1 as t}from"./framework-d81ad7e5.js";const h="/assets/jartvf-b7b9d32f.png",c={},p=t(`<h2 id="介绍" tabindex="-1"><a class="header-anchor" href="#介绍" aria-hidden="true">#</a> 介绍</h2><table><thead><tr><th>命令</th><th>说明</th></tr></thead><tbody><tr><td>stat</td><td>显示指定文件的相关信息,比ls命令显示内容更多</td></tr><tr><td>who</td><td>显示在线登录用户</td></tr><tr><td>hostname</td><td>显示主机名称</td></tr><tr><td>uname</td><td>显示系统信息</td></tr><tr><td>top</td><td>显示当前系统中耗费资源最多的进程</td></tr><tr><td>ps</td><td>显示瞬间的进程状态</td></tr><tr><td>du</td><td>显示指定的文件（目录）已使用的磁盘空间的总量</td></tr><tr><td>df</td><td>显示文件系统磁盘空间的使用情况</td></tr><tr><td>free</td><td>显示当前内存和交换空间的使用情况</td></tr><tr><td>ifconfig</td><td>显示网络接口信息</td></tr><tr><td>ping</td><td>测试网络的连通性</td></tr><tr><td>netstat</td><td>显示网络状态信息</td></tr><tr><td>clear</td><td>清屏</td></tr><tr><td>kill</td><td>杀死一个进程</td></tr></tbody></table><h2 id="常用启动脚本" tabindex="-1"><a class="header-anchor" href="#常用启动脚本" aria-hidden="true">#</a> 常用启动脚本</h2><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token shebang important">#! /bin/bash</span>
<span class="token function">nohup</span> /usr/java/jdk1.8.0_161/bin/java <span class="token parameter variable">-Dfile.encoding</span><span class="token operator">=</span>UTF-8 <span class="token parameter variable">-jar</span> boot-1.0.jar <span class="token parameter variable">--spring.config.location</span><span class="token operator">=</span>application.properties <span class="token operator">&amp;&gt;</span>./log.txt <span class="token operator">&amp;</span>

<span class="token function">tail</span> <span class="token parameter variable">-f</span> log.txt
</code></pre></div><h3 id="linux下检查是否安装过某软件包" tabindex="-1"><a class="header-anchor" href="#linux下检查是否安装过某软件包" aria-hidden="true">#</a> linux下检查是否安装过某软件包</h3><ol><li><p>rpm包安装的，可以用 rpm -qa 看到，如果要查找某软件包是否安装，用 rpm -qa | grep &quot;软件或者包的名字&quot;</p></li><li><p>以deb包安装的，可以用 dpkg -l 看到。如果是查找指定软件包，用 dpkg -l | grep &quot;软件或者包的名字&quot;</p></li><li><p>yum方法安装的，可以用 yum list installed 查找，如果是查找指定包，用 yum list installed | grep &quot;软件名或者包名&quot;</p></li></ol><ul><li>查看是否安装了gcc</li></ul><p><code>yum list installed | grep &quot;gcc&quot;</code></p><h2 id="输出重定向" tabindex="-1"><a class="header-anchor" href="#输出重定向" aria-hidden="true">#</a> 输出重定向</h2><h3 id="_1-语法" tabindex="-1"><a class="header-anchor" href="#_1-语法" aria-hidden="true">#</a> 1. 语法</h3><blockquote><p>切记，执行输出时记得提前备份，防止覆盖源文件 😢。</p></blockquote><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token builtin class-name">command</span> <span class="token operator">&gt;</span> <span class="token function">file</span>
</code></pre></div><p>执行命令 command 然后将结果输出至 file 文件中。</p><h3 id="_2-示例" tabindex="-1"><a class="header-anchor" href="#_2-示例" aria-hidden="true">#</a> 2. 示例</h3><ul><li><p>echo：基础操作；</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token builtin class-name">echo</span> <span class="token string">&quot;hello world&quot;</span> <span class="token operator">&gt;</span> linux.txt
</code></pre></div></li><li><p>cat：普遍的使用；</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token function">cat</span> linux.txt <span class="token operator">&gt;</span> linux1.txt
</code></pre></div></li><li><p>command：command 解释。</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token function">which</span> google-chrome-stable <span class="token operator">&gt;</span> linux.txt
</code></pre></div></li></ul><h3 id="_3-扩展内容" tabindex="-1"><a class="header-anchor" href="#_3-扩展内容" aria-hidden="true">#</a> 3. 扩展内容</h3><ul><li><p>错误输入：命令错误时不会生效，修改默认文件描述符输入错误提示信息；</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code>cho <span class="token string">&quot;hello world&quot;</span> <span class="token operator"><span class="token file-descriptor important">2</span>&gt;</span> test.txt
</code></pre></div></li><li><p>追加输入：追加内容。</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token builtin class-name">echo</span> <span class="token string">&quot;hello world&quot;</span> <span class="token operator">&gt;&gt;</span> test.txt
</code></pre></div></li></ul><h4 id="输入重定向-核心使用" tabindex="-1"><a class="header-anchor" href="#输入重定向-核心使用" aria-hidden="true">#</a> 输入重定向 核心使用</h4>`,18),o={href:"https://zh.wikipedia.org/wiki//dev/null",target:"_blank",rel:"noopener noreferrer"},u=t(`<div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token function">cat</span> /etc/hosts <span class="token operator">&gt;</span> /dev/null
</code></pre></div><h2 id="替换jar包中的配置文件或者class文件" tabindex="-1"><a class="header-anchor" href="#替换jar包中的配置文件或者class文件" aria-hidden="true">#</a> 替换jar包中的配置文件或者class文件</h2><ul><li>如果java 工程是打包成jar工程，这个时候又修改了少量代码，重新打包上传就比较麻烦。可用如下方式局部替换配置文件或者class文件。</li></ul><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token comment">#搜索：   </span>
jar <span class="token parameter variable">-tvf</span>   property-api.jar  <span class="token operator">|</span>   <span class="token function">grep</span>   AddressUtils.class
<span class="token comment">#解压:     </span>
jar <span class="token parameter variable">-xvf</span>   property-api.jar    BOOT-INF/classes/com/summer/common/utils/ip/AddressUtils.class
<span class="token comment">#替换：   </span>
jar <span class="token parameter variable">-uvf</span>  property-api.jar BOOT-INF/classes/com/summer/common/utils/ip/AddressUtils.class

</code></pre></div><h3 id="示例" tabindex="-1"><a class="header-anchor" href="#示例" aria-hidden="true">#</a> 示例</h3><p>解析命令：</p><ol><li><p>jar: 包是Java中所特有一种压缩文档</p></li><li><p>-u 添加文件到jar包中</p></li><li><p>-v 生成详细的报造，并输出至标准设备</p></li><li><p>-f 指定jar包的文件名</p></li><li><p>-t 显示jar中的内容列表 -c 创建一个jar包 -t 显示jar中的内容列表 -x 解压jar包 -m 指定manifest.mf文件.(manifest.mf文件中可以对jar包及其中的内容作一些一设置) -0 产生jar包时不对其中的内容进行压缩处理 -M 不产生所有文件的清单文件(Manifest.mf)。这个参数与忽略掉-m参数的设置 -i 为指定的jar文件创建索引文件 -C 表示转到相应的目录下执行jar命令,相当于cd到那个目录，然后不带-C执行jar命令</p></li><li><p>使用jar tvf jar名称 | grep 目标文件名 查询出目标文件在jar包中的目录</p></li></ol><p><code>[root@VM_0_3_centos ~]# jar -tvf property-api.jar |grep AddressUtils.class</code></p><ol start="2"><li>使用jar xvf jar名称 目标文件名(copy上面查出的全路径) 将目标文件及所在jar包中的目录解压到当前路径 <code>[root@VM_0_3_centos ~]# jar -xvf property-api.jar BOOT-INF/classes/com/summer/common/utils/ip/AddressUtils.class</code></li><li>修改目标文件的内容，或者将要新的目标文件替换掉提取出来的目标文件</li></ol><p>4.使用jar uvf jar名称 目标文件名（和步骤（2）中的目标文件名相同） 将新目标文件替换到jar包中 <code>[root@VM_0_3_centos ~]# jar uvf property-api.jar BOOT-INF/classes/com/summer/common/utils/ip/AddressUtils.class</code></p><p><img src="`+h+'" alt="jar"></p><h2 id="系统服务管理" tabindex="-1"><a class="header-anchor" href="#系统服务管理" aria-hidden="true">#</a> 系统服务管理</h2><h3 id="systemctl" tabindex="-1"><a class="header-anchor" href="#systemctl" aria-hidden="true">#</a> systemctl</h3><ul><li>启动服务：systemctl start httpd.service</li><li>关闭服务：systemctl stop httpd.service</li><li>重启服务（不管是否在运行）：systemctl restart httpd.service</li><li>重新载入配置（不中断服务）：systemctl reload httpd.service</li><li>查看运行状态：systemctl status httpd.service</li><li>设置开机启动：systemctl enable httpd.service</li><li>禁止开机启动：systemctl disable httpd.service</li><li>查看系统安装的服务：systemctl list-units --type=service</li></ul><h2 id="文件管理" tabindex="-1"><a class="header-anchor" href="#文件管理" aria-hidden="true">#</a> 文件管理</h2><h3 id="ls" tabindex="-1"><a class="header-anchor" href="#ls" aria-hidden="true">#</a> ls</h3><p>列出/home目录下的子目录：ls -l /home 列出当前文件夹下所有文件夹及文件大小：ls -lht</p><h3 id="pwd" tabindex="-1"><a class="header-anchor" href="#pwd" aria-hidden="true">#</a> pwd</h3><p>显示当前工作目录</p><h3 id="cd" tabindex="-1"><a class="header-anchor" href="#cd" aria-hidden="true">#</a> cd</h3><p>切换目录： cd /usr/local</p><h3 id="date" tabindex="-1"><a class="header-anchor" href="#date" aria-hidden="true">#</a> date</h3><p>以指定格式显示日期；date &#39;+date:%x time:%X&#39;</p><h3 id="passwd" tabindex="-1"><a class="header-anchor" href="#passwd" aria-hidden="true">#</a> passwd</h3><p>修改root密码：passwd root</p><h3 id="su" tabindex="-1"><a class="header-anchor" href="#su" aria-hidden="true">#</a> su</h3><p>普通用户切换到超级用户：su -</p><h3 id="clear" tabindex="-1"><a class="header-anchor" href="#clear" aria-hidden="true">#</a> clear</h3><p>清除屏幕信息</p><h3 id="man" tabindex="-1"><a class="header-anchor" href="#man" aria-hidden="true">#</a> man</h3><p>查看ls命令的帮助信息：man ls</p><h3 id="who" tabindex="-1"><a class="header-anchor" href="#who" aria-hidden="true">#</a> who</h3><ul><li>查看当前运行级别：who -r</li><li>显示用的登录详情：who -buT</li></ul><h3 id="free" tabindex="-1"><a class="header-anchor" href="#free" aria-hidden="true">#</a> free</h3><p>以MB显示内存使用状态：free -m</p><h3 id="ps" tabindex="-1"><a class="header-anchor" href="#ps" aria-hidden="true">#</a> ps</h3><p>查看系统所有进程：ps -ef 查看运行的java进程： ps -ef | grep java</p><h3 id="top" tabindex="-1"><a class="header-anchor" href="#top" aria-hidden="true">#</a> top</h3><p>查看系统当前活跃进程信息</p><h3 id="mkdir" tabindex="-1"><a class="header-anchor" href="#mkdir" aria-hidden="true">#</a> mkdir</h3><p>创建目录</p><h3 id="more" tabindex="-1"><a class="header-anchor" href="#more" aria-hidden="true">#</a> more</h3><p>分页查看<br> 每10行显示一屏查看：more -c -10</p><h3 id="cat" tabindex="-1"><a class="header-anchor" href="#cat" aria-hidden="true">#</a> cat</h3><p>查看config文件：cat -Ab config</p><h3 id="rm" tabindex="-1"><a class="header-anchor" href="#rm" aria-hidden="true">#</a> rm</h3><ul><li>删除文件：rm a.txt</li><li>删除文件夹： rm -rf a/</li></ul><h3 id="touch" tabindex="-1"><a class="header-anchor" href="#touch" aria-hidden="true">#</a> touch</h3><p>创建一个文件：touch a.txt</p><h3 id="cp" tabindex="-1"><a class="header-anchor" href="#cp" aria-hidden="true">#</a> cp</h3><p>将目录a的文件拷贝到目录b: cp -r /home/a /home/b</p><h3 id="mv" tabindex="-1"><a class="header-anchor" href="#mv" aria-hidden="true">#</a> mv</h3><p>移动或覆盖文件：mv a.txt b.txt</p><h2 id="压缩与解压" tabindex="-1"><a class="header-anchor" href="#压缩与解压" aria-hidden="true">#</a> 压缩与解压</h2><h3 id="tar" tabindex="-1"><a class="header-anchor" href="#tar" aria-hidden="true">#</a> tar</h3><ul><li>打包文件夹到单独的文件：tar -cvf /opt/etc.tar /etc</li><li>压缩文件夹到压缩文件（gzip）：tar -zcvf /opt/etc.tar.gz /etc</li><li>压缩文件夹到压缩文件（bzip2）：tar -jcvf /opt/etc.tar.bz2 /etc</li><li>查阅压缩包中内容（gzip）：tar -ztvf /opt/etc.tar.gz /etc</li><li>解压文件到当前目录（gzip）：tar -zxvf /opt/etc.tar.gz</li></ul><h2 id="磁盘和网络管理" tabindex="-1"><a class="header-anchor" href="#磁盘和网络管理" aria-hidden="true">#</a> 磁盘和网络管理</h2><h3 id="df" tabindex="-1"><a class="header-anchor" href="#df" aria-hidden="true">#</a> df</h3><p>查看磁盘占用情况：df -hT</p><h3 id="ifconfig" tabindex="-1"><a class="header-anchor" href="#ifconfig" aria-hidden="true">#</a> ifconfig</h3><p>查看当前网络接口状态</p><h3 id="netstat" tabindex="-1"><a class="header-anchor" href="#netstat" aria-hidden="true">#</a> netstat</h3><ul><li>查看路由信息：netstat -rn</li><li>查看所有有效TCP连接：netstat -an</li><li>查看系统中启动的监听服务：netstat -tulnp</li><li>查看处于连接状态的系统资源信息：netstat -atunp</li></ul><h3 id="wget" tabindex="-1"><a class="header-anchor" href="#wget" aria-hidden="true">#</a> wget</h3><p>从网络上下载软件</p><h2 id="软件的安装与管理" tabindex="-1"><a class="header-anchor" href="#软件的安装与管理" aria-hidden="true">#</a> 软件的安装与管理</h2><h3 id="rpm" tabindex="-1"><a class="header-anchor" href="#rpm" aria-hidden="true">#</a> rpm</h3><ul><li>安装软件包：rpm -ivh nginx-1.12.2-2.el7.x86_64.rpm</li><li>模糊搜索软件包：rpm -qa | grep nginx</li><li>精确查找软件包：rpm -qa nginx</li><li>查询软件包的安装路径：rpm -ql nginx-1.12.2-2.el7.x86_64</li><li>查看软件包的概要信息：rpm -qi nginx-1.12.2-2.el7.x86_64</li><li>验证软件包内容和安装文件是否一致：rpm -V nginx-1.12.2-2.el7.x86_64</li><li>更新软件包：rpm -Uvh nginx-1.12.2-2.el7.x86_64</li><li>删除软件包：rpm -e nginx-1.12.2-2.el7.x86_64</li></ul><h3 id="yum" tabindex="-1"><a class="header-anchor" href="#yum" aria-hidden="true">#</a> yum</h3><ul><li>安装软件包： yum install nginx</li><li>检查可以更新的软件包：yum check-update</li><li>更新指定的软件包：yum update nginx</li><li>在资源库中查找软件包信息：yum info nginx*</li><li>列出已经安装的所有软件包：yum info installed</li><li>列出软件包名称：yum list redis*</li><li>模糊搜索软件包：yum search redis</li></ul><h2 id="网络安全" tabindex="-1"><a class="header-anchor" href="#网络安全" aria-hidden="true">#</a> 网络安全</h2><h3 id="iptables" tabindex="-1"><a class="header-anchor" href="#iptables" aria-hidden="true">#</a> iptables</h3><ul><li>开启防火墙：systemctl start iptables.service</li><li>关闭防火墙：systemctl stop iptables.service</li><li>查看防火墙状态：systemctl status iptables.service</li><li>设置开机启动：systemctl enable iptables.service</li><li>禁用开机启动：systemctl disable iptables.service</li><li>查看filter表的链信息：iptables -L -n</li><li>查看NAT表的链信息：iptables -t nat -L -n</li><li>清除防火墙所有规则：iptables -F;iptables -X;iptables -Z;</li><li>添加过滤规则（开发80端口）：iptables -I INPUT -p tcp --dport 80 -j ACCEPT</li><li>查找规则所做行号：iptables -L INPUT --line-numbers -n</li><li>根据行号删除过滤规则：iptables -D INPUT 1</li></ul>',73);function m(b,f){const s=i("ExternalLinkIcon");return l(),n("div",null,[p,e("p",null,[a("常利用"),e("a",o,[a("空设备"),d(s)]),a("（/dev/null）和重定向来丢弃不需要的输出流。")]),u])}const g=r(c,[["render",m],["__file","index.html.vue"]]);export{g as default};
