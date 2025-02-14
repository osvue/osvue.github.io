import{_ as n,p as s,q as a,a1 as e}from"./framework-d81ad7e5.js";const t={},p=e(`<ul><li>Redis 在做 master-slave 的高可用方案时, 如果 master 宕机了, Redis 本身没有实现自动主备切换的特性, Sentinel 可以做到这一点</li><li>当 Sentinel 集群中多数 (如果节点数为 3, 这个阈值就应该是 2) Sentinel 都认为当前 master 故障</li><li>才会进行主备切换, 投票将剩下的备用节点中的其中一台提升为 master 节点, 并自动修改 redis.conf 配置文件, 使其余备用节点响应新的 master</li></ul><h3 id="配置哨兵" tabindex="-1"><a class="header-anchor" href="#配置哨兵" aria-hidden="true">#</a> 配置哨兵</h3><ol><li>占用 7501 ~ 7507 7 个端口 <ol><li>其中 7501 ~ 7504 4 个端口为 Redis Instance 集群</li><li>包含 1 主 3 从, 7505 ~ 7507 3 个端口为 Redis</li><li>Sentinel 集群 包含 1 主 2 从.</li></ol></li><li>在该目录下新建 7 个文件夹:</li></ol><p><code>mkdir /usr/local/redis-5.0.2-sentinel/{7501,7502,7503,7504,7505,7506,7507}</code></p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token punctuation">.</span><span class="token operator">/</span>redis<span class="token operator">-</span><span class="token number">5.0</span><span class="token number">.2</span><span class="token operator">-</span>sentinel<span class="token operator">/</span>
├── <span class="token number">7501</span>
│   └── redis<span class="token operator">-</span><span class="token number">7501</span><span class="token punctuation">.</span>conf
├── <span class="token number">7502</span>
│   └── redis<span class="token operator">-</span><span class="token number">7502</span><span class="token punctuation">.</span>conf
├── <span class="token number">7503</span>
│   └── redis<span class="token operator">-</span><span class="token number">7503</span><span class="token punctuation">.</span>conf
├── <span class="token number">7504</span>
│   └── redis<span class="token operator">-</span><span class="token number">7504</span><span class="token punctuation">.</span>conf
├── <span class="token number">7505</span>
│   └── sentinel<span class="token operator">-</span><span class="token number">7505</span><span class="token punctuation">.</span>conf
├── <span class="token number">7506</span>
│   └── sentinel<span class="token operator">-</span><span class="token number">7506</span><span class="token punctuation">.</span>conf
└── <span class="token number">7507</span>
    └── sentinel<span class="token operator">-</span><span class="token number">7507</span><span class="token punctuation">.</span>conf

</code></pre></div><h4 id="复制配置文件" tabindex="-1"><a class="header-anchor" href="#复制配置文件" aria-hidden="true">#</a> 复制配置文件</h4><div class="language-bash" data-ext="sh"><pre class="language-bash"><code>/usr/local/redis-5.0.2-sentinel/7501/redis-7501.conf,
 /usr/local/redis-5.0.2-sentinel/7502/redis-7502.conf,
  /usr/local/redis-5.0.2-sentinel/7503/redis-7503.conf, 
  /usr/local/redis-5.0.2-sentinel/7504/redis-7504.conf: 
<span class="token comment">#  依次从之前安装的 Redis 目录下拷贝 redis.conf 至 </span>
<span class="token function">cp</span> ./redis-5.0.2/redis.conf ./redis-5.0.2-sentinel/7501/redis-7501.conf
<span class="token function">cp</span> ./redis-5.0.2/redis.conf ./redis-5.0.2-sentinel/7502/redis-7502.conf
<span class="token function">cp</span> ./redis-5.0.2/redis.conf ./redis-5.0.2-sentinel/7503/redis-7503.conf
<span class="token function">cp</span> ./redis-5.0.2/redis.conf ./redis-5.0.2-sentinel/7504/redis-7504.conf

</code></pre></div><h4 id="依次更改配置文件-主要涉及端口-日志文件-工作目录等配置-以-7501-举例" tabindex="-1"><a class="header-anchor" href="#依次更改配置文件-主要涉及端口-日志文件-工作目录等配置-以-7501-举例" aria-hidden="true">#</a> 依次更改配置文件, 主要涉及端口, 日志文件, 工作目录等配置, 以 7501 举例:</h4><div class="language-conf" data-ext="conf"><pre class="language-conf"><code>port=7501
# 支持后台 (守护进程) 的方式运行
daemonize=yes
pidfile=/var/run/redis_7501.pid
# 需要注意的是: 如果设置成 ./redis-7501.log, 则实际日志文件的存放位置是相对路径, 相对的是你执行 redis-server &lt;the-path-of-config-file&gt; 命令的路径
logfile=&quot;/usr/local/redis-5.0.2-sentinel/7501/redis-7501.log&quot;
dir=&quot;/usr/local/redis-5.0.2-sentinel/7501&quot;
# 当前实例的密钥
requirepass=redis-cluster-pass
# master 节点的密钥, 由于要执行主备切换, requirepass 和 masterauth 应该一致
masterauth=redis-cluster-pass
appendonly=yes

</code></pre></div><h3 id="分别启动-4-个-redis-instance" tabindex="-1"><a class="header-anchor" href="#分别启动-4-个-redis-instance" aria-hidden="true">#</a> 分别启动 4 个 Redis Instance</h3><div class="language-bash" data-ext="sh"><pre class="language-bash"><code>redis-server /usr/local/redis-5.0.2-sentinel/7501/redis-7501.conf 
redis-server /usr/local/redis-5.0.2-sentinel/7502/redis-7502.conf 
redis-server /usr/local/redis-5.0.2-sentinel/7503/redis-7503.conf 
redis-server /usr/local/redis-5.0.2-sentinel/7504/redis-7504.conf 


</code></pre></div><h3 id="设置主从关系" tabindex="-1"><a class="header-anchor" href="#设置主从关系" aria-hidden="true">#</a> 设置主从关系</h3><ul><li><strong>也可以在 <code>redis-&lt;port&gt;.conf</code> 中通过 replicaof 配置:</strong></li></ul><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@VM-0-9-centos ~<span class="token punctuation">]</span><span class="token comment"># redis-cli -h 127.0.0.1 -p 7502</span>
<span class="token number">127.0</span>.0.1:750<span class="token operator"><span class="token file-descriptor important">2</span>&gt;</span> auth redis-cluster-pass
OK
<span class="token number">127.0</span>.0.1:750<span class="token operator"><span class="token file-descriptor important">2</span>&gt;</span> SLAVEOF <span class="token number">127.0</span>.0.1 <span class="token number">7501</span>
OK
<span class="token number">127.0</span>.0.1:750<span class="token operator"><span class="token file-descriptor important">2</span>&gt;</span> <span class="token builtin class-name">exit</span>
<span class="token punctuation">[</span>root@VM-0-9-centos ~<span class="token punctuation">]</span><span class="token comment"># redis-cli -h 127.0.0.1 -p 7503</span>
<span class="token number">127.0</span>.0.1:750<span class="token operator"><span class="token file-descriptor important">3</span>&gt;</span> auth redis-cluster-pass
OK
<span class="token number">127.0</span>.0.1:750<span class="token operator"><span class="token file-descriptor important">3</span>&gt;</span> SLAVEOF <span class="token number">127.0</span>.0.1 <span class="token number">7501</span>
OK
<span class="token number">127.0</span>.0.1:750<span class="token operator"><span class="token file-descriptor important">3</span>&gt;</span> <span class="token builtin class-name">exit</span>
<span class="token punctuation">[</span>root@VM-0-9-centos ~<span class="token punctuation">]</span><span class="token comment"># redis-cli -h 127.0.0.1 -p 7504</span>
<span class="token number">127.0</span>.0.1:750<span class="token operator"><span class="token file-descriptor important">4</span>&gt;</span> auth redis-cluster-pass
OK
<span class="token number">127.0</span>.0.1:750<span class="token operator"><span class="token file-descriptor important">4</span>&gt;</span> SLAVEOF <span class="token number">127.0</span>.0.1 <span class="token number">7501</span>
OK
<span class="token number">127.0</span>.0.1:750<span class="token operator"><span class="token file-descriptor important">4</span>&gt;</span> <span class="token builtin class-name">exit</span>
<span class="token punctuation">[</span>root@VM-0-9-centos ~<span class="token punctuation">]</span><span class="token comment"># </span>

</code></pre></div><h4 id="主从conf" tabindex="-1"><a class="header-anchor" href="#主从conf" aria-hidden="true">#</a> 主从conf</h4><div class="language-conf" data-ext="conf"><pre class="language-conf"><code># 修改为后台启动
daemonize yes
# 修改连接
【坑】: bind 127.0.0.1(删掉) ; 改为：bind 0.0.0.0 
# master节点的ip和端口号
slaveof &lt;masterip&gt; &lt;masterport&gt; 
# master节点的登录密码，若master节点没有密码，则不需要
masterauth &lt;master-password&gt;

</code></pre></div><h3 id="cli-登陆-master-节点-查看-redis-instance-状态" tabindex="-1"><a class="header-anchor" href="#cli-登陆-master-节点-查看-redis-instance-状态" aria-hidden="true">#</a> cli 登陆 master 节点, 查看 Redis Instance 状态:</h3><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@VM-0-9-centos redis-5.0.2-sentinel<span class="token punctuation">]</span><span class="token comment"># redis-cli -h 127.0.0.1 -p 7501</span>
<span class="token number">127.0</span>.0.1:750<span class="token operator"><span class="token file-descriptor important">1</span>&gt;</span> auth redis-cluster-pass
OK
<span class="token number">127.0</span>.0.1:750<span class="token operator"><span class="token file-descriptor important">1</span>&gt;</span> info replication
<span class="token comment"># Replication</span>
role:master
connected_slaves:3
slave0:ip<span class="token operator">=</span><span class="token number">127.0</span>.0.1,port<span class="token operator">=</span><span class="token number">7502</span>,state<span class="token operator">=</span>online,offset<span class="token operator">=</span><span class="token number">644</span>,lag<span class="token operator">=</span><span class="token number">1</span>
slave1:ip<span class="token operator">=</span><span class="token number">127.0</span>.0.1,port<span class="token operator">=</span><span class="token number">7503</span>,state<span class="token operator">=</span>online,offset<span class="token operator">=</span><span class="token number">644</span>,lag<span class="token operator">=</span><span class="token number">1</span>
slave2:ip<span class="token operator">=</span><span class="token number">127.0</span>.0.1,port<span class="token operator">=</span><span class="token number">7504</span>,state<span class="token operator">=</span>online,offset<span class="token operator">=</span><span class="token number">644</span>,lag<span class="token operator">=</span><span class="token number">1</span>
master_replid:6d8140a2963cbc57a7799c2300d9c08f125d4924
master_replid2:0000000000000000000000000000000000000000
master_repl_offset:644
second_repl_offset:-1
repl_backlog_active:1
repl_backlog_size:1048576
repl_backlog_first_byte_offset:1
repl_backlog_histlen:644
<span class="token number">127.0</span>.0.1:750<span class="token operator"><span class="token file-descriptor important">1</span>&gt;</span> 

</code></pre></div><h3 id="redis-sentinel-配置" tabindex="-1"><a class="header-anchor" href="#redis-sentinel-配置" aria-hidden="true">#</a> Redis Sentinel 配置</h3><ul><li>将之前安装文件夹下的 <code>sentinel.conf</code> 一次拷贝到 <code>/usr/local/redis-5.0.2-sentinel/7505/sentinel-7505.conf, /usr/local/redis-5.0.2-sentinel/7506/sentinel-7506.conf, /usr/local/redis-5.0.2-sentinel/7507/sentinel-7507.conf:</code></li></ul><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token function">cp</span> ./redis-5.0.2/sentinel.conf ./redis-5.0.2-sentinel/7505/sentinel-7505.conf
<span class="token function">cp</span> ./redis-5.0.2/sentinel.conf ./redis-5.0.2-sentinel/7506/sentinel-7506.conf
<span class="token function">cp</span> ./redis-5.0.2/sentinel.conf ./redis-5.0.2-sentinel/7507/sentinel-7507.conf
</code></pre></div><h4 id="修改配置文件-以-7505-为例" tabindex="-1"><a class="header-anchor" href="#修改配置文件-以-7505-为例" aria-hidden="true">#</a> 修改配置文件, 以 7505 为例</h4><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 需要在 Sentinel 的配置文件中指定 Sentinel 的密钥</span>
<span class="token comment"># 如果不做这个操作, 在 SpringBoot 集成的时候, Redis Instance 有密钥保护, 而 Redis Sentinel 没有: </span>
<span class="token comment">#   application.yml 如果不设置密钥, 会报错: NOAUTH Authentication required.</span>
<span class="token comment">#   application.yml 设置了密钥又囧报: ERR Client sent AUTH, but no password is set</span>
<span class="token assign-left variable">requirepass</span><span class="token operator">=</span><span class="token string">&quot;redis-cluster-pass&quot;</span>

<span class="token assign-left variable">port</span><span class="token operator">=</span><span class="token number">7505</span>
<span class="token assign-left variable">daemonize</span><span class="token operator">=</span>yes
<span class="token assign-left variable">pidfile</span><span class="token operator">=</span>/var/run/redis-sentinel-7505.pid
<span class="token assign-left variable">logfile</span><span class="token operator">=</span><span class="token string">&quot;/usr/local/redis-5.0.2-sentinel/7505/sentinel-7505.log&quot;</span>
<span class="token assign-left variable">dir</span><span class="token operator">=</span><span class="token string">&quot;/usr/local/redis-5.0.2-sentinel/7505&quot;</span>
<span class="token comment"># 默认将主节点设置为 7501, </span>
<span class="token comment">#   redis-5.0.2-master 是别名;</span>
<span class="token comment">#   2 表示只要有 2 个 Sentinel 赞同, 就执行故障转移 (主备切换), 这个数字不能大于 Sentinel 的个数</span>
<span class="token assign-left variable">sentinel</span><span class="token operator">=</span>monitor redis-5.0.2-master <span class="token number">127.0</span>.0.1 <span class="token number">7501</span> <span class="token number">2</span>
<span class="token comment"># 主节点的访问信息</span>
<span class="token assign-left variable">sentinel</span><span class="token operator">=</span>auth-pass redis-5.0.2-master redis-cluster-pass


</code></pre></div><h3 id="启动-3-个哨兵" tabindex="-1"><a class="header-anchor" href="#启动-3-个哨兵" aria-hidden="true">#</a> 启动 3 个哨兵</h3><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@VM-0-9-centos redis-5.0.2-sentinel<span class="token punctuation">]</span><span class="token comment"># redis-sentinel 7505/sentinel-7505.conf </span>
<span class="token punctuation">[</span>root@VM-0-9-centos redis-5.0.2-sentinel<span class="token punctuation">]</span><span class="token comment"># redis-sentinel 7506/sentinel-7506.conf </span>
<span class="token punctuation">[</span>root@VM-0-9-centos redis-5.0.2-sentinel<span class="token punctuation">]</span><span class="token comment"># redis-sentinel 7507/sentinel-7507.conf </span>
<span class="token punctuation">[</span>root@VM-0-9-centos redis-5.0.2-sentinel<span class="token punctuation">]</span><span class="token comment"># ps -ef | grep redis</span>
root      <span class="token number">6625</span>     <span class="token number">1</span>  <span class="token number">0</span> 01:09 ?        00:00:00 redis-server <span class="token number">0.0</span>.0.0:7501
root      <span class="token number">6644</span>     <span class="token number">1</span>  <span class="token number">0</span> 01:09 ?        00:00:00 redis-server <span class="token number">0.0</span>.0.0:7502
root      <span class="token number">6664</span>     <span class="token number">1</span>  <span class="token number">0</span> 01:09 ?        00:00:00 redis-server <span class="token number">0.0</span>.0.0:7503
root      <span class="token number">6677</span>     <span class="token number">1</span>  <span class="token number">0</span> 01:09 ?        00:00:00 redis-server <span class="token number">0.0</span>.0.0:7504
root      <span class="token number">7694</span>     <span class="token number">1</span>  <span class="token number">0</span> 01:15 ?        00:00:00 redis-sentinel *:7505 <span class="token punctuation">[</span>sentinel<span class="token punctuation">]</span>
root      <span class="token number">7714</span>     <span class="token number">1</span>  <span class="token number">0</span> 01:15 ?        00:00:00 redis-sentinel *:7506 <span class="token punctuation">[</span>sentinel<span class="token punctuation">]</span>
root      <span class="token number">7744</span>     <span class="token number">1</span>  <span class="token number">0</span> 01:15 ?        00:00:00 redis-sentinel *:7507 <span class="token punctuation">[</span>sentinel<span class="token punctuation">]</span>
root      <span class="token number">7841</span> <span class="token number">27334</span>  <span class="token number">0</span> 01:16 pts/0    00:00:00 <span class="token function">grep</span> <span class="token parameter variable">--color</span><span class="token operator">=</span>auto redis
<span class="token punctuation">[</span>root@VM-0-9-centos redis-5.0.2-sentinel<span class="token punctuation">]</span><span class="token comment">#</span>
</code></pre></div><h4 id="测试" tabindex="-1"><a class="header-anchor" href="#测试" aria-hidden="true">#</a> 测试</h4><ul><li><strong>登陆主节点, 设置一个 KeyValue, 可以看到从节点也有对应的记录 (默认主节点可读写, 从节点只可读):</strong></li></ul><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@VM-0-9-centos local<span class="token punctuation">]</span><span class="token comment"># redis-cli -h 127.0.0.1 -p 7501</span>
<span class="token number">127.0</span>.0.1:750<span class="token operator"><span class="token file-descriptor important">1</span>&gt;</span> auth  redis-cluster-pass
OK
<span class="token number">127.0</span>.0.1:750<span class="token operator"><span class="token file-descriptor important">1</span>&gt;</span> <span class="token builtin class-name">set</span> foo bar
OK
<span class="token number">127.0</span>.0.1:750<span class="token operator"><span class="token file-descriptor important">1</span>&gt;</span> <span class="token builtin class-name">exit</span>
<span class="token punctuation">[</span>root@VM-0-9-centos local<span class="token punctuation">]</span><span class="token comment"># redis-cli -h 127.0.0.1 -p 7503</span>
<span class="token number">127.0</span>.0.1:750<span class="token operator"><span class="token file-descriptor important">3</span>&gt;</span> get foo
<span class="token punctuation">(</span>error<span class="token punctuation">)</span> NOAUTH Authentication required.
<span class="token number">127.0</span>.0.1:750<span class="token operator"><span class="token file-descriptor important">3</span>&gt;</span> auth redis-cluster-pass
OK
<span class="token number">127.0</span>.0.1:750<span class="token operator"><span class="token file-descriptor important">3</span>&gt;</span> get foo
<span class="token string">&quot;bar&quot;</span>
<span class="token number">127.0</span>.0.1:750<span class="token operator"><span class="token file-descriptor important">3</span>&gt;</span> <span class="token builtin class-name">exit</span>
</code></pre></div><h4 id="kill-掉主节点试试" tabindex="-1"><a class="header-anchor" href="#kill-掉主节点试试" aria-hidden="true">#</a> kill 掉主节点试试</h4><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@VM-0-9-centos ~<span class="token punctuation">]</span><span class="token comment"># ps -ef | grep redis</span>
root      <span class="token number">6625</span>     <span class="token number">1</span>  <span class="token number">0</span> 01:09 ?        00:00:23 redis-server <span class="token number">0.0</span>.0.0:7501
root      <span class="token number">6644</span>     <span class="token number">1</span>  <span class="token number">0</span> 01:09 ?        00:00:22 redis-server <span class="token number">0.0</span>.0.0:7502
root      <span class="token number">6664</span>     <span class="token number">1</span>  <span class="token number">0</span> 01:09 ?        00:00:22 redis-server <span class="token number">0.0</span>.0.0:7503
root      <span class="token number">6677</span>     <span class="token number">1</span>  <span class="token number">0</span> 01:09 ?        00:00:22 redis-server <span class="token number">0.0</span>.0.0:7504
root      <span class="token number">7694</span>     <span class="token number">1</span>  <span class="token number">0</span> 01:15 ?        00:00:42 redis-sentinel *:7505 <span class="token punctuation">[</span>sentinel<span class="token punctuation">]</span>
root      <span class="token number">7714</span>     <span class="token number">1</span>  <span class="token number">0</span> 01:15 ?        00:00:42 redis-sentinel *:7506 <span class="token punctuation">[</span>sentinel<span class="token punctuation">]</span>
root      <span class="token number">7744</span>     <span class="token number">1</span>  <span class="token number">0</span> 01:15 ?        00:00:42 redis-sentinel *:7507 <span class="token punctuation">[</span>sentinel<span class="token punctuation">]</span>
root     <span class="token number">29385</span> <span class="token number">29280</span>  <span class="token number">0</span> 09:43 pts/0    00:00:00 <span class="token function">grep</span> <span class="token parameter variable">--color</span><span class="token operator">=</span>auto redis
<span class="token punctuation">[</span>root@VM-0-9-centos ~<span class="token punctuation">]</span><span class="token comment"># kill -9 6625</span>
<span class="token punctuation">[</span>root@VM-0-9-centos ~<span class="token punctuation">]</span><span class="token comment"># ps -ef | grep redis</span>
root      <span class="token number">6644</span>     <span class="token number">1</span>  <span class="token number">0</span> 01:09 ?        00:00:22 redis-server <span class="token number">0.0</span>.0.0:7502
root      <span class="token number">6664</span>     <span class="token number">1</span>  <span class="token number">0</span> 01:09 ?        00:00:22 redis-server <span class="token number">0.0</span>.0.0:7503
root      <span class="token number">6677</span>     <span class="token number">1</span>  <span class="token number">0</span> 01:09 ?        00:00:22 redis-server <span class="token number">0.0</span>.0.0:7504
root      <span class="token number">7694</span>     <span class="token number">1</span>  <span class="token number">0</span> 01:15 ?        00:00:42 redis-sentinel *:7505 <span class="token punctuation">[</span>sentinel<span class="token punctuation">]</span>
root      <span class="token number">7714</span>     <span class="token number">1</span>  <span class="token number">0</span> 01:15 ?        00:00:42 redis-sentinel *:7506 <span class="token punctuation">[</span>sentinel<span class="token punctuation">]</span>
root      <span class="token number">7744</span>     <span class="token number">1</span>  <span class="token number">0</span> 01:15 ?        00:00:42 redis-sentinel *:7507 <span class="token punctuation">[</span>sentinel<span class="token punctuation">]</span>
root     <span class="token number">30638</span> <span class="token number">29280</span>  <span class="token number">0</span> 09:50 pts/0    00:00:00 <span class="token function">grep</span> <span class="token parameter variable">--color</span><span class="token operator">=</span>auto redis
<span class="token punctuation">[</span>root@VM-0-9-centos ~<span class="token punctuation">]</span><span class="token comment"># redis-cli -h 127.0.0.1 -p 7502</span>
<span class="token number">127.0</span>.0.1:750<span class="token operator"><span class="token file-descriptor important">2</span>&gt;</span> auth redis-cluster-pass
OK
<span class="token number">127.0</span>.0.1:750<span class="token operator"><span class="token file-descriptor important">2</span>&gt;</span> info replication
<span class="token comment"># Replication</span>
role:slave
master_host:127.0.0.1
master_port:7504
master_link_status:up
master_last_io_seconds_ago:1
master_sync_in_progress:0
slave_repl_offset:6511835
slave_priority:100
slave_read_only:1
connected_slaves:0
master_replid:c60c6880cb9054c543a8472adf73432df74bf20b
master_replid2:aa1551df9635dcc155e510aaa6712cda6a7e7bff
master_repl_offset:6511835
second_repl_offset:6506247
repl_backlog_active:1
repl_backlog_size:1048576
repl_backlog_first_byte_offset:5463260
repl_backlog_histlen:1048576
<span class="token number">127.0</span>.0.1:750<span class="token operator"><span class="token file-descriptor important">2</span>&gt;</span> 
</code></pre></div><div class="language-yaml" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">spring</span><span class="token punctuation">:</span>
  <span class="token key atrule">redis</span><span class="token punctuation">:</span>
    <span class="token comment">#Redis 集群模式</span>
    <span class="token comment">#password: larry123456</span>
    <span class="token key atrule">cluster</span><span class="token punctuation">:</span>
      <span class="token key atrule">nodes</span><span class="token punctuation">:</span> 192.168.127.101<span class="token punctuation">:</span><span class="token number">6379</span><span class="token punctuation">,</span>192.168.127.102<span class="token punctuation">:</span><span class="token number">6379</span><span class="token punctuation">,</span>192.168.127.103<span class="token punctuation">:</span><span class="token number">6379</span>
      
    <span class="token comment">#Redis 哨兵模式</span>
    <span class="token comment">#password: larry123456</span>
    <span class="token comment">#sentinel:</span>
    <span class="token comment">#  master: larry-master</span>
    <span class="token comment">#  nodes: 192.168.127.130:26379,192.168.127.128:26379,192.168.127.129:26379</span>
    <span class="token key atrule">timeout</span><span class="token punctuation">:</span> <span class="token number">10000</span> <span class="token comment">#连接超时问题</span>

    <span class="token comment">#Redis 单机模式</span>
 <span class="token comment">#   host: 192.168.127.128</span>
 <span class="token comment">#   port: 6379</span>
 <span class="token comment">#   password: larry123456</span>
</code></pre></div><ul><li>看从节点信息 <code>127.0.0.1:6379&gt; info replication</code></li></ul><h3 id="redis集群" tabindex="-1"><a class="header-anchor" href="#redis集群" aria-hidden="true">#</a> redis集群</h3><h4 id="数据分片" tabindex="-1"><a class="header-anchor" href="#数据分片" aria-hidden="true">#</a> 数据分片</h4><ul><li>Redis 集群使用数据分片（sharding）而非一致性哈希（consistency hashing）来实现： 一个 Redis 集群包含 16384 个哈希槽（hash slot）</li><li>数据库中的每个键都属于这 16384 个哈希槽的其中一个， 集群使用公式 <code>CRC16(key) % 16384</code> 来计算键 key 属于哪个槽</li><li>其中 CRC16(key) 语句用于计算键 key 的 CRC16 校验和 。</li></ul><ul><li>集群中的每个节点负责处理一部分哈希槽。</li><li>举个例子， 一个集群可以有三个哈希槽， 其中： <ul><li>节点 A 负责处理 0 号至 5500 号哈希槽。</li><li>节点 B 负责处理 5501 号至 11000 号哈希槽。</li><li>节点 C 负责处理 11001 号至 16384 号哈希槽。</li></ul></li></ul><ol><li>按照Redis Cluster的哈希槽算法，<code>CRC16(&#39;my_name&#39;)%16384 = 2412</code> 那么这个key就被分配到了节点A上</li><li>同样的，当连接(A,B,C)的任意一个节点想获取my_name这个key,都会转到节点A上</li><li>如果用户将新节点 D 添加到集群中， 那么集群只需要将节点 A 、B 、 C 中的某些槽移动到节点 D 就可以了。</li></ol><ul><li>增加一个D节点的结果可能如下： <ul><li>节点A覆盖1365-5460</li><li>节点B覆盖6827-10922</li><li>节点C覆盖12288-16383</li><li>节点D覆盖0-1364,5461-6826,10923-1228</li></ul></li></ul><h2 id="搭建redis集群" tabindex="-1"><a class="header-anchor" href="#搭建redis集群" aria-hidden="true">#</a> 搭建Redis集群</h2><ul><li>要让集群正常工作至少需要3个主节点，在这里我们要创建6个redis节点</li><li>其中三个为主节点，三个为从节点，对应的redis节点的ip和端口对应关系如下</li></ul><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token number">127.0</span>.0.1:7000
<span class="token number">127.0</span>.0.1:7001
<span class="token number">127.0</span>.0.1:7002
<span class="token number">127.0</span>.0.1:7003
<span class="token number">127.0</span>.0.1:7004
<span class="token number">127.0</span>.0.1:7005

 
<span class="token comment"># 解压安装</span>
<span class="token function">tar</span> zxvf redis-3.2.9.tar.gz
<span class="token builtin class-name">cd</span> redis-3.2.9
<span class="token function">make</span> <span class="token operator">&amp;&amp;</span> <span class="token function">make</span> <span class="token assign-left variable">PREFIX</span><span class="token operator">=</span>/usr/local/redis <span class="token function">install</span>
<span class="token comment"># 这里如果失败的自行yum安装gcc和tcl</span>

yum <span class="token function">install</span> gcc
  yum <span class="token function">install</span> tcl

  
<span class="token comment"># 创建目录</span>
<span class="token builtin class-name">cd</span> /usr/local/redis
<span class="token function">mkdir</span> cluster
<span class="token builtin class-name">cd</span> cluster
<span class="token function">mkdir</span> <span class="token number">7000</span> <span class="token number">7001</span> <span class="token number">7002</span> <span class="token number">7003</span> <span class="token number">7004</span> <span class="token number">7005</span>
<span class="token comment"># 复制和修改配置文件</span>
<span class="token comment"># 将redis目录下的配置文件复制到对应端口文件夹下,6个文件夹都要复制一份</span>

<span class="token function">cp</span> redis-3.2.9/redis.conf /usr/local/redis/cluster/7000
<span class="token comment"># 修改配置文件redis.conf，将下面的选项修改</span>
</code></pre></div><h4 id="redis-conf-将下面的选项修改" tabindex="-1"><a class="header-anchor" href="#redis-conf-将下面的选项修改" aria-hidden="true">#</a> redis.conf，将下面的选项修改</h4><div class="language-conf" data-ext="conf"><pre class="language-conf"><code>


# 修改为后台启动
daemonize yes
# 修改端口号
port 8001
# 指定数据文件存储位置
dir /usr/local/redis-app/8001/
# 开启集群模式
cluster-enabled yes
# 集群节点信息文件配置
cluster-config-file nodes-8001.conf
# 集群节点超时间
cluster-node-timeout 15000
# 去掉bind绑定地址
# bind 127.0.0.1 -::1 (这里没写错就是家#注释掉bind配置)
# 关闭保护模式
protected-mode no
# 开启aof模式持久化
appendonly yes
# 设置连接Redis需要密码123（选配）
requirepass 123456
# 设置Redis节点与节点之间访问需要密码123（选配）
masterauth 123456






# 端口号
port 7000
# 后台启动
daemonize yes
# 开启集群
cluster-enabled yes
#集群节点配置文件
cluster-config-file nodes-7000.conf
# 集群连接超时时间
cluster-node-timeout 5000
# 进程pid的文件位置
pidfile /var/run/redis-7000.pid
# 开启aof
appendonly yes
# aof文件路径
appendfilename &quot;appendonly-7005.aof&quot;
# rdb文件路径
dbfilename dump-7000.rdb
</code></pre></div><h4 id="创建脚本" tabindex="-1"><a class="header-anchor" href="#创建脚本" aria-hidden="true">#</a> 创建脚本</h4><ul><li>修改完毕后，逐个启动Reids服务，启动成功后我们可以从<code>ps -ef</code>中看到启动的Redis进程于普通的Redis进程不同之处在于后面的<code>[cluster]</code>表示当前进程是集群模式启动的</li></ul><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 创建启动脚本</span>
<span class="token comment"># 在/usr/local/redis目录下创建一个start.sh</span>

<span class="token comment">#!/bin/bash</span>
bin/redis-server    cluster/7000/redis.conf
bin/redis-server    cluster/7001/redis.conf
bin/redis-server    cluster/7002/redis.conf
bin/redis-server    cluster/7003/redis.conf
bin/redis-server    cluster/7004/redis.conf
bin/redis-server    cluster/7005/redis.conf
</code></pre></div><ul><li><strong>在任意一台机器上执行如下命令，即可创建集群，执行如下命令后Redis会随机分配主从机器，并且在分配的时Redis是不会让主节点与从节点在同一台机器上的</strong></li></ul><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># -a 密码认证，若没写密码无效带这个参数</span>
<span class="token comment"># --cluster create 创建集群实例列表 IP:PORT IP:PORT IP:PORT</span>
<span class="token comment"># --cluster-replicas 复制因子1（即每个主节点需1个从节点）</span>
./bin/redis-cli <span class="token parameter variable">-a</span> <span class="token number">123456</span> <span class="token parameter variable">--cluster</span> create --cluster-replicas <span class="token number">1</span> <span class="token number">192.168</span>.100.101:8001 <span class="token number">192.168</span>.100.101:8002 <span class="token number">192.168</span>.100.102:8003 <span class="token number">192.168</span>.100.102:8004 <span class="token number">192.168</span>.100.103:8005 <span class="token number">192.168</span>.100.103:8006

<span class="token punctuation">;</span> 执行命令后会让你确认配置，输入yes确认
</code></pre></div><ul><li><strong>集群验证</strong></li></ul><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># -a 密码认证</span>
<span class="token comment"># -c 连接集群</span>
<span class="token comment"># -h 集群中任意一个Redis节点IP</span>
<span class="token comment"># -p 集群中任意一个Redis节点端口</span>
./bin/redis-cli <span class="token parameter variable">-a</span> <span class="token number">123456</span> <span class="token parameter variable">-c</span> <span class="token parameter variable">-h</span> <span class="token number">192.168</span>.100.101 <span class="token parameter variable">-p</span> <span class="token number">8001</span>


<span class="token comment"># 登录redis-cli后执行如下命令</span>
CLUSTER INFO
</code></pre></div><h3 id="redis-conf配置文件备注" tabindex="-1"><a class="header-anchor" href="#redis-conf配置文件备注" aria-hidden="true">#</a> redis.conf配置文件备注</h3><div class="language-conf" data-ext="conf"><pre class="language-conf"><code># redis进程是否以守护进程的方式运行，yes为是，no为否(不以守护进程的方式运行会占用一个终端)。 
daemonize no 
# 指定redis进程的PID文件存放位置 
pidfile /var/run/redis.pid 
# redis进程的端口号 
port 6379 
#是否开启保护模式，默认开启。要是配置里没有指定bind和密码。开启该参数后，redis只会本地进行访问，拒绝外部访问。要是开启了密码和bind，可以开启。否则最好关闭设置为no。 
protected-mode yes 
# 绑定的主机地址 
bind 127.0.0.1 
# 客户端闲置多长时间后关闭连接，默认此参数为0即关闭此功能 
timeout 300 
# redis日志级别，可用的级别有debug.verbose.notice.warning 
loglevel verbose 
# log文件输出位置，如果进程以守护进程的方式运行，此处又将输出文件设置为stdout的话，就会将日志信息输出到/dev/null里面去了 
logfile stdout 
# 设置数据库的数量，默认为0可以使用select &lt;dbid&gt;命令在连接上指定数据库id 
databases 16 
# 指定在多少时间内刷新次数达到多少的时候会将数据同步到数据文件 
save &lt;seconds&gt; &lt;changes&gt; 
# 指定存储至本地数据库时是否压缩文件，默认为yes即启用存储 
rdbcompression yes 
# 指定本地数据库文件名 
dbfilename dump.db 
# 指定本地数据问就按存放位置 
dir ./ 
# 指定当本机为slave服务时，设置master服务的IP地址及端口，在redis启动的时候他会自动跟master进行数据同步 
slaveof &lt;masterip&gt; &lt;masterport&gt; 
# 当master设置了密码保护时，slave服务连接master的密码 
masterauth &lt;master-password&gt; 
# 设置redis连接密码，如果配置了连接密码，客户端在连接redis是需要通过AUTH&lt;password&gt;命令提供密码，默认关闭 
requirepass footbared 
# 设置同一时间最大客户连接数，默认无限制。redis可以同时连接的客户端数为redis程序可以打开的最大文件描述符，如果设置 maxclients 0，表示不作限制。当客户端连接数到达限制时，Redis会关闭新的连接并向客户端返回 max number of clients reached 错误信息 
maxclients 128 
# 指定Redis最大内存限制，Redis在启动时会把数据加载到内存中，达到最大内存后，Redis会先尝试清除已到期或即将到期的Key。当此方法处理后，仍然到达最大内存设置，将无法再进行写入操作，但仍然可以进行读取操作。Redis新的vm机制，会把Key存放内存，Value会存放在swap区 
maxmemory&lt;bytes&gt; 
# 指定是否在每次更新操作后进行日志记录，Redis在默认情况下是异步的把数据写入磁盘，如果不开启，可能会在断电时导致一段时间内的数据丢失。因为redis本身同步数据文件是按上面save条件来同步的，所以有的数据会在一段时间内只存在于内存中。默认为no。 
appendonly no 
# 指定跟新日志文件名默认为appendonly.aof 
appendfilename appendonly.aof 
# 指定更新日志的条件，有三个可选参数 - no：表示等操作系统进行数据缓存同步到磁盘(快)，always：表示每次更新操作后手动调用fsync()将数据写到磁盘(慢，安全)， everysec：表示每秒同步一次(折衷，默认值)； 
appendfsync everysec 
</code></pre></div>`,52),o=[p];function r(l,c){return s(),a("div",null,o)}const u=n(t,[["render",r],["__file","cluster.html.vue"]]);export{u as default};
