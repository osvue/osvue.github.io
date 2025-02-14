import{_ as a,p as s,q as n,a1 as t}from"./framework-d81ad7e5.js";const e={},i=t(`<h1 id="gitlab" tabindex="-1"><a class="header-anchor" href="#gitlab" aria-hidden="true">#</a> GitLab</h1><h4 id="离线安装使用" tabindex="-1"><a class="header-anchor" href="#离线安装使用" aria-hidden="true">#</a> 离线安装使用</h4><h3 id="下载" tabindex="-1"><a class="header-anchor" href="#下载" aria-hidden="true">#</a> 下载</h3><p><strong>下载gitlab安装包</strong></p><ul><li>从【清华大学开源软件镜像站 】下载最新中文版gitlab安装包，安装包里自带了简体中文汉化包。</li><li>ce 社区版 ee 企业版</li></ul><h3 id="安装" tabindex="-1"><a class="header-anchor" href="#安装" aria-hidden="true">#</a> 安装</h3><p><strong>安装gitlab</strong></p><ol><li>以当前最新版为例，将 下载的 <strong>rpm</strong> 文件上传到centos服务器。（注意区分CentOs 版本）<code>cat /etc/centos-release </code></li><li><strong>使用rmp安装</strong> <code>rpm -ivh gitlab-ce-xxxxx.x86_64.rpm</code></li></ol><p><strong>修改对外暴露的IP及端口</strong></p><p>编辑gitlab配置文件</p><div class="language-undefined" data-ext="undefined"><pre class="language-undefined"><code>vi /etc/gitlab/gitlab.rb
</code></pre></div><p>修改对外访问的域名或IP：</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 修改 external_url &#39;example.gitlab.com&#39; 这一句</span>
external_url <span class="token string">&#39;http://localhost:9091&#39;</span> <span class="token comment">#修改成你自己的IP或域名:端口</span>
</code></pre></div><p><strong>ps</strong>: 注意这里设置的端口不能被占用，默认是8080端口，如果8080已经使用，请自定义其它端口，并在防火墙设置开放范围内的端口。</p><p>重新加载配置</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code>gitlab-ctl reconfigure     <span class="token comment">#重新生成相关配置文件，执行此命令时间比较长</span>
</code></pre></div><ul><li>到此时，已经可以在浏览器通过设定的ip和端口进行访问了</li></ul><p>配置gitlab开机自动启动</p><div class="language-css" data-ext="css"><pre class="language-css"><code>systemctl enable gitlab-runsvdir.service
systemctl start gitlab-runsvdir.service
# 关闭gitlab的自动启动命令：systemctl disable gitlab-runsvdir.service
</code></pre></div><p>启动GitLab</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code>systemctl stop firewalld   <span class="token comment">#关掉防火墙，要不然9091端口不能对外访问</span>
gitlab-ctl restart         <span class="token comment">#重启gitlab</span>
</code></pre></div><h2 id="登录访问配置" tabindex="-1"><a class="header-anchor" href="#登录访问配置" aria-hidden="true">#</a> 登录访问配置</h2><p>用户名：root，第一次访问gitlab需要强制更改密码。</p><ol><li>先登录GitLab，登录成功后，在Gitlab后台的系统设置里配置简体中文。 <ol><li>设置路径：Setting--Preferences--Language ，将字符集修改为简体中文。</li></ol></li><li>接下来依次创建项目</li><li><strong>创建组group。</strong></li><li>创建用户，并将用户加入组里。</li></ol><div class="language-bash" data-ext="sh"><pre class="language-bash"><code>
Command line instructions

Git global setup
		<span class="token function">git</span> config <span class="token parameter variable">--global</span> user.name <span class="token string">&quot;Administrator&quot;</span>
		<span class="token function">git</span> config <span class="token parameter variable">--global</span> user.email <span class="token string">&quot;admin@example.com&quot;</span>

Create a new repository
		<span class="token function">git</span> clone http://192.168.1.60:8090/xsxc/xsxc.git
		<span class="token builtin class-name">cd</span> xsxc
		<span class="token function">touch</span> README.md
		<span class="token function">git</span> <span class="token function">add</span> README.md
		<span class="token function">git</span> commit <span class="token parameter variable">-m</span> <span class="token string">&quot;add README&quot;</span>
		<span class="token function">git</span> push <span class="token parameter variable">-u</span> origin master

Existing folder
		<span class="token builtin class-name">cd</span> existing_folder
		<span class="token function">git</span> init
		<span class="token function">git</span> remote <span class="token function">add</span> origin http://192.168.1.60:8090/xsxc/xsxc.git
		<span class="token function">git</span> <span class="token function">add</span> <span class="token builtin class-name">.</span>
		<span class="token function">git</span> commit <span class="token parameter variable">-m</span> <span class="token string">&quot;Initial commit&quot;</span>
		<span class="token function">git</span> push <span class="token parameter variable">-u</span> origin master

Existing Git repository
		<span class="token builtin class-name">cd</span> existing_repo
		<span class="token function">git</span> remote <span class="token function">add</span> origin http://192.168.1.60:8090/xsxc/xsxc.git
		<span class="token function">git</span> push <span class="token parameter variable">-u</span> origin <span class="token parameter variable">--all</span>
		<span class="token function">git</span> push <span class="token parameter variable">-u</span> origin <span class="token parameter variable">--tags</span>
</code></pre></div><ul><li>清华镜像 <code>https://mirrors.tuna.tsinghua.edu.cn/gitlab-ce/yum/el7/</code></li></ul><h3 id="注意问题" tabindex="-1"><a class="header-anchor" href="#注意问题" aria-hidden="true">#</a> 注意问题</h3><ul><li><p><strong>新装的gitlab。GitLab一些分支默认被保护，仅仅拥有master级别的用户才能提交到保护分支，而且master分支默认是保护分支，其他用户需要通过合并issue请求来提交上去</strong></p></li><li><p><strong>解决方法：<code>&quot;Settings&quot; -&gt; &quot;Repository&quot; -&gt; scroll down to &quot;Protected branches&quot;</code> 改成unprotected就好。</strong></p></li></ul>`,28),l=[i];function o(c,r){return s(),n("div",null,l)}const g=a(e,[["render",o],["__file","gitlab.html.vue"]]);export{g as default};
