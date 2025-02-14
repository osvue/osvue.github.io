import{_ as n,p as a,q as s,a1 as t}from"./framework-d81ad7e5.js";const o={},p=t(`<ul><li>@Conditional是做什么的?</li><li>@Conditional多个条件是什么逻辑关系？</li><li>条件判断在什么时候执行？</li><li>ConfigurationCondition和Condition有什么区别？什么时候使用ConfigurationCondition？</li><li>多个Condition执行的顺序是什么样的？可以配置优先级么？</li><li>可以介绍一下@Conditional常见的一些用法么？</li></ul><h3 id="conditional注解" tabindex="-1"><a class="header-anchor" href="#conditional注解" aria-hidden="true">#</a> @Conditional注解</h3><ul><li><strong>@Conditional注解是从spring4.0才有的，可以用在任何类型或者方法上面，通过@Conditional注解可以配置一些条件判断，当所有条件都满足的时候，被@Conditional标注的目标才会被spring容器处理。</strong><ul><li>比如可以通过@Conditional来控制bean是否需要注册，控制被@Configuration标注的配置类是需要需要被解析等。</li></ul></li></ul><div class="language-java" data-ext="java"><pre class="language-java"><code><span class="token keyword">if</span><span class="token punctuation">(</span><span class="token annotation punctuation">@Conditional</span>中配置的多个条件是否都匹配<span class="token punctuation">)</span><span class="token punctuation">{</span>
<span class="token comment">//s</span>
<span class="token punctuation">}</span>
<span class="token comment">// @Conditional源码：</span>

<span class="token annotation punctuation">@Target</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token class-name">ElementType</span><span class="token punctuation">.</span><span class="token constant">TYPE</span><span class="token punctuation">,</span> <span class="token class-name">ElementType</span><span class="token punctuation">.</span><span class="token constant">METHOD</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token annotation punctuation">@Retention</span><span class="token punctuation">(</span><span class="token class-name">RetentionPolicy</span><span class="token punctuation">.</span><span class="token constant">RUNTIME</span><span class="token punctuation">)</span>
<span class="token annotation punctuation">@Documented</span>
<span class="token keyword">public</span> <span class="token annotation punctuation">@interface</span> <span class="token class-name">Conditional</span> <span class="token punctuation">{</span>
    <span class="token class-name">Class</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token operator">?</span> <span class="token keyword">extends</span> <span class="token class-name">Condition</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token function">value</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><ul><li>这个注解只有一个value参数，Condition类型的数组</li><li>Condition是一个接口，表示一个条件判断，内部有个方法返回true或false</li><li>当所有Condition都成立的时候，@Conditional的结果才成立。</li></ul><h3 id="condition接口" tabindex="-1"><a class="header-anchor" href="#condition接口" aria-hidden="true">#</a> Condition接口</h3><p>用来表示条件判断的接口，源码如下：</p><div class="language-java" data-ext="java"><pre class="language-java"><code><span class="token annotation punctuation">@FunctionalInterface</span>
<span class="token keyword">public</span> <span class="token keyword">interface</span> <span class="token class-name">Condition</span> <span class="token punctuation">{</span>

    <span class="token doc-comment comment">/**
     * 判断条件是否匹配
     * context:条件判断上下文
     */</span>
    <span class="token keyword">boolean</span> <span class="token function">matches</span><span class="token punctuation">(</span><span class="token class-name">ConditionContext</span> context<span class="token punctuation">,</span> <span class="token class-name">AnnotatedTypeMetadata</span> metadata<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token punctuation">}</span>
</code></pre></div><ul><li><p>是一个函数式接口，内部只有一个<strong>matches</strong>方法，用来判断条件是否成立的，2个参数：</p><ul><li><p>context：条件上下文，<strong>ConditionContext</strong>接口类型的，可以用来获取容器中的个人信息</p></li><li><p>metadata：用来获取被 <strong>@Conditional</strong>标注的对象上的所有注解信息</p></li></ul></li></ul><ul><li><strong>ConditionContext接口</strong></li></ul><p>这个接口中提供了一些常用的方法，可以用来获取spring容器中的各种信息，看一下源码：</p><div class="language-java" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">interface</span> <span class="token class-name">ConditionContext</span> <span class="token punctuation">{</span>

    <span class="token doc-comment comment">/**
     * 返回bean定义注册器，可以通过注册器获取bean定义的各种配置信息
     */</span>
    <span class="token class-name">BeanDefinitionRegistry</span> <span class="token function">getRegistry</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token doc-comment comment">/**
     * 返回ConfigurableListableBeanFactory类型的bean工厂，相当于一个ioc容器对象
     */</span>
    <span class="token annotation punctuation">@Nullable</span>
    <span class="token class-name">ConfigurableListableBeanFactory</span> <span class="token function">getBeanFactory</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token doc-comment comment">/**
     * 返回当前spring容器的环境配置信息对象
     */</span>
    <span class="token class-name">Environment</span> <span class="token function">getEnvironment</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token doc-comment comment">/**
     * 返回资源加载器
     */</span>
    <span class="token class-name">ResourceLoader</span> <span class="token function">getResourceLoader</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token doc-comment comment">/**
     * 返回类加载器
     */</span>
    <span class="token annotation punctuation">@Nullable</span>
    <span class="token class-name">ClassLoader</span> <span class="token function">getClassLoader</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token punctuation">}</span>
</code></pre></div><ul><li><strong>条件判断在什么时候执行？</strong></li></ul><p>Spring对配置类的处理主要分为2个阶段：</p><ol><li><p>配置类解析阶段</p><ul><li>会得到一批配置类的信息，和一些需要注册的bean</li></ul></li><li><p>bean注册阶段</p><ul><li>将配置类解析阶段得到的配置类和需要注册的bean注册到spring容器中</li></ul></li></ol><ul><li><p>什么是配置类 类中有下面任意注解之一的就属于配置类：</p></li><li><p>类上有@Compontent注解</p></li><li><p>类上有@Configuration注解</p></li><li><p>类上有@CompontentScan注解</p></li><li><p>类上有@Import注解</p></li><li><p>类上有@ImportResource注解</p></li><li><p>类中有@Bean标注的方法</p></li><li><p>判断一个类是不是一个配置类，是否的是下面这个方法，有兴趣的可以看一下：</p></li></ul><p><code>org.springframework.context.annotation.ConfigurationClassUtils#isConfigurationCandidate</code></p><ul><li><strong>Spring对配置类处理过程</strong> 源码位置：</li></ul><p><code>org.springframework.context.annotation.ConfigurationClassPostProcessor#processConfigBeanDefinitions</code> 整个过程大致的过程如下：</p><ol><li>通常我们会通过new AnnotationConfigApplicationContext()传入多个配置类来启动spring容器</li><li>spring对传入的多个配置类进行解析</li><li>配置类解析阶段：这个过程就是处理配置类上面6中注解的过程，此过程中又会发现很多新的配置类，比如@Import导入的一批新的类刚好也符合配置类，而被@CompontentScan扫描到的一些类刚好也是配置类；此时会对这些新产生的配置类进行同样的过程解析</li><li>bean注册阶段：配置类解析后，会得到一批配置类和一批需要注册的bean，此时spring容器会将这批配置类作为bean注册到spring容器，同样也会将这批需要注册的bean注册到spring容器</li><li>经过上面第3个阶段之后，spring容器中会注册很多新的bean，这些新的bean中可能又有很多新的配置类</li><li>Spring从容器中将所有bean拿出来，遍历一下，会过滤得到一批未处理的新的配置类，继续交给第3步进行处理</li><li>step3到step6，这个过程会经历很多次，直到完成所有配置类的解析和bean的注册</li></ol><p>从上面过程中可以了解到：</p><ol><li>可以在配置类上面加上@Conditional注解，来控制是否需要解析这个配置类，配置类如果不被解析，那么这个配置上面6种注解的解析都会被跳过</li><li>可以在被注册的bean上面加上@Conditional注解，来控制这个bean是否需要注册到spring容器中</li><li>如果配置类不会被注册到容器，那么这个配置类解析所产生的所有新的配置类及所产生的所有新的bean都不会被注册到容器</li></ol><p>一个配置类被spring处理有2个阶段：配置类解析阶段、bean注册阶段（将配置类作为bean被注册到spring容器)。</p><ul><li><p>如果将Condition接口的实现类作为配置类上@Conditional中，那么这个条件会对两个阶段都有效</p></li><li><p>此时通过Condition是无法精细的控制某个阶段的，</p></li><li><p>如果想控制某个阶段，比如<strong>可以让他解析，但是不能让他注册</strong>，此时就就需要用到另外一个接口了：<strong>ConfigurationCondition</strong></p></li><li><p><strong>ConfigurationCondition接口</strong></p></li></ul><div class="language-java" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">interface</span> <span class="token class-name">ConfigurationCondition</span> <span class="token keyword">extends</span> <span class="token class-name">Condition</span> <span class="token punctuation">{</span>

    <span class="token doc-comment comment">/**
     * 条件判断的阶段，是在解析配置类的时候过滤还是在创建bean的时候过滤
     */</span>
    <span class="token class-name">ConfigurationPhase</span> <span class="token function">getConfigurationPhase</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>


    <span class="token doc-comment comment">/**
     * 表示阶段的枚举：2个值
     */</span>
    <span class="token keyword">enum</span> <span class="token class-name">ConfigurationPhase</span> <span class="token punctuation">{</span>

        <span class="token doc-comment comment">/**
         * 配置类解析阶段，如果条件为false，配置类将不会被解析
         */</span>
        <span class="token constant">PARSE_CONFIGURATION</span><span class="token punctuation">,</span>

        <span class="token doc-comment comment">/**
         * bean注册阶段，如果为false，bean将不会被注册
         */</span>
        <span class="token constant">REGISTER_BEAN</span>
    <span class="token punctuation">}</span>

<span class="token punctuation">}</span>
</code></pre></div><ul><li><strong>ConfigurationCondition接口</strong>相对于Condition接口多了一个getConfigurationPhase方法</li><li>用来指定条件判断的阶段，是在解析配置类的时候过滤还是在创建bean的时候过滤。</li></ul><h3 id="conditional使用的3步骤" tabindex="-1"><a class="header-anchor" href="#conditional使用的3步骤" aria-hidden="true">#</a> @Conditional使用的3步骤</h3><ol><li>自定义一个类，实现Condition或ConfigurationCondition接口，实现matches方法</li><li>在目标对象上使用@Conditional注解，并指定value的指为自定义的Condition类型</li><li>启动spring容器加载资源，此时@Conditional就会起作用了</li></ol><div class="language-java" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">ConditionDi</span> <span class="token keyword">implements</span> <span class="token class-name">Condition</span> <span class="token punctuation">{</span>

 <span class="token annotation punctuation">@Override</span>
 <span class="token keyword">public</span> <span class="token keyword">boolean</span> <span class="token function">matches</span><span class="token punctuation">(</span><span class="token class-name">ConditionContext</span> context<span class="token punctuation">,</span> <span class="token class-name">AnnotatedTypeMetadata</span> metadata<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// TODO Auto-generated method stub</span>
  <span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
 <span class="token punctuation">}</span>

<span class="token punctuation">}</span>


<span class="token annotation punctuation">@Component</span>
<span class="token annotation punctuation">@Conditional</span><span class="token punctuation">(</span>value <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token class-name">ConditionDi</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Hd</span> <span class="token keyword">implements</span> <span class="token class-name">SmartInitializingSingleton</span> <span class="token punctuation">{</span>
 
 <span class="token annotation punctuation">@Override</span>
 <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">afterSingletonsInstantiated</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// TODO Auto-generated method stub</span>
  <span class="token class-name">System</span><span class="token punctuation">.</span>err<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;afterSingletonsInstantiated&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
 <span class="token punctuation">}</span>

<span class="token punctuation">}</span>
</code></pre></div><h3 id="bean不存在的时候才注册" tabindex="-1"><a class="header-anchor" href="#bean不存在的时候才注册" aria-hidden="true">#</a> bean不存在的时候才注册</h3><ul><li><strong>条件判断类：OnMissingBeanCondition</strong></li></ul><div class="language-java" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">OnMissingBeanCondition</span> <span class="token keyword">implements</span> <span class="token class-name">Condition</span> <span class="token punctuation">{</span>
    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">boolean</span> <span class="token function">matches</span><span class="token punctuation">(</span><span class="token class-name">ConditionContext</span> context<span class="token punctuation">,</span> <span class="token class-name">AnnotatedTypeMetadata</span> metadata<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">//获取bean工厂</span>
        <span class="token class-name">ConfigurableListableBeanFactory</span> beanFactory <span class="token operator">=</span> context<span class="token punctuation">.</span><span class="token function">getBeanFactory</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">//从容器中获取IService类型bean</span>
        <span class="token class-name">Map</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">,</span> <span class="token class-name">IService</span><span class="token punctuation">&gt;</span></span> serviceMap <span class="token operator">=</span> beanFactory<span class="token punctuation">.</span><span class="token function">getBeansOfType</span><span class="token punctuation">(</span><span class="token class-name">IService</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">//判断serviceMap是否为空</span>
        <span class="token keyword">return</span> serviceMap<span class="token punctuation">.</span><span class="token function">isEmpty</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

<span class="token punctuation">}</span>
</code></pre></div><h3 id="根据环境选择配置类" tabindex="-1"><a class="header-anchor" href="#根据环境选择配置类" aria-hidden="true">#</a> 根据环境选择配置类</h3><div class="language-java" data-ext="java"><pre class="language-java"><code>
<span class="token annotation punctuation">@Conditional</span><span class="token punctuation">(</span><span class="token class-name">EnvCondition</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">)</span> <span class="token comment">//@1</span>
<span class="token annotation punctuation">@Target</span><span class="token punctuation">(</span><span class="token class-name">ElementType</span><span class="token punctuation">.</span><span class="token constant">TYPE</span><span class="token punctuation">)</span>
<span class="token annotation punctuation">@Retention</span><span class="token punctuation">(</span><span class="token class-name">RetentionPolicy</span><span class="token punctuation">.</span><span class="token constant">RUNTIME</span><span class="token punctuation">)</span>
<span class="token keyword">public</span> <span class="token annotation punctuation">@interface</span> <span class="token class-name">EnvConditional</span> <span class="token punctuation">{</span>
    <span class="token comment">//环境(测试环境、开发环境、生产环境)</span>
    <span class="token keyword">enum</span> <span class="token class-name">Env</span> <span class="token punctuation">{</span> <span class="token comment">//@2</span>
        <span class="token constant">TEST</span><span class="token punctuation">,</span> <span class="token constant">DEV</span><span class="token punctuation">,</span> <span class="token constant">PROD</span>
    <span class="token punctuation">}</span>

    <span class="token comment">//环境</span>
    <span class="token class-name">Env</span> <span class="token function">value</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">default</span> <span class="token class-name">Env</span><span class="token punctuation">.</span><span class="token constant">DEV</span><span class="token punctuation">;</span> <span class="token comment">//@3</span>
<span class="token punctuation">}</span>

<span class="token doc-comment comment">/**

@1：注意这个注解比较特别，这个注解上面使用到了@Conditional注解，这个地方使用到了一个自定义Conditione类：EnvCondition

@2：枚举，表示环境，定义了3个环境

@3：这个参数用指定环境

 */</span>
<span class="token annotation punctuation">@Configuration</span>
<span class="token annotation punctuation">@EnvConditional</span><span class="token punctuation">(</span><span class="token class-name">EnvConditional<span class="token punctuation">.</span>Env</span><span class="token punctuation">.</span><span class="token constant">PROD</span><span class="token punctuation">)</span> <span class="token comment">//@1</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">ProdBeanConfig</span> <span class="token punctuation">{</span>
    <span class="token annotation punctuation">@Bean</span>
    <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">name</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token string">&quot;我是生产环境!&quot;</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">EnvCondition</span> <span class="token keyword">implements</span> <span class="token class-name">Condition</span> <span class="token punctuation">{</span>
    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">boolean</span> <span class="token function">matches</span><span class="token punctuation">(</span><span class="token class-name">ConditionContext</span> context<span class="token punctuation">,</span> <span class="token class-name">AnnotatedTypeMetadata</span> metadata<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">//当前需要使用的环境</span>
        <span class="token class-name">EnvConditional<span class="token punctuation">.</span>Env</span> curEnv <span class="token operator">=</span> <span class="token class-name">EnvConditional<span class="token punctuation">.</span>Env</span><span class="token punctuation">.</span><span class="token constant">DEV</span><span class="token punctuation">;</span> <span class="token comment">//@1</span>
        <span class="token comment">//获取使用条件的类上的EnvCondition注解中对应的环境</span>
        <span class="token class-name">EnvConditional<span class="token punctuation">.</span>Env</span> env <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token class-name">EnvConditional<span class="token punctuation">.</span>Env</span><span class="token punctuation">)</span> metadata<span class="token punctuation">.</span><span class="token function">getAllAnnotationAttributes</span><span class="token punctuation">(</span><span class="token class-name">EnvConditional</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">.</span><span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">&quot;value&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> env<span class="token punctuation">.</span><span class="token function">equals</span><span class="token punctuation">(</span>curEnv<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

<span class="token punctuation">}</span>
</code></pre></div><h3 id="condition指定优先级" tabindex="-1"><a class="header-anchor" href="#condition指定优先级" aria-hidden="true">#</a> Condition指定优先级</h3><p>指定Condition的顺序</p><ul><li><strong>自定义的Condition</strong>可以实现PriorityOrdered接口或者继承Ordered接口，或者使用 <strong>@Order</strong>注解，通过这些来指定这些Condition的优先级。</li><li>排序规则：先按PriorityOrdered排序，然后按照order的值进行排序；也就是：<code>PriorityOrdered asc,order值 asc</code></li></ul><div class="language-java" data-ext="java"><pre class="language-java"><code>
<span class="token annotation punctuation">@Order</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span> <span class="token comment">//@1</span>
<span class="token keyword">class</span> <span class="token class-name">Condition1</span> <span class="token keyword">implements</span> <span class="token class-name">Condition</span> <span class="token punctuation">{</span>
    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">boolean</span> <span class="token function">matches</span><span class="token punctuation">(</span><span class="token class-name">ConditionContext</span> context<span class="token punctuation">,</span> <span class="token class-name">AnnotatedTypeMetadata</span> metadata<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">getClass</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">Condition2</span> <span class="token keyword">implements</span> <span class="token class-name">Condition</span><span class="token punctuation">,</span> <span class="token class-name">Ordered</span> <span class="token punctuation">{</span> <span class="token comment">//@2</span>
    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">boolean</span> <span class="token function">matches</span><span class="token punctuation">(</span><span class="token class-name">ConditionContext</span> context<span class="token punctuation">,</span> <span class="token class-name">AnnotatedTypeMetadata</span> metadata<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">getClass</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">int</span> <span class="token function">getOrder</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token comment">//@3</span>
        <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token doc-comment comment">/**

@1：Condition1通过@Order指定顺序，值为1

@2：Condition2通过实现了Ordered接口来指定顺序，

@3：getOrder方法返回1
 */</span>
</code></pre></div><h3 id="configurationcondition使用" tabindex="-1"><a class="header-anchor" href="#configurationcondition使用" aria-hidden="true">#</a> ConfigurationCondition使用</h3><ul><li>配置类的处理会依次经过2个阶段： <ul><li>配置类<strong>解析阶段</strong>和bean<strong>注册阶段</strong>，Condition接口类型的条件会对这两个阶段都有效，</li><li>解析阶段的时候，容器中是还没有Service这个bean的，</li><li><strong>配置类中通过@Bean注解定义的bean</strong>在bean注册阶段才会被注册到spring容器</li><li>所以BeanConfig2在解析阶段去容器中是看不到Service这个bean的，所以就被拒绝了。</li></ul></li></ul><p>此时我们需要用到ConfigurationCondition了，让条件判断在bean注册阶段才起效。</p><div class="language-java" data-ext="java"><pre class="language-java"><code>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">MyConfigurationCondition1</span> <span class="token keyword">implements</span> <span class="token class-name">ConfigurationCondition</span> <span class="token punctuation">{</span>
    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token class-name">ConfigurationPhase</span> <span class="token function">getConfigurationPhase</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token class-name">ConfigurationPhase</span><span class="token punctuation">.</span><span class="token constant">REGISTER_BEAN</span><span class="token punctuation">;</span> <span class="token comment">//@1</span>
    <span class="token punctuation">}</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">boolean</span> <span class="token function">matches</span><span class="token punctuation">(</span><span class="token class-name">ConditionContext</span> context<span class="token punctuation">,</span> <span class="token class-name">AnnotatedTypeMetadata</span> metadata<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">//获取spring容器</span>
        <span class="token class-name">ConfigurableListableBeanFactory</span> beanFactory <span class="token operator">=</span> context<span class="token punctuation">.</span><span class="token function">getBeanFactory</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">//判断容器中是否存在Service类型的bean</span>
        <span class="token keyword">boolean</span> existsService <span class="token operator">=</span> <span class="token operator">!</span>beanFactory<span class="token punctuation">.</span><span class="token function">getBeansOfType</span><span class="token punctuation">(</span><span class="token class-name">Service</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">isEmpty</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> existsService<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><h3 id="spring中这块的源码" tabindex="-1"><a class="header-anchor" href="#spring中这块的源码" aria-hidden="true">#</a> Spring中这块的源码</h3><blockquote><p>@Conditional注解是被下面这个类处理的</p></blockquote><p><code>org.springframework.context.annotation.ConfigurationClassPostProcessor</code></p><ul><li><strong>非常重要的一个类</strong></li></ul><h3 id="conditionalonproperty注解" tabindex="-1"><a class="header-anchor" href="#conditionalonproperty注解" aria-hidden="true">#</a> @ConditionalOnProperty注解</h3><ul><li><p>@ConditionalOnProperty仅在存在环境属性且具有特定值的情况下才启用Bean注册。 默认情况下，必须定义指定的属性，并且不等于false。</p></li><li><p>class条件注解：@ConditionalOnClass</p></li><li><p>bean条件注解：@ConditionalOnBean</p></li><li><p>属性条件注解：@ConditionalOnProperty</p></li><li><p>注解提供了havingValue属性。 非常有趣的是，它定义了一个属性必须具有的值，以便将特定的Bean添加到Spring容器中。</p></li><li><p><strong>havingValue</strong></p><ul><li>指定了havingValue，要把配置项的值与havingValue对比，一致则加载Bean</li><li>配置项是false，havingValue = false&quot;，两者相等，加载Bean</li></ul></li><li><p>会将配置文件中的值和havingValue的值对比，如果一样则加载Bean，例如：</p></li><li><p>skt.msg.enable=true，havingValue=“true”，加载Bean</p></li><li><p>skt.msg.enable=false，havingValue=“false”，加载Bean</p></li><li><p>skt.msg.enable=ok，havingValue=“ok”，加载Bean</p></li><li><p>skt.msg.enable=false，havingValue=“true”，不加载Bean</p></li><li><p>skt.msg.enable=ok，havingValue=“no”，不加载Bean</p></li><li><p>当然havingValue也可以不设置，只要配置项的值不是false或“false”，都加载Bean，例如：</p></li><li><p>skt.msg.enable=ok，不设置havingValue，加载Bean</p></li><li><p>skt.msg.enable=false，不设置havingValue，不加载Bean</p></li><li><p>@ConditionalOnProperty具有另一个名为<strong>matchIfMissing</strong>的属性。 此属性指定<strong>在属性不可用的情况下</strong>条件是否应匹配。</p></li></ul>`,48),e=[p];function c(l,i){return a(),s("div",null,e)}const k=n(o,[["render",c],["__file","Conditional.html.vue"]]);export{k as default};
