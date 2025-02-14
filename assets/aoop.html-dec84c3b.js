import{_ as n,p as s,q as a,a1 as t}from"./framework-d81ad7e5.js";const e={},p=t(`<h3 id="spring-aop-methodinterceptor-springmvc-handlerinterceptor-servlet-filter有什么区别" tabindex="-1"><a class="header-anchor" href="#spring-aop-methodinterceptor-springmvc-handlerinterceptor-servlet-filter有什么区别" aria-hidden="true">#</a> spring aop(MethodInterceptor), springmvc (HandlerInterceptor), servlet Filter有什么区别？</h3><p>在spring web mvc中实现拦截功能时，有三种方式</p><ol><li><p>使用功能servlet filter</p></li><li><p>使用springmvc 提供的 HandlerInterceptor</p></li><li><p>使用spring core 提供的 MethodInterceptor（spring aop）</p></li></ol><table><thead><tr><th>拦截方式</th><th>特点</th></tr></thead><tbody><tr><td>servlet的过滤器Filter</td><td>可以拿到原始的http请求和响应的信息，但是拿不到真正处理这个请求的方法的信息</td></tr><tr><td>springmvc的interceptor</td><td>在Filter中是不知道这个请求是哪个控制器的哪个方法来处理的。如果你需要这个信息的话，那么需要使用springmvc的interceptor。 拦截器可以拿到原始的http请求和响应的信息，也能拿到真正处理这个请求的方法的信息，但是其拿不到这个方法被调用的时候真正调用的参数的值</td></tr><tr><td>spring的切片Aspect</td><td>可以拿到方法被调用的时候真正调用的参数的值，但是拿不到原始的http请求和响应的信息</td></tr></tbody></table><h2 id="servlet的过滤器filter" tabindex="-1"><a class="header-anchor" href="#servlet的过滤器filter" aria-hidden="true">#</a> servlet的过滤器Filter</h2><ol><li>我们自己写的Filter类，Filter是Servlet规范的一部分，是Servlet容器（如Tomcat）实现的。 <ol><li>在spring boot下注册一个filter的三种方式（servlet、listener也是如此） <ol><li>方式1：可以使用@WebFilter+@ServletComponentScan的方式</li><li>方式2：可以使用FilterRegistrationBean 进行API级别的注册，注意，在这种情况下可以对Filter order进行设置，而使用spring @Order注解是无效的</li><li>方式3：创建一个类去实现 ServletContextInitializer 接口，并把它注册为一个 Bean，Spring Boot 会负责调用这个接口的 onStartup 方法。</li></ol></li></ol></li></ol><div class="language-java" data-ext="java"><pre class="language-java"><code><span class="token annotation punctuation">@Bean</span>
<span class="token keyword">public</span> <span class="token class-name">ServletRegistrationBean</span> <span class="token function">asyncServletServletRegistrationBean</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token class-name">ServletRegistrationBean</span> registrationBean <span class="token operator">=</span>  <span class="token keyword">new</span> <span class="token class-name">ServletRegistrationBean</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">AsyncServlet</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span><span class="token string">&quot;/&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    registrationBean<span class="token punctuation">.</span><span class="token function">setName</span><span class="token punctuation">(</span><span class="token string">&quot;MyAsyncServlet&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    registrationBean<span class="token punctuation">.</span><span class="token function">setOrder</span><span class="token punctuation">(</span><span class="token class-name">Ordered</span><span class="token punctuation">.</span><span class="token constant">HIGHEST_PRECEDENCE</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> registrationBean<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><h4 id="方式三" tabindex="-1"><a class="header-anchor" href="#方式三" aria-hidden="true">#</a> 方式三</h4><div class="language-java" data-ext="java"><pre class="language-java"><code><span class="token annotation punctuation">@Bean</span>
<span class="token keyword">public</span> <span class="token class-name">ServletContextInitializer</span> <span class="token function">servletContextInitializer</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> servletContext <span class="token operator">-&gt;</span> <span class="token punctuation">{</span>
        <span class="token class-name">CharacterEncodingFilter</span> filter <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">CharacterEncodingFilter</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">FilterRegistration<span class="token punctuation">.</span>Dynamic</span> registration <span class="token operator">=</span> servletContext<span class="token punctuation">.</span><span class="token function">addFilter</span><span class="token punctuation">(</span><span class="token string">&quot;filter&quot;</span><span class="token punctuation">,</span> filter<span class="token punctuation">)</span><span class="token punctuation">;</span>
        registration<span class="token punctuation">.</span><span class="token function">addMappingForUrlPatterns</span><span class="token punctuation">(</span><span class="token class-name">EnumSet</span><span class="token punctuation">.</span><span class="token function">of</span><span class="token punctuation">(</span><span class="token class-name">DispatcherType</span><span class="token punctuation">.</span><span class="token constant">REQUEST</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token boolean">false</span><span class="token punctuation">,</span> <span class="token string">&quot;/&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><blockquote><p><strong>FilterRegistrationBean其实也是通过 ServletContextInitializer 来实现的，它实现了 ServletContextInitializer 接口</strong></p></blockquote><h3 id="特点" tabindex="-1"><a class="header-anchor" href="#特点" aria-hidden="true">#</a> 特点：</h3><p>可以拿到原始的http请求和响应的信息，但是拿不到真正处理这个请求的方法的信息</p><h3 id="存在的问题" tabindex="-1"><a class="header-anchor" href="#存在的问题" aria-hidden="true">#</a> 存在的问题：</h3><ul><li>通过Filter只能拿到http的请求和响应，只能从请求和响应中获得一些参数。</li><li>当前发过来的这个请求实际上真正是由哪个控制器的哪个方法来处理的，在Filter里面是不知道的，因为javax.servlet.Filter是J2EE规范中定义的，J2EE规范里面实际上并不知道与spring相关的任何内容。</li><li>而我们的controller实际上是spring mvc定义的一套机制。如果你需要这些信息，那么就需要使用拦截器Interceptor</li></ul><h2 id="springmvc的拦截器interceptor" tabindex="-1"><a class="header-anchor" href="#springmvc的拦截器interceptor" aria-hidden="true">#</a> springmvc的拦截器Interceptor</h2><p><code>public class TimeInterceptor implements HandlerInterceptor {}</code></p><div class="language-java" data-ext="java"><pre class="language-java"><code>
<span class="token keyword">public</span> <span class="token keyword">interface</span> <span class="token class-name">HandlerInterceptor</span> <span class="token punctuation">{</span>

<span class="token comment">// 最后一个参数，Object handler，这个是 真正用来处理这个请求的Controller的方法声明</span>
	<span class="token keyword">default</span> <span class="token keyword">boolean</span> <span class="token function">preHandle</span><span class="token punctuation">(</span><span class="token class-name">HttpServletRequest</span> request<span class="token punctuation">,</span> <span class="token class-name">HttpServletResponse</span> response<span class="token punctuation">,</span> <span class="token class-name">Object</span> handler<span class="token punctuation">)</span>
			<span class="token keyword">throws</span> <span class="token class-name">Exception</span> <span class="token punctuation">{</span>
		<span class="token keyword">return</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>

	<span class="token keyword">default</span> <span class="token keyword">void</span> <span class="token function">postHandle</span><span class="token punctuation">(</span><span class="token class-name">HttpServletRequest</span> request<span class="token punctuation">,</span> <span class="token class-name">HttpServletResponse</span> response<span class="token punctuation">,</span> <span class="token class-name">Object</span> handler<span class="token punctuation">,</span>
			<span class="token annotation punctuation">@Nullable</span> <span class="token class-name">ModelAndView</span> modelAndView<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">Exception</span> <span class="token punctuation">{</span>
	<span class="token punctuation">}</span>

<span class="token comment">// 其中的Exception就是表示其是否发生了异常</span>
	<span class="token keyword">default</span> <span class="token keyword">void</span> <span class="token function">afterCompletion</span><span class="token punctuation">(</span><span class="token class-name">HttpServletRequest</span> request<span class="token punctuation">,</span> <span class="token class-name">HttpServletResponse</span> response<span class="token punctuation">,</span> <span class="token class-name">Object</span> handler<span class="token punctuation">,</span>
			<span class="token annotation punctuation">@Nullable</span> <span class="token class-name">Exception</span> ex<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">Exception</span> <span class="token punctuation">{</span>
	<span class="token punctuation">}</span>

<span class="token punctuation">}</span>
</code></pre></div><ul><li>在我们真正访问的Controller的某个方法被调用之前，会调用preHandler方法</li><li>在Controller的方法调用之后，会调用postHandler方法</li><li>如果你的controller中的方法抛出了异常，那么postHandler这个方法不会被调用。</li><li>但无论controller中的方法是否抛出异常，afterCompletion方法都是会被调用的。</li></ul><h3 id="特点-1" tabindex="-1"><a class="header-anchor" href="#特点-1" aria-hidden="true">#</a> 特点：</h3><ol><li>拦截器可以拿到原始的http请求和响应的信息，也能拿到真正处理这个请求的方法的信息，但是其拿不到这个方法被调用的时候真正调用的参数的值</li><li>通过handler虽然可以拿到处理此请求的controller和method，但是其没办法拿到这个method的真正的参数的值</li><li>这个handler只是那个方法的声明，但实际调用的时候，比如说调用getInfo的时候，我的这个id传的是多少，在拦截器里面用handler是拿不到的</li><li>为什么会这样呢？ 从源码上看一下 <ol><li><code>{@link org.springframework.web.servlet.DispatcherServlet#doDispatch}</code></li></ol></li></ol><div class="language-java" data-ext="java"><pre class="language-java"><code>				<span class="token comment">// Process last-modified header, if supported by the handler.</span>
				<span class="token class-name">String</span> method <span class="token operator">=</span> request<span class="token punctuation">.</span><span class="token function">getMethod</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
				<span class="token keyword">boolean</span> isGet <span class="token operator">=</span> <span class="token class-name">HttpMethod</span><span class="token punctuation">.</span><span class="token constant">GET</span><span class="token punctuation">.</span><span class="token function">matches</span><span class="token punctuation">(</span>method<span class="token punctuation">)</span><span class="token punctuation">;</span>
				<span class="token keyword">if</span> <span class="token punctuation">(</span>isGet <span class="token operator">||</span> <span class="token class-name">HttpMethod</span><span class="token punctuation">.</span><span class="token constant">HEAD</span><span class="token punctuation">.</span><span class="token function">matches</span><span class="token punctuation">(</span>method<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
					<span class="token keyword">long</span> lastModified <span class="token operator">=</span> ha<span class="token punctuation">.</span><span class="token function">getLastModified</span><span class="token punctuation">(</span>request<span class="token punctuation">,</span> mappedHandler<span class="token punctuation">.</span><span class="token function">getHandler</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
					<span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">ServletWebRequest</span><span class="token punctuation">(</span>request<span class="token punctuation">,</span> response<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">checkNotModified</span><span class="token punctuation">(</span>lastModified<span class="token punctuation">)</span> <span class="token operator">&amp;&amp;</span> isGet<span class="token punctuation">)</span> <span class="token punctuation">{</span>
						<span class="token keyword">return</span><span class="token punctuation">;</span>
					<span class="token punctuation">}</span>
				<span class="token punctuation">}</span>
<span class="token comment">// 这个方法就是调用我们拦截器的preHandler方法</span>
<span class="token comment">// 如果我们的interceptor的preHandler返回的是false，就直接return掉不进行处理，否则执行目标controller的目标method</span>
				<span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>mappedHandler<span class="token punctuation">.</span><span class="token function">applyPreHandle</span><span class="token punctuation">(</span>processedRequest<span class="token punctuation">,</span> response<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
					<span class="token keyword">return</span><span class="token punctuation">;</span>
				<span class="token punctuation">}</span>
                mv <span class="token operator">=</span> ha<span class="token punctuation">.</span><span class="token function">handle</span><span class="token punctuation">(</span>processedRequest<span class="token punctuation">,</span> response<span class="token punctuation">,</span> mappedHandler<span class="token punctuation">.</span><span class="token function">getHandler</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// 而方法参数的拼装是在ha.handle这个方法中完成的，</span>
<span class="token comment">// 所谓的方法参数的拼装就是把我请求中的参数组装成我们controller的method中所要的参数/对象</span>

<span class="token comment">// 另外，在interceptor中可以指定指定的url才需要拦截</span>
</code></pre></div><h2 id="spring-aop" tabindex="-1"><a class="header-anchor" href="#spring-aop" aria-hidden="true">#</a> spring aop</h2><ol><li>在spring中，Advice的实现接口就是Interceptor</li><li>注意，Advice和Interceptor都是在<strong>org.aopalliance</strong>包下，并非在spring包下，<strong>为spring引入的外部依赖</strong></li><li>Interceptor接口在spring中的实现类<strong>MethodInterceptor</strong>，通过<code>before, after, afterReturing, afterThrowing</code>等增强器来对目标方法进行增强</li></ol><h3 id="特点-2" tabindex="-1"><a class="header-anchor" href="#特点-2" aria-hidden="true">#</a> 特点</h3><ol><li>可以拿到方法被调用的时候真正调用的参数的值</li><li>但是拿不到原始的http请求和响应的信息</li></ol><p>Filter最先其作用</p><p>之后是Interceptor</p><p>再之后才是Aspect</p><p>之后才会进入到Controller中去</p><p>可以看到springmvc中的拦截器是用来拦截请求的，在MethodInterceptor之前执行</p><p>而MethodInterceptor是spring AOP项目中的拦截器，它拦截的目标是方法，即使其不是Controller中的请求方法。</p>`,31),o=[p];function c(l,r){return s(),a("div",null,o)}const u=n(e,[["render",c],["__file","aoop.html.vue"]]);export{u as default};
