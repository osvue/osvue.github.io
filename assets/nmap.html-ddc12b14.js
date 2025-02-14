import{_ as e,p as a,q as n,a1 as t}from"./framework-d81ad7e5.js";const s={},c=t(`<h2 id="nmap" tabindex="-1"><a class="header-anchor" href="#nmap" aria-hidden="true">#</a> nmap</h2><ul><li>扫描所有端口 <ul><li><code>-p 1-65535</code></li><li><code>-p 指定端口，如“1-65535、1433、135、22、80”等</code></li></ul></li></ul><h3 id="第一种-intense-scan" tabindex="-1"><a class="header-anchor" href="#第一种-intense-scan" aria-hidden="true">#</a> 第一种：Intense scan</h3><div class="language-text" data-ext="text"><pre class="language-text"><code>
(nmap -T4 -A -v)
一般来说，Intense scan可以满足一般扫描
-T4 加快执行速度
-A 操作系统及版本探测
-v 显示详细的输出
</code></pre></div><h3 id="第二种-intense-scan-plus-udp" tabindex="-1"><a class="header-anchor" href="#第二种-intense-scan-plus-udp" aria-hidden="true">#</a> 第二种：Intense scan plus UDP</h3><div class="language-text" data-ext="text"><pre class="language-text"><code>(nmap -sS -sU -T4 -A -v)
即UDP扫描
-sS TCP SYN 扫描
-sU UDP 扫描
</code></pre></div><h3 id="第三种-intense-scan-all-tcp-ports" tabindex="-1"><a class="header-anchor" href="#第三种-intense-scan-all-tcp-ports" aria-hidden="true">#</a> 第三种：Intense scan,all TCP ports</h3><div class="language-text" data-ext="text"><pre class="language-text"><code>(nmap -p 1-65536 -T4 -A -v)
扫描所有TCP端口，范围在1-65535，试图扫描所有端口的开放情况，速度比较慢。
-p 指定端口扫描范围
</code></pre></div><h3 id="第四种-intense-scan-no-ping" tabindex="-1"><a class="header-anchor" href="#第四种-intense-scan-no-ping" aria-hidden="true">#</a> 第四种：Intense scan,no ping</h3><div class="language-text" data-ext="text"><pre class="language-text"><code>(nmap -T4 -A -v -Pn)
非ping扫描
-Pn 非ping扫描
</code></pre></div><h3 id="第五种-ping-scan" tabindex="-1"><a class="header-anchor" href="#第五种-ping-scan" aria-hidden="true">#</a> 第五种：Ping scan</h3><div class="language-text" data-ext="text"><pre class="language-text"><code>(nmap -sn)
Ping 扫描
优点：速度快。
缺点：容易被防火墙屏蔽，导致无扫描结果
-sn ping扫描
</code></pre></div><h3 id="第六种-quick-scan" tabindex="-1"><a class="header-anchor" href="#第六种-quick-scan" aria-hidden="true">#</a> 第六种：Quick scan</h3><div class="language-text" data-ext="text"><pre class="language-text"><code>(nmap -T4 -F)
快速的扫描
-F 快速模式。
</code></pre></div><h3 id="第七种-quick-scan-plus" tabindex="-1"><a class="header-anchor" href="#第七种-quick-scan-plus" aria-hidden="true">#</a> 第七种：Quick scan plus</h3><div class="language-text" data-ext="text"><pre class="language-text"><code>(nmap -sV -T4 -O -F --version-light)
快速扫描加强模式
-sV 探测端口及版本服务信息。
-O 开启OS检测
–version-light 设定侦测等级为2。
</code></pre></div><h3 id="第八种-quick-traceroute" tabindex="-1"><a class="header-anchor" href="#第八种-quick-traceroute" aria-hidden="true">#</a> 第八种：Quick traceroute</h3><div class="language-text" data-ext="text"><pre class="language-text"><code>(nmap -sn --traceroute)
路由跟踪
-sn Ping扫描，关闭端口扫描
-traceroute 显示本机到目标的路由跃点。
</code></pre></div><h3 id="第九种-regular-scan" tabindex="-1"><a class="header-anchor" href="#第九种-regular-scan" aria-hidden="true">#</a> 第九种：Regular scan</h3><div class="language-text" data-ext="text"><pre class="language-text"><code>规则扫描
</code></pre></div><h3 id="第十种-slow-comprehensive-scan" tabindex="-1"><a class="header-anchor" href="#第十种-slow-comprehensive-scan" aria-hidden="true">#</a> 第十种：Slow comprehensive scan</h3><div class="language-text" data-ext="text"><pre class="language-text"><code>(nmap -sS -sU -T4 -A -v -PE -PP -PS80,443,-PA3389,PU40125 -PY -g 53 --script all)
慢速全面扫描。 
</code></pre></div>`,22),d=[c];function i(r,l){return a(),n("div",null,d)}const o=e(s,[["render",i],["__file","nmap.html.vue"]]);export{o as default};
