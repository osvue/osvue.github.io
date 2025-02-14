import{_ as n,p as s,q as a,a1 as t}from"./framework-d81ad7e5.js";const p="/assets/netty-ef501c25.png",o="/assets/netty_event-154b9bc5.png",c={},e=t('<h4 id="netty-主要基于主从-reactors-多线程模型" tabindex="-1"><a class="header-anchor" href="#netty-主要基于主从-reactors-多线程模型" aria-hidden="true">#</a> Netty 主要基于主从 Reactors 多线程模型</h4><ol><li>BossGroup 线程维护Selector , 只关注Accecpt</li><li>当接收到Accept事件，获取到对应的SocketChannel, 封装成 NIOScoketChannel并注册到Worker 线程(事件循环), 并进行维护</li><li>当Worker线程监听到selector 中通道发生自己感兴趣的事件后，就进行处理(就由handler)， 注意handler 已经加入到通道</li></ol><p><img src="'+p+'" alt="alt"></p><h4 id="netty-主要基于主从-reactors-多线程模型-如图-做了一定的改进-其中主从-reactor-多线程模型有多个-reactor" tabindex="-1"><a class="header-anchor" href="#netty-主要基于主从-reactors-多线程模型-如图-做了一定的改进-其中主从-reactor-多线程模型有多个-reactor" aria-hidden="true">#</a> Netty 主要基于主从 Reactors 多线程模型（如图）做了一定的改进，其中主从 Reactor 多线程模型有多个 Reactor</h4><ol><li>Netty抽象出两组线程池 BossGroup 专门负责接收客户端的连接, WorkerGroup 专门负责网络的读写</li><li>BossGroup 和 WorkerGroup 类型都是 NioEventLoopGroup</li><li>NioEventLoopGroup 相当于一个事件循环组, 这个组中含有多个事件循环 ，每一个事件循环是 NioEventLoop</li><li>NioEventLoop 表示一个不断循环的执行处理任务的线程， 每个NioEventLoop 都有一个selector , 用于监听绑定在其上的socket的网络通讯</li><li>NioEventLoopGroup 可以有多个线程, 即可以含有多个NioEventLoop</li><li>每个Boss NioEventLoop 循环执行的步骤有3步 <ol><li>轮询accept 事件</li><li>处理accept 事件 , 与client建立连接 , 生成NioScocketChannel , 并将其注册到某个worker NIOEventLoop 上的 selector</li><li>处理任务队列的任务 ， 即 runAllTasks</li></ol></li><li>每个 Worker NIOEventLoop 循环执行的步骤 <ol><li>轮询read, write 事件</li><li>处理i/o事件， 即read , write 事件，在对应NioScocketChannel 处理</li><li>处理任务队列的任务 ， 即 runAllTasks</li></ol></li><li>每个Worker NIOEventLoop 处理业务时，会使用pipeline(管道), pipeline 中包含了 channel , 即通过pipeline 可以获取到对应通道, 管道中维护了很多的 处理器</li></ol><p><img src="'+o+`" alt="alt"></p><h3 id="netty-server" tabindex="-1"><a class="header-anchor" href="#netty-server" aria-hidden="true">#</a> netty_server</h3><div class="language-java" data-ext="java"><pre class="language-java"><code>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">io<span class="token punctuation">.</span>netty<span class="token punctuation">.</span>bootstrap<span class="token punctuation">.</span></span><span class="token class-name">ServerBootstrap</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">io<span class="token punctuation">.</span>netty<span class="token punctuation">.</span>channel<span class="token punctuation">.</span></span><span class="token operator">*</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">io<span class="token punctuation">.</span>netty<span class="token punctuation">.</span>channel<span class="token punctuation">.</span>nio<span class="token punctuation">.</span></span><span class="token class-name">NioEventLoopGroup</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">io<span class="token punctuation">.</span>netty<span class="token punctuation">.</span>channel<span class="token punctuation">.</span>socket<span class="token punctuation">.</span></span><span class="token class-name">SocketChannel</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">io<span class="token punctuation">.</span>netty<span class="token punctuation">.</span>channel<span class="token punctuation">.</span>socket<span class="token punctuation">.</span>nio<span class="token punctuation">.</span></span><span class="token class-name">NioServerSocketChannel</span></span><span class="token punctuation">;</span>

<span class="token doc-comment comment">/***
 * netty
 */</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">NettyServer</span> <span class="token punctuation">{</span>

    <span class="token comment">//    BossGroup Worker Group</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">InterruptedException</span> <span class="token punctuation">{</span>


        <span class="token comment">//创建BossGroup 和 WorkerGroup</span>
        <span class="token comment">//说明</span>
        <span class="token comment">//1. 创建两个线程组 bossGroup 和 workerGroup</span>
        <span class="token comment">//2. bossGroup 只是处理连接请求 , 真正的和客户端业务处理，会交给 workerGroup完成</span>
        <span class="token comment">//3. 两个都是无限循环</span>
        <span class="token comment">//4. bossGroup 和 workerGroup 含有的子线程(NioEventLoop)的个数</span>
        <span class="token comment">//   默认实际 cpu核数 * 2</span>
        <span class="token class-name">EventLoopGroup</span> bossGroup <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">NioEventLoopGroup</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">EventLoopGroup</span> workerGroup <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">NioEventLoopGroup</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//8</span>


        <span class="token keyword">try</span> <span class="token punctuation">{</span>
            <span class="token comment">//创建服务器端的启动对象，配置参数</span>
            <span class="token class-name">ServerBootstrap</span> bootstrap <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ServerBootstrap</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

            <span class="token comment">//使用链式编程来进行设置</span>
            bootstrap<span class="token punctuation">.</span><span class="token function">group</span><span class="token punctuation">(</span>bossGroup<span class="token punctuation">,</span> workerGroup<span class="token punctuation">)</span> <span class="token comment">//设置两个线程组</span>
                    <span class="token punctuation">.</span><span class="token function">channel</span><span class="token punctuation">(</span><span class="token class-name">NioServerSocketChannel</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">)</span> <span class="token comment">//使用NioSocketChannel 作为服务器的通道实现</span>
                    <span class="token punctuation">.</span><span class="token function">option</span><span class="token punctuation">(</span><span class="token class-name">ChannelOption</span><span class="token punctuation">.</span><span class="token constant">SO_BACKLOG</span><span class="token punctuation">,</span> <span class="token number">128</span><span class="token punctuation">)</span> <span class="token comment">// 设置线程队列得到连接个数</span>
                    <span class="token punctuation">.</span><span class="token function">childOption</span><span class="token punctuation">(</span><span class="token class-name">ChannelOption</span><span class="token punctuation">.</span><span class="token constant">SO_KEEPALIVE</span><span class="token punctuation">,</span> <span class="token boolean">true</span><span class="token punctuation">)</span> <span class="token comment">//设置保持活动连接状态</span>
<span class="token comment">//                    .handler(null) // 该 handler对应 bossGroup , childHandler 对应 workerGroup</span>
                    <span class="token punctuation">.</span><span class="token function">childHandler</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">ChannelInitializer</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">SocketChannel</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token comment">//创建一个通道初始化对象(匿名对象)</span>
                        <span class="token comment">//给pipeline 设置处理器</span>
                        <span class="token annotation punctuation">@Override</span>
                        <span class="token keyword">protected</span> <span class="token keyword">void</span> <span class="token function">initChannel</span><span class="token punctuation">(</span><span class="token class-name">SocketChannel</span> ch<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">Exception</span> <span class="token punctuation">{</span>
                            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;客户socketchannel hashcode=&quot;</span> <span class="token operator">+</span> ch<span class="token punctuation">.</span><span class="token function">hashCode</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//可以使用一个集合管理 SocketChannel， 再推送消息时，可以将业务加入到各个channel 对应的 NIOEventLoop 的 taskQueue 或者 scheduleTaskQueue</span>
                            ch<span class="token punctuation">.</span><span class="token function">pipeline</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">addLast</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">NettyServerHandler</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                        <span class="token punctuation">}</span>
                    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 给我们的workerGroup 的 EventLoop 对应的管道设置处理器</span>

            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;.....服务器 is ready...&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

            <span class="token comment">//绑定一个端口并且同步, 生成了一个 ChannelFuture 对象</span>
            <span class="token comment">//启动服务器(并绑定端口)</span>
            <span class="token class-name">ChannelFuture</span> cf <span class="token operator">=</span> bootstrap<span class="token punctuation">.</span><span class="token function">bind</span><span class="token punctuation">(</span><span class="token number">6668</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">sync</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

            <span class="token comment">//给cf 注册监听器，监控我们关心的事件</span>

            <span class="token comment">/*cf.addListener(new ChannelFutureListener() {
                @Override
                public void operationComplete(ChannelFuture future) throws Exception {
                    if (cf.isSuccess()) {
                        System.out.println(&quot;监听端口 6668 成功&quot;);
                    } else {
                        System.out.println(&quot;监听端口 6668 失败&quot;);
                    }
                }
            });
*/</span>

            <span class="token comment">//对关闭通道进行监听</span>
            cf<span class="token punctuation">.</span><span class="token function">channel</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">closeFuture</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">sync</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span> <span class="token keyword">finally</span> <span class="token punctuation">{</span>
            bossGroup<span class="token punctuation">.</span><span class="token function">shutdownGracefully</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            workerGroup<span class="token punctuation">.</span><span class="token function">shutdownGracefully</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

<span class="token punctuation">}</span>



<span class="token comment">// handler 处理器</span>


<span class="token comment">/*
说明
1. 我们自定义一个Handler 需要继续netty 规定好的某个HandlerAdapter(规范)
2. 这时我们自定义一个Handler , 才能称为一个handler
 */</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">NettyServerHandler</span> <span class="token keyword">extends</span> <span class="token class-name">ChannelInboundHandlerAdapter</span> <span class="token punctuation">{</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">channelRead</span><span class="token punctuation">(</span><span class="token class-name">ChannelHandlerContext</span> ctx<span class="token punctuation">,</span> <span class="token class-name">Object</span> msg<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">Exception</span> <span class="token punctuation">{</span>
        <span class="token class-name">Channel</span> channel <span class="token operator">=</span> ctx<span class="token punctuation">.</span><span class="token function">channel</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">//异步任务</span>
        ctx<span class="token punctuation">.</span><span class="token function">channel</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">eventLoop</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">execute</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token punctuation">{</span>
            <span class="token keyword">try</span> <span class="token punctuation">{</span>
                <span class="token class-name">Thread</span><span class="token punctuation">.</span><span class="token function">sleep</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token operator">*</span><span class="token number">1000</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                ctx<span class="token punctuation">.</span><span class="token function">writeAndFlush</span><span class="token punctuation">(</span><span class="token string">&quot;异步执行 task Queue&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">InterruptedException</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                ctx<span class="token punctuation">.</span><span class="token function">writeAndFlush</span><span class="token punctuation">(</span>e<span class="token punctuation">.</span><span class="token function">getMessage</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>



        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;服务器读取线程 &quot;</span> <span class="token operator">+</span> <span class="token class-name">Thread</span><span class="token punctuation">.</span><span class="token function">currentThread</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token string">&quot; channle =&quot;</span> <span class="token operator">+</span> ctx<span class="token punctuation">.</span><span class="token function">channel</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;server ctx =&quot;</span> <span class="token operator">+</span> ctx<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;看看channel 和 pipeline的关系&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
         <span class="token class-name">ChannelPipeline</span> pipeline <span class="token operator">=</span> ctx<span class="token punctuation">.</span><span class="token function">pipeline</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//本质是一个双向链接, 出站入站</span>
        <span class="token comment">//将 msg 转成一个 ByteBuf</span>
        <span class="token comment">//ByteBuf 是 Netty 提供的，不是 NIO 的 ByteBuffer.</span>
        <span class="token class-name">ByteBuf</span> buf <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token class-name">ByteBuf</span><span class="token punctuation">)</span> msg<span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;客户端发送消息是:&quot;</span> <span class="token operator">+</span> buf<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token class-name">CharsetUtil</span><span class="token punctuation">.</span><span class="token constant">UTF_8</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;客户端地址:&quot;</span> <span class="token operator">+</span> channel<span class="token punctuation">.</span><span class="token function">remoteAddress</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>


    <span class="token comment">//数据读取完毕</span>
    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">channelReadComplete</span><span class="token punctuation">(</span><span class="token class-name">ChannelHandlerContext</span> ctx<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">Exception</span> <span class="token punctuation">{</span>

        <span class="token comment">//writeAndFlush 是 write + flush</span>
        <span class="token comment">//将数据写入到缓存，并刷新</span>
        <span class="token comment">//一般讲，我们对这个发送的数据进行编码</span>
        ctx<span class="token punctuation">.</span><span class="token function">writeAndFlush</span><span class="token punctuation">(</span><span class="token class-name">Unpooled</span><span class="token punctuation">.</span><span class="token function">copiedBuffer</span><span class="token punctuation">(</span><span class="token string">&quot;hello, 客户端~(&gt;^ω^&lt;)喵1&quot;</span><span class="token punctuation">,</span> <span class="token class-name">CharsetUtil</span><span class="token punctuation">.</span><span class="token constant">UTF_8</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>


    <span class="token comment">//处理异常, 一般是需要关闭通道</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">exceptionCaught</span><span class="token punctuation">(</span><span class="token class-name">ChannelHandlerContext</span> ctx<span class="token punctuation">,</span> <span class="token class-name">Throwable</span> cause<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">Exception</span> <span class="token punctuation">{</span>
        ctx<span class="token punctuation">.</span><span class="token function">close</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

<span class="token punctuation">}</span>

</code></pre></div><h3 id="client" tabindex="-1"><a class="header-anchor" href="#client" aria-hidden="true">#</a> client</h3><div class="language-java" data-ext="java"><pre class="language-java"><code>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">io<span class="token punctuation">.</span>netty<span class="token punctuation">.</span>bootstrap<span class="token punctuation">.</span></span><span class="token class-name">Bootstrap</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">io<span class="token punctuation">.</span>netty<span class="token punctuation">.</span>channel<span class="token punctuation">.</span></span><span class="token class-name">ChannelFuture</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">io<span class="token punctuation">.</span>netty<span class="token punctuation">.</span>channel<span class="token punctuation">.</span></span><span class="token class-name">ChannelInitializer</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">io<span class="token punctuation">.</span>netty<span class="token punctuation">.</span>channel<span class="token punctuation">.</span></span><span class="token class-name">EventLoopGroup</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">io<span class="token punctuation">.</span>netty<span class="token punctuation">.</span>channel<span class="token punctuation">.</span>nio<span class="token punctuation">.</span></span><span class="token class-name">NioEventLoopGroup</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">io<span class="token punctuation">.</span>netty<span class="token punctuation">.</span>channel<span class="token punctuation">.</span>socket<span class="token punctuation">.</span></span><span class="token class-name">SocketChannel</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">io<span class="token punctuation">.</span>netty<span class="token punctuation">.</span>channel<span class="token punctuation">.</span>socket<span class="token punctuation">.</span>nio<span class="token punctuation">.</span></span><span class="token class-name">NioSocketChannel</span></span><span class="token punctuation">;</span>

<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">NettyClient</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">Exception</span> <span class="token punctuation">{</span>

        <span class="token comment">//客户端需要一个事件循环组</span>
        <span class="token class-name">EventLoopGroup</span> group <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">NioEventLoopGroup</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>


        <span class="token keyword">try</span> <span class="token punctuation">{</span>
            <span class="token comment">//创建客户端启动对象</span>
            <span class="token comment">//注意客户端使用的不是 ServerBootstrap 而是 Bootstrap</span>
            <span class="token class-name">Bootstrap</span> bootstrap <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Bootstrap</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

            <span class="token comment">//设置相关参数</span>
            bootstrap<span class="token punctuation">.</span><span class="token function">group</span><span class="token punctuation">(</span>group<span class="token punctuation">)</span> <span class="token comment">//设置线程组</span>
                    <span class="token punctuation">.</span><span class="token function">channel</span><span class="token punctuation">(</span><span class="token class-name">NioSocketChannel</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">)</span> <span class="token comment">// 设置客户端通道的实现类(反射)</span>
                    <span class="token punctuation">.</span><span class="token function">handler</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">ChannelInitializer</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">SocketChannel</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                        <span class="token annotation punctuation">@Override</span>
                        <span class="token keyword">protected</span> <span class="token keyword">void</span> <span class="token function">initChannel</span><span class="token punctuation">(</span><span class="token class-name">SocketChannel</span> ch<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">Exception</span> <span class="token punctuation">{</span>
                            ch<span class="token punctuation">.</span><span class="token function">pipeline</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">addLast</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">NettyClientHandler</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//加入自己的处理器</span>
                        <span class="token punctuation">}</span>
                    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;客户端 ok..&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

            <span class="token comment">//启动客户端去连接服务器端</span>
            <span class="token comment">//关于 ChannelFuture 要分析，涉及到netty的异步模型</span>
            <span class="token class-name">ChannelFuture</span> channelFuture <span class="token operator">=</span> bootstrap<span class="token punctuation">.</span><span class="token function">connect</span><span class="token punctuation">(</span><span class="token string">&quot;127.0.0.1&quot;</span><span class="token punctuation">,</span> <span class="token number">6668</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">sync</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token comment">//给关闭通道进行监听</span>
            channelFuture<span class="token punctuation">.</span><span class="token function">channel</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">closeFuture</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">sync</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span><span class="token keyword">finally</span> <span class="token punctuation">{</span>

            group<span class="token punctuation">.</span><span class="token function">shutdownGracefully</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>






<span class="token keyword">import</span> <span class="token import"><span class="token namespace">io<span class="token punctuation">.</span>netty<span class="token punctuation">.</span>buffer<span class="token punctuation">.</span></span><span class="token class-name">ByteBuf</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">io<span class="token punctuation">.</span>netty<span class="token punctuation">.</span>buffer<span class="token punctuation">.</span></span><span class="token class-name">Unpooled</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">io<span class="token punctuation">.</span>netty<span class="token punctuation">.</span>channel<span class="token punctuation">.</span></span><span class="token class-name">ChannelHandlerContext</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">io<span class="token punctuation">.</span>netty<span class="token punctuation">.</span>channel<span class="token punctuation">.</span></span><span class="token class-name">ChannelInboundHandlerAdapter</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">io<span class="token punctuation">.</span>netty<span class="token punctuation">.</span>util<span class="token punctuation">.</span></span><span class="token class-name">CharsetUtil</span></span><span class="token punctuation">;</span>

<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">NettyClientHandler</span> <span class="token keyword">extends</span> <span class="token class-name">ChannelInboundHandlerAdapter</span> <span class="token punctuation">{</span>

    <span class="token comment">//当通道就绪就会触发该方法</span>
    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">channelActive</span><span class="token punctuation">(</span><span class="token class-name">ChannelHandlerContext</span> ctx<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">Exception</span> <span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;client &quot;</span> <span class="token operator">+</span> ctx<span class="token punctuation">)</span><span class="token punctuation">;</span>
        ctx<span class="token punctuation">.</span><span class="token function">writeAndFlush</span><span class="token punctuation">(</span><span class="token class-name">Unpooled</span><span class="token punctuation">.</span><span class="token function">copiedBuffer</span><span class="token punctuation">(</span><span class="token string">&quot;hello, server: (&gt;^ω^&lt;)喵&quot;</span><span class="token punctuation">,</span> <span class="token class-name">CharsetUtil</span><span class="token punctuation">.</span><span class="token constant">UTF_8</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">//当通道有读取事件时，会触发</span>
    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">channelRead</span><span class="token punctuation">(</span><span class="token class-name">ChannelHandlerContext</span> ctx<span class="token punctuation">,</span> <span class="token class-name">Object</span> msg<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">Exception</span> <span class="token punctuation">{</span>

        <span class="token class-name">ByteBuf</span> buf <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token class-name">ByteBuf</span><span class="token punctuation">)</span> msg<span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;服务器回复的消息:&quot;</span> <span class="token operator">+</span> buf<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token class-name">CharsetUtil</span><span class="token punctuation">.</span><span class="token constant">UTF_8</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;服务器的地址： &quot;</span><span class="token operator">+</span> ctx<span class="token punctuation">.</span><span class="token function">channel</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">remoteAddress</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">exceptionCaught</span><span class="token punctuation">(</span><span class="token class-name">ChannelHandlerContext</span> ctx<span class="token punctuation">,</span> <span class="token class-name">Throwable</span> cause<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">Exception</span> <span class="token punctuation">{</span>
        cause<span class="token punctuation">.</span><span class="token function">printStackTrace</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        ctx<span class="token punctuation">.</span><span class="token function">close</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre></div><h2 id="netty模型" tabindex="-1"><a class="header-anchor" href="#netty模型" aria-hidden="true">#</a> Netty模型</h2><ol><li>Netty 抽象出两组线程池，BossGroup 专门负责接收客户端连接，WorkerGroup 专门负责网络读写操作。</li><li>NioEventLoop 表示一个不断循环执行处理任务的线程，每个 NioEventLoop 都有一个 selector，用于监听绑定在其上的 socket 网络通道。</li><li>NioEventLoop 内部采用串行化设计，从消息的读取-&gt;解码-&gt;处理-&gt;编码-&gt;发送，始终由 IO 线程 NioEventLoop 负责</li></ol><ul><li>NioEventLoopGroup 下包含多个 NioEventLoop <ul><li>每个 NioEventLoop 中包含有一个 Selector，一个 taskQueue</li><li>每个 NioEventLoop 的 Selector 上可以注册监听多个 NioChannel</li><li>每个 NioChannel 只会绑定在唯一的 NioEventLoop 上</li><li>每个 NioChannel 都绑定有一个自己的 ChannelPipeline</li></ul></li></ul>`,13),l=[e];function u(k,i){return s(),a("div",null,l)}const m=n(c,[["render",u],["__file","nettya.html.vue"]]);export{m as default};
