import{_ as a,p as n,q as s,a1 as t}from"./framework-d81ad7e5.js";const p="/assets/1-bb59d171.png",e="/assets/2-e2318c5a.png",o="/assets/3-a0a85375.png",c="/assets/4-de3e8844.png",l="/assets/5-e8cb1ad2.png",u="/assets/6-ae68b2e2.png",k="/assets/7-69ccdf27.png",r="/assets/8-6a9cb427.png",i="/assets/9-0f56c92e.png",d="/assets/10-bbb6f954.png",g="/assets/11-ddcb75ea.png",m="/assets/12-3e828fc2.png",b="/assets/13-7150b084.png",v="/assets/14-0b4152b8.png",h="/assets/15-edabb73d.png",y="/assets/16-0f981985.png",f="/assets/17-cd1723e6.png",q="/assets/18-1daa11ad.png",x="/assets/20-0d2e6c2a.png",_="/assets/19-e8a9ceb6.png",w="/assets/21-dd8daa0c.png",I="/assets/22-65ec4198.png",T="/assets/23-a931dd45.png",D="/assets/24-74a7a783.png",N="/assets/25-de4c177e.png",E="/assets/26-a4f28acc.png",A="/assets/27-667ff81d.png",M="/assets/29-bc1906e5.png",S="/assets/30-c632e860.png",j="/assets/31-bf16e8fc.png",R="/assets/32-d82d3d5c.png",O="/assets/33-f6128e0c.png",U="/assets/34-892726cf.png",C="/assets/35-623a2e86.png",P="/assets/36-4db39078.png",L="/assets/37-4295371e.png",z="/assets/38-7798cc85.png",F="/assets/39-03b6e9d9.png",H="/assets/40-5c3aeed6.png",B="/assets/41-44a7844d.png",Y="/assets/42-b76772f3.png",V="/assets/43-3887f0a2.png",G="/assets/44-6186d49c.png",X="/assets/45-80f8bb5b.png",$="/assets/46-89bdfaeb.png",J="/assets/47-ee524a66.png",W="/assets/48-3e9be825.png",K="/assets/49-f4e6f688.png",Q="/assets/50-070475c9.png",Z="/assets/51-e457cbc9.png",aa="/assets/52-80a497b9.png",na="/assets/53-2a03a3a7.png",sa="/assets/54-1933a350.png",ta="/assets/71-20813a34.png",pa="/assets/72-7b667669.png",ea="/assets/73-16a1e1ee.png",oa={},ca=t(`<h3 id="一、docker复杂安装" tabindex="-1"><a class="header-anchor" href="#一、docker复杂安装" aria-hidden="true">#</a> 一、Docker复杂安装</h3><h4 id="_1-1-安装mysql主从复制" tabindex="-1"><a class="header-anchor" href="#_1-1-安装mysql主从复制" aria-hidden="true">#</a> 1.1 安装mysql主从复制</h4><h5 id="_1-1-1-主从复制原理" tabindex="-1"><a class="header-anchor" href="#_1-1-1-主从复制原理" aria-hidden="true">#</a> 1.1.1 主从复制原理</h5><div class="language-properties" data-ext="properties"><pre class="language-properties"><code>默认你已经了解
</code></pre></div><h5 id="_1-1-2-主从搭建步骤" tabindex="-1"><a class="header-anchor" href="#_1-1-2-主从搭建步骤" aria-hidden="true">#</a> 1.1.2 主从搭建步骤</h5><blockquote><p>1、新建主服务器容器实例3307</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> run <span class="token parameter variable">-p</span> <span class="token number">3307</span>:3306 <span class="token parameter variable">--name</span> mysql-master <span class="token punctuation">\\</span> 
<span class="token parameter variable">-v</span> /mydata/mysql-master/log:/var/log/mysql <span class="token punctuation">\\</span> 
<span class="token parameter variable">-v</span> /mydata/mysql-master/data:/var/lib/mysql <span class="token punctuation">\\</span> 
<span class="token parameter variable">-v</span> /mydata/mysql-master/conf:/etc/mysql <span class="token punctuation">\\</span> 
<span class="token parameter variable">-e</span> <span class="token assign-left variable">MYSQL_ROOT_PASSWORD</span><span class="token operator">=</span>root  <span class="token punctuation">\\</span> 
<span class="token parameter variable">-d</span> mysql:5.7 
</code></pre></div><p>2、进入/mydata/mysql-master/conf目录下新建my.cnf</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>mysqld<span class="token punctuation">]</span> 
<span class="token comment">## 设置server_id，同一局域网中需要唯一 </span>
<span class="token assign-left variable">server_id</span><span class="token operator">=</span><span class="token number">101</span>  
<span class="token comment">## 指定不需要同步的数据库名称 </span>
binlog-ignore-db<span class="token operator">=</span>mysql   
<span class="token comment">## 开启二进制日志功能 </span>
log-bin<span class="token operator">=</span>mall-mysql-bin   
<span class="token comment">## 设置二进制日志使用内存大小（事务） </span>
<span class="token assign-left variable">binlog_cache_size</span><span class="token operator">=</span>1M   
<span class="token comment">## 设置使用的二进制日志格式（mixed,statement,row） </span>
<span class="token assign-left variable">binlog_format</span><span class="token operator">=</span>mixed   
<span class="token comment">## 二进制日志过期清理时间。默认值为0，表示不自动清理。 </span>
<span class="token assign-left variable">expire_logs_days</span><span class="token operator">=</span><span class="token number">7</span>   
<span class="token comment">## 跳过主从复制中遇到的所有错误或指定类型的错误，避免slave端复制中断。 </span>
<span class="token comment">## 如：1062错误是指一些主键重复，1032错误是因为主从数据库数据不一致 </span>
<span class="token assign-left variable">slave_skip_errors</span><span class="token operator">=</span><span class="token number">1062</span> 
<span class="token comment">## 设置utf8</span>
collation_server <span class="token operator">=</span> utf8_general_ci 
<span class="token comment">## 设置server字符集</span>
character_set_server <span class="token operator">=</span> utf8 
<span class="token punctuation">[</span>client<span class="token punctuation">]</span>
<span class="token assign-left variable">default_character_set</span><span class="token operator">=</span>utf8 
</code></pre></div><p>3、修改完配置后重启master实例</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> restart mysql-master
</code></pre></div><p>4、进入mysql-master容器</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> <span class="token builtin class-name">exec</span> <span class="token parameter variable">-it</span> mysql-master /bin/bash

mysql <span class="token parameter variable">-uroot</span> <span class="token parameter variable">-proot</span>
</code></pre></div><p>5、maser容器实例内创建数据同步用户</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 创建同步用户</span>
CREATE <span class="token environment constant">USER</span> <span class="token string">&#39;slave&#39;</span>@<span class="token string">&#39;%&#39;</span> IDENTIFIED BY <span class="token string">&#39;123456&#39;</span><span class="token punctuation">;</span>

<span class="token comment"># 同步用户授权</span>
GRANT REPLICATION SLAVE, REPLICATION CLIENT ON *.* TO <span class="token string">&#39;slave&#39;</span>@<span class="token string">&#39;%&#39;</span><span class="token punctuation">;</span>
</code></pre></div><p>6、新建从服务容器实例3308</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> run <span class="token parameter variable">-p</span> <span class="token number">3308</span>:3306 <span class="token parameter variable">--name</span> mysql-slave <span class="token punctuation">\\</span> 
<span class="token parameter variable">-v</span> /mydata/mysql-slave/log:/var/log/mysql <span class="token punctuation">\\</span> 
<span class="token parameter variable">-v</span> /mydata/mysql-slave/data:/var/lib/mysql <span class="token punctuation">\\</span> 
<span class="token parameter variable">-v</span> /mydata/mysql-slave/conf:/etc/mysql <span class="token punctuation">\\</span> 
<span class="token parameter variable">-e</span> <span class="token assign-left variable">MYSQL_ROOT_PASSWORD</span><span class="token operator">=</span>root  <span class="token punctuation">\\</span> 
<span class="token parameter variable">-d</span> mysql:5.7 
</code></pre></div><p>7、进入/mydata/mysql-slave/conf目录下新建my.cnf</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 添加配置文件</span>
<span class="token punctuation">[</span>mysqld<span class="token punctuation">]</span> 
<span class="token comment">## 设置server_id，同一局域网中需要唯一 </span>
<span class="token assign-left variable">server_id</span><span class="token operator">=</span><span class="token number">102</span> 
<span class="token comment">## 指定不需要同步的数据库名称 </span>
binlog-ignore-db<span class="token operator">=</span>mysql   
<span class="token comment">## 开启二进制日志功能，以备Slave作为其它数据库实例的Master时使用 </span>
log-bin<span class="token operator">=</span>mall-mysql-slave1-bin   
<span class="token comment">## 设置二进制日志使用内存大小（事务） </span>
<span class="token assign-left variable">binlog_cache_size</span><span class="token operator">=</span>1M   
<span class="token comment">## 设置使用的二进制日志格式（mixed,statement,row） </span>
<span class="token assign-left variable">binlog_format</span><span class="token operator">=</span>mixed   
<span class="token comment">## 二进制日志过期清理时间。默认值为0，表示不自动清理。 </span>
<span class="token assign-left variable">expire_logs_days</span><span class="token operator">=</span><span class="token number">7</span>   
<span class="token comment">## 跳过主从复制中遇到的所有错误或指定类型的错误，避免slave端复制中断。 </span>
<span class="token comment">## 如：1062错误是指一些主键重复，1032错误是因为主从数据库数据不一致 </span>
<span class="token assign-left variable">slave_skip_errors</span><span class="token operator">=</span><span class="token number">1062</span>   
<span class="token comment">## relay_log配置中继日志 </span>
<span class="token assign-left variable">relay_log</span><span class="token operator">=</span>mall-mysql-relay-bin   
<span class="token comment">## log_slave_updates表示slave将复制事件写进自己的二进制日志 </span>
<span class="token assign-left variable">log_slave_updates</span><span class="token operator">=</span><span class="token number">1</span>   
<span class="token comment">## slave设置为只读（具有super权限的用户除外） </span>
<span class="token assign-left variable">read_only</span><span class="token operator">=</span><span class="token number">1</span> 
<span class="token comment">## 设置utf8</span>
collation_server <span class="token operator">=</span> utf8_general_ci 
<span class="token comment">## 设置server字符集</span>
character_set_server <span class="token operator">=</span> utf8 
<span class="token punctuation">[</span>client<span class="token punctuation">]</span>
<span class="token assign-left variable">default_character_set</span><span class="token operator">=</span>utf8 
</code></pre></div><p>8、修改完配置后重启slave实例</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> restart mysql-slave
</code></pre></div><p>9、在主数据库中查看主从同步状态</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code>show master status<span class="token punctuation">;</span>
</code></pre></div><p>10、进入mysql-slave容器</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> <span class="token builtin class-name">exec</span> <span class="token parameter variable">-it</span> mysql-slave /bin/bash
mysql <span class="token parameter variable">-uroot</span> <span class="token parameter variable">-proot</span>
</code></pre></div><p>11、在从数据库中配置主从复制</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code>change master to <span class="token assign-left variable">master_host</span><span class="token operator">=</span><span class="token string">&#39;宿主机ip&#39;</span>, <span class="token assign-left variable">master_user</span><span class="token operator">=</span><span class="token string">&#39;slave&#39;</span>, <span class="token assign-left variable">master_password</span><span class="token operator">=</span><span class="token string">&#39;123456&#39;</span>, <span class="token assign-left variable">master_port</span><span class="token operator">=</span><span class="token number">3307</span>, <span class="token assign-left variable">master_log_file</span><span class="token operator">=</span><span class="token string">&#39;mall-mysql-bin.000001&#39;</span>, <span class="token assign-left variable">master_log_pos</span><span class="token operator">=</span><span class="token number">617</span>, <span class="token assign-left variable">master_connect_retry</span><span class="token operator">=</span><span class="token number">30</span><span class="token punctuation">;</span> 
</code></pre></div></blockquote><p><img src="`+p+`" alt="1"></p><blockquote><p>12、在从数据库中查看主从同步状态</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code>show slave status<span class="token punctuation">\\</span>G<span class="token punctuation">;</span>
</code></pre></div><p>13、在从数据库中开启主从同步</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code>start slave<span class="token punctuation">;</span>
</code></pre></div><p>14、查看从数据库状态发现已经同步</p></blockquote><p><img src="`+e+`" alt="2"></p><blockquote><p>15、主从复制测试</p><div class="language-properties" data-ext="properties"><pre class="language-properties"><code><span class="token key attr-name">1.主机新建数据库</span> <span class="token value attr-value">---&gt;  使用数据库 ---&gt; 新建表 ---&gt;插入数据 ， ok</span>
<span class="token key attr-name">2.从机使用库</span> <span class="token value attr-value">---&gt; 查看记录 ok</span>
</code></pre></div></blockquote><h4 id="_1-2-安装redis集群-大厂面试题第4季-分布式存储案例真题" tabindex="-1"><a class="header-anchor" href="#_1-2-安装redis集群-大厂面试题第4季-分布式存储案例真题" aria-hidden="true">#</a> 1.2 安装redis集群(大厂面试题第4季-分布式存储案例真题)</h4><h5 id="_1-2-1-cluster-集群-模式-docker版哈希槽分区进行亿级数据存储" tabindex="-1"><a class="header-anchor" href="#_1-2-1-cluster-集群-模式-docker版哈希槽分区进行亿级数据存储" aria-hidden="true">#</a> 1.2.1 cluster(集群)模式-docker版哈希槽分区进行亿级数据存储</h5><blockquote><p>一、面试题</p><p>问题：1~2亿条数据需要缓存，请问如何设计这个存储案例</p><p>回答：单机单台100%不可能，肯定是分布式存储，用redis如何落地？</p><p>上述问题阿里P6~P7工程案例和场景设计类必考题目， 一般业界有3种解决方案</p><ol><li>哈希取余分区</li></ol><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token number">2</span>亿条记录就是2亿个k,v，我们单机不行必须要分布式多机，假设有3台机器构成一个集群，用户每次读写操作都是根据公式：
hash<span class="token punctuation">(</span>key<span class="token punctuation">)</span> % N个机器台数，计算出哈希值，用来决定数据映射到哪一个节点上。 

优点：
  简单粗暴，直接有效，只需要预估好数据规划好节点，例如3台、8台、10台，就能保证一段时间的数据支撑。使用Hash算法让固定的一部分请求落到同一台服务器上，这样每台服务器固定处理一部分请求（并维护这些请求的信息），起到负载均衡+分而治之的作用。 
  
缺点：
   原来规划好的节点，进行扩容或者缩容就比较麻烦了额，不管扩缩，每次数据变动导致节点有变动，映射关系需要重新进行计算，在服务器个数固定不变时没有问题，如果需要弹性扩容或故障停机的情况下，原来的取模公式就会发生变化：Hash<span class="token punctuation">(</span>key<span class="token punctuation">)</span>/3会变成Hash<span class="token punctuation">(</span>key<span class="token punctuation">)</span> /?。此时地址经过取余运算的结果将发生很大变化，根据公式获取的服务器也会变得不可控。 
某个redis机器宕机了，由于台数数量变化，会导致hash取余全部数据重新洗牌。 

</code></pre></div><ol start="2"><li>一致性哈希算法分区</li></ol><p>1、是什么 一致性Hash算法背景 　一致性哈希算法在1997年由麻省理工学院中提出的，设计目标是为了解决 分布式缓存数据 变动和映射问题 ，某个机器宕机了，分母数量改变了，自然取余数不OK了。 2、能干什么 提出一致性Hash解决方案。目的是当服务器个数发生变动时，尽量减少影响客户端到服务器的映射关系。 3、3大步骤 【算法构建一致性哈希环】 一致性哈希算法必然有个hash函数并按照算法产生hash值，这个算法的所有可能哈希值会构成一个全量集，这个集合可以成为一个hash空间[0,2^32-1]，这个是一个线性空间，但是在算法中，我们通过适当的逻辑控制将它首尾相连(0 = 2^32),这样让它逻辑上形成了一个环形空间。</p><p>它也是按照使用取模的方法，前面笔记介绍的节点取模法是对节点（服务器）的数量进行取模。而一致性Hash算法是对2^32取模，简单来说， 一致性Hash算法将整个哈希值空间组织成一个虚拟的圆环 ，如假设某哈希函数H的值空间为0-2^32-1（即哈希值是一个32位无符号整形），整个哈希环如下图：整个空间 按顺时针方向组织 ，圆环的正上方的点代表0，0点右侧的第一个点代表1，以此类推，2、3、4、……直到2^32-1，也就是说0点左侧的第一个点代表2^32-1， 0和2^32-1在零点中方向重合，我们把这个由2^32个点组成的圆环称为Hash环。</p></blockquote><p><img src="`+o+'" alt="3"></p><blockquote><p>【服务器IP节点映射】 将集群中各个IP节点映射到环上的某一个位置。 将各个服务器使用Hash进行一个哈希，具体可以选择服务器的IP或主机名作为关键字进行哈希，这样每台机器就能确定其在哈希环上的位置。假如4个节点NodeA、B、C、D，经过IP地址的 哈希函数 计算(hash(ip))，使用IP地址哈希后在环空间的位置如下：</p></blockquote><p><img src="'+c+'" alt="4"></p><blockquote><p>【key落到服务器的落键规则】 当我们需要存储一个kv键值对时，首先计算key的hash值，hash(key)，将这个key使用相同的函数Hash计算出哈希值并确定此数据在环上的位置， 从此位置沿环顺时针“行走” ，第一台遇到的服务器就是其应该定位到的服务器，并将该键值对存储在该节点上。 如我们有Object A、Object B、Object C、Object D四个数据对象，经过哈希计算后，在环空间上的位置如下：根据一致性Hash算法，数据A会被定为到Node A上，B被定为到Node B上，C被定为到Node C上，D被定为到Node D上。</p></blockquote><p><img src="'+l+`" alt="5"></p><blockquote><p>4、优点</p><p>一致性哈希算法的容错性</p><div class="language-properties" data-ext="properties"><pre class="language-properties"><code><span class="token key attr-name">假设Node</span> <span class="token value attr-value">C宕机，可以看到此时对象A、B、D不会受到影响，只有C对象被重定位到Node D。一般的，在一致性Hash算法中，如果一台服务器不可用，则 受影响的数据仅仅是此服务器到其环空间中前一台服务器（即沿着逆时针方向行走遇到的第一台服务器）之间数据 ，其它不会受到影响。简单说，就是C挂了，受到影响的只是B、C之间的数据，并且这些数据会转移到D进行存储。 </span>
</code></pre></div></blockquote><p><img src="`+u+`" alt="6"></p><blockquote><p>一致性哈希算法的扩展性</p><div class="language-properties" data-ext="properties"><pre class="language-properties"><code><span class="token key attr-name">数据量增加了，需要增加一台节点NodeX，X的位置在A和B之间，那收到影响的也就是A到X之间的数据，重新把A到X的数据录入到X上即可，</span> 
<span class="token key attr-name">不会导致hash取余全部数据重新洗牌。</span> 
</code></pre></div></blockquote><p><img src="`+k+`" alt="7"></p><blockquote><p>5、缺点</p><p>一致性哈希算法的数据倾斜问题</p><div class="language-properties" data-ext="properties"><pre class="language-properties"><code><span class="token key attr-name">一致性Hash算法在服务</span> <span class="token value attr-value">节点太少时 ，容易因为节点分布不均匀而造成 数据倾斜 （被缓存的对象大部分集中缓存在某一台服务器上）问题， </span>
例如系统中只有两台服务器：
</code></pre></div></blockquote><p><img src="`+r+`" alt="8"></p><blockquote><p>6、小总结</p><div class="language-properties" data-ext="properties"><pre class="language-properties"><code><span class="token key attr-name">为了在节点数目发生改变时尽可能少的迁移数据</span> 
  
<span class="token key attr-name">将所有的存储节点排列在收尾相接的Hash环上，每个key在计算Hash后会</span> <span class="token value attr-value">顺时针 找到临近的存储节点存放。 </span>
<span class="token key attr-name">而当有节点加入或退出时仅影响该节点在Hash环上</span> <span class="token value attr-value">顺时针相邻的后续节点 。   </span>
  
<span class="token key attr-name">优点</span> 
<span class="token key attr-name">加入和删除节点只影响哈希环中顺时针方向的相邻的节点，对其他节点无影响。</span> 
  
缺点  
<span class="token key attr-name">数据的分布和节点的位置有关，因为这些节点不是均匀的分布在哈希环上的，所以数据在进行存储时达不到均匀分布的效果。</span> 

</code></pre></div></blockquote><blockquote><ol start="3"><li>哈希槽分区</li></ol><div class="language-properties" data-ext="properties"><pre class="language-properties"><code><span class="token key attr-name">1.</span> <span class="token value attr-value">为什么出现</span>
一致性哈希算法的数据倾斜问题
<span class="token key attr-name">哈希槽是指就是一个数组，数组[0,2^14-1]形成的hash</span> <span class="token value attr-value">slot空间。</span>
<span class="token key attr-name">2.</span> <span class="token value attr-value">能干什么</span>
解决均匀分配的问题，在数据和节点之间有加入了一层，把这层称为哈希槽(slot)，用于管理数据和节点之间的关系，现在就相当于节点上放的是槽，槽里放的是数据。

</code></pre></div></blockquote><p><img src="`+i+`" alt="9"></p><blockquote><div class="language-properties" data-ext="properties"><pre class="language-properties"><code><span class="token key attr-name">槽解决的是粒度问题，相当于把粒度变大了，这样便于数据移动。</span> 
哈希解决的是映射问题，使用key的哈希值来计算所在的槽，便于数据分配。
<span class="token key attr-name">3.</span> <span class="token value attr-value">多少个hash槽 </span>
<span class="token key attr-name">一个集群只能有16384个槽，编号0-16383（0-2^14-1）。这些槽会分配给集群中的所有主节点，分配策略没有要求。可以指定哪些编号的槽分配给哪个主节点。集群会记录节点和槽的对应关系。解决了节点和槽的关系后，接下来就需要对key求哈希值，然后对16384取余，余数是几key就落入对应的槽里。slot</span> <span class="token punctuation">=</span> <span class="token value attr-value">CRC16(key) % 16384。以槽为单位移动数据，因为槽的数目是固定的，处理起来比较容易，这样数据移动问题就解决了。 </span>
</code></pre></div></blockquote><h5 id="_1-2-2-redis集群3主3从扩缩容配置案例" tabindex="-1"><a class="header-anchor" href="#_1-2-2-redis集群3主3从扩缩容配置案例" aria-hidden="true">#</a> 1.2.2 redis集群3主3从扩缩容配置案例</h5><blockquote><p>一、关闭防火墙+启动docker后台服务</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code>systemctl start <span class="token function">docker</span>
</code></pre></div><p>二、新建6个docker容器redis实例</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 创建并运行docker容器实例</span>
<span class="token function">docker</span> run 
<span class="token comment"># 容器名字</span>
<span class="token parameter variable">--name</span> redis-node-6
<span class="token comment"># 使用宿主机的IP和端口，默认</span>
<span class="token parameter variable">--net</span> <span class="token function">host</span>
<span class="token comment"># 获取宿主机root用户权限</span>
<span class="token parameter variable">--privileged</span><span class="token operator">=</span>true
<span class="token comment"># 容器卷，宿主机地址:docker内部地址</span>
<span class="token parameter variable">-v</span> /data/redis/share/redis-node-6:/data
<span class="token comment"># redis镜像和版本号</span>
redis:6.0.8
<span class="token comment"># 开启redis集群</span>
--cluster-enabled <span class="token function">yes</span> 
<span class="token comment"># 开启持久化</span>
<span class="token parameter variable">--applendonly</span> <span class="token function">yes</span> 
</code></pre></div><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> run <span class="token parameter variable">-d</span> <span class="token parameter variable">--name</span> redis-node-1 <span class="token parameter variable">--net</span> <span class="token function">host</span> <span class="token parameter variable">--privileged</span><span class="token operator">=</span>true <span class="token parameter variable">-v</span> /data/redis/share/redis-node-1:/data redis:6.0.8 --cluster-enabled <span class="token function">yes</span> <span class="token parameter variable">--appendonly</span> <span class="token function">yes</span> <span class="token parameter variable">--port</span> <span class="token number">6381</span> 
  
<span class="token function">docker</span> run <span class="token parameter variable">-d</span> <span class="token parameter variable">--name</span> redis-node-2 <span class="token parameter variable">--net</span> <span class="token function">host</span> <span class="token parameter variable">--privileged</span><span class="token operator">=</span>true <span class="token parameter variable">-v</span> /data/redis/share/redis-node-2:/data redis:6.0.8 --cluster-enabled <span class="token function">yes</span> <span class="token parameter variable">--appendonly</span> <span class="token function">yes</span> <span class="token parameter variable">--port</span> <span class="token number">6382</span> 
  
<span class="token function">docker</span> run <span class="token parameter variable">-d</span> <span class="token parameter variable">--name</span> redis-node-3 <span class="token parameter variable">--net</span> <span class="token function">host</span> <span class="token parameter variable">--privileged</span><span class="token operator">=</span>true <span class="token parameter variable">-v</span> /data/redis/share/redis-node-3:/data redis:6.0.8 --cluster-enabled <span class="token function">yes</span> <span class="token parameter variable">--appendonly</span> <span class="token function">yes</span> <span class="token parameter variable">--port</span> <span class="token number">6383</span> 
  
<span class="token function">docker</span> run <span class="token parameter variable">-d</span> <span class="token parameter variable">--name</span> redis-node-4 <span class="token parameter variable">--net</span> <span class="token function">host</span> <span class="token parameter variable">--privileged</span><span class="token operator">=</span>true <span class="token parameter variable">-v</span> /data/redis/share/redis-node-4:/data redis:6.0.8 --cluster-enabled <span class="token function">yes</span> <span class="token parameter variable">--appendonly</span> <span class="token function">yes</span> <span class="token parameter variable">--port</span> <span class="token number">6384</span> 
  
<span class="token function">docker</span> run <span class="token parameter variable">-d</span> <span class="token parameter variable">--name</span> redis-node-5 <span class="token parameter variable">--net</span> <span class="token function">host</span> <span class="token parameter variable">--privileged</span><span class="token operator">=</span>true <span class="token parameter variable">-v</span> /data/redis/share/redis-node-5:/data redis:6.0.8 --cluster-enabled <span class="token function">yes</span> <span class="token parameter variable">--appendonly</span> <span class="token function">yes</span> <span class="token parameter variable">--port</span> <span class="token number">6385</span> 
  
<span class="token function">docker</span> run <span class="token parameter variable">-d</span> <span class="token parameter variable">--name</span> redis-node-6 <span class="token parameter variable">--net</span> <span class="token function">host</span> <span class="token parameter variable">--privileged</span><span class="token operator">=</span>true <span class="token parameter variable">-v</span> /data/redis/share/redis-node-6:/data redis:6.0.8 --cluster-enabled <span class="token function">yes</span> <span class="token parameter variable">--appendonly</span> <span class="token function">yes</span> <span class="token parameter variable">--port</span> <span class="token number">6386</span> 
</code></pre></div><p>三、进入容器redis-node-1并为6台机器构建集群关系</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 进入容器</span>
<span class="token function">docker</span> <span class="token builtin class-name">exec</span> <span class="token parameter variable">-it</span> redis-node-1 /bin/bash
</code></pre></div><p>//注意，进入docker容器后才能执行一下命令，且注意自己的真实IP地址</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code>redis-cli <span class="token parameter variable">--cluster</span> create <span class="token number">192.168</span>.111.147:6381 <span class="token number">192.168</span>.111.147:6382 <span class="token number">192.168</span>.111.147:6383 <span class="token number">192.168</span>.111.147:6384 <span class="token number">192.168</span>.111.147:6385 <span class="token number">192.168</span>.111.147:6386 --cluster-replicas <span class="token number">1</span> 
</code></pre></div><p>--cluster-replicas 1 表示为每个master创建一个slave节点</p></blockquote><p><img src="`+d+'" alt="10"></p><blockquote></blockquote><p><img src="'+g+'" alt="11"></p><blockquote><p>四、连接进入6318作为切入点，查看集群状态</p></blockquote><p><img src="'+m+`" alt="12"></p><blockquote><div class="language-text" data-ext="text"><pre class="language-text"><code>cluster info

cluster nodes
</code></pre></div></blockquote><h5 id="_1-2-3-主从容错切换迁移案例" tabindex="-1"><a class="header-anchor" href="#_1-2-3-主从容错切换迁移案例" aria-hidden="true">#</a> 1.2.3 主从容错切换迁移案例</h5><blockquote><p>一、数据读写存储</p><p>启动6机构成的集群并通过exec进入</p><p>对6381新增两个key</p><p>防止路由时效加参数-c并新增连个key</p></blockquote><p><img src="`+b+`" alt="13"></p><blockquote><p>查看集群信息</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code>redis-cli <span class="token parameter variable">--cluster</span> check <span class="token number">192.168</span>.111.147:6381 
</code></pre></div></blockquote><p><img src="`+v+`" alt="14"></p><blockquote><p>二、容错切换迁移</p><ol><li>主6381和从机切换，先停止主机6381</li></ol><div class="language-properties" data-ext="properties"><pre class="language-properties"><code>6381主机停了，对应的真实从机上位
6381作为1号主机分配的从机以实际情况为准，具体是几号机器就是几号
</code></pre></div><ol start="2"><li>再次查看集群信息</li></ol></blockquote><p><img src="`+h+`" alt="15"></p><blockquote><p>6381宕机了，6385上位成为了新的master。</p><p>备注：本次脑图笔记6381为主下面挂从6385 。</p><p>每次案例下面挂的从机以实际情况为准，具体是几号机器就是几号</p><ol start="3"><li>先还原之前的3主3从</li></ol><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 先启6381</span>
<span class="token function">docker</span> start redis-node-1
<span class="token comment"># 再停6385 </span>
<span class="token function">docker</span> stop redis-node-5
<span class="token comment"># 再起6385</span>
<span class="token function">docker</span> start redis-node-5
主从机器分配情况一实际情况为准
</code></pre></div><ol start="4"><li>查看集群状态</li></ol><div class="language-bash" data-ext="sh"><pre class="language-bash"><code>redis-cli <span class="token parameter variable">--cluster</span> check 自己IP:6381
</code></pre></div></blockquote><p><img src="`+y+`" alt="16"></p><h5 id="_1-2-4-主从扩容案例" tabindex="-1"><a class="header-anchor" href="#_1-2-4-主从扩容案例" aria-hidden="true">#</a> 1.2.4 主从扩容案例</h5><blockquote><p>一、新建6387、6388两个节点+新建后启动+查看是否8节点</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> run <span class="token parameter variable">-d</span> <span class="token parameter variable">--name</span> redis-node-7 <span class="token parameter variable">--net</span> <span class="token function">host</span> <span class="token parameter variable">--privileged</span><span class="token operator">=</span>true <span class="token parameter variable">-v</span> /data/redis/share/redis-node-7:/data redis:6.0.8 --cluster-enabled <span class="token function">yes</span> <span class="token parameter variable">--appendonly</span> <span class="token function">yes</span> <span class="token parameter variable">--port</span> <span class="token number">6387</span> 

<span class="token function">docker</span> run <span class="token parameter variable">-d</span> <span class="token parameter variable">--name</span> redis-node-8 <span class="token parameter variable">--net</span> <span class="token function">host</span> <span class="token parameter variable">--privileged</span><span class="token operator">=</span>true <span class="token parameter variable">-v</span> /data/redis/share/redis-node-8:/data redis:6.0.8 --cluster-enabled <span class="token function">yes</span> <span class="token parameter variable">--appendonly</span> <span class="token function">yes</span> <span class="token parameter variable">--port</span> <span class="token number">6388</span> 

<span class="token function">docker</span> <span class="token function">ps</span> 
</code></pre></div><p>二、进入6387容器实例内部</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> <span class="token builtin class-name">exec</span> <span class="token parameter variable">-it</span> redis-node-7 /bin/bash
</code></pre></div><p>三、将新增的6387节点(空槽号)作为master节点加入原集群</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code>将新增的6387作为master节点加入集群
redis-cli <span class="token parameter variable">--cluster</span>  add-node  自己实际IP地址: <span class="token number">6387</span>  自己实际IP地址: <span class="token number">6381</span> 
<span class="token number">6387</span> 就是将要作为master新增节点 
<span class="token number">6381</span> 就是原来集群节点里面的领路人，相当于6387拜拜6381的码头从而找到组织加入集群 
</code></pre></div><p>四、检查集群情况第1次</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code>redis-cli <span class="token parameter variable">--cluster</span> check 真实ip地址:6381 
<span class="token comment"># 例如</span>
redis-cli <span class="token parameter variable">--cluster</span> check <span class="token number">192.168</span>.111.147:6381 
</code></pre></div><p>五、重新分派槽号</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code>重新分派槽号
命令:redis-cli <span class="token parameter variable">--cluster</span>  reshard  IP地址:端口号 
redis-cli <span class="token parameter variable">--cluster</span> reshard <span class="token number">192.168</span>.111.147:6381 
</code></pre></div></blockquote><p><img src="`+f+`" alt="17"></p><blockquote><p>六、检查集群情况第2次</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code>redis-cli <span class="token parameter variable">--cluster</span> check 真实ip地址:6381 

为什么6387是3个新的区间，以前的还是连续？
重新分配成本太高，所以前3家各自匀出来一部分，从6381/6382/6383三个旧节点分别匀出1364个坑位给新节点6387 
</code></pre></div></blockquote><p><img src="`+q+`" alt="18"></p><blockquote><p>七、为主节点6387分配从节点6388</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code>命令：redis-cli  <span class="token parameter variable">--cluster</span> add-node  ip:新slave端口 ip:新master端口 --cluster-slave --cluster-master-id 新主机节点ID
 
redis-cli <span class="token parameter variable">--cluster</span> add-node <span class="token number">192.168</span>.111.147:6388 <span class="token number">192.168</span>.111.147:6387 --cluster-slave --cluster-master-id e4781f644d4a4e4d4b4d107157b9ba8144631451-------这个是6387的编号，按照自己实际情况 
</code></pre></div></blockquote><p><img src="`+x+`" alt="20"></p><blockquote><p>八、检查集群情况第3次</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code>redis-cli <span class="token parameter variable">--cluster</span> check <span class="token number">192.168</span>.111.147:6382 
</code></pre></div></blockquote><p><img src="`+_+`" alt="19"></p><h5 id="_1-2-5-主从缩容案例" tabindex="-1"><a class="header-anchor" href="#_1-2-5-主从缩容案例" aria-hidden="true">#</a> 1.2.5 主从缩容案例</h5><blockquote><p>一、目的：6387和6388下线</p><p>二、检查集群情况1获得6388的节点ID</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code>redis-cli <span class="token parameter variable">--cluster</span> check <span class="token number">192.168</span>.111.147:6382 
</code></pre></div><p>三、将6388删除 从集群中将4号从节点6388删除</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code>命令：redis-cli <span class="token parameter variable">--cluster</span>  del-node  ip:从机端口 从机6388节点ID
  
redis-cli <span class="token parameter variable">--cluster</span>  del-node  <span class="token number">192.168</span>.111.147:6388 5d149074b7e57b802287d1797a874ed7a1a284a8 

redis-cli <span class="token parameter variable">--cluster</span> check <span class="token number">192.168</span>.111.147:6382 

检查一下发现，6388被删除了，只剩下7台机器了。
</code></pre></div><p>四、将6387的槽号清空，重新分配，本例将清出来的槽号都给6381</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code>redis-cli <span class="token parameter variable">--cluster</span> reshard <span class="token number">192.168</span>.111.147:6381 
</code></pre></div></blockquote><p><img src="`+w+`" alt="21"></p><blockquote><p>五、检查集群情况第二次</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code>redis-cli <span class="token parameter variable">--cluster</span> check <span class="token number">192.168</span>.111.147:6381
  
<span class="token number">4096</span>个槽位都指给6381，它变成了8192个槽位，相当于全部都给6381了，不然要输入3次，一锅端 
</code></pre></div></blockquote><p><img src="`+I+`" alt="22"></p><blockquote><p>六、将6387删除</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 命令：redis-cli --cluster del-node ip:端口 6387节点ID</span>
redis-cli <span class="token parameter variable">--cluster</span> del-node <span class="token number">192.168</span>.111.147:6387 e4781f644d4a4e4d4b4d107157b9ba8144631451 
</code></pre></div><p>七、检查集群情况第三次</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code>redis-cli <span class="token parameter variable">--cluster</span> check <span class="token number">192.168</span>.111.147:6381 
</code></pre></div></blockquote><p><img src="`+T+'" alt="23"></p><h3 id="二、dockerfile解析" tabindex="-1"><a class="header-anchor" href="#二、dockerfile解析" aria-hidden="true">#</a> 二、DockerFile解析</h3><h4 id="_2-1-dockerfile是什么" tabindex="-1"><a class="header-anchor" href="#_2-1-dockerfile是什么" aria-hidden="true">#</a> 2.1 DockerFile是什么</h4><p>DockerFile是用来构建Docker镜像的文本文件，是有一条条构建镜像所需的指令和参数构成的脚本。</p><p><img src="'+D+`" alt="24"></p><p>官网：https://docs.docker.com/engine/reference/builder/</p><p>构建三步骤</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token number">1</span>、编写DockerFile文件
<span class="token number">2</span>、docker build命令构建镜像
<span class="token number">3</span>、docker run 依镜像运行容器实例
</code></pre></div><h4 id="_2-2-dockerfile构建过程解析" tabindex="-1"><a class="header-anchor" href="#_2-2-dockerfile构建过程解析" aria-hidden="true">#</a> 2.2 DockerFile构建过程解析</h4><p><strong>DockerFile内容基础知识</strong></p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token number">1</span>. 每条保留字指令都必须为大写字母且后面跟随至少一个参数
<span class="token number">2</span>. 指令按照从上到下，顺序执行
<span class="token number">3</span>. <span class="token comment">#表示注释</span>
<span class="token number">4</span>. 每条指令都会创建一个新的镜像层并对镜像进行提交。
</code></pre></div><p><strong>Docker执行DockerFile的大致流程</strong></p><div class="language-text" data-ext="text"><pre class="language-text"><code>1. docker从技术镜像运行一个容器
2. 执行一条指令比鞥对容器做出修改
3. 执行类似docker commit 的操作提交一个新的镜像层
4. docker 在基于刚提交的镜像运行一个新容器
5. 执行dockerfile中的下一条指令直到所有执行执行完成。
</code></pre></div><h4 id="_2-3-小总结" tabindex="-1"><a class="header-anchor" href="#_2-3-小总结" aria-hidden="true">#</a> 2.3 小总结</h4><blockquote><p>从应用软件的角度来看，Dockerfile、Docker镜像与Docker容器分别代表软件的三个不同阶段，</p><p>Dockerfile是软件的原材料</p><p>Docker镜像是软件的交付品</p><p>Docker容器则可以认为是软件镜像的运行态，也即依照镜像运行的容器实例</p><p>Dockerfile面向开发，Docker镜像成为交付标准，Docker容器则涉及部署与运维，三者缺一不可，合力充当Docker体系的基石。</p></blockquote><p><img src="`+N+`" alt="25"></p><blockquote><ol><li><p>Dockerfile，需要定义一个Dockerfile，Dockerfile定义了进程需要的一切东西。Dockerfile涉及的内容包括执行代码或者是文件、环境变量、依赖包、运行时环境、动态链接库、操作系统的发行版、服务进程和内核进程(当应用进程需要和系统服务和内核进程打交道，这时需要考虑如何设计namespace的权限控制)等等;</p></li><li><p>Docker镜像，在用Dockerfile定义一个文件之后，docker build时会产生一个Docker镜像，当运行 Docker镜像时会真正开始提供服务;</p></li><li><p>Docker容器，容器是直接提供服务的。</p></li></ol></blockquote><h4 id="_2-4-dockerfile常用保留字指令" tabindex="-1"><a class="header-anchor" href="#_2-4-dockerfile常用保留字指令" aria-hidden="true">#</a> 2.4 DockerFile常用保留字指令</h4><blockquote><ol><li>参考tomcat8的dockerfile入门</li></ol><p>https://github.com/docker-library/tomcat</p><ol start="2"><li>From</li></ol><div class="language-properties" data-ext="properties"><pre class="language-properties"><code>基础镜像，当前新镜像是基于哪个镜像的，指定一个已经存在的镜像作为模板，第一条必须是from
</code></pre></div><ol start="3"><li>MANINTAINER</li></ol><p>镜像维护者的姓名和邮箱地址</p><ol start="4"><li>Run</li></ol><p>容器构建时需要运行的命令</p><p>两种格式：</p><p>shell格式</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&lt;</span>命令行命令<span class="token operator">&gt;</span>等同于，在终端操作的shell命令

RUN yum <span class="token parameter variable">-y</span> <span class="token function">install</span> <span class="token function">vim</span>
</code></pre></div><p>exec格式</p></blockquote><p><img src="`+E+`" alt="26"></p><blockquote><p>RUN是在docker build时运行</p><ol start="5"><li>EXPOSE</li></ol><p>当前容器对外暴露出的端口</p><ol start="6"><li>WORKDIR</li></ol><p>指定在创建容器后。终端默认登录的进来工作目录，一个落脚点。</p><ol start="7"><li>USER</li></ol><p>指定该镜像以什么样的用户去执行，如果都不指定，默认是root</p><ol start="8"><li>ENV</li></ol><p>用来在构建镜像过程中设置环境变量</p><div class="language-properties" data-ext="properties"><pre class="language-properties"><code><span class="token key attr-name">ENV</span> <span class="token value attr-value">MY_PATH /usr/mytest </span>
<span class="token key attr-name">这个环境变量可以在后续的任何RUN指令中使用，这就如同在命令前面指定了环境变量前缀一样；</span> 
<span class="token key attr-name">也可以在其它指令中直接使用这些环境变量，</span> 
  
<span class="token key attr-name">比如：WORKDIR</span> <span class="token value attr-value">$MY_PATH </span>
</code></pre></div><ol start="9"><li>ADD</li></ol><p>将宿主机目录下的文件拷贝进镜像且会自动处理URL和解压tar压缩包</p><ol start="10"><li>COPY</li></ol><p>类似ADD，拷贝文件和目录到镜像中。将从构建上下文目录中&lt;源路径&gt;的文件/目录复制到新的一层镜像内的&lt;目标路径&gt;位置</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code>COPY src dest

COPY<span class="token punctuation">[</span><span class="token string">&quot;src&quot;</span>,<span class="token string">&quot;dest&quot;</span><span class="token punctuation">]</span>

<span class="token operator">&lt;</span>src源路径<span class="token operator">&gt;</span>：源文件或源目录

<span class="token operator">&lt;</span>dest目标路径<span class="token operator">&gt;</span>: 容器内的指定路径，该路径不用事先建好，路径不存在的话，会自动创建。
</code></pre></div><ol start="11"><li>VOLUME</li></ol><p>容器数据卷，用于数据保存和持久化的工作</p><ol start="12"><li>CMD</li></ol><p>指定容器启动后的要干的事情。</p><p>【注意】</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code>Dockerfile 中可以由多个CMD指令，但是只有最后一个生效，CMD会被docker run 之后的参数替换。
</code></pre></div><p>参考官网Tomcat的dockerfile演示讲解</p><p>官网最后一行命令</p><div class="language-text" data-ext="text"><pre class="language-text"><code>EXPOSE 8080
CMD [&quot;catalina.sh&quot;,&quot;run&quot;]
</code></pre></div><p>我们演示自己的覆盖操作</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> run <span class="token parameter variable">-it</span> <span class="token parameter variable">-p</span> <span class="token number">8080</span>:8080  容器ID /bin/bash
</code></pre></div><p>他和前面RUN命令的区别</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code>CMD 是在 <span class="token function">docker</span> run 时运行。

RUN 是在docker build 时运行
</code></pre></div><ol start="13"><li><p>ENTRYPOINT</p></li><li><p>也是用来指定一个容器启动时要运行的命令</p></li><li><p>类似于CMD指令，但是ENTRYPOINT不会被docker run 后面的命令覆盖，而且这些命令行参数会被当作参数送给ENTRYPOINT指令指定的程序。</p></li><li><p>命令格式和案例说明</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code>命令格式：ENTRYPOINT<span class="token punctuation">[</span><span class="token string">&quot;&lt;executeable&gt;&quot;</span>,<span class="token string">&quot;&lt;param1&gt;&quot;</span>,<span class="token string">&quot;&lt;param2&gt;&quot;</span>,<span class="token punctuation">..</span>.<span class="token punctuation">]</span>
            
ENTRYPOINT 可以和CMD一起用，一般是 变参 才会使用 CMD ，这里的CMD等于是在给 ENTRYPOINT 传参。当制定了 ENTRYPOINT 后，CMD的含义就发生了变化，不再是直接运行其命令而是将 CMD 的内容作为参数传递给 ENTRYPOINT 指定，他两个组合会变成<span class="token operator">&lt;</span>ENTRYPOINT<span class="token operator">&gt;</span> <span class="token string">&quot;&lt;CMD&gt;&quot;</span>
案例如下：假设已通过 Dockerfile 构建了 nginx:test 镜像
</code></pre></div></li></ol></blockquote><p><img src="`+A+`" alt="27"></p><blockquote><pre><code>  | 是否传参         | 按照dockerfile编写执行         | 传参运行                                      |
  | ---------------- | ------------------------------ | --------------------------------------------- |
  | Docker命令       | docker run nginx:test          | docker run nginx:test -c /etc/nginx/ new.conf |
  | 衍生出的实际命令 | nginx -c /etc/nginx/nginx.conf | nginx -c /etc/nginx/ new.conf                 |
</code></pre><p>优点：在执行docker run 的时候可以指定 ENTRYPOINT 运行所需的参数。</p><p>注意：如果Dockerfile 中如果存在多个 ENTRYPOINT 指令，进最后一个生效。</p><ol start="14"><li>小总结</li></ol></blockquote><pre><code>   ![28](./images/28.png)
</code></pre><h4 id="_2-5-案例" tabindex="-1"><a class="header-anchor" href="#_2-5-案例" aria-hidden="true">#</a> 2.5 案例</h4><h5 id="_2-5-1-自定义镜像mycentosjava8" tabindex="-1"><a class="header-anchor" href="#_2-5-1-自定义镜像mycentosjava8" aria-hidden="true">#</a> 2.5.1 自定义镜像mycentosjava8</h5><p><strong>要求</strong></p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code>Centos7镜像具备 <span class="token function">vim</span> + <span class="token function">ifconfig</span> + jdk8

JDK下载镜像地址
官网：https://www.oracle.com/java/technologies/downloads/<span class="token comment">#java8 </span>
https://mirrors.yangxingzhen.com/jdk/
</code></pre></div><p><strong>编写</strong></p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code>准备编写Dockerfile文件 
【注意】大写字母D
 
FROM centos
MAINTAINER zzyy<span class="token operator">&lt;</span>zzyybs@126.com<span class="token operator">&gt;</span> 
  
ENV MYPATH /usr/local 
WORKDIR <span class="token variable">$MYPATH</span> 
  
<span class="token comment">#安装vim编辑器 </span>
RUN yum <span class="token parameter variable">-y</span> <span class="token function">install</span> <span class="token function">vim</span> 
<span class="token comment">#安装ifconfig命令查看网络IP </span>
RUN yum <span class="token parameter variable">-y</span> <span class="token function">install</span> net-tools 
<span class="token comment">#安装java8及lib库 </span>
RUN yum <span class="token parameter variable">-y</span> <span class="token function">install</span> glibc.i686 
RUN <span class="token function">mkdir</span> /usr/local/java 
<span class="token comment">#ADD 是相对路径jar,把jdk-8u171-linux-x64.tar.gz添加到容器中,安装包必须要和Dockerfile文件在同一位置 </span>
ADD jdk-8u171-linux-x64.tar.gz /usr/local/java/ 
<span class="token comment">#配置java环境变量 </span>
ENV JAVA_HOME /usr/local/java/jdk1.8.0_171 
ENV JRE_HOME <span class="token variable">$JAVA_HOME</span>/jre 
ENV CLASSPATH <span class="token variable">$JAVA_HOME</span>/lib/dt.jar:<span class="token variable">$JAVA_HOME</span>/lib/tools.jar:<span class="token variable">$JRE_HOME</span>/lib:<span class="token variable">$CLASSPATH</span> 
ENV <span class="token environment constant">PATH</span> <span class="token variable">$JAVA_HOME</span>/bin:<span class="token environment constant">$PATH</span> 
  
EXPOSE <span class="token number">80</span> 
 
CMD <span class="token builtin class-name">echo</span> <span class="token variable">$MYPATH</span> 
CMD <span class="token builtin class-name">echo</span> <span class="token string">&quot;success--------------ok&quot;</span> 
CMD /bin/bash 
</code></pre></div><p><strong>构建</strong></p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> build <span class="token parameter variable">-t</span> 新镜像名字: TAG

例如：docker build <span class="token parameter variable">-t</span> centosjava8:1.5 <span class="token builtin class-name">.</span>

【注意】
上面TAG 后面有个空格，有个点
</code></pre></div><p><strong>运行</strong></p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> run <span class="token parameter variable">-it</span> 新镜像名字:TAG

<span class="token function">docker</span> run <span class="token parameter variable">-it</span> centosjava8:1.5 /bin/bash 
</code></pre></div><p><img src="`+M+`" alt="29"></p><p><strong>再体会下UnionFS（联合文件系统）</strong></p><div class="language-properties" data-ext="properties"><pre class="language-properties"><code><span class="token key attr-name">UnionFS（联合文件系统）：Union文件系统（UnionFS）是一种分层、轻量级并且高性能的文件系统，它支持</span> <span class="token value attr-value">对文件系统的修改作为一次提交来一层层的叠加， 同时可以将不同目录挂载到同一个虚拟文件系统下(unite several directories into a single virtual filesystem)。Union 文件系统是 Docker 镜像的基础。 镜像可以通过分层来进行继承 ，基于基础镜像（没有父镜像），可以制作各种具体的应用镜像。</span>

<span class="token key attr-name">特性：一次同时加载多个文件系统，但从外面看起来，只能看到一个文件系统，联合加载会把各层文件系统叠加起来，这样最终的文件系统会包含所有底层的文件和目录</span> 
</code></pre></div><h5 id="_2-5-2-虚悬镜像" tabindex="-1"><a class="header-anchor" href="#_2-5-2-虚悬镜像" aria-hidden="true">#</a> 2.5.2 虚悬镜像</h5><p><strong>是什么</strong></p><div class="language-text" data-ext="text"><pre class="language-text"><code>仓库名，标签都是 &lt;none&gt; 的镜像，俗称dangling image

Dockerfile 写一个
</code></pre></div><p><img src="`+S+`" alt="30"></p><p><strong>查看</strong></p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> image <span class="token function">ls</span> <span class="token parameter variable">-f</span> <span class="token assign-left variable">dangling</span><span class="token operator">=</span>true
命令结果如下图：
</code></pre></div><p><img src="`+j+`" alt="31"></p><p><strong>删除</strong></p><div class="language-text" data-ext="text"><pre class="language-text"><code>docker image prune 

虚悬镜像已经市区存在价值，可以删除
</code></pre></div><p><img src="`+R+`" alt="32"></p><h5 id="_2-5-3-家庭作业自定义myubuntu" tabindex="-1"><a class="header-anchor" href="#_2-5-3-家庭作业自定义myubuntu" aria-hidden="true">#</a> 2.5.3 家庭作业自定义myubuntu</h5><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 编写</span>
准备编写DockerFile文件
<span class="token function">vim</span> Dockerfile
----------------------
FROM ubuntu
MAINTAINER zzyy<span class="token operator">&lt;</span>zzyybs@126.com<span class="token operator">&gt;</span> 
  
ENV MYPATH /usr/local 
WORKDIR <span class="token variable">$MYPATH</span> 
  
RUN <span class="token function">apt-get</span> update 
RUN <span class="token function">apt-get</span> <span class="token function">install</span> net-tools 
<span class="token comment">#RUN apt-get install -y iproute2 </span>
<span class="token comment">#RUN apt-get install -y inetutils-ping </span>
  
EXPOSE <span class="token number">80</span> 
  
CMD <span class="token builtin class-name">echo</span> <span class="token variable">$MYPATH</span> 
CMD <span class="token builtin class-name">echo</span> <span class="token string">&quot;install inconfig cmd into ubuntu success--------------ok&quot;</span> 
CMD /bin/bash 
------------------------
<span class="token comment"># 构建</span>
<span class="token function">docker</span> build <span class="token parameter variable">-t</span> 新镜像名字:TAG

<span class="token comment">#运行</span>
<span class="token function">docker</span> run <span class="token parameter variable">-it</span> 新镜像名字:TAG

</code></pre></div><h3 id="三、docker微服务实战" tabindex="-1"><a class="header-anchor" href="#三、docker微服务实战" aria-hidden="true">#</a> 三、Docker微服务实战</h3><h4 id="_3-1-通过idea新建一个普通微服务模块" tabindex="-1"><a class="header-anchor" href="#_3-1-通过idea新建一个普通微服务模块" aria-hidden="true">#</a> 3.1 通过IDEA新建一个普通微服务模块</h4><p><strong>建Module</strong></p><div class="language-text" data-ext="text"><pre class="language-text"><code>docker_boot
</code></pre></div><p><strong>修改POM</strong></p><div class="language-xml" data-ext="xml"><pre class="language-xml"><code><span class="token prolog">&lt;?xml version =&quot;1.0&quot; encoding =&quot;UTF-8&quot;?&gt;</span>
 <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>project</span> <span class="token attr-name">xmlns</span> <span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>http://maven.apache.org/POM/4.0.0<span class="token punctuation">&quot;</span></span> <span class="token attr-name"><span class="token namespace">xmlns:</span></span> <span class="token attr-name">xsi</span> <span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>http://www.w3.org/2001/XMLSchema-instance<span class="token punctuation">&quot;</span></span>
      <span class="token attr-name">xsi</span> <span class="token attr-name">:schemaLocation</span> <span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>http://maven.apache.org/POM/4.0.0 https://maven.apache.org/xsd/maven-4.0.0.xsd<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span> 
   <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>modelVersion</span><span class="token punctuation">&gt;</span></span> 4.0.0 <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>modelVersion</span><span class="token punctuation">&gt;</span></span> 
   <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>parent</span><span class="token punctuation">&gt;</span></span> 
     <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span> org.springframework.boot <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span> 
     <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span> spring-boot-starter-parent <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span> 
     <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>version</span><span class="token punctuation">&gt;</span></span> 2.5.6 <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>version</span><span class="token punctuation">&gt;</span></span> 
     <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>relativePath</span><span class="token punctuation">/&gt;</span></span> 
   <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>parent</span><span class="token punctuation">&gt;</span></span> 
 
   <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span> com.atguigu.docker <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span> 
   <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span> docker_boot <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span> 
   <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>version</span><span class="token punctuation">&gt;</span></span> 0.0.1-SNAPSHOT <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>version</span><span class="token punctuation">&gt;</span></span> 
 
   <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>properties</span><span class="token punctuation">&gt;</span></span> 
     <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>project.build.sourceEncoding</span><span class="token punctuation">&gt;</span></span> UTF-8 <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>project.build.sourceEncoding</span><span class="token punctuation">&gt;</span></span> 
     <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>maven.compiler.source</span><span class="token punctuation">&gt;</span></span> 1.8 <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>maven.compiler.source</span><span class="token punctuation">&gt;</span></span> 
     <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>maven.compiler.target</span><span class="token punctuation">&gt;</span></span> 1.8 <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>maven.compiler.target</span><span class="token punctuation">&gt;</span></span> 
     <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>junit.version</span><span class="token punctuation">&gt;</span></span> 4.12 <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>junit.version</span><span class="token punctuation">&gt;</span></span> 
     <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>log4j.version</span><span class="token punctuation">&gt;</span></span> 1.2.17 <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>log4j.version</span><span class="token punctuation">&gt;</span></span> 
     <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>lombok.version</span><span class="token punctuation">&gt;</span></span> 1.16.18 <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>lombok.version</span><span class="token punctuation">&gt;</span></span> 
     <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>mysql.version</span><span class="token punctuation">&gt;</span></span> 5.1.47 <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>mysql.version</span><span class="token punctuation">&gt;</span></span> 
     <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>druid.version</span><span class="token punctuation">&gt;</span></span> 1.1.16 <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>druid.version</span><span class="token punctuation">&gt;</span></span> 
     <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>mapper.version</span><span class="token punctuation">&gt;</span></span> 4.1.5 <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>mapper.version</span><span class="token punctuation">&gt;</span></span> 
     <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>mybatis.spring.boot.version</span><span class="token punctuation">&gt;</span></span> 1.3.0 <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>mybatis.spring.boot.version</span><span class="token punctuation">&gt;</span></span> 
   <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>properties</span><span class="token punctuation">&gt;</span></span> 
 
   <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependencies</span><span class="token punctuation">&gt;</span></span> 
     <span class="token comment">&lt;!--SpringBoot 通用依赖模块 --&gt;</span>
     <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">&gt;</span></span> 
       <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span> org.springframework.boot <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span> 
       <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span> spring-boot-starter-web <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span> 
     <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">&gt;</span></span> 
     <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">&gt;</span></span> 
       <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span> org.springframework.boot <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span> 
       <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span> spring-boot-starter-actuator <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span> 
     <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">&gt;</span></span> 
     <span class="token comment">&lt;!--test--&gt;</span>
     <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">&gt;</span></span> 
       <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span> org.springframework.boot <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span> 
       <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span> spring-boot-starter-test <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span> 
       <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>scope</span><span class="token punctuation">&gt;</span></span> test <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>scope</span><span class="token punctuation">&gt;</span></span> 
     <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">&gt;</span></span> 
   <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependencies</span><span class="token punctuation">&gt;</span></span> 
   <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>build</span><span class="token punctuation">&gt;</span></span> 
     <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>plugins</span><span class="token punctuation">&gt;</span></span> 
       <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>plugin</span><span class="token punctuation">&gt;</span></span> 
         <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span> org.springframework.boot <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span> 
         <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span> spring-boot-maven-plugin <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span> 
       <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>plugin</span><span class="token punctuation">&gt;</span></span> 
       <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>plugin</span><span class="token punctuation">&gt;</span></span> 
         <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span> org.apache.maven.plugins <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span> 
         <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span> maven-resources-plugin <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span> 
         <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>version</span><span class="token punctuation">&gt;</span></span> 3.1.0 <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>version</span><span class="token punctuation">&gt;</span></span> 
       <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>plugin</span><span class="token punctuation">&gt;</span></span> 
     <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>plugins</span><span class="token punctuation">&gt;</span></span> 
   <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>build</span><span class="token punctuation">&gt;</span></span> 
 <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>project</span><span class="token punctuation">&gt;</span></span> 
</code></pre></div><p><strong>写YML</strong></p><div class="language-yaml" data-ext="yml"><pre class="language-yaml"><code>server.port=6001
</code></pre></div><p><strong>主启动</strong></p><div class="language-java" data-ext="java"><pre class="language-java"><code><span class="token keyword">package</span>  <span class="token namespace">com<span class="token punctuation">.</span>atguigu<span class="token punctuation">.</span>docker</span><span class="token punctuation">;</span>
<span class="token keyword">import</span>  <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>boot<span class="token punctuation">.</span></span><span class="token class-name">SpringApplication</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span>  <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>boot<span class="token punctuation">.</span>autoconfigure<span class="token punctuation">.</span></span> <span class="token class-name">SpringBootApplication</span></span> <span class="token punctuation">;</span>
<span class="token annotation punctuation">@SpringBootApplication</span>
<span class="token keyword">public</span> <span class="token keyword">class</span>  <span class="token class-name">DockerBootApplication</span> <span class="token punctuation">{</span>
	<span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span>  <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span>    <span class="token punctuation">{</span>
  	<span class="token class-name">SpringApplication</span><span class="token punctuation">.</span> run <span class="token punctuation">(</span><span class="token class-name">DockerBootApplication</span><span class="token punctuation">.</span> <span class="token keyword">class</span> <span class="token punctuation">,</span> args<span class="token punctuation">)</span><span class="token punctuation">;</span>
 		 <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
</code></pre></div><p><strong>业务类</strong></p><div class="language-java" data-ext="java"><pre class="language-java"><code> <span class="token keyword">package</span> <span class="token namespace">com<span class="token punctuation">.</span>atguigu<span class="token punctuation">.</span>docker<span class="token punctuation">.</span>controller</span><span class="token punctuation">;</span>

 <span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>beans<span class="token punctuation">.</span>factory<span class="token punctuation">.</span>annotation<span class="token punctuation">.</span></span> <span class="token class-name">Value</span></span> <span class="token punctuation">;</span>
 <span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>web<span class="token punctuation">.</span>bind<span class="token punctuation">.</span>annotation<span class="token punctuation">.</span></span> <span class="token class-name">RequestMapping</span></span> <span class="token punctuation">;</span>
 <span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>web<span class="token punctuation">.</span>bind<span class="token punctuation">.</span>annotation<span class="token punctuation">.</span></span><span class="token class-name">RequestMethod</span></span><span class="token punctuation">;</span>
 <span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>web<span class="token punctuation">.</span>bind<span class="token punctuation">.</span>annotation<span class="token punctuation">.</span></span> <span class="token class-name">RestController</span></span> <span class="token punctuation">;</span>

 <span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>util<span class="token punctuation">.</span></span><span class="token class-name">UUID</span></span><span class="token punctuation">;</span>

 <span class="token operator">/</span>
  <span class="token operator">*</span><span class="token annotation punctuation">@auther</span>  zzyy
  <span class="token operator">*</span><span class="token annotation punctuation">@create</span>  <span class="token number">2021</span><span class="token operator">-</span><span class="token number">10</span><span class="token operator">-</span><span class="token number">25</span> <span class="token number">17</span><span class="token operator">:</span><span class="token number">43</span>
 <span class="token operator">*</span><span class="token operator">/</span>
 <span class="token annotation punctuation">@RestController</span>
 <span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">OrderController</span>
 <span class="token punctuation">{</span>
   <span class="token annotation punctuation">@Value</span> <span class="token punctuation">(</span> <span class="token string">&quot;\${server.port}&quot;</span> <span class="token punctuation">)</span>
   <span class="token keyword">private</span> <span class="token class-name">String</span> port <span class="token punctuation">;</span>

   <span class="token annotation punctuation">@RequestMapping</span> <span class="token punctuation">(</span> <span class="token string">&quot;/order/docker&quot;</span> <span class="token punctuation">)</span>
   <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">helloDocker</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
   <span class="token punctuation">{</span>
     <span class="token keyword">return</span> <span class="token string">&quot;hello docker&quot;</span> <span class="token operator">+</span> <span class="token string">&quot; \\t &quot;</span> <span class="token operator">+</span> port <span class="token operator">+</span> <span class="token string">&quot; \\t &quot;</span> <span class="token operator">+</span> <span class="token constant">UUID</span><span class="token punctuation">.</span> <span class="token operator">*</span>randomUUID<span class="token operator">*</span> <span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
   <span class="token punctuation">}</span>

   <span class="token annotation punctuation">@RequestMapping</span> <span class="token punctuation">(</span>value <span class="token operator">=</span> <span class="token string">&quot;/order/index&quot;</span> <span class="token punctuation">,</span>method <span class="token operator">=</span> <span class="token class-name">RequestMethod</span><span class="token punctuation">.</span> <span class="token operator">*</span><span class="token constant">GET</span>\\<span class="token operator">*</span> <span class="token punctuation">)</span>
   <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">index</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
   <span class="token punctuation">{</span>
     <span class="token keyword">return</span> <span class="token string">&quot; 服务端口号 : &quot;</span> <span class="token operator">+</span> <span class="token string">&quot; \\t &quot;</span> <span class="token operator">+</span> port <span class="token operator">+</span> <span class="token string">&quot; \\t &quot;</span> <span class="token operator">+</span><span class="token constant">UUID</span><span class="token punctuation">.</span> <span class="token operator">*</span>randomUUID<span class="token operator">*</span> <span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
   <span class="token punctuation">}</span>
 <span class="token punctuation">}</span> 
</code></pre></div><h4 id="_3-2-通过dockerfile-发布微服务部署到docker容器" tabindex="-1"><a class="header-anchor" href="#_3-2-通过dockerfile-发布微服务部署到docker容器" aria-hidden="true">#</a> 3.2 通过dockerfile 发布微服务部署到docker容器</h4><h5 id="_3-2-1-idea工具里面搞定微服务jar包" tabindex="-1"><a class="header-anchor" href="#_3-2-1-idea工具里面搞定微服务jar包" aria-hidden="true">#</a> 3.2.1 <strong>IDEA工具里面搞定微服务jar包</strong></h5><p><img src="`+O+`" alt="33"></p><h5 id="_3-2-2-编写dockerfile" tabindex="-1"><a class="header-anchor" href="#_3-2-2-编写dockerfile" aria-hidden="true">#</a> 3.2.2 <strong>编写Dockerfile</strong></h5><p><strong>Dockerfile内容</strong></p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 基础镜像使用java </span>
FROM java:8 
<span class="token comment"># 作者 </span>
MAINTAINER zzyy 
<span class="token comment"># VOLUME 指定临时文件目录为/tmp，在主机/var/lib/docker目录下创建了一个临时文件并链接到容器的/tmp </span>
VOLUME /tmp 
<span class="token comment"># 将jar包添加到容器中并更名为zzyy_docker.jar </span>
ADD docker_boot-0.0.1-SNAPSHOT.jar /zzyy_docker.jar 
<span class="token comment"># 运行jar包 </span>
RUN <span class="token function">bash</span> <span class="token parameter variable">-c</span> <span class="token string">&#39;touch /zzyy_docker.jar&#39;</span> 
ENTRYPOINT <span class="token punctuation">[</span><span class="token string">&quot;java&quot;</span>,<span class="token string">&quot;-jar&quot;</span>,<span class="token string">&quot;/zzyy_docker.jar&quot;</span><span class="token punctuation">]</span> 
<span class="token comment">#暴露6001端口作为微服务 </span>
EXPOSE <span class="token number">6001</span> 
</code></pre></div><p><strong>将微服务jar包和Dockerfile文件上传到同一个目录下/mydocker</strong></p><p><img src="`+U+`" alt="34"></p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> build <span class="token parameter variable">-t</span> zzyy_docker:1.6 <span class="token builtin class-name">.</span> 

</code></pre></div><p><strong>构建镜像</strong></p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> build <span class="token parameter variable">-t</span> zzyy_docker:1.6 <span class="token builtin class-name">.</span>

打包成镜像文件
<span class="token comment"># 命令</span>
<span class="token function">docker</span> build <span class="token parameter variable">-t</span> zzyy_docker:1.6 <span class="token builtin class-name">.</span>
</code></pre></div><p><strong>运行容器</strong></p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 运行命令</span>
<span class="token function">docker</span> run <span class="token parameter variable">-d</span> <span class="token parameter variable">-p</span> <span class="token number">6001</span>:6001 zzyy_docker:1.6
<span class="token comment"># 查看镜像运行命令</span>
<span class="token function">docker</span> images
</code></pre></div><p><strong>访问测试</strong></p><p><img src="`+C+`" alt="35"></p><h3 id="四、docker网络" tabindex="-1"><a class="header-anchor" href="#四、docker网络" aria-hidden="true">#</a> 四、Docker网络</h3><h4 id="_4-1-docker-网络是什么" tabindex="-1"><a class="header-anchor" href="#_4-1-docker-网络是什么" aria-hidden="true">#</a> 4.1 Docker 网络是什么</h4><h5 id="_4-1-1-docker不启动-默认网络情况" tabindex="-1"><a class="header-anchor" href="#_4-1-1-docker不启动-默认网络情况" aria-hidden="true">#</a> 4.1.1 docker不启动，默认网络情况</h5><div class="language-bash" data-ext="sh"><pre class="language-bash"><code>ens <span class="token number">33</span>
lo
virbr0
</code></pre></div><p><img src="`+P+`" alt="36"></p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code>在CentOS7的安装过程中如果有 选择相关虚拟化的的服务安装系统后 ，启动网卡时会发现有一个以网桥连接的私网地址的virbr0网卡<span class="token punctuation">(</span>virbr0网卡：它还有一个固定的默认IP地址192.168.122.1<span class="token punctuation">)</span>，是做虚拟机网桥的使用的，其作用是为连接其上的虚机网卡提供 NAT访问外网的功能。 
  
我们之前学习Linux安装，勾选安装系统的时候附带了libvirt服务才会生成的一个东西，如果不需要可以直接将libvirtd服务卸载， 
yum remove libvirt-libs.x86_64 
</code></pre></div><h5 id="_4-1-2-docker启动后-网络情况" tabindex="-1"><a class="header-anchor" href="#_4-1-2-docker启动后-网络情况" aria-hidden="true">#</a> 4.1.2 docker启动后，网络情况</h5><p>查看docker网络模式命令</p><p><img src="`+L+'" alt="37"></p><h4 id="_4-2-常用基本命令" tabindex="-1"><a class="header-anchor" href="#_4-2-常用基本命令" aria-hidden="true">#</a> 4.2 常用基本命令</h4><h5 id="_4-2-1-all-命令" tabindex="-1"><a class="header-anchor" href="#_4-2-1-all-命令" aria-hidden="true">#</a> 4.2.1 <strong>All 命令</strong></h5><p><img src="'+z+`" alt="38"></p><h5 id="_4-2-2-查看网络" tabindex="-1"><a class="header-anchor" href="#_4-2-2-查看网络" aria-hidden="true">#</a> 4.2.2 <strong>查看网络</strong></h5><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> network <span class="token function">ls</span>
</code></pre></div><h5 id="_4-2-3-查看网络源数据" tabindex="-1"><a class="header-anchor" href="#_4-2-3-查看网络源数据" aria-hidden="true">#</a> 4.2.3 查看网络源数据</h5><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> network inspect  XXX网络名字
</code></pre></div><h5 id="_4-2-4-删除网络" tabindex="-1"><a class="header-anchor" href="#_4-2-4-删除网络" aria-hidden="true">#</a> 4.2.4 删除网络</h5><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> network <span class="token function">rm</span> XXX网络名字
</code></pre></div><h5 id="_4-2-5-案例" tabindex="-1"><a class="header-anchor" href="#_4-2-5-案例" aria-hidden="true">#</a> 4.2.5 案例</h5><p><img src="`+F+`" alt="39"></p><h4 id="_4-3-能干嘛" tabindex="-1"><a class="header-anchor" href="#_4-3-能干嘛" aria-hidden="true">#</a> 4.3 能干嘛</h4><div class="language-bash" data-ext="sh"><pre class="language-bash"><code>容器间的互联和通信以及端口映射
容器IP变动时候可以通过服务名直接网络通信而不受到影响
</code></pre></div><h4 id="_4-4-网络模式" tabindex="-1"><a class="header-anchor" href="#_4-4-网络模式" aria-hidden="true">#</a> 4.4 网络模式</h4><h5 id="_4-4-1-总体介绍" tabindex="-1"><a class="header-anchor" href="#_4-4-1-总体介绍" aria-hidden="true">#</a> 4.4.1 总体介绍</h5><div class="language-bash" data-ext="sh"><pre class="language-bash"><code>bridge模式：使用--network bridge指定，默认使用docker<span class="token punctuation">(</span><span class="token punctuation">)</span>

host模式：使用 <span class="token parameter variable">--network</span> host指定

none模式：使用 <span class="token parameter variable">--network</span> none指定

container模式：使用 <span class="token parameter variable">--network</span> container:Name或者容器ID指定
</code></pre></div><h5 id="_4-4-2-容器实例内默认网络ip生产规则" tabindex="-1"><a class="header-anchor" href="#_4-4-2-容器实例内默认网络ip生产规则" aria-hidden="true">#</a> 4.4.2 容器实例内默认网络IP生产规则</h5><blockquote><p>1 先启动两个ubuntu容器实例</p><p><img src="`+H+'" alt="40"></p><p>2 docker inspect 容器ID or 容器名字</p><p><img src="'+B+'" alt="41"></p><p>3 关闭u2实例，新建u3，查看ip变化</p><p><img src="'+Y+`" alt="42"></p></blockquote><h5 id="_4-4-3-案例说明" tabindex="-1"><a class="header-anchor" href="#_4-4-3-案例说明" aria-hidden="true">#</a> 4.4.3 案例说明</h5><p><strong>bridge</strong></p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code>Docker 服务默认会创建一个 docker0 网桥（其上有一个 docker0 内部接口），该桥接网络的名称为docker0，它在 内核层 连通了其他的物理或虚拟网卡，这就将所有容器和本地主机都放到 同一个物理网络 。Docker 默认指定了 docker0 接口 的 IP 地址和子网掩码， 让主机和容器之间可以通过网桥相互通信。 
  
<span class="token comment"># 查看 bridge 网络的详细信息，并通过 grep 获取名称项 </span>
<span class="token function">docker</span> network inspect bridge <span class="token operator">|</span> <span class="token function">grep</span> name 

<span class="token function">ifconfig</span> 
</code></pre></div><p><strong>案例</strong></p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token number">1</span> Docker使用Linux桥接，在宿主机虚拟一个Docker容器网桥<span class="token punctuation">(</span>docker0<span class="token punctuation">)</span>，Docker启动一个容器时会根据Docker网桥的网段分配给容器一个IP地址，称为Container-IP，同时Docker网桥是每个容器的默认网关。因为在同一宿主机内的容器都接入同一个网桥，这样容器之间就能够通过容器的Container-IP直接通信。 
 
<span class="token number">2</span> <span class="token function">docker</span> run 的时候，没有指定network的话默认使用的网桥模式就是bridge，使用的就是docker0 。在宿主机ifconfig,就可以看到docker0和自己create的network<span class="token punctuation">(</span>后面讲<span class="token punctuation">)</span>eth0，eth1，eth2……代表网卡一，网卡二，网卡三…… ，lo代表127.0.0.1，即localhost ，inet addr用来表示网卡的IP地址 
 
<span class="token number">3</span> 网桥docker0创建一对对等虚拟设备接口一个叫veth，另一个叫eth0，成对匹配。 
   <span class="token number">3.1</span> 整个宿主机的网桥模式都是docker0，类似一个交换机有一堆接口，每个接口叫veth，在本地主机和容器内分别创建一个虚拟接口，并让他们彼此联通（这样一对接口叫veth pair）； 
   <span class="token number">3.2</span> 每个容器实例内部也有一块网卡，每个接口叫eth0； 
   <span class="token number">3.3</span> docker0上面的每个veth匹配某个容器实例内部的eth0，两两配对，一一匹配。 
 通过上述，将宿主机上的所有容器都连接到这个内部网络上，两个容器在同一个网络下,会从这个网关下各自拿到分配的ip，此时两个容器的网络是互通的。 
</code></pre></div><p><img src="`+V+`" alt="43"></p><p>【代码】</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> run <span class="token parameter variable">-d</span> <span class="token parameter variable">-p</span> <span class="token number">8081</span>:8080   <span class="token parameter variable">--name</span> tomcat81 billygoo/tomcat8-jdk8

<span class="token function">docker</span> run <span class="token parameter variable">-d</span> <span class="token parameter variable">-p</span> <span class="token number">8082</span>:8080   <span class="token parameter variable">--name</span> tomcat82 billygoo/tomcat8-jdk8
</code></pre></div><p><strong>两两匹配验证</strong></p><p><img src="`+G+`" alt="44"></p><p><strong>Host</strong></p><blockquote><p>一、是什么</p><p>直接使用宿主机的IP地址与外界进行通信，不再需要额外进行NAT转换。</p><p>二、案例</p><ol><li>说明</li></ol><p>容器将 不会获得 一个独立的Network Namespace， 而是和宿主机共用一个Network Namespace。 容器将不会虚拟出自己的网卡而是使用宿主机的IP和端口。</p><ol start="2"><li>代码</li></ol><div class="language-bash" data-ext="sh"><pre class="language-bash"><code>警告：
 <span class="token function">docker</span> run <span class="token parameter variable">-d</span> <span class="token parameter variable">-p</span> <span class="token number">8083</span>:8080 <span class="token parameter variable">--network</span> <span class="token function">host</span> <span class="token parameter variable">--name</span> tomcat83 billygoo/tomcat8-jdk8
 
正确：
 <span class="token function">docker</span> run <span class="token parameter variable">-d</span>    <span class="token parameter variable">--network</span> <span class="token function">host</span> <span class="token parameter variable">--name</span> tomcat83 billygoo/tomcat8-jdk8
</code></pre></div><ol start="3"><li>无之前的配对显示了，看容器实例内部</li></ol><p><img src="`+X+`" alt="45"></p><ol start="4"><li>没有设置-p的端口映射了，如何访问启动的tomcat83？</li></ol><div class="language-bash" data-ext="sh"><pre class="language-bash"><code>http://宿主机IP:8080/ 
  
在CentOS里面用默认的火狐浏览器访问容器内的tomcat83看到访问成功，因为此时容器的IP借用主机的， 
所以容器共享宿主机网络IP，这样的好处是外部主机与容器可以直接通信。
</code></pre></div></blockquote><p><strong>none</strong></p><blockquote><p>一、是什么</p><p>禁用网络功能，只有lo标识（就是127.0.0.1表示本地回环）</p><p>二、案例</p><p>docker run -d -p8084:8080 --network none --name tomcat84 billygoo/tomcat8-jdk8</p></blockquote><p><strong>container</strong></p><blockquote><p>一、是什么</p><p>container⽹络模式</p><p>新建的容器和已经存在的一个容器共享一个网络ip配置而不是和宿主机共享。新创建的容器不会创建自己的网卡，配置自己的IP，而是和一个指定的容器共享IP、端口范围等。同样，两个容器除了网络方面，其他的如文件系统、进程列表等还是隔离的。</p><p>二、❎案例</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> run <span class="token parameter variable">-d</span> <span class="token parameter variable">-p</span> <span class="token number">8085</span>:8080                                     <span class="token parameter variable">--name</span> tomcat85 billygoo/tomcat8-jdk8

<span class="token function">docker</span> run <span class="token parameter variable">-d</span> <span class="token parameter variable">-p</span> <span class="token number">8086</span>:8080 <span class="token parameter variable">--network</span> container:tomcat85 <span class="token parameter variable">--name</span> tomcat86 billygoo/tomcat8-jdk8

运行结果

 docker：Error response from daemon: conflicting optisons: port <span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span>.
 
<span class="token comment"># 相当于tomcat86和tomcat85公用同一个ip同一个端口，导致端口冲突 </span>
</code></pre></div><p>三、✅案例2</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code>Alpine操作系统是一个面向安全的轻型 Linux发行版

<span class="token function">docker</span> run <span class="token parameter variable">-it</span>                  <span class="token parameter variable">--name</span> alpine1  alpine /bin/sh

<span class="token function">docker</span> run <span class="token parameter variable">-it</span> <span class="token parameter variable">--network</span> container:alpine1 <span class="token parameter variable">--name</span> alpine2  alpine /bin/sh


</code></pre></div><p>运行结果，验证共用搭桥</p><p><img src="`+$+'" alt="46"></p><p>假如此时关闭alpine1，再看看alpine2</p><p><img src="'+J+'" alt="47"></p></blockquote><p><strong>自定义网络</strong></p><blockquote><p>一、过时的link</p><p><img src="'+W+`" alt="48"></p><p>二、是什么</p><p>三、案例</p><p>【before】</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code>案例：
<span class="token function">docker</span> run <span class="token parameter variable">-d</span> <span class="token parameter variable">-p</span> <span class="token number">8081</span>:8080   <span class="token parameter variable">--name</span> tomcat81 billygoo/tomcat8-jdk8

<span class="token function">docker</span> run <span class="token parameter variable">-d</span> <span class="token parameter variable">-p</span> <span class="token number">8082</span>:8080   <span class="token parameter variable">--name</span> tomcat82 billygoo/tomcat8-jdk8

上述成功启动并用docker exec进入各自容器实例内部
</code></pre></div><div class="language-bash" data-ext="sh"><pre class="language-bash"><code>问题：
<span class="token number">1</span>. 按照IP地址ping是OK的
<span class="token number">2</span>. 按照服务名ping结果???
	ping： tocmat82：Name or <span class="token function">service</span> not known
</code></pre></div><p>【after】</p><div class="language-text" data-ext="text"><pre class="language-text"><code>案例
自定义桥接网络,自定义网络默认使用的是桥接网络bridge

新建自定义网络
</code></pre></div><p><img src="`+K+`" alt="49"></p><p>新建容器加入上一步新建的自定义网络</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> run <span class="token parameter variable">-d</span> <span class="token parameter variable">-p</span> <span class="token number">8081</span>:8080 <span class="token parameter variable">--network</span> zzyy_network  <span class="token parameter variable">--name</span> tomcat81 billygoo/tomcat8-jdk8

<span class="token function">docker</span> run <span class="token parameter variable">-d</span> <span class="token parameter variable">-p</span> <span class="token number">8082</span>:8080 <span class="token parameter variable">--network</span> zzyy_network  <span class="token parameter variable">--name</span> tomcat82 billygoo/tomcat8-jdk8

</code></pre></div><p>互相ping测试</p><p><img src="`+Q+`" alt="50"></p><p>问题结论</p><div class="language-text" data-ext="text"><pre class="language-text"><code>1、自定义网络本身就维护好了主机名和ip的对应关系（ip和域名都能通）
2、自定义网络本身就维护好了主机名和ip的对应关系（ip和域名都能通）
3、自定义网络本身就维护好了主机名和ip的对应关系（ip和域名都能通）
</code></pre></div></blockquote><h4 id="_4-5-docker平台架构图解" tabindex="-1"><a class="header-anchor" href="#_4-5-docker平台架构图解" aria-hidden="true">#</a> 4.5 Docker平台架构图解</h4><div class="language-bash" data-ext="sh"><pre class="language-bash"><code>从其架构和运行流程来看，Docker 是一个 C/S 模式的架构，后端是一个松耦合架构，众多模块各司其职。  
  
Docker 运行的基本流程为： 
  
<span class="token number">1</span> 用户是使用 Docker Client 与 Docker Daemon 建立通信，并发送请求给后者。 
<span class="token number">2</span> Docker Daemon 作为 Docker 架构中的主体部分，首先提供 Docker Server 的功能使其可以接受 Docker Client 的请求。 
<span class="token number">3</span> Docker Engine 执行 Docker 内部的一系列工作，每一项工作都是以一个 Job 的形式的存在。 
<span class="token number">4</span> Job 的运行过程中，当需要容器镜像时，则从 Docker Registry 中下载镜像，并通过镜像管理驱动 Graph driver将下载镜像以Graph的形式存储。 
<span class="token number">5</span> 当需要为 Docker 创建网络环境时，通过网络管理驱动 Network driver 创建并配置 Docker 容器网络环境。 
<span class="token number">6</span> 当需要限制 Docker 容器运行资源或执行用户指令等操作时，则通过 Execdriver 来完成。 
<span class="token number">7</span> Libcontainer是一项独立的容器管理包，Network driver以及Exec driver都是通过Libcontainer来实现具体对容器进行的操作。
</code></pre></div><p><img src="`+Z+`" alt="51"></p><h3 id="五、docker-compose容器编排" tabindex="-1"><a class="header-anchor" href="#五、docker-compose容器编排" aria-hidden="true">#</a> 五、Docker-compose容器编排</h3><h4 id="_5-1-docker-compose是什么" tabindex="-1"><a class="header-anchor" href="#_5-1-docker-compose是什么" aria-hidden="true">#</a> 5.1 Docker-compose是什么</h4><div class="language-bash" data-ext="sh"><pre class="language-bash"><code>Docker-Compose是Docker官方的开源项目，负责实现对Docker容器集群的快速编排。
</code></pre></div><h4 id="_5-2-能干什么" tabindex="-1"><a class="header-anchor" href="#_5-2-能干什么" aria-hidden="true">#</a> 5.2 能干什么</h4><div class="language-properties" data-ext="properties"><pre class="language-properties"><code> docker建议我们每一个容器中只运行一个服务,因为docker容器本身占用资源极少,所以最好是将每个服务单独的分割开来但是这样我们又面临了一个问题？ 
 
<span class="token key attr-name">如果我需要同时部署好多个服务,难道要每个服务单独写Dockerfile然后在构建镜像,构建容器,这样累都累死了,所以docker官方给我们提供了docker-compose多服务部署的工具</span> 
  
<span class="token key attr-name">例如要实现一个Web微服务项目，除了Web服务容器本身，往往还需要再加上后端的数据库mysql服务容器，redis服务器，注册中心eureka，甚至还包括负载均衡容器等等。。。。。。</span> 
 
<span class="token key attr-name">Compose允许用户通过一个单独的</span> <span class="token value attr-value">docker-compose.yml模板文件 （YAML 格式）来定义 一组相关联的应用容器为一个项目（project）。 </span>
  
<span class="token key attr-name">可以很容易地用一个配置文件定义一个多容器的应用，然后使用一条指令安装这个应用的所有依赖，完成构建。Docker-Compose</span> <span class="token value attr-value">解决了容器与容器之间如何管理编排的问题。</span>
</code></pre></div><h4 id="_5-3-去哪里" tabindex="-1"><a class="header-anchor" href="#_5-3-去哪里" aria-hidden="true">#</a> 5.3 去哪里</h4><h5 id="_5-3-1-官网" tabindex="-1"><a class="header-anchor" href="#_5-3-1-官网" aria-hidden="true">#</a> 5.3.1 官网：</h5><p>https://docs.docker.com/compose/compose-file/compose-file-v3/</p><h5 id="_5-3-2-官网下载" tabindex="-1"><a class="header-anchor" href="#_5-3-2-官网下载" aria-hidden="true">#</a> 5.3.2 官网下载</h5><p>https://docs.docker.com/compose/install/</p><h5 id="_5-3-3-安装步骤" tabindex="-1"><a class="header-anchor" href="#_5-3-3-安装步骤" aria-hidden="true">#</a> 5.3.3 安装步骤</h5><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token function">curl</span> <span class="token parameter variable">-L</span> <span class="token string">&quot;https://github.com/docker/compose/releases/download/1.29.2/docker-compose-<span class="token variable"><span class="token variable">$(</span><span class="token function">uname</span> <span class="token parameter variable">-s</span><span class="token variable">)</span></span>-<span class="token variable"><span class="token variable">$(</span><span class="token function">uname</span> <span class="token parameter variable">-m</span><span class="token variable">)</span></span>&quot;</span> <span class="token parameter variable">-o</span> /usr/local/bin/docker-compose 
<span class="token function">chmod</span> +x /usr/local/bin/docker-compose 
<span class="token function">docker-compose</span> <span class="token parameter variable">--version</span> 
</code></pre></div><p><img src="`+aa+`" alt="52"></p><h5 id="_5-3-4-卸载步骤" tabindex="-1"><a class="header-anchor" href="#_5-3-4-卸载步骤" aria-hidden="true">#</a> 5.3.4 卸载步骤</h5><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token function">sudo</span> <span class="token function">rm</span> /usr/local/bin/docker-compose
</code></pre></div><h4 id="_5-4-compose-核心概念" tabindex="-1"><a class="header-anchor" href="#_5-4-compose-核心概念" aria-hidden="true">#</a> 5.4 Compose 核心概念</h4><h5 id="_5-4-1-一文件" tabindex="-1"><a class="header-anchor" href="#_5-4-1-一文件" aria-hidden="true">#</a> 5.4.1 一文件</h5><div class="language-bash" data-ext="sh"><pre class="language-bash"><code>docker-compose.yml
</code></pre></div><h5 id="_5-4-2-两要素" tabindex="-1"><a class="header-anchor" href="#_5-4-2-两要素" aria-hidden="true">#</a> 5.4.2 两要素</h5><div class="language-bash" data-ext="sh"><pre class="language-bash"><code>服务<span class="token punctuation">(</span>service<span class="token punctuation">)</span>:
一个个应用容器实例，比如订单微服务、库存微服务、mysql容器、nginx容器或者redis容器。

工程<span class="token punctuation">(</span>project<span class="token punctuation">)</span>:
由一组关联的应用容器组成的一个完整业务单元，在 docker-compose.yml 文件中定义。
</code></pre></div><h4 id="_5-5-compose-使用的三个步骤" tabindex="-1"><a class="header-anchor" href="#_5-5-compose-使用的三个步骤" aria-hidden="true">#</a> 5.5 Compose 使用的三个步骤</h4><div class="language-text" data-ext="text"><pre class="language-text"><code>1. 编写Dockerfile定义各个微服务应用并构建出对应的镜像文件
2. 使用 docker-compose.yml 定义一个完整业务单元，安排好整体应用中的各个容器服务。
3. 最后，执行docker-compose up命令 来启动并运行整个应用程序，完成一键部署上线

</code></pre></div><h4 id="_5-6-compose常用命令" tabindex="-1"><a class="header-anchor" href="#_5-6-compose常用命令" aria-hidden="true">#</a> 5.6 Compose常用命令</h4><div class="language-bash" data-ext="sh"><pre class="language-bash"><code>Compose 常用命令 
<span class="token function">docker-compose</span> <span class="token parameter variable">-h</span>                           <span class="token comment">#  查看帮助 </span>
<span class="token function">docker-compose</span> up                           <span class="token comment">#  启动所有 docker-compose服务 </span>
<span class="token function">docker-compose</span> up <span class="token parameter variable">-d</span>                        <span class="token comment">#  启动所有 docker-compose服务 并后台运行 </span>
<span class="token function">docker-compose</span> down                         <span class="token comment">#  停止并删除容器、网络、卷、镜像。 </span>
<span class="token function">docker-compose</span> <span class="token builtin class-name">exec</span>  yml里面的服务id                 <span class="token comment"># 进入容器实例内部  docker-compose exec  docker-compose.yml文件中写的服务id  /bin/bash </span>
<span class="token function">docker-compose</span> <span class="token function">ps</span>                      <span class="token comment"># 展示当前docker-compose编排过的运行的所有容器 </span>
<span class="token function">docker-compose</span> <span class="token function">top</span>                     <span class="token comment"># 展示当前docker-compose编排过的容器进程 </span>
 
<span class="token function">docker-compose</span> logs  yml里面的服务id     <span class="token comment">#  查看容器输出日志 </span>
<span class="token function">docker-compose</span> config     <span class="token comment">#  检查配置 </span>
<span class="token function">docker-compose</span> config <span class="token parameter variable">-q</span>  <span class="token comment">#  检查配置，有问题才有输出 </span>
<span class="token function">docker-compose</span> restart   <span class="token comment">#  重启服务 </span>
<span class="token function">docker-compose</span> start     <span class="token comment">#  启动服务 </span>
<span class="token function">docker-compose</span> stop      <span class="token comment">#  停止服务 </span>
</code></pre></div><h4 id="_5-5-componse-编排微服务" tabindex="-1"><a class="header-anchor" href="#_5-5-componse-编排微服务" aria-hidden="true">#</a> 5.5 Componse 编排微服务</h4><h5 id="_5-5-1-改造升级微服务工程docker-boot" tabindex="-1"><a class="header-anchor" href="#_5-5-1-改造升级微服务工程docker-boot" aria-hidden="true">#</a> 5.5.1 改造升级微服务工程docker_boot</h5><p><strong>以前的基础版</strong></p><p><img src="`+na+`" alt="53"></p><p><strong>SQL建表建库</strong></p><div class="language-mysql" data-ext="mysql"><pre class="language-mysql"><code>CREATE TABLE \`t_user\` ( 
  \`id\` int(10) unsigned NOT NULL AUTO_INCREMENT, 
  \`username\` varchar(50) NOT NULL DEFAULT &#39;&#39; COMMENT &#39;用户名&#39;, 
  \`password\` varchar(50) NOT NULL DEFAULT &#39;&#39; COMMENT &#39;密码&#39;, 
  \`sex\` tinyint(4) NOT NULL DEFAULT &#39;0&#39; COMMENT &#39;性别 0=女 1=男 &#39;, 
  \`deleted\` tinyint(4) unsigned NOT NULL DEFAULT &#39;0&#39; COMMENT &#39;删除标志，默认0不删除，1删除&#39;, 
  \`update_time\` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT &#39;更新时间&#39;, 
  \`create_time\` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT &#39;创建时间&#39;, 
  PRIMARY KEY (\`id\`) 
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8 COMMENT=&#39;用户表&#39; 
</code></pre></div><p><strong>改POM</strong></p><div class="language-xml" data-ext="xml"><pre class="language-xml"><code><span class="token prolog">&lt;? xml version =&quot;1.0&quot; encoding =&quot;UTF-8&quot; ?&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>project</span> <span class="token attr-name">xmlns</span> <span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>http://maven.apache.org/POM/4.0.0<span class="token punctuation">&quot;</span></span> <span class="token attr-name"><span class="token namespace">xmlns:</span></span> <span class="token attr-name">xsi</span> <span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>http://www.w3.org/2001/XMLSchema-instance<span class="token punctuation">&quot;</span></span>
      <span class="token attr-name">xsi</span> <span class="token attr-name">:schemaLocation</span> <span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>http://maven.apache.org/POM/4.0.0 https://maven.apache.org/xsd/maven-4.0.0.xsd<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span> 
   <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>modelVersion</span><span class="token punctuation">&gt;</span></span> 4.0.0 <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>modelVersion</span><span class="token punctuation">&gt;</span></span> 
   <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>parent</span><span class="token punctuation">&gt;</span></span> 
     <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span> org.springframework.boot <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span> 
     <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span> spring-boot-starter-parent <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span> 
     <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>version</span><span class="token punctuation">&gt;</span></span> 2.5.6 <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>version</span><span class="token punctuation">&gt;</span></span> 
     <span class="token comment">&lt;!--&lt;version&gt;2.3.10.RELEASE&lt;/version&gt;--&gt;</span>
     <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>relativePath</span><span class="token punctuation">/&gt;</span></span>  <span class="token comment">&lt;!-- lookup parent from repository --&gt;</span>
   <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>parent</span><span class="token punctuation">&gt;</span></span> 

   <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span> com.atguigu.docker <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span> 
   <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span> docker_boot <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span> 
   <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>version</span><span class="token punctuation">&gt;</span></span> 0.0.1-SNAPSHOT <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>version</span><span class="token punctuation">&gt;</span></span> 

   <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>properties</span><span class="token punctuation">&gt;</span></span> 
     <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>project.build.sourceEncoding</span><span class="token punctuation">&gt;</span></span> UTF-8 <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>project.build.sourceEncoding</span><span class="token punctuation">&gt;</span></span> 
     <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>maven.compiler.source</span><span class="token punctuation">&gt;</span></span> 1.8 <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>maven.compiler.source</span><span class="token punctuation">&gt;</span></span> 
     <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>maven.compiler.target</span><span class="token punctuation">&gt;</span></span> 1.8 <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>maven.compiler.target</span><span class="token punctuation">&gt;</span></span> 
     <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>junit.version</span><span class="token punctuation">&gt;</span></span> 4.12 <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>junit.version</span><span class="token punctuation">&gt;</span></span> 
     <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>log4j.version</span><span class="token punctuation">&gt;</span></span> 1.2.17 <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>log4j.version</span><span class="token punctuation">&gt;</span></span> 
     <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>lombok.version</span><span class="token punctuation">&gt;</span></span> 1.16.18 <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>lombok.version</span><span class="token punctuation">&gt;</span></span> 
     <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>mysql.version</span><span class="token punctuation">&gt;</span></span> 5.1.47 <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>mysql.version</span><span class="token punctuation">&gt;</span></span> 
     <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>druid.version</span><span class="token punctuation">&gt;</span></span> 1.1.16 <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>druid.version</span><span class="token punctuation">&gt;</span></span> 
     <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>mapper.version</span><span class="token punctuation">&gt;</span></span> 4.1.5 <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>mapper.version</span><span class="token punctuation">&gt;</span></span> 
     <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>mybatis.spring.boot.version</span><span class="token punctuation">&gt;</span></span> 1.3.0 <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>mybatis.spring.boot.version</span><span class="token punctuation">&gt;</span></span> 
   <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>properties</span><span class="token punctuation">&gt;</span></span> 

   <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependencies</span><span class="token punctuation">&gt;</span></span> 
     <span class="token comment">&lt;!--guava Google 开源的  Guava 中自带的布隆过滤器 --&gt;</span>
     <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">&gt;</span></span> 
       <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span> com.google.guava <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span> 
       <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span> guava <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span> 
       <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>version</span><span class="token punctuation">&gt;</span></span> 23.0 <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>version</span><span class="token punctuation">&gt;</span></span> 
     <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">&gt;</span></span> 
     <span class="token comment">&lt;!-- redisson --&gt;</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">&gt;</span></span> 
       <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span> org.redisson <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span> 
       <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span> redisson <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span> 
       <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>version</span><span class="token punctuation">&gt;</span></span> 3.13.4 <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>version</span><span class="token punctuation">&gt;</span></span> 
     <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">&gt;</span></span> 
     <span class="token comment">&lt;!--SpringBoot 通用依赖模块 --&gt;</span>
     <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">&gt;</span></span> 
       <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span> org.springframework.boot <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span> 
       <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span> spring-boot-starter-web <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span> 
     <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">&gt;</span></span> 
     <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">&gt;</span></span> 
       <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span> org.springframework.boot <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span> 
       <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span> spring-boot-starter-actuator <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span> 
     <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">&gt;</span></span> 
     <span class="token comment">&lt;!--swagger2--&gt;</span>
     <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">&gt;</span></span> 
       <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span> io.springfox <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span> 
       <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span> springfox-swagger2 <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span> 
       <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>version</span><span class="token punctuation">&gt;</span></span> 2.9.2 <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>version</span><span class="token punctuation">&gt;</span></span> 
     <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">&gt;</span></span> 
     <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">&gt;</span></span> 
       <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span> io.springfox <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span> 
       <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span> springfox-swagger-ui <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span> 
       <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>version</span><span class="token punctuation">&gt;</span></span> 2.9.2 <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>version</span><span class="token punctuation">&gt;</span></span> 
     <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">&gt;</span></span> 
     <span class="token comment">&lt;!--SpringBoot 与 Redis 整合依赖 --&gt;</span>
     <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">&gt;</span></span> 
       <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span> org.springframework.boot <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span> 
       <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span> spring-boot-starter-data-redis <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span> 
     <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">&gt;</span></span> 
     <span class="token comment">&lt;!--springCache--&gt;</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">&gt;</span></span> 
       <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span> org.springframework.boot <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span> 
       <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span> spring-boot-starter-cache <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span> 
     <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">&gt;</span></span> 
     <span class="token comment">&lt;!--springCache 连接池依赖包 --&gt;</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">&gt;</span></span> 
       <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span> org.apache.commons <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span> 
       <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span> commons-pool2 <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span> 
     <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">&gt;</span></span> 
     <span class="token comment">&lt;!-- jedis --&gt;</span>
     <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">&gt;</span></span> 
       <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span> redis.clients <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span> 
       <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span> jedis <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span> 
       <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>version</span><span class="token punctuation">&gt;</span></span> 3.1.0 <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>version</span><span class="token punctuation">&gt;</span></span> 
     <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">&gt;</span></span> 
     <span class="token comment">&lt;!--Mysql 数据库驱动 --&gt;</span>
     <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">&gt;</span></span> 
       <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span> mysql <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span> 
       <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span> mysql-connector-java <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span> 
       <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>version</span><span class="token punctuation">&gt;</span></span> 5.1.47 <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>version</span><span class="token punctuation">&gt;</span></span> 
     <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">&gt;</span></span> 
     <span class="token comment">&lt;!--SpringBoot 集成 druid 连接池 --&gt;</span>
     <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">&gt;</span></span> 
       <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span> com.alibaba <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span> 
       <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span> druid-spring-boot-starter <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span> 
       <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>version</span><span class="token punctuation">&gt;</span></span> 1.1.10 <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>version</span><span class="token punctuation">&gt;</span></span> 
     <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">&gt;</span></span> 
     <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">&gt;</span></span> 
       <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span> com.alibaba <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span> 
       <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span> druid <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span> 
       <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>version</span><span class="token punctuation">&gt;</span></span> \${druid.version} <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>version</span><span class="token punctuation">&gt;</span></span> 
     <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">&gt;</span></span> 
     <span class="token comment">&lt;!--mybatis 和 springboot 整合 --&gt;</span>
     <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">&gt;</span></span> 
       <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span> org.mybatis.spring.boot <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span> 
       <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span> mybatis-spring-boot-starter <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span> 
       <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>version</span><span class="token punctuation">&gt;</span></span> \${mybatis.spring.boot.version} <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>version</span><span class="token punctuation">&gt;</span></span> 
     <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">&gt;</span></span> 
     <span class="token comment">&lt;!-- 添加 springboot 对 amqp 的支持 --&gt;</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">&gt;</span></span> 
       <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span> org.springframework.boot <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span> 
       <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span> spring-boot-starter-amqp <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span> 
     <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">&gt;</span></span> 
     <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">&gt;</span></span> 
       <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span> commons-codec <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span> 
       <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span> commons-codec <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span> 
       <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>version</span><span class="token punctuation">&gt;</span></span> 1.10 <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>version</span><span class="token punctuation">&gt;</span></span> 
     <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">&gt;</span></span> 
     <span class="token comment">&lt;!-- 通用基础配置 junit/devtools/test/log4j/lombok/hutool--&gt;</span>
     <span class="token comment">&lt;!--hutool--&gt;</span>
     <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">&gt;</span></span> 
       <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span> cn.hutool <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span> 
       <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span> hutool-all <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span> 
       <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>version</span><span class="token punctuation">&gt;</span></span> 5.2.3 <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>version</span><span class="token punctuation">&gt;</span></span> 
     <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">&gt;</span></span> 
     <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">&gt;</span></span> 
       <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span> junit <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span> 
       <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span> junit <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span> 
       <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>version</span><span class="token punctuation">&gt;</span></span> \${junit.version} <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>version</span><span class="token punctuation">&gt;</span></span> 
     <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">&gt;</span></span> 
     <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">&gt;</span></span> 
       <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span> org.springframework.boot <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span> 
       <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span> spring-boot-devtools <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span> 
       <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>scope</span><span class="token punctuation">&gt;</span></span> runtime <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>scope</span><span class="token punctuation">&gt;</span></span> 
       <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>optional</span><span class="token punctuation">&gt;</span></span> true <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>optional</span><span class="token punctuation">&gt;</span></span> 
     <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">&gt;</span></span> 
     <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">&gt;</span></span> 
       <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span> org.springframework.boot <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span> 
       <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span> spring-boot-starter-test <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span> 
       <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>scope</span><span class="token punctuation">&gt;</span></span> test <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>scope</span><span class="token punctuation">&gt;</span></span> 
     <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">&gt;</span></span> 
     <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">&gt;</span></span> 
       <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span> log4j <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span> 
       <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span> log4j <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span> 
       <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>version</span><span class="token punctuation">&gt;</span></span> \${log4j.version} <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>version</span><span class="token punctuation">&gt;</span></span> 
     <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">&gt;</span></span> 
     <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">&gt;</span></span> 
       <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span> org.projectlombok <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span> 
       <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span> lombok <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span> 
       <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>version</span><span class="token punctuation">&gt;</span></span> \${lombok.version} <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>version</span><span class="token punctuation">&gt;</span></span> 
       <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>optional</span><span class="token punctuation">&gt;</span></span> true <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>optional</span><span class="token punctuation">&gt;</span></span> 
     <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">&gt;</span></span> 
     <span class="token comment">&lt;!--persistence--&gt;</span>
     <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">&gt;</span></span> 
       <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span> javax.persistence <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span> 
       <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span> persistence-api <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span> 
       <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>version</span><span class="token punctuation">&gt;</span></span> 1.0.2 <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>version</span><span class="token punctuation">&gt;</span></span> 
     <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">&gt;</span></span> 
     <span class="token comment">&lt;!-- 通用 Mapper--&gt;</span>
     <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">&gt;</span></span> 
       <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span> tk.mybatis <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span> 
       <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span> mapper <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span> 
       <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>version</span><span class="token punctuation">&gt;</span></span> \${mapper.version} <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>version</span><span class="token punctuation">&gt;</span></span> 
     <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">&gt;</span></span> 
   <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependencies</span><span class="token punctuation">&gt;</span></span> 

   <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>build</span><span class="token punctuation">&gt;</span></span> 
     <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>plugins</span><span class="token punctuation">&gt;</span></span> 
       <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>plugin</span><span class="token punctuation">&gt;</span></span> 
         <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span> org.springframework.boot <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span> 
         <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span> spring-boot-maven-plugin <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span> 
       <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>plugin</span><span class="token punctuation">&gt;</span></span> 
       <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>plugin</span><span class="token punctuation">&gt;</span></span> 
         <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span> org.apache.maven.plugins <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span> 
         <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span> maven-resources-plugin <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span> 
         <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>version</span><span class="token punctuation">&gt;</span></span> 3.1.0 <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>version</span><span class="token punctuation">&gt;</span></span> 
       <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>plugin</span><span class="token punctuation">&gt;</span></span> 
     <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>plugins</span><span class="token punctuation">&gt;</span></span> 
   <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>build</span><span class="token punctuation">&gt;</span></span> 

 <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>project</span><span class="token punctuation">&gt;</span></span> 
</code></pre></div><p><strong>写YML</strong></p><div class="language-yaml" data-ext="yml"><pre class="language-yaml"><code>server.port = 6001
========================alibaba.druid* 相关配置 <span class="token important">*=====================</span>
spring.datasource.type = com.alibaba.druid.pool.DruidDataSource
spring.datasource.driver<span class="token punctuation">-</span>class<span class="token punctuation">-</span>name = com.mysql.jdbc.Driver
spring.datasource.url= jdbc<span class="token punctuation">:</span>mysql<span class="token punctuation">:</span>//192.168.111.169 <span class="token punctuation">:</span>3306/db2021<span class="token punctuation">?</span>useUnicode=true<span class="token important">&amp;characterEncoding=utf-8&amp;useSSL=false</span>
spring.datasource.username = root

spring.datasource.password = 123456
spring.datasource.druid.test<span class="token punctuation">-</span>while<span class="token punctuation">-</span>idle = false

========================redis* 相关配置 <span class="token important">*=====================</span>

spring.redis.database = 0
spring.redis.host = 192.168.111.169
spring.redis.port = 6379
spring.redis.password =
spring.redis.lettuce.pool.max<span class="token punctuation">-</span>active = 8
spring.redis.lettuce.pool.max<span class="token punctuation">-</span>wait = <span class="token punctuation">-</span>1ms
spring.redis.lettuce.pool.max<span class="token punctuation">-</span>idle = 8
spring.redis.lettuce.pool.min<span class="token punctuation">-</span>idle = 0

========================mybatis 相关配置 <span class="token important">*===================*=</span>

mybatis.mapper<span class="token punctuation">-</span>locations = classpath<span class="token punctuation">:</span>mapper/\\<span class="token important">*.xml</span>
mybatis.type<span class="token punctuation">-</span>aliases<span class="token punctuation">-</span>package = com.atguigu.docker.entities

========================swagger=====================

spring.swagger2.enabled = true
</code></pre></div><p><strong>主启动</strong></p><p><img src="`+sa+`" alt="54"></p><p><strong>业务类</strong></p><blockquote><p>一、config配置类</p><p>RedisConfig</p><div class="language-java" data-ext="java"><pre class="language-java"><code><span class="token keyword">package</span>  <span class="token namespace">com<span class="token punctuation">.</span>atguigu<span class="token punctuation">.</span>docker<span class="token punctuation">.</span>config</span><span class="token punctuation">;</span>
<span class="token keyword">import</span>  <span class="token import"><span class="token namespace">lombok<span class="token punctuation">.</span>extern<span class="token punctuation">.</span>slf4j<span class="token punctuation">.</span></span> <span class="token class-name">Slf4j</span></span> <span class="token punctuation">;</span>
<span class="token keyword">import</span>  <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>context<span class="token punctuation">.</span>annotation<span class="token punctuation">.</span></span><span class="token class-name">Bean</span></span> <span class="token punctuation">;</span>
<span class="token keyword">import</span>  <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>context<span class="token punctuation">.</span>annotation<span class="token punctuation">.</span></span><span class="token class-name">Configuration</span></span> <span class="token punctuation">;</span>
<span class="token keyword">import</span>  <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>data<span class="token punctuation">.</span>redis<span class="token punctuation">.</span>connection<span class="token punctuation">.</span>lettuce<span class="token punctuation">.</span></span><span class="token class-name">LettuceConnectionFactory</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span>  <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>data<span class="token punctuation">.</span>redis<span class="token punctuation">.</span>core<span class="token punctuation">.</span></span><span class="token class-name">RedisTemplate</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span>  <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>data<span class="token punctuation">.</span>redis<span class="token punctuation">.</span>serializer<span class="token punctuation">.</span></span><span class="token class-name">GenericJackson2JsonRedisSerializer</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span>  <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>data<span class="token punctuation">.</span>redis<span class="token punctuation">.</span>serializer<span class="token punctuation">.</span></span><span class="token class-name">StringRedisSerializer</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span>  <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>io<span class="token punctuation">.</span></span><span class="token class-name">Serializable</span></span><span class="token punctuation">;</span>
	<span class="token doc-comment comment">/**
	*  <span class="token keyword">@auther</span>  zzyy
	*  <span class="token keyword">@create</span>  2021-10-27 17:19
	*/</span> 
	<span class="token annotation punctuation">@Configuration</span>
	<span class="token annotation punctuation">@Slf4j</span>
	<span class="token keyword">public</span> <span class="token keyword">class</span>  <span class="token class-name">RedisConfig</span><span class="token punctuation">{</span>    
	<span class="token doc-comment comment">/**
	* <span class="token keyword">@param</span>  <span class="token parameter">lettuceConnectionFactory</span>     
	* <span class="token keyword">@return</span>    
	* redis 序列化的工具配置类，下面这个请一定开启配置     
	* 127.0.0.1:6379&gt; keys *    
	* 1) &quot;ord:102&quot;   序列化过     
	* 2) &quot;\\xac\\xed\\x00\\x05t\\x00\\aord:102&quot;    野生，没有序列化过     
	*/</span>    
<span class="token annotation punctuation">@Bean</span>    
<span class="token keyword">public</span>  <span class="token class-name">RedisTemplate</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">,</span><span class="token class-name">Serializable</span><span class="token punctuation">&gt;</span></span> <span class="token function">redisTemplate</span><span class="token punctuation">(</span><span class="token class-name">LettuceConnectionFactory</span> lettuceConnectionFactory<span class="token punctuation">)</span>   <span class="token punctuation">{</span>       
	<span class="token class-name">RedisTemplate</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">,</span><span class="token class-name">Serializable</span><span class="token punctuation">&gt;</span></span> redisTemplate <span class="token operator">=</span>  <span class="token keyword">new</span>  <span class="token class-name">RedisTemplate</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	redisTemplate<span class="token punctuation">.</span><span class="token function">setConnectionFactory</span><span class="token punctuation">(</span>lettuceConnectionFactory<span class="token punctuation">)</span><span class="token punctuation">;</span>        
	<span class="token comment">// 设置 key 序列化方式 string        </span>
	redisTemplate<span class="token punctuation">.</span><span class="token function">setKeySerializer</span><span class="token punctuation">(</span> <span class="token keyword">new</span>  <span class="token class-name">StringRedisSerializer</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>        
	<span class="token comment">// 设置 value 的序列化方式 json        </span>
	redisTemplate<span class="token punctuation">.</span><span class="token function">setValueSerializer</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">GenericJackson2JsonRedisSerializer</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	redisTemplate<span class="token punctuation">.</span><span class="token function">setHashKeySerializer</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">StringRedisSerializer</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
 redisTemplate<span class="token punctuation">.</span><span class="token function">setHashValueSerializer</span><span class="token punctuation">(</span> <span class="token keyword">new</span> <span class="token class-name">GenericJackson2JsonRedisSerializer</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
 redisTemplate<span class="token punctuation">.</span><span class="token function">afterPropertiesSet</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
 <span class="token keyword">return</span>  redisTemplate<span class="token punctuation">;</span>   
   <span class="token punctuation">}</span>
 <span class="token punctuation">}</span>

</code></pre></div></blockquote><p><strong>SwaggerConfig</strong></p><div class="language-java" data-ext="java"><pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">com<span class="token punctuation">.</span>atguigu<span class="token punctuation">.</span>docker<span class="token punctuation">.</span>config</span><span class="token punctuation">;</span>
 
 <span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>beans<span class="token punctuation">.</span>factory<span class="token punctuation">.</span>annotation<span class="token punctuation">.</span></span> <span class="token class-name">Value</span></span> <span class="token punctuation">;</span>
 <span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>context<span class="token punctuation">.</span>annotation<span class="token punctuation">.</span></span> <span class="token class-name">Bean</span></span> <span class="token punctuation">;</span>
 <span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>context<span class="token punctuation">.</span>annotation<span class="token punctuation">.</span></span> <span class="token class-name">Configuration</span></span> <span class="token punctuation">;</span>
 <span class="token keyword">import</span> <span class="token import"><span class="token namespace">springfox<span class="token punctuation">.</span>documentation<span class="token punctuation">.</span>builders<span class="token punctuation">.</span></span><span class="token class-name">ApiInfoBuilder</span></span><span class="token punctuation">;</span>
 <span class="token keyword">import</span> <span class="token import"><span class="token namespace">springfox<span class="token punctuation">.</span>documentation<span class="token punctuation">.</span>builders<span class="token punctuation">.</span></span><span class="token class-name">PathSelectors</span></span><span class="token punctuation">;</span>
 <span class="token keyword">import</span> <span class="token import"><span class="token namespace">springfox<span class="token punctuation">.</span>documentation<span class="token punctuation">.</span>builders<span class="token punctuation">.</span></span><span class="token class-name">RequestHandlerSelectors</span></span><span class="token punctuation">;</span>
 <span class="token keyword">import</span> <span class="token import"><span class="token namespace">springfox<span class="token punctuation">.</span>documentation<span class="token punctuation">.</span>service<span class="token punctuation">.</span></span><span class="token class-name">ApiInfo</span></span><span class="token punctuation">;</span>
 <span class="token keyword">import</span> <span class="token import"><span class="token namespace">springfox<span class="token punctuation">.</span>documentation<span class="token punctuation">.</span>spi<span class="token punctuation">.</span></span><span class="token class-name">DocumentationType</span></span><span class="token punctuation">;</span>
 <span class="token keyword">import</span> <span class="token import"><span class="token namespace">springfox<span class="token punctuation">.</span>documentation<span class="token punctuation">.</span>spring<span class="token punctuation">.</span>web<span class="token punctuation">.</span>plugins<span class="token punctuation">.</span></span><span class="token class-name">Docket</span></span><span class="token punctuation">;</span>
 <span class="token keyword">import</span> <span class="token import"><span class="token namespace">springfox<span class="token punctuation">.</span>documentation<span class="token punctuation">.</span>swagger2<span class="token punctuation">.</span>annotations<span class="token punctuation">.</span></span> <span class="token class-name">EnableSwagger2</span></span> <span class="token punctuation">;</span>
 
 <span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>text<span class="token punctuation">.</span></span><span class="token class-name">SimpleDateFormat</span></span><span class="token punctuation">;</span>
 <span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>util<span class="token punctuation">.</span></span><span class="token class-name">Date</span></span><span class="token punctuation">;</span>
 
 <span class="token doc-comment comment">/**
  *<span class="token keyword">@auther</span> zzyy
  *<span class="token keyword">@create</span> 2021-05-01 16:18
  */</span>
 <span class="token annotation punctuation">@Configuration</span>
 <span class="token annotation punctuation">@EnableSwagger2</span>
 <span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">SwaggerConfig</span>
 <span class="token punctuation">{</span>
   <span class="token annotation punctuation">@Value</span> <span class="token punctuation">(</span> <span class="token string">&quot;\${spring.swagger2.enabled}&quot;</span> <span class="token punctuation">)</span>
   <span class="token keyword">private</span> <span class="token class-name">Boolean</span> enabled <span class="token punctuation">;</span>
 
   <span class="token annotation punctuation">@Bean</span>
   <span class="token keyword">public</span> <span class="token class-name">Docket</span> <span class="token function">createRestApi</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
     <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">Docket</span><span class="token punctuation">(</span><span class="token class-name">DocumentationType</span><span class="token punctuation">.</span> <span class="token operator">*</span><span class="token constant">SWAGGER_2</span>\\<span class="token operator">*</span> <span class="token punctuation">)</span>
         <span class="token punctuation">.</span><span class="token function">apiInfo</span><span class="token punctuation">(</span><span class="token function">apiInfo</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
         <span class="token punctuation">.</span><span class="token function">enable</span><span class="token punctuation">(</span> enabled <span class="token punctuation">)</span>
         <span class="token punctuation">.</span><span class="token function">select</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
         <span class="token punctuation">.</span><span class="token function">apis</span><span class="token punctuation">(</span><span class="token class-name">RequestHandlerSelectors</span><span class="token punctuation">.</span> <span class="token operator">*</span>basePackage<span class="token operator">*</span> <span class="token punctuation">(</span> <span class="token string">&quot;com.atguigu.docker&quot;</span> <span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token operator">*</span><span class="token comment">//* 你自己的 *package</span>
         <span class="token punctuation">.</span><span class="token function">paths</span><span class="token punctuation">(</span><span class="token class-name">PathSelectors</span><span class="token punctuation">.</span> <span class="token operator">*</span>any<span class="token operator">*</span> <span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
         <span class="token punctuation">.</span><span class="token function">build</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
   <span class="token punctuation">}</span>
 
   <span class="token keyword">public</span> <span class="token class-name">ApiInfo</span> <span class="token function">apiInfo</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
     <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">ApiInfoBuilder</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
         <span class="token punctuation">.</span><span class="token function">title</span><span class="token punctuation">(</span> <span class="token string">&quot; 尚硅谷 Java 大厂技术 &quot;</span> <span class="token operator">+</span> <span class="token string">&quot; \\t &quot;</span> <span class="token operator">+</span> <span class="token keyword">new</span> <span class="token class-name">SimpleDateFormat</span><span class="token punctuation">(</span> <span class="token string">&quot;yyyy-MM-dd&quot;</span> <span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">format</span><span class="token punctuation">(</span> <span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
         <span class="token punctuation">.</span><span class="token function">description</span><span class="token punctuation">(</span> <span class="token string">&quot;docker-compose&quot;</span> <span class="token punctuation">)</span>
         <span class="token punctuation">.</span><span class="token function">version</span><span class="token punctuation">(</span> <span class="token string">&quot;1.0&quot;</span> <span class="token punctuation">)</span>
         <span class="token punctuation">.</span><span class="token function">termsOfServiceUrl</span><span class="token punctuation">(</span> <span class="token string">&quot;https://www.atguigu.com/&quot;</span> <span class="token punctuation">)</span>
         <span class="token punctuation">.</span><span class="token function">build</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
   <span class="token punctuation">}</span>
 <span class="token punctuation">}</span>
</code></pre></div><p><strong>新建entity</strong> <strong>User</strong></p><div class="language-java" data-ext="java"><pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">com<span class="token punctuation">.</span>atguigu<span class="token punctuation">.</span>docker<span class="token punctuation">.</span>entities</span><span class="token punctuation">;</span>
 
 <span class="token keyword">import</span> <span class="token import"><span class="token namespace">javax<span class="token punctuation">.</span>persistence<span class="token punctuation">.</span></span> <span class="token class-name">Column</span></span> <span class="token punctuation">;</span>
 <span class="token keyword">import</span> <span class="token import"><span class="token namespace">javax<span class="token punctuation">.</span>persistence<span class="token punctuation">.</span></span> <span class="token class-name">GeneratedValue</span></span> <span class="token punctuation">;</span>
 <span class="token keyword">import</span> <span class="token import"><span class="token namespace">javax<span class="token punctuation">.</span>persistence<span class="token punctuation">.</span></span> <span class="token class-name">Id</span></span> <span class="token punctuation">;</span>
 <span class="token keyword">import</span> <span class="token import"><span class="token namespace">javax<span class="token punctuation">.</span>persistence<span class="token punctuation">.</span></span> <span class="token class-name">Table</span></span> <span class="token punctuation">;</span>
 <span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>util<span class="token punctuation">.</span></span><span class="token class-name">Date</span></span><span class="token punctuation">;</span>
 
 <span class="token annotation punctuation">@Table</span> <span class="token punctuation">(</span>name <span class="token operator">=</span> <span class="token string">&quot;t_user&quot;</span> <span class="token punctuation">)</span>
 <span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">User</span>
 <span class="token punctuation">{</span>
   <span class="token annotation punctuation">@Id</span>
   <span class="token annotation punctuation">@GeneratedValue</span> <span class="token punctuation">(</span>generator <span class="token operator">=</span> <span class="token string">&quot;JDBC&quot;</span> <span class="token punctuation">)</span>
   <span class="token keyword">private</span> <span class="token class-name">Integer</span> id <span class="token punctuation">;</span>

	 <span class="token keyword">private</span> <span class="token class-name">String</span> username <span class="token punctuation">;</span>
   <span class="token keyword">private</span> <span class="token class-name">String</span> password <span class="token punctuation">;</span>
 	 <span class="token keyword">private</span> <span class="token class-name">Byte</span> sex <span class="token punctuation">;</span>
   <span class="token keyword">private</span> <span class="token class-name">Byte</span> deleted <span class="token punctuation">;</span>
   <span class="token annotation punctuation">@Column</span> <span class="token punctuation">(</span>name <span class="token operator">=</span> <span class="token string">&quot;update_time&quot;</span> <span class="token punctuation">)</span>
   <span class="token keyword">private</span> <span class="token class-name">Date</span> updateTime <span class="token punctuation">;</span>
   <span class="token annotation punctuation">@Column</span> <span class="token punctuation">(</span>name <span class="token operator">=</span> <span class="token string">&quot;create_time&quot;</span> <span class="token punctuation">)</span>
   <span class="token keyword">private</span> <span class="token class-name">Date</span> createTime <span class="token punctuation">;</span>
   <span class="token keyword">public</span> <span class="token class-name">Integer</span> <span class="token function">getId</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
     <span class="token keyword">return</span> id <span class="token punctuation">;</span>
   <span class="token punctuation">}</span>
   <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">setId</span><span class="token punctuation">(</span><span class="token class-name">Integer</span> id<span class="token punctuation">)</span> <span class="token punctuation">{</span>
     <span class="token keyword">this</span> <span class="token punctuation">.</span> id <span class="token operator">=</span> id<span class="token punctuation">;</span>
   <span class="token punctuation">}</span>

   <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">getUsername</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
     <span class="token keyword">return</span> username <span class="token punctuation">;</span>
   <span class="token punctuation">}</span>

	 <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">setUsername</span><span class="token punctuation">(</span><span class="token class-name">String</span> username<span class="token punctuation">)</span> <span class="token punctuation">{</span>
     <span class="token keyword">this</span> <span class="token punctuation">.</span> username <span class="token operator">=</span> username<span class="token punctuation">;</span>
   <span class="token punctuation">}</span>
	 <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">getPassword</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
     <span class="token keyword">return</span> password <span class="token punctuation">;</span>
   <span class="token punctuation">}</span>
   <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">setPassword</span><span class="token punctuation">(</span><span class="token class-name">String</span> password<span class="token punctuation">)</span> <span class="token punctuation">{</span>
     <span class="token keyword">this</span> <span class="token punctuation">.</span> password <span class="token operator">=</span> password<span class="token punctuation">;</span>
   <span class="token punctuation">}</span>
   <span class="token keyword">public</span> <span class="token class-name">Byte</span> <span class="token function">getSex</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
     <span class="token keyword">return</span> sex <span class="token punctuation">;</span>
   <span class="token punctuation">}</span>
	 <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">setSex</span><span class="token punctuation">(</span><span class="token class-name">Byte</span> sex<span class="token punctuation">)</span> <span class="token punctuation">{</span>
     <span class="token keyword">this</span> <span class="token punctuation">.</span> sex <span class="token operator">=</span> sex<span class="token punctuation">;</span>
   <span class="token punctuation">}</span>
   <span class="token keyword">public</span> <span class="token class-name">Byte</span> <span class="token function">getDeleted</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
     <span class="token keyword">return</span> deleted <span class="token punctuation">;</span>
   <span class="token punctuation">}</span>
   <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">setDeleted</span><span class="token punctuation">(</span><span class="token class-name">Byte</span> deleted<span class="token punctuation">)</span> <span class="token punctuation">{</span>
     <span class="token keyword">this</span> <span class="token punctuation">.</span> deleted <span class="token operator">=</span> deleted<span class="token punctuation">;</span>
   <span class="token punctuation">}</span>
   <span class="token keyword">public</span> <span class="token class-name">Date</span> <span class="token function">getUpdateTime</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
     <span class="token keyword">return</span> updateTime <span class="token punctuation">;</span>
   <span class="token punctuation">}</span>
   <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">setUpdateTime</span><span class="token punctuation">(</span><span class="token class-name">Date</span> updateTime<span class="token punctuation">)</span> <span class="token punctuation">{</span>
     <span class="token keyword">this</span> <span class="token punctuation">.</span> updateTime <span class="token operator">=</span> updateTime<span class="token punctuation">;</span>
   <span class="token punctuation">}</span>
   <span class="token keyword">public</span> <span class="token class-name">Date</span> <span class="token function">getCreateTime</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
     <span class="token keyword">return</span> createTime <span class="token punctuation">;</span>
   <span class="token punctuation">}</span>
   <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">setCreateTime</span><span class="token punctuation">(</span><span class="token class-name">Date</span> createTime<span class="token punctuation">)</span> <span class="token punctuation">{</span>
     <span class="token keyword">this</span> <span class="token punctuation">.</span> createTime <span class="token operator">=</span> createTime<span class="token punctuation">;</span>
   <span class="token punctuation">}</span>
 <span class="token punctuation">}</span> 
</code></pre></div><p><strong>UserDTO</strong></p><div class="language-java" data-ext="java"><pre class="language-java"><code><span class="token keyword">package</span>  <span class="token namespace">com<span class="token punctuation">.</span>atguigu<span class="token punctuation">.</span>docker<span class="token punctuation">.</span>entities</span><span class="token punctuation">;</span>
<span class="token keyword">import</span>  <span class="token import"><span class="token namespace">io<span class="token punctuation">.</span>swagger<span class="token punctuation">.</span>annotations<span class="token punctuation">.</span></span> <span class="token class-name">ApiModel</span></span> <span class="token punctuation">;</span>
<span class="token keyword">import</span>  <span class="token import"><span class="token namespace">io<span class="token punctuation">.</span>swagger<span class="token punctuation">.</span>annotations<span class="token punctuation">.</span></span> <span class="token class-name">ApiModelProperty</span></span> <span class="token punctuation">;</span>
<span class="token keyword">import</span>  <span class="token import"><span class="token namespace">lombok<span class="token punctuation">.</span></span> <span class="token class-name">AllArgsConstructor</span></span> <span class="token punctuation">;</span>
<span class="token keyword">import</span>  <span class="token import"><span class="token namespace">lombok<span class="token punctuation">.</span></span> <span class="token class-name">Data</span></span> <span class="token punctuation">;</span>
<span class="token keyword">import</span>  <span class="token import"><span class="token namespace">lombok<span class="token punctuation">.</span></span> <span class="token class-name">NoArgsConstructor</span></span> <span class="token punctuation">;</span>
<span class="token keyword">import</span>  <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>io<span class="token punctuation">.</span></span><span class="token class-name">Serializable</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span>  <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>util<span class="token punctuation">.</span></span><span class="token class-name">Date</span></span><span class="token punctuation">;</span>
<span class="token annotation punctuation">@NoArgsConstructor</span>
<span class="token annotation punctuation">@AllArgsConstructor</span>
<span class="token annotation punctuation">@Data</span>
<span class="token annotation punctuation">@ApiModel</span> <span class="token punctuation">(</span>value <span class="token operator">=</span>  <span class="token string">&quot; 用户信息 &quot;</span> <span class="token punctuation">)</span>
<span class="token keyword">public</span> <span class="token keyword">class</span>  <span class="token class-name">UserDTO</span>  <span class="token keyword">implements</span>  <span class="token class-name">Serializable</span><span class="token punctuation">{</span>     

	<span class="token annotation punctuation">@ApiModelProperty</span> <span class="token punctuation">(</span>value <span class="token operator">=</span>  <span class="token string">&quot; 用户 ID&quot;</span> <span class="token punctuation">)</span>     
	<span class="token keyword">private</span>  <span class="token class-name">Integer</span>  id <span class="token punctuation">;</span>     
	<span class="token annotation punctuation">@ApiModelProperty</span> <span class="token punctuation">(</span>value <span class="token operator">=</span>  <span class="token string">&quot; 用户名 &quot;</span> <span class="token punctuation">)</span>     
	<span class="token keyword">private</span>  <span class="token class-name">String</span>  username <span class="token punctuation">;</span>     
	<span class="token annotation punctuation">@ApiModelProperty</span> <span class="token punctuation">(</span>value <span class="token operator">=</span>  <span class="token string">&quot; 密码 &quot;</span> <span class="token punctuation">)</span>     
	<span class="token keyword">private</span>  <span class="token class-name">String</span>  password <span class="token punctuation">;</span>     
	<span class="token annotation punctuation">@ApiModelProperty</span> <span class="token punctuation">(</span>value <span class="token operator">=</span>  <span class="token string">&quot; 性别  0= 女  1= 男  &quot;</span> <span class="token punctuation">)</span>     
	<span class="token keyword">private</span>  <span class="token class-name">Byte</span>  sex <span class="token punctuation">;</span>     
	<span class="token annotation punctuation">@ApiModelProperty</span> <span class="token punctuation">(</span>value <span class="token operator">=</span>  <span class="token string">&quot; 删除标志，默认 0 不删除， 1 删除 &quot;</span> <span class="token punctuation">)</span>     
	<span class="token keyword">private</span>  <span class="token class-name">Byte</span>  deleted <span class="token punctuation">;</span>     
	<span class="token annotation punctuation">@ApiModelProperty</span> <span class="token punctuation">(</span>value <span class="token operator">=</span>  <span class="token string">&quot; 更新时间 &quot;</span> <span class="token punctuation">)</span>     
	<span class="token keyword">private</span>  <span class="token class-name">Date</span>  updateTime <span class="token punctuation">;</span>     
	<span class="token annotation punctuation">@ApiModelProperty</span> <span class="token punctuation">(</span>value <span class="token operator">=</span>  <span class="token string">&quot; 创建时间 &quot;</span> <span class="token punctuation">)</span>     
	<span class="token keyword">private</span>  <span class="token class-name">Date</span>  createTime <span class="token punctuation">;</span>     
	<span class="token doc-comment comment">/**
	*  <span class="token keyword">@return</span>  id
	*/</span>     
	<span class="token keyword">public</span>  <span class="token class-name">Integer</span> <span class="token function">getId</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>         

		<span class="token keyword">return</span>  id <span class="token punctuation">;</span>    
	<span class="token punctuation">}</span>     
	<span class="token doc-comment comment">/**
	*  <span class="token keyword">@param</span>  <span class="token parameter">id</span> 
	*/</span>     
	<span class="token keyword">public</span> <span class="token keyword">void</span>  <span class="token function">setId</span><span class="token punctuation">(</span><span class="token class-name">Integer</span> id<span class="token punctuation">)</span> <span class="token punctuation">{</span> 
		<span class="token keyword">this</span> <span class="token punctuation">.</span> id  <span class="token operator">=</span> id<span class="token punctuation">;</span>   
		 <span class="token punctuation">}</span>     

	<span class="token doc-comment comment">/**
	*  获取用户名
	* 
	*  <span class="token keyword">@return</span>  username -  用户名
	*/</span>     
	<span class="token keyword">public</span>  <span class="token class-name">String</span> <span class="token function">getUsername</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">return</span>  username <span class="token punctuation">;</span>    
		<span class="token punctuation">}</span>    

	 <span class="token doc-comment comment">/**
	 *  设置用户名
	 *
	 *  <span class="token keyword">@param</span>  <span class="token parameter">username</span>  用户名
	 */</span>     
	 <span class="token keyword">public</span> <span class="token keyword">void</span>  <span class="token function">setUsername</span><span class="token punctuation">(</span><span class="token class-name">String</span> username<span class="token punctuation">)</span> <span class="token punctuation">{</span>
	 	<span class="token keyword">this</span><span class="token punctuation">.</span>username <span class="token operator">=</span> username<span class="token punctuation">;</span>
	 <span class="token punctuation">}</span>     

	 <span class="token doc-comment comment">/**
	 *  获取密码
	 *
	 *  <span class="token keyword">@return</span>  password -  密码
	 */</span>     
	 <span class="token keyword">public</span>  <span class="token class-name">String</span> <span class="token function">getPassword</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	 	<span class="token keyword">return</span>  password <span class="token punctuation">;</span>
	 <span class="token punctuation">}</span>     

	 <span class="token doc-comment comment">/**
	 *  设置密码
	 *
	 *  <span class="token keyword">@param</span>  <span class="token parameter">password</span>  密码
	 */</span>     
	 <span class="token keyword">public</span> <span class="token keyword">void</span>  <span class="token function">setPassword</span><span class="token punctuation">(</span><span class="token class-name">String</span> password<span class="token punctuation">)</span> <span class="token punctuation">{</span>
	 	<span class="token keyword">this</span><span class="token punctuation">.</span>password<span class="token operator">=</span>password<span class="token punctuation">;</span>
	 <span class="token punctuation">}</span>     

	 <span class="token doc-comment comment">/**
	 *获取性别  0= 女  1= 男
	 *
	 *  <span class="token keyword">@return</span>  sex -  性别  0= 女  1= 男
	 */</span>     
	 <span class="token keyword">public</span>  <span class="token class-name">Byte</span> <span class="token function">getSex</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	 	<span class="token keyword">return</span>  sex <span class="token punctuation">;</span>    
	 	<span class="token punctuation">}</span>     

	 <span class="token doc-comment comment">/**
	 *  设置性别  0= 女  1= 男       
	 *
	 *  <span class="token keyword">@param</span>  <span class="token parameter">sex</span>  性别  0= 女  1= 男       
	 */</span>    
	  <span class="token keyword">public</span> <span class="token keyword">void</span>  <span class="token function">setSex</span><span class="token punctuation">(</span><span class="token class-name">Byte</span> sex<span class="token punctuation">)</span> <span class="token punctuation">{</span>
	  <span class="token keyword">this</span><span class="token punctuation">.</span>sex <span class="token operator">=</span> sex<span class="token punctuation">;</span>
	  <span class="token punctuation">}</span>     

	  <span class="token doc-comment comment">/**
	  *  获取删除标志，默认 0 不删除， 1 删除      
	  *     
	  *  <span class="token keyword">@return</span>  deleted -  删除标志，默认 0 不删除， 1 删除      
	  */</span>    
	   <span class="token keyword">public</span>  <span class="token class-name">Byte</span> <span class="token function">getDeleted</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	   	<span class="token keyword">return</span>  deleted <span class="token punctuation">;</span>
	   <span class="token punctuation">}</span>     

	   <span class="token doc-comment comment">/**
	   *  设置删除标志，默认 0 不删除， 1 删除      
	   *
	   *  <span class="token keyword">@param</span>  <span class="token parameter">deleted</span>  删除标志，默认 0 不删除， 1 删除      
	   */</span>    
	    <span class="token keyword">public</span> <span class="token keyword">void</span>  <span class="token function">setDeleted</span><span class="token punctuation">(</span><span class="token class-name">Byte</span> deleted<span class="token punctuation">)</span> <span class="token punctuation">{</span>
	    	<span class="token keyword">this</span><span class="token punctuation">.</span>deleted <span class="token operator">=</span> deleted<span class="token punctuation">;</span>    
	    	<span class="token punctuation">}</span>     

	    <span class="token doc-comment comment">/**
	    *  获取更新时间
	    *
	    *  <span class="token keyword">@return</span>  update_time -  更新时间
	    */</span>     
	    <span class="token keyword">public</span>  <span class="token class-name">Date</span> <span class="token function">getUpdateTime</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	    	<span class="token keyword">return</span>  updateTime <span class="token punctuation">;</span> 
	    	<span class="token punctuation">}</span>     

	    <span class="token doc-comment comment">/**
	    *  设置更新时间 
      *
      *  <span class="token keyword">@param</span>  <span class="token parameter">updateTime</span>  更新时间     
      */</span>     
	    <span class="token keyword">public</span> <span class="token keyword">void</span>  <span class="token function">setUpdateTime</span><span class="token punctuation">(</span><span class="token class-name">Date</span> updateTime<span class="token punctuation">)</span> <span class="token punctuation">{</span>
	    	<span class="token keyword">this</span> <span class="token punctuation">.</span> updateTime  <span class="token operator">=</span> updateTime<span class="token punctuation">;</span>
	    	<span class="token punctuation">}</span>     

	    <span class="token doc-comment comment">/** 
      *  获取创建时间     
      *   
      *  <span class="token keyword">@return</span>  create_time -  创建时间   
      */</span>     
	    <span class="token keyword">public</span>  <span class="token class-name">Date</span> <span class="token function">getCreateTime</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>         
	    	<span class="token keyword">return</span>  createTime <span class="token punctuation">;</span>  
        <span class="token punctuation">}</span>     

	    <span class="token doc-comment comment">/**
	    *  设置创建时间 
	    *
	    *  <span class="token keyword">@param</span>  <span class="token parameter">createTime</span>  创建时间 
	    */</span>     
	    <span class="token keyword">public</span> <span class="token keyword">void</span>  <span class="token function">setCreateTime</span><span class="token punctuation">(</span><span class="token class-name">Date</span> createTime<span class="token punctuation">)</span> <span class="token punctuation">{</span>         
	    	<span class="token keyword">this</span> <span class="token punctuation">.</span> createTime  <span class="token operator">=</span> createTime<span class="token punctuation">;</span>    
	    	<span class="token punctuation">}</span>     

	    <span class="token annotation punctuation">@Override</span> 
	    <span class="token keyword">public</span>  <span class="token class-name">String</span> <span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>         \\
	    	<span class="token keyword">return</span>  <span class="token string">&quot;User{&quot;</span>  <span class="token operator">+</span>                 <span class="token string">&quot;id=&quot;</span>  <span class="token operator">+</span>  id  <span class="token operator">+</span>                 &quot;<span class="token punctuation">,</span> 
	    	username<span class="token operator">=</span>&#39;<span class="token string">&quot;  +  username  +  &#39; \\&#39; &#39;  +                 &quot;</span><span class="token punctuation">,</span> 
	    	password<span class="token operator">=</span>&#39;<span class="token string">&quot;  +  password  +  &#39; \\&#39; &#39;  +                 &quot;</span><span class="token punctuation">,</span> 
	    	sex<span class="token operator">=</span>&quot;  <span class="token operator">+</span>  sex  <span class="token operator">+</span> <span class="token char">&#39;}&#39;</span> <span class="token punctuation">;</span>    
	    <span class="token punctuation">}</span><span class="token punctuation">}</span> 
</code></pre></div><p><strong>新建mapper</strong></p><div class="language-java" data-ext="java"><pre class="language-java"><code>新建接口<span class="token class-name">UserMapper</span>
src\\main\\resource路径下新建mapper文件夹并新增<span class="token class-name">UserMapper</span><span class="token punctuation">.</span>xml

<span class="token keyword">package</span>  <span class="token namespace">com<span class="token punctuation">.</span>atguigu<span class="token punctuation">.</span>docker<span class="token punctuation">.</span>mapper</span><span class="token punctuation">;</span>
<span class="token keyword">import</span>  <span class="token import"><span class="token namespace">com<span class="token punctuation">.</span>atguigu<span class="token punctuation">.</span>docker<span class="token punctuation">.</span>entities<span class="token punctuation">.</span></span><span class="token class-name">User</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span>  <span class="token import"><span class="token namespace">tk<span class="token punctuation">.</span>mybatis<span class="token punctuation">.</span>mapper<span class="token punctuation">.</span>common<span class="token punctuation">.</span></span><span class="token class-name">Mapper</span></span><span class="token punctuation">;</span>
<span class="token keyword">public</span> <span class="token keyword">interface</span>  <span class="token class-name">UserMapper</span>  <span class="token keyword">extends</span>  <span class="token class-name">Mapper</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">User</span><span class="token punctuation">&gt;</span></span> <span class="token punctuation">{</span>
<span class="token punctuation">}</span> 
</code></pre></div><p><strong>UserMapper.xml</strong></p><div class="language-xml" data-ext="xml"><pre class="language-xml"><code> <span class="token prolog">&lt;? xml version =&quot;1.0&quot;  encoding =&quot;UTF-8&quot; ?&gt;</span>  

<span class="token doctype"><span class="token punctuation">&lt;!</span><span class="token doctype-tag">DOCTYPE</span>   <span class="token name">mapper</span>   <span class="token name">PUBLIC</span>   <span class="token string">&quot;-//mybatis.org//DTD Mapper 3.0//EN&quot;</span>   <span class="token string">&quot;http://mybatis.org/dtd/mybatis-3-mapper.dtd&quot;</span><span class="token punctuation">&gt;</span></span> 
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>mapper</span>  <span class="token attr-name">namespace</span> <span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>com.atguigu.docker.mapper.UserMapper<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>     
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>resultMap</span>  <span class="token attr-name">id</span> <span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>BaseResultMap<span class="token punctuation">&quot;</span></span>  <span class="token attr-name">type</span> <span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>com.atguigu.docker.entities.User<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>        
    <span class="token comment">&lt;!--        WARNING - @mbg.generated      --&gt;</span>       
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>id</span>  <span class="token attr-name">column</span> <span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>id<span class="token punctuation">&quot;</span></span>  <span class="token attr-name">jdbcType</span> <span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>INTEGER<span class="token punctuation">&quot;</span></span>  <span class="token attr-name">property</span> <span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>id<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>        
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>result</span>  <span class="token attr-name">column</span> <span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>username<span class="token punctuation">&quot;</span></span>  <span class="token attr-name">jdbcType</span> <span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>VARCHAR<span class="token punctuation">&quot;</span></span>  <span class="token attr-name">property</span> <span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>username<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>       
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>result</span>  <span class="token attr-name">column</span> <span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>password<span class="token punctuation">&quot;</span></span>  <span class="token attr-name">jdbcType</span> <span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>VARCHAR<span class="token punctuation">&quot;</span></span>  <span class="token attr-name">property</span> <span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>password<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>       
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>result</span>  <span class="token attr-name">column</span> <span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>sex<span class="token punctuation">&quot;</span></span>  <span class="token attr-name">jdbcType</span> <span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>TINYINT<span class="token punctuation">&quot;</span></span>  <span class="token attr-name">property</span> <span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>sex<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>       
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>result</span>  <span class="token attr-name">column</span> <span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>deleted<span class="token punctuation">&quot;</span></span>  <span class="token attr-name">jdbcType</span> <span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>TINYINT<span class="token punctuation">&quot;</span></span>  <span class="token attr-name">property</span> <span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>deleted<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>       
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>result</span>  <span class="token attr-name">column</span> <span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>update_time<span class="token punctuation">&quot;</span></span>  <span class="token attr-name">jdbcType</span> <span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>TIMESTAMP<span class="token punctuation">&quot;</span></span>  <span class="token attr-name">property</span> <span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>updateTime<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>       
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>result</span>  <span class="token attr-name">column</span> <span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>create_time<span class="token punctuation">&quot;</span></span>  <span class="token attr-name">jdbcType</span> <span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>TIMESTAMP<span class="token punctuation">&quot;</span></span>  <span class="token attr-name">property</span> <span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>createTime<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>     
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>resultMap</span><span class="token punctuation">&gt;</span></span>  
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>mapper</span><span class="token punctuation">&gt;</span></span> 
</code></pre></div><p><strong>新建Service</strong></p><div class="language-text" data-ext="text"><pre class="language-text"><code>
</code></pre></div><p><strong>新建Controller</strong></p><div class="language-text" data-ext="text"><pre class="language-text"><code>
</code></pre></div><p>mvn package命令将微服务形成新的jar包</p><p>并上传到Linux服务器/mydocker目录下</p><p><strong>编写Dockerfile</strong></p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 基础镜像使用java </span>
FROM java:8 
<span class="token comment"># 作者 </span>
MAINTAINER zzyy 
<span class="token comment"># VOLUME 指定临时文件目录为/tmp，在主机/var/lib/docker目录下创建了一个临时文件并链接到容器的/tmp </span>
VOLUME /tmp 
<span class="token comment"># 将jar包添加到容器中并更名为zzyy_docker.jar </span>
ADD docker_boot-0.0.1-SNAPSHOT.jar zzyy_docker.jar 
<span class="token comment"># 运行jar包 </span>
RUN <span class="token function">bash</span> <span class="token parameter variable">-c</span> <span class="token string">&#39;touch /zzyy_docker.jar&#39;</span> 
ENTRYPOINT <span class="token punctuation">[</span><span class="token string">&quot;java&quot;</span>,<span class="token string">&quot;-jar&quot;</span>,<span class="token string">&quot;/zzyy_docker.jar&quot;</span><span class="token punctuation">]</span> 
<span class="token comment">#暴露6001端口作为微服务 </span>
EXPOSE <span class="token number">6001</span> 
</code></pre></div><p><strong>构建镜像</strong></p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> build <span class="token parameter variable">-t</span> zzyy_docker:1.6 <span class="token builtin class-name">.</span>
</code></pre></div><p><strong>5.5.2 不用Compose</strong></p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code>一、单独的mysql容器实例
<span class="token number">1</span>. 新建mysql容器实例
<span class="token function">docker</span> run <span class="token parameter variable">-p</span> <span class="token number">3306</span>:3306 <span class="token parameter variable">--name</span> mysql57 <span class="token parameter variable">--privileged</span><span class="token operator">=</span>true <span class="token parameter variable">-v</span> /zzyyuse/mysql/conf:/etc/mysql/conf.d <span class="token parameter variable">-v</span> /zzyyuse/mysql/logs:/logs <span class="token parameter variable">-v</span> /zzyyuse/mysql/data:/var/lib/mysql <span class="token parameter variable">-e</span> <span class="token assign-left variable">MYSQL_ROOT_PASSWORD</span><span class="token operator">=</span><span class="token number">123456</span> <span class="token parameter variable">-d</span> mysql:5.7

<span class="token number">2</span>. 进入mysql容器实例并新建库db2021+新建表t_user
<span class="token function">docker</span> <span class="token builtin class-name">exec</span> <span class="token parameter variable">-it</span> mysql57 /bin/bash 
mysql <span class="token parameter variable">-uroot</span> <span class="token parameter variable">-p</span> 
create database db2021<span class="token punctuation">;</span> 
use db2021<span class="token punctuation">;</span> 
CREATE TABLE <span class="token variable"><span class="token variable">\`</span>t_user<span class="token variable">\`</span></span> <span class="token punctuation">(</span>
  <span class="token variable"><span class="token variable">\`</span><span class="token function">id</span><span class="token variable">\`</span></span> INT<span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">)</span> UNSIGNED NOT NULL AUTO_INCREMENT, 
  <span class="token variable"><span class="token variable">\`</span>username<span class="token variable">\`</span></span> VARCHAR<span class="token punctuation">(</span><span class="token number">50</span><span class="token punctuation">)</span> NOT NULL DEFAULT <span class="token string">&#39;&#39;</span> COMMENT <span class="token string">&#39;用户名&#39;</span>, 
  <span class="token variable"><span class="token variable">\`</span>password<span class="token variable">\`</span></span> VARCHAR<span class="token punctuation">(</span><span class="token number">50</span><span class="token punctuation">)</span> NOT NULL DEFAULT <span class="token string">&#39;&#39;</span> COMMENT <span class="token string">&#39;密码&#39;</span>, 
  <span class="token variable"><span class="token variable">\`</span>sex<span class="token variable">\`</span></span> TINYINT<span class="token punctuation">(</span><span class="token number">4</span><span class="token punctuation">)</span> NOT NULL DEFAULT <span class="token string">&#39;0&#39;</span> COMMENT <span class="token string">&#39;性别 0=女 1=男 &#39;</span>, 
  <span class="token variable"><span class="token variable">\`</span>deleted<span class="token variable">\`</span></span> TINYINT<span class="token punctuation">(</span><span class="token number">4</span><span class="token punctuation">)</span> UNSIGNED NOT NULL DEFAULT <span class="token string">&#39;0&#39;</span> COMMENT <span class="token string">&#39;删除标志，默认0不删除，1删除&#39;</span>, 
  <span class="token variable"><span class="token variable">\`</span>update_time<span class="token variable">\`</span></span> TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT <span class="token string">&#39;更新时间&#39;</span>, 
  <span class="token variable"><span class="token variable">\`</span>create_time<span class="token variable">\`</span></span> TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT <span class="token string">&#39;创建时间&#39;</span>, 
  PRIMARY KEY <span class="token punctuation">(</span><span class="token variable"><span class="token variable">\`</span><span class="token function">id</span><span class="token variable">\`</span></span><span class="token punctuation">)</span> 
<span class="token punctuation">)</span> <span class="token assign-left variable">ENGINE</span><span class="token operator">=</span>INNODB <span class="token assign-left variable">AUTO_INCREMENT</span><span class="token operator">=</span><span class="token number">1</span> DEFAULT <span class="token assign-left variable">CHARSET</span><span class="token operator">=</span>utf8mb4 <span class="token assign-left variable">COMMENT</span><span class="token operator">=</span><span class="token string">&#39;用户表&#39;</span><span class="token punctuation">;</span> 

</code></pre></div><p><strong>单独的redis容器实例</strong></p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> run  <span class="token parameter variable">-p</span> <span class="token number">6379</span>:6379 <span class="token parameter variable">--name</span> redis608 <span class="token parameter variable">--privileged</span><span class="token operator">=</span>true <span class="token parameter variable">-v</span> /app/redis/redis.conf:/etc/redis/redis.conf <span class="token parameter variable">-v</span> /app/redis/data:/data <span class="token parameter variable">-d</span> redis:6.0.8 redis-server /etc/redis/redis.conf 
</code></pre></div><p><strong>微服务工程</strong></p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> run <span class="token parameter variable">-d</span> <span class="token parameter variable">-p</span> <span class="token number">6001</span>:6001 zzyy_docker:1.6 
</code></pre></div><p><strong>上面三个容器实例依次顺序启动成功</strong></p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> <span class="token function">ps</span>
</code></pre></div><p><strong>5.5.3 swagger 测试</strong></p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code>http://localhost:你的微服务端口号/swagger-ui.html<span class="token comment">#/</span>
</code></pre></div><h5 id="_5-5-4-上面存在什么问题" tabindex="-1"><a class="header-anchor" href="#_5-5-4-上面存在什么问题" aria-hidden="true">#</a> 5.5.4 上面存在什么问题？</h5><div class="language-bash" data-ext="sh"><pre class="language-bash"><code>先后顺序要求固定，先mysql+redis才能微服务访问成功

多个run命令<span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span>

容器间的启停或宕机，有可能导致IP地址对应的容器实例变化，映射出错，

要么生产IP写死<span class="token punctuation">(</span>可以但是不推荐<span class="token punctuation">)</span>，要么通过服务调用
</code></pre></div><h5 id="_5-5-5-使用compose" tabindex="-1"><a class="header-anchor" href="#_5-5-5-使用compose" aria-hidden="true">#</a> 5.5.5 使用Compose</h5><div class="language-text" data-ext="text"><pre class="language-text"><code>1. 服务编排，一套带走，安排

2. 编写docker-componse.yml文件
</code></pre></div><div class="language-yaml" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">version</span><span class="token punctuation">:</span> <span class="token string">&quot;3&quot;</span> 
  
<span class="token key atrule">services</span><span class="token punctuation">:</span> 
  microService<span class="token punctuation">:</span> 
    image<span class="token punctuation">:</span> zzyy_docker<span class="token punctuation">:</span><span class="token number">1.6</span> 
    container_name<span class="token punctuation">:</span> ms01 
    ports<span class="token punctuation">:</span> 
      <span class="token punctuation">-</span> <span class="token string">&quot;6001:6001&quot;</span> 
    volumes<span class="token punctuation">:</span> 
      <span class="token punctuation">-</span> /app/microService<span class="token punctuation">:</span>/data 
    networks<span class="token punctuation">:</span>  
      <span class="token punctuation">-</span> atguigu_net  
    depends_on<span class="token punctuation">:</span>  
      <span class="token punctuation">-</span> redis 
      <span class="token punctuation">-</span> mysql 
  
  redis<span class="token punctuation">:</span> 
    image<span class="token punctuation">:</span> redis<span class="token punctuation">:</span>6.0.8 
    ports<span class="token punctuation">:</span> 
      <span class="token punctuation">-</span> <span class="token string">&quot;6379:6379&quot;</span> 
    volumes<span class="token punctuation">:</span> 
      <span class="token punctuation">-</span> /app/redis/redis.conf<span class="token punctuation">:</span>/etc/redis/redis.conf 
      <span class="token punctuation">-</span> /app/redis/data<span class="token punctuation">:</span>/data 
    networks<span class="token punctuation">:</span>  
      <span class="token punctuation">-</span> atguigu_net 
    command<span class="token punctuation">:</span> redis<span class="token punctuation">-</span>server /etc/redis/redis.conf 
  
  mysql<span class="token punctuation">:</span> 
    image<span class="token punctuation">:</span> mysql<span class="token punctuation">:</span><span class="token number">5.7</span> 
    environment<span class="token punctuation">:</span> 
      MYSQL_ROOT_PASSWORD<span class="token punctuation">:</span> <span class="token string">&#39;123456&#39;</span> 
      MYSQL_ALLOW_EMPTY_PASSWORD<span class="token punctuation">:</span> <span class="token string">&#39;no&#39;</span> 
      MYSQL_DATABASE<span class="token punctuation">:</span> <span class="token string">&#39;db2021&#39;</span> 
      MYSQL_USER<span class="token punctuation">:</span> <span class="token string">&#39;zzyy&#39;</span> 
      MYSQL_PASSWORD<span class="token punctuation">:</span> <span class="token string">&#39;zzyy123&#39;</span> 
    ports<span class="token punctuation">:</span> 
       <span class="token punctuation">-</span> <span class="token string">&quot;3306:3306&quot;</span> 
    volumes<span class="token punctuation">:</span> 
       <span class="token punctuation">-</span> /app/mysql/db<span class="token punctuation">:</span>/var/lib/mysql 
       <span class="token punctuation">-</span> /app/mysql/conf/my.cnf<span class="token punctuation">:</span>/etc/my.cnf 
       <span class="token punctuation">-</span> /app/mysql/init<span class="token punctuation">:</span>/docker<span class="token punctuation">-</span>entrypoint<span class="token punctuation">-</span>initdb.d 
    networks<span class="token punctuation">:</span> 
      <span class="token punctuation">-</span> atguigu_net 
    command<span class="token punctuation">:</span> <span class="token punctuation">-</span><span class="token punctuation">-</span>default<span class="token punctuation">-</span>authentication<span class="token punctuation">-</span>plugin=mysql_native_password <span class="token comment">#解决外部无法访问 </span>
  
<span class="token key atrule">networks</span><span class="token punctuation">:</span>  
   atguigu_net<span class="token punctuation">:</span>  
 

</code></pre></div><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token number">3</span>. 第二次修改微服务工程docker_boot
写YML 通过服务名访问，IP无关
</code></pre></div><div class="language-properties" data-ext="properties"><pre class="language-properties"><code><span class="token key attr-name">server.port</span> <span class="token punctuation">=</span> <span class="token value attr-value">6001</span>
<span class="token comment"># ========================alibaba.druid 相关配置 =====================</span>
<span class="token key attr-name">spring.datasource.type</span> <span class="token punctuation">=</span> <span class="token value attr-value">com.alibaba.druid.pool.DruidDataSource</span>
<span class="token key attr-name">spring.datasource.driver-class-name</span><span class="token punctuation">=</span><span class="token value attr-value">com.mysql.jdbc.Driver</span>
<span class="token comment">#spring.datasource.url=jdbc:mysql://192.168.111.169:3306/db2021?useUnicode=true&amp;characterEncoding=utf-8&amp;useSSL=false</span>
<span class="token key attr-name">spring.datasource.url</span> <span class="token punctuation">=</span> <span class="token value attr-value">jdbc:mysql://mysql:3306/db2021?useUnicode=true&amp;characterEncoding=utf-8&amp;useSSL=false spring.datasource.username = rootspring.datasource.password = 123456spring.datasource.druid.test-while-idle = false</span>
<span class="token comment"># ========================redis 相关配置 =====================</span>
<span class="token key attr-name">spring.redis.database</span> <span class="token punctuation">=</span> <span class="token value attr-value">0</span>
<span class="token comment">#spring.redis.host=192.168.111.169</span>
<span class="token key attr-name">spring.redis.host</span> <span class="token punctuation">=</span> <span class="token value attr-value">redis </span>
<span class="token key attr-name">spring.redis.port</span> <span class="token punctuation">=</span> <span class="token value attr-value">6379</span>
<span class="token key attr-name">spring.redis.password</span> <span class="token value attr-value">=</span>
<span class="token key attr-name">spring.redis.lettuce.pool.max-active</span> <span class="token punctuation">=</span> <span class="token value attr-value">8</span>
<span class="token key attr-name">spring.redis.lettuce.pool.max-wait</span> <span class="token punctuation">=</span> <span class="token value attr-value">-1ms</span>
<span class="token key attr-name">spring.redis.lettuce.pool.max-idle</span> <span class="token punctuation">=</span> <span class="token value attr-value">8</span>
<span class="token key attr-name">spring.redis.lettuce.pool.min-idle</span> <span class="token punctuation">=</span> <span class="token value attr-value">0</span>
<span class="token comment"># ========================mybatis 相关配置 ===================</span>
<span class="token key attr-name">mybatis.mapper-locations</span> <span class="token punctuation">=</span> <span class="token value attr-value">classpath:mapper/*.xml</span>
<span class="token key attr-name">mybatis.type-aliases-package</span> <span class="token punctuation">=</span> <span class="token value attr-value">com.atguigu.docker.entities</span>
<span class="token comment"># ========================swagger=====================</span>
<span class="token key attr-name">spring.swagger2.enabled</span> <span class="token punctuation">=</span> <span class="token value attr-value">true </span>

</code></pre></div><div class="language-bash" data-ext="sh"><pre class="language-bash"><code>
mvn package命令将微服务形成新的jar包
并上传到Linux服务器/mydocker目录下

编写Dockerfile
<span class="token comment"># 基础镜像使用java </span>
FROM java:8 
<span class="token comment"># 作者 </span>
MAINTAINER zzyy 
<span class="token comment"># VOLUME 指定临时文件目录为/tmp，在主机/var/lib/docker目录下创建了一个临时文件并链接到容器的/tmp </span>
VOLUME /tmp 
<span class="token comment"># 将jar包添加到容器中并更名为zzyy_docker.jar </span>
ADD docker_boot-0.0.1-SNAPSHOT.jar zzyy_docker.jar 
<span class="token comment"># 运行jar包 </span>
RUN <span class="token function">bash</span> <span class="token parameter variable">-c</span> <span class="token string">&#39;touch /zzyy_docker.jar&#39;</span> 
ENTRYPOINT <span class="token punctuation">[</span><span class="token string">&quot;java&quot;</span>,<span class="token string">&quot;-jar&quot;</span>,<span class="token string">&quot;/zzyy_docker.jar&quot;</span><span class="token punctuation">]</span> 
<span class="token comment">#暴露6001端口作为微服务 </span>
EXPOSE <span class="token number">6001</span> 


构建镜像
<span class="token function">docker</span> build <span class="token parameter variable">-t</span> zzyy_docker:1.6 <span class="token builtin class-name">.</span>
</code></pre></div><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token number">4</span>. 执行 <span class="token function">docker-compose</span> up 或者 执行 <span class="token function">docker-compose</span> up <span class="token parameter variable">-d</span>
</code></pre></div><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token number">5</span>. 进入mysql容器实例并新建库db2021+新建表t_user
<span class="token function">docker</span> <span class="token builtin class-name">exec</span> <span class="token parameter variable">-it</span> 容器实例id /bin/bash 
mysql <span class="token parameter variable">-uroot</span> <span class="token parameter variable">-p</span> 
create database db2021<span class="token punctuation">;</span> 
use db2021<span class="token punctuation">;</span> 
CREATE TABLE <span class="token variable"><span class="token variable">\`</span>t_user<span class="token variable">\`</span></span> <span class="token punctuation">(</span>
  <span class="token variable"><span class="token variable">\`</span><span class="token function">id</span><span class="token variable">\`</span></span> INT<span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">)</span> UNSIGNED NOT NULL AUTO_INCREMENT, 
  <span class="token variable"><span class="token variable">\`</span>username<span class="token variable">\`</span></span> VARCHAR<span class="token punctuation">(</span><span class="token number">50</span><span class="token punctuation">)</span> NOT NULL DEFAULT <span class="token string">&#39;&#39;</span> COMMENT <span class="token string">&#39;用户名&#39;</span>, 
  <span class="token variable"><span class="token variable">\`</span>password<span class="token variable">\`</span></span> VARCHAR<span class="token punctuation">(</span><span class="token number">50</span><span class="token punctuation">)</span> NOT NULL DEFAULT <span class="token string">&#39;&#39;</span> COMMENT <span class="token string">&#39;密码&#39;</span>, 
  <span class="token variable"><span class="token variable">\`</span>sex<span class="token variable">\`</span></span> TINYINT<span class="token punctuation">(</span><span class="token number">4</span><span class="token punctuation">)</span> NOT NULL DEFAULT <span class="token string">&#39;0&#39;</span> COMMENT <span class="token string">&#39;性别 0=女 1=男 &#39;</span>, 
  <span class="token variable"><span class="token variable">\`</span>deleted<span class="token variable">\`</span></span> TINYINT<span class="token punctuation">(</span><span class="token number">4</span><span class="token punctuation">)</span> UNSIGNED NOT NULL DEFAULT <span class="token string">&#39;0&#39;</span> COMMENT <span class="token string">&#39;删除标志，默认0不删除，1删除&#39;</span>, 
  <span class="token variable"><span class="token variable">\`</span>update_time<span class="token variable">\`</span></span> TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT <span class="token string">&#39;更新时间&#39;</span>, 
  <span class="token variable"><span class="token variable">\`</span>create_time<span class="token variable">\`</span></span> TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT <span class="token string">&#39;创建时间&#39;</span>, 
  PRIMARY KEY <span class="token punctuation">(</span><span class="token variable"><span class="token variable">\`</span><span class="token function">id</span><span class="token variable">\`</span></span><span class="token punctuation">)</span> 
<span class="token punctuation">)</span> <span class="token assign-left variable">ENGINE</span><span class="token operator">=</span>INNODB <span class="token assign-left variable">AUTO_INCREMENT</span><span class="token operator">=</span><span class="token number">1</span> DEFAULT <span class="token assign-left variable">CHARSET</span><span class="token operator">=</span>utf8mb4 <span class="token assign-left variable">COMMENT</span><span class="token operator">=</span><span class="token string">&#39;用户表&#39;</span><span class="token punctuation">;</span> 

</code></pre></div><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token number">6</span>. 测试通过
<span class="token number">7</span>. Compose常用命令
Compose 常用命令 
<span class="token function">docker-compose</span> <span class="token parameter variable">-h</span>                           <span class="token comment">#  查看帮助 </span>
<span class="token function">docker-compose</span> up                           <span class="token comment">#  启动所有 docker-compose服务 </span>
<span class="token function">docker-compose</span> up <span class="token parameter variable">-d</span>                        <span class="token comment">#  启动所有 docker-compose服务 并后台运行 </span>
<span class="token function">docker-compose</span> down                         <span class="token comment">#  停止并删除容器、网络、卷、镜像。 </span>
<span class="token function">docker-compose</span> <span class="token builtin class-name">exec</span>  yml里面的服务id                 <span class="token comment"># 进入容器实例内部  docker-compose exec  docker-compose.yml文件中写的服务id  /bin/bash </span>
<span class="token function">docker-compose</span> <span class="token function">ps</span>                      <span class="token comment"># 展示当前docker-compose编排过的运行的所有容器 </span>
<span class="token function">docker-compose</span> <span class="token function">top</span>                     <span class="token comment"># 展示当前docker-compose编排过的容器进程 </span>
 
<span class="token function">docker-compose</span> logs  yml里面的服务id     <span class="token comment">#  查看容器输出日志 </span>
dokcer-compose config     <span class="token comment">#  检查配置 </span>
dokcer-compose config <span class="token parameter variable">-q</span>  <span class="token comment">#  检查配置，有问题才有输出 </span>
<span class="token function">docker-compose</span> restart   <span class="token comment">#  重启服务 </span>
<span class="token function">docker-compose</span> start     <span class="token comment">#  启动服务 </span>
<span class="token function">docker-compose</span> stop      <span class="token comment">#  停止服务 </span>
</code></pre></div><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token number">8</span>. 关停
<span class="token function">docker</span> <span class="token parameter variable">-compose</span> stop
</code></pre></div><h3 id="六、docker轻量级可视化工具portainer" tabindex="-1"><a class="header-anchor" href="#六、docker轻量级可视化工具portainer" aria-hidden="true">#</a> 六、Docker轻量级可视化工具Portainer</h3><h4 id="_6-1-是什么" tabindex="-1"><a class="header-anchor" href="#_6-1-是什么" aria-hidden="true">#</a> 6.1 是什么</h4><div class="language-bash" data-ext="sh"><pre class="language-bash"><code>Portainer 是一款轻量级的应用，它提供了图形化界面，用于方便地管理Docker环境，包括单机环境和集群环境。 
</code></pre></div><h4 id="_6-2-安装" tabindex="-1"><a class="header-anchor" href="#_6-2-安装" aria-hidden="true">#</a> 6.2 安装</h4><blockquote><p>一、官网</p><p>https://www.portainer.io/</p><p>https://docs.portainer.io/v/ce-2.9/start/install/server/docker/linux</p><p>二、步骤</p><ol><li>docker命令安装</li></ol><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> run <span class="token parameter variable">-d</span> <span class="token parameter variable">-p</span> <span class="token number">8000</span>:8000 <span class="token parameter variable">-p</span> <span class="token number">9000</span>:9000 <span class="token parameter variable">--name</span> portainer     <span class="token parameter variable">--restart</span><span class="token operator">=</span>always     <span class="token parameter variable">-v</span> /var/run/docker.sock:/var/run/docker.sock     <span class="token parameter variable">-v</span> portainer_data:/data     portainer/portainer 
</code></pre></div><ol start="2"><li>第一次登录需创建admin，访问地址：xxx.xxx.xxx.xxx:9000</li></ol><div class="language-bash" data-ext="sh"><pre class="language-bash"><code>用户名，直接用默认admin 
密码记得8位，随便你写 
</code></pre></div><ol start="3"><li>设置admin用户和密码后首次登陆</li><li>选择local选项卡后本地docker详细信息展示</li><li>上一步的图形展示，能想得起对应命令吗？</li><li>登陆并演示介绍常用操作case</li></ol></blockquote><h3 id="七、docker容器监控之cadvisor-influxdb-granfana" tabindex="-1"><a class="header-anchor" href="#七、docker容器监控之cadvisor-influxdb-granfana" aria-hidden="true">#</a> 七、Docker容器监控之CAdvisor+InfluxDB+Granfana</h3><h4 id="_7-1-原生命令" tabindex="-1"><a class="header-anchor" href="#_7-1-原生命令" aria-hidden="true">#</a> 7.1 原生命令</h4><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> stats命令的结果 

问题
通过docker stats命令可以很方便的看到当前宿主机上所有容器的CPU,内存以及网络流量等数据， 一般小公司够用了。。。。 
但是
<span class="token function">docker</span> stats统计结果只能是当前宿主机的全部容器，数据资料是实时的，没有地方存储、没有健康指标过线预警等功能 
</code></pre></div><h4 id="_7-2-是什么" tabindex="-1"><a class="header-anchor" href="#_7-2-是什么" aria-hidden="true">#</a> 7.2 是什么</h4><blockquote><p>容器监控3剑客</p><p>一句话</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code>CAdvisor监控收集+InfluxDB存储数据+Granfana展示图表
</code></pre></div><p><strong>CAdvisor</strong></p><p><img src="`+ta+'" alt="71"></p><p><strong>InfluxDB</strong></p><p><img src="'+pa+'" alt="72"></p><p>Granfana</p><p><img src="'+ea+`" alt="73"></p></blockquote><h4 id="_7-3-compose容器编排-一套带走" tabindex="-1"><a class="header-anchor" href="#_7-3-compose容器编排-一套带走" aria-hidden="true">#</a> 7.3 compose容器编排，一套带走</h4><blockquote><p>一、新建目录</p><p>二、新建3件套组合的 docker-compose.yml</p><div class="language-yaml" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">version</span><span class="token punctuation">:</span> <span class="token string">&#39;3.1&#39;</span> 
  
<span class="token key atrule">volumes</span><span class="token punctuation">:</span> 
  grafana_data<span class="token punctuation">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span> 
  
<span class="token key atrule">services</span><span class="token punctuation">:</span> 
 influxdb<span class="token punctuation">:</span> 
  image<span class="token punctuation">:</span> tutum/influxdb<span class="token punctuation">:</span><span class="token number">0.9</span> 
  restart<span class="token punctuation">:</span> always 
  environment<span class="token punctuation">:</span> 
    <span class="token punctuation">-</span> PRE_CREATE_DB=cadvisor 
  ports<span class="token punctuation">:</span> 
    <span class="token punctuation">-</span> <span class="token string">&quot;8083:8083&quot;</span> 
    <span class="token punctuation">-</span> <span class="token string">&quot;8086:8086&quot;</span> 
  volumes<span class="token punctuation">:</span> 
    <span class="token punctuation">-</span> ./data/influxdb<span class="token punctuation">:</span>/data 
  
 cadvisor<span class="token punctuation">:</span> 
  image<span class="token punctuation">:</span> google/cadvisor 
  links<span class="token punctuation">:</span> 
    <span class="token punctuation">-</span> influxdb<span class="token punctuation">:</span>influxsrv 
  command<span class="token punctuation">:</span> <span class="token punctuation">-</span>storage_driver=influxdb <span class="token punctuation">-</span>storage_driver_db=cadvisor <span class="token punctuation">-</span>storage_driver_host=influxsrv<span class="token punctuation">:</span><span class="token number">8086</span> 
  restart<span class="token punctuation">:</span> always 
  ports<span class="token punctuation">:</span> 
    <span class="token punctuation">-</span> <span class="token string">&quot;8080:8080&quot;</span> 
  volumes<span class="token punctuation">:</span> 
    <span class="token punctuation">-</span> /<span class="token punctuation">:</span>/rootfs<span class="token punctuation">:</span>ro 
    <span class="token punctuation">-</span> /var/run<span class="token punctuation">:</span>/var/run<span class="token punctuation">:</span>rw 
    <span class="token punctuation">-</span> /sys<span class="token punctuation">:</span>/sys<span class="token punctuation">:</span>ro 
    <span class="token punctuation">-</span> /var/lib/docker/<span class="token punctuation">:</span>/var/lib/docker<span class="token punctuation">:</span>ro 
  
 grafana<span class="token punctuation">:</span> 
  user<span class="token punctuation">:</span> <span class="token string">&quot;104&quot;</span> 
  image<span class="token punctuation">:</span> grafana/grafana 
  user<span class="token punctuation">:</span> <span class="token string">&quot;104&quot;</span> 
  restart<span class="token punctuation">:</span> always 
  links<span class="token punctuation">:</span> 
    <span class="token punctuation">-</span> influxdb<span class="token punctuation">:</span>influxsrv 
  ports<span class="token punctuation">:</span> 
    <span class="token punctuation">-</span> <span class="token string">&quot;3000:3000&quot;</span> 
  volumes<span class="token punctuation">:</span> 
    <span class="token punctuation">-</span> grafana_data<span class="token punctuation">:</span>/var/lib/grafana 
  environment<span class="token punctuation">:</span> 
    <span class="token punctuation">-</span> HTTP_USER=admin 
    <span class="token punctuation">-</span> HTTP_PASS=admin 
    <span class="token punctuation">-</span> INFLUXDB_HOST=influxsrv 
    <span class="token punctuation">-</span> INFLUXDB_PORT=8086 
    <span class="token punctuation">-</span> INFLUXDB_NAME=cadvisor 
    <span class="token punctuation">-</span> INFLUXDB_USER=root 
    <span class="token punctuation">-</span> INFLUXDB_PASS=root 

</code></pre></div><p>三、启动docker-compose文件</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker-compose</span> up
</code></pre></div><p>四、查看三个服务容器是否启动</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> <span class="token function">ps</span>
</code></pre></div><p>五、测试</p><div class="language-properties" data-ext="properties"><pre class="language-properties"><code><span class="token key attr-name">1.</span> <span class="token value attr-value">浏览cAdvisor收集服务，http://ip:8080/</span>

第一次访问慢，请稍等

cadvisor也有基础的图形展现功能，这里主要用它来作数据采集
<span class="token key attr-name">2.</span> <span class="token value attr-value">浏览influxdb存储服务，http://ip:8083/</span>

</code></pre></div><div class="language-text" data-ext="text"><pre class="language-text"><code>3. 浏览grafana展现服务，http://ip:3000
	ip+3000端口的方式访问,默认帐户密码（admin/admin）
	https://gitee.com/yooome/golang/tree/main/Docker详细教程
	配置步骤
	[1] 配置数据源
	[2] 选择influxdb数据源
	[3] 配置细节
	[4] 配置面板panel
	[5] 到这里cAdvisor+InfluxDB+Grafana容器监控系统就部署完成了
</code></pre></div></blockquote>`,276),la=[ca];function ua(ka,ra){return n(),s("div",null,la)}const da=a(oa,[["render",ua],["__file","adockerfile.html.vue"]]);export{da as default};
