import{_ as a,p as n,q as s,a1 as e}from"./framework-d81ad7e5.js";const t={},p=e(`<h2 id="web实时消息推送的方案" tabindex="-1"><a class="header-anchor" href="#web实时消息推送的方案" aria-hidden="true">#</a> web实时消息推送的方案</h2><ul><li>场景 <ul><li>前台点击同步、远程调用消息队列、同步项目or组织机构信息、推送SUSSESS OR ERROR MESSAGE</li></ul></li></ul><h3 id="消息推送" tabindex="-1"><a class="header-anchor" href="#消息推送" aria-hidden="true">#</a> 消息推送</h3><ul><li>功能很简单，只要触发某个事件（主动分享了资源或者后台主动推送消息）web页面的通知</li><li>通常在服务端会有若干张消息推送表，用来记录用户触发不同事件所推送不同类型的消息，前端主动查询（拉）或者被动接收（推）用户所有未读的消息数。</li><li>消息推送 <strong>推（push）和拉（pull）</strong> 两种形式</li></ul><h3 id="短轮询" tabindex="-1"><a class="header-anchor" href="#短轮询" aria-hidden="true">#</a> 短轮询</h3><p>轮询(polling)应该是实现消息推送方案中最简单的一种，这里我们暂且将轮询分为短轮询和长轮询。</p><p>短轮询很好理解，指定的时间间隔，由浏览器向服务器发出HTTP请求，服务器实时返回未读消息数据给客户端，浏览器再做渲染显示。</p><p>一个简单的JS定时器就可以搞定，每秒钟请求一次未读消息数接口，返回的数据展示即可。</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token function">setInterval</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token comment">// 方法请求</span>
  <span class="token function">messageCount</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">res</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>res<span class="token punctuation">.</span>code <span class="token operator">===</span> <span class="token number">200</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
          <span class="token keyword">this</span><span class="token punctuation">.</span>messageCount <span class="token operator">=</span> res<span class="token punctuation">.</span>data
      <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">1000</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
复制代码
</code></pre></div><h3 id="长轮询" tabindex="-1"><a class="header-anchor" href="#长轮询" aria-hidden="true">#</a> 长轮询</h3><p>长轮询是对上边短轮询的一种改进版本，在尽可能减少对服务器资源浪费的同时，保证消息的相对实时性。长轮询在中间件中应用的很广泛，比如Nacos和apollo配置中心，消息队列kafka、RocketMQ中都有用到长轮询。</p><p>Nacos配置中心交互模型是push还是pull？一文中我详细介绍过Nacos长轮询的实现原理，感兴趣的小伙伴可以瞅瞅。</p><p>这次使用apollo配置中心实现长轮询的方式，应用了一个类<strong>DeferredResult</strong>，它是在servelet3.0后经过Spring封装提供的一种异步请求机制，直意就是延迟结果。</p><p>DeferredResult可以允许容器线程快速释放占用的资源，不阻塞请求线程，以此接受更多的请求提升系统的吞吐量，然后启动异步工作线程处理真正的业务逻辑，处理完成调用DeferredResult.setResult(200)提交响应结果。</p><p>下边我们用长轮询来实现消息推送。</p><p>因为一个ID可能会被多个长轮询请求监听，所以我采用了guava包提供的Multimap结构存放长轮询，一个key可以对应多个value。一旦监听到key发生变化，对应的所有长轮询都会响应。前端得到非请求超时的状态码，知晓数据变更，主动查询未读消息数接口，更新页面数据。 当请求超过设置的超时时间，会抛出AsyncRequestTimeoutException异常，这里直接用@ControllerAdvice全局捕获统一返回即可，前端获取约定好的状态码后再次发起长轮询请求，如此往复调用。</p><p>长轮询相比于短轮询在性能上提升了很多，但依然会产生较多的请求，这是它的一点不完美的地方。</p><h3 id="iframe流" tabindex="-1"><a class="header-anchor" href="#iframe流" aria-hidden="true">#</a> iframe流</h3><p>iframe流就是在页面中插入一个隐藏的<code>&lt;iframe&gt;</code>标签，通过在src中请求消息数量API接口，由此在服务端和客户端之间创建一条长连接，服务端持续向iframe传输数据。</p><p>传输的数据通常是HTML、或是内嵌的javascript脚本，来达到实时更新页面的效果。</p>`,20),o=[p];function c(l,u){return n(),s("div",null,o)}const r=a(t,[["render",c],["__file","push.html.vue"]]);export{r as default};
