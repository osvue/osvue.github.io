import{_ as n,p as s,q as a,a1 as t}from"./framework-d81ad7e5.js";const p={},o=t(`<ul><li>HTTP 协议有一个缺陷：通信只能由客户端发起，HTTP 协议做不到服务器主动向客户端推送信息。</li></ul><h4 id="springboot2-0" tabindex="-1"><a class="header-anchor" href="#springboot2-0" aria-hidden="true">#</a> springboot2.0</h4><div class="language-xml" data-ext="xml"><pre class="language-xml"><code> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">&gt;</span></span>  
           <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>org.springframework.boot<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>  
           <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>spring-boot-starter-websocket<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>  
       <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">&gt;</span></span> 
</code></pre></div><h4 id="websocketconfig" tabindex="-1"><a class="header-anchor" href="#websocketconfig" aria-hidden="true">#</a> WebSocketConfig</h4><div class="language-java" data-ext="java"><pre class="language-java"><code><span class="token doc-comment comment">/**
 * 
 * <span class="token keyword">@see</span> socket配置类
 *
 */</span>
<span class="token annotation punctuation">@Configuration</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">WebSocketConfig</span> <span class="token punctuation">{</span>

 <span class="token annotation punctuation">@Bean</span>  
    <span class="token keyword">public</span> <span class="token class-name">ServerEndpointExporter</span> <span class="token function">serverEndpointExporter</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>  
        <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">ServerEndpointExporter</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  
    <span class="token punctuation">}</span>  
<span class="token punctuation">}</span>

</code></pre></div><h4 id="websocketserver" tabindex="-1"><a class="header-anchor" href="#websocketserver" aria-hidden="true">#</a> WebSocketServer</h4><ul><li><p>因为WebSocket是类似客户端服务端的形式(采用ws协议)，那么这里的WebSocketServer其实就相当于一个ws协议的Controller</p></li><li><p>直接@ServerEndpoint(&quot;/imserver/{userId}&quot;) 、@Component启用即可，然后在里面实现@OnOpen开启连接，@onClose关闭连接，@onMessage接收消息等方法。</p></li><li><p>新建一个ConcurrentHashMap webSocketMap 用于接收当前userId的WebSocket，方便IM之间对userId进行推送消息。单机版实现到这里就可以。</p></li></ul><div class="language-java" data-ext="java"><pre class="language-java"><code>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>io<span class="token punctuation">.</span></span><span class="token class-name">IOException</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>util<span class="token punctuation">.</span>concurrent<span class="token punctuation">.</span></span><span class="token class-name">ConcurrentHashMap</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">javax<span class="token punctuation">.</span>websocket<span class="token punctuation">.</span></span><span class="token class-name">OnClose</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">javax<span class="token punctuation">.</span>websocket<span class="token punctuation">.</span></span><span class="token class-name">OnError</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">javax<span class="token punctuation">.</span>websocket<span class="token punctuation">.</span></span><span class="token class-name">OnMessage</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">javax<span class="token punctuation">.</span>websocket<span class="token punctuation">.</span></span><span class="token class-name">OnOpen</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">javax<span class="token punctuation">.</span>websocket<span class="token punctuation">.</span></span><span class="token class-name">Session</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">javax<span class="token punctuation">.</span>websocket<span class="token punctuation">.</span>server<span class="token punctuation">.</span></span><span class="token class-name">PathParam</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">javax<span class="token punctuation">.</span>websocket<span class="token punctuation">.</span>server<span class="token punctuation">.</span></span><span class="token class-name">ServerEndpoint</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">com<span class="token punctuation">.</span>alibaba<span class="token punctuation">.</span>fastjson<span class="token punctuation">.</span></span><span class="token class-name">JSON</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">com<span class="token punctuation">.</span>alibaba<span class="token punctuation">.</span>fastjson<span class="token punctuation">.</span></span><span class="token class-name">JSONObject</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>apache<span class="token punctuation">.</span>commons<span class="token punctuation">.</span>lang<span class="token punctuation">.</span></span><span class="token class-name">StringUtils</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>slf4j<span class="token punctuation">.</span></span><span class="token class-name">Logger</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>slf4j<span class="token punctuation">.</span></span><span class="token class-name">LoggerFactory</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>stereotype<span class="token punctuation">.</span></span><span class="token class-name">Component</span></span><span class="token punctuation">;</span>

<span class="token annotation punctuation">@ServerEndpoint</span><span class="token punctuation">(</span><span class="token string">&quot;/imserver/{userId}&quot;</span><span class="token punctuation">)</span>
<span class="token annotation punctuation">@Component</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">SocketServer</span> <span class="token punctuation">{</span>

 <span class="token keyword">static</span> <span class="token class-name">Logger</span> log <span class="token operator">=</span> <span class="token class-name">LoggerFactory</span><span class="token punctuation">.</span><span class="token function">getLogger</span><span class="token punctuation">(</span><span class="token class-name">SocketServer</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
 <span class="token doc-comment comment">/** 静态变量，用来记录当前在线连接数。应该把它设计成线程安全的。 */</span>
 <span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token keyword">int</span> onlineCount <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
 <span class="token doc-comment comment">/** concurrent包的线程安全Set，用来存放每个客户端对应的MyWebSocket对象。 */</span>
 <span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token class-name">ConcurrentHashMap</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">,</span> <span class="token class-name">SocketServer</span><span class="token punctuation">&gt;</span></span> webSocketMap <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ConcurrentHashMap</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
 <span class="token doc-comment comment">/** 与某个客户端的连接会话，需要通过它来给客户端发送数据 */</span>
 <span class="token keyword">private</span> <span class="token class-name">Session</span> session<span class="token punctuation">;</span>
 <span class="token doc-comment comment">/** 接收userId */</span>
 <span class="token keyword">private</span> <span class="token class-name">String</span> userId <span class="token operator">=</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">;</span>

 <span class="token doc-comment comment">/**
  * 连接建立成功调用的方法
  */</span>
 <span class="token annotation punctuation">@OnOpen</span>
 <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">onOpen</span><span class="token punctuation">(</span><span class="token class-name">Session</span> session<span class="token punctuation">,</span> <span class="token annotation punctuation">@PathParam</span><span class="token punctuation">(</span><span class="token string">&quot;userId&quot;</span><span class="token punctuation">)</span> <span class="token class-name">String</span> userId<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span>session <span class="token operator">=</span> session<span class="token punctuation">;</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span>userId <span class="token operator">=</span> userId<span class="token punctuation">;</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>webSocketMap<span class="token punctuation">.</span><span class="token function">containsKey</span><span class="token punctuation">(</span>userId<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
   webSocketMap<span class="token punctuation">.</span><span class="token function">remove</span><span class="token punctuation">(</span>userId<span class="token punctuation">)</span><span class="token punctuation">;</span>
   webSocketMap<span class="token punctuation">.</span><span class="token function">put</span><span class="token punctuation">(</span>userId<span class="token punctuation">,</span> <span class="token keyword">this</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
   <span class="token comment">// 加入set中</span>
  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
   webSocketMap<span class="token punctuation">.</span><span class="token function">put</span><span class="token punctuation">(</span>userId<span class="token punctuation">,</span> <span class="token keyword">this</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
   <span class="token comment">// 加入set中</span>
   <span class="token function">addOnlineCount</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
   <span class="token comment">// 在线数加1</span>
  <span class="token punctuation">}</span>

  log<span class="token punctuation">.</span><span class="token function">info</span><span class="token punctuation">(</span><span class="token string">&quot;用户连接:&quot;</span> <span class="token operator">+</span> userId <span class="token operator">+</span> <span class="token string">&quot;,当前在线人数为:&quot;</span> <span class="token operator">+</span> <span class="token function">getOnlineCount</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">try</span> <span class="token punctuation">{</span>
   <span class="token function">sendMessage</span><span class="token punctuation">(</span><span class="token string">&quot;连接成功&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">IOException</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
   log<span class="token punctuation">.</span><span class="token function">error</span><span class="token punctuation">(</span><span class="token string">&quot;用户:&quot;</span> <span class="token operator">+</span> userId <span class="token operator">+</span> <span class="token string">&quot;,网络异常!!!!!!&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
 <span class="token punctuation">}</span>

 <span class="token doc-comment comment">/**
  * 连接关闭调用的方法
  */</span>
 <span class="token annotation punctuation">@OnClose</span>
 <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">onClose</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>webSocketMap<span class="token punctuation">.</span><span class="token function">containsKey</span><span class="token punctuation">(</span>userId<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
   webSocketMap<span class="token punctuation">.</span><span class="token function">remove</span><span class="token punctuation">(</span>userId<span class="token punctuation">)</span><span class="token punctuation">;</span>
   <span class="token comment">// 从set中删除</span>
   <span class="token function">subOnlineCount</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  log<span class="token punctuation">.</span><span class="token function">info</span><span class="token punctuation">(</span><span class="token string">&quot;用户退出:&quot;</span> <span class="token operator">+</span> userId <span class="token operator">+</span> <span class="token string">&quot;,当前在线人数为:&quot;</span> <span class="token operator">+</span> <span class="token function">getOnlineCount</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
 <span class="token punctuation">}</span>

 <span class="token doc-comment comment">/**
  * 收到客户端消息后调用的方法
  *
  * <span class="token keyword">@param</span> <span class="token parameter">message</span> 客户端发送过来的消息
  */</span>
 <span class="token annotation punctuation">@OnMessage</span>
 <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">onMessage</span><span class="token punctuation">(</span><span class="token class-name">String</span> message<span class="token punctuation">,</span> <span class="token class-name">Session</span> session<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  log<span class="token punctuation">.</span><span class="token function">info</span><span class="token punctuation">(</span><span class="token string">&quot;用户消息:&quot;</span> <span class="token operator">+</span> userId <span class="token operator">+</span> <span class="token string">&quot;,报文:&quot;</span> <span class="token operator">+</span> message<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token comment">// 可以群发消息</span>
  <span class="token comment">// 消息保存到数据库、redis</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token class-name">StringUtils</span><span class="token punctuation">.</span><span class="token function">isNotBlank</span><span class="token punctuation">(</span>message<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
   <span class="token keyword">try</span> <span class="token punctuation">{</span>
    <span class="token comment">// 解析发送的报文</span>
    <span class="token class-name">JSONObject</span> jsonObject <span class="token operator">=</span> <span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">parseObject</span><span class="token punctuation">(</span>message<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">// 追加发送人(防止串改)</span>
    jsonObject<span class="token punctuation">.</span><span class="token function">put</span><span class="token punctuation">(</span><span class="token string">&quot;fromUserId&quot;</span><span class="token punctuation">,</span> <span class="token keyword">this</span><span class="token punctuation">.</span>userId<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token class-name">String</span> toUserId <span class="token operator">=</span> jsonObject<span class="token punctuation">.</span><span class="token function">getString</span><span class="token punctuation">(</span><span class="token string">&quot;toUserId&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">// 传送给对应toUserId用户的websocket</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token class-name">StringUtils</span><span class="token punctuation">.</span><span class="token function">isNotBlank</span><span class="token punctuation">(</span>toUserId<span class="token punctuation">)</span> <span class="token operator">&amp;&amp;</span> webSocketMap<span class="token punctuation">.</span><span class="token function">containsKey</span><span class="token punctuation">(</span>toUserId<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
     webSocketMap<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>toUserId<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">sendMessage</span><span class="token punctuation">(</span>jsonObject<span class="token punctuation">.</span><span class="token function">toJSONString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
     log<span class="token punctuation">.</span><span class="token function">error</span><span class="token punctuation">(</span><span class="token string">&quot;请求的userId:&quot;</span> <span class="token operator">+</span> toUserId <span class="token operator">+</span> <span class="token string">&quot;不在该服务器上&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
     <span class="token comment">// 否则不在这个服务器上，发送到mysql或者redis</span>
    <span class="token punctuation">}</span>
   <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">Exception</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    e<span class="token punctuation">.</span><span class="token function">printStackTrace</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
   <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
 <span class="token punctuation">}</span>

 <span class="token doc-comment comment">/**
  *
  * <span class="token keyword">@param</span> <span class="token parameter">session</span>
  * <span class="token keyword">@param</span> <span class="token parameter">error</span>
  */</span>
 <span class="token annotation punctuation">@OnError</span>
 <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">onError</span><span class="token punctuation">(</span><span class="token class-name">Session</span> session<span class="token punctuation">,</span> <span class="token class-name">Throwable</span> error<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  log<span class="token punctuation">.</span><span class="token function">error</span><span class="token punctuation">(</span><span class="token string">&quot;用户错误:&quot;</span> <span class="token operator">+</span> <span class="token keyword">this</span><span class="token punctuation">.</span>userId <span class="token operator">+</span> <span class="token string">&quot;,原因:&quot;</span> <span class="token operator">+</span> error<span class="token punctuation">.</span><span class="token function">getMessage</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  error<span class="token punctuation">.</span><span class="token function">printStackTrace</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
 <span class="token punctuation">}</span>

 <span class="token doc-comment comment">/**
  * 实现服务器主动推送
  */</span>
 <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">sendMessage</span><span class="token punctuation">(</span><span class="token class-name">String</span> message<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">IOException</span> <span class="token punctuation">{</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span>session<span class="token punctuation">.</span><span class="token function">getBasicRemote</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">sendText</span><span class="token punctuation">(</span>message<span class="token punctuation">)</span><span class="token punctuation">;</span>
 <span class="token punctuation">}</span>

 <span class="token doc-comment comment">/**
  * 发送自定义消息
  */</span>
 <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">sendInfo</span><span class="token punctuation">(</span><span class="token class-name">String</span> message<span class="token punctuation">,</span> <span class="token annotation punctuation">@PathParam</span><span class="token punctuation">(</span><span class="token string">&quot;userId&quot;</span><span class="token punctuation">)</span> <span class="token class-name">String</span> userId<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">IOException</span> <span class="token punctuation">{</span>
  log<span class="token punctuation">.</span><span class="token function">info</span><span class="token punctuation">(</span><span class="token string">&quot;发送消息到:&quot;</span> <span class="token operator">+</span> userId <span class="token operator">+</span> <span class="token string">&quot;，报文:&quot;</span> <span class="token operator">+</span> message<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token class-name">StringUtils</span><span class="token punctuation">.</span><span class="token function">isNotBlank</span><span class="token punctuation">(</span>userId<span class="token punctuation">)</span> <span class="token operator">&amp;&amp;</span> webSocketMap<span class="token punctuation">.</span><span class="token function">containsKey</span><span class="token punctuation">(</span>userId<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
   webSocketMap<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>userId<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">sendMessage</span><span class="token punctuation">(</span>message<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
   log<span class="token punctuation">.</span><span class="token function">error</span><span class="token punctuation">(</span><span class="token string">&quot;用户&quot;</span> <span class="token operator">+</span> userId <span class="token operator">+</span> <span class="token string">&quot;,不在线！&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
 <span class="token punctuation">}</span>

 <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">synchronized</span> <span class="token keyword">int</span> <span class="token function">getOnlineCount</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> onlineCount<span class="token punctuation">;</span>
 <span class="token punctuation">}</span>

 <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">synchronized</span> <span class="token keyword">void</span> <span class="token function">addOnlineCount</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token class-name">SocketServer</span><span class="token punctuation">.</span>onlineCount<span class="token operator">++</span><span class="token punctuation">;</span>
 <span class="token punctuation">}</span>

 <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">synchronized</span> <span class="token keyword">void</span> <span class="token function">subOnlineCount</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token class-name">SocketServer</span><span class="token punctuation">.</span>onlineCount<span class="token operator">--</span><span class="token punctuation">;</span>
 <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><h4 id="消息推送" tabindex="-1"><a class="header-anchor" href="#消息推送" aria-hidden="true">#</a> 消息推送</h4><div class="language-java" data-ext="java"><pre class="language-java"><code><span class="token annotation punctuation">@RequestMapping</span><span class="token punctuation">(</span><span class="token string">&quot;/push/{toUserId}&quot;</span><span class="token punctuation">)</span>
 <span class="token keyword">public</span> <span class="token class-name">ResponseEntity</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">&gt;</span></span> <span class="token function">pushToWeb</span><span class="token punctuation">(</span><span class="token class-name">String</span> message<span class="token punctuation">,</span> <span class="token annotation punctuation">@PathVariable</span> <span class="token class-name">String</span> toUserId<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">IOException</span> <span class="token punctuation">{</span>
  <span class="token class-name">SocketServer</span><span class="token punctuation">.</span><span class="token function">sendInfo</span><span class="token punctuation">(</span>message<span class="token punctuation">,</span> toUserId<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">return</span> <span class="token class-name">ResponseEntity</span><span class="token punctuation">.</span><span class="token function">ok</span><span class="token punctuation">(</span><span class="token string">&quot;MSG SEND SUCCESS&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
 <span class="token punctuation">}</span>
</code></pre></div>`,10),e=[o];function c(u,l){return s(),a("div",null,e)}const i=n(p,[["render",c],["__file","websocket_a.html.vue"]]);export{i as default};
