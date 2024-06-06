import{_ as n,p as s,q as a,a1 as t}from"./framework-d81ad7e5.js";const p={},e=t(`<h2 id="hystrix" tabindex="-1"><a class="header-anchor" href="#hystrix" aria-hidden="true">#</a> Hystrix</h2><p>spring cloud 用的是 hystrix，是一个容错组件。</p><p>Hystrix实现了 超时机制和断路器模式。</p><p>Hystrix是Netflix开源的一个类库，用于隔离远程系统、服务或者第三方库，防止级联失败，从而提升系统的可用性与容错性。主要有以下几点功能：</p><ol><li>为系统提供保护机制。在依赖的服务出现高延迟或失败时，为系统提供保护和控制。</li><li>防止雪崩。</li><li>包裹请求：使用HystrixCommand（或HystrixObservableCommand）包裹对依赖的调用逻辑，每个命令在独立线程中运行。</li><li>跳闸机制：当某服务失败率达到一定的阈值时，Hystrix可以自动跳闸，停止请求该服务一段时间。</li><li>资源隔离：Hystrix为每个请求都的依赖都维护了一个小型线程池，如果该线程池已满，发往该依赖的请求就被立即拒绝，而不是排队等候，从而加速失败判定。防止级联失败。</li><li>快速失败：Fail Fast。同时能快速恢复。侧重点是：（不去真正的请求服务，发生异常再返回），而是直接失败。</li><li>监控：Hystrix可以实时监控运行指标和配置的变化，提供近实时的监控、报警、运维控制。</li><li>回退机制：fallback，当请求失败、超时、被拒绝，或当断路器被打开时，执行回退逻辑。回退逻辑我们自定义，提供优雅的服务降级。</li><li>自我修复：断路器打开一段时间后，会自动进入“半开”状态，可以进行打开，关闭，半开状态的转换。前面有介绍。</li></ol><h3 id="hystrix独立使用脱离spring-cloud" tabindex="-1"><a class="header-anchor" href="#hystrix独立使用脱离spring-cloud" aria-hidden="true">#</a> hystrix独立使用脱离spring cloud</h3><div class="language-java" data-ext="java"><pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">com<span class="token punctuation">.</span>osvue<span class="token punctuation">.</span></span><span class="token class-name">UserConsumer</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>util<span class="token punctuation">.</span>concurrent<span class="token punctuation">.</span></span><span class="token class-name">ExecutionException</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>util<span class="token punctuation">.</span>concurrent<span class="token punctuation">.</span></span><span class="token class-name">Future</span></span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token import"><span class="token namespace">com<span class="token punctuation">.</span>netflix<span class="token punctuation">.</span>hystrix<span class="token punctuation">.</span></span><span class="token class-name">HystrixCommand</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">com<span class="token punctuation">.</span>netflix<span class="token punctuation">.</span>hystrix<span class="token punctuation">.</span></span><span class="token class-name">HystrixCommandGroupKey</span></span><span class="token punctuation">;</span>

<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">HystrixTest</span> <span class="token keyword">extends</span> <span class="token class-name">HystrixCommand</span> <span class="token punctuation">{</span>

	<span class="token keyword">protected</span> <span class="token class-name">HystrixTest</span><span class="token punctuation">(</span><span class="token class-name">HystrixCommandGroupKey</span> group<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">super</span><span class="token punctuation">(</span>group<span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token comment">// TODO Auto-generated constructor stub</span>
	<span class="token punctuation">}</span>

	<span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>

		
	<span class="token comment">//	HystrixTest hystrixTest = new HystrixTest(HystrixCommandGroupKey.Factory.asKey(&quot;ext&quot;));</span>
		<span class="token doc-comment comment">/**
		 * execute()：以同步阻塞方式执行run()。以demo为例，调用execute()后，
		 * hystrix先创建一个新线程运行run()，
		 * 	接着调用程序要在execute()调用处一直阻塞着，直到run()运行完成 
		 */</span>
	<span class="token comment">//	System.out.println(&quot;result:&quot; + hystrixTest.execute());</span>
		
		<span class="token doc-comment comment">/**
		 * queue()：以异步非阻塞方式执行run()。以demo为例，
		 * 	一调用queue()就直接返回一个Future对象，
		 * 	同时hystrix创建一个新线程运行run()，
		 * 	调用程序通过Future.get()拿到run()的返回结果，
		 * 	而Future.get()是阻塞执行的
		 */</span>
		<span class="token class-name">Future</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">&gt;</span></span> futureResult <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">HystrixTest</span><span class="token punctuation">(</span><span class="token class-name">HystrixCommandGroupKey<span class="token punctuation">.</span>Factory</span><span class="token punctuation">.</span><span class="token function">asKey</span><span class="token punctuation">(</span><span class="token string">&quot;ext&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">queue</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token class-name">String</span> result <span class="token operator">=</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">;</span>
		<span class="token keyword">try</span> <span class="token punctuation">{</span>
			result <span class="token operator">=</span> futureResult<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">InterruptedException</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
			<span class="token comment">// TODO Auto-generated catch block</span>
			e<span class="token punctuation">.</span><span class="token function">printStackTrace</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">ExecutionException</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
			<span class="token comment">// TODO Auto-generated catch block</span>
			e<span class="token punctuation">.</span><span class="token function">printStackTrace</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
		
		<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;程序结果：&quot;</span><span class="token operator">+</span>result<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>

	<span class="token annotation punctuation">@Override</span>
	<span class="token keyword">protected</span> <span class="token class-name">Object</span> <span class="token function">run</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">Exception</span> <span class="token punctuation">{</span>
		<span class="token comment">// TODO Auto-generated method stub</span>
		<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;执行逻辑&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">1</span><span class="token operator">/</span><span class="token number">0</span><span class="token punctuation">;</span>
		<span class="token keyword">return</span> <span class="token string">&quot;ok&quot;</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>

	<span class="token annotation punctuation">@Override</span>
	<span class="token keyword">protected</span> <span class="token class-name">Object</span> <span class="token function">getFallback</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token comment">// TODO Auto-generated method stub</span>
		<span class="token keyword">return</span> <span class="token string">&quot;getFallbackgetFallback&quot;</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	
	
	
<span class="token punctuation">}</span>

</code></pre></div><h3 id="整合resttemplate" tabindex="-1"><a class="header-anchor" href="#整合resttemplate" aria-hidden="true">#</a> 整合Resttemplate</h3><h4 id="service" tabindex="-1"><a class="header-anchor" href="#service" aria-hidden="true">#</a> Service</h4><div class="language-java" data-ext="java"><pre class="language-java"><code>	<span class="token annotation punctuation">@HystrixCommand</span><span class="token punctuation">(</span>fallbackMethod <span class="token operator">=</span> <span class="token string">&quot;back&quot;</span><span class="token punctuation">)</span>
	<span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">alive</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token comment">// 自动处理URL</span>
		
		<span class="token class-name">RestTemplate</span> restTemplate <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">RestTemplate</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		
		<span class="token class-name">String</span> url <span class="token operator">=</span><span class="token string">&quot;http://user-provider/User/alive&quot;</span><span class="token punctuation">;</span>
		<span class="token class-name">String</span> object <span class="token operator">=</span> restTemplate<span class="token punctuation">.</span><span class="token function">getForObject</span><span class="token punctuation">(</span>url<span class="token punctuation">,</span> <span class="token class-name">String</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		
		<span class="token keyword">return</span> object<span class="token punctuation">;</span>
		
	<span class="token punctuation">}</span>
	
	
	<span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">back</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		
		<span class="token keyword">return</span> <span class="token string">&quot;请求失败~bbb...&quot;</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
</code></pre></div><h4 id="启动类" tabindex="-1"><a class="header-anchor" href="#启动类" aria-hidden="true">#</a> 启动类</h4><div class="language-text" data-ext="text"><pre class="language-text"><code>@EnableCircuitBreaker
</code></pre></div><h3 id="整合feign" tabindex="-1"><a class="header-anchor" href="#整合feign" aria-hidden="true">#</a> 整合Feign</h3><h4 id="接口" tabindex="-1"><a class="header-anchor" href="#接口" aria-hidden="true">#</a> 接口</h4><div class="language-java" data-ext="java"><pre class="language-java"><code><span class="token annotation punctuation">@FeignClient</span><span class="token punctuation">(</span>name <span class="token operator">=</span> <span class="token string">&quot;user-provider&quot;</span><span class="token punctuation">,</span>fallback <span class="token operator">=</span> <span class="token class-name">AliveBack</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">)</span>
<span class="token keyword">public</span> <span class="token keyword">interface</span> <span class="token class-name">ConsumerApi</span> <span class="token punctuation">{</span>

	<span class="token annotation punctuation">@RequestMapping</span><span class="token punctuation">(</span>value <span class="token operator">=</span> <span class="token string">&quot;/User/alive&quot;</span><span class="token punctuation">,</span>method <span class="token operator">=</span> <span class="token class-name">RequestMethod</span><span class="token punctuation">.</span><span class="token constant">GET</span><span class="token punctuation">)</span>
	<span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">alive</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	
	<span class="token annotation punctuation">@RequestMapping</span><span class="token punctuation">(</span>value <span class="token operator">=</span> <span class="token string">&quot;/User/getById&quot;</span><span class="token punctuation">,</span>method <span class="token operator">=</span> <span class="token class-name">RequestMethod</span><span class="token punctuation">.</span><span class="token constant">GET</span><span class="token punctuation">)</span>
	<span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">getById</span><span class="token punctuation">(</span><span class="token class-name">Integer</span> id<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><h4 id="实现" tabindex="-1"><a class="header-anchor" href="#实现" aria-hidden="true">#</a> 实现</h4><div class="language-java" data-ext="java"><pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">com<span class="token punctuation">.</span>osvue<span class="token punctuation">.</span></span><span class="token class-name">UserConsumer</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>util<span class="token punctuation">.</span></span><span class="token class-name">Map</span></span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>stereotype<span class="token punctuation">.</span></span><span class="token class-name">Component</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>web<span class="token punctuation">.</span>bind<span class="token punctuation">.</span>annotation<span class="token punctuation">.</span></span><span class="token class-name">RequestMapping</span></span><span class="token punctuation">;</span>
<span class="token annotation punctuation">@Component</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">AliveBack</span> <span class="token keyword">implements</span> <span class="token class-name">ConsumerApi</span><span class="token punctuation">{</span>

	<span class="token annotation punctuation">@Override</span>
	<span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">alive</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token comment">// TODO Auto-generated method stub</span>
		<span class="token keyword">return</span> <span class="token string">&quot;aaa&quot;</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>

	<span class="token annotation punctuation">@Override</span>
	<span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">getById</span><span class="token punctuation">(</span><span class="token class-name">Integer</span> id<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token comment">// TODO Auto-generated method stub</span>
		<span class="token keyword">return</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>

<span class="token punctuation">}</span>

</code></pre></div><ul><li>Feign 远程调用</li><li>整合 RestTemplate 、整合Feign</li></ul>`,18),o=[e];function c(l,u){return s(),a("div",null,o)}const k=n(p,[["render",c],["__file","SpringCloud07.html.vue"]]);export{k as default};
