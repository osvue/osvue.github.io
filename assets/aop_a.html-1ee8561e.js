import{_ as n,p as a,q as s,a1 as t}from"./framework-d81ad7e5.js";const o={},p=t(`<p>spring aop的源码解析内容比较多，分为三个部分：</p><ol><li>创建、初始化并注册AnnotationAwareAspectJAutoProxyCreator</li><li>AnnotationAwareAspectJAutoProxyCreator拦截切点bean（join point）创建过程并生成proxy（在切点织入切面）的过程</li><li>代理对象执行过程分析--构造拦截器链及触发拦截器链</li></ol><h3 id="enableaspectjautoproxy" tabindex="-1"><a class="header-anchor" href="#enableaspectjautoproxy" aria-hidden="true">#</a> <code>@EnableAspectJAutoProxy</code></h3><ul><li>如果想要使spring aop功能生效，那么要使用<code>@EnableAspectJAutoProxy</code>注解</li></ul><ol><li><code>@EnableAspectJAutoProxy</code>作用</li></ol><div class="language-java" data-ext="java"><pre class="language-java"><code><span class="token annotation punctuation">@Target</span><span class="token punctuation">(</span><span class="token class-name">ElementType</span><span class="token punctuation">.</span><span class="token constant">TYPE</span><span class="token punctuation">)</span>
<span class="token annotation punctuation">@Retention</span><span class="token punctuation">(</span><span class="token class-name">RetentionPolicy</span><span class="token punctuation">.</span><span class="token constant">RUNTIME</span><span class="token punctuation">)</span>
<span class="token annotation punctuation">@Documented</span>
<span class="token annotation punctuation">@Import</span><span class="token punctuation">(</span><span class="token class-name">AspectJAutoProxyRegistrar</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">)</span> 
<span class="token comment">// 给容器中导入AspectJAutoProxyRegistrar</span>
<span class="token keyword">public</span> <span class="token annotation punctuation">@interface</span> <span class="token class-name">EnableAspectJAutoProxy</span> <span class="token punctuation">{</span>

 
 <span class="token keyword">boolean</span> <span class="token function">proxyTargetClass</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">default</span> <span class="token boolean">false</span><span class="token punctuation">;</span>

 
 <span class="token keyword">boolean</span> <span class="token function">exposeProxy</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">default</span> <span class="token boolean">false</span><span class="token punctuation">;</span>

<span class="token punctuation">}</span>
</code></pre></div><ul><li><code>ImportBeanDefinitionRegistrar</code>在spring ioc中有接触到，其作用是手动注册bean到容器中</li></ul><div class="language-java" data-ext="java"><pre class="language-java"><code><span class="token keyword">class</span> <span class="token class-name">AspectJAutoProxyRegistrar</span> <span class="token keyword">implements</span> <span class="token class-name">ImportBeanDefinitionRegistrar</span> <span class="token punctuation">{</span>

 <span class="token doc-comment comment">/** <span class="token punctuation">{</span><span class="token keyword">@link</span> <span class="token reference"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>beans<span class="token punctuation">.</span>factory<span class="token punctuation">.</span>support<span class="token punctuation">.</span></span><span class="token class-name">DefaultSingletonBeanRegistry</span><span class="token punctuation">#</span><span class="token field">getSingleton</span></span><span class="token punctuation">}</span>
  * Register, escalate, and configure the AspectJ auto proxy creator based on the value
  * of the @<span class="token punctuation">{</span><span class="token keyword">@link</span> <span class="token reference"><span class="token class-name">EnableAspectJAutoProxy</span><span class="token punctuation">#</span><span class="token function">proxyTargetClass</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span><span class="token punctuation">}</span> attribute on the importing
  * <span class="token punctuation">{</span><span class="token keyword">@code</span> <span class="token code-section"><span class="token code language-java"><span class="token annotation punctuation">@Configuration</span></span></span><span class="token punctuation">}</span> class.
  */</span>
 <span class="token annotation punctuation">@Override</span>
 <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">registerBeanDefinitions</span><span class="token punctuation">(</span>
   <span class="token class-name">AnnotationMetadata</span> importingClassMetadata<span class="token punctuation">,</span> <span class="token class-name">BeanDefinitionRegistry</span> registry<span class="token punctuation">)</span> <span class="token punctuation">{</span>

  <span class="token class-name">AopConfigUtils</span><span class="token punctuation">.</span><span class="token function">registerAspectJAnnotationAutoProxyCreatorIfNecessary</span><span class="token punctuation">(</span>registry<span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token class-name">AnnotationAttributes</span> enableAspectJAutoProxy <span class="token operator">=</span>
    <span class="token class-name">AnnotationConfigUtils</span><span class="token punctuation">.</span><span class="token function">attributesFor</span><span class="token punctuation">(</span>importingClassMetadata<span class="token punctuation">,</span> <span class="token class-name">EnableAspectJAutoProxy</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>enableAspectJAutoProxy <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
   <span class="token keyword">if</span> <span class="token punctuation">(</span>enableAspectJAutoProxy<span class="token punctuation">.</span><span class="token function">getBoolean</span><span class="token punctuation">(</span><span class="token string">&quot;proxyTargetClass&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token class-name">AopConfigUtils</span><span class="token punctuation">.</span><span class="token function">forceAutoProxyCreatorToUseClassProxying</span><span class="token punctuation">(</span>registry<span class="token punctuation">)</span><span class="token punctuation">;</span>
   <span class="token punctuation">}</span>
   <span class="token keyword">if</span> <span class="token punctuation">(</span>enableAspectJAutoProxy<span class="token punctuation">.</span><span class="token function">getBoolean</span><span class="token punctuation">(</span><span class="token string">&quot;exposeProxy&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token class-name">AopConfigUtils</span><span class="token punctuation">.</span><span class="token function">forceAutoProxyCreatorToExposeProxy</span><span class="token punctuation">(</span>registry<span class="token punctuation">)</span><span class="token punctuation">;</span>
   <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
 <span class="token punctuation">}</span>

<span class="token punctuation">}</span>
</code></pre></div><ul><li>就是@EnableAspectJAutoProxy这个注解，向容器中注册一个名字叫internalAutoProxyCreator，类型是AnnotationAwareAspectJAutoProxyCreator的组件</li><li>这个组件我们在spring ioc中也是看到过的，在BeanPostProcessor接口的实现类中，就有这个类</li></ul><h3 id="annotationawareaspectjautoproxycreator组件提供了什么功能" tabindex="-1"><a class="header-anchor" href="#annotationawareaspectjautoproxycreator组件提供了什么功能" aria-hidden="true">#</a> AnnotationAwareAspectJAutoProxyCreator组件提供了什么功能</h3><ol><li>其实现了BeanPostProcessor：后置处理器（在bean初始化完成前后做事情）</li><li>其实现了BeanFactoryAware：调用setBeanFactory，可以装配BeanFactory</li></ol>`,11),e=[p];function c(l,u){return a(),s("div",null,e)}const r=n(o,[["render",c],["__file","aop_a.html.vue"]]);export{r as default};
