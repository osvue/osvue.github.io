import{_ as a,p as s,q as n,a1 as o}from"./framework-d81ad7e5.js";const p={},e=o(`<h5 id="https-www-postgresql-org-ftp-source" tabindex="-1"><a class="header-anchor" href="#https-www-postgresql-org-ftp-source" aria-hidden="true">#</a> <code>https://www.postgresql.org/ftp/source/</code></h5><p>创建用户组</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token comment">#创建用户</span>
<span class="token function">useradd</span> postgres
<span class="token comment">#设置密码</span>
<span class="token function">passwd</span> postgres
</code></pre></div><p>进行源码安装 以安装到 目录下为例 /usr/local/pg</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token number">1</span> 解压
tar <span class="token operator">-</span>xvf postgresql<span class="token operator">-</span><span class="token number">14.5</span><span class="token punctuation">.</span>tar<span class="token punctuation">.</span>gz <span class="token operator">-</span><span class="token constant">C</span> <span class="token operator">/</span>usr<span class="token operator">/</span>local<span class="token operator">/</span>
</code></pre></div><p>以上命令就是解压到哪个目录下，目前是解压到/usr/local/ 下</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code>##<span class="token number">2</span><span class="token punctuation">.</span>yum依赖
yum install <span class="token operator">-</span>y gcc gcc<span class="token operator">-</span>c<span class="token operator">++</span>
yum install <span class="token operator">-</span>y readline<span class="token operator">-</span>devel
yum install <span class="token operator">-</span>y zlib<span class="token operator">-</span>devel
</code></pre></div><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code>##<span class="token number">3.</span>编绎，并安装到<span class="token operator">/</span>opt<span class="token operator">/</span>postgresql目录
mkdir <span class="token operator">/</span>opt<span class="token operator">/</span>postgresql
cd <span class="token operator">/</span>opt<span class="token operator">/</span>postgresql<span class="token operator">-</span><span class="token number">14.5</span>
<span class="token punctuation">.</span><span class="token operator">/</span>configure <span class="token operator">--</span>prefix<span class="token operator">=</span><span class="token operator">/</span>opt<span class="token operator">/</span>postgresql
make
make install
</code></pre></div><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code>#<span class="token number">4.</span>准备数据目录
mkdir <span class="token operator">-</span>p <span class="token operator">/</span>usr<span class="token operator">/</span>local<span class="token operator">/</span>pg<span class="token operator">/</span>pgsqldata
chown <span class="token operator">-</span><span class="token constant">R</span> <span class="token literal-property property">postgres</span><span class="token operator">:</span>postgres <span class="token operator">/</span>usr<span class="token operator">/</span>local<span class="token operator">/</span>pg<span class="token operator">/</span>pgsqldata
</code></pre></div><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code>#<span class="token number">5.</span>切换到postgres用户
su postgres
#初始化数据库
<span class="token operator">/</span>usr<span class="token operator">/</span>local<span class="token operator">/</span>pg<span class="token operator">/</span>bin<span class="token operator">/</span>initdb <span class="token operator">-</span><span class="token constant">D</span> <span class="token operator">/</span>usr<span class="token operator">/</span>local<span class="token operator">/</span>pg<span class="token operator">/</span>pgsqldata


mkdir <span class="token operator">/</span>usr<span class="token operator">/</span>local<span class="token operator">/</span>pg<span class="token operator">/</span>pgsqldata<span class="token operator">/</span>logs

#启动
<span class="token operator">/</span>usr<span class="token operator">/</span>local<span class="token operator">/</span>pg<span class="token operator">/</span>bin<span class="token operator">/</span>pg_ctl <span class="token operator">-</span><span class="token constant">D</span> <span class="token operator">/</span>usr<span class="token operator">/</span>local<span class="token operator">/</span>pg<span class="token operator">/</span>pgsqldata <span class="token operator">-</span>l <span class="token operator">/</span>usr<span class="token operator">/</span>local<span class="token operator">/</span>pg<span class="token operator">/</span>pgsqldata<span class="token operator">/</span>logs<span class="token operator">/</span>pgsql<span class="token punctuation">.</span>log start 


<span class="token operator">/</span>usr<span class="token operator">/</span>local<span class="token operator">/</span>pg<span class="token operator">/</span>bin<span class="token operator">/</span>createdb test #创建测试库
<span class="token operator">/</span>usr<span class="token operator">/</span>local<span class="token operator">/</span>pg<span class="token operator">/</span>bin<span class="token operator">/</span>psql test #进入数据库

#<span class="token number">6.</span>修改管理员密码
<span class="token constant">ALTER</span> <span class="token constant">USER</span> postgres <span class="token constant">WITH</span> <span class="token constant">PASSWORD</span> <span class="token string">&#39;060708&#39;</span><span class="token punctuation">;</span>
</code></pre></div><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code>su  postgres  
<span class="token operator">/</span>usr<span class="token operator">/</span>local<span class="token operator">/</span>pg
<span class="token punctuation">.</span><span class="token operator">/</span>bin<span class="token operator">/</span>psql <span class="token operator">-</span>h <span class="token number">127.0</span><span class="token number">.0</span><span class="token number">.1</span> <span class="token operator">-</span>d test <span class="token operator">-</span><span class="token constant">U</span> postgres  <span class="token operator">-</span>p <span class="token number">5432</span>
</code></pre></div><p>关闭 数据库</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code>su  postgres  
<span class="token operator">/</span>usr<span class="token operator">/</span>local<span class="token operator">/</span>pg<span class="token operator">/</span>bin<span class="token operator">/</span>pg_ctl <span class="token operator">-</span><span class="token constant">D</span> <span class="token operator">/</span>usr<span class="token operator">/</span>local<span class="token operator">/</span>pg<span class="token operator">/</span>pgsqldata <span class="token operator">-</span>l <span class="token operator">/</span>usr<span class="token operator">/</span>local<span class="token operator">/</span>pg<span class="token operator">/</span>pgsqldata<span class="token operator">/</span>logs<span class="token operator">/</span>pgsql<span class="token punctuation">.</span>log stop
</code></pre></div><ul><li>开启远程访问</li></ul><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code>####修改postgresql<span class="token punctuation">.</span>conf文件，取消 listen_addresses 的注释，将参数值改为“<span class="token operator">*</span>”

####修改pg_hba<span class="token punctuation">.</span>conf文件，增加下图红框部分内容
host    all             all             <span class="token number">0.0</span><span class="token number">.0</span><span class="token number">.0</span><span class="token operator">/</span><span class="token number">0</span>            md5

####navicat
 
</code></pre></div><p>postgresql.conf 这个配置是在/usr/local/pg/pgsqldata 这个目录下 pg_hba.conf文件 这个配置是在/usr/local/pg/pgsqldata 这个目录下</p><p>创建数据库的用户，并且赋予密码</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token constant">CREATE</span> <span class="token constant">USER</span> admin  <span class="token constant">WITH</span> <span class="token constant">PASSWORD</span> <span class="token string">&#39;060708&#39;</span><span class="token punctuation">;</span>

#<span class="token number">6.</span>修改管理员密码
<span class="token constant">ALTER</span> <span class="token constant">USER</span> postgres <span class="token constant">WITH</span> <span class="token constant">PASSWORD</span> <span class="token string">&#39;060708&#39;</span><span class="token punctuation">;</span>
</code></pre></div><p>展示当前数据库的用户名密码</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token constant">SELECT</span> usename<span class="token punctuation">,</span> passwd <span class="token constant">FROM</span> pg_shadow<span class="token punctuation">;</span>
</code></pre></div><p>创建server</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token punctuation">[</span>Unit<span class="token punctuation">]</span>
Description<span class="token operator">=</span>PostgreSQL Database Server
Documentation<span class="token operator">=</span>man<span class="token operator">:</span><span class="token function">postgres</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span>

<span class="token punctuation">[</span>Service<span class="token punctuation">]</span>
ExecStart<span class="token operator">=</span><span class="token operator">/</span>usr<span class="token operator">/</span>local<span class="token operator">/</span>pg<span class="token operator">/</span>bin<span class="token operator">/</span>pg_ctl <span class="token operator">-</span><span class="token constant">D</span> <span class="token operator">/</span>usr<span class="token operator">/</span>local<span class="token operator">/</span>pg<span class="token operator">/</span>pgsqldata
ExecReload<span class="token operator">=</span><span class="token operator">/</span>bin<span class="token operator">/</span>kill <span class="token operator">-</span><span class="token constant">HUP</span> $<span class="token constant">MAINPID</span>
KillMode<span class="token operator">=</span>mixed
KillSignal<span class="token operator">=</span><span class="token constant">SIGINT</span>
TimeoutSec<span class="token operator">=</span><span class="token number">300</span>

<span class="token punctuation">[</span>Install<span class="token punctuation">]</span>
WantedBy<span class="token operator">=</span><span class="token keyword">default</span><span class="token punctuation">.</span>target
</code></pre></div><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token operator">/</span>etc<span class="token operator">/</span>systemd<span class="token operator">/</span>system<span class="token operator">/</span>

这个目录下 ，是  存放service  文件的地方
</code></pre></div><h3 id="postgresql" tabindex="-1"><a class="header-anchor" href="#postgresql" aria-hidden="true">#</a> postgreSql</h3><h3 id="加载镜像" tabindex="-1"><a class="header-anchor" href="#加载镜像" aria-hidden="true">#</a> 加载镜像</h3><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> load <span class="token parameter variable">-i</span> postgresql.tar
</code></pre></div><ul><li>在宿主机找一个地方，存放数据库的数据</li></ul><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> load <span class="token parameter variable">-i</span> postgresql.tar
</code></pre></div><div class="language-yaml" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">version</span><span class="token punctuation">:</span> <span class="token string">&#39;3&#39;</span>
<span class="token key atrule">services</span><span class="token punctuation">:</span>
  <span class="token key atrule">db</span><span class="token punctuation">:</span>
    <span class="token key atrule">image</span><span class="token punctuation">:</span> kartoza/postgis<span class="token punctuation">:</span>11.0<span class="token punctuation">-</span><span class="token number">2.5</span>
    <span class="token key atrule">container_name</span><span class="token punctuation">:</span> pgadmin
    <span class="token key atrule">restart</span><span class="token punctuation">:</span> always
    <span class="token key atrule">ports</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> <span class="token string">&quot;15432:5432&quot;</span>
    <span class="token key atrule">volumes</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> /home/softinstall/docker/pg/data<span class="token punctuation">:</span>/var/lib/postgresql/data
    <span class="token key atrule">environment</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> TZ=Asia/Shanghai
      <span class="token punctuation">-</span> POSTGRES_PASSWORD=123456
      <span class="token punctuation">-</span> POSTGRES_USER=your_username


</code></pre></div><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 在这个pg.yml  文件夹下，执行下面就启动了</span>
<span class="token function">docker-compose</span> <span class="token parameter variable">-f</span> pg.yml up <span class="token parameter variable">-d</span>

<span class="token comment"># 查看日志</span>
<span class="token function">docker</span> logs <span class="token parameter variable">-f</span> pgadmin



<span class="token comment"># 关闭容器</span>
<span class="token function">docker-compose</span> <span class="token parameter variable">-f</span> pg.yml down

<span class="token comment"># 如果第一次启动失败，要修改完配置文件之后，关闭之后重新启动</span>
<span class="token comment"># 先执行</span>
<span class="token function">docker-compose</span> <span class="token parameter variable">-f</span> pg.yml down
<span class="token comment"># 后执行</span>
<span class="token function">docker-compose</span> <span class="token parameter variable">-f</span> pg.yml up <span class="token parameter variable">-d</span>
</code></pre></div><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span>  <span class="token builtin class-name">exec</span> <span class="token parameter variable">-it</span> 容器id    /bin/bash


<span class="token function">docker</span> <span class="token builtin class-name">exec</span> <span class="token parameter variable">-it</span> pgadmin psql <span class="token parameter variable">-U</span> root <span class="token parameter variable">-d</span> postgres


</code></pre></div><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token number">1</span>  是否安装docker 
<span class="token number">2</span>  是否安装docker-compose
<span class="token number">3</span>  docker默认镜像存放地址在/var/lib/docker 目录下，查看此目录下是否有足够的空间
		<span class="token function">df</span> <span class="token parameter variable">-h</span> 目录名   查看所在目录 挂载目录及使用情况
<span class="token number">4</span>  查看机器，生成数据的存储空间
		dh <span class="token parameter variable">-h</span> 
<span class="token number">5</span>  检查是否系统是否为x86系统内核，（ 部署包内的 java8镜像，smb软件 只支持x86系统）
		<span class="token function">uname</span> <span class="token parameter variable">-a</span>		

</code></pre></div><h3 id="相关知识点" tabindex="-1"><a class="header-anchor" href="#相关知识点" aria-hidden="true">#</a> 相关知识点</h3><h4 id="_2-1-docker默认镜像存放地址" tabindex="-1"><a class="header-anchor" href="#_2-1-docker默认镜像存放地址" aria-hidden="true">#</a> 2.1 docker默认镜像存放地址</h4><p>在Linux系统上，Docker默认将镜像存储在<code>/var/lib/docker</code>目录下。这个目录包含了Docker的运行时数据，包括镜像、容器、卷等。</p><p>在<code>/var/lib/docker</code>目录下，镜像的具体存放位置如下：</p><ul><li>镜像层（Image Layers）：<code>/var/lib/docker/image/overlay2</code>目录下存放了镜像的各个层。</li><li>镜像元数据（Image Metadata）：<code>/var/lib/docker/image/overlay2/repositories.json</code>文件包含了镜像的元数据信息，如镜像的名称、标签等。</li></ul><p>请注意，<code>/var/lib/docker</code>目录下的文件和目录属于Docker的运行时数据，对其进行修改或删除可能会导致Docker的不稳定或数据丢失。如果你需要备份或迁移Docker的镜像数据，建议使用Docker提供的相关命令或工具来操作。</p><p>此外，值得一提的是，Docker的存储驱动可以根据不同的配置进行更改，因此实际的镜像存放位置可能会因配置而异。但对于大多数默认安装的Docker环境来说，<code>/var/lib/docker</code>是默认的镜像存放地址。</p><h4 id="_2-2-docker-的镜像都是tar-包" tabindex="-1"><a class="header-anchor" href="#_2-2-docker-的镜像都是tar-包" aria-hidden="true">#</a> 2.2 docker 的镜像都是tar 包？</h4><p>是的，Docker的镜像实际上是以tar包的形式存储的。每个Docker镜像都由多个层（layers）组成，这些层以文件系统的形式存储在Docke 上。</p><p>每个镜像层都是一个只读的文件系统，它包含了文件和目录的快照。当你使用Docker构建镜像时，每一条指令都会创建一个新的镜像层。这种分层的结构使得镜像的构建和共享变得高效，因为多个镜像可以共享相同的层。</p><p>当你从Docker Hub或其他 拉取镜像时，实际上是将这些镜像层以tar包的形式下载到本地。这些tar包会被Docker存储在宿主机的文件系统中，供后续的容器创建和运行使用。</p><p>你可以使用<code>docker save</code>命令将镜像保存为tar包，使用<code>docker load</code>命令将tar包加载为镜像。这些命令可以让你在不同的Docker环境之间备份、迁移和共享镜像。</p><p>总结起来，Docker镜像实际上是由多个层组成的，以tar包的形式存储在宿主机上。这种分层结构和使用tar包的方式使得Docker镜像的构建、共享和管理变得更加灵活和高效。</p><h4 id="_2-3-docker-compose-是直接使用镜像创建容器" tabindex="-1"><a class="header-anchor" href="#_2-3-docker-compose-是直接使用镜像创建容器" aria-hidden="true">#</a> 2.3 Docker-compose 是直接使用镜像创建容器？</h4><p>是的，Docker Compose是一个用于定义和运行多容器Docker应用程序的工具。使用Docker Compose，你可以使用一个单独的YAML文件来定义多个容器、它们之间的关联关系以及其他配置选项。然后，通过运行<code>docker-compose up</code>命令，Docker Compose将根据定义的配置创建并启动所有的容器。</p><p>在Docker Compose配置文件中，你可以指定要使用的镜像名称、容器的名称、端口映射、环境变量、卷挂载等等。当你运行<code>docker-compose up</code>命令时，Docker Compose会自动下载所需的镜像（如果本地不存在）并创建相应的容器。</p><p>下面是一个简单的Docker Compose配置文件示例，用于创建一个包含 PostgreSQL 和Redis两个容器的应用程序：</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token literal-property property">version</span><span class="token operator">:</span> <span class="token string">&#39;3&#39;</span>
<span class="token literal-property property">services</span><span class="token operator">:</span>
  <span class="token literal-property property">db</span><span class="token operator">:</span>
    <span class="token literal-property property">image</span><span class="token operator">:</span> postgres
    <span class="token literal-property property">environment</span><span class="token operator">:</span>
      <span class="token constant">POSTGRES_PASSWORD</span><span class="token operator">:</span> mysecretpassword
  <span class="token literal-property property">redis</span><span class="token operator">:</span>
    <span class="token literal-property property">image</span><span class="token operator">:</span> redis
</code></pre></div><p>在这个示例中，我们定义了两个服务（即容器）：<code>db</code>和<code>redis</code>。<code>db</code>服务使用了<code>postgres</code>镜像，并设置了PostgreSQL的密码为<code>mysecretpassword</code>。<code>redis</code>服务使用了<code>redis</code>镜像。</p><p>要运行这个配置文件，你可以在包含该文件的目录中打开终端或命令提示符，并运行以下命令：</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code>docker<span class="token operator">-</span>compose up
</code></pre></div><p>Docker Compose将会根据配置文件创建并启动<code>db</code>和<code>redis</code>两个容器。你可以通过<code>docker-compose ps</code>命令来查看容器的状态。</p><p>总结来说，Docker Compose是通过配置文件来创建和管理多个容器的工具，它简化了多容器应用程序的部署和管理过程。</p><h4 id="_2-4-docker-compose-down-就是将容器删除" tabindex="-1"><a class="header-anchor" href="#_2-4-docker-compose-down-就是将容器删除" aria-hidden="true">#</a> 2.4 Docker Compose down 就是将容器删除？</h4><p>是的，<code>docker-compose down</code>命令用于停止并删除由Docker Compose启动的容器。当你运行<code>docker-compose down</code>命令时，Docker Compose将会停止并删除在配置文件中定义的所有服务（容器），同时还会删除相关的网络和卷（如果有定义）。这个命令可以用来清理整个应用程序的运行环境。</p><p>需要注意的是，<code>docker-compose down</code>命令会删除容器及其相关资源，包括数据卷中的数据。如果你希望保留数据，可以使用<code>docker-compose stop</code>命令来停止容器，而不是使用<code>docker-compose down</code>命令。</p><p>确保在运行<code>docker-compose down</code>命令之前，你已经进入到包含<code>docker-compose.yml</code>文件的目录，并且已经安装并正确配置了Docker Compose。</p><h4 id="_2-5-删除-会删除挂载嘛" tabindex="-1"><a class="header-anchor" href="#_2-5-删除-会删除挂载嘛" aria-hidden="true">#</a> 2.5 删除，会删除挂载嘛</h4><p>是的，当你使用<code>docker-compose down</code>命令删除容器时，它会删除与容器相关联的挂载卷（如果有定义）。挂载卷是将容器内的路径与宿主机上的路径进行关联，以便在容器重启或删除后保留数据。</p><p>如果你希望保留挂载卷中的数据，可以使用<code>docker-compose down -v</code>命令。这个命令会在删除容器的同时，也删除挂载卷。如果你想要保留挂载卷中的数据，可以备份或迁移挂载卷的数据到其他位置，然后再运行<code>docker-compose down -v</code>命令来删除容器和挂载卷。</p><p>需要注意的是，删除挂载卷会永久删除其中的数据，因此在执行删除操作之前，请确保备份了重要的数据。</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code>yml  里面写了    volumes<span class="token operator">:</span>
      <span class="token operator">-</span> <span class="token operator">/</span>home<span class="token operator">/</span>docker<span class="token operator">/</span>nginx<span class="token operator">/</span>data<span class="token operator">:</span><span class="token operator">/</span>web<span class="token operator">/</span>   之后down  之后，宿主机里面的数据会删除嘛
</code></pre></div><p>如果你在<code>docker-compose.yml</code>文件中使用了以下的挂载卷定义：</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token literal-property property">volumes</span><span class="token operator">:</span>
  <span class="token operator">-</span> <span class="token operator">/</span>home<span class="token operator">/</span>docker<span class="token operator">/</span>nginx<span class="token operator">/</span>data<span class="token operator">:</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">web</span><span class="token regex-delimiter">/</span></span>
</code></pre></div><p>然后执行<code>docker-compose down</code>命令来删除容器，那么默认情况下，这个挂载卷<code>/home/docker/nginx/data</code>上的数据将会被保留在宿主机上。</p><p><code>docker-compose down</code>命令默认会删除容器实例，但不会删除挂载卷。只有在使用<code>docker-compose down -v</code>命令时，才会删除与容器关联的挂载卷。</p><p>因此，如果你只执行了<code>docker-compose down</code>命令，宿主机上的数据将会保留在<code>/home/docker/nginx/data</code>目录中。如果你想要删除挂载卷以及宿主机上的数据，可以使用<code>docker-compose down -v</code>命令。在执行删除操作之前，请确保备份了重要的数据。</p><h4 id="_2-6-dockerfile-和-docker-compose-区别" tabindex="-1"><a class="header-anchor" href="#_2-6-dockerfile-和-docker-compose-区别" aria-hidden="true">#</a> 2.6 DockerFile 和 docker compose 区别</h4><p>Dockerfile 和 Docker Compose 是 Docker 中两个不同的概念和工具，它们用于不同的目的。</p><p><strong>Dockerfile</strong> 是一个文本文件，用于定义和构建 Docker 镜像。它包含了一系列的指令，用于描述如何构建一个 Docker 镜像的步骤，包括基础镜像选择、安装软件包、复制文件、设置环境变量等。通过 Dockerfile，你可以自定义和管理你的镜像构建过程，以满足你的应用程序的需求。</p><p><strong>Docker Compose</strong> 是一个工具，用于定义和管理多个 Docker 容器的应用程序。它使用一个 YAML 文件（通常称为 docker-compose.yml）来描述应用程序的不同服务、网络设置、卷挂载等配置。通过 Docker Compose，你可以定义一个多容器的应用程序，并使用一个命令来启动、停止、重启整个应用程序。它简化了多容器应用程序的部署和管理。</p><p>总结一下：</p><ul><li>Dockerfile 用于构建 Docker 镜像，描述了如何构建一个镜像的步骤。</li><li>Docker Compose 用于定义和管理多个 Docker 容器的应用程序，描述了应用程序的不同服务和配置。</li></ul><p>在实际使用中，你可以使用 Dockerfile 构建一个镜像，然后使用 Docker Compose 来定义和管理多个使用这个镜像的容器。这样可以方便地管理容器之间的关系、网络设置等，并实现整个应用程序的部署和管理。</p><h3 id="_3-部署nginx" tabindex="-1"><a class="header-anchor" href="#_3-部署nginx" aria-hidden="true">#</a> 3 部署nginx</h3><p>将nginx 的 tar 包上传到服务器</p><p>输入docker images,发现目前是没有镜像的，现在将tar 包变成镜像</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code>docker load <span class="token operator">-</span>i   nginx<span class="token punctuation">.</span>tar
</code></pre></div><p>以上就将tar 包变成镜像了</p><p>因为需要容器里面目录和宿主机目录要一一挂载，容器卷，所以我们在宿主机上面创建要和容器一一对应的目录</p><p>以上是ngixn 的目录，以后修改这个宿主机目录下的东西，nginx 容器里面就会修改。 这个conf 目录文件夹下，有一个nginx 配置</p><p>这个就是ngixn 的配置文件，以后我们就是修改这个配置文件</p><p>因为我们要使用 Docker-compose 去管理容器，所以要使用Docker-compose 的东西；</p><p>需要找一个位置，专门放各个yml 文件</p><p>现在有一个关于nginx 的yml 编排文件，就是使用他去管理</p><p>里面内容是：</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token literal-property property">version</span><span class="token operator">:</span> <span class="token string">&quot;2&quot;</span>
<span class="token literal-property property">services</span><span class="token operator">:</span>
  <span class="token literal-property property">nginx</span><span class="token operator">:</span>
    <span class="token literal-property property">image</span><span class="token operator">:</span> nginx
    <span class="token literal-property property">hostname</span><span class="token operator">:</span> nginx
    <span class="token literal-property property">container_name</span><span class="token operator">:</span> nginx
    <span class="token literal-property property">ports</span><span class="token operator">:</span>
      <span class="token operator">-</span> <span class="token string">&quot;18080:8080&quot;</span>
      <span class="token operator">-</span> <span class="token string">&quot;18082:8081&quot;</span>
      <span class="token operator">-</span> <span class="token string">&quot;18088:8087&quot;</span>
    <span class="token literal-property property">volumes</span><span class="token operator">:</span>
      <span class="token operator">-</span> <span class="token operator">/</span>home<span class="token operator">/</span>docker<span class="token operator">/</span>nginx<span class="token operator">/</span>data<span class="token operator">:</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">web</span><span class="token regex-delimiter">/</span></span>
      <span class="token operator">-</span> <span class="token operator">/</span>home<span class="token operator">/</span>docker<span class="token operator">/</span>nginx<span class="token operator">/</span>html<span class="token operator">:</span><span class="token operator">/</span>usr<span class="token operator">/</span>share<span class="token operator">/</span>nginx<span class="token operator">/</span>html
      <span class="token operator">-</span> <span class="token operator">/</span>home<span class="token operator">/</span>docker<span class="token operator">/</span>nginx<span class="token operator">/</span>conf<span class="token operator">/</span>nginx<span class="token punctuation">.</span>conf<span class="token operator">:</span><span class="token operator">/</span>etc<span class="token operator">/</span>nginx<span class="token operator">/</span>nginx<span class="token punctuation">.</span>conf
      <span class="token operator">-</span> <span class="token operator">/</span>home<span class="token operator">/</span>docker<span class="token operator">/</span>nginx<span class="token operator">/</span>logs<span class="token operator">:</span><span class="token operator">/</span><span class="token keyword">var</span><span class="token operator">/</span>log<span class="token operator">/</span>nginx
      <span class="token operator">-</span> <span class="token operator">/</span>home<span class="token operator">/</span>metefont<span class="token operator">/</span>hongt<span class="token operator">-</span>data<span class="token operator">-</span>center<span class="token operator">/</span>hkdata<span class="token operator">:</span><span class="token operator">/</span><span class="token constant">HKONG</span><span class="token operator">/</span>hkdata
      <span class="token operator">-</span> <span class="token operator">/</span>home<span class="token operator">/</span>metefont<span class="token operator">/</span>mapdata<span class="token operator">:</span><span class="token operator">/</span>home<span class="token operator">/</span>metefont<span class="token operator">/</span>mapdata
    <span class="token literal-property property">environment</span><span class="token operator">:</span>
      <span class="token operator">-</span> <span class="token constant">TZ</span><span class="token operator">=</span>Asia<span class="token operator">/</span>Shanghai
</code></pre></div><p>这个文件是一个Docker Compose的配置文件，用于创建和管理一个Nginx容器。</p><p>解释每一行代码的意思：</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token literal-property property">version</span><span class="token operator">:</span> <span class="token string">&quot;2&quot;</span>
</code></pre></div><p>这是Docker Compose配置文件的版本号。在这个示例中，使用的是版本号为2的配置文件格式。</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token literal-property property">version</span><span class="token operator">:</span> <span class="token string">&quot;2&quot;</span>
<span class="token literal-property property">services</span><span class="token operator">:</span>
  <span class="token literal-property property">nginx</span><span class="token operator">:</span>
    <span class="token literal-property property">image</span><span class="token operator">:</span> nginx
    <span class="token literal-property property">hostname</span><span class="token operator">:</span> nginx
    <span class="token literal-property property">container_name</span><span class="token operator">:</span> nginx
    <span class="token literal-property property">ports</span><span class="token operator">:</span>
      <span class="token operator">-</span> <span class="token string">&quot;18080:8080&quot;</span>
      <span class="token operator">-</span> <span class="token string">&quot;18082:8081&quot;</span>
      <span class="token operator">-</span> <span class="token string">&quot;18088:8087&quot;</span>
    <span class="token literal-property property">volumes</span><span class="token operator">:</span>
      <span class="token operator">-</span> <span class="token operator">/</span>home<span class="token operator">/</span>softinstall<span class="token operator">/</span>docker<span class="token operator">/</span>nginx<span class="token operator">/</span>data<span class="token operator">:</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">web</span><span class="token regex-delimiter">/</span></span>
      <span class="token operator">-</span> <span class="token operator">/</span>home<span class="token operator">/</span>softinstall<span class="token operator">/</span>docker<span class="token operator">/</span>nginx<span class="token operator">/</span>html<span class="token operator">:</span><span class="token operator">/</span>usr<span class="token operator">/</span>share<span class="token operator">/</span>nginx<span class="token operator">/</span>html
      <span class="token operator">-</span> <span class="token operator">/</span>home<span class="token operator">/</span>softinstall<span class="token operator">/</span>docker<span class="token operator">/</span>nginx<span class="token operator">/</span>conf<span class="token operator">/</span>nginx<span class="token punctuation">.</span>conf<span class="token operator">:</span><span class="token operator">/</span>etc<span class="token operator">/</span>nginx<span class="token operator">/</span>nginx<span class="token punctuation">.</span>conf
      <span class="token operator">-</span> <span class="token operator">/</span>home<span class="token operator">/</span>softinstall<span class="token operator">/</span>docker<span class="token operator">/</span>nginx<span class="token operator">/</span>logs<span class="token operator">:</span><span class="token operator">/</span><span class="token keyword">var</span><span class="token operator">/</span>log<span class="token operator">/</span>nginx
      <span class="token operator">-</span> <span class="token operator">/</span>home<span class="token operator">/</span>metefont<span class="token operator">/</span>hongt<span class="token operator">-</span>data<span class="token operator">-</span>center<span class="token operator">/</span>hkdata<span class="token operator">:</span><span class="token operator">/</span><span class="token constant">HKONG</span><span class="token operator">/</span>hkdata
      <span class="token operator">-</span> <span class="token operator">/</span>home<span class="token operator">/</span>metefont<span class="token operator">/</span>mapdata<span class="token operator">:</span><span class="token operator">/</span>home<span class="token operator">/</span>metefont<span class="token operator">/</span>mapdata
    <span class="token literal-property property">environment</span><span class="token operator">:</span>
      <span class="token operator">-</span> <span class="token constant">TZ</span><span class="token operator">=</span>Asia<span class="token operator">/</span>Shanghai
</code></pre></div><p>这部分定义了一个名为<code>nginx</code>的服务（即Nginx容器）。以下是每个配置项的含义：</p><ul><li><code>image: nginx</code>：指定使用的镜像为<code>nginx</code>，这将从Docker Hub上下载Nginx镜像。</li><li><code>hostname: nginx</code>：设置容器的主机名为<code>nginx</code>。</li><li><code>container_name: nginx</code>：指定容器的名称为<code>nginx</code>。</li><li><code>ports</code>：定义端口映射，将主机的端口与容器的端口进行绑定。在这个示例中，将主机的18080端口映射到容器的8080端口，将主机的18082端口映射到容器的8081端口，将主机的18088端口映射到容器的8087端口。</li><li><code>volumes</code>：定义卷挂载，将主机的目录与容器的目录进行映射。在这个示例中，将主机的<code>/home/docker/nginx/data</code>目录映射到容器的<code>/web/</code>目录，将主机的<code>/home/docker/nginx/html</code>目录映射到容器的<code>/usr/share/nginx/html</code>目录，将主机的<code>/home/docker/nginx/conf/nginx.conf</code>文件映射到容器的<code>/etc/nginx/nginx.conf</code>文件，将主机的<code>/home/docker/nginx/logs</code>目录映射到容器的<code>/var/log/nginx</code>目录，将主机的<code>/home/metefont/hongt-data-center/hkdata</code>目录映射到容器的<code>/HKONG/hkdata</code>目录，将主机的<code>/home/metefont/mapdata</code>目录映射到容器的<code>/home/metefont/mapdata</code>目录。</li><li><code>environment</code>：设置环境变量。在这个示例中，设置时区为<code>Asia/Shanghai</code>。</li></ul><p>这个配置文件的作用是创建一个名为<code>nginx</code>的Nginx容器，并指定了端口映射、卷挂载和环境变量等配置。通过运行<code>docker-compose up</code>命令，Docker Compose将会根据这个配置文件创建并启动该容器。</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code>在这个nginx<span class="token punctuation">.</span>yml  文件夹下，执行下面就启动了
docker<span class="token operator">-</span>compose <span class="token operator">-</span>f nginx<span class="token punctuation">.</span>yml up <span class="token operator">-</span>d

查看日志
docker logs <span class="token operator">-</span>f nginx

确保nginx<span class="token punctuation">.</span>conf   没问题，才可以启动成功

关闭容器
docker<span class="token operator">-</span>compose <span class="token operator">-</span>f nginx<span class="token punctuation">.</span>yml down

如果第一次启动失败，要修改完配置文件之后，关闭之后重新启动
先执行
docker<span class="token operator">-</span>compose <span class="token operator">-</span>f nginx<span class="token punctuation">.</span>yml down
后执行
docker<span class="token operator">-</span>compose <span class="token operator">-</span>f nginx<span class="token punctuation">.</span>yml up <span class="token operator">-</span>d
</code></pre></div><p>进入容器内部：</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code>docker  exec <span class="token operator">-</span>it 容器id    <span class="token operator">/</span>bin<span class="token operator">/</span>bash
</code></pre></div><p>放一个图片，浏览器访问</p>`,101),t=[e];function r(c,l){return s(),n("div",null,t)}const d=a(p,[["render",r],["__file","docker_postgre.html.vue"]]);export{d as default};
