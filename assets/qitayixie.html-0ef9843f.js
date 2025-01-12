import{_ as s,p as n,q as a,a1 as e}from"./framework-d81ad7e5.js";const t={},o=e(`<h3 id="切断用户连接" tabindex="-1"><a class="header-anchor" href="#切断用户连接" aria-hidden="true">#</a> 切断用户连接</h3><div class="language-text" data-ext="text"><pre class="language-text"><code>who 查看用户连接

断开远程用户：fuser -k /dev/pts/x
x为who下看到的这个用户的pts序号


断开本地用户：fuser -k /dev/ttyx
x为who查看到的tty序号
</code></pre></div><h3 id="linux下查看用户登陆历史记录-可以用root用户下的last命令查看" tabindex="-1"><a class="header-anchor" href="#linux下查看用户登陆历史记录-可以用root用户下的last命令查看" aria-hidden="true">#</a> Linux下查看用户登陆历史记录，可以用root用户下的last命令查看：</h3><div class="language-bash" data-ext="sh"><pre class="language-bash"><code>
<span class="token punctuation">[</span>root@DB-Server ~<span class="token punctuation">]</span><span class="token comment"># su root</span>
<span class="token punctuation">[</span>root@DB-Server ~<span class="token punctuation">]</span><span class="token comment"># last -10</span>
root     pts/1        :0.0             Wed Dec <span class="token number">21</span> 09:54   still logged <span class="token keyword">in</span>   
root     pts/4        :0.0             Wed Dec <span class="token number">21</span> 09:43 - 09:48  <span class="token punctuation">(</span>00:04<span class="token punctuation">)</span>    
root     pts/1        :0.0             Wed Dec <span class="token number">21</span> 09:43 - 09:48  <span class="token punctuation">(</span>00:05<span class="token punctuation">)</span>    
root     pts/3        <span class="token number">27.196</span>.158.79   Wed Dec <span class="token number">21</span> 09:41 - <span class="token number">12</span>:40  <span class="token punctuation">(</span>02:59<span class="token punctuation">)</span>    
root     pts/4        :0.0             Wed Dec <span class="token number">21</span> 09:28 - 09:30  <span class="token punctuation">(</span>00:01<span class="token punctuation">)</span>    
root     pts/3        :0.0             Wed Dec <span class="token number">21</span> 09:27 - 09:30  <span class="token punctuation">(</span>00:02<span class="token punctuation">)</span>    
root     pts/2        <span class="token number">27.196</span>.158.29   Wed Dec <span class="token number">21</span> 09:27   still logged <span class="token keyword">in</span>   
root     pts/1        :0.0             Wed Dec <span class="token number">21</span> 09:27 - 09:42  <span class="token punctuation">(</span>00:15<span class="token punctuation">)</span>    
root     pts/2        :0.0             Wed Dec <span class="token number">21</span> 09:23 - 09:25  <span class="token punctuation">(</span>00:01<span class="token punctuation">)</span>    
root     pts/1        :0.0             Wed Dec <span class="token number">21</span> 09:22 - 09:25  <span class="token punctuation">(</span>00:02<span class="token punctuation">)</span> 
<span class="token comment">#查看最近10次用户历史操作记录</span>

</code></pre></div><h2 id="连接慢" tabindex="-1"><a class="header-anchor" href="#连接慢" aria-hidden="true">#</a> 连接慢</h2><ul><li>ssh 连接慢 使用 <code>ssh -v</code></li></ul><div class="language-text" data-ext="text"><pre class="language-text"><code>ssh -v 192.168.12.43

This is probably an issue with D-Bus and systemd. If the dbus service is restarted for some reason, you will also need to restart systemd-logind.
You can check if this is the issue by opening the ssh daemon log (on Ubuntu it should be /var/log/auth.log) and check if it has these lines:
*注：CentOS 下查看* 
</code></pre></div><p><em><strong>cat /var/log/secure</strong></em><code>sshd[2721]: pam_systemd(sshd:session): Failed to create session: Connection timed out</code> 如果找到以上信息，则在服务端执行: <code>**systemctl restart systemd-logind**</code></p>`,8),p=[o];function c(l,u){return n(),a("div",null,p)}const i=s(t,[["render",c],["__file","qitayixie.html.vue"]]);export{i as default};
