import{_ as s,p as n,q as a,a1 as e}from"./framework-d81ad7e5.js";const t={},o=e(`<h3 id="安装" tabindex="-1"><a class="header-anchor" href="#安装" aria-hidden="true">#</a> 安装</h3><h4 id="windows版本redis" tabindex="-1"><a class="header-anchor" href="#windows版本redis" aria-hidden="true">#</a> windows版本redis</h4><p><code>windows版本redis下载（GitHub）：</code></p><p><code>https://github.com/tporadowski/redis/releases</code> （推荐使用）</p><p><code>https://github.com/MicrosoftArchive/redis/releases</code></p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code>

<span class="token comment">#当前所在目录/app/omodel/redis</span>

<span class="token comment">#解压 tar.gz   -C 指定目录</span>
<span class="token function">tar</span> <span class="token parameter variable">-zvxf</span> redis-5.0.7.tar.gz

<span class="token comment">#一般都会将redis目录放置到 /usr/local/redis目录，所以这里输入下面命令将目前在/root目录下的redis-5.0.7文件夹更改目录，同时更改文件夹名称为redis</span>
<span class="token function">mv</span>  redis-5.0.7  redis

<span class="token comment"># make  make &amp;&amp; make install PREFIX=/usr/local/redis （指定安装目录）</span>

 <span class="token function">make</span> <span class="token operator">&amp;&amp;</span> <span class="token function">make</span> <span class="token function">install</span> <span class="token assign-left variable">PREFIX</span><span class="token operator">=</span>/usr/local/redis
<span class="token comment">#启动： 进入 bin/ ./redis-server</span>

./bin/redis-server<span class="token operator">&amp;</span> ./redis.conf
<span class="token comment">#./bin/redis-server&amp; ./redis.conf 带配置文件启动</span>

</code></pre></div><ul><li>redis 需要配置的</li></ul><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 关闭保护模式</span>
protected-mode no
<span class="token comment"># 以守护进程后台模式运行</span>
daemonize <span class="token function">yes</span>
<span class="token comment"># 绑定本机ip</span>
<span class="token builtin class-name">bind</span> <span class="token number">172.18</span>.203.30
<span class="token comment"># redis进程文件</span>
pidfile /usr/local/redis/redis_6379.pid
<span class="token comment"># 日志文件</span>
logfile /usr/local/redis/log/redis_6379.log
<span class="token comment"># 快照数据存放目录,一定是目录</span>
<span class="token function">dir</span> /usr/local/redis/data/

protected-mode no    <span class="token comment"># 关闭保护模式</span>
daemonize <span class="token function">yes</span>        <span class="token comment"># 守护进程模式开启(可以后台运行)</span>
<span class="token comment">#bind 127.0.0.1      #注释掉，监听所有的IP地址(如果需要其他ip的redis客户端访问)</span>

requirepass redispwd <span class="token comment">#可以修改密码，requirepass 后边添加redis密码</span>
port <span class="token number">6666</span>            <span class="token comment">#可以修改端口号，默认是6379</span>

<span class="token comment"># 检查端口</span>
<span class="token function">netstat</span> <span class="token parameter variable">-ltnp</span> <span class="token operator">|</span><span class="token function">grep</span> <span class="token number">6379</span>
</code></pre></div><p><code>netstat -ltnp |grep 6379</code></p><h3 id="redis-cli" tabindex="-1"><a class="header-anchor" href="#redis-cli" aria-hidden="true">#</a> redis-cli</h3><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 启动redis客户端（提示：参数- h {ip} -p {port} ）</span>
./redis-cli <span class="token parameter variable">-h</span> <span class="token number">192.168</span>.1.11 <span class="token parameter variable">-p</span> <span class="token number">6379</span>
</code></pre></div><h3 id="redis字符串-string" tabindex="-1"><a class="header-anchor" href="#redis字符串-string" aria-hidden="true">#</a> redis字符串(String)</h3><ul><li>string是redis最基本的类型，一个key对应一个value。string类型是Redis最基本的数据类型，一个键最大能存储<strong>512MB</strong>。</li></ul><ul><li><strong>应用场景</strong> String通常用于保存单个字符串或JSON字符串数据,常用的场景有：统计网站访问数量、当前在线人数、微博数、粉丝数等， 全局递增ID等 。</li></ul>`,14),r=[o];function p(c,i){return n(),a("div",null,r)}const d=s(t,[["render",p],["__file","index.html.vue"]]);export{d as default};
