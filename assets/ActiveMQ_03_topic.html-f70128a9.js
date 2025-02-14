import{_ as n,p as s,q as a,a1 as t}from"./framework-d81ad7e5.js";const p={},o=t(`<ul><li>广播</li></ul><h3 id="producter" tabindex="-1"><a class="header-anchor" href="#producter" aria-hidden="true">#</a> producter</h3><p><strong>producter handler增加topic，其实就是将原来的ActiveMQQueue换成了ActiveMQTopic</strong></p><div class="language-java" data-ext="java"><pre class="language-java"><code>
    <span class="token doc-comment comment">/** ActiveMQHandler
     * 发送订阅消息
     * <span class="token keyword">@param</span> <span class="token parameter">topicName</span>
     * <span class="token keyword">@param</span> <span class="token parameter">data</span>
     */</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">topic</span><span class="token punctuation">(</span><span class="token class-name">String</span> topicName<span class="token punctuation">,</span><span class="token class-name">String</span> data<span class="token punctuation">)</span><span class="token punctuation">{</span>
        log<span class="token punctuation">.</span><span class="token function">info</span><span class="token punctuation">(</span><span class="token string">&quot;----&gt;发送订阅消息&quot;</span> <span class="token operator">+</span> topicName <span class="token operator">+</span> <span class="token string">&quot;,data:&quot;</span> <span class="token operator">+</span> data<span class="token punctuation">)</span><span class="token punctuation">;</span>
        template<span class="token punctuation">.</span><span class="token function">convertAndSend</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">ActiveMQTopic</span><span class="token punctuation">(</span><span class="token string">&quot;topic01&quot;</span><span class="token punctuation">)</span><span class="token punctuation">,</span> data<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>


<span class="token comment">// controller 调用</span>

    <span class="token annotation punctuation">@RequestMapping</span><span class="token punctuation">(</span><span class="token string">&quot;/topic&quot;</span><span class="token punctuation">)</span>
    <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">topic</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        handler<span class="token punctuation">.</span><span class="token function">topic</span><span class="token punctuation">(</span><span class="token string">&quot;topic01&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;hello world&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> <span class="token string">&quot;success&quot;</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

</code></pre></div><div class="language-yaml" data-ext="yml"><pre class="language-yaml"><code> <span class="token key atrule">spring</span><span class="token punctuation">:</span> 
  <span class="token key atrule">jms</span><span class="token punctuation">:</span>
    <span class="token comment"># 如果要使用topic,开启配置</span>
    <span class="token key atrule">pub-sub-domain</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>

</code></pre></div><h3 id="customer" tabindex="-1"><a class="header-anchor" href="#customer" aria-hidden="true">#</a> customer</h3><p>设定了系统中的消息类别为topic：</p><p><code>pub-sub-domain: true</code></p><ul><li>为了同时支持topic和queue， 需要在消费者customer端配置指定连接工厂。</li></ul><div class="language-java" data-ext="java"><pre class="language-java"><code>
<span class="token annotation punctuation">@Configuration</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">ListenerContainerConfig</span> <span class="token punctuation">{</span>
 
 	<span class="token comment">// topic模式的ListenerContainer</span>
	<span class="token annotation punctuation">@Bean</span>
	<span class="token keyword">public</span> <span class="token class-name">JmsListenerContainerFactory</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token operator">?</span><span class="token punctuation">&gt;</span></span> <span class="token function">jmsListenerContainerTopic</span><span class="token punctuation">(</span><span class="token class-name">ConnectionFactory</span> activeMQConnectionFactory<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token class-name">DefaultJmsListenerContainerFactory</span> bean <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">DefaultJmsListenerContainerFactory</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		bean<span class="token punctuation">.</span><span class="token function">setPubSubDomain</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		bean<span class="token punctuation">.</span><span class="token function">setConnectionFactory</span><span class="token punctuation">(</span>activeMQConnectionFactory<span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token keyword">return</span> bean<span class="token punctuation">;</span>
	<span class="token punctuation">}</span>

	<span class="token comment">// queue模式的ListenerContainer</span>
	<span class="token annotation punctuation">@Bean</span>
	<span class="token keyword">public</span> <span class="token class-name">JmsListenerContainerFactory</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token operator">?</span><span class="token punctuation">&gt;</span></span> <span class="token function">jmsListenerContainerQueue</span><span class="token punctuation">(</span><span class="token class-name">ConnectionFactory</span> activeMQConnectionFactory<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token class-name">DefaultJmsListenerContainerFactory</span> bean <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">DefaultJmsListenerContainerFactory</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		bean<span class="token punctuation">.</span><span class="token function">setConnectionFactory</span><span class="token punctuation">(</span>activeMQConnectionFactory<span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token keyword">return</span> bean<span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><h4 id="监听不同队列" tabindex="-1"><a class="header-anchor" href="#监听不同队列" aria-hidden="true">#</a> 监听不同队列</h4><div class="language-java" data-ext="java"><pre class="language-java"><code>
<span class="token annotation punctuation">@Slf4j</span>
<span class="token annotation punctuation">@EnableJms</span>
<span class="token annotation punctuation">@Component</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Customer</span> <span class="token punctuation">{</span>
	
 
    
    <span class="token annotation punctuation">@JmsListener</span><span class="token punctuation">(</span>destination <span class="token operator">=</span> <span class="token string">&quot;queue01&quot;</span><span class="token punctuation">,</span>containerFactory <span class="token operator">=</span> <span class="token string">&quot;jmsListenerContainerQueue&quot;</span><span class="token punctuation">)</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">customer</span><span class="token punctuation">(</span><span class="token class-name">String</span> msg<span class="token punctuation">)</span> <span class="token punctuation">{</span>
         <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>msg<span class="token operator">+</span><span class="token string">&quot;queue01&quot;</span><span class="token operator">+</span><span class="token class-name">LocalDateTime</span><span class="token punctuation">.</span><span class="token function">now</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">+</span><span class="token string">&quot;------------queue01&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token annotation punctuation">@JmsListener</span><span class="token punctuation">(</span>destination <span class="token operator">=</span> <span class="token string">&quot;delaySend01&quot;</span><span class="token punctuation">,</span>containerFactory <span class="token operator">=</span> <span class="token string">&quot;jmsListenerContainerQueue&quot;</span><span class="token punctuation">)</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">customer2</span><span class="token punctuation">(</span><span class="token class-name">String</span> msg<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    	 <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;接收延时消息:&quot;</span> <span class="token operator">+</span> msg<span class="token operator">+</span><span class="token string">&quot;local&quot;</span><span class="token operator">+</span><span class="token class-name">LocalDateTime</span><span class="token punctuation">.</span><span class="token function">now</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    
    <span class="token annotation punctuation">@JmsListener</span><span class="token punctuation">(</span>destination <span class="token operator">=</span> <span class="token string">&quot;topic01&quot;</span><span class="token punctuation">,</span>containerFactory <span class="token operator">=</span> <span class="token string">&quot;jmsListenerContainerTopic&quot;</span><span class="token punctuation">)</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">customer3</span><span class="token punctuation">(</span><span class="token class-name">String</span> msg<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    	 <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;收到订阅消息----topic:&quot;</span> <span class="token operator">+</span> msg<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

<span class="token punctuation">}</span>
</code></pre></div><div class="language-yaml" data-ext="yml"><pre class="language-yaml"><code>
<span class="token key atrule">spring</span><span class="token punctuation">:</span>
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

</code></pre></div>`,13),e=[o];function c(u,l){return s(),a("div",null,e)}const k=n(p,[["render",c],["__file","ActiveMQ_03_topic.html.vue"]]);export{k as default};
