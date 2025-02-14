import{_ as s,p as a,q as n,a1 as e}from"./framework-d81ad7e5.js";const t={},o=e(`<h3 id="_1、基础设置准备" tabindex="-1"><a class="header-anchor" href="#_1、基础设置准备" aria-hidden="true">#</a> 1、基础设置准备</h3><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token comment">#操作系统：</span>
centos6.5
<span class="token comment">#mysql版本：</span>
<span class="token number">5.7</span>
<span class="token comment">#两台虚拟机：</span>
node1:192.168.85.111（主）
node2:192.168.85.112（从）
</code></pre></div><h3 id="_2、安装mysql数据库" tabindex="-1"><a class="header-anchor" href="#_2、安装mysql数据库" aria-hidden="true">#</a> 2、安装mysql数据库</h3><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token comment">#详细安装和卸载的步骤参考对应的文档</span>
</code></pre></div><h3 id="_3、在两台数据库中分别创建数据库" tabindex="-1"><a class="header-anchor" href="#_3、在两台数据库中分别创建数据库" aria-hidden="true">#</a> 3、在两台数据库中分别创建数据库</h3><div class="language-sql" data-ext="sql"><pre class="language-sql"><code><span class="token comment">--注意两台必须全部执行</span>
<span class="token keyword">create</span> <span class="token keyword">database</span> zbc<span class="token punctuation">;</span>
</code></pre></div><h3 id="_4、在主-node1-服务器进行如下配置" tabindex="-1"><a class="header-anchor" href="#_4、在主-node1-服务器进行如下配置" aria-hidden="true">#</a> 4、在主（node1）服务器进行如下配置：</h3><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token comment">#修改配置文件，执行以下命令打开mysql配置文件</span>
<span class="token function">vi</span> /etc/my.cnf
<span class="token comment">#在mysqld模块中添加如下配置信息</span>
log-bin<span class="token operator">=</span>master-bin <span class="token comment">#二进制文件名称</span>
binlog-format<span class="token operator">=</span>ROW  <span class="token comment">#二进制日志格式，有row、statement、mixed三种格式，row指的是把改变的内容复制过去，而不是把命令在从服务器上执行一遍，statement指的是在主服务器上执行的SQL语句，在从服务器上执行同样的语句。MySQL默认采用基于语句的复制，效率比较高。mixed指的是默认采用基于语句的复制，一旦发现基于语句的无法精确的复制时，就会采用基于行的复制。</span>
server-id<span class="token operator">=</span><span class="token number">1</span>		   <span class="token comment">#要求各个服务器的id必须不一样</span>
binlog-do-db<span class="token operator">=</span>zbc   <span class="token comment">#同步的数据库名称</span>
</code></pre></div><h3 id="_5、配置从服务器登录主服务器的账号授权" tabindex="-1"><a class="header-anchor" href="#_5、配置从服务器登录主服务器的账号授权" aria-hidden="true">#</a> 5、配置从服务器登录主服务器的账号授权</h3><div class="language-sql" data-ext="sql"><pre class="language-sql"><code><span class="token comment">--授权操作</span>
<span class="token keyword">set</span> <span class="token keyword">global</span> validate_password_policy<span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">;</span>
<span class="token keyword">set</span> <span class="token keyword">global</span> validate_password_length<span class="token operator">=</span><span class="token number">1</span><span class="token punctuation">;</span>
<span class="token keyword">grant</span> <span class="token keyword">replication</span> slave <span class="token keyword">on</span> <span class="token operator">*</span><span class="token punctuation">.</span><span class="token operator">*</span> <span class="token keyword">to</span> <span class="token string">&#39;root&#39;</span><span class="token variable">@&#39;%&#39;</span> identified <span class="token keyword">by</span> <span class="token string">&#39;123456&#39;</span><span class="token punctuation">;</span>
<span class="token comment">--刷新权限</span>
flush <span class="token keyword">privileges</span><span class="token punctuation">;</span>
</code></pre></div><h3 id="_6、从服务器的配置" tabindex="-1"><a class="header-anchor" href="#_6、从服务器的配置" aria-hidden="true">#</a> 6、从服务器的配置</h3><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token comment">#修改配置文件，执行以下命令打开mysql配置文件</span>
<span class="token function">vi</span> /etc/my.cnf
<span class="token comment">#在mysqld模块中添加如下配置信息</span>
log-bin<span class="token operator">=</span>master-bin	<span class="token comment">#二进制文件的名称</span>
binlog-format<span class="token operator">=</span>ROW	<span class="token comment">#二进制文件的格式</span>
server-id<span class="token operator">=</span><span class="token number">2</span>			<span class="token comment">#服务器的id</span>
</code></pre></div><h3 id="_7、重启主服务器的mysqld服务" tabindex="-1"><a class="header-anchor" href="#_7、重启主服务器的mysqld服务" aria-hidden="true">#</a> 7、重启主服务器的mysqld服务</h3><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token comment">#重启mysql服务</span>
<span class="token function">service</span> mysqld restart
<span class="token comment">#登录mysql数据库</span>
mysql <span class="token parameter variable">-uroot</span> <span class="token parameter variable">-p</span>
<span class="token comment">#查看master的状态</span>
show master status；
</code></pre></div><h3 id="_8、重启从服务器并进行相关配置" tabindex="-1"><a class="header-anchor" href="#_8、重启从服务器并进行相关配置" aria-hidden="true">#</a> 8、重启从服务器并进行相关配置</h3><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token comment">#重启mysql服务</span>
<span class="token function">service</span> mysqld restart
<span class="token comment">#登录mysql</span>
mysql <span class="token parameter variable">-uroot</span> <span class="token parameter variable">-p</span>
<span class="token comment">#连接主服务器</span>
change master to <span class="token assign-left variable">master_host</span><span class="token operator">=</span><span class="token string">&#39;192.168.85.11&#39;</span>,master_user<span class="token operator">=</span><span class="token string">&#39;root&#39;</span>,master_password<span class="token operator">=</span><span class="token string">&#39;123456&#39;</span>,master_port<span class="token operator">=</span><span class="token number">3306</span>,master_log_file<span class="token operator">=</span><span class="token string">&#39;master-bin.000001&#39;</span>,master_log_pos<span class="token operator">=</span><span class="token number">154</span><span class="token punctuation">;</span>
<span class="token comment">#启动slave</span>
start slave
<span class="token comment">#查看slave的状态</span>
show slave status<span class="token punctuation">\\</span>G<span class="token punctuation">(</span>注意没有分号<span class="token punctuation">)</span>
</code></pre></div><h3 id="_9、此时可以在主服务器进行相关的数据添加删除工作-在从服务器看相关的状态" tabindex="-1"><a class="header-anchor" href="#_9、此时可以在主服务器进行相关的数据添加删除工作-在从服务器看相关的状态" aria-hidden="true">#</a> 9、此时可以在主服务器进行相关的数据添加删除工作，在从服务器看相关的状态</h3>`,17),p=[o];function c(l,r){return a(),n("div",null,p)}const i=s(t,[["render",c],["__file","mysqlb_zcb.html.vue"]]);export{i as default};
