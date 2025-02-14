import{_ as a,p as s,q as n,a1 as e}from"./framework-d81ad7e5.js";const p={},t=e(`<h2 id="防火墙指定ipport" tabindex="-1"><a class="header-anchor" href="#防火墙指定ipport" aria-hidden="true">#</a> 防火墙指定IPport</h2><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token comment">#开放端口（不限制ip）</span>
<span class="token comment">#firewall-cmd --zone=public --add-port=28080/tcp --permanent</span>
<span class="token comment">#删除端口（ports）    </span>
firewall-cmd --remove-port<span class="token operator">=</span><span class="token number">29093</span>/tcp <span class="token parameter variable">--permanent</span>
 firewall-cmd --remove-port<span class="token operator">=</span><span class="token number">80</span>/tcp <span class="token parameter variable">--permanent</span>   
<span class="token comment">#重新加载</span>
firewall-cmd <span class="token parameter variable">--reload</span>
  
firewall-cmd  --list-all
<span class="token comment">#指定ip    </span>
firewall-cmd  <span class="token parameter variable">--permanent</span> <span class="token parameter variable">--zone</span><span class="token operator">=</span>public --add-rich-rule<span class="token operator">=</span><span class="token string">&#39;rule family=&quot;ipv4&quot; source address=&quot;27.196.95.59&quot;  port protocol=&quot;tcp&quot; port=&quot;20022&quot; accept&#39;</span>
<span class="token comment">#指定服务器    </span>
firewall-cmd  <span class="token parameter variable">--permanent</span> <span class="token parameter variable">--zone</span><span class="token operator">=</span>public --add-rich-rule<span class="token operator">=</span><span class="token string">&#39;rule family=&quot;ipv4&quot; source address=&quot;172.16.140.22&quot;  port protocol=&quot;tcp&quot; port=&quot;33306&quot; accept&#39;</span> 
<span class="token comment">#指定网段     </span>
firewall-cmd  <span class="token parameter variable">--permanent</span> <span class="token parameter variable">--zone</span><span class="token operator">=</span>public --add-rich-rule<span class="token operator">=</span><span class="token string">&#39;rule family=&quot;ipv4&quot; source address=&quot;27.196.95.50&quot;  port protocol=&quot;tcp&quot; port=&quot;29093&quot; accept&#39;</span> 
<span class="token comment">#删除（指定ip限制的端口）    </span>
firewall-cmd  <span class="token parameter variable">--permanent</span> <span class="token parameter variable">--zone</span><span class="token operator">=</span>public --remove-rich-rule<span class="token operator">=</span><span class="token string">&#39;rule family=&quot;ipv4&quot; source address=&quot;172.16.140.65&quot;  port protocol=&quot;tcp&quot; port=&quot;33306&quot; accept&#39;</span> 


</code></pre></div><h2 id="iptables防火墙" tabindex="-1"><a class="header-anchor" href="#iptables防火墙" aria-hidden="true">#</a> iptables防火墙</h2><ul><li>有时候关了防火墙，下次登录又开了，发现服务起不来，找半天才发现防火墙又开了，所以建议永久关闭防火墙和selinux</li></ul><ol><li>基本操作</li></ol><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 查看防火墙状态</span>
<span class="token function">service</span> iptables status

<span class="token comment"># 停止防火墙</span>
<span class="token function">service</span> iptables stop

<span class="token comment"># 启动防火墙</span>
<span class="token function">service</span> iptables start

<span class="token comment"># 重启防火墙</span>
<span class="token function">service</span> iptables restart

<span class="token comment"># 永久关闭防火墙</span>
<span class="token function">chkconfig</span> iptables off

<span class="token comment"># 永久关闭后重启</span>
<span class="token function">chkconfig</span> iptables on　
</code></pre></div><ol start="2"><li>开启80端口</li></ol><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token function">vim</span> /etc/sysconfig/iptables
<span class="token comment"># 加入如下代码</span>
<span class="token parameter variable">-A</span> INPUT <span class="token parameter variable">-m</span> state <span class="token parameter variable">--state</span> NEW <span class="token parameter variable">-m</span> tcp <span class="token parameter variable">-p</span> tcp <span class="token parameter variable">--dport</span> <span class="token number">80</span> <span class="token parameter variable">-j</span> ACCEPT
<span class="token comment"># 保存退出后重启防火墙</span>

<span class="token function">service</span> iptables restart

</code></pre></div><h2 id="firewall防火墙" tabindex="-1"><a class="header-anchor" href="#firewall防火墙" aria-hidden="true">#</a> firewall防火墙</h2><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 查看firewall服务状态</span>

systemctl status firewalld

<span class="token comment"># 查看firewall的状态</span>

firewall-cmd <span class="token parameter variable">--state</span>



<span class="token comment">#### 关闭 firewalld：</span>

systemctl stop firewalld <span class="token comment">#临时关闭</span>

systemctl disable firewalld <span class="token comment">#永久关闭,即设置开机的时候不自动启动</span>


<span class="token comment"># 开启、重启、关闭、firewalld.service服务</span>

<span class="token comment"># 开启</span>
<span class="token function">service</span> firewalld start
<span class="token comment"># 重启</span>
<span class="token function">service</span> firewalld restart
<span class="token comment"># 关闭</span>
<span class="token function">service</span> firewalld stop



<span class="token comment"># 查看防火墙规则</span>
firewall-cmd --list-all


</code></pre></div><ol start="2"><li>#查询、开放、关闭端口</li></ol><div class="language-bash" data-ext="sh"><pre class="language-bash"><code>
<span class="token comment"># 查询端口是否开放</span>
firewall-cmd --query-port<span class="token operator">=</span><span class="token number">8080</span>/tcp

<span class="token comment">#开放80端口</span>
firewall-cmd <span class="token parameter variable">--permanent</span> --add-port<span class="token operator">=</span><span class="token number">80</span>/tcp
<span class="token comment"># 移除端口</span>
firewall-cmd <span class="token parameter variable">--permanent</span> --remove-port<span class="token operator">=</span><span class="token number">8080</span>/tcp
 

<span class="token comment">#重启防火墙(修改配置后要重启防火墙)</span>
firewall-cmd <span class="token parameter variable">--reload</span>

<span class="token comment"># 参数解释</span>
<span class="token comment"># firwall-cmd：是Linux提供的操作firewall的一个工具；</span>
<span class="token comment"># --permanent：表示设置为持久；</span>
<span class="token comment"># --add-port：标识添加的端口；       </span>
</code></pre></div><h3 id="centos7版本对防火墙进行加强-不再使用原来的iptables-启用firewalld" tabindex="-1"><a class="header-anchor" href="#centos7版本对防火墙进行加强-不再使用原来的iptables-启用firewalld" aria-hidden="true">#</a> centos7版本对防火墙进行加强,不再使用原来的iptables,启用firewalld</h3><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token comment">#1.firewalld的基本使用</span>

<span class="token comment">#启动</span>
  systemctl start firewalld
<span class="token comment">#查状态</span>
systemctl status firewalld 
<span class="token comment">#停止</span>
  systemctl disable firewalld
<span class="token comment">#禁用</span>
  systemctl stop firewalld
<span class="token comment">#在开机时启用一个服务</span>
systemctl <span class="token builtin class-name">enable</span> firewalld.service
<span class="token comment">#在开机时禁用一个服务</span>
systemctl disable firewalld.service
<span class="token comment">#查看服务是否开机启动</span>
systemctl is-enabled firewalld.service
<span class="token comment">#查看已启动的服务列表</span>
systemctl list-unit-files<span class="token operator">|</span><span class="token function">grep</span> enabled
<span class="token comment">#查看启动失败的服务列表</span>
systemctl <span class="token parameter variable">--failed</span>


<span class="token comment">#2.配置firewalld-cmd</span>

<span class="token comment">#查看版本</span>
 firewall-cmd <span class="token parameter variable">--version</span>
<span class="token comment">#查看帮助</span>
 firewall-cmd <span class="token parameter variable">--help</span>
<span class="token comment">#显示状态</span>
 firewall-cmd <span class="token parameter variable">--state</span>
<span class="token comment">#查看所有打开的端口</span>
 firewall-cmd <span class="token parameter variable">--zone</span><span class="token operator">=</span>public --list-ports
<span class="token comment">#更新防火墙规则</span>
 firewall-cmd <span class="token parameter variable">--reload</span>
<span class="token comment">#查看区域信息:  firewall-cmd --get-active-zones</span>
<span class="token comment">#查看指定接口所属区域</span>
 firewall-cmd --get-zone-of-interface<span class="token operator">=</span>eth0
<span class="token comment">#拒绝所有包</span>
firewall-cmd --panic-on
<span class="token comment">#取消拒绝状态</span>
 firewall-cmd --panic-off
<span class="token comment">#查看是否拒绝</span>
 firewall-cmd --query-panic 
</code></pre></div><h4 id="开启一个端口" tabindex="-1"><a class="header-anchor" href="#开启一个端口" aria-hidden="true">#</a> 开启一个端口</h4><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 添加</span>
firewall-cmd <span class="token parameter variable">--zone</span><span class="token operator">=</span>public<span class="token punctuation">(</span>作用域<span class="token punctuation">)</span> --add-port<span class="token operator">=</span><span class="token number">80</span>/tcp<span class="token punctuation">(</span>端口和访问类型<span class="token punctuation">)</span> --permanent<span class="token punctuation">(</span>永久生效<span class="token punctuation">)</span>
firewall-cmd <span class="token parameter variable">--zone</span><span class="token operator">=</span>public --add-service<span class="token operator">=</span>http <span class="token parameter variable">--permanent</span>
firewall-cmd <span class="token parameter variable">--reload</span>    <span class="token comment"># 重新载入，更新防火墙规则</span>
firewall-cmd <span class="token parameter variable">--zone</span><span class="token operator">=</span> public --query-port<span class="token operator">=</span><span class="token number">80</span>/tcp  <span class="token comment">#查看</span>
firewall-cmd <span class="token parameter variable">--zone</span><span class="token operator">=</span> public --remove-port<span class="token operator">=</span><span class="token number">80</span>/tcp <span class="token parameter variable">--permanent</span>  <span class="token comment"># 删除</span>

firewall-cmd --list-services
firewall-cmd --get-services
firewall-cmd --add-service<span class="token operator">=</span><span class="token operator">&lt;</span>service<span class="token operator">&gt;</span>
firewall-cmd --delete-service<span class="token operator">=</span><span class="token operator">&lt;</span>service<span class="token operator">&gt;</span>
<span class="token comment"># 在每次修改端口和服务后/etc/firewalld/zones/public.xml文件就会被修改,所以也可以在文件中之间修改,然后重新加载</span>
<span class="token comment"># 使用命令实际也是在修改文件，需要重新加载才能生效。</span>

firewall-cmd <span class="token parameter variable">--zone</span><span class="token operator">=</span>public --query-port<span class="token operator">=</span><span class="token number">80</span>/tcp
firewall-cmd <span class="token parameter variable">--zone</span><span class="token operator">=</span>public --query-port<span class="token operator">=</span><span class="token number">8080</span>/tcp
firewall-cmd <span class="token parameter variable">--zone</span><span class="token operator">=</span>public --query-port<span class="token operator">=</span><span class="token number">3306</span>/tcp
firewall-cmd <span class="token parameter variable">--zone</span><span class="token operator">=</span>public --add-port<span class="token operator">=</span><span class="token number">8080</span>/tcp <span class="token parameter variable">--permanent</span>
firewall-cmd <span class="token parameter variable">--zone</span><span class="token operator">=</span>public --add-port<span class="token operator">=</span><span class="token number">3306</span>/tcp <span class="token parameter variable">--permanent</span>
firewall-cmd <span class="token parameter variable">--zone</span><span class="token operator">=</span>public --query-port<span class="token operator">=</span><span class="token number">3306</span>/tcp
firewall-cmd <span class="token parameter variable">--zone</span><span class="token operator">=</span>public --query-port<span class="token operator">=</span><span class="token number">8080</span>/tcp
firewall-cmd <span class="token parameter variable">--reload</span>  <span class="token comment"># 重新加载后才能生效</span>
firewall-cmd <span class="token parameter variable">--zone</span><span class="token operator">=</span>public --query-port<span class="token operator">=</span><span class="token number">3306</span>/tcp
firewall-cmd <span class="token parameter variable">--zone</span><span class="token operator">=</span>public --query-port<span class="token operator">=</span><span class="token number">8080</span>/tcp
</code></pre></div><h4 id="参数解释" tabindex="-1"><a class="header-anchor" href="#参数解释" aria-hidden="true">#</a> 参数解释</h4><div class="language-bash" data-ext="sh"><pre class="language-bash"><code>–add-service <span class="token comment">#添加的服务</span>
–zone <span class="token comment">#作用域</span>
–add-port<span class="token operator">=</span><span class="token number">80</span>/tcp <span class="token comment">#添加端口，格式为：端口/通讯协议</span>
–permanent <span class="token comment">#永久生效，没有此参数重启后失效</span>
</code></pre></div><h4 id="详细使用" tabindex="-1"><a class="header-anchor" href="#详细使用" aria-hidden="true">#</a> 详细使用</h4><div class="language-bash" data-ext="sh"><pre class="language-bash"><code>firewall-cmd <span class="token parameter variable">--permanent</span> <span class="token parameter variable">--zone</span><span class="token operator">=</span>public --add-rich-rule<span class="token operator">=</span><span class="token string">&#39;rule family=&quot;ipv4&quot; source address=&quot;192.168.0.4/24&quot; service name=&quot;http&quot; accept&#39;</span>    //设置某个ip访问某个服务
firewall-cmd <span class="token parameter variable">--permanent</span> <span class="token parameter variable">--zone</span><span class="token operator">=</span>public --remove-rich-rule<span class="token operator">=</span><span class="token string">&#39;rule family=&quot;ipv4&quot; source address=&quot;192.168.0.4/24&quot; service name=&quot;http&quot; accept&#39;</span> //删除配置
firewall-cmd <span class="token parameter variable">--permanent</span> --add-rich-rule <span class="token string">&#39;rule family=ipv4 source address=192.168.0.1/2 port port=80 protocol=tcp accept&#39;</span>     //设置某个ip访问某个端口
firewall-cmd <span class="token parameter variable">--permanent</span> --remove-rich-rule <span class="token string">&#39;rule family=ipv4 source address=192.168.0.1/2 port port=80 protocol=tcp accept&#39;</span>     //删除配置

firewall-cmd --query-masquerade  <span class="token comment"># 检查是否允许伪装IP</span>
firewall-cmd --add-masquerade    <span class="token comment"># 允许防火墙伪装IP</span>
firewall-cmd --remove-masquerade <span class="token comment"># 禁止防火墙伪装IP</span>

firewall-cmd --add-forward-port<span class="token operator">=</span>port<span class="token operator">=</span><span class="token number">80</span>:proto<span class="token operator">=</span>tcp:toport<span class="token operator">=</span><span class="token number">8080</span>   <span class="token comment"># 将80端口的流量转发至8080</span>
firewall-cmd --add-forward-port<span class="token operator">=</span>proto<span class="token operator">=</span><span class="token number">80</span>:proto<span class="token operator">=</span>tcp:toaddr<span class="token operator">=</span><span class="token number">192.168</span>.1.0.1 <span class="token comment"># 将80端口的流量转发至192.168.0.1</span>
firewall-cmd --add-forward-port<span class="token operator">=</span>proto<span class="token operator">=</span><span class="token number">80</span>:proto<span class="token operator">=</span>tcp:toaddr<span class="token operator">=</span><span class="token number">192.168</span>.0.1:toport<span class="token operator">=</span><span class="token number">8080</span> <span class="token comment"># 将80端口的流量转发至192.168.0.1的8080端口</span>
 
</code></pre></div><h3 id="centos7以下版本" tabindex="-1"><a class="header-anchor" href="#centos7以下版本" aria-hidden="true">#</a> centos7以下版本</h3><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 开放80，22，8080 端口</span>
/sbin/iptables <span class="token parameter variable">-I</span> INPUT <span class="token parameter variable">-p</span> tcp <span class="token parameter variable">--dport</span> <span class="token number">80</span> <span class="token parameter variable">-j</span> ACCEPT
/sbin/iptables <span class="token parameter variable">-I</span> INPUT <span class="token parameter variable">-p</span> tcp <span class="token parameter variable">--dport</span> <span class="token number">22</span> <span class="token parameter variable">-j</span> ACCEPT
/sbin/iptables <span class="token parameter variable">-I</span> INPUT <span class="token parameter variable">-p</span> tcp <span class="token parameter variable">--dport</span> <span class="token number">8080</span> <span class="token parameter variable">-j</span> ACCEPT
<span class="token comment"># 保存</span>
/etc/rc.d/init.d/iptables save
<span class="token comment"># 查看打开的端口</span>
/etc/init.d/iptables status

<span class="token comment"># 关闭防火墙 </span>
    <span class="token number">1</span>） 永久性生效，重启后不会复原
        开启： <span class="token function">chkconfig</span> iptables on
        关闭： <span class="token function">chkconfig</span> iptables off
    <span class="token number">2</span>） 即时生效，重启后复原
        开启： <span class="token function">service</span> iptables start
        关闭： <span class="token function">service</span> iptables stop 
</code></pre></div>`,22),o=[t];function r(l,c){return s(),n("div",null,o)}const m=a(p,[["render",r],["__file","firewalld .html.vue"]]);export{m as default};
