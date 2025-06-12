import{_ as r,r as l,o as i,c,b as a,d as n,e as t,a as o}from"./app-215c512d.js";const d={},p={href:"https://www.goaccess.cc/?mod=man",target:"_blank",rel:"noopener noreferrer"},g={href:"https://developer.aliyun.com/mirror/",target:"_blank",rel:"noopener noreferrer"},h={href:"https://goaccess.io/download",target:"_blank",rel:"noopener noreferrer"},u={href:"https://goaccess.io/",target:"_blank",rel:"noopener noreferrer"};function x(m,e){const s=l("ExternalLinkIcon");return i(),c("div",null,[e[10]||(e[10]=a("h2",{id:"介绍",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#介绍","aria-hidden":"true"},"#"),n(" 介绍")],-1)),a("p",null,[e[1]||(e[1]=n("虽然 Nginx 已经提供 access 日志来查阅，但是不得不说很难看清，常规的正则过滤又显得较为麻烦。于是就找到了这么一款实时网络日志分析器 ")),a("a",p,[e[0]||(e[0]=n("GoAccess")),t(s)]),e[2]||(e[2]=n("。"))]),e[11]||(e[11]=o(`<h2 id="一、安装使用" tabindex="-1"><a class="header-anchor" href="#一、安装使用" aria-hidden="true">#</a> 一、安装使用</h2><h4 id="_1-安装-goaccess" tabindex="-1"><a class="header-anchor" href="#_1-安装-goaccess" aria-hidden="true">#</a> 1. 安装 GoAccess</h4><p>本例使用源码安装，<code>./configure</code> 如果出错请看<code>问题说明</code>部分：</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code>$ <span class="token function">wget</span> https://tar.goaccess.io/goaccess-1.3.tar.gz
$ <span class="token function">tar</span> <span class="token parameter variable">-xzf</span> goaccess-1.3.tar.gz
$ <span class="token builtin class-name">cd</span> goaccess-1.3
$ ./configure --enable-utf8 --enable-geoip<span class="token operator">=</span>legacy
$ <span class="token function">make</span>
<span class="token comment"># make install</span>
</code></pre></div><ul><li>如果有镜像，可通过yum 源直接安装</li></ul><div class="language-bash" data-ext="sh"><pre class="language-bash"><code>yum <span class="token function">install</span> <span class="token parameter variable">-y</span> geoip-devel
yum <span class="token function">install</span> <span class="token parameter variable">-y</span> ncurses-devel
</code></pre></div>`,6)),a("ul",null,[a("li",null,[e[4]||(e[4]=n("缺少的包可以去")),a("a",g,[e[3]||(e[3]=n("aliyun")),t(s)]),e[5]||(e[5]=n("下载"))])]),e[12]||(e[12]=o(`<h4 id="_2-修改-nginx-配置" tabindex="-1"><a class="header-anchor" href="#_2-修改-nginx-配置" aria-hidden="true">#</a> 2. 修改 Nginx 配置</h4><p>在 <code>nginx.conf</code> 文件中新增以下配置：</p><div class="language-text" data-ext="text"><pre class="language-text"><code>location /report.html {
        alias /usr/local/nginx/html/report.html;
}
</code></pre></div><p>并重新加载配置文件：</p><div class="language-text" data-ext="text"><pre class="language-text"><code>$ /usr/local/nginx/sbin/nginx -s reload
</code></pre></div><h4 id="_3-启动-goaccess" tabindex="-1"><a class="header-anchor" href="#_3-启动-goaccess" aria-hidden="true">#</a> 3. 启动 GoAccess</h4><p>在 nginx 安装目录下，执行 goaccess 命令：</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 生成html</span>
$ <span class="token builtin class-name">cd</span> /usr/local/nginx
$ goaccess ./logs/access.log <span class="token parameter variable">-o</span> ./html/report.html --log-format<span class="token operator">=</span>COMBINED
WebSocket server ready to accept new client connections
</code></pre></div><h4 id="_4-访问服务" tabindex="-1"><a class="header-anchor" href="#_4-访问服务" aria-hidden="true">#</a> 4. 访问服务</h4><p>在浏览器中打开<code>http://127.0.0.1/report.html</code></p><h2 id="二、问题说明" tabindex="-1"><a class="header-anchor" href="#二、问题说明" aria-hidden="true">#</a> 二、问题说明</h2><p>本处整理了安装 GoAccess 执行 configure 命令报错和解决办法。</p><h4 id="_1-如出现以下报错则需安装-geoip" tabindex="-1"><a class="header-anchor" href="#_1-如出现以下报错则需安装-geoip" aria-hidden="true">#</a> 1. 如出现以下报错则需安装 GeoIP：</h4><div class="language-text" data-ext="text"><pre class="language-text"><code>configure: error: 
    *** Missing development files for the GeoIP library
</code></pre></div><h4 id="_2-如出现以下报错则需安装-ncurses" tabindex="-1"><a class="header-anchor" href="#_2-如出现以下报错则需安装-ncurses" aria-hidden="true">#</a> 2. 如出现以下报错则需安装 NCurses：</h4><div class="language-text" data-ext="text"><pre class="language-text"><code>checking for mvaddwstr in -lncursesw... no
configure: error: *** Missing development libraries for ncursesw
</code></pre></div><h4 id="_3-解决办法" tabindex="-1"><a class="header-anchor" href="#_3-解决办法" aria-hidden="true">#</a> 3. 解决办法</h4>`,17)),a("p",null,[e[7]||(e[7]=n("官方已经给出了各个平台对应依赖包的名字（")),a("a",h,[e[6]||(e[6]=n("传送至官网")),t(s)]),e[8]||(e[8]=n("），只需使用对应平台的包管理工具安装即可 如以上两个报错在 centos 下只需安装 geoip-devel 和 ncurses-devel 即可："))]),e[13]||(e[13]=o(`<div class="language-bash" data-ext="sh"><pre class="language-bash"><code>$ yum <span class="token function">install</span> geoip-devel ncurses-devel
</code></pre></div><h4 id="_4-相关资料" tabindex="-1"><a class="header-anchor" href="#_4-相关资料" aria-hidden="true">#</a> 4. 相关资料</h4>`,2)),a("p",null,[a("a",u,[e[9]||(e[9]=n("GoAccess 官网：https://goaccess.io")),t(s)])]),e[14]||(e[14]=o(`<h3 id="配置选项" tabindex="-1"><a class="header-anchor" href="#配置选项" aria-hidden="true">#</a> 配置选项</h3><div class="language-text" data-ext="text"><pre class="language-text"><code>GoAccess 拥有多个配置选项。获取完整的最新配置选项列表，请运行：./configure --help

--enable-debug
使用调试标志编译且关闭编译器优化。
--enable-utf8
宽字符支持。依赖 Ncursesw 模块。
--enable-geoip=&lt;legacy|mmdb&gt;
地理位置支持。依赖 MaxMind GeoIP 模块。legacy 将使用原始 GeoIP 数据库。mmdb 将使用增强版 GeoIP2 数据库。
--enable-tcb=&lt;memhash|btree&gt;
Tokyo Cabinet 存储支持。 memhash 将使用 Tokyo Cabinet 的内存哈希数据库。 btree 将使用 Tokyo Cabinet 的磁盘 B+Tree 数据库。
--disable-zlib
禁止在 B+Tree 数据库上使用 zlib 压缩。
--disable-bzip
禁止在 B+Tree 数据库上使用 bzip2 压缩。
--with-getline
使用动态扩展行缓冲区用来解析完整的行请求，否则将使用固定大小(4096)的缓冲区。
--with-openssl
使 GoAccess 与其 WebSocket 服务器之间的通信能够支持 OpenSSL。
</code></pre></div><h2 id="使用" tabindex="-1"><a class="header-anchor" href="#使用" aria-hidden="true">#</a> 使用</h2><h3 id="_1-最简单的静态使用" tabindex="-1"><a class="header-anchor" href="#_1-最简单的静态使用" aria-hidden="true">#</a> 1. 最简单的静态使用</h3><div class="custom-container danger"><p class="custom-container-title">DANGER</p><p>goaccess -f /var/log/nginx/access.log -o report.html --log-format=COMBINED</p></div><ul><li><code>-f</code>：指定日志文件</li><li><code>-o</code>：指定报表路径</li><li><code>--log-format</code>：日志格式，不加则会报错</li></ul><p>这样就会生成一份 html 文件，可以利用 scp（推荐）、sz、rsync 下载该文件到本地后查看。</p><h3 id="_2-配合-nginx-实时更新" tabindex="-1"><a class="header-anchor" href="#_2-配合-nginx-实时更新" aria-hidden="true">#</a> 2. 配合 Nginx 实时更新</h3><ul><li>发文日：<code>2022/06/17</code>暂未实现实时更新</li><li>和普通的生成就是差别在增加了命令，配置文件未变</li></ul><div class="language-bash" data-ext="sh"><pre class="language-bash"><code>  
location /report.html <span class="token punctuation">{</span>
   <span class="token builtin class-name">alias</span> /usr/local/nginx/html/report.html<span class="token punctuation">;</span>
     
    <span class="token comment"># 代理，限制访问</span>
    allow xxx.xxx.xxx.xxx<span class="token punctuation">;</span>
    deny all<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment"># 接着前往域名提供商添加 DNS 解析</span>
</code></pre></div><div class="custom-container danger"><p class="custom-container-title">DANGER</p><p>goaccess -f /usr/local/nginx/logs/access.log -o /usr/local/nginx/html/report.html --log-format=COMBINED --real-time-html</p></div><p>启动服务后会提示开启了一个 websocket</p><p>接着就可以在浏览器访问对应的地址了。</p>`,13))])}const f=r(d,[["render",x],["__file","view_log.html.vue"]]);export{f as default};
