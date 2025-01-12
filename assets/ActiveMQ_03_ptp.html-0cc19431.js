import{_ as n,p as s,q as a,a1 as t}from"./framework-d81ad7e5.js";const p={},o=t(`<h2 id="point-to-point" tabindex="-1"><a class="header-anchor" href="#point-to-point" aria-hidden="true">#</a> point to point</h2><h3 id="producter" tabindex="-1"><a class="header-anchor" href="#producter" aria-hidden="true">#</a> producter</h3><div class="language-xml" data-ext="xml"><pre class="language-xml"><code> 
     <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependencies</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>org.springframework.boot<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>spring-boot-starter-activemq<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">&gt;</span></span>

        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>org.apache.activemq<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>activemq-pool<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">&gt;</span></span>
<span class="token comment">&lt;!-- pool: enabled :true 时要加入这个 --&gt;</span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>org.messaginghub<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>pooled-jms<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">&gt;</span></span>

        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>org.springframework.boot<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>spring-boot-starter-web<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>org.projectlombok<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>lombok<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>optional</span><span class="token punctuation">&gt;</span></span>true<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>optional</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependencies</span><span class="token punctuation">&gt;</span></span> 

</code></pre></div><h4 id="yml" tabindex="-1"><a class="header-anchor" href="#yml" aria-hidden="true">#</a> yml</h4><div class="language-yaml" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">spring</span><span class="token punctuation">:</span>
  <span class="token key atrule">activemq</span><span class="token punctuation">:</span>
    <span class="token comment">#账号密码</span>
    <span class="token key atrule">user</span><span class="token punctuation">:</span> user
    <span class="token key atrule">password</span><span class="token punctuation">:</span> user
    <span class="token comment">#URL of the ActiveMQ broker.</span>
    <span class="token key atrule">broker-url</span><span class="token punctuation">:</span> tcp<span class="token punctuation">:</span>//127.0.0.1<span class="token punctuation">:</span><span class="token number">61616</span>
    <span class="token key atrule">in-memory</span><span class="token punctuation">:</span> <span class="token boolean important">false</span>
    <span class="token comment">#必须使用连接池</span>
    <span class="token key atrule">pool</span><span class="token punctuation">:</span>
      <span class="token comment">#启用连接池</span>
      <span class="token key atrule">enabled</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
      <span class="token comment">#连接池最大连接数</span>
      <span class="token key atrule">max-connections</span><span class="token punctuation">:</span> <span class="token number">5</span>
      <span class="token comment">#空闲的连接过期时间，默认为30秒</span>
      <span class="token key atrule">idle-timeout</span><span class="token punctuation">:</span> 30s


</code></pre></div><blockquote><p>producter提供一个产生消息的接口，调用一次产生一个消息【一个字符串作为消息。】</p></blockquote><h4 id="启动类增加注解" tabindex="-1"><a class="header-anchor" href="#启动类增加注解" aria-hidden="true">#</a> 启动类增加注解</h4><ul><li><strong>@EnableJms</strong></li></ul><div class="language-java" data-ext="java"><pre class="language-java"><code><span class="token annotation punctuation">@EnableJms</span>
<span class="token annotation punctuation">@MapperScan</span><span class="token punctuation">(</span>basePackages <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token string">&quot;com.example.demo.mapper&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token annotation punctuation">@SpringBootApplication</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">DemoApplication</span> <span class="token punctuation">{</span>

	<span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>

		<span class="token class-name">SpringApplication</span><span class="token punctuation">.</span><span class="token function">run</span><span class="token punctuation">(</span><span class="token class-name">DemoApplication</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">,</span> args<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><h3 id="发" tabindex="-1"><a class="header-anchor" href="#发" aria-hidden="true">#</a> 发</h3><div class="language-java" data-ext="java"><pre class="language-java"><code>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">javax<span class="token punctuation">.</span>jms<span class="token punctuation">.</span></span><span class="token class-name">Destination</span></span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>apache<span class="token punctuation">.</span>activemq<span class="token punctuation">.</span>command<span class="token punctuation">.</span></span><span class="token class-name">ActiveMQQueue</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>beans<span class="token punctuation">.</span>factory<span class="token punctuation">.</span>annotation<span class="token punctuation">.</span></span><span class="token class-name">Autowired</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>jms<span class="token punctuation">.</span>core<span class="token punctuation">.</span></span><span class="token class-name">JmsMessagingTemplate</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>web<span class="token punctuation">.</span>bind<span class="token punctuation">.</span>annotation<span class="token punctuation">.</span></span><span class="token class-name">RequestMapping</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>web<span class="token punctuation">.</span>bind<span class="token punctuation">.</span>annotation<span class="token punctuation">.</span></span><span class="token class-name">RestController</span></span><span class="token punctuation">;</span>

<span class="token annotation punctuation">@RestController</span><span class="token punctuation">(</span>value <span class="token operator">=</span> <span class="token string">&quot;jms&quot;</span><span class="token punctuation">)</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Producter</span> <span class="token punctuation">{</span>

	 <span class="token keyword">private</span> <span class="token keyword">final</span> <span class="token class-name">JmsMessagingTemplate</span> template<span class="token punctuation">;</span>

	    <span class="token annotation punctuation">@Autowired</span>
	    <span class="token keyword">public</span> <span class="token class-name">Producter</span><span class="token punctuation">(</span><span class="token class-name">JmsMessagingTemplate</span> template<span class="token punctuation">)</span> <span class="token punctuation">{</span>
	        <span class="token keyword">this</span><span class="token punctuation">.</span>template <span class="token operator">=</span> template<span class="token punctuation">;</span>
	    <span class="token punctuation">}</span>

	    <span class="token annotation punctuation">@RequestMapping</span><span class="token punctuation">(</span><span class="token string">&quot;/queue&quot;</span><span class="token punctuation">)</span>
	    <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">queue</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
	        <span class="token comment">// 构建一个消息, 名称是 queue01</span>
	        <span class="token class-name">Destination</span> destination <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ActiveMQQueue</span><span class="token punctuation">(</span><span class="token string">&quot;queue01&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	        <span class="token class-name">String</span> message <span class="token operator">=</span> <span class="token string">&quot;我是消息内容, &quot;</span> <span class="token operator">+</span> <span class="token class-name">System</span><span class="token punctuation">.</span><span class="token function">currentTimeMillis</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	        template<span class="token punctuation">.</span><span class="token function">convertAndSend</span><span class="token punctuation">(</span>destination<span class="token punctuation">,</span> message<span class="token punctuation">)</span><span class="token punctuation">;</span>
	        <span class="token keyword">return</span> <span class="token string">&quot;success&quot;</span><span class="token punctuation">;</span>
	    <span class="token punctuation">}</span> 
<span class="token punctuation">}</span>

<span class="token doc-comment comment">/**
定义 队列
 */</span>
<span class="token annotation punctuation">@Configuration</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">BeanConfig</span><span class="token punctuation">{</span>

    <span class="token annotation punctuation">@Bean</span>
    <span class="token class-name">Queue</span> <span class="token function">queue</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">ActiveMQQueue</span><span class="token punctuation">(</span><span class="token string">&quot;sync_org&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><ul><li>查看activemq的管理界面，Queues界面多了一条记录，名称是queue01，因为没有启动customer，没有消费者，所以这个消息会一直保存着。</li></ul><h3 id="customer" tabindex="-1"><a class="header-anchor" href="#customer" aria-hidden="true">#</a> customer</h3><blockquote><p>customer中不需要那么麻烦，创建一个class，然后加上注解，@JmsListener，然后指定监听的任务名称destination</p></blockquote><h4 id="收" tabindex="-1"><a class="header-anchor" href="#收" aria-hidden="true">#</a> 收</h4><div class="language-java" data-ext="java"><pre class="language-java"><code><span class="token annotation punctuation">@EnableJms</span>
<span class="token annotation punctuation">@Component</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Customer</span> <span class="token punctuation">{</span>
    <span class="token annotation punctuation">@JmsListener</span><span class="token punctuation">(</span>destination <span class="token operator">=</span> <span class="token string">&quot;queue01&quot;</span><span class="token punctuation">)</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">customer</span><span class="token punctuation">(</span><span class="token class-name">String</span> msg<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;接收到的消息:&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>err<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>msg<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre></div><blockquote><p>查看activemq状态，已经被接收了。</p></blockquote><h2 id="延时消息" tabindex="-1"><a class="header-anchor" href="#延时消息" aria-hidden="true">#</a> 延时消息</h2><h4 id="要使用延迟消息【比如2小时后才送达消息-默认是即时】-必须修改的配置-找到activemq-xml文件-添加schedulersupport-true这个属性" tabindex="-1"><a class="header-anchor" href="#要使用延迟消息【比如2小时后才送达消息-默认是即时】-必须修改的配置-找到activemq-xml文件-添加schedulersupport-true这个属性" aria-hidden="true">#</a> 要使用延迟消息【比如2小时后才送达消息，默认是即时】，必须修改的配置，找到activemq.xml文件，添加schedulerSupport=true这个属性</h4><p><code> &lt;broker xmlns=&quot;http://activemq.apache.org/schema/core&quot; brokerName=&quot;localhost&quot; schedulerSupport=&quot;true&quot; dataDirectory=&quot;\${activemq.data}&quot;&gt;</code></p><blockquote><p>延迟消息，构建一个handler</p></blockquote><div class="language-java" data-ext="java"><pre class="language-java"><code><span class="token annotation punctuation">@Slf4j</span>
<span class="token annotation punctuation">@Component</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">ActiveMQHandler</span> <span class="token punctuation">{</span>

    <span class="token keyword">private</span> <span class="token keyword">final</span> <span class="token class-name">JmsMessagingTemplate</span> template<span class="token punctuation">;</span>

    <span class="token annotation punctuation">@Autowired</span>
    <span class="token keyword">public</span> <span class="token class-name">ActiveMQHandler</span><span class="token punctuation">(</span><span class="token class-name">JmsMessagingTemplate</span> template<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>template <span class="token operator">=</span> template<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/**
     * 发送即时消息
     * <span class="token keyword">@param</span> <span class="token parameter">destination</span>
     * <span class="token keyword">@param</span> <span class="token parameter">data</span>
     */</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">send</span><span class="token punctuation">(</span><span class="token class-name">String</span> queueName<span class="token punctuation">,</span> <span class="token class-name">String</span> data<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        log<span class="token punctuation">.</span><span class="token function">info</span><span class="token punctuation">(</span><span class="token string">&quot;&gt;&gt;&gt;&gt;&gt;&gt;&gt;立即发送:&quot;</span> <span class="token operator">+</span> data<span class="token punctuation">)</span><span class="token punctuation">;</span>
        template<span class="token punctuation">.</span><span class="token function">convertAndSend</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">ActiveMQQueue</span><span class="token punctuation">(</span>queueName<span class="token punctuation">)</span><span class="token punctuation">,</span> data<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/**
     * 延时发送的信息
     * <span class="token keyword">@param</span> <span class="token parameter">name</span> 监听的名称
     * <span class="token keyword">@param</span> <span class="token parameter">data</span> 发送的数据
     * <span class="token keyword">@param</span> <span class="token parameter">time</span> 延时多少时间处理消息.
     */</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">delaySend</span><span class="token punctuation">(</span><span class="token class-name">String</span> name<span class="token punctuation">,</span> <span class="token class-name">String</span> data<span class="token punctuation">,</span> <span class="token keyword">long</span> time<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        log<span class="token punctuation">.</span><span class="token function">info</span><span class="token punctuation">(</span><span class="token string">&quot;====&gt;&gt;&gt; 延时任务:&quot;</span> <span class="token operator">+</span> name <span class="token operator">+</span> <span class="token string">&quot;,data:&quot;</span> <span class="token operator">+</span> data<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">//获取连接工厂</span>
        <span class="token class-name">ConnectionFactory</span> connectionFactory <span class="token operator">=</span> template<span class="token punctuation">.</span><span class="token function">getConnectionFactory</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">try</span> <span class="token punctuation">{</span>
            <span class="token comment">//获取连接</span>
            <span class="token keyword">assert</span> connectionFactory <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
            <span class="token class-name">Connection</span> connection <span class="token operator">=</span> connectionFactory<span class="token punctuation">.</span><span class="token function">createConnection</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            connection<span class="token punctuation">.</span><span class="token function">start</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token comment">//获取session, true开启事务，false关闭事务</span>
            <span class="token class-name">Session</span> session <span class="token operator">=</span> connection<span class="token punctuation">.</span><span class="token function">createSession</span><span class="token punctuation">(</span><span class="token class-name">Boolean</span><span class="token punctuation">.</span><span class="token constant">TRUE</span><span class="token punctuation">,</span> <span class="token class-name">Session</span><span class="token punctuation">.</span><span class="token constant">AUTO_ACKNOWLEDGE</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token comment">// 创建一个消息队列</span>
            <span class="token class-name">Destination</span> destination <span class="token operator">=</span> session<span class="token punctuation">.</span><span class="token function">createQueue</span><span class="token punctuation">(</span>name<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token class-name">MessageProducer</span> producer <span class="token operator">=</span> session<span class="token punctuation">.</span><span class="token function">createProducer</span><span class="token punctuation">(</span>destination<span class="token punctuation">)</span><span class="token punctuation">;</span>
            producer<span class="token punctuation">.</span><span class="token function">setDeliveryMode</span><span class="token punctuation">(</span><span class="token class-name">DeliveryMode</span><span class="token punctuation">.</span><span class="token constant">PERSISTENT</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token class-name">TextMessage</span> message <span class="token operator">=</span> session<span class="token punctuation">.</span><span class="token function">createTextMessage</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token comment">//设置延迟时间 //AMQ_SCHEDULED_DELAY</span>
            message<span class="token punctuation">.</span><span class="token function">setLongProperty</span><span class="token punctuation">(</span><span class="token class-name">ScheduledMessage</span><span class="token punctuation">.</span><span class="token constant">AMQ_SCHEDULED_DELAY</span><span class="token punctuation">,</span> time <span class="token operator">*</span> <span class="token number">1000L</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token comment">//发送</span>
            producer<span class="token punctuation">.</span><span class="token function">send</span><span class="token punctuation">(</span>message<span class="token punctuation">)</span><span class="token punctuation">;</span>
            session<span class="token punctuation">.</span><span class="token function">commit</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            producer<span class="token punctuation">.</span><span class="token function">close</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            session<span class="token punctuation">.</span><span class="token function">close</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            connection<span class="token punctuation">.</span><span class="token function">close</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">Exception</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            e<span class="token punctuation">.</span><span class="token function">printStackTrace</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><h3 id="延时发送" tabindex="-1"><a class="header-anchor" href="#延时发送" aria-hidden="true">#</a> 延时发送</h3><div class="language-java" data-ext="java"><pre class="language-java"><code>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>time<span class="token punctuation">.</span></span><span class="token class-name">LocalDateTime</span></span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>beans<span class="token punctuation">.</span>factory<span class="token punctuation">.</span>annotation<span class="token punctuation">.</span></span><span class="token class-name">Autowired</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>web<span class="token punctuation">.</span>bind<span class="token punctuation">.</span>annotation<span class="token punctuation">.</span></span><span class="token class-name">RequestMapping</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>web<span class="token punctuation">.</span>bind<span class="token punctuation">.</span>annotation<span class="token punctuation">.</span></span><span class="token class-name">RestController</span></span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token import"><span class="token namespace">com<span class="token punctuation">.</span>example<span class="token punctuation">.</span>demo<span class="token punctuation">.</span>config<span class="token punctuation">.</span></span><span class="token class-name">ActiveMQHandler</span></span><span class="token punctuation">;</span>
<span class="token annotation punctuation">@RestController</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Producter</span> <span class="token punctuation">{</span>

    <span class="token keyword">private</span> <span class="token keyword">final</span> <span class="token class-name">ActiveMQHandler</span> handler<span class="token punctuation">;</span>

    <span class="token annotation punctuation">@Autowired</span>
    <span class="token keyword">public</span> <span class="token class-name">Producter</span><span class="token punctuation">(</span><span class="token class-name">ActiveMQHandler</span> handler<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>handler <span class="token operator">=</span> handler<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/**
     * 即时消息
     * <span class="token keyword">@return</span>
     */</span>
    <span class="token annotation punctuation">@RequestMapping</span><span class="token punctuation">(</span><span class="token string">&quot;/queue&quot;</span><span class="token punctuation">)</span>
    <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">queue</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token comment">// 构建一个消息, 名称是 queue01</span>
        <span class="token class-name">String</span> message <span class="token operator">=</span> <span class="token string">&quot;我是消息内容, &quot;</span> <span class="token operator">+</span> <span class="token class-name">System</span><span class="token punctuation">.</span><span class="token function">currentTimeMillis</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        handler<span class="token punctuation">.</span><span class="token function">send</span><span class="token punctuation">(</span><span class="token string">&quot;queue01&quot;</span><span class="token punctuation">,</span> message<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> <span class="token string">&quot;success&quot;</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/**
     * 延迟消息
     * <span class="token keyword">@return</span>
     */</span>
    <span class="token annotation punctuation">@RequestMapping</span><span class="token punctuation">(</span><span class="token string">&quot;/delaySend&quot;</span><span class="token punctuation">)</span>
    <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">delaySend</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
         <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token number">10</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        
            <span class="token class-name">String</span> message <span class="token operator">=</span> <span class="token string">&quot;我是延迟消息内容, &quot;</span> <span class="token operator">+</span> i<span class="token operator">+</span><span class="token class-name">LocalDateTime</span><span class="token punctuation">.</span><span class="token function">now</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            handler<span class="token punctuation">.</span><span class="token function">delaySend</span><span class="token punctuation">(</span><span class="token string">&quot;delaySend01&quot;</span><span class="token punctuation">,</span>message<span class="token punctuation">,</span><span class="token number">20</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">return</span> <span class="token string">&quot;success&quot;</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><h3 id="延时接收" tabindex="-1"><a class="header-anchor" href="#延时接收" aria-hidden="true">#</a> 延时接收</h3><div class="language-java" data-ext="java"><pre class="language-java"><code>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>time<span class="token punctuation">.</span></span><span class="token class-name">LocalDateTime</span></span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>jms<span class="token punctuation">.</span>annotation<span class="token punctuation">.</span></span><span class="token class-name">EnableJms</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>jms<span class="token punctuation">.</span>annotation<span class="token punctuation">.</span></span><span class="token class-name">JmsListener</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>stereotype<span class="token punctuation">.</span></span><span class="token class-name">Component</span></span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token import"><span class="token namespace">lombok<span class="token punctuation">.</span>extern<span class="token punctuation">.</span>slf4j<span class="token punctuation">.</span></span><span class="token class-name">Slf4j</span></span><span class="token punctuation">;</span>


<span class="token annotation punctuation">@Slf4j</span>
<span class="token annotation punctuation">@EnableJms</span>
<span class="token annotation punctuation">@Component</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Customer</span> <span class="token punctuation">{</span>
    <span class="token annotation punctuation">@JmsListener</span><span class="token punctuation">(</span>destination <span class="token operator">=</span> <span class="token string">&quot;queue01&quot;</span><span class="token punctuation">)</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">customer</span><span class="token punctuation">(</span><span class="token class-name">String</span> msg<span class="token punctuation">)</span> <span class="token punctuation">{</span>
         <span class="token class-name">System</span><span class="token punctuation">.</span>err<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>msg<span class="token operator">+</span><span class="token string">&quot;queue01&quot;</span><span class="token operator">+</span><span class="token class-name">LocalDateTime</span><span class="token punctuation">.</span><span class="token function">now</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">+</span><span class="token string">&quot;------------queue01&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token annotation punctuation">@JmsListener</span><span class="token punctuation">(</span>destination <span class="token operator">=</span> <span class="token string">&quot;delaySend01&quot;</span><span class="token punctuation">)</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">customer2</span><span class="token punctuation">(</span><span class="token class-name">String</span> msg<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        log<span class="token punctuation">.</span><span class="token function">info</span><span class="token punctuation">(</span><span class="token string">&quot;接收延时消息:&quot;</span> <span class="token operator">+</span> msg<span class="token operator">+</span><span class="token string">&quot;local&quot;</span><span class="token operator">+</span><span class="token class-name">LocalDateTime</span><span class="token punctuation">.</span><span class="token function">now</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div>`,26),e=[o];function c(u,l){return s(),a("div",null,e)}const i=n(p,[["render",c],["__file","ActiveMQ_03_ptp.html.vue"]]);export{i as default};
