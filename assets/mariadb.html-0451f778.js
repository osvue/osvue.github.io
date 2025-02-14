import{_ as a,p as n,q as s,a1 as e}from"./framework-d81ad7e5.js";const p={},o=e(`<p>rpm离线安装</p><p><code>https://mariadb.org/download/?t=repo-config&amp;d=CentOS+7&amp;v=10.4&amp;r_m=aliyun</code></p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 依赖包：</span>
jemalloc-3.6.0-1.el7.x86_64.rpm
jemalloc-devel-3.6.0-1.el7.x86_64.rpm
galera-4-26.4.4-1.rhel7.el7.centos.x86_64.rpm
<span class="token comment"># 核心包：</span>
MariaDB-client-10.4.24-1.el7.centos.x86_64.rpm
MariaDB-compat-10.4.24-1.el7.centos.x86_64.rpm
MariaDB-common-10.4.24-1.el7.centos.x86_64.rpm
MariaDB-server-10.4.24-1.el7.centos.x86_64.rpm 
</code></pre></div><div class="language-bash" data-ext="sh"><pre class="language-bash"><code>yum <span class="token function">install</span> <span class="token function">rsync</span> nmap <span class="token function">lsof</span> perl-DBI <span class="token function">nc</span>



<span class="token function">rpm</span> <span class="token parameter variable">-ivh</span> jemalloc-*


<span class="token function">rpm</span> <span class="token parameter variable">-ivh</span> jemalloc-3.6.0-1.el7.x86_64.rpm

<span class="token function">rpm</span> <span class="token parameter variable">-ivh</span> jemalloc-devel-3.6.0-1.el7.x86_64.rpm



<span class="token comment"># 卸载冲突的mariadb-libs</span>

<span class="token comment"># 先搜索</span>
<span class="token function">rpm</span> <span class="token parameter variable">-qa</span> <span class="token operator">|</span> <span class="token function">grep</span> mariadb-libs
<span class="token comment"># 后删除</span>
<span class="token function">rpm</span> <span class="token parameter variable">-ev</span> <span class="token parameter variable">--nodeps</span> mariadb-libs-5.5.35-3.el7.x86_64

<span class="token comment"># 安装galera环境</span>

<span class="token comment"># 依赖 boost_options </span>
 yum <span class="token function">install</span> boost-program-options
<span class="token function">rpm</span> <span class="token parameter variable">-ivh</span> galera-4-26.4.4-1.rhel7.el7.centos.x86_64.rpm



<span class="token function">rpm</span> <span class="token parameter variable">-ivh</span> MariaDB-common-10.4.24-1.el7.centos.x86_64.rpm MariaDB-compat-10.4.24-1.el7.centos.x86_64.rpm MariaDB-client-10.4.24-1.el7.centos.x86_64.rpm MariaDB-server-10.4.24-1.el7.centos.x86_64.rpm



<span class="token comment"># 启动mariadb</span>
<span class="token function">service</span> mariadb start
<span class="token comment"># 启动成功后运行如下命令进行安全配置</span>
mysql_secure_installation

systemctl start mariadb
</code></pre></div><h3 id="安全配置" tabindex="-1"><a class="header-anchor" href="#安全配置" aria-hidden="true">#</a> 安全配置</h3><ol><li>输入当前密码，初次安装后是没有密码的，直接回车</li><li>询问是否使用unix_socket进行身份验证：n</li><li>为root设置密码：y</li><li>输入root的新密码：root</li><li>确认输入root的新密码：root</li><li>是否移除匿名用户，这个随意，建议删除：y</li><li>拒绝用户远程登录，这个建议开启：n</li><li>删除test库，可以保留：n</li><li>重新加载权限表：y</li></ol><h4 id="配置远程连接" tabindex="-1"><a class="header-anchor" href="#配置远程连接" aria-hidden="true">#</a> 配置远程连接</h4><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 输入密码登录MariaDB控制台</span>
mysql <span class="token parameter variable">-u</span> root <span class="token parameter variable">-p</span> 
<span class="token comment"># 赋予root用户远程连接权限</span>
grant all privileges on *.* to <span class="token string">&#39;root&#39;</span>@<span class="token string">&#39;%&#39;</span> identified by <span class="token string">&#39;root&#39;</span><span class="token punctuation">;</span>
<span class="token comment"># 刷新</span>
flush privileges<span class="token punctuation">;</span>

</code></pre></div><h2 id="rpm-阿里云" tabindex="-1"><a class="header-anchor" href="#rpm-阿里云" aria-hidden="true">#</a> rpm 阿里云</h2><ul><li><code>https://mirrors.aliyun.com/mariadb/yum/10.4/centos7-amd64/rpms/</code></li><li><code>https://developer.aliyun.com/mirror/?spm=a2c6h.25603864.0.0.5f331e7ef4ODpN</code></li></ul><h2 id="mysql-install" tabindex="-1"><a class="header-anchor" href="#mysql-install" aria-hidden="true">#</a> mysql install</h2><ul><li>安装</li></ul><p>a.我们在安装mysql之前需要确认本机是否已经安装了mysql，使用命令</p><p><code>rpm -qa | grep mysql</code> 查看是否已经安装了mysql，另外还需要使用</p><p><code>rpm -qa|grep -i mariadb</code> 查看是否已经安装了Mariadb 的数据库版本。如果已安装的话，需要使用</p><p><code>yum -y remove</code> 命令进行卸载。接下来我们安装依赖包，使用</p><p><code>yum -y install make gcc-c++ cmake bison-devel ncurses-devel libaio libaio-devel</code> b.使用</p><p><code>tar -xvf mysql-8.0.16-2.el7.x86_64.rpm-bundle.tar</code> 进行解压，解压后的文件如下图所示。使用</p><p><code>rpm -ivh</code> 命令分别安装<code>common、libs、server、client</code>这四个包，注意common必须先安装，其次是libs。如果在安装时提示错误：</p><p>conflicts with file from package mariadb-libs-1:5.5.56-2.el7.x86_6 与mariadb冲突，使用如下命令，删除mariadb即可，如果没有提示错误则不用理会，正常安装即可；</p><p><code>rpm -e mariadb-libs-1:5.5.56-2.el7.x86_64 --nodeps</code></p><p>安装成功后使用</p><p><code>service mysqld start</code> 命令去启动mysql服务，此时会自动生成一个临时的密码，我们使用</p><p><code>grep &quot;A temporary password&quot; /var/log/mysqld.log</code> 查看这个临时密码，如下图所示<code>root@localhost</code>:后面的即为密码，我们将该密码复制用于登录，临时密码需要修改，否则将不能进行mysql的其他设置。使用</p><p><code>mysql -u root -p</code></p><p>因为上面的密码是临时密码，使用该密码不能进行任何修改mysql的操作，因此我们需要修改mysql的密码,但是在修改前我们需要，修改两个全局参数，因为我使用mysql仅仅是为了学习使用不需要设置很复杂的密码，但是mysql的安全策略要求我们密码等级不能过低；</p><p>首先，修改validate_password_policy参数的值</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code>mysql<span class="token operator">&gt;</span> <span class="token builtin class-name">set</span> global <span class="token assign-left variable">validate_password_policy</span><span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">;</span>
Query OK, <span class="token number">0</span> rows affected <span class="token punctuation">(</span><span class="token number">0.00</span> sec<span class="token punctuation">)</span>
<span class="token comment"># validate_password_length(密码长度)参数默认为8，我们修改为1</span>

mysql<span class="token operator">&gt;</span> <span class="token builtin class-name">set</span> global <span class="token assign-left variable">validate_password_length</span><span class="token operator">=</span><span class="token number">1</span><span class="token punctuation">;</span>
Query OK, <span class="token number">0</span> rows affected <span class="token punctuation">(</span><span class="token number">0.00</span> sec<span class="token punctuation">)</span>
<span class="token comment"># 完成之后再次执行修改密码语句即可成功</span>

mysql<span class="token operator">&gt;</span> alter user <span class="token string">&#39;root&#39;</span>@<span class="token string">&#39;localhost&#39;</span> identified by <span class="token string">&#39;123456&#39;</span><span class="token punctuation">;</span>
Query OK, <span class="token number">0</span> rows affected <span class="token punctuation">(</span><span class="token number">0.00</span> sec<span class="token punctuation">)</span>
<span class="token comment"># 授权远程访问</span>

grant all privileges on *.* to <span class="token string">&#39;root&#39;</span>@<span class="token string">&#39;%&#39;</span> identified by <span class="token string">&#39;123456&#39;</span> with grant option<span class="token punctuation">;</span>
<span class="token comment"># 最后我们平时使用MySQL数据库时是使用Navicat客户端远程连接，所以我们需要关闭linux的防火墙</span>

Systemctl stop firewalld
Systemctl disable firewalld
<span class="token comment"># 保证3306端口没有被关闭，可以进行远程连接。</span>
</code></pre></div>`,28),t=[o];function l(c,r){return n(),s("div",null,t)}const m=a(p,[["render",l],["__file","mariadb.html.vue"]]);export{m as default};
