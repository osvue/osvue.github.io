import{_ as a,p as n,q as s,a1 as e}from"./framework-d81ad7e5.js";const t="/assets/hadoo1-2c13c582.png",o="/assets/io123-d12c988a.png",p="/assets/shella-9f5d34cf.png",r="/assets/via-7841890a.png",l="/assets/vib-143a2194.png",c="/assets/vic-91de3388.png",i="/assets/yumrepo-96f79c91.png",d="/assets/mount-b3637887.png",m={},h=e('<h4 id="互联网数据传输形式是基于下一跳的方式-而不是基于完整路径的规划形式" tabindex="-1"><a class="header-anchor" href="#互联网数据传输形式是基于下一跳的方式-而不是基于完整路径的规划形式" aria-hidden="true">#</a> 互联网数据传输形式是基于下一跳的方式，而不是基于完整路径的规划形式；</h4><h3 id="临时方法定义" tabindex="-1"><a class="header-anchor" href="#临时方法定义" aria-hidden="true">#</a> 临时方法定义</h3><p><img src="'+t+'" alt="alt"></p><h3 id="标准输入输出" tabindex="-1"><a class="header-anchor" href="#标准输入输出" aria-hidden="true">#</a> 标准输入输出</h3><p><img src="'+o+`" alt="alt"></p><ol><li><strong>Ctrl + a</strong> 光标向前</li><li><strong>Ctrl + e</strong> 光标最后</li></ol><div class="language-bash" data-ext="sh"><pre class="language-bash"><code>
<span class="token function">ls</span> <span class="token parameter variable">-l</span> <span class="token operator"><span class="token file-descriptor important">1</span>&gt;</span> ls.out  <span class="token comment">#  将标准 输出      到文件ls.out 中</span>
<span class="token function">ls</span> <span class="token parameter variable">-l</span> <span class="token operator"><span class="token file-descriptor important">1</span>&gt;&gt;</span> ls.out <span class="token comment">#  将标准 输出 追加 到文件ls.out 中</span>
<span class="token function">ls</span> <span class="token parameter variable">-l</span> <span class="token operator"><span class="token file-descriptor important">2</span>&gt;</span> ls.out  <span class="token comment">#  将错误 输出      到文件ls.out 中</span>

<span class="token comment"># 将正确和错误都追加到此文件ls.out</span>

<span class="token function">ls</span> <span class="token parameter variable">-l</span> /app /usr <span class="token operator">&amp;&gt;</span> ls.out 

</code></pre></div><h2 id="文件系统" tabindex="-1"><a class="header-anchor" href="#文件系统" aria-hidden="true">#</a> 文件系统</h2><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># ssh 登录</span>
<span class="token function">ssh</span> uname@192.168.X.X
<span class="token comment"># 分屏展示：</span>

<span class="token function">cat</span> xxx <span class="token operator">|</span><span class="token function">more</span> / <span class="token function">less</span>

<span class="token function">df</span> <span class="token parameter variable">-h</span> 
<span class="token comment"># 统计目录大小 </span>
<span class="token function">du</span> <span class="token parameter variable">-sh</span> ./*
</code></pre></div><h2 id="shell" tabindex="-1"><a class="header-anchor" href="#shell" aria-hidden="true">#</a> shell</h2><p><img src="`+p+'" alt="alt"></p><h2 id="vi" tabindex="-1"><a class="header-anchor" href="#vi" aria-hidden="true">#</a> vi</h2><p><img src="'+r+'" alt="alt"><img src="'+l+'" alt="alt"><img src="'+c+'" alt="alt"></p><h2 id="yum" tabindex="-1"><a class="header-anchor" href="#yum" aria-hidden="true">#</a> yum</h2><p><img src="'+i+`" alt="alt"></p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token parameter variable">-yum</span> repolist 
<span class="token parameter variable">-yum</span> clean all 
<span class="token parameter variable">-yum</span> makecache 
<span class="token parameter variable">-yum</span> update

<span class="token comment"># 查询:</span>

<span class="token parameter variable">-yum</span> list 
<span class="token parameter variable">-yum</span> search 
<span class="token parameter variable">-yum</span> info

<span class="token comment"># 安装&amp;卸载: </span>
<span class="token parameter variable">-yum</span> <span class="token function">install</span> 
<span class="token parameter variable">-remove</span> <span class="token operator">|</span> erase
</code></pre></div><h2 id="mount" tabindex="-1"><a class="header-anchor" href="#mount" aria-hidden="true">#</a> mount</h2><p>挂接命令(mount)</p><p>首先，介绍一下挂接(mount)命令的使用方法，mount命令参数非常多，这里主要讲一下今天我们要用到的。</p><p>命令格式：mount [-t vfstype] [-o options] device dir 其中：</p><ol><li><p>-t vfstype 指定文件系统的类型，通常不必指定。mount 会自动选择正确的类型。常用类型有： 光盘或光盘镜像：iso9660 DOS fat16文件系统：msdos Windows 9x fat32文件系统：vfat Windows NT ntfs文件系统：ntfs Mount Windows文件网络共享：smbfs UNIX(LINUX) 文件网络共享：nfs</p></li><li><p>-o options 主要用来描述设备或档案的挂接方式。常用的参数有： loop：用来把一个文件当成硬盘分区挂接上系统 ro：采用只读方式挂接设备 rw：采用读写方式挂接设备 iocharset：指定访问文件系统所用字符集</p></li><li><p>device 要挂接(mount)的设备。</p></li><li><p>dir设备在系统上的挂接点(mount point)。</p></li></ol><h3 id="linux下通过挂载iso文件安装文件" tabindex="-1"><a class="header-anchor" href="#linux下通过挂载iso文件安装文件" aria-hidden="true">#</a> Linux下通过挂载iso文件安装文件</h3><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token function">mkdir</span> /rhe17.3/                      <span class="token comment">#创建一个文件夹充当挂载点</span>

<span class="token function">mount</span> /iso/rhel-server-7.3-x86_64-dvd.iso /rhe17.3/     <span class="token comment">#将/iso目录下的镜像挂载到/rhe17.3/文件上</span>

<span class="token builtin class-name">cd</span> /etc/yum.repos.d/              <span class="token comment">#进入到这个文件</span>

<span class="token function">rm</span> <span class="token parameter variable">-fr</span> *                                     <span class="token comment">#删除目录下所有文件</span>

<span class="token function">vim</span> yum.repo                         <span class="token comment">#编辑文件内容,后缀不能改变 </span>

<span class="token comment"># 将以下内容写入文件保存退出</span>

<span class="token punctuation">[</span>rhe17.3<span class="token punctuation">]</span>                               说明
<span class="token assign-left variable">name</span><span class="token operator">=</span>rhe17.3                            名称
<span class="token assign-left variable">baseurl</span><span class="token operator">=</span>file:///rhe17.3                 位置
<span class="token assign-left variable">gpgcheck</span><span class="token operator">=</span><span class="token number">0</span>                              跳过来源检查


yum clean all
</code></pre></div><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 挂载</span>
<span class="token function">mount</span> <span class="token parameter variable">-o</span> loop /usr/CentOS-6.5-x86_64-bin-DVD1.iso /mnt/yum/
<span class="token comment"># 修改yum 源</span>
<span class="token builtin class-name">cd</span> /etc/yum.repos.d/ 
<span class="token function">vim</span> yum.repo 
</code></pre></div><h4 id="将以下内容写入文件保存退出" tabindex="-1"><a class="header-anchor" href="#将以下内容写入文件保存退出" aria-hidden="true">#</a> 将以下内容写入文件保存退出</h4><div class="language-text" data-ext="text"><pre class="language-text"><code>[rhe17.3]                                
name=rhe17.3                     
baseurl=file:///mnt/yum/     
gpgcheck=0                        
</code></pre></div><div class="language-bash" data-ext="sh"><pre class="language-bash"><code>yum clean all
yum makecache

yum repolist
</code></pre></div><p><img src="`+d+`" alt="alt"></p><h2 id="hosts文件生效" tabindex="-1"><a class="header-anchor" href="#hosts文件生效" aria-hidden="true">#</a> hosts文件生效</h2><p>修改 etc/hosts 生效 service network restart</p><h2 id="lrzsz" tabindex="-1"><a class="header-anchor" href="#lrzsz" aria-hidden="true">#</a> lrzsz</h2><ul><li>yum安装 　　root 账号登陆后执行以下命令：</li></ul><p><code> yum install -y lrzsz</code></p><p>2.使用说明 　　sz命令发送文件到本地：<br><code>sz filename</code> 　　rz命令本地上传文件到服务器： <code>rz</code> 　　执行该命令后，在弹出框中选择要上传的文件即可。</p><h2 id="文件搜索" tabindex="-1"><a class="header-anchor" href="#文件搜索" aria-hidden="true">#</a> 文件搜索</h2><h3 id="find" tabindex="-1"><a class="header-anchor" href="#find" aria-hidden="true">#</a> find</h3><ol><li>根据 文件或目录名称 搜索</li></ol><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># find 【搜索目录】【-name或者-iname】【搜索字符】：-name和-iname的区别一个区分大小写，一个不区分大小写</span>


<span class="token comment"># 在/etc 目录下搜索名字为init的文件或目录</span>

<span class="token function">find</span> /etc <span class="token parameter variable">-name</span> init        <span class="token comment">#(精准搜索，名字必须为 init 才能搜索的到)</span>
<span class="token function">find</span> /etc <span class="token parameter variable">-iname</span> init       <span class="token comment">#(精准搜索，名字必须为 init或者有字母大写也能搜索的到)</span>
<span class="token function">find</span> /etc <span class="token parameter variable">-name</span> *init       <span class="token comment">#(模糊搜索，以 init 结尾的文件或目录名)</span>
<span class="token function">find</span> /etc <span class="token parameter variable">-name</span> init???     <span class="token comment">#(模糊搜索，？ 表示单个字符，即搜索到 init___)</span>
</code></pre></div><ol start="2"><li>根据 文件大小 搜索</li></ol><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token comment">#在根目录下查找大于 100M 的文件</span>
<span class="token function">find</span> / <span class="token parameter variable">-size</span> +204800

<span class="token comment">#这里 +n 表示大于，-n 表示小于，n 表示等于</span>
<span class="token number">1</span> 数据块 <span class="token operator">==</span> <span class="token number">512</span> 字节 <span class="token number">0</span>.5KB，也就是1KB等于2数据块
100MB <span class="token operator">==</span> 102400KB204800数据块

- 根据 所有者和所属组 搜索
①、在home目录下查询所属组为 root 的文件
　　　　<span class="token function">find</span> /home <span class="token parameter variable">-group</span> root
②、在home目录下查询所有者为 root 的文件
　　　　<span class="token function">find</span> /home <span class="token parameter variable">-user</span> root
</code></pre></div><h2 id="文件权限" tabindex="-1"><a class="header-anchor" href="#文件权限" aria-hidden="true">#</a> 文件权限</h2><div class="language-text" data-ext="text"><pre class="language-text"><code>
r 读权限read  4
w 写权限write 2
x 操作权限execute  1
权限数字对应权限组说明：
总共分为4部分
【文件或文件夹】【owner(所有者)权限】【group(组)权限】【others(其他人)权限】
【文件是-，文件夹是d】【r/w/x相加】【r/w/x相加】【r/w/x相加】
Linux档案的基本权限就有九个，分别是owner/group/others三种身份各有自己的read/write/execute权限。
</code></pre></div>`,42),u=[h];function k(f,g){return n(),s("div",null,u)}const v=a(m,[["render",k],["__file","hadoo.html.vue"]]);export{v as default};
