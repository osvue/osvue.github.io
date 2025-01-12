import{_ as n,p as s,q as a,a1 as e}from"./framework-d81ad7e5.js";const c={},o=e(`<h3 id="k8s" tabindex="-1"><a class="header-anchor" href="#k8s" aria-hidden="true">#</a> k8s</h3><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 查看集群信息</span>
kubectl  cluster-info

<span class="token comment"># 查看 node</span>
kubectl get nodes   




</code></pre></div><ul><li>pod log</li></ul><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># nginx 镜像</span>

<span class="token comment"># 交互进入</span>
<span class="token function">docker</span> <span class="token builtin class-name">exec</span> <span class="token parameter variable">-it</span> <span class="token variable">\${containerId}</span>  /bin/bash  

nginx的相关配置信息
root@hongpon316:~<span class="token comment"># docker ps </span>
CONTAINER ID   IMAGE           COMMAND                  CREATED         STATUS         PORTS                                       NAMES
927c9bcbc0f5   nginx:latest    <span class="token string">&quot;/docker-entrypoint.…&quot;</span>   <span class="token number">8</span> minutes ago   Up <span class="token number">8</span> minutes   <span class="token number">0.0</span>.0.0:3340-<span class="token operator">&gt;</span><span class="token number">80</span>/tcp, :::3340-<span class="token operator">&gt;</span><span class="token number">80</span>/tcp       mynginx_01
d61fa338ef1f   tomcat:latest   <span class="token string">&quot;catalina.sh run&quot;</span>        <span class="token number">2</span> hours ago     Up <span class="token number">2</span> hours     <span class="token number">0.0</span>.0.0:8080-<span class="token operator">&gt;</span><span class="token number">8080</span>/tcp, :::8080-<span class="token operator">&gt;</span><span class="token number">8080</span>/tcp   mytomcat_01
root@hongpon316:~<span class="token comment"># docker exec -it mynginx_01 /bin/bash</span>
root@927c9bcbc0f5:/<span class="token comment"># ls</span>
bin   dev		   docker-entrypoint.sh  home  lib64  mnt  proc  run   srv  tmp  var
boot  docker-entrypoint.d  etc			 lib   media  opt  root  sbin  sys  usr
</code></pre></div><p><code>docker exec:</code> 这是 Docker 命令，用于在运行的容器中执行命令。 <code>-it:</code> 这是两个选项的组合，分别为 -i 和 -t。-i 选项表示要开启一个交互式会话，而 -t 选项表示要分配一个伪终端（pseudo-TTY）。这样，你可以与容器的 shell 进行交互。 <code>mynginx_01:</code> 这是容器的名称或容器的 ID。在这种情况下，它是 mynginx_01。 <code>/bin/bash:</code> 这是要在容器中执行的命令。在这里，我们使用 /bin/bash 来启动一个 Bash shell。</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code>root@927c9bcbc0f5:/<span class="token comment"># whereis nginx</span>
nginx: /usr/sbin/nginx /usr/lib/nginx /etc/nginx /usr/share/nginx
root@927c9bcbc0f5:/<span class="token comment"># cd /etc/nginx</span>
root@927c9bcbc0f5:/etc/nginx<span class="token comment"># ls</span>
conf.d	fastcgi_params	mime.types  modules  nginx.conf  scgi_params  uwsgi_params
root@927c9bcbc0f5:/etc/nginx<span class="token comment"># </span>
</code></pre></div><p><code>whereis nginx </code> 显示 Nginx 在容器内的位置。</p><ul><li><code>/usr/sbin/nginx</code>: 这是 Nginx 可执行文件的路径。</li><li><code>/usr/lib/nginx</code>: 这是 Nginx 的库文件路径。</li><li><code>/etc/nginx</code>: 这是 Nginx 的配置文件目录。</li><li><code>/usr/share/nginx</code>: 这是 Nginx 的共享文件目录。</li></ul><p><code>cd /etc/nginx</code> conf.d: 这是 Nginx 配置文件的子目录，通常用于存储虚拟主机配置等。 fastcgi_params: 这是 FastCGI 参数文件。 mime.types: 这是 MIME 类型映射文件。 modules: 这是 Nginx 模块目录，其中包含 Nginx 所需的模块文件。 nginx.conf: 这是 Nginx 的主配置文件。 scgi_params: 这是 SCGI 参数文件。 uwsgi_params: 这是 uWSGI 参数文件</p>`,9),t=[o];function p(i,r){return s(),a("div",null,t)}const d=n(c,[["render",p],["__file","k8s_ma.html.vue"]]);export{d as default};
