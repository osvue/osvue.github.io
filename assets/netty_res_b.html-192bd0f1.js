import{_ as e,p as i,q as t,a1 as o}from"./framework-d81ad7e5.js";const l={},n=o('<h2 id="netty启动过程梳理" tabindex="-1"><a class="header-anchor" href="#netty启动过程梳理" aria-hidden="true">#</a> Netty启动过程梳理</h2><ol><li><p>创建2个 EventLoopGroup 线程池数组。数组默认大小CPU*2，方便chooser选择线程池时提高性能</p></li><li><p>BootStrap 将 boss 设置为 group属性，将 worker 设置为 childer 属性</p></li><li><p>通过 bind 方法启动，内部重要方法为 initAndRegister 和 dobind 方法</p></li><li><p>initAndRegister 方法会反射创建 NioServerSocketChannel 及其相关的 NIO 的对象， pipeline ， unsafe，同时也为 pipeline 初始了 head 节点和 tail 节点。</p></li><li><p>在register0 方法成功以后调用在 dobind 方法中调用 doBind0 方法，该方法会 调用 NioServerSocketChannel 的 doBind 方法对 JDK 的 channel 和端口进行绑定，完成 Netty 服务器的所有启动，并开始监听连接事件</p></li></ol><h3 id="接受请求过程" tabindex="-1"><a class="header-anchor" href="#接受请求过程" aria-hidden="true">#</a> 接受请求过程</h3><p>说明： 从之前服务器启动的源码中，我们得知，服务器最终注册了一个 Accept 事件等待客户端的连接。我们也知道，NioServerSocketChannel 将自己注册到了 boss 单例线程池（reactor 线程）上，也就是 EventLoop</p><ul><li><p>EventLoop的逻辑</p><ul><li>EventLoop 的作用是一个死循环，而这个循环中做3件事情： <ol><li>有条件的等待 Nio 事件。</li><li>处理 Nio 事件。</li><li>处理消息队列中的任务。</li><li>进入到 NioEventLoop 源码中后，在private void processSelectedKey(SelectionKey k, AbstractNioChannel ch)</li></ol></li></ul></li></ul>',5),r=[n];function a(c,p){return i(),t("div",null,r)}const s=e(l,[["render",a],["__file","netty_res_b.html.vue"]]);export{s as default};
