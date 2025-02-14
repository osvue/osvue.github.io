import{_ as n,p as s,q as a,a1 as t}from"./framework-d81ad7e5.js";const p={},o=t(`<h2 id="spring-boot-websocket" tabindex="-1"><a class="header-anchor" href="#spring-boot-websocket" aria-hidden="true">#</a> spring boot websocket</h2><h3 id="websocket原生注解" tabindex="-1"><a class="header-anchor" href="#websocket原生注解" aria-hidden="true">#</a> WebSocket原生注解</h3><ul><li>pom.xml</li></ul><div class="language-xml" data-ext="xml"><pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>org.springframework.boot<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>spring-boot-starter-websocket<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><ul><li>配置类WebSocketConfig，这里开启了配置之后springboot才会去扫描对应的注解</li></ul><div class="language-java" data-ext="java"><pre class="language-java"><code><span class="token annotation punctuation">@Configuration</span>
<span class="token annotation punctuation">@EnableWebSocket</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">WebSocketConfig</span> <span class="token punctuation">{</span>

    <span class="token annotation punctuation">@Bean</span>
    <span class="token keyword">public</span> <span class="token class-name">ServerEndpointExporter</span> <span class="token function">serverEndpoint</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">ServerEndpointExporter</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><ul><li>处理消息类Msg</li></ul><div class="language-java" data-ext="java"><pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">com<span class="token punctuation">.</span>osvue<span class="token punctuation">.</span>env<span class="token punctuation">.</span>app<span class="token punctuation">.</span>msg</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>io<span class="token punctuation">.</span></span><span class="token class-name">IOException</span></span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token import"><span class="token namespace">javax<span class="token punctuation">.</span>websocket<span class="token punctuation">.</span></span><span class="token class-name">OnClose</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">javax<span class="token punctuation">.</span>websocket<span class="token punctuation">.</span></span><span class="token class-name">OnMessage</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">javax<span class="token punctuation">.</span>websocket<span class="token punctuation">.</span></span><span class="token class-name">OnOpen</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">javax<span class="token punctuation">.</span>websocket<span class="token punctuation">.</span></span><span class="token class-name">Session</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">javax<span class="token punctuation">.</span>websocket<span class="token punctuation">.</span>server<span class="token punctuation">.</span></span><span class="token class-name">ServerEndpoint</span></span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>stereotype<span class="token punctuation">.</span></span><span class="token class-name">Component</span></span><span class="token punctuation">;</span>
<span class="token doc-comment comment">/**
 * 
 * @ClassName:  Msg   
 * @Description:TODO(web socket 原生注解)   
 * <span class="token keyword">@author</span>: hzq 
 * <span class="token keyword">@date</span>:   2023-4-25 11:08:30    
 * @Copyright: 2023
 */</span>
<span class="token annotation punctuation">@ServerEndpoint</span><span class="token punctuation">(</span><span class="token string">&quot;/skt&quot;</span><span class="token punctuation">)</span>
<span class="token annotation punctuation">@Component</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Msg</span> <span class="token punctuation">{</span>
    <span class="token doc-comment comment">/**
     * 连接成功
     * <span class="token keyword">@param</span> <span class="token parameter">session</span>
     */</span>
    <span class="token annotation punctuation">@OnOpen</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">onOpen</span><span class="token punctuation">(</span><span class="token class-name">Session</span> session<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;连接成功&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/**
     * 连接关闭
     * <span class="token keyword">@param</span> <span class="token parameter">session</span>
     */</span>
    <span class="token annotation punctuation">@OnClose</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">onClose</span><span class="token punctuation">(</span><span class="token class-name">Session</span> session<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;连接关闭&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/**
     * 接收到消息
     * <span class="token keyword">@param</span> <span class="token parameter">text</span>
     */</span>
    <span class="token annotation punctuation">@OnMessage</span>
    <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">onMsg</span><span class="token punctuation">(</span><span class="token class-name">String</span> text<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">IOException</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token string">&quot;servet 发送：&quot;</span> <span class="token operator">+</span> text<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><ul><li><p>后面如果要对客户端发送消息的话使用<code>session.getBasicRemote().sendText(XXX)</code></p></li><li><p><strong>@ServerEndpoint</strong></p></li></ul><ul><li>通过这个 <code>spring boot</code> 就可以知道你暴露出去的 ws 应用的路径，有点类似我们经常用的<code>@RequestMapping</code>。</li><li>比如你的启动端口是8080，而这个注解的值是ws，那我们就可以通过 <code>ws://127.0.0.1:8080/ws</code> 来连接你的应用。</li></ul><ul><li><strong>@OnOpen</strong></li></ul><ul><li><p>当 websocket 建立连接成功后会触发这个注解修饰的方法。</p></li><li><p><strong>@OnClose</strong></p></li><li><p>当 websocket 建立的连接断开后会触发这个注解修饰的方法。</p></li><li><p><strong>@OnMessage</strong></p></li></ul><ul><li>当客户端发送消息到服务端时，会触发这个注解修改的方法，它有一个 String 入参表明客户端传入的值。</li></ul><ul><li><strong>@OnError</strong></li></ul><ul><li>当 websocket 建立连接时出现异常会触发这个注解修饰的方法。</li></ul><h3 id="spring封装的websocket" tabindex="-1"><a class="header-anchor" href="#spring封装的websocket" aria-hidden="true">#</a> Spring封装的WebSocket</h3><blockquote><p>WebSocketConfig 配置 HttpAuthHandler myInterceptor HttpAuthHandler 定义连接开始 和关闭 myInterceptor 连接前 增加拦截 WsSessionManager</p></blockquote><ul><li><p>spring同样也为我们提供了WebSocket的封装，这种方式可以自己配置拦截器</p></li><li><p>在tcp握手之前对请求进行一次处理，可以避免一些恶意的连接。</p></li><li><p>配置类WebSocketConfig，通过实现 <code>WebSocketConfigurer</code> 类并覆盖相应的方法进行 websocket 的配置。</p></li><li><p>我们主要覆盖 registerWebSocketHandlers 这个方法。通过向 WebSocketHandlerRegistry 设置不同参数来进行配置。</p></li><li><p>其中 addHandler方法添加我们的 ws 的 handler 处理类，第二个参数是你暴露出的 ws 路径。</p></li><li><p>addInterceptors添加我们写的拦截器。setAllowedOrigins这个是关闭跨域校验。</p></li><li><p><strong>WebSocketConfig</strong></p></li></ul><div class="language-java" data-ext="java"><pre class="language-java"><code><span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>beans<span class="token punctuation">.</span>factory<span class="token punctuation">.</span>annotation<span class="token punctuation">.</span></span><span class="token class-name">Autowired</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>context<span class="token punctuation">.</span>annotation<span class="token punctuation">.</span></span><span class="token class-name">Configuration</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>web<span class="token punctuation">.</span>socket<span class="token punctuation">.</span>config<span class="token punctuation">.</span>annotation<span class="token punctuation">.</span></span><span class="token class-name">EnableWebSocket</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>web<span class="token punctuation">.</span>socket<span class="token punctuation">.</span>config<span class="token punctuation">.</span>annotation<span class="token punctuation">.</span></span><span class="token class-name">WebSocketConfigurer</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>web<span class="token punctuation">.</span>socket<span class="token punctuation">.</span>config<span class="token punctuation">.</span>annotation<span class="token punctuation">.</span></span><span class="token class-name">WebSocketHandlerRegistry</span></span><span class="token punctuation">;</span>
<span class="token doc-comment comment">/**
 * 
 * @ClassName:  WebSocketConfig   
 * @Description:TODO(spring boot config)   
 * <span class="token keyword">@author</span>: hzq 
 * <span class="token keyword">@date</span>:   2023-4-3 15:57:26    
 * @Copyright: 2023
 */</span>
<span class="token annotation punctuation">@Configuration</span>
<span class="token annotation punctuation">@EnableWebSocket</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">WebSocketConfig</span> <span class="token keyword">implements</span> <span class="token class-name">WebSocketConfigurer</span> <span class="token punctuation">{</span>

    <span class="token annotation punctuation">@Autowired</span>
    <span class="token keyword">private</span> <span class="token class-name">HttpAuthHandler</span> httpAuthHandler<span class="token punctuation">;</span>
    <span class="token annotation punctuation">@Autowired</span>
    <span class="token keyword">private</span> <span class="token class-name">MyInterceptor</span> myInterceptor<span class="token punctuation">;</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">registerWebSocketHandlers</span><span class="token punctuation">(</span><span class="token class-name">WebSocketHandlerRegistry</span> registry<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        registry
                <span class="token punctuation">.</span><span class="token function">addHandler</span><span class="token punctuation">(</span>httpAuthHandler<span class="token punctuation">,</span> <span class="token string">&quot;itg&quot;</span><span class="token punctuation">)</span>
                <span class="token punctuation">.</span><span class="token function">addInterceptors</span><span class="token punctuation">(</span>myInterceptor<span class="token punctuation">)</span>
                <span class="token punctuation">.</span><span class="token function">setAllowedOrigins</span><span class="token punctuation">(</span><span class="token string">&quot;*&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><ul><li><strong>处理器和拦截器</strong></li></ul><ul><li><p><strong>HttpAuthHandler</strong>用于处理ws的消息，通过继承 <code>TextWebSocketHandler</code> 类并覆盖相应方法，可以对 websocket 的事件进行处理，这里可以同原生注解的那几个注解连起来看</p></li><li><p>afterConnectionEstablished 方法是在 socket 连接成功后被触发，同原生注解里的 <strong>@OnOpen</strong> 功能</p></li><li><p>afterConnectionClosed方法是在 socket 连接关闭后被触发，同原生注解里的 <strong>@OnClose</strong> 功能</p></li><li><p>handleTextMessage方法是在客户端发送信息时触发，同原生注解里的 <strong>@OnMessage</strong> 功能</p></li></ul><div class="language-java" data-ext="java"><pre class="language-java"><code><span class="token doc-comment comment">/**
 * 
 * @ClassName:  HttpAuthHandler   
 * @Description:TODO(这里用一句话描述这个类的作用)   
 * <span class="token keyword">@author</span>: hzq 
 * <span class="token keyword">@date</span>:   2023-4-14 17:25:19    
 * @Copyright: 2023
 */</span>
<span class="token annotation punctuation">@Component</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">HttpAuthHandler</span> <span class="token keyword">extends</span> <span class="token class-name">TextWebSocketHandler</span> <span class="token punctuation">{</span>
    <span class="token doc-comment comment">/**
     * socket 建立成功事件
     * <span class="token keyword">@param</span> <span class="token parameter">session</span>
     * <span class="token keyword">@throws</span> <span class="token reference"><span class="token class-name">Exception</span></span>
     */</span>
    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">afterConnectionEstablished</span><span class="token punctuation">(</span><span class="token class-name">WebSocketSession</span> session<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">Exception</span> <span class="token punctuation">{</span>
        <span class="token class-name">Object</span> token <span class="token operator">=</span> session<span class="token punctuation">.</span><span class="token function">getAttributes</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">&quot;token&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>token <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token comment">// 用户连接成功，放入在线用户缓存</span>
            <span class="token class-name">WsSessionManager</span><span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>token<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> session<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
            <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">RuntimeException</span><span class="token punctuation">(</span><span class="token string">&quot;用户登录已经失效!&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    <span class="token doc-comment comment">/**
     * 接收消息事件
     * <span class="token keyword">@param</span> <span class="token parameter">session</span>
     * <span class="token keyword">@param</span> <span class="token parameter">message</span>
     * <span class="token keyword">@throws</span> <span class="token reference"><span class="token class-name">Exception</span></span>
     */</span>
    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">protected</span> <span class="token keyword">void</span> <span class="token function">handleTextMessage</span><span class="token punctuation">(</span><span class="token class-name">WebSocketSession</span> session<span class="token punctuation">,</span> <span class="token class-name">TextMessage</span> message<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">Exception</span> <span class="token punctuation">{</span>
        <span class="token comment">// 获得客户端传来的消息</span>
        <span class="token class-name">String</span> payload <span class="token operator">=</span> message<span class="token punctuation">.</span><span class="token function">getPayload</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">Object</span> token <span class="token operator">=</span> session<span class="token punctuation">.</span><span class="token function">getAttributes</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">&quot;token&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;server 接收到 &quot;</span> <span class="token operator">+</span> token <span class="token operator">+</span> <span class="token string">&quot; 发送的 &quot;</span> <span class="token operator">+</span> payload<span class="token punctuation">)</span><span class="token punctuation">;</span>
        session<span class="token punctuation">.</span><span class="token function">sendMessage</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">TextMessage</span><span class="token punctuation">(</span><span class="token string">&quot;server 发送给 &quot;</span> <span class="token operator">+</span> token <span class="token operator">+</span> <span class="token string">&quot; 消息 &quot;</span> <span class="token operator">+</span> payload <span class="token operator">+</span> <span class="token string">&quot; &quot;</span> <span class="token operator">+</span>    <span class="token class-name">LocalDateTime</span><span class="token punctuation">.</span><span class="token function">now</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/**
     * socket 断开连接时
     * <span class="token keyword">@param</span> <span class="token parameter">session</span>
     * <span class="token keyword">@param</span> <span class="token parameter">status</span>
     * <span class="token keyword">@throws</span> <span class="token reference"><span class="token class-name">Exception</span></span>
     */</span>
    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">afterConnectionClosed</span><span class="token punctuation">(</span><span class="token class-name">WebSocketSession</span> session<span class="token punctuation">,</span> <span class="token class-name">CloseStatus</span> status<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">Exception</span> <span class="token punctuation">{</span>
        <span class="token class-name">Object</span> token <span class="token operator">=</span> session<span class="token punctuation">.</span><span class="token function">getAttributes</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">&quot;token&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>token <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token comment">// 用户退出，移除缓存</span>
            <span class="token class-name">WsSessionManager</span><span class="token punctuation">.</span><span class="token function">remove</span><span class="token punctuation">(</span>token<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre></div><ul><li><strong>MyInterceptor用来拦截ws请求</strong><ul><li>通过实现 HandshakeInterceptor 接口来定义握手拦截器，注意这里与上面 Handler 的事件是不同的</li><li>这里是建立握手时的事件，分为握手前与握手后，而 Handler 的事件是<strong>在握手成功后的基础上建立</strong> socket 的连接。</li><li>所以在如果把认证放在这个步骤相对来说最节省服务器资源。它主要有两个方法 beforeHandshake 与 afterHandshake，</li><li>顾名思义一个在握手前触发，一个在握手后触发</li></ul></li></ul><div class="language-java" data-ext="java"><pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">com<span class="token punctuation">.</span>osvue<span class="token punctuation">.</span>env<span class="token punctuation">.</span>app<span class="token punctuation">.</span>msg</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>util<span class="token punctuation">.</span></span><span class="token class-name">HashMap</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>util<span class="token punctuation">.</span></span><span class="token class-name">Map</span></span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>apache<span class="token punctuation">.</span>commons<span class="token punctuation">.</span>lang<span class="token punctuation">.</span></span><span class="token class-name">StringUtils</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>http<span class="token punctuation">.</span>server<span class="token punctuation">.</span></span><span class="token class-name">ServerHttpRequest</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>http<span class="token punctuation">.</span>server<span class="token punctuation">.</span></span><span class="token class-name">ServerHttpResponse</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>stereotype<span class="token punctuation">.</span></span><span class="token class-name">Component</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>web<span class="token punctuation">.</span>socket<span class="token punctuation">.</span></span><span class="token class-name">WebSocketHandler</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>web<span class="token punctuation">.</span>socket<span class="token punctuation">.</span>server<span class="token punctuation">.</span></span><span class="token class-name">HandshakeInterceptor</span></span><span class="token punctuation">;</span>
<span class="token doc-comment comment">/**
 * 
 * @ClassName:  MyInterceptor   
 * @Description:TODO(拦截器 --》 http Auth handler)   
 * <span class="token keyword">@author</span>: hzq 
 * <span class="token keyword">@date</span>:   2023-4-14 17:27:04    
 * @Copyright: 2023
 */</span>
<span class="token annotation punctuation">@Component</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">MyInterceptor</span> <span class="token keyword">implements</span> <span class="token class-name">HandshakeInterceptor</span> <span class="token punctuation">{</span>
    <span class="token doc-comment comment">/**
     * 握手前
     * <span class="token keyword">@param</span> <span class="token parameter">request</span>
     * <span class="token keyword">@param</span> <span class="token parameter">response</span>
     * <span class="token keyword">@param</span> <span class="token parameter">wsHandler</span>
     * <span class="token keyword">@param</span> <span class="token parameter">attributes</span>
     * <span class="token keyword">@return</span>
     * <span class="token keyword">@throws</span> <span class="token reference"><span class="token class-name">Exception</span></span>
     */</span>
    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">boolean</span> <span class="token function">beforeHandshake</span><span class="token punctuation">(</span><span class="token class-name">ServerHttpRequest</span> request<span class="token punctuation">,</span> <span class="token class-name">ServerHttpResponse</span> response<span class="token punctuation">,</span> <span class="token class-name">WebSocketHandler</span> wsHandler<span class="token punctuation">,</span> <span class="token class-name">Map</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">,</span> <span class="token class-name">Object</span><span class="token punctuation">&gt;</span></span> attributes<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">Exception</span> <span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;握手开始&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">// 获得请求参数</span>
<span class="token comment">//        HashMap&lt;String, String&gt; paramMap = HttpUtil.decodeParamMap(request.getURI().getQuery(), &quot;utf-8&quot;);</span>
<span class="token comment">//        String uid = paramMap.get(&quot;token&quot;);</span>
        <span class="token class-name">String</span> uid <span class="token operator">=</span> <span class="token string">&quot;paramMap.&quot;</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>request<span class="token punctuation">.</span><span class="token function">getURI</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getQuery</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token class-name">StringUtils</span><span class="token punctuation">.</span><span class="token function">isNotBlank</span><span class="token punctuation">(</span>uid<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token comment">// 放入属性域</span>
            attributes<span class="token punctuation">.</span><span class="token function">put</span><span class="token punctuation">(</span><span class="token string">&quot;token&quot;</span><span class="token punctuation">,</span> uid<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;用户 token &quot;</span> <span class="token operator">+</span> uid <span class="token operator">+</span> <span class="token string">&quot; 握手成功！&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">return</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;用户登录已失效&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token doc-comment comment">/**
     * 握手后
     * <span class="token keyword">@param</span> <span class="token parameter">request</span>
     * <span class="token keyword">@param</span> <span class="token parameter">response</span>
     * <span class="token keyword">@param</span> <span class="token parameter">wsHandler</span>
     * <span class="token keyword">@param</span> <span class="token parameter">exception</span>
     */</span>
    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">afterHandshake</span><span class="token punctuation">(</span><span class="token class-name">ServerHttpRequest</span> request<span class="token punctuation">,</span> <span class="token class-name">ServerHttpResponse</span> response<span class="token punctuation">,</span> <span class="token class-name">WebSocketHandler</span> wsHandler<span class="token punctuation">,</span> <span class="token class-name">Exception</span> exception<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;握手完成&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><ul><li><strong>WsSessionManager</strong></li><li>简单通过 ConcurrentHashMap来实现了一个 session 池，用来保存已经登录的WebSocket 的 session。</li><li>服务端<strong>发送消息给客户端</strong>必须要通过这个 session。</li></ul><div class="language-java" data-ext="java"><pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">com<span class="token punctuation">.</span>osvue<span class="token punctuation">.</span>env<span class="token punctuation">.</span>app<span class="token punctuation">.</span>msg</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>io<span class="token punctuation">.</span></span><span class="token class-name">IOException</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>util<span class="token punctuation">.</span>concurrent<span class="token punctuation">.</span></span><span class="token class-name">ConcurrentHashMap</span></span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>web<span class="token punctuation">.</span>socket<span class="token punctuation">.</span></span><span class="token class-name">WebSocketSession</span></span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token import"><span class="token namespace">lombok<span class="token punctuation">.</span>extern<span class="token punctuation">.</span>slf4j<span class="token punctuation">.</span></span><span class="token class-name">Slf4j</span></span><span class="token punctuation">;</span>
<span class="token doc-comment comment">/**
 * 
 * @ClassName:  WsSessionManager   
 * @Description:TODO(这里用一句话描述这个类的作用)   
 * <span class="token keyword">@author</span>: hzq 
 * <span class="token keyword">@date</span>:   2023-4-14 17:27:50    
 * @Copyright: 2023
 */</span>
<span class="token annotation punctuation">@Slf4j</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">WsSessionManager</span> <span class="token punctuation">{</span>
    <span class="token doc-comment comment">/**
     * 保存连接 session 的地方
     */</span>
    <span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token class-name">ConcurrentHashMap</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">,</span> <span class="token class-name">WebSocketSession</span><span class="token punctuation">&gt;</span></span> <span class="token constant">SESSION_POOL</span> <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ConcurrentHashMap</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token doc-comment comment">/**
     * 添加 session
     * <span class="token keyword">@param</span> <span class="token parameter">key</span>
     */</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">add</span><span class="token punctuation">(</span><span class="token class-name">String</span> key<span class="token punctuation">,</span> <span class="token class-name">WebSocketSession</span> session<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// 添加 session</span>
        <span class="token constant">SESSION_POOL</span><span class="token punctuation">.</span><span class="token function">put</span><span class="token punctuation">(</span>key<span class="token punctuation">,</span> session<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/**
     * 删除 session,会返回删除的 session
     * <span class="token keyword">@param</span> <span class="token parameter">key</span>
     * <span class="token keyword">@return</span>
     */</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token class-name">WebSocketSession</span> <span class="token function">remove</span><span class="token punctuation">(</span><span class="token class-name">String</span> key<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// 删除 session</span>
        <span class="token keyword">return</span> <span class="token constant">SESSION_POOL</span><span class="token punctuation">.</span><span class="token function">remove</span><span class="token punctuation">(</span>key<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/**
     * 删除并同步关闭连接
     * <span class="token keyword">@param</span> <span class="token parameter">key</span>
     */</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">removeAndClose</span><span class="token punctuation">(</span><span class="token class-name">String</span> key<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">WebSocketSession</span> session <span class="token operator">=</span> <span class="token function">remove</span><span class="token punctuation">(</span>key<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>session <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">try</span> <span class="token punctuation">{</span>
                <span class="token comment">// 关闭连接</span>
                session<span class="token punctuation">.</span><span class="token function">close</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">IOException</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token comment">// todo: 关闭出现异常处理</span>
                e<span class="token punctuation">.</span><span class="token function">printStackTrace</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    <span class="token doc-comment comment">/**
     * 获得 session
     * <span class="token keyword">@param</span> <span class="token parameter">key</span>
     * <span class="token keyword">@return</span>
     */</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token class-name">WebSocketSession</span> <span class="token function">get</span><span class="token punctuation">(</span><span class="token class-name">String</span> key<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// 获得 session</span>
        <span class="token keyword">return</span> <span class="token constant">SESSION_POOL</span><span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>key<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><h2 id="个人实例" tabindex="-1"><a class="header-anchor" href="#个人实例" aria-hidden="true">#</a> 个人实例</h2><ul><li>spring boot websocket</li></ul><div class="language-java" data-ext="java"><pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">com<span class="token punctuation">.</span>osvue<span class="token punctuation">.</span>env<span class="token punctuation">.</span>app<span class="token punctuation">.</span>ws</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>io<span class="token punctuation">.</span></span><span class="token class-name">IOException</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>util<span class="token punctuation">.</span>concurrent<span class="token punctuation">.</span></span><span class="token class-name">ConcurrentHashMap</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>util<span class="token punctuation">.</span>concurrent<span class="token punctuation">.</span>atomic<span class="token punctuation">.</span></span><span class="token class-name">AtomicInteger</span></span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token import"><span class="token namespace">javax<span class="token punctuation">.</span>websocket<span class="token punctuation">.</span></span><span class="token class-name">OnClose</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">javax<span class="token punctuation">.</span>websocket<span class="token punctuation">.</span></span><span class="token class-name">OnError</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">javax<span class="token punctuation">.</span>websocket<span class="token punctuation">.</span></span><span class="token class-name">OnMessage</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">javax<span class="token punctuation">.</span>websocket<span class="token punctuation">.</span></span><span class="token class-name">OnOpen</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">javax<span class="token punctuation">.</span>websocket<span class="token punctuation">.</span></span><span class="token class-name">Session</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">javax<span class="token punctuation">.</span>websocket<span class="token punctuation">.</span>server<span class="token punctuation">.</span></span><span class="token class-name">PathParam</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">javax<span class="token punctuation">.</span>websocket<span class="token punctuation">.</span>server<span class="token punctuation">.</span></span><span class="token class-name">ServerEndpoint</span></span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>slf4j<span class="token punctuation">.</span></span><span class="token class-name">Logger</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>slf4j<span class="token punctuation">.</span></span><span class="token class-name">LoggerFactory</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>stereotype<span class="token punctuation">.</span></span><span class="token class-name">Component</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>util<span class="token punctuation">.</span></span><span class="token class-name">StringUtils</span></span><span class="token punctuation">;</span>
<span class="token doc-comment comment">/**
 * 
 * @ClassName:  MsgHandle   
 * @Description:TODO(处理消息)   
 * <span class="token keyword">@author</span>: hzq 
 * <span class="token keyword">@date</span>:   2023-4-25 17:04:46    
 * @Copyright: 2023
 */</span>
<span class="token annotation punctuation">@ServerEndpoint</span><span class="token punctuation">(</span><span class="token string">&quot;/itg/{userId}&quot;</span><span class="token punctuation">)</span>
<span class="token annotation punctuation">@Component</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">MsgHandle</span> <span class="token punctuation">{</span>
	
 
	    <span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token keyword">final</span> <span class="token class-name">Logger</span> log <span class="token operator">=</span> <span class="token class-name">LoggerFactory</span><span class="token punctuation">.</span><span class="token function">getLogger</span><span class="token punctuation">(</span><span class="token class-name">MsgHandle</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

	    <span class="token doc-comment comment">/**
	     * 当前在线连接数
	     */</span>
	    <span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token class-name">AtomicInteger</span> onlineCount <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">AtomicInteger</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

	    <span class="token doc-comment comment">/**
	     * 用来存放每个客户端对应的 WebSocketServer 对象
	     */</span>
	    <span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token class-name">ConcurrentHashMap</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">,</span> <span class="token class-name">MsgHandle</span><span class="token punctuation">&gt;</span></span> webSocketMap <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ConcurrentHashMap</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

	    <span class="token doc-comment comment">/**
	     * 与某个客户端的连接会话，需要通过它来给客户端发送数据
	     */</span>
	    <span class="token keyword">private</span> <span class="token class-name">Session</span> session<span class="token punctuation">;</span>

	    <span class="token doc-comment comment">/**
	     * 接收 userId
	     */</span>
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
	        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
	            webSocketMap<span class="token punctuation">.</span><span class="token function">put</span><span class="token punctuation">(</span>userId<span class="token punctuation">,</span> <span class="token keyword">this</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	            <span class="token function">addOnlineCount</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	        <span class="token punctuation">}</span>
	        log<span class="token punctuation">.</span><span class="token function">info</span><span class="token punctuation">(</span><span class="token string">&quot;用户连接:&quot;</span> <span class="token operator">+</span> userId <span class="token operator">+</span> <span class="token string">&quot;,当前在线人数为:&quot;</span> <span class="token operator">+</span> <span class="token function">getOnlineCount</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	        <span class="token keyword">try</span> <span class="token punctuation">{</span>
	            <span class="token function">sendMessage</span><span class="token punctuation">(</span><span class="token string">&quot;连接成功！&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
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
	        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span><span class="token class-name">StringUtils</span><span class="token punctuation">.</span><span class="token function">isEmpty</span><span class="token punctuation">(</span>message<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	            <span class="token keyword">try</span> <span class="token punctuation">{</span>
	            	<span class="token comment">/*
	                JSONObject jsonObject = JSON.parseObject(message);
	                jsonObject.put(&quot;fromUserId&quot;, this.userId);
	                String toUserId = jsonObject.getString(&quot;toUserId&quot;);
	                if (!StringUtils.isEmpty(toUserId) &amp;&amp; webSocketMap.containsKey(toUserId)) {
	                
	                    webSocketMap.get(toUserId).sendMessage(jsonObject.toJSONString());
	                } else {
	                    log.error(&quot;请求的 userId:&quot; + toUserId + &quot;不在该服务器上&quot;);
	                }
	                */</span>
	            <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">Exception</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
	                e<span class="token punctuation">.</span><span class="token function">printStackTrace</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	            <span class="token punctuation">}</span>
	        <span class="token punctuation">}</span>
	    <span class="token punctuation">}</span>

	    <span class="token doc-comment comment">/**
	     * 发生错误时调用
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

	    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">synchronized</span> <span class="token class-name">AtomicInteger</span> <span class="token function">getOnlineCount</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	        <span class="token keyword">return</span> onlineCount<span class="token punctuation">;</span>
	    <span class="token punctuation">}</span>

	    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">synchronized</span> <span class="token keyword">void</span> <span class="token function">addOnlineCount</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	    	<span class="token class-name">MsgHandle</span><span class="token punctuation">.</span>onlineCount<span class="token punctuation">.</span><span class="token function">getAndIncrement</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	    <span class="token punctuation">}</span>

	    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">synchronized</span> <span class="token keyword">void</span> <span class="token function">subOnlineCount</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	    	<span class="token class-name">MsgHandle</span><span class="token punctuation">.</span>onlineCount<span class="token punctuation">.</span><span class="token function">getAndDecrement</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	    <span class="token punctuation">}</span>

		<span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token class-name">ConcurrentHashMap</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">,</span> <span class="token class-name">MsgHandle</span><span class="token punctuation">&gt;</span></span> <span class="token function">getWebSocketMap</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			<span class="token keyword">return</span> webSocketMap<span class="token punctuation">;</span>
		<span class="token punctuation">}</span>

		<span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">setWebSocketMap</span><span class="token punctuation">(</span><span class="token class-name">ConcurrentHashMap</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">,</span> <span class="token class-name">MsgHandle</span><span class="token punctuation">&gt;</span></span> webSocketMap<span class="token punctuation">)</span> <span class="token punctuation">{</span>
			<span class="token class-name">MsgHandle</span><span class="token punctuation">.</span>webSocketMap <span class="token operator">=</span> webSocketMap<span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
	 
<span class="token punctuation">}</span>




<span class="token annotation punctuation">@Configuration</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">WebSocketConfig</span> <span class="token punctuation">{</span>
    <span class="token annotation punctuation">@Bean</span>
    <span class="token keyword">public</span> <span class="token class-name">ServerEndpointExporter</span> <span class="token function">serverEndpointExporter</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">ServerEndpointExporter</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
 
<span class="token punctuation">}</span>




<span class="token annotation punctuation">@RestController</span>
<span class="token annotation punctuation">@RequestMapping</span><span class="token punctuation">(</span><span class="token string">&quot;/ims&quot;</span><span class="token punctuation">)</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">MsgController</span> <span class="token punctuation">{</span>

	<span class="token annotation punctuation">@Resource</span>
	<span class="token class-name">MsgHandle</span> mh<span class="token punctuation">;</span>

	<span class="token annotation punctuation">@GetMapping</span><span class="token punctuation">(</span><span class="token string">&quot;msg/{msg}&quot;</span><span class="token punctuation">)</span>
	<span class="token keyword">public</span> <span class="token class-name">Map</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">,</span> <span class="token class-name">Object</span><span class="token punctuation">&gt;</span></span> <span class="token function">send</span><span class="token punctuation">(</span><span class="token annotation punctuation">@PathVariable</span> <span class="token class-name">String</span> msg<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token class-name">Map</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">,</span> <span class="token class-name">Object</span><span class="token punctuation">&gt;</span></span> mp <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">HashMap</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token class-name">String</span> amsg <span class="token operator">=</span> <span class="token string">&quot;  定时发送  &quot;</span> <span class="token operator">+</span> <span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toLocaleString</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">+</span> msg<span class="token punctuation">;</span>
		<span class="token keyword">try</span> <span class="token punctuation">{</span>
			mh<span class="token punctuation">.</span><span class="token function">getWebSocketMap</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">&quot;abccd&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">sendMessage</span><span class="token punctuation">(</span><span class="token string">&quot;你好 世界&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">IOException</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
			e<span class="token punctuation">.</span><span class="token function">printStackTrace</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
		<span class="token keyword">return</span> mp<span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>


</code></pre></div><ul><li><strong>简单前台</strong></li></ul><div class="language-html" data-ext="html"><pre class="language-html"><code><span class="token doctype"><span class="token punctuation">&lt;!</span><span class="token doctype-tag">DOCTYPE</span> <span class="token name">HTML</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>title</span><span class="token punctuation">&gt;</span></span>My WebSocket<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>title</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">&gt;</span></span>
 
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">&gt;</span></span>
Welcome<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>br</span><span class="token punctuation">/&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>text<span class="token punctuation">&quot;</span></span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>text<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token special-attr"><span class="token attr-name">onclick</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span><span class="token value javascript language-javascript"><span class="token function">send</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span><span class="token punctuation">&quot;</span></span></span><span class="token punctuation">&gt;</span></span>Send<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">&gt;</span></span>    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token special-attr"><span class="token attr-name">onclick</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span><span class="token value javascript language-javascript"><span class="token function">closeWebSocket</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span><span class="token punctuation">&quot;</span></span></span><span class="token punctuation">&gt;</span></span>Close<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>message<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">&gt;</span></span>
 
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>text/javascript<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
    <span class="token keyword">var</span> websocket <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
 
    <span class="token comment">//判断当前浏览器是否支持WebSocket  ,主要此处要更换为自己的地址</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token string">&#39;WebSocket&#39;</span> <span class="token keyword">in</span> window<span class="token punctuation">)</span><span class="token punctuation">{</span>
        websocket <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">WebSocket</span><span class="token punctuation">(</span><span class="token string">&quot;ws://localhost:8005/itg/abccd&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">else</span><span class="token punctuation">{</span>
        <span class="token function">alert</span><span class="token punctuation">(</span><span class="token string">&#39;Not support websocket&#39;</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
 
    <span class="token comment">//连接发生错误的回调方法</span>
    websocket<span class="token punctuation">.</span><span class="token function-variable function">onerror</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token function">setMessageInnerHTML</span><span class="token punctuation">(</span><span class="token string">&quot;error&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">;</span>
 
    <span class="token comment">//连接成功建立的回调方法</span>
    websocket<span class="token punctuation">.</span><span class="token function-variable function">onopen</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">event</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token function">setMessageInnerHTML</span><span class="token punctuation">(</span><span class="token string">&quot;open&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
 
    <span class="token comment">//接收到消息的回调方法</span>
    websocket<span class="token punctuation">.</span><span class="token function-variable function">onmessage</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">event</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token function">setMessageInnerHTML</span><span class="token punctuation">(</span>event<span class="token punctuation">.</span>data<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
 
    <span class="token comment">//连接关闭的回调方法</span>
    websocket<span class="token punctuation">.</span><span class="token function-variable function">onclose</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token function">setMessageInnerHTML</span><span class="token punctuation">(</span><span class="token string">&quot;close&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
 
    <span class="token comment">//监听窗口关闭事件，当窗口关闭时，主动去关闭websocket连接，防止连接还没断开就关闭窗口，server端会抛异常。</span>
    window<span class="token punctuation">.</span><span class="token function-variable function">onbeforeunload</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        websocket<span class="token punctuation">.</span><span class="token function">close</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
 
    <span class="token comment">//将消息显示在网页上</span>
    <span class="token keyword">function</span> <span class="token function">setMessageInnerHTML</span><span class="token punctuation">(</span><span class="token parameter">innerHTML</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">&#39;message&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span>innerHTML <span class="token operator">+=</span> innerHTML <span class="token operator">+</span> <span class="token string">&#39;&lt;br/&gt;&#39;</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
 
    <span class="token comment">//关闭连接</span>
    <span class="token keyword">function</span> <span class="token function">closeWebSocket</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        websocket<span class="token punctuation">.</span><span class="token function">close</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
 
    <span class="token comment">//发送消息</span>
    <span class="token keyword">function</span> <span class="token function">send</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">var</span> message <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">&#39;text&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span>value<span class="token punctuation">;</span>
        websocket<span class="token punctuation">.</span><span class="token function">send</span><span class="token punctuation">(</span>message<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>html</span><span class="token punctuation">&gt;</span></span>
</code></pre></div>`,31),e=[o];function c(l,u){return s(),a("div",null,e)}const i=n(p,[["render",c],["__file","index.html.vue"]]);export{i as default};
