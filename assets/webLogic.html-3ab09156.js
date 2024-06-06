import{_ as n,p as a,q as s,a1 as e}from"./framework-d81ad7e5.js";const t={},o=e(`<h2 id="说明" tabindex="-1"><a class="header-anchor" href="#说明" aria-hidden="true">#</a> 说明</h2><ul><li>基于WebLogic 12c</li><li>root用户无法安装weblogic <ul><li>出于安全考虑，即使别人攻入了你的系统获得了Weblogic的控制权，对于操作系统来说也只是一个普通的受限用户。通过在用户层面的分隔，即使有一个被破坏了也要尽量少影响其它的东西。</li></ul></li></ul><h2 id="安装" tabindex="-1"><a class="header-anchor" href="#安装" aria-hidden="true">#</a> 安装</h2><h3 id="配置jdk8" tabindex="-1"><a class="header-anchor" href="#配置jdk8" aria-hidden="true">#</a> 配置JDK8</h3><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token number">1</span>. 解压jdk1.8.0_144_1.tar到指定的文件目录
<span class="token comment"># tar -xf jdk-8u181-linux-x64.tar.gz -C /usr/local/java</span>
<span class="token number">2</span>. 编辑系统环境变量
<span class="token comment"># vi /etc/profile   </span>

<span class="token assign-left variable">JAVA_HOME</span><span class="token operator">=</span>/usr/local/java/jdk1.8.0_181
<span class="token assign-left variable">CLASSPATH</span><span class="token operator">=</span><span class="token variable">$JAVA_HOME</span>/lib/
<span class="token assign-left variable"><span class="token environment constant">PATH</span></span><span class="token operator">=</span><span class="token environment constant">$PATH</span><span class="token builtin class-name">:</span><span class="token variable">$JAVA_HOME</span>/bin
<span class="token builtin class-name">export</span> <span class="token environment constant">PATH</span> JAVA_HOME CLASSPATH

<span class="token number">3</span>. 刷新配置文件
<span class="token comment"># source /etc/profile</span>
<span class="token number">4</span>. 检查jdk 是否安装成功
</code></pre></div><h3 id="安装weblogic" tabindex="-1"><a class="header-anchor" href="#安装weblogic" aria-hidden="true">#</a> 安装weblogic</h3><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 修改文件的权限</span>
<span class="token punctuation">[</span>root@web ~<span class="token punctuation">]</span><span class="token comment"># chown -R weblogic:weblogic /home/weblogic/</span>

</code></pre></div><ul><li><p>创建weblogic用户和组weblogic</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># groupadd weblogic</span>
<span class="token comment"># useradd -g weblogic weblogic</span>
<span class="token comment"># passwd weblogic</span>

</code></pre></div></li><li><p>切换用户进行安装</p><ul><li>最好放在**/home/weblogic<strong>的目录下面而不是usr目录下面，否则会导致创建域的权限问题在</strong>/home/weblogic**目录下确保有如下两个文件并做相应的配置，否则安装时候回报各种难以预知的错误。</li></ul></li><li><p>创建响应文件 wls.rsp</p><ul><li>备注：wls.rsp文件中需要修改的信息如下：<strong>ORACLE_HOME=/home/weblogic/Oracle/Middleware</strong> (表示weblogic的安装目录) 响应文件中信息的编写，否则会报奇怪的错误</li></ul></li></ul><div class="language-powershell" data-ext="powershell"><pre class="language-powershell"><code><span class="token namespace">[ENGINE]</span>
<span class="token comment">#DO NOT CHANGE THIS.</span>
Response File Version=1<span class="token punctuation">.</span>0<span class="token punctuation">.</span>0<span class="token punctuation">.</span>0<span class="token punctuation">.</span>0
<span class="token namespace">[GENERIC]</span>
<span class="token comment">##The oracle home location. This can be an existing Oracle Home #or a new Oracle Home</span>
<span class="token comment">#除了这里需要为需要安装的目录以外，别的地方不需要做修改</span>
ORACLE_HOME=<span class="token operator">/</span>home/weblogic/Oracle/Middleware
<span class="token comment">##Set this variable value to the Installation Type selected. e.g. WebLogic Server, Coherence, Complete with Examples.</span>
<span class="token comment">#</span>
INSTALL_TYPE=WebLogic Server
<span class="token comment">#</span>
<span class="token comment">##Provide the My Oracle Support Username. If you wish to ignore Oracle Configuration Manager configuration provide empty string for user name.</span>
<span class="token comment">#</span>
MYORACLESUPPORT_USERNAME=
<span class="token comment">#</span>
<span class="token comment">##Provide the My Oracle Support Password</span>
<span class="token comment">#</span>
<span class="token comment">#MYORACLESUPPORT_PASSWORD=&lt;SECURE VALUE&gt;</span>
MYORACLESUPPORT_PASSWORD=
<span class="token comment">#</span>
<span class="token comment">##Set this to true if you wish to decline the security updates. Setting this to true and providing empty string for My Oracle Support username will ignore the Oracle Configuration Manager configuration</span>
<span class="token comment">#</span>
DECLINE_SECURITY_UPDATES=true
<span class="token comment">##Set this to true if My Oracle Support Password is specified</span>
SECURITY_UPDATES_VIA_MYORACLESUPPORT=false
<span class="token comment">##Provide the Proxy Host</span>
PROXY_HOST=
<span class="token comment">##Provide the Proxy Port</span>
PROXY_PORT=
<span class="token comment">##Provide the Proxy Username</span>
PROXY_USER=
<span class="token comment">##Provide the Proxy Password</span>
PROXY_PWD=&lt;SECURE VALUE&gt;
<span class="token comment">##Type String (URL format) Indicates the OCM Repeater URL which should be of the format [scheme[Http/Https]]://[repeater host]:[repeater port]</span>
COLLECTOR_SUPPORTHUB_URL=


</code></pre></div><ul><li>创建Loc文件 oraInst.loc</li></ul><div class="language-powershell" data-ext="powershell"><pre class="language-powershell"><code>inventory_loc=<span class="token operator">/</span>home/weblogic/oraInventory
inst_group=weblogic

<span class="token comment">#备注：oraInts.loc文件中修改如下信息：</span>
<span class="token comment">#   inventory_loc=/home/createWeblogic/oraInventory  (表示产品清单目录)</span>
<span class="token comment">#   inst_group=web (web表示createWeblogic用户所在的组名，查看用户所属组的命令: groups)</span>
</code></pre></div><ul><li><p>保证所需要得目录weblogic用户要用读写权限</p><blockquote><p>oraInst.loc，wls.rsp，fmw_12.2.1.3.0_wls.jar文件用户weblogic必须要有读写权限</p></blockquote></li><li><p>启动</p></li><li><p>注意：必须为绝对的全路径</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code> <span class="token function">java</span> <span class="token parameter variable">-jar</span> fmw_12.1.3.0.0_wls.jar <span class="token parameter variable">-silent</span> <span class="token parameter variable">-responseFile</span> /home/weblogic/response/wls.rsp <span class="token parameter variable">-invPtrLoc</span> /home/weblogic/oranInst.loc 
 
<span class="token comment"># 或另一文件存放方式 </span>
    <span class="token function">java</span> <span class="token parameter variable">-jar</span> fmw_12.2.1.3.0_wls.jar  <span class="token parameter variable">-silent</span>  <span class="token parameter variable">-responseFile</span>  /home/createWeblogic/wls.rsp  <span class="token parameter variable">-invPtrLoc</span> /home/createWeblogic/oraInst.loc  
<span class="token comment"># 至此weblogic的安装即完成</span>
</code></pre></div></li></ul><h3 id="创建域base-domain" tabindex="-1"><a class="header-anchor" href="#创建域base-domain" aria-hidden="true">#</a> 创建域base_domain</h3><h4 id="新建域的目录" tabindex="-1"><a class="header-anchor" href="#新建域的目录" aria-hidden="true">#</a> 新建域的目录</h4><p>-<code> mkdir -p /home/weblogic/Oracle/Middleware/user_projects/domains/base_domain</code></p><h4 id="" tabindex="-1"><a class="header-anchor" href="#" aria-hidden="true">#</a></h4><ul><li><p><code>/home/weblogic/Oracle/Middleware/wlserver/common/bin</code></p></li><li><p>创建一个脚本createdomain.py（在该目录下 /home/weblogic/Oracle/Middleware/wlserver/common/bin）</p></li><li><p>以下为文件内容：</p></li></ul><div class="language-bash" data-ext="sh"><pre class="language-bash"><code>
<span class="token comment">#=======================================================================================</span>
<span class="token comment"># Open a domain template.</span>
<span class="token comment">#=======================================================================================</span>

readTemplate<span class="token punctuation">(</span><span class="token string">&quot;/home/weblogic/Oracle/Middleware/wlserver/common/templates/wls/wls.jar&quot;</span><span class="token punctuation">)</span>

<span class="token comment">#=======================================================================================</span>
<span class="token comment"># Configure the Administration Server and SSL port.</span>
<span class="token comment">#</span>
<span class="token comment"># To enable access by both local and remote processes, you should not set the </span>
<span class="token comment"># listen address for the server instance (that is, it should be left blank or not set). </span>
<span class="token comment"># In this case, the server instance will determine the address of the machine and </span>
<span class="token comment"># listen on it. </span>
<span class="token comment">#=======================================================================================</span>

cd<span class="token punctuation">(</span><span class="token string">&#39;Servers/AdminServer&#39;</span><span class="token punctuation">)</span>
set<span class="token punctuation">(</span><span class="token string">&#39;ListenAddress&#39;</span>,<span class="token string">&#39;&#39;</span><span class="token punctuation">)</span>
set<span class="token punctuation">(</span><span class="token string">&#39;ListenPort&#39;</span>, <span class="token number">7001</span><span class="token punctuation">)</span>

create<span class="token punctuation">(</span><span class="token string">&#39;AdminServer&#39;</span>,<span class="token string">&#39;SSL&#39;</span><span class="token punctuation">)</span>
cd<span class="token punctuation">(</span><span class="token string">&#39;SSL/AdminServer&#39;</span><span class="token punctuation">)</span>
set<span class="token punctuation">(</span><span class="token string">&#39;Enabled&#39;</span>, <span class="token string">&#39;True&#39;</span><span class="token punctuation">)</span>
set<span class="token punctuation">(</span><span class="token string">&#39;ListenPort&#39;</span>, <span class="token number">7002</span><span class="token punctuation">)</span>

<span class="token comment">#=======================================================================================</span>
<span class="token comment"># Define the user password for weblogic.</span>
<span class="token comment">#=======================================================================================</span>

cd<span class="token punctuation">(</span><span class="token string">&#39;/&#39;</span><span class="token punctuation">)</span>
cd<span class="token punctuation">(</span><span class="token string">&#39;Security/base_domain/User/weblogic&#39;</span><span class="token punctuation">)</span>
<span class="token comment"># Please set password here before using this script, e.g. cmo.setPassword(&#39;value&#39;)</span>
<span class="token comment"># 设置控制台密码</span>
cmo.setPassword<span class="token punctuation">(</span><span class="token string">&#39;weblogic1&#39;</span><span class="token punctuation">)</span>
<span class="token comment">#=======================================================================================</span>
<span class="token comment"># Create a JMS Server.</span>
<span class="token comment">#=======================================================================================</span>

<span class="token comment">#=======================================================================================</span>
<span class="token comment"># Write the domain and close the domain template.</span>
<span class="token comment">#=======================================================================================</span>

setOption<span class="token punctuation">(</span><span class="token string">&#39;OverwriteDomain&#39;</span>, <span class="token string">&#39;true&#39;</span><span class="token punctuation">)</span>
<span class="token comment"># ----------------------------------------------创建的base_domain</span>
writeDomain<span class="token punctuation">(</span><span class="token string">&#39;/home/weblogic/Oracle/Middleware/user_projects/domains/base_domain&#39;</span><span class="token punctuation">)</span>
closeTemplate<span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token comment">#=======================================================================================</span>
<span class="token comment"># Exit WLST.</span>
<span class="token comment">#=======================================================================================</span>

exit<span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre></div><ul><li>执行命令：<code>sh wlst.sh createdomain.py</code> 运行脚本，不报错则成功，注意脚本若不是跟wlst.sh同个目录，要加对应路径。</li></ul><p>启动服务</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token builtin class-name">cd</span> /home/weblogic/Oracle/Middleware/user_projects/domains/testDomain/bin/

./startWebLogic.sh
</code></pre></div><ul><li>如果没报错，则访问http://ip:port/console</li></ul><h2 id="启动慢" tabindex="-1"><a class="header-anchor" href="#启动慢" aria-hidden="true">#</a> 启动慢</h2><h4 id="在控制台已经创建好了server-在后台启动的时候日志卡在那儿不动。" tabindex="-1"><a class="header-anchor" href="#在控制台已经创建好了server-在后台启动的时候日志卡在那儿不动。" aria-hidden="true">#</a> 在控制台已经创建好了server，在后台启动的时候日志卡在那儿不动。</h4><ul><li>调整启动参数 <code>domains/base_domain/bin/setDomainEnv.sh</code></li></ul><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token assign-left variable">JAVA_OPTIONS</span><span class="token operator">=</span><span class="token string">&quot;<span class="token variable">\${JAVA_OPTIONS}</span> -Djava.security.egd=file:/dev/./urandom&quot;</span>
<span class="token builtin class-name">export</span> JAVA_OPTIONS

</code></pre></div><ul><li>重启webloigc</li></ul><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token comment">#修改Weblogic对应JAVA_HOME下的jre/lib/security/java.security文件</span>
<span class="token assign-left variable">securerandom.source</span><span class="token operator">=</span>file:/dev/./urandom  
<span class="token comment"># 修改Weblogic Server的启动的JAVA_OPTION参数</span>

<span class="token parameter variable">-Djava.security.egd</span><span class="token operator">=</span>file:/dev/./urandom 
</code></pre></div><h2 id="weblogic-更改用户名密码" tabindex="-1"><a class="header-anchor" href="#weblogic-更改用户名密码" aria-hidden="true">#</a> weblogic 更改用户名密码</h2><ul><li>备份ldap认证文件</li></ul><p><code>mv $DOMAIN_HOME/PROJECT_NAME/security/DefaultAuthenticatorInit.ldift{,.bak}</code></p><ul><li><p>删除或备份下的数据和缓存 <code>$ mv $DOMAIN_HOME/PROJECT_NAME/servers/AdminServer/{tmp,data,cache} ../servers/AdminServer/backup</code></p></li><li><p>执行修改密码命令</p><ul><li><code>java -cp /app/sinova_cs/Oracle/Middleware/wlserver_10.3/server/lib/weblogic.jar weblogic.security.utils.AdminAccount &lt;新用户名&gt; &lt;新密码&gt; .(注意最后有个点的，点之前有空格)</code></li></ul></li><li><p><code>java -classpath /home/weblogic/Oracle/Middleware/wlserver/server/lib/weblogic.jar weblogic.security.utils.AdminAccount weblogic 1qaz@WSX .</code></p></li><li><p>修改boot.properties文件</p></li></ul><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>weblogic@mysql security<span class="token punctuation">]</span>$  <span class="token function">vim</span> <span class="token punctuation">..</span>/servers/AdminServer/security/boot.properties
<span class="token comment">#Mon Jul 12 15:08:18 CST 2021</span>
<span class="token assign-left variable">password</span><span class="token operator">=</span>weblogic2022
<span class="token assign-left variable">username</span><span class="token operator">=</span>weblogic
<span class="token comment"># 重启weblogic即可登录</span>

 
<span class="token comment"># 备份DefaultAuthenticatorInit.ldift文件</span>

<span class="token punctuation">[</span>root@test4 ~<span class="token punctuation">]</span><span class="token comment"># find / -name DefaultAuthenticatorInit.ldift</span>

<span class="token function">cp</span> DefaultAuthenticatorInit.ldift DefaultAuthenticatorInit.ldift_bak

<span class="token comment">#  java -cp /app/sinova_cs/Oracle/Middleware/wlserver_10.3/server/lib/weblogic.jar weblogic.security.utils.AdminAccount &lt;新用户名&gt; &lt;新密码&gt; .(注意最后有个点的，点之前有空格)</span>

<span class="token punctuation">[</span>root@test4 security<span class="token punctuation">]</span><span class="token comment"># find / -name weblogic.jar</span>
/application/weblogic12/wls12130/wlserver/server/lib/weblogic.jar

<span class="token function">java</span> <span class="token parameter variable">-classpath</span>  /home/weblogic/Oracle/Middleware/wlserver/server/lib/weblogic.jar  weblogic.security.utils.AdminAccount weblogic 1qaz@WSX <span class="token builtin class-name">.</span>

<span class="token comment"># 执行完后在当前目录会生成一个新的DefaultAuthenticatorInit.ldift文件，然后替换原来的%DOMAIN_HOME%/security/DefaultAuthenticatorInit.ldift文件。</span>
 

<span class="token comment"># 从%DOMAIN_HOME%/servers/AdminServer/data/ldap/子目录中删除初始化状态文件DefaultAuthenticatormyrealmInit.initialized，删除boot.properties。</span>

<span class="token punctuation">[</span>root@test4 bin<span class="token punctuation">]</span><span class="token comment"># find / -name AdminServer</span>
/application/weblogic12/domain/servers/AdminServer

</code></pre></div><h3 id="weblogic-12c卸载" tabindex="-1"><a class="header-anchor" href="#weblogic-12c卸载" aria-hidden="true">#</a> weblogic 12c卸载</h3><ul><li>linux <code>deinstall.sh</code></li><li><strong><code>-silent</code></strong> 命令：<code>cd /home/weblogic/Oracle/Middleware/oui/bin</code></li></ul><blockquote><p><code>sh deinstall.sh -silent</code></p></blockquote>`,36),c=[o];function l(p,i){return a(),s("div",null,c)}const d=n(t,[["render",l],["__file","webLogic.html.vue"]]);export{d as default};
