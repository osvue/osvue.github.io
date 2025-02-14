import{_ as a,p as n,q as s,a1 as t}from"./framework-d81ad7e5.js";const o={},e=t(`<p>Dockerfile就是一个文本文件，其中包含一个个的指令(Instruction)，用指令来说明要执行什么操作来构建镜像。将来Docker可以根据Dockerfile帮我们构建镜像。常见指令如下：</p><table><thead><tr><th>指令</th><th>说明</th><th>示例</th></tr></thead><tbody><tr><td>FROM</td><td>指定基础镜像</td><td>ENV key value</td></tr><tr><td>ENV</td><td>设置环境变量，可在后面指令使用</td><td>COPY./jre11.tar.gz /tmp</td></tr><tr><td>COPY</td><td>拷贝本地文件到镜像的指定目录</td><td></td></tr><tr><td>RUN</td><td>执行Linux的shell命令，一般是安装过程的命令</td><td>RUN tar -zxvf /tmp/jre11.tar.gz&amp;&amp; EXPORTS path=/tmp/jre11:Spath</td></tr><tr><td>EXPOSE</td><td>指定容器运行时监听的端口，是给镜像使用者看的</td><td>EXPOSE 8080</td></tr><tr><td><code>ENTRYPOINT</code></td><td><strong>镜像中应用的启动命令，容器运行时调用</strong></td><td><code>ENTRYPOINT java -jar xx.jar</code></td></tr></tbody></table><ol><li><p>FROM 功能为指定基础镜像，并且必须是<strong>第一条指令</strong>。 如果不以任何镜像为基础，那么写法为：FROM scratch。 同 时意味着接下来所写的指令将作为镜像的第一层开始</p></li><li><p>RUN 功能为运行指定的命令</p></li></ol><p>注意：多行命令不要写多个RUN，原因是Dockerfile中每一个指令都会建立一层. 多少个RUN就构建了多 少层镜像，会造成镜像的臃肿、多层，不仅仅增加了构件部署的时间，还容易出错。 RUN书写时的换行 符是\\</p><ol start="3"><li>CMD 功能为容器启动时要运行的命令</li></ol><p>注意：补充细节：这里边包括参数的一定要用双引号，就是&quot;,不能是单引号。千万不能写成单引号。 原因是参数传递后，docker解析的是一个JSON array</p><ol start="4"><li><p>RUN和CMD的区别 不要把RUN和CMD搞混了。 RUN是构件容器时就运行的命令以及提交运行结果 CMD是容器启动时执行的命 令，在构件时并不运行，构件时紧紧指定了这个命令到底是个什么样子</p></li><li><p>LABEL 功能是为镜像指定标签，为镜像写一些注释信息</p></li></ol><p>但是并不建议这样写，最好就写成一行，如太长需要换行的话则使用\\符号 如下：</p><p>注意：LABEL会继承基础镜像种的LABEL，如遇到key相同，则值覆盖</p><ol start="6"><li>EXPOSE 指定于外界交互的端口 功能为暴漏容器运行时的监听端口给外部 但是EXPOSE并不会vim 使容器访问主机的端口 如果想使得容器与主 机的端口有映射关系，必须在容器启动的时候加上 -P参数</li></ol><p>注意：如果在端口号后面加/tcp，默认为tcp协议，如果需要UDP端口需要添加/udp</p><ol start="7"><li><p>ENV 功能为设置环境变量</p></li><li><p>ADD 一个复制命令，把文件复制到镜象中。 如果把虚拟机与容器想象成两台linux服务器的话，那么这个命令就类似 于scp，只是scp需要加用户名和密码的权限验证，而ADD不用。</p></li></ol><p>注意：尽量不要把写成一个文件夹，如果是一个文件夹了，复制整个目录的内容,包括文件系统元数据</p><ol start="9"><li>WORKDIR 设置工作目录，对R<code>UN,CMD,ENTRYPOINT,COPY,ADD</code>生效。如果不存在则会创建，也可以设置多次 <code>WORKDIR：</code>工作目录，类似于cd命令 格式：</li></ol><p><code>WORKDIR /path/to/workdir</code>示例：</p><p>WORKDIR <code>/a</code> (这时工作目录为/a)</p><p>WORKDIR b (这时工作目录为<code>/a/b</code>)</p><p>WORKDIR c (这时工作目录为<code>/a/b/c</code>)</p><ol start="10"><li><p>VOLUME 用于指定持久化目录 可实现挂载功能，可以将内部文件夹挂载到外部</p></li><li><p>ENTRYPOINT 该命令与CMD类似，用于执行命令使用，还可以与CMD命令一起拼合使用</p></li></ol><p>它与CMD的区别： ​ 相同点：只能写一条，如果写多条，那么只有最后一条生效</p><p>不同点：CMD在创建容器时，在后面添加其他的CMD指令，CMD会被覆盖，但是ENTRYPOINT不会被覆盖，如果两个同时使用，CMD会变成ENTRYPOINT的参数</p><h3 id="dockerfile实例" tabindex="-1"><a class="header-anchor" href="#dockerfile实例" aria-hidden="true">#</a> dockerFile实例</h3><div class="language-docker" data-ext="docker"><pre class="language-docker"><code><span class="token comment"># 基础镜像</span>
<span class="token instruction"><span class="token keyword">FROM</span> openjdk:11.0-jre-buster</span>
<span class="token comment"># 设定时区</span>
<span class="token instruction"><span class="token keyword">ENV</span> TZ=Asia/Shanghai</span>
<span class="token instruction"><span class="token keyword">RUN</span> ln -snf /usr/share/zoneinfo/<span class="token variable">$TZ</span> /etc/localtime &amp;&amp; echo <span class="token variable">$TZ</span> &gt; /etc/timezone</span>
<span class="token comment"># 拷贝jar包</span>
<span class="token instruction"><span class="token keyword">COPY</span> docker-demo.jar /app.jar</span>
<span class="token comment"># 入口</span>
<span class="token instruction"><span class="token keyword">ENTRYPOINT</span> [<span class="token string">&quot;java&quot;</span>, <span class="token string">&quot;-jar&quot;</span>, <span class="token string">&quot;/app.jar&quot;</span>]</span>





 
<span class="token comment">#指定基础镜像</span>
<span class="token instruction"><span class="token keyword">FROM</span> ubuntu:16.04</span>
<span class="token comment">#配置环境变量，JDK的安装目录、容器内时区</span>
<span class="token instruction"><span class="token keyword">ENV</span> JAVA_DIR=/usr/local</span>
<span class="token comment"># 拷贝jdk和java项目的包</span>
<span class="token instruction"><span class="token keyword">COPY</span> ./jdk8.tar.gz <span class="token variable">$JAVA_DIR</span>/COPY ./docker-demo.jar /tmp/app.jar</span>
<span class="token comment"># 安装JDK</span>
<span class="token instruction"><span class="token keyword">RUN</span> cd <span class="token variable">$JAVA_DIR</span>  &amp;&amp; tar -xf ./jdk8.tar.gz&amp;&amp; mv ./jdk1.8.0_144 ./java8</span>
<span class="token comment">#配置环境变量</span>
<span class="token instruction"><span class="token keyword">ENV</span> JAVA_HOME=SJAVA_DIR/java8</span>
<span class="token instruction"><span class="token keyword">ENV</span> PATH=SPATH:SJAVA_HOME/bin</span>
<span class="token comment"># 入口，java项目的启动命令</span>
<span class="token instruction"><span class="token keyword">ENTRYPOINT</span> [<span class="token string">&quot;java&quot;</span>,<span class="token string">&quot;-jar&quot;</span>，<span class="token string">&quot;/app.jar&quot;</span>]</span>

</code></pre></div>`,23),p=[e];function c(r,l){return n(),s("div",null,p)}const i=a(o,[["render",c],["__file","cre_dockerfile.html.vue"]]);export{i as default};
