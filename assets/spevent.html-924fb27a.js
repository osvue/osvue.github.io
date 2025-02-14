import{_ as n,p as s,q as a,a1 as t}from"./framework-d81ad7e5.js";const p={},e=t(`<h2 id="spring-event-实现发布-订阅模式" tabindex="-1"><a class="header-anchor" href="#spring-event-实现发布-订阅模式" aria-hidden="true">#</a> Spring Event 实现发布/订阅模式</h2><h4 id="面试过程中的主要问题" tabindex="-1"><a class="header-anchor" href="#面试过程中的主要问题" aria-hidden="true">#</a> 面试过程中的主要问题</h4><ul><li>spring中事件监听器消费事件是否支持自定义顺序？ <ul><li>监听器支持排序功能 <code>PriorityOrdered#getOrder ASC,Ordered或@Order ASC</code></li></ul></li></ul><ul><li>spring容器在创建bean的过程中，会判断bean是否为ApplicationListener类型，进而会将其作为监听器注册到<code>AbstractApplicationContext#applicationEventMulticaster</code>中，这块的源码在下面这个方法中</li></ul><h3 id="自定义事件" tabindex="-1"><a class="header-anchor" href="#自定义事件" aria-hidden="true">#</a> 自定义事件</h3><ul><li>RegEvent：<strong>继承 ApplicationEvent，并重写构造函数。</strong></li><li>ApplicationEvent 是 Spring 提供的所有应用程序事件扩展类。</li></ul><div class="language-java" data-ext="java"><pre class="language-java"><code><span class="token doc-comment comment">/**
 * 
 * @ClassName:  RegPojo   
 * <span class="token keyword">@author</span>: hzq 
 * <span class="token keyword">@date</span>:   2022-11-23 16:17:38    
 * @Copyright: 2022
 */</span>
<span class="token annotation punctuation">@Data</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">RegPojo</span> <span class="token keyword">implements</span> <span class="token class-name">Serializable</span><span class="token punctuation">{</span>
    <span class="token doc-comment comment">/**
	 * 注册信息
	 */</span>
	<span class="token keyword">private</span> <span class="token class-name">String</span> regId<span class="token punctuation">;</span>
	<span class="token doc-comment comment">/**
	 * 状态
	 */</span>
	<span class="token keyword">private</span> <span class="token class-name">Integer</span> regStatus<span class="token punctuation">;</span>
	<span class="token doc-comment comment">/**
	 * 用户ID
	 */</span>
	<span class="token keyword">private</span> <span class="token class-name">String</span> userId<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
 
<span class="token doc-comment comment">/**
 * <span class="token punctuation">{</span><span class="token keyword">@link</span> <span class="token reference"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>context<span class="token punctuation">.</span></span><span class="token class-name">ApplicationEvent</span></span><span class="token punctuation">}</span>
 * 
 * @ClassName: RegEvent
 * @Description:TODO(事件注册 event )
 * <span class="token keyword">@author</span>: hzq
 * <span class="token keyword">@date</span>: 2022-11-23 16:19:16
 * @Copyright: 2022
 */</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">RegEvent</span> <span class="token keyword">extends</span> <span class="token class-name">ApplicationEvent</span> <span class="token punctuation">{</span>

	<span class="token keyword">public</span> <span class="token class-name">RegEvent</span><span class="token punctuation">(</span><span class="token class-name">RegPojo</span> source<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">super</span><span class="token punctuation">(</span>source<span class="token punctuation">)</span><span class="token punctuation">;</span>

	<span class="token punctuation">}</span>
	
      
<span class="token punctuation">}</span>

</code></pre></div><h3 id="事件监听者" tabindex="-1"><a class="header-anchor" href="#事件监听者" aria-hidden="true">#</a> 事件监听者</h3><ul><li>事件监听者，有两种实现方式，一种是实现 <strong>ApplicationListener</strong> 接口，另一种是使用 <strong>@EventListener</strong> 注解。</li><li><code>@EventListener</code>注解的方式来创建一个监听器，直接将这个注解标注在一个bean的方法上，那么这个方法就可以用来处理感兴趣的事件</li></ul><div class="language-java" data-ext="java"><pre class="language-java"><code>
<span class="token doc-comment comment">/**
 * 
 * @ClassName:  ComputerListener   
 * @Description:TODO( use @EventListener listener event)   
 * <span class="token keyword">@author</span>: hzq 
 * <span class="token keyword">@date</span>:   2022-11-23 16:27:36    
 * @Copyright: 2022
 */</span>
<span class="token annotation punctuation">@Component</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">ComputerListener</span>   <span class="token punctuation">{</span>
    <span class="token doc-comment comment">/**
       param RegEvent  
     */</span>
	<span class="token annotation punctuation">@EventListener</span>
	<span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">regListener</span><span class="token punctuation">(</span><span class="token class-name">Object</span> obj<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;anno_____&quot;</span><span class="token operator">+</span>obj<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token doc-comment comment">/**
 * 
 * <span class="token keyword">@author</span>: hzq 
 * <span class="token keyword">@date</span>:   2022-11-23 16:24:19    
 * @Copyright: 2022
 */</span>
<span class="token annotation punctuation">@Component</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">PhoneApplicationListener</span> <span class="token keyword">implements</span> <span class="token class-name">ApplicationListener</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">RegEvent</span><span class="token punctuation">&gt;</span></span> <span class="token punctuation">{</span>

	<span class="token annotation punctuation">@Override</span>
	<span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">onApplicationEvent</span><span class="token punctuation">(</span><span class="token class-name">RegEvent</span> event<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		 <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;___phone____&quot;</span><span class="token operator">+</span>event<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>

<span class="token punctuation">}</span>

</code></pre></div><h3 id="发布事件" tabindex="-1"><a class="header-anchor" href="#发布事件" aria-hidden="true">#</a> 发布事件</h3><ul><li>Spring 提供的ApplicationEventPublisher来发布自定义事件。+</li></ul><div class="language-java" data-ext="java"><pre class="language-java"><code>	<span class="token annotation punctuation">@Autowired</span>
	<span class="token keyword">private</span> <span class="token class-name">ApplicationEventPublisher</span> applicationEventPublisher<span class="token punctuation">;</span>

	<span class="token annotation punctuation">@GetMapping</span><span class="token punctuation">(</span><span class="token string">&quot;event&quot;</span><span class="token punctuation">)</span>
	<span class="token keyword">public</span> <span class="token class-name">Map</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">,</span> <span class="token class-name">Object</span><span class="token punctuation">&gt;</span></span> <span class="token function">pubEnv</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token class-name">HashMap</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">,</span> <span class="token class-name">Object</span><span class="token punctuation">&gt;</span></span> map <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">HashMap</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token comment">// 消息</span>
		<span class="token class-name">RegPojo</span> rvo <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">RegPojo</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token comment">// 发布事件</span>
		applicationEventPublisher<span class="token punctuation">.</span><span class="token function">publishEvent</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">RegEvent</span><span class="token punctuation">(</span>rvo<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		map<span class="token punctuation">.</span><span class="token function">put</span><span class="token punctuation">(</span><span class="token string">&quot;key&quot;</span><span class="token punctuation">,</span> <span class="token number">1001</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token keyword">return</span> map<span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
</code></pre></div>`,13),o=[e];function c(l,i){return s(),a("div",null,o)}const k=n(p,[["render",c],["__file","spevent.html.vue"]]);export{k as default};
