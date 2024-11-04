import{_ as c,M as s,p as n,q as t,R as e,t as r,N as d,a1 as a}from"./framework-d81ad7e5.js";const i={},l=e("li",null,[e("code",null,"docker-18.06.3-ce.tgz")],-1),p={href:"https://download.docker.com/linux/static/stable/x86_64/",target:"_blank",rel:"noopener noreferrer"},u=e("li",null,"上传解压",-1),k=a(`<ul><li>将docker中的全部文件，使用下边命令，复制到<code>/usr/bin</code></li></ul><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token function">cp</span> ./docker/* /usr/bin

<span class="token comment"># 创建docker.service文件</span>
<span class="token builtin class-name">cd</span> /etc/systemd/system/
<span class="token function">touch</span> docker.service

<span class="token comment"># 内容</span>


</code></pre></div><ul><li><p>注意，将其中的ip地址，改成 自己的服务器地址，其它参数不用改。</p></li><li><p>conf</p></li></ul><div class="language-conf" data-ext="conf"><pre class="language-conf"><code>
#   将其中的ip地址，改成 自己的服务器地址，其它参数不用改。    --insecure-registry=192.168.205.230
[Unit]
Description=Docker Application Container Engine
Documentation=https://docs.docker.com
After=network-online.target firewalld.service
Wants=network-online.target
 
[Service]
Type=notify
# the default is not to use systemd for cgroups because the delegate issues still
# exists and systemd currently does not support the cgroup feature set required
# for containers run by docker
ExecStart=/usr/bin/dockerd --selinux-enabled=false --insecure-registry=192.168.205.230
ExecReload=/bin/kill -s HUP $MAINPID
# Having non-zero Limit*s causes performance problems due to accounting overhead
# in the kernel. We recommend using cgroups to do container-local accounting.
LimitNOFILE=infinity
LimitNPROC=infinity
LimitCORE=infinity
# Uncomment TasksMax if your systemd version supports it.
# Only systemd 226 and above support this version.
#TasksMax=infinity
TimeoutStartSec=0
# set delegate yes so that systemd does not reset the cgroups of docker containers
Delegate=yes
# kill only the docker process, not all processes in the cgroup
KillMode=process
# restart the docker process if it exits prematurely
Restart=on-failure
StartLimitBurst=3
StartLimitInterval=60s
 
[Install]
WantedBy=multi-user.target
</code></pre></div><h4 id="为什么要写docker-service" tabindex="-1"><a class="header-anchor" href="#为什么要写docker-service" aria-hidden="true">#</a> 为什么要写docker.service</h4><p><code>docker.service</code> 是一个 systemd 单元文件，用于管理 Docker 守护进程（Docker daemon）的启动和停止。systemd 是一个在现代 Linux 系统中广泛使用的初始化系统和服务管理器。</p><p>编写 <code>docker.service</code> 文件的目的是为了定义 Docker 守护进程的配置和行为，以便 systemd 可以管理它。这样，你就可以使用 systemd 命令来启动、停止、重启和管理 Docker 守护进程。</p><p><code>docker.service</code> 文件通常位于 <code>/etc/systemd/system/</code> 目录下，它包含了一些配置项，如 Docker 守护进程的启动参数、依赖关系、工作目录等。通过编辑 <code>docker.service</code> 文件，你可以自定义 Docker 守护进程的行为，以满足你的特定需求。</p><p>在编写 <code>docker.service</code> 文件后，你可以使用以下命令来管理 Docker 守护进程：</p><ul><li>启动 Docker 守护进程：<code>sudo systemctl start docker</code></li><li>停止 Docker 守护进程：<code>sudo systemctl stop docker</code></li><li>重启 Docker 守护进程：<code>sudo systemctl restart docker</code></li><li>查看 Docker 守护进程状态：<code>sudo systemctl status docker</code></li></ul><p>通过 systemd 管理 Docker 守护进程，可以使其在系统启动时自动启动，并提供了更方便的管理方式。</p><h4 id="启动docker" tabindex="-1"><a class="header-anchor" href="#启动docker" aria-hidden="true">#</a> 启动docker</h4><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code>chmod <span class="token operator">+</span>x <span class="token operator">/</span>etc<span class="token operator">/</span>systemd<span class="token operator">/</span>system<span class="token operator">/</span>docker<span class="token punctuation">.</span>service
systemctl daemon<span class="token operator">-</span>reload
systemctl enable docker<span class="token punctuation">.</span>service
systemctl start docker
</code></pre></div><p>逐行解释每一行代码的含义：</p><ol><li><code>chmod +x /etc/systemd/system/docker.service</code>：这条命令给 <code>/etc/systemd/system/docker.service</code> 文件添加可执行权限。这是为了确保 systemd 可以执行该文件来启动 Docker 服务。</li><li><code>systemctl daemon-reload</code>：这条命令告诉 systemd 重新加载配置文件，以便它能够识别到新的或修改过的服务单元文件。在修改了 <code>/etc/systemd/system/docker.service</code> 文件后，需要运行这个命令来使 systemd 生效。</li><li><code>systemctl enable docker.service</code>：这条命令将 Docker 服务设置为开机启动。它会在系统启动时自动启动 Docker 服务。</li><li><code>systemctl start docker</code>：这条命令启动 Docker 服务。它会立即启动 Docker 守护进程，并使其开始运行容器。</li></ol><p>通过执行这些命令，你设置了 Docker 服务的可执行权限，重新加载了 systemd 的配置，将 Docker 服务设置为开机启动，并启动了 Docker 服务。这样，你就可以开始使用 Docker 来管理和运行容器了。</p><h3 id="usr-local-bin-和-usr-bin-区别" tabindex="-1"><a class="header-anchor" href="#usr-local-bin-和-usr-bin-区别" aria-hidden="true">#</a> /usr/local/bin/ 和 /usr/bin 区别</h3><p><code>/usr/local/bin</code>和<code>/usr/bin</code>是Linux系统中存放可执行文件的两个常见目录。它们之间的区别如下：</p><ol><li><code>/usr/local/bin</code>：这个目录用于存放本地安装的软件的可执行文件。当您手动从源代码编译并安装软件时，通常会将其安装到<code>/usr/local</code>目录下。<code>/usr/local/bin</code>是<code>/usr/local</code>目录中的一个子目录，用于存放这些软件的可执行文件。这样做的好处是，它使得本地安装的软件与系统默认软件分开，避免了对系统软件的干扰。例如，如果您安装了一个自定义版本的某个软件，它的可执行文件可能会放在<code>/usr/local/bin</code>目录下。</li><li><code>/usr/bin</code>：这个目录是系统默认的可执行文件目录。大多数Linux发行版会将系统自带的软件的可执行文件放在这个目录下。当您安装新的软件包时，它的可执行文件通常会被放在<code>/usr/bin</code>目录下，以便所有用户都可以访问和使用这些软件。</li></ol><p>总结起来，<code>/usr/local/bin</code>目录用于存放本地安装的软件的可执行文件，而<code>/usr/bin</code>目录用于存放系统默认的软件的可执行文件。</p><ul><li><strong>在随便一个目录下，都可以执行以上文件夹里面的可执行文件吗？</strong></li></ul><p>不是所有目录下都可以执行<code>/usr/local/bin</code>和<code>/usr/bin</code>中的可执行文件。执行一个可执行文件的前提是该文件所在的目录在系统的<code>PATH</code>环境变量中。</p><p><code>PATH</code>环境变量是一个包含多个目录路径的列表，系统会按照列表中的顺序搜索这些目录来查找可执行文件。当您在命令行中输入一个命令时，系统会按照<code>PATH</code>环境变量中的顺序在这些目录中查找对应的可执行文件。</p><p>通常情况下，<code>/usr/local/bin</code>和<code>/usr/bin</code>都会被包含在<code>PATH</code>环境变量中，因此您可以在终端中从任意目录执行这些目录中的可执行文件。但是，如果您的<code>PATH</code>环境变量没有包含这些目录，或者被其他目录覆盖了，那么您就无法直接执行这些可执行文件。</p><p>您可以通过在终端中运行<code>echo $PATH</code>命令来查看当前的<code>PATH</code>环境变量的值。如果需要在其他目录中执行<code>/usr/local/bin</code>和<code>/usr/bin</code>中的可执行文件，可以使用完整的文件路径来运行这些文件，例如<code>/usr/local/bin/executable</code>或<code>/usr/bin/executable</code></p>`,25);function m(y,h){const o=s("ExternalLinkIcon");return n(),t("div",null,[e("ul",null,[l,e("li",null,[e("a",p,[r("https://download.docker.com/linux/static/stable/x86_64/"),d(o)])]),u]),k])}const f=c(i,[["render",m],["__file","installlocal.html.vue"]]);export{f as default};
