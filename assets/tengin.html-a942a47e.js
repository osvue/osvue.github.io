import{_ as e,p as a,q as n,a1 as t}from"./framework-d81ad7e5.js";const i="/assets/20180509165645445-45f031b0.png",s={},r=t(`<h2 id="开机启动" tabindex="-1"><a class="header-anchor" href="#开机启动" aria-hidden="true">#</a> 开机启动</h2><div class="language-text" data-ext="text"><pre class="language-text"><code>chkconfig --list
chkconfig --add nginx
chkconfig nginx on
</code></pre></div><h2 id="时间问题" tabindex="-1"><a class="header-anchor" href="#时间问题" aria-hidden="true">#</a> 时间问题</h2><div class="language-text" data-ext="text"><pre class="language-text"><code>service ntpd status

</code></pre></div><h2 id="启动-停止" tabindex="-1"><a class="header-anchor" href="#启动-停止" aria-hidden="true">#</a> 启动/停止</h2><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 启动/停止 Tengine：</span>
<span class="token punctuation">[</span>root@webserver1 tengine<span class="token punctuation">]</span><span class="token comment"># ./sbin/nginx -c ./conf/nginx.conf -p /opt/tengine/      #可执行文件还是nginx的文件名</span>
<span class="token punctuation">[</span>root@webserver1 tengine<span class="token punctuation">]</span><span class="token comment"># ./sbin/nginx -s stop</span>
<span class="token punctuation">[</span>root@webserver1 tengine<span class="token punctuation">]</span><span class="token comment"># ./sbin/nginx -s reload   #这个很常用哦，平滑更新配置。</span>
</code></pre></div><div class="language-conf" data-ext="conf"><pre class="language-conf"><code>
### yum 源映射

server{
    listen 80;
    server_name www.bd.com;
    location /{
        root /mnt;
        autoindex on ;  #开启自动索引    
    }

}

</code></pre></div><h2 id="虚拟目录" tabindex="-1"><a class="header-anchor" href="#虚拟目录" aria-hidden="true">#</a> 虚拟目录</h2><div class="language-conf" data-ext="conf"><pre class="language-conf"><code>
location /www {
    alias  /var/data/www1;
    index  index.html index.htm a.html;
}
</code></pre></div><h2 id="自动索引" tabindex="-1"><a class="header-anchor" href="#自动索引" aria-hidden="true">#</a> 自动索引</h2><div class="language-conf" data-ext="conf"><pre class="language-conf"><code>       location /art {
            alias  /var/data/www1/;
              autoindex on;
       
        }
</code></pre></div><h2 id="动静分离" tabindex="-1"><a class="header-anchor" href="#动静分离" aria-hidden="true">#</a> 动静分离</h2><div class="language-conf" data-ext="conf"><pre class="language-conf"><code>      location / {
		proxy_pass http://192.168.150.11:803;
    
        }

     
     
     location ~ .*\\.(gif|jpg|jpeg|png|bmp|swf|html|htm|css|js)$ {
            root  /var/data/www1/;
	       
        }

</code></pre></div><h2 id="抓包工具" tabindex="-1"><a class="header-anchor" href="#抓包工具" aria-hidden="true">#</a> 抓包工具</h2><h3 id="青花瓷" tabindex="-1"><a class="header-anchor" href="#青花瓷" aria-hidden="true">#</a> 青花瓷</h3><p>https://www.charlesproxy.com/latest-release/download.do</p><h2 id="对称加密与非对称加密" tabindex="-1"><a class="header-anchor" href="#对称加密与非对称加密" aria-hidden="true">#</a> 对称加密与非对称加密</h2><p>非对称加密算法需要两个密钥：公开密钥（publickey）和私有密钥（privatekey），公开密钥与私有密钥是一对，如果用公开密钥对数据进行加密，只有用对应的私有密钥才能解密；如果用私有密钥对数据进行加密，那么只有用对应的公开密钥才能解密。因为加密和解密使用的是两个不同的密钥，所以这种算法叫作非对称加密算法。</p><h2 id="ca-certificate-authority" tabindex="-1"><a class="header-anchor" href="#ca-certificate-authority" aria-hidden="true">#</a> CA（Certificate Authority）</h2><p>CA 是负责签发证书、认证证书、管理已颁发证书的机关。它要制定政策和具体步骤来验证、识别用户身份，并对用户证书进行签名，以确保证书持有者的身份和公钥的拥有权。</p><p>常见的ca厂商</p><ul><li><p>Symantec</p></li><li><p>Comodo</p></li><li><p>Godaddy</p></li><li><p>GlobalSign</p></li><li><p>Digicert</p></li><li><p>VeriSign</p></li><li><p>GeoTrust</p></li><li><p>Thawte</p></li><li><p>Network Solutions</p></li></ul><p>CA 供应商之间的区别主要有：机构品牌、证书加密方式、保险额度、服务与质量、浏览器支持率等</p><h2 id="证书种类" tabindex="-1"><a class="header-anchor" href="#证书种类" aria-hidden="true">#</a> 证书种类</h2><ul><li><p>DV（Domain Validation）证书只进行域名的验证，一般验证方式是提交申请之后CA会往你在whois信息里面注册的邮箱发送邮件，只需要按照邮件里面的内容进行验证即可。</p></li><li><p>OV（Organization Validation）证书在DV证书验证的基础上还需要进行公司的验证，一般他们会通过购买邓白氏等这类信息库来查询域名所属的公司以及这个公司的电话信息，通过拨打这个公司的电话来确认公司是否授权申请OV证书。</p></li><li><p>EV证书一般是在OV的基础上还需要公司的金融机构的开户许可证，不过不同CA的做法不一定一样，例如申请人是地方政府机构的时候是没有金融机构的开户证明的，这时候就会需要通过别的方式去鉴别申请人的实体信息。</p></li></ul><p><img src="https://oss.aliyuncs.com/yqfiles/83cf43c8886ff637c1eb77a319bb0fc5a327e3e5.jpeg" alt="83cf43c8886ff637c1eb77a319bb0fc5a327e3e5"></p><h2 id="多网站公用同一证书" tabindex="-1"><a class="header-anchor" href="#多网站公用同一证书" aria-hidden="true">#</a> 多网站公用同一证书</h2><h2 id="openssl-自签名" tabindex="-1"><a class="header-anchor" href="#openssl-自签名" aria-hidden="true">#</a> OPenSSL 自签名</h2><p>certmgr.msc</p><ul><li>key 私钥 = 明文 自己生成的</li><li>csr 公钥 = 由私钥生成</li><li>crt 证书 = 公钥 + 签名</li></ul><p>下载</p><p>http://slproweb.com/products/Win32OpenSSL.html</p><h3 id="生成私钥" tabindex="-1"><a class="header-anchor" href="#生成私钥" aria-hidden="true">#</a> 生成私钥</h3><p>genrsa</p><p>制台输入 genrsa，会默认生成一个 2048 位的私钥</p><div class="language-text" data-ext="text"><pre class="language-text"><code>openssl genrsa -des3 -out server.key 1024
</code></pre></div><h3 id="由私钥生成公钥" tabindex="-1"><a class="header-anchor" href="#由私钥生成公钥" aria-hidden="true">#</a> 由私钥生成公钥</h3><div class="language-text" data-ext="text"><pre class="language-text"><code>openssl req -new -key c:/dev/my.key -out c:/dev/my.csr
openssl req -new -key server.key -out server.csr
</code></pre></div><p>查看证书</p><p>Common Name，这里输入的域名即为我们要使用 HTTPS 访问的域名</p><div class="language-text" data-ext="text"><pre class="language-text"><code>req -text -in c:/dev/my.csr -noout
</code></pre></div><p>生成解密的key</p><div class="language-text" data-ext="text"><pre class="language-text"><code>openssl rsa -in server.key -out server.key.unsecure
</code></pre></div><h3 id="签名" tabindex="-1"><a class="header-anchor" href="#签名" aria-hidden="true">#</a> 签名</h3><p>工具</p><p>https://sourceforge.net/projects/xca/</p><div class="language-text" data-ext="text"><pre class="language-text"><code> x509 -req -days 365 -in c:/dev/my.csr -signkey c:/dev/my.key -out c:/dev/sign.crt
 openssl x509 -req -days 365 -in server.csr -signkey server.key.unsecure -out server.crt

</code></pre></div><p>查看证书</p><div class="language-text" data-ext="text"><pre class="language-text"><code>x509 -text -in c:\\openSSLDemo\\fd.crt -noout
</code></pre></div><ul><li>Country Name (2 letter code) [XX]:CN #请求签署人的信息</li><li>State or Province Name (full name) []: #请求签署人的省份名字</li><li>Locality Name (eg, city) [Default City]:# 请求签署人的城市名字</li><li>Organization Name (eg, company) [Default Company Ltd]:#请求签署人的公司名字</li><li>Organizational Unit Name (eg, section) []:#请求签署人的部门名字</li><li>Common Name (eg, your name or your server&#39;s hostname) []:#这里一般填写请求人的的服务器域名，</li></ul><p>问题</p><div class="language-text" data-ext="text"><pre class="language-text"><code>4928:error:2807106B:UI routines:UI_process:processing error:crypto\\ui\\ui_lib.c:543:while reading strings
4928:error:0906906F:PEM routines:PEM_ASN1_write_bio:read key:crypto\\pem\\pem_lib.c:357:
</code></pre></div><h2 id="ssl-tls协议四次握手" tabindex="-1"><a class="header-anchor" href="#ssl-tls协议四次握手" aria-hidden="true">#</a> SSL/TLS协议四次握手</h2><p>SSL/TSL协议基本过程：</p><ol><li>客户端向服务器端索要并验证公钥。</li><li>双方协商生成&quot;对话密钥&quot;。</li><li>双方采用&quot;对话密钥&quot;进行加密通信。</li></ol><p>SSL/TSL通过四次握手，主要交换三个信息：</p><ol><li>数字证书：该证书包含了公钥等信息，一般是由服务器发给客户端，接收方通过验证这个证书是不是由信赖的CA签发，或者与本地的证书相对比，来判断证书是否可信；假如需要双向验证，则服务器和客户端都需要发送数字证书给对方验证；</li><li>三个随机数：这三个随机数构成了后续通信过程中用来对数据进行对称加密解密的“对话密钥”。首先客户端先发第一个随机数N1，然后服务器回了第二个随机数N2（这个过程同时把之前提到的证书发给客户端），这两个随机数都是明文的；而第三个随机数N3（这个随机数被称为Premaster secret），客户端用数字证书的公钥进行非对称加密，发给服务器；而服务器用只有自己知道的私钥来解密，获取第三个随机数。这样，服务端和客户端都有了三个随机数N1+N2+N3，然后两端就使用这三个随机数来生成“对话密钥”，在此之后的通信都是使用这个“对话密钥”来进行对称加密解密。因为这个过程中，服务端的私钥只用来解密第三个随机数，从来没有在网络中传输过，这样的话，只要私钥没有被泄露，那么数据就是安全的。</li><li>**加密通信协议：**就是双方商量使用哪一种加密方式，假如两者支持的加密方式不匹配，则无法进行通信；</li></ol><p><img src="`+i+`" alt="img"></p><h3 id="客户端发出请求-clienthello" tabindex="-1"><a class="header-anchor" href="#客户端发出请求-clienthello" aria-hidden="true">#</a> 客户端发出请求（ClientHello）</h3><p>首先，客户端（通常是浏览器）先向服务器发出加密通信的请求，这被叫做ClientHello请求。</p><p>在这一步，客户端主要向服务器提供以下信息。</p><div class="language-html" data-ext="html"><pre class="language-html"><code>（1） 支持的协议版本，比如TLS 1.0版。
（2） 一个客户端生成的随机数，稍后用于生成&quot;对话密钥&quot;。
（3） 支持的加密方法，比如RSA公钥加密。
（4） 支持的压缩方法。
</code></pre></div><h3 id="服务器回应-severhello" tabindex="-1"><a class="header-anchor" href="#服务器回应-severhello" aria-hidden="true">#</a> 服务器回应（SeverHello）</h3><div class="language-text" data-ext="text"><pre class="language-text"><code>（1） 确认使用的加密通信协议版本，比如TLS 1.0版本。如果浏览器与服务器支持的版本不一致，服务器关闭加密通信。
（2） 确认使用的加密方法，比如RSA公钥加密，返回加密公钥
（3） 服务器证书
</code></pre></div><h3 id="客户端回应" tabindex="-1"><a class="header-anchor" href="#客户端回应" aria-hidden="true">#</a> 客户端回应</h3><div class="language-text" data-ext="text"><pre class="language-text"><code>
a) 验证证书的合法性（颁发证书的机构是否合法，证书中包含的网站地址是否与正在访问的地址一致等），如果证书受信任，则浏览器栏里面会显示一个小锁头，否则会给出证书不受信的提示。
b) 如果证书受信任，或者是用户接受了不受信的证书，浏览器会生成一串随机数的密码，并用证书中提供的公钥加密。
c) 使用约定好的HASH计算握手消息，并使用生成的随机数对消息进行加密，最后将之前生成的所有信息发送给网站。
</code></pre></div><h3 id="服务器" tabindex="-1"><a class="header-anchor" href="#服务器" aria-hidden="true">#</a> 服务器</h3><div class="language-text" data-ext="text"><pre class="language-text"><code>a) 使用自己的私钥将信息解密取出密码，使用密码解密浏览器发来的握手消息，并验证HASH是否与浏览器发来的一致。
b) 使用密码加密一段握手消息，发送给浏览器。
</code></pre></div>`,68),l=[r];function c(d,o){return a(),n("div",null,l)}const h=e(s,[["render",c],["__file","tengin.html.vue"]]);export{h as default};
