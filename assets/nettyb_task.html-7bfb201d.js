import{_ as n,p as s,q as a,a1 as t}from"./framework-d81ad7e5.js";const p={},o=t(`<h2 id="taskqueue" tabindex="-1"><a class="header-anchor" href="#taskqueue" aria-hidden="true">#</a> taskQueue</h2><ul><li>用户程序自定义的普通任务</li><li>用户自定义定时任务</li></ul><div class="language-java" data-ext="java"><pre class="language-java"><code>  <span class="token comment">//比如这里我们有一个非常耗时长的业务-&gt; 异步执行 -&gt; 提交该channel 对应的</span>
        <span class="token comment">//NIOEventLoop 的 taskQueue中,</span>

        <span class="token comment">//  用户程序自定义的普通任务</span>

        ctx<span class="token punctuation">.</span><span class="token function">channel</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">eventLoop</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">execute</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Runnable</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token annotation punctuation">@Override</span>
            <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">run</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>

                <span class="token keyword">try</span> <span class="token punctuation">{</span>
                    <span class="token class-name">Thread</span><span class="token punctuation">.</span><span class="token function">sleep</span><span class="token punctuation">(</span><span class="token number">5</span> <span class="token operator">*</span> <span class="token number">1000</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                    ctx<span class="token punctuation">.</span><span class="token function">writeAndFlush</span><span class="token punctuation">(</span><span class="token class-name">Unpooled</span><span class="token punctuation">.</span><span class="token function">copiedBuffer</span><span class="token punctuation">(</span><span class="token string">&quot;hello, 客户端~(&gt;^ω^&lt;)喵2&quot;</span><span class="token punctuation">,</span> <span class="token class-name">CharsetUtil</span><span class="token punctuation">.</span><span class="token constant">UTF_8</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;channel code=&quot;</span> <span class="token operator">+</span> ctx<span class="token punctuation">.</span><span class="token function">channel</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">hashCode</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">Exception</span> ex<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;发生异常&quot;</span> <span class="token operator">+</span> ex<span class="token punctuation">.</span><span class="token function">getMessage</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

       
        <span class="token comment">//    用户自定义定时任务 -》 该任务是提交到 scheduleTaskQueue中</span>

        ctx<span class="token punctuation">.</span><span class="token function">channel</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">eventLoop</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">schedule</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Runnable</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token annotation punctuation">@Override</span>
            <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">run</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>

                <span class="token keyword">try</span> <span class="token punctuation">{</span>
                    <span class="token class-name">Thread</span><span class="token punctuation">.</span><span class="token function">sleep</span><span class="token punctuation">(</span><span class="token number">5</span> <span class="token operator">*</span> <span class="token number">1000</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                    ctx<span class="token punctuation">.</span><span class="token function">writeAndFlush</span><span class="token punctuation">(</span><span class="token class-name">Unpooled</span><span class="token punctuation">.</span><span class="token function">copiedBuffer</span><span class="token punctuation">(</span><span class="token string">&quot;hello, 客户端~(&gt;^ω^&lt;)喵4&quot;</span><span class="token punctuation">,</span> <span class="token class-name">CharsetUtil</span><span class="token punctuation">.</span><span class="token constant">UTF_8</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;channel code=&quot;</span> <span class="token operator">+</span> ctx<span class="token punctuation">.</span><span class="token function">channel</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">hashCode</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">Exception</span> ex<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;发生异常&quot;</span> <span class="token operator">+</span> ex<span class="token punctuation">.</span><span class="token function">getMessage</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">,</span> <span class="token class-name">TimeUnit</span><span class="token punctuation">.</span><span class="token constant">SECONDS</span><span class="token punctuation">)</span><span class="token punctuation">;</span>


</code></pre></div><h2 id="异步模型" tabindex="-1"><a class="header-anchor" href="#异步模型" aria-hidden="true">#</a> 异步模型</h2><ol><li>异步的概念和同步相对。当一个异步过程调用发出后，调用者不能立刻得到结果。实际处理这个调用的组件在完成后，通过状态、通知和回调来通知调用者。</li><li>Netty 中的 I/O 操作是异步的，包括 Bind、Write、Connect 等操作会简单的返回一个 ChannelFuture。</li><li>调用者并不能立刻获得结果，而是通过 Future-Listener 机制，用户可以方便的主动获取或者通过通知机制获得 IO 操作结果</li><li>Netty 的异步模型是建立在 future 和 callback 的之上的。callback 就是回调。重点说 Future，它的核心思想是：假设一个方法 fun，计算过程可能非常耗时，等待 fun返回显然不合适。那么可以在调用 fun 的时候，立马返回一个 Future，后续可以通过 Future去监控方法 fun 的处理过程(即 ： Future-Listener 机制)</li></ol><h3 id="future-说明" tabindex="-1"><a class="header-anchor" href="#future-说明" aria-hidden="true">#</a> Future 说明</h3><ul><li>表示异步的执行结果, 可以通过它提供的方法来检测执行是否完成，比如检索计算等等. <ul><li>ChannelFuture 是一个接口 ： <code>public interface ChannelFuture extends Future&lt;Void&gt;\v</code>我们可以添加监听器，当监听的事件发生时，就会通知到监听器.</li></ul></li></ul><h3 id="future-listener-机制" tabindex="-1"><a class="header-anchor" href="#future-listener-机制" aria-hidden="true">#</a> Future-Listener 机制</h3><ul><li><p>当 Future 对象刚刚创建时，处于非完成状态，调用者可以通过返回的 ChannelFuture 来获取操作执行的状态，注册监听函数来执行完成后的操作。 常见有如下操作</p></li><li><p>通过 isDone 方法来判断当前操作是否完成；</p></li><li><p>通过 isSuccess 方法来判断已完成的当前操作是否成功；</p></li><li><p>通过 getCause 方法来获取已完成的当前操作失败的原因；</p></li><li><p>通过 isCancelled 方法来判断已完成的当前操作是否被取消；</p></li><li><p>通过 addListener 方法来注册监听器，当操作已完成(isDone 方法返回完成)，将会通知指定的监听器；如果 Future 对象已完成，则通知指定的监听器</p></li></ul><div class="language-java" data-ext="java"><pre class="language-java"><code>serverBootstrap<span class="token punctuation">.</span><span class="token function">bind</span><span class="token punctuation">(</span>port<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">addListener</span><span class="token punctuation">(</span>future <span class="token operator">-&gt;</span> <span class="token punctuation">{</span>
       <span class="token keyword">if</span><span class="token punctuation">(</span>future<span class="token punctuation">.</span><span class="token function">isSuccess</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
           <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token function">newDate</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token string">&quot;: 端口[&quot;</span><span class="token operator">+</span> port <span class="token operator">+</span> <span class="token string">&quot;]绑定成功!&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
       <span class="token punctuation">}</span> <span class="token keyword">else</span><span class="token punctuation">{</span>
           <span class="token class-name">System</span><span class="token punctuation">.</span>err<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;端口[&quot;</span><span class="token operator">+</span> port <span class="token operator">+</span> <span class="token string">&quot;]绑定失败!&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
       <span class="token punctuation">}</span>
   <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><ul><li>相比传统阻塞 I/O，执行 I/O 操作后线程会被阻塞住, 直到操作完成；异步处理的好处是不会造成线程阻塞，线程在 I/O 操作期间可以执行别的程序，在高并发情形下会更稳定和更高的吞吐量</li></ul>`,11),c=[o];function e(u,l){return s(),a("div",null,c)}const k=n(p,[["render",e],["__file","nettyb_task.html.vue"]]);export{k as default};
