import{_ as n,p as a,q as s,a1 as t}from"./framework-d81ad7e5.js";const e={},o=t(`<h2 id="单一类型依赖查找" tabindex="-1"><a class="header-anchor" href="#单一类型依赖查找" aria-hidden="true">#</a> 单一类型依赖查找</h2><ul><li>单一类型依赖查找接口 - BeanFactory <ul><li>根据 Bean 名称查找 <ul><li>getBean(String)</li><li>Spring 2.5 覆盖默认参数：getBean(String,Object...)</li></ul></li><li>根据 Bean 类型查找 <ul><li>Bean 实时查找 <ul><li>Spring 3.0 getBean(Class)</li><li>Spring 4.1 覆盖默认参数：getBean(Class,Object...)</li></ul></li><li>Spring 5.1 Bean 延迟查找 <ul><li>getBeanProvider(Class)</li><li>getBeanProvider(ResolvableType)</li></ul></li></ul></li><li>根据 Bean 名称 + 类型查找：getBean(String,Class)</li></ul></li></ul><h3 id="annotationconfigapplicationcontext" tabindex="-1"><a class="header-anchor" href="#annotationconfigapplicationcontext" aria-hidden="true">#</a> AnnotationConfigApplicationContext</h3><blockquote><p>使用了注解来进行注册当前类， <strong>默认就是Configuration</strong> 就像<strong>SprigBoot</strong>的配置类或注解编程</p></blockquote><div class="language-java" data-ext="java"><pre class="language-java"><code>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">IocDemo</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>

<span class="token comment">//        使用注解方式的 ApplicationContext</span>
        <span class="token class-name">AnnotationConfigApplicationContext</span> applicationContext <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">AnnotationConfigApplicationContext</span><span class="token punctuation">(</span> <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">//        将当前类 IOCDemo作为配置类 configuration</span>
        applicationContext<span class="token punctuation">.</span><span class="token function">register</span><span class="token punctuation">(</span><span class="token class-name">IocDemo</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        applicationContext<span class="token punctuation">.</span><span class="token function">refresh</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token class-name">User</span> bean <span class="token operator">=</span> applicationContext<span class="token punctuation">.</span><span class="token function">getBean</span><span class="token punctuation">(</span><span class="token class-name">User</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>bean<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token annotation punctuation">@Bean</span>
    <span class="token keyword">public</span> <span class="token class-name">User</span> <span class="token function">user</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">User</span> user <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">User</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        user<span class="token punctuation">.</span><span class="token function">setId</span><span class="token punctuation">(</span><span class="token constant">UUID</span><span class="token punctuation">.</span><span class="token function">randomUUID</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        user<span class="token punctuation">.</span><span class="token function">setName</span><span class="token punctuation">(</span><span class="token string">&quot;你好 世界&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> user<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><ol start="2"><li>集合类型依赖查找</li></ol><ul><li>集合类型依赖查找接口 - ListableBeanFactory <ul><li>根据 Bean 类型查找 <ul><li>获取同类型 Bean 名称列表 <ul><li>getBeanNamesForType(Class)</li><li>Spring 4.2 getBeanNamesForType(ResolvableType)</li></ul></li><li>获取同类型 Bean 实例列表 <ul><li>getBeansOfType(Class) 以及重载方法</li></ul></li></ul></li><li>通过注解类型查找 <ul><li>Spring 3.0 获取标注类型 Bean 名称列表 <ul><li>getBeanNamesForAnnotation(Class&lt;? extends Annotation&gt;)</li></ul></li><li>Spring 3.0 获取标注类型 Bean 实例列表 <ul><li>getBeansWithAnnotation(Class&lt;? extends Annotation&gt;)</li></ul></li><li>Spring 3.0 获取指定名称 + 标注类型 Bean 实例 <ul><li>findAnnotationOnBean(String,Class&lt;? extends Annotation&gt;)</li></ul></li></ul></li></ul></li></ul><ol start="3"><li>层次性依赖查找</li></ol><ul><li>层次性依赖查找接口 - HierarchicalBeanFactory <ul><li>双亲 BeanFactory：getParentBeanFactory()</li><li>层次性查找 <ul><li>根据 Bean 名称查找 <ul><li>基于 containsLocalBean 方法实现</li></ul></li><li>根据 Bean 类型查找实例列表 <ul><li>单一类型：BeanFactoryUtils#beanOfType</li><li>集合类型：BeanFactoryUtils#beansOfTypeIncludingAncestors</li></ul></li><li>根据 Java 注解查找名称列表 <ul><li>BeanFactoryUtils#beanNamesForTypeIncludingAncestors</li></ul></li></ul></li></ul></li></ul><ol start="4"><li>延迟依赖查找 Bean 延迟依赖查找接口</li></ol><ul><li>org.springframework.beans.factory.ObjectFactory</li><li>org.springframework.beans.factory.ObjectProvider</li></ul><ol start="5"><li><p>安全依赖查找</p></li><li><p>内建可查找的依赖</p></li></ol><table><thead><tr><th>Bean 名称</th><th>Bean 实例</th><th>使用场景</th></tr></thead><tbody><tr><td>org.springframework.context.annotation.internalConfigurationAnnotationProcessor</td><td>ConfigurationClassPostProcessor 对象</td><td>处理 Spring 配置类</td></tr><tr><td>org.springframework.context.annotation.internalAutowiredAnnotationProcessor</td><td>AutowiredAnnotationBeanPostProcessor 对象</td><td>处理 @Autowired 以及 @Value注解</td></tr><tr><td>org.springframework.context.annotation.internalCommonAnnotationProcessor</td><td>CommonAnnotationBeanPostProcessor 对象</td><td>（条件激活）处理 JSR-250 注解，如 @PostConstruct 等</td></tr><tr><td>org.springframework.context.event.internalEventListenerProcessor</td><td>EventListenerMethodProcessor 对象</td><td>处理标注 @EventListener 的 Spring 事件监听方法</td></tr><tr><td>org.springframework.context.event.internalEventListenerFactory</td><td>DefaultEventListenerFactory 对 象</td><td>@EventListener 事件监听方法适配为 ApplicationListener</td></tr><tr><td>org.springframework.context.annotation.internalPersistenceAnnotationProcessor</td><td>PersistenceAnnotationBeanPostProcessor 对象</td><td>（条件激活）处理 JPA 注解场景</td></tr></tbody></table><div class="language-java" data-ext="java"><pre class="language-java"><code>        org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>context<span class="token punctuation">.</span>annotation<span class="token punctuation">.</span>internalAutowiredAnnotationProcessor
        <span class="token class-name">AutowiredAnnotationBeanPostProcessor</span> 对象
        处理 <span class="token annotation punctuation">@Autowired</span> 以及 <span class="token annotation punctuation">@Value</span>注解
        
        org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>context<span class="token punctuation">.</span>annotation<span class="token punctuation">.</span>internalCommonAnnotationProcessor
        <span class="token class-name">CommonAnnotationBeanPostProcessor</span> 对象
  （条件激活）处理 <span class="token constant">JSR</span><span class="token operator">-</span><span class="token number">250</span> 注解，如 <span class="token annotation punctuation">@PostConstruct</span> 等
        
        org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>context<span class="token punctuation">.</span>event<span class="token punctuation">.</span>internalEventListenerProcessor
        <span class="token class-name">EventListenerMethodProcessor</span> 对象
        处理标注 <span class="token annotation punctuation">@EventListener</span> 的 <span class="token class-name">Spring</span> 事件监听方法
        
        org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>context<span class="token punctuation">.</span>event<span class="token punctuation">.</span>internalEventListenerFactory
        <span class="token class-name">DefaultEventListenerFactory</span> 对 象
        <span class="token annotation punctuation">@EventListener</span> 事件监听方法适配为 <span class="token class-name">ApplicationListener</span>
        
        org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>context<span class="token punctuation">.</span>annotation<span class="token punctuation">.</span>internalPersistenceAnnotationProcessor
        <span class="token class-name">PersistenceAnnotationBeanPostProcessor</span> 对象
        （条件激活）处理 <span class="token constant">JPA</span> 注解场景
</code></pre></div><h3 id="面试题精选" tabindex="-1"><a class="header-anchor" href="#面试题精选" aria-hidden="true">#</a> 面试题精选</h3><h4 id="objectfactory-与-beanfactory-的区别" tabindex="-1"><a class="header-anchor" href="#objectfactory-与-beanfactory-的区别" aria-hidden="true">#</a> ObjectFactory 与 BeanFactory 的区别？</h4><p>objectFactory 在我们工作中用的比较少，</p><ul><li>ObjectFactory 与 BeanFactory 均提供依赖查找的能力。 不过 ObjectFactory 仅关注一个或一种类型的 Bean 依赖查找，并且 自身不具备依赖查找的能力，能力则由 BeanFactory 输出。 BeanFactory 则提供了单一类型、集合类型以及层次性等多种依赖查 找方式。</li></ul><h4 id="beanfactory-getbean-操作是否线程安全" tabindex="-1"><a class="header-anchor" href="#beanfactory-getbean-操作是否线程安全" aria-hidden="true">#</a> BeanFactory.getBean 操作是否线程安全？</h4><ul><li>BeanFactory.getBean 方法的执行是线程安全的，超过过程中会增加互斥锁</li></ul><h2 id="ioc-依赖注入" tabindex="-1"><a class="header-anchor" href="#ioc-依赖注入" aria-hidden="true">#</a> ioc 依赖注入</h2><h3 id="依赖注入的模式和类型" tabindex="-1"><a class="header-anchor" href="#依赖注入的模式和类型" aria-hidden="true">#</a> 依赖注入的模式和类型</h3><ul><li>手动模式 - 配置或者编程的方式，提前安排注入规则 <ul><li>XML 资源配置元信息</li><li>Java 注解配置元信息</li><li>API 配置元信息</li></ul></li><li>自动模式 - 实现方提供依赖自动关联的方式，按照內建的注入规则 <ul><li>Autowiring（自动绑定）</li></ul></li></ul><h3 id="自动绑定-autowiring" tabindex="-1"><a class="header-anchor" href="#自动绑定-autowiring" aria-hidden="true">#</a> 自动绑定（Autowiring）</h3><table><thead><tr><th>Setter 方法</th><th></th><th><code>&lt;proeprty name=&quot;user&quot; ref=&quot;userBean&quot;/&gt;</code></th></tr></thead><tbody><tr><td>构造器</td><td></td><td><code>&lt;constructor-arg name=&quot;user&quot; ref=&quot;userBean&quot; /&gt;</code></td></tr><tr><td>字段</td><td></td><td>@Autowired User user;</td></tr><tr><td>方法</td><td></td><td>@Autowired public void user(User user) { ... }</td></tr><tr><td>接口回调</td><td></td><td>class MyBean implements BeanFactoryAware { ... }</td></tr></tbody></table><h3 id="自动绑定-autowiring-模式" tabindex="-1"><a class="header-anchor" href="#自动绑定-autowiring-模式" aria-hidden="true">#</a> 自动绑定（Autowiring）模式</h3><ul><li>byName</li><li>byType</li><li>construact</li></ul><div class="custom-container danger"><p class="custom-container-title">DANGER</p><pre><code>@Autowired &lt;br&gt;
</code></pre><p>// @Autowired 会忽略到static 字段 <br> static User user; // 结果为 null<br></p></div><h3 id="setter-方法依赖注入" tabindex="-1"><a class="header-anchor" href="#setter-方法依赖注入" aria-hidden="true">#</a> Setter 方法依赖注入</h3><ul><li>手动模式 <ul><li>XML 资源配置元信息</li><li>Java 注解配置元信息</li><li>API 配置元信息</li></ul></li><li>自动模式 <ul><li>byName</li><li>byType</li></ul></li></ul><h3 id="构造器依赖注入" tabindex="-1"><a class="header-anchor" href="#构造器依赖注入" aria-hidden="true">#</a> 构造器依赖注入</h3><ul><li>手动模式 <ul><li>XML 资源配置元信息</li><li>Java 注解配置元信息</li><li>API 配置元信息</li></ul></li><li>自动模式 <ul><li>constructor</li></ul></li></ul><h3 id="字段注入" tabindex="-1"><a class="header-anchor" href="#字段注入" aria-hidden="true">#</a> 字段注入</h3><pre><code>- @Autowired
- @Resource
</code></pre><div class="language-java" data-ext="java"><pre class="language-java"><code>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">com<span class="token punctuation">.</span>osvue<span class="token punctuation">.</span>spring<span class="token punctuation">.</span>in<span class="token punctuation">.</span>ioc<span class="token punctuation">.</span>domain<span class="token punctuation">.</span></span><span class="token class-name">User</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>beans<span class="token punctuation">.</span>factory<span class="token punctuation">.</span>annotation<span class="token punctuation">.</span></span><span class="token class-name">Autowired</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>context<span class="token punctuation">.</span>annotation<span class="token punctuation">.</span></span><span class="token class-name">AnnotationConfigApplicationContext</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>context<span class="token punctuation">.</span>annotation<span class="token punctuation">.</span></span><span class="token class-name">Bean</span></span><span class="token punctuation">;</span>

<span class="token doc-comment comment">/**
 * 通过 <span class="token punctuation">{</span><span class="token keyword">@link</span> <span class="token reference"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>context<span class="token punctuation">.</span>annotation<span class="token punctuation">.</span></span><span class="token class-name">Configuration</span></span> 配置类方式 自动注入<span class="token punctuation">}</span>
 *
 * <span class="token keyword">@see</span> <span class="token punctuation">{</span>字段注入<span class="token punctuation">}</span>
 * <span class="token keyword">@since</span> 9
 */</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">ConfigClass</span> <span class="token punctuation">{</span>

    <span class="token annotation punctuation">@Autowired</span>
    <span class="token class-name">User</span> user<span class="token punctuation">;</span>

    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">AnnotationConfigApplicationContext</span> context <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">AnnotationConfigApplicationContext</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">//注册当前类 为 可配置的 class</span>
        context<span class="token punctuation">.</span><span class="token function">register</span><span class="token punctuation">(</span><span class="token class-name">ConfigClass</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">//        刷新上下文</span>
        context<span class="token punctuation">.</span><span class="token function">refresh</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token class-name">ConfigClass</span> bean <span class="token operator">=</span> context<span class="token punctuation">.</span><span class="token function">getBean</span><span class="token punctuation">(</span><span class="token class-name">ConfigClass</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token class-name">User</span> user <span class="token operator">=</span> bean<span class="token punctuation">.</span>user<span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>user<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token punctuation">}</span>

    <span class="token annotation punctuation">@Bean</span>
    <span class="token keyword">public</span> <span class="token class-name">User</span> <span class="token function">user</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">User</span> user <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">User</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        user<span class="token punctuation">.</span><span class="token function">setName</span><span class="token punctuation">(</span><span class="token string">&quot;auto-wiring&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        user<span class="token punctuation">.</span><span class="token function">setId</span><span class="token punctuation">(</span><span class="token string">&quot;uuid&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> user<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre></div><h3 id="方法注入" tabindex="-1"><a class="header-anchor" href="#方法注入" aria-hidden="true">#</a> 方法注入</h3><div class="language-java" data-ext="java"><pre class="language-java"><code>  <span class="token doc-comment comment">/**
     * <span class="token keyword">@param</span> <span class="token parameter">user</span>
     * <span class="token keyword">@see</span> \`method\` inject 方法注入
     */</span>
    <span class="token annotation punctuation">@Autowired</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">initUser</span><span class="token punctuation">(</span><span class="token class-name">User</span> user<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>user <span class="token operator">=</span> user<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
</code></pre></div><h3 id="回调注入" tabindex="-1"><a class="header-anchor" href="#回调注入" aria-hidden="true">#</a> 回调注入</h3><h2 id="aware-系列接口回调" tabindex="-1"><a class="header-anchor" href="#aware-系列接口回调" aria-hidden="true">#</a> Aware 系列接口回调</h2><table><thead><tr><th>内建接口</th><th>说明</th></tr></thead><tbody><tr><td>BeanFactoryAware</td><td>获取 IoC 容器 - BeanFactory</td></tr><tr><td>ApplicationContextAware</td><td>获取 Spring 应用上下文 - ApplicationContext 对象</td></tr><tr><td>EnvironmentAware</td><td>获取 Environment 对象</td></tr><tr><td>ResourceLoaderAware</td><td>获取资源加载器 对象 - ResourceLoader</td></tr><tr><td>BeanClassLoaderAware</td><td>获取加载当前 Bean Class 的 ClassLoader</td></tr><tr><td>BeanNameAware</td><td>获取当前 Bean 的名称</td></tr><tr><td>MessageSourceAware</td><td>获取 MessageSource 对象，用于 Spring 国际化</td></tr><tr><td>ApplicationEventPublisherAware</td><td>获取 ApplicationEventPublishAware 对象，用于 Spring 事件</td></tr><tr><td>EmbeddedValueResolverAware</td><td>获取 StringValueResolver 对象，用于占位符处理</td></tr><tr><td></td><td></td></tr></tbody></table><h3 id="依赖注入类型选择" tabindex="-1"><a class="header-anchor" href="#依赖注入类型选择" aria-hidden="true">#</a> 依赖注入类型选择</h3><ul><li>注入选型 <ul><li>低依赖：构造器注入</li><li>多依赖：Setter 方法注入</li><li>便利性：字段注入</li><li>声明类：方法注入</li></ul></li></ul><h3 id="限定注入" tabindex="-1"><a class="header-anchor" href="#限定注入" aria-hidden="true">#</a> 限定注入</h3><ul><li>使用注解 @Qualifier 限定 <ul><li>通过 Bean 名称限定</li><li>通过分组限定</li><li>基于注解 @Qualifier 扩展限定</li><li>自定义注解 - 如 Spring Cloud @LoadBalanced</li></ul></li></ul><h3 id="延迟依赖注入" tabindex="-1"><a class="header-anchor" href="#延迟依赖注入" aria-hidden="true">#</a> 延迟依赖注入</h3><h3 id="依赖处理过程" tabindex="-1"><a class="header-anchor" href="#依赖处理过程" aria-hidden="true">#</a> 依赖处理过程</h3><h3 id="autowired-注入原理" tabindex="-1"><a class="header-anchor" href="#autowired-注入原理" aria-hidden="true">#</a> @Autowired 注入原理</h3><h3 id="jsr-330-inject-注入原理" tabindex="-1"><a class="header-anchor" href="#jsr-330-inject-注入原理" aria-hidden="true">#</a> JSR-330 @Inject 注入原理</h3><h3 id="java通用注解注入原理" tabindex="-1"><a class="header-anchor" href="#java通用注解注入原理" aria-hidden="true">#</a> Java通用注解注入原理</h3><h3 id="自定义依赖注入注解" tabindex="-1"><a class="header-anchor" href="#自定义依赖注入注解" aria-hidden="true">#</a> 自定义依赖注入注解</h3><h3 id="面试题精选-1" tabindex="-1"><a class="header-anchor" href="#面试题精选-1" aria-hidden="true">#</a> 面试题精选</h3>`,51),p=[o];function c(i,l){return a(),s("div",null,p)}const u=n(e,[["render",c],["__file","spring05_dependsearch.html.vue"]]);export{u as default};