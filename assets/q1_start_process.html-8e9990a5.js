import{_ as n,p as s,q as a,a1 as t}from"./framework-d81ad7e5.js";const o="/assets/springbootStartProcess-aae5fe55.png",p={},e=t('<h1 id="springboot源码解析-一-启动过程" tabindex="-1"><a class="header-anchor" href="#springboot源码解析-一-启动过程" aria-hidden="true">#</a> springboot源码解析(一):启动过程</h1><p><img src="'+o+`" alt="alt"></p><h3 id="_1、springboot的入口程序" tabindex="-1"><a class="header-anchor" href="#_1、springboot的入口程序" aria-hidden="true">#</a> 1、springboot的入口程序</h3><div class="language-java" data-ext="java"><pre class="language-java"><code><span class="token annotation punctuation">@SpringBootApplication</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">StartupApplication</span> <span class="token punctuation">{</span>

    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">SpringApplication</span><span class="token punctuation">.</span><span class="token function">run</span><span class="token punctuation">(</span><span class="token class-name">StartupApplication</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">,</span> args<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><p>当程序开始执行之后，会调用SpringApplication的构造方法，进行某些初始参数的设置</p><div class="language-java" data-ext="java"><pre class="language-java"><code><span class="token comment">//创建一个新的实例，这个应用程序的上下文将要从指定的来源加载Bean</span>
<span class="token keyword">public</span> <span class="token class-name">SpringApplication</span><span class="token punctuation">(</span><span class="token class-name">ResourceLoader</span> resourceLoader<span class="token punctuation">,</span> <span class="token class-name">Class</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token operator">?</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span> primarySources<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">//资源初始化资源加载器，默认为null</span>
	<span class="token keyword">this</span><span class="token punctuation">.</span>resourceLoader <span class="token operator">=</span> resourceLoader<span class="token punctuation">;</span>
    <span class="token comment">//断言主要加载资源类不能为 null，否则报错</span>
	<span class="token class-name">Assert</span><span class="token punctuation">.</span><span class="token function">notNull</span><span class="token punctuation">(</span>primarySources<span class="token punctuation">,</span> <span class="token string">&quot;PrimarySources must not be null&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">//初始化主要加载资源类集合并去重</span>
	<span class="token keyword">this</span><span class="token punctuation">.</span>primarySources <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">LinkedHashSet</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token class-name">Arrays</span><span class="token punctuation">.</span><span class="token function">asList</span><span class="token punctuation">(</span>primarySources<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">//推断当前 WEB 应用类型，一共有三种：NONE,SERVLET,REACTIVE</span>
	<span class="token keyword">this</span><span class="token punctuation">.</span>webApplicationType <span class="token operator">=</span> <span class="token class-name">WebApplicationType</span><span class="token punctuation">.</span><span class="token function">deduceFromClasspath</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">//设置应用上线文初始化器,从&quot;META-INF/spring.factories&quot;读取ApplicationContextInitializer类的实例名称集合并去重，并进行set去重。（一共7个）</span>
	<span class="token function">setInitializers</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token class-name">Collection</span><span class="token punctuation">)</span> <span class="token function">getSpringFactoriesInstances</span><span class="token punctuation">(</span><span class="token class-name">ApplicationContextInitializer</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">//设置监听器,从&quot;META-INF/spring.factories&quot;读取ApplicationListener类的实例名称集合并去重，并进行set去重。（一共11个）</span>
	<span class="token function">setListeners</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token class-name">Collection</span><span class="token punctuation">)</span> <span class="token function">getSpringFactoriesInstances</span><span class="token punctuation">(</span><span class="token class-name">ApplicationListener</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">//推断主入口应用类，通过当前调用栈，获取Main方法所在类，并赋值给mainApplicationClass</span>
	<span class="token keyword">this</span><span class="token punctuation">.</span>mainApplicationClass <span class="token operator">=</span> <span class="token function">deduceMainApplicationClass</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
</code></pre></div><p>在上述构造方法中，有一个判断应用类型的方法，用来判断当前应用程序的类型：</p><div class="language-java" data-ext="java"><pre class="language-java"><code>	<span class="token keyword">static</span> <span class="token class-name">WebApplicationType</span> <span class="token function">deduceFromClasspath</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token class-name">ClassUtils</span><span class="token punctuation">.</span><span class="token function">isPresent</span><span class="token punctuation">(</span><span class="token constant">WEBFLUX_INDICATOR_CLASS</span><span class="token punctuation">,</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token operator">&amp;&amp;</span> <span class="token operator">!</span><span class="token class-name">ClassUtils</span><span class="token punctuation">.</span><span class="token function">isPresent</span><span class="token punctuation">(</span><span class="token constant">WEBMVC_INDICATOR_CLASS</span><span class="token punctuation">,</span> <span class="token keyword">null</span><span class="token punctuation">)</span>
				<span class="token operator">&amp;&amp;</span> <span class="token operator">!</span><span class="token class-name">ClassUtils</span><span class="token punctuation">.</span><span class="token function">isPresent</span><span class="token punctuation">(</span><span class="token constant">JERSEY_INDICATOR_CLASS</span><span class="token punctuation">,</span> <span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			<span class="token keyword">return</span> <span class="token class-name">WebApplicationType</span><span class="token punctuation">.</span><span class="token constant">REACTIVE</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
		<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token class-name">String</span> className <span class="token operator">:</span> <span class="token constant">SERVLET_INDICATOR_CLASSES</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			<span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span><span class="token class-name">ClassUtils</span><span class="token punctuation">.</span><span class="token function">isPresent</span><span class="token punctuation">(</span>className<span class="token punctuation">,</span> <span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
				<span class="token keyword">return</span> <span class="token class-name">WebApplicationType</span><span class="token punctuation">.</span><span class="token constant">NONE</span><span class="token punctuation">;</span>
			<span class="token punctuation">}</span>
		<span class="token punctuation">}</span>
		<span class="token keyword">return</span> <span class="token class-name">WebApplicationType</span><span class="token punctuation">.</span><span class="token constant">SERVLET</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
<span class="token comment">//WebApplicationType的类型</span>
<span class="token keyword">public</span> <span class="token keyword">enum</span> <span class="token class-name">WebApplicationType</span> <span class="token punctuation">{</span>

	<span class="token doc-comment comment">/**
	 * The application should not run as a web application and should not start an
	 * embedded web server.
	 * 非web项目
	 */</span>
	<span class="token constant">NONE</span><span class="token punctuation">,</span>

	<span class="token doc-comment comment">/**
	 * The application should run as a servlet-based web application and should start an
	 * embedded servlet web server.
	 * servlet web 项目
	 */</span>
	<span class="token constant">SERVLET</span><span class="token punctuation">,</span>

	<span class="token doc-comment comment">/**
	 * The application should run as a reactive web application and should start an
	 * embedded reactive web server.
	 * 响应式 web 项目
	 */</span>
	<span class="token constant">REACTIVE</span><span class="token punctuation">;</span>
</code></pre></div><p>springboot启动的运行方法，可以看到主要是各种运行环境的准备工作</p><div class="language-java" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token class-name">ConfigurableApplicationContext</span> <span class="token function">run</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">//1、创建并启动计时监控类</span>
	<span class="token class-name">StopWatch</span> stopWatch <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">StopWatch</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	stopWatch<span class="token punctuation">.</span><span class="token function">start</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">//2、初始化应用上下文和异常报告集合</span>
	<span class="token class-name">ConfigurableApplicationContext</span> context <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
	<span class="token class-name">Collection</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">SpringBootExceptionReporter</span><span class="token punctuation">&gt;</span></span> exceptionReporters <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ArrayList</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">//3、设置系统属性“java.awt.headless”的值，默认为true，用于运行headless服务器，进行简单的图像处理，多用于在缺少显示屏、键盘或者鼠标时的系统配置，很多监控工具如jconsole 需要将该值设置为true</span>
	<span class="token function">configureHeadlessProperty</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">//4、创建所有spring运行监听器并发布应用启动事件，简单说的话就是获取SpringApplicationRunListener类型的实例（EventPublishingRunListener对象），并封装进SpringApplicationRunListeners对象，然后返回这个SpringApplicationRunListeners对象。说的再简单点，getRunListeners就是准备好了运行时监听器EventPublishingRunListener。</span>
	<span class="token class-name">SpringApplicationRunListeners</span> listeners <span class="token operator">=</span> <span class="token function">getRunListeners</span><span class="token punctuation">(</span>args<span class="token punctuation">)</span><span class="token punctuation">;</span>
	listeners<span class="token punctuation">.</span><span class="token function">starting</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token keyword">try</span> <span class="token punctuation">{</span>
        <span class="token comment">//5、初始化默认应用参数类</span>
		<span class="token class-name">ApplicationArguments</span> applicationArguments <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">DefaultApplicationArguments</span><span class="token punctuation">(</span>args<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">//6、根据运行监听器和应用参数来准备spring环境</span>
		<span class="token class-name">ConfigurableEnvironment</span> environment <span class="token operator">=</span> <span class="token function">prepareEnvironment</span><span class="token punctuation">(</span>listeners<span class="token punctuation">,</span> applicationArguments<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">//将要忽略的bean的参数打开</span>
		<span class="token function">configureIgnoreBeanInfo</span><span class="token punctuation">(</span>environment<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">//7、创建banner打印类</span>
		<span class="token class-name">Banner</span> printedBanner <span class="token operator">=</span> <span class="token function">printBanner</span><span class="token punctuation">(</span>environment<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">//8、创建应用上下文，可以理解为创建一个容器</span>
		context <span class="token operator">=</span> <span class="token function">createApplicationContext</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">//9、准备异常报告器，用来支持报告关于启动的错误</span>
		exceptionReporters <span class="token operator">=</span> <span class="token function">getSpringFactoriesInstances</span><span class="token punctuation">(</span><span class="token class-name">SpringBootExceptionReporter</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">,</span>
					<span class="token keyword">new</span> <span class="token class-name">Class</span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token punctuation">{</span> <span class="token class-name">ConfigurableApplicationContext</span><span class="token punctuation">.</span><span class="token keyword">class</span> <span class="token punctuation">}</span><span class="token punctuation">,</span> context<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">//10、准备应用上下文，该步骤包含一个非常关键的操作，将启动类注入容器，为后续开启自动化提供基础</span>
		<span class="token function">prepareContext</span><span class="token punctuation">(</span>context<span class="token punctuation">,</span> environment<span class="token punctuation">,</span> listeners<span class="token punctuation">,</span> applicationArguments<span class="token punctuation">,</span> printedBanner<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">//11、刷新应用上下文</span>
		<span class="token function">refreshContext</span><span class="token punctuation">(</span>context<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">//12、应用上下文刷新后置处理，做一些扩展功能</span>
		<span class="token function">afterRefresh</span><span class="token punctuation">(</span>context<span class="token punctuation">,</span> applicationArguments<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">//13、停止计时监控类</span>
		stopWatch<span class="token punctuation">.</span><span class="token function">stop</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">//14、输出日志记录执行主类名、时间信息</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>logStartupInfo<span class="token punctuation">)</span> <span class="token punctuation">{</span>
				<span class="token keyword">new</span> <span class="token class-name">StartupInfoLogger</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>mainApplicationClass<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">logStarted</span><span class="token punctuation">(</span><span class="token function">getApplicationLog</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> stopWatch<span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
        <span class="token comment">//15、发布应用上下文启动监听事件</span>
		listeners<span class="token punctuation">.</span><span class="token function">started</span><span class="token punctuation">(</span>context<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">//16、执行所有的Runner运行器</span>
		<span class="token function">callRunners</span><span class="token punctuation">(</span>context<span class="token punctuation">,</span> applicationArguments<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span><span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">Throwable</span> ex<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token function">handleRunFailure</span><span class="token punctuation">(</span>context<span class="token punctuation">,</span> ex<span class="token punctuation">,</span> exceptionReporters<span class="token punctuation">,</span> listeners<span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">IllegalStateException</span><span class="token punctuation">(</span>ex<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	<span class="token keyword">try</span> <span class="token punctuation">{</span>
        <span class="token comment">//17、发布应用上下文就绪事件</span>
		listeners<span class="token punctuation">.</span><span class="token function">running</span><span class="token punctuation">(</span>context<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span><span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">Throwable</span> ex<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token function">handleRunFailure</span><span class="token punctuation">(</span>context<span class="token punctuation">,</span> ex<span class="token punctuation">,</span> exceptionReporters<span class="token punctuation">,</span> <span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">IllegalStateException</span><span class="token punctuation">(</span>ex<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
    <span class="token comment">//18、返回应用上下文</span>
	<span class="token keyword">return</span> context<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><p>下面详细介绍各个启动的环节：</p><p>1、创建并启动计时监控类，可以看到记录当前任务的名称，默认是空字符串，然后记录当前springboot应用启动的开始时间。</p><div class="language-java" data-ext="java"><pre class="language-java"><code><span class="token class-name">StopWatch</span> stopWatch <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">StopWatch</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
stopWatch<span class="token punctuation">.</span><span class="token function">start</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">//详细源代码</span>
<span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">start</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">IllegalStateException</span> <span class="token punctuation">{</span>
	<span class="token function">start</span><span class="token punctuation">(</span><span class="token string">&quot;&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">start</span><span class="token punctuation">(</span><span class="token class-name">String</span> taskName<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">IllegalStateException</span> <span class="token punctuation">{</span>
	<span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>currentTaskName <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">IllegalStateException</span><span class="token punctuation">(</span><span class="token string">&quot;Can&#39;t start StopWatch: it&#39;s already running&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	<span class="token keyword">this</span><span class="token punctuation">.</span>currentTaskName <span class="token operator">=</span> taskName<span class="token punctuation">;</span>
	<span class="token keyword">this</span><span class="token punctuation">.</span>startTimeNanos <span class="token operator">=</span> <span class="token class-name">System</span><span class="token punctuation">.</span><span class="token function">nanoTime</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><p>2、初始化应用上下文和异常报告集合</p><div class="language-java" data-ext="java"><pre class="language-java"><code><span class="token class-name">ConfigurableApplicationContext</span> context <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
<span class="token class-name">Collection</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">SpringBootExceptionReporter</span><span class="token punctuation">&gt;</span></span> exceptionReporters <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ArrayList</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><p>3、设置系统属性java.awt.headless的值：</p><div class="language-java" data-ext="java"><pre class="language-java"><code><span class="token comment">/*
java.awt.headless模式是在缺少显示屏、键盘或者鼠标的系统配置
当配置了如下属性之后，应用程序可以执行如下操作：
	1、创建轻量级组件
	2、收集关于可用的字体、字体指标和字体设置的信息
	3、设置颜色来渲染准备图片
	4、创造和获取图像，为渲染准备图片
	5、使用java.awt.PrintJob,java.awt.print.*和javax.print.*类里的方法进行打印
*/</span>
<span class="token keyword">private</span> <span class="token keyword">void</span> <span class="token function">configureHeadlessProperty</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token class-name">System</span><span class="token punctuation">.</span><span class="token function">setProperty</span><span class="token punctuation">(</span><span class="token constant">SYSTEM_PROPERTY_JAVA_AWT_HEADLESS</span><span class="token punctuation">,</span>
				<span class="token class-name">System</span><span class="token punctuation">.</span><span class="token function">getProperty</span><span class="token punctuation">(</span><span class="token constant">SYSTEM_PROPERTY_JAVA_AWT_HEADLESS</span><span class="token punctuation">,</span> <span class="token class-name">Boolean</span><span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>headless<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><p>4、创建所有spring运行监听器并发布应用启动事件</p><div class="language-java" data-ext="java"><pre class="language-java"><code><span class="token class-name">SpringApplicationRunListeners</span> listeners <span class="token operator">=</span> <span class="token function">getRunListeners</span><span class="token punctuation">(</span>args<span class="token punctuation">)</span><span class="token punctuation">;</span>
listeners<span class="token punctuation">.</span><span class="token function">starting</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">//创建spring监听器</span>
<span class="token keyword">private</span> <span class="token class-name">SpringApplicationRunListeners</span> <span class="token function">getRunListeners</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token class-name">Class</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token operator">?</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">[</span><span class="token punctuation">]</span> types <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Class</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token operator">?</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token punctuation">{</span> <span class="token class-name">SpringApplication</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">,</span> <span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token keyword">class</span> <span class="token punctuation">}</span><span class="token punctuation">;</span>
	<span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">SpringApplicationRunListeners</span><span class="token punctuation">(</span>logger<span class="token punctuation">,</span>
				<span class="token function">getSpringFactoriesInstances</span><span class="token punctuation">(</span><span class="token class-name">SpringApplicationRunListener</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">,</span> types<span class="token punctuation">,</span> <span class="token keyword">this</span><span class="token punctuation">,</span> args<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token class-name">SpringApplicationRunListeners</span><span class="token punctuation">(</span><span class="token class-name">Log</span> log<span class="token punctuation">,</span> <span class="token class-name">Collection</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token operator">?</span> <span class="token keyword">extends</span> <span class="token class-name">SpringApplicationRunListener</span><span class="token punctuation">&gt;</span></span> listeners<span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">this</span><span class="token punctuation">.</span>log <span class="token operator">=</span> log<span class="token punctuation">;</span>
	<span class="token keyword">this</span><span class="token punctuation">.</span>listeners <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ArrayList</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span>listeners<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token comment">//循环遍历获取监听器</span>
<span class="token keyword">void</span> <span class="token function">starting</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token class-name">SpringApplicationRunListener</span> listener <span class="token operator">:</span> <span class="token keyword">this</span><span class="token punctuation">.</span>listeners<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		listener<span class="token punctuation">.</span><span class="token function">starting</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token comment">//此处的监听器可以看出是事件发布监听器，主要用来发布启动事件</span>
<span class="token annotation punctuation">@Override</span>
<span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">starting</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">//这里是创建application事件‘applicationStartingEvent’</span>
	<span class="token keyword">this</span><span class="token punctuation">.</span>initialMulticaster<span class="token punctuation">.</span><span class="token function">multicastEvent</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">ApplicationStartingEvent</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>application<span class="token punctuation">,</span> <span class="token keyword">this</span><span class="token punctuation">.</span>args<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token comment">//applicationStartingEvent是springboot框架最早执行的监听器，在该监听器执行started方法时，会继续发布事件，主要是基于spring的事件机制</span>
	<span class="token annotation punctuation">@Override</span>
	<span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">multicastEvent</span><span class="token punctuation">(</span><span class="token keyword">final</span> <span class="token class-name">ApplicationEvent</span> event<span class="token punctuation">,</span> <span class="token annotation punctuation">@Nullable</span> <span class="token class-name">ResolvableType</span> eventType<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token class-name">ResolvableType</span> type <span class="token operator">=</span> <span class="token punctuation">(</span>eventType <span class="token operator">!=</span> <span class="token keyword">null</span> <span class="token operator">?</span> eventType <span class="token operator">:</span> <span class="token function">resolveDefaultEventType</span><span class="token punctuation">(</span>event<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">//获取线程池，如果为空则同步处理。这里线程池为空，还未初始化</span>
		<span class="token class-name">Executor</span> executor <span class="token operator">=</span> <span class="token function">getTaskExecutor</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token class-name">ApplicationListener</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token operator">?</span><span class="token punctuation">&gt;</span></span> listener <span class="token operator">:</span> <span class="token function">getApplicationListeners</span><span class="token punctuation">(</span>event<span class="token punctuation">,</span> type<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			<span class="token keyword">if</span> <span class="token punctuation">(</span>executor <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token comment">//异步发送事件</span>
				executor<span class="token punctuation">.</span><span class="token function">execute</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">-&gt;</span> <span class="token function">invokeListener</span><span class="token punctuation">(</span>listener<span class="token punctuation">,</span> event<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
			<span class="token punctuation">}</span>
			<span class="token keyword">else</span> <span class="token punctuation">{</span>
                <span class="token comment">//同步发送事件</span>
				<span class="token function">invokeListener</span><span class="token punctuation">(</span>listener<span class="token punctuation">,</span> event<span class="token punctuation">)</span><span class="token punctuation">;</span>
			<span class="token punctuation">}</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>
</code></pre></div><p>5、初始化默认应用参数类</p><div class="language-java" data-ext="java"><pre class="language-java"><code><span class="token class-name">ApplicationArguments</span> applicationArguments <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">DefaultApplicationArguments</span><span class="token punctuation">(</span>args<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">public</span> <span class="token class-name">DefaultApplicationArguments</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token class-name">Assert</span><span class="token punctuation">.</span><span class="token function">notNull</span><span class="token punctuation">(</span>args<span class="token punctuation">,</span> <span class="token string">&quot;Args must not be null&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token keyword">this</span><span class="token punctuation">.</span>source <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Source</span><span class="token punctuation">(</span>args<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token keyword">this</span><span class="token punctuation">.</span>args <span class="token operator">=</span> args<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><p>6、根据运行监听器和应用参数来准备spring环境</p><div class="language-java" data-ext="java"><pre class="language-java"><code><span class="token class-name">ConfigurableEnvironment</span> environment <span class="token operator">=</span> <span class="token function">prepareEnvironment</span><span class="token punctuation">(</span>listeners<span class="token punctuation">,</span> applicationArguments<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">//详细环境的准备</span>
<span class="token keyword">private</span> <span class="token class-name">ConfigurableEnvironment</span> <span class="token function">prepareEnvironment</span><span class="token punctuation">(</span><span class="token class-name">SpringApplicationRunListeners</span> listeners<span class="token punctuation">,</span>
	<span class="token class-name">ApplicationArguments</span> applicationArguments<span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token comment">// 获取或者创建应用环境</span>
	<span class="token class-name">ConfigurableEnvironment</span> environment <span class="token operator">=</span> <span class="token function">getOrCreateEnvironment</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">// 配置应用环境，配置propertySource和activeProfiles</span>
	<span class="token function">configureEnvironment</span><span class="token punctuation">(</span>environment<span class="token punctuation">,</span> applicationArguments<span class="token punctuation">.</span><span class="token function">getSourceArgs</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">//listeners环境准备，广播ApplicationEnvironmentPreparedEvent</span>
	<span class="token class-name">ConfigurationPropertySources</span><span class="token punctuation">.</span><span class="token function">attach</span><span class="token punctuation">(</span>environment<span class="token punctuation">)</span><span class="token punctuation">;</span>
	listeners<span class="token punctuation">.</span><span class="token function">environmentPrepared</span><span class="token punctuation">(</span>environment<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">//将环境绑定给当前应用程序</span>
	<span class="token function">bindToSpringApplication</span><span class="token punctuation">(</span>environment<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">//对当前的环境类型进行判断，如果不一致进行转换</span>
	<span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span><span class="token keyword">this</span><span class="token punctuation">.</span>isCustomEnvironment<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		environment <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">EnvironmentConverter</span><span class="token punctuation">(</span><span class="token function">getClassLoader</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">convertEnvironmentIfNecessary</span><span class="token punctuation">(</span>environment<span class="token punctuation">,</span>
					<span class="token function">deduceEnvironmentClass</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
    <span class="token comment">//配置propertySource对它自己的递归依赖</span>
	<span class="token class-name">ConfigurationPropertySources</span><span class="token punctuation">.</span><span class="token function">attach</span><span class="token punctuation">(</span>environment<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token keyword">return</span> environment<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token comment">// 获取或者创建应用环境，根据应用程序的类型可以分为servlet环境、标准环境(特殊的非web环境)和响应式环境</span>
<span class="token keyword">private</span> <span class="token class-name">ConfigurableEnvironment</span> <span class="token function">getOrCreateEnvironment</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">//存在则直接返回</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>environment <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			<span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>environment<span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
    <span class="token comment">//根据webApplicationType创建对应的Environment</span>
		<span class="token keyword">switch</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>webApplicationType<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">case</span> <span class="token constant">SERVLET</span><span class="token operator">:</span>
			<span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">StandardServletEnvironment</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token keyword">case</span> <span class="token constant">REACTIVE</span><span class="token operator">:</span>
			<span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">StandardReactiveWebEnvironment</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token keyword">default</span><span class="token operator">:</span>
			<span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">StandardEnvironment</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>
<span class="token comment">//配置应用环境</span>
<span class="token keyword">protected</span> <span class="token keyword">void</span> <span class="token function">configureEnvironment</span><span class="token punctuation">(</span><span class="token class-name">ConfigurableEnvironment</span> environment<span class="token punctuation">,</span> <span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>addConversionService<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token class-name">ConversionService</span> conversionService <span class="token operator">=</span> <span class="token class-name">ApplicationConversionService</span><span class="token punctuation">.</span><span class="token function">getSharedInstance</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		environment<span class="token punctuation">.</span><span class="token function">setConversionService</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token class-name">ConfigurableConversionService</span><span class="token punctuation">)</span> conversionService<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
    <span class="token comment">//配置property sources</span>
	<span class="token function">configurePropertySources</span><span class="token punctuation">(</span>environment<span class="token punctuation">,</span> args<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">//配置profiles</span>
	<span class="token function">configureProfiles</span><span class="token punctuation">(</span>environment<span class="token punctuation">,</span> args<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><p>7、创建banner的打印类</p><div class="language-java" data-ext="java"><pre class="language-java"><code><span class="token class-name">Banner</span> printedBanner <span class="token operator">=</span> <span class="token function">printBanner</span><span class="token punctuation">(</span>environment<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">//打印类的详细操作过程</span>
<span class="token keyword">private</span> <span class="token class-name">Banner</span> <span class="token function">printBanner</span><span class="token punctuation">(</span><span class="token class-name">ConfigurableEnvironment</span> environment<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>bannerMode <span class="token operator">==</span> <span class="token class-name">Banner<span class="token punctuation">.</span>Mode</span><span class="token punctuation">.</span><span class="token constant">OFF</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			<span class="token keyword">return</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
		<span class="token class-name">ResourceLoader</span> resourceLoader <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>resourceLoader <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token operator">?</span> <span class="token keyword">this</span><span class="token punctuation">.</span>resourceLoader
				<span class="token operator">:</span> <span class="token keyword">new</span> <span class="token class-name">DefaultResourceLoader</span><span class="token punctuation">(</span><span class="token function">getClassLoader</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token class-name">SpringApplicationBannerPrinter</span> bannerPrinter <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">SpringApplicationBannerPrinter</span><span class="token punctuation">(</span>resourceLoader<span class="token punctuation">,</span> <span class="token keyword">this</span><span class="token punctuation">.</span>banner<span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>bannerMode <span class="token operator">==</span> <span class="token class-name">Mode</span><span class="token punctuation">.</span><span class="token constant">LOG</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			<span class="token keyword">return</span> bannerPrinter<span class="token punctuation">.</span><span class="token function">print</span><span class="token punctuation">(</span>environment<span class="token punctuation">,</span> <span class="token keyword">this</span><span class="token punctuation">.</span>mainApplicationClass<span class="token punctuation">,</span> logger<span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
		<span class="token keyword">return</span> bannerPrinter<span class="token punctuation">.</span><span class="token function">print</span><span class="token punctuation">(</span>environment<span class="token punctuation">,</span> <span class="token keyword">this</span><span class="token punctuation">.</span>mainApplicationClass<span class="token punctuation">,</span> <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
</code></pre></div><p>8、创建应用的上下文:根据不同哦那个的应用类型初始化不同的上下文应用类</p><div class="language-java" data-ext="java"><pre class="language-java"><code>context <span class="token operator">=</span> <span class="token function">createApplicationContext</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">protected</span> <span class="token class-name">ConfigurableApplicationContext</span> <span class="token function">createApplicationContext</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token class-name">Class</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token operator">?</span><span class="token punctuation">&gt;</span></span> contextClass <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>applicationContextClass<span class="token punctuation">;</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span>contextClass <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			<span class="token keyword">try</span> <span class="token punctuation">{</span>
				<span class="token keyword">switch</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>webApplicationType<span class="token punctuation">)</span> <span class="token punctuation">{</span>
				<span class="token keyword">case</span> <span class="token constant">SERVLET</span><span class="token operator">:</span>
					contextClass <span class="token operator">=</span> <span class="token class-name">Class</span><span class="token punctuation">.</span><span class="token function">forName</span><span class="token punctuation">(</span><span class="token constant">DEFAULT_SERVLET_WEB_CONTEXT_CLASS</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
					<span class="token keyword">break</span><span class="token punctuation">;</span>
				<span class="token keyword">case</span> <span class="token constant">REACTIVE</span><span class="token operator">:</span>
					contextClass <span class="token operator">=</span> <span class="token class-name">Class</span><span class="token punctuation">.</span><span class="token function">forName</span><span class="token punctuation">(</span><span class="token constant">DEFAULT_REACTIVE_WEB_CONTEXT_CLASS</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
					<span class="token keyword">break</span><span class="token punctuation">;</span>
				<span class="token keyword">default</span><span class="token operator">:</span>
					contextClass <span class="token operator">=</span> <span class="token class-name">Class</span><span class="token punctuation">.</span><span class="token function">forName</span><span class="token punctuation">(</span><span class="token constant">DEFAULT_CONTEXT_CLASS</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
				<span class="token punctuation">}</span>
			<span class="token punctuation">}</span>
			<span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">ClassNotFoundException</span> ex<span class="token punctuation">)</span> <span class="token punctuation">{</span>
				<span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">IllegalStateException</span><span class="token punctuation">(</span>
						<span class="token string">&quot;Unable create a default ApplicationContext, please specify an ApplicationContextClass&quot;</span><span class="token punctuation">,</span> ex<span class="token punctuation">)</span><span class="token punctuation">;</span>
			<span class="token punctuation">}</span>
		<span class="token punctuation">}</span>
		<span class="token keyword">return</span> <span class="token punctuation">(</span><span class="token class-name">ConfigurableApplicationContext</span><span class="token punctuation">)</span> <span class="token class-name">BeanUtils</span><span class="token punctuation">.</span><span class="token function">instantiateClass</span><span class="token punctuation">(</span>contextClass<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
</code></pre></div><p>9、准备异常报告器</p><div class="language-java" data-ext="java"><pre class="language-java"><code>exceptionReporters <span class="token operator">=</span> <span class="token function">getSpringFactoriesInstances</span><span class="token punctuation">(</span><span class="token class-name">SpringBootExceptionReporter</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">,</span>
					<span class="token keyword">new</span> <span class="token class-name">Class</span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token punctuation">{</span> <span class="token class-name">ConfigurableApplicationContext</span><span class="token punctuation">.</span><span class="token keyword">class</span> <span class="token punctuation">}</span><span class="token punctuation">,</span> context<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">private</span> <span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">T</span><span class="token punctuation">&gt;</span></span> <span class="token class-name">Collection</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">T</span><span class="token punctuation">&gt;</span></span> <span class="token function">getSpringFactoriesInstances</span><span class="token punctuation">(</span><span class="token class-name">Class</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">T</span><span class="token punctuation">&gt;</span></span> type<span class="token punctuation">,</span> <span class="token class-name">Class</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token operator">?</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">[</span><span class="token punctuation">]</span> parameterTypes<span class="token punctuation">,</span> <span class="token class-name">Object</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token class-name">ClassLoader</span> classLoader <span class="token operator">=</span> <span class="token function">getClassLoader</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token comment">// Use names and ensure unique to protect against duplicates</span>
		<span class="token class-name">Set</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">&gt;</span></span> names <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">LinkedHashSet</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token class-name">SpringFactoriesLoader</span><span class="token punctuation">.</span><span class="token function">loadFactoryNames</span><span class="token punctuation">(</span>type<span class="token punctuation">,</span> classLoader<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">T</span><span class="token punctuation">&gt;</span></span> instances <span class="token operator">=</span> <span class="token function">createSpringFactoriesInstances</span><span class="token punctuation">(</span>type<span class="token punctuation">,</span> parameterTypes<span class="token punctuation">,</span> classLoader<span class="token punctuation">,</span> args<span class="token punctuation">,</span> names<span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token class-name">AnnotationAwareOrderComparator</span><span class="token punctuation">.</span><span class="token function">sort</span><span class="token punctuation">(</span>instances<span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token keyword">return</span> instances<span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
</code></pre></div><p>10、准备应用上下文</p><div class="language-java" data-ext="java"><pre class="language-java"><code><span class="token function">prepareContext</span><span class="token punctuation">(</span>context<span class="token punctuation">,</span> environment<span class="token punctuation">,</span> listeners<span class="token punctuation">,</span> applicationArguments<span class="token punctuation">,</span> printedBanner<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">private</span> <span class="token keyword">void</span> <span class="token function">prepareContext</span><span class="token punctuation">(</span><span class="token class-name">ConfigurableApplicationContext</span> context<span class="token punctuation">,</span> <span class="token class-name">ConfigurableEnvironment</span> environment<span class="token punctuation">,</span>
			<span class="token class-name">SpringApplicationRunListeners</span> listeners<span class="token punctuation">,</span> <span class="token class-name">ApplicationArguments</span> applicationArguments<span class="token punctuation">,</span> <span class="token class-name">Banner</span> printedBanner<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    	<span class="token comment">//应用上下文的environment</span>
		context<span class="token punctuation">.</span><span class="token function">setEnvironment</span><span class="token punctuation">(</span>environment<span class="token punctuation">)</span><span class="token punctuation">;</span>
    	<span class="token comment">//应用上下文后处理</span>
		<span class="token function">postProcessApplicationContext</span><span class="token punctuation">(</span>context<span class="token punctuation">)</span><span class="token punctuation">;</span>
    	<span class="token comment">//为上下文应用所有初始化器，执行容器中的applicationContextInitializer(spring.factories的实例)，将所有的初始化对象放置到context对象中</span>
		<span class="token function">applyInitializers</span><span class="token punctuation">(</span>context<span class="token punctuation">)</span><span class="token punctuation">;</span>
    	<span class="token comment">//触发所有SpringApplicationRunListener监听器的ContextPrepared事件方法。添加所有的事件监听器</span>
		listeners<span class="token punctuation">.</span><span class="token function">contextPrepared</span><span class="token punctuation">(</span>context<span class="token punctuation">)</span><span class="token punctuation">;</span>
   	 	<span class="token comment">//记录启动日志</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>logStartupInfo<span class="token punctuation">)</span> <span class="token punctuation">{</span>
			<span class="token function">logStartupInfo</span><span class="token punctuation">(</span>context<span class="token punctuation">.</span><span class="token function">getParent</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
			<span class="token function">logStartupProfileInfo</span><span class="token punctuation">(</span>context<span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
		<span class="token comment">// 注册启动参数bean，将容器指定的参数封装成bean，注入容器</span>
		<span class="token class-name">ConfigurableListableBeanFactory</span> beanFactory <span class="token operator">=</span> context<span class="token punctuation">.</span><span class="token function">getBeanFactory</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		beanFactory<span class="token punctuation">.</span><span class="token function">registerSingleton</span><span class="token punctuation">(</span><span class="token string">&quot;springApplicationArguments&quot;</span><span class="token punctuation">,</span> applicationArguments<span class="token punctuation">)</span><span class="token punctuation">;</span>
    	<span class="token comment">//设置banner</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span>printedBanner <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			beanFactory<span class="token punctuation">.</span><span class="token function">registerSingleton</span><span class="token punctuation">(</span><span class="token string">&quot;springBootBanner&quot;</span><span class="token punctuation">,</span> printedBanner<span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span>beanFactory <span class="token keyword">instanceof</span> <span class="token class-name">DefaultListableBeanFactory</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			<span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token class-name">DefaultListableBeanFactory</span><span class="token punctuation">)</span> beanFactory<span class="token punctuation">)</span>
					<span class="token punctuation">.</span><span class="token function">setAllowBeanDefinitionOverriding</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>allowBeanDefinitionOverriding<span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>lazyInitialization<span class="token punctuation">)</span> <span class="token punctuation">{</span>
			context<span class="token punctuation">.</span><span class="token function">addBeanFactoryPostProcessor</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">LazyInitializationBeanFactoryPostProcessor</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
		<span class="token comment">// 加载所有资源，指的是启动器指定的参数</span>
		<span class="token class-name">Set</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Object</span><span class="token punctuation">&gt;</span></span> sources <span class="token operator">=</span> <span class="token function">getAllSources</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token class-name">Assert</span><span class="token punctuation">.</span><span class="token function">notEmpty</span><span class="token punctuation">(</span>sources<span class="token punctuation">,</span> <span class="token string">&quot;Sources must not be empty&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    	<span class="token comment">//将bean加载到上下文中</span>
		<span class="token function">load</span><span class="token punctuation">(</span>context<span class="token punctuation">,</span> sources<span class="token punctuation">.</span><span class="token function">toArray</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Object</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    	<span class="token comment">//触发所有springapplicationRunListener监听器的contextLoaded事件方法，</span>
		listeners<span class="token punctuation">.</span><span class="token function">contextLoaded</span><span class="token punctuation">(</span>context<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
<span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">-</span>
    <span class="token comment">//这里没有做任何的处理过程，因为beanNameGenerator和resourceLoader默认为空，可以方便后续做扩展处理</span>
    <span class="token keyword">protected</span> <span class="token keyword">void</span> <span class="token function">postProcessApplicationContext</span><span class="token punctuation">(</span><span class="token class-name">ConfigurableApplicationContext</span> context<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>beanNameGenerator <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			context<span class="token punctuation">.</span><span class="token function">getBeanFactory</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">registerSingleton</span><span class="token punctuation">(</span><span class="token class-name">AnnotationConfigUtils</span><span class="token punctuation">.</span><span class="token constant">CONFIGURATION_BEAN_NAME_GENERATOR</span><span class="token punctuation">,</span>
					<span class="token keyword">this</span><span class="token punctuation">.</span>beanNameGenerator<span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>resourceLoader <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			<span class="token keyword">if</span> <span class="token punctuation">(</span>context <span class="token keyword">instanceof</span> <span class="token class-name">GenericApplicationContext</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
				<span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token class-name">GenericApplicationContext</span><span class="token punctuation">)</span> context<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">setResourceLoader</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>resourceLoader<span class="token punctuation">)</span><span class="token punctuation">;</span>
			<span class="token punctuation">}</span>
			<span class="token keyword">if</span> <span class="token punctuation">(</span>context <span class="token keyword">instanceof</span> <span class="token class-name">DefaultResourceLoader</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
				<span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token class-name">DefaultResourceLoader</span><span class="token punctuation">)</span> context<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">setClassLoader</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>resourceLoader<span class="token punctuation">.</span><span class="token function">getClassLoader</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
			<span class="token punctuation">}</span>
		<span class="token punctuation">}</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>addConversionService<span class="token punctuation">)</span> <span class="token punctuation">{</span>
			context<span class="token punctuation">.</span><span class="token function">getBeanFactory</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">setConversionService</span><span class="token punctuation">(</span><span class="token class-name">ApplicationConversionService</span><span class="token punctuation">.</span><span class="token function">getSharedInstance</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>
<span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">-</span>
    <span class="token comment">//将启动器类加载到spring容器中，为后续的自动化配置奠定基础，之前看到的很多注解也与此相关</span>
    <span class="token keyword">protected</span> <span class="token keyword">void</span> <span class="token function">load</span><span class="token punctuation">(</span><span class="token class-name">ApplicationContext</span> context<span class="token punctuation">,</span> <span class="token class-name">Object</span><span class="token punctuation">[</span><span class="token punctuation">]</span> sources<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span>logger<span class="token punctuation">.</span><span class="token function">isDebugEnabled</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			logger<span class="token punctuation">.</span><span class="token function">debug</span><span class="token punctuation">(</span><span class="token string">&quot;Loading source &quot;</span> <span class="token operator">+</span> <span class="token class-name">StringUtils</span><span class="token punctuation">.</span><span class="token function">arrayToCommaDelimitedString</span><span class="token punctuation">(</span>sources<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
		<span class="token class-name">BeanDefinitionLoader</span> loader <span class="token operator">=</span> <span class="token function">createBeanDefinitionLoader</span><span class="token punctuation">(</span><span class="token function">getBeanDefinitionRegistry</span><span class="token punctuation">(</span>context<span class="token punctuation">)</span><span class="token punctuation">,</span> sources<span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>beanNameGenerator <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			loader<span class="token punctuation">.</span><span class="token function">setBeanNameGenerator</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>beanNameGenerator<span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>resourceLoader <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			loader<span class="token punctuation">.</span><span class="token function">setResourceLoader</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>resourceLoader<span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>environment <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			loader<span class="token punctuation">.</span><span class="token function">setEnvironment</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>environment<span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
		loader<span class="token punctuation">.</span><span class="token function">load</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
<span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">-</span>
    <span class="token comment">//springboot会优先选择groovy加载方式，找不到在选择java方式</span>
    <span class="token keyword">private</span> <span class="token keyword">int</span> <span class="token function">load</span><span class="token punctuation">(</span><span class="token class-name">Class</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token operator">?</span><span class="token punctuation">&gt;</span></span> source<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">isGroovyPresent</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">&amp;&amp;</span> <span class="token class-name">GroovyBeanDefinitionSource</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">.</span><span class="token function">isAssignableFrom</span><span class="token punctuation">(</span>source<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			<span class="token comment">// Any GroovyLoaders added in beans{} DSL can contribute beans here</span>
			<span class="token class-name">GroovyBeanDefinitionSource</span> loader <span class="token operator">=</span> <span class="token class-name">BeanUtils</span><span class="token punctuation">.</span><span class="token function">instantiateClass</span><span class="token punctuation">(</span>source<span class="token punctuation">,</span> <span class="token class-name">GroovyBeanDefinitionSource</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
			<span class="token function">load</span><span class="token punctuation">(</span>loader<span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">isComponent</span><span class="token punctuation">(</span>source<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			<span class="token keyword">this</span><span class="token punctuation">.</span>annotatedReader<span class="token punctuation">.</span><span class="token function">register</span><span class="token punctuation">(</span>source<span class="token punctuation">)</span><span class="token punctuation">;</span>
			<span class="token keyword">return</span> <span class="token number">1</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
		<span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
</code></pre></div><p>11、刷新应用上下文</p><div class="language-java" data-ext="java"><pre class="language-java"><code><span class="token function">refreshContext</span><span class="token punctuation">(</span>context<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">private</span> <span class="token keyword">void</span> <span class="token function">refreshContext</span><span class="token punctuation">(</span><span class="token class-name">ConfigurableApplicationContext</span> context<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token function">refresh</span><span class="token punctuation">(</span>context<span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>registerShutdownHook<span class="token punctuation">)</span> <span class="token punctuation">{</span>
			<span class="token keyword">try</span> <span class="token punctuation">{</span>
				context<span class="token punctuation">.</span><span class="token function">registerShutdownHook</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
			<span class="token punctuation">}</span>
			<span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">AccessControlException</span> ex<span class="token punctuation">)</span> <span class="token punctuation">{</span>
				<span class="token comment">// Not allowed in some environments.</span>
			<span class="token punctuation">}</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>

<span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">refresh</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">BeansException</span><span class="token punctuation">,</span> <span class="token class-name">IllegalStateException</span> <span class="token punctuation">{</span>
		<span class="token keyword">synchronized</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>startupShutdownMonitor<span class="token punctuation">)</span> <span class="token punctuation">{</span>
			<span class="token comment">// Prepare this context for refreshing.</span>
            <span class="token comment">//刷新上下文环境，初始化上下文环境，对系统的环境变量或者系统属性进行准备和校验</span>
			<span class="token function">prepareRefresh</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

			<span class="token comment">// Tell the subclass to refresh the internal bean factory.</span>
            <span class="token comment">//初始化beanfactory，解析xml，相当于之前的xmlBeanfactory操作</span>
			<span class="token class-name">ConfigurableListableBeanFactory</span> beanFactory <span class="token operator">=</span> <span class="token function">obtainFreshBeanFactory</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

			<span class="token comment">// Prepare the bean factory for use in this context.</span>
            <span class="token comment">//为上下文准备beanfactory，对beanFactory的各种功能进行填充，如@autowired，设置spel表达式解析器，设置编辑注册器，添加applicationContextAwareprocessor处理器等等</span>
			<span class="token function">prepareBeanFactory</span><span class="token punctuation">(</span>beanFactory<span class="token punctuation">)</span><span class="token punctuation">;</span>

			<span class="token keyword">try</span> <span class="token punctuation">{</span>
				<span class="token comment">// Allows post-processing of the bean factory in context subclasses.</span>
                <span class="token comment">//提供子类覆盖的额外处理，即子类处理自定义的beanfactorypostProcess</span>
				<span class="token function">postProcessBeanFactory</span><span class="token punctuation">(</span>beanFactory<span class="token punctuation">)</span><span class="token punctuation">;</span>

				<span class="token comment">// Invoke factory processors registered as beans in the context.</span>
                <span class="token comment">//激活各种beanfactory处理器</span>
				<span class="token function">invokeBeanFactoryPostProcessors</span><span class="token punctuation">(</span>beanFactory<span class="token punctuation">)</span><span class="token punctuation">;</span>

				<span class="token comment">// Register bean processors that intercept bean creation.</span>
                <span class="token comment">//注册拦截bean创建的bean处理器，即注册beanPostProcessor</span>
				<span class="token function">registerBeanPostProcessors</span><span class="token punctuation">(</span>beanFactory<span class="token punctuation">)</span><span class="token punctuation">;</span>

				<span class="token comment">// Initialize message source for this context.</span>
                <span class="token comment">//初始化上下文中的资源文件如国际化文件的处理</span>
				<span class="token function">initMessageSource</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

				<span class="token comment">// Initialize event multicaster for this context.</span>
                <span class="token comment">//初始化上下文事件广播器</span>
				<span class="token function">initApplicationEventMulticaster</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

				<span class="token comment">// Initialize other special beans in specific context subclasses.</span>
                <span class="token comment">//给子类扩展初始化其他bean</span>
				<span class="token function">onRefresh</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

				<span class="token comment">// Check for listener beans and register them.</span>
                <span class="token comment">//在所有的bean中查找listener bean,然后 注册到广播器中</span>
				<span class="token function">registerListeners</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

				<span class="token comment">// Instantiate all remaining (non-lazy-init) singletons.</span>
                <span class="token comment">//初始化剩余的非懒惰的bean，即初始化非延迟加载的bean</span>
				<span class="token function">finishBeanFactoryInitialization</span><span class="token punctuation">(</span>beanFactory<span class="token punctuation">)</span><span class="token punctuation">;</span>

				<span class="token comment">// Last step: publish corresponding event.</span>
                <span class="token comment">//发完成刷新过程，通知声明周期处理器刷新过程，同时发出ContextRefreshEvent通知别人</span>
				<span class="token function">finishRefresh</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
			<span class="token punctuation">}</span>

			<span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">BeansException</span> ex<span class="token punctuation">)</span> <span class="token punctuation">{</span>
				<span class="token keyword">if</span> <span class="token punctuation">(</span>logger<span class="token punctuation">.</span><span class="token function">isWarnEnabled</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
					logger<span class="token punctuation">.</span><span class="token function">warn</span><span class="token punctuation">(</span><span class="token string">&quot;Exception encountered during context initialization - &quot;</span> <span class="token operator">+</span>
							<span class="token string">&quot;cancelling refresh attempt: &quot;</span> <span class="token operator">+</span> ex<span class="token punctuation">)</span><span class="token punctuation">;</span>
				<span class="token punctuation">}</span>

				<span class="token comment">// Destroy already created singletons to avoid dangling resources.</span>
				<span class="token function">destroyBeans</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

				<span class="token comment">// Reset &#39;active&#39; flag.</span>
				<span class="token function">cancelRefresh</span><span class="token punctuation">(</span>ex<span class="token punctuation">)</span><span class="token punctuation">;</span>

				<span class="token comment">// Propagate exception to caller.</span>
				<span class="token keyword">throw</span> ex<span class="token punctuation">;</span>
			<span class="token punctuation">}</span>

			<span class="token keyword">finally</span> <span class="token punctuation">{</span>
				<span class="token comment">// Reset common introspection caches in Spring&#39;s core, since we</span>
				<span class="token comment">// might not ever need metadata for singleton beans anymore...</span>
				<span class="token function">resetCommonCaches</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
			<span class="token punctuation">}</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>
</code></pre></div><p>12、应用上下文刷新后置处理</p><div class="language-java" data-ext="java"><pre class="language-java"><code><span class="token function">afterRefresh</span><span class="token punctuation">(</span>context<span class="token punctuation">,</span> applicationArguments<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">//当前方法的代码是空的，可以做一些自定义的后置处理操作</span>
<span class="token keyword">protected</span> <span class="token keyword">void</span> <span class="token function">afterRefresh</span><span class="token punctuation">(</span><span class="token class-name">ConfigurableApplicationContext</span> context<span class="token punctuation">,</span> <span class="token class-name">ApplicationArguments</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token punctuation">}</span>
</code></pre></div><p>13、停止计时监控类：计时监听器停止，并统计一些任务执行信息</p><div class="language-java" data-ext="java"><pre class="language-java"><code>stopWatch<span class="token punctuation">.</span><span class="token function">stop</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">stop</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">IllegalStateException</span> <span class="token punctuation">{</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>currentTaskName <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			<span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">IllegalStateException</span><span class="token punctuation">(</span><span class="token string">&quot;Can&#39;t stop StopWatch: it&#39;s not running&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
		<span class="token keyword">long</span> lastTime <span class="token operator">=</span> <span class="token class-name">System</span><span class="token punctuation">.</span><span class="token function">nanoTime</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">-</span> <span class="token keyword">this</span><span class="token punctuation">.</span>startTimeNanos<span class="token punctuation">;</span>
		<span class="token keyword">this</span><span class="token punctuation">.</span>totalTimeNanos <span class="token operator">+=</span> lastTime<span class="token punctuation">;</span>
		<span class="token keyword">this</span><span class="token punctuation">.</span>lastTaskInfo <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">TaskInfo</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>currentTaskName<span class="token punctuation">,</span> lastTime<span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>keepTaskList<span class="token punctuation">)</span> <span class="token punctuation">{</span>
			<span class="token keyword">this</span><span class="token punctuation">.</span>taskList<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>lastTaskInfo<span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
		<span class="token operator">++</span><span class="token keyword">this</span><span class="token punctuation">.</span>taskCount<span class="token punctuation">;</span>
		<span class="token keyword">this</span><span class="token punctuation">.</span>currentTaskName <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
</code></pre></div><p>14、输出日志记录执行主类名、时间信息</p><div class="language-java" data-ext="java"><pre class="language-java"><code><span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>logStartupInfo<span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">new</span> <span class="token class-name">StartupInfoLogger</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>mainApplicationClass<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">logStarted</span><span class="token punctuation">(</span><span class="token function">getApplicationLog</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> stopWatch<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><p>15、发布应用上下文启动完成事件：触发所有SpringapplicationRunListener监听器的started事件方法</p><div class="language-java" data-ext="java"><pre class="language-java"><code>listeners<span class="token punctuation">.</span><span class="token function">started</span><span class="token punctuation">(</span>context<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token keyword">void</span> <span class="token function">started</span><span class="token punctuation">(</span><span class="token class-name">ConfigurableApplicationContext</span> context<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token class-name">SpringApplicationRunListener</span> listener <span class="token operator">:</span> <span class="token keyword">this</span><span class="token punctuation">.</span>listeners<span class="token punctuation">)</span> <span class="token punctuation">{</span>
			listener<span class="token punctuation">.</span><span class="token function">started</span><span class="token punctuation">(</span>context<span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>
</code></pre></div><p>16、执行所有Runner执行器：执行所有applicationRunner和CommandLineRunner两种运行器</p><div class="language-java" data-ext="java"><pre class="language-java"><code><span class="token function">callRunners</span><span class="token punctuation">(</span>context<span class="token punctuation">,</span> applicationArguments<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">private</span> <span class="token keyword">void</span> <span class="token function">callRunners</span><span class="token punctuation">(</span><span class="token class-name">ApplicationContext</span> context<span class="token punctuation">,</span> <span class="token class-name">ApplicationArguments</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Object</span><span class="token punctuation">&gt;</span></span> runners <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ArrayList</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		runners<span class="token punctuation">.</span><span class="token function">addAll</span><span class="token punctuation">(</span>context<span class="token punctuation">.</span><span class="token function">getBeansOfType</span><span class="token punctuation">(</span><span class="token class-name">ApplicationRunner</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">values</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		runners<span class="token punctuation">.</span><span class="token function">addAll</span><span class="token punctuation">(</span>context<span class="token punctuation">.</span><span class="token function">getBeansOfType</span><span class="token punctuation">(</span><span class="token class-name">CommandLineRunner</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">values</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token class-name">AnnotationAwareOrderComparator</span><span class="token punctuation">.</span><span class="token function">sort</span><span class="token punctuation">(</span>runners<span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token class-name">Object</span> runner <span class="token operator">:</span> <span class="token keyword">new</span> <span class="token class-name">LinkedHashSet</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span>runners<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			<span class="token keyword">if</span> <span class="token punctuation">(</span>runner <span class="token keyword">instanceof</span> <span class="token class-name">ApplicationRunner</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
				<span class="token function">callRunner</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token class-name">ApplicationRunner</span><span class="token punctuation">)</span> runner<span class="token punctuation">,</span> args<span class="token punctuation">)</span><span class="token punctuation">;</span>
			<span class="token punctuation">}</span>
			<span class="token keyword">if</span> <span class="token punctuation">(</span>runner <span class="token keyword">instanceof</span> <span class="token class-name">CommandLineRunner</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
				<span class="token function">callRunner</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token class-name">CommandLineRunner</span><span class="token punctuation">)</span> runner<span class="token punctuation">,</span> args<span class="token punctuation">)</span><span class="token punctuation">;</span>
			<span class="token punctuation">}</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>
</code></pre></div><p>17、发布应用上下文就绪事件：触发所有springapplicationRunnListener将挺起的running事件方法</p><div class="language-java" data-ext="java"><pre class="language-java"><code>listeners<span class="token punctuation">.</span><span class="token function">running</span><span class="token punctuation">(</span>context<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">void</span> <span class="token function">running</span><span class="token punctuation">(</span><span class="token class-name">ConfigurableApplicationContext</span> context<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token class-name">SpringApplicationRunListener</span> listener <span class="token operator">:</span> <span class="token keyword">this</span><span class="token punctuation">.</span>listeners<span class="token punctuation">)</span> <span class="token punctuation">{</span>
			listener<span class="token punctuation">.</span><span class="token function">running</span><span class="token punctuation">(</span>context<span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>
</code></pre></div><p>18、返回应用上下文</p><div class="language-java" data-ext="java"><pre class="language-java"><code><span class="token keyword">return</span> context<span class="token punctuation">;</span>
</code></pre></div><hr><p>注意：</p><p>整个springboot框架中获取factorys文件的方式统一如下：</p><div class="language-java" data-ext="java"><pre class="language-java"><code><span class="token keyword">private</span> <span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">T</span><span class="token punctuation">&gt;</span></span> <span class="token class-name">Collection</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">T</span><span class="token punctuation">&gt;</span></span> <span class="token function">getSpringFactoriesInstances</span><span class="token punctuation">(</span><span class="token class-name">Class</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">T</span><span class="token punctuation">&gt;</span></span> type<span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">return</span> <span class="token function">getSpringFactoriesInstances</span><span class="token punctuation">(</span>type<span class="token punctuation">,</span> <span class="token keyword">new</span> <span class="token class-name">Class</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token operator">?</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">-</span>
<span class="token keyword">private</span> <span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">T</span><span class="token punctuation">&gt;</span></span> <span class="token class-name">Collection</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">T</span><span class="token punctuation">&gt;</span></span> <span class="token function">getSpringFactoriesInstances</span><span class="token punctuation">(</span><span class="token class-name">Class</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">T</span><span class="token punctuation">&gt;</span></span> type<span class="token punctuation">,</span> <span class="token class-name">Class</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token operator">?</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">[</span><span class="token punctuation">]</span> parameterTypes<span class="token punctuation">,</span> <span class="token class-name">Object</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token class-name">ClassLoader</span> classLoader <span class="token operator">=</span> <span class="token function">getClassLoader</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token comment">// Use names and ensure unique to protect against duplicates</span>
		<span class="token class-name">Set</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">&gt;</span></span> names <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">LinkedHashSet</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token class-name">SpringFactoriesLoader</span><span class="token punctuation">.</span><span class="token function">loadFactoryNames</span><span class="token punctuation">(</span>type<span class="token punctuation">,</span> classLoader<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">T</span><span class="token punctuation">&gt;</span></span> instances <span class="token operator">=</span> <span class="token function">createSpringFactoriesInstances</span><span class="token punctuation">(</span>type<span class="token punctuation">,</span> parameterTypes<span class="token punctuation">,</span> classLoader<span class="token punctuation">,</span> args<span class="token punctuation">,</span> names<span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token class-name">AnnotationAwareOrderComparator</span><span class="token punctuation">.</span><span class="token function">sort</span><span class="token punctuation">(</span>instances<span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token keyword">return</span> instances<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">-</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">&gt;</span></span> <span class="token function">loadFactoryNames</span><span class="token punctuation">(</span><span class="token class-name">Class</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token operator">?</span><span class="token punctuation">&gt;</span></span> factoryType<span class="token punctuation">,</span> <span class="token annotation punctuation">@Nullable</span> <span class="token class-name">ClassLoader</span> classLoader<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token class-name">String</span> factoryTypeName <span class="token operator">=</span> factoryType<span class="token punctuation">.</span><span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token keyword">return</span> <span class="token function">loadSpringFactories</span><span class="token punctuation">(</span>classLoader<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getOrDefault</span><span class="token punctuation">(</span>factoryTypeName<span class="token punctuation">,</span> <span class="token class-name">Collections</span><span class="token punctuation">.</span><span class="token function">emptyList</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>

	<span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token class-name">Map</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">,</span> <span class="token class-name">List</span><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">&gt;</span><span class="token punctuation">&gt;</span></span> <span class="token function">loadSpringFactories</span><span class="token punctuation">(</span><span class="token annotation punctuation">@Nullable</span> <span class="token class-name">ClassLoader</span> classLoader<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token class-name">MultiValueMap</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">,</span> <span class="token class-name">String</span><span class="token punctuation">&gt;</span></span> result <span class="token operator">=</span> cache<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>classLoader<span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span>result <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			<span class="token keyword">return</span> result<span class="token punctuation">;</span>
		<span class="token punctuation">}</span>

		<span class="token keyword">try</span> <span class="token punctuation">{</span>
			<span class="token class-name">Enumeration</span><span class="token generics"><span class="token punctuation">&lt;</span>URL<span class="token punctuation">&gt;</span></span> urls <span class="token operator">=</span> <span class="token punctuation">(</span>classLoader <span class="token operator">!=</span> <span class="token keyword">null</span> <span class="token operator">?</span>
					classLoader<span class="token punctuation">.</span><span class="token function">getResources</span><span class="token punctuation">(</span><span class="token constant">FACTORIES_RESOURCE_LOCATION</span><span class="token punctuation">)</span> <span class="token operator">:</span>
					<span class="token class-name">ClassLoader</span><span class="token punctuation">.</span><span class="token function">getSystemResources</span><span class="token punctuation">(</span><span class="token constant">FACTORIES_RESOURCE_LOCATION</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
			result <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">LinkedMultiValueMap</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
			<span class="token keyword">while</span> <span class="token punctuation">(</span>urls<span class="token punctuation">.</span><span class="token function">hasMoreElements</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
				<span class="token class-name">URL</span> url <span class="token operator">=</span> urls<span class="token punctuation">.</span><span class="token function">nextElement</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
				<span class="token class-name">UrlResource</span> resource <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">UrlResource</span><span class="token punctuation">(</span>url<span class="token punctuation">)</span><span class="token punctuation">;</span>
				<span class="token class-name">Properties</span> properties <span class="token operator">=</span> <span class="token class-name">PropertiesLoaderUtils</span><span class="token punctuation">.</span><span class="token function">loadProperties</span><span class="token punctuation">(</span>resource<span class="token punctuation">)</span><span class="token punctuation">;</span>
				<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token class-name">Map<span class="token punctuation">.</span>Entry</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token operator">?</span><span class="token punctuation">,</span> <span class="token operator">?</span><span class="token punctuation">&gt;</span></span> entry <span class="token operator">:</span> properties<span class="token punctuation">.</span><span class="token function">entrySet</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
					<span class="token class-name">String</span> factoryTypeName <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">)</span> entry<span class="token punctuation">.</span><span class="token function">getKey</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">trim</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
					<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token class-name">String</span> factoryImplementationName <span class="token operator">:</span> <span class="token class-name">StringUtils</span><span class="token punctuation">.</span><span class="token function">commaDelimitedListToStringArray</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">)</span> entry<span class="token punctuation">.</span><span class="token function">getValue</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
						result<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>factoryTypeName<span class="token punctuation">,</span> factoryImplementationName<span class="token punctuation">.</span><span class="token function">trim</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
					<span class="token punctuation">}</span>
				<span class="token punctuation">}</span>
			<span class="token punctuation">}</span>
			cache<span class="token punctuation">.</span><span class="token function">put</span><span class="token punctuation">(</span>classLoader<span class="token punctuation">,</span> result<span class="token punctuation">)</span><span class="token punctuation">;</span>
			<span class="token keyword">return</span> result<span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
		<span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">IOException</span> ex<span class="token punctuation">)</span> <span class="token punctuation">{</span>
			<span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">IllegalArgumentException</span><span class="token punctuation">(</span><span class="token string">&quot;Unable to load factories from location [&quot;</span> <span class="token operator">+</span>
					<span class="token constant">FACTORIES_RESOURCE_LOCATION</span> <span class="token operator">+</span> <span class="token string">&quot;]&quot;</span><span class="token punctuation">,</span> ex<span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>
<span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">-</span>
    <span class="token keyword">private</span> <span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">T</span><span class="token punctuation">&gt;</span></span> <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">T</span><span class="token punctuation">&gt;</span></span> <span class="token function">createSpringFactoriesInstances</span><span class="token punctuation">(</span><span class="token class-name">Class</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">T</span><span class="token punctuation">&gt;</span></span> type<span class="token punctuation">,</span> <span class="token class-name">Class</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token operator">?</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">[</span><span class="token punctuation">]</span> parameterTypes<span class="token punctuation">,</span>
			<span class="token class-name">ClassLoader</span> classLoader<span class="token punctuation">,</span> <span class="token class-name">Object</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">,</span> <span class="token class-name">Set</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">&gt;</span></span> names<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">T</span><span class="token punctuation">&gt;</span></span> instances <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ArrayList</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span>names<span class="token punctuation">.</span><span class="token function">size</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token class-name">String</span> name <span class="token operator">:</span> names<span class="token punctuation">)</span> <span class="token punctuation">{</span>
			<span class="token keyword">try</span> <span class="token punctuation">{</span>
                <span class="token comment">//装载class文件到内存</span>
				<span class="token class-name">Class</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token operator">?</span><span class="token punctuation">&gt;</span></span> instanceClass <span class="token operator">=</span> <span class="token class-name">ClassUtils</span><span class="token punctuation">.</span><span class="token function">forName</span><span class="token punctuation">(</span>name<span class="token punctuation">,</span> classLoader<span class="token punctuation">)</span><span class="token punctuation">;</span>
				<span class="token class-name">Assert</span><span class="token punctuation">.</span><span class="token function">isAssignable</span><span class="token punctuation">(</span>type<span class="token punctuation">,</span> instanceClass<span class="token punctuation">)</span><span class="token punctuation">;</span>
				<span class="token class-name">Constructor</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token operator">?</span><span class="token punctuation">&gt;</span></span> constructor <span class="token operator">=</span> instanceClass<span class="token punctuation">.</span><span class="token function">getDeclaredConstructor</span><span class="token punctuation">(</span>parameterTypes<span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token comment">//通过反射创建实例</span>
				<span class="token class-name">T</span> instance <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token class-name">T</span><span class="token punctuation">)</span> <span class="token class-name">BeanUtils</span><span class="token punctuation">.</span><span class="token function">instantiateClass</span><span class="token punctuation">(</span>constructor<span class="token punctuation">,</span> args<span class="token punctuation">)</span><span class="token punctuation">;</span>
				instances<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>instance<span class="token punctuation">)</span><span class="token punctuation">;</span>
			<span class="token punctuation">}</span>
			<span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">Throwable</span> ex<span class="token punctuation">)</span> <span class="token punctuation">{</span>
				<span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">IllegalArgumentException</span><span class="token punctuation">(</span><span class="token string">&quot;Cannot instantiate &quot;</span> <span class="token operator">+</span> type <span class="token operator">+</span> <span class="token string">&quot; : &quot;</span> <span class="token operator">+</span> name<span class="token punctuation">,</span> ex<span class="token punctuation">)</span><span class="token punctuation">;</span>
			<span class="token punctuation">}</span>
		<span class="token punctuation">}</span>
		<span class="token keyword">return</span> instances<span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
</code></pre></div><p>spring.factory文件中的类的作用：</p><div class="language-properties" data-ext="properties"><pre class="language-properties"><code><span class="token comment"># PropertySource Loaders 属性文件加载器</span>
<span class="token key attr-name">org.springframework.boot.env.PropertySourceLoader</span><span class="token punctuation">=</span><span class="token value attr-value">\\
</span><span class="token comment"># properties文件加载器</span>
org.springframework.boot.env.PropertiesPropertySourceLoader,\\
<span class="token comment"># yaml文件加载器</span>
org.springframework.boot.env.YamlPropertySourceLoader

<span class="token comment"># Run Listeners 运行时的监听器</span>
<span class="token key attr-name">org.springframework.boot.SpringApplicationRunListener</span><span class="token punctuation">=</span><span class="token value attr-value">\\
</span><span class="token comment"># 程序运行过程中所有监听通知都是通过此类来进行回调</span>
org.springframework.boot.context.event.EventPublishingRunListener

<span class="token comment"># Error Reporters	错误报告器</span>
<span class="token key attr-name">org.springframework.boot.SpringBootExceptionReporter</span><span class="token punctuation">=</span><span class="token value attr-value">\\
org.springframework.boot.diagnostics.FailureAnalyzers</span>

<span class="token comment"># Application Context Initializers</span>
<span class="token key attr-name">org.springframework.context.ApplicationContextInitializer</span><span class="token punctuation">=</span><span class="token value attr-value">\\
</span><span class="token comment"># 报告spring容器的一些常见的错误配置</span>
org.springframework.boot.context.ConfigurationWarningsApplicationContextInitializer,\\
<span class="token comment"># 设置spring应用上下文的ID</span>
org.springframework.boot.context.ContextIdApplicationContextInitializer,\\
<span class="token comment"># 使用环境属性context.initializer.classes指定初始化器进行初始化规则</span>
org.springframework.boot.context.config.DelegatingApplicationContextInitializer,\\
org.springframework.boot.rsocket.context.RSocketPortInfoApplicationContextInitializer,\\
<span class="token comment"># 将内置servlet容器实际使用的监听端口写入到environment环境属性中</span>
org.springframework.boot.web.context.ServerPortInfoApplicationContextInitializer

<span class="token comment"># Application Listeners</span>
<span class="token key attr-name">org.springframework.context.ApplicationListener</span><span class="token punctuation">=</span><span class="token value attr-value">\\
</span><span class="token comment"># 应用上下文加载完成后对缓存做清除工作，响应事件ContextRefreshEvent</span>
org.springframework.boot.ClearCachesApplicationListener,\\
<span class="token comment"># 监听双亲应用上下文的关闭事件并往自己的孩子应用上下文中传播，相关事件ParentContextAvailableEvent/ContextClosedEvent</span>
org.springframework.boot.builder.ParentContextCloserApplicationListener,\\
org.springframework.boot.cloud.CloudFoundryVcapEnvironmentPostProcessor,\\
<span class="token comment"># 如果系统文件编码和环境变量中指定的不同则终止应用启动。具体的方法是比较系统属性file.encoding和环境变量spring.mandatory-file-encoding是否相等(大小写不敏感)。</span>
org.springframework.boot.context.FileEncodingApplicationListener,\\
<span class="token comment"># 根据spring.output.ansi.enabled参数配置AnsiOutput</span>
org.springframework.boot.context.config.AnsiOutputApplicationListener,\\
<span class="token comment"># EnvironmentPostProcessor，从常见的那些约定的位置读取配置文件，比如从以下目录读取#application.properties,application.yml等配置文件：</span>
<span class="token comment"># classpath:</span>
<span class="token comment"># file:.</span>
<span class="token comment"># classpath:config</span>
<span class="token comment"># file:./config/:</span>
<span class="token comment"># 也可以配置成从其他指定的位置读取配置文件</span>
org.springframework.boot.context.config.ConfigFileApplicationListener,\\
<span class="token comment"># 监听到事件后转发给环境变量context.listener.classes指定的那些事件监听器</span>
org.springframework.boot.context.config.DelegatingApplicationListener,\\
<span class="token comment"># 一个SmartApplicationListener,对环境就绪事件ApplicationEnvironmentPreparedEvent/应用失败事件ApplicationFailedEvent做出响应，往日志DEBUG级别输出TCCL(thread context class loader)的classpath。</span>
org.springframework.boot.context.logging.ClasspathLoggingApplicationListener,\\
<span class="token comment"># 检测正在使用的日志系统，默认时logback，，此时日志系统还没有初始化</span>
org.springframework.boot.context.logging.LoggingApplicationListener,\\
<span class="token comment"># 使用一个可以和Spring Boot可执行jar包配合工作的版本替换liquibase ServiceLocator</span>
org.springframework.boot.liquibase.LiquibaseServiceLocatorApplicationListener

<span class="token comment"># Environment Post Processors</span>
<span class="token key attr-name">org.springframework.boot.env.EnvironmentPostProcessor</span><span class="token punctuation">=</span><span class="token value attr-value">\\
org.springframework.boot.cloud.CloudFoundryVcapEnvironmentPostProcessor,\\
org.springframework.boot.env.SpringApplicationJsonEnvironmentPostProcessor,\\
org.springframework.boot.env.SystemEnvironmentPropertySourceEnvironmentPostProcessor,\\
org.springframework.boot.reactor.DebugAgentEnvironmentPostProcessor</span>

<span class="token comment"># Failure Analyzers</span>
<span class="token key attr-name">org.springframework.boot.diagnostics.FailureAnalyzer</span><span class="token punctuation">=</span><span class="token value attr-value">\\
org.springframework.boot.diagnostics.analyzer.BeanCurrentlyInCreationFailureAnalyzer,\\
org.springframework.boot.diagnostics.analyzer.BeanDefinitionOverrideFailureAnalyzer,\\
org.springframework.boot.diagnostics.analyzer.BeanNotOfRequiredTypeFailureAnalyzer,\\
org.springframework.boot.diagnostics.analyzer.BindFailureAnalyzer,\\
org.springframework.boot.diagnostics.analyzer.BindValidationFailureAnalyzer,\\
org.springframework.boot.diagnostics.analyzer.UnboundConfigurationPropertyFailureAnalyzer,\\
org.springframework.boot.diagnostics.analyzer.ConnectorStartFailureAnalyzer,\\
org.springframework.boot.diagnostics.analyzer.NoSuchMethodFailureAnalyzer,\\
org.springframework.boot.diagnostics.analyzer.NoUniqueBeanDefinitionFailureAnalyzer,\\
org.springframework.boot.diagnostics.analyzer.PortInUseFailureAnalyzer,\\
org.springframework.boot.diagnostics.analyzer.ValidationExceptionFailureAnalyzer,\\
org.springframework.boot.diagnostics.analyzer.InvalidConfigurationPropertyNameFailureAnalyzer,\\
org.springframework.boot.diagnostics.analyzer.InvalidConfigurationPropertyValueFailureAnalyzer</span>

<span class="token comment"># FailureAnalysisReporters</span>
<span class="token key attr-name">org.springframework.boot.diagnostics.FailureAnalysisReporter</span><span class="token punctuation">=</span><span class="token value attr-value">\\
org.springframework.boot.diagnostics.LoggingFailureAnalysisReporter</span>

<span class="token comment"># Initializers</span>
<span class="token key attr-name">org.springframework.context.ApplicationContextInitializer</span><span class="token punctuation">=</span><span class="token value attr-value">\\
org.springframework.boot.autoconfigure.SharedMetadataReaderFactoryContextInitializer,\\
org.springframework.boot.autoconfigure.logging.ConditionEvaluationReportLoggingListener</span>

<span class="token comment"># Application Listeners</span>
<span class="token key attr-name">org.springframework.context.ApplicationListener</span><span class="token punctuation">=</span><span class="token value attr-value">\\
</span><span class="token comment"># 另外单独启动一个线程实例化并调用run方法，包括验证器、消息转换器等</span>
org.springframework.boot.autoconfigure.BackgroundPreinitializer

<span class="token comment"># Auto Configuration Import Listeners</span>
<span class="token key attr-name">org.springframework.boot.autoconfigure.AutoConfigurationImportListener</span><span class="token punctuation">=</span><span class="token value attr-value">\\
org.springframework.boot.autoconfigure.condition.ConditionEvaluationReportAutoConfigurationImportListener</span>

<span class="token comment"># Auto Configuration Import Filters</span>
<span class="token key attr-name">org.springframework.boot.autoconfigure.AutoConfigurationImportFilter</span><span class="token punctuation">=</span><span class="token value attr-value">\\
org.springframework.boot.autoconfigure.condition.OnBeanCondition,\\
org.springframework.boot.autoconfigure.condition.OnClassCondition,\\
org.springframework.boot.autoconfigure.condition.OnWebApplicationCondition</span>

<span class="token comment"># Auto Configure</span>
<span class="token key attr-name">org.springframework.boot.autoconfigure.EnableAutoConfiguration</span><span class="token punctuation">=</span><span class="token value attr-value">\\
org.springframework.boot.autoconfigure.admin.SpringApplicationAdminJmxAutoConfiguration,\\
org.springframework.boot.autoconfigure.aop.AopAutoConfiguration,\\
org.springframework.boot.autoconfigure.amqp.RabbitAutoConfiguration,\\
org.springframework.boot.autoconfigure.batch.BatchAutoConfiguration,\\
org.springframework.boot.autoconfigure.cache.CacheAutoConfiguration,\\
org.springframework.boot.autoconfigure.cassandra.CassandraAutoConfiguration,\\
org.springframework.boot.autoconfigure.cloud.CloudServiceConnectorsAutoConfiguration,\\
org.springframework.boot.autoconfigure.context.ConfigurationPropertiesAutoConfiguration,\\
org.springframework.boot.autoconfigure.context.MessageSourceAutoConfiguration,\\
org.springframework.boot.autoconfigure.context.PropertyPlaceholderAutoConfiguration,\\
org.springframework.boot.autoconfigure.couchbase.CouchbaseAutoConfiguration,\\
org.springframework.boot.autoconfigure.dao.PersistenceExceptionTranslationAutoConfiguration,\\
org.springframework.boot.autoconfigure.data.cassandra.CassandraDataAutoConfiguration,\\
org.springframework.boot.autoconfigure.data.cassandra.CassandraReactiveDataAutoConfiguration,\\
org.springframework.boot.autoconfigure.data.cassandra.CassandraReactiveRepositoriesAutoConfiguration,\\
org.springframework.boot.autoconfigure.data.cassandra.CassandraRepositoriesAutoConfiguration,\\
org.springframework.boot.autoconfigure.data.couchbase.CouchbaseDataAutoConfiguration,\\
org.springframework.boot.autoconfigure.data.couchbase.CouchbaseReactiveDataAutoConfiguration,\\
org.springframework.boot.autoconfigure.data.couchbase.CouchbaseReactiveRepositoriesAutoConfiguration,\\
org.springframework.boot.autoconfigure.data.couchbase.CouchbaseRepositoriesAutoConfiguration,\\
org.springframework.boot.autoconfigure.data.elasticsearch.ElasticsearchAutoConfiguration,\\
org.springframework.boot.autoconfigure.data.elasticsearch.ElasticsearchDataAutoConfiguration,\\
org.springframework.boot.autoconfigure.data.elasticsearch.ElasticsearchRepositoriesAutoConfiguration,\\
org.springframework.boot.autoconfigure.data.elasticsearch.ReactiveElasticsearchRepositoriesAutoConfiguration,\\
org.springframework.boot.autoconfigure.data.elasticsearch.ReactiveRestClientAutoConfiguration,\\
org.springframework.boot.autoconfigure.data.jdbc.JdbcRepositoriesAutoConfiguration,\\
org.springframework.boot.autoconfigure.data.jpa.JpaRepositoriesAutoConfiguration,\\
org.springframework.boot.autoconfigure.data.ldap.LdapRepositoriesAutoConfiguration,\\
org.springframework.boot.autoconfigure.data.mongo.MongoDataAutoConfiguration,\\
org.springframework.boot.autoconfigure.data.mongo.MongoReactiveDataAutoConfiguration,\\
org.springframework.boot.autoconfigure.data.mongo.MongoReactiveRepositoriesAutoConfiguration,\\
org.springframework.boot.autoconfigure.data.mongo.MongoRepositoriesAutoConfiguration,\\
org.springframework.boot.autoconfigure.data.neo4j.Neo4jDataAutoConfiguration,\\
org.springframework.boot.autoconfigure.data.neo4j.Neo4jRepositoriesAutoConfiguration,\\
org.springframework.boot.autoconfigure.data.solr.SolrRepositoriesAutoConfiguration,\\
org.springframework.boot.autoconfigure.data.redis.RedisAutoConfiguration,\\
org.springframework.boot.autoconfigure.data.redis.RedisReactiveAutoConfiguration,\\
org.springframework.boot.autoconfigure.data.redis.RedisRepositoriesAutoConfiguration,\\
org.springframework.boot.autoconfigure.data.rest.RepositoryRestMvcAutoConfiguration,\\
org.springframework.boot.autoconfigure.data.web.SpringDataWebAutoConfiguration,\\
org.springframework.boot.autoconfigure.elasticsearch.jest.JestAutoConfiguration,\\
org.springframework.boot.autoconfigure.elasticsearch.rest.RestClientAutoConfiguration,\\
org.springframework.boot.autoconfigure.flyway.FlywayAutoConfiguration,\\
org.springframework.boot.autoconfigure.freemarker.FreeMarkerAutoConfiguration,\\
org.springframework.boot.autoconfigure.gson.GsonAutoConfiguration,\\
org.springframework.boot.autoconfigure.h2.H2ConsoleAutoConfiguration,\\
org.springframework.boot.autoconfigure.hateoas.HypermediaAutoConfiguration,\\
org.springframework.boot.autoconfigure.hazelcast.HazelcastAutoConfiguration,\\
org.springframework.boot.autoconfigure.hazelcast.HazelcastJpaDependencyAutoConfiguration,\\
org.springframework.boot.autoconfigure.http.HttpMessageConvertersAutoConfiguration,\\
org.springframework.boot.autoconfigure.http.codec.CodecsAutoConfiguration,\\
org.springframework.boot.autoconfigure.influx.InfluxDbAutoConfiguration,\\
org.springframework.boot.autoconfigure.info.ProjectInfoAutoConfiguration,\\
org.springframework.boot.autoconfigure.integration.IntegrationAutoConfiguration,\\
org.springframework.boot.autoconfigure.jackson.JacksonAutoConfiguration,\\
org.springframework.boot.autoconfigure.jdbc.DataSourceAutoConfiguration,\\
org.springframework.boot.autoconfigure.jdbc.JdbcTemplateAutoConfiguration,\\
org.springframework.boot.autoconfigure.jdbc.JndiDataSourceAutoConfiguration,\\
org.springframework.boot.autoconfigure.jdbc.XADataSourceAutoConfiguration,\\
org.springframework.boot.autoconfigure.jdbc.DataSourceTransactionManagerAutoConfiguration,\\
org.springframework.boot.autoconfigure.jms.JmsAutoConfiguration,\\
org.springframework.boot.autoconfigure.jmx.JmxAutoConfiguration,\\
org.springframework.boot.autoconfigure.jms.JndiConnectionFactoryAutoConfiguration,\\
org.springframework.boot.autoconfigure.jms.activemq.ActiveMQAutoConfiguration,\\
org.springframework.boot.autoconfigure.jms.artemis.ArtemisAutoConfiguration,\\
org.springframework.boot.autoconfigure.groovy.template.GroovyTemplateAutoConfiguration,\\
org.springframework.boot.autoconfigure.jersey.JerseyAutoConfiguration,\\
org.springframework.boot.autoconfigure.jooq.JooqAutoConfiguration,\\
org.springframework.boot.autoconfigure.jsonb.JsonbAutoConfiguration,\\
org.springframework.boot.autoconfigure.kafka.KafkaAutoConfiguration,\\
org.springframework.boot.autoconfigure.ldap.embedded.EmbeddedLdapAutoConfiguration,\\
org.springframework.boot.autoconfigure.ldap.LdapAutoConfiguration,\\
org.springframework.boot.autoconfigure.liquibase.LiquibaseAutoConfiguration,\\
org.springframework.boot.autoconfigure.mail.MailSenderAutoConfiguration,\\
org.springframework.boot.autoconfigure.mail.MailSenderValidatorAutoConfiguration,\\
org.springframework.boot.autoconfigure.mongo.embedded.EmbeddedMongoAutoConfiguration,\\
org.springframework.boot.autoconfigure.mongo.MongoAutoConfiguration,\\
org.springframework.boot.autoconfigure.mongo.MongoReactiveAutoConfiguration,\\
org.springframework.boot.autoconfigure.mustache.MustacheAutoConfiguration,\\
org.springframework.boot.autoconfigure.orm.jpa.HibernateJpaAutoConfiguration,\\
org.springframework.boot.autoconfigure.quartz.QuartzAutoConfiguration,\\
org.springframework.boot.autoconfigure.rsocket.RSocketMessagingAutoConfiguration,\\
org.springframework.boot.autoconfigure.rsocket.RSocketRequesterAutoConfiguration,\\
org.springframework.boot.autoconfigure.rsocket.RSocketServerAutoConfiguration,\\
org.springframework.boot.autoconfigure.rsocket.RSocketStrategiesAutoConfiguration,\\
org.springframework.boot.autoconfigure.security.servlet.SecurityAutoConfiguration,\\
org.springframework.boot.autoconfigure.security.servlet.UserDetailsServiceAutoConfiguration,\\
org.springframework.boot.autoconfigure.security.servlet.SecurityFilterAutoConfiguration,\\
org.springframework.boot.autoconfigure.security.reactive.ReactiveSecurityAutoConfiguration,\\
org.springframework.boot.autoconfigure.security.reactive.ReactiveUserDetailsServiceAutoConfiguration,\\
org.springframework.boot.autoconfigure.security.rsocket.RSocketSecurityAutoConfiguration,\\
org.springframework.boot.autoconfigure.security.saml2.Saml2RelyingPartyAutoConfiguration,\\
org.springframework.boot.autoconfigure.sendgrid.SendGridAutoConfiguration,\\
org.springframework.boot.autoconfigure.session.SessionAutoConfiguration,\\
org.springframework.boot.autoconfigure.security.oauth2.client.servlet.OAuth2ClientAutoConfiguration,\\
org.springframework.boot.autoconfigure.security.oauth2.client.reactive.ReactiveOAuth2ClientAutoConfiguration,\\
org.springframework.boot.autoconfigure.security.oauth2.resource.servlet.OAuth2ResourceServerAutoConfiguration,\\
org.springframework.boot.autoconfigure.security.oauth2.resource.reactive.ReactiveOAuth2ResourceServerAutoConfiguration,\\
org.springframework.boot.autoconfigure.solr.SolrAutoConfiguration,\\
org.springframework.boot.autoconfigure.task.TaskExecutionAutoConfiguration,\\
org.springframework.boot.autoconfigure.task.TaskSchedulingAutoConfiguration,\\
org.springframework.boot.autoconfigure.thymeleaf.ThymeleafAutoConfiguration,\\
org.springframework.boot.autoconfigure.transaction.TransactionAutoConfiguration,\\
org.springframework.boot.autoconfigure.transaction.jta.JtaAutoConfiguration,\\
org.springframework.boot.autoconfigure.validation.ValidationAutoConfiguration,\\
org.springframework.boot.autoconfigure.web.client.RestTemplateAutoConfiguration,\\
org.springframework.boot.autoconfigure.web.embedded.EmbeddedWebServerFactoryCustomizerAutoConfiguration,\\
org.springframework.boot.autoconfigure.web.reactive.HttpHandlerAutoConfiguration,\\
org.springframework.boot.autoconfigure.web.reactive.ReactiveWebServerFactoryAutoConfiguration,\\
org.springframework.boot.autoconfigure.web.reactive.WebFluxAutoConfiguration,\\
org.springframework.boot.autoconfigure.web.reactive.error.ErrorWebFluxAutoConfiguration,\\
org.springframework.boot.autoconfigure.web.reactive.function.client.ClientHttpConnectorAutoConfiguration,\\
org.springframework.boot.autoconfigure.web.reactive.function.client.WebClientAutoConfiguration,\\
org.springframework.boot.autoconfigure.web.servlet.DispatcherServletAutoConfiguration,\\
org.springframework.boot.autoconfigure.web.servlet.ServletWebServerFactoryAutoConfiguration,\\
org.springframework.boot.autoconfigure.web.servlet.error.ErrorMvcAutoConfiguration,\\
org.springframework.boot.autoconfigure.web.servlet.HttpEncodingAutoConfiguration,\\
org.springframework.boot.autoconfigure.web.servlet.MultipartAutoConfiguration,\\
org.springframework.boot.autoconfigure.web.servlet.WebMvcAutoConfiguration,\\
org.springframework.boot.autoconfigure.websocket.reactive.WebSocketReactiveAutoConfiguration,\\
org.springframework.boot.autoconfigure.websocket.servlet.WebSocketServletAutoConfiguration,\\
org.springframework.boot.autoconfigure.websocket.servlet.WebSocketMessagingAutoConfiguration,\\
org.springframework.boot.autoconfigure.webservices.WebServicesAutoConfiguration,\\
org.springframework.boot.autoconfigure.webservices.client.WebServiceTemplateAutoConfiguration</span>

<span class="token comment"># Failure analyzers</span>
<span class="token key attr-name">org.springframework.boot.diagnostics.FailureAnalyzer</span><span class="token punctuation">=</span><span class="token value attr-value">\\
org.springframework.boot.autoconfigure.diagnostics.analyzer.NoSuchBeanDefinitionFailureAnalyzer,\\
org.springframework.boot.autoconfigure.flyway.FlywayMigrationScriptMissingFailureAnalyzer,\\
org.springframework.boot.autoconfigure.jdbc.DataSourceBeanCreationFailureAnalyzer,\\
org.springframework.boot.autoconfigure.jdbc.HikariDriverConfigurationFailureAnalyzer,\\
org.springframework.boot.autoconfigure.session.NonUniqueSessionRepositoryFailureAnalyzer</span>

<span class="token comment"># Template availability providers</span>
<span class="token key attr-name">org.springframework.boot.autoconfigure.template.TemplateAvailabilityProvider</span><span class="token punctuation">=</span><span class="token value attr-value">\\
org.springframework.boot.autoconfigure.freemarker.FreeMarkerTemplateAvailabilityProvider,\\
org.springframework.boot.autoconfigure.mustache.MustacheTemplateAvailabilityProvider,\\
org.springframework.boot.autoconfigure.groovy.template.GroovyTemplateAvailabilityProvider,\\
org.springframework.boot.autoconfigure.thymeleaf.ThymeleafTemplateAvailabilityProvider,\\
org.springframework.boot.autoconfigure.web.servlet.JspTemplateAvailabilityProvider</span>

</code></pre></div>`,53),c=[e];function u(l,i){return s(),a("div",null,c)}const k=n(p,[["render",u],["__file","q1_start_process.html.vue"]]);export{k as default};
