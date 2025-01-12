import{_ as n,p as s,q as a,a1 as t}from"./framework-d81ad7e5.js";const p={},e=t(`<div class="language-xml" data-ext="xml"><pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>org.springframework.boot<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>spring-boot-starter-data-redis<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><div class="language-yaml" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">server</span><span class="token punctuation">:</span>
  <span class="token key atrule">port</span><span class="token punctuation">:</span> <span class="token number">8081</span>


<span class="token key atrule">spring</span><span class="token punctuation">:</span>
  <span class="token key atrule">application</span><span class="token punctuation">:</span>
    <span class="token key atrule">name</span><span class="token punctuation">:</span> quartz<span class="token punctuation">-</span>vue
  <span class="token key atrule">datasource</span><span class="token punctuation">:</span>
    <span class="token key atrule">type</span><span class="token punctuation">:</span> com.zaxxer.hikari.HikariDataSource
    <span class="token key atrule">driver-class-name</span><span class="token punctuation">:</span> com.mysql.jdbc.Driver
    <span class="token key atrule">url</span><span class="token punctuation">:</span> jdbc<span class="token punctuation">:</span>mysql<span class="token punctuation">:</span>///ssm
    <span class="token key atrule">username</span><span class="token punctuation">:</span> root
    <span class="token key atrule">password</span><span class="token punctuation">:</span> <span class="token number">0</span>
    <span class="token key atrule">hikari</span><span class="token punctuation">:</span>
      <span class="token key atrule">minimum-idle</span><span class="token punctuation">:</span> <span class="token number">5</span>
      <span class="token key atrule">idle-timeout</span><span class="token punctuation">:</span> <span class="token number">600000</span>
      <span class="token key atrule">maximum-pool-size</span><span class="token punctuation">:</span> <span class="token number">10</span>
      <span class="token key atrule">auto-commit</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
      <span class="token key atrule">pool-name</span><span class="token punctuation">:</span> MyHikariCP
      <span class="token key atrule">max-lifetime</span><span class="token punctuation">:</span> <span class="token number">1800000</span>
      <span class="token key atrule">connection-timeout</span><span class="token punctuation">:</span> <span class="token number">30000</span>
      <span class="token key atrule">connection-test-query</span><span class="token punctuation">:</span> SELECT 1


  <span class="token key atrule">redis</span><span class="token punctuation">:</span>
    <span class="token key atrule">host</span><span class="token punctuation">:</span> 127.0.0.1
    <span class="token key atrule">port</span><span class="token punctuation">:</span> <span class="token number">6379</span>
    <span class="token key atrule">password</span><span class="token punctuation">:</span>
    <span class="token key atrule">jedis</span><span class="token punctuation">:</span>
      <span class="token key atrule">pool</span><span class="token punctuation">:</span>
        <span class="token key atrule">max-idle</span><span class="token punctuation">:</span> <span class="token number">20</span>
        <span class="token key atrule">max-active</span><span class="token punctuation">:</span> <span class="token number">25</span>
        <span class="token key atrule">min-idle</span><span class="token punctuation">:</span> <span class="token number">10</span>
<span class="token key atrule">mybatis-plus</span><span class="token punctuation">:</span>
  <span class="token key atrule">configuration</span><span class="token punctuation">:</span>
    <span class="token key atrule">log-impl</span><span class="token punctuation">:</span> org.apache.ibatis.logging.stdout.StdOutImpl
  <span class="token key atrule">mapper-locations</span><span class="token punctuation">:</span> classpath<span class="token punctuation">:</span>mapper/<span class="token important">*Mapper.xml</span>
<span class="token key atrule">logging</span><span class="token punctuation">:</span>
  <span class="token key atrule">level</span><span class="token punctuation">:</span>
    <span class="token key atrule">com.osvue.spring.quartz.mapper</span><span class="token punctuation">:</span> debug
redis config
RedisTemplate&lt;Object<span class="token punctuation">,</span>Object<span class="token punctuation">&gt;</span>（扩展String类型）操作Redis
若不设置序列化规则，它将使用JDK自动的序列化将对象转换为字节，存到Redis 里面
它可以存在对象到redis里面
如果对象没有序列化，那么默认使用的JDK的序列化方式
</code></pre></div><div class="language-java" data-ext="java"><pre class="language-java"><code>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">com<span class="token punctuation">.</span>fasterxml<span class="token punctuation">.</span>jackson<span class="token punctuation">.</span>annotation<span class="token punctuation">.</span></span><span class="token class-name">JsonAutoDetect</span><span class="token punctuation">.</span><span class="token class-name">Visibility</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">com<span class="token punctuation">.</span>fasterxml<span class="token punctuation">.</span>jackson<span class="token punctuation">.</span>annotation<span class="token punctuation">.</span></span><span class="token class-name">PropertyAccessor</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">com<span class="token punctuation">.</span>fasterxml<span class="token punctuation">.</span>jackson<span class="token punctuation">.</span>databind<span class="token punctuation">.</span></span><span class="token class-name">ObjectMapper</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">com<span class="token punctuation">.</span>fasterxml<span class="token punctuation">.</span>jackson<span class="token punctuation">.</span>databind<span class="token punctuation">.</span></span><span class="token class-name">ObjectMapper</span><span class="token punctuation">.</span><span class="token class-name">DefaultTyping</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>context<span class="token punctuation">.</span>annotation<span class="token punctuation">.</span></span><span class="token class-name">Bean</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>context<span class="token punctuation">.</span>annotation<span class="token punctuation">.</span></span><span class="token class-name">Configuration</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>data<span class="token punctuation">.</span>redis<span class="token punctuation">.</span>connection<span class="token punctuation">.</span>lettuce<span class="token punctuation">.</span></span><span class="token class-name">LettuceConnectionFactory</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>data<span class="token punctuation">.</span>redis<span class="token punctuation">.</span>core<span class="token punctuation">.</span></span><span class="token class-name">RedisTemplate</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>data<span class="token punctuation">.</span>redis<span class="token punctuation">.</span>serializer<span class="token punctuation">.</span></span><span class="token class-name">Jackson2JsonRedisSerializer</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>data<span class="token punctuation">.</span>redis<span class="token punctuation">.</span>serializer<span class="token punctuation">.</span></span><span class="token class-name">RedisSerializer</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>data<span class="token punctuation">.</span>redis<span class="token punctuation">.</span>serializer<span class="token punctuation">.</span></span><span class="token class-name">StringRedisSerializer</span></span><span class="token punctuation">;</span>


<span class="token doc-comment comment">/**
* @Author: Mr.Han
* @Description: quartz-vue
* @Date: Created in 2020/6/9_9:54
* @Modified By: THE GIFTED
*/</span>


<span class="token annotation punctuation">@Configuration</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">RedisConfig</span> <span class="token punctuation">{</span>
  <span class="token doc-comment comment">/**
   * RedisTemplate配置
   *
   * <span class="token keyword">@param</span> <span class="token parameter">lettuceConnectionFactory</span>
   * <span class="token keyword">@return</span>
   */</span>
  <span class="token annotation punctuation">@Bean</span>
  <span class="token keyword">public</span> <span class="token class-name">RedisTemplate</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">,</span> <span class="token class-name">Object</span><span class="token punctuation">&gt;</span></span> <span class="token function">redisTemplate</span><span class="token punctuation">(</span>
      <span class="token class-name">LettuceConnectionFactory</span> lettuceConnectionFactory<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 设置序列化</span>
    <span class="token class-name">Jackson2JsonRedisSerializer</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Object</span><span class="token punctuation">&gt;</span></span> jackson2JsonRedisSerializer <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Jackson2JsonRedisSerializer</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Object</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token class-name">Object</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token class-name">ObjectMapper</span> om <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ObjectMapper</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    om<span class="token punctuation">.</span><span class="token function">setVisibility</span><span class="token punctuation">(</span><span class="token class-name">PropertyAccessor</span><span class="token punctuation">.</span><span class="token constant">ALL</span><span class="token punctuation">,</span> <span class="token class-name">Visibility</span><span class="token punctuation">.</span><span class="token constant">ANY</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    om<span class="token punctuation">.</span><span class="token function">enableDefaultTyping</span><span class="token punctuation">(</span><span class="token class-name">DefaultTyping</span><span class="token punctuation">.</span><span class="token constant">NON_FINAL</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    jackson2JsonRedisSerializer<span class="token punctuation">.</span><span class="token function">setObjectMapper</span><span class="token punctuation">(</span>om<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">// 配置redisTemplate</span>
    <span class="token class-name">RedisTemplate</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">,</span> <span class="token class-name">Object</span><span class="token punctuation">&gt;</span></span> redisTemplate <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">RedisTemplate</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">,</span> <span class="token class-name">Object</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    redisTemplate<span class="token punctuation">.</span><span class="token function">setConnectionFactory</span><span class="token punctuation">(</span>lettuceConnectionFactory<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token class-name">RedisSerializer</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token operator">?</span><span class="token punctuation">&gt;</span></span> stringSerializer <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">StringRedisSerializer</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    redisTemplate<span class="token punctuation">.</span><span class="token function">setKeySerializer</span><span class="token punctuation">(</span>stringSerializer<span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">// key序列化</span>
    redisTemplate<span class="token punctuation">.</span><span class="token function">setValueSerializer</span><span class="token punctuation">(</span>jackson2JsonRedisSerializer<span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">// value序列化</span>
    redisTemplate<span class="token punctuation">.</span><span class="token function">setHashKeySerializer</span><span class="token punctuation">(</span>stringSerializer<span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">// Hash key序列化</span>
    redisTemplate<span class="token punctuation">.</span><span class="token function">setHashValueSerializer</span><span class="token punctuation">(</span>jackson2JsonRedisSerializer<span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">// Hash value序列化</span>
    redisTemplate<span class="token punctuation">.</span><span class="token function">afterPropertiesSet</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> redisTemplate<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>


<span class="token punctuation">}</span>
</code></pre></div><h3 id="spring-boot2-x中redis使用-lettuce" tabindex="-1"><a class="header-anchor" href="#spring-boot2-x中redis使用-lettuce" aria-hidden="true">#</a> spring boot2.x中redis使用(lettuce)</h3><p>pom</p><div class="language-xml" data-ext="xml"><pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependencies</span><span class="token punctuation">&gt;</span></span>
 
 			<span class="token comment">&lt;!--默认是lettuce客户端 --&gt;</span>
			<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">&gt;</span></span>
				<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>org.springframework.boot<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>
				<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>spring-boot-starter-data-redis<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>
			<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">&gt;</span></span>
			<span class="token comment">&lt;!-- redis依赖commons-pool 这个依赖一定要添加 --&gt;</span>
			<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">&gt;</span></span>
				<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>org.apache.commons<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>
				<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>commons-pool2<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>
			<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">&gt;</span></span>
<span class="token comment">&lt;!-- 测试库依赖 --&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>org.springframework.boot<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>spring-boot-starter-test<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>scope</span><span class="token punctuation">&gt;</span></span>test<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>scope</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependencies</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><ul><li>application.properties针对redis配置示例如下：</li></ul><div class="language-properties" data-ext="properties"><pre class="language-properties"><code>
<span class="token comment"># Redis数据库索引（默认为0）</span>
<span class="token key attr-name">spring.redis.database</span><span class="token punctuation">=</span><span class="token value attr-value">0</span>
<span class="token comment"># Redis服务器地址</span>
<span class="token key attr-name">spring.redis.host</span><span class="token punctuation">=</span><span class="token value attr-value">192.168.157.135</span>
<span class="token comment">#集群连接示例</span>
<span class="token comment">#spring.redis.cluster.nodes=192.168.157.135:7000,192.168.157.135:7001,192.168.157.135:7002,192.168.157.135:7003,192.168.157.135:7004,192.168.157.135:7005</span>
<span class="token comment"># Redis服务器连接端口</span>
<span class="token key attr-name">spring.redis.port</span><span class="token punctuation">=</span><span class="token value attr-value">6379</span>


<span class="token comment"># Lettuce</span>
<span class="token comment"># 连接池最大连接数（使用负值表示没有限制）</span>
<span class="token key attr-name">spring.redis.lettuce.pool.max-active</span><span class="token punctuation">=</span><span class="token value attr-value">8</span>
<span class="token comment"># 连接池最大阻塞等待时间（使用负值表示没有限制）</span>
<span class="token key attr-name">spring.redis.lettuce.pool.max-wait</span><span class="token punctuation">=</span><span class="token value attr-value">10000</span>
<span class="token comment"># 连接池中的最大空闲连接</span>
<span class="token key attr-name">spring.redis.lettuce.pool.max-idle</span><span class="token punctuation">=</span><span class="token value attr-value">8</span>
<span class="token comment"># 连接池中的最小空闲连接</span>
<span class="token key attr-name">spring.redis.lettuce.pool.min-idle</span><span class="token punctuation">=</span><span class="token value attr-value">0</span>
<span class="token comment"># 关闭超时时间</span>
<span class="token key attr-name">spring.redis.lettuce.shutdown-timeout</span><span class="token punctuation">=</span><span class="token value attr-value">100</span>

</code></pre></div><h3 id="redis配置类" tabindex="-1"><a class="header-anchor" href="#redis配置类" aria-hidden="true">#</a> redis配置类</h3><ul><li>编写缓存配置类RedisConfig用于调优缓存默认配置，<code>RedisTemplate&lt;String, Object&gt;</code>的类型兼容性更高</li><li>可以看到在<code>redisTemplate()</code>这个方法中用<code>JacksonJsonRedisSerializer</code>更换掉了Redis默认的序列化方式：<strong>JdkSerializationRedisSerializer</strong></li><li>spring-data-redis中序列化类有以下几个： <ul><li>GenericToStringSerializer：可以将任何对象泛化为字符串并序列化</li><li>Jackson2JsonRedisSerializer：序列化Object对象为json字符串（与JacksonJsonRedisSerializer相同）</li><li>JdkSerializationRedisSerializer：序列化java对象</li><li>StringRedisSerializer：简单的字符串序列化</li><li>JdkSerializationRedisSerializer序列化被序列化对象必须实现Serializable接口，被序列化除属性内容还有其他内容，长度长且不易阅读,默认就是采用这种序列化方式，存储内容如下： <ul><li><code>&quot;\\xac\\xed\\x00\\x05sr\\x00!com.oreilly.springdata.redis.User\\xb1\\x1c\\n\\xcd\\xed%\\xd8\\x02\\x00\\x02I\\x00\\x03ageL\\x00\\buserNamet\\x00\\x12Ljava/lang/String;xp\\x00\\x00\\x00\\x14t\\x00\\x05user1&quot;</code></li></ul></li><li>JacksonJsonRedisSerializer序列化,被序列化对象不需要实现Serializable接口，被序列化的结果清晰，容易阅读，而且存储字节少，速度快存储内容如下：<code>&quot;{&quot;userName&quot;:&quot;user1&quot;,&quot;age&quot;:20}&quot;</code></li><li>StringRedisSerializer 序列化一般如果key、value都是string字符串的话，就是用这个就可以了</li></ul></li></ul><div class="language-java" data-ext="java"><pre class="language-java"><code><span class="token annotation punctuation">@Configuration</span>
<span class="token keyword">package</span> <span class="token namespace">com<span class="token punctuation">.</span>osvue<span class="token punctuation">.</span>win<span class="token punctuation">.</span>app<span class="token punctuation">.</span>config</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>lang<span class="token punctuation">.</span>reflect<span class="token punctuation">.</span></span><span class="token class-name">Method</span></span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>cache<span class="token punctuation">.</span></span><span class="token class-name">CacheManager</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>cache<span class="token punctuation">.</span>annotation<span class="token punctuation">.</span></span><span class="token class-name">CachingConfigurerSupport</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>cache<span class="token punctuation">.</span>interceptor<span class="token punctuation">.</span></span><span class="token class-name">KeyGenerator</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>context<span class="token punctuation">.</span>annotation<span class="token punctuation">.</span></span><span class="token class-name">Bean</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>data<span class="token punctuation">.</span>redis<span class="token punctuation">.</span>cache<span class="token punctuation">.</span></span><span class="token class-name">RedisCacheConfiguration</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>data<span class="token punctuation">.</span>redis<span class="token punctuation">.</span>cache<span class="token punctuation">.</span></span><span class="token class-name">RedisCacheManager</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>data<span class="token punctuation">.</span>redis<span class="token punctuation">.</span>cache<span class="token punctuation">.</span></span><span class="token class-name">RedisCacheWriter</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>data<span class="token punctuation">.</span>redis<span class="token punctuation">.</span>connection<span class="token punctuation">.</span>lettuce<span class="token punctuation">.</span></span><span class="token class-name">LettuceConnectionFactory</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>data<span class="token punctuation">.</span>redis<span class="token punctuation">.</span>core<span class="token punctuation">.</span></span><span class="token class-name">RedisTemplate</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>data<span class="token punctuation">.</span>redis<span class="token punctuation">.</span>serializer<span class="token punctuation">.</span></span><span class="token class-name">Jackson2JsonRedisSerializer</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>data<span class="token punctuation">.</span>redis<span class="token punctuation">.</span>serializer<span class="token punctuation">.</span></span><span class="token class-name">StringRedisSerializer</span></span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token import"><span class="token namespace">com<span class="token punctuation">.</span>fasterxml<span class="token punctuation">.</span>jackson<span class="token punctuation">.</span>annotation<span class="token punctuation">.</span></span><span class="token class-name">JsonAutoDetect</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">com<span class="token punctuation">.</span>fasterxml<span class="token punctuation">.</span>jackson<span class="token punctuation">.</span>annotation<span class="token punctuation">.</span></span><span class="token class-name">PropertyAccessor</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">com<span class="token punctuation">.</span>fasterxml<span class="token punctuation">.</span>jackson<span class="token punctuation">.</span>databind<span class="token punctuation">.</span></span><span class="token class-name">ObjectMapper</span></span><span class="token punctuation">;</span>

<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">RedisConfig</span> <span class="token keyword">extends</span> <span class="token class-name">CachingConfigurerSupport</span> <span class="token punctuation">{</span>

 <span class="token doc-comment comment">/**
* 自定义缓存key的生成策略。默认的生成策略是看不懂的(乱码内容) 通过Spring 的依赖注入特性进行自定义的配
置注入并且此类是一个配置类可以更多程度的自定义配置
*
* <span class="token keyword">@return</span>
*/</span>
	<span class="token annotation punctuation">@Bean</span>
	<span class="token annotation punctuation">@Override</span>
	<span class="token keyword">public</span> <span class="token class-name">KeyGenerator</span> <span class="token function">keyGenerator</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">KeyGenerator</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			<span class="token annotation punctuation">@Override</span>
			<span class="token keyword">public</span> <span class="token class-name">Object</span> <span class="token function">generate</span><span class="token punctuation">(</span><span class="token class-name">Object</span> target<span class="token punctuation">,</span> <span class="token class-name">Method</span> method<span class="token punctuation">,</span> <span class="token class-name">Object</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span> params<span class="token punctuation">)</span> <span class="token punctuation">{</span>
				<span class="token class-name">StringBuilder</span> sb <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">StringBuilder</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
				sb<span class="token punctuation">.</span><span class="token function">append</span><span class="token punctuation">(</span>target<span class="token punctuation">.</span><span class="token function">getClass</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
				sb<span class="token punctuation">.</span><span class="token function">append</span><span class="token punctuation">(</span>method<span class="token punctuation">.</span><span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
				<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token class-name">Object</span> obj <span class="token operator">:</span> params<span class="token punctuation">)</span> <span class="token punctuation">{</span>
					sb<span class="token punctuation">.</span><span class="token function">append</span><span class="token punctuation">(</span>obj<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
				<span class="token punctuation">}</span>
				<span class="token keyword">return</span> sb<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
			<span class="token punctuation">}</span>
		<span class="token punctuation">}</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>

	<span class="token doc-comment comment">/**
	 * 缓存配置管理器
	 */</span>
	<span class="token annotation punctuation">@Bean</span>
	<span class="token keyword">public</span> <span class="token class-name">CacheManager</span> <span class="token function">cacheManager</span><span class="token punctuation">(</span><span class="token class-name">LettuceConnectionFactory</span> factory<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token comment">// 以锁写入的方式创建RedisCacheWriter对象</span>
		<span class="token class-name">RedisCacheWriter</span> writer <span class="token operator">=</span> <span class="token class-name">RedisCacheWriter</span><span class="token punctuation">.</span><span class="token function">lockingRedisCacheWriter</span><span class="token punctuation">(</span>factory<span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token comment">// 创建默认缓存配置对象</span>
		<span class="token class-name">RedisCacheConfiguration</span> config <span class="token operator">=</span> <span class="token class-name">RedisCacheConfiguration</span><span class="token punctuation">.</span><span class="token function">defaultCacheConfig</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token class-name">RedisCacheManager</span> cacheManager <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">RedisCacheManager</span><span class="token punctuation">(</span>writer<span class="token punctuation">,</span> config<span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token keyword">return</span> cacheManager<span class="token punctuation">;</span>
	<span class="token punctuation">}</span>

	<span class="token annotation punctuation">@Bean</span>
	<span class="token keyword">public</span> <span class="token class-name">RedisTemplate</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">,</span> <span class="token class-name">Object</span><span class="token punctuation">&gt;</span></span> <span class="token function">redisTemplate</span><span class="token punctuation">(</span><span class="token class-name">LettuceConnectionFactory</span> factory<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token class-name">RedisTemplate</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">,</span> <span class="token class-name">Object</span><span class="token punctuation">&gt;</span></span> template <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">RedisTemplate</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		template<span class="token punctuation">.</span><span class="token function">setConnectionFactory</span><span class="token punctuation">(</span>factory<span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token class-name">Jackson2JsonRedisSerializer</span> jackson2JsonRedisSerializer <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Jackson2JsonRedisSerializer</span><span class="token punctuation">(</span><span class="token class-name">Object</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token class-name">ObjectMapper</span> om <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ObjectMapper</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		om<span class="token punctuation">.</span><span class="token function">setVisibility</span><span class="token punctuation">(</span><span class="token class-name">PropertyAccessor</span><span class="token punctuation">.</span><span class="token constant">ALL</span><span class="token punctuation">,</span> <span class="token class-name">JsonAutoDetect<span class="token punctuation">.</span>Visibility</span><span class="token punctuation">.</span><span class="token constant">ANY</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		om<span class="token punctuation">.</span><span class="token function">enableDefaultTyping</span><span class="token punctuation">(</span><span class="token class-name">ObjectMapper<span class="token punctuation">.</span>DefaultTyping</span><span class="token punctuation">.</span><span class="token constant">NON_FINAL</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		jackson2JsonRedisSerializer<span class="token punctuation">.</span><span class="token function">setObjectMapper</span><span class="token punctuation">(</span>om<span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token class-name">StringRedisSerializer</span> stringRedisSerializer <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">StringRedisSerializer</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token comment">// 在使用注解@Bean返回RedisTemplate的时候，同时配置hashKey与hashValue的序列化方式。</span>
		<span class="token comment">// key采用String的序列化方式</span>
		template<span class="token punctuation">.</span><span class="token function">setKeySerializer</span><span class="token punctuation">(</span>stringRedisSerializer<span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token comment">// value序列化方式采用jackson</span>
		template<span class="token punctuation">.</span><span class="token function">setValueSerializer</span><span class="token punctuation">(</span>jackson2JsonRedisSerializer<span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token comment">// hash的key也采用String的序列化方式</span>
		template<span class="token punctuation">.</span><span class="token function">setHashKeySerializer</span><span class="token punctuation">(</span>stringRedisSerializer<span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token comment">// hash的value序列化方式采用jackson</span>
		template<span class="token punctuation">.</span><span class="token function">setHashValueSerializer</span><span class="token punctuation">(</span>jackson2JsonRedisSerializer<span class="token punctuation">)</span><span class="token punctuation">;</span>
		template<span class="token punctuation">.</span><span class="token function">afterPropertiesSet</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token keyword">return</span> template<span class="token punctuation">;</span>
	<span class="token punctuation">}</span>

<span class="token punctuation">}</span>


</code></pre></div><h3 id="redistemplate与stringredistemplate的区别" tabindex="-1"><a class="header-anchor" href="#redistemplate与stringredistemplate的区别" aria-hidden="true">#</a> RedisTemplate与StringRedisTemplate的区别</h3><ol><li>两者数据各自存，各自取，数据不互通。 RedisTemplate不能取StringRedisTemplate存入的数据。 StringRedisTemplate不能取RedisTemplate存入的数据</li><li>序列化策略不同。 RedisTemplate采用JDK的序列化策略 StringRedisTemplate采用String的序列化策略</li></ol><p>RedisTemplate： 存储时，先将数据序列化为字节数组，再存入Redis数据库。查看Redis会发现，是字节数组的形式。 读取时，会将数据当做字节数组转化为我们需要的数据。 StringRedisTemplate： 存储和读取，都为可读的数据。</p><ul><li>如果你需要缓存的是字符串，那么你就使用StringRedisTemplate即可。</li><li>但是如果你的数据是复杂的对象类型，而取出的时候又不想做任何的数据转换，直接从Redis里面取出一个对象，那么使用RedisTemplate是更好的选择</li></ul>`,15),o=[e];function c(l,u){return s(),a("div",null,o)}const k=n(p,[["render",c],["__file","boot_redis.html.vue"]]);export{k as default};
