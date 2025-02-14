import{_ as n,p as s,q as a,a1 as t}from"./framework-d81ad7e5.js";const p={},e=t(`<h2 id="原理" tabindex="-1"><a class="header-anchor" href="#原理" aria-hidden="true">#</a> 原理</h2><ol><li>主程序入口添加@EnableFeignClients注解开启对Feign Client扫描加载处理。根据Feign Client的开发规范，定义接口并加@FeignClient注解。</li><li>当程序启动时，会进行包扫描，扫描所有@FeignClient注解的类，并将这些信息注入Spring IoC容器中。当定义的Feign接口中的方法被调用时，通过JDK的代理方式，来生成具体的RequestTemplate。当生成代理时，Feign会为每个接口方法创建一个RequestTemplate对象，该对象封装了HTTP请求需要的全部信息，如请求参数名、请求方法等信息都在这个过程中确定。</li><li>然后由RequestTemplate生成Request，然后把这个Request交给client处理，这里指的Client可以是JDK原生的URLConnection、Apache的Http Client，也可以是Okhttp。最后Client被封装到LoadBalanceClient类，这个类结合Ribbon负载均衡发起服务之间的调用。</li></ol><h2 id="压缩" tabindex="-1"><a class="header-anchor" href="#压缩" aria-hidden="true">#</a> 压缩</h2><p>服务端provider配置</p><div class="language-text" data-ext="text"><pre class="language-text"><code>#服务端开启压缩
server.compression.enabled=true

</code></pre></div><p>调用方consumer配置</p><div class="language-text" data-ext="text"><pre class="language-text"><code>#配置请求GZIP压缩
feign.compression.request.enabled=true
#配置响应GZIP压缩
feign.compression.response.enabled=true
#单位是B
feign.compression.request.min-request-size=100
</code></pre></div><h2 id="源码" tabindex="-1"><a class="header-anchor" href="#源码" aria-hidden="true">#</a> 源码</h2><h3 id="两大流程" tabindex="-1"><a class="header-anchor" href="#两大流程" aria-hidden="true">#</a> 两大流程</h3><ol><li><p>程序启动时：接口的bean实例时如何初始化的，被@FeignClient修饰的接口类。构建Bean。</p></li><li><p>网络调用时：调用上面类的方法时如何发送网络请求。网络请求。</p><p>源码分为两部分入手：一部分初始化bean实例，一部分发送网络请求。</p></li></ol><h3 id="核心组件" tabindex="-1"><a class="header-anchor" href="#核心组件" aria-hidden="true">#</a> 核心组件</h3><p>FeignClientFactoryBean是创建@FeignClient修饰的接口类Bean实例的工厂类；</p><p>FeignContext是配置组件的上下文环境，保存着相关组件的不同实例，这些实例由不同的FeignConfiguration配置类构造出来；想象一下如图：</p><p>SynchronousMethodHandler是MethodHandler的子类，可以在FeignClient相应方法被调用时发送网络请求，然后再将请求响应转化为函数返回值进行输出。</p><h3 id="流程" tabindex="-1"><a class="header-anchor" href="#流程" aria-hidden="true">#</a> 流程</h3><ol><li>启动时会首先进行相关的BeanDefinition的动态注册，</li><li>然后当Spring容器注入相关实例时会进行实例初始化，</li><li>最后当feign接口类实例函数调用时会发送网络请求。</li></ol><h3 id="入口" tabindex="-1"><a class="header-anchor" href="#入口" aria-hidden="true">#</a> 入口</h3><div class="language-bash" data-ext="sh"><pre class="language-bash"><code>spring-cloud-starter-openfeign-2.1.2.RELEASE.jar
中基于spring-cloud-openfeign-core-2.1.2.RELEASE.jar
自动注入一大堆：
<span class="token assign-left variable">org.springframework.boot.autoconfigure.EnableAutoConfiguration</span><span class="token operator">=</span><span class="token punctuation">\\</span>
org.springframework.cloud.openfeign.ribbon.FeignRibbonClientAutoConfiguration,<span class="token punctuation">\\</span>
org.springframework.cloud.openfeign.FeignAutoConfiguration,<span class="token punctuation">\\</span>
org.springframework.cloud.openfeign.encoding.FeignAcceptGzipEncodingAutoConfiguration,<span class="token punctuation">\\</span>
org.springframework.cloud.openfeign.encoding.FeignContentGzipEncodingAutoConfiguration

先记着FeignAutoConfiguration
</code></pre></div><h3 id="开关" tabindex="-1"><a class="header-anchor" href="#开关" aria-hidden="true">#</a> 开关</h3><p>打开源码看。</p><p>从开关开始@EnableFeignClients，点进去此注解。</p><p>@EnableFeignClients有三个作用：</p><p>一是引入FeignClientsRegistrar；</p><h3 id="import" tabindex="-1"><a class="header-anchor" href="#import" aria-hidden="true">#</a> @Import</h3><h4 id="import-feignclientsregistrar-class" tabindex="-1"><a class="header-anchor" href="#import-feignclientsregistrar-class" aria-hidden="true">#</a> @Import(FeignClientsRegistrar.class)</h4><div class="custom-container danger"><p class="custom-container-title">DANGER</p><p>在@Import注解的参数中可以填写类名，例如@Import(Abc.class)，根据类Abc的不同类型，spring容器有以下四种处理方式： <br></p><ol><li>如果Abc类实现了ImportSelector接口，spring容器就会实例化Abc类，并且调用其selectImports方法； <br></li><li>DeferredImportSelector是ImportSelector的子类，如果Abc类实现了DeferredImportSelector接口，spring容器就会实例化Abc类，并且调用其selectImports方法，和ImportSelector的实例不同的是，DeferredImportSelector的实例的selectImports方法调用时机晚于ImportSelector的实例，要等到@Configuration注解中相关的业务全部都处理完了才会调用（具体逻辑在ConfigurationClassParser.processDeferredImportSelectors方法中） <br></li><li>如果Abc类实现了ImportBeanDefinitionRegistrar接口，spring容器就会实例化Abc类，并且调用其registerBeanDefinitions方法； <br></li><li>如果Abc没有实现ImportSelector、DeferredImportSelector、ImportBeanDefinitionRegistrar等其中的任何一个，spring容器就会实例化Abc类；</li></ol></div><p>我们此时的FeignClientsRegistrar，属于第三种情况。</p><p>二是指定扫描FeignClient的包信息，就是指定FeignClient接口类所在的包名；</p><p>value()，basePackages()，basePackageClasses() ，默认都为空，如果要指定，可以在注解中加。</p><p>三是指定FeignClient接口类的自定义配置类。</p><p>defaultConfiguration()，看注释：默认是：FeignClientsConfiguration，</p><p>clients()，罗列被@FeignClient修饰的类</p><h3 id="feignclientsregistrar" tabindex="-1"><a class="header-anchor" href="#feignclientsregistrar" aria-hidden="true">#</a> FeignClientsRegistrar</h3><p>上面提到的org.springframework.cloud.openfeign.FeignClientsRegistrar implements ImportBeanDefinitionRegistrar。</p><p>FeignClientsRegistrar是ImportBeanDefinitionRegistrar的子类，Spring用ImportBeanDefinitionRegistrar来动态注册BeanDefinition。OpenFeign通过FeignClientsRegistrar也能实现动态注册beanfefinition的功能。即处理@FeignClient修饰的FeignClient接口类，将这些接口类的BeanDefinition注册到Spring容器中，这样就可以使用@Autowired等方式来自动装载这些FeignClient接口类的Bean实例。</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code>BeanDefinition
Spring使用BeanDefinition来描述bean

BeanDefinitionBuilder是Builder模式的应用。通过这个类我们可以方便的构建BeanDefinition的实例对象
建造者模式：https://www.runoob.com/design-pattern/builder-pattern.html

其实就是将Bean的定义信息存储到这个BeanDefinition相应的属性中，后面对Bean的操作就直接对BeanDefinition进行，例如拿到这个BeanDefinition后，可以根据里面的类名、构造函数、构造函数参数，使用反射进行对象创建。
</code></pre></div><div class="language-bash" data-ext="sh"><pre class="language-bash"><code>打断点可以，看到启动的时候执行到这个方法。
class FeignClientsRegistrar
中：
	@Override
	public void registerBeanDefinitions<span class="token punctuation">(</span>AnnotationMetadata metadata,
			BeanDefinitionRegistry registry<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		// 从开关EnableFeignClients的属性值来构建Feign的自定义Configuration进行注册。看其代码的第一句。
		registerDefaultConfiguration<span class="token punctuation">(</span>metadata, registry<span class="token punctuation">)</span><span class="token punctuation">;</span>
		// 注册被@FeignClient的修饰的接口类的信息。
		registerFeignClients<span class="token punctuation">(</span>metadata, registry<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>

两个功能：
<span class="token number">1</span>、注册@EnableFeignClients提供的自定义配置类中的相关bean。此时的配置类是被 @Configuration注解修饰的配置类，它会提供一系列组装FeignClient的各类组件实例，比如Decoder、Encoder等。
<span class="token number">2</span>、根据@EnableFeignClients提供的包信息扫描@FeignClient修饰的接口类，并注册。
	
</code></pre></div><h3 id="registerdefaultconfiguration方法" tabindex="-1"><a class="header-anchor" href="#registerdefaultconfiguration方法" aria-hidden="true">#</a> registerDefaultConfiguration方法</h3><div class="language-bash" data-ext="sh"><pre class="language-bash"><code>点第一个方法进去，registerDefaultConfiguration。
	private void registerDefaultConfiguration<span class="token punctuation">(</span>AnnotationMetadata metadata,
			BeanDefinitionRegistry registry<span class="token punctuation">)</span> <span class="token punctuation">{</span>
			// 获取@EnableFeignClients中属性键值对。
		Map<span class="token operator">&lt;</span>String, Object<span class="token operator">&gt;</span> defaultAttrs <span class="token operator">=</span> metadata
				.getAnnotationAttributes<span class="token punctuation">(</span>EnableFeignClients.class.getName<span class="token punctuation">(</span><span class="token punctuation">)</span>, <span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		// 如果@EnableFeignClients，注解中有属性，并且包含defaultConfiguration，则进入此逻辑。
		<span class="token keyword">if</span> <span class="token punctuation">(</span>defaultAttrs <span class="token operator">!=</span> null <span class="token operator">&amp;&amp;</span> defaultAttrs.containsKey<span class="token punctuation">(</span><span class="token string">&quot;defaultConfiguration&quot;</span><span class="token punctuation">))</span> <span class="token punctuation">{</span>
			String name<span class="token punctuation">;</span>
			<span class="token keyword">if</span> <span class="token punctuation">(</span>metadata.hasEnclosingClass<span class="token punctuation">(</span><span class="token punctuation">))</span> <span class="token punctuation">{</span>
				name <span class="token operator">=</span> <span class="token string">&quot;default.&quot;</span> + metadata.getEnclosingClassName<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
			<span class="token punctuation">}</span>
			<span class="token keyword">else</span> <span class="token punctuation">{</span>
				name <span class="token operator">=</span> <span class="token string">&quot;default.&quot;</span> + metadata.getClassName<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
			<span class="token punctuation">}</span>
			registerClientConfiguration<span class="token punctuation">(</span>registry, name,
					defaultAttrs.get<span class="token punctuation">(</span><span class="token string">&quot;defaultConfiguration&quot;</span><span class="token punctuation">))</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>
debug看出name是：default.com.online.taxi.passenger.ApiPassengerApplication	

点进去registerClientConfiguration，此方法进行BeanDefinitionRegistry注册。
private void registerClientConfiguration<span class="token punctuation">(</span>BeanDefinitionRegistry registry, Object name,
			Object configuration<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		// 先生成beanDefinition。
		BeanDefinitionBuilder builder <span class="token operator">=</span> BeanDefinitionBuilder
				.genericBeanDefinition<span class="token punctuation">(</span>FeignClientSpecification.class<span class="token punctuation">)</span><span class="token punctuation">;</span>
		
		builder.addConstructorArgValue<span class="token punctuation">(</span>name<span class="token punctuation">)</span><span class="token punctuation">;</span>
		builder.addConstructorArgValue<span class="token punctuation">(</span>configuration<span class="token punctuation">)</span><span class="token punctuation">;</span>
		// 注册beandefinition
		registry.registerBeanDefinition<span class="token punctuation">(</span>
				name + <span class="token string">&quot;.&quot;</span> + FeignClientSpecification.class.getSimpleName<span class="token punctuation">(</span><span class="token punctuation">)</span>,
				builder.getBeanDefinition<span class="token punctuation">(</span><span class="token punctuation">))</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>

上面方法第一个参数：BeanDefinitionRegistry是Spring框架中用于动态注册BeanDefinition信息的接口，调用其registerBeanDefinition方法可以将BeanDefinition注册到Spring容器中，此方法第一个参数是beanName，name属性就是注册BeanDefinition的名称（default.com.online.taxi.passenger.ApiPassengerApplication）。 

上面FeignClientSpecification
class FeignClientSpecification implements NamedContextFactory.Specification
FeignClientSpecification持有自定义配置类提供的组件实例，供OpenFeign使用。

Spring Cloud框架使用NamedContextFactory创建一系列的运行上下文<span class="token punctuation">(</span>ApplicationContext<span class="token punctuation">)</span>，来让对应的Specification在这些上下文中创建实例对象。这样使得各个子上下文中的实例对象相互独立，互不影响，可以方便地通过子上下文管理一系列不同的实例对象。意思就是：此处的FeignClientSpecification持有的自定义配置类的组件在feign的上下文中和其他上下文独立。feign组件就是feign的组件，和其他组件区分开。
        
        NamedContextFactory有三个功能，
        一是创建AnnotationConfigApplicationContext子上下文；
        二是在子上下文中创建并获取Bean实例；
        三是当子上下文消亡时清除其中的Bean实例（通过其父类DisposableBean的destory实现）。
        我们看NamedContextFactory的实现类有：FeignContext。
        构造方法中有：super<span class="token punctuation">(</span>FeignClientsConfiguration.class, <span class="token string">&quot;feign&quot;</span>, <span class="token string">&quot;feign.client.name&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        可以看出FeignContext存储了各类 openFeign的 组件实例。
        
        此时我们发现一个类FeignContext。
        
        而FeignContext组件实例是通过：FeignAutoConfiguration自动配置的。
        我们看到在org.springframework.cloud.openfeign.FeignAutoConfiguration中，定义了一个bean：
    @Bean
	public FeignContext <span class="token function-name function">feignContext</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		FeignContext context <span class="token operator">=</span> new FeignContext<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		// 此时将上面注册的FeignClientSpecification设置到feignContext的configuration中。
		context.setConfigurations<span class="token punctuation">(</span>this.configurations<span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token builtin class-name">return</span> context<span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
看构造函数：
public <span class="token function-name function">FeignContext</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		super<span class="token punctuation">(</span>FeignClientsConfiguration.class, <span class="token string">&quot;feign&quot;</span>, <span class="token string">&quot;feign.client.name&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	发现了上面所说开关中的默认配置FeignClientsConfiguration类。
	     	   	
上面就是：将@EnableFeignClients注解中的自定义配置注册到spring中。
	
</code></pre></div><h3 id="registerfeignclients" tabindex="-1"><a class="header-anchor" href="#registerfeignclients" aria-hidden="true">#</a> registerFeignClients</h3><div class="language-bash" data-ext="sh"><pre class="language-bash"><code>第二个方法。注册feignclient接口的beanDefinition。
public void registerFeignClients<span class="token punctuation">(</span>AnnotationMetadata metadata,
			BeanDefinitionRegistry registry<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		ClassPathScanningCandidateComponentProvider scanner <span class="token operator">=</span> getScanner<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		scanner.setResourceLoader<span class="token punctuation">(</span>this.resourceLoader<span class="token punctuation">)</span><span class="token punctuation">;</span>

		Set<span class="token operator">&lt;</span>String<span class="token operator">&gt;</span> basePackages<span class="token punctuation">;</span>

		Map<span class="token operator">&lt;</span>String, Object<span class="token operator">&gt;</span> attrs <span class="token operator">=</span> metadata
				.getAnnotationAttributes<span class="token punctuation">(</span>EnableFeignClients.class.getName<span class="token punctuation">(</span><span class="token punctuation">))</span><span class="token punctuation">;</span>
				
				注册被@FeignClient的修饰的接口类的信息。
		AnnotationTypeFilter annotationTypeFilter <span class="token operator">=</span> new AnnotationTypeFilter<span class="token punctuation">(</span>
				FeignClient.class<span class="token punctuation">)</span><span class="token punctuation">;</span>

此方法中有两个for循环：
<span class="token keyword">for</span> <span class="token punctuation">(</span>String basePackage <span class="token builtin class-name">:</span> basePackages<span class="token punctuation">)</span> <span class="token punctuation">{</span>
			Set<span class="token operator">&lt;</span>BeanDefinition<span class="token operator">&gt;</span> candidateComponents <span class="token operator">=</span> scanner
					.findCandidateComponents<span class="token punctuation">(</span>basePackage<span class="token punctuation">)</span><span class="token punctuation">;</span>
			<span class="token keyword">for</span> <span class="token punctuation">(</span>BeanDefinition candidateComponent <span class="token builtin class-name">:</span> candidateComponents<span class="token punctuation">)</span> <span class="token punctuation">{</span>

第一层循环是 项目主包，第二层循环是循环所有@FeignClient注解修饰的接口。找出来后注册到spring，beandefinition。			
</code></pre></div><p>小结：</p><p>FeignClientsRegistrar的registerBeanDefinitions方法主要做了两个事情：</p><p>一是注册@EnableFeignClients提供的自定义配置类中的相关Bean实例，</p><p>二是注册@FeignClient注解修饰的FeignCleint接口类，然后进行Bean实例注册。</p><p>@EnableFeignClients的自定义配置类是被@Configuration注解修饰的配置类，它会提供一系列组装FeignClient的各类组件实例。这些组件包括：Client、Targeter、Decoder、Encoder和Contract等</p><hr><h3 id="实例初始化" tabindex="-1"><a class="header-anchor" href="#实例初始化" aria-hidden="true">#</a> 实例初始化</h3><p>上面讲了BeanDefinition注册。下面进行实例初始化。</p><p>在spring-cloud-openfeign-core-2.1.2.RELEASE中，org.springframework.cloud.openfeign.FeignClientFactoryBean。Spring容器通过调用它的getObject来获取对应的bean实例。此时的实例是指被@FeignClient修饰的接口类的实例。点getTarget方法进去。</p><p>意思：每个feignclient的实例都通过此工厂类，获取对应的实例。</p><p>Client client = getOptional(context, Client.class);获取client对象。</p><p>org.springframework.cloud.openfeign.Targeter有两个实现类：DefaultTargeter和HystrixTargeter</p><p>主要说DefaultTargeter。</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code>class DefaultTargeter implements Targeter <span class="token punctuation">{</span>

	@Override
	public <span class="token operator">&lt;</span>T<span class="token operator">&gt;</span> T target<span class="token punctuation">(</span>FeignClientFactoryBean factory, Feign.Builder feign,
			FeignContext context, Target.HardCodedTarget<span class="token operator">&lt;</span>T<span class="token operator">&gt;</span> target<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token builtin class-name">return</span> feign.target<span class="token punctuation">(</span>target<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>

<span class="token punctuation">}</span>
</code></pre></div><p>其中：Feign.Builder feign，作用：负责生成被@FeignClient修饰的接口类实例，通过Java的反射机制，生成实例，当feignclient的方法被调用时，InvocationHandler的回调函数会被调用。在回调函数中发送网络请求。</p><div class="language-java" data-ext="java"><pre class="language-java"><code>    <span class="token keyword">public</span> <span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">T</span><span class="token punctuation">&gt;</span></span> <span class="token class-name">T</span> <span class="token function">target</span><span class="token punctuation">(</span><span class="token class-name">Target</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">T</span><span class="token punctuation">&gt;</span></span> target<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> <span class="token function">build</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">newInstance</span><span class="token punctuation">(</span>target<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token class-name">Feign</span> <span class="token function">build</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token class-name">SynchronousMethodHandler<span class="token punctuation">.</span>Factory</span> synchronousMethodHandlerFactory <span class="token operator">=</span>
          <span class="token keyword">new</span> <span class="token class-name">SynchronousMethodHandler<span class="token punctuation">.</span>Factory</span><span class="token punctuation">(</span>client<span class="token punctuation">,</span> retryer<span class="token punctuation">,</span> requestInterceptors<span class="token punctuation">,</span> logger<span class="token punctuation">,</span>
              logLevel<span class="token punctuation">,</span> decode404<span class="token punctuation">,</span> closeAfterDecode<span class="token punctuation">,</span> propagationPolicy<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token class-name">ParseHandlersByName</span> handlersByName <span class="token operator">=</span>
          <span class="token keyword">new</span> <span class="token class-name">ParseHandlersByName</span><span class="token punctuation">(</span>contract<span class="token punctuation">,</span> options<span class="token punctuation">,</span> encoder<span class="token punctuation">,</span> decoder<span class="token punctuation">,</span> queryMapEncoder<span class="token punctuation">,</span>
              errorDecoder<span class="token punctuation">,</span> synchronousMethodHandlerFactory<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">ReflectiveFeign</span><span class="token punctuation">(</span>handlersByName<span class="token punctuation">,</span> invocationHandlerFactory<span class="token punctuation">,</span> queryMapEncoder<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

<span class="token class-name">ReflectiveFeign</span>有个newInstance方法，<span class="token number">2</span>个功能：<span class="token number">1</span>：扫描feignclient接口类的所有函数，生成对应的<span class="token class-name">Handler</span>。<span class="token number">2</span>：用<span class="token class-name">Proxy</span>生成feignclient的实例对象。
<span class="token annotation punctuation">@SuppressWarnings</span><span class="token punctuation">(</span><span class="token string">&quot;unchecked&quot;</span><span class="token punctuation">)</span>
  <span class="token annotation punctuation">@Override</span>
  <span class="token keyword">public</span> <span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">T</span><span class="token punctuation">&gt;</span></span> <span class="token class-name">T</span> <span class="token function">newInstance</span><span class="token punctuation">(</span><span class="token class-name">Target</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">T</span><span class="token punctuation">&gt;</span></span> target<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token class-name">Map</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">,</span> <span class="token class-name">MethodHandler</span><span class="token punctuation">&gt;</span></span> nameToHandler <span class="token operator">=</span> targetToHandlersByName<span class="token punctuation">.</span><span class="token function">apply</span><span class="token punctuation">(</span>target<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token class-name">Map</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Method</span><span class="token punctuation">,</span> <span class="token class-name">MethodHandler</span><span class="token punctuation">&gt;</span></span> methodToHandler <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">LinkedHashMap</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Method</span><span class="token punctuation">,</span> <span class="token class-name">MethodHandler</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">DefaultMethodHandler</span><span class="token punctuation">&gt;</span></span> defaultMethodHandlers <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">LinkedList</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">DefaultMethodHandler</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token class-name">Method</span> method <span class="token operator">:</span> target<span class="token punctuation">.</span><span class="token function">type</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getMethods</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>method<span class="token punctuation">.</span><span class="token function">getDeclaringClass</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">==</span> <span class="token class-name">Object</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">continue</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token class-name">Util</span><span class="token punctuation">.</span><span class="token function">isDefault</span><span class="token punctuation">(</span>method<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">DefaultMethodHandler</span> handler <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">DefaultMethodHandler</span><span class="token punctuation">(</span>method<span class="token punctuation">)</span><span class="token punctuation">;</span>
        defaultMethodHandlers<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>handler<span class="token punctuation">)</span><span class="token punctuation">;</span>
        methodToHandler<span class="token punctuation">.</span><span class="token function">put</span><span class="token punctuation">(</span>method<span class="token punctuation">,</span> handler<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
        methodToHandler<span class="token punctuation">.</span><span class="token function">put</span><span class="token punctuation">(</span>method<span class="token punctuation">,</span> nameToHandler<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token class-name">Feign</span><span class="token punctuation">.</span><span class="token function">configKey</span><span class="token punctuation">(</span>target<span class="token punctuation">.</span><span class="token function">type</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> method<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    <span class="token class-name">InvocationHandler</span> handler <span class="token operator">=</span> factory<span class="token punctuation">.</span><span class="token function">create</span><span class="token punctuation">(</span>target<span class="token punctuation">,</span> methodToHandler<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token class-name">T</span> proxy <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token class-name">T</span><span class="token punctuation">)</span> <span class="token class-name">Proxy</span><span class="token punctuation">.</span><span class="token function">newProxyInstance</span><span class="token punctuation">(</span>target<span class="token punctuation">.</span><span class="token function">type</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getClassLoader</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
        <span class="token keyword">new</span> <span class="token class-name">Class</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token operator">?</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token punctuation">{</span>target<span class="token punctuation">.</span><span class="token function">type</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">}</span><span class="token punctuation">,</span> handler<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token class-name">DefaultMethodHandler</span> defaultMethodHandler <span class="token operator">:</span> defaultMethodHandlers<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      defaultMethodHandler<span class="token punctuation">.</span><span class="token function">bindTo</span><span class="token punctuation">(</span>proxy<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> proxy<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
</code></pre></div><p>此方法中apply方法作用：通过Contract的parseAndValidatateMetadata方法获得了接口类中所有方法的元数据，这些信息中包含了每个方法所对应的网络请求信息。比如说请求的路径(path)、参数(params)、头部(headers)和body。接下来apply方法会为每个方法生成一个MethodHandler。</p><p>此方法中factory.create作用：创建接口类的实例，然后通过bindTo将InvocationHandler绑定到接口类实例上，用于处理函数调用。</p><h3 id="函数调用" tabindex="-1"><a class="header-anchor" href="#函数调用" aria-hidden="true">#</a> 函数调用</h3><p>在配置和实例生成结束之后，就可以直接使用FeignClient接口类的实例，调用它的函数来发送网络请求。在调用其函数的过程中，由于设置了MethodHandler，所以最终函数调用会执行SynchronousMethodHandler的invoke方法。在该方法中，OpenFeign会将函数的实际参数值与之前生成的RequestTemplate进行结合，然后发送网络请求。</p><p>feign.SynchronousMethodHandler方法中</p><div class="language-java" data-ext="java"><pre class="language-java"><code><span class="token annotation punctuation">@Override</span>
  <span class="token keyword">public</span> <span class="token class-name">Object</span> <span class="token function">invoke</span><span class="token punctuation">(</span><span class="token class-name">Object</span><span class="token punctuation">[</span><span class="token punctuation">]</span> argv<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">Throwable</span> <span class="token punctuation">{</span>
  <span class="token comment">// 生成请求类似于：GET /uri HTTP/1.1</span>
  argv：<span class="token punctuation">[</span><span class="token class-name">BaseOrder</span><span class="token punctuation">(</span>startLatitude<span class="token operator">=</span>labore et laboris eiusmod<span class="token punctuation">,</span> startLongitude<span class="token operator">=</span>ut cupidatat<span class="token punctuation">,</span> endLatitude<span class="token operator">=</span>sit sint111<span class="token punctuation">,</span> endLongitude<span class="token operator">=</span><span class="token class-name">Excepteur</span> <span class="token class-name">Lorem</span> reprehend<span class="token punctuation">)</span><span class="token punctuation">]</span>
  
  template：
  <span class="token constant">POST</span> <span class="token operator">/</span>forecast<span class="token operator">/</span>single <span class="token constant">HTTP</span><span class="token operator">/</span><span class="token number">1.1</span>
<span class="token class-name">Content</span><span class="token operator">-</span><span class="token class-name">Length</span><span class="token operator">:</span> <span class="token number">148</span>
<span class="token class-name">Content</span><span class="token operator">-</span><span class="token class-name">Type</span><span class="token operator">:</span> application<span class="token operator">/</span>json<span class="token punctuation">;</span>charset<span class="token operator">=</span><span class="token constant">UTF</span><span class="token operator">-</span><span class="token number">8</span>


    <span class="token class-name">RequestTemplate</span> template <span class="token operator">=</span> buildTemplateFromArgs<span class="token punctuation">.</span><span class="token function">create</span><span class="token punctuation">(</span>argv<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token class-name">Retryer</span> retryer <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>retryer<span class="token punctuation">.</span><span class="token function">clone</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">while</span> <span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">try</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token function">executeAndDecode</span><span class="token punctuation">(</span>template<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">RetryableException</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">try</span> <span class="token punctuation">{</span>
          retryer<span class="token punctuation">.</span><span class="token function">continueOrPropagate</span><span class="token punctuation">(</span>e<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">RetryableException</span> th<span class="token punctuation">)</span> <span class="token punctuation">{</span>
          <span class="token class-name">Throwable</span> cause <span class="token operator">=</span> th<span class="token punctuation">.</span><span class="token function">getCause</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
          <span class="token keyword">if</span> <span class="token punctuation">(</span>propagationPolicy <span class="token operator">==</span> <span class="token constant">UNWRAP</span> <span class="token operator">&amp;&amp;</span> cause <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">throw</span> cause<span class="token punctuation">;</span>
          <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
            <span class="token keyword">throw</span> th<span class="token punctuation">;</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>logLevel <span class="token operator">!=</span> <span class="token class-name">Logger<span class="token punctuation">.</span>Level</span><span class="token punctuation">.</span><span class="token constant">NONE</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
          logger<span class="token punctuation">.</span><span class="token function">logRetry</span><span class="token punctuation">(</span>metadata<span class="token punctuation">.</span><span class="token function">configKey</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> logLevel<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">continue</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>

构建<span class="token class-name">RequestTemplate</span>，用<span class="token class-name">RequestTemplate<span class="token punctuation">.</span>Factory</span><span class="token punctuation">.</span>create，构建url，queryMap，headerMap等。

上面提到一个：executeAndDecode点进去，有一句：response <span class="token operator">=</span> client<span class="token punctuation">.</span><span class="token function">execute</span><span class="token punctuation">(</span>request<span class="token punctuation">,</span> options<span class="token punctuation">)</span><span class="token punctuation">;</span>
此时的client，就是具体发送请求的client。此时发送完请求后，还会将结果封装成<span class="token class-name">Response</span>。
</code></pre></div><h4 id="feign和ribbon结合的源码" tabindex="-1"><a class="header-anchor" href="#feign和ribbon结合的源码" aria-hidden="true">#</a> feign和ribbon结合的源码，</h4><p>打断点到feign.SynchronousMethodHandler的invoke第一行。</p><div class="language-java" data-ext="java"><pre class="language-java"><code><span class="token class-name"><span class="token namespace">feign<span class="token punctuation">.</span></span>SynchronousMethodHandler</span>。
上面讲到invoke。
里面有executeAndDecode
此代码主要功能：构建request数据，然后通过request和options去通过<span class="token class-name">LoadBalancerFeignClient</span><span class="token punctuation">.</span><span class="token function">execute</span><span class="token punctuation">(</span><span class="token punctuation">)</span>方法去获得返回值。
<span class="token constant">F5</span>进executeAndDecode。
<span class="token class-name">Object</span> <span class="token function">executeAndDecode</span><span class="token punctuation">(</span><span class="token class-name">RequestTemplate</span> template<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">Throwable</span> <span class="token punctuation">{</span>
<span class="token comment">// 构建request对象，类似于：GET /uri HTTP/1.1</span>

request：
<span class="token constant">POST</span> http<span class="token operator">:</span><span class="token operator">/</span><span class="token operator">/</span>service<span class="token operator">-</span>valuation<span class="token operator">/</span>forecast<span class="token operator">/</span>single <span class="token constant">HTTP</span><span class="token operator">/</span><span class="token number">1.1</span>
<span class="token class-name">Authorization</span><span class="token operator">:</span> <span class="token class-name">Basic</span> cm9vdDpyb290
<span class="token class-name">Content</span><span class="token operator">-</span><span class="token class-name">Length</span><span class="token operator">:</span> <span class="token number">148</span>
<span class="token class-name">Content</span><span class="token operator">-</span><span class="token class-name">Type</span><span class="token operator">:</span> application<span class="token operator">/</span>json<span class="token punctuation">;</span>charset<span class="token operator">=</span><span class="token constant">UTF</span><span class="token operator">-</span><span class="token number">8</span>

<span class="token punctuation">{</span><span class="token string">&quot;startLatitude&quot;</span><span class="token operator">:</span><span class="token string">&quot;labore et laboris eiusmod&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;startLongitude&quot;</span><span class="token operator">:</span><span class="token string">&quot;ut cupidatat&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;endLatitude&quot;</span><span class="token operator">:</span><span class="token string">&quot;sit sint111&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;endLongitude&quot;</span><span class="token operator">:</span><span class="token string">&quot;Excepteur Lorem reprehend&quot;</span><span class="token punctuation">}</span>


    <span class="token class-name">Request</span> request <span class="token operator">=</span> <span class="token function">targetRequest</span><span class="token punctuation">(</span>template<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">if</span> <span class="token punctuation">(</span>logLevel <span class="token operator">!=</span> <span class="token class-name">Logger<span class="token punctuation">.</span>Level</span><span class="token punctuation">.</span><span class="token constant">NONE</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      logger<span class="token punctuation">.</span><span class="token function">logRequest</span><span class="token punctuation">(</span>metadata<span class="token punctuation">.</span><span class="token function">configKey</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> logLevel<span class="token punctuation">,</span> request<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token class-name">Response</span> response<span class="token punctuation">;</span>
    <span class="token keyword">long</span> start <span class="token operator">=</span> <span class="token class-name">System</span><span class="token punctuation">.</span><span class="token function">nanoTime</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">try</span> <span class="token punctuation">{</span>
    <span class="token comment">// 这个client就是之前构建的LoadBalancerFeignClient，是Client的实现类LoadBalancerFeignClient。</span>
      response <span class="token operator">=</span> client<span class="token punctuation">.</span><span class="token function">execute</span><span class="token punctuation">(</span>request<span class="token punctuation">,</span> options<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">IOException</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>logLevel <span class="token operator">!=</span> <span class="token class-name">Logger<span class="token punctuation">.</span>Level</span><span class="token punctuation">.</span><span class="token constant">NONE</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        logger<span class="token punctuation">.</span><span class="token function">logIOException</span><span class="token punctuation">(</span>metadata<span class="token punctuation">.</span><span class="token function">configKey</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> logLevel<span class="token punctuation">,</span> e<span class="token punctuation">,</span> <span class="token function">elapsedTime</span><span class="token punctuation">(</span>start<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
      <span class="token keyword">throw</span> <span class="token function">errorExecuting</span><span class="token punctuation">(</span>request<span class="token punctuation">,</span> e<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">long</span> elapsedTime <span class="token operator">=</span> <span class="token class-name">TimeUnit</span><span class="token punctuation">.</span><span class="token constant">NANOSECONDS</span><span class="token punctuation">.</span><span class="token function">toMillis</span><span class="token punctuation">(</span><span class="token class-name">System</span><span class="token punctuation">.</span><span class="token function">nanoTime</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">-</span> start<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">boolean</span> shouldClose <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
    <span class="token keyword">try</span> <span class="token punctuation">{</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>logLevel <span class="token operator">!=</span> <span class="token class-name">Logger<span class="token punctuation">.</span>Level</span><span class="token punctuation">.</span><span class="token constant">NONE</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        response <span class="token operator">=</span>
            logger<span class="token punctuation">.</span><span class="token function">logAndRebufferResponse</span><span class="token punctuation">(</span>metadata<span class="token punctuation">.</span><span class="token function">configKey</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> logLevel<span class="token punctuation">,</span> response<span class="token punctuation">,</span> elapsedTime<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token class-name">Response</span><span class="token punctuation">.</span><span class="token keyword">class</span> <span class="token operator">==</span> metadata<span class="token punctuation">.</span><span class="token function">returnType</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>response<span class="token punctuation">.</span><span class="token function">body</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
          <span class="token keyword">return</span> response<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>response<span class="token punctuation">.</span><span class="token function">body</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">length</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">==</span> <span class="token keyword">null</span> <span class="token operator">||</span>
            response<span class="token punctuation">.</span><span class="token function">body</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">length</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">&gt;</span> <span class="token constant">MAX_RESPONSE_BUFFER_SIZE</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
          shouldClose <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
          <span class="token keyword">return</span> response<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token comment">// Ensure the response body is disconnected</span>
        <span class="token keyword">byte</span><span class="token punctuation">[</span><span class="token punctuation">]</span> bodyData <span class="token operator">=</span> <span class="token class-name">Util</span><span class="token punctuation">.</span><span class="token function">toByteArray</span><span class="token punctuation">(</span>response<span class="token punctuation">.</span><span class="token function">body</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">asInputStream</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> response<span class="token punctuation">.</span><span class="token function">toBuilder</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">body</span><span class="token punctuation">(</span>bodyData<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">build</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>response<span class="token punctuation">.</span><span class="token function">status</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">&gt;=</span> <span class="token number">200</span> <span class="token operator">&amp;&amp;</span> response<span class="token punctuation">.</span><span class="token function">status</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">&lt;</span> <span class="token number">300</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">void</span><span class="token punctuation">.</span><span class="token keyword">class</span> <span class="token operator">==</span> metadata<span class="token punctuation">.</span><span class="token function">returnType</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
          <span class="token keyword">return</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
          <span class="token class-name">Object</span> result <span class="token operator">=</span> <span class="token function">decode</span><span class="token punctuation">(</span>response<span class="token punctuation">)</span><span class="token punctuation">;</span>
          shouldClose <span class="token operator">=</span> closeAfterDecode<span class="token punctuation">;</span>
          <span class="token keyword">return</span> result<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>decode404 <span class="token operator">&amp;&amp;</span> response<span class="token punctuation">.</span><span class="token function">status</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">==</span> <span class="token number">404</span> <span class="token operator">&amp;&amp;</span> <span class="token keyword">void</span><span class="token punctuation">.</span><span class="token keyword">class</span> <span class="token operator">!=</span> metadata<span class="token punctuation">.</span><span class="token function">returnType</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">Object</span> result <span class="token operator">=</span> <span class="token function">decode</span><span class="token punctuation">(</span>response<span class="token punctuation">)</span><span class="token punctuation">;</span>
        shouldClose <span class="token operator">=</span> closeAfterDecode<span class="token punctuation">;</span>
        <span class="token keyword">return</span> result<span class="token punctuation">;</span>
      <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
        <span class="token keyword">throw</span> errorDecoder<span class="token punctuation">.</span><span class="token function">decode</span><span class="token punctuation">(</span>metadata<span class="token punctuation">.</span><span class="token function">configKey</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> response<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">IOException</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>logLevel <span class="token operator">!=</span> <span class="token class-name">Logger<span class="token punctuation">.</span>Level</span><span class="token punctuation">.</span><span class="token constant">NONE</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        logger<span class="token punctuation">.</span><span class="token function">logIOException</span><span class="token punctuation">(</span>metadata<span class="token punctuation">.</span><span class="token function">configKey</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> logLevel<span class="token punctuation">,</span> e<span class="token punctuation">,</span> elapsedTime<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
      <span class="token keyword">throw</span> <span class="token function">errorReading</span><span class="token punctuation">(</span>request<span class="token punctuation">,</span> response<span class="token punctuation">,</span> e<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span> <span class="token keyword">finally</span> <span class="token punctuation">{</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>shouldClose<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token function">ensureClosed</span><span class="token punctuation">(</span>response<span class="token punctuation">.</span><span class="token function">body</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>

<span class="token constant">F5</span>点进去execute方法。（<span class="token class-name">TraceLoadBalancerFeignClient</span><span class="token punctuation">.</span>execute）<span class="token punctuation">.</span>走了这一行
response <span class="token operator">=</span> <span class="token keyword">super</span><span class="token punctuation">.</span><span class="token function">execute</span><span class="token punctuation">(</span>request<span class="token punctuation">,</span> options<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token constant">F5</span>进去
实际就是org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>cloud<span class="token punctuation">.</span>openfeign<span class="token punctuation">.</span>ribbon<span class="token punctuation">.</span>execute
<span class="token annotation punctuation">@Override</span>
	<span class="token keyword">public</span> <span class="token class-name">Response</span> <span class="token function">execute</span><span class="token punctuation">(</span><span class="token class-name">Request</span> request<span class="token punctuation">,</span> <span class="token class-name">Request<span class="token punctuation">.</span>Options</span> options<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">IOException</span> <span class="token punctuation">{</span>
		<span class="token keyword">try</span> <span class="token punctuation">{</span>
			<span class="token comment">// asUri:  http://service-valuation/forecast/single</span>
			<span class="token class-name">URI</span> asUri <span class="token operator">=</span> <span class="token constant">URI</span><span class="token punctuation">.</span><span class="token function">create</span><span class="token punctuation">(</span>request<span class="token punctuation">.</span><span class="token function">url</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
			<span class="token comment">// clientName:service-valuation</span>
			<span class="token class-name">String</span> clientName <span class="token operator">=</span> asUri<span class="token punctuation">.</span><span class="token function">getHost</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
			<span class="token comment">// uriWithoutHost:http:///forecast/single</span>
			<span class="token class-name">URI</span> uriWithoutHost <span class="token operator">=</span> <span class="token function">cleanUrl</span><span class="token punctuation">(</span>request<span class="token punctuation">.</span><span class="token function">url</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> clientName<span class="token punctuation">)</span><span class="token punctuation">;</span>
			
			<span class="token class-name">FeignLoadBalancer<span class="token punctuation">.</span>RibbonRequest</span> ribbonRequest <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">FeignLoadBalancer<span class="token punctuation">.</span>RibbonRequest</span><span class="token punctuation">(</span>
					<span class="token keyword">this</span><span class="token punctuation">.</span>delegate<span class="token punctuation">,</span> request<span class="token punctuation">,</span> uriWithoutHost<span class="token punctuation">)</span><span class="token punctuation">;</span>

			<span class="token class-name">IClientConfig</span> requestConfig <span class="token operator">=</span> <span class="token function">getClientConfig</span><span class="token punctuation">(</span>options<span class="token punctuation">,</span> clientName<span class="token punctuation">)</span><span class="token punctuation">;</span>
			<span class="token comment">// 真正执行负载均衡的地方：</span>
			<span class="token keyword">return</span> <span class="token function">lbClient</span><span class="token punctuation">(</span>clientName<span class="token punctuation">)</span>
					<span class="token punctuation">.</span><span class="token function">executeWithLoadBalancer</span><span class="token punctuation">(</span>ribbonRequest<span class="token punctuation">,</span> requestConfig<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toResponse</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
		<span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">ClientException</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
			<span class="token class-name">IOException</span> io <span class="token operator">=</span> <span class="token function">findIOException</span><span class="token punctuation">(</span>e<span class="token punctuation">)</span><span class="token punctuation">;</span>
			<span class="token keyword">if</span> <span class="token punctuation">(</span>io <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
				<span class="token keyword">throw</span> io<span class="token punctuation">;</span>
			<span class="token punctuation">}</span>
			<span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">RuntimeException</span><span class="token punctuation">(</span>e<span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>
	
<span class="token constant">F5</span> 进入	lbClient（）。
	<span class="token keyword">private</span> <span class="token class-name">FeignLoadBalancer</span> <span class="token function">lbClient</span><span class="token punctuation">(</span><span class="token class-name">String</span> clientName<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>lbClientFactory<span class="token punctuation">.</span><span class="token function">create</span><span class="token punctuation">(</span>clientName<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	
	<span class="token keyword">public</span> <span class="token class-name">FeignLoadBalancer</span> <span class="token function">create</span><span class="token punctuation">(</span><span class="token class-name">String</span> clientName<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token class-name">FeignLoadBalancer</span> client <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>cache<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>clientName<span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span>client <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			<span class="token keyword">return</span> client<span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
		<span class="token class-name">IClientConfig</span> config <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>factory<span class="token punctuation">.</span><span class="token function">getClientConfig</span><span class="token punctuation">(</span>clientName<span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token comment">// 获取Ribbon ILoadBalancer信息,鼠标放到lb上，发现：我们自己配置的com.netflix.loadbalancer.RandomRule@498bbb15</span>
		
		<span class="token class-name">ILoadBalancer</span> lb <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>factory<span class="token punctuation">.</span><span class="token function">getLoadBalancer</span><span class="token punctuation">(</span>clientName<span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token class-name">ServerIntrospector</span> serverIntrospector <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>factory<span class="token punctuation">.</span><span class="token function">getInstance</span><span class="token punctuation">(</span>clientName<span class="token punctuation">,</span>
				<span class="token class-name">ServerIntrospector</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		client <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>loadBalancedRetryFactory <span class="token operator">!=</span> <span class="token keyword">null</span>
				<span class="token operator">?</span> <span class="token keyword">new</span> <span class="token class-name">RetryableFeignLoadBalancer</span><span class="token punctuation">(</span>lb<span class="token punctuation">,</span> config<span class="token punctuation">,</span> serverIntrospector<span class="token punctuation">,</span>
						<span class="token keyword">this</span><span class="token punctuation">.</span>loadBalancedRetryFactory<span class="token punctuation">)</span>
				<span class="token operator">:</span> <span class="token keyword">new</span> <span class="token class-name">FeignLoadBalancer</span><span class="token punctuation">(</span>lb<span class="token punctuation">,</span> config<span class="token punctuation">,</span> serverIntrospector<span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token keyword">this</span><span class="token punctuation">.</span>cache<span class="token punctuation">.</span><span class="token function">put</span><span class="token punctuation">(</span>clientName<span class="token punctuation">,</span> client<span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token keyword">return</span> client<span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	
<span class="token constant">F7</span>回到：
<span class="token keyword">return</span> <span class="token function">lbClient</span><span class="token punctuation">(</span>clientName<span class="token punctuation">)</span>
					<span class="token punctuation">.</span><span class="token function">executeWithLoadBalancer</span><span class="token punctuation">(</span>ribbonRequest<span class="token punctuation">,</span> requestConfig<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toResponse</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token constant">F5</span>进入executeWithLoadBalancer。
<span class="token class-name">AbstractLoadBalancerAwareClient</span>的下面方法：
<span class="token keyword">public</span> <span class="token class-name">T</span> <span class="token function">executeWithLoadBalancer</span><span class="token punctuation">(</span><span class="token keyword">final</span> <span class="token class-name">S</span> request<span class="token punctuation">,</span> <span class="token keyword">final</span> <span class="token class-name">IClientConfig</span> requestConfig<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">ClientException</span> <span class="token punctuation">{</span>
        <span class="token class-name">LoadBalancerCommand</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">T</span><span class="token punctuation">&gt;</span></span> command <span class="token operator">=</span> <span class="token function">buildLoadBalancerCommand</span><span class="token punctuation">(</span>request<span class="token punctuation">,</span> requestConfig<span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token keyword">try</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span> command<span class="token punctuation">.</span><span class="token function">submit</span><span class="token punctuation">(</span>
                <span class="token keyword">new</span> <span class="token class-name">ServerOperation</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">T</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                    <span class="token annotation punctuation">@Override</span>
                    <span class="token keyword">public</span> <span class="token class-name">Observable</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">T</span><span class="token punctuation">&gt;</span></span> <span class="token function">call</span><span class="token punctuation">(</span><span class="token class-name">Server</span> server<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                        <span class="token class-name">URI</span> finalUri <span class="token operator">=</span> <span class="token function">reconstructURIWithServer</span><span class="token punctuation">(</span>server<span class="token punctuation">,</span> request<span class="token punctuation">.</span><span class="token function">getUri</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                        <span class="token class-name">S</span> requestForServer <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token class-name">S</span><span class="token punctuation">)</span> request<span class="token punctuation">.</span><span class="token function">replaceUri</span><span class="token punctuation">(</span>finalUri<span class="token punctuation">)</span><span class="token punctuation">;</span>
                        <span class="token keyword">try</span> <span class="token punctuation">{</span>
                            <span class="token keyword">return</span> <span class="token class-name">Observable</span><span class="token punctuation">.</span><span class="token function">just</span><span class="token punctuation">(</span><span class="token class-name">AbstractLoadBalancerAwareClient</span><span class="token punctuation">.</span><span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">execute</span><span class="token punctuation">(</span>requestForServer<span class="token punctuation">,</span> requestConfig<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                        <span class="token punctuation">}</span> 
                        <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">Exception</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                            <span class="token keyword">return</span> <span class="token class-name">Observable</span><span class="token punctuation">.</span><span class="token function">error</span><span class="token punctuation">(</span>e<span class="token punctuation">)</span><span class="token punctuation">;</span>
                        <span class="token punctuation">}</span>
                    <span class="token punctuation">}</span>
                <span class="token punctuation">}</span><span class="token punctuation">)</span>
                <span class="token punctuation">.</span><span class="token function">toBlocking</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
                <span class="token punctuation">.</span><span class="token function">single</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">Exception</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token class-name">Throwable</span> t <span class="token operator">=</span> e<span class="token punctuation">.</span><span class="token function">getCause</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>t <span class="token keyword">instanceof</span> <span class="token class-name">ClientException</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token keyword">throw</span> <span class="token punctuation">(</span><span class="token class-name">ClientException</span><span class="token punctuation">)</span> t<span class="token punctuation">;</span>
            <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
                <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">ClientException</span><span class="token punctuation">(</span>e<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
        
    <span class="token punctuation">}</span>
    
 打断点到：<span class="token class-name"><span class="token namespace">com<span class="token punctuation">.</span>netflix<span class="token punctuation">.</span>loadbalancer<span class="token punctuation">.</span>reactive<span class="token punctuation">.</span></span>LoadBalancerCommand</span>的
    <span class="token keyword">public</span> <span class="token class-name">Observable</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">T</span><span class="token punctuation">&gt;</span></span> <span class="token function">submit</span><span class="token punctuation">(</span><span class="token keyword">final</span> <span class="token class-name">ServerOperation</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">T</span><span class="token punctuation">&gt;</span></span> operation<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">final</span> <span class="token class-name">ExecutionInfoContext</span> context <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ExecutionInfoContext</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        
看这行代码： <span class="token punctuation">(</span>server <span class="token operator">==</span> <span class="token keyword">null</span> <span class="token operator">?</span> <span class="token function">selectServer</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">:</span> <span class="token class-name">Observable</span><span class="token punctuation">.</span><span class="token function">just</span><span class="token punctuation">(</span>server<span class="token punctuation">)</span><span class="token punctuation">)</span>
进入<span class="token function">selectServer</span><span class="token punctuation">(</span><span class="token punctuation">)</span>。
执行到（打断点到此行  <span class="token constant">F8</span>）<span class="token class-name">Server</span> server <span class="token operator">=</span> loadBalancerContext<span class="token punctuation">.</span><span class="token function">getServerFromLoadBalancer</span><span class="token punctuation">(</span>loadBalancerURI<span class="token punctuation">,</span> loadBalancerKey<span class="token punctuation">)</span><span class="token punctuation">;</span>

打断点：<span class="token class-name"><span class="token namespace">com<span class="token punctuation">.</span>netflix<span class="token punctuation">.</span>loadbalancer<span class="token punctuation">.</span></span>LoadBalancerContext</span>
行    <span class="token keyword">public</span> <span class="token class-name">Server</span> <span class="token function">getServerFromLoadBalancer</span><span class="token punctuation">(</span><span class="token annotation punctuation">@Nullable</span> <span class="token class-name">URI</span> original<span class="token punctuation">,</span> <span class="token annotation punctuation">@Nullable</span> <span class="token class-name">Object</span> loadBalancerKey<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">ClientException</span> <span class="token punctuation">{</span>
        <span class="token class-name">String</span> host <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>

打断点： <span class="token class-name">ILoadBalancer</span> lb <span class="token operator">=</span> <span class="token function">getLoadBalancer</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

打断点：<span class="token class-name">Server</span> svc <span class="token operator">=</span> lb<span class="token punctuation">.</span><span class="token function">chooseServer</span><span class="token punctuation">(</span>loadBalancerKey<span class="token punctuation">)</span><span class="token punctuation">;</span>

终于看到ribbon的东西了。

进入chooseServer

进入<span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span><span class="token constant">ENABLED</span><span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">||</span> <span class="token function">getLoadBalancerStats</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getAvailableZones</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">size</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">&lt;=</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            logger<span class="token punctuation">.</span><span class="token function">debug</span><span class="token punctuation">(</span><span class="token string">&quot;Zone aware logic disabled or there is only one zone&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">return</span> <span class="token keyword">super</span><span class="token punctuation">.</span><span class="token function">chooseServer</span><span class="token punctuation">(</span>key<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        
来到：<span class="token class-name"><span class="token namespace">com<span class="token punctuation">.</span>netflix<span class="token punctuation">.</span>loadbalancer<span class="token punctuation">.</span></span>BaseLoadBalancer</span>
    <span class="token keyword">public</span> <span class="token class-name">Server</span> <span class="token function">chooseServer</span><span class="token punctuation">(</span><span class="token class-name">Object</span> key<span class="token punctuation">)</span> <span class="token punctuation">{</span>

看到了<span class="token keyword">return</span> rule<span class="token punctuation">.</span><span class="token function">choose</span><span class="token punctuation">(</span>key<span class="token punctuation">)</span><span class="token punctuation">;</span>
	
</code></pre></div><p>小结：</p><ol><li>注册beanDefinition。</li><li>实例化</li><li>调用</li></ol><p>前2步在启动时执行。</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code>feign在调用其他微服务接口前，会去请求该微服务的相关信息<span class="token punctuation">(</span>地址、端口等<span class="token punctuation">)</span>，并做一些初始化操作，由于默认的懒加载特性，导致了在第一次调用时，出现超时的情况
ribbon:
  eager-load:
    enabled: <span class="token boolean">true</span>
    clients:
    - SERVICE-SMS
配置ribbon立即加载，此处需要注意的是，光配置立即加载是不生效的，还要配置客户端列表.    
</code></pre></div><h2 id="总结" tabindex="-1"><a class="header-anchor" href="#总结" aria-hidden="true">#</a> 总结</h2><ol><li>feign的使用。</li><li>feign的独立使用。（大家课下实践,feignClient(name=&quot;&quot;,url=&quot;http://ip:port/xxx&quot;)）</li><li>feign和ribbon结合。（配置负载均衡的地方）</li><li>原理，源码。</li><li>继承，压缩，日志（方便开发）。</li></ol><p>RestTemplate，自由，更贴近httpclient，方便调用别的第三方的http服务。</p><p>feign，更面向对象一些，更优雅一些。</p>`,74),o=[e];function c(l,u){return s(),a("div",null,o)}const k=n(p,[["render",c],["__file","sp_s_feign_b.html.vue"]]);export{k as default};
