import{_ as n,p as a,q as s,a1 as e}from"./framework-d81ad7e5.js";const t="/assets/20200103154530929-124a6a57.png",p="/assets/image-20200103154711795-05538b0f.png",o="/assets/image-20200103154652173-ef1073ad.png",c={},i=e('<h2 id="nginx和tengine" tabindex="-1"><a class="header-anchor" href="#nginx和tengine" aria-hidden="true">#</a> Nginx和Tengine</h2><h3 id="nginx" tabindex="-1"><a class="header-anchor" href="#nginx" aria-hidden="true">#</a> Nginx</h3><p>Nginx (&quot;engine x&quot;) 是一个高性能的 <strong>HTTP</strong> 和 <strong>反向代理</strong> 服务器，也是一个 IMAP/POP3/SMTP 代理服务器。</p><p>•第一个公开版本0.1.0发布于2004年10月4日。</p><p>其将源代码以类BSD许可证的形式发布，因它的稳定性、丰富的功能集、示例配置文件和低系统资源的消耗而闻名</p><p>官方测试nginx能够支撑5万并发链接，并且cpu、内存等资源消耗却非常低，运行非常稳定</p><p>2011年6月1日，nginx 1.0.4发布。</p><p>Nginx是一款轻量级的Web 服务器/反向代理服务器及电子邮件（IMAP/POP3）代理服务器，并在一个BSD-like 协议下发行。由俄罗斯的程序设计师Igor Sysoev所开发，</p><p>其特点是占有内存少，并发能力强，事实上nginx的并发能力确实在同类型的网页服务器中表现较好，中国大陆使用nginx网站用户有：新浪、网易、腾讯等。</p><p><img src="'+t+`" alt="image-20200103154530929"></p><p>功能：</p><ul><li><p>web服务器</p></li><li><p>web reverse proxy</p></li><li><p>smtp reverse proxy</p></li></ul><h3 id="nginx和apache的优缺点" tabindex="-1"><a class="header-anchor" href="#nginx和apache的优缺点" aria-hidden="true">#</a> Nginx和apache的优缺点</h3><h4 id="nginx相对于apache的优点" tabindex="-1"><a class="header-anchor" href="#nginx相对于apache的优点" aria-hidden="true">#</a> nginx相对于apache的优点：</h4><ul><li>轻量级，同样起web 服务，比apache 占用更少的内存及资源</li><li>抗并发，nginx 处理请求是异步非阻塞的，而apache 则是阻塞型的，在高并发下nginx 能保持低资源低消耗高性能</li><li>高度模块化的设计，编写模块相对简单</li><li>社区活跃，各种高性能模块出品迅速</li></ul><h4 id="apache-相对于nginx-的优点" tabindex="-1"><a class="header-anchor" href="#apache-相对于nginx-的优点" aria-hidden="true">#</a> apache 相对于nginx 的优点：</h4><ul><li>rewrite ，比nginx 的rewrite 强大</li><li>模块超多，基本想到的都可以找到</li><li>少bug ，nginx 的bug 相对较多</li></ul><p>Nginx 配置简洁, Apache 复杂</p><p>最核心的区别在于apache是同步多进程模型，一个连接对应一个进程；</p><p>nginx是异步的，多个连接（万级别）可以对应一个进程</p><h2 id="nginx解决的问题" tabindex="-1"><a class="header-anchor" href="#nginx解决的问题" aria-hidden="true">#</a> Nginx解决的问题</h2><ul><li><p>高并发</p></li><li><p>负载均衡</p></li><li><p>高可用</p></li><li><p>虚拟主机</p></li><li><p>伪静态</p></li><li><p>动静分离</p></li></ul><h2 id="安装" tabindex="-1"><a class="header-anchor" href="#安装" aria-hidden="true">#</a> 安装</h2><h3 id="准备工作" tabindex="-1"><a class="header-anchor" href="#准备工作" aria-hidden="true">#</a> 准备工作</h3><h3 id="检测源" tabindex="-1"><a class="header-anchor" href="#检测源" aria-hidden="true">#</a> 检测源</h3><p>首先需要检查当前源是否有 Nginx（CentOS示例），当没有的时候需要自己添加源。</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code>yum list <span class="token operator">|</span> <span class="token function">grep</span> nginx
<span class="token comment"># nginx.x86_64                             1:1.12.2-2.el7                  epel   </span>
<span class="token comment"># nginx-all-modules.noarch                 1:1.12.2-2.el7                  epel   </span>
<span class="token comment"># nginx-filesystem.noarch                  1:1.12.2-2.el7    </span>
</code></pre></div><h4 id="tengine下载和文档" tabindex="-1"><a class="header-anchor" href="#tengine下载和文档" aria-hidden="true">#</a> Tengine下载和文档</h4><p>http://tengine.taobao.org/</p><h4 id="nginx官网和文档" tabindex="-1"><a class="header-anchor" href="#nginx官网和文档" aria-hidden="true">#</a> Nginx官网和文档</h4><p>http://nginx.org</p><h4 id="操作系统-linux" tabindex="-1"><a class="header-anchor" href="#操作系统-linux" aria-hidden="true">#</a> 操作系统 Linux</h4><h2 id="nginx-安装" tabindex="-1"><a class="header-anchor" href="#nginx-安装" aria-hidden="true">#</a> nginx 安装</h2><h3 id="安装依赖" tabindex="-1"><a class="header-anchor" href="#安装依赖" aria-hidden="true">#</a> 安装依赖</h3><p>系统依赖组件 <code> gcc openssl-devel pcre-devel zlib-devel</code></p><p>安装：<code>yum install gcc openssl-devel pcre-devel zlib-devel </code></p><p>上传Nginx压缩包到服务器，一般安装在/usr/local目录下</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 上传之后，解压缩 至 /usr/local/</span>
<span class="token function">tar</span> xf nginx-1.20.1.tar.gz <span class="token parameter variable">-C</span> /usr/local/
<span class="token comment">#  解压至指定文件 下 并重命名</span>
<span class="token function">mv</span> nginx-1.20.1/ nginx
<span class="token comment"># 创建编译目录   cd ..  &amp;&amp;  mkdir rnginx</span>
<span class="token function">mkdir</span> rnginx 
<span class="token builtin class-name">cd</span> nginx
<span class="token comment"># 配置  makeFile 文件</span>
./configure <span class="token parameter variable">--prefix</span><span class="token operator">=</span>/usr/local/rnginx/

<span class="token comment"># 此时 在 nginx 中 生成了 MakeFile</span>
<span class="token comment"># 编译安装</span>
<span class="token function">make</span> <span class="token operator">&amp;&amp;</span> <span class="token function">make</span> <span class="token function">install</span>

</code></pre></div><h3 id="编译安装" tabindex="-1"><a class="header-anchor" href="#编译安装" aria-hidden="true">#</a> 编译安装</h3><div class="language-bash" data-ext="sh"><pre class="language-bash"><code>./ configure <span class="token parameter variable">--prefix</span><span class="token operator">=</span>/安装路径

<span class="token function">make</span> <span class="token operator">&amp;&amp;</span> <span class="token function">make</span> <span class="token function">install</span>
</code></pre></div><h2 id="启动服务" tabindex="-1"><a class="header-anchor" href="#启动服务" aria-hidden="true">#</a> 启动服务</h2><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 启动 并指定配置文件</span>
./sbin/nginx  <span class="token parameter variable">-c</span> ./conf/nginx.conf

</code></pre></div><h3 id="脚本自启动" tabindex="-1"><a class="header-anchor" href="#脚本自启动" aria-hidden="true">#</a> 脚本自启动</h3><p>拷贝附件提供的Nginx启动脚本文件内容到<code>/etc/init.d/nginx</code>这个文件中</p><p>目录下如果没有这个文件的话需要手动创建</p><h4 id="修改可执行权限" tabindex="-1"><a class="header-anchor" href="#修改可执行权限" aria-hidden="true">#</a> 修改可执行权限</h4><p>chmod 777 nginx</p><h4 id="启动服务-1" tabindex="-1"><a class="header-anchor" href="#启动服务-1" aria-hidden="true">#</a> 启动服务</h4><p>service Nginx start 启动服务</p><p>service Nginx stop 停止</p><p>service Nginx status 状态</p><p>service Nginx reload 动态重载配置文件</p><h4 id="脚本内容" tabindex="-1"><a class="header-anchor" href="#脚本内容" aria-hidden="true">#</a> 脚本内容：</h4><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token shebang important">#!/bin/sh</span>
<span class="token comment">#</span>
<span class="token comment"># nginx - this script starts and stops the nginx daemon</span>
<span class="token comment">#</span>
<span class="token comment"># chkconfig:   - 85 15 </span>
<span class="token comment"># description:  Nginx is an HTTP(S) server, HTTP(S) reverse \\</span>
<span class="token comment">#               proxy and IMAP/POP3 proxy server</span>
<span class="token comment"># processname: nginx</span>
<span class="token comment"># config:      /etc/nginx/nginx.conf</span>
<span class="token comment"># config:      /etc/sysconfig/nginx</span>
<span class="token comment"># pidfile:     /var/run/nginx.pid</span>
 
<span class="token comment"># Source function library.</span>
<span class="token builtin class-name">.</span> /etc/rc.d/init.d/functions
 
<span class="token comment"># Source networking configuration.</span>
<span class="token builtin class-name">.</span> /etc/sysconfig/network
 
<span class="token comment"># Check that networking is up.</span>
<span class="token punctuation">[</span> <span class="token string">&quot;<span class="token variable">$NETWORKING</span>&quot;</span> <span class="token operator">=</span> <span class="token string">&quot;no&quot;</span> <span class="token punctuation">]</span> <span class="token operator">&amp;&amp;</span> <span class="token builtin class-name">exit</span> <span class="token number">0</span>
 
<span class="token assign-left variable">nginx</span><span class="token operator">=</span><span class="token string">&quot;/usr/local/tengine/sbin/nginx&quot;</span>
<span class="token assign-left variable">prog</span><span class="token operator">=</span><span class="token variable"><span class="token variable">$(</span><span class="token function">basename</span> $nginx<span class="token variable">)</span></span>
 
<span class="token assign-left variable">NGINX_CONF_FILE</span><span class="token operator">=</span><span class="token string">&quot;/usr/local/tengine/conf/nginx.conf&quot;</span>
 
<span class="token punctuation">[</span> <span class="token parameter variable">-f</span> /etc/sysconfig/nginx <span class="token punctuation">]</span> <span class="token operator">&amp;&amp;</span> <span class="token builtin class-name">.</span> /etc/sysconfig/nginx
 
<span class="token assign-left variable">lockfile</span><span class="token operator">=</span>/var/lock/subsys/nginx
 
<span class="token function-name function">make_dirs</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
   <span class="token comment"># make required directories</span>
   <span class="token assign-left variable">user</span><span class="token operator">=</span><span class="token variable"><span class="token variable">\`</span>nginx <span class="token parameter variable">-V</span> <span class="token operator"><span class="token file-descriptor important">2</span>&gt;</span><span class="token file-descriptor important">&amp;1</span> <span class="token operator">|</span> <span class="token function">grep</span> <span class="token string">&quot;configure arguments:&quot;</span> <span class="token operator">|</span> <span class="token function">sed</span> <span class="token string">&#39;s/[^*]*--user=\\([^ ]*\\).*/\\1/g&#39;</span> -<span class="token variable">\`</span></span>
   <span class="token assign-left variable">options</span><span class="token operator">=</span><span class="token variable"><span class="token variable">\`</span>$nginx <span class="token parameter variable">-V</span> <span class="token operator"><span class="token file-descriptor important">2</span>&gt;</span><span class="token file-descriptor important">&amp;1</span> <span class="token operator">|</span> <span class="token function">grep</span> <span class="token string">&#39;configure arguments:&#39;</span><span class="token variable">\`</span></span>
   <span class="token keyword">for</span> <span class="token for-or-select variable">opt</span> <span class="token keyword">in</span> <span class="token variable">$options</span><span class="token punctuation">;</span> <span class="token keyword">do</span>
       <span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token variable"><span class="token variable">\`</span><span class="token builtin class-name">echo</span> $opt <span class="token operator">|</span> <span class="token function">grep</span> <span class="token string">&#39;.*-temp-path&#39;</span><span class="token variable">\`</span></span> <span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token keyword">then</span>
           <span class="token assign-left variable">value</span><span class="token operator">=</span><span class="token variable"><span class="token variable">\`</span><span class="token builtin class-name">echo</span> $opt <span class="token operator">|</span> <span class="token function">cut</span> <span class="token parameter variable">-d</span> <span class="token string">&quot;=&quot;</span> <span class="token parameter variable">-f</span> <span class="token number">2</span><span class="token variable">\`</span></span>
           <span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token operator">!</span> <span class="token parameter variable">-d</span> <span class="token string">&quot;<span class="token variable">$value</span>&quot;</span> <span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token keyword">then</span>
               <span class="token comment"># echo &quot;creating&quot; $value</span>
               <span class="token function">mkdir</span> <span class="token parameter variable">-p</span> <span class="token variable">$value</span> <span class="token operator">&amp;&amp;</span> <span class="token function">chown</span> <span class="token parameter variable">-R</span> <span class="token variable">$user</span> <span class="token variable">$value</span>
           <span class="token keyword">fi</span>
       <span class="token keyword">fi</span>
   <span class="token keyword">done</span>
<span class="token punctuation">}</span>
 
<span class="token function-name function">start</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token punctuation">[</span> <span class="token parameter variable">-x</span> <span class="token variable">$nginx</span> <span class="token punctuation">]</span> <span class="token operator">||</span> <span class="token builtin class-name">exit</span> <span class="token number">5</span>
    <span class="token punctuation">[</span> <span class="token parameter variable">-f</span> <span class="token variable">$NGINX_CONF_FILE</span> <span class="token punctuation">]</span> <span class="token operator">||</span> <span class="token builtin class-name">exit</span> <span class="token number">6</span>
    make_dirs
    <span class="token builtin class-name">echo</span> <span class="token parameter variable">-n</span> $<span class="token string">&quot;Starting <span class="token variable">$prog</span>: &quot;</span>
    daemon <span class="token variable">$nginx</span> <span class="token parameter variable">-c</span> <span class="token variable">$NGINX_CONF_FILE</span>
    <span class="token assign-left variable">retval</span><span class="token operator">=</span><span class="token variable">$?</span>
    <span class="token builtin class-name">echo</span>
    <span class="token punctuation">[</span> <span class="token variable">$retval</span> <span class="token parameter variable">-eq</span> <span class="token number">0</span> <span class="token punctuation">]</span> <span class="token operator">&amp;&amp;</span> <span class="token function">touch</span> <span class="token variable">$lockfile</span>
    <span class="token builtin class-name">return</span> <span class="token variable">$retval</span>
<span class="token punctuation">}</span>
 
<span class="token function-name function">stop</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token builtin class-name">echo</span> <span class="token parameter variable">-n</span> $<span class="token string">&quot;Stopping <span class="token variable">$prog</span>: &quot;</span>
    killproc <span class="token variable">$prog</span> <span class="token parameter variable">-QUIT</span>
    <span class="token assign-left variable">retval</span><span class="token operator">=</span><span class="token variable">$?</span>
    <span class="token builtin class-name">echo</span>
    <span class="token punctuation">[</span> <span class="token variable">$retval</span> <span class="token parameter variable">-eq</span> <span class="token number">0</span> <span class="token punctuation">]</span> <span class="token operator">&amp;&amp;</span> <span class="token function">rm</span> <span class="token parameter variable">-f</span> <span class="token variable">$lockfile</span>
    <span class="token builtin class-name">return</span> <span class="token variable">$retval</span>
<span class="token punctuation">}</span>
 
<span class="token function-name function">restart</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    configtest <span class="token operator">||</span> <span class="token builtin class-name">return</span> <span class="token variable">$?</span>
    stop
    <span class="token function">sleep</span> <span class="token number">1</span>
    start
<span class="token punctuation">}</span>
 
<span class="token function-name function">reload</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    configtest <span class="token operator">||</span> <span class="token builtin class-name">return</span> <span class="token variable">$?</span>
    <span class="token builtin class-name">echo</span> <span class="token parameter variable">-n</span> $<span class="token string">&quot;Reloading <span class="token variable">$prog</span>: &quot;</span>
    killproc <span class="token variable">$nginx</span> <span class="token parameter variable">-HUP</span>
    <span class="token assign-left variable">RETVAL</span><span class="token operator">=</span><span class="token variable">$?</span>
    <span class="token builtin class-name">echo</span>
<span class="token punctuation">}</span>
 
<span class="token function-name function">force_reload</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    restart
<span class="token punctuation">}</span>
 
<span class="token function-name function">configtest</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token variable">$nginx</span> <span class="token parameter variable">-t</span> <span class="token parameter variable">-c</span> <span class="token variable">$NGINX_CONF_FILE</span>
<span class="token punctuation">}</span>
 
<span class="token function-name function">rh_status</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    status <span class="token variable">$prog</span>
<span class="token punctuation">}</span>
 
<span class="token function-name function">rh_status_q</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    rh_status <span class="token operator">&gt;</span>/dev/null <span class="token operator"><span class="token file-descriptor important">2</span>&gt;</span><span class="token file-descriptor important">&amp;1</span>
<span class="token punctuation">}</span>
 
<span class="token keyword">case</span> <span class="token string">&quot;<span class="token variable">$1</span>&quot;</span> <span class="token keyword">in</span>
    start<span class="token punctuation">)</span>
        rh_status_q <span class="token operator">&amp;&amp;</span> <span class="token builtin class-name">exit</span> <span class="token number">0</span>
        <span class="token variable">$1</span>
        <span class="token punctuation">;</span><span class="token punctuation">;</span>
    stop<span class="token punctuation">)</span>
        rh_status_q <span class="token operator">||</span> <span class="token builtin class-name">exit</span> <span class="token number">0</span>
        <span class="token variable">$1</span>
        <span class="token punctuation">;</span><span class="token punctuation">;</span>
    restart<span class="token operator">|</span>configtest<span class="token punctuation">)</span>
        <span class="token variable">$1</span>
        <span class="token punctuation">;</span><span class="token punctuation">;</span>
    reload<span class="token punctuation">)</span>
        rh_status_q <span class="token operator">||</span> <span class="token builtin class-name">exit</span> <span class="token number">7</span>
        <span class="token variable">$1</span>
        <span class="token punctuation">;</span><span class="token punctuation">;</span>
    force-reload<span class="token punctuation">)</span>
        force_reload
        <span class="token punctuation">;</span><span class="token punctuation">;</span>
    status<span class="token punctuation">)</span>
        rh_status
        <span class="token punctuation">;</span><span class="token punctuation">;</span>
    condrestart<span class="token operator">|</span>try-restart<span class="token punctuation">)</span>
        rh_status_q <span class="token operator">||</span> <span class="token builtin class-name">exit</span> <span class="token number">0</span>
            <span class="token punctuation">;</span><span class="token punctuation">;</span>
    *<span class="token punctuation">)</span>
        <span class="token builtin class-name">echo</span> $<span class="token string">&quot;Usage: <span class="token variable">$0</span> {start|stop|status|restart|condrestart|try-restart|reload|force-reload|configtest}&quot;</span>
        <span class="token builtin class-name">exit</span> <span class="token number">2</span>
<span class="token keyword">esac</span>

</code></pre></div><h2 id="nginx配置解析" tabindex="-1"><a class="header-anchor" href="#nginx配置解析" aria-hidden="true">#</a> Nginx配置解析</h2><h3 id="定义nginx运行的用户和用户组" tabindex="-1"><a class="header-anchor" href="#定义nginx运行的用户和用户组" aria-hidden="true">#</a> 定义Nginx运行的用户和用户组</h3><p><code>user www www;</code></p><h3 id="进程数" tabindex="-1"><a class="header-anchor" href="#进程数" aria-hidden="true">#</a> 进程数</h3><p>建议设置为等于CPU总核心数。</p><p><code>worker_processes 8;</code></p><h3 id="全局错误日志" tabindex="-1"><a class="header-anchor" href="#全局错误日志" aria-hidden="true">#</a> 全局错误日志</h3><p>全局错误日志定义类型，[ debug | info | notice | warn | error | crit ]</p><p><code>error_log /var/log/nginx/error.log info;</code></p><h3 id="进程文件" tabindex="-1"><a class="header-anchor" href="#进程文件" aria-hidden="true">#</a> 进程文件</h3><p><code>pid /var/run/nginx.pid;</code></p><h3 id="打开的最多文件描述符" tabindex="-1"><a class="header-anchor" href="#打开的最多文件描述符" aria-hidden="true">#</a> 打开的最多文件描述符</h3><p>一个nginx进程打开的最多文件描述符数目，理论值应该是最多打开文件数（系统的值ulimit -n）与nginx进程数相除，但是nginx分配请求并不均匀，所以建议与ulimit -n的值保持一致。</p><p><code>worker_rlimit_nofile 65535;</code></p><h3 id="event" tabindex="-1"><a class="header-anchor" href="#event" aria-hidden="true">#</a> event</h3><h4 id="单个进程最大连接数" tabindex="-1"><a class="header-anchor" href="#单个进程最大连接数" aria-hidden="true">#</a> 单个进程最大连接数</h4><p>并发总数是 worker_processes 和 worker_connections 的乘积</p><p>即 max_clients = worker_processes * worker_connections</p><p>在设置了反向代理的情况下，max_clients = worker_processes * worker_connections / 4 为什么 为什么上面反向代理要除以4，应该说是一个经验值根据以上条件，正常情况下的Nginx Server可以应付的最大连接数为：4 * 8000 = 32000worker_connections 值的设置跟物理内存大小有关</p><p>因为并发受IO约束，max_clients的值须小于系统可以打开的最大文件数</p><div class="language-text" data-ext="text"><pre class="language-text"><code>工作模式与连接数上限
events
{
参考事件模型，use [ kqueue | rtsig | epoll | /dev/poll | select | poll ]; epoll模型是Linux 2.6以上版本内核中的高性能网络I/O模型，如果跑在FreeBSD上面，就用kqueue模型。
use epoll;
单个进程最大连接数（最大连接数=连接数*进程数）
worker_connections 65535;
}

</code></pre></div><p><strong>可以打开的文件句柄数是多少</strong></p><p><code>–$ cat /proc/sys/fs/file-max</code></p><p>输出：<code>97320</code></p><p>并发连接总数小于系统可以打开的文件句柄总数，这样就在操作系统可以承受的范围之内</p><p>所以，worker_connections 的值需根据 worker_processes 进程数目和系统可以打开的最大文件总数进行适当地进行设置,使得并发总数小于操作系统可以打开的最大文件数目</p><p>– # 其实质也就是根据主机的物理CPU和内存进行配置</p><p>当然，理论上的并发总数可能会和实际有所偏差，因为主机还有其他的工作进程需要消耗系统资源。</p><p><strong>查看系统限制</strong> <code>ulimit -a</code></p><h4 id="打开文件句柄数量限制" tabindex="-1"><a class="header-anchor" href="#打开文件句柄数量限制" aria-hidden="true">#</a> 打开文件句柄数量限制</h4><p>是Linux操作系统对一个进程打开的文件句柄数量的限制(也包含打开的SOCKET数量，可影响MySQL的并发连接数目)</p><p>系统总限制： <code>/proc/sys/fs/file-max</code> 当前使用句柄数：<code>/proc/sys/fs/file-nr </code></p><p>修改句柄数：<code>ulimit -SHn 65535</code></p><h3 id="http" tabindex="-1"><a class="header-anchor" href="#http" aria-hidden="true">#</a> http</h3><p>include mime.types; #文件扩展名与文件类型映射表</p><p>default_type application/octet-stream; #默认文件类型</p><p>charset utf-8; #默认编码</p><p>client_header_buffer_size 32k; #上传文件大小限制</p><h4 id="sendfile" tabindex="-1"><a class="header-anchor" href="#sendfile" aria-hidden="true">#</a> sendfile</h4><p>sendfile on; #开启高效文件传输模式，sendfile指令指定nginx是否调用sendfile函数来输出文件，对于普通应用设为 on，如果用来进行下载等应用磁盘IO重负载应用，可设置为off，以平衡磁盘与网络I/O处理速度，降低系统的负载。注意：如果图片显示不正常把这个改成off。</p><p>sendfile()还能够用来在两个文件夹之间移动数据</p><p><code>tcp_nopush</code> 在linux/Unix系统中优化tcp数据传输，仅在sendfile开启时有效</p><p><code>autoindex on; </code>#开启目录列表访问，合适下载服务器，默认关闭。</p><p><code>keepalive_timeout 120; </code>#长连接超时时间，单位是秒</p><h4 id="gzip" tabindex="-1"><a class="header-anchor" href="#gzip" aria-hidden="true">#</a> gzip</h4><p><code>gzip on;</code> 开启gzip压缩输出</p><p><code>gzip_min_length 1k;</code> 设置允许压缩的页面最小字节数，页面字节数从header头得content-length中进行获取。默认值是0，不管页面多大都压缩。建议设置成大于2k的字节数，小于2k可能会越压越大。</p><p><code>gzip_buffers 4 16k;</code> 设置系统获取几个单位的缓存用于存储gzip的压缩结果数据流。 例如 4 4k 代表以4k为单位，按照原始数据大小以4k为单位的4倍申请内存。 4 8k 代表以8k为单位，按照原始数据大小以8k为单位的4倍申请内存。 如果没有设置，默认值是申请跟原始数据相同大小的内存空间去存储gzip压缩结果。</p><p><code>gzip_http_version 1.0; </code>压缩版本（默认1.1，前端如果是squid2.5请使用1.0）</p><p><code>gzip_comp_level 2;</code> 压缩级别，1-10，数字越大压缩的越好，也越占用CPU时间</p><p><code>gzip_types text/plain application/x-javascript text/css application/xml;</code> #压缩类型，默认就已经包含text/html，所以下面就不用再写了，写上去也不会有问题，但是会有一个warn。</p><p>默认值: gzip_types text/html (默认不对js/css文件进行压缩)</p><p>压缩类型，匹配MIME类型进行压缩</p><p>设置哪压缩种文本文件可参考 conf/mime.types</p><p><code>gzip_disable &quot;MSIE [1-6]\\.&quot;; </code>E6及以下禁止压缩</p><p><code>gzip_vary on; </code>给CDN和代理服务器使用，针对相同url，可以根据头信息返回压缩和非压缩副本</p><h3 id="server" tabindex="-1"><a class="header-anchor" href="#server" aria-hidden="true">#</a> server</h3><p><code> listen 80;</code> 监听端口 <code>server_name www.mashibing.com mashibing.com; </code> 域名可以有多个，用空格隔开</p><p><code>charset koi8-r;</code> 编码集</p><div class="language-access_log" data-ext="access_log"><pre class="language-access_log"><code>日志相关
access_log  &quot;pipe:rollback logs/host.access_log interval=1d baknum=7 maxsize=2G&quot;  main;
</code></pre></div><p><code>index index.html index.htm index.jsp;</code> 默认页 <code>root /data/www/ha97;</code> 主目录</p><h3 id="虚拟主机" tabindex="-1"><a class="header-anchor" href="#虚拟主机" aria-hidden="true">#</a> 虚拟主机</h3><p>虚拟主机是一种特殊的软硬件技术，它可以将网络上的每一台计算机分成多个虚拟主机，每个虚拟主机可以独立对外提供www服务，这样就可以实现一台主机对外提供多个web服务，每个虚拟主机之间是独立的，互不影响的</p><p>通过nginx可以实现虚拟主机的配置，nginx支持三种类型的虚拟主机配置</p><ul><li>基于ip的虚拟主机， （一块主机绑定多个ip地址）</li><li>基于域名的虚拟主机（servername）</li><li>基于端口的虚拟主机（listen如果不写ip端口模式）</li></ul><div class="language-conf" data-ext="conf"><pre class="language-conf"><code>http{
	server{
		#表示一个虚拟主机
	}
}

</code></pre></div><div class="language-conf" data-ext="conf"><pre class="language-conf"><code> server {
   listen    80;
 
#为虚拟机指定IP或者是域名
   server_name 192.168.20.30;
 
#主要配置路由访问信息
   location / {
 
 #用于指定访问根目录时，访问虚拟主机的web目录
     root  html30;
 
 #在不指定访问具体资源时，默认的展示资源的列表
     index index.html index.htm;
 
   } 
   error_page  500 502 503 504 /50x.html;
   location = /50x.html {
     root  html;
   }
 }
 #一个Server就是一个虚拟主机
 server {
   listen    80;
 
 #为虚拟机指定IP或者是域名
   server_name 192.168.20.29;
 
#主要配置路由访问信息
   location / {
 
 #用于指定访问根目录时，访问虚拟主机的web目录
     root  html29;
 
 #在不指定访问具体资源时，默认的展示资源的列表
     index index.html index.htm;
 
   } 
   error_page  500 502 503 504 /50x.html;
   location = /50x.html {
     root  html;
   }
 }
</code></pre></div><h5 id="location" tabindex="-1"><a class="header-anchor" href="#location" aria-hidden="true">#</a> location</h5><p>映射/虚拟目录</p><div class="language-text" data-ext="text"><pre class="language-text"><code>location = / {
    [ configuration A ]
}

location / {
    [ configuration B ]
}

location /documents/ {
    [ configuration C ]
}

location ^~ /images/ {
    [ configuration D ]
}

location ~* \\.(gif|jpg|jpeg)$ {
    [ configuration E ]
}
</code></pre></div><p>location [ = | ~ | ~* | ^~ ] uri { ... }</p><p><code>location URI {}</code> 对当前路径及子路径下的所有对象都生效；</p><p><code>location = URI {}</code> 注意URL最好为具体路径。 精确匹配指定的路径，不包括子路径，因此，只对当前资源生效；</p><p><code>location ~ URI {} location ~* URI {} </code> 模式匹配URI，此处的URI可使用正则表达式，~区分字符大小写，~*不区分字符大小写；</p><p><code>location ^~ URI {}</code> 禁用正则表达式</p><p><strong>优先级</strong>：= &gt; ^~ &gt; ~|~* &gt; /|/dir/</p><h6 id="location配置规则" tabindex="-1"><a class="header-anchor" href="#location配置规则" aria-hidden="true">#</a> location配置规则</h6><p>location 的执行逻辑跟 location 的编辑顺序无关。 矫正：这句话不全对，“普通 location ”的匹配规则是“最大前缀”，因此“普通 location ”的确与 location 编辑顺序无关；</p><p>但是“正则 location ”的匹配规则是“顺序匹配，且只要匹配到第一个就停止后面的匹配”；</p><p>“普通location ”与“正则 location ”之间的匹配顺序是？先匹配普通 location ，再“考虑”匹配正则 location 。</p><p>注意这里的“考虑”是“可能”的意思，也就是说匹配完“普通 location ”后，有的时候需要继续匹配“正则 location ”，有的时候则不需要继续匹配“正则 location ”。两种情况下，不需要继续匹配正则 location ：</p><ul><li>（ 1 ）当普通 location 前面指定了“ ^~ ”，特别告诉 Nginx 本条普通 location 一旦匹配上，则不需要继续正则匹配；</li><li>（ 2 ）当普通location 恰好严格匹配上，不是最大前缀匹配，则不再继续匹配正则</li></ul><h3 id="ip访问控制" tabindex="-1"><a class="header-anchor" href="#ip访问控制" aria-hidden="true">#</a> IP访问控制</h3><div class="language-text" data-ext="text"><pre class="language-text"><code>location  {
	   deny  IP /IP段
	   deny  192.168.1.109;
	   allow 192.168.1.0/24;192.168.0.0/16;192.0.0.0/8
	}

</code></pre></div><h3 id="用户认证访问" tabindex="-1"><a class="header-anchor" href="#用户认证访问" aria-hidden="true">#</a> 用户认证访问</h3><p>模块ngx_http_auth_basic_module 允许使用“HTTP基本认证”协议验证用户名和密码来限制对资源的访问。</p><div class="language-text" data-ext="text"><pre class="language-text"><code>        location ~ (.*)\\.avi$ {
                 auth_basic  &quot;closed site&quot;;
                 auth_basic_user_file conf/users;
        }

</code></pre></div><h3 id="httpd-tools" tabindex="-1"><a class="header-anchor" href="#httpd-tools" aria-hidden="true">#</a> <strong>httpd-tools</strong></h3><div class="language-text" data-ext="text"><pre class="language-text"><code>yum install httpd

htpasswd -c -d /usr/local/users zhangyang
</code></pre></div><h3 id="nginx访问状态监控" tabindex="-1"><a class="header-anchor" href="#nginx访问状态监控" aria-hidden="true">#</a> nginx访问状态监控</h3><div class="language-text" data-ext="text"><pre class="language-text"><code>location /basic_status {
    stub_status on;
}
</code></pre></div><h3 id="反向代理" tabindex="-1"><a class="header-anchor" href="#反向代理" aria-hidden="true">#</a> 反向代理</h3><p>通常的代理服务器，只用于代理内部网络对Internet的连接请求，客户机必须指定代理服务器,并将本来要直接发送到Web服务器上的http请求发送到代理服务器中由代理服务器向Internet上的web服务器发起请求，最终达到客户机上网的目的。</p><p>反向代理（Reverse Proxy）方式是指以代理服务器来接受internet上的连接请求，然后将请求转发给内部网络上的服务器，并将从服务器上得到的结果返回给internet上请求连接的客户端，此时代理服务器对外就表现为一个反向代理服务器</p><p><img src="`+p+'" alt="image-20200103154711795"></p><h4 id="经典的反向代理结构" tabindex="-1"><a class="header-anchor" href="#经典的反向代理结构" aria-hidden="true">#</a> 经典的反向代理结构</h4><p><img src="'+o+`" alt="image-20200103154652173"></p><div class="language-text" data-ext="text"><pre class="language-text"><code>Proxy_pass http://192.168.1.152/
</code></pre></div><p>301重定向问题</p><h4 id="upstream" tabindex="-1"><a class="header-anchor" href="#upstream" aria-hidden="true">#</a> upstream</h4><p>反向代理配合upstream使用</p><div class="language-text" data-ext="text"><pre class="language-text"><code>  upstream httpds {
    server 192.168.43.152:80;
    server 192.168.43.153:80;
}

</code></pre></div><h5 id="weight-权重" tabindex="-1"><a class="header-anchor" href="#weight-权重" aria-hidden="true">#</a> <strong>weight(权重)</strong></h5><p>指定轮询几率，weight和访问比率成正比，用于后端服务器性能不均的情况。</p><div class="language-text" data-ext="text"><pre class="language-text"><code>upstream httpds {
    server 127.0.0.1:8050       weight=10 down;
    server 127.0.0.1:8060       weight=1;
     server 127.0.0.1:8060      weight=1 backup;
}
</code></pre></div><ul><li>down：表示当前的server暂时不参与负载</li><li>weight：默认为1.weight越大，负载的权重就越大。</li><li>backup： 其它所有的非backup机器down或者忙的时候，请求backup机器。</li></ul><h5 id="max-conns" tabindex="-1"><a class="header-anchor" href="#max-conns" aria-hidden="true">#</a> <strong>max_conns</strong></h5><p>可以根据服务的好坏来设置最大连接数，防止挂掉，比如1000，我们可以设置800</p><div class="language-text" data-ext="text"><pre class="language-text"><code>upstream httpds {
    server 127.0.0.1:8050    weight=5  max_conns=800;
    server 127.0.0.1:8060    weight=1;
}
</code></pre></div><h5 id="max-fails、-fail-timeout" tabindex="-1"><a class="header-anchor" href="#max-fails、-fail-timeout" aria-hidden="true">#</a> <strong>max_fails、 fail_timeout</strong></h5><p>max_fails:失败多少次 认为主机已挂掉则，踢出，公司资源少的话一般设置2~3次，多的话设置1次</p><p>max_fails=3 fail_timeout=30s代表在30秒内请求某一应用失败3次，认为该应用宕机，后等待30秒，这期间内不会再把新请求发送到宕机应用，而是直接发到正常的那一台，时间到后再有请求进来继续尝试连接宕机应用且仅尝试1次，如果还是失败，则继续等待30秒...以此循环，直到恢复。</p><div class="language-text" data-ext="text"><pre class="language-text"><code>upstream httpds {
    server 127.0.0.1:8050    weight=1  max_fails=1  fail_timeout=20;
    server 127.0.0.1:8060    weight=1;
}
</code></pre></div><h5 id="负载均衡算法" tabindex="-1"><a class="header-anchor" href="#负载均衡算法" aria-hidden="true">#</a> 负载均衡算法</h5><p><strong>轮询+weight</strong> <strong>ip_hash</strong> <strong>url_hash</strong> <strong>least_conn</strong> <strong>least_time</strong></p><h4 id="健康检查模块" tabindex="-1"><a class="header-anchor" href="#健康检查模块" aria-hidden="true">#</a> 健康检查模块</h4><p>配置一个status的location</p><div class="language-text" data-ext="text"><pre class="language-text"><code>location /status {
            check_status;
 
        }

</code></pre></div><p>在upstream配置如下</p><div class="language-text" data-ext="text"><pre class="language-text"><code>check interval=3000 rise=2 fall=5 timeout=1000 type=http;
check_http_send &quot;HEAD / HTTP/1.0\\r\\n\\r\\n&quot;;
check_http_expect_alive http_2xx http_3xx;

</code></pre></div><h3 id="session共享" tabindex="-1"><a class="header-anchor" href="#session共享" aria-hidden="true">#</a> session共享</h3><h4 id="memcached" tabindex="-1"><a class="header-anchor" href="#memcached" aria-hidden="true">#</a> Memcached</h4><h5 id="安装-1" tabindex="-1"><a class="header-anchor" href="#安装-1" aria-hidden="true">#</a> 安装</h5><ul><li>安装libevent</li><li>安装memcached</li></ul><p>可以用yum方式安装 <code>yum –y install memcached</code></p><h5 id="启动memcached" tabindex="-1"><a class="header-anchor" href="#启动memcached" aria-hidden="true">#</a> 启动memcached</h5><div class="language-text" data-ext="text"><pre class="language-text"><code>memcached -d -m 128 -u root -l 192.168.43.151 -p 11211 -c 256 -P /tmp/memcached.pid
memcached-tool 192.168.2.51:11211
参数解释：
	-d:后台启动服务
	-m:缓存大小
	-p：端口
	-l:IP
	-P:服务器启动后的系统进程ID，存储的文件
	-u:服务器启动是以哪个用户名作为管理用户

</code></pre></div><h4 id="nginx配置" tabindex="-1"><a class="header-anchor" href="#nginx配置" aria-hidden="true">#</a> Nginx配置</h4><div class="language-text" data-ext="text"><pre class="language-text"><code>upstream tomcat{
        server 192.168.2.52:8080;
        server 192.168.2.53:8080;
      }

        location /tomcat {
        proxy_pass http://tomcat/;
      } 

</code></pre></div><h4 id="tomcat配置" tabindex="-1"><a class="header-anchor" href="#tomcat配置" aria-hidden="true">#</a> Tomcat配置</h4><p>到tomcat的lib下，jar包见附件</p><p>每个tomcat里面的context.xml中加入</p><div class="language-text" data-ext="text"><pre class="language-text"><code>&lt;Manager className=&quot;de.javakaffee.web.msm.MemcachedBackupSessionManager&quot; 
	memcachedNodes=&quot;n1:192.168.43.151:11211&quot; 
    sticky=&quot;false&quot; 
    lockingMode=&quot;auto&quot;
    sessionBackupAsync=&quot;false&quot;
	requestUriIgnorePattern=&quot;.*\\.(ico|png|gif|jpg|css|js)$&quot;
    sessionBackupTimeout=&quot;1000&quot; transcoderFactoryClass=&quot;de.javakaffee.web.msm.serializer.kryo.KryoTranscoderFactory&quot; 
/&gt;

</code></pre></div><h3 id="http-proxy-本地磁盘缓存" tabindex="-1"><a class="header-anchor" href="#http-proxy-本地磁盘缓存" aria-hidden="true">#</a> http_proxy 本地磁盘缓存</h3><div class="language-text" data-ext="text"><pre class="language-text"><code>proxy_cache_path /path/to/cache levels=1:2 keys_zone=my_cache:10m max_size=10g inactive=60m use_temp_path=off;
server {
     set $upstream http://ip:port
          location / {
                   proxy_cache my_cache;
                   proxy_pass $upstream;
                }
}


	/path/to/cache  #本地路径，用来设置Nginx缓存资源的存放地址
	levels          #默认所有缓存文件都放在同一个/path/to/cache下，但是会影响缓存的性能，因此通常会在/path/to/cache下面建立子目录用来分别存放不同的文件。假设levels=1:2，Nginx为将要缓存的资源生成的key为f4cd0fbc769e94925ec5540b6a4136d0，那么key的最后一位0，以及倒数第2-3位6d作为两级的子目录，也就是该资源最终会被缓存到/path/to/cache/0/6d目录中
	key_zone        #在共享内存中设置一块存储区域来存放缓存的key和metadata（类似使用次数），这样nginx可以快速判断一个request是否命中或者未命中缓存，1m可以存储8000个key，10m可以存储80000个key
	max_size        #最大cache空间，如果不指定，会使用掉所有disk space，当达到配额后，会删除最少使用的cache文件
	inactive        #未被访问文件在缓存中保留时间，本配置中如果60分钟未被访问则不论状态是否为expired，缓存控制程序会删掉文件。inactive默认是10分钟。需要注意的是，inactive和expired配置项的含义是不同的，expired只是缓存过期，但不会被删除，inactive是删除指定时间内未被访问的缓存文件
	use_temp_path   #如果为off，则nginx会将缓存文件直接写入指定的cache文件中，而不是使用temp_path存储，official建议为off，避免文件在不同文件系统中不必要的拷贝
	proxy_cache     #启用proxy cache，并指定key_zone。另外，如果proxy_cache off表示关闭掉缓存。

</code></pre></div><h2 id="nginx-命令" tabindex="-1"><a class="header-anchor" href="#nginx-命令" aria-hidden="true">#</a> nginx 命令</h2><div class="language-text" data-ext="text"><pre class="language-text"><code>
 

nginx常用命令：

 

验证配置是否正确: nginx -t

 

查看Nginx的版本号：nginx -V

 

启动Nginx：start nginx

 

快速停止或关闭Nginx：nginx -s stop

 

正常停止或关闭Nginx：nginx -s quit

 

配置文件修改重装载命令：nginx -s reload

</code></pre></div>`,191),r=[i];function l(d,u){return a(),s("div",null,r)}const k=n(c,[["render",l],["__file","ainstall-nginx.html.vue"]]);export{k as default};
