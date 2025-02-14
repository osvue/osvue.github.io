import{_ as s,p as n,q as a,a1 as p}from"./framework-d81ad7e5.js";const e={},t=p(`<h3 id="swap-什么时候使用" tabindex="-1"><a class="header-anchor" href="#swap-什么时候使用" aria-hidden="true">#</a> swap 什么时候使用</h3><p>在Linux里面，swappiness的值的大小对如何使用swap分区是有着很大的联系的。<code>swappiness=0</code>的时候表示最大限度使用物理内存，然后才是 swap空间</p><p>swappiness=100的时候表示积极的使用swap分区，并且把内存上的数据及时的搬运到swap空间里面</p><p>两个极端，对于 CentOS默认为0，Ubuntu的默认为60，建议修改为10。</p><p>具体这样做：</p><ol><li>查看你的系统里面的 <strong>swappiness</strong> <code>cat /proc/sys/vm/swappiness</code></li></ol><p>不出意外的话，你应该看到是0</p><ol start="2"><li><strong>修改swappiness值为10</strong> <code>sudo sysctl vm.swappiness=10</code></li></ol><p>但是这只是临时性的修改，在你重启系统后会恢复默认的值，所以，还要做一步： <code>vi /etc/sysctl.conf</code></p><p>在这个文档的最后加上这样一行: <code>vm.swappiness = 10</code></p><p>然后保存，这样重启之后配置也不会失效</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token comment">#查看swap当前状态：</span>
 <span class="token function">cat</span> /proc/swaps

<span class="token comment"># dd if=/dev/zero of=/var/swap bs=1024 count=2048000</span>


<span class="token comment">#通过dd命令增加swap</span>
<span class="token punctuation">[</span>root@aliyunsds var<span class="token punctuation">]</span><span class="token comment"># dd if=/dev/zero of=/var/swap bs=1024 count=2048000</span>
<span class="token number">2048000</span>+0 records <span class="token keyword">in</span>
<span class="token number">2048000</span>+0 records out
<span class="token number">2097152000</span> bytes <span class="token punctuation">(</span><span class="token number">2.1</span> GB<span class="token punctuation">)</span> copied, <span class="token number">6.1788</span> s, <span class="token number">339</span> MB/s

<span class="token punctuation">[</span>root@aliyunsds var<span class="token punctuation">]</span><span class="token comment"># ls</span>
adm  cache  crash  db  empty  games  gopher  kerberos  lib  <span class="token builtin class-name">local</span>  lock  log  mail  nis  opt  preserve  run  spool  swap  tmp  yp
<span class="token comment"># 创建swap文件</span>
<span class="token punctuation">[</span>root@aliyunsds var<span class="token punctuation">]</span><span class="token comment"># mkswap /var/swap</span>
Setting up swapspace version <span class="token number">1</span>, size <span class="token operator">=</span> <span class="token number">2047996</span> KiB
no label, <span class="token assign-left variable">UUID</span><span class="token operator">=</span>e3854dda-b929-4ff2-a7b1-bfc516ad08e9
 
<span class="token punctuation">[</span>root@aliyunsds var<span class="token punctuation">]</span><span class="token comment"># mkswap -f /var/swap</span>
mkswap: /var/swap: warning: wiping old swap signature.
Setting up swapspace version <span class="token number">1</span>, size <span class="token operator">=</span> <span class="token number">2047996</span> KiB
no label, <span class="token assign-left variable">UUID</span><span class="token operator">=</span>7cc46860-74dc-4d60-893f-1933f670d709
<span class="token comment"># 加载该文件：</span>
<span class="token punctuation">[</span>root@aliyunsds var<span class="token punctuation">]</span><span class="token comment"># swapon /var/swap</span>
swapon: /var/swap: insecure permissions 0644, 0600 suggested.
<span class="token comment"># 看看swap是否生效</span>
<span class="token punctuation">[</span>root@aliyunsds var<span class="token punctuation">]</span><span class="token comment"># free -h</span>
              total        used        <span class="token function">free</span>      shared  buff/cache   available
Mem:            31G        279M         27G        544K        <span class="token number">3</span>.6G         30G
Swap:          <span class="token number">2</span>.0G          0B        <span class="token number">2</span>.0G

<span class="token comment"># 添加至/etc/fstab</span>

<span class="token comment"># 在文本的最后添加</span>
/var/swap swap swap defaults <span class="token number">0</span> <span class="token number">0</span>

<span class="token punctuation">[</span>root@mysql01 var<span class="token punctuation">]</span><span class="token comment"># vim /etc/fstab</span>

<span class="token comment">#</span>
<span class="token comment"># /etc/fstab</span>
<span class="token comment"># Created by anaconda on Tue Sep 23 17:58:53 2014</span>
<span class="token comment">#</span>
<span class="token comment"># Accessible filesystems, by reference, are maintained under &#39;/dev/disk&#39;</span>
<span class="token comment"># See man pages fstab(5), findfs(8), mount(8) and/or blkid(8) for more info</span>
<span class="token comment">#</span>
<span class="token assign-left variable">UUID</span><span class="token operator">=</span>98f4128a-2ac6-4822-8624-300c4d818afc /                       ext4    defaults        <span class="token number">1</span> <span class="token number">1</span>
tmpfs                   /dev/shm                tmpfs   defaults        <span class="token number">0</span> <span class="token number">0</span>
devpts                  /dev/pts                devpts  <span class="token assign-left variable">gid</span><span class="token operator">=</span><span class="token number">5</span>,mode<span class="token operator">=</span><span class="token number">620</span>  <span class="token number">0</span> <span class="token number">0</span>
sysfs                   /sys                    sysfs   defaults        <span class="token number">0</span> <span class="token number">0</span>
proc                    /proc                   proc    defaults        <span class="token number">0</span> <span class="token number">0</span>
/var/swap               swap                    swap    defaults        <span class="token number">0</span> <span class="token number">0</span>

<span class="token comment"># 如果不再需要swap，可以清理该分区：</span>
<span class="token punctuation">[</span>root@mysql01 var<span class="token punctuation">]</span><span class="token comment"># swapoff /var/swap</span>

<span class="token comment">#添加至/etc/fstab1vim /etc/fstab</span>

 

 
 
swapoff /var/swap
</code></pre></div>`,12),o=[t];function c(l,r){return n(),a("div",null,o)}const u=s(e,[["render",c],["__file","swap.html.vue"]]);export{u as default};
