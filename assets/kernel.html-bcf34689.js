import{_ as n,p as s,q as a,a1 as e}from"./framework-d81ad7e5.js";const p={},o=e(`<ul><li>一次漏洞修复</li></ul><ol><li>查看内核版本</li></ol><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@JYITTC247 kernel<span class="token punctuation">]</span><span class="token comment"># uname -srm</span>
Linux <span class="token number">3.10</span>.0-862.el7.x86_64 x86_64
<span class="token punctuation">[</span>root@JYITTC247 kernel<span class="token punctuation">]</span><span class="token comment"># </span>

</code></pre></div><ol start="2"><li>下载内核 <ol><li><code>https://elrepo.org/linux/kernel/el7/x86_64/RPMS/ </code></li></ol></li><li>内核版本介绍： <ul><li><code>lt: longterm</code>的缩写：长期维护版</li><li><code>ml:mainline</code>的缩写：最新稳定版</li></ul></li></ol><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@JYITTC247 kernel<span class="token punctuation">]</span><span class="token comment"># ll</span>
总用量 <span class="token number">71068</span>
<span class="token comment"># 一个是内核版本</span>
-rwxr-xr-x. <span class="token number">1</span> root root <span class="token number">58240132</span> <span class="token number">3</span>月  <span class="token number">14</span> <span class="token number">10</span>:03 kernel-ml-5.16.13-1.el7.elrepo.x86_64.rpm
<span class="token comment"># 一个是安装内核所需要的lib </span>
-rwxr-xr-x. <span class="token number">1</span> root root <span class="token number">14532336</span> <span class="token number">3</span>月  <span class="token number">14</span> <span class="token number">10</span>:06 kernel-ml-devel-5.16.13-1.el7.elrepo.x86_64.rpm
<span class="token punctuation">[</span>root@JYITTC247 kernel<span class="token punctuation">]</span><span class="token comment"># </span>

</code></pre></div><ol start="4"><li>安装内核</li></ol><ul><li><code>yum localinstall -y kernel-ml-5.16.13-1.el7.elrepo.x86_64.rpm kernel-ml-devel-5.16.13-1.el7.elrepo.x86_64.rpm </code></li></ul><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@JYITTC247 kernel<span class="token punctuation">]</span><span class="token comment"># yum localinstall -y kernel-ml-5.16.13-1.el7.elrepo.x86_64.rpm  kernel-ml-devel-5.16.13-1.el7.elrepo.x86_64.rpm </span>
已加载插件：fastestmirror, langpacks
正在检查 kernel-ml-5.16.13-1.el7.elrepo.x86_64.rpm: kernel-ml-5.16.13-1.el7.elrepo.x86_64
kernel-ml-5.16.13-1.el7.elrepo.x86_64.rpm 将被安装
正在检查 kernel-ml-devel-5.16.13-1.el7.elrepo.x86_64.rpm: kernel-ml-devel-5.16.13-1.el7.elrepo.x86_64
kernel-ml-devel-5.16.13-1.el7.elrepo.x86_64.rpm 将被安装
正在解决依赖关系
--<span class="token operator">&gt;</span> 正在检查事务
---<span class="token operator">&gt;</span> 软件包 kernel-ml.x86_64.0.5.16.13-1.el7.elrepo 将被 安装
---<span class="token operator">&gt;</span> 软件包 kernel-ml-devel.x86_64.0.5.16.13-1.el7.elrepo 将被 安装
--<span class="token operator">&gt;</span> 解决依赖关系完成

依赖关系解决
<span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span>
 Package
     架构   版本 源                                            大小
<span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span>
正在安装:
 kernel-ml
     x86_64 <span class="token number">5.16</span>.13-1.el7.elrepo
                 /kernel-ml-5.16.13-1.el7.elrepo.x86_64       <span class="token number">254</span> M
 kernel-ml-devel
     x86_64 <span class="token number">5.16</span>.13-1.el7.elrepo
                 /kernel-ml-devel-5.16.13-1.el7.elrepo.x86_64  <span class="token number">55</span> M
事务概要
<span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span>
安装  <span class="token number">2</span> 软件包

总计：309 M
安装大小：309 M
Downloading packages:
Running transaction check
Running transaction <span class="token builtin class-name">test</span>
Transaction <span class="token builtin class-name">test</span> succeeded
Running transaction
  正在安装    <span class="token builtin class-name">:</span> kernel-ml-5.16.13-1.el7.elrepo.x86_64           <span class="token number">1</span>/2 
  正在安装    <span class="token builtin class-name">:</span> kernel-ml-devel-5.16.13-1.el7.elrepo.x86_64                                                                                          <span class="token number">2</span>/2 

  验证中      <span class="token builtin class-name">:</span> kernel-ml-devel-5.16.13-1.el7.elrepo.x86_64                                                                                          <span class="token number">1</span>/2 
  验证中      <span class="token builtin class-name">:</span> kernel-ml-5.16.13-1.el7.elrepo.x86_64                                                                                                <span class="token number">2</span>/2 

已安装:
  kernel-ml.x86_64 <span class="token number">0</span>:5.16.13-1.el7.elrepo                                  kernel-ml-devel.x86_64 <span class="token number">0</span>:5.16.13-1.el7.elrepo                                 
完毕！
<span class="token punctuation">[</span>root@JYITTC247 kernel<span class="token punctuation">]</span><span class="token comment"># </span>
</code></pre></div><ol start="5"><li>查看所有可用内核启动项</li></ol><ul><li><code> awk -F\\&#39; &#39;$1==&quot;menuentry &quot; {print i++ &quot; : &quot; $2}&#39; /etc/grub2.cfg</code></li></ul><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@JYITTC247 kernel<span class="token punctuation">]</span><span class="token comment">#  awk -F\\&#39; &#39;$1==&quot;menuentry &quot; {print i++ &quot; : &quot; $2}&#39; /etc/grub2.cfg</span>
<span class="token number">0</span> <span class="token builtin class-name">:</span> CentOS Linux <span class="token punctuation">(</span><span class="token number">5.16</span>.13-1.el7.elrepo.x86_64<span class="token punctuation">)</span> <span class="token number">7</span> <span class="token punctuation">(</span>Core<span class="token punctuation">)</span>
<span class="token number">1</span> <span class="token builtin class-name">:</span> CentOS Linux <span class="token punctuation">(</span><span class="token number">3.10</span>.0-862.el7.x86_64<span class="token punctuation">)</span> <span class="token number">7</span> <span class="token punctuation">(</span>Core<span class="token punctuation">)</span>
<span class="token number">2</span> <span class="token builtin class-name">:</span> CentOS Linux <span class="token punctuation">(</span><span class="token number">0</span>-rescue-61db6a745ee54598a0b29b26bcbde294<span class="token punctuation">)</span> <span class="token number">7</span> <span class="token punctuation">(</span>Core<span class="token punctuation">)</span>

</code></pre></div><ul><li>记下5.16内核前面的序号，修改启动项需要</li></ul><ol start="6"><li>修改默认启动项</li></ol><ul><li><p>默认启动项由 <strong><code>/etc/default/grub中的GRUB_DEFAULT</code></strong> 控制，如果 <code>GRUB_DEFAULT=saved</code>，则该参数将存在 <strong><code>/boot/grub2/grubenv</code></strong></p></li><li><p>输入<code>grub2-editenv list</code>命令查看默认启动项</p></li></ul><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@JYITTC247 app<span class="token punctuation">]</span><span class="token comment">#  grub2-editenv list</span>
<span class="token assign-left variable">saved_entry</span><span class="token operator">=</span>CentOS Linux <span class="token punctuation">(</span><span class="token number">3.10</span>.0-862.el7.x86_64<span class="token punctuation">)</span> <span class="token number">7</span> <span class="token punctuation">(</span>Core<span class="token punctuation">)</span>
</code></pre></div><ul><li>输入<code>grub2-set-default</code>命令修改默认启动项，0<strong>表示5.16内核的序号</strong></li></ul><p>再次查看默认启动项，发现默认启动项已经改成了0</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@JYITTC247 kernel<span class="token punctuation">]</span><span class="token comment">#  grub2-set-default 0</span>
<span class="token punctuation">[</span>root@JYITTC247 kernel<span class="token punctuation">]</span><span class="token comment">#  grub2-editenv list</span>
<span class="token assign-left variable">saved_entry</span><span class="token operator">=</span><span class="token number">0</span>
</code></pre></div><ol start="7"><li>重启后，再次查看内核版本，内核已经更新</li></ol>`,19),t=[o];function l(r,c){return s(),a("div",null,t)}const u=n(p,[["render",l],["__file","kernel.html.vue"]]);export{u as default};
