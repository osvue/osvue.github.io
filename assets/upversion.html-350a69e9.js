import{_ as n,p as s,q as a,a1 as o}from"./framework-d81ad7e5.js";const t={},e=o(`<h2 id="nginx-版本升级" tabindex="-1"><a class="header-anchor" href="#nginx-版本升级" aria-hidden="true">#</a> nginx 版本升级</h2><h3 id="nginx平滑升级原理" tabindex="-1"><a class="header-anchor" href="#nginx平滑升级原理" aria-hidden="true">#</a> Nginx平滑升级原理</h3><ul><li>在不停掉老进程的情况下，启动新进程。</li><li>老进程负责处理仍然没有处理完的请求，但不再接受处理请求。</li><li>新进程接受新请求。</li><li>老进程处理完所有请求，关闭所有连接后，停止。</li></ul><ol><li>开始之前先查看一下当前使用的版本。</li></ol><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># /usr/local/nginx/sbin/nginx -V</span>
nginx: nginx version: nginx/1.0.5
nginx: built by gcc <span class="token number">4.1</span>.2 <span class="token number">20080704</span> <span class="token punctuation">(</span>Red Hat <span class="token number">4.1</span>.2-50<span class="token punctuation">)</span>
nginx: TLS SNI support disabled
nginx: configure arguments: <span class="token variable"><span class="token variable">\`</span><span class="token parameter variable">--user</span><span class="token operator">=</span>www <span class="token parameter variable">--group</span><span class="token operator">=</span>www <span class="token parameter variable">--prefix</span><span class="token operator">=</span>/usr/local/nginx --with-http_stub_status_module --with-http_ssl_module --with-http_flv_module --with-cc-opt<span class="token operator">=</span>-O3 --with-cpu-opt<span class="token operator">=</span>opteron --with-http_gzip_static_module<span class="token variable">\`</span></span>

</code></pre></div><p>※ 注意<code>·</code>区域，这是以前编译的参数。马上编辑新版本需要用到。</p><ol start="2"><li><strong>解压 &gt; 编译前的准备 &gt; 编译</strong></li></ol><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># tar zxvf nginx-1.0.5.tar.gz</span>
<span class="token comment"># cd nginx-1.0.5</span>
<span class="token comment"># ./configure </span>
<span class="token parameter variable">--user</span><span class="token operator">=</span>www 
<span class="token parameter variable">--group</span><span class="token operator">=</span>www 
<span class="token parameter variable">--prefix</span><span class="token operator">=</span>/usr/local/nginx 
--with-http_stub_status_module 
--with-http_ssl_module 
--with-http_flv_module 
--with-cc-opt<span class="token operator">=</span><span class="token string">&#39;-O3&#39;</span> 
--with-cpu-opt<span class="token operator">=</span>opteron 
--with-http_gzip_static_module
<span class="token comment"># make </span>
</code></pre></div><ol start="3"><li>执行完后，这里不用在 make install 了，接下来重名/sbin/nginx为nginx.old</li></ol><p><code># mv /usr/local/nginx/sbin/nginx /usr/local/nginx/sbin/nginx.old</code></p><ol start="4"><li>复制编译后objs目录下的nginx文件到nginx的安装目录sbin/下</li></ol><p><code># cp objs/nginx /usr/local/nginx/sbin/</code> 5. 测试一下新复制过来文件生效情况：</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># /usr/local/nginx/sbin/nginx -t</span>
nginx: the configuration <span class="token function">file</span> /usr/local/nginx/conf/nginx.conf syntax is ok
nginx: configuration <span class="token function">file</span> /usr/local/nginx/conf/nginx.conf <span class="token builtin class-name">test</span> is successful
</code></pre></div><ol start="6"><li>让nginx把 <strong>nginx.pid文件修改成nginx.pid.oldbin</strong>，随即启动nginx，实现不间断服务运行</li></ol><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># kill -USR2 \`cat /usr/local/nginx/nginx.pid\`(发送平滑升级信号将旧的nginx.pid文件添加后缀nginx.pid.oldbin)</span>
<span class="token comment">#kill  -WINCH(平缓停止worker process) \`cat /usr/local/nginx/nginx.pid.oldbin</span>
<span class="token comment"># kill -QUIT \`cat /usr/local/nginx/nginx.pid.oldbin\`</span>
</code></pre></div><ol start="7"><li>升级完成了，最后在看一下升级后的版本</li><li></li></ol><h3 id="nginx信号" tabindex="-1"><a class="header-anchor" href="#nginx信号" aria-hidden="true">#</a> Nginx信号</h3><ul><li><p>主进程支持的信号</p><ul><li><code>TERMI</code>，<code>NT</code>：立刻退出；</li><li><code>QUIT</code>:等待工作进程结束后再退出；</li><li><code>KILL</code>:强制终止进程；</li><li><code>HUP</code>:重新加载配置文件，使用新的配置启动工作进程，并逐步关闭旧进程；</li><li><code>USR1</code>:重新打开日志文件；</li><li><code>USR2</code>:启动新的主进程，实现热升级；</li><li><code>WINCH</code>:逐步关闭工作进程。</li></ul></li></ul><ul><li><p>工作进程支持的信号</p><ul><li><code>TERM，INT</code>：立刻退出；</li><li><code>QUIT</code>：等待请求处理结束后再退出；</li><li><code>USR1</code>：重新打开日志文。</li></ul></li></ul><p><strong>只需要到 make，千万不要 make install 。如果make install 会将原来的配置文件覆盖。</strong> Nginx版本升级 先安装配置1.17版本的Nginx（编译安装）用于测试。</p><ul><li>安装依赖环境</li></ul><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@ ~<span class="token punctuation">]</span><span class="token comment"># yum install -y gcc gcc-c++ pcre-devel openssl-devel zlib-devel</span>
</code></pre></div><ul><li>进行安装</li></ul><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@ ~<span class="token punctuation">]</span><span class="token comment"># tar zxf  nginx-1.17.7.tar.gz -C /usr/local/</span>
<span class="token punctuation">[</span>root@ ~<span class="token punctuation">]</span><span class="token comment"># cd /usr/local/nginx-1.17.7/</span>
<span class="token punctuation">[</span>root@ nginx-1.17.7<span class="token punctuation">]</span><span class="token comment"># ./configure --prefix=/usr/local/nginx --user=nginx --group=nginx --with-http_stub_status_module</span>
<span class="token punctuation">[</span>root@ nginx-1.17.7<span class="token punctuation">]</span><span class="token comment"># make &amp;&amp; make install</span>
<span class="token punctuation">[</span>root@ nginx-1.17.7<span class="token punctuation">]</span><span class="token comment"># useradd -M -s /sbin/nologin nginx</span>
</code></pre></div><ul><li>启动Nginx服务</li></ul><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@ nginx-1.17.7<span class="token punctuation">]</span><span class="token comment"># /usr/local/nginx/sbin/nginx      #启动Nginx服务</span>
<span class="token punctuation">[</span>root@ nginx-1.17.7<span class="token punctuation">]</span><span class="token comment"># netstat -lntp | grep &#39;nginx&#39;     #检测是否开启</span>
tcp        <span class="token number">0</span>      <span class="token number">0</span> <span class="token number">0.0</span>.0.0:80              <span class="token number">0.0</span>.0.0:*               LISTEN      <span class="token number">3633</span>/nginx: master
<span class="token punctuation">[</span>root@ nginx-1.17.7<span class="token punctuation">]</span><span class="token comment"># /usr/local/nginx/sbin/nginx -t   #检测Nginx的配置是否正确</span>
nginx: the configuration <span class="token function">file</span> /usr/local/nginx/conf/nginx.conf syntax is ok
nginx: configuration <span class="token function">file</span> /usr/local/nginx/conf/nginx.conf <span class="token builtin class-name">test</span> is successful
</code></pre></div><ul><li>查看Nginx版本和模块</li></ul><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@ nginx-1.17.7<span class="token punctuation">]</span><span class="token comment"># /usr/local/nginx/sbin/nginx -V</span>
nginx version: nginx/1.17.7
built by gcc <span class="token number">4.8</span>.5 <span class="token number">20150623</span> <span class="token punctuation">(</span>Red Hat <span class="token number">4.8</span>.5-39<span class="token punctuation">)</span> <span class="token punctuation">(</span>GCC<span class="token punctuation">)</span> 
configure arguments: <span class="token parameter variable">--prefix</span><span class="token operator">=</span>/usr/local/nginx <span class="token parameter variable">--user</span><span class="token operator">=</span>nginx <span class="token parameter variable">--group</span><span class="token operator">=</span>nginx --with-http_stub_status_module
</code></pre></div><h3 id="升级" tabindex="-1"><a class="header-anchor" href="#升级" aria-hidden="true">#</a> 升级</h3><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@osvue ~<span class="token punctuation">]</span><span class="token comment"># tar xzf nginx-1.18.0.tar.gz -C /usr/local/</span>
<span class="token punctuation">[</span>root@osvue ~<span class="token punctuation">]</span><span class="token comment"># cd /usr/local/nginx-1.18.0/</span>
<span class="token punctuation">[</span>root@osvue nginx-1.18.0<span class="token punctuation">]</span><span class="token comment"># ./configure --prefix=/usr/local/nginx --user=nginx --group=nginx --with-http_stub_status_module --with-http_ssl_module --with-pcre   #升级并添加相关模块</span>
</code></pre></div><ul><li><strong>进行make</strong></li></ul><p><strong>注意：这里不能进行，make install 操作，否则将会被覆盖，可能会影响线上业务。</strong></p><p><code>[root@osvue nginx-1.18.0]# make</code></p><ul><li>拷贝Nginx1.18版本的二进制文件到1.17版本</li></ul><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@osvue ~<span class="token punctuation">]</span><span class="token comment"># mv /usr/local/nginx/sbin/nginx /usr/local/nginx/sbin/nginx.bak  #先备份一份</span>
<span class="token punctuation">[</span>root@osvue ~<span class="token punctuation">]</span><span class="token comment"># cp /usr/local/nginx-1.18.0/objs/nginx /usr/local/nginx/sbin/</span>
</code></pre></div><ul><li>启动新的主进程，实现热升级</li></ul><p><strong>[root@osvue ~]# kill -USR2 <code>cat /usr/local/nginx/logs/nginx.pid</code></strong></p><ul><li>查看升级后的版本</li></ul><p><strong><code>[root@osvue ~]# /usr/local/nginx/sbin/nginx -V </code></strong></p><h2 id="总结" tabindex="-1"><a class="header-anchor" href="#总结" aria-hidden="true">#</a> 总结</h2><ul><li>Ngnix中的进程分为两类，一类是master进程（主进程），一类是worker进程（工作进程）；</li><li>Nginx默认工作在多进程模式下，即主进程（master process）启动后完成配置加载和端口绑定等动作 ；</li><li>Nginx主进程在启动完成后会进入等待状态，负责响应各类系统消息 ；</li><li>Nginx能够实现热部署：当Nginx编译安装后用了一段时间后发现当前版本有漏洞或需要新的功能时，就需要对当前Nginx版本进行版本升级，但又不能影响正常的使用，所以这时就需到对nginx的平滑升级，当然我们yum安装的Nginx也可以实现升级。</li></ul>`,41),l=[e];function i(p,c){return s(),a("div",null,l)}const u=n(t,[["render",i],["__file","upversion.html.vue"]]);export{u as default};