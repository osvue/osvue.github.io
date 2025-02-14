import{_ as s,p as a,q as n,a1 as t}from"./framework-d81ad7e5.js";const e={},c=t(`<h3 id="修改-etc-rc-d-rc-local-文件" tabindex="-1"><a class="header-anchor" href="#修改-etc-rc-d-rc-local-文件" aria-hidden="true">#</a> 修改 <code>/etc/rc.d/rc.local</code> 文件</h3><p>这种方法，在任何 Linux 系统上都可以使用。 <code>/etc/rc.d/rc.local</code> 文件会在 Linux 系统各项服务都启动完毕之后再被运行。所以你想要自己的脚本在开机后被运行的话，可以将自己脚本路径加到该文件里。</p><h3 id="linux-rc-local不生效" tabindex="-1"><a class="header-anchor" href="#linux-rc-local不生效" aria-hidden="true">#</a> linux rc.local不生效</h3><ul><li>在Linux系统中，<code>rc.local</code>通常用于在系统启动时执行特定的命令或脚本。 <ul><li>然而，从CentOS 7版本开始，<code>/etc/rc.d/rc.local</code>文件的默认权限被设置为644，这意味着它不会被系统自动加载以执行开机启动任务。</li><li>此外，<code>rc-local.service</code>服务的默认状态也是disabled。因此，如果你发现<code>rc.local</code>文件中的命令没有在执行，你可能需要手动更改文件权限和启用服务。</li></ul></li></ul><h4 id="解决方法如下" tabindex="-1"><a class="header-anchor" href="#解决方法如下" aria-hidden="true">#</a> 解决方法如下：</h4><ul><li><code>systemctl status rc-local.service</code></li></ul><ul><li>改变文件权限：通过运行命令 <code>chmod +x /etc/rc.d/rc.local</code> 来确保<code>rc.local</code>文件具有可执行权限。 启用服务：使用命令 <code>systemctl enable rc-local.service</code> 来使<code>rc-local.service</code>服务处于激活状态。如果服务已存在，可以使用 <code>systemctl start rc-local.service</code> 或 <code>systemctl restart rc-local.service</code> 来尝试重新启动服务。 如果在尝试上述步骤之后仍然遇到问题，可能是因为其他安全机制如“麒麟安全授权认证”机制导致的。在这种情况下，可以通过以下命令来解决：</li></ul><div class="language-bash" data-ext="sh"><pre class="language-bash"><code>
<span class="token function">sudo</span> kysec_set <span class="token parameter variable">-n</span> <span class="token builtin class-name">exec</span> <span class="token parameter variable">-v</span> original /etc/rc.local

</code></pre></div><p>这将修改<code>rc.local</code>文件的执行安全标记为original，从而允许其按照预期在系统启动时执行。</p><h3 id="使用-crontab" tabindex="-1"><a class="header-anchor" href="#使用-crontab" aria-hidden="true">#</a> 使用 crontab</h3><ul><li>crontab 是 Linux 下的计划任务，当时间达到我们设定的时间时，可以自动触发某些脚本的运行。</li></ul><p>我们可以自己设置计划任务时间，然后编写对应的脚本。但是，有个特殊的任务，叫作 <strong>@reboot</strong> ，我们其实也可以直接从它的字面意义看出来，这个任务就是在系统重启之后自动运行某个脚本。</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@Devops6 ~<span class="token punctuation">]</span><span class="token comment">#vim auto_run_script2.sh</span>
<span class="token comment">#!/bin/bash</span>
<span class="token function">date</span> <span class="token operator">&gt;&gt;</span> /root/output2.txt
<span class="token function">hostname</span> <span class="token operator">&gt;&gt;</span> /root/output2.txt
<span class="token comment"># 保存退出后，再给它赋予可执行权限：</span>
<span class="token punctuation">[</span>root@Devops6 ~<span class="token punctuation">]</span><span class="token comment">#chmod +x auto_run_script2.sh </span>
<span class="token punctuation">[</span>root@Devops6 ~<span class="token punctuation">]</span><span class="token comment">#ll auto_run_script2.sh </span>
-rwxr-xr-x <span class="token number">1</span> root root <span class="token number">472</span> Mar <span class="token number">20</span> 06:55 auto_run_script2.sh
我们可以通过 <span class="token function">crontab</span> <span class="token parameter variable">-e</span> 来设置。
@reboot /root/auto_run_script2.sh
但是这里编辑完，有提示一些异常log：（这里的log可忽略，最后的效果符合预期。）
<span class="token comment">#查看也是有定时任务的</span>
<span class="token punctuation">[</span>root@Devops6 ~<span class="token punctuation">]</span><span class="token comment">#crontab -l</span>
@reboot /root/auto_run_script2.sh
</code></pre></div><h3 id="使用-systemd-服务" tabindex="-1"><a class="header-anchor" href="#使用-systemd-服务" aria-hidden="true">#</a> 使用 systemd 服务</h3><p>方法仅适用于 systemd 系统。如何区分是不是 systemd 系统？很简单，只需运行 ps aux 命令，查看 pid 为 1 的进程是不是 systemd 。</p><p>需要创建一个 systemd 启动服务，并把它放置在 /etc/systemd/system/目录下。 我们创建的 systemd 启动服务如下。请注意，这时后缀是 .service ，而不是 .sh 。</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code>$ <span class="token function">vim</span> /etc/systemd/system/auto_run_script3.service
<span class="token punctuation">[</span>Unit<span class="token punctuation">]</span>
<span class="token assign-left variable">Description</span><span class="token operator">=</span>Run a Custom Script at Startup
<span class="token assign-left variable">After</span><span class="token operator">=</span>default.target

<span class="token punctuation">[</span>Service<span class="token punctuation">]</span>
<span class="token assign-left variable">ExecStart</span><span class="token operator">=</span>/root/auto_run_script3.sh

<span class="token punctuation">[</span>Install<span class="token punctuation">]</span>
<span class="token assign-left variable">WantedBy</span><span class="token operator">=</span>default.target

<span class="token comment"># 从服务的内容可以看出来，我们最终还是会调用 /root/auto_run_script3.sh 这个脚本。</span>

<span class="token comment"># 然后，我们再把这个脚本放置在 /etc/systemd/systerm/ 目录下，之后我们再运行下面两条命令来更新 systemd 配置文件，并启动服务。</span>
<span class="token punctuation">[</span>root@Devops6 ~<span class="token punctuation">]</span><span class="token comment">#systemctl daemon-reload</span>
<span class="token punctuation">[</span>root@Devops6 ~<span class="token punctuation">]</span><span class="token comment">#systemctl enable auto_run_script3.service</span>
Created symlink from /etc/systemd/system/default.target.wants/auto_run_script3.service to /etc/systemd/system/auto_run_script3.service.
</code></pre></div>`,17),o=[c];function r(l,p){return a(),n("div",null,o)}const u=s(e,[["render",r],["__file","init.html.vue"]]);export{u as default};
