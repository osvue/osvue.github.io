import{_ as n,p as a,q as s,a1 as t}from"./framework-d81ad7e5.js";const p={},o=t(`<ul><li><strong>base hook</strong></li></ul><div class="language-properties" data-ext="properties"><pre class="language-properties"><code>
<span class="token comment">###配置文件包括1个主数据源和多个数据源，</span>
<span class="token comment">###其中主数据源在Spring中的beanName默认为dataSource，</span>
<span class="token comment">###另外几个数据源的beanName分包为：ds1、ds2、ds3</span>
<span class="token comment">###其中datasource的type属性可以具体指定到我们需要的数据源上面，</span>
<span class="token comment">###不指定情况下默认为：org.apache.tomcat.jdbc.pool.DataSource</span>
<span class="token comment">###当然你也可以把这些数据源配置到主dataSource数据库中，然后读取数据库生成多数据源。当然这样做的必要性并不大，难不成数据源还会经常变吗。</span>
<span class="token comment">########################################################</span>
 
<span class="token comment"># 主数据源，默认的</span>
<span class="token comment">#spring.datasource.type=com.zaxxer.hikari.HikariDataSource</span>
<span class="token key attr-name">spring.datasource.driverClassName</span><span class="token punctuation">=</span><span class="token value attr-value">com.mysql.jdbc.Driver</span>
<span class="token key attr-name">spring.datasource.url</span><span class="token punctuation">=</span><span class="token value attr-value">jdbc:mysql://localhost:3306/test</span>
<span class="token key attr-name">spring.datasource.username</span><span class="token punctuation">=</span><span class="token value attr-value">root</span>
<span class="token key attr-name">spring.datasource.password</span><span class="token punctuation">=</span><span class="token value attr-value">root</span>

<span class="token comment"># 更多数据源</span>
<span class="token key attr-name">custom.datasource.names</span><span class="token punctuation">=</span><span class="token value attr-value">ds1,ds2,ds3</span>

<span class="token comment">#custom.datasource.ds1.type=com.zaxxer.hikari.HikariDataSource</span>
<span class="token key attr-name">custom.datasource.ds1.driverClassName</span> <span class="token punctuation">=</span><span class="token value attr-value">com.mysql.jdbc.Driver</span>
<span class="token key attr-name">custom.datasource.ds1.url</span><span class="token punctuation">=</span><span class="token value attr-value">jdbc:mysql://localhost:3306/test1</span>
<span class="token key attr-name">custom.datasource.ds1.username</span><span class="token punctuation">=</span><span class="token value attr-value">root</span>
<span class="token key attr-name">custom.datasource.ds1.password</span><span class="token punctuation">=</span><span class="token value attr-value">root</span>
 
<span class="token comment">#custom.datasource.ds2.type=com.zaxxer.hikari.HikariDataSource</span>
<span class="token key attr-name">custom.datasource.ds2.driverClassName</span> <span class="token punctuation">=</span><span class="token value attr-value">com.mysql.jdbc.Driver</span>
<span class="token key attr-name">custom.datasource.ds2.url</span><span class="token punctuation">=</span><span class="token value attr-value">jdbc:mysql://localhost:3306/test</span>
<span class="token key attr-name">custom.datasource.ds2.username</span><span class="token punctuation">=</span><span class="token value attr-value">root</span>
<span class="token key attr-name">custom.datasource.ds2.password</span><span class="token punctuation">=</span><span class="token value attr-value">root</span>
 
<span class="token key attr-name">custom.datasource.ds3.type</span><span class="token punctuation">=</span><span class="token value attr-value">com.zaxxer.hikari.HikariDataSource</span>
<span class="token key attr-name">custom.datasource.ds3.driverClassName</span> <span class="token punctuation">=</span><span class="token value attr-value">com.mysql.jdbc.Driver</span>
<span class="token key attr-name">custom.datasource.ds3.url</span><span class="token punctuation">=</span><span class="token value attr-value">jdbc:mysql://localhost:3306/test</span>
<span class="token key attr-name">custom.datasource.ds3.username</span><span class="token punctuation">=</span><span class="token value attr-value">root</span>
<span class="token key attr-name">custom.datasource.ds3.password</span><span class="token punctuation">=</span><span class="token value attr-value">root</span>
 
<span class="token comment"># 下面为连接池的补充设置，应用到上面所有数据源中</span>
<span class="token key attr-name">spring.datasource.maximum-pool-size</span><span class="token punctuation">=</span><span class="token value attr-value">100</span>
<span class="token key attr-name">spring.datasource.max-idle</span><span class="token punctuation">=</span><span class="token value attr-value">10</span>
<span class="token key attr-name">spring.datasource.max-wait</span><span class="token punctuation">=</span><span class="token value attr-value">10000</span>
<span class="token key attr-name">spring.datasource.min-idle</span><span class="token punctuation">=</span><span class="token value attr-value">5</span>
<span class="token key attr-name">spring.datasource.initial-size</span><span class="token punctuation">=</span><span class="token value attr-value">5</span>
<span class="token key attr-name">spring.datasource.validation-query</span><span class="token punctuation">=</span><span class="token value attr-value">SELECT 1</span>
<span class="token key attr-name">spring.datasource.test-on-borrow</span><span class="token punctuation">=</span><span class="token value attr-value">false</span>
<span class="token key attr-name">spring.datasource.test-while-idle</span><span class="token punctuation">=</span><span class="token value attr-value">true</span>
<span class="token key attr-name">spring.datasource.time-between-eviction-runs-millis</span><span class="token punctuation">=</span><span class="token value attr-value">18800</span>
 
</code></pre></div><h3 id="核心定义" tabindex="-1"><a class="header-anchor" href="#核心定义" aria-hidden="true">#</a> 核心定义</h3><ul><li><strong>setEnvironment()--&gt;postProcessBeanDefinitionRegistry() --&gt; postProcessBeanFactory()</strong></li></ul><h3 id="动态数据源路由类" tabindex="-1"><a class="header-anchor" href="#动态数据源路由类" aria-hidden="true">#</a> 动态数据源路由类</h3><ul><li><strong>AbstractRoutingDataSource</strong><ul><li>动态数据源能进行自动切换的核心就是spring底层提供了AbstractRoutingDataSource类进行数据源的路由的，</li><li>继承这个类，实现里面的方法即可实现我们想要的，这里主要是实现方法：determineCurrentLookupKey（），而此方法只需要返回一个数据库的名称即可，</li><li>所以我们核心的是有一个类来管理数据源的线程池，这个类才是动态数据源的核心处理类。还有另外就是我们使用aop技术在执行事务方法前进行数据源的切换。</li></ul></li></ul><h3 id="实现" tabindex="-1"><a class="header-anchor" href="#实现" aria-hidden="true">#</a> 实现</h3><div class="language-java" data-ext="java"><pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">com<span class="token punctuation">.</span>osvue<span class="token punctuation">.</span>win<span class="token punctuation">.</span>app<span class="token punctuation">.</span>spr<span class="token punctuation">.</span>config</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>jdbc<span class="token punctuation">.</span>datasource<span class="token punctuation">.</span>lookup<span class="token punctuation">.</span></span><span class="token class-name">AbstractRoutingDataSource</span></span><span class="token punctuation">;</span>
<span class="token doc-comment comment">/**
 * 
 * @ClassName:  DynamicDataSource   
 * @Description:TODO(动态路由数据源)   
 * <span class="token keyword">@author</span>: hzq 
 * <span class="token keyword">@date</span>:   2022-7-26 10:03:15    
 * @Copyright: 2022
 */</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">DynamicDataSource</span> <span class="token keyword">extends</span> <span class="token class-name">AbstractRoutingDataSource</span><span class="token punctuation">{</span>
   <span class="token doc-comment comment">/**
   *代码中的determineCurrentLookupKey方法取得一个字符串，
   *该字符串将与配置文件中的相应字符串进行匹配以定位数据源，配置文件，即applicationContext.xml文件中需要要如下代码：(non-Javadoc)
  * 
  * Title: determineCurrentLookupKey   
  * Description:
  * <span class="token keyword">@return</span>   
  * <span class="token keyword">@see</span> <span class="token reference"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>jdbc<span class="token punctuation">.</span>datasource<span class="token punctuation">.</span>lookup<span class="token punctuation">.</span></span><span class="token class-name">AbstractRoutingDataSource</span><span class="token punctuation">#</span><span class="token function">determineCurrentLookupKey</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
  */</span>
 <span class="token annotation punctuation">@Override</span>
 <span class="token keyword">protected</span> <span class="token class-name">Object</span> <span class="token function">determineCurrentLookupKey</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">/*
      * DynamicDataSourceContextHolder代码中使用setDataSourceType
           *设置当前的数据源，在路由类中使用getDataSourceType进行获取，
           * 交给AbstractRoutingDataSource进行注入使用。
         */</span>

        <span class="token keyword">return</span> <span class="token class-name">DynamicDataSourceContextHolder</span><span class="token punctuation">.</span><span class="token function">getDataSourceType</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
 
 <span class="token punctuation">}</span>

<span class="token punctuation">}</span>



<span class="token keyword">package</span> <span class="token namespace">com<span class="token punctuation">.</span>osvue<span class="token punctuation">.</span>win<span class="token punctuation">.</span>app<span class="token punctuation">.</span>spr<span class="token punctuation">.</span>config</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>util<span class="token punctuation">.</span></span><span class="token class-name">ArrayList</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>util<span class="token punctuation">.</span></span><span class="token class-name">List</span></span><span class="token punctuation">;</span>

<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">DynamicDataSourceContextHolder</span> <span class="token punctuation">{</span>
 <span class="token comment">/*
  * 
  * 当使用ThreadLocal维护变量时，ThreadLocal为每个使用该变量的线程提供独立的变量副本，
  * 
  * 所以每一个线程都可以独立地改变自己的副本，而不会影响其它线程所对应的副本。
  * 
  */</span>

 <span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token keyword">final</span> <span class="token class-name">ThreadLocal</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">&gt;</span></span> contextHolder <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ThreadLocal</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

 <span class="token comment">/*
  * 
  * 管理所有的数据源id;
  * 
  * 主要是为了判断数据源是否存在;
  * 
  */</span>

 <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">&gt;</span></span> dataSourceIds <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ArrayList</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

 <span class="token doc-comment comment">/**
  * 
  * 使用setDataSourceType设置当前的
  * 
  * <span class="token keyword">@param</span> <span class="token parameter">dataSourceType</span>
  * 
  */</span>

 <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">setDataSourceType</span><span class="token punctuation">(</span><span class="token class-name">String</span> dataSourceType<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  contextHolder<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span>dataSourceType<span class="token punctuation">)</span><span class="token punctuation">;</span>
 <span class="token punctuation">}</span>

 <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token class-name">String</span> <span class="token function">getDataSourceType</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> contextHolder<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
 <span class="token punctuation">}</span>

 <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">clearDataSourceType</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  contextHolder<span class="token punctuation">.</span><span class="token function">remove</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
 <span class="token punctuation">}</span>

 <span class="token doc-comment comment">/**
  * 
  * 判断指定DataSrouce当前是否存在
  *
  * <span class="token keyword">@param</span> <span class="token parameter">dataSourceId</span>
  * <span class="token keyword">@return</span>
  * 
  * 
  */</span>

 <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">boolean</span> <span class="token function">containsDataSource</span><span class="token punctuation">(</span><span class="token class-name">String</span> dataSourceId<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> dataSourceIds<span class="token punctuation">.</span><span class="token function">contains</span><span class="token punctuation">(</span>dataSourceId<span class="token punctuation">)</span><span class="token punctuation">;</span>
 <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre></div><h3 id="dynamicdatasourceregister" tabindex="-1"><a class="header-anchor" href="#dynamicdatasourceregister" aria-hidden="true">#</a> DynamicDataSourceRegister</h3><div class="language-java" data-ext="java"><pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">com<span class="token punctuation">.</span>osvue<span class="token punctuation">.</span>win<span class="token punctuation">.</span>app<span class="token punctuation">.</span>spr<span class="token punctuation">.</span>config</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>beans<span class="token punctuation">.</span></span><span class="token class-name">MutablePropertyValues</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>beans<span class="token punctuation">.</span></span><span class="token class-name">PropertyValues</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>beans<span class="token punctuation">.</span>factory<span class="token punctuation">.</span>support<span class="token punctuation">.</span></span><span class="token class-name">BeanDefinitionRegistry</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>beans<span class="token punctuation">.</span>factory<span class="token punctuation">.</span>support<span class="token punctuation">.</span></span><span class="token class-name">GenericBeanDefinition</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>boot<span class="token punctuation">.</span>jdbc<span class="token punctuation">.</span></span><span class="token class-name">DataSourceBuilder</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>context<span class="token punctuation">.</span></span><span class="token class-name">EnvironmentAware</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>context<span class="token punctuation">.</span>annotation<span class="token punctuation">.</span></span><span class="token class-name">ImportBeanDefinitionRegistrar</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>core<span class="token punctuation">.</span>convert<span class="token punctuation">.</span></span><span class="token class-name">ConversionService</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>core<span class="token punctuation">.</span>convert<span class="token punctuation">.</span>support<span class="token punctuation">.</span></span><span class="token class-name">DefaultConversionService</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>core<span class="token punctuation">.</span>env<span class="token punctuation">.</span></span><span class="token class-name">Environment</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>core<span class="token punctuation">.</span>type<span class="token punctuation">.</span></span><span class="token class-name">AnnotationMetadata</span></span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>util<span class="token punctuation">.</span></span><span class="token class-name">HashMap</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>util<span class="token punctuation">.</span></span><span class="token class-name">Map</span></span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token import"><span class="token namespace">javax<span class="token punctuation">.</span>sql<span class="token punctuation">.</span></span><span class="token class-name">DataSource</span></span><span class="token punctuation">;</span>

<span class="token doc-comment comment">/**
 * 
 * @ClassName: DynamicDataSourceRegister
 * @Description:TODO(这里用一句话描述这个类的作用)
 * <span class="token keyword">@author</span>: hzq
 * <span class="token keyword">@date</span>: 2022-7-26 10:41:25
 * @Copyright: 2022
 */</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">DynamicDataSourceRegister</span> <span class="token keyword">implements</span> <span class="token class-name">ImportBeanDefinitionRegistrar</span><span class="token punctuation">,</span> <span class="token class-name">EnvironmentAware</span> <span class="token punctuation">{</span>

 <span class="token comment">// 如配置文件中未指定数据源类型，使用该默认值</span>

 <span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token keyword">final</span> <span class="token class-name">Object</span> <span class="token constant">DATASOURCE_TYPE_DEFAULT</span> <span class="token operator">=</span> <span class="token string">&quot;org.apache.tomcat.jdbc.pool.DataSource&quot;</span><span class="token punctuation">;</span>

 <span class="token keyword">private</span> <span class="token class-name">ConversionService</span> conversionService <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">DefaultConversionService</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

 <span class="token keyword">private</span> <span class="token class-name">PropertyValues</span> dataSourcePropertyValues<span class="token punctuation">;</span>

 <span class="token comment">// 默认数据源</span>

 <span class="token keyword">private</span> <span class="token class-name">DataSource</span> defaultDataSource<span class="token punctuation">;</span>

 <span class="token keyword">private</span> <span class="token class-name">Map</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">,</span> <span class="token class-name">DataSource</span><span class="token punctuation">&gt;</span></span> customDataSources <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">HashMap</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">,</span> <span class="token class-name">DataSource</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

 <span class="token doc-comment comment">/**
  * 
  * 加载多数据源配置
  * 
  */</span>

 <span class="token annotation punctuation">@Override</span>
 <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">setEnvironment</span><span class="token punctuation">(</span><span class="token class-name">Environment</span> environment<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;DynamicDataSourceRegister.setEnvironment()&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token function">initDefaultDataSource</span><span class="token punctuation">(</span>environment<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token function">initCustomDataSources</span><span class="token punctuation">(</span>environment<span class="token punctuation">)</span><span class="token punctuation">;</span>

 <span class="token punctuation">}</span>

 <span class="token doc-comment comment">/**
  * 
  * 加载主数据源配置.
  * 
  * <span class="token keyword">@param</span> <span class="token parameter">env</span>
  * 
  */</span>

 <span class="token keyword">private</span> <span class="token keyword">void</span> <span class="token function">initDefaultDataSource</span><span class="token punctuation">(</span><span class="token class-name">Environment</span> env<span class="token punctuation">)</span> <span class="token punctuation">{</span>

  <span class="token comment">// 读取主数据源</span>
  <span class="token class-name">Map</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">,</span> <span class="token class-name">Object</span><span class="token punctuation">&gt;</span></span> dsMap <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">HashMap</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">,</span> <span class="token class-name">Object</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token comment">/*
   * RelaxedPropertyResolver propertyResolver =new
   * RelaxedPropertyResolver(env,&quot;spring.datasource.&quot;); dsMap.put(&quot;type&quot;,
   * propertyResolver.getProperty(&quot;type&quot;)); dsMap.put(&quot;driverClassName&quot;,
   * propertyResolver.getProperty(&quot;driverClassName&quot;)); dsMap.put(&quot;url&quot;,
   * propertyResolver.getProperty(&quot;url&quot;)); dsMap.put(&quot;username&quot;,
   * propertyResolver.getProperty(&quot;username&quot;)); dsMap.put(&quot;password&quot;,
   * propertyResolver.getProperty(&quot;password&quot;));
   */</span>

  <span class="token comment">// 创建数据源;</span>

  defaultDataSource <span class="token operator">=</span> <span class="token function">buildDataSource</span><span class="token punctuation">(</span>dsMap<span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token function">dataBinder</span><span class="token punctuation">(</span>defaultDataSource<span class="token punctuation">,</span> env<span class="token punctuation">)</span><span class="token punctuation">;</span>

 <span class="token punctuation">}</span>

 <span class="token doc-comment comment">/**
  * 
  * @Title: initCustomDataSources @Description: TODO(初始化更多数据源) @param: @param
  *         env @return: void @throws
  */</span>
 <span class="token keyword">private</span> <span class="token keyword">void</span> <span class="token function">initCustomDataSources</span><span class="token punctuation">(</span><span class="token class-name">Environment</span> env<span class="token punctuation">)</span> <span class="token punctuation">{</span>

  <span class="token comment">// 读取配置文件获取更多数据源，也可以通过defaultDataSource读取数据库获取更多数据源</span>
  <span class="token class-name">RelaxedPropertyResolver</span> propertyResolver <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">RelaxedPropertyResolver</span><span class="token punctuation">(</span>env<span class="token punctuation">,</span> <span class="token string">&quot;custom.datasource.&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token class-name">String</span> dsPrefixs <span class="token operator">=</span> propertyResolver<span class="token punctuation">.</span><span class="token function">getProperty</span><span class="token punctuation">(</span><span class="token string">&quot;names&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token class-name">String</span> dsPrefix <span class="token operator">:</span> dsPrefixs<span class="token punctuation">.</span><span class="token function">split</span><span class="token punctuation">(</span><span class="token string">&quot;,&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token comment">// 多个数据源</span>
   <span class="token class-name">Map</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">,</span> <span class="token class-name">Object</span><span class="token punctuation">&gt;</span></span> dsMap <span class="token operator">=</span> propertyResolver<span class="token punctuation">.</span><span class="token function">getSubProperties</span><span class="token punctuation">(</span>dsPrefix <span class="token operator">+</span> <span class="token string">&quot;.&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
   <span class="token class-name">DataSource</span> ds <span class="token operator">=</span> <span class="token function">buildDataSource</span><span class="token punctuation">(</span>dsMap<span class="token punctuation">)</span><span class="token punctuation">;</span>
   customDataSources<span class="token punctuation">.</span><span class="token function">put</span><span class="token punctuation">(</span>dsPrefix<span class="token punctuation">,</span> ds<span class="token punctuation">)</span><span class="token punctuation">;</span>
   <span class="token function">dataBinder</span><span class="token punctuation">(</span>ds<span class="token punctuation">,</span> env<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
 <span class="token punctuation">}</span>

 <span class="token doc-comment comment">/**
  * 
  * @Title: buildDataSource @Description: TODO(创建datasource.) @param: @param
  * dsMap @param: @return @return: DataSource @throws
  */</span>
 <span class="token annotation punctuation">@SuppressWarnings</span><span class="token punctuation">(</span><span class="token string">&quot;unchecked&quot;</span><span class="token punctuation">)</span>
 <span class="token keyword">public</span> <span class="token class-name">DataSource</span> <span class="token function">buildDataSource</span><span class="token punctuation">(</span><span class="token class-name">Map</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">,</span> <span class="token class-name">Object</span><span class="token punctuation">&gt;</span></span> dsMap<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token class-name">Object</span> type <span class="token operator">=</span> dsMap<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">&quot;type&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>type <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
   type <span class="token operator">=</span> <span class="token constant">DATASOURCE_TYPE_DEFAULT</span><span class="token punctuation">;</span><span class="token comment">// 默认DataSource</span>
  <span class="token punctuation">}</span>
  <span class="token class-name">Class</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token operator">?</span> <span class="token keyword">extends</span> <span class="token class-name">DataSource</span><span class="token punctuation">&gt;</span></span> dataSourceType<span class="token punctuation">;</span>
  <span class="token keyword">try</span> <span class="token punctuation">{</span>
   dataSourceType <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token class-name">Class</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token operator">?</span> <span class="token keyword">extends</span> <span class="token class-name">DataSource</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">)</span> <span class="token class-name">Class</span><span class="token punctuation">.</span><span class="token function">forName</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">)</span> type<span class="token punctuation">)</span><span class="token punctuation">;</span>
   <span class="token class-name">String</span> driverClassName <span class="token operator">=</span> dsMap<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">&quot;driverClassName&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
   <span class="token class-name">String</span> url <span class="token operator">=</span> dsMap<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">&quot;url&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
   <span class="token class-name">String</span> username <span class="token operator">=</span> dsMap<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">&quot;username&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
   <span class="token class-name">String</span> password <span class="token operator">=</span> dsMap<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">&quot;password&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
   <span class="token class-name">DataSourceBuilder</span> factory <span class="token operator">=</span> <span class="token class-name">DataSourceBuilder</span><span class="token punctuation">.</span><span class="token function">create</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">driverClassName</span><span class="token punctuation">(</span>driverClassName<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">url</span><span class="token punctuation">(</span>url<span class="token punctuation">)</span>
     <span class="token punctuation">.</span><span class="token function">username</span><span class="token punctuation">(</span>username<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">password</span><span class="token punctuation">(</span>password<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">type</span><span class="token punctuation">(</span>dataSourceType<span class="token punctuation">)</span><span class="token punctuation">;</span>

   <span class="token keyword">return</span> factory<span class="token punctuation">.</span><span class="token function">build</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">ClassNotFoundException</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
   e<span class="token punctuation">.</span><span class="token function">printStackTrace</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">return</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
 <span class="token punctuation">}</span>

 <span class="token doc-comment comment">/**
  * 
  * 为DataSource绑定更多数据
  * 
  * <span class="token keyword">@param</span> <span class="token parameter">dataSource</span>
  * 
  * <span class="token keyword">@param</span> <span class="token parameter">env</span>
  * 
  */</span>

 <span class="token keyword">private</span> <span class="token keyword">void</span> <span class="token function">dataBinder</span><span class="token punctuation">(</span><span class="token class-name">DataSource</span> dataSource<span class="token punctuation">,</span> <span class="token class-name">Environment</span> env<span class="token punctuation">)</span> <span class="token punctuation">{</span>

  <span class="token class-name">RelaxedDataBinder</span> dataBinder <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">RelaxedDataBinder</span><span class="token punctuation">(</span>dataSource<span class="token punctuation">)</span><span class="token punctuation">;</span>
  dataBinder<span class="token punctuation">.</span><span class="token function">setConversionService</span><span class="token punctuation">(</span>conversionService<span class="token punctuation">)</span><span class="token punctuation">;</span>
  dataBinder<span class="token punctuation">.</span><span class="token function">setIgnoreNestedProperties</span><span class="token punctuation">(</span><span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">// false</span>
  dataBinder<span class="token punctuation">.</span><span class="token function">setIgnoreInvalidFields</span><span class="token punctuation">(</span><span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">// false</span>
  dataBinder<span class="token punctuation">.</span><span class="token function">setIgnoreUnknownFields</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">// true</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>dataSourcePropertyValues <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
   <span class="token class-name">Map</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">,</span> <span class="token class-name">Object</span><span class="token punctuation">&gt;</span></span> rpr <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">RelaxedPropertyResolver</span><span class="token punctuation">(</span>env<span class="token punctuation">,</span> <span class="token string">&quot;spring.datasource&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getSubProperties</span><span class="token punctuation">(</span><span class="token string">&quot;.&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
   <span class="token class-name">Map</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">,</span> <span class="token class-name">Object</span><span class="token punctuation">&gt;</span></span> values <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">HashMap</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span>rpr<span class="token punctuation">)</span><span class="token punctuation">;</span>
   <span class="token comment">// 排除已经设置的属性</span>
   values<span class="token punctuation">.</span><span class="token function">remove</span><span class="token punctuation">(</span><span class="token string">&quot;type&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

   values<span class="token punctuation">.</span><span class="token function">remove</span><span class="token punctuation">(</span><span class="token string">&quot;driverClassName&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

   values<span class="token punctuation">.</span><span class="token function">remove</span><span class="token punctuation">(</span><span class="token string">&quot;url&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

   values<span class="token punctuation">.</span><span class="token function">remove</span><span class="token punctuation">(</span><span class="token string">&quot;username&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

   values<span class="token punctuation">.</span><span class="token function">remove</span><span class="token punctuation">(</span><span class="token string">&quot;password&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

   dataSourcePropertyValues <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">MutablePropertyValues</span><span class="token punctuation">(</span>values<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  dataBinder<span class="token punctuation">.</span><span class="token function">bind</span><span class="token punctuation">(</span>dataSourcePropertyValues<span class="token punctuation">)</span><span class="token punctuation">;</span>

 <span class="token punctuation">}</span>

 <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">registerBeanDefinitions</span><span class="token punctuation">(</span><span class="token class-name">AnnotationMetadata</span> importingClassMetadata<span class="token punctuation">,</span> <span class="token class-name">BeanDefinitionRegistry</span> registry<span class="token punctuation">)</span> <span class="token punctuation">{</span>

  <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;DynamicDataSourceRegister.registerBeanDefinitions()&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token class-name">Map</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Object</span><span class="token punctuation">,</span> <span class="token class-name">Object</span><span class="token punctuation">&gt;</span></span> targetDataSources <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">HashMap</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Object</span><span class="token punctuation">,</span> <span class="token class-name">Object</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token comment">// 将主数据源添加到更多数据源中</span>

  targetDataSources<span class="token punctuation">.</span><span class="token function">put</span><span class="token punctuation">(</span><span class="token string">&quot;dataSource&quot;</span><span class="token punctuation">,</span> defaultDataSource<span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token class-name">DynamicDataSourceContextHolder</span><span class="token punctuation">.</span>dataSourceIds<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token string">&quot;dataSource&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token comment">// 添加更多数据源</span>

  targetDataSources<span class="token punctuation">.</span><span class="token function">putAll</span><span class="token punctuation">(</span>customDataSources<span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token class-name">String</span> key <span class="token operator">:</span> customDataSources<span class="token punctuation">.</span><span class="token function">keySet</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>

   <span class="token class-name">DynamicDataSourceContextHolder</span><span class="token punctuation">.</span>dataSourceIds<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>key<span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token punctuation">}</span>

  <span class="token comment">// 创建DynamicDataSource</span>

  <span class="token class-name">GenericBeanDefinition</span> beanDefinition <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">GenericBeanDefinition</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  beanDefinition<span class="token punctuation">.</span><span class="token function">setBeanClass</span><span class="token punctuation">(</span><span class="token class-name">DynamicDataSource</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  beanDefinition<span class="token punctuation">.</span><span class="token function">setSynthetic</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token class-name">MutablePropertyValues</span> mpv <span class="token operator">=</span> beanDefinition<span class="token punctuation">.</span><span class="token function">getPropertyValues</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token comment">// 添加属性：AbstractRoutingDataSource.defaultTargetDataSource</span>

  mpv<span class="token punctuation">.</span><span class="token function">addPropertyValue</span><span class="token punctuation">(</span><span class="token string">&quot;defaultTargetDataSource&quot;</span><span class="token punctuation">,</span> defaultDataSource<span class="token punctuation">)</span><span class="token punctuation">;</span>

  mpv<span class="token punctuation">.</span><span class="token function">addPropertyValue</span><span class="token punctuation">(</span><span class="token string">&quot;targetDataSources&quot;</span><span class="token punctuation">,</span> targetDataSources<span class="token punctuation">)</span><span class="token punctuation">;</span>

  registry<span class="token punctuation">.</span><span class="token function">registerBeanDefinition</span><span class="token punctuation">(</span><span class="token string">&quot;dataSource&quot;</span><span class="token punctuation">,</span> beanDefinition<span class="token punctuation">)</span><span class="token punctuation">;</span>

 <span class="token punctuation">}</span>

<span class="token punctuation">}</span>
</code></pre></div><h3 id="数据源注解" tabindex="-1"><a class="header-anchor" href="#数据源注解" aria-hidden="true">#</a> 数据源注解</h3><div class="language-java" data-ext="java"><pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">com<span class="token punctuation">.</span>osvue<span class="token punctuation">.</span>win<span class="token punctuation">.</span>app<span class="token punctuation">.</span>spr<span class="token punctuation">.</span>config<span class="token punctuation">.</span>anno</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>lang<span class="token punctuation">.</span>annotation<span class="token punctuation">.</span></span><span class="token class-name">Documented</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>lang<span class="token punctuation">.</span>annotation<span class="token punctuation">.</span></span><span class="token class-name">ElementType</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>lang<span class="token punctuation">.</span>annotation<span class="token punctuation">.</span></span><span class="token class-name">Retention</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>lang<span class="token punctuation">.</span>annotation<span class="token punctuation">.</span></span><span class="token class-name">RetentionPolicy</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>lang<span class="token punctuation">.</span>annotation<span class="token punctuation">.</span></span><span class="token class-name">Target</span></span><span class="token punctuation">;</span>

<span class="token doc-comment comment">/**
 * 
 * @ClassName:  TargetDataSource   
 * @Description:TODO(数据源注解 )   
 * <span class="token keyword">@author</span>: hzq 
 * <span class="token keyword">@date</span>:   2022-7-26 10:31:34    
 * @Copyright: 2022
 */</span>
<span class="token annotation punctuation">@Target</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token class-name">ElementType</span><span class="token punctuation">.</span><span class="token constant">METHOD</span><span class="token punctuation">,</span> <span class="token class-name">ElementType</span><span class="token punctuation">.</span><span class="token constant">TYPE</span> <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token annotation punctuation">@Retention</span><span class="token punctuation">(</span><span class="token class-name">RetentionPolicy</span><span class="token punctuation">.</span><span class="token constant">RUNTIME</span><span class="token punctuation">)</span>
<span class="token annotation punctuation">@Documented</span>
<span class="token keyword">public</span> <span class="token annotation punctuation">@interface</span> <span class="token class-name">TargetDataSource</span> <span class="token punctuation">{</span>

 <span class="token class-name">String</span> <span class="token function">value</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token punctuation">}</span>
</code></pre></div><h3 id="数据源切面" tabindex="-1"><a class="header-anchor" href="#数据源切面" aria-hidden="true">#</a> 数据源切面</h3><div class="language-java" data-ext="java"><pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">com<span class="token punctuation">.</span>osvue<span class="token punctuation">.</span>win<span class="token punctuation">.</span>app<span class="token punctuation">.</span>spr<span class="token punctuation">.</span>config</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>aspectj<span class="token punctuation">.</span>lang<span class="token punctuation">.</span></span><span class="token class-name">JoinPoint</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>aspectj<span class="token punctuation">.</span>lang<span class="token punctuation">.</span>annotation<span class="token punctuation">.</span></span><span class="token class-name">After</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>aspectj<span class="token punctuation">.</span>lang<span class="token punctuation">.</span>annotation<span class="token punctuation">.</span></span><span class="token class-name">Aspect</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>aspectj<span class="token punctuation">.</span>lang<span class="token punctuation">.</span>annotation<span class="token punctuation">.</span></span><span class="token class-name">Before</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>core<span class="token punctuation">.</span>annotation<span class="token punctuation">.</span></span><span class="token class-name">Order</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>stereotype<span class="token punctuation">.</span></span><span class="token class-name">Component</span></span><span class="token punctuation">;</span>

<span class="token annotation punctuation">@Aspect</span>
<span class="token annotation punctuation">@Order</span><span class="token punctuation">(</span><span class="token operator">-</span><span class="token number">10</span><span class="token punctuation">)</span> <span class="token comment">// 保证该AOP在@Transactional之前执行</span>
<span class="token annotation punctuation">@Component</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">DynamicDataSourceAspect</span> <span class="token punctuation">{</span>

 <span class="token comment">/*
  * @Before(&quot;@annotation(ds)&quot;) 的意思是：
  *
  * @Before：在方法执行之前进行执行：
  * 
  * @annotation(targetDataSource)： 会拦截注解targetDataSource的方法，否则不拦截;
  */</span>

 <span class="token annotation punctuation">@Before</span><span class="token punctuation">(</span><span class="token string">&quot;@annotation(targetDataSource)&quot;</span><span class="token punctuation">)</span>
 <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">changeDataSource</span><span class="token punctuation">(</span><span class="token class-name">JoinPoint</span> point<span class="token punctuation">,</span> <span class="token class-name">TargetDataSource</span> targetDataSource<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">Throwable</span> <span class="token punctuation">{</span>
  <span class="token comment">// 获取当前的指定的数据源;</span>
  <span class="token class-name">String</span> dsId <span class="token operator">=</span> targetDataSource<span class="token punctuation">.</span><span class="token function">value</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token comment">// 如果不在我们注入的所有的数据源范围之内，那么输出警告信息，系统自动使用默认的数据源。</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span><span class="token class-name">DynamicDataSourceContextHolder</span><span class="token punctuation">.</span><span class="token function">containsDataSource</span><span class="token punctuation">(</span>dsId<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
   <span class="token class-name">System</span><span class="token punctuation">.</span>err<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;数据源[{}]不存在，使用默认数据源 &gt; {}&quot;</span> <span class="token operator">+</span> targetDataSource<span class="token punctuation">.</span><span class="token function">value</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">+</span> point<span class="token punctuation">.</span><span class="token function">getSignature</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
   <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;UseDataSource : {} &gt; {}&quot;</span> <span class="token operator">+</span> targetDataSource<span class="token punctuation">.</span><span class="token function">value</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">+</span> point<span class="token punctuation">.</span><span class="token function">getSignature</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
   <span class="token comment">// 找到的话，那么设置到动态数据源上下文中。</span>
   <span class="token class-name">DynamicDataSourceContextHolder</span><span class="token punctuation">.</span><span class="token function">setDataSourceType</span><span class="token punctuation">(</span>targetDataSource<span class="token punctuation">.</span><span class="token function">value</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token punctuation">}</span>

 <span class="token punctuation">}</span>

 <span class="token annotation punctuation">@After</span><span class="token punctuation">(</span><span class="token string">&quot;@annotation(targetDataSource)&quot;</span><span class="token punctuation">)</span>

 <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">restoreDataSource</span><span class="token punctuation">(</span><span class="token class-name">JoinPoint</span> point<span class="token punctuation">,</span> <span class="token class-name">TargetDataSource</span> targetDataSource<span class="token punctuation">)</span> <span class="token punctuation">{</span>

  <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;RevertDataSource : {} &gt; {}&quot;</span> <span class="token operator">+</span> targetDataSource<span class="token punctuation">.</span><span class="token function">value</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">+</span> point<span class="token punctuation">.</span><span class="token function">getSignature</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token comment">// 方法执行完毕之后，销毁当前数据源信息，进行垃圾回收。</span>

  <span class="token class-name">DynamicDataSourceContextHolder</span><span class="token punctuation">.</span><span class="token function">clearDataSourceType</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

 <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre></div>`,14),e=[o];function c(u,l){return a(),s("div",null,e)}const i=n(p,[["render",c],["__file","multidba.html.vue"]]);export{i as default};
