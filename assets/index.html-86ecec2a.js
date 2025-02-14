import{_ as i,M as n,p as r,q as t,R as e,t as l,N as o,a1 as s}from"./framework-d81ad7e5.js";const d={},c=s('<h1 id="win10" tabindex="-1"><a class="header-anchor" href="#win10" aria-hidden="true">#</a> win10</h1><h2 id="win10下查看进程-杀死进程" tabindex="-1"><a class="header-anchor" href="#win10下查看进程-杀死进程" aria-hidden="true">#</a> win10下查看进程，杀死进程</h2><ul><li><p><strong>查看指定端口的连接信息</strong>使用 netstat -ano | findstr “8080”</p><ul><li>在“|”前面的命令执行结果作为后一个命令执行的输入。</li></ul></li><li><p><strong>查看进程列表</strong>使用 tasklist | findstr “java”</p><ul><li><p>查找进程名包含“java”的所有进程通过上面的方式可以查看占用端口号的进程命令taskkill 使用该工具按照进程 ID (PID) 或映像名称终止任务。</p></li><li><p>杀掉进程使用taskkill -PID 进程号 -F</p></li></ul><ul><li>/PID processid 指定要终止的进程的 PID。</li><li>/F 指定强制终止进程。</li></ul></li></ul><h2 id="windows-分屏展示" tabindex="-1"><a class="header-anchor" href="#windows-分屏展示" aria-hidden="true">#</a> Windows 分屏展示</h2><ul><li>鼠标左键或右键直接拖到屏幕的边缘可以将其中一个窗口拖到屏幕左侧或者右侧，然后再点击另一个窗口。</li></ul><h3 id="logviewer超大文本浏览工具" tabindex="-1"><a class="header-anchor" href="#logviewer超大文本浏览工具" aria-hidden="true">#</a> LogViewer超大文本浏览工具</h3>',6),h={href:"https://www.uvviewsoft.com/logviewer/download.htm",target:"_blank",rel:"noopener noreferrer"};function u(w,p){const a=n("ExternalLinkIcon");return r(),t("div",null,[c,e("p",null,[e("a",h,[l("超级大文件打开"),o(a)])])])}const f=i(d,[["render",u],["__file","index.html.vue"]]);export{f as default};
