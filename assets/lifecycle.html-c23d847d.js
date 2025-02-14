import{_ as n,p as a,q as s,a1 as t}from"./framework-d81ad7e5.js";const p="/assets/beandif-cd436d42.png",o="/assets/appcontext-445a2105.png",e="/assets/lify-43adbde3.png",c={},l=t('<h2 id="生命周期" tabindex="-1"><a class="header-anchor" href="#生命周期" aria-hidden="true">#</a> 生命周期</h2><ul><li>从对象创建到销毁的过程</li><li>bean生命周期 <ol><li>通过构造器创建bean的实例 <strong>无参数构造</strong></li><li>为bean的属性设置值和对其他bean 的引用 <strong>调用set方法</strong></li><li>调用bean 的初始化方法</li><li>bean可以使用了</li><li>当容器关闭时，会调用bean销毁方法</li></ol></li></ul><ul><li><strong>阶段1</strong> Bean元信息配置阶段</li><li><strong>阶段2</strong> Bean元信息解析阶段</li><li><strong>阶段3</strong> 将Bean注册到容器中</li><li><strong>阶段4</strong> <strong>BeanDefinition</strong>合并阶段</li><li><strong>阶段5</strong> Bean Class加载阶段</li><li><strong>阶段6</strong> Bean实例化阶段（2个小阶段） <ul><li>Bean实例化前阶段</li><li>Bean实例化阶段</li></ul></li><li><strong>阶段7</strong> 合并后的<strong>BeanDefinition</strong>处理</li><li><strong>阶段8</strong> 属性赋值阶段（3个小阶段） <ul><li>Bean实例化后阶段</li><li>Bean属性赋值前阶段</li><li>Bean属性赋值阶段</li></ul></li><li><strong>阶段9</strong> Bean初始化阶段（4个小阶段） <ul><li>Bean Aware接口回调阶段</li><li>Bean初始化前阶段</li><li>Bean初始化阶段</li><li>Bean初始化后阶段</li></ul></li><li><strong>阶段10</strong> 所有单例bean初始化完成后阶段</li><li><strong>阶段11</strong> Bean的使用阶段</li><li><strong>阶段12</strong> Bean销毁前阶段</li><li><strong>阶段13</strong> Bean销毁阶段</li></ul><h3 id="阶段1-bean元信息配置阶段" tabindex="-1"><a class="header-anchor" href="#阶段1-bean元信息配置阶段" aria-hidden="true">#</a> 阶段1：Bean元信息配置阶段</h3><p><strong>这个阶段主要是bean信息的定义阶段。</strong></p><ul><li>Bean信息定义4种方式</li></ul><ol><li>API的方式</li><li>Xml文件方式</li><li>properties文件的方式</li><li>注解的方式</li></ol><p><strong>API的方式</strong></p><ul><li><p>先来说这种方式，因为其他几种方式最终都会采用这种方式来定义bean配置信息。</p></li><li><p>Spring容器启动的过程中，会将Bean解析成Spring内部的<strong>BeanDefinition</strong>结构。</p></li><li><p>不管是是通过xml配置文件的<code>&lt;Bean&gt;</code>标签，还是通过注解配置的<code>@Bean</code>，还是<code>@Compontent</code>标注的类，还是扫描得到的类，它最终都会被解析成一个<code>BeanDefinition</code>对象，最后我们的Bean工厂就会根据这份Bean的定义信息，对bean进行实例化、初始化等等操作。</p></li><li><p>你可以把<strong>BeanDefinition</strong>丢给Bean工厂，然后Bean工厂就会根据这个信息帮你生产一个Bean实例，拿去使用。</p></li></ul><p><strong>BeanDefinition</strong>里面里面包含了bean定义的各种信息，如：<code>bean对应的class、scope、lazy信息、dependOn信息、autowireCandidate（是否是候选对象）、primary（是否是主要的候选者）</code>等信息。</p><p><strong>BeanDefinition</strong>是个接口，有几个实现类，看一下类图： <img src="'+p+`" alt="alt"></p><blockquote><p><strong>BeanDefinition接口</strong>：bean定义信息接口 表示bean定义信息的接口，里面定义了一些获取bean定义配置信息的各种方法，来看一下源码：</p></blockquote><div class="language-java" data-ext="java"><pre class="language-java"><code>
<span class="token keyword">public</span> <span class="token keyword">interface</span> <span class="token class-name">BeanDefinition</span> <span class="token keyword">extends</span> <span class="token class-name">AttributeAccessor</span><span class="token punctuation">,</span> <span class="token class-name">BeanMetadataElement</span> <span class="token punctuation">{</span>

	<span class="token doc-comment comment">/**
	 * 设置此bean的父bean名称（对应xml中bean元素的parent属性）
	 */</span>
	<span class="token keyword">void</span> <span class="token function">setParentName</span><span class="token punctuation">(</span><span class="token annotation punctuation">@Nullable</span> <span class="token class-name">String</span> parentName<span class="token punctuation">)</span><span class="token punctuation">;</span>

	<span class="token doc-comment comment">/**
	 * 返回此bean定义时指定的父bean的名称
	 */</span>
	<span class="token annotation punctuation">@Nullable</span>
	<span class="token class-name">String</span> <span class="token function">getParentName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

	<span class="token doc-comment comment">/**
	 * 指定此bean定义的bean类名(对应xml中bean元素的class属性)
	 */</span>
	<span class="token keyword">void</span> <span class="token function">setBeanClassName</span><span class="token punctuation">(</span><span class="token annotation punctuation">@Nullable</span> <span class="token class-name">String</span> beanClassName<span class="token punctuation">)</span><span class="token punctuation">;</span>

	<span class="token doc-comment comment">/**
	 * 返回此bean定义的当前bean类名
	 * 注意，如果子定义重写/继承其父类的类名，则这不一定是运行时使用的实际类名。此外，这可能只是调用工厂方法的类，或者在调用方法的工厂bean引用的情况下，它甚至可能是空的。因此，不要认为这是运行时的最终bean类型，而只将其用于单个bean定义级别的解析目的。
	 */</span>
	<span class="token annotation punctuation">@Nullable</span>
	<span class="token class-name">String</span> <span class="token function">getBeanClassName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

	<span class="token doc-comment comment">/**
	 * 设置此bean的生命周期，如：singleton、prototype（对应xml中bean元素的scope属性）
	 */</span>
	<span class="token keyword">void</span> <span class="token function">setScope</span><span class="token punctuation">(</span><span class="token annotation punctuation">@Nullable</span> <span class="token class-name">String</span> scope<span class="token punctuation">)</span><span class="token punctuation">;</span>

	<span class="token doc-comment comment">/**
	 * 返回此bean的生命周期，如：singleton、prototype
	 */</span>
	<span class="token annotation punctuation">@Nullable</span>
	<span class="token class-name">String</span> <span class="token function">getScope</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

	<span class="token doc-comment comment">/**
	 * 设置是否应延迟初始化此bean（对应xml中bean元素的lazy属性）
	 */</span>
	<span class="token keyword">void</span> <span class="token function">setLazyInit</span><span class="token punctuation">(</span><span class="token keyword">boolean</span> lazyInit<span class="token punctuation">)</span><span class="token punctuation">;</span>

	<span class="token doc-comment comment">/**
	 * 返回是否应延迟初始化此bean，只对单例bean有效
	 */</span>
	<span class="token keyword">boolean</span> <span class="token function">isLazyInit</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

	<span class="token doc-comment comment">/**
	 * 设置此bean依赖于初始化的bean的名称,bean工厂将保证dependsOn指定的bean会在当前bean初始化之前先初始化好
	 */</span>
	<span class="token keyword">void</span> <span class="token function">setDependsOn</span><span class="token punctuation">(</span><span class="token annotation punctuation">@Nullable</span> <span class="token class-name">String</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span> dependsOn<span class="token punctuation">)</span><span class="token punctuation">;</span>

	<span class="token doc-comment comment">/**
	 * 返回此bean所依赖的bean名称
	 */</span>
	<span class="token annotation punctuation">@Nullable</span>
	<span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token function">getDependsOn</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

	<span class="token doc-comment comment">/**
	 * 设置此bean是否作为其他bean自动注入时的候选者 autowireCandidate
	 */</span>
	<span class="token keyword">void</span> <span class="token function">setAutowireCandidate</span><span class="token punctuation">(</span><span class="token keyword">boolean</span> autowireCandidate<span class="token punctuation">)</span><span class="token punctuation">;</span>

	<span class="token doc-comment comment">/**
	 * 返回此bean是否作为其他bean自动注入时的候选者
	 */</span>
	<span class="token keyword">boolean</span> <span class="token function">isAutowireCandidate</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

	<span class="token doc-comment comment">/**
	 * 设置此bean是否为自动注入的主要候选者 primary：是否为主要候选者
	 */</span>
	<span class="token keyword">void</span> <span class="token function">setPrimary</span><span class="token punctuation">(</span><span class="token keyword">boolean</span> primary<span class="token punctuation">)</span><span class="token punctuation">;</span>

	<span class="token doc-comment comment">/**
	 * 返回此bean是否作为自动注入的主要候选者
	 */</span>
	<span class="token keyword">boolean</span> <span class="token function">isPrimary</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

	<span class="token doc-comment comment">/**
	 * 指定要使用的工厂bean（如果有）。这是要对其调用指定工厂方法的bean的名称。 factoryBeanName：工厂bean名称
	 */</span>
	<span class="token keyword">void</span> <span class="token function">setFactoryBeanName</span><span class="token punctuation">(</span><span class="token annotation punctuation">@Nullable</span> <span class="token class-name">String</span> factoryBeanName<span class="token punctuation">)</span><span class="token punctuation">;</span>

	<span class="token doc-comment comment">/**
	 * 返回工厂bean名称（如果有）（对应xml中bean元素的factory-bean属性）
	 */</span>
	<span class="token annotation punctuation">@Nullable</span>
	<span class="token class-name">String</span> <span class="token function">getFactoryBeanName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

	<span class="token doc-comment comment">/**
	 * 指定工厂方法（如果有）。此方法将使用构造函数参数调用，如果未指定任何参数，则不使用任何参数调用。该方法将在指定的工厂bean（如果有的话）上调用，或者作为本地bean类上的静态方法调用。
	 * factoryMethodName：工厂方法名称
	 */</span>
	<span class="token keyword">void</span> <span class="token function">setFactoryMethodName</span><span class="token punctuation">(</span><span class="token annotation punctuation">@Nullable</span> <span class="token class-name">String</span> factoryMethodName<span class="token punctuation">)</span><span class="token punctuation">;</span>

	<span class="token doc-comment comment">/**
	 * 返回工厂方法名称（对应xml中bean的factory-method属性）
	 */</span>
	<span class="token annotation punctuation">@Nullable</span>
	<span class="token class-name">String</span> <span class="token function">getFactoryMethodName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

	<span class="token doc-comment comment">/**
	 * 返回此bean的构造函数参数值
	 */</span>
	<span class="token class-name">ConstructorArgumentValues</span> <span class="token function">getConstructorArgumentValues</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

	<span class="token doc-comment comment">/**
	 * 是否有构造器参数值设置信息（对应xml中bean元素的<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>constructor-arg</span> <span class="token punctuation">/&gt;</span></span>子元素）
	 */</span>
	<span class="token keyword">default</span> <span class="token keyword">boolean</span> <span class="token function">hasConstructorArgumentValues</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">return</span> <span class="token operator">!</span><span class="token function">getConstructorArgumentValues</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">isEmpty</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>

	<span class="token doc-comment comment">/**
	 * 获取bean定义是配置的属性值设置信息
	 */</span>
	<span class="token class-name">MutablePropertyValues</span> <span class="token function">getPropertyValues</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

	<span class="token doc-comment comment">/**
	 * 这个bean定义中是否有属性设置信息（对应xml中bean元素的<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>property</span> <span class="token punctuation">/&gt;</span></span>子元素）
	 */</span>
	<span class="token keyword">default</span> <span class="token keyword">boolean</span> <span class="token function">hasPropertyValues</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">return</span> <span class="token operator">!</span><span class="token function">getPropertyValues</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">isEmpty</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>

	<span class="token doc-comment comment">/**
	 * 设置bean初始化方法名称
	 */</span>
	<span class="token keyword">void</span> <span class="token function">setInitMethodName</span><span class="token punctuation">(</span><span class="token annotation punctuation">@Nullable</span> <span class="token class-name">String</span> initMethodName<span class="token punctuation">)</span><span class="token punctuation">;</span>

	<span class="token doc-comment comment">/**
	 * bean初始化方法名称
	 */</span>
	<span class="token annotation punctuation">@Nullable</span>
	<span class="token class-name">String</span> <span class="token function">getInitMethodName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

	<span class="token doc-comment comment">/**
	 * 设置bean销毁方法的名称
	 */</span>
	<span class="token keyword">void</span> <span class="token function">setDestroyMethodName</span><span class="token punctuation">(</span><span class="token annotation punctuation">@Nullable</span> <span class="token class-name">String</span> destroyMethodName<span class="token punctuation">)</span><span class="token punctuation">;</span>

	<span class="token doc-comment comment">/**
	 * bean销毁的方法名称
	 */</span>
	<span class="token annotation punctuation">@Nullable</span>
	<span class="token class-name">String</span> <span class="token function">getDestroyMethodName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

	<span class="token doc-comment comment">/**
	 * 设置bean的role信息
	 */</span>
	<span class="token keyword">void</span> <span class="token function">setRole</span><span class="token punctuation">(</span><span class="token keyword">int</span> role<span class="token punctuation">)</span><span class="token punctuation">;</span>

	<span class="token doc-comment comment">/**
	 * bean定义的role信息
	 */</span>
	<span class="token keyword">int</span> <span class="token function">getRole</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

	<span class="token doc-comment comment">/**
	 * 设置bean描述信息
	 */</span>
	<span class="token keyword">void</span> <span class="token function">setDescription</span><span class="token punctuation">(</span><span class="token annotation punctuation">@Nullable</span> <span class="token class-name">String</span> description<span class="token punctuation">)</span><span class="token punctuation">;</span>

	<span class="token doc-comment comment">/**
	 * bean描述信息
	 */</span>
	<span class="token annotation punctuation">@Nullable</span>
	<span class="token class-name">String</span> <span class="token function">getDescription</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

	<span class="token doc-comment comment">/**
	 * bean类型解析器
	 */</span>
	<span class="token class-name">ResolvableType</span> <span class="token function">getResolvableType</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

	<span class="token doc-comment comment">/**
	 * 是否是单例的bean
	 */</span>
	<span class="token keyword">boolean</span> <span class="token function">isSingleton</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

	<span class="token doc-comment comment">/**
	 * 是否是多列的bean
	 */</span>
	<span class="token keyword">boolean</span> <span class="token function">isPrototype</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

	<span class="token doc-comment comment">/**
	 * 对应xml中bean元素的abstract属性，用来指定是否是抽象的
	 */</span>
	<span class="token keyword">boolean</span> <span class="token function">isAbstract</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

	<span class="token doc-comment comment">/**
	 * 返回此bean定义来自的资源的描述（以便在出现错误时显示上下文）
	 */</span>
	<span class="token annotation punctuation">@Nullable</span>
	<span class="token class-name">String</span> <span class="token function">getResourceDescription</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

	<span class="token annotation punctuation">@Nullable</span>
	<span class="token class-name">BeanDefinition</span> <span class="token function">getOriginatingBeanDefinition</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token punctuation">}</span>
</code></pre></div><h4 id="beandefinition接口上面还继承了2个接口" tabindex="-1"><a class="header-anchor" href="#beandefinition接口上面还继承了2个接口" aria-hidden="true">#</a> BeanDefinition接口上面还继承了2个接口：</h4><ol><li><p><strong>AttributeAccessor</strong></p></li><li><p><strong>BeanMetadataElement</strong></p></li></ol><blockquote><p><strong>AttributeAccessor</strong>接口：属性访问接口</p></blockquote><div class="language-java" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">interface</span> <span class="token class-name">AttributeAccessor</span> <span class="token punctuation">{</span>

    <span class="token doc-comment comment">/**
     * 设置属性-&gt;值
     */</span>
    <span class="token keyword">void</span> <span class="token function">setAttribute</span><span class="token punctuation">(</span><span class="token class-name">String</span> name<span class="token punctuation">,</span> <span class="token annotation punctuation">@Nullable</span> <span class="token class-name">Object</span> value<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token doc-comment comment">/**
     * 获取某个属性对应的值
     */</span>
    <span class="token annotation punctuation">@Nullable</span>
    <span class="token class-name">Object</span> <span class="token function">getAttribute</span><span class="token punctuation">(</span><span class="token class-name">String</span> name<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token doc-comment comment">/**
     * 移除某个属性
     */</span>
    <span class="token annotation punctuation">@Nullable</span>
    <span class="token class-name">Object</span> <span class="token function">removeAttribute</span><span class="token punctuation">(</span><span class="token class-name">String</span> name<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token doc-comment comment">/**
     * 是否包含某个属性
     */</span>
    <span class="token keyword">boolean</span> <span class="token function">hasAttribute</span><span class="token punctuation">(</span><span class="token class-name">String</span> name<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token doc-comment comment">/**
     * 返回所有的属性名称
     */</span>
    <span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token function">attributeNames</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token punctuation">}</span>
</code></pre></div><p>这个接口相当于<code>key-&gt;value</code>数据结构的一种操作，<code>BeanDefinition</code>继承这个，内部实际上是使用了 **<code>LinkedHashMap</code>**来实现这个接口中的所有方法，通常我们通过这些方法来保存BeanDefinition定义过程中产生的一些附加信息。</p><blockquote><p><strong>BeanMetadataElement</strong>接口 看一下其源码：</p></blockquote><div class="language-java" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">interface</span> <span class="token class-name">BeanMetadataElement</span> <span class="token punctuation">{</span>

    <span class="token annotation punctuation">@Nullable</span>
    <span class="token keyword">default</span> <span class="token class-name">Object</span> <span class="token function">getSource</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

<span class="token punctuation">}</span>
</code></pre></div><ul><li><p>BeanDefinition继承这个接口，getSource返回BeanDefinition定义的来源，比如我们通过xml定义BeanDefinition的，此时getSource就表示定义bean的xml资源；若我们通过api的方式定义BeanDefinition，我们可以将source设置为定义BeanDefinition时所在的类，出错时，可以根据这个来源方便排错。</p></li><li><p><strong>RootBeanDefinition类</strong>：表示根bean定义信息</p><ul><li>通常bean中没有父bean的就使用这种表示</li></ul></li><li><p><strong>ChildBeanDefinition类</strong>：表示子bean定义信息</p><ul><li>如果需要指定父bean的，可以使用ChildBeanDefinition来定义子bean的配置信息，里面有个parentName属性，用来指定父bean的名称。</li></ul></li><li><p><strong>GenericBeanDefinition类</strong>：通用的bean定义信息</p><ul><li>既可以表示没有父bean的bean配置信息，也可以表示有父bean的子bean配置信息，这个类里面也有parentName属性，用来指定父bean的名称。</li></ul></li><li><p><strong>ConfigurationClassBeanDefinition类</strong>：表示通过配置类中@Bean方法定义bean信息</p><ul><li><p>可以通过配置类中使用@Bean来标注一些方法，通过这些方法来定义bean，这些方法配置的bean信息最后会转换为 ConfigurationClassBeanDefinition类型的对象</p></li><li><p>AnnotatedBeanDefinition接口：表示通过注解的方式定义的bean信息 里面有个方法</p></li></ul></li></ul><p><code>AnnotationMetadata getMetadata();</code> 用来获取定义这个bean的类上的所有注解信息。</p><ul><li><strong>BeanDefinitionBuilder</strong>：构建BeanDefinition的工具类 <ul><li>spring中为了方便操作BeanDefinition，提供了一个类：BeanDefinitionBuilder，内部提供了很多静态方法，通过这些方法可以非常方便的组装BeanDefinition对象</li></ul></li></ul><ol><li><strong>简单的类</strong></li></ol><div class="language-java" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">People</span> <span class="token punctuation">{</span>

	<span class="token keyword">private</span> <span class="token class-name">String</span> name<span class="token punctuation">;</span>
	<span class="token keyword">private</span> <span class="token class-name">String</span> age<span class="token punctuation">;</span>
  
<span class="token punctuation">}</span>
	<span class="token annotation punctuation">@Test</span>
	<span class="token keyword">void</span> <span class="token function">contextLoads</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		
		
		<span class="token class-name">BeanDefinitionBuilder</span> bd <span class="token operator">=</span> <span class="token class-name">BeanDefinitionBuilder</span><span class="token punctuation">.</span><span class="token function">rootBeanDefinition</span><span class="token punctuation">(</span><span class="token class-name">People</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">.</span><span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	   <span class="token comment">//获取BeanDefinition</span>
	    <span class="token class-name">BeanDefinition</span> beanDefinition <span class="token operator">=</span> bd<span class="token punctuation">.</span><span class="token function">getBeanDefinition</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>beanDefinition<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>

</code></pre></div><ol start="2"><li><strong>组装一个有属性的bean</strong></li></ol><div class="language-java" data-ext="java"><pre class="language-java"><code>  <span class="token annotation punctuation">@Test</span>
	<span class="token keyword">void</span> <span class="token function">contextLoads</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>

		<span class="token class-name">BeanDefinitionBuilder</span> beanDefinitionBuilder <span class="token operator">=</span> <span class="token class-name">BeanDefinitionBuilder</span><span class="token punctuation">.</span><span class="token function">rootBeanDefinition</span><span class="token punctuation">(</span><span class="token class-name">People</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">.</span><span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token comment">// 指定class</span>
		<span class="token comment">// 设置普通类型属性</span>
		beanDefinitionBuilder<span class="token punctuation">.</span><span class="token function">addPropertyValue</span><span class="token punctuation">(</span><span class="token string">&quot;name&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;小敏&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// @1 调用addPropertyValue给Car中的name设置值</span>
		beanDefinitionBuilder<span class="token punctuation">.</span><span class="token function">addPropertyValue</span><span class="token punctuation">(</span><span class="token string">&quot;age&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;26&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token comment">// 获取BeanDefinition</span>
		<span class="token class-name">BeanDefinition</span> carBeanDefinition <span class="token operator">=</span> beanDefinitionBuilder<span class="token punctuation">.</span><span class="token function">getBeanDefinition</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>carBeanDefinition<span class="token punctuation">)</span><span class="token punctuation">;</span>

		<span class="token comment">// 创建spring容器</span>
		<span class="token class-name">DefaultListableBeanFactory</span> factory <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">DefaultListableBeanFactory</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// @2</span>
		<span class="token comment">// 调用registerBeanDefinition向容器中注册bean</span>
		factory<span class="token punctuation">.</span><span class="token function">registerBeanDefinition</span><span class="token punctuation">(</span><span class="token string">&quot;abcd&quot;</span><span class="token punctuation">,</span> carBeanDefinition<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// @3</span>
		<span class="token class-name">People</span> bean <span class="token operator">=</span> factory<span class="token punctuation">.</span><span class="token function">getBean</span><span class="token punctuation">(</span><span class="token string">&quot;abcd&quot;</span><span class="token punctuation">,</span> <span class="token class-name">People</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// @4</span>
		<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>bean<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>

</code></pre></div><ol start="3"><li><strong>组装一个有依赖关系的bean</strong></li></ol><div class="language-java" data-ext="java"><pre class="language-java"><code><span class="token annotation punctuation">@Test</span>
<span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">test3</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">//先创建car这个BeanDefinition</span>
    <span class="token class-name">BeanDefinition</span> carBeanDefinition <span class="token operator">=</span> <span class="token class-name">BeanDefinitionBuilder</span><span class="token punctuation">.</span><span class="token function">rootBeanDefinition</span><span class="token punctuation">(</span><span class="token class-name">Car</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">.</span><span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">addPropertyValue</span><span class="token punctuation">(</span><span class="token string">&quot;name&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;奥迪&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getBeanDefinition</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">//创建User这个BeanDefinition</span>
    <span class="token class-name">BeanDefinition</span> userBeanDefinition <span class="token operator">=</span> <span class="token class-name">BeanDefinitionBuilder</span><span class="token punctuation">.</span><span class="token function">rootBeanDefinition</span><span class="token punctuation">(</span><span class="token class-name">User</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">.</span><span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">.</span>
            <span class="token function">addPropertyValue</span><span class="token punctuation">(</span><span class="token string">&quot;name&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;路人甲Java&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span>
            <span class="token function">addPropertyReference</span><span class="token punctuation">(</span><span class="token string">&quot;car&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;car&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span> <span class="token comment">//@1</span>
            <span class="token function">getBeanDefinition</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">//创建spring容器</span>
    <span class="token class-name">DefaultListableBeanFactory</span> factory <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">DefaultListableBeanFactory</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">//调用registerBeanDefinition向容器中注册bean</span>
    factory<span class="token punctuation">.</span><span class="token function">registerBeanDefinition</span><span class="token punctuation">(</span><span class="token string">&quot;car&quot;</span><span class="token punctuation">,</span> carBeanDefinition<span class="token punctuation">)</span><span class="token punctuation">;</span> 
    factory<span class="token punctuation">.</span><span class="token function">registerBeanDefinition</span><span class="token punctuation">(</span><span class="token string">&quot;user&quot;</span><span class="token punctuation">,</span> userBeanDefinition<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>factory<span class="token punctuation">.</span><span class="token function">getBean</span><span class="token punctuation">(</span><span class="token string">&quot;car&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>factory<span class="token punctuation">.</span><span class="token function">getBean</span><span class="token punctuation">(</span><span class="token string">&quot;user&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><ul><li><strong>bean注册者只识别BeanDefinition对象，不管什么方式最后都会将这些bean定义的信息转换为BeanDefinition对象，然后注册到spring容器中。</strong></li></ul><h3 id="阶段2-bean元信息解析阶段" tabindex="-1"><a class="header-anchor" href="#阶段2-bean元信息解析阶段" aria-hidden="true">#</a> 阶段2 Bean元信息解析阶段</h3><p>Bean元信息的解析就是将各种方式定义的bean配置信息解析为BeanDefinition对象。</p><ul><li>Bean元信息的解析主要有3种方式</li></ul><ol><li>xml文件定义bean的解析</li><li>properties文件定义bean的解析</li><li>注解方式定义bean的解析</li></ol><ul><li><strong>XML方式解析：XmlBeanDefinitionReader</strong> spring中提供了一个类XmlBeanDefinitionReader，将xml中定义的bean解析为BeanDefinition对象。</li></ul><div class="language-xml" data-ext="xml"><pre class="language-xml"><code><span class="token comment">&lt;!-- path resource/spr.xml --&gt;</span>
<span class="token prolog">&lt;?xml version=&quot;1.0&quot; encoding=&quot;UTF-8&quot;?&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>beans</span> <span class="token attr-name">xmlns</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>http://www.springframework.org/schema/beans<span class="token punctuation">&quot;</span></span>
       <span class="token attr-name"><span class="token namespace">xmlns:</span>xsi</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>http://www.w3.org/2001/XMLSchema-instance<span class="token punctuation">&quot;</span></span>
       <span class="token attr-name"><span class="token namespace">xsi:</span>schemaLocation</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>http://www.springframework.org/schema/beans
    http://www.springframework.org/schema/beans/spring-beans-4.3.xsd<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>

    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>bean</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>car<span class="token punctuation">&quot;</span></span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>com.osvue.env.app.pojo.People<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>property</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>name<span class="token punctuation">&quot;</span></span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>奥迪<span class="token punctuation">&quot;</span></span><span class="token punctuation">/&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>bean</span><span class="token punctuation">&gt;</span></span>

    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>bean</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>car1<span class="token punctuation">&quot;</span></span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>com.osvue.env.app.pojo.People<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>property</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>name<span class="token punctuation">&quot;</span></span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>保时捷<span class="token punctuation">&quot;</span></span><span class="token punctuation">/&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>bean</span><span class="token punctuation">&gt;</span></span>

 
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>bean</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>user<span class="token punctuation">&quot;</span></span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>com.osvue.env.app.pojo.People<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>property</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>name<span class="token punctuation">&quot;</span></span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>abcd_路人甲Java<span class="token punctuation">&quot;</span></span><span class="token punctuation">/&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>property</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>age<span class="token punctuation">&quot;</span></span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>car1<span class="token punctuation">&quot;</span></span><span class="token punctuation">/&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>bean</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>beans</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><div class="language-java" data-ext="java"><pre class="language-java"><code><span class="token annotation punctuation">@Test</span>
	<span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">test1</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	    <span class="token comment">//定义一个spring容器，这个容器默认实现了BeanDefinitionRegistry，所以本身就是一个bean注册器</span>
	    <span class="token class-name">DefaultListableBeanFactory</span> factory <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">DefaultListableBeanFactory</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

	    <span class="token comment">//定义一个xml的BeanDefinition读取器，需要传递一个BeanDefinitionRegistry（bean注册器）对象</span>
	    <span class="token class-name">XmlBeanDefinitionReader</span> xmlBeanDefinitionReader <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">XmlBeanDefinitionReader</span><span class="token punctuation">(</span>factory<span class="token punctuation">)</span><span class="token punctuation">;</span>

	    <span class="token comment">//指定bean xml配置文件的位置</span>
	    <span class="token class-name">String</span> location <span class="token operator">=</span> <span class="token string">&quot;classpath:/spr.xml&quot;</span><span class="token punctuation">;</span>
	    <span class="token comment">//通过XmlBeanDefinitionReader加载bean xml文件，然后将解析产生的BeanDefinition注册到容器容器中</span>
	    <span class="token keyword">int</span> countBean <span class="token operator">=</span> xmlBeanDefinitionReader<span class="token punctuation">.</span><span class="token function">loadBeanDefinitions</span><span class="token punctuation">(</span>location<span class="token punctuation">)</span><span class="token punctuation">;</span>
	    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">.</span><span class="token function">format</span><span class="token punctuation">(</span><span class="token string">&quot;共注册了 %s 个bean&quot;</span><span class="token punctuation">,</span> countBean<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

	    <span class="token comment">//打印出注册的bean的配置信息</span>
	    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token class-name">String</span> beanName <span class="token operator">:</span> factory<span class="token punctuation">.</span><span class="token function">getBeanDefinitionNames</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	        <span class="token comment">//通过名称从容器中获取对应的BeanDefinition信息</span>
	        <span class="token class-name">BeanDefinition</span> beanDefinition <span class="token operator">=</span> factory<span class="token punctuation">.</span><span class="token function">getBeanDefinition</span><span class="token punctuation">(</span>beanName<span class="token punctuation">)</span><span class="token punctuation">;</span>
	        <span class="token comment">//获取BeanDefinition具体使用的是哪个类</span>
	        <span class="token class-name">String</span> beanDefinitionClassName <span class="token operator">=</span> beanDefinition<span class="token punctuation">.</span><span class="token function">getClass</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	        <span class="token comment">//通过名称获取bean对象</span>
	        <span class="token class-name">Object</span> bean <span class="token operator">=</span> factory<span class="token punctuation">.</span><span class="token function">getBean</span><span class="token punctuation">(</span>beanName<span class="token punctuation">)</span><span class="token punctuation">;</span>
	        <span class="token comment">//打印输出</span>
	        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>beanName <span class="token operator">+</span> <span class="token string">&quot;:&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;    beanDefinitionClassName：&quot;</span> <span class="token operator">+</span> beanDefinitionClassName<span class="token punctuation">)</span><span class="token punctuation">;</span>
	        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;    beanDefinition：&quot;</span> <span class="token operator">+</span> beanDefinition<span class="token punctuation">)</span><span class="token punctuation">;</span>
	        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;    bean：&quot;</span> <span class="token operator">+</span> bean<span class="token punctuation">)</span><span class="token punctuation">;</span>
	    <span class="token punctuation">}</span>
	<span class="token punctuation">}</span>
<span class="token comment">/*
共注册了 3 个bean
car:
    beanDefinitionClassName：org.springframework.beans.factory.support.GenericBeanDefinition
    beanDefinition：Generic bean: class [com.osvue.env.app.pojo.People]; scope=; abstract=false; lazyInit=false; autowireMode=0; dependencyCheck=0; autowireCandidate=true; primary=false; factoryBeanName=null; factoryMethodName=null; initMethodName=null; destroyMethodName=null; defined in class path resource [spr.xml]
    bean：People [name=奥迪, age=null]
car1:
    beanDefinitionClassName：org.springframework.beans.factory.support.GenericBeanDefinition
    beanDefinition：Generic bean: class [com.osvue.env.app.pojo.People]; scope=; abstract=false; lazyInit=false; autowireMode=0; dependencyCheck=0; autowireCandidate=true; primary=false; factoryBeanName=null; factoryMethodName=null; initMethodName=null; destroyMethodName=null; defined in class path resource [spr.xml]
    bean：People [name=保时捷, age=null]
user:
    beanDefinitionClassName：org.springframework.beans.factory.support.GenericBeanDefinition
    beanDefinition：Generic bean: class [com.osvue.env.app.pojo.People]; scope=; abstract=false; lazyInit=false; autowireMode=0; dependencyCheck=0; autowireCandidate=true; primary=false; factoryBeanName=null; factoryMethodName=null; initMethodName=null; destroyMethodName=null; defined in class path resource [spr.xml]
    bean：People [name=abcd_路人甲Java, age=car1]
    */</span>
</code></pre></div><ul><li><p>上面的输出认真看一下，这几个<strong>BeanDefinition都是GenericBeanDefinition</strong>这种类型的，也就是说xml中定义的bean被解析之后都是通过<strong>GenericBeanDefinition</strong>这种类型表示的。</p></li><li><p><strong>properties文件定义bean的解析</strong>**：PropertiesBeanDefinitionReader**</p></li><li><p>spring中提供了一个类XmlBeanDefinitionReader，将xml中定义的bean解析为BeanDefinition对象，过程和xml的方式类似。</p></li><li><p><strong>注解方式：PropertiesBeanDefinitionReader</strong></p></li><li><p>注解的方式定义的bean，需要使用<strong>PropertiesBeanDefinitionReader</strong>这个类来进行解析，方式也和上面2种方式类似，直接来看案例。</p></li></ul><div class="language-java" data-ext="java"><pre class="language-java"><code><span class="token annotation punctuation">@Test</span>
	<span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">test3</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	    <span class="token comment">//定义一个spring容器，这个容器默认实现了BeanDefinitionRegistry，所以本身就是一个bean注册器</span>
	    <span class="token class-name">DefaultListableBeanFactory</span> factory <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">DefaultListableBeanFactory</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

	    <span class="token comment">//定义一个注解方式的BeanDefinition读取器，需要传递一个BeanDefinitionRegistry（bean注册器）对象</span>
	    <span class="token class-name">AnnotatedBeanDefinitionReader</span> annotatedBeanDefinitionReader <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">AnnotatedBeanDefinitionReader</span><span class="token punctuation">(</span>factory<span class="token punctuation">)</span><span class="token punctuation">;</span>

	    <span class="token comment">//通过PropertiesBeanDefinitionReader加载bean properties文件，然后将解析产生的BeanDefinition注册到容器容器中</span>
	    annotatedBeanDefinitionReader<span class="token punctuation">.</span><span class="token function">register</span><span class="token punctuation">(</span><span class="token class-name">PhoneApplicationListener</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

	    <span class="token comment">//打印出注册的bean的配置信息</span>
	    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token class-name">String</span> beanName <span class="token operator">:</span> <span class="token keyword">new</span> <span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">{</span><span class="token string">&quot;phoneApplicationListener&quot;</span><span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	        <span class="token comment">//通过名称从容器中获取对应的BeanDefinition信息</span>
	        <span class="token class-name">BeanDefinition</span> beanDefinition <span class="token operator">=</span> factory<span class="token punctuation">.</span><span class="token function">getBeanDefinition</span><span class="token punctuation">(</span>beanName<span class="token punctuation">)</span><span class="token punctuation">;</span>
	        <span class="token comment">//获取BeanDefinition具体使用的是哪个类</span>
	        <span class="token class-name">String</span> beanDefinitionClassName <span class="token operator">=</span> beanDefinition<span class="token punctuation">.</span><span class="token function">getClass</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	        <span class="token comment">//通过名称获取bean对象</span>
	        <span class="token class-name">Object</span> bean <span class="token operator">=</span> factory<span class="token punctuation">.</span><span class="token function">getBean</span><span class="token punctuation">(</span>beanName<span class="token punctuation">)</span><span class="token punctuation">;</span>
	        <span class="token comment">//打印输出</span>
	        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>beanName <span class="token operator">+</span> <span class="token string">&quot;:&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;    beanDefinitionClassName：&quot;</span> <span class="token operator">+</span> beanDefinitionClassName<span class="token punctuation">)</span><span class="token punctuation">;</span>
	        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;    beanDefinition：&quot;</span> <span class="token operator">+</span> beanDefinition<span class="token punctuation">)</span><span class="token punctuation">;</span>
	        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;    bean：&quot;</span> <span class="token operator">+</span> bean<span class="token punctuation">)</span><span class="token punctuation">;</span>
	    <span class="token punctuation">}</span>
	<span class="token punctuation">}</span>
</code></pre></div><h3 id="阶段3-spring-bean注册阶段" tabindex="-1"><a class="header-anchor" href="#阶段3-spring-bean注册阶段" aria-hidden="true">#</a> 阶段3：Spring Bean注册阶段</h3><p>bean注册阶段需要用到一个非常重要的接口：<strong>BeanDefinitionRegistry</strong></p><p><strong>Bean注册接口：BeanDefinitionRegistry</strong> 这个接口中定义了注册bean常用到的一些方法，源码如下：</p><div class="language-java" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">interface</span> <span class="token class-name">BeanDefinitionRegistry</span> <span class="token keyword">extends</span> <span class="token class-name">AliasRegistry</span> <span class="token punctuation">{</span>

    <span class="token doc-comment comment">/**
     * 注册一个新的bean定义
     * beanName：bean的名称
     * beanDefinition：bean定义信息
     */</span>
    <span class="token keyword">void</span> <span class="token function">registerBeanDefinition</span><span class="token punctuation">(</span><span class="token class-name">String</span> beanName<span class="token punctuation">,</span> <span class="token class-name">BeanDefinition</span> beanDefinition<span class="token punctuation">)</span>
            <span class="token keyword">throws</span> <span class="token class-name">BeanDefinitionStoreException</span><span class="token punctuation">;</span>

    <span class="token doc-comment comment">/**
     * 通过bean名称移除已注册的bean
     * beanName：bean名称
     */</span>
    <span class="token keyword">void</span> <span class="token function">removeBeanDefinition</span><span class="token punctuation">(</span><span class="token class-name">String</span> beanName<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">NoSuchBeanDefinitionException</span><span class="token punctuation">;</span>

    <span class="token doc-comment comment">/**
     * 通过名称获取bean的定义信息
     * beanName：bean名称
     */</span>
    <span class="token class-name">BeanDefinition</span> <span class="token function">getBeanDefinition</span><span class="token punctuation">(</span><span class="token class-name">String</span> beanName<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">NoSuchBeanDefinitionException</span><span class="token punctuation">;</span>

    <span class="token doc-comment comment">/**
     * 查看beanName是否注册过
     */</span>
    <span class="token keyword">boolean</span> <span class="token function">containsBeanDefinition</span><span class="token punctuation">(</span><span class="token class-name">String</span> beanName<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token doc-comment comment">/**
     * 获取已经定义（注册）的bean名称列表
     */</span>
    <span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token function">getBeanDefinitionNames</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token doc-comment comment">/**
     * 返回注册器中已注册的bean数量
     */</span>
    <span class="token keyword">int</span> <span class="token function">getBeanDefinitionCount</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token doc-comment comment">/**
     * 确定给定的bean名称或者别名是否已在此注册表中使用
     * beanName：可以是bean名称或者bean的别名
     */</span>
    <span class="token keyword">boolean</span> <span class="token function">isBeanNameInUse</span><span class="token punctuation">(</span><span class="token class-name">String</span> beanName<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token punctuation">}</span>
</code></pre></div><blockquote><p>BeanDefinitionRegistry唯一实现：<strong>DefaultListableBeanFactory</strong> spring中BeanDefinitionRegistry接口有一个唯一的实现类 <code>org.springframework.beans.factory.support.DefaultListableBeanFactory</code></p></blockquote><ul><li><p>有很多类也实现了<strong>BeanDefinitionRegistry</strong>接口，比如我们经常用到的<strong>AnnotationConfigApplicationContext</strong>，但实际上其内部是转发给了<strong>DefaultListableBeanFactory</strong>进行处理的，所以真正实现这个接口的类是<strong>DefaultListableBeanFactory</strong>。</p></li><li><p>头几个案例，都使用的是<strong>DefaultListableBeanFactory</strong>作为bean注册器，此时你们应该可以理解为什么了。</p></li></ul><div class="language-java" data-ext="java"><pre class="language-java"><code>
	<span class="token annotation punctuation">@Autowired</span>
	<span class="token class-name">ApplicationContext</span> ac<span class="token punctuation">;</span>
	
    <span class="token annotation punctuation">@Test</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">test11</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
       <span class="token keyword">int</span> conte <span class="token operator">=</span> ac<span class="token punctuation">.</span><span class="token function">getBeanDefinitionCount</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
       <span class="token class-name">System</span><span class="token punctuation">.</span>err<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>conte<span class="token punctuation">)</span><span class="token punctuation">;</span>
    	<span class="token comment">//创建一个bean工厂，这个默认实现了BeanDefinitionRegistry接口，所以也是一个bean注册器</span>
        <span class="token class-name">DefaultListableBeanFactory</span> factory <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">DefaultListableBeanFactory</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">//定义一个bean</span>
        <span class="token class-name">GenericBeanDefinition</span> nameBdf <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">GenericBeanDefinition</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        nameBdf<span class="token punctuation">.</span><span class="token function">setBeanClass</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        nameBdf<span class="token punctuation">.</span><span class="token function">getConstructorArgumentValues</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">addIndexedArgumentValue</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token string">&quot;sgrdba&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">//将bean注册到容器中</span>
        factory<span class="token punctuation">.</span><span class="token function">registerBeanDefinition</span><span class="token punctuation">(</span><span class="token string">&quot;name&quot;</span><span class="token punctuation">,</span> nameBdf<span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">//通过名称获取BeanDefinition</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>factory<span class="token punctuation">.</span><span class="token function">getBeanDefinition</span><span class="token punctuation">(</span><span class="token string">&quot;name&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">//通过名称判断是否注册过BeanDefinition</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>factory<span class="token punctuation">.</span><span class="token function">containsBeanDefinition</span><span class="token punctuation">(</span><span class="token string">&quot;name&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">//获取所有注册的名称</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token class-name">Arrays</span><span class="token punctuation">.</span><span class="token function">asList</span><span class="token punctuation">(</span>factory<span class="token punctuation">.</span><span class="token function">getBeanDefinitionNames</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">//获取已注册的BeanDefinition的数量</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>factory<span class="token punctuation">.</span><span class="token function">getBeanDefinitionCount</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">//判断指定的name是否使用过</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>factory<span class="token punctuation">.</span><span class="token function">isBeanNameInUse</span><span class="token punctuation">(</span><span class="token string">&quot;name&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">//别名相关方法</span>
        <span class="token comment">//为name注册2个别名</span>
        factory<span class="token punctuation">.</span><span class="token function">registerAlias</span><span class="token punctuation">(</span><span class="token string">&quot;name&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;alias-name-1&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        factory<span class="token punctuation">.</span><span class="token function">registerAlias</span><span class="token punctuation">(</span><span class="token string">&quot;name&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;alias-name-2&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">//判断alias-name-1是否已被作为别名使用</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>factory<span class="token punctuation">.</span><span class="token function">isAlias</span><span class="token punctuation">(</span><span class="token string">&quot;alias-name-1&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">//通过名称获取对应的所有别名</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token class-name">Arrays</span><span class="token punctuation">.</span><span class="token function">asList</span><span class="token punctuation">(</span>factory<span class="token punctuation">.</span><span class="token function">getAliases</span><span class="token punctuation">(</span><span class="token string">&quot;name&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">//最后我们再来获取一下这个bean</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>factory<span class="token punctuation">.</span><span class="token function">getBean</span><span class="token punctuation">(</span><span class="token string">&quot;name&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>


    <span class="token punctuation">}</span>
</code></pre></div><h3 id="_4-14" tabindex="-1"><a class="header-anchor" href="#_4-14" aria-hidden="true">#</a> 4-14</h3><ul><li>从：BeanDefinition合并阶段到Bean初始化完成阶段，都是在调用getBean从容器中获取bean对象的过程中发送的操作，要注意细看了，大家下去了建议去看getBean这个方法的源码，以下过程均来自于这个方法：</li></ul><ul><li><strong><code>org.springframework.beans.factory.support.AbstractBeanFactory#doGetBean</code></strong></li></ul><h3 id="阶段4-beandefinition合并阶段" tabindex="-1"><a class="header-anchor" href="#阶段4-beandefinition合并阶段" aria-hidden="true">#</a> 阶段4：BeanDefinition合并阶段</h3><p>合并阶段是做什么的？</p><ul><li>可能我们定义bean的时候有父子bean关系，此时子BeanDefinition中的信息是不完整的，</li><li>比如设置属性的时候配置在父BeanDefinition中，此时子BeanDefinition中是没有这些信息的，</li><li>需要将子bean的BeanDefinition和父bean的BeanDefinition进行合并，得到最终的一个RootBeanDefinition，</li><li>合并之后得到的RootBeanDefinition包含bean定义的所有信息，</li><li>包含了从父bean中继继承过来的所有信息，后续bean的所有创建工作就是依靠合并之后BeanDefinition来进行的。</li></ul><p>合并BeanDefinition会使用下面这个方法：</p><p><code>org.springframework.beans.factory.support.AbstractBeanFactory#getMergedBeanDefinition</code> bean定义可能存在多级父子关系，合并的时候进进行递归合并，最终得到一个包含完整信息的RootBeanDefinition</p><div class="language-java" data-ext="java"><pre class="language-java"><code>
<span class="token doc-comment comment">/**
 * BeanDefinition 合并
 */</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">MergedBeanDefinitionTest</span> <span class="token punctuation">{</span>
    <span class="token annotation punctuation">@Test</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">test1</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">//创建bean容器</span>
        <span class="token class-name">DefaultListableBeanFactory</span> factory <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">DefaultListableBeanFactory</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">//创建一个bean xml解析器</span>
        <span class="token class-name">XmlBeanDefinitionReader</span> beanDefinitionReader <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">XmlBeanDefinitionReader</span><span class="token punctuation">(</span>factory<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">//解析bean xml，将解析过程中产生的BeanDefinition注册到DefaultListableBeanFactory中</span>
        beanDefinitionReader<span class="token punctuation">.</span><span class="token function">loadBeanDefinitions</span><span class="token punctuation">(</span><span class="token string">&quot;beans.xml&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">//遍历容器中注册的所有bean信息</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token class-name">String</span> beanName <span class="token operator">:</span> factory<span class="token punctuation">.</span><span class="token function">getBeanDefinitionNames</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token comment">//通过bean名称获取原始的注册的BeanDefinition信息</span>
            <span class="token class-name">BeanDefinition</span> beanDefinition <span class="token operator">=</span> factory<span class="token punctuation">.</span><span class="token function">getBeanDefinition</span><span class="token punctuation">(</span>beanName<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token comment">//获取合并之后的BeanDefinition信息</span>
            <span class="token class-name">BeanDefinition</span> mergedBeanDefinition <span class="token operator">=</span> factory<span class="token punctuation">.</span><span class="token function">getMergedBeanDefinition</span><span class="token punctuation">(</span>beanName<span class="token punctuation">)</span><span class="token punctuation">;</span>

            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>beanName<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;解析xml过程中注册的beanDefinition：&quot;</span> <span class="token operator">+</span> beanDefinition<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;beanDefinition中的属性信息&quot;</span> <span class="token operator">+</span> beanDefinition<span class="token punctuation">.</span><span class="token function">getPropertyValues</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;合并之后得到的mergedBeanDefinition：&quot;</span> <span class="token operator">+</span> mergedBeanDefinition<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;mergedBeanDefinition中的属性信息&quot;</span> <span class="token operator">+</span> mergedBeanDefinition<span class="token punctuation">.</span><span class="token function">getPropertyValues</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;---------------------------&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token comment">/*
	合并之前是GenericBeanDefinition类型的，合并之后得到的是RootBeanDefinition类型的。

获取lesson3合并的BeanDefinition时，内部会递归进行合并，先将lesson1和lesson2合并，然后将lesson2再和lesson3合并，最后得到合并之后的BeanDefinition。

后面的阶段将使用合并产生的RootBeanDefinition
*/</span>
</code></pre></div><h3 id="阶段5-bean-class加载阶段" tabindex="-1"><a class="header-anchor" href="#阶段5-bean-class加载阶段" aria-hidden="true">#</a> 阶段5：Bean Class加载阶段</h3><p>这个阶段就是将bean的class名称转换为Class类型的对象。</p><ul><li>BeanDefinition中有个Object类型的字段：beanClass</li></ul><p><code>private volatile Object beanClass;</code></p><ul><li>用来表示bean的class对象，通常这个字段的值有2种类型，一种是bean对应的Class类型的对象，另一种是bean对应的Class的完整类名</li><li>第一种情况不需要解析，第二种情况：即这个字段是bean的类名的时候，就需要通过类加载器将其转换为一个Class对象。</li></ul><ul><li>此时会对阶段4中合并产生的<code>RootBeanDefinition</code>中的beanClass进行解析，将bean的类名转换为Class对象，然后赋值给beanClass字段。</li></ul><p>源码位置：</p><p><code>org.springframework.beans.factory.support.AbstractBeanFactory#resolveBeanClass</code> 上面得到了Bean Class对象以及合并之后的BeanDefinition，下面就开始进入实例化这个对象的阶段了。</p><h4 id="bean实例化分为3个阶段-前阶段、实例化阶段、后阶段。" tabindex="-1"><a class="header-anchor" href="#bean实例化分为3个阶段-前阶段、实例化阶段、后阶段。" aria-hidden="true">#</a> Bean实例化分为3个阶段：前阶段、实例化阶段、后阶段。</h4><h3 id="阶段6-bean实例化阶段" tabindex="-1"><a class="header-anchor" href="#阶段6-bean实例化阶段" aria-hidden="true">#</a> 阶段6：Bean实例化阶段</h3><p>分2个小的阶段</p><ol><li>Bean实例化前操作</li><li>Bean实例化操作</li></ol><ul><li><strong>Bean实例化前操作</strong> 看一下DefaultListableBeanFactory，这个类中有个非常非常重要的字段：</li></ul><p><code>private final List&lt;BeanPostProcessor&gt; beanPostProcessors = new CopyOnWriteArrayList&lt;&gt;();</code> 是一个BeanPostProcessor类型的集合</p><div class="custom-container tip"><p class="custom-container-title">TIP</p><p><strong>BeanPostProcessor</strong>是一个接口，还有很多子接口，这些接口中提供了很多方法，spring在bean生命周期的不同阶段，会调用上面这个列表中的<strong>BeanPostProcessor</strong>中的一些方法，来对生命周期进行扩展，bean生命周期中的所有扩展点都是依靠这个集合中的<strong>BeanPostProcessor</strong>来实现的，所以如果大家想对bean的生命周期进行干预，这块一定要掌握好。</p><blockquote><p>注意：本文中很多以<strong>BeanPostProcessor</strong>结尾的，都实现了<strong>BeanPostProcessor</strong>接口，有些是直接实现的，有些是实现了它的子接口。</p></blockquote></div><ul><li>Bean实例化之前会调用一段代码：</li></ul><div class="language-java" data-ext="java"><pre class="language-java"><code><span class="token annotation punctuation">@Nullable</span>
    <span class="token keyword">protected</span> <span class="token class-name">Object</span> <span class="token function">applyBeanPostProcessorsBeforeInstantiation</span><span class="token punctuation">(</span><span class="token class-name">Class</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token operator">?</span><span class="token punctuation">&gt;</span></span> beanClass<span class="token punctuation">,</span> <span class="token class-name">String</span> beanName<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token class-name">BeanPostProcessor</span> bp <span class="token operator">:</span> <span class="token function">getBeanPostProcessors</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>bp <span class="token keyword">instanceof</span> <span class="token class-name">InstantiationAwareBeanPostProcessor</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token class-name">InstantiationAwareBeanPostProcessor</span> ibp <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token class-name">InstantiationAwareBeanPostProcessor</span><span class="token punctuation">)</span> bp<span class="token punctuation">;</span>
                <span class="token class-name">Object</span> result <span class="token operator">=</span> ibp<span class="token punctuation">.</span><span class="token function">postProcessBeforeInstantiation</span><span class="token punctuation">(</span>beanClass<span class="token punctuation">,</span> beanName<span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token keyword">if</span> <span class="token punctuation">(</span>result <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                    <span class="token keyword">return</span> result<span class="token punctuation">;</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">return</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
</code></pre></div><ul><li>这段代码在bean实例化之前给开发者留了个口子，开发者自己可以在这个地方直接去创建一个对象作为bean实例，而跳过spring内部实例化bean的过程。 上面代码中轮询<code>beanPostProcessors</code>列表，如果类型是<strong>InstantiationAwareBeanPostProcessor</strong>， 尝试调用<code>InstantiationAwareBeanPostProcessor#postProcessBeforeInstantiation</code>获取bean的实例对象，如果能够获取到，那么将返回值作为当前bean的实例，那么spring自带的实例化bean的过程就被跳过了。</li></ul><p>postProcessBeforeInstantiation方法如下：</p><div class="language-java" data-ext="java"><pre class="language-java"><code><span class="token keyword">default</span> <span class="token class-name">Object</span> <span class="token function">postProcessBeforeInstantiation</span><span class="token punctuation">(</span><span class="token class-name">Class</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token operator">?</span><span class="token punctuation">&gt;</span></span> beanClass<span class="token punctuation">,</span> <span class="token class-name">String</span> beanName<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">BeansException</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><ul><li>这个地方给开发者提供了一个扩展点，允许开发者在这个方法中直接返回bean的一个实例。</li></ul><div class="language-java" data-ext="java"><pre class="language-java"><code><span class="token doc-comment comment">/**
 * bean初始化前阶段，会调用：<span class="token punctuation">{</span><span class="token keyword">@link</span> <span class="token reference"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>beans<span class="token punctuation">.</span>factory<span class="token punctuation">.</span>config<span class="token punctuation">.</span></span><span class="token class-name">InstantiationAwareBeanPostProcessor</span><span class="token punctuation">#</span><span class="token function">postProcessBeforeInitialization</span><span class="token punctuation">(</span><span class="token class-name">Object</span><span class="token punctuation">,</span> <span class="token class-name">String</span><span class="token punctuation">)</span></span><span class="token punctuation">}</span>
 */</span>
</code></pre></div><ul><li><strong>Bean实例化操作</strong> 这个过程会通过反射来调用bean的构造器来创建bean的实例。</li></ul><p>具体需要使用哪个构造器，spring为开发者提供了一个接口，允许开发者自己来判断用哪个构造器。</p><p>看一下这块的代码逻辑：</p><div class="language-java" data-ext="java"><pre class="language-java"><code><span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token class-name">BeanPostProcessor</span> bp <span class="token operator">:</span> <span class="token function">getBeanPostProcessors</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>bp <span class="token keyword">instanceof</span> <span class="token class-name">SmartInstantiationAwareBeanPostProcessor</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">SmartInstantiationAwareBeanPostProcessor</span> ibp <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token class-name">SmartInstantiationAwareBeanPostProcessor</span><span class="token punctuation">)</span> bp<span class="token punctuation">;</span>
        <span class="token class-name">Constructor</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token operator">?</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">[</span><span class="token punctuation">]</span> ctors <span class="token operator">=</span> ibp<span class="token punctuation">.</span><span class="token function">determineCandidateConstructors</span><span class="token punctuation">(</span>beanClass<span class="token punctuation">,</span> beanName<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>ctors <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span> ctors<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><p>会调用<code>SmartInstantiationAwareBeanPostProcessor</code>接口的<code>determineCandidateConstructors</code>方法，这个方法会返回候选的构造器列表，也可以返回空，看一下这个方法的源码：</p><div class="language-java" data-ext="java"><pre class="language-java"><code><span class="token annotation punctuation">@Nullable</span>
<span class="token keyword">default</span> <span class="token class-name">Constructor</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token operator">?</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token function">determineCandidateConstructors</span><span class="token punctuation">(</span><span class="token class-name">Class</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token operator">?</span><span class="token punctuation">&gt;</span></span> beanClass<span class="token punctuation">,</span> <span class="token class-name">String</span> beanName<span class="token punctuation">)</span>
<span class="token keyword">throws</span> <span class="token class-name">BeansException</span> <span class="token punctuation">{</span>

    <span class="token keyword">return</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><p>这个方法有个比较重要的实现类</p><p><code>org.springframework.beans.factory.annotation.AutowiredAnnotationBeanPostProcessor</code> 可以将 <strong>@Autowired</strong>标注的方法作为候选构造器返回，有兴趣的可以去看一下代码。 下面我们来个案例，自定义一个注解，当构造器被这个注解标注的时候，让spring自动选择使用这个构造器创建对象。</p><div class="language-java" data-ext="java"><pre class="language-java"><code><span class="token comment">// 自定义一个注解</span>
<span class="token comment">// 下面这个注解可以标注在构造器上面，使用这个标注之后，创建bean的时候将使用这个构造器。</span>

<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>lang<span class="token punctuation">.</span>annotation<span class="token punctuation">.</span></span><span class="token operator">*</span></span><span class="token punctuation">;</span>

<span class="token annotation punctuation">@Target</span><span class="token punctuation">(</span><span class="token class-name">ElementType</span><span class="token punctuation">.</span><span class="token constant">CONSTRUCTOR</span><span class="token punctuation">)</span>
<span class="token annotation punctuation">@Retention</span><span class="token punctuation">(</span><span class="token class-name">RetentionPolicy</span><span class="token punctuation">.</span><span class="token constant">RUNTIME</span><span class="token punctuation">)</span>
<span class="token annotation punctuation">@Documented</span>
<span class="token keyword">public</span> <span class="token annotation punctuation">@interface</span> <span class="token class-name">MyAutowried</span> <span class="token punctuation">{</span>
<span class="token punctuation">}</span>
<span class="token comment">// 下面这个类3个构造器，其中一个使用@MyAutowried，让其作为bean实例化的方法。</span>

<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Person</span> <span class="token punctuation">{</span>
    <span class="token keyword">private</span> <span class="token class-name">String</span> name<span class="token punctuation">;</span>
    <span class="token keyword">private</span> <span class="token class-name">Integer</span> age<span class="token punctuation">;</span>

    <span class="token keyword">public</span> <span class="token class-name">Person</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;调用 Person()&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token annotation punctuation">@MyAutowried</span>
    <span class="token keyword">public</span> <span class="token class-name">Person</span><span class="token punctuation">(</span><span class="token class-name">String</span> name<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;调用 Person(String name)&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> name<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token class-name">Person</span><span class="token punctuation">(</span><span class="token class-name">String</span> name<span class="token punctuation">,</span> <span class="token class-name">Integer</span> age<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;调用 Person(String name, int age)&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> name<span class="token punctuation">;</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>age <span class="token operator">=</span> age<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token comment">// 自定义一个SmartInstantiationAwareBeanPostProcessor</span>
<span class="token comment">// 代码的逻辑：将@MyAutowried标注的构造器列表返回</span>

<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>beans<span class="token punctuation">.</span></span><span class="token class-name">BeansException</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>beans<span class="token punctuation">.</span>factory<span class="token punctuation">.</span>config<span class="token punctuation">.</span></span><span class="token class-name">SmartInstantiationAwareBeanPostProcessor</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>lang<span class="token punctuation">.</span></span><span class="token class-name">Nullable</span></span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>lang<span class="token punctuation">.</span>reflect<span class="token punctuation">.</span></span><span class="token class-name">Constructor</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>util<span class="token punctuation">.</span></span><span class="token class-name">Arrays</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>util<span class="token punctuation">.</span></span><span class="token class-name">List</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>util<span class="token punctuation">.</span>stream<span class="token punctuation">.</span></span><span class="token class-name">Collectors</span></span><span class="token punctuation">;</span>

<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">MySmartInstantiationAwareBeanPostProcessor</span> <span class="token keyword">implements</span> <span class="token class-name">SmartInstantiationAwareBeanPostProcessor</span> <span class="token punctuation">{</span>
    <span class="token annotation punctuation">@Nullable</span>
    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token class-name">Constructor</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token operator">?</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token function">determineCandidateConstructors</span><span class="token punctuation">(</span><span class="token class-name">Class</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token operator">?</span><span class="token punctuation">&gt;</span></span> beanClass<span class="token punctuation">,</span> <span class="token class-name">String</span> beanName<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">BeansException</span> <span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>beanClass<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;调用 MySmartInstantiationAwareBeanPostProcessor.determineCandidateConstructors 方法&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">Constructor</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token operator">?</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">[</span><span class="token punctuation">]</span> declaredConstructors <span class="token operator">=</span> beanClass<span class="token punctuation">.</span><span class="token function">getDeclaredConstructors</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>declaredConstructors <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token comment">//获取有@MyAutowried注解的构造器列表</span>
            <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Constructor</span><span class="token punctuation">&lt;</span><span class="token operator">?</span><span class="token punctuation">&gt;</span><span class="token punctuation">&gt;</span></span> collect <span class="token operator">=</span> <span class="token class-name">Arrays</span><span class="token punctuation">.</span><span class="token function">stream</span><span class="token punctuation">(</span>declaredConstructors<span class="token punctuation">)</span><span class="token punctuation">.</span>
                    <span class="token function">filter</span><span class="token punctuation">(</span>constructor <span class="token operator">-&gt;</span> constructor<span class="token punctuation">.</span><span class="token function">isAnnotationPresent</span><span class="token punctuation">(</span><span class="token class-name">MyAutowried</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">.</span>
                    <span class="token function">collect</span><span class="token punctuation">(</span><span class="token class-name">Collectors</span><span class="token punctuation">.</span><span class="token function">toList</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token class-name">Constructor</span><span class="token punctuation">[</span><span class="token punctuation">]</span> constructors <span class="token operator">=</span> collect<span class="token punctuation">.</span><span class="token function">toArray</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Constructor</span><span class="token punctuation">[</span>collect<span class="token punctuation">.</span><span class="token function">size</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">return</span> constructors<span class="token punctuation">.</span>length <span class="token operator">!=</span> <span class="token number">0</span> <span class="token operator">?</span> constructors <span class="token operator">:</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
 
 
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>junit<span class="token punctuation">.</span></span><span class="token class-name">Test</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>beans<span class="token punctuation">.</span>factory<span class="token punctuation">.</span>support<span class="token punctuation">.</span></span><span class="token class-name">BeanDefinitionBuilder</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>beans<span class="token punctuation">.</span>factory<span class="token punctuation">.</span>support<span class="token punctuation">.</span></span><span class="token class-name">DefaultListableBeanFactory</span></span><span class="token punctuation">;</span>

<span class="token doc-comment comment">/**
 * 通过<span class="token punctuation">{</span><span class="token keyword">@link</span> <span class="token reference"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>beans<span class="token punctuation">.</span>factory<span class="token punctuation">.</span>config<span class="token punctuation">.</span></span><span class="token class-name">SmartInstantiationAwareBeanPostProcessor</span><span class="token punctuation">#</span><span class="token function">determineCandidateConstructors</span><span class="token punctuation">(</span><span class="token class-name">Class</span><span class="token punctuation">,</span> <span class="token class-name">String</span><span class="token punctuation">)</span></span><span class="token punctuation">}</span>来确定使用哪个构造器来创建bean实例
 */</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">SmartInstantiationAwareBeanPostProcessorTest</span> <span class="token punctuation">{</span>
    <span class="token annotation punctuation">@Test</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">test1</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">DefaultListableBeanFactory</span> factory <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">DefaultListableBeanFactory</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">//创建一个SmartInstantiationAwareBeanPostProcessor,将其添加到容器中</span>
        factory<span class="token punctuation">.</span><span class="token function">addBeanPostProcessor</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">MySmartInstantiationAwareBeanPostProcessor</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        factory<span class="token punctuation">.</span><span class="token function">registerBeanDefinition</span><span class="token punctuation">(</span><span class="token string">&quot;name&quot;</span><span class="token punctuation">,</span>
                <span class="token class-name">BeanDefinitionBuilder</span><span class="token punctuation">.</span>
                        <span class="token function">genericBeanDefinition</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">)</span><span class="token punctuation">.</span>
                        <span class="token function">addConstructorArgValue</span><span class="token punctuation">(</span><span class="token string">&quot;test_java_the_java&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span>
                        <span class="token function">getBeanDefinition</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        factory<span class="token punctuation">.</span><span class="token function">registerBeanDefinition</span><span class="token punctuation">(</span><span class="token string">&quot;age&quot;</span><span class="token punctuation">,</span>
                <span class="token class-name">BeanDefinitionBuilder</span><span class="token punctuation">.</span>
                        <span class="token function">genericBeanDefinition</span><span class="token punctuation">(</span><span class="token class-name">Integer</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">)</span><span class="token punctuation">.</span>
                        <span class="token function">addConstructorArgValue</span><span class="token punctuation">(</span><span class="token number">30</span><span class="token punctuation">)</span><span class="token punctuation">.</span>
                        <span class="token function">getBeanDefinition</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        factory<span class="token punctuation">.</span><span class="token function">registerBeanDefinition</span><span class="token punctuation">(</span><span class="token string">&quot;person&quot;</span><span class="token punctuation">,</span>
                <span class="token class-name">BeanDefinitionBuilder</span><span class="token punctuation">.</span>
                        <span class="token function">genericBeanDefinition</span><span class="token punctuation">(</span><span class="token class-name">Person</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">)</span><span class="token punctuation">.</span>
                        <span class="token function">getBeanDefinition</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token class-name">Person</span> person <span class="token operator">=</span> factory<span class="token punctuation">.</span><span class="token function">getBean</span><span class="token punctuation">(</span><span class="token string">&quot;person&quot;</span><span class="token punctuation">,</span> <span class="token class-name">Person</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>person<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token comment">/*
运行输出
class com.javacode2018.lesson002.demo6.Person
调用 MySmartInstantiationAwareBeanPostProcessor.determineCandidateConstructors 方法
class java.lang.String
调用 MySmartInstantiationAwareBeanPostProcessor.determineCandidateConstructors 方法
调用 Person(String name)
Person{name=&#39;test_java_the_java&#39;, age=null}
从输出中可以看出调用了Person中标注@MyAutowired标注的构造器。
*/</span>
</code></pre></div><p>到目前为止bean实例化阶段结束了，继续进入后面的阶段。</p><h3 id="阶段7-合并后的beandefinition处理" tabindex="-1"><a class="header-anchor" href="#阶段7-合并后的beandefinition处理" aria-hidden="true">#</a> 阶段7：合并后的BeanDefinition处理</h3><div class="language-java" data-ext="java"><pre class="language-java"><code><span class="token keyword">protected</span> <span class="token keyword">void</span> <span class="token function">applyMergedBeanDefinitionPostProcessors</span><span class="token punctuation">(</span><span class="token class-name">RootBeanDefinition</span> mbd<span class="token punctuation">,</span> <span class="token class-name">Class</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token operator">?</span><span class="token punctuation">&gt;</span></span> beanType<span class="token punctuation">,</span> <span class="token class-name">String</span> beanName<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token class-name">BeanPostProcessor</span> bp <span class="token operator">:</span> <span class="token function">getBeanPostProcessors</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>bp <span class="token keyword">instanceof</span> <span class="token class-name">MergedBeanDefinitionPostProcessor</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token class-name">MergedBeanDefinitionPostProcessor</span> bdp <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token class-name">MergedBeanDefinitionPostProcessor</span><span class="token punctuation">)</span> bp<span class="token punctuation">;</span>
                bdp<span class="token punctuation">.</span><span class="token function">postProcessMergedBeanDefinition</span><span class="token punctuation">(</span>mbd<span class="token punctuation">,</span> beanType<span class="token punctuation">,</span> beanName<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
</code></pre></div><p>会调用MergedBeanDefinitionPostProcessor接口的postProcessMergedBeanDefinition方法，看一下这个方法的源码：</p><div class="language-java" data-ext="java"><pre class="language-java"><code><span class="token keyword">void</span> <span class="token function">postProcessMergedBeanDefinition</span><span class="token punctuation">(</span><span class="token class-name">RootBeanDefinition</span> beanDefinition<span class="token punctuation">,</span> <span class="token class-name">Class</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token operator">?</span><span class="token punctuation">&gt;</span></span> beanType<span class="token punctuation">,</span> <span class="token class-name">String</span> beanName<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><ul><li>spring会轮询BeanPostProcessor，依次调用<strong>MergedBeanDefinitionPostProcessor#postProcessMergedBeanDefinition</strong></li></ul><ul><li>第一个参数为beanDefinition，表示合并之后的RootBeanDefinition，我们可以在这个方法内部对合并之后的BeanDefinition进行再次处理</li></ul><p>postProcessMergedBeanDefinition有2个实现类，前面我们介绍过，用的也比较多，面试的时候也会经常问的：</p><div class="language-java" data-ext="java"><pre class="language-java"><code><span class="token class-name"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>beans<span class="token punctuation">.</span>factory<span class="token punctuation">.</span>annotation<span class="token punctuation">.</span></span>AutowiredAnnotationBeanPostProcessor</span>
<span class="token comment">// 在 postProcessMergedBeanDefinition 方法中对 @Autowired、@Value 标注的方法、字段进行缓存</span>

<span class="token class-name"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>context<span class="token punctuation">.</span>annotation<span class="token punctuation">.</span></span>CommonAnnotationBeanPostProcessor</span>
<span class="token comment">// 在 postProcessMergedBeanDefinition 方法中对 @Resource 标注的字段、@Resource 标注的方法、 @PostConstruct 标注的字段、 @PreDestroy标注的方法进行缓存</span>
</code></pre></div><h3 id="阶段8-bean属性设置阶段" tabindex="-1"><a class="header-anchor" href="#阶段8-bean属性设置阶段" aria-hidden="true">#</a> 阶段8：Bean属性设置阶段</h3><p>属性设置阶段分为3个小的阶段</p><ol><li>实例化后阶段</li><li>Bean属性赋值前处理</li><li>Bean属性赋值</li></ol><ul><li><strong>实例化后阶段</strong> 会调用InstantiationAwareBeanPostProcessor接口的postProcessAfterInstantiation这个方法，调用逻辑如下：</li></ul><div class="language-java" data-ext="java"><pre class="language-java"><code><span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token class-name">BeanPostProcessor</span> bp <span class="token operator">:</span> <span class="token function">getBeanPostProcessors</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>bp <span class="token keyword">instanceof</span> <span class="token class-name">InstantiationAwareBeanPostProcessor</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">InstantiationAwareBeanPostProcessor</span> ibp <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token class-name">InstantiationAwareBeanPostProcessor</span><span class="token punctuation">)</span> bp<span class="token punctuation">;</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>ibp<span class="token punctuation">.</span><span class="token function">postProcessAfterInstantiation</span><span class="token punctuation">(</span>bw<span class="token punctuation">.</span><span class="token function">getWrappedInstance</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> beanName<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><blockquote><p><code>postProcessAfterInstantiation</code>方法返回false的时候，后续的Bean属性赋值前处理、Bean属性赋值都会被跳过了。</p></blockquote><div class="language-java" data-ext="java"><pre class="language-java"><code><span class="token keyword">default</span> <span class="token keyword">boolean</span> <span class="token function">postProcessAfterInstantiation</span><span class="token punctuation">(</span><span class="token class-name">Object</span> bean<span class="token punctuation">,</span> <span class="token class-name">String</span> beanName<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">BeansException</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><ul><li>demo</li></ul><div class="language-java" data-ext="java"><pre class="language-java"><code><span class="token annotation punctuation">@Test</span>
	<span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">testa</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token class-name">DefaultListableBeanFactory</span> factory <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">DefaultListableBeanFactory</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// 阻止user1的赋值</span>
		factory<span class="token punctuation">.</span><span class="token function">addBeanPostProcessor</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">InstantiationAwareBeanPostProcessor</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			<span class="token annotation punctuation">@Override</span>
			<span class="token keyword">public</span> <span class="token keyword">boolean</span> <span class="token function">postProcessAfterInstantiation</span><span class="token punctuation">(</span><span class="token class-name">Object</span> bean<span class="token punctuation">,</span> <span class="token class-name">String</span> beanName<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">BeansException</span> <span class="token punctuation">{</span>
				<span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token string">&quot;user1&quot;</span><span class="token punctuation">.</span><span class="token function">equals</span><span class="token punctuation">(</span>beanName<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
					<span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
				<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
					<span class="token keyword">return</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
				<span class="token punctuation">}</span>
			<span class="token punctuation">}</span>
		<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

		factory<span class="token punctuation">.</span><span class="token function">registerBeanDefinition</span><span class="token punctuation">(</span><span class="token string">&quot;user1&quot;</span><span class="token punctuation">,</span> <span class="token class-name">BeanDefinitionBuilder</span><span class="token punctuation">.</span><span class="token function">genericBeanDefinition</span><span class="token punctuation">(</span><span class="token class-name">People</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">)</span>
				<span class="token punctuation">.</span><span class="token function">addPropertyValue</span><span class="token punctuation">(</span><span class="token string">&quot;name&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;osvue_java&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">addPropertyValue</span><span class="token punctuation">(</span><span class="token string">&quot;age&quot;</span><span class="token punctuation">,</span> <span class="token number">30</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getBeanDefinition</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

		factory<span class="token punctuation">.</span><span class="token function">registerBeanDefinition</span><span class="token punctuation">(</span><span class="token string">&quot;user2&quot;</span><span class="token punctuation">,</span> <span class="token class-name">BeanDefinitionBuilder</span><span class="token punctuation">.</span><span class="token function">genericBeanDefinition</span><span class="token punctuation">(</span><span class="token class-name">People</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">)</span>
				<span class="token punctuation">.</span><span class="token function">addPropertyValue</span><span class="token punctuation">(</span><span class="token string">&quot;name&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;public static&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">addPropertyValue</span><span class="token punctuation">(</span><span class="token string">&quot;age&quot;</span><span class="token punctuation">,</span> <span class="token number">50</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getBeanDefinition</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

		<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token class-name">String</span> beanName <span class="token operator">:</span> factory<span class="token punctuation">.</span><span class="token function">getBeanDefinitionNames</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">.</span><span class="token function">format</span><span class="token punctuation">(</span><span class="token string">&quot;%s-&gt;%s&quot;</span><span class="token punctuation">,</span> beanName<span class="token punctuation">,</span> factory<span class="token punctuation">.</span><span class="token function">getBean</span><span class="token punctuation">(</span>beanName<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>

	<span class="token doc-comment comment">/**
user1-&gt;People [name=null, age=null]
user2-&gt;People [name=public static, age=50]

	 */</span>
</code></pre></div><ul><li><strong>Bean属性赋值前阶段</strong></li></ul><p>这个阶段会调用InstantiationAwareBeanPostProcessor接口的postProcessProperties方法，调用逻辑：</p><div class="language-java" data-ext="java"><pre class="language-java"><code><span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token class-name">BeanPostProcessor</span> bp <span class="token operator">:</span> <span class="token function">getBeanPostProcessors</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>bp <span class="token keyword">instanceof</span> <span class="token class-name">InstantiationAwareBeanPostProcessor</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">InstantiationAwareBeanPostProcessor</span> ibp <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token class-name">InstantiationAwareBeanPostProcessor</span><span class="token punctuation">)</span> bp<span class="token punctuation">;</span>
        <span class="token class-name">PropertyValues</span> pvsToUse <span class="token operator">=</span> ibp<span class="token punctuation">.</span><span class="token function">postProcessProperties</span><span class="token punctuation">(</span>pvs<span class="token punctuation">,</span> bw<span class="token punctuation">.</span><span class="token function">getWrappedInstance</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> beanName<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>pvsToUse <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>filteredPds <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                filteredPds <span class="token operator">=</span> <span class="token function">filterPropertyDescriptorsForDependencyCheck</span><span class="token punctuation">(</span>bw<span class="token punctuation">,</span> mbd<span class="token punctuation">.</span>allowCaching<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
            pvsToUse <span class="token operator">=</span> ibp<span class="token punctuation">.</span><span class="token function">postProcessPropertyValues</span><span class="token punctuation">(</span>pvs<span class="token punctuation">,</span> filteredPds<span class="token punctuation">,</span> bw<span class="token punctuation">.</span><span class="token function">getWrappedInstance</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> beanName<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>pvsToUse <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token keyword">return</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
        pvs <span class="token operator">=</span> pvsToUse<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><ul><li>从上面可以看出，如果<code>InstantiationAwareBeanPostProcessor中的postProcessProperties和postProcessPropertyValues</code>都返回空的时候，表示这个bean不需要设置属性，直接返回了，直接进入下一个阶段。</li></ul><p>看一下postProcessProperties这个方法的定义：</p><div class="language-java" data-ext="java"><pre class="language-java"><code><span class="token annotation punctuation">@Nullable</span>
<span class="token keyword">default</span> <span class="token class-name">PropertyValues</span> <span class="token function">postProcessProperties</span><span class="token punctuation">(</span><span class="token class-name">PropertyValues</span> pvs<span class="token punctuation">,</span> <span class="token class-name">Object</span> bean<span class="token punctuation">,</span> <span class="token class-name">String</span> beanName<span class="token punctuation">)</span>
    <span class="token keyword">throws</span> <span class="token class-name">BeansException</span> <span class="token punctuation">{</span>

    <span class="token keyword">return</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><blockquote><p>PropertyValues中保存了bean实例对象中所有属性值的设置，所以我们可以在这个这个方法中对PropertyValues值进行修改。</p></blockquote><ul><li>这个方法有2个比较重要的实现类 <ol><li><strong>AutowiredAnnotationBeanPostProcessor在这个方法中对@Autowired、@Value标注的字段、方法注入值。</strong></li><li><strong>CommonAnnotationBeanPostProcessor在这个方法中对@Resource标注的字段和方法注入值。</strong></li></ol></li></ul><div class="language-java" data-ext="java"><pre class="language-java"><code><span class="token annotation punctuation">@Test</span>
<span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">test3</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token class-name">DefaultListableBeanFactory</span> factory <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">DefaultListableBeanFactory</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    factory<span class="token punctuation">.</span><span class="token function">addBeanPostProcessor</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">InstantiationAwareBeanPostProcessor</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token comment">// @0</span>
        <span class="token annotation punctuation">@Nullable</span>
        <span class="token annotation punctuation">@Override</span>
        <span class="token keyword">public</span> <span class="token class-name">PropertyValues</span> <span class="token function">postProcessProperties</span><span class="token punctuation">(</span><span class="token class-name">PropertyValues</span> pvs<span class="token punctuation">,</span> <span class="token class-name">Object</span> bean<span class="token punctuation">,</span> <span class="token class-name">String</span> beanName<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">BeansException</span> <span class="token punctuation">{</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token string">&quot;user1&quot;</span><span class="token punctuation">.</span><span class="token function">equals</span><span class="token punctuation">(</span>beanName<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token keyword">if</span> <span class="token punctuation">(</span>pvs <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                    pvs <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">MutablePropertyValues</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token punctuation">}</span>
                <span class="token keyword">if</span> <span class="token punctuation">(</span>pvs <span class="token keyword">instanceof</span> <span class="token class-name">MutablePropertyValues</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                    <span class="token class-name">MutablePropertyValues</span> mpvs <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token class-name">MutablePropertyValues</span><span class="token punctuation">)</span> pvs<span class="token punctuation">;</span>
                    <span class="token comment">//将姓名设置为：路人</span>
                    mpvs<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token string">&quot;name&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;路人&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                    <span class="token comment">//将年龄属性的值修改为18</span>
                    mpvs<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token string">&quot;age&quot;</span><span class="token punctuation">,</span> <span class="token number">18</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span>
            <span class="token keyword">return</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">//注意 user1 这个没有给属性设置值</span>
    factory<span class="token punctuation">.</span><span class="token function">registerBeanDefinition</span><span class="token punctuation">(</span><span class="token string">&quot;user1&quot;</span><span class="token punctuation">,</span> <span class="token class-name">BeanDefinitionBuilder</span><span class="token punctuation">.</span>
            <span class="token function">genericBeanDefinition</span><span class="token punctuation">(</span><span class="token class-name">UserModel</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">)</span><span class="token punctuation">.</span>
            <span class="token function">getBeanDefinition</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//@1</span>

    factory<span class="token punctuation">.</span><span class="token function">registerBeanDefinition</span><span class="token punctuation">(</span><span class="token string">&quot;user2&quot;</span><span class="token punctuation">,</span> <span class="token class-name">BeanDefinitionBuilder</span><span class="token punctuation">.</span>
            <span class="token function">genericBeanDefinition</span><span class="token punctuation">(</span><span class="token class-name">UserModel</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">)</span><span class="token punctuation">.</span>
            <span class="token function">addPropertyValue</span><span class="token punctuation">(</span><span class="token string">&quot;name&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;002266&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span>
            <span class="token function">addPropertyValue</span><span class="token punctuation">(</span><span class="token string">&quot;age&quot;</span><span class="token punctuation">,</span> <span class="token number">50</span><span class="token punctuation">)</span><span class="token punctuation">.</span>
            <span class="token function">getBeanDefinition</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token class-name">String</span> beanName <span class="token operator">:</span> factory<span class="token punctuation">.</span><span class="token function">getBeanDefinitionNames</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">.</span><span class="token function">format</span><span class="token punctuation">(</span><span class="token string">&quot;%s-&gt;%s&quot;</span><span class="token punctuation">,</span> beanName<span class="token punctuation">,</span> factory<span class="token punctuation">.</span><span class="token function">getBean</span><span class="token punctuation">(</span>beanName<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token comment">/*
@1：user1这个bean没有设置属性的值

@0：这个实现 org.springframework.beans.factory.config.InstantiationAwareBeanPostProcessor#postProcessProperties 方法，在其内部对 user1 这个bean进行属性值信息进行修改。
*/</span>
</code></pre></div><ul><li><strong>Bean属性赋值阶段</strong> 这个过程比较简单了，循环处理PropertyValues中的属性值信息，通过反射调用set方法将属性的值设置到bean实例中。</li></ul><p>PropertyValues中的值是通过bean xml中property元素配置的，或者调用MutablePropertyValues中add方法设置的值。</p><h2 id="aware" tabindex="-1"><a class="header-anchor" href="#aware" aria-hidden="true">#</a> Aware</h2><h3 id="阶段9-bean初始化阶段" tabindex="-1"><a class="header-anchor" href="#阶段9-bean初始化阶段" aria-hidden="true">#</a> 阶段9：Bean初始化阶段</h3><p>这个阶段分为5个小的阶段</p><ol><li>Bean Aware接口回调</li><li>Bean初始化前操作</li><li>Bean初始化操作</li><li>Bean初始化后操作</li><li>Bean初始化完成操作</li></ol><ul><li><strong>Bean Aware接口回调</strong></li></ul><div class="language-java" data-ext="java"><pre class="language-java"><code><span class="token keyword">private</span> <span class="token keyword">void</span> <span class="token function">invokeAwareMethods</span><span class="token punctuation">(</span><span class="token keyword">final</span> <span class="token class-name">String</span> beanName<span class="token punctuation">,</span> <span class="token keyword">final</span> <span class="token class-name">Object</span> bean<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>bean <span class="token keyword">instanceof</span> <span class="token class-name">Aware</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>bean <span class="token keyword">instanceof</span> <span class="token class-name">BeanNameAware</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token class-name">BeanNameAware</span><span class="token punctuation">)</span> bean<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">setBeanName</span><span class="token punctuation">(</span>beanName<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>bean <span class="token keyword">instanceof</span> <span class="token class-name">BeanClassLoaderAware</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token class-name">ClassLoader</span> bcl <span class="token operator">=</span> <span class="token function">getBeanClassLoader</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token keyword">if</span> <span class="token punctuation">(</span>bcl <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                    <span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token class-name">BeanClassLoaderAware</span><span class="token punctuation">)</span> bean<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">setBeanClassLoader</span><span class="token punctuation">(</span>bcl<span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>bean <span class="token keyword">instanceof</span> <span class="token class-name">BeanFactoryAware</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token class-name">BeanFactoryAware</span><span class="token punctuation">)</span> bean<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">setBeanFactory</span><span class="token punctuation">(</span><span class="token class-name">AbstractAutowireCapableBeanFactory</span><span class="token punctuation">.</span><span class="token keyword">this</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
</code></pre></div><p>如果我们的bean实例实现了上面的接口，会按照下面的顺序依次进行调用：</p><ol><li>BeanNameAware：将bean的名称注入进去</li><li>BeanClassLoaderAware：将BeanClassLoader注入进去</li><li>BeanFactoryAware：将BeanFactory注入进去</li></ol><div class="language-java" data-ext="java"><pre class="language-java"><code> <span class="token annotation punctuation">@Test</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">testb</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">DefaultListableBeanFactory</span> factory <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">DefaultListableBeanFactory</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        factory<span class="token punctuation">.</span><span class="token function">registerBeanDefinition</span><span class="token punctuation">(</span><span class="token string">&quot;awareBean&quot;</span><span class="token punctuation">,</span> <span class="token class-name">BeanDefinitionBuilder</span><span class="token punctuation">.</span><span class="token function">genericBeanDefinition</span><span class="token punctuation">(</span><span class="token class-name">AwareBean</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getBeanDefinition</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">//调用getBean方法获取bean，将触发bean的初始化</span>
        factory<span class="token punctuation">.</span><span class="token function">getBean</span><span class="token punctuation">(</span><span class="token string">&quot;awareBean&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

	<span class="token doc-comment comment">/**
	setBeanName：awareBean
setBeanClassLoader：sun.misc.Launcher$AppClassLoader@3b9a45b3
setBeanFactory：org.springframework.beans.factory.support.DefaultListableBeanFactory@74294c1a: defining beans [awareBean]; root of factory hierarchy

	
	 */</span>
</code></pre></div><h4 id="bean初始化前操作" tabindex="-1"><a class="header-anchor" href="#bean初始化前操作" aria-hidden="true">#</a> Bean初始化前操作</h4><p>这个阶段的源码：</p><div class="language-java" data-ext="java"><pre class="language-java"><code><span class="token annotation punctuation">@Override</span>
<span class="token keyword">public</span> <span class="token class-name">Object</span> <span class="token function">applyBeanPostProcessorsBeforeInitialization</span><span class="token punctuation">(</span><span class="token class-name">Object</span> existingBean<span class="token punctuation">,</span> <span class="token class-name">String</span> beanName<span class="token punctuation">)</span>
    <span class="token keyword">throws</span> <span class="token class-name">BeansException</span> <span class="token punctuation">{</span>

    <span class="token class-name">Object</span> result <span class="token operator">=</span> existingBean<span class="token punctuation">;</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token class-name">BeanPostProcessor</span> processor <span class="token operator">:</span> <span class="token function">getBeanPostProcessors</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">Object</span> current <span class="token operator">=</span> processor<span class="token punctuation">.</span><span class="token function">postProcessBeforeInitialization</span><span class="token punctuation">(</span>result<span class="token punctuation">,</span> beanName<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>current <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span> result<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        result <span class="token operator">=</span> current<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> result<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><ul><li>会调用<code>BeanPostProcessor的postProcessBeforeInitialization</code>方法，若返回null，当前方法将结束。</li></ul><p>通常称<code>postProcessBeforeInitialization</code>这个方法为：bean初始化前操作。</p><ul><li>这个接口有2个实现类，比较重要： <ol><li><code>org.springframework.context.support.ApplicationContextAwareProcessor</code></li><li><code>org.springframework.context.annotation.CommonAnnotationBeanPostProcessor</code></li></ol></li><li><strong>ApplicationContextAwareProcessor注入6个Aware接口对象</strong> 如果bean实现了下面的接口，在<strong>ApplicationContextAwareProcessor#postProcessBeforeInitialization</strong>中会依次调用下面接口中的方法，将Aware前缀对应的对象注入到bean实例中。</li></ul><ol><li>EnvironmentAware：注入Environment对象</li><li>EmbeddedValueResolverAware：注入EmbeddedValueResolver对象</li><li>ResourceLoaderAware：注入ResourceLoader对象</li><li>ApplicationEventPublisherAware：注入ApplicationEventPublisher对象</li><li>MessageSourceAware：注入MessageSource对象</li><li>ApplicationContextAware：注入ApplicationContext对象</li></ol><p>从名称上可以看出这个类以ApplicationContext开头的，说明这个类只能在ApplicationContext环境中使用。</p><ul><li><strong>CommonAnnotationBeanPostProcessor</strong>调用@PostConstruct标注的方法 <ul><li>CommonAnnotationBeanPostProcessor#postProcessBeforeInitialization中会调用bean中所有标注@PostConstruct注解的方法</li></ul></li></ul><p>大家可以去看一下AnnotationConfigApplicationContext的源码，其内部会添加很多BeanPostProcessor到DefaultListableBeanFactory中。</p><p><strong>Bean初始化阶段</strong> 2个步骤</p><ol><li>调用InitializingBean接口的afterPropertiesSet方法</li><li>调用定义bean的时候指定的初始化方法。</li></ol><p>调用InitializingBean接口的afterPropertiesSet方法 来看一下InitializingBean这个接口</p><div class="language-java" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">interface</span> <span class="token class-name">InitializingBean</span> <span class="token punctuation">{</span>
    <span class="token keyword">void</span> <span class="token function">afterPropertiesSet</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">Exception</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><blockquote><p>当我们的bean实现了这个接口的时候，会在这个阶段被调用</p></blockquote><p>调用bean定义的时候指定的初始化方法 先来看一下如何指定bean的初始化方法，3种方式</p><ol><li>xml方式指定初始化方法 <code>&lt;bean init-method=&quot;bean中方法名称&quot;/&gt;</code></li><li>@Bean的方式指定初始化方法 <code>@Bean(initMethod = &quot;初始化的方法&quot;)</code></li><li>api的方式指定初始化方法 <code>this.beanDefinition.setInitMethodName(methodName);</code> 初始化方法最终会赋值给下面这个字段</li></ol><p><code>org.springframework.beans.factory.support.AbstractBeanDefinition#initMethodName</code> 案例</p><div class="language-java" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">SprInit</span> <span class="token keyword">implements</span> <span class="token class-name">InitializingBean</span> <span class="token punctuation">{</span>

	<span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">init</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;init methods  ....&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>

	<span class="token annotation punctuation">@Override</span>
	<span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">afterPropertiesSet</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">Exception</span> <span class="token punctuation">{</span>
		<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;after properties set.....&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>

<span class="token punctuation">}</span>

    <span class="token annotation punctuation">@Test</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">testcc</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">DefaultListableBeanFactory</span> factory <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">DefaultListableBeanFactory</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">BeanDefinition</span> service <span class="token operator">=</span> <span class="token class-name">BeanDefinitionBuilder</span><span class="token punctuation">.</span><span class="token function">genericBeanDefinition</span><span class="token punctuation">(</span><span class="token class-name">SprInit</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">)</span><span class="token punctuation">.</span>
				<span class="token function">setInitMethodName</span><span class="token punctuation">(</span><span class="token string">&quot;init&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span> <span class="token comment">// @1：指定初始化方法</span>
                <span class="token function">getBeanDefinition</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        factory<span class="token punctuation">.</span><span class="token function">registerBeanDefinition</span><span class="token punctuation">(</span><span class="token string">&quot;SprInit&quot;</span><span class="token punctuation">,</span> service<span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>factory<span class="token punctuation">.</span><span class="token function">getBean</span><span class="token punctuation">(</span><span class="token string">&quot;SprInit&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

	<span class="token doc-comment comment">/**
	
	after properties set.....
init methods  ....
com.osvue.env.app.demo.SprInit@764cba
	 */</span>
</code></pre></div><blockquote><p>调用顺序：InitializingBean中的afterPropertiesSet、然后在调用自定义的初始化方法</p></blockquote><h3 id="阶段10-所有单例bean初始化完成后阶段" tabindex="-1"><a class="header-anchor" href="#阶段10-所有单例bean初始化完成后阶段" aria-hidden="true">#</a> 阶段10：所有单例bean初始化完成后阶段</h3><p>所有单例bean实例化完成之后，spring会回调下面这个接口：</p><div class="language-java" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">interface</span> <span class="token class-name">SmartInitializingSingleton</span> <span class="token punctuation">{</span>
    <span class="token keyword">void</span> <span class="token function">afterSingletonsInstantiated</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><p>调用逻辑在下面这个方法中</p><div class="language-java" data-ext="java"><pre class="language-java"><code><span class="token doc-comment comment">/**
 * 确保所有非lazy的单例都被实例化，同时考虑到FactoryBeans。如果需要，通常在工厂设置结束时调用。
 */</span>
<span class="token class-name"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>beans<span class="token punctuation">.</span>factory<span class="token punctuation">.</span>support<span class="token punctuation">.</span></span>DefaultListableBeanFactory</span>#preInstantiateSingletons
</code></pre></div><ul><li>这个方法内部会先触发所有非延迟加载的单例bean初始化，然后从容器中找到类型是<strong>SmartInitializingSingleton的bean</strong>，调用他们的afterSingletonsInstantiated方法。</li></ul><h3 id="阶段11-bean使用阶段" tabindex="-1"><a class="header-anchor" href="#阶段11-bean使用阶段" aria-hidden="true">#</a> 阶段11：Bean使用阶段</h3><p>这个阶段就不说了，调用getBean方法得到了bean之后，大家可以随意使用，任意发挥。</p><h3 id="阶段12-bean销毁阶段" tabindex="-1"><a class="header-anchor" href="#阶段12-bean销毁阶段" aria-hidden="true">#</a> 阶段12：Bean销毁阶段</h3><ul><li><strong>触发bean销毁的几种方式</strong></li></ul><ol><li><p>调用<code>org.springframework.beans.factory.support.AbstractAutowireCapableBeanFactory#destroyBean</code></p></li><li><p>调用<code>org.springframework.beans.factory.config.ConfigurableBeanFactory#destroySingletons</code></p></li><li><p>调用<code>ApplicationContext中的close</code>方法</p></li></ol><ul><li><strong>Bean销毁阶段会依次执行</strong></li></ul><ol><li><p>轮询beanPostProcessors列表，如果是<code>DestructionAwareBeanPostProcessor</code>这种类型的，会调用其内部的<code>postProcessBeforeDestruction</code>方法</p></li><li><p>如果bean实现了<code>org.springframework.beans.factory.DisposableBean</code>接口，会调用这个接口中的destroy方法</p></li><li><p>调用bean自定义的销毁方法</p></li></ol><p><code>DestructionAwareBeanPostProcessor</code>接口 看一下源码：</p><div class="language-java" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">interface</span> <span class="token class-name">DestructionAwareBeanPostProcessor</span> <span class="token keyword">extends</span> <span class="token class-name">BeanPostProcessor</span> <span class="token punctuation">{</span>

    <span class="token doc-comment comment">/**
     * bean销毁前调用的方法
     */</span>
    <span class="token keyword">void</span> <span class="token function">postProcessBeforeDestruction</span><span class="token punctuation">(</span><span class="token class-name">Object</span> bean<span class="token punctuation">,</span> <span class="token class-name">String</span> beanName<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">BeansException</span><span class="token punctuation">;</span>

    <span class="token doc-comment comment">/**
     * 用来判断bean是否需要触发postProcessBeforeDestruction方法
     */</span>
    <span class="token keyword">default</span> <span class="token keyword">boolean</span> <span class="token function">requiresDestruction</span><span class="token punctuation">(</span><span class="token class-name">Object</span> bean<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

<span class="token punctuation">}</span>
</code></pre></div><ul><li>这个接口有个关键的实现类： <ul><li><code>org.springframework.context.annotation.CommonAnnotationBeanPostProcessor</code><ul><li><code>CommonAnnotationBeanPostProcessor#postProcessBeforeDestruction</code>方法中会调用bean中所有标注了 <strong>@PreDestroy</strong>的方法。</li></ul></li></ul></li></ul><h2 id="abstractapplicationcontext" tabindex="-1"><a class="header-anchor" href="#abstractapplicationcontext" aria-hidden="true">#</a> AbstractApplicationContext</h2><ul><li><strong>非常重要的类</strong><img src="`+o+`" alt="alt"></li></ul><h4 id="beanfactory接口" tabindex="-1"><a class="header-anchor" href="#beanfactory接口" aria-hidden="true">#</a> BeanFactory接口</h4><p>这个我们已经很熟悉了，Bean工厂的顶层接口</p><h4 id="defaultlistablebeanfactory类" tabindex="-1"><a class="header-anchor" href="#defaultlistablebeanfactory类" aria-hidden="true">#</a> DefaultListableBeanFactory类</h4><p>实现了BeanFactory接口，可以说这个可以是BeanFactory接口真正的唯一实现，内部真正实现了bean生命周期中的所有代码。</p><p>其他的一些类都是依赖于DefaultListableBeanFactory类，将请求转发给DefaultListableBeanFactory进行bean的处理的。</p><h4 id="其他3个类" tabindex="-1"><a class="header-anchor" href="#其他3个类" aria-hidden="true">#</a> 其他3个类</h4><p>我们经常用到的就是这3个类：</p><ol><li>AnnotationConfigApplicationContext</li><li>ClassPathXmlApplicationContext</li><li>FileSystemXmlApplicationContext <ol><li>这3个类，他们的主要内部的功能是依赖他的父类AbstractApplicationContext来实现的，所以大家主要看AbstractApplicationContext这个类。</li></ol></li></ol><ul><li><strong>AbstractApplicationContext类</strong> 这个类中有2个比较重要的方法</li></ul><div class="language-java" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">abstract</span> <span class="token class-name">ConfigurableListableBeanFactory</span> <span class="token function">getBeanFactory</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">IllegalStateException</span><span class="token punctuation">;</span>
<span class="token keyword">protected</span> <span class="token keyword">void</span> <span class="token function">registerBeanPostProcessors</span><span class="token punctuation">(</span><span class="token class-name">ConfigurableListableBeanFactory</span> beanFactory<span class="token punctuation">)</span>
</code></pre></div><p>大家是否注意过我们使用<code>AnnotationConfigApplicationContext</code>的时候，经常调用reflush方法，这个方法内部就会调用上面这2个方法。</p><ul><li><p>第一个方法：getBeanFactory()</p><ul><li>返回当前应用上下文中的<code>ConfigurableListableBeanFactory</code>，这也是个接口类型的，这个接口有一个唯一的实现类：<code>DefaultListableBeanFactory</code>。</li></ul></li><li><p>有没有很熟悉，上面说过：<code>DefaultListableBeanFactory</code>是<strong>BeanFactory</strong>真正的唯一实现。</p><ul><li>应用上线文中就会使用这个<code>ConfigurableListableBeanFactory</code>来操作spring容器。</li></ul></li><li><p>第二个方法：<code>registerBeanPostProcessors</code></p><ul><li>说的通俗点：这个方法就是向 <strong>ConfigurableListableBeanFactory</strong>中注册<code>BeanPostProcessor</code>，内容会从spring容器中获取所有类型的<code>BeanPostProcessor</code>，将其添加到<code>DefaultListableBeanFactory#beanPostProcessors</code>列表中</li></ul></li></ul><p>看一下这个方法的源码：</p><div class="language-java" data-ext="java"><pre class="language-java"><code><span class="token keyword">protected</span> <span class="token keyword">void</span> <span class="token function">registerBeanPostProcessors</span><span class="token punctuation">(</span><span class="token class-name">ConfigurableListableBeanFactory</span> beanFactory<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token class-name">PostProcessorRegistrationDelegate</span><span class="token punctuation">.</span><span class="token function">registerBeanPostProcessors</span><span class="token punctuation">(</span>beanFactory<span class="token punctuation">,</span> <span class="token keyword">this</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><p>会将请求转发给<code>PostProcessorRegistrationDelegate#registerBeanPostProcessors</code>。</p><p>内部比较长，大家可以去看一下源码，这个方法内部主要用到了4个BeanPostProcessor类型的List集合。</p><div class="language-java" data-ext="java"><pre class="language-java"><code><span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">BeanPostProcessor</span><span class="token punctuation">&gt;</span></span> priorityOrderedPostProcessors <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ArrayList</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">BeanPostProcessor</span><span class="token punctuation">&gt;</span></span> orderedPostProcessors<span class="token punctuation">;</span>
<span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">BeanPostProcessor</span><span class="token punctuation">&gt;</span></span> nonOrderedPostProcessors<span class="token punctuation">;</span>
<span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">BeanPostProcessor</span><span class="token punctuation">&gt;</span></span> internalPostProcessors <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ArrayList</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><ul><li><p><strong>先说一下：当到方法的时候，spring容器中已经完成了所有Bean的注册。</strong></p></li><li><p>spring会从容器中找出所有类型的<code>BeanPostProcessor</code>列表，然后按照下面的规则将其分别放到上面的4个集合中，上面4个集合中的<code>BeanPostProcessor</code>会被依次添加到<code>DefaultListableBeanFactory#beanPostProcessors</code>列表中，来看一下4个集合的分别放的是那些<code>BeanPostProcessor</code>：</p></li><li><p><code>priorityOrderedPostProcessors</code>（指定优先级的<code>BeanPostProcessor</code>） 实现<code>org.springframework.core.PriorityOrdered</code>接口的<code>BeanPostProcessor</code>，但是不包含<code>MergedBeanDefinitionPostProcessor</code>类型的</p></li><li><p><code>orderedPostProcessors</code>（指定了顺序的BeanPostProcessor） 标注有@Order注解，或者实现了<code>org.springframework.core.annotation.Order</code>接口的<code>BeanPostProcessor</code>，但是不包含<code>MergedBeanDefinitionPostProcessor</code>类型的</p></li><li><p><code>nonOrderedPostProcessors</code>（未指定顺序的<code>BeanPostProcessor</code>） 上面2中类型置为以及<code>MergedBeanDefinitionPostProcessor</code>之外的</p></li><li><p><code>internalPostProcessors</code><code>MergedBeanDefinitionPostProcessor</code>类型的<code>BeanPostProcessor</code>列表。</p></li><li><p>大家可以去看一下<code>CommonAnnotationBeanPostProcessor</code>和<code>AutowiredAnnotationBeanPostProcessor</code>，这两个类都实现了<code>PriorityOrdered</code>接口，但是他们也实现了<code>MergedBeanDefinitionPostProcessor</code>接口，所以最终他们会被丢到<code>internalPostProcessors</code>这个集合中，会被放入<code>BeanPostProcessor</code>的最后面。</p></li></ul><p><img src="`+e+'" alt="alt"></p>',181),u=[l];function i(k,r){return a(),s("div",null,u)}const m=n(c,[["render",i],["__file","lifecycle.html.vue"]]);export{m as default};
