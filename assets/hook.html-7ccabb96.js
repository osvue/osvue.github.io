import{_ as n,p as a,q as s,a1 as t}from"./framework-d81ad7e5.js";const e={},o=t(`<h3 id="spring-hook" tabindex="-1"><a class="header-anchor" href="#spring-hook" aria-hidden="true">#</a> spring hook</h3><ul><li><p>从Spring 3.0开始，增加了一种新的途径来配置 <strong><strong>Bean Definition</strong></strong>，这就是通过Java Code配置<strong>Bean Definition</strong>。</p></li><li><p>与XML和Annotation两种配置方式不同点在于：</p><ul><li>前两种方式XML和Annotation的配置方式为预定义方式，即开发人员通过XML文件或者Annotation预定义配置Bean的各种属性后，启动Spring容器，Spring容器会首先解析这些配置属性，生成对应的<strong>Bean Definition</strong>,装入到DefaultListtableBeanFactory对象的属性容器中</li><li>以此同时，Spring框架也会定义内部使用的Bean定义，如Bean名为：<strong>org.springframework.context.annotation.internalConfigurationAnnotationProcessor</strong> 的 ConfigurationClassPostProcessor 定义。</li><li>而后此刻不会做任何<strong>Bean Definition</strong>的解析动作，Spring框架会根据前两种配置，过滤出 <strong><code>BeanDefinitionRegistryPostProcessor</code></strong> 类型的Bean定义，并通过Spring框架生成对应的Bean对象（如 ConfigurationClassPostProcessor 实例）</li><li>结合 Spring 上下文源码可知这个对象是一个 processor 类型工具类，Spring 容器会在实例化开发人员所定义的 Bean 前先调用该 processor 的 <strong>postProcessBeanDefinitionRegistry(…)</strong> 方法。此处实现基于 Java Code 配置<strong>Bean Definition</strong>的处理。</li></ul></li><li><p>基于 Java Code 的配置方式，其执行原理不同于前两种。</p><ul><li>它是在 Spring 框架已经解析了基于 XML 和 Annotation 配置后，通过加入 <strong>BeanDefinitionRegistryPostProcessor</strong> 类型的 processor 来处理配置信息，让开发人员通过 Java 编程方式定义一个 Java 对象。其优点在于可以将配置信息集中在一定数量的 Java 对象中，同时通过 Java 编程方式，比基于 Annotation 方式具有更高的灵活性。</li><li>并且该配置方式给开发人员提供了一种非常好的范例来增加用户自定义的解析工具类。其主要缺点在于与 Java 代码结合紧密，配置信息的改变需要重新编译 Java 代码，另外这是一种新引入的解析方式，需要一定的学习成本。</li></ul></li></ul><h3 id="spring框架有3个主要的hook类-分别是" tabindex="-1"><a class="header-anchor" href="#spring框架有3个主要的hook类-分别是" aria-hidden="true">#</a> Spring框架有3个主要的Hook类，分别是</h3><blockquote><p><code>org.springframework.context.ApplicationContextAware</code></p></blockquote><ul><li>它的<strong>setApplicationContext</strong> 方法将在Spring启动之前第一个被调用。</li></ul><blockquote><p><code>org.springframework.beans.factory.support.BeanDefinitionRegistryPostProcessor</code></p></blockquote><ul><li>它的 <strong>postProcessBeanDefinitionRegistry</strong> 和 <strong>postProcessBeanFactory</strong> 方法是第二和第三被调用，</li><li>它们在Bean初始化创建之前启动，如果<strong>Spring的bean需要的其他第三方中的组件</strong>，我们在这里将其注入给Spring。</li></ul><blockquote><p><code>org.springframework.context.ApplicationListener</code></p></blockquote><ul><li>用于在初始化完成后做一些事情，当<strong>Spring所有XML或元注解的Bean都启动被创建成功了</strong>，这时会调用它的唯一方法<strong>onApplicationEvent</strong>。</li></ul><h3 id="测试案例" tabindex="-1"><a class="header-anchor" href="#测试案例" aria-hidden="true">#</a> 测试案例</h3><p>自己通过java代码创建bean，并注册为Spring管理 创建一个接口，然后创建该接口的2个实现类，分别命名不同的名字，然后在需要注入的地方使用@Qualifier 指定注入对应的实例</p><h4 id="class-interface" tabindex="-1"><a class="header-anchor" href="#class-interface" aria-hidden="true">#</a> class Interface</h4><div class="language-Java" data-ext="Java"><pre class="language-Java"><code>public interface Person {
   String myName();
}

public class Xm implements Person{

 @Override
 public String myName() {
  return &quot;xiao ming&quot;;
 }

}

public class Dx implements Person{

 @Override
 public String myName() {
  return &quot;my name IS DXXX&quot;;
 }
}

</code></pre></div><h4 id="" tabindex="-1"><a class="header-anchor" href="#" aria-hidden="true">#</a></h4><div class="language-Java" data-ext="Java"><pre class="language-Java"><code>package com.osvue.win.app.spr;

import org.springframework.beans.BeansException;
import org.springframework.beans.factory.annotation.AnnotatedBeanDefinition;
import org.springframework.beans.factory.annotation.AnnotatedGenericBeanDefinition;
import org.springframework.beans.factory.config.BeanDefinitionHolder;
import org.springframework.beans.factory.config.ConfigurableListableBeanFactory;
import org.springframework.beans.factory.support.BeanDefinitionReaderUtils;
import org.springframework.beans.factory.support.BeanDefinitionRegistry;
import org.springframework.beans.factory.support.BeanDefinitionRegistryPostProcessor;
import org.springframework.beans.factory.support.BeanNameGenerator;
import org.springframework.context.annotation.AnnotationBeanNameGenerator;
import org.springframework.context.annotation.Configuration;

import com.osvue.win.app.spr.vo.Dx;
import com.osvue.win.app.spr.vo.Xm;

/*
 * BeanDefinitionRegistryPostProcessor
 */
@Configuration
public class OsvBeanDefinitionRegistryPostProcessor implements BeanDefinitionRegistryPostProcessor {

 // bean 的名称生成器.
 private BeanNameGenerator beanNameGenerator = new AnnotationBeanNameGenerator();
  

 
 
 /**
  *  postProcessBeanFactory()是bean配置的工厂方法，
    *   在这个方法中可以获取到我们所有在postProcessBeanDefinitionRegistry方法中注册的所有bean
   *   在这里我们可以进行属性的设置等操作。
  */
 @Override
 public void postProcessBeanFactory(ConfigurableListableBeanFactory beanFactory) throws BeansException {
  System.out.println(&quot;method a postProcessBeanFactory&quot; + beanFactory.getBeanDefinitionNames().length);
 }
 /**
  * 方法postProcessBeanDefinitionRegistry()是用来注册bean的；
  * 
  */
 @Override
 public void postProcessBeanDefinitionRegistry(BeanDefinitionRegistry registry) throws BeansException {
  // TODO Auto-generated method stub
  System.out.println(&quot; b method is &quot; + registry.getBeanDefinitionCount());
  registerBean(registry,&quot;kma&quot;,Xm.class);
  registerBean(registry,&quot;kmb&quot;,Dx.class);
 }

 private void registerBean(BeanDefinitionRegistry registry, String name, Class&lt;?&gt; beanClass) {

  AnnotatedBeanDefinition annotatedBeanDefinition = new AnnotatedGenericBeanDefinition(beanClass);
  // 可以自动生成name
  String beanName = (name != null ? name
    : this.beanNameGenerator.generateBeanName(annotatedBeanDefinition, registry));
  // bean注册的holer类.
  BeanDefinitionHolder beanDefinitionHolder = new BeanDefinitionHolder(annotatedBeanDefinition, beanName);
  // 使用bean注册工具类进行注册.
  BeanDefinitionReaderUtils.registerBeanDefinition(beanDefinitionHolder, registry);

 }

}

</code></pre></div><h4 id="-1" tabindex="-1"><a class="header-anchor" href="#-1" aria-hidden="true">#</a></h4><ul><li>**postProcessBeanFactory()**是bean配置的工厂方法，</li><li>在这个方法中可以获取到我们所有在<strong>postProcessBeanDefinitionRegistry</strong>方法中注册的所有bean，在这里我们可以进行属性的设置等操作。</li></ul><div class="language-java" data-ext="java"><pre class="language-java"><code><span class="token comment">// 这里可以设置属性，例如</span>

       <span class="token class-name">BeanDefinition</span> beanDefinition <span class="token operator">=</span> beanFactory<span class="token punctuation">.</span><span class="token function">getBeanDefinition</span><span class="token punctuation">(</span><span class="token string">&quot;dataSourceA&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

       <span class="token class-name">MutablePropertyValues</span> mutablePropertyValues <span class="token operator">=</span> beanDefinition<span class="token punctuation">.</span><span class="token function">getPropertyValues</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

       <span class="token comment">//加入属性.</span>

       mutablePropertyValues<span class="token punctuation">.</span><span class="token function">addPropertyValue</span><span class="token punctuation">(</span><span class="token string">&quot;driverClassName&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;com.mysql.jdbc.Driver&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

       mutablePropertyValues<span class="token punctuation">.</span><span class="token function">addPropertyValue</span><span class="token punctuation">(</span><span class="token string">&quot;url&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;jdbc:mysql://localhost:3306/test&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

       mutablePropertyValues<span class="token punctuation">.</span><span class="token function">addPropertyValue</span><span class="token punctuation">(</span><span class="token string">&quot;username&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;root&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

       mutablePropertyValues<span class="token punctuation">.</span><span class="token function">addPropertyValue</span><span class="token punctuation">(</span><span class="token string">&quot;password&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;123456&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><h4 id="测试" tabindex="-1"><a class="header-anchor" href="#测试" aria-hidden="true">#</a> 测试</h4><ul><li>注入接口</li><li>使用测试</li></ul><div class="language-java" data-ext="java"><pre class="language-java"><code>
 <span class="token annotation punctuation">@Qualifier</span><span class="token punctuation">(</span><span class="token string">&quot;kma&quot;</span><span class="token punctuation">)</span>
 <span class="token annotation punctuation">@Autowired</span>
 <span class="token class-name">Person</span> ps<span class="token punctuation">;</span>
 
 <span class="token annotation punctuation">@RequestMapping</span><span class="token punctuation">(</span><span class="token string">&quot;xc&quot;</span><span class="token punctuation">)</span>
 <span class="token keyword">public</span> <span class="token class-name">ResultBean</span> <span class="token function">xv</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  
  <span class="token keyword">return</span> <span class="token class-name">ResultBean</span><span class="token punctuation">.</span><span class="token function">ok</span><span class="token punctuation">(</span><span class="token string">&quot;hello world nihao &quot;</span><span class="token operator">+</span>ps<span class="token punctuation">.</span><span class="token function">myName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
 <span class="token punctuation">}</span>
</code></pre></div>`,21),i=[o];function r(p,c){return a(),s("div",null,i)}const u=n(e,[["render",r],["__file","hook.html.vue"]]);export{u as default};
