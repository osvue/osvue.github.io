import{_ as e,p as a,q as r,a1 as t}from"./framework-d81ad7e5.js";const o="/assets/ra-cb80e0f6.png",c={},i=t('<blockquote><p>I/O 复用结合线程池，就是 Reactor 模式基本设计思想，如图：</p></blockquote><p><img src="'+o+'" alt="alt"></p><h2 id="reactor-模式中核心组成" tabindex="-1"><a class="header-anchor" href="#reactor-模式中核心组成" aria-hidden="true">#</a> Reactor 模式中核心组成：</h2><h3 id="reactor" tabindex="-1"><a class="header-anchor" href="#reactor" aria-hidden="true">#</a> Reactor</h3><blockquote><p>Reactor 在一个单独的线程中运行，负责监听和分发事件，分发给适当的处理程序来对 IO 事件做出反应。 它就像公司的电话接线员，它接听来自客户的电话并将线路转移到适当的联系人；</p></blockquote><h3 id="handlers" tabindex="-1"><a class="header-anchor" href="#handlers" aria-hidden="true">#</a> Handlers</h3><blockquote><p>处理程序执行 I/O 事件要完成的实际事件，类似于客户想要与之交谈的公司中的实际官员。Reactor 通过调度适当的处理程序来响应 I/O 事件，处理程序执行非阻塞操作。</p></blockquote><ul><li>目前存在的线程模型有：\v传统阻塞 I/O 服务模型 \vReactor 模式</li></ul><ul><li>根据 Reactor 的数量和处理资源池线程的数量不同，有 3 种典型的实现 <ul><li>单 Reactor 单线程；</li><li>单 Reactor 多线程；</li><li>主从 Reactor 多线程</li></ul></li></ul><h4 id="reactor-对应的叫法-1-反应器模式-2-分发者模式-dispatcher-3-通知者模式-notifier" tabindex="-1"><a class="header-anchor" href="#reactor-对应的叫法-1-反应器模式-2-分发者模式-dispatcher-3-通知者模式-notifier" aria-hidden="true">#</a> Reactor 对应的叫法: 1. 反应器模式 2. 分发者模式(Dispatcher) 3. 通知者模式(notifier)</h4><blockquote><p>Netty 线程模式(Netty 主要基于主从 Reactor 多线程模型做了一定的改进，其中主从 Reactor 多线程模型有多个 Reactor)</p></blockquote><ul><li>说明: <ul><li>Reactor 模式，通过一个或多个输入同时传递给服务处理器的模式(基于事件驱动)</li><li>服务器端程序处理传入的多个请求,并将它们同步分派到相应的处理线程， 因此Reactor模式也叫 Dispatcher模式</li><li>Reactor 模式使用IO复用监听事件, 收到事件后，分发给某个线程(进程), 这点就是网络服务器高并发处理关键</li></ul></li></ul>',12),l=[i];function h(s,n){return a(),r("div",null,l)}const u=e(c,[["render",h],["__file","reactor_a.html.vue"]]);export{u as default};