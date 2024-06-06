import{_ as s,p as a,q as e,a1 as n}from"./framework-d81ad7e5.js";const l={},o=n(`<ul><li>先检查是否有mysql用户组和mysql用户,没有就添加有就忽略：<code>groups mysql </code></li><li>添加用户组和用户 <code>groupadd mysql &amp;&amp; useradd -r -g mysql mysql</code></li><li>创建数据目录并赋予权限 <code>mkdir -p /data/mysql</code></li><li>修改配置文件 vim /etc/my.cnf （没有就新建）</li></ul><div class="language-cnf" data-ext="cnf"><pre class="language-cnf"><code>[mysqld]
bind-address=0.0.0.0
port=3306
user=mysql
basedir=/usr/local/mysql
datadir=/data/mysql
socket=/tmp/mysql.sock
log-error=/data/mysql/mysql.err
pid-file=/data/mysql/mysql.pid
#character config
character_set_server=utf8mb4
symbolic-links=0
explicit_defaults_for_timestamp=true
</code></pre></div><ul><li>解压后的<code>mysql-5.7.35-linux.tar.gz</code>文件移动到<code>/usr/local/mysql</code> （文件夹名称修改为mysql不带版本号信息）</li></ul><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token builtin class-name">cd</span> /usr/local/mysql/bin/
./mysqld --defaults-file<span class="token operator">=</span>/etc/my.cnf <span class="token parameter variable">--basedir</span><span class="token operator">=</span>/usr/local/mysql/ <span class="token parameter variable">--datadir</span><span class="token operator">=</span>/data/mysql/ <span class="token parameter variable">--user</span><span class="token operator">=</span>mysql <span class="token parameter variable">--initialize</span>
</code></pre></div><ul><li>查看初始密码 <code>cat /data/mysql/mysql.err</code></li></ul><div class="language-bash" data-ext="sh"><pre class="language-bash"><code>　<span class="token function">cp</span> /usr/local/mysql/support-files/mysql.server /etc/init.d/mysql
　　<span class="token function">service</span> mysql start
</code></pre></div><h3 id="修改密码" tabindex="-1"><a class="header-anchor" href="#修改密码" aria-hidden="true">#</a> 修改密码</h3><ol><li>开启免密码登陆 修改<code>my.cnf</code>文件 默认在<code>/etc/my.cnf</code>。</li></ol><p><code>vim /etc/my.cnf</code> 在【mysqld】模块下面添加：<code>skip-grant-tables</code> 保存退出。</p><ol start="2"><li>重启服务，使配置生效 。</li></ol><p><code> service mysql restart</code></p><ol start="3"><li><p>登陆 <code>/usr/local/mysql/bin/mysql -u root -p</code> //不输入密码直接敲回车键</p></li><li><p>刷新规则允许外部访问</p></li></ol><div class="language-sql" data-ext="sql"><pre class="language-sql"><code>　　<span class="token keyword">use</span> mysql 　　　　 <span class="token comment">#选择访问mysql库</span>
　　<span class="token keyword">update</span> <span class="token keyword">user</span> <span class="token keyword">set</span> host <span class="token operator">=</span> <span class="token string">&#39;%&#39;</span> <span class="token keyword">where</span> <span class="token keyword">user</span> <span class="token operator">=</span> <span class="token string">&#39;root&#39;</span><span class="token punctuation">;</span> 　　　　 <span class="token comment">#使root能再任何host访问</span>
　　FLUSH <span class="token keyword">PRIVILEGES</span><span class="token punctuation">;</span> 　　 　　 <span class="token comment">#刷新 </span>
</code></pre></div><ol start="5"><li>修改密码</li></ol><div class="language-sql" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">ALTER</span> <span class="token keyword">USER</span> <span class="token string">&quot;root&quot;</span><span class="token variable">@&quot;%&quot;</span> IDENTIFIED  <span class="token keyword">BY</span> <span class="token string">&quot;1234&quot;</span><span class="token punctuation">;</span>

FLUSH <span class="token keyword">PRIVILEGES</span><span class="token punctuation">;</span> 　　 　　 <span class="token comment">#刷新 </span>
</code></pre></div>`,15),t=[o];function c(p,r){return a(),e("div",null,t)}const i=s(l,[["render",c],["__file","install_mysql.html.vue"]]);export{i as default};
