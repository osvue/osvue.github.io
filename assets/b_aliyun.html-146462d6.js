import{_ as n,p as s,q as a,a1 as o}from"./framework-d81ad7e5.js";const e={},t=o(`<h3 id="阿里云镜像加速" tabindex="-1"><a class="header-anchor" href="#阿里云镜像加速" aria-hidden="true">#</a> 阿里云镜像加速</h3><ul><li><ol><li>安装／升级Docker客户端<br> 推荐安装1.10.0以上版本的Docker客户端，参考文档 docker-ce</li></ol></li><li><ol start="2"><li>配置镜像加速器 针对Docker客户端版本大于 1.10.0 的用户 您可以通过修改daemon配置文件/etc/docker/daemon.json来使用加速器</li></ol></li></ul><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token function">sudo</span> <span class="token function">mkdir</span> <span class="token parameter variable">-p</span> /etc/docker
<span class="token function">sudo</span> <span class="token function">tee</span> /etc/docker/daemon.json <span class="token operator">&lt;&lt;-</span><span class="token string">&#39;EOF&#39;
{
  &quot;registry-mirrors&quot;: [&quot;https://2jns9a72.mirror.aliyuncs.com&quot;]
}
EOF</span>
<span class="token function">sudo</span> systemctl daemon-reload
<span class="token function">sudo</span> systemctl restart <span class="token function">docker</span>
</code></pre></div><ul><li>CentOS</li><li>Mac</li><li>Windows</li></ul><ol><li>安装／升级Docker客户端 推荐安装1.10.0以上版本的Docker客户端，参考文档 docker-ce</li><li>配置镜像加速器 针对Docker客户端版本大于 1.10.0 的用户 您可以通过修改daemon配置文件/etc/docker/daemon.json来使用加速器</li></ol><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token function">sudo</span> <span class="token function">mkdir</span> <span class="token parameter variable">-p</span> /etc/docker
<span class="token function">sudo</span> <span class="token function">tee</span> /etc/docker/daemon.json <span class="token operator">&lt;&lt;-</span><span class="token string">&#39;EOF&#39;
{
  &quot;registry-mirrors&quot;: [&quot;https://2jns9a72.mirror.aliyuncs.com&quot;]
}
EOF</span>
<span class="token function">sudo</span> systemctl daemon-reload
<span class="token function">sudo</span> systemctl restart <span class="token function">docker</span>
</code></pre></div>`,6),c=[t];function l(r,i){return s(),a("div",null,c)}const d=n(e,[["render",l],["__file","b_aliyun.html.vue"]]);export{d as default};
