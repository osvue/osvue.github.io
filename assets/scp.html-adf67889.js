import{_ as a,p as s,q as n,a1 as e}from"./framework-d81ad7e5.js";const t={},o=e(`<div class="custom-container danger"><p class="custom-container-title">DANGER</p><p>注意： 目录 为 <code>-r</code></p></div><h3 id="win10-本地复制文件到远程linux" tabindex="-1"><a class="header-anchor" href="#win10-本地复制文件到远程linux" aria-hidden="true">#</a> win10 本地复制文件到远程Linux</h3><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># system-monitor.jar 本地文件</span>
<span class="token comment"># root@192.168.153.6:/usr/local/tmp/ 远程地址</span>
<span class="token comment">#</span>
<span class="token function">scp</span>  system-monitor.jar  root@192.168.153.6:/usr/local/tmp/
root@192.168.153.6 s password:
system-monitor.jar                                                                    <span class="token number">100</span>%   26MB  <span class="token number">16</span>.7MB/s   00:01

</code></pre></div><h3 id="复制远程-目录-到本地-r" tabindex="-1"><a class="header-anchor" href="#复制远程-目录-到本地-r" aria-hidden="true">#</a> 复制远程 <code>目录</code> 到本地 -r</h3><div class="language-cmd" data-ext="cmd"><pre class="language-cmd"><code>#  目录  -r

D:\\ASgcc2020\\06\\example\\target&gt;scp -r root@192.168.153.6:/home ./
root@192.168.153.6&#39;s password:
.bash_profile                                                                         100%  176     3.0KB/s   00:00
.bash_logout                                                                          100%   18    17.6KB/s   00:00
.bashrc                                                                               100%  124   121.3KB/s   00:00

D:\\ASgcc2020\\06\\example\\target&gt;dir

</code></pre></div><h3 id="linux-复制远程-目录-到当前服务器指定文件夹" tabindex="-1"><a class="header-anchor" href="#linux-复制远程-目录-到当前服务器指定文件夹" aria-hidden="true">#</a> Linux 复制远程 <code>目录</code> 到当前服务器指定文件夹</h3><ul><li><code>Linux--&gt; Linux</code></li></ul><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost omodel<span class="token punctuation">]</span><span class="token comment"># scp -r  root@172.16.140.103:/app/aaaa/bbbb  /app/omodel/</span>
Please <span class="token builtin class-name">type</span> <span class="token string">&#39;yes&#39;</span> or <span class="token string">&#39;no&#39;</span><span class="token builtin class-name">:</span> <span class="token function">yes</span>
Warning: Permanently added <span class="token string">&#39;172.16.140.103&#39;</span> <span class="token punctuation">(</span>ECDSA<span class="token punctuation">)</span> to the list of known hosts.
root@172.16.140.103&#39;s password:

</code></pre></div><h3 id="linux复制当前目录到远程机器指定目录" tabindex="-1"><a class="header-anchor" href="#linux复制当前目录到远程机器指定目录" aria-hidden="true">#</a> Linux复制当前目录到远程机器指定目录</h3><div class="language-bash" data-ext="sh"><pre class="language-bash"><code>
<span class="token function">scp</span> <span class="token parameter variable">-r</span> /opt/soft/mongodb root@192.168.120.204:/opt/soft/scptest

</code></pre></div><h3 id="从远处复制文件到本地目录" tabindex="-1"><a class="header-anchor" href="#从远处复制文件到本地目录" aria-hidden="true">#</a> 从远处复制文件到本地目录</h3><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token comment">#命令：</span>
<span class="token function">scp</span> root@192.168.120.204:/opt/soft/nginx-0.5.38.tar.gz    /opt/soft/
</code></pre></div><h3 id="上传本地文件到远程机器指定目录" tabindex="-1"><a class="header-anchor" href="#上传本地文件到远程机器指定目录" aria-hidden="true">#</a> 上传本地文件到远程机器指定目录</h3><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token function">scp</span> /opt/soft/nginx-0.5.38.tar.gz root@192.168.120.204:/opt/soft/scptest
</code></pre></div><h3 id="linux-linux" tabindex="-1"><a class="header-anchor" href="#linux-linux" aria-hidden="true">#</a> Linux -&gt; Linux</h3><div class="language-bash" data-ext="sh"><pre class="language-bash"><code> <span class="token function">scp</span> run.sh  <span class="token number">192.168</span>.1.60:/app/
</code></pre></div>`,16),c=[o];function r(p,l){return s(),n("div",null,c)}const d=a(t,[["render",r],["__file","scp.html.vue"]]);export{d as default};
