import{_ as s,p as n,q as a,a1 as t}from"./framework-d81ad7e5.js";const e={},p=t(`<p>永久修改网卡IP</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token function">vi</span> /etc/sysconfig/network-scripts/ifcfg-ens33
<span class="token assign-left variable">TYPE</span><span class="token operator">=</span>Ethernet			<span class="token comment">#设置网卡类型，“Ethernet”表示以太网</span>
<span class="token assign-left variable">DEVICE</span><span class="token operator">=</span>ens33			<span class="token comment">#设置网卡的名称</span>
<span class="token assign-left variable">ONBOOT</span><span class="token operator">=</span>yes				<span class="token comment">#设置网卡是否在 Linux 操作系统启动时激活</span>
<span class="token assign-left variable">BOOTPROTO</span><span class="token operator">=</span>static		<span class="token comment">#设置网卡的配置方式，“static”表示使用静态IP地址，“dhcp”时表示动态获取地址</span>
<span class="token assign-left variable">IPADDR</span><span class="token operator">=</span><span class="token number">192.168</span>.80.3		<span class="token comment">#设置网卡的 IP 地址</span>
<span class="token assign-left variable">NETMASK</span><span class="token operator">=</span><span class="token number">255.255</span>.255.0	<span class="token comment">#设置网卡的子网掩码</span>
<span class="token assign-left variable">GATEWAY</span><span class="token operator">=</span><span class="token number">192.168</span>.80.2	<span class="token comment">#设置网卡的默认网关地址</span>
<span class="token assign-left variable">DNS1</span><span class="token operator">=</span><span class="token number">192.168</span>.80.2		<span class="token comment">#设置DNS服务器的 IP 地址</span>
</code></pre></div><p>2、ifup/ifdown ens33来启用和禁用网卡</p><p>3、ifdown ens33 &amp;&amp; ifup ens33 重启网卡</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 查看全部网卡</span>

目录 /sys/class/net/

<span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># ls /sys/class/net/</span>
br-df65b94a220f  docker0  enp0s31f6  lo  veth1706661  veth2566f96  veth7c083c7  vethd4a4beb  vethfa8ecf9  vethfd44a20  wlp1s0
<span class="token comment"># 查看虚拟网卡</span>

目录 /sys/devices/virtual/net/

<span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># ls /sys/devices/virtual/net/</span>
br-df65b94a220f  docker0  lo  veth1706661  veth2566f96  veth7c083c7  vethd4a4beb  vethfa8ecf9  vethfd44a20
<span class="token comment"># 查看物理网卡</span>

<span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># ls /sys/class/net/ | grep -v &quot;\`ls /sys/devices/virtual/net/\`&quot;</span>
enp0s31f6
wlp1s0 


</code></pre></div><p>ip地址后面的斜杠24表示掩码位是24位的，即用32位二进制表示的子网掩码中有连续的24个“1”：11111111 11111111 11111111 00000000，将其转化为十进制，就是：255.255.255.0了。 IP地址是指互联网协议地址，是IP协议提供的一种统一的地址格式，它为互联网上的每一个网络和每一台主机分配一个逻辑地址，以此来屏蔽物理地址的差异。 IP地址是四个十进制数组成的，相当于32位二进制。通常用“点分十进制”表示成（a.b.c.d）的形式表示，其中，a,b,c,d都是0~255之间的十进制整数。例：点分十进IP地址（100.4.5.6），实际上是32位二进制数（01100100.00000100.00000101.00000110）。 ip地址后面斜杠加具体数字是一种用CIDR（无类别域间路由选择，Classless and Subnet AddressExtensions and Supernetting））的形式表示的一个网段，或者说子网。 我们知道确定一个子网需要知道主机地址和子网掩码，但用CIDR的形式，可以简单得到两个数值。举例说吧，192.168.0.0/24”就表示，这个网段的IP地址从192.168.0.1开始，到192.168.0.254结束（192.168.0.0和192.168.0.255有特殊含义，不能用作IP地址）；子网掩码是255.255.255.0。</p><p>上面的子网掩码怎么来的呢?其实关键就在“24”上。我们知道IP地址是四个十进制数组成的，相当于32位二进制。用CIDR表示形式，后一个数字将这32位进行了间隔(以24为例)：前24位用&quot;1&quot;表示，后面8位用0表示，得到一个二进制数：</p><p>11111111 11111111 11111111 00000000</p><p>将其转化为十进制，就是：255.255.255.0了。</p>`,9),o=[p];function c(l,r){return n(),a("div",null,o)}const k=s(e,[["render",c],["__file","network.html.vue"]]);export{k as default};
