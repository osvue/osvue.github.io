import{_ as a,p as s,q as n,a1 as e}from"./framework-d81ad7e5.js";const t="/assets/13-1b245def.png",o="/assets/14-348621a0.png",p="/assets/15-9b614581.png",c="/assets/16-8ecb3e69.png",r="/assets/17-d2699fea.png",l="/assets/18-e1084062.png",i="/assets/19-00601a22.png",d="/assets/20-251683a2.png",u="/assets/21-19895ec8.png",k="/assets/22-3c24f0e0.png",m="/assets/23-24e56366.png",h="/assets/24-d3ac545a.png",g="/assets/25-4507ad6e.png",b="/assets/26-b60f0083.png",v="/assets/27-1c6165d7.png",f="/assets/28-8d7e0d7e.png",_="/assets/29-b570d562.png",x="/assets/30-6426695c.png",y="/assets/31-f67fd965.png",q="/assets/32-1ee01fae.png",D="/assets/33-46474a4f.png",S="/assets/34-966b94b4.png",O="/assets/35-9d1a9a68.png",I="/assets/36-bfee60e9.png",w="/assets/37-415b5e0e.png",z="/assets/38-a6d96d1d.png",T="/assets/39-d2aab441.png",R="/assets/40-66048d42.png",P="/assets/41-3efcd034.png",E="/assets/42-db617298.png",C="/assets/43-4e4149ab.png",L="/assets/44-fd4e18cd.png",A="/assets/45-0fa46f54.png",N="/assets/46-98b97910.png",G="/assets/47-91b7270b.png",H="/assets/48-3c5e4d1d.png",U="/assets/49-e863382b.png",j="/assets/50-da844c40.png",M="/assets/51-fad61d11.png",B="/assets/52-3a55f337.png",X="/assets/53-7039c12d.png",F="/assets/54-ddefef9f.png",J="/assets/55-4bbc51b6.png",V="/assets/56-1e74d525.png",W="/assets/57-a4845e22.png",Y="/assets/58-9036b158.png",Q="/assets/59-9a986ba9.png",K="/assets/60-8e35edb9.png",$="/assets/61-ed5264f0.png",Z="/assets/62-a797c29d.png",aa="/assets/63-e1c8465f.png",sa="/assets/64-97d84a4c.png",na="/assets/65-0102f97b.png",ea="/assets/66-48ad870f.png",ta="/assets/67-b5a088df.png",oa="/assets/68-63352193.png",pa="/assets/69-20d6a9a8.png",ca="/assets/70-2af61609.png",ra="/assets/71-b83ab604.png",la="/assets/72-cd1e2ef5.png",ia="/assets/73-a71bf149.png",da="/assets/74-75a6824b.png",ua="/assets/75-a843928d.png",ka="/assets/76-7cc6ce00.png",ma="/assets/77-37fb94c7.png",ha="/assets/78-1df8016e.png",ga="/assets/79-7720284a.png",ba="/assets/81-506d911c.png",va="/assets/82-1bb8c599.png",fa="/assets/83-37908404.png",_a="/assets/84-f6131ea4.png",xa={},ya=e('<h3 id="一、docker简介" tabindex="-1"><a class="header-anchor" href="#一、docker简介" aria-hidden="true">#</a> 一、Docker简介</h3><h4 id="_1-1-docker是什么" tabindex="-1"><a class="header-anchor" href="#_1-1-docker是什么" aria-hidden="true">#</a> 1.1 docker是什么</h4><p>【问题】：问什么会有docker出现</p><p>​ Docker的出现 使得Docker得以打破过去「程序即应用」的观念。透过镜像(images)将作业系统核心除外，运作应用程式所需要的系统环境，由下而上打包，达到应用程式跨平台间的无缝接轨运作。</p><p>【docker理念】：解决了运行环境和配置问题的软件容器，方便持续继承并有助于整体发布的容器虚拟化技术。</p><h4 id="_1-5-下载地址" tabindex="-1"><a class="header-anchor" href="#_1-5-下载地址" aria-hidden="true">#</a> 1.5 下载地址</h4><p>官网：http://www.docker.com</p><p>Docker Hub 官网：https://hub.docker.com</p><h3 id="二、docker安装" tabindex="-1"><a class="header-anchor" href="#二、docker安装" aria-hidden="true">#</a> 二、Docker安装</h3><h4 id="_2-1-前提说明" tabindex="-1"><a class="header-anchor" href="#_2-1-前提说明" aria-hidden="true">#</a> 2.1 前提说明</h4><h5 id="_2-1-1-centos-docker-安装" tabindex="-1"><a class="header-anchor" href="#_2-1-1-centos-docker-安装" aria-hidden="true">#</a> 2.1.1 <strong>CentOS Docker</strong> <strong>安装</strong></h5><p><img src="'+t+'" alt="13"></p><h5 id="_2-1-2-前提条件" tabindex="-1"><a class="header-anchor" href="#_2-1-2-前提条件" aria-hidden="true">#</a> 2.1.2 前提条件</h5><p>目前，CentOS仅发行版本中的内核支持Docker。Docker运行在CentOS 7（64-bit）上，要求系统为64位，Linux系统内核版本为3.8以上，这里选用Centos7.x</p><h5 id="_2-1-3-查看自己的内核" tabindex="-1"><a class="header-anchor" href="#_2-1-3-查看自己的内核" aria-hidden="true">#</a> 2.1.3 查看自己的内核</h5><p>uname 命令用于打印当前系统相关信息（内核版本号，硬件架构，主机名称和操作系统类型等）。</p><p><img src="'+o+'" alt="14"></p><h4 id="_2-2-docker的基本组成" tabindex="-1"><a class="header-anchor" href="#_2-2-docker的基本组成" aria-hidden="true">#</a> 2.2 Docker的基本组成</h4><h5 id="_2-2-1-镜像-image" tabindex="-1"><a class="header-anchor" href="#_2-2-1-镜像-image" aria-hidden="true">#</a> 2.2.1 镜像（image）</h5><p>Docker 镜像（Image）就是一个 <strong>只读</strong> 的模板。镜像可以用来创建 Docker 容器， 一个镜像可以创建很多容器 。</p><p>它也相当于是一个root文件系统。比如官方镜像 centos:7 就包含了完整的一套 centos:7 最小系统的 root 文件系统。</p><p>相当于容器的“源代码”， docker镜像文件类似于Java的类模板，而docker容器实例类似于java中new出来的实例对象。</p><h5 id="_2-2-2-容器-container" tabindex="-1"><a class="header-anchor" href="#_2-2-2-容器-container" aria-hidden="true">#</a> 2.2.2 容器（container）</h5><ul><li>从面向对象角度</li></ul><p>Docker 利用容器（Container）独立运行的一个或一组应用，应用程序或服务运行在容器里面，容器就类似于一个虚拟化的运行环境， 容器是用镜像创建的运行实例 。就像是Java中的类和实例对象一样，镜像是静态的定义，容器是镜像运行时的实体。容器为镜像提供了一个标准的和隔离的运行环境 ，它可以被启动、开始、停止、删除。每个容器都是相互隔离的、保证安全的平台</p><ul><li>从镜像容器角度</li></ul><p><strong>可以把容器看做是一个简易版的</strong> *<strong>Linux*</strong> <strong>环境</strong> （包括root用户权限、进程空间、用户空间和网络空间等）和运行在其中的应用程序。</p><h5 id="_2-2-3-仓库-repository" tabindex="-1"><a class="header-anchor" href="#_2-2-3-仓库-repository" aria-hidden="true">#</a> 2.2.3 仓库（repository）</h5><p>仓库（Repository）是 集中存放镜像 文件的场所。</p><p>类似于</p><p>Maven仓库，存放各种jar包的地方；</p><p>github仓库，存放各种git项目的地方；</p><p>Docker公司提供的官方registry被称为Docker Hub，存放各种镜像模板的地方。</p><p>仓库分为公开仓库（Public）和私有仓库（Private）两种形式。</p><p>最大的公开仓库是 Docker Hub(https://hub.docker.com/) ，</p><p>存放了数量庞大的镜像供用户下载。国内的公开仓库包括阿里云 、网易云等</p><h5 id="_2-2-4-小总结" tabindex="-1"><a class="header-anchor" href="#_2-2-4-小总结" aria-hidden="true">#</a> 2.2.4 小总结</h5><ul><li>需要正确的理解仓库/镜像/容器这几个概念:</li></ul><p>Docker 本身是一个容器运行载体或称之为管理引擎。我们把应用程序和配置依赖打包好形成一个可交付的运行环境，这个打包好的运行环境就是image镜像文件。只有通过这个镜像文件才能生成Docker容器实例(类似Java中new出来一个对象)。</p><p>image文件可以看作是容器的模板。Docker 根据 image 文件生成容器的实例。同一个 image 文件，可以生成多个同时运行的容器实例。</p><ul><li>镜像文件</li></ul><p>image 文件生成的容器实例，本身也是一个文件，称为镜像文件。</p><ul><li>容器实例</li></ul><p>一个容器运行一种服务，当我们需要的时候，就可以通过docker客户端创建一个对应的运行实例，也就是我们的容器 。</p><ul><li>仓库</li></ul><p>就是放一堆镜像的地方，我们可以把镜像发布到仓库中，需要的时候再从仓库中拉下来就可以了。</p><h4 id="_2-3-docker平台架构图解-入门版" tabindex="-1"><a class="header-anchor" href="#_2-3-docker平台架构图解-入门版" aria-hidden="true">#</a> 2.3 Docker平台架构图解（入门版）</h4><p><img src="'+p+'" alt="15"></p><h5 id="_2-3-1-docker工作原理" tabindex="-1"><a class="header-anchor" href="#_2-3-1-docker工作原理" aria-hidden="true">#</a> 2.3.1 Docker工作原理</h5><p>Docker是一个Client-Server结构的系统，Docker守护进程运行在主机上， 然后通过Socket连接从客户端访问，守护进程从客户端接受命令并管理运行在主机上的容器 。 容器，是一个运行时环境，就是我们前面说到的集装箱。可以对比mysql演示对比讲解</p><p><img src="'+c+'" alt="16"></p><h5 id="_2-3-2-整体架构及底层通信原理简述" tabindex="-1"><a class="header-anchor" href="#_2-3-2-整体架构及底层通信原理简述" aria-hidden="true">#</a> 2.3.2 整体架构及底层通信原理简述</h5><p>Docker是一个C/S模式的架构，后端是一个松耦合架构，众多模块各司其职</p><h5 id="_2-3-3-docker运行的基本流程为" tabindex="-1"><a class="header-anchor" href="#_2-3-3-docker运行的基本流程为" aria-hidden="true">#</a> 2.3.3 Docker运行的基本流程为：</h5><ol><li>用户是使用Docker Client 与Docker Daemon 建立通信，并发送请求给后者。</li><li>Docker Daemon 作为Docker架构中的主体部分，首先提供Docker Server 的功能时期可以接受 Docker Client的请求。</li><li>Docker Engine 执行Docker内部的一些列工作，每一项工作都是以一个Job的形式的存在。</li><li>Job的运行过程中，当需要容器镜像是，则从Docker Register中下载镜像，并通过镜像管理驱动Graph driver 将下载镜像以Graph的形式存储。</li><li>当需要为Docker创建网络环境时，通过网络驱动Network driver创建并配置Docker容器网络环境。</li><li>当需要限制Docker容器运行资源或执行用户指令等操作时，则通过Exec driver来完成。</li><li>Libcontainer是一项独立的容器管理包，Network driver以及Exec driver都是通过Libcontainer来实现具体容器进行的操作。</li></ol><p><img src="'+r+'" alt="17"></p><p><img src="'+l+`" alt="18"></p><h4 id="_2-4、安装步骤" tabindex="-1"><a class="header-anchor" href="#_2-4、安装步骤" aria-hidden="true">#</a> 2.4、安装步骤</h4><h5 id="_2-4-1-centos7安装docker" tabindex="-1"><a class="header-anchor" href="#_2-4-1-centos7安装docker" aria-hidden="true">#</a> 2.4.1 CentOS7安装Docker</h5><ol><li>确定你是CentOS7以上版本</li></ol><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 查看CentOS版本命令</span>
<span class="token function">cat</span> /etc/redhat-release
</code></pre></div><ol start="2"><li><p>卸载旧版本</p><p><img src="`+i+`" alt="19"></p></li></ol><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 卸载旧版本docker命令</span>
$ <span class="token function">sudo</span> yum remove <span class="token function">docker</span> <span class="token punctuation">\\</span>
									docker-client <span class="token punctuation">\\</span>
									docker-client-latest <span class="token punctuation">\\</span>
									docker-common <span class="token punctuation">\\</span>
									docker-latest <span class="token punctuation">\\</span>
									docker-latest-logrotate <span class="token punctuation">\\</span>
									docker-logrotate <span class="token punctuation">\\</span>
									docker-engine		
</code></pre></div><ol start="3"><li>yum安装gcc相关命令</li></ol><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># yum安装gcc相关命令</span>
yum <span class="token parameter variable">-y</span> <span class="token function">install</span> gcc
yum <span class="token parameter variable">-y</span> <span class="token function">install</span> gcc-c++
</code></pre></div><ol start="4"><li><p>安装需要的软件包</p><p><img src="`+d+`" alt="20" style="zoom:50%;"><strong>使用存储库安装</strong></p></li></ol><div class="language-bash" data-ext="sh"><pre class="language-bash"><code>在新主机上首次安装Docker Engine之前，您需要设置Docker存储库。之后，您可以从存储库安装和更新Docker
设置存储库
安装 yum-utils 包（提供yum-config-manager 实用程序）并设置稳定的存储库
<span class="token comment"># 官网要求</span>
yum <span class="token function">install</span> <span class="token parameter variable">-y</span> yum-utils
</code></pre></div><ol start="5"><li><p>设置stable镜像仓库</p><p><img src="`+u+`" alt="21"></p></li></ol><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 推荐使用 使用阿里的 docker 镜像仓库，国外的镜像仓库是比较慢的</span>
yum-config-manager --add-repo http://mirrors.aliyun.com/docker-ce/linux/centos/docker-ce.repo
</code></pre></div><ol start="6"><li>更新yum软件包索引</li></ol><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 更新yum软件包索引</span>
yum makecache fast
</code></pre></div><ol start="7"><li>安装DOCKER CE 引擎</li></ol><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 命令</span>
yum <span class="token parameter variable">-y</span> <span class="token function">install</span> docker-ce docker-ce-cli containerd.io
</code></pre></div><ol start="8"><li>启动docker</li></ol><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 启动命令</span>
systemctl start <span class="token function">docker</span>
</code></pre></div><ol start="9"><li>测试</li></ol><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 测试</span>
<span class="token function">docker</span> version 

<span class="token function">docker</span> run hello-world
</code></pre></div><p><img src="`+k+`" alt="22"></p><ol start="10"><li>卸载</li></ol><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 卸载命令</span>
systemctl stop <span class="token function">docker</span> 
yum remove docker-ce docker-ce-cli containerd.io
<span class="token function">rm</span> <span class="token parameter variable">-rf</span> /var/lib/docker
<span class="token function">rm</span> <span class="token parameter variable">-rf</span> /var/lib/containerd
</code></pre></div><h4 id="_2-5、阿里云镜像加速" tabindex="-1"><a class="header-anchor" href="#_2-5、阿里云镜像加速" aria-hidden="true">#</a> 2.5、阿里云镜像加速</h4><h4 id="_2-5-1-是什么" tabindex="-1"><a class="header-anchor" href="#_2-5-1-是什么" aria-hidden="true">#</a> 2.5.1 是什么</h4><ul><li><p>地址：https://promotion.aliyun.com/ntms/act/kubernetes.html</p></li><li><p>注册一个属于自己的阿里云账户</p></li><li><p>获得加速器地址连接：</p><ol><li>登陆阿里云开发者平台</li><li>点击控制台</li><li>选择容器镜像服务</li><li>获取加速器地址</li></ol></li><li><p>粘贴脚本直接执行</p></li></ul><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token function">mkdir</span> <span class="token parameter variable">-p</span> /etc/docker 
<span class="token function">tee</span> /etc/docker/daemon.json <span class="token operator">&lt;&lt;-</span><span class="token string">&#39;EOF&#39;
{ 
  &quot;registry-mirrors&quot;: [&quot;https://aa25jngu.mirror.aliyuncs.com&quot;] 
} 
EOF</span> 
</code></pre></div><p><img src="`+m+`" alt="23"></p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 或者分开步骤执行</span>
<span class="token function">mkdir</span> <span class="token parameter variable">-p</span> /etc/docker
<span class="token function">vim</span> /etc/docker/daemon.json
</code></pre></div><ul><li>重启服务器</li></ul><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 重启服务器</span>
systemctl daemon-reload
systemctl restart <span class="token function">docker</span>
</code></pre></div><h4 id="_2-5-2-永远的helloworld" tabindex="-1"><a class="header-anchor" href="#_2-5-2-永远的helloworld" aria-hidden="true">#</a> 2.5.2 永远的HelloWorld</h4><p>启动Docker后台容器（测试运行 hello-world）</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 命令</span>
<span class="token function">docker</span> run hello-world
</code></pre></div><p><img src="`+h+`" alt="24"></p><h4 id="_2-5-3-底层原理" tabindex="-1"><a class="header-anchor" href="#_2-5-3-底层原理" aria-hidden="true">#</a> 2.5.3 底层原理</h4><p>为什么Docker会比VM虚拟机快:</p><div class="language-properties" data-ext="properties"><pre class="language-properties"><code><span class="token key attr-name">(1)docker有着比虚拟机更少的抽象层</span> 
   由于docker不需要Hypervisor(虚拟机)实现硬件资源虚拟化,运行在docker容器上的程序直接使用的都是实际物理机的硬件资源。因此在CPU、内存利用率上docker将会在效率上有明显优势。 
<span class="token key attr-name">(2)docker利用的是宿主机的内核,而不需要加载操作系统OS内核</span> 
   当新建一个容器时,docker不需要和虚拟机一样重新加载一个操作系统内核。进而避免引寻、加载操作系统内核返回等比较费时费资源的过程,当新建一个虚拟机时,虚拟机软件需要加载OS,返回新建过程是分钟级别的。而docker由于直接利用宿主机的操作系统,则省略了返回过程,因此新建一个docker容器只需要几秒钟。
</code></pre></div><p><img src="`+g+`" alt="25"></p><h3 id="三、docker常用命令" tabindex="-1"><a class="header-anchor" href="#三、docker常用命令" aria-hidden="true">#</a> 三、Docker常用命令</h3><h4 id="_3-1-帮助启动类命令" tabindex="-1"><a class="header-anchor" href="#_3-1-帮助启动类命令" aria-hidden="true">#</a> 3.1 帮助启动类命令</h4><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 启动命令</span>
systemctl start <span class="token function">docker</span>
<span class="token comment"># 停止命令</span>
systemctl stop <span class="token function">docker</span>
<span class="token comment"># 重启命令</span>
systemctl restart <span class="token function">docker</span>
<span class="token comment"># 查看docker状态</span>
systemctl status <span class="token function">docker</span>
<span class="token comment"># 开机启动</span>
systemctl <span class="token builtin class-name">enable</span> <span class="token function">docker</span>
<span class="token comment"># 查看 docker 概要信息</span>
<span class="token function">docker</span> info
<span class="token comment"># 查看docker 总体帮助文档</span>
<span class="token function">docker</span> <span class="token parameter variable">--help</span>
<span class="token comment"># 查看docker命令帮助文档：</span>
<span class="token function">docker</span> 具体命令 <span class="token parameter variable">--help</span>
</code></pre></div><h4 id="_3-2-镜像命令" tabindex="-1"><a class="header-anchor" href="#_3-2-镜像命令" aria-hidden="true">#</a> 3.2 镜像命令</h4><h5 id="_3-2-1-docker-images" tabindex="-1"><a class="header-anchor" href="#_3-2-1-docker-images" aria-hidden="true">#</a> 3.2.1 docker images</h5><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 列出本地主机上的镜像</span>
<span class="token function">docker</span> images 
</code></pre></div><p><img src="`+b+`" alt="26"></p><p>各个选项说明:</p><ul><li><p>REPOSITORY：表示镜像的仓库源</p></li><li><p>TAG：镜像的标签版本号</p></li><li><p>IMAGE ID：镜像ID</p></li><li><p>CREATED：镜像创建时间</p></li><li><p>SIZE：镜像大小</p></li></ul><p>同一仓库源可以有多个 TAG版本，代表这个仓库源的不同个版本，我们使用 REPOSITORY:TAG 来定义不同的镜像。</p><p>如果你不指定一个镜像的版本标签，例如你只使用 ubuntu，docker 将默认使用 ubuntu:latest 镜像</p><h5 id="_3-2-2-options-说明" tabindex="-1"><a class="header-anchor" href="#_3-2-2-options-说明" aria-hidden="true">#</a> 3.2.2 OPTIONS 说明</h5><p>-a : 列出本地所有的镜像（含历史映像层）</p><p>-q：只显示镜像ID</p><h5 id="_3-2-3-docker-search-某个xxx镜像名字" tabindex="-1"><a class="header-anchor" href="#_3-2-3-docker-search-某个xxx镜像名字" aria-hidden="true">#</a> 3.2.3 docker search 某个XXX镜像名字</h5><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 网站</span>
https://hub.docker.com
<span class="token comment"># 命令</span>
<span class="token function">docker</span> search <span class="token punctuation">[</span>OPTIONS<span class="token punctuation">]</span>镜像名字
<span class="token comment"># OPTIONS说明</span>
<span class="token comment"># --limit ：只列出N个镜像，默认25个</span>
<span class="token function">docker</span> search  <span class="token parameter variable">--limit</span> <span class="token number">5</span> redis
</code></pre></div><p>案例：</p><p><img src="`+v+`" alt="27"></p><h5 id="_3-2-4-docker-pull-某个xxx镜像名字" tabindex="-1"><a class="header-anchor" href="#_3-2-4-docker-pull-某个xxx镜像名字" aria-hidden="true">#</a> 3.2.4 docker pull 某个XXX镜像名字</h5><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 下载镜像</span>
 <span class="token function">docker</span> pull 镜像名字<span class="token punctuation">[</span>:TAG<span class="token punctuation">]</span>
 
 <span class="token function">docker</span> pull  镜像名字 
 
 <span class="token comment"># 没有TAG就是最新版本 等价于</span>
 <span class="token function">docker</span> pull 镜像名字：latest
 <span class="token function">docker</span> pull ubuntu 
</code></pre></div><p><img src="`+f+'" alt="28"></p><h5 id="_3-2-5-docker-system-df-查看镜像-容器-数据卷所占用的空间" tabindex="-1"><a class="header-anchor" href="#_3-2-5-docker-system-df-查看镜像-容器-数据卷所占用的空间" aria-hidden="true">#</a> 3.2.5 docker system df 查看镜像/容器/数据卷所占用的空间</h5><p><img src="'+_+`" alt="29"></p><h5 id="_3-2-6-docker-rmi-删除镜像" tabindex="-1"><a class="header-anchor" href="#_3-2-6-docker-rmi-删除镜像" aria-hidden="true">#</a> 3.2.6 docker rmi 删除镜像</h5><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 删除单个</span>
<span class="token function">docker</span> rmi <span class="token parameter variable">-f</span> 镜像ID

<span class="token comment"># 删除多个</span>
<span class="token function">docker</span> rmi <span class="token parameter variable">-f</span> 镜像名1:TAG 镜像名2:TAG

<span class="token comment"># 删除全部</span>
<span class="token function">docker</span> rmi <span class="token parameter variable">-f</span> <span class="token variable"><span class="token variable">$(</span><span class="token function">docker</span> images <span class="token parameter variable">-qa</span><span class="token variable">)</span></span>
</code></pre></div><h5 id="_3-2-7-谈谈docker虚悬镜像是什么" tabindex="-1"><a class="header-anchor" href="#_3-2-7-谈谈docker虚悬镜像是什么" aria-hidden="true">#</a> 3.2.7 谈谈docker虚悬镜像是什么？</h5><div class="language-properties" data-ext="properties"><pre class="language-properties"><code><span class="token key attr-name">仓库名称，标签都是&lt;none&gt;的镜像，俗称虚悬镜像dangling</span> <span class="token value attr-value">image</span>
长什么样子
后续Dockerfile章节在介绍
</code></pre></div><h4 id="_3-3-容器命令" tabindex="-1"><a class="header-anchor" href="#_3-3-容器命令" aria-hidden="true">#</a> 3.3 容器命令</h4><blockquote><p>有镜像才能创建容器，这是根本前提（下载一个CentOS或者ubuntu镜像演示）</p><h5 id="_1-说明" tabindex="-1"><a class="header-anchor" href="#_1-说明" aria-hidden="true">#</a> 1.说明</h5><p><img src="`+x+'" alt="30"></p><h5 id="_2-docker-pull-centos" tabindex="-1"><a class="header-anchor" href="#_2-docker-pull-centos" aria-hidden="true">#</a> 2.docker pull centos</h5><h5 id="_3-docker-pull-ubuntu" tabindex="-1"><a class="header-anchor" href="#_3-docker-pull-ubuntu" aria-hidden="true">#</a> 3.docker pull ubuntu</h5><h5 id="_4-本次演示用ubuntu演示" tabindex="-1"><a class="header-anchor" href="#_4-本次演示用ubuntu演示" aria-hidden="true">#</a> 4.本次演示用ubuntu演示</h5><p><img src="'+y+'" alt="31"></p></blockquote><h5 id="_3-3-1-新建-启动容器" tabindex="-1"><a class="header-anchor" href="#_3-3-1-新建-启动容器" aria-hidden="true">#</a> 3.3.1 新建+启动容器</h5><blockquote><h6 id="新建-启动容器-命令" tabindex="-1"><a class="header-anchor" href="#新建-启动容器-命令" aria-hidden="true">#</a> 新建+启动容器 命令</h6><p>docker run [OPTIONS] IMAGE [COMMAND] [ARG...]</p><h6 id="options说明" tabindex="-1"><a class="header-anchor" href="#options说明" aria-hidden="true">#</a> OPTIONS说明</h6><p>OPTIONS说明（常用）：有些是一个减号，有些是两个减号</p><p>--name=&quot;容器新名字&quot; 为容器指定一个名称； -d: 后台运行容器并返回容器ID，也即启动守护式容器(后台运行)；</p><p>-i：以交互模式运行容器，通常与 -t 同时使用； -t：为容器重新分配一个伪输入终端，通常与 -i 同时使用； 也即 启动交互式容器(前台有伪终端，等待交互) ；</p><p>-P: 随机 端口映射，大写P -p: 指定 端口映射，小写p</p><p><img src="'+q+'" alt="32"></p></blockquote><blockquote><p>启动交互式容器（前台命令行）</p><p><img src="'+D+`" alt="33"></p><p>使用镜像centos:latest以 交互模式 启动一个容器,在容器内执行/bin/bash命令。</p><p><strong>docker run -it centos /bin/bash</strong></p><p>参数说明：</p><ul><li><p>-i: 交互式操作。</p></li><li><p>-t: 终端。</p></li><li><p>centos : centos 镜像。</p></li><li><p>/bin/bash：放在镜像名后的是命令，这里我们希望有个交互式 Shell，因此用的是 /bin/bash。 要退出终端，直接输入 exit:</p></li></ul></blockquote><h5 id="_3-3-2-列出当前所有正在运行的容器" tabindex="-1"><a class="header-anchor" href="#_3-3-2-列出当前所有正在运行的容器" aria-hidden="true">#</a> 3.3.2 列出当前所有正在运行的容器</h5><div class="language-SHELL" data-ext="SHELL"><pre class="language-SHELL"><code># 列出当前所有正在运行的容器
docker ps [OPTIONS]
# OPTIONS说明
-a : 列出当前所有 正在运行 的容器 + 历史上运行过 的 
-l :显示最近创建的容器。 
-n：显示最近n个创建的容器。 
-q :静默模式，只显示容器编号。 
</code></pre></div><h5 id="_3-3-3-退出容器" tabindex="-1"><a class="header-anchor" href="#_3-3-3-退出容器" aria-hidden="true">#</a> 3.3.3 退出容器</h5><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 两种退出方式</span>
<span class="token comment"># 1、run进去容器，exit退出，容器停止</span>
<span class="token builtin class-name">exit</span> 
<span class="token comment"># 2、run进去容器，ctrl+p+q退出，容器不停止</span>
ctrl+p+q
</code></pre></div><h5 id="_3-3-4-启动已停止运行的容器" tabindex="-1"><a class="header-anchor" href="#_3-3-4-启动已停止运行的容器" aria-hidden="true">#</a> 3.3.4 启动已停止运行的容器</h5><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 启动已停止运行的容器</span>
<span class="token function">docker</span> start 容器ID或者容器名
<span class="token comment"># 重启容器</span>
<span class="token function">docker</span> restart 容器ID或者容器名
<span class="token comment"># 停止容器</span>
<span class="token function">docker</span> stop 容器ID或者容器名
<span class="token comment"># 强制停止容器</span>
<span class="token function">docker</span> <span class="token function">kill</span> 容器ID或容器名
<span class="token comment"># 删除已停止的容器</span>
<span class="token function">docker</span> <span class="token function">rm</span> 容器ID
<span class="token comment"># 一次性删除多个容器实例</span>
<span class="token function">docker</span> <span class="token function">rm</span> <span class="token parameter variable">-rf</span> <span class="token variable"><span class="token variable">$(</span><span class="token function">docker</span> <span class="token function">ps</span> <span class="token parameter variable">-a</span> <span class="token parameter variable">-q</span><span class="token variable">)</span></span>

<span class="token function">docker</span> <span class="token function">ps</span> <span class="token parameter variable">-a</span> <span class="token parameter variable">-q</span> <span class="token operator">|</span> <span class="token function">xargs</span> <span class="token function">docker</span> <span class="token function">rm</span>
</code></pre></div><h5 id="_3-3-5-重要" tabindex="-1"><a class="header-anchor" href="#_3-3-5-重要" aria-hidden="true">#</a> 3.3.5 重要</h5><p><strong>启动守护式容器（后台服务器）：</strong></p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code>有镜像才能创建容器，这是根本前提（下载一个Redis6.0.8镜像演示）

在大部分的场景下，我们希望docker的服务是在后台运行的，我们可以通过 <span class="token parameter variable">-d</span> 指定容器的后台运行模式。

<span class="token function">docker</span> run <span class="token parameter variable">-d</span> 容器名
<span class="token comment"># 使用镜像centos:latest以后台模式启动一个容器 </span>
<span class="token function">docker</span> run <span class="token parameter variable">-d</span> centos 
  
问题：然后docker <span class="token function">ps</span> <span class="token parameter variable">-a</span> 进行查看,  会发现容器已经退出 
很重要的要说明的一点:  Docker容器后台运行,就必须有一个前台进程. 
容器运行的命令如果不是那些 一直挂起的命令 （比如运行top，tail），就是会自动退出的。 
  
这个是docker的机制问题,比如你的web容器,我们以nginx为例，正常情况下, 
我们配置启动服务只需要启动响应的service即可。例如service nginx start 
但是,这样做,nginx为后台进程模式运行,就导致docker前台没有运行的应用, 
这样的容器后台启动后,会立即自杀因为他觉得他没事可做了. 
所以，最佳的解决方案是, 将你要运行的程序以前台进程的形式运行， 
常见就是命令行模式，表示我还有交互操作，别中断，O<span class="token punctuation">(</span>∩_∩<span class="token punctuation">)</span>O哈哈~ 

</code></pre></div><p><strong>redis前后台启动演示case</strong></p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 前台交互式启动</span>
<span class="token function">docker</span> run <span class="token parameter variable">-it</span> redis:6.0.8
<span class="token comment"># 后台交互式启动</span>
<span class="token function">docker</span> run <span class="token parameter variable">-d</span> redis:6.0.8
</code></pre></div><p><strong>查看容器日志</strong></p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 查看容器日志</span>
<span class="token function">docker</span> logs 容器ID
</code></pre></div><p><strong>查看容器内运行的进程</strong></p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 查看容器内运行的进程</span>
<span class="token function">docker</span> <span class="token function">top</span> 容器ID
</code></pre></div><p><strong>查看容器内部细节</strong></p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 查看容器内部细节</span>
<span class="token function">docker</span> inspect 容器ID
</code></pre></div><p><strong>进入正在运行的容器并以命令行交互</strong></p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> <span class="token builtin class-name">exec</span> <span class="token parameter variable">-it</span> 容器ID bashShell
</code></pre></div><p><img src="`+S+'" alt="34"></p><blockquote><p>重新进入docker attach 容器ID</p><p>案例演示，用centos或者unbuntu都可以 <strong>上述两个区别：</strong></p><ol><li>attach 直接进入容器启动命令的终端，不会启动新的进程用exit退出，会导致容器的停止。</li></ol><p><img src="'+O+'" alt="35">2. exec 是在容器中打开新的终端，并且可以启动新的进程用exit退出，不会导致容器的停止。</p><p><img src="'+I+`" alt="36"></p><p>推荐大家使用docker exec 命令，因为退出容器终端，不会导致容器的停止。</p><p><strong>使用之前的redis容器实例进入试试</strong></p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> <span class="token builtin class-name">exec</span> <span class="token parameter variable">-it</span> 容器ID /bin/bash

<span class="token function">docker</span> <span class="token builtin class-name">exec</span> <span class="token parameter variable">-it</span> 容器ID redis-cli

一般用-d后台启动的程序，在用exec进入对应容器实例
</code></pre></div></blockquote><p><strong>从容器内拷贝文件到主机上</strong></p><blockquote><p>容器 -&gt; 主机</p><p>docker cp 容器ID:容器内路径 目的主机路径</p><p><img src="`+w+'" alt="37"></p><p>公式： docker cp 容器 ID: 容器内路径 目的主机路径</p></blockquote><p><strong>导入和导出容器</strong></p><blockquote><p>Export 导出容器的内容留作为一个tar归档文件[对应import命令]</p><p>import 从tar 包中的内容创建一个新的文件系统在导入为镜像[对应export]</p><p>【案例】：</p><p>docker export 容器ID &gt; 文件.tar</p><p><img src="'+z+'" alt="38"></p><p>cat 文件名.tar | docker import -镜像用户/镜像名:镜像版本号</p><p><img src="'+T+'" alt="39"></p></blockquote><h4 id="_3-4-小总结" tabindex="-1"><a class="header-anchor" href="#_3-4-小总结" aria-hidden="true">#</a> 3.4 小总结</h4><p><img src="'+R+`" alt="40"></p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code>attach    Attach to a running container                 <span class="token comment"># 当前 shell 下 attach 连接指定运行镜像 </span>
build     Build an image from a Dockerfile              <span class="token comment"># 通过 Dockerfile 定制镜像 </span>
commit    Create a new image from a container changes   <span class="token comment"># 提交当前容器为新的镜像 </span>
<span class="token function">cp</span>        Copy files/folders from the containers filesystem to the <span class="token function">host</span> path   <span class="token comment">#从容器中拷贝指定文件或者目录到宿主机中 </span>
create    Create a new container                        <span class="token comment"># 创建一个新的容器，同 run，但不启动容器 </span>
<span class="token function">diff</span>      Inspect changes on a container&#39;s filesystem   <span class="token comment"># 查看 docker 容器变化 </span>
events    Get real <span class="token function">time</span> events from the server          <span class="token comment"># 从 docker 服务获取容器实时事件 </span>
<span class="token builtin class-name">exec</span>      Run a <span class="token builtin class-name">command</span> <span class="token keyword">in</span> an existing container        <span class="token comment"># 在已存在的容器上运行命令 </span>
<span class="token builtin class-name">export</span>    Stream the contents of a container as a <span class="token function">tar</span> archive   <span class="token comment"># 导出容器的内容流作为一个 tar 归档文件[对应 import ] </span>
<span class="token function">history</span>   Show the <span class="token function">history</span> of an image                  <span class="token comment"># 展示一个镜像形成历史 </span>
images    List images                                   <span class="token comment"># 列出系统当前镜像 </span>
<span class="token function">import</span>    Create a new filesystem image from the contents of a tarball <span class="token comment"># 从tar包中的内容创建一个新的文件系统映像[对应export] </span>
info      Display system-wide information               <span class="token comment"># 显示系统相关信息 </span>
inspect   Return low-level information on a container   <span class="token comment"># 查看容器详细信息 </span>
<span class="token function">kill</span>      Kill a running container                      <span class="token comment"># kill 指定 docker 容器 </span>
load      Load an image from a <span class="token function">tar</span> archive              <span class="token comment"># 从一个 tar 包中加载一个镜像[对应 save] </span>
login     Register or Login to the <span class="token function">docker</span> registry server    <span class="token comment"># 注册或者登陆一个 docker 源服务器 </span>
<span class="token builtin class-name">logout</span>    Log out from a Docker registry server          <span class="token comment"># 从当前 Docker registry 退出 </span>
logs      Fetch the logs of a container                 <span class="token comment"># 输出当前容器日志信息 </span>
port      Lookup the public-facing port <span class="token function">which</span> is NAT-ed to PRIVATE_PORT    <span class="token comment"># 查看映射端口对应的容器内部源端口 </span>
pause     Pause all processes within a container        <span class="token comment"># 暂停容器 </span>
<span class="token function">ps</span>        List containers                               <span class="token comment"># 列出容器列表 </span>
pull      Pull an image or a repository from the <span class="token function">docker</span> registry server   <span class="token comment"># 从docker镜像源服务器拉取指定镜像或者库镜像 </span>
push      Push an image or a repository to the <span class="token function">docker</span> registry server    <span class="token comment"># 推送指定镜像或者库镜像至docker源服务器 </span>
restart   Restart a running container                   <span class="token comment"># 重启运行的容器 </span>
<span class="token function">rm</span>        Remove one or <span class="token function">more</span> containers                 <span class="token comment"># 移除一个或者多个容器 </span>
rmi       Remove one or <span class="token function">more</span> images       <span class="token comment"># 移除一个或多个镜像[无容器使用该镜像才可删除，否则需删除相关容器才可继续或 -f 强制删除] </span>
run       Run a <span class="token builtin class-name">command</span> <span class="token keyword">in</span> a new container              <span class="token comment"># 创建一个新的容器并运行一个命令 </span>
save      Save an image to a <span class="token function">tar</span> archive                <span class="token comment"># 保存一个镜像为一个 tar 包[对应 load] </span>
search    Search <span class="token keyword">for</span> an image on the Docker Hub         <span class="token comment"># 在 docker hub 中搜索镜像 </span>
start     Start a stopped containers                    <span class="token comment"># 启动容器 </span>
stop      Stop a running containers                     <span class="token comment"># 停止容器 </span>
tag       Tag an image into a repository                <span class="token comment"># 给源中镜像打标签 </span>
<span class="token function">top</span>       Lookup the running processes of a container   <span class="token comment"># 查看容器中运行的进程信息 </span>
unpause   Unpause a paused container                    <span class="token comment"># 取消暂停容器 </span>
version   Show the <span class="token function">docker</span> version information           <span class="token comment"># 查看 docker 版本号 </span>
<span class="token function">wait</span>      Block <span class="token keyword">until</span> a container stops, <span class="token keyword">then</span> print its <span class="token builtin class-name">exit</span> code   <span class="token comment"># 截取容器停止时的退出状态值 </span>
</code></pre></div><h3 id="四、docker镜像" tabindex="-1"><a class="header-anchor" href="#四、docker镜像" aria-hidden="true">#</a> 四、Docker镜像</h3><h4 id="_4-1-是什么" tabindex="-1"><a class="header-anchor" href="#_4-1-是什么" aria-hidden="true">#</a> 4.1 是什么</h4><div class="language-properties" data-ext="properties"><pre class="language-properties"><code><span class="token key attr-name">【镜像】</span> 
<span class="token key attr-name">是一种轻量级、可执行的独立软件包，它包含运行某个软件所需的所有内容，我们把应用程序和配置依赖打包好形成一个可交付的运行环境(包括代码、运行时需要的库、环境变量和配置文件等)，这个打包好的运行环境就是image镜像文件。</span> 
只有通过这个镜像文件才能生成Docker容器实例(类似Java中new出来一个对象)。

【分层镜像】
<span class="token key attr-name">以我们的pull为例，在下载的过程中我们可以看到docker的镜像好像是在一层一层的在下载</span> <span class="token value attr-value">。</span>

【UnionFS（联合文件系统）】
<span class="token key attr-name">UnionFS（联合文件系统）：Union文件系统（UnionFS）是一种分层、轻量级并且高性能的文件系统，它支持</span> <span class="token value attr-value">对文件系统的修改作为一次提交来一层层的叠加， 同时可以将不同目录挂载到同一个虚拟文件系统下(unite several directories into a single virtual filesystem)。Union 文件系统是 Docker 镜像的基础。 镜像可以通过分层来进行继承 ，基于基础镜像（没有父镜像），可以制作各种具体的应用镜像。 </span>

<span class="token key attr-name">特性：一次同时加载多个文件系统，但从外面看起来，只能看到一个文件系统，联合加载会把各层文件系统叠加起来，这样最终的文件系统会包含所有底层的文件和目录</span> 
</code></pre></div><p><strong>Docker镜像加载原理</strong></p><blockquote><p>Docker镜像加载原理：</p><p>docker的镜像实际上由一层一层的文件系统组成，这种层级的文件系统UnionFS。</p><p>bootfs(boot file system)主要包含bootloader和kernel, bootloader主要是引导加载kernel, Linux刚启动时会加载bootfs文件系统， 在Docker镜像的最底层是引导文件系统bootfs。 这一层与我们典型的Linux/Unix系统是一样的，包含boot加载器和内核。当boot加载完成之后整个内核就都在内存中了，此时内存的使用权已由bootfs转交给内核，此时系统也会卸载bootfs。</p><p>rootfs (root file system) ，在bootfs之上 。包含的就是典型 Linux 系统中的 /dev, /proc, /bin, /etc 等标准目录和文件。rootfs就是各种不同的操作系统发行版，比如Ubuntu，Centos等等。</p><p><img src="`+P+'" alt="41"></p><p>平时我们安装进虚拟机的CentOS都是好几个G，为什么docker这里才200M？？</p><p><img src="'+E+'" alt="42"></p><p>对于一个精简的OS，rootfs可以很小，只需要包括最基本的命令、工具和程序库就可以了，因为底层直接用Host的kernel，自己只需要提供 rootfs 就行了。由此可见对于不同的linux发行版, bootfs基本是一致的, rootfs会有差别, 因此不同的发行版可以公用bootfs。</p></blockquote><p><strong>为什么Docker镜像要采用这种分层结构呢</strong></p><blockquote><p>镜像分层最大的一个好处就是共享资源，方便复制迁移，就是为了复用。</p><p>比如说有多个镜像都从相同的 base 镜像构建而来，那么 Docker Host 只需在磁盘上保存一份 base 镜像； 同时内存中也只需加载一份 base 镜像，就可以为所有容器服务了。而且镜像的每一层都可以被共享。</p></blockquote><h4 id="_4-2-重点理解" tabindex="-1"><a class="header-anchor" href="#_4-2-重点理解" aria-hidden="true">#</a> 4.2 重点理解</h4><blockquote><p>Docker镜像层都是只读的，容器层是可写的，当容器启动时，一个新的可写层被加载到镜像的顶部。这一层通常被称作&quot;容器层&quot;，&quot;容器层&quot;之下的都叫&quot;镜像层&quot;。</p><p>所有对容器的改动 - 无论添加、删除、还是修改文件都只会发生在容器层中。只有容器层是可写的，容器层下面的所有镜像层都是只读的。</p><p><img src="'+C+`" alt="43"></p></blockquote><h4 id="_4-3-docker镜像commit操作案例" tabindex="-1"><a class="header-anchor" href="#_4-3-docker镜像commit操作案例" aria-hidden="true">#</a> 4.3 Docker镜像commit操作案例</h4><blockquote><p>docker commit 提交容器副本使之成为一个新的镜像</p><p>docker commit -m=&quot;提交的描述信息&quot; -a=&quot;作者&quot; 容器ID 要创建的目标镜像名:[标签名]</p><p>【案例演示】ubuntu安装vim</p><ol><li>从Hub上下ubuntu镜像到笨地并成功运行</li><li>原始默认Ubuntu镜像是不带着vim命令的</li><li>外网连通情况下，安装vim</li></ol><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 先更新我们的包管理工具</span>
<span class="token function">apt-get</span> update
<span class="token comment"># 然后安装我们需要的vim</span>
<span class="token function">apt-get</span> <span class="token function">install</span> <span class="token function">vim</span>
</code></pre></div><p>docker容器内执行上述两条命令：</p><p>apt-get update</p><p>apt-get -y install vim</p><p><img src="`+L+'" alt="44"></p><ol start="4"><li><p>安装完成后，commit我们自己的新镜像</p><p><img src="'+A+'" alt="45"></p></li><li><p>启动我们的新镜像并和原来的对比</p><p><img src="'+N+`" alt="46"></p><p>官网是默认下载的Ubuntu没有vim命令</p><p>我们自己commit构建的镜像，新增加了vim功能，可以成功使用。</p></li></ol></blockquote><p><strong>总结</strong></p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code> Docker中的镜像分层， 支持通过扩展现有镜像，创建新的镜像 。类似Java继承于一个Base基础类，自己再按需扩展。 
新镜像是从 base 镜像一层一层叠加生成的。每安装一个软件，就在现有镜像的基础上增加一层 
</code></pre></div><p><img src="`+G+'" alt="47"></p><h3 id="五、本地镜像发布到阿里云" tabindex="-1"><a class="header-anchor" href="#五、本地镜像发布到阿里云" aria-hidden="true">#</a> 五、本地镜像发布到阿里云</h3><h4 id="_5-1-本地镜像发布到阿里云流程" tabindex="-1"><a class="header-anchor" href="#_5-1-本地镜像发布到阿里云流程" aria-hidden="true">#</a> 5.1 本地镜像发布到阿里云流程</h4><p><img src="'+H+'" alt="48"></p><h4 id="_5-2-镜像生成的方法" tabindex="-1"><a class="header-anchor" href="#_5-2-镜像生成的方法" aria-hidden="true">#</a> 5.2 镜像生成的方法</h4><blockquote><p>上一讲已经介绍过</p><p>基于当前容器创建一个新的镜像，新功能增强</p><p>docker commit [OPTIONS]容器ID [REPOSOTORY[:TAG]]</p><p><strong>OPTIONS说明：</strong></p><p>-a :提交的镜像作者；</p><p>-m :提交时的说明文字；</p><p>本次案例centos+ubuntu两个，当堂讲解一个，家庭作业一个，请大家务必动手，亲自实操。</p><p><img src="'+U+'" alt="49"></p><p><img src="'+j+'" alt="50"></p></blockquote><h4 id="_5-3-将本地镜像推送到阿里云" tabindex="-1"><a class="header-anchor" href="#_5-3-将本地镜像推送到阿里云" aria-hidden="true">#</a> 5.3 将本地镜像推送到阿里云</h4><blockquote><p><strong>本地镜像素材原型</strong></p><p><img src="'+M+'" alt="51"></p><p><img src="'+B+`" alt="52"></p><p><strong>阿里云开发者平台</strong></p><p>地址：https://promotion.aliyun.com/ntms/act/kubernetes.html</p><p><strong>将镜像推送到阿里云</strong></p><p>将镜像推送到阿里云registry ，管理界面脚本</p><p><strong>脚本实例</strong></p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> login <span class="token parameter variable">--username</span><span class="token operator">=</span>zzyybuy registry.cn-hangzhou.aliyuncs.com 

<span class="token function">docker</span> tag cea1bb40441c registry.cn-hangzhou.aliyuncs.com/atguiguwh/myubuntu:1.1 

<span class="token function">docker</span> push registry.cn-hangzhou.aliyuncs.com/atguiguwh/myubuntu:1.1 

上面命令是阳哥自己本地的，你自己酌情处理，不要粘贴我的。 
</code></pre></div><p><img src="`+X+'" alt="53"></p></blockquote><h4 id="_5-4-将阿里云上的镜像下载到本地" tabindex="-1"><a class="header-anchor" href="#_5-4-将阿里云上的镜像下载到本地" aria-hidden="true">#</a> 5.4 将阿里云上的镜像下载到本地</h4><p><img src="'+F+`" alt="54"></p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> pull registry.cn-hangzhou.aliyuncs.com/atguiguwh/myubuntu:1.1 
</code></pre></div><h3 id="六、本地镜像发布到私有库" tabindex="-1"><a class="header-anchor" href="#六、本地镜像发布到私有库" aria-hidden="true">#</a> 六、本地镜像发布到私有库</h3><h4 id="_6-1-本地镜像发布到私有库流程" tabindex="-1"><a class="header-anchor" href="#_6-1-本地镜像发布到私有库流程" aria-hidden="true">#</a> 6.1 本地镜像发布到私有库流程</h4><blockquote><ol><li><p>下载镜像Docker Registry</p><p>docker pull registry</p><p><img src="`+J+'" alt="55"></p><ol start="2"><li><p>运行私有库Registry，相当于本地有个私有库Docker hub</p><p>docker run -d -p 5000:5000 -v /zzyyuse/myregistry/:/tmp/registry --privileged=true registry</p><p>默认情况，仓库被创建在容器的/var/lib/registry目录下，建议自行用容器卷映射，方便于宿主机联调</p><p><img src="'+V+'" alt="56"></p></li><li><p>案例演示创建一个新镜像，ubuntu安装ifconfig命令</p><p>从Hub上下载ubuntu镜像到本地并成功运行</p><p>原始Ubuntu镜像是不带着ifconfig命令的</p><p><img src="'+W+'" alt="57"></p><p>从Hub上下载ubuntu镜像到本地并成功运行</p><p>原始Ubuntu镜像是不带着ifconfig命令的</p><p><strong>外网连通情况下，安装ifconfig命令通过测试</strong></p><p>docker容器内 执行上述两条命令：</p><p>apt-get update</p><p>apt-get install net-tools</p><p><img src="'+Y+'" alt="58"></p><p><img src="'+Q+'" alt="59"></p><p><strong>安装完成后，commit我们自己的新镜像</strong></p><p>公式：</p><p>docker commit -m=&quot; 提交的描述信息 &quot; -a=&quot; 作者 &quot; 容器 ID 要创建的目标镜像名 :[ 标签名 ]</p><p>命令： 在容器外执行，记得</p><p>docker commit -m=&quot; ifconfig cmd add &quot; -a=&quot; zzyy &quot; a69d7c825c4f zzyyubuntu:1.2</p><p><img src="'+K+'" alt="60"></p><p><strong>启动我们的新镜像并和原来的对比</strong></p><p>1.官网是默认下载的Ubuntu没有ifconfig命令</p><p>2.我们自己commit构建的新镜像，新增加了ifconfig功能，可以成功使用。</p><p><img src="'+$+'" alt="61"></p></li><li><p>curl验证私服库上有什么镜像</p><p>curl -XGET http://192.168.111.162:5000/v2/_catalog</p><p>可以看到，目前私服库没有任何镜像上传过。。。。。。</p><p><img src="'+Z+`" alt="62"></p></li><li><p>将新镜像zzyyubuntu:1.2修改符合私服规范的Tag</p></li></ol><div class="language-bash" data-ext="sh"><pre class="language-bash"><code>按照公式： <span class="token function">docker</span>   tag   镜像:Tag   Host:Port/Repository:Tag 
自己host主机IP地址，填写同学你们自己的，不要粘贴错误，O<span class="token punctuation">(</span>∩_∩<span class="token punctuation">)</span>O 
使用命令 <span class="token function">docker</span> tag 将zzyyubuntu:1.2 这个镜像修改为192.168.111.162:5000/zzyyubuntu:1.2 
  
<span class="token function">docker</span> tag  zzyyubuntu:1.2  <span class="token number">192.168</span>.111.162:5000/zzyyubuntu:1.2 
</code></pre></div><p><img src="`+aa+'" alt="63"></p><ol start="6"><li>修改配置文件使之支持http</li></ol><p><img src="'+sa+`" alt="64"></p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code>别无脑照着复制，registry-mirrors 配置的是国内阿里提供的镜像加速地址，不用加速的话访问官网的会很慢。
<span class="token number">2</span>个配置中间有个逗号 <span class="token string">&#39;,&#39;</span>别漏了 ，这个配置是json格式的。 
<span class="token number">2</span>个配置中间有个逗号 <span class="token string">&#39;,&#39;</span>别漏了 ，这个配置是json格式的。 
<span class="token number">2</span>个配置中间有个逗号 <span class="token string">&#39;,&#39;</span>别漏了 ，这个配置是json格式的。 
</code></pre></div><p>vim命令新增如下红色内容：vim /etc/docker/daemon.json</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">{</span>
  <span class="token string">&quot;registry-mirrors&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">[</span><span class="token string">&quot;https://aa25jngu.mirror.aliyuncs.com&quot;</span><span class="token punctuation">]</span> , 
  <span class="token string">&quot;insecure-registries&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">[</span><span class="token string">&quot;192.168.111.162:5000&quot;</span><span class="token punctuation">]</span> 
<span class="token punctuation">}</span> 
</code></pre></div><p>上述理由：docker默认不允许http方式推送镜像，通过配置选项来取消这个限制。====&gt; 修改完后如果不生效，建议重启docker</p><ol start="7"><li><p>push推送到私服库</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> push <span class="token number">192.168</span>.111.162:5000/zzyyubuntu:1.2 
</code></pre></div><p><img src="`+na+'" alt="65"></p></li><li><p>curl验证私服库上有什么镜像2</p><p>curl -XGET http://192.168.111.162:5000/v2/_catalog</p><p><img src="'+ea+`" alt="66"></p></li><li><p>pull到本地并运行</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> pull <span class="token number">192.168</span>.111.162:5000/zzyyubuntu:1.2 
</code></pre></div><p><img src="`+ta+'" alt="67"></p><p>docker run -it 镜像ID /bin/bash</p><p><img src="'+oa+`" alt="68"></p></li></ol></li></ol></blockquote><h3 id="七、docker容器数据卷" tabindex="-1"><a class="header-anchor" href="#七、docker容器数据卷" aria-hidden="true">#</a> 七、Docker容器数据卷</h3><h4 id="_7-1-坑-容器卷记得加入" tabindex="-1"><a class="header-anchor" href="#_7-1-坑-容器卷记得加入" aria-hidden="true">#</a> 7.1 坑：容器卷记得加入</h4><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token parameter variable">--privileged</span><span class="token operator">=</span>true
<span class="token comment"># 原因</span>
  Docker挂载主机目录访问 如果出现cannot <span class="token function">open</span> directory .: Permission denied 
解决办法：在挂载目录后多加一个--privileged<span class="token operator">=</span>true参数即可 
  
如果是CentOS7安全模块会比之前系统版本加强，不安全的会先禁止，所以目录挂载的情况被默认为不安全的行为， 
在SELinux里面挂载目录被禁止掉了额，如果要开启，我们一般使用--privileged<span class="token operator">=</span>true命令，扩大容器的权限解决挂载目录没有权限的问题，也即 
使用该参数，container内的root拥有真正的root权限，否则，container内的root只是外部的一个普通用户权限。 

</code></pre></div><h4 id="_7-2-回顾下上一将的知识点-参数v" tabindex="-1"><a class="header-anchor" href="#_7-2-回顾下上一将的知识点-参数v" aria-hidden="true">#</a> 7.2 回顾下上一将的知识点，参数V</h4><p>还记得蓝色框框中的内容嘛</p><p><img src="`+pa+`" alt="69"></p><h4 id="_7-3-是什么" tabindex="-1"><a class="header-anchor" href="#_7-3-是什么" aria-hidden="true">#</a> 7.3 是什么</h4><div class="language-bash" data-ext="sh"><pre class="language-bash"><code>一句话：有点类似我们Redis里面的rdb和aof文件
将docker容器内的数据保存进宿主机的磁盘中
运行一个带有容器卷存储功能的容器实例
<span class="token function">docker</span> run <span class="token parameter variable">-it</span> <span class="token parameter variable">--privileged</span><span class="token operator">=</span>true <span class="token parameter variable">-v</span> /宿主机绝对路径目录:/容器内目录      镜像名
</code></pre></div><h4 id="_7-4-能干什么" tabindex="-1"><a class="header-anchor" href="#_7-4-能干什么" aria-hidden="true">#</a> 7.4 能干什么</h4><div class="language-bash" data-ext="sh"><pre class="language-bash"><code>将运用与运行的环境打包镜像，run后形成容器实例运行 ，但是我们对数据的要求希望是 持久化的 
 
Docker容器产生的数据，如果不备份，那么当容器实例删除后，容器内的数据自然也就没有了。 
为了能保存数据在docker中我们使用卷。 
  
特点： 
<span class="token number">1</span>：数据卷可在容器之间共享或重用数据 
<span class="token number">2</span>：卷中的更改可以直接实时生效，爽 
<span class="token number">3</span>：数据卷中的更改不会包含在镜像的更新中 
<span class="token number">4</span>：数据卷的生命周期一直持续到没有容器使用它为止 
</code></pre></div><h4 id="_7-5-数据卷案例" tabindex="-1"><a class="header-anchor" href="#_7-5-数据卷案例" aria-hidden="true">#</a> 7.5 数据卷案例</h4><blockquote><h5 id="_7-5-1-宿主vs容器之间映射添加容器卷" tabindex="-1"><a class="header-anchor" href="#_7-5-1-宿主vs容器之间映射添加容器卷" aria-hidden="true">#</a> 7.5.1 宿主vs容器之间映射添加容器卷</h5><p><strong>直接命令添加</strong></p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code>公式：docker run <span class="token parameter variable">-it</span> <span class="token parameter variable">-v</span> /宿主机目录:/容器内目录
ubuntu /bin/bash
<span class="token function">docker</span> run <span class="token parameter variable">-it</span> <span class="token parameter variable">--name</span> myu3 <span class="token parameter variable">--privileged</span><span class="token operator">=</span>true <span class="token parameter variable">-v</span> /tmp/myHostData:/tmp/myDockerData ubuntu /bin/bash 
</code></pre></div><p><img src="`+ca+`" alt="70"></p><p><strong>查看数据卷是否挂成功</strong></p><div class="language-text" data-ext="text"><pre class="language-text"><code>docker inspect 容器ID 
</code></pre></div><p><img src="`+ra+`" alt="71"></p><p><strong>容器和宿主机之间数据共享</strong></p><div class="language-text" data-ext="text"><pre class="language-text"><code>1. docker修改，主机同步获得  
2. 主机修改，docker同步获得 
3. docker容器stop，主机修改，docker容器重启看数据是否同步。
</code></pre></div><p><img src="`+la+`" alt="72"></p></blockquote><blockquote><h5 id="_7-5-2-读写规则映射添加说明" tabindex="-1"><a class="header-anchor" href="#_7-5-2-读写规则映射添加说明" aria-hidden="true">#</a> 7.5.2 读写规则映射添加说明</h5><p><strong>读写(默认)</strong></p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> run <span class="token parameter variable">-it</span> <span class="token parameter variable">--privileged</span><span class="token operator">=</span>true <span class="token parameter variable">-v</span> /宿主机绝对路径目录:/容器内目录:rw  镜像名
默认同上案例，默认就是rw
</code></pre></div><p><img src="`+ia+'" alt="73"></p><p>默认同上案例，默认就是rw</p></blockquote><blockquote><p><strong>只读</strong></p><p>容器实例内部被限制，只能读取不能写</p><p><img src="'+da+`" alt="74"></p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code>/容器目录:ro 镜像名               就能完成功能，此时容器自己只能读取不能写   
ro <span class="token operator">=</span> <span class="token builtin class-name">read</span> only 
此时如果宿主机写入内容，可以同步给容器内，容器可以读取到。
</code></pre></div><div class="language-bash" data-ext="sh"><pre class="language-bash"><code> <span class="token function">docker</span> run <span class="token parameter variable">-it</span> <span class="token parameter variable">--privileged</span><span class="token operator">=</span>true <span class="token parameter variable">-v</span> /宿主机绝对路径目录:/容器内目录:ro      镜像名
</code></pre></div></blockquote><blockquote><h5 id="_7-5-3-卷的集成和共享" tabindex="-1"><a class="header-anchor" href="#_7-5-3-卷的集成和共享" aria-hidden="true">#</a> 7.5.3 卷的集成和共享</h5><p>容器1完成和宿主机的映射</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> run <span class="token parameter variable">-it</span> <span class="token parameter variable">--privileged</span><span class="token operator">=</span>true <span class="token parameter variable">-v</span> /mydocker/u:/tmp <span class="token parameter variable">--name</span> u1 ubuntu 
</code></pre></div><p><img src="`+ua+`" alt="75"></p><p>容器2集成容器1的卷规则</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> run <span class="token parameter variable">-it</span> <span class="token parameter variable">--privileged</span><span class="token operator">=</span>true --volumes-from 父类 <span class="token parameter variable">--name</span> u2 ubuntu
</code></pre></div></blockquote><h3 id="八、docker常规安装简介" tabindex="-1"><a class="header-anchor" href="#八、docker常规安装简介" aria-hidden="true">#</a> 八、Docker常规安装简介</h3><h4 id="_8-1-总体步骤" tabindex="-1"><a class="header-anchor" href="#_8-1-总体步骤" aria-hidden="true">#</a> 8.1 总体步骤</h4><div class="language-text" data-ext="text"><pre class="language-text"><code>1. 搜索镜像
2. 拉去镜像
3. 查看镜像
4. 查看镜像
5. 启动镜像
	 服务端口映射
6. 停止容器
</code></pre></div><h4 id="_8-2-安装tomcat" tabindex="-1"><a class="header-anchor" href="#_8-2-安装tomcat" aria-hidden="true">#</a> 8.2 安装tomcat</h4><blockquote><p>1、docker hub 上面查找tomcat镜像</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 命令</span>
<span class="token function">docker</span> search tomcat
</code></pre></div><p>2、从docker hub 上拉去tomcat镜像到本地</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 命令</span>
<span class="token function">docker</span> pull tomcat
</code></pre></div><p>3、docker images 查看是否有拉去到tomcat</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 命令</span>
<span class="token function">docker</span> images tomcat
</code></pre></div><p>4、使用tomcat镜像创建容器实例（也叫运行镜像）</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 命令</span>
<span class="token function">docker</span> run <span class="token parameter variable">-it</span> <span class="token parameter variable">-p</span> <span class="token number">8080</span>:8080 tomcat

<span class="token parameter variable">-p</span> 小写，主机端口:docker容器端口

<span class="token parameter variable">-P</span> 大写，随机分配端口

i:交互

t:终端

d:后台

</code></pre></div><p>5、访问tomcat首页</p><div class="language-text" data-ext="text"><pre class="language-text"><code>可能出现404 的情况

解决

1、可能没有映射端口或者没有关闭防火墙
2、把webapps.dist 目录换成webapps 
	先成功启动tomcat
</code></pre></div><p><img src="`+ka+'" alt="76"></p><p>查看webapps文件夹查看为空</p><p><img src="'+ma+`" alt="77"></p><p>6、免修改版说明</p><p>docker pull billygoo/tomcat8-jdk8</p><p>Docker run -d -p 8080:8080 --name mytomcat8 billygoo/tomcat8-djk8</p></blockquote><h4 id="_8-3-安装mysql" tabindex="-1"><a class="header-anchor" href="#_8-3-安装mysql" aria-hidden="true">#</a> 8.3 安装mysql</h4><blockquote><p>1、docker hub上面查找mysql镜像</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 命令</span>
<span class="token function">docker</span> search mysql
</code></pre></div><p>2、从docker hub上（阿里云加速器）拉去mysql镜像到本地标签为5.7</p><div class="language-text" data-ext="text"><pre class="language-text"><code># 命令
docker pull mysql:5.7
</code></pre></div><p>3、使用mysql5.7 镜像创建容器（也叫运行镜像）</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 1、命令出处，哪里来的</span>
地址：https://hub.docker.com/_/mysql
<span class="token comment"># 2、简单版</span>
<span class="token function">docker</span> run <span class="token parameter variable">-p</span> <span class="token number">3306</span>:3306 <span class="token parameter variable">-e</span> <span class="token assign-left variable">MYSQL_ROOT_PASSWORD</span><span class="token operator">=</span><span class="token number">123456</span> <span class="token parameter variable">-d</span> mysql:5.7 

<span class="token function">docker</span> <span class="token function">ps</span>

<span class="token function">docker</span> <span class="token builtin class-name">exec</span> <span class="token parameter variable">-it</span> 容器ID /bin/bash

mysql <span class="token parameter variable">-uroot</span> <span class="token parameter variable">-p</span>
</code></pre></div><p><img src="`+ha+`" alt="78"></p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 4、 建库建表插入数据</span>
</code></pre></div><p><img src="`+ga+`" alt="79"></p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code>外部Win10也来连接运行在dokcer上的mysql容器实例服务
【问题】
插入中文数据试试，为什么报错？ <span class="token function">docker</span> 上默认字符集编码隐患

 docker里面的mysql容器实例查看，内容如下： 
 SHOW VARIABLES LIKE <span class="token string">&#39;character%&#39;</span> 
 
 删除容器后，里面的mysql数据如何办
 
 容器实例一删除，你还有什么？
删容器到跑路。。。。。？
</code></pre></div><p>【实战版】</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token comment">#1、新建mysql容器实例</span>
<span class="token function">docker</span> run <span class="token parameter variable">-d</span> <span class="token parameter variable">-p</span> <span class="token number">3306</span>:3306 <span class="token parameter variable">--privileged</span><span class="token operator">=</span>true <span class="token parameter variable">-v</span> /zzyyuse/mysql/log:/var/log/mysql <span class="token parameter variable">-v</span> /zzyyuse/mysql/data:/var/lib/mysql <span class="token parameter variable">-v</span> /zzyyuse/mysql/conf:/etc/mysql/conf.d <span class="token parameter variable">-e</span> <span class="token assign-left variable">MYSQL_ROOT_PASSWORD</span><span class="token operator">=</span><span class="token number">123456</span>  <span class="token parameter variable">--name</span> mysql mysql:5.7 

<span class="token comment">#2、新建my.cnf  通过容器卷同步给MySQL容器实例</span>
<span class="token punctuation">[</span>client<span class="token punctuation">]</span>
<span class="token assign-left variable">default_character_set</span><span class="token operator">=</span>utf8 
<span class="token punctuation">[</span>mysqld<span class="token punctuation">]</span> 
collation_server <span class="token operator">=</span> utf8_general_ci 
character_set_server <span class="token operator">=</span> utf8 

<span class="token comment">#3、重新启动mysql容器实例在重新进入并查看字符编码</span>
<span class="token function">docker</span> restart mysql

<span class="token function">docker</span> <span class="token builtin class-name">exec</span> <span class="token parameter variable">-it</span> mysql_bash

show variables like <span class="token string">&#39;character%&#39;</span><span class="token punctuation">;</span>
<span class="token comment">#4、再新建库新建表再插入中文测试</span>
完全正常
<span class="token comment">#5、结论</span>
之前的DB  无效 
修改字符集操作+重启mysql容器实例 
之后的DB  有效，需要新建 
结论： docker安装完MySQL并run出容器后，建议请先修改完字符集编码后再新建mysql库-表-插数据 
<span class="token comment">#6、假如将当前容器实例删除，再重新来一次，之前建的db01实例还有吗？trytry</span>
</code></pre></div></blockquote><h4 id="_8-4-安装redis" tabindex="-1"><a class="header-anchor" href="#_8-4-安装redis" aria-hidden="true">#</a> 8.4 安装redis</h4><blockquote><p>1、从docker hub上（阿里云加速器）拉去redis镜像到本地标签6.0.8</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 拉去镜像</span>
<span class="token function">docker</span> pull redis:6.0.8
<span class="token comment"># 查看镜像</span>
<span class="token function">docker</span> images
</code></pre></div><p>2、入门命令</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 启动命令</span>
<span class="token function">docker</span> run <span class="token parameter variable">-d</span> <span class="token parameter variable">-p</span> <span class="token number">6379</span>:6379 redis:6.0.8
<span class="token comment"># docker ps</span>
<span class="token comment"># 后台启动</span>
<span class="token function">docker</span> <span class="token builtin class-name">exec</span> <span class="token parameter variable">-it</span> CONTAINER ID /bin/bash
</code></pre></div><p>3、命令提醒：容器卷记得加入 --privileged=true</p><div class="language-text" data-ext="text"><pre class="language-text"><code>Docker挂载主机目录Docker访问出现cannot open directory .: Permission denied 
解决办法：在挂载目录后多加一个--privileged=true参数即可 
</code></pre></div><p>4、在CentOS宿主机下新建目录/app/redis</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 新建目录</span>
<span class="token function">mkdir</span> <span class="token parameter variable">-p</span> /app/redis
</code></pre></div><p>5、将一个redis.conf文件模板拷贝进 /app/redis目录下</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token function">mkdir</span> <span class="token parameter variable">-p</span> /app/redis

<span class="token function">cp</span> /myredis/redis.conf  /app/redis/

<span class="token function">cp</span> /app/redis
</code></pre></div><p>6、/app/redis 目录下修改redis.conf</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 修改redis.conf文件 </span>
/app/redis目录下修改redis.conf文件 
开启redis验证     可选 
requirepass <span class="token number">123</span> 
允许redis外地连接  必须 
注释掉 <span class="token comment"># bind 127.0.0.1 </span>

<span class="token comment"># 注释daemonize no</span>
daemonize no 
将daemonize yes注释起来或者 daemonize no设置，因为该配置和docker run中-d参数冲突，会导致容器一直启动失败

<span class="token comment"># 开启redis数据持久化</span>
appendonly <span class="token function">yes</span>  可选 
</code></pre></div><p>7、使用redis6.0.8 镜像创建容器(也叫运行镜像)</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> run  <span class="token parameter variable">-p</span> <span class="token number">6379</span>:6379 <span class="token parameter variable">--name</span> myr3 <span class="token parameter variable">--privileged</span><span class="token operator">=</span>true <span class="token parameter variable">-v</span> /app/redis/redis.conf:/etc/redis/redis.conf <span class="token parameter variable">-v</span> /app/redis/data:/data <span class="token parameter variable">-d</span> redis:6.0.8 redis-server /etc/redis/redis.conf 
</code></pre></div><p>8、测试redis-cli连接上</p><p>docker exec -it 运行着Rediis服务的容器ID redis-cli</p><p><img src="`+ba+'" alt="81"></p><p>9、请证明docker启动使用了我们自己指定的配置文件</p><p>【修改前】</p><p><img src="'+va+'" alt="82"></p><p>【修改后】</p><p><img src="'+fa+'" alt="83"></p><p>10、测试redis-cli连接上来第2次</p><p><img src="'+_a+'" alt="84"></p></blockquote>',207),qa=[ya];function Da(Sa,Oa){return s(),n("div",null,qa)}const wa=a(xa,[["render",Da],["__file","bdockerf.html.vue"]]);export{wa as default};
