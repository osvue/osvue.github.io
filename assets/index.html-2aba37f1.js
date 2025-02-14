import{_ as e,p as n,q as o,a1 as a}from"./framework-d81ad7e5.js";const i={},s=a(`<h3 id="从容器中复制file出来" tabindex="-1"><a class="header-anchor" href="#从容器中复制file出来" aria-hidden="true">#</a> 从容器中复制file出来</h3><p>从 test1100aaaaaddeedd 容器中复制 nginx.conf 出来</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> run <span class="token parameter variable">--name</span> test1100aaaaaddeedd <span class="token parameter variable">-d</span> nginx  
<span class="token function">docker</span> <span class="token function">cp</span> test1100aaaaaddeedd:/etc/nginx/nginx.conf /data/
</code></pre></div><ul><li><strong>docker启动容器失败怎么查看日志</strong><ul><li><code>docker logs 容器id</code></li></ul></li><li><strong>查看所有容器，包括启动成功与失败的</strong><ul><li><code>sudo docker ps -a</code></li></ul></li><li><code>docker ps</code> 查看当前正在运行的容器</li><li><code>docker ps -a</code> 查看所有容器的状态</li><li><code>docker start/stop id/name</code> 启动/停止某个容器</li><li><code>docker attach id</code> 进入某个容器(使用exit退出后容器也跟着停止运行)</li><li><code>docker exec -ti id /bin/bash</code> 启动一个伪终端以交互式的方式进入某个容器（使用exit退出后容器不停止运行）</li><li><code>docker images</code> 查看本地镜像</li><li><code>docker rm id/name</code> 删除某个容器</li><li><code>docker rmi id/name</code> 删除某个镜像</li></ul><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> run ：创建并运行一个容器，-d 是让容器在后台运行
<span class="token parameter variable">--name</span> mysql ：给容器起个名字，必须唯一
<span class="token parameter variable">-p</span> <span class="token number">3306</span>:3306 ：设置端口映射
<span class="token parameter variable">-e</span> <span class="token assign-left variable">KEY</span><span class="token operator">=</span>VALUE ：是设置环境变量
mysql ：指定运行的镜像的名字

<span class="token comment"># 镜像名称结构：</span>
<span class="token comment"># 镜像名:版本号</span>
 Repository:TAG

</code></pre></div><ul><li><code>docker run --name test -ti ubuntu /bin/bash</code><ul><li><strong>复制ubuntu容器并且重命名为test且运行，然后以伪终端交互式方式进入容器，运行bash</strong></li></ul></li></ul><ul><li><strong>docker build -t soar/centos:7.1 .</strong> 通过当前目录下的Dockerfile创建一个名为<code>soar/centos:7.1</code>的镜像 <ul><li><strong>docker run -d -p 2222:22 --name test soar/centos:7.1</strong> 以镜像<code>soar/centos:7.1</code>创建名为test的容器，</li><li>并以后台模式运行，并做端口映射到宿主机2222端口，P参数重启容器宿主机端口会发生改变</li></ul></li></ul><h3 id="docker删除镜像-容器" tabindex="-1"><a class="header-anchor" href="#docker删除镜像-容器" aria-hidden="true">#</a> docker删除镜像/容器</h3><h4 id="docker要删除镜像-先要删除依赖它的容器" tabindex="-1"><a class="header-anchor" href="#docker要删除镜像-先要删除依赖它的容器" aria-hidden="true">#</a> docker要删除镜像，先要删除依赖它的容器</h4><ol><li>删除容器</li></ol><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> <span class="token function">ps</span> <span class="token comment">#查看正在运行的容器</span>

<span class="token function">docker</span> <span class="token function">ps</span> <span class="token parameter variable">-a</span> <span class="token comment">#查看所有容器</span>

<span class="token function">docker</span> <span class="token function">rm</span> container_id <span class="token comment">#删除容器</span>
</code></pre></div><ol start="2"><li>删除镜像</li></ol><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> images //查看镜像

<span class="token function">docker</span> rmi image_id
</code></pre></div><ol><li>查看镜像 docker images</li><li>删除nginx镜像, docker rmi repid 显示<code>&#39;image is referenced in multiple repositories&#39;</code></li><li>再看控制台中IMAGE ID为sdfsdfdsfsdf的nginx指向两个repository,所以删除失败了</li><li>这时要指定repository和tag删除 <ol><li><code>docker rmi tomcat:tGv2.0.1</code></li></ol></li><li>再次查看镜像，repository为nginx的镜像已被删除</li></ol><h3 id="虚悬镜像" tabindex="-1"><a class="header-anchor" href="#虚悬镜像" aria-hidden="true">#</a> 虚悬镜像</h3><ul><li>镜像既没有仓库名，也没有 标签，均为<code>&lt;none&gt;</code></li></ul><ul><li><p><strong><code>&lt;none&gt; &lt;none&gt;</code> 00285df0df87 5 days ago 342 MB</strong></p></li><li><p>这个镜像原本是有镜像名和标签的，原来为 <code>mongo:3.2</code> ，随着官方镜像维护，发 布了新版本后，重新 <code>docker pull mongo:3.2</code> 时， <code>mongo:3.2</code> 这个镜像名被 转移到了新下载的镜像身上，而旧的镜像上的这个名称则被取消，从而成为了none 。</p></li><li><p>除了 <code>docker pull</code> 可能导致这种情况， <code>docker build</code> 也同样可 以导致这种现象。由于新旧镜像同名，</p></li><li><p>旧镜像名称被取消，从而出现仓库名、标签 均为 的镜像。</p></li><li><p>这类无标签镜像也被称为 <strong>虚悬镜像(dangling image)</strong> ，可 以用下面的命令专门显示这类镜像： <code>docker images -f dangling=true</code> 一般来说，虚悬镜像已经失去了存在的价值，是可以随意删除的，可以用下面的命 令删除。 <code>docker rmi $(docker images -q -f dangling=true)</code></p></li></ul><ul><li>kubernetes <ul><li>pod</li><li>ApiServer</li><li>ClusterIp</li><li>NodePodIp</li><li>loadBlance</li></ul></li></ul><h2 id="常用命令" tabindex="-1"><a class="header-anchor" href="#常用命令" aria-hidden="true">#</a> 常用命令</h2><ul><li><p>镜像打包: <code>docker build -t 镜像名称 .</code></p></li><li><p>查看生成镜像：<code>docker images</code></p></li><li><p>启动镜像：<code>docker run -d -p docker宿主机端口：容器端口 镜像名称</code></p></li><li><p>查看启动容器：<code>docker ps -a</code></p></li><li><p>镜像打包：<code>docker save -o 打包名称.tar 镜像名称：镜像tag</code></p></li><li><p>导入离线镜像包：<code>docker load -i 打包名称.tar</code></p></li><li><p>删除镜像：<code>docker rmi 镜像名称/镜像id</code></p></li><li><p>进入镜像：<code>docker exec -it 容器id /bin/bash</code></p></li><li><p>镜像变更历史：<code>docker history 镜像名称</code></p></li><li><p>查看容器信息: <code>docker inspect 容器id</code></p></li></ul><h3 id="数据卷-volume" tabindex="-1"><a class="header-anchor" href="#数据卷-volume" aria-hidden="true">#</a> 数据卷（volume）</h3><ul><li>是一个虚拟目录，是容器内目录与宿主机目录之间映射的桥梁。 在执行docker run命令时，使用 -v 数据卷:容器内目录 可以完成数据卷挂载 当创建容器时，如果挂载了数据卷且数据卷不存在，会自动创建数据卷 <strong>什么是数据卷？</strong> 数据卷是一个虚拟目录，它将宿主机目录映射到容器内目录，方便我们操作容器内文件，或者方便迁移容器产生的数据 <strong>如何挂载数据卷？</strong> 在创建容器时，利用 -v 数据卷名：容器内目录完成挂载 容器创建时，如果发现挂载的数据卷不存在时，会自动创建 <strong>数据卷的常见命令有哪些？</strong> docker volume ls: 查看数据卷 docker volume rm: 删除数据卷 docker volume inspect: 查看数据卷详情 docker volume prune: 删除未使用的数据卷</li></ul><p>在执行docker run命令时，使用 -v 本地目录 : 容器内目录 可以完成本地目录挂载</p><p>本地目录<strong>必须以“/”或 &quot;./&quot; 开头</strong>，如果直接以名称开头，会被识别为数据卷而非本地目录 <code>-v mysql : /var/lib/mysql</code> 会被识别为一个数据卷叫mysql <code>-v ./mysql : /var/lib/mysql</code> 会被识别为当前目录下的mysql目录</p><ul><li>docker run: 创建并运行一个新的容器。</li><li>-d: 在后台模式下运行容器。</li><li><code>--name new_mynginx</code>: 将容器命名为 &quot;new_mynginx&quot;。</li><li><code>-p 3345:80</code>: 将主机的端口 3345 映射到容器的端口 80。这样，当你访问主机的 3345 端口时，请求将被转发到容器的 80 端口。</li><li><code>-v /data/nginx/conf/nginx.conf:/etc/nginx/nginx.conf</code>: 将主机上的 /data/nginx/conf/nginx.conf 文件挂载到容器的 /etc/nginx/nginx.conf 文件。这样，容器中的 NGINX 配置文件将使用主机上的文件。</li><li><code>-v /data/nginx/log:/var/log/nginx</code>: 将主机上的 /data/nginx/log 目录挂载到容器的 /var/log/nginx 目录。这样，容器中的 NGINX 日志文件将写入到主机上的目录。</li><li><code>-v /data/nginx/html:/usr/share/nginx/html</code>: 将主机上的 /data/nginx/html 目录挂载到容器的 /usr/share/nginx/html 目录。这样，容器中的 NGINX 网页文件将使用主机上的文件。</li></ul><h3 id="whereis-nginx" tabindex="-1"><a class="header-anchor" href="#whereis-nginx" aria-hidden="true">#</a> <code>whereis nginx</code></h3><p>显示 Nginx 在容器内的位置。</p><p><code>/usr/sbin/nginx</code>: 这是 Nginx <strong>可执行文件</strong>的路径。 <code>/usr/lib/nginx</code>: 这是 Nginx 的<strong>库文件</strong>路径。 <code>/etc/nginx</code>: 这是 Nginx 的<strong>配置</strong>文件目录。 <code>/usr/share/nginx</code>: 这是 Nginx 的<strong>共享</strong>文件目录。</p><h3 id="dockerfile" tabindex="-1"><a class="header-anchor" href="#dockerfile" aria-hidden="true">#</a> Dockerfile</h3><ul><li>dockerfile 删除镜像里面文件</li></ul><div class="language-bash" data-ext="sh"><pre class="language-bash"><code> 
FROM：指定基础镜像。
RUN：在镜像中执行命令。
COPY：将本地文件复制到镜像中。
WORKDIR：设置工作目录。
CMD：定义启动容器后要执行的命令。
删除文件的指令
在Dockerfile中，我们可以使用RUN指令来执行删除文件的命令。常见的删除文件的命令有rm、rmdir和unlink，具体使用哪个命令取决于你要删除的是文件还是目录。下面是一些常见的删除文件的命令示例：

删除文件：RUN <span class="token function">rm</span> /path/to/file
删除目录（必须是空目录）：RUN <span class="token function">rmdir</span> /path/to/directory
删除目录及其内容：RUN <span class="token function">rm</span> <span class="token parameter variable">-rf</span> /path/to/directory 
</code></pre></div><ul><li>dockerfile 时使用 COPY 拷贝文件夹</li></ul><p>ADD 命令和 COPY 命令在复制文件时行为一致 COPY/ADD 命令的源如果是文件夹，复制的是文件夹的内容而不是其本身 使用 * 匹配所有文件，如果遇到文件夹也会保持上述逻辑，即仅复制内容</p>`,33),l=[s];function d(c,r){return n(),o("div",null,l)}const p=e(i,[["render",d],["__file","index.html.vue"]]);export{p as default};
