import{_ as o,M as l,p as c,q as p,R as n,t,N as e,a1 as a}from"./framework-d81ad7e5.js";const i={},r=a(`<p><strong>下载</strong></p><p><strong>解压</strong></p><p>在<code>init.d</code>下建立软连接</p><div class="language-text" data-ext="text"><pre class="language-text"><code>ln -s /usr/local/activemq/bin/activemq ./
</code></pre></div><p><strong>设置开启启动</strong></p><p><code>chkconfig activemq on</code></p><p>服务管理</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token function">service</span> activemq start
<span class="token function">service</span> activemq status
<span class="token function">service</span> activemq stop
</code></pre></div><h3 id="nio配置" tabindex="-1"><a class="header-anchor" href="#nio配置" aria-hidden="true">#</a> NIO配置</h3><p>默认配置为tcp，使用的是bio</p><div class="language-xml" data-ext="xml"><pre class="language-xml"><code> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>transportConnector</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>openwire<span class="token punctuation">&quot;</span></span> <span class="token attr-name">uri</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>tcp://0.0.0.0:61616?maximumConnections=1000<span class="token entity named-entity" title="&amp;">&amp;amp;</span>wireFormat.maxFrameSize=104857600<span class="token punctuation">&quot;</span></span><span class="token punctuation">/&gt;</span></span>
</code></pre></div><p>http://activemq.apache.org/configuring-version-5-transports</p><p>Nio是基于TCP的</p><p>客户端使用连接时也应使用nio</p><div class="language-java" data-ext="java"><pre class="language-java"><code>		<span class="token class-name">ActiveMQConnectionFactory</span> connectionFactory <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ActiveMQConnectionFactory</span><span class="token punctuation">(</span>
				<span class="token string">&quot;admin&quot;</span><span class="token punctuation">,</span>
				<span class="token string">&quot;admin&quot;</span><span class="token punctuation">,</span>
				<span class="token string">&quot;nio://localhost:61617&quot;</span>
				<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><p>Auto + Nio</p><div class="language-xml" data-ext="xml"><pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>transportConnector</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>auto+nio<span class="token punctuation">&quot;</span></span> <span class="token attr-name">uri</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>auto+nio://localhost:5671<span class="token punctuation">&quot;</span></span><span class="token punctuation">/&gt;</span></span>
</code></pre></div><p>自动适配协议</p><h3 id="openwire-可用配置选项" tabindex="-1"><a class="header-anchor" href="#openwire-可用配置选项" aria-hidden="true">#</a> OpenWire 可用配置选项</h3>`,19),u=n("thead",null,[n("tr",null,[n("th",null,"Option"),n("th",null,"Default"),n("th",null,"Description")])],-1),d=n("tr",null,[n("td",null,[n("code",null,"cacheEnabled")]),n("td",null,[n("code",null,"true")]),n("td",null,"Should commonly repeated values be cached so that less marshaling occurs?")],-1),h=n("tr",null,[n("td",null,[n("code",null,"cacheSize")]),n("td",null,[n("code",null,"1024")]),n("td",null,[t("When "),n("code",null,"cacheEnabled=true"),t(" then this parameter is used to specify the number of values to be cached.")])],-1),k=n("td",null,[n("code",null,"maxInactivityDuration")],-1),g=n("td",null,[n("code",null,"30000")],-1),m={href:"http://activemq.apache.org/activemq-inactivitymonitor",target:"_blank",rel:"noopener noreferrer"},f=n("code",null,"<= 0",-1),v=n("td",null,[n("code",null,"maxInactivityDurationInitalDelay")],-1),y=n("td",null,[n("code",null,"10000")],-1),w={href:"http://activemq.apache.org/activemq-inactivitymonitor",target:"_blank",rel:"noopener noreferrer"},b=n("code",null,"'Inital'",-1),_=n("tr",null,[n("td",null,[n("code",null,"maxFrameSize")]),n("td",null,[n("code",null,"MAX_LONG")]),n("td",null,"Maximum allowed frame size. Can help help prevent OOM DOS attacks.")],-1),S=n("tr",null,[n("td",null,[n("code",null,"sizePrefixDisabled")]),n("td",null,[n("code",null,"false")]),n("td",null,"Should the size of the packet be prefixed before each packet is marshaled?")],-1),M=n("tr",null,[n("td",null,[n("code",null,"stackTraceEnabled")]),n("td",null,[n("code",null,"true")]),n("td",null,"Should the stack trace of exception that occur on the broker be sent to the client?")],-1),x=n("tr",null,[n("td",null,[n("code",null,"tcpNoDelayEnabled")]),n("td",null,[n("code",null,"true")]),n("td",null,[t("Does not affect the wire format, but provides a hint to the peer that "),n("code",null,"TCP_NODELAY"),t(" should be enabled on the communications Socket.")])],-1),J=n("tr",null,[n("td",null,[n("code",null,"tightEncodingEnabled")]),n("td",null,[n("code",null,"true")]),n("td",null,"Should wire size be optimized over CPU usage?")],-1),T=n("h3",{id:"transport-可用配置选项",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#transport-可用配置选项","aria-hidden":"true"},"#"),t(" Transport 可用配置选项")],-1),q=n("thead",null,[n("tr",null,[n("th",null,"Option Name"),n("th",null,"Default Value"),n("th",null,"Description")])],-1),I=n("tr",null,[n("td",null,"backlog"),n("td",null,"5000"),n("td",null,"Specifies the maximum number of connections waiting to be accepted by the transport server socket.")],-1),D=n("tr",null,[n("td",null,"closeAsync"),n("td",null,"true"),n("td",null,[t("If "),n("strong",null,[n("code",null,"true")]),t(" the socket close call happens asynchronously. This parameter should be set to "),n("strong",null,[n("code",null,"false")]),t(" for protocols like STOMP, that are commonly used in situations where a new connection is created for each read or write. Doing so ensures the socket close call happens synchronously. A synchronous close prevents the broker from running out of available sockets owing to the rapid cycling of connections.")])],-1),E=n("tr",null,[n("td",null,"connectionTimeout"),n("td",null,"30000"),n("td",null,[t("If "),n("strong",null,[n("code",null,">=1")]),t(" the value sets the connection timeout in milliseconds. A value of "),n("strong",null,[n("code",null,"0")]),t(" denotes no timeout. Negative values are ignored.")])],-1),A=n("tr",null,[n("td",null,"daemon"),n("td",null,"false"),n("td",null,[t("If "),n("strong",null,[n("code",null,"true")]),t(" the transport thread will run in daemon mode. Set this parameter to "),n("strong",null,[n("code",null,"true")]),t(" when embedding the broker in a Spring container or a web container to allow the container to shut down correctly.")])],-1),P=n("tr",null,[n("td",null,"dynamicManagement"),n("td",null,"false"),n("td",null,[t("If "),n("strong",null,[n("code",null,"true")]),t(" the "),n("strong",null,[n("code",null,"TransportLogger")]),t(" can be managed by JMX.")])],-1),C=n("tr",null,[n("td",null,"ioBufferSize"),n("td",null,"8 * 1024"),n("td",null,[t("Specifies the size of the buffer to be used between the TCP layer and the OpenWire layer where "),n("strong",null,[n("code",null,"wireFormat")]),t(" based marshaling occurs.")])],-1),N=n("tr",null,[n("td",null,"jmxPort"),n("td",null,"1099"),n("td",null,[t("(Client Only) Specifies the port that will be used by the JMX server to manage the "),n("strong",null,[n("code",null,"TransportLoggers")]),t(". This should only be set, via URI, by either a client producer or consumer as the broker creates its own JMX server. Specifying an alternate JMX port is useful for developers that test a broker and client on the same machine and need to control both via JMX.")])],-1),j=n("td",null,"keepAlive",-1),O=n("td",null,"false",-1),F=n("strong",null,[n("code",null,"true"),t(",")],-1),L={href:"http://tldp.org/HOWTO/TCP-Keepalive-HOWTOoverview",target:"_blank",rel:"noopener noreferrer"},Q=n("em",null,"not",-1),W=n("strong",null,[n("code",null,"KeepAliveInfo")],-1),V=n("strong",null,[n("code",null,"InactivityMonitor"),t(".")],-1),z=n("tr",null,[n("td",null,"logWriterName"),n("td",null,"default"),n("td",null,[t("Sets the name of the "),n("strong",null,[n("code",null,"org.apache.activemq.transport.LogWriter")]),t(" implementation to use. Names are mapped to classes in the "),n("strong",null,[n("code",null,"resources/META-INF/services/org/apache/activemq/transport/logwriters")]),t(" directory.")])],-1),R=n("tr",null,[n("td",null,"maximumConnections"),n("td",null,"Integer.MAX_VALUE"),n("td",null,"The maximum number of sockets allowed for this broker.")],-1),B=n("tr",null,[n("td",null,"minmumWireFormatVersion"),n("td",null,"0"),n("td",null,[t("The minimum remote "),n("strong",null,[n("code",null,"wireFormat")]),t(" version that will be accepted (note the misspelling). Note: when the remote "),n("strong",null,[n("code",null,"wireFormat")]),t(" version is lower than the configured minimum acceptable version an exception will be thrown and the connection attempt will be refused. A value of "),n("strong",null,[n("code",null,"0")]),t(" denotes no checking of the remote "),n("strong",null,[n("code",null,"wireFormat")]),t(" version.")])],-1),K=n("tr",null,[n("td",null,"socketBufferSize"),n("td",null,"64 * 1024"),n("td",null,"Sets the size, in bytes, for the accepted socket’s read and write buffers.")],-1),X=n("tr",null,[n("td",null,"soLinger"),n("td",null,"Integer.MIN_VALUE"),n("td",null,[t("Sets the socket’s option "),n("strong",null,[n("code",null,"soLinger")]),t(" when the value is "),n("strong",null,[n("code",null,"> -1")]),t(". When set to "),n("strong",null,[n("code",null,"-1")]),t(" the "),n("strong",null,[n("code",null,"soLinger")]),t(" socket option is disabled.")])],-1),H=n("tr",null,[n("td",null,"soTimeout"),n("td",null,"0"),n("td",null,[t("Sets the socket’s read timeout in milliseconds. A value of "),n("strong",null,[n("code",null,"0")]),t(" denotes no timeout.")])],-1),U=n("tr",null,[n("td",null,"soWriteTimeout"),n("td",null,"0"),n("td",null,[t("Sets the socket’s write timeout in milliseconds. If the socket write operation does not complete before the specified timeout, the socket will be closed. A value of "),n("strong",null,"0"),t(" denotes no timeout.")])],-1),G=n("tr",null,[n("td",null,"stackSize"),n("td",null,"0"),n("td",null,[t("Set the stack size of the transport’s background reading thread. Must be specified in multiples of "),n("strong",null,[n("code",null,"128K")]),t(". A value of "),n("strong",null,[n("code",null,"0")]),t(" indicates that this parameter is ignored.")])],-1),Y=n("tr",null,[n("td",null,"startLogging"),n("td",null,"true"),n("td",null,[t("If "),n("strong",null,[n("code",null,"true")]),t(" the "),n("strong",null,[n("code",null,"TransportLogger")]),t(" object of the Transport stack will initially write messages to the log. This parameter is ignored unless "),n("strong",null,[n("code",null,"trace=true")]),t(".")])],-1),$=n("tr",null,[n("td",null,"tcpNoDelay"),n("td",null,"false"),n("td",null,[t("If "),n("strong",null,[n("code",null,"true")]),t(" the socket’s option "),n("strong",null,[n("code",null,"TCP_NODELAY")]),t(" is set. This disables Nagle’s algorithm for small packet transmission.")])],-1),Z=n("tr",null,[n("td",null,"threadName"),n("td",null,"N/A"),n("td",null,"When this parameter is specified the name of the thread is modified during the invocation of a transport. The remote address is appended so that a call stuck in a transport method will have the destination information in the thread name. This is extremely useful when using thread dumps for degugging.")],-1),nn=n("tr",null,[n("td",null,"trace"),n("td",null,"false"),n("td",null,[t("Causes all commands that are sent over the transport to be logged. To view the logged output define the "),n("strong",null,[n("code",null,"Log4j")]),t(" logger: "),n("strong",null,[n("code",null,"log4j.logger.org.apache.activemq.transport.TransportLogger=DEBUG")]),t(".")])],-1),tn=n("tr",null,[n("td",null,"trafficClass"),n("td",null,"0"),n("td",null,"The Traffic Class to be set on the socket.")],-1),sn=n("tr",null,[n("td",null,"diffServ"),n("td",null,"0"),n("td",null,[t("(Client only) The preferred Differentiated Services traffic class to be set on outgoing packets, as described in RFC 2475. Valid integer values: "),n("strong",null,[n("code",null,"[0,64]")]),t(". Valid string values: "),n("strong",null,[n("code",null,"EF"),t(", "),n("code",null,"AF[1-3][1-4]")]),t(" or "),n("strong",null,[n("code",null,"CS[0-7]")]),t(". With JDK 6, only works when the JVM uses the IPv4 stack. To use the IPv4 stack set the system property "),n("strong",null,[n("code",null,"java.net.preferIPv4Stack=true")]),t(". Note: it’s invalid to specify both ‘"),n("strong",null,"diffServ"),t(" and "),n("strong",null,"typeOfService"),t("’ at the same time as they share the same position in the TCP/IP packet headers")])],-1),en=n("tr",null,[n("td",null,"typeOfService"),n("td",null,"0"),n("td",null,[t("(Client only) The preferred Type of Service value to be set on outgoing packets. Valid integer values: "),n("strong",null,[n("code",null,"[0,256]")]),t(". With JDK 6, only works when the JVM is configured to use the IPv4 stack. To use the IPv4 stack set the system property "),n("strong",null,[n("code",null,"java.net.preferIPv4Stack=true")]),t(". Note: it’s invalid to specify both ‘"),n("strong",null,"diffServ"),t(" and "),n("strong",null,"typeOfService"),t("’ at the same time as they share the same position in the TCP/IP packet headers.")])],-1),an=n("tr",null,[n("td",null,"useInactivityMonitor"),n("td",null,"true"),n("td",null,[t("When "),n("strong",null,[n("code",null,"false")]),t(" the "),n("strong",null,[n("code",null,"InactivityMonitor")]),t(" is disabled and connections will never time out.")])],-1),on=n("tr",null,[n("td",null,"useKeepAlive"),n("td",null,"true"),n("td",null,[t("When "),n("strong",null,[n("code",null,"true"),t(),n("code",null,"KeepAliveInfo")]),t(" messages are sent on an idle connection to prevent it from timing out. If this parameter is "),n("strong",null,[n("code",null,"false")]),t(" connections will still timeout if no data was received on the connection for the specified amount of time.")])],-1),ln=n("tr",null,[n("td",null,"useLocalHost"),n("td",null,"false"),n("td",null,[t("When "),n("strong",null,[n("code",null,"true")]),t(" local connections will be made using the value "),n("strong",null,[n("code",null,"localhost")]),t(" instead of the actual local host name. On some operating systems, such as "),n("strong",null,[n("code",null,"OS X")]),t(", it’s not possible to connect as the local host name so "),n("strong",null,[n("code",null,"localhost")]),t(" is better.")])],-1),cn=n("tr",null,[n("td",null,"useQueueForAccept"),n("td",null,"true"),n("td",null,[t("When "),n("strong",null,[n("code",null,"true")]),t(" accepted sockets are placed onto a queue for asynchronous processing using a separate thread.")])],-1),pn=n("tr",null,[n("td",null,"wireFormat"),n("td",null,"default"),n("td",null,[t("The name of the "),n("strong",null,[n("code",null,"wireFormat")]),t(" factory to use.")])],-1),rn=n("tr",null,[n("td",null,"wireFormat.*"),n("td",null,"N/A"),n("td",null,[t("Properties with this prefix are used to configure the "),n("strong",null,[n("code",null,"wireFormat")]),t(".")])],-1),un=a(`<h2 id="activemq服务监控-hawtio" tabindex="-1"><a class="header-anchor" href="#activemq服务监控-hawtio" aria-hidden="true">#</a> ActiveMQ服务监控 Hawtio</h2><h3 id="官方网站" tabindex="-1"><a class="header-anchor" href="#官方网站" aria-hidden="true">#</a> 官方网站</h3><p>https://hawt.io/</p><h3 id="部署" tabindex="-1"><a class="header-anchor" href="#部署" aria-hidden="true">#</a> 部署</h3><h4 id="独立jar包的形式运行" tabindex="-1"><a class="header-anchor" href="#独立jar包的形式运行" aria-hidden="true">#</a> 独立jar包的形式运行</h4><p>java -jar</p><p>hawtio单程序运行，可以对多个远程ActiveMQ服务器进行监控</p><h4 id="嵌入activemq" tabindex="-1"><a class="header-anchor" href="#嵌入activemq" aria-hidden="true">#</a> 嵌入ActiveMQ</h4><ul><li>下载war包</li><li>复制到webapps下</li></ul><p><strong>jetty.xml bean标签下添加</strong></p><div class="language-text" data-ext="text"><pre class="language-text"><code>				&lt;bean class=&quot;org.eclipse.jetty.webapp.WebAppContext&quot;&gt;        
					&lt;property name=&quot;contextPath&quot; value=&quot;/hawtio&quot; /&gt;        
					&lt;property name=&quot;war&quot; value=&quot;\${activemq.home}/webapps/hawtio.war&quot; /&gt;        
					&lt;property name=&quot;logUrlOnStart&quot; value=&quot;true&quot; /&gt;  
				&lt;/bean&gt;
				
</code></pre></div><p><strong>ActiveMQ.bat下添加</strong></p><div class="language-text" data-ext="text"><pre class="language-text"><code>if &quot;%ACTIVEMQ_OPTS%&quot; == &quot;&quot; set ACTIVEMQ_OPTS=-Xms1G -Xmx1G -Dhawtio.realm=activemq -Dhawtio.role=admins -Dhawtio.rolePrincipalClasses=org.apache.activemq.jaas.GroupPrincipal -Djava.util.logging.config.file=logging.properties -Djava.security.auth.login.config=&quot;%ACTIVEMQ_CONF%\\login.config&quot; 

</code></pre></div><h2 id="jms消息结构-message" tabindex="-1"><a class="header-anchor" href="#jms消息结构-message" aria-hidden="true">#</a> JMS消息结构（Message）</h2><p>Message主要由三部分组成，分别是Header，Properties，Body， 详细如下：</p><table><thead><tr><th>Header</th><th>消息头，所有类型的这部分格式都是一样的</th></tr></thead><tbody><tr><td>Properties</td><td>属性，按类型可以分为应用设置的属性，标准属性和消息中间件定义的属性</td></tr><tr><td>Body</td><td>消息正文，指我们具体需要消息传输的内容。</td></tr></tbody></table><h3 id="header" tabindex="-1"><a class="header-anchor" href="#header" aria-hidden="true">#</a> Header</h3><p>JMS消息头使用的所有方法：</p><div class="language-java" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">interface</span> <span class="token class-name">Message</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token class-name">Destination</span> <span class="token function">getJMSDestination</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">JMSException</span><span class="token punctuation">;</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">setJMSDestination</span><span class="token punctuation">(</span><span class="token class-name">Destination</span> destination<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">JMSException</span><span class="token punctuation">;</span>
    <span class="token keyword">public</span> <span class="token keyword">int</span> <span class="token function">getJMSDeliveryMode</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">JMSException</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">setJMSDeliveryMode</span><span class="token punctuation">(</span><span class="token keyword">int</span> deliveryMode<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">JMSException</span><span class="token punctuation">;</span>
    <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">getJMSMessageID</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">JMSException</span><span class="token punctuation">;</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">setJMSMessageID</span><span class="token punctuation">(</span><span class="token class-name">String</span> id<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">JMSException</span><span class="token punctuation">;</span>
    <span class="token keyword">public</span> <span class="token keyword">long</span> <span class="token function">getJMSTimestamp</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">JMSException</span>&#39;
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">setJMSTimestamp</span><span class="token punctuation">(</span><span class="token keyword">long</span> timestamp<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">JMSException</span><span class="token punctuation">;</span>
    <span class="token keyword">public</span> <span class="token keyword">long</span> <span class="token function">getJMSExpiration</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">JMSException</span><span class="token punctuation">;</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">setJMSExpiration</span><span class="token punctuation">(</span><span class="token keyword">long</span> expiration<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">JMSException</span><span class="token punctuation">;</span>
    <span class="token keyword">public</span> <span class="token keyword">boolean</span> <span class="token function">getJMSRedelivered</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">JMSException</span><span class="token punctuation">;</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">setJMSRedelivered</span><span class="token punctuation">(</span><span class="token keyword">boolean</span> redelivered<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">JMSException</span><span class="token punctuation">;</span>
    <span class="token keyword">public</span> <span class="token keyword">int</span> <span class="token function">getJMSPriority</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">JMSException</span><span class="token punctuation">;</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">setJMSPriority</span><span class="token punctuation">(</span><span class="token keyword">int</span> priority<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">JMSException</span><span class="token punctuation">;</span>
    <span class="token keyword">public</span> <span class="token class-name">Destination</span> <span class="token function">getJMSReplyTo</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">JMSException</span><span class="token punctuation">;</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">setJMSReplyTo</span><span class="token punctuation">(</span><span class="token class-name">Destination</span> replyTo<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">JMSException</span><span class="token punctuation">;</span>
    <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">getJMScorrelationID</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">JMSException</span><span class="token punctuation">;</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">setJMSCorrelationID</span><span class="token punctuation">(</span><span class="token class-name">String</span> correlationID<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">JMSException</span><span class="token punctuation">;</span>
    <span class="token keyword">public</span> <span class="token keyword">byte</span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token function">getJMSCorrelationIDAsBytes</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">JMSException</span><span class="token punctuation">;</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">setJMSCorrelationIDAsBytes</span><span class="token punctuation">(</span><span class="token keyword">byte</span><span class="token punctuation">[</span><span class="token punctuation">]</span> correlationID<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">JMSException</span><span class="token punctuation">;</span>
    <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">getJMSType</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">JMSException</span><span class="token punctuation">;</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">setJMSType</span><span class="token punctuation">(</span><span class="token class-name">String</span> type<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">JMSException</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><p><strong>消息头分为自动设置和手动设置的内容</strong></p><h4 id="自动头信息" tabindex="-1"><a class="header-anchor" href="#自动头信息" aria-hidden="true">#</a> 自动头信息</h4><p>有一部分可以在创建Session和MessageProducer时设置</p><table><thead><tr><th>属性名称</th><th>说明</th><th>设置者</th></tr></thead><tbody><tr><td>JMSDeliveryMode</td><td>消息的发送模式，分为<strong>NON_PERSISTENT</strong>和<strong>PERSISTENT</strong>，即非持久性模式的和持久性模式。默认设置为<strong>PERSISTENT（持久性）。<strong>一条</strong>持久性消息</strong>应该被传送一次（就一次），这就意味着如果JMS提供者出现故障，该消息并不会丢失； 它会在服务器恢复正常之后再次传送。一条<strong>非持久性消息</strong>最多只会传送一次，这意味着如果JMS提供者出现故障，该消息可能会永久丢失。在持久性和非持久性这两种传送模式中，消息服务器都不会将一条消息向同一消息者发送一次以上（成功算一次）。</td><td>send</td></tr><tr><td>JMSMessageID</td><td>消息ID，需要以ID:开头，用于唯一地标识了一条消息</td><td>send</td></tr><tr><td>JMSTimestamp</td><td>消息发送时的时间。这条消息头用于确定发送消息和它被消费者实际接收的时间间隔。时间戳是一个以毫秒来计算的Long类型时间值（自1970年1月1日算起）。</td><td>send</td></tr><tr><td>JMSExpiration</td><td>消息的过期时间，以毫秒为单位，用来防止把过期的消息传送给消费者。任何直接通过编程方式来调用setJMSExpiration()方法都会被忽略。</td><td>send</td></tr><tr><td>JMSRedelivered</td><td>消息是否重复发送过，如果该消息之前发送过，那么这个属性的值需要被设置为true, 客户端可以根据这个属性的值来确认这个消息是否重复发送过，以避免重复处理。</td><td>Provider</td></tr><tr><td>JMSPriority</td><td>消息的优先级,0-4为普通的优化级，而5-9为高优先级，通常情况下，高优化级的消息需要优先发送。任何直接通过编程方式调用setJMSPriority()方法都将被忽略。</td><td>send</td></tr><tr><td>JMSDestination</td><td>消息发送的目的地，是一个Topic或Queue</td><td>send</td></tr></tbody></table><p><strong>JMSDeliveryMode</strong></p><div class="language-java" data-ext="java"><pre class="language-java"><code><span class="token class-name">MessageProducer</span> producer <span class="token operator">=</span> session<span class="token punctuation">.</span><span class="token function">createProducer</span><span class="token punctuation">(</span>topic<span class="token punctuation">)</span><span class="token punctuation">;</span>
producer<span class="token punctuation">.</span><span class="token function">setDeliveryMode</span><span class="token punctuation">(</span><span class="token class-name">DeliveryMode</span><span class="token punctuation">.</span><span class="token constant">NON_PERSISTENT</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><p><strong>JMSExpiration</strong></p><div class="language-java" data-ext="java"><pre class="language-java"><code>		<span class="token comment">//将过期时间设置为1小时（1000毫秒 ＊60 ＊60）</span>
		producer<span class="token punctuation">.</span><span class="token function">setTimeToLive</span><span class="token punctuation">(</span><span class="token number">1000</span> <span class="token operator">*</span> <span class="token number">60</span> <span class="token operator">*</span> <span class="token number">60</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><p><strong>JMSPriority</strong></p><div class="language-text" data-ext="text"><pre class="language-text"><code>producer.setPriority(9);
</code></pre></div><h4 id="手动头信息" tabindex="-1"><a class="header-anchor" href="#手动头信息" aria-hidden="true">#</a> 手动头信息</h4><table><thead><tr><th>属性名称</th><th>说明</th><th>设置者</th></tr></thead><tbody><tr><td>JMSCorrelationID</td><td>关联的消息ID，这个通常用在需要回传消息的时候</td><td>client</td></tr><tr><td>JMSReplyTo</td><td>消息回复的目的地，其值为一个Topic或Queue, 这个由发送者设置，但是接收者可以决定是否响应</td><td>client</td></tr><tr><td>JMSType</td><td>由消息发送者设置的消息类型，代表消息的结构，有的消息中间件可能会用到这个，但这个并不是是批消息的种类，比如TextMessage之类的</td><td>client</td></tr></tbody></table><p>从上表中我们可以看到，系统提供的标准头信息一共有10个属性，其中有6个是由send方法在调用时设置的，有三个是由客户端（client）设置的，还有一个是由消息中间件（Provider）设置的。</p><p>需要注意的是，这里</p><h2 id="下一代-activemq-6-artemis" tabindex="-1"><a class="header-anchor" href="#下一代-activemq-6-artemis" aria-hidden="true">#</a> 下一代 ActiveMQ 6？Artemis</h2><p>为下一代事件驱动的消息传递应用程序提供高性能、无阻塞的体系结构。</p><ul><li>包含JNDI，具有完整的JMS 1.1 &amp; 2.0客户端实现</li><li>高可用性共享存储、网络复制能力</li><li>简单而强大的寻址模型协议</li><li>灵活的负载均衡分配能力</li><li>针对低延迟持久性和JDBC的高级日志实现</li><li>与ActiveMQ 5的高功能奇偶校验，以简化迁移</li></ul><p>官方文档：http://activemq.apache.org/components/artemis/migration</p><ul><li>netty</li><li>自己的存储</li><li>优化传输流程</li><li>更高的性能</li><li>不再把所有的协议转换成openwire</li></ul><h2 id="高级使用" tabindex="-1"><a class="header-anchor" href="#高级使用" aria-hidden="true">#</a> 高级使用</h2><h3 id="jmscorrelationid" tabindex="-1"><a class="header-anchor" href="#jmscorrelationid" aria-hidden="true">#</a> JMSCorrelationID</h3><p>用于消息之间的关联，给人一种会话的感觉</p><hr><h3 id="jmsreplyto" tabindex="-1"><a class="header-anchor" href="#jmsreplyto" aria-hidden="true">#</a> <strong>JMSReplyTo</strong></h3><p>发送方可以接受到消息消费确认的地址</p><p>ActiveMQ5.10.x 以上版本必须使用 JDK1.8 才能正常使用。</p><p>ActiveMQ5.9.x 及以下版本使用 JDK1.7 即可正常使用。</p><h2 id="面试题" tabindex="-1"><a class="header-anchor" href="#面试题" aria-hidden="true">#</a> 面试题</h2><h3 id="activemq如何防止消息丢失-会不会丢消息" tabindex="-1"><a class="header-anchor" href="#activemq如何防止消息丢失-会不会丢消息" aria-hidden="true">#</a> ActiveMQ如何防止消息丢失？会不会丢消息？</h3><p>做高可用</p><p>死信队列</p><p>持久化</p><p>ack</p><p>消息重投</p><p>记录日志</p><p>接收（消费）确认</p><p>broker负载/限流</p><h3 id="如何防止重复消费" tabindex="-1"><a class="header-anchor" href="#如何防止重复消费" aria-hidden="true">#</a> 如何防止重复消费？</h3><p>消息幂等处理</p><p><code>map *ConcurrentHashMap* -&gt; putIfAbsent guava cache</code></p><h3 id="如何保证消费顺序" tabindex="-1"><a class="header-anchor" href="#如何保证消费顺序" aria-hidden="true">#</a> 如何保证消费顺序？</h3><p><code>queue 优先级别设置</code></p><p><code>多消费端 -&gt; </code></p>`,62);function dn(hn,kn){const s=l("ExternalLinkIcon");return c(),p("div",null,[r,n("table",null,[u,n("tbody",null,[d,h,n("tr",null,[k,g,n("td",null,[t("The maximum "),n("a",m,[t("inactivity"),e(s)]),t(" duration (before which the socket is considered dead) in milliseconds. On some platforms it can take a long time for a socket to die. Therefore allow the broker to kill connections when they have been inactive for the configured period of time. Used by some transports to enable a keep alive heart beat feature. Inactivity monitoring is disabled when set to a value "),f,t(".")])]),n("tr",null,[v,y,n("td",null,[t("The initial delay before starting "),n("a",w,[t("inactivity"),e(s)]),t(" checks. Yes, the word "),b,t(" is supposed to be misspelled like that.")])]),_,S,M,x,J])]),T,n("table",null,[q,n("tbody",null,[I,D,E,A,P,C,N,n("tr",null,[j,O,n("td",null,[t("If "),F,t(" enables "),n("a",L,[t("TCP KeepAlive"),e(s)]),t(" on the broker connection to prevent connections from timing out at the TCP level. This should "),Q,t(" be confused with "),W,t(" messages as used by the "),V])]),z,R,B,K,X,H,U,G,Y,$,Z,nn,tn,sn,en,an,on,ln,cn,pn,rn])]),un])}const mn=o(i,[["render",dn],["__file","ActiveMQ_04.html.vue"]]);export{mn as default};