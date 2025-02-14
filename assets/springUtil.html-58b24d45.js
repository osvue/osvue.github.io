import{_ as n,p as s,q as a,a1 as p}from"./framework-d81ad7e5.js";const t={},o=p(`<h2 id="获取bean" tabindex="-1"><a class="header-anchor" href="#获取bean" aria-hidden="true">#</a> 获取Bean</h2><div class="language-java" data-ext="java"><pre class="language-java"><code>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>beans<span class="token punctuation">.</span></span><span class="token class-name">BeansException</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>beans<span class="token punctuation">.</span>factory<span class="token punctuation">.</span></span><span class="token class-name">NoSuchBeanDefinitionException</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>beans<span class="token punctuation">.</span>factory<span class="token punctuation">.</span>config<span class="token punctuation">.</span></span><span class="token class-name">BeanFactoryPostProcessor</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>beans<span class="token punctuation">.</span>factory<span class="token punctuation">.</span>config<span class="token punctuation">.</span></span><span class="token class-name">ConfigurableListableBeanFactory</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>stereotype<span class="token punctuation">.</span></span><span class="token class-name">Component</span></span><span class="token punctuation">;</span>

<span class="token doc-comment comment">/**
 * spring 工具类
 * <span class="token keyword">@author</span>  hzq
 */</span>
<span class="token annotation punctuation">@Component</span>
<span class="token keyword">public</span> <span class="token keyword">final</span> <span class="token keyword">class</span> <span class="token class-name">SpringUtils</span> <span class="token keyword">implements</span> <span class="token class-name">BeanFactoryPostProcessor</span> <span class="token punctuation">{</span>

    <span class="token doc-comment comment">/**
     * Spring应用上下文环境
     */</span>
    <span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token class-name">ConfigurableListableBeanFactory</span> beanFactory<span class="token punctuation">;</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">postProcessBeanFactory</span><span class="token punctuation">(</span><span class="token class-name">ConfigurableListableBeanFactory</span> beanFactory<span class="token punctuation">)</span>
            <span class="token keyword">throws</span> <span class="token class-name">BeansException</span> <span class="token punctuation">{</span>
        <span class="token class-name">SpringUtils</span><span class="token punctuation">.</span>beanFactory <span class="token operator">=</span> beanFactory<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/**
     * 获取对象
     *
     * <span class="token keyword">@param</span> <span class="token parameter">name</span>
     * <span class="token keyword">@return</span> Object 一个以所给名字注册的bean的实例
     * <span class="token keyword">@throws</span> <span class="token reference"><span class="token class-name">BeansException</span></span>
     *
     */</span>
    <span class="token annotation punctuation">@SuppressWarnings</span><span class="token punctuation">(</span><span class="token string">&quot;unchecked&quot;</span><span class="token punctuation">)</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">T</span><span class="token punctuation">&gt;</span></span> <span class="token class-name">T</span> <span class="token function">getBean</span><span class="token punctuation">(</span><span class="token class-name">String</span> name<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">BeansException</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token punctuation">(</span><span class="token class-name">T</span><span class="token punctuation">)</span> beanFactory<span class="token punctuation">.</span><span class="token function">getBean</span><span class="token punctuation">(</span>name<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/**
     * 获取类型为requiredType的对象
     *
     * <span class="token keyword">@param</span> <span class="token parameter">clz</span>
     * <span class="token keyword">@return</span>
     * <span class="token keyword">@throws</span> <span class="token reference"><span class="token class-name">BeansException</span></span>
     *
     */</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">T</span><span class="token punctuation">&gt;</span></span> <span class="token class-name">T</span> <span class="token function">getBean</span><span class="token punctuation">(</span><span class="token class-name">Class</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">T</span><span class="token punctuation">&gt;</span></span> clz<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">BeansException</span> <span class="token punctuation">{</span>
        <span class="token annotation punctuation">@SuppressWarnings</span><span class="token punctuation">(</span><span class="token string">&quot;unchecked&quot;</span><span class="token punctuation">)</span>
        <span class="token class-name">T</span> result <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token class-name">T</span><span class="token punctuation">)</span> beanFactory<span class="token punctuation">.</span><span class="token function">getBean</span><span class="token punctuation">(</span>clz<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> result<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/**
     * 如果BeanFactory包含一个与所给名称匹配的bean定义，则返回true
     *
     * <span class="token keyword">@param</span> <span class="token parameter">name</span>
     * <span class="token keyword">@return</span> boolean
     */</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">boolean</span> <span class="token function">containsBean</span><span class="token punctuation">(</span><span class="token class-name">String</span> name<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> beanFactory<span class="token punctuation">.</span><span class="token function">containsBean</span><span class="token punctuation">(</span>name<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/**
     * 判断以给定名字注册的bean定义是一个singleton还是一个prototype。
     * 如果与给定名字相应的bean定义没有被找到，将会抛出一个异常（NoSuchBeanDefinitionException）
     *
     * <span class="token keyword">@param</span> <span class="token parameter">name</span>
     * <span class="token keyword">@return</span> boolean
     * <span class="token keyword">@throws</span> <span class="token reference"><span class="token class-name">NoSuchBeanDefinitionException</span></span>
     *
     */</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">boolean</span> <span class="token function">isSingleton</span><span class="token punctuation">(</span><span class="token class-name">String</span> name<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">NoSuchBeanDefinitionException</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> beanFactory<span class="token punctuation">.</span><span class="token function">isSingleton</span><span class="token punctuation">(</span>name<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/**
     * <span class="token keyword">@param</span> <span class="token parameter">name</span>
     * <span class="token keyword">@return</span> Class 注册对象的类型
     * <span class="token keyword">@throws</span> <span class="token reference"><span class="token class-name">NoSuchBeanDefinitionException</span></span>
     *
     */</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token class-name">Class</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token operator">?</span><span class="token punctuation">&gt;</span></span> <span class="token function">getType</span><span class="token punctuation">(</span><span class="token class-name">String</span> name<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">NoSuchBeanDefinitionException</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> beanFactory<span class="token punctuation">.</span><span class="token function">getType</span><span class="token punctuation">(</span>name<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/**
     * 如果给定的bean名字在bean定义中有别名，则返回这些别名
     *
     * <span class="token keyword">@param</span> <span class="token parameter">name</span>
     * <span class="token keyword">@return</span>
     * <span class="token keyword">@throws</span> <span class="token reference"><span class="token class-name">NoSuchBeanDefinitionException</span></span>
     *
     */</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token function">getAliases</span><span class="token punctuation">(</span><span class="token class-name">String</span> name<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">NoSuchBeanDefinitionException</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> beanFactory<span class="token punctuation">.</span><span class="token function">getAliases</span><span class="token punctuation">(</span>name<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

<span class="token punctuation">}</span>

</code></pre></div><h3 id="processtor" tabindex="-1"><a class="header-anchor" href="#processtor" aria-hidden="true">#</a> Processtor</h3><div class="language-java" data-ext="java"><pre class="language-java"><code>

<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>beans<span class="token punctuation">.</span></span><span class="token class-name">BeansException</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>context<span class="token punctuation">.</span></span><span class="token class-name">ApplicationContext</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>context<span class="token punctuation">.</span></span><span class="token class-name">ApplicationContextAware</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>stereotype<span class="token punctuation">.</span></span><span class="token class-name">Component</span></span><span class="token punctuation">;</span>

<span class="token doc-comment comment">/**
 * Spring bean工具类
 */</span>
<span class="token annotation punctuation">@Component</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">SpringUtils</span> <span class="token keyword">implements</span> <span class="token class-name">ApplicationContextAware</span> <span class="token punctuation">{</span>

    <span class="token comment">//应用上下文</span>
    <span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token class-name">ApplicationContext</span> <span class="token constant">APPLICATION_CONTEXT</span> <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>

    <span class="token keyword">private</span> <span class="token class-name">SpringUtils</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">setApplicationContext</span><span class="token punctuation">(</span><span class="token class-name">ApplicationContext</span> applicationContext<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">BeansException</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token class-name">SpringUtils</span><span class="token punctuation">.</span><span class="token constant">APPLICATION_CONTEXT</span> <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token class-name">SpringUtils</span><span class="token punctuation">.</span><span class="token constant">APPLICATION_CONTEXT</span> <span class="token operator">=</span> applicationContext<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/**
     * 通过name获取 Bean.
     */</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token class-name">Object</span> <span class="token function">getBean</span><span class="token punctuation">(</span><span class="token class-name">String</span> name<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token class-name">SpringUtils</span><span class="token punctuation">.</span><span class="token constant">APPLICATION_CONTEXT</span><span class="token punctuation">.</span><span class="token function">getBean</span><span class="token punctuation">(</span>name<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/**
     * 通过class获取Bean.
     */</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">T</span><span class="token punctuation">&gt;</span></span> <span class="token class-name">T</span> <span class="token function">getBean</span><span class="token punctuation">(</span><span class="token class-name">Class</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">T</span><span class="token punctuation">&gt;</span></span> clazz<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token class-name">SpringUtils</span><span class="token punctuation">.</span><span class="token constant">APPLICATION_CONTEXT</span><span class="token punctuation">.</span><span class="token function">getBean</span><span class="token punctuation">(</span>clazz<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/**
     * 通过name,以及Clazz返回指定的Bean
     */</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">T</span><span class="token punctuation">&gt;</span></span> <span class="token class-name">T</span> <span class="token function">getBean</span><span class="token punctuation">(</span><span class="token class-name">String</span> name<span class="token punctuation">,</span> <span class="token class-name">Class</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">T</span><span class="token punctuation">&gt;</span></span> clazz<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token class-name">SpringUtils</span><span class="token punctuation">.</span><span class="token constant">APPLICATION_CONTEXT</span><span class="token punctuation">.</span><span class="token function">getBean</span><span class="token punctuation">(</span>name<span class="token punctuation">,</span> clazz<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre></div><h3 id="applicationobjectsupport" tabindex="-1"><a class="header-anchor" href="#applicationobjectsupport" aria-hidden="true">#</a> ApplicationObjectSupport</h3><div class="language-java" data-ext="java"><pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">com<span class="token punctuation">.</span>osvue<span class="token punctuation">.</span>win<span class="token punctuation">.</span>app<span class="token punctuation">.</span>spr</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>beans<span class="token punctuation">.</span></span><span class="token class-name">BeansException</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>context<span class="token punctuation">.</span></span><span class="token class-name">ApplicationContext</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>context<span class="token punctuation">.</span>support<span class="token punctuation">.</span></span><span class="token class-name">ApplicationObjectSupport</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>stereotype<span class="token punctuation">.</span></span><span class="token class-name">Component</span></span><span class="token punctuation">;</span>

<span class="token annotation punctuation">@Component</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">SpringBeanUtil</span> <span class="token keyword">extends</span> <span class="token class-name">ApplicationObjectSupport</span><span class="token punctuation">{</span>

 <span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token class-name">ApplicationContext</span> ac<span class="token punctuation">;</span>
 <span class="token annotation punctuation">@Override</span>
 <span class="token keyword">protected</span> <span class="token keyword">void</span> <span class="token function">initApplicationContext</span><span class="token punctuation">(</span><span class="token class-name">ApplicationContext</span> context<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">BeansException</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token class-name">SpringBeanUtil</span><span class="token punctuation">.</span>ac <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
   <span class="token class-name">SpringBeanUtil</span><span class="token punctuation">.</span>ac <span class="token operator">=</span> context<span class="token punctuation">;</span>
   <span class="token class-name">System</span><span class="token punctuation">.</span>err<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;init application context ....&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">super</span><span class="token punctuation">.</span><span class="token function">initApplicationContext</span><span class="token punctuation">(</span>context<span class="token punctuation">)</span><span class="token punctuation">;</span>
 <span class="token punctuation">}</span>
 
 <span class="token keyword">public</span> <span class="token class-name">ApplicationContext</span> <span class="token function">getAc</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> ac<span class="token punctuation">;</span>
 <span class="token punctuation">}</span>
 <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">setAc</span><span class="token punctuation">(</span><span class="token class-name">ApplicationContext</span> ac<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span>ac <span class="token operator">=</span> ac<span class="token punctuation">;</span>
 <span class="token punctuation">}</span>

 <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token class-name">ApplicationContext</span> <span class="token function">getAppContext</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> ac<span class="token punctuation">;</span>
 <span class="token punctuation">}</span>

 <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token class-name">Object</span> <span class="token function">getBean</span><span class="token punctuation">(</span><span class="token class-name">String</span> name<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token function">getAppContext</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getBean</span><span class="token punctuation">(</span>name<span class="token punctuation">)</span><span class="token punctuation">;</span>
 <span class="token punctuation">}</span>
 
<span class="token punctuation">}</span>
<span class="token comment">/*
需要在spring配置文件中加入：
&lt;!-- 这个主要是用于普通类调用spring对象的配置,可以不配置id属性. --&gt;
&lt;bean id=&quot;SpringBeanUtil    &quot; class=&quot;com.osvue.win.app.spr.SpringBeanUtil   &quot;&gt;&lt;/bean&gt;

*/</span>
</code></pre></div><ul><li>继承自抽象类WebApplicationObjectSupport</li><li>实现接口ApplicationContextAware</li></ul>`,7),e=[o];function c(l,k){return s(),a("div",null,e)}const i=n(t,[["render",c],["__file","springUtil.html.vue"]]);export{i as default};
