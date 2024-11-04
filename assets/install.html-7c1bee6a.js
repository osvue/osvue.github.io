import{_ as o,M as p,p as l,q as c,R as n,t as a,N as e,a1 as t}from"./framework-d81ad7e5.js";const i={},r={id:"mirrors镜像库",tabindex:"-1"},h=n("a",{class:"header-anchor",href:"#mirrors镜像库","aria-hidden":"true"},"#",-1),d={href:"https://mirrors.huaweicloud.com/",target:"_blank",rel:"noopener noreferrer"},u=t(`<h4 id="编译安装" tabindex="-1"><a class="header-anchor" href="#编译安装" aria-hidden="true">#</a> 编译安装</h4><p>执行cd Python-3.7.12进入到解压后的Python-3.7.12目录下，依次执行如下三个命令：</p><div class="custom-container tip"><p class="custom-container-title">TIP</p><p>此时注意：当python3 安装了requests，由于requests包引入了urllib3，而新版本的urllib3 需要OpenSSL 1.1.1+以上版本，否则报错。而默认的OpenSSL版本为OpenSSL 1.0.2k-fips 26 Jan 2017 而安装OpenSSL 1.1.1+以上版本需要重新编译和安装python才可以生效，所以此步骤放到这里来。</p><p>解决办法： 需要升级openssl、下载编译openssl</p></div><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 下载openssl-1.1.1t源代码包：</span>
<span class="token function">wget</span> --no-check-certificate   https://www.openssl.org/source/openssl-1.1.1t.tar.gz
<span class="token comment"># 解压</span>
<span class="token function">tar</span> <span class="token parameter variable">-zxvf</span> openssl-1.1.1t.tar.gz
<span class="token builtin class-name">cd</span> openssl-1.1.1t/
<span class="token comment"># 指定openssl安装的目标路径</span>
./config <span class="token parameter variable">--prefix</span><span class="token operator">=</span>/usr/local/my_openssl
<span class="token comment"># 在CPU占用不多的情况下，可以适当使用4个线程加速编译，可以根据需要调整线程数，</span>
<span class="token function">make</span> <span class="token comment"># make -j4</span>
<span class="token function">make</span> <span class="token function">install</span>






<span class="token comment"># 编译环境</span>
yum <span class="token function">install</span> <span class="token parameter variable">-y</span>   zlib-devel
yum <span class="token parameter variable">-y</span> <span class="token function">install</span> zlib-devel bzip2-devel openssl-devel ncurses-devel sqlite-devel readline-devel tk-devel libffi-devel gcc <span class="token function">make</span>


./configure <span class="token parameter variable">--prefix</span><span class="token operator">=</span>/usr/local/tools/Python-3.7.12

<span class="token function">make</span>

<span class="token function">make</span> <span class="token function">install</span>

<span class="token comment"># --prefix是Python的安装目录。</span>
<span class="token comment"># 软连接</span>
<span class="token function">ln</span> <span class="token parameter variable">-s</span> /usr/local/tools/Python-3.7.12/bin/python3.7 /usr/bin/python3

<span class="token function">ln</span> <span class="token parameter variable">-s</span> /usr/local/tools/Python-3.7.12/bin/pip3.7 /usr/bin/pip3


</code></pre></div><h4 id="配置环境变量" tabindex="-1"><a class="header-anchor" href="#配置环境变量" aria-hidden="true">#</a> 配置环境变量</h4><p>配置环境变量主要是能快速使用pip3安装命令。</p><p>执行 <code>vi ~/.bash_profile</code>，打开配置文件，添加如下配置：</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token comment">#配置python</span>

<span class="token builtin class-name">export</span> <span class="token assign-left variable">PYTHON_HOME</span><span class="token operator">=</span>/usr/local/tools/Python-3.7.12

<span class="token builtin class-name">export</span> <span class="token assign-left variable"><span class="token environment constant">PATH</span></span><span class="token operator">=</span><span class="token variable">$PYTHON_HOME</span>/bin:<span class="token environment constant">$PATH</span>
</code></pre></div><p>保存退出<code>（:wq）</code>，执行<code>source ~/.bash_profile</code>命令使配置生效</p><h3 id="使用yum命令报错" tabindex="-1"><a class="header-anchor" href="#使用yum命令报错" aria-hidden="true">#</a> 使用yum命令报错</h3><ul><li><code>File &quot;/usr/bin/yum&quot;, line 30 except KeyboardInterrupt, e: ^ SyntaxError: invalid syntax</code></li></ul><h4 id="问题出现原因" tabindex="-1"><a class="header-anchor" href="#问题出现原因" aria-hidden="true">#</a> 问题出现原因：</h4><p>yum包管理是使用python2.x写的， 将python2.x升级到python3.x以后， 由于python版本语法兼容性导致问题出现</p><p>解决办法： 修改yum配置文件，将python版本指向以前的旧版本</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># vi /usr/bin/yum</span>
<span class="token comment">#!/usr/bin/python2.7</span>
修改urlgrabber-ext-down文件，更改python版本

<span class="token comment"># vi /usr/libexec/urlgrabber-ext-down </span>
<span class="token comment">#!/usr/bin/python2.7</span>
</code></pre></div><h3 id="离线下载python库whl安装文件" tabindex="-1"><a class="header-anchor" href="#离线下载python库whl安装文件" aria-hidden="true">#</a> 离线下载python库whl安装文件</h3>`,16),m={href:"https://pypi.tuna.tsinghua.edu.cn/simple/",target:"_blank",rel:"noopener noreferrer"},k=n("ul",null,[n("li",null,[a("大部分python库都可以在清华的镜像中下载，链接是："),n("code",null,"https://pypi.tuna.tsinghua.edu.cn/simple/"),a(" 一般在链接后面加上库名称就可以找到该库的各种版本 国内镜像进行离线下载python相关包：")])],-1),b=t(`<h4 id="主要步骤" tabindex="-1"><a class="header-anchor" href="#主要步骤" aria-hidden="true">#</a> 主要步骤：</h4><ul><li>我们现要下载example包，那么我们打开链接 <code>https://pypi.tuna.tsinghua.edu.cn/simple/examle</code>(注：当然我们肯定是打不开这个链接的，因为不存在example包)。 <ul><li>举个例子来说，如果我们要下载numpy包，那么就直接打开链接:**https://pypi.tuna.tsinghua.edu.cn/simple/numpy/**然后选择自己想安装的numpy包版本即可。</li><li>其他的python包下载教程上同。</li></ul></li></ul><h5 id="然后我们直接pip-install-whl即可。其中-whl就是我们安装的离线包。" tabindex="-1"><a class="header-anchor" href="#然后我们直接pip-install-whl即可。其中-whl就是我们安装的离线包。" aria-hidden="true">#</a> 然后我们直接<code>pip install *.whl</code>即可。其中<code>*.whl</code>就是我们安装的离线包。</h5><h4 id="如果在conda虚拟环境中使用-python创建的虚拟环境会有冲突-因此可以修改pip配置文件-禁用告警" tabindex="-1"><a class="header-anchor" href="#如果在conda虚拟环境中使用-python创建的虚拟环境会有冲突-因此可以修改pip配置文件-禁用告警" aria-hidden="true">#</a> 如果在conda虚拟环境中使用，python创建的虚拟环境会有冲突，因此可以修改pip配置文件，禁用告警</h4><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token function">vim</span> /path/to/your/environment/pip.conf
 如果不知道.conf位置，可以先换个源

pip config <span class="token builtin class-name">set</span> global.index-url https://pypi.tuna.tsinghua.edu.cn/simple
然后就会显示写入的.conf文件路径

在配置文件中添加以下内容： 

<span class="token punctuation">[</span>global<span class="token punctuation">]</span>
allow-root <span class="token operator">=</span> <span class="token boolean">true</span>
</code></pre></div><ul><li>保存退出</li></ul>`,6);function y(f,v){const s=p("ExternalLinkIcon");return l(),c("div",null,[n("h3",r,[h,a(" mirrors"),n("a",d,[a("镜像库"),e(s)])]),u,n("ul",null,[n("li",null,[n("a",m,[a("下载whl文件"),e(s)]),k])]),b])}const g=o(i,[["render",y],["__file","install.html.vue"]]);export{g as default};
