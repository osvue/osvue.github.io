import{_ as n,p as s,q as a,a1 as t}from"./framework-d81ad7e5.js";const p={},o=t(`<ul><li><strong>想要自定义starter，首先要了解springboot是如何加载starter的，也就是springboot的自动装配机制</strong></li></ul><h2 id="starter加载原理" tabindex="-1"><a class="header-anchor" href="#starter加载原理" aria-hidden="true">#</a> starter加载原理：</h2><ul><li><p>springboot通过一个<code>@SpringBootApplication</code>注解启动项目，springboot在项目启动的时候，会将项目中所有声明为Bean对象（注解、xml）的实例信息全部加载到ioc容器当中。</p></li><li><p>除此之外也会将所有依赖到的starter里的bean信息加载到ioc容器中，从而做到所谓的零配置，开箱即用。</p></li><li><p><strong>@EnableAutoConfiguration</strong>注解进行加载starter，<strong>@EnableAutoConfiguration</strong>在<code>@SpringBootApplication</code>注解里面</p></li><li><p>具体的加载实现是由<code>@EnableAutoConfiguration</code>注解下import了一个<code>AutoConfigurationImportSelector</code>加载器实现</p></li><li><p>这个<code>AutoConfigurationImportSelector</code>会去所引用的依赖jar包下，找到一个 <strong>spring.factories</strong> 文件，一般<strong>spring.factories</strong>文件里都会声明该依赖所提供的核心功能<code>bean配置</code>信息。文件一般在依赖jar包的<code>META-INF</code>文件夹下面</p></li></ul><h3 id="自定义starter" tabindex="-1"><a class="header-anchor" href="#自定义starter" aria-hidden="true">#</a> 自定义starter：</h3><ul><li>了解了<strong>springboot加载starter原理</strong>，其实就是加载<code>依赖jar包下的spring.factories</code>文件。所以我们要<code>自定义starter</code>，就需要 <ul><li><ol><li>在项目中建立一个<strong>META-INF</strong>的文件夹</li></ol></li><li><ol start="2"><li>然后在文件夹下面建一个<code>spring.factories</code>文件，文件里将你需要提供出去的bean实例信息配置好就行。</li></ol><ul><li>resources文件夹下面新建META-INF文件夹，并新建spring.factories文件</li></ul></li><li><ol start="3"><li>需要先<strong>删掉启动类</strong>，因为自定义的starter是不能有启动入口的</li></ol></li><li><ol start="4"><li>删掉<strong>pom.xml中的spring-boot-maven-plugin</strong>插件，如果没引入该插件，请忽略。 自动引入<code>spring-boot-maven-plugin</code>插件，如果删掉启动类话，进行install的时候，会报找不到<code>Unable to find main class</code>(找不到主类错误)，这时候只需要删掉这个插件再进行install即可 <code>mvn clean install</code></li></ol></li></ul></li></ul><h4 id="自定义starter的开发流程" tabindex="-1"><a class="header-anchor" href="#自定义starter的开发流程" aria-hidden="true">#</a> 自定义starter的开发流程：</h4><ol><li>创建Starter项目 <ol><li>命名规范 <code>{模块名}-spring-boot-starter</code></li><li>必须引入的依赖</li><li><div class="language-xml" data-ext="xml"><pre class="language-xml"><code>  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">&gt;</span></span>
     <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>org.springframework.boot<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>
     <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>spring-boot-configuration-processor<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>
     <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>optional</span><span class="token punctuation">&gt;</span></span>true<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>optional</span><span class="token punctuation">&gt;</span></span>
 <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">&gt;</span></span> 
</code></pre></div></li></ol></li><li>定义Starter需要的配置类(Properties) <ol><li>编写相关属性类(XxxProperties)：<code>SocketProperties.java</code></li></ol></li><li>编写Starter项目的业务功能</li><li>编写自动配置类</li><li>编写spring.factories文件加载自动配置类</li><li>打包安装</li><li>其它项目引用</li></ol><p>常见场景：</p><ol><li>通用模块-短信发送模块</li><li>基于AOP技术实现日志切面</li><li>分布式雪花ID，<code>Long--&gt;string</code>，解决精度问题</li><li>微服务项目的数据库连接池配置</li><li>微服务项目的每个模块都要访问redis数据库，每个模块都要配置redisTemplate 也可以通过starter解决</li></ol><h3 id="aop方式统一服务" tabindex="-1"><a class="header-anchor" href="#aop方式统一服务" aria-hidden="true">#</a> AOP方式统一服务</h3><ul><li><strong>@ConfigurationProperties</strong>注解基本用法 <ul><li>前缀定义了哪些外部属性将绑定到类的字段上</li><li>根据 Spring Boot 宽松的绑定规则，类的属性名称必须与外部属性的名称匹配</li><li>我们可以简单地用一个值初始化一个字段来定义一个默认值</li><li>类本身可以是包私有的</li><li>类的字段必须有<strong>公共 setter</strong> 方法</li></ul></li><li><strong>@Configuration：</strong> 定义一个配置类</li><li><strong>@EnableConfigurationProperties：</strong> <code>@EnableConfigurationProperties</code>注解的作用是<code>@ConfigurationProperties</code>注解生效。 <ul><li>如果只配置@ConfigurationProperties注解，在IOC容器中是获取不到properties配置文件转化的bean的</li></ul></li></ul><div class="language-java" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token annotation punctuation">@interface</span> <span class="token class-name">ConditionalOnProperty</span> 
<span class="token doc-comment comment">/**
	 * The string representation of the expected value for the properties. If not
	 * specified, the property must <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>strong</span><span class="token punctuation">&gt;</span></span>not<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>strong</span><span class="token punctuation">&gt;</span></span> be equal to <span class="token punctuation">{</span><span class="token keyword">@code</span> <span class="token code-section"><span class="token code language-java"><span class="token boolean">false</span></span></span><span class="token punctuation">}</span>.
	 * <span class="token keyword">@return</span> the expected value
	 */</span>
	<span class="token class-name">String</span> <span class="token function">havingValue</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">default</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">;</span>

	<span class="token doc-comment comment">/**
	 * Specify if the condition should match if the property is not set. Defaults to
	 * <span class="token punctuation">{</span><span class="token keyword">@code</span> <span class="token code-section"><span class="token code language-java"><span class="token boolean">false</span></span></span><span class="token punctuation">}</span>.
	 * <span class="token keyword">@return</span> if the condition should match if the property is missing
	 */</span>
	<span class="token keyword">boolean</span> <span class="token function">matchIfMissing</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">default</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
</code></pre></div><ul><li><strong>@ConditionalOnProperty(prefix = &quot;skt.msg&quot;,value = &quot;enabled&quot;, matchIfMissing = true)：</strong> matchIfMissing属性：默认情况下<code>matchIfMissing为false</code>，也就是说如果未进行属性配置，则自动配置不生效。如果<code>matchIfMissing为true</code>，则表示如果没有对应的属性配置，则自动配置默认生效</li><li><strong>@ConditionalOnMissingBean：</strong> 在@bean定义上，它的作用就是在容器加载它作用的bean时，检查容器中是否存在目标类型<code>（ConditionalOnMissingBean注解的value值）</code>的bean了，如果存在这跳过原始bean的BeanDefinition加载动作。</li></ul><ol><li>导入依赖</li></ol><div class="language-xml" data-ext="xml"><pre class="language-xml"><code><span class="token comment">&lt;!--表示两个项目之间依赖不传递；不设置optional或者optional是false，表示传递依赖--&gt;</span>
       <span class="token comment">&lt;!--例如：project1依赖a.jar(optional=true),project2依赖project1,则project2不依赖a.jar--&gt;</span>
       <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">&gt;</span></span>
           <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>org.springframework.boot<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>
           <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>spring-boot-configuration-processor<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>
           <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>optional</span><span class="token punctuation">&gt;</span></span>true<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>optional</span><span class="token punctuation">&gt;</span></span>
       <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">&gt;</span></span> 

</code></pre></div><p>2.编写相关属性类(XxxProperties)：<code>MsgProperties.java</code></p><div class="language-java" data-ext="java"><pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">com<span class="token punctuation">.</span>osvue<span class="token punctuation">.</span>env<span class="token punctuation">.</span>app<span class="token punctuation">.</span>props</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>io<span class="token punctuation">.</span></span><span class="token class-name">Serializable</span></span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>boot<span class="token punctuation">.</span>context<span class="token punctuation">.</span>properties<span class="token punctuation">.</span></span><span class="token class-name">ConfigurationProperties</span></span><span class="token punctuation">;</span>
<span class="token doc-comment comment">/**
 * 
 <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">&gt;</span></span>
 相关属性类(XxxProperties)：MsgProperties.java

--@ConfigurationProperties注解基本用法
       前缀定义了哪些外部属性将绑定到类的字段上
       根据 Spring Boot 宽松的绑定规则，类的属性名称必须与外部属性的名称匹配
       我们可以简单地用一个值初始化一个字段来定义一个默认值
       类本身可以是包私有的
       类的字段必须有公共 setter 方法   

     注意：SmsProperties代码写完后会报如下错误，这是正常的，因为
         还有配置类AutoConfig和一个注解@EnableConfigurationProperties没有加 
 
 <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span>
 * @ClassName:  MsgProperties   
 * @Description:TODO(这里用一句话描述这个类的作用)   
 * <span class="token keyword">@author</span>: hzq 
 * <span class="token keyword">@date</span>:   2023-5-19 15:17:45    
 * @Copyright: 2023
 */</span>
<span class="token annotation punctuation">@ConfigurationProperties</span><span class="token punctuation">(</span>prefix <span class="token operator">=</span><span class="token string">&quot;skt.msg&quot;</span><span class="token punctuation">)</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">MsgProperties</span> <span class="token keyword">implements</span> <span class="token class-name">Serializable</span><span class="token punctuation">{</span>

	
			 <span class="token doc-comment comment">/**   
	 * @Fields serialVersionUID : TODO(用一句话描述这个变量表示什么)   
			 */</span>   
		 
	<span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token keyword">final</span> <span class="token keyword">long</span> serialVersionUID <span class="token operator">=</span> <span class="token number">1L</span><span class="token punctuation">;</span> 
	
	<span class="token doc-comment comment">/**
	 * 是否启用
	 */</span>
	<span class="token keyword">private</span> <span class="token class-name">Boolean</span> enabled<span class="token punctuation">;</span>

	<span class="token keyword">public</span> <span class="token class-name">Boolean</span> <span class="token function">getEnabled</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">return</span> enabled<span class="token punctuation">;</span>
	<span class="token punctuation">}</span>

	<span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">setEnabled</span><span class="token punctuation">(</span><span class="token class-name">Boolean</span> enabled<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">this</span><span class="token punctuation">.</span>enabled <span class="token operator">=</span> enabled<span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	
	
	

<span class="token punctuation">}</span>

</code></pre></div><ol start="3"><li>编写Starter项目的业务功能</li></ol><div class="language-java" data-ext="java"><pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">com<span class="token punctuation">.</span>osvue<span class="token punctuation">.</span>env<span class="token punctuation">.</span>app<span class="token punctuation">.</span>aspect</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>util<span class="token punctuation">.</span></span><span class="token class-name">Arrays</span></span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token import"><span class="token namespace">javax<span class="token punctuation">.</span>servlet<span class="token punctuation">.</span>http<span class="token punctuation">.</span></span><span class="token class-name">HttpServletRequest</span></span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>aspectj<span class="token punctuation">.</span>lang<span class="token punctuation">.</span></span><span class="token class-name">JoinPoint</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>aspectj<span class="token punctuation">.</span>lang<span class="token punctuation">.</span>annotation<span class="token punctuation">.</span></span><span class="token class-name">AfterReturning</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>aspectj<span class="token punctuation">.</span>lang<span class="token punctuation">.</span>annotation<span class="token punctuation">.</span></span><span class="token class-name">AfterThrowing</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>aspectj<span class="token punctuation">.</span>lang<span class="token punctuation">.</span>annotation<span class="token punctuation">.</span></span><span class="token class-name">Aspect</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>aspectj<span class="token punctuation">.</span>lang<span class="token punctuation">.</span>annotation<span class="token punctuation">.</span></span><span class="token class-name">Before</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>aspectj<span class="token punctuation">.</span>lang<span class="token punctuation">.</span>annotation<span class="token punctuation">.</span></span><span class="token class-name">Pointcut</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>stereotype<span class="token punctuation">.</span></span><span class="token class-name">Component</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>web<span class="token punctuation">.</span>context<span class="token punctuation">.</span>request<span class="token punctuation">.</span></span><span class="token class-name">RequestContextHolder</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>web<span class="token punctuation">.</span>context<span class="token punctuation">.</span>request<span class="token punctuation">.</span></span><span class="token class-name">ServletRequestAttributes</span></span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token import"><span class="token namespace">lombok<span class="token punctuation">.</span>extern<span class="token punctuation">.</span>slf4j<span class="token punctuation">.</span></span><span class="token class-name">Slf4j</span></span><span class="token punctuation">;</span>

<span class="token doc-comment comment">/**
 * 
 * @ClassName:  WebLogAspect   
 * @Description:TODO(切面)   
 * <span class="token keyword">@author</span>: hzq 
 * <span class="token keyword">@date</span>:   2023-5-19 15:20:23    
 * @Copyright: 2023
 */</span>


<span class="token annotation punctuation">@Aspect</span>
<span class="token annotation punctuation">@Component</span>
<span class="token annotation punctuation">@Slf4j</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">WebLogAspect</span> <span class="token punctuation">{</span>

	
	 	<span class="token annotation punctuation">@Pointcut</span><span class="token punctuation">(</span><span class="token string">&quot;execution(* *..*Controller.*(..))&quot;</span><span class="token punctuation">)</span>
	    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">webLog</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span><span class="token punctuation">}</span>
	 
	    <span class="token annotation punctuation">@Before</span><span class="token punctuation">(</span><span class="token string">&quot;webLog()&quot;</span><span class="token punctuation">)</span>
	    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">doBefore</span><span class="token punctuation">(</span><span class="token class-name">JoinPoint</span> joinPoint<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">Throwable</span> <span class="token punctuation">{</span>
	        <span class="token comment">// 接收到请求，记录请求内容</span>
	        <span class="token class-name">ServletRequestAttributes</span> attributes <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token class-name">ServletRequestAttributes</span><span class="token punctuation">)</span> <span class="token class-name">RequestContextHolder</span><span class="token punctuation">.</span><span class="token function">getRequestAttributes</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	        <span class="token class-name">HttpServletRequest</span> request <span class="token operator">=</span> attributes<span class="token punctuation">.</span><span class="token function">getRequest</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	 
	        <span class="token comment">// 记录下请求内容</span>
	        log<span class="token punctuation">.</span><span class="token function">info</span><span class="token punctuation">(</span><span class="token string">&quot;开始服务:{}&quot;</span><span class="token punctuation">,</span> request<span class="token punctuation">.</span><span class="token function">getRequestURL</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	        log<span class="token punctuation">.</span><span class="token function">info</span><span class="token punctuation">(</span><span class="token string">&quot;客户端IP :{}&quot;</span> <span class="token punctuation">,</span> request<span class="token punctuation">.</span><span class="token function">getRemoteAddr</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	        log<span class="token punctuation">.</span><span class="token function">info</span><span class="token punctuation">(</span><span class="token string">&quot;参数值 :{}&quot;</span><span class="token punctuation">,</span> <span class="token class-name">Arrays</span><span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span>joinPoint<span class="token punctuation">.</span><span class="token function">getArgs</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	    <span class="token punctuation">}</span>
	 
	    
	    <span class="token annotation punctuation">@AfterReturning</span><span class="token punctuation">(</span>returning <span class="token operator">=</span> <span class="token string">&quot;ret&quot;</span><span class="token punctuation">,</span> pointcut <span class="token operator">=</span> <span class="token string">&quot;webLog()&quot;</span><span class="token punctuation">)</span>
	    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">doAfterReturning</span><span class="token punctuation">(</span><span class="token class-name">Object</span> ret<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">Throwable</span> <span class="token punctuation">{</span>
	        <span class="token comment">// 处理完请求，返回内容</span>
	        log<span class="token punctuation">.</span><span class="token function">info</span><span class="token punctuation">(</span><span class="token string">&quot;返回值 : {}&quot;</span> <span class="token punctuation">,</span> ret<span class="token punctuation">)</span><span class="token punctuation">;</span>
	    <span class="token punctuation">}</span> 
	    
	    <span class="token doc-comment comment">/**
	     * 
	     * @Title: logAfterThrowing   
	     * @Description: TODO(异常)   
	     * <span class="token keyword">@param</span>: @param joinPoint
	     * <span class="token keyword">@param</span>: @param error      
	     * <span class="token keyword">@return</span>: void      
	     * <span class="token keyword">@throws</span>
	     */</span>
	    <span class="token annotation punctuation">@AfterThrowing</span><span class="token punctuation">(</span>pointcut <span class="token operator">=</span> <span class="token string">&quot;webLog()&quot;</span><span class="token punctuation">,</span> throwing <span class="token operator">=</span> <span class="token string">&quot;error&quot;</span><span class="token punctuation">)</span>
	    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">logAfterThrowing</span><span class="token punctuation">(</span><span class="token class-name">JoinPoint</span> joinPoint<span class="token punctuation">,</span> <span class="token class-name">Throwable</span> error<span class="token punctuation">)</span> <span class="token punctuation">{</span>
	    	 
	    	log<span class="token punctuation">.</span><span class="token function">info</span><span class="token punctuation">(</span><span class="token string">&quot;logAfterThrowing() is running!&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	    	log<span class="token punctuation">.</span><span class="token function">info</span><span class="token punctuation">(</span><span class="token string">&quot;getName() : &quot;</span> <span class="token operator">+</span> joinPoint<span class="token punctuation">.</span><span class="token function">getSignature</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	    	log<span class="token punctuation">.</span><span class="token function">info</span><span class="token punctuation">(</span><span class="token string">&quot;Exception : &quot;</span> <span class="token operator">+</span> error<span class="token punctuation">)</span><span class="token punctuation">;</span>
	    	log<span class="token punctuation">.</span><span class="token function">info</span><span class="token punctuation">(</span><span class="token string">&quot;******&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	 
		<span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre></div><ol start="4"><li>编写自动配置类AutoConfig</li></ol><div class="language-java" data-ext="java"><pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">com<span class="token punctuation">.</span>osvue<span class="token punctuation">.</span>env<span class="token punctuation">.</span>app<span class="token punctuation">.</span>config</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>boot<span class="token punctuation">.</span>autoconfigure<span class="token punctuation">.</span>condition<span class="token punctuation">.</span></span><span class="token class-name">ConditionalOnMissingBean</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>boot<span class="token punctuation">.</span>autoconfigure<span class="token punctuation">.</span>condition<span class="token punctuation">.</span></span><span class="token class-name">ConditionalOnProperty</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>boot<span class="token punctuation">.</span>context<span class="token punctuation">.</span>properties<span class="token punctuation">.</span></span><span class="token class-name">EnableConfigurationProperties</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>context<span class="token punctuation">.</span>annotation<span class="token punctuation">.</span></span><span class="token class-name">Bean</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>context<span class="token punctuation">.</span>annotation<span class="token punctuation">.</span></span><span class="token class-name">Configuration</span></span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token import"><span class="token namespace">com<span class="token punctuation">.</span>osvue<span class="token punctuation">.</span>env<span class="token punctuation">.</span>app<span class="token punctuation">.</span>aspect<span class="token punctuation">.</span></span><span class="token class-name">WebLogAspect</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">com<span class="token punctuation">.</span>osvue<span class="token punctuation">.</span>env<span class="token punctuation">.</span>app<span class="token punctuation">.</span>props<span class="token punctuation">.</span></span><span class="token class-name">MsgProperties</span></span><span class="token punctuation">;</span>

<span class="token doc-comment comment">/**
 * 
 * @ClassName:  WebLogAutoConfig   
 * @Description:TODO(自动配置类)   
 * <span class="token keyword">@author</span>: hzq 
 * <span class="token keyword">@date</span>:   2023-5-19 15:24:59    
 * @Copyright: 2023
 */</span>
<span class="token annotation punctuation">@Configuration</span>
<span class="token annotation punctuation">@EnableConfigurationProperties</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token class-name">MsgProperties</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token annotation punctuation">@ConditionalOnProperty</span><span class="token punctuation">(</span>prefix <span class="token operator">=</span> <span class="token string">&quot;skt.msg&quot;</span><span class="token punctuation">,</span>value <span class="token operator">=</span> <span class="token string">&quot;enabled&quot;</span><span class="token punctuation">,</span>matchIfMissing <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">)</span>

<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">WebLogAutoConfig</span> <span class="token punctuation">{</span>
	<span class="token annotation punctuation">@Bean</span>
    <span class="token annotation punctuation">@ConditionalOnMissingBean</span>
    <span class="token keyword">public</span> <span class="token class-name">WebLogAspect</span> <span class="token function">webLogAspect</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">WebLogAspect</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

<span class="token punctuation">}</span>

</code></pre></div><ol start="5"><li>编写<code>spring.factories</code>文件加载自动配置类</li><li>在<code>resources</code>下新建<code>META-INF</code>文件夹，然后创建<code>spring.factories</code>文件</li><li>在该文件中加入如下配置，该配置指定上步骤中定义的配置类为自动装配的配置</li></ol><div class="language-properties" data-ext="properties"><pre class="language-properties"><code>
<span class="token key attr-name">org.springframework.boot.autoconfigure.EnableAutoConfiguration</span><span class="token punctuation">=</span><span class="token value attr-value">com.osvue.env.app.config.WebLogAutoConfig</span>
</code></pre></div><ol start="6"><li><p>打包安装</p></li><li><p>导入使用</p></li></ol><div class="language-xml" data-ext="xml"><pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">&gt;</span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>com.osvue<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>socketmsg-spring-boot-starter<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>version</span><span class="token punctuation">&gt;</span></span>0.0.1-SNAPSHOT<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>version</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">&gt;</span></span>
</code></pre></div>`,25),e=[o];function c(l,i){return s(),a("div",null,e)}const k=n(p,[["render",c],["__file","q4_starter.html.vue"]]);export{k as default};
