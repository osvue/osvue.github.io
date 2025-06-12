import{_ as t,r as o,o as p,c,b as a,d as s,e as l,a as i}from"./app-215c512d.js";const r={},u={href:"https://hub.docker.com/",target:"_blank",rel:"noopener noreferrer"};function k(d,n){const e=o("ExternalLinkIcon");return p(),c("div",null,[a("ul",null,[a("li",null,[a("a",u,[n[0]||(n[0]=s("dockerHub")),l(e)])]),n[1]||(n[1]=a("li",null,[s("下载nginx镜像 （有网环境） 先在有网络的环境下拉取nginx镜像 "),a("code",null,"docker pull nginx:1.24.0")],-1))]),n[2]||(n[2]=i(`<h4 id="打包镜像文件到本地" tabindex="-1"><a class="header-anchor" href="#打包镜像文件到本地" aria-hidden="true">#</a> 打包镜像文件到本地</h4><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 参数说明 -o :输出到的文件</span>
<span class="token function">docker</span> save nginx:1.24.0 <span class="token parameter variable">-o</span> nginx.tar
</code></pre></div><ul><li>将nginx.tar 下载到自己本地电脑，在将nginx.tar上传到要部署的内网服务器上</li></ul><ul><li>将镜像文件导入到内网环境的服务器上 <strong>无网内网环境</strong></li></ul><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 创建目录</span>
<span class="token function">mkdir</span> <span class="token parameter variable">-p</span> /usr/local/nginx<span class="token operator">&amp;&amp;</span> <span class="token builtin class-name">cd</span> /usr/local/nginx
<span class="token comment"># 导入镜像 参数说明 --input , -i : 指定导入的文件</span>
<span class="token function">docker</span> load <span class="token parameter variable">-i</span> nginx.tar
</code></pre></div><div class="language-yaml" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">version</span><span class="token punctuation">:</span> <span class="token string">&#39;3&#39;</span>
<span class="token key atrule">services</span><span class="token punctuation">:</span>
  <span class="token key atrule">nginx</span><span class="token punctuation">:</span>
    <span class="token key atrule">restart</span><span class="token punctuation">:</span> always
    <span class="token key atrule">image</span><span class="token punctuation">:</span> nginx<span class="token punctuation">:</span>1.24.0
    <span class="token key atrule">container_name</span><span class="token punctuation">:</span> nginx
    <span class="token key atrule">ports</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> 18808<span class="token punctuation">:</span><span class="token number">18808</span>
      <span class="token punctuation">-</span> 18888<span class="token punctuation">:</span><span class="token number">18888</span>
    <span class="token key atrule">volumes</span><span class="token punctuation">:</span>
      <span class="token comment">#配置文件挂载</span>
      <span class="token punctuation">-</span> ./nginx.conf<span class="token punctuation">:</span>/etc/nginx/nginx.conf
      <span class="token comment">#日志目录挂载</span>
      <span class="token punctuation">-</span> ./logs<span class="token punctuation">:</span>/var/log/nginx
      <span class="token comment">#缓存文件</span>
      <span class="token punctuation">-</span> ./cache<span class="token punctuation">:</span>/home/data/cache  
      <span class="token comment">#HTML </span>
      <span class="token punctuation">-</span> ./html<span class="token punctuation">:</span>/etc/nginx/html


</code></pre></div><p>创建nginx容器 <code>docker run -d --name nginx -p 8880:80 nginx</code> 创建挂在目录 <code>mkdir -p /data/nginx/{conf,log,html}</code> 把Nginx容器中的文件进行复制 nginx.conf复制到主机 <code>docker cp nginx:/etc/nginx/nginx.conf /data/nginx/conf/nginx.conf</code> 将conf.d文件夹复制到主机 <code>docker cp nginx:/etc/nginx/conf.d /data/nginx/conf/conf.d</code> 把html目录复制到主机 <code>docker cp nginx:/usr/share/nginx/html /data/nginx/</code> 停止刚刚创建的nginx容器 docker stop nginx 删除刚刚创建的容器 docker rm nginx 重新创建容器</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> run <span class="token parameter variable">-d</span> <span class="token parameter variable">--name</span> nginx <span class="token parameter variable">-p</span> <span class="token number">8880</span>:80 <span class="token punctuation">\\</span>
<span class="token parameter variable">-v</span> /data/nginx/conf/nginx.conf:/etc/nginx/nginx.conf <span class="token punctuation">\\</span>
<span class="token parameter variable">-v</span> /data/nginx/conf/conf.d:/etc/nginx/conf.d <span class="token punctuation">\\</span>
<span class="token parameter variable">-v</span> /data/nginx/log:/var/log/nginx <span class="token punctuation">\\</span>
<span class="token parameter variable">-v</span> /data/nginx/html:/usr/share/nginx/html <span class="token punctuation">\\</span>
<span class="token parameter variable">--privileged</span><span class="token operator">=</span>true nginx
</code></pre></div>`,8))])}const m=t(r,[["render",k],["__file","create_images.html.vue"]]);export{m as default};
