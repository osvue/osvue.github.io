import{_ as n,p as a,q as s,a1 as t}from"./framework-d81ad7e5.js";const p={},o=t(`<h2 id="springboot运行原理" tabindex="-1"><a class="header-anchor" href="#springboot运行原理" aria-hidden="true">#</a> springboot运行原理</h2><h2 id="_1、启动器" tabindex="-1"><a class="header-anchor" href="#_1、启动器" aria-hidden="true">#</a> 1、启动器</h2><div class="language-xml" data-ext="xml"><pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>org.springframework.boot<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>spring-boot-starter-web<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><p>​ springboot-boot-starter:就是springboot的场景启动器。springboot将所有的功能场景都抽取出来，做成一个个的starter，只需要在项目中引入这些starter即可，所有相关的依赖都会导入进来，根据公司业务需求决定导入什么启动器即可。</p><h2 id="_2、主程序" tabindex="-1"><a class="header-anchor" href="#_2、主程序" aria-hidden="true">#</a> 2、主程序</h2><div class="language-java" data-ext="java"><pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">com<span class="token punctuation">.</span>osvue</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>boot<span class="token punctuation">.</span></span><span class="token class-name">SpringApplication</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>boot<span class="token punctuation">.</span>autoconfigure<span class="token punctuation">.</span></span><span class="token class-name">SpringBootApplication</span></span><span class="token punctuation">;</span>
<span class="token comment">//SpringBootApplication注解用来标注一个主程序类，说明是一个springboot应用</span>
<span class="token annotation punctuation">@SpringBootApplication</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">StudyApplication</span> <span class="token punctuation">{</span>

    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">SpringApplication</span><span class="token punctuation">.</span><span class="token function">run</span><span class="token punctuation">(</span><span class="token class-name">StudyApplication</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">,</span> args<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><p>查看**@SpringBootApplication**</p><div class="language-java" data-ext="java"><pre class="language-java"><code><span class="token comment">/*
@ComponentScan:自动扫描并加载符合条件的组件或者bean，将这个bean定义加载到IOC容器中

@SpringBootConfiguration:标注在某个类上，表示这是一个springboot的配置类。

@EnableAutoConfiguration:开启自动配置功能,之前在使用springboot的时候，springboot可以自动帮我们完成配置功能，@EnableAutoConfiguration告诉springboot开启自动配置功能，这样自动配置才能生效
*/</span>
<span class="token annotation punctuation">@Target</span><span class="token punctuation">(</span><span class="token class-name">ElementType</span><span class="token punctuation">.</span><span class="token constant">TYPE</span><span class="token punctuation">)</span>
<span class="token annotation punctuation">@Retention</span><span class="token punctuation">(</span><span class="token class-name">RetentionPolicy</span><span class="token punctuation">.</span><span class="token constant">RUNTIME</span><span class="token punctuation">)</span>
<span class="token annotation punctuation">@Documented</span>
<span class="token annotation punctuation">@Inherited</span>
<span class="token annotation punctuation">@SpringBootConfiguration</span>
<span class="token annotation punctuation">@EnableAutoConfiguration</span>
<span class="token annotation punctuation">@ComponentScan</span><span class="token punctuation">(</span>excludeFilters <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token annotation punctuation">@Filter</span><span class="token punctuation">(</span>type <span class="token operator">=</span> <span class="token class-name">FilterType</span><span class="token punctuation">.</span><span class="token constant">CUSTOM</span><span class="token punctuation">,</span> classes <span class="token operator">=</span> <span class="token class-name">TypeExcludeFilter</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
		<span class="token annotation punctuation">@Filter</span><span class="token punctuation">(</span>type <span class="token operator">=</span> <span class="token class-name">FilterType</span><span class="token punctuation">.</span><span class="token constant">CUSTOM</span><span class="token punctuation">,</span> classes <span class="token operator">=</span> <span class="token class-name">AutoConfigurationExcludeFilter</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">)</span> <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token keyword">public</span> <span class="token annotation punctuation">@interface</span> <span class="token class-name">SpringBootApplication</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
</code></pre></div><div class="language-java" data-ext="java"><pre class="language-java"><code><span class="token comment">/*
可以看到SpringBootConfiguration使用了Configuration注解来标注
*/</span>
<span class="token annotation punctuation">@Target</span><span class="token punctuation">(</span><span class="token class-name">ElementType</span><span class="token punctuation">.</span><span class="token constant">TYPE</span><span class="token punctuation">)</span>
<span class="token annotation punctuation">@Retention</span><span class="token punctuation">(</span><span class="token class-name">RetentionPolicy</span><span class="token punctuation">.</span><span class="token constant">RUNTIME</span><span class="token punctuation">)</span>
<span class="token annotation punctuation">@Documented</span>
<span class="token annotation punctuation">@Configuration</span>
<span class="token keyword">public</span> <span class="token annotation punctuation">@interface</span> <span class="token class-name">SpringBootConfiguration</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
</code></pre></div><div class="language-java" data-ext="java"><pre class="language-java"><code><span class="token comment">/*
可以看到Configuration也是容器中的一个组件
*/</span>
<span class="token annotation punctuation">@Target</span><span class="token punctuation">(</span><span class="token class-name">ElementType</span><span class="token punctuation">.</span><span class="token constant">TYPE</span><span class="token punctuation">)</span>
<span class="token annotation punctuation">@Retention</span><span class="token punctuation">(</span><span class="token class-name">RetentionPolicy</span><span class="token punctuation">.</span><span class="token constant">RUNTIME</span><span class="token punctuation">)</span>
<span class="token annotation punctuation">@Documented</span>
<span class="token annotation punctuation">@Component</span>
<span class="token keyword">public</span> <span class="token annotation punctuation">@interface</span> <span class="token class-name">Configuration</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
</code></pre></div><div class="language-java" data-ext="java"><pre class="language-java"><code><span class="token comment">/*
@AutoConfigurationPackage:自动配置包

@Import(AutoConfigurationImportSelector.class)：导入哪些组件的选择器，它将所有需要导入的组件以全类名的方式返回，这些组件就会被添加到容器中，它会给容器中导入非常多的自动配置类，就是给容器中导入这个场景需要的所有组件，并配置好这些组件
*/</span>
<span class="token annotation punctuation">@Target</span><span class="token punctuation">(</span><span class="token class-name">ElementType</span><span class="token punctuation">.</span><span class="token constant">TYPE</span><span class="token punctuation">)</span>
<span class="token annotation punctuation">@Retention</span><span class="token punctuation">(</span><span class="token class-name">RetentionPolicy</span><span class="token punctuation">.</span><span class="token constant">RUNTIME</span><span class="token punctuation">)</span>
<span class="token annotation punctuation">@Documented</span>
<span class="token annotation punctuation">@Inherited</span>
<span class="token annotation punctuation">@AutoConfigurationPackage</span>
<span class="token annotation punctuation">@Import</span><span class="token punctuation">(</span><span class="token class-name">AutoConfigurationImportSelector</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">)</span>
<span class="token keyword">public</span> <span class="token annotation punctuation">@interface</span> <span class="token class-name">EnableAutoConfiguration</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
</code></pre></div><div class="language-java" data-ext="java"><pre class="language-java"><code><span class="token comment">/*
给容器导入一个组件，导入的组件由AutoConfigurationPackages.Registrar.class将主配置类（@SpringBootApplication标注的类）的所在包及包下面所有子包里面的所有组件扫描到spring容器
*/</span>
<span class="token annotation punctuation">@Target</span><span class="token punctuation">(</span><span class="token class-name">ElementType</span><span class="token punctuation">.</span><span class="token constant">TYPE</span><span class="token punctuation">)</span>
<span class="token annotation punctuation">@Retention</span><span class="token punctuation">(</span><span class="token class-name">RetentionPolicy</span><span class="token punctuation">.</span><span class="token constant">RUNTIME</span><span class="token punctuation">)</span>
<span class="token annotation punctuation">@Documented</span>
<span class="token annotation punctuation">@Inherited</span>
<span class="token annotation punctuation">@Import</span><span class="token punctuation">(</span><span class="token class-name">AutoConfigurationPackages<span class="token punctuation">.</span>Registrar</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">)</span>
<span class="token keyword">public</span> <span class="token annotation punctuation">@interface</span> <span class="token class-name">AutoConfigurationPackage</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
</code></pre></div><div class="language-java" data-ext="java"><pre class="language-java"><code><span class="token comment">/*
在AutoConfigurationImportSelector类中有如下方法，可以看到

*/</span>
<span class="token keyword">protected</span> <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">&gt;</span></span> <span class="token function">getCandidateConfigurations</span><span class="token punctuation">(</span><span class="token class-name">AnnotationMetadata</span> metadata<span class="token punctuation">,</span> <span class="token class-name">AnnotationAttributes</span> attributes<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">&gt;</span></span> configurations <span class="token operator">=</span> <span class="token class-name">SpringFactoriesLoader</span><span class="token punctuation">.</span><span class="token function">loadFactoryNames</span><span class="token punctuation">(</span><span class="token function">getSpringFactoriesLoaderFactoryClass</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
				<span class="token function">getBeanClassLoader</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token class-name">Assert</span><span class="token punctuation">.</span><span class="token function">notEmpty</span><span class="token punctuation">(</span>configurations<span class="token punctuation">,</span> <span class="token string">&quot;No auto configuration classes found in META-INF/spring.factories. If you &quot;</span>
				<span class="token operator">+</span> <span class="token string">&quot;are using a custom packaging, make sure that file is correct.&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token keyword">return</span> configurations<span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
<span class="token comment">/*

此时返回的就是启动自动导入配置文件的注解类
*/</span>
<span class="token keyword">protected</span> <span class="token class-name">Class</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token operator">?</span><span class="token punctuation">&gt;</span></span> <span class="token function">getSpringFactoriesLoaderFactoryClass</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">return</span> <span class="token class-name">EnableAutoConfiguration</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>

<span class="token comment">//进入SpringFactoriesLoader类中</span>
<span class="token comment">/*
看到会读取对应的配置文件，位置在META-INF/spring.factories中

*/</span>
<span class="token keyword">public</span> <span class="token keyword">final</span> <span class="token keyword">class</span> <span class="token class-name">SpringFactoriesLoader</span> <span class="token punctuation">{</span>

	<span class="token doc-comment comment">/**
	 * The location to look for factories.
	 * <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">&gt;</span></span>Can be present in multiple JAR files.
	 */</span>
<span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">final</span> <span class="token class-name">String</span> <span class="token constant">FACTORIES_RESOURCE_LOCATION</span> <span class="token operator">=</span> <span class="token string">&quot;META-INF/spring.factories&quot;</span><span class="token punctuation">;</span><span class="token punctuation">}</span>

<span class="token comment">//进入loadFactoryNames方法中</span>
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
</code></pre></div><p>springboot在启动的时候从类路径下的META-INF/spring.factories中获取EnableAutoConfiguration指定的值，将这些值作为自动配置类导入容器，自动配置类就生效，帮我们进行自动配置的工作：spring.factories文件位于springboot-autoconfigure.jar包中。</p><p>所以真正实现是从classpath中搜寻所有的<strong>META-INF/spring.factories</strong>配置文件，并将其中对应org.springframework.boot.autoconfigure.包下的配置项通过反射实例化为对应标注了@Configuration的JavaConfig形式的IOC容器配置类，然后将这些都汇总称为一个实例并加载到IOC容器中。</p>`,15),c=[o];function e(l,u){return a(),s("div",null,c)}const k=n(p,[["render",e],["__file","q4.html.vue"]]);export{k as default};
