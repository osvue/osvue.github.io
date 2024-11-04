import{_ as n,p as a,q as s,a1 as t}from"./framework-d81ad7e5.js";const p={},o=t(`<ol><li>spring程序是如何启动的?</li><li>spring是如何加载配置文件到应用程序的?</li><li>掌握核心接口BeanDefinitionReader</li><li>掌握核心接口BeanFactory</li><li>彻底搞懂Spring的refresh方法</li><li>BeanPostProcessor接口的作用及实现</li><li>BeanFactoryPostProcessor接口的作用及实现</li><li>SpringBean有没有必要实现Aware接口</li><li>彻底理解bean的生命周期</li><li>循环依赖问题</li><li>factoryBean接口的作用</li><li>bean的初始化都经历了什么</li><li>cglib和jdk动态代理的机制播</li><li>aop是如何处理的</li><li>如何回答spring相关的问题</li></ol><h2 id="循环依赖" tabindex="-1"><a class="header-anchor" href="#循环依赖" aria-hidden="true">#</a> 循环依赖</h2><blockquote><p>spring 中采用了三级缓存来解决循环依赖</p></blockquote><blockquote><p>只用一级缓存可以解决循环依赖吗 不能，如果只有一级缓存的话，那么一个对象的成品状态和半成品对象都要放到同一个空间里如果有其他提作获取到半成品对象怎么办?不能使用半成品对象的bean，因此需要将成品和半成品状态的bean对象分开存储，使用两个map结构来存储即 可，一级缓存中存放的是成品对象， 二级缓存中存放的是半成品对象</p></blockquote><blockquote><p>如果只有二级缓存能不能解决问题?</p></blockquote><p>如果整个对象的创建过程没有AOP的存在，那么二级缓存也可以解决循环依赖问题如果有了aop，那么二级缓存就无法解决问题</p><blockquote><p>为什么非要有三级缓存?</p></blockquote><p>使用aop之后，要创建代理对象 同一个容器中，不能存在同名的两个bean对象 因为当创建完成代理对象之后，就有了普通的原始对象和代理对象两个对象，他们都归属于同一个beanName，此时在进行对象属性注入的时候，应该用哪个? 容器在进行对象查找的时候，不知道用哪个了，所以在创建代理对象的过程中，会将生成的代理对象替换原来的普通对象，保证对外暴露的时候只有一个 那么在刚刚的过程中，三级缓存起的价值到底是啥? 我们在进行对象创建的过程中，是不知道什么时候回生成代理对象的，所以要保证第一个对象被调用的时候，确认清楚到底返回的是代理对象还是普通对象，因为有了三级缓存的存在，所以每次在进行对象调用的时候，从三级缓存中获取对象，获取之后会调用getEarlyBeanReference方法来确定返回的到底是代理对象还是普通对象，只要第一次调用确定了，那么之后都会用同一个对象。</p><div class="language-java" data-ext="java"><pre class="language-java"><code><span class="token class-name"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>aop<span class="token punctuation">.</span>framework<span class="token punctuation">.</span>autoproxy<span class="token punctuation">.</span></span>AbstractAutoProxyCreator</span>
<span class="token comment">// specificInterceptors</span>
<span class="token comment">/*
解决循环依赖

 实例化
 初始化
	填充属性 populateBean

	调用Aware 接口 InvokeAwareMethods  ==&gt;方便自定义对象获取容器对象
	调用Before 方法 共同实现父类 BeanPostProcesstor
	
	调用初始化方法	InvokeInitMethods  InitializingBean
	
	调用after 方法  
*/</span>	
			<span class="token class-name"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>aop<span class="token punctuation">.</span>framework<span class="token punctuation">.</span>autoproxy<span class="token punctuation">.</span></span>AbstractAutoProxyCreator</span>
			
		

 
        <span class="token class-name"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>beans<span class="token punctuation">.</span>factory<span class="token punctuation">.</span>support<span class="token punctuation">.</span></span>AbstractAutowireCapableBeanFactory</span>		
		<span class="token comment">// Eagerly cache singletons to be able to resolve circular references</span>
		<span class="token comment">// even when triggered by lifecycle interfaces like BeanFactoryAware.</span>
		<span class="token keyword">boolean</span> earlySingletonExposure <span class="token operator">=</span> <span class="token punctuation">(</span>mbd<span class="token punctuation">.</span><span class="token function">isSingleton</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">&amp;&amp;</span> <span class="token keyword">this</span><span class="token punctuation">.</span>allowCircularReferences <span class="token operator">&amp;&amp;</span>
				<span class="token function">isSingletonCurrentlyInCreation</span><span class="token punctuation">(</span>beanName<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span>earlySingletonExposure<span class="token punctuation">)</span> <span class="token punctuation">{</span>
			<span class="token keyword">if</span> <span class="token punctuation">(</span>logger<span class="token punctuation">.</span><span class="token function">isTraceEnabled</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
				logger<span class="token punctuation">.</span><span class="token function">trace</span><span class="token punctuation">(</span><span class="token string">&quot;Eagerly caching bean &#39;&quot;</span> <span class="token operator">+</span> beanName <span class="token operator">+</span>
						<span class="token string">&quot;&#39; to allow for resolving potential circular references&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
			<span class="token punctuation">}</span>
			<span class="token function">addSingletonFactory</span><span class="token punctuation">(</span>beanName<span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">-&gt;</span> <span class="token function">getEarlyBeanReference</span><span class="token punctuation">(</span>beanName<span class="token punctuation">,</span> mbd<span class="token punctuation">,</span> bean<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span>

<span class="token comment">// 此方法会将生成的代理对象替换原来的普通对象，保证对外暴露的时候只有一个</span>
	<span class="token class-name"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>aop<span class="token punctuation">.</span>framework<span class="token punctuation">.</span>autoproxy<span class="token punctuation">.</span></span>AbstractAutoProxyCreator</span>#wrapIfNecessary
</code></pre></div>`,9),e=[o];function c(l,i){return a(),s("div",null,e)}const r=n(p,[["render",c],["__file","sym_mca.html.vue"]]);export{r as default};
