import{_ as n,p as s,q as a,a1 as p}from"./framework-d81ad7e5.js";const t={},o=p(`<h4 id="client" tabindex="-1"><a class="header-anchor" href="#client" aria-hidden="true">#</a> client</h4><p>Jedis：是老牌的Redis的Java实现客户端，提供了比较全面的Redis命令的支持， Redisson：实现了分布式和可扩展的Java数据结构。 Lettuce：高级Redis客户端，用于线程安全同步，异步和响应使用，支持集群，Sentinel，管道和编码器。</p><h4 id="优点" tabindex="-1"><a class="header-anchor" href="#优点" aria-hidden="true">#</a> 优点：</h4><p>Jedis：比较全面的提供了Redis的操作特性 Redisson：促使使用者对Redis的关注分离，提供很多分布式相关操作服务，例如，分布式锁，分布式集合，可通过 Redis支持延迟队列 Lettuce：基于Netty框架的事件驱动的通信层，其方法调用是异步的。Lettuce的API是线程安全的，所以可以操作 单个Lettuce连接来完成各种操作</p><h4 id="可伸缩" tabindex="-1"><a class="header-anchor" href="#可伸缩" aria-hidden="true">#</a> 可伸缩：</h4><p>Jedis：使用阻塞的I/O，且其方法调用都是同步的，程序流需要等到sockets处理完I/O才能执行，不支持异步。 Jedis客户端实例不是线程安全的，所以需要通过连接池来使用Jedis。 Redisson：基于Netty框架的事件驱动的通信层，其方法调用是异步的。Redisson的API是线程安全的，所以可以操 作单个Redisson连接来完成各种操作 Lettuce：基于Netty框架的事件驱动的通信层，其方法调用是异步的。Lettuce的API是线程安全的，所以可以操作 单个Lettuce连接来完成各种操作 lettuce能够支持redis4，需要java8及以上。 lettuce是基于netty实现的与redis进行同步和异步的通信。</p><h3 id="lettuce和jedis比较" tabindex="-1"><a class="header-anchor" href="#lettuce和jedis比较" aria-hidden="true">#</a> lettuce和jedis比较：</h3><ul><li>jedis使直接连接redis server,如果在多线程环境下<strong>是非线程安全</strong>的，这个时候只有使用连接池，为每个jedis实例增加物理连接 ；</li><li>lettuce的连接是基于Netty的，连接实例（StatefulRedisConnection）可以在多个线程间并发访问， <ul><li><strong>StatefulRedisConnection</strong>是线程安全的，所以一个连接实例可以满足多线程环境下的并发访问，</li><li>当然这也是可伸缩的设计，一个连接实例不够的情况也可以按需增加连接实例。</li></ul></li><li>Redisson实现了分布式和可扩展的Java数据结构，和Jedis相比，功能较为简单， <ul><li>不支持字符串操作，不支持排序、事务、管道、分区等Redis特性。</li><li>Redisson的宗旨是促进使用者对Redis的关注分离，从而让使用者能够将精力更集中地放在处理业务逻辑上。</li></ul></li></ul><h3 id="总结" tabindex="-1"><a class="header-anchor" href="#总结" aria-hidden="true">#</a> 总结：</h3><ul><li>优先使用Lettuce，如果需要分布式锁，分布式集合等分布式的高级特性，添加Redisson结合使用，因为Redisson本身对字符串的操作支持很差。</li><li>在一些高并发的场景中，比如秒杀，抢票，抢购这些场景，都存在对核心资源，商品库存的争夺，控制不好，库存数量可能被减少到负数，出现超卖的情况，或者 产生唯一的一个递增ID，由于web应用部署在多个机器上，简单的同步加锁是无法实现的，给数据库加锁的话，对于高并发，1000/s的并发，数据可能由行锁变成表锁，性能下降会厉害。那相对而言，redis的分布式锁，相对而言，是个很好的选择，redis官方推荐使用的Redisson就提供了分布式锁和相关服务。</li></ul><h4 id="lettuce-和-jedis-的定位都是redis的client-所以他们当然可以直接连接redis-server。" tabindex="-1"><a class="header-anchor" href="#lettuce-和-jedis-的定位都是redis的client-所以他们当然可以直接连接redis-server。" aria-hidden="true">#</a> Lettuce 和 Jedis 的定位都是Redis的client，所以他们当然可以直接连接redis server。</h4><ul><li>实现方式差别：</li></ul><ul><li>Jedis在实现上是直接连接的<code>redis server</code>，如果在多线程环境下是非线程安全的，这个时候只有使用连接池，为每个Jedis实例增加物理连接。</li></ul><ul><li>Lettuce的连接是基于Netty的，连接实例（StatefulRedisConnection）可以在多个线程间并发访问</li><li>StatefulRedisConnection是线程安全的，所以一个连接实例（<code>StatefulRedisConnection</code>）就可以满足多线程环境下的并发访问，当然这个也是可伸缩的设计，一个连接实例不够的情况也可以按需增加连接实例。</li></ul><p>maven</p><div class="language-xml" data-ext="xml"><pre class="language-xml"><code>        <span class="token comment">&lt;!--springboot中的redis依赖--&gt;</span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>org.springframework.boot<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>spring-boot-starter-data-redis<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">&gt;</span></span>
        <span class="token comment">&lt;!-- lettuce pool 缓存连接池--&gt;</span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>org.apache.commons<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>commons-pool2<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">&gt;</span></span>

</code></pre></div><div class="language-yaml" data-ext="yml"><pre class="language-yaml"><code><span class="token comment">#端口，项目上下文</span>
<span class="token key atrule">server</span><span class="token punctuation">:</span>
  <span class="token key atrule">port</span><span class="token punctuation">:</span> <span class="token number">8080</span>
  <span class="token key atrule">servlet</span><span class="token punctuation">:</span>
    <span class="token key atrule">context-path</span><span class="token punctuation">:</span> /redis<span class="token punctuation">-</span>demo

<span class="token key atrule">spring</span><span class="token punctuation">:</span>
  <span class="token key atrule">redis</span><span class="token punctuation">:</span>
<span class="token comment">#    host: 192.168.223.131</span>
<span class="token comment">#    port: 7001</span>
    <span class="token key atrule">password</span><span class="token punctuation">:</span> admin@2021
    <span class="token comment"># Redis 默认数据库设置</span>
    <span class="token key atrule">database</span><span class="token punctuation">:</span> <span class="token number">0</span>
    <span class="token comment"># Redis Cluster集群节点配置</span>
    <span class="token key atrule">cluster</span><span class="token punctuation">:</span>
      <span class="token comment"># Redis 集群地址信息</span>
      <span class="token key atrule">nodes</span><span class="token punctuation">:</span>
        <span class="token punctuation">-</span> 192.168.223.131<span class="token punctuation">:</span><span class="token number">7001</span>
        <span class="token punctuation">-</span> 192.168.223.131<span class="token punctuation">:</span><span class="token number">7002</span>
        <span class="token punctuation">-</span> 192.168.223.131<span class="token punctuation">:</span><span class="token number">7003</span>
        <span class="token punctuation">-</span> 192.168.223.131<span class="token punctuation">:</span><span class="token number">7004</span>
        <span class="token punctuation">-</span> 192.168.223.131<span class="token punctuation">:</span><span class="token number">7005</span>
        <span class="token punctuation">-</span> 192.168.223.131<span class="token punctuation">:</span><span class="token number">7006</span>
      <span class="token comment"># 获取失败 最大重定向次数</span>
      <span class="token key atrule">max-redirects</span><span class="token punctuation">:</span> <span class="token number">3</span>
    <span class="token comment">#如果用以前的jedis，可以把下面的lettuce换成jedis即可</span>
    <span class="token key atrule">lettuce</span><span class="token punctuation">:</span>
      <span class="token key atrule">pool</span><span class="token punctuation">:</span>
        <span class="token comment"># 连接池最大连接数默认值为8</span>
        <span class="token key atrule">max-active</span><span class="token punctuation">:</span> <span class="token number">1000</span>
        <span class="token comment"># 连接池最大阻塞时间（使用负值表示没有限制）默认值为-1</span>
        <span class="token key atrule">max-wait</span><span class="token punctuation">:</span> <span class="token number">-1</span>
        <span class="token comment"># 连接池中最大空闲连接数默认值为8</span>
        <span class="token key atrule">max-idle</span><span class="token punctuation">:</span> <span class="token number">10</span>
        <span class="token comment"># 连接池中的最小空闲连接数，默认值为0</span>
        <span class="token key atrule">min-idle</span><span class="token punctuation">:</span> <span class="token number">10</span>

</code></pre></div><h3 id="redisutil" tabindex="-1"><a class="header-anchor" href="#redisutil" aria-hidden="true">#</a> redisUtil</h3><div class="language-java" data-ext="java"><pre class="language-java"><code> <span class="token keyword">package</span> <span class="token namespace">com<span class="token punctuation">.</span>osvue<span class="token punctuation">.</span>app<span class="token punctuation">.</span>user<span class="token punctuation">.</span>common</span><span class="token punctuation">;</span>
 
 <span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>beans<span class="token punctuation">.</span>factory<span class="token punctuation">.</span>annotation<span class="token punctuation">.</span></span><span class="token class-name">Autowired</span></span><span class="token punctuation">;</span>
 <span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>data<span class="token punctuation">.</span>redis<span class="token punctuation">.</span>core<span class="token punctuation">.</span></span><span class="token class-name">BoundListOperations</span></span><span class="token punctuation">;</span>
 <span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>data<span class="token punctuation">.</span>redis<span class="token punctuation">.</span>core<span class="token punctuation">.</span></span><span class="token class-name">RedisTemplate</span></span><span class="token punctuation">;</span>
 <span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>stereotype<span class="token punctuation">.</span></span><span class="token class-name">Component</span></span><span class="token punctuation">;</span>
 <span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>util<span class="token punctuation">.</span></span><span class="token class-name">CollectionUtils</span></span><span class="token punctuation">;</span>

 <span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>util<span class="token punctuation">.</span></span><span class="token class-name">List</span></span><span class="token punctuation">;</span>
 <span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>util<span class="token punctuation">.</span></span><span class="token class-name">Map</span></span><span class="token punctuation">;</span>
 <span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>util<span class="token punctuation">.</span></span><span class="token class-name">Set</span></span><span class="token punctuation">;</span>
 <span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>util<span class="token punctuation">.</span>concurrent<span class="token punctuation">.</span></span><span class="token class-name">TimeUnit</span></span><span class="token punctuation">;</span>


 <span class="token annotation punctuation">@Component</span>
 <span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">RedisUtil</span> <span class="token punctuation">{</span>

     <span class="token annotation punctuation">@Autowired</span>
     <span class="token keyword">private</span> <span class="token class-name">RedisTemplate</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">,</span> <span class="token class-name">Object</span><span class="token punctuation">&gt;</span></span> redisTemplate<span class="token punctuation">;</span>

     <span class="token keyword">public</span> <span class="token class-name">RedisUtil</span><span class="token punctuation">(</span><span class="token class-name">RedisTemplate</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">,</span> <span class="token class-name">Object</span><span class="token punctuation">&gt;</span></span> redisTemplate<span class="token punctuation">)</span> <span class="token punctuation">{</span>
         <span class="token keyword">this</span><span class="token punctuation">.</span>redisTemplate <span class="token operator">=</span> redisTemplate<span class="token punctuation">;</span>
     <span class="token punctuation">}</span>

     <span class="token doc-comment comment">/**
      * 指定缓存失效时间
      * <span class="token keyword">@param</span> <span class="token parameter">key</span> 键
      * <span class="token keyword">@param</span> <span class="token parameter">time</span> 时间(秒)
      * <span class="token keyword">@return</span>
      */</span>
     <span class="token keyword">public</span> <span class="token keyword">boolean</span> <span class="token function">expire</span><span class="token punctuation">(</span><span class="token class-name">String</span> key<span class="token punctuation">,</span><span class="token keyword">long</span> time<span class="token punctuation">)</span><span class="token punctuation">{</span>
         <span class="token keyword">try</span> <span class="token punctuation">{</span>
             <span class="token keyword">if</span><span class="token punctuation">(</span>time<span class="token operator">&gt;</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
                 redisTemplate<span class="token punctuation">.</span><span class="token function">expire</span><span class="token punctuation">(</span>key<span class="token punctuation">,</span> time<span class="token punctuation">,</span> <span class="token class-name">TimeUnit</span><span class="token punctuation">.</span><span class="token constant">SECONDS</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
             <span class="token punctuation">}</span>
             <span class="token keyword">return</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
         <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">Exception</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
             e<span class="token punctuation">.</span><span class="token function">printStackTrace</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
             <span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
         <span class="token punctuation">}</span>
     <span class="token punctuation">}</span>

     <span class="token doc-comment comment">/**
      * 根据key 获取过期时间
      * <span class="token keyword">@param</span> <span class="token parameter">key</span> 键 不能为null
      * <span class="token keyword">@return</span> 时间(秒) 返回0代表为永久有效
      */</span>
     <span class="token keyword">public</span> <span class="token keyword">long</span> <span class="token function">getExpire</span><span class="token punctuation">(</span><span class="token class-name">String</span> key<span class="token punctuation">)</span><span class="token punctuation">{</span>
         <span class="token keyword">return</span> redisTemplate<span class="token punctuation">.</span><span class="token function">getExpire</span><span class="token punctuation">(</span>key<span class="token punctuation">,</span><span class="token class-name">TimeUnit</span><span class="token punctuation">.</span><span class="token constant">SECONDS</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
     <span class="token punctuation">}</span>

     <span class="token doc-comment comment">/**
      * 判断key是否存在
      * <span class="token keyword">@param</span> <span class="token parameter">key</span> 键
      * <span class="token keyword">@return</span> true 存在 false不存在
      */</span>
     <span class="token keyword">public</span> <span class="token keyword">boolean</span> <span class="token function">hasKey</span><span class="token punctuation">(</span><span class="token class-name">String</span> key<span class="token punctuation">)</span><span class="token punctuation">{</span>
         <span class="token keyword">try</span> <span class="token punctuation">{</span>
             <span class="token keyword">return</span> redisTemplate<span class="token punctuation">.</span><span class="token function">hasKey</span><span class="token punctuation">(</span>key<span class="token punctuation">)</span><span class="token punctuation">;</span>
         <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">Exception</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
             e<span class="token punctuation">.</span><span class="token function">printStackTrace</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
             <span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
         <span class="token punctuation">}</span>
     <span class="token punctuation">}</span>

     <span class="token doc-comment comment">/**
      * 删除缓存
      * <span class="token keyword">@param</span> <span class="token parameter">key</span> 可以传一个值 或多个
      */</span>
     <span class="token annotation punctuation">@SuppressWarnings</span><span class="token punctuation">(</span><span class="token string">&quot;unchecked&quot;</span><span class="token punctuation">)</span>
     <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">del</span><span class="token punctuation">(</span><span class="token class-name">String</span> <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span> key<span class="token punctuation">)</span><span class="token punctuation">{</span>
         <span class="token keyword">if</span><span class="token punctuation">(</span>key<span class="token operator">!=</span><span class="token keyword">null</span><span class="token operator">&amp;&amp;</span>key<span class="token punctuation">.</span>length<span class="token operator">&gt;</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
             <span class="token keyword">if</span><span class="token punctuation">(</span>key<span class="token punctuation">.</span>length<span class="token operator">==</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
                 redisTemplate<span class="token punctuation">.</span><span class="token function">delete</span><span class="token punctuation">(</span>key<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
             <span class="token punctuation">}</span><span class="token keyword">else</span><span class="token punctuation">{</span>
                 redisTemplate<span class="token punctuation">.</span><span class="token function">delete</span><span class="token punctuation">(</span><span class="token class-name">CollectionUtils</span><span class="token punctuation">.</span><span class="token function">arrayToList</span><span class="token punctuation">(</span>key<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
             <span class="token punctuation">}</span>
         <span class="token punctuation">}</span>
     <span class="token punctuation">}</span>

     <span class="token comment">//============================String=============================</span>
     <span class="token doc-comment comment">/**
      * 普通缓存获取
      * <span class="token keyword">@param</span> <span class="token parameter">key</span> 键
      * <span class="token keyword">@return</span> 值
      */</span>
     <span class="token keyword">public</span> <span class="token class-name">Object</span> <span class="token function">get</span><span class="token punctuation">(</span><span class="token class-name">String</span> key<span class="token punctuation">)</span><span class="token punctuation">{</span>
         <span class="token keyword">return</span> key<span class="token operator">==</span><span class="token keyword">null</span><span class="token operator">?</span><span class="token keyword">null</span><span class="token operator">:</span>redisTemplate<span class="token punctuation">.</span><span class="token function">opsForValue</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>key<span class="token punctuation">)</span><span class="token punctuation">;</span>
     <span class="token punctuation">}</span>

     <span class="token doc-comment comment">/**
      * 普通缓存放入
      * <span class="token keyword">@param</span> <span class="token parameter">key</span> 键
      * <span class="token keyword">@param</span> <span class="token parameter">value</span> 值
      * <span class="token keyword">@return</span> true成功 false失败
      */</span>
     <span class="token keyword">public</span> <span class="token keyword">boolean</span> <span class="token function">set</span><span class="token punctuation">(</span><span class="token class-name">String</span> key<span class="token punctuation">,</span><span class="token class-name">Object</span> value<span class="token punctuation">)</span> <span class="token punctuation">{</span>
         <span class="token keyword">try</span> <span class="token punctuation">{</span>
             redisTemplate<span class="token punctuation">.</span><span class="token function">opsForValue</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span>key<span class="token punctuation">,</span> value<span class="token punctuation">)</span><span class="token punctuation">;</span>
             <span class="token keyword">return</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
         <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">Exception</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
             e<span class="token punctuation">.</span><span class="token function">printStackTrace</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
             <span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
         <span class="token punctuation">}</span>
     <span class="token punctuation">}</span>

     <span class="token doc-comment comment">/**
      * 普通缓存放入并设置时间
      * <span class="token keyword">@param</span> <span class="token parameter">key</span> 键
      * <span class="token keyword">@param</span> <span class="token parameter">value</span> 值
      * <span class="token keyword">@param</span> <span class="token parameter">time</span> 时间(秒) time要大于0 如果time小于等于0 将设置无限期
      * <span class="token keyword">@return</span> true成功 false 失败
      */</span>
     <span class="token keyword">public</span> <span class="token keyword">boolean</span> <span class="token function">set</span><span class="token punctuation">(</span><span class="token class-name">String</span> key<span class="token punctuation">,</span><span class="token class-name">Object</span> value<span class="token punctuation">,</span><span class="token keyword">long</span> time<span class="token punctuation">)</span><span class="token punctuation">{</span>
         <span class="token keyword">try</span> <span class="token punctuation">{</span>
             <span class="token keyword">if</span><span class="token punctuation">(</span>time<span class="token operator">&gt;</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
                 redisTemplate<span class="token punctuation">.</span><span class="token function">opsForValue</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span>key<span class="token punctuation">,</span> value<span class="token punctuation">,</span> time<span class="token punctuation">,</span> <span class="token class-name">TimeUnit</span><span class="token punctuation">.</span><span class="token constant">SECONDS</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
             <span class="token punctuation">}</span><span class="token keyword">else</span><span class="token punctuation">{</span>
                 <span class="token function">set</span><span class="token punctuation">(</span>key<span class="token punctuation">,</span> value<span class="token punctuation">)</span><span class="token punctuation">;</span>
             <span class="token punctuation">}</span>
             <span class="token keyword">return</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
         <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">Exception</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
             e<span class="token punctuation">.</span><span class="token function">printStackTrace</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
             <span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
         <span class="token punctuation">}</span>
     <span class="token punctuation">}</span>

     <span class="token doc-comment comment">/**
      * 递增
      * <span class="token keyword">@param</span> <span class="token parameter">key</span> 键
      * <span class="token keyword">@param</span> <span class="token parameter">delta</span> 要增加几(大于0)
      * <span class="token keyword">@return</span>
      */</span>
     <span class="token keyword">public</span> <span class="token keyword">long</span> <span class="token function">incr</span><span class="token punctuation">(</span><span class="token class-name">String</span> key<span class="token punctuation">,</span> <span class="token keyword">long</span> delta<span class="token punctuation">)</span><span class="token punctuation">{</span>
         <span class="token keyword">if</span><span class="token punctuation">(</span>delta<span class="token operator">&lt;</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
             <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">RuntimeException</span><span class="token punctuation">(</span><span class="token string">&quot;递增因子必须大于0&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
         <span class="token punctuation">}</span>
         <span class="token keyword">return</span> redisTemplate<span class="token punctuation">.</span><span class="token function">opsForValue</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">increment</span><span class="token punctuation">(</span>key<span class="token punctuation">,</span> delta<span class="token punctuation">)</span><span class="token punctuation">;</span>
     <span class="token punctuation">}</span>

     <span class="token doc-comment comment">/**
      * 递减
      * <span class="token keyword">@param</span> <span class="token parameter">key</span> 键
      * <span class="token keyword">@param</span> <span class="token parameter">delta</span> 要减少几(小于0)
      * <span class="token keyword">@return</span>
      */</span>
     <span class="token keyword">public</span> <span class="token keyword">long</span> <span class="token function">decr</span><span class="token punctuation">(</span><span class="token class-name">String</span> key<span class="token punctuation">,</span> <span class="token keyword">long</span> delta<span class="token punctuation">)</span><span class="token punctuation">{</span>
         <span class="token keyword">if</span><span class="token punctuation">(</span>delta<span class="token operator">&lt;</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
             <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">RuntimeException</span><span class="token punctuation">(</span><span class="token string">&quot;递减因子必须大于0&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
         <span class="token punctuation">}</span>
         <span class="token keyword">return</span> redisTemplate<span class="token punctuation">.</span><span class="token function">opsForValue</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">increment</span><span class="token punctuation">(</span>key<span class="token punctuation">,</span> <span class="token operator">-</span>delta<span class="token punctuation">)</span><span class="token punctuation">;</span>
     <span class="token punctuation">}</span>

     <span class="token comment">//================================Map=================================</span>
     <span class="token doc-comment comment">/**
      * HashGet
      * <span class="token keyword">@param</span> <span class="token parameter">key</span> 键 不能为null
      * <span class="token keyword">@param</span> <span class="token parameter">item</span> 项 不能为null
      * <span class="token keyword">@return</span> 值
      */</span>
     <span class="token keyword">public</span> <span class="token class-name">Object</span> <span class="token function">hget</span><span class="token punctuation">(</span><span class="token class-name">String</span> key<span class="token punctuation">,</span><span class="token class-name">String</span> item<span class="token punctuation">)</span><span class="token punctuation">{</span>
         <span class="token keyword">return</span> redisTemplate<span class="token punctuation">.</span><span class="token function">opsForHash</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>key<span class="token punctuation">,</span> item<span class="token punctuation">)</span><span class="token punctuation">;</span>
     <span class="token punctuation">}</span>

     <span class="token doc-comment comment">/**
      * 获取hashKey对应的所有键值
      * <span class="token keyword">@param</span> <span class="token parameter">key</span> 键
      * <span class="token keyword">@return</span> 对应的多个键值
      */</span>
     <span class="token keyword">public</span> <span class="token class-name">Map</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Object</span><span class="token punctuation">,</span><span class="token class-name">Object</span><span class="token punctuation">&gt;</span></span> <span class="token function">hmget</span><span class="token punctuation">(</span><span class="token class-name">String</span> key<span class="token punctuation">)</span><span class="token punctuation">{</span>
         <span class="token keyword">return</span> redisTemplate<span class="token punctuation">.</span><span class="token function">opsForHash</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">entries</span><span class="token punctuation">(</span>key<span class="token punctuation">)</span><span class="token punctuation">;</span>
     <span class="token punctuation">}</span>

     <span class="token doc-comment comment">/**
      * HashSet
      * <span class="token keyword">@param</span> <span class="token parameter">key</span> 键
      * <span class="token keyword">@param</span> <span class="token parameter">map</span> 对应多个键值
      * <span class="token keyword">@return</span> true 成功 false 失败
      */</span>
     <span class="token keyword">public</span> <span class="token keyword">boolean</span> <span class="token function">hmset</span><span class="token punctuation">(</span><span class="token class-name">String</span> key<span class="token punctuation">,</span> <span class="token class-name">Map</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">,</span><span class="token class-name">Object</span><span class="token punctuation">&gt;</span></span> map<span class="token punctuation">)</span><span class="token punctuation">{</span>
         <span class="token keyword">try</span> <span class="token punctuation">{</span>
             redisTemplate<span class="token punctuation">.</span><span class="token function">opsForHash</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">putAll</span><span class="token punctuation">(</span>key<span class="token punctuation">,</span> map<span class="token punctuation">)</span><span class="token punctuation">;</span>
             <span class="token keyword">return</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
         <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">Exception</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
             e<span class="token punctuation">.</span><span class="token function">printStackTrace</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
             <span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
         <span class="token punctuation">}</span>
     <span class="token punctuation">}</span>

     <span class="token doc-comment comment">/**
      * HashSet 并设置时间
      * <span class="token keyword">@param</span> <span class="token parameter">key</span> 键
      * <span class="token keyword">@param</span> <span class="token parameter">map</span> 对应多个键值
      * <span class="token keyword">@param</span> <span class="token parameter">time</span> 时间(秒)
      * <span class="token keyword">@return</span> true成功 false失败
      */</span>
     <span class="token keyword">public</span> <span class="token keyword">boolean</span> <span class="token function">hmset</span><span class="token punctuation">(</span><span class="token class-name">String</span> key<span class="token punctuation">,</span> <span class="token class-name">Map</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">,</span><span class="token class-name">Object</span><span class="token punctuation">&gt;</span></span> map<span class="token punctuation">,</span> <span class="token keyword">long</span> time<span class="token punctuation">)</span><span class="token punctuation">{</span>
         <span class="token keyword">try</span> <span class="token punctuation">{</span>
             redisTemplate<span class="token punctuation">.</span><span class="token function">opsForHash</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">putAll</span><span class="token punctuation">(</span>key<span class="token punctuation">,</span> map<span class="token punctuation">)</span><span class="token punctuation">;</span>
             <span class="token keyword">if</span><span class="token punctuation">(</span>time<span class="token operator">&gt;</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
                 <span class="token function">expire</span><span class="token punctuation">(</span>key<span class="token punctuation">,</span> time<span class="token punctuation">)</span><span class="token punctuation">;</span>
             <span class="token punctuation">}</span>
             <span class="token keyword">return</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
         <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">Exception</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
             e<span class="token punctuation">.</span><span class="token function">printStackTrace</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
             <span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
         <span class="token punctuation">}</span>
     <span class="token punctuation">}</span>

     <span class="token doc-comment comment">/**
      * 向一张hash表中放入数据,如果不存在将创建
      * <span class="token keyword">@param</span> <span class="token parameter">key</span> 键
      * <span class="token keyword">@param</span> <span class="token parameter">item</span> 项
      * <span class="token keyword">@param</span> <span class="token parameter">value</span> 值
      * <span class="token keyword">@return</span> true 成功 false失败
      */</span>
     <span class="token keyword">public</span> <span class="token keyword">boolean</span> <span class="token function">hset</span><span class="token punctuation">(</span><span class="token class-name">String</span> key<span class="token punctuation">,</span><span class="token class-name">String</span> item<span class="token punctuation">,</span><span class="token class-name">Object</span> value<span class="token punctuation">)</span> <span class="token punctuation">{</span>
         <span class="token keyword">try</span> <span class="token punctuation">{</span>
             redisTemplate<span class="token punctuation">.</span><span class="token function">opsForHash</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">put</span><span class="token punctuation">(</span>key<span class="token punctuation">,</span> item<span class="token punctuation">,</span> value<span class="token punctuation">)</span><span class="token punctuation">;</span>
             <span class="token keyword">return</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
         <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">Exception</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
             e<span class="token punctuation">.</span><span class="token function">printStackTrace</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
             <span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
         <span class="token punctuation">}</span>
     <span class="token punctuation">}</span>

     <span class="token doc-comment comment">/**
      * 向一张hash表中放入数据,如果不存在将创建
      * <span class="token keyword">@param</span> <span class="token parameter">key</span> 键
      * <span class="token keyword">@param</span> <span class="token parameter">item</span> 项
      * <span class="token keyword">@param</span> <span class="token parameter">value</span> 值
      * <span class="token keyword">@param</span> <span class="token parameter">time</span> 时间(秒)  注意:如果已存在的hash表有时间,这里将会替换原有的时间
      * <span class="token keyword">@return</span> true 成功 false失败
      */</span>
     <span class="token keyword">public</span> <span class="token keyword">boolean</span> <span class="token function">hset</span><span class="token punctuation">(</span><span class="token class-name">String</span> key<span class="token punctuation">,</span><span class="token class-name">String</span> item<span class="token punctuation">,</span><span class="token class-name">Object</span> value<span class="token punctuation">,</span><span class="token keyword">long</span> time<span class="token punctuation">)</span> <span class="token punctuation">{</span>
         <span class="token keyword">try</span> <span class="token punctuation">{</span>
             redisTemplate<span class="token punctuation">.</span><span class="token function">opsForHash</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">put</span><span class="token punctuation">(</span>key<span class="token punctuation">,</span> item<span class="token punctuation">,</span> value<span class="token punctuation">)</span><span class="token punctuation">;</span>
             <span class="token keyword">if</span><span class="token punctuation">(</span>time<span class="token operator">&gt;</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
                 <span class="token function">expire</span><span class="token punctuation">(</span>key<span class="token punctuation">,</span> time<span class="token punctuation">)</span><span class="token punctuation">;</span>
             <span class="token punctuation">}</span>
             <span class="token keyword">return</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
         <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">Exception</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
             e<span class="token punctuation">.</span><span class="token function">printStackTrace</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
             <span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
         <span class="token punctuation">}</span>
     <span class="token punctuation">}</span>

     <span class="token doc-comment comment">/**
      * 删除hash表中的值
      * <span class="token keyword">@param</span> <span class="token parameter">key</span> 键 不能为null
      * <span class="token keyword">@param</span> <span class="token parameter">item</span> 项 可以使多个 不能为null
      */</span>
     <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">hdel</span><span class="token punctuation">(</span><span class="token class-name">String</span> key<span class="token punctuation">,</span> <span class="token class-name">Object</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span> item<span class="token punctuation">)</span><span class="token punctuation">{</span>
         redisTemplate<span class="token punctuation">.</span><span class="token function">opsForHash</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">delete</span><span class="token punctuation">(</span>key<span class="token punctuation">,</span>item<span class="token punctuation">)</span><span class="token punctuation">;</span>
     <span class="token punctuation">}</span>

     <span class="token doc-comment comment">/**
      * 判断hash表中是否有该项的值
      * <span class="token keyword">@param</span> <span class="token parameter">key</span> 键 不能为null
      * <span class="token keyword">@param</span> <span class="token parameter">item</span> 项 不能为null
      * <span class="token keyword">@return</span> true 存在 false不存在
      */</span>
     <span class="token keyword">public</span> <span class="token keyword">boolean</span> <span class="token function">hHasKey</span><span class="token punctuation">(</span><span class="token class-name">String</span> key<span class="token punctuation">,</span> <span class="token class-name">String</span> item<span class="token punctuation">)</span><span class="token punctuation">{</span>
         <span class="token keyword">return</span> redisTemplate<span class="token punctuation">.</span><span class="token function">opsForHash</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">hasKey</span><span class="token punctuation">(</span>key<span class="token punctuation">,</span> item<span class="token punctuation">)</span><span class="token punctuation">;</span>
     <span class="token punctuation">}</span>

     <span class="token doc-comment comment">/**
      * hash递增 如果不存在,就会创建一个 并把新增后的值返回
      * <span class="token keyword">@param</span> <span class="token parameter">key</span> 键
      * <span class="token keyword">@param</span> <span class="token parameter">item</span> 项
      * <span class="token keyword">@param</span> <span class="token parameter">by</span> 要增加几(大于0)
      * <span class="token keyword">@return</span>
      */</span>
     <span class="token keyword">public</span> <span class="token keyword">double</span> <span class="token function">hincr</span><span class="token punctuation">(</span><span class="token class-name">String</span> key<span class="token punctuation">,</span> <span class="token class-name">String</span> item<span class="token punctuation">,</span><span class="token keyword">double</span> by<span class="token punctuation">)</span><span class="token punctuation">{</span>
         <span class="token keyword">return</span> redisTemplate<span class="token punctuation">.</span><span class="token function">opsForHash</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">increment</span><span class="token punctuation">(</span>key<span class="token punctuation">,</span> item<span class="token punctuation">,</span> by<span class="token punctuation">)</span><span class="token punctuation">;</span>
     <span class="token punctuation">}</span>

     <span class="token doc-comment comment">/**
      * hash递减
      * <span class="token keyword">@param</span> <span class="token parameter">key</span> 键
      * <span class="token keyword">@param</span> <span class="token parameter">item</span> 项
      * <span class="token keyword">@param</span> <span class="token parameter">by</span> 要减少记(小于0)
      * <span class="token keyword">@return</span>
      */</span>
     <span class="token keyword">public</span> <span class="token keyword">double</span> <span class="token function">hdecr</span><span class="token punctuation">(</span><span class="token class-name">String</span> key<span class="token punctuation">,</span> <span class="token class-name">String</span> item<span class="token punctuation">,</span><span class="token keyword">double</span> by<span class="token punctuation">)</span><span class="token punctuation">{</span>
         <span class="token keyword">return</span> redisTemplate<span class="token punctuation">.</span><span class="token function">opsForHash</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">increment</span><span class="token punctuation">(</span>key<span class="token punctuation">,</span> item<span class="token punctuation">,</span><span class="token operator">-</span>by<span class="token punctuation">)</span><span class="token punctuation">;</span>
     <span class="token punctuation">}</span>

     <span class="token comment">//============================set=============================</span>
     <span class="token doc-comment comment">/**
      * 根据key获取Set中的所有值
      * <span class="token keyword">@param</span> <span class="token parameter">key</span> 键
      * <span class="token keyword">@return</span>
      */</span>
     <span class="token keyword">public</span> <span class="token class-name">Set</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Object</span><span class="token punctuation">&gt;</span></span> <span class="token function">sGet</span><span class="token punctuation">(</span><span class="token class-name">String</span> key<span class="token punctuation">)</span><span class="token punctuation">{</span>
         <span class="token keyword">try</span> <span class="token punctuation">{</span>
             <span class="token keyword">return</span> redisTemplate<span class="token punctuation">.</span><span class="token function">opsForSet</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">members</span><span class="token punctuation">(</span>key<span class="token punctuation">)</span><span class="token punctuation">;</span>
         <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">Exception</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
             e<span class="token punctuation">.</span><span class="token function">printStackTrace</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
         <span class="token punctuation">}</span>
         <span class="token keyword">return</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
     <span class="token punctuation">}</span>

     <span class="token doc-comment comment">/**
      * 根据value从一个set中查询,是否存在
      * <span class="token keyword">@param</span> <span class="token parameter">key</span> 键
      * <span class="token keyword">@param</span> <span class="token parameter">value</span> 值
      * <span class="token keyword">@return</span> true 存在 false不存在
      */</span>
     <span class="token keyword">public</span> <span class="token keyword">boolean</span> <span class="token function">sHasKey</span><span class="token punctuation">(</span><span class="token class-name">String</span> key<span class="token punctuation">,</span><span class="token class-name">Object</span> value<span class="token punctuation">)</span><span class="token punctuation">{</span>
         <span class="token keyword">try</span> <span class="token punctuation">{</span>
             <span class="token keyword">return</span> redisTemplate<span class="token punctuation">.</span><span class="token function">opsForSet</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">isMember</span><span class="token punctuation">(</span>key<span class="token punctuation">,</span> value<span class="token punctuation">)</span><span class="token punctuation">;</span>
         <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">Exception</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
             e<span class="token punctuation">.</span><span class="token function">printStackTrace</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
             <span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
         <span class="token punctuation">}</span>
     <span class="token punctuation">}</span>

     <span class="token doc-comment comment">/**
      * 将数据放入set缓存
      * <span class="token keyword">@param</span> <span class="token parameter">key</span> 键
      * <span class="token keyword">@param</span> <span class="token parameter">values</span> 值 可以是多个
      * <span class="token keyword">@return</span> 成功个数
      */</span>
     <span class="token keyword">public</span> <span class="token keyword">long</span> <span class="token function">sSet</span><span class="token punctuation">(</span><span class="token class-name">String</span> key<span class="token punctuation">,</span> <span class="token class-name">Object</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>values<span class="token punctuation">)</span> <span class="token punctuation">{</span>
         <span class="token keyword">try</span> <span class="token punctuation">{</span>
             <span class="token keyword">return</span> redisTemplate<span class="token punctuation">.</span><span class="token function">opsForSet</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>key<span class="token punctuation">,</span> values<span class="token punctuation">)</span><span class="token punctuation">;</span>
         <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">Exception</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
             e<span class="token punctuation">.</span><span class="token function">printStackTrace</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
             <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
         <span class="token punctuation">}</span>
     <span class="token punctuation">}</span>

     <span class="token doc-comment comment">/**
      * 将set数据放入缓存
      * <span class="token keyword">@param</span> <span class="token parameter">key</span> 键
      * <span class="token keyword">@param</span> <span class="token parameter">time</span> 时间(秒)
      * <span class="token keyword">@param</span> <span class="token parameter">values</span> 值 可以是多个
      * <span class="token keyword">@return</span> 成功个数
      */</span>
     <span class="token keyword">public</span> <span class="token keyword">long</span> <span class="token function">sSetAndTime</span><span class="token punctuation">(</span><span class="token class-name">String</span> key<span class="token punctuation">,</span><span class="token keyword">long</span> time<span class="token punctuation">,</span><span class="token class-name">Object</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>values<span class="token punctuation">)</span> <span class="token punctuation">{</span>
         <span class="token keyword">try</span> <span class="token punctuation">{</span>
             <span class="token class-name">Long</span> count <span class="token operator">=</span> redisTemplate<span class="token punctuation">.</span><span class="token function">opsForSet</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>key<span class="token punctuation">,</span> values<span class="token punctuation">)</span><span class="token punctuation">;</span>
             <span class="token keyword">if</span><span class="token punctuation">(</span>time<span class="token operator">&gt;</span><span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                 <span class="token function">expire</span><span class="token punctuation">(</span>key<span class="token punctuation">,</span> time<span class="token punctuation">)</span><span class="token punctuation">;</span>
             <span class="token punctuation">}</span>
             <span class="token keyword">return</span> count<span class="token punctuation">;</span>
         <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">Exception</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
             e<span class="token punctuation">.</span><span class="token function">printStackTrace</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
             <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
         <span class="token punctuation">}</span>
     <span class="token punctuation">}</span>

     <span class="token doc-comment comment">/**
      * 获取set缓存的长度
      * <span class="token keyword">@param</span> <span class="token parameter">key</span> 键
      * <span class="token keyword">@return</span>
      */</span>
     <span class="token keyword">public</span> <span class="token keyword">long</span> <span class="token function">sGetSetSize</span><span class="token punctuation">(</span><span class="token class-name">String</span> key<span class="token punctuation">)</span><span class="token punctuation">{</span>
         <span class="token keyword">try</span> <span class="token punctuation">{</span>
             <span class="token keyword">return</span> redisTemplate<span class="token punctuation">.</span><span class="token function">opsForSet</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">size</span><span class="token punctuation">(</span>key<span class="token punctuation">)</span><span class="token punctuation">;</span>
         <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">Exception</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
             e<span class="token punctuation">.</span><span class="token function">printStackTrace</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
             <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
         <span class="token punctuation">}</span>
     <span class="token punctuation">}</span>

     <span class="token doc-comment comment">/**
      * 移除值为value的
      * <span class="token keyword">@param</span> <span class="token parameter">key</span> 键
      * <span class="token keyword">@param</span> <span class="token parameter">values</span> 值 可以是多个
      * <span class="token keyword">@return</span> 移除的个数
      */</span>
     <span class="token keyword">public</span> <span class="token keyword">long</span> <span class="token function">setRemove</span><span class="token punctuation">(</span><span class="token class-name">String</span> key<span class="token punctuation">,</span> <span class="token class-name">Object</span> <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>values<span class="token punctuation">)</span> <span class="token punctuation">{</span>
         <span class="token keyword">try</span> <span class="token punctuation">{</span>
             <span class="token class-name">Long</span> count <span class="token operator">=</span> redisTemplate<span class="token punctuation">.</span><span class="token function">opsForSet</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">remove</span><span class="token punctuation">(</span>key<span class="token punctuation">,</span> values<span class="token punctuation">)</span><span class="token punctuation">;</span>
             <span class="token keyword">return</span> count<span class="token punctuation">;</span>
         <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">Exception</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
             e<span class="token punctuation">.</span><span class="token function">printStackTrace</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
             <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
         <span class="token punctuation">}</span>
     <span class="token punctuation">}</span>
     <span class="token comment">//===============================list=================================</span>

     <span class="token doc-comment comment">/**
      * 获取list缓存的内容
      * <span class="token keyword">@param</span> <span class="token parameter">key</span> 键
      * <span class="token keyword">@param</span> <span class="token parameter">start</span> 开始
      * <span class="token keyword">@param</span> <span class="token parameter">end</span> 结束  0 到 -1代表所有值
      * <span class="token keyword">@return</span>
      */</span>
     <span class="token keyword">public</span> <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Object</span><span class="token punctuation">&gt;</span></span> <span class="token function">lGet</span><span class="token punctuation">(</span><span class="token class-name">String</span> key<span class="token punctuation">,</span> <span class="token keyword">long</span> start<span class="token punctuation">,</span> <span class="token keyword">long</span> end<span class="token punctuation">)</span><span class="token punctuation">{</span>
         <span class="token keyword">try</span> <span class="token punctuation">{</span>
             <span class="token keyword">return</span> redisTemplate<span class="token punctuation">.</span><span class="token function">opsForList</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">range</span><span class="token punctuation">(</span>key<span class="token punctuation">,</span> start<span class="token punctuation">,</span> end<span class="token punctuation">)</span><span class="token punctuation">;</span>
         <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">Exception</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
             e<span class="token punctuation">.</span><span class="token function">printStackTrace</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
         <span class="token punctuation">}</span>
         <span class="token keyword">return</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
     <span class="token punctuation">}</span>

     <span class="token doc-comment comment">/**
      * 获取list缓存的长度
      * <span class="token keyword">@param</span> <span class="token parameter">key</span> 键
      * <span class="token keyword">@return</span>
      */</span>
     <span class="token keyword">public</span> <span class="token keyword">long</span> <span class="token function">lGetListSize</span><span class="token punctuation">(</span><span class="token class-name">String</span> key<span class="token punctuation">)</span><span class="token punctuation">{</span>
         <span class="token keyword">try</span> <span class="token punctuation">{</span>
             <span class="token keyword">return</span> redisTemplate<span class="token punctuation">.</span><span class="token function">opsForList</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">size</span><span class="token punctuation">(</span>key<span class="token punctuation">)</span><span class="token punctuation">;</span>
         <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">Exception</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
             e<span class="token punctuation">.</span><span class="token function">printStackTrace</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
             <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
         <span class="token punctuation">}</span>
     <span class="token punctuation">}</span>

     <span class="token doc-comment comment">/**
      * 通过索引 获取list中的值
      * <span class="token keyword">@param</span> <span class="token parameter">key</span> 键
      * <span class="token keyword">@param</span> <span class="token parameter">index</span> 索引  index&gt;=0时， 0 表头，1 第二个元素，依次类推；index&lt;0时，-1，表尾，-2倒数第二个元素，依次类推
      * <span class="token keyword">@return</span>
      */</span>
     <span class="token keyword">public</span> <span class="token class-name">Object</span> <span class="token function">lGetIndex</span><span class="token punctuation">(</span><span class="token class-name">String</span> key<span class="token punctuation">,</span><span class="token keyword">long</span> index<span class="token punctuation">)</span><span class="token punctuation">{</span>
         <span class="token keyword">try</span> <span class="token punctuation">{</span>
             <span class="token keyword">return</span> redisTemplate<span class="token punctuation">.</span><span class="token function">opsForList</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">index</span><span class="token punctuation">(</span>key<span class="token punctuation">,</span> index<span class="token punctuation">)</span><span class="token punctuation">;</span>
         <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">Exception</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
             e<span class="token punctuation">.</span><span class="token function">printStackTrace</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
             <span class="token keyword">return</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
         <span class="token punctuation">}</span>
     <span class="token punctuation">}</span>

     <span class="token doc-comment comment">/**
      * 将list放入缓存
      * <span class="token keyword">@param</span> <span class="token parameter">key</span> 键
      * <span class="token keyword">@param</span> <span class="token parameter">value</span> 值
      * <span class="token keyword">@return</span>
      */</span>
     <span class="token keyword">public</span> <span class="token keyword">boolean</span> <span class="token function">lSet</span><span class="token punctuation">(</span><span class="token class-name">String</span> key<span class="token punctuation">,</span> <span class="token class-name">Object</span> value<span class="token punctuation">)</span> <span class="token punctuation">{</span>
         <span class="token keyword">try</span> <span class="token punctuation">{</span>
             redisTemplate<span class="token punctuation">.</span><span class="token function">opsForList</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">rightPush</span><span class="token punctuation">(</span>key<span class="token punctuation">,</span> value<span class="token punctuation">)</span><span class="token punctuation">;</span>
             <span class="token keyword">return</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
         <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">Exception</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
             e<span class="token punctuation">.</span><span class="token function">printStackTrace</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
             <span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
         <span class="token punctuation">}</span>
     <span class="token punctuation">}</span>

     <span class="token doc-comment comment">/**
      * 将list放入缓存
      * <span class="token keyword">@param</span> <span class="token parameter">key</span> 键
      * <span class="token keyword">@param</span> <span class="token parameter">value</span> 值
      * <span class="token keyword">@param</span> <span class="token parameter">time</span> 时间(秒)
      * <span class="token keyword">@return</span>
      */</span>
     <span class="token keyword">public</span> <span class="token keyword">boolean</span> <span class="token function">lSet</span><span class="token punctuation">(</span><span class="token class-name">String</span> key<span class="token punctuation">,</span> <span class="token class-name">Object</span> value<span class="token punctuation">,</span> <span class="token keyword">long</span> time<span class="token punctuation">)</span> <span class="token punctuation">{</span>
         <span class="token keyword">try</span> <span class="token punctuation">{</span>
             redisTemplate<span class="token punctuation">.</span><span class="token function">opsForList</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">rightPush</span><span class="token punctuation">(</span>key<span class="token punctuation">,</span> value<span class="token punctuation">)</span><span class="token punctuation">;</span>
             <span class="token keyword">if</span> <span class="token punctuation">(</span>time <span class="token operator">&gt;</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                 <span class="token function">expire</span><span class="token punctuation">(</span>key<span class="token punctuation">,</span> time<span class="token punctuation">)</span><span class="token punctuation">;</span>
             <span class="token punctuation">}</span>
             <span class="token keyword">return</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
         <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">Exception</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
             e<span class="token punctuation">.</span><span class="token function">printStackTrace</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
             <span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
         <span class="token punctuation">}</span>
     <span class="token punctuation">}</span>

     <span class="token doc-comment comment">/**
      * 将list放入缓存
      * <span class="token keyword">@param</span> <span class="token parameter">key</span> 键
      * <span class="token keyword">@param</span> <span class="token parameter">value</span> 值
      * <span class="token keyword">@return</span>
      */</span>
     <span class="token keyword">public</span> <span class="token keyword">boolean</span> <span class="token function">lSet</span><span class="token punctuation">(</span><span class="token class-name">String</span> key<span class="token punctuation">,</span> <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Object</span><span class="token punctuation">&gt;</span></span> value<span class="token punctuation">)</span> <span class="token punctuation">{</span>
         <span class="token keyword">try</span> <span class="token punctuation">{</span>
             redisTemplate<span class="token punctuation">.</span><span class="token function">opsForList</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">rightPushAll</span><span class="token punctuation">(</span>key<span class="token punctuation">,</span> value<span class="token punctuation">)</span><span class="token punctuation">;</span>
             <span class="token keyword">return</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
         <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">Exception</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
             e<span class="token punctuation">.</span><span class="token function">printStackTrace</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
             <span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
         <span class="token punctuation">}</span>
     <span class="token punctuation">}</span>

     <span class="token doc-comment comment">/**
      * 将list放入缓存
      * <span class="token keyword">@param</span> <span class="token parameter">key</span> 键
      * <span class="token keyword">@param</span> <span class="token parameter">value</span> 值
      * <span class="token keyword">@param</span> <span class="token parameter">time</span> 时间(秒)
      * <span class="token keyword">@return</span>
      */</span>
     <span class="token keyword">public</span> <span class="token keyword">boolean</span> <span class="token function">lSet</span><span class="token punctuation">(</span><span class="token class-name">String</span> key<span class="token punctuation">,</span> <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Object</span><span class="token punctuation">&gt;</span></span> value<span class="token punctuation">,</span> <span class="token keyword">long</span> time<span class="token punctuation">)</span> <span class="token punctuation">{</span>
         <span class="token keyword">try</span> <span class="token punctuation">{</span>
             redisTemplate<span class="token punctuation">.</span><span class="token function">opsForList</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">rightPushAll</span><span class="token punctuation">(</span>key<span class="token punctuation">,</span> value<span class="token punctuation">)</span><span class="token punctuation">;</span>
             <span class="token keyword">if</span> <span class="token punctuation">(</span>time <span class="token operator">&gt;</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                 <span class="token function">expire</span><span class="token punctuation">(</span>key<span class="token punctuation">,</span> time<span class="token punctuation">)</span><span class="token punctuation">;</span>
             <span class="token punctuation">}</span>
             <span class="token keyword">return</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
         <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">Exception</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
             e<span class="token punctuation">.</span><span class="token function">printStackTrace</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
             <span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
         <span class="token punctuation">}</span>
     <span class="token punctuation">}</span>

     <span class="token doc-comment comment">/**
      * 根据索引修改list中的某条数据
      * <span class="token keyword">@param</span> <span class="token parameter">key</span> 键
      * <span class="token keyword">@param</span> <span class="token parameter">index</span> 索引
      * <span class="token keyword">@param</span> <span class="token parameter">value</span> 值
      * <span class="token keyword">@return</span>
      */</span>
     <span class="token keyword">public</span> <span class="token keyword">boolean</span> <span class="token function">lUpdateIndex</span><span class="token punctuation">(</span><span class="token class-name">String</span> key<span class="token punctuation">,</span> <span class="token keyword">long</span> index<span class="token punctuation">,</span><span class="token class-name">Object</span> value<span class="token punctuation">)</span> <span class="token punctuation">{</span>
         <span class="token keyword">try</span> <span class="token punctuation">{</span>
             redisTemplate<span class="token punctuation">.</span><span class="token function">opsForList</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span>key<span class="token punctuation">,</span> index<span class="token punctuation">,</span> value<span class="token punctuation">)</span><span class="token punctuation">;</span>
             <span class="token keyword">return</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
         <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">Exception</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
             e<span class="token punctuation">.</span><span class="token function">printStackTrace</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
             <span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
         <span class="token punctuation">}</span>
     <span class="token punctuation">}</span>

     <span class="token doc-comment comment">/**
      * 移除N个值为value
      * <span class="token keyword">@param</span> <span class="token parameter">key</span> 键
      * <span class="token keyword">@param</span> <span class="token parameter">count</span> 移除多少个
      * <span class="token keyword">@param</span> <span class="token parameter">value</span> 值
      * <span class="token keyword">@return</span> 移除的个数
      */</span>
     <span class="token keyword">public</span> <span class="token keyword">long</span> <span class="token function">lRemove</span><span class="token punctuation">(</span><span class="token class-name">String</span> key<span class="token punctuation">,</span><span class="token keyword">long</span> count<span class="token punctuation">,</span><span class="token class-name">Object</span> value<span class="token punctuation">)</span> <span class="token punctuation">{</span>
         <span class="token keyword">try</span> <span class="token punctuation">{</span>
             <span class="token class-name">Long</span> remove <span class="token operator">=</span> redisTemplate<span class="token punctuation">.</span><span class="token function">opsForList</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">remove</span><span class="token punctuation">(</span>key<span class="token punctuation">,</span> count<span class="token punctuation">,</span> value<span class="token punctuation">)</span><span class="token punctuation">;</span>
             <span class="token keyword">return</span> remove<span class="token punctuation">;</span>
         <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">Exception</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
             e<span class="token punctuation">.</span><span class="token function">printStackTrace</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
             <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
         <span class="token punctuation">}</span>
     <span class="token punctuation">}</span>

     <span class="token doc-comment comment">/**
      * 模糊查询获取key值
      * <span class="token keyword">@param</span> <span class="token parameter">pattern</span>
      * <span class="token keyword">@return</span>
      */</span>
     <span class="token keyword">public</span> <span class="token class-name">Set</span> <span class="token function">keys</span><span class="token punctuation">(</span><span class="token class-name">String</span> pattern<span class="token punctuation">)</span><span class="token punctuation">{</span>
         <span class="token keyword">return</span> redisTemplate<span class="token punctuation">.</span><span class="token function">keys</span><span class="token punctuation">(</span>pattern<span class="token punctuation">)</span><span class="token punctuation">;</span>
     <span class="token punctuation">}</span>

     <span class="token doc-comment comment">/**
      * 使用Redis的消息队列
      * <span class="token keyword">@param</span> <span class="token parameter">channel</span>
      * <span class="token keyword">@param</span> <span class="token parameter">message</span> 消息内容
      */</span>
     <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">convertAndSend</span><span class="token punctuation">(</span><span class="token class-name">String</span> channel<span class="token punctuation">,</span> <span class="token class-name">Object</span> message<span class="token punctuation">)</span><span class="token punctuation">{</span>
         redisTemplate<span class="token punctuation">.</span><span class="token function">convertAndSend</span><span class="token punctuation">(</span>channel<span class="token punctuation">,</span>message<span class="token punctuation">)</span><span class="token punctuation">;</span>
     <span class="token punctuation">}</span>



     <span class="token doc-comment comment">/**
      * 根据起始结束序号遍历Redis中的list
      * <span class="token keyword">@param</span> <span class="token parameter">listKey</span>
      * <span class="token keyword">@param</span> <span class="token parameter">start</span>  起始序号
      * <span class="token keyword">@param</span> <span class="token parameter">end</span>  结束序号
      * <span class="token keyword">@return</span>
      */</span>
     <span class="token keyword">public</span> <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Object</span><span class="token punctuation">&gt;</span></span> <span class="token function">rangeList</span><span class="token punctuation">(</span><span class="token class-name">String</span> listKey<span class="token punctuation">,</span> <span class="token keyword">long</span> start<span class="token punctuation">,</span> <span class="token keyword">long</span> end<span class="token punctuation">)</span> <span class="token punctuation">{</span>
         <span class="token comment">//绑定操作</span>
         <span class="token class-name">BoundListOperations</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">,</span> <span class="token class-name">Object</span><span class="token punctuation">&gt;</span></span> boundValueOperations <span class="token operator">=</span> redisTemplate<span class="token punctuation">.</span><span class="token function">boundListOps</span><span class="token punctuation">(</span>listKey<span class="token punctuation">)</span><span class="token punctuation">;</span>
         <span class="token comment">//查询数据</span>
         <span class="token keyword">return</span> boundValueOperations<span class="token punctuation">.</span><span class="token function">range</span><span class="token punctuation">(</span>start<span class="token punctuation">,</span> end<span class="token punctuation">)</span><span class="token punctuation">;</span>
     <span class="token punctuation">}</span>
     <span class="token doc-comment comment">/**
      * 弹出右边的值 --- 并且移除这个值
      * <span class="token keyword">@param</span> <span class="token parameter">listKey</span>
      */</span>
     <span class="token keyword">public</span> <span class="token class-name">Object</span> <span class="token function">rifhtPop</span><span class="token punctuation">(</span><span class="token class-name">String</span> listKey<span class="token punctuation">)</span><span class="token punctuation">{</span>
         <span class="token comment">//绑定操作</span>
         <span class="token class-name">BoundListOperations</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">,</span> <span class="token class-name">Object</span><span class="token punctuation">&gt;</span></span> boundValueOperations <span class="token operator">=</span> redisTemplate<span class="token punctuation">.</span><span class="token function">boundListOps</span><span class="token punctuation">(</span>listKey<span class="token punctuation">)</span><span class="token punctuation">;</span>
         <span class="token keyword">return</span> boundValueOperations<span class="token punctuation">.</span><span class="token function">rightPop</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
     <span class="token punctuation">}</span>

     <span class="token comment">//=========BoundListOperations 用法 End============</span>

 <span class="token punctuation">}</span>

</code></pre></div>`,19),e=[o];function c(l,u){return s(),a("div",null,e)}const i=n(t,[["render",c],["__file","redis_java.html.vue"]]);export{i as default};
