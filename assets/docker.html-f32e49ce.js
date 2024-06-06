import{_ as a,p as e,q as s,a1 as n}from"./framework-d81ad7e5.js";const c={},r=n(`<h2 id="docker-镜像常用命令" tabindex="-1"><a class="header-anchor" href="#docker-镜像常用命令" aria-hidden="true">#</a> Docker 镜像常用命令</h2><h3 id="搜索镜像" tabindex="-1"><a class="header-anchor" href="#搜索镜像" aria-hidden="true">#</a> 搜索镜像</h3><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> search *image_name*
<span class="token function">docker</span> search <span class="token function">java</span>
</code></pre></div><h3 id="下载镜像" tabindex="-1"><a class="header-anchor" href="#下载镜像" aria-hidden="true">#</a> 下载镜像</h3><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> pull *image_name*

- <span class="token function">docker</span> pull java:8
- <span class="token function">docker</span> pull macro/eureka-server:0.0.1
</code></pre></div><h3 id="列出镜像" tabindex="-1"><a class="header-anchor" href="#列出镜像" aria-hidden="true">#</a> 列出镜像</h3><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> images
</code></pre></div><h3 id="删除镜像" tabindex="-1"><a class="header-anchor" href="#删除镜像" aria-hidden="true">#</a> 删除镜像</h3><div class="language-bash" data-ext="sh"><pre class="language-bash"><code>
<span class="token function">docker</span> rmi *image_name*

<span class="token function">docker</span> image <span class="token function">rm</span> *image_name*

- <span class="token function">docker</span> rmi <span class="token function">java</span>
- <span class="token function">docker</span> rmi <span class="token parameter variable">-f</span> <span class="token function">java</span> 
- <span class="token function">docker</span> rmi <span class="token parameter variable">-f</span> <span class="token variable"><span class="token variable">$(</span><span class="token function">docker</span> images<span class="token variable">)</span></span>

</code></pre></div><h3 id="导出docker镜像" tabindex="-1"><a class="header-anchor" href="#导出docker镜像" aria-hidden="true">#</a> 导出docker镜像</h3><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> save *image_name* <span class="token operator">&gt;</span> /save/image/path/name.tar.gz
</code></pre></div><h3 id="导出docker镜像-1" tabindex="-1"><a class="header-anchor" href="#导出docker镜像-1" aria-hidden="true">#</a> 导出docker镜像</h3><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> save *image_name* <span class="token operator">&gt;</span> /save/image/path/name.tar.gz
</code></pre></div><h3 id="导入docker镜像" tabindex="-1"><a class="header-anchor" href="#导入docker镜像" aria-hidden="true">#</a> 导入docker镜像</h3><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> load <span class="token operator">&lt;</span> /save/image/path/name.tar.gz
</code></pre></div><h3 id="docker镜像打标签时的注意事项" tabindex="-1"><a class="header-anchor" href="#docker镜像打标签时的注意事项" aria-hidden="true">#</a> docker镜像打标签时的注意事项</h3><div class="language-bash" data-ext="sh"><pre class="language-bash"><code>
<span class="token function">docker</span> tag bac2 gandoufu/centos7-wget:latest
<span class="token comment"># bac2 是镜像的id</span>
<span class="token comment"># gandoufu/centos7-wget 镜像的名称必须是自己的id名称/镜像名称</span>
<span class="token comment"># latest 默认版本号，可以不用加</span>
</code></pre></div><h2 id="docker-容器常用命令" tabindex="-1"><a class="header-anchor" href="#docker-容器常用命令" aria-hidden="true">#</a> Docker 容器常用命令</h2><h3 id="新建并启动容器" tabindex="-1"><a class="header-anchor" href="#新建并启动容器" aria-hidden="true">#</a> 新建并启动容器</h3><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> run <span class="token parameter variable">-d</span> <span class="token parameter variable">-p</span> <span class="token number">91</span>:80 nginx
</code></pre></div><h3 id="列出容器" tabindex="-1"><a class="header-anchor" href="#列出容器" aria-hidden="true">#</a> 列出容器</h3><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> <span class="token function">ps</span>
</code></pre></div><h3 id="停止容器" tabindex="-1"><a class="header-anchor" href="#停止容器" aria-hidden="true">#</a> 停止容器</h3><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> stop <span class="token variable">$ContainerId</span>
</code></pre></div><h3 id="强制停止容器" tabindex="-1"><a class="header-anchor" href="#强制停止容器" aria-hidden="true">#</a> 强制停止容器</h3><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> <span class="token function">kill</span> <span class="token variable">$ContainerId</span>
</code></pre></div><h3 id="启动已停止的容器" tabindex="-1"><a class="header-anchor" href="#启动已停止的容器" aria-hidden="true">#</a> 启动已停止的容器</h3><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> start <span class="token variable">$ContainerId</span>
</code></pre></div><h3 id="进入容器" tabindex="-1"><a class="header-anchor" href="#进入容器" aria-hidden="true">#</a> 进入容器</h3><div class="language-bash" data-ext="sh"><pre class="language-bash"><code>- <span class="token function">docker</span> inspect <span class="token parameter variable">--format</span> <span class="token string">&quot;{{.State.Pid}}&quot;</span> <span class="token variable">$ContainerId</span>
- nsenter <span class="token parameter variable">--target</span> <span class="token string">&quot;<span class="token variable">$pid</span>&quot;</span> <span class="token parameter variable">--mount</span> <span class="token parameter variable">--uts</span> <span class="token parameter variable">--ipc</span> <span class="token parameter variable">--net</span> <span class="token parameter variable">--pid</span>
</code></pre></div><h3 id="删除容器" tabindex="-1"><a class="header-anchor" href="#删除容器" aria-hidden="true">#</a> 删除容器</h3><div class="language-bash" data-ext="sh"><pre class="language-bash"><code>- <span class="token function">docker</span> <span class="token function">rm</span> <span class="token variable">$ContainerId</span>
- <span class="token function">docker</span> <span class="token function">rm</span> <span class="token parameter variable">-f</span> <span class="token variable"><span class="token variable">$(</span><span class="token function">docker</span> <span class="token function">ps</span> <span class="token parameter variable">-a</span> <span class="token parameter variable">-q</span><span class="token variable">)</span></span>
</code></pre></div><h3 id="查看启动错误日志" tabindex="-1"><a class="header-anchor" href="#查看启动错误日志" aria-hidden="true">#</a> 查看启动错误日志</h3><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> logs <span class="token variable">$ContainerIdName</span><span class="token punctuation">(</span>或者<span class="token variable">$ContainerId</span><span class="token punctuation">)</span>
</code></pre></div><h3 id="查看容器的ip地址-172-17-0" tabindex="-1"><a class="header-anchor" href="#查看容器的ip地址-172-17-0" aria-hidden="true">#</a> 查看容器的IP地址（172.17.0.*）</h3><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> inspect <span class="token parameter variable">--format</span> <span class="token string">&#39;{{ .NetworkSettings.IPAddress }}&#39;</span> <span class="token variable">$ContainerId</span>
</code></pre></div><h3 id="同步宿主机时间到容器" tabindex="-1"><a class="header-anchor" href="#同步宿主机时间到容器" aria-hidden="true">#</a> 同步宿主机时间到容器</h3><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> <span class="token function">cp</span> /etc/localtime <span class="token variable">$ContainerName</span>:/etc/
</code></pre></div><h3 id="在宿主机查看docker使用cpu、内存、网络、io情况" tabindex="-1"><a class="header-anchor" href="#在宿主机查看docker使用cpu、内存、网络、io情况" aria-hidden="true">#</a> 在宿主机查看docker使用cpu、内存、网络、io情况</h3><div class="language-bash" data-ext="sh"><pre class="language-bash"><code>- 查看指定容器情况：docker stats <span class="token variable">$ContainerName</span>
- 查看所有容器情况：docker stats <span class="token parameter variable">-a</span>
</code></pre></div><h3 id="进入docker内部的bash" tabindex="-1"><a class="header-anchor" href="#进入docker内部的bash" aria-hidden="true">#</a> 进入docker内部的bash</h3><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> <span class="token builtin class-name">exec</span> <span class="token parameter variable">-it</span> <span class="token variable">$ContainerName</span> /bin/bash

</code></pre></div><h3 id="docker-run" tabindex="-1"><a class="header-anchor" href="#docker-run" aria-hidden="true">#</a> docker run</h3><div class="language-text" data-ext="text"><pre class="language-text"><code>docker run [OPTIONS] IMAGE根据镜像新建并启动容器。IMAGE是镜像ID或镜像名称
OPTIONS说明：
 --name=“容器新名字”：为容器指定一个名称
 -d：后台运行容器，并返回容器ID，也即启动守护式容器
 -i：以交互模式运行容器，通常与-t同时使用
 -t：为容器重新分配一个伪输入终端，通常与-i同时使用
 -P：随机端口映射
 -p：指定端口映射，有以下四种格式：
  ip:hostPort:containerPort
  ip::containerPort
  hostPort:containerPort
  containerPort
</code></pre></div><h4 id="参数说明" tabindex="-1"><a class="header-anchor" href="#参数说明" aria-hidden="true">#</a> 参数说明：</h4><ul><li>i 进入交互模式</li><li>t 创建一个虚拟终端</li><li>d 后台运行</li><li>rm 退出后自动删除容器</li><li>name 创建的容器使用自定义的名字</li><li>注：i和t参数一起指定 <strong>（-it）</strong>，在实际操作时发现只指定i参数时，attach到实例时会出现卡死的情况。</li></ul><h3 id="常用命令" tabindex="-1"><a class="header-anchor" href="#常用命令" aria-hidden="true">#</a> 常用命令</h3><div class="language-bash" data-ext="sh"><pre class="language-bash"><code>- 构建、创建、启动相关容器：docker-compose up
- 列出所有容器：docker-compose <span class="token function">ps</span>
- 删除指定服务的容器：docker-compose <span class="token function">rm</span> eureka
- 对容器进行动态扩容：docker-compose scale <span class="token assign-left variable">eureka</span><span class="token operator">=</span><span class="token number">3</span>
- 停止相关容器：docker-compose stop eureka
- 启动相关容器：docker-compose start eureka

</code></pre></div>`,48),t=[r];function o(d,i){return e(),s("div",null,t)}const l=a(c,[["render",o],["__file","docker.html.vue"]]);export{l as default};
